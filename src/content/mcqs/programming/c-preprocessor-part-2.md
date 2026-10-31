---
title: C Preprocessor — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on C Preprocessor — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: c-preprocessor-part-2
topicName: C Preprocessor — Part 2
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
    question: Choose the correct statement. I. The scope of a macro definition need not be the entire program. II. The scope of a macro definition extends from the point of definition to the end of the file. III. New line is a macro definition delimiter. IV. A macro definition may go beyond a line.
    options:
      - I and II
      - II and III
      - I, II and III
      - II, III and IV
      - I, II, III and IV
    answer: 4
    explanation: I, II, III and IV is the correct answer to “Choose the correct statement. I. The scope of a macro definition need not be the entire program. II. The scope of a macro definition extends from the point of definition to the end of the file. III. New line is a macro definition delimiter. IV. A macro definition may go beyond a line.”. This question is standard in competitive examination syllabi for C Preprocessor.
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: "In which stage the following code #include<stdio.h> gets replaced by the contents of the file stdio.h"
    options:
      - During Preprocessing
      - During Execution
      - During linking
      - During Editing
      - None of these
    answer: 0
    explanation: "During Preprocessing is the correct answer to “In which stage the following code #include<stdio.h> gets replaced by the contents of the file stdio.h”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: "What will be output after executing following code? #include<stdio.h> # define a 10 void main() { printf(\"%d..\", a); foo(); printf(\"%d\", a); } void foo() { #undef a #define a 50 }"
    options:
      - 10..50
      - 10..10
      - "0"
      - Error
    answer: 1
    explanation: "10..10 is the correct answer to “What will be output after executing following code? #include<stdio.h> # define a 10 void main() { printf(\"%d..\", a); foo(); printf(\"%d\", a); } void foo() { #undef a #define a 50 }”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: "What will be the output of the following C code? #include<stdio.h> #define max 20 main() { #ifndef max #define min 10 #else #define min 30 #endif printf(\"%d\",min); }"
    options:
      - "10"
      - "20"
      - "30"
      - error
    answer: 2
    explanation: "30 is the correct answer to “What will be the output of the following C code? #include<stdio.h> #define max 20 main() { #ifndef max #define min 10 #else #define min 30 #endif printf(\"%d\",min); }”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: "What will be the output of the following C code? #define display(text) \"$\" #text main() { printf(display(hello world)); }"
    options:
      - hello world
      - $helloworld
      - $hello world
      - error
    answer: 2
    explanation: "$hello world is the correct answer to “What will be the output of the following C code? #define display(text) \"$\" #text main() { printf(display(hello world)); }”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: "What will be the output of the following C code? #include <stdio.h> #define Shyam(x) #x int main() { int marks=100; printf(\"value of %s is = %d\\n\",Shyam(marks),marks); return 0; }"
    options:
      - error
      - value of marks=100
      - value of=100
      - "100"
    answer: 1
    explanation: "value of marks=100 is the correct answer to “What will be the output of the following C code? #include <stdio.h> #define Shyam(x) #x int main() { int marks=100; printf(\"value of %s is = %d\\n\",Shyam(marks),marks); return 0; }”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: "What will be the output of the following C code? #include<stdio.h> #define max 100 void main() { #if(max%10) printf(\"Exam\"); #endif printf(\"Veda\"); }"
    options:
      - error
      - Exam
      - Veda
      - ExamHub
    answer: 2
    explanation: "Veda is the correct answer to “What will be the output of the following C code? #include<stdio.h> #define max 100 void main() { #if(max%10) printf(\"Exam\"); #endif printf(\"Veda\"); }”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: ". . . . . . . . is the preprocessor directive which is used to end the scope of #ifdef."
    options:
      - "#elif"
      - "#ifndef"
      - "#endif"
      - "#if"
    answer: 2
    explanation: "#endif is the correct answer to “. . . . . . . . is the preprocessor directive which is used to end the scope of #ifdef.”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: "In the directive #pragma pack(n), if the value of 'n' is given to be 5, then what happens?"
    options:
      - Error
      - Warning but no error
      - Executes the pragma statement
      - Ignores the pragma statement and executes the program
    answer: 3
    explanation: "Ignores the pragma statement and executes the program is the correct answer to “In the directive #pragma pack(n), if the value of 'n' is given to be 5, then what happens”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: "What will be the output of the following C code? #include<stdio.h> #define INDIA 1 #define US 2 #define CC US main() { #if CC==INDIA printf(\"Rupee\"); #elif CC==US printf(\"Dollar\"); #else printf(\"Euro\"); #endif }"
    options:
      - Euro
      - Rupee
      - Dollar
      - Error
    answer: 2
    explanation: "Dollar is the correct answer to “What will be the output of the following C code? #include<stdio.h> #define INDIA 1 #define US 2 #define CC US main() { #if CC==INDIA printf(\"Rupee\"); #elif CC==US printf(\"Dollar\"); #else printf(\"Euro\"); #endif }”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: "What will be the output of the following C code, if it is run on a 32 bit platform? #include<stdio.h> #pragma(1) struct test { int i; char j; }; main() { printf(\"%d\",sizeof(struct test)); }"
    options:
      - Error
      - "1"
      - "4"
      - "8"
    answer: 3
    explanation: "8 is the correct answer to “What will be the output of the following C code, if it is run on a 32 bit platform? #include<stdio.h> #pragma(1) struct test { int i; char j; }; main() { printf(\"%d\",sizeof(struct test)); }”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: "What will be the output of the following C code? #include <stdio.h> #define p( m ) printf( \"t*\" #m \" = %s\", t##m ) char tram[]=\"tram\"; int main() { int x; x=p(ram); }"
    options:
      - error
      - tram=tram
      - t*ram=t*ram
      - t*ram=tram
    answer: 3
    explanation: "t*ram=tram is the correct answer to “What will be the output of the following C code? #include <stdio.h> #define p( m ) printf( \"t*\" #m \" = %s\", t##m ) char tram[]=\"tram\"; int main() { int x; x=p(ram); }”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: "What will be the output of the following C code? #include<stdio.h> #define sf 10 main() { if(sf==100) printf(\"good\"); else { printf(\"bad\"); sf=100; } printf(\"%d\",sf); }"
    options:
      - "100"
      - bad
      - "10"
      - error
    answer: 3
    explanation: "error is the correct answer to “What will be the output of the following C code? #include<stdio.h> #define sf 10 main() { if(sf==100) printf(\"good\"); else { printf(\"bad\"); sf=100; } printf(\"%d\",sf); }”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: "What will be the output of the following C code? #include<stdio.h> void main() { #ifndef max printf(\"hello\"); #endif printf(\"hi\"); }"
    options:
      - hello
      - hellohi
      - error
      - hi
    answer: 1
    explanation: "hellohi is the correct answer to “What will be the output of the following C code? #include<stdio.h> void main() { #ifndef max printf(\"hello\"); #endif printf(\"hi\"); }”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: "The following C code results in an error. #include <stdio.h> #define world( n ) printf( \"t^^\" #n\" = %c\", t##n ) int t3=1; int main() { world(3); }"
    options:
      - "True"
      - "False"
    answer: 1
    explanation: "False is the correct answer to “The following C code results in an error. #include <stdio.h> #define world( n ) printf( \"t^^\" #n\" = %c\", t##n ) int t3=1; int main() { world(3); }”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: "What will be the output of the following C code? #define F abc #define B def #define FB(arg) #arg #define FB1(arg) FB(arg) main() { printf(FB(F B)); FB1(F B); }"
    options:
      - F B
      - Error
      - FB
      - "\"FB\""
    answer: 0
    explanation: "F B is the correct answer to “What will be the output of the following C code? #define F abc #define B def #define FB(arg) #arg #define FB1(arg) FB(arg) main() { printf(FB(F B)); FB1(F B); }”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: "What will be the output of the following C code? #include <stdio.h> #define p( n,m ) printf( \"%d\", m##n ) int main() { p(3,4); }"
    options:
      - Error
      - Junk value
      - "34"
      - "43"
    answer: 3
    explanation: "43 is the correct answer to “What will be the output of the following C code? #include <stdio.h> #define p( n,m ) printf( \"%d\", m##n ) int main() { p(3,4); }”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: "What will be the output of the following C code? #define example(s,n) #s #n main() { printf(example(hello,world)); }"
    options:
      - example(hello,world)
      - example
      - hello,world
      - helloworld
    answer: 3
    explanation: "helloworld is the correct answer to “What will be the output of the following C code? #define example(s,n) #s #n main() { printf(example(hello,world)); }”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: "What will be the output of the following C code? #include <stdio.h> #define hello( n ) a##n int a3; int main() { int x; x=hello(3); if(x!=0) printf(\"hi\"); else printf(\"good\"); }"
    options:
      - error
      - a3
      - good
      - hi
    answer: 2
    explanation: "good is the correct answer to “What will be the output of the following C code? #include <stdio.h> #define hello( n ) a##n int a3; int main() { int x; x=hello(3); if(x!=0) printf(\"hi\"); else printf(\"good\"); }”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: "What will be the output of the following C code? #include<stdio.h> #define hello main() { #ifdef hello #define hi 4 #else #define hi 5 #endif printf(\"%d\",hi); }"
    options:
      - "4"
      - "5"
      - "45"
      - error
    answer: 0
    explanation: "4 is the correct answer to “What will be the output of the following C code? #include<stdio.h> #define hello main() { #ifdef hello #define hi 4 #else #define hi 5 #endif printf(\"%d\",hi); }”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: "What will be the output of the following C code? #define display(text) printf(#text \"@\") main() { display(hello.); display(good morning!); }"
    options:
      - hello.@good morning!
      - error
      - hello.good morning!@
      - hello.@good morning!@
    answer: 3
    explanation: "hello.@good morning!@ is the correct answer to “What will be the output of the following C code? #define display(text) printf(#text \"@\") main() { display(hello.); display(good morning!); }”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: "What will be the output of the following C code? #include <stdio.h> #define p( n ) printf( \"t%%\\n\" #n \" = %d\", t##n ) int t3=10; int main() { int x; x=p(3); }"
    options:
      - t% 3=10
      - t3=10
      - t%3=10
      - t %3=10
    answer: 0
    explanation: "t% 3=10 is the correct answer to “What will be the output of the following C code? #include <stdio.h> #define p( n ) printf( \"t%%\\n\" #n \" = %d\", t##n ) int t3=10; int main() { int x; x=p(3); }”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: "What will be the output of the following C code? #include <stdio.h> #define p( n,m ) printf( \"%d\", m##n ) #define q(a,b) printf(\"%d\",a##b) main() { p(3,4); q(5,6); }"
    options:
      - "4356"
      - "3456"
      - "4365"
      - "3465"
    answer: 0
    explanation: "4356 is the correct answer to “What will be the output of the following C code? #include <stdio.h> #define p( n,m ) printf( \"%d\", m##n ) #define q(a,b) printf(\"%d\",a##b) main() { p(3,4); q(5,6); }”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: "What will be the output of the following C code? #include<stdio.h> #define hello 10 void main() { printf(\"%d\",hello); #undef hello printf(\"%d\",hello); }"
    options:
      - "10"
      - hello
      - error
      - "1010"
    answer: 2
    explanation: "error is the correct answer to “What will be the output of the following C code? #include<stdio.h> #define hello 10 void main() { printf(\"%d\",hello); #undef hello printf(\"%d\",hello); }”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: "What will be the output of the following C code? #include <stdio.h> #define display( n ) printf( \"a\" #n \" = %d\", a##n ) int main() { display(3); }"
    options:
      - a3
      - "31"
      - a 3
      - error
    answer: 3
    explanation: "error is the correct answer to “What will be the output of the following C code? #include <stdio.h> #define display( n ) printf( \"a\" #n \" = %d\", a##n ) int main() { display(3); }”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: The preprocessor directive used to give additional information to the compiler, beyond which is conveyed in the language . . . . . . . .
    options:
      - "#include"
      - "#define"
      - "#pragma"
      - "#elif"
    answer: 2
    explanation: "#pragma is the correct answer to “The preprocessor directive used to give additional information to the compiler, beyond which is conveyed in the language . . . . . . . .”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: Which of the following operators is used to concatenate two strings without space?
    options:
      - "#"
      - < >
      - "**"
      - "##"
    answer: 3
    explanation: "## is the correct answer to “Which of the following operators is used to concatenate two strings without space”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: "#pragma GCC poison should be followed by a list of identifiers that are . . . . . . . ."
    options:
      - even in number
      - odd in number
      - valid
      - invalid
    answer: 3
    explanation: invalid is the correct answer to “#pragma GCC poison should be followed by a list of identifiers that are . . . . . . . .”. This question is standard in competitive examination syllabi for C Preprocessor.
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: "In the directive, #pragma pack(n), which of the following is not a valid value of n?"
    options:
      - "1"
      - "2"
      - "3"
      - "4"
    answer: 2
    explanation: "3 is the correct answer to “In the directive, #pragma pack(n), which of the following is not a valid value of n”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: "What will be the output of the following C code? #include <stdio.h> #define a 2 main() { int r; #define a 5 r=a*2; printf(\"%d\",r); }"
    options:
      - "10"
      - "4"
      - "2"
      - "5"
    answer: 0
    explanation: "10 is the correct answer to “What will be the output of the following C code? #include <stdio.h> #define a 2 main() { int r; #define a 5 r=a*2; printf(\"%d\",r); }”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: "What will be the output of the following C code? #include<stdio.h> #define max 100 main() { #ifdef max printf(\"hello\"); }"
    options:
      - "100"
      - hello
      - "\"hello\""
      - error
    answer: 3
    explanation: "error is the correct answer to “What will be the output of the following C code? #include<stdio.h> #define max 100 main() { #ifdef max printf(\"hello\"); }”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: "What will be the output of the following C code? #include<stdio.h> #define hello 10 main() { #ifdef hello #undef hello #define hello 100 #else #define hello 200 #endif printf(\"%d\",hello); }"
    options:
      - Error
      - "10"
      - "100"
      - "200"
    answer: 2
    explanation: "100 is the correct answer to “What will be the output of the following C code? #include<stdio.h> #define hello 10 main() { #ifdef hello #undef hello #define hello 100 #else #define hello 200 #endif printf(\"%d\",hello); }”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: Which of the following is not a preprocessor directive?
    options:
      - "#error"
      - "#pragma"
      - "#if"
      - "#ifelse"
    answer: 3
    explanation: "#ifelse is the correct answer to “Which of the following is not a preprocessor directive”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: "The preprocessor directive which is used to remove the definition of an identifier which was previously defined with #define?"
    options:
      - "#ifdef"
      - "#undef"
      - "#ifndef"
      - "#def"
    answer: 1
    explanation: "#undef is the correct answer to “The preprocessor directive which is used to remove the definition of an identifier which was previously defined with #define”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: The function of __attribute__((packed)); can also be performed using . . . . . . . .
    options:
      - "#pragma pack(1)"
      - "#pragma pack(2)"
      - "#pragma pack(4)"
      - "#pragma pack(8)"
    answer: 0
    explanation: "#pragma pack(1) is the correct answer to “The function of __attribute__((packed)); can also be performed using . . . . . . . .”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: The preprocessor directive which checks whether a constant expression results in a zero or non-zero value . . . . . . . .
    options:
      - "#if"
      - "#ifdef"
      - "#undef"
      - "#ifndef"
    answer: 0
    explanation: "#if is the correct answer to “The preprocessor directive which checks whether a constant expression results in a zero or non-zero value . . . . . . . .”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: "What will be the output of the following C code? #include<stdio.h> void f() { #define sf 100 printf(\"%d\",sf); } int main() { #define sf 99; f(); printf(\"%d\",sf); }"
    options:
      - error
      - "100"
      - "99"
      - "10099"
    answer: 0
    explanation: "error is the correct answer to “What will be the output of the following C code? #include<stdio.h> void f() { #define sf 100 printf(\"%d\",sf); } int main() { #define sf 99; f(); printf(\"%d\",sf); }”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: "What will be the output of the following C code? #define HELLO(a) #a main() { printf(HELLO(good morning)); }"
    options:
      - good morning
      - HELLO good morning
      - error
    answer: 2
    explanation: "error is the correct answer to “What will be the output of the following C code? #define HELLO(a) #a main() { printf(HELLO(good morning)); }”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: "The purpose of the preprocessor directive #error is that . . . . . . . ."
    options:
      - It rectifies any error present in the code
      - It rectifies only the first error which occurs in the code
      - It causes the preprocessor to report a fatal error
      - It causes the preprocessor to ignore an error
    answer: 2
    explanation: "It causes the preprocessor to report a fatal error is the correct answer to “The purpose of the preprocessor directive #error is that . . . . . . . .”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: "What will be the output of the following C code? #include<stdio.h> #define ram 10 main() { #ifdef ram #define ram 20 #endif printf(\"%d\",ram); }"
    options:
      - "10"
      - "20"
      - Error
      - "1020"
    answer: 1
    explanation: "20 is the correct answer to “What will be the output of the following C code? #include<stdio.h> #define ram 10 main() { #ifdef ram #define ram 20 #endif printf(\"%d\",ram); }”. This question is standard in competitive examination syllabi for C Preprocessor."
    keyConcept: C Preprocessor
    testedIn:
      - FPSC
      - PPSC
---


