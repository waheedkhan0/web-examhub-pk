---
title: Exception Handling In C Plus Plus — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Exception Handling In C Plus Plus — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: exception-handling-in-c-plus-plus-part-1
topicName: Exception Handling In C Plus Plus — Part 1
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
    question: How do you specify that a function may throw an exception in C++?
    options:
      - Using the 'throws' keyword
      - Using the 'exception' keyword
      - Using the 'throws()' specifier
      - Using the 'noexcept' specifier
    answer: 3
    explanation: "The correct answer is Option D: Using the 'noexcept' specifier Here's why: Exception handling in C++ allows you to deal with unexpected problems that occur during the execution of a program. A function can signal that something went wrong by \"throwing\" an exception. Let's break down the options: Option A: Using the 'throws' keyword - The `throws` keyword is not used in standard C++ for specifying exceptions. Languages like Java use `throws`. Option B: Using the 'exception' keyword - The `exception` keyword is related to exception classes but not to specifying if a function *might* throw an exception. Option C: Using the 'throws()' specifier - This is also incorrect. C++11 introduced `noexcept` for this purpose. Older C++ standards used something called exception specifications but they are largely deprecated and not the best practice to use anymore. Option D: Using the 'noexcept' specifier - The `noexcept` specifier is used to specify whether a function may throw an exception. If a function is declared `noexcept`, it promises *not* to throw any exceptions. If it *does* throw an exception, the program might terminate abruptly. The absence of `noexcept` does *not* mean the function *will* throw, only that it *might*."
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: What is exception handling in C++?
    options:
      - A method to handle errors during runtime
      - A method to handle errors during compile time
      - A method to handle errors during linking
      - A method to handle errors during execution
    answer: 0
    explanation: A method to handle errors during runtime is the correct answer to “What is exception handling in C++”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Which keyword is used to throw an exception in C++?
    options:
      - raise
      - throw
      - catch
      - try
    answer: 1
    explanation: throw is the correct answer to “Which keyword is used to throw an exception in C++”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What is the purpose of the 'try' block in exception handling in C++?
    options:
      - To catch exceptions
      - To throw exceptions
      - To define the block of code that may generate exceptions
      - To handle exceptions
    answer: 2
    explanation: To define the block of code that may generate exceptions is the correct answer to “What is the purpose of the 'try' block in exception handling in C++”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: Which of the following is not a standard exception class in C++?
    options:
      - IOException
      - std::exception
      - std::runtime_error
      - std::out_of_range
    answer: 0
    explanation: IOException is the correct answer to “Which of the following is not a standard exception class in C++”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What is the purpose of the 'catch' block in exception handling in C++?
    options:
      - To throw exceptions
      - To define the block of code that may generate exceptions
      - To catch and handle exceptions
      - To handle errors during compile time
    answer: 2
    explanation: To catch and handle exceptions is the correct answer to “What is the purpose of the 'catch' block in exception handling in C++”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: Which of the following is not a part of the exception handling mechanism in C++?
    options:
      - try block
      - throw keyword
      - assert function
      - catch block
    answer: 2
    explanation: assert function is the correct answer to “Which of the following is not a part of the exception handling mechanism in C++”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What does the 'std::exception' class represent in C++ exception handling?
    options:
      - It is a base class for all standard C++ exceptions
      - It is used to handle file exceptions
      - It is used to handle memory exceptions
      - It is used to handle arithmetic exceptions
    answer: 0
    explanation: It is a base class for all standard C++ exceptions is the correct answer to “What does the 'std::exception' class represent in C++ exception handling”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: How do you catch all exceptions in C++?
    options:
      - catch (...)
      - catch (Exception e)
      - catch (AllExceptions)
      - catch (std::exception)
    answer: 0
    explanation: catch (...) is the correct answer to “How do you catch all exceptions in C++”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: Which function is used to retrieve the description of the exception in C++?
    options:
      - get_message()
      - what()
      - catch_msg()
      - exception_desc()
    answer: 1
    explanation: what() is the correct answer to “Which function is used to retrieve the description of the exception in C++”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What happens if an exception is thrown but not caught in C++?
    options:
      - The program terminates abruptly
      - The program continues execution normally
      - The program waits indefinitely
      - The exception is automatically caught
    answer: 0
    explanation: The program terminates abruptly is the correct answer to “What happens if an exception is thrown but not caught in C++”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: Which of the following statements is true about the 'finally' block in C++ exception handling?
    options:
      - It must be present after every 'try' block
      - It is executed if an exception is caught
      - It is executed regardless of whether an exception is thrown or not
      - It is optional and is not required
    answer: 2
    explanation: It is executed regardless of whether an exception is thrown or not is the correct answer to “Which of the following statements is true about the 'finally' block in C++ exception handling”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What is the purpose of re-throwing an exception in C++?
    options:
      - To handle the exception at a different location
      - To ignore the exception
      - To propagate the exception up the call stack
      - To handle the exception at the same location
    answer: 0
    explanation: To handle the exception at a different location is the correct answer to “What is the purpose of re-throwing an exception in C++”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: Which header file is necessary for exception handling in C++?
    options:
      - <exception>
      - <error>
      - <assert>
      - <throw>
    answer: 0
    explanation: <exception> is the correct answer to “Which header file is necessary for exception handling in C++”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What is the function of the 'assert' macro in C++?
    options:
      - It throws an exception if a condition is false
      - It catches exceptions
      - It handles arithmetic errors
      - It ensures proper memory allocation
    answer: 0
    explanation: It throws an exception if a condition is false is the correct answer to “What is the function of the 'assert' macro in C++”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: How do you define your own exception class in C++?
    options:
      - "class MyException : public std::exception"
      - class MyException extends Exception
      - class MyException extends Throwable
      - "class MyException : exception"
    answer: 0
    explanation: "class MyException : public std::exception is the correct answer to “How do you define your own exception class in C++”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus."
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What is the default behavior of an uncaught exception in C++?
    options:
      - It leads to undefined behavior
      - It causes the program to crash
      - It is automatically caught and handled
      - It is logged to a file
    answer: 1
    explanation: It causes the program to crash is the correct answer to “What is the default behavior of an uncaught exception in C++”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: What is the purpose of the 'std::runtime_error' class in C++ exception handling?
    options:
      - It represents errors detected during runtime
      - It represents errors detected during compile time
      - It represents logical errors in the code
      - It represents memory allocation errors
    answer: 0
    explanation: It represents errors detected during runtime is the correct answer to “What is the purpose of the 'std::runtime_error' class in C++ exception handling”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: Which of the following is true about the 'noexcept' specifier in C++?
    options:
      - It indicates that a function may throw an exception
      - It indicates that a function will never throw an exception
      - It automatically catches exceptions
      - It is used for exception handling
    answer: 1
    explanation: It indicates that a function will never throw an exception is the correct answer to “Which of the following is true about the 'noexcept' specifier in C++”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What is the purpose of the 'std::bad_alloc' class in C++ exception handling?
    options:
      - It represents errors related to dynamic memory allocation
      - It represents errors related to file handling
      - It represents errors related to string manipulation
      - It represents errors related to type conversion
    answer: 0
    explanation: It represents errors related to dynamic memory allocation is the correct answer to “What is the purpose of the 'std::bad_alloc' class in C++ exception handling”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: What happens if an exception is thrown inside a 'catch' block in C++?
    options:
      - The exception is automatically caught and handled
      - The program continues normally
      - The program terminates unexpectedly
      - It leads to an infinite loop
    answer: 2
    explanation: The program terminates unexpectedly is the correct answer to “What happens if an exception is thrown inside a 'catch' block in C++”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: How do you re-throw the current exception in C++?
    options:
      - throw
      - throw e
      - rethrow
      - throw e.what()
    answer: 0
    explanation: throw is the correct answer to “How do you re-throw the current exception in C++”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: Which of the following statements about exception handling in C++ is correct?
    options:
      - It is an alternative to error codes
      - It is faster and more efficient than error codes
      - It is used only for compile-time errors
      - It cannot handle runtime errors
    answer: 0
    explanation: It is an alternative to error codes is the correct answer to “Which of the following statements about exception handling in C++ is correct”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: What is the purpose of the 'std::exception_ptr' class in C++ exception handling?
    options:
      - It represents a pointer to an exception object
      - It represents a pointer to the exception handler
      - It represents a pointer to the exception stack
      - It represents a pointer to the exception catch block
    answer: 0
    explanation: It represents a pointer to an exception object is the correct answer to “What is the purpose of the 'std::exception_ptr' class in C++ exception handling”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: How do you catch multiple exceptions of different types in C++?
    options:
      - Using multiple catch blocks
      - Using a single catch block with multiple exception types
      - Using the 'catch (...) ' block
      - Using nested catch blocks
    answer: 1
    explanation: Using a single catch block with multiple exception types is the correct answer to “How do you catch multiple exceptions of different types in C++”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Which keyword is used to define a custom exception class in C++?
    options:
      - exception
      - custom_exception
      - throw_exception
      - class
    answer: 3
    explanation: class is the correct answer to “Which keyword is used to define a custom exception class in C++”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: What is the purpose of the 'std::terminate' function in C++?
    options:
      - It is called when an exception is thrown
      - It is called when a program terminates normally
      - It is called when an exception is caught
      - It is called when an uncaught exception causes program termination
    answer: 3
    explanation: It is called when an uncaught exception causes program termination is the correct answer to “What is the purpose of the 'std::terminate' function in C++”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: What is the purpose of the 'nothrow' parameter in the 'new' operator in C++?
    options:
      - It prevents the 'new' operator from throwing exceptions
      - It forces the 'new' operator to throw exceptions
      - It specifies the size of the allocated memory
      - It specifies the alignment of the allocated memory
    answer: 0
    explanation: It prevents the 'new' operator from throwing exceptions is the correct answer to “What is the purpose of the 'nothrow' parameter in the 'new' operator in C++”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: How do you handle exceptions thrown from constructor initialization lists in C++?
    options:
      - Using try-catch blocks inside the constructor
      - Using try-catch blocks outside the constructor
      - Using the 'noexcept' specifier
      - Exceptions from constructor initialization lists cannot be caught
    answer: 1
    explanation: Using try-catch blocks outside the constructor is the correct answer to “How do you handle exceptions thrown from constructor initialization lists in C++”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: What is the purpose of the 'std::bad_function_call' class in C++ exception handling?
    options:
      - It represents errors in function calls
      - It represents errors in lambda expressions
      - It represents errors in function pointers
      - It represents errors in function templates
    answer: 0
    explanation: It represents errors in function calls is the correct answer to “What is the purpose of the 'std::bad_function_call' class in C++ exception handling”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: Which statement about the 'finally' block in C++ exception handling is true?
    options:
      - It must always be followed by a 'catch' block
      - It must always be followed by a 'try' block
      - It is executed regardless of whether an exception is thrown or not
      - It is optional and can be omitted
    answer: 2
    explanation: It is executed regardless of whether an exception is thrown or not is the correct answer to “Which statement about the 'finally' block in C++ exception handling is true”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: What is the purpose of the 'std::nested_exception' class in C++ exception handling?
    options:
      - It represents exceptions nested within other exceptions
      - It represents exceptions thrown by nested functions
      - It represents exceptions caught by nested try-catch blocks
      - It represents exceptions that occur in nested loops
    answer: 0
    explanation: It represents exceptions nested within other exceptions is the correct answer to “What is the purpose of the 'std::nested_exception' class in C++ exception handling”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: How do you catch an exception by reference in C++?
    options:
      - Using a catch block with an ampersand (&) after the exception type
      - Using a catch block with an asterisk (*) after the exception type
      - Using a catch block with no specifier after the exception type
      - Using a catch block with a 'ref' keyword after the exception type
    answer: 0
    explanation: Using a catch block with an ampersand (&) after the exception type is the correct answer to “How do you catch an exception by reference in C++”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: What is the purpose of the 'std::logic_error' class in C++ exception handling?
    options:
      - It represents errors in logical operations
      - It represents errors in runtime logic
      - It represents errors in memory operations
      - It represents errors in arithmetic operations
    answer: 0
    explanation: It represents errors in logical operations is the correct answer to “What is the purpose of the 'std::logic_error' class in C++ exception handling”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: What happens if an exception is thrown inside a destructor in C++?
    options:
      - It leads to undefined behavior
      - It is automatically caught and handled
      - It causes the program to crash
      - It is logged to a file
    answer: 0
    explanation: It leads to undefined behavior is the correct answer to “What happens if an exception is thrown inside a destructor in C++”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: Which keyword is used to specify that a function will not throw any exceptions in C++?
    options:
      - nothrow
      - noexcept
      - exception
      - noexception
    answer: 1
    explanation: noexcept is the correct answer to “Which keyword is used to specify that a function will not throw any exceptions in C++”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: What is the purpose of the 'std::uncaught_exception' function in C++?
    options:
      - It checks if there are any uncaught exceptions
      - It handles uncaught exceptions
      - It throws an exception
      - It catches an exception
    answer: 0
    explanation: It checks if there are any uncaught exceptions is the correct answer to “What is the purpose of the 'std::uncaught_exception' function in C++”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: Which standard header file is required for exception handling in C++?
    options:
      - <stdexcept>
      - <exception>
      - <error>
      - <assert>
    answer: 0
    explanation: <stdexcept> is the correct answer to “Which standard header file is required for exception handling in C++”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: How do you specify that a function will throw no exceptions in C++?
    options:
      - Using the 'noexcept' specifier
      - Using the 'nothrow' specifier
      - Using the 'throw' keyword
      - Using the 'catch' block
    answer: 0
    explanation: Using the 'noexcept' specifier is the correct answer to “How do you specify that a function will throw no exceptions in C++”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: What is the purpose of the 'std::exception_ptr::rethrow' function in C++?
    options:
      - It rethrows the current exception
      - It creates a new exception
      - It catches an exception
      - It checks for exceptions
    answer: 0
    explanation: It rethrows the current exception is the correct answer to “What is the purpose of the 'std::exception_ptr::rethrow' function in C++”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
---


