---
title: Operators — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Operators — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: operators-part-2
topicName: Operators — Part 2
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
    question: What will be the output? if(1 + 1 + 1 + 1 + 1 == 5){ System.out.print("TRUE"); } else{ System.out.print("FLASE"); }
    options:
      - "TRUE"
      - "FALSE"
      - Compiler Error
      - None of these
    answer: 0
    explanation: TRUE is the correct answer to “What will be the output? if(1 + 1 + 1 + 1 + 1 == 5){ System.out.print("TRUE"); } else{ System.out.print("FLASE"); }”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: What will be the output? public class Test{ public static void main(String args[]){ System.out.print(""==""); System.out.print(" "); System.out.print("A"=="A"); System.out.print(" "); System.out.print("a==A"); } }
    options:
      - "\"==\" A\"==\"A a==A"
      - true true false
      - true true a==A
      - Compilation Fails
      - None of the above
    answer: 2
    explanation: true true a==A is the correct answer to “What will be the output? public class Test{ public static void main(String args[]){ System.out.print(""==""); System.out.print(" "); System.out.print("A"=="A"); System.out.print(" "); System.out.print("a==A"); } }”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What will be the output of the following Java code? class operators { public static void main(String args[]) { int var1 = 5; int var2 = 6; int var3; var3 = ++ var2 * var1 / var2 + var2; System.out.print(var3); } }
    options:
      - "10"
      - "11"
      - "12"
      - "56"
    answer: 2
    explanation: 12 is the correct answer to “What will be the output of the following Java code? class operators { public static void main(String args[]) { int var1 = 5; int var2 = 6; int var3; var3 = ++ var2 * var1 / var2 + var2; System.out.print(var3); } }”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: Which of these are selection statements in Java?
    options:
      - if()
      - for()
      - continue
      - break
    answer: 0
    explanation: if() is the correct answer to “Which of these are selection statements in Java”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: On applying Left shift operator, <<, on integer bits are lost one they are shifted past which position bit?
    options:
      - "1"
      - "32"
      - "33"
      - "31"
    answer: 3
    explanation: 31 is the correct answer to “On applying Left shift operator, <<, on integer bits are lost one they are shifted past which position bit”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: With x = 0, which of the following are legal lines of Java code for changing the value of x to 1? 1. x++; 2. x = x + 1; 3. x += 1; 4. x =+ 1;
    options:
      - 1, 2 & 3
      - 1 & 4
      - 1, 2, 3 & 4
      - 3 & 2
    answer: 2
    explanation: 1, 2, 3 & 4 is the correct answer to “With x = 0, which of the following are legal lines of Java code for changing the value of x to 1? 1. x++; 2. x = x + 1; 3. x += 1; 4. x =+ 1;”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: Which of the following can be operands of arithmetic operators?
    options:
      - Numeric
      - Boolean
      - Characters
      - Both Numeric & Characters
    answer: 3
    explanation: Both Numeric & Characters is the correct answer to “Which of the following can be operands of arithmetic operators”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What will be the output of the following Java program? class jump_statments { public static void main(String args[]) { int x = 2; int y = 0; for ( ; y < 10; ++y) { if (y % x == 0) continue; else if (y == 8) break; else System.out.print(y + " "); } } }
    options:
      - 1 3 5 7
      - 2 4 6 8
      - 1 3 5 7 9
      - 1 2 3 4 5 6 7 8 9
    answer: 2
    explanation: 1 3 5 7 9 is the correct answer to “What will be the output of the following Java program? class jump_statments { public static void main(String args[]) { int x = 2; int y = 0; for ( ; y < 10; ++y) { if (y % x == 0) continue; else if (y == 8) break; else System.out.print(y + " "); } } }”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: Which operator is used to invert all the digits in a binary representation of a number?
    options:
      - "~"
      - <<<
      - ">>>"
      - ^
    answer: 0
    explanation: ~ is the correct answer to “Which operator is used to invert all the digits in a binary representation of a number”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What will be the output of the following Java program? class leftshift_operator { public static void main(String args[]) { byte x = 64; int i; byte y; i = x << 2; y = (byte) (x << 2) System.out.print(i + " " + y); } }
    options:
      - 0 64
      - 64 0
      - 0 256
      - 256 0
    answer: 3
    explanation: 256 0 is the correct answer to “What will be the output of the following Java program? class leftshift_operator { public static void main(String args[]) { byte x = 64; int i; byte y; i = x << 2; y = (byte) (x << 2) System.out.print(i + " " + y); } }”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: Which of these statements are incorrect?
    options:
      - Equal to operator has least precedence
      - Brackets () have highest precedence
      - Division operator, /, has higher precedence than multiplication operator
      - Addition operator, +, and subtraction operator have equal precedence
    answer: 2
    explanation: Division operator, /, has higher precedence than multiplication operator is the correct answer to “Which of these statements are incorrect”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: What will be the output of the following Java program? class comma_operator { public static void main(String args[]) { int sum = 0; for (int i = 0, j = 0; i < 5 & j < 5; ++i, j = i + 1) sum += i; System.out.println(sum); } }
    options:
      - "5"
      - "6"
      - "14"
      - compilation error
    answer: 1
    explanation: 6 is the correct answer to “What will be the output of the following Java program? class comma_operator { public static void main(String args[]) { int sum = 0; for (int i = 0, j = 0; i < 5 & j < 5; ++i, j = i + 1) sum += i; System.out.println(sum); } }”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: Which of these jump statements can skip processing the remainder of the code in its body for a particular iteration?
    options:
      - break
      - return
      - exit
      - continue
    answer: 3
    explanation: continue is the correct answer to “Which of these jump statements can skip processing the remainder of the code in its body for a particular iteration”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: Which of these operators can skip evaluating right hand operand?
    options:
      - "!"
      - "|"
      - "&"
      - "&&"
    answer: 3
    explanation: "&& is the correct answer to “Which of these operators can skip evaluating right hand operand”. This question is standard in competitive examination syllabi for Operators."
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: Which of the following is used with the switch statement?
    options:
      - Continue
      - Exit
      - break
      - do
    answer: 2
    explanation: break is the correct answer to “Which of the following is used with the switch statement”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What will be the output of the following Java code? class Relational_operator { public static void main(String args[]) { int var1 = 5; int var2 = 6; System.out.print(var1 > var2); } }
    options:
      - "1"
      - "0"
      - "true"
      - "false"
    answer: 3
    explanation: false is the correct answer to “What will be the output of the following Java code? class Relational_operator { public static void main(String args[]) { int var1 = 5; int var2 = 6; System.out.print(var1 > var2); } }”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What will be the output of the following Java program? class increment { public static void main(String args[]) { double var1 = 1 + 5; double var2 = var1 / 4; int var3 = 1 + 5; int var4 = var3 / 4; System.out.print(var2 + " " + var4); } }
    options:
      - 1 1
      - 0 1
      - 1.5 1
      - 1.5 1.0
    answer: 2
    explanation: 1.5 1 is the correct answer to “What will be the output of the following Java program? class increment { public static void main(String args[]) { double var1 = 1 + 5; double var2 = var1 / 4; int var3 = 1 + 5; int var4 = var3 / 4; System.out.print(var2 + " " + var4); } }”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: "What is the order of precedence (highest to lowest) of following operators? 1. & 2. ^ 3. ?:"
    options:
      - 1 > 2 > 3
      - 2 > 1 > 3
      - 3 > 2 > 1
      - 2 > 3 > 1
    answer: 0
    explanation: 1 > 2 > 3 is the correct answer to “What is the order of precedence (highest to lowest) of following operators? 1. & 2. ^ 3. ?:”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: What will be the output of the following Java program? class rightshift_operator { public static void main(String args[]) { int x; x = 10; x = x >> 1; System.out.println(x); } }
    options:
      - "10"
      - "5"
      - "2"
      - "20"
    answer: 1
    explanation: 5 is the correct answer to “What will be the output of the following Java program? class rightshift_operator { public static void main(String args[]) { int x; x = 10; x = x >> 1; System.out.println(x); } }”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: Which of these lines of Java code will give better performance? 1. a | 4 + c >> b & 7; 2. (a | ((( 4 * c ) >> b ) & 7 ))
    options:
      - 1 will give better performance as it has no parentheses
      - 2 will give better performance as it has parentheses
      - Both 1 & 2 will give equal performance
      - Dependent on the computer system
    answer: 2
    explanation: Both 1 & 2 will give equal performance is the correct answer to “Which of these lines of Java code will give better performance? 1. a | 4 + c >> b & 7; 2. (a | ((( 4 * c ) >> b ) & 7 ))”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: "What will be the output of the following Java program? class Output { public static void main(String args[]) { int a = 5; int b = 10; first: { second: { third: { if (a == b >> 1) break second; } System.out.println(a); } System.out.println(b); } } }"
    options:
      - 5 10
      - 10 5
      - "5"
      - "10"
    answer: 3
    explanation: "10 is the correct answer to “What will be the output of the following Java program? class Output { public static void main(String args[]) { int a = 5; int b = 10; first: { second: { third: { if (a == b >> 1) break second; } System.out.println(a); } System.out.println(b); } } }”. This question is standard in competitive examination syllabi for Operators."
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What will be the output of the following Java code? class operators { public static void main(String args[]) { int x = 8; System.out.println(++x * 3 + " " + x); } }
    options:
      - 24 8
      - 24 9
      - 27 8
      - 27 9
    answer: 3
    explanation: 27 9 is the correct answer to “What will be the output of the following Java code? class operators { public static void main(String args[]) { int x = 8; System.out.println(++x * 3 + " " + x); } }”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: Which right shift operator preserves the sign of the value?
    options:
      - "<<"
      - ">>"
      - <<=
      - ">>="
    answer: 1
    explanation: ">> is the correct answer to “Which right shift operator preserves the sign of the value”. This question is standard in competitive examination syllabi for Operators."
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: What is true about do statement?
    options:
      - do statement executes the code of a loop at least once
      - do statement does not get execute if condition is not matched in the first iteration
      - do statement checks the condition at the beginning of the loop
      - do statement executes the code more than once always
    answer: 0
    explanation: do statement executes the code of a loop at least once is the correct answer to “What is true about do statement”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: What will be the output of the following Java program? class Output { public static void main(String args[]) { int a = 1; int b = 2; int c = 3; a |= 4; b >>= 1; c <<= 1; a ^= c; System.out.println(a + " " + b + " " + c); } }
    options:
      - 3 1 6
      - 2 2 3
      - 2 3 4
      - 3 3 6
    answer: 0
    explanation: 3 1 6 is the correct answer to “What will be the output of the following Java program? class Output { public static void main(String args[]) { int a = 1; int b = 2; int c = 3; a |= 4; b >>= 1; c <<= 1; a ^= c; System.out.println(a + " " + b + " " + c); } }”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Which of these is not a bitwise operator?
    options:
      - "&"
      - "&="
      - "|="
      - <=
    answer: 3
    explanation: <= is the correct answer to “Which of these is not a bitwise operator”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: What will be the output of the following Java program? class increment { public static void main(String args[]) { int g = 3; System.out.print(++g * 8); } }
    options:
      - "25"
      - "24"
      - "32"
      - "33"
    answer: 2
    explanation: 32 is the correct answer to “What will be the output of the following Java program? class increment { public static void main(String args[]) { int g = 3; System.out.print(++g * 8); } }”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: What will be the output of the following Java code? class Output { public static void main(String args[]) { int x=y=z=20; } }
    options:
      - compile and runs fine
      - "20"
      - run time error
      - compile time error
    answer: 3
    explanation: compile time error is the correct answer to “What will be the output of the following Java code? class Output { public static void main(String args[]) { int x=y=z=20; } }”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: What will be the output of the following Java program? class Output { public static void main(String args[]) { final int a=10,b=20; while(a<b) { System.out.println("Hello"); } System.out.println("World"); } }
    options:
      - Hello
      - run time error
      - Hello world
      - compile time error
    answer: 3
    explanation: compile time error is the correct answer to “What will be the output of the following Java program? class Output { public static void main(String args[]) { final int a=10,b=20; while(a<b) { System.out.println("Hello"); } System.out.println("World"); } }”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: Can 8 byte long data type be automatically type cast to 4 byte float data type?
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “Can 8 byte long data type be automatically type cast to 4 byte float data type”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: What will be the output of the following Java code? class Output { public static void main(String args[]) { boolean a = true; boolean b = false; boolean c = a ^ b; System.out.println(!c); } }
    options:
      - "0"
      - "1"
      - "false"
      - "true"
    answer: 2
    explanation: false is the correct answer to “What will be the output of the following Java code? class Output { public static void main(String args[]) { boolean a = true; boolean b = false; boolean c = a ^ b; System.out.println(!c); } }”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: What is the value stored in x in the following lines of Java code? int x, y, z; x = 0; y = 1; x = y = z = 8;
    options:
      - "0"
      - "1"
      - "9"
      - "8"
    answer: 3
    explanation: 8 is the correct answer to “What is the value stored in x in the following lines of Java code? int x, y, z; x = 0; y = 1; x = y = z = 8;”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: What will be the output of the following Java program? class Output { public static void main(String args[]) { int a = 1; int b = 2; int c; int d; c = ++b; d = a++; c++; b++; ++a; System.out.println(a + " " + b + " " + c); } }
    options:
      - 3 2 4
      - 3 2 3
      - 2 3 4
      - 3 4 4
    answer: 3
    explanation: 3 4 4 is the correct answer to “What will be the output of the following Java program? class Output { public static void main(String args[]) { int a = 1; int b = 2; int c; int d; c = ++b; d = a++; c++; b++; ++a; System.out.println(a + " " + b + " " + c); } }”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: What will be the output of the following Java code? class Output { public static void main(String args[]) { int x , y = 1; x = 10; if (x != 10 && x / 0 == 0) System.out.println(y); else System.out.println(++y); } }
    options:
      - "1"
      - "2"
      - Runtime error owing to division by zero in if condition
      - Unpredictable behavior of program
    answer: 1
    explanation: 2 is the correct answer to “What will be the output of the following Java code? class Output { public static void main(String args[]) { int x , y = 1; x = 10; if (x != 10 && x / 0 == 0) System.out.println(y); else System.out.println(++y); } }”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: Which of the following loops will execute the body of loop even when condition controlling the loop is initially false?
    options:
      - do-while
      - while
      - for
      - none of the mentioned
    answer: 0
    explanation: do-while is the correct answer to “Which of the following loops will execute the body of loop even when condition controlling the loop is initially false”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: What will be the output of the following Java program? class bitwise_operator { public static void main(String args[]) { int a = 3; int b = 6; int c = a | b; int d = a & b; System.out.println(c + " " + d); } }
    options:
      - 7 2
      - 7 7
      - 7 5
      - 5 2
    answer: 0
    explanation: 7 2 is the correct answer to “What will be the output of the following Java program? class bitwise_operator { public static void main(String args[]) { int a = 3; int b = 6; int c = a | b; int d = a & b; System.out.println(c + " " + d); } }”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: "Which of the following operators can operate on a boolean variable? 1. && 2. == 3. ?: 4. +="
    options:
      - 3 & 2
      - 1 & 4
      - 1, 2 & 4
      - 1, 2 & 3
    answer: 3
    explanation: "1, 2 & 3 is the correct answer to “Which of the following operators can operate on a boolean variable? 1. && 2. == 3. ?: 4. +=”. This question is standard in competitive examination syllabi for Operators."
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: What will be the output of the following Java program? class Modulus { public static void main(String args[]) { double a = 25.64; int b = 25; a = a % 10; b = b % 10; System.out.println(a + " " + b); } }
    options:
      - 5.640000000000001 5
      - 5.640000000000001 5.0
      - 5 5
      - 5 5.640000000000001
    answer: 0
    explanation: 5.640000000000001 5 is the correct answer to “What will be the output of the following Java program? class Modulus { public static void main(String args[]) { double a = 25.64; int b = 25; a = a % 10; b = b % 10; System.out.println(a + " " + b); } }”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: "What should be expression1 evaluate to in using ternary operator as in this line? expression1 ? expression2 : expression3"
    options:
      - Integer
      - Floating - point numbers
      - Boolean
      - None of the mentioned
    answer: 2
    explanation: "Boolean is the correct answer to “What should be expression1 evaluate to in using ternary operator as in this line? expression1 ? expression2 : expression3”. This question is standard in competitive examination syllabi for Operators."
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: Modulus operator, %, can be applied to which of these?
    options:
      - Integers
      - Floating - point numbers
      - Both Integers and floating - point numbers
      - None of the mentioned
    answer: 2
    explanation: Both Integers and floating - point numbers is the correct answer to “Modulus operator, %, can be applied to which of these”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
---


