#!/usr/bin/env node
/**
 * ExamHub.pk — Direct CSV MCQ Importer CLI
 *
 * Usage:
 *   node scripts/import-csv.js path/to/file.csv --subject=pakistan-studies --topic=constitution
 *   node scripts/import-csv.js --dir="MCQs csv files"
 *   node scripts/import-csv.js --template
 */

import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');
const MCQS_DIR = path.join(ROOT, 'src/content/mcqs');

function clean(v) {
  return String(v ?? '').replace(/\s+/g, ' ').trim();
}

function slugify(v) {
  return String(v ?? '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’‘"]/g, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function titleize(slug) {
  return String(slug || '')
    .split('-')
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function normalizeForCompare(v) {
  return String(v ?? '')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/[.,;:!?”"'`()\[\]{}]/g, '')
    .trim();
}

function parseCsv(text) {
  const lines = [];
  let row = [''];
  let inQuotes = false;
  let i = 0;

  while (i < text.length) {
    const char = text[i];
    const next = text[i + 1];

    if (inQuotes) {
      if (char === '"' && next === '"') {
        row[row.length - 1] += '"';
        i += 2;
        continue;
      }
      if (char === '"') {
        inQuotes = false;
        i++;
        continue;
      }
      row[row.length - 1] += char;
      i++;
      continue;
    }

    if (char === '"') {
      inQuotes = true;
      i++;
      continue;
    }

    if (char === ',') {
      row.push('');
      i++;
      continue;
    }

    if (char === '\r' && next === '\n') {
      lines.push(row);
      row = [''];
      i += 2;
      continue;
    }

    if (char === '\n' || char === '\r') {
      lines.push(row);
      row = [''];
      i++;
      continue;
    }

    row[row.length - 1] += char;
    i++;
  }

  if (row.length > 1 || row[0] !== '') {
    lines.push(row);
  }

  if (lines.length === 0) return [];

  const headers = lines[0].map((h) => clean(h).replace(/^\uFEFF/, '').toLowerCase().replace(/[^a-z0-9]/g, ''));
  const records = [];

  for (let r = 1; r < lines.length; r++) {
    const cells = lines[r];
    if (cells.length === 1 && cells[0].trim() === '') continue;
    const item = {};
    headers.forEach((h, idx) => {
      item[h] = clean(cells[idx] || '');
    });
    records.push(item);
  }

  return records;
}

function resolveAnswer(val, options) {
  const v = clean(val);
  if (!v) return 0;

  const num = Number(v);
  if (!Number.isNaN(num)) {
    if (Number.isInteger(num) && num >= 1 && num <= options.length) return num - 1;
    if (Number.isInteger(num) && num >= 0 && num < options.length) return num;
  }

  const letter = v.toUpperCase().replace(/[).\-]$/, '');
  if (/^[A-E]$/.test(letter)) {
    const idx = letter.charCodeAt(0) - 65;
    if (idx < options.length) return idx;
  }

  const byText = options.findIndex((opt) => normalizeForCompare(opt) === normalizeForCompare(v));
  if (byText !== -1) return byText;

  return 0;
}

function importFile(filePath, forcedSubject, forcedTopic) {
  console.log(`\n📄 Processing file: ${filePath}`);
  const text = fs.readFileSync(filePath, 'utf-8');
  const rows = parseCsv(text);
  if (rows.length === 0) {
    console.log(`⚠️  No records found in ${filePath}`);
    return;
  }

  const grouped = new Map();

  for (const row of rows) {
    const subject = forcedSubject || slugify(row.subject || row.category || 'general-knowledge');
    const topic = forcedTopic || slugify(row.topic || row.topicslug || path.basename(filePath, path.extname(filePath)));
    const key = `${subject}/${topic}`;

    if (!grouped.has(key)) {
      grouped.set(key, { subject, topic, items: [] });
    }

    const question = clean(row.question || row.stem || row.mcq || row.q || '');
    if (!question) continue;

    let options = [];
    if (row.option1 || row.option2) {
      options = [row.option1, row.option2, row.option3, row.option4, row.option5].filter(Boolean);
    } else if (row.a || row.b) {
      options = [row.a, row.b, row.c, row.d, row.e].filter(Boolean);
    } else if (row.options) {
      options = row.options.split('|').map(clean).filter(Boolean);
    }

    if (options.length < 2) continue;

    const answer = resolveAnswer(row.answer || row.correctanswer || row.correct || row.ans, options);
    const explanation = clean(row.explanation || row.reason || row.rationale || 'Detailed worked solution.');
    const keyConcept = clean(row.keyconcept || row.concept || '');
    const examTip = clean(row.examtip || row.tip || '');

    grouped.get(key).items.push({
      question,
      options,
      answer,
      explanation,
      ...(keyConcept ? { keyConcept } : {}),
      ...(examTip ? { examTip } : {}),
    });
  }

  for (const [key, { subject, topic, items }] of grouped.entries()) {
    const dir = path.join(MCQS_DIR, subject);
    fs.mkdirSync(dir, { recursive: true });

    const mdPath = path.join(dir, `${topic}.md`);
    let fileFrontmatter = {
      title: `${titleize(subject)} - ${titleize(topic)} MCQs`,
      description: `High-yield ${titleize(subject)} exam preparation questions on ${titleize(topic)} with worked explanations.`,
      subject,
      subjectName: titleize(subject),
      topic,
      topicName: titleize(topic),
      author: 'ExamHub Academic Editorial Board',
      updatedDate: new Date().toISOString().split('T')[0],
      difficulty: 'Exam-Level',
      targetExams: ['FPSC', 'KPPSC', 'PPSC', 'CSS', 'PMS', 'NTS'],
      questions: [],
    };
    let existingQuestions = [];

    if (fs.existsSync(mdPath)) {
      const content = fs.readFileSync(mdPath, 'utf-8');
      const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
      if (match) {
        try {
          const parsed = yaml.load(match[1]);
          if (parsed && typeof parsed === 'object') {
            fileFrontmatter = { ...fileFrontmatter, ...parsed };
            existingQuestions = Array.isArray(parsed.questions) ? parsed.questions : [];
          }
        } catch {}
      }
    }

    const stems = new Set(existingQuestions.map((q) => normalizeForCompare(q.question)));
    let added = 0;
    let nextId = existingQuestions.length > 0
      ? Math.max(...existingQuestions.map((q) => Number(q.id) || 0)) + 1
      : 1;

    for (const item of items) {
      const stem = normalizeForCompare(item.question);
      if (stems.has(stem)) continue;
      stems.add(stem);
      existingQuestions.push({
        id: nextId++,
        question: item.question,
        options: item.options,
        answer: item.answer,
        explanation: item.explanation,
        ...(item.keyConcept ? { keyConcept: item.keyConcept } : {}),
        ...(item.examTip ? { examTip: item.examTip } : {}),
      });
      added++;
    }

    fileFrontmatter.questions = existingQuestions;
    fileFrontmatter.updatedDate = new Date().toISOString().split('T')[0];

    const newContent = `---\n${yaml.dump(fileFrontmatter, { lineWidth: -1, quotingType: '"', forceQuotes: false })}---\n\n## Practice & Discussion\n\nCarefully review each question and rationale for competitive exam screening excellence.\n`;
    fs.writeFileSync(mdPath, newContent, 'utf-8');

    console.log(`✅ ${subject}/${topic}.md: added ${added} new MCQs (${existingQuestions.length} total in set).`);
  }
}

// Parse args
const args = process.argv.slice(2);
if (args.includes('--template')) {
  const sample = `question,option1,option2,option3,option4,answer,explanation,keyConcept,examTip
"Under which section of FIA Act 1974 is the Agency constituted?","Section 3","Section 5","Section 7","Section 12","1","Section 3 of the FIA Act 1974 empowers the Federal Government to constitute the Federal Investigation Agency.","FIA Statutory Constitution","Important for FPSC Assistant Director FIA"
"What is the standard weightage of English in FPSC screening tests?","10%","20%","30%","50%","2","Part-I of standard FPSC screening test comprises 20 Marks dedicated to English Grammar & Vocabulary.","FPSC General Scheme","Focus on prepositions and active/passive voice"
`;
  console.log(sample);
  process.exit(0);
}

let forcedSubject = '';
let forcedTopic = '';
let targetFile = '';
let targetDir = '';

for (const arg of args) {
  if (arg.startsWith('--subject=')) forcedSubject = arg.split('=')[1];
  else if (arg.startsWith('--topic=')) forcedTopic = arg.split('=')[1];
  else if (arg.startsWith('--dir=')) targetDir = arg.split('=')[1];
  else if (!arg.startsWith('--')) targetFile = arg;
}

if (targetDir) {
  const fullDir = path.resolve(ROOT, targetDir);
  const files = fs.readdirSync(fullDir).filter((f) => f.endsWith('.csv'));
  for (const f of files) {
    importFile(path.join(fullDir, f), forcedSubject, forcedTopic);
  }
} else if (targetFile) {
  importFile(path.resolve(ROOT, targetFile), forcedSubject, forcedTopic);
} else {
  console.log(`
Usage:
  node scripts/import-csv.js <path-to-csv> [--subject=<name>] [--topic=<name>]
  node scripts/import-csv.js --dir="MCQs csv files"
  node scripts/import-csv.js --template
`);
}
