---
title: Permutation And Combination — Part 1 MCQs with Explanations
description: Practice high-yield Mathematics & Quantitative Ability MCQs on Permutation And Combination — Part 1 with worked academic solutions for CSS, NTS, PPSC, FPSC, PMS.
subject: mathematics
subjectName: Mathematics & Quantitative Ability
topic: permutation-and-combination-part-1
topicName: Permutation And Combination — Part 1
author: ExamHub Academic Editorial Board
updatedDate: "2026-10-14"
difficulty: Exam-Level
targetExams:
  - CSS
  - NTS
  - PPSC
  - FPSC
  - PMS
questions:
  - id: 1
    question: In how many ways can 8 Pakistanis and, 4 American and 4 Englishmen can be seated in a row so that all person of the same nationality sit together?
    options:
      - 3! 4! 8! 4!
      - 3! 8!
      - 4! 4!
      - 8! 4! 4!
    answer: 0
    explanation: Taking all person of same nationality as one person, then we will have only three people. These three person can be arranged themselves in 3! Ways. 8 Pakistanis can be arranged themselves in 8! Way. 4 American can be arranged themselves in 4! Ways. 4 Englishman can be arranged themselves in 4! Ways. Hence, required number of ways = 3! 8! 4! 4! Ways.
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 2
    question: How many Permutations of the letters of the word APPLE are there?
    options:
      - "600"
      - "120"
      - "240"
      - "60"
    answer: 3
    explanation: APPLE = 5 letters. But two letters PP is of same kind. Thus, required permutations, $$\eqalign{ & = \frac{{5!}}{{2!}} \cr & = \frac{{120}}{2} \cr & = 60 \cr} $$
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 3
    question: How many different words can be formed using all the letters of the word ALLAHABAD? (a) When vowels occupy the even positions. (b) Both L do not occur together.
    options:
      - 7560,60,1680
      - 7890,120,650
      - 7650,200,4444
      - None of these
    answer: 3
    explanation: ALLAHABAD = 9 letters. Out of these 9 letters there is 4 A's and 2 L's are there. So, permutations = $$\frac{{9!}}{{4!.2!}}$$ = 7560 (a) There are 4 vowels and all are alike i.e. 4A's. _2 nd _4 th _6 th _8 th _ These even places can be occupied by 4 vowels. In $$\frac{{4!}}{{4!}}$$ = 1 Way. In other five places 5 other letter can be occupied of which two are alike i.e. 2L's. Number of ways = $$\frac{{5!}}{{2!}}$$ Ways. Hence, total number of ways in which vowels occupy the even places = $$\frac{{5!}}{{2!}}$$ × 1 = 60 ways. (b) Taking both L's together and treating them as one letter we have 8 letters out of which A repeats 4 times and others are distinct. These 8 letters can be arranged in $$\frac{{8!}}{{4!}}$$ = 1680 ways. Also two L can be arranged themselves in 2! ways. So, Total no. of ways in which L are together = 1680 × 2 = 3360 ways. Now, Total arrangement in which L never occur together, = Total arrangement - Total no. of ways in which L occur together. = 7560 - 3360 = 4200 ways
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 4
    question: In how many ways can 10 examination papers be arranged so that the best and the worst papers never come together?
    options:
      - 8 × 9!
      - 8 × 8!
      - 7 × 9!
      - 9 × 8!
    answer: 0
    explanation: "The question asks for the number of ways to arrange 10 examination papers so that the best and the worst papers never come together . This type of problem, where certain items \"never come together\", has a common strategy: Total Arrangements - Arrangements Where They ARE Together = Arrangements Where They Are NEVER Together Let's break it down step-by-step: Step 1: Calculate the Total Number of Ways to Arrange all 10 Papers. If we have 10 different papers, and we want to arrange them in a line, the number of ways is given by 10 factorial (10!) . 10! means 10 × 9 × 8 × 7 × 6 × 5 × 4 × 3 × 2 × 1. So, Total arrangements = 10! Step 2: Calculate the Number of Ways where the Best and Worst Papers ARE Together. To make sure the best and worst papers are always together, we can think of them as a single \"block\" or \"unit\" . Imagine tying the best paper and the worst paper together. Now, instead of 10 individual papers, you have: (Paper 1), (Paper 2), ..., (Paper 8), and (Best & Worst Paper Block) . This means you now have 9 items to arrange (8 individual papers + 1 block). These 9 items can be arranged in 9 factorial (9!) ways. BUT, inside the \"Best & Worst Paper Block\", the best paper and the worst paper can swap their positions! They can be arranged in 2 factorial (2!) ways: (Best, Worst) or (Worst, Best) So, the total number of arrangements where the best and worst papers are together is: 9! × 2! Step 3: Calculate the Number of Ways where the Best and Worst Papers NEVER Come Together. Now we use our strategy: Never Together = Total Arrangements - Arrangements Where They ARE Together Never Together = 10! - (9! × 2!) Step 4: Simplify the Expression. We know that 10! can also be written as 10 × 9! And 2! is 2 × 1 = 2 . So, our equation becomes: Never Together = (10 × 9!) - (9! × 2) You can see that 9! is common in both parts. Let's factor it out: Never Together = 9! × (10 - 2) Never Together = 9! × 8 Or, simply, 8 × 9! This matches Option A . Alternative way No. of ways in which 10 paper can arranged is 10! Ways. When the best and the worst papers come together, regarding the two as one paper, we have only 9 papers. These 9 papers can be arranged in 9! Ways. And two papers can be arranged themselves in 2! Ways. No. of arrangement when best and worst paper do not come together, = 10! - 9! × 2! = 9!(10 - 2) = 8 × 9!"
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 5
    question: In how many ways 4 boys and 3 girls can be seated in a row so that they are alternate.
    options:
      - "144"
      - "288"
      - "12"
      - "256"
    answer: 0
    explanation: Let the Arrangement be, B G B G B G B 4 boys can be seated in 4! Ways Girl can be seated in 3! Ways Required number of ways, = 4! × 3! = 144
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 6
    question: A two member committee comprising of one male and one female member is to be constitute out of five males and three females. Amongst the females. Ms. A refuses to be a member of the committee in which Mr. B is taken as the member. In how many different ways can the committee be constituted ?
    options:
      - "11"
      - "12"
      - "13"
      - "14"
    answer: 3
    explanation: 5 C 1 × 3 C 1 - 1 = 15 - 1 = 14
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 7
    question: In how many ways 2 students can be chosen from the class of 20 students?
    options:
      - "190"
      - "180"
      - "240"
      - "390"
    answer: 0
    explanation: Number of ways $$\eqalign{ & { = ^{20}}{{\text{C}}_2} \cr & = \frac{{20!}}{{2! \times 18!}} \cr & = 20 \times \frac{{19}}{2} \cr & = 190 \cr} $$
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 8
    question: Three gentlemen and three ladies are candidates for two vacancies. A voter has to vote for two candidates. In how many ways can one cast his vote?
    options:
      - "9"
      - "30"
      - "36"
      - "15"
    answer: 3
    explanation: There are 6 candidates and a voter has to vote for any two of them. So, the required number of ways is, $$\eqalign{ & { = ^6}{{\text{C}}_2} \cr & = \frac{{6!}}{{2! \times 4!}} \cr & = 15 \cr} $$
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 9
    question: A question paper has two parts, A and B, each containing 10 questions. If a student has to choose 8 from part A and 5 from part B, in how many ways can he choose the questions?
    options:
      - "11340"
      - "12750"
      - "40"
      - "320"
    answer: 0
    explanation: There 10 questions in part A out of which 8 question can be chosen as = 10 C 8 Similarly, 5 questions can be chosen from 10 questions of Part B as = 10 C 5 Hence, total number of ways, $$\eqalign{ & { = ^{10}}{{\text{C}}_8}{ \times ^{10}}{{\text{C}}_5} \cr & = \frac{{10!}}{{2! \times 8!}} \times \frac{{10!}}{{5! \times 5}} \cr & = \left\{ {10 \times \frac{9}{2}} \right\} \times \left\{ {\frac{{10 \times 9 \times 8 \times 7 \times 6}}{{5 \times 4 \times 3 \times 2 \times 1}}} \right\} \cr & = 11340 \cr} $$
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 10
    question: Find the number of triangles which can be formed by joining the angular points of a polygon of 8 sides as vertices.
    options:
      - "56"
      - "24"
      - "16"
      - "8"
    answer: 0
    explanation: A triangle needs 3 points. And polygon of 8 sides has 8 angular points. Hence, number of triangle formed, $$\eqalign{ & { = ^8}{{\text{C}}_3} \cr & = \frac{{8 \times 7 \times 6}}{{1 \times 2 \times 3}} \cr & = 56 \cr} $$
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 11
    question: There are 10 points in a plane out of which 4 are collinear. Find the number of triangles formed by the points as vertices.
    options:
      - "120"
      - "116"
      - "140"
      - "20"
    answer: 1
    explanation: The number of triangle can be formed by 10 points = 10 C 3 Similarly, the number of triangle can be formed by 4 points when no one is collinear = 4 C 3 In the question, given 4 points are collinear, Thus, required number of triangle can be formed, = 10 C 3 - 4 C 3 = 120 - 4 = 116
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 12
    question: In a party every person shakes hands with every other person. If there are 105 hands shakes, find the number of person in the party.
    options:
      - "15"
      - "14"
      - "21"
      - "25"
    answer: 0
    explanation: Let n be the number of persons in the party Number of hands shake = 105 Total number of hands shake is given by n C 2 Now, According to the question, $$\eqalign{ & ^n{{\text{C}}_2} = 105 \cr & {\text{or, }}\frac{{n!}}{{2! \times \left( {n - 2} \right)!}} = 105 \cr & {\text{or, }}\frac{{n \times \left( {n - 1} \right)}}{2} = 105 \cr & {\text{or, }}{n^2} - n = 210 \cr & {\text{or, }}{n^2} - n - 210 = 0 \cr & {\text{or, }}n = 15,\, - 14 \cr} $$ But, we cannot take negative value of n So, n = 15 i.e. number of persons in the party = 15
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 13
    question: The number of positive integers which can be formed by using any number of digits from 0, 1, 2, 3, 4, 5 without repetition.
    options:
      - "1200"
      - "1500"
      - "1600"
      - "1630"
    answer: 3
    explanation: One digit positive numbers = 5 Two digit positive numbers = 25 Three digit positive numbers = 100 4 digit positive numbers = 300 5 digit positive numbers = 600 Six digit positive numbers = 600 Total positive numbers, = 5 + 25 + 100 + 300 + 600 + 600 = 1630
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 14
    question: "In the next World cup of cricket there will be 12 teams, divided equally in two groups. Teams of each group will play a match against each other. From each group 3 top teams will qualify for the next round. In this round each team will play against each others once. Four top teams of this round will qualify for the semifinal round, where they play the best of three matches. The Minimum number of matches in the next World cup will be:"
    options:
      - "54"
      - "53"
      - "38"
      - "43"
      - None of these
    answer: 1
    explanation: The number of matches in first round,= 6 C 2 + 6 C 2 Number of matches in next round, = 6 C 2 Number of matches in semifinals, = 4 C 2 Total number of matches, = 6 C 2 + 6 C 2 + 6 C 2 + 4 C 2 + 2 = 53
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 15
    question: "There are 10 person among whom two are brother. The total number of ways in which these persons can be seated around a round table so that exactly one person sit between the brothers , is equal to:"
    options:
      - 7! × 2!
      - 2! × 8!
      - 3! × 7!
      - 3! × 8!
      - None of these
    answer: 0
    explanation: Total number of ways = 7! × 2!
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 16
    question: "If letters of the work KUBER are written in all possible orders and arranged as in a dictionary, then the rank of the word KUBER will be:"
    options:
      - "67"
      - "68"
      - "65"
      - "69"
    answer: 0
    explanation: "Step 1: Arrange the letters in alphabetical order The word KUBER consists of the letters: B, E, K, R, U (sorted order) Step 2: Count words before \"KUBER\" Words starting with 'B' = 4! = 24 Words starting with 'E' = 4! = 24 Words starting with 'K' and second letter 'B' = 3! = 6 Words starting with 'K' and second letter 'E' = 3! = 6 Words starting with 'K' and second letter 'R' = 3! = 6 Step 3: Find the position of \"KUBER\" After 24 (B) + 24 (E) + 6 (KB) + 6 (KE) + 6 (KR) = 66 words, the next word is KUBER Rank of \"KUBER\" = 67 Final Answer: Option A (67)"
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 17
    question: A letter lock consists of 4 rings, each ring contains 9 non-zero digits. This lock can be opened by setting four digit code with the proper combination of each of the 4 rings. Maximum how many codes can be formed to open the lock ?
    options:
      - "49"
      - "94"
      - 9P4
      - None of these
    answer: 1
    explanation: There are 9 non-zero digits to arrange themselves at 4 different position. Each letter can be arrange at different position in 9 different ways. So, required number of ways, = 9 × 9 × 9 × 9 = 9 4
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 18
    question: 10 students are to be seated in two rows equally for the Mock test in a room. There are two sets of papers, Code A and Code B. each of two rows can have only one set of paper but different that from other row. In how many ways these students can be arranged ?
    options:
      - "2775600"
      - "125600"
      - "7257600"
      - "1200560"
      - None of these
    answer: 2
    explanation: 5 students can be seated out of 10 students in 10 C 5 ways Remaining 5 will be seated in, = 5 C 5 ways Students of each row can be arranged as, = 5! × 5! ways Two sets of paper can be arranged themselves in, = 2! ways Thus, Total arrangement, = 10 C 5 × 5! × 5! × 2 = 7257600
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 19
    question: How many ways can 4 prizes be given away to 3 boys, if each boy is eligible for all the prizes?
    options:
      - "256"
      - "24"
      - "12"
      - None of these
    answer: 1
    explanation: "Let the 3 boys be B 1 , B 2 , B 3 and 4 prizes be P 1 , P 2 , P 3 and P 4 Now B 1 is eligible to receive any of the 4 available prizes (so 4 ways) B 2 will receive prize from rest 3 available prizes(so 3 ways) B 3 will receive his prize from the rest 2 prizes available(so 2 ways) So total ways would be: 4 × 3 × 2 × 1 = 24 Ways Hence, the 4 prizes can be distributed in 24 ways"
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 20
    question: Find the number of ways in which 8064 can be resolved as the product of two factors?
    options:
      - "22"
      - "24"
      - "21"
      - "20"
    answer: 1
    explanation: "Total number of ways in which 8064 can be resolved as the product of two factors is 24 as below: (1,8064), (2,4032), (3,2688), (4,2016), (6,1344), (7,1152), (8,1008), (9,896), (12,672), (14,576), (16,504), (18,448), (21,884), (24,336), (28,288), (32,252), (36,224), (42,192), (48,168), (56,144), (63,128), (68,126), (72,112), (84,96)"
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 21
    question: The letter of the word LABOUR are permuted in all possible ways and the words thus formed are arranged as in a dictionary. What is the rank of the word LABOUR?
    options:
      - "242"
      - "240"
      - "251"
      - "275"
    answer: 0
    explanation: "The order of each letter in the dictionary is ABLORU. Now, with A in the beginning, the remaining letters can be permuted in 5! ways. Similarly, with B in the beginning, the remaining letters can be permuted in 5! ways. With L in the beginning, the first word will be LABORU, the second will be LABOUR. Hence, the rank of the word LABOUR is, 5! + 5! + 2 = 120 + 120 + 2 = 242 Note: 5! = 5 × 4 × 3 × 2 × 1 = 120"
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 22
    question: A class photograph has to be taken. The front row consists of 6 girls who are sitting. 20 boys are standing behind. The two corner positions are reserved for the 2 tallest boys. In how many ways can the students be arranged?
    options:
      - 6! × 1440
      - 18! × 1440
      - 18! × 2! × 1440
      - None of these
    answer: 1
    explanation: "Two tallest boys can be arranged in 2! ways, rest 18 can be arranged in 18! ways. Girls can be arranged in 6! ways. Total number of ways in which all the students can be arranged, = 2! × 18! × 6! = 18! × 1440 Note: N! = N × (N - 1) × (N - 2) × . . . . × 1 So, 18! = 18 × 17 × 16 × 15 . . . . . . . . × 1"
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 23
    question: If $$5{ \times ^{\text{n}}}{{\text{P}}_3} = 4{ \times ^{\left( {{\text{n}} + 1} \right)}}{{\text{P}}_{3,}}$$ find n?
    options:
      - "10"
      - "11"
      - "12"
      - "14"
    answer: 3
    explanation: "n P 3 = n × (n–1) × (n–2) (n+1) P 3 = (n+1) × n × (n–1) Now, 5 × n × (n–1) × (n–2) = 4 × (n+1) × n × (n–1) Or, 5(n−2) = 4(n+1) Or, 5n − 10 = 4n + 4 Or, 5n − 4n = 4 + 10 Hence, n = 14 Note: n P r = $$\\frac{{{\\text{n}}!}}{{\\left( {{\\text{n}} - {\\text{r}}} \\right)!}}$$"
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 24
    question: "Ten different letters of alphabet are given, words with 5 letters are formed from these given letters. Then, the number of words which have at least one letter repeated is:"
    options:
      - "69760"
      - "30240"
      - "99748"
      - "42386"
    answer: 0
    explanation: Number of words which have at least one letter replaced, = Total number of words - total number of words in which no letter is repeated. = 10 5 – 16 P 5 = 100000 − 30240 = 69760
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 25
    question: 12 chairs are arranged in a row and are numbered 1 to 12. 4 men have to be seated in these chairs so that the chairs numbered 1 to 8 should be occupied and no two men occupy adjacent chairs. Find the number of ways the task can be done.
    options:
      - "360"
      - "384"
      - "432"
      - "470"
    answer: 1
    explanation: Given there are 12 numbered chairs, such that chairs numbered 1 to 8 should be occupied. 1, 2, 3, 4, 5, 6, 7, 8 , 9, 10, 11, 12 The various combinations of chairs that ensure that no two men are sitting together are listed. (1, 3, 5, __ ), The fourth chair can be 5,6,10,11 or 12, hence 5 ways. (1, 4, 8, __ ), The fourth chair can be 6,10,11 or 12 hence 4 ways. (1, 5, 8, __ ), the fourth chair can be 10,11 or 12 hence 3 ways. (1, 6, 8, __ ), the fourth chair can be 10,11 or 12 hence 3 ways. (1, 8, 10, 12) is also one of the combinations. Hence, 16 such combinations exist. In case of each these combinations we can make the four men inter arrange in 4! ways. Hence, the required result =16 × 4! = 384
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 26
    question: How many words can be formed by re-arranging the letters of the word ASCENT such that A and T occupy the first and last position respectively?
    options:
      - 6! × 2!
      - 6! – 2!
      - 4!
      - 5!
    answer: 2
    explanation: As A and T should occupy the first and last position, the first and last position can be filled in only one following way. A _ _ _ _ T. The remaining 4 positions can be filled in 4! Ways by the remaining words (S, C, E, N, T). Hence by rearranging the letters of the word ASCENT we can form, 1 x 4! = 4! Words.
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 27
    question: If 6 P r = 360 and If 6 C r = 15, find r ?
    options:
      - "5"
      - "6"
      - "4"
      - "3"
    answer: 2
    explanation: n P r = n C r × r! 6 P r = 15 × r! 360 = 15 × r! r! = $$\frac{{360}}{{15}}$$ = 24 r! = 4 × 3 × 2 × 1 ⇒ r! = 4! Therefore, r = 4
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 28
    question: In how many ways can six different rings be worn on four fingers of one hand?
    options:
      - "16"
      - "24"
      - "360"
      - "4096"
      - "8192"
    answer: 3
    explanation: Each ring may be worn in any of 4 fingers. So, each ring may be worn in 4 different ways. ∴ 6 rings may be worm in (4×4×4×4×4×4) = 4 6 = 4096 ways.
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 29
    question: There are 7 non-collinear points. How many triangles can be drawn by joining these points?
    options:
      - "35"
      - "10"
      - "8"
      - "7"
    answer: 0
    explanation: A triangle is formed by joining any three non-collinear points in pairs. There are 7 non-collinear points. The number of triangles formed, $$\eqalign{ & { = ^7}{{\text{C}}_3} \cr & = \frac{{7 \times \left( {7 - 1} \right) \times \left( {7 - 2} \right)}}{{3!}} \cr & = \frac{{7 \times 6 \times 5}}{{3 \times 2 \times 1}} \cr & = 7 \times 5 \cr & = 35 \cr} $$
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 30
    question: From 6 men and 4 ladies, a committee of 5 is to be formed. In how many ways can this be done, if the committee is to include at least one lady?
    options:
      - "246"
      - "340"
      - "290"
      - "315"
    answer: 0
    explanation: To committee can be formed in the following ways, (1 lady + 4 gents) or (2 ladies + 3 gents) or (3 ladies + 2 gents) or (4 ladies + 1 gents) or (5 ladies + 0 gents). Total number of possible arrangements, = ( 4 C 1 × 6 C 4 ) + ( 4 C 2 × 6 C 3 ) + ( 4 C 3 × 6 C 2 ) + ( 4 C 4 × 6 C 1 ) = 60 + 120 + 60 + 6 = 246
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 31
    question: A question paper consists of three sections 4,5 and 6 questions respectively. Attempting one question from each section is compulsory but a candidate need not attempt all the questions. In how many ways can a candidate attempt the questions?
    options:
      - "209"
      - (4!-1) × (5!-1) × (6!-1)
      - "119"
      - "29295"
    answer: 3
    explanation: "At least 1 question from each section is compulsory, so from the 1 st section the candidate can attempt 1 or 2 or 3 or 4 questions. In each section each question can be dealt with in 2 ways, i.e. either he attempts it or leaves it. So far 4 question there are 2 × 2 × 2 × 2 ways to attempt. As he has to attempt at least 1 question, the total number of ways in which he can attempt questions from 1st section is 2 4 - 1 Similarly for the 2 nd section there are 2 5 - 1 ways in which he can attempt and for the 3 rd section there are 2 6 - 1 ways. The ways in which the attempts one or more questions in any section is independent of the number of ways in which he attempts one or more questions from the other sections. Thus, total number of ways in which he can attempt questions in that paper: = (2 4 - 1)(2 5 - 1)(2 6 - 1) = 15 × 31 × 63 = 29295"
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 32
    question: In how many ways a President, VP and Water-boy can be selected from a group of 10 people.
    options:
      - 10C3
      - 10P3
      - "240"
      - "360"
    answer: 1
    explanation: We are selecting three different posts here, so order matters. Thus, total ways of selecting a President, VP and Water-boy from a group of 10 people would be 10 P 3
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 33
    question: "In a hockey championship, there are 153 matches played. Every two team played one match with each other. The number of teams participating in the championship is:"
    options:
      - "18"
      - "19"
      - "17"
      - "16"
    answer: 0
    explanation: Let there were x teams participating in the games, then total number of matches, = n C 2 = 153 On solving we get, n = −17 and n = 18 It cannot be negative so n = 18
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 34
    question: A box contains 10 balls out of which 3 are red and rest are blue. In how many ways can a random sample of 6 balls be drawn from the bag so that at the most 2 red balls are included in the sample and no sample has all the 6 balls of the same colour?
    options:
      - "105"
      - "168"
      - "189"
      - "120"
    answer: 1
    explanation: Six balls can be selected in the following ways, One red ball and 5 blue balls Or Two red balls and 4 blue balls. Total number of ways, = ( 3 C 1 × 7 C 5 ) + ( 3 C 2 × 4 C 7 ) = 63 + 105 = 168
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 35
    question: Out of eight crew members three particular members can sit only on the left side. Another two particular members can sit only on the right side. Find the number of ways in which the crew can be arranged so that four men can sit on each side.
    options:
      - "864"
      - "863"
      - "865"
      - "1728"
    answer: 3
    explanation: Required number of ways, = 3 C 2 × 4! × 4! = 1728
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 36
    question: A man positioned at the origin of the coordinate system. the man can take steps of unit measure in the direction North, East, West or South. Find the number of ways of he can reach the point (5,6), covering the shortest possible distance.
    options:
      - "252"
      - "432"
      - "462"
      - "504"
    answer: 2
    explanation: In order to reach (5,6) covering the shortest distance at the same time the man has to make 5 horizontal and 6 vertical steps. The number of ways in which these steps can be taken is given by, $$\eqalign{ & = \frac{{11!}}{{5! \times 6!}} \cr & = 462 \cr} $$
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 37
    question: There are 6 equally spaced points A, B, C, D, E and F marked on a circle with radius R. How many convex pentagons of distinctly different areas can be drawn using these points as vertices?
    options:
      - 6P5
      - "1"
      - "5"
      - None of these
    answer: 3
    explanation: Since, all the points are equally spaced; hence the area of all the convex pentagons will be same.
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 38
    question: In an examination paper, there are two groups each containing 4 questions. A candidate is required to attempt 5 questions but not more than 3 questions from any group. In how many ways can 5 questions be selected?
    options:
      - "24"
      - "48"
      - "96"
      - "64"
    answer: 1
    explanation: 5 questions can be selected in the following ways, 2 question from first group and 3 question from second group Or 3 question from first group and 2 question from second group. = ( 4 C 2 × 4 C 3 ) + ( 3 C 4 × 4 C 2 ) = 24 + 24 = 48
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 39
    question: After every get-together every person present shakes the hand of every other person. If there were 105 handshakes in all, how many persons were present in the party?
    options:
      - "16"
      - "15"
      - "13"
      - "14"
    answer: 1
    explanation: Let total number of persons present in the party be x, Then, $$\eqalign{ & \frac{{x \times \left( {x - 1} \right)}}{2} = 105 \cr & x = 15 \cr} $$
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 40
    question: How many diagonals can be drawn in a pentagon?
    options:
      - "5"
      - "10"
      - "8"
      - "7"
    answer: 0
    explanation: A pentagon has 5 sides. We obtain the diagonals by joining the vertices in pairs. Total number of sides and diagonals, = 5 C 2 = $$\frac{{5 \times 4}}{{2 \times 1}}$$ = 5 × 2 = 10 This includes its 5 sides also. ⇒ Diagonals = 10 – 5 = 5 Hence, the number of diagonals = 10 – 5 = 5
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
---


