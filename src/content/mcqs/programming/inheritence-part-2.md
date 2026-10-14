---
title: Inheritence — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Inheritence — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: inheritence-part-2
topicName: Inheritence — Part 2
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
    question: Using which of the following, multiple inheritance in Java can be implemented?
    options:
      - Interfaces
      - Multithreading
      - Protected methods
      - Private methods
    answer: 0
    explanation: Interfaces is the correct answer to “Using which of the following, multiple inheritance in Java can be implemented”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: Which two classes use the Shape class correctly? A. public class Circle implements Shape { private int radius; } B. public abstract class Circle extends Shape { private int radius; } C. public class Circle extends Shape { private int radius; public void draw(); } D. public abstract class Circle implements Shape { private int radius; public void draw(); } E. public class Circle extends Shape { private int radius; public void draw() { /* code here */ } } F. public abstract class Circle implements Shape { private int radius; public void draw() { /* code here */ } }
    options:
      - B,E
      - A,C
      - C,E
      - T,H
    answer: 0
    explanation: B,E is the correct answer to “Which two classes use the Shape class correctly? A. public class Circle implements Shape { private int radius; } B. public abstract class Circle extends Shape { private int radius; } C. public class Circle extends Shape { private int radius; public void draw(); } D. public abstract class Circle implements Shape { private int radius; public void draw(); } E. public class Circle extends Shape { private int radius; public void draw() { /* code here */ } } F. public abstract class Circle implements Shape { private int radius; public void draw() { /* code here */ } }”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Which of these method of Object class is used to obtain class of an object at run time?
    options:
      - get()
      - void getclass()
      - Class getclass()
      - None of the mentioned
    answer: 2
    explanation: Class getclass() is the correct answer to “Which of these method of Object class is used to obtain class of an object at run time”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: If a class inheriting an abstract class does not define all of its function then it will be known as?
    options:
      - Abstract
      - A simple class
      - Static class
      - None of the mentioned
    answer: 0
    explanation: Abstract is the correct answer to “If a class inheriting an abstract class does not define all of its function then it will be known as”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: If super class and subclass have same variable name, which keyword should be used to use super class?
    options:
      - super
      - this
      - upper
      - classname
    answer: 0
    explanation: super is the correct answer to “If super class and subclass have same variable name, which keyword should be used to use super class”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: A class member declared protected becomes a member of subclass of which type?
    options:
      - public member
      - private member
      - protected member
      - static member
    answer: 1
    explanation: private member is the correct answer to “A class member declared protected becomes a member of subclass of which type”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: Which of these method of Object class can clone an object?
    options:
      - Objectcopy()
      - copy()
      - Object clone()
      - clone()
    answer: 2
    explanation: Object clone() is the correct answer to “Which of these method of Object class can clone an object”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: All classes in Java are inherited from which class?
    options:
      - java.lang.class
      - java.class.inherited
      - java.class.object
      - java.lang.Object
    answer: 3
    explanation: java.lang.Object is the correct answer to “All classes in Java are inherited from which class”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What will be the output of the following Java program? abstract class A { int i; abstract void display(); } class B extends A { int j; void display() { System.out.println(j); } } class Abstract_demo { public static void main(String args[]) { B obj = new B(); obj.j=2; obj.display(); } }
    options:
      - "0"
      - "2"
      - Runtime Error
      - Compilation Error
    answer: 1
    explanation: 2 is the correct answer to “What will be the output of the following Java program? abstract class A { int i; abstract void display(); } class B extends A { int j; void display() { System.out.println(j); } } class Abstract_demo { public static void main(String args[]) { B obj = new B(); obj.j=2; obj.display(); } }”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What will be the output of the following Java code? class A { int i; void display() { System.out.println(i); } } class B extends A { int j; void display() { System.out.println(j); } } class method_overriding { public static void main(String args[]) { B obj = new B(); obj.i=1; obj.j=2; obj.display(); } }
    options:
      - "0"
      - "1"
      - "2"
      - Compilation Error
    answer: 2
    explanation: 2 is the correct answer to “What will be the output of the following Java code? class A { int i; void display() { System.out.println(i); } } class B extends A { int j; void display() { System.out.println(j); } } class method_overriding { public static void main(String args[]) { B obj = new B(); obj.i=1; obj.j=2; obj.display(); } }”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What will be the output of the following Java code? class Output { public static void main(String args[]) { Object obj = new Object(); System.out.print(obj.getclass()); } }
    options:
      - Object
      - class Object
      - class java.lang.Object
      - Compilation Error
    answer: 2
    explanation: class java.lang.Object is the correct answer to “What will be the output of the following Java code? class Output { public static void main(String args[]) { Object obj = new Object(); System.out.print(obj.getclass()); } }”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: Which of the following is used for implementing inheritance through an interface?
    options:
      - inherited
      - using
      - extends
      - implements
    answer: 3
    explanation: implements is the correct answer to “Which of the following is used for implementing inheritance through an interface”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: Which of these is correct way of inheriting class A by class B?
    options:
      - class B + class A {}
      - class B inherits class A {}
      - class B extends A {}
      - class B extends class A {}
    answer: 2
    explanation: class B extends A {} is the correct answer to “Which of these is correct way of inheriting class A by class B”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What will be the output of the following Java program? class A { public int i; public int j; A() { i = 1; j = 2; } } class B extends A { int a; B() { super(); } } class super_use { public static void main(String args[]) { B obj = new B(); System.out.println(obj.i + " " + obj.j) } }
    options:
      - 1 2
      - 2 1
      - Runtime Error
      - Compilation Error
    answer: 0
    explanation: 1 2 is the correct answer to “What will be the output of the following Java program? class A { public int i; public int j; A() { i = 1; j = 2; } } class B extends A { int a; B() { super(); } } class super_use { public static void main(String args[]) { B obj = new B(); System.out.println(obj.i + " " + obj.j) } }”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: Which of these packages contains abstract keyword?
    options:
      - java.lang
      - java.util
      - java.io
      - java.system
    answer: 0
    explanation: java.lang is the correct answer to “Which of these packages contains abstract keyword”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: Which of these class relies upon its subclasses for complete implementation of its methods?
    options:
      - Object class
      - abstract class
      - ArrayList class
      - None of the mentioned
    answer: 1
    explanation: abstract class is the correct answer to “Which of these class relies upon its subclasses for complete implementation of its methods”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: Which of these keywords can be used to prevent inheritance of a class?
    options:
      - super
      - constant
      - class
      - final
    answer: 3
    explanation: final is the correct answer to “Which of these keywords can be used to prevent inheritance of a class”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: Static members are not inherited to subclass.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “Static members are not inherited to subclass.”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: Which of these keywords are used to define an abstract class?
    options:
      - abst
      - abstract
      - abstract class
      - None of These
    answer: 1
    explanation: abstract is the correct answer to “Which of these keywords are used to define an abstract class”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What will be the output of the following Java program? class A { int i; void display() { System.out.println(i); } } class B extends A { int j; void display() { System.out.println(j); } } class inheritance_demo { public static void main(String args[]) { B obj = new B(); obj.i=1; obj.j=2; obj.display(); } }
    options:
      - "0"
      - "1"
      - "2"
      - Compilation Error
    answer: 2
    explanation: 2 is the correct answer to “What will be the output of the following Java program? class A { int i; void display() { System.out.println(i); } } class B extends A { int j; void display() { System.out.println(j); } } class inheritance_demo { public static void main(String args[]) { B obj = new B(); obj.i=1; obj.j=2; obj.display(); } }”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: What will be the output of the following Java program? class A { int i; } class B extends A { int j; void display() { super.i = j + 1; System.out.println(j + " " + i); } } class inheritance { public static void main(String args[]) { B obj = new B(); obj.i=1; obj.j=2; obj.display(); } }
    options:
      - 2 2
      - 3 3
      - 2 3
      - 3 2
    answer: 2
    explanation: 2 3 is the correct answer to “What will be the output of the following Java program? class A { int i; } class B extends A { int j; void display() { super.i = j + 1; System.out.println(j + " " + i); } } class inheritance { public static void main(String args[]) { B obj = new B(); obj.i=1; obj.j=2; obj.display(); } }”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: Which of these is not abstract?
    options:
      - Thread
      - AbstractList
      - List
      - None of the Mentioned
    answer: 0
    explanation: Thread is the correct answer to “Which of these is not abstract”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: Does Java support multiple level inheritance?
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “Does Java support multiple level inheritance”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: What will be the output of the following Java code? class A { public int i; private int j; } class B extends A { void display() { super.j = super.i + 1; System.out.println(super.i + " " + super.j); } } class inheritance { public static void main(String args[]) { B obj = new B(); obj.i=1; obj.j=2; obj.display(); } }
    options:
      - 2 2
      - 3 3
      - Runtime Error
      - Compilation Error
    answer: 3
    explanation: Compilation Error is the correct answer to “What will be the output of the following Java code? class A { public int i; private int j; } class B extends A { void display() { super.j = super.i + 1; System.out.println(super.i + " " + super.j); } } class inheritance { public static void main(String args[]) { B obj = new B(); obj.i=1; obj.j=2; obj.display(); } }”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: What will be the output of the following Java code? class A { public int i; protected int j; } class B extends A { int j; void display() { super.j = 3; System.out.println(i + " " + j); } } class Output { public static void main(String args[]) { B obj = new B(); obj.i=1; obj.j=2; obj.display(); } }
    options:
      - 1 2
      - 2 1
      - 1 3
      - 3 1
    answer: 0
    explanation: 1 2 is the correct answer to “What will be the output of the following Java code? class A { public int i; protected int j; } class B extends A { int j; void display() { super.j = 3; System.out.println(i + " " + j); } } class Output { public static void main(String args[]) { B obj = new B(); obj.i=1; obj.j=2; obj.display(); } }”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: What will be the output of the following Java code? class A { int i; int j; A() { i = 1; j = 2; } } class Output { public static void main(String args[]) { A obj1 = new A(); System.out.print(obj1.toString()); } }
    options:
      - "true"
      - "false"
      - String associated with obj1
      - Compilation Error
    answer: 2
    explanation: String associated with obj1 is the correct answer to “What will be the output of the following Java code? class A { int i; int j; A() { i = 1; j = 2; } } class Output { public static void main(String args[]) { A obj1 = new A(); System.out.print(obj1.toString()); } }”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: Which of this keyword must be used to inherit a class?
    options:
      - super
      - this
      - extent
      - extends
    answer: 3
    explanation: extends is the correct answer to “Which of this keyword must be used to inherit a class”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: Which of these class is superclass of every class in Java?
    options:
      - String class
      - Object class
      - Abstract class
      - ArrayList class
    answer: 1
    explanation: Object class is the correct answer to “Which of these class is superclass of every class in Java”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: Which of these keywords cannot be used for a class which has been declared final?
    options:
      - abstract
      - extends
      - abstract and extends
      - none of the mentioned
    answer: 0
    explanation: abstract is the correct answer to “Which of these keywords cannot be used for a class which has been declared final”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: What will be the output of the following Java program? class A { int i; int j; A() { i = 1; j = 2; } } class Output { public static void main(String args[]) { A obj1 = new A(); A obj2 = new A(); System.out.print(obj1.equals(obj2)); } }
    options:
      - "false"
      - "true"
      - "1"
      - Compilation Error
    answer: 0
    explanation: false is the correct answer to “What will be the output of the following Java program? class A { int i; int j; A() { i = 1; j = 2; } } class Output { public static void main(String args[]) { A obj1 = new A(); A obj2 = new A(); System.out.print(obj1.equals(obj2)); } }”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: What would be the result if a class extends two interfaces and both have a method with same name and signature? Lets assume that the class is not implementing that method.
    options:
      - Runtime error
      - Compile time error
      - Code runs successfully
      - First called method is executed successfully
    answer: 1
    explanation: Compile time error is the correct answer to “What would be the result if a class extends two interfaces and both have a method with same name and signature? Lets assume that the class is not implementing that method.”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: Which of the following is used for implementing inheritance through class?
    options:
      - inherited
      - using
      - extends
      - implements
    answer: 2
    explanation: extends is the correct answer to “Which of the following is used for implementing inheritance through class”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: In order to restrict a variable of a class from inheriting to subclass, how variable should be declared?
    options:
      - Protected
      - Private
      - Public
      - Static
    answer: 1
    explanation: Private is the correct answer to “In order to restrict a variable of a class from inheriting to subclass, how variable should be declared”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: What is not type of inheritance?
    options:
      - Single inheritance
      - Double inheritance
      - Hierarchical inheritance
      - Multiple inheritance
    answer: 1
    explanation: Double inheritance is the correct answer to “What is not type of inheritance”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: What will be the output of the following Java code? class A { public int i; public int j; A() { i = 1; j = 2; } } class B extends A { int a; B() { super(); } } class super_use { public static void main(String args[]) { B obj = new B(); System.out.println(obj.i + " " + obj.j) } }
    options:
      - 1 2
      - 2 1
      - Runtime Error
      - Compilation Error
    answer: 0
    explanation: 1 2 is the correct answer to “What will be the output of the following Java code? class A { public int i; public int j; A() { i = 1; j = 2; } } class B extends A { int a; B() { super(); } } class super_use { public static void main(String args[]) { B obj = new B(); System.out.println(obj.i + " " + obj.j) } }”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
---


