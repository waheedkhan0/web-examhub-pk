---
title: Functions And Procedures In C Plus Plus — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Functions And Procedures In C Plus Plus — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: functions-and-procedures-in-c-plus-plus-part-1
topicName: Functions And Procedures In C Plus Plus — Part 1
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
    question: "What is the output of the following code: int square(int x) { return x * x; } int main() { cout << square(3) + square(2); } in C++?"
    options:
      - "13"
      - "25"
      - "12"
      - Compilation error due to mismatched return types
    answer: 0
    explanation: The given code defines a function named square which takes an integer x as input and returns the square of x . In the main function, square(3) returns 9 and square(2) returns 4 . When these values are added together and printed, the output will be 9 + 4 = 13 .
    keyConcept: Functions And Procedures In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: "What will be the output of the following code: int max(int a, int b) { return (a > b) ? a : b; } cout << max(5, 3); in C++?"
    options:
      - max(5, 3)
      - "3"
      - Compilation error due to missing function definition
      - max(3, 5)
    answer: 0
    explanation: The given code defines a function named max which takes two integers a and b as input and returns the maximum of the two. In the main function, max(5, 3) is called, but it is directly printed to the output without any calculation. Therefore, the output will be max(5, 3) , representing the function call.
    keyConcept: Functions And Procedures In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What is the correct syntax for defining a function in C++?
    options:
      - returnType functionName(parameters) { body; }
      - functionName(parameters) { returnType body; }
      - functionName(returnType, parameters) { body; }
      - returnType functionName(parameters, body) { }
    answer: 0
    explanation: returnType functionName(parameters) { body; } is the correct answer to “What is the correct syntax for defining a function in C++”. This question is standard in competitive examination syllabi for Functions And Procedures In C Plus Plus.
    keyConcept: Functions And Procedures In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What is the purpose of a function prototype in C++?
    options:
      - Determines the parameters of the function
      - Specifies the return type of the function
      - Provides the implementation of the function
      - Declares the function before it is defined
    answer: 3
    explanation: Declares the function before it is defined is the correct answer to “What is the purpose of a function prototype in C++”. This question is standard in competitive examination syllabi for Functions And Procedures In C Plus Plus.
    keyConcept: Functions And Procedures In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: Which keyword is used to define a function in C++ that does not return any value?
    options:
      - return
      - "null"
      - void
      - None of the above
    answer: 2
    explanation: void is the correct answer to “Which keyword is used to define a function in C++ that does not return any value”. This question is standard in competitive examination syllabi for Functions And Procedures In C Plus Plus.
    keyConcept: Functions And Procedures In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What is the correct way to call a function named "add" that takes two parameters in C++?
    options:
      - add(a, b)
      - add(int a, int b)
      - functionName = add(a, b)
      - add.functionName(a, b)
    answer: 1
    explanation: add(int a, int b) is the correct answer to “What is the correct way to call a function named "add" that takes two parameters in C++”. This question is standard in competitive examination syllabi for Functions And Procedures In C Plus Plus.
    keyConcept: Functions And Procedures In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What does the 'return' statement do in a function in C++?
    options:
      - Skips the remaining code in the function
      - Returns a value from the function
      - Restarts the function execution
      - None of the above
    answer: 1
    explanation: Returns a value from the function is the correct answer to “What does the 'return' statement do in a function in C++”. This question is standard in competitive examination syllabi for Functions And Procedures In C Plus Plus.
    keyConcept: Functions And Procedures In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: "What is the output of the following code: int sum(int a, int b) { return a + b; } cout << sum(3, 5); in C++?"
    options:
      - "35"
      - Compilation error
      - "8"
      - sum(3, 5)
    answer: 2
    explanation: "8 is the correct answer to “What is the output of the following code: int sum(int a, int b) { return a + b; } cout << sum(3, 5); in C++”. This question is standard in competitive examination syllabi for Functions And Procedures In C Plus Plus."
    keyConcept: Functions And Procedures In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: Which of the following is true about function overloading in C++?
    options:
      - Only one function can have a specific name
      - A function cannot be defined with the same name twice
      - Function overloading is not supported in C++
      - Multiple functions can have the same name with different parameters
    answer: 3
    explanation: Multiple functions can have the same name with different parameters is the correct answer to “Which of the following is true about function overloading in C++”. This question is standard in competitive examination syllabi for Functions And Procedures In C Plus Plus.
    keyConcept: Functions And Procedures In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What is the purpose of default arguments in C++ functions?
    options:
      - Allows a function to be called without providing all arguments
      - Sets a default return value for the function
      - Defines default behavior for the function
      - Specifies the default data type for parameters
    answer: 0
    explanation: Allows a function to be called without providing all arguments is the correct answer to “What is the purpose of default arguments in C++ functions”. This question is standard in competitive examination syllabi for Functions And Procedures In C Plus Plus.
    keyConcept: Functions And Procedures In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What is the correct syntax for declaring a function prototype in C++?
    options:
      - returnType functionName(parameters)
      - functionName(parameters) returnType
      - functionName returnType(parameters)
      - None of the above
    answer: 0
    explanation: returnType functionName(parameters) is the correct answer to “What is the correct syntax for declaring a function prototype in C++”. This question is standard in competitive examination syllabi for Functions And Procedures In C Plus Plus.
    keyConcept: Functions And Procedures In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: What is the purpose of passing arguments by reference in C++ functions?
    options:
      - Ensures the function receives correct arguments
      - Reduces the memory consumption of the function
      - Improves performance of the function
      - Allows changes made to the arguments to reflect outside the function
    answer: 3
    explanation: Allows changes made to the arguments to reflect outside the function is the correct answer to “What is the purpose of passing arguments by reference in C++ functions”. This question is standard in competitive examination syllabi for Functions And Procedures In C Plus Plus.
    keyConcept: Functions And Procedures In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What is the correct syntax for defining a recursive function in C++?
    options:
      - returnType functionName(parameters) { functionName(parameters); }
      - returnType functionName(parameters) { functionName(); }
      - functionName(parameters) { return functionName(parameters); }
      - None of the above
    answer: 0
    explanation: returnType functionName(parameters) { functionName(parameters); } is the correct answer to “What is the correct syntax for defining a recursive function in C++”. This question is standard in competitive examination syllabi for Functions And Procedures In C Plus Plus.
    keyConcept: Functions And Procedures In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What is the purpose of a function header in C++?
    options:
      - Contains the actual code of the function
      - Specifies the function's location in memory
      - Declares the name, return type, and parameters of the function
      - Provides default arguments for the function
    answer: 2
    explanation: Declares the name, return type, and parameters of the function is the correct answer to “What is the purpose of a function header in C++”. This question is standard in competitive examination syllabi for Functions And Procedures In C Plus Plus.
    keyConcept: Functions And Procedures In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: Which of the following is true about function recursion in C++?
    options:
      - Recursion can only be achieved through function pointers
      - Recursion is limited to predefined standard functions
      - A function calling itself directly or indirectly
      - Recursion is not allowed in C++
    answer: 2
    explanation: A function calling itself directly or indirectly is the correct answer to “Which of the following is true about function recursion in C++”. This question is standard in competitive examination syllabi for Functions And Procedures In C Plus Plus.
    keyConcept: Functions And Procedures In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What is the purpose of a function in C++?
    options:
      - To declare variables
      - To print output
      - To initialize memory
      - To perform a specific task
    answer: 3
    explanation: To perform a specific task is the correct answer to “What is the purpose of a function in C++”. This question is standard in competitive examination syllabi for Functions And Procedures In C Plus Plus.
    keyConcept: Functions And Procedures In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: Which of the following is true about function parameters in C++?
    options:
      - They are variables used to pass data into functions
      - They are placeholders for function names
      - They are used to return values from functions
      - They are only used in main functions
    answer: 0
    explanation: They are variables used to pass data into functions is the correct answer to “Which of the following is true about function parameters in C++”. This question is standard in competitive examination syllabi for Functions And Procedures In C Plus Plus.
    keyConcept: Functions And Procedures In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: What is the correct way to declare a function in C++ that takes no parameters and returns an integer?
    options:
      - void functionName()
      - functionName(int)
      - functionName() int
      - int functionName()
    answer: 3
    explanation: int functionName() is the correct answer to “What is the correct way to declare a function in C++ that takes no parameters and returns an integer”. This question is standard in competitive examination syllabi for Functions And Procedures In C Plus Plus.
    keyConcept: Functions And Procedures In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: What is the purpose of the 'void' keyword in a function declaration in C++?
    options:
      - Indicates that the function accepts no parameters
      - Indicates that the function returns a void pointer
      - Indicates that the function does not return a value
      - Indicates that the function is a member function
    answer: 2
    explanation: Indicates that the function does not return a value is the correct answer to “What is the purpose of the 'void' keyword in a function declaration in C++”. This question is standard in competitive examination syllabi for Functions And Procedures In C Plus Plus.
    keyConcept: Functions And Procedures In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: "What is the output of the following code: int multiply(int x, int y) { return x * y; } int main() { cout << multiply(3, 4); } in C++?"
    options:
      - multiply(3, 4)
      - "12"
      - Compilation error due to missing return statement
      - multiply(4, 3)
    answer: 1
    explanation: "12 is the correct answer to “What is the output of the following code: int multiply(int x, int y) { return x * y; } int main() { cout << multiply(3, 4); } in C++”. This question is standard in competitive examination syllabi for Functions And Procedures In C Plus Plus."
    keyConcept: Functions And Procedures In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: Which of the following is a valid function declaration in C++?
    options:
      - sum(int a, int b) { return a + b; }
      - sum(int, int) { return a + b; }
      - sum(a, b) { return a + b; }
      - int sum(int a, int b)
    answer: 3
    explanation: int sum(int a, int b) is the correct answer to “Which of the following is a valid function declaration in C++”. This question is standard in competitive examination syllabi for Functions And Procedures In C Plus Plus.
    keyConcept: Functions And Procedures In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What is the purpose of function overloading in C++?
    options:
      - Allows multiple functions with the same name but different parameters
      - Improves the efficiency of the functions
      - Ensures that functions can be called from anywhere
      - Facilitates the declaration of global variables
    answer: 0
    explanation: Allows multiple functions with the same name but different parameters is the correct answer to “What is the purpose of function overloading in C++”. This question is standard in competitive examination syllabi for Functions And Procedures In C Plus Plus.
    keyConcept: Functions And Procedures In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: What does the 'inline' keyword do in C++ function declaration?
    options:
      - Indicates that the function should be ignored
      - Declares that the function should be inlined
      - Specifies that the function should be called inline
      - Suggests the compiler to replace the function call with its definition
    answer: 3
    explanation: Suggests the compiler to replace the function call with its definition is the correct answer to “What does the 'inline' keyword do in C++ function declaration”. This question is standard in competitive examination syllabi for Functions And Procedures In C Plus Plus.
    keyConcept: Functions And Procedures In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: "What is the output of the following code: int max(int a, int b) { return (a > b) ? a : b; } int main() { cout << max(5, 5); } in C++?"
    options:
      - "10"
      - "0"
      - "5"
      - Compilation error due to ambiguous function call
    answer: 2
    explanation: "5 is the correct answer to “What is the output of the following code: int max(int a, int b) { return (a > b) ? a : b; } int main() { cout << max(5, 5); } in C++”. This question is standard in competitive examination syllabi for Functions And Procedures In C Plus Plus."
    keyConcept: Functions And Procedures In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: In C++, how are function arguments passed by default?
    options:
      - By pointer
      - By value
      - By address
      - None of the above
    answer: 1
    explanation: By value is the correct answer to “In C++, how are function arguments passed by default”. This question is standard in competitive examination syllabi for Functions And Procedures In C Plus Plus.
    keyConcept: Functions And Procedures In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: What is the purpose of the 'static' keyword in a function declaration in C++?
    options:
      - It allows a function to be accessed from other files
      - It restricts the scope of the function
      - It indicates that the function is a member function
      - It allocates memory for the function
    answer: 1
    explanation: It restricts the scope of the function is the correct answer to “What is the purpose of the 'static' keyword in a function declaration in C++”. This question is standard in competitive examination syllabi for Functions And Procedures In C Plus Plus.
    keyConcept: Functions And Procedures In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: What is the syntax for defining a recursive function in C++?
    options:
      - returnType functionName(parameters) { if (condition) functionName(parameters); }
      - functionName(parameters) { returnType if (condition) functionName(parameters); }
      - functionName(parameters) { functionName(parameters); }
      - returnType functionName(parameters) { functionName(parameters); }
    answer: 3
    explanation: returnType functionName(parameters) { functionName(parameters); } is the correct answer to “What is the syntax for defining a recursive function in C++”. This question is standard in competitive examination syllabi for Functions And Procedures In C Plus Plus.
    keyConcept: Functions And Procedures In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: "What will be the output of the following code: int add(int x, int y) { return x + y; } int main() { cout << add(2); } in C++?"
    options:
      - Compilation error due to missing return statement
      - "0"
      - Compilation error due to missing argument
      - "2"
    answer: 2
    explanation: "Compilation error due to missing argument is the correct answer to “What will be the output of the following code: int add(int x, int y) { return x + y; } int main() { cout << add(2); } in C++”. This question is standard in competitive examination syllabi for Functions And Procedures In C Plus Plus."
    keyConcept: Functions And Procedures In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: What is the purpose of the 'extern' keyword in a function declaration in C++?
    options:
      - It declares the function as an external function
      - It ensures that the function is not inlined
      - It makes the function visible only within the file
      - It specifies that the function is defined elsewhere
    answer: 3
    explanation: It specifies that the function is defined elsewhere is the correct answer to “What is the purpose of the 'extern' keyword in a function declaration in C++”. This question is standard in competitive examination syllabi for Functions And Procedures In C Plus Plus.
    keyConcept: Functions And Procedures In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: What is the correct way to pass an array to a function in C++?
    options:
      - By declaring the array globally and accessing it directly
      - By passing the array index as a parameter
      - By passing the array name and size as parameters
      - By passing each array element as a parameter
    answer: 2
    explanation: By passing the array name and size as parameters is the correct answer to “What is the correct way to pass an array to a function in C++”. This question is standard in competitive examination syllabi for Functions And Procedures In C Plus Plus.
    keyConcept: Functions And Procedures In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: What is the purpose of the 'static' keyword in a C++ function?
    options:
      - Declares the function as a member of a class
      - Prevents the function from being called recursively
      - Defines the function to be inline
      - Retains the variable's value between function calls
    answer: 3
    explanation: Retains the variable's value between function calls is the correct answer to “What is the purpose of the 'static' keyword in a C++ function”. This question is standard in competitive examination syllabi for Functions And Procedures In C Plus Plus.
    keyConcept: Functions And Procedures In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: What does the 'void' keyword represent in the function declaration in C++?
    options:
      - Indicates that the function does not return any value
      - Indicates that the function returns a pointer
      - Indicates that the function accepts no arguments
      - Indicates that the function can be called from anywhere
    answer: 0
    explanation: Indicates that the function does not return any value is the correct answer to “What does the 'void' keyword represent in the function declaration in C++”. This question is standard in competitive examination syllabi for Functions And Procedures In C Plus Plus.
    keyConcept: Functions And Procedures In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: Which of the following is true about inline functions in C++?
    options:
      - Inline functions must have a return type declared
      - Inline functions cannot have return statements
      - Inline functions cannot be recursive
      - The compiler replaces the function call with the function code wherever it is called
    answer: 3
    explanation: The compiler replaces the function call with the function code wherever it is called is the correct answer to “Which of the following is true about inline functions in C++”. This question is standard in competitive examination syllabi for Functions And Procedures In C Plus Plus.
    keyConcept: Functions And Procedures In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: "What is the output of the following code: int add(int a, int b) { return a + b; } int sum = add(3, 5); cout << sum; in C++?"
    options:
      - "3"
      - "5"
      - "8"
      - Compilation error
    answer: 2
    explanation: "8 is the correct answer to “What is the output of the following code: int add(int a, int b) { return a + b; } int sum = add(3, 5); cout << sum; in C++”. This question is standard in competitive examination syllabi for Functions And Procedures In C Plus Plus."
    keyConcept: Functions And Procedures In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: In C++, what is the significance of the function return type 'auto'?
    options:
      - It allows the function to return any data type
      - The compiler automatically deduces the return type based on the return statement
      - It specifies the function to be executed automatically
      - None of the above
    answer: 1
    explanation: The compiler automatically deduces the return type based on the return statement is the correct answer to “In C++, what is the significance of the function return type 'auto'”. This question is standard in competitive examination syllabi for Functions And Procedures In C Plus Plus.
    keyConcept: Functions And Procedures In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: What is the purpose of the 'friend' keyword in a C++ function declaration?
    options:
      - It specifies that the function should be inlined
      - It allows the function to call itself recursively
      - It grants access to private and protected members of a class to the function
      - It declares the function as a friend function
    answer: 2
    explanation: It grants access to private and protected members of a class to the function is the correct answer to “What is the purpose of the 'friend' keyword in a C++ function declaration”. This question is standard in competitive examination syllabi for Functions And Procedures In C Plus Plus.
    keyConcept: Functions And Procedures In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: What is the syntax for declaring a function that takes a variable number of arguments in C++?
    options:
      - returnType functionName(var_args...)
      - returnType functionName(var_args...); { body; }
      - returnType functionName(..., var_args)
      - returnType functionName(...)
    answer: 3
    explanation: returnType functionName(...) is the correct answer to “What is the syntax for declaring a function that takes a variable number of arguments in C++”. This question is standard in competitive examination syllabi for Functions And Procedures In C Plus Plus.
    keyConcept: Functions And Procedures In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: "What is the output of the following code: int x = 5; cout << \"Before: \" << x; changeValue(x); cout << \"After: \" << x; in C++?"
    options:
      - "Before: 5 After: 5"
      - "Before: 5 After: 10"
      - "Before: 5 After: 6"
      - Compilation error
    answer: 0
    explanation: "Before: 5 After: 5 is the correct answer to “What is the output of the following code: int x = 5; cout << \"Before: \" << x; changeValue(x); cout << \"After: \" << x; in C++”. This question is standard in competitive examination syllabi for Functions And Procedures In C Plus Plus."
    keyConcept: Functions And Procedures In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: What is the correct syntax for defining a function template in C++?
    options:
      - returnType functionName(T parameter) { template body; }
      - template returnType functionName(T parameter) { body; }
      - returnType functionName(template T parameter) { body; }
      - None of the above
    answer: 1
    explanation: template returnType functionName(T parameter) { body; } is the correct answer to “What is the correct syntax for defining a function template in C++”. This question is standard in competitive examination syllabi for Functions And Procedures In C Plus Plus.
    keyConcept: Functions And Procedures In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: What is the purpose of the 'const' keyword in a function parameter list in C++?
    options:
      - Declares the parameter as constant within the function
      - Prevents the parameter from being passed by reference
      - Indicates that the parameter value cannot be changed within the function
      - Specifies that the parameter should be initialized
    answer: 2
    explanation: Indicates that the parameter value cannot be changed within the function is the correct answer to “What is the purpose of the 'const' keyword in a function parameter list in C++”. This question is standard in competitive examination syllabi for Functions And Procedures In C Plus Plus.
    keyConcept: Functions And Procedures In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
---


