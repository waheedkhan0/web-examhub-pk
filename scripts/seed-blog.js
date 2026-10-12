import fs from 'fs';
import path from 'path';

const blogDir = path.resolve(process.cwd(), 'src/content/blog');
fs.mkdirSync(blogDir, { recursive: true });

const posts = [
  {
    slug: 'fpsc-css-2026-mpt-syllabus-official-changes',
    title: 'FPSC CSS 2026 MPT Screening: Official Syllabus Breakdown & Preparation Rules',
    description: 'Detailed analysis of the upcoming CSS 2026 Screening Test (MPT). Scrutiny of marks distribution, negative marking policy, and high-yield scoring sections.',
    author: 'ExamHub News Desk',
    publishDate: '2026-09-01',
    updatedDate: '2026-10-10',
    tags: ['CSS 2026', 'MPT Screening', 'FPSC News', 'Syllabus Update'],
    category: 'Exam Alerts',
    content: `
## Official Overview of the CSS 2026 MPT Screening

The Federal Public Service Commission conducts the MCQ-Based Preliminary Test (MPT) as the mandatory first filter before the written CSS examination. Scoring 66 out of 200 marks (33%) is required to sit for the main written examination.

### Section-Wise Breakdown of the 200 Marks

1. **Islamic Studies / Civics (20 Marks):** Quranic basics, Pillars of Islam, Sirah milestones, and constitutional rights of minorities for non-Muslim candidates.
2. **Urdu Grammar & Translation (20 Marks):** Core Urdu grammar, sentence completion, and translation.
3. **English (50 Marks):** Vocabulary, correct usage of prepositions, sentence corrections, and reading comprehension.
4. **General Abilities (60 Marks):** Mental arithmetic, percentages, ratios, geometry, logical reasoning, and analytical problem solving.
5. **General Knowledge (50 Marks):** Everyday Science (20 Marks), Current Affairs (15 Marks), and Pakistan Affairs (15 Marks).

### Key Advice for Candidates

Do not treat the MPT as a minor obstacle. Strong preparation here provides a solid factual foundation for your compulsory written papers in February.
`
  },
  {
    slug: 'ppsc-tehsildar-recruitment-test-pattern-analysis',
    title: 'PPSC Tehsildar & Naib Tehsildar: Detailed Syllabus and Paper Pattern Analysis',
    description: 'Comprehensive guide to the upcoming Punjab Revenue Department Tehsildar examinations. Scrutiny of Land Revenue Act 1967, English composition, and General Knowledge papers.',
    author: 'Zubair Rafiq (Tehsildar)',
    publishDate: '2026-09-12',
    updatedDate: '2026-10-10',
    tags: ['PPSC', 'Tehsildar', 'Land Revenue Act', 'Revenue Department', 'Past Papers'],
    category: 'Provincial Jobs',
    content: `
## The Prestigious Role of Tehsildar in Punjab Revenue

The Tehsildar post (BPS-16) in the Punjab Revenue Department is one of the most competitive general recruitment positions administered by PPSC. Tehsildars exercise executive revenue collection, judicial demarcation, and administrative magistracy powers.

### The Two-Paper Examination Pattern

Candidates generally sit for two distinct 100-mark papers:
- **Paper 1: English Comprehension & Composition (100 Marks):** Advanced grammar, active/passive voice, direct/indirect speech, idioms, and paragraph précis.
- **Paper 2: General Knowledge & Revenue Laws (100 Marks):** 70% General Knowledge, Pakistan Studies, Islamiat, and Everyday Science; 30% specialized questions regarding the Punjab Land Revenue Act 1967 and tenancy laws.
`
  },
  {
    slug: 'nts-nat-schedule-and-university-admissions-2026',
    title: 'NTS NAT 2026 Schedule: University Admissions and Test Scoring Guide',
    description: 'Complete calendar, eligibility criteria, and scoring validity for the National Aptitude Test (NAT) used across federal and provincial universities in Pakistan.',
    author: 'ExamHub Academic Team',
    publishDate: '2026-09-20',
    updatedDate: '2026-10-10',
    tags: ['NTS', 'NAT 2026', 'University Admissions', 'Aptitude Test'],
    category: 'Admissions & Tests',
    content: `
## Navigating the National Aptitude Test (NAT)

The National Aptitude Test (NAT) is required for undergraduate admissions across dozens of affiliated public and private Pakistani universities, including COMSATS, FAST, and various federal institutions.

### Test Categories Explained

- **NAT-IE:** For Pre-Engineering candidates (Math, Physics, Chemistry focus).
- **NAT-IM:** For Pre-Medical candidates (Biology, Physics, Chemistry focus).
- **NAT-ICS:** For Computer Science students (Math, Physics, Computer Science focus).
- **NAT-IA:** For Arts & Humanities students.

All categories share a common foundation in Verbal, Analytical, and Quantitative reasoning.
`
  },
  {
    slug: 'pakistan-economic-survey-2025-2026-key-mcq-points',
    title: 'Pakistan Economic Survey 2025–2026: 50 High-Yield Facts for CSS & PPSC',
    description: 'Summary of the official Economic Survey of Pakistan. GDP growth rates, agricultural shares, inflation figures, circular debt, and export statistics vital for exams.',
    author: 'ExamHub Research Desk',
    publishDate: '2026-09-28',
    updatedDate: '2026-10-10',
    tags: ['Economic Survey', 'Pakistan Economy', 'CSS Pakistan Affairs', 'Current Affairs'],
    category: 'Study Summaries',
    content: `
## Key Economic Metrics for Competitive Exams

The Annual Pakistan Economic Survey, published by the Ministry of Finance, provides authoritative statistics that examiners frequently test in screening and descriptive exams.

### Essential Data Highlights

- **GDP Composition:** Agriculture accounts for approximately 23-24% of GDP, Industrial sector contributes 19-20%, and the Services sector dominates with around 56-58%.
- **Key Crops:** The four major crops are Cotton, Wheat, Rice, and Sugarcane.
- **Tax-to-GDP Ratio:** Historic average floats around 9% to 10.5%, representing a key target for IMF structural reform benchmarks.
`
  },
  {
    slug: 'how-to-score-80-plus-in-ppsc-gk-paper',
    title: 'How to Score 80+ in PPSC General Knowledge: The Systematic Topic Method',
    description: 'Field-tested methodology to break through the 70-mark merit barrier in competitive PPSC one-paper examinations.',
    author: 'Zubair Rafiq (Tehsildar)',
    publishDate: '2026-10-02',
    updatedDate: '2026-10-10',
    tags: ['PPSC GK', 'One Paper MCQs', 'Study Method', 'Merit List'],
    category: 'Preparation Tips',
    content: `
## Crossing the 80-Mark Threshold in PPSC

Scoring 65 in PPSC is achievable with casual preparation, but securing a merit position requires breaking past the 80-mark threshold. 

### Why Most Candidates Plateau at 65–70 Marks
Candidates usually answer basic geography and Islamic history questions correctly, but lose critical marks on:
- Everyday science physiological questions.
- Micro-details in computer keyboard shortcuts.
- Negative marking penalties on ambiguous questions.

Adopt a systematic topic-by-topic method to systematically eliminate blind spots in your preparation.
`
  },
  {
    slug: 'top-10-common-mistakes-in-css-english-precis',
    title: 'Top 10 Common Mistakes Candidates Make in the CSS English Précis Paper',
    description: 'Analysis of recurring errors highlighted in FPSC examiner reports regarding précis writing, comprehension, and vocabulary usage.',
    author: 'Nasreen Akhtar, M.Phil Linguistics',
    publishDate: '2026-10-08',
    updatedDate: '2026-10-10',
    tags: ['CSS Précis', 'English Grammar', 'FPSC Examiner Report', 'Précis Writing'],
    category: 'Academic Writing',
    content: `
## What the FPSC Examiner Reports Reveal

Every year, the official FPSC report notes that candidates fail the Précis paper due to a few common mistakes:
1. **Directly borrowing phrases:** Lifting exact phrases from the passage rather than paraphrasing into your own words.
2. **Inserting personal opinions:** Adding external commentary not present in the original text.
3. **Violating length limits:** Deviating significantly from the strict one-third length requirement.
4. **Neglecting title selection:** Providing a vague, single-word title instead of one that captures the core thesis of the passage.
`
  }
];

function seedBlog() {
  posts.forEach(post => {
    const filePath = path.join(blogDir, `${post.slug}.md`);
    const frontmatter = `---
title: "${post.title.replace(/"/g, '\\"')}"
description: "${post.description.replace(/"/g, '\\"')}"
author: "${post.author}"
publishDate: "${post.publishDate}"
updatedDate: "${post.updatedDate}"
tags: ${JSON.stringify(post.tags)}
category: "${post.category}"
---
${post.content}
`;
    fs.writeFileSync(filePath, frontmatter, 'utf-8');
    console.log(`Generated blog post: ${post.slug}`);
  });
  console.log(`Finished seeding ${posts.length} blog posts!`);
}

seedBlog();
