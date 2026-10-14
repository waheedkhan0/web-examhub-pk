---
title: Generics In Java — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Generics In Java — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: generics-in-java-part-2
topicName: Generics In Java — Part 2
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
    question: What will be the output of the following Java program? import java.util.*; class Output { public static void addNumbers(List<? super Integer> list) { for (int i = 1; i <= 10; i++) { list.add(i); } } public static void main(String args[]) { List<Double> ld = Arrays.asList(); addnumbers(10.4); System.out.println("getList(2)"); } }
    options:
      - "1"
      - "2"
      - "3"
      - "6"
    answer: 0
    explanation: 1 is the correct answer to “What will be the output of the following Java program? import java.util.*; class Output { public static void addNumbers(List<? super Integer> list) { for (int i = 1; i <= 10; i++) { list.add(i); } } public static void main(String args[]) { List<Double> ld = Arrays.asList(); addnumbers(10.4); System.out.println("getList(2)"); } }”. This question is standard in competitive examination syllabi for Generics In Java.
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: Which of these is an correct way making a list that is upper bounded by class Number?
    options:
      - List<? extends Number>
      - List<extends ? Number>
      - List(? extends Number)
      - List(? UpperBounds Number)
    answer: 0
    explanation: List<? extends Number> is the correct answer to “Which of these is an correct way making a list that is upper bounded by class Number”. This question is standard in competitive examination syllabi for Generics In Java.
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: "What will be the output of the following Java program? public class BoxDemo { public static <U> void addBox(U u, java.util.List<Box<U>> boxes) { Box<U> box = new Box<>(); box.set(u); boxes.add(box); } public static <U> void outputBoxes(java.util.List<Box<U>> boxes) { int counter = 0; for (Box<U> box: boxes) { U boxContents = box.get(); System.out.println(\"Box #\" + counter + \" contains [\" + boxContents.toString() + \"]\"); counter++; } } public static void main(String[] args) { java.util.ArrayList<Box<Integer>> listOfIntegerBoxes = new java.util.ArrayList<>(); BoxDemo.<Integer>addBox(Integer.valueOf(10), listOfIntegerBoxes); BoxDemo.outputBoxes(listOfIntegerBoxes); } }"
    options:
      - "10"
      - "Box #0 [10]"
      - Box contains [10]
      - "Box #0 contains [10]"
    answer: 3
    explanation: "Box #0 contains [10] is the correct answer to “What will be the output of the following Java program? public class BoxDemo { public static <U> void addBox(U u, java.util.List<Box<U>> boxes) { Box<U> box = new Box<>(); box.set(u); boxes.add(box); } public static <U> void outputBoxes(java.util.List<Box<U>> boxes) { int counter = 0; for (Box<U> box: boxes) { U boxContents = box.get(); System.out.println(\"Box #\" + counter + \" contains [\" + boxContents.toString() + \"]\"); counter++; } } public static void main(String[] args) { java.util.ArrayList<Box<Integer>> listOfIntegerBoxes = new java.util.ArrayList<>(); BoxDemo.<Integer>addBox(Integer.valueOf(10), listOfIntegerBoxes); BoxDemo.outputBoxes(listOfIntegerBoxes); } }”. This question is standard in competitive examination syllabi for Generics In Java."
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: Which of these type parameters is used for a generic methods to return and accept a number?
    options:
      - K
      - "N"
      - T
      - V
    answer: 1
    explanation: N is the correct answer to “Which of these type parameters is used for a generic methods to return and accept a number”. This question is standard in competitive examination syllabi for Generics In Java.
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: Which of the following allows us to call generic methods as a normal method?
    options:
      - Type Interface
      - Interface
      - Inner class
      - All of the mentioned
    answer: 0
    explanation: Type Interface is the correct answer to “Which of the following allows us to call generic methods as a normal method”. This question is standard in competitive examination syllabi for Generics In Java.
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What will be the output of the following Java program? import java.util.*; public class genericstack <E> { Stack stk = new Stack <E>(); public void push(E obj) { stk.push(obj); } public E pop() { E obj = stk.pop(); return obj; } } class Output { public static void main(String args[]) { genericstack <String> gs = new genericstack (); gs.push("Hello"); System.out.println(gs.pop()); } }
    options:
      - H
      - Hello
      - Runtime Error
      - Compilation Error
    answer: 1
    explanation: Hello is the correct answer to “What will be the output of the following Java program? import java.util.*; public class genericstack <E> { Stack stk = new Stack <E>(); public void push(E obj) { stk.push(obj); } public E pop() { E obj = stk.pop(); return obj; } } class Output { public static void main(String args[]) { genericstack <String> gs = new genericstack (); gs.push("Hello"); System.out.println(gs.pop()); } }”. This question is standard in competitive examination syllabi for Generics In Java.
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: Which of these type parameters is used for a generic methods to return and accept any type of object?
    options:
      - K
      - "N"
      - T
      - V
    answer: 2
    explanation: T is the correct answer to “Which of these type parameters is used for a generic methods to return and accept any type of object”. This question is standard in competitive examination syllabi for Generics In Java.
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: Which of the following keywords are used for lower bounding a wild card?
    options:
      - extends
      - super
      - class
      - lower
    answer: 1
    explanation: super is the correct answer to “Which of the following keywords are used for lower bounding a wild card”. This question is standard in competitive examination syllabi for Generics In Java.
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What is use of wildcards?
    options:
      - It is used in cases when type being operated upon is not known
      - It is used to make code more readable
      - It is used to access members of super class
      - It is used for type argument of generic method
    answer: 0
    explanation: It is used in cases when type being operated upon is not known is the correct answer to “What is use of wildcards”. This question is standard in competitive examination syllabi for Generics In Java.
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: Which of these types cannot be used to initiate a generic type?
    options:
      - Integer class
      - Float class
      - Primitive Types
      - Collections
    answer: 2
    explanation: Primitive Types is the correct answer to “Which of these types cannot be used to initiate a generic type”. This question is standard in competitive examination syllabi for Generics In Java.
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
---


