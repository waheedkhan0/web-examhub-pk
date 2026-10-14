---
title: Overriding And Overloading — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Overriding And Overloading — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: overriding-and-overloading-part-1
topicName: Overriding And Overloading — Part 1
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
    question: In Java, can a subclass override a private method from its superclass?
    options:
      - No, private methods cannot be overridden
      - Yes, regardless of the access modifier
      - Yes, as long as it's in the same package
      - No, private methods are not visible to subclasses
    answer: 3
    explanation: In Java, private methods of a superclass are not accessible outside that class , including its subclasses. Since a subclass cannot see a private method of its superclass, it cannot override it. Even if a subclass declares a method with the same name and signature, it is treated as a new method , not an overridden one. Option A states a general rule but Option D gives the precise reason for why overriding is not possible. Therefore, the correct answer is Option D – No, private methods are not visible to subclasses .
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: In Java, can a subclass overload a method from its superclass?
    options:
      - Yes, as long as the method is marked as "private"
      - No, method overloading is not allowed in Java
      - No, method overloading is not supported
      - None of These
    answer: 3
    explanation: "Method overloading occurs when two or more methods in the same class (or subclass and superclass) have the same name but different parameter lists. In Java, a subclass can overload a method from its superclass by defining a method with the same name but a different parameter list. Option A is incorrect because a method marked as private in the superclass is not visible to the subclass, so it cannot be directly overloaded. Option B and C are incorrect because method overloading is a fundamental feature of Java and is fully supported. Therefore, the correct answer is Option D: None of These since none of the given options correctly describe method overloading in Java."
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What will be the output? class A{ static void method(){ System.out.println("Class A method"); } } class B extends A{ static void method(){ System.out.println("Class B method"); } } public class Test{ public static void main(String args[]){ A a = new B(); a.method(); } }
    options:
      - Class A method
      - Class B method
      - Compilation Error
      - Runtime Error
      - None of these
    answer: 0
    explanation: Overriding in Java simply means that the particular method would be called based on the run time type of the object and not on the compile time type. But in the above case the methods are static which means access to them is always resolved during compile time only using the compile time type information. Accessing them using object references is just an extra liberty given by the designers of Java.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What will be the output? class A{ int i = 10; public void printValue(){ System.out.print("Value-A"); } } class B extends A{ int i = 12; public void printValue(){ System.out.print("Value-B"); } } public class Test{ public static void main(String args[]){ A a = new B(); a.printValue(); System.out.print(a.i); } }
    options:
      - Value-B 11
      - Value-B 10
      - Value-A 10
      - Value-A 11
      - None of these
    answer: 1
    explanation: If you create object of subclass with reference of super class like ( A a = new B();) then subclass method and super class variable will be executed.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: "Determine output: class A{ public void printValue(){ System.out.println(\"Value-A\"); } } class B extends A{ public void printNameB(){ System.out.println(\"Name-B\"); } } class C extends A{ public void printNameC(){ System.out.println(\"Name-C\"); } } public class Test{ public static void main (String[] args){ B b = new B(); C c = new C(); newPrint(b); newPrint(c); } public static void newPrint(A a){ a.printValue(); } }"
    options:
      - Value-A Name-B
      - Value-A Value-A
      - Value-A Name-C
      - Name-B Name-C
      - None of these
    answer: 1
    explanation: Class B extended Class A therefore all methods of Class A will be available to class B except private methods. Class C extended Class A therefore all methods of Class A will be available to class C except private methods.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What is the output for the below code? class A{ private void printName(){ System.out.println("Value-A"); } } class B extends A{ public void printName(){ System.out.println("Name-B"); } } public class Test{ public static void main (String[] args){ B b = new B(); b.printName(); } }
    options:
      - Value-A
      - Name-B
      - Value-A Name-B
      - Compilation fails - private methods can't be override
      - None of these
    answer: 1
    explanation: You can not override private method , private method is not availabe in subclass . In this case printName() method a class A is not overriding by printName() method of class B. printName() method of class B different method. So you can call printName() method of class B.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What is the purpose of method overloading in Java?
    options:
      - Creating static methods
      - Hiding methods in a superclass
      - Redefining methods in a subclass
      - Defining multiple methods with the same name but different parameters
    answer: 3
    explanation: Defining multiple methods with the same name but different parameters is the correct answer to “What is the purpose of method overloading in Java”. This question is standard in competitive examination syllabi for Overriding And Overloading.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: In method overriding, which keyword is used in the child class to indicate that a method is intended to override a superclass method?
    options:
      - "@OverrideMethod"
      - "@OverrideSuper"
      - "@Override"
      - "@OverrideParent"
    answer: 2
    explanation: "@Override is the correct answer to “In method overriding, which keyword is used in the child class to indicate that a method is intended to override a superclass method”. This question is standard in competitive examination syllabi for Overriding And Overloading."
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What happens when a subclass tries to override a final method from the superclass in Java?
    options:
      - The final method is hidden
      - It results in a compilation error
      - The final method becomes static
      - The final method is null
    answer: 1
    explanation: It results in a compilation error is the correct answer to “What happens when a subclass tries to override a final method from the superclass in Java”. This question is standard in competitive examination syllabi for Overriding And Overloading.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: In method overloading, what must be different between the overloaded methods in the same class?
    options:
      - The method name
      - The return type
      - The access modifier
      - The number or type of parameters
    answer: 3
    explanation: The number or type of parameters is the correct answer to “In method overloading, what must be different between the overloaded methods in the same class”. This question is standard in competitive examination syllabi for Overriding And Overloading.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: Which method is called during method overriding in Java if the superclass method is invoked using the "super" keyword?
    options:
      - The superclass method
      - The subclass method
      - Both methods are called
      - None of the methods are called
    answer: 0
    explanation: The superclass method is the correct answer to “Which method is called during method overriding in Java if the superclass method is invoked using the "super" keyword”. This question is standard in competitive examination syllabi for Overriding And Overloading.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: What is the result of the following code snippet? class Parent { void display() { System.out.println("Parent"); } } class Child extends Parent { void display() { System.out.println("Child"); } } public class Main { public static void main(String[] args) { Parent obj = new Child(); obj.display(); } }
    options:
      - Parent
      - Compilation error
      - Child
      - Runtime exception
    answer: 2
    explanation: Child is the correct answer to “What is the result of the following code snippet? class Parent { void display() { System.out.println("Parent"); } } class Child extends Parent { void display() { System.out.println("Child"); } } public class Main { public static void main(String[] args) { Parent obj = new Child(); obj.display(); } }”. This question is standard in competitive examination syllabi for Overriding And Overloading.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: In Java, what is the return type of a method that does not return any value?
    options:
      - String
      - void
      - Object
      - None of These
    answer: 1
    explanation: void is the correct answer to “In Java, what is the return type of a method that does not return any value”. This question is standard in competitive examination syllabi for Overriding And Overloading.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What is the difference between method overloading and method overriding in Java?
    options:
      - Method overloading only works with static methods, while method overriding works with instance methods
      - Method overloading is not allowed in Java, while method overriding is a required feature
      - Method overloading involves multiple methods with the same name in the same class, while method overriding involves redefining a superclass method in a subclass
      - Method overloading involves creating new methods in a subclass, while method overriding involves hiding superclass methods
    answer: 2
    explanation: Method overloading involves multiple methods with the same name in the same class, while method overriding involves redefining a superclass method in a subclass is the correct answer to “What is the difference between method overloading and method overriding in Java”. This question is standard in competitive examination syllabi for Overriding And Overloading.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: In method overriding, is it mandatory for the return type of the subclass method to be the same as the superclass method?
    options:
      - Yes, it must be the same
      - No, it can be different
      - It depends on the access modifier
      - It depends on the method name
    answer: 0
    explanation: Yes, it must be the same is the correct answer to “In method overriding, is it mandatory for the return type of the subclass method to be the same as the superclass method”. This question is standard in competitive examination syllabi for Overriding And Overloading.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What is the purpose of the "super" keyword in method overriding?
    options:
      - To make the method static
      - To hide the superclass method
      - To create a new object
      - To call the superclass method
    answer: 3
    explanation: To call the superclass method is the correct answer to “What is the purpose of the "super" keyword in method overriding”. This question is standard in competitive examination syllabi for Overriding And Overloading.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What is the purpose of the "@Override" annotation in Java?
    options:
      - To make a method static
      - To create a new method
      - To indicate that a method is intended to override a superclass method
      - To declare a variable
    answer: 2
    explanation: To indicate that a method is intended to override a superclass method is the correct answer to “What is the purpose of the "@Override" annotation in Java”. This question is standard in competitive examination syllabi for Overriding And Overloading.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: In method overloading, can methods have the same name and the same parameter types if their return types are different?
    options:
      - No, the method names must be different
      - Yes, it is allowed
      - No, it is not allowed
      - Yes, as long as the access modifiers are different
    answer: 2
    explanation: No, it is not allowed is the correct answer to “In method overloading, can methods have the same name and the same parameter types if their return types are different”. This question is standard in competitive examination syllabi for Overriding And Overloading.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: Can a method be both overloaded and overridden in the same class in Java?
    options:
      - Yes, as long as the method names are the same
      - Yes, as long as the access modifiers are the same
      - No, it is not allowed
      - No, method overloading and overriding are mutually exclusive
    answer: 0
    explanation: Yes, as long as the method names are the same is the correct answer to “Can a method be both overloaded and overridden in the same class in Java”. This question is standard in competitive examination syllabi for Overriding And Overloading.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: In method overloading, can methods have the same name and the same return type if their parameter types are different?
    options:
      - Yes, as long as the methods are final
      - Yes, as long as the methods are static
      - No, it is not allowed
      - Yes, it is allowed
    answer: 3
    explanation: Yes, it is allowed is the correct answer to “In method overloading, can methods have the same name and the same return type if their parameter types are different”. This question is standard in competitive examination syllabi for Overriding And Overloading.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: What is the purpose of the "super" keyword in method overloading?
    options:
      - To create a new object
      - To make the method final
      - To call the superclass constructor
      - To hide the superclass method
    answer: 2
    explanation: To call the superclass constructor is the correct answer to “What is the purpose of the "super" keyword in method overloading”. This question is standard in competitive examination syllabi for Overriding And Overloading.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: In Java, can a method be overloaded by changing only the return type?
    options:
      - Yes, it is allowed
      - Yes, but only for static methods
      - No, methods with the same name must have the same return type
      - No, the return type cannot be changed
    answer: 3
    explanation: No, the return type cannot be changed is the correct answer to “In Java, can a method be overloaded by changing only the return type”. This question is standard in competitive examination syllabi for Overriding And Overloading.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: What is the purpose of method hiding in Java?
    options:
      - Creating a static method with the same name as a superclass method
      - Redefining a method with a different return type in a subclass
      - Making a method private in a subclass
      - Defining a new method with the same name in a subclass
    answer: 0
    explanation: Creating a static method with the same name as a superclass method is the correct answer to “What is the purpose of method hiding in Java”. This question is standard in competitive examination syllabi for Overriding And Overloading.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: In method overriding, is it mandatory for the method name in the subclass to be the same as the method name in the superclass?
    options:
      - It depends on the access modifier
      - It depends on the return type
      - No, it can be different
      - Yes, it must be the same
    answer: 3
    explanation: Yes, it must be the same is the correct answer to “In method overriding, is it mandatory for the method name in the subclass to be the same as the method name in the superclass”. This question is standard in competitive examination syllabi for Overriding And Overloading.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: What happens when a subclass tries to override a static method from the superclass in Java?
    options:
      - It overrides the method successfully
      - The static method is hidden
      - It results in a compilation error
      - The static method becomes final
    answer: 2
    explanation: It results in a compilation error is the correct answer to “What happens when a subclass tries to override a static method from the superclass in Java”. This question is standard in competitive examination syllabi for Overriding And Overloading.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: In method overloading, can methods have the same name and the same parameter types if their access modifiers are different?
    options:
      - Yes, but only for static methods
      - No, it is not allowed
      - No, the methods must have different parameter types
      - None of These
    answer: 1
    explanation: No, it is not allowed is the correct answer to “In method overloading, can methods have the same name and the same parameter types if their access modifiers are different”. This question is standard in competitive examination syllabi for Overriding And Overloading.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: What is the purpose of method overriding in Java?
    options:
      - Creating static methods
      - Hiding superclass methods
      - Redefining a superclass method in a subclass to provide a specific implementation
      - Defining a new method with the same name in a subclass
    answer: 2
    explanation: Redefining a superclass method in a subclass to provide a specific implementation is the correct answer to “What is the purpose of method overriding in Java”. This question is standard in competitive examination syllabi for Overriding And Overloading.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: In Java, can a subclass override a protected method from its superclass?
    options:
      - Yes, regardless of the package
      - No, protected methods cannot be overridden
      - No, protected methods are private
      - Yes, as long as it's in the same package
    answer: 3
    explanation: Yes, as long as it's in the same package is the correct answer to “In Java, can a subclass override a protected method from its superclass”. This question is standard in competitive examination syllabi for Overriding And Overloading.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: What is output of the program? class Test{ public void display(int x, double y){ System.out.println(x+y); } public double display(int p, double q){ return (p+q); } public static void main(String args[]){ Test test = new Test(); test.display(4, 5.0); System.out.println(test.display(4, 5.0)); } }
    options:
      - 9.0 9.0
      - 9 9
      - Compilation Error
      - None of these
    answer: 2
    explanation: Compilation Error is the correct answer to “What is output of the program? class Test{ public void display(int x, double y){ System.out.println(x+y); } public double display(int p, double q){ return (p+q); } public static void main(String args[]){ Test test = new Test(); test.display(4, 5.0); System.out.println(test.display(4, 5.0)); } }”. This question is standard in competitive examination syllabi for Overriding And Overloading.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: "what is the result of the following piece of code: public class Person{ public void talk(){ System.out.print(\"I am a Person\"); } } public class Student extends Person{ public void talk(){ System.out.print(\"I am a Student\"); } } public class Test{ public static void main(String args[]){ Person p = new Student(); p.talk(); } }"
    options:
      - I am a Person
      - I am a Student
      - I am a Person I am a Student
      - I am a Student I am a Person
    answer: 1
    explanation: "I am a Student is the correct answer to “what is the result of the following piece of code: public class Person{ public void talk(){ System.out.print(\"I am a Person\"); } } public class Student extends Person{ public void talk(){ System.out.print(\"I am a Student\"); } } public class Test{ public static void main(String args[]){ Person p = new Student(); p.talk(); } }”. This question is standard in competitive examination syllabi for Overriding And Overloading."
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: What will be the output of the following program code? class Rectangle{ public int area(int length, int width){ return length*width; } } class Square extends Rectangle{ public int area(long length, long width){ return (int) Math.pow(length, 2); } } public class Test{ public static void main(String args[]){ Square r = new Square(); System.out.println(r.area(5 , 4)); } }
    options:
      - Will not compile.
      - Will compile and run printing out 20
      - Runtime error
      - Will compile and run printing out 25
    answer: 1
    explanation: Will compile and run printing out 20 is the correct answer to “What will be the output of the following program code? class Rectangle{ public int area(int length, int width){ return length*width; } } class Square extends Rectangle{ public int area(long length, long width){ return (int) Math.pow(length, 2); } } public class Test{ public static void main(String args[]){ Square r = new Square(); System.out.println(r.area(5 , 4)); } }”. This question is standard in competitive examination syllabi for Overriding And Overloading.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: ____________ method cannot be overridden.
    options:
      - super
      - static
      - final
      - private
      - None of these
    answer: 2
    explanation: final is the correct answer to “____________ method cannot be overridden.”. This question is standard in competitive examination syllabi for Overriding And Overloading.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: Which of these keywords can be used to prevent Method overriding?
    options:
      - static
      - constant
      - protected
      - final
    answer: 3
    explanation: final is the correct answer to “Which of these keywords can be used to prevent Method overriding”. This question is standard in competitive examination syllabi for Overriding And Overloading.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: What will be the output of the following Java program? final class A { int i; } class B extends A { int j; System.out.println(j + " " + i); } class inheritance { public static void main(String args[]) { B obj = new B(); obj.display(); } }
    options:
      - 2 2
      - 3 3
      - Runtime Error
      - Compilation Error
    answer: 3
    explanation: Compilation Error is the correct answer to “What will be the output of the following Java program? final class A { int i; } class B extends A { int j; System.out.println(j + " " + i); } class inheritance { public static void main(String args[]) { B obj = new B(); obj.display(); } }”. This question is standard in competitive examination syllabi for Overriding And Overloading.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: What will be the output of the following Java program? class Alligator { public static void main(String[] args) { int []x[] = {{1,2}, {3,4,5}, {6,7,8,9}}; int [][]y = x; System.out.println(y[2][1]); } }
    options:
      - "2"
      - "3"
      - "7"
      - Compilation Error
    answer: 2
    explanation: 7 is the correct answer to “What will be the output of the following Java program? class Alligator { public static void main(String[] args) { int []x[] = {{1,2}, {3,4,5}, {6,7,8,9}}; int [][]y = x; System.out.println(y[2][1]); } }”. This question is standard in competitive examination syllabi for Overriding And Overloading.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: What will be the output of the following Java code? class overload { int x; int y; void add(int a) { x = a + 1; } void add(int a , int b) { x = a + 2; } } class Overload_methods { public static void main(String args[]) { overload obj = new overload(); int a = 0; obj.add(6, 7); System.out.println(obj.x); } }
    options:
      - "6"
      - "7"
      - "8"
      - "9"
    answer: 2
    explanation: 8 is the correct answer to “What will be the output of the following Java code? class overload { int x; int y; void add(int a) { x = a + 1; } void add(int a , int b) { x = a + 2; } } class Overload_methods { public static void main(String args[]) { overload obj = new overload(); int a = 0; obj.add(6, 7); System.out.println(obj.x); } }”. This question is standard in competitive examination syllabi for Overriding And Overloading.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: What is the process of defining a method in a subclass having same name & type signature as a method in its superclass?
    options:
      - Method overloading
      - Method overriding
      - Method hiding
      - None of the mentioned
    answer: 1
    explanation: Method overriding is the correct answer to “What is the process of defining a method in a subclass having same name & type signature as a method in its superclass”. This question is standard in competitive examination syllabi for Overriding And Overloading.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: What will be the output of the following Java code? class A { public void m1 (int i,float f) { System.out.println(" int float method"); } public void m1(float f,int i); { System.out.println("float int method"); } public static void main(String[]args) { A a=new A(); a.m1(20,20); } }
    options:
      - int float method
      - float int method
      - compile time error
      - run time error
    answer: 2
    explanation: compile time error is the correct answer to “What will be the output of the following Java code? class A { public void m1 (int i,float f) { System.out.println(" int float method"); } public void m1(float f,int i); { System.out.println("float int method"); } public static void main(String[]args) { A a=new A(); a.m1(20,20); } }”. This question is standard in competitive examination syllabi for Overriding And Overloading.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: Which of these is correct way of calling a constructor having no parameters, of superclass A by subclass B?
    options:
      - super(void)
      - superclass.()
      - super.A()
      - super()
    answer: 3
    explanation: super() is the correct answer to “Which of these is correct way of calling a constructor having no parameters, of superclass A by subclass B”. This question is standard in competitive examination syllabi for Overriding And Overloading.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: What is the process of defining two or more methods within same class that have same name but different parameters declaration?
    options:
      - method overloading
      - method overriding
      - method hiding
      - none of the mentioned
    answer: 0
    explanation: method overloading is the correct answer to “What is the process of defining two or more methods within same class that have same name but different parameters declaration”. This question is standard in competitive examination syllabi for Overriding And Overloading.
    keyConcept: Overriding And Overloading
    testedIn:
      - FPSC
      - PPSC
---


