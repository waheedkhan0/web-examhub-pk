---
title: Exception Handling In C Sharp — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Exception Handling In C Sharp — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: exception-handling-in-c-sharp-part-2
topicName: Exception Handling In C Sharp — Part 2
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
    question: What will be the output of the following C# code? { try { int i, sum; sum = 10; for (i = -1 ;i < 3 ;++i) { sum = (sum / i); Console.WriteLine(i); } } catch(ArithmeticException e) { Console.WriteLine("0"); } Console.ReadLine(); }
    options:
      - "-1"
      - "0"
      - "-1 0"
      - "-1 0 -1"
    answer: 2
    explanation: "-1 0 is the correct answer to “What will be the output of the following C# code? { try { int i, sum; sum = 10; for (i = -1 ;i < 3 ;++i) { sum = (sum / i); Console.WriteLine(i); } } catch(ArithmeticException e) { Console.WriteLine(\"0\"); } Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Exception Handling In C Sharp."
    keyConcept: Exception Handling In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: What will be the output of the following C# code? { try { int []a = {1, 2, 3, 4, 5}; for (int i = 0; i < 5; ++i) Console.WriteLine(a[i]); int x = (1 / Convert.ToInt32(0)); } catch(IndexOutOfRangeException e) { Console.WriteLine("A"); } catch(ArithmeticException e) { Console.WriteLine("B"); } Console.ReadLine(); }
    options:
      - "1234"
      - "12345"
      - Run time error
      - 12345B
    answer: 3
    explanation: 12345B is the correct answer to “What will be the output of the following C# code? { try { int []a = {1, 2, 3, 4, 5}; for (int i = 0; i < 5; ++i) Console.WriteLine(a[i]); int x = (1 / Convert.ToInt32(0)); } catch(IndexOutOfRangeException e) { Console.WriteLine("A"); } catch(ArithmeticException e) { Console.WriteLine("B"); } Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Exception Handling In C Sharp.
    keyConcept: Exception Handling In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What will be the output of the following C# code snippet? class Program { public static void Main(string[] args) { try { int a = 1; int b = 10 / a; try { if (a == 1) a = a / a - a; if (a == 2) { int[] c = { 1 }; c[8] = 9; } } finally { Console.WriteLine("A"); } } catch (IndexOutOfRangeException e) { Console.WriteLine("B"); } Console.ReadLine(); } }
    options:
      - A
      - B
      - AB
      - BA
    answer: 0
    explanation: A is the correct answer to “What will be the output of the following C# code snippet? class Program { public static void Main(string[] args) { try { int a = 1; int b = 10 / a; try { if (a == 1) a = a / a - a; if (a == 2) { int[] c = { 1 }; c[8] = 9; } } finally { Console.WriteLine("A"); } } catch (IndexOutOfRangeException e) { Console.WriteLine("B"); } Console.ReadLine(); } }”. This question is standard in competitive examination syllabi for Exception Handling In C Sharp.
    keyConcept: Exception Handling In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: Which of the following keywords is used by the calling function to guard against the exception that is thrown by called function?
    options:
      - try
      - throw
      - throws
      - catch
    answer: 2
    explanation: throws is the correct answer to “Which of the following keywords is used by the calling function to guard against the exception that is thrown by called function”. This question is standard in competitive examination syllabi for Exception Handling In C Sharp.
    keyConcept: Exception Handling In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: What will be the output of the following C# code snippet? { try { int a, b; b = 0; a = 5 / b; Console.WriteLine("A"); } catch(ArithmeticException e) { Console.WriteLine("B"); } finally { Console.WriteLine("C"); } Console.ReadLine(); }
    options:
      - A
      - B
      - B C
      - Run time error
    answer: 2
    explanation: B C is the correct answer to “What will be the output of the following C# code snippet? { try { int a, b; b = 0; a = 5 / b; Console.WriteLine("A"); } catch(ArithmeticException e) { Console.WriteLine("B"); } finally { Console.WriteLine("C"); } Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Exception Handling In C Sharp.
    keyConcept: Exception Handling In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: Which of the keywords are used for the block to be examined for exceptions?
    options:
      - try
      - catch
      - throw
      - check
    answer: 0
    explanation: try is the correct answer to “Which of the keywords are used for the block to be examined for exceptions”. This question is standard in competitive examination syllabi for Exception Handling In C Sharp.
    keyConcept: Exception Handling In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: Where the properties can be declared?
    options:
      - Class
      - Struct
      - Interface
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “Where the properties can be declared”. This question is standard in competitive examination syllabi for Exception Handling In C Sharp.
    keyConcept: Exception Handling In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What will be the output of the following C# code? class number { int length = 60; public int number1 { get { return length; } } } class Program { public static void Main(string[] args) { number p = new number(); int l; l = p.number1 + 40; int k = l * 3 / 4; Console.WriteLine(k); Console.ReadLine(); } }
    options:
      - "30"
      - "75"
      - "80"
      - "0"
    answer: 1
    explanation: 75 is the correct answer to “What will be the output of the following C# code? class number { int length = 60; public int number1 { get { return length; } } } class Program { public static void Main(string[] args) { number p = new number(); int l; l = p.number1 + 40; int k = l * 3 / 4; Console.WriteLine(k); Console.ReadLine(); } }”. This question is standard in competitive examination syllabi for Exception Handling In C Sharp.
    keyConcept: Exception Handling In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What will be the output of the following C# code? class Output { public static void main(String args[]) { try { int a = 10; int b = 5; int c = a / b - 5; Console.WriteLine("Hi"); } catch(Exception e) { Console.WriteLine("hello"); } } }
    options:
      - Hi
      - hello
      - Hihello
      - Compile time error
    answer: 1
    explanation: hello is the correct answer to “What will be the output of the following C# code? class Output { public static void main(String args[]) { try { int a = 10; int b = 5; int c = a / b - 5; Console.WriteLine("Hi"); } catch(Exception e) { Console.WriteLine("hello"); } } }”. This question is standard in competitive examination syllabi for Exception Handling In C Sharp.
    keyConcept: Exception Handling In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: Choose the wrong statement about the properties used in C#.NET?
    options:
      - Each property consists of accessor as get and set
      - A property cannot be either read or write only
      - Properties can be used to store and retrieve values to and from the data members of a class
      - Properties are like actual methods which work like data members
    answer: 0
    explanation: Each property consists of accessor as get and set is the correct answer to “Choose the wrong statement about the properties used in C#.NET”. This question is standard in competitive examination syllabi for Exception Handling In C Sharp.
    keyConcept: Exception Handling In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: Which of these keywords is not a part of exception handling?
    options:
      - try
      - finally
      - thrown
      - catch
    answer: 2
    explanation: thrown is the correct answer to “Which of these keywords is not a part of exception handling”. This question is standard in competitive examination syllabi for Exception Handling In C Sharp.
    keyConcept: Exception Handling In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: Which of the following is the object oriented way to handle run time errors?
    options:
      - Error codes
      - HERRESULT
      - OnError
      - Exceptions
    answer: 3
    explanation: Exceptions is the correct answer to “Which of the following is the object oriented way to handle run time errors”. This question is standard in competitive examination syllabi for Exception Handling In C Sharp.
    keyConcept: Exception Handling In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What will be the output of the following C# code snippet? class program { public static void Main(string[] args) { try { throw new NullReferenceException("C"); Console.WriteLine("A"); } catch (ArithmeticException e) { Console.WriteLine("B"); } Console.ReadLine(); } }
    options:
      - A
      - B
      - Compile time error
      - Runtime error
    answer: 3
    explanation: Runtime error is the correct answer to “What will be the output of the following C# code snippet? class program { public static void Main(string[] args) { try { throw new NullReferenceException("C"); Console.WriteLine("A"); } catch (ArithmeticException e) { Console.WriteLine("B"); } Console.ReadLine(); } }”. This question is standard in competitive examination syllabi for Exception Handling In C Sharp.
    keyConcept: Exception Handling In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What will be the output of the following C# code snippet? class program { public static void Main(string[] args) { try { int a = args.Length; int b = 1 / a; Console.WriteLine(a); } catch (ArithmeticException e) { Console.WriteLine("1"); } Console.ReadLine(); } }
    options:
      - "0"
      - "1"
      - Compile time error
      - Runtime error
    answer: 1
    explanation: 1 is the correct answer to “What will be the output of the following C# code snippet? class program { public static void Main(string[] args) { try { int a = args.Length; int b = 1 / a; Console.WriteLine(a); } catch (ArithmeticException e) { Console.WriteLine("1"); } Console.ReadLine(); } }”. This question is standard in competitive examination syllabi for Exception Handling In C Sharp.
    keyConcept: Exception Handling In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What will be the output of the following C# code? class Output { public static void main(String args[]) { try { int a = 5; int b = 10; int c = b / a - 5; Console.WriteLine("Csharp"); } } }
    options:
      - Csharp
      - sharp
      - C
      - Compile time error
    answer: 3
    explanation: Compile time error is the correct answer to “What will be the output of the following C# code? class Output { public static void main(String args[]) { try { int a = 5; int b = 10; int c = b / a - 5; Console.WriteLine("Csharp"); } } }”. This question is standard in competitive examination syllabi for Exception Handling In C Sharp.
    keyConcept: Exception Handling In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: Choose the correct statement among the following?
    options:
      - A property can be a static member whereas an indexer is always an instance member
      - A get accessor of a property corresponds to a method with no parameters whereas get accessor of an indexer corresponds to a method with the same formal parameters lists as the indexer
      - It is an error for indexer to declare a local variable with the same name as indexer parameters
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “Choose the correct statement among the following”. This question is standard in competitive examination syllabi for Exception Handling In C Sharp.
    keyConcept: Exception Handling In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: Which of these keywords are used for generating an exception manually?
    options:
      - try
      - catch
      - throw
      - check
    answer: 2
    explanation: throw is the correct answer to “Which of these keywords are used for generating an exception manually”. This question is standard in competitive examination syllabi for Exception Handling In C Sharp.
    keyConcept: Exception Handling In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: Choose the keyword which declares the indexer?
    options:
      - base
      - this
      - super
      - extract
    answer: 1
    explanation: this is the correct answer to “Choose the keyword which declares the indexer”. This question is standard in competitive examination syllabi for Exception Handling In C Sharp.
    keyConcept: Exception Handling In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: What will be the output of the following C# code? { try { int []a = {1, 2, 3, 4, 5}; for (int i = 0; i < 7; ++i) Console.WriteLine(a[i]); } catch(IndexOutOfRangeException e) { Console.WriteLine("0"); } Console.ReadLine(); }
    options:
      - "12345"
      - "123450"
      - "1234500"
      - Compile time error
    answer: 1
    explanation: 123450 is the correct answer to “What will be the output of the following C# code? { try { int []a = {1, 2, 3, 4, 5}; for (int i = 0; i < 7; ++i) Console.WriteLine(a[i]); } catch(IndexOutOfRangeException e) { Console.WriteLine("0"); } Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Exception Handling In C Sharp.
    keyConcept: Exception Handling In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: Select the modifiers which can be used with the properties?
    options:
      - Private
      - Public
      - Protected Internal
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “Select the modifiers which can be used with the properties”. This question is standard in competitive examination syllabi for Exception Handling In C Sharp.
    keyConcept: Exception Handling In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: Which of the following is the wrong statement about exception handling in C#.NET?
    options:
      - finally clause is used to perform cleanup operations of closing network and database connections
      - a program can contain multiple finally clauses
      - the statement in final clause will get executed no matter whether an exception occurs or not
      - all of the mentioned
    answer: 1
    explanation: a program can contain multiple finally clauses is the correct answer to “Which of the following is the wrong statement about exception handling in C#.NET”. This question is standard in competitive examination syllabi for Exception Handling In C Sharp.
    keyConcept: Exception Handling In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: Which of these keywords are used for the block to handle the exceptions generated by try block?
    options:
      - try
      - catch
      - throw
      - check
    answer: 1
    explanation: catch is the correct answer to “Which of these keywords are used for the block to handle the exceptions generated by try block”. This question is standard in competitive examination syllabi for Exception Handling In C Sharp.
    keyConcept: Exception Handling In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: What will be the output of the following C# code? class student { int []scores = new int[5] {23, 42, 54, 11, 65}; public int this[int index] { get { if (index < 5) return scores[index]; else { Console.WriteLine("invalid index"); return 0; } } set { if (index < 5) scores[index] = value; else Console.WriteLine("invalid index"); } } } class Program { public static void Main(string[] args) { student s = new student(); Console.WriteLine(s[4] + 8); Console.ReadLine(); } }
    options:
      - "73"
      - "37"
      - "0"
      - Run time error
    answer: 0
    explanation: 73 is the correct answer to “What will be the output of the following C# code? class student { int []scores = new int[5] {23, 42, 54, 11, 65}; public int this[int index] { get { if (index < 5) return scores[index]; else { Console.WriteLine("invalid index"); return 0; } } set { if (index < 5) scores[index] = value; else Console.WriteLine("invalid index"); } } } class Program { public static void Main(string[] args) { student s = new student(); Console.WriteLine(s[4] + 8); Console.ReadLine(); } }”. This question is standard in competitive examination syllabi for Exception Handling In C Sharp.
    keyConcept: Exception Handling In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: Select the statements which describe the correct usage of exception handling over conventional error handling approaches?
    options:
      - As errors can be ignored but exceptions cannot be ignored
      - Exception handling allows separation of program's logic from error handling logic making software more reliable and maintainable
      - try – catch – finally structure allows guaranteed cleanup in event of errors under all circumstances
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “Select the statements which describe the correct usage of exception handling over conventional error handling approaches”. This question is standard in competitive examination syllabi for Exception Handling In C Sharp.
    keyConcept: Exception Handling In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: Which of these exceptions will occur if we try to access the index of an array beyond its length?
    options:
      - ArithmeticException
      - ArrayException
      - ArrayArguementException
      - IndexOutOfRangeException
    answer: 3
    explanation: IndexOutOfRangeException is the correct answer to “Which of these exceptions will occur if we try to access the index of an array beyond its length”. This question is standard in competitive examination syllabi for Exception Handling In C Sharp.
    keyConcept: Exception Handling In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Consider a class maths and we had a property called as sum.b which is the reference to a maths object and we want the statement Console.WriteLine(b.sum)to fail. Which among the following is the correct solution to ensure this functionality?
    options:
      - Declares sum property with only get accessor
      - Declares sum property with only set accessor
      - Declares sum property with both set and get accessor
      - Declares sum property with both set, get and normal accessor
    answer: 1
    explanation: Declares sum property with only set accessor is the correct answer to “Consider a class maths and we had a property called as sum.b which is the reference to a maths object and we want the statement Console.WriteLine(b.sum)to fail. Which among the following is the correct solution to ensure this functionality”. This question is standard in competitive examination syllabi for Exception Handling In C Sharp.
    keyConcept: Exception Handling In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: Consider a class maths and we had a property called as sum.b is a reference to a maths object and we want the code below to work. Which is the correct solution to ensure this functionality? b.maths = 10; Console.WriteLine(b.maths);
    options:
      - Declare maths property with get and set accessors
      - Declare maths property with only get accessors
      - Declare maths property with only set accessors
      - Declare maths property with only get, set and normal accessors
    answer: 0
    explanation: Declare maths property with get and set accessors is the correct answer to “Consider a class maths and we had a property called as sum.b is a reference to a maths object and we want the code below to work. Which is the correct solution to ensure this functionality? b.maths = 10; Console.WriteLine(b.maths);”. This question is standard in competitive examination syllabi for Exception Handling In C Sharp.
    keyConcept: Exception Handling In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: What will be the output of the following C# code? class program { static void main(string[] args) { int i = 5; int v = 40; int[] p = new int[4]; try { p[i] = v; } catch(IndexOutOfRangeException e) { Console.WriteLine("Index out of bounds"); } Console.WriteLine("Remaining program"); } }
    options:
      - value 40 will be assigned to a[5]
      - "The output will be : Index out of bounds Remaining program"
      - "The output will be : Remaining program"
      - None of the mentioned
    answer: 1
    explanation: "The output will be : Index out of bounds Remaining program is the correct answer to “What will be the output of the following C# code? class program { static void main(string[] args) { int i = 5; int v = 40; int[] p = new int[4]; try { p[i] = v; } catch(IndexOutOfRangeException e) { Console.WriteLine(\"Index out of bounds\"); } Console.WriteLine(\"Remaining program\"); } }”. This question is standard in competitive examination syllabi for Exception Handling In C Sharp."
    keyConcept: Exception Handling In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: If math class had add property with get and set accessors, then which of the following statements will work correctly?
    options:
      - math.add = 20
      - math m = new math(); m.add = 10
      - Console.WriteLine(math.add)
      - None of the mentioned
    answer: 1
    explanation: math m = new math(); m.add = 10 is the correct answer to “If math class had add property with get and set accessors, then which of the following statements will work correctly”. This question is standard in competitive examination syllabi for Exception Handling In C Sharp.
    keyConcept: Exception Handling In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: Which of these clauses will be executed even if no exceptions are found?
    options:
      - throws
      - finally
      - throw
      - catch
    answer: 1
    explanation: finally is the correct answer to “Which of these clauses will be executed even if no exceptions are found”. This question is standard in competitive examination syllabi for Exception Handling In C Sharp.
    keyConcept: Exception Handling In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: Choose the statements which makes use of essential properties rather than making data member public in C#.NET?
    options:
      - Properties have their own access levels like private, public, protected etc. which allows it to have better control about managing read and write properties
      - Properties give us control about what values may be assigned to a member variable of a class they represent
      - Properties consist of set accessor inside which we can validate the value before assigning it to the data variable
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “Choose the statements which makes use of essential properties rather than making data member public in C#.NET”. This question is standard in competitive examination syllabi for Exception Handling In C Sharp.
    keyConcept: Exception Handling In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: What will be the output of the following C# code? class Program { static void Main(string[] args) { try { Console.WriteLine("csharp" + " " + 1/0); } finally { Console.WriteLine("Java"); } Console.ReadLine(); } }
    options:
      - csharp 0
      - Run time Exception generation
      - Compile time error
      - Java
    answer: 1
    explanation: Run time Exception generation is the correct answer to “What will be the output of the following C# code? class Program { static void Main(string[] args) { try { Console.WriteLine("csharp" + " " + 1/0); } finally { Console.WriteLine("Java"); } Console.ReadLine(); } }”. This question is standard in competitive examination syllabi for Exception Handling In C Sharp.
    keyConcept: Exception Handling In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: What will be the output of the following C# code? { int sum = 10; try { int i; for (i = -1; i < 3; ++i) sum = (sum / i); } catch (ArithmeticException e) { Console.WriteLine("0"); } Console.WriteLine(sum); Console.ReadLine(); }
    options:
      - "0"
      - 0 5
      - 0 -10
      - Compile time error
    answer: 2
    explanation: 0 -10 is the correct answer to “What will be the output of the following C# code? { int sum = 10; try { int i; for (i = -1; i < 3; ++i) sum = (sum / i); } catch (ArithmeticException e) { Console.WriteLine("0"); } Console.WriteLine(sum); Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Exception Handling In C Sharp.
    keyConcept: Exception Handling In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: What will be the output of the following C# code? class number { private int num1; private int num2; public int anumber { get { return num1; } set { num1 = value; } } public int anumber1 { get { return num2; } set { num2 = value; } } } class Program { public static void Main(string[] args) { number p = new number(); p.anumber = 20; number k = new number(); k.anumber1 = 40; int m = p.anumber; int t = k.anumber1; int r = p.anumber + k.anumber1; System.Console.WriteLine("number1 = " +m); System.Console.WriteLine("number2 = " +t); System.Console.WriteLine("sum = " +r); System.Console.ReadLine(); } }
    options:
      - "20"
      - number1 = 30 number2 = 40 sum = 70
      - number1 = 20 number2 = 40 sum = 60
      - Compile time error
    answer: 2
    explanation: number1 = 20 number2 = 40 sum = 60 is the correct answer to “What will be the output of the following C# code? class number { private int num1; private int num2; public int anumber { get { return num1; } set { num1 = value; } } public int anumber1 { get { return num2; } set { num2 = value; } } } class Program { public static void Main(string[] args) { number p = new number(); p.anumber = 20; number k = new number(); k.anumber1 = 40; int m = p.anumber; int t = k.anumber1; int r = p.anumber + k.anumber1; System.Console.WriteLine("number1 = " +m); System.Console.WriteLine("number2 = " +t); System.Console.WriteLine("sum = " +r); System.Console.ReadLine(); } }”. This question is standard in competitive examination syllabi for Exception Handling In C Sharp.
    keyConcept: Exception Handling In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: Choose the correct statement among the followings?
    options:
      - Indexers are location indicators
      - Indexers are used to access class objects
      - Indexer is a form of property and works in the same way as a property
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “Choose the correct statement among the followings”. This question is standard in competitive examination syllabi for Exception Handling In C Sharp.
    keyConcept: Exception Handling In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: What will be the output of the following C# code? class list { ArrayList array = new ArrayList(); public object this[int index] { get { if (index < 0 || index >= array.Count) { return null; } else { return (array[index]); } } set { array[index] = value; } } public int Count { get; set; } } class Program { static void Main(string[] args) { list list1 = new list(); list1[0] = "123"; list1[1] = " abc "; list1[2] = "xyz"; for (int i = 0; i<=list1.Count; i++) Console.WriteLine(list1[i]); Console.ReadLine(); } }
    options:
      - Compile time error
      - Run time error
      - 123, abc, xyz
      - "0"
    answer: 1
    explanation: Run time error is the correct answer to “What will be the output of the following C# code? class list { ArrayList array = new ArrayList(); public object this[int index] { get { if (index < 0 || index >= array.Count) { return null; } else { return (array[index]); } } set { array[index] = value; } } public int Count { get; set; } } class Program { static void Main(string[] args) { list list1 = new list(); list1[0] = "123"; list1[1] = " abc "; list1[2] = "xyz"; for (int i = 0; i<=list1.Count; i++) Console.WriteLine(list1[i]); Console.ReadLine(); } }”. This question is standard in competitive examination syllabi for Exception Handling In C Sharp.
    keyConcept: Exception Handling In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: If the math class had add property with get accessors then which of the following statements will work correctly?
    options:
      - math m = new math(); m.add = 10
      - math m = new math(); m.add = m.add + 20
      - math m = new math(); int i; i = m.add
      - math.add = 20
    answer: 2
    explanation: math m = new math(); int i; i = m.add is the correct answer to “If the math class had add property with get accessors then which of the following statements will work correctly”. This question is standard in competitive examination syllabi for Exception Handling In C Sharp.
    keyConcept: Exception Handling In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: What will be the output of the following C# code? class number { private int num1 = 60; private int num2 = 20; public int anumber { get { return num1; } set { num1 = value; } } public int anumber1 { get { return num2; } set { num2 = value; } } } class Program { public static void Main(string[] args) { number p = new number(); number k = new number(); int m = p.anumber; int t = k.anumber1; int r = p.anumber * k.anumber1; Console.WriteLine("sum = " + r); Console.ReadLine(); } }
    options:
      - "0"
      - "120"
      - "1200"
      - Compile time error
    answer: 2
    explanation: 1200 is the correct answer to “What will be the output of the following C# code? class number { private int num1 = 60; private int num2 = 20; public int anumber { get { return num1; } set { num1 = value; } } public int anumber1 { get { return num2; } set { num2 = value; } } } class Program { public static void Main(string[] args) { number p = new number(); number k = new number(); int m = p.anumber; int t = k.anumber1; int r = p.anumber * k.anumber1; Console.WriteLine("sum = " + r); Console.ReadLine(); } }”. This question is standard in competitive examination syllabi for Exception Handling In C Sharp.
    keyConcept: Exception Handling In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: A single try block must be followed by which of these?
    options:
      - finally
      - catch
      - Both finally & catch
      - None of the mentioned
    answer: 2
    explanation: Both finally & catch is the correct answer to “A single try block must be followed by which of these”. This question is standard in competitive examination syllabi for Exception Handling In C Sharp.
    keyConcept: Exception Handling In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: Choose the correct statement about properties describing the indexers?
    options:
      - No need to use the name of the property while using an indexed property
      - An indexer property should accept at least one argument
      - Indexers can be overloaded
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “Choose the correct statement about properties describing the indexers”. This question is standard in competitive examination syllabi for Exception Handling In C Sharp.
    keyConcept: Exception Handling In C Sharp
    testedIn:
      - FPSC
      - PPSC
---


