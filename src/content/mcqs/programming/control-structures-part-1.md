---
title: Control Structures — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Control Structures — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: control-structures-part-1
topicName: Control Structures — Part 1
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
    question: How many times will a 'do-while' loop execute its body if the condition is initially false in C?
    options:
      - 0 times
      - 1 time
      - Infinite times
      - It depends on the loop body
    answer: 1
    explanation: "In C, a do-while loop executes its body at least once, even if the condition is initially false. This is because the condition is evaluated after the body of the loop has been executed. If the condition is false after the first execution of the body, the loop terminates. Therefore, even if the condition is initially false, the loop body will execute once before the condition is evaluated. So, the correct answer is Option B: 1 time ."
    keyConcept: Control Structures
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: "What is the output of given program if user enter value 99? #include<stdio.h> void main() { int i; printf(\"Enter a number:\"); scanf(\"%d\", &i); // 99 is given as input. if(i%5 == 0){ printf(\"nNumber entered is divisible by 5\"); } }"
    options:
      - Enter a number:99
      - Enter a number:99 Number is divisible by 5
      - complier error
      - Run time error
    answer: 0
    explanation: since this program isn't having any syntax error so program is executed. It is clearly seen that 99 is not divisible by 5. So if statement will not execute and program will terminate.
    keyConcept: Control Structures
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: "What is the output of given program if user enter \"xyz\" ? #include<stdio.h> void main() { float age, AgeInSeconds; printf(\"Enter your age:\"); scanf(\"%f\", &age); AgeInSeconds = 365 * 24 * 60 * 60 * age; printf(\"You have lived for %f seconds\", AgeInSeconds); }"
    options:
      - "Enter your age: xyz You have lived for 0 seconds"
      - "Enter your age: xyz You have lived for 0.00000 seconds"
      - "Enter your age: xyz \"after that program will stop\""
      - Run time error
    answer: 1
    explanation: When we give scanf () a "%f" format string, that means "We want you to try and get us a floating point number. When we provide input like 'xyz', it's not going to match anything, because 'xyz' is not a valid floating-point number.
    keyConcept: Control Structures
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: "What is the output of given program if user enter \"xyz\" ? #include<stdio.h> void main() { float age, AgeInSeconds; int value; printf(\"Enter your age:\"); value=scanf(\"%f\", &age); if(value==0){ printf(\"\\\\nYour age is not valid\"); } AgeInSeconds = 365 * 24 * 60 * 60 * age; printf(\"\\\\n You have lived for %f seconds\", AgeInSeconds); }"
    options:
      - "Enter your age : xyz Your age is not valid"
      - "Enter your age: xyz You have lived for 0 seconds"
      - "Enter your age: xyz Your age is not valid"
      - Complier error
    answer: 2
    explanation: When we give scanf () a "%f" format string, that means "We want you to try and get us a floating point number. When we provide input like 'xyz', it's not going to match anything, because 'xyz' is not a valid floating-point number.
    keyConcept: Control Structures
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: "What will be the output of the given program? #include<stdio.h> void main() { int i=10; printf(\"i=%d\", i); { int i=20; printf(\"i=%d\", i); i++; printf(\"i=%d\", i); } printf(\"i=%d\", i); }"
    options:
      - 10 10 11 11
      - 10 20 21 21
      - 10 20 21 10
      - 10 20 21 20
    answer: 2
    explanation: The scope of second declaration of i is limited to the block in which it is defined. Outside of the block variable is not recognized.
    keyConcept: Control Structures
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: "What will be the value of i and j after execution of following program? #include<stdio.h> void main() { int i, j; for(i=0,j=0;i<10,j<20;i++,j++){ printf(\"i=%d %t j=%d\", i, j); } }"
    options:
      - 10 10
      - 10 20
      - 20 20
      - Run time error
    answer: 2
    explanation: comma operator is executed from left to right so until j<20 for loop statement is true, so both i and j are incremented. So, i = 20 and j = 20.
    keyConcept: Control Structures
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: "What will be the output given program? #include<stdio.h> void main() { int i = -10; for(;i;printf(\"%d \", i++)); }"
    options:
      - "-10 to -1"
      - "-10 to infinite"
      - "-10 to 0"
      - Complier error
    answer: 0
    explanation: for loop can be initialized outside of the loop. Since until -1 value of i remain a non-zero value and hence the condition is true up to -1. But when i is further increases its value becomes 0 and condition becomes false and loop stops there. Note :In C any non-zero value(positive or negative) evaluates to true and only zero value is evaluates to false .
    keyConcept: Control Structures
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: "What will be the output of the given program? #include<stdio.h> void main() { int a=11,b=5; if(a=5) b++; printf(\"%d %d\", ++a, b++); }"
    options:
      - 12 7
      - 5 6
      - 6 6
      - 6 7
      - 11 6
    answer: 2
    explanation: Here if condition evaluates to true as a non-zero value i.e 5 is assigned to a. So the value of a = 5 and after increment value of b = 6. In printf statement due to pre-increment of a value of a printed will be 6 and due to post-increment of b value of b printed will be 6 and not 7.
    keyConcept: Control Structures
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: "What will be the output of the given program? #include<stdio.h> void main() { int value=0; if(value) printf(\"well done \"); printf(\"examveda\"); }"
    options:
      - well done examveda
      - examveda
      - complier error
      - None of these
    answer: 1
    explanation: As the value of variable value is zero so, it evaluates to false in the if condition.
    keyConcept: Control Structures
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: "What will be the output of the given program? #include<stdio.h> void main() { int value1, value2=100, num=100; if(value1=value2%5) num=5; printf(\"%d %d %d\", num, value1, value2); }"
    options:
      - 100 100 100
      - 5 0 20
      - 5 0 100
      - 100 0 100
      - 100 5 100
    answer: 3
    explanation: Expression value2%5 is equal to 0 and this value assigned to value1. Therefore if condition reduces to if ( 0 ) so it fails. Therefore body of if will not be executed i.e num = 5 will not be assigned. So at printf num = 100 , value1 = 0 and value2 = 100 .
    keyConcept: Control Structures
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: "What will be the output of the given program? #include<stdio.h> void main() { float num=5.6; switch(num){ case 5:printf(\"5\"); case 6:printf(\"6\"); default : printf(\"0\"); break; } printf(\"%d\", num); }"
    options:
      - 5 5.600000
      - 6 5.600000
      - 0 5.600000
      - Complier error
    answer: 3
    explanation: compiler error switch expression is not integral. switch statement cannot work on float value.
    keyConcept: Control Structures
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: "What will be the output of given program? #include<stdio.h> void main() { int a=1; if(\"%d=hello\", a); }"
    options:
      - complier error
      - no error no output
      - "0"
      - "1"
    answer: 1
    explanation: the if is conditional and it checks for expression whether it is zero or non-zero so it doesn't print any data it is clear and it is clearly seen that there is not a single syntax error therefore no complier error. After compling the program will be executed but there is not a single printf statement so it is executed but will not give any output.
    keyConcept: Control Structures
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: "What will be the output of given program? #include<stdio.h> void main() { int a=3; for(;a;printf(\"%d \", a--); }"
    options:
      - no output
      - 3 2 1 0
      - 3 2 1
      - infinity loop
    answer: 2
    explanation: Decrement operator in for loop statement are executed until the condition is true. So it is executed till " a " not equal to zero and printf statement inside for loop print a value of " a "
    keyConcept: Control Structures
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: "What will be the output of given program? #include<stdio.h> void main() { int i=1, j=-1; if((printf(\"%d\", i)) < (printf(\"%d\", j))) printf(\"%d\", i); else printf(\"%d\", j); }"
    options:
      - 1 -1 1
      - 1 -1 -1
      - "1"
      - "-1"
      - complier error
    answer: 0
    explanation: Here if statement is executed since we know that printf () function return the number of character print. Here printf ( " %d ", i ) return 2 because it print 1 and newline i.e 2. And, printf ( " %d ', j ) return 3 because it print -1 and newline i.e number of character is 3. Therefore if statement look like if( 2<3) yes its true. So if statement will execute. And answer is 1 -1 1.
    keyConcept: Control Structures
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What will be the output of the following piece of code? for(i = 0; i<10; i++); printf("%d", i);
    options:
      - "10"
      - "0123456789"
      - Syntax error
      - "0"
      - Infinite loop
    answer: 0
    explanation: Due to semicolon(;) at the end of the for loop, after 10 iterations for loop will be terminated and the result will be 10.
    keyConcept: Control Structures
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: "What will be the output of the following code? #include<stdio.h> void main() { int s=0; while(s++<10) { if(s<4 && s<9) continue; printf(\"%dt\", s); } }"
    options:
      - 1 2 3 4 5 6 7 8 9
      - 1 2 3 10
      - 4 5 6 7 8 9 10
      - 4 5 6 7 8 9
      - None of these
    answer: 2
    explanation: "' If ' statement only true when value of ' s ' is less then 4"
    keyConcept: Control Structures
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: Which command is used to skip the rest of a loop and carry on from the top of the loop again?
    options:
      - break
      - resume
      - continue
      - skip
      - None of these
    answer: 2
    explanation: "Syntax: continue ; Causes control to pass to the end of the innermost enclosing while, do, or for statement, at that point the loop continuation condition is re-evaluated. Example: for (i = 0; i < 20; i ++ ) { if (array[i] == 0) continue ; array[i] = 1/array[i]; }"
    keyConcept: Control Structures
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: "What is the output of the following program? #include<stdio.h> int c[10] = {1,2,3,4,5,6,7,8,9,10}; main() { int a, b=0; for(a=0;a<10;++a) if(c[a]%2 == 1) b+=c[a]; printf(\"%d\", b); }"
    options:
      - "20"
      - "24"
      - "25"
      - "30"
      - None of these
    answer: 2
    explanation: Condition if(c[a]%2 == 1) forces only odd numbers to add in the sum.
    keyConcept: Control Structures
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: What is the output of the following statements? for(i=10; i++; i<15) printf("%d ", i);
    options:
      - 10 11 12 13 14
      - 10 11 12 13 14 15
      - 9 10 11 12 13
      - Infinite loop
      - None of these
    answer: 3
    explanation: Since the condition is always true it will go to infinite loop.
    keyConcept: Control Structures
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What's wrong in the following statement, provided k is a variable of type int? for ( k = 2, k <=12, k ++)
    options:
      - The increment should always be ++k .
      - The variable must always be the letter i when using a for loop.
      - There should be a semicolon at the end of the statement.
      - The variable k can’t be initialized.
      - The commas should be semicolons.
    answer: 4
    explanation: In for loop the three statements parts are separated by two semicolons which are missing here.
    keyConcept: Control Structures
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: "Find the output of the following program. #include<stdio.h> void main() { int y=10; if(y++>9 && y++!=10 && y++>11) printf(\"%d\", y); else printf(\"%d\", y); }"
    options:
      - "11"
      - "12"
      - "13"
      - "14"
      - Compilation error
    answer: 2
    explanation: "Here if Statement is true and if statement executes left to right. Since its AND operator so all the condition should be check until it finds any false statement. Initially y = 10 In 1st condition: y++>9 which is true and y become 11 in next use. In 2nd condition: y++!=10 which is also true and y become 12 in next use In 3rd condition: y++>11 which is also true and y become 13 in next use After that printf statement will execute and print y = 13"
    keyConcept: Control Structures
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What is the right choice, if the following loop is implemented? void main() { int num = 0; do{ --num; printf("%d", num); }while( ++num >= 0 ); }
    options:
      - A run time error will be generated.
      - The program will not enter into the loop.
      - There will be a compilation error reported.
      - The loop will run infinitely many times.
      - Prints the value of 0 one time only.
    answer: 3
    explanation: As the value of num is decremented(--num) and again incremented(++num) and hence no change in num and it remains 0 only causing infinite loop.
    keyConcept: Control Structures
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: What will be the final value of the digit? void main() { int digit = 0; for( ; digit <= 9; ) digit++; digit *= 2; --digit; }
    options:
      - "-1"
      - "17"
      - "19"
      - "16"
      - "20"
    answer: 2
    explanation: First of all for loop have no braces so for loop on have only next line in its body. for( ; digit <= 9; ) digit++; After completing for loop digit = 10; next statement digit *= 2; i.e digit = digit * 2 = 20 ; next statement digit--; i.e 20-- => 19 So final value of digit is 19
    keyConcept: Control Structures
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: "What will be the following code's output if choice = 'R'? switch(choice) { case 'R' : printf(\"RED\"); case 'W' : printf(\"WHITE\"); case 'B' : printf(\"BLUE\"); default : printf(\"ERROR\");break; }"
    options:
      - RED
      - RED WHITE BLUE ERROR
      - RED ERROR
      - RED WHITE BLUE
      - ERROR
    answer: 1
    explanation: As the first option is matching, the cases are evaluated till the break statement is encountered or end of switch statement is encountered.
    keyConcept: Control Structures
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: "Consider the following program fragment: for(c=1, sum=0; c <= 10; c++) { scanf(\"%d\", &x); if( x < 0 ) continue; sum += x; } What would be the value of sum for the input 1, -1, 2, -2, 3, -3, 4, -4, 5, -5"
    options:
      - "-5"
      - "30"
      - "10"
      - "1"
      - "15"
    answer: 4
    explanation: It is summation of 1+2+3+4+5 as continue statement is going to be executed for every input of -1, -2, -3, -4, -5.
    keyConcept: Control Structures
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: "Consider the following code: void main() { int a[5] = {6,8,3,9,0}, i=0; if(i != 0) { break; printf(\"%d\", a[i]); } else printf(\"%d\", a[i++]); } What is the output of the above program?"
    options:
      - "6"
      - "8"
      - Runtime error
      - Syntax error
      - No output
    answer: 3
    explanation: break can't be used with selection control structures, but can used with repetitive( for, while ), or select control structure( switch ).
    keyConcept: Control Structures
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: "What will be the output of the following C code? #include <stdio.h> void main() { int i = 0; if (i == 0) { printf(\"Hello\"); break; } }"
    options:
      - Hello is printed infinite times
      - Hello
      - Varies
      - Compile time error
    answer: 3
    explanation: "The correct answer is D: Compile time error Here's why: In C, the `break` statement is used to exit loops (like `for`, `while`, or `do-while`) or `switch` statements. It's designed to jump out of these control structures. In this code, `break` is placed directly inside an `if` block, but not within any loop or `switch`. The C compiler will detect that `break` is used in an invalid context. Therefore, the program will result in a compile-time error , indicating that the `break` statement is misplaced. The program won't even run. In summary: The `break` statement is only valid inside loops or `switch` statements."
    keyConcept: Control Structures
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: "What will be the output of the following C code? #include <stdio.h> int x; void main() { if (x) printf(\"hi\"); else printf(\"how are u\"); }"
    options:
      - hi
      - how are you
      - compile time error
      - error
    answer: 1
    explanation: "#include <stdio.h> : This line includes the standard input/output library, which is needed for the printf function. int x; : This declares an integer variable named x . Crucially, x is declared globally but *not* initialized . This means it will have a default value. void main() : This is the main function where the program execution begins. if (x) : This is the core of the question. The if statement checks the value of x . In C, any non-zero value is treated as true , and zero is treated as false . printf(\"hi\"); : This line will be executed if the condition x is true . else printf(\"how are u\"); : This line will be executed if the condition x is false . Now, the key point is that since x is a global variable and is not explicitly initialized , it's automatically initialized to 0 by the C compiler. Therefore, the condition if (x) is equivalent to if (0) , which is false . So, the else block will be executed, and the program will print \"how are u\". Therefore, the correct answer is Option B: how are you"
    keyConcept: Control Structures
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: "What will be the output of the following C code? #include <stdio.h> int main() { switch (printf(\"Do\")) { case 1: printf(\"First\\n\"); break; case 2: printf(\"Second\\n\"); break; default: printf(\"Default\\n\"); break; } }"
    options:
      - Do
      - DoFirst
      - DoSecond
      - DoDefault
    answer: 2
    explanation: "In this code, the switch statement is evaluating the result of the printf(\"Do\") function call. The printf() function returns the number of characters printed. When printf(\"Do\") is executed, it prints \"Do\" to the standard output and returns the number of characters printed, which is 2. So, the switch statement evaluates the value 2. Since there is a case 2 in the switch statement, it will execute the corresponding code block, which prints \"Second\" to the standard output. Therefore, the correct output of the code will be DoSecond . So, the correct answer is Option C: DoSecond ."
    keyConcept: Control Structures
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: Which control structure is used to repeatedly execute a block of code in C?
    options:
      - for loop
      - if statement
      - switch case
      - while loop
    answer: 3
    explanation: while loop is the correct answer to “Which control structure is used to repeatedly execute a block of code in C”. This question is standard in competitive examination syllabi for Control Structures.
    keyConcept: Control Structures
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: In C, what is the purpose of the 'break' statement within a loop?
    options:
      - Continue to the next iteration
      - Exit the program
      - Terminate the loop and exit it
      - Skip the current iteration
    answer: 2
    explanation: Terminate the loop and exit it is the correct answer to “In C, what is the purpose of the 'break' statement within a loop”. This question is standard in competitive examination syllabi for Control Structures.
    keyConcept: Control Structures
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: What is the purpose of the 'else' statement in C's 'if-else' control structure?
    options:
      - Execute the 'if' block
      - Execute the 'else' block
      - Execute both 'if' and 'else' blocks
      - Skip the 'if' block
    answer: 1
    explanation: Execute the 'else' block is the correct answer to “What is the purpose of the 'else' statement in C's 'if-else' control structure”. This question is standard in competitive examination syllabi for Control Structures.
    keyConcept: Control Structures
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: Which control structure is used to make a decision between two or more alternatives in C?
    options:
      - switch case
      - for loop
      - if statement
      - while loop
    answer: 2
    explanation: if statement is the correct answer to “Which control structure is used to make a decision between two or more alternatives in C”. This question is standard in competitive examination syllabi for Control Structures.
    keyConcept: Control Structures
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: What is the result of the expression 5 > 3 && 4 < 6 in C?
    options:
      - "TRUE"
      - "FALSE"
      - "1"
      - "0"
    answer: 0
    explanation: TRUE is the correct answer to “What is the result of the expression 5 > 3 && 4 < 6 in C”. This question is standard in competitive examination syllabi for Control Structures.
    keyConcept: Control Structures
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: In C, what happens if the 'default' case is missing in a 'switch' statement?
    options:
      - It causes a compilation error
      - It has no effect
      - It executes the 'default' case by default
      - It generates a runtime error
    answer: 1
    explanation: It has no effect is the correct answer to “In C, what happens if the 'default' case is missing in a 'switch' statement”. This question is standard in competitive examination syllabi for Control Structures.
    keyConcept: Control Structures
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: What is the purpose of the 'continue' statement in C?
    options:
      - Skip the loop
      - Exit the program
      - Skip the current iteration
      - Exit the loop
    answer: 2
    explanation: Skip the current iteration is the correct answer to “What is the purpose of the 'continue' statement in C”. This question is standard in competitive examination syllabi for Control Structures.
    keyConcept: Control Structures
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: What is the result of the expression !(5 == 5) in C?
    options:
      - "TRUE"
      - "FALSE"
      - "1"
      - "0"
    answer: 1
    explanation: FALSE is the correct answer to “What is the result of the expression !(5 == 5) in C”. This question is standard in competitive examination syllabi for Control Structures.
    keyConcept: Control Structures
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: In C, which control structure is used to iterate through a collection of items, such as an array or a list?
    options:
      - for loop
      - if statement
      - switch case
      - while loop
    answer: 0
    explanation: for loop is the correct answer to “In C, which control structure is used to iterate through a collection of items, such as an array or a list”. This question is standard in competitive examination syllabi for Control Structures.
    keyConcept: Control Structures
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: What is the purpose of the 'if' control structure in C?
    options:
      - Looping
      - Decision making
      - Function declaration
      - Error handling
    answer: 1
    explanation: Decision making is the correct answer to “What is the purpose of the 'if' control structure in C”. This question is standard in competitive examination syllabi for Control Structures.
    keyConcept: Control Structures
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: In C, what happens if the 'break' statement is used outside of a loop or switch statement?
    options:
      - It has no effect
      - It generates a compilation error
      - It exits the program
      - It generates a runtime error
    answer: 1
    explanation: It generates a compilation error is the correct answer to “In C, what happens if the 'break' statement is used outside of a loop or switch statement”. This question is standard in competitive examination syllabi for Control Structures.
    keyConcept: Control Structures
    testedIn:
      - FPSC
      - PPSC
---


