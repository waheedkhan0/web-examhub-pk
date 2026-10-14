---
title: C Miscellaneous — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on C Miscellaneous — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: c-miscellaneous-part-2
topicName: C Miscellaneous — Part 2
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
    question: "Determine Output: #include<stdio.h> void main() { char s[]={'a','b','c','n','c','\\0'}; char *p, *str, *str1; p=&s[3]; str=p; str1=s; printf(\"%c\", ++*p + ++*str1-32); }"
    options:
      - "N"
      - P
      - M
      - None of These
    answer: 2
    explanation: "p is pointing to character '\\n'. str1 is pointing to character 'a'. ++*p: \"p is pointing to '\\n' and that is incremented by one.\" the ASCII value of '\\n' is 10. then it is incremented to 11. the value of ++*p is 11. ++*str1: \"str1 is pointing to 'a' that is incremented by 1 and it becomes 'b'. ASCII value of 'b' is 98. Both 11 and 98 is added and result is subtracted from 32. i.e. (11+98-32) = 77(\"M\")."
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: "Determine Output: void main() { static char *s[] = {\"black\", \"white\", \"yellow\", \"violet\"}; char **ptr[] = {s+3, s+2, s+1, s}, ***p; p = ptr; ++p; printf(\"%s\",*--*++p + 3); }"
    options:
      - te
      - ow
      - et
      - ck
    answer: 3
    explanation: "In this problem we have an array of char pointers \"s\" pointing to start of 4 strings. Then we have ptr which is a pointer to a pointer of type char and a variable p which is a pointer to a pointer to a pointer of type char. p holds the initial value of ptr, i.e. p = s+3. The next statement increment value in p by 1 , thus now value of p = s+2. In the printf statement the expression is evaluated as follows: *++p causes gets value s+1 then the pre decrement is executed and we get s+1-1 = s which is pointing to the word \"black\". The indirection operator now gets the value from the array of s and adds 3 to the starting address. The string is printed starting from this position. Thus, the output is 'ck'."
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: "What will be the output of the following C code? #include<stdio.h> main() { int n; n=f1(4); printf(\"%d\",n); } f1(int x) { int b; if(x==1) return 1; else b=x*f1(x-1); return b; }"
    options:
      - "24"
      - "4"
      - "12"
      - "10"
    answer: 0
    explanation: "24 is the correct answer to “What will be the output of the following C code? #include<stdio.h> main() { int n; n=f1(4); printf(\"%d\",n); } f1(int x) { int b; if(x==1) return 1; else b=x*f1(x-1); return b; }”. This question is standard in competitive examination syllabi for C Miscellaneous."
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: In the absence of a exit condition in a recursive function, the following error is given . . . . . . . .
    options:
      - Compile time error
      - Run time error
      - Logical error
      - No error
    answer: 1
    explanation: Run time error is the correct answer to “In the absence of a exit condition in a recursive function, the following error is given . . . . . . . .”. This question is standard in competitive examination syllabi for C Miscellaneous.
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: "What is the output of this C code? #include <stdio.h> main() { if (sizeof(int) > -1) printf(\"True\"); else printf(\"False\"); }"
    options:
      - "True"
      - "False"
    answer: 1
    explanation: "False is the correct answer to “What is the output of this C code? #include <stdio.h> main() { if (sizeof(int) > -1) printf(\"True\"); else printf(\"False\"); }”. This question is standard in competitive examination syllabi for C Miscellaneous."
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What will be the value of the following assignment expression? (x = foo())!= 1 considering foo() returns 2
    options:
      - "2"
      - "True"
      - "1"
      - "0"
    answer: 0
    explanation: 2 is the correct answer to “What will be the value of the following assignment expression? (x = foo())!= 1 considering foo() returns 2”. This question is standard in competitive examination syllabi for C Miscellaneous.
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: "Suppose we have: int a=100; (signed by default). If we want to convert this to an unsigned long integer, we can do this by making the following small change:"
    options:
      - int a=lu100
      - int a= 100ul
      - int a=uu100
      - int a=100uu
    answer: 1
    explanation: "int a= 100ul is the correct answer to “Suppose we have: int a=100; (signed by default). If we want to convert this to an unsigned long integer, we can do this by making the following small change:”. This question is standard in competitive examination syllabi for C Miscellaneous."
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: Suppose we transfer a file written on a little endian machine to a big endian machine and there is no transformation from little endian to big endian, then what happens?
    options:
      - The big endian machine throws an error when it receives the file
      - The big endian machine reads the file in the reverse order
      - The big endian machine does not read the file
      - The big endian machine reads the file in the normal order
    answer: 1
    explanation: The big endian machine reads the file in the reverse order is the correct answer to “Suppose we transfer a file written on a little endian machine to a big endian machine and there is no transformation from little endian to big endian, then what happens”. This question is standard in competitive examination syllabi for C Miscellaneous.
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: File formats which have . . . . . . . . as a basic unit are independent of endianness.
    options:
      - 1 byte
      - 2 bytes
      - 3 bytes
      - 4 bytes
    answer: 0
    explanation: 1 byte is the correct answer to “File formats which have . . . . . . . . as a basic unit are independent of endianness.”. This question is standard in competitive examination syllabi for C Miscellaneous.
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: "What will be the output of the following C code? #include<stdio.h> static inline int max(int a, int b) { return a > b ? a : b; } main() { int m; m=max(-6,-5); printf(\"%d\",m); }"
    options:
      - "-6"
      - "-5"
      - Junk value
      - Error
    answer: 1
    explanation: "-5 is the correct answer to “What will be the output of the following C code? #include<stdio.h> static inline int max(int a, int b) { return a > b ? a : b; } main() { int m; m=max(-6,-5); printf(\"%d\",m); }”. This question is standard in competitive examination syllabi for C Miscellaneous."
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: Sign qualifiers can be applied to double.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “Sign qualifiers can be applied to double.”. This question is standard in competitive examination syllabi for C Miscellaneous.
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: "What is the output of this C code? #include <stdio.h> main() { char *p = \"Examveda C-Test\"; p[0] = 'a'; p[1] = 'b'; printf(\"%s\", p); }"
    options:
      - abmveda C-Test
      - Examveda C-Test
      - Compile time error
      - Run time error
    answer: 3
    explanation: "Run time error is the correct answer to “What is the output of this C code? #include <stdio.h> main() { char *p = \"Examveda C-Test\"; p[0] = 'a'; p[1] = 'b'; printf(\"%s\", p); }”. This question is standard in competitive examination syllabi for C Miscellaneous."
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: "The following C code results in an error. State whether this statement is true or false. #include <stdio.h> void f(double b) { printf (\"%ld\\n\",b); } int main() { inline f(100.56); return 0; }"
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "True is the correct answer to “The following C code results in an error. State whether this statement is true or false. #include <stdio.h> void f(double b) { printf (\"%ld\\n\",b); } int main() { inline f(100.56); return 0; }”. This question is standard in competitive examination syllabi for C Miscellaneous."
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What will be the output of the following C code? main() { unsigned a=10; long unsigned b=5l; printf(“%lu%u”,a,b); }
    options:
      - "105"
      - "510"
      - "10"
      - error
    answer: 0
    explanation: 105 is the correct answer to “What will be the output of the following C code? main() { unsigned a=10; long unsigned b=5l; printf(“%lu%u”,a,b); }”. This question is standard in competitive examination syllabi for C Miscellaneous.
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What is the binary representation of the integer -14?
    options:
      - "11110"
      - "01110"
      - "01100"
      - "11100"
    answer: 0
    explanation: 11110 is the correct answer to “What is the binary representation of the integer -14”. This question is standard in competitive examination syllabi for C Miscellaneous.
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: Functions in C Language are always . . . . . . . .
    options:
      - Internal
      - External
      - Both Internal and External
      - External and Internal are not valid terms for functions
    answer: 1
    explanation: External is the correct answer to “Functions in C Language are always . . . . . . . .”. This question is standard in competitive examination syllabi for C Miscellaneous.
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What will be the error in the following C code? main() { long float a=-25.373e22; printf("%lf",a); }
    options:
      - Negative number cannot be assigned to float data type
      - Long and float cannot be used together
      - Does not result in error
      - Logical error
    answer: 1
    explanation: Long and float cannot be used together is the correct answer to “What will be the error in the following C code? main() { long float a=-25.373e22; printf("%lf",a); }”. This question is standard in competitive examination syllabi for C Miscellaneous.
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: "What will be the output of the following C code if the input given to the code shown below is \"examveda\"? #include<stdio.h> #define NL '\\n' void main() { void f(void); printf(\"enter the word\\n\"); f(); } void f(void) { char c; if((c=getchar())!=NL) { f(); printf(\"%c\",c); } return; }"
    options:
      - examveda
      - infinite loop
      - adevmaxe
      - maxeadev
    answer: 2
    explanation: "adevmaxe is the correct answer to “What will be the output of the following C code if the input given to the code shown below is \"examveda\"? #include<stdio.h> #define NL '\\n' void main() { void f(void); printf(\"enter the word\\n\"); f(); } void f(void) { char c; if((c=getchar())!=NL) { f(); printf(\"%c\",c); } return; }”. This question is standard in competitive examination syllabi for C Miscellaneous."
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: A machine in which the least significant byte is stored in the smallest address is . . . . . . . .
    options:
      - Big endian machine
      - Bi-endian machine
      - Binary bit machine
      - Little endian machine
    answer: 3
    explanation: Little endian machine is the correct answer to “A machine in which the least significant byte is stored in the smallest address is . . . . . . . .”. This question is standard in competitive examination syllabi for C Miscellaneous.
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: "What is the difference between the following 2 C codes? #include <stdio.h> //Program 1 int main() { int d, a = 1, b = 2; d = a++ + ++b; printf(\"%d %d %d\", d, a, b); } #include <stdio.h> //Program 2 int main() { int d, a = 1, b = 2; d = a++ +++b; printf(\"%d %d %d\", d, a, b); }"
    options:
      - No difference as space doesn't make any difference, values of a, b, d are same in both the case
      - Space does make a difference, values of a, b, d are different
      - Program 1 has syntax error, program 2 is not
      - Program 2 has syntax error, program 1 is not
    answer: 3
    explanation: "Program 2 has syntax error, program 1 is not is the correct answer to “What is the difference between the following 2 C codes? #include <stdio.h> //Program 1 int main() { int d, a = 1, b = 2; d = a++ + ++b; printf(\"%d %d %d\", d, a, b); } #include <stdio.h> //Program 2 int main() { int d, a = 1, b = 2; d = a++ +++b; printf(\"%d %d %d\", d, a, b); }”. This question is standard in competitive examination syllabi for C Miscellaneous."
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: "What will be the output of the following C code? #include<stdio.h> extern inline int min(int a, int b) { return a < b ? a : b; } main() { int m; m=min(3,-5); printf(\"%d\",m); }"
    options:
      - Error
      - "3"
      - "-5"
      - Junk value
    answer: 0
    explanation: "Error is the correct answer to “What will be the output of the following C code? #include<stdio.h> extern inline int min(int a, int b) { return a < b ? a : b; } main() { int m; m=min(3,-5); printf(\"%d\",m); }”. This question is standard in competitive examination syllabi for C Miscellaneous."
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: "What will be the output of the following C code? #include<stdio.h> int main() { signed char ch= ‘a’; printf(“%u”,ch); return 0; }"
    options:
      - "-65"
      - "65"
      - "-97"
      - "97"
    answer: 3
    explanation: "97 is the correct answer to “What will be the output of the following C code? #include<stdio.h> int main() { signed char ch= ‘a’; printf(“%u”,ch); return 0; }”. This question is standard in competitive examination syllabi for C Miscellaneous."
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: "What will be the output of the following C code? #include <stdio.h> void inline func1(char b[10]) { printf (\"%c\\n\",b[2]); } int main() { func1(\"examveda\"); return 0; }"
    options:
      - e
      - a
      - x
      - error
    answer: 1
    explanation: "a is the correct answer to “What will be the output of the following C code? #include <stdio.h> void inline func1(char b[10]) { printf (\"%c\\n\",b[2]); } int main() { func1(\"examveda\"); return 0; }”. This question is standard in competitive examination syllabi for C Miscellaneous."
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: Which of the following declaration is not supported by C language?
    options:
      - String str
      - char *str
      - float str = 3e2
      - Both "String str;" and "float str = 3e2;"
    answer: 0
    explanation: String str is the correct answer to “Which of the following declaration is not supported by C language”. This question is standard in competitive examination syllabi for C Miscellaneous.
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: "What will be the output of the following C code? #include<stdio.h> int main() { int n=10; int f(int n); printf(\"%d\",f(n)); } int f(int n) { if(n>0) return(n+f(n-2)); }"
    options:
      - "10"
      - "80"
      - "30"
      - Error
    answer: 2
    explanation: "30 is the correct answer to “What will be the output of the following C code? #include<stdio.h> int main() { int n=10; int f(int n); printf(\"%d\",f(n)); } int f(int n) { if(n>0) return(n+f(n-2)); }”. This question is standard in competitive examination syllabi for C Miscellaneous."
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Iteration requires more system memory than recursion.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “Iteration requires more system memory than recursion.”. This question is standard in competitive examination syllabi for C Miscellaneous.
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: "What will be the output of the following C code? #include<stdio.h> int main() { printf(\"Hello\"); main(); return 0; }"
    options:
      - Hello is printed once
      - Hello infinite number of times
      - Hello is not printed at all
      - 0 is returned
    answer: 1
    explanation: "Hello infinite number of times is the correct answer to “What will be the output of the following C code? #include<stdio.h> int main() { printf(\"Hello\"); main(); return 0; }”. This question is standard in competitive examination syllabi for C Miscellaneous."
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: Comment on the following C statement. n = 1; printf("%d, %dn", 3*n, n++);
    options:
      - Output will be 3, 2
      - Output will be 3, 1
      - Output will be 6, 1
      - Output is compiler dependent
    answer: 3
    explanation: Output is compiler dependent is the correct answer to “Comment on the following C statement. n = 1; printf("%d, %dn", 3*n, n++);”. This question is standard in competitive examination syllabi for C Miscellaneous.
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: "What will be the output of the following C code? #include<stdio.h> main() { signed char a[]= “BAT”; printf(“%c”, a[1]); return 0; }"
    options:
      - "-A"
      - BAT
      - A
      - "65"
    answer: 2
    explanation: "A is the correct answer to “What will be the output of the following C code? #include<stdio.h> main() { signed char a[]= “BAT”; printf(“%c”, a[1]); return 0; }”. This question is standard in competitive examination syllabi for C Miscellaneous."
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: "What will be the output of the following C code? #include <stdio.h> void inline func1(int a, int b) { printf (\"a=%d and b=%d\\n\", a, b); } int inline func2(int x) { return x*x; } int main() { int tmp; func1(1,4); tmp = func2(6); printf(\"square val=%d\\n\", tmp); return 0; }"
    options:
      - a=1 and b=4 square val = 36
      - a=4 and b=1
      - error
      - square val = 36
    answer: 0
    explanation: "a=1 and b=4 square val = 36 is the correct answer to “What will be the output of the following C code? #include <stdio.h> void inline func1(int a, int b) { printf (\"a=%d and b=%d\\n\", a, b); } int inline func2(int x) { return x*x; } int main() { int tmp; func1(1,4); tmp = func2(6); printf(\"square val=%d\\n\", tmp); return 0; }”. This question is standard in competitive examination syllabi for C Miscellaneous."
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: The principle of stack is . . . . . . . .
    options:
      - First in first out
      - First in last out
      - Last in first out
      - Last in last out
    answer: 2
    explanation: Last in first out is the correct answer to “The principle of stack is . . . . . . . .”. This question is standard in competitive examination syllabi for C Miscellaneous.
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: Which of the following header files must necessarily be included in your code, if you want to find the minimum value of unsigned short integer?
    options:
      - stdio.h
      - stdlib.h
      - limits.h
      - math.h
    answer: 2
    explanation: limits.h is the correct answer to “Which of the following header files must necessarily be included in your code, if you want to find the minimum value of unsigned short integer”. This question is standard in competitive examination syllabi for C Miscellaneous.
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: "How many times is 'a' printed when the following C code is executed? #include<stdio.h> main() { int a; a=f1(10); printf(\"%d\",a); } f1(int b) { if(b==0) return 0; else { printf(\"a\"); f1(b--); } }"
    options:
      - 9 times
      - 10 times
      - 0 times
      - Infinite number of times
    answer: 3
    explanation: "Infinite number of times is the correct answer to “How many times is 'a' printed when the following C code is executed? #include<stdio.h> main() { int a; a=f1(10); printf(\"%d\",a); } f1(int b) { if(b==0) return 0; else { printf(\"a\"); f1(b--); } }”. This question is standard in competitive examination syllabi for C Miscellaneous."
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: In a signed integer, the sign is represented by . . . . . . . .
    options:
      - Least significant bit
      - Most significant bit
      - System dependent
      - The mean of the most significant bit and the least significant bit
    answer: 1
    explanation: Most significant bit is the correct answer to “In a signed integer, the sign is represented by . . . . . . . .”. This question is standard in competitive examination syllabi for C Miscellaneous.
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: What is the default state of an integer in c language?
    options:
      - Signed
      - Unsigned
      - System dependent
      - There is no default state
    answer: 0
    explanation: Signed is the correct answer to “What is the default state of an integer in c language”. This question is standard in competitive examination syllabi for C Miscellaneous.
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: "Comment on the output of following C code. #include <stdio.h> main() { char *p = 0; *p = 'a'; printf(\"value in pointer p is %c\\n\", *p); }"
    options:
      - It will print a
      - It will print 0
      - Compile time error
      - Run time error
    answer: 3
    explanation: "Run time error is the correct answer to “Comment on the output of following C code. #include <stdio.h> main() { char *p = 0; *p = 'a'; printf(\"value in pointer p is %c\\n\", *p); }”. This question is standard in competitive examination syllabi for C Miscellaneous."
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: "What will be the output of the following C code? #include <stdio.h> void inline f1(char b) { printf (\"%d\\n\",b); } int main() { f1('a'); return 0; }"
    options:
      - a
      - "65"
      - error
      - "97"
    answer: 3
    explanation: "97 is the correct answer to “What will be the output of the following C code? #include <stdio.h> void inline f1(char b) { printf (\"%d\\n\",b); } int main() { f1('a'); return 0; }”. This question is standard in competitive examination syllabi for C Miscellaneous."
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: "If the code shown below is executed on a little endian machine, then what will be the output of the following C code? #include<stdio.h> main() { int y=1; printf(\"%d\", (*(char*)&y)); }"
    options:
      - "1"
      - "1000"
      - "9999"
      - "0"
    answer: 0
    explanation: "1 is the correct answer to “If the code shown below is executed on a little endian machine, then what will be the output of the following C code? #include<stdio.h> main() { int y=1; printf(\"%d\", (*(char*)&y)); }”. This question is standard in competitive examination syllabi for C Miscellaneous."
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: Which of the following is not possible statically in C language?
    options:
      - Jagged Array
      - Rectangular Array
      - Cuboidal Array
      - Multidimensional Array
    answer: 0
    explanation: Jagged Array is the correct answer to “Which of the following is not possible statically in C language”. This question is standard in competitive examination syllabi for C Miscellaneous.
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: Name the function whose definition can be substituted at a place where its function call is made . . . . . . . .
    options:
      - friends function
      - inline function
      - volatile function
      - external function
    answer: 1
    explanation: inline function is the correct answer to “Name the function whose definition can be substituted at a place where its function call is made . . . . . . . .”. This question is standard in competitive examination syllabi for C Miscellaneous.
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
---


