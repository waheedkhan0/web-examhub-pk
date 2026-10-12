import fs from 'fs';
import path from 'path';

const examsDir = path.resolve(process.cwd(), 'src/content/exams');
const subjectsDir = path.resolve(process.cwd(), 'src/content/subjects');

const examsData = [
  {
    slug: 'css',
    title: 'CSS Competitive Examination',
    fullName: 'Central Superior Services Examination',
    description: 'The premier elite federal civil service examination conducted annually by the Federal Public Service Commission (FPSC) for recruitment to BPS-17 posts.',
    conductingBody: 'Federal Public Service Commission (FPSC)',
    frequency: 'Annual (MPT screening in November, Written in February/March)',
    eligibility: 'Bachelor\'s degree (14 years education) with at least 2nd Division, Age 21-30 years (with 2 years relaxation for government servants & special quotas).',
    examFormat: 'MPT (200 MCQs preliminary) followed by 1200 marks written examination (600 Compulsory + 600 Optional), Medical, Psychological Assessment & Viva Voce (300 marks).',
    updatedDate: '2026-10-10',
    featuredSubjects: ['English Essay', 'English Precis & Composition', 'Current Affairs', 'Pakistan Affairs', 'General Science & Ability', 'Islamic Studies'],
    keyStats: [
      { label: 'Annual Applicants', value: '35,000+' },
      { label: 'MPT Pass Rate', value: '65-70%' },
      { label: 'Written Final Pass Rate', value: '1.8 - 2.5%' },
      { label: 'Total Allocated Groups', value: '12 Occupational Groups' }
    ],
    content: `
## Overview of the CSS Competitive Examination

The Central Superior Services (CSS) examination stands as Pakistan's most prestigious competitive gateway into civil administration, diplomacy, police management, customs, and fiscal governance. Overseen directly by the Federal Public Service Commission under Article 242 of the Constitution of the Islamic Republic of Pakistan, it selects officers destined for career leadership across the federation.

### The Examination Architecture

The examination is systematically structured into four core evaluation phases:

1. **MCQ-Based Preliminary Test (MPT):** A mandatory 200-mark screening filter testing English (50 marks), General Abilities/Math (60 marks), General Knowledge (50 marks), and Islamiat/Civics (40 marks). Candidates must score at least 33% (66/200) with no negative marking to qualify for the main written examination.
2. **Main Written Examination (1200 Marks):** 
   - **Compulsory Subjects (600 Marks):** English Essay (100), English Precis & Composition (100), General Science & Ability (100), Current Affairs (100), Pakistan Affairs (100), and Islamic Studies or Comparative Religion (100). Passing threshold is 40% in each compulsory paper (or 50% aggregate across GK papers 1, 2, and 3).
   - **Optional Subjects (600 Marks):** Candidates select subjects from designated groups totaling 600 marks (e.g., Political Science, International Relations, Public Administration, History, Economics). Minimum passing threshold is 33%.
3. **Medical & Psychological Assessment:** Comprehensive profiling of mental agility, ethical judgment, leadership capability, and emotional resilience under stress.
4. **Viva Voce (300 Marks):** In-depth oral defense before an FPSC panel assessing broad intellectual vision, critical reasoning, communication fluency, and patriotism.

### Essential Strategic Advice for Aspirants

Success in CSS demands academic rigor rather than superficial memorization. The examiner reports consistently criticize candidate papers for rote-learned clichés, weak grammatical syntax, and absence of analytical argument. Make reading standard international periodicals (such as Foreign Affairs and The Economist) and daily domestic editorials (Dawn) a daily discipline.
`
  },
  {
    slug: 'ppsc',
    title: 'PPSC One-Paper MCQs Examination',
    fullName: 'Punjab Public Service Commission General Recruitment',
    description: 'Comprehensive competitive examinations and screening tests conducted by PPSC for provincial civil services, lectureships, Tehsildar, Sub-Inspector, and executive vacancies.',
    conductingBody: 'Punjab Public Service Commission (PPSC)',
    frequency: 'Year-round recruitment based on department requisitions',
    eligibility: 'Graduation / Master\'s depending on post level (BPS-11 to BPS-17), Age limit usually 21-30 with general 5-year gender relaxations.',
    examFormat: '100 MCQs (90 minutes duration) with negative marking of 0.25 marks per wrong answer. High-scoring candidates qualify for departmental interviews.',
    updatedDate: '2026-10-10',
    featuredSubjects: ['Pakistan Studies', 'General Knowledge', 'Islamiat', 'Everyday Science', 'Basic Math', 'Urdu', 'English', 'Computer Skills'],
    keyStats: [
      { label: 'Test Questions', value: '100 MCQs' },
      { label: 'Test Duration', value: '90 Minutes' },
      { label: 'Negative Marking', value: '-0.25 per error' },
      { label: 'Merit Cutoff Average', value: '68 - 82 / 100' }
    ],
    content: `
## Understanding the PPSC One-Paper MCQs Pattern

The Punjab Public Service Commission (PPSC) recruits thousands of officers across Punjab every year. Unlike descriptive narrative tests, the signature PPSC 100-mark single paper demands sharp factual recall, conceptual precision, and rigorous time management.

### Breakdown of the 100-Mark General Paper

Most general recruitment tests follow a standardized 10-part syllabus distribution:
- **General Knowledge & World Geography (15-20%):** Capitals, currencies, head of states, international straits, mountain ranges, and United Nations agencies.
- **Pakistan Studies & Constitutional History (15-20%):** Post-1857 movements, 1940 Resolution, 1973 Constitution articles, geography, barrages, and national institutions.
- **Islamic Studies (10-15%):** Quranic revelations, Ghazwat, Khulafa-e-Rashideen, Sahih Hadith collections, and basic Islamic jurisprudence.
- **Everyday Science & Basic Mathematics (15-20%):** Human physiology, vitamins, diseases, metric system, percentages, ratios, algebra, and basic probability.
- **English Grammar & Vocabulary (10-15%):** Prepositions, active/passive voice, direct/indirect narration, idiomatic pairs, and high-frequency screening vocabulary.
- **Urdu Literature & Grammatical Terms (10%):** Famous poetic collections, authors, idioms (Zarb-ul-Amsal), and literary awards.
- **Computer & Information Technology (10%):** Microsoft Office keyboard shortcuts, internet protocols, storage hierarchies, and cybersecurity terms.

### The Negative Marking Trap

PPSC enforces a strict penalty of -0.25 marks for every incorrect answer. Indiscriminate blind guessing will destroy your merit ranking. Aspirants should only eliminate options logically when at least two can be ruled out with certainty.
`
  },
  {
    slug: 'fpsc',
    title: 'FPSC General Recruitment & Screening',
    fullName: 'Federal Public Service Commission General Recruitment Tests',
    description: 'Recruitment tests for federal officer positions including Assistant Director FIA, Inspector Customs, Appraising Officer, NAB, and Intelligence Bureau.',
    conductingBody: 'Federal Public Service Commission (FPSC)',
    frequency: 'Published via Consolidated Advertisements (Phases 1 through 12)',
    eligibility: 'Second Class or Grade \'C\' Bachelor\'s Degree in relevant discipline.',
    examFormat: '100 MCQs (Part-I: English 20 Marks, Part-II: General Intelligence / Professional 80 Marks). No negative marking in standard screening.',
    updatedDate: '2026-10-10',
    featuredSubjects: ['English Grammar', 'Basic Arithmetic', 'Everyday Science', 'Current Affairs', 'Pakistan Affairs', 'Relevant Departmental Acts'],
    keyStats: [
      { label: 'Test Questions', value: '100 MCQs' },
      { label: 'English Weightage', value: '20%' },
      { label: 'Professional / GK Weightage', value: '80%' },
      { label: 'Negative Marking', value: 'No (Standard Phase)' }
    ],
    content: `
## FPSC Screening Examination Methodology

The Federal Public Service Commission conducts nationwide screening tests for high-impact federal executive positions such as Inspector Customs, Assistant Director FIA, Prevention Officers, and Valuation Officers.

### Standard Test Scheme

FPSC tests are divided into two distinct components:
1. **Part-I: English (20 Marks):** Tests vocabulary, correct preposition usage, sentence structuring, and subject-verb agreement. Standard GRE/GAT level syntax is expected.
2. **Part-II: General Intelligence (80 Marks):**
   - **Basic Arithmetic (20 Marks):** Algebra, ratios, arithmetic mean, percentages, and simple equations.
   - **Everyday Science (20 Marks):** Atomic structure, renewable energy, human biological systems, epidemics, and atmospheric sciences.
   - **Current Affairs & Pakistan Affairs (20 Marks):** Bilateral agreements, national economic indicators, CPEC developments, and post-1947 political history.
   - **Islamic Studies / Ethics (20 Marks):** Pillars of Islam, Sirat-un-Nabi, and Islamic economic principles.

### Preparation Best Practices

Unlike provincial tests that emphasize rapid micro-facts, FPSC tests emphasize foundational conceptual clarity. Thorough preparation requires solving past 5 years' consolidated papers and practicing speed arithmetic without calculators.
`
  },
  {
    slug: 'nts',
    title: 'NTS NAT & GAT Screening Examination',
    fullName: 'National Testing Service Aptitude & Academic Assessments',
    description: 'Standardized aptitude tests required for higher education admissions (NAT), MS/MPhil entry, university scholarships, and corporate screening tests (GAT).',
    conductingBody: 'National Testing Service (NTS)',
    frequency: 'Monthly and bi-monthly scheduled test cycles across Pakistan',
    eligibility: 'Intermediate (for NAT-I), 14-year Bachelors (for NAT-II), 16-year Degree (for GAT General).',
    examFormat: '100 MCQs across Verbal Reasoning, Analytical Reasoning, and Quantitative Reasoning.',
    updatedDate: '2026-10-10',
    featuredSubjects: ['Analytical Reasoning', 'Quantitative Ability', 'Verbal English', 'Subject Knowledge'],
    keyStats: [
      { label: 'Test Duration', value: '120 Minutes' },
      { label: 'Total Questions', value: '100 MCQs' },
      { label: 'Passing Validity', value: '2 Years' },
      { label: 'Negative Marking', value: 'None' }
    ],
    content: `
## Mastering the NTS NAT and GAT General Tests

The National Testing Service (NTS) pioneered standardized testing in Pakistan. Its flagship examinations—the National Aptitude Test (NAT) and Graduate Assessment Test (GAT General)—are indispensable for securing admissions and public sector jobs.

### The Three Pillars of NTS Scoring

1. **Analytical Reasoning (30-40%):** Complex logic games, constraint satisfaction grids, ordering sequences, and deductions. This section separates high-scoring candidates from the average cohort.
2. **Quantitative Ability (30-35%):** Arithmetic, algebra, geometry, word problems, permutations, and rate calculations.
3. **Verbal Reasoning (20-25%):** Sentence completion, vocabulary in context, reading comprehension passages, and analogical reasoning.

### Strategic Test-Day Pacing

Because there is no negative marking, candidates should ensure all 100 questions are attempted. Manage time strictly: budget no more than 60 seconds per verbal question so that ample time remains for multi-step analytical puzzles.
`
  },
  {
    slug: 'pms',
    title: 'PMS Provincial Management Service',
    fullName: 'Provincial Management Service Competitive Examination',
    description: 'Provincial administrative career examination administered by respective provincial service commissions (Punjab, Sindh, KP, Balochistan) for executive administrative positions.',
    conductingBody: 'Provincial Public Service Commissions (PPSC, SPSC, KPPSC, BPSC)',
    frequency: 'Periodic (Annually or biennially depending on provincial vacancies)',
    eligibility: 'Graduate degree with minimum 2nd division, domicile of the respective province, Age 21-30.',
    examFormat: 'Comprehensive 1200 marks written exam (600 Compulsory including Urdu + 600 Optional) followed by Psychological testing and Viva Voce.',
    updatedDate: '2026-10-10',
    featuredSubjects: ['English Essay', 'English Precis', 'Urdu Essay & Translation', 'General Knowledge', 'Pakistan Studies', 'Islamic Studies'],
    keyStats: [
      { label: 'Total Marks', value: '1400 (1200 Written + 200 Viva)' },
      { label: 'Compulsory Urdu', value: '100 Marks' },
      { label: 'General Knowledge Paper', value: '100 MCQs Paper' },
      { label: 'Cadre', value: 'Provincial Section Officer / AC' }
    ],
    content: `
## The Provincial Management Service (PMS) Examination

The Provincial Management Service (PMS) is the premier provincial counterpart to the federal CSS cadre. Officers inducted through PMS serve in key field administrative assignments, including Assistant Commissioners, Section Officers, and Deputy Secretaries across provincial secretariats.

### Distinct Features of PMS

While modeled similarly to the CSS pattern, PMS features distinct requirements:
- **Compulsory Urdu Paper (100 Marks):** Candidates must demonstrate advanced Urdu essay writing, précis, idioms, and English-to-Urdu translation skills.
- **Objective General Knowledge Paper:** In Punjab PMS, Paper-IV is an intensive 100-mark objective MCQ paper with negative marking covering world geography, science, history, and international organizations.
- **Specialized Provincial Syllabus:** Greater emphasis on provincial geography, local government acts, agrarian economics, and regional cultures.
`
  },
  {
    slug: 'spsc',
    title: 'SPSC Competitive & Combined Competitive Exam',
    fullName: 'Sindh Public Service Commission CCE & General Recruitment',
    description: 'Combined Competitive Examination (CCE) for appointment to executive administrative posts in the Government of Sindh including Assistant Commissioner and Section Officer.',
    conductingBody: 'Sindh Public Service Commission (SPSC)',
    frequency: 'Periodic examination cycles',
    eligibility: 'Bachelors degree from a recognized university, permanent domicile of Sindh Province, Age 21-30.',
    examFormat: 'Screening test followed by 1000 marks written examination, medical fitness, and Viva Voce.',
    updatedDate: '2026-10-10',
    featuredSubjects: ['Sindhi / Urdu', 'English Literature', 'Pakistan Affairs', 'General Science', 'Sindh History & Geography'],
    keyStats: [
      { label: 'Screening Test', value: '100 Marks' },
      { label: 'Written Exam', value: '1000 Marks' },
      { label: 'Regional Focus', value: 'Sindh Rural & Urban Quotas' },
      { label: 'Viva Voce', value: '200 Marks' }
    ],
    content: `
## SPSC Combined Competitive Examination (CCE)

The Sindh Public Service Commission conducts the Combined Competitive Examination (CCE) to recruit leaders for administrative, police, and executive departments across Sindh.

### Syllabus Dynamics & Regional Importance

Aspirants preparing for SPSC must master both federal standards and localized historical contexts:
- In-depth knowledge of the Indus Valley Civilization, Mohenjo-Daro, and historical Sufi traditions of Sindh.
- Command over provincial agrarian policies, irrigation canals off the Sukkur, Guddu, and Kotri barrages.
- Solid preparation in both English and regional language (Sindhi or Urdu compulsory modules).
`
  },
  {
    slug: 'kppsc',
    title: 'KPPSC Competitive Examination',
    fullName: 'Khyber Pakhtunkhwa Public Service Commission Provincial Tests',
    description: 'Provincial civil service competitive examinations and subject specialist screening tests in Khyber Pakhtunkhwa.',
    conductingBody: 'KP Public Service Commission (KPPSC)',
    frequency: 'Annually / As advertised per department needs',
    eligibility: 'Graduation with 2nd division, KP domicile, Age 21-30.',
    examFormat: 'Competitive written test (Compulsory + Optional subjects) or Screening MCQs test followed by Interview.',
    updatedDate: '2026-10-10',
    featuredSubjects: ['General Knowledge', 'English Grammar', 'Pashto Literature', 'Pakistan Affairs', 'Islamic Studies'],
    keyStats: [
      { label: 'Written Examination', value: 'Full Provincial Syllabus' },
      { label: 'Target Cadres', value: 'PMS / Tehsildar / ASDEO' },
      { label: 'Screening Format', value: 'Objective MCQs' },
      { label: 'Interview Merit', value: 'Decisive for Allocation' }
    ],
    content: `
## KPPSC Competitive Examination Blueprint

The Khyber Pakhtunkhwa Public Service Commission (KPPSC) evaluates candidates for provincial administrative assignments, Tehsildari, education leadership, and forest officer posts.

### Core Testing Pillars

Preparation requires mastering Khyber Pakhtunkhwa's geopolitical position, tribal district integration (post-25th Amendment), Durand Line geography, mountain passes, hydro power generation, and comprehensive national Pakistan Studies.
`
  }
];

const subjectsData = [
  {
    slug: 'pakistan-studies',
    title: 'Pakistan Studies & Constitutional Affairs',
    description: 'Master Pakistan history from the 1857 War of Independence through the Pakistan Movement, 1947 independence, 1973 Constitution, geography, rivers, and national resources.',
    icon: 'flag',
    updatedDate: '2026-10-10',
    syllabusWeightage: '15-20% in CSS/PMS, 20% in PPSC/FPSC General Papers',
    relatedExams: ['CSS', 'PMS', 'PPSC', 'FPSC', 'NTS', 'SPSC', 'KPPSC'],
    subtopics: [
      { name: 'Geography, Borders & Mountain Passes', slug: 'geography', questionCount: 25 },
      { name: 'Constitutional History & 1973 Constitution', slug: 'constitution', questionCount: 25 },
      { name: 'Freedom Movement (1857-1947)', slug: 'freedom-movement', questionCount: 25 },
      { name: 'Rivers, Dams & Water Barrages', slug: 'rivers-and-dams', questionCount: 25 },
      { name: 'National Economy, Energy & Resources', slug: 'economy-and-resources', questionCount: 25 }
    ],
    content: `
## Pakistan Studies: The Bedrock of Pakistani Competitive Exams

Pakistan Studies is an indispensable compulsory subject across virtually every competitive recruitment test in Pakistan. Whether appearing for CSS Pakistan Affairs, Punjab PMS, or a 100-mark PPSC screening test, this discipline carries decisive weight.

### Thematic Breadth of the Curriculum

Our curated syllabus breaks down Pakistan Studies into five interconnected domains:
1. **Pre-Partition Freedom Struggle (1857–1947):** Sir Syed Ahmad Khan's Aligarh Movement, the partition of Bengal (1905), the Simla Deputation (1906), the Lucknow Pact (1916), the Nehru Report and Quaid-e-Azam's Fourteen Points (1929), the Allahabad Address (1930), the Lahore Resolution (1940), and the 3rd June 1947 Plan.
2. **Constitutional Evolution & Institutional History:** The 1949 Objectives Resolution, the 1956 and 1962 Constitutions, the formulation of the 1973 Constitution, landmark constitutional amendments (such as the 18th and 25th Amendments), and the institutional separation of powers.
3. **Physical Geography & Strategic Borders:** Pakistan's borderlines (Durand Line with Afghanistan, Radcliffe Line with India, border with Iran, and the 1963 Sino-Pakistan boundary pact), mountain ranges (Himalayas, Karakoram, Hindu Kush), passes (Khyber, Bolan, Khunjerab), and coastal geography.
4. **Hydrology & River Systems:** The Indus River Basin, the 1960 Indus Waters Treaty mediated by the World Bank, major dams (Tarbela, Mangla, Diamer-Bhasha), and strategic barrages across Punjab and Sindh.
5. **Economic Profile & Natural Resources:** Mineral deposits (Reko Diq, Saindak, Thar Coal), energy mix, agricultural crop cycles (Kharif and Rabi), and the China-Pakistan Economic Corridor (CPEC).
`
  },
  {
    slug: 'islamiat',
    title: 'Islamiat & Islamic Studies',
    description: 'Authentic study modules covering Holy Quran revelations, Seerat-un-Nabi, Khulafa-e-Rashideen, Sahaba, Islamic Jurisprudence, and contemporary Islamic governance.',
    icon: 'crescent',
    updatedDate: '2026-10-10',
    syllabusWeightage: '100 Marks Compulsory in CSS/PMS, 10-15% in PPSC/FPSC',
    relatedExams: ['CSS', 'PMS', 'PPSC', 'FPSC', 'NTS'],
    subtopics: [
      { name: 'Holy Quran Revelation & Compilation', slug: 'quran-revelation', questionCount: 25 },
      { name: 'Seerat-un-Nabi & Prophetic Milestones', slug: 'prophetic-era', questionCount: 25 },
      { name: 'Khulafa-e-Rashideen (Rightly Guided Caliphs)', slug: 'rightly-guided-caliphs', questionCount: 25 },
      { name: 'Pillars of Islam & Jurisprudence (Fiqh)', slug: 'pillars-and-jurisprudence', questionCount: 25 }
    ],
    content: `
## Islamic Studies: Spiritual Depth and Academic Accuracy

Islamic Studies is an essential pillar in both descriptive examinations and screening tests across all federal and provincial testing services. Competitive exams expect candidates to possess precise factual knowledge along with an understanding of Islamic civilization and governance principles.

### Key Focus Areas for Aspirants

1. **Ulum al-Quran (Sciences of the Quran):** Stages of Wahi (divine revelation), compilation during the caliphates of Hazrat Abu Bakr (RA) and Hazrat Usman (RA), distinguishing features of Makki and Madani Surahs, and prominent Quranic terminology.
2. **Seerat-un-Nabi (PBUH):** Important milestones of the Prophetic era including the Treaty of Hudaybiyyah, the Charter of Medina (Mithaq-e-Madina), major Ghazwat (Badr, Uhud, Khandaq, Hunayn), the Conquest of Mecca, and the Farewell Pilgrimage (Hujjat-ul-Wida).
3. **The Rightly Guided Caliphate (Khilafat-e-Rashida):** Administrative systems, judicial independence, military campaigns, and socioeconomic reforms implemented under Hazrat Abu Bakr, Hazrat Umar, Hazrat Usman, and Hazrat Ali (May Allah be pleased with them).
4. **Pillars of Islam & Fiqh:** Rulings regarding Salat, Zakat calculation rates (Nisab), Sawm (fasting), and Hajj, alongside foundational sources of Islamic jurisprudence (Quran, Sunnah, Ijma, Qiyas).
`
  },
  {
    slug: 'general-knowledge',
    title: 'General Knowledge & World Affairs',
    description: 'Comprehensive global knowledge bank covering world geography, international organizations, capitals, currencies, treaties, and historical milestones.',
    icon: 'globe',
    updatedDate: '2026-10-10',
    syllabusWeightage: '15-20% in PPSC, FPSC, NTS, and PMS Screening',
    relatedExams: ['PPSC', 'FPSC', 'PMS', 'NTS', 'SPSC'],
    subtopics: [
      { name: 'World Geography, Oceans & Mountain Ranges', slug: 'world-geography', questionCount: 25 },
      { name: 'International Organizations & Alliances', slug: 'international-organizations', questionCount: 25 },
      { name: 'Inventions, Nobel Laureates & Discoveries', slug: 'inventions-and-discoveries', questionCount: 25 }
    ],
    content: `
## General Knowledge: Breadth, Fact Verification, and Retention

General Knowledge is commonly viewed by candidates as the most daunting subject due to its expansive scope. However, examination trends reveal recurring patterns centered around physical geography, international governance structures, and historical turning points.

### Strategic Sub-Disciplines

- **Physical World Geography:** Maritime straits (Malacca, Hormuz, Bab-el-Mandeb, Gibraltar), international canals (Suez, Panama), major deserts (Sahara, Gobi, Thar, Atacama), and world's highest plateaus.
- **International Institutions:** The United Nations and its principal organs (General Assembly, Security Council, ICJ, Secretariat), Bretton Woods institutions (World Bank, IMF), regional security and economic groups (NATO, SCO, ASEAN, SAARC, OIC).
- **Global Capitals and Currencies:** Focus on frequently tested nations across Central Asia, Eastern Europe, Africa, and Latin America.
`
  },
  {
    slug: 'everyday-science',
    title: 'Everyday Science & General Ability',
    description: 'Scientific principles covering human biology, nutrition, infectious diseases, physics, space sciences, atmospheric chemistry, and modern technology.',
    icon: 'beaker',
    updatedDate: '2026-10-10',
    syllabusWeightage: '60 Marks in CSS GSA Paper, 15% in PPSC/FPSC',
    relatedExams: ['CSS', 'PMS', 'FPSC', 'PPSC', 'NTS'],
    subtopics: [
      { name: 'Human Biology, Anatomy & Diseases', slug: 'human-anatomy', questionCount: 25 },
      { name: 'Physics, Energy & Solar System', slug: 'physics-and-solar-system', questionCount: 25 }
    ],
    content: `
## Everyday Science: Demystifying the Natural World

Everyday Science bridges fundamental school science and contemporary scientific phenomena affecting public life. Candidates are tested on their conceptual understanding of biological mechanisms, physical laws, and environmental dynamics.

### Essential Topic Coverage

- **Human Anatomy & Medical Sciences:** Circulatory system, blood group typing (ABO and Rh systems), endocrinology, vitamin deficiencies (scurvy, rickets, beriberi), vaccines, and infectious pathogens (viruses, bacteria, fungi).
- **Physical Sciences & Astronomy:** Solar system mechanics, planetary atmospheres, electromagnetic spectrum, Doppler effect, radioactivity, and renewable energy technologies.
- **Environmental Sciences:** Atmosphere layers (Troposphere, Stratosphere, Mesosphere, Thermosphere), ozone layer depletion, greenhouse gas emissions, and global climate agreements.
`
  },
  {
    slug: 'english',
    title: 'English Language, Grammar & Comprehension',
    description: 'Master English prepositions, advanced vocabulary, synonyms, antonyms, sentence correction rules, idiomatic phrases, and active/passive syntax.',
    icon: 'text',
    updatedDate: '2026-10-10',
    syllabusWeightage: '200 Marks in CSS (Essay + Precis), 20% in FPSC/PPSC',
    relatedExams: ['CSS', 'PMS', 'FPSC', 'PPSC', 'NTS', 'SPSC'],
    subtopics: [
      { name: 'Prepositions & Phrasal Verbs', slug: 'prepositions', questionCount: 25 },
      { name: 'High-Yield Screening Vocabulary', slug: 'vocabulary', questionCount: 25 },
      { name: 'Sentence Correction & Grammar Rules', slug: 'sentence-correction', questionCount: 25 }
    ],
    content: `
## English: The Decisive Elimination Filter in Competitive Exams

Examiner statistics reveal that the English papers—specifically English Essay and English Précis & Composition in CSS/PMS, along with the 20-mark grammar section in FPSC/PPSC—account for the majority of unsuccessful attempts. 

### Core Grammatical Disciplines Tested

- **Appropriate Prepositions:** Fixed prepositions governed by verbs, adjectives, and nouns (e.g., 'abstain from', 'comply with', 'congruent with', 'bereft of').
- **Subject-Verb Agreement & Syntax:** Subjunctive moods, inverted conditional sentences, split infinitives, dangling modifiers, and parallel structure.
- **High-Yield Competitive Vocabulary:** GRE/GAT word roots, contextual antonyms, nuanced connotations, and homophones.
`
  },
  {
    slug: 'computer-science',
    title: 'Computer Science & Information Technology',
    description: 'Hardware architecture, computer memory hierarchies, Microsoft Office productivity shortcuts, networking topologies, internet protocols, and cybersecurity.',
    icon: 'cpu',
    updatedDate: '2026-10-10',
    syllabusWeightage: '10-15% in PPSC/FPSC General Recruitment, NTS Tests',
    relatedExams: ['PPSC', 'FPSC', 'PMS', 'NTS'],
    subtopics: [
      { name: 'IT Fundamentals & MS Office Shortcuts', slug: 'it-fundamentals', questionCount: 25 },
      { name: 'Networking, Security & Cloud Protocols', slug: 'networking-and-security', questionCount: 25 }
    ],
    content: `
## Computer Science & IT: Modern Administrative Essentials

With civil administration and public service delivery rapidly transitioning to e-governance systems in Pakistan, public service commissions have made IT literacy a mandatory examination component.

### Key Examination Focus

- **Productivity Software:** Standard Microsoft Word, Excel, and PowerPoint shortcuts, spreadsheet formulas (VLOOKUP, SUMIF, nested functions), and document formatting.
- **Hardware Architecture & Storage:** Memory hierarchies (Registers, L1/L2/L3 Cache, RAM, ROM, SSDs), CPU fetch-execute cycles, and bus systems.
- **Networking & Protocols:** The 7-layer OSI model, TCP/IP stack, IP addressing (IPv4 vs. IPv6), DNS resolution, SSL/TLS certificates, and cybersecurity concepts (firewalls, malware, phishing).
`
  },
  {
    slug: 'current-affairs',
    title: 'Current Affairs & Pakistan Foreign Policy',
    description: 'Contemporary bilateral relations, regional alliances (SCO, CPEC, OIC), domestic economic programs, and global geopolitical developments.',
    icon: 'newspaper',
    updatedDate: '2026-10-10',
    syllabusWeightage: '100 Marks in CSS/PMS, 10-15% in General Tests',
    relatedExams: ['CSS', 'PMS', 'FPSC', 'PPSC'],
    subtopics: [
      { name: 'Pakistan Foreign Relations & CPEC', slug: 'pakistan-foreign-relations', questionCount: 25 }
    ],
    content: `
## Current Affairs: Dynamic Real-Time Analysis

Current Affairs evaluates a candidate's grasp of evolving geopolitical landscapes, international treaties, and domestic policy dilemmas.

### Analytical Themes

- Pakistan's relations with key partners: China (CPEC Phase-II, Special Economic Zones), the United States, GCC nations, Iran, and Central Asian Republics.
- Multilateral institutions and forums: United Nations Climate Summits (COPs), Financial Action Task Force (FATF) standards, SCO meetings, and International Monetary Fund programs.
- National development priorities: Energy transition, digital taxation, sovereign wealth funds, and water management.
`
  },
  {
    slug: 'mathematics',
    title: 'Mathematics & Quantitative Ability',
    description: 'Quantitative problem solving including arithmetic percentages, ratios, proportions, speed-distance-time, basic algebra, and probability for NTS, FPSC, and CSS GSA.',
    icon: 'calculator',
    updatedDate: '2026-10-10',
    syllabusWeightage: '40 Marks in CSS General Ability, 20% in FPSC/NTS',
    relatedExams: ['CSS', 'FPSC', 'NTS', 'PPSC'],
    subtopics: [
      { name: 'Quantitative Ability, Percentages & Ratios', slug: 'quantitative-ability', questionCount: 25 }
    ],
    content: `
## Quantitative Ability: Logic, Speed, and Precision

The General Ability section is the highest-scoring opportunity in competitive examinations. Unlike subjective essays, mathematics offers objective, verifiable marks that significantly elevate merit standing.

### Core Mathematical Disciplines

- **Arithmetic Foundations:** Percentages, profit and loss calculations, simple and compound interest, ratios and direct/inverse proportions.
- **Time, Speed & Work:** Relative velocity problems, train crossing equations, pipe and cistern filling rates, and combined worker efficiency.
- **Algebra & Basic Statistics:** Linear equations, arithmetic and geometric progressions, mean, median, mode, and standard deviation.
`
  }
];

function seed() {
  fs.mkdirSync(examsDir, { recursive: true });
  fs.mkdirSync(subjectsDir, { recursive: true });

  examsData.forEach(exam => {
    const filePath = path.join(examsDir, `${exam.slug}.md`);
    const frontmatter = `---
title: "${exam.title}"
fullName: "${exam.fullName}"
description: "${exam.description.replace(/"/g, '\\"')}"
conductingBody: "${exam.conductingBody}"
frequency: "${exam.frequency}"
eligibility: "${exam.eligibility.replace(/"/g, '\\"')}"
examFormat: "${exam.examFormat.replace(/"/g, '\\"')}"
updatedDate: "${exam.updatedDate}"
featuredSubjects: ${JSON.stringify(exam.featuredSubjects)}
keyStats: ${JSON.stringify(exam.keyStats)}
---
${exam.content}
`;
    fs.writeFileSync(filePath, frontmatter, 'utf-8');
    console.log(`Generated exam: ${exam.slug}`);
  });

  subjectsData.forEach(subject => {
    const filePath = path.join(subjectsDir, `${subject.slug}.md`);
    const frontmatter = `---
title: "${subject.title}"
description: "${subject.description.replace(/"/g, '\\"')}"
icon: "${subject.icon}"
updatedDate: "${subject.updatedDate}"
syllabusWeightage: "${subject.syllabusWeightage}"
relatedExams: ${JSON.stringify(subject.relatedExams)}
subtopics: ${JSON.stringify(subject.subtopics)}
---
${subject.content}
`;
    fs.writeFileSync(filePath, frontmatter, 'utf-8');
    console.log(`Generated subject: ${subject.slug}`);
  });

  console.log('Finished seeding exams and subjects!');
}

seed();
