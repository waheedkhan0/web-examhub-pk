---
title: Permutation And Combination — Part 2 MCQs with Explanations
description: Practice high-yield Mathematics & Quantitative Ability MCQs on Permutation And Combination — Part 2 with worked academic solutions for CSS, NTS, PPSC, FPSC, PMS.
subject: mathematics
subjectName: Mathematics & Quantitative Ability
topic: permutation-and-combination-part-2
topicName: Permutation And Combination — Part 2
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
    question: There are five women and six men in a group. From this group a committee of 4 is to be chosen. How many different ways can a committee be formed that contain three women and one man?
    options:
      - "55"
      - "60"
      - "25"
      - "192"
    answer: 1
    explanation: "Since, no order to the committee is mentioned, a combination instead of a permutation is used. Let's sort out what we have and what we want. Have: 5 women, 6 men. Want: 3 women AND 1 man. The word AND means multiply. Woman and Men $$\\eqalign{ & ^{{\\text{have}}}{{\\text{C}}_{{\\text{want}}}}{ \\times ^{{\\text{have}}}}{{\\text{C}}_{{\\text{want}}}} \\cr & { = ^5}{{\\text{C}}_3}{ \\times ^6}{{\\text{C}}_1} \\cr & = 60 \\cr} $$"
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 2
    question: Find the total number of distinct vehicle numbers that can be formed using two letters followed by two numbers. Letters need to be distinct.
    options:
      - "60000"
      - "65000"
      - "70000"
      - "75000"
    answer: 1
    explanation: Out of 26 alphabets two distinct letters can be chosen in 26 P 2 ways. Coming to numbers part, there are 10 ways (any number from 0 to 9 can be chosen) to choose the first digit and similarly another 10 ways to choose the second digit. Hence, there are totally 10 × 10 = 100 ways. Combined with letters there are, 26 P 2 × 100 = 65000 ways to choose vehicle numbers.
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 3
    question: In a railway compartment, there are 2 rows of seats facing each other with accommodation for 5 in each, 4 wish to sit facing forward and 3 facing towards the rear while 3 others are indifferent. In how many ways can the 10 passengers be seated?
    options:
      - "172000"
      - "12600"
      - "45920"
      - "43200"
    answer: 3
    explanation: "The four person who wish to sit facing forward can be seated in: 5 P 4 ways and 3 who wish to sit facing towards the rear can be seated in: 5 P 3 ways and the remaining 3 can be seated in the remaining 3 seats in 3 P 3 ways. Total number of ways = 5 P 4 × 5 P 3 × 3 P 3 = 43200"
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 4
    question: "There are three prizes to be distributed among five students. If no students gets more than one prize, then this can be done in:"
    options:
      - 10 ways
      - 30 ways
      - 60 ways
      - 80 ways
    answer: 0
    explanation: 3 prize among 5 students can be distributed in, 5 C 3 ways = 10 ways.
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 5
    question: A teacher of 6 students takes 2 of his students at a time to a zoo as often as he can, without taking the same pair of children together more than once. How many times does the teacher go to the zoo?
    options:
      - "10"
      - "12"
      - "15"
      - "20"
    answer: 2
    explanation: Two students can be selected from 6 in 6 C 2 =15 ways. Therefore, the teacher goes to the zoo 15 times.
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 6
    question: "A family consist of a grandfather, 5 sons and daughter and 8 grandchildren. They are to be seated in a row for dinner. The grandchildren wish to occupy the 4 seats at each end and the grandfather refuses to have a grandchild on either side of him. The number of ways in which the family can be made to sit is:"
    options:
      - "21530"
      - 8! × 360
      - 8! × 480
      - 8! × 240
    answer: 2
    explanation: Total no. of seats, = 1 grandfather + 5 sons and daughters + 8 grandchildren= 14 The grandchildren can occupy the 4 seats on either side of the table in 4! = 24 ways. The grandfather can occupy a seat in (5 - 1) = 4 ways (4 gaps between 5 sons and daughter). And, the remaining seats can be occupied in 5! = 120 ways (5 seat for sons and daughter). Hence total number of required ways, = 8! × 480
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 7
    question: If the letters of the word CHASM are rearranged to form 5 letter words such that none of the word repeat and the results arranged in ascending order as in a dictionary what is the rank of the word CHASM?
    options:
      - "24"
      - "31"
      - "32"
      - "30"
    answer: 2
    explanation: The 5 letter word can be rearranged in 5! = 120 Ways without any of the letters repeating. The first 24 of these words will start with A. Then, the 25th word will start will CA _ _ _ . The remaining 3 letters can be rearranged in 3! = 6 Ways. i.e. 6 words exist that start with CA. The next word starts with CH and then A, i.e., CHA _ _. The first of the words will be CHAMS. The next word will be CHASM. Therefore, the rank of CHASM will be 24 + 6 + 2 = 32
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 8
    question: In how many ways can 5 different toys be packed in 3 identical boxes such that no box is empty, if any of the boxes may hold all of the toys?
    options:
      - "20"
      - "30"
      - "25"
      - "600"
      - None of these
    answer: 2
    explanation: "The toys are different; The boxes are identical. If none of the boxes is to remain empty, then we can pack the toys in one of the following ways: Case i. 2, 2, 1 Case ii. 3, 1, 1 Case i: Number of ways of achieving the first option 2, 2, 1 Two toys out of the 5 can be selected in 5 C 2 ways. Another 2 out of the remaining 3 can be selected in 3 C 2 ways and the last toy can be selected in 1 C 1 way. However, as the boxes are identical, the two different ways of selecting which box holds the first two toys and which one holds the second set of two toys will look the same. Hence, we need to divide the result by 2. Therefore, total number of ways of achieving the 2, 2, 1 option is: $$\\frac{{^5{C_2}{ \\times ^3}{C_2}}}{2} = \\frac{{10 \\times 3}}{2} = 15\\,{\\text{ways}}$$ Case ii: Number of ways of achieving the second option 3, 1, 1 Three toys out of the 5 can be selected in $$^5{C_3}$$ ways. As the boxes are identical, the remaining two toys can go into the two identical looking boxes in only one way. Therefore, total number of ways of getting the 3, 1, 1 option is $$^5{C_3}$$ = 10 ways. Total ways in which the 5 toys can be packed in 3 identical boxes = number of ways of achieving Case i + number of ways of achieving Case ii = 15 + 10 = 25 ways."
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 9
    question: What is the value of 1 × 1! + 2 × 2! + 3 × 3! + . . . . . . . . n × n! where n! means n factorial or n(n-1) (n-2) . . . . . . . . 1
    options:
      - n × (n - 1) × (n - 1)!
      - (n + 1)! - {n × (n - 1)}
      - (n + 1)! - n!
      - (n + 1)! - 1!
    answer: 3
    explanation: 1 × 1! = (2 - 1) × 81! = 2 × 1! - 1 × 1! = 2! - 1! 2 × 2! = (3 - 1) × 2! = 3 × 2! - 2! = 3! - 2! 3 × 3! = (4 - 1) × 3! = 4 × 3! - 3! = 4! - 3! .. .. .. n × n! = (n + 1 - 1) × n! = (n + 1) (n!) - n! = (n + 1)! - n! Summing up all these terms, we get (n + 1)! - 1!
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 10
    question: When six fair coins are tossed simultaneously, in how many of the outcomes will at most three of the coins turn up as heads?
    options:
      - "25"
      - "41"
      - "22"
      - "42"
      - "31"
    answer: 3
    explanation: The question requires you to find number of the outcomes in which at most 3 coins turn up as heads. i.e., 0 coins turn heads or 1 coin turns head or 2 coins turn heads or 3 coins turn heads. The number of outcomes in which 0 coins turn heads is, 6 C 0 = 1 outcome. The number of outcomes in which 1 coin turns head is, 6 C 1 = 6 outcomes. The number of outcomes in which 2 coins turn heads is, 6 C 2 = 15 outcomes. The number of outcomes in which 3 coins turn heads is, 6 C 3 = 20 outcomes. Therefore, total number of outcomes = 1 + 6 + 15 + 20 = 42 outcomes.
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 11
    question: A college has 10 basketball players. A 5 member's team and a captain will be selected out of these 10 players. How many different selections can be made?
    options:
      - "1260"
      - "210"
      - 10C6 × 6!
      - 10C5 × 6
    answer: 0
    explanation: A team of 6 members has to be selected from the 10 players. This can be done in 10 C 6 or 210 ways. Now, the captain can be selected from these 6 players in 6 ways. Therefore, total ways the selection can be made is 210 × 6 = 1260 Alternatively We can select the 5 member team out of the 10 in 10 C 5 ways = 252 ways. The captain can be selected from amongst the remaining 5 players in 5 ways. Therefore, total ways the selection of 5 players and a captain can be made, = 252 × 5 = 1260
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 12
    question: How many four letter distinct initials can be formed using the alphabets of English language such that the last of the four words is always a consonant?
    options:
      - 263 × 21
      - 26 × 25 × 24 × 21
      - 25 × 24 × 23 × 21
      - None of these
    answer: 0
    explanation: The last of the four letter words should be a consonant. Therefore, there are 21 options. The first three letters can be either consonants or vowels. So, each of them have 26 options. Note that the question asks you to find out the number of distinct initials and not initials where the letters are distinct. Hence, required answer = 26 × 26 × 26 × 21 = 26 3 × 21
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 13
    question: What is the total number of ways in which Dishu can distribute 9 distinct gifts among his 8 distinct girlfriends such that each of them gets at least one gift?
    options:
      - 72 × 8!
      - 144 × 8!
      - 36 × 8!
      - 9!
    answer: 2
    explanation: One among 8 gfs will get 2 gifts and remaining 7 will get one. So total of 9 gifts will be distributed among 8 gfs. i.e; 11111112 Gf who will get 2 gifts can be find out in 8 C 1 ways = 8 ways. Now 2 gifts can be given to selected gf in 9 C 2 ways. And remaining 7 gifts can be given to remaining 7 gf in 7! ways. So total no of ways= 8 × 9 C 2 × 7! = $$\frac{{8 \times \left( {9 \times 8} \right)}}{{2 \times 7!}}$$ = 36 × 8 × 7! = 36 × 8!
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 14
    question: How many number of times will the digit 7 be written when listing the integers from 1 to 1000?
    options:
      - "271"
      - "300"
      - "252"
      - "304"
    answer: 1
    explanation: 7 does not occur in 1000. So we have to count the number of times it appears between 1 and 999. Any number between 1 and 999 can be expressed in the form of xyz where 0 < x, y, z < 9. 1. The numbers in which 7 occurs only once. e.g 7, 17, 78, 217, 743 etc This means that 7 is one of the digits and the remaining two digits will be any of the other 9 digits (i.e 0 to 9 with the exception of 7) You have 1 × 9 × 9 = 81 such numbers. However, 7 could appear as the first or the second or the third digit. Therefore, there will be 3 × 81 = 243 numbers (1-digit, 2-digits and 3- digits) in which 7 will appear only once. In each of these numbers, 7 is written once. Therefore, 243 times. 2. The numbers in which 7 will appear twice. e.g 772 or 377 or 747 or 77 In these numbers, one of the digits is not 7 and it can be any of the 9 digits ( 0 to 9 with the exception of 7). There will be 9 such numbers. However, this digit which is not 7 can appear in the first or second or the third place. So there are 3 × 9 = 27 such numbers. In each of these 27 numbers, the digit 7 is written twice. Therefore, 7 is written 54 times. 3. The number in which 7 appears thrice - 777 - 1 number. 7 is written thrice in it. Therefore, the total number of times the digit 7 is written between 1 and 999 is = 243 + 54 + 3 = 300
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 15
    question: In how many ways can 15 people be seated around two round tables with seating capacities of 7 and 8 people?
    options:
      - 15! × 8!
      - 7! × 8!
      - 15C7 × 6! × 7!
      - 2 × 15C7 × 6! × 7!
      - 15C8 × 8!
    answer: 2
    explanation: "'n' objects can be arranged around a circle in (n - 1)! ways. If arranging these 'n' objects clockwise or counter clockwise means one and the same, then the number arrangements will be half that number. i.e., number of arrangements = $$\\frac{{\\left( {n - 1} \\right)!}}{2}$$ You can choose the 7 people to sit in the first table in 15 C 7 ways. After selecting 7 people for the table that can seat 7 people, they can be seated in: (7 - 1)! = 6! The remaining 8 people can be made to sit around the second circular table in: (8 - 1)! = 7! Ways. Hence, total number of ways: 15 C 7 × 6! × 7!"
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 16
    question: In how many ways can the letters of the word EDUCATION be rearranged so that the relative position of the vowels and consonants remain the same as in the word EDUCATION ?
    options:
      - 9! × 4
      - 9! × 4! × 5!
      - 4! × 5!
      - None of these
    answer: 2
    explanation: The word EDUCATION is a 9 letter word, with none of the letters repeating. The vowels occupy 3 rd , 5 th , 7 th and 8 th position in the word and the remaining 5 positions are occupied by consonants. As the relative position of the vowels and consonants in any arrangement should remain the same as in the word EDUCATION, the vowels can occupy only the before mentioned 4 places and the consonants can occupy 1 st , 2 nd , 4 th , 6 th and 9 th positions. The 4 vowels can be arranged in the 3 rd , 5 th , 7 th and 8 th position in 4! Ways. Similarly, the 5 consonants can be arranged in 1 st , 2 nd , 4 th , 6 th and 9 th
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 17
    question: A team of 8 students goes on an excursion, in two cars, of which one can seat 5 and the other only 4. In how many ways can they travel?
    options:
      - "392"
      - "126"
      - "26"
      - "9"
    answer: 1
    explanation: "There are 8 students and the maximum capacity of the cars together is 9. We may divide the 8 students as follows: Case I: 5 students in the first car and 3 in the second. Hence, 8 students are divided into groups of 5 and 3 in 8 C 3 = 56 ways. Case II: 4 students in the first car and 4 in the second. So, 8 students are divided into two groups of 4 and 4 in 8 C 4 = 78 ways. Therefore, the total number of ways in which 8 students can travel is: 56 + 70 = 126"
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 18
    question: A tea expert claims that he can easily find out whether milk or tea leaves were added first to water just by tasting the cup of tea. In order to check this claims 10 cups of tea are prepared, 5 in one way and 5 in other. Find the different possible ways of presenting these 10 cups to the expert.
    options:
      - "252"
      - "240"
      - "300"
      - "340"
    answer: 0
    explanation: Since, there are 5 cups of each kind, prepared with milk or tea leaves added first, are identical hence, total number of different people ways of presenting the cups to the expert is, $$\eqalign{ & = \frac{{10!}}{{5! \times 5!}} \cr & = 252 \cr} $$
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 19
    question: A committee is to be formed comprising 7 members such that there is a simple majority of men and at least 1 woman. The shortlist consists of 9 men and 6 women. In how many ways can this committee be formed?
    options:
      - "4914"
      - "3630"
      - "3724"
      - "3824"
    answer: 0
    explanation: "Three possibilities: (1W+6M), (2W+5M), (3W+4M) = ( 6 C 1 × 9 C 6 ) + ( 6 C 2 × 9 C 5 ) + ( 6 C 3 × 9 C 4 ) = 4914"
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 20
    question: How many alphabets need to be there in a language if one were to make 1 million distinct 3 digit initials using the alphabets of the language?
    options:
      - "100"
      - "50"
      - "26"
      - "1000"
    answer: 0
    explanation: "1 million distinct 3 digit initials are needed. Let the number of required alphabets in the language be 'n'. Therefore, using 'n' alphabets we can form n × n × n = n 3 distinct 3 digit initials. NOTE: Distinct initials are different from initials where the digits are different. For instance, AAA and BBB are acceptable combinations in the case of distinct initials while they are not permitted when the digits of the initials need to be different. This n 3 different initials = 1 million. i.e. n 3 = 10 6 (1 million =10 6 ) n 3 = 10 2 3 n = 10 2 n = 100 Hence, the language needs to have a minimum of 100 alphabets"
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 21
    question: How many arrangements of four 0's (zeroes), two 1's and two 2's are there in which the first 1 occur before the first 2?
    options:
      - "420"
      - "360"
      - "320"
      - "210"
    answer: 3
    explanation: Total number of arrangements = $$\frac{{8!}}{{4! \times 2! \times 2!}}$$ = 420 Since, there are two 1's and two 0's, the number of arrangements in which the first 1 is before the first 2 is same as the number of arrangement in which the first 2 is before the first 1 and they are each equal to half the total number of arrangements = 210
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 22
    question: How many different five-letter words can be formed using the letter from the world APPLE?
    options:
      - "24"
      - "60"
      - "120"
      - "240"
    answer: 1
    explanation: "If the two P’s were distinct (they could have different subscripts and colours), the number of possible permutations would have been 5! = 120 For example let us consider one permutation: P 1 LEAP 2 Now if we permute the P’s amongst them we still get the same word PLEAP. The two P’s can be permuted amongst them in 2! ways. We were counting P 1 LEAP 2 and P 2 LEAP 1 as different arrangements only because we were artificially distinguishing between the two P’s Hence the number of different five letter words that can be formed is: = $$\\frac{{5!}}{{\\left(1!\\right) \\left(2!\\right) \\left(1!\\right) \\left(1!\\right)}}$$ = 60"
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 23
    question: I have an amount of Rs. 10 lakh, which I went to invest in stocks of some companies. I always invest only amounts that are multiples of Rs 1 lakh in the stock of any company. If I can choose from among the stocks of five different companies, In how many ways can I invest the entire amount that I have?
    options:
      - "252"
      - "250"
      - "1001"
      - "1089"
    answer: 2
    explanation: The situation is similar to placing 10 identical balls among 5 distinguishable boxes, where a box may have zero or more balls in it. This case can be represented as arranging ten balls and (5 - 1) four walls in the single row, which can be done in 14 C 4 ways. (The balls placed between every successive pair of walls belong to one group) 14 C 4 = 1001 ways.
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 24
    question: A selection committee is to be chosen consisting of 5 ex-technicians. Now there are 12 representatives from four zones. It has further been decided that if Mr. X is selected, Y and Z will not be selected and vice-versa. In how many ways it can be done?
    options:
      - "572"
      - "672"
      - "472"
      - "372"
    answer: 1
    explanation: "10 C 5 : when both are not included. 10 C 4 : when one of them is included. Number of ways = 10 C 5 + 10 C 4 + 10 C 4 = 672"
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 25
    question: How many 5-digit positive integers exist the sum of whose digits are odd?
    options:
      - "36000"
      - "38000"
      - "45000"
      - "90000"
    answer: 2
    explanation: There are 9 × 10 4 = 90000, 5-digit positive integers. Out of these 90000 positive integers, the sum of the digits of half of the numbers will add up to an odd number and the remaining half will add up to an even number. Hence, there are $$\frac{{90000}}{2}$$ = 45000, 5-digit positive integers whose sum add up to an odd number.
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 26
    question: There are eight boxes of chocolates, each box containing distinct number of chocolates from 1 to 8. In how many ways four of these boxes can be given to four persons (one boxes to each) such that the first person gets more chocolates than each of the three, the second person gets more chocolates than the third as well as the fourth persons and the third person gets more chocolates than fourth person?
    options:
      - "35"
      - "70"
      - "105"
      - "210"
    answer: 1
    explanation: All the boxes contain distinct number of chocolates. For each combination of 4 out of 8 boxes, the box with the greatest number has to be given to the first person, the box with the second highest to the second person and so on. The number of ways of giving 4 boxes to the 4 person is, 8 C 4 = 70
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 27
    question: In how many ways can seven friends be seated in a row having 35 seats, such that no two friends occupy adjacent seats?
    options:
      - 29P7
      - 29C7
      - 28P7
      - 28C7
    answer: 0
    explanation: First let us consider the 28 unoccupied seats. They create 29 slots - one on the left of each seat and one on the right of the last one. We can place the 7 friends in any of these 29 slots i.e. 29 P 7 ways.
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 28
    question: How many ways can 10 letters be posted in 5 post boxes, if each of the post boxes can take more than 10 letters?
    options:
      - "510"
      - "105"
      - 10P5
      - 10C5
    answer: 0
    explanation: Each of the 10 letters can be posted in any of the 5 boxes. So, the first letter has 5 options, so does the second letter and so on and so forth for all of the 10 letters. i.e.5 × 5 × 5 × . . . . × 5 (up-to 10 times). = 5 10
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 29
    question: There are 2 brothers among a group of 20 persons. In how many ways can the group be arranged around a circle so that there is exactly one person between the two brothers?
    options:
      - 2 × 17!
      - 18! × 18
      - 19! × 18
      - 2 × 18!
      - 2 × 17! × 17!
    answer: 3
    explanation: n objects can be arranged around a circle in (n - 1)! If arranging these n objects clockwise or counter clockwise means one and the same, then the number arrangements will be half that number. i.e., number of arrangements = $$\frac{{\left( {n - 1} \right)!}}{2}$$ Let there be exactly one person between the two brothers as stated in the question. If we consider the two brothers and the person in between the brothers as a block, then there will 17 others and this block of three people to be arranged around a circle. The number of ways of arranging 18 objects around a circle is in 17! ways. Now the brothers can be arranged on either side of the person who is in between the brothers in 2! ways. The person who sits in between the two brothers could be any of the 18 in the group and can be selected in 18 ways. Therefore, the total number of ways = 18 × 17! × 2 = 2 × 18!
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 30
    question: a, b, c, d and e are five natural numbers. Find the number of ordered sets (a, b, c, d, e) possible such that a + b + c + d + e = 64.
    options:
      - 64C5
      - 63C4
      - 65C4
      - 63C5
    answer: 1
    explanation: Let assume that there are 64 identical balls which are to be arranged in 5 different compartments (Since a, b, c, d, e are distinguishable) If the balls are arranged in a row i.e., o, o, o, o, o, o . . . . (64 balls). We have 63 gaps where we can place a wall in each gap, since we need 5 compartments we need to place only 4 walls. We can do this in 63 C 4 ways.
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 31
    question: There are five cards lying on the table in one row. Five numbers from among 1 to 100 have to be written on them, one number per card, such that the difference between the numbers on any two adjacent cards is not divisible by 4. The remainder when each of the 5 numbers is divided by 4 is written down on another card (the 6th card) in order. How many sequences can be written down on the 6 th card?
    options:
      - "210"
      - 210 × 33
      - 4 × 34
      - 42 × 33
    answer: 2
    explanation: "The remainder on the first card can be 0, 1, 2 or 3 i.e. 4 possibilities. The remainder of the number on the next card when divided by 4 can have 3 possible values (except the one occurred earlier). For each value on the card the remainder can have 3 possible values. The total number of possible sequences is: 4 × 3 4"
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 32
    question: From a total of six men and four ladies a committee of three is to be formed. If Mrs. X is not willing to join the committee in which Mr. Y is a member, whereas Mr.Y is willing to join the committee only if Mrs Z is included, how many such committee are possible?
    options:
      - "138"
      - "128"
      - "112"
      - "91"
    answer: 3
    explanation: "We first count the number of committee in which (i). Mr. Y is a member (ii). the ones in which he is not case (i): As Mr. Y agrees to be in committee only where Mrs. Z is a member. Now we are left with (6 - 1) men and (4 - 2) ladies (Mrs. X is not willing to join). We can choose 1 more in 5+2 C 1 = 7 ways. case (ii): If Mr. Y is not a member then we left with (6 + 4 - 1) people. we can select 3 from 9 in 9 C 3 = 84 ways. Thus, total number of ways is 7 + 84 = 91 ways."
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 33
    question: Goldenrod and No Hope are in a horse race with 6 contestants. How many different arrangements of finishes are there if No Hope always finishes before Goldenrod and if all of the horses finish the race?
    options:
      - "700"
      - "360"
      - "120"
      - "24"
      - "21"
    answer: 1
    explanation: "Two horses A and B, in a race of 6 horses . . . A has to finish before B. If A finishes 1 . . . . . B could be in any of other 5 positions in 5 ways and other horses finish in 4! Ways, so total ways = 5 × 4! If A finishes 2 . . . . . B could be in any of the last 4 positions in 4 ways. But the other positions could be filled in 4! ways, so the total ways = 4 × 4! If A finishes 3 rd . . . . . B could be in any of last 3 positions in 3 ways, but the other positions could be filled in 4! ways, so total ways = 3 × 4! If A finishes 4 th . . . . . B could be in any of last 2 positions in 2 ways, but the other positions could be filled in 4! ways, so total ways = 2 × 4! If A finishes 5 th . . . . B has to be 6th and the top 4 positions could be filled in 4! ways. A cannot finish 6 th , since he has to be ahead of B. Therefore total number of ways: = 5 × 4! + 4 × 4! + 3 × 4! + 2 × 4! + 4! = 120 + 96 + 72 + 48 + 24 = 360"
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 34
    question: Jay wants to buy a total of 100 plants using exactly a sum of Rs. 1000. He can buy Rose plants at Rs. 20 per plant or marigold or Sun flower plants at Rs. 5 and Rs. 1 per plant respectively. If he has to buy at least one of each plant and cannot buy any other type of plants, then in how many distinct ways can Jay make his purchase?
    options:
      - "2"
      - "3"
      - "4"
      - "5"
      - None of these
    answer: 1
    explanation: "Let the number of Rose plants be a . Let number of marigold plants be b . Let the number of Sunflower plants be c . According to question, 20a + 5b + 1c = 1000 - - - - - - (1) a + b + c = 100 - - - - - - - - - - (2) Solving the above two equations by eliminating c, 19a + 4b = 900 b = $$\\frac{{900 - 19a}}{4}$$ = $$225 - \\frac{{19a}}{4}$$ - - - - - - - (3) b being the number of plants, is a positive integer, and is less than 99, as each of the other two types have at least one plant in the combination i.e . 0 < b < 99 - - - - - - - (4) Substituting (3) in (4), 0 < 225 - $$\\frac{{19a}}{4}$$ < 99 ⇒ 225 < -$$\\frac{{19a}}{4}$$ < (99 - 225) ⇒ 4 × 225 > 19a > 126 × 4 ⇒ $$\\frac{{900}}{{19}}$$ > a > 504 a is the integer between 47 and 27 - - - - - - - - (5) From (3), it is clear, a should be multiple of 4. Hence, possible values of a are (28,32,36,40,44) For a=28 and 32, a+b>100 For all other values of a, we get the desired solution: a=36,b=54,c=10 a=40,b=35,c=25 a=44,b=16,c=40 Three solutions are possible."
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 35
    question: How many words of 4 consonants and 3 vowels can be made from 12 consonants and 4 vowels, if all the letters are different?
    options:
      - 16C7 × 7!
      - 12C4 × 4C3 × 7!
      - 12C3 × 4C4
      - 11C4 × 4C3
    answer: 1
    explanation: 4 consonants out of 12 can be selected in, 12 C 4 ways. 3 vowels can be selected in 4 C 3 ways. Therefore, total number of groups each containing 4 consonants and 3 vowels, = 12 C 4 × 4 C 3 Each group contains 7 letters, which can be arranging in 7! ways. Therefore required number of words, = 12 C 4 × 4 C 3 × 7!
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 36
    question: A local delivery company has three packages to deliver to three different homes. if the packages are delivered at random to the three houses, how many ways are there for at least one house to get the wrong package?
    options:
      - "3"
      - "5"
      - 3!
      - 5!
    answer: 1
    explanation: "The possible outcomes that satisfy the condition of at least one house gets the wrong package are: One house gets the wrong package or two houses get the wrong package or three houses get the wrong package. We can calculate each of these cases and then add them together, or approach this problem from a different angle. The only case which is left out of the condition is the case where no wrong packages are delivered. If we determine the total number of ways the three packages can be delivered and then subtract the one case from it, the remainder will be the three cases above. There is only one way for no wrong packages delivered to occur. This is the same as everyone gets the right package. The first person must get the correct package and the second person must get the correct package and the third person must get the correct package. ⇒ 1 × 1 × 1 = 1 Determine the total number of ways the three packages can be delivered. ⇒ 3 × 2 × 1 = 6 The number of ways at least one house gets the wrong package is: ⇒ 6 - 1 = 5 Therefore there are 5 ways for at least one house to get the wrong package."
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 37
    question: How many natural numbers less than a lakh can be formed with the digits 0,6 and 9?
    options:
      - "242"
      - "243"
      - "728"
      - "729"
    answer: 0
    explanation: The digits to be used are 0,6 and 9 The required numbers are from 1 to 99999 The numbers are five digit numbers. Therefore, every place can be filled by 0, 6 and 9 in 3 ways. Total number of ways = 3 × 3 × 3 × 3 × 3 = 3 5 But 00000 is also a number formed and has to be excluded. Total number of numbers, = 3 5 - 1 = 243 - 1 = 242
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 38
    question: There are 20 couples in a party. Every person greets every person except his or her spouse. People of the same sex shake hands and those of opposite sex greet each other with a Namaste (It means bringing one's own palms together and raising them to the chest level). What is the total number of handshakes and Namaste's in the party?
    options:
      - "760"
      - "1140"
      - "780"
      - "720"
    answer: 1
    explanation: There are 20 men and 20 women. When a man meets a woman, there are two Namastes, whereas when a man meets a man (or a woman) there is only 1 handshake. Number of handshakes, = 2 × 20 C 2 (men and women ) = 2 × 190 = 380 For a number of Namastes, Every man does 19 Namastes (to the 20 women excluding his wife) and they respond in the same way. Number of Namastes = 2 × 20 × 19 = 760 Total number of Namastes and Handshake = 760 + 380 = 1140
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 39
    question: In how many ways can a leap year have 53 Sundays?
    options:
      - 365C7
      - "7"
      - "4"
      - "2"
    answer: 3
    explanation: In a leap year there are 366 days i.e. 52 weeks + 2 extra days. So to have 53 Sundays one of these two days must be a Sunday. This can occur in only 2 ways. i.e. (Saturday and Sunday) or (Sunday and Monday). Thus number of ways = 2
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
  - id: 40
    question: In a certain laboratory, chemicals are identified by a colour-coding system. There are 20 different chemicals. Each one is coded with either a single colour or a unique two-colour pair. If the order of colours in the pairs does not matter, what is the minimum number of different colours needed to code all 20 chemicals with either a single colour or a unique pair of colours?
    options:
      - "7"
      - "6"
      - "5"
      - "8"
    answer: 1
    explanation: Each one coded with either a single colour or unique two-colour pair. Therefore, total number of ways = n + n C 2 Minimum number of different colour needed to code all 20 chemicals will be 6 = 6 + 6 C 2 =21
    keyConcept: Permutation And Combination
    testedIn:
      - CSS
      - NTS
---


