/**
 * Official Syllabus Blueprints and Solved Past Papers Mapping for ExamHub.pk
 * Maps Pakistani competitive exams and advertised posts (FPSC, KPPSC, PPSC, SPSC, NTS, CSS)
 * to exact official syllabus weightages, sections, and authentic past paper resources.
 */

export interface SyllabusSection {
  id: string;
  name: string;
  weightagePercent: number; // e.g. 25 = 25%
  subjects: string[]; // Subject slugs in content/mcqs
  topics?: string[]; // Specific topic slugs if restricted
  description?: string;
}

export interface PastPaperItem {
  id: string;
  title: string;
  year: string;
  agency: string;
  post: string;
  subjectSlug: string;
  topicSlug: string;
  questionCount: number;
  badge?: string;
}

export interface ExamBlueprint {
  slug: string;
  title: string;
  fullName: string;
  conductingBody: string;
  examType: 'job-post' | 'civil-service' | 'academic-entrance';
  totalQuestionsDefault: number;
  durationMinutesDefault: number;
  passingPercent: number;
  negativeMarking: boolean;
  negativeMarkPerWrong?: number; // e.g. 0.25 for PPSC
  sections: SyllabusSection[];
  pastPapers: PastPaperItem[];
  tips: string[];
}

export const EXAM_BLUEPRINTS: Record<string, ExamBlueprint> = {
  fia: {
    slug: 'fia',
    title: 'FIA Recruitment',
    fullName: 'Federal Investigation Agency (FIA) - Assistant Director (BS-17) & Inspector (BS-16)',
    conductingBody: 'Federal Public Service Commission (FPSC)',
    examType: 'job-post',
    totalQuestionsDefault: 50,
    durationMinutesDefault: 50,
    passingPercent: 50,
    negativeMarking: false,
    sections: [
      {
        id: 'english',
        name: 'Part-I: English Grammar, Syntax & Vocabulary',
        weightagePercent: 20,
        subjects: ['english'],
        description: 'Prepositions, sentence structuring, active/passive voice, vocabulary and synonyms/antonyms.',
      },
      {
        id: 'general-abilities',
        name: 'Part-II: General Knowledge, Everyday Science & Math',
        weightagePercent: 40,
        subjects: ['general-knowledge', 'everyday-science', 'pakistan-studies', 'mathematics', 'current-affairs'],
        description: 'Physical geography, Pakistan affairs, basic arithmetic, and everyday scientific concepts.',
      },
      {
        id: 'fia-laws',
        name: 'Part-III: FIA Act 1974, PECA 2016 & Investigation Law',
        weightagePercent: 40,
        subjects: ['law'],
        topics: ['fia-act-and-past-papers-part-1', 'law-past-papers-part-1', 'law-past-papers-part-2'],
        description: 'FIA Act 1974, Prevention of Electronic Crimes Act, Anti-Money Laundering, and CrPC fundamentals.',
      },
    ],
    pastPapers: [
      {
        id: 'fia-act-past-1',
        title: 'FPSC Assistant Director FIA & Inspector Solved Paper',
        year: '2023 - 2024',
        agency: 'FPSC',
        post: 'AD FIA (BS-17) & Inspector (BS-16)',
        subjectSlug: 'law',
        topicSlug: 'fia-act-and-past-papers-part-1',
        questionCount: 25,
        badge: 'Official FPSC Batch',
      },
      {
        id: 'fia-law-past-2',
        title: 'FIA Legal & Constitutional Investigation Past Paper',
        year: '2022',
        agency: 'FPSC',
        post: 'Investigation Officers',
        subjectSlug: 'law',
        topicSlug: 'law-past-papers-part-1',
        questionCount: 40,
        badge: 'Verified Solved',
      },
      {
        id: 'fia-gk-past-1',
        title: 'FIA General Screening & Current Affairs Paper',
        year: '2023',
        agency: 'FPSC',
        post: 'Inspector FIA',
        subjectSlug: 'general-knowledge',
        topicSlug: 'gk-past-papers-part-1',
        questionCount: 39,
        badge: 'Screening Phase',
      },
    ],
    tips: [
      'Master Sections 1 to 10 of the FIA Act 1974; questions on Director General powers appear frequently.',
      'Review fundamental rights (Articles 8-28) from the 1973 Constitution of Pakistan.',
      'Practice mental arithmetic and percentage word problems without a calculator.',
    ],
  },

  'charge-nurse': {
    slug: 'charge-nurse',
    title: 'Charge Nurse (BS-16/17)',
    fullName: 'Charge Nurse & Staff Nurse Recruitment (BS-16/17)',
    conductingBody: 'FPSC & KPPSC / Health Department',
    examType: 'job-post',
    totalQuestionsDefault: 50,
    durationMinutesDefault: 50,
    passingPercent: 50,
    negativeMarking: false,
    sections: [
      {
        id: 'nursing-foundations',
        name: 'Section 1: Nursing Foundations & Patient Safety',
        weightagePercent: 25,
        subjects: ['nursing'],
        description: 'Vital signs, sterile technique, patient positioning, Braden scale, and infection prevention.',
      },
      {
        id: 'med-surg',
        name: 'Section 2: Medical-Surgical Nursing & Emergency Care',
        weightagePercent: 25,
        subjects: ['nursing', 'biology'],
        description: 'Myocardial infarction, stroke, diabetes crises, shock, wound care, and CPR protocols.',
      },
      {
        id: 'mnch',
        name: 'Section 3: Maternal, Newborn & Child Health (MNCH)',
        weightagePercent: 20,
        subjects: ['nursing'],
        description: 'Stages of labor, APGAR score, newborn care, immunization, and pediatric assessment.',
      },
      {
        id: 'pharmacology',
        name: 'Section 4: Pharmacology & Drug Dosage Calculations',
        weightagePercent: 15,
        subjects: ['nursing', 'pharmacy'],
        description: 'IV drip rates (gtts/min), emergency resuscitation drugs, insulin types, and antidotes.',
      },
      {
        id: 'community-ethics',
        name: 'Section 5: Community Health & Nursing Ethics',
        weightagePercent: 15,
        subjects: ['nursing', 'general-knowledge'],
        description: 'Primary healthcare, disease surveillance, code of ethics, and patient autonomy.',
      },
    ],
    pastPapers: [
      {
        id: 'nurse-past-official',
        title: 'FPSC & KPPSC Charge Nurse Solved Past Paper',
        year: '2023 - 2024',
        agency: 'FPSC / KPPSC',
        post: 'Charge Nurse (BS-16/17)',
        subjectSlug: 'nursing',
        topicSlug: 'charge-nurse-past-papers-part-1',
        questionCount: 15,
        badge: 'High Yield',
      },
      {
        id: 'nurse-past-1',
        title: 'Staff Nurse & Emergency Care Past Paper Set 1',
        year: '2022',
        agency: 'PPSC / Health Dept',
        post: 'Staff Nurse (BS-16)',
        subjectSlug: 'nursing',
        topicSlug: 'nursing-past-papers-part-1',
        questionCount: 40,
        badge: 'Clinical Focus',
      },
      {
        id: 'nurse-past-2',
        title: 'Nursing & Patient Care Commission Past Paper Set 2',
        year: '2021',
        agency: 'KPPSC',
        post: 'Charge Nurse',
        subjectSlug: 'nursing',
        topicSlug: 'nursing-past-papers-part-2',
        questionCount: 40,
        badge: 'Commission Solved',
      },
    ],
    tips: [
      'Know the IV infusion rate formula: (Volume in mL × Drop factor) ÷ Time in minutes.',
      'Memorize normal arterial blood gas (ABG) values: pH 7.35-7.45, PaCO2 35-45, HCO3 22-26.',
      'Understand the APGAR scoring thresholds and GCS minimum (3) vs maximum (15).',
    ],
  },

  'civil-engineer': {
    slug: 'civil-engineer',
    title: 'Civil Engineer (BS-17)',
    fullName: 'Assistant Executive Engineer / SDO Civil (BS-17) - C&W, Irrigation & WAPDA',
    conductingBody: 'KPPSC, PPSC & FPSC',
    examType: 'job-post',
    totalQuestionsDefault: 50,
    durationMinutesDefault: 50,
    passingPercent: 50,
    negativeMarking: false,
    sections: [
      {
        id: 'structures-concrete',
        name: 'Section 1: Structural Analysis & Concrete Technology',
        weightagePercent: 30,
        subjects: ['civil-engineering'],
        description: 'Bending moment, shear force, RCC beams, columns, slump test, and cement setting times.',
      },
      {
        id: 'hydraulics',
        name: 'Section 2: Fluid Mechanics & Irrigation Hydraulics',
        weightagePercent: 25,
        subjects: ['civil-engineering'],
        description: 'Manning formula, open channel flow, Bernouilli theorem, and pipe Reynolds number.',
      },
      {
        id: 'geotech-survey',
        name: 'Section 3: Geotechnical, Surveying & Transportation',
        weightagePercent: 25,
        subjects: ['civil-engineering'],
        description: 'Terzaghi bearing capacity, Atterberg limits, leveling height of instrument, and bitumen testing.',
      },
      {
        id: 'gk-english',
        name: 'Section 4: General Knowledge, Pakistan Studies & English',
        weightagePercent: 20,
        subjects: ['english', 'general-knowledge', 'pakistan-studies'],
        description: 'Official 20% general section mandated in provincial public service engineering screenings.',
      },
    ],
    pastPapers: [
      {
        id: 'civil-past-1',
        title: 'KPPSC & PPSC Civil Engineer Solved Past Paper',
        year: '2023 - 2024',
        agency: 'KPPSC / PPSC',
        post: 'SDO / Assistant Engineer (BS-17)',
        subjectSlug: 'civil-engineering',
        topicSlug: 'civil-engineering-past-papers-part-1',
        questionCount: 15,
        badge: 'Official SDO Test',
      },
      {
        id: 'civil-concrete-past',
        title: 'Concrete Technology & Design of RCC Structures',
        year: '2022',
        agency: 'C&W / WAPDA',
        post: 'AEE Civil',
        subjectSlug: 'civil-engineering',
        topicSlug: 'concrete-technology-and-design-of-concrete-structures-part-1',
        questionCount: 39,
        badge: 'Design Standards',
      },
      {
        id: 'civil-hydraulics-past',
        title: 'Irrigation & Fluid Mechanics Engineering Paper',
        year: '2021',
        agency: 'Irrigation Dept',
        post: 'Sub-Divisional Officer',
        subjectSlug: 'civil-engineering',
        topicSlug: 'applied-mechanics-and-graphic-statics-part-1',
        questionCount: 40,
        badge: 'Hydraulics Core',
      },
    ],
    tips: [
      'Standard brick size in Pakistan specifications: 9" × 4.5" × 3".',
      'OPC initial setting time >= 30 minutes; final setting time <= 600 minutes (10 hours).',
      'Simply supported beam under UDL max moment is wL²/8 at mid-span.',
    ],
  },

  'medical-officer': {
    slug: 'medical-officer',
    title: 'Medical Officer (BS-17)',
    fullName: 'Medical Officers & Women Medical Officers (BS-17) - Health Department',
    conductingBody: 'FPSC, PPSC & KPPSC',
    examType: 'job-post',
    totalQuestionsDefault: 50,
    durationMinutesDefault: 50,
    passingPercent: 50,
    negativeMarking: false,
    sections: [
      {
        id: 'internal-med-surgery',
        name: 'Section 1: Internal Medicine & Emergency Surgery',
        weightagePercent: 40,
        subjects: ['biology', 'nursing'],
        description: 'Acute coronary syndrome, DKA, acute appendicitis, meningitis CSF interpretation, and resuscitation.',
      },
      {
        id: 'obgyn-pediatrics',
        name: 'Section 2: Obstetrics, Gynecology & Pediatrics',
        weightagePercent: 30,
        subjects: ['biology', 'nursing'],
        description: 'Eclampsia protocols, antepartum hemorrhage, WHO IMNCI dehydration, and neonatal care.',
      },
      {
        id: 'pharmacology-therapeutics',
        name: 'Section 3: Clinical Pharmacology & Therapeutics',
        weightagePercent: 15,
        subjects: ['pharmacy', 'nursing'],
        description: 'Antibiotic contraindications, anaphylaxis epinephrine dosing, antidotes, and cardiac drugs.',
      },
      {
        id: 'community-med',
        name: 'Section 4: Community Medicine & Preventive Healthcare',
        weightagePercent: 15,
        subjects: ['biology', 'general-knowledge'],
        description: 'EPI vaccination calendar, National TB DOTS, epidemiology, and public health indicators.',
      },
    ],
    pastPapers: [
      {
        id: 'mo-past-1',
        title: 'FPSC & PPSC Medical Officer Solved Past Paper',
        year: '2023 - 2024',
        agency: 'FPSC / PPSC',
        post: 'Medical Officer & WMO (BS-17)',
        subjectSlug: 'biology',
        topicSlug: 'medical-officer-past-papers-part-1',
        questionCount: 15,
        badge: 'Clinical High Yield',
      },
      {
        id: 'mo-biochem-past',
        title: 'Pathology & Biochemistry Clinical MCQs',
        year: '2022',
        agency: 'Health Dept',
        post: 'Medical Officer',
        subjectSlug: 'biology',
        topicSlug: 'biochemistry-part-1',
        questionCount: 80,
        badge: 'Diagnostics',
      },
    ],
    tips: [
      'Magnesium sulfate is the drug of choice for eclamptic seizures.',
      'Emergency anaphylaxis treatment is IM Adrenaline (1:1000) 0.5 mg in the anterolateral thigh.',
      'Bacterial meningitis CSF reveals neutrophilic pleocytosis with low glucose and high protein.',
    ],
  },

  'fpsc-lecturer': {
    slug: 'fpsc-lecturer',
    title: 'FPSC Lecturer (BS-17)',
    fullName: 'Lecturer (BS-17) - Federal Government Colleges & Higher Education',
    conductingBody: 'Federal Public Service Commission (FPSC)',
    examType: 'job-post',
    totalQuestionsDefault: 50,
    durationMinutesDefault: 50,
    passingPercent: 50,
    negativeMarking: false,
    sections: [
      {
        id: 'english',
        name: 'Part-I: English Language & Expression',
        weightagePercent: 20,
        subjects: ['english'],
        description: 'Grammar usage, sentence structure, active/passive voice, vocabulary, and reading comprehension.',
      },
      {
        id: 'pedagogy',
        name: 'Part-II: Pedagogy & Teaching Methodology',
        weightagePercent: 30,
        subjects: ['pedagogy'],
        description: 'Bloom taxonomy, Piaget stages, formative/summative assessment, and Herbartian lesson planning.',
      },
      {
        id: 'general-academic',
        name: 'Part-III: General Academic Abilities & Science',
        weightagePercent: 50,
        subjects: ['everyday-science', 'pakistan-studies', 'general-knowledge'],
        description: 'Scientific principles, Pakistan affairs, and multidisciplinary academic fundamentals.',
      },
    ],
    pastPapers: [
      {
        id: 'lecturer-past-1',
        title: 'FPSC Lecturer Pedagogy Solved Past Paper',
        year: '2023 - 2024',
        agency: 'FPSC',
        post: 'College Lecturer (BS-17)',
        subjectSlug: 'pedagogy',
        topicSlug: 'fpsc-lecturer-past-papers-part-1',
        questionCount: 10,
        badge: 'Official Pedagogy',
      },
      {
        id: 'lecturer-pedagogy-2',
        title: 'Teaching Methodology & Child Development Paper',
        year: '2022',
        agency: 'KPPSC / PPSC',
        post: 'Lecturer Education',
        subjectSlug: 'pedagogy',
        topicSlug: 'pedagogy-past-papers-part-1',
        questionCount: 40,
        badge: 'Commission Solved',
      },
      {
        id: 'lecturer-english-past',
        title: 'FPSC Lecturer English Screening Paper',
        year: '2023',
        agency: 'FPSC',
        post: 'Federal Colleges',
        subjectSlug: 'english',
        topicSlug: 'english-past-papers-part-1',
        questionCount: 40,
        badge: 'English Core',
      },
    ],
    tips: [
      'In Bloom Revised Taxonomy (2001), "Creating" sits at the top level above "Evaluating".',
      'Piaget Formal Operational stage starts around age 11-12, enabling abstract hypothetical thinking.',
      'Negative reinforcement strengthens desired behavior by removing an unpleasant stimulus.',
    ],
  },

  'ministry-of-interior': {
    slug: 'ministry-of-interior',
    title: 'Ministry of Interior Posts',
    fullName: 'Ministry of Interior & Federal Security Screening Tests',
    conductingBody: 'FPSC & NTS',
    examType: 'job-post',
    totalQuestionsDefault: 50,
    durationMinutesDefault: 50,
    passingPercent: 50,
    negativeMarking: false,
    sections: [
      {
        id: 'english',
        name: 'Section 1: English Language & Comprehension',
        weightagePercent: 20,
        subjects: ['english'],
        description: 'Grammar, vocabulary, syntax, and sentence correction.',
      },
      {
        id: 'arithmetic-reasoning',
        name: 'Section 2: Arithmetic & Analytical Reasoning',
        weightagePercent: 20,
        subjects: ['mathematics', 'analytical-reasoning'],
        description: 'Percentages, algebra, arithmetic series, and logical reasoning puzzles.',
      },
      {
        id: 'current-gk',
        name: 'Section 3: Everyday Science & Current Affairs',
        weightagePercent: 20,
        subjects: ['everyday-science', 'current-affairs'],
        description: 'Physical sciences, human biology, global security pacts, and national economy.',
      },
      {
        id: 'pak-islamic',
        name: 'Section 4: Pakistan Affairs & Islamic Studies',
        weightagePercent: 20,
        subjects: ['pakistan-studies', 'islamiat'],
        description: 'Freedom movement history, political evolution post-1947, and Islamic principles.',
      },
      {
        id: 'security-law',
        name: 'Section 5: Security Architecture & Constitutional Law',
        weightagePercent: 20,
        subjects: ['law', 'general-knowledge'],
        description: 'NADRA Ordinance, NACTA Act, border crossing treaties, and Article 245 powers.',
      },
    ],
    pastPapers: [
      {
        id: 'interior-past-1',
        title: 'Ministry of Interior & Intelligence Solved Paper',
        year: '2023 - 2024',
        agency: 'FPSC / NTS',
        post: 'Executive & Screening Posts',
        subjectSlug: 'general-knowledge',
        topicSlug: 'ministry-of-interior-past-papers-part-1',
        questionCount: 10,
        badge: 'Security Law Focus',
      },
      {
        id: 'interior-law-past',
        title: 'Constitutional Articles & Civil Law Past Paper',
        year: '2022',
        agency: 'FPSC',
        post: 'Assistant Director',
        subjectSlug: 'law',
        topicSlug: 'law-past-papers-part-1',
        questionCount: 40,
        badge: 'Legal Section',
      },
    ],
    tips: [
      'Durand Line was demarcated in 1893 between Sir Mortimer Durand and Amir Abdur Rahman Khan.',
      'NADRA was founded under NADRA Ordinance VIII of 2000.',
      'Article 245 allows the Federal Government to call Armed Forces in aid of civil power.',
    ],
  },

  'associate-professor': {
    slug: 'associate-professor',
    title: 'Associate Professor (BS-19)',
    fullName: 'Associate Professor (BS-19) - Higher Education Department',
    conductingBody: 'KPPSC & PPSC',
    examType: 'job-post',
    totalQuestionsDefault: 50,
    durationMinutesDefault: 60,
    passingPercent: 50,
    negativeMarking: false,
    sections: [
      {
        id: 'research-pedagogy',
        name: 'Section 1: Advanced Research Methodology & Pedagogy',
        weightagePercent: 40,
        subjects: ['pedagogy', 'analytical-reasoning'],
        description: 'Quantitative & qualitative methodologies, peer review, psychometric assessment, and curriculum design.',
      },
      {
        id: 'english-analysis',
        name: 'Section 2: Academic English & Textual Analysis',
        weightagePercent: 20,
        subjects: ['english'],
        description: 'Advanced vocabulary, discourse coherence, academic writing norms, and argumentative evaluation.',
      },
      {
        id: 'higher-ed-governance',
        name: 'Section 3: Higher Education Governance & Ethics',
        weightagePercent: 40,
        subjects: ['general-knowledge', 'management', 'law'],
        description: 'HEC criteria, university statutes, academic ethics, intellectual property, and institutional leadership.',
      },
    ],
    pastPapers: [
      {
        id: 'assoc-prof-pedagogy',
        title: 'Higher Education Research Methodology Solved Paper',
        year: '2023',
        agency: 'KPPSC / PPSC',
        post: 'Associate Professor (BS-19)',
        subjectSlug: 'pedagogy',
        topicSlug: 'pedagogy-past-papers-part-1',
        questionCount: 40,
        badge: 'Methodology Core',
      },
      {
        id: 'assoc-prof-english',
        title: 'Academic English & Comprehension Advanced Set',
        year: '2022',
        agency: 'HEC / Commission',
        post: 'Senior Faculty',
        subjectSlug: 'english',
        topicSlug: 'english-past-papers-part-1',
        questionCount: 40,
        badge: 'Advanced Verbal',
      },
    ],
    tips: [
      'Focus on research designs: experimental vs quasi-experimental and sampling variance.',
      'Review HEC tenure track guidelines and academic ethics standards.',
    ],
  },

  fpsc: {
    slug: 'fpsc',
    title: 'FPSC General Recruitment',
    fullName: 'Federal Public Service Commission General Recruitment Tests (BS-16/17)',
    conductingBody: 'Federal Public Service Commission (FPSC)',
    examType: 'job-post',
    totalQuestionsDefault: 50,
    durationMinutesDefault: 50,
    passingPercent: 50,
    negativeMarking: false,
    sections: [
      {
        id: 'english',
        name: 'Part-I: English (20 Marks)',
        weightagePercent: 20,
        subjects: ['english'],
        description: 'Vocabulary, prepositions, sentence structuring, and grammar syntax.',
      },
      {
        id: 'arithmetic',
        name: 'Part-II: Basic Arithmetic (20 Marks)',
        weightagePercent: 20,
        subjects: ['mathematics'],
        description: 'Percentages, arithmetic mean, algebra, ratios, and fractions.',
      },
      {
        id: 'everyday-science',
        name: 'Part-III: Everyday Science (20 Marks)',
        weightagePercent: 20,
        subjects: ['everyday-science'],
        description: 'Atmospheric layers, solar system, vitamins, human anatomy, and atomic physics.',
      },
      {
        id: 'pak-current',
        name: 'Part-IV: Pakistan Affairs & Current Affairs (20 Marks)',
        weightagePercent: 20,
        subjects: ['pakistan-studies', 'current-affairs'],
        description: 'CPEC, national economic indicators, constitutional history, and geography.',
      },
      {
        id: 'islamic-studies',
        name: 'Part-V: Islamic Studies / Ethics (20 Marks)',
        weightagePercent: 20,
        subjects: ['islamiat'],
        description: 'Pillars of Islam, Ghazwat, Quranic compilations, and Islamic jurisprudence.',
      },
    ],
    pastPapers: [
      {
        id: 'fpsc-customs-past',
        title: 'FPSC Inspector Customs & Appraising Officer Past Paper',
        year: '2023',
        agency: 'FPSC',
        post: 'Inspector Customs (BS-16)',
        subjectSlug: 'general-knowledge',
        topicSlug: 'gk-past-papers-part-1',
        questionCount: 39,
        badge: 'Customs Batch',
      },
      {
        id: 'fpsc-eds-past',
        title: 'FPSC Everyday Science Solved Past Paper',
        year: '2022',
        agency: 'FPSC',
        post: 'General Recruitment',
        subjectSlug: 'everyday-science',
        topicSlug: 'everyday-science-past-papers-part-1',
        questionCount: 40,
        badge: 'Science 20%',
      },
      {
        id: 'fpsc-maths-past',
        title: 'FPSC Basic Arithmetic Speed Drill Solved Paper',
        year: '2023',
        agency: 'FPSC',
        post: 'Screening Batches',
        subjectSlug: 'mathematics',
        topicSlug: 'maths-past-papers-part-1',
        questionCount: 40,
        badge: 'Arithmetic 20%',
      },
    ],
    tips: [
      'FPSC general screening has no negative marking in standard preliminary phases.',
      'Speed arithmetic without calculators is essential to finish within the 50-100 minute window.',
    ],
  },

  ppsc: {
    slug: 'ppsc',
    title: 'PPSC One-Paper MCQs',
    fullName: 'Punjab Public Service Commission One-Paper General Knowledge Exam',
    conductingBody: 'Punjab Public Service Commission (PPSC)',
    examType: 'job-post',
    totalQuestionsDefault: 50,
    durationMinutesDefault: 50,
    passingPercent: 40,
    negativeMarking: true,
    negativeMarkPerWrong: 0.25,
    sections: [
      {
        id: 'gk-geography',
        name: 'Section 1: General Knowledge & World Geography',
        weightagePercent: 20,
        subjects: ['general-knowledge', 'geography'],
        description: 'Capitals, currencies, straits, deserts, mountains, and international organizations.',
      },
      {
        id: 'pak-studies',
        name: 'Section 2: Pakistan Studies & Current Affairs',
        weightagePercent: 20,
        subjects: ['pakistan-studies', 'current-affairs'],
        description: '1906 Muslim League to 1947, constitutions of 1956/1962/1973, and recent national events.',
      },
      {
        id: 'islamic-studies',
        name: 'Section 3: Islamic Studies & Ethics',
        weightagePercent: 15,
        subjects: ['islamiat'],
        description: 'Life of Prophet Muhammad (PBUH), Khulafa-e-Rashideen, and basic Islamic teachings.',
      },
      {
        id: 'eds-math',
        name: 'Section 4: Everyday Science & Basic Mathematics',
        weightagePercent: 25,
        subjects: ['everyday-science', 'mathematics'],
        description: 'SI units, human biology, percentages, ratios, equations, and solar system facts.',
      },
      {
        id: 'urdu-english',
        name: 'Section 5: Urdu & English Language',
        weightagePercent: 20,
        subjects: ['urdu', 'english'],
        description: 'Urdu literature, famous books, idioms, English synonyms, prepositions, and corrections.',
      },
    ],
    pastPapers: [
      {
        id: 'ppsc-gk-past-1',
        title: 'PPSC One-Paper 100 MCQs Solved Past Paper 1',
        year: '2023',
        agency: 'PPSC',
        post: 'Tehsildar & Sub-Inspector',
        subjectSlug: 'general-knowledge',
        topicSlug: 'gk-past-papers-part-1',
        questionCount: 39,
        badge: 'PPSC Model Paper',
      },
      {
        id: 'ppsc-urdu-past-1',
        title: 'PPSC Urdu Grammar & Literature Solved Paper',
        year: '2022',
        agency: 'PPSC',
        post: 'General Cadre',
        subjectSlug: 'urdu',
        topicSlug: 'urdu-past-papers-part-1',
        questionCount: 40,
        badge: 'Urdu Section',
      },
      {
        id: 'ppsc-pak-past',
        title: 'PPSC Pakistan Affairs & History Solved Paper',
        year: '2023',
        agency: 'PPSC',
        post: 'Junior Clerk / Assistant',
        subjectSlug: 'pakistan-studies',
        topicSlug: 'pak-study-past-papers-part-1',
        questionCount: 40,
        badge: 'Pak Studies',
      },
    ],
    tips: [
      'PPSC enforces negative marking (0.25 marks deducted per wrong MCQ). Never guess blindly!',
      'Urdu and Basic Computer Science questions are unique differentiators in PPSC merit cutoffs.',
    ],
  },

  kppsc: {
    slug: 'kppsc',
    title: 'KPPSC General Screening',
    fullName: 'Khyber Pakhtunkhwa Public Service Commission General Ability Screening',
    conductingBody: 'KPPSC',
    examType: 'job-post',
    totalQuestionsDefault: 45,
    durationMinutesDefault: 45,
    passingPercent: 40,
    negativeMarking: false,
    sections: [
      {
        id: 'english',
        name: 'Part 1: English Language & Vocabulary (20%)',
        weightagePercent: 20,
        subjects: ['english'],
        description: 'Grammar, prepositions, antonyms, synonyms, and error detection.',
      },
      {
        id: 'gk-eds',
        name: 'Part 2: General Knowledge & Everyday Science (30%)',
        weightagePercent: 30,
        subjects: ['general-knowledge', 'everyday-science'],
        description: 'World geography, international summits, human physiology, and inventions.',
      },
      {
        id: 'pak-affairs',
        name: 'Part 3: Pakistan Studies & KP History (25%)',
        weightagePercent: 25,
        subjects: ['pakistan-studies', 'current-affairs'],
        description: 'Constitutional milestones, Indus river system, KP geography, and merged districts.',
      },
      {
        id: 'islamic-math',
        name: 'Part 4: Islamic Studies & Basic Arithmetic (25%)',
        weightagePercent: 25,
        subjects: ['islamiat', 'mathematics'],
        description: 'Quranic facts, Hadith literature, ratios, and percentages.',
      },
    ],
    pastPapers: [
      {
        id: 'kppsc-gk-past',
        title: 'KPPSC General Screening Solved Past Paper',
        year: '2023',
        agency: 'KPPSC',
        post: 'Tehsildar & PMS Screening',
        subjectSlug: 'general-knowledge',
        topicSlug: 'gk-past-papers-part-2',
        questionCount: 40,
        badge: 'KPPSC Official',
      },
      {
        id: 'kppsc-pak-past',
        title: 'KPPSC Pakistan Studies & Provincial History Paper',
        year: '2022',
        agency: 'KPPSC',
        post: 'Assistant / Sub-Inspector',
        subjectSlug: 'pakistan-studies',
        topicSlug: 'pak-study-past-papers-part-2',
        questionCount: 40,
        badge: 'High Yield',
      },
    ],
    tips: [
      'KPPSC places significant focus on Khyber Pakhtunkhwa geography, passes, and administrative history.',
      'General screening cutoffs are heavily dependent on English and Everyday Science accuracy.',
    ],
  },

  css: {
    slug: 'css',
    title: 'CSS MPT Screening',
    fullName: 'Central Superior Services (CSS) - MCQ-Based Preliminary Test (MPT)',
    conductingBody: 'Federal Public Service Commission (FPSC)',
    examType: 'civil-service',
    totalQuestionsDefault: 50,
    durationMinutesDefault: 50,
    passingPercent: 33, // 66 out of 200 marks
    negativeMarking: false,
    sections: [
      {
        id: 'english',
        name: 'Section 1: English Language & Reading Comprehension',
        weightagePercent: 25,
        subjects: ['english'],
        description: 'GRE-level vocabulary, idioms, prepositions, sentence corrections, and reading passage analysis.',
      },
      {
        id: 'general-abilities',
        name: 'Section 2: General Abilities, Mathematics & Mental Agility',
        weightagePercent: 30,
        subjects: ['mathematics', 'analytical-reasoning'],
        description: 'Basic arithmetic, algebra, analytical reasoning, and quantitative problem solving.',
      },
      {
        id: 'general-knowledge',
        name: 'Section 3: General Knowledge & Everyday Science',
        weightagePercent: 25,
        subjects: ['general-knowledge', 'everyday-science', 'current-affairs'],
        description: 'Physical sciences, environmental science, global geography, and international relations.',
      },
      {
        id: 'pak-islamic-urdu',
        name: 'Section 4: Pakistan Affairs, Islamic Studies & Urdu',
        weightagePercent: 20,
        subjects: ['pakistan-studies', 'islamiat', 'urdu'],
        description: 'Historical chronology 712-1947, post-independence crises, Seerat-un-Nabi, and Urdu syntax.',
      },
    ],
    pastPapers: [
      {
        id: 'css-mpt-past-1',
        title: 'CSS MPT Official Screening Solved Paper',
        year: '2024',
        agency: 'FPSC',
        post: 'CSS Preliminary (MPT)',
        subjectSlug: 'general-knowledge',
        topicSlug: 'gk-past-papers-part-3',
        questionCount: 40,
        badge: 'Latest MPT',
      },
      {
        id: 'css-eds-past',
        title: 'CSS General Science & Ability Solved Past Paper',
        year: '2023',
        agency: 'FPSC',
        post: 'CSS Examination',
        subjectSlug: 'everyday-science',
        topicSlug: 'general-science-past-papers-part-1',
        questionCount: 40,
        badge: 'GSA Core',
      },
      {
        id: 'css-pak-past',
        title: 'CSS Pakistan Affairs Solved MCQs Set',
        year: '2023',
        agency: 'FPSC',
        post: 'CSS Compulsory',
        subjectSlug: 'pakistan-studies',
        topicSlug: 'pak-study-past-papers-part-3',
        questionCount: 40,
        badge: 'High Yield',
      },
    ],
    tips: [
      'CSS MPT requires only 33% (66/200 marks) to qualify for written exam, with no negative marking.',
      'Do not spend excessive time on complex analytical puzzles; secure easy marks in English and Everyday Science first.',
    ],
  },
};

/**
 * Helper to get blueprint for any exam or post slug
 */
export function getExamBlueprint(slug: string): ExamBlueprint | null {
  return EXAM_BLUEPRINTS[slug] || null;
}

/**
 * Returns all registered blueprints
 */
export function getAllExamBlueprints(): ExamBlueprint[] {
  return Object.values(EXAM_BLUEPRINTS);
}
