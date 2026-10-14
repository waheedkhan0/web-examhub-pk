---
title: Linq _Language Integrated Query_ In C Sharp — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Linq _Language Integrated Query_ In C Sharp — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: linq-language-integrated-query-in-c-sharp-part-2
topicName: Linq _Language Integrated Query_ In C Sharp — Part 2
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
    question: Which LINQ operator is used to return a specified number of contiguous elements from the end of a sequence?
    options:
      - TakeLast
      - SkipLast
      - Take
      - Skip
    answer: 0
    explanation: TakeLast is the correct answer to “Which LINQ operator is used to return a specified number of contiguous elements from the end of a sequence”. This question is standard in competitive examination syllabi for Linq _Language Integrated Query_ In C Sharp.
    keyConcept: Linq _Language Integrated Query_ In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: In LINQ, what does the Reverse operator do?
    options:
      - Projects each element of a sequence
      - Filters a sequence based on a predicate
      - Sorts the elements of a sequence in ascending order based on a key
      - Reverses the order of the elements in a sequence
    answer: 3
    explanation: Reverses the order of the elements in a sequence is the correct answer to “In LINQ, what does the Reverse operator do”. This question is standard in competitive examination syllabi for Linq _Language Integrated Query_ In C Sharp.
    keyConcept: Linq _Language Integrated Query_ In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What is the purpose of the Zip operator in LINQ?
    options:
      - Returns the number of elements in a sequence
      - Converts a sequence to a List
      - Merges two sequences by using the elements of both sequences
      - Converts a sequence to an Array
    answer: 2
    explanation: Merges two sequences by using the elements of both sequences is the correct answer to “What is the purpose of the Zip operator in LINQ”. This question is standard in competitive examination syllabi for Linq _Language Integrated Query_ In C Sharp.
    keyConcept: Linq _Language Integrated Query_ In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: Which LINQ operator is used to return elements from a sequence until a specified condition becomes false?
    options:
      - Skip
      - TakeWhile
      - Take
      - None of the above
    answer: 1
    explanation: TakeWhile is the correct answer to “Which LINQ operator is used to return elements from a sequence until a specified condition becomes false”. This question is standard in competitive examination syllabi for Linq _Language Integrated Query_ In C Sharp.
    keyConcept: Linq _Language Integrated Query_ In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: In LINQ, what does the ElementAtOrDefault operator do?
    options:
      - Returns the number of elements in a sequence
      - Returns the first element of a sequence
      - Returns the element at a specified index in a sequence, or a default value if the index is out of range
      - Returns the last element of a sequence
    answer: 2
    explanation: Returns the element at a specified index in a sequence, or a default value if the index is out of range is the correct answer to “In LINQ, what does the ElementAtOrDefault operator do”. This question is standard in competitive examination syllabi for Linq _Language Integrated Query_ In C Sharp.
    keyConcept: Linq _Language Integrated Query_ In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: Can we use linq to query against a DataTable?
    options:
      - "Yes"
      - "No"
      - Either Yes or No
      - None of the mentioned
    answer: 1
    explanation: No is the correct answer to “Can we use linq to query against a DataTable”. This question is standard in competitive examination syllabi for Linq _Language Integrated Query_ In C Sharp.
    keyConcept: Linq _Language Integrated Query_ In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: Which operator among the following supplies the information about the characteristics of a typeof?
    options:
      - is
      - as
      - typeof
      - none of the mentioned
    answer: 2
    explanation: typeof is the correct answer to “Which operator among the following supplies the information about the characteristics of a typeof”. This question is standard in competitive examination syllabi for Linq _Language Integrated Query_ In C Sharp.
    keyConcept: Linq _Language Integrated Query_ In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: "What will be the output of the following C# code snippet? class Program { static void Main(string[] args) { int[] nums = { 1, -2, 3, 0, -4, 5 }; var posNums = nums.Where(n => n < 10).Select(r => r%3); Console.Write(\"The values in nums: \"); foreach (int i in posNums) Console.Write(i + \" \"); Console.WriteLine(); Console.ReadLine(); } }"
    options:
      - Compile time error
      - Run time error
      - 1 -2 0 0 -1 2
      - 2 -1 0 0 -2 1
    answer: 2
    explanation: "1 -2 0 0 -1 2 is the correct answer to “What will be the output of the following C# code snippet? class Program { static void Main(string[] args) { int[] nums = { 1, -2, 3, 0, -4, 5 }; var posNums = nums.Where(n => n < 10).Select(r => r%3); Console.Write(\"The values in nums: \"); foreach (int i in posNums) Console.Write(i + \" \"); Console.WriteLine(); Console.ReadLine(); } }”. This question is standard in competitive examination syllabi for Linq _Language Integrated Query_ In C Sharp."
    keyConcept: Linq _Language Integrated Query_ In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: Assume 2 columns named as Product and Category how can be both sorted out based on first by category and then by product name?
    options:
      - var sortedProds = _db.Products.Orderby(c => c.Category)
      - var sortedProds = _db.Products.Orderby(c => c.Category) + ThenBy(n => n.Name)
      - var sortedProds = _db.Products.Orderby(c => c.Category) . ThenBy(n => n.Name)
      - all of the mentioned
    answer: 2
    explanation: var sortedProds = _db.Products.Orderby(c => c.Category) . ThenBy(n => n.Name) is the correct answer to “Assume 2 columns named as Product and Category how can be both sorted out based on first by category and then by product name”. This question is standard in competitive examination syllabi for Linq _Language Integrated Query_ In C Sharp.
    keyConcept: Linq _Language Integrated Query_ In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: "What will be the output of the following C# code snippet? class B { } class A : B { } class Program { static void Main(string[] args) { A a = new A(); B b = new B(); if (a is A) Console.WriteLine(\"a is an A\"); if (b is A) Console.WriteLine(\"b is an A because it is derived from A\"); if (a is B) Console.WriteLine(\"This won’t display -- a not derived from B\"); Console.ReadLine(); } }"
    options:
      - a is an A This won't display -- a not derived from B
      - a is an A b is an A because it is derived from A
      - b is an A because it is derived from A This won't display -- a not derived from B
      - "\"Both \"a is an A This won't display - a not derived from B\" & \"a is an A b is an A because it is derived from A\""
    answer: 0
    explanation: "a is an A This won't display -- a not derived from B is the correct answer to “What will be the output of the following C# code snippet? class B { } class A : B { } class Program { static void Main(string[] args) { A a = new A(); B b = new B(); if (a is A) Console.WriteLine(\"a is an A\"); if (b is A) Console.WriteLine(\"b is an A because it is derived from A\"); if (a is B) Console.WriteLine(\"This won’t display -- a not derived from B\"); Console.ReadLine(); } }”. This question is standard in competitive examination syllabi for Linq _Language Integrated Query_ In C Sharp."
    keyConcept: Linq _Language Integrated Query_ In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What will be the output of the following C# code snippet? class Program { static void Main(string[] args) { string[] strs = { ".com", ".net", "facebook.com", "google.net", "test", "netflix.net", "hsNameD.com" }; var netAddrs = from addr in strs where addr.Length > 4 && addr.EndsWith(".net", StringComparison.Ordinal) select addr; foreach (var str in netAddrs) Console.WriteLine(str); Console.ReadLine(); } }
    options:
      - Compile time error
      - Run time error
      - facebook.com netflix.net google.net
      - google.net netflix.net
    answer: 3
    explanation: google.net netflix.net is the correct answer to “What will be the output of the following C# code snippet? class Program { static void Main(string[] args) { string[] strs = { ".com", ".net", "facebook.com", "google.net", "test", "netflix.net", "hsNameD.com" }; var netAddrs = from addr in strs where addr.Length > 4 && addr.EndsWith(".net", StringComparison.Ordinal) select addr; foreach (var str in netAddrs) Console.WriteLine(str); Console.ReadLine(); } }”. This question is standard in competitive examination syllabi for Linq _Language Integrated Query_ In C Sharp.
    keyConcept: Linq _Language Integrated Query_ In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: "What will be the output of the following C# code snippet? class Program { static void Main(string[] args) { int[] nums = { 1, -2, 3, 0, -4, 5 }; var posNums = nums.Where(n => n > 0).Select(r => r*2). OrderByDescending(r=>r); Console.Write(\"The positive values in nums: \"); foreach(int i in posNums) Console.Write(i + \" \"); Console.WriteLine(); Console.ReadLine(); } }"
    options:
      - code run successfully prints nothing
      - run time error
      - code run successfully prints multiple of 2
      - compile time error
    answer: 2
    explanation: "code run successfully prints multiple of 2 is the correct answer to “What will be the output of the following C# code snippet? class Program { static void Main(string[] args) { int[] nums = { 1, -2, 3, 0, -4, 5 }; var posNums = nums.Where(n => n > 0).Select(r => r*2). OrderByDescending(r=>r); Console.Write(\"The positive values in nums: \"); foreach(int i in posNums) Console.Write(i + \" \"); Console.WriteLine(); Console.ReadLine(); } }”. This question is standard in competitive examination syllabi for Linq _Language Integrated Query_ In C Sharp."
    keyConcept: Linq _Language Integrated Query_ In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What will be the output of the following C# code snippet? class UseTypeof { static void Main() { Type t = typeof(StreamReader); Console.WriteLine(t.FullName); if(t.IsClass) Console.WriteLine("Is a class."); if(t.IsAbstract) Console.WriteLine("Is abstract."); else Console.WriteLine("Is concrete."); } }
    options:
      - Is a class Is abstract
      - Is abstract
      - System.IO.StreamReader Is a class Is concrete
      - Both Is a class Is abstract & System.IO.StreamReader Is a class Is concrete
    answer: 2
    explanation: System.IO.StreamReader Is a class Is concrete is the correct answer to “What will be the output of the following C# code snippet? class UseTypeof { static void Main() { Type t = typeof(StreamReader); Console.WriteLine(t.FullName); if(t.IsClass) Console.WriteLine("Is a class."); if(t.IsAbstract) Console.WriteLine("Is abstract."); else Console.WriteLine("Is concrete."); } }”. This question is standard in competitive examination syllabi for Linq _Language Integrated Query_ In C Sharp.
    keyConcept: Linq _Language Integrated Query_ In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What will be the output of the following C# code snippet? static void Main(string[] args) { int[] nums = { 5, 4, 6, 3, 14, 9, 8, 17, 1, 24, -1, 0 }; Array.Sort(nums); int idx = Array.BinarySearch(nums, 14); if (idx == 9) { Console.WriteLine(Convert.ToBoolean(1)); } else { Console.WriteLine(Convert.ToBoolean(0)); } Console.WriteLine("Index of 14 is " + idx); Console.ReadLine(); }
    options:
      - TRUE 0
      - Run time error
      - TRUE 9
      - None of the mentioned
    answer: 2
    explanation: TRUE 9 is the correct answer to “What will be the output of the following C# code snippet? static void Main(string[] args) { int[] nums = { 5, 4, 6, 3, 14, 9, 8, 17, 1, 24, -1, 0 }; Array.Sort(nums); int idx = Array.BinarySearch(nums, 14); if (idx == 9) { Console.WriteLine(Convert.ToBoolean(1)); } else { Console.WriteLine(Convert.ToBoolean(0)); } Console.WriteLine("Index of 14 is " + idx); Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Linq _Language Integrated Query_ In C Sharp.
    keyConcept: Linq _Language Integrated Query_ In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: Choose the namespace in which Expression trees are encapsulated?
    options:
      - System.Linq
      - System.Linq.Expressions
      - System.Text
      - System.Collections.Generic
    answer: 1
    explanation: System.Linq.Expressions is the correct answer to “Choose the namespace in which Expression trees are encapsulated”. This question is standard in competitive examination syllabi for Linq _Language Integrated Query_ In C Sharp.
    keyConcept: Linq _Language Integrated Query_ In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: Which mechanism among the following helps in identifying a type during the execution of a program?
    options:
      - Reflection
      - Runtime type ID
      - Both Reflection & Runtime type ID
      - None of the mentioned
    answer: 1
    explanation: Runtime type ID is the correct answer to “Which mechanism among the following helps in identifying a type during the execution of a program”. This question is standard in competitive examination syllabi for Linq _Language Integrated Query_ In C Sharp.
    keyConcept: Linq _Language Integrated Query_ In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: "In the following C# code, which query will work according to the set of code? class Program { static void Main(string[] args) { int[] nums = { 1, -2, 3, 0, -4, 5 }; int len = /*_________________ */ Console.WriteLine(\"The number of positive values in nums: \" + len); Console.ReadLine(); } }"
    options:
      - from n in nums where n > 0 select n
      - from n in nums where n > 0 select n.Count()
      - (from n in nums where n > 0 select n).Count()
      - Both "from n in nums where n > 0 select n.Count()" & "(from n in nums where n > 0 select n).Count();"
    answer: 2
    explanation: "(from n in nums where n > 0 select n).Count() is the correct answer to “In the following C# code, which query will work according to the set of code? class Program { static void Main(string[] args) { int[] nums = { 1, -2, 3, 0, -4, 5 }; int len = /*_________________ */ Console.WriteLine(\"The number of positive values in nums: \" + len); Console.ReadLine(); } }”. This question is standard in competitive examination syllabi for Linq _Language Integrated Query_ In C Sharp."
    keyConcept: Linq _Language Integrated Query_ In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: Choose the correct statement about the IComparer interface in C#?
    options:
      - The IComparer<T> is in System.Collections.Generic
      - It defines a generic form of Compare()
      - Only The IComparer<T> is in System.Collections.Generic
      - Both The IComparer is in System.Collections.Generic & It defines a generic form of Compare()
    answer: 3
    explanation: Both The IComparer is in System.Collections.Generic & It defines a generic form of Compare() is the correct answer to “Choose the correct statement about the IComparer interface in C#”. This question is standard in competitive examination syllabi for Linq _Language Integrated Query_ In C Sharp.
    keyConcept: Linq _Language Integrated Query_ In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: "What will be the output of the following C# code snippet? class Program { static void Main(string[] args) { int[] nums = {1}; var posNums = from n in nums wheres n > 0 select Math.Max(78, 9); Console.Write(\"The largest values in nums: \"); foreach (int i in posNums) Console.Write(i + \" \"); Console.WriteLine(); Console.ReadLine(); } }"
    options:
      - Code runs successfully prints nothing
      - Run time error
      - Code runs successfully prints required output
      - Compile time error
    answer: 2
    explanation: "Code runs successfully prints required output is the correct answer to “What will be the output of the following C# code snippet? class Program { static void Main(string[] args) { int[] nums = {1}; var posNums = from n in nums wheres n > 0 select Math.Max(78, 9); Console.Write(\"The largest values in nums: \"); foreach (int i in posNums) Console.Write(i + \" \"); Console.WriteLine(); Console.ReadLine(); } }”. This question is standard in competitive examination syllabi for Linq _Language Integrated Query_ In C Sharp."
    keyConcept: Linq _Language Integrated Query_ In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What does the following property defined in the array class defines in C#? public bool IsReadOnly { get; }
    options:
      - a property is read only by nature
      - property is true if the array object is read only and false otherwise
      - value is false for arrays
      - all of the mentioned
    answer: 3
    explanation: all of the mentioned is the correct answer to “What does the following property defined in the array class defines in C#? public bool IsReadOnly { get; }”. This question is standard in competitive examination syllabi for Linq _Language Integrated Query_ In C Sharp.
    keyConcept: Linq _Language Integrated Query_ In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: Choose the namespace in which the interface IEnumerable is declared?
    options:
      - System.Collections
      - System.Collections.Generic
      - Both System.Collections & System.Collections.Generic
      - None of the mentioned
    answer: 1
    explanation: System.Collections.Generic is the correct answer to “Choose the namespace in which the interface IEnumerable is declared”. This question is standard in competitive examination syllabi for Linq _Language Integrated Query_ In C Sharp.
    keyConcept: Linq _Language Integrated Query_ In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: Select the Keyword which supports the run time type identification?
    options:
      - is, as
      - as, typeof
      - Both is, as & as, typeof
      - Only is, as
    answer: 2
    explanation: Both is, as & as, typeof is the correct answer to “Select the Keyword which supports the run time type identification”. This question is standard in competitive examination syllabi for Linq _Language Integrated Query_ In C Sharp.
    keyConcept: Linq _Language Integrated Query_ In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: "What will be the output of the following C# code snippet? static void Main() { int[] nums = { 1, 2, 3, 4, 5 }; Console.Write(\"Original order: \"); foreach(int i in nums) Console.Write(i + \" \"); Array.Reverse(nums); Console.Write(\"Reversed order: \"); foreach(int i in nums) Console.Write(i + \" \"); Console.WriteLine(); }"
    options:
      - Run time error
      - 5, 4, 3, 2, 1
      - Compile time error
      - None of the mentioned
    answer: 1
    explanation: "5, 4, 3, 2, 1 is the correct answer to “What will be the output of the following C# code snippet? static void Main() { int[] nums = { 1, 2, 3, 4, 5 }; Console.Write(\"Original order: \"); foreach(int i in nums) Console.Write(i + \" \"); Array.Reverse(nums); Console.Write(\"Reversed order: \"); foreach(int i in nums) Console.Write(i + \" \"); Console.WriteLine(); }”. This question is standard in competitive examination syllabi for Linq _Language Integrated Query_ In C Sharp."
    keyConcept: Linq _Language Integrated Query_ In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: Choose the wrong statement about the LINQ?
    options:
      - The main concept behind the linq is query
      - linq makes use of foreach loop to execute the query
      - It is not required that linq should make use of IEnumerable interface
      - None of the mentioned
    answer: 2
    explanation: It is not required that linq should make use of IEnumerable interface is the correct answer to “Choose the wrong statement about the LINQ”. This question is standard in competitive examination syllabi for Linq _Language Integrated Query_ In C Sharp.
    keyConcept: Linq _Language Integrated Query_ In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: What will be the output of the following C# code snippet? class Program { static void Main(string[] args) { int[] nums = { 1, -2, 3, 0, -4, 5}; var posNums = from n in nums where n >= 0 select n; foreach (int i in posNums) Console.Write(i + " "); Console.WriteLine(); Console.ReadLine(); } }
    options:
      - 0, 1, -2, -4, 5
      - 1, 3, 0, 5
      - 1, 3, 5
      - Run time error
    answer: 1
    explanation: 1, 3, 0, 5 is the correct answer to “What will be the output of the following C# code snippet? class Program { static void Main(string[] args) { int[] nums = { 1, -2, 3, 0, -4, 5}; var posNums = from n in nums where n >= 0 select n; foreach (int i in posNums) Console.Write(i + " "); Console.WriteLine(); Console.ReadLine(); } }”. This question is standard in competitive examination syllabi for Linq _Language Integrated Query_ In C Sharp.
    keyConcept: Linq _Language Integrated Query_ In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Select the interfaces implemented by array class.
    options:
      - ICloneable, ICollection
      - IEnumerable, IStructuralComparable, IStructuralEquatable
      - ICloneable, ICollection, IList
      - Only IEnumerable, IStructuralComparable, IStructuralEquatable & ICloneable, ICollection, IList
    answer: 3
    explanation: Only IEnumerable, IStructuralComparable, IStructuralEquatable & ICloneable, ICollection, IList is the correct answer to “Select the interfaces implemented by array class.”. This question is standard in competitive examination syllabi for Linq _Language Integrated Query_ In C Sharp.
    keyConcept: Linq _Language Integrated Query_ In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: "What will be the output of the following C# code snippet? class Program { static void Main(string[] args) { int[] nums = { 1, -2, 3, 0, -4, 5 }; var posNums = from n in nums where n > -5 && n < 6 orderby n descending select n; Console.Write(\"The positive values in nums: \"); foreach (int i in posNums) Console.Write(i + \" \"); Console.WriteLine(); Console.ReadLine(); } }"
    options:
      - Prints nothing code runs successfully
      - Run time error
      - Arranged in descending order code runs successfully
      - Compile time error
    answer: 2
    explanation: "Arranged in descending order code runs successfully is the correct answer to “What will be the output of the following C# code snippet? class Program { static void Main(string[] args) { int[] nums = { 1, -2, 3, 0, -4, 5 }; var posNums = from n in nums where n > -5 && n < 6 orderby n descending select n; Console.Write(\"The positive values in nums: \"); foreach (int i in posNums) Console.Write(i + \" \"); Console.WriteLine(); Console.ReadLine(); } }”. This question is standard in competitive examination syllabi for Linq _Language Integrated Query_ In C Sharp."
    keyConcept: Linq _Language Integrated Query_ In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: Select the class which is the base class for all arrays in C#?
    options:
      - Array
      - Text
      - arrays
      - Both Array & Text
    answer: 0
    explanation: Array is the correct answer to “Select the class which is the base class for all arrays in C#”. This question is standard in competitive examination syllabi for Linq _Language Integrated Query_ In C Sharp.
    keyConcept: Linq _Language Integrated Query_ In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: "What will be the output of the following C# code snippet? class Program { static void Main(string[] args) { int[] nums = { 1, -2, 3, 0, -4, 5 }; var posNums = from n in nums where n % 2 ==0 select n; Console.Write(\"The positive values in nums: \"); foreach (int i in posNums) Console.Write(i + \" \"); Console.WriteLine(); Console.ReadLine(); } }"
    options:
      - code run successfully prints nothing
      - run time error
      - code run successfully and executes output
      - compile time error
    answer: 2
    explanation: "code run successfully and executes output is the correct answer to “What will be the output of the following C# code snippet? class Program { static void Main(string[] args) { int[] nums = { 1, -2, 3, 0, -4, 5 }; var posNums = from n in nums where n % 2 ==0 select n; Console.Write(\"The positive values in nums: \"); foreach (int i in posNums) Console.Write(i + \" \"); Console.WriteLine(); Console.ReadLine(); } }”. This question is standard in competitive examination syllabi for Linq _Language Integrated Query_ In C Sharp."
    keyConcept: Linq _Language Integrated Query_ In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: "What will be the output of the following C# code snippet? class Program { static void Main(string[] args) { int[] nums = { 16, 9, 25}; var posNums = from n in nums where n > 0 select Math.Sqrt(n); Console.Write(\"The positive values in nums: \"); foreach (int i in posNums) Console.Write(i + \" \"); Console.WriteLine(); Console.ReadLine(); } }"
    options:
      - Code runs successfully prints nothing
      - Code runs successfully prints required output
      - Run time error
      - Compile time error
    answer: 1
    explanation: "Code runs successfully prints required output is the correct answer to “What will be the output of the following C# code snippet? class Program { static void Main(string[] args) { int[] nums = { 16, 9, 25}; var posNums = from n in nums where n > 0 select Math.Sqrt(n); Console.Write(\"The positive values in nums: \"); foreach (int i in posNums) Console.Write(i + \" \"); Console.WriteLine(); Console.ReadLine(); } }”. This question is standard in competitive examination syllabi for Linq _Language Integrated Query_ In C Sharp."
    keyConcept: Linq _Language Integrated Query_ In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: Select the namespace which should be included while making use of LINQ operations?
    options:
      - System.Text
      - System.Collections.Generic
      - System.Linq
      - None of the mentioned
    answer: 2
    explanation: System.Linq is the correct answer to “Select the namespace which should be included while making use of LINQ operations”. This question is standard in competitive examination syllabi for Linq _Language Integrated Query_ In C Sharp.
    keyConcept: Linq _Language Integrated Query_ In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: "What will be the output of the following C# code snippet? class Program { static void Main(string[] args) { int[] nums = { 1, -2, -3, 5 }; var posNums = from n in nums orderby n descending select n*4 / 2; Console.Write(\"The values in nums: \"); foreach (int i in posNums) Console.Write(i + \" \"); Console.WriteLine(); Console.ReadLine(); } }"
    options:
      - 10 2 -4 -6
      - 5 1 -2 -3
      - 1 5 -2 -3
      - Run time error
    answer: 0
    explanation: "10 2 -4 -6 is the correct answer to “What will be the output of the following C# code snippet? class Program { static void Main(string[] args) { int[] nums = { 1, -2, -3, 5 }; var posNums = from n in nums orderby n descending select n*4 / 2; Console.Write(\"The values in nums: \"); foreach (int i in posNums) Console.Write(i + \" \"); Console.WriteLine(); Console.ReadLine(); } }”. This question is standard in competitive examination syllabi for Linq _Language Integrated Query_ In C Sharp."
    keyConcept: Linq _Language Integrated Query_ In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: "What will be the output of the following C# code snippet? class A {} class B : A {} class CheckCast { static void Main() { A a = new A(); B b = new B(); b = a as B; b = null; if(b==null) Console.WriteLine(\"The cast in b = (B) a is NOT allowed.\"); else Console.WriteLine(\"The cast in b = (B) a is allowed\"); } }"
    options:
      - Run time error
      - The cast in b = (B) a is NOT allowed
      - The cast in b = (B) a is allowed
      - Compile time error
    answer: 1
    explanation: "The cast in b = (B) a is NOT allowed is the correct answer to “What will be the output of the following C# code snippet? class A {} class B : A {} class CheckCast { static void Main() { A a = new A(); B b = new B(); b = a as B; b = null; if(b==null) Console.WriteLine(\"The cast in b = (B) a is NOT allowed.\"); else Console.WriteLine(\"The cast in b = (B) a is allowed\"); } }”. This question is standard in competitive examination syllabi for Linq _Language Integrated Query_ In C Sharp."
    keyConcept: Linq _Language Integrated Query_ In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: Select the statement which are correct about RTTI(Runtime type identification)?
    options:
      - It allows the type of an object to be determined during program execution
      - It tells what type of object is being referred to by a base class reference determined by RTTI
      - Helps in prevention of an invalid cast exception in advance
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “Select the statement which are correct about RTTI(Runtime type identification)”. This question is standard in competitive examination syllabi for Linq _Language Integrated Query_ In C Sharp.
    keyConcept: Linq _Language Integrated Query_ In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: In the following C# code, what does the output represent? class Program { static void Main(string[] args) { int[] nums = { 1, -2, 3, 0, -4, 5 }; var posNums = from n in nums where n > 0 select n; int len = posNums.Count(); Console.WriteLine(len); Console.ReadLine(); } }
    options:
      - Execution of code with nothing being printed
      - Execution of code with printing all numbers
      - Execution of code with counting total numbers greater than zero
      - Run time error
    answer: 2
    explanation: Execution of code with counting total numbers greater than zero is the correct answer to “In the following C# code, what does the output represent? class Program { static void Main(string[] args) { int[] nums = { 1, -2, 3, 0, -4, 5 }; var posNums = from n in nums where n > 0 select n; int len = posNums.Count(); Console.WriteLine(len); Console.ReadLine(); } }”. This question is standard in competitive examination syllabi for Linq _Language Integrated Query_ In C Sharp.
    keyConcept: Linq _Language Integrated Query_ In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: "What will be the output of the following C# code snippet? static void Main(string[] args) { string[] strings = {\"beta\", \"alpha\", \"gamma\"}; Console.WriteLine(\"Array elements: \"); DisplayArray(strings); Array.Reverse(strings); Console.WriteLine(\"Array elements now: \"); DisplayArray(strings); Console.ReadLine(); } public static void DisplayArray(Array array) { foreach (object o in array) { Console.Write(\"{0} \", o); } Console.WriteLine(); }"
    options:
      - "Array elements: beta alpha gamma Array elements now: ammag ahpla ateb"
      - "Array elements: beta alpha gamma Array elements now: gamma beta alpha"
      - "Array elements: beta alpha gamma Array elements now: gamma alpha beta"
      - None of the mentioned
    answer: 2
    explanation: "Array elements: beta alpha gamma Array elements now: gamma alpha beta is the correct answer to “What will be the output of the following C# code snippet? static void Main(string[] args) { string[] strings = {\"beta\", \"alpha\", \"gamma\"}; Console.WriteLine(\"Array elements: \"); DisplayArray(strings); Array.Reverse(strings); Console.WriteLine(\"Array elements now: \"); DisplayArray(strings); Console.ReadLine(); } public static void DisplayArray(Array array) { foreach (object o in array) { Console.Write(\"{0} \", o); } Console.WriteLine(); }”. This question is standard in competitive examination syllabi for Linq _Language Integrated Query_ In C Sharp."
    keyConcept: Linq _Language Integrated Query_ In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: What does the following C# code signify? expr is type
    options:
      - Determines the type of an object
      - a simple deceleration
      - Both Determines the type of an object & a simple deceleration
      - None of the mentioned
    answer: 0
    explanation: Determines the type of an object is the correct answer to “What does the following C# code signify? expr is type”. This question is standard in competitive examination syllabi for Linq _Language Integrated Query_ In C Sharp.
    keyConcept: Linq _Language Integrated Query_ In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: Which operator among the following is used to perform the operation of boxing, unboxing, reference and identity conversions?
    options:
      - is
      - as
      - typeof
      - all of the mentioned
    answer: 1
    explanation: as is the correct answer to “Which operator among the following is used to perform the operation of boxing, unboxing, reference and identity conversions”. This question is standard in competitive examination syllabi for Linq _Language Integrated Query_ In C Sharp.
    keyConcept: Linq _Language Integrated Query_ In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: What does the following property define in C#? public static int BinarySearch<T>(T[] array, int index, int length, T value)
    options:
      - Searches a portion of the array specified by array for the value specified by value
      - The search begins at the index specified by index and is restricted to length elements. Returns the index of the first match
      - If value is not found, returns a zero value
      - All of the mentioned
    answer: 1
    explanation: The search begins at the index specified by index and is restricted to length elements. Returns the index of the first match is the correct answer to “What does the following property define in C#? public static int BinarySearch<T>(T[] array, int index, int length, T value)”. This question is standard in competitive examination syllabi for Linq _Language Integrated Query_ In C Sharp.
    keyConcept: Linq _Language Integrated Query_ In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: "What will be the output of the following C# code snippet? class Program { static void Main(string[] args) { Expression<Func<int, int, bool>> IsFactorExp = (n, d) => (d != 0) ? (n % d) == 0 : false; Func<int, int, bool> IsFactor = IsFactorExp.Compile(); if (IsFactor(10, 5)) Console.WriteLine(\"5 is a factor of 10.\"); if (!IsFactor(343, 7)) Console.WriteLine(\"7 is not a factor of 10.\"); Console.ReadLine(); } }"
    options:
      - Compile time error
      - Run time error
      - 5 is a factor of 10 7 is not a factor of 10
      - 5 is a factor of 10
    answer: 3
    explanation: "5 is a factor of 10 is the correct answer to “What will be the output of the following C# code snippet? class Program { static void Main(string[] args) { Expression<Func<int, int, bool>> IsFactorExp = (n, d) => (d != 0) ? (n % d) == 0 : false; Func<int, int, bool> IsFactor = IsFactorExp.Compile(); if (IsFactor(10, 5)) Console.WriteLine(\"5 is a factor of 10.\"); if (!IsFactor(343, 7)) Console.WriteLine(\"7 is not a factor of 10.\"); Console.ReadLine(); } }”. This question is standard in competitive examination syllabi for Linq _Language Integrated Query_ In C Sharp."
    keyConcept: Linq _Language Integrated Query_ In C Sharp
    testedIn:
      - FPSC
      - PPSC
---


