/**
 * ExamHub.pk — record importers (guides, subjects, exams, blog)
 *
 * These collections are "one record = one whole document", so they share one
 * runner driven by the field specs below. MCQs have their own importer because
 * a record there is a single question that must merge into an existing set.
 */

import path from 'path';
import {
  BLOG_DIR,
  EXAMS_DIR,
  GUIDES_DIR,
  SUBJECTS_DIR,
  argValue,
  clean,
  flag,
  loadIntake,
  mapRow,
  rel,
  splitList,
  slugify,
  today,
  tryReadMarkdown,
  writeMarkdown,
} from './lib/cms.js';

const yes = (v) => ['true', '1', 'yes', 'y'].includes(String(v ?? '').trim().toLowerCase());

/** "CSS:10|English:15" -> [{label, value}] ; also accepts "CSS=10;English=15". */
function parsePairs(value) {
  if (Array.isArray(value)) return value;
  return String(value ?? '')
    .split(/[;|]/)
    .map((piece) => piece.split(/[:=]/).map(clean))
    .filter(([a, b]) => a && b)
    .map(([label, v]) => ({ label, value: v }));
}

/** "Geography:geography:25|History:history:30" -> subtopic objects */
function parseSubtopics(value) {
  if (Array.isArray(value)) {
    return value.map((st) => ({
      name: clean(st.name),
      slug: slugify(st.slug || st.name),
      questionCount: Number(st.questionCount) || 0,
    }));
  }
  return String(value ?? '')
    .split('|')
    .map((piece) => piece.split(':').map(clean))
    .filter(([name, slug]) => name && slug)
    .map(([name, slug, count]) => ({ name, slug: slugify(slug), questionCount: Number(count) || 0 }));
}

export const SPECS = {
  guides: {
    dir: GUIDES_DIR,
    label: 'guide',
    idField: 'slug',
    fields: {
      title: { aliases: ['name', 'headtitle'], required: true },
      description: { aliases: ['summary', 'excerpt', 'metadescription'], required: true },
      author: { aliases: ['writtenby'], default: 'ExamHub Academic Editorial Board' },
      authorRole: { aliases: ['role'], default: 'Senior Competitive Exam Mentor' },
      category: { aliases: ['type'], required: true },
      readingTime: { aliases: ['readtime'], default: '8 min read' },
      featured: { aliases: ['istfeatured'], parse: yes, default: false },
      targetExams: { aliases: ['exams', 'exam'], parse: splitList },
      tags: { aliases: ['keyword'], parse: splitList },
      content: { aliases: ['body', 'markdown', 'text'], required: true, raw: true },
    },
    build(data) {
      return {
        title: data.title,
        description: data.description,
        author: data.author,
        authorRole: data.authorRole,
        publishDate: today(),
        updatedDate: today(),
        readingTime: data.readingTime,
        category: data.category,
        targetExams: data.targetExams.length ? data.targetExams : ['PPSC', 'FPSC', 'CSS', 'PMS'],
        tags: data.tags,
        featured: data.featured,
      };
    },
    validate: (d, e) => {
      if (String(d.content).length < 100) e.push(`"${d.slug}": content is only ${String(d.content).length} characters (minimum 100 — thin guides hurt SEO)`);
      if (!d.tags.length) e.push(`"${d.slug}": no tags`);
    },
  },

  subjects: {
    dir: SUBJECTS_DIR,
    label: 'subject',
    idField: 'slug',
    fields: {
      title: { aliases: ['name', 'subjectname'], required: true },
      description: { aliases: ['summary'], required: true },
      icon: { aliases: ['emoji'], default: 'book' },
      syllabusWeightage: { aliases: ['weightage', 'weight'], default: 'Review recommended' },
      relatedExams: { aliases: ['exams', 'exam'], parse: splitList },
      subtopics: { aliases: ['topics'], parse: parseSubtopics },
      content: { aliases: ['body', 'overview', 'markdown'], required: true, raw: true },
    },
    build(data) {
      return {
        title: data.title,
        description: data.description,
        icon: data.icon,
        updatedDate: today(),
        syllabusWeightage: data.syllabusWeightage,
        relatedExams: data.relatedExams.length ? data.relatedExams : ['PPSC', 'FPSC', 'NTS'],
        subtopics: data.subtopics,
      };
    },
    validate: (d, e) => {
      if (String(d.content).length < 100) e.push(`"${d.slug}": overview content is very short (${String(d.content).length} characters)`);
      for (const st of d.subtopics) {
        if (!Number.isFinite(st.questionCount)) e.push(`"${d.slug}": subtopic "${st.slug}" needs a numeric questionCount`);
      }
    },
  },

  exams: {
    dir: EXAMS_DIR,
    label: 'exam',
    idField: 'slug',
    fields: {
      title: { aliases: ['shorttitle', 'name'], required: true },
      fullName: { aliases: ['fullname', 'completeName'], required: true },
      description: { aliases: ['summary'], required: true },
      conductingBody: { aliases: ['body', 'conductedby'], required: true },
      frequency: { aliases: ['schedule'], default: 'Annually' },
      eligibility: { aliases: ['criteria', 'requirement'], required: true },
      examFormat: { aliases: ['format', 'pattern'], required: true },
      featuredSubjects: { aliases: ['subjects'], parse: splitList },
      keyStats: { aliases: ['stats'], parse: parsePairs },
      content: { aliases: ['body', 'markdown'], raw: true },
    },
    build(data) {
      return {
        title: data.title,
        fullName: data.fullName,
        description: data.description,
        conductingBody: data.conductingBody,
        frequency: data.frequency,
        eligibility: data.eligibility,
        examFormat: data.examFormat,
        updatedDate: today(),
        featuredSubjects: data.featuredSubjects,
        keyStats: data.keyStats,
      };
    },
    validate: (d, e) => {
      if (!d.keyStats.length) e.push(`"${d.slug}": no keyStats (label/value pairs shown on the exam page)`);
      if (!d.featuredSubjects.length) e.push(`"${d.slug}": no featuredSubjects`);
    },
  },

  blog: {
    dir: BLOG_DIR,
    label: 'blog post',
    idField: 'slug',
    fields: {
      title: { aliases: ['name', 'headtitle'], required: true },
      description: { aliases: ['summary', 'excerpt'], required: true },
      author: { aliases: ['writtenby'], default: 'ExamHub Editorial Team' },
      category: { aliases: ['type'], required: true },
      tags: { aliases: ['keyword'], parse: splitList },
      content: { aliases: ['body', 'markdown', 'text'], required: true, raw: true },
    },
    build(data) {
      return {
        title: data.title,
        description: data.description,
        author: data.author,
        publishDate: today(),
        updatedDate: today(),
        tags: data.tags,
        category: data.category,
      };
    },
    validate: (d, e) => {
      if (String(d.content).length < 200) e.push(`"${d.slug}": post body is very short (${String(d.content).length} characters)`);
    },
  },
};

function normalize(raw, spec) {
  const aliases = {};
  for (const [field, def] of Object.entries(spec.fields)) {
    if (def.aliases) aliases[field] = [field, ...def.aliases];
  }
  const row = mapRow(raw, aliases);

  const out = { slug: slugify(row[spec.idField] ?? row.slug ?? row.title ?? row.name) };
  for (const [field, def] of Object.entries(spec.fields)) {
    const value = row[field];
    if (def.raw) out[field] = String(value ?? '').replace(/\r\n/g, '\n').trim();
    else if (def.parse) out[field] = def.parse(value ?? def.default);
    else if (clean(value)) out[field] = clean(value);
    else out[field] = def.default ?? '';
  }
  out.__line = raw.__line;
  return out;
}

export async function runRecordImport(type, argv = process.argv.slice(2), { log = console.log } = {}) {
  const spec = SPECS[type];
  if (!spec) throw new Error(`Unknown content type "${type}"`);

  const intake = argv.find((a) => !a.startsWith('--'));
  if (!intake) return { ok: false, files: 0 };

  const dryRun = flag(argv, 'dry-run') || flag(argv, 'validate-only');
  const force = flag(argv, 'force') || flag(argv, 'replace');
  const globalDefault = argValue(argv, 'default'); // e.g. --default category="CSS Prep"

  const records = loadIntake(intake);
  if (records.length === 0) throw new Error(`${intake}: no records found`);

  const errors = [];
  const prepared = [];

  for (const raw of records) {
    const row = { ...raw };
    if (globalDefault) {
      const eq = globalDefault.indexOf('=');
      const key = globalDefault.slice(0, eq);
      const value = globalDefault.slice(eq + 1);
      if (key && value && !clean(row[key])) row[key] = value;
    }
    const data = normalize(row, spec);

    for (const [field, def] of Object.entries(spec.fields)) {
      if (def.required && (!data[field] || (Array.isArray(data[field]) && data[field].length === 0))) {
        errors.push(`row ${data.__line ?? '?'} ("${data.slug}"): missing required column "${field}"`);
      }
    }
    if (!data.slug) {
      errors.push(`row ${data.__line ?? '?'}: cannot derive a slug from "${spec.idField}"`);
      continue;
    }
    if (spec.validate) spec.validate(data, errors);
    prepared.push(data);
  }

  log(`📂 ${rel(path.resolve(intake))} — ${records.length} ${spec.label} record(s)`);

  if (errors.length) {
    log(`\n❌ ${errors.length} problem(s) found — nothing was written:`);
    [...new Set(errors)].slice(0, 40).forEach((e) => log(`   • ${e}`));
    return { ok: false, files: 0, errors };
  }
  log('✅ All records valid');

  let written = 0;
  let skipped = 0;
  for (const data of prepared) {
    const file = path.join(spec.dir, `${data.slug}.md`);
    const exists = tryReadMarkdown(file);
    if (exists && !force) {
      log(`   ⏭  ${rel(file)} exists — use --force to overwrite`);
      skipped += 1;
      continue;
    }
    const body = data.content || `## ${data.title}\n\n${data.description}`;
    const frontmatter = spec.build(data);

    if (dryRun) {
      log(`   🔎 would write ${rel(file)}`);
      written += 1;
      continue;
    }
    writeMarkdown(file, frontmatter, body);
    log(`   ✅ ${rel(file)}`);
    written += 1;
  }

  log(`\n✅ ${written} ${spec.label} file(s) written${skipped ? `, ${skipped} skipped` : ''}`);
  if (!dryRun) log(`\nNext:  npm run cms doctor    npm run build`);
  return { ok: true, files: written, skipped };
}

export function recordUsage(type) {
  const spec = SPECS[type];
  const cols = Object.entries(spec.fields).map(([name, def]) => {
    const kind = def.parse === splitList || def.parse === parseSubtopics || def.parse === parsePairs ? 'list' : 'text';
    return `  ${name.padEnd(18)} ${def.required ? 'required' : 'optional'} (${kind})${def.aliases ? `  aliases: ${def.aliases.join(', ')}` : ''}`;
  });
  return `
ExamHub.pk — ${type} import

  npm run cms import ${type} <file> [options]

Formats: .csv .tsv .json .ndjson .yaml   (one record = ${spec.label} document)
Files are named from the "${spec.idField}" column and written to src/content/${type}/<slug>.md.
${spec.idField === 'slug' ? 'You may omit "slug" — it is generated from "title".' : ''}

Columns:
${cols.join('\n')}

Spreadsheet notes:
  - Wrap any cell containing a comma, quote or line break in double quotes; escape quotes by doubling them.
  - Multi-line "content" cells are fully supported, so you can author a whole guide in one Excel row.
  - Lists are semicolon separated ("PPSC;FPSC;NTS").

Options:
  --dry-run          Validate and report without writing
  --force            Overwrite a file if it already exists (default: skip it)
  --replace          Same as --force

Examples:
  npm run cms import guides my-guides.csv --dry-run
  npm run cms import subjects new-subjects.csv
  npm run cms import blog posts.json
`;
}
