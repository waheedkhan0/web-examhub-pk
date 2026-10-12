#!/usr/bin/env node

/**
 * ExamHub.pk - Content Management CLI
 * Unified interface for managing all content
 * 
 * Usage:
 *   node scripts/content-cli.js --help
 *   node scripts/content-cli.js import mcqs samples/mcqs.csv
 *   node scripts/content-cli.js import guides samples/guides.csv
 *   node scripts/content-cli.js validate mcqs
 *   node scripts/content-cli.js count
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_BASE = path.join(__dirname, '../src/content');

/**
 * Count content by type
 */
async function countContent() {
  console.log('\n📊 Content Statistics\n');

  const types = ['mcqs', 'guides', 'subjects', 'exams', 'blog'];
  let totalPages = 0;
  let totalMCQs = 0;

  for (const type of types) {
    const dir = path.join(CONTENT_BASE, type);
    if (!fs.existsSync(dir)) {
      console.log(`${type.toUpperCase()}: 0 pages, 0 questions`);
      continue;
    }

    const allFiles = getAllMarkdownFiles(dir);
    let mcqCount = 0;

    if (type === 'mcqs') {
      // Count MCQs from YAML frontmatter
      allFiles.forEach(file => {
        const content = fs.readFileSync(file, 'utf-8');
        const match = content.match(/questions:\n([\s\S]*?)---/);
        if (match) {
          const qCount = (match[1].match(/- id:/g) || []).length;
          mcqCount += qCount;
        }
      });
      totalMCQs += mcqCount;
      console.log(`${type.toUpperCase().padEnd(15)} ${allFiles.length} pages, ${mcqCount} questions`);
      totalPages += allFiles.length;
    } else {
      console.log(`${type.toUpperCase().padEnd(15)} ${allFiles.length} pages`);
      totalPages += allFiles.length;
    }
  }

  console.log(`\n${'TOTAL'.padEnd(15)} ${totalPages} pages, ~${totalMCQs} questions\n`);
}

/**
 * Get all markdown files recursively
 */
function getAllMarkdownFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  items.forEach(item => {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      files.push(...getAllMarkdownFiles(fullPath));
    } else if (item.name.endsWith('.md')) {
      files.push(fullPath);
    }
  });

  return files;
}

/**
 * Validate content
 */
async function validateContent(type) {
  console.log(`\n✅ Validating ${type}...\n`);

  const dir = path.join(CONTENT_BASE, type);
  if (!fs.existsSync(dir)) {
    console.log(`No ${type} found.`);
    return;
  }

  const files = getAllMarkdownFiles(dir);
  let issues = 0;

  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    const relativePath = path.relative(CONTENT_BASE, file);

    // Check frontmatter
    if (!content.startsWith('---')) {
      console.warn(`⚠️  ${relativePath}: Missing frontmatter start`);
      issues++;
    }

    // Check for empty descriptions
    const titleMatch = content.match(/title:\s*"(.+?)"/);
    if (!titleMatch) {
      console.warn(`⚠️  ${relativePath}: Missing title`);
      issues++;
    }

    // Check word count
    const bodyMatch = content.match(/---\n([\s\S]*?)$/);
    if (bodyMatch) {
      const wordCount = bodyMatch[1].split(/\s+/).length;
      if (wordCount < 50) {
        console.warn(`⚠️  ${relativePath}: Content too short (${wordCount} words, minimum 50)`);
        issues++;
      }
    }

    // Type-specific validation
    if (type === 'mcqs') {
      const questionCount = (content.match(/- id:/g) || []).length;
      if (questionCount === 0) {
        console.warn(`⚠️  ${relativePath}: No questions found`);
        issues++;
      }
    }
  });

  if (issues === 0) {
    console.log(`✅ All ${files.length} ${type} files are valid!\n`);
  } else {
    console.log(`\n⚠️  Found ${issues} validation issue(s)\n`);
  }
}

/**
 * List all content
 */
async function listContent(type) {
  console.log(`\n📋 ${type.toUpperCase()}\n`);

  const dir = path.join(CONTENT_BASE, type);
  if (!fs.existsSync(dir)) {
    console.log(`No ${type} found.\n`);
    return;
  }

  const files = getAllMarkdownFiles(dir);

  files.forEach(file => {
    const relativePath = path.relative(CONTENT_BASE, file);
    const content = fs.readFileSync(file, 'utf-8');
    const titleMatch = content.match(/title:\s*"(.+?)"/);
    const title = titleMatch ? titleMatch[1] : 'Untitled';
    
    if (type === 'mcqs') {
      const questionCount = (content.match(/- id:/g) || []).length;
      console.log(`  ${relativePath.padEnd(50)} (${questionCount} Q)`);
    } else {
      console.log(`  ${relativePath}`);
    }
  });

  console.log('');
}

/**
 * Display help
 */
function showHelp() {
  console.log(`
╔════════════════════════════════════════════════════════════════╗
║       ExamHub.pk Content Management CLI                        ║
╚════════════════════════════════════════════════════════════════╝

USAGE:
  node scripts/content-cli.js [command] [args]

COMMANDS:

  import mcqs <csv-file>
    Import MCQs from CSV file
    Example: node scripts/content-cli.js import mcqs samples/mcqs.csv

  import guides <csv-file>
    Import guides from CSV file
    Example: node scripts/content-cli.js import guides samples/guides.csv

  import subjects <csv-file>
    Import subjects from CSV file
    Example: node scripts/content-cli.js import subjects samples/subjects.csv

  validate [type]
    Validate content (mcqs, guides, subjects, exams, blog)
    Example: node scripts/content-cli.js validate mcqs

  count
    Display content statistics
    Example: node scripts/content-cli.js count

  list [type]
    List all content of a type
    Example: node scripts/content-cli.js list mcqs

  generate-samples
    Generate sample CSV files in ./samples/ directory
    Example: node scripts/content-cli.js generate-samples

  help, --help, -h
    Show this help message

EXAMPLES:

  # Count all content
  node scripts/content-cli.js count

  # Validate MCQs
  node scripts/content-cli.js validate mcqs

  # Import new MCQs from CSV
  node scripts/content-cli.js import mcqs my-mcqs.csv

  # Generate sample CSV templates
  node scripts/content-cli.js generate-samples

CSV FORMAT GUIDES:

  MCQs:
    subject,topic,title,description,question,option1,option2,option3,option4,correctAnswer,explanation,keyConcept,examTip,difficulty,targetExams
    
  Guides:
    slug,title,description,author,category,targetExams,tags,featured,readingTime,content

  Subjects:
    slug,title,description,syllabusWeightage,relatedExams,subtopics,icon,content

For detailed CSV format information, run individual import commands without args.
  `);
}

/**
 * Generate sample CSV files
 */
function generateSamples() {
  const samplesDir = path.join(__dirname, '../samples');
  if (!fs.existsSync(samplesDir)) {
    fs.mkdirSync(samplesDir, { recursive: true });
  }

  // Sample MCQs CSV
  const mcqSample = `subject,topic,title,description,question,option1,option2,option3,option4,correctAnswer,explanation,keyConcept,examTip,difficulty,targetExams
general-knowledge,world-capitals,World Capitals,5 MCQs on world capitals and major cities,What is the capital of France?,London,Paris,Berlin,Madrid,2,The capital of France is Paris. It is located in central France and is known as the City of Light.,World geography,Memorize major capitals of important countries,Basic,FPSC;NTS
general-knowledge,world-capitals,World Capitals,5 MCQs on world capitals and major cities,What is the capital of Japan?,Tokyo,Seoul,Beijing,Bangkok,1,Tokyo is the capital and largest city of Japan. It is located on the eastern coast.,World geography,Know capitals of G20 nations,Basic,FPSC;NTS`;

  fs.writeFileSync(path.join(samplesDir, 'mcqs-sample.csv'), mcqSample);

  // Sample Guides CSV
  const guideSample = `slug,title,description,author,category,targetExams,tags,featured,readingTime,content
"nts-gat-tips","NTS GAT Tips and Tricks","Complete guide to scoring high in NTS General Ability Test","Dr. Ahmed Khan","NTS Preparation","NTS","General Ability;Test Strategy;NTS","true","12 min read","# NTS General Ability Test (GAT)

The National Testing Service (NTS) General Ability Test is a crucial exam for many Pakistani students. This comprehensive guide will help you master the GAT.

## Understanding GAT Structure

The GAT consists of three main sections:
- Verbal (English)
- Quantitative (Math)
- Analytical

## Verbal Section Tips

1. **Reading Comprehension**: Practice with academic passages
2. **Vocabulary**: Learn roots, prefixes, and suffixes
3. **Grammar**: Focus on sentence structure

## Quantitative Section

- Arithmetic and algebra basics
- Geometry and measurements
- Data interpretation

## Time Management

Allocate your time wisely:
- 40 minutes for verbal
- 40 minutes for quantitative  
- 20 minutes for analytical

Good luck!"`;

  fs.writeFileSync(path.join(samplesDir, 'guides-sample.csv'), guideSample);

  // Sample Subjects CSV
  const subjectSample = `slug,title,description,syllabusWeightage,relatedExams,subtopics,icon,content
"world-history","World History","Comprehensive coverage of world history for competitive exams","10-15%","CSS;PMS;PPSC;FPSC","Ancient Civilizations:ancient:15|Medieval Period:medieval:20|Modern Era:modern:25","📚","# World History Overview

World history is a critical component of competitive exams in Pakistan. Understanding major events, figures, and trends helps in multiple-choice questions.

## Importance for Exams

- Tests knowledge of global events
- Covers different civilizations and cultures
- Helps understand international affairs and geopolitics

## Major Topics

### Ancient Civilizations
- Mesopotamian Civilization
- Egyptian Civilization
- Indus Valley Civilization
- Greek Civilization
- Roman Civilization

### Medieval Period
- Islamic Golden Age
- European Middle Ages
- Asian Kingdoms

### Modern Era
- Age of Discovery
- Industrial Revolution
- World Wars
- Contemporary History"`;

  fs.writeFileSync(path.join(samplesDir, 'subjects-sample.csv'), subjectSample);

  console.log(`\n✅ Sample CSV files generated in ./samples/\n`);
  console.log('   - samples/mcqs-sample.csv');
  console.log('   - samples/guides-sample.csv');
  console.log('   - samples/subjects-sample.csv\n');
}

/**
 * Main function
 */
async function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  if (!command || command === 'help' || command === '--help' || command === '-h') {
    showHelp();
    return;
  }

  try {
    switch (command) {
      case 'count':
        await countContent();
        break;

      case 'validate':
        {
          const type = args[1] || 'mcqs';
          await validateContent(type);
        }
        break;

      case 'list':
        {
          const type = args[1] || 'mcqs';
          await listContent(type);
        }
        break;

      case 'import':
        {
          const type = args[1];
          const file = args[2];

          if (!type || !file) {
            console.error('❌ Usage: import <type> <file>');
            console.error('   Types: mcqs, guides, subjects');
            process.exit(1);
          }

          let scriptPath;
          switch (type) {
            case 'mcqs':
              scriptPath = path.join(__dirname, 'import-mcqs.js');
              break;
            case 'guides':
              scriptPath = path.join(__dirname, 'import-guides.js');
              break;
            case 'subjects':
              scriptPath = path.join(__dirname, 'import-subjects.js');
              break;
            default:
              console.error(`❌ Unknown type: ${type}`);
              process.exit(1);
          }

          const { stdout, stderr } = await execPromise(`node ${scriptPath} ${file}`);
          console.log(stdout);
          if (stderr) console.error(stderr);
        }
        break;

      case 'generate-samples':
        generateSamples();
        break;

      default:
        console.error(`❌ Unknown command: ${command}\n`);
        showHelp();
        process.exit(1);
    }
  } catch (error) {
    console.error(`\n❌ Error: ${error.message}`);
    process.exit(1);
  }
}

main();
