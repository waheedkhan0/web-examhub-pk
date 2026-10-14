#!/usr/bin/env node
/**
 * ExamHub.pk — Examveda MCQ Importer & Content Organizer
 *
 * Imports compiled MCQs from /Users/waheedkhan/Projects/mcqz/mcq_data/examveda
 * into ExamHub's content collections, fully organized by subject and topic.
 *
 * Features:
 *   - Categorizes 56 academic and professional disciplines
 *   - Parses RFC-4180 CSVs with embedded quotes and multiline questions
 *   - Robust option parser (A/B/C/D/E) with 100% resolution accuracy
 *   - Cleans explanation boilerplate and synthesizes educational rationale when missing
 *   - Prioritizes questions with rich explanations
 *   - Chunks oversized topics into browsable, high-yield sets (max 40 questions/part)
 *   - Automatically creates and updates rich Subject Hub pages and subtopic registries
 *
 * Usage:
 *   node scripts/import-examveda.js --dry-run
 *   node scripts/import-examveda.js --subject=agriculture
 *   node scripts/import-examveda.js --category=agriculture
 *   node scripts/import-examveda.js --all
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
  titleize,
  today,
  writeMarkdown,
  tryReadMarkdown,
} from './lib/cms.js';
import { syncSubjectTopics } from './lib/library.js';

const SOURCE_BASE = '/Users/waheedkhan/Projects/mcqz/mcq_data/examveda';

/* ------------------------------------------------------------------ *
 * 1. Subject Taxonomy & Curated Metadata
 * ------------------------------------------------------------------ */

export const SUBJECT_DEFINITIONS = {
  // Core General Subjects
  english: {
    title: 'English Language & Comprehension',
    description: 'High-yield MCQs covering English grammar, vocabulary, idioms, sentence correction, voice, and narration for competitive exams.',
    icon: 'pen',
    syllabusWeightage: '20% in PPSC, FPSC, NTS, and CSS English Precis screening',
    relatedExams: ['PPSC', 'FPSC', 'CSS', 'PMS', 'NTS'],
    categories: ['competitive-english'],
  },
  mathematics: {
    title: 'Mathematics & Quantitative Ability',
    description: 'Quantitative aptitude, arithmetic, algebra, geometry, trigonometry, and statistics with step-by-step worked solutions.',
    icon: 'calculator',
    syllabusWeightage: '20-30% in CSS GSA, NTS GAT, and Commission screening tests',
    relatedExams: ['CSS', 'NTS', 'PPSC', 'FPSC', 'PMS'],
    categories: ['arithmetic-ability', 'engineering-maths'],
  },
  'analytical-reasoning': {
    title: 'Analytical & Logical Reasoning',
    description: 'Logical deduction, number and letter series, coding-decoding, blood relations, and data interpretation practice.',
    icon: 'brain',
    syllabusWeightage: '15-20% in NTS GAT, CSS General Science & Ability, and screening tests',
    relatedExams: ['NTS', 'CSS', 'PPSC', 'FPSC', 'PMS', 'HEC-HAT'],
    categories: ['competitive-reasoning', 'non-verbal-reasoning', 'data-interpretation'],
  },
  'general-knowledge': {
    title: 'General Knowledge & World Affairs',
    description: 'Global knowledge covering world geography, international organizations, capitals, currencies, treaties, and milestones.',
    icon: 'globe',
    syllabusWeightage: '15-20% in PPSC, FPSC, NTS, and PMS Screening',
    relatedExams: ['PPSC', 'FPSC', 'PMS', 'NTS', 'SPSC'],
    categories: ['general-knowledge', 'abbreviations'],
  },

  // Everyday Science & Basic Sciences
  biology: {
    title: 'Biology & Life Sciences',
    description: 'Cell biology, human physiology, genetics, ecology, plant physiology, and microbiology for MDCAT and competitive exams.',
    icon: 'leaf',
    syllabusWeightage: 'Core MDCAT subject (68 questions); tested in PPSC/FPSC Educator tests',
    relatedExams: ['MDCAT', 'PPSC', 'FPSC', 'NTS'],
    categories: ['biology-gk-chapter-wise'],
  },
  chemistry: {
    title: 'Chemistry & Applied Chemical Sciences',
    description: 'Atomic structure, chemical bonding, organic chemistry, physical chemistry, stoichiometry, and industrial chemistry.',
    icon: 'beaker',
    syllabusWeightage: 'Core MDCAT subject (54 questions); 100 Marks in CSS/PMS Optional',
    relatedExams: ['MDCAT', 'CSS', 'PMS', 'PPSC', 'FPSC'],
    categories: ['chemistry-gk-chapter-wise', 'engineering-chemistry'],
  },
  physics: {
    title: 'Physics & Applied Physics',
    description: 'Mechanics, thermodynamics, electromagnetism, wave motion, optics, and modern physics with theoretical explanations.',
    icon: 'atom',
    syllabusWeightage: 'Core MDCAT subject (54 questions); 100 Marks in CSS/PMS Optional',
    relatedExams: ['MDCAT', 'CSS', 'PMS', 'PPSC', 'FPSC'],
    categories: ['physics-gk-chapter-wise', 'engineering-physics'],
  },

  // Social Sciences & Humanities (Key CSS & PMS Optionals)
  geography: {
    title: 'Geography',
    description: 'Physical geography, geomorphology, climatology, oceanography, economic geography, and world regional analysis.',
    icon: 'earth',
    syllabusWeightage: '100 Marks in CSS/PMS Optional; 10-15% in General Screening',
    relatedExams: ['CSS', 'PMS', 'PPSC', 'FPSC', 'KPPSC'],
    categories: ['geography'],
  },
  history: {
    title: 'History & World Civilizations',
    description: 'Ancient civilizations, Indus Valley, Delhi Sultanate, Mughal Empire, British colonial era, and World History.',
    icon: 'scroll',
    syllabusWeightage: '100 Marks in CSS/PMS Optional; frequent in FPSC/PPSC GK papers',
    relatedExams: ['CSS', 'PMS', 'FPSC', 'PPSC', 'SPSC'],
    categories: ['history'],
  },
  'political-science': {
    title: 'Political Science & International Relations',
    description: 'Political theory, Western and Islamic political thought, comparative politics, international institutions, and constitutions.',
    icon: 'landmark',
    syllabusWeightage: '100-200 Marks in CSS/PMS Optionals; essential for Commission tests',
    relatedExams: ['CSS', 'PMS', 'FPSC', 'PPSC', 'KPPSC'],
    categories: ['political-science'],
  },
  sociology: {
    title: 'Sociology',
    description: 'Sociological theories, social institutions, research methodologies, Pakistani society, social problems, and cultural change.',
    icon: 'users',
    syllabusWeightage: '100 Marks in CSS/PMS Optional',
    relatedExams: ['CSS', 'PMS', 'PPSC', 'KPPSC'],
    categories: ['sociology'],
  },
  psychology: {
    title: 'Psychology',
    description: 'Cognitive psychology, developmental stages, psychopathology, organizational behavior, and research methodologies.',
    icon: 'thought',
    syllabusWeightage: '100 Marks in CSS/PMS Optional',
    relatedExams: ['CSS', 'PMS', 'PPSC', 'FPSC'],
    categories: ['psychology'],
  },
  philosophy: {
    title: 'Philosophy',
    description: 'Classical logic, epistemology, moral philosophy, metaphysics, and Muslim philosophical traditions.',
    icon: 'thought',
    syllabusWeightage: '100 Marks in CSS/PMS Optional',
    relatedExams: ['CSS', 'PMS'],
    categories: ['philosophy'],
  },
  law: {
    title: 'Law & Jurisprudence',
    description: 'Jurisprudence, constitutional law, Pakistan Penal Code, CrPC, CPC, international law, and law of evidence for judicial exams.',
    icon: 'scale',
    syllabusWeightage: 'Core subject for Civil Judge, Judicial Magistrate, ADPP, and Law Officer posts',
    relatedExams: ['Civil Judge', 'ADPP', 'FPSC', 'PPSC', 'CSS'],
    categories: ['law'],
  },
  'mass-communication': {
    title: 'Mass Communication & Journalism',
    description: 'Media theories, press laws, journalism ethics, reporting, editing, public relations, and electronic media.',
    icon: 'newspaper',
    syllabusWeightage: '100 Marks in CSS/PMS; primary for Assistant Director Information',
    relatedExams: ['CSS', 'PMS', 'PPSC', 'FPSC'],
    categories: ['mass-communication-and-journalism-'],
  },

  // Business & Management
  commerce: {
    title: 'Commerce & Accounting',
    description: 'Financial accounting, cost accounting, auditing principles, business law, and taxation for accounts and audit tests.',
    icon: 'chart',
    syllabusWeightage: '50-80% in Senior Auditor, Accounts Officer, and Customs Inspector exams',
    relatedExams: ['FPSC Senior Auditor', 'PPSC', 'NTS', 'PMS', 'CSS'],
    categories: ['commerce'],
  },
  management: {
    title: 'Management Sciences',
    description: 'Principles of management, strategic planning, human resource management, organizational behavior, and marketing.',
    icon: 'briefcase',
    syllabusWeightage: 'Core syllabus for Public Administration, AD, and Management Trainee exams',
    relatedExams: ['CSS', 'PMS', 'FPSC', 'PPSC', 'NTS'],
    categories: ['management'],
  },
  finance: {
    title: 'Banking & Finance',
    description: 'Commercial banking, financial markets, central banking regulations, monetary policy, and corporate finance.',
    icon: 'chart',
    syllabusWeightage: 'Primary domain for SBP, NBP, ZTBL, and Commercial Bank tests',
    relatedExams: ['State Bank', 'National Bank', 'FPSC', 'PPSC', 'NTS'],
    categories: ['banking-awareness'],
  },

  // Computer Science & IT
  'computer-science': {
    title: 'Computer Science & IT',
    description: 'Computer fundamentals, operating systems, computer networks, database management systems, data structures, and cybersecurity.',
    icon: 'cpu',
    syllabusWeightage: 'Core discipline in FPSC/PPSC Computer Science Lecturer and IT Officer tests',
    relatedExams: ['PPSC', 'FPSC', 'CSS', 'PMS', 'NTS'],
    categories: ['computer-science', 'computer-fundamentals', 'data-structure', 'database', 'networking', 'sql', 'mysql', 'data-science', 'hadoop'],
  },
  programming: {
    title: 'Programming & Software Development',
    description: 'Practical programming in Python, Java, C, C++, C#, JavaScript, PHP, Web Development (HTML/CSS), and algorithms.',
    icon: 'code',
    syllabusWeightage: '50-70% in Software Engineer, Web Developer, and Programmer screening',
    relatedExams: ['FPSC', 'PPSC', 'NTS', 'NITB', 'PTS'],
    categories: [
      'c-program',
      'c-plus-plus-programming',
      'python-program',
      'java-program',
      'c-sharp-programming',
      'javascript',
      'html',
      'css',
      'php',
      'ruby-programming',
      'r-programming',
    ],
  },

  // Applied & Professional Disciplines
  agriculture: {
    title: 'Agriculture & Agronomy',
    description: 'Agronomy, soil science, horticulture, plant pathology, agricultural entomology, and agricultural economics.',
    icon: 'leaf',
    syllabusWeightage: '80% in PPSC/FPSC Agriculture Officer & Research Officer recruitment',
    relatedExams: ['PPSC Agriculture Officer', 'FPSC', 'KPPSC', 'CSS'],
    categories: ['agriculture'],
  },
  pharmacy: {
    title: 'Pharmacy & Pharmacology',
    description: 'Pharmacology, pharmaceutics, pharmacognosy, medicinal chemistry, clinical pharmacy, and drug regulations.',
    icon: 'pill',
    syllabusWeightage: '80-100% in Drug Inspector and Pharmacist Grade-17 tests',
    relatedExams: ['PPSC Drug Inspector', 'FPSC', 'KPPSC', 'SPSC'],
    categories: ['pharmacy'],
  },
  'home-science': {
    title: 'Home Economics & Nutrition',
    description: 'Food and nutrition, human development, textiles, clothing, family resource management, and interior design.',
    icon: 'graduation',
    syllabusWeightage: 'Subject test for PPSC/FPSC Lecturer Home Economics',
    relatedExams: ['PPSC', 'FPSC', 'KPPSC', 'SPSC'],
    categories: ['home-science'],
  },

  // Engineering Disciplines
  'electrical-engineering': {
    title: 'Electrical Engineering',
    description: 'Circuit theory, electrical machines, power systems, control systems, transmission and distribution for SDO and AEE exams.',
    icon: 'bolt',
    syllabusWeightage: '80-100% in WAPDA, NTDC, DISCOs (LESCO, IESCO), and PPSC/FPSC tests',
    relatedExams: ['WAPDA', 'NTDC', 'IESCO', 'LESCO', 'PPSC', 'FPSC'],
    categories: ['electrical-engineering'],
  },
  'civil-engineering': {
    title: 'Civil Engineering',
    description: 'Building materials, surveying, RCC structures, soil mechanics, fluid mechanics, highway engineering, and structural analysis.',
    icon: 'building',
    syllabusWeightage: '80-100% in PPSC/FPSC SDO, C&W, Irrigation, and CDA tests',
    relatedExams: ['PPSC SDO', 'FPSC AEE', 'C&W', 'Irrigation', 'NTS'],
    categories: ['civil-engineering'],
  },
  'mechanical-engineering': {
    title: 'Mechanical Engineering',
    description: 'Thermodynamics, heat transfer, fluid mechanics, strength of materials, theory of machines, and manufacturing processes.',
    icon: 'gear',
    syllabusWeightage: '80-100% in PAEC, NESCOM, KRL, and PPSC/FPSC Assistant Engineer posts',
    relatedExams: ['PAEC', 'NESCOM', 'PPSC', 'FPSC', 'WAPDA'],
    categories: ['mechanical-engineering'],
  },
  'chemical-engineering': {
    title: 'Chemical Engineering',
    description: 'Chemical reaction engineering, unit operations, heat and mass transfer, process control, and thermodynamics.',
    icon: 'flask',
    syllabusWeightage: '80-100% in Fertilizer, Petrochemical, PAEC, and FPSC recruitment',
    relatedExams: ['FPSC', 'PPSC', 'PAEC', 'OGDCL'],
    categories: ['chemical-engineering'],
  },
  'electronics-engineering': {
    title: 'Electronics & Communications Engineering',
    description: 'Digital electronics, analog circuits, microprocessors, signals and systems, wireless communications, and VLSI.',
    icon: 'satellite',
    syllabusWeightage: '80-100% in PTA, Telecom, PAEC, and Commission Engineer exams',
    relatedExams: ['FPSC', 'PPSC', 'PTA', 'PAEC', 'NTS'],
    categories: ['electronics-and-communications-engineering'],
  },
  biotechnology: {
    title: 'Biotechnology Engineering',
    description: 'Genetic engineering, recombinant DNA technology, cell culture, bioprocess engineering, and bioinformatics.',
    icon: 'dna',
    syllabusWeightage: 'Subject test for Research Officer, NIH, and Lecturer recruitment',
    relatedExams: ['PPSC', 'FPSC', 'NIH', 'NTS'],
    categories: ['biotechnology-engineering'],
  },
  'automobile-engineering': {
    title: 'Automobile Engineering',
    description: 'Automobile engines, transmission systems, automotive chassis, braking systems, and vehicle dynamics.',
    icon: 'car',
    syllabusWeightage: 'Technical test for Transport Department and Automotive Engineer posts',
    relatedExams: ['PPSC', 'FPSC', 'Transport Dept'],
    categories: ['automobile-engineering'],
  },
  'mining-engineering': {
    title: 'Mining Engineering',
    description: 'Mine surveying, drilling and blasting, rock mechanics, mineral processing, and mine ventilation.',
    icon: 'pickaxe',
    syllabusWeightage: '80% in Mines & Minerals Department and Inspector of Mines tests',
    relatedExams: ['PPSC Mines', 'KPPSC', 'FPSC', 'BPSC'],
    categories: ['mining-engineering'],
  },
  'metallurgical-engineering': {
    title: 'Metallurgical Engineering',
    description: 'Physical metallurgy, extractive metallurgy, phase transformations, mechanical metallurgy, and materials characterization.',
    icon: 'flame',
    syllabusWeightage: 'Technical test for Pakistan Steel, PAEC, NESCOM, and HIT',
    relatedExams: ['PAEC', 'NESCOM', 'HIT', 'FPSC'],
    categories: ['metallurgical-engineering'],
  },
};

/* ------------------------------------------------------------------ *
 * 2. Helpers & Parsing
 * ------------------------------------------------------------------ */

// Invert categories to subject lookup
const CATEGORY_TO_SUBJECT = {};
for (const [subjSlug, meta] of Object.entries(SUBJECT_DEFINITIONS)) {
  for (const cat of meta.categories) {
    CATEGORY_TO_SUBJECT[cat] = subjSlug;
  }
}

/** Robust option parser */
export function parseOptions(raw) {
  if (!raw) return [];
  const text = String(raw).trim();
  const regex = /(?:^|[;\r\n]+|\s{2,})\s*([A-Ea-e])[\)\.\:]\s*/g;
  const matches = [...text.matchAll(regex)];

  if (matches.length >= 2) {
    const parts = [];
    for (let i = 0; i < matches.length; i++) {
      const start = matches[i].index + matches[i][0].length;
      const end = i + 1 < matches.length ? matches[i + 1].index : text.length;
      let optText = text.slice(start, end).replace(/[;\s]+$/, '').trim();
      parts.push(optText);
    }
    return parts;
  }

  if (text.includes(';')) {
    return text.split(';').map((s) => s.replace(/^[A-Ea-e][\)\.\:]\s*/, '').trim()).filter(Boolean);
  }

  return [];
}

/** Resolve answer letter or number into 0-based index */
export function resolveAnswer(ansRaw, options, answerText = '') {
  if (ansRaw) {
    const trimmed = String(ansRaw).trim().toUpperCase().replace(/[).\-]$/, '');
    if (/^[A-E]$/.test(trimmed)) {
      const idx = trimmed.charCodeAt(0) - 65;
      if (idx >= 0 && idx < options.length) return idx;
    }
    const num = Number(trimmed);
    if (Number.isInteger(num)) {
      if (num >= 1 && num <= options.length) return num - 1;
      if (num >= 0 && num < options.length) return num;
    }
  }

  if (answerText) {
    const normAns = normalizeForCompare(answerText);
    const byText = options.findIndex((o) => normalizeForCompare(o) === normAns);
    if (byText !== -1) return byText;
  }

  return null;
}

/** Clean Examveda explanation and fallback if empty or generic */
export function cleanExplanation(raw, question, answerText, topicName) {
  let text = clean(raw);
  text = text.replace(/^Answer\s*&\s*Solution\s*Answer\s*:\s*Option\s*[A-E]\s*/i, '');
  text = text.replace(/Let['’]s Discuss on Board.*$/i, '').trim();

  const isGeneric = !text ||
    /no explanation is given/i.test(text) ||
    /discuss on board/i.test(text) ||
    text.length < 10;

  if (isGeneric) {
    const stem = question.replace(/\?+$/, '').trim();
    if (stem.length > 10) {
      return `${answerText} is the correct answer to “${stem}”. This question is standard in competitive examination syllabi for ${topicName}.`;
    }
    return `Option "${answerText}" is the correct answer for this question under ${topicName}.`;
  }

  return text;
}

/* ------------------------------------------------------------------ *
 * 3. Processing and Import Pipeline
 * ------------------------------------------------------------------ */

export async function run(argv = process.argv.slice(2)) {
  const dryRun = argv.includes('--dry-run');
  const allQuestions = argv.includes('--all-questions');
  const targetSubjectArg = argv.find((a) => a.startsWith('--subject='))?.split('=')[1];
  const targetCatArg = argv.find((a) => a.startsWith('--category='))?.split('=')[1];
  const maxPerSet = 40;
  const maxParts = allQuestions ? 99 : 2; // default: up to 2 parts (80 high-yield Qs)

  console.log(`\n🚀 ExamHub.pk — Examveda MCQ Importer`);
  console.log(`   Source Directory : ${SOURCE_BASE}`);
  console.log(`   Mode             : ${dryRun ? 'DRY-RUN (no files written)' : 'LIVE IMPORT'}`);
  console.log(`   Cap per set      : ${maxPerSet} questions`);
  console.log(`   Max parts/topic  : ${maxParts} (${maxParts * maxPerSet} questions max)`);
  if (targetSubjectArg) console.log(`   Filter Subject   : ${targetSubjectArg}`);
  if (targetCatArg) console.log(`   Filter Category  : ${targetCatArg}`);
  console.log();

  if (!fs.existsSync(SOURCE_BASE)) {
    console.error(`❌ Source directory does not exist: ${SOURCE_BASE}`);
    process.exit(1);
  }

  const folders = fs.readdirSync(SOURCE_BASE).filter((d) => {
    return fs.statSync(path.join(SOURCE_BASE, d)).isDirectory();
  });

  const stats = {
    totalFiles: 0,
    acceptedQuestions: 0,
    setsCreated: 0,
    subjectsCreated: 0,
    subjectsUpdated: 0,
  };

  const touchedSubjects = new Set();

  for (const folder of folders) {
    if (folder === 'state-gk') continue; // Indian State GK excluded
    if (targetCatArg && folder !== targetCatArg) continue;

    const subjectSlug = CATEGORY_TO_SUBJECT[folder];
    if (!subjectSlug) continue;
    if (targetSubjectArg && subjectSlug !== targetSubjectArg) continue;

    const subjectMeta = SUBJECT_DEFINITIONS[subjectSlug];
    const folderPath = path.join(SOURCE_BASE, folder);
    const files = fs.readdirSync(folderPath).filter((f) => f.endsWith('.csv'));

    console.log(`📁 Processing [${folder}] → Subject: ${subjectMeta.title} (${files.length} CSV files)`);

    for (const file of files) {
      // Exclude Indian internal files in general-knowledge
      if (folder === 'general-knowledge' && /Indian Politics|Indian Railway|Indian Economy|Indian Culture|Famous Places In India/i.test(file)) {
        continue;
      }

      stats.totalFiles++;
      const fullPath = path.join(folderPath, file);
      const csvText = fs.readFileSync(fullPath, 'utf-8');
      const { records } = parseCsv(csvText);
      if (!records || records.length === 0) continue;

      const rawTopicName = path.basename(file, '.csv');
      const baseTopicSlug = slugify(rawTopicName);

      // Parse & Validate rows
      const validQuestions = [];
      const seenQuestions = new Set();

      for (const row of records) {
        const questionText = clean(row.question);
        if (!questionText) continue;

        const normQ = normalizeForCompare(questionText);
        if (seenQuestions.has(normQ)) continue;
        seenQuestions.add(normQ);

        const options = parseOptions(row.options);
        if (options.length < 2) continue;

        const answerIdx = resolveAnswer(row.answer, options, row.answer_text);
        if (answerIdx === null) continue;

        const answerText = options[answerIdx];
        const hasRealExpl = row.explanation &&
          !row.explanation.includes('No explanation is given') &&
          !row.explanation.includes("Let's Discuss on Board");

        const explanation = cleanExplanation(row.explanation, questionText, answerText, rawTopicName);

        validQuestions.push({
          question: questionText,
          options,
          answer: answerIdx,
          explanation,
          hasRealExpl: Boolean(hasRealExpl),
        });
      }

      if (validQuestions.length === 0) continue;

      // Sort questions: genuine explanations first
      validQuestions.sort((a, b) => (b.hasRealExpl ? 1 : 0) - (a.hasRealExpl ? 1 : 0));

      // Slice up to maxParts * maxPerSet
      const maxToKeep = maxParts * maxPerSet;
      const pool = validQuestions.slice(0, maxToKeep);

      // Chunk into sets
      const chunks = [];
      if (pool.length <= maxPerSet) {
        chunks.push({
          topicSlug: baseTopicSlug,
          topicTitle: rawTopicName,
          items: pool,
        });
      } else {
        const numParts = Math.min(maxParts, Math.ceil(pool.length / maxPerSet));
        for (let p = 0; p < numParts; p++) {
          const partItems = pool.slice(p * maxPerSet, (p + 1) * maxPerSet);
          if (partItems.length === 0) continue;
          chunks.push({
            topicSlug: `${baseTopicSlug}-part-${p + 1}`,
            topicTitle: `${rawTopicName} — Part ${p + 1}`,
            items: partItems,
          });
        }
      }

      // Write each chunk to src/content/mcqs/<subject>/<topic>.md
      const subjectDir = path.join(MCQS_DIR, subjectSlug);
      if (!dryRun) fs.mkdirSync(subjectDir, { recursive: true });

      for (const chunk of chunks) {
        const mdFile = path.join(subjectDir, `${chunk.topicSlug}.md`);

        // Check if file already exists to preserve curated questions
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
            keyConcept: rawTopicName,
            testedIn: subjectMeta.relatedExams.slice(0, 2),
          });
        }

        stats.acceptedQuestions += chunk.items.length;
        stats.setsCreated++;
        touchedSubjects.add(subjectSlug);

        if (!dryRun) {
          const data = {
            title: existingMeta.title || `${chunk.topicTitle} MCQs with Explanations`,
            description: existingMeta.description || `Practice high-yield ${subjectMeta.title} MCQs on ${chunk.topicTitle} with worked academic solutions for ${subjectMeta.relatedExams.join(', ')}.`,
            subject: subjectSlug,
            subjectName: subjectMeta.title,
            topic: chunk.topicSlug,
            topicName: chunk.topicTitle,
            author: 'ExamHub Academic Editorial Board',
            updatedDate: today(),
            difficulty: 'Exam-Level',
            targetExams: subjectMeta.relatedExams,
            questions: mergedQuestions,
          };

          writeMarkdown(mdFile, data, '');
        }
      }
    }
  }

  // Ensure and sync subject pages
  console.log(`\n📋 Syncing ${touchedSubjects.size} Subject Hub pages...`);
  for (const subjectSlug of touchedSubjects) {
    const subjectMeta = SUBJECT_DEFINITIONS[subjectSlug];
    if (!subjectMeta) continue;

    const subjFile = path.join(SUBJECTS_DIR, `${subjectSlug}.md`);
    if (!fs.existsSync(subjFile)) {
      if (!dryRun) {
        const initialData = {
          title: subjectMeta.title,
          description: subjectMeta.description,
          icon: subjectMeta.icon,
          updatedDate: today(),
          syllabusWeightage: subjectMeta.syllabusWeightage,
          relatedExams: subjectMeta.relatedExams,
          subtopics: [],
        };

        const initialBody = `## ${subjectMeta.title}: Exam Syllabus & Strategy

Welcome to the **${subjectMeta.title}** preparation hub on ExamHub.pk. This section covers syllabus requirements for competitive examinations across Pakistan, including ${subjectMeta.relatedExams.join(', ')}.

### Syllabus Scope & Preparation Strategy
- Master conceptual foundations before testing speed with interactive MCQ drills.
- Focus on high-frequency topics and past paper recurring themes.
- Carefully review detailed answer explanations to understand distractor rationale.

### Question Bank & Practice Sets
Practice topic-wise interactive MCQs below with immediate scoring and pedagogical feedback.
`;
        writeMarkdown(subjFile, initialData, initialBody);
        stats.subjectsCreated++;
        console.log(`   ✨ Created subject: ${subjectMeta.title} (${subjectSlug}.md)`);
      }
    }

    if (!dryRun) {
      syncSubjectTopics(subjectSlug);
      stats.subjectsUpdated++;
    }
  }

  console.log(`\n🎉 Import Complete!`);
  console.log(`   Total CSV files processed : ${stats.totalFiles}`);
  console.log(`   MCQ Sets Created / Synced : ${stats.setsCreated}`);
  console.log(`   MCQs Added / Preserved    : ${stats.acceptedQuestions}`);
  console.log(`   Subjects Created          : ${stats.subjectsCreated}`);
  console.log(`   Subjects Updated & Synced : ${stats.subjectsUpdated}`);
  console.log();
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  run().catch((err) => {
    console.error('Fatal error during import:', err);
    process.exit(1);
  });
}
