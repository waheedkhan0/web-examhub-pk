---
title: C Preprocessor — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on C Preprocessor — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: c-preprocessor-part-1
topicName: C Preprocessor — Part 1
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
    question: "What will be the output of the program? #include<stdio.h> #define int char void main() { int i = 65; printf(\"sizeof(i)=%d\", sizeof(i)); }"
    options:
      - sizeof(i)=2
      - sizeof(i)=1
      - Compiler Error
      - None of These
    answer: 1
    explanation: "Since the #define replaces the string int by the macro char . So, here i is a variable of type char and not int ."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: "What will be the output of the following program? #include<stdio.h> #define square(x) x*x void main() { int i; i = 64/square(4); printf(\"%d\", i); }"
    options:
      - "4"
      - "64"
      - "16"
      - None of These
    answer: 1
    explanation: The macro call square(4) will be substituted by 4*4 so the expression becomes i = 64/4*4 . Since / and * has equal priority and associativity left to right, so the expression will be evaluated as (64/4)*4 i.e. 16*4 = 64.
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: "What will be the output of the program code? #include<stdio.h> #define a 10 void main() { #define a 50 printf(\"%d\", a); }"
    options:
      - "50"
      - "10"
      - Compiler Error
      - None of These
    answer: 0
    explanation: The preprocessor directives can be redefined anywhere in the program. So the most recently assigned value will be taken.
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: "Determine output: #include<stdio.h> #define clrscr() 100 void main() { clrscr(); printf(\"%dn\", clrscr()); }"
    options:
      - "0"
      - "1"
      - "100"
      - Error
    answer: 2
    explanation: "Preprocessor executes as a seperate pass before the execution of the compiler. So textual replacement of clrscr() to 100 occurs.The input program to compiler looks like this : void main () { 100; printf ( \" %d \\n \", 100 ) ; } Note: 100; is an executable statement but with no action. So it doesn't give any problem."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: "What will be the output of the following program? #include<stdio.h> #define prod(a,b) a*b void main() { int x=3,y=4; printf(\"%d\", prod(x+2,y-1)); }"
    options:
      - "15"
      - "12"
      - "10"
      - "11"
      - None of these
    answer: 2
    explanation: "The macro expands and evaluates to as: x+2*y-1 => x+(2*y)-1 => 10"
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: "What will be output if you will compile and execute the following c code? #include<stdio.h> #define max 5 void main(){ int i = 0; i = max++; printf(\"%d\", i++); }"
    options:
      - "5"
      - "6"
      - "7"
      - "0"
      - Compiler Error
    answer: 4
    explanation: "main.c: In function ‘main’: main.c:5:12: error: lvalue required as increment operand i = max++;"
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: "The output of the following program is: #define f(g,g2) g##g2 void main() { int var12=100; printf(\"%d\", f(var,12)); }"
    options:
      - Syntax error
      - Runtime error
      - g##g2
      - "100"
      - "10012"
    answer: 3
    explanation: "## is token pasting operator which simply combines all the parameters of macro into one variable. So, in f(var, 12), var and 12 combines to form var12 and replaces the f(var, 12) and hence the output is 100."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: "Find the output of the following program. #define INC(X) X++ void main() { int x=4; printf(\"%d\", INC(x++)); }"
    options:
      - "4"
      - "5"
      - "6"
      - Error
    answer: 3
    explanation: L value is required for this expression (x++) which is illegal.
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What is the purpose of the C preprocessor in C programming?
    options:
      - Compile C code
      - Optimize code
      - Preprocess code before compilation
      - Execute code
    answer: 2
    explanation: Preprocess code before compilation is the correct answer to “What is the purpose of the C preprocessor in C programming”. This question is standard in competitive examination syllabi for C Preprocessor.
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: Which directive is used to include the contents of another file in a C program using the C preprocessor?
    options:
      - "#define"
      - "#include"
      - "#ifdef"
      - "#pragma"
    answer: 1
    explanation: "#include is the correct answer to “Which directive is used to include the contents of another file in a C program using the C preprocessor”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: "What is the purpose of the #define directive in C preprocessing?"
    options:
      - To include a header file
      - To define a macro
      - To declare a constant
      - To declare a variable
    answer: 1
    explanation: "To define a macro is the correct answer to “What is the purpose of the #define directive in C preprocessing”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: In C, which directive is used to conditionally include code based on preprocessor macros?
    options:
      - "#ifdef"
      - "#ifndef"
      - "#if"
      - "#else"
    answer: 2
    explanation: "#if is the correct answer to “In C, which directive is used to conditionally include code based on preprocessor macros”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: "What is the result of the #ifdef DEBUG directive if the DEBUG macro is defined?"
    options:
      - The code block following it is included
      - The code block following it is excluded
      - It generates a compilation error
      - It defines the DEBUG macro
    answer: 0
    explanation: "The code block following it is included is the correct answer to “What is the result of the #ifdef DEBUG directive if the DEBUG macro is defined”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: Which directive in C preprocessing is used to define a macro with parameters?
    options:
      - "#define"
      - "#ifdef"
      - "#include"
      - "#if"
    answer: 0
    explanation: "#define is the correct answer to “Which directive in C preprocessing is used to define a macro with parameters”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: "In C preprocessing, what is the purpose of the #undef directive?"
    options:
      - To undefine a macro
      - To include a header file
      - To define a macro
      - To declare a variable
    answer: 0
    explanation: "To undefine a macro is the correct answer to “In C preprocessing, what is the purpose of the #undef directive”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: "What does the #ifndef directive do in C preprocessing?"
    options:
      - Checks if a macro is defined
      - Checks if a macro is not defined
      - Checks if a variable is declared
      - Checks if a function is defined
    answer: 1
    explanation: "Checks if a macro is not defined is the correct answer to “What does the #ifndef directive do in C preprocessing”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: "In C, what does the #pragma directive do in C preprocessing?"
    options:
      - Includes a header file
      - Provides compiler-specific instructions
      - Defines a macro
      - Checks for syntax errors
    answer: 1
    explanation: "Provides compiler-specific instructions is the correct answer to “In C, what does the #pragma directive do in C preprocessing”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: "What is the purpose of the #include directive in C preprocessing?"
    options:
      - To define a macro
      - To include a header file
      - To declare a variable
      - To conditionally compile code
    answer: 1
    explanation: "To include a header file is the correct answer to “What is the purpose of the #include directive in C preprocessing”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: "What is the purpose of the #if directive in C preprocessing?"
    options:
      - To check if a variable is declared
      - To conditionally include code
      - To include a header file
      - To define a macro
    answer: 1
    explanation: "To conditionally include code is the correct answer to “What is the purpose of the #if directive in C preprocessing”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: "In C, how do you use the #ifdef directive to conditionally include code if a macro is defined?"
    options:
      - "#ifdef MACRO"
      - "#ifdef(MACRO)"
      - "#ifdef:MACRO"
      - "#ifdef: MACRO"
    answer: 0
    explanation: "#ifdef MACRO is the correct answer to “In C, how do you use the #ifdef directive to conditionally include code if a macro is defined”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: "What is the purpose of the #error directive in C preprocessing?"
    options:
      - To include an error message in the code
      - To define a macro
      - To check if a variable is declared
      - To conditionally compile code
    answer: 0
    explanation: "To include an error message in the code is the correct answer to “What is the purpose of the #error directive in C preprocessing”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: "What is the result of the #ifndef DEBUG directive if the DEBUG macro is defined?"
    options:
      - The code block following it is included
      - The code block following it is excluded
      - It generates a compilation error
      - It defines the DEBUG macro
    answer: 1
    explanation: "The code block following it is excluded is the correct answer to “What is the result of the #ifndef DEBUG directive if the DEBUG macro is defined”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: Which directive in C preprocessing is used to concatenate two or more strings?
    options:
      - "#concat"
      - "#strcat"
      - "#combine"
      - "#define"
    answer: 3
    explanation: "#define is the correct answer to “Which directive in C preprocessing is used to concatenate two or more strings”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: "In C, what does the #line directive do in C preprocessing?"
    options:
      - Specifies the line number in the source file
      - Defines a macro
      - Includes a header file
      - Excludes code
    answer: 0
    explanation: "Specifies the line number in the source file is the correct answer to “In C, what does the #line directive do in C preprocessing”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: "What is the purpose of the #pragma once directive in C preprocessing?"
    options:
      - Prevents recursive inclusion of header files
      - Defines a macro
      - Checks for syntax errors
      - Excludes code
    answer: 0
    explanation: "Prevents recursive inclusion of header files is the correct answer to “What is the purpose of the #pragma once directive in C preprocessing”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: "In C preprocessing, what is the purpose of the #elif directive?"
    options:
      - Checks if a macro is defined
      - Checks if a macro is not defined
      - Provides an alternative condition
      - Defines a macro
    answer: 2
    explanation: "Provides an alternative condition is the correct answer to “In C preprocessing, what is the purpose of the #elif directive”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: "What is the result of the #error directive in C preprocessing?"
    options:
      - Generates a compilation error with a specified error message
      - Defines a macro
      - Checks for syntax errors
      - Excludes code
    answer: 0
    explanation: "Generates a compilation error with a specified error message is the correct answer to “What is the result of the #error directive in C preprocessing”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: "What is the purpose of the #pragma message directive in C preprocessing?"
    options:
      - Includes a message in the code
      - Defines a macro
      - Checks for syntax errors
      - Excludes code
    answer: 0
    explanation: "Includes a message in the code is the correct answer to “What is the purpose of the #pragma message directive in C preprocessing”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: "In C, how do you use the #ifndef directive to conditionally include code if a macro is not defined?"
    options:
      - "#ifndef MACRO"
      - "#ifndef(MACRO)"
      - "#ifndef:MACRO"
      - "#ifndef: MACRO"
    answer: 0
    explanation: "#ifndef MACRO is the correct answer to “In C, how do you use the #ifndef directive to conditionally include code if a macro is not defined”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: "What does the #pragma once directive do in C preprocessing?"
    options:
      - Prevents multiple inclusion of header files
      - Defines a macro
      - Checks for syntax errors
      - Excludes code
    answer: 0
    explanation: "Prevents multiple inclusion of header files is the correct answer to “What does the #pragma once directive do in C preprocessing”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: "In C, what is the purpose of the #ifdef directive?"
    options:
      - Checks if a macro is defined
      - Checks if a macro is not defined
      - Defines a macro
      - Includes a header file
    answer: 0
    explanation: "Checks if a macro is defined is the correct answer to “In C, what is the purpose of the #ifdef directive”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: "What is the purpose of the #pragma warning directive in C preprocessing?"
    options:
      - Generates a warning message
      - Defines a macro
      - Checks for syntax errors
      - Excludes code
    answer: 0
    explanation: "Generates a warning message is the correct answer to “What is the purpose of the #pragma warning directive in C preprocessing”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: "In C preprocessing, what is the purpose of the #elifdef directive?"
    options:
      - Checks if a macro is defined
      - Checks if a macro is not defined
      - Provides an alternative condition
      - Defines a macro
    answer: 2
    explanation: "Provides an alternative condition is the correct answer to “In C preprocessing, what is the purpose of the #elifdef directive”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: "What is the result of the #pragma message directive in C preprocessing?"
    options:
      - Includes a message in the code
      - Defines a macro
      - Checks for syntax errors
      - Excludes code
    answer: 0
    explanation: "Includes a message in the code is the correct answer to “What is the result of the #pragma message directive in C preprocessing”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: "What is the purpose of the #undef directive in C preprocessing?"
    options:
      - Undefines a macro
      - Defines a macro
      - Checks for syntax errors
      - Excludes code
    answer: 0
    explanation: "Undefines a macro is the correct answer to “What is the purpose of the #undef directive in C preprocessing”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: "In C preprocessing, what is the purpose of the #elifndef directive?"
    options:
      - Checks if a macro is defined
      - Checks if a macro is not defined
      - Provides an alternative condition
      - Defines a macro
    answer: 1
    explanation: "Checks if a macro is not defined is the correct answer to “In C preprocessing, what is the purpose of the #elifndef directive”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: "What is the result of the #pragma warning directive in C preprocessing?"
    options:
      - Generates a warning message
      - Defines a macro
      - Checks for syntax errors
      - Excludes code
    answer: 0
    explanation: "Generates a warning message is the correct answer to “What is the result of the #pragma warning directive in C preprocessing”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: "In C, what is the purpose of the #line directive?"
    options:
      - Specifies the line number and filename in the source file
      - Defines a macro
      - Checks for syntax errors
      - Excludes code
    answer: 0
    explanation: "Specifies the line number and filename in the source file is the correct answer to “In C, what is the purpose of the #line directive”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: C preprocessor
    options:
      - Takes care of conditional compilation
      - Takes care of macros
      - Takes care of include files
      - Acts before compilation
      - All of the above
    answer: 4
    explanation: All of the above is the correct answer to “C preprocessor”. This question is standard in competitive examination syllabi for C Preprocessor.
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: A preprocessor command
    options:
      - need not start on a new line
      - need not start on the first column
      - "has # as the first character"
      - comes before the first executable statement
    answer: 2
    explanation: "has # as the first character is the correct answer to “A preprocessor command”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
---


