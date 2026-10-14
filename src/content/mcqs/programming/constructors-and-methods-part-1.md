---
title: Constructors And Methods — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Constructors And Methods — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: constructors-and-methods-part-1
topicName: Constructors And Methods — Part 1
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
    question: What is the return type of a constructor in Java?
    options:
      - void
      - int
      - The same as the class name
      - String
    answer: 2
    explanation: Constructors are special methods in Java used to create objects of a class. They have the same name as the class itself. Unlike other methods, constructors don't have an explicit return type. Their job is to initialize the object's member variables (fields) with values. Therefore, they implicitly return a reference to the newly created object. The correct answer is option C, because it correctly states the return type is implicitly the same as the class name .
    keyConcept: Constructors And Methods
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: What is the expected output? public class Profile { private Profile(int w) { // line 1 System.out.print(w); } public static Profile() { // line 5 System.out.print (10); } public static void main(String args[]) { Profile obj = new Profile(50); } }
    options:
      - Won't compile because of line (1), constructor can't be private
      - 10 50
      - "50"
      - Won't compile because of line (5), constructor can't be static
    answer: 3
    explanation: Only public, protected, private and default (no access modifier) are legal while declaring constructors.
    keyConcept: Constructors And Methods
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: The following code contains one compilation error, find it? public class Test { Test() { } // line 1 static void Test() { this(); } // line 2 public static void main(String[] args) { // line 3 Test(); // line 4 } }
    options:
      - At line 1, constructor Tester must be marked public like its class
      - At line 2, constructor call
      - At line 3, compilation error, ambiguity problem, compiler can't determine whether a constructor
      - At line 4
    answer: 1
    explanation: a constructor call (super() or this() ) must be the first statement inside a constructor. No constructor calls are allowed inside a method. static void Tester() is a method not a constructor.
    keyConcept: Constructors And Methods
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: Which of the following options is the best for generating random integer 0 or 1?
    options:
      - (int)Math.random()
      - (int)Math.random() + 1
      - (int)(Math.random() + 0.5)
      - (int)(Math.random() + 0.2)
    answer: 2
    explanation: "The correct answer is Option C: (int)(Math.random() + 0.5) In Java, to generate a random integer that can be either 0 or 1, you can use the `Math.random()` method, which returns a random double value between 0.0 (inclusive) and 1.0 (exclusive). To convert this into either 0 or 1, you need to add 0.5 to the result and then cast it to an integer using `(int)`. Here's the breakdown of the options: - Option A: `(int)Math.random()` would generate either 0 or a random positive integer, but not necessarily 1. - Option B: `(int)Math.random() + 1` would generate random positive integers starting from 1 and not 0. - Option C: `(int)(Math.random() + 0.5)` adds 0.5 to the random value, making it either 0.5 or 1.5, and then casts it to an integer, resulting in either 0 or 1, which is what you want. - Option D: `(int)(Math.random() + 0.2)` would not reliably generate only 0 or 1; it can produce a range of integers starting from 0."
    keyConcept: Constructors And Methods
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: What is Math.floor(3.6)?
    options:
      - "3.0"
      - "3"
      - "4"
      - "4.0"
    answer: 0
    explanation: The method floor gives the largest integer that is less than or equal to the argument.
    keyConcept: Constructors And Methods
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What is the expected output? public class Profile { private Profile(int w) { // line 1 System.out.print(w); } public final Profile() { // line 5 System.out.print(10); } public static void main(String args[]) { Profile obj = new Profile(50); } }
    options:
      - Won't compile because of line (1); constructor can't be private
      - Won't compile because of line (5); constructor can't be final
      - "50"
      - 10 50
    answer: 1
    explanation: Only public, protected, private and default(no modifier) are legal when declaring constructors.
    keyConcept: Constructors And Methods
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What is the expected output? class Animal { Animal() { System.out.println("Animal"); } } class Wild extends Animal{ Wild() { System.out.println("Wild"); super(); } } public class Test { public static void main(String args[]) { Wild wild = new Wild(); } }
    options:
      - Animal Wild
      - Wild Animal
      - Runtime Exception
      - Compilation Error
    answer: 3
    explanation: super() call must be the first statement in a constructor.
    keyConcept: Constructors And Methods
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: Determine output of the following program. public class Test{ public static void main(String args[]){ System.out.println( Math.floor( Math.random( ) ) ) ; } }
    options:
      - "1.0"
      - "10.0"
      - "0.0"
      - "0.5"
    answer: 2
    explanation: "random() is a static method defined in Math class. Syntax: static double random() random() always return a value in the range 0.0 <= Math.random() <1.0 So, taking floor function of any number between above range always yield 0.0. Ex: Math.floor(0.958127101241...) = 0.0 Math.floor(0.05684865565...) = 0.0"
    keyConcept: Constructors And Methods
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What is the output of the above program? class Num { Num(double x ){ System.out.println( x ) ; } } public class Test extends Num { public static void main(String[] args){ Num num = new Num( 2 ) ; } }
    options:
      - "0"
      - "2.0"
      - Compile time error
      - None of the above
    answer: 2
    explanation: The given program creates a class Num that has a constructor with a double parameter. In the main method, an object of the Num class is created with the value 2, which is passed as a double value. Since 2 is treated as an integer, Java automatically converts it to a double (2.0), and the constructor prints this value. Thus, the output of the program is 2.0.
    keyConcept: Constructors And Methods
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: "Determine Output: class A{ public static void method(int i){ System.out.print(\"Method 1\"); } public static int method(String str){ System.out.print(\"Method 2\"); return 0; } } public class Test{ public static void main(String args[]){ A.method(5); } }"
    options:
      - Method 1
      - Method 2
      - Compile time error as final method can't be overloaded
      - None of the above
    answer: 0
    explanation: Overloading depends only on the method or constructor name and its parameter list i.e. method(int i) and method(String str) So, overloading does not depend on access modifiers(public, private, protected), access specifiers(static, final) and return type.
    keyConcept: Constructors And Methods
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What is the output of the program? class Test{ public int display(int x, int y){ return ("The sum of x and y is " + x + y); } public static void main(String args[]){ Test test = new Test(); System.out.println(test.display(4,5)); } }
    options:
      - The sum of x and y is 9
      - The sum of x and y is 45
      - does not compile
      - None of the above
    answer: 2
    explanation: Return type of method display is int and we are trying to return string.
    keyConcept: Constructors And Methods
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: The implicit return type of a constructor is
    options:
      - void
      - A class object in which it is defined.
      - There is no return type.
      - None of the above
    answer: 1
    explanation: Constructors are special methods in Java used to create objects of a class. Unlike other methods, constructors don't have an explicit return type. They don't use keywords like void , int , etc. to specify what they return. Instead, their job is to initialize the object being created, setting initial values for its member variables. When a constructor is called, it automatically returns a newly created object of the class. Therefore, the implicit return type of a constructor is the class object itself. So the correct option is B .
    keyConcept: Constructors And Methods
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What is the prototype of the default constructor? public class Test { }
    options:
      - public Test(void)
      - Test( )
      - Test(void)
      - public Test( )
      - None of these
    answer: 3
    explanation: Option A and B are wrong because they use the default access modifier and the access modifier for the class is public (remember, the default constructor has the same access modifier as the class). Option C is wrong. The void makes the compiler think that this is a method specification - in fact if it were a method specification the compiler would spit it out.
    keyConcept: Constructors And Methods
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What is the output of the program? class MyClass{ MyClass(){ System.out.print("one"); } public void myMethod(){ this(); System.out.print("two"); } } public class TestClass{ public static void main(String args[]){ MyClass obj = new MyClass(); obj.myMethod(); } }
    options:
      - two one one
      - one one two
      - one Exception
      - Compilation Error
      - None of these
    answer: 3
    explanation: The code will result in a compilation error because in the method myMethod, the use of this() is incorrect. In Java, this() is used to call another constructor, but it can only be used in a constructor, not in a method. Using this() in myMethod causes a compilation error. Thus, the program will not compile, and the correct answer is a Compilation Error.
    keyConcept: Constructors And Methods
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: "Determine output: public class Test{ public static void main(String args[]){ MyClass obj = new MyClass(); obj.val = 1; obj.call(obj); System.out.println(obj.val); } } class MyClass{ public int val; public void call(MyClass ref){ ref.val++; } }"
    options:
      - "1"
      - "2"
      - "3"
      - Compilation Error
      - None of these
    answer: 1
    explanation: "Step-by-step breakdown: 1. The main method in the Test class creates an instance of MyClass called obj. 2. The val field of obj is set to 1 with obj.val = 1. 3. The call method is invoked on obj with obj itself as the argument: obj.call(obj). 4. Inside the call method, the val field of the passed MyClass instance (ref) is incremented by 1 using ref.val++. Since ref refers to obj, this increments obj.val from 1 to 2. 5. Finally, System.out.println(obj.val) prints the value of obj.val, which is now 2. Therefore, the output of the program is 2 ."
    keyConcept: Constructors And Methods
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: public class MyClass{ } For the above class(MyClass) what is the correct way of declaring constructor?
    options:
      - MyClass(){}
      - MyClass(void) {}
      - public MyClass(){}
      - public MyClass(void){}
      - 1 and 3
    answer: 4
    explanation: Choice A,C are the correct answers. The default access specifier for any constructor is same as the access specifier of class.so the options A and C are correct.
    keyConcept: Constructors And Methods
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What is the output for the below code? public class A{ int add(int i, int j){ return i+j; } } public class B extends A{ public static void main(String argv[]){ short s = 9; System.out.println(add(s,6)); } }
    options:
      - Compile fail due to error on line no 2
      - Compile fail due to error on line no 9
      - Compile fail due to error on line no 8
      - "15"
      - None of these
    answer: 1
    explanation: Cannot make a static reference to the non-static method add(int, int) from the type A. The short s is autoboxed correctly, but the add() method cannot be invoked from a static method because add() method is not static.
    keyConcept: Constructors And Methods
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: What is the output for the below code? public class Test{ public static void printValue(int i, int j, int k){ System.out.println("int"); } public static void printValue(byte...b){ System.out.println("long"); } public static void main(String... args){ byte b = 9; printValue(b,b,b); } }
    options:
      - long
      - int
      - Compilation fails
      - Compilation clean but throws RuntimeException
      - None of these
    answer: 1
    explanation: Primitive widening uses the smallest method argument possible. (For Example if you pass short value to a method but method with short argument is not available then compiler chooses method with int argument). But in this case compiler will prefer the older style before it chooses the newer style, to keep existing code more robust. var-args method is looser than wider.
    keyConcept: Constructors And Methods
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: What is the output for the below code? class A{ public A(){ System.out.println("A"); } public A(int i){ this(); System.out.println(i); } } class B extends A{ public B(){ System.out.println("B"); } public B(int i){ this(); System.out.println(i+3); } } public class Test{ public static void main (String[] args){ new B(5); } }
    options:
      - A B 8
      - A 5 B 8
      - A B 5
      - B 8 A 5
      - None of these
    answer: 0
    explanation: Constructor of class B call their superclass constructor of class A (public A()), which execute first, and that constructors can be overloaded. Then come to constructor of class B (public B (int i)).
    keyConcept: Constructors And Methods
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What will be the result of compiling and running the given code? class A{ int b=10; private A(){ this.b=7; } int f(){ return b; } } class B extends A{ int b; } public class Test{ public static void main(String[] args){ A a = new B(); System.out.println(a.f()); } }
    options:
      - Compilation Fails
      - Prints 0
      - Prints 10
      - Prints 7
      - None of these
    answer: 0
    explanation: Choice A is the correct answer. The code does not compile because the constructor of class A is declared as private. This creates a problem when the subclass constructor makes an implicit super() call to the parent class constructor at the time B is instantiated. Since the code does not compile, all the other choices are incorrect. If the constructor of A had not been private, the output would have been 7.
    keyConcept: Constructors And Methods
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: What will be the output of the following Java program? class recursion { int func (int n) { int result; result = func (n - 1); return result; } } class Output { public static void main(String args[]) { recursion obj = new recursion() ; System.out.print(obj.func(12)); } }
    options:
      - "0"
      - "1"
      - Compilation Error
      - Runtime Error
    answer: 3
    explanation: "Let's break down why the answer is a Runtime Error . The problem lies within the `func` method of the `recursion` class. It's trying to use recursion , which means a function calling itself. Here's the critical issue: The `func` method calls itself (`func(n - 1)`) without a base case . A base case is a condition that stops the recursive calls. Without a base case, the function keeps calling itself again and again. Imagine `func(12)` is called. It then calls `func(11)`, then `func(10)`, and so on. This continues indefinitely, each call placing another \"frame\" onto the call stack (memory used to track function calls). Eventually, the call stack runs out of space. This is called a StackOverflowError . StackOverflowError is a type of Runtime Error . Because the error happens while the program is running (not during compilation), it's a runtime error. Therefore, the correct answer is Option D: Runtime Error ."
    keyConcept: Constructors And Methods
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What is a constructor in Java?
    options:
      - A special method to create instances of classes
      - A method used for mathematical calculations
      - A method to perform string manipulations
      - An exception handling mechanism
    answer: 0
    explanation: A special method to create instances of classes is the correct answer to “What is a constructor in Java”. This question is standard in competitive examination syllabi for Constructors And Methods.
    keyConcept: Constructors And Methods
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: Which keyword is used to define a method in Java?
    options:
      - method
      - def
      - func
      - public
    answer: 3
    explanation: public is the correct answer to “Which keyword is used to define a method in Java”. This question is standard in competitive examination syllabi for Constructors And Methods.
    keyConcept: Constructors And Methods
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: In Java, which method is automatically called when an object is created?
    options:
      - start()
      - main()
      - init()
      - constructor()
    answer: 3
    explanation: constructor() is the correct answer to “In Java, which method is automatically called when an object is created”. This question is standard in competitive examination syllabi for Constructors And Methods.
    keyConcept: Constructors And Methods
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: What is method overloading in Java?
    options:
      - Defining multiple methods with the same name in the same class
      - Calling methods from another class
      - Using methods to load data from a file
      - Running methods in parallel threads
    answer: 0
    explanation: Defining multiple methods with the same name in the same class is the correct answer to “What is method overloading in Java”. This question is standard in competitive examination syllabi for Constructors And Methods.
    keyConcept: Constructors And Methods
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: What does the "void" keyword indicate in a method declaration?
    options:
      - The method does not return any value
      - The method is private
      - The method returns an integer value
      - The method is static
    answer: 0
    explanation: The method does not return any value is the correct answer to “What does the "void" keyword indicate in a method declaration”. This question is standard in competitive examination syllabi for Constructors And Methods.
    keyConcept: Constructors And Methods
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: Which access modifier is used for a method that can be accessed from any class in the same package?
    options:
      - public
      - private
      - protected
      - package-private (no modifier)
    answer: 3
    explanation: package-private (no modifier) is the correct answer to “Which access modifier is used for a method that can be accessed from any class in the same package”. This question is standard in competitive examination syllabi for Constructors And Methods.
    keyConcept: Constructors And Methods
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: What is the purpose of the "this" keyword in Java constructors and methods?
    options:
      - To refer to the current instance of the class
      - To call another method
      - To declare a local variable
      - To indicate a static method
    answer: 0
    explanation: To refer to the current instance of the class is the correct answer to “What is the purpose of the "this" keyword in Java constructors and methods”. This question is standard in competitive examination syllabi for Constructors And Methods.
    keyConcept: Constructors And Methods
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: Which keyword is used to prevent method overriding in Java?
    options:
      - final
      - abstract
      - static
      - override
    answer: 0
    explanation: final is the correct answer to “Which keyword is used to prevent method overriding in Java”. This question is standard in competitive examination syllabi for Constructors And Methods.
    keyConcept: Constructors And Methods
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: What is the correct syntax to call a method named "myMethod" from an object "myObject"?
    options:
      - myObject.myMethod()
      - myMethod.myObject()
      - myMethod()
      - myObject->myMethod()
    answer: 0
    explanation: myObject.myMethod() is the correct answer to “What is the correct syntax to call a method named "myMethod" from an object "myObject"”. This question is standard in competitive examination syllabi for Constructors And Methods.
    keyConcept: Constructors And Methods
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: Which method is called when an object is garbage collected in Java?
    options:
      - finalize()
      - destroy()
      - dispose()
      - clean()
    answer: 0
    explanation: finalize() is the correct answer to “Which method is called when an object is garbage collected in Java”. This question is standard in competitive examination syllabi for Constructors And Methods.
    keyConcept: Constructors And Methods
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: In Java, can a constructor have a return type?
    options:
      - No, constructors do not have a return type
      - Yes, it must have the same return type as the class
      - Yes, it can have any return type
      - Yes, but it must be "void"
    answer: 0
    explanation: No, constructors do not have a return type is the correct answer to “In Java, can a constructor have a return type”. This question is standard in competitive examination syllabi for Constructors And Methods.
    keyConcept: Constructors And Methods
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: What is method overriding in Java?
    options:
      - Defining a new method with the same name in a subclass
      - Hiding a method in the superclass
      - Redefining a method in the superclass
      - Defining multiple methods in the same class
    answer: 0
    explanation: Defining a new method with the same name in a subclass is the correct answer to “What is method overriding in Java”. This question is standard in competitive examination syllabi for Constructors And Methods.
    keyConcept: Constructors And Methods
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: In Java, what is the purpose of the "super" keyword in a constructor?
    options:
      - To call the superclass constructor
      - To create a new object
      - To access a static method
      - To indicate a private method
    answer: 0
    explanation: To call the superclass constructor is the correct answer to “In Java, what is the purpose of the "super" keyword in a constructor”. This question is standard in competitive examination syllabi for Constructors And Methods.
    keyConcept: Constructors And Methods
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: What is a "static" method in Java?
    options:
      - A method that belongs to the class rather than an instance
      - A method that cannot be called from other classes
      - A method that cannot be overridden
      - A method that returns a static value
    answer: 0
    explanation: A method that belongs to the class rather than an instance is the correct answer to “What is a "static" method in Java”. This question is standard in competitive examination syllabi for Constructors And Methods.
    keyConcept: Constructors And Methods
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: What is a parameterized constructor in Java?
    options:
      - A constructor with no parameters
      - A constructor with parameters that initialize object properties
      - A constructor with a return type
      - A constructor with static methods
    answer: 1
    explanation: A constructor with parameters that initialize object properties is the correct answer to “What is a parameterized constructor in Java”. This question is standard in competitive examination syllabi for Constructors And Methods.
    keyConcept: Constructors And Methods
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: Which keyword is used to call the constructor of the superclass in a subclass constructor?
    options:
      - super
      - this
      - extends
      - constructor
    answer: 0
    explanation: super is the correct answer to “Which keyword is used to call the constructor of the superclass in a subclass constructor”. This question is standard in competitive examination syllabi for Constructors And Methods.
    keyConcept: Constructors And Methods
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: What is the purpose of method parameters in Java?
    options:
      - To pass values into a method
      - To define local variables
      - To specify the return type
      - To create instance variables
    answer: 0
    explanation: To pass values into a method is the correct answer to “What is the purpose of method parameters in Java”. This question is standard in competitive examination syllabi for Constructors And Methods.
    keyConcept: Constructors And Methods
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: In Java, which keyword is used to define an abstract method?
    options:
      - abstract
      - method
      - void
      - public
    answer: 0
    explanation: abstract is the correct answer to “In Java, which keyword is used to define an abstract method”. This question is standard in competitive examination syllabi for Constructors And Methods.
    keyConcept: Constructors And Methods
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: What is method chaining in Java?
    options:
      - Calling multiple methods on the same object in a single line
      - Running methods concurrently
      - Defining methods with the same name
      - Using methods to chain objects together
    answer: 0
    explanation: Calling multiple methods on the same object in a single line is the correct answer to “What is method chaining in Java”. This question is standard in competitive examination syllabi for Constructors And Methods.
    keyConcept: Constructors And Methods
    testedIn:
      - FPSC
      - PPSC
---


