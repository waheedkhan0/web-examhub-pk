---
title: Delegates And Events In C Sharp — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Delegates And Events In C Sharp — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: delegates-and-events-in-c-sharp-part-2
topicName: Delegates And Events In C Sharp — Part 2
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
    question: Choose the incorrect statement about delegates?
    options:
      - delegates are not type safe
      - delegates can be used to implement callback notification
      - delegate is a user defined type
      - delegates permits execution of a method in an asynchronous manner
    answer: 0
    explanation: delegates are not type safe is the correct answer to “Choose the incorrect statement about delegates”. This question is standard in competitive examination syllabi for Delegates And Events In C Sharp.
    keyConcept: Delegates And Events In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: Incorrect statements about delegates are?
    options:
      - Delegates are reference types
      - Delegates are object oriented
      - Delegates are type safe
      - Only one method can be called using a delegate
    answer: 3
    explanation: Only one method can be called using a delegate is the correct answer to “Incorrect statements about delegates are”. This question is standard in competitive examination syllabi for Delegates And Events In C Sharp.
    keyConcept: Delegates And Events In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What does the following C# code block defines? class Gen<T> { T ob; }
    options:
      - Generics class declaration
      - Generic constructor declaration
      - A simple class declaration
      - All of the mentioned
    answer: 0
    explanation: Generics class declaration is the correct answer to “What does the following C# code block defines? class Gen<T> { T ob; }”. This question is standard in competitive examination syllabi for Delegates And Events In C Sharp.
    keyConcept: Delegates And Events In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: Which of the following is the correct way to call the subroutine function abc() of the given class in the following C# code? class csharp { void abc() { console.writeline("A:Just do it!"); } }
    options:
      - csharp c = new csharp(); delegate void d = new del(ref abc); d()
      - delegate void del(); del d; csharp s = new csharp(); d = new del(ref s.abc); d()
      - csharp s = new csharp(); delegate void del = new delegate(ref abc); del()
      - None of the mentioned
    answer: 1
    explanation: delegate void del(); del d; csharp s = new csharp(); d = new del(ref s.abc); d() is the correct answer to “Which of the following is the correct way to call the subroutine function abc() of the given class in the following C# code? class csharp { void abc() { console.writeline("A:Just do it!"); } }”. This question is standard in competitive examination syllabi for Delegates And Events In C Sharp.
    keyConcept: Delegates And Events In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: Which among the following is the correct statement about delegate declaration? delegate void del(int i);
    options:
      - on declaring the delegate, a class called del is created
      - the del class is derived from the MulticastDelegate class
      - the del class will contain a one argument constructor and an invoke() method
      - all of the mentioned
    answer: 3
    explanation: all of the mentioned is the correct answer to “Which among the following is the correct statement about delegate declaration? delegate void del(int i);”. This question is standard in competitive examination syllabi for Delegates And Events In C Sharp.
    keyConcept: Delegates And Events In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: Are generics in C# are same as the generics in java and templates in C++?
    options:
      - "Yes"
      - "No"
      - May be
      - None of the mentioned
    answer: 1
    explanation: No is the correct answer to “Are generics in C# are same as the generics in java and templates in C++”. This question is standard in competitive examination syllabi for Delegates And Events In C Sharp.
    keyConcept: Delegates And Events In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What will be the output of the following C# code snippet? public class Generic<T> { Stack<T> stk = new Stack<T>(); public void push(T obj) { stk.Push(obj); } public T pop() { T obj = stk.Pop(); return obj; } } class Program { static void Main(string[] args) { Generic<string> g = new Generic<string>(); g.push(30); Console.WriteLine(g.pop()); Console.ReadLine(); } }
    options:
      - "0"
      - "30"
      - Runtime Error
      - Compile time Error
    answer: 1
    explanation: 30 is the correct answer to “What will be the output of the following C# code snippet? public class Generic<T> { Stack<T> stk = new Stack<T>(); public void push(T obj) { stk.Push(obj); } public T pop() { T obj = stk.Pop(); return obj; } } class Program { static void Main(string[] args) { Generic<string> g = new Generic<string>(); g.push(30); Console.WriteLine(g.pop()); Console.ReadLine(); } }”. This question is standard in competitive examination syllabi for Delegates And Events In C Sharp.
    keyConcept: Delegates And Events In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: Which of the given statements are valid about generics in .NET Framework?
    options:
      - generics are useful in collection classes in .NET framework
      - generics delegates are not allowed in C#.NET
      - generics is a not language feature
      - all of the mentioned
    answer: 0
    explanation: generics are useful in collection classes in .NET framework is the correct answer to “Which of the given statements are valid about generics in .NET Framework”. This question is standard in competitive examination syllabi for Delegates And Events In C Sharp.
    keyConcept: Delegates And Events In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: Which of the following statements are valid in the following C# code snippet? public class Generic<T> { public T Field; public void testSub() { T i = Field + 1; } } class Program { static void Main(string[] args) { Genericlt;int>g = new Genericlt;int>(); g.testSub(); } }
    options:
      - code runs successfully but prints nothing
      - code runs successfully and prints 1
      - program will give run time error
      - compile time error
    answer: 3
    explanation: compile time error is the correct answer to “Which of the following statements are valid in the following C# code snippet? public class Generic<T> { public T Field; public void testSub() { T i = Field + 1; } } class Program { static void Main(string[] args) { Genericlt;int>g = new Genericlt;int>(); g.testSub(); } }”. This question is standard in competitive examination syllabi for Delegates And Events In C Sharp.
    keyConcept: Delegates And Events In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: "Choose the correct way to call subroutine fun() of the sample class? class a { public void x(int p, double k) { Console.WriteLine(\"k : csharp!\"); } }"
    options:
      - delegate void del(int i); x s = new x(); del d = new del(ref s.x); d(8, 2.2f)
      - delegate void del(int p, double k); del d; x s = new x(); d = new del(ref s.x); d(8, 2.2f)
      - x s = new x(); delegate void d = new del(ref x); d(8, 2.2f)
      - all of the mentioned
    answer: 1
    explanation: "delegate void del(int p, double k); del d; x s = new x(); d = new del(ref s.x); d(8, 2.2f) is the correct answer to “Choose the correct way to call subroutine fun() of the sample class? class a { public void x(int p, double k) { Console.WriteLine(\"k : csharp!\"); } }”. This question is standard in competitive examination syllabi for Delegates And Events In C Sharp."
    keyConcept: Delegates And Events In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What will be the output of the following C# code? { delegate string f(string str); class sample { public static string fun(string a) { return a.Replace('k', 'o'); } } class Program { static void Main(string[] args) { f str1 = new f(sample.fun); string str = str1("Test Ykur C#.NET Skills"); Console.WriteLine(str); Console.ReadLine(); } } }
    options:
      - Test Ykur C#.NET Skills
      - Test Ykour C#.NET Skills
      - Test Your C#.NET Skills
      - Test ur C#.NET Skills
    answer: 2
    explanation: Test Your C#.NET Skills is the correct answer to “What will be the output of the following C# code? { delegate string f(string str); class sample { public static string fun(string a) { return a.Replace('k', 'o'); } } class Program { static void Main(string[] args) { f str1 = new f(sample.fun); string str = str1("Test Ykur C#.NET Skills"); Console.WriteLine(str); Console.ReadLine(); } } }”. This question is standard in competitive examination syllabi for Delegates And Events In C Sharp.
    keyConcept: Delegates And Events In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: Which of these type parameters is used for generic methods to return and accept any type of object?
    options:
      - K
      - "N"
      - T
      - V
    answer: 2
    explanation: T is the correct answer to “Which of these type parameters is used for generic methods to return and accept any type of object”. This question is standard in competitive examination syllabi for Delegates And Events In C Sharp.
    keyConcept: Delegates And Events In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: "In the following C# code, which of the following statements are perfectly valid? public class MyContainer<T> where T: IComparable { /* insert code here */ }"
    options:
      - Class MyConatiner requires that its type argument must implement Icomparable interface
      - There are multiple constraints on type argument to MyContainer class
      - Type argument of class MyContainer should be Icomparable
      - None of the mentioned
    answer: 0
    explanation: "Class MyConatiner requires that its type argument must implement Icomparable interface is the correct answer to “In the following C# code, which of the following statements are perfectly valid? public class MyContainer<T> where T: IComparable { /* insert code here */ }”. This question is standard in competitive examination syllabi for Delegates And Events In C Sharp."
    keyConcept: Delegates And Events In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: Which of these is a correct way of defining generic method?
    options:
      - name(T1, T2, ..., Tn) { /* ... */ }
      - public name { /* ... */ }
      - class name[T1, T2, ..., Tn] { /* ... */ }
      - name{T1, T2, ..., Tn} { /* ... */ }
    answer: 1
    explanation: public name { /* ... */ } is the correct answer to “Which of these is a correct way of defining generic method”. This question is standard in competitive examination syllabi for Delegates And Events In C Sharp.
    keyConcept: Delegates And Events In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: In the following C# code, which statements are perfectly valid? public class Csharp { public void subject<S>(S arg) { Console.WriteLine(arg); } } class Program { static Void Main(string[] args) { Csharp c = new Csharp(); c.subject("hi"); c.subject(20); } }
    options:
      - Run time exception error
      - Compile time error
      - Code runs successfully and prints required output
      - None of the mentioned
    answer: 2
    explanation: Code runs successfully and prints required output is the correct answer to “In the following C# code, which statements are perfectly valid? public class Csharp { public void subject<S>(S arg) { Console.WriteLine(arg); } } class Program { static Void Main(string[] args) { Csharp c = new Csharp(); c.subject("hi"); c.subject(20); } }”. This question is standard in competitive examination syllabi for Delegates And Events In C Sharp.
    keyConcept: Delegates And Events In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: Choose the advantages of using generics?
    options:
      - Generics facilitate type safety
      - Generics facilitate improved performance and reduced code
      - Generics promote the usage of parameterized types
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “Choose the advantages of using generics”. This question is standard in competitive examination syllabi for Delegates And Events In C Sharp.
    keyConcept: Delegates And Events In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: Choose the statements which makes delegate in C#.NET different from a normal class?
    options:
      - Delegates in C#.NET is a base class for all delegates type
      - Delegates created in C#.NET are further not allowed to derive from the delegate types that are created
      - Only system and compilers can derive explicitly from the Delegate or MulticasteDelegate class
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “Choose the statements which makes delegate in C#.NET different from a normal class”. This question is standard in competitive examination syllabi for Delegates And Events In C Sharp.
    keyConcept: Delegates And Events In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: Which of the following is an incorrect statement about delegate?
    options:
      - a single delegate can invoke more than one method
      - delegates could be shared
      - delegates are type safe wrappers for function pointers
      - delegate is a value type
    answer: 2
    explanation: delegates are type safe wrappers for function pointers is the correct answer to “Which of the following is an incorrect statement about delegate”. This question is standard in competitive examination syllabi for Delegates And Events In C Sharp.
    keyConcept: Delegates And Events In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: Which of the following is the correct way to call the function abc() of the given class in the following C# code? class csharp { public int abc(int a) { Console.WriteLine("A:Just do it!"); return 0; } }
    options:
      - delegate void del(int a); csharp s = new csharp(); del d = new del(ref s.abc); d(10)
      - csharp s = new csharp(); delegate void d = new del(ref abc); d(10)
      - delegate int del(int a); del d; csharp s = new csharp(); d = new del(ref s.fun); d(10)
      - none of the mentioned
    answer: 2
    explanation: delegate int del(int a); del d; csharp s = new csharp(); d = new del(ref s.fun); d(10) is the correct answer to “Which of the following is the correct way to call the function abc() of the given class in the following C# code? class csharp { public int abc(int a) { Console.WriteLine("A:Just do it!"); return 0; } }”. This question is standard in competitive examination syllabi for Delegates And Events In C Sharp.
    keyConcept: Delegates And Events In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: Suppose a Generic class called as SortObjects is to be made capable of sorting objects of any type(integer, single, byte etc). Then, which of the following programming constructs is able to implement the comparison function?
    options:
      - interface
      - encapsulation
      - delegate
      - attribute
    answer: 2
    explanation: delegate is the correct answer to “Suppose a Generic class called as SortObjects is to be made capable of sorting objects of any type(integer, single, byte etc). Then, which of the following programming constructs is able to implement the comparison function”. This question is standard in competitive examination syllabi for Delegates And Events In C Sharp.
    keyConcept: Delegates And Events In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: What will be the output of the following C# code? public class Generic<T> { public T Field; } class Program { static void Main(string[] args) { Generic<int> g2 = new Generic<int>(); Generic<int> g3 = new Generic<int>(); g2.Field = 8; g3.Field = 4; if (g2.Field % g3.Field == 0) { Console.WriteLine("A"); } else Console.WriteLine("Prints nothing:"); Console.ReadLine(); } }
    options:
      - Compile time error
      - A
      - Run time error
      - Code runs successfully but prints nothing
    answer: 1
    explanation: A is the correct answer to “What will be the output of the following C# code? public class Generic<T> { public T Field; } class Program { static void Main(string[] args) { Generic<int> g2 = new Generic<int>(); Generic<int> g3 = new Generic<int>(); g2.Field = 8; g3.Field = 4; if (g2.Field % g3.Field == 0) { Console.WriteLine("A"); } else Console.WriteLine("Prints nothing:"); Console.ReadLine(); } }”. This question is standard in competitive examination syllabi for Delegates And Events In C Sharp.
    keyConcept: Delegates And Events In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: Which statement is valid for the following C# code snippet? public class Generic<T> { public T Field; } class Program { static void Main(string[] args) { Generic<String> g = new Generic<String>(); g.Field = "Hi"; Console.WriteLine(g.Field); } }
    options:
      - Compile time error
      - Generic being a keyword cannot be used as a class name
      - Runtime error
      - Code runs successfully
    answer: 3
    explanation: Code runs successfully is the correct answer to “Which statement is valid for the following C# code snippet? public class Generic<T> { public T Field; } class Program { static void Main(string[] args) { Generic<String> g = new Generic<String>(); g.Field = "Hi"; Console.WriteLine(g.Field); } }”. This question is standard in competitive examination syllabi for Delegates And Events In C Sharp.
    keyConcept: Delegates And Events In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: Which of the following are the correct statements about delegates?
    options:
      - Delegates can be used to implement callback notification
      - Delegates permit execution of a method on a secondary thread in an asynchronous manner
      - Delegate is a user defined type
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “Which of the following are the correct statements about delegates”. This question is standard in competitive examination syllabi for Delegates And Events In C Sharp.
    keyConcept: Delegates And Events In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: What will be the output of the following C# code snippet? { delegate string F(string str); class sample { public static string fun(string a) { return a.Replace(',''-'); } } class Program { static void Main(string[] args) { F str1 = new F(sample.fun); string str = str1("Test Your c#.NET skills"); Console.WriteLine(str); } } }
    options:
      - Test Your
      - Test-Your-C#.NET-Skills
      - ur C#.NET Skills
      - None of the mentioned
    answer: 1
    explanation: Test-Your-C#.NET-Skills is the correct answer to “What will be the output of the following C# code snippet? { delegate string F(string str); class sample { public static string fun(string a) { return a.Replace(',''-'); } } class Program { static void Main(string[] args) { F str1 = new F(sample.fun); string str = str1("Test Your c#.NET skills"); Console.WriteLine(str); } } }”. This question is standard in competitive examination syllabi for Delegates And Events In C Sharp.
    keyConcept: Delegates And Events In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: Which among the given classes represents System.Collections.Generic namespace?
    options:
      - SortedDictionary
      - Sorted Array
      - Stack
      - All of the mentioned
    answer: 0
    explanation: SortedDictionary is the correct answer to “Which among the given classes represents System.Collections.Generic namespace”. This question is standard in competitive examination syllabi for Delegates And Events In C Sharp.
    keyConcept: Delegates And Events In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Which among the given classes is present in System.Collection.Generic.namespace?
    options:
      - Stack
      - Tree
      - Sorted Array
      - All of the mentioned
    answer: 0
    explanation: Stack is the correct answer to “Which among the given classes is present in System.Collection.Generic.namespace”. This question is standard in competitive examination syllabi for Delegates And Events In C Sharp.
    keyConcept: Delegates And Events In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: Choose the incorrect statement among the following about the delegate?
    options:
      - delegates are of reference types
      - delegates are object oriented
      - delegates are type safe
      - none of the mentioned
    answer: 3
    explanation: none of the mentioned is the correct answer to “Choose the incorrect statement among the following about the delegate”. This question is standard in competitive examination syllabi for Delegates And Events In C Sharp.
    keyConcept: Delegates And Events In C Sharp
    testedIn:
      - FPSC
      - PPSC
---


