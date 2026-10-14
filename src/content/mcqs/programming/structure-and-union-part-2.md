---
title: Structure And Union — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Structure And Union — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: structure-and-union-part-2
topicName: Structure And Union — Part 2
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
    question: "What will be the output of the following C code? #include <stdio.h> void main() { struct student { int no; char name[20]; }; struct student s; no = 8; printf(\"%d\", no); }"
    options:
      - Nothing
      - Compile time error
      - Junk
      - "8"
    answer: 1
    explanation: "Compile time error is the correct answer to “What will be the output of the following C code? #include <stdio.h> void main() { struct student { int no; char name[20]; }; struct student s; no = 8; printf(\"%d\", no); }”. This question is standard in competitive examination syllabi for Structure And Union."
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: "What will be the output of the following C code? #include <stdio.h> struct p { int x; char y; }; int main() { struct p p1[] = {1, 92, 3, 94, 5, 96}; struct p *ptr1 = p1; int x = (sizeof(p1) / sizeof(struct p)); printf(\"%d %d\\n\", ptr1->x, (ptr1 + x - 1)->x); }"
    options:
      - Compile time error
      - Undefined behaviour
      - 1 3
      - 1 5
    answer: 3
    explanation: "1 5 is the correct answer to “What will be the output of the following C code? #include <stdio.h> struct p { int x; char y; }; int main() { struct p p1[] = {1, 92, 3, 94, 5, 96}; struct p *ptr1 = p1; int x = (sizeof(p1) / sizeof(struct p)); printf(\"%d %d\\n\", ptr1->x, (ptr1 + x - 1)->x); }”. This question is standard in competitive examination syllabi for Structure And Union."
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: "What will be the output of the following C code? #include <stdio.h> struct point { int x; int y; }; int main() { struct point p = {1}; struct point p1 = {1}; if(p == p1) printf(\"equal\\n\"); else printf(\"not equal\\n\"); }"
    options:
      - Compile time error
      - equal
      - depends on the standard
      - not equal
    answer: 0
    explanation: "Compile time error is the correct answer to “What will be the output of the following C code? #include <stdio.h> struct point { int x; int y; }; int main() { struct point p = {1}; struct point p1 = {1}; if(p == p1) printf(\"equal\\n\"); else printf(\"not equal\\n\"); }”. This question is standard in competitive examination syllabi for Structure And Union."
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: Which of the following structure declaration doesn't require pass-by-reference?
    options:
      - struct{int a;}s; main(){}
      - struct temp{int a;}; main(){ struct temp s; }
      - struct temp{int a;}; main(){} struct temp s
      - none of the mentioned
    answer: 3
    explanation: none of the mentioned is the correct answer to “Which of the following structure declaration doesn't require pass-by-reference”. This question is standard in competitive examination syllabi for Structure And Union.
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: "How many bytes in memory taken by the following C structure? #include <stdio.h> struct test { int k; char c; };"
    options:
      - Multiple of integer size
      - integer size+character size
      - Depends on the platform
      - Multiple of word size
    answer: 0
    explanation: "Multiple of integer size is the correct answer to “How many bytes in memory taken by the following C structure? #include <stdio.h> struct test { int k; char c; };”. This question is standard in competitive examination syllabi for Structure And Union."
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: "What will be the output of the following C code? #include <stdio.h> typedef struct p { int x, y; }k; int main() { struct p p = {1, 2}; k k1 = p; printf(\"%d\\n\", k1.x); }"
    options:
      - Compile time error
      - "1"
      - "0"
      - Depends on the standard
    answer: 1
    explanation: "1 is the correct answer to “What will be the output of the following C code? #include <stdio.h> typedef struct p { int x, y; }k; int main() { struct p p = {1, 2}; k k1 = p; printf(\"%d\\n\", k1.x); }”. This question is standard in competitive examination syllabi for Structure And Union."
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: "What will be the output of the following C code? #include <stdio.h> void main() { char *a[3] = {\"hello\", \"this\"}; printf(\"%s\", a[1]); }"
    options:
      - hello
      - Varies
      - this
      - Compile time error
    answer: 2
    explanation: "this is the correct answer to “What will be the output of the following C code? #include <stdio.h> void main() { char *a[3] = {\"hello\", \"this\"}; printf(\"%s\", a[1]); }”. This question is standard in competitive examination syllabi for Structure And Union."
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: "What will be the output of the following C code? #include <stdio.h> struct student { char *name; }; struct student fun(void) { struct student s; s.name = \"alan\"; return s; } void main() { struct student m = fun(); printf(\"%s\", m.name); }"
    options:
      - Nothing
      - alan
      - Run time error
      - Varies
    answer: 1
    explanation: "alan is the correct answer to “What will be the output of the following C code? #include <stdio.h> struct student { char *name; }; struct student fun(void) { struct student s; s.name = \"alan\"; return s; } void main() { struct student m = fun(); printf(\"%s\", m.name); }”. This question is standard in competitive examination syllabi for Structure And Union."
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What is the correct syntax to declare a function foo() which receives an array of structure in function?
    options:
      - void foo(struct *var)
      - void foo(struct *var[])
      - void foo(struct var)
      - none of the mentioned
    answer: 0
    explanation: void foo(struct *var) is the correct answer to “What is the correct syntax to declare a function foo() which receives an array of structure in function”. This question is standard in competitive examination syllabi for Structure And Union.
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: "What will be the output of the following C code? #include <stdio.h> struct student { char *c; }; void main() { struct student *s; s->c = \"hello\"; printf(\"%s\", s->c); }"
    options:
      - hello
      - Segmentation fault
      - Run time error
      - Nothing
    answer: 1
    explanation: "Segmentation fault is the correct answer to “What will be the output of the following C code? #include <stdio.h> struct student { char *c; }; void main() { struct student *s; s->c = \"hello\"; printf(\"%s\", s->c); }”. This question is standard in competitive examination syllabi for Structure And Union."
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: "What will be the output of the following C code? #include <stdio.h> struct p { int x[2]; }; struct q { int *x; }; int main() { struct p p1 = {1, 2}; struct q *ptr1; ptr1->x = (struct q*)&p1.x; printf(\"%d\\n\", ptr1->x[1]); }"
    options:
      - Compile time error
      - Segmentation fault/code crash
      - "2"
      - "1"
    answer: 1
    explanation: "Segmentation fault/code crash is the correct answer to “What will be the output of the following C code? #include <stdio.h> struct p { int x[2]; }; struct q { int *x; }; int main() { struct p p1 = {1, 2}; struct q *ptr1; ptr1->x = (struct q*)&p1.x; printf(\"%d\\n\", ptr1->x[1]); }”. This question is standard in competitive examination syllabi for Structure And Union."
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: "What will be the output of the following C code? #include <stdio.h> union p { int x; char y; }k = {.y = 97}; int main() { printf(\"%d\\n\", k.y); }"
    options:
      - Compile time error
      - "97"
      - a
      - Depends on the standard
    answer: 1
    explanation: "97 is the correct answer to “What will be the output of the following C code? #include <stdio.h> union p { int x; char y; }k = {.y = 97}; int main() { printf(\"%d\\n\", k.y); }”. This question is standard in competitive examination syllabi for Structure And Union."
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: "What will be the output of the following C code? #include <stdio.h> struct student { char *name; }; void main() { struct student s, m; s.name = \"st\"; m = s; printf(\"%s%s\", s.name, m.name); }"
    options:
      - Compile time error
      - Nothing
      - Junk values
      - st st
    answer: 3
    explanation: "st st is the correct answer to “What will be the output of the following C code? #include <stdio.h> struct student { char *name; }; void main() { struct student s, m; s.name = \"st\"; m = s; printf(\"%s%s\", s.name, m.name); }”. This question is standard in competitive examination syllabi for Structure And Union."
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: "What will be the output of the following C code? #include <stdio.h> struct student { char *name; }; struct student s[2], r[2]; void main() { s[0].name = \"alan\"; s[1] = s[0]; r = s; printf(\"%s%s\", r[0].name, r[1].name); }"
    options:
      - alan alan
      - Compile time error
      - Varies
      - Nothing
    answer: 1
    explanation: "Compile time error is the correct answer to “What will be the output of the following C code? #include <stdio.h> struct student { char *name; }; struct student s[2], r[2]; void main() { s[0].name = \"alan\"; s[1] = s[0]; r = s; printf(\"%s%s\", r[0].name, r[1].name); }”. This question is standard in competitive examination syllabi for Structure And Union."
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: "What will be the output of the following C code? #include <stdio.h> struct point { int x; int y; }; void foo(struct point*); int main() { struct point p1[] = {1, 2, 3, 4, 5}; foo(p1); } void foo(struct point p[]) { printf(\"%d %d\\n\", p->x, p[3].y); }"
    options:
      - Compile time error
      - 1 0
      - 1 somegarbagevalue
      - None of the mentioned
    answer: 2
    explanation: "1 somegarbagevalue is the correct answer to “What will be the output of the following C code? #include <stdio.h> struct point { int x; int y; }; void foo(struct point*); int main() { struct point p1[] = {1, 2, 3, 4, 5}; foo(p1); } void foo(struct point p[]) { printf(\"%d %d\\n\", p->x, p[3].y); }”. This question is standard in competitive examination syllabi for Structure And Union."
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: "What will be the output of the following C code? #include <stdio.h> void main() { char *a[3][3] = {{\"hey\", \"hi\", \"hello\"}, {\"his\", \"her\", \"hell\"} , {\"hellos\", \"hi's\", \"hmm\"}}; printf(\"%s\", a[1][1]); }"
    options:
      - her
      - hi
      - Compile time error
      - hi's
    answer: 0
    explanation: "her is the correct answer to “What will be the output of the following C code? #include <stdio.h> void main() { char *a[3][3] = {{\"hey\", \"hi\", \"hello\"}, {\"his\", \"her\", \"hell\"} , {\"hellos\", \"hi's\", \"hmm\"}}; printf(\"%s\", a[1][1]); }”. This question is standard in competitive examination syllabi for Structure And Union."
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: "What will be the output of the following C code? #include <stdio.h> union u { struct { unsigned char x : 2; unsigned int y : 2; }p; int x; }; int main() { union u u = {2}; printf(\"%d\\n\", u.p.x); }"
    options:
      - Compile time error
      - "2"
      - Depends on the standard
      - None of the mentioned
    answer: 1
    explanation: "2 is the correct answer to “What will be the output of the following C code? #include <stdio.h> union u { struct { unsigned char x : 2; unsigned int y : 2; }p; int x; }; int main() { union u u = {2}; printf(\"%d\\n\", u.p.x); }”. This question is standard in competitive examination syllabi for Structure And Union."
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: "What will be the output of the following C code? #include <stdio.h> struct p { int k; char c; }; int p = 10; int main() { struct p x; x.k = 10; printf(\"%d %d\\n\", x.k, p); }"
    options:
      - Compile time error
      - 10 10
      - Depends on the standard
      - Depends on the compiler
    answer: 1
    explanation: "10 10 is the correct answer to “What will be the output of the following C code? #include <stdio.h> struct p { int k; char c; }; int p = 10; int main() { struct p x; x.k = 10; printf(\"%d %d\\n\", x.k, p); }”. This question is standard in competitive examination syllabi for Structure And Union."
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: "What will be the output of the following C code? #include <stdio.h> struct p { char *name; struct p *next; }; struct p *ptrary[10]; int main() { struct p p; p.name = \"xyz\"; p.next = NULL; ptrary[0] = &p; printf(\"%s\\n\", ptrary[0]->name); return 0; }"
    options:
      - Compile time error
      - Segmentation fault
      - Undefined behaviour
      - xyz
    answer: 3
    explanation: "xyz is the correct answer to “What will be the output of the following C code? #include <stdio.h> struct p { char *name; struct p *next; }; struct p *ptrary[10]; int main() { struct p p; p.name = \"xyz\"; p.next = NULL; ptrary[0] = &p; printf(\"%s\\n\", ptrary[0]->name); return 0; }”. This question is standard in competitive examination syllabi for Structure And Union."
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: "What will be the output of the following C code? #include <stdio.h> struct p { char *name; struct p *next; }; struct p *ptrary[10]; int main() { struct p p; p->name = \"xyz\"; p->next = NULL; ptrary[0] = &p; printf(\"%s\\n\", p->name); return 0; }"
    options:
      - Compile time error
      - Segmentation fault/code crash
      - xyz
      - Undefined behaviour
    answer: 0
    explanation: "Compile time error is the correct answer to “What will be the output of the following C code? #include <stdio.h> struct p { char *name; struct p *next; }; struct p *ptrary[10]; int main() { struct p p; p->name = \"xyz\"; p->next = NULL; ptrary[0] = &p; printf(\"%s\\n\", p->name); return 0; }”. This question is standard in competitive examination syllabi for Structure And Union."
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: "In the following C code, we can access the 1st character of the string sval by using . . . . . . #include <stdio.h> struct { char *name; union { char *sval; } u; } symtab[10]; . ."
    options:
      - "*symtab[i].u.sval"
      - symtab[i].u.sval[0].
      - You cannot have union inside structure
      - Both *symtab[i].u.sval & symtab[i].u.sval[0].
    answer: 3
    explanation: "Both *symtab[i].u.sval & symtab[i].u.sval[0]. is the correct answer to “In the following C code, we can access the 1st character of the string sval by using . . . . . . #include <stdio.h> struct { char *name; union { char *sval; } u; } symtab[10]; . .”. This question is standard in competitive examination syllabi for Structure And Union."
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: "What will be the output of the following C code? #include <stdio.h> struct point { int x; int y; }; struct notpoint { int x; int y; }; int main() { struct point p = {1}; struct notpoint p1 = p; printf(\"%d\\n\", p1.x); }"
    options:
      - Compile time error
      - "1"
      - "0"
      - Undefined
    answer: 0
    explanation: "Compile time error is the correct answer to “What will be the output of the following C code? #include <stdio.h> struct point { int x; int y; }; struct notpoint { int x; int y; }; int main() { struct point p = {1}; struct notpoint p1 = p; printf(\"%d\\n\", p1.x); }”. This question is standard in competitive examination syllabi for Structure And Union."
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: "What will be the output of the following C code? #include <stdio.h> struct student { char *c; }; void main() { struct student m; struct student *s = &m; s->c = \"hello\"; printf(\"%s\", m.c); }"
    options:
      - Run time error
      - Nothing
      - hello
      - Varies
    answer: 2
    explanation: "hello is the correct answer to “What will be the output of the following C code? #include <stdio.h> struct student { char *c; }; void main() { struct student m; struct student *s = &m; s->c = \"hello\"; printf(\"%s\", m.c); }”. This question is standard in competitive examination syllabi for Structure And Union."
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: "What will be the output of the following C code? #include <stdio.h> struct student { char *c; struct student *point; }; void main() { struct student s; printf(\"%d\", sizeof(s)); }"
    options:
      - "5"
      - "9"
      - "8"
      - "16"
    answer: 2
    explanation: "8 is the correct answer to “What will be the output of the following C code? #include <stdio.h> struct student { char *c; struct student *point; }; void main() { struct student s; printf(\"%d\", sizeof(s)); }”. This question is standard in competitive examination syllabi for Structure And Union."
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: What is typedef declaration?
    options:
      - Does not create a new type
      - It merely adds a new name for some existing type
      - Does not create a new type, It merely adds a new name for some existing type
      - None of the mentioned
    answer: 2
    explanation: Does not create a new type, It merely adds a new name for some existing type is the correct answer to “What is typedef declaration”. This question is standard in competitive examination syllabi for Structure And Union.
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Which of the following is an incorrect syntax for pointer to structure? (Assuming struct temp{int b;}*my_struct;)
    options:
      - "*my_struct.b = 10"
      - (*my_struct).b = 10
      - my_struct->b = 10
      - Both *my_struct.b = 10; and (*my_struct).b = 10
    answer: 0
    explanation: "*my_struct.b = 10 is the correct answer to “Which of the following is an incorrect syntax for pointer to structure? (Assuming struct temp{int b;}*my_struct;)”. This question is standard in competitive examination syllabi for Structure And Union."
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: The size of a union is determined by the size of the . . . . . . . .
    options:
      - First member in the union
      - Last member in the union
      - Biggest member in the union
      - Sum of the sizes of all members
    answer: 2
    explanation: Biggest member in the union is the correct answer to “The size of a union is determined by the size of the . . . . . . . .”. This question is standard in competitive examination syllabi for Structure And Union.
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: "What will be the output of the following C code? #include <stdio.h> struct p { int x; char y; }; typedef struct p* q*; int main() { struct p p1[] = {1, 92, 3, 94, 5, 96}; q ptr1 = p1; printf(\"%d\\n\", ptr1->x); }"
    options:
      - Compile time error
      - "1"
      - Undefined behaviour
      - Segmentation fault
    answer: 0
    explanation: "Compile time error is the correct answer to “What will be the output of the following C code? #include <stdio.h> struct p { int x; char y; }; typedef struct p* q*; int main() { struct p p1[] = {1, 92, 3, 94, 5, 96}; q ptr1 = p1; printf(\"%d\\n\", ptr1->x); }”. This question is standard in competitive examination syllabi for Structure And Union."
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: Which of the following is not possible regarding the structure variable?
    options:
      - A structure variable pointing to itself
      - A structure variable pointing to another structure variable of same type
      - 2 different type of structure variable pointing at each other
      - None of the mentioned
    answer: 3
    explanation: None of the mentioned is the correct answer to “Which of the following is not possible regarding the structure variable”. This question is standard in competitive examination syllabi for Structure And Union.
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: "What will be the output of the following C code? (Assuming size of int be 4) #include <stdio.h> struct temp { int a; int b; int c; } p[] = {0}; main() { printf(\"%d\", sizeof(p)); }"
    options:
      - "4"
      - "12"
      - "16"
      - Can't be estimated due to ambiguous initialization of array
    answer: 1
    explanation: "12 is the correct answer to “What will be the output of the following C code? (Assuming size of int be 4) #include <stdio.h> struct temp { int a; int b; int c; } p[] = {0}; main() { printf(\"%d\", sizeof(p)); }”. This question is standard in competitive examination syllabi for Structure And Union."
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: "What will be the output of the following C code? #include <stdio.h> union p { int x; char y; }k = {1, 97}; int main() { printf(\"%d\\n\", k.y); }"
    options:
      - Compile time error
      - "97"
      - a
      - "1"
    answer: 3
    explanation: "1 is the correct answer to “What will be the output of the following C code? #include <stdio.h> union p { int x; char y; }k = {1, 97}; int main() { printf(\"%d\\n\", k.y); }”. This question is standard in competitive examination syllabi for Structure And Union."
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: "What will be the output of the following C code? #include <stdio.h> typedef struct p *q; struct p { int x; char y; q ptr; }; int main() { struct p p = {1, 2, &p}; printf(\"%d\\n\", p.ptr->x); return 0; }"
    options:
      - Compile time error
      - "1"
      - Undefined behaviour
      - Address of p
    answer: 1
    explanation: "1 is the correct answer to “What will be the output of the following C code? #include <stdio.h> typedef struct p *q; struct p { int x; char y; q ptr; }; int main() { struct p p = {1, 2, &p}; printf(\"%d\\n\", p.ptr->x); return 0; }”. This question is standard in competitive examination syllabi for Structure And Union."
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: Which operator connects the structure name to its member name?
    options:
      - "-"
      - <-
      - .
      - Both <- and .
    answer: 2
    explanation: . is the correct answer to “Which operator connects the structure name to its member name”. This question is standard in competitive examination syllabi for Structure And Union.
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: Which of the following may create problem in the typedef program?
    options:
      - ""
      - printf/scanf
      - Arithmetic operators
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “Which of the following may create problem in the typedef program”. This question is standard in competitive examination syllabi for Structure And Union.
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: "What will be the output of the following C code? #include <stdio.h> struct point { int x; int y; }; void foo(struct point*); int main() { struct point p1[] = {1, 2, 3, 4}; foo(p1); } void foo(struct point p[]) { printf(\"%d\\n\", p->x); }"
    options:
      - "1"
      - "2"
      - "3"
      - Compile time error
    answer: 0
    explanation: "1 is the correct answer to “What will be the output of the following C code? #include <stdio.h> struct point { int x; int y; }; void foo(struct point*); int main() { struct point p1[] = {1, 2, 3, 4}; foo(p1); } void foo(struct point p[]) { printf(\"%d\\n\", p->x); }”. This question is standard in competitive examination syllabi for Structure And Union."
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: "What will be the output of the following C code? #include <stdio.h> struct temp { int a; } s; void change(struct temp); main() { s.a = 10; change(s); printf(\"%d\\n\", s.a); } void change(struct temp s) { s.a = 1; }"
    options:
      - Output will be 1
      - Output will be 10
      - Output varies with machine
      - Compile time error
    answer: 1
    explanation: "Output will be 10 is the correct answer to “What will be the output of the following C code? #include <stdio.h> struct temp { int a; } s; void change(struct temp); main() { s.a = 10; change(s); printf(\"%d\\n\", s.a); } void change(struct temp s) { s.a = 1; }”. This question is standard in competitive examination syllabi for Structure And Union."
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: "What will be the output of the following C code? #include <stdio.h> struct student { char *name; }; struct student s[2]; void main() { s[0].name = \"alan\"; s[1] = s[0]; printf(\"%s%s\", s[0].name, s[1].name); s[1].name = \"turing\"; printf(\"%s%s\", s[0].name, s[1].name); }"
    options:
      - alan alan alan turing
      - alan alan turing turing
      - alan turing alan turing
      - run time error
    answer: 0
    explanation: "alan alan alan turing is the correct answer to “What will be the output of the following C code? #include <stdio.h> struct student { char *name; }; struct student s[2]; void main() { s[0].name = \"alan\"; s[1] = s[0]; printf(\"%s%s\", s[0].name, s[1].name); s[1].name = \"turing\"; printf(\"%s%s\", s[0].name, s[1].name); }”. This question is standard in competitive examination syllabi for Structure And Union."
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: "What will be the output of the following C code? #include <stdio.h> struct p { int x; char y; }; void foo(struct p* ); int main() { typedef struct p* q; struct p p1[] = {1, 92, 3, 94, 5, 96}; foo(p1); } void foo(struct p* p1) { q ptr1 = p1; printf(\"%d\\n\", ptr1->x); }"
    options:
      - Compile time error
      - "1"
      - Segmentation fault
      - Undefined behaviour
    answer: 0
    explanation: "Compile time error is the correct answer to “What will be the output of the following C code? #include <stdio.h> struct p { int x; char y; }; void foo(struct p* ); int main() { typedef struct p* q; struct p p1[] = {1, 92, 3, 94, 5, 96}; foo(p1); } void foo(struct p* p1) { q ptr1 = p1; printf(\"%d\\n\", ptr1->x); }”. This question is standard in competitive examination syllabi for Structure And Union."
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: Which algorithm is used for searching in the table?
    options:
      - List search
      - Informed search
      - Hash search
      - Adversarial search
    answer: 2
    explanation: Hash search is the correct answer to “Which algorithm is used for searching in the table”. This question is standard in competitive examination syllabi for Structure And Union.
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: What is the correct syntax to initialize bit-fields in an structure?
    options:
      - "struct temp { unsigned int a : 1; }s"
      - struct temp { unsigned int a = 1; }s
      - "struct temp { unsigned float a : 1; }s"
      - None of the mentioned
    answer: 0
    explanation: "struct temp { unsigned int a : 1; }s is the correct answer to “What is the correct syntax to initialize bit-fields in an structure”. This question is standard in competitive examination syllabi for Structure And Union."
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
---


