---
title: Introduction To C Sharp — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Introduction To C Sharp — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: introduction-to-c-sharp-part-1
topicName: Introduction To C Sharp — Part 1
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
    question: Which of the following is NOT a valid identifier in C#?
    options:
      - _myVariable
      - 2ndVariable
      - My_Variable
      - myVariable_2
    answer: 1
    explanation: "Identifiers in C# are names given to variables, methods, classes, etc. Valid identifiers in C# can include letters (a-z, A-Z), digits (0-9), and underscores (_), but they cannot start with a digit. Option A: _myVariable - This is a valid identifier because it starts with an underscore and follows the rules. Option B: 2ndVariable - This is an invalid identifier because it starts with a digit, which is not allowed in C# identifiers. Option C: My_Variable - This is a valid identifier as it follows the rules. Option D: myVariable_2 - This is a valid identifier as it follows the rules. Therefore, the correct answer is Option B: 2ndVariable ."
    keyConcept: Introduction To C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: Which of the following is a value type in C#?
    options:
      - int
      - string
      - class
      - object
    answer: 0
    explanation: "Explanation: The correct answer is A: int . Value Types vs. Reference Types: In C#, data types are categorized into two main groups: value types and reference types. Value Types: * Value types directly store the data within their own memory space. * When you copy a value type variable, you are creating a completely independent copy of the data. * Examples of value types include: int , float , bool , char , struct , and enum . Reference Types: * Reference types store a *reference* (or pointer) to the memory location where the actual data is stored. * When you copy a reference type variable, you are only copying the reference, not the data itself. Both variables will then point to the same location in memory. * Examples of reference types include: string , class , object , arrays , and interfaces . Why the other options are incorrect: * B: string - Strings are reference types in C#. * C: class - Classes are used to define objects, and they are reference types . * D: object - 'object' is the base class for all types in C#, and it is a reference type ."
    keyConcept: Introduction To C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What does the 'void' keyword indicate in C#?
    options:
      - It does not return a value
      - It returns a value
      - It indicates an error
      - It is a data type
    answer: 0
    explanation: "void is a return type in C# that specifies a method does not return any value . When you define a method in C#, you must declare what type of value it will return using a return type. If the method performs some actions but does not return a result to the calling code, you use void as the return type. For example: Example: void PrintGreeting() { Console.WriteLine(\"Hello, World!\"); } In this example, the method PrintGreeting() simply prints a message to the console and does not return any value. If you try to use a return statement with a value in a void method, the compiler will throw an error, because void means \"no return value\". Important Notes: ✔ Use void when your method does something but doesn't produce a result. ✔ void is commonly used in event handlers , logging methods , and other utility functions. ✔ Unlike data types like int , string , or bool , void represents the absence of a return value, not a data type. Therefore, Option A is correct: \"It does not return a value\" ."
    keyConcept: Introduction To C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What is the default access modifier for class members in C#?
    options:
      - protected
      - public
      - private
      - internal
    answer: 2
    explanation: "The correct answer is C: private . Let's understand why: * Access Modifiers control the visibility and accessibility of class members (like variables and methods). * `public` : Means any code can access the member. * `private` : Means only code within the same class can access the member. * `protected` : Means the class itself and any classes that inherit from it (subclasses) can access the member. * `internal` : Means code within the same assembly (a compiled set of code, like a .exe or .dll) can access the member. If you don't explicitly specify an access modifier (like `public`, `private`, etc.) for a class member in C#, C# automatically assigns it the `private` access modifier. This is a design choice to promote encapsulation - hiding the internal workings of a class and controlling access to its data. It makes the code more organized and maintainable."
    keyConcept: Introduction To C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: "What is the output of the following code: Console.WriteLine(5 + 7 * 2);"
    options:
      - "24"
      - "19"
      - "14"
      - "17"
    answer: 1
    explanation: "Understanding the Question: This question tests your understanding of operator precedence in C#. Operator precedence determines the order in which operations are performed in a calculation. Operator Precedence in C#: In C#, multiplication (*) has higher precedence than addition (+). This means that multiplication is done before addition. Solving the Problem: Let's break down the expression Console.WriteLine(5 + 7 * 2); 1. First, the multiplication 7 * 2 is performed: 7 * 2 = 14 2. Next, the addition 5 + 14 is performed: 5 + 14 = 19 3. Finally, Console.WriteLine() displays the result, which is 19. Therefore: The correct answer is Option B: 19"
    keyConcept: Introduction To C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What does C# stand for?
    options:
      - C Sharp
      - C Style
      - Computer Sharp
      - Common Sharp
    answer: 0
    explanation: C Sharp is the correct answer to “What does C# stand for”. This question is standard in competitive examination syllabi for Introduction To C Sharp.
    keyConcept: Introduction To C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: C# is developed by which company?
    options:
      - Oracle
      - Google
      - Apple
      - Microsoft
    answer: 3
    explanation: Microsoft is the correct answer to “C# is developed by which company”. This question is standard in competitive examination syllabi for Introduction To C Sharp.
    keyConcept: Introduction To C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What is the entry point method in a C# program?
    options:
      - start
      - entry
      - main
      - execute
    answer: 2
    explanation: main is the correct answer to “What is the entry point method in a C# program”. This question is standard in competitive examination syllabi for Introduction To C Sharp.
    keyConcept: Introduction To C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What is the extension of C# source file?
    options:
      - .java
      - .cs
      - .csharp
      - None of the above
    answer: 1
    explanation: .cs is the correct answer to “What is the extension of C# source file”. This question is standard in competitive examination syllabi for Introduction To C Sharp.
    keyConcept: Introduction To C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: Which of the following statements is true about C#?
    options:
      - C# is a scripting language
      - C# is a markup language
      - C# is an object-oriented language
      - C# is a procedural language
    answer: 2
    explanation: C# is an object-oriented language is the correct answer to “Which of the following statements is true about C#”. This question is standard in competitive examination syllabi for Introduction To C Sharp.
    keyConcept: Introduction To C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What is the keyword used to declare a class in C#?
    options:
      - category
      - type
      - structure
      - class
    answer: 3
    explanation: class is the correct answer to “What is the keyword used to declare a class in C#”. This question is standard in competitive examination syllabi for Introduction To C Sharp.
    keyConcept: Introduction To C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: Which symbol is used to begin a single-line comment in C#?
    options:
      - //
      - /*
      - "#"
      - "--"
    answer: 0
    explanation: // is the correct answer to “Which symbol is used to begin a single-line comment in C#”. This question is standard in competitive examination syllabi for Introduction To C Sharp.
    keyConcept: Introduction To C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: Which of the following is a correct way to declare a variable in C#?
    options:
      - int 10 = varName
      - varName = 10
      - variable varName = 10
      - int varName = 10
    answer: 3
    explanation: int varName = 10 is the correct answer to “Which of the following is a correct way to declare a variable in C#”. This question is standard in competitive examination syllabi for Introduction To C Sharp.
    keyConcept: Introduction To C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What is the correct syntax to create a new instance of a class in C#?
    options:
      - new obj = MyClass()
      - MyClass obj = new MyClass()
      - MyClass obj()
      - None of the above
    answer: 1
    explanation: MyClass obj = new MyClass() is the correct answer to “What is the correct syntax to create a new instance of a class in C#”. This question is standard in competitive examination syllabi for Introduction To C Sharp.
    keyConcept: Introduction To C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What is the latest version of C# as of 2023?
    options:
      - C# 7
      - C# 8
      - C# 9
      - C# 10
    answer: 3
    explanation: C# 10 is the correct answer to “What is the latest version of C# as of 2023”. This question is standard in competitive examination syllabi for Introduction To C Sharp.
    keyConcept: Introduction To C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: Which of the following is NOT a C# access modifier?
    options:
      - friend
      - private
      - protected
      - public
    answer: 0
    explanation: friend is the correct answer to “Which of the following is NOT a C# access modifier”. This question is standard in competitive examination syllabi for Introduction To C Sharp.
    keyConcept: Introduction To C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: In C#, what keyword is used to declare a constant?
    options:
      - let
      - static
      - final
      - const
    answer: 3
    explanation: const is the correct answer to “In C#, what keyword is used to declare a constant”. This question is standard in competitive examination syllabi for Introduction To C Sharp.
    keyConcept: Introduction To C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: Which of the following statements is true about namespaces in C#?
    options:
      - They cannot contain classes
      - They are mandatory
      - They help organize code
      - They are used only in web development
    answer: 2
    explanation: They help organize code is the correct answer to “Which of the following statements is true about namespaces in C#”. This question is standard in competitive examination syllabi for Introduction To C Sharp.
    keyConcept: Introduction To C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: What is the default value of an int in C# if not explicitly initialized?
    options:
      - "-1"
      - "0"
      - "null"
      - "1"
    answer: 1
    explanation: 0 is the correct answer to “What is the default value of an int in C# if not explicitly initialized”. This question is standard in competitive examination syllabi for Introduction To C Sharp.
    keyConcept: Introduction To C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: Which operator is used for concatenation of strings in C#?
    options:
      - "-"
      - "*"
      - /
      - +
    answer: 3
    explanation: + is the correct answer to “Which operator is used for concatenation of strings in C#”. This question is standard in competitive examination syllabi for Introduction To C Sharp.
    keyConcept: Introduction To C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: Which of the following is NOT a valid C# comment style?
    options:
      - /**/
      - //
      - /* */
      - "#"
    answer: 3
    explanation: "# is the correct answer to “Which of the following is NOT a valid C# comment style”. This question is standard in competitive examination syllabi for Introduction To C Sharp."
    keyConcept: Introduction To C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: In C#, what is the purpose of the 'static' keyword for class members?
    options:
      - To hide members from other classes
      - To associate members with the class
      - To access non-static members
      - None of the above
    answer: 1
    explanation: To associate members with the class is the correct answer to “In C#, what is the purpose of the 'static' keyword for class members”. This question is standard in competitive examination syllabi for Introduction To C Sharp.
    keyConcept: Introduction To C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: What is the keyword used to exit a loop prematurely in C#?
    options:
      - stop
      - continue
      - break
      - exit
    answer: 2
    explanation: break is the correct answer to “What is the keyword used to exit a loop prematurely in C#”. This question is standard in competitive examination syllabi for Introduction To C Sharp.
    keyConcept: Introduction To C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: What is the correct syntax to define a method in C#?
    options:
      - methodName() { /* method body */ }
      - methodName { /* method body */ }
      - void methodName { /* method body */ }
      - void methodName() { /* method body */ }
    answer: 3
    explanation: void methodName() { /* method body */ } is the correct answer to “What is the correct syntax to define a method in C#”. This question is standard in competitive examination syllabi for Introduction To C Sharp.
    keyConcept: Introduction To C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: In C#, what is the purpose of the 'this' keyword?
    options:
      - Accesses global variables
      - Declares a new object
      - Indicates static members
      - Refers to the current instance
    answer: 3
    explanation: Refers to the current instance is the correct answer to “In C#, what is the purpose of the 'this' keyword”. This question is standard in competitive examination syllabi for Introduction To C Sharp.
    keyConcept: Introduction To C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Which keyword is used to explicitly derive one class from another in C#?
    options:
      - extends
      - inherit
      - superclass
      - ":"
    answer: 3
    explanation: ": is the correct answer to “Which keyword is used to explicitly derive one class from another in C#”. This question is standard in competitive examination syllabi for Introduction To C Sharp."
    keyConcept: Introduction To C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: What is the result of the expression 3 / 2 in C#?
    options:
      - "1.5"
      - "2"
      - "1"
      - "0.5"
    answer: 2
    explanation: 1 is the correct answer to “What is the result of the expression 3 / 2 in C#”. This question is standard in competitive examination syllabi for Introduction To C Sharp.
    keyConcept: Introduction To C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: What is the maximum value that an int data type can hold in C#?
    options:
      - 2^63 - 1
      - 2^31 - 1
      - 2^64 - 1
      - None of the above
    answer: 1
    explanation: 2^31 - 1 is the correct answer to “What is the maximum value that an int data type can hold in C#”. This question is standard in competitive examination syllabi for Introduction To C Sharp.
    keyConcept: Introduction To C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: Which of the following is NOT a comparison operator in C#?
    options:
      - ">="
      - "!="
      - "==="
      - "=="
    answer: 2
    explanation: "=== is the correct answer to “Which of the following is NOT a comparison operator in C#”. This question is standard in competitive examination syllabi for Introduction To C Sharp."
    keyConcept: Introduction To C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: What is the keyword used to declare a method that does not return a value in C#?
    options:
      - "null"
      - none
      - return
      - void
    answer: 3
    explanation: void is the correct answer to “What is the keyword used to declare a method that does not return a value in C#”. This question is standard in competitive examination syllabi for Introduction To C Sharp.
    keyConcept: Introduction To C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: In C#, how do you create a single-line comment?
    options:
      - "--"
      - "#"
      - //
      - /* */
    answer: 2
    explanation: // is the correct answer to “In C#, how do you create a single-line comment”. This question is standard in competitive examination syllabi for Introduction To C Sharp.
    keyConcept: Introduction To C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: What is the correct way to declare an array in C#?
    options:
      - int array = new int[5]
      - array = new int[5]
      - int array[] = new int[5]
      - int[] array = new int[5]
    answer: 3
    explanation: int[] array = new int[5] is the correct answer to “What is the correct way to declare an array in C#”. This question is standard in competitive examination syllabi for Introduction To C Sharp.
    keyConcept: Introduction To C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: Which of the following is NOT a valid method of string concatenation in C#?
    options:
      - str1 + str2
      - str1.concat(str2)
      - str1.Append(str2)
      - str1 += str2
    answer: 2
    explanation: str1.Append(str2) is the correct answer to “Which of the following is NOT a valid method of string concatenation in C#”. This question is standard in competitive examination syllabi for Introduction To C Sharp.
    keyConcept: Introduction To C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: What does the 'params' keyword do in C# method parameters?
    options:
      - Allows variable number of arguments
      - Restricts the number of arguments
      - Declares constant parameters
      - Indicates static method
    answer: 0
    explanation: Allows variable number of arguments is the correct answer to “What does the 'params' keyword do in C# method parameters”. This question is standard in competitive examination syllabi for Introduction To C Sharp.
    keyConcept: Introduction To C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: In C#, what is the keyword used to prevent a class from being inherited?
    options:
      - static
      - final
      - private
      - sealed
    answer: 3
    explanation: sealed is the correct answer to “In C#, what is the keyword used to prevent a class from being inherited”. This question is standard in competitive examination syllabi for Introduction To C Sharp.
    keyConcept: Introduction To C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: "What is the output of the following code: Console.WriteLine(\"Hello\" + 2 + 3);"
    options:
      - Hello23
      - Hello5
      - Hello
      - "23"
    answer: 1
    explanation: "Hello5 is the correct answer to “What is the output of the following code: Console.WriteLine(\"Hello\" + 2 + 3);”. This question is standard in competitive examination syllabi for Introduction To C Sharp."
    keyConcept: Introduction To C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: Which of the following is NOT a valid C# primitive data type?
    options:
      - long
      - byte
      - boolean
      - char
    answer: 2
    explanation: boolean is the correct answer to “Which of the following is NOT a valid C# primitive data type”. This question is standard in competitive examination syllabi for Introduction To C Sharp.
    keyConcept: Introduction To C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: What is the correct syntax to declare a nullable type in C#?
    options:
      - nullable int
      - int nullable
      - int? nullableInt
      - nullable
    answer: 2
    explanation: int? nullableInt is the correct answer to “What is the correct syntax to declare a nullable type in C#”. This question is standard in competitive examination syllabi for Introduction To C Sharp.
    keyConcept: Introduction To C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: In C#, what is the purpose of the 'base' keyword?
    options:
      - Declares a base method
      - Refers to the base class
      - Specifies the base address
      - None of the above
    answer: 1
    explanation: Refers to the base class is the correct answer to “In C#, what is the purpose of the 'base' keyword”. This question is standard in competitive examination syllabi for Introduction To C Sharp.
    keyConcept: Introduction To C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: What is the purpose of the 'readonly' keyword in C#?
    options:
      - Marks a method as read-only
      - Allows read access only
      - Indicates that a field can only be assigned once
      - Specifies a constant value
    answer: 2
    explanation: Indicates that a field can only be assigned once is the correct answer to “What is the purpose of the 'readonly' keyword in C#”. This question is standard in competitive examination syllabi for Introduction To C Sharp.
    keyConcept: Introduction To C Sharp
    testedIn:
      - FPSC
      - PPSC
---


