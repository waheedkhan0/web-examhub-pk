---
title: Operators And Expressions — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Operators And Expressions — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: operators-and-expressions-part-2
topicName: Operators And Expressions — Part 2
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
    question: "Find the output of the following program. #include<stdio.h> void main() { int y=10; if(y++>9 && y++!=11 && y++>11) printf(\"%d\", y); else printf(\"%d\", y); }"
    options:
      - "11"
      - "12"
      - "13"
      - "14"
      - Compilation error
    answer: 1
    explanation: Since the second condition is false so, further conditions will not be checked, it will be skipped.
    keyConcept: Operators And Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: "Choose the correct output for the following program. #include<stdio.h> void main() { int a=10, b=11, c=13, d; d = (a=c, b+=a, c=a+b+c); printf(\"%d %d %d %d\", d, a, b, c); }"
    options:
      - 50, 13, 11, 13
      - 50, 13, 24, 50
      - 13, 10, 24, 50
      - 50, 13, 24, 13
      - 13, 13, 24, 13
    answer: 1
    explanation: For any comma separated expression the outcome is the right most part.
    keyConcept: Operators And Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Which operator from the following has the lowest priority?
    options:
      - Assignment operator
      - Division operator
      - Comma operator
      - Conditional operator
      - Unary-operator
    answer: 2
    explanation: C Operator Precedence Table
    keyConcept: Operators And Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: "Identify the correct output of the following code: void main() { int w=10, x=5, y=3, z=3; if( (w < x ) && (y=z++) ) printf(\"%d %d %d %d\", w, x, y, z); else printf(\"%d %d %d %d\", w, x, y, z); }"
    options:
      - 10 5 4 4
      - 10 5 3 3
      - 10 5 4 3
      - 10 5 3 4
      - 10 5 5 5
    answer: 1
    explanation: As the first condition ( w < x) is false and the logical operator && is used, the entire relation becomes false and the second part ( y = z++) is not executed.
    keyConcept: Operators And Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: Given b=110 and c=20 , what is the value of 'a' after execution of the expression a=b-=c*=5?
    options:
      - "450"
      - "10"
      - "110"
      - "-10"
      - "-110"
    answer: 1
    explanation: As the expression is evaluated from right to left.
    keyConcept: Operators And Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: what will be the output when following code is executed? void main() { int a=10, b; b = a++ + ++a; printf("%d %d %d %d", b, a++, a, ++a); }
    options:
      - 12 10 11 13
      - 22 12 12 13
      - 22 11 11 11
      - 22 14 12 13
      - 22 13 14 14
    answer: 4
    explanation: "Step 1: Initialize a with the value 10. Step 2: Declare b without initialization (the initial value is undefined). Step 3: Evaluate a++ (post-increment): - The current value of a is 10. - After evaluating a++ , a becomes 11. Step 4: Evaluate ++a (pre-increment): - ++a increments a to 12 and returns the updated value, which is 12. Step 5: Sum the values obtained in steps 3 and 4: 10 + 12 equals 22. Step 6: Assign the sum (22) to b . Step 7: The printf function follows the stack Last-In-First-Out (LIFO) concept, which means that the expressions are evaluated from right to left. Step 8: The first expression to be evaluated is ++a : - ++a increments a to 13 and returns the updated value, which is 13. Step 9: The next expression to be evaluated is a++ : - a++ returns the current value of a (13) and then increments a to 14. - The returned value is 13. Step 10: Finally, the last expression to be evaluated is a , which has the current value of 14. Therefore, the output of the program will be: 22 13 14 14 This output corresponds to the value of b , followed by the evaluated values of a++ , a , and ++a , respectively, in the printf statement."
    keyConcept: Operators And Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: Which among the following is never possible as an output for a float?
    options:
      - "3.666666"
      - "3.666"
      - "3"
      - None of the mentioned
    answer: 3
    explanation: "In C, a float can represent both whole numbers and decimal numbers due to its ability to store values in floating-point format. Option A: 3.666666 is a valid float representation with precision. Option B: 3.666 is also a valid float value, just with fewer decimal places. Option C: 3 is an integer, but it can still be represented as a float (e.g., 3.0). Therefore, all the options listed are valid float outputs depending on how the float is stored or printed. Hence, the correct answer is Option D: None of the mentioned ."
    keyConcept: Operators And Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: Which of the following cannot be used inside sizeof?
    options:
      - pointers
      - functions
      - macro definition
      - none of the mentioned
    answer: 1
    explanation: "sizeof is a compile-time operator in C that determines the size, in bytes, of a variable or data type. Option A: pointers – Valid. sizeof can be used with pointers to determine the size of the pointer type. Option B: functions – Invalid. You cannot use sizeof on functions because functions do not have a defined size at compile time. sizeof requires a complete type, and functions are not complete objects in C. Option C: macro definition – Valid. If the macro expands to a valid expression or type, sizeof can be used on it. Option D: none of the mentioned – Incorrect because functions cannot be used with sizeof . Therefore, the correct answer is Option B: functions."
    keyConcept: Operators And Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: In C programming language, which of the following type of operators have the highest precedence
    options:
      - Relational operators
      - Equality operators
      - Logical operators
      - Arithmetic operators
    answer: 3
    explanation: Arithmetic operators is the correct answer to “In C programming language, which of the following type of operators have the highest precedence”. This question is standard in competitive examination syllabi for Operators And Expressions.
    keyConcept: Operators And Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: Which of the following comments about the ++ operator are correct?
    options:
      - It is a unary operator
      - The operand can come before or after the operator
      - It cannot be applied to an expression
      - It associates from the right
      - All of the above
    answer: 4
    explanation: All of the above is the correct answer to “Which of the following comments about the ++ operator are correct”. This question is standard in competitive examination syllabi for Operators And Expressions.
    keyConcept: Operators And Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: "Determine output of the following program code. #include<stdio.h> void main() { int a, b=7; a = b<4 ? b<<1 : ++b>4 ? 7>>1 : a; printf(\"%d %d\", a, b); }"
    options:
      - 3 7
      - 7 3
      - 8 3
      - 3 8
      - None of these
    answer: 3
    explanation: "3 8 is the correct answer to “Determine output of the following program code. #include<stdio.h> void main() { int a, b=7; a = b<4 ? b<<1 : ++b>4 ? 7>>1 : a; printf(\"%d %d\", a, b); }”. This question is standard in competitive examination syllabi for Operators And Expressions."
    keyConcept: Operators And Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: Consider the following program fragment, and choose the correct one. void main() { int a, b = 2, c; a = 2 * (b++); c = 2 * (++b); }
    options:
      - a = 4, c = 8
      - a = 3, c = 8
      - b = 3, c = 6
      - a = 4, c = 6
      - b = 4, c = 6
    answer: 0
    explanation: a = 4, c = 8 is the correct answer to “Consider the following program fragment, and choose the correct one. void main() { int a, b = 2, c; a = 2 * (b++); c = 2 * (++b); }”. This question is standard in competitive examination syllabi for Operators And Expressions.
    keyConcept: Operators And Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: Which among the following statement is right?
    options:
      - sizeof(struct stemp*) > sizeof(union utemp*) > sizeof(char *)
      - sizeof(struct stemp*) < sizeof(union utemp*) < sizeof(char *)
      - sizeof(struct stemp*) = sizeof(union utemp*) = sizeof(char *)
      - the order Depends on the compiler
    answer: 2
    explanation: sizeof(struct stemp*) = sizeof(union utemp*) = sizeof(char *) is the correct answer to “Which among the following statement is right”. This question is standard in competitive examination syllabi for Operators And Expressions.
    keyConcept: Operators And Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: "What will be the output of the following C code? #include <stdio.h> int main() { float a = 2.455555555555; printf(\"%f\", a); }"
    options:
      - "2.455555"
      - "2.455556"
      - "2.456"
      - "2.46"
    answer: 0
    explanation: "2.455555 is the correct answer to “What will be the output of the following C code? #include <stdio.h> int main() { float a = 2.455555555555; printf(\"%f\", a); }”. This question is standard in competitive examination syllabi for Operators And Expressions."
    keyConcept: Operators And Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: Which of the following % operation is invalid?
    options:
      - 2 % 4
      - 2 % 4l
      - 2 % 4f
      - Both 2 % 4l; and 2 % 4f
    answer: 2
    explanation: 2 % 4f is the correct answer to “Which of the following % operation is invalid”. This question is standard in competitive examination syllabi for Operators And Expressions.
    keyConcept: Operators And Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: In the following C code, the union size is decided by? union temp { char a; int b; float c; };
    options:
      - char
      - int
      - float
      - both int and float
    answer: 3
    explanation: both int and float is the correct answer to “In the following C code, the union size is decided by? union temp { char a; int b; float c; };”. This question is standard in competitive examination syllabi for Operators And Expressions.
    keyConcept: Operators And Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: Modulus for float could be achieved by?
    options:
      - a % b
      - modulus(a, b)
      - fmod(a, b)
      - mod(a, b)
    answer: 2
    explanation: fmod(a, b) is the correct answer to “Modulus for float could be achieved by”. This question is standard in competitive examination syllabi for Operators And Expressions.
    keyConcept: Operators And Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: Which among the following has the highest precedence?
    options:
      - "&"
      - "<<"
      - sizeof()
      - "&&"
    answer: 2
    explanation: sizeof() is the correct answer to “Which among the following has the highest precedence”. This question is standard in competitive examination syllabi for Operators And Expressions.
    keyConcept: Operators And Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: "%f access specifier is used for . . . . . . . ."
    options:
      - Strings
      - Integral types
      - Floating type
      - All of the mentioned
    answer: 2
    explanation: Floating type is the correct answer to “%f access specifier is used for . . . . . . . .”. This question is standard in competitive examination syllabi for Operators And Expressions.
    keyConcept: Operators And Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: "What will be the output of the following C code? #include <stdio.h> printf(\"%d\", sizeof('a'));"
    options:
      - "1"
      - "2"
      - "4"
      - None of the mentioned
    answer: 2
    explanation: "4 is the correct answer to “What will be the output of the following C code? #include <stdio.h> printf(\"%d\", sizeof('a'));”. This question is standard in competitive examination syllabi for Operators And Expressions."
    keyConcept: Operators And Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: Loss in precision occurs for typecasting from. . . . . . . .
    options:
      - char to short
      - float to double
      - long to float
      - float to int
    answer: 3
    explanation: float to int is the correct answer to “Loss in precision occurs for typecasting from. . . . . . . .”. This question is standard in competitive examination syllabi for Operators And Expressions.
    keyConcept: Operators And Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: "What will be the output of the following C code? #include <stdio.h> union temp { char a; char b; int c; }t; int main() { printf(\"%d\", sizeof(t)); return 0; }"
    options:
      - "1"
      - "2"
      - "4"
      - "6"
    answer: 2
    explanation: "4 is the correct answer to “What will be the output of the following C code? #include <stdio.h> union temp { char a; char b; int c; }t; int main() { printf(\"%d\", sizeof(t)); return 0; }”. This question is standard in competitive examination syllabi for Operators And Expressions."
    keyConcept: Operators And Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: Select the odd one out with respect to type?
    options:
      - char
      - int
      - long
      - float
    answer: 3
    explanation: float is the correct answer to “Select the odd one out with respect to type”. This question is standard in competitive examination syllabi for Operators And Expressions.
    keyConcept: Operators And Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: Predict the data type of the following mathematical operation? 2 * 9 + 3 / 2 . 0
    options:
      - int
      - long
      - float
      - double
    answer: 3
    explanation: double is the correct answer to “Predict the data type of the following mathematical operation? 2 * 9 + 3 / 2 . 0”. This question is standard in competitive examination syllabi for Operators And Expressions.
    keyConcept: Operators And Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: How many digits are present after the decimal in float value?
    options:
      - "1"
      - "3"
      - "6"
      - "16"
    answer: 2
    explanation: 6 is the correct answer to “How many digits are present after the decimal in float value”. This question is standard in competitive examination syllabi for Operators And Expressions.
    keyConcept: Operators And Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: What is the size of float in a 32-bit compiler?
    options:
      - "1"
      - "2"
      - "4"
      - "8"
    answer: 2
    explanation: 4 is the correct answer to “What is the size of float in a 32-bit compiler”. This question is standard in competitive examination syllabi for Operators And Expressions.
    keyConcept: Operators And Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: Size of an array can be evaluated by . . . . . . . . (Assuming array declaration int a[10];)
    options:
      - sizeof(a)
      - sizeof(*a)
      - sizeof(a[10])
      - 10 * sizeof(a)
    answer: 0
    explanation: sizeof(a) is the correct answer to “Size of an array can be evaluated by . . . . . . . . (Assuming array declaration int a[10];)”. This question is standard in competitive examination syllabi for Operators And Expressions.
    keyConcept: Operators And Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: What type of value does sizeof return?
    options:
      - char
      - short
      - unsigned int
      - long
    answer: 2
    explanation: unsigned int is the correct answer to “What type of value does sizeof return”. This question is standard in competitive examination syllabi for Operators And Expressions.
    keyConcept: Operators And Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: Which among the following is never possible in C when members are different in a structure and union? //Let P be a structure //Let Q be a union
    options:
      - sizeof(P) is greater than sizeof(Q)
      - sizeof(P) is less than sizeof(Q)
      - sizeof(P) is equal to sizeof(Q)
      - none of the mentioned
    answer: 3
    explanation: none of the mentioned is the correct answer to “Which among the following is never possible in C when members are different in a structure and union? //Let P be a structure //Let Q be a union”. This question is standard in competitive examination syllabi for Operators And Expressions.
    keyConcept: Operators And Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: "What will be the size of the following C structure? #include <stdio.h> struct temp { int a[10]; char p; };"
    options:
      - "5"
      - "11"
      - "41"
      - "44"
    answer: 3
    explanation: "44 is the correct answer to “What will be the size of the following C structure? #include <stdio.h> struct temp { int a[10]; char p; };”. This question is standard in competitive examination syllabi for Operators And Expressions."
    keyConcept: Operators And Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: What is the sizeof(void) in a 32-bit C?
    options:
      - "0"
      - "1"
      - "2"
      - "4"
    answer: 1
    explanation: 1 is the correct answer to “What is the sizeof(void) in a 32-bit C”. This question is standard in competitive examination syllabi for Operators And Expressions.
    keyConcept: Operators And Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: Which data type is suitable for storing a number like? 10.0000000001
    options:
      - int
      - float
      - double
      - both float and double
    answer: 2
    explanation: double is the correct answer to “Which data type is suitable for storing a number like? 10.0000000001”. This question is standard in competitive examination syllabi for Operators And Expressions.
    keyConcept: Operators And Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: In a 32-bit compiler, which 2 types have the same size?
    options:
      - char and short
      - short and int
      - int and float
      - float and double
    answer: 2
    explanation: int and float is the correct answer to “In a 32-bit compiler, which 2 types have the same size”. This question is standard in competitive examination syllabi for Operators And Expressions.
    keyConcept: Operators And Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: "What will be the output of the following C code? #include <stdio.h> printf(\"%d\", sizeof(strlen(\"HELLOWORLD\")));"
    options:
      - Output, 4
      - Output, 10
      - Output, 16
      - Error, sizeof cannot evaluate size of a function
    answer: 0
    explanation: "Output, 4 is the correct answer to “What will be the output of the following C code? #include <stdio.h> printf(\"%d\", sizeof(strlen(\"HELLOWORLD\")));”. This question is standard in competitive examination syllabi for Operators And Expressions."
    keyConcept: Operators And Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: "What will be the output of the following C code? #include <stdio.h> printf(\"%.0f\", 2.89);"
    options:
      - "2.890000"
      - "2.89"
      - "2"
      - "3"
    answer: 3
    explanation: "3 is the correct answer to “What will be the output of the following C code? #include <stdio.h> printf(\"%.0f\", 2.89);”. This question is standard in competitive examination syllabi for Operators And Expressions."
    keyConcept: Operators And Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: What is the sizeof(char) in a 32-bit C compiler?
    options:
      - 1 bit
      - 2 bits
      - 1 Byte
      - 2 Bytes
    answer: 2
    explanation: 1 Byte is the correct answer to “What is the sizeof(char) in a 32-bit C compiler”. This question is standard in competitive examination syllabi for Operators And Expressions.
    keyConcept: Operators And Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: "What will be the output of the following C code? #include <stdio.h> (sizeof double = 8, float = 4, void = 1) #define PI 3.14 int main() { printf(\"%d\", sizeof(PI)); }"
    options:
      - Output is 8
      - Output is 4
      - Output is 1
      - Error, we can't use sizeof on macro-definitions
    answer: 0
    explanation: "Output is 8 is the correct answer to “What will be the output of the following C code? #include <stdio.h> (sizeof double = 8, float = 4, void = 1) #define PI 3.14 int main() { printf(\"%d\", sizeof(PI)); }”. This question is standard in competitive examination syllabi for Operators And Expressions."
    keyConcept: Operators And Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: "What will be the output of the following C code? #include <stdio.h> main() { int a = 1; printf(\"size of a is %d, \", sizeof(++a)); printf(\"value of a is %d\", a); };"
    options:
      - size of a is 4, value of a is 1
      - size of a is 4, value of a is 2
      - size of a is 2, value of a is 2
      - size of a is 2, value of a is 1
    answer: 0
    explanation: "size of a is 4, value of a is 1 is the correct answer to “What will be the output of the following C code? #include <stdio.h> main() { int a = 1; printf(\"size of a is %d, \", sizeof(++a)); printf(\"value of a is %d\", a); };”. This question is standard in competitive examination syllabi for Operators And Expressions."
    keyConcept: Operators And Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: Which of the following is not an operator in C?
    options:
      - ","
      - sizeof()
      - "~"
      - None of the mentioned
    answer: 3
    explanation: None of the mentioned is the correct answer to “Which of the following is not an operator in C”. This question is standard in competitive examination syllabi for Operators And Expressions.
    keyConcept: Operators And Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: "%lf is used to display?"
    options:
      - float
      - long float
      - double
      - all of the mentioned
    answer: 2
    explanation: double is the correct answer to “%lf is used to display”. This question is standard in competitive examination syllabi for Operators And Expressions.
    keyConcept: Operators And Expressions
    testedIn:
      - FPSC
      - PPSC
---


