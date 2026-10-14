---
title: Bitwise And Boolean — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Bitwise And Boolean — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: bitwise-and-boolean-part-1
topicName: Bitwise And Boolean — Part 1
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
    question: What is the result of `6 | 3` ?
    options:
      - "9"
      - "6"
      - "3"
      - "7"
    answer: 3
    explanation: The bitwise OR operator ( | ) performs a bitwise OR operation on each corresponding bit of the two numbers. In this case, the binary representation of 6 is 110 , and the binary representation of 3 is 011 . When performing a bitwise OR, if any of the corresponding bits is 1, the result bit will be 1; otherwise, it will be 0. So, performing 6 | 3 results in 111 , which is 7 in decimal notation. Therefore, the correct answer is Option D.
    keyConcept: Bitwise And Boolean
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: What is the result of 10 ^ 6 ?
    options:
      - "16"
      - "12"
      - "4"
      - "14"
    answer: 1
    explanation: The ^ operator performs bitwise XOR on the binary representations of the numbers.
    keyConcept: Bitwise And Boolean
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What is the result of 7 << 2 ?
    options:
      - "28"
      - "7"
      - "14"
      - "4"
    answer: 0
    explanation: The << operator performs left shift, shifting the bits to the left.
    keyConcept: Bitwise And Boolean
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What is the result of True ^ False ?
    options:
      - "True"
      - "False"
      - None
      - Error
    answer: 0
    explanation: The ^ operator performs bitwise XOR on the boolean values, resulting in True.
    keyConcept: Bitwise And Boolean
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: What is the result of not (3 > 5) ?
    options:
      - "True"
      - "False"
      - None
      - Error
    answer: 0
    explanation: The not operator returns the opposite of its operand's boolean value.
    keyConcept: Bitwise And Boolean
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What is the result of not (True or False) ?
    options:
      - "True"
      - "False"
      - None
      - Error
    answer: 1
    explanation: The not operator negates the boolean value, resulting in False.
    keyConcept: Bitwise And Boolean
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What is the result of (10 >> 1) & 3 ?
    options:
      - "1"
      - "3"
      - "2"
      - "0"
    answer: 0
    explanation: The >> and & operators are evaluated from left to right.
    keyConcept: Bitwise And Boolean
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What is the result of 7 ^ 7 ?
    options:
      - "0"
      - "14"
      - "7"
      - "1"
    answer: 0
    explanation: The XOR operation with the same number results in 0.
    keyConcept: Bitwise And Boolean
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What is the result of 12 ^ (7 << 1) ?
    options:
      - "26"
      - "22"
      - "20"
      - "10"
    answer: 1
    explanation: Parentheses are used to indicate the order of operations.
    keyConcept: Bitwise And Boolean
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What is the result of ~5 ?
    options:
      - "5"
      - "-5"
      - "10"
      - "-6"
    answer: 1
    explanation: The ~ operator performs bitwise NOT, inverting the bits of the number.
    keyConcept: Bitwise And Boolean
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What is the result of 5 ^ 5 ?
    options:
      - "0"
      - "10"
      - "5"
      - "1"
    answer: 0
    explanation: The XOR operation with the same number results in 0.
    keyConcept: Bitwise And Boolean
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: What is the result of 9 ^ (5 & 3) ?
    options:
      - "8"
      - "7"
      - "1"
      - "2"
    answer: 2
    explanation: The ^ and & operators are evaluated from left to right.
    keyConcept: Bitwise And Boolean
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What is the result of not (10 > 5) ?
    options:
      - "True"
      - "False"
      - None
      - Error
    answer: 1
    explanation: The not operator returns the opposite of its operand's boolean value.
    keyConcept: Bitwise And Boolean
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What is the result of 5 & 6 ^ 6 ?
    options:
      - "6"
      - "5"
      - "0"
      - "1"
    answer: 2
    explanation: The & and ^ operators are evaluated from left to right.
    keyConcept: Bitwise And Boolean
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What is the result of 12 >> 2 ?
    options:
      - "3"
      - "6"
      - "12"
      - "48"
    answer: 0
    explanation: The >> operator performs right shift, shifting the bits to the right.
    keyConcept: Bitwise And Boolean
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What is the result of `(6 | 3) ^ 5` ?
    options:
      - "0"
      - "1"
      - "4"
      - "7"
    answer: 0
    explanation: 0 is the correct answer to “What is the result of `(6 | 3) ^ 5`”. This question is standard in competitive examination syllabi for Bitwise And Boolean.
    keyConcept: Bitwise And Boolean
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What will be the value of x in the following Python expression, if the result of that expression is 2? x>>2
    options:
      - "8"
      - "4"
      - "2"
      - "1"
    answer: 0
    explanation: 8 is the correct answer to “What will be the value of x in the following Python expression, if the result of that expression is 2? x>>2”. This question is standard in competitive examination syllabi for Bitwise And Boolean.
    keyConcept: Bitwise And Boolean
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: Which of the following represents the bitwise XOR operator?
    options:
      - "&"
      - ^
      - "|"
      - "!"
    answer: 1
    explanation: ^ is the correct answer to “Which of the following represents the bitwise XOR operator”. This question is standard in competitive examination syllabi for Bitwise And Boolean.
    keyConcept: Bitwise And Boolean
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: "The one's complement of 110010101 is:"
    options:
      - "001101010"
      - "110010101"
      - "001101011"
      - "110010100"
    answer: 0
    explanation: 001101010 is the correct answer to “The one's complement of 110010101 is:”. This question is standard in competitive examination syllabi for Bitwise And Boolean.
    keyConcept: Bitwise And Boolean
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What will be the output of the following Python code snippet? not(10<20) and not(10>30)
    options:
      - "True"
      - "False"
      - Error
      - No output
    answer: 1
    explanation: False is the correct answer to “What will be the output of the following Python code snippet? not(10<20) and not(10>30)”. This question is standard in competitive examination syllabi for Bitwise And Boolean.
    keyConcept: Bitwise And Boolean
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: What is the result of `5 & 9 | 1` ?
    options:
      - "13"
      - "5"
      - "9"
      - "1"
    answer: 0
    explanation: 13 is the correct answer to “What is the result of `5 & 9 | 1`”. This question is standard in competitive examination syllabi for Bitwise And Boolean.
    keyConcept: Bitwise And Boolean
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What is the two's complement of -44?
    options:
      - "1011011"
      - "11010100"
      - "11101011"
      - "10110011"
    answer: 1
    explanation: 11010100 is the correct answer to “What is the two's complement of -44”. This question is standard in competitive examination syllabi for Bitwise And Boolean.
    keyConcept: Bitwise And Boolean
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: "Any odd number on being AND-ed with . . . . . . . . always gives 1. Hint: Any even number on being AND-ed with this value always gives 0."
    options:
      - "10"
      - "2"
      - "1"
      - "0"
    answer: 2
    explanation: "1 is the correct answer to “Any odd number on being AND-ed with . . . . . . . . always gives 1. Hint: Any even number on being AND-ed with this value always gives 0.”. This question is standard in competitive examination syllabi for Bitwise And Boolean."
    keyConcept: Bitwise And Boolean
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: What will be the output of the following Python code snippet? not(3>4) not(1&1)
    options:
      - True True
      - True False
      - False True
      - False False
    answer: 1
    explanation: True False is the correct answer to “What will be the output of the following Python code snippet? not(3>4) not(1&1)”. This question is standard in competitive examination syllabi for Bitwise And Boolean.
    keyConcept: Bitwise And Boolean
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: What will be the output of the following Python code? l=[1, 0, 2, 0, 'hello', '', []] list(filter(bool, l))
    options:
      - Error
      - "[1, 0, 2, 0, 'hello', \", []]"
      - "[1, 0, 2, 'hello', \", []]"
      - "[1, 2, 'hello']"
    answer: 3
    explanation: "[1, 2, 'hello'] is the correct answer to “What will be the output of the following Python code? l=[1, 0, 2, 0, 'hello', '', []] list(filter(bool, l))”. This question is standard in competitive examination syllabi for Bitwise And Boolean."
    keyConcept: Bitwise And Boolean
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Which of the following Boolean expressions is not logically equivalent to the other three?
    options:
      - not(-6<0 or-6>10)
      - "-6>=0 and -6<=10"
      - not(-6<10 or-6==10)
      - not(-6>10 or-6==10)
    answer: 3
    explanation: not(-6>10 or-6==10) is the correct answer to “Which of the following Boolean expressions is not logically equivalent to the other three”. This question is standard in competitive examination syllabi for Bitwise And Boolean.
    keyConcept: Bitwise And Boolean
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: What is the result of `(4 | 2) & 6` ?
    options:
      - "0"
      - "6"
      - "2"
      - "4"
    answer: 2
    explanation: 2 is the correct answer to “What is the result of `(4 | 2) & 6`”. This question is standard in competitive examination syllabi for Bitwise And Boolean.
    keyConcept: Bitwise And Boolean
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: What will be the output of the following Python code if the system date is 21st June, 2017 (Wednesday)? [] or {} {} or []
    options:
      - "[] {}"
      - "[] []"
      - "{} []"
      - "{} {}"
    answer: 2
    explanation: "{} [] is the correct answer to “What will be the output of the following Python code if the system date is 21st June, 2017 (Wednesday)? [] or {} {} or []”. This question is standard in competitive examination syllabi for Bitwise And Boolean."
    keyConcept: Bitwise And Boolean
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: What is the result of `(8 >> 2) | (1 << 2)` ?
    options:
      - "10"
      - "5"
      - "9"
      - "4"
    answer: 0
    explanation: 10 is the correct answer to “What is the result of `(8 >> 2) | (1 << 2)`”. This question is standard in competitive examination syllabi for Bitwise And Boolean.
    keyConcept: Bitwise And Boolean
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: What will be the output of the following Python code snippet if x=1? x<<2
    options:
      - "8"
      - "1"
      - "2"
      - "4"
    answer: 3
    explanation: 4 is the correct answer to “What will be the output of the following Python code snippet if x=1? x<<2”. This question is standard in competitive examination syllabi for Bitwise And Boolean.
    keyConcept: Bitwise And Boolean
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: What is the value of the following Python expression? bin(0x8)
    options:
      - "'0bx1000'"
      - "8"
      - "1000"
      - "'0b1000'"
    answer: 3
    explanation: "'0b1000' is the correct answer to “What is the value of the following Python expression? bin(0x8)”. This question is standard in competitive examination syllabi for Bitwise And Boolean."
    keyConcept: Bitwise And Boolean
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: What will be the value of the following Python expression? bin(10-2)+bin(12^4)
    options:
      - "0b10000"
      - "0b10001000"
      - 0b1000b1000
      - 0b10000b1000
    answer: 3
    explanation: 0b10000b1000 is the correct answer to “What will be the value of the following Python expression? bin(10-2)+bin(12^4)”. This question is standard in competitive examination syllabi for Bitwise And Boolean.
    keyConcept: Bitwise And Boolean
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: What is the result of `5 << 1 | 2 >> 1` ?
    options:
      - "3"
      - "4"
      - "5"
      - "2"
    answer: 2
    explanation: 5 is the correct answer to “What is the result of `5 << 1 | 2 >> 1`”. This question is standard in competitive examination syllabi for Bitwise And Boolean.
    keyConcept: Bitwise And Boolean
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: What will be the output of the following Python code snippet? ['hello', 'morning'][bool('')]
    options:
      - error
      - no output
      - hello
      - morning
    answer: 2
    explanation: hello is the correct answer to “What will be the output of the following Python code snippet? ['hello', 'morning'][bool('')]”. This question is standard in competitive examination syllabi for Bitwise And Boolean.
    keyConcept: Bitwise And Boolean
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: "What will be the output of the following Python code? if (9 < 0) and (0 < -9): print(\"hello\") elif (9 > 0) or False: print(\"good\") else: print(\"bad\")"
    options:
      - error
      - hello
      - good
      - bad
    answer: 2
    explanation: "good is the correct answer to “What will be the output of the following Python code? if (9 < 0) and (0 < -9): print(\"hello\") elif (9 > 0) or False: print(\"good\") else: print(\"bad\")”. This question is standard in competitive examination syllabi for Bitwise And Boolean."
    keyConcept: Bitwise And Boolean
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: What will be the output of the following Python expression? 4^12
    options:
      - "2"
      - "4"
      - "8"
      - "12"
    answer: 2
    explanation: 8 is the correct answer to “What will be the output of the following Python expression? 4^12”. This question is standard in competitive examination syllabi for Bitwise And Boolean.
    keyConcept: Bitwise And Boolean
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: Which of the following expressions can be used to multiply a given number 'a' by 4?
    options:
      - a<<2
      - a<<4
      - a>>2
      - a>>4
    answer: 0
    explanation: a<<2 is the correct answer to “Which of the following expressions can be used to multiply a given number 'a' by 4”. This question is standard in competitive examination syllabi for Bitwise And Boolean.
    keyConcept: Bitwise And Boolean
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: What will be the output of the following Python code snippet? bool(‘False’) bool()
    options:
      - True True
      - False True
      - False False
      - True False
    answer: 3
    explanation: True False is the correct answer to “What will be the output of the following Python code snippet? bool(‘False’) bool()”. This question is standard in competitive examination syllabi for Bitwise And Boolean.
    keyConcept: Bitwise And Boolean
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: What will be the output of the following Python code if a=10 and b =20? a=10 b=20 a=a^b b=a^b a=a^b print(a,b)
    options:
      - 10 20
      - 10 10
      - 20 10
      - 20 20
    answer: 2
    explanation: 20 10 is the correct answer to “What will be the output of the following Python code if a=10 and b =20? a=10 b=20 a=a^b b=a^b a=a^b print(a,b)”. This question is standard in competitive examination syllabi for Bitwise And Boolean.
    keyConcept: Bitwise And Boolean
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: What will be the output of the following Python code? ['f', 't'][bool('spam')]
    options:
      - t
      - f
      - No output
      - Error
    answer: 0
    explanation: t is the correct answer to “What will be the output of the following Python code? ['f', 't'][bool('spam')]”. This question is standard in competitive examination syllabi for Bitwise And Boolean.
    keyConcept: Bitwise And Boolean
    testedIn:
      - FPSC
      - PPSC
---


