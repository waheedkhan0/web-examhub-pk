---
title: Operators And Expressions In C Plus Plus MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Operators And Expressions In C Plus Plus with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: operators-and-expressions-in-c-plus-plus
topicName: Operators And Expressions In C Plus Plus
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
    question: "What is the result of the expression: 5 + 3 * 2 in C++?"
    options:
      - "16"
      - "11"
      - "10"
      - Compiler error
    answer: 0
    explanation: "The correct answer is B: 11 Let's break down why: C++ follows the standard order of operations (often remembered by the acronym PEMDAS/BODMAS). This means: * P arentheses/ B rackets (None in this expression) * E xponents/ O rders (None in this expression) * M ultiplication and D ivision (from left to right) * A ddition and S ubtraction (from left to right) In the expression 5 + 3 * 2: 1. First, we perform the multiplication : 3 * 2 = 6 2. Then, we perform the addition : 5 + 6 = 11 Therefore, the result of the expression is 11. Option A (16) is incorrect because it doesn't follow the order of operations (it would result from doing 5+3 first). Option C (10) is incorrect for the same reason. Option D (Compiler error) is incorrect. The expression is perfectly valid in C++ and will compile and run."
    keyConcept: Operators And Expressions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: "What is the result of the expression: 3 * (4 + 2) in C++?"
    options:
      - "18"
      - "20"
      - "12"
      - Compiler error
    answer: 0
    explanation: "Let's break down this C++ expression step by step, just like you would in regular math! The expression is: 3 * (4 + 2) In C++ (and most programming languages), we follow a set of rules called operator precedence . This means some operations are performed before others. It's similar to the PEMDAS (Parentheses, Exponents, Multiplication/Division, Addition/Subtraction) or BODMAS rule you might know from mathematics. The most important rule here is: Parentheses ( ) always come first! Any calculation inside parentheses is done before anything outside them. 1. First, evaluate the expression inside the parentheses: We have (4 + 2). 4 + 2 = 6 2. Now, substitute this result back into the original expression: The expression now becomes: 3 * 6 3. Finally, perform the multiplication: 3 * 6 = 18 So, the result of the expression 3 * (4 + 2) in C++ is 18 . Therefore, Option A: 18 is the correct answer. Why not other options? * Options B and C are incorrect because they do not follow the correct order of operations. If you did 3 * 4 first (12), then added 2, you'd get 14, which is not an option and still incorrect. The parentheses *must* be solved first. * Option D: Compiler error is incorrect because this is a perfectly valid and well-formed C++ expression. The compiler understands the parentheses and the operators (* and +) and will correctly calculate the result."
    keyConcept: Operators And Expressions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: "What is the output of the following code: cout << (5 != 5); in C++?"
    options:
      - "TRUE"
      - "FALSE"
      - "1"
      - "0"
    answer: 3
    explanation: "This question asks us to find the output of a simple C++ code snippet. The `cout` part is used to print something to the screen in C++. Inside `cout`, we have the expression `(5 != 5)`. Let's break this down. The `!=` is an \"inequality operator\" . It means \"not equal to\". This operator checks if the value on its left side is NOT equal to the value on its right side. So, `5 != 5` is asking: \"Is 5 not equal to 5?\" Let's evaluate this statement: Is 5 actually different from 5? No, 5 is exactly equal to 5. Therefore, the statement `5 != 5` is false . In C++, when you print a boolean value (true or false) directly using `cout` without any special formatting, it typically prints a numerical equivalent: - `true` is usually printed as `1`. - `false` is usually printed as `0`. Since `5 != 5` evaluates to `false`, `cout` will print its numerical representation. Thus, the final output will be 0 . The correct answer is Option D."
    keyConcept: Operators And Expressions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: "What will be the result of the expression: 5 + 3 * 2 in C++?"
    options:
      - "16"
      - "11"
      - "10"
      - "2"
    answer: 1
    explanation: "11 is the correct answer to “What will be the result of the expression: 5 + 3 * 2 in C++”. This question is standard in competitive examination syllabi for Operators And Expressions In C Plus Plus."
    keyConcept: Operators And Expressions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: What is the operator precedence of the multiplication operator (*) in C++?
    options:
      - Highest
      - Lowest
      - Equal to addition
      - Equal to subtraction
    answer: 0
    explanation: Highest is the correct answer to “What is the operator precedence of the multiplication operator (*) in C++”. This question is standard in competitive examination syllabi for Operators And Expressions In C Plus Plus.
    keyConcept: Operators And Expressions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: "What will be the output of the following code: cout << (5 == 5); in C++?"
    options:
      - "TRUE"
      - "FALSE"
      - "1"
      - "0"
    answer: 0
    explanation: "TRUE is the correct answer to “What will be the output of the following code: cout << (5 == 5); in C++”. This question is standard in competitive examination syllabi for Operators And Expressions In C Plus Plus."
    keyConcept: Operators And Expressions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: "What is the result of the expression: 10 / 3 in C++?"
    options:
      - "3"
      - "3.333"
      - "3.34"
      - Compiler error
    answer: 0
    explanation: "3 is the correct answer to “What is the result of the expression: 10 / 3 in C++”. This question is standard in competitive examination syllabi for Operators And Expressions In C Plus Plus."
    keyConcept: Operators And Expressions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: Which of the following operators is used to access the address of a variable in C++?
    options:
      - "&"
      - "*"
      - "-"
      - +
    answer: 0
    explanation: "& is the correct answer to “Which of the following operators is used to access the address of a variable in C++”. This question is standard in competitive examination syllabi for Operators And Expressions In C Plus Plus."
    keyConcept: Operators And Expressions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: "What will be the value of 'x' after executing the code: int x = 5; x += 3; in C++?"
    options:
      - "8"
      - "5"
      - "15"
      - Compiler error
    answer: 0
    explanation: "8 is the correct answer to “What will be the value of 'x' after executing the code: int x = 5; x += 3; in C++”. This question is standard in competitive examination syllabi for Operators And Expressions In C Plus Plus."
    keyConcept: Operators And Expressions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: Which of the following is a unary operator in C++?
    options:
      - +
      - "-"
      - "*"
      - /
    answer: 1
    explanation: "- is the correct answer to “Which of the following is a unary operator in C++”. This question is standard in competitive examination syllabi for Operators And Expressions In C Plus Plus."
    keyConcept: Operators And Expressions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What does the modulus operator (%) do in C++?
    options:
      - Returns the remainder
      - Returns the quotient
      - Returns the sum
      - Returns the product
    answer: 0
    explanation: Returns the remainder is the correct answer to “What does the modulus operator (%) do in C++”. This question is standard in competitive examination syllabi for Operators And Expressions In C Plus Plus.
    keyConcept: Operators And Expressions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: "What is the output of the following code: cout << (10 != 10); in C++?"
    options:
      - "TRUE"
      - "FALSE"
      - "1"
      - "0"
    answer: 1
    explanation: "FALSE is the correct answer to “What is the output of the following code: cout << (10 != 10); in C++”. This question is standard in competitive examination syllabi for Operators And Expressions In C Plus Plus."
    keyConcept: Operators And Expressions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: Which of the following is not a relational operator in C++?
    options:
      - "=="
      - "!="
      - "%"
      - <=
    answer: 2
    explanation: "% is the correct answer to “Which of the following is not a relational operator in C++”. This question is standard in competitive examination syllabi for Operators And Expressions In C Plus Plus."
    keyConcept: Operators And Expressions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: "What will be the value of 'x' after executing the code: int x = 10; x--; in C++?"
    options:
      - "10"
      - "9"
      - "11"
      - Compiler error
    answer: 1
    explanation: "9 is the correct answer to “What will be the value of 'x' after executing the code: int x = 10; x--; in C++”. This question is standard in competitive examination syllabi for Operators And Expressions In C Plus Plus."
    keyConcept: Operators And Expressions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: "What is the result of the expression: 2 * 3 + 5 / 2 in C++?"
    options:
      - "8"
      - "8.5"
      - "9"
      - Compiler error
    answer: 0
    explanation: "8 is the correct answer to “What is the result of the expression: 2 * 3 + 5 / 2 in C++”. This question is standard in competitive examination syllabi for Operators And Expressions In C Plus Plus."
    keyConcept: Operators And Expressions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What is the operator associativity of the assignment operator (=) in C++?
    options:
      - Right to left
      - Left to right
      - Equal to addition
      - Equal to subtraction
    answer: 1
    explanation: Left to right is the correct answer to “What is the operator associativity of the assignment operator (=) in C++”. This question is standard in competitive examination syllabi for Operators And Expressions In C Plus Plus.
    keyConcept: Operators And Expressions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What is the purpose of the modulo operator (%) in C++?
    options:
      - Division remainder
      - Multiplication
      - Exponentiation
      - Bitwise AND
    answer: 0
    explanation: Division remainder is the correct answer to “What is the purpose of the modulo operator (%) in C++”. This question is standard in competitive examination syllabi for Operators And Expressions In C Plus Plus.
    keyConcept: Operators And Expressions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: "What will be the output of the following code: cout << (5 == 5.0); in C++?"
    options:
      - "TRUE"
      - "FALSE"
      - "1"
      - "0"
    answer: 0
    explanation: "TRUE is the correct answer to “What will be the output of the following code: cout << (5 == 5.0); in C++”. This question is standard in competitive examination syllabi for Operators And Expressions In C Plus Plus."
    keyConcept: Operators And Expressions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: Which operator is used to access the memory address of a variable in C++?
    options:
      - "*"
      - "&"
      - "->"
      - "::"
    answer: 1
    explanation: "& is the correct answer to “Which operator is used to access the memory address of a variable in C++”. This question is standard in competitive examination syllabi for Operators And Expressions In C Plus Plus."
    keyConcept: Operators And Expressions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What does the '++' operator do when used as a postfix operator?
    options:
      - Increments after use
      - Increments before use
      - Decrements after use
      - Decrements before use
    answer: 0
    explanation: Increments after use is the correct answer to “What does the '++' operator do when used as a postfix operator”. This question is standard in competitive examination syllabi for Operators And Expressions In C Plus Plus.
    keyConcept: Operators And Expressions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: "What will be the value of 'x' after executing the following code: int x = 5; x += 3; in C++?"
    options:
      - "5"
      - "8"
      - "3"
      - Compiler error
    answer: 1
    explanation: "8 is the correct answer to “What will be the value of 'x' after executing the following code: int x = 5; x += 3; in C++”. This question is standard in competitive examination syllabi for Operators And Expressions In C Plus Plus."
    keyConcept: Operators And Expressions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What is the purpose of the ternary operator (?:) in C++?
    options:
      - Conditional operator
      - Arithmetic operator
      - Bitwise operator
      - Relational operator
    answer: 0
    explanation: Conditional operator is the correct answer to “What is the purpose of the ternary operator (?:) in C++”. This question is standard in competitive examination syllabi for Operators And Expressions In C Plus Plus.
    keyConcept: Operators And Expressions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: "What will be the output of the following code: cout << (4 > 3 ? \"Yes\" : \"No\"); in C++?"
    options:
      - "Yes"
      - "No"
      - "4"
      - "3"
    answer: 0
    explanation: "Yes is the correct answer to “What will be the output of the following code: cout << (4 > 3 ? \"Yes\" : \"No\"); in C++”. This question is standard in competitive examination syllabi for Operators And Expressions In C Plus Plus."
    keyConcept: Operators And Expressions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: What does the 'sizeof' operator return in C++?
    options:
      - Size in bytes
      - Size in bits
      - Memory address
      - Value of the variable
    answer: 0
    explanation: Size in bytes is the correct answer to “What does the 'sizeof' operator return in C++”. This question is standard in competitive examination syllabi for Operators And Expressions In C Plus Plus.
    keyConcept: Operators And Expressions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: Which operator is having the highest precedence?
    options:
      - postfix
      - unary
      - shift
      - equality
    answer: 0
    explanation: postfix is the correct answer to “Which operator is having the highest precedence”. This question is standard in competitive examination syllabi for Operators And Expressions In C Plus Plus.
    keyConcept: Operators And Expressions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; int main () { int x, y; x = 5; y = ++x * ++x; cout << x << y; x = 5; y = x++ * ++x; cout << x << y; return 0; }"
    options:
      - "749735"
      - "736749"
      - "367497"
      - "367597"
    answer: 0
    explanation: "749735 is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; int main () { int x, y; x = 5; y = ++x * ++x; cout << x << y; x = 5; y = x++ * ++x; cout << x << y; return 0; }”. This question is standard in competitive examination syllabi for Operators And Expressions In C Plus Plus."
    keyConcept: Operators And Expressions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; int main() { int a = 5, b = 6, c, d; c = a, b; d = (a, b); cout << c << ' ' << d; return 0; }"
    options:
      - 5 6
      - 6 5
      - 6 7
      - 6 8
    answer: 0
    explanation: "5 6 is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; int main() { int a = 5, b = 6, c, d; c = a, b; d = (a, b); cout << c << ' ' << d; return 0; }”. This question is standard in competitive examination syllabi for Operators And Expressions In C Plus Plus."
    keyConcept: Operators And Expressions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; int main() { int a = 5, b = 6, c; c = (a > b) ? a : b; cout << c; return 0; }"
    options:
      - "6"
      - "5"
      - "4"
      - "7"
    answer: 0
    explanation: "6 is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; int main() { int a = 5, b = 6, c; c = (a > b) ? a : b; cout << c; return 0; }”. This question is standard in competitive examination syllabi for Operators And Expressions In C Plus Plus."
    keyConcept: Operators And Expressions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: What is this operator called ?:?
    options:
      - conditional
      - relational
      - casting operator
      - unrelational
    answer: 0
    explanation: conditional is the correct answer to “What is this operator called ?:”. This question is standard in competitive examination syllabi for Operators And Expressions In C Plus Plus.
    keyConcept: Operators And Expressions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: Which operator is having the right to left associativity in the following?
    options:
      - Array subscripting
      - Function call
      - Addition and subtraction
      - Type cast
    answer: 3
    explanation: Type cast is the correct answer to “Which operator is having the right to left associativity in the following”. This question is standard in competitive examination syllabi for Operators And Expressions In C Plus Plus.
    keyConcept: Operators And Expressions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: What is the use of dynamic_cast operator?
    options:
      - it converts virtual base class to derived class
      - it converts the virtual base object to derived objects
      - it will convert the operator based on precedence
      - it converts the virtual base object to derived class
    answer: 0
    explanation: it converts virtual base class to derived class is the correct answer to “What is the use of dynamic_cast operator”. This question is standard in competitive examination syllabi for Operators And Expressions In C Plus Plus.
    keyConcept: Operators And Expressions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; main() { double a = 21.09399; float b = 10.20; int c ,d; c = (int) a; d = (int) b; cout << c <<' '<< d; return 0; }"
    options:
      - 20 10
      - 10 21
      - 21 10
      - 10 20
    answer: 2
    explanation: "21 10 is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; main() { double a = 21.09399; float b = 10.20; int c ,d; c = (int) a; d = (int) b; cout << c <<' '<< d; return 0; }”. This question is standard in competitive examination syllabi for Operators And Expressions In C Plus Plus."
    keyConcept: Operators And Expressions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; int main() { int i, j; j = 10; i = (j++, j + 100, 999 + j); cout << i; return 0; }"
    options:
      - "1000"
      - "11"
      - "1010"
      - "1001"
    answer: 2
    explanation: "1010 is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; int main() { int i, j; j = 10; i = (j++, j + 100, 999 + j); cout << i; return 0; }”. This question is standard in competitive examination syllabi for Operators And Expressions In C Plus Plus."
    keyConcept: Operators And Expressions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; int main() { int a; a = 5 + 3 * 5; cout << a; return 0; }"
    options:
      - "35"
      - "20"
      - "25"
      - "30"
    answer: 1
    explanation: "20 is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; int main() { int a; a = 5 + 3 * 5; cout << a; return 0; }”. This question is standard in competitive examination syllabi for Operators And Expressions In C Plus Plus."
    keyConcept: Operators And Expressions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
---


