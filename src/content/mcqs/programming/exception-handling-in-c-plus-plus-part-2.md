---
title: Exception Handling In C Plus Plus — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Exception Handling In C Plus Plus — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: exception-handling-in-c-plus-plus-part-2
topicName: Exception Handling In C Plus Plus — Part 2
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
    question: Which keyword is used to specify that a function will throw any exceptions in C++?
    options:
      - throw
      - throwall
      - throwexception
      - throws
    answer: 3
    explanation: throws is the correct answer to “Which keyword is used to specify that a function will throw any exceptions in C++”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: What is the purpose of the 'std::unexpected' function in C++ exception handling?
    options:
      - It is called when an unexpected exception occurs
      - It handles unexpected exceptions
      - It throws an unexpected exception
      - It catches an unexpected exception
    answer: 0
    explanation: It is called when an unexpected exception occurs is the correct answer to “What is the purpose of the 'std::unexpected' function in C++ exception handling”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Which statement about exception handling in C++ is true?
    options:
      - An exception thrown inside a 'try' block must always be caught
      - An exception thrown inside a 'catch' block must always be rethrown
      - An exception can only be caught once
      - An exception can only be thrown once
    answer: 0
    explanation: An exception thrown inside a 'try' block must always be caught is the correct answer to “Which statement about exception handling in C++ is true”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What is the behavior of the 'std::terminate' function in C++?
    options:
      - It is called when an uncaught exception occurs
      - It terminates the program
      - It handles exceptions
      - It catches exceptions
    answer: 1
    explanation: It terminates the program is the correct answer to “What is the behavior of the 'std::terminate' function in C++”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: Uncaught exception leads to . . . . . . . .
    options:
      - termination of program
      - successful execution of programs
      - no effect on the program
      - execution of other functions of the program starts
    answer: 0
    explanation: termination of program is the correct answer to “Uncaught exception leads to . . . . . . . .”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> #include <cstdlib> using namespace std; void func(int a, int b) { if(b == 0){ throw \"This value of b will make the product zero. \" \"So please provide positive values.\\n\"; } else{ cout<<\"Product of \"<<a<<\" and \"<<b<<\" is: \"<<a*b<<endl; } } int main() { try{ func(5,0); } catch(const char* e){ cout<<e; } }"
    options:
      - "0"
      - "5"
      - This value of b will make the product zero. So please provide positive values.
      - "Product of 5 and 0 is: 0"
    answer: 2
    explanation: "This value of b will make the product zero. So please provide positive values. is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> #include <cstdlib> using namespace std; void func(int a, int b) { if(b == 0){ throw \"This value of b will make the product zero. \" \"So please provide positive values.\\n\"; } else{ cout<<\"Product of \"<<a<<\" and \"<<b<<\" is: \"<<a*b<<endl; } } int main() { try{ func(5,0); } catch(const char* e){ cout<<e; } }”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus."
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What is an error in C++?
    options:
      - Violation of syntactic and semantic rules of a languages
      - Missing of Semicolon
      - Missing of double quotes
      - Violation of program interface
    answer: 0
    explanation: Violation of syntactic and semantic rules of a languages is the correct answer to “What is an error in C++”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What are the different types of exceptions?
    options:
      - "1"
      - "2"
      - "3"
      - "4"
    answer: 1
    explanation: 2 is the correct answer to “What are the different types of exceptions”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: Why do we need to handle exceptions?
    options:
      - To avoid unexpected behaviour of a program during run-time
      - To let compiler remove all exceptions by itself
      - To successfully compile the program
      - To get correct output
    answer: 0
    explanation: To avoid unexpected behaviour of a program during run-time is the correct answer to “Why do we need to handle exceptions”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: Which keyword is used to throw an exception?
    options:
      - try
      - throw
      - throws
      - except
    answer: 1
    explanation: throw is the correct answer to “Which keyword is used to throw an exception”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: How Exception handling is implemented in the C++ program?
    options:
      - Using Exception keyword
      - Using try-catch block
      - Using Exception block
      - Using Error handling schedules
    answer: 1
    explanation: Using try-catch block is the correct answer to “How Exception handling is implemented in the C++ program”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: Header file used for exception handling in C++?
    options:
      - <cstdlib>
      - <string>
      - <handler>
      - <exception>
    answer: 3
    explanation: <exception> is the correct answer to “Header file used for exception handling in C++”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> #include <cstdlib> using namespace std; class A { int a; public: A(){} }; class B: public A { int b; public: B(){} }; void func() { B b; throw b; } int main() { try{ func(); } catch(B b){ cout<<\"Caught B Class\\n\"; } catch(A a){ cout<<\"Caught A Class\\n\"; } }"
    options:
      - Caught B Class
      - Caught A Class
      - Compile-time error
      - Run-time error
    answer: 0
    explanation: "Caught B Class is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> #include <cstdlib> using namespace std; class A { int a; public: A(){} }; class B: public A { int b; public: B(){} }; void func() { B b; throw b; } int main() { try{ func(); } catch(B b){ cout<<\"Caught B Class\\n\"; } catch(A a){ cout<<\"Caught A Class\\n\"; } }”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus."
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: Where should we place catch block of the derived class in a try-catch block?
    options:
      - Before the catch block of Base class
      - After the catch block of Base class
      - Anywhere in the sequence of catch blocks
      - After all the catch blocks
    answer: 0
    explanation: Before the catch block of Base class is the correct answer to “Where should we place catch block of the derived class in a try-catch block”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> #include <cstdlib> using namespace std; class A { int a; public: A(){} }; class B: public A { int b; public: B(){} }; void func1() { B b; throw b; } void func2() { A a; throw a; } int main() { try{ func1(); } catch(...){ cout<<\"Caught All types of exceptions\\n\"; } try{ func2(); } catch(B b){ cout<<\"Caught All types of exceptions\\n\"; } }"
    options:
      - Caught All types of exceptions
      - Caught All types of exceptions Aborted (core dumped)
      - Error
      - Caught All types of exceptions Caught All types of exceptions
    answer: 1
    explanation: "Caught All types of exceptions Aborted (core dumped) is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> #include <cstdlib> using namespace std; class A { int a; public: A(){} }; class B: public A { int b; public: B(){} }; void func1() { B b; throw b; } void func2() { A a; throw a; } int main() { try{ func1(); } catch(...){ cout<<\"Caught All types of exceptions\\n\"; } try{ func2(); } catch(B b){ cout<<\"Caught All types of exceptions\\n\"; } }”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus."
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: An uncaught handler returns to . . . . . . . .
    options:
      - main function
      - its caller
      - its callee
      - waits there for some time
    answer: 2
    explanation: its callee is the correct answer to “An uncaught handler returns to . . . . . . . .”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What is an exception in C++ program?
    options:
      - A problem that arises during the execution of a program
      - A problem that arises during compilation
      - Also known as the syntax error
      - Also known as semantic error
    answer: 0
    explanation: A problem that arises during the execution of a program is the correct answer to “What is an exception in C++ program”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: Which part of the try-catch block is always fully executed?
    options:
      - try part
      - catch part
      - finally part
      - throw part
    answer: 2
    explanation: finally part is the correct answer to “Which part of the try-catch block is always fully executed”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: By default, what a program does when it detects an exception?
    options:
      - Continue running
      - Results in the termination of the program
      - Calls other functions of the program
      - Removes the exception and tells the programmer about an exception
    answer: 1
    explanation: Results in the termination of the program is the correct answer to “By default, what a program does when it detects an exception”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What is Re-throwing an exception means in C++?
    options:
      - An exception that is thrown again as it is not handled by that catching block
      - An exception that is caught twice
      - An exception that is not handled in one caught hence thrown again
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “What is Re-throwing an exception means in C++”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> #include <cstdlib> using namespace std; void func(int a, int b) { if(b < 1){ throw b; } else{ cout<<\"Product of \"<<a<<\" and \"<<b<<\" is: \"<<a*b<<endl; } } int main() { try { try { func(5,-1); } catch(int b) { if(b==0) throw \"value of b is zero\\n\"; else throw \"value of b is less than zero\\n\"; } } catch(const char* e) { cout<<e; } }"
    options:
      - value of b is zero
      - value of b is less than zero
      - "Product of 5 and -1 is: -5"
      - Aborted(core dumped)
    answer: 1
    explanation: "value of b is less than zero is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> #include <cstdlib> using namespace std; void func(int a, int b) { if(b < 1){ throw b; } else{ cout<<\"Product of \"<<a<<\" and \"<<b<<\" is: \"<<a*b<<endl; } } int main() { try { try { func(5,-1); } catch(int b) { if(b==0) throw \"value of b is zero\\n\"; else throw \"value of b is less than zero\\n\"; } } catch(const char* e) { cout<<e; } }”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus."
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What id the syntax for catching any type of exceptions?
    options:
      - catch(Exception e)
      - catch(...)
      - catch(Exception ALL)
      - catch(ALL)
    answer: 1
    explanation: catch(...) is the correct answer to “What id the syntax for catching any type of exceptions”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: Which of the following is an exception in C++?
    options:
      - Divide by zero
      - Semicolon not written
      - Variable not declared
      - An expression is wrongly written
    answer: 0
    explanation: Divide by zero is the correct answer to “Which of the following is an exception in C++”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> #include <cstdlib> using namespace std; class A { int a; public: A(){} }; class B: public A { int b; public: B(){} }; void func() { B b; throw b; } int main() { try{ func(); } catch(A a){ cout<<\"Caught A Class\\n\"; } catch(B b){ cout<<\"Caught B Class\\n\"; } }"
    options:
      - Caught B Class
      - Caught A Class
      - Compile-time error
      - Run-time error
    answer: 1
    explanation: "Caught A Class is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> #include <cstdlib> using namespace std; class A { int a; public: A(){} }; class B: public A { int b; public: B(){} }; void func() { B b; throw b; } int main() { try{ func(); } catch(A a){ cout<<\"Caught A Class\\n\"; } catch(B b){ cout<<\"Caught B Class\\n\"; } }”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus."
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: "What happens when this C++ program is compiled? #include <iostream> #include <string> #include <cstdlib> using namespace std; class A { int a; public: A(){} }; class B: public A { int b; public: B(){} }; void func() { B b; throw b; } int main() { try{ func(); } catch(A a){ cout<<\"Caught A Class\\n\"; } catch(B b){ cout<<\"Caught B Class\\n\"; } }"
    options:
      - The program compiles successfully without any errors or warnings
      - Compile-time error occurs
      - The program compiles successfully with warnings
      - The program gives both errors and warnings
    answer: 2
    explanation: "The program compiles successfully with warnings is the correct answer to “What happens when this C++ program is compiled? #include <iostream> #include <string> #include <cstdlib> using namespace std; class A { int a; public: A(){} }; class B: public A { int b; public: B(){} }; void func() { B b; throw b; } int main() { try{ func(); } catch(A a){ cout<<\"Caught A Class\\n\"; } catch(B b){ cout<<\"Caught B Class\\n\"; } }”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus."
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: What is the difference between error and exception?
    options:
      - Both are the same
      - Errors can be handled at the run-time but the exceptions cannot
      - Exceptions can be handled at the run-time but the errors cannot
      - Both can be handled during run-time
    answer: 2
    explanation: Exceptions can be handled at the run-time but the errors cannot is the correct answer to “What is the difference between error and exception”. This question is standard in competitive examination syllabi for Exception Handling In C Plus Plus.
    keyConcept: Exception Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
---


