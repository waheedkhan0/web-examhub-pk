---
title: Function — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Function — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: function-part-1
topicName: Function — Part 1
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
    question: What is the result of the expression abs(-7.5) in C?
    options:
      - "-7.5"
      - "7.5"
      - "7"
      - Error
    answer: 3
    explanation: "In C, the function abs() is defined in stdlib.h and is used to compute the absolute value of an integer . Passing a floating-point number like -7.5 to abs() is incorrect because abs() expects an int argument. To handle floating-point numbers , C provides a different function called fabs() , which is defined in math.h . Therefore, using abs(-7.5) results in a compile-time error or unexpected behavior because the argument type does not match the function's expected parameter. Option A and B are incorrect because abs() cannot legally process a float. Option C is incorrect because while 7 is the integer part, the input is still a float and would not be accepted by abs() . Hence, the correct answer is Option D: Error ."
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: What will happen after compiling and running following code? main() { printf("%p", main); }
    options:
      - Error
      - Will make an infinite loop.
      - Some address will be printed.
      - None of these.
    answer: 2
    explanation: Function names are just addresses (just like array names are addresses). main () is also a function. So the address of function main will be printed. %p in printf specifies that the argument is an address. They will be printed as hexadecimal numbers.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Any C program
    options:
      - Must contain at least one function.
      - Need not contain any function.
      - Needs input data.
      - None of the above
    answer: 0
    explanation: "Option A: Must contain at least one function. Explanation: In C programming, every valid program must contain at least one function, which is typically the main() function. This function serves as the starting point of execution for the program. Option B: Need not contain any function. Explanation: This option is incorrect because every C program requires at least one function, typically the main() function, to execute. Option C: Needs input data. Explanation: While many programs do require input data, this is not a requirement for the structure of a C program itself. Input data is dependent on the specific requirements of the program being developed. Option D: None of the above. Explanation: This option is incorrect because Option A is correct—every C program must contain at least one function. Conclusion: Option A: Must contain at least one function."
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: "Determine output: main() { int i = abc(10); printf(\"%d\", --i); } int abc(int i) { return(i++); }"
    options:
      - "10"
      - "9"
      - "11"
      - None of these.
    answer: 1
    explanation: return ( i++ ) it will first return i and then increment. i.e. 10 will be returned.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: The default parameter passing mechanism is
    options:
      - call by value
      - call by reference
      - call by value result
      - None of these.
    answer: 0
    explanation: "In C programming, the default parameter passing mechanism is call by value . Call by value : In this mechanism, a copy of the actual parameter's value is passed to the function. The function operates on this copy, and changes made to the parameter within the function do not affect the original argument. Call by reference : This is not the default mechanism in C. It involves passing the address of the actual parameter, allowing the function to modify the original value. Call by value result : This mechanism is not used by default in C. It involves passing a copy of the actual parameter and then updating the original variable with the result after the function execution. None of these : This option is incorrect because call by value is indeed the default parameter passing mechanism in C. Thus, Option A: call by value is the correct answer."
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What is the result of compiling and running this code? main() { char string[] = "Hello World"; display(string); } void display(char *string) { printf("%s", string); }
    options:
      - will print Hello World
      - Compilation Error
      - will print garbage value
      - None of these.
    answer: 1
    explanation: "Compiler Error : Type mismatch in redeclaration of function display As the function display() is not defined before use, compiler will assume the return type of the function which is int (default return type). But when compiler will see the actual definition of display() , mismatch occurs since the function display() is declared as void . Hence the error."
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: "Determine output: main() { int i = 5; printf(\"%d%d%d%d%d\", i++, i--, ++i, --i, i); }"
    options:
      - "54544"
      - "45445"
      - "54554"
      - "45545"
    answer: 3
    explanation: The arguments in a function call are pushed into the stack from left to right. The evaluation is by popping out from the stack. and the evaluation is from right to left, hence the result. See the picture below
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What will be the output of the following program code? main() { static int var = 5; printf("%d ", var--); if(var) main(); }
    options:
      - 5 5 5 5 5
      - 5 4 3 2 1
      - Infinite Loop
      - Compilation Error
      - None of these
    answer: 1
    explanation: When static storage class is given, it is initialized once. The change in the value of a static variable is retained even between the function calls. Main is also treated like any other ordinary function, which can be called recursively.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What will be printed when this program is executed? int f(int x) { if(x <= 4) return x; return f(--x); } void main() { printf("%d ", f(7)); }
    options:
      - 4 5 6 7
      - 1 2 3 4
      - "4"
      - Syntax error
      - Runtime error
    answer: 2
    explanation: In this recursive function call the function will return to main caller when the value of x is 4. Hence the output.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: The recursive functions are executed in a ...........
    options:
      - Parallel order
      - First In First Out order
      - Last In First Out order
      - Iterative order
      - Random order
    answer: 2
    explanation: Because for each function call an entry is created in stack frame( known as Active Record Instance), and are executed in LIFO manner.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: The function scanf() returns .........
    options:
      - The actual values read for each argument.
      - "1"
      - "0"
      - The number of successful read input values.
      - ASCII value of the input read.
    answer: 3
    explanation: According to the prototype, the return type of scanf( ) function is int, that is the number of successful read input values.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: In C, what is a function primarily used for?
    options:
      - Decision making
      - Variable declaration
      - Code organization and reusability
      - Printing output
    answer: 2
    explanation: Code organization and reusability is the correct answer to “In C, what is a function primarily used for”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What is the result of the expression sqrt(16) in C, assuming proper inclusion of the math library?
    options:
      - "4"
      - "8"
      - "2"
      - Error
    answer: 0
    explanation: 4 is the correct answer to “What is the result of the expression sqrt(16) in C, assuming proper inclusion of the math library”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What is the correct way to declare a function in C that takes no arguments and returns an integer?
    options:
      - int func()
      - func(int)
      - func()
      - int func(int)
    answer: 2
    explanation: func() is the correct answer to “What is the correct way to declare a function in C that takes no arguments and returns an integer”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: In C, what is the purpose of the 'return' statement in a function?
    options:
      - To declare the function's return type
      - To exit the program
      - To return a value from the function
      - To define a function
    answer: 2
    explanation: To return a value from the function is the correct answer to “In C, what is the purpose of the 'return' statement in a function”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: Which of the following is not a standard C library function for mathematical operations?
    options:
      - pow
      - rand
      - sqrt
      - abs
    answer: 1
    explanation: rand is the correct answer to “Which of the following is not a standard C library function for mathematical operations”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What is the main advantage of using functions in C?
    options:
      - Reducing code redundancy and improving code organization
      - Increasing program speed
      - Eliminating the need for variables
      - Reducing memory usage
    answer: 0
    explanation: Reducing code redundancy and improving code organization is the correct answer to “What is the main advantage of using functions in C”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: What is a function's return type in C if it does not return any value?
    options:
      - int
      - void
      - float
      - char
    answer: 1
    explanation: void is the correct answer to “What is a function's return type in C if it does not return any value”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: In C, what is a function parameter?
    options:
      - A variable declared within a function
      - A value passed to a function when it's called
      - A variable declared globally
      - A reserved keyword
    answer: 0
    explanation: A variable declared within a function is the correct answer to “In C, what is a function parameter”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: How is the scope of a local variable defined in C?
    options:
      - Limited to the function where it is declared
      - Limited to the entire program
      - Limited to the block where it is declared
      - Limited to the main() function
    answer: 0
    explanation: Limited to the function where it is declared is the correct answer to “How is the scope of a local variable defined in C”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: What is a recursive function in C?
    options:
      - A function that calls itself
      - A function that uses a loop
      - A function that returns a large value
      - A function that takes no arguments
    answer: 0
    explanation: A function that calls itself is the correct answer to “What is a recursive function in C”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What is the result of the expression abs(-5) in C?
    options:
      - "-5"
      - "5"
      - "0"
      - Error
    answer: 1
    explanation: 5 is the correct answer to “What is the result of the expression abs(-5) in C”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: In C, what is a function definition?
    options:
      - A declaration that specifies a function's name, return type, and parameters
      - A declaration that specifies a function's name and return type
      - A block of code that specifies a function's behavior
      - A variable declared within a function
    answer: 2
    explanation: A block of code that specifies a function's behavior is the correct answer to “In C, what is a function definition”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: What is the purpose of the 'extern' keyword when declaring a function in C?
    options:
      - To specify that the function is not defined in the current file
      - To declare a function as a constant
      - To declare a function with a variable number of arguments
      - To specify that the function is recursive
    answer: 0
    explanation: To specify that the function is not defined in the current file is the correct answer to “What is the purpose of the 'extern' keyword when declaring a function in C”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: What is the purpose of the 'static' keyword when used with a function in C?
    options:
      - To make the function return a static value
      - To specify that the function can only be called once
      - To limit the function's visibility to the current source file
      - To make the function public
    answer: 2
    explanation: To limit the function's visibility to the current source file is the correct answer to “What is the purpose of the 'static' keyword when used with a function in C”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: In C, what is the purpose of the 'void' keyword as a function return type?
    options:
      - It specifies that the function doesn't return a value
      - It specifies that the function returns an integer
      - It specifies that the function returns a character
      - It specifies that the function is recursive
    answer: 0
    explanation: It specifies that the function doesn't return a value is the correct answer to “In C, what is the purpose of the 'void' keyword as a function return type”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: How do you call a function named myFunction with two arguments in C?
    options:
      - myFunction(5, 10)
      - myFunction()
      - myFunction(5)(10)
      - myFunction[5, 10]
    answer: 0
    explanation: myFunction(5, 10) is the correct answer to “How do you call a function named myFunction with two arguments in C”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: In C, what is a function's prototype?
    options:
      - A function's name and return type
      - A declaration that specifies a function's name and parameters
      - A function's documentation
      - A function's source code
    answer: 1
    explanation: A declaration that specifies a function's name and parameters is the correct answer to “In C, what is a function's prototype”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: What is the result of the expression floor(5.7) in C, assuming proper inclusion of the math library?
    options:
      - "5"
      - "6"
      - "0.7"
      - Error
    answer: 0
    explanation: 5 is the correct answer to “What is the result of the expression floor(5.7) in C, assuming proper inclusion of the math library”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: In C, what is the purpose of the 'inline' keyword when used with a function?
    options:
      - To indicate that the function should be inlined by the compiler
      - To specify that the function is only used in one file
      - To make the function public
      - To declare a recursive function
    answer: 0
    explanation: To indicate that the function should be inlined by the compiler is the correct answer to “In C, what is the purpose of the 'inline' keyword when used with a function”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: What is a function parameter in C?
    options:
      - A value passed to a function when it's called
      - A variable declared within a function
      - A reserved keyword
      - A global variable
    answer: 0
    explanation: A value passed to a function when it's called is the correct answer to “What is a function parameter in C”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: What is the result of the expression ceil(3.2) in C, assuming proper inclusion of the math library?
    options:
      - "3"
      - "4"
      - "0.2"
      - Error
    answer: 1
    explanation: 4 is the correct answer to “What is the result of the expression ceil(3.2) in C, assuming proper inclusion of the math library”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: In C, what is the purpose of the 'const' keyword when used with a function parameter?
    options:
      - It specifies that the parameter is constant and cannot be modified
      - It makes the parameter mandatory
      - It makes the parameter optional
      - It specifies that the parameter is a constant function
    answer: 0
    explanation: It specifies that the parameter is constant and cannot be modified is the correct answer to “In C, what is the purpose of the 'const' keyword when used with a function parameter”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: How can you declare a function in C that takes a variable number of arguments?
    options:
      - Using the 'variable' keyword
      - Using the 'args' keyword
      - Using the '...' notation
      - Using the 'varargs' keyword
    answer: 2
    explanation: Using the '...' notation is the correct answer to “How can you declare a function in C that takes a variable number of arguments”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: In C, what is the purpose of the 'recursion' in a function?
    options:
      - To create an infinite loop
      - To make the function faster
      - To make the function return a constant value
      - To call the function itself
    answer: 3
    explanation: To call the function itself is the correct answer to “In C, what is the purpose of the 'recursion' in a function”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: What is the result of the expression pow(2, 3) in C, assuming proper inclusion of the math library?
    options:
      - "5"
      - "6"
      - "8"
      - Error
    answer: 2
    explanation: 8 is the correct answer to “What is the result of the expression pow(2, 3) in C, assuming proper inclusion of the math library”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: What is the purpose of the 'volatile' keyword when used with a function in C?
    options:
      - To make the function execute faster
      - To specify that the function is unpredictable
      - To optimize the function
      - To indicate that the function may change external variables
    answer: 3
    explanation: To indicate that the function may change external variables is the correct answer to “What is the purpose of the 'volatile' keyword when used with a function in C”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: In C, what is a function parameter's scope?
    options:
      - Limited to the function where it is declared
      - Limited to the entire program
      - Limited to the block where it is declared
      - Limited to the main() function
    answer: 0
    explanation: Limited to the function where it is declared is the correct answer to “In C, what is a function parameter's scope”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: Use of functions
    options:
      - Helps to avoid repeating a set of statements many times.
      - Enhances the logical clarity of the program.
      - Helps to avoid repeated programming across programs.
      - Makes the debugging task easier.
      - All of the above
    answer: 4
    explanation: All of the above is the correct answer to “Use of functions”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: What is function?
    options:
      - Function is a block of statements that perform some specific task.
      - Function is the fundamental modular unit. A function is usually designed to perform a specific task.
      - Function is a block of code that performs a specific task. It has a name and it is reusable.
      - All of the above
    answer: 3
    explanation: All of the above is the correct answer to “What is function”. This question is standard in competitive examination syllabi for Function.
    keyConcept: Function
    testedIn:
      - FPSC
      - PPSC
---


