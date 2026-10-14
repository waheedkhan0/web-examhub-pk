---
title: Interfaces And Abstract Classes — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Interfaces And Abstract Classes — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: interfaces-and-abstract-classes-part-1
topicName: Interfaces And Abstract Classes — Part 1
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
    question: In Java, can an abstract class extend another class?
    options:
      - No, abstract classes cannot extend other classes
      - Yes, abstract classes can extend both abstract and concrete classes
      - Only if the superclass is marked as "static"
      - Only if the subclass is marked as "final"
    answer: 1
    explanation: In Java, abstract classes can extend both abstract and concrete classes. When an abstract class extends another class (whether abstract or concrete), it inherits the properties and methods of that class. An abstract class is allowed to inherit from a concrete class and can override or use the methods from the superclass. Option A is incorrect because abstract classes can extend other classes. Option C is incorrect since there is no requirement for the superclass to be marked as "static." Option D is incorrect as the subclass does not need to be marked "final" to extend a class.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: interface Base{ boolean m1 (); byte m2(short s); } which two code fragments will compile? 1. interface Base2 implements Base {} 2. abstract class Class2 extends Base { public boolean m1(){ return true; }} 3. abstract class Class2 implements Base {} 4. abstract class Class2 implements Base { public boolean m1(){ return (7 > 4); }} 5. abstract class Class2 implements Base { protected boolean m1(){ return (5 > 7) }}
    options:
      - 1 and 2
      - 2 and 3
      - 3 and 4
      - 1 and 3
      - 4 and 5
    answer: 2
    explanation: (3) is correct because an abstract class doesn't have to implement any or all of its interface's methods. (4) is correct because this method is correctly implemented ((7 > 4) is a boolean). (1) is incorrect because interfaces doesn't implement anything. (2) is incorrect because classes don't extend interfaces. (5) is incorrect because interface methods are implicitly public, so the methods being implemented must be public.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Which two of the following are legal declarations for abstract classes and interfaces? 1. final abstract class Test {} 2. public static interface Test {} 3. final public class Test {} 4. protected abstract class Test {} 5. protected interface Test {} 6. abstract public class Test {}
    options:
      - 1 and 2
      - 2 and 4
      - 3 and 5
      - 5 and 6
      - 3 and 6
    answer: 4
    explanation: (3), (6). Both are legal class declarations. (1) is wrong because a class cannot be abstract and final "there would be no way to use such a class". (2) is wrong because interfaces and classes cannot be marked as static . (4) and (5) are wrong because classes and interfaces cannot be marked as protected .
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What will happen after compiling this program code? abstract class MyClass{ //line 1 private int a, b; public void call(int a, int b){ this.a = a; this.b = b; System.out.print(a+b); } } public class Test{ public static void main(String args[]){ MyClass m = new MyClass(); //line 2 m.call(12,25); } }
    options:
      - Successful run and print 37
      - Compilation error due to line 1
      - Compilation error due to line 2
      - Runtime error
      - None of these
    answer: 2
    explanation: Abstract class is not concrete class which means object cannot be created for abstract class, its requires extending it and then create the object of extended class.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: What is the output for the below code? interface A{ public void printValue(); } public class Test{ public static void main (String[] args){ A a1 = new A(){ public void printValue(){ System.out.println("A"); } }; a1.printValue(); } }
    options:
      - Compilation fails due to an error on line 3
      - A
      - Compilation fails due to an error on line 8
      - "null"
      - None of these
    answer: 1
    explanation: The A a1 reference variable refers not to an instance of interface A, but to an instance of an anonymous (unnamed) class. So there is no compilation error.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What will be the output? public interface InfA{ protected String getName(); } public class Test implements InfA{ public String getName(){ return "test-name"; } public static void main (String[] args){ Test t = new Test(); System.out.println(t.getName()); } }
    options:
      - test-name
      - Compilation fails due to an error on lines 2
      - Compilation fails due to an error on lines 1
      - Compilation succeed but Runtime Exception
      - None of these
    answer: 1
    explanation: Illegal modifier for the interface method InfA.getName(); only public and abstracts are permitted.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What will be the output for the below code? public interface TestInf{ int i =10; } public class Test{ public static void main(String... args){ TestInf.i=12; System.out.println(TestInf.i); } }
    options:
      - Compile with error
      - "10"
      - "12"
      - Runtime Exception
      - None of these
    answer: 0
    explanation: All the variables declared in interface is implicitly static and final , therefore can't change the value.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What will be the output when the following program is compiled and executed? abstract class TestAbstract{ String my_name; String myName(){ my_name = "Examveda"; return my_name; } abstract void display(); } public class Test extends TestAbstract{ void display(){ String n = myName(); System.out.print("My name is "+ n); } public static void main(String args[]){ Test t = new Test(); t.display(); } }
    options:
      - Program will compile and execute successfully and prints
      - Compilation error as class can not be declared as abstract.
      - Program compiles but leads to runtime exception.
      - Compilation error occurs as the abstract class TestAbstract contains a non-abstract method.
      - None of these
    answer: 0
    explanation: The options B, C and D are incorrect options as in Java we can declare an abstract class comprising of abstract and non-abstract methods that will not lead to any compilation error. Therefore, option A is the correct answer implying that the 't' instance of Test class invokes the display method, which is implemented in the Test class. The display method invokes myName() method declared int the TestAbstract class and prints the name.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What happens if the following program is compiled and executed? interface MyInterface{ void display(); } interface MySubInterface extends MyInterface{ void display(); } public class Test implements MySubInterface{ public void display(){ System.out.print("Welcome to Examveda."); } public static void main(String args[]){ Test t = new Test(); t.display(); } }
    options:
      - The code will lead to a compilation error as declaration of the display method has been provided in two interface.
      - The code will lead to a compilation error due to public modifier while declaring the display method.
      - The code will compile and execute successfully showing the output Welcome to Examveda.
      - The code will lead to a compilation error as the display method is not declared as abstract.
      - None of these
    answer: 2
    explanation: The program will compile and execute successfully as you can declare methods with same name in an interface and the method of either interface can be used, implying the option a is incorrect. The option B and D are incorrect as the methods of an interface are implicitly public and abstract.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What is an interface in Java?
    options:
      - A contract specifying a set of methods that a class must implement
      - A class that cannot be instantiated
      - A class that contains only static methods
      - A subclass of the Object class
    answer: 0
    explanation: A contract specifying a set of methods that a class must implement is the correct answer to “What is an interface in Java”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: In Java, can a class implement multiple interfaces?
    options:
      - Interfaces cannot be implemented by classes
      - Only abstract classes can implement interfaces
      - No, a class can only implement one interface
      - Yes, a class can implement multiple interfaces
    answer: 3
    explanation: Yes, a class can implement multiple interfaces is the correct answer to “In Java, can a class implement multiple interfaces”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: Which keyword is used to declare an interface in Java?
    options:
      - class
      - abstract
      - interface
      - extends
    answer: 2
    explanation: interface is the correct answer to “Which keyword is used to declare an interface in Java”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What is the purpose of an abstract class in Java?
    options:
      - To declare abstract methods
      - To provide a base class with common methods and fields
      - To make a class final
      - None of These
    answer: 1
    explanation: To provide a base class with common methods and fields is the correct answer to “What is the purpose of an abstract class in Java”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: In Java, can an abstract class be instantiated?
    options:
      - Only if it is marked as "final"
      - Only if it has a constructor
      - No, an abstract class cannot be instantiated
      - Yes, an abstract class can be instantiated
    answer: 2
    explanation: No, an abstract class cannot be instantiated is the correct answer to “In Java, can an abstract class be instantiated”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What is the purpose of the "implements" keyword in Java?
    options:
      - To extend an abstract class
      - To indicate a constructor
      - To create an instance of a class
      - To indicate that a class is implementing an interface
    answer: 3
    explanation: To indicate that a class is implementing an interface is the correct answer to “What is the purpose of the "implements" keyword in Java”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: Which of the following can contain both abstract and non-abstract methods?
    options:
      - Abstract class
      - Interface
      - Concrete class
      - Static class
    answer: 0
    explanation: Abstract class is the correct answer to “Which of the following can contain both abstract and non-abstract methods”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: In Java, can an interface have fields (member variables)?
    options:
      - Only if they are marked as "static"
      - Only if they are marked as "private"
      - No, interfaces cannot have fields
      - Yes, an interface can have constant (final) fields
    answer: 3
    explanation: Yes, an interface can have constant (final) fields is the correct answer to “In Java, can an interface have fields (member variables)”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: What is the purpose of an abstract method in an abstract class or interface?
    options:
      - To provide a concrete implementation of a method
      - To indicate that the method is static
      - To declare a method without providing an implementation
      - To make the method final
    answer: 2
    explanation: To declare a method without providing an implementation is the correct answer to “What is the purpose of an abstract method in an abstract class or interface”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: Which keyword is used to define an abstract method in Java?
    options:
      - void
      - abstract
      - public
      - none of these
    answer: 1
    explanation: abstract is the correct answer to “Which keyword is used to define an abstract method in Java”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: In Java, can an interface have private methods with implementations?
    options:
      - Only if the methods are marked as "static"
      - Only if the methods are marked as "final"
      - Yes, starting from Java 9, interfaces can have private methods
      - No, interfaces cannot have private methods
    answer: 2
    explanation: Yes, starting from Java 9, interfaces can have private methods is the correct answer to “In Java, can an interface have private methods with implementations”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: What is the result of the following code snippet? interface MyInterface { void myMethod(); } public class MyClass implements MyInterface { public void myMethod() { System.out.println("Implementation"); } public static void main(String[] args) { MyInterface obj = new MyClass(); obj.myMethod(); } }
    options:
      - Compilation error
      - Runtime exception
      - MyClass
      - Implementation
    answer: 3
    explanation: Implementation is the correct answer to “What is the result of the following code snippet? interface MyInterface { void myMethod(); } public class MyClass implements MyInterface { public void myMethod() { System.out.println("Implementation"); } public static void main(String[] args) { MyInterface obj = new MyClass(); obj.myMethod(); } }”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What is the purpose of the "extends" keyword in Java?
    options:
      - To mark a class as abstract
      - To declare a method
      - To implement an interface
      - To create a subclass
    answer: 3
    explanation: To create a subclass is the correct answer to “What is the purpose of the "extends" keyword in Java”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: In Java, can an interface extend another interface?
    options:
      - No, interfaces cannot extend other interfaces
      - Only if both interfaces have the same methods
      - Yes, an interface can extend multiple interfaces
      - Only if the interface is marked as "private"
    answer: 2
    explanation: Yes, an interface can extend multiple interfaces is the correct answer to “In Java, can an interface extend another interface”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: What is the result of the following code snippet? abstract class MyAbstract { abstract void myMethod(); } class MyClass extends MyAbstract { void myMethod() { System.out.println("Implementation"); } public static void main(String[] args) { MyAbstract obj = new MyClass(); obj.myMethod(); } }
    options:
      - Runtime exception
      - Implementation
      - MyClass
      - None of these
    answer: 1
    explanation: Implementation is the correct answer to “What is the result of the following code snippet? abstract class MyAbstract { abstract void myMethod(); } class MyClass extends MyAbstract { void myMethod() { System.out.println("Implementation"); } public static void main(String[] args) { MyAbstract obj = new MyClass(); obj.myMethod(); } }”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: In Java, can an abstract class have non-abstract methods?
    options:
      - Only if the abstract methods are marked as "static"
      - Only if the non-abstract methods are marked as "private"
      - Yes, an abstract class can have both abstract and non-abstract methods
      - No, abstract classes can only have abstract methods
    answer: 2
    explanation: Yes, an abstract class can have both abstract and non-abstract methods is the correct answer to “In Java, can an abstract class have non-abstract methods”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: What is the purpose of the "default" keyword in Java interfaces?
    options:
      - To mark a method as abstract
      - To create a new interface
      - To declare a class
      - To specify the default implementation of a method
    answer: 3
    explanation: To specify the default implementation of a method is the correct answer to “What is the purpose of the "default" keyword in Java interfaces”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: What is the result of the following code snippet? interface MyInterface { default void myMethod() { System.out.println("Default Implementation"); } } class MyClass implements MyInterface { public static void main(String[] args) { MyInterface obj = new MyClass(); obj.myMethod(); } }
    options:
      - Default Implementation
      - Compilation error
      - Runtime exception
      - MyClass
    answer: 0
    explanation: Default Implementation is the correct answer to “What is the result of the following code snippet? interface MyInterface { default void myMethod() { System.out.println("Default Implementation"); } } class MyClass implements MyInterface { public static void main(String[] args) { MyInterface obj = new MyClass(); obj.myMethod(); } }”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: In Java, can a class implement an interface and extend an abstract class simultaneously?
    options:
      - Only if the class is marked as "final"
      - Only if both the interface and abstract class have the same methods
      - No, it is not allowed
      - Yes, a class can implement an interface and extend an abstract class
    answer: 3
    explanation: Yes, a class can implement an interface and extend an abstract class is the correct answer to “In Java, can a class implement an interface and extend an abstract class simultaneously”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: What is the purpose of the "final" keyword in Java?
    options:
      - To declare an abstract method
      - To create a static class
      - To indicate that a class, method, or variable cannot be further extended, overridden, or modified
      - To indicate that a method is abstract
    answer: 2
    explanation: To indicate that a class, method, or variable cannot be further extended, overridden, or modified is the correct answer to “What is the purpose of the "final" keyword in Java”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: In Java, can an abstract class have constructors?
    options:
      - Only if the constructors are marked as "private"
      - Yes, an abstract class can have constructors
      - Only if the constructors are marked as "static"
      - None of These
    answer: 1
    explanation: Yes, an abstract class can have constructors is the correct answer to “In Java, can an abstract class have constructors”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: What is the result of the following code snippet? abstract class MyAbstract { MyAbstract() { System.out.println("Constructor"); } } class MyClass extends MyAbstract { public static void main(String[] args) { MyClass obj = new MyClass(); } }
    options:
      - MyClass
      - Runtime exception
      - Constructor
      - Compilation error
    answer: 2
    explanation: Constructor is the correct answer to “What is the result of the following code snippet? abstract class MyAbstract { MyAbstract() { System.out.println("Constructor"); } } class MyClass extends MyAbstract { public static void main(String[] args) { MyClass obj = new MyClass(); } }”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: In Java, can an interface have static methods with implementations?
    options:
      - No, interfaces cannot have static methods
      - Only if the methods are marked as "private"
      - Only if the methods are marked as "final"
      - Yes, starting from Java 8, interfaces can have static methods with implementations
    answer: 3
    explanation: Yes, starting from Java 8, interfaces can have static methods with implementations is the correct answer to “In Java, can an interface have static methods with implementations”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: What is the result of the following code snippet? interface MyInterface { static void myMethod() { System.out.println("Static Method"); } } class MyClass implements MyInterface { public static void main(String[] args) { MyInterface.myMethod(); } }
    options:
      - Static Method
      - Compilation error
      - Runtime exception
      - MyClass
    answer: 0
    explanation: Static Method is the correct answer to “What is the result of the following code snippet? interface MyInterface { static void myMethod() { System.out.println("Static Method"); } } class MyClass implements MyInterface { public static void main(String[] args) { MyInterface.myMethod(); } }”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: In Java, can an abstract class have private methods with implementations?
    options:
      - Only if the methods are marked as "final"
      - Only if the methods are marked as "static"
      - No, abstract classes cannot have private methods
      - Yes, starting from Java 9, abstract classes can have private methods with implementations
    answer: 3
    explanation: Yes, starting from Java 9, abstract classes can have private methods with implementations is the correct answer to “In Java, can an abstract class have private methods with implementations”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: What is the result of the following code snippet? abstract class MyAbstract { private void myMethod() { System.out.println("Private Method"); } } class MyClass extends MyAbstract { public static void main(String[] args) { MyClass obj = new MyClass(); obj.myMethod(); } }
    options:
      - Private Method
      - Runtime exception
      - Compilation error
      - MyClass
    answer: 2
    explanation: Compilation error is the correct answer to “What is the result of the following code snippet? abstract class MyAbstract { private void myMethod() { System.out.println("Private Method"); } } class MyClass extends MyAbstract { public static void main(String[] args) { MyClass obj = new MyClass(); obj.myMethod(); } }”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: In Java, can an abstract class have static methods with implementations?
    options:
      - Only if the methods are marked as "private"
      - Yes, an abstract class can have static methods with implementations
      - Only if the methods are marked as "final"
      - None of These
    answer: 1
    explanation: Yes, an abstract class can have static methods with implementations is the correct answer to “In Java, can an abstract class have static methods with implementations”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: What is the result of the following code snippet? abstract class MyAbstract { static void myMethod() { System.out.println("Static Method"); } } class MyClass extends MyAbstract { public static void main(String[] args) { MyAbstract.myMethod(); } }
    options:
      - MyClass
      - Runtime exception
      - Static Method
      - Compilation error
    answer: 2
    explanation: Static Method is the correct answer to “What is the result of the following code snippet? abstract class MyAbstract { static void myMethod() { System.out.println("Static Method"); } } class MyClass extends MyAbstract { public static void main(String[] args) { MyAbstract.myMethod(); } }”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: In Java, can an abstract class have default methods with implementations?
    options:
      - No, abstract classes cannot have default methods
      - Only if the methods are marked as "private"
      - Only if the methods are marked as "final"
      - Yes, starting from Java 8, abstract classes can have default methods with implementations
    answer: 3
    explanation: Yes, starting from Java 8, abstract classes can have default methods with implementations is the correct answer to “In Java, can an abstract class have default methods with implementations”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: "Given the following piece of code: public class School{ public abstract double numberOfStudent(); } which of the following statements is true?"
    options:
      - The keywords public and abstract cannot be used together.
      - The method numberOfStudent() in class School must have a body.
      - You must add a return statement in method numberOfStudent().
      - Class School must be defined abstract.
    answer: 3
    explanation: "Class School must be defined abstract. is the correct answer to “Given the following piece of code: public class School{ public abstract double numberOfStudent(); } which of the following statements is true”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes."
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: Which of the following class definitions defines a legal abstract class?
    options:
      - class A { abstract void unfinished() { } }
      - class A { abstract void unfinished(); }
      - abstract class A { abstract void unfinished(); }
      - public class abstract A { abstract void unfinished(); }
    answer: 2
    explanation: abstract class A { abstract void unfinished(); } is the correct answer to “Which of the following class definitions defines a legal abstract class”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
---


