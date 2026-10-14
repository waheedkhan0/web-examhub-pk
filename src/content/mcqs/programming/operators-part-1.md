---
title: Operators — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Operators — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: operators-part-1
topicName: Operators — Part 1
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
    question: What is the result of the expression 10 / 3 in Java?
    options:
      - "3.3333"
      - "3"
      - "3.1"
      - "4"
    answer: 1
    explanation: In Java, both 10 and 3 are integer values. When an arithmetic operation is performed between two integers, Java uses integer division . Integer division discards the fractional (decimal) part of the result instead of rounding it. So, the expression 10 / 3 evaluates to 3 , not 3.3333 or 3.1.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: What is the result of the expression 5 | 3 in Java?
    options:
      - "7"
      - "8"
      - "1"
      - "3"
    answer: 0
    explanation: "Question: What is the result of the expression 5 | 3 in Java? This question is about the bitwise OR operator (|) in Java . The bitwise OR operator compares the corresponding bits of two numbers. If either bit is 1, the resulting bit is 1; otherwise, it's 0. Let's break it down: First, we need to convert the decimal numbers 5 and 3 into their binary representations: 5 in decimal is 101 in binary 3 in decimal is 011 in binary Now, let's perform the bitwise OR operation: 101 (5) | 011 (3) ------- 111 The result in binary is 111. Converting 111 from binary back to decimal gives us 7. Therefore, the expression 5 | 3 evaluates to 7. Correct Answer: A"
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: "What is the value of the expression 6 > 4 ? 10 : 20 in Java?"
    options:
      - "6"
      - "4"
      - "10"
      - "20"
    answer: 2
    explanation: "The expression is 6 > 4 ? 10 : 20 Let's break it down: 6 > 4 is a comparison . It checks if 6 is greater than 4. This is true . The ? and : are the ternary operator symbols. If the comparison ( 6 > 4 ) is true , the expression evaluates to the value before the colon ( : ), which is 10 . If the comparison were false , it would evaluate to the value after the colon, which is 20 . Since 6 > 4 is true, the whole expression simplifies to 10 . Therefore, the correct answer is C: 10"
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What is the result of the expression 3 << 2 in Java?
    options:
      - "6"
      - "9"
      - "8"
      - "12"
    answer: 2
    explanation: "Understanding the << operator: In Java, the '<<' operator is a bitwise left-shift operator. It takes two operands: the number to shift (on the left) and the number of positions to shift (on the right). How it works: The left-shift operator moves the bits of the left operand to the left by the number of positions specified by the right operand. Each shift to the left is equivalent to multiplying by 2. Example: 3 << 2 Let's break down 3 << 2: 1. The number 3 in binary is 0011. 2. Shifting the bits two positions to the left gives us 1100. 3. The binary number 1100 is equal to 12 in decimal. Therefore: The result of the expression 3 << 2 in Java is 12 ."
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: What is the result of the expression 4 * 2 + 3 in Java?
    options:
      - "14"
      - "20"
      - "11"
      - "10"
    answer: 2
    explanation: "Let's break down this Java expression step-by-step: The expression is: 4 * 2 + 3 Java follows the order of operations (PEMDAS/BODMAS): 1. P arentheses / B rackets 2. E xponents / O rders 3. M ultiplication and D ivision (from left to right) 4. A ddition and S ubtraction (from left to right) In our expression, we have multiplication and addition. Multiplication comes first: 4 * 2 = 8 Now we have: 8 + 3 Next, we do the addition: 8 + 3 = 11 Therefore, the result of the expression 4 * 2 + 3 in Java is 11. So, the correct answer is: Option C: 11"
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What is the result of the expression 1 << 3 in Java?
    options:
      - "8"
      - "4"
      - "2"
      - "3"
    answer: 0
    explanation: The << operator in Java is known as the left shift operator . It shifts the bits of the number on the left side of the operator to the left by the number of positions specified on the right side. Each left shift by one position doubles the value of the number. In this case, 1 << 3 shifts the bits of the number 1 to the left by 3 positions. The binary representation of 1 is 0001 . After shifting left by 3 positions, it becomes 1000 , which is 8 in decimal. Therefore, the result of 1 << 3 is 8 .
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What is the result of the expression (6 + 3) * 2 in Java?
    options:
      - "12"
      - "15"
      - "18"
      - "9"
    answer: 2
    explanation: "In Java, the expression (6 + 3) * 2 follows the order of operations (parentheses, multiplication/division, and addition/subtraction). First, the addition inside the parentheses is performed, resulting in 9 . Then, the multiplication is carried out, yielding a final result of 18 . Therefore, the correct answer is Option C: 18 ."
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: Which of the following is the correct expression that evaluates to true if the number x is between 1 and 100 or the number is negative?
    options:
      - 1 < x < 100 || x < 0
      - ((x < 100) && (x > 1)) || (x < 0)
      - ((x < 100) && (x > 1)) && (x < 0)
      - (1 > x > 100) || (x < 0)
    answer: 1
    explanation: "Let's break down this Java problem about operators! We want to find the expression that's true if 'x' is between 1 and 100 OR if 'x' is negative. Option A: 1 < x < 100 || x < 0 This looks like it's checking if 'x' is between 1 and 100, or if 'x' is negative. However, in Java, you cannot chain comparison operators like this (1 < x < 100). Java evaluates 1 < x first, which will return true or false, it will not compare to 100. So this option is wrong. Option B: ((x < 100) && (x > 1)) || (x < 0) Let's look at the first part: (x < 100) && (x > 1). This means 'x' must be less than 100 AND greater than 1 . That's how we say \"between 1 and 100 (not including 1 and 100)\". The '||' means \"OR\" . So, it also checks if (x < 0), meaning 'x' is negative. If either of the conditions become true, it means that the whole expression evaluates to true. This is the correct way to express the condition in Java. Option C: ((x < 100) && (x > 1)) && (x < 0) This option uses '&&' twice. ' && ' means \"AND\" . This means that 'x' must be between 1 and 100 AND also negative. A number cannot be both positive and negative, so this option will always be false . Therefore, this is not the correct option Option D: (1 > x > 100) || (x < 0) Similar to Option A, Java cannot chain comparison operators like this (1 > x > 100) so it will not behave as expected. This looks like it's checking if 'x' is outside of 1 and 100, or if 'x' is negative, also similar to option A. 1 > x > 100 can not be chained like this. Therefore, the correct answer is Option B."
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What will be the output? public class Test{ public static void main(String args[]){ int a = 42; double b = 42.25; System.out.print((a%10)+" "+(b%10)); } }
    options:
      - 42 42.5
      - 2 2.5
      - 4.2 4.225
      - 2 4.225
      - Compilation Error
    answer: 1
    explanation: The modulus operator, % returns the remainder of a division operation. It can be applied on floating-point types as well as integer types. (This differs from C/C++, in which the % can only be applied on integer types.)
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What will be the output after compiling and running following code? public class Test{ public static void main(String... args){ int x =5; x *= 3 + 7; System.out.println(x); } }
    options:
      - "22"
      - "50"
      - "10"
      - Compilation fails with an error at line 4
      - None of these
    answer: 1
    explanation: x *= 3 + 7; is same as x = x * (3 +7) = 5 * (10) = 50 because expression on the right side is always placed inside parentheses.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: "Determine output: public class Test{ public static void main(String... args){ int a=5 , b=6, c=7; System.out.println(\"Value is \"+ b + c); System.out.println(a + b + c); System.out.println(\"String \" + (b+c)); } }"
    options:
      - Value is 67 18 String 13
      - Value is 13 18 String 13
      - Value is 13 18 String
      - Compilation fails
      - None of these
    answer: 0
    explanation: "Let's break down this Java code step-by-step to understand the output: First, understand Operator Precedence : In Java, the \"+\" operator can mean addition (for numbers) or concatenation (joining strings). The order it's processed matters. Line 1: `System.out.println(\"Value is \"+ b + c);` The Java compiler reads this expression from left to right. It first sees `\"Value is \" + b`. Because `\"Value is \"` is a String , the `+` operator acts as String concatenation . So, `b` (which is 6) is converted to a String and appended to `\"Value is \"`, resulting in `\"Value is 6\"`. Next, it sees `\"Value is 6\" + c`. Again, because `\"Value is 6\"` is a String , `c` (which is 7) is converted to a String and appended. The final result of this line is `\"Value is 67\"`, which is then printed to the console. Line 2: `System.out.println(a + b + c);` Here, `a`, `b`, and `c` are all integers (numbers). Therefore, the `+` operator performs addition . So, `5 + 6 + 7` is calculated, resulting in `18`. This value (`18`) is then printed to the console. Line 3: `System.out.println(\"String \" + (b+c));` Here we have `\"String \"` which is a String followed by `(b+c)` inside parenthesis. The parentheses `()` force the expression inside to be evaluated first. So `b + c` is computed which is `6 + 7 = 13`. Then `\"String \" + 13`. Since `\"String \"` is a String , the `+` operator concatenates the String `\"String \"` with the number `13`. This results in the String `\"String 13\"` which is then printed to the console. Therefore, the correct output is: Value is 67 18 String 13 So, the correct answer is Option A: Value is 67 18 String 13"
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: What will be the output for the below code? class A{ public void printValue(){ System.out.println("A"); } } class B extends A{ public void printValue(){ System.out.println("B"); } } public class Test{ public static void main(String... args){ A b = new B(); newValue(b); } public static void newValue(A a){ if(a instanceof B){ ((B)a).printValue(); } } }
    options:
      - A
      - B
      - Compilation fails with an error at line 4
      - Compilation fails with an error at line 8
      - None of these
    answer: 1
    explanation: Instanceof operator is used for object reference variables to check whether an object is of a particular type. In newValue(b); b is instance of B so it works properly.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: "Determine output: public class Test{ static int i = 5; public static void main(String... args){ System.out.println(i++); System.out.println(i); System.out.println(++i); System.out.println(++i+i++); } }"
    options:
      - 6 6 6 16
      - 6 7 6 16
      - 5 6 7 16
      - 5 6 6 16
      - None of these
    answer: 2
    explanation: "i++ : print value then increment (postfix - increment happens after the value of the variable is used) ++i : increment the print (prefix - increment happens before the value of the variable is used)."
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: Which of the following is not a valid jump statement?
    options:
      - break
      - goto
      - continue
      - return
    answer: 1
    explanation: "Option A: break The break statement is a valid jump statement in Java. It is used to exit loops or switch statements prematurely, allowing the program to skip to the statement following the loop or switch block. Option B: goto goto is not a valid jump statement in Java. Although \"goto\" is a reserved keyword in Java, it is not implemented as a feature and cannot be used to control the flow of a program. Java designers omitted \"goto\" to avoid complex and unstructured code, commonly associated with its usage. Option C: continue The continue statement is a valid jump statement in Java. It is used within loops to skip the current iteration and move directly to the next iteration of the loop. Option D: return The return statement is a valid jump statement in Java. It is used to exit from a method and optionally return a value to the caller of the method. Conclusion: The correct answer is Option B: goto . In Java, \"goto\" is a reserved keyword but is not implemented as a valid jump statement."
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What is the result of the expression 5 + 3 * 2 in Java?
    options:
      - "11"
      - "16"
      - "26"
      - "23"
    answer: 0
    explanation: 11 is the correct answer to “What is the result of the expression 5 + 3 * 2 in Java”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: Which operator is used for division in Java?
    options:
      - /
      - "%"
      - "*"
      - "-"
    answer: 0
    explanation: / is the correct answer to “Which operator is used for division in Java”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What is the value of the expression 7 % 3 in Java?
    options:
      - "1"
      - "2"
      - "3"
      - "0"
    answer: 0
    explanation: 1 is the correct answer to “What is the value of the expression 7 % 3 in Java”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: Which of the following is a unary operator in Java?
    options:
      - +
      - "-"
      - "*"
      - /
    answer: 1
    explanation: "- is the correct answer to “Which of the following is a unary operator in Java”. This question is standard in competitive examination syllabi for Operators."
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: What is the result of the expression true && false in Java?
    options:
      - "TRUE"
      - "FALSE"
    answer: 1
    explanation: FALSE is the correct answer to “What is the result of the expression true && false in Java”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What is the value of the expression 5 + 2 == 7 && 4 > 3 in Java?
    options:
      - "TRUE"
      - "FALSE"
      - "1"
      - "0"
    answer: 0
    explanation: TRUE is the correct answer to “What is the value of the expression 5 + 2 == 7 && 4 > 3 in Java”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: Which operator is used for logical NOT in Java?
    options:
      - "!"
      - "&&"
      - "||"
      - "~"
    answer: 0
    explanation: "! is the correct answer to “Which operator is used for logical NOT in Java”. This question is standard in competitive examination syllabi for Operators."
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: Which operator is used to perform bitwise XOR in Java?
    options:
      - "&"
      - "|"
      - ^
      - "~"
    answer: 2
    explanation: ^ is the correct answer to “Which operator is used to perform bitwise XOR in Java”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: What is the value of the expression true || false in Java?
    options:
      - "TRUE"
      - "FALSE"
      - "1"
      - "0"
    answer: 0
    explanation: TRUE is the correct answer to “What is the value of the expression true || false in Java”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: "What is the result of the expression 10 > 5 ? 2 : 1 in Java?"
    options:
      - "10"
      - "5"
      - "2"
      - "1"
    answer: 2
    explanation: "2 is the correct answer to “What is the result of the expression 10 > 5 ? 2 : 1 in Java”. This question is standard in competitive examination syllabi for Operators."
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: Which operator is used for string concatenation in Java?
    options:
      - "&"
      - "&&"
      - "||"
      - +
    answer: 3
    explanation: + is the correct answer to “Which operator is used for string concatenation in Java”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Which operator is used for exponentiation in Java?
    options:
      - ^
      - "**"
      - ^^
      - ^*
    answer: 0
    explanation: ^ is the correct answer to “Which operator is used for exponentiation in Java”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: What is the value of the expression 9 % 4 in Java?
    options:
      - "1"
      - "2"
      - "3"
      - "0"
    answer: 0
    explanation: 1 is the correct answer to “What is the value of the expression 9 % 4 in Java”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: Which of the following is a bitwise operator in Java?
    options:
      - "&"
      - "&&"
      - "||"
      - "!"
    answer: 0
    explanation: "& is the correct answer to “Which of the following is a bitwise operator in Java”. This question is standard in competitive examination syllabi for Operators."
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: What is the result of the expression 8 / 4 in Java?
    options:
      - "8"
      - "2"
      - "4"
      - "32"
    answer: 1
    explanation: 2 is the correct answer to “What is the result of the expression 8 / 4 in Java”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: What is the value of the expression false || true in Java?
    options:
      - "TRUE"
      - "FALSE"
      - "1"
      - "0"
    answer: 0
    explanation: TRUE is the correct answer to “What is the value of the expression false || true in Java”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: "What is the value of the expression 8 < 6 ? 4 : 2 in Java?"
    options:
      - "8"
      - "6"
      - "4"
      - "2"
    answer: 3
    explanation: "2 is the correct answer to “What is the value of the expression 8 < 6 ? 4 : 2 in Java”. This question is standard in competitive examination syllabi for Operators."
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: Which operator is used for bitwise NOT in Java?
    options:
      - "&"
      - "|"
      - ^
      - "~"
    answer: 3
    explanation: ~ is the correct answer to “Which operator is used for bitwise NOT in Java”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: What is the value of the expression true && true in Java?
    options:
      - "TRUE"
      - "FALSE"
      - "1"
      - "0"
    answer: 0
    explanation: TRUE is the correct answer to “What is the value of the expression true && true in Java”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: What is the result of the expression 7 / 0 in Java?
    options:
      - It causes a runtime exception.
      - NaN (Not-a-Number)
      - "7"
      - "0"
    answer: 0
    explanation: It causes a runtime exception. is the correct answer to “What is the result of the expression 7 / 0 in Java”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: Which operator is used to perform logical AND in Java?
    options:
      - "&"
      - "|"
      - ^
      - "&&"
    answer: 3
    explanation: "&& is the correct answer to “Which operator is used to perform logical AND in Java”. This question is standard in competitive examination syllabi for Operators."
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: What is the value of the expression false && false in Java?
    options:
      - "TRUE"
      - "FALSE"
      - "1"
      - "0"
    answer: 1
    explanation: FALSE is the correct answer to “What is the value of the expression false && false in Java”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: int x = 0, y = 0 , z = 0 ; x = (++x + y-- ) * z++; What will be the value of "x" after execution ?
    options:
      - "-2"
      - "-1"
      - "0"
      - "1"
      - "2"
    answer: 2
    explanation: 0 is the correct answer to “int x = 0, y = 0 , z = 0 ; x = (++x + y-- ) * z++; What will be the value of "x" after execution”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: int ++a = 100 ; System.out.println( ++a ) ; What will be the output of the above fraction of code ?
    options:
      - "100"
      - Displays error as ++a is not enclosed in double quotes in println statement
      - Compiler displays error as ++a is not a valid identifier
      - None of these
    answer: 2
    explanation: Compiler displays error as ++a is not a valid identifier is the correct answer to “int ++a = 100 ; System.out.println( ++a ) ; What will be the output of the above fraction of code”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: What is the output of the following program? class Numbers{ public static void main(String args[]){ int a=20, b=10; if((a < b) && (b++ < 25)){ System.out.println("This is any language logic"); } System.out.println(b); } }
    options:
      - "12"
      - "11"
      - "10"
      - Compilation Error
    answer: 2
    explanation: 10 is the correct answer to “What is the output of the following program? class Numbers{ public static void main(String args[]){ int a=20, b=10; if((a < b) && (b++ < 25)){ System.out.println("This is any language logic"); } System.out.println(b); } }”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: Select from among the following character escape code which is not available in Java.
    options:
      - \t
      - \r
      - \a
      - \\
      - \v
    answer: 2
    explanation: \a is the correct answer to “Select from among the following character escape code which is not available in Java.”. This question is standard in competitive examination syllabi for Operators.
    keyConcept: Operators
    testedIn:
      - FPSC
      - PPSC
---


