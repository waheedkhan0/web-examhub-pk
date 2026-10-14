---
title: Basic Syntax And Data Types In C Sharp — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Basic Syntax And Data Types In C Sharp — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: basic-syntax-and-data-types-in-c-sharp-part-1
topicName: Basic Syntax And Data Types In C Sharp — Part 1
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
    question: What will be the output of the following C# code? class Program { static void Main(string[] args) { int i; for ( i = 0; i < 5; i++) { } Console. WriteLine(i); Console. ReadLine(); } }
    options:
      - 0, 1, 2, 3, 4, 5
      - 0, 1, 2, 3, 4
      - "5"
      - "4"
    answer: 2
    explanation: "The correct answer is C: 5 Here's why: Let's break down the code step by step: int i; declares an integer variable named 'i'. for (i = 0; i < 5; i++) is a for loop . Let's see how it works: i = 0; This is the initialization part. 'i' starts at 0. i < 5; This is the condition. The loop continues as long as 'i' is less than 5. i++; This is the increment. After each loop iteration, 'i' increases by 1. The loop runs as follows: i = 0 (0 < 5 is true) i = 1 (1 < 5 is true) i = 2 (2 < 5 is true) i = 3 (3 < 5 is true) i = 4 (4 < 5 is true) i = 5 (5 < 5 is false ) The loop stops here. Console.WriteLine(i); This line prints the final value of 'i', which is 5. Console.ReadLine(); This line just waits for you to press Enter before the program closes (it keeps the console window open so you can see the output)."
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: What will be the output of the following C# code? static void Main(string[] args) { int i ; for (i = 0; i < 5; i++) { int j = 0; j += i; Console. WriteLine(j); } Console. WriteLine( i * j); Console. ReadLine(); }
    options:
      - 0, 1, 6, 18, 40
      - 0, 1, 5, 20, 30
      - Compile time error
      - 0, 1, 2, 3, 4, 5
    answer: 2
    explanation: "Understanding the Code: This C# code uses a for loop to repeat a block of code five times. Inside the loop, a variable j is declared and initialized to 0 in each iteration. Then, j is updated by adding the current value of i to it ( j += i; ). The value of j is printed to the console in each iteration. After the loop finishes, the code tries to print i * j . However, this is tricky! The scope of j is only inside the loop. Once the loop finishes, j no longer exists. Therefore, you will get a compile-time error because j is not accessible outside the loop. Why other options are incorrect: Options A, B, and D show possible outputs if the code were to run without error. Since j is out of scope, these outputs are impossible. The Correct Answer: The correct answer is C: Compile time error because the variable j is not accessible outside the for loop."
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What symbol is used to end a statement in C#?
    options:
      - ""
      - ":"
      - .
      - ","
    answer: 0
    explanation: " is the correct answer to “What symbol is used to end a statement in C#”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp."
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What is the correct syntax to declare a variable in C#?
    options:
      - num = int
      - var num
      - num int
      - int num
    answer: 3
    explanation: int num is the correct answer to “What is the correct syntax to declare a variable in C#”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: What is the purpose of the 'var' keyword in C#?
    options:
      - Declares a constant
      - Converts a variable to string
      - Implicitly declares a variable
      - Defines a method
    answer: 2
    explanation: Implicitly declares a variable is the correct answer to “What is the purpose of the 'var' keyword in C#”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: Which of the following is a valid identifier in C#?
    options:
      - $variable
      - myVariable
      - "#variable"
      - None of the above
    answer: 1
    explanation: myVariable is the correct answer to “Which of the following is a valid identifier in C#”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What is the correct way to comment a single line in C#?
    options:
      - "-- This is a comment"
      - "# This is a comment"
      - // This is a comment
      - /* This is a comment */
    answer: 2
    explanation: // This is a comment is the correct answer to “What is the correct way to comment a single line in C#”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What is the default value of an integer variable in C# if not explicitly initialized?
    options:
      - "1"
      - "null"
      - "-1"
      - "0"
    answer: 3
    explanation: 0 is the correct answer to “What is the default value of an integer variable in C# if not explicitly initialized”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: Which of the following is a valid C# statement?
    options:
      - Console.WriteLine("Hello, World!")
      - print("Hello, World!")
      - System.out.println("Hello, World!")
      - echo "Hello, World!"
    answer: 0
    explanation: Console.WriteLine("Hello, World!") is the correct answer to “Which of the following is a valid C# statement”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What is the correct syntax to declare a constant in C#?
    options:
      - constant MAX_VALUE = 100
      - MAX_VALUE = 100
      - int MAX_VALUE = 100
      - const int MAX_VALUE = 100
    answer: 3
    explanation: const int MAX_VALUE = 100 is the correct answer to “What is the correct syntax to declare a constant in C#”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What does the 'using' directive do in C#?
    options:
      - Defines classes
      - Declares variables
      - Imports namespaces
      - Handles exceptions
    answer: 2
    explanation: Imports namespaces is the correct answer to “What does the 'using' directive do in C#”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: Which data type is used to store floating-point numbers with a larger range and precision?
    options:
      - decimal
      - double
      - long
      - None of the above
    answer: 1
    explanation: double is the correct answer to “Which data type is used to store floating-point numbers with a larger range and precision”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What is the correct way to declare a string variable in C#?
    options:
      - string = str
      - var str
      - string str
      - str string
    answer: 2
    explanation: string str is the correct answer to “What is the correct way to declare a string variable in C#”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What is the correct syntax to create a multi-line comment in C#?
    options:
      - /* This is a multi-line comment */
      - // This is a multi-line comment
      - "# This is a multi-line comment"
      - "-- This is a multi-line comment"
    answer: 0
    explanation: /* This is a multi-line comment */ is the correct answer to “What is the correct syntax to create a multi-line comment in C#”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: Which of the following is a valid way to declare a character variable in C#?
    options:
      - var letter = 'A'
      - character letter = 'A'
      - char letter = "A"
      - char letter = 'A'
    answer: 3
    explanation: char letter = 'A' is the correct answer to “Which of the following is a valid way to declare a character variable in C#”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What is the correct way to declare an array of integers in C#?
    options:
      - numbers[] int
      - array numbers
      - int[] numbers
      - numbers = int[]
    answer: 2
    explanation: int[] numbers is the correct answer to “What is the correct way to declare an array of integers in C#”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: Which of the following is a valid way to represent the number 1000 in C#?
    options:
      - 1 000
      - 10_00
      - "1000"
      - None of the above
    answer: 2
    explanation: 1000 is the correct answer to “Which of the following is a valid way to represent the number 1000 in C#”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: In C#, what is the role of the 'finally' block in a try-catch-finally statement?
    options:
      - Executes code regardless of exceptions
      - Catches any exceptions
      - Handles exceptions
      - Terminates the program
    answer: 0
    explanation: Executes code regardless of exceptions is the correct answer to “In C#, what is the role of the 'finally' block in a try-catch-finally statement”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: What is the correct syntax to define a multi-line comment in C#?
    options:
      - "-- This is a multi-line comment"
      - "# This is a multi-line comment"
      - // This is a multi-line comment
      - /* This is a multi-line comment */
    answer: 3
    explanation: /* This is a multi-line comment */ is the correct answer to “What is the correct syntax to define a multi-line comment in C#”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What is the default value of a boolean variable in C# if not explicitly initialized?
    options:
      - "0"
      - "Null"
      - "FALSE"
      - "TRUE"
    answer: 2
    explanation: FALSE is the correct answer to “What is the default value of a boolean variable in C# if not explicitly initialized”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: What is the correct way to declare a floating-point variable with single precision in C#?
    options:
      - Num float
      - Var num
      - float num
      - double num
    answer: 2
    explanation: float num is the correct answer to “What is the correct way to declare a floating-point variable with single precision in C#”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: Which of the following is a valid way to declare a constant string in C#?
    options:
      - MESSAGE const = "Hello"
      - const string MESSAGE = "Hello"
      - const MESSAGE = "Hello"
      - None of the above
    answer: 1
    explanation: const string MESSAGE = "Hello" is the correct answer to “Which of the following is a valid way to declare a constant string in C#”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: "What is the output of the following code: Console.WriteLine(\"10\" + 5);"
    options:
      - Compilation error
      - "10"
      - "105"
      - "15"
    answer: 2
    explanation: "105 is the correct answer to “What is the output of the following code: Console.WriteLine(\"10\" + 5);”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp."
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: What is the default value of a reference type variable in C# if not explicitly initialized?
    options:
      - "0"
      - "FALSE"
      - "TRUE"
      - "Null"
    answer: 3
    explanation: Null is the correct answer to “What is the default value of a reference type variable in C# if not explicitly initialized”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: What is the purpose of the 'foreach' loop in C#?
    options:
      - Performs a conditional iteration
      - Terminates the loop
      - Iterates over elements in a collection
      - Executes a block of code repeatedly
    answer: 2
    explanation: Iterates over elements in a collection is the correct answer to “What is the purpose of the 'foreach' loop in C#”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Which data type is used to store true/false values in C#?
    options:
      - bool
      - boolean
      - char
      - int
    answer: 0
    explanation: bool is the correct answer to “Which data type is used to store true/false values in C#”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: What is the correct way to declare a multi-dimensional array in C#?
    options:
      - numbers = int[]
      - int[] numbers
      - numbers[] int
      - int[,] numbers
    answer: 3
    explanation: int[,] numbers is the correct answer to “What is the correct way to declare a multi-dimensional array in C#”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: What is the purpose of the 'is' keyword in C#?
    options:
      - Checks if two objects are equal
      - Compares two values
      - Checks if an object is compatible with a type
      - Checks if an object is null
    answer: 2
    explanation: Checks if an object is compatible with a type is the correct answer to “What is the purpose of the 'is' keyword in C#”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: In C#, what is the result of the expression 5 / 2?
    options:
      - "2.5"
      - "2"
      - Compilation error
      - None of the above
    answer: 1
    explanation: 2 is the correct answer to “In C#, what is the result of the expression 5 / 2”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: What is the correct syntax to declare a nullable integer variable in C#?
    options:
      - nullable int num
      - var? num
      - int? num
      - num? int
    answer: 2
    explanation: int? num is the correct answer to “What is the correct syntax to declare a nullable integer variable in C#”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: What is the purpose of the 'unchecked' keyword in C#?
    options:
      - Enables overflow checking
      - Terminates the program
      - Compiles the program without errors
      - Disables overflow checking for integral-type arithmetic operations
    answer: 3
    explanation: Disables overflow checking for integral-type arithmetic operations is the correct answer to “What is the purpose of the 'unchecked' keyword in C#”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: "What is the output of the following code: Console.WriteLine($\"5 + 5 = {5 + 5}\");"
    options:
      - 5 + 5 = 10
      - "10"
      - $"5 + 5 = {5 + 5}"
      - Compilation error
    answer: 0
    explanation: "5 + 5 = 10 is the correct answer to “What is the output of the following code: Console.WriteLine($\"5 + 5 = {5 + 5}\");”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp."
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: What is the correct way to declare and initialize a string variable in C#?
    options:
      - string = str
      - str Hello
      - str = "Hello"
      - string str = "Hello"
    answer: 3
    explanation: string str = "Hello" is the correct answer to “What is the correct way to declare and initialize a string variable in C#”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: Type of Conversion in which compiler is unable to convert the data type implicitly is?
    options:
      - ushort to long
      - int to uint
      - byte to decimal
      - None of the above
    answer: 1
    explanation: int to uint is the correct answer to “Type of Conversion in which compiler is unable to convert the data type implicitly is”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: Choose ".NET class" name from which data type "UInt" is derived?
    options:
      - System.Int16
      - System.UInt32
      - System.UInt64
      - System.UInt16
    answer: 1
    explanation: System.UInt32 is the correct answer to “Choose ".NET class" name from which data type "UInt" is derived”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: Syntax for declaration and initialization of data variable is?
    options:
      - <data type><var_name> = <Value>
      - <data type><var_name>
      - <var_name><data type>
      - <var_name> = <value>
    answer: 0
    explanation: <data type><var_name> = <Value> is the correct answer to “Syntax for declaration and initialization of data variable is”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: "For the following C# code select the relevant solution for conversion of data type. static void Main(string[] args) { int num1 = 20000; int num2 = 50000; long total; total = num1 + num2; Console.WriteLine(\"Total is : \" +total); Console.ReadLine(); }"
    options:
      - Compiler will generate runtime error
      - Conversion is implicit type, no error generation
      - Specifying data type for conversion externally will solve the problem
      - None of the mentioned
    answer: 1
    explanation: "Conversion is implicit type, no error generation is the correct answer to “For the following C# code select the relevant solution for conversion of data type. static void Main(string[] args) { int num1 = 20000; int num2 = 50000; long total; total = num1 + num2; Console.WriteLine(\"Total is : \" +total); Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp."
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: Storage location used by computer memory to store data for usage by an application is?
    options:
      - Pointers
      - Constants
      - Variable
      - None of the mentioned
    answer: 2
    explanation: Variable is the correct answer to “Storage location used by computer memory to store data for usage by an application is”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: For two strings s1 and s2 to be equal, which is the correct way to find if the contents of two strings are equal?
    options:
      - if(s1 = s2)
      - int c; c = s1.CompareTo(s2)
      - if (s1 is s2)
      - if(strcmp(s1, s2))
    answer: 1
    explanation: int c; c = s1.CompareTo(s2) is the correct answer to “For two strings s1 and s2 to be equal, which is the correct way to find if the contents of two strings are equal”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: What will be the output of the following C# code? int a,b; a = (b = 10) + 5;
    options:
      - b = 10, a = 5
      - b = 15, a = 5
      - a = 15, b = 10
      - a = 10, b = 10
    answer: 2
    explanation: a = 15, b = 10 is the correct answer to “What will be the output of the following C# code? int a,b; a = (b = 10) + 5;”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
---


