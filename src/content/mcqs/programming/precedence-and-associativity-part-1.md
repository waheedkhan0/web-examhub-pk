---
title: Precedence And Associativity — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Precedence And Associativity — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: precedence-and-associativity-part-1
topicName: Precedence And Associativity — Part 1
author: ExamHub Academic Editorial Board
updatedDate: "2026-10-14"
difficulty: Exam-Level
targetExams:
  - FPSC
  - PPSC
  - NTS
  - NITB
  - PTS
questions:
  - id: 1
    question: What is the result of 10 / 2 * 3 ?
    options:
      - "15"
      - "30"
      - "5"
      - "6"
    answer: 0
    explanation: Multiplication and division have the same precedence and are evaluated left to right.
    keyConcept: Precedence And Associativity
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: What is the result of 2 ** 3 ** 2 ?
    options:
      - "64"
      - "512"
      - "18"
      - "81"
    answer: 1
    explanation: Exponentiation is right-associative, so the expression is evaluated as 2 ** (3 ** 2).
    keyConcept: Precedence And Associativity
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What is the result of 5 - 2 + 1 ?
    options:
      - "2"
      - "4"
      - "-2"
      - "3"
    answer: 1
    explanation: "In Python, operators have specific precedence levels that determine the order in which operations are performed. Subtraction (-) and addition (+) operators have the same precedence level and are evaluated from left to right (left associativity). In the expression 5 - 2 + 1: First, 5 - 2 is evaluated, resulting in 3. Then, 3 + 1 is evaluated, resulting in 4. Thus, the result of the expression 5 - 2 + 1 is 4."
    keyConcept: Precedence And Associativity
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What is the result of 2 * 3 % 4 ?
    options:
      - "0"
      - "1"
      - "2"
      - "3"
    answer: 1
    explanation: Multiplication and modulo have the same precedence and are evaluated left to right.
    keyConcept: Precedence And Associativity
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: What is the result of 12 // 4 / 2 ?
    options:
      - "3.0"
      - "3"
      - "1.0"
      - "1"
    answer: 0
    explanation: The // and / operators have the same precedence and are evaluated left to right.
    keyConcept: Precedence And Associativity
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What is the result of (5 - 2) * 2 ?
    options:
      - "5"
      - "3"
      - "6"
      - "10"
    answer: 2
    explanation: Parentheses have the highest precedence, so the expression inside them is evaluated first.
    keyConcept: Precedence And Associativity
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What is the result of 10 / 2 / 5 ?
    options:
      - "0.5"
      - "1.0"
      - "2.5"
      - "25"
    answer: 0
    explanation: Division has left-to-right associativity, so the result is 0.5.
    keyConcept: Precedence And Associativity
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What is the result of (8 - 4) * 2 / 4 ?
    options:
      - "1"
      - "2"
      - "0.5"
      - "3"
    answer: 1
    explanation: Parentheses have the highest precedence, so the expression inside them is evaluated first.
    keyConcept: Precedence And Associativity
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What is the result of 3 + 2 * (5 - 3) ?
    options:
      - "11"
      - "8"
      - "6"
      - "13"
    answer: 2
    explanation: Parentheses have the highest precedence, so the expression inside them is evaluated first.
    keyConcept: Precedence And Associativity
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What is the result of 10 + 2 * 6 / 3 ?
    options:
      - "14"
      - "16"
      - "8"
      - "12"
    answer: 0
    explanation: Multiplication and division have the same precedence and are evaluated left to right.
    keyConcept: Precedence And Associativity
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What is the result of 4 * 3 % 5 ?
    options:
      - "2"
      - "1"
      - "3"
      - "0"
    answer: 0
    explanation: Multiplication and modulo have the same precedence and are evaluated left to right.
    keyConcept: Precedence And Associativity
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: What is the result of 3 + 4 * 5 ?
    options:
      - "35"
      - "23"
      - "27"
      - "47"
    answer: 1
    explanation: "In Python, expressions are evaluated according to operator precedence , which determines the order in which operations are performed. The multiplication operator (*) has higher precedence than the addition operator (+) . Therefore, in the expression 3 + 4 * 5 , the multiplication is performed first. First step: 4 * 5 = 20 Second step: 3 + 20 = 23 Thus, the final result of the expression is 23 . Hence, the correct answer is Option B: 23 ."
    keyConcept: Precedence And Associativity
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What is the result of (2 + 3) * (5 - 1) ?
    options:
      - "14"
      - "20"
      - "16"
      - "18"
    answer: 0
    explanation: Parentheses have the highest precedence, so the expression inside them is evaluated first.
    keyConcept: Precedence And Associativity
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What is the result of 8 / 2 ** 2 ?
    options:
      - "1"
      - "8"
      - "4"
      - "16"
    answer: 2
    explanation: Exponentiation has higher precedence than division, so 2 ** 2 is evaluated first.
    keyConcept: Precedence And Associativity
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What is the result of 4 + 3 ** 2 % 2 ?
    options:
      - "4"
      - "5"
      - "1"
      - "7"
    answer: 1
    explanation: Exponentiation has higher precedence, so 3 ** 2 is evaluated first, then modulo, and finally addition.
    keyConcept: Precedence And Associativity
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What is the result of 3 + 2 * 4 ** 2 ?
    options:
      - "19"
      - "29"
      - "35"
      - "59"
    answer: 1
    explanation: Exponentiation has higher precedence, so 4 ** 2 is evaluated first, then multiplication and addition follow.
    keyConcept: Precedence And Associativity
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What is the result of 2 ** 3 % 3 ?
    options:
      - "2"
      - "0"
      - "1"
      - "3"
    answer: 2
    explanation: Exponentiation has higher precedence, so 2 ** 3 is evaluated first, then modulo.
    keyConcept: Precedence And Associativity
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: What is the result of 10 - 3 + 2 ?
    options:
      - "5"
      - "9"
      - "-9"
      - "-1"
    answer: 1
    explanation: Addition and subtraction have the same precedence and are evaluated left to right.
    keyConcept: Precedence And Associativity
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: What is the result of 8 - 6 / 2 ?
    options:
      - "4"
      - "5"
      - "1"
      - "2"
    answer: 1
    explanation: Division has higher precedence, so 6 / 2 is evaluated first, then subtracted from 8.
    keyConcept: Precedence And Associativity
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What is the result of 5 % 3 ** 2 ?
    options:
      - "1"
      - "2"
      - "0"
      - "4"
    answer: 2
    explanation: Exponentiation has higher precedence, so 3 ** 2 is evaluated first, then modulo.
    keyConcept: Precedence And Associativity
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: Which operator has the highest precedence in Python?
    options:
      - +
      - "*"
      - /
      - "**"
    answer: 3
    explanation: The exponentiation (**) operator has the highest precedence.
    keyConcept: Precedence And Associativity
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What is the result of 3 ** 2 // 3 ?
    options:
      - "1"
      - "3"
      - "2"
      - "27"
    answer: 0
    explanation: Exponentiation has higher precedence, so 3 ** 2 is evaluated first, then floor division.
    keyConcept: Precedence And Associativity
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: What is the result of 10 / 2 ** 2 * 2 ?
    options:
      - "5"
      - "2"
      - "10"
      - "2.5"
    answer: 0
    explanation: Exponentiation has higher precedence, so 2 ** 2 is evaluated first, then multiplication and division follow.
    keyConcept: Precedence And Associativity
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: "The expression 2**2**3 is evaluates as: (2**2)**3."
    options:
      - "True"
      - "False"
    answer: 1
    explanation: "False is the correct answer to “The expression 2**2**3 is evaluates as: (2**2)**3.”. This question is standard in competitive examination syllabi for Precedence And Associativity."
    keyConcept: Precedence And Associativity
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: What will be the value of the following Python expression? 4+2**5//10
    options:
      - "3"
      - "7"
      - "77"
      - "0"
    answer: 1
    explanation: 7 is the correct answer to “What will be the value of the following Python expression? 4+2**5//10”. This question is standard in competitive examination syllabi for Precedence And Associativity.
    keyConcept: Precedence And Associativity
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Which of the following is the truncation division operator?
    options:
      - /
      - "%"
      - //
      - "|"
    answer: 2
    explanation: // is the correct answer to “Which of the following is the truncation division operator”. This question is standard in competitive examination syllabi for Precedence And Associativity.
    keyConcept: Precedence And Associativity
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: Which of the following expressions involves coercion when evaluated in Python?
    options:
      - 4.7 - 1.5
      - 7.9 * 6.3
      - 1.7 % 2
      - 3.4 + 4.6
    answer: 2
    explanation: 1.7 % 2 is the correct answer to “Which of the following expressions involves coercion when evaluated in Python”. This question is standard in competitive examination syllabi for Precedence And Associativity.
    keyConcept: Precedence And Associativity
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: What will be the value of x in the following Python expression? x = int(43.55+2/2)
    options:
      - "43"
      - "44"
      - "22"
      - "23"
    answer: 1
    explanation: 44 is the correct answer to “What will be the value of x in the following Python expression? x = int(43.55+2/2)”. This question is standard in competitive examination syllabi for Precedence And Associativity.
    keyConcept: Precedence And Associativity
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: What is the value of the following expression? 8/4/2, 8/(4/2)
    options:
      - (1.0, 4.0)
      - (1.0, 1.0)
      - (4.0. 1.0)
      - (4.0, 4.0)
    answer: 0
    explanation: (1.0, 4.0) is the correct answer to “What is the value of the following expression? 8/4/2, 8/(4/2)”. This question is standard in competitive examination syllabi for Precedence And Associativity.
    keyConcept: Precedence And Associativity
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: What will be the value of X in the following Python expression? X = 2+9*((3*12)-8)/10
    options:
      - "30.0"
      - "30.8"
      - "28.4"
      - "27.2"
    answer: 3
    explanation: 27.2 is the correct answer to “What will be the value of X in the following Python expression? X = 2+9*((3*12)-8)/10”. This question is standard in competitive examination syllabi for Precedence And Associativity.
    keyConcept: Precedence And Associativity
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: Which of the following operators has its associativity from right to left?
    options:
      - +
      - //
      - "%"
      - "**"
    answer: 3
    explanation: "** is the correct answer to “Which of the following operators has its associativity from right to left”. This question is standard in competitive examination syllabi for Precedence And Associativity."
    keyConcept: Precedence And Associativity
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: What will be the value of the following Python expression? float(4+int(2.39)%2)
    options:
      - "5.0"
      - "5"
      - "4.0"
      - "4"
    answer: 2
    explanation: 4.0 is the correct answer to “What will be the value of the following Python expression? float(4+int(2.39)%2)”. This question is standard in competitive examination syllabi for Precedence And Associativity.
    keyConcept: Precedence And Associativity
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: The value of the expressions 4/(3*(2-1)) and 4/3*(2-1) is the same.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “The value of the expressions 4/(3*(2-1)) and 4/3*(2-1) is the same.”. This question is standard in competitive examination syllabi for Precedence And Associativity.
    keyConcept: Precedence And Associativity
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: Which of the following expressions is an example of type conversion?
    options:
      - 4.0 + float(3)
      - 5.3 + 6.3
      - 5.0 + 3
      - 3 + 7
    answer: 0
    explanation: 4.0 + float(3) is the correct answer to “Which of the following expressions is an example of type conversion”. This question is standard in competitive examination syllabi for Precedence And Associativity.
    keyConcept: Precedence And Associativity
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: What is the value of the following expression? 2+4.00, 2**4.0
    options:
      - (6.0, 16.0)
      - (6.00, 16.00)
      - (6, 16)
      - (6.00, 16.0)
    answer: 0
    explanation: (6.0, 16.0) is the correct answer to “What is the value of the following expression? 2+4.00, 2**4.0”. This question is standard in competitive examination syllabi for Precedence And Associativity.
    keyConcept: Precedence And Associativity
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: What is the value of the following expression? float(22//3+3/3)
    options:
      - "8"
      - "8.0"
      - "8.3"
      - "8.33"
    answer: 1
    explanation: 8.0 is the correct answer to “What is the value of the following expression? float(22//3+3/3)”. This question is standard in competitive examination syllabi for Precedence And Associativity.
    keyConcept: Precedence And Associativity
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: Which among the following list of operators has the highest precedence? +, -, **, %, /, <<, >>, |
    options:
      - <<, >>
      - "**"
      - "|"
      - "%"
    answer: 1
    explanation: "** is the correct answer to “Which among the following list of operators has the highest precedence? +, -, **, %, /, <<, >>, |”. This question is standard in competitive examination syllabi for Precedence And Associativity."
    keyConcept: Precedence And Associativity
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: What are the values of the following Python expressions? 2**(3**2) (2**3)**2 2**3**2
    options:
      - 64, 512, 64
      - 64, 64, 64
      - 512, 512, 512
      - 512, 64, 512
    answer: 3
    explanation: 512, 64, 512 is the correct answer to “What are the values of the following Python expressions? 2**(3**2) (2**3)**2 2**3**2”. This question is standard in competitive examination syllabi for Precedence And Associativity.
    keyConcept: Precedence And Associativity
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: Which of the following expressions results in an error?
    options:
      - float('10')
      - int('10')
      - float('10.8')
      - int('10.8')
    answer: 3
    explanation: int('10.8') is the correct answer to “Which of the following expressions results in an error”. This question is standard in competitive examination syllabi for Precedence And Associativity.
    keyConcept: Precedence And Associativity
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: Evaluate the expression given below if A = 16 and B = 15. A % B // A
    options:
      - "0.0"
      - "0"
      - "1.0"
      - "1"
    answer: 1
    explanation: 0 is the correct answer to “Evaluate the expression given below if A = 16 and B = 15. A % B // A”. This question is standard in competitive examination syllabi for Precedence And Associativity.
    keyConcept: Precedence And Associativity
    testedIn:
      - FPSC
      - PPSC
---


