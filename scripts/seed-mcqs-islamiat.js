import { writeMcqFile } from './mcq-helper.js';

// Islamiat Set 1: Quran Revelation & Compilations
writeMcqFile({
  subject: 'islamiat',
  topic: 'quran-revelation',
  topicName: 'Holy Quran Revelation & Compilation',
  title: 'Holy Quran Revelation & Compilation MCQs with Explanations',
  description: 'In-depth Islamic Studies MCQs covering Ulum al-Quran, stages of Wahi, Makki and Madani Surahs, Hazrat Zayd ibn Thabit, and compilation under Hazrat Abu Bakr and Hazrat Usman.',
  targetExams: ['CSS', 'PMS', 'PPSC', 'FPSC', 'NTS'],
  editorialContent: `
## In-Depth Study Notes: Sciences and Compilation of the Holy Quran

The Holy Quran, revealed over a period of 22 years, 5 months, and 14 days (approximately 23 lunar years) to Prophet Muhammad (PBUH), is the primary source of Islamic theology, ethics, and jurisprudence.

### The Stages of Revelation (Wahi)
- **First Revelation (610 CE / Ramadan):** The first five verses of Surah Al-Alaq revealed in the Cave of Hira through Hazrat Jibreel (AS).
- **Makki vs. Madani Surahs:**
  - **86 Makki Surahs:** Revealed prior to the Hijrah to Madinah. Themes focus on Monotheism (Tawheed), the Day of Judgment (Akhirah), prophetic narratives, and steadfast patience under persecution.
  - **28 Madani Surahs:** Revealed post-Hijrah. Themes address social legislation, legal ordinances (Ahkam), civil governance, treaties, family laws, and military defense.

### Historical Eras of Compilation
1. **The Prophetic Era:** The Quran was completely recorded during the lifetime of the Prophet (PBUH) on palm leaves, parchment, stone tablets, and shoulder bones by official scribes (*Kuttab al-Wahi*), foremost among them Hazrat Zayd ibn Thabit, Hazrat Ubayy ibn Ka'b, Hazrat Ali, and Hazrat Muawiyah.
2. **First Official Compilation (Caliphate of Hazrat Abu Bakr RA):** Prompted by the martyrdom of over 70 Huffaz at the Battle of Yamama (12 AH). On the counsel of Hazrat Umar (RA), Hazrat Abu Bakr commissioned Hazrat Zayd ibn Thabit (RA) to compile the authenticated written verses into a single bound codex (*Suhuf*), which was later preserved with Hazrat Hafsah (RA).
3. **Standardization & Distribution (Caliphate of Hazrat Usman RA):** Amidst linguistic dialect confusion among Muslim troops in Armenia and Azerbaijan, Hazrat Usman (RA) utilized the Suhuf of Hafsah, transcribed official standard copies in the Quraishi dialect, and distributed them to major Islamic provinces, earning the title *Jami al-Quran*.
`,
  questions: [
    {
      id: 1,
      question: "Which battle during the caliphate of Hazrat Abu Bakr (RA) resulted in the martyrdom of over 70 Huffaz, prompting the official compilation of the Holy Quran?",
      options: ["Battle of Yarmouk", "Battle of Yamama", "Battle of Qadisiyyah", "Battle of Nihawand"],
      answer: 1,
      explanation: "During the Battle of Yamama (12 AH) against the false prophet Musaylimah al-Kadhdhab, dozens of Quran memorizers (Huffaz) were martyred. Hazrat Umar (RA) recognized the risk of losing oral transmissions and urged Hazrat Abu Bakr (RA) to compile the Quran into a single codex.",
      keyConcept: "Preservation of Quranic text and historical transition from oral to codex transmission.",
      examTip: "Battle of Yamama was fought against Musaylimah; Yarmouk was against the Byzantine Empire.",
      testedIn: ["PPSC Tehsildar 2021", "CSS MPT 2022"]
    },
    {
      id: 2,
      question: "Who was appointed by Hazrat Abu Bakr (RA) as the head of the commission tasked with compiling the Holy Quran?",
      options: ["Hazrat Ali ibn Abi Talib (RA)", "Hazrat Zayd ibn Thabit (RA)", "Hazrat Abdullah ibn Mas'ud (RA)", "Hazrat Ubayy ibn Ka'b (RA)"],
      answer: 1,
      explanation: "Hazrat Zayd ibn Thabit (RA), one of the primary scribes of divine revelation during the Prophet's lifetime, was chosen for his youthful energy, integrity, sharp memory, and expertise in written Arabic.",
      keyConcept: "Methodology of Quranic text verification and scribal criteria.",
      examTip: "Hazrat Zayd required two eyewitness testimonies for every written verse before recording it.",
      testedIn: ["FPSC Custom Inspector 2022", "PPSC Lecturer 2023"]
    },
    {
      id: 3,
      question: "How many total Surahs (chapters) and Ayahs (verses) are traditionally recognized in the standard printed codex of the Holy Quran?",
      options: ["114 Surahs and 6,236 Ayahs", "112 Surahs and 6,666 Ayahs", "120 Surahs and 6,000 Ayahs", "114 Surahs and 5,800 Ayahs"],
      answer: 0,
      explanation: "The Quran contains exactly 114 Surahs. In the standard Kufic recitation system (which forms the basis of the modern Medina Mushaf), the total verse count is 6,236 (excluding the Bismillah preceding 112 chapters).",
      keyConcept: "Structural division, Surahs, Ayahs, and Manzils of the Quran.",
      examTip: "While popular tradition often quotes '6,666', standard academic exams test the precise count of 6,236 Ayahs.",
      testedIn: ["PPSC Assistant 2023", "CSS MPT 2023"]
    },
    {
      id: 4,
      question: "Which Surah of the Holy Quran does not begin with the customary invocation 'Bismillah-ir-Rahman-ir-Rahim'?",
      options: ["Surah Al-Baqarah", "Surah At-Tawbah (Al-Bara'at)", "Surah An-Naml", "Surah Al-Anfal"],
      answer: 1,
      explanation: "Surah At-Tawbah (the 9th chapter) is the only Surah in the Quran that does not begin with Bismillah, signifying divine disavowal of treaty-breaking polytheists and intense warfare injunctions.",
      keyConcept: "Textual peculiarities and thematic contexts of Quranic chapters.",
      examTip: "Surah An-Naml (Chapter 27) contains Bismillah twice—once at the start and once in verse 30 in the letter of Prophet Sulaiman (AS).",
      testedIn: ["PPSC PMS GK 2021", "NTS NAT 2023"]
    },
    {
      id: 5,
      question: "What is the primary thematic distinction between Makki and Madani Surahs?",
      options: [
        "Makki Surahs deal with state administration; Madani with poetic metaphors",
        "Makki Surahs emphasize Tawheed, Akhirah and moral character; Madani Surahs detail legal injunctions, warfare, and social governance",
        "Makki Surahs are significantly longer than Madani Surahs",
        "Makki Surahs were revealed only during Ramadan"
      ],
      answer: 1,
      explanation: "The 86 Makki Surahs were revealed during the early phase in Makkah, establishing basic theological foundations (monotheism, prophethood, resurrection). The 28 Madani Surahs, revealed after the migration, established civil laws, financial rules, inheritance, and international treaties.",
      keyConcept: "Thematic taxonomy in Ulum al-Quran.",
      examTip: "Makki Surahs generally address mankind ('O Mankind'); Madani Surahs generally address the believers ('O you who believe').",
      testedIn: ["CSS Islamic Studies 2022", "PPSC Lecturer 2021"]
    },
    {
      id: 6,
      question: "With whom was the original master copy of the Holy Quran (known as the Suhuf) deposited after the demise of Caliph Hazrat Umar (RA)?",
      options: ["Hazrat Aisha (RA)", "Hazrat Hafsah bint Umar (RA)", "Hazrat Usman ibn Affan (RA)", "Hazrat Abdullah ibn Umar (RA)"],
      answer: 1,
      explanation: "After Hazrat Umar (RA) was martyred, the Suhuf were entrusted to his daughter, the Mother of the Believers Hazrat Hafsah (RA). It was later borrowed by Hazrat Usman (RA) to produce standardized provincial copies.",
      keyConcept: "Custodianship of the foundational Quranic text.",
      examTip: "Known in Islamic historiography as 'Mushaf-e-Hafsah'.",
      testedIn: ["PPSC Sub-Inspector 2022", "FPSC AD FIA 2022"]
    },
    {
      id: 7,
      question: "Which Surah of the Holy Quran is known as the 'Heart of the Quran' (Qalb al-Quran) according to a well-known Hadith in Sunan al-Tirmidhi?",
      options: ["Surah Al-Fatihah", "Surah Yaseen", "Surah Ar-Rahman", "Surah Al-Mulk"],
      answer: 1,
      explanation: "Surah Yaseen (the 36th chapter) is designated as the Heart of the Quran in Hadith literature due to its presentation of core tenets: affirmation of prophethood, divine signs in creation, and vivid portrayals of resurrection.",
      keyConcept: "Honorific titles and pedagogical virtues of Quranic chapters.",
      examTip: "Surah Al-Fatihah is known as Umm al-Kitab (Mother of the Book); Surah Ar-Rahman is known as Aroos al-Quran (Bride of the Quran).",
      testedIn: ["PPSC Assistant 2024", "FPSC Inspector 2023"]
    },
    {
      id: 8,
      question: "Surah Al-Baqarah, the longest Surah of the Holy Quran comprising 286 verses, contains the famous 'Ayat al-Kursi' at which verse number?",
      options: ["Verse 185", "Verse 255", "Verse 282", "Verse 286"],
      answer: 1,
      explanation: "Ayat al-Kursi (The Throne Verse) is verse 255 of Surah Al-Baqarah. It is widely regarded as one of the most sublime theological descriptions of Allah's eternal living existence, absolute power, and supreme knowledge.",
      keyConcept: "Theological attributes of Allah in the Quran.",
      examTip: "Verse 282 of Surah Al-Baqarah is the longest single verse in the Quran, governing commercial loan contracts (*Ayat al-Dayn*).",
      testedIn: ["CSS MPT 2024", "PPSC Naib Tehsildar 2022"]
    },
    {
      id: 9,
      question: "The first five verses ever revealed to the Holy Prophet (PBUH) belong to which Surah?",
      options: ["Surah Al-Muddathir", "Surah Al-Muzzammil", "Surah Al-Alaq (Al-Iqra)", "Surah Al-Qadr"],
      answer: 2,
      explanation: "The first revelation occurred in 610 CE in the Cave of Hira, consisting of verses 1 to 5 of Surah Al-Alaq: 'Read in the name of your Lord who created...'",
      keyConcept: "The beginning of revelation (Bi'tha) and the Cave of Hira.",
      examTip: "The second batch of verses revealed were from the opening of Surah Al-Muddathir.",
      testedIn: ["PPSC Tehsildar 2021", "FPSC Screening 2022"]
    },
    {
      id: 10,
      question: "Why was Caliph Hazrat Usman ibn Affan (RA) given the honorable title 'Jami al-Quran' (The Compiler/Standardizer of the Quran)?",
      options: [
        "Because he memorized the entire Quran first",
        "Because he standardized the transcription in the Quraishi dialect and distributed identical copies to all provincial centers",
        "Because he wrote down the entire text with his own hands",
        "Because he constructed the first mosque for Quran recitation"
      ],
      answer: 1,
      explanation: "Hazrat Usman (RA) neutralized regional dialect disputes across the expanding Islamic empire by commissioning a committee (led by Hazrat Zayd ibn Thabit) to transcribe standard codices in the dialect of the Quraish, burning divergent private manuscripts and sending official copies to Makkah, Kufa, Basra, and Damascus.",
      keyConcept: "Standardization of the Uthmanic codex (*Rasm al-Uthmani*).",
      examTip: "Hazrat Abu Bakr is the initial compiler into Suhuf; Hazrat Usman is the standardizer of the official Mushaf.",
      testedIn: ["PPSC PMS GK 2022", "CSS Islamic Studies 2021"]
    }
  ]
});

// Islamiat Set 2: Seerat-un-Nabi & Prophetic Milestones
writeMcqFile({
  subject: 'islamiat',
  topic: 'prophetic-era',
  topicName: 'Seerat-un-Nabi & Prophetic Milestones',
  title: 'Seerat-un-Nabi & Prophetic Milestones MCQs with Explanations',
  description: 'Master Seerat-un-Nabi MCQs for competitive exams. Detailed coverage of Hilf al-Fudul, Mithaq-e-Madina, Treaty of Hudaybiyyah, Ghazwat, and the Farewell Pilgrimage.',
  targetExams: ['CSS', 'PMS', 'PPSC', 'FPSC', 'NTS'],
  editorialContent: `
## Comprehensive Chronology of Seerat-un-Nabi (PBUH)

The life of the Holy Prophet Muhammad (PBUH) provides the moral, administrative, and strategic model for Islamic civilization.

### Key Chronological Milestones
- **570 CE (Year of the Elephant - Aam al-Fil):** Birth of the Prophet (PBUH) in Makkah in the tribe of Banu Hashim.
- **590 CE (Hilf al-Fudul):** An early pre-Islamic chivalric pact formed in Makkah to protect foreign merchants and oppressed travelers against exploitation.
- **610 CE (The Call to Prophethood):** First revelation at Cave of Hira at age 40.
- **615 CE (First Hijrah to Abyssinia):** Muslim emigrants led by Hazrat Ja'far ibn Abi Talib sought asylum under the Christian King Negus (Ashama).
- **619 CE (Aam al-Huzn - The Year of Sorrow):** Demise of the Prophet's protective uncle Abu Talib and beloved wife Hazrat Khadijah (RA). The subsequent journey to Taif.
- **620 CE (Isra and Mi'raj):** Miraculous night journey to Jerusalem and ascension to the Heavens, where the five daily prayers were ordained.
- **622 CE (Hijrah to Madinah):** Marking year 1 AH of the Islamic calendar. Formulation of the Charter of Medina (Mithaq al-Madina), uniting Muslims and Jewish tribes in mutual defense.
- **Major Ghazwat:**
  - *Badr (2 AH / 624 CE):* 313 Muslims against 1,000 Quraish. Decisive victory.
  - *Uhud (3 AH / 625 CE):* Defensive engagement at Mount Uhud.
  - *Khandaq / Ahzab (5 AH / 627 CE):* Trench warfare suggested by Hazrat Salman Farsi (RA).
  - *Hudaybiyyah (6 AH / 628 CE):* Strategic 10-year truce with the Quraish.
  - *Khaybar (7 AH / 629 CE):* Conquest of Jewish fortresses, led by Hazrat Ali (RA).
  - *Conquest of Makkah (8 AH / 630 CE):* Bloodless conquest followed by general amnesty.
  - *Tabuk (9 AH / 630 CE):* Expedition against the Byzantine frontier forces.
  - *Hajjat-ul-Wida (10 AH / 632 CE):* The Farewell Pilgrimage and universal declaration of human rights.
`,
  questions: [
    {
      id: 1,
      question: "The historic Charter of Medina (Mithaq-e-Madina), considered the world's first written constitution, was drafted in which year of the Hijri calendar?",
      options: ["1 AH (622 CE)", "2 AH (624 CE)", "5 AH (627 CE)", "8 AH (630 CE)"],
      answer: 0,
      explanation: "Mithaq-e-Madina was promulgated in 1 AH (622 CE) shortly after the migration from Makkah. It established a civic federation between the Muhajirun, Ansar, and Jewish tribes, guaranteeing religious freedom, communal solidarity, and mutual defense.",
      keyConcept: "Constitutional pluralism and civic governance in early Islamic society.",
      examTip: "It comprised 52 distinct clauses establishing equal citizenship and judicial arbitration under the Prophet (PBUH).",
      testedIn: ["CSS Islamic Studies 2022", "PPSC Tehsildar 2021"]
    },
    {
      id: 2,
      question: "In the Battle of Badr (17 Ramadan, 2 AH), what was the exact size of the Muslim army facing the 1,000-strong army of the Quraish?",
      options: ["250 men", "313 men", "500 men", "700 men"],
      answer: 1,
      explanation: "The Muslim forces at the Battle of Badr numbered exactly 313 men, possessing only two horses and seventy camels. Despite overwhelming odds, they achieved a decisive victory, neutralizing leading pagan leaders including Abu Jahl.",
      keyConcept: "Military strategy, morale, and divine assistance in the foundational battle of Islam.",
      examTip: "The Quran refers to the day of Badr as 'Yawm al-Furqan' (The Day of Criterion).",
      testedIn: ["PPSC Lecturer 2022", "FPSC Custom Inspector 2023"]
    },
    {
      id: 3,
      question: "The strategic idea to dig a defensive trench around the vulnerable northern border of Madinah in the Battle of the Trench (5 AH) was proposed by which companion?",
      options: ["Hazrat Salman Farsi (RA)", "Hazrat Khalid ibn al-Walid (RA)", "Hazrat Abu Ubaidah ibn al-Jarrah (RA)", "Hazrat Bilal Habashi (RA)"],
      answer: 0,
      explanation: "Hazrat Salman al-Farsi (RA) advised digging a ditch (Khandaq), a Persian defensive technique unfamiliar to Arabian tribal warfare, which neutralized the 10,000-strong coalition (*Ahzab*) besieging Madinah.",
      keyConcept: "Cross-cultural strategic borrowing and innovative military defense.",
      examTip: "Also known as Ghazwa al-Ahzab; commemorated in Surah 33 of the Holy Quran.",
      testedIn: ["PPSC PMS GK 2021", "FPSC AD FIA 2022"]
    },
    {
      id: 4,
      question: "The Treaty of Hudaybiyyah, signed in 6 AH between the Muslims and the Quraish, established a truce of how many years?",
      options: ["3 Years", "5 Years", "7 Years", "10 Years"],
      answer: 3,
      explanation: "The Treaty of Hudaybiyyah instituted a 10-year cessation of hostilities between the Muslims of Madinah and the Quraish of Makkah, allowing Muslims to freely convey the message of Islam across Arabia.",
      keyConcept: "Diplomatic pragmatism, conflict de-escalation, and long-term strategic vision.",
      examTip: "The Holy Quran designated this treaty as 'Fathan Mubeena' (A Manifest Victory) in Surah Al-Fath.",
      testedIn: ["CSS MPT 2022", "PPSC Sub-Inspector 2023"]
    },
    {
      id: 5,
      question: "Who represented the Quraish as their chief envoy and negotiator in signing the Treaty of Hudaybiyyah?",
      options: ["Abu Sufyan ibn Harb", "Suhayl ibn Amr", "Ikrimah ibn Abi Jahl", "Safwan ibn Umayyah"],
      answer: 1,
      explanation: "Suhayl ibn Amr was dispatched by the Quraish to negotiate the terms of Hudaybiyyah. Hazrat Ali ibn Abi Talib (RA) served as the official scribe recording the text of the treaty.",
      keyConcept: "Diplomatic representation and negotiations in pre-conquest Arabia.",
      examTip: "Suhayl insisted on striking out 'Muhammad, the Messenger of Allah' to read 'Muhammad, son of Abdullah'.",
      testedIn: ["PPSC Tehsildar 2022", "FPSC Screening 2023"]
    },
    {
      id: 6,
      question: "During which historic expedition did the Holy Prophet (PBUH) conquer the fortified oasis of Khaybar in 7 AH, conferring the banner upon Hazrat Ali (RA)?",
      options: ["Ghazwa Tabuk", "Ghazwa Khaybar", "Ghazwa Hunayn", "Ghazwa Mu'tah"],
      answer: 1,
      explanation: "In 7 AH, Muslims marched against Khaybar. The famous fortress of Qamus was conquered under the leadership of Hazrat Ali (RA), who earned the title 'Asadullah' (Lion of Allah) for his valor.",
      keyConcept: "Fortress warfare, agrarian tenancy agreements (*Musaqat*), and political consolidation.",
      examTip: "Following Khaybar, the Jewish farmers agreed to cultivate the land in exchange for half of the annual harvest.",
      testedIn: ["CSS Islamic Studies 2021", "PPSC Assistant 2023"]
    },
    {
      id: 7,
      question: "The bloodless Conquest of Makkah (Fath-e-Makkah) occurred in which Hijri year?",
      options: ["6 AH", "7 AH", "8 AH (630 CE)", "10 AH"],
      answer: 2,
      explanation: "The Conquest of Makkah occurred in Ramadan, 8 AH (January 630 CE) with an army of 10,000 Muslims following the breach of the Treaty of Hudaybiyyah by the Banu Bakr allies of the Quraish.",
      keyConcept: "Magnanimity in victory and the declaration of universal general amnesty.",
      examTip: "The Prophet (PBUH) quoted Prophet Yusuf (AS): 'No blame will there be upon you today. May Allah forgive you.'",
      testedIn: ["PPSC Lecturer 2021", "NTS NAT 2023"]
    },
    {
      id: 8,
      question: "Which battle fought in 8 AH near Taif saw Muslims initially face disorder due to pride in their numerical superiority (12,000 troops), as referenced in Surah At-Tawbah?",
      options: ["Battle of Uhud", "Battle of Hunayn", "Battle of Tabuk", "Battle of Mu'tah"],
      answer: 1,
      explanation: "The Battle of Hunayn was fought against the Hawazin and Thaqif confederation. Surah At-Tawbah (verse 25) notes: 'When your great numbers made you feel proud, but they availed you nothing.'",
      keyConcept: "Spiritual discipline, psychological humility, and military perseverance.",
      examTip: "Do not confuse Hunayn (8 AH, numerical superiority) with Uhud (3 AH, archers leaving their posts).",
      testedIn: ["PPSC PMS GK 2020", "FPSC Inspector 2024"]
    },
    {
      id: 9,
      question: "During the Farewell Pilgrimage (Hujjat-ul-Wida) in 10 AH, the Prophet (PBUH) delivered his historic sermon from which location in the plain of Arafat?",
      options: ["Mount Uhud", "Jabal al-Rahmah (Mount of Mercy)", "Cave of Thawr", "Mina Valley"],
      answer: 1,
      explanation: "The Farewell Sermon was delivered from the heights of Jabal al-Rahmah on the 9th of Dhul Hijjah, 10 AH, establishing universal equality: 'No Arab has superiority over a non-Arab, nor a non-Arab over an Arab.'",
      keyConcept: "Universal declaration of human rights, abolition of racial superiority, and protection of life and property.",
      examTip: "The sermon abolished usury (Riba) and blood feuds, and safeguarded women's rights.",
      testedIn: ["CSS Islamic Studies 2023", "PPSC Tehsildar 2021"]
    },
    {
      id: 10,
      question: "The last military expedition ordered by the Holy Prophet (PBUH) before his demise was placed under the command of which young companion?",
      options: ["Hazrat Usama ibn Zayd (RA)", "Hazrat Khalid ibn al-Walid (RA)", "Hazrat Sa'd ibn Abi Waqqas (RA)", "Hazrat Ammar ibn Yasir (RA)"],
      answer: 0,
      explanation: "The Prophet (PBUH) appointed 18-year-old Hazrat Usama ibn Zayd (RA) to command an expedition to the Syrian borders. Following the Prophet's demise, Caliph Hazrat Abu Bakr (RA) prioritized dispatching the Army of Usama.",
      keyConcept: "Meritocracy over ageism and continuity of prophetic military directives.",
      examTip: "Hazrat Usama was the son of Hazrat Zayd ibn Harithah (RA), the martyred commander of Mu'tah.",
      testedIn: ["PPSC Assistant 2023", "FPSC AD FIA 2023"]
    }
  ]
});

console.log('Finished writing 2 Islamiat MCQ sets!');
