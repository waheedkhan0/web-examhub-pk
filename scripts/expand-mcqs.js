/**
 * ExamHub.pk — bulk MCQ expansion from the "MCQs csv files/" drop folder.
 *
 * Third-party MCQ exports never agree on column names, answer encoding or
 * topic taxonomy. This script reads every export, normalises it into the
 * canonical intake columns, classifies each question into the site's own
 * subject/topic tree, de-duplicates against the live bank, chunks oversized
 * topics into browsable pages, and then hands the result to the regular
 * `import mcqs` pipeline so merging and subject-page syncing stay in one place.
 *
 *   node scripts/expand-mcqs.js --dry-run            # report the plan only
 *   node scripts/expand-mcqs.js                      # write normalised CSV + import
 *   node scripts/expand-mcqs.js --tier=1             # only exports that ship real explanations
 *   node scripts/expand-mcqs.js --tier=1,2 --max-per-set=40
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  ROOT,
  MCQS_DIR,
  clean,
  normalizeForCompare,
  parseCsv,
  stringifyCsv,
  titleize,
  listMarkdown,
  tryReadMarkdown,
} from './lib/cms.js';
import * as mcqImport from './import-mcqs.js';

const SOURCES_DIR = path.join(ROOT, 'MCQs csv files');
const OUT_DIR = path.join(ROOT, 'MCQs csv files', 'normalized');

const TIER1 = 'explanation'; // exports that carry a genuine rationale
const TIER2 = 'compiled'; // exports with answer-only or missing rationales

/* ------------------------------------------------------------------ *
 * 1. Source registry
 * ------------------------------------------------------------------ *
 * `subjectFrom` decides the canonical subject. Filename wins over the
 * `category` column because a few exports have cells like "3" in category.
 */

const SUBJECT_BY_CATEGORY = {
  'mdcat-biology': 'biology',
  'mdcat-chemistry': 'chemistry',
  'mdcat-physics': 'physics',
  'mdcat-mathematics': 'mathematics',
  'mdcat-math': 'mathematics',
  'english': 'english',
  'pakistan affairs': 'pakistan-studies',
  'pakistan current affairs': 'current-affairs',
  'world current affairs': 'current-affairs',
  'pak study': 'pakistan-studies',
  'pak studies': 'pakistan-studies',
  'generalknowledge': 'general-knowledge',
  'general knowledge': 'general-knowledge',
  'everyday science': 'everyday-science',
  'islamic studies': 'islamiat',
  'islam': 'islamiat',
  'computer': 'computer-science',
};

/** Filename patterns are the most reliable signal, so try them first. */
const SUBJECT_BY_FILE = [
  [/mdcat[-_]bio/i, 'biology'],
  [/mdcat[-_]chem/i, 'chemistry'],
  [/mdcat[-_]phys/i, 'physics'],
  [/mdcat[-_]math/i, 'mathematics'],
  [/^eng[-_ ]?\d*\.csv$/i, 'english'],
  [/pak_affairs/i, 'pakistan-studies'],
  [/biology/i, 'biology'],
  [/chemistry/i, 'chemistry'],
  [/physics/i, 'physics'],
  [/computer|cs_/i, 'computer-science'],
  [/islamiat/i, 'islamiat'],
  [/pak_study/i, 'pakistan-studies'],
  [/accounting/i, 'accounting'],
  [/finance/i, 'finance'],
  [/hrm/i, 'human-resource-management'],
  [/marketing/i, 'marketing'],
  [/general_knowledge|gk/i, 'general-knowledge'],
];

/** Exams each subject is marketed against — drives targetExams + page copy. */
const SUBJECT_META = {
  biology: { exams: ['MDCAT', 'FSc', 'PPSC', 'FPSC'], label: 'Biology' },
  chemistry: { exams: ['MDCAT', 'FSc', 'PPSC', 'FPSC'], label: 'Chemistry' },
  physics: { exams: ['MDCAT', 'FSc', 'PPSC', 'FPSC'], label: 'Physics' },
  mathematics: { exams: ['MDCAT', 'FSc', 'PPSC', 'FPSC', 'NTS'], label: 'Mathematics' },
  english: { exams: ['PPSC', 'FPSC', 'NTS', 'CSS', 'PMS'], label: 'English' },
  'pakistan-studies': { exams: ['PPSC', 'FPSC', 'CSS', 'PMS', 'NTS'], label: 'Pakistan Studies' },
  'current-affairs': { exams: ['PPSC', 'FPSC', 'CSS', 'PMS', 'NTS'], label: 'Current Affairs' },
  'general-knowledge': { exams: ['PPSC', 'FPSC', 'NTS', 'CSS'], label: 'General Knowledge' },
  'everyday-science': { exams: ['PPSC', 'FPSC', 'NTS', 'CSS'], label: 'Everyday Science' },
  islamiat: { exams: ['PPSC', 'FPSC', 'NTS', 'CSS'], label: 'Islamiat' },
  'computer-science': { exams: ['PPSC', 'FPSC', 'NTS', 'CSS'], label: 'Computer Science' },
  accounting: { exams: ['FPSC', 'PPSC', 'NTS', 'CSS'], label: 'Accounting' },
  finance: { exams: ['FPSC', 'PPSC', 'NTS', 'CSS'], label: 'Finance' },
  'human-resource-management': { exams: ['FPSC', 'PPSC', 'NTS'], label: 'Human Resource Management' },
  marketing: { exams: ['FPSC', 'PPSC', 'NTS'], label: 'Marketing' },
};

/** catA values in the pakmcqs export are topics only when they are specific. */
const GENERIC_CAT_A = new Set(
  ['pak study', 'generalknowledge', 'everyday science', 'islamic studies', 'computer', 'english',
    'pakistan current affairs', 'world current affairs', 'general knowledge', 'islam']
    .map((s) => s.toLowerCase()),
);

const DIFFICULTY_BY_WORD = { easy: 'Basic', medium: 'Intermediate', hard: 'Advanced', 'exam-level': 'Exam-Level' };

/* ------------------------------------------------------------------ *
 * 2. Topic taxonomy — first matching rule wins
 * ------------------------------------------------------------------ */

const TOPIC_RULES = {
  biology: [
    ['cell-biology', 'Cell Structure & Function', ['cell', 'organelle', 'mitosis', 'meiosis', 'membrane', 'nucleus', 'cytoplasm', 'ribosome', 'mitochondri']],
    ['genetics', 'Genetics & Inheritance', ['gene', 'chromosome', 'dna', 'rna', 'allele', 'mendel', 'mutation', 'heredit', 'genotype', 'phenotype', 'inheritance']],
    ['ecology', 'Ecology & Environment', ['ecosystem', 'food chain', 'trophic', 'biome', 'population', 'habitat', 'biodiversity', 'pollution', 'producer', 'consumer']],
    ['human-physiology', 'Human Physiology & Anatomy', ['human', 'blood', 'heart', 'kidney', 'neuron', 'hormone', 'digest', 'muscle', 'bone', 'organ system', 'nerve', 'arter', 'vein']],
    ['plant-physiology', 'Plant Physiology & Botany', ['plant', 'photosynthesis', 'root', 'leaf', 'stomata', 'xylem', 'phloem', 'seed', 'flower', 'chlorophyll', 'transpiration']],
    ['biochemistry', 'Biomolecules & Biochemistry', ['enzyme', 'protein', 'carbohydrate', 'lipid', 'vitamin', 'amino acid', 'atp', 'coenzyme', 'substrate']],
    ['microbiology', 'Microbiology & Immunity', ['bacteria', 'virus', 'fungus', 'pathogen', 'immunity', 'vaccine', 'microorganism', 'antibiotic', 'germ']],
    ['reproduction', 'Reproduction & Development', ['reproduct', 'embryo', 'fetus', 'gamete', 'fertiliz', 'placenta', 'puberty', 'ovum', 'sperm']],
    ['biological-classification', 'Biological Classification', ['taxonomy', 'kingdom', 'phylum', 'classification', 'monera', 'protista', 'animalia', 'species', 'genus']],
  ],
  chemistry: [
    ['atomic-structure', 'Atomic Structure & Periodicity', ['electron', 'proton', 'neutron', 'orbital', 'quantum', 'shell', 'subshell', 'isotope', 'atomic number', 'periodic table', 'significant figure']],
    ['chemical-bonding', 'Chemical Bonding & Structure', ['bond', 'covalent', 'ionic', 'valence', 'hybridis', 'electronegativity', 'molecule shape', 'lone pair', 'dipole']],
    ['physical-chemistry', 'Physical Chemistry & Stoichiometry', ['mole', 'stoichiometr', 'enthalpy', 'entropy', 'equilibrium', 'kinetic', 'rate of', 'gas law', 'thermodynamic', 'solution', 'concentration', 'ph of', 'avogadro', 'n-factor']],
    ['electrochemistry', 'Electrochemistry & Redox', ['electroly', 'galvanic', 'electrode', 'oxidation', 'reduction', 'redox', 'battery', 'faraday', 'voltamm']],
    ['organic-chemistry', 'Organic Chemistry', ['organic', 'hydrocarbon', 'alkane', 'alkene', 'alkyne', 'benzene', 'alcohol', 'aldehyde', 'ketone', 'functional group', 'isomer', 'polymer', 'reagent']],
    ['inorganic-chemistry', 'Inorganic Chemistry & Acids-Bases', ['acid', 'base', 'salt', 'metal', 'nonmetal', 'transition', 'halogen', 'noble gas', 'oxide', 'ammonia']],
  ],
  physics: [
    ['units-and-measurement', 'Units, Measurement & Vectors', ['si unit', 'dimension', 'measurement', 'prefix', 'least count', 'derived unit', 'base unit', 'error in']],
    ['mechanics', 'Mechanics & Motion', ['force', 'motion', 'velocity', 'acceleration', 'momentum', 'newton', 'friction', 'projectile', 'torque', 'gravity', 'work done', 'kinetic energy', 'potential energy', 'mass of', 'collision']],
    ['waves-and-sound', 'Waves & Sound', ['wave', 'sound', 'frequency', 'resonance', 'doppler', 'echo', 'vibration', 'amplitude', 'ultrasonic']],
    ['optics', 'Optics & Light', ['lens', 'mirror', 'refract', 'diffraction', 'interference', 'light', 'spectrum', 'polaris', 'dispersion', 'image formation']],
    ['electricity-and-magnetism', 'Electricity & Magnetism', ['current', 'voltage', 'resistance', 'charge', 'ohm', 'circuit', 'magnetic', 'capacitor', 'coulomb', 'field line', 'induction']],
    ['thermodynamics', 'Heat & Thermodynamics', ['heat', 'temperature', 'specific heat', 'latent', 'calorie', 'thermal', 'conduction', 'convection', 'radiation', 'engine']],
    ['modern-physics', 'Modern & Nuclear Physics', ['quantum', 'photon', 'photoelectric', 'radioactiv', 'nuclear', 'half-life', 'electron volt', 'isotope of', 'de broglie', 'relativity']],
  ],
  mathematics: [
    ['trigonometry', 'Trigonometry', ['sin', 'cos', 'tan', 'trigonometr', 'radian', 'cosec', 'sec', 'csc', 'cot', 'theta']],
    ['sets-and-functions', 'Sets, Functions & Logic', ['subset', 'intersection', 'union', ' a ∩ b', ' a ∪ b', 'set of', 'empty set', 'de Morgan', 'domain of', 'range of', 'f(x)', 'true or false', 'negation', 'contrapositive']],
    ['algebra', 'Algebra & Equations', ['equation', 'inequality', 'factor', 'quadratic', 'polynomial', 'logarithm', 'sequence', 'series', 'simplify', 'value of x', 'sum of first']],
    ['geometry', 'Geometry & Mensuration', ['triangle', 'circle', 'area of', 'volume of', 'parallelogram', 'theorem', 'polygon', 'perimeter', 'angle', 'chord', 'tangent to', 'hexagon', 'right-angled']],
    ['coordinate-geometry', 'Coordinate Geometry', ['slope', 'parabola', 'ellipse', 'hyperbola', 'distance between', 'x-axis', 'y-axis', 'origin', 'midpoint', 'straight line', 'line passing']],
    ['matrices-and-vectors', 'Matrices & Vectors', ['matrix', 'matrices', 'determinant', 'vector', 'dot product', 'cross product', 'order of']],
    ['calculus', 'Calculus & Differential Equations', ['derivative', 'differenti', 'integrat', 'limit of', 'lhopital', 'partial', '∫']],
    ['statistics-and-probability', 'Statistics & Probability', ['mean', 'median', 'mode', 'probability', 'standard deviation', 'variance', 'distribution', 'data set', 'bag contains', 'bag has']],
    ['number-system', 'Arithmetic & Number System', ['prime', 'fraction', 'percentage', 'ratio', 'hcf', 'lcm', 'integer', 'divisible', 'decimal', 'irrational', 'natural number']],
  ],
  english: [
    ['vocabulary', 'Vocabulary — Synonyms & Antonyms', ['synonym', 'antonym', 'opposite', 'similar in meaning', 'meaning', 'means']],
    ['grammar', 'Grammar & Parts of Speech', ['tense', 'part of speech', 'noun', 'verb', 'pronoun', 'subject-verb', 'article', 'plural', 'singular', 'comparative', 'conjunction', 'adjective', 'adverb', 'correct form']],
    ['literary-devices', 'Figures of Speech & Literary Devices', ['figure of speech', 'alliteration', 'personification', 'metaphor', 'simile', 'tautology', 'euphemism', 'malapropism', 'oxymoron', 'irony', 'hyperbole', 'understatement']],
    ['prepositions', 'Prepositions', ['preposition']],
    ['sentence-correction', 'Sentence Correction & Completion', ['sentence', 'fill', 'complete the', 'grammatically correct']],
    ['analogies', 'Analogies & Relationships', ['analogy', 'is to', '::']],
    ['idioms-and-phrases', 'Idioms & Phrases', ['idiom', 'phrase', 'meaning of the']],
    ['spelling', 'Spelling & Word Formation', ['spelling', 'misspelled', 'correctly spelled']],
  ],
  'pakistan-studies': [
    ['firsts-in-pakistan', 'Firsts in Pakistan — Pioneers & Milestones', ['first woman', 'first muslim', 'first pas', 'first engineer', 'first doctor', 'first lawyer', 'first chartered', 'first ambassador', 'first principal', 'first dean', 'first lecturer', 'first inspector general', 'first digital', 'first speaker', 'pioneering']],
    ['freedom-movement', 'Freedom Movement & History', ['1857', 'sir syed', 'congress', 'muslim league', 'iqbal', 'jinnah', '1940', 'lahore resolution', 'movement', '1947', 'cabinet mission', 'simla', 'aligarh', 'coined', 'separate electorate', 'agartala', 'cripps', 'partition', 'east india', 'british', 'mughal', 'akbar', 'aurangzeb', 'dhaka', 'mujib', 'yahya']],
    ['constitution', 'Constitutional & Legal History', ['constitution', 'amendment', 'article', 'constituent assembly', 'objective resolution', '1956', '1962', '1973', 'judiciary', 'chief justice', 'legal framework order', 'supreme court', 'high court', 'martial law', 'emergency']],
    ['foreign-policy-and-treaties', 'Foreign Policy, Treaties & Agreements', ['declaration', 'agreement', 'accord', 'treaty', 'corridor', 'membership', 'oic', 'saarc', 'sco', 'summit', 'purchased', 'diplomatic', 'recognition', 'border dispute', 'kashmir', 'afghanistan']],
    ['geography', 'Geography, Borders & Mountain Passes', ['mountain', 'river', 'glacier', 'border', 'district', 'province', 'pass', 'dam', 'lake', 'area', 'capital of', 'borders with', 'k2', 'height', 'longest', 'largest', 'smallest', 'desert', 'forest', 'national park', 'strait', 'bay']],
    ['economy-and-resources', 'Economy & Natural Resources', ['economy', 'gdp', 'industry', 'agriculture', 'trade', 'budget', 'bank', 'currency', 'export', 'resource', 'cotton', 'wheat', 'census', 'population', 'port', 'mineral', 'reserve', 'inflation', 'tax', 'revenue']],
    ['government-and-politics', 'Government & Politics', ['prime minister', 'president', 'parliament', 'senate', 'national assembly', 'governor', 'chief minister', 'ministry', 'cabinet', 'election', 'local government']],
    ['defence-and-armed-forces', 'Defence & Armed Forces', ['armed forces', 'army', 'nuclear', 'kargil', 'war', 'gallantry', 'military', 'nato', 'air force', 'paf', 'operation']],
  ],
  'general-knowledge': [
    ['world-geography', 'World Geography & Capitals', ['capital', 'country', 'continent', 'ocean', 'desert', 'island', 'river', 'mountain', 'border', 'largest', 'smallest', 'currency']],
    ['international-organizations', 'International Organizations', ['united nations', 'uno', 'nato', 'european union', 'unesco', 'world health organization', 'icao', 'oic', 'saarc', 'headquarters', 'world bank', 'imf']],
    ['sports', 'Sports & Games', ['cricket', 'football', 'olympic', 'world cup', 'tennis', 'hockey', 'stadium', 'tournament', 'champion']],
    ['books-and-authors', 'Books & Authors', ['book', 'author', 'novel', 'written by', 'poet', 'encyclopedia']],
    ['inventions-and-discoveries', 'Inventions & Discoveries', ['invented', 'discovery', 'discover', 'scientist', 'first', 'theorem']],
    ['history-and-civilization', 'World History & Civilization', ['war', 'battle', 'century', 'ancient', 'civilization', 'emperor', 'born', 'died', 'revolution', 'independence']],
    ['awards-and-honours', 'Awards & Honours', ['nobel', 'award', 'prize', 'honour', 'highest civilian']],
    ['abbreviations-and-days', 'Abbreviations & Important Days', ['abbreviation', 'day of', 'week of', 'decade', 'full form']],
  ],
  'everyday-science': [
    ['human-health-and-nutrition', 'Human Health & Nutrition', ['disease', 'vitamin', 'blood', 'body', 'nutrition', 'calorie', 'protein', 'digestion', 'health']],
    ['physics-in-daily-life', 'Physics in Daily Life', ['sound', 'light', 'heat', 'electricity', 'mirror', 'lens', 'gravity', 'radio', 'tv', 'friction']],
    ['chemistry-in-daily-life', 'Chemistry in Daily Life', ['salt', 'acid', 'gas', 'soap', 'detergent', 'water', 'air', 'chemical', 'metal', 'alloy', 'fibre']],
    ['astronomy-and-space', 'Astronomy & Space', ['sun', 'moon', 'star', 'planet', 'earth', 'satellite', 'universe', 'orbit', 'eclipse', 'galaxy']],
    ['biology-in-daily-life', 'Biology in Daily Life', ['plant', 'animal', 'bacteria', 'cell', 'photosynthesis', 'forest', 'fish', 'insect', 'bird']],
    ['environment-and-pollution', 'Environment & Pollution', ['pollution', 'ozone', 'climate', 'ecosystem', 'waste', 'greenhouse', 'recycl', 'conservation']],
  ],
  islamiat: [
    ['quran-revelation', 'Quran & Its Revelation', ['quran', 'surah', 'ayah', 'revelation of the quran', 'hafiz', 'mushaf', 'verse']],
    ['hadith-and-sunnah', 'Hadith & Sunnah', ['hadith', 'bukhari', 'muslim', 'sunnah', 'sahaba', 'companion']],
    ['prophetic-era', 'Seerah — Life of the Prophet ﷺ', ['prophet', 'rasool', 'seerat', 'birth of', 'makkah', 'madina', 'hijrat', 'ghazwa', 'biyat']],
    ['pillars-and-jurisprudence', 'Pillars of Islam & Jurisprudence', ['salat', 'namaz', 'zakat', 'sawm', 'fast', 'hajj', 'umrah', 'pillar', 'wuzu', 'prayer']],
    ['rightly-guided-caliphs', 'Islamic History & Caliphate', ['caliph', 'khalifa', 'abu bakr', 'umar', 'osman', 'ali', 'umayyad', 'abbasid', 'andalus', 'conquest']],
    ['islamic-law-and-society', 'Islamic Law & Society', ['halal', 'haram', 'fiqh', 'sharia', 'inheritance', 'nikah', 'talaq', 'sunnah of']],
  ],
  'computer-science': [
    ['it-fundamentals', 'Computer Fundamentals & Hardware', ['computer', 'cpu', 'ram', 'rom', 'hardware', 'software', 'memory', 'generation of computer', 'input', 'output']],
    ['networking-and-security', 'Networking & Cyber Security', ['network', 'internet', 'ip address', 'lan', 'wan', 'protocol', 'firewall', 'virus', 'cyber', 'security', 'browser', 'email']],
    ['programming-and-data', 'Programming & Databases', ['programming', 'language', 'algorithm', 'database', 'code', 'binary', 'compiler', 'variable']],
    ['office-and-shortcuts', 'Office Applications & Shortcuts', ['ms word', 'shortcut', 'excel', 'powerpoint', 'keyboard', 'windows', 'ribbon']],
  ],
  'current-affairs': [
    ['sports-and-tournaments', 'Sports & Tournaments', ['cricket', 'football', 'league', 'tournament', 'world cup', 'olympic', 'champion', 'player', 'team', 'stadium', 'series', 'javelin', 'medal', 'tennis', 'hockey', 'boxing', 'psl', 'kpl', 'fifa', 'wimbledon']],
    ['summits-and-conferences', 'Summits, Conferences & Declarations', ['summit', 'cop ', 'g20', 'g7', 'oic', 'saarc', 'shanghai cooperation', 'forum', 'conference', 'declaration', 'resolution', 'general assembly', 'agenda']],
    ['international-organisations', 'International Organisations & Their Heads', ['united nations', 'uno', 'nato', 'european union', 'unesco', 'unicef', 'icao', 'iaea', 'world bank', 'imf', 'adb', 'wto', 'who', 'headquarters', 'secretary general', 'director general', 'alliance', 'agency']],
    ['defence-and-security', 'Defence, Security & Military Exercises', ['army', 'navy', 'air force', 'exercise', 'missile', 'nuclear', 'terrorism', 'military', 'corps', 'ispr', 'defence', 'peacekeeping', 'border', 'surgical strike']],
    ['science-technology-health', 'Science, Technology & Health', ['vaccine', 'virus', 'disease', 'satellite', 'rocket', 'space', 'mission', 'artificial intelligence', 'technology', 'tesla', 'nasa', 'isro', 'drug', 'pandemic', 'covid', 'hospital', 'medical', 'research']],
    ['disasters-and-emergencies', 'Disasters, Floods & Emergencies', ['flood', 'earthquake', 'disaster', 'calamity', 'avalanche', 'drought', 'cyclone', 'blast', 'accident', 'plane crash', 'casualty', 'affected']],
    ['awards-and-honours', 'Awards, Honours & Records', ['nobel', 'award', 'prize', 'honour', 'gallantry', 'guinness', 'world record', 'first-ever', 'medal of']],
    ['economy-and-projects', 'Economy, Projects & Development', ['budget', 'bank', 'inflation', 'gdp', 'loan', 'cpec', 'corridor', 'project', 'port', 'dam', 'deal', 'investment', 'tariff', 'trade', 'aid', 'concession', 'import', 'export']],
    ['days-and-themes', 'Important Days & Themes', ['day of', 'theme of', 'observed', 'week', 'decade', 'awareness', 'celebrated']],
    ['world-countries-and-cities', 'World Countries, Cities & Capitals', ['capital', 'country', 'state of', 'city', 'island', 'province', 'renamed', 'territory', 'nation', 'monarch', 'king', 'queen', 'emir', 'sultan', 'president of']],
    ['pakistan-government-and-polity', 'Pakistan Government & Polity', ['pakistan', 'assembly', 'senate', 'prime minister', 'president', 'governor', 'chief minister', 'cabinet', 'ministry', 'election', 'ecp', 'ordinance', 'parliament', 'secretary', 'bureaucrat', 'division', 'district']],
  ],
  accounting: [
    ['accounting-fundamentals', 'Accounting Fundamentals & Concepts', ['accounting', 'principle', 'concept', 'convention', 'double entry', 'journal', 'ledger']],
    ['financial-statements', 'Financial Statements & Analysis', ['balance sheet', 'income statement', 'ratio', 'cash flow', 'trial balance', 'profit']],
    ['cost-and-management', 'Cost & Management Accounting', ['cost', 'overhead', 'standard cost', 'marginal', 'absorption', 'budget']],
  ],
  finance: [
    ['financial-markets', 'Financial Markets & Institutions', ['market', 'bank', 'secp', 'stock', 'institution', 'financial year', 'money']],
    ['corporate-finance', 'Corporate Finance & Capital Budgeting', ['capital', 'npv', 'irr', 'leverage', 'dividend', 'investment', 'risk']],
  ],
  'human-resource-management': [
    ['hrm-fundamentals', 'HRM Fundamentals & Functions', ['human resource', 'recruitment', 'selection', 'training', 'performance', 'appraisal', 'job analysis']],
    ['industrial-relations', 'Industrial & Labour Relations', ['union', 'labour', 'industrial', 'dispute', 'wage']],
  ],
  marketing: [
    ['marketing-fundamentals', 'Marketing Fundamentals & Mix', ['marketing', 'product', 'price', 'place', 'promotion', 'segmentation', 'mix']],
  ],
};

const FALLBACK_TOPIC = {
  biology: ['biology-misc', 'Biology — Mixed Practice'],
  chemistry: ['chemistry-misc', 'Chemistry — Mixed Practice'],
  physics: ['physics-misc', 'Physics — Mixed Practice'],
  mathematics: ['mathematics-misc', 'Mathematics — Mixed Practice'],
  english: ['english-misc', 'English — Mixed Practice'],
  'pakistan-studies': ['pakistan-studies-misc', 'Pakistan Studies — Mixed Practice'],
  'general-knowledge': ['general-knowledge-mix', 'General Knowledge — Mixed Practice'],
  'everyday-science': ['everyday-science-mix', 'Everyday Science — Mixed Practice'],
  islamiat: ['islamiat-mix', 'Islamiat — Mixed Practice'],
  'computer-science': ['computer-misc', 'Computer Science — Mixed Practice'],
  'current-affairs': ['current-affairs-mix', 'Current Affairs — Mixed Practice'],
  accounting: ['accounting-misc', 'Accounting — Mixed Practice'],
  finance: ['finance-misc', 'Finance — Mixed Practice'],
  'human-resource-management': ['hrm-misc', 'HRM — Mixed Practice'],
  marketing: ['marketing-misc', 'Marketing — Mixed Practice'],
};

/* ------------------------------------------------------------------ *
 * 3. Row reading
 * ------------------------------------------------------------------ */

function foldRowKeys(record) {
  const out = {};
  for (const [k, v] of Object.entries(record)) out[k.toLowerCase().replace(/[\s_-]+/g, '')] = sanitize(clean(v));
  return out;
}

/**
 * pakmcqs leaves option slots blank, so "D" cannot be read as index 3 after
 * compaction. Keep every option with the letter it occupied and resolve
 * against that letter.
 */
function readSlots(row) {
  const raw = [row.optiona ?? row.opa, row.optionb ?? row.opb, row.optionc ?? row.opc, row.optiond ?? row.opd, row.optione ?? row.ope];
  const slots = [];
  raw.forEach((text, i) => {
    if (text) slots.push({ text, letter: String.fromCharCode(65 + i) });
  });
  const unique = [];
  const seen = new Set();
  for (const s of slots) {
    const key = normalizeForCompare(s.text);
    if (seen.has(key)) continue;
    seen.add(key);
    unique.push(s);
  }
  return unique;
}

function resolveAnswerIndex(slots, row) {
  const raw = row.correctoption ?? row.correctanswer ?? row.correct ?? row.answer ?? '';
  const letter = raw.toUpperCase().replace(/[).\-]$/, '');
  let idx = slots.findIndex((s) => s.letter === letter);
  if (idx !== -1) return idx;

  const n = Number(raw);
  if (Number.isInteger(n) && n >= 1 && n <= 5) {
    const wanted = String.fromCharCode(64 + n);
    idx = slots.findIndex((s) => s.letter === wanted);
    if (idx !== -1) return idx;
  }

  const text = row.correctoptiontext ?? '';
  if (text) idx = slots.findIndex((s) => normalizeForCompare(s.text) === normalizeForCompare(text));
  return idx === -1 ? null : idx;
}

/**
 * pakmcqs puts the wrong options in opA..opD, leaves the correct letter's slot
 * blank, and stores only the answer text in `correctOptionText`. When that
 * happens, rebuild a real question from distractors + answer.
 * "None of these" / "All of the above" style options are dropped once an
 * explicit answer is appended, because appending makes them logically false.
 */
const META_OPTION = /^(all|none|both|only)\b[\s\S]*\b(above|below|these|those|a|b|c|d|e)\b[.?]*$/i;

function stableSeed(text) {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** Deterministic shuffle so re-running the import produces identical pages. */
function shuffled(count, seed) {
  let state = seed || 1;
  const rand = () => {
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const out = Array.from({ length: count }, (_, i) => i);
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function appendMissingAnswer(slots, row, answerIdx) {
  if (answerIdx !== null) return { slots, answerIdx, rebuilt: false };
  const answerText = clean(row.correctoptiontext);
  if (!answerText || slots.length >= 5) return { slots, answerIdx: null, rebuilt: false };
  if (slots.some((s) => normalizeForCompare(s.text) === normalizeForCompare(answerText))) {
    return { slots, answerIdx: null, rebuilt: false };
  }

  const metaAnswer = META_OPTION.test(answerText);
  const distractors = metaAnswer ? slots : slots.filter((s) => !META_OPTION.test(s.text));
  if (distractors.length < 1) return { slots, answerIdx: null, rebuilt: false };

  const pool = [...distractors.map((s) => s.text), answerText];
  const order = shuffled(pool.length, stableSeed(`${answerText}|${distractors.map((d) => d.text).join('|')}`));
  const next = [];
  let answerIdx2 = null;
  order.forEach((pos, slot) => {
    next.push({ text: pool[pos], letter: String.fromCharCode(65 + slot) });
    if (pos === pool.length - 1) answerIdx2 = slot;
  });
  return { slots: next, answerIdx: answerIdx2, rebuilt: true };
}

const BLANK_RE = /_{3,}|\.{4,}/;

/**
 * Most compiled-export "explanations" are just the answer text repeated.
 * Turn the item into a declarative fact instead of shipping a non-answer.
 */
function synthesizeExplanation(question, answerText, topicName) {
  const blank = question.match(BLANK_RE);
  if (blank) {
    const statement = question.replace(BLANK_RE, ` ${answerText} `).replace(/\s+/g, ' ').replace(/\?+$/, '.').trim();
    return statement.endsWith('.') ? statement : `${statement}.`;
  }
  const stem = question.replace(/\?+$/, '').trim();
  if (/(^|\s)(is|are|was|were)\s*$/i.test(stem)) {
    return `${stem} ${answerText}.`;
  }
  return `${answerText} is the correct answer to “${stem}”. Items of this type are drawn from the ${topicName} syllabus of Pakistani competitive exams, where the fact is tested verbatim.`;
}

/* ------------------------------------------------------------------ *
 * 3b. Text repair
 * ------------------------------------------------------------------ */

/** AI-generated exports carry leftover citation scaffolding: "[citation:3]", "[source: 1]". */
const CITATION_MARKER = /\s*\[(?:citation|cite|source|reference|ref|fact|factcheck)[\s:]*\d*\]/gi;

export function sanitize(value) {
  if (!value) return value;
  return String(value)
    .replace(CITATION_MARKER, '')
    .replace(/\u00a0/g, ' ')
    .replace(/\s+([.,;:!?])/g, '$1')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

/**
 * Time-frozen items: "Current Governor Sindh is ___?" was only true on the day
 * it was compiled. These are the single largest block in the pakmcqs export and
 * the most likely to teach a wrong answer, so they are excluded by default
 * (override with --keep-current).
 */
const FROZEN_TITLE = /^(current|present|existing|latest)\b/i;
const FROZEN_TEXT = [
  /\b(current|present)\s+(of|for|in|at)\b/i,
  /\b(current|present)\b[^?]{0,45}\b(governor|chief minister|prime minister|president|minister|ministers|ambassador|high commissioner|chairman|chairwoman|secretary|chief justice|judge|rector|vice[- ]chancellor|ceo|cmo|inspector general|mayor|commander|chief|head|coach|captain|commissioner|director general|speaker|deputy|adviser|advisor|executive|presidents|governors)\b/i,
  /\bwho\s+(is|was)\s+(the\s+)?(current|present)\b/i,
  /\b(current|present)\s+(pm|cm|President|Governor|Chief)\b/i,
  /\bas\s+(on|of)\s+(the\s+)?(year\s+)?20\d\d\b/i,
  /\bupto\s+20\d\d\b/i,
  // Values that rotate with the calendar, so the stored answer is wrong today.
  /\b(current|present|this)\s+hijri\s+(year|sanne)\b/i,
  /\bhijri year (is|of)\b/i,
  // Future tense written before the event: the framing is stale even when the fact is not.
  /\b(is|are|was|were)\s+going to be\b/i,
  /\bwill be\s+(held|conducted|organised|organized|inaugurated|launched|completed|commissioned|released|declared|appointed)\b/i,
  /\b(upcoming|next)\s+(summit|election|session|tournament|census|launch|meet|conference)\b/i,
  // Open-ended "still in office" framing.
  /\bstill\s+(serves|holds|is heads|heads)\b/i,
  /\b(as|till)\s+(the\s+)?(date|today)\b.*\b(head|chair|minister|governor|president)\b/i,
];

export function isTimeFrozen(text, catHint = '') {
  const hay = String(text || '');
  if (FROZEN_TITLE.test(String(catHint || ''))) return true;
  return FROZEN_TEXT.some((re) => re.test(hay));
}

/**
 * Questions about the test scheme itself (MCQ count, passing marks, eligibility,
 * validity) go stale whenever the council revises the pattern, and this drop's
 * copies disagree with each other on the numbers. They are noise, not study
 * material, so they are excluded rather than imported with a warning.
 */
const VOLATILE_SCHEME = [
  /\b(how many|what is the total|total number of|number of)\b[^?]{0,60}\b(mcqs?|multiple[- ]choice|questions?|marks)\b/i,
  /\bmdcat\s*20\d\d\b/i,
  /\b(syllabus|paper|exam|test|section)\b[^?]{0,45}\bconsists? of\b[^?]{0,45}\b\d+/i,
  /\b(passing|qualifying|minimum)\s+(marks|score|percentage|aggregate)/i,
  /\beligibility criteria\b/i,
  /\bnegative marking\b[^?]{0,30}\b(is|of|equal)\b/i,
  /\b(validity|valid for)\b[^?]{0,40}\byears?\b/i,
  /\b(pmdc|pm&dc|pmc)\b[^?]{0,45}\b(revised|new|updated)\b/i,
];

export function isVolatileSchemeQuestion(text) {
  return VOLATILE_SCHEME.some((re) => re.test(text));
}

/* ------------------------------------------------------------------ *
 * 3c. Matching helpers
 * ------------------------------------------------------------------ */

const STOPWORDS = new Set(['the', 'a', 'an', 'of', 'in', 'on', 'to', 'for', 'is', 'are', 'was', 'were', 'be', 'been', 'by', 'with', 'and', 'or', 'what', 'which', 'who', 'whom', 'whose', 'when', 'where', 'why', 'how', 'does', 'do', 'did', 'has', 'have', 'had', 'it', 'its', 'this', 'that', 'these', 'those', 'there', 'their', 'they', 'he', 'she', 'we', 'you', 'i', 'as', 'at', 'from', 'into', 'about', 'after', 'before', 'between', 'under', 'over', 'not', 'no', 'nor', 'so', 'if', 'then', 'than', 'use', 'using', 'given', 'following', 'correct', 'correctly', 'identify', 'choose', 'select', 'find', 'value', 'term', 'means', 'called', 'known', 'question', 'one', 'ones', 'respectively', 'approximately', 'each', 'both', 'all', 'any', 'some', 'other', 'others', 'such', 'very', 'more', 'most', 'much', 'many', 'get', 'got', 'get', 'please', 'would', 'could', 'should', 'will', 'shall', 'can', 'may', 'might', 'must', 'number', 'letter', 'word', 'words', 'options', 'option', 'answer', 'statement', 'statements', 'according', 'regarding', 'related', 'among', 'own', 'per', 'vs', 'etc', 'eg', 'ie', 'namely', 'also', 'just', 'only', 'even', 'still', 'yet', 'until', 'while', 'within', 'without', 'through', 'during', 'against', 'toward', 'towards', 'upon', 'whom', 'either', 'neither', 'both', 'each', 'every', 'several', 'few', 'least', 'least']);

/**
 * A needle is matched as a whole word (with plural tolerance) when it is short,
 * and as a word-initial stem when it is long. Plain substring matching put
 * "u[sin]g" into trigonometry and "[tan]gent" into algebra, which is exactly how
 * a question bank becomes useless to browse.
 */
function compileNeedles(needles) {
  return needles.map((raw) => {
    const needle = raw.trim().toLowerCase();
    if (/[\s]/.test(needle)) return { phrase: needle };
    const escaped = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    if (needle.length <= 6) return { re: new RegExp(`\\b${escaped}(?:s|es)?\\b`, 'i') };
    return { re: new RegExp(`\\b${escaped}`, 'i') };
  });
}

const COMPILED_TOPICS = new Map(
  Object.entries(TOPIC_RULES).map(([subject, rules]) => [
    subject,
    rules.map(([slug, name, needles]) => [slug, name, compileNeedles(needles)]),
  ]),
);

function classify(subject, question, explanation, catHint) {
  const haystack = `${catHint} ${question} ${explanation}`;
  for (const [slug, name, needles] of COMPILED_TOPICS.get(subject) || []) {
    for (const needle of needles) {
      if (needle.re ? needle.re.test(haystack) : haystack.toLowerCase().includes(needle.phrase)) return [slug, name];
    }
  }
  return FALLBACK_TOPIC[subject] || ['general-misc', `${titleize(subject)} — Mixed Practice`];
}

/**
 * Signature for near-duplicate detection: content words only, sorted, so
 * "The area of a circle with radius 7 cm (π = 22/7) is:" and
 * "The area of a circle with radius 7 cm is (use π = 22/7):" collide.
 * Questions with fewer than 5 content words keep only the plain normalised text,
 * because "What is the capital of France?" and "...of China?" share a skeleton.
 */
function softSignature(question) {
  const words = normalizeForCompare(question).split(' ').filter((w) => w && !STOPWORDS.has(w) && !/^\d+$/.test(w));
  if (words.length < 5) return null;
  return [...new Set(words)].sort().join(' ');
}

/* ------------------------------------------------------------------ *
 * 4. Load + normalise one source file
 * ------------------------------------------------------------------ */

function loadSource(file) {
  const base = path.basename(file);
  const dirName = path.basename(path.dirname(file));
  const ext = path.extname(file).toLowerCase();
  if (ext !== '.csv') return [];

  let records;
  try {
    records = parseCsv(fs.readFileSync(file, 'utf8')).records;
  } catch (err) {
    console.warn(`   ⚠ skipped ${base}: ${err.message}`);
    return [];
  }

  const fromName = SUBJECT_BY_FILE.find(([re]) => re.test(base))?.[1];

  return records.map((raw) => {
    const row = foldRowKeys(raw);
    row.__line = raw.__line;
    const categoryKey = String(row.category || row.subject || '').toLowerCase().trim();
    const subject = fromName || SUBJECT_BY_CATEGORY[categoryKey] || null;
    const question = row.question;
    const baseSlots = readSlots(row);
    const direct = baseSlots.length >= 2 ? resolveAnswerIndex(baseSlots, row) : null;
    const built = direct === null ? appendMissingAnswer(baseSlots, row, direct) : { slots: baseSlots, answerIdx: direct, rebuilt: false };
    const slots = built.slots;
    const answerIdx = built.answerIdx;
    const rawExplanation = row.explanation ?? '';
    const answerText = answerIdx === null ? '' : slots[answerIdx].text;

    // "explanation" columns in compiled exports just repeat the answer.
    const realExplanation =
      rawExplanation && normalizeForCompare(rawExplanation) !== normalizeForCompare(answerText) && rawExplanation.length >= 30;

    const catHint = [row.cata, row.catb].filter((c) => c && !GENERIC_CAT_A.has(c.toLowerCase())).join(' ');

    return {
      file: path.join(dirName, base),
      subject,
      question,
      slots,
      answerIdx,
      explanation: realExplanation ? rawExplanation : '',
      synthesized: !realExplanation,
      catHint,
      difficulty: DIFFICULTY_BY_WORD[(row.difficulty ?? '').toLowerCase()] ?? '',
      tier: realExplanation ? TIER1 : TIER2,
      line: raw.__line,
    };
  });
}

/* ------------------------------------------------------------------ *
 * 5. Plan / write
 * ------------------------------------------------------------------ */

function liveQuestionKeys() {
  const keys = new Set();
  const soft = new Set();
  for (const file of listMarkdown(path.join(ROOT, 'src/content/mcqs'))) {
    const doc = tryReadMarkdown(file);
    if (!doc) continue;
    const subject = doc.data.subject || path.basename(path.dirname(file));
    for (const q of doc.data.questions || []) {
      keys.add(normalizeForCompare(q.question));
      const s = softSignature(q.question);
      if (s) soft.add(`${subject}|${s}`);
    }
  }
  return { keys, soft };
}

function modal(values, fallback) {
  const counts = new Map();
  for (const v of values) if (v) counts.set(v, (counts.get(v) || 0) + 1);
  let best = fallback;
  let bestCount = 0;
  for (const [value, count] of counts) {
    if (count > bestCount) {
      best = value;
      bestCount = count;
    }
  }
  return best;
}

export function buildPlan(argv) {
  const tiers = (argv.find((a) => a.startsWith('--tier='))?.split('=')[1] || '1,2')
    .split(',')
    .map((t) => (t.trim() === '1' ? TIER1 : TIER2));
  const numOpt = (name, fallback) => {
    const raw = argv.find((a) => a.startsWith(`--${name}=`))?.split('=')[1];
    return raw === undefined ? fallback : Number(raw);
  };
  const maxPerSet = numOpt('max-per-set', 40);
  const maxPerTopic = numOpt('max-per-topic', 0); // 0 = no cap
  const minOptions = numOpt('min-options', 2);
  const keepCurrent = argv.includes('--keep-current');

  const files = [];
  for (const entry of fs.readdirSync(SOURCES_DIR, { withFileTypes: true })) {
    const full = path.join(SOURCES_DIR, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'normalized') continue;
      for (const sub of fs.readdirSync(full)) if (/\.csv$/i.test(sub)) files.push(path.join(full, sub));
    } else if (/\.csv$/i.test(entry.name)) files.push(full);
  }
  files.sort();

  const { keys: live, soft: liveSoft } = liveQuestionKeys();
  const batch = new Set();
  const batchSoft = new Set();
  const groups = new Map();
  const stats = { rows: 0, rejected: 0, fewOptions: 0, frozen: 0, dupLive: 0, dupBatch: 0, nearDup: 0, volatile: 0, capped: 0, accepted: 0, byTier: {}, bySubject: {} };
  const rejects = [];

  for (const file of files) {
    for (const item of loadSource(file)) {
      stats.rows += 1;
      if (!item.subject) {
        stats.rejected += 1;
        rejects.push({ why: 'unmapped subject', file: item.file, text: item.question });
        continue;
      }
      if (!tiers.includes(item.tier)) continue;
      if (!item.question || item.answerIdx === null) {
        stats.rejected += 1;
        rejects.push({ why: 'unresolvable answer', file: item.file, text: item.question });
        continue;
      }
      if (item.slots.length < minOptions) {
        stats.fewOptions += 1;
        continue;
      }
      if (!keepCurrent && isTimeFrozen(item.question, item.catHint)) {
        stats.frozen += 1;
        continue;
      }

      const key = normalizeForCompare(item.question);
      if (live.has(key)) {
        stats.dupLive += 1;
        continue;
      }
      if (batch.has(key)) {
        stats.dupBatch += 1;
        continue;
      }

      if (isVolatileSchemeQuestion(item.question)) {
        stats.volatile += 1;
        continue;
      }

      const soft = softSignature(item.question);
      const softKey = soft ? `${item.subject}|${soft}` : null;
      if (softKey && (liveSoft.has(softKey) || batchSoft.has(softKey))) {
        stats.nearDup += 1;
        continue;
      }

      batch.add(key);
      if (softKey) batchSoft.add(softKey);
      stats.accepted += 1;
      stats.byTier[item.tier] = (stats.byTier[item.tier] || 0) + 1;
      stats.bySubject[item.subject] = (stats.bySubject[item.subject] || 0) + 1;

      const [topicSlug, topicName] = classify(item.subject, item.question, item.explanation, item.catHint);
      const groupKey = `${item.subject}/${topicSlug}`;
      if (!groups.has(groupKey)) groups.set(groupKey, { subject: item.subject, topic: topicSlug, topicName, items: [] });
      groups.get(groupKey).items.push(item);
    }
  }

  // Split oversized topics into numbered pages so one page never holds 400 questions.
  const chunks = [];
  for (const group of groups.values()) {
    let groupItems = group.items;
    if (maxPerTopic > 0 && groupItems.length > maxPerTopic) {
      stats.capped += groupItems.length - maxPerTopic;
      groupItems = groupItems.slice(0, maxPerTopic);
    }
    const parts = [];
    for (let i = 0; i < groupItems.length; i += maxPerSet) parts.push(groupItems.slice(i, i + maxPerSet));
    parts.forEach((items, i) => {
      const partSlug = parts.length === 1 ? group.topic : `${group.topic}-part-${i + 1}`;
      const exams = SUBJECT_META[group.subject]?.exams ?? ['PPSC', 'FPSC', 'NTS'];
      const difficulty = modal(items.map((it) => it.difficulty), 'Exam-Level');
      // If the target page already exists, its hand-written title/topicName/
      // description must survive the merge — the importer prefers row values,
      // so we leave them blank instead of overwriting curated copy.
      const existingDoc = tryReadMarkdown(path.join(MCQS_DIR, group.subject, `${partSlug}.md`));
      const topicName = parts.length === 1
        ? group.topicName
        : `${group.topicName} — Part ${i + 1}`;
      chunks.push({
        subject: group.subject,
        topic: partSlug,
        topicName,
        // Concept labels must not read "Genetics — Part 2" on every question.
        baseTopicName: group.topicName,
        title: `${topicName}: ${items.length} MCQs with Explanations`,
        description: `${items.length} ${difficulty.toLowerCase()} ${group.topicName.toLowerCase()} MCQs with answers and explanations for ${exams.slice(0, 3).join(', ')} preparation.`,
        difficulty,
        exams,
        items,
        preserveMetadata: Boolean(existingDoc),
      });
    });
  }
  chunks.sort((a, b) => a.subject.localeCompare(b.subject) || a.topic.localeCompare(b.topic));
  stats.accepted -= stats.capped;
  return { chunks, stats, rejects, tiers, maxPerSet, maxPerTopic, minOptions, keepCurrent };
}

function toIntakeRows(chunk) {
  const meta = chunk.preserveMetadata
    ? { topicName: '', title: '', description: '' }
    : { topicName: chunk.topicName, title: chunk.title, description: chunk.description };
  return chunk.items.map((item) => {
    const answerText = item.slots[item.answerIdx].text;
    const explanation = item.explanation || synthesizeExplanation(item.question, answerText, chunk.topicName);
    const row = {
      subject: chunk.subject,
      topic: chunk.topic,
      difficulty: chunk.difficulty,
      targetExams: chunk.exams.join(';'),
      question: item.question,
      explanation,
      keyConcept: chunk.baseTopicName,
      answer: String(item.answerIdx + 1),
      ...meta,
    };
    item.slots.forEach((s, i) => {
      row[`option${i + 1}`] = s.text;
    });
    return row;
  });
}

const INTAKE_COLUMNS = ['subject', 'topic', 'topicName', 'title', 'description', 'question', 'option1', 'option2', 'option3', 'option4', 'option5', 'answer', 'explanation', 'keyConcept', 'difficulty', 'targetExams'];

export async function run(argv = process.argv.slice(2)) {
  const dryRun = argv.includes('--dry-run');
  const { chunks, stats, rejects, tiers, maxPerSet, maxPerTopic, minOptions, keepCurrent } = buildPlan(argv);

  console.log(`\n📥 Sources: ${stats.rows} raw rows`);
  console.log(`   tiers included: ${tiers.join(', ')} · cap per page: ${maxPerSet} questions · cap per topic: ${maxPerTopic || 'none'} · min options: ${minOptions} · time-frozen items: ${keepCurrent ? 'kept' : 'excluded'}`);
  console.log(
    `   accepted ${stats.accepted} · unusable ${stats.rejected} · too few options ${stats.fewOptions} · time-frozen ${stats.frozen}` +
      ` · already live ${stats.dupLive} · duplicate in drop ${stats.dupBatch} · near-duplicate ${stats.nearDup}` +
      ` · volatile scheme items ${stats.volatile} · trimmed by topic cap ${stats.capped}`,
  );

  if (rejects.length) {
    console.log(`\n   ⚠ ${rejects.length} unusable row(s), first few:`);
    rejects.slice(0, 8).forEach((r) => console.log(`      • ${r.why}: "${(r.text || '').slice(0, 70)}" (${r.file})`));
  }

  console.log('\n🗂 Plan by subject:');
  const bySubject = new Map();
  for (const c of chunks) {
    const rec = bySubject.get(c.subject) || { sets: 0, q: 0 };
    rec.sets += 1;
    rec.q += c.items.length;
    bySubject.set(c.subject, rec);
  }
  for (const [subject, rec] of [...bySubject.entries()].sort((a, b) => b[1].q - a[1].q)) {
    console.log(`   ${String(rec.q).padStart(5)} Q → ${String(rec.sets).padStart(3)} page(s)   ${SUBJECT_META[subject]?.label ?? titleize(subject)}`);
  }
  console.log(`\n   TOTAL ${chunks.reduce((n, c) => n + c.items.length, 0)} questions across ${chunks.length} page(s)`);

  if (dryRun) {
    console.log('\n🔎 Dry run — nothing written.\n');
    return { ok: true, chunks: chunks.length, dryRun: true };
  }

  const rows = chunks.flatMap(toIntakeRows);
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const stamp = new Date().toISOString().slice(0, 10);
  const outName = `expand-mcqs-${tiers.join('-')}-${stamp}.csv`;
  const outFile = path.join(OUT_DIR, outName);
  fs.writeFileSync(outFile, stringifyCsv(rows, INTAKE_COLUMNS), 'utf-8');
  console.log(`\n📝 Normalised intake written: ${path.relative(ROOT, outFile)} (${rows.length} rows)`);

  console.log('\n🚀 Running the standard merge import…\n');
  const extra = argv.filter((a) => a.startsWith('--no-subject'));
  return mcqImport.run([outFile, ...extra]);
}

export function usage() {
  return `
ExamHub.pk — bulk MCQ expansion from "MCQs csv files/"

  node scripts/expand-mcqs.js [options]     (also: npm run cms:expand -- --dry-run)

  --dry-run           Plan only: report subjects, pages and rejects, write nothing
  --tier=1,2          1 = exports carrying real explanations
                      2 = compiled exports (answer text only; rationales are written
                          from the answer, and hidden options are rebuilt)
  --max-per-set=N     Questions per generated page (default 40)
  --max-per-topic=N   Hard cap per topic across all its pages (default 0 = no cap)
  --min-options=N     Reject items with fewer than N answer options (default 2)
  --keep-current      Keep time-frozen "Current Governor/Minister" items (off by default)
  --no-subject        Pass through: do not create/update subject pages

Excluded automatically: unusable rows, exact duplicates, near-duplicate question
wording, "current office holder" items whose answer was only true when scraped,
and questions about the exam scheme itself (MCQ counts, passing marks).

The normalised intake CSV is written to "MCQs csv files/normalized/" and then fed
to the standard merge importer, so nothing already on disk is overwritten.
`;
}

export const meta = { name: 'expand', description: 'Normalise and import the CSVs in "MCQs csv files/"', usage, run };

const invokedDirectly = process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url));
if (invokedDirectly) {
  run().catch((error) => {
    console.error(`\n❌ ${error.message}\n`);
    if (process.env.CMS_DEBUG) console.error(error.stack);
    process.exitCode = 1;
  });
}
