#!/usr/bin/env node

/**
 * ExamHub.pk Content Management System
 * Import Subjects/Exams from CSV and generate markdown files
 * 
 * Usage:
 *   node scripts/import-subjects.js path/to/subjects.csv
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_DIR = path.join(__dirname, '../src/content/subjects');

/**
 * Parse CSV file
 */
function parseCSV(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n').filter(line => line.trim());

  if (lines.length < 2) {
    throw new Error('CSV file must have headers and at least one data row');
  }

  const headers = lines[0].split(',').map(h => h.trim());
  const requiredHeaders = ['slug', 'title', 'description', 'syllabusWeightage', 'relatedExams', 'subtopics', 'icon', 'content'];

  const missingHeaders = requiredHeaders.filter(h => !headers.includes(h));
  if (missingHeaders.length > 0) {
    throw new Error(`Missing required headers: ${missingHeaders.join(', ')}`);
  }

  const subjects = [];
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',').map(v => v.trim());
    const row = {};
    headers.forEach((header, index) => {
      row[header] = values[index] || '';
    });

    if (row.slug && row.title) {
      subjects.push(row);
    }
  }

  return subjects;
}

/**
 * Parse subtopics (format: "name1:slug1:count1|name2:slug2:count2")
 */
function parseSubtopics(subtopicsStr) {
  if (!subtopicsStr) return [];
  
  return subtopicsStr.split('|').map(item => {
    const [name, slug, count] = item.split(':');
    return {
      name: name || '',
      slug: slug || '',
      questionCount: parseInt(count) || 0
    };
  }).filter(item => item.name && item.slug);
}

/**
 * Generate markdown frontmatter
 */
function generateFrontmatter(subject) {
  const today = new Date().toISOString().split('T')[0];
  const subtopics = parseSubtopics(subject.subtopics);
  const relatedExams = subject.relatedExams.split(';').map(e => e.trim()).filter(e => e);

  return `---
title: "${subject.title}"
description: "${subject.description}"
icon: "${subject.icon || 'book'}"
updatedDate: "${today}"
syllabusWeightage: "${subject.syllabusWeightage}"
relatedExams: [${relatedExams.map(e => `"${e}"`).join(', ')}]
subtopics:
${subtopics.map(st => `  - name: "${st.name}"\n    slug: "${st.slug}"\n    questionCount: ${st.questionCount}`).join('\n')}
---
`;
}

/**
 * Create markdown file for subject
 */
function createMarkdownFile(subject) {
  if (!fs.existsSync(CONTENT_DIR)) {
    fs.mkdirSync(CONTENT_DIR, { recursive: true });
  }

  const filePath = path.join(CONTENT_DIR, `${subject.slug}.md`);
  const frontmatter = generateFrontmatter(subject);
  const content = frontmatter + '\n' + subject.content + '\n';

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
ExamHub.pk - Subjects CSV Import Tool

Usage:
  node scripts/import-subjects.js <csv-file> [options]

Options:
  --validate-only    Just validate the CSV without importing
  --dry-run         Show what would be imported without creating files

CSV Format (headers required):
  slug,title,description,syllabusWeightage,relatedExams,subtopics,icon,content

Notes:
  - slug: URL-friendly name (e.g., "pakistan-studies")
  - syllabusWeightage: percentage (e.g., "15-20%")
  - relatedExams: semicolon-separated (e.g., "CSS;PPSC;FPSC")
  - subtopics: pipe-separated with format "name:slug:count|name2:slug2:count2"
    Example: "Geography:geography:15|History:history:20|Constitution:constitution:25"
  - icon: emoji or icon name (e.g., "📖" or "book")
  - content: Overview/description text (300+ words recommended)

Example:
  node scripts/import-subjects.js subjects.csv
    `);
    process.exit(0);
  }

  const csvFile = args[0];
  const validateOnly = args.includes('--validate-only');
  const dryRun = args.includes('--dry-run');

  if (!fs.existsSync(csvFile)) {
    console.error(`❌ File not found: ${csvFile}`);
    process.exit(1);
  }

  try {
    console.log(`📂 Reading CSV file: ${csvFile}`);
    const subjects = parseCSV(csvFile);
    console.log(`✅ Parsed ${subjects.length} subjects`);

    // Validate data
    console.log('\n📋 Validating data...');
    let validationErrors = [];

    subjects.forEach((subject, index) => {
      if (!subject.slug) validationErrors.push(`Row ${index + 2}: Missing slug`);
      if (!subject.title) validationErrors.push(`Row ${index + 2}: Missing title`);
      if (!subject.content || subject.content.length < 100) {
        validationErrors.push(`Row ${index + 2}: Content too short (minimum 100 characters)`);
      }
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

    if (dryRun) {
      console.log('\n📊 DRY RUN - Would create the following files:');
      subjects.forEach(subject => {
        console.log(`   src/content/subjects/${subject.slug}.md`);
      });
      process.exit(0);
    }

    // Create markdown files
    console.log('\n📝 Creating markdown files...');
    let filesCreated = 0;

    subjects.forEach(subject => {
      const filePath = createMarkdownFile(subject);
      console.log(`   ✅ ${filePath}`);
      filesCreated++;
    });

    console.log(`\n✅ Successfully created ${filesCreated} subject file(s)!`);
    console.log('\n📚 Next steps:');
    console.log('   1. Run: npm run build');
    console.log('   2. Verify content is correct');
    console.log('   3. Commit changes to git');

  } catch (error) {
    console.error(`\n❌ Error: ${error.message}`);
    process.exit(1);
  }
}

main();
