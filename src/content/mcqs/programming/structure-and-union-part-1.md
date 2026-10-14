---
title: Structure And Union — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Structure And Union — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: structure-and-union-part-1
topicName: Structure And Union — Part 1
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
    question: "Find the output of the following program: void main() { struct xx { int x=3; char name[]=\"hello\"; }; struct xx *s; printf(\"%d\", s->x); printf(\"%s\", s->name); }"
    options:
      - 3 and hello
      - 3 and h
      - 3 and garbage value
      - Compilation error
      - Runtime error
    answer: 3
    explanation: You cannot initialize members in structure declaration.
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: Consider the following code. struct account{ int acno; }svar, *pv = &svar; then the acno can be accessed by
    options:
      - svar.acno
      - pv->acno
      - (*pv).acno
      - A, B and C
      - A and B only
    answer: 3
    explanation: As all the ways are legal and valid.
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: "Consider the following declarations: union id { char color; int size; }; struct{ char country; int date; union id id; }flag; To assign a color to a flag, the correct statement would be"
    options:
      - flag.color = 'W'
      - flag.id.color = 'W'
      - flag.color = 'WHITE'
      - flag.id.color = 'WHITE'
      - color.flag = 'W'
    answer: 0
    explanation: "Solution: 2"
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: For the following structure declaration, find the correct statement. struct person{ char name[20]; int age; struct person lady; };
    options:
      - Is a valid nested structure.
      - Uses an invalid data type.
      - Is a self referential structure.
      - Is not a valid nested structure.
      - Is a self referential structure with invalid data type.
    answer: 3
    explanation: As we cannot create a variable of itself as a member of the structure, but a reference can be created to create a self referential structure.
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: The restriction with union is
    options:
      - The first member can only be initialized.
      - The last member can only be initialized.
      - Any member can be initialized.
      - Union can not be initialized
      - No restriction at all.
    answer: 0
    explanation: As all the members shares the same memory.
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: "What will be the output of the following C code? #include <stdio.h> struct p { char *name; struct p *next; }; struct p *ptrary[10]; int main() { struct p p, q; p.name = \"xyz\"; p.next = NULL; ptrary[0] = &p; strcpy(q.name, p.name); ptrary[1] = &q; printf(\"%s\\n\", ptrary[1]->name); return 0; }"
    options:
      - Compile time error
      - Segmentation fault/code crash
      - Depends on the compiler
      - xyz
    answer: 1
    explanation: "In this code, the variable q is declared but not initialized. When you try to use strcpy function to copy the value of p.name to q.name , you are accessing memory that has not been allocated for q.name , which leads to undefined behavior. This undefined behavior could result in a segmentation fault or a code crash. Therefore, the correct answer is Option B: Segmentation fault/code crash."
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What is the keyword used to define a structure in C?
    options:
      - struct
      - record
      - class
      - object
    answer: 0
    explanation: struct is the correct answer to “What is the keyword used to define a structure in C”. This question is standard in competitive examination syllabi for Structure And Union.
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: In a structure, what are the members also known as?
    options:
      - Variables
      - Properties
      - Objects
      - Elements
    answer: 0
    explanation: Variables is the correct answer to “In a structure, what are the members also known as”. This question is standard in competitive examination syllabi for Structure And Union.
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: Which of the following can be a member of a structure?
    options:
      - Function
      - Another structure
      - Enumeration
      - All of the above
    answer: 1
    explanation: Another structure is the correct answer to “Which of the following can be a member of a structure”. This question is standard in competitive examination syllabi for Structure And Union.
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: How do you access a member of a structure in C?
    options:
      - . (dot)
      - "-> (arrow)"
      - ":: (scope)"
      - ", (comma)"
    answer: 0
    explanation: . (dot) is the correct answer to “How do you access a member of a structure in C”. This question is standard in competitive examination syllabi for Structure And Union.
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What is the primary difference between a structure and a union in C?
    options:
      - Structure allows nested members
      - Union allows nested members
      - Structure allows multiple members
      - Union allows only one active member
    answer: 3
    explanation: Union allows only one active member is the correct answer to “What is the primary difference between a structure and a union in C”. This question is standard in competitive examination syllabi for Structure And Union.
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: How is the size of a structure determined in C?
    options:
      - By the total size of its members
      - By the size of its largest member
      - By the size of its smallest member
      - By the number of members
    answer: 1
    explanation: By the size of its largest member is the correct answer to “How is the size of a structure determined in C”. This question is standard in competitive examination syllabi for Structure And Union.
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: Which statement correctly defines a structure named "Person" with members "name" and "age" of type char* and int respectively?
    options:
      - struct Person { char* name; int age; }
      - struct Person { name, age; }
      - struct { name; age; } Person
      - struct { char* name, int age; } Person
    answer: 0
    explanation: struct Person { char* name; int age; } is the correct answer to “Which statement correctly defines a structure named "Person" with members "name" and "age" of type char* and int respectively”. This question is standard in competitive examination syllabi for Structure And Union.
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What does the 'sizeof' operator in C return for a union?
    options:
      - Total size of all union members
      - Size of the largest member
      - Size of the smallest member
      - Size of the union itself
    answer: 1
    explanation: Size of the largest member is the correct answer to “What does the 'sizeof' operator in C return for a union”. This question is standard in competitive examination syllabi for Structure And Union.
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: Can a structure have another structure as a member in C?
    options:
      - No, it's not allowed
      - Yes, but with a limited depth
      - Yes, without any limitations
      - Only if the inner structure is named "Inner"
    answer: 2
    explanation: Yes, without any limitations is the correct answer to “Can a structure have another structure as a member in C”. This question is standard in competitive examination syllabi for Structure And Union.
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: Which operator is used to access a union member when the union is a part of a structure?
    options:
      - . (dot)
      - "-> (arrow)"
      - ":: (scope)"
      - ", (comma)"
    answer: 0
    explanation: . (dot) is the correct answer to “Which operator is used to access a union member when the union is a part of a structure”. This question is standard in competitive examination syllabi for Structure And Union.
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What happens when you assign a value to one member of a union and then access another member in C?
    options:
      - It's allowed and safe
      - It leads to undefined behavior
      - It raises a compilation error
      - It swaps the values of both members
    answer: 1
    explanation: It leads to undefined behavior is the correct answer to “What happens when you assign a value to one member of a union and then access another member in C”. This question is standard in competitive examination syllabi for Structure And Union.
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: Which keyword is used to define an anonymous structure or union within another structure or union?
    options:
      - anonymous
      - hidden
      - struct
      - none of the above
    answer: 2
    explanation: struct is the correct answer to “Which keyword is used to define an anonymous structure or union within another structure or union”. This question is standard in competitive examination syllabi for Structure And Union.
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: In a union, which member can you access safely after assigning a value to one of its members?
    options:
      - All members can be accessed
      - Only the last assigned member
      - Only the first assigned member
      - Any member, but it's compiler-dependent
    answer: 2
    explanation: Only the first assigned member is the correct answer to “In a union, which member can you access safely after assigning a value to one of its members”. This question is standard in competitive examination syllabi for Structure And Union.
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: Which type of variable should you use if you want to store different types of data at different times within the same memory location?
    options:
      - int
      - float
      - char
      - union
    answer: 3
    explanation: union is the correct answer to “Which type of variable should you use if you want to store different types of data at different times within the same memory location”. This question is standard in competitive examination syllabi for Structure And Union.
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: Which of the following is true about the memory allocation of structures and unions in C?
    options:
      - Structures require memory for all members simultaneously
      - Unions require memory for all members simultaneously
      - Structures allocate memory for the largest member
      - Unions allocate memory for the smallest member
    answer: 2
    explanation: Structures allocate memory for the largest member is the correct answer to “Which of the following is true about the memory allocation of structures and unions in C”. This question is standard in competitive examination syllabi for Structure And Union.
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: In C, can a structure be passed as an argument to a function?
    options:
      - Yes, by value
      - Yes, by reference
      - No, it's not allowed
      - Only if the structure has fewer than 3 members
    answer: 1
    explanation: Yes, by reference is the correct answer to “In C, can a structure be passed as an argument to a function”. This question is standard in competitive examination syllabi for Structure And Union.
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: What is the purpose of using a typedef with structures and unions in C?
    options:
      - To create a new data type name for the structure or union
      - To create a new structure with the same members
      - To hide the details of the structure or union
      - To add typecasting support to the structure or union
    answer: 0
    explanation: To create a new data type name for the structure or union is the correct answer to “What is the purpose of using a typedef with structures and unions in C”. This question is standard in competitive examination syllabi for Structure And Union.
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: When should you use a structure instead of an array in C?
    options:
      - When you need to store elements of different data types
      - When you need a fixed-size collection of elements
      - When you need a dynamic collection of elements
      - When you need to perform mathematical operations
    answer: 0
    explanation: When you need to store elements of different data types is the correct answer to “When should you use a structure instead of an array in C”. This question is standard in competitive examination syllabi for Structure And Union.
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: What is the purpose of an anonymous union in C?
    options:
      - To group related members within a structure
      - To declare a union without a name
      - To hide the union's members from external access
      - To specify a union's memory alignment
    answer: 1
    explanation: To declare a union without a name is the correct answer to “What is the purpose of an anonymous union in C”. This question is standard in competitive examination syllabi for Structure And Union.
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Which keyword is used to access a member of a nested structure in C?
    options:
      - . (dot)
      - "-> (arrow)"
      - ":: (scope)"
      - ", (comma)"
    answer: 0
    explanation: . (dot) is the correct answer to “Which keyword is used to access a member of a nested structure in C”. This question is standard in competitive examination syllabi for Structure And Union.
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: What is the main advantage of using a union in C?
    options:
      - It saves memory by sharing the same memory location
      - It allows easy access to all members
      - It enforces strong data typing
      - It prevents data from being modified
    answer: 0
    explanation: It saves memory by sharing the same memory location is the correct answer to “What is the main advantage of using a union in C”. This question is standard in competitive examination syllabi for Structure And Union.
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: What is the size of an empty structure in C?
    options:
      - 0 bytes
      - 1 byte
      - It varies depending on the compiler
      - 4 bytes
    answer: 0
    explanation: 0 bytes is the correct answer to “What is the size of an empty structure in C”. This question is standard in competitive examination syllabi for Structure And Union.
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: In C, can you compare two structures using the equality operator (==)?
    options:
      - Yes, always
      - No, never
      - Only if both structures have the same name
      - Only if both structures have the same members
    answer: 1
    explanation: No, never is the correct answer to “In C, can you compare two structures using the equality operator (==)”. This question is standard in competitive examination syllabi for Structure And Union.
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: What is the primary use of a union in a C program?
    options:
      - To represent multiple data types using the same memory location
      - To store a collection of elements of the same type
      - To organize data into a hierarchy
      - To define a custom data type
    answer: 0
    explanation: To represent multiple data types using the same memory location is the correct answer to “What is the primary use of a union in a C program”. This question is standard in competitive examination syllabi for Structure And Union.
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: How do you declare an array of structures in C?
    options:
      - struct myStruct arr[]
      - myStruct array[]
      - struct array myStruct[]
      - myStruct[] arr
    answer: 1
    explanation: myStruct array[] is the correct answer to “How do you declare an array of structures in C”. This question is standard in competitive examination syllabi for Structure And Union.
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: Which of the following is not a valid type for a structure member in C?
    options:
      - Array
      - Pointer
      - Function
      - Enumeration
    answer: 2
    explanation: Function is the correct answer to “Which of the following is not a valid type for a structure member in C”. This question is standard in competitive examination syllabi for Structure And Union.
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: In C, can you have a structure as a member of itself (a recursive structure)?
    options:
      - Yes, but with compiler-specific limitations
      - Yes, without any limitations
      - No, it's not allowed
      - Only if the structure has exactly one member
    answer: 0
    explanation: Yes, but with compiler-specific limitations is the correct answer to “In C, can you have a structure as a member of itself (a recursive structure)”. This question is standard in competitive examination syllabi for Structure And Union.
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: What is the purpose of the offsetof macro in C?
    options:
      - To calculate the offset of a structure member
      - To define the size of a structure
      - To access a specific structure member
      - To check if a structure is empty
    answer: 0
    explanation: To calculate the offset of a structure member is the correct answer to “What is the purpose of the offsetof macro in C”. This question is standard in competitive examination syllabi for Structure And Union.
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: Which keyword is used to create a new name for an existing data type in C?
    options:
      - typedef
      - define
      - alias
      - typecast
    answer: 0
    explanation: typedef is the correct answer to “Which keyword is used to create a new name for an existing data type in C”. This question is standard in competitive examination syllabi for Structure And Union.
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: How many union members can be initialized?
    options:
      - Only one member of a union at any one time.
      - Any number of members of a union at one time.
      - Union members can not be initialized.
      - Only two members of a union at any one time.
      - Only two members of a union at any time..
    answer: 0
    explanation: Only one member of a union at any one time. is the correct answer to “How many union members can be initialized”. This question is standard in competitive examination syllabi for Structure And Union.
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: "What will be the output of the following C code? #include <stdio.h> int main() { typedef struct p *q; struct p { int x; char y; q ptr; }; struct p p = {1, 2, &p}; printf(\"%d\\n\", p.ptr->x); return 0; }"
    options:
      - Compile time error
      - "1"
      - Depends on the compiler
      - Depends on the standard
    answer: 1
    explanation: "1 is the correct answer to “What will be the output of the following C code? #include <stdio.h> int main() { typedef struct p *q; struct p { int x; char y; q ptr; }; struct p p = {1, 2, &p}; printf(\"%d\\n\", p.ptr->x); return 0; }”. This question is standard in competitive examination syllabi for Structure And Union."
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: "Can the following C code be compiled successfully? #include <stdio.h> struct p { int k; char c; float f; }; int main() { struct p x = {.c = 97, .f = 3, .k = 1}; printf(\"%f\\n\", x.f); }"
    options:
      - "Yes"
      - "No"
      - Depends on the standard
      - Depends on the platform
    answer: 2
    explanation: "Depends on the standard is the correct answer to “Can the following C code be compiled successfully? #include <stdio.h> struct p { int k; char c; float f; }; int main() { struct p x = {.c = 97, .f = 3, .k = 1}; printf(\"%f\\n\", x.f); }”. This question is standard in competitive examination syllabi for Structure And Union."
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: "What will be the output of the following C code? #include <stdio.h> int *(*(x()))[2]; typedef int **(*ptrfoo)())[2]; int main() { ptrfoo ptr1; ptr1 = x; ptr1(); return 0; } int *(*(x()))[2] { int (*ary)[2] = malloc(sizeof * ary); return &ary; }"
    options:
      - Compile time error
      - Nothing
      - Undefined behaviour
      - Depends on the standard
    answer: 1
    explanation: "Nothing is the correct answer to “What will be the output of the following C code? #include <stdio.h> int *(*(x()))[2]; typedef int **(*ptrfoo)())[2]; int main() { ptrfoo ptr1; ptr1 = x; ptr1(); return 0; } int *(*(x()))[2] { int (*ary)[2] = malloc(sizeof * ary); return &ary; }”. This question is standard in competitive examination syllabi for Structure And Union."
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: Which of the following share a similarity in syntax? 1. Union, 2. Structure, 3. Arrays and 4. Pointers
    options:
      - 3 and 4
      - 1 and 2
      - 1 and 3
      - 1, 3 and 4
    answer: 1
    explanation: 1 and 2 is the correct answer to “Which of the following share a similarity in syntax? 1. Union, 2. Structure, 3. Arrays and 4. Pointers”. This question is standard in competitive examination syllabi for Structure And Union.
    keyConcept: Structure And Union
    testedIn:
      - FPSC
      - PPSC
---


