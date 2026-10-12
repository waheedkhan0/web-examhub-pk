# ExamHub.pk - Content Management System (CMS) Quick Guide

## ✨ What's New: Powerful CMS for Scaling Content

Your ExamHub.pk site now includes a **professional-grade content management system** that lets you add thousands of MCQs, guides, and subjects through simple CSV imports. No more manual editing!

---

## 🎯 Key Features

✅ **CSV Bulk Import** - Add 50+ MCQs/guides in minutes  
✅ **Multiple Content Types** - MCQs, Guides, Subjects, Exams, Blog  
✅ **Automated Validation** - Ensure quality before publishing  
✅ **CLI Tools** - Easy-to-use command-line interface  
✅ **Dry Run Testing** - Preview changes before creating files  
✅ **Sample Templates** - Pre-made CSV samples to get started  
✅ **Content Statistics** - Track your content growth  
✅ **Flexible Organization** - Organize content any way you want  

---

## 🚀 Quick Start (5 Minutes)

### 1. Generate Sample CSV Files

```bash
cd /Users/waheedkhan/Projects/examhub-pk
npm run cms:samples
```

This creates 3 sample CSV files in `./samples/`:
- `mcqs-sample.csv` - Template for MCQs
- `guides-sample.csv` - Template for guides
- `subjects-sample.csv` - Template for subjects

### 2. View Content Statistics

```bash
npm run cms:count
```

Output shows how many pages and questions you have.

### 3. Import Sample Content (Test)

```bash
npm run cms:import-mcqs samples/mcqs-sample.csv --dry-run
```

The `--dry-run` flag shows what would be imported without creating files.

### 4. Actually Import

```bash
npm run cms:import-mcqs samples/mcqs-sample.csv
```

### 5. Build and Test

```bash
pnpm run build
pnpm run dev
```

Visit `http://localhost:3000/mcqs/general-knowledge/world-capitals` to see the new content!

---

## 📊 Available Commands

### Count Content
```bash
npm run cms:count

# Output:
# 📊 Content Statistics
# MCQS            9 pages, 0 questions
# GUIDES          16 pages
# SUBJECTS        8 pages
# EXAMS           7 pages
# BLOG            6 pages
# TOTAL           46 pages
```

### Generate Samples
```bash
npm run cms:samples
```

Creates template CSV files in `./samples/` directory.

### Import MCQs
```bash
npm run cms:import-mcqs path/to/mcqs.csv
```

### Import Guides
```bash
npm run cms:import-guides path/to/guides.csv
```

### Import Subjects
```bash
npm run cms:import-subjects path/to/subjects.csv
```

### Validate Content
```bash
npm run cms:validate mcqs
npm run cms:validate guides
npm run cms:validate subjects
```

### Full Help
```bash
npm run cms help
# or
node scripts/content-cli.js help
```

---

## 📝 CSV File Format Cheat Sheet

### MCQs CSV

**Minimum headers required:**
```
subject,topic,title,description,question,option1,option2,option3,option4,correctAnswer,explanation,keyConcept,examTip,difficulty,targetExams
```

**Example row:**
```csv
general-knowledge,world-capitals,World Capitals,Test your geography,What is the capital of France?,London,Paris,Berlin,Madrid,2,Paris is the capital of France located in central France.,World Geography,Know major capitals for FPSC,Basic,FPSC;NTS
```

**Field Guide:**
- `subject`: Slug like `pakistan-studies`, `islamiat`, `english`
- `topic`: Slug like `geography`, `quran`, `grammar`
- `correctAnswer`: 1, 2, 3, or 4 (which option is correct)
- `explanation`: Why correct + why others wrong (200+ words)
- `difficulty`: `Basic`, `Intermediate`, `Advanced`, or `Exam-Level`
- `targetExams`: Semicolon-separated like `CSS;PPSC;FPSC;NTS`

### Guides CSV

**Headers:**
```
slug,title,description,author,category,targetExams,tags,featured,readingTime,content
```

**Example:**
```csv
css-english-2026,Complete CSS English Guide,Master CSS English...,Dr. Khan,CSS,CSS;PMS,English;Writing,true,15 min read,"# CSS English\n\nFull guide content here..."
```

### Subjects CSV

**Headers:**
```
slug,title,description,syllabusWeightage,relatedExams,subtopics,icon,content
```

**Example with subtopics:**
```csv
current-affairs,Current Affairs,Master CA...,15-20%,CSS;PPSC;FPSC,National:national:20|International:intl:15|Economy:economy:10,📰,"# Overview\n\nContent..."
```

**Subtopics format:** `Name:slug:count|Name2:slug2:count2`

---

## 🎯 Real-World Workflow: Adding 100 MCQs

### Step 1: Create Your CSV File

Create `my-mcqs.csv` with 100 rows of MCQ data:
```
pakistan-studies,history,Pakistan Freedom Movement MCQs,...
pakistan-studies,history,Pakistan Freedom Movement MCQs,...
pakistan-studies,history,Pakistan Freedom Movement MCQs,...
[... 97 more rows ...]
```

Or use Excel/Google Sheets and export as CSV.

### Step 2: Validate (Optional but Recommended)

```bash
npm run cms:import-mcqs my-mcqs.csv --validate-only
```

Output tells you if there are any errors before importing.

### Step 3: Dry Run (Optional)

```bash
npm run cms:import-mcqs my-mcqs.csv --dry-run
```

Shows what files would be created without actually creating them.

### Step 4: Import

```bash
npm run cms:import-mcqs my-mcqs.csv
```

Creates all 100 MCQ markdown files automatically in correct folders!

### Step 5: Build and Deploy

```bash
pnpm run build
pnpm run dev  # Test locally

git add -A
git commit -m "Add 100 MCQs on Pakistan Freedom Movement"
git push
```

**Result:** 100 new MCQ pages automatically indexed and linked! 🎉

---

## 📂 File Organization

After importing, files are organized automatically:

```
src/content/
├── mcqs/
│   ├── pakistan-studies/
│   │   ├── geography.md (imported)
│   │   ├── history.md (imported)
│   │   └── economy.md (imported)
│   ├── islamiat/
│   ├── english/
│   └── ...
├── guides/
│   ├── css-english-2026.md (imported)
│   └── ...
├── subjects/
│   ├── current-affairs.md (imported)
│   └── ...
└── config.ts
```

**Automatic routing:**
- `src/content/mcqs/subject/topic.md` → `/mcqs/subject/topic/`
- `src/content/guides/slug.md` → `/guides/slug/`
- `src/content/subjects/slug.md` → `/subjects/slug/`

---

## 🔄 Workflow for Rapid Content Growth

### Week 1-2: Initial Setup
```bash
npm run cms:samples           # Get templates
# Edit samples to your data
npm run cms:import-mcqs samples/mcqs-sample.csv
pnpm run build
```

### Week 3-4: Batch Addition
```bash
# Add 50 MCQs
npm run cms:import-mcqs batch-1-mcqs.csv

# Add 10 guides
npm run cms:import-guides batch-1-guides.csv

# Add 3 subjects
npm run cms:import-subjects batch-1-subjects.csv

pnpm run build
git add -A && git commit -m "Add batch 1 content"
```

### Month 2: Scale Up
```bash
# Monthly: Add 100-200 MCQs
for batch in batch-*.csv; do
  npm run cms:import-mcqs "$batch"
done

pnpm run build
git add -A && git commit -m "Monthly content update"
```

---

## ✅ Content Quality Checklist

Before importing MCQs, ensure:

- [ ] Subject and topic slugs are consistent with existing content
- [ ] Questions are clear and unambiguous
- [ ] All 4 options are plausible
- [ ] Correct answer (1-4) is accurate
- [ ] Explanation is 200+ words
- [ ] Explanation covers why other options are wrong
- [ ] Key concepts are identified
- [ ] Exam tips are realistic
- [ ] Difficulty level matches exam standards
- [ ] Target exams are correctly specified

---

## 🛠️ Troubleshooting

### "File not found"
```bash
# Make sure file path is correct
ls my-mcqs.csv

# Try with full path
npm run cms:import-mcqs /full/path/to/mcqs.csv
```

### "Missing required headers"
```bash
# Check that your CSV has EXACTLY these headers (case-sensitive)
# subject,topic,title,description,question,option1,option2,option3,option4,correctAnswer,explanation,keyConcept,examTip,difficulty,targetExams
```

### "Invalid correctAnswer"
```bash
# correctAnswer must be 1, 2, 3, or 4 (not the option text!)
# Correct: correctAnswer = 2
# Wrong: correctAnswer = "Option B"
```

### "No files created"
```bash
# Check if build was successful
pnpm run build

# Check if files exist
ls src/content/mcqs/[subject]/

# Try importing again with verbose output
npm run cms:import-mcqs your-file.csv
```

### "CSV parsing fails with commas"
```bash
# Enclose problematic fields in quotes:
# "pakistan-studies","geography","Borders, Geography, Maps","..."
```

---

## 💡 Pro Tips

### Tip 1: Organize Imports by Batch
```bash
# Instead of one large CSV
# Create multiple smaller CSVs:
mcqs-batch-1.csv (50 questions)
mcqs-batch-2.csv (50 questions)
mcqs-batch-3.csv (50 questions)

# Import one at a time:
npm run cms:import-mcqs mcqs-batch-1.csv && pnpm run build && git commit -m "Batch 1"
npm run cms:import-mcqs mcqs-batch-2.csv && pnpm run build && git commit -m "Batch 2"
npm run cms:import-mcqs mcqs-batch-3.csv && pnpm run build && git commit -m "Batch 3"
```

### Tip 2: Create Templates
```bash
# Save your first successful CSV as a template
cp my-successful-mcqs.csv templates/mcqs-template.csv

# Use for future imports
cp templates/mcqs-template.csv new-mcqs.csv
# Edit new-mcqs.csv with your data
npm run cms:import-mcqs new-mcqs.csv
```

### Tip 3: Automate with Scripts
```bash
# Create a bash script to import all CSV files in a directory
for file in batch-*.csv; do
  echo "Importing $file..."
  npm run cms:import-mcqs "$file"
  pnpm run build
  git add -A
  git commit -m "Import $(basename $file)"
done
```

### Tip 4: Version Control Your CSVs
```bash
# Keep all CSV files in git for backup/history
mkdir data/
cp my-mcqs.csv data/mcqs-v1-20261013.csv

git add data/
git commit -m "Backup MCQ data"
```

---

## 📈 Scaling Strategy

### Phase 1: Month 1 (Establish)
- 50-100 MCQs → 75 total
- 5-10 guides → 20 total
- Target: 100+ pages

### Phase 2: Month 2-3 (Build)
- 200+ MCQs/month → 300+ total
- 15+ guides/month → 50 total
- Target: 400+ pages

### Phase 3: Month 4-6 (Scale)
- 300+ MCQs/month → 1000+ total
- 20+ guides/month → 100 total
- Target: 1000+ pages, 3000+ questions

### Phase 4: Month 7-12 (Dominate)
- Maintain 500+ MCQs/month
- Mix of new content types
- Target: 2000+ pages, 5000+ questions

---

## 🎓 Content Management Best Practices

1. **Always backup before large imports**
   ```bash
   cp -r src/content src/content-backup
   ```

2. **Test in dry-run mode first**
   ```bash
   npm run cms:import-mcqs file.csv --dry-run
   ```

3. **Commit frequently**
   ```bash
   # After every batch
   git add -A && git commit -m "Add [N] MCQs on [topic]"
   ```

4. **Keep consistent naming**
   - Slugs should be lowercase with hyphens
   - Exams: CSS, PMS, PPSC, FPSC, KPPSC, NTS, SPSC
   - Subjects: pakistan-studies, islamiat, english, etc.

5. **Document your workflow**
   ```
   Keep notes on:
   - CSV locations and versions
   - Import dates and amounts
   - Any custom changes made
   ```

---

## 🚀 Next Steps

1. **Generate samples:**
   ```bash
   npm run cms:samples
   ```

2. **Review sample files:**
   ```bash
   cat samples/mcqs-sample.csv
   cat samples/guides-sample.csv
   cat samples/subjects-sample.csv
   ```

3. **Create your own CSV:**
   - Copy a sample
   - Replace data with your content
   - Validate format

4. **Test import:**
   ```bash
   npm run cms:import-mcqs your-file.csv --validate-only
   npm run cms:import-mcqs your-file.csv --dry-run
   npm run cms:import-mcqs your-file.csv  # Import for real
   ```

5. **Build and deploy:**
   ```bash
   pnpm run build
   pnpm run dev  # Test
   git add -A && git commit -m "Add new content"
   git push
   ```

---

## 📚 Documentation Files

For complete reference, see:

- **`CONTENT_MANAGEMENT.md`** - Full CMS documentation
- **`README.md`** - Project overview and deployment
- **`PRE_ADSENSE_CHECKLIST.md`** - AdSense approval checklist
- **`CONTENT_EXPANSION.md`** - 12-month growth roadmap

---

## 💬 Quick Command Reference

```bash
# View help
npm run cms help

# View statistics
npm run cms:count

# Generate samples
npm run cms:samples

# Import MCQs
npm run cms:import-mcqs path/to/file.csv

# Import guides
npm run cms:import-guides path/to/file.csv

# Import subjects
npm run cms:import-subjects path/to/file.csv

# Validate content
npm run cms:validate mcqs

# Build site
pnpm run build

# Start dev server
pnpm run dev
```

---

## 🎉 You're Ready!

Your CMS is fully operational. You can now:

✅ Add 100+ MCQs in minutes  
✅ Create guides without manual file editing  
✅ Organize content flexibly  
✅ Scale rapidly without complexity  
✅ Maintain quality through validation  
✅ Version control all content  

**Start by running:**
```bash
npm run cms:samples
npm run cms:count
npm run cms help
```

Happy content creating! 🚀

---

**Last Updated:** October 13, 2026  
**Version:** 1.0  
**Status:** Production Ready
