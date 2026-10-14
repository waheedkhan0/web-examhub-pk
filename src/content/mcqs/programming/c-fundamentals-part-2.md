---
title: C Fundamentals — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on C Fundamentals — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: c-fundamentals-part-2
topicName: C Fundamentals — Part 2
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
    question: String handling functions such as strcmp(), strcpy() etc can be used with enumerated types.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: "Enumerated types (enums) in C are used to give names to integer constants. For example: enum days {MON, TUE, WED, THU, FRI, SAT, SUN}; This creates an enum named days where MON is assigned 0, TUE is 1, and so on. String handling functions like strcmp() and strcpy() work with strings , which are arrays of characters ( char ). They don't directly work with enum types. You cannot directly use strcmp() to compare two enum values because strcmp() expects character arrays, not integer values that enums represent. Similarly, you cannot copy an enum value using strcpy() . Therefore, the statement \"String handling functions such as strcmp(), strcpy() etc can be used with enumerated types\" is False ."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: What does the 'NULL' keyword represent in C?
    options:
      - An empty string
      - A null character
      - A pointer to nothing
      - An uninitialized variable
    answer: 2
    explanation: A pointer to nothing is the correct answer to “What does the 'NULL' keyword represent in C”. This question is standard in competitive examination syllabi for C Fundamentals.
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Which library function is used to allocate memory dynamically in C?
    options:
      - malloc
      - free
      - sizeof
      - realloc
    answer: 0
    explanation: malloc is the correct answer to “Which library function is used to allocate memory dynamically in C”. This question is standard in competitive examination syllabi for C Fundamentals.
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What is the purpose of the 'scanf' function in C?
    options:
      - Print formatted output
      - Read formatted input
      - Allocate memory
      - Execute a loop
    answer: 1
    explanation: Read formatted input is the correct answer to “What is the purpose of the 'scanf' function in C”. This question is standard in competitive examination syllabi for C Fundamentals.
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: What is the purpose of the 'goto' statement in C?
    options:
      - End the program
      - Skip a loop
      - Transfer control
      - Skip the current iteration
    answer: 2
    explanation: Transfer control is the correct answer to “What is the purpose of the 'goto' statement in C”. This question is standard in competitive examination syllabi for C Fundamentals.
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: Which header file is used for mathematical functions in C?
    options:
      - <stdlib.h>
      - <stdio.h>
      - <math.h>
      - <string.h>
    answer: 2
    explanation: <math.h> is the correct answer to “Which header file is used for mathematical functions in C”. This question is standard in competitive examination syllabi for C Fundamentals.
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What is the significance of the 'volatile' keyword in C?
    options:
      - Declare a constant
      - Indicate a volatile variable
      - Allocate memory
      - Skip the current iteration
    answer: 1
    explanation: Indicate a volatile variable is the correct answer to “What is the significance of the 'volatile' keyword in C”. This question is standard in competitive examination syllabi for C Fundamentals.
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: Who is father of C Language?
    options:
      - Bjarne Stroustrup
      - James A. Gosling
      - Dennis Ritchie
      - Dr. E.F. Codd
    answer: 2
    explanation: Dennis Ritchie is the correct answer to “Who is father of C Language”. This question is standard in competitive examination syllabi for C Fundamentals.
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: C Language developed at _________?
    options:
      - AT & T's Bell Laboratories of USA in 1972
      - AT & T's Bell Laboratories of USA in 1970
      - Sun Microsystems in 1973
      - Cambridge University in 1972
    answer: 0
    explanation: AT & T's Bell Laboratories of USA in 1972 is the correct answer to “C Language developed at _________”. This question is standard in competitive examination syllabi for C Fundamentals.
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: C was primarily developed as
    options:
      - System programming language
      - General purpose language
      - Data processing language
      - None of the above.
    answer: 0
    explanation: System programming language is the correct answer to “C was primarily developed as”. This question is standard in competitive examination syllabi for C Fundamentals.
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: Standard ANSI C recognizes ______ number of keywords?
    options:
      - "30"
      - "32"
      - "24"
      - "36"
      - "40"
    answer: 1
    explanation: 32 is the correct answer to “Standard ANSI C recognizes ______ number of keywords”. This question is standard in competitive examination syllabi for C Fundamentals.
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: What is the correct value to return to the operating system upon the successful completion of a program?
    options:
      - "1"
      - "-1"
      - "0"
      - Program do no return a value.
      - "2"
    answer: 2
    explanation: 0 is the correct answer to “What is the correct value to return to the operating system upon the successful completion of a program”. This question is standard in competitive examination syllabi for C Fundamentals.
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: Which is the only function all C programs must contain?
    options:
      - start()
      - system()
      - main()
      - printf()
      - getch()
    answer: 2
    explanation: main() is the correct answer to “Which is the only function all C programs must contain”. This question is standard in competitive examination syllabi for C Fundamentals.
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What is the difference between a declaration and a definition of a variable?
    options:
      - Both can occur multiple times, but a declaration must occur first.
      - A definition occurs once, but a declaration may occur many times.
      - Both can occur multiple times, but a definition must occur first.
      - A declaration occurs once, but a definition may occur many times.
      - There is no difference between them.
    answer: 3
    explanation: A declaration occurs once, but a definition may occur many times. is the correct answer to “What is the difference between a declaration and a definition of a variable”. This question is standard in competitive examination syllabi for C Fundamentals.
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: "\"My salary was increased by 15%\" Select the statement, which will EXACTLY reproduce the line of text above."
    options:
      - printf("My salary was increased by 15/%!")
      - printf("My salary was increased by 15%!")
      - printf("My salary was increased by 15'%'!")
      - printf("My salary was increased by 15%%!")
    answer: 3
    explanation: printf("My salary was increased by 15%%!") is the correct answer to “"My salary was increased by 15%" Select the statement, which will EXACTLY reproduce the line of text above.”. This question is standard in competitive examination syllabi for C Fundamentals.
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: "Will the following C code compile without any error? #include <stdio.h> int main() { for (int k = 0; k < 10; k++); return 0; }"
    options:
      - "Yes"
      - "No"
      - Depends on the C standard implemented by compilers
      - Error
    answer: 2
    explanation: "Depends on the C standard implemented by compilers is the correct answer to “Will the following C code compile without any error? #include <stdio.h> int main() { for (int k = 0; k < 10; k++); return 0; }”. This question is standard in competitive examination syllabi for C Fundamentals."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: Variable name resolution (number of significant characters for the uniqueness of variable) depends on . . . . . . . .
    options:
      - Compiler and linker implementations
      - Assemblers and loaders implementations
      - C language
      - None of the mentioned
    answer: 0
    explanation: Compiler and linker implementations is the correct answer to “Variable name resolution (number of significant characters for the uniqueness of variable) depends on . . . . . . . .”. This question is standard in competitive examination syllabi for C Fundamentals.
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: "What will be the output of the following C code? #include <stdio.h> int main() { unsigned int a = 10; a = ~a; printf(\"%d\\n\", a); }"
    options:
      - "-9"
      - "-10"
      - "-11"
      - "10"
    answer: 2
    explanation: "-11 is the correct answer to “What will be the output of the following C code? #include <stdio.h> int main() { unsigned int a = 10; a = ~a; printf(\"%d\\n\", a); }”. This question is standard in competitive examination syllabi for C Fundamentals."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: "What will be the output of the following C code? #include <stdio.h> int main() { int a = 1, b = 2; a += b -= a; printf(\"%d %d\", a, b); }"
    options:
      - 1 1
      - 1 2
      - 2 1
      - 2 2
    answer: 2
    explanation: "2 1 is the correct answer to “What will be the output of the following C code? #include <stdio.h> int main() { int a = 1, b = 2; a += b -= a; printf(\"%d %d\", a, b); }”. This question is standard in competitive examination syllabi for C Fundamentals."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: "What will be the output of the following C code? #include <stdio.h> void main() { int x = 1, y = 0, z = 5; int a = x && y || z++; printf(\"%d\", z); }"
    options:
      - "6"
      - "5"
      - "0"
      - Varies
    answer: 0
    explanation: "6 is the correct answer to “What will be the output of the following C code? #include <stdio.h> void main() { int x = 1, y = 0, z = 5; int a = x && y || z++; printf(\"%d\", z); }”. This question is standard in competitive examination syllabi for C Fundamentals."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: "What will be the output of the following C code? #include <stdio.h> int main() { int a = 1, b = 1, d = 1; printf(\"%d, %d, %d\", ++a + ++a+a++, a++ + ++b, ++d + d++ + a++); }"
    options:
      - 15, 4, 5
      - 9, 6, 9
      - 9, 3, 5
      - Undefined (Compiler Dependent)
    answer: 3
    explanation: "Undefined (Compiler Dependent) is the correct answer to “What will be the output of the following C code? #include <stdio.h> int main() { int a = 1, b = 1, d = 1; printf(\"%d, %d, %d\", ++a + ++a+a++, a++ + ++b, ++d + d++ + a++); }”. This question is standard in competitive examination syllabi for C Fundamentals."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: "What will be the output of the following C code? #include <stdio.h> int main() { int i = 2; int j = ++i + i; printf(\"%d\\n\", j); }"
    options:
      - "6"
      - "5"
      - "4"
      - Compile time error
    answer: 0
    explanation: "6 is the correct answer to “What will be the output of the following C code? #include <stdio.h> int main() { int i = 2; int j = ++i + i; printf(\"%d\\n\", j); }”. This question is standard in competitive examination syllabi for C Fundamentals."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: "What will be the final value of j in the following C code? #include <stdio.h> int main() { int i = 10, j = 0; if (i || (j = i + 10)) //do something ; }"
    options:
      - "0"
      - "20"
      - Compile time error
      - Depends on language standard
    answer: 0
    explanation: "0 is the correct answer to “What will be the final value of j in the following C code? #include <stdio.h> int main() { int i = 10, j = 0; if (i || (j = i + 10)) //do something ; }”. This question is standard in competitive examination syllabi for C Fundamentals."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: "What will be the output of the following C function? #include <stdio.h> enum birds {SPARROW, PEACOCK, PARROT}; enum animals {TIGER = 8, LION, RABBIT, ZEBRA}; int main() { enum birds m = TIGER; int k; k = m; printf(\"%d\\n\", k); return 0; }"
    options:
      - "0"
      - Compile time error
      - "1"
      - "8"
    answer: 3
    explanation: "8 is the correct answer to “What will be the output of the following C function? #include <stdio.h> enum birds {SPARROW, PEACOCK, PARROT}; enum animals {TIGER = 8, LION, RABBIT, ZEBRA}; int main() { enum birds m = TIGER; int k; k = m; printf(\"%d\\n\", k); return 0; }”. This question is standard in competitive examination syllabi for C Fundamentals."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: What is the size of an int data type?
    options:
      - 4 Bytes
      - 8 Bytes
      - Depends on the system/compiler
      - Cannot be determined
    answer: 2
    explanation: Depends on the system/compiler is the correct answer to “What is the size of an int data type”. This question is standard in competitive examination syllabi for C Fundamentals.
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: "What will be the output of the following C code? #include <stdio.h> void main() { int k = 8; int m = 7; int z = k < m ? k++ : m++; printf(\"%d\", z); }"
    options:
      - "7"
      - "8"
      - Run time error
      - "15"
    answer: 0
    explanation: "7 is the correct answer to “What will be the output of the following C code? #include <stdio.h> void main() { int k = 8; int m = 7; int z = k < m ? k++ : m++; printf(\"%d\", z); }”. This question is standard in competitive examination syllabi for C Fundamentals."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: Pick the incorrect statement with respect to enums.
    options:
      - Two enum symbols cannot have the same value
      - Only integer constants are allowed in enums
      - It is not possible to change the value of enum symbols
      - Enum variables are automatically assigned values if no value is specified
    answer: 0
    explanation: Two enum symbols cannot have the same value is the correct answer to “Pick the incorrect statement with respect to enums.”. This question is standard in competitive examination syllabi for C Fundamentals.
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: "What will be the output of the following C code? #include <stdio.h> int main() { int x = 2, y = 0; int z; z = (y++, y); printf(\"%d\\n\", z); return 0; }"
    options:
      - "0"
      - "1"
      - Undefined behaviour
      - Compilation error
    answer: 1
    explanation: "1 is the correct answer to “What will be the output of the following C code? #include <stdio.h> int main() { int x = 2, y = 0; int z; z = (y++, y); printf(\"%d\\n\", z); return 0; }”. This question is standard in competitive examination syllabi for C Fundamentals."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: "What will be the output of the following C code? #include <stdio.h> int main() { int x = 1, y = 0; x &&= y; printf(\"%d\\n\", x); }"
    options:
      - Compile time error
      - "1"
      - "0"
      - Undefined behaviour
    answer: 0
    explanation: "Compile time error is the correct answer to “What will be the output of the following C code? #include <stdio.h> int main() { int x = 1, y = 0; x &&= y; printf(\"%d\\n\", x); }”. This question is standard in competitive examination syllabi for C Fundamentals."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: "What will be the output of the following C code? #include <stdio.h> void main() { int a = 5 * 3 % 6 - 8 + 3; printf(\"%d\", a); }"
    options:
      - "10"
      - "2"
      - "-2"
      - "-3"
    answer: 2
    explanation: "-2 is the correct answer to “What will be the output of the following C code? #include <stdio.h> void main() { int a = 5 * 3 % 6 - 8 + 3; printf(\"%d\", a); }”. This question is standard in competitive examination syllabi for C Fundamentals."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: "What will be the output of the following C code? #include <stdio.h> void main() { float x = 0.1; if (x == 0.1) printf(\"India\"); else printf(\"Advanced C Classes\"); }"
    options:
      - Advanced C Classes
      - India
      - Run time error
      - Compile time error
    answer: 0
    explanation: "Advanced C Classes is the correct answer to “What will be the output of the following C code? #include <stdio.h> void main() { float x = 0.1; if (x == 0.1) printf(\"India\"); else printf(\"Advanced C Classes\"); }”. This question is standard in competitive examination syllabi for C Fundamentals."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: "What will be the final value of j in the following C code? #include <stdio.h> int main() { int i = 0, j = 0; if (i && (j = i + 10)) //do something ; }"
    options:
      - "0"
      - "10"
      - Depends on the compiler
      - Depends on language standard
    answer: 0
    explanation: "0 is the correct answer to “What will be the final value of j in the following C code? #include <stdio.h> int main() { int i = 0, j = 0; if (i && (j = i + 10)) //do something ; }”. This question is standard in competitive examination syllabi for C Fundamentals."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: "Will the following C code compile without any error? #include <stdio.h> int main() { int k; { int k; for (k = 0; k < 10; k++); } }"
    options:
      - "Yes"
      - "No"
      - Depends on the compiler
      - Depends on the C standard implemented by compilers
    answer: 0
    explanation: "Yes is the correct answer to “Will the following C code compile without any error? #include <stdio.h> int main() { int k; { int k; for (k = 0; k < 10; k++); } }”. This question is standard in competitive examination syllabi for C Fundamentals."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: "What will be the output of the following C code? #include <stdio.h> int main() { int a = 4, n, i, result = 0; scanf(\"%d\", &n); for (i = 0;i < n; i++) result += a; }"
    options:
      - Addition of a and n
      - Subtraction of a and n
      - Multiplication of a and n
      - Division of a and n
    answer: 2
    explanation: "Multiplication of a and n is the correct answer to “What will be the output of the following C code? #include <stdio.h> int main() { int a = 4, n, i, result = 0; scanf(\"%d\", &n); for (i = 0;i < n; i++) result += a; }”. This question is standard in competitive examination syllabi for C Fundamentals."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: "What will be the output of the following C code? #include<stdio.h> enum hello { a,b=99,c,d=-1 }; main() { enum hello m; printf(\"%d\\n%d\\n%d\\n%d\\n\",a,b,c,d); }"
    options:
      - 1 99 100 -1
      - Error
      - 0 99 100 -1
      - 0 1 2 3
    answer: 2
    explanation: "0 99 100 -1 is the correct answer to “What will be the output of the following C code? #include<stdio.h> enum hello { a,b=99,c,d=-1 }; main() { enum hello m; printf(\"%d\\n%d\\n%d\\n%d\\n\",a,b,c,d); }”. This question is standard in competitive examination syllabi for C Fundamentals."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: "What will be the output of the following C code? #include <stdio.h> int main() { j = 10; printf(\"%d\\n\", j++); return 0; }"
    options:
      - "10"
      - "11"
      - Compile time error
      - "0"
    answer: 2
    explanation: "Compile time error is the correct answer to “What will be the output of the following C code? #include <stdio.h> int main() { j = 10; printf(\"%d\\n\", j++); return 0; }”. This question is standard in competitive examination syllabi for C Fundamentals."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: "What will be the output of the following C code? #include <stdio.h> #define MAX 2 enum bird {SPARROW = MAX + 1, PARROT = SPARROW + MAX}; int main() { enum bird b = PARROT; printf(\"%d\\n\", b); return 0; }"
    options:
      - Compilation error
      - "5"
      - Undefined value
      - "2"
    answer: 1
    explanation: "5 is the correct answer to “What will be the output of the following C code? #include <stdio.h> #define MAX 2 enum bird {SPARROW = MAX + 1, PARROT = SPARROW + MAX}; int main() { enum bird b = PARROT; printf(\"%d\\n\", b); return 0; }”. This question is standard in competitive examination syllabi for C Fundamentals."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: "What will be the output of the following C code? #include<stdio.h> enum shyam { a=2,b=3.56 }; enum shyam s; main() { printf(\"%d%d\",a,b); }"
    options:
      - 2 3
      - 0 1
      - 2 3.56
      - Error
    answer: 3
    explanation: "Error is the correct answer to “What will be the output of the following C code? #include<stdio.h> enum shyam { a=2,b=3.56 }; enum shyam s; main() { printf(\"%d%d\",a,b); }”. This question is standard in competitive examination syllabi for C Fundamentals."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: "What will be the output of the following C code? #include <stdio.h> int main() { int a[5] = {1, 2, 3, 4, 5}; int i; for (i = 0; i < 5; i++) if ((char)a[i] == '5') printf(\"%d\\n\", a[i]); else printf(\"FAIL\\n\"); }"
    options:
      - The compiler will flag an error
      - The program will compile and print the output 5
      - The program will compile and print the ASCII value of 5
      - The program will compile and print FAIL for 5 times
    answer: 3
    explanation: "The program will compile and print FAIL for 5 times is the correct answer to “What will be the output of the following C code? #include <stdio.h> int main() { int a[5] = {1, 2, 3, 4, 5}; int i; for (i = 0; i < 5; i++) if ((char)a[i] == '5') printf(\"%d\\n\", a[i]); else printf(\"FAIL\\n\"); }”. This question is standard in competitive examination syllabi for C Fundamentals."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: "One of the major difference between typedef and #define is that typedef interpretation is performed by the . . . . . . . . whereas #define interpretation is performed by the . . . . . . . ."
    options:
      - pre-processor, compiler
      - user, pre-processor
      - compiler, pre-processor
      - compiler, user
    answer: 2
    explanation: "compiler, pre-processor is the correct answer to “One of the major difference between typedef and #define is that typedef interpretation is performed by the . . . . . . . . whereas #define interpretation is performed by the . . . . . . . .”. This question is standard in competitive examination syllabi for C Fundamentals."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
---


