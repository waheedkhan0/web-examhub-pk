---
title: Object Oriented Programming Using C Plus Plus — Part 1 MCQs with Explanations
description: Practice high-yield Computer Science & IT MCQs on Object Oriented Programming Using C Plus Plus — Part 1 with worked academic solutions for PPSC, FPSC, CSS, PMS, NTS.
subject: computer-science
subjectName: Computer Science & IT
topic: object-oriented-programming-using-c-plus-plus-part-1
topicName: Object Oriented Programming Using C Plus Plus — Part 1
author: ExamHub Academic Editorial Board
updatedDate: "2026-10-14"
difficulty: Exam-Level
targetExams:
  - PPSC
  - FPSC
  - CSS
  - PMS
  - NTS
questions:
  - id: 1
    question: You can use C++ as a procedural, as well as an object-oriented, language
    options:
      - "True"
      - "False"
    answer: 0
    explanation: A. True. C++ is a multi-paradigm programming language, which means it supports multiple programming paradigms, including procedural and object-oriented programming. Procedural programming is a programming paradigm that emphasizes the use of procedures or functions to organize the program into small, reusable blocks of code. C++ supports procedural programming through the use of functions, structures, and arrays. Object-oriented programming, on the other hand, is a programming paradigm that emphasizes the use of objects, which are instances of classes, to organize the program. C++ supports object-oriented programming through the use of classes, inheritance, polymorphism, and other object-oriented concepts. Thus, C++ can be used as both a procedural and an object-oriented language, depending on the needs of the programmer and the requirements of the problem being solved.
    keyConcept: Object Oriented Programming Using C Plus Plus
    testedIn:
      - PPSC
      - FPSC
  - id: 2
    question: The use of the break statement in a switch statement is
    options:
      - optional
      - compulsory
      - not allowed. It gives an error message
      - to check an error
      - None of these
    answer: 0
    explanation: "Correct Answer: A: optional Here's why: In a `switch` statement, the `break` statement is optional . How a `switch` works (Simplified): A `switch` statement checks a variable against different `case` values. If a `case` matches, the code under that `case` starts executing. `break`'s role: The `break` statement tells the program to immediately exit the `switch` statement . What happens without `break`? If you *don't* include a `break` after a `case`, the program will \"fall through\" to the next `case` and continue executing code there, even if that next `case` doesn't match the original variable's value. This \"fall-through\" behavior can be useful in some situations, but often you want to execute only the code associated with a single `case`. Example: Imagine a traffic light. `switch (trafficLightColor)` { `case \"red\":` `Stop();` `break;` // Without this, it might also execute the \"yellow\" code! `case \"yellow\":` `SlowDown();` `break;` `case \"green\":` `Go();` `break;` `}` So, while `break` is very common and important for controlling the flow of execution in a `switch`, it's not required by the C++ language . The program will still compile and run (though perhaps not as intended) without it."
    keyConcept: Object Oriented Programming Using C Plus Plus
    testedIn:
      - PPSC
      - FPSC
  - id: 3
    question: "Evaluate the following expression: 4 >6 || 10 < 2 * 6"
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "In the given expression, we have two conditions connected by the logical OR operator ( || ): - 4 > 6 : This condition is false because 4 is not greater than 6. - 10 < 2 * 6 : This condition is true because 10 is less than 12 (2 multiplied by 6). The logical OR operator ( || ) returns true if at least one of the conditions is true. In this case, the second condition is true, so the overall expression is true. So, the correct answer is Option A: True ."
    keyConcept: Object Oriented Programming Using C Plus Plus
    testedIn:
      - PPSC
      - FPSC
  - id: 4
    question: A static data member is given a value
    options:
      - within the class definition
      - outside the class definition
      - when the program is executed
      - never
    answer: 1
    explanation: Static data members in C++ are special variables associated with a class, not individual objects of that class. This means there's only one copy of the static member shared by all objects of the class. Because of this shared nature, you can't initialize them directly within the class declaration like regular member variables. Instead, you need to give them a value outside the class definition. This is done typically by providing an initialization outside the class, often in the same header file or a separate source file. Therefore, the correct answer is that a static data member is given a value outside the class definition .
    keyConcept: Object Oriented Programming Using C Plus Plus
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: Which of the following is the insertion operator?
    options:
      - ">>"
      - "<<"
      - //
      - /*
      - both (a) and (b)
    answer: 1
    explanation: "The insertion operator in C++ is used to insert data into an output stream, such as cout . Option A: >> - This is the extraction operator, used to extract data from an input stream, such as cin . Option B: << - This is the insertion operator, used to insert data into an output stream, such as cout . Option C: // - This denotes a single-line comment in C++. Option D: / - This denotes the beginning of a multi-line comment in C++, which ends with / . Option E: both (a) and (b) - This is incorrect because only Option B: << is the insertion operator. Therefore, the correct answer is Option B: << ."
    keyConcept: Object Oriented Programming Using C Plus Plus
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: Which of the following C++ expressions will find the square root of the number 16?
    options:
      - pow (16, 2)
      - sqroot (16)
      - sqrt (16, 2)
      - sqrt (16)
    answer: 3
    explanation: "sqrt is a function from the C++ standard library that calculates the square root of a given number. In this case, the expression sqrt(16) calculates the square root of 16. The function pow from the C++ standard library calculates the power of a number, i.e., it raises a number to a specified power. The expression pow(16, 2) calculates 16 raised to the power of 2, which is 256, and is not the square root of 16. sqroot is not a standard C++ function and will result in a compile-time error. sqrt (16, 2) is not a correct syntax for the sqrt function in C++, which takes only one argument, the number for which the square root is to be calculated. So, the correct expression to find the square root of 16 in C++ is sqrt(16) . C++ program to find out square root of 16 #include <iostream> #include <cmath> using namespace std; int main() { cout << \"Square root of 16 = \"; // print the square root of 16 cout << sqrt(16); return 0; } Here is an explanation of the code: 1. #include <iostream> - This line includes the input/output stream library, which provides the cout function that is used later in the code to print the output. 2. #include <cmath> - This line includes the C++ mathematics library, which provides mathematical functions such as sqrt() that is used later in the code to calculate the square root. 3. using namespace std; - This line is used to make all the elements of the standard C++ library available to the program. 4. int main() - This is the main function of the program. All C++ programs must have a main function, which is where the program starts executing. 4. cout << \"Square root of 16 = \"; - This line outputs the string \"Square root of 16 =\" to the console. 6. cout << sqrt(16); - This line calculates the square root of 16 using the sqrt() function from the C++ mathematics library and outputs the result to the console. 7. return 0; - This line is the return statement of the main function. It returns 0, indicating that the program has executed successfully. In summary, this program calculates the square root of 16 and outputs the result to the console."
    keyConcept: Object Oriented Programming Using C Plus Plus
    testedIn:
      - PPSC
      - FPSC
  - id: 7
    question: A default catch block catches
    options:
      - all thrown objects
      - no thrown objects
      - any thrown object that has not been caught by an earlier catch block
      - all thrown objects that have been caught by an earlier catch block
    answer: 2
    explanation: any thrown object that has not been caught by an earlier catch block is the correct answer to “A default catch block catches”. This question is standard in competitive examination syllabi for Object Oriented Programming Using C Plus Plus.
    keyConcept: Object Oriented Programming Using C Plus Plus
    testedIn:
      - PPSC
      - FPSC
  - id: 8
    question: Adding a derived class to a base class requires fundamental changes to the base class
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “Adding a derived class to a base class requires fundamental changes to the base class”. This question is standard in competitive examination syllabi for Object Oriented Programming Using C Plus Plus.
    keyConcept: Object Oriented Programming Using C Plus Plus
    testedIn:
      - PPSC
      - FPSC
  - id: 9
    question: Format flags may be combined using
    options:
      - the bitwise OR operator (|)
      - the logical OR operator (||)
      - the bitwise AND operator (&)
      - the logical AND operator (&&)
      - None of the above
    answer: 0
    explanation: the bitwise OR operator (|) is the correct answer to “Format flags may be combined using”. This question is standard in competitive examination syllabi for Object Oriented Programming Using C Plus Plus.
    keyConcept: Object Oriented Programming Using C Plus Plus
    testedIn:
      - PPSC
      - FPSC
  - id: 10
    question: To expose a data member to the program, you must declare the data member in the _____ section of the class
    options:
      - common
      - exposed
      - public
      - unrestricted
      - user
    answer: 2
    explanation: public is the correct answer to “To expose a data member to the program, you must declare the data member in the _____ section of the class”. This question is standard in competitive examination syllabi for Object Oriented Programming Using C Plus Plus.
    keyConcept: Object Oriented Programming Using C Plus Plus
    testedIn:
      - PPSC
      - FPSC
  - id: 11
    question: "Evaluate the following expression: 3 >6&&7>4"
    options:
      - "True"
      - "False"
    answer: 1
    explanation: "False is the correct answer to “Evaluate the following expression: 3 >6&&7>4”. This question is standard in competitive examination syllabi for Object Oriented Programming Using C Plus Plus."
    keyConcept: Object Oriented Programming Using C Plus Plus
    testedIn:
      - PPSC
      - FPSC
  - id: 12
    question: Which of the following are valid characters for a numeric literal constant?
    options:
      - a comma
      - a dollar sign ($)
      - a percent sign (%)
      - a space
      - None of the above
    answer: 4
    explanation: None of the above is the correct answer to “Which of the following are valid characters for a numeric literal constant”. This question is standard in competitive examination syllabi for Object Oriented Programming Using C Plus Plus.
    keyConcept: Object Oriented Programming Using C Plus Plus
    testedIn:
      - PPSC
      - FPSC
  - id: 13
    question: A function that changes the state of the cout object is called a(n) _____
    options:
      - member
      - adjuster
      - manipulator
      - operator
    answer: 2
    explanation: manipulator is the correct answer to “A function that changes the state of the cout object is called a(n) _____”. This question is standard in competitive examination syllabi for Object Oriented Programming Using C Plus Plus.
    keyConcept: Object Oriented Programming Using C Plus Plus
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: A C++ program contains a function with the header int function(double d, char c). Which of the following function headers could be used within the same program?
    options:
      - char function(double d, char c)
      - int function(int d, char c)
      - both (a) and (b)
      - neither (a) nor (b)
    answer: 1
    explanation: int function(int d, char c) is the correct answer to “A C++ program contains a function with the header int function(double d, char c). Which of the following function headers could be used within the same program”. This question is standard in competitive examination syllabi for Object Oriented Programming Using C Plus Plus.
    keyConcept: Object Oriented Programming Using C Plus Plus
    testedIn:
      - PPSC
      - FPSC
  - id: 15
    question: When the compiler cannot differentiate between two overloaded constructors, they are called
    options:
      - overloaded
      - destructed
      - ambiguous
      - dubious
    answer: 2
    explanation: ambiguous is the correct answer to “When the compiler cannot differentiate between two overloaded constructors, they are called”. This question is standard in competitive examination syllabi for Object Oriented Programming Using C Plus Plus.
    keyConcept: Object Oriented Programming Using C Plus Plus
    testedIn:
      - PPSC
      - FPSC
  - id: 16
    question: Some Streams work with input, and some with output
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “Some Streams work with input, and some with output”. This question is standard in competitive examination syllabi for Object Oriented Programming Using C Plus Plus.
    keyConcept: Object Oriented Programming Using C Plus Plus
    testedIn:
      - PPSC
      - FPSC
  - id: 17
    question: If you design a class that needs special initialization tasks, you will want to design a(n) _____
    options:
      - housekeeping routine
      - initializer
      - constructor
      - compiler
    answer: 2
    explanation: constructor is the correct answer to “If you design a class that needs special initialization tasks, you will want to design a(n) _____”. This question is standard in competitive examination syllabi for Object Oriented Programming Using C Plus Plus.
    keyConcept: Object Oriented Programming Using C Plus Plus
    testedIn:
      - PPSC
      - FPSC
  - id: 18
    question: Which type of statement does not occur in computer programs?
    options:
      - sequence
      - loop
      - denial
      - selection
    answer: 2
    explanation: denial is the correct answer to “Which type of statement does not occur in computer programs”. This question is standard in competitive examination syllabi for Object Oriented Programming Using C Plus Plus.
    keyConcept: Object Oriented Programming Using C Plus Plus
    testedIn:
      - PPSC
      - FPSC
  - id: 19
    question: The newline character is always included between
    options:
      - pair of parentheses
      - pair of curly braces
      - control string
      - "&"
      - None of these
    answer: 2
    explanation: control string is the correct answer to “The newline character is always included between”. This question is standard in competitive examination syllabi for Object Oriented Programming Using C Plus Plus.
    keyConcept: Object Oriented Programming Using C Plus Plus
    testedIn:
      - PPSC
      - FPSC
  - id: 20
    question: To be called object-oriented, a programming language must allow
    options:
      - functions that return only a single value
      - "#include files"
      - inheritance
      - All of the above
    answer: 2
    explanation: inheritance is the correct answer to “To be called object-oriented, a programming language must allow”. This question is standard in competitive examination syllabi for Object Oriented Programming Using C Plus Plus.
    keyConcept: Object Oriented Programming Using C Plus Plus
    testedIn:
      - PPSC
      - FPSC
  - id: 21
    question: A function that returns no values to the program that calls it is _____
    options:
      - not allowed in C++
      - type void
      - type empty
      - type barren
    answer: 1
    explanation: type void is the correct answer to “A function that returns no values to the program that calls it is _____”. This question is standard in competitive examination syllabi for Object Oriented Programming Using C Plus Plus.
    keyConcept: Object Oriented Programming Using C Plus Plus
    testedIn:
      - PPSC
      - FPSC
  - id: 22
    question: The keyword used to define a structure is _____
    options:
      - stru
      - stt
      - struct
      - structure
    answer: 2
    explanation: struct is the correct answer to “The keyword used to define a structure is _____”. This question is standard in competitive examination syllabi for Object Oriented Programming Using C Plus Plus.
    keyConcept: Object Oriented Programming Using C Plus Plus
    testedIn:
      - PPSC
      - FPSC
  - id: 23
    question: If container classes are carefully constructed, then these tools are available to work with structures that are not ______
    options:
      - valid without container classes
      - programmer-defined
      - type-specific
      - public
    answer: 2
    explanation: type-specific is the correct answer to “If container classes are carefully constructed, then these tools are available to work with structures that are not ______”. This question is standard in competitive examination syllabi for Object Oriented Programming Using C Plus Plus.
    keyConcept: Object Oriented Programming Using C Plus Plus
    testedIn:
      - PPSC
      - FPSC
  - id: 24
    question: Header files often have the file extension _____
    options:
      - .H
      - .HE
      - .HEA
      - .HEAD
    answer: 0
    explanation: .H is the correct answer to “Header files often have the file extension _____”. This question is standard in competitive examination syllabi for Object Oriented Programming Using C Plus Plus.
    keyConcept: Object Oriented Programming Using C Plus Plus
    testedIn:
      - PPSC
      - FPSC
  - id: 25
    question: "The #ifndef directive tests to see whether ________"
    options:
      - a class has been defined
      - a variable has been given a value
      - a class has no variable definitions
      - any objects of the class have been instantiated
    answer: 0
    explanation: "a class has been defined is the correct answer to “The #ifndef directive tests to see whether ________”. This question is standard in competitive examination syllabi for Object Oriented Programming Using C Plus Plus."
    keyConcept: Object Oriented Programming Using C Plus Plus
    testedIn:
      - PPSC
      - FPSC
  - id: 26
    question: The generic type in a template function
    options:
      - must be T
      - can be T
      - cannot be T for functions you create, but may be for C++'s built-in functions
      - cannot be T
    answer: 1
    explanation: can be T is the correct answer to “The generic type in a template function”. This question is standard in competitive examination syllabi for Object Oriented Programming Using C Plus Plus.
    keyConcept: Object Oriented Programming Using C Plus Plus
    testedIn:
      - PPSC
      - FPSC
  - id: 27
    question: When a child class function is called, the compiler looks first for a matching function name in the _____
    options:
      - class of the object using the function name
      - immediate ancestor class
      - base class
      - descendant class
    answer: 0
    explanation: class of the object using the function name is the correct answer to “When a child class function is called, the compiler looks first for a matching function name in the _____”. This question is standard in competitive examination syllabi for Object Oriented Programming Using C Plus Plus.
    keyConcept: Object Oriented Programming Using C Plus Plus
    testedIn:
      - PPSC
      - FPSC
  - id: 28
    question: A function that is called automatically each time an object is destroyed is a
    options:
      - constructor
      - destructor
      - destroyer
      - terminator
    answer: 1
    explanation: destructor is the correct answer to “A function that is called automatically each time an object is destroyed is a”. This question is standard in competitive examination syllabi for Object Oriented Programming Using C Plus Plus.
    keyConcept: Object Oriented Programming Using C Plus Plus
    testedIn:
      - PPSC
      - FPSC
  - id: 29
    question: If you create an instantiation of a class template with an int, and then create a second instantiation with a double, then
    options:
      - you must precede each function call with the word int or double
      - once a function is used as one type, it becomes unavailable for use with the other type
      - there is no difference in the procedure to call a member function
      - you cannot perform this operation in C++
    answer: 0
    explanation: you must precede each function call with the word int or double is the correct answer to “If you create an instantiation of a class template with an int, and then create a second instantiation with a double, then”. This question is standard in competitive examination syllabi for Object Oriented Programming Using C Plus Plus.
    keyConcept: Object Oriented Programming Using C Plus Plus
    testedIn:
      - PPSC
      - FPSC
  - id: 30
    question: The type to be used in an instantiation of a class template follows ________
    options:
      - the generic class name
      - the keyword template
      - the keyword class
      - the template definition
    answer: 0
    explanation: the generic class name is the correct answer to “The type to be used in an instantiation of a class template follows ________”. This question is standard in competitive examination syllabi for Object Oriented Programming Using C Plus Plus.
    keyConcept: Object Oriented Programming Using C Plus Plus
    testedIn:
      - PPSC
      - FPSC
  - id: 31
    question: Which of the following statements allows the user to enter data at the keyboard?
    options:
      - cin << currentPay
      - cin >> currentPay
      - cout << currentPay
      - cout >> currentPay
      - None of the above
    answer: 1
    explanation: cin >> currentPay is the correct answer to “Which of the following statements allows the user to enter data at the keyboard”. This question is standard in competitive examination syllabi for Object Oriented Programming Using C Plus Plus.
    keyConcept: Object Oriented Programming Using C Plus Plus
    testedIn:
      - PPSC
      - FPSC
  - id: 32
    question: When you pass a variable _____, C++ passes only the contents of the variable to the receiving function
    options:
      - by reference
      - by value
      - globally
      - locally
    answer: 1
    explanation: by value is the correct answer to “When you pass a variable _____, C++ passes only the contents of the variable to the receiving function”. This question is standard in competitive examination syllabi for Object Oriented Programming Using C Plus Plus.
    keyConcept: Object Oriented Programming Using C Plus Plus
    testedIn:
      - PPSC
      - FPSC
  - id: 33
    question: The best form of coupling is _____
    options:
      - complete
      - tight
      - loose
      - free
    answer: 2
    explanation: loose is the correct answer to “The best form of coupling is _____”. This question is standard in competitive examination syllabi for Object Oriented Programming Using C Plus Plus.
    keyConcept: Object Oriented Programming Using C Plus Plus
    testedIn:
      - PPSC
      - FPSC
  - id: 34
    question: Paying attention to the important properties while ignoring inessential details is known as________
    options:
      - selectiveness
      - polymorphism
      - abstraction
      - summarizing
    answer: 2
    explanation: abstraction is the correct answer to “Paying attention to the important properties while ignoring inessential details is known as________”. This question is standard in competitive examination syllabi for Object Oriented Programming Using C Plus Plus.
    keyConcept: Object Oriented Programming Using C Plus Plus
    testedIn:
      - PPSC
      - FPSC
  - id: 35
    question: What does C++ append to the end of a string literal constant?
    options:
      - a space
      - a number sign (#)
      - an asterisk (*)
      - a null character
    answer: 3
    explanation: a null character is the correct answer to “What does C++ append to the end of a string literal constant”. This question is standard in competitive examination syllabi for Object Oriented Programming Using C Plus Plus.
    keyConcept: Object Oriented Programming Using C Plus Plus
    testedIn:
      - PPSC
      - FPSC
  - id: 36
    question: An array name is a _____
    options:
      - subscript
      - formal parameter
      - memory address
      - prototype
    answer: 2
    explanation: memory address is the correct answer to “An array name is a _____”. This question is standard in competitive examination syllabi for Object Oriented Programming Using C Plus Plus.
    keyConcept: Object Oriented Programming Using C Plus Plus
    testedIn:
      - PPSC
      - FPSC
  - id: 37
    question: To enter a comment in a C++ program, you begin the comment with _____
    options:
      - "**"
      - "&&"
      - \\
      - "@"
      - //
    answer: 4
    explanation: // is the correct answer to “To enter a comment in a C++ program, you begin the comment with _____”. This question is standard in competitive examination syllabi for Object Oriented Programming Using C Plus Plus.
    keyConcept: Object Oriented Programming Using C Plus Plus
    testedIn:
      - PPSC
      - FPSC
  - id: 38
    question: Which of the following is(are) invalid string constant(s)?
    options:
      - "\"7.15 pm\""
      - "\"i like e\""
      - "\"7.3el2\""
      - "\"1234el2\""
      - None of the above
    answer: 0
    explanation: "\"7.15 pm\" is the correct answer to “Which of the following is(are) invalid string constant(s)”. This question is standard in competitive examination syllabi for Object Oriented Programming Using C Plus Plus."
    keyConcept: Object Oriented Programming Using C Plus Plus
    testedIn:
      - PPSC
      - FPSC
  - id: 39
    question: You define a structure type globally because _____
    options:
      - you save many lines of code by not rewriting an identical structure definition in each function that uses it
      - you will never change its definition
      - it is required in C++
      - All of the above
    answer: 0
    explanation: you save many lines of code by not rewriting an identical structure definition in each function that uses it is the correct answer to “You define a structure type globally because _____”. This question is standard in competitive examination syllabi for Object Oriented Programming Using C Plus Plus.
    keyConcept: Object Oriented Programming Using C Plus Plus
    testedIn:
      - PPSC
      - FPSC
  - id: 40
    question: Overloaded functions are required to
    options:
      - have the same return type
      - have the same number of parameters
      - perform the same basic functions
      - None of the above
    answer: 3
    explanation: None of the above is the correct answer to “Overloaded functions are required to”. This question is standard in competitive examination syllabi for Object Oriented Programming Using C Plus Plus.
    keyConcept: Object Oriented Programming Using C Plus Plus
    testedIn:
      - PPSC
      - FPSC
---


