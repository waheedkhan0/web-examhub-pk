#!/usr/bin/env node

/**
 * ExamHub.pk — content management CLI
 *
 *   npm run cms                      help
 *   npm run cms stats                what is on the site right now
 *   npm run cms template mcqs        start a spreadsheet for a bulk batch
 *   npm run cms import mcqs batch.csv
 *   npm run cms export mcqs          dump everything back out to CSV/JSON
 *   npm run cms doctor --fix         reconcile subject pages, counts, names
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  ROOT,
  readMarkdown,
  rel,
  stringifyCsv,
  titleize,
  truncate,
} from './lib/cms.js';
import {
  audit,
  balanceAnswerKeys,
  findLetterReferences,
  mcqSets,
  syncAllSubjects,
} from './lib/library.js';
import { runRecordImport, recordUsage, SPECS } from './import-records.js';
import * as mcqImport from './import-mcqs.js';
import * as mcqExpand from './expand-mcqs.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SAMPLES_DIR = path.join(ROOT, 'samples');
const IMPORTERS = { mcqs: mcqImport, ...Object.fromEntries(Object.keys(SPECS).map((k) => [k, { run: (argv) => runRecordImport(k, argv), usage: () => recordUsage(k) }])) };

/* ------------------------------------------------------------------ *
 * stats
 * ------------------------------------------------------------------ */

function stats() {
  console.log('\n📊 Content statistics\n');
  console.log(`  ${'TYPE'.padEnd(12)} ${'PAGES'.padEnd(8)} ${'QUESTIONS'.padEnd(10)} NOTES`);
  console.log(`  ${'-'.repeat(72)}`);

  const { sets, broken } = mcqSets();
  const bySubject = new Map();
  for (const s of sets) {
    const rec = bySubject.get(s.subject) || { sets: 0, q: 0 };
    rec.sets += 1;
    rec.q += s.questions.length;
    bySubject.set(s.subject, rec);
  }

  for (const [type, dir] of Object.entries({ guides: 'guides', subjects: 'subjects', exams: 'exams', blog: 'blog' })) {
    const count = listMd(dir).length;
    console.log(`  ${type.toUpperCase().padEnd(12)} ${String(count).padEnd(8)} ${'-'.padEnd(10)}`);
  }

  console.log(`  ${'MCQ SETS'.padEnd(12)} ${String(sets.length).padEnd(8)} ${String(sets.reduce((n, s) => n + s.questions.length, 0)).padEnd(10)}`);
  console.log('\n  Per subject:');
  for (const [slug, rec] of [...bySubject.entries()].sort((a, b) => b[1].q - a[1].q)) {
    const declared = listMd('subjects').includes(path.join(ROOT, 'src/content/subjects', `${slug}.md`));
    console.log(`    ${titleize(slug).padEnd(26)} ${String(rec.q).padStart(4)} Q in ${String(rec.sets).padStart(2)} set(s)${declared ? '' : '   ⚠ no subject page'}`);
  }

  const emptySubjects = listMd('subjects')
    .map((f) => path.basename(f, '.md'))
    .filter((slug) => !bySubject.has(slug));
  if (emptySubjects.length) {
    console.log(`\n  ⚠ Subjects with no MCQ sets yet: ${emptySubjects.map(titleize).join(', ')}`);
  }
  if (broken.length) {
    console.log(`\n  ❌ ${broken.length} MCQ file(s) have unreadable frontmatter: ${broken.map(rel).join(', ')}`);
  }
  console.log('');
}

function listMd(type) {
  const dir = path.join(ROOT, 'src/content', type);
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listMdAt(full));
    else if (entry.name.endsWith('.md')) out.push(full);
  }
  return out.sort();
}
function listMdAt(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listMdAt(full));
    else if (entry.name.endsWith('.md')) out.push(full);
  }
  return out;
}

/* ------------------------------------------------------------------ *
 * validate
 * ------------------------------------------------------------------ */

function validate(type = 'mcqs') {
  console.log(`\n✅ Validating ${type}...\n`);
  let failures = 0;

  if (type === 'mcqs' || type === 'all') {
    const { problems } = audit();
    if (problems.length === 0) {
      console.log('   ✅ MCQ sets: all schema, answer-index and duplicate checks pass');
    } else {
      failures += problems.length;
      for (const p of problems) {
        console.log(`   ❌ [${p.kind}] ${p.where}: ${p.msg}`);
      }
    }
  }

  const docTypes = type === 'all' || type === 'mcqs' ? Object.keys(SPECS) : [type];
  for (const t of docTypes) {
    if (!SPECS[t]) continue;
    const spec = SPECS[t];
    const files = listMd(t);
    let clean = true;
    for (const file of files) {
      const doc = readMarkdownSafe(file);
      if (!doc) {
        failures += 1;
        clean = false;
        continue;
      }
      for (const [field, def] of Object.entries(spec.fields)) {
        if (!def.required) continue;
        // Imported documents store body markdown as the file body, not frontmatter.
        if (field === 'content') {
          if (!doc.body || doc.body.trim().length < 100) {
            console.log(`   ⚠️  ${rel(file)}: body is very short (${doc.body.trim().length} characters)`);
          }
          continue;
        }
        const value = doc.data[field];
        if (value === undefined || value === null || value === '' || String(value).toLowerCase() === 'undefined') {
          console.log(`   ❌ ${rel(file)}: required field "${field}" is missing`);
          failures += 1;
          clean = false;
        }
      }
      if (String(doc.data.title).toLowerCase() === 'undefined') {
        console.log(`   ❌ ${rel(file)}: title is literally "undefined"`);
        failures += 1;
        clean = false;
      }
    }
    if (clean && files.length) console.log(`   ✅ ${t}: ${files.length} file(s) pass`);
    if (!files.length) console.log(`   ℹ️  ${t}: no files`);
  }

  console.log(failures ? `\n⚠️  ${failures} issue(s)\n` : '\n🎉 Content is valid\n');
  process.exitCode = failures ? 1 : 0;
}

function readMarkdownSafe(file) {
  try {
    return readMarkdown(file);
  } catch (e) {
    console.log(`   ❌ ${e.message}`);
    return null;
  }
}

/* ------------------------------------------------------------------ *
 * doctor
 * ------------------------------------------------------------------ */

function doctor(argv) {
  const fix = argv.includes('--fix');
  console.log(fix ? '\n🩺 Doctor — auditing and fixing\n' : '\n🩺 Doctor — auditing (use --fix to repair)\n');

  const { problems, notes, stats: st } = audit();

  if (!problems.length) console.log('   ✅ No structural problems found');
  for (const p of problems) console.log(`   [${p.kind}] ${p.where}\n        ${p.msg}`);
  if (notes.length) {
    console.log('\n   Content gaps (these need MCQs, not fixes):');
    for (const n of notes.slice(0, 25)) console.log(`   • ${n.where}: ${n.msg}`);
    if (notes.length > 25) console.log(`   … and ${notes.length - 25} more`);
  }

  console.log(`\n   ${st.subjectPages} subject pages · ${st.mcqSets} MCQ sets · ${st.totalQuestions} questions\n`);

  if (!fix) {
    if (problems.length) console.log('   Run `npm run cms doctor --fix` to repair name/orphan/count issues.\n');
    return;
  }

  const result = syncAllSubjects();
  if (result.created.length) console.log(`   🆕 created subject pages: ${result.created.join(', ')}`);
  if (result.synced.length) console.log(`   🔄 synced topic counts: ${result.synced.join(', ')}`);
  if (result.repaired.length) console.log(`   🔧 repaired subjectName: ${result.repaired.join(', ')}`);

  // Rebalance lopsided answer keys, but only if no explanation names an option by
  // letter — reordering would otherwise invalidate that text.
  const letterRefs = findLetterReferences();
  if (letterRefs.length) {
    console.log(`\n   ⚠ skipped answer-key rebalancing: ${letterRefs.length} explanation(s) refer to an option by letter:`);
    letterRefs.slice(0, 5).forEach((h) => console.log(`     • ${h.where}: ${truncate(h.text, 80)}`));
  } else {
    const balanced = balanceAnswerKeys({ dryRun: false });
    for (const c of balanced.changed) {
      console.log(`   ⚖ rebalanced ${c.key}: was ${c.before} → now ${c.after}`);
    }
    if (!balanced.changed.length) console.log('   ⚖ all answer keys already balanced');
  }

  if (!result.created.length && !result.synced.length && !result.repaired.length) {
    console.log('   nothing else to repair — names and counts are consistent');
  }

  const after = audit();
  const remaining = after.problems.filter((p) => !['empty', 'dupe', 'answer', 'schema', 'id', 'frontmatter'].includes(p.kind));
  console.log(`\n   ${after.problems.length} problem(s) remain (${remaining.length} link/name related)\n`);
}

/* ------------------------------------------------------------------ *
 * export
 * ------------------------------------------------------------------ */

const MCQ_COLUMNS = [
  'subject', 'topic', 'topicName', 'title', 'description', 'difficulty', 'targetExams',
  'question', 'options', 'answer', 'explanation', 'keyConcept', 'examTip', 'testedIn',
];

/** Flatten every stored MCQ back into spreadsheet rows — the round-trip half of bulk editing. */
function exportMcqs(argv) {
  const format = (argv.find((a) => a.startsWith('--format=')) || '--format=csv').split('=')[1];
  const subjectFilter = (argv.find((a) => a.startsWith('--subject=')) || '').split('=')[1];
  const outArg = (argv.find((a) => a.startsWith('--out=')) || '').split('=')[1];
  const answers = argv.includes('--answers-0-based');

  const { sets } = mcqSets();
  const rows = [];
  for (const set of sets) {
    if (subjectFilter && set.subject !== subjectFilter) continue;
    for (const q of set.questions) {
      rows.push({
        subject: set.subject,
        topic: set.topic,
        topicName: set.data.topicName || titleize(set.topic),
        title: set.data.title,
        description: set.data.description,
        difficulty: set.data.difficulty,
        targetExams: (set.data.targetExams || []).join(';'),
        question: q.question,
        options: (q.options || []).join('|'),
        answer: answers ? q.answer : (q.answer ?? 0) + 1,
        explanation: q.explanation,
        keyConcept: q.keyConcept || '',
        examTip: q.examTip || '',
        testedIn: (q.testedIn || []).join(';'),
      });
    }
  }

  let text;
  let defaultName;
  if (format === 'json') {
    text = JSON.stringify(rows, null, 2);
    defaultName = 'mcqs-export.json';
  } else {
    text = stringifyCsv(rows, MCQ_COLUMNS);
    defaultName = 'mcqs-export.csv';
  }

  const target = path.resolve(outArg || path.join(SAMPLES_DIR, defaultName));
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, text, 'utf-8');

  console.log(`\n✅ Exported ${rows.length} MCQ(s) from ${new Set(rows.map((r) => r.subject + '/' + r.topic)).size} set(s)`);
  console.log(`   ${rel(target)}\n`);
  console.log('   Edit in Excel/Sheets (keep the header row) and re-import:');
  console.log(`   npm run cms import mcqs ${rel(target)}\n`);
  console.log('   Import merges into existing sets and skips unchanged questions,');
  console.log('   so re-importing an unedited export adds nothing.\n');
}

/* ------------------------------------------------------------------ *
 * template
 * ------------------------------------------------------------------ */

const TEMPLATES = {
  mcqs: {
    columns: MCQ_COLUMNS,
    rows: [
      {
        subject: 'general-knowledge', topic: 'world-capitals', topicName: 'World Capitals and Cities',
        title: 'World Capitals MCQs with Explanations',
        description: 'Practice MCQs on national capitals and the countries they belong to, with explanations.',
        difficulty: 'Exam-Level', targetExams: 'PPSC;FPSC;NTS',
        question: 'What is the capital city of Kazakhstan, which was renamed Astana for the second time in 2022?',
        options: 'Almaty|Astana|Tashkent|Bishkek', answer: '2',
        explanation: 'Astana has been the capital since 1997; it was renamed Nur-Sultan in 2019 and back to Astana in 2022. Almaty is the largest city but no longer the capital.',
        keyConcept: 'Kazakhstan: capital Astana, largest city Almaty',
        examTip: 'Examiners offer Almaty to catch candidates who equate "largest city" with "capital".',
        testedIn: 'PPSC;FPSC',
      },
      {
        subject: 'general-knowledge', topic: 'world-capitals', topicName: 'World Capitals and Cities',
        title: 'World Capitals MCQs with Explanations',
        description: 'Practice MCQs on national capitals and the countries they belong to, with explanations.',
        difficulty: 'Exam-Level', targetExams: 'PPSC;FPSC;NTS',
        question: 'Which of these is the capital of Canada?',
        options: 'Toronto|Vancouver|Ottawa|Montreal', answer: '3',
        explanation: 'Ottawa, in Ontario, was chosen as the capital by Queen Victoria in 1857. Toronto is Canada’s largest city but not its capital.',
        keyConcept: 'Commonly mistaken capitals: Canada-Ottawa, Australia-Canberra, USA-Washington DC',
        examTip: 'The largest-city trap applies to Canada, Australia, Brazil and the USA too.',
        testedIn: 'NTS',
      },
    ],
  },
  guides: {
    columns: ['slug', 'title', 'description', 'author', 'category', 'targetExams', 'tags', 'featured', 'readingTime', 'content'],
    rows: [{
      slug: '', title: 'How to Prepare for the PPSC MCQ Test',
      description: 'A practical plan covering syllabus scoping, negative marking, and revision cycles.',
      author: 'ExamHub Academic Editorial Board', category: 'PPSC Preparation',
      targetExams: 'PPSC', tags: 'PPSC;Strategy;MCQ', featured: 'true', readingTime: '10 min read',
      content: '# Heading\n\nBody markdown goes here. Quote this cell because it contains commas.\n\n## Section\n\n- point one\n- point two',
    }],
  },
  subjects: {
    columns: ['slug', 'title', 'description', 'syllabusWeightage', 'relatedExams', 'subtopics', 'icon', 'content'],
    rows: [{
      slug: '', title: 'Everyday Science', description: 'Physics, chemistry, biology and space topics tested in general ability papers.',
      syllabusWeightage: '10-15%', relatedExams: 'PPSC;FPSC;NTS;CSS',
      subtopics: 'Human Anatomy:human-anatomy:0|Physics and Solar System:physics-and-solar-system:0', icon: 'atom',
      content: '# Everyday Science\n\nOverview of what is tested and how to study it.',
    }],
  },
  exams: {
    columns: ['slug', 'title', 'fullName', 'description', 'conductingBody', 'frequency', 'eligibility', 'examFormat', 'featuredSubjects', 'keyStats', 'content'],
    rows: [{
      slug: '', title: 'NTS', fullName: 'National Testing Service', description: 'National testing for admissions and recruitment.',
      conductingBody: 'National Testing Service', frequency: 'Monthly', eligibility: 'Intermediate or above',
      examFormat: 'MCQ, 100 questions, 90 minutes', featuredSubjects: 'General Knowledge;English;Mathematics',
      keyStats: 'Total Marks:100|Duration:90 minutes|Negative Marking:No', content: '# NTS\n\nDetails.',
    }],
  },
  blog: {
    columns: ['slug', 'title', 'description', 'author', 'category', 'tags', 'content'],
    rows: [{
      slug: '', title: 'Pakistan Economic Survey 2025-26: Key Figures',
      description: 'The numbers most likely to appear in this year’s MCQ papers.',
      author: 'ExamHub Editorial Team', category: 'Current Affairs', tags: 'Economy;Current Affairs',
      content: '# Post body\n\nMarkdown content.',
    }],
  },
};

function template(type, argv) {
  const spec = TEMPLATES[type];
  if (!spec) {
    console.error(`\n❌ No template for "${type}". Available: ${Object.keys(TEMPLATES).join(', ')}\n`);
    process.exitCode = 1;
    return;
  }
  const outArg = (argv.find((a) => a.startsWith('--out=')) || '').split('=')[1];
  const asJson = argv.includes('--json');
  const target = path.resolve(outArg || path.join(SAMPLES_DIR, `${type}-template.${asJson ? 'json' : 'csv'}`));

  let text;
  if (asJson) {
    text = JSON.stringify(spec.rows, null, 2);
  } else {
    text = stringifyCsv(spec.rows, spec.columns);
  }
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, text, 'utf-8');

  console.log(`\n✅ ${type} template written to ${rel(target)}\n`);
  console.log('   Open it in Excel / Google Sheets, replace the example rows, then:');
  console.log(`   npm run cms import ${type} ${rel(target)} --dry-run`);
  console.log(`   npm run cms import ${type} ${rel(target)}\n`);
  if (type === 'mcqs') {
    console.log('   Column notes:');
    console.log('     options   pipe-separated, e.g. "Paris|London|Berlin|Madrid"');
    console.log('     answer    1-4, or A-D, or the correct option text');
    console.log('     *Exams    semicolon-separated, e.g. "PPSC;FPSC"');
    console.log('   Any cell with a comma or line break must be quoted — the importer handles standard CSV quoting.\n');
  }
}

/* ------------------------------------------------------------------ *
 * list
 * ------------------------------------------------------------------ */

function list(type = 'mcqs') {
  if (type === 'mcqs') {
    const { sets } = mcqSets();
    console.log('\n📋 MCQ sets\n');
    for (const s of sets.sort((a, b) => a.subject.localeCompare(b.subject) || a.topic.localeCompare(b.topic))) {
      console.log(`  ${`${s.subject}/${s.topic}`.padEnd(46)} ${String(s.questions.length).padStart(3)} Q   ${titleize(s.topic)}`);
    }
    console.log('');
    return;
  }
  console.log(`\n📋 ${type.toUpperCase()}\n`);
  for (const file of listMd(type)) {
    const doc = readMarkdownSafe(file);
    console.log(`  ${rel(file).padEnd(60)} ${doc?.data.title ? `— ${doc.data.title}` : ''}`);
  }
  console.log('');
}

/* ------------------------------------------------------------------ *
 * help
 * ------------------------------------------------------------------ */

function help() {
  console.log(`
╔══════════════════════════════════════════════════════════════╗
║            ExamHub.pk content management CLI                ║
╚══════════════════════════════════════════════════════════════╝

  npm run cms <command> [args]

BULK WORKFLOW
  cms template <type>            Write a starter CSV/JSON with correct headers
  cms import <type> <file>       Import rows into src/content (csv/tsv/json/ndjson/yaml)
  cms expand [options]           Import every CSV in "MCQs csv files/" (see --tier/--max-per-set)
  cms export mcqs                Dump every MCQ out to samples/mcqs-export.csv
  cms doctor [--fix]             Find and repair inconsistencies

INSPECTION
  cms stats                      Page and question counts
  cms validate [type]            Schema checks on stored content
  cms list [type]                List files (mcqs|guides|subjects|exams|blog)
  cms help                       This message

TYPES
  mcqs, guides, subjects, exams, blog

IMPORT OPTIONS
  --dry-run          Validate and print the plan; write nothing
  --force            Overwrite existing documents (guides/subjects/exams/blog)
  --replace          MCQs: replace a topic set instead of merging into it
  --no-subject       MCQs: do not create/update the matching subject page
  --difficulty X     MCQs: default difficulty when the column is empty
  --exams "A;B"      MCQs: default target exams when the column is empty

EXPORT OPTIONS
  --format=json      Export JSON instead of CSV
  --subject=slug     Export one subject only
  --out=<path>       Destination file
  --answers-0-based  Export answer indexes as 0-3 instead of 1-4

MCQ CSV COLUMNS
  subject, topic, question, options | option1..option4, answer, explanation,
  keyConcept, examTip, difficulty, targetExams, testedIn, title, description, topicName

  answer accepts 1-4 (default), 0-3, A-D, or the option text itself.
  Header names are matched case-insensitively: "Correct Answer", "correct_answer"
  and "correctAnswer" all work.

EXAMPLES
  npm run cms template mcqs
  npm run cms import mcqs my-new-questions.csv --dry-run
  npm run cms import mcqs my-new-questions.csv
  npm run cms doctor --fix
  npm run build
`);
}

/* ------------------------------------------------------------------ *
 * main
 * ------------------------------------------------------------------ */

export async function main(argv = process.argv.slice(2)) {
  const [command, ...rest] = argv;
  const type = rest[0];

  switch (command) {
    case undefined:
    case 'help':
    case '--help':
    case '-h':
      help();
      return;

    case 'import': {
      const importer = IMPORTERS[type];
      if (!importer) {
        console.error(`\n❌ Unknown content type "${type || ''}". Try: ${Object.keys(IMPORTERS).join(', ')}\n`);
        process.exitCode = 1;
        return;
      }
      const args = rest.slice(1);
      if (!args.find((a) => !a.startsWith('--'))) {
        console.log(importer.usage());
        return;
      }
      const result = await importer.run(args);
      if (!result?.ok) process.exitCode = 1;
      return;
    }

    case 'expand':
      return mcqExpand.run(rest);

    case 'export':
      if (type === 'mcqs') return exportMcqs(rest.slice(1));
      console.error(`\n❌ Export supports "mcqs" only for now.\n`);
      process.exitCode = 1;
      return;

    case 'template':
    case 'sample':
      if (!type) {
        console.error(`\n❌ Usage: cms template <${Object.keys(TEMPLATES).join('|')}> [--json]\n`);
        process.exitCode = 1;
        return;
      }
      return template(type, rest.slice(1));

    case 'stats':
    case 'count':
      return stats();

    case 'validate':
      return validate(type || 'mcqs');

    case 'doctor':
      return doctor(rest);

    case 'list':
      return list(type);

    default:
      console.error(`\n❌ Unknown command "${command}"\n`);
      help();
      process.exitCode = 1;
  }
}

const invokedDirectly = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (invokedDirectly) {
  main().catch((error) => {
    console.error(`\n❌ ${error.message}\n`);
    if (process.env.CMS_DEBUG) console.error(error.stack);
    process.exitCode = 1;
  });
}
