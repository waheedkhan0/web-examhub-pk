import { writeMcqFile } from './mcq-helper.js';

// General Knowledge 1: World Geography & Capitals
writeMcqFile({
  subject: 'general-knowledge',
  topic: 'world-geography',
  topicName: 'World Geography, Oceans & Mountain Ranges',
  title: 'World Geography, Oceans, Straits & Capitals MCQs with Explanations',
  description: 'In-depth global geography MCQs for PPSC, FPSC, and CSS screening. International maritime straits, deepest ocean trenches, highest plateaus, and world capitals.',
  targetExams: ['CSS', 'PMS', 'PPSC', 'FPSC', 'NTS'],
  editorialContent: `
## Physical Geography, Maritime Chokepoints & Global Capitals

Physical geography is a cornerstone of General Knowledge screening tests across Pakistan. 

### Critical Maritime Straits & Canals
- **Strait of Malacca:** Connects the Indian Ocean (Andaman Sea) to the South China Sea between Malaysia and Sumatra (Indonesia). The world's busiest shipping lane for energy transport to East Asia.
- **Strait of Hormuz:** Connects the Persian Gulf with the Gulf of Oman and Arabian Sea between Oman and Iran. Chokepoint for roughly 20% of global petroleum.
- **Bab-el-Mandeb ('Gate of Tears'):** Connects the Red Sea with the Gulf of Aden between Yemen (Arabian Peninsula) and Djibouti/Eritrea (Horn of Africa).
- **Strait of Gibraltar:** Connects the Atlantic Ocean with the Mediterranean Sea between Spain and Morocco (Europe and Africa).
- **Suez Canal (Egypt):** 193 km sea-level artificial waterway opened in 1869, connecting the Mediterranean Sea to the Red Sea, eliminating the need to navigate around the Cape of Good Hope.
- **Panama Canal:** Lock-system canal opened in 1914 across the Isthmus of Panama, connecting the Atlantic and Pacific Oceans.

### Earth's Extremes
- **Deepest Point:** Challenger Deep in the Mariana Trench (Pacific Ocean) at approx. 10,994 meters (36,070 ft).
- **Highest Plateau:** Tibetan Plateau (known as the 'Roof of the World'), averaging over 4,500 meters altitude.
- **Largest Lake by Surface Area:** Caspian Sea (saline endorheic basin, 371,000 sq km); Lake Baikal (Russia) is the deepest and largest freshwater lake by volume.
`,
  questions: [
    {
      id: 1,
      question: "Which strategic maritime strait connects the Persian Gulf with the Gulf of Oman, handling approximately one-fifth of the world's petroleum transit?",
      options: ["Strait of Malacca", "Strait of Hormuz", "Bab-el-Mandeb", "Bosphorus Strait"],
      answer: 1,
      explanation: "The Strait of Hormuz lies between Oman and Iran, connecting the Persian Gulf with the Gulf of Oman and the Arabian Sea. It is the world's most critical petroleum transit chokepoint.",
      keyConcept: "Geopolitical maritime chokepoints and global energy security.",
      examTip: "Bab-el-Mandeb is at the southern entrance of the Red Sea; Hormuz is at the entrance of the Persian Gulf.",
      testedIn: ["PPSC Tehsildar 2021", "CSS MPT 2022"]
    },
    {
      id: 2,
      question: "The Suez Canal, which connects the Mediterranean Sea directly to the Red Sea, was officially opened for international navigation in which year?",
      options: ["1854", "1869", "1882", "1914"],
      answer: 1,
      explanation: "Engineered by French diplomat Ferdinand de Lesseps, the Suez Canal was opened on November 17, 1869, across Egypt, drastically reducing maritime transit distance between Europe and Asia.",
      keyConcept: "Canal engineering and colonial maritime trade routes.",
      examTip: "Nationalized by Egyptian President Gamal Abdel Nasser in 1956, triggering the Suez Crisis.",
      testedIn: ["FPSC Custom Inspector 2022", "PPSC Lecturer 2023"]
    },
    {
      id: 3,
      question: "What is the deepest known oceanic trench on Earth, situated in the western Pacific Ocean?",
      options: ["Puerto Rico Trench", "Java (Sunda) Trench", "Mariana Trench (Challenger Deep)", "Tonga Trench"],
      answer: 2,
      explanation: "The Mariana Trench reaches its maximum depth at Challenger Deep at approximately 10,994 meters (36,070 feet) below sea level, which is greater than the height of Mount Everest (8,848 m).",
      keyConcept: "Oceanic bathymetry and tectonic plate subduction zones.",
      examTip: "Puerto Rico Trench is the deepest in the Atlantic Ocean; Java Trench is the deepest in the Indian Ocean.",
      testedIn: ["PPSC PMS GK 2021", "NTS NAT 2023"]
    },
    {
      id: 4,
      question: "Which of the following is the world's largest landlocked country by total land area?",
      options: ["Mongolia", "Kazakhstan", "Chad", "Bolivia"],
      answer: 1,
      explanation: "Kazakhstan spans approximately 2.72 million square kilometers in Central Asia, making it the largest landlocked nation on Earth. It borders Russia, China, Kyrgyzstan, Uzbekistan, and Turkmenistan.",
      keyConcept: "Political geography, sovereign boundaries, and maritime access.",
      examTip: "Mongolia is the second-largest landlocked nation; Uzbekistan and Liechtenstein are the world's only 'doubly landlocked' countries.",
      testedIn: ["CSS MPT 2023", "PPSC Assistant 2023"]
    },
    {
      id: 5,
      question: "The Strait of Gibraltar separates the continent of Europe from Africa, linking which two bodies of water?",
      options: ["Atlantic Ocean and Mediterranean Sea", "Black Sea and Aegean Sea", "Red Sea and Indian Ocean", "North Sea and Baltic Sea"],
      answer: 0,
      explanation: "The Strait of Gibraltar lies between southern Spain (Europe) and northern Morocco (Africa), connecting the Atlantic Ocean with the Mediterranean Sea. Its narrowest point spans only 14.3 km.",
      keyConcept: "Inter-continental straits and maritime access.",
      examTip: "The Bosphorus Strait separates European and Asian Istanbul, connecting the Black Sea with the Sea of Marmara.",
      testedIn: ["PPSC Sub-Inspector 2022", "FPSC AD FIA 2023"]
    },
    {
      id: 6,
      question: "What is the capital city of Kazakhstan, which was renamed Nur-Sultan in 2019 and officially reverted to its original name in 2022?",
      options: ["Almaty", "Astana", "Tashkent", "Bishkek"],
      answer: 1,
      explanation: "Astana was made the capital of Kazakhstan in 1997 (replacing Almaty). It was briefly renamed Nur-Sultan in 2019 in honor of former President Nursultan Nazarbayev, but reverted back to Astana in September 2022.",
      keyConcept: "Central Asian political geography and capital city transitions.",
      examTip: "Tashkent is the capital of Uzbekistan; Bishkek is the capital of Kyrgyzstan; Dushanbe is Tajikistan; Ashgabat is Turkmenistan.",
      testedIn: ["PPSC Tehsildar 2022", "CSS Current Affairs 2023"]
    },
    {
      id: 7,
      question: "Lake Baikal, the world's deepest and oldest freshwater lake holding roughly 20% of the world's unfrozen surface freshwater, is located in which country?",
      options: ["Canada", "Russia (Siberia)", "United States", "Norway"],
      answer: 1,
      explanation: "Lake Baikal is situated in southern Siberia, Russia. Reaching a maximum depth of 1,642 meters (5,387 ft), it is both the deepest lake in the world and the largest freshwater lake by water volume.",
      keyConcept: "Limnology, freshwater reserves, and continental rift lakes.",
      examTip: "Lake Superior is the largest freshwater lake by surface area; Caspian Sea is the largest lake overall (saline).",
      testedIn: ["PPSC Assistant 2024", "FPSC Inspector 2024"]
    },
    {
      id: 8,
      question: "Which African desert is the largest hot desert in the world, spanning over 9 million square kilometers across eleven countries?",
      options: ["Kalahari Desert", "Sahara Desert", "Namib Desert", "Atacama Desert"],
      answer: 1,
      explanation: "The Sahara Desert spans approximately 9.2 million square kilometers across North Africa. It is the largest hot desert on Earth (Antarctica and the Arctic are larger polar deserts).",
      keyConcept: "Climatology and global desert biomes.",
      examTip: "The Atacama Desert in Chile/Peru is recognized as the driest non-polar desert on Earth.",
      testedIn: ["PPSC PMS GK 2020", "NTS GAT 2023"]
    },
    {
      id: 9,
      question: "The Strait of Malacca, the primary maritime conduit between the Indian Ocean and the Pacific Ocean, is bordered by which two countries?",
      options: ["Indonesia and Malaysia", "Thailand and Vietnam", "Philippines and Taiwan", "India and Sri Lanka"],
      answer: 0,
      explanation: "The Strait of Malacca runs between the Malay Peninsula (West Malaysia) and the Indonesian island of Sumatra, carrying over 80,000 vessels annually.",
      keyConcept: "Southeast Asian maritime geography and international supply chains.",
      examTip: "Palk Strait separates India (Tamil Nadu) from Sri Lanka.",
      testedIn: ["CSS Current Affairs 2022", "PPSC Lecturer 2021"]
    },
    {
      id: 10,
      question: "Which mountain range forms the traditional natural boundary separating European Russia from Asian Russia (Siberia)?",
      options: ["Caucasus Mountains", "Ural Mountains", "Carpathian Mountains", "Altai Mountains"],
      answer: 1,
      explanation: "The Ural Mountains run north-to-south through western Russia, traditionally serving as the geographic boundary dividing the continents of Europe and Asia.",
      keyConcept: "Continental divide boundaries and Eurasian physiography.",
      examTip: "The Caucasus Mountains run between the Black Sea and the Caspian Sea, housing Mount Elbrus (Europe's highest peak).",
      testedIn: ["PPSC Sub-Inspector 2023", "FPSC Screening 2023"]
    }
  ]
});

// General Knowledge 2: International Organizations
writeMcqFile({
  subject: 'general-knowledge',
  topic: 'international-organizations',
  topicName: 'International Organizations & Alliances',
  title: 'International Organizations (UN, OIC, SCO, NATO) MCQs with Explanations',
  description: 'Master International Organizations MCQs. Headquarter cities, founding years, treaty charters, and member counts for United Nations, OIC, SCO, NATO, ASEAN, and SAARC.',
  targetExams: ['CSS', 'PMS', 'PPSC', 'FPSC', 'NTS'],
  editorialContent: `
## Global Governance & International Institutions

Examiners frequently test the structural details, headquarters, founding years, and leadership of multilateral bodies.

### The United Nations System (Charter Signed June 26, 1945; Enforced Oct 24, 1945)
- **Headquarters:** New York City (International Court of Justice is at The Hague, Netherlands).
- **Principal Organs (6):** General Assembly, Security Council, Economic and Social Council (ECOSOC), Trusteeship Council (suspended 1994), International Court of Justice (ICJ), and Secretariat.
- **UN Security Council (UNSC):** 15 Members (5 Permanent P5 with veto power: USA, UK, France, Russia, China; 10 Non-Permanent elected for 2-year terms).
- **Specialized Agencies & Headquarters:**
  - *Geneva, Switzerland:* WHO, ILO, UNHCR, WTO, WIPO, ITU.
  - *Vienna, Austria:* IAEA, UNODC, UNIDO, OPEC.
  - *Paris, France:* UNESCO, OECD.
  - *Rome, Italy:* FAO, WFP, IFAD.
  - *Washington, D.C.:* World Bank, IMF.

### Regional Alliances of Strategic Significance
- **OIC (Organization of Islamic Cooperation):** Founded September 1969 in Rabat, Morocco following the arson attack on Al-Aqsa Mosque. Headquarters in Jeddah, Saudi Arabia. 57 member states.
- **SCO (Shanghai Cooperation Organisation):** Founded June 15, 2001 in Shanghai. Secretariat in Beijing, RATS (counter-terrorism) in Tashkent. Pakistan and India admitted as full members at Astana Summit on June 9, 2017.
- **NATO (North Atlantic Treaty Organization):** Founded April 4, 1949 via Washington Treaty. Headquarters in Brussels, Belgium.
`,
  questions: [
    {
      id: 1,
      question: "On which date did the Charter of the United Nations officially come into force, observed annually as United Nations Day?",
      options: ["June 26, 1945", "August 14, 1945", "October 24, 1945", "January 1, 1946"],
      answer: 2,
      explanation: "The UN Charter was signed on June 26, 1945, in San Francisco, but officially entered into force on October 24, 1945, upon ratification by the five permanent members and a majority of signatory states.",
      keyConcept: "Post-WWII multilateral international law and institutional founding.",
      examTip: "Pakistan joined the United Nations on September 30, 1947.",
      testedIn: ["PPSC Tehsildar 2021", "CSS MPT 2022"]
    },
    {
      id: 2,
      question: "Where is the official permanent seat of the International Court of Justice (ICJ), the principal judicial organ of the United Nations?",
      options: ["Geneva, Switzerland", "New York City, USA", "The Hague, Netherlands (Peace Palace)", "Vienna, Austria"],
      answer: 2,
      explanation: "Unlike the other five principal organs of the UN located at UN Headquarters in New York, the ICJ is seated at the Peace Palace in The Hague, Netherlands. It consists of 15 judges elected for 9-year terms.",
      keyConcept: "Judicial dispute settlement between sovereign states.",
      examTip: "No two judges of the ICJ may be of the same nationality; 5 judges are elected every three years.",
      testedIn: ["FPSC Custom Inspector 2022", "PPSC PMS GK 2021"]
    },
    {
      id: 3,
      question: "The Shanghai Cooperation Organisation (SCO) admitted Pakistan and India as full member states during which historic summit?",
      options: ["2015 Ufa Summit", "2017 Astana Summit (Kazakhstan)", "2018 Qingdao Summit", "2020 Moscow Summit"],
      answer: 1,
      explanation: "Pakistan and India formally became full member states of the SCO on June 9, 2017, at the Astana Summit in Kazakhstan, expanding the Eurasian security bloc.",
      keyConcept: "Regional multilateralism and Eurasian geopolitical integration.",
      examTip: "SCO Secretariat is in Beijing; SCO Regional Anti-Terrorist Structure (RATS) is in Tashkent, Uzbekistan.",
      testedIn: ["CSS Current Affairs 2022", "PPSC Assistant 2023"]
    },
    {
      id: 4,
      question: "The Organization of Islamic Cooperation (OIC) was established in September 1969 at a summit held in which city, following the criminal arson attack on Al-Aqsa Mosque?",
      options: ["Cairo, Egypt", "Rabat, Morocco", "Jeddah, Saudi Arabia", "Islamabad, Pakistan"],
      answer: 1,
      explanation: "The OIC was founded on September 25, 1969, at the historic first Islamic Summit in Rabat, Morocco. Its permanent General Secretariat was established in Jeddah, Saudi Arabia, pending the liberation of Jerusalem.",
      keyConcept: "Pan-Islamic multilateral diplomacy and collective security.",
      examTip: "Pakistan hosted the historic 2nd OIC Islamic Summit in Lahore in February 1974.",
      testedIn: ["PPSC Tehsildar 2022", "FPSC Screening 2023"]
    },
    {
      id: 5,
      question: "Which specialized United Nations agency responsible for international public health is headquartered in Geneva, Switzerland?",
      options: ["UNICEF", "WHO (World Health Organization)", "FAO", "UNESCO"],
      answer: 1,
      explanation: "The World Health Organization (WHO) was established on April 7, 1948 (celebrated as World Health Day) and is headquartered in Geneva, Switzerland.",
      keyConcept: "Global public health governance and international sanitary regulations.",
      examTip: "UNICEF is headquartered in New York; UNESCO is in Paris; FAO is in Rome.",
      testedIn: ["PPSC Lecturer 2022", "NTS NAT 2023"]
    },
    {
      id: 6,
      question: "Article 5 of the North Atlantic Treaty (NATO), signed in 1949, establishes which core defense principle?",
      options: [
        "Unanimous voting for annual budget allocation",
        "Collective self-defense: An armed attack against one member is considered an attack against all",
        "Mandatory deployment of nuclear weapons in every member state",
        "Prohibition of joining non-Western trade organizations"
      ],
      answer: 1,
      explanation: "Article 5 enshrines collective self-defense: an armed attack against one or more allies in Europe or North America is considered an attack against them all. It has been invoked only once in NATO's history—following the September 11, 2001 terrorist attacks on the United States.",
      keyConcept: "Collective security pacts and transatlantic military alliances.",
      examTip: "NATO headquarters is located in Brussels, Belgium. Finland and Sweden are its newest members.",
      testedIn: ["CSS International Relations 2023", "FPSC AD FIA 2023"]
    },
    {
      id: 7,
      question: "The Bretton Woods Conference held in New Hampshire, USA in July 1944 established which two premier international financial institutions?",
      options: ["WTO and OECD", "International Monetary Fund (IMF) and World Bank (IBRD)", "Asian Development Bank and BIS", "UNDP and UNCTAD"],
      answer: 1,
      explanation: "The UN Monetary and Financial Conference at Bretton Woods established the International Monetary Fund (IMF) to oversee exchange rate stability and balance of payments, and the International Bank for Reconstruction and Development (now part of the World Bank Group) for post-war development lending.",
      keyConcept: "Post-war international financial architecture and macroeconomic governance.",
      examTip: "Both the World Bank and IMF are headquartered in Washington, D.C.",
      testedIn: ["CSS Economics 2022", "PPSC PMS GK 2022"]
    },
    {
      id: 8,
      question: "The South Asian Association for Regional Cooperation (SAARC) was formally established in 1985 in Dhaka. Where is its permanent Secretariat located?",
      options: ["New Delhi, India", "Islamabad, Pakistan", "Kathmandu, Nepal", "Colombo, Sri Lanka"],
      answer: 2,
      explanation: "The SAARC Secretariat was established in Kathmandu, Nepal, on January 16, 1987. SAARC comprises 8 member states: Afghanistan, Bangladesh, Bhutan, India, Maldives, Nepal, Pakistan, and Sri Lanka.",
      keyConcept: "South Asian regional integration challenges and institutional mechanisms.",
      examTip: "Afghanistan was the last member to join SAARC in 2007 at the 14th summit in New Delhi.",
      testedIn: ["PPSC Sub-Inspector 2022", "FPSC Custom Inspector 2024"]
    },
    {
      id: 9,
      question: "The International Atomic Energy Agency (IAEA), which promotes the peaceful use of nuclear energy and serves as the nuclear watchdog of the UN, is headquartered in which city?",
      options: ["Geneva, Switzerland", "Vienna, Austria", "Brussels, Belgium", "The Hague, Netherlands"],
      answer: 1,
      explanation: "The IAEA was created in 1957 in response to US President Eisenhower's 'Atoms for Peace' address. It is headquartered at the Vienna International Centre in Vienna, Austria.",
      keyConcept: "Nuclear non-proliferation treaties and safeguard inspections.",
      examTip: "OPEC (Organization of the Petroleum Exporting Countries) is also headquartered in Vienna, Austria, even though Austria is not an OPEC member.",
      testedIn: ["PPSC Assistant 2023", "CSS Current Affairs 2023"]
    },
    {
      id: 10,
      question: "How many non-permanent member states are elected to the United Nations Security Council (UNSC) for two-year terms by the UN General Assembly?",
      options: ["5 Members", "10 Members", "15 Members", "20 Members"],
      answer: 1,
      explanation: "The UNSC consists of 15 members: 5 permanent members (P5: USA, UK, Russia, China, France with veto power) and 10 non-permanent members elected by the General Assembly for staggered two-year terms based on geographic distribution.",
      keyConcept: "Security Council voting procedures, veto power, and UN governance.",
      examTip: "A procedural matter requires 9 affirmative votes; a substantive resolution requires 9 votes including the concurring votes of all P5 members.",
      testedIn: ["CSS MPT 2024", "PPSC Tehsildar 2021"]
    }
  ]
});

console.log('Finished writing General Knowledge MCQ sets!');
