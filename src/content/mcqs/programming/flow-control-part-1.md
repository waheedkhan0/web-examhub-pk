---
title: Flow Control — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Flow Control — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: flow-control-part-1
topicName: Flow Control — Part 1
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
    question: "Determine output: public class Test{ public static void main(String args[]){ int i, j; for(i=1, j=0;i<10;i++) j += i; System.out.println(i); } }"
    options:
      - "10"
      - "11"
      - "9"
      - "20"
      - None of these
    answer: 0
    explanation: In giving a program for loop will be break when i=10. Since after for only one statement execute ( j += i;) because brace is not mentioned and after that print statement will execute and print i=10
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: What will be the output? public class Test{ public static void main(String[] args){ int x=10, y=0; if(x && y){ System.out.print("TRUE"); } else{ System.out.print("FALSE"); } } }
    options:
      - "FALSE"
      - "TRUE"
      - Compilation Error
      - Runtime Error
    answer: 2
    explanation: bad operand types for binary operator '&&' if(x && y)
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: "What will be the value of y after execution of switch statement? public class Test{ public static void main(String[] args){ int x = 3, y = 4; switch(x + 3){ case 6: y = 0; case 7: y = 1; default: y += 1; } } }"
    options:
      - "1"
      - "2"
      - "3"
      - "4"
      - "0"
    answer: 1
    explanation: Initially 'x' = 3 and y =4 when switch statement execute switch(x + 3) case 6 will be executed and initialize y = 0 and after that case 7 will be executed (because there is no break statement so it will execute all the case) and initialize y = 1 and after that default case execute which add 1 in y and y become 2 .
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: "What will be the result of compiling and running the following code: public class Test{ public static void main(String... args) throws Exception{ Integer i = 34; int l = 34; if(i.equals(l)){ System.out.println(\"true\"); }else{ System.out.println(\"false\"); } } }"
    options:
      - "true"
      - "false"
      - Compiler error
      - None of these
    answer: 0
    explanation: Equals() method for the integer wrappers will only return true if the two primitive types and the two values are equal.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: public class Test{ public static void main(String [] args){ int x = 0; // insert code here do{ } while(x++ < y); System.out.println(x); } } Which option, inserted at line 4, produces the output 12?
    options:
      - int y = x
      - int y = 10
      - int y = 11
      - int y = 12
      - None of the above will allow compilation to succeed.
    answer: 2
    explanation: x reaches the value of 11, at which point the while test fails. x is then incremented (after the comparison test!), and the println() method runs. Hence, choice A, B, D, E, and F are incorrect based on the above point.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What will be the result? int i = 10; while(i++ <= 10){ i++; } System.out.print(i);
    options:
      - "10"
      - "11"
      - "12"
      - "13"
      - Line 5 will be never reached.
    answer: 3
    explanation: Initially i=10, when it reaches to while statement i++ <= 10 here i = 10 so condition become ture. For next use i become 11 and i++ statment will excuted and i become 12. Then again its go to while loop and check i++ <=10 here i = 12 so condition becomes fail and i become 13. Therefore when print statement will execute after while loop it Print 13
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What is the purpose of the "if" statement in Java?
    options:
      - To execute a block of code conditionally
      - To create loops
      - To declare variables
      - To define methods
    answer: 0
    explanation: To execute a block of code conditionally is the correct answer to “What is the purpose of the "if" statement in Java”. This question is standard in competitive examination syllabi for Flow Control.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: Which of the following is not a valid comparison operator in Java?
    options:
      - ">="
      - "=="
      - <=
      - "><"
    answer: 3
    explanation: ">< is the correct answer to “Which of the following is not a valid comparison operator in Java”. This question is standard in competitive examination syllabi for Flow Control."
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What is the output of the following code snippet? int x = 5; if (x > 3) { System.out.println("Hello"); }
    options:
      - No output
      - Error
      - Hello
      - "5"
    answer: 2
    explanation: Hello is the correct answer to “What is the output of the following code snippet? int x = 5; if (x > 3) { System.out.println("Hello"); }”. This question is standard in competitive examination syllabi for Flow Control.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: In Java, which statement is used to exit a loop prematurely?
    options:
      - return
      - break
      - exit
      - close
    answer: 1
    explanation: break is the correct answer to “In Java, which statement is used to exit a loop prematurely”. This question is standard in competitive examination syllabi for Flow Control.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What is the purpose of the "switch" statement in Java?
    options:
      - To define methods
      - To create loops
      - To perform different actions based on the value of an expression
      - To declare variables
    answer: 2
    explanation: To perform different actions based on the value of an expression is the correct answer to “What is the purpose of the "switch" statement in Java”. This question is standard in competitive examination syllabi for Flow Control.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: What is the default case in a "switch" statement used for?
    options:
      - Handling the case with value 0
      - Providing a default value for a variable
      - Terminating the switch statement
      - Handling cases where none of the specified cases match
    answer: 3
    explanation: Handling cases where none of the specified cases match is the correct answer to “What is the default case in a "switch" statement used for”. This question is standard in competitive examination syllabi for Flow Control.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: In Java, which loop is suitable when you want to execute a block of code a specific number of times?
    options:
      - for loop
      - while loop
      - do-while loop
      - switch loop
    answer: 0
    explanation: for loop is the correct answer to “In Java, which loop is suitable when you want to execute a block of code a specific number of times”. This question is standard in competitive examination syllabi for Flow Control.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What is the result of the following code snippet? int i = 1; while (i <= 5) { System.out.print(i + " "); i++; }
    options:
      - 5 4 3 2
      - 5 4 3 2 1
      - 1 2 3 4
      - 1 2 3 4 5
    answer: 3
    explanation: 1 2 3 4 5 is the correct answer to “What is the result of the following code snippet? int i = 1; while (i <= 5) { System.out.print(i + " "); i++; }”. This question is standard in competitive examination syllabi for Flow Control.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: Which of the following is true about the "do-while" loop in Java?
    options:
      - It is similar to the "while" loop
      - It does not support a loop condition
      - The loop body is executed at least once
      - It can only be used for counting
    answer: 2
    explanation: The loop body is executed at least once is the correct answer to “Which of the following is true about the "do-while" loop in Java”. This question is standard in competitive examination syllabi for Flow Control.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: In Java, what does the "continue" statement do?
    options:
      - Repeats the loop from the beginning
      - Skips the current iteration of a loop and continues to the next
      - Terminates the program
      - Return the output
    answer: 1
    explanation: Skips the current iteration of a loop and continues to the next is the correct answer to “In Java, what does the "continue" statement do”. This question is standard in competitive examination syllabi for Flow Control.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What is the output of the following code snippet? int j = 0; while (j < 5) { System.out.print(j + " "); j += 2; }
    options:
      - 5 4 3 2 1
      - 2 4 6 8 10
      - 0 2 4
      - 0 1 2 3 4
    answer: 2
    explanation: 0 2 4 is the correct answer to “What is the output of the following code snippet? int j = 0; while (j < 5) { System.out.print(j + " "); j += 2; }”. This question is standard in competitive examination syllabi for Flow Control.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: In Java, what does the "break" statement do in a loop?
    options:
      - Repeats the loop
      - Restarts the loop
      - Pauses the loop
      - Exits the loop prematurely
    answer: 3
    explanation: Exits the loop prematurely is the correct answer to “In Java, what does the "break" statement do in a loop”. This question is standard in competitive examination syllabi for Flow Control.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: What is the purpose of the "for-each" loop in Java?
    options:
      - Iterates through elements of an array or collection
      - Performs mathematical calculations
      - Declares variables
      - Defines methods
    answer: 0
    explanation: Iterates through elements of an array or collection is the correct answer to “What is the purpose of the "for-each" loop in Java”. This question is standard in competitive examination syllabi for Flow Control.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: In Java, what does the "default" keyword refer to in a "switch" statement?
    options:
      - The default loop condition
      - A reserved keyword with no specific meaning
      - The default value of a variable
      - The default case to execute when no other case matches
    answer: 3
    explanation: The default case to execute when no other case matches is the correct answer to “In Java, what does the "default" keyword refer to in a "switch" statement”. This question is standard in competitive examination syllabi for Flow Control.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: What is the result of the following code snippet? int k = 10; do { System.out.print(k + " "); k -= 2; } while (k > 0);
    options:
      - 10 8 6 4
      - 2 4 6 8 10
      - 10 8 6 4 2
      - 1 3 5 7 9
    answer: 2
    explanation: 10 8 6 4 2 is the correct answer to “What is the result of the following code snippet? int k = 10; do { System.out.print(k + " "); k -= 2; } while (k > 0);”. This question is standard in competitive examination syllabi for Flow Control.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: In Java, which loop is used when you want to execute a block of code as long as a condition is true?
    options:
      - for loop
      - while loop
      - switch loop
      - do-while loop
    answer: 1
    explanation: while loop is the correct answer to “In Java, which loop is used when you want to execute a block of code as long as a condition is true”. This question is standard in competitive examination syllabi for Flow Control.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: What is the output of the following code snippet? for (int m = 0; m < 5; m++) { if (m == 2) { continue; } System.out.print(m + " "); }
    options:
      - 0 2 4
      - 2 4
      - 0 1 3 4
      - 0 1 2 3 4
    answer: 2
    explanation: 0 1 3 4 is the correct answer to “What is the output of the following code snippet? for (int m = 0; m < 5; m++) { if (m == 2) { continue; } System.out.print(m + " "); }”. This question is standard in competitive examination syllabi for Flow Control.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: In Java, what does the "switch" statement evaluate to determine which case to execute?
    options:
      - A boolean expression
      - A string value
      - A floating-point number
      - An expression of integral or enumerated type
    answer: 3
    explanation: An expression of integral or enumerated type is the correct answer to “In Java, what does the "switch" statement evaluate to determine which case to execute”. This question is standard in competitive examination syllabi for Flow Control.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: What is the purpose of the "if-else" statement in Java?
    options:
      - To execute one block of code if a condition is true and another block if it's false
      - To declare variables
      - To create loops
      - To define methods
    answer: 0
    explanation: To execute one block of code if a condition is true and another block if it's false is the correct answer to “What is the purpose of the "if-else" statement in Java”. This question is standard in competitive examination syllabi for Flow Control.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Which of the following is a valid way to create an infinite loop in Java?
    options:
      - switch (1) { /* loop body */ }
      - do { /* loop body */ } while (false)
      - for (int i = 0; i < 5; i--) { /* loop body */ }
      - while (true) { /* loop body */ }
    answer: 3
    explanation: while (true) { /* loop body */ } is the correct answer to “Which of the following is a valid way to create an infinite loop in Java”. This question is standard in competitive examination syllabi for Flow Control.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: In Java, what is the purpose of the "if-else if-else" statement?
    options:
      - To create loops
      - To define methods
      - To evaluate multiple conditions and execute the corresponding block of code
      - To declare variables
    answer: 2
    explanation: To evaluate multiple conditions and execute the corresponding block of code is the correct answer to “In Java, what is the purpose of the "if-else if-else" statement”. This question is standard in competitive examination syllabi for Flow Control.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: What is the output of the following code snippet? int n = 5; for (int i = 0; i < n; i++) { System.out.print(i + " "); }
    options:
      - 5 4 3 2 1
      - 0 1 2 3 4
      - 1 2 3 4 5
      - 5 4 3 2 1 0
    answer: 1
    explanation: 0 1 2 3 4 is the correct answer to “What is the output of the following code snippet? int n = 5; for (int i = 0; i < n; i++) { System.out.print(i + " "); }”. This question is standard in competitive examination syllabi for Flow Control.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: In Java, which loop is used when you want to execute a block of code at least once?
    options:
      - switch loop
      - for loop
      - do-while loop
      - while loop
    answer: 2
    explanation: do-while loop is the correct answer to “In Java, which loop is used when you want to execute a block of code at least once”. This question is standard in competitive examination syllabi for Flow Control.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: What does the "else" statement in an "if-else" statement block indicate?
    options:
      - A syntax error
      - A comment
      - The end of the if statement
      - The block of code to execute if the condition is false
    answer: 3
    explanation: The block of code to execute if the condition is false is the correct answer to “What does the "else" statement in an "if-else" statement block indicate”. This question is standard in competitive examination syllabi for Flow Control.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: In Java, what does the "continue" statement do in a loop?
    options:
      - Skips the current iteration of a loop and continues to the next
      - Exits the loop immediately
      - Repeats the loop from the beginning
      - Terminates the program
    answer: 0
    explanation: Skips the current iteration of a loop and continues to the next is the correct answer to “In Java, what does the "continue" statement do in a loop”. This question is standard in competitive examination syllabi for Flow Control.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: What is the purpose of the "break" statement in a "switch" statement?
    options:
      - Terminates the program
      - Repeats the case statements
      - Exits the loop containing the switch statement
      - Exits the switch statement prematurely
    answer: 3
    explanation: Exits the switch statement prematurely is the correct answer to “What is the purpose of the "break" statement in a "switch" statement”. This question is standard in competitive examination syllabi for Flow Control.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: In Java, what does the "default" case in a "switch" statement do?
    options:
      - Indicates the end of the switch statement
      - Repeats the switch statement
      - Provides a block of code to execute when none of the cases match
      - Throws an exception
    answer: 2
    explanation: Provides a block of code to execute when none of the cases match is the correct answer to “In Java, what does the "default" case in a "switch" statement do”. This question is standard in competitive examination syllabi for Flow Control.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: "What is the output of the following code snippet? int p = 3; switch (p) { case 1: System.out.print(\"One\"); case 2: System.out.print(\"Two\"); default: System.out.print(\"Default\"); }"
    options:
      - Default
      - OneTwoDefault
      - One
      - One Default
    answer: 1
    explanation: "OneTwoDefault is the correct answer to “What is the output of the following code snippet? int p = 3; switch (p) { case 1: System.out.print(\"One\"); case 2: System.out.print(\"Two\"); default: System.out.print(\"Default\"); }”. This question is standard in competitive examination syllabi for Flow Control."
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: In Java, what is the purpose of the "for-each" loop?
    options:
      - Defining methods
      - Declaring variables
      - Iterating over elements of an array or collection
      - Performing mathematical calculations
    answer: 2
    explanation: Iterating over elements of an array or collection is the correct answer to “In Java, what is the purpose of the "for-each" loop”. This question is standard in competitive examination syllabi for Flow Control.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: Which keyword is used to exit a loop in Java?
    options:
      - continue
      - return
      - exit
      - break
    answer: 3
    explanation: break is the correct answer to “Which keyword is used to exit a loop in Java”. This question is standard in competitive examination syllabi for Flow Control.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: "Determine output: public class Test{ public static void main(String args[]){ int i; for(i = 1; i < 6; i++){ if(i > 3) continue ; } System.out.println(i); } }"
    options:
      - "2"
      - "3"
      - "4"
      - "5"
      - "6"
    answer: 4
    explanation: "6 is the correct answer to “Determine output: public class Test{ public static void main(String args[]){ int i; for(i = 1; i < 6; i++){ if(i > 3) continue ; } System.out.println(i); } }”. This question is standard in competitive examination syllabi for Flow Control."
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: In java, ............ can only test for equality, where as .......... can evaluate any type of the Boolean expression.
    options:
      - switch, if
      - if, switch
      - if, break
      - continue, if
    answer: 0
    explanation: switch, if is the correct answer to “In java, ............ can only test for equality, where as .......... can evaluate any type of the Boolean expression.”. This question is standard in competitive examination syllabi for Flow Control.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: What will be the output of the following program? public class Test{ public static void main(String args[]){ int i = 0, j = 5 ; for( ; (i < 3) && (j++ < 10) ; i++ ){ System.out.print(" " + i + " " + j ); } System.out.print(" " + i + " " + j ); } }
    options:
      - 0 6 1 7 2 8 3 8
      - 0 6 1 7 2 8 3 9
      - 0 6 1 5 2 5 3 5
      - Compilation Error
    answer: 0
    explanation: 0 6 1 7 2 8 3 8 is the correct answer to “What will be the output of the following program? public class Test{ public static void main(String args[]){ int i = 0, j = 5 ; for( ; (i < 3) && (j++ < 10) ; i++ ){ System.out.print(" " + i + " " + j ); } System.out.print(" " + i + " " + j ); } }”. This question is standard in competitive examination syllabi for Flow Control.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: Consider the following program written in Java. class Test{ public static void main(String args[]){ int x=7; if(x==2); // Note the semicolon System.out.println("NumberSeven"); System.out.println("NotSeven"); } } What would the output of the program be?
    options:
      - NumberSeven NotSeven
      - NumberSeven
      - NotSeven
      - Error
      - "7"
    answer: 0
    explanation: NumberSeven NotSeven is the correct answer to “Consider the following program written in Java. class Test{ public static void main(String args[]){ int x=7; if(x==2); // Note the semicolon System.out.println("NumberSeven"); System.out.println("NotSeven"); } } What would the output of the program be”. This question is standard in competitive examination syllabi for Flow Control.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
---


