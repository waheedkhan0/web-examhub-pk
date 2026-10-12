/**
 * ExamHub.pk — MCQ bulk import
 *
 * Reads MCQs from CSV, TSV, JSON, NDJSON or YAML and writes them into
 * src/content/mcqs/<subject>/<topic>.md.
 *
 * The old importer overwrote the whole topic file on every run, silently
 * deleting questions that were already there. This one merges by default:
 * existing questions are kept, new ones are appended, and duplicates are
 * detected by comparing normalised question text.
 */

import path from 'path';
import {
  MCQS_DIR,
  DIFFICULTIES,
  argValue,
  clean,
  ensureDir,
  flag,
  loadIntake,
  mapRow,
  normalizeForCompare,
  rel,
  slugify,
  splitList,
  subjectDisplayName,
  subjectRegistry,
  titleize,
  today,
  truncate,
  tryReadMarkdown,
  writeMarkdown,
} from './lib/cms.js';
import { ensureSubjectFor, syncSubjectTopics } from './lib/library.js';

/* ------------------------------------------------------------------ *
 * Field mapping
 * ------------------------------------------------------------------ */

const HEADER_ALIASES = {
  subject: ['subjectslug', 'subject_slug', 'category', 'course'],
  topic: ['topicslug', 'topic_slug', 'set', 'topicid'],
  topicName: ['topicname', 'topic_name', 'setname'],
  title: ['settitle', 'set_title', 'pagetitle'],
  description: ['setdescription', 'summary', 'intro'],
  question: ['questiontext', 'question_text', 'text', 'stem', 'mcq'],
  options: ['option', 'alloptions', 'choices'],
  option1: ['a', 'optiona', 'option_a', 'choice1'],
  option2: ['b', 'optionb', 'option_b', 'choice2'],
  option3: ['c', 'optionc', 'option_c', 'choice3'],
  option4: ['d', 'optiond', 'option_d', 'choice4'],
  option5: ['e', 'optione', 'option_e', 'choice5'],
  answer: ['correctanswer', 'correct_answer', 'answerkey', 'answer_index', 'correct', 'ans'],
  explanation: ['explanationtext', 'explanation_text', 'reason', 'rationale', 'detail'],
  keyConcept: ['keyconcept', 'key_concept', 'concept'],
  examTip: ['examtip', 'exam_tip', 'tip'],
  difficulty: ['leveldifficulty', 'level'],
  targetExams: ['targetexams', 'target_exams', 'exams', 'exam'],
  testedIn: ['testedin', 'tested_in', 'pastpapers', 'appearedin'],
};

/**
 * Resolve the answer index from whatever the sheet contains:
 *   1-4 (default, spreadsheet friendly) | 0-3 | "A".."E" | the option text itself
 */
function resolveAnswer(raw, options) {
  const value = clean(raw);
  if (!value) return null;

  const asNumber = Number(value);
  if (!Number.isNaN(asNumber)) {
    if (Number.isInteger(asNumber) && asNumber >= 1 && asNumber <= options.length) return asNumber - 1;
    if (Number.isInteger(asNumber) && asNumber >= 0 && asNumber < options.length) return asNumber;
    return null;
  }

  const letter = value.toUpperCase().replace(/[).\-]$/, '');
  if (/^[A-E]$/.test(letter)) {
    const idx = letter.charCodeAt(0) - 65;
    return idx < options.length ? idx : null;
  }

  const byText = options.findIndex((o) => normalizeForCompare(o) === normalizeForCompare(value));
  return byText === -1 ? null : byText;
}

function readOptions(row) {
  // JSON intake usually gives a real array; CSV usually gives a packed string.
  if (Array.isArray(row.options)) {
    const parts = row.options.map((o) => clean(o)).filter(Boolean);
    if (parts.length >= 2) return parts;
  }
  const packed = clean(row.options);
  if (packed) {
    const parts = String(packed).split('|').map((o) => clean(o)).filter(Boolean);
    if (parts.length >= 2) return parts;
  }
  return ['option1', 'option2', 'option3', 'option4', 'option5']
    .map((k) => clean(row[k]))
    .filter(Boolean);
}

/**
 * Accept two shapes:
 *   flat   — one record per question (typical CSV row)
 *   nested — one record per topic with a questions[] array (typical JSON/YAML file)
 * Nested records carry their metadata down to each question, so an author writes
 * title/description/exams once instead of on every row.
 */
export function expandBatches(records) {
  const out = [];
  for (const record of records) {
    const nested = record.questions ?? record.mcqs ?? record.items;
    if (!Array.isArray(nested)) {
      out.push(record);
      continue;
    }
    const { questions: _ignored, mcqs: _ignored2, items: _ignored3, ...topicMeta } = record;
    for (const question of nested) {
      out.push({ ...topicMeta, ...question, __line: question.__line ?? record.__line });
    }
  }
  return out;
}

function normalizeRow(raw) {
  const row = mapRow(raw, HEADER_ALIASES);
  const subject = slugify(row.subject);
  const topic = slugify(row.topic);
  const options = readOptions(row);
  const answer = resolveAnswer(row.answer, options);

  return {
    subject,
    topic,
    topicName: clean(row.topicName),
    title: clean(row.title),
    description: clean(row.description),
    question: clean(row.question),
    options,
    answerRaw: clean(row.answer),
    answer,
    explanation: clean(row.explanation),
    keyConcept: clean(row.keyConcept),
    examTip: clean(row.examTip),
    difficulty: clean(row.difficulty),
    targetExams: splitList(row.targetExams),
    testedIn: splitList(row.testedIn),
    line: raw.__line,
  };
}

/* ------------------------------------------------------------------ *
 * Validation
 * ------------------------------------------------------------------ */

function validate(mcq) {
  const errors = [];
  const where = mcq.line ? `row ${mcq.line}` : 'record';

  if (!mcq.subject) errors.push(`${where}: missing "subject"`);
  if (!mcq.topic) errors.push(`${where}: missing "topic"`);
  if (!mcq.question) errors.push(`${where}: missing "question"`);
  if (mcq.options.length < 2) {
    errors.push(`${where}: needs at least 2 options (found ${mcq.options.length})`);
  } else if (mcq.options.length > 5) {
    errors.push(`${where}: too many options (${mcq.options.length}); maximum is 5`);
  }
  if (mcq.options.length >= 2 && mcq.answer === null) {
    errors.push(`${where}: answer "${truncate(mcq.answerRaw, 40)}" is not a valid option (use 1-${mcq.options.length}, A-${String.fromCharCode(64 + mcq.options.length)}, or the option text)`);
  }
  if (mcq.options.length >= 2 && mcq.answer !== null) {
    const dupes = mcq.options.filter((o, i) => mcq.options.findIndex((x) => normalizeForCompare(x) === normalizeForCompare(o)) !== i);
    if (dupes.length) errors.push(`${where}: duplicate options ("${truncate(dupes[0], 40)}")`);
  }
  if (!mcq.explanation) errors.push(`${where}: missing "explanation" — every answer needs a rationale`);
  if (mcq.difficulty && !DIFFICULTIES.includes(mcq.difficulty)) {
    errors.push(`${where}: difficulty must be one of ${DIFFICULTIES.join(', ')}`);
  }
  if (mcq.difficulty) {
    const match = DIFFICULTIES.find((d) => d.toLowerCase() === mcq.difficulty.toLowerCase());
    if (match && match !== mcq.difficulty) mcq.difficulty = match; // accept "basic" / "exam level"
  }
  return errors;
}

/* ------------------------------------------------------------------ *
 * Grouping + merge
 * ------------------------------------------------------------------ */

function group(mcqs) {
  const groups = new Map();
  for (const mcq of mcqs) {
    const key = `${mcq.subject}/${mcq.topic}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(mcq);
  }
  return groups;
}

/** Build the frontmatter object for one MCQ set file. */
function buildSet({ subject, topic, rows, existing, registry, difficultyFallback, targetExamsFallback }) {
  const first = rows[0];
  const existingQuestions = existing ? existing.data.questions || [] : [];

  // Preserve existing question bodies byte-for-byte; only touch what we add.
  const questions = existingQuestions.map((q, i) => ({ ...q, id: i + 1 }));
  const seen = new Set(questions.map((q) => normalizeForCompare(q.question)));

  let added = 0;
  const skipped = [];
  for (const row of rows) {
    const key = normalizeForCompare(row.question);
    if (seen.has(key)) {
      skipped.push(row.question);
      continue;
    }
    seen.add(key);
    questions.push({
      id: questions.length + 1,
      question: row.question,
      options: row.options,
      answer: row.answer,
      explanation: row.explanation,
      ...(row.keyConcept ? { keyConcept: row.keyConcept } : {}),
      ...(row.examTip ? { examTip: row.examTip } : {}),
      ...(row.testedIn.length ? { testedIn: row.testedIn } : {}),
    });
    added += 1;
  }

  const setTitle =
    first.title ||
    (existing?.data.title && existing.data.title !== 'undefined' ? existing.data.title : null) ||
    `${titleize(topic)} MCQs`;

  const description =
    first.description ||
    (existing?.data.description && existing.data.description !== 'undefined'
      ? existing.data.description
      : `${questions.length} practice MCQs on ${titleize(topic)} with detailed explanations, prepared for Pakistani competitive exams.`);

  const examTags = [...new Set(rows.flatMap((r) => r.targetExams))];

  const data = {
    title: setTitle,
    description,
    subject,
    subjectName: subjectDisplayName(registry, subject, existing?.data.subjectName),
    topic,
    topicName: first.topicName || existing?.data.topicName || titleize(topic),
    author: existing?.data.author || 'ExamHub Academic Editorial Board',
    updatedDate: today(),
    difficulty:
      first.difficulty ||
      existing?.data.difficulty ||
      difficultyFallback ||
      'Exam-Level',
    targetExams: examTags.length
      ? examTags
      : existing?.data.targetExams?.length
        ? existing.data.targetExams
        : targetExamsFallback || ['PPSC', 'FPSC', 'NTS'],
    questions,
  };

  // Keep the editorial body; append an "Overview" only when there is nothing.
  let body = existing ? (existing.body || '').trim() : '';
  if (!body) {
    body = `## About this set\n\n${description}`;
  }

  return { data, body, added, existingCount: existingQuestions.length, total: questions.length, skipped };
}

/* ------------------------------------------------------------------ *
 * Command
 * ------------------------------------------------------------------ */

export async function run(argv = process.argv.slice(2), { log = console.log } = {}) {
  const intake = argv.find((a) => !a.startsWith('--'));
  if (!intake) {
    log(usage());
    return { ok: false, files: 0 };
  }

  const validateOnly = flag(argv, 'validate-only') || flag(argv, 'dry-run');
  const replace = flag(argv, 'replace');
  const noSubject = flag(argv, 'no-subject');
  const globalDifficulty = argValue(argv, 'difficulty');
  const globalExams = splitList(argValue(argv, 'exams'));

  const rows = expandBatches(loadIntake(intake)).map(normalizeRow);
  if (rows.length === 0) throw new Error(`${intake}: no records found`);

  const registry = subjectRegistry();

  const errors = [];
  rows.forEach((row) => {
    validate(row).forEach((e) => errors.push(e));
  });

  log(`📂 ${rel(path.resolve(intake))} — ${rows.length} MCQ row(s)`);

  if (errors.length) {
    log(`\n❌ ${errors.length} problem(s) found — nothing was written:`);
    errors.slice(0, 40).forEach((e) => log(`   • ${e}`));
    if (errors.length > 40) log(`   … and ${errors.length - 40} more`);
    return { ok: false, files: 0, errors };
  }
  log('✅ All rows valid');

  const groups = group(rows);
  const report = { added: 0, existing: 0, skipped: 0, files: 0, subjectsCreated: [], topicsSynced: [] };

  if (validateOnly) {
    log(`\n🔎 Dry run — would write ${groups.size} file(s):`);
    for (const [key, list] of groups) {
      const [subject, topic] = key.split('/');
      const file = path.join(MCQS_DIR, subject, `${topic}.md`);
      const existing = tryReadMarkdown(file);
      const total = (replace ? 0 : existing?.data.questions?.length || 0) + list.length;
      log(`   ${rel(file)}  (+${list.length} new → ${total} total)`);
      if (!registry.has(subject)) log(`     ↳ would create subject page subjects/${subject}.md`);
    }
    return { ok: true, files: groups.size, report };
  }

  ensureDir(MCQS_DIR);

  for (const [key, list] of groups) {
    const [subject, topic] = key.split('/');
    const file = path.join(MCQS_DIR, subject, `${topic}.md`);
    const existing = replace ? null : tryReadMarkdown(file);

    const result = buildSet({
      subject,
      topic,
      rows: list,
      existing,
      registry,
      difficultyFallback: globalDifficulty,
      targetExamsFallback: globalExams,
    });

    writeMarkdown(file, result.data, result.body);
    report.files += 1;
    report.added += result.added;
    report.existing += result.existingCount;
    report.skipped += result.skipped.length;

    const note = result.existingCount
      ? `${result.existingCount} kept + ${result.added} new = ${result.total}`
      : `${result.added} questions`;
    const dupe = result.skipped.length ? `  (${result.skipped.length} duplicate ignored)` : '';
    log(`   ✅ ${rel(file)} — ${note}${dupe}`);

    if (!noSubject) {
      const created = ensureSubjectFor(subject, registry);
      if (created) report.subjectsCreated.push(subject);
      syncSubjectTopics(subject, registry);
      report.topicsSynced.push(`${subject}/${topic}`);
    }
  }

  log(`\n✅ ${report.files} file(s) · ${report.added} question(s) added` +
    (report.existing ? `, ${report.existing} pre-existing kept` : '') +
    (report.skipped ? `, ${report.skipped} duplicate(s) skipped` : ''));
  if (report.subjectsCreated.length) {
    log(`🆕 Created subject pages: ${report.subjectsCreated.join(', ')} — fill in the syllabus overview`);
  }

  log('\nNext:  npm run cms doctor    npm run build');
  return { ok: true, files: report.files, report };
}

export function usage() {
  return `
ExamHub.pk — MCQ import

  npm run cms import mcqs <file> [options]     (also: npm run cms:import-mcqs -- <file>)

Formats (auto-detected by extension):
  .csv .tsv        one question per row
  .json .ndjson    array of question objects (or {"mcqs": [...]})
  .yaml .yml       list of question objects

MCQ CSV columns — only subject, topic, question, options and explanation are required:
  subject,topic,question,options,option1..option5,answer,explanation,keyConcept,examTip,difficulty,targetExams,testedIn,title,description,topicName

  options      a single column is often easier than four: "Paris|London|Berlin|Madrid"
  answer       accepts 1-4 (default), 0-3, A-D, or the option text itself
  targetExams  semicolon separated: "PPSC;FPSC;NTS"
  difficulty   Basic | Intermediate | Advanced | Exam-Level
  title/description  optional per-topic page metadata (defaults are generated)

Options:
  --dry-run          Validate and show what would change; write nothing
  --validate-only    Same as --dry-run
  --replace          Replace existing sets instead of merging into them
  --no-subject       Do not create or update the matching subject page
  --difficulty X     Default difficulty for rows that omit it
  --exams "A;B"      Default target exams for rows that omit them

Behaviour:
  Existing questions are preserved and new ones appended; questions whose text
  already exists in the target set are skipped as duplicates.

Examples:
  npm run cms import mcqs samples/mcqs-sample.csv
  npm run cms import mcqs new-batch.csv --dry-run
  npm run cms import mcqs batch.json --exams "PPSC;FPSC"
`;
}

export const meta = {
  name: 'mcqs',
  description: 'Import MCQs from CSV/TSV/JSON/NDJSON/YAML into src/content/mcqs',
  usage,
  run,
};
