#!/usr/bin/env node

/**
 * ExamHub.pk Content Management System
 * Import MCQs from CSV and generate markdown files
 * 
 * Usage:
 *   node scripts/import-mcqs.js path/to/mcqs.csv
 * 
 * CSV Format:
 *   subject,topic,title,description,question,option1,option2,option3,option4,correctAnswer,explanation,keyConcept,examTip,difficulty,targetExams
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONTENT_DIR = path.join(__dirname, '../src/content/mcqs');
const VALID_DIFFICULTIES = ['Basic', 'Intermediate', 'Advanced', 'Exam-Level'];

/**
 * Parse CSV file
 */
function parseCSV(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n').filter(line => line.trim());
  
  if (lines.length < 2) {
    throw new Error('CSV file must have headers and at least one data row');
  }

  // Parse header
  const headers = lines[0].split(',').map(h => h.trim());
  const expectedHeaders = [
    'subject', 'topic', 'title', 'description', 'question', 
    'option1', 'option2', 'option3', 'option4', 'correctAnswer',
    'explanation', 'keyConcept', 'examTip', 'difficulty', 'targetExams'
  ];

  // Validate headers
  const missingHeaders = expectedHeaders.filter(h => !headers.includes(h));
  if (missingHeaders.length > 0) {
    throw new Error(`Missing required headers: ${missingHeaders.join(', ')}`);
  }

  // Parse data rows
  const mcqs = [];
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',').map(v => v.trim());
    const row = {};
    headers.forEach((header, index) => {
      row[header] = values[index] || '';
    });

    if (row.subject && row.topic && row.question) {
      mcqs.push(row);
    }
  }

  return mcqs;
}

/**
 * Group MCQs by subject and topic
 */
function groupMCQs(mcqs) {
  const grouped = {};

  mcqs.forEach(mcq => {
    const { subject, topic } = mcq;
    if (!grouped[subject]) {
      grouped[subject] = {};
    }
    if (!grouped[subject][topic]) {
      grouped[subject][topic] = [];
    }
    grouped[subject][topic].push(mcq);
  });

  return grouped;
}

/**
 * Convert CSV row to MCQ object
 */
function createMCQObject(subject, topic, title, description, mcqs, difficulty, targetExams, updatedDate) {
  const questions = mcqs.map((mcq, index) => ({
    id: index + 1,
    question: mcq.question,
    options: [
      mcq.option1,
      mcq.option2,
      mcq.option3,
      mcq.option4
    ],
    answer: parseInt(mcq.correctAnswer) - 1, // 0-indexed
    explanation: mcq.explanation,
    keyConcept: mcq.keyConcept || undefined,
    examTip: mcq.examTip || undefined,
    testedIn: targetExams.split(';').map(e => e.trim()).filter(e => e)
  }));

  return {
    title,
    description,
    subject,
    subjectName: formatSubjectName(subject),
    topic,
    topicName: formatTopicName(topic),
    difficulty: difficulty || 'Exam-Level',
    targetExams: targetExams.split(';').map(e => e.trim()).filter(e => e),
    updatedDate: updatedDate || new Date().toISOString().split('T')[0],
    questions
  };
}

/**
 * Format subject name (slug to readable)
 */
function formatSubjectName(slug) {
  const names = {
    'pakistan-studies': 'Pakistan Studies',
    'islamiat': 'Islamiat',
    'english': 'English',
    'general-knowledge': 'General Knowledge',
    'current-affairs': 'Current Affairs',
    'mathematics': 'Mathematics',
    'everyday-science': 'Everyday Science',
    'computer-science': 'Computer Science'
  };
  return names[slug] || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

/**
 * Format topic name (slug to readable)
 */
function formatTopicName(slug) {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

/**
 * Generate markdown frontmatter
 */
function generateFrontmatter(mcqData) {
  return `---
title: "${mcqData.title}"
description: "${mcqData.description}"
subject: "${mcqData.subject}"
subjectName: "${mcqData.subjectName}"
topic: "${mcqData.topic}"
topicName: "${mcqData.topicName}"
difficulty: "${mcqData.difficulty}"
targetExams: [${mcqData.targetExams.map(e => `"${e}"`).join(', ')}]
updatedDate: "${mcqData.updatedDate}"
questions:
${mcqData.questions.map(q => `  - id: ${q.id}
    question: "${q.question.replace(/"/g, '\\"')}"
    options:
      - "${q.options[0].replace(/"/g, '\\"')}"
      - "${q.options[1].replace(/"/g, '\\"')}"
      - "${q.options[2].replace(/"/g, '\\"')}"
      - "${q.options[3].replace(/"/g, '\\"')}"
    answer: ${q.answer}
    explanation: "${q.explanation.replace(/"/g, '\\"')}"${q.keyConcept ? `\n    keyConcept: "${q.keyConcept.replace(/"/g, '\\"')}"` : ''}${q.examTip ? `\n    examTip: "${q.examTip.replace(/"/g, '\\"')}"` : ''}${q.testedIn && q.testedIn.length > 0 ? `\n    testedIn: [${q.testedIn.map(e => `"${e}"`).join(', ')}]` : ''}`).join('\n')}
---
`;
}

/**
 * Create markdown file for MCQ set
 */
function createMarkdownFile(subject, topic, mcqData) {
  const dir = path.join(CONTENT_DIR, subject);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const filePath = path.join(dir, `${topic}.md`);
  const frontmatter = generateFrontmatter(mcqData);
  const content = frontmatter + '\n## Overview\n\n' + mcqData.description + '\n';

  fs.writeFileSync(filePath, content);
  return filePath;
}

/**
 * Main function
 */
async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log(`
ExamHub.pk - MCQ CSV Import Tool

Usage:
  node scripts/import-mcqs.js <csv-file> [options]

Options:
  --validate-only    Just validate the CSV without importing
  --dry-run         Show what would be imported without creating files

Example:
  node scripts/import-mcqs.js mcqs.csv
  node scripts/import-mcqs.js mcqs.csv --validate-only

CSV Format (headers required):
  subject,topic,title,description,question,option1,option2,option3,option4,correctAnswer,explanation,keyConcept,examTip,difficulty,targetExams

Notes:
  - correctAnswer: 1-4 (which option is correct)
  - difficulty: Basic, Intermediate, Advanced, Exam-Level
  - targetExams: semicolon-separated (e.g., "CSS;PPSC;FPSC")
    `);
    process.exit(0);
  }

  const csvFile = args[0];
  const validateOnly = args.includes('--validate-only');
  const dryRun = args.includes('--dry-run');

  // Check file exists
  if (!fs.existsSync(csvFile)) {
    console.error(`❌ File not found: ${csvFile}`);
    process.exit(1);
  }

  try {
    console.log(`📂 Reading CSV file: ${csvFile}`);
    const mcqs = parseCSV(csvFile);
    console.log(`✅ Parsed ${mcqs.length} MCQs`);

    // Validate data
    console.log('\n📋 Validating data...');
    let validationErrors = [];

    mcqs.forEach((mcq, index) => {
      // Validate correctAnswer
      const correctAnswer = parseInt(mcq.correctAnswer);
      if (isNaN(correctAnswer) || correctAnswer < 1 || correctAnswer > 4) {
        validationErrors.push(`Row ${index + 2}: Invalid correctAnswer "${mcq.correctAnswer}" (must be 1-4)`);
      }

      // Validate difficulty
      if (mcq.difficulty && !VALID_DIFFICULTIES.includes(mcq.difficulty)) {
        validationErrors.push(`Row ${index + 2}: Invalid difficulty "${mcq.difficulty}" (must be one of: ${VALID_DIFFICULTIES.join(', ')})`);
      }

      // Check required fields
      if (!mcq.subject) validationErrors.push(`Row ${index + 2}: Missing subject`);
      if (!mcq.topic) validationErrors.push(`Row ${index + 2}: Missing topic`);
      if (!mcq.question) validationErrors.push(`Row ${index + 2}: Missing question`);
      if (!mcq.explanation) validationErrors.push(`Row ${index + 2}: Missing explanation`);
    });

    if (validationErrors.length > 0) {
      console.error('❌ Validation errors found:');
      validationErrors.forEach(err => console.error(`   ${err}`));
      process.exit(1);
    }

    console.log('✅ All data validated successfully!');

    if (validateOnly) {
      console.log('\n✅ Validation complete. No files created (--validate-only flag set)');
      process.exit(0);
    }

    // Group MCQs by subject and topic
    const grouped = groupMCQs(mcqs);

    if (dryRun) {
      console.log('\n📊 DRY RUN - Would create the following files:');
      Object.entries(grouped).forEach(([subject, topics]) => {
        Object.entries(topics).forEach(([topic, topicMcqs]) => {
          console.log(`   src/content/mcqs/${subject}/${topic}.md (${topicMcqs.length} questions)`);
        });
      });
      process.exit(0);
    }

    // Create markdown files
    console.log('\n📝 Creating markdown files...');
    let filesCreated = 0;

    Object.entries(grouped).forEach(([subject, topics]) => {
      Object.entries(topics).forEach(([topic, topicMcqs]) => {
        // Get first row for metadata
        const firstRow = topicMcqs[0];
        const mcqData = createMCQObject(
          subject,
          topic,
          firstRow.title,
          firstRow.description,
          topicMcqs,
          firstRow.difficulty,
          firstRow.targetExams,
          new Date().toISOString().split('T')[0]
        );

        const filePath = createMarkdownFile(subject, topic, mcqData);
        console.log(`   ✅ ${filePath}`);
        filesCreated++;
      });
    });

    console.log(`\n✅ Successfully created ${filesCreated} MCQ file(s)!`);
    console.log('\n📚 Next steps:');
    console.log('   1. Run: npm run build');
    console.log('   2. Check the newly created pages at: http://localhost:3000/mcqs/[subject]/[topic]');
    console.log('   3. Verify content is correct');
    console.log('   4. Commit changes to git');

  } catch (error) {
    console.error(`\n❌ Error: ${error.message}`);
    process.exit(1);
  }
}

main();
