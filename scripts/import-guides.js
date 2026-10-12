#!/usr/bin/env node

/**
 * ExamHub.pk Content Management System
 * Import Guides from CSV and generate markdown files
 * 
 * Usage:
 *   node scripts/import-guides.js path/to/guides.csv
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_DIR = path.join(__dirname, '../src/content/guides');

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
  const requiredHeaders = ['slug', 'title', 'description', 'author', 'category', 'targetExams', 'tags', 'featured', 'readingTime', 'content'];

  const missingHeaders = requiredHeaders.filter(h => !headers.includes(h));
  if (missingHeaders.length > 0) {
    throw new Error(`Missing required headers: ${missingHeaders.join(', ')}`);
  }

  const guides = [];
  for (let i = 1; i < lines.length; i++) {
    // Simple CSV parsing (doesn't handle commas in values)
    const values = lines[i].split(',').map(v => v.trim());
    const row = {};
    headers.forEach((header, index) => {
      row[header] = values[index] || '';
    });

    if (row.slug && row.title && row.content) {
      guides.push(row);
    }
  }

  return guides;
}

/**
 * Generate markdown frontmatter
 */
function generateFrontmatter(guide) {
  const today = new Date().toISOString().split('T')[0];
  return `---
title: "${guide.title}"
description: "${guide.description}"
author: "${guide.author}"
authorRole: "Education Specialist"
publishDate: "${today}"
updatedDate: "${today}"
readingTime: "${guide.readingTime || '10 min read'}"
category: "${guide.category}"
targetExams: [${guide.targetExams.split(';').map(e => `"${e.trim()}"`).join(', ')}]
tags: [${guide.tags.split(';').map(t => `"${t.trim()}"`).join(', ')}]
featured: ${guide.featured?.toLowerCase() === 'true' || guide.featured === '1' ? 'true' : 'false'}
---
`;
}

/**
 * Create markdown file for guide
 */
function createMarkdownFile(guide) {
  if (!fs.existsSync(CONTENT_DIR)) {
    fs.mkdirSync(CONTENT_DIR, { recursive: true });
  }

  const filePath = path.join(CONTENT_DIR, `${guide.slug}.md`);
  const frontmatter = generateFrontmatter(guide);
  const content = frontmatter + '\n' + guide.content + '\n';

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
ExamHub.pk - Guides CSV Import Tool

Usage:
  node scripts/import-guides.js <csv-file> [options]

Options:
  --validate-only    Just validate the CSV without importing
  --dry-run         Show what would be imported without creating files

CSV Format (headers required):
  slug,title,description,author,category,targetExams,tags,featured,readingTime,content

Notes:
  - slug: URL-friendly name (e.g., "css-english-preparation")
  - targetExams: semicolon-separated (e.g., "CSS;PMS;PPSC")
  - tags: semicolon-separated (e.g., "English;Writing;CSS")
  - featured: true/1 or false/0
  - content: Main guide text (can include markdown)

Example:
  node scripts/import-guides.js guides.csv
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
    const guides = parseCSV(csvFile);
    console.log(`✅ Parsed ${guides.length} guides`);

    // Validate data
    console.log('\n📋 Validating data...');
    let validationErrors = [];

    guides.forEach((guide, index) => {
      if (!guide.slug) validationErrors.push(`Row ${index + 2}: Missing slug`);
      if (!guide.title) validationErrors.push(`Row ${index + 2}: Missing title`);
      if (!guide.content || guide.content.length < 100) {
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
      guides.forEach(guide => {
        console.log(`   src/content/guides/${guide.slug}.md`);
      });
      process.exit(0);
    }

    // Create markdown files
    console.log('\n📝 Creating markdown files...');
    let filesCreated = 0;

    guides.forEach(guide => {
      const filePath = createMarkdownFile(guide);
      console.log(`   ✅ ${filePath}`);
      filesCreated++;
    });

    console.log(`\n✅ Successfully created ${filesCreated} guide file(s)!`);
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
