---
title: Function — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Function — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: function-part-2
topicName: Function — Part 2
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
    question: Pick the correct statements. I. The body of a function should have only one return statement. II. The body of a function may have many return statements. III. A function can return only one value to the calling environment. IV. If return statement is omitted, then the function does its job but returns no value to the calling environment.
    options:
      - I and II
      - I and III
      - II and III
      - II and IV
      - III and IV
    answer: 2
    explanation: II and III is the correct answer to “Pick the correct statements. I. The body of a function should have only one return statement. II. The body of a function may have many return statements. III. A function can return only one value to the calling environment. IV. If return statement is omitted, then the function does its job but returns no value to the calling environment.”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: Which of the following is a complete function?
    options:
      - int funct()
      - int funct(int x) { return x=x+1; }
      - void funct(int) { printf(“Hello"); }
      - void funct(x) { printf(“Hello"); }
      - None of these
    answer: 1
    explanation: int funct(int x) { return x=x+1; } is the correct answer to “Which of the following is a complete function”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Functions have ..........
    options:
      - Local scope
      - Block scope
      - File scope
      - Function scope
      - No scope at all
    answer: 2
    explanation: File scope is the correct answer to “Functions have ..........”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: Which of the following function calculates the square of 'x' in C?
    options:
      - sqr(x)
      - pow(2, x)
      - pow(x, 2)
      - power(2, x)
      - power(x, 2)
    answer: 2
    explanation: pow(x, 2) is the correct answer to “Which of the following function calculates the square of 'x' in C”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: When a function is recursively called all the automatic variables are stored in a ..........
    options:
      - Stack
      - Queue
      - Array
      - Linked list
      - Register
    answer: 0
    explanation: Stack is the correct answer to “When a function is recursively called all the automatic variables are stored in a ..........”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: "What will be the output of the following C code? #include <stdio.h> #define foo(x, y) #x #y int main() { printf(\"%s\\n\", foo(k, l)); return 0; }"
    options:
      - kl
      - k l
      - xy
      - Compile time error
    answer: 0
    explanation: "kl is the correct answer to “What will be the output of the following C code? #include <stdio.h> #define foo(x, y) #x #y int main() { printf(\"%s\\n\", foo(k, l)); return 0; }”. This question is standard in competitive examination syllabi for Function."
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: "What will be the output of the following C code? #include <stdio.h> double var = 8; int main() { int var = 5; printf(\"%d\", var); }"
    options:
      - "5"
      - "8"
      - Compile time error due to wrong format identifier for double
      - Compile time error due to redeclaration of variable with same name
    answer: 0
    explanation: "5 is the correct answer to “What will be the output of the following C code? #include <stdio.h> double var = 8; int main() { int var = 5; printf(\"%d\", var); }”. This question is standard in competitive examination syllabi for Function."
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: "What will be the output of the following C code? #include <stdio.h> int x = 5; void main() { int x = 3; printf(\"%d\", x); { x = 4; } printf(\"%d\", x); }"
    options:
      - Run time error
      - 3 3
      - 3 5
      - 3 4
    answer: 3
    explanation: "3 4 is the correct answer to “What will be the output of the following C code? #include <stdio.h> int x = 5; void main() { int x = 3; printf(\"%d\", x); { x = 4; } printf(\"%d\", x); }”. This question is standard in competitive examination syllabi for Function."
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: "Which part of the program address space is p stored in the following C code? #include <stdio.h> int *p = NULL; int main() { int i = 0; p = &i; return 0; }"
    options:
      - Code/text segment
      - Data segment
      - Bss segment
      - Stack
    answer: 1
    explanation: "Data segment is the correct answer to “Which part of the program address space is p stored in the following C code? #include <stdio.h> int *p = NULL; int main() { int i = 0; p = &i; return 0; }”. This question is standard in competitive examination syllabi for Function."
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: "What would happen if you create a file stdio.h and use #include \"stdio.h\"?"
    options:
      - The predefined library file will be selected
      - The user-defined library file will be selected
      - Both the files will be included
      - The compiler won't accept the program
    answer: 1
    explanation: "The user-defined library file will be selected is the correct answer to “What would happen if you create a file stdio.h and use #include \"stdio.h\"”. This question is standard in competitive examination syllabi for Function."
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: "What will be the output of the following C code? #include <stdio.h> int x; void main() { printf(\"%d\", x); }"
    options:
      - Junk value
      - Run time error
      - "0"
      - Undefined
    answer: 2
    explanation: "0 is the correct answer to “What will be the output of the following C code? #include <stdio.h> int x; void main() { printf(\"%d\", x); }”. This question is standard in competitive examination syllabi for Function."
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: Automatic variables are initialized to . . . . . . . .
    options:
      - Zero
      - Junk value
      - Nothing
      - Both Zero & Junk value
    answer: 1
    explanation: Junk value is the correct answer to “Automatic variables are initialized to . . . . . . . .”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: "What will be the output of the following C code? #include <stdio.h> #define MIN 0 #if defined(MIN) + defined(MAX) #define MAX 10 #endif int main() { printf(\"%d %d\\n\", MAX, MIN); return 0; }"
    options:
      - 10 0
      - Compile time error
      - Undefined behaviour
      - Somegarbagevalue 0
    answer: 0
    explanation: "10 0 is the correct answer to “What will be the output of the following C code? #include <stdio.h> #define MIN 0 #if defined(MIN) + defined(MAX) #define MAX 10 #endif int main() { printf(\"%d %d\\n\", MAX, MIN); return 0; }”. This question is standard in competitive examination syllabi for Function."
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: Functions can return enumeration constants in C?
    options:
      - "true"
      - "false"
      - depends on the compiler
      - depends on the standard
    answer: 0
    explanation: true is the correct answer to “Functions can return enumeration constants in C”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: "What will be the output of the following C code? #include <stdio.h> int foo(int, int); #define foo(x, y) x / y + x int main() { int i = -6, j = 3; printf(\"%d \",foo(i + j, 3)); #undef foo printf(\"%d\\n\",foo(i + j, 3)); } int foo(int x, int y) { return x / y + x; }"
    options:
      - "-8 -4"
      - Compile time error
      - "-8 -8"
      - Undefined behaviour
    answer: 0
    explanation: "-8 -4 is the correct answer to “What will be the output of the following C code? #include <stdio.h> int foo(int, int); #define foo(x, y) x / y + x int main() { int i = -6, j = 3; printf(\"%d \",foo(i + j, 3)); #undef foo printf(\"%d\\n\",foo(i + j, 3)); } int foo(int x, int y) { return x / y + x; }”. This question is standard in competitive examination syllabi for Function."
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: "What will be the output of the following C code? #include <stdio.h> int x; void main() { m(); printf(\"%d\", x); } void m() { x = 4; }"
    options:
      - "0"
      - "4"
      - Compile time error
      - Undefined
    answer: 1
    explanation: "4 is the correct answer to “What will be the output of the following C code? #include <stdio.h> int x; void main() { m(); printf(\"%d\", x); } void m() { x = 4; }”. This question is standard in competitive examination syllabi for Function."
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: "What will be the output of the following C code? #include <stdio.h> int foo(); int main() { int i = foo(); } foo() { printf(\"2 \"); return 2; }"
    options:
      - "2"
      - Compile time error
      - Depends on the compiler
      - Depends on the standard
    answer: 0
    explanation: "2 is the correct answer to “What will be the output of the following C code? #include <stdio.h> int foo(); int main() { int i = foo(); } foo() { printf(\"2 \"); return 2; }”. This question is standard in competitive examination syllabi for Function."
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: Which of following is not accepted in C?
    options:
      - static a = 10; //static as
      - static int func (int); //parameter as static
      - static static int a; //a static variable prefixed with static
      - all of the mentioned
    answer: 2
    explanation: static static int a; //a static variable prefixed with static is the correct answer to “Which of following is not accepted in C”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: "What will be the output of the following C code? #include <stdio.h> int *m(); void main() { int k = m(); printf(\"%d\", k); } int *m() { int a[2] = {5, 8}; return a; }"
    options:
      - "5"
      - "8"
      - Nothing
      - Varies
    answer: 3
    explanation: "Varies is the correct answer to “What will be the output of the following C code? #include <stdio.h> int *m(); void main() { int k = m(); printf(\"%d\", k); } int *m() { int a[2] = {5, 8}; return a; }”. This question is standard in competitive examination syllabi for Function."
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: Global variables are . . . . . . . .
    options:
      - Internal
      - External
      - Both Internal and External
      - None of the mentioned
    answer: 1
    explanation: External is the correct answer to “Global variables are . . . . . . . .”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: What is the scope of an automatic variable?
    options:
      - Within the block it appears
      - Within the blocks of the block it appears
      - Until the end of program
      - Within the block it appears & Within the blocks of the block it appears
    answer: 3
    explanation: Within the block it appears & Within the blocks of the block it appears is the correct answer to “What is the scope of an automatic variable”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: "What will be the output of the following C code having void return-type function? #include <stdio.h> void foo() { return 1; } void main() { int x = 0; x = foo(); printf(\"%d\", x); }"
    options:
      - "1"
      - "0"
      - Runtime error
      - Compile time error
    answer: 3
    explanation: "Compile time error is the correct answer to “What will be the output of the following C code having void return-type function? #include <stdio.h> void foo() { return 1; } void main() { int x = 0; x = foo(); printf(\"%d\", x); }”. This question is standard in competitive examination syllabi for Function."
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: If the file name is enclosed in double quotation marks, then . . . . . . . .
    options:
      - The preprocessor treats it as a user-defined file
      - The preprocessor treats it as a system-defined file
      - The preprocessor treats it as a user-defined file & system-defined file
      - None of the mentioned
    answer: 0
    explanation: The preprocessor treats it as a user-defined file is the correct answer to “If the file name is enclosed in double quotation marks, then . . . . . . . .”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: "What will be the output of the following C code? #include <stdio.h> void foo(); int main() { void foo(); foo(); return 0; } void foo() { printf(\"2 \"); }"
    options:
      - Compile time error
      - "2"
      - Depends on the compiler
      - Depends on the standard
    answer: 1
    explanation: "2 is the correct answer to “What will be the output of the following C code? #include <stdio.h> void foo(); int main() { void foo(); foo(); return 0; } void foo() { printf(\"2 \"); }”. This question is standard in competitive examination syllabi for Function."
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: Which of the following storage class supports char data type?
    options:
      - register
      - static
      - auto
      - all of the mentioned
    answer: 3
    explanation: all of the mentioned is the correct answer to “Which of the following storage class supports char data type”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: register keyword mandates compiler to place it in machine register.
    options:
      - "True"
      - "False"
      - Depends on the standard
      - None of the mentioned
    answer: 1
    explanation: False is the correct answer to “register keyword mandates compiler to place it in machine register.”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: "What will be the output of the following C code? #include <stdio.h> #define SYSTEM 20 int main() { int a = 20; #if SYSTEM == a printf(\"HELLO \"); #endif #if SYSTEM == 20 printf(\"WORLD\\n\"); #endif }"
    options:
      - HELLO
      - WORLD
      - HELLO WORLD
      - No Output
    answer: 1
    explanation: "WORLD is the correct answer to “What will be the output of the following C code? #include <stdio.h> #define SYSTEM 20 int main() { int a = 20; #if SYSTEM == a printf(\"HELLO \"); #endif #if SYSTEM == 20 printf(\"WORLD\\n\"); #endif }”. This question is standard in competitive examination syllabi for Function."
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: Functions have static qualifier for its declaration by default.
    options:
      - "True"
      - "False"
      - Depends on the compiler
      - Depends on the standard
    answer: 1
    explanation: False is the correct answer to “Functions have static qualifier for its declaration by default.”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: "Can we use a function as a parameter of another function? [Eg: void wow(int func())]."
    options:
      - Yes, and we can use the function value conveniently
      - Yes, but we call the function again to get the value, not as convenient as in using variable
      - No, C does not support it
      - This case is compiler dependent
    answer: 2
    explanation: "No, C does not support it is the correct answer to “Can we use a function as a parameter of another function? [Eg: void wow(int func())].”. This question is standard in competitive examination syllabi for Function."
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: "What will be the output of the following C code? #include <stdio.h> void main() { static int x; if (x++ < 2) main(); }"
    options:
      - Infinite calls to main
      - Run time error
      - Varies
      - main is called twice
    answer: 3
    explanation: "main is called twice is the correct answer to “What will be the output of the following C code? #include <stdio.h> void main() { static int x; if (x++ < 2) main(); }”. This question is standard in competitive examination syllabi for Function."
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: Assignment statements assigning value to local static variables are executed only once.
    options:
      - "True"
      - "False"
      - Depends on the code
      - None of the mentioned
    answer: 1
    explanation: False is the correct answer to “Assignment statements assigning value to local static variables are executed only once.”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: "The #else directive is used for . . . . . . . ."
    options:
      - "Conditionally include source text if the previous #if, #ifdef, #ifndef, or #elif test fails"
      - Conditionally include source text if a macro name is not defined
      - Conditionally include source text if a macro name is defined
      - Ending conditional text
    answer: 0
    explanation: "Conditionally include source text if the previous #if, #ifdef, #ifndef, or #elif test fails is the correct answer to “The #else directive is used for . . . . . . . .”. This question is standard in competitive examination syllabi for Function."
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: "What will be the output of the following C code? #include <stdio.h> void foo(auto int i); int main() { foo(10); } void foo(auto int i) { printf(\"%d\\n\", i ); }"
    options:
      - "10"
      - Compile time error
      - Depends on the standard
      - None of the mentioned
    answer: 1
    explanation: "Compile time error is the correct answer to “What will be the output of the following C code? #include <stdio.h> void foo(auto int i); int main() { foo(10); } void foo(auto int i) { printf(\"%d\\n\", i ); }”. This question is standard in competitive examination syllabi for Function."
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: Conditional inclusion can be used for . . . . . . . .
    options:
      - Preventing multiple declarations of a variable
      - Check for existence of a variable and doing something if it exists
      - Preventing multiple declarations of same function
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “Conditional inclusion can be used for . . . . . . . .”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: "What will be the output of the following C code? #include <stdio.h> void main() { { int x = 8; } printf(\"%d\", x); }"
    options:
      - "8"
      - "0"
      - Undefined
      - Compile time error
    answer: 3
    explanation: "Compile time error is the correct answer to “What will be the output of the following C code? #include <stdio.h> void main() { { int x = 8; } printf(\"%d\", x); }”. This question is standard in competitive examination syllabi for Function."
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: "Comment on the output of the following C code. #include <stdio.h> #define var 20); int main() { printf(\"%d\\n\", var }"
    options:
      - No errors, it will show the output 20
      - Compile time error, the printf braces aren't closed
      - "Compile time error, there are no open braces in #define"
      - None of the mentioned
    answer: 0
    explanation: "No errors, it will show the output 20 is the correct answer to “Comment on the output of the following C code. #include <stdio.h> #define var 20); int main() { printf(\"%d\\n\", var }”. This question is standard in competitive examination syllabi for Function."
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: "What will be the sequence of allocation and deletion of variables in the following C code? #include <stdio.h> int main() { int a; { int b; } }"
    options:
      - a->b, a->b
      - a->b, b->a
      - b->a, a->b
      - b->a, b->a
    answer: 1
    explanation: "a->b, b->a is the correct answer to “What will be the sequence of allocation and deletion of variables in the following C code? #include <stdio.h> int main() { int a; { int b; } }”. This question is standard in competitive examination syllabi for Function."
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: "What will be the output of the following C code? #include <stdio.h> enum m{JAN, FEB, MAR}; enum m foo(); int main() { enum m i = foo(); printf(\"%d\\n\", i); } int foo() { return JAN; }"
    options:
      - Compile time error
      - "0"
      - Depends on the compiler
      - Depends on the standard
    answer: 0
    explanation: "Compile time error is the correct answer to “What will be the output of the following C code? #include <stdio.h> enum m{JAN, FEB, MAR}; enum m foo(); int main() { enum m i = foo(); printf(\"%d\\n\", i); } int foo() { return JAN; }”. This question is standard in competitive examination syllabi for Function."
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: C preprocessor is conceptually the first step during compilation.
    options:
      - "True"
      - "False"
      - Depends on the compiler
      - Depends on the standard
    answer: 0
    explanation: True is the correct answer to “C preprocessor is conceptually the first step during compilation.”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: "What will be the output of the following C code? #include <stdio.h> int main() { register const int i = 10; i = 11; printf(\"%d\\n\", i); }"
    options:
      - "10"
      - Compile time error
      - Undefined behaviour
      - "11"
    answer: 1
    explanation: "Compile time error is the correct answer to “What will be the output of the following C code? #include <stdio.h> int main() { register const int i = 10; i = 11; printf(\"%d\\n\", i); }”. This question is standard in competitive examination syllabi for Function."
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
---


