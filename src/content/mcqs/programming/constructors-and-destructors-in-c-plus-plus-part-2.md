---
title: Constructors And Destructors In C Plus Plus — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Constructors And Destructors In C Plus Plus — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: constructors-and-destructors-in-c-plus-plus-part-2
topicName: Constructors And Destructors In C Plus Plus — Part 2
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
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class A{ int a; public: A(int i){ a = i; } void assign(int i){ a = i; } int return_value(){ return a; } }; int main(int argc, char const *argv[]) { A obj; obj.assign(5); cout<<obj.return_value(); }"
    options:
      - "5"
      - "55"
      - Error
      - Segmentation Fault
    answer: 2
    explanation: "Error is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class A{ int a; public: A(int i){ a = i; } void assign(int i){ a = i; } int return_value(){ return a; } }; int main(int argc, char const *argv[]) { A obj; obj.assign(5); cout<<obj.return_value(); }”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus."
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: How many types of constructors are there in C++?
    options:
      - "1"
      - "2"
      - "3"
      - "4"
    answer: 2
    explanation: 3 is the correct answer to “How many types of constructors are there in C++”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; class A{ A(){ cout<<\"Constructor called\"; } }; int main(int argc, char const *argv[]) { A a; return 0; }"
    options:
      - Constructor called
      - Nothing printed
      - Error
      - Segmentation fault
    answer: 2
    explanation: "Error is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; class A{ A(){ cout<<\"Constructor called\"; } }; int main(int argc, char const *argv[]) { A a; return 0; }”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus."
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; class A{ public: int a; A(){ cout<<\"Constructor called\"; } }; int main(int argc, char const *argv[]) { A *a1 = (A*)malloc(sizeof(A)); return 0; }"
    options:
      - Constructor called
      - Nothing printed
      - Error
      - Segmentation fault
    answer: 1
    explanation: "Nothing printed is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; class A{ public: int a; A(){ cout<<\"Constructor called\"; } }; int main(int argc, char const *argv[]) { A *a1 = (A*)malloc(sizeof(A)); return 0; }”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus."
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: Which of the following constructors are provided by the C++ compiler if not defined in a class?
    options:
      - Default constructor
      - Assignment constructor
      - Copy constructor
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “Which of the following constructors are provided by the C++ compiler if not defined in a class”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; class A{ public: A(){ cout<<\"Constructor called\"; } }; int main(int argc, char const *argv[]) { A *a; return 0; }"
    options:
      - Constructor called
      - Nothing printed
      - Error
      - Segmentation fault
    answer: 1
    explanation: "Nothing printed is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; class A{ public: A(){ cout<<\"Constructor called\"; } }; int main(int argc, char const *argv[]) { A *a; return 0; }”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus."
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; class A{ public: int a; A(int a=0){ this->a = a; } }; int main(int argc, char const *argv[]) { A a1, a2(10); cout<<a2.a; return 0; }"
    options:
      - "010"
      - "100"
      - "001"
      - Error
    answer: 0
    explanation: "010 is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; class A{ public: int a; A(int a=0){ this->a = a; } }; int main(int argc, char const *argv[]) { A a1, a2(10); cout<<a2.a; return 0; }”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus."
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; class A{ public: int a; A(){ cout<<\"Constructor called\"; } } a; int main(int argc, char const *argv[]) { return 0; }"
    options:
      - Constructor called
      - Nothing printed
      - Error
      - Segmentation fault
    answer: 0
    explanation: "Constructor called is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; class A{ public: int a; A(){ cout<<\"Constructor called\"; } } a; int main(int argc, char const *argv[]) { return 0; }”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus."
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; class A{ public: int a; A(int a){ this->a = a; } }; int main(int argc, char const *argv[]) { A a1, a2(10); cout<<a2.a; return 0; }"
    options:
      - "10"
      - Compile time error
      - Run-time error
      - No output
    answer: 1
    explanation: "Compile time error is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; class A{ public: int a; A(int a){ this->a = a; } }; int main(int argc, char const *argv[]) { A a1, a2(10); cout<<a2.a; return 0; }”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus."
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class A{ mutable int a; public: A(){ cout<<\"A's default constructor called\\n\"; } A(const A& a){ cout<<\"A's copy Constructor called\\n\"; } }; class B{ A obj; public: B(){ cout<<\"B's Constructor called\\n\"; } }; int main(int argc, char const *argv[]) { B b1; B b2; }"
    options:
      - B's Constructor called B's Constructor called
      - B's Constructor called A's default constructor called B's Constructor called A's default constructor called
      - A's default constructor called B's Constructor called A's default constructor called B's Constructor called
      - A's default constructor called B's Constructor called A's copy Constructor called
    answer: 2
    explanation: "A's default constructor called B's Constructor called A's default constructor called B's Constructor called is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class A{ mutable int a; public: A(){ cout<<\"A's default constructor called\\n\"; } A(const A& a){ cout<<\"A's copy Constructor called\\n\"; } }; class B{ A obj; public: B(){ cout<<\"B's Constructor called\\n\"; } }; int main(int argc, char const *argv[]) { B b1; B b2; }”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus."
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: Why constructors are efficient instead of a function init() defined by the user to initialize the data members of an object?
    options:
      - Because user may forget to call init() using that object leading segmentation fault
      - Because user may call init() more than once which leads to overwriting values
      - Because user may forget to define init() function
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “Why constructors are efficient instead of a function init() defined by the user to initialize the data members of an object”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; class A{ A(){ cout<<\"A's Constructor called\\n\"; } }; class B { public: A a; B(){ cout<<\"B's constructor called\\ns\"; } }; int main(int argc, char const *argv[]) { B b; return 0; }"
    options:
      - A's Constructor called B's constructor called
      - B's Constructor called A's constructor called
      - Error
      - Segmentation fault
    answer: 2
    explanation: "Error is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; class A{ A(){ cout<<\"A's Constructor called\\n\"; } }; class B { public: A a; B(){ cout<<\"B's constructor called\\ns\"; } }; int main(int argc, char const *argv[]) { B b; return 0; }”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus."
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What is a copy constructor?
    options:
      - A constructor that allows a user to move data from one object to another
      - A constructor to initialize an object with the values of another object
      - A constructor to check the whether to objects are equal or not
      - A constructor to kill other copies of a given object.
    answer: 1
    explanation: A constructor to initialize an object with the values of another object is the correct answer to “What is a copy constructor”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: When a copy constructor is called?
    options:
      - When an object of the class is returned by value
      - When an object of the class is passed by value to a function
      - When an object is constructed based on another object of the same class
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “When a copy constructor is called”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: "Which of the following represents the correct explicit call to a constructor of class A? class A{ int a; public: A(int i) { a = i; } }"
    options:
      - A a(5)
      - A a
      - A a = A(5)
      - A a = A()
    answer: 2
    explanation: "A a = A(5) is the correct answer to “Which of the following represents the correct explicit call to a constructor of class A? class A{ int a; public: A(int i) { a = i; } }”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus."
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; class A{ ~A(){} }; class B { public: A a; }; int main(int argc, char const *argv[]) { B b; return 0; }"
    options:
      - A's Constructor called B's constructor called
      - B's Constructor called A's constructor called
      - Error
      - Segmentation fault
    answer: 2
    explanation: "Error is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; class A{ ~A(){} }; class B { public: A a; }; int main(int argc, char const *argv[]) { B b; return 0; }”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus."
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: How many parameters does a default constructor require?
    options:
      - "1"
      - "2"
      - "0"
      - "3"
    answer: 2
    explanation: 0 is the correct answer to “How many parameters does a default constructor require”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: "In the following C++ code how many times the string \"A's constructor called\" will be printed? #include <iostream> #include <string> using namespace std; class A{ int a; public: A(){ cout<<\"A's constructor called\"; } }; class B{ static A a; public: B(){ cout<<\"B's constructor called\"; } static A get(){ return a; } }; A B::a; int main(int argc, char const *argv[]) { B b; A a1 = b.get(); A a2 = b.get(); A a3 = b.get(); }"
    options:
      - "3"
      - "4"
      - "2"
      - "1"
    answer: 3
    explanation: "1 is the correct answer to “In the following C++ code how many times the string \"A's constructor called\" will be printed? #include <iostream> #include <string> using namespace std; class A{ int a; public: A(){ cout<<\"A's constructor called\"; } }; class B{ static A a; public: B(){ cout<<\"B's constructor called\"; } static A get(){ return a; } }; A B::a; int main(int argc, char const *argv[]) { B b; A a1 = b.get(); A a2 = b.get(); A a3 = b.get(); }”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus."
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: What is the role of destructors in Classes?
    options:
      - To modify the data whenever required
      - To destroy an object when the lifetime of an object ends
      - To initialize the data members of an object when it is created
      - To call private functions from the outer world
    answer: 1
    explanation: To destroy an object when the lifetime of an object ends is the correct answer to “What is the role of destructors in Classes”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What is syntax of defining a destructor of class A?
    options:
      - A(){}
      - ~A(){}
      - A::A(){}
      - ~A(){}
    answer: 1
    explanation: ~A(){} is the correct answer to “What is syntax of defining a destructor of class A”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: What happens if a user forgets to define a constructor inside a class?
    options:
      - Error occurs
      - Segmentation fault
      - Objects are not created properly
      - Compiler provides a default constructor to avoid faults/errors
    answer: 3
    explanation: Compiler provides a default constructor to avoid faults/errors is the correct answer to “What happens if a user forgets to define a constructor inside a class”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; class A{ public: int a; }; int main(int argc, char const *argv[]) { A a1 = {10}; A a2 = a1; cout<<a1.a<<a2.a; return 0; }"
    options:
      - "1010"
      - "87368746"
      - Error
      - Segmentation fault
    answer: 0
    explanation: "1010 is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; class A{ public: int a; }; int main(int argc, char const *argv[]) { A a1 = {10}; A a2 = a1; cout<<a1.a<<a2.a; return 0; }”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus."
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; class A{ public: int a; A(){ cout<<\"Constructor called\\n\"; } } a; int main(int argc, char const *argv[]) { cout<<\"Main function\\n\"; return 0; }"
    options:
      - Constructor called Main function
      - Main function Constructor called
      - Error
      - Segmentation fault
    answer: 0
    explanation: "Constructor called Main function is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; class A{ public: int a; A(){ cout<<\"Constructor called\\n\"; } } a; int main(int argc, char const *argv[]) { cout<<\"Main function\\n\"; return 0; }”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus."
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class A{ int a; A(){ a = 5; } public: void assign(int i){ a = i; } int return_value(){ return a; } }; int main(int argc, char const *argv[]) { A obj; obj.assign(10); cout<<obj.return_value(); }"
    options:
      - "5"
      - "10"
      - Error
      - Segmentation fault
    answer: 2
    explanation: "Error is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class A{ int a; A(){ a = 5; } public: void assign(int i){ a = i; } int return_value(){ return a; } }; int main(int argc, char const *argv[]) { A obj; obj.assign(10); cout<<obj.return_value(); }”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus."
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class A{ mutable int a; public: A(){ cout<<\"A's Constructor called\\n\"; } ~A(){ cout<<\"A's Destructor called\\n\"; } }; class B: public A{ A a; public: B(){ cout<<\"B's Constructor called\\n\"; } ~B(){ cout<<\"B's Destructor called\\n\"; } }; int main(int argc, char const *argv[]) { B b1; }"
    options:
      - A's Constructor called B's Constructor called
      - A's Destructor called B's Destructor called
      - A's Constructor called A's Constructor called B's Constructor called B's Destructor called A's Destructor called A's Destructor called
      - A's Constructor called B's Constructor called A's Destructor called B's Destructor called
    answer: 2
    explanation: "A's Constructor called A's Constructor called B's Constructor called B's Destructor called A's Destructor called A's Destructor called is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class A{ mutable int a; public: A(){ cout<<\"A's Constructor called\\n\"; } ~A(){ cout<<\"A's Destructor called\\n\"; } }; class B: public A{ A a; public: B(){ cout<<\"B's Constructor called\\n\"; } ~B(){ cout<<\"B's Destructor called\\n\"; } }; int main(int argc, char const *argv[]) { B b1; }”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus."
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; class A{ A(){ cout<<\"A's Constructor called\\n\"; } friend class B; }; class B { public: A a; B(){ cout<\"B's constructor called\\ns\"; } }; int main(int argc, char const *argv[]) { B b; return 0; }"
    options:
      - A's Constructor called B's constructor called
      - B's Constructor called A's constructor called
      - Error
      - Segmentation fault
    answer: 0
    explanation: "A's Constructor called B's constructor called is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; class A{ A(){ cout<<\"A's Constructor called\\n\"; } friend class B; }; class B { public: A a; B(){ cout<\"B's constructor called\\ns\"; } }; int main(int argc, char const *argv[]) { B b; return 0; }”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus."
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: What is the role of a constructor in classes?
    options:
      - To modify the data whenever required
      - To destroy an object
      - To initialize the data members of an object when it is created
      - To call private functions from the outer world
    answer: 2
    explanation: To initialize the data members of an object when it is created is the correct answer to “What is the role of a constructor in classes”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: How many Destructors are allowed in a Class?
    options:
      - "1"
      - "2"
      - "3"
      - Any number
    answer: 0
    explanation: 1 is the correct answer to “How many Destructors are allowed in a Class”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
---


