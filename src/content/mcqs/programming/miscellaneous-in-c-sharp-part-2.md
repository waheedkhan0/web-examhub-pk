---
title: Miscellaneous In C Sharp — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Miscellaneous In C Sharp — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: miscellaneous-in-c-sharp-part-2
topicName: Miscellaneous In C Sharp — Part 2
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
    question: What will be the output of the following C# code snippet? class Program { static void Main(string[] args) { int y = (int)Math.Max(4,2); int z = (int)Math.Pow(y, 2); Console.WriteLine(z); Console.ReadLine(); } }
    options:
      - "4"
      - Compile time error
      - "16"
      - "89"
    answer: 2
    explanation: 16 is the correct answer to “What will be the output of the following C# code snippet? class Program { static void Main(string[] args) { int y = (int)Math.Max(4,2); int z = (int)Math.Pow(y, 2); Console.WriteLine(z); Console.ReadLine(); } }”. This question is standard in competitive examination syllabi for Miscellaneous In C Sharp.
    keyConcept: Miscellaneous In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: In which of the following collections is the I/O based on a key?
    options:
      - BitArray
      - SortedList
      - Queue
      - Stack
    answer: 1
    explanation: SortedList is the correct answer to “In which of the following collections is the I/O based on a key”. This question is standard in competitive examination syllabi for Miscellaneous In C Sharp.
    keyConcept: Miscellaneous In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What will be the output of the following C# code snippet? class UnsafeCode { unsafe static void Main() { int m = 10; int *mptr = &m; int **ptr = &mptr; int n = 20; int *nptr = &n; int **prt = &nptr; m = **prt + *nptr; n = *mptr* **prt; Console.WriteLine(n + " " + m); Console.ReadLine(); } }
    options:
      - 20 200
      - 40 200
      - 800 40
      - 40 800
    answer: 2
    explanation: 800 40 is the correct answer to “What will be the output of the following C# code snippet? class UnsafeCode { unsafe static void Main() { int m = 10; int *mptr = &m; int **ptr = &mptr; int n = 20; int *nptr = &n; int **prt = &nptr; m = **prt + *nptr; n = *mptr* **prt; Console.WriteLine(n + " " + m); Console.ReadLine(); } }”. This question is standard in competitive examination syllabi for Miscellaneous In C Sharp.
    keyConcept: Miscellaneous In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What will be the output of the following C# code snippet? class Program { static void Main(string[] args) { double x = 3.14; int y = (int) Math.Abs(x); Console.WriteLine(y); } }
    options:
      - "0"
      - "3"
      - "3.0"
      - "3.1"
    answer: 1
    explanation: 3 is the correct answer to “What will be the output of the following C# code snippet? class Program { static void Main(string[] args) { double x = 3.14; int y = (int) Math.Abs(x); Console.WriteLine(y); } }”. This question is standard in competitive examination syllabi for Miscellaneous In C Sharp.
    keyConcept: Miscellaneous In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: Which among the following is not a preprocessor directive?
    options:
      - "#ifdef"
      - "#pragma"
      - "#Or"
      - "#undef"
    answer: 2
    explanation: "#Or is the correct answer to “Which among the following is not a preprocessor directive”. This question is standard in competitive examination syllabi for Miscellaneous In C Sharp."
    keyConcept: Miscellaneous In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: Which among the following is the correct way to find out the number of elements currently present in an ArrayListCollection called arr?
    options:
      - arr.Capacity
      - arr.Count
      - arr.MaxIndex
      - arr.UpperBound
    answer: 1
    explanation: arr.Count is the correct answer to “Which among the following is the correct way to find out the number of elements currently present in an ArrayListCollection called arr”. This question is standard in competitive examination syllabi for Miscellaneous In C Sharp.
    keyConcept: Miscellaneous In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: Which of these method returns a smallest whole number greater than or equal to variable X?
    options:
      - double Ciel(double X)
      - double Floor(double X)
      - double Max(double X)
      - double Min(double X)
    answer: 0
    explanation: double Ciel(double X) is the correct answer to “Which of these method returns a smallest whole number greater than or equal to variable X”. This question is standard in competitive examination syllabi for Miscellaneous In C Sharp.
    keyConcept: Miscellaneous In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: Which statement is correct in the following C#.NET code snippet? Stack st = new Stack(); st.Push("Csharp"); st.Push(7.3); st.Push(8); st.Push('b'); st.Push(true);
    options:
      - Unsimilar elements like "Csharp", 7.3, 8 cannot be stored in the same stack collection
      - Boolean values can never be stored in Stack collection
      - Perfectly workable code
      - All of the mentioned
    answer: 2
    explanation: Perfectly workable code is the correct answer to “Which statement is correct in the following C#.NET code snippet? Stack st = new Stack(); st.Push("Csharp"); st.Push(7.3); st.Push(8); st.Push('b'); st.Push(true);”. This question is standard in competitive examination syllabi for Miscellaneous In C Sharp.
    keyConcept: Miscellaneous In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: "What does preprocessor directive #if and #endif explains?"
    options:
      - Enables compilation of sequence of code on condition basis
      - Express results into true or false on evaluation of condition
      - "If expression following #if is true then code that is between #if and #endif is compiled otherwise skipped"
      - All of the mentioned
    answer: 3
    explanation: "All of the mentioned is the correct answer to “What does preprocessor directive #if and #endif explains”. This question is standard in competitive examination syllabi for Miscellaneous In C Sharp."
    keyConcept: Miscellaneous In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: Which string operation does the below-mentioned method define? public static string Concat(string str0, string str1)
    options:
      - method returns a string
      - string str1 is concatenated to the end of str0
      - can be used to concatenate any number of strings
      - all of the mentioned
    answer: 3
    explanation: all of the mentioned is the correct answer to “Which string operation does the below-mentioned method define? public static string Concat(string str0, string str1)”. This question is standard in competitive examination syllabi for Miscellaneous In C Sharp.
    keyConcept: Miscellaneous In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: Among the given collections which one is I/O index based?
    options:
      - ArrayList
      - List
      - Stack
      - Queue
    answer: 0
    explanation: ArrayList is the correct answer to “Among the given collections which one is I/O index based”. This question is standard in competitive examination syllabi for Miscellaneous In C Sharp.
    keyConcept: Miscellaneous In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: Choose the class from which the namespace 'System.Type' is derived?
    options:
      - System.Reflection
      - System.Reflection.MemberInfo
      - Both System.Reflection & System.Reflection.MemberInfo
      - None of the mentioned
    answer: 1
    explanation: System.Reflection.MemberInfo is the correct answer to “Choose the class from which the namespace 'System.Type' is derived”. This question is standard in competitive examination syllabi for Miscellaneous In C Sharp.
    keyConcept: Miscellaneous In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: "What will be the output of the following C# code snippet? class UnsafeCode { struct MyStruct { public int a; public int b; public int Sum() { return a / b; } } unsafe static void Main() { MyStruct o = new MyStruct(); MyStruct* p; p = &o; p->a = 60; p->b = 15; int c = 30; Console.WriteLine(\"Value is : \" + p->Sum()*c); Console.ReadLine(); } }"
    options:
      - Compile time error
      - "120"
      - Run time error
      - "4"
    answer: 1
    explanation: "120 is the correct answer to “What will be the output of the following C# code snippet? class UnsafeCode { struct MyStruct { public int a; public int b; public int Sum() { return a / b; } } unsafe static void Main() { MyStruct o = new MyStruct(); MyStruct* p; p = &o; p->a = 60; p->b = 15; int c = 30; Console.WriteLine(\"Value is : \" + p->Sum()*c); Console.ReadLine(); } }”. This question is standard in competitive examination syllabi for Miscellaneous In C Sharp."
    keyConcept: Miscellaneous In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What does the following C# code set specify? public static int Compare(string strA, int indexA, string strB, int indexB, int length, bool ignoreCase)
    options:
      - Comparison begins at strA[indexA] and strB[indexB] and runs for length of characters
      - Returns output > 0 for for strA > strB else < 0 for strA < strB else if strA = str B output is 0
      - Comparison is culture sensitive and if ignore case is true, comparison ignores case differences
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “What does the following C# code set specify? public static int Compare(string strA, int indexA, string strB, int indexB, int length, bool ignoreCase)”. This question is standard in competitive examination syllabi for Miscellaneous In C Sharp.
    keyConcept: Miscellaneous In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: Which of these is used as default for a member of a class if no access specifier is used for it?
    options:
      - private
      - public
      - protected internal
      - protected
    answer: 0
    explanation: private is the correct answer to “Which of these is used as default for a member of a class if no access specifier is used for it”. This question is standard in competitive examination syllabi for Miscellaneous In C Sharp.
    keyConcept: Miscellaneous In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What is the process by which we can control what parts of a program can access the members of a class?
    options:
      - Polymorphism
      - Abstraction
      - Encapsulation
      - Recursion
    answer: 2
    explanation: Encapsulation is the correct answer to “What is the process by which we can control what parts of a program can access the members of a class”. This question is standard in competitive examination syllabi for Miscellaneous In C Sharp.
    keyConcept: Miscellaneous In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What will be the output of the following C# code snippet? static void Main(string[] args) { string s1 = "olleH"; string s2 = "olleh"; if (s1 == s2) Console.WriteLine("Equal"); else Console.WriteLine("Unequal"); if (s1.Equals(s2)) Console.WriteLine("Equal"); else Console.WriteLine("Unequal"); Console.ReadLine(); }
    options:
      - Equal Unequal
      - Unequal Equal
      - Equal Equal
      - Unequal Unequal
    answer: 3
    explanation: Unequal Unequal is the correct answer to “What will be the output of the following C# code snippet? static void Main(string[] args) { string s1 = "olleH"; string s2 = "olleh"; if (s1 == s2) Console.WriteLine("Equal"); else Console.WriteLine("Unequal"); if (s1.Equals(s2)) Console.WriteLine("Equal"); else Console.WriteLine("Unequal"); Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Miscellaneous In C Sharp.
    keyConcept: Miscellaneous In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: What kind of exception is being thrown if Wait(), Pulse() or PulseAll() is called from code that is not within synchronized code?
    options:
      - System I/O Exception
      - DivideByZero Exception
      - SynchronizationLockException
      - All of the mentioned
    answer: 2
    explanation: SynchronizationLockException is the correct answer to “What kind of exception is being thrown if Wait(), Pulse() or PulseAll() is called from code that is not within synchronized code”. This question is standard in competitive examination syllabi for Miscellaneous In C Sharp.
    keyConcept: Miscellaneous In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: What will be the output of the following C# code snippet? class Program { static void Main(string[] args) { double x = 4.772; double y = 4.76; double z = Math.Max(x, y); Console.WriteLine(z); Console.ReadLine(); } }
    options:
      - "true"
      - "false"
      - "4.772"
      - "4.76"
    answer: 2
    explanation: 4.772 is the correct answer to “What will be the output of the following C# code snippet? class Program { static void Main(string[] args) { double x = 4.772; double y = 4.76; double z = Math.Max(x, y); Console.WriteLine(z); Console.ReadLine(); } }”. This question is standard in competitive examination syllabi for Miscellaneous In C Sharp.
    keyConcept: Miscellaneous In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What will be the output of the following C# code snippet? class sum { public int x; public int y; public int add (int a, int b) { x = a + b; y = x + b; return 0; } } class Program { static void Main(string[] args) { sum obj1 = new sum(); sum obj2 = new sum(); int a = 2; obj1.add(a, a + 1); obj2.add(5, a); Console.WriteLine(obj1.x + " " + obj2.y); Console.ReadLine(); } }
    options:
      - 6, 9
      - 5, 9
      - 9, 10
      - 3, 2
    answer: 1
    explanation: 5, 9 is the correct answer to “What will be the output of the following C# code snippet? class sum { public int x; public int y; public int add (int a, int b) { x = a + b; y = x + b; return 0; } } class Program { static void Main(string[] args) { sum obj1 = new sum(); sum obj2 = new sum(); int a = 2; obj1.add(a, a + 1); obj2.add(5, a); Console.WriteLine(obj1.x + " " + obj2.y); Console.ReadLine(); } }”. This question is standard in competitive examination syllabi for Miscellaneous In C Sharp.
    keyConcept: Miscellaneous In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: Which among the following is a correct statement about namespace used in C#.NET?
    options:
      - Classes must belong to a namespace, whereas structures need not
      - All elements of the namespace must to belong to one file
      - If not mentioned, a namespace takes the name of the current project
      - All of the mentioned
    answer: 2
    explanation: If not mentioned, a namespace takes the name of the current project is the correct answer to “Which among the following is a correct statement about namespace used in C#.NET”. This question is standard in competitive examination syllabi for Miscellaneous In C Sharp.
    keyConcept: Miscellaneous In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: Consider an integer pointer . *a.++*a will increment . . . . . . . . while *a++ will increment . . . . . . . .
    options:
      - value at a, address contained in a
      - value at a,value at a
      - address contained in a, address contained in a
      - address contained in a, value at a
    answer: 0
    explanation: value at a, address contained in a is the correct answer to “Consider an integer pointer . *a.++*a will increment . . . . . . . . while *a++ will increment . . . . . . . .”. This question is standard in competitive examination syllabi for Miscellaneous In C Sharp.
    keyConcept: Miscellaneous In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: What will be the output of the following C# code snippet? class UnsafeCode { unsafe static void Main() { int* p ; int ch = 13*5; p = &(ch); Console.WriteLine(Convert.ToChar(*p)); if (*p == 'A') Console.WriteLine(Convert.ToBoolean(1)); else Console.WriteLine(Convert.ToBoolean(0)); Console.ReadLine(); } }
    options:
      - 65 False
      - 65 1
      - A True
      - A 1
    answer: 2
    explanation: A True is the correct answer to “What will be the output of the following C# code snippet? class UnsafeCode { unsafe static void Main() { int* p ; int ch = 13*5; p = &(ch); Console.WriteLine(Convert.ToChar(*p)); if (*p == 'A') Console.WriteLine(Convert.ToBoolean(1)); else Console.WriteLine(Convert.ToBoolean(0)); Console.ReadLine(); } }”. This question is standard in competitive examination syllabi for Miscellaneous In C Sharp.
    keyConcept: Miscellaneous In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: What does the following C# code specify? object Invoke(object obj, object[] parameters)
    options:
      - Calling a type using invoke()
      - Any arguments that need to be passed to the method are specified in the array parameters
      - The value returned by the invoked method is returned by Invoke()
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “What does the following C# code specify? object Invoke(object obj, object[] parameters)”. This question is standard in competitive examination syllabi for Miscellaneous In C Sharp.
    keyConcept: Miscellaneous In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: What does the following C# code set specifies? public static int Compare(string strA, string strB)
    options:
      - Comparison is case and culture sensitive
      - Two strings A and B are compared with each other
      - "Output is : >0 for (A > B), <0 for (A < B) else '0' for(A=B)"
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “What does the following C# code set specifies? public static int Compare(string strA, string strB)”. This question is standard in competitive examination syllabi for Miscellaneous In C Sharp.
    keyConcept: Miscellaneous In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Which of the following is not a namespace in the .NET Framework Class Library?
    options:
      - System.Process
      - System.Security
      - System.Threading
      - System.xml
    answer: 0
    explanation: System.Process is the correct answer to “Which of the following is not a namespace in the .NET Framework Class Library”. This question is standard in competitive examination syllabi for Miscellaneous In C Sharp.
    keyConcept: Miscellaneous In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: What will be the output of the following C# code snippet? class Program { static void Main(string[] args) { float x = 3.14F; int y = (int)Math.Abs(x); Console.WriteLine(y); Console.ReadLine(); } }
    options:
      - Compile time error
      - "3.14"
      - "3"
      - "4"
    answer: 2
    explanation: 3 is the correct answer to “What will be the output of the following C# code snippet? class Program { static void Main(string[] args) { float x = 3.14F; int y = (int)Math.Abs(x); Console.WriteLine(y); Console.ReadLine(); } }”. This question is standard in competitive examination syllabi for Miscellaneous In C Sharp.
    keyConcept: Miscellaneous In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: Which among the following is not the ordered collection class?
    options:
      - BitArray
      - Queue
      - Stack
      - None of the mentioned
    answer: 0
    explanation: BitArray is the correct answer to “Which among the following is not the ordered collection class”. This question is standard in competitive examination syllabi for Miscellaneous In C Sharp.
    keyConcept: Miscellaneous In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: What are strings in C#?
    options:
      - a sequence of characters
      - array of characters
      - objects of built-in data type
      - a reference type
    answer: 2
    explanation: objects of built-in data type is the correct answer to “What are strings in C#”. This question is standard in competitive examination syllabi for Miscellaneous In C Sharp.
    keyConcept: Miscellaneous In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: What will be the output of the following C# code snippet? class Program { static void Main(string[] args) { double x = 2.0; double y = 3.0; double z = Math.Pow( x, y ); Console.WriteLine(z); Console.ReadLine(); } }
    options:
      - "2.0"
      - "4.0"
      - "8"
      - "8.0"
    answer: 2
    explanation: 8 is the correct answer to “What will be the output of the following C# code snippet? class Program { static void Main(string[] args) { double x = 2.0; double y = 3.0; double z = Math.Pow( x, y ); Console.WriteLine(z); Console.ReadLine(); } }”. This question is standard in competitive examination syllabi for Miscellaneous In C Sharp.
    keyConcept: Miscellaneous In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: What is multithreaded programming?
    options:
      - It's a process in which two different processes run simultaneously
      - It's a process in which two or more parts of same process run simultaneously
      - It's a process in which many different process are able to access same information
      - It's a process in which a single process can access information from many sources
    answer: 1
    explanation: It's a process in which two or more parts of same process run simultaneously is the correct answer to “What is multithreaded programming”. This question is standard in competitive examination syllabi for Miscellaneous In C Sharp.
    keyConcept: Miscellaneous In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: Which is the correct statement about the namespaces in C#.NET?
    options:
      - Nesting of namespaces is permitted, provided all the inner namespaces are declared in the same file
      - A namespace cannot be tested
      - There is no limit on the number of levels while nesting namespaces
      - All of the mentioned
    answer: 2
    explanation: There is no limit on the number of levels while nesting namespaces is the correct answer to “Which is the correct statement about the namespaces in C#.NET”. This question is standard in competitive examination syllabi for Miscellaneous In C Sharp.
    keyConcept: Miscellaneous In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: What will be the output of the following C# code snippet? class Program { static void Main(string[] args) { double x = 3.14; int y = (int) Math.Ceiling(x); Console.WriteLine(y); } }
    options:
      - "0"
      - "3"
      - "3.0"
      - "4"
    answer: 3
    explanation: 4 is the correct answer to “What will be the output of the following C# code snippet? class Program { static void Main(string[] args) { double x = 3.14; int y = (int) Math.Ceiling(x); Console.WriteLine(y); } }”. This question is standard in competitive examination syllabi for Miscellaneous In C Sharp.
    keyConcept: Miscellaneous In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: Which method is used to abort thread prior to it's normal execution?
    options:
      - sleep()
      - terminate()
      - suspend()
      - Abort()
    answer: 3
    explanation: Abort() is the correct answer to “Which method is used to abort thread prior to it's normal execution”. This question is standard in competitive examination syllabi for Miscellaneous In C Sharp.
    keyConcept: Miscellaneous In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: What will be the output of the following C# code snippet? class MyClass { int[] a = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20}; public IEnumerator GetEnumerator() { for (int i = 0; i < 20; i++) { if (a[i] % 2 == 0) yield return (int)(a[i]); } } } class Program { static void Main(string[] args) { MyClass mc = new MyClass(); foreach (int i in mc) Console.Write(i + " "); Console.WriteLine(); Console.ReadLine(); } }
    options:
      - prints nothing code run successfully
      - run time error
      - code runs successfully prints even number between 1 to 20
      - compile time error
    answer: 2
    explanation: code runs successfully prints even number between 1 to 20 is the correct answer to “What will be the output of the following C# code snippet? class MyClass { int[] a = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20}; public IEnumerator GetEnumerator() { for (int i = 0; i < 20; i++) { if (a[i] % 2 == 0) yield return (int)(a[i]); } } } class Program { static void Main(string[] args) { MyClass mc = new MyClass(); foreach (int i in mc) Console.Write(i + " "); Console.WriteLine(); Console.ReadLine(); } }”. This question is standard in competitive examination syllabi for Miscellaneous In C Sharp.
    keyConcept: Miscellaneous In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: "What will be the output of the following C# code snippet? #define DEBUG #define MYTEST using System; using System.Collections.Generic; using System.Linq; using System.Text; using System.Threading.Tasks; namespace ConsoleApplication13 { class Program { static void Main(string[] args) { #if (DEBUG && !MYTEST) Console.WriteLine(\"DEBUG is defined\"); #elif (!DEBUG && MYTEST) Console.WriteLine(\"MYTEST is defined\"); #elif (DEBUG && MYTEST) Console.WriteLine(\"DEBUG and MYTEST are defined\"); #else Console.WriteLine(\"DEBUG and MYTEST are not defined\"); #endif Console.ReadLine(); } } }"
    options:
      - DEBUG is defined MYTEST is defined
      - MYTEST is defined DEBUG and MYTEST are defined
      - DEBUG and MYTEST are not defined MYTEST is defined
      - DEBUG and MYTEST are defined
    answer: 3
    explanation: "DEBUG and MYTEST are defined is the correct answer to “What will be the output of the following C# code snippet? #define DEBUG #define MYTEST using System; using System.Collections.Generic; using System.Linq; using System.Text; using System.Threading.Tasks; namespace ConsoleApplication13 { class Program { static void Main(string[] args) { #if (DEBUG && !MYTEST) Console.WriteLine(\"DEBUG is defined\"); #elif (!DEBUG && MYTEST) Console.WriteLine(\"MYTEST is defined\"); #elif (DEBUG && MYTEST) Console.WriteLine(\"DEBUG and MYTEST are defined\"); #else Console.WriteLine(\"DEBUG and MYTEST are not defined\"); #endif Console.ReadLine(); } } }”. This question is standard in competitive examination syllabi for Miscellaneous In C Sharp."
    keyConcept: Miscellaneous In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: Which is the correct statement about an ArrayList collection that implements the IEnumerable interface?
    options:
      - To access members of ArrayList from the inner class, it is necessary to pass ArrayList class reference to it
      - The inner class of ArrayList can access ArrayList class members
      - The ArrayList class consist of inner class that implements the IEnumerator interface
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “Which is the correct statement about an ArrayList collection that implements the IEnumerable interface”. This question is standard in competitive examination syllabi for Miscellaneous In C Sharp.
    keyConcept: Miscellaneous In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: What will be the output of the following C# code snippet? static void main(String args[]) { char chars[] = {'a', 'b', 'c'}; String s = new String(chars); Console.WriteLine(s); }
    options:
      - a
      - b
      - ab
      - abc
    answer: 3
    explanation: abc is the correct answer to “What will be the output of the following C# code snippet? static void main(String args[]) { char chars[] = {'a', 'b', 'c'}; String s = new String(chars); Console.WriteLine(s); }”. This question is standard in competitive examination syllabi for Miscellaneous In C Sharp.
    keyConcept: Miscellaneous In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: What will be the output of the following C# code snippet? class Program { static void Main(string[] args) { String c = " Hello World "; String s = c.Trim(); Console.WriteLine("""+s+"""); Console.ReadLine(); } }
    options:
      - "\" Hello World \""
      - "\"HelloWorld\""
      - "\"Hello World\""
      - "\"Hello\""
    answer: 2
    explanation: "\"Hello World\" is the correct answer to “What will be the output of the following C# code snippet? class Program { static void Main(string[] args) { String c = \" Hello World \"; String s = c.Trim(); Console.WriteLine(\"\"\"+s+\"\"\"); Console.ReadLine(); } }”. This question is standard in competitive examination syllabi for Miscellaneous In C Sharp."
    keyConcept: Miscellaneous In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: "Select the operators used for checking the equality in strings:"
    options:
      - "!="
      - ">"
      - <
      - ">="
    answer: 0
    explanation: "!= is the correct answer to “Select the operators used for checking the equality in strings:”. This question is standard in competitive examination syllabi for Miscellaneous In C Sharp."
    keyConcept: Miscellaneous In C Sharp
    testedIn:
      - FPSC
      - PPSC
---


