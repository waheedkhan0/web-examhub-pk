# ExamHub.pk - Content Management System (CMS)

Complete guide to adding, managing, and scaling content efficiently.

## 🚀 Quick Start

### View Content Statistics
```bash
node scripts/content-cli.js count
```

### Generate Sample CSV Files
```bash
node scripts/content-cli.js generate-samples
```

This creates templates in `./samples/` directory that you can modify.

### Import MCQs from CSV
```bash
node scripts/content-cli.js import mcqs path/to/mcqs.csv
```

### Import Guides from CSV
```bash
node scripts/content-cli.js import guides path/to/guides.csv
```

### Import Subjects from CSV
```bash
node scripts/content-cli.js import subjects path/to/subjects.csv
```

### Validate Content
```bash
node scripts/content-cli.js validate mcqs
node scripts/content-cli.js validate guides
node scripts/content-cli.js validate subjects
```

---

## 📊 CSV Format Reference

### MCQs CSV Format

**File:** `mcqs.csv`

**Headers:**
```
subject,topic,title,description,question,option1,option2,option3,option4,correctAnswer,explanation,keyConcept,examTip,difficulty,targetExams
```

**Example Row:**
```csv
pakistan-studies,geography,Pakistan Geography MCQs,Test your knowledge of Pakistan's geography,What is the capital of Pakistan?,Karachi,Islamabad,Peshawar,Quetta,2,Islamabad is the capital of Pakistan. It was built to replace Rawalpindi as the capital. It is centrally located in Punjab.,Pakistan Geography,Memorize all provincial capitals for FPSC,Exam-Level,CSS;PPSC;FPSC;NTS
```

**Field Descriptions:**
- `subject`: Subject slug (e.g., `pakistan-studies`, `islamiat`, `english`)
- `topic`: Topic slug (e.g., `geography`, `quran`, `grammar`)
- `title`: MCQ set title
- `description`: Brief description of the MCQ set
- `question`: The MCQ question text
- `option1-4`: The four answer options
- `correctAnswer`: Which option is correct (1-4)
- `explanation`: Why this answer is correct + why others are wrong (400+ words recommended)
- `keyConcept`: Key concept being tested (optional)
- `examTip`: Exam preparation tip (optional)
- `difficulty`: `Basic`, `Intermediate`, `Advanced`, or `Exam-Level`
- `targetExams`: Semicolon-separated exam names (e.g., `CSS;PPSC;FPSC`)

**Full Example CSV:**
```csv
subject,topic,title,description,question,option1,option2,option3,option4,correctAnswer,explanation,keyConcept,examTip,difficulty,targetExams
pakistan-studies,geography,Pakistan Geography MCQs,Comprehensive geography questions about Pakistan,What is the total area of Pakistan?,796,096 sq km,881,913 sq km,2,110,206 sq km,341,499 sq km,1,Pakistan covers an area of 796,096 square kilometers. This makes it the 5th largest country in Asia by area. Option B (881,913) is close to the correct figure but refers to a different measurement. Option C (2,110,206) is far too large. Option D is incorrect.,Pakistan's Area,Memorize key geographical statistics for FPSC/CSS,Exam-Level,CSS;PPSC;FPSC;NTS
general-knowledge,science,Basic Science MCQs,Science fundamentals for competitive exams,What is the chemical formula for salt?,NaCl,NaCI2,Na2Cl,NaCl2,1,The chemical formula for common salt (sodium chloride) is NaCl. The sodium atom has a +1 charge while the chloride ion has a -1 charge which combines to form a neutral compound. Other options represent incorrect stoichiometric ratios.,Chemistry Basics,Common science formulas appear frequently in NTS and FPSC exams,Basic,NTS;FPSC;PPSC
```

### Guides CSV Format

**File:** `guides.csv`

**Headers:**
```
slug,title,description,author,category,targetExams,tags,featured,readingTime,content
```

**Example Row:**
```csv
css-english-2026,"Complete CSS English Preparation Guide 2026","Master CSS English paper with proven strategies...","Dr. Ahmad Khan","CSS Preparation","CSS;PMS","English;Writing;Strategy","true","15 min read","# CSS English Paper

[Full guide content here - minimum 800 words]"
```

**Field Descriptions:**
- `slug`: URL-friendly name (e.g., `css-english-2026`)
- `title`: Guide title (50-60 characters recommended)
- `description`: Short summary (150-160 characters)
- `author`: Author name
- `category`: Category (e.g., `CSS Preparation`, `PPSC Strategy`)
- `targetExams`: Semicolon-separated (e.g., `CSS;PMS;PPSC`)
- `tags`: Semicolon-separated tags (e.g., `English;Writing;Strategy`)
- `featured`: `true` or `false`
- `readingTime`: Estimated read time (e.g., `15 min read`)
- `content`: Full guide content (minimum 800 words recommended)

**Note:** For multi-line content, use the inline format and include newlines with `\n` or use proper CSV quoting.

### Subjects CSV Format

**File:** `subjects.csv`

**Headers:**
```
slug,title,description,syllabusWeightage,relatedExams,subtopics,icon,content
```

**Example Row:**
```csv
current-affairs,"Current Affairs","Master current affairs for competitive exams","15-20%","CSS;PPSC;FPSC;NTS","National Politics:national-politics:20|International:international:15|Economy:economy:10","📰","# Current Affairs Overview\n\n[Full content here]"
```

**Field Descriptions:**
- `slug`: URL-friendly name
- `title`: Subject title
- `description`: Brief description
- `syllabusWeightage`: Percentage allocation (e.g., `15-20%`)
- `relatedExams`: Semicolon-separated exam names
- `subtopics`: Pipe-separated format: `name:slug:count|name2:slug2:count2`
  - Example: `Geography:geography:15|History:history:20|Politics:politics:25`
- `icon`: Emoji or icon name
- `content`: Subject overview content (300+ words recommended)

---

## 🔄 CSV Import Workflow

### Step 1: Prepare Your CSV File

Create a CSV file with your content. You can:
- Use Excel and export as CSV
- Use Google Sheets and download as CSV
- Create manually in a text editor

### Step 2: Validate CSV Format

Ensure your CSV has:
- Correct headers (exactly as specified)
- All required fields filled
- Proper escaping of special characters (quotes should be escaped)

### Step 3: Run Dry Run (Optional)

```bash
# Test without creating files
node scripts/content-cli.js import mcqs your-file.csv --dry-run
```

### Step 4: Validate Only (Optional)

```bash
# Validate CSV without importing
node scripts/content-cli.js import mcqs your-file.csv --validate-only
```

### Step 5: Import

```bash
# Import and create files
node scripts/content-cli.js import mcqs your-file.csv
```

### Step 6: Build and Test

```bash
# Rebuild the site
pnpm run build

# Start dev server
pnpm run dev

# Visit http://localhost:3000 to verify
```

### Step 7: Commit Changes

```bash
git add -A
git commit -m "Add new MCQ sets: [list topics]"
git push
```

---

## 📋 Content Management Commands

### Count All Content

```bash
node scripts/content-cli.js count
```

**Output Example:**
```
📊 Content Statistics

MCQS             30 pages, 750 questions
GUIDES           15 pages, 0 questions
SUBJECTS         8 pages, 0 questions
EXAMS            7 pages, 0 questions
BLOG             6 pages, 0 questions

TOTAL            66 pages, ~750 questions
```

### List Content by Type

```bash
# List all MCQs
node scripts/content-cli.js list mcqs

# List all guides
node scripts/content-cli.js list guides

# List all subjects
node scripts/content-cli.js list subjects
```

### Validate Content Quality

```bash
# Validate MCQs
node scripts/content-cli.js validate mcqs

# Validate guides
node scripts/content-cli.js validate guides

# Validate specific type
node scripts/content-cli.js validate subjects
```

---

## 🎯 Bulk Import Examples

### Example 1: Add 50 MCQs at Once

1. Create `new-mcqs.csv` with 50 rows
2. Run: `node scripts/content-cli.js import mcqs new-mcqs.csv`
3. Run: `pnpm run build`
4. Verify and commit

### Example 2: Add Multiple Guides

1. Create `new-guides.csv` with guide data
2. Run: `node scripts/content-cli.js import guides new-guides.csv`
3. Build and test

### Example 3: Add New Subject with Subtopics

1. Create `new-subject.csv` with subject data
2. Include subtopics in format: `Topic1:topic1:20|Topic2:topic2:15`
3. Run: `node scripts/content-cli.js import subjects new-subject.csv`
4. MCQ pages for each subtopic will link automatically

---

## ✅ Quality Checklist for CSV Content

Before importing, verify:

### MCQs
- [ ] All questions are clear and unambiguous
- [ ] All 4 options are plausible
- [ ] Correct answer (1-4) is accurate
- [ ] Explanation is 200+ words
- [ ] Explanation covers why others are wrong
- [ ] Key concepts identified
- [ ] Target exams correctly specified
- [ ] Difficulty level is accurate

### Guides
- [ ] Slug is URL-friendly (lowercase, hyphens)
- [ ] Content is 800+ words
- [ ] Original, non-plagiarized content
- [ ] Properly formatted with headers
- [ ] Includes examples or case studies
- [ ] Contains actionable tips
- [ ] Internal links to related MCQs (optional but good)

### Subjects
- [ ] Description is 300+ words
- [ ] Subtopics are realistic
- [ ] Related exams are correctly listed
- [ ] Icon is appropriate
- [ ] Content explains importance and coverage

---

## 🛠️ Troubleshooting

### CSV Import Fails: "Missing required headers"
**Solution:** Ensure your CSV has exactly these headers (case-sensitive):
```
subject,topic,title,description,question,option1,option2,option3,option4,correctAnswer,explanation,keyConcept,examTip,difficulty,targetExams
```

### CSV Import Fails: "Invalid correctAnswer"
**Solution:** `correctAnswer` must be 1, 2, 3, or 4 (the option number, not the text)

### CSV Import Fails: "No matching version found"
**Solution:** Run `pnpm install` to ensure all dependencies are installed

### Imported files don't appear after build
**Solution:** 
1. Verify files were created: `ls src/content/mcqs/[subject]/`
2. Check build output: `pnpm run build`
3. Rebuild: `rm -rf dist && pnpm run build`

### CSV with commas in content causes parsing issues
**Solution:** Enclose problematic fields in quotes:
```csv
subject,topic,title,description,...
"pakistan-studies","geography","Geography, Borders & Map",""This test covers geography, natural resources, and borders"",...
```

---

## 📈 Content Scaling Strategy

### Monthly Content Goals

**Month 1-2:** Establish patterns
- 10-15 MCQ sets (200-300 questions)
- 2-3 new guides
- 1-2 new subjects

**Month 3-6:** Accelerate
- 20-30 MCQ sets monthly (400-600 questions)
- 4-6 new guides monthly
- 2-3 new subjects monthly

**Month 6+:** Scale aggressively
- 50+ MCQ sets monthly (1000+ questions)
- 10+ new guides monthly
- Mix of content types

### Content Organization for Scale

**Organize CSV files by batch:**
```
mcqs-batch-1.csv  (20 questions)
mcqs-batch-2.csv  (30 questions)
guides-batch-1.csv (5 guides)
subjects-batch-1.csv (2 subjects)
```

**Import one batch at a time:**
```bash
node scripts/content-cli.js import mcqs mcqs-batch-1.csv
pnpm run build
git commit -m "Add batch 1 MCQs"

node scripts/content-cli.js import mcqs mcqs-batch-2.csv
pnpm run build
git commit -m "Add batch 2 MCQs"
```

---

## 🎓 Content Generation Tips

### For MCQs
- Aim for 8-12 questions per topic
- Include a mix of difficulty levels
- Explanations should reference official sources
- Include exam tips that are actually useful
- Test questions should mirror real exam patterns

### For Guides
- Structure with clear headings and sections
- Include real examples and case studies
- Break complex topics into digestible parts
- Add action items or next steps
- Include internal links to related MCQs

### For Subjects
- Define scope and importance
- List all major subtopics
- Explain how it appears in exams
- Provide resource recommendations
- Connect to other subjects

---

## 📚 Sample CSV Files

Generate sample CSV files to use as templates:

```bash
node scripts/content-cli.js generate-samples
```

This creates:
- `samples/mcqs-sample.csv`
- `samples/guides-sample.csv`
- `samples/subjects-sample.csv`

You can copy and modify these to create new content.

---

## 🔐 Best Practices

1. **Always validate before importing**
   ```bash
   node scripts/content-cli.js import mcqs file.csv --validate-only
   ```

2. **Do dry runs for large imports**
   ```bash
   node scripts/content-cli.js import mcqs file.csv --dry-run
   ```

3. **Commit frequently**
   ```bash
   git add src/content/
   git commit -m "Add [number] MCQs on [topic]"
   ```

4. **Test after each import**
   ```bash
   pnpm run build
   pnpm run dev
   # Visit http://localhost:3000/mcqs/[subject]/[topic]
   ```

5. **Keep CSV backups**
   - Store all CSV files in a backup directory
   - Version control them in git

6. **Document content sources**
   - Keep notes on where content came from
   - Ensure all original work or properly attributed

---

## 🚀 Advanced Usage

### Custom Subject Creation Without CSV

If you prefer to manually create subject files:

1. Create file: `src/content/subjects/[slug].md`
2. Add frontmatter with metadata
3. Write description
4. Run `pnpm run build`

### Batch Content Updates

To update multiple content files at once:

```bash
# Generate new CSV with corrections
node scripts/content-cli.js import mcqs corrected-mcqs.csv

# This will create/overwrite the files with new data
pnpm run build
```

### Content Analytics

View detailed content statistics:

```bash
node scripts/content-cli.js count
node scripts/content-cli.js list mcqs
node scripts/content-cli.js validate mcqs
```

---

## 📞 Need Help?

For detailed help on each import command:

```bash
# MCQs import help
node scripts/import-mcqs.js

# Guides import help
node scripts/import-guides.js

# Subjects import help
node scripts/import-subjects.js

# General help
node scripts/content-cli.js help
```

---

## 🎯 Next Steps

1. Generate sample CSV files: `node scripts/content-cli.js generate-samples`
2. Modify samples with your content
3. Validate: `node scripts/content-cli.js import mcqs samples/mcqs-sample.csv --validate-only`
4. Import: `node scripts/content-cli.js import mcqs samples/mcqs-sample.csv`
5. Build: `pnpm run build`
6. Test: `pnpm run dev`
7. Commit: `git add -A && git commit -m "Add new content"`

---

**Last Updated:** October 13, 2026
**Version:** 1.0
**Status:** Production Ready
