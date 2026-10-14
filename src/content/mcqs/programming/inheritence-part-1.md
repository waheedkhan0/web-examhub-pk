---
title: Inheritence — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Inheritence — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: inheritence-part-1
topicName: Inheritence — Part 1
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
    question: In Java, can a subclass inherit constructors from its superclass?
    options:
      - Only if the subclass is marked as "final"
      - Yes, a subclass inherits constructors from its superclass
      - Only if the superclass is marked as "static"
      - None of the above
    answer: 3
    explanation: "Option A: Only if the subclass is marked as \"final\" This option is incorrect. Marking a subclass as \"final\" means that it cannot be subclassed further, and it has no impact on the inheritance of constructors. Option B: Yes, a subclass inherits constructors from its superclass This option is incorrect. In Java, a subclass does not inherit constructors from its superclass. However, a subclass can call the constructors of its superclass using the super keyword. Option C: Only if the superclass is marked as \"static\" This option is incorrect. The \"static\" keyword cannot be applied to classes or constructors in a way that would affect inheritance. Option D: None of the above This option is correct. In Java, constructors are not inherited by subclasses. Subclasses must explicitly define their own constructors, although they can call their superclass's constructors using the super keyword. Conclusion: In Java, a subclass does not inherit constructors from its superclass, making Option D: None of the above the correct answer."
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: In Java, can a subclass access protected members (fields and methods) of its superclass?
    options:
      - Only if the subclass is marked as "final"
      - No, protected members are not accessible to subclasses
      - Yes, as long as it's in the same package
      - Yes, regardless of the package
    answer: 3
    explanation: "In Java, protected members (fields and methods) of a superclass are accessible to its subclasses. Unlike private members, which are inaccessible outside the class, protected members can be accessed: 1. Within the same package: Any class within the same package can access protected members. 2. In subclasses (even if in a different package): A subclass can access protected members of its superclass, even if they are in different packages, provided they are accessed through inheritance (i.e., using super or via an instance of the subclass). This ensures that subclasses get access to important superclass members while still maintaining some level of encapsulation."
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What is the result of the following code snippet? class Parent { private int x = 10; } class Child extends Parent { int x = 20; void display() { System.out.println(super.x + " " + x); } } public class Main { public static void main(String[] args) { Child obj = new Child(); obj.display(); } }
    options:
      - 20 10
      - 10 20
      - Runtime exception
      - None of These
    answer: 1
    explanation: "The given code snippet involves inheritance in Java. It defines two classes: Parent and Child . The Child class extends the Parent class, which means it inherits its fields and methods. Inside the Parent class, there is a private integer variable x with a value of 10. In the Child class, there is another integer variable x with a value of 20. Additionally, the Child class has a display() method that prints the values of super.x and x . In Java, when you access a variable with the super keyword, it refers to the variable of the superclass. When you access a variable without super , it refers to the variable of the current class. Now, let's analyze what happens in the display() method: - super.x refers to the x variable in the Parent class, which is 10. - x refers to the x variable in the Child class, which is 20. So, the display() method will print \"10 20\" because it first accesses the x variable of the superclass ( Parent ) using super.x and then accesses the x variable of the current class ( Child ) directly. Therefore, the correct answer is: Option B: 10 20"
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What is the result of compiling and running the following code? class Base{ public Base(){ System.out.print("Base"); } } public class Derived extends Base{ public Derived(){ this("Examveda"); System.out.print("Derived"); } public Derived(String s){ System.out.print(s); } public static void main(String[] args){ new Derived(); } }
    options:
      - ExamvedaDerived
      - ExamvedaBaseDerived
      - BaseExamvedaDerived
      - ExamvedaDerivedBase
      - Compilation Error
    answer: 2
    explanation: 1. new Derived(); statement executes and invoke the non-parametrized constructor of derived class i.e. public Derived(); 2. As Derived class is a subclass of class Base so super(); executes and calls the super class constructor and prints "Base" . 3. After that this("Examveda"); executes and call the parametrized constructor public Derived(String s); of Derived class as this always refer to the current object. So, it prints "Examveda" . 4. Lastly the print statement executes and prints "Derived" Hence output is BaseExamvedaDerived .
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: "Determine output: class A{ public void method1(){ System.out.print(\"Class A method1\"); } } class B extends A{ public void method2(){ System.out.print(\"Class B method2\"); } } class C extends B{ public void method2(){ System.out.print(\"Class C method2\"); } public void method3(){ System.out.print(\"Class C method3\"); } } public class Test{ public static void main(String args[]){ A a = new A(); C c = new C(); c.method2(); a = c; a.method3(); } }"
    options:
      - Class B method2 Class C method3
      - Class C method2 Class C method3
      - Compilation Error
      - Runtime exception
      - None of these
    answer: 2
    explanation: It is important to understand that it is the type of reference variable - not the type of the object that it refers to - that which determines what members can be accessed. That is, when a reference to a subclass object is assigned to a super class reference variable, we will have access only to those parts of the object defined by the superclass. In the above program method method3() is defined in the class C which is a subclass of B and so A . Even the reference variable a refers to c , a can't access method3() as this method is unknown to class A .
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What will be printed after executing following program code? class Base{ int value = 0; Base(){ addValue(); } void addValue(){ value += 10; } int getValue(){ return value; } } class Derived extends Base{ Derived(){ addValue(); } void addValue(){ value += 20; } } public class Test{ public static void main(String[] args){ Base b = new Derived(); System.out.println(b.getValue()); } }
    options:
      - "30"
      - "10"
      - "40"
      - "20"
      - None of these
    answer: 2
    explanation: When object of new derived is called, the flow goes to Derived() first, by default super(); is present in Derived() as the first statement, so the flow now goes to Base. Here value is initialised to 0 and then addValue() is called. The addValue has been overridden in Derived() hence The Base's addValue() will perform value+20(0+20) .After this control flows back to Derived()'s addValue() where again value+20 is done (20+20). Hence Answer is 40
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What will be the output? class Parent{ public void method(){ System.out.println("Hi i am parent"); } } public class Child extends Parent{ protected void method(){ System.out.println("Hi i am Child"); } public static void main(String args[]){ Child child = new Child(); child.method(); } }
    options:
      - Compiles successfully and print
      - Run Time error
      - Compile time error
      - None of These
    answer: 2
    explanation: We cannot reduce the visibility of the inherited method from super class. If the overridden or hidden method is public, then the overriding or hiding method must be public; otherwise, a compile-time error occurs. If the overridden or hidden method is protected, then the overriding or hiding method must be protected or public; otherwise, a compile-time error occurs. If the overridden or hidden method has default (package) access, then the overriding or hiding method must not be private; otherwise, a compile-time error occurs.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What will be the output? class One{ final int a = 15; } class Two extends One{ final int a = 20; } public class Test extends Two{ final int a = 30; public static void main(String args[]){ Test t = new One(); System.out.print(t.a); } }
    options:
      - "15"
      - "20"
      - "30"
      - Compiler Error
      - None of these
    answer: 3
    explanation: We can't store super class object in subclass reference But we can store subclass object in super class reference.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: "Determine output: class A{ public void printName(){ System.out.println(\"Name-A\"); } } class B extends A{ public void printName(){ System.out.println(\"Name-B\"); } } class C extends A{ public void printName(){ System.out.println(\"Name-C\"); } } public class Test{ public static void main (String[] args){ B b = new B(); C c = new C(); b = c; newPrint(b); } public static void newPrint(A a){ a.printName(); } }"
    options:
      - Name B
      - Name C
      - Compilation fails due to an error on lines 5
      - Compilation fails due to an error on lines 9
      - None of these
    answer: 2
    explanation: Reference variable can refer to any object of the same type as the declared reference OR can refer to any subtype of the declared type. Reference variable "b" is type of class B and reference variable "c" is a type of class C. So Compilation fails.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What is inheritance in Java?
    options:
      - The process of acquiring properties and behaviors of one class by another
      - The process of creating objects
      - The process of encapsulation
      - The process of overloading methods
    answer: 0
    explanation: The process of acquiring properties and behaviors of one class by another is the correct answer to “What is inheritance in Java”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: In Java, which keyword is used to implement inheritance between classes?
    options:
      - inheritsFrom
      - inherits
      - implements
      - extends
    answer: 3
    explanation: extends is the correct answer to “In Java, which keyword is used to implement inheritance between classes”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: What is a superclass in Java?
    options:
      - The class that inherits properties and behaviors
      - The child class
      - The class that is inherited from
      - The class that is marked as "final"
    answer: 2
    explanation: The class that is inherited from is the correct answer to “What is a superclass in Java”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What is the "super" keyword used for in Java?
    options:
      - To call a method or constructor of the superclass
      - To create a new instance of a class
      - To hide a superclass method
      - To make a method final
    answer: 0
    explanation: To call a method or constructor of the superclass is the correct answer to “What is the "super" keyword used for in Java”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: In Java, can a subclass access private members (fields and methods) of its superclass?
    options:
      - Yes, as long as the subclass is in the same package
      - Yes, regardless of the access modifier
      - No, private members are not visible to subclasses
      - Only if the superclass is marked as "final"
    answer: 2
    explanation: No, private members are not visible to subclasses is the correct answer to “In Java, can a subclass access private members (fields and methods) of its superclass”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What is the difference between "extends" and "implements" in Java?
    options:
      - Both are used for class inheritance
      - "\"Extends\" is used for class inheritance, while \"implements\" is used for interface implementation"
      - Both are used for interface implementation
      - None of These
    answer: 1
    explanation: "\"Extends\" is used for class inheritance, while \"implements\" is used for interface implementation is the correct answer to “What is the difference between \"extends\" and \"implements\" in Java”. This question is standard in competitive examination syllabi for Inheritence."
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What is the result of the following code snippet? class Parent { protected void display() { System.out.println("Parent"); } } class Child extends Parent { void show() { display(); } } public class Main { public static void main(String[] args) { Child obj = new Child(); obj.show(); } }
    options:
      - Compilation error
      - Runtime exception
      - Child
      - Parent
    answer: 3
    explanation: Parent is the correct answer to “What is the result of the following code snippet? class Parent { protected void display() { System.out.println("Parent"); } } class Child extends Parent { void show() { display(); } } public class Main { public static void main(String[] args) { Child obj = new Child(); obj.show(); } }”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: In Java, can a subclass have more than one superclass?
    options:
      - No, a subclass can only have one superclass
      - Yes, a subclass can have multiple superclasses
      - Only if the superclasses have the same name
      - Only if the subclass is marked as "final"
    answer: 0
    explanation: No, a subclass can only have one superclass is the correct answer to “In Java, can a subclass have more than one superclass”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: What is the purpose of the "final" keyword in Java inheritance?
    options:
      - To hide a superclass method
      - To indicate that a class can be inherited only once
      - To make a method non-abstract
      - To indicate that a class cannot be further extended
    answer: 3
    explanation: To indicate that a class cannot be further extended is the correct answer to “What is the purpose of the "final" keyword in Java inheritance”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: In Java, can a subclass inherit private constructors from its superclass?
    options:
      - Yes, constructors are inherited like other methods
      - Only if the subclass is marked as "final"
      - No, constructors are not inherited, especially private constructors
      - Only if the superclass is marked as "static"
    answer: 2
    explanation: No, constructors are not inherited, especially private constructors is the correct answer to “In Java, can a subclass inherit private constructors from its superclass”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What is the concept of method overriding in Java inheritance?
    options:
      - Making a method static
      - Redefining a superclass method in a subclass with the same method signature
      - Hiding a superclass method
      - None of These
    answer: 1
    explanation: Redefining a superclass method in a subclass with the same method signature is the correct answer to “What is the concept of method overriding in Java inheritance”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: In Java, can a subclass inherit static methods from its superclass?
    options:
      - Only if the superclass is marked as "abstract"
      - Only if the subclass is marked as "final"
      - Yes, a subclass inherits static methods from its superclass
      - No, static methods are not inherited
    answer: 2
    explanation: Yes, a subclass inherits static methods from its superclass is the correct answer to “In Java, can a subclass inherit static methods from its superclass”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What is the result of the following code snippet? class Parent { void display() { System.out.println("Parent"); } } class Child extends Parent { void display() { super.display(); System.out.println("Child"); } } public class Main { public static void main(String[] args) { Child obj = new Child(); obj.display(); } }
    options:
      - ChildParent
      - Compilation error
      - Runtime exception
      - ParentChild
    answer: 3
    explanation: ParentChild is the correct answer to “What is the result of the following code snippet? class Parent { void display() { System.out.println("Parent"); } } class Child extends Parent { void display() { super.display(); System.out.println("Child"); } } public class Main { public static void main(String[] args) { Child obj = new Child(); obj.display(); } }”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: In Java, can a subclass access package-private members (fields and methods) of its superclass defined in another package?
    options:
      - No, package-private members are not accessible to subclasses from different packages
      - Yes, as long as it's in the same package
      - Yes, regardless of the package
      - Only if the subclass is marked as "final"
    answer: 0
    explanation: No, package-private members are not accessible to subclasses from different packages is the correct answer to “In Java, can a subclass access package-private members (fields and methods) of its superclass defined in another package”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: What is the result of the following code snippet? class Parent { int x = 10; } class Child extends Parent { int x = 20; void display() { System.out.println(super.x + " " + x); } } public class Main { public static void main(String[] args) { Child obj = new Child(); obj.display(); } }
    options:
      - Runtime exception
      - Compilation error
      - 20 10
      - 10 20
    answer: 3
    explanation: 10 20 is the correct answer to “What is the result of the following code snippet? class Parent { int x = 10; } class Child extends Parent { int x = 20; void display() { System.out.println(super.x + " " + x); } } public class Main { public static void main(String[] args) { Child obj = new Child(); obj.display(); } }”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: In Java, can a subclass override a default method from its superclass?
    options:
      - No, default methods cannot be overridden
      - Only if the subclass is marked as "final"
      - Yes, starting from Java 8, a subclass can override default methods from interfaces
      - Only if the default method is marked as "static"
    answer: 2
    explanation: Yes, starting from Java 8, a subclass can override default methods from interfaces is the correct answer to “In Java, can a subclass override a default method from its superclass”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: What is the purpose of the "protected" access modifier in Java inheritance?
    options:
      - To make a member visible to all classes in any package
      - To allow access to members within the same package and subclasses in any package
      - To hide a member from all subclasses
      - None of These
    answer: 1
    explanation: To allow access to members within the same package and subclasses in any package is the correct answer to “What is the purpose of the "protected" access modifier in Java inheritance”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: In Java, can a subclass access public members (fields and methods) of its superclass defined in another package?
    options:
      - Only if the superclass is marked as "abstract"
      - Only if the subclass is marked as "final"
      - Yes, public members are accessible to subclasses from different packages
      - No, public members are not accessible to subclasses from different packages
    answer: 2
    explanation: Yes, public members are accessible to subclasses from different packages is the correct answer to “In Java, can a subclass access public members (fields and methods) of its superclass defined in another package”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: What is the result of the following code snippet? class Parent { void display() { System.out.println("Parent"); } } class Child extends Parent { public static void main(String[] args) { Child obj = new Child(); obj.display(); } }
    options:
      - Compilation error
      - Child
      - Runtime exception
      - Parent
    answer: 3
    explanation: Parent is the correct answer to “What is the result of the following code snippet? class Parent { void display() { System.out.println("Parent"); } } class Child extends Parent { public static void main(String[] args) { Child obj = new Child(); obj.display(); } }”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: In Java, can a subclass override a static method from its superclass?
    options:
      - No, static methods cannot be overridden
      - Yes, a subclass can override static methods
      - Only if the subclass is marked as "final"
      - Only if the static method is marked as "private"
    answer: 0
    explanation: No, static methods cannot be overridden is the correct answer to “In Java, can a subclass override a static method from its superclass”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: What is the result of the following code snippet? class Parent { static void display() { System.out.println("Parent"); } } class Child extends Parent { public static void main(String[] args) { Child obj = new Child(); obj.display(); } }
    options:
      - Runtime exception
      - Compilation error
      - Child
      - Parent
    answer: 3
    explanation: Parent is the correct answer to “What is the result of the following code snippet? class Parent { static void display() { System.out.println("Parent"); } } class Child extends Parent { public static void main(String[] args) { Child obj = new Child(); obj.display(); } }”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: In Java, can a subclass inherit private fields from its superclass?
    options:
      - Yes, a subclass inherits private fields
      - Only if the subclass is marked as "final"
      - No, private fields are not inherited by subclasses
      - Only if the superclass is marked as "static"
    answer: 2
    explanation: No, private fields are not inherited by subclasses is the correct answer to “In Java, can a subclass inherit private fields from its superclass”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: In Java, can a subclass override a final method from its superclass?
    options:
      - Only if the final method is marked as "static"
      - Only if the subclass is marked as "final"
      - No, final methods cannot be overridden
      - Yes, a subclass can override final methods
    answer: 2
    explanation: No, final methods cannot be overridden is the correct answer to “In Java, can a subclass override a final method from its superclass”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: What is the result of the following code snippet? class Parent { final void display() { System.out.println("Parent"); } } class Child extends Parent { void display() { System.out.println("Child"); } public static void main(String[] args) { Child obj = new Child(); obj.display(); } }
    options:
      - Parent
      - Child
      - Runtime exception
      - Compilation error
    answer: 3
    explanation: Compilation error is the correct answer to “What is the result of the following code snippet? class Parent { final void display() { System.out.println("Parent"); } } class Child extends Parent { void display() { System.out.println("Child"); } public static void main(String[] args) { Child obj = new Child(); obj.display(); } }”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: Which of the following is true? 1. A class can extend more than one class. 2. A class can extend only one class but many interfaces. 3. An interface can extend many interfaces. 4. An interface can implement many interfaces. 5. A class can extend one class and implement many interfaces.
    options:
      - 1 and 2
      - 2 and 4
      - 3 and 5
      - 3 and 4
      - 2 and 5
    answer: 2
    explanation: 3 and 5 is the correct answer to “Which of the following is true? 1. A class can extend more than one class. 2. A class can extend only one class but many interfaces. 3. An interface can extend many interfaces. 4. An interface can implement many interfaces. 5. A class can extend one class and implement many interfaces.”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: What is the output of the following program code? abstract class C1{ public C1(){ System.out.print(1); } } class C2 extends C1{ public C2(){ System.out.print(2); } } class C3 extends C2{ public C3(){ System.out.println(3); } } public class Test{ public static void main(String[] a){ new C3(); } }
    options:
      - "12"
      - "23"
      - "123"
      - "321"
    answer: 2
    explanation: 123 is the correct answer to “What is the output of the following program code? abstract class C1{ public C1(){ System.out.print(1); } } class C2 extends C1{ public C2(){ System.out.print(2); } } class C3 extends C2{ public C3(){ System.out.println(3); } } public class Test{ public static void main(String[] a){ new C3(); } }”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: The concept of multiple inheritance is implemented in Java by I. Extending two or more classes. II. Extending one class and implementing one or more interfaces. III. Implementing two or more interfaces.
    options:
      - Only (II)
      - (I) and (II)
      - (II) and (III)
      - Only (I)
      - Only (III)
    answer: 2
    explanation: (II) and (III) is the correct answer to “The concept of multiple inheritance is implemented in Java by I. Extending two or more classes. II. Extending one class and implementing one or more interfaces. III. Implementing two or more interfaces.”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: What will be the output? interface A{ public void method1(); } class One implements A{ public void method1(){ System.out.println("Class One method1"); } } class Two extends One{ public void method1(){ System.out.println("Class Two method1"); } } public class Test extends Two{ public static void main(String[] args){ A a = new Two(); a.method1(); } }
    options:
      - Compilation Error
      - Class One method1
      - Class Two method1
      - Throws a NoSuchMethodException at runtime.
      - None of these
    answer: 2
    explanation: Class Two method1 is the correct answer to “What will be the output? interface A{ public void method1(); } class One implements A{ public void method1(){ System.out.println("Class One method1"); } } class Two extends One{ public void method1(){ System.out.println("Class Two method1"); } } public class Test extends Two{ public static void main(String[] args){ A a = new Two(); a.method1(); } }”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: What is the result of compiling and running this program? class Mammal{ void eat(Mammal m){ System.out.println("Mammal eats food"); } } class Cattle extends Mammal{ void eat(Cattle c){ System.out.println("Cattle eats hay"); } } class Horse extends Cattle{ void eat(Horse h){ System.out.println("Horse eats hay"); } } public class Test{ public static void main(String[] args){ Mammal h = new Horse(); Cattle c = new Horse(); c.eat(h); } }
    options:
      - prints "Mammal eats food"
      - prints "Cattle eats hay"
      - prints "Horse eats hay"
      - Class cast Exception at runtime.
      - None of these
    answer: 0
    explanation: prints "Mammal eats food" is the correct answer to “What is the result of compiling and running this program? class Mammal{ void eat(Mammal m){ System.out.println("Mammal eats food"); } } class Cattle extends Mammal{ void eat(Cattle c){ System.out.println("Cattle eats hay"); } } class Horse extends Cattle{ void eat(Horse h){ System.out.println("Horse eats hay"); } } public class Test{ public static void main(String[] args){ Mammal h = new Horse(); Cattle c = new Horse(); c.eat(h); } }”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: What will be the result of compiling and executing the following program code? class Vehicle{ public void printSound(){ System.out.print("vehicle"); } } class Car extends Vehicle{ public void printSound(){ System.out.print("car"); } } class Bike extends Vehicle{ public void printSound(){ System.out.print("bike"); } } public class Test{ public static void main(String[] args){ Vehicle v = new Car(); Bike b = (Bike) v; v.printSound(); b.printSound(); } }
    options:
      - Compilation fails.
      - ClassCastException exception is thrown at runtime.
      - "\"vehiclecar\" is printed."
      - "\"vehiclebike\" is printed."
      - "\"carcar\" is printed."
    answer: 1
    explanation: ClassCastException exception is thrown at runtime. is the correct answer to “What will be the result of compiling and executing the following program code? class Vehicle{ public void printSound(){ System.out.print("vehicle"); } } class Car extends Vehicle{ public void printSound(){ System.out.print("car"); } } class Bike extends Vehicle{ public void printSound(){ System.out.print("bike"); } } public class Test{ public static void main(String[] args){ Vehicle v = new Car(); Bike b = (Bike) v; v.printSound(); b.printSound(); } }”. This question is standard in competitive examination syllabi for Inheritence.
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: "Determine output: class Small{ public Small(){ System.out.print(\"a \"); } } class Small2 extends Small{ public Small2(){ System.out.print(\"b \"); } } class Small3 extends Small2{ public Small3(){ System.out.print(\"c \"); } } public class Test{ public static void main(String args[]){ new Small3(); } }"
    options:
      - a
      - c
      - a b c
      - c b a
      - The code runs without output..
    answer: 2
    explanation: "a b c is the correct answer to “Determine output: class Small{ public Small(){ System.out.print(\"a \"); } } class Small2 extends Small{ public Small2(){ System.out.print(\"b \"); } } class Small3 extends Small2{ public Small3(){ System.out.print(\"c \"); } } public class Test{ public static void main(String args[]){ new Small3(); } }”. This question is standard in competitive examination syllabi for Inheritence."
    keyConcept: Inheritence
    testedIn:
      - FPSC
      - PPSC
---


