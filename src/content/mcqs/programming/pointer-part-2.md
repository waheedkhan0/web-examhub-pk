---
title: Pointer — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Pointer — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: pointer-part-2
topicName: Pointer — Part 2
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
    question: What is the result of the expression *ptr = 42 in C, where ptr is a pointer to an int?
    options:
      - Set the value pointed to by ptr to 42
      - Set the address pointed to by ptr to 42
      - Set the size of ptr to 42
      - Set ptr to a null value
    answer: 0
    explanation: Set the value pointed to by ptr to 42 is the correct answer to “What is the result of the expression *ptr = 42 in C, where ptr is a pointer to an int”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: In C, what is a pointer to a function that takes no arguments and returns an integer?
    options:
      - int (*ptr)()
      - ptr int()
      - int ptr()
      - ptr() int
    answer: 0
    explanation: int (*ptr)() is the correct answer to “In C, what is a pointer to a function that takes no arguments and returns an integer”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: In C, what is a pointer to a constant pointer (int* const)?
    options:
      - A pointer that cannot be modified
      - A pointer that points to a constant pointer
      - A constant pointer to a constant integer
      - A pointer to a constant integer
    answer: 1
    explanation: A pointer that points to a constant pointer is the correct answer to “In C, what is a pointer to a constant pointer (int* const)”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: The address operator & , cannot act on
    options:
      - R-values
      - Arithmetic expressions
      - Both of the above
      - Local variables
      - Members of a structure
    answer: 2
    explanation: Both of the above is the correct answer to “The address operator & , cannot act on”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: The statement int ** a;
    options:
      - is illegal
      - is legal but meaningless
      - is syntactically and semantically correct
      - None of these.
    answer: 2
    explanation: is syntactically and semantically correct is the correct answer to “The statement int ** a;”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: "What will be the output of the following program code? #include<stdio.h> void main() { int i = 10; void *p = &i; printf(\"%f\", *(float *)p); }"
    options:
      - Error
      - "10"
      - "0.000000"
      - None of these.
    answer: 2
    explanation: "0.000000 is the correct answer to “What will be the output of the following program code? #include<stdio.h> void main() { int i = 10; void *p = &i; printf(\"%f\", *(float *)p); }”. This question is standard in competitive examination syllabi for Pointer."
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: The operator > and < are meaningful when used with pointers, if
    options:
      - The pointers point to data of similar type.
      - The pointers point to structure of similar data type.
      - The pointers point to elements of the same array.
      - None of these.
    answer: 2
    explanation: The pointers point to elements of the same array. is the correct answer to “The operator > and < are meaningful when used with pointers, if”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: The declaration int (* p ) [ 5 ] ; means
    options:
      - p is one dimensional array of size 5, of pointers to integers.
      - p is a pointer to a 5 elements integer array.
      - The same as (*p) [5]
      - None of these.
    answer: 1
    explanation: p is a pointer to a 5 elements integer array. is the correct answer to “The declaration int (* p ) [ 5 ] ; means”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: "What will be the output of the following program code? #include <stdio.h> void main() { int i=3, *j, **k; j = &i; k = &j; printf(\"%d%d%d\", *j, **k, *(*k)); }"
    options:
      - "444"
      - "000"
      - "333"
      - "433"
      - Garbage Value
    answer: 2
    explanation: "333 is the correct answer to “What will be the output of the following program code? #include <stdio.h> void main() { int i=3, *j, **k; j = &i; k = &j; printf(\"%d%d%d\", *j, **k, *(*k)); }”. This question is standard in competitive examination syllabi for Pointer."
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: "Which of the following is the correct way of declaring a float pointer:"
    options:
      - float ptr
      - float *ptr
      - "*float ptr"
      - None of the above
    answer: 1
    explanation: float *ptr is the correct answer to “Which of the following is the correct way of declaring a float pointer:”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: Find the output of the following program. void main() { char *msg = "hi"; printf(msg); }
    options:
      - hi
      - h
      - hi followed by garbage value
      - Error
      - Garbage Value
    answer: 0
    explanation: hi is the correct answer to “Find the output of the following program. void main() { char *msg = "hi"; printf(msg); }”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: What is the base data type of a pointer variable by which the memory would be allocated to it?
    options:
      - int
      - float
      - No data type
      - Depends upon the type of the variable to which it is pointing.
      - unsigned int
    answer: 4
    explanation: unsigned int is the correct answer to “What is the base data type of a pointer variable by which the memory would be allocated to it”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: "What would be the output for the following Turbo C code? #include<stdio.h> void main() { int a[]={ 1, 2, 3, 4, 5 }, *p; p=a; ++*p; printf(\"%d \", *p); p += 2; printf(\"%d\", *p); }"
    options:
      - 2 4
      - 3 4
      - 2 2
      - 2 3
      - 3 3
    answer: 3
    explanation: "2 3 is the correct answer to “What would be the output for the following Turbo C code? #include<stdio.h> void main() { int a[]={ 1, 2, 3, 4, 5 }, *p; p=a; ++*p; printf(\"%d \", *p); p += 2; printf(\"%d\", *p); }”. This question is standard in competitive examination syllabi for Pointer."
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: char* myfunc(char *ptr) { ptr+=3; return(ptr); } void main() { char *x, *y; x = "EXAMVEDA"; y = myfunc(x); printf("y=%s", y); } What will be printed when the sample code above is executed?
    options:
      - y=EXAMVEDA
      - y=AMVEDA
      - y=MVEDA
      - y=VEDA
      - y=EDA
    answer: 2
    explanation: y=MVEDA is the correct answer to “char* myfunc(char *ptr) { ptr+=3; return(ptr); } void main() { char *x, *y; x = "EXAMVEDA"; y = myfunc(x); printf("y=%s", y); } What will be printed when the sample code above is executed”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: char *ptr; char myString[] = "abcdefg"; ptr = myString; ptr += 5; what string does ptr point to in the sample code above?
    options:
      - fg
      - efg
      - defg
      - cdefg
      - bcdefg
    answer: 0
    explanation: fg is the correct answer to “char *ptr; char myString[] = "abcdefg"; ptr = myString; ptr += 5; what string does ptr point to in the sample code above”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: "What will be the output of the following C code? #include <stdio.h> int main() { int i = 10; int *p = &i; foo(&p); printf(\"%d \", *p); printf(\"%d \", *p); } void foo(int **const p) { int j = 11; *p = &j; printf(\"%d \", **p); }"
    options:
      - 11 11 11
      - 11 11 Undefined-value
      - Compile time error
      - Segmentation fault/code-crash
    answer: 1
    explanation: "11 11 Undefined-value is the correct answer to “What will be the output of the following C code? #include <stdio.h> int main() { int i = 10; int *p = &i; foo(&p); printf(\"%d \", *p); printf(\"%d \", *p); } void foo(int **const p) { int j = 11; *p = &j; printf(\"%d \", **p); }”. This question is standard in competitive examination syllabi for Pointer."
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: "What will be the output of the following C code? #include <stdio.h> void main() { char *s= \"hello\"; char *p = s; printf(\"%c\\t%c\", *(p + 3), s[1]); }"
    options:
      - h e
      - l l
      - l o
      - l e
    answer: 3
    explanation: "l e is the correct answer to “What will be the output of the following C code? #include <stdio.h> void main() { char *s= \"hello\"; char *p = s; printf(\"%c\\t%c\", *(p + 3), s[1]); }”. This question is standard in competitive examination syllabi for Pointer."
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: "What will be the output of the following C code? #include <stdio.h> void main() { int a[3] = {1, 2, 3}; int *p = a; int **r = &p; printf(\"%p %p\", *r, a); }"
    options:
      - Different address is printed
      - 1 2
      - Same address is printed
      - 1 1
    answer: 2
    explanation: "Same address is printed is the correct answer to “What will be the output of the following C code? #include <stdio.h> void main() { int a[3] = {1, 2, 3}; int *p = a; int **r = &p; printf(\"%p %p\", *r, a); }”. This question is standard in competitive examination syllabi for Pointer."
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: "What will be the output of the following C code? #include <stdio.h> void main() { char *s = \"hello\"; char *p = s * 3; printf(\"%c\\t%c\", *p, s[1]); }"
    options:
      - h e
      - l e
      - Compile time error
      - l h
    answer: 2
    explanation: "Compile time error is the correct answer to “What will be the output of the following C code? #include <stdio.h> void main() { char *s = \"hello\"; char *p = s * 3; printf(\"%c\\t%c\", *p, s[1]); }”. This question is standard in competitive examination syllabi for Pointer."
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: Which of the following operation is possible using a pointer char? (Assuming the declaration is char *a;)
    options:
      - Input via %s
      - Generation of the multidimensional array
      - Changing address to point at another location
      - All of the mentioned
    answer: 2
    explanation: Changing address to point at another location is the correct answer to “Which of the following operation is possible using a pointer char? (Assuming the declaration is char *a;)”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: Comment on the following C statement. int (*a)[7];
    options:
      - An array "a" of pointers
      - A pointer "a" to an array
      - A ragged array
      - None of the mentioned
    answer: 1
    explanation: A pointer "a" to an array is the correct answer to “Comment on the following C statement. int (*a)[7];”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: "What will be the output of the following C code? #include <stdio.h> int main() { int *p = (int *)2; int *q = (int *)3; printf(\"%d\", p + q); }"
    options:
      - "2"
      - "3"
      - "5"
      - Compile time error
    answer: 3
    explanation: "Compile time error is the correct answer to “What will be the output of the following C code? #include <stdio.h> int main() { int *p = (int *)2; int *q = (int *)3; printf(\"%d\", p + q); }”. This question is standard in competitive examination syllabi for Pointer."
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: Which of the following statements are true? P. Pointer to Array Q. Multi-dimensional array
    options:
      - P are static, Q are static
      - P are static, Q are dynamic
      - P are dynamic, Q are static
      - P are dynamic, Q are dynamic
    answer: 2
    explanation: P are dynamic, Q are static is the correct answer to “Which of the following statements are true? P. Pointer to Array Q. Multi-dimensional array”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: "What will be the output of the following C code? #include <stdio.h> void main() { char *s= \"hello\"; char *p = s; printf(\"%c\\t%c\", p[0], s[1]); }"
    options:
      - Run time error
      - h h
      - h e
      - h l
    answer: 2
    explanation: "h e is the correct answer to “What will be the output of the following C code? #include <stdio.h> void main() { char *s= \"hello\"; char *p = s; printf(\"%c\\t%c\", p[0], s[1]); }”. This question is standard in competitive examination syllabi for Pointer."
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: "What will be the output of the following C code (run without any command line arguments)? #include <stdio.h> int main(int argc, char *argv[]) { while (argc--) printf(\"%s\\n\", argv[argc]); return 0; }"
    options:
      - Compile time error
      - Executablefilename
      - Segmentation fault
      - Undefined
    answer: 1
    explanation: "Executablefilename is the correct answer to “What will be the output of the following C code (run without any command line arguments)? #include <stdio.h> int main(int argc, char *argv[]) { while (argc--) printf(\"%s\\n\", argv[argc]); return 0; }”. This question is standard in competitive examination syllabi for Pointer."
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: "What will be the output of the following C code? #include <stdio.h> int main() { int a[4] = {1, 2, 3, 4}; int *p = &a[1]; int *ptr = &a[2]; ptr = ptr * 1; printf(\"%d\\n\", *ptr); }"
    options:
      - "2"
      - "1"
      - Compile time error
      - Undefined behaviour
    answer: 2
    explanation: "Compile time error is the correct answer to “What will be the output of the following C code? #include <stdio.h> int main() { int a[4] = {1, 2, 3, 4}; int *p = &a[1]; int *ptr = &a[2]; ptr = ptr * 1; printf(\"%d\\n\", *ptr); }”. This question is standard in competitive examination syllabi for Pointer."
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: "What will be the output of the following C code? #include <stdio.h> void f(char *k) { k++; k[2] = 'm'; } void main() { char s[] = \"hello\"; f(s); printf(\"%c\\n\", *s); }"
    options:
      - h
      - e
      - m
      - o
    answer: 0
    explanation: "h is the correct answer to “What will be the output of the following C code? #include <stdio.h> void f(char *k) { k++; k[2] = 'm'; } void main() { char s[] = \"hello\"; f(s); printf(\"%c\\n\", *s); }”. This question is standard in competitive examination syllabi for Pointer."
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: Which of the following is not possible statically in C?
    options:
      - Jagged Array
      - Rectangular Array
      - Cuboidal Array
      - Multidimensional Array
    answer: 0
    explanation: Jagged Array is the correct answer to “Which of the following is not possible statically in C”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: "What will be the output of the following C code? #include <stdio.h> int main() { int i = 10; void *p = &i; printf(\"%d\\n\", (int)*p); return 0; }"
    options:
      - Compile time error
      - Segmentation fault/runtime crash
      - "10"
      - Undefined behaviour
    answer: 0
    explanation: "Compile time error is the correct answer to “What will be the output of the following C code? #include <stdio.h> int main() { int i = 10; void *p = &i; printf(\"%d\\n\", (int)*p); return 0; }”. This question is standard in competitive examination syllabi for Pointer."
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: "What will be the output of the following C code? #include <stdio.h> void main() { char *a[10] = {\"hi\", \"hello\", \"how\"}; int i = 0; for (i = 0;i < 10; i++) printf(\"%s\", *(a[i])); }"
    options:
      - segmentation fault
      - hi hello how followed by 7 null values
      - 10 null values
      - depends on compiler
    answer: 0
    explanation: "segmentation fault is the correct answer to “What will be the output of the following C code? #include <stdio.h> void main() { char *a[10] = {\"hi\", \"hello\", \"how\"}; int i = 0; for (i = 0;i < 10; i++) printf(\"%s\", *(a[i])); }”. This question is standard in competitive examination syllabi for Pointer."
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: "What will be the output of the following C code? #include <stdio.h> int main() { const int ary[4] = {1, 2, 3, 4}; int *p; p = ary + 3; *p = 5; printf(\"%d\\n\", ary[3]); }"
    options:
      - "4"
      - "5"
      - Compile time error
      - "3"
    answer: 1
    explanation: "5 is the correct answer to “What will be the output of the following C code? #include <stdio.h> int main() { const int ary[4] = {1, 2, 3, 4}; int *p; p = ary + 3; *p = 5; printf(\"%d\\n\", ary[3]); }”. This question is standard in competitive examination syllabi for Pointer."
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: "What will be the output of the following C code? #include <stdio.h> void foo( int[] ); int main() { int ary[4] = {1, 2, 3, 4}; foo(ary); printf(\"%d \", ary[0]); } void foo(int p[4]) { int i = 10; p = &i; printf(\"%d \", p[0]); }"
    options:
      - 10 10
      - Compile time error
      - 10 1
      - Undefined behaviour
    answer: 2
    explanation: "10 1 is the correct answer to “What will be the output of the following C code? #include <stdio.h> void foo( int[] ); int main() { int ary[4] = {1, 2, 3, 4}; foo(ary); printf(\"%d \", ary[0]); } void foo(int p[4]) { int i = 10; p = &i; printf(\"%d \", p[0]); }”. This question is standard in competitive examination syllabi for Pointer."
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: How to call a function without using the function name to send parameters?
    options:
      - typedefs
      - Function pointer
      - Both typedefs and Function pointer
      - None of the mentioned
    answer: 1
    explanation: Function pointer is the correct answer to “How to call a function without using the function name to send parameters”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: "What will be the output of the following C code? #include <stdio.h> void main() { int a[3] = {1, 2, 3}; int *p = a; printf(\"%p\\t%p\", p, a); }"
    options:
      - Same address is printed
      - Different address is printed
      - Compile time error
      - Nothing
    answer: 0
    explanation: "Same address is printed is the correct answer to “What will be the output of the following C code? #include <stdio.h> void main() { int a[3] = {1, 2, 3}; int *p = a; printf(\"%p\\t%p\", p, a); }”. This question is standard in competitive examination syllabi for Pointer."
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: Comment on an array of the void data type.
    options:
      - It can store any data-type
      - It only stores element of similar data type to first element
      - It acquires the data type with the highest precision in it
      - You cannot have an array of void data type
    answer: 3
    explanation: You cannot have an array of void data type is the correct answer to “Comment on an array of the void data type.”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: What is the syntax for constant pointer to address (i.e., fixed pointer address)?
    options:
      - const <type> * <name>
      - <type> * const <name>
      - <type> const * <name>
      - none of the mentioned
    answer: 1
    explanation: <type> * const <name> is the correct answer to “What is the syntax for constant pointer to address (i.e., fixed pointer address)”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: "What will be the output of the following C code (run without any command line arguments)? #include <stdio.h> int main(int argc, char *argv[]) { while (*argv != NULL) printf(\"%s\\n\", *(argv++)); return 0; }"
    options:
      - Segmentation fault/code crash
      - Executable file name
      - Depends on the platform
      - Depends on the compiler
    answer: 1
    explanation: "Executable file name is the correct answer to “What will be the output of the following C code (run without any command line arguments)? #include <stdio.h> int main(int argc, char *argv[]) { while (*argv != NULL) printf(\"%s\\n\", *(argv++)); return 0; }”. This question is standard in competitive examination syllabi for Pointer."
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: "What will be the output of the following C code? #include <stdio.h> void m(int *p) { int i = 0; for(i = 0;i < 5; i++) printf(\"%d\\t\", p[i]); } void main() { int a[5] = {6, 5, 3}; m(&a); }"
    options:
      - 0 0 0 0 0
      - 6 5 3 0 0
      - Run time error
      - 6 5 3 junk junk
    answer: 1
    explanation: "6 5 3 0 0 is the correct answer to “What will be the output of the following C code? #include <stdio.h> void m(int *p) { int i = 0; for(i = 0;i < 5; i++) printf(\"%d\\t\", p[i]); } void main() { int a[5] = {6, 5, 3}; m(&a); }”. This question is standard in competitive examination syllabi for Pointer."
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: What is the first argument in command line arguments?
    options:
      - The number of command-line arguments the program was invoked with
      - A pointer to an array of character strings that contain the arguments
      - Nothing
      - None of the mentioned
    answer: 0
    explanation: The number of command-line arguments the program was invoked with is the correct answer to “What is the first argument in command line arguments”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: "What will be the output of the following C code? #include <stdio.h> int main() { int i = 0, j = 1; int *a[] = {&i, &j}; printf(\"%d\", (*a)[1]); return 0; }"
    options:
      - Compile time error
      - Undefined behaviour
      - "1"
      - Some garbage value
    answer: 3
    explanation: "Some garbage value is the correct answer to “What will be the output of the following C code? #include <stdio.h> int main() { int i = 0, j = 1; int *a[] = {&i, &j}; printf(\"%d\", (*a)[1]); return 0; }”. This question is standard in competitive examination syllabi for Pointer."
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
---


