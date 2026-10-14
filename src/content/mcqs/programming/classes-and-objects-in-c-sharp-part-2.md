---
title: Classes And Objects In C Sharp — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Classes And Objects In C Sharp — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: classes-and-objects-in-c-sharp-part-2
topicName: Classes And Objects In C Sharp — Part 2
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
    question: What will be the output of the following C# code? static void Main(string[] args) { Mul(); m(); Console.ReadLine(); } static void Mul() { Console.WriteLine("4"); } static void m() { Console.WriteLine("3"); Mul(); }
    options:
      - 4 3 3
      - 4 4 3
      - 4 3 4
      - 3 4 4
    answer: 2
    explanation: 4 3 4 is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { Mul(); m(); Console.ReadLine(); } static void Mul() { Console.WriteLine("4"); } static void m() { Console.WriteLine("3"); Mul(); }”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: "Which among the following is the correct statement: Constructors are used to?"
    options:
      - initialize the objects
      - construct the data members
      - initialize the objects & construct the data members
      - none of the mentioned
    answer: 0
    explanation: "initialize the objects is the correct answer to “Which among the following is the correct statement: Constructors are used to”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp."
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What will be the correct statement of the following C# code? enum color:byte { yellow = 500, green = 1000, pink = 1300 }
    options:
      - byte value cannot be assigned to enum elements
      - enum elements should always take successive values
      - enum must always be of int type
      - When the valid range of byte exceeds, the compiler will report an error
    answer: 3
    explanation: When the valid range of byte exceeds, the compiler will report an error is the correct answer to “What will be the correct statement of the following C# code? enum color:byte { yellow = 500, green = 1000, pink = 1300 }”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: Choose the correct statement about enum used in C#.NET?
    options:
      - By default the first enumerator has a value equal to the number of elements present in the list
      - Values of the enum elements cannot be populated from database
      - The value of each successive enumerator is decreased by 1
      - An enumerator has a white space in its name
    answer: 1
    explanation: Values of the enum elements cannot be populated from database is the correct answer to “Choose the correct statement about enum used in C#.NET”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: What will be the output of the following C# code? { struct abc { int i; } class Program { static void Main(string[] args) { abc x = new abc(); abc z; x.i = 10; z = x; z.i = 15; console.Writeline(x.i + " " + y.i) } } }
    options:
      - 10 10
      - 10 15
      - 15 10
      - 15 15
    answer: 1
    explanation: 10 15 is the correct answer to “What will be the output of the following C# code? { struct abc { int i; } class Program { static void Main(string[] args) { abc x = new abc(); abc z; x.i = 10; z = x; z.i = 15; console.Writeline(x.i + " " + y.i) } } }”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What will be the output of the following C# code snippet? class maths { public int fact(int n) { int result; result = fact(n - 1) * n; return result; } } class Program { static void Main(string[] args) { maths obj = new maths(); Console.WriteLine(obj.fact(4)); Console.ReadLine(); } }
    options:
      - "24"
      - "30"
      - Compile time error
      - Runtime Error
    answer: 3
    explanation: Runtime Error is the correct answer to “What will be the output of the following C# code snippet? class maths { public int fact(int n) { int result; result = fact(n - 1) * n; return result; } } class Program { static void Main(string[] args) { maths obj = new maths(); Console.WriteLine(obj.fact(4)); Console.ReadLine(); } }”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What will be the output of the following C# code? class A { public int i; private int j; } class B :A { void display() { base.j = base.i + 1; Console.WriteLine(base.i + " " + base.j); } } class Program { static void Main(string[] args) { B obj = new B(); obj.i = 1; obj.j = 2; obj.display(); Console.ReadLine(); } }
    options:
      - 1, 3
      - 2, 3
      - 1, 2
      - compile time error
    answer: 3
    explanation: compile time error is the correct answer to “What will be the output of the following C# code? class A { public int i; private int j; } class B :A { void display() { base.j = base.i + 1; Console.WriteLine(base.i + " " + base.j); } } class Program { static void Main(string[] args) { B obj = new B(); obj.i = 1; obj.j = 2; obj.display(); Console.ReadLine(); } }”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: Which of the given modifiers can be used to prevent Method overriding?
    options:
      - Static
      - Constant
      - Sealed
      - final
    answer: 2
    explanation: Sealed is the correct answer to “Which of the given modifiers can be used to prevent Method overriding”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: Which of the following keyword is used to change data and behavior of a base class by replacing a member of the base class with a new derived member?
    options:
      - Overloads
      - Overrides
      - new
      - base
    answer: 2
    explanation: new is the correct answer to “Which of the following keyword is used to change data and behavior of a base class by replacing a member of the base class with a new derived member”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: Choose the wrong statement about 'INTERFACE' in C#.NET?
    options:
      - An explicitly implemented member could be accessed from an instance of the interface
      - Interfaces are declared public automatically
      - An interface could not contain signature of the indexer
      - None of the mentioned
    answer: 2
    explanation: An interface could not contain signature of the indexer is the correct answer to “Choose the wrong statement about 'INTERFACE' in C#.NET”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: Selecting appropriate method out of number of overloaded methods by matching arguments in terms of number, type and order and binding that selected method to object at compile time is called?
    options:
      - Static binding
      - Static Linking
      - Compile time polymorphism
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “Selecting appropriate method out of number of overloaded methods by matching arguments in terms of number, type and order and binding that selected method to object at compile time is called”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: If no access modifier for a class is specified, then class accessibility is defined as?
    options:
      - public
      - protected
      - private
      - internal
    answer: 2
    explanation: private is the correct answer to “If no access modifier for a class is specified, then class accessibility is defined as”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What will be the output of the following C# code? static void Main(string[] args) { int a = 5; int s = 0, c = 0; Mul (a, ref s, ref c); Console.WriteLine(s + "t " +c); Console.ReadLine(); } static void Mul (int x, ref int ss, ref int cc) { ss = x * x; cc = x * x * x; }
    options:
      - 125 25
      - 25 125
      - Compile time error
      - 0 0
    answer: 1
    explanation: 25 125 is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int a = 5; int s = 0, c = 0; Mul (a, ref s, ref c); Console.WriteLine(s + "t " +c); Console.ReadLine(); } static void Mul (int x, ref int ss, ref int cc) { ss = x * x; cc = x * x * x; }”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: Number of constructors a class can define is?
    options:
      - "1"
      - "2"
      - Any number
      - None of the mentioned
    answer: 2
    explanation: Any number is the correct answer to “Number of constructors a class can define is”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: Correct way to overload +operator?
    options:
      - public sample operator + (sample a, sample b)
      - public abstract operator + (sample a,sample b)
      - public static sample operator + (sample a, sample b)
      - all of the mentioned
    answer: 3
    explanation: all of the mentioned is the correct answer to “Correct way to overload +operator”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: The data members of a class by default are?
    options:
      - protected, public
      - private, public
      - private
      - public
    answer: 2
    explanation: private is the correct answer to “The data members of a class by default are”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What will be the output of the following C# code? static void Main(string[] args) { int i = 10; double d = 35.78; fun(i); fun(d); Console.ReadLine(); } static void fun(double d) { Console.WriteLine(d); }
    options:
      - 35.78 10
      - 10 35
      - 10 35.78
      - None of the mentioned
    answer: 2
    explanation: 10 35.78 is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int i = 10; double d = 35.78; fun(i); fun(d); Console.ReadLine(); } static void fun(double d) { Console.WriteLine(d); }”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: "What will be the Correct statement in the following C# code? class baseclass { int a; public baseclass(int a1) { a = a1; console.writeline(\" a \"); } class derivedclass : baseclass { public derivedclass (int a1) : base(a1) { console.writeline(\" b \"); } } class program { static void main(string[] args) { derivedclass d = new derivedclass(20); } } }"
    options:
      - Compile time error
      - b a
      - a b
      - The program will work correctly if we replace base(a1) with base.baseclass(a1)
    answer: 2
    explanation: "a b is the correct answer to “What will be the Correct statement in the following C# code? class baseclass { int a; public baseclass(int a1) { a = a1; console.writeline(\" a \"); } class derivedclass : baseclass { public derivedclass (int a1) : base(a1) { console.writeline(\" b \"); } } class program { static void main(string[] args) { derivedclass d = new derivedclass(20); } } }”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp."
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: The process of defining a method in a subclass having same name & type signature as a method in its superclass is known as?
    options:
      - Method overloading
      - Method overriding
      - Method hiding
      - None of the mentioned
    answer: 1
    explanation: Method overriding is the correct answer to “The process of defining a method in a subclass having same name & type signature as a method in its superclass is known as”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: Wrong statement about enum used in C#.NET is?
    options:
      - An enum can be declared inside a class
      - An object cannot be assigned to an enum variable
      - An enum can be declared outside a class
      - An enum can have Single and Double values
    answer: 3
    explanation: An enum can have Single and Double values is the correct answer to “Wrong statement about enum used in C#.NET is”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: What is the return type of destructor?
    options:
      - int
      - void
      - float
      - none of the mentioned
    answer: 3
    explanation: none of the mentioned is the correct answer to “What is the return type of destructor”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: "What will be the output of the following C# code? class A { public int i; protected int j; } class B : A { public int j; public void display() { base.j = 3; Console.WriteLine(i + \" \" + j); } } class Program { static void Main(string[] args) { B obj = new B(); obj.i = 1; obj.j = 2; obj.display(); Console.ReadLine(); } }"
    options:
      - 2 1
      - 1 0
      - 0 2
      - 1 2
    answer: 3
    explanation: "1 2 is the correct answer to “What will be the output of the following C# code? class A { public int i; protected int j; } class B : A { public int j; public void display() { base.j = 3; Console.WriteLine(i + \" \" + j); } } class Program { static void Main(string[] args) { B obj = new B(); obj.i = 1; obj.j = 2; obj.display(); Console.ReadLine(); } }”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp."
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: Access specifiers which can be used for an interface are?
    options:
      - Public
      - Protected
      - Private
      - All of the mentioned
    answer: 0
    explanation: Public is the correct answer to “Access specifiers which can be used for an interface are”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: A class consists of two interfaces with each interface consisting of three methods. The class had no instance data. Which of the following indicates the correct size of object created from this class?
    options:
      - 12 bytes
      - 16 bytes
      - 0 bytes
      - 24 bytes
    answer: 3
    explanation: 24 bytes is the correct answer to “A class consists of two interfaces with each interface consisting of three methods. The class had no instance data. Which of the following indicates the correct size of object created from this class”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: "Choose the correct statements among the following:"
    options:
      - An abstract method does not have implementation
      - An abstract method can take either static or virtual modifiers
      - An abstract method can be declared only in abstract class
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “Choose the correct statements among the following:”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: What will be the output of the following C# code? class overload { public int x; int y; public int add(int a) { x = a + 1; return x; } public int add(int a, int b) { x = a + 2; return x; } } class Program { static void Main(string[] args) { overload obj = new overload(); overload obj1 = new overload(); int a = 0; obj.add(6); obj1.add(6, 2); Console.WriteLine(obj.x); Console.WriteLine(obj1.x); Console.ReadLine(); } }
    options:
      - 8 8
      - 0 2
      - 8 10
      - 7 8
    answer: 3
    explanation: 7 8 is the correct answer to “What will be the output of the following C# code? class overload { public int x; int y; public int add(int a) { x = a + 1; return x; } public int add(int a, int b) { x = a + 2; return x; } } class Program { static void Main(string[] args) { overload obj = new overload(); overload obj1 = new overload(); int a = 0; obj.add(6); obj1.add(6, 2); Console.WriteLine(obj.x); Console.WriteLine(obj1.x); Console.ReadLine(); } }”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: Which reference modifier is used to define reference variable?
    options:
      - "&"
      - ref
      - "#"
      - $
    answer: 1
    explanation: ref is the correct answer to “Which reference modifier is used to define reference variable”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: "What will be the output of the following C# code? class maths { int i; public maths(int x) { i = x; Console.WriteLine(\" hello: \"); } } class maths1 : maths { public maths1(int x) :base(x) { Console.WriteLine(\"bye\"); } } class Program { static void Main(string[] args) { maths1 k = new maths1(12); Console.ReadLine(); } }"
    options:
      - hello bye
      - 12 hello
      - bye 12
      - Compile time error
    answer: 0
    explanation: "hello bye is the correct answer to “What will be the output of the following C# code? class maths { int i; public maths(int x) { i = x; Console.WriteLine(\" hello: \"); } } class maths1 : maths { public maths1(int x) :base(x) { Console.WriteLine(\"bye\"); } } class Program { static void Main(string[] args) { maths1 k = new maths1(12); Console.ReadLine(); } }”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp."
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: "\"A mechanism that binds together code and data in manipulates, and keeps both safe from outside interference and misuse. In short it isolates a particular code and data from all other codes and data. A well-defined interface controls access to that particular code and data.\""
    options:
      - Abstraction
      - Polymorphism
      - Inheritance
      - Encapsulation
    answer: 3
    explanation: Encapsulation is the correct answer to “"A mechanism that binds together code and data in manipulates, and keeps both safe from outside interference and misuse. In short it isolates a particular code and data from all other codes and data. A well-defined interface controls access to that particular code and data."”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: To override a method in the subclass, the base class method should be defined as?
    options:
      - Virtual
      - Abstract
      - Override
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “To override a method in the subclass, the base class method should be defined as”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: Calculate the number of bytes a structure variable s occupies in the memory if it is defined as follows. class abc { int i; Decimal d; } struct sample { private int x; private Single y; private trial z; } sample s = new sample();
    options:
      - 24 bytes
      - 8 bytes
      - 16 bytes
      - 12 bytes
    answer: 3
    explanation: 12 bytes is the correct answer to “Calculate the number of bytes a structure variable s occupies in the memory if it is defined as follows. class abc { int i; Decimal d; } struct sample { private int x; private Single y; private trial z; } sample s = new sample();”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: What is Recursion in CSharp defined as?
    options:
      - Recursion is another form of class
      - Recursion is another process of defining a method that calls other methods repeatedly
      - Recursion is a process of defining a method that calls itself repeatedly
      - Recursion is a process of defining a method that calls other methods which in turn calls this method
    answer: 2
    explanation: Recursion is a process of defining a method that calls itself repeatedly is the correct answer to “What is Recursion in CSharp defined as”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: "What will be the output of the following C# code? class maths { int i; public maths(int ii) { ii = 12; int j = 12; int r = ii * j; Console.WriteLine(r); } } class maths1 : maths { public maths1(int u) :base(u) { u = 13; int h = 13; Console.WriteLine(u + h); } } class maths2 : maths1 { public maths2(int k) :base(k) { k = 24; int o = 6 ; Console.WriteLine(k /o); } } class Program { static void Main(string[] args) { maths2 t = new maths2(10); Console.ReadLine(); } }"
    options:
      - 4, 26, 144
      - 26, 4, 144
      - 144, 26, 4
      - 0, 0, 0
    answer: 2
    explanation: "144, 26, 4 is the correct answer to “What will be the output of the following C# code? class maths { int i; public maths(int ii) { ii = 12; int j = 12; int r = ii * j; Console.WriteLine(r); } } class maths1 : maths { public maths1(int u) :base(u) { u = 13; int h = 13; Console.WriteLine(u + h); } } class maths2 : maths1 { public maths2(int k) :base(k) { k = 24; int o = 6 ; Console.WriteLine(k /o); } } class Program { static void Main(string[] args) { maths2 t = new maths2(10); Console.ReadLine(); } }”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp."
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: Which keyword is used to refer baseclass constructor to subclass constructor?
    options:
      - This
      - Static
      - Base
      - Extend
    answer: 2
    explanation: Base is the correct answer to “Which keyword is used to refer baseclass constructor to subclass constructor”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: What will be the output of the following C# code? class test { public void print() { Console.WriteLine("Csharp:"); } } class Program { static void Main(string[] args) { test t; t.print(); Console.ReadLine(); } }
    options:
      - Code runs successfully prints nothing
      - Code runs and prints "Csharp"
      - Syntax error as t is unassigned variable which is never used
      - None of the mentioned
    answer: 2
    explanation: Syntax error as t is unassigned variable which is never used is the correct answer to “What will be the output of the following C# code? class test { public void print() { Console.WriteLine("Csharp:"); } } class Program { static void Main(string[] args) { test t; t.print(); Console.ReadLine(); } }”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: Which return statement correctly returns the output?
    options:
      - public int cube(int x) { return (x + x); }
      - public int cube(int x) return (x + x)
      - public int cube(int x) { return x + x; }
      - None of the mentioned
    answer: 0
    explanation: public int cube(int x) { return (x + x); } is the correct answer to “Which return statement correctly returns the output”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: Which statements among following are correct?
    options:
      - We can derive a class from a base class even if source code of base class not available
      - Multiple inheritance is different from multiple levels of inheritance
      - It is legal to make objects of one class as members of another class
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “Which statements among following are correct”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: Which of these can be used to fully abstract a class from its implementation?
    options:
      - Objects
      - Packages
      - Interfaces
      - None of the Mentioned
    answer: 2
    explanation: Interfaces is the correct answer to “Which of these can be used to fully abstract a class from its implementation”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: "Select the class visibility modifiers among the following:"
    options:
      - Private, protected, public, internal
      - Private, protected, public, internal, protected internal
      - Private, protected, public
      - All of the mentioned
    answer: 1
    explanation: Private, protected, public, internal, protected internal is the correct answer to “Select the class visibility modifiers among the following:”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp.
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: "What will be the output of the following C# code? namespace ConsoleApplication4 { abstract class A { int i; public abstract void display(); } class B: A { public int j; public override void display() { Console.WriteLine(j); } } class Program { static void Main(string[] args) { B obj = new B(); obj.j = 2; obj.display(); Console.ReadLine(); } } }"
    options:
      - "0"
      - "2"
      - Compile time error
      - "1"
    answer: 1
    explanation: "2 is the correct answer to “What will be the output of the following C# code? namespace ConsoleApplication4 { abstract class A { int i; public abstract void display(); } class B: A { public int j; public override void display() { Console.WriteLine(j); } } class Program { static void Main(string[] args) { B obj = new B(); obj.j = 2; obj.display(); Console.ReadLine(); } } }”. This question is standard in competitive examination syllabi for Classes And Objects In C Sharp."
    keyConcept: Classes And Objects In C Sharp
    testedIn:
      - FPSC
      - PPSC
---


