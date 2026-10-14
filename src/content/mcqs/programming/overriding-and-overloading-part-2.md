---
title: Overriding And Overloading — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Overriding And Overloading — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: overriding-and-overloading-part-2
topicName: Overriding And Overloading — Part 2
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
    question: What will be the output of the following Java code? class test { int a; int b; test(int i, int j) { a = i; b = j; } void meth(test o) { o.a *= 2; O.b /= 2; } } class Output { public static void main(String args[]) { test obj = new test(10 , 20); obj.meth(obj); System.out.println(obj.a + " " + obj.b); } }
    options:
      - 10 20
      - 20 10
      - 20 40
      - 40 20
    answer: 1
    explanation: 20 10 is the correct answer to “What will be the output of the following Java code? class test { int a; int b; test(int i, int j) { a = i; b = j; } void meth(test o) { o.a *= 2; O.b /= 2; } } class Output { public static void main(String args[]) { test obj = new test(10 , 20); obj.meth(obj); System.out.println(obj.a + " " + obj.b); } }”. This question is standard in competitive examination syllabi for Overriding And Overloading.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: Which of these is correct about passing an argument by call-by-value process?
    options:
      - Copy of argument is made into the formal parameter of the subroutine
      - Reference to original argument is passed to formal parameter of the subroutine
      - Copy of argument is made into the formal parameter of the subroutine and changes made on parameters of subroutine have effect on original argument
      - Reference to original argument is passed to formal parameter of the subroutine and changes made on parameters of subroutine have effect on original argument
    answer: 0
    explanation: Copy of argument is made into the formal parameter of the subroutine is the correct answer to “Which of these is correct about passing an argument by call-by-value process”. This question is standard in competitive examination syllabi for Overriding And Overloading.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What will be the output of the following Java code? class overload { int x; int y; void add(int a) { x = a + 1; } void add(int a, int b) { x = a + 2; } } class Overload_methods { public static void main(String args[]) { overload obj = new overload(); int a = 0; obj.add(6); System.out.println(obj.x); } }
    options:
      - "5"
      - "6"
      - "7"
      - "8"
    answer: 2
    explanation: 7 is the correct answer to “What will be the output of the following Java code? class overload { int x; int y; void add(int a) { x = a + 1; } void add(int a, int b) { x = a + 2; } } class Overload_methods { public static void main(String args[]) { overload obj = new overload(); int a = 0; obj.add(6); System.out.println(obj.x); } }”. This question is standard in competitive examination syllabi for Overriding And Overloading.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What will be the output of the following Java code? class overload { int x; double y; void add(int a , int b) { x = a + b; } void add(double c , double d) { y = c + d; } overload() { this.x = 0; this.y = 0; } } class Overload_methods { public static void main(String args[]) { overload obj = new overload(); int a = 2; double b = 3.2; obj.add(a, a); obj.add(b, b); System.out.println(obj.x + " " + obj.y); } }
    options:
      - 6 6
      - 6.4 6.4
      - 6.4 6
      - 4 6.4
    answer: 3
    explanation: 4 6.4 is the correct answer to “What will be the output of the following Java code? class overload { int x; double y; void add(int a , int b) { x = a + b; } void add(double c , double d) { y = c + d; } overload() { this.x = 0; this.y = 0; } } class Overload_methods { public static void main(String args[]) { overload obj = new overload(); int a = 2; double b = 3.2; obj.add(a, a); obj.add(b, b); System.out.println(obj.x + " " + obj.y); } }”. This question is standard in competitive examination syllabi for Overriding And Overloading.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: Which of these is supported by method overriding in Java?
    options:
      - Abstraction
      - Encapsulation
      - Polymorphism
      - None of the mentioned
    answer: 2
    explanation: Polymorphism is the correct answer to “Which of these is supported by method overriding in Java”. This question is standard in competitive examination syllabi for Overriding And Overloading.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: Which of this keyword can be used in a subclass to call the constructor of superclass?
    options:
      - super
      - this
      - extent
      - extends
    answer: 0
    explanation: super is the correct answer to “Which of this keyword can be used in a subclass to call the constructor of superclass”. This question is standard in competitive examination syllabi for Overriding And Overloading.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: "What will be the output of the following Java program? class Abc { public static void main(String[]args) { String[] elements = { \"for\", \"tea\", \"too\" }; String first = (elements.length > 0) ? elements[0]: null; } }"
    options:
      - Compilation error
      - An exception is thrown at run time
      - The variable first is set to null
      - The variable first is set to elements[0]
    answer: 3
    explanation: "The variable first is set to elements[0] is the correct answer to “What will be the output of the following Java program? class Abc { public static void main(String[]args) { String[] elements = { \"for\", \"tea\", \"too\" }; String first = (elements.length > 0) ? elements[0]: null; } }”. This question is standard in competitive examination syllabi for Overriding And Overloading."
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: At line number 2 in the following code, choose 3 valid data-type attributes/qualifiers among "final, static, native, public, private, abstract, protected" public interface Status { /* insert qualifier here */ int MY_VALUE = 10; }
    options:
      - final, native, private
      - final, static, protected
      - final, private, abstract
      - final, static, public
    answer: 3
    explanation: final, static, public is the correct answer to “At line number 2 in the following code, choose 3 valid data-type attributes/qualifiers among "final, static, native, public, private, abstract, protected" public interface Status { /* insert qualifier here */ int MY_VALUE = 10; }”. This question is standard in competitive examination syllabi for Overriding And Overloading.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What will be the output of the following Java code? class test { int a; int b; void meth(int i , int j) { i *= 2; j /= 2; } } class Output { public static void main(String args[]) { test obj = new test(); int a = 10; int b = 20; obj.meth(a , b); System.out.println(a + " " + b); } }
    options:
      - 10 20
      - 20 10
      - 20 40
      - 40 20
    answer: 0
    explanation: 10 20 is the correct answer to “What will be the output of the following Java code? class test { int a; int b; void meth(int i , int j) { i *= 2; j /= 2; } } class Output { public static void main(String args[]) { test obj = new test(); int a = 10; int b = 20; obj.meth(a , b); System.out.println(a + " " + b); } }”. This question is standard in competitive examination syllabi for Overriding And Overloading.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What will be the output of the following Java program? class A { int i; public void display() { System.out.println(i); } } class B extends A { int j; public void display() { System.out.println(j); } } class Dynamic_dispatch { public static void main(String args[]) { B obj2 = new B(); obj2.i = 1; obj2.j = 2; A r; r = obj2; r.display(); } }
    options:
      - "1"
      - "2"
      - "3"
      - "4"
    answer: 1
    explanation: 2 is the correct answer to “What will be the output of the following Java program? class A { int i; public void display() { System.out.println(i); } } class B extends A { int j; public void display() { System.out.println(j); } } class Dynamic_dispatch { public static void main(String args[]) { B obj2 = new B(); obj2.i = 1; obj2.j = 2; A r; r = obj2; r.display(); } }”. This question is standard in competitive examination syllabi for Overriding And Overloading.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
---


