---
title: Structures And Unions In C Plus Plus MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Structures And Unions In C Plus Plus with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: structures-and-unions-in-c-plus-plus
topicName: Structures And Unions In C Plus Plus
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
    question: "What is the size of the following structure in C++: struct Employee { int id; char name[20]; float salary; };"
    options:
      - 28 bytes
      - 20 bytes
      - 8 bytes
      - 32 bytes
    answer: 3
    explanation: "In C++, the size of a structure is determined by the sum of the sizes of its individual members, taking into account padding for alignment. The Employee structure consists of three members: an integer id , an array of characters name of size 20, and a float salary . The size of an integer is typically 4 bytes, the size of a float is also typically 4 bytes, and the size of each character in the array depends on the character set being used (usually 1 byte per character). However, due to memory alignment requirements, additional padding may be added after the name array to ensure proper alignment of subsequent members. So, the calculation of the structure size would be: int id : 4 bytes char name[20] : 20 bytes Padding to align salary to the next 4-byte boundary (assuming 4-byte alignment) float salary : 4 bytes Total: 4 bytes (id) + 20 bytes (name) + 4 bytes (padding) + 4 bytes (salary) = 32 bytes. Therefore, the correct answer is Option D: 32 bytes."
    keyConcept: Structures And Unions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: What is a structure in C++?
    options:
      - A collection of functions
      - A reserved keyword in C++
      - A user-defined data type containing variables of different data types
      - A way to declare arrays of data
    answer: 2
    explanation: A user-defined data type containing variables of different data types is the correct answer to “What is a structure in C++”. This question is standard in competitive examination syllabi for Structures And Unions In C Plus Plus.
    keyConcept: Structures And Unions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Which keyword is used to define a structure in C++?
    options:
      - typedef
      - struct
      - union
      - None of the above
    answer: 1
    explanation: struct is the correct answer to “Which keyword is used to define a structure in C++”. This question is standard in competitive examination syllabi for Structures And Unions In C Plus Plus.
    keyConcept: Structures And Unions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What is the correct way to access members of a structure in C++?
    options:
      - Using the star operator
      - Using the double colon operator
      - Using the dot operator
      - Using the arrow operator
    answer: 2
    explanation: Using the dot operator is the correct answer to “What is the correct way to access members of a structure in C++”. This question is standard in competitive examination syllabi for Structures And Unions In C Plus Plus.
    keyConcept: Structures And Unions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: What is the purpose of typedef in C++ structures?
    options:
      - To define a new structure
      - To initialize structure members
      - To create a pointer to a structure
      - To create an alias for data types
    answer: 3
    explanation: To create an alias for data types is the correct answer to “What is the purpose of typedef in C++ structures”. This question is standard in competitive examination syllabi for Structures And Unions In C Plus Plus.
    keyConcept: Structures And Unions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: How do you declare a structure variable in C++?
    options:
      - structName variableName
      - struct variableName
      - variableName structName
      - variableName = structName
    answer: 0
    explanation: structName variableName is the correct answer to “How do you declare a structure variable in C++”. This question is standard in competitive examination syllabi for Structures And Unions In C Plus Plus.
    keyConcept: Structures And Unions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: "What is the output of the following code: struct Student { int roll; }; Student s1; s1.roll = 101; cout << s1.roll; in C++?"
    options:
      - Undefined behavior
      - "0"
      - Compilation error
      - "101"
    answer: 3
    explanation: "101 is the correct answer to “What is the output of the following code: struct Student { int roll; }; Student s1; s1.roll = 101; cout << s1.roll; in C++”. This question is standard in competitive examination syllabi for Structures And Unions In C Plus Plus."
    keyConcept: Structures And Unions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What is the purpose of using structures in C++?
    options:
      - To perform mathematical operations
      - To define loops in the program
      - To group related data together
      - To represent true/false values
    answer: 2
    explanation: To group related data together is the correct answer to “What is the purpose of using structures in C++”. This question is standard in competitive examination syllabi for Structures And Unions In C Plus Plus.
    keyConcept: Structures And Unions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What is the correct way to pass a structure to a function in C++?
    options:
      - By value
      - By reference
      - By pointer
      - All of the above
    answer: 3
    explanation: All of the above is the correct answer to “What is the correct way to pass a structure to a function in C++”. This question is standard in competitive examination syllabi for Structures And Unions In C Plus Plus.
    keyConcept: Structures And Unions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What is a union in C++?
    options:
      - A reserved keyword in C++
      - A user-defined data type that allows storing different data types in the same memory location
      - A way to declare arrays of data
      - None of the above
    answer: 1
    explanation: A user-defined data type that allows storing different data types in the same memory location is the correct answer to “What is a union in C++”. This question is standard in competitive examination syllabi for Structures And Unions In C Plus Plus.
    keyConcept: Structures And Unions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What is the difference between a structure and a union in C++?
    options:
      - Structures cannot contain member functions
      - Unions are used for mathematical operations
      - In a structure, each member has its own memory space, while in a union, all members share the same memory space
      - Structures are used for data organization
    answer: 2
    explanation: In a structure, each member has its own memory space, while in a union, all members share the same memory space is the correct answer to “What is the difference between a structure and a union in C++”. This question is standard in competitive examination syllabi for Structures And Unions In C Plus Plus.
    keyConcept: Structures And Unions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: What is the correct syntax to define a structure pointer in C++?
    options:
      - structName *ptr
      - ptr *structName
      - struct *ptrName
      - "*ptrName structName"
    answer: 0
    explanation: structName *ptr is the correct answer to “What is the correct syntax to define a structure pointer in C++”. This question is standard in competitive examination syllabi for Structures And Unions In C Plus Plus.
    keyConcept: Structures And Unions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: "What is the output of the following code: union Data { int x; char y; }; Data d; d.x = 10; d.y = 'A'; cout << d.x << \" \" << d.y; in C++?"
    options:
      - Compilation error
      - A A
      - 10 10
      - "0.416666667"
    answer: 3
    explanation: "0.416666667 is the correct answer to “What is the output of the following code: union Data { int x; char y; }; Data d; d.x = 10; d.y = 'A'; cout << d.x << \" \" << d.y; in C++”. This question is standard in competitive examination syllabi for Structures And Unions In C Plus Plus."
    keyConcept: Structures And Unions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What is the purpose of using unions in C++?
    options:
      - To group related data together
      - To define loops in the program
      - To save memory space
      - To represent true/false values
    answer: 2
    explanation: To save memory space is the correct answer to “What is the purpose of using unions in C++”. This question is standard in competitive examination syllabi for Structures And Unions In C Plus Plus.
    keyConcept: Structures And Unions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What does the 'sizeof' operator return when used with a structure in C++?
    options:
      - Size of the last member of the structure
      - Size of the first member of the structure
      - Size of the structure
      - Address of the structure
    answer: 2
    explanation: Size of the structure is the correct answer to “What does the 'sizeof' operator return when used with a structure in C++”. This question is standard in competitive examination syllabi for Structures And Unions In C Plus Plus.
    keyConcept: Structures And Unions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What is the correct syntax to declare a structure with a tag name in C++?
    options:
      - structName { /* members */ }
      - struct { /* members */ } structName
      - structName typedef { /* members */ }
      - struct structName { /* members */ }
    answer: 3
    explanation: struct structName { /* members */ } is the correct answer to “What is the correct syntax to declare a structure with a tag name in C++”. This question is standard in competitive examination syllabi for Structures And Unions In C Plus Plus.
    keyConcept: Structures And Unions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What is the correct way to access structure members through a pointer in C++?
    options:
      - Using the star operator (*)
      - Using the double colon operator (::)
      - Using the dot operator (.)
      - Using the arrow operator (->)
    answer: 3
    explanation: Using the arrow operator (->) is the correct answer to “What is the correct way to access structure members through a pointer in C++”. This question is standard in competitive examination syllabi for Structures And Unions In C Plus Plus.
    keyConcept: Structures And Unions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: What is the difference between a structure and a class in C++?
    options:
      - Structures support inheritance
      - Classes support only member functions
      - By default, members of a class are private, while members of a structure are public
      - Structures cannot contain member functions
    answer: 2
    explanation: By default, members of a class are private, while members of a structure are public is the correct answer to “What is the difference between a structure and a class in C++”. This question is standard in competitive examination syllabi for Structures And Unions In C Plus Plus.
    keyConcept: Structures And Unions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: "What is the output of the following code: struct Point { int x, y; }; Point p1; p1.x = 10; p1.y = 20; cout << p1.x << \" \" << p1.y; in C++?"
    options:
      - Garbage value 20 10
      - 10 20
      - Compilation error
      - None of the above
    answer: 1
    explanation: "10 20 is the correct answer to “What is the output of the following code: struct Point { int x, y; }; Point p1; p1.x = 10; p1.y = 20; cout << p1.x << \" \" << p1.y; in C++”. This question is standard in competitive examination syllabi for Structures And Unions In C Plus Plus."
    keyConcept: Structures And Unions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What is the purpose of the 'typedef' keyword in C++ structures?
    options:
      - To create a pointer to a structure
      - To initialize structure members
      - To create an alias for a data type
      - To define a new structure
    answer: 2
    explanation: To create an alias for a data type is the correct answer to “What is the purpose of the 'typedef' keyword in C++ structures”. This question is standard in competitive examination syllabi for Structures And Unions In C Plus Plus.
    keyConcept: Structures And Unions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: Which keyword is used to declare a union in C++?
    options:
      - class
      - typedef
      - struct
      - union
    answer: 3
    explanation: union is the correct answer to “Which keyword is used to declare a union in C++”. This question is standard in competitive examination syllabi for Structures And Unions In C Plus Plus.
    keyConcept: Structures And Unions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What is the correct syntax to define a union in C++?
    options:
      - union unionName { /* members */ }
      - unionName { /* members */ }
      - union { /* members */ } unionName
      - unionName typedef { /* members */ }
    answer: 0
    explanation: union unionName { /* members */ } is the correct answer to “What is the correct syntax to define a union in C++”. This question is standard in competitive examination syllabi for Structures And Unions In C Plus Plus.
    keyConcept: Structures And Unions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: "What is the output of the following code: struct Book { char title[50]; int pages; }; Book b; cout << sizeof(b); in C++?"
    options:
      - "50"
      - Depends on the compiler
      - "52"
      - "60"
    answer: 1
    explanation: "Depends on the compiler is the correct answer to “What is the output of the following code: struct Book { char title[50]; int pages; }; Book b; cout << sizeof(b); in C++”. This question is standard in competitive examination syllabi for Structures And Unions In C Plus Plus."
    keyConcept: Structures And Unions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: "What is the output of the following code: union Number { int x; float y; }; Number n; n.x = 10; cout << n.y; in C++?"
    options:
      - Compilation error
      - "10"
      - Garbage value
      - "0"
    answer: 2
    explanation: "Garbage value is the correct answer to “What is the output of the following code: union Number { int x; float y; }; Number n; n.x = 10; cout << n.y; in C++”. This question is standard in competitive examination syllabi for Structures And Unions In C Plus Plus."
    keyConcept: Structures And Unions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: The declaration of the structure is also called as?
    options:
      - structure creator
      - structure signifier
      - structure specifier
      - structure creator & signifier
    answer: 2
    explanation: structure specifier is the correct answer to “The declaration of the structure is also called as”. This question is standard in competitive examination syllabi for Structures And Unions In C Plus Plus.
    keyConcept: Structures And Unions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; struct sec { int a; char b; }; int main() { struct sec s ={25,50}; struct sec *ps =(struct sec *)&s; cout << ps->a << ps->b; return 0; }"
    options:
      - "252"
      - "253"
      - "254"
      - "262"
    answer: 0
    explanation: "252 is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; struct sec { int a; char b; }; int main() { struct sec s ={25,50}; struct sec *ps =(struct sec *)&s; cout << ps->a << ps->b; return 0; }”. This question is standard in competitive examination syllabi for Structures And Unions In C Plus Plus."
    keyConcept: Structures And Unions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; struct Time { int hours; int minutes; int seconds; }; int toSeconds(Time now); int main() { Time t; t.hours = 5; t.minutes = 30; t.seconds = 45; cout << \"Total seconds: \" << toSeconds(t) << endl; return 0; } int toSeconds(Time now) { return 3600 * now.hours + 60 * now.minutes + now.seconds; }"
    options:
      - "19845"
      - "20000"
      - "15000"
      - "19844"
    answer: 0
    explanation: "19845 is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; struct Time { int hours; int minutes; int seconds; }; int toSeconds(Time now); int main() { Time t; t.hours = 5; t.minutes = 30; t.seconds = 45; cout << \"Total seconds: \" << toSeconds(t) << endl; return 0; } int toSeconds(Time now) { return 3600 * now.hours + 60 * now.minutes + now.seconds; }”. This question is standard in competitive examination syllabi for Structures And Unions In C Plus Plus."
    keyConcept: Structures And Unions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: "What will be the output of the following C++ code? #include <iostream> #include <string.h> using namespace std; int main() { struct student { int num; char name[25]; }; student stu; stu.num = 123; strcpy(stu.name, \"John\"); cout << stu.num << endl; cout << stu.name << endl; return 0; }"
    options:
      - 123 john
      - john john
      - compile time error
      - runtime error
    answer: 0
    explanation: "123 john is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string.h> using namespace std; int main() { struct student { int num; char name[25]; }; student stu; stu.num = 123; strcpy(stu.name, \"John\"); cout << stu.num << endl; cout << stu.name << endl; return 0; }”. This question is standard in competitive examination syllabi for Structures And Unions In C Plus Plus."
    keyConcept: Structures And Unions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: What will be used when terminating a structure?
    options:
      - ":"
      - "}"
      - ""
      - ""
    answer: 2
    explanation: " is the correct answer to “What will be used when terminating a structure”. This question is standard in competitive examination syllabi for Structures And Unions In C Plus Plus."
    keyConcept: Structures And Unions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: The data elements in the structure are also known as what?
    options:
      - objects
      - members
      - data
      - objects & data
    answer: 1
    explanation: members is the correct answer to “The data elements in the structure are also known as what”. This question is standard in competitive examination syllabi for Structures And Unions In C Plus Plus.
    keyConcept: Structures And Unions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: Which of the following is a properly defined structure?
    options:
      - struct {int a;}
      - struct a_struct {int a;}
      - struct a_struct int a
      - struct a_struct {int a;}
    answer: 3
    explanation: struct a_struct {int a;} is the correct answer to “Which of the following is a properly defined structure”. This question is standard in competitive examination syllabi for Structures And Unions In C Plus Plus.
    keyConcept: Structures And Unions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: What will happen when the structure is declared?
    options:
      - it will not allocate any memory
      - it will allocate the memory
      - it will be declared and initialized
      - it will be declared
    answer: 0
    explanation: it will not allocate any memory is the correct answer to “What will happen when the structure is declared”. This question is standard in competitive examination syllabi for Structures And Unions In C Plus Plus.
    keyConcept: Structures And Unions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; int main() { struct ShoeType { string style; double price; }; ShoeType shoe1, shoe2; shoe1.style = \"Adidas\"; shoe1.price = 9.99; cout << shoe1.style << \" $ \"<< shoe1.price; shoe2 = shoe1; shoe2.price = shoe2.price / 9; cout << shoe2.style << \" $ \"<< shoe2.price; return 0; }"
    options:
      - Adidas $ 9.99Adidas $ 1.11
      - Adidas $ 9.99Adidas $ 9.11
      - Adidas $ 9.99Adidas $ 11.11
      - Adidas $ 11.11Adidas $ 11.11
    answer: 0
    explanation: "Adidas $ 9.99Adidas $ 1.11 is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; int main() { struct ShoeType { string style; double price; }; ShoeType shoe1, shoe2; shoe1.style = \"Adidas\"; shoe1.price = 9.99; cout << shoe1.style << \" $ \"<< shoe1.price; shoe2 = shoe1; shoe2.price = shoe2.price / 9; cout << shoe2.style << \" $ \"<< shoe2.price; return 0; }”. This question is standard in competitive examination syllabi for Structures And Unions In C Plus Plus."
    keyConcept: Structures And Unions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: Which of the following accesses a variable in structure *b?
    options:
      - b->var
      - b.var
      - b-var
      - b>var
    answer: 0
    explanation: b->var is the correct answer to “Which of the following accesses a variable in structure *b”. This question is standard in competitive examination syllabi for Structures And Unions In C Plus Plus.
    keyConcept: Structures And Unions In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
---


