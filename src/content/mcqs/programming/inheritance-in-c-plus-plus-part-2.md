---
title: Inheritance In C Plus Plus — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Inheritance In C Plus Plus — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: inheritance-in-c-plus-plus-part-2
topicName: Inheritance In C Plus Plus — Part 2
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
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class Mammal { public: Mammal(){ cout<<\"I'm a Mammal\\n\"; } ~Mammal(){} }; class Human: public Mammal { public: Human(){ cout<<\"I'm a Human\\n\"; } ~Human(){} }; class Male: public Human { public: Male(){ cout<<\"I'm a Male\\n\"; } ~Male(){} }; class Female: public Human { public: Female(){ cout<<\"I'm a Female\\n\"; } ~Female(){} }; int main(int argc, char const *argv[]) { Male M; return 0; }"
    options:
      - I'm a Mammal I'm a Human I'm a Male
      - I'm a Mammal I'm a Human I'm a Female
      - I'm a Human I'm a Male
      - I'm a Mammal I'm a Male
    answer: 0
    explanation: "I'm a Mammal I'm a Human I'm a Male is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class Mammal { public: Mammal(){ cout<<\"I'm a Mammal\\n\"; } ~Mammal(){} }; class Human: public Mammal { public: Human(){ cout<<\"I'm a Human\\n\"; } ~Human(){} }; class Male: public Human { public: Male(){ cout<<\"I'm a Male\\n\"; } ~Male(){} }; class Female: public Human { public: Female(){ cout<<\"I'm a Female\\n\"; } ~Female(){} }; int main(int argc, char const *argv[]) { Male M; return 0; }”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus."
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class A { float d; public: virtual void func(){ cout<<\"Hello this is class A\\n\"; } }; class B: public A { int a = 15; public: void func(){ cout<<\"Hello this is class B\\n\"; } }; int main(int argc, char const *argv[]) { A *a; a->func(); return 0; }"
    options:
      - Hello this is class A
      - Hello this is class B
      - Error
      - Segmentation Fault
    answer: 3
    explanation: "Segmentation Fault is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class A { float d; public: virtual void func(){ cout<<\"Hello this is class A\\n\"; } }; class B: public A { int a = 15; public: void func(){ cout<<\"Hello this is class B\\n\"; } }; int main(int argc, char const *argv[]) { A *a; a->func(); return 0; }”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus."
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Which statement is incorrect about virtual function.
    options:
      - They are used to achieve runtime polymorphism
      - They are used to hide objects
      - Each virtual function declaration starts with the virtual keyword
      - All of the mentioned
    answer: 1
    explanation: They are used to hide objects is the correct answer to “Which statement is incorrect about virtual function.”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class A { int a; public: A(){ a = 0; } void show(){ a++; cout<<\"a: \"<<a<<endl; } }; class B: public A { public: }; int main(int argc, char const *argv[]) { B b; b.show(); return 0; }"
    options:
      - "a: 1"
      - "a: 0"
      - Error
      - Segmentation fault
    answer: 0
    explanation: "a: 1 is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class A { int a; public: A(){ a = 0; } void show(){ a++; cout<<\"a: \"<<a<<endl; } }; class B: public A { public: }; int main(int argc, char const *argv[]) { B b; b.show(); return 0; }”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus."
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: Which is the correct syntax of declaring a virtual function?
    options:
      - virtual int func()
      - virtual int func(){}
      - inline virtual func()
      - inline virtual func(){}
    answer: 0
    explanation: virtual int func() is the correct answer to “Which is the correct syntax of declaring a virtual function”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class A { int a; public: A(){ a = 0; } static void show(){ a++; cout<<a; } }; class B: public A { public: }; int main(int argc, char const *argv[]) { B b; b.show(); return 0; }"
    options:
      - "1"
      - "0"
      - Segmentation fault
      - Error
    answer: 3
    explanation: "Error is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class A { int a; public: A(){ a = 0; } static void show(){ a++; cout<<a; } }; class B: public A { public: }; int main(int argc, char const *argv[]) { B b; b.show(); return 0; }”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus."
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class A { public: virtual A(){ cout<<\"A's Constructor\\n\"; } }; class B: public A { public: A(){ cout<<\"Present inside the class B\\n\"; } }; int main(int argc, char const *argv[]) { A a; return 0; }"
    options:
      - A's Constructor
      - Present inside the class B
      - Error
      - Segmentation fault
    answer: 2
    explanation: "Error is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class A { public: virtual A(){ cout<<\"A's Constructor\\n\"; } }; class B: public A { public: A(){ cout<<\"Present inside the class B\\n\"; } }; int main(int argc, char const *argv[]) { A a; return 0; }”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus."
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: "What happens if the following C++ program is compiled? #include <iostream> #include <string> using namespace std; class A { int a; public: A(){ a = 0; } void show(){ a++; cout<<\"a: \"<<a<<endl; } }; class B: private A { public: void show(){ show(); } }; int main(int argc, char const *argv[]) { B b; b.show(); return 0; }"
    options:
      - Error because of the conflicts between two show() function in class B
      - Program will compile successfully
      - Error due to self call in show() function
      - Error because show() function from class A is derived privately
    answer: 1
    explanation: "Program will compile successfully is the correct answer to “What happens if the following C++ program is compiled? #include <iostream> #include <string> using namespace std; class A { int a; public: A(){ a = 0; } void show(){ a++; cout<<\"a: \"<<a<<endl; } }; class B: private A { public: void show(){ show(); } }; int main(int argc, char const *argv[]) { B b; b.show(); return 0; }”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus."
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; class Base { public: virtual void print() const = 0; }; class DerivedOne : public Base { public: void print() const { cout << \"DerivedOne\\n\"; } }; class DerivedTwo : public Base { public: void print() const { cout << \"DerivedTwo\\n\"; } }; class Multiple : public DerivedOne, public DerivedTwo { public: void print() const { DerivedTwo :: print(); } }; int main() { int i; Multiple both; DerivedOne one; DerivedTwo two; Base *array[ 3 ]; array[ 0 ] = &both; array[ 1 ] = &one; array[ 2 ] = &two; array[ i ] -> print(); return 0; }"
    options:
      - DerivedOne
      - DerivedTwo
      - Error
      - DerivedThree
    answer: 2
    explanation: "Error is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; class Base { public: virtual void print() const = 0; }; class DerivedOne : public Base { public: void print() const { cout << \"DerivedOne\\n\"; } }; class DerivedTwo : public Base { public: void print() const { cout << \"DerivedTwo\\n\"; } }; class Multiple : public DerivedOne, public DerivedTwo { public: void print() const { DerivedTwo :: print(); } }; int main() { int i; Multiple both; DerivedOne one; DerivedTwo two; Base *array[ 3 ]; array[ 0 ] = &both; array[ 1 ] = &one; array[ 2 ] = &two; array[ i ] -> print(); return 0; }”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus."
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: Which design patterns benefit from the multiple inheritances?
    options:
      - Adapter and observer pattern
      - Code pattern
      - Glue pattern
      - Star pattern
    answer: 0
    explanation: Adapter and observer pattern is the correct answer to “Which design patterns benefit from the multiple inheritances”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class A { public: virtual static void show(){ cout<<\"class A\\n\"; } }; class B: public A { public: static void show(){ cout<<\"class B\\n\"; } }; int main(int argc, char const *argv[]) { A *a = new A(); B b; a = &b; a->show(); return 0; }"
    options:
      - class B
      - Error
      - Segmentation fault
      - class A
    answer: 1
    explanation: "Error is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class A { public: virtual static void show(){ cout<<\"class A\\n\"; } }; class B: public A { public: static void show(){ cout<<\"class B\\n\"; } }; int main(int argc, char const *argv[]) { A *a = new A(); B b; a = &b; a->show(); return 0; }”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus."
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class A { float d; public: A(){ cout<<\"Constructor of class A\\n\"; } }; class B: public A { int a = 15; public: B(){ cout<<\"Constructor of class B\\n\"; } }; int main(int argc, char const *argv[]) { B b; return 0; }"
    options:
      - Constructor of class A Constructor of class B
      - Constructor of class A
      - Constructor of class B
      - Constructor of class B Constructor of class A
    answer: 0
    explanation: "Constructor of class A Constructor of class B is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class A { float d; public: A(){ cout<<\"Constructor of class A\\n\"; } }; class B: public A { int a = 15; public: B(){ cout<<\"Constructor of class B\\n\"; } }; int main(int argc, char const *argv[]) { B b; return 0; }”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus."
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; class student { public: int rno , m1 , m2 ; void get() { rno = 15, m1 = 10, m2 = 10; } }; class sports { public: int sm; void getsm() { sm = 10; } }; class statement:public student,public sports { int tot,avg; public: void display() { tot = (m1 + m2 + sm); avg = tot / 3; cout << tot; cout << avg; } }; int main() { statement obj; obj.get(); obj.getsm(); obj.display(); }"
    options:
      - "3100"
      - "3010"
      - "2010"
      - "1010"
    answer: 1
    explanation: "3010 is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; class student { public: int rno , m1 , m2 ; void get() { rno = 15, m1 = 10, m2 = 10; } }; class sports { public: int sm; void getsm() { sm = 10; } }; class statement:public student,public sports { int tot,avg; public: void display() { tot = (m1 + m2 + sm); avg = tot / 3; cout << tot; cout << avg; } }; int main() { statement obj; obj.get(); obj.getsm(); obj.display(); }”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus."
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What is a pure virtual function?
    options:
      - A virtual function defined inside the base class
      - A virtual function that has no definition relative to the base class
      - A virtual function that is defined inside the derived class
      - Any function that is made virtual
    answer: 1
    explanation: A virtual function that has no definition relative to the base class is the correct answer to “What is a pure virtual function”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class Mammal { public: virtual void Define(){ cout<<\"I'm a Mammal\\n\"; } }; class Human: public Mammal { public: void Define(){ cout<<\"I'm a Human\\n\"; } }; class Male: public Human { public: void Define(){ cout<<\"I'm a Male\\n\"; } }; class Female: public Human { public: void Define(){ cout<<\"I'm a Female\\n\"; } }; int main(int argc, char const *argv[]) { Mammal *M = new Mammal(); Male m; Female f; *M = m; M->Define(); M = &m; M->Define(); return 0; }"
    options:
      - I'm a Male I'm a Male
      - I'm a Male I'm a Mammal
      - I'm a Mammal I'm a Male
      - I'm a Mammal I'm a Mammal
    answer: 2
    explanation: "I'm a Mammal I'm a Male is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class Mammal { public: virtual void Define(){ cout<<\"I'm a Mammal\\n\"; } }; class Human: public Mammal { public: void Define(){ cout<<\"I'm a Human\\n\"; } }; class Male: public Human { public: void Define(){ cout<<\"I'm a Male\\n\"; } }; class Female: public Human { public: void Define(){ cout<<\"I'm a Female\\n\"; } }; int main(int argc, char const *argv[]) { Mammal *M = new Mammal(); Male m; Female f; *M = m; M->Define(); M = &m; M->Define(); return 0; }”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus."
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; struct a { int count; }; struct b { int* value; }; struct c : public a, public b { }; int main() { c* p = new c; p->value = 0; cout << \"Inherited\"; return 0; }"
    options:
      - Inherited
      - Error
      - Runtime error
      - None of the above
    answer: 0
    explanation: "Inherited is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; struct a { int count; }; struct b { int* value; }; struct c : public a, public b { }; int main() { c* p = new c; p->value = 0; cout << \"Inherited\"; return 0; }”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus."
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; class Base1 { protected: int SampleDataOne; public: Base1() { SampleDataOne = 100; } ~Base1() { } int SampleFunctOne() { return SampleDataOne; } }; class Base2 { protected: int SampleDataTwo; public: Base2() { SampleDataTwo = 200; } ~Base2() { } int SampleFunctTwo() { return SampleDataTwo; } }; class Derived1 : public Base1, public Base2 { int MyData; public: Derived1() { MyData = 300; } ~Derived1() { } int MyFunct() { return (MyData + SampleDataOne + SampleDataTwo); } }; int main() { Base1 SampleObjOne; Base2 SampleObjTwo; Derived1 SampleObjThree; cout << SampleObjThree.Base1 :: SampleFunctOne() << endl; cout << SampleObjThree.Base2 :: SampleFunctTwo() << endl; return 0; }"
    options:
      - "100"
      - "200"
      - Both 100 & 200
      - "150"
    answer: 2
    explanation: "Both 100 & 200 is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; class Base1 { protected: int SampleDataOne; public: Base1() { SampleDataOne = 100; } ~Base1() { } int SampleFunctOne() { return SampleDataOne; } }; class Base2 { protected: int SampleDataTwo; public: Base2() { SampleDataTwo = 200; } ~Base2() { } int SampleFunctTwo() { return SampleDataTwo; } }; class Derived1 : public Base1, public Base2 { int MyData; public: Derived1() { MyData = 300; } ~Derived1() { } int MyFunct() { return (MyData + SampleDataOne + SampleDataTwo); } }; int main() { Base1 SampleObjOne; Base2 SampleObjTwo; Derived1 SampleObjThree; cout << SampleObjThree.Base1 :: SampleFunctOne() << endl; cout << SampleObjThree.Base2 :: SampleFunctTwo() << endl; return 0; }”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus."
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: Which of the following advantages we lose by using multiple inheritances?
    options:
      - Dynamic binding
      - Polymorphism
      - Both Dynamic binding & Polymorphism
      - Constructor
    answer: 2
    explanation: Both Dynamic binding & Polymorphism is the correct answer to “Which of the following advantages we lose by using multiple inheritances”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class A { int a; public: A(){ a = 0; } void show(){ a++; cout<<\"a: \"<<a<<endl; } }; class B: private A { public: }; int main(int argc, char const *argv[]) { B b; b.show(); return 0; }"
    options:
      - Error
      - Segmentation fault
      - "a: 1"
      - "a: 0"
    answer: 0
    explanation: "Error is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class A { int a; public: A(){ a = 0; } void show(){ a++; cout<<\"a: \"<<a<<endl; } }; class B: private A { public: }; int main(int argc, char const *argv[]) { B b; b.show(); return 0; }”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus."
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What is a virtual function in C++?
    options:
      - Any member function of a class
      - All functions that are derived from the base class
      - All the members that are accessing base class data members
      - All the functions which are declared in the base class and is re-defined/overridden by the derived class
    answer: 3
    explanation: All the functions which are declared in the base class and is re-defined/overridden by the derived class is the correct answer to “What is a virtual function in C++”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class A { float d; public: int a; void change(int i){ a = i; } void value_of_a(){ cout<<a; } }; class B: public A { int a = 15; public: void print(){ cout<<a; } }; int main(int argc, char const *argv[]) { B b; b.change(10); b.print(); b.value_of_a(); return 0; }"
    options:
      - "1010"
      - "1510"
      - "1515"
      - "5110"
    answer: 1
    explanation: "1510 is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class A { float d; public: int a; void change(int i){ a = i; } void value_of_a(){ cout<<a; } }; class B: public A { int a = 15; public: void print(){ cout<<a; } }; int main(int argc, char const *argv[]) { B b; b.change(10); b.print(); b.value_of_a(); return 0; }”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus."
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class Mammal { public: virtual void Define(){ cout<<\"I'm a Mammal\\n\"; } }; class Human: public Mammal { private: void Define(){ cout<<\"I'm a Human\\n\"; } }; int main(int argc, char const *argv[]) { Mammal *M = new Mammal(); Human H; M = &H; M->Define(); return 0; }"
    options:
      - Error
      - Segmnetation fault
      - I'm a Human
      - Garbage Value
    answer: 2
    explanation: "I'm a Human is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class Mammal { public: virtual void Define(){ cout<<\"I'm a Mammal\\n\"; } }; class Human: public Mammal { private: void Define(){ cout<<\"I'm a Human\\n\"; } }; int main(int argc, char const *argv[]) { Mammal *M = new Mammal(); Human H; M = &H; M->Define(); return 0; }”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus."
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: Which concept of OOPs is shown by Virtual Functions?
    options:
      - Inheritance
      - Encapsulation
      - Polymorphism
      - Abstraction
    answer: 2
    explanation: Polymorphism is the correct answer to “Which concept of OOPs is shown by Virtual Functions”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: Virtual functions in C++ tells the compiler to perform . . . . . . . . on such functions.
    options:
      - static binding
      - late binding
      - compile time binding
      - no binding
    answer: 1
    explanation: late binding is the correct answer to “Virtual functions in C++ tells the compiler to perform . . . . . . . . on such functions.”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: The concept of deciding which function to invoke during runtime is called . . . . . . . .
    options:
      - late binding
      - dynamic linkage
      - static binding
      - both late binding and dynamic linkage
    answer: 3
    explanation: both late binding and dynamic linkage is the correct answer to “The concept of deciding which function to invoke during runtime is called . . . . . . . .”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: What is the order of Destructors call when the object of derived class B is declared, provided class B is derived from class A?
    options:
      - Destructor of A followed by B
      - Destructor of B followed by A
      - Destructor of A only
      - Destructor of B only
    answer: 1
    explanation: Destructor of B followed by A is the correct answer to “What is the order of Destructors call when the object of derived class B is declared, provided class B is derived from class A”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class A { int a, b; float d; public: void change(int i){ a = i; } void value_of_a(){ cout<<a; } }; class B: private A { }; int main(int argc, char const *argv[]) { B b; cout<<sizeof(B); return 0; }"
    options:
      - "8"
      - "12"
      - Error
      - Segmentation fault
    answer: 1
    explanation: "12 is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class A { int a, b; float d; public: void change(int i){ a = i; } void value_of_a(){ cout<<a; } }; class B: private A { }; int main(int argc, char const *argv[]) { B b; cout<<sizeof(B); return 0; }”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus."
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: What are the things are inherited from the base class?
    options:
      - Constructor and its destructor
      - Operator=() members
      - Friends
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “What are the things are inherited from the base class”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: What is the order of Constructors call when the object of derived class B is declared, provided class B is derived from class A?
    options:
      - Constructor of A followed by B
      - Constructor of B followed by A
      - Constructor of A only
      - Constructor of B only
    answer: 0
    explanation: Constructor of A followed by B is the correct answer to “What is the order of Constructors call when the object of derived class B is declared, provided class B is derived from class A”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; class polygon { protected: int width, height; public: void set_values (int a, int b) { width = a; height = b;} }; class output1 { public: void output (int i); }; void output1::output (int i) { cout << i << endl; } class rectangle: public polygon, public output1 { public: int area () { return (width * height); } }; class triangle: public polygon, public output1 { public: int area () { return (width * height / 2); } }; int main () { rectangle rect; triangle trgl; rect.set_values (4, 5); trgl.set_values (4, 5); rect.output (rect.area()); trgl.output (trgl.area()); return 0; }"
    options:
      - "20"
      - "10"
      - 20 10
      - "30"
    answer: 2
    explanation: "20 10 is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; class polygon { protected: int width, height; public: void set_values (int a, int b) { width = a; height = b;} }; class output1 { public: void output (int i); }; void output1::output (int i) { cout << i << endl; } class rectangle: public polygon, public output1 { public: int area () { return (width * height); } }; class triangle: public polygon, public output1 { public: int area () { return (width * height / 2); } }; int main () { rectangle rect; triangle trgl; rect.set_values (4, 5); trgl.set_values (4, 5); rect.output (rect.area()); trgl.output (trgl.area()); return 0; }”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus."
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: Which symbol is used to create multiple inheritances?
    options:
      - Dot
      - Comma
      - Dollar
      - star
    answer: 1
    explanation: Comma is the correct answer to “Which symbol is used to create multiple inheritances”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: How many specifiers are used to derive a class?
    options:
      - "1"
      - "2"
      - "3"
      - "4"
    answer: 2
    explanation: 3 is the correct answer to “How many specifiers are used to derive a class”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: If a class is derived privately from a base class then . . . . . . . .
    options:
      - no members of the base class is inherited
      - all members are accessible by the derived class
      - all the members are inherited by the class but are hidden and cannot be accessible
      - no derivation of the class gives an error
    answer: 2
    explanation: all the members are inherited by the class but are hidden and cannot be accessible is the correct answer to “If a class is derived privately from a base class then . . . . . . . .”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: What is meant by multiple inheritance?
    options:
      - Deriving a base class from derived class
      - Deriving a derived class from base class
      - Deriving a derived class from more than one base class
      - Deriving a derived base class
    answer: 2
    explanation: Deriving a derived class from more than one base class is the correct answer to “What is meant by multiple inheritance”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
---


