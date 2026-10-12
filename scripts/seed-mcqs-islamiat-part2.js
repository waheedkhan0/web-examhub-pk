import { writeMcqFile } from './mcq-helper.js';

// Islamiat Set 3: Khulafa-e-Rashideen
writeMcqFile({
  subject: 'islamiat',
  topic: 'rightly-guided-caliphs',
  topicName: 'Khulafa-e-Rashideen (Rightly Guided Caliphs)',
  title: 'Khulafa-e-Rashideen (Rightly Guided Caliphs) MCQs with Explanations',
  description: 'In-depth MCQs on the 30-year Caliphate (11–40 AH). Battles, administrative reforms, Bayt al-Mal, police department, conquests, and martyr dates of Hazrat Abu Bakr, Umar, Usman, and Ali (RA).',
  targetExams: ['CSS', 'PMS', 'PPSC', 'FPSC', 'NTS'],
  editorialContent: `
## The Era of the Rightly Guided Caliphate (11–40 AH / 632–661 CE)

The 30-year period of Khilafat-e-Rashida represents the golden era of Islamic governance, characterized by consultation (*Shura*), separation of powers, welfare accountability, and judicial independence.

### The Four Caliphs & Institutional Legacies
1. **Hazrat Abu Bakr As-Siddiq (RA) [11–13 AH / 632–634 CE]:**
   - Preserved state integrity against apostasy and false prophets (Musaylimah, Tulayha, Sajjah, Aswad Ansi) in the Ridda Wars.
   - Enforced compulsory collection of Zakat against rebellious tribes (*Mani'een-e-Zakat*).
   - Initiated the formal scribal compilation of the Holy Quran following the Battle of Yamama.
2. **Hazrat Umar ibn Al-Khattab (Farooq-e-Azam) [13–23 AH / 634–644 CE]:**
   - Expanded state administration: established the Public Treasury (*Bayt al-Mal*), Department of Judiciary (*Qada*), Police Force (*Ahdath*), Land Revenue Census (*Kharaj/Jizya*), and the Islamic Hijri calendar (638 CE).
   - Decisive military campaigns against the Persian Empire (Battle of Qadisiyyah 15 AH, Nihawand 21 AH) and Byzantine Empire (Battle of Yarmouk 15 AH, peaceful surrender of Jerusalem 16 AH).
3. **Hazrat Usman ibn Affan (Dhun-Nurayn) [23–35 AH / 644–656 CE]:**
   - Constructed the first Islamic naval fleet under Muawiyah and Abdullah ibn Sa'd, securing the Battle of the Masts (Dhat al-Sawari 34 AH).
   - Standardized the single canonical recitation of the Holy Quran (*Mushaf al-Imam*).
4. **Hazrat Ali ibn Abi Talib (Asadullah) [35–40 AH / 656–661 CE]:**
   - Shifted the administrative capital from Madinah to Kufa.
   - Emphasized administrative accountability and judicial independence, as detailed in his famous treatise/letter to the Governor of Egypt, Malik al-Ashtar.
`,
  questions: [
    {
      id: 1,
      question: "Which caliph officially introduced the Islamic Hijri calendar system, fixing its epoch to the year of the Prophet's migration to Madinah?",
      options: ["Hazrat Abu Bakr (RA)", "Hazrat Umar ibn Al-Khattab (RA)", "Hazrat Usman ibn Affan (RA)", "Hazrat Ali ibn Abi Talib (RA)"],
      answer: 1,
      explanation: "Caliph Hazrat Umar (RA) established the Hijri calendar in 16 AH (638 CE) following consultation with Hazrat Ali and other companions, establishing the month of Muharram of the year of the Prophet's Hijrah (622 CE) as the starting point.",
      keyConcept: "Administrative standardization and calendrical institutions in Islamic history.",
      examTip: "The Hijri calendar is strictly lunar, comprising 354 or 355 days in a year.",
      testedIn: ["PPSC Tehsildar 2021", "CSS MPT 2022"]
    },
    {
      id: 2,
      question: "The historic Battle of Qadisiyyah (15 AH / 636 CE), which broke the military backbone of the Sasanian Persian Empire, was commanded by which companion?",
      options: ["Hazrat Khalid ibn al-Walid (RA)", "Hazrat Sa'd ibn Abi Waqqas (RA)", "Hazrat Abu Ubaidah ibn al-Jarrah (RA)", "Hazrat Amr ibn al-Aas (RA)"],
      answer: 1,
      explanation: "Hazrat Sa'd ibn Abi Waqqas (RA) commanded the Muslim forces at Qadisiyyah against the Persian army led by Rostam Farrokhzad. Rostam was slain, opening the fertile Mesopotamian plains to Muslim administration.",
      keyConcept: "Pivotal military engagements in the expansion of early Islamic territories.",
      examTip: "Hazrat Khalid ibn al-Walid commanded Yarmouk against Byzantium; Sa'd ibn Abi Waqqas commanded Qadisiyyah against Persia.",
      testedIn: ["FPSC Custom Inspector 2023", "PPSC Lecturer 2022"]
    },
    {
      id: 3,
      question: "The first regular naval fleet in Islamic history was established during the caliphate of which Rightly Guided Caliph?",
      options: ["Hazrat Abu Bakr (RA)", "Hazrat Umar (RA)", "Hazrat Usman (RA)", "Hazrat Ali (RA)"],
      answer: 2,
      explanation: "Hazrat Usman ibn Affan (RA) authorized the creation of the first Islamic navy, organized by Muawiyah ibn Abi Sufyan (Governor of Syria) and Abdullah ibn Abi Sarh (Governor of Egypt), resulting in the naval victory at the Battle of the Masts (34 AH).",
      keyConcept: "Maritime warfare and strategic evolution of the early caliphate.",
      examTip: "Hazrat Umar had previously avoided naval expeditions due to safety concerns for his soldiers.",
      testedIn: ["PPSC PMS GK 2021", "CSS Islamic Studies 2022"]
    },
    {
      id: 4,
      question: "Hazrat Ali (RA) shifted the administrative capital of the Islamic Caliphate from Madinah to which city in 36 AH?",
      options: ["Damascus", "Kufa", "Basra", "Baghdad"],
      answer: 1,
      explanation: "Hazrat Ali (RA) shifted the capital to Kufa (in modern-day Iraq) in 36 AH to maintain closer military and administrative control over the central provinces of Iraq, Persia, and Arabia during political turbulence.",
      keyConcept: "Geopolitical administration and shifting urban capitals in the Islamic world.",
      examTip: "Muawiyah later established Damascus as the Umayyad capital; Abbasids founded Baghdad in 762 CE.",
      testedIn: ["PPSC Assistant 2023", "NTS NAT 2023"]
    },
    {
      id: 5,
      question: "What was the total duration of the Khilafat-e-Rashida (The Rightly Guided Caliphate) from 11 AH to 40 AH?",
      options: ["20 Years", "25 Years", "30 Years", "40 Years"],
      answer: 2,
      explanation: "According to the famous Hadith in Sunan Abi Dawud ('The Caliphate after me will last thirty years'), the period spanned exactly 30 years from the election of Hazrat Abu Bakr in 11 AH (632 CE) to the martyrdom of Hazrat Ali and subsequent short abdication of Hazrat Hasan in 40-41 AH (661 CE).",
      keyConcept: "Chronological boundaries and canonical hadith predictions of the Caliphate.",
      examTip: "Abu Bakr (approx. 2.2 years), Umar (approx. 10.5 years), Usman (approx. 12 years), Ali (approx. 4.8 years) = ~30 years.",
      testedIn: ["PPSC Sub-Inspector 2022", "FPSC Screening 2023"]
    },
    {
      id: 6,
      question: "Hazrat Umar ibn Al-Khattab (RA) established which dedicated welfare and fiscal institution to oversee state revenues, pensions, and public stipends?",
      options: ["Diwan al-Jund", "Bayt al-Mal", "Diwan al-Kharaj", "Dar al-Qaza"],
      answer: 1,
      explanation: "Hazrat Umar formalized the Bayt al-Mal (Public Treasury) as an autonomous financial institution, establishing regular public welfare stipends for widows, orphans, disabled citizens, and stipends for soldiers (*Diwan al-Ata*).",
      keyConcept: "Socioeconomic welfare, public finance, and institutional transparency.",
      examTip: "Hazrat Umar also conducted the first agricultural land survey and census in Sawad (Iraq).",
      testedIn: ["PPSC Tehsildar 2022", "CSS Islamic Studies 2021"]
    },
    {
      id: 7,
      question: "Who was the Roman/Byzantine emperor during the caliphates of Hazrat Abu Bakr and Hazrat Umar when Syria and Jerusalem were liberated?",
      options: ["Emperor Justinian", "Emperor Heraclius", "Emperor Constantine", "Emperor Nero"],
      answer: 1,
      explanation: "Heraclius was the Byzantine emperor (610–641 CE). When his armies suffered defeat at Yarmouk, he famously lamented: 'Farewell, a long farewell to Syria!' as his legions withdrew to Constantinople.",
      keyConcept: "Byzantine-Arab relations and late antiquity geopolitics.",
      examTip: "The Persian king during this period was Yazdegerd III.",
      testedIn: ["PPSC PMS GK 2022", "FPSC Inspector 2023"]
    },
    {
      id: 8,
      question: "Which Rightly Guided Caliph was bestowed the honorific title 'Dhun-Nurayn' (Possessor of the Two Lights)?",
      options: ["Hazrat Abu Bakr (RA)", "Hazrat Umar (RA)", "Hazrat Usman (RA)", "Hazrat Ali (RA)"],
      answer: 2,
      explanation: "Hazrat Usman ibn Affan (RA) was titled Dhun-Nurayn because he had the singular honor of marrying two daughters of the Holy Prophet (PBUH)—Hazrat Ruqayyah (RA) and, following her demise, Hazrat Umm Kulthum (RA).",
      keyConcept: "Genealogy, status, and prophetic titles of the companions.",
      examTip: "Abu Bakr was titled 'As-Siddiq'; Umar 'Al-Farooq'; Ali 'Asadullah' and 'Abu Turab'.",
      testedIn: ["PPSC Assistant 2024", "NTS GAT 2023"]
    },
    {
      id: 9,
      question: "The peaceful treaty for the surrender of Jerusalem (Ilya) in 16 AH was signed directly by Caliph Hazrat Umar (RA) with which Christian Patriarch?",
      options: ["Patriarch Sophronius", "Patriarch Athanasius", "Patriarch Cyril", "Patriarch Chrysostom"],
      answer: 0,
      explanation: "Patriarch Sophronius of Jerusalem insisted on surrendering the holy city only to Caliph Umar in person. Umar traveled from Madinah with a single servant, entered humbly on foot, and granted the Christians freedom of worship and safety of property (*Al-Uhda al-Umariyya*).",
      keyConcept: "Religious tolerance, civic protection covenants, and Christian-Muslim diplomacy.",
      examTip: "Hazrat Umar famously declined to pray inside the Church of the Holy Sepulchre so Muslims would not later convert it into a mosque.",
      testedIn: ["CSS Islamic Studies 2023", "PPSC Tehsildar 2021"]
    },
    {
      id: 10,
      question: "Hazrat Ali ibn Abi Talib (RA) was martyred in the Grand Mosque of Kufa in 40 AH by which Kharijite assassin?",
      options: ["Abu Lu'lu'ah Fayruz", "Abdur Rahman ibn Muljam", "Musaylimah", "Ibn Saba"],
      answer: 1,
      explanation: "Hazrat Ali (RA) was struck with a poisoned sword during Fajr prayers on 19 Ramadan, 40 AH by Abdur Rahman ibn Muljam, a fanatic member of the Kharijite sect, and was martyred two days later.",
      keyConcept: "Origins of internal sectarianism (Khawarij) and the end of the Rightly Guided era.",
      examTip: "Hazrat Umar was martyred by Abu Lu'lu'ah Fayruz (a Persian slave); Hazrat Ali by Ibn Muljam.",
      testedIn: ["PPSC Sub-Inspector 2023", "FPSC AD FIA 2024"]
    }
  ]
});

// Islamiat Set 4: Pillars of Islam & Fiqh
writeMcqFile({
  subject: 'islamiat',
  topic: 'pillars-and-jurisprudence',
  topicName: 'Pillars of Islam & Jurisprudence (Fiqh)',
  title: 'Pillars of Islam & Islamic Jurisprudence (Fiqh) MCQs with Explanations',
  description: 'Master Islamic Jurisprudence MCQs. Nisab of Zakat, Ushr, Hajj rituals, Salat exemptions, primary sources of Fiqh (Quran, Sunnah, Ijma, Qiyas), and the four Sunni Juristic Imams.',
  targetExams: ['CSS', 'PMS', 'PPSC', 'FPSC', 'NTS'],
  editorialContent: `
## Islamic Jurisprudence (Fiqh) & Foundational Pillars (Arkan al-Islam)

Islamic law is built upon divine revelation articulated into dynamic practical codes through established juristic methodologies.

### The Four Primary Sources of Islamic Law (*Usul al-Fiqh*)
1. **The Holy Quran:** The definitive, primary textual revelation.
2. **The Sunnah:** The authentic sayings, actions, and approvals of Prophet Muhammad (PBUH) which elaborate and clarify Quranic injunctions.
3. **Ijma (Consensus):** The unanimous legal consensus of qualified Muslim jurists (*Mujtahidun*) of a specific era upon a novel legal question.
4. **Qiyas (Analogical Deduction):** Deriving a legal ruling for a new issue by finding an identical underlying rationale (*'Illah*) in an established Quranic or Prophetic ordinance.

### The Four Major Sunni Schools of Fiqh
- **Hanafi School:** Founded by Imam Abu Hanifa (Nu'man ibn Thabit, 80–150 AH) in Kufa. Known for structured analogical deduction (*Qiyas*) and juristic preference (*Istihsan*). Predominant in Pakistan, Turkey, and Central Asia.
- **Maliki School:** Founded by Imam Malik ibn Anas (93–179 AH) in Madinah. Author of *Al-Muwatta*, heavily emphasizing the living practice of the people of Madinah (*Amal Ahl al-Madinah*).
- **Shafi'i School:** Founded by Imam Muhammad ibn Idris al-Shafi'i (150–204 AH). Author of *Al-Risala*, standardizing principles of Islamic jurisprudence.
- **Hanbali School:** Founded by Imam Ahmad ibn Hanbal (164–241 AH) in Baghdad. Author of *Musnad Ahmad*, emphasizing strict adherence to textual Hadith traditions.
`,
  questions: [
    {
      id: 1,
      question: "What is the minimum threshold of silver (*Nisab of Silver*) that renders a Muslim legally obligated to pay Zakat?",
      options: ["7.5 Tolas (approx. 87.48 grams)", "52.5 Tolas (approx. 612.36 grams)", "100 Tolas", "25 Tolas"],
      answer: 1,
      explanation: "The Nisab of Silver is 52.5 tolas (approx. 612.36 grams or 200 dirhams). For gold, the Nisab is 7.5 tolas (approx. 87.48 grams or 20 dinars). Once wealth exceeding this threshold is held for one full lunar year (*Hawlan al-Hawl*), Zakat at 2.5% becomes mandatory.",
      keyConcept: "Principles of Islamic wealth distribution and Nisab valuation.",
      examTip: "Nisab for Gold = 7.5 tolas; Nisab for Silver = 52.5 tolas. Standard rate is 2.5% (1/40th).",
      testedIn: ["PPSC Tehsildar 2021", "CSS MPT 2023"]
    },
    {
      id: 2,
      question: "What is the prescribed Islamic rate of 'Ushr' (agricultural tithe) on produce cultivated on lands irrigated naturally by rainfall or river inundation?",
      options: ["2.5% (One-fortieth)", "5% (One-twentieth)", "10% (One-tenth)", "20% (One-fifth)"],
      answer: 2,
      explanation: "In Islamic law, agricultural yield from lands irrigated naturally without human labor (rain, springs, river flooding) is subject to 10% (one-tenth) Ushr. If the land is irrigated through artificial means involving labor and capital (tube-wells, canals), the rate is halved to 5% (one-twentieth).",
      keyConcept: "Agrarian taxation principles based on labor input and capital expenditure.",
      examTip: "Natural irrigation = 10%; Artificial irrigation = 5%. Do not confuse with standard liquid asset Zakat of 2.5%.",
      testedIn: ["PPSC PMS GK 2021", "FPSC Custom Inspector 2022"]
    },
    {
      id: 3,
      question: "The primary source of Islamic Jurisprudence after the Holy Quran and Sunnah, representing unanimous consensus of Islamic scholars on a legal ruling, is called:",
      options: ["Qiyas", "Ijma", "Ijtihad", "Istihsan"],
      answer: 1,
      explanation: "Ijma is the third source of Islamic law, defined as the unanimous consensus of Muslim jurists on a particular religious ruling in any given generation after the demise of the Prophet (PBUH).",
      keyConcept: "Sources of Islamic jurisprudence (*Usul al-Fiqh*).",
      examTip: "Hierarchy: 1. Quran -> 2. Sunnah -> 3. Ijma -> 4. Qiyas.",
      testedIn: ["CSS Islamic Studies 2022", "PPSC Lecturer 2022"]
    },
    {
      id: 4,
      question: "Imam Abu Hanifa (Nu'man ibn Thabit), the founder of the Hanafi School of Jurisprudence followed by the majority of Muslims in Pakistan, was born in which city?",
      options: ["Madinah", "Baghdad", "Kufa", "Damascus"],
      answer: 2,
      explanation: "Imam Abu Hanifa (80–150 AH / 699–767 CE) was born in Kufa, Iraq during the Umayyad Caliphate. He studied under Imam Hammad ibn Abi Sulayman and became the pioneer of systematic Islamic jurisprudence.",
      keyConcept: "Founders of Islamic juristic schools (*Madhahib*).",
      examTip: "Imam Abu Hanifa died in Baghdad in 150 AH—the exact year Imam Shafi'i was born in Gaza.",
      testedIn: ["PPSC Assistant 2023", "FPSC Screening 2023"]
    },
    {
      id: 5,
      question: "How many obligatory categories of recipients (*Masarif al-Zakat*) are explicitly stipulated in Surah At-Tawbah (verse 60) of the Holy Quran?",
      options: ["6 Categories", "8 Categories", "10 Categories", "12 Categories"],
      answer: 1,
      explanation: "Surah At-Tawbah (9:60) specifies exactly eight heads of Zakat: 1. The poor (Fuqara), 2. The needy (Masakin), 3. Zakat administrators (Amilina Alayha), 4. Those whose hearts are to be reconciled (Mu'allafat al-Qulub), 5. Freeing slaves (Riqab), 6. Debtors (Gharimin), 7. In the cause of Allah (Fi Sabilillah), and 8. The stranded traveler (Ibn al-Sabil).",
      keyConcept: "Statutory beneficiaries of Islamic welfare transfers.",
      examTip: "Zakat cannot be given to immediate direct ascendants (parents/grandparents) or descendants (children/grandchildren), or the descendants of Banu Hashim.",
      testedIn: ["PPSC Tehsildar 2022", "CSS MPT 2024"]
    },
    {
      id: 6,
      question: "The essential climax and most critical compulsory pillar (Rukn) of Hajj, without which the pilgrimage is legally invalid, is the standing (*Wuquf*) at which location on the 9th of Dhul Hijjah?",
      options: ["Mina", "Muzdalifah", "Plain of Arafat", "Safa and Marwah"],
      answer: 2,
      explanation: "Standing at the Plain of Arafat (Wuquf-e-Arafat) from noon until sunset on the 9th of Dhul Hijjah is the core pillar of Hajj. The Prophet (PBUH) emphatically declared: 'Al-Hajju Arafah' (Hajj is Arafah).",
      keyConcept: "Pillars and rites of the Hajj pilgrimage.",
      examTip: "Spending the night at Muzdalifah and pelting the Jamarat in Mina are Wajibat (obligatory rites), but Wuquf-e-Arafat is a primary Fardh pillar.",
      testedIn: ["PPSC PMS GK 2022", "FPSC Inspector 2023"]
    },
    {
      id: 7,
      question: "Who authored 'Al-Muwatta', the earliest surviving codification of Islamic law and authentic Hadith based on the traditions of Madinah?",
      options: ["Imam Abu Hanifa", "Imam Malik ibn Anas", "Imam Muhammad al-Bukhari", "Imam Muslim ibn al-Hajjaj"],
      answer: 1,
      explanation: "Imam Malik ibn Anas (93–179 AH) compiled Al-Muwatta in Madinah. It is considered one of the earliest and most respected compilations combining prophetic traditions and legal rulings of the companions.",
      keyConcept: "Early legal literature and compilation of Hadith traditions.",
      examTip: "Imam Shafi'i famously remarked: 'There is no book on earth after the Book of Allah more authentic than the Muwatta of Malik.'",
      testedIn: ["CSS Islamic Studies 2021", "PPSC Lecturer 2023"]
    },
    {
      id: 8,
      question: "In Islamic legal terminology, 'Qiyas' refers to which method of jurisprudence?",
      options: ["Public interest consideration", "Analogical deduction linking an unaddressed issue to an established text via a common legal cause ('Illah)", "Customary commercial practice", "Unanimous juristic consensus"],
      answer: 1,
      explanation: "Qiyas is the process of deductive analogy in which the teachings of the Hadith and Quran are compared and applied to an issue not explicitly mentioned in the original texts, linked by an identical underlying reason (*'Illah*).",
      keyConcept: "Methodology of legal reasoning in Usul al-Fiqh.",
      examTip: "The four components of Qiyas are: Asl (original root case), Far' (novel branch case), Hukm (ruling on the root), and 'Illah (underlying cause).",
      testedIn: ["PPSC Tehsildar 2022", "FPSC Screening 2024"]
    },
    {
      id: 9,
      question: "What is the legal Islamic ruling (*Hukm*) regarding shortening four-rak'ah prayers to two rak'ahs (*Qasr*) while undertaking a legitimate journey exceeding approximately 48 miles (77 km)?",
      options: ["Forbidden (Haram)", "Recommended dispensation (Rukhsa / Sunnah Mu'akkada)", "Strictly disliked (Makruh)", "Nullifies the prayer"],
      answer: 1,
      explanation: "Shortening prayers during travel is an explicit divine dispensation (*Rukhsa*) established in Surah An-Nisa (4:101) and practiced by the Prophet (PBUH) throughout his journeys. Zuhr, Asr, and Isha are shortened to two rak'ahs each.",
      keyConcept: "Dispensation and facilitation in Islamic worship rules (*Rukhsah vs. Azeemah*).",
      examTip: "Maghrib (3 rak'ahs) and Fajr (2 rak'ahs) are never shortened during travel.",
      testedIn: ["PPSC Assistant 2022", "NTS NAT 2023"]
    },
    {
      id: 10,
      question: "Which classical jurist authored 'Kitab al-Risala', laying down the definitive principles and epistemological foundations of Islamic Jurisprudence (*Usul al-Fiqh*)?",
      options: ["Imam Abu Hanifa", "Imam Malik", "Imam Muhammad ibn Idris al-Shafi'i", "Imam Abu Yusuf"],
      answer: 2,
      explanation: "Imam Al-Shafi'i (150–204 AH) authored Al-Risala, which is recognized across the academic world as the first systematic treatise formulating the science of Usul al-Fiqh, integrating rational deduction with textual fidelity.",
      keyConcept: "The codification of Islamic legal philosophy.",
      examTip: "Imam Abu Yusuf (student of Abu Hanifa) authored 'Kitab al-Kharaj' on fiscal state finance.",
      testedIn: ["CSS Islamic Studies 2023", "PPSC Lecturer 2021"]
    }
  ]
});

console.log('Finished writing all 4 Islamiat MCQ sets!');
