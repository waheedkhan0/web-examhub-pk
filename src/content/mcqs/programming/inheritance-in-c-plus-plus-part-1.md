---
title: Inheritance In C Plus Plus — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Inheritance In C Plus Plus — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: inheritance-in-c-plus-plus-part-1
topicName: Inheritance In C Plus Plus — Part 1
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
    question: What is the default access specifier for a base class when inheriting in C++?
    options:
      - private
      - public
      - protected
      - friend
    answer: 0
    explanation: "The correct answer is A: private . Let's break down why: In C++, when you inherit a class without explicitly specifying an access specifier (like `public`, `private`, or `protected`), the default access specifier depends on how you inherit. If you use the `class` keyword to derive a class, the default access specifier is private . For example, if you write `class Derived : Base`, it's the same as writing `class Derived : private Base`. If you use the `struct` keyword to derive a class, the default access specifier is public . This means that if you don't write `public`, `protected`, or `private` before the base class name in the inheritance, the members of the base class become `private` in the derived class (when inheriting with `class`). Therefore, the default access specifier is private ."
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: In C++, which type of inheritance allows a class to inherit properties and behavior from multiple base classes?
    options:
      - Multilevel inheritance
      - Hierarchical inheritance
      - Multiple inheritance
      - Single inheritance
    answer: 2
    explanation: Multiple inheritance is the correct answer to “In C++, which type of inheritance allows a class to inherit properties and behavior from multiple base classes”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What is the access specifier that restricts access to members of a class to only its derived classes in C++?
    options:
      - public
      - private
      - friend
      - protected
    answer: 3
    explanation: protected is the correct answer to “What is the access specifier that restricts access to members of a class to only its derived classes in C++”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What is the process of defining a new class based on an existing class in C++ called?
    options:
      - Inheritance
      - Composition
      - Encapsulation
      - Polymorphism
    answer: 0
    explanation: Inheritance is the correct answer to “What is the process of defining a new class based on an existing class in C++ called”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: Which keyword is used to signify inheritance in C++?
    options:
      - extends
      - inherit
      - using
      - ": public"
    answer: 3
    explanation: ": public is the correct answer to “Which keyword is used to signify inheritance in C++”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus."
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: In C++, which access specifier allows members of a base class to be accessible in the derived class but not to the outside world?
    options:
      - friend
      - private
      - public
      - protected
    answer: 3
    explanation: protected is the correct answer to “In C++, which access specifier allows members of a base class to be accessible in the derived class but not to the outside world”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What is the diamond problem in C++?
    options:
      - Ambiguity in single inheritance
      - Ambiguity in hierarchical inheritance
      - Ambiguity in multiple inheritance
      - Ambiguity in multilevel inheritance
    answer: 2
    explanation: Ambiguity in multiple inheritance is the correct answer to “What is the diamond problem in C++”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What is the default access specifier for members of a class in C++ when using inheritance?
    options:
      - protected
      - private
      - friend
      - None of the above
    answer: 1
    explanation: private is the correct answer to “What is the default access specifier for members of a class in C++ when using inheritance”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What happens if a derived class redefines a method that is already defined in its base class in C++?
    options:
      - Compilation error
      - Both methods are available separately
      - Method in the derived class overrides the base class method
      - Method in the base class overrides the derived class method
    answer: 2
    explanation: Method in the derived class overrides the base class method is the correct answer to “What happens if a derived class redefines a method that is already defined in its base class in C++”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: In C++, which type of inheritance is not supported directly but can be achieved using a combination of other types of inheritance?
    options:
      - Multiple inheritance
      - Single inheritance
      - Hierarchical inheritance
      - Hybrid inheritance
    answer: 3
    explanation: Hybrid inheritance is the correct answer to “In C++, which type of inheritance is not supported directly but can be achieved using a combination of other types of inheritance”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What is the name for the process by which a class inherits features from another class in C++?
    options:
      - Derivation
      - Combination
      - Composition
      - Encapsulation
    answer: 0
    explanation: Derivation is the correct answer to “What is the name for the process by which a class inherits features from another class in C++”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: In C++, if a derived class does not define a constructor, which constructor of the base class is called during the object creation of the derived class?
    options:
      - No constructor is called
      - Destructor of the base class
      - Parameterized constructor of the base class
      - Default constructor of the base class
    answer: 3
    explanation: Default constructor of the base class is the correct answer to “In C++, if a derived class does not define a constructor, which constructor of the base class is called during the object creation of the derived class”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What is the process of creating a new class using an existing class as a base in C++?
    options:
      - Base class
      - Derived object
      - Derived class
      - Base object
    answer: 2
    explanation: Derived class is the correct answer to “What is the process of creating a new class using an existing class as a base in C++”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What is the name given to the feature of C++ where a class inherits features from more than one base class?
    options:
      - Hierarchical inheritance
      - Multiple inheritance
      - Multilevel inheritance
      - None of the above
    answer: 1
    explanation: Multiple inheritance is the correct answer to “What is the name given to the feature of C++ where a class inherits features from more than one base class”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: In C++, which type of inheritance allows a class to inherit from multiple classes directly or indirectly?
    options:
      - Multilevel inheritance
      - Hierarchical inheritance
      - Multiple inheritance
      - Single inheritance
    answer: 2
    explanation: Multiple inheritance is the correct answer to “In C++, which type of inheritance allows a class to inherit from multiple classes directly or indirectly”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What is the process of defining a new class by extending an existing class in C++?
    options:
      - Base class
      - Inherited class
      - Subclass
      - Derived class
    answer: 3
    explanation: Derived class is the correct answer to “What is the process of defining a new class by extending an existing class in C++”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: In C++, which access specifier allows the members of a base class to be accessible in the derived class as well as from outside the class?
    options:
      - public
      - private
      - protected
      - friend
    answer: 0
    explanation: public is the correct answer to “In C++, which access specifier allows the members of a base class to be accessible in the derived class as well as from outside the class”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: What is the term used to describe a derived class having more than one base class in C++?
    options:
      - Multilevel inheritance
      - Hierarchical inheritance
      - Single inheritance
      - Multiple inheritance
    answer: 3
    explanation: Multiple inheritance is the correct answer to “What is the term used to describe a derived class having more than one base class in C++”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: In C++, what is the process of creating a new class from an existing class known as?
    options:
      - Composition
      - Encapsulation
      - Inheritance
      - Polymorphism
    answer: 2
    explanation: Inheritance is the correct answer to “In C++, what is the process of creating a new class from an existing class known as”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: Which keyword is used to denote the access specifier in a derived class when inheriting from a base class in C++?
    options:
      - using
      - inherits
      - extends
      - ": protected"
    answer: 2
    explanation: extends is the correct answer to “Which keyword is used to denote the access specifier in a derived class when inheriting from a base class in C++”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: In C++, which type of inheritance involves inheriting from multiple base classes, but only inheriting one level deep from each base class?
    options:
      - Hierarchical inheritance
      - Multilevel inheritance
      - Single inheritance
      - None of the above
    answer: 1
    explanation: Multilevel inheritance is the correct answer to “In C++, which type of inheritance involves inheriting from multiple base classes, but only inheriting one level deep from each base class”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What is the diamond problem in C++ inheritance?
    options:
      - A situation where the derived class cannot override the base class method
      - A situation where the base class cannot be inherited by more than one derived class
      - A situation where ambiguity arises due to multiple inheritance chains
      - A situation where ambiguity arises due to lack of inheritance
    answer: 2
    explanation: A situation where ambiguity arises due to multiple inheritance chains is the correct answer to “What is the diamond problem in C++ inheritance”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: In C++, which access specifier allows the members of a base class to be accessible in the derived class and its derived classes, but not from outside the class hierarchy?
    options:
      - public
      - private
      - friend
      - protected
    answer: 3
    explanation: protected is the correct answer to “In C++, which access specifier allows the members of a base class to be accessible in the derived class and its derived classes, but not from outside the class hierarchy”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: In C++, what happens if a derived class inherits multiple base classes and each base class contains a member with the same name?
    options:
      - The member of the derived class must explicitly specify which base class member to access
      - The member of the derived class will access the member from the base class with the same name
      - A compilation error occurs
      - The member of the derived class accesses all members with the same name from all base classes
    answer: 1
    explanation: The member of the derived class will access the member from the base class with the same name is the correct answer to “In C++, what happens if a derived class inherits multiple base classes and each base class contains a member with the same name”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: In C++, what is the process of creating a new class using an existing class as a blueprint and adding new functionalities to it?
    options:
      - Derivation
      - Composition
      - Inheritance
      - Polymorphism
    answer: 2
    explanation: Inheritance is the correct answer to “In C++, what is the process of creating a new class using an existing class as a blueprint and adding new functionalities to it”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: What is the term used to describe a class that inherits from another class in C++?
    options:
      - Base class
      - Child class
      - Parent class
      - Derived class
    answer: 3
    explanation: Derived class is the correct answer to “What is the term used to describe a class that inherits from another class in C++”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: In C++, what happens if a derived class redefines a method that is already defined in its base class?
    options:
      - Method in the base class overrides the derived class method
      - Both methods are available for use
      - Method in the derived class overrides the base class method
      - A compilation error occurs
    answer: 2
    explanation: Method in the derived class overrides the base class method is the correct answer to “In C++, what happens if a derived class redefines a method that is already defined in its base class”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: In C++, which type of inheritance involves a class inheriting from multiple classes directly or indirectly?
    options:
      - Hierarchical inheritance
      - Multiple inheritance
      - Multilevel inheritance
      - None of the above
    answer: 1
    explanation: Multiple inheritance is the correct answer to “In C++, which type of inheritance involves a class inheriting from multiple classes directly or indirectly”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: What is the name given to the process of creating a new class by inheriting properties and behaviors from an existing class in C++?
    options:
      - Polymorphism
      - Encapsulation
      - Inheritance
      - Composition
    answer: 2
    explanation: Inheritance is the correct answer to “What is the name given to the process of creating a new class by inheriting properties and behaviors from an existing class in C++”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: In C++, which access specifier allows the members of a base class to be accessible in the derived class, but not from outside the class?
    options:
      - public
      - private
      - friend
      - protected
    answer: 3
    explanation: protected is the correct answer to “In C++, which access specifier allows the members of a base class to be accessible in the derived class, but not from outside the class”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: What is the term used to describe a class that inherits properties and behaviors from another class in C++?
    options:
      - Base class
      - Child class
      - Derived class
      - Parent class
    answer: 2
    explanation: Derived class is the correct answer to “What is the term used to describe a class that inherits properties and behaviors from another class in C++”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: In C++, what is the default access specifier for a base class when inheriting?
    options:
      - private
      - public
      - protected
      - friend
    answer: 2
    explanation: protected is the correct answer to “In C++, what is the default access specifier for a base class when inheriting”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: What is the process called when a new class is created by inheriting properties and behaviors from an existing class in C++?
    options:
      - Composition
      - Encapsulation
      - Inheritance
      - Polymorphism
    answer: 2
    explanation: Inheritance is the correct answer to “What is the process called when a new class is created by inheriting properties and behaviors from an existing class in C++”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: In C++, what is the process called when a class inherits properties and behaviors from multiple base classes?
    options:
      - Hierarchical inheritance
      - Multiple inheritance
      - Multilevel inheritance
      - None of the above
    answer: 1
    explanation: Multiple inheritance is the correct answer to “In C++, what is the process called when a class inherits properties and behaviors from multiple base classes”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: What happens if a derived class inherits multiple base classes and each base class contains a member with the same name in C++?
    options:
      - The member of the derived class must explicitly specify which base class member to access
      - The member of the derived class will access the member from the base class with the same name
      - A compilation error occurs
      - The member of the derived class accesses all members with the same name from all base classes
    answer: 1
    explanation: The member of the derived class will access the member from the base class with the same name is the correct answer to “What happens if a derived class inherits multiple base classes and each base class contains a member with the same name in C++”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: In C++, which access specifier allows the members of a base class to be accessible in the derived class, its derived classes, but not from outside the class hierarchy?
    options:
      - friend
      - private
      - protected
      - public
    answer: 2
    explanation: protected is the correct answer to “In C++, which access specifier allows the members of a base class to be accessible in the derived class, its derived classes, but not from outside the class hierarchy”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: In C++, which keyword is used to denote the access specifier in a derived class when inheriting from a base class?
    options:
      - using
      - inherits
      - extends
      - ": protected"
    answer: 2
    explanation: extends is the correct answer to “In C++, which keyword is used to denote the access specifier in a derived class when inheriting from a base class”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: In C++, what happens if a derived class inherits from multiple base classes and each base class has a member with the same name?
    options:
      - The member of the derived class must explicitly specify which base class member to access
      - The member of the derived class will access the member from the base class with the same name
      - A compilation error occurs
      - The member of the derived class accesses all members with the same name from all base classes
    answer: 1
    explanation: The member of the derived class will access the member from the base class with the same name is the correct answer to “In C++, what happens if a derived class inherits from multiple base classes and each base class has a member with the same name”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: Which type of inheritance involves a class inheriting from multiple classes directly or indirectly in C++?
    options:
      - Multilevel inheritance
      - Hierarchical inheritance
      - Single inheritance
      - Multiple inheritance
    answer: 3
    explanation: Multiple inheritance is the correct answer to “Which type of inheritance involves a class inheriting from multiple classes directly or indirectly in C++”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: Which specifier makes all the data members and functions of base class inaccessible by the derived class?
    options:
      - private
      - protected
      - public
      - both private and protected
    answer: 0
    explanation: private is the correct answer to “Which specifier makes all the data members and functions of base class inaccessible by the derived class”. This question is standard in competitive examination syllabi for Inheritance In C Plus Plus.
    keyConcept: Inheritance In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
---


