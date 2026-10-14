---
title: Declaration And Access Control — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Declaration And Access Control — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: declaration-and-access-control-part-1
topicName: Declaration And Access Control — Part 1
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
    question: "Choose all the lines which if inserted independently instead of \"//insert code here\" will allow the following code to compile: public class Test{ public static void main(String args[]){ add(); add(1); add(1, 2); } // insert code here }"
    options:
      - void add(Integer... args){}
      - static void add(int... args, int y){}
      - static void add(int args...){}
      - static void add(int[]... args){}
      - static void add(int...args){}
    answer: 4
    explanation: "var-args = variable number of arguments = 0 or many void add(Integer... args){} is correct IF made \"static\" as it's called from a static context: main(). Var-args can be of both object(eg Integer) and primitive(eg int) types. static void add(int... args, int y){} is correct IF its parameters' order is reversed. If a method has both var-arg(0 or MAX 1) + non-var-args(0 or more) parameters then the var-arg parameter MUST come LAST! static void add(int args...){} : \"...\" must come after the type of the var-arg parameter, not after its name static void add(int[]... args){} : for this to be a correct declaration then add() should have been called something like this: \"add(arr);\" or \"add(arr, arr);\" where \"arr\" could be defined as \"int[] arr = new int[5];\" static void add(int...args){} is a valid way to define var-args (there is no need to have any space between \"...\" and the type and name of the var-arg param)"
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: What is the result of compiling and running the following code? class Base{ private Base(){ System.out.print("Base"); } } public class test extends Base{ public test(){ System.out.print("Derived"); } public static void main(String[] args){ new test(); } }
    options:
      - BaseDerived
      - Derived
      - Exception is thrown at runtime
      - Compilation Error
    answer: 3
    explanation: Implicit super constructor Base is not visible, must explicitly invoke another constructor.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What is the result of compiling and running the following code? public class Tester{ static int x = 4; public Tester(){ System.out.print(this.x); // line 1 Tester(); } public static void Tester(){ // line 2 System.out.print(this.x); // line 3 } public static void main(String... args){ // line 4 new Tester(); } }
    options:
      - Compile error at line 1 (static x must be only accessed inside static methods)
      - Compile error at line 2 (constructors can't be static)
      - Compile error at line 3 (static methods can't invoke this)
      - Compile error at line 4 (invalid argument type for method main )
      - "44"
    answer: 2
    explanation: static methods can't invoke 'this'.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What is the result of compiling and running the following code? public class Tester{ static int x = 4; int y = 9; public Tester(){ System.out.print(this.x); // line 1 printVariables(); } public static void printVariables(){ System.out.print(x); // line 2 System.out.print(y); // line 3 } public static void main(String... args) { // line 4 new Tester(); } }
    options:
      - Compile error at line 1 (static x must be only accessed inside static methods)
      - Compile error at line 3 (static methods can't make reference to non-static variables)
      - Compile error at line 4 (invalid argument type for method main)
      - "49"
      - Compile error at line 2 (must access x by writing Tester.x)
    answer: 1
    explanation: static methods cannot make references to non-static variables.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: "Determine output: public class InitDemo{ static int i = demo(); static{ System.out.print(i); } InitDemo(){ System.out.print(\"hello1\"); } public static void main(String... args){ System.out.print(\"Hello2\"); } static int demo(){ System.out.print(\"InsideDemo\"); return 10; } }"
    options:
      - Compilation error.
      - IllegalArgumentException is thrown at runtime.
      - InsideDemo 10 Hello2
      - Hello2 InsideDemo 10
      - InsideDemo 10 Hello2 hello1
    answer: 2
    explanation: As soon as the class are loaded static variables are initialized first. To initialize it demo must be called first then then static block executes and then main method is called.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: A package is a collection of
    options:
      - Classes
      - Interfaces
      - Editing tools
      - Classes and Interfaces
      - Editing tools and Interfaces
    answer: 3
    explanation: "Think of a package like a folder or a directory on your computer. What do you usually put in a folder? Files! In Java, packages help us organize our code. Classes and Interfaces are both types of \"files\" in Java. So, a package can contain both. Option A is partially correct (Classes), but it's not the whole story. Option B is also partially correct (Interfaces), but it's also not the complete picture. Option C and Option E are incorrect because \"Editing tools\" are not stored within the Java package. Option D is the most accurate. Therefore, the correct answer is D: Classes and Interfaces."
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: You have the following code in a file called Test.java class Base{ public static void main(String[] args){ System.out.println("Hello"); } } public class Test extends Base{} What will happen if you try to compile and run this?
    options:
      - It will fail to compile.
      - Runtime error
      - Compiles and runs with no output.
      - Compiles and runs printing
    answer: 3
    explanation: This will compile and print "Hello". The entry point for a standalone java program is the main method of the class that is being run. The java run-time system will look for that method in class Test and find that it should have such a method. It does not matter whether it is defined in the class itself or is inherited from a parent class.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What is the output for the below code? public class A{ static{ System.out.println("static"); } { System.out.println("block"); } public A(){ System.out.println("A"); } public static void main(String[] args){ A a = new A(); } }
    options:
      - A block static
      - static block A
      - static A
      - A
      - None of these
    answer: 1
    explanation: First execute static block, then statement block and then constructor.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What will be the output? public class Test{ public static void main(String[] args){ String value = "abc"; changeValue(value); System.out.println(value); } public static void changeValue(String a){ a = "xyz"; } }
    options:
      - abc
      - xyz
      - Compilation fails
      - Compilation clean but no output
      - None of these
    answer: 0
    explanation: Java pass reference as value. passing the object reference, and not the actual object itself. Simply reassigning to the parameter used to pass the value into the method will do nothing, because the parameter is essentially a local variable.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What will be the output for the below code? public class Test{ static{ int a = 5; } public static void main(String[] args){ System.out.println(a); } }
    options:
      - Compile with error
      - "5"
      - "0"
      - Runtime Exception
      - None of these
    answer: 0
    explanation: A variable declared in a static initializer is not accessible outside its enclosing block.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: "Determine output: class A{ { System.out.print(\"b1 \"); } public A(){ System.out.print(\"b2 \"); } } class B extends A{ static{ System.out.print(\"r1 \"); } public B(){ System.out.print(\"r2 \"); } { System.out.print(\"r3 \"); } static{ System.out.print(\"r4 \"); } } public class Test extends B{ public static void main(String[] args){ System.out.print(\"pre \"); new Test(); System.out.println(\"post \"); } }"
    options:
      - r1 r4 pre b1 b2 post
      - pre r1 r4 b1 b2 r2 r3 post
      - r1 r4 pre b1 b2 r3 r2 post
      - r1 r4 pre b1 b2 post r3 r2
      - Compilation fail
    answer: 2
    explanation: All static blocks execute first then blocks and constructor. Blocks and constructor executes (super class block then super class constructor, sub class block then sub class constructor). Sequence for static blocks is super class first then sub class. Sequence for blocks is super class first then sub class.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: "What will be the output for the below code? static public class Test{ public static void main(String[] args){ char c = 'a'; switch(c){ case 65 : System.out.println(\"one\");break; case 'a': System.out.println(\"two\");break; case 3 : System.out.println(\"three\"); } } }"
    options:
      - one
      - two
      - Compile error - char can't be permitted in switch statement.
      - Compile error - Illegal modifier for the class Test; only public, abstract & final are permitted.
      - None of these
    answer: 3
    explanation: Outer class can only declare public , abstract and final. Illegal modifier for the class Test; only public, abstract & final are permitted.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What will be the output after compiling and running following program code? public class Test{ static int a; public static void main(String[] args){ System.out.println("one"); call(1); } static void call(int a){ this.a=10; System.out.println("two "+a); } }
    options:
      - one two 1
      - one two 10
      - one two 0
      - Compile time error.
      - None of these
    answer: 3
    explanation: Static members are common for all objects, where as ‘this’ refer to a particular object. so we cant use ‘this’ operator in the static methods.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What will be the output after the following program is compiled and executed? public class Test{ public static void main(String args[]){ int x = 10; x = myMethod(x--); System.out.print(x); } static int myMethod(final int x){ return x--; } }
    options:
      - The will compile successfully and display 9 as output.
      - The program will lead to compilation error.
      - The program will lead to runtime error.
      - The program will compile successfully and display 10 as output.
      - None of these
    answer: 1
    explanation: While compiling the Test class, the compilation error occurs implying that the final parameter x cannot be assigned a value. Therefore the option B is correct and remaining options are incorrect.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What is the default access modifier for class members in Java if no access modifier is specified?
    options:
      - public
      - protected
      - private
      - package-private
    answer: 3
    explanation: package-private is the correct answer to “What is the default access modifier for class members in Java if no access modifier is specified”. This question is standard in competitive examination syllabi for Declaration And Access Control.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: Which access modifier restricts a class member's visibility only to the same class and its subclasses?
    options:
      - private
      - public
      - protected
      - package-private
    answer: 2
    explanation: protected is the correct answer to “Which access modifier restricts a class member's visibility only to the same class and its subclasses”. This question is standard in competitive examination syllabi for Declaration And Access Control.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What keyword is used to declare a constant in Java, which is implicitly final and static?
    options:
      - final
      - const
      - static
      - constant
    answer: 0
    explanation: final is the correct answer to “What keyword is used to declare a constant in Java, which is implicitly final and static”. This question is standard in competitive examination syllabi for Declaration And Access Control.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: Which of the following access modifiers allows access to a class member from any class in any package?
    options:
      - protected
      - private
      - public
      - default
    answer: 2
    explanation: public is the correct answer to “Which of the following access modifiers allows access to a class member from any class in any package”. This question is standard in competitive examination syllabi for Declaration And Access Control.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: What is the access level of a class member with no access modifier specified in Java?
    options:
      - public
      - protected
      - private
      - package-private
    answer: 3
    explanation: package-private is the correct answer to “What is the access level of a class member with no access modifier specified in Java”. This question is standard in competitive examination syllabi for Declaration And Access Control.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: In Java, which access modifier allows a method or variable to be accessed within the same package only?
    options:
      - private
      - public
      - protected
      - package-private
    answer: 3
    explanation: package-private is the correct answer to “In Java, which access modifier allows a method or variable to be accessed within the same package only”. This question is standard in competitive examination syllabi for Declaration And Access Control.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: Which keyword is used to explicitly specify that a method cannot be overridden in a subclass?
    options:
      - override
      - final
      - static
      - super
    answer: 1
    explanation: final is the correct answer to “Which keyword is used to explicitly specify that a method cannot be overridden in a subclass”. This question is standard in competitive examination syllabi for Declaration And Access Control.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What is the default access modifier for a class in Java if no access modifier is specified?
    options:
      - private
      - public
      - protected
      - package-private
    answer: 3
    explanation: package-private is the correct answer to “What is the default access modifier for a class in Java if no access modifier is specified”. This question is standard in competitive examination syllabi for Declaration And Access Control.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: Which access modifier allows a class member to be accessed only within its own class and package?
    options:
      - public
      - protected
      - private
      - package-private
    answer: 3
    explanation: package-private is the correct answer to “Which access modifier allows a class member to be accessed only within its own class and package”. This question is standard in competitive examination syllabi for Declaration And Access Control.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: In Java, which access modifier allows a class member to be accessed from anywhere in the code?
    options:
      - public
      - protected
      - private
      - package-private
    answer: 0
    explanation: public is the correct answer to “In Java, which access modifier allows a class member to be accessed from anywhere in the code”. This question is standard in competitive examination syllabi for Declaration And Access Control.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: What keyword is used to declare a method that can be called without creating an instance of the class?
    options:
      - static
      - final
      - public
      - this
    answer: 0
    explanation: static is the correct answer to “What keyword is used to declare a method that can be called without creating an instance of the class”. This question is standard in competitive examination syllabi for Declaration And Access Control.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Which of the following access modifiers restricts a method or variable's access to the same package only?
    options:
      - public
      - protected
      - private
      - package-private
    answer: 3
    explanation: package-private is the correct answer to “Which of the following access modifiers restricts a method or variable's access to the same package only”. This question is standard in competitive examination syllabi for Declaration And Access Control.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: In Java, what is the purpose of the static keyword when applied to a variable?
    options:
      - It makes the variable non-static.
      - It initializes the variable.
      - It allows access from any class.
      - It makes the variable constant.
    answer: 2
    explanation: It allows access from any class. is the correct answer to “In Java, what is the purpose of the static keyword when applied to a variable”. This question is standard in competitive examination syllabi for Declaration And Access Control.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: Which keyword is used to define a superclass's method that is overridden by a subclass method?
    options:
      - override
      - extends
      - super
      - implement
    answer: 2
    explanation: super is the correct answer to “Which keyword is used to define a superclass's method that is overridden by a subclass method”. This question is standard in competitive examination syllabi for Declaration And Access Control.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: What is the access level of a class member declared as private in Java?
    options:
      - public
      - protected
      - private
      - package-private
    answer: 2
    explanation: private is the correct answer to “What is the access level of a class member declared as private in Java”. This question is standard in competitive examination syllabi for Declaration And Access Control.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: Which access modifier allows a class member to be accessed within the same package and its subclasses?
    options:
      - private
      - public
      - protected
      - package-private
    answer: 2
    explanation: protected is the correct answer to “Which access modifier allows a class member to be accessed within the same package and its subclasses”. This question is standard in competitive examination syllabi for Declaration And Access Control.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: What is the keyword used to declare a class that cannot be instantiated and can only be extended?
    options:
      - final
      - const
      - static
      - abstract
    answer: 3
    explanation: abstract is the correct answer to “What is the keyword used to declare a class that cannot be instantiated and can only be extended”. This question is standard in competitive examination syllabi for Declaration And Access Control.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: In Java, what access modifier is used to specify that a class member can be accessed only within its class?
    options:
      - protected
      - private
      - public
      - package-private
    answer: 1
    explanation: private is the correct answer to “In Java, what access modifier is used to specify that a class member can be accessed only within its class”. This question is standard in competitive examination syllabi for Declaration And Access Control.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: Which of the following is not an access modifier in Java?
    options:
      - abstract
      - final
      - transient
      - static
    answer: 0
    explanation: abstract is the correct answer to “Which of the following is not an access modifier in Java”. This question is standard in competitive examination syllabi for Declaration And Access Control.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: What access modifier allows a class member to be accessed from any class in the same package or any subclass?
    options:
      - protected
      - private
      - public
      - default
    answer: 2
    explanation: public is the correct answer to “What access modifier allows a class member to be accessed from any class in the same package or any subclass”. This question is standard in competitive examination syllabi for Declaration And Access Control.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: In Java, which access modifier allows a class member to be accessed from any class, even outside the package?
    options:
      - public
      - protected
      - private
      - package-private
    answer: 0
    explanation: public is the correct answer to “In Java, which access modifier allows a class member to be accessed from any class, even outside the package”. This question is standard in competitive examination syllabi for Declaration And Access Control.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: What keyword is used to declare a method that is implemented in a subclass to provide a specific implementation?
    options:
      - abstract
      - override
      - implement
      - extends
    answer: 0
    explanation: abstract is the correct answer to “What keyword is used to declare a method that is implemented in a subclass to provide a specific implementation”. This question is standard in competitive examination syllabi for Declaration And Access Control.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: In Java, what is the purpose of the final keyword when applied to a method?
    options:
      - It makes the method non-final.
      - It allows method overriding.
      - It makes the method constant.
      - It makes the method static.
    answer: 2
    explanation: It makes the method constant. is the correct answer to “In Java, what is the purpose of the final keyword when applied to a method”. This question is standard in competitive examination syllabi for Declaration And Access Control.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: Which access modifier allows a class member to be accessed from any class in the same package but not from outside?
    options:
      - protected
      - private
      - public
      - default
    answer: 3
    explanation: default is the correct answer to “Which access modifier allows a class member to be accessed from any class in the same package but not from outside”. This question is standard in competitive examination syllabi for Declaration And Access Control.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: What keyword is used to declare a variable that can be accessed without creating an instance of the class?
    options:
      - static
      - final
      - public
      - this
    answer: 0
    explanation: static is the correct answer to “What keyword is used to declare a variable that can be accessed without creating an instance of the class”. This question is standard in competitive examination syllabi for Declaration And Access Control.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: Which access modifier restricts a class member's visibility to only the same class, its package, and subclasses?
    options:
      - default
      - private
      - public
      - protected
    answer: 3
    explanation: protected is the correct answer to “Which access modifier restricts a class member's visibility to only the same class, its package, and subclasses”. This question is standard in competitive examination syllabi for Declaration And Access Control.
    keyConcept: Declaration And Access Control
    testedIn:
      - FPSC
      - PPSC
---


