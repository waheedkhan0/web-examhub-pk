/**
 * ExamHub.pk — read-only audit of the raw CSV drops in "MCQs csv files/".
 *
 * Reports, per source file: parse success, how many rows are actually usable
 * (real question, >=2 distinct options, resolvable answer), how many carry a
 * genuine explanation, and how many are duplicates of rows we already have.
 *
 *   node scripts/audit-sources.js
 */

import fs from 'fs';
import path from 'path';
import { ROOT, parseCsv, clean, normalizeForCompare, listMarkdown, tryReadMarkdown } from './lib/cms.js';

const SOURCES_DIR = path.join(ROOT, 'MCQs csv files');

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (/\.csv$/i.test(entry.name)) out.push(full);
  }
  return out.sort();
}

/** Existing question text, so we can measure how much of the drop is already live. */
function existingKeys() {
  const keys = new Set();
  for (const file of listMarkdown(path.join(ROOT, 'src/content/mcqs'))) {
    const doc = tryReadMarkdown(file);
    if (!doc) continue;
    for (const q of doc.data.questions || []) keys.add(normalizeForCompare(q.question));
  }
  return keys;
}

function lettersToIndex(value, count) {
  const s = clean(value).toUpperCase().replace(/[).\-]$/, '');
  if (/^[1-5]$/.test(s)) return Number(s) - 1;
  if (/^[A-E]$/.test(s)) {
    const i = s.charCodeAt(0) - 65;
    return i < count ? i : null;
  }
  return null;
}

function inspect(file, existing) {
  const text = fs.readFileSync(file, 'utf-8');
  const { headers, records } = parseCsv(text);
  const report = {
    file: path.relative(SOURCES_DIR, file),
    rows: records.length,
    headers: headers.join(','),
    usable: 0,
    shortOptions: 0,
    badAnswer: 0,
    noExplanation: 0,
    thinExplanation: 0,
    dupInFile: 0,
    dupOnline: 0,
    categories: {},
  };

  const seen = new Set();
  for (const rawRow of records) {
    // Header spelling varies wildly between sources (option_a / opA / Choices).
    const row = {};
    for (const [k, v] of Object.entries(rawRow)) row[k.toLowerCase().replace(/[\s_-]+/g, '')] = v;
    const get = (...names) => {
      for (const n of names) if (clean(row[n])) return clean(row[n]);
      return '';
    };
    const question = get('question', 'text', 'q', 'mcq');
    const rawOptions = [
      get('optiona', 'opa'),
      get('optionb', 'opb'),
      get('optionc', 'opc'),
      get('optiond', 'opd'),
      get('optione', 'ope'),
    ];
    // pakmcqs exports leave gaps (opC blank), so an answer letter must be
    // resolved against its ORIGINAL slot before the blanks are removed.
    const slots = [];
    rawOptions.forEach((o, i) => {
      if (clean(o)) slots.push({ text: clean(o), letter: String.fromCharCode(65 + i) });
    });
    const uniqOptions = [...new Map(slots.map((s) => [normalizeForCompare(s.text), s])).values()];
    const answerRaw = get('correctoption', 'correctanswer', 'correct', 'answer');
    const explanation = get('explanation');
    const category = get('category', 'subject', 'cata') || '(none)';

    report.categories[category] = (report.categories[category] || 0) + 1;

    if (!question) continue;
    if (uniqOptions.length < 2) {
      report.shortOptions += 1;
      continue;
    }

    let answerIdx = null;
    const byLetter = uniqOptions.findIndex((o) => o.letter === clean(answerRaw).toUpperCase().replace(/[).\-]$/, ''));
    if (byLetter !== -1) answerIdx = byLetter;
    else {
      const asNumber = Number(clean(answerRaw));
      if (Number.isInteger(asNumber) && asNumber >= 1 && asNumber <= slots.length) {
        answerIdx = uniqOptions.findIndex((o) => o === slots[asNumber - 1]);
      }
    }
    if (answerIdx === null || answerIdx === -1) {
      const textAnswer = get('correctoptiontext');
      const byText = uniqOptions.findIndex((o) => normalizeForCompare(o.text) === normalizeForCompare(textAnswer));
      answerIdx = byText;
    }
    if (answerIdx === null || answerIdx < 0) {
      report.badAnswer += 1;
      continue;
    }

    const key = normalizeForCompare(question);
    if (seen.has(key)) {
      report.dupInFile += 1;
      continue;
    }
    seen.add(key);
    if (existing.has(key)) {
      report.dupOnline += 1;
      continue;
    }

    if (!explanation) report.noExplanation += 1;
    else if (normalizeForCompare(explanation) === normalizeForCompare(uniqOptions[answerIdx].text) || explanation.length < 25) {
      report.thinExplanation += 1;
    }
    report.usable += 1;
  }
  return report;
}

const existing = existingKeys();
console.log(`Live question bank: ${existing.size} unique questions\n`);

let totals = { usable: 0, noExplanation: 0, thinExplanation: 0 };
for (const file of walk(SOURCES_DIR)) {
  const r = inspect(file, existing);
  totals.usable += r.usable;
  totals.noExplanation += r.noExplanation;
  totals.thinExplanation += r.thinExplanation;
  console.log(`── ${r.file}`);
  console.log(`   headers: ${r.headers}`);
  console.log(`   rows ${r.rows} → usable ${r.usable} | <2 options ${r.shortOptions} | bad answer ${r.badAnswer} | dup in file ${r.dupInFile} | dup vs live ${r.dupOnline}`);
  console.log(`   explanations: missing ${r.noExplanation}, answer-only/short ${r.thinExplanation}`);
  const cats = Object.entries(r.categories).sort((a, b) => b[1] - a[1]).slice(0, 12);
  console.log(`   categories: ${cats.map(([k, v]) => `${k}=${v}`).join(', ')}`);
  console.log('');
}
console.log(`TOTAL usable rows across all files: ${totals.usable} (no explanation: ${totals.noExplanation}, answer-only: ${totals.thinExplanation})`);
