---
title: Classes And Objects In C Sharp — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Classes And Objects In C Sharp — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: classes-and-objects-in-c-sharp-part-1
topicName: Classes And Objects In C Sharp — Part 1
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
    question: What is the default access modifier for a class in C# if no access modifier is specified?
    options:
      - internal
      - private
      - public
      - protected
    answer: 0
    explanation: "The correct answer is Option A: internal . Let's break down what an \"access modifier\" means in C# for a beginner: Imagine you're building a program in C#. Your program is made up of different parts, like a house is made up of different rooms. A class is like one of these rooms, and it contains all the instructions and data for a specific part of your program. An access modifier is like a lock on the door of your room (class). It controls who can \"see\" or \"use\" that room from other parts of your house (program) or even from other houses (other projects/assemblies). When you write a class like this: class MyClass { // ... your code here } You haven't put any specific \"lock\" (access modifier) on it. In C#, when you don't specify any access modifier for a top-level class (meaning a class that isn't inside another class), it automatically gets the internal access modifier. What does internal mean? It means your class ( MyClass in our example) can be accessed and used by any other code within the same assembly . Think of an assembly as your entire project or application. So, if you have other classes within the same project, they can use MyClass . But if you try to use MyClass from a *different* project (a different application or library), you won't be able to. Let's quickly see why the other options are not the default for a class: private : This is the default access modifier for *members* (like variables or methods) *inside* a class, but not for the class itself when it's at the top level. A top-level class cannot be declared as private . public : This means the class can be accessed from *anywhere*, even from other projects. It's not the default; you have to explicitly type public class MyClass . protected : This modifier is mainly used for members within a class and for nested classes. It allows access within the defining class and by classes that inherit from it. It's not the default for a top-level class. So, the key takeaway is: For a class in C# that isn't nested inside another class, if you don't specify an access modifier, it is internal by default. This keeps it visible only within its own project."
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: What is the access specifier that allows members of a class to be accessed from any other class in the same assembly in C#?
    options:
      - public
      - private
      - protected
      - internal
    answer: 3
    explanation: internal is the correct answer to “What is the access specifier that allows members of a class to be accessed from any other class in the same assembly in C#”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Which keyword is used to access members of a class from within the class itself in C#?
    options:
      - current
      - me
      - this
      - self
    answer: 2
    explanation: this is the correct answer to “Which keyword is used to access members of a class from within the class itself in C#”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: In C#, what is the syntax to define a constructor for a class named Car that takes parameters make and model?
    options:
      - Car(string make, string model) { }
      - Car = (string make, string model) => { }
      - void Car(string make, string model) { }
      - public Car(string make, string model) { }
    answer: 3
    explanation: public Car(string make, string model) { } is the correct answer to “In C#, what is the syntax to define a constructor for a class named Car that takes parameters make and model”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: What is the keyword used to inherit a class in C#?
    options:
      - ":"
      - inherits
      - extends
      - inherit
    answer: 0
    explanation: ": is the correct answer to “What is the keyword used to inherit a class in C#”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp."
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: In C#, what is the method called automatically when an object of a class is created?
    options:
      - Instantiate
      - Initialize
      - Destructor
      - Constructor
    answer: 3
    explanation: Constructor is the correct answer to “In C#, what is the method called automatically when an object of a class is created”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What is the purpose of encapsulation in C#?
    options:
      - To make the class public
      - To expose the internal state of an object
      - To hide the internal state of an object
      - To destroy the object
    answer: 2
    explanation: To hide the internal state of an object is the correct answer to “What is the purpose of encapsulation in C#”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What is the correct syntax to declare a method named Display inside a class named Person in C#?
    options:
      - Display { public void }
      - public void Display() { }
      - void Person::Display() { }
      - None of the above
    answer: 1
    explanation: public void Display() { } is the correct answer to “What is the correct syntax to declare a method named Display inside a class named Person in C#”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What is the concept in OOP that allows a class to have multiple methods with the same name but different parameters in C#?
    options:
      - Encapsulation
      - Inheritance
      - Method Overloading
      - Method Overriding
    answer: 2
    explanation: Method Overloading is the correct answer to “What is the concept in OOP that allows a class to have multiple methods with the same name but different parameters in C#”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What is the access specifier that restricts access to members of a class only within the same class and its derived classes in C#?
    options:
      - public
      - private
      - internal
      - protected
    answer: 3
    explanation: protected is the correct answer to “What is the access specifier that restricts access to members of a class only within the same class and its derived classes in C#”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What is the method used to destroy an object explicitly in C#?
    options:
      - Destructor
      - Dispose
      - Destroy
      - Finalize
    answer: 3
    explanation: Finalize is the correct answer to “What is the method used to destroy an object explicitly in C#”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: In C#, what is the process of creating a new class based on an existing class called?
    options:
      - Inheritance
      - Composition
      - Encapsulation
      - Abstraction
    answer: 0
    explanation: Inheritance is the correct answer to “In C#, what is the process of creating a new class based on an existing class called”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: In C#, which keyword is used to prevent a class from being inherited by other classes?
    options:
      - static
      - abstract
      - final
      - sealed
    answer: 3
    explanation: sealed is the correct answer to “In C#, which keyword is used to prevent a class from being inherited by other classes”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What is the purpose of the static keyword when applied to members of a class in C#?
    options:
      - To make the member private
      - To make the member constant
      - To make the member accessible without creating an instance
      - To make the member abstract
    answer: 2
    explanation: To make the member accessible without creating an instance is the correct answer to “What is the purpose of the static keyword when applied to members of a class in C#”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What is the correct way to access a static member of a class in C#?
    options:
      - ClassName->MemberName
      - ClassName.MemberName
      - MemberName
      - ClassName<-MemberName
    answer: 1
    explanation: ClassName.MemberName is the correct answer to “What is the correct way to access a static member of a class in C#”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What is the process of hiding the implementation details of a class in C#?
    options:
      - Abstraction
      - Inheritance
      - Polymorphism
      - Encapsulation
    answer: 3
    explanation: Encapsulation is the correct answer to “What is the process of hiding the implementation details of a class in C#”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: In C#, which keyword is used to declare a class member that can only be accessed within its own class and derived classes?
    options:
      - internal
      - protected
      - protected internal
      - private internal
    answer: 2
    explanation: protected internal is the correct answer to “In C#, which keyword is used to declare a class member that can only be accessed within its own class and derived classes”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: What is the default access modifier for class members in C# if no access modifier is specified?
    options:
      - public
      - protected
      - internal
      - private
    answer: 3
    explanation: private is the correct answer to “What is the default access modifier for class members in C# if no access modifier is specified”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: What is the purpose of the readonly keyword when applied to a field in a class in C#?
    options:
      - To indicate that the field's value can only be set once
      - To indicate that the field's value cannot be changed
      - To indicate that the field's value is constant
      - To indicate that the field's value is null
    answer: 0
    explanation: To indicate that the field's value can only be set once is the correct answer to “What is the purpose of the readonly keyword when applied to a field in a class in C#”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: In C#, what is the method called automatically when an object is no longer in use and is being destroyed?
    options:
      - Destructor
      - Finalizer
      - Dispose
      - Garbage Collector
    answer: 2
    explanation: Dispose is the correct answer to “In C#, what is the method called automatically when an object is no longer in use and is being destroyed”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: What is the process of creating a new class based on an existing class in C# called?
    options:
      - Abstraction
      - Polymorphism
      - Encapsulation
      - Inheritance
    answer: 3
    explanation: Inheritance is the correct answer to “What is the process of creating a new class based on an existing class in C# called”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: In C#, what is the keyword used to explicitly call a base class constructor from a derived class constructor?
    options:
      - parent
      - this.base
      - base
      - super
    answer: 2
    explanation: base is the correct answer to “In C#, what is the keyword used to explicitly call a base class constructor from a derived class constructor”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: What is the concept in OOP that allows a class to have more than one method with the same name but different parameters in C#?
    options:
      - Inheritance
      - Method Overloading
      - Encapsulation
      - None of the above
    answer: 1
    explanation: Method Overloading is the correct answer to “What is the concept in OOP that allows a class to have more than one method with the same name but different parameters in C#”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: In C#, which method is automatically called when an object is created to initialize the object's state?
    options:
      - Instantiate
      - Initialize
      - Constructor
      - Destructor
    answer: 2
    explanation: Constructor is the correct answer to “In C#, which method is automatically called when an object is created to initialize the object's state”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: What is the keyword used to create an alias for a data type in C#?
    options:
      - using
      - typedef
      - alias
      - class
    answer: 2
    explanation: alias is the correct answer to “What is the keyword used to create an alias for a data type in C#”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: In C#, what is the process of defining a new class within another class called?
    options:
      - Inner Class
      - Subclass
      - Parent Class
      - Nested Class
    answer: 3
    explanation: Nested Class is the correct answer to “In C#, what is the process of defining a new class within another class called”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: What is the access modifier used to declare a class member that is accessible only within its own class in C#?
    options:
      - internal
      - protected
      - private
      - public
    answer: 2
    explanation: private is the correct answer to “What is the access modifier used to declare a class member that is accessible only within its own class in C#”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: In C#, what is the keyword used to create a reference to the current instance of a class?
    options:
      - self
      - current
      - instance
      - this
    answer: 3
    explanation: this is the correct answer to “In C#, what is the keyword used to create a reference to the current instance of a class”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: In C#, what is the method called automatically when an object is no longer referenced and is ready to be removed from memory?
    options:
      - Destructor
      - Finalize
      - Dispose
      - Garbage Collector
    answer: 2
    explanation: Dispose is the correct answer to “In C#, what is the method called automatically when an object is no longer referenced and is ready to be removed from memory”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: In C#, which keyword is used to declare a method that can be overridden by a derived class?
    options:
      - sealed
      - abstract
      - override
      - virtual
    answer: 3
    explanation: virtual is the correct answer to “In C#, which keyword is used to declare a method that can be overridden by a derived class”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: In C#, what is the method used to explicitly release resources allocated by an object?
    options:
      - Free
      - Dispose
      - Deallocate
      - None of the above
    answer: 1
    explanation: Dispose is the correct answer to “In C#, what is the method used to explicitly release resources allocated by an object”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: What is the access modifier used to declare a class member that is accessible only within its own class and any class derived from it in C#?
    options:
      - internal
      - protected
      - protected internal
      - private internal
    answer: 2
    explanation: protected internal is the correct answer to “What is the access modifier used to declare a class member that is accessible only within its own class and any class derived from it in C#”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: In C#, which keyword is used to explicitly call a base class constructor from a derived class constructor?
    options:
      - parent
      - this.base
      - super
      - base
    answer: 3
    explanation: base is the correct answer to “In C#, which keyword is used to explicitly call a base class constructor from a derived class constructor”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: In C#, what is the method called automatically when an object is created to initialize the object's state?
    options:
      - Constructor
      - Destructor
      - Initialize
      - Instantiate
    answer: 0
    explanation: Constructor is the correct answer to “In C#, what is the method called automatically when an object is created to initialize the object's state”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: What is the concept in OOP that allows a class to have more than one constructor in C#?
    options:
      - Method Overriding
      - Constructor Overriding
      - Method Overloading
      - Constructor Overloading
    answer: 3
    explanation: Constructor Overloading is the correct answer to “What is the concept in OOP that allows a class to have more than one constructor in C#”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: What is the keyword used to create an instance of a class in C#?
    options:
      - object
      - new
      - instance
      - None of the above
    answer: 1
    explanation: new is the correct answer to “What is the keyword used to create an instance of a class in C#”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: Which of the following is the correct way to settle down values into the structure variable 'e' defined in the following C# code snippet? struct emp { public String name; public int age; public Single sal; } emp e = new emp();
    options:
      - e.name = "Jone"
      - age = 24
      - sal = 200
      - With emp e { .name = "Jone"; .age = 24; .sal = 200; }
      - name = "Jone"; age = 24; sal = 200
      - All of the mentioned
    answer: 0
    explanation: e.name = "Jone" is the correct answer to “Which of the following is the correct way to settle down values into the structure variable 'e' defined in the following C# code snippet? struct emp { public String name; public int age; public Single sal; } emp e = new emp();”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: Which of the following keyword is used to overload user defined types by defining static member functions?
    options:
      - op
      - opoverload
      - operator
      - operatoroverload
    answer: 2
    explanation: operator is the correct answer to “Which of the following keyword is used to overload user defined types by defining static member functions”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: If base class consist of two private integers, one static integer and derived class consist of two static integers and one private integer. What would be the size of derived class object?
    options:
      - size of object depends on sizes of its non static data members
      - size of a derived class object is sum of sizes of non static data members of base class and derived class
      - size of object is calculated using sizeof() method
      - none of the mentioned
    answer: 0
    explanation: size of object depends on sizes of its non static data members is the correct answer to “If base class consist of two private integers, one static integer and derived class consist of two static integers and one private integer. What would be the size of derived class object”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: What will be the output of the following C# code snippet? class maths { int fact(int n) { int result; if (n == 1) return 1; result = fact(n - 1) * n; return result; } } class Output { static void main(String args[]) { maths obj = new maths() ; Console.WriteLine(obj.fact(4)*obj.fact(2)); } }
    options:
      - "64"
      - "60"
      - "120"
      - "48"
    answer: 3
    explanation: 48 is the correct answer to “What will be the output of the following C# code snippet? class maths { int fact(int n) { int result; if (n == 1) return 1; result = fact(n - 1) * n; return result; } } class Output { static void main(String args[]) { maths obj = new maths() ; Console.WriteLine(obj.fact(4)*obj.fact(2)); } }”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
---


