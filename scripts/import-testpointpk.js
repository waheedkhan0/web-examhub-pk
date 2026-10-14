#!/usr/bin/env node
/**
 * ExamHub.pk — TestPoint.pk MCQ Importer
 *
 * Imports compiled Pakistani competitive exam MCQs from
 * /Users/waheedkhan/Projects/mcqz/mcq_data/testpointpk
 * into ExamHub's content collections, fully organized by subject and topic.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  ROOT,
  MCQS_DIR,
  SUBJECTS_DIR,
  clean,
  normalizeForCompare,
  parseCsv,
  slugify,
  subjectRegistry,
  today,
  writeMarkdown,
  tryReadMarkdown,
} from './lib/cms.js';
import { syncSubjectTopics, mcqSets } from './lib/library.js';
import { parseOptions, resolveAnswer } from './import-examveda.js';

const SOURCE_DIR = '/Users/waheedkhan/Projects/mcqz/mcq_data/testpointpk';

const FILE_MAP = {
  'Pak Study.csv': {
    subject: 'pakistan-studies',
    topic: 'pak-study-past-papers',
    topicName: 'Pakistan Studies — Commission Past Papers',
    targetExams: ['PPSC', 'FPSC', 'CSS', 'PMS', 'NTS'],
  },
  'Islamic Studies.csv': {
    subject: 'islamiat',
    topic: 'islamic-studies-past-papers',
    topicName: 'Islamic Studies — Commission Past Papers',
    targetExams: ['PPSC', 'FPSC', 'CSS', 'PMS', 'NTS'],
  },
  'Urdu.csv': {
    subject: 'urdu',
    topic: 'urdu-past-papers',
    topicName: 'Urdu Adab & Qawaid — Past Papers',
    targetExams: ['PPSC', 'FPSC', 'PMS', 'Educators'],
  },
  'Pedagogy.csv': {
    subject: 'pedagogy',
    topic: 'pedagogy-past-papers',
    topicName: 'Pedagogy & Teaching Methodology — Past Papers',
    targetExams: ['PPSC Educators', 'FPSC', 'NTS SST', 'EST'],
  },
  'Accounting.csv': {
    subject: 'commerce',
    topic: 'accounting-past-papers',
    topicName: 'Accounting & Auditing — Past Papers',
    targetExams: ['FPSC Senior Auditor', 'PPSC', 'NTS', 'Accounts Officer'],
  },
  'Computer.csv': {
    subject: 'computer-science',
    topic: 'computer-past-papers',
    topicName: 'Computer Operator & IT — Past Papers',
    targetExams: ['PPSC', 'FPSC', 'Computer Operator', 'NTS'],
  },
  'Everyday Science.csv': {
    subject: 'everyday-science',
    topic: 'everyday-science-past-papers',
    topicName: 'Everyday Science — Past Papers',
    targetExams: ['CSS', 'PMS', 'PPSC', 'FPSC'],
  },
  'General Science.csv': {
    subject: 'everyday-science',
    topic: 'general-science-past-papers',
    topicName: 'General Science — Past Papers',
    targetExams: ['CSS GSA', 'PPSC', 'FPSC', 'NTS'],
  },
  'General Knowledge.csv': {
    subject: 'general-knowledge',
    topic: 'gk-past-papers',
    topicName: 'General Knowledge — Commission Past Papers',
    targetExams: ['PPSC', 'FPSC', 'PMS', 'NTS'],
  },
  'Guess Paper For All Govt Jobs Test.csv': {
    subject: 'general-knowledge',
    topic: 'govt-jobs-screening-paper',
    topicName: 'Govt Jobs Screening — High-Yield Model Paper',
    targetExams: ['PPSC', 'FPSC', 'NTS', 'PTS'],
  },
  'English.csv': {
    subject: 'english',
    topic: 'english-past-papers',
    topicName: 'General English — Past Papers',
    targetExams: ['PPSC', 'FPSC', 'CSS', 'NTS'],
  },
  'Maths.csv': {
    subject: 'mathematics',
    topic: 'maths-past-papers',
    topicName: 'General Mathematics & Basic Arithmetic',
    targetExams: ['CSS GSA', 'PPSC', 'FPSC', 'NTS'],
  },
  'Pakistan Current Affairs.csv': {
    subject: 'current-affairs',
    topic: 'pakistan-current-affairs-past-papers',
    topicName: 'Pakistan Current Affairs — Recurring MCQs',
    targetExams: ['CSS', 'PMS', 'FPSC', 'PPSC'],
  },
  'International Current Affairs.csv': {
    subject: 'current-affairs',
    topic: 'international-current-affairs-past-papers',
    topicName: 'International Current Affairs — Recurring MCQs',
    targetExams: ['CSS', 'PMS', 'FPSC', 'PPSC'],
  },
  'Monthly Current Affairs.csv': {
    subject: 'current-affairs',
    topic: 'monthly-current-affairs-roundup',
    topicName: 'Monthly Current Affairs Roundup',
    targetExams: ['CSS', 'PMS', 'FPSC', 'PPSC'],
  },
  'Yearly Current Affairs.csv': {
    subject: 'current-affairs',
    topic: 'yearly-current-affairs-roundup',
    topicName: 'Yearly Current Affairs Highlights',
    targetExams: ['CSS', 'PMS', 'FPSC', 'PPSC'],
  },
  'Verbal _ Non Verbal Intelligence Test Mcqs.csv': {
    subject: 'analytical-reasoning',
    topic: 'verbal-non-verbal-intelligence',
    topicName: 'Verbal & Non-Verbal Intelligence Tests',
    targetExams: ['ISSB', 'Police ASI', 'FIA', 'NTS', 'PPSC'],
  },
  'Law.csv': {
    subject: 'law',
    topic: 'law-past-papers',
    topicName: 'General Law & Jurisprudence — Past Papers',
    targetExams: ['Civil Judge', 'ADPP', 'FPSC', 'PPSC'],
  },
  'Airport Security Force Asf Act_ 1975.csv': {
    subject: 'law',
    topic: 'asf-act-1975',
    topicName: 'Airport Security Force (ASF) Act 1975',
    targetExams: ['FPSC ASF Inspector', 'ASF Assistant Director', 'ASI'],
  },
  'Election Act 2017.csv': {
    subject: 'law',
    topic: 'election-act-2017',
    topicName: 'Elections Act 2017 — Complete MCQs',
    targetExams: ['FPSC Election Officer', 'ECP Screening'],
  },
  'Ctd Law.csv': {
    subject: 'law',
    topic: 'ctd-law-and-regulations',
    topicName: 'Counter Terrorism Department (CTD) Laws',
    targetExams: ['Police CTD', 'PPSC', 'KPPSC'],
  },
  'Nursing.csv': {
    subject: 'nursing',
    topic: 'nursing-past-papers',
    topicName: 'Nursing & Patient Care — Past Papers',
    targetExams: ['PPSC Staff Nurse', 'FPSC Charge Nurse', 'Health Dept'],
  },
  'First Aid.csv': {
    subject: 'nursing',
    topic: 'first-aid-and-emergency-care',
    topicName: 'First Aid & Emergency Medical Care',
    targetExams: ['Rescue 1122 EMT', 'PPSC Staff Nurse', 'Health Dept'],
  },
};

const EXTRA_SUBJECTS = {
  nursing: {
    title: 'Nursing & Health Sciences',
    description: 'Staff nurse, first aid, emergency medical care, patient management, and health science past papers for PPSC, FPSC, and Rescue 1122.',
    icon: 'pill',
    syllabusWeightage: '80% in PPSC/FPSC Staff Nurse Grade-16 and Rescue 1122 EMT tests',
    relatedExams: ['PPSC Staff Nurse', 'FPSC', 'Rescue 1122', 'Health Dept'],
  },
};

function cleanTestpointExplanation(raw, question, answerText, topicName) {
  let text = clean(raw);
  text = text.replace(/Last verified on \d{2}-\d{2}-\d{4}/gi, '').trim();
  text = text.replace(/Last verified on.*$/gi, '').trim();

  if (!text || text.length < 5) {
    const stem = question.replace(/\?+$/, '').trim();
    return `${answerText} is the correct answer to “${stem}”. This question is standard in competitive examination syllabi for ${topicName}.`;
  }
  return text;
}

export async function run() {
  const dryRun = process.argv.includes('--dry-run');
  const maxPerSet = 40;

  console.log(`\n🚀 ExamHub.pk — TestPoint.pk MCQ Importer`);
  console.log(`   Source Directory : ${SOURCE_DIR}`);
  console.log(`   Mode             : ${dryRun ? 'DRY-RUN' : 'LIVE IMPORT'}`);
  console.log(`   Cap per set      : ${maxPerSet} questions\n`);

  if (!fs.existsSync(SOURCE_DIR)) {
    console.error(`❌ Source directory not found: ${SOURCE_DIR}`);
    process.exit(1);
  }

  // Ensure extra subjects exist
  for (const [slug, meta] of Object.entries(EXTRA_SUBJECTS)) {
    const subjFile = path.join(SUBJECTS_DIR, `${slug}.md`);
    if (!fs.existsSync(subjFile) && !dryRun) {
      const data = {
        title: meta.title,
        description: meta.description,
        icon: meta.icon,
        updatedDate: today(),
        syllabusWeightage: meta.syllabusWeightage,
        relatedExams: meta.relatedExams,
        subtopics: [],
      };
      const body = `## ${meta.title}: Exam Syllabus & Strategy\n\nPreparation hub for ${meta.relatedExams.join(', ')}.\n`;
      writeMarkdown(subjFile, data, body);
      console.log(`✨ Created subject: ${meta.title} (${slug}.md)`);
    }
  }

  const touchedSubjects = new Set();
  let totalImported = 0;
  let totalSets = 0;

  for (const [filename, spec] of Object.entries(FILE_MAP)) {
    const fullPath = path.join(SOURCE_DIR, filename);
    if (!fs.existsSync(fullPath)) continue;

    const csvText = fs.readFileSync(fullPath, 'utf-8');
    const { records } = parseCsv(csvText);
    if (!records || records.length === 0) continue;

    console.log(`📄 Processing ${filename} → ${spec.subject} / ${spec.topic} (${records.length} rows)`);

    const validQuestions = [];
    const seen = new Set();

    for (const r of records) {
      const qText = clean(r.question);
      if (!qText) continue;

      const normQ = normalizeForCompare(qText);
      if (seen.has(normQ)) continue;
      seen.add(normQ);

      const opts = parseOptions(r.options);
      if (opts.length < 2) continue;

      const ansIdx = resolveAnswer(r.answer, opts, r.answer_text);
      if (ansIdx === null) continue;

      const ansText = opts[ansIdx];
      const explanation = cleanTestpointExplanation(r.explanation, qText, ansText, spec.topicName);

      validQuestions.push({
        question: qText,
        options: opts,
        answer: ansIdx,
        explanation,
      });
    }

    if (validQuestions.length === 0) continue;

    // Chunk into sets of maxPerSet
    const chunks = [];
    if (validQuestions.length <= maxPerSet) {
      chunks.push({
        topicSlug: spec.topic,
        topicTitle: spec.topicName,
        items: validQuestions,
      });
    } else {
      const numParts = Math.ceil(validQuestions.length / maxPerSet);
      for (let p = 0; p < numParts; p++) {
        const partItems = validQuestions.slice(p * maxPerSet, (p + 1) * maxPerSet);
        if (partItems.length === 0) continue;
        chunks.push({
          topicSlug: `${spec.topic}-part-${p + 1}`,
          topicTitle: `${spec.topicName} — Part ${p + 1}`,
          items: partItems,
        });
      }
    }

    const subjectDir = path.join(MCQS_DIR, spec.subject);
    if (!dryRun) fs.mkdirSync(subjectDir, { recursive: true });

    for (const chunk of chunks) {
      const mdFile = path.join(subjectDir, `${chunk.topicSlug}.md`);

      let existingQuestions = [];
      let existingMeta = {};
      if (fs.existsSync(mdFile)) {
        const doc = tryReadMarkdown(mdFile);
        if (doc && doc.data) {
          existingMeta = doc.data;
          existingQuestions = Array.isArray(doc.data.questions) ? doc.data.questions : [];
        }
      }

      const existingStems = new Set(existingQuestions.map((q) => normalizeForCompare(q.question)));
      let nextId = existingQuestions.length > 0
        ? Math.max(...existingQuestions.map((q) => Number(q.id) || 0)) + 1
        : 1;

      const mergedQuestions = [...existingQuestions];
      for (const item of chunk.items) {
        if (existingStems.has(normalizeForCompare(item.question))) continue;
        existingStems.add(normalizeForCompare(item.question));
        mergedQuestions.push({
          id: nextId++,
          question: item.question,
          options: item.options,
          answer: item.answer,
          explanation: item.explanation,
          keyConcept: spec.topicName,
          testedIn: spec.targetExams.slice(0, 3),
        });
      }

      totalImported += chunk.items.length;
      totalSets++;
      touchedSubjects.add(spec.subject);

      if (!dryRun) {
        const data = {
          title: existingMeta.title || `${chunk.topicTitle} MCQs with Explanations`,
          description: existingMeta.description || `Past paper MCQs for ${chunk.topicTitle} with verified answers and explanations for ${spec.targetExams.join(', ')}.`,
          subject: spec.subject,
          subjectName: titleize(spec.subject),
          topic: chunk.topicSlug,
          topicName: chunk.topicTitle,
          author: 'ExamHub Academic Editorial Board',
          updatedDate: today(),
          difficulty: 'Exam-Level',
          targetExams: spec.targetExams,
          questions: mergedQuestions,
        };

        writeMarkdown(mdFile, data, '');
      }
    }
  }

  // Sync subject pages
  if (!dryRun) {
    console.log(`\n📋 Syncing ${touchedSubjects.size} Subject Hub pages...`);
    const { sets: allSets } = mcqSets();
    const reg = subjectRegistry();
    for (const s of touchedSubjects) {
      syncSubjectTopics(s, reg, allSets);
    }
  }

  console.log(`\n🎉 TestPoint.pk Import Complete!`);
  console.log(`   Questions processed : ${totalImported}`);
  console.log(`   MCQ sets generated  : ${totalSets}`);
  console.log(`   Subjects updated    : ${touchedSubjects.size}\n`);
}

function titleize(slug) {
  return String(slug || '')
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  run().catch(console.error);
}
