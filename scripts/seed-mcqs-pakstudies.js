import { writeMcqFile } from './mcq-helper.js';

// Set 1: Pakistan Studies - Geography & Borders
writeMcqFile({
  subject: 'pakistan-studies',
  subjectName: 'Pakistan Studies',
  topic: 'geography',
  topicName: 'Geography, Borders & Mountain Passes',
  title: 'Pakistan Geography, Borders & Mountain Passes MCQs with Explanations',
  description: 'Master Pakistan geography MCQs for CSS, PMS, PPSC, and FPSC. Deep conceptual explanations on Durand Line, Radcliffe Line, K2, Karakoram Highway, and strategic passes.',
  targetExams: ['CSS', 'PMS', 'PPSC', 'FPSC', 'NTS'],
  editorialContent: `
## In-Depth Academic Study Notes: Pakistan Geography & Strategic Frontiers

Understanding Pakistan's geographic positioning is foundational for any serious competitive examination candidate. Pakistan spans between latitudes 23°35' to 37°05' North and longitudes 60°50' to 77°50' East, forming the geopolitical fulcrum connecting South Asia, the Middle East, and Central Asia.

### The Frontiers of Pakistan
1. **The Durand Line (Western Border):** Delineated in 1893 between Sir Mortimer Durand (Foreign Secretary of British India) and Amir Abdur Rahman Khan of Afghanistan. It spans approximately 2,640 km across rugged mountainous terrain. Key crossing points include Torkham (via Khyber Pass) and Chaman (linking Balochistan with Kandahar).
2. **The Radcliffe Line & LoC (Eastern Border):** Demarcated in August 1947 by Sir Cyril Radcliffe under the Punjab and Bengal Boundary Commissions. The international border stretches over 2,900 km, while the Line of Control (LoC) in Jammu and Kashmir (established post-1971 Simla Agreement, superseding the 1949 Karachi Ceasefire Line) runs for approximately 740 km.
3. **The Sino-Pakistan Border (Northern Frontier):** Settled peacefully through the bilateral Border Agreement of March 2, 1963. The border spans roughly 596 km through the Karakoram range, housing the Khunjerab Pass at 4,693 meters (15,397 ft).
4. **The Iran-Pakistan Border (South-Western Frontier):** Delineated through mutual commissions between 1871 and 1958, spanning approximately 909 km from Koh-i-Malik Siah to the Arabian Sea at Gwadar Bay.

### Mountain Systems & Altitudes
- **Karakoram Range:** Houses K2 (Godwin-Austen) at 8,611 meters (28,251 ft), the second-highest peak on Earth, alongside four other 8,000-meter giants (Gasherbrum I, Broad Peak, Gasherbrum II).
- **Himalayas (Western Anchor):** Anchored by Nanga Parbat (8,126 meters), nicknamed the 'Killer Mountain'.
- **Hindu Kush Range:** Anchored by Tirich Mir (7,708 meters) in Chitral district.
`,
  questions: [
    {
      id: 1,
      question: "The Durand Line, which demarcates the international boundary between Pakistan and Afghanistan, was formally agreed upon in which year?",
      options: ["1885", "1893", "1905", "1919"],
      answer: 1,
      explanation: "The Durand Line agreement was signed on November 12, 1893, between Sir Mortimer Durand, Foreign Secretary of the British Indian government, and Afghan Amir Abdur Rahman Khan in Kabul. It spans approximately 2,640 km.",
      keyConcept: "Frontier demarcation and British-Russian 'Great Game' buffer state diplomacy.",
      examTip: "Often confused with the Radcliffe Line (1947) and McMahon Line (1914 between British India and Tibet).",
      testedIn: ["PPSC Tehsildar 2021", "FPSC Custom Inspector 2023"]
    },
    {
      id: 2,
      question: "Which strategic mountain pass connects Peshawar in Pakistan with Jalalabad and Kabul in Afghanistan?",
      options: ["Bolan Pass", "Khyber Pass", "Khojak Pass", "Gomal Pass"],
      answer: 1,
      explanation: "The historic Khyber Pass traverses the Spin Ghar mountains connecting Landi Kotal in Pakistan's Khyber District to the valley of Jalalabad in Afghanistan. It reaches an elevation of 1,070 meters (3,510 ft).",
      keyConcept: "Historical invasion routes into South Asia across the northwestern frontier.",
      examTip: "Bolan Pass connects Sibi to Quetta; Khojak Pass connects Quetta to Chaman/Kandahar.",
      testedIn: ["CSS MPT 2022", "PPSC Sub-Inspector 2024"]
    },
    {
      id: 3,
      question: "K2, the world's second-highest mountain peak (8,611 meters), is situated in which mountain range?",
      options: ["Himalayas", "Hindu Kush", "Karakoram", "Sulaiman"],
      answer: 2,
      explanation: "K2 (also known as Mount Godwin-Austen or Chhogori) is located in the Karakoram range on the border between Gilgit-Baltistan (Pakistan) and Xinjiang (China). It was first summited in 1954 by an Italian expedition.",
      keyConcept: "Orographic classification of northern Pakistan mountain ranges.",
      examTip: "Remember that Nanga Parbat lies in the Himalayas, whereas K2 is in the Karakoram.",
      testedIn: ["FPSC AD FIA 2022", "PPSC PMS GK 2020"]
    },
    {
      id: 4,
      question: "The Khunjerab Pass, which accommodates the Karakoram Highway connecting Pakistan with China, is situated at an approximate elevation of:",
      options: ["3,120 meters", "3,850 meters", "4,693 meters", "5,420 meters"],
      answer: 2,
      explanation: "The Khunjerab Pass sits at an elevation of 4,693 meters (15,397 feet) above sea level in the Karakoram range. It is the highest paved international border crossing in the world.",
      keyConcept: "Sino-Pakistan connectivity and strategic geographic milestones.",
      examTip: "Memorize both meters (4,693 m) and feet (~15,397 ft) as examiners switch units.",
      testedIn: ["PPSC Lecturer 2022", "NTS NAT 2023"]
    },
    {
      id: 5,
      question: "Which mountain pass connects the district of Chitral with Gilgit across the Shandur Plateau?",
      options: ["Shandur Pass", "Lowari Pass", "Babusar Pass", "Dargai Pass"],
      answer: 0,
      explanation: "The Shandur Pass (approx. 3,700 meters) links Chitral with Gilgit and is world-famous for the annual Shandur Polo Festival held on the plateau since 1936.",
      keyConcept: "Inter-valley passes in northern Khyber Pakhtunkhwa and Gilgit-Baltistan.",
      examTip: "Lowari Pass connects Dir with Chitral (now bypassed by the Lowari Tunnel).",
      testedIn: ["KPPSC PMS 2021", "FPSC Inspector 2024"]
    },
    {
      id: 6,
      question: "What is the total length of Pakistan's maritime coastline along the Arabian Sea?",
      options: ["750 km", "890 km", "1,046 km", "1,250 km"],
      answer: 2,
      explanation: "Pakistan's total coastline measures approximately 1,046 km (650 miles), with roughly 770 km belonging to Balochistan (Makran Coast) and 276 km situated in Sindh (Indus Delta region).",
      keyConcept: "Maritime geography, Exclusive Economic Zone (EEZ), and continental shelf.",
      examTip: "Pakistan's EEZ extends 200 nautical miles, plus a 150 nautical mile extended continental shelf granted by the UN in 2015.",
      testedIn: ["CSS MPT 2023", "PPSC Naib Tehsildar 2022"]
    },
    {
      id: 7,
      question: "The historic border agreement between Pakistan and the People's Republic of China was signed in which year?",
      options: ["1959", "1962", "1963", "1965"],
      answer: 2,
      explanation: "The Sino-Pakistan Boundary Agreement was officially signed on March 2, 1963, in Beijing by Foreign Minister Zulfikar Ali Bhutto of Pakistan and Chen Yi of China, resolving border ambiguities in northern Kashmir.",
      keyConcept: "Cold War diplomatic alignments and Pakistan-China bilateral foundations.",
      examTip: "Signed right after the 1962 Sino-Indian War, fundamentally altering South Asian geopolitics.",
      testedIn: ["PPSC Assistant 2023", "FPSC Screening 2022"]
    },
    {
      id: 8,
      question: "Which of the following mountain ranges separates Balochistan from the Sindh province?",
      options: ["Kirthar Range", "Sulaiman Range", "Salt Range", "Chagai Hills"],
      answer: 0,
      explanation: "The Kirthar Mountains form a continuous natural geographic boundary between the Sindh plain on the east and the Balochistan plateau on the west, reaching maximum heights around Gorakh Hill (1,734 m).",
      keyConcept: "Internal physiographic barriers and provincial boundaries in Pakistan.",
      examTip: "Gorakh Hill Station in Dadu district (Sindh) is located in the Kirthar Range.",
      testedIn: ["SPSC CCE 2021", "PPSC Tehsildar 2022"]
    },
    {
      id: 9,
      question: "The Siachen Glacier, known as the world's highest battlefield, is situated in which region?",
      options: ["Western Himalayas", "Eastern Karakoram", "Central Hindu Kush", "Pir Panjal Range"],
      answer: 1,
      explanation: "The Siachen Glacier is located in the eastern Karakoram range in the Himalayas, just northeast of Point NJ9842. Spanning approximately 76 km, it is the second-longest non-polar glacier in the world.",
      keyConcept: "Geopolitical conflict geography and glacier hydrology.",
      examTip: "Biafo, Baltoro, and Batura are other massive glaciers in the Karakoram range.",
      testedIn: ["CSS Current Affairs 2022", "FPSC Inspector 2023"]
    },
    {
      id: 10,
      question: "Babusar Pass connects the Kaghan Valley of Khyber Pakhtunkhwa with which northern region?",
      options: ["Skardu", "Chilas (Gilgit-Baltistan)", "Hunza Valley", "Swat Valley"],
      answer: 1,
      explanation: "Babusar Pass (4,173 meters) connects Khyber Pakhtunkhwa's Kaghan Valley via Naran with Chilas in Gilgit-Baltistan, opening onto the Karakoram Highway during summer months.",
      keyConcept: "Seasonal passes and tourist transit corridors in northern Pakistan.",
      examTip: "Closed in winter due to heavy snow; Malakand Pass connects Mardan with Swat.",
      testedIn: ["PPSC PMS GK 2022", "NTS GAT 2023"]
    }
  ]
});

// Set 2: Pakistan Studies - Constitutional History
writeMcqFile({
  subject: 'pakistan-studies',
  topic: 'constitution',
  topicName: 'Constitutional History & 1973 Constitution',
  title: 'Pakistan Constitutional History & 1973 Constitution MCQs with Explanations',
  description: 'Master MCQs on Objectives Resolution 1949, 1956, 1962, and 1973 Constitutions. In-depth explanations covering 18th Amendment, Senate, Article 6, and NFC Awards.',
  targetExams: ['CSS', 'PMS', 'PPSC', 'FPSC', 'NTS'],
  editorialContent: `
## Constitutional Evolution of the Islamic Republic of Pakistan

Constitutional history is one of the most frequently tested areas in CSS, PMS, and PPSC exams. Pakistan has experienced four major constitutional documents:

1. **The Government of India Act 1935 (Adapted):** Served as the working interim constitution from 1947 until 1956 under the Indian Independence Act 1947.
2. **The Objectives Resolution (Passed March 12, 1949):** Moved by Prime Minister Liaquat Ali Khan. It established that sovereignty over the entire universe belongs to Allah Almighty alone, and the authority to be exercised by the people of Pakistan within the limits prescribed by Him is a sacred trust. It was made an substantive part of the 1973 Constitution via Article 2A in 1985.
3. **The 1956 Constitution:** Enacted on March 23, 1956, introducing a parliamentary system with a unicameral legislature (National Assembly of 300 seats based on the 'Principle of Parity' between East and West Pakistan). Abrogated on October 7, 1958, by President Iskander Mirza.
4. **The 1962 Constitution:** Promulgated on June 8, 1962, by Field Marshal Ayub Khan. Introduced a presidential system with indirect elections through 80,000 Basic Democrats.
5. **The 1973 Constitution:** Passed unanimously by the National Assembly on April 10, 1973, authenticated on April 12, and enforced on August 14, 1973. Re-established a bicameral federal parliamentary system.
`,
  questions: [
    {
      id: 1,
      question: "On which date was the historic Objectives Resolution adopted by the First Constituent Assembly of Pakistan?",
      options: ["August 14, 1947", "March 12, 1949", "October 16, 1951", "March 23, 1956"],
      answer: 1,
      explanation: "Prime Minister Liaquat Ali Khan introduced the Objectives Resolution on March 7, 1949, and it was adopted on March 12, 1949. It laid the foundational moral and constitutional philosophy for all subsequent constitutions.",
      keyConcept: "Sovereignty of Allah and democratic trusteeship in Pakistani constitutionalism.",
      examTip: "Later incorporated as a preamble, and made an operative part of the 1973 Constitution via Article 2A (8th Amendment 1985).",
      testedIn: ["PPSC Tehsildar 2021", "CSS MPT 2022"]
    },
    {
      id: 2,
      question: "Which constitution of Pakistan introduced a bicameral federal legislature comprising the National Assembly and the Senate?",
      options: ["Government of India Act 1935", "1956 Constitution", "1962 Constitution", "1973 Constitution"],
      answer: 3,
      explanation: "Both the 1956 and 1962 constitutions provided for a unicameral legislature. The 1973 Constitution introduced a bicameral parliament (Majlis-e-Shoora), consisting of the National Assembly (lower house based on population) and the Senate (upper house ensuring equal provincial representation).",
      keyConcept: "Bicameralism and federal balance among provinces.",
      examTip: "The 1956 and 1962 assemblies had no Senate at all.",
      testedIn: ["FPSC AD FIA 2023", "PPSC Lecturer 2022"]
    },
    {
      id: 3,
      question: "Article 6 of the 1973 Constitution of Pakistan deals with which constitutional offense?",
      options: ["Contempt of Court", "High Treason", "Disqualification of Members", "Fundamental Rights Suspension"],
      answer: 1,
      explanation: "Article 6 defines High Treason: Any person who abrogates or subverts or suspends or holds in abeyance, or attempts or conspires to abrogate, subvert, suspend or hold in abeyance, the Constitution by use of force or show of force or by any other unconstitutional means shall be guilty of high treason.",
      keyConcept: "Constitutional sanctity and prevention of military coups.",
      examTip: "High Treason punishment is specified under the High Treason (Punishment) Act, 1973.",
      testedIn: ["PPSC Sub-Inspector 2023", "CSS Pakistan Affairs 2021"]
    },
    {
      id: 4,
      question: "The historic 18th Constitutional Amendment was enacted in which year, devolving significant powers to the provinces?",
      options: ["2008", "2010", "2013", "2018"],
      answer: 1,
      explanation: "The 18th Constitutional Amendment Act was signed into law by President Asif Ali Zardari on April 19, 2010. It abolished the Concurrent Legislative List, devolving 17 federal ministries to the provinces and removing Article 58(2)(b).",
      keyConcept: "Fiscal federalism, provincial autonomy, and parliamentary sovereignty.",
      examTip: "Do not confuse with the 25th Amendment (2018), which merged FATA into KP.",
      testedIn: ["CSS MPT 2023", "PPSC Assistant 2022"]
    },
    {
      id: 5,
      question: "Under the 1973 Constitution, what is the minimum age required for a citizen to contest the office of the President of Pakistan?",
      options: ["35 Years", "40 Years", "45 Years", "50 Years"],
      answer: 2,
      explanation: "Under Article 41(2) of the Constitution, a person is not qualified for election as President unless he is a Muslim and is not less than forty-five (45) years of age and is qualified to be elected as a member of the National Assembly.",
      keyConcept: "Qualifications for executive constitutional offices.",
      examTip: "Minimum age for Prime Minister and National Assembly MNA is 25 years; for Senate Senator is 30 years; for President is 45 years.",
      testedIn: ["FPSC Inspector 2022", "NTS GAT 2023"]
    },
    {
      id: 6,
      question: "Which constitutional amendment merged the Federally Administered Tribal Areas (FATA) with Khyber Pakhtunkhwa province?",
      options: ["21st Amendment", "23rd Amendment", "24th Amendment", "25th Amendment"],
      answer: 3,
      explanation: "The 25th Constitutional Amendment (passed in May 2018) abolished the Frontier Crimes Regulation (FCR) and formally integrated the seven tribal agencies of FATA into Khyber Pakhtunkhwa.",
      keyConcept: "Territorial integration and extension of constitutional fundamental rights.",
      examTip: "The 21st Amendment created military courts; 25th Amendment executed the FATA-KP merger.",
      testedIn: ["PPSC PMS GK 2021", "CSS Current Affairs 2022"]
    },
    {
      id: 7,
      question: "Article 25A of the 1973 Constitution guarantees which fundamental right to Pakistani citizens?",
      options: ["Right to Fair Trial", "Right to Information", "Right to Free and Compulsory Education (ages 5-16)", "Protection against Double Jeopardy"],
      answer: 2,
      explanation: "Inserted via the 18th Amendment in 2010, Article 25A mandates: 'The State shall provide free and compulsory education to all children of the age of five to sixteen years in such manner as may be determined by law.'",
      keyConcept: "Socioeconomic fundamental rights in Part II Chapter 1 of the Constitution.",
      examTip: "Article 10A guarantees Right to Fair Trial; Article 19A guarantees Right to Information.",
      testedIn: ["PPSC Lecturer 2023", "FPSC Screening 2024"]
    },
    {
      id: 8,
      question: "The National Finance Commission (NFC) Award is constituted under which Article of the 1973 Constitution to distribute revenue between the federation and provinces?",
      options: ["Article 140A", "Article 153", "Article 160", "Article 213"],
      answer: 2,
      explanation: "Article 160 of the Constitution provides for the constitution of the National Finance Commission by the President every five years to formulate recommendations on revenue sharing from the Federal Divisible Pool.",
      keyConcept: "Fiscal federalism and horizontal/vertical resource distribution.",
      examTip: "The 7th NFC Award (2010) introduced multiple distribution criteria: Population (82%), Poverty (10.3%), Revenue collection (5%), and Inverse population density (2.7%).",
      testedIn: ["CSS Pakistan Affairs 2022", "PPSC Tehsildar 2022"]
    },
    {
      id: 9,
      question: "How many members constitute the Council of Common Interests (CCI) under Article 153 of the Constitution?",
      options: ["6 Members", "8 Members", "10 Members", "12 Members"],
      answer: 1,
      explanation: "The Council of Common Interests (CCI) consists of 8 members: The Prime Minister (Chairman), the four Provincial Chief Ministers, and three members nominated by the Prime Minister from the Federal Government.",
      keyConcept: "Inter-provincial dispute resolution mechanisms.",
      examTip: "CCI must meet at least once every 90 days as mandated by the 18th Amendment.",
      testedIn: ["PPSC Assistant 2024", "FPSC Inspector Customs 2023"]
    },
    {
      id: 10,
      question: "Under the 1973 Constitution, what proportion of Senate members retire every three years after completing their six-year term?",
      options: ["One-fourth (25%)", "One-third (33%)", "One-half (50%)", "Two-thirds (66%)"],
      answer: 2,
      explanation: "The Senate is a permanent legislative body not subject to dissolution. Senators serve six-year terms, with one-half (50%) retiring every three years, ensuring institutional continuity.",
      keyConcept: "Legislative continuity and staggered senatorial election cycles.",
      examTip: "National Assembly is subject to dissolution; Senate cannot be dissolved under any circumstance.",
      testedIn: ["PPSC Sub-Inspector 2023", "CSS MPT 2024"]
    }
  ]
});

// Set 3: Pakistan Studies - Freedom Movement (1857-1947)
writeMcqFile({
  subject: 'pakistan-studies',
  topic: 'freedom-movement',
  topicName: 'Freedom Movement (1857–1947)',
  title: 'Pakistan Freedom Movement (1857–1947) MCQs with Explanations',
  description: 'In-depth MCQs covering the Pakistan Movement. Detailed analysis of Sir Syed, All-India Muslim League, Lucknow Pact, Simon Commission, 1940 Lahore Resolution, and Partition.',
  targetExams: ['CSS', 'PMS', 'PPSC', 'FPSC', 'NTS'],
  editorialContent: `
## The Chronology of the Pakistan Freedom Movement

The Pakistan Movement represents the political, intellectual, and constitutional struggle of the Muslims of South Asia for sovereign self-determination.

### Pivotal Milestones
- **The Aligarh Movement (Post-1857):** Founded by Sir Syed Ahmad Khan to foster modern Western scientific education among Muslims, culminating in the establishment of the MAO College (1875) and Muhammadan Educational Conference (1886).
- **Partition of Bengal (1905) & Simla Deputation (1906):** Following the administrative division of Bengal by Lord Curzon, Muslim leaders led by Sir Aga Khan met Viceroy Lord Minto on October 1, 1906, securing acceptance of Separate Electorates.
- **Foundation of All-India Muslim League (December 30, 1906):** Founded at Dhaka during the 20th session of the All-India Muhammadan Educational Conference, chaired by Nawab Viqar-ul-Mulk. Nawab Salimullah Khan proposed the formation.
- **Lucknow Pact (1916):** Brokered largely through the efforts of Muhammad Ali Jinnah, earning him the title 'Ambassador of Hindu-Muslim Unity' from Sarojini Naidu. Congress officially conceded Separate Electorates.
- **Nehru Report (1928) vs. Quaid's Fourteen Points (1929):** The Nehru Report repudiated separate electorates and federal autonomy, prompting Quaid-e-Azam's historic Fourteen Points articulating the minimum constitutional safeguards for Muslims.
- **Lahore Resolution (March 23, 1940):** Moved by A.K. Fazlul Huq (Sher-e-Bengal) at the 27th annual session of the Muslim League in Minto Park, Lahore.
`,
  questions: [
    {
      id: 1,
      question: "The All-India Muslim League was officially founded on December 30, 1906, in which historical city?",
      options: ["Lucknow", "Aligarh", "Dhaka", "Calcutta"],
      answer: 2,
      explanation: "The All-India Muslim League was established at the Ahsan Manzil palace in Dhaka on December 30, 1906, hosted by Nawab Salimullah Khan and presided over by Nawab Viqar-ul-Mulk.",
      keyConcept: "Institutional birth of Muslim political representation in South Asia.",
      examTip: "First permanent President was Sir Aga Khan III, who served until 1913.",
      testedIn: ["PPSC Tehsildar 2021", "FPSC Custom Inspector 2022"]
    },
    {
      id: 2,
      question: "Who authored the famous political pamphlet 'Now or Never: Are We to Live or Perish for Ever?' in 1933, coining the word 'PAKISTAN'?",
      options: ["Allama Muhammad Iqbal", "Chaudhry Rehmat Ali", "Sir Syed Ahmad Khan", "Liaquat Ali Khan"],
      answer: 1,
      explanation: "Chaudhry Rehmat Ali, a Cambridge student, published 'Now or Never' on January 28, 1933. The acronym PAKISTAN stood for Punjab, Afghania (NWFP), Kashmir, Sindh, and Baluchistan.",
      keyConcept: "Etymology and political conceptualization of the Pakistan ideal.",
      examTip: "Often confused with Allama Iqbal's Allahabad Address (1930), which articulated the philosophical need for a Muslim state but did not use the acronym.",
      testedIn: ["CSS MPT 2022", "PPSC Lecturer 2023"]
    },
    {
      id: 3,
      question: "Who moved the historic Lahore Resolution (later known as the Pakistan Resolution) on March 23, 1940?",
      options: ["Quaid-e-Azam Muhammad Ali Jinnah", "A.K. Fazlul Huq", "Chaudhry Khaliquzzaman", "Liaquat Ali Khan"],
      answer: 1,
      explanation: "Abul Kashem Fazlul Huq, known as 'Sher-e-Bengal' (The Tiger of Bengal) and Premier of Bengal, formally moved the resolution at the 27th session of the All-India Muslim League at Minto Park, Lahore.",
      keyConcept: "The formal constitutional declaration for an independent sovereign Muslim homeland.",
      examTip: "Seconded from UP by Chaudhry Khaliquzzaman, from Punjab by Maulana Zafar Ali Khan, from Sindh by Sir Abdullah Haroon, and from Balochistan by Qazi Muhammad Isa.",
      testedIn: ["PPSC PMS GK 2020", "FPSC AD FIA 2023"]
    },
    {
      id: 4,
      question: "In which year did Sir Syed Ahmad Khan establish the Muhammadan Anglo-Oriental (MAO) High School at Aligarh, which became a college in 1877?",
      options: ["1867", "1875", "1885", "1898"],
      answer: 1,
      explanation: "Sir Syed established the school on May 24, 1875 (Queen Victoria's birthday). It was elevated to college status in 1877 (inaugurated by Viceroy Lord Lytton) and became Aligarh Muslim University in 1920.",
      keyConcept: "The Aligarh educational renaissance.",
      examTip: "Sir Syed founded the Scientific Society earlier in Ghazipur in 1864.",
      testedIn: ["PPSC Sub-Inspector 2022", "NTS NAT 2023"]
    },
    {
      id: 5,
      question: "Under the Lucknow Pact of 1916, which major political concession did the Indian National Congress make to the All-India Muslim League?",
      options: ["Complete Independence", "Acceptance of Separate Electorates for Muslims", "Reservation of 50% seats in Central Assembly", "Abolition of Partition of Bengal"],
      answer: 1,
      explanation: "The Lucknow Pact (1916) marked the only constitutional pact brokered directly between the Congress and the Muslim League. Congress formally recognized the principle of Separate Electorates for Muslims.",
      keyConcept: "Constitutional diplomacy and cross-communal consensus.",
      examTip: "Quaid-e-Azam was the primary architect; Sarojini Naidu designated him the 'Ambassador of Hindu-Muslim Unity'.",
      testedIn: ["CSS Pakistan Affairs 2021", "PPSC Assistant 2023"]
    },
    {
      id: 6,
      question: "The famous Simon Commission arrived in British India in 1928 to examine constitutional reforms. Why was it boycotted by major Indian political parties?",
      options: ["It proposed partitioning Punjab", "It contained no Indian members (all-white commission)", "It rejected provincial autonomy", "It recommended abolishing the army"],
      answer: 1,
      explanation: "Appointed in November 1927 under Sir John Simon, all seven members were British parliamentarians with zero Indian representation. Both Congress and the Jinnah faction of the Muslim League boycotted it.",
      keyConcept: "Demand for Indian self-determination and constitutional drafting.",
      examTip: "Led directly to the All-Parties Conference and drafting of the Motilal Nehru Report (1928).",
      testedIn: ["PPSC Tehsildar 2022", "FPSC Inspector 2024"]
    },
    {
      id: 7,
      question: "Quaid-e-Azam Muhammad Ali Jinnah presented his famous 'Fourteen Points' in Delhi in March 1929 primarily in response to which document?",
      options: ["Simon Commission Report", "Nehru Report", "Rowlatt Act", "Montagu-Chelmsford Reforms"],
      answer: 1,
      explanation: "The Motilal Nehru Report of August 1928 rejected separate electorates and recommended a unitary central government. In response, Quaid-e-Azam declared it 'the parting of the ways' and formulated his Fourteen Points in March 1929.",
      keyConcept: "Constitutional defense of Muslim political autonomy and safeguards.",
      examTip: "Key demands included 1/3 Muslim representation in Central Legislature and separation of Sindh from Bombay.",
      testedIn: ["CSS MPT 2023", "PPSC Lecturer 2021"]
    },
    {
      id: 8,
      question: "During which historic annual session of the All-India Muslim League did Allama Muhammad Iqbal deliver his visionary presidential address proposing a separate Muslim state in the northwest?",
      options: ["1928 Calcutta Session", "1930 Allahabad Session", "1940 Lahore Session", "1937 Lucknow Session"],
      answer: 1,
      explanation: "On December 29, 1930, at the 21st annual session of the Muslim League in Allahabad, Allama Iqbal stated: 'I would like to see the Punjab, North-West Frontier Province, Sind and Baluchistan amalgamated into a single State.'",
      keyConcept: "Philosophical foundation of the Two-Nation Theory.",
      examTip: "Recognized as the intellectual blueprint that was later translated into political reality at Lahore in 1940.",
      testedIn: ["PPSC PMS GK 2022", "FPSC Screening 2023"]
    },
    {
      id: 9,
      question: "The Cripps Mission arrived in India in March 1942 amidst World War II, led by Sir Stafford Cripps. Why was its draft declaration rejected by the Muslim League?",
      options: ["It did not offer dominion status", "It did not provide clear and unequivocal recognition of Pakistan", "It postponed elections indefinitely", "It proposed dividing Bengal immediately"],
      answer: 1,
      explanation: "The Muslim League rejected the Cripps proposals on April 11, 1942, because while the declaration allowed provinces the right to secede from the proposed Indian Union, it treated the creation of Pakistan as an indirect possibility rather than an explicit commitment.",
      keyConcept: "Wartime diplomacy and constitutional negotiations leading to partition.",
      examTip: "Mahatma Gandhi described the Cripps proposal as a 'post-dated cheque on a crashing bank'.",
      testedIn: ["CSS Pakistan Affairs 2023", "PPSC Assistant 2022"]
    },
    {
      id: 10,
      question: "The formal plan for the partition of British India into two sovereign dominions was announced by Lord Mountbatten on which date?",
      options: ["23 March 1947", "3 June 1947", "18 July 1947", "14 August 1947"],
      answer: 1,
      explanation: "The 3rd June Plan (Mountbatten Plan) was announced on June 3, 1947, outlining the partition of British India and the provincial assemblies of Punjab and Bengal voting on partition. It was enacted as the Indian Independence Act on July 18, 1947.",
      keyConcept: "Transfer of power and statutory establishment of Pakistan and India.",
      examTip: "Indian Independence Act received Royal Assent on July 18, 1947.",
      testedIn: ["PPSC Tehsildar 2021", "FPSC Custom Inspector 2024"]
    }
  ]
});

console.log('Finished writing Pakistan Studies MCQ sets!');
