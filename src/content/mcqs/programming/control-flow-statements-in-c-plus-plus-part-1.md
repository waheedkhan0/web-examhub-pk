---
title: Control Flow Statements In C Plus Plus — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Control Flow Statements In C Plus Plus — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: control-flow-statements-in-c-plus-plus-part-1
topicName: Control Flow Statements In C Plus Plus — Part 1
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
    question: "What will be the output of the following code: for (int i = 5; i >= 0; --i) { cout << i << \" \"; if (i == 3) break; } in C++?"
    options:
      - Compilation error
      - 5 4 3
      - 5 4 3 2 1 0
      - 5 4 3 0 1
    answer: 1
    explanation: "The given code is a for loop in C++: for (int i = 5; i >= 0; --i) { cout << i << \" \"; if (i == 3) break; } This loop initializes i to 5 and decrements it in each iteration until i becomes less than 0. On each iteration, it prints the current value of i followed by a space. When i becomes 3, the if condition becomes true and the break statement terminates the loop. Therefore, the values printed are: 5 4 3 No further values (like 2, 1, 0) are printed because the loop exits when i == 3. Hence, the correct output is: 5 4 3"
    keyConcept: Control Flow Statements In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: "What is the output of the following code: for (int i = 0; i < 3; ++i) { for (int j = 0; j < 2; ++j) { cout << i << j << \" \"; } } in C++?"
    options:
      - 00 11 22 33 21 01
      - 00 10 20 01 11 22
      - 00 01 10 11 20 21
      - Compilation error
    answer: 2
    explanation: "Solution: The code contains a nested for loop structure. The outer loop iterates with variable i from 0 to 2 (inclusive), and the inner loop iterates with variable j from 0 to 1 (inclusive). For each iteration of the outer loop (each value of i ), the inner loop runs completely, iterating through both values of j . The output is printed as follows: When i = 0 : j = 0 → output is 00 j = 1 → output is 01 When i = 1 : j = 0 → output is 10 j = 1 → output is 11 When i = 2 : j = 0 → output is 20 j = 1 → output is 21 Combining all outputs, the final result is: 00 01 10 11 20 21"
    keyConcept: Control Flow Statements In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: "What will be the output of the following code: int x = 10; if (x < 5) cout << \"Less\"; else if (x == 5) cout << \"Equal\"; else cout << \"More\"; in C++?"
    options:
      - More
      - Less
      - Equal
      - Compilation error
    answer: 0
    explanation: "Explanation: Let's break down this C++ code step by step: 1. Variable Initialization: int x = 10; This line creates an integer variable named 'x' and assigns it the value 10. 2. `if` Statement: if (x < 5) This checks if the value of 'x' (which is 10) is less than 5. Since 10 is not less than 5, this condition is false. 3. `else if` Statement: else if (x == 5) Because the first `if` condition was false, the program moves to the `else if` condition. This checks if 'x' is equal to 5. Since 10 is not equal to 5, this condition is also false. 4. `else` Statement: else cout << \"More\"; Since both the `if` and `else if` conditions were false, the program executes the code within the `else` block. This line prints \"More\" to the console. Therefore, the output of the code will be \"More\". Correct Answer: A) More"
    keyConcept: Control Flow Statements In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What is the syntax for the 'if' statement in C++?
    options:
      - if (condition) then statement
      - if (condition) then { statement; }
      - if { condition } then { statement; }
      - if (condition) { statement; }
    answer: 3
    explanation: if (condition) { statement; } is the correct answer to “What is the syntax for the 'if' statement in C++”. This question is standard in competitive examination syllabi for Control Flow Statements In C Plus Plus.
    keyConcept: Control Flow Statements In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: What is the purpose of the 'else' statement in C++?
    options:
      - Executes after the 'if' block
      - Executes before the 'if' block
      - Executes when the 'if' condition is false
      - Executes regardless of the 'if' block
    answer: 2
    explanation: Executes when the 'if' condition is false is the correct answer to “What is the purpose of the 'else' statement in C++”. This question is standard in competitive examination syllabi for Control Flow Statements In C Plus Plus.
    keyConcept: Control Flow Statements In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What is the correct syntax for the 'switch' statement in C++?
    options:
      - "switch (expression) { case constant1: statement1; case constant2: statement2; }"
      - "switch (expression) { case constant1: statement1; break; case constant2: statement2; break; default: defaultStatement; }"
      - "switch (expression) { case constant1: statement1; default: defaultStatement; }"
      - None of the above
    answer: 1
    explanation: "switch (expression) { case constant1: statement1; break; case constant2: statement2; break; default: defaultStatement; } is the correct answer to “What is the correct syntax for the 'switch' statement in C++”. This question is standard in competitive examination syllabi for Control Flow Statements In C Plus Plus."
    keyConcept: Control Flow Statements In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: "What will be the output of the following code: int x = 10; if (x > 5) cout << \"Hello\"; else cout << \"Goodbye\"; in C++?"
    options:
      - Compilation error
      - HelloGoodbye
      - Hello
      - Goodbye
    answer: 2
    explanation: "Hello is the correct answer to “What will be the output of the following code: int x = 10; if (x > 5) cout << \"Hello\"; else cout << \"Goodbye\"; in C++”. This question is standard in competitive examination syllabi for Control Flow Statements In C Plus Plus."
    keyConcept: Control Flow Statements In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What does the 'break' statement do in a loop in C++?
    options:
      - Skips the current iteration
      - Skips the next iteration
      - Starts the next iteration
      - Terminates the loop
    answer: 3
    explanation: Terminates the loop is the correct answer to “What does the 'break' statement do in a loop in C++”. This question is standard in competitive examination syllabi for Control Flow Statements In C Plus Plus.
    keyConcept: Control Flow Statements In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What is the correct syntax for the 'while' loop in C++?
    options:
      - while (condition) { statement; }
      - while (condition) then { statement; }
      - while { condition } { statement; }
      - while { statement; } condition
    answer: 0
    explanation: while (condition) { statement; } is the correct answer to “What is the correct syntax for the 'while' loop in C++”. This question is standard in competitive examination syllabi for Control Flow Statements In C Plus Plus.
    keyConcept: Control Flow Statements In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: "What will be the output of the following code: int i = 0; while (i < 5) { cout << i << \" \"; i++; } in C++?"
    options:
      - Compilation error
      - 1 2 3 4
      - 0 1 2 3
      - 0 1 2 3 4
    answer: 3
    explanation: "0 1 2 3 4 is the correct answer to “What will be the output of the following code: int i = 0; while (i < 5) { cout << i << \" \"; i++; } in C++”. This question is standard in competitive examination syllabi for Control Flow Statements In C Plus Plus."
    keyConcept: Control Flow Statements In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What is the purpose of the 'default' case in a 'switch' statement in C++?
    options:
      - Executes before any other cases
      - Executes after all other cases
      - Executes when no case matches
      - Executes instead of the 'case' cases
    answer: 2
    explanation: Executes when no case matches is the correct answer to “What is the purpose of the 'default' case in a 'switch' statement in C++”. This question is standard in competitive examination syllabi for Control Flow Statements In C Plus Plus.
    keyConcept: Control Flow Statements In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: What is the syntax for the 'do-while' loop in C++?
    options:
      - do { condition; } while (statement)
      - do { statement; } while (condition)
      - do (condition) { statement; } while
      - None of the above
    answer: 1
    explanation: do { statement; } while (condition) is the correct answer to “What is the syntax for the 'do-while' loop in C++”. This question is standard in competitive examination syllabi for Control Flow Statements In C Plus Plus.
    keyConcept: Control Flow Statements In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: In C++, what is the difference between the 'while' loop and the 'do-while' loop?
    options:
      - "'while' loop always executes at least once, 'do-while' loop may not"
      - "'while' loop always executes at least once, 'do-while' loop always does"
      - "'while' loop checks condition before execution, 'do-while' loop checks after execution"
      - None of the above
    answer: 2
    explanation: "'while' loop checks condition before execution, 'do-while' loop checks after execution is the correct answer to “In C++, what is the difference between the 'while' loop and the 'do-while' loop”. This question is standard in competitive examination syllabi for Control Flow Statements In C Plus Plus."
    keyConcept: Control Flow Statements In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What is the purpose of the 'if-else if-else' statement in C++?
    options:
      - Provides multiple conditions to be tested
      - Executes multiple statements
      - Executes only one statement
      - Terminates the program
    answer: 0
    explanation: Provides multiple conditions to be tested is the correct answer to “What is the purpose of the 'if-else if-else' statement in C++”. This question is standard in competitive examination syllabi for Control Flow Statements In C Plus Plus.
    keyConcept: Control Flow Statements In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: "What will be the output of the following code: for (int i = 0; i < 3; ++i) { for (int j = 0; j < 2; ++j) { cout << i << j << \" \"; } }?"
    options:
      - Compilation error
      - 00 10 20 01 11
      - 00 11 22 33 44
      - 00 01 10 11 20 21
    answer: 3
    explanation: "00 01 10 11 20 21 is the correct answer to “What will be the output of the following code: for (int i = 0; i < 3; ++i) { for (int j = 0; j < 2; ++j) { cout << i << j << \" \"; } }”. This question is standard in competitive examination syllabi for Control Flow Statements In C Plus Plus."
    keyConcept: Control Flow Statements In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What is the syntax for the 'if-else' statement in C++?
    options:
      - if (condition) then { statement; } else { statement; }
      - if { condition } { statement; } else { statement; }
      - if (condition) { statement; } else { statement; }
      - if (condition) { statement; } else statement
    answer: 2
    explanation: if (condition) { statement; } else { statement; } is the correct answer to “What is the syntax for the 'if-else' statement in C++”. This question is standard in competitive examination syllabi for Control Flow Statements In C Plus Plus.
    keyConcept: Control Flow Statements In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What does the 'else if' statement allow in C++?
    options:
      - Skips to the next iteration
      - Additional condition checks
      - Terminate the program
      - None of the above
    answer: 1
    explanation: Additional condition checks is the correct answer to “What does the 'else if' statement allow in C++”. This question is standard in competitive examination syllabi for Control Flow Statements In C Plus Plus.
    keyConcept: Control Flow Statements In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: "What is the output of the following code: int x = 10; if (x == 10) { cout << \"x is 10\"; } else { cout << \"x is not 10\"; } in C++?"
    options:
      - No output
      - Compilation error
      - x is 10
      - x is not 10
    answer: 2
    explanation: "x is 10 is the correct answer to “What is the output of the following code: int x = 10; if (x == 10) { cout << \"x is 10\"; } else { cout << \"x is not 10\"; } in C++”. This question is standard in competitive examination syllabi for Control Flow Statements In C Plus Plus."
    keyConcept: Control Flow Statements In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: What is the purpose of the 'continue' statement in a loop in C++?
    options:
      - Terminates the loop
      - Skips the remaining code in the loop
      - Restarts the loop
      - Skips the current iteration
    answer: 3
    explanation: Skips the current iteration is the correct answer to “What is the purpose of the 'continue' statement in a loop in C++”. This question is standard in competitive examination syllabi for Control Flow Statements In C Plus Plus.
    keyConcept: Control Flow Statements In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: "What will be the output of the following code: int i = 0; while (i < 3) { cout << i << \" \"; i++; } in C++?"
    options:
      - Compilation error
      - 1 2 3
      - 0 1 2 3
      - 0 1 2
    answer: 3
    explanation: "0 1 2 is the correct answer to “What will be the output of the following code: int i = 0; while (i < 3) { cout << i << \" \"; i++; } in C++”. This question is standard in competitive examination syllabi for Control Flow Statements In C Plus Plus."
    keyConcept: Control Flow Statements In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: "What will be the output of the following code: for (int i = 0; i < 5; ++i) { if (i == 2) continue; cout << i << \" \"; } in C++?"
    options:
      - 0 1 2 3 4
      - 0 1 3 4
      - Compilation error
      - 1 2 3 4 5
    answer: 1
    explanation: "0 1 3 4 is the correct answer to “What will be the output of the following code: for (int i = 0; i < 5; ++i) { if (i == 2) continue; cout << i << \" \"; } in C++”. This question is standard in competitive examination syllabi for Control Flow Statements In C Plus Plus."
    keyConcept: Control Flow Statements In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: "What is the output of the following code: int x = 5; switch (x) { case 1: cout << \"One\"; break; case 5: cout << \"Five\"; break; } in C++?"
    options:
      - One
      - Compilation error
      - No output
      - Five
    answer: 3
    explanation: "Five is the correct answer to “What is the output of the following code: int x = 5; switch (x) { case 1: cout << \"One\"; break; case 5: cout << \"Five\"; break; } in C++”. This question is standard in competitive examination syllabi for Control Flow Statements In C Plus Plus."
    keyConcept: Control Flow Statements In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: What is the syntax for the 'for' loop in C++?
    options:
      - for (statement; initialization; condition; update)
      - for { initialization; condition; update } { statement; }
      - for (condition; update; initialization) { statement; }
      - for (initialization; condition; update) { statement; }
    answer: 3
    explanation: for (initialization; condition; update) { statement; } is the correct answer to “What is the syntax for the 'for' loop in C++”. This question is standard in competitive examination syllabi for Control Flow Statements In C Plus Plus.
    keyConcept: Control Flow Statements In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: What does the 'do' keyword represent in the 'do-while' loop syntax in C++?
    options:
      - Represents the loop initialization
      - Represents the loop body
      - Represents the loop incrementation
      - None of the above
    answer: 1
    explanation: Represents the loop body is the correct answer to “What does the 'do' keyword represent in the 'do-while' loop syntax in C++”. This question is standard in competitive examination syllabi for Control Flow Statements In C Plus Plus.
    keyConcept: Control Flow Statements In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: What is the syntax for the 'if' statement with multiple conditions in C++?
    options:
      - if { condition1 } && { condition2 } { statement; }
      - if { condition1 && condition2 } { statement; }
      - if (condition1 && condition2) { statement; }
      - if (condition1) && (condition2) { statement; }
    answer: 2
    explanation: if (condition1 && condition2) { statement; } is the correct answer to “What is the syntax for the 'if' statement with multiple conditions in C++”. This question is standard in competitive examination syllabi for Control Flow Statements In C Plus Plus.
    keyConcept: Control Flow Statements In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: "What will be the output of the following code: int x = 5; x > 2 ? cout << \"Yes\" : cout << \"No\"; in C++?"
    options:
      - "No"
      - "5"
      - "2"
      - "Yes"
    answer: 3
    explanation: "Yes is the correct answer to “What will be the output of the following code: int x = 5; x > 2 ? cout << \"Yes\" : cout << \"No\"; in C++”. This question is standard in competitive examination syllabi for Control Flow Statements In C Plus Plus."
    keyConcept: Control Flow Statements In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: In C++, what is the purpose of the 'do-while' loop?
    options:
      - Terminates the loop
      - Executes a block of code only once
      - Executes a block of code repeatedly until a condition becomes false
      - Executes a block of code repeatedly until a condition becomes true
    answer: 2
    explanation: Executes a block of code repeatedly until a condition becomes false is the correct answer to “In C++, what is the purpose of the 'do-while' loop”. This question is standard in competitive examination syllabi for Control Flow Statements In C Plus Plus.
    keyConcept: Control Flow Statements In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: "What will be the output of the following code: for (int i = 0; i < 5; ++i) { if (i == 3) continue; cout << i << \" \"; } in C++?"
    options:
      - 0 1 2 3 4
      - 0 1 2 3
      - Compilation error
      - 0 1 2 4
    answer: 3
    explanation: "0 1 2 4 is the correct answer to “What will be the output of the following code: for (int i = 0; i < 5; ++i) { if (i == 3) continue; cout << i << \" \"; } in C++”. This question is standard in competitive examination syllabi for Control Flow Statements In C Plus Plus."
    keyConcept: Control Flow Statements In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: What is the syntax for the 'else if' statement in C++?
    options:
      - else if (condition) { statement; }
      - if else (condition) { statement; }
      - elseif (condition) { statement; }
      - else (condition) { statement; }
    answer: 0
    explanation: else if (condition) { statement; } is the correct answer to “What is the syntax for the 'else if' statement in C++”. This question is standard in competitive examination syllabi for Control Flow Statements In C Plus Plus.
    keyConcept: Control Flow Statements In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: What does the 'default' case represent in a 'switch' statement in C++?
    options:
      - Terminates the switch block
      - Executes only when all other cases match
      - Executes after every other case
      - Executes when no other case matches
    answer: 3
    explanation: Executes when no other case matches is the correct answer to “What does the 'default' case represent in a 'switch' statement in C++”. This question is standard in competitive examination syllabi for Control Flow Statements In C Plus Plus.
    keyConcept: Control Flow Statements In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: What is the correct syntax for the 'do-while' loop in C++?
    options:
      - while { condition } { statement; }
      - do { condition; } while (statement)
      - do { statement; } while (condition)
      - do (condition) { statement; } while
    answer: 2
    explanation: do { statement; } while (condition) is the correct answer to “What is the correct syntax for the 'do-while' loop in C++”. This question is standard in competitive examination syllabi for Control Flow Statements In C Plus Plus.
    keyConcept: Control Flow Statements In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: What is the syntax for the 'switch' statement in C++?
    options:
      - "switch (expression) { case constant1: statement1; case constant2: statement2; default: defaultStatement; }"
      - "switch (expression) { case constant1: statement1; case constant2: statement2; }"
      - "switch (expression) { case constant1: statement1; default: defaultStatement; }"
      - "switch (expression) { case constant1: statement1; break; case constant2: statement2; break; default: defaultStatement; }"
    answer: 3
    explanation: "switch (expression) { case constant1: statement1; break; case constant2: statement2; break; default: defaultStatement; } is the correct answer to “What is the syntax for the 'switch' statement in C++”. This question is standard in competitive examination syllabi for Control Flow Statements In C Plus Plus."
    keyConcept: Control Flow Statements In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: In C++, what is the purpose of the 'if-else' statement?
    options:
      - Allows execution of different blocks of code based on a condition
      - Terminates the program
      - Executes the same block of code repeatedly
      - Skips the current iteration in a loop
    answer: 0
    explanation: Allows execution of different blocks of code based on a condition is the correct answer to “In C++, what is the purpose of the 'if-else' statement”. This question is standard in competitive examination syllabi for Control Flow Statements In C Plus Plus.
    keyConcept: Control Flow Statements In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: "What will be the output of the following code: int i = 5; if (i != 5) cout << \"Not equal\"; else cout << \"Equal\"; in C++?"
    options:
      - Compilation error
      - "5"
      - Not equal
      - Equal
    answer: 3
    explanation: "Equal is the correct answer to “What will be the output of the following code: int i = 5; if (i != 5) cout << \"Not equal\"; else cout << \"Equal\"; in C++”. This question is standard in competitive examination syllabi for Control Flow Statements In C Plus Plus."
    keyConcept: Control Flow Statements In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: What is the purpose of the 'if' statement in C++?
    options:
      - Executes a block of code repeatedly until a condition becomes true
      - Executes a block of code only once
      - Executes a block of code if a condition is true
      - Terminates the program
    answer: 2
    explanation: Executes a block of code if a condition is true is the correct answer to “What is the purpose of the 'if' statement in C++”. This question is standard in competitive examination syllabi for Control Flow Statements In C Plus Plus.
    keyConcept: Control Flow Statements In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: "What is the output of the following code: int i = 0; do { cout << i << \" \"; i++; } while (i < 3); in C++?"
    options:
      - 0 1 2 3
      - 0 1 2
      - Compilation error
      - 1 2 3
    answer: 1
    explanation: "0 1 2 is the correct answer to “What is the output of the following code: int i = 0; do { cout << i << \" \"; i++; } while (i < 3); in C++”. This question is standard in competitive examination syllabi for Control Flow Statements In C Plus Plus."
    keyConcept: Control Flow Statements In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: What does the 'continue' statement do in a loop in C++?
    options:
      - Restarts the loop
      - Skips the remaining code in the loop
      - Terminates the loop
      - Skips the current iteration and continues with the next iteration
    answer: 3
    explanation: Skips the current iteration and continues with the next iteration is the correct answer to “What does the 'continue' statement do in a loop in C++”. This question is standard in competitive examination syllabi for Control Flow Statements In C Plus Plus.
    keyConcept: Control Flow Statements In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: "What is the output of the following code: for (int i = 0; i < 5; ++i) { if (i == 3) continue; cout << i << \" \"; } in C++?"
    options:
      - 0 1 2 3
      - 0 1 2 3 4
      - 0 1 2 4
      - Compilation error
    answer: 2
    explanation: "0 1 2 4 is the correct answer to “What is the output of the following code: for (int i = 0; i < 5; ++i) { if (i == 3) continue; cout << i << \" \"; } in C++”. This question is standard in competitive examination syllabi for Control Flow Statements In C Plus Plus."
    keyConcept: Control Flow Statements In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: "What will be the output of the following code: for (int i = 0; i < 3; ++i) { for (int j = 0; j < 2; ++j) { cout << i << j << \" \"; } } in C++?"
    options:
      - 00 11 22 33
      - 00 10 20 01 11
      - Compilation error
      - 00 01 10 11
    answer: 3
    explanation: "00 01 10 11 is the correct answer to “What will be the output of the following code: for (int i = 0; i < 3; ++i) { for (int j = 0; j < 2; ++j) { cout << i << j << \" \"; } } in C++”. This question is standard in competitive examination syllabi for Control Flow Statements In C Plus Plus."
    keyConcept: Control Flow Statements In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: In C++, what is the syntax for the 'while' loop?
    options:
      - while (condition) { statement; } condition
      - while { statement; } condition
      - while (condition) { statement; }
      - while { condition } { statement; }
    answer: 2
    explanation: while (condition) { statement; } is the correct answer to “In C++, what is the syntax for the 'while' loop”. This question is standard in competitive examination syllabi for Control Flow Statements In C Plus Plus.
    keyConcept: Control Flow Statements In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
---


