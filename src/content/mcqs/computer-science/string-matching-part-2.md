---
title: String Matching — Part 2 MCQs with Explanations
description: Practice high-yield Computer Science & IT MCQs on String Matching — Part 2 with worked academic solutions for PPSC, FPSC, CSS, PMS, NTS.
subject: computer-science
subjectName: Computer Science & IT
topic: string-matching-part-2
topicName: String Matching — Part 2
author: ExamHub Academic Editorial Board
updatedDate: "2026-10-14"
difficulty: Exam-Level
targetExams:
  - PPSC
  - FPSC
  - CSS
  - PMS
  - NTS
questions:
  - id: 1
    question: Which algorithm is well-suited for string matching when dealing with long and complex patterns?
    options:
      - Boyer-Moore
      - Knuth-Morris-Pratt (KMP)
      - Rabin-Karp
      - Naive Search
    answer: 0
    explanation: Boyer-Moore is the correct answer to “Which algorithm is well-suited for string matching when dealing with long and complex patterns”. This question is standard in competitive examination syllabi for String Matching.
    keyConcept: String Matching
    testedIn:
      - PPSC
      - FPSC
  - id: 2
    question: In the Boyer-Moore algorithm, how is the "good suffix rule" utilized?
    options:
      - It preprocesses the text.
      - It creates hash values for substrings.
      - It processes the text in reverse.
      - It shifts the pattern to align with previously matched suffixes.
    answer: 3
    explanation: It shifts the pattern to align with previously matched suffixes. is the correct answer to “In the Boyer-Moore algorithm, how is the "good suffix rule" utilized”. This question is standard in competitive examination syllabi for String Matching.
    keyConcept: String Matching
    testedIn:
      - PPSC
      - FPSC
  - id: 3
    question: Which string matching algorithm is known for being efficient with very large alphabets?
    options:
      - Boyer-Moore
      - Knuth-Morris-Pratt (KMP)
      - Rabin-Karp
      - Naive Search
    answer: 2
    explanation: Rabin-Karp is the correct answer to “Which string matching algorithm is known for being efficient with very large alphabets”. This question is standard in competitive examination syllabi for String Matching.
    keyConcept: String Matching
    testedIn:
      - PPSC
      - FPSC
  - id: 4
    question: What is a key characteristic of the Naive string matching algorithm?
    options:
      - It uses advanced hashing techniques.
      - It requires sorting the pattern.
      - It is simple to implement.
      - It has a high worst-case time complexity.
    answer: 2
    explanation: It is simple to implement. is the correct answer to “What is a key characteristic of the Naive string matching algorithm”. This question is standard in competitive examination syllabi for String Matching.
    keyConcept: String Matching
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: What is the pre-processing time of Rabin and Karp Algorithm?
    options:
      - Theta(m2)
      - Theta(mlogn)
      - Theta(m)
      - Big-Oh(n)
    answer: 2
    explanation: Theta(m) is the correct answer to “What is the pre-processing time of Rabin and Karp Algorithm”. This question is standard in competitive examination syllabi for String Matching.
    keyConcept: String Matching
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: Given a pattern of length-5 window, find the suitable modulo value. 4 3 2 5 0
    options:
      - "13"
      - "14"
      - "12"
      - "11"
    answer: 0
    explanation: 13 is the correct answer to “Given a pattern of length-5 window, find the suitable modulo value. 4 3 2 5 0”. This question is standard in competitive examination syllabi for String Matching.
    keyConcept: String Matching
    testedIn:
      - PPSC
      - FPSC
  - id: 7
    question: What is the basic principle in Rabin Karp algorithm?
    options:
      - Hashing
      - Sorting
      - Augmenting
      - Dynamic Programming
    answer: 0
    explanation: Hashing is the correct answer to “What is the basic principle in Rabin Karp algorithm”. This question is standard in competitive examination syllabi for String Matching.
    keyConcept: String Matching
    testedIn:
      - PPSC
      - FPSC
  - id: 8
    question: What is the space complexity of quick search algorithm?
    options:
      - O(n)
      - O(log n)
      - O(m+n)
      - O(mn)
    answer: 0
    explanation: O(n) is the correct answer to “What is the space complexity of quick search algorithm”. This question is standard in competitive examination syllabi for String Matching.
    keyConcept: String Matching
    testedIn:
      - PPSC
      - FPSC
  - id: 9
    question: If n is the length of text(T) and m is the length of the pattern(P) identify the correct matching algorithm.
    options:
      - for s=0 to n do if p=t0 then if P[1..m]=T[s+1..s+m] then print “Pattern occurs with shift” s
      - for s=0 to n-m do if p=ts then if P[1..m]=T[s+1..s+m] then print “Pattern occurs with shift” s
      - for s=0 to m do if p=ts then if P[1..m]=T[s+1..s+m] then print “Pattern occurs with shift” s
      - for s=0 to n-m do if p!=ts then if P[1..m]=T[s+1..s+m] then print “Pattern occurs with shift” s
    answer: 1
    explanation: for s=0 to n-m do if p=ts then if P[1..m]=T[s+1..s+m] then print “Pattern occurs with shift” s is the correct answer to “If n is the length of text(T) and m is the length of the pattern(P) identify the correct matching algorithm.”. This question is standard in competitive examination syllabi for String Matching.
    keyConcept: String Matching
    testedIn:
      - PPSC
      - FPSC
  - id: 10
    question: Rabin Karp Algorithm makes use of elementary number theoretic notions.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “Rabin Karp Algorithm makes use of elementary number theoretic notions.”. This question is standard in competitive examination syllabi for String Matching.
    keyConcept: String Matching
    testedIn:
      - PPSC
      - FPSC
  - id: 11
    question: If n is the length of text(T) and m is the length of the pattern(P) identify the correct pre-processing algorithm. (where q is a suitable modulus to reduce the complexity) p=0; t0=0;
    options:
      - for i=1 to n do t0=(dt0 + P[i])mod q p=(dp+T[i])mod q
      - for i=1 to n do p=(dp + P[i])mod q t0=(dt0+T[i])mod q
      - for i=1 to m do t0=(dp + P[i])mod q p=(dt0+T[i])mod q
      - for i=1 to m do p=(dp + P[i])mod q t0=(dt0+T[i])mod q
    answer: 3
    explanation: for i=1 to m do p=(dp + P[i])mod q t0=(dt0+T[i])mod q is the correct answer to “If n is the length of text(T) and m is the length of the pattern(P) identify the correct pre-processing algorithm. (where q is a suitable modulus to reduce the complexity) p=0; t0=0;”. This question is standard in competitive examination syllabi for String Matching.
    keyConcept: String Matching
    testedIn:
      - PPSC
      - FPSC
  - id: 12
    question: What is the worst case running time in searching phase of Boyer-Moore's algorithm?
    options:
      - O(n)
      - O(log n)
      - O(m+n)
      - O(mn)
    answer: 3
    explanation: O(mn) is the correct answer to “What is the worst case running time in searching phase of Boyer-Moore's algorithm”. This question is standard in competitive examination syllabi for String Matching.
    keyConcept: String Matching
    testedIn:
      - PPSC
      - FPSC
  - id: 13
    question: Which of the following is the fastest algorithm in string matching field?
    options:
      - Boyer-Moore's algorithm
      - String matching algorithm
      - Quick search algorithm
      - Linear search algorithm
    answer: 2
    explanation: Quick search algorithm is the correct answer to “Which of the following is the fastest algorithm in string matching field”. This question is standard in competitive examination syllabi for String Matching.
    keyConcept: String Matching
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: What is the worst case running time of Rabin Karp Algorithm?
    options:
      - Theta(n)
      - Theta(n-m)
      - Theta((n-m+1)m)
      - Theta(nlogm)
    answer: 2
    explanation: Theta((n-m+1)m) is the correct answer to “What is the worst case running time of Rabin Karp Algorithm”. This question is standard in competitive examination syllabi for String Matching.
    keyConcept: String Matching
    testedIn:
      - PPSC
      - FPSC
  - id: 15
    question: What happens when the modulo value(q) is taken large?
    options:
      - Complexity increases
      - Spurious hits occur frequently
      - Cost of extra checking is low
      - Matching time increases
    answer: 2
    explanation: Cost of extra checking is low is the correct answer to “What happens when the modulo value(q) is taken large”. This question is standard in competitive examination syllabi for String Matching.
    keyConcept: String Matching
    testedIn:
      - PPSC
      - FPSC
  - id: 16
    question: Rabin- Karp algorithm can be used for discovering plagiarism in a sentence.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “Rabin- Karp algorithm can be used for discovering plagiarism in a sentence.”. This question is standard in competitive examination syllabi for String Matching.
    keyConcept: String Matching
    testedIn:
      - PPSC
      - FPSC
  - id: 17
    question: If the expected number of valid shifts is small and modulus is larger than the length of pattern what is the matching time of Rabin Karp Algorithm?
    options:
      - Theta(m)
      - Big-Oh(n+m)
      - Theta(n-m)
      - Big-Oh(n)
    answer: 1
    explanation: Big-Oh(n+m) is the correct answer to “If the expected number of valid shifts is small and modulus is larger than the length of pattern what is the matching time of Rabin Karp Algorithm”. This question is standard in competitive examination syllabi for String Matching.
    keyConcept: String Matching
    testedIn:
      - PPSC
      - FPSC
  - id: 18
    question: Which of the following algorithms formed the basis for the Quick search algorithm?
    options:
      - Boyer-Moore's algorithm
      - Parallel string matching algorithm
      - Binary Search algorithm
      - Linear Search algorithm
    answer: 0
    explanation: Boyer-Moore's algorithm is the correct answer to “Which of the following algorithms formed the basis for the Quick search algorithm”. This question is standard in competitive examination syllabi for String Matching.
    keyConcept: String Matching
    testedIn:
      - PPSC
      - FPSC
  - id: 19
    question: "Given a pattern of length- 5 window, find the valid match in the given text. Pattern: 2 1 9 3 6 Modulus: 21 Index: 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 Text: 9 2 7 2 1 8 3 0 5 7 1 2 1 2 1 9 3 6 2 3 9 7"
    options:
      - 11-16
      - 3-8
      - 13-18
      - 15-20
    answer: 2
    explanation: "13-18 is the correct answer to “Given a pattern of length- 5 window, find the valid match in the given text. Pattern: 2 1 9 3 6 Modulus: 21 Index: 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 Text: 9 2 7 2 1 8 3 0 5 7 1 2 1 2 1 9 3 6 2 3 9 7”. This question is standard in competitive examination syllabi for String Matching."
    keyConcept: String Matching
    testedIn:
      - PPSC
      - FPSC
  - id: 20
    question: Who created the Rabin Karp Algorithm?
    options:
      - Joseph Rabin and Michael Karp
      - Michael Rabin and Joseph Karp
      - Richard Karp and Michael Rabin
      - Michael Karp and Richard Rabin
    answer: 2
    explanation: Richard Karp and Michael Rabin is the correct answer to “Who created the Rabin Karp Algorithm”. This question is standard in competitive examination syllabi for String Matching.
    keyConcept: String Matching
    testedIn:
      - PPSC
      - FPSC
  - id: 21
    question: "Given a pattern of length- 5 window, find the spurious hit in the given text string. Pattern: 3 1 4 1 5 Modulus: 13 Index: 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 Text: 2 3 5 9 0 2 3 1 4 1 5 2 6 7 3 9 9 2 1 3 9"
    options:
      - 6-10
      - 12-16
      - 3-7
      - 13-17
    answer: 3
    explanation: "13-17 is the correct answer to “Given a pattern of length- 5 window, find the spurious hit in the given text string. Pattern: 3 1 4 1 5 Modulus: 13 Index: 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 Text: 2 3 5 9 0 2 3 1 4 1 5 2 6 7 3 9 9 2 1 3 9”. This question is standard in competitive examination syllabi for String Matching."
    keyConcept: String Matching
    testedIn:
      - PPSC
      - FPSC
  - id: 22
    question: What is the basic formula applied in Rabin Karp Algorithm to get the computation time as Theta(m)?
    options:
      - Halving rule
      - Horner's rule
      - Summation lemma
      - Cancellation lemma
    answer: 1
    explanation: Horner's rule is the correct answer to “What is the basic formula applied in Rabin Karp Algorithm to get the computation time as Theta(m)”. This question is standard in competitive examination syllabi for String Matching.
    keyConcept: String Matching
    testedIn:
      - PPSC
      - FPSC
  - id: 23
    question: Quick search algorithm starts searching from the right most character to the left.
    options:
      - "true"
      - "false"
    answer: 1
    explanation: false is the correct answer to “Quick search algorithm starts searching from the right most character to the left.”. This question is standard in competitive examination syllabi for String Matching.
    keyConcept: String Matching
    testedIn:
      - PPSC
      - FPSC
  - id: 24
    question: What character shift tables does Boyer-Moore's search algorithm use?
    options:
      - good-character shift tables
      - bad-character shift tables
      - next-character shift tables
      - both good and bad character shift tables
    answer: 3
    explanation: both good and bad character shift tables is the correct answer to “What character shift tables does Boyer-Moore's search algorithm use”. This question is standard in competitive examination syllabi for String Matching.
    keyConcept: String Matching
    testedIn:
      - PPSC
      - FPSC
  - id: 25
    question: What is a Rabin and Karp Algorithm?
    options:
      - String Matching Algorithm
      - Shortest Path Algorithm
      - Minimum spanning tree Algorithm
      - Approximation Algorithm
    answer: 0
    explanation: String Matching Algorithm is the correct answer to “What is a Rabin and Karp Algorithm”. This question is standard in competitive examination syllabi for String Matching.
    keyConcept: String Matching
    testedIn:
      - PPSC
      - FPSC
  - id: 26
    question: Given input string = "ABCDABCATRYCARCABCSRT" and pattern string = "CAT". Find the first index of the pattern match using quick search algorithm.
    options:
      - "2"
      - "6"
      - "11"
      - "14"
    answer: 1
    explanation: 6 is the correct answer to “Given input string = "ABCDABCATRYCARCABCSRT" and pattern string = "CAT". Find the first index of the pattern match using quick search algorithm.”. This question is standard in competitive examination syllabi for String Matching.
    keyConcept: String Matching
    testedIn:
      - PPSC
      - FPSC
  - id: 27
    question: What is the time complexity of the Quick search algorithm?
    options:
      - O(n)
      - O(log n)
      - O(m+n)
      - O(mn)
    answer: 2
    explanation: O(m+n) is the correct answer to “What is the time complexity of the Quick search algorithm”. This question is standard in competitive examination syllabi for String Matching.
    keyConcept: String Matching
    testedIn:
      - PPSC
      - FPSC
  - id: 28
    question: What character shift tables does quick search algorithm use?
    options:
      - good-character shift tables
      - bad-character shift tables
      - next-character shift tables
      - both good and bad character shift tables
    answer: 1
    explanation: bad-character shift tables is the correct answer to “What character shift tables does quick search algorithm use”. This question is standard in competitive examination syllabi for String Matching.
    keyConcept: String Matching
    testedIn:
      - PPSC
      - FPSC
  - id: 29
    question: The searching phase in quick search algorithm has good practical behaviour.
    options:
      - "true"
      - "false"
    answer: 0
    explanation: true is the correct answer to “The searching phase in quick search algorithm has good practical behaviour.”. This question is standard in competitive examination syllabi for String Matching.
    keyConcept: String Matching
    testedIn:
      - PPSC
      - FPSC
---


