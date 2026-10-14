---
title: Constructors And Destructors In C Plus Plus — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Constructors And Destructors In C Plus Plus — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: constructors-and-destructors-in-c-plus-plus-part-1
topicName: Constructors And Destructors In C Plus Plus — Part 1
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
    question: What is the access specifier that allows constructors to be called only from member functions of the same class and its derived classes in C++?
    options:
      - protected
      - public
      - private
      - friend
    answer: 2
    explanation: "In C++, the access specifier that allows constructors to be called only from member functions of the same class and its derived classes is private . When a constructor is declared as private , it cannot be accessed from outside the class, limiting its invocation to member functions of the same class and its derived classes. Option A: protected allows access to member functions and data members from within the same class, derived classes, and friend classes, but it still allows derived classes to call constructors, which might not be desired in some cases. Option B: public allows unrestricted access to the constructor from anywhere, defeating the purpose of restricting its usage to only member functions of the same class and its derived classes. Option D: friend allows non-member functions or external classes to access private and protected members of a class, but it doesn't restrict the calling of constructors to member functions of the same class and its derived classes. Therefore, the correct answer is Option C: private ."
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: Which access specifier allows constructors to be called from anywhere in the program in C++?
    options:
      - friend
      - protected
      - public
      - private
    answer: 2
    explanation: public is the correct answer to “Which access specifier allows constructors to be called from anywhere in the program in C++”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What happens if a class does not explicitly declare any constructors in C++?
    options:
      - A compilation error occurs
      - The class cannot be instantiated
      - The class is initialized with default values
      - A default constructor is provided by the compiler
    answer: 3
    explanation: A default constructor is provided by the compiler is the correct answer to “What happens if a class does not explicitly declare any constructors in C++”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What is the purpose of the 'explicit' keyword before a constructor in C++?
    options:
      - To mark the constructor as static
      - To specify the return type of the constructor
      - To allow implicit conversions during object initialization
      - To prevent implicit conversions during object initialization
    answer: 3
    explanation: To prevent implicit conversions during object initialization is the correct answer to “What is the purpose of the 'explicit' keyword before a constructor in C++”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: Which keyword is used to prevent inheritance in C++?
    options:
      - override
      - virtual
      - final
      - sealed
    answer: 2
    explanation: final is the correct answer to “Which keyword is used to prevent inheritance in C++”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What is the difference between a shallow copy and a deep copy in C++?
    options:
      - Shallow copy is performed using copy constructors, while deep copy is performed using assignment operators
      - Shallow copy copies only the memory addresses of the objects, while deep copy copies the actual content
      - Shallow copy is faster than deep copy
      - None of the above
    answer: 1
    explanation: Shallow copy copies only the memory addresses of the objects, while deep copy copies the actual content is the correct answer to “What is the difference between a shallow copy and a deep copy in C++”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What is a constructor initialization list in C++?
    options:
      - A list of destructor calls
      - A list of initializations for member variables
      - A list of default arguments for the constructor
      - None of the above
    answer: 1
    explanation: A list of initializations for member variables is the correct answer to “What is a constructor initialization list in C++”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What is the access specifier that allows members of a class to be accessed from anywhere in the program in C++?
    options:
      - private
      - protected
      - internal
      - public
    answer: 3
    explanation: public is the correct answer to “What is the access specifier that allows members of a class to be accessed from anywhere in the program in C++”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What is the purpose of using the 'explicit' keyword in front of a constructor declaration in C++?
    options:
      - To specify the return type of the constructor
      - To prevent implicit conversions during object initialization
      - To mark the constructor as static
      - None of the above
    answer: 1
    explanation: To prevent implicit conversions during object initialization is the correct answer to “What is the purpose of using the 'explicit' keyword in front of a constructor declaration in C++”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: Which type of constructor is automatically called when an object is created without any arguments in C++?
    options:
      - Destructor
      - Copy constructor
      - Default constructor
      - Parameterized constructor
    answer: 2
    explanation: Default constructor is the correct answer to “Which type of constructor is automatically called when an object is created without any arguments in C++”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: Which of the following statements about destructors in C++ is true?
    options:
      - Destructors can be overloaded
      - Destructors can be inherited
      - Destructors are called when an object is created
      - Destructors cannot have parameters
    answer: 3
    explanation: Destructors cannot have parameters is the correct answer to “Which of the following statements about destructors in C++ is true”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: In C++, what is the purpose of the 'this' pointer in a class member function?
    options:
      - It points to the memory location of the current object instance
      - It points to the previous object instance
      - It points to the next object instance
      - It points to the base class object instance
    answer: 0
    explanation: It points to the memory location of the current object instance is the correct answer to “In C++, what is the purpose of the 'this' pointer in a class member function”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: Which keyword is used to prevent a class from being inherited in C++?
    options:
      - sealed
      - virtual
      - override
      - final
    answer: 3
    explanation: final is the correct answer to “Which keyword is used to prevent a class from being inherited in C++”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: In C++, what is the difference between a shallow copy and a deep copy?
    options:
      - Shallow copy copies the actual content of the objects, while deep copy copies only the memory addresses
      - Shallow copy is faster than deep copy
      - Shallow copy copies only the memory addresses of the objects, while deep copy copies the actual content
      - Shallow copy is slower than deep copy
    answer: 2
    explanation: Shallow copy copies only the memory addresses of the objects, while deep copy copies the actual content is the correct answer to “In C++, what is the difference between a shallow copy and a deep copy”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What is the difference between a constructor and a normal member function in C++?
    options:
      - Constructor can be overloaded, while a member function cannot
      - Constructor has a return type, while a member function does not
      - Constructor is called explicitly when an object is created, while a member function is called automatically
      - Constructor is called automatically when an object is created, while a member function needs to be called explicitly
    answer: 3
    explanation: Constructor is called automatically when an object is created, while a member function needs to be called explicitly is the correct answer to “What is the difference between a constructor and a normal member function in C++”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What happens if a class does not define any constructors in C++?
    options:
      - The class will have a compilation error
      - The class cannot be compiled
      - A default constructor is automatically provided
      - The class cannot have any objects instantiated
    answer: 2
    explanation: A default constructor is automatically provided is the correct answer to “What happens if a class does not define any constructors in C++”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What is the purpose of using constructor initialization lists in C++?
    options:
      - To override the default constructor
      - To create multiple constructors for a class
      - To initialize class members before the body of the constructor executes
      - To define constructors with multiple arguments
    answer: 2
    explanation: To initialize class members before the body of the constructor executes is the correct answer to “What is the purpose of using constructor initialization lists in C++”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: What is the destructor called automatically when an object is destroyed in C++?
    options:
      - .~className()
      - className::~()
      - ~()
      - ~className()
    answer: 3
    explanation: ~className() is the correct answer to “What is the destructor called automatically when an object is destroyed in C++”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: Which keyword is used to prevent an object from being copied in C++?
    options:
      - nocopy
      - prevent_copy
      - delete
      - new
    answer: 2
    explanation: delete is the correct answer to “Which keyword is used to prevent an object from being copied in C++”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What happens if a destructor is made private in a C++ class?
    options:
      - It is a syntax error
      - The destructor will still be called when needed
      - It prevents object destruction
      - The compiler will throw an error
    answer: 3
    explanation: The compiler will throw an error is the correct answer to “What happens if a destructor is made private in a C++ class”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: In C++, which type of constructor is called when an object is created without any arguments?
    options:
      - Default constructor
      - Parameterized constructor
      - Copy constructor
      - Destructor
    answer: 0
    explanation: Default constructor is the correct answer to “In C++, which type of constructor is called when an object is created without any arguments”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What is the primary purpose of the explicit keyword in a C++ constructor?
    options:
      - To mark the constructor as static
      - To specify the return type of the constructor
      - To allow implicit type conversions
      - To prevent implicit type conversions
    answer: 3
    explanation: To prevent implicit type conversions is the correct answer to “What is the primary purpose of the explicit keyword in a C++ constructor”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: In C++, what is the order of constructor and destructor calls for a class hierarchy?
    options:
      - "Constructors: Derived to Base, Destructors: Base to Derived"
      - Constructors and Destructors follow the same order
      - "Constructors: Base to Derived, Destructors: Derived to Base"
      - "Constructors: Derived to Base, Destructors: Derived to Base"
    answer: 2
    explanation: "Constructors: Base to Derived, Destructors: Derived to Base is the correct answer to “In C++, what is the order of constructor and destructor calls for a class hierarchy”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus."
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: What happens if a constructor throws an exception in C++?
    options:
      - The destructor is called to deallocate resources
      - The object is not fully constructed
      - The object is still constructed but may have undefined behavior
      - None of the above
    answer: 1
    explanation: The object is not fully constructed is the correct answer to “What happens if a constructor throws an exception in C++”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: In C++, which function cannot be inherited but can be overridden in a derived class?
    options:
      - Default Constructor
      - Parameterized Constructor
      - Destructor
      - Copy Constructor
    answer: 2
    explanation: Destructor is the correct answer to “In C++, which function cannot be inherited but can be overridden in a derived class”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Which of the following statements about constructor initialization lists in C++ is correct?
    options:
      - They cannot be used in constructors with default arguments
      - They can only be used in copy constructors
      - They can only be used for primitive data types
      - They must be used for initializing all members of a class
    answer: 3
    explanation: They must be used for initializing all members of a class is the correct answer to “Which of the following statements about constructor initialization lists in C++ is correct”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: Which of the following statements is true about constructors in C++?
    options:
      - Constructors can have a return type
      - Constructors cannot be overloaded
      - Constructors can be called explicitly
      - Constructors can be virtual
    answer: 1
    explanation: Constructors cannot be overloaded is the correct answer to “Which of the following statements is true about constructors in C++”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: What is the purpose of using default arguments in C++ constructors?
    options:
      - To allow the constructor to be called without arguments
      - To provide a default value for constructor arguments
      - To specify the order of constructor execution
      - To prevent the use of constructor arguments
    answer: 1
    explanation: To provide a default value for constructor arguments is the correct answer to “What is the purpose of using default arguments in C++ constructors”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: Which statement about constructor inheritance in C++ is correct?
    options:
      - Constructors cannot be inherited
      - Constructors are inherited with the same access specifier
      - Constructors can only be inherited privately
      - Constructors are inherited with different names
    answer: 1
    explanation: Constructors are inherited with the same access specifier is the correct answer to “Which statement about constructor inheritance in C++ is correct”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: Which statement about destructors in C++ is true?
    options:
      - Destructors can be overloaded
      - Destructors cannot have any arguments
      - Destructors can have a return type
      - Destructors can be called explicitly
    answer: 1
    explanation: Destructors cannot have any arguments is the correct answer to “Which statement about destructors in C++ is true”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: What happens if the destructor is explicitly defined in a C++ class, but the constructor is not defined?
    options:
      - It will cause a compilation error
      - The class will be instantiated with default values
      - The destructor will not be called
      - The class will not be able to create objects
    answer: 2
    explanation: The destructor will not be called is the correct answer to “What happens if the destructor is explicitly defined in a C++ class, but the constructor is not defined”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: What is the purpose of using the delete keyword in C++ destructors?
    options:
      - To deallocate memory for dynamically allocated objects
      - To call the parent class destructor
      - To prevent the destructor from being called
      - To explicitly call the destructor
    answer: 2
    explanation: To prevent the destructor from being called is the correct answer to “What is the purpose of using the delete keyword in C++ destructors”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class A{ mutable int a; public: A(){ cout<<\"A's Constructor called\\n\"; } ~A(){ cout<<\"A's Destructor called\\n\"; } }; class B{ A a; public: B(){ cout<<\"B's Constructor called\\n\"; } ~B(){ cout<<\"B's Destructor called\\n\"; } }; int main(int argc, char const *argv[]) { B b1; }"
    options:
      - A's Constructor called B's Constructor called
      - A's Destructor called B's Destructor called
      - A's Constructor called B's Constructor called B's Destructor called A's Destructor called
      - A's Constructor called B's Constructor called A's Destructor called B's Destructor called
    answer: 2
    explanation: "A's Constructor called B's Constructor called B's Destructor called A's Destructor called is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class A{ mutable int a; public: A(){ cout<<\"A's Constructor called\\n\"; } ~A(){ cout<<\"A's Destructor called\\n\"; } }; class B{ A a; public: B(){ cout<<\"B's Constructor called\\n\"; } ~B(){ cout<<\"B's Destructor called\\n\"; } }; int main(int argc, char const *argv[]) { B b1; }”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus."
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: How constructors are different from other member functions of the class?
    options:
      - Constructor has the same name as the class itself
      - Constructors do not return anything
      - Constructors are automatically called when an object is created
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “How constructors are different from other member functions of the class”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: How destructor overloading is done?
    options:
      - By changing the number of parameters
      - By changing the parameters type
      - By changing both the number of parameters and their type
      - No chance for destructor overloading
    answer: 3
    explanation: No chance for destructor overloading is the correct answer to “How destructor overloading is done”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class A{ mutable int a; public: A(){ cout<<\"Default constructor called\\n\"; } A(const A& a){ cout<<\"Copy Constructor called\\n\"; } }; int main(int argc, char const *argv[]) { A obj; A a1 = obj; A a2(obj); }"
    options:
      - Default constructor called Copy Constructor called
      - Default constructor called Copy Constructor called Copy Constructor called
      - Default constructor called Default constructor called Copy Constructor called
      - Copy Constructor called Default constructor called Copy Constructor called
    answer: 1
    explanation: "Default constructor called Copy Constructor called Copy Constructor called is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class A{ mutable int a; public: A(){ cout<<\"Default constructor called\\n\"; } A(const A& a){ cout<<\"Copy Constructor called\\n\"; } }; int main(int argc, char const *argv[]) { A obj; A a1 = obj; A a2(obj); }”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus."
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: When destructors are called?
    options:
      - When a program ends
      - When a function ends
      - When a delete operator is used
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “When destructors are called”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class A{ mutable int a; public: A(){ cout<<\"A's Constructor called\\n\"; } ~A(){ cout<<\"A's Destructor called\\n\"; } }; class B: public A{ public: B(){ cout<<\"B's Constructor called\\n\"; } ~B(){ cout<<\"B's Destructor called\\n\"; } }; int main(int argc, char const *argv[]) { B b1; }"
    options:
      - A's Constructor called B's Constructor called
      - A's Destructor called B's Destructor called
      - A's Constructor called B's Constructor called B's Destructor called A's Destructor called
      - A's Constructor called B's Constructor called A's Destructor called B's Destructor called
    answer: 2
    explanation: "A's Constructor called B's Constructor called B's Destructor called A's Destructor called is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class A{ mutable int a; public: A(){ cout<<\"A's Constructor called\\n\"; } ~A(){ cout<<\"A's Destructor called\\n\"; } }; class B: public A{ public: B(){ cout<<\"B's Constructor called\\n\"; } ~B(){ cout<<\"B's Destructor called\\n\"; } }; int main(int argc, char const *argv[]) { B b1; }”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus."
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: What is the difference between constructors and destructors?
    options:
      - They have a different function name
      - Constructors does not have return type whereas destructors do have
      - Constructors allow function parameters whereas destructors do not
      - Constructors does not function parameters
    answer: 2
    explanation: Constructors allow function parameters whereas destructors do not is the correct answer to “What is the difference between constructors and destructors”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus.
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class A{ mutable int a; public: A(){ cout<<\"A's Constructor called\\n\"; } ~A(){ cout<<\"A's Destructor called\\n\"; } }; class B{ static A a; public: B(){ cout<<\"B's Constructor called\\n\"; } ~B(){ cout<<\"B's Destructor called\\n\"; } }; int main(int argc, char const *argv[]) { B b1; }"
    options:
      - A's Constructor called B's Constructor called
      - B's Constructor called B's Destructor called
      - A's Constructor called B's Constructor called B's Destructor called A's Destructor called
      - A's Constructor called B's Constructor called A's Destructor called B's Destructor called
    answer: 1
    explanation: "B's Constructor called B's Destructor called is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class A{ mutable int a; public: A(){ cout<<\"A's Constructor called\\n\"; } ~A(){ cout<<\"A's Destructor called\\n\"; } }; class B{ static A a; public: B(){ cout<<\"B's Constructor called\\n\"; } ~B(){ cout<<\"B's Destructor called\\n\"; } }; int main(int argc, char const *argv[]) { B b1; }”. This question is standard in competitive examination syllabi for Constructors And Destructors In C Plus Plus."
    keyConcept: Constructors And Destructors In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
---


