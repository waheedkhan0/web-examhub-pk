---
title: Storage Class MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Storage Class with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: storage-class
topicName: Storage Class
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
    question: What is the default value of an uninitialized 'static' variable in C?
    options:
      - Zero
      - Undefined
      - Garbage value
      - one
    answer: 0
    explanation: The default value of an uninitialized 'static' variable in C is zero. Unlike automatic variables (which have an undefined value), static variables are automatically initialized to zero if no explicit initialization is provided.
    keyConcept: Storage Class
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: Which of the following is not a storage class in C?
    options:
      - auto
      - struct
      - extern
      - static
      - register
    answer: 1
    explanation: A storage class defines the scope (visibility) and life-time of variables and/or functions within a C Program. These specifiers precede the type that they modify. There are the following storage classes, which can be used in a C Program auto register static extern
    keyConcept: Storage Class
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What does the "auto" specifier do?
    options:
      - It automatically initializes a variable to 0
      - It indicates that a variable’s memory will automatically be preserved
      - It automatically increments the variable when used
      - It automatically initializes a variable to NULL
      - It indicates that a variable’s memory space is allocated upon entry into the block.
    answer: 1
    explanation: Auto is a automatic storage class. The purpose of auto is it indicates that a variable’s memory will automatically be preserved.
    keyConcept: Storage Class
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What is the default storage class for global variables?
    options:
      - auto
      - static
      - extern
      - register
    answer: 2
    explanation: extern is the correct answer to “What is the default storage class for global variables”. This question is standard in competitive examination syllabi for Storage Class.
    keyConcept: Storage Class
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: Which storage class is used for local variables?
    options:
      - register
      - auto
      - static
      - extern
    answer: 1
    explanation: auto is the correct answer to “Which storage class is used for local variables”. This question is standard in competitive examination syllabi for Storage Class.
    keyConcept: Storage Class
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What is the primary purpose of the 'static' storage class?
    options:
      - Extend scope
      - Preserve value
      - Allocate memory
      - Register access
    answer: 1
    explanation: Preserve value is the correct answer to “What is the primary purpose of the 'static' storage class”. This question is standard in competitive examination syllabi for Storage Class.
    keyConcept: Storage Class
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: Which storage class specifies automatic storage duration?
    options:
      - auto
      - static
      - extern
      - register
    answer: 0
    explanation: auto is the correct answer to “Which storage class specifies automatic storage duration”. This question is standard in competitive examination syllabi for Storage Class.
    keyConcept: Storage Class
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: When does a 'register' storage class make sense to use?
    options:
      - For global vars
      - For function args
      - For local vars
      - For static vars
    answer: 1
    explanation: For function args is the correct answer to “When does a 'register' storage class make sense to use”. This question is standard in competitive examination syllabi for Storage Class.
    keyConcept: Storage Class
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What is the significance of the 'extern' storage class?
    options:
      - Local scope
      - External linkage
      - Automatic alloc.
      - Static duration
    answer: 1
    explanation: External linkage is the correct answer to “What is the significance of the 'extern' storage class”. This question is standard in competitive examination syllabi for Storage Class.
    keyConcept: Storage Class
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: Which storage class allocates memory and retains its value between function calls?
    options:
      - extern
      - auto
      - static
      - register
    answer: 2
    explanation: static is the correct answer to “Which storage class allocates memory and retains its value between function calls”. This question is standard in competitive examination syllabi for Storage Class.
    keyConcept: Storage Class
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What is the maximum scope of a variable with 'static' storage class?
    options:
      - File scope
      - Function scope
      - Block scope
      - No scope (invalid)
    answer: 0
    explanation: File scope is the correct answer to “What is the maximum scope of a variable with 'static' storage class”. This question is standard in competitive examination syllabi for Storage Class.
    keyConcept: Storage Class
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: What is the storage duration of a variable with 'auto' storage class?
    options:
      - Static
      - Automatic
      - Register
      - External
    answer: 1
    explanation: Automatic is the correct answer to “What is the storage duration of a variable with 'auto' storage class”. This question is standard in competitive examination syllabi for Storage Class.
    keyConcept: Storage Class
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: In which storage class is the variable's storage duration throughout the program's execution?
    options:
      - extern
      - static
      - auto
      - register
    answer: 1
    explanation: static is the correct answer to “In which storage class is the variable's storage duration throughout the program's execution”. This question is standard in competitive examination syllabi for Storage Class.
    keyConcept: Storage Class
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: Which storage class is used for function arguments by default?
    options:
      - extern
      - auto
      - static
      - register
    answer: 1
    explanation: auto is the correct answer to “Which storage class is used for function arguments by default”. This question is standard in competitive examination syllabi for Storage Class.
    keyConcept: Storage Class
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What is the primary advantage of using 'register' storage class for variables?
    options:
      - Larger scope
      - Faster access
      - Longer duration
      - Automatic alloc.
    answer: 1
    explanation: Faster access is the correct answer to “What is the primary advantage of using 'register' storage class for variables”. This question is standard in competitive examination syllabi for Storage Class.
    keyConcept: Storage Class
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What storage class should be used for a variable that needs to be shared across multiple source files?
    options:
      - auto
      - register
      - extern
      - static
    answer: 2
    explanation: extern is the correct answer to “What storage class should be used for a variable that needs to be shared across multiple source files”. This question is standard in competitive examination syllabi for Storage Class.
    keyConcept: Storage Class
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: In which storage class is the variable's storage duration limited to the function where it's declared?
    options:
      - extern
      - static
      - auto
      - register
    answer: 2
    explanation: auto is the correct answer to “In which storage class is the variable's storage duration limited to the function where it's declared”. This question is standard in competitive examination syllabi for Storage Class.
    keyConcept: Storage Class
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: Which storage class is often used for variables with block scope within functions?
    options:
      - register
      - extern
      - auto
      - static
    answer: 2
    explanation: auto is the correct answer to “Which storage class is often used for variables with block scope within functions”. This question is standard in competitive examination syllabi for Storage Class.
    keyConcept: Storage Class
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: What storage class is used for function parameters in C by default?
    options:
      - static
      - auto
      - register
      - extern
    answer: 1
    explanation: auto is the correct answer to “What storage class is used for function parameters in C by default”. This question is standard in competitive examination syllabi for Storage Class.
    keyConcept: Storage Class
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: Which storage class is used to define variables that are not initialized to any default value?
    options:
      - auto
      - static
      - extern
      - register
    answer: 0
    explanation: auto is the correct answer to “Which storage class is used to define variables that are not initialized to any default value”. This question is standard in competitive examination syllabi for Storage Class.
    keyConcept: Storage Class
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: When is memory allocated for a 'static' variable in C?
    options:
      - During compile time
      - During runtime
      - During function call
      - During program termination
    answer: 0
    explanation: During compile time is the correct answer to “When is memory allocated for a 'static' variable in C”. This question is standard in competitive examination syllabi for Storage Class.
    keyConcept: Storage Class
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: Which storage class should be used for a variable that should be accessed quickly and frequently?
    options:
      - static
      - extern
      - register
      - auto
    answer: 2
    explanation: register is the correct answer to “Which storage class should be used for a variable that should be accessed quickly and frequently”. This question is standard in competitive examination syllabi for Storage Class.
    keyConcept: Storage Class
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: What is the primary difference between 'auto' and 'register' storage classes?
    options:
      - Scope
      - Initialization
      - Memory allocation
      - Storage duration
    answer: 3
    explanation: Storage duration is the correct answer to “What is the primary difference between 'auto' and 'register' storage classes”. This question is standard in competitive examination syllabi for Storage Class.
    keyConcept: Storage Class
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: In which storage class are variables allocated memory in the data segment of the program's memory?
    options:
      - auto
      - extern
      - static
      - register
    answer: 2
    explanation: static is the correct answer to “In which storage class are variables allocated memory in the data segment of the program's memory”. This question is standard in competitive examination syllabi for Storage Class.
    keyConcept: Storage Class
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: Which storage class can only be used for local variables?
    options:
      - register
      - static
      - extern
      - auto
    answer: 0
    explanation: register is the correct answer to “Which storage class can only be used for local variables”. This question is standard in competitive examination syllabi for Storage Class.
    keyConcept: Storage Class
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: What storage class is typically used for function definitions in header files?
    options:
      - extern
      - static
      - auto
      - register
    answer: 0
    explanation: extern is the correct answer to “What storage class is typically used for function definitions in header files”. This question is standard in competitive examination syllabi for Storage Class.
    keyConcept: Storage Class
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: What happens when you declare a variable with the 'extern' storage class in a C source file?
    options:
      - It becomes a global variable
      - It becomes a constant
      - It cannot be accessed by other files
      - It becomes a local variable
    answer: 0
    explanation: It becomes a global variable is the correct answer to “What happens when you declare a variable with the 'extern' storage class in a C source file”. This question is standard in competitive examination syllabi for Storage Class.
    keyConcept: Storage Class
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: In which storage class is a variable's memory allocated on the stack?
    options:
      - auto
      - extern
      - register
      - static
    answer: 0
    explanation: auto is the correct answer to “In which storage class is a variable's memory allocated on the stack”. This question is standard in competitive examination syllabi for Storage Class.
    keyConcept: Storage Class
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: Which storage class can help improve execution speed by allowing variables to be stored in CPU registers?
    options:
      - static
      - extern
      - auto
      - register
    answer: 3
    explanation: register is the correct answer to “Which storage class can help improve execution speed by allowing variables to be stored in CPU registers”. This question is standard in competitive examination syllabi for Storage Class.
    keyConcept: Storage Class
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: What is the storage duration of a variable with 'static' storage class?
    options:
      - Automatic
      - Register
      - External
      - Static
    answer: 3
    explanation: Static is the correct answer to “What is the storage duration of a variable with 'static' storage class”. This question is standard in competitive examination syllabi for Storage Class.
    keyConcept: Storage Class
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: In which storage class are variables typically stored in the heap memory?
    options:
      - static
      - extern
      - auto
      - register
    answer: 2
    explanation: auto is the correct answer to “In which storage class are variables typically stored in the heap memory”. This question is standard in competitive examination syllabi for Storage Class.
    keyConcept: Storage Class
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: What is the main purpose of the 'volatile' storage class in C?
    options:
      - Prevents memory allocation
      - Forces a variable to be stored in registers
      - Indicates that a variable may change unexpectedly
      - Increases variable scope
    answer: 2
    explanation: Indicates that a variable may change unexpectedly is the correct answer to “What is the main purpose of the 'volatile' storage class in C”. This question is standard in competitive examination syllabi for Storage Class.
    keyConcept: Storage Class
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: The storage class controls
    options:
      - Life time of a variable.
      - Linkage of a variable.
      - Scope of a variable.
      - A and B
      - A, B and C
    answer: 4
    explanation: A, B and C is the correct answer to “The storage class controls”. This question is standard in competitive examination syllabi for Storage Class.
    keyConcept: Storage Class
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: How is a variable accessed from another file?
    options:
      - The global variable is referenced via the extern specifier.
      - The global variable is referenced via the auto specifier.
      - The global variable is referenced via the global specifier.
      - The global variable is referenced via the pointer specifier.
      - The global variable is referenced via the ext specifier.
    answer: 0
    explanation: The global variable is referenced via the extern specifier. is the correct answer to “How is a variable accessed from another file”. This question is standard in competitive examination syllabi for Storage Class.
    keyConcept: Storage Class
    testedIn:
      - FPSC
      - PPSC
---


