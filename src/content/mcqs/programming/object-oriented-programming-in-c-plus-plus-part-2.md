---
title: Object Oriented Programming In C Plus Plus — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Object Oriented Programming In C Plus Plus — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: object-oriented-programming-in-c-plus-plus-part-2
topicName: Object Oriented Programming In C Plus Plus — Part 2
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
    question: What is the default access specifier for members of a class in C++?
    options:
      - friend
      - protected
      - private
      - public
    answer: 2
    explanation: private is the correct answer to “What is the default access specifier for members of a class in C++”. This question is standard in competitive examination syllabi for Object Oriented Programming In C Plus Plus.
    keyConcept: Object Oriented Programming In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: Which keyword is used to make a class inheritable by other classes in C++?
    options:
      - virtual
      - inheritable
      - extends
      - base
    answer: 2
    explanation: extends is the correct answer to “Which keyword is used to make a class inheritable by other classes in C++”. This question is standard in competitive examination syllabi for Object Oriented Programming In C Plus Plus.
    keyConcept: Object Oriented Programming In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What is the purpose of destructors in C++?
    options:
      - To initialize objects of a class
      - To define objects within a class
      - To perform calculations with object data
      - To release resources acquired by the object
    answer: 3
    explanation: To release resources acquired by the object is the correct answer to “What is the purpose of destructors in C++”. This question is standard in competitive examination syllabi for Object Oriented Programming In C Plus Plus.
    keyConcept: Object Oriented Programming In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: "What will be the output of the following C++ code? #include<iostream> using namespace std; class Base { public: Base() { cout<<\"Constructing Base \\n\"; } virtual~Base() { cout<<\"Destructing Base \\n\"; } }; class Derived: public Base { public: Derived() { cout<<\"Constructing Derived \\n\"; } ~Derived() { cout<<\"Destructing Derived \\n\"; } }; int main(void) { Derived *d = new Derived(); Base *b = d; delete b; return 0; }"
    options:
      - Constructing Base Constructing Derived Destructing Base
      - Constructing Base Constructing Derived Destructing Derived Destructing Base
      - Constructing Base Constructing Derived Destructing Base Destructing Derived
      - Constructing Derived Constructing Base Destructing Base Destructing Derived
    answer: 1
    explanation: "Constructing Base Constructing Derived Destructing Derived Destructing Base is the correct answer to “What will be the output of the following C++ code? #include<iostream> using namespace std; class Base { public: Base() { cout<<\"Constructing Base \\n\"; } virtual~Base() { cout<<\"Destructing Base \\n\"; } }; class Derived: public Base { public: Derived() { cout<<\"Constructing Derived \\n\"; } ~Derived() { cout<<\"Destructing Derived \\n\"; } }; int main(void) { Derived *d = new Derived(); Base *b = d; delete b; return 0; }”. This question is standard in competitive examination syllabi for Object Oriented Programming In C Plus Plus."
    keyConcept: Object Oriented Programming In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: Which concept allows you to reuse the written code?
    options:
      - Encapsulation
      - Abstraction
      - Inheritance
      - Polymorphism
    answer: 2
    explanation: Inheritance is the correct answer to “Which concept allows you to reuse the written code”. This question is standard in competitive examination syllabi for Object Oriented Programming In C Plus Plus.
    keyConcept: Object Oriented Programming In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What is virtual inheritance?
    options:
      - C++ technique to avoid multiple copies of the base class into children/derived class
      - C++ technique to avoid multiple inheritances of classes
      - C++ technique to enhance multiple inheritance
      - C++ technique to ensure that a private member of the base class can be accessed somehow
    answer: 0
    explanation: C++ technique to avoid multiple copies of the base class into children/derived class is the correct answer to “What is virtual inheritance”. This question is standard in competitive examination syllabi for Object Oriented Programming In C Plus Plus.
    keyConcept: Object Oriented Programming In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: How structures and classes in C++ differ?
    options:
      - In Structures, members are public by default whereas, in Classes, they are private by default
      - In Structures, members are private by default whereas, in Classes, they are public by default
      - Structures by default hide every member whereas classes do not
      - Structures cannot have private members whereas classes can have
    answer: 0
    explanation: In Structures, members are public by default whereas, in Classes, they are private by default is the correct answer to “How structures and classes in C++ differ”. This question is standard in competitive examination syllabi for Object Oriented Programming In C Plus Plus.
    keyConcept: Object Oriented Programming In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: Which of the following class allows to declare only one object of it?
    options:
      - Abstract class
      - Virtual class
      - Singleton class
      - Friend class
    answer: 2
    explanation: Singleton class is the correct answer to “Which of the following class allows to declare only one object of it”. This question is standard in competitive examination syllabi for Object Oriented Programming In C Plus Plus.
    keyConcept: Object Oriented Programming In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: Which of the following is correct about new and malloc? i. new is an operator whereas malloc is a function ii. new calls constructor malloc does not iii. new returns required pointer whereas malloc returns void pointer and needs to be typecast
    options:
      - i and ii
      - ii and iii
      - i and iii
      - i, ii and iii
    answer: 3
    explanation: i, ii and iii is the correct answer to “Which of the following is correct about new and malloc? i. new is an operator whereas malloc is a function ii. new calls constructor malloc does not iii. new returns required pointer whereas malloc returns void pointer and needs to be typecast”. This question is standard in competitive examination syllabi for Object Oriented Programming In C Plus Plus.
    keyConcept: Object Oriented Programming In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: How run-time polymorphisms are implemented in C++?
    options:
      - Using Inheritance
      - Using Virtual functions
      - Using Templates
      - Using Inheritance and Virtual functions
    answer: 3
    explanation: Using Inheritance and Virtual functions is the correct answer to “How run-time polymorphisms are implemented in C++”. This question is standard in competitive examination syllabi for Object Oriented Programming In C Plus Plus.
    keyConcept: Object Oriented Programming In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: Out of the following, which is not a member of the class?
    options:
      - Static function
      - Friend function
      - Constant function
      - Virtual function
    answer: 1
    explanation: Friend function is the correct answer to “Out of the following, which is not a member of the class”. This question is standard in competitive examination syllabi for Object Oriented Programming In C Plus Plus.
    keyConcept: Object Oriented Programming In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: What is the correct syntax of declaring array of pointers of integers of size 10 in C++?
    options:
      - int arr = new int[10]
      - int **arr = new int*[10]
      - int *arr = new int[10]
      - int *arr = new int*[10]
    answer: 1
    explanation: int **arr = new int*[10] is the correct answer to “What is the correct syntax of declaring array of pointers of integers of size 10 in C++”. This question is standard in competitive examination syllabi for Object Oriented Programming In C Plus Plus.
    keyConcept: Object Oriented Programming In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: Which of the following explains Polymorphism?
    options:
      - int func(int, int); float func1(float, float)
      - int func(int); int func(int)
      - int func(float); float func(int, int, char)
      - int func(); int new_func()
    answer: 2
    explanation: int func(float); float func(int, int, char) is the correct answer to “Which of the following explains Polymorphism”. This question is standard in competitive examination syllabi for Object Oriented Programming In C Plus Plus.
    keyConcept: Object Oriented Programming In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: "Which of the following feature of OOPs is not used in the following C++ code? class A { int i; public: void print(){cout<<\"hello\"<<i;} } class B: public A { int j; public: void assign(int a){j = a;} }"
    options:
      - Abstraction
      - Encapsulation
      - Inheritance
      - Polymorphism
    answer: 3
    explanation: "Polymorphism is the correct answer to “Which of the following feature of OOPs is not used in the following C++ code? class A { int i; public: void print(){cout<<\"hello\"<<i;} } class B: public A { int j; public: void assign(int a){j = a;} }”. This question is standard in competitive examination syllabi for Object Oriented Programming In C Plus Plus."
    keyConcept: Object Oriented Programming In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: Why references are different from pointers?
    options:
      - A reference cannot be made null
      - A reference cannot be changed once initialized
      - No extra operator is needed for dereferencing of a reference
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “Why references are different from pointers”. This question is standard in competitive examination syllabi for Object Oriented Programming In C Plus Plus.
    keyConcept: Object Oriented Programming In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: Which of the following explains the overloading of functions?
    options:
      - Virtual polymorphism
      - Transient polymorphism
      - Ad-hoc polymorphism
      - Pseudo polymorphism
    answer: 2
    explanation: Ad-hoc polymorphism is the correct answer to “Which of the following explains the overloading of functions”. This question is standard in competitive examination syllabi for Object Oriented Programming In C Plus Plus.
    keyConcept: Object Oriented Programming In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What is the difference between delete and delete[] in C++?
    options:
      - delete is used to delete normal objects whereas delete[] is used to pointer objects
      - delete is a keyword whereas delete[] is an identifier
      - delete is used to delete single object whereas delete[] is used to multiple(array/pointer of) objects
      - delete is syntactically correct but delete[] is wrong and hence will give an error if used in any case
    answer: 2
    explanation: delete is used to delete single object whereas delete[] is used to multiple(array/pointer of) objects is the correct answer to “What is the difference between delete and delete[] in C++”. This question is standard in competitive examination syllabi for Object Oriented Programming In C Plus Plus.
    keyConcept: Object Oriented Programming In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: What is the other name used for functions inside a class?
    options:
      - Member variables
      - Member functions
      - Class functions
      - Class variables
    answer: 1
    explanation: Member functions is the correct answer to “What is the other name used for functions inside a class”. This question is standard in competitive examination syllabi for Object Oriented Programming In C Plus Plus.
    keyConcept: Object Oriented Programming In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: Which of the following is an abstract data type?
    options:
      - int
      - float
      - class
      - string
    answer: 2
    explanation: class is the correct answer to “Which of the following is an abstract data type”. This question is standard in competitive examination syllabi for Object Oriented Programming In C Plus Plus.
    keyConcept: Object Oriented Programming In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What happens if the following C++ statement is compiled and executed? int *ptr = NULL; delete ptr;
    options:
      - The program compiled successfully but throws an error during run-time
      - The program gives a compile-time error
      - The program is not semantically correct
      - The program is compiled and executed successfully
    answer: 3
    explanation: The program is compiled and executed successfully is the correct answer to “What happens if the following C++ statement is compiled and executed? int *ptr = NULL; delete ptr;”. This question is standard in competitive examination syllabi for Object Oriented Programming In C Plus Plus.
    keyConcept: Object Oriented Programming In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; class A { int a; A() { a = 5;} }; int main() { A *obj = new A; cout << obj->a; }"
    options:
      - "5"
      - Garbage value
      - Compile-time error
      - Run-time error
    answer: 2
    explanation: "Compile-time error is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; class A { int a; A() { a = 5;} }; int main() { A *obj = new A; cout << obj->a; }”. This question is standard in competitive examination syllabi for Object Oriented Programming In C Plus Plus."
    keyConcept: Object Oriented Programming In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: Which of the following is not a type of Constructor?
    options:
      - Friend constructor
      - Copy constructor
      - Default constructor
      - Parameterized constructor
    answer: 0
    explanation: Friend constructor is the correct answer to “Which of the following is not a type of Constructor”. This question is standard in competitive examination syllabi for Object Oriented Programming In C Plus Plus.
    keyConcept: Object Oriented Programming In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: Which of the following cannot be a friend?
    options:
      - Function
      - Class
      - Object
      - Operator function
    answer: 2
    explanation: Object is the correct answer to “Which of the following cannot be a friend”. This question is standard in competitive examination syllabi for Object Oriented Programming In C Plus Plus.
    keyConcept: Object Oriented Programming In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: How access specifiers in Class helps in Abstraction?
    options:
      - They does not helps in any way
      - They allows us to show only required things to outer world
      - They help in keeping things together
      - Abstraction concept is not used in classes
    answer: 1
    explanation: They allows us to show only required things to outer world is the correct answer to “How access specifiers in Class helps in Abstraction”. This question is standard in competitive examination syllabi for Object Oriented Programming In C Plus Plus.
    keyConcept: Object Oriented Programming In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: Which of the following approach is used by C++?
    options:
      - Top-down
      - Bottom-up
      - Left-right
      - Right-left
    answer: 1
    explanation: Bottom-up is the correct answer to “Which of the following approach is used by C++”. This question is standard in competitive examination syllabi for Object Oriented Programming In C Plus Plus.
    keyConcept: Object Oriented Programming In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Which of the following provides a programmer with the facility of using object of a class inside other classes?
    options:
      - Inheritance
      - Composition
      - Abstraction
      - Encapsulation
    answer: 1
    explanation: Composition is the correct answer to “Which of the following provides a programmer with the facility of using object of a class inside other classes”. This question is standard in competitive examination syllabi for Object Oriented Programming In C Plus Plus.
    keyConcept: Object Oriented Programming In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: Which concept means the addition of new components to a program as it runs?
    options:
      - Data hiding
      - Dynamic binding
      - Dynamic loading
      - Dynamic typing
    answer: 2
    explanation: Dynamic loading is the correct answer to “Which concept means the addition of new components to a program as it runs”. This question is standard in competitive examination syllabi for Object Oriented Programming In C Plus Plus.
    keyConcept: Object Oriented Programming In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: What does polymorphism in OOPs mean?
    options:
      - Concept of allowing overiding of functions
      - Concept of hiding data
      - Concept of keeping things in differnt modules/files
      - Concept of wrapping things into a single unit
    answer: 0
    explanation: Concept of allowing overiding of functions is the correct answer to “What does polymorphism in OOPs mean”. This question is standard in competitive examination syllabi for Object Oriented Programming In C Plus Plus.
    keyConcept: Object Oriented Programming In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; class A{ public: A(){ cout<<\"Constructor called\\n\"; } ~A(){ cout<<\"Destructor called\\n\"; } }; int main(int argc, char const *argv[]) { A *a = new A[5]; delete a; return 0; }"
    options:
      - "\"Constructor called\" five times and then \"Destructor called\" five times"
      - "\"Constructor called\" five times and then \"Destructor called\" once"
      - Error
      - Segmentation fault
    answer: 3
    explanation: "Segmentation fault is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; class A{ public: A(){ cout<<\"Constructor called\\n\"; } ~A(){ cout<<\"Destructor called\\n\"; } }; int main(int argc, char const *argv[]) { A *a = new A[5]; delete a; return 0; }”. This question is standard in competitive examination syllabi for Object Oriented Programming In C Plus Plus."
    keyConcept: Object Oriented Programming In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: Wrapping data and its related functionality into a single entity is known as . . . . . . . .
    options:
      - Abstraction
      - Encapsulation
      - Polymorphism
      - Modularity
    answer: 1
    explanation: Encapsulation is the correct answer to “Wrapping data and its related functionality into a single entity is known as . . . . . . . .”. This question is standard in competitive examination syllabi for Object Oriented Programming In C Plus Plus.
    keyConcept: Object Oriented Programming In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: "What will be the output of the following C++ code? #include<iostream> using namespace std; class Base { public: Base() { cout<<\"Constructing Base \\n\"; } ~Base() { cout<<\"Destructing Base \\n\"; } }; class Derived: public Base { public: Derived() { cout<<\"Constructing Derived \\n\"; } ~Derived() { cout<<\"Destructing Derived \\n\"; } }; int main(void) { Derived *d = new Derived(); Base *b = d; delete b; return 0; }"
    options:
      - Constructing Base Constructing Derived Destructing Base
      - Constructing Base Constructing Derived Destructing Derived Destructing Base
      - Constructing Base Constructing Derived Destructing Base Destructing Derived
      - Constructing Derived Constructing Base Destructing Base Destructing Derived
    answer: 0
    explanation: "Constructing Base Constructing Derived Destructing Base is the correct answer to “What will be the output of the following C++ code? #include<iostream> using namespace std; class Base { public: Base() { cout<<\"Constructing Base \\n\"; } ~Base() { cout<<\"Destructing Base \\n\"; } }; class Derived: public Base { public: Derived() { cout<<\"Constructing Derived \\n\"; } ~Derived() { cout<<\"Destructing Derived \\n\"; } }; int main(void) { Derived *d = new Derived(); Base *b = d; delete b; return 0; }”. This question is standard in competitive examination syllabi for Object Oriented Programming In C Plus Plus."
    keyConcept: Object Oriented Programming In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: C++ is . . . . . . . .
    options:
      - procedural programming language
      - object oriented programming language
      - functional programming language
      - both procedural and object oriented programming language
    answer: 3
    explanation: both procedural and object oriented programming language is the correct answer to “C++ is . . . . . . . .”. This question is standard in competitive examination syllabi for Object Oriented Programming In C Plus Plus.
    keyConcept: Object Oriented Programming In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: How compile-time polymorphisms are implemented in C++?
    options:
      - Using Inheritance
      - Using Virtual functions
      - Using Templates
      - Using Inheritance and Virtual functions
    answer: 2
    explanation: Using Templates is the correct answer to “How compile-time polymorphisms are implemented in C++”. This question is standard in competitive examination syllabi for Object Oriented Programming In C Plus Plus.
    keyConcept: Object Oriented Programming In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: What does modularity mean?
    options:
      - Hiding part of program
      - Subdividing program into small independent parts
      - Overriding parts of program
      - Wrapping things into single unit
    answer: 1
    explanation: Subdividing program into small independent parts is the correct answer to “What does modularity mean”. This question is standard in competitive examination syllabi for Object Oriented Programming In C Plus Plus.
    keyConcept: Object Oriented Programming In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: How many types of polymorphism are there in C++?
    options:
      - "1"
      - "2"
      - "3"
      - "4"
    answer: 1
    explanation: 2 is the correct answer to “How many types of polymorphism are there in C++”. This question is standard in competitive examination syllabi for Object Oriented Programming In C Plus Plus.
    keyConcept: Object Oriented Programming In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: Which of the following shows multiple inheritances?
    options:
      - A->B->C
      - A->B; A->C
      - A,B->C
      - B->A
    answer: 2
    explanation: A,B->C is the correct answer to “Which of the following shows multiple inheritances”. This question is standard in competitive examination syllabi for Object Oriented Programming In C Plus Plus.
    keyConcept: Object Oriented Programming In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: What happens if a pointer is deleted twice in a program as shown in the following C++ statements? int *ptr = new int; delete ptr; delete ptr;
    options:
      - Undefined behaviour
      - Syntactically incorrect
      - Semantically incorrect
      - The program runs perfectly
    answer: 0
    explanation: Undefined behaviour is the correct answer to “What happens if a pointer is deleted twice in a program as shown in the following C++ statements? int *ptr = new int; delete ptr; delete ptr;”. This question is standard in competitive examination syllabi for Object Oriented Programming In C Plus Plus.
    keyConcept: Object Oriented Programming In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: Which of the following is correct about new and malloc?
    options:
      - Both are available in C
      - Pointer object initialization of a class with both new and malloc calls the constructor of that class
      - Pointer object initialization of a class using new involves constructor call whereas using malloc does not involve constructor call
      - Pointer object initialization of a class using malloc involves constructor call whereas using new does not involve constructor call
    answer: 2
    explanation: Pointer object initialization of a class using new involves constructor call whereas using malloc does not involve constructor call is the correct answer to “Which of the following is correct about new and malloc”. This question is standard in competitive examination syllabi for Object Oriented Programming In C Plus Plus.
    keyConcept: Object Oriented Programming In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
---


