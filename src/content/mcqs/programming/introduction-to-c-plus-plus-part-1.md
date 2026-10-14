---
title: Introduction To C Plus Plus — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Introduction To C Plus Plus — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: introduction-to-c-plus-plus-part-1
topicName: Introduction To C Plus Plus — Part 1
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
    question: "What is the output of the following code: cout << (5 > 2) ? \"True\" : \"False\";"
    options:
      - "TRUE"
      - "FALSE"
      - "5"
      - "2"
    answer: 0
    explanation: "The given code uses the ternary operator to evaluate a condition and print a result based on that evaluation. The code is: cout << (5 > 2) ? \"True\" : \"False\"; The expression (5 > 2) evaluates to true because 5 is greater than 2. When the condition is true , the ternary operator returns the first value after the question mark (?). In this case, it returns \"True\" . Therefore, the correct output of the code is True . Correct Answer: Option A: TRUE"
    keyConcept: Introduction To C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: Which of the following is not a valid C++ identifier?
    options:
      - _variableName
      - 2ndVariable
      - variable_name@
      - VariableName
      - Both (B) and (C)
    answer: 4
    explanation: "C++ Identifiers: Naming Rules In C++, identifiers are names you give to things like variables, functions, and classes. They must follow specific rules. Rules for Valid Identifiers: 1. They can contain letters (a-z, A-Z), digits (0-9), and underscores (_). 2. They must begin with a letter or an underscore. 3. They cannot contain spaces. 4. They cannot be C++ keywords (like int , float , while , etc.). Let's Check the Options: A) _variableName : This is valid. It starts with an underscore and uses letters. B) 2ndVariable : This is invalid . Identifiers cannot start with a digit. C) variable_name@ : This is invalid . It contains the \"@\" symbol, which is not allowed. D) VariableName : This is valid. It starts with a letter and uses letters. Therefore, the correct answer is E, Both (B) and (C) are not valid C++ identifiers."
    keyConcept: Introduction To C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What does the 'static' keyword mean when used with a global variable in C++?
    options:
      - Scope limited to the file
      - Can't be modified
      - Retains its value between calls
      - Global scope
    answer: 0
    explanation: "Reason: In C++, when the 'static' keyword is used with a global variable, it limits the scope of that variable to the file in which it is declared. Option A: Scope limited to the file is correct because a global variable declared as static can only be accessed within the file where it is defined, making it invisible to other files in the program. Option B: Can't be modified is incorrect because the 'static' keyword does not make the variable constant or immutable. It can still be modified. Option C: Retains its value between calls applies to local static variables, not global static variables. Global static variables are not related to function calls. Option D: Global scope is incorrect because the 'static' keyword specifically restricts the scope of the variable to the file, contrary to the global scope. Hence, the correct interpretation of 'static' for global variables is that it limits the scope to the file where the variable is declared."
    keyConcept: Introduction To C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: "What is the output of the following code: cout << (5 < 2) ? \"True\" : \"False\"; in C++?"
    options:
      - "FALSE"
      - "TRUE"
      - "5"
      - "2"
    answer: 0
    explanation: "The expression used in the code is: cout << (5 < 2) ? \"True\" : \"False\"; This line appears to use the ternary conditional operator , but due to the missing parentheses around the conditional expression, the actual precedence rules of C++ affect the output. In C++, the insertion operator << has higher precedence than the ternary operator ?: . So, the expression is interpreted as: (cout << (5 < 2)) ? \"True\" : \"False\"; Here, 5 < 2 evaluates to false (i.e., 0) So, cout << 0 is executed , which prints 0 Then the ternary operator evaluates 0 ? \"True\" : \"False\" , which returns \"False\", but the result is not used or printed Thus, the final output is: 0 Since \"0\" is not among the options but option C says 5, this indicates the question or options may be inconsistent However, assuming the intention was to demonstrate operator precedence, the correct output should be: 0, not 5. But given the provided options, none match this expected behavior correctly So, the correct answer should actually be: None of the above , but if we must choose, Option C is incorrect"
    keyConcept: Introduction To C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: "What is the output of the following code: cout << \"Hello\\nWorld\"; in C++?"
    options:
      - Hello World
      - Hello
      - World
      - Hello\nWorld
    answer: 0
    explanation: "Let's break down this C++ code snippet! The code is: cout << \"Hello\\nWorld\"; cout is used to display output on the screen. The double quotes \" \" enclose a string of characters that will be printed. Inside the string, we have \"Hello\\nWorld\" . The important part here is \\n . This is a special character called a newline character . \\n tells the program to move the cursor to the beginning of the next line. So, \"Hello\\nWorld\" means print \"Hello\", then move to the next line, and then print \"World\". Therefore, the correct output is \"Hello\" on one line and \"World\" on the next line. Option B and C are incorrect because they only output one word. Option D is incorrect because it prints the actual '\\n' character, rather than interpreting it as a newline. The correct answer is to imagine the output with Hello appearing above World . So, the best way to visualize this output is : Hello World"
    keyConcept: Introduction To C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: "What will be the output of the following C++ code? #include <iostream> int main(int argc, char const *argv[]) { cout<<\"Hello World\"; return 0; }"
    options:
      - Hello World
      - Compile-time error
      - Run-time error
      - Segmentation fault
    answer: 0
    explanation: "The given code is a basic C++ program that prints a message to the console. It includes the <iostream> header , which allows the use of input and output streams like cout . The main function is defined correctly with appropriate parameters ( int argc, char const *argv[] ), though these parameters are not used. cout<<\"Hello World\"; correctly outputs the text \"Hello World\" to the standard output. There are no syntax or runtime errors in the code , and it will compile and run successfully. Therefore, the output will be: Hello World"
    keyConcept: Introduction To C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: Which of the following operator(s) can be used with pointers? i. – only ii. +, * iii. +, – iv. +, -, * v. / vi. + only
    options:
      - i only
      - vi only
      - ii and v
      - iv
    answer: 0
    explanation: "Explanation: Pointers in C++ are variables that hold memory addresses . They're like street addresses that tell you where a house (data) is located. We use special operators to work with these memory addresses. + (Addition): We can add a number to a pointer to move it to a different memory location. Imagine walking a few houses down the street. - (Subtraction): Similarly, we can subtract to move backward in memory (go back a few houses). * (Dereference): This is the most important pointer operator. It lets us access the data stored at the memory address held by the pointer. Think of it like going inside the house to see what's there. The division operator (/) is not directly used with pointers in the same way as addition, subtraction, or dereference. Therefore, the correct options are addition (+), subtraction (-), and dereference (*). So the answer is (D) iv"
    keyConcept: Introduction To C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What is the extension of a C++ source file?
    options:
      - .cpp
      - .cc
      - .cxx
      - .c
    answer: 0
    explanation: .cpp is the correct answer to “What is the extension of a C++ source file”. This question is standard in competitive examination syllabi for Introduction To C Plus Plus.
    keyConcept: Introduction To C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: Which of the following is not a fundamental data type in C++?
    options:
      - char
      - float
      - boolean
      - double
    answer: 2
    explanation: boolean is the correct answer to “Which of the following is not a fundamental data type in C++”. This question is standard in competitive examination syllabi for Introduction To C Plus Plus.
    keyConcept: Introduction To C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What does the 'cin' object in C++ represent?
    options:
      - File output stream
      - File input stream
      - Standard output stream
      - Standard input stream
    answer: 3
    explanation: Standard input stream is the correct answer to “What does the 'cin' object in C++ represent”. This question is standard in competitive examination syllabi for Introduction To C Plus Plus.
    keyConcept: Introduction To C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What keyword is used to define a class in C++?
    options:
      - struct
      - interface
      - class
      - object
    answer: 2
    explanation: class is the correct answer to “What keyword is used to define a class in C++”. This question is standard in competitive examination syllabi for Introduction To C Plus Plus.
    keyConcept: Introduction To C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: In C++, what operator is used to allocate dynamic memory?
    options:
      - alloc
      - new
      - allocate
      - None of the above
    answer: 1
    explanation: new is the correct answer to “In C++, what operator is used to allocate dynamic memory”. This question is standard in competitive examination syllabi for Introduction To C Plus Plus.
    keyConcept: Introduction To C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What is the syntax for a single-line comment in C++?
    options:
      - "--"
      - "#"
      - //
      - /* */
    answer: 2
    explanation: // is the correct answer to “What is the syntax for a single-line comment in C++”. This question is standard in competitive examination syllabi for Introduction To C Plus Plus.
    keyConcept: Introduction To C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What function is used to output data to the console in C++?
    options:
      - print
      - display
      - write
      - cout
    answer: 3
    explanation: cout is the correct answer to “What function is used to output data to the console in C++”. This question is standard in competitive examination syllabi for Introduction To C Plus Plus.
    keyConcept: Introduction To C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: Which header file is needed to use the 'cin' and 'cout' objects in C++?
    options:
      - <iostream>
      - <stdio.h>
      - <conio.h>
      - <fstream>
    answer: 0
    explanation: <iostream> is the correct answer to “Which header file is needed to use the 'cin' and 'cout' objects in C++”. This question is standard in competitive examination syllabi for Introduction To C Plus Plus.
    keyConcept: Introduction To C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What does the 'endl' manipulator do in C++?
    options:
      - Ends the program
      - Moves the cursor to the start
      - Clears the screen
      - Inserts a new line
    answer: 3
    explanation: Inserts a new line is the correct answer to “What does the 'endl' manipulator do in C++”. This question is standard in competitive examination syllabi for Introduction To C Plus Plus.
    keyConcept: Introduction To C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: Which keyword is used to define a constant in C++?
    options:
      - static
      - final
      - const
      - constant
    answer: 2
    explanation: const is the correct answer to “Which keyword is used to define a constant in C++”. This question is standard in competitive examination syllabi for Introduction To C Plus Plus.
    keyConcept: Introduction To C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: "What is the output of the following code: int x = 5, y = 2; cout << x / y;"
    options:
      - "2.5"
      - "2"
      - Compilation error
      - "2.2"
    answer: 1
    explanation: "2 is the correct answer to “What is the output of the following code: int x = 5, y = 2; cout << x / y;”. This question is standard in competitive examination syllabi for Introduction To C Plus Plus."
    keyConcept: Introduction To C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: What is the correct way to declare a pointer in C++?
    options:
      - int ptr
      - pointer int
      - int* ptr
      - ptr int
    answer: 2
    explanation: int* ptr is the correct answer to “What is the correct way to declare a pointer in C++”. This question is standard in competitive examination syllabi for Introduction To C Plus Plus.
    keyConcept: Introduction To C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What is the keyword used for inheritance in C++?
    options:
      - extends
      - inherits
      - derive
      - ":"
    answer: 3
    explanation: ": is the correct answer to “What is the keyword used for inheritance in C++”. This question is standard in competitive examination syllabi for Introduction To C Plus Plus."
    keyConcept: Introduction To C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: What function is used to return the length of a string in C++?
    options:
      - length()
      - size()
      - strlen()
      - length
    answer: 1
    explanation: size() is the correct answer to “What function is used to return the length of a string in C++”. This question is standard in competitive examination syllabi for Introduction To C Plus Plus.
    keyConcept: Introduction To C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: "What is the output of the following code: int x = 10; cout << \"Value of x is: \" << x++ << endl;?"
    options:
      - "Value of x is: 11"
      - "Value of x is: 9"
      - Compilation error
      - "Value of x is: 10"
    answer: 3
    explanation: "Value of x is: 10 is the correct answer to “What is the output of the following code: int x = 10; cout << \"Value of x is: \" << x++ << endl;”. This question is standard in competitive examination syllabi for Introduction To C Plus Plus."
    keyConcept: Introduction To C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: "What is the result of the expression: sizeof(int) in C++?"
    options:
      - Size of int in bytes
      - Size of int in bits
      - "Error: sizeof cannot be applied"
      - Implementation-defined
    answer: 0
    explanation: "Size of int in bytes is the correct answer to “What is the result of the expression: sizeof(int) in C++”. This question is standard in competitive examination syllabi for Introduction To C Plus Plus."
    keyConcept: Introduction To C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: Which C++ feature allows a function to call itself?
    options:
      - Polymorphism
      - Inheritance
      - Iteration
      - Recursion
    answer: 3
    explanation: Recursion is the correct answer to “Which C++ feature allows a function to call itself”. This question is standard in competitive examination syllabi for Introduction To C Plus Plus.
    keyConcept: Introduction To C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: What is the correct syntax to dynamically allocate memory for an array of integers in C++?
    options:
      - int arr[size]
      - int arr[] = new int[size]
      - int *arr = new int[size]
      - int arr = new int[size]
    answer: 2
    explanation: int *arr = new int[size] is the correct answer to “What is the correct syntax to dynamically allocate memory for an array of integers in C++”. This question is standard in competitive examination syllabi for Introduction To C Plus Plus.
    keyConcept: Introduction To C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Which of the following is used to access the first element of an array in C++?
    options:
      - arr.front()
      - arr[0]
      - arr.begin()
      - None of the above
    answer: 1
    explanation: arr[0] is the correct answer to “Which of the following is used to access the first element of an array in C++”. This question is standard in competitive examination syllabi for Introduction To C Plus Plus.
    keyConcept: Introduction To C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: "What is the output of the following code: cout << (5 == 5.0); in C++?"
    options:
      - "FALSE"
      - "TRUE"
      - "1"
      - "0"
    answer: 2
    explanation: "1 is the correct answer to “What is the output of the following code: cout << (5 == 5.0); in C++”. This question is standard in competitive examination syllabi for Introduction To C Plus Plus."
    keyConcept: Introduction To C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: What is the purpose of the 'break' statement in a switch-case construct in C++?
    options:
      - Skip the next case
      - Start the next iteration
      - Terminate the program
      - Exit the switch block
    answer: 3
    explanation: Exit the switch block is the correct answer to “What is the purpose of the 'break' statement in a switch-case construct in C++”. This question is standard in competitive examination syllabi for Introduction To C Plus Plus.
    keyConcept: Introduction To C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: What is the correct way to include a C++ standard library header file named 'vector' in a C++ program?
    options:
      - "#include <vector>"
      - "#include \"vector.h\""
      - "#include <vector.h>"
      - "#include \"vector\""
    answer: 0
    explanation: "#include <vector> is the correct answer to “What is the correct way to include a C++ standard library header file named 'vector' in a C++ program”. This question is standard in competitive examination syllabi for Introduction To C Plus Plus."
    keyConcept: Introduction To C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: Which operator is used to access the member functions and variables of an object in C++?
    options:
      - ":"
      - "::"
      - "->"
      - .
    answer: 3
    explanation: . is the correct answer to “Which operator is used to access the member functions and variables of an object in C++”. This question is standard in competitive examination syllabi for Introduction To C Plus Plus.
    keyConcept: Introduction To C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: "What is the output of the following code: cout << (10 / 4); in C++?"
    options:
      - "2.5"
      - "3"
      - "2"
      - Compiler error
    answer: 2
    explanation: "2 is the correct answer to “What is the output of the following code: cout << (10 / 4); in C++”. This question is standard in competitive examination syllabi for Introduction To C Plus Plus."
    keyConcept: Introduction To C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: What is the correct syntax to define a function named 'add' that takes two integers as parameters and returns their sum in C++?
    options:
      - int add(int a, b) { }
      - int add(int a, int b) { }
      - int add(a, b) { }
      - None of the above
    answer: 1
    explanation: int add(int a, int b) { } is the correct answer to “What is the correct syntax to define a function named 'add' that takes two integers as parameters and returns their sum in C++”. This question is standard in competitive examination syllabi for Introduction To C Plus Plus.
    keyConcept: Introduction To C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: What does the 'new' operator return when memory allocation fails in C++?
    options:
      - Garbage value
      - Exception
      - nullptr
      - "0"
    answer: 2
    explanation: nullptr is the correct answer to “What does the 'new' operator return when memory allocation fails in C++”. This question is standard in competitive examination syllabi for Introduction To C Plus Plus.
    keyConcept: Introduction To C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: Which of the following is the correct syntax for declaring a pointer to an integer in C++?
    options:
      - ptr int
      - int ptr
      - pointer int
      - int* ptr
    answer: 3
    explanation: int* ptr is the correct answer to “Which of the following is the correct syntax for declaring a pointer to an integer in C++”. This question is standard in competitive examination syllabi for Introduction To C Plus Plus.
    keyConcept: Introduction To C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: In C++, what is the purpose of the 'endl' manipulator?
    options:
      - Inserts a new line
      - Clears the screen
      - Moves the cursor to the start
      - Ends the program
    answer: 0
    explanation: Inserts a new line is the correct answer to “In C++, what is the purpose of the 'endl' manipulator”. This question is standard in competitive examination syllabi for Introduction To C Plus Plus.
    keyConcept: Introduction To C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: "What is the result of the expression: sizeof(char) in C++?"
    options:
      - Implementation-defined
      - "Error: sizeof cannot be applied"
      - Size of char in bits
      - Size of char in bytes
    answer: 3
    explanation: "Size of char in bytes is the correct answer to “What is the result of the expression: sizeof(char) in C++”. This question is standard in competitive examination syllabi for Introduction To C Plus Plus."
    keyConcept: Introduction To C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: What does the 'const' keyword signify when used with a member function in a C++ class declaration?
    options:
      - This function is static
      - This function can't be called
      - This function doesn't modify the object it's called on
      - This function is pure virtual
    answer: 2
    explanation: This function doesn't modify the object it's called on is the correct answer to “What does the 'const' keyword signify when used with a member function in a C++ class declaration”. This question is standard in competitive examination syllabi for Introduction To C Plus Plus.
    keyConcept: Introduction To C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: Which operator is used to dereference a pointer in C++?
    options:
      - "::"
      - "*"
      - .
      - ":"
    answer: 1
    explanation: "* is the correct answer to “Which operator is used to dereference a pointer in C++”. This question is standard in competitive examination syllabi for Introduction To C Plus Plus."
    keyConcept: Introduction To C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: What is the correct way to include the C++ standard input/output library header file in a C++ program?
    options:
      - "#include \"stdio\""
      - "#include <stdio.h>"
      - "#include <iostream>"
      - "#include \"iostream.h\""
    answer: 2
    explanation: "#include <iostream> is the correct answer to “What is the correct way to include the C++ standard input/output library header file in a C++ program”. This question is standard in competitive examination syllabi for Introduction To C Plus Plus."
    keyConcept: Introduction To C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: "What is the output of the following code: int x = 5, y = 2; cout << x / y; in C++?"
    options:
      - "2.5"
      - "2.6"
      - Compilation error
      - "2"
    answer: 3
    explanation: "2 is the correct answer to “What is the output of the following code: int x = 5, y = 2; cout << x / y; in C++”. This question is standard in competitive examination syllabi for Introduction To C Plus Plus."
    keyConcept: Introduction To C Plus Plus
    testedIn:
      - FPSC
      - PPSC
---


