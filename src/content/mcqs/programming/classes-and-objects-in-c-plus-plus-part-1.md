---
title: Classes And Objects In C Plus Plus — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Classes And Objects In C Plus Plus — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: classes-and-objects-in-c-plus-plus-part-1
topicName: Classes And Objects In C Plus Plus — Part 1
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
    question: Which access specifier allows members of a class to be accessed only by member functions of the same class and its derived classes in C++?
    options:
      - protected
      - public
      - private
      - friend
    answer: 0
    explanation: "Access specifiers in C++ determine the visibility and accessibility of class members. The protected access specifier allows members of a class to be accessed by: 1. Member functions of the same class 2. Member functions of its derived (child) classes This makes protected different from private , which restricts access only to the class itself, and from public , which allows access from anywhere. Now let’s see why the other options are incorrect: Option B: public — Members are accessible from anywhere in the program , which is more permissive than required by the question. Option C: private — Members are accessible only within the same class , not by derived classes, so this is too restrictive. Option D: friend — friend is not an access specifier; it is a keyword used to allow a specific external function or class to access private or protected members of another class. It doesn’t define a general access level. Conclusion: The protected access specifier is the one that allows class members to be accessed within the same class and its derived classes. Hence, the correct answer is Option A: protected ."
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: What is a class in C++?
    options:
      - A collection of functions
      - A reserved keyword in C++
      - A blueprint for creating objects
      - A way to declare arrays of data
    answer: 2
    explanation: A blueprint for creating objects is the correct answer to “What is a class in C++”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Which keyword is used to create an object of a class in C++?
    options:
      - new
      - create
      - object
      - None of the above
    answer: 3
    explanation: None of the above is the correct answer to “Which keyword is used to create an object of a class in C++”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What is an object in C++?
    options:
      - A reserved keyword in C++
      - An instance of a class
      - A way to declare arrays of data
      - None of the above
    answer: 1
    explanation: An instance of a class is the correct answer to “What is an object in C++”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: What is the purpose of a constructor in C++?
    options:
      - To hide the implementation details of a class
      - To create multiple instances of a class
      - To initialize the object's data members
      - To destroy the object
    answer: 2
    explanation: To initialize the object's data members is the correct answer to “What is the purpose of a constructor in C++”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: Which access specifier allows members of a class to be accessed from outside the class in C++?
    options:
      - private
      - protected
      - friend
      - public
    answer: 3
    explanation: public is the correct answer to “Which access specifier allows members of a class to be accessed from outside the class in C++”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What is the correct syntax to define a member function outside the class in C++?
    options:
      - returnType functionName() {}
      - returnType className::functionName() {}
      - returnType className::functionName()
      - returnType functionName(className) {}
    answer: 1
    explanation: returnType className::functionName() {} is the correct answer to “What is the correct syntax to define a member function outside the class in C++”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What is the process of combining data and functions into a single unit called in C++?
    options:
      - Encapsulation
      - Inheritance
      - Polymorphism
      - Abstraction
    answer: 0
    explanation: Encapsulation is the correct answer to “What is the process of combining data and functions into a single unit called in C++”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What does the 'this' pointer refer to in C++?
    options:
      - Pointer to the base class object instance
      - Pointer to the next object instance
      - Pointer to the previous object instance
      - Pointer to the current object instance
    answer: 3
    explanation: Pointer to the current object instance is the correct answer to “What does the 'this' pointer refer to in C++”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: Which keyword is used to declare a member function of a class as constant in C++?
    options:
      - static
      - final
      - const
      - virtual
    answer: 2
    explanation: const is the correct answer to “Which keyword is used to declare a member function of a class as constant in C++”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What is the purpose of the 'static' keyword in C++ class members?
    options:
      - To initialize objects of a class
      - To create a single copy of the member shared by all objects
      - To create multiple instances of a class
      - None of the above
    answer: 1
    explanation: To create a single copy of the member shared by all objects is the correct answer to “What is the purpose of the 'static' keyword in C++ class members”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: Which type of function is used to destroy objects in C++?
    options:
      - Friend function
      - Member function
      - Destructor
      - Constructor
    answer: 2
    explanation: Destructor is the correct answer to “Which type of function is used to destroy objects in C++”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: Which operator is used to access members of an object in C++?
    options:
      - Dot operator (.)
      - Arrow operator (->)
      - Double colon (::)
      - Star operator (*)
    answer: 0
    explanation: Dot operator (.) is the correct answer to “Which operator is used to access members of an object in C++”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What is the difference between a constructor and a destructor in C++?
    options:
      - Constructor is called when an object is destroyed, while destructor is called when an object is created
      - Constructor is used to initialize objects, while destructor is used to free resources
      - Constructor is called when an object is created, while destructor is called when an object is destroyed
      - Constructor is used to free resources, while destructor is used to initialize objects
    answer: 2
    explanation: Constructor is called when an object is created, while destructor is called when an object is destroyed is the correct answer to “What is the difference between a constructor and a destructor in C++”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What is the purpose of the destructor in C++?
    options:
      - To define objects within a class
      - To release resources acquired by the object
      - To perform calculations with object data
      - None of the above
    answer: 1
    explanation: To release resources acquired by the object is the correct answer to “What is the purpose of the destructor in C++”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: Which keyword is used to declare a class in C++?
    options:
      - object
      - typedef
      - class
      - struct
    answer: 2
    explanation: class is the correct answer to “Which keyword is used to declare a class in C++”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What is the purpose of the static member variable in C++?
    options:
      - To initialize objects of a class
      - To define objects within a class
      - To release resources acquired by the object
      - To maintain common data for all objects
    answer: 3
    explanation: To maintain common data for all objects is the correct answer to “What is the purpose of the static member variable in C++”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: What is the purpose of using friend functions in C++?
    options:
      - To create multiple instances of a class
      - To hide the implementation details of a class
      - To allow access to private and protected members of a class from outside the class
      - To define functions within a class
    answer: 2
    explanation: To allow access to private and protected members of a class from outside the class is the correct answer to “What is the purpose of using friend functions in C++”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: Which access specifier allows members of a class to be accessed only by the derived classes in C++?
    options:
      - public
      - protected
      - friend
      - None of the above
    answer: 1
    explanation: protected is the correct answer to “Which access specifier allows members of a class to be accessed only by the derived classes in C++”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What is the term for a function that is declared inside a class but defined outside of it in C++?
    options:
      - Inline function
      - Friend function
      - Member function
      - Static function
    answer: 2
    explanation: Member function is the correct answer to “What is the term for a function that is declared inside a class but defined outside of it in C++”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: What is the purpose of using constructors in C++?
    options:
      - To hide the implementation details of a class
      - To create multiple instances of a class
      - To initialize the object's data members
      - To destroy the object
    answer: 2
    explanation: To initialize the object's data members is the correct answer to “What is the purpose of using constructors in C++”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: Which keyword is used to create a copy constructor in C++?
    options:
      - copy
      - constructor
      - copy_constructor
      - None of the above
    answer: 3
    explanation: None of the above is the correct answer to “Which keyword is used to create a copy constructor in C++”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: What is the purpose of a copy constructor in C++?
    options:
      - To hide the implementation details of a class
      - To destroy objects
      - To initialize an object using another object
      - To create multiple instances of a class
    answer: 2
    explanation: To initialize an object using another object is the correct answer to “What is the purpose of a copy constructor in C++”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: What is a destructor in C++?
    options:
      - A special member function that destroys objects
      - A function used to create objects
      - A function used to initialize objects
      - A function used to access class members
    answer: 0
    explanation: A special member function that destroys objects is the correct answer to “What is a destructor in C++”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: Which keyword is used to make a member function constant in C++?
    options:
      - virtual
      - final
      - static
      - const
    answer: 3
    explanation: const is the correct answer to “Which keyword is used to make a member function constant in C++”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: What is the purpose of the keyword 'explicit' before a constructor in C++?
    options:
      - To specify the return type of the constructor
      - To prevent implicit conversions during object initialization
      - To mark the constructor as static
      - None of the above
    answer: 1
    explanation: To prevent implicit conversions during object initialization is the correct answer to “What is the purpose of the keyword 'explicit' before a constructor in C++”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: "What will be the output of the following C++ code? #include <iostream> #include <complex> using namespace std; int main () { complex<double> mycomplex (20.0, 2.0); cout << imag(mycomplex) << endl; return 0; }"
    options:
      - "2"
      - "20"
      - "40"
      - "30"
    answer: 0
    explanation: "2 is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <complex> using namespace std; int main () { complex<double> mycomplex (20.0, 2.0); cout << imag(mycomplex) << endl; return 0; }”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus."
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: How many parameters does a conversion operator may take?
    options:
      - "0"
      - "1"
      - "2"
      - as many as possible
    answer: 0
    explanation: 0 is the correct answer to “How many parameters does a conversion operator may take”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; class Integer { int i; public: Integer(int ii) : i(ii) {} const Integer operator+(const Integer& rv) const { cout << \"operator+\" << endl; return Integer(i + rv.i); } Integer& operator+=(const Integer& rv) { cout << \"operator+=\" << endl; i += rv.i; return *this; } }; int main() { int i = 1, j = 2, k = 3; k += i + j; Integer ii(1), jj(2), kk(3); kk += ii + jj; }"
    options:
      - operator+ operator+=
      - operator+= operator+
      - operator+ operator+
      - operator+ operator=
    answer: 0
    explanation: "operator+ operator+= is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; class Integer { int i; public: Integer(int ii) : i(ii) {} const Integer operator+(const Integer& rv) const { cout << \"operator+\" << endl; return Integer(i + rv.i); } Integer& operator+=(const Integer& rv) { cout << \"operator+=\" << endl; i += rv.i; return *this; } }; int main() { int i = 1, j = 2, k = 3; k += i + j; Integer ii(1), jj(2), kk(3); kk += ii + jj; }”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus."
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: Which of the following operator cannot be overloaded?
    options:
      - +
      - "?:"
      - –
      - "%"
    answer: 1
    explanation: "?: is the correct answer to “Which of the following operator cannot be overloaded”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus."
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: Pick the correct statement.
    options:
      - Macros and inline functions are same thing
      - Macros looks like function calls but they are actually not
      - Inline functions looks like function but they are not
      - Inline function are always large
    answer: 1
    explanation: Macros looks like function calls but they are actually not is the correct answer to “Pick the correct statement.”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: Which is used to define the member of a class externally?
    options:
      - ":"
      - "::"
      - "#"
      - "!!$"
    answer: 1
    explanation: ":: is the correct answer to “Which is used to define the member of a class externally”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus."
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; ostream & operator<<(ostream & i, int n) { return i; } int main() { cout << 5 << endl; cin.get(); return 0; }"
    options:
      - "5"
      - "6"
      - error
      - runtime error
    answer: 2
    explanation: "error is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; ostream & operator<<(ostream & i, int n) { return i; } int main() { cout << 5 << endl; cin.get(); return 0; }”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus."
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class Box{ int capacity; bool operator<(Box b){ return this->capacity < b.capacity ? true : false; } public: Box(){} Box(double capacity){ this->capacity = capacity; } }; int main(int argc, char const *argv[]) { Box b1(10); Box b2 = Box(14); if(b1 < b2){ cout<<\"Box 2 has large capacity.\"; } else{ cout<<\"Box 1 has large capacity.\"; } return 0; }"
    options:
      - Error
      - Segmentation fault
      - Box 2 has large capacity
      - No output
    answer: 0
    explanation: "Error is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class Box{ int capacity; bool operator<(Box b){ return this->capacity < b.capacity ? true : false; } public: Box(){} Box(double capacity){ this->capacity = capacity; } }; int main(int argc, char const *argv[]) { Box b1(10); Box b2 = Box(14); if(b1 < b2){ cout<<\"Box 2 has large capacity.\"; } else{ cout<<\"Box 1 has large capacity.\"; } return 0; }”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus."
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: Which operator a pointer object of a class uses to access its data members and member functions?
    options:
      - .
      - "->"
      - ":"
      - "::"
    answer: 1
    explanation: "-> is the correct answer to “Which operator a pointer object of a class uses to access its data members and member functions”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus."
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; int main () { int a, b; a = 10; b = 4; a = b; b = 7; cout << \"a:\"; cout << a; cout << \" b:\"; cout << b; return 0; }"
    options:
      - a:4 b:7
      - a:10 b:4
      - a:4 b:10
      - a:4 b:6
    answer: 0
    explanation: "a:4 b:7 is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; int main () { int a, b; a = 10; b = 4; a = b; b = 7; cout << \"a:\"; cout << a; cout << \" b:\"; cout << b; return 0; }”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus."
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; int main () { std::string str (\"Example.\"); str.back() = '!'; std::cout << str << endl; return 0; }"
    options:
      - Example.!
      - Example.
      - Example!
      - Example!.
    answer: 2
    explanation: "Example! is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; int main () { std::string str (\"Example.\"); str.back() = '!'; std::cout << str << endl; return 0; }”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus."
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: Which is the correct example of a unary operator?
    options:
      - "&"
      - "=="
      - —
      - /
    answer: 2
    explanation: — is the correct answer to “Which is the correct example of a unary operator”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: In case of non-static member functions how many maximum object arguments a binary operator overloaded function can take?
    options:
      - "1"
      - "2"
      - "3"
      - "0"
    answer: 0
    explanation: 1 is the correct answer to “In case of non-static member functions how many maximum object arguments a binary operator overloaded function can take”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: Which of the following operator can be overloaded?
    options:
      - "?:"
      - "::"
      - .
      - "=="
    answer: 3
    explanation: "== is the correct answer to “Which of the following operator can be overloaded”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus."
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
---


