---
title: Declaration And Access Control — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Declaration And Access Control — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: declaration-and-access-control-part-2
topicName: Declaration And Access Control — Part 2
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
    question: In Java, what is the purpose of the final keyword when applied to a class?
    options:
      - It makes the class non-final.
      - It prevents subclassing.
      - It makes the class constant.
      - It makes the class abstract.
    answer: 1
    explanation: It prevents subclassing. is the correct answer to “In Java, what is the purpose of the final keyword when applied to a class”. This question is standard in competitive examination syllabi for Declaration And Access Control.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: Which keyword is used to declare a method that cannot be overridden in a subclass?
    options:
      - final
      - static
      - super
      - this
    answer: 0
    explanation: final is the correct answer to “Which keyword is used to declare a method that cannot be overridden in a subclass”. This question is standard in competitive examination syllabi for Declaration And Access Control.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What is the access level of a class member declared as protected in Java?
    options:
      - public
      - protected
      - private
      - package-private
    answer: 1
    explanation: protected is the correct answer to “What is the access level of a class member declared as protected in Java”. This question is standard in competitive examination syllabi for Declaration And Access Control.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: Which keyword is used to explicitly specify that a method should be overridden in a subclass?
    options:
      - override
      - extends
      - super
      - implement
    answer: 0
    explanation: override is the correct answer to “Which keyword is used to explicitly specify that a method should be overridden in a subclass”. This question is standard in competitive examination syllabi for Declaration And Access Control.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: Suppose a class has public visibility. In this class we define a protected method. Which of the following statements is correct?
    options:
      - This method is only accessible from inside the class itself and from inside all subclasses.
      - In a class, you cannot declare methods with a lower visibility than the visibility of the class in which it is defined.
      - From within protected methods you do not have access to public methods.
      - This method is accessible from within the class itself and from within all classes defined in the same package as the class itself.
    answer: 3
    explanation: This method is accessible from within the class itself and from within all classes defined in the same package as the class itself. is the correct answer to “Suppose a class has public visibility. In this class we define a protected method. Which of the following statements is correct”. This question is standard in competitive examination syllabi for Declaration And Access Control.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: The object is created with new keyword
    options:
      - At Compile-time
      - At run-time
      - Depends on the code
      - None of these
    answer: 1
    explanation: At run-time is the correct answer to “The object is created with new keyword”. This question is standard in competitive examination syllabi for Declaration And Access Control.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: "Consider the following two classes declared and defined in two different packages, what can be added in class B to form what considered a correct access to class A from main() method of class B? package subPackage; public class A { } package anotherPackage; // line 1 public class B{ public static void main(String[] args){ // line 2 } } 1. At line1 add noting; At line2 add: new A(); 2. At line 1 add: import package.*; at line 2 add : new subPackage.A(); 3. At line 1 add: import subPackage.*; at line 2 add : new A(); 4. At line 1 add: import subPackage.A; at line 2 add : new A();"
    options:
      - 1 and 2
      - 2 and 4
      - 3 and 4
      - 1 and 3
    answer: 2
    explanation: "3 and 4 is the correct answer to “Consider the following two classes declared and defined in two different packages, what can be added in class B to form what considered a correct access to class A from main() method of class B? package subPackage; public class A { } package anotherPackage; // line 1 public class B{ public static void main(String[] args){ // line 2 } } 1. At line1 add noting; At line2 add: new A(); 2. At line 1 add: import package.*; at line 2 add : new subPackage.A(); 3. At line 1 add: import subPackage.*; at line 2 add : new A(); 4. At line 1 add: import subPackage.A; at line 2 add : new A();”. This question is standard in competitive examination syllabi for Declaration And Access Control."
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: Which statements are most accurate regarding the following classes? class A{ private int i; protected int j; } class B extends A{ private int k; protected int m; }
    options:
      - An object of B contains data fields i, j, k, m.
      - An object of B contains data fields j, k, m.
      - An object of B contains data fields j, m.
      - An object of B contains data fields k, m.
    answer: 1
    explanation: An object of B contains data fields j, k, m. is the correct answer to “Which statements are most accurate regarding the following classes? class A{ private int i; protected int j; } class B extends A{ private int k; protected int m; }”. This question is standard in competitive examination syllabi for Declaration And Access Control.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: A method within a class is only accessible by classes that are defined within the same package as the class of the method. Which one of the following is used to enforce such restriction?
    options:
      - Declare the method with the keyword public.
      - Declare the method with the keyword private.
      - Declare the method with the keyword protected.
      - Do not declare the method with any accessibility modifiers.
      - Declare the method with the keyword public and private.
    answer: 3
    explanation: Do not declare the method with any accessibility modifiers. is the correct answer to “A method within a class is only accessible by classes that are defined within the same package as the class of the method. Which one of the following is used to enforce such restriction”. This question is standard in competitive examination syllabi for Declaration And Access Control.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: Choose the correct statement public class Circle{ private double radius; public Circle(double radius){ radius = radius; } }
    options:
      - The program has a compilation error because it does not have a main method.
      - The program will compile, but we cannot create an object of Circle with a specified radius. The object will always have radius 0.
      - The program has a compilation error because we cannot assign radius to radius.
      - The program does not compile because Circle does not have a default constructor.
    answer: 1
    explanation: The program will compile, but we cannot create an object of Circle with a specified radius. The object will always have radius 0. is the correct answer to “Choose the correct statement public class Circle{ private double radius; public Circle(double radius){ radius = radius; } }”. This question is standard in competitive examination syllabi for Declaration And Access Control.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: "Choose the correct statement. Restriction on static methods are: I. They can only call other static methods. II. They must only access static data. III. They cannot refer this or super in any way."
    options:
      - Only (I)
      - (I) and (II)
      - (II) and (III)
      - Only (III)
      - (I), (II) and (III)
    answer: 4
    explanation: "(I), (II) and (III) is the correct answer to “Choose the correct statement. Restriction on static methods are: I. They can only call other static methods. II. They must only access static data. III. They cannot refer this or super in any way.”. This question is standard in competitive examination syllabi for Declaration And Access Control."
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: What will be the output? public class Test{ static{ int a = 5; } public static void main(String args[]){ new Test().call(); } void call(){ this.a++; System.out.print(this.a); } }
    options:
      - Compile with error
      - Runtime Exception
      - "5"
      - "6"
      - "0"
    answer: 0
    explanation: Compile with error is the correct answer to “What will be the output? public class Test{ static{ int a = 5; } public static void main(String args[]){ new Test().call(); } void call(){ this.a++; System.out.print(this.a); } }”. This question is standard in competitive examination syllabi for Declaration And Access Control.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: "Determine Output: class MyClass{ static final int a = 20; static final void call(){ System.out.println(\"two\"); } static{ System.out.println(\"one\"); } } public class Test{ public static void main(String args[]){ System.out.println(MyClass.a); } }"
    options:
      - one
      - one two
      - one two 20
      - "20"
      - one 20
    answer: 4
    explanation: "one 20 is the correct answer to “Determine Output: class MyClass{ static final int a = 20; static final void call(){ System.out.println(\"two\"); } static{ System.out.println(\"one\"); } } public class Test{ public static void main(String args[]){ System.out.println(MyClass.a); } }”. This question is standard in competitive examination syllabi for Declaration And Access Control."
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: Name the keyword that makes a variable belong to a class, rather than being defined for each instance of the class.
    options:
      - static
      - final
      - abstract
      - native
      - volatile
    answer: 0
    explanation: static is the correct answer to “Name the keyword that makes a variable belong to a class, rather than being defined for each instance of the class.”. This question is standard in competitive examination syllabi for Declaration And Access Control.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What can directly access and change the value of the variable qusNo? package com.mypackage; public class Test{ private int qusNo = 100; }
    options:
      - Only the Test class.
      - Any class.
      - Any class in com.mypackage package.
      - Any class that extends Test.
      - None of these
    answer: 0
    explanation: Only the Test class. is the correct answer to “What can directly access and change the value of the variable qusNo? package com.mypackage; public class Test{ private int qusNo = 100; }”. This question is standard in competitive examination syllabi for Declaration And Access Control.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
---


