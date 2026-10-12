import { writeMcqFile } from './mcq-helper.js';

// Pak Studies 4: Rivers, Dams & Water Barrages
writeMcqFile({
  subject: 'pakistan-studies',
  topic: 'rivers-and-dams',
  topicName: 'Rivers, Dams & Water Barrages',
  title: 'Pakistan Rivers, Dams & Barrages MCQs with Explanations',
  description: 'In-depth MCQs on Indus Waters Treaty 1960, Tarbela Dam, Mangla Dam, Diamer Bhasha, barrages, and canal irrigation system of Pakistan.',
  targetExams: ['CSS', 'PMS', 'PPSC', 'FPSC', 'NTS'],
  editorialContent: `
## Pakistan's Hydrological Network & Indus River Basin

The Indus River Basin forms the lifeblood of Pakistan's agricultural economy, supporting the largest contiguous gravity-fed canal irrigation network on Earth.

### The 1960 Indus Waters Treaty (IWT)
Signed on September 19, 1960, in Karachi between President Ayub Khan of Pakistan and Prime Minister Jawaharlal Nehru of India, mediated by the World Bank:
- **Eastern Rivers Allocated to India:** Ravi, Beas, and Sutlej.
- **Western Rivers Allocated to Pakistan:** Indus, Jhelum, and Chenab.
- Pakistan received financial assistance through the Indus Basin Development Fund to construct replacement link canals, two major multi-purpose dams (Mangla on the Jhelum and Tarbela on the Indus), and several barrages.

### Major Storage Reservoirs
- **Tarbela Dam:** Completed in 1976 on the Indus River in Haripur district (KP). The largest earth and rock-filled dam by structural volume in the world.
- **Mangla Dam:** Completed in 1967 on the Jhelum River in Mirpur district (AJK). Upraised by 30 feet in 2009 to expand gross storage.
- **Diamer-Bhasha Dam:** Under construction on the Indus River between Kohistan (KP) and Diamer (GB), designed with 4,500 MW hydro generation capacity.
`,
  questions: [
    {
      id: 1,
      question: "The historic Indus Waters Treaty (IWT) was signed between Pakistan and India in 1960 under the mediation of which international institution?",
      options: ["United Nations Security Council", "International Monetary Fund", "World Bank", "Asian Development Bank"],
      answer: 2,
      explanation: "The Indus Waters Treaty was signed on September 19, 1960, in Karachi by President Ayub Khan and Indian PM Jawaharlal Nehru. The World Bank (then the IBRD) mediated negotiations led by Eugene R. Black.",
      keyConcept: "Transboundary water diplomacy and riparian rights in South Asia.",
      examTip: "Eastern rivers (Ravi, Beas, Sutlej) went to India; Western rivers (Indus, Jhelum, Chenab) went to Pakistan.",
      testedIn: ["CSS MPT 2022", "PPSC Tehsildar 2021"]
    },
    {
      id: 2,
      question: "Tarbela Dam, the world's largest earth-filled dam by volume, is constructed on which river in Pakistan?",
      options: ["Jhelum River", "Chenab River", "Indus River", "Kabul River"],
      answer: 2,
      explanation: "Tarbela Dam is situated on the Indus River in the Haripur District of Khyber Pakhtunkhwa. Constructed between 1968 and 1976 as part of the Indus Basin Settlement Plan, its reservoir covers over 250 sq km.",
      keyConcept: "Hydroelectric infrastructure and irrigation water storage.",
      examTip: "Mangla Dam is on the Jhelum River; Tarbela and Diamer-Bhasha are on the Indus River.",
      testedIn: ["PPSC PMS GK 2021", "FPSC Custom Inspector 2023"]
    },
    {
      id: 3,
      question: "At which historic location in Punjab does the confluence of all five Punjab tributary rivers (Panjnad) unite before meeting the Indus River?",
      options: ["Mithankot", "Kotri", "Trimmu", "Taunsa"],
      answer: 0,
      explanation: "The five rivers of Punjab combine at Panjnad (near Uch Sharif) and flow approximately 72 km southwest to discharge their joint waters into the Indus River near Mithankot in Rajanpur district.",
      keyConcept: "Fluvial geomorphology and confluence geography of the Indus Basin.",
      examTip: "Panjnad is the confluence of the 5 rivers; Mithankot is where Panjnad meets the Indus.",
      testedIn: ["PPSC Lecturer 2022", "FPSC AD FIA 2022"]
    },
    {
      id: 4,
      question: "Which of the following barrages is the oldest operational barrage built across the Indus River in Sindh, commissioned in 1932?",
      options: ["Guddu Barrage", "Kotri Barrage", "Sukkur Barrage (Lloyd Barrage)", "Taunsa Barrage"],
      answer: 2,
      explanation: "Sukkur Barrage (originally named Lloyd Barrage) was commissioned in 1932 during British rule. It feeds seven large canal systems irrigating millions of fertile acres across Sindh.",
      keyConcept: "Colonial canal colonies and modern irrigation engineering.",
      examTip: "Order of Indus barrages from north to south: Jinnah -> Chashma -> Taunsa -> Guddu -> Sukkur -> Kotri.",
      testedIn: ["SPSC CCE 2021", "PPSC Tehsildar 2022"]
    },
    {
      id: 5,
      question: "The Mangla Dam reservoir, constructed on the Jhelum River, is situated in which administrative territory of Pakistan?",
      options: ["Punjab (Rawalpindi)", "Khyber Pakhtunkhwa (Haripur)", "Azad Jammu & Kashmir (Mirpur)", "Gilgit-Baltistan (Diamer)"],
      answer: 2,
      explanation: "Mangla Dam was constructed in 1967 in the Mirpur District of Azad Jammu and Kashmir on the Jhelum River. It is the 6th largest dam in the world.",
      keyConcept: "Multi-purpose hydro storage and inter-provincial water management.",
      examTip: "In 2009, the dam was upraised by 30 feet, raising its gross storage capacity to 7.39 MAF.",
      testedIn: ["PPSC Assistant 2023", "NTS GAT 2023"]
    },
    {
      id: 6,
      question: "The Ravi, Beas, and Sutlej rivers were assigned exclusively to India under the 1960 Treaty. Which treaty mechanism permitted Pakistan to replace their irrigation supplies?",
      options: ["Indus Link Canal Project", "Replacement Works (Indus Basin Development Plan)", "Kalabagh Contingency Canal", "Tarbela Canal System"],
      answer: 1,
      explanation: "The Indus Basin Development Fund Agreement financed the 'Replacement Works', including 8 massive inter-river link canals (such as Chashma-Jhelum Link and Rasul-Qadirabad Link) transferring western river water to eastern canal commands.",
      keyConcept: "Inter-basin water transfers and hydraulic engineering.",
      examTip: "The Chashma-Jhelum Link Canal transfers surplus water from the Indus to the Jhelum River.",
      testedIn: ["CSS Pakistan Affairs 2022", "PPSC Sub-Inspector 2023"]
    },
    {
      id: 7,
      question: "Which barrage across the Indus River is located near Kalabagh in Mianwali District, serving as the northernmost barrage on the main Indus stream?",
      options: ["Chashma Barrage", "Jinnah Barrage", "Taunsa Barrage", "Guddu Barrage"],
      answer: 1,
      explanation: "Jinnah Barrage is located near Kalabagh in Mianwali District. Completed in 1946, it diverts water into the Thal Canal to irrigate the desert plains of the Thal Doab.",
      keyConcept: "Indus River hydraulic control infrastructure.",
      examTip: "Do not confuse Jinnah Barrage (operational) with the proposed Kalabagh Dam upstream.",
      testedIn: ["PPSC PMS GK 2022", "FPSC Screening 2024"]
    },
    {
      id: 8,
      question: "The Diamer-Bhasha Dam project, currently under construction with an anticipated installed capacity of 4,500 MW, is located on which river?",
      options: ["Jhelum River", "Indus River", "Kunar River", "Swat River"],
      answer: 1,
      explanation: "Diamer-Bhasha Dam is a roller-compacted concrete gravity dam on the Indus River, located between Kohistan district of KP and Diamer district of Gilgit-Baltistan. It will store 8.1 MAF of water and generate 4,500 MW clean hydropower.",
      keyConcept: "Water security, storage capacity, and clean energy transition.",
      examTip: "Expected to alleviate sedimentation downstream in Tarbela Dam, extending Tarbela's operational lifespan by 35 years.",
      testedIn: ["FPSC Inspector Customs 2023", "PPSC Assistant 2024"]
    },
    {
      id: 9,
      question: "Which right-bank tributary river joins the Indus River near Attock in northern Punjab?",
      options: ["Swat River", "Kabul River", "Gomal River", "Kurram River"],
      answer: 1,
      explanation: "The Kabul River flows eastward from the Hindu Kush in Afghanistan, passes through Peshawar and Nowshera, and empties into the Indus River near Attock Fort.",
      keyConcept: "Riparian tributaries and transboundary river basins of Pakistan.",
      examTip: "Warsak Dam is constructed on the Kabul River near Peshawar (commissioned in 1960 under the Colombo Plan).",
      testedIn: ["PPSC Tehsildar 2022", "CSS MPT 2023"]
    },
    {
      id: 10,
      question: "Trimmu Barrage is located at the confluence of which two major rivers in Punjab?",
      options: ["Ravi and Chenab", "Jhelum and Chenab", "Indus and Jhelum", "Sutlej and Ravi"],
      answer: 1,
      explanation: "Trimmu Barrage is situated in Jhang District just downstream of the confluence of the Jhelum River and the Chenab River. It was constructed between 1937 and 1939.",
      keyConcept: "Confluence barrages and canal headworks of the Punjab plain.",
      examTip: "Panjnad Barrage is where Chenab (carrying Jhelum & Ravi) joins Sutlej.",
      testedIn: ["PPSC Lecturer 2021", "FPSC AD FIA 2023"]
    }
  ]
});

// Pak Studies 5: Economy, Energy & Resources
writeMcqFile({
  subject: 'pakistan-studies',
  topic: 'economy-and-resources',
  topicName: 'National Economy, Energy & Resources',
  title: 'Pakistan Economy, Energy & Natural Resources MCQs with Explanations',
  description: 'High-yield MCQs covering Pakistan economy, CPEC Special Economic Zones, Thar Coalfield, Saindak and Reko Diq copper-gold deposits, energy mix, and agricultural exports.',
  targetExams: ['CSS', 'PMS', 'PPSC', 'FPSC', 'NTS'],
  editorialContent: `
## Pakistan's Economic Geography, Minerals & Energy Resources

A solid understanding of Pakistan's natural resources, trade profile, and fiscal architecture is vital for competitive examinations.

### Mineral Wealth of Pakistan
- **Reko Diq & Saindak (Chagai, Balochistan):** Located in the Tethyan Magmatic Arc. Reko Diq holds one of the world's largest undeveloped copper and gold porphyry deposits, estimated at over 5.9 billion tons of ore.
- **Thar Coalfield (Tharparkar, Sindh):** Discovered in 1991 by the Geological Survey of Pakistan and USAID. It contains over 175 billion tons of lignite coal, ranking among the world's largest coal reserves, now fueling mine-mouth power projects under CPEC.
- **Khewra Salt Mine (Jhelum, Punjab):** The world's second-largest salt mine, discovered historically during Alexander the Great's campaign in 326 BC, mining pure rock salt (halite) from the Salt Range.

### Agriculture & Trade Profile
- Agriculture accounts for approximately 23% of GDP and employs 37% of the national labor force.
- **Major Crops:** Wheat (Rabi staple), Rice (Kharif export), Cotton (industrial silver fiber), and Sugarcane.
- **Key Exports:** Textile goods (cotton yarn, bedwear, knitwear accounting for ~60% of total export receipts), Basmati rice, surgical instruments (Sialkot cluster), and leather goods.
`,
  questions: [
    {
      id: 1,
      question: "The massive Reko Diq copper and gold deposit, one of the world's largest untapped reserves, is located in which district of Balochistan?",
      options: ["Gwadar", "Chagai", "Khuzdar", "Zhob"],
      answer: 1,
      explanation: "Reko Diq is situated in the Chagai District of Balochistan within the Tethyan Magmatic Arc. It holds an estimated 5.9 billion tons of mineral ore with significant copper and gold grades.",
      keyConcept: "Strategic mineral extractive industries and foreign direct investment in Pakistan.",
      examTip: "Barrick Gold entered a landmark reconstituted joint venture agreement with Pakistan in 2022 to develop Reko Diq.",
      testedIn: ["CSS Current Affairs 2023", "PPSC Tehsildar 2022"]
    },
    {
      id: 2,
      question: "The Thar Coalfield, holding approximately 175 billion tons of lignite coal in Sindh, was first discovered in which decade?",
      options: ["1950s", "1970s", "1990s (1991)", "2010s"],
      answer: 2,
      explanation: "Thar coal was discovered in 1991 by the Geological Survey of Pakistan (GSP) and USAID. Thar Desert covers over 9,000 sq km of coal-bearing formations divided into mining blocks.",
      keyConcept: "Domestic thermal energy security and base-load power generation.",
      examTip: "Thar coal is categorized as 'Lignite B', characterized by high moisture content and moderate ash content.",
      testedIn: ["PPSC PMS GK 2021", "FPSC Inspector 2023"]
    },
    {
      id: 3,
      question: "The Khewra Salt Mine, the second-largest rock salt mine in the world, is situated in which mountain range of Punjab?",
      options: ["Sulaiman Range", "Salt Range", "Kirthar Range", "Margalla Hills"],
      answer: 1,
      explanation: "Khewra Salt Mine is located in the Salt Range in Pind Dadan Khan, Jhelum District. Salt was originally discovered in 326 BC by horses in the army of Alexander the Great licking the rocks.",
      keyConcept: "Industrial mineral mining and geological history.",
      examTip: "Khewra produces over 350,000 tons of rock salt (pink Himalayan salt) per annum.",
      testedIn: ["PPSC Lecturer 2022", "NTS NAT 2023"]
    },
    {
      id: 4,
      question: "Under the China-Pakistan Economic Corridor (CPEC), how many priority Special Economic Zones (SEZs) were initially agreed upon for industrial relocation?",
      options: ["4 SEZs", "9 SEZs", "15 SEZs", "21 SEZs"],
      answer: 1,
      explanation: "Under the Long-Term Plan of CPEC (2017–2030), nine (9) priority Special Economic Zones were identified across all provinces, including Rashakai SEZ (KP), Allama Iqbal Industrial City (Faisalabad), and Dhabeji SEZ (Sindh).",
      keyConcept: "CPEC Phase-II industrialization and export processing.",
      examTip: "Rashakai in KP and Allama Iqbal Industrial City in Punjab were the earliest fast-tracked zones.",
      testedIn: ["CSS Pakistan Affairs 2022", "FPSC AD FIA 2023"]
    },
    {
      id: 5,
      question: "Which of the following cities in Pakistan is globally recognized as the premier manufacturing cluster for surgical instruments and sports goods (including FIFA footballs)?",
      options: ["Faisalabad", "Sialkot", "Gujranwala", "Hyderabad"],
      answer: 1,
      explanation: "Sialkot is world-renowned for manufacturing high-precision surgical instruments, export-quality leather goods, and hand-stitched/thermo-bonded footballs supplied to FIFA World Cup tournaments (such as the Al Rihla and Telstar balls).",
      keyConcept: "Industrial export clusters and specialized SME development in Pakistan.",
      examTip: "Faisalabad is the textile hub ('Manchester of Pakistan'); Gujranwala is known for ceramics and fans.",
      testedIn: ["PPSC Assistant 2023", "FPSC Screening 2022"]
    },
    {
      id: 6,
      question: "What is the primary export category of Pakistan, accounting for over 55-60% of total national export earnings?",
      options: ["Basmati Rice & Wheat", "Textiles and Garments", "Sports & Leather Goods", "Petroleum & Minerals"],
      answer: 1,
      explanation: "Textiles and apparel constitute between 58% and 62% of Pakistan's total merchandise exports. Key sub-sectors include readymade garments, knitwear, bedwear, cotton cloth, and cotton yarn.",
      keyConcept: "Balance of payments, trade composition, and industrial value addition.",
      examTip: "Rice is the second-largest export earner, generating $2.5 to $3.5 billion annually.",
      testedIn: ["PPSC Tehsildar 2021", "CSS Current Affairs 2023"]
    },
    {
      id: 7,
      question: "The deep-sea warm-water Port of Gwadar is strategically located at the mouth of which vital maritime chokepoint?",
      options: ["Strait of Malacca", "Bab-el-Mandeb", "Strait of Hormuz (Gulf of Oman)", "Suez Canal"],
      answer: 2,
      explanation: "Gwadar Port is situated on the shores of the Arabian Sea in Balochistan near the entrance of the Strait of Hormuz, where roughly 20-25% of global petroleum maritime traffic passes daily.",
      keyConcept: "Maritime geostrategy, chokepoints, and regional transshipment connectivity.",
      examTip: "Gwadar was purchased from the Sultanate of Oman by Pakistan in 1958 under PM Feroz Khan Noon for 3 million USD / 5.5 billion rupees.",
      testedIn: ["CSS International Relations 2022", "FPSC Custom Inspector 2023"]
    },
    {
      id: 8,
      question: "In Pakistan's agricultural cropping calendar, the 'Kharif' season crops are sown and harvested during which months?",
      options: ["Sown in April-June; Harvested in Oct-Dec", "Sown in Oct-Dec; Harvested in April-May", "Sown in Jan-Feb; Harvested in June", "Sown in Aug-Sept; Harvested in March"],
      answer: 0,
      explanation: "Kharif crops (summer monsoon crops) are sown from April to June and harvested between October and December. Major Kharif crops include Cotton, Rice, Sugarcane, and Maize.",
      keyConcept: "Agrarian cycles, water duty, and seasonal irrigation scheduling.",
      examTip: "Rabi crops (winter crops) include Wheat, Barley, Gram, and Mustard, sown in October-December and harvested in April-May.",
      testedIn: ["PPSC PMS GK 2020", "PPSC Naib Tehsildar 2022"]
    },
    {
      id: 9,
      question: "The Sui Gas Field, the historic natural gas discovery that revolutionized Pakistan's domestic energy infrastructure, was discovered in 1952 in which province?",
      options: ["Punjab (Potohar)", "Balochistan (Dera Bugti)", "Sindh (Badin)", "Khyber Pakhtunkhwa (Kohat)"],
      answer: 1,
      explanation: "Sui Gas Field was discovered in 1952 by Pakistan Petroleum Limited (PPL) in the Dera Bugti District of Balochistan. Commercial exploitation began in 1955, supplying natural gas across the country.",
      keyConcept: "Hydrocarbon discoveries and indigenous energy production in Pakistan.",
      examTip: "Mari Gas Field in Daharki, Sindh, is currently the largest gas-producing reservoir by volume in Pakistan.",
      testedIn: ["PPSC Sub-Inspector 2022", "FPSC AD FIA 2022"]
    },
    {
      id: 10,
      question: "The KANUPP-2 and KANUPP-3 commercial nuclear power plants located in Karachi each have a generation capacity of 1,100 MW based on which reactor design?",
      options: ["CANDU Pressurized Heavy Water", "Hualong One (HPR1000) Pressurized Water Reactor", "VVER-1200 Russian Reactor", "Boiling Water Reactor"],
      answer: 1,
      explanation: "KANUPP-2 (K-2) and KANUPP-3 (K-3) were constructed in partnership with China National Nuclear Corporation (CNNC) utilizing the advanced Generation-III Hualong One (HPR1000) pressurized water reactor technology.",
      keyConcept: "Civilian nuclear energy and base-load clean power generation.",
      examTip: "Chashma Nuclear Power Plants (C-1 to C-4) in Punjab also provide clean nuclear energy to the national grid.",
      testedIn: ["CSS GSA 2023", "FPSC Inspector 2024"]
    }
  ]
});

console.log('Finished writing 2 more Pakistan Studies MCQ sets!');
