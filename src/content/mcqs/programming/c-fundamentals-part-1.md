---
title: C Fundamentals — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on C Fundamentals — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: c-fundamentals-part-1
topicName: C Fundamentals — Part 1
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
    question: What is the primary purpose of a function prototype in C?
    options:
      - Declare a variable
      - Declare a function
      - Define a function
      - Assign a value
    answer: 1
    explanation: "The primary purpose of a function prototype in C is to declare a function . It serves as a forward declaration of the function, providing information about the function's name, return type, and the types of its parameters. This declaration allows the compiler to understand how the function should be called and used in the program before the actual function definition is encountered. So, the correct answer is: Option B: Declare a function In C, a function prototype typically looks like this: return_type function_name(parameter_type1, parameter_type2, ...); Here's an example: int add(int a, int b); This prototype informs the compiler that there's a function named \"add\" that returns an integer and takes two integer parameters. It doesn't define the function's implementation; it simply declares its existence and signature."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: Which character is used to indicate the end of a statement in C?
    options:
      - .
      - ""
      - ":"
      - ","
    answer: 1
    explanation: "The character used to indicate the end of a statement in C is ; . This semicolon is a crucial part of C syntax as it separates statements and tells the compiler where one statement ends and the next one begins. So, the correct answer is: Option B: ; In C programming, you terminate a statement with a semicolon. For example: #include <stdio.h> int main() { int x = 5; printf(\"Hello, World!\"); return 0; } In the above code, the semicolon at the end of each line signifies the end of the respective statement."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Which data type is used to represent a single character in C?
    options:
      - char
      - int
      - float
      - double
    answer: 0
    explanation: "The data type used to represent a single character in C is char . The char data type is specifically designed to store individual characters, such as letters, digits, and symbols. So, the correct answer is: Option A: char In C programming, you declare a character variable like this: char myChar = 'A'; Here, myChar is a variable of type char , and it stores the character 'A'. The char data type is essential for working with characters and strings in C."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What is the correct syntax for declaring a variable in C?
    options:
      - int variable_name
      - variable_name = 5
      - variable_name int
      - int = variable_name
    answer: 0
    explanation: "The correct syntax for declaring a variable in C is Option A: int variable_name; . In C, you declare a variable by specifying its data type followed by the variable name and a semicolon to terminate the declaration. So, the correct answer is: Option A: int variable_name; Here's an example: int age; In this example, we declare an integer variable named \"age.\" This syntax informs the compiler that \"age\" is of type int . Option B is incorrect because it's an assignment statement, not a declaration. Option C and Option D have incorrect syntax and are not valid ways to declare a variable in C."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: Which symbol is used for the 'modulo' operation in C?
    options:
      - "%"
      - /
      - "*"
      - ^
    answer: 0
    explanation: "The symbol used for the 'modulo' operation in C is % . The '%' symbol calculates the remainder when one number is divided by another and is commonly used for tasks such as checking for even or odd numbers and cycling through a range of values. So, the correct answer is: Option A: % Here's an example of using the modulo operator in C: int remainder = 10 % 3; In this example, the value of 'remainder' will be 1 because 10 divided by 3 is 3 with a remainder of 1."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What is the default return type of a function in C if not specified?
    options:
      - int
      - void
      - char
      - float
    answer: 0
    explanation: "The default return type of a function in C if not specified is Option A: int . In C, if you don't explicitly specify the return type of a function, it is assumed to return an integer ( int ) by default. So, the correct answer is: Option A: int For example, if you have a function like this: myFunction() { // Function code } The return type is assumed to be int , and you can call it as if it returns an integer. If you want a function to return nothing, you explicitly specify Option B: void as the return type."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: Which operator is used for 'logical AND' in C?
    options:
      - "&&"
      - "||"
      - "&"
      - "|"
    answer: 0
    explanation: "The operator used for 'logical AND' in C is Option A: && . The && operator is used to perform a logical AND operation, which returns true if both of its operands are true, and false otherwise. So, the correct answer is: Option A: && Here's an example of using the logical AND operator in C: if (x && y) { // Code to be executed if both x and y are true } In this example, the code within the if statement will be executed only if both 'x' and 'y' are true."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What is the purpose of the 'sizeof' operator in C?
    options:
      - Calculate square root
      - Determine size
      - Perform division
      - Convert to string
    answer: 1
    explanation: "The purpose of the 'sizeof' operator in C is to determine the size of a data type or a variable in bytes. It is used to find out how much memory is allocated to a specific data type or an object in memory. So, the correct answer is: Option B: Determine size Here's an example of how 'sizeof' operator is used in C: int size = sizeof(int); printf(\"Size of int: %d\\n\", size); In this example, 'sizeof(int)' will return the size (in bytes) of the 'int' data type, and it will be stored in the 'size' variable. It is a valuable operator when you need to work with memory allocation and management in C."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: In C, which type of variable should be used to store decimal numbers?
    options:
      - char
      - int
      - float
      - double
    answer: 2
    explanation: "In C, you can indeed use the float data type to store decimal numbers. However, it's important to note that float is typically used for single-precision floating-point numbers, which have a lower precision and a more limited range compared to double . So, to clarify: If you require high precision and a wide range for storing decimal numbers, Option D: double is the more common choice. Option C: float is a valid choice when you can tolerate slightly lower precision and a somewhat limited range, or when memory constraints are a concern, as float typically requires less memory than double . In summary, both float and double can be used to store decimal numbers, but the choice between them depends on your specific requirements for precision and range."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: Which header file should be included for input and output functions in C?
    options:
      - <stdlib.h>
      - <stdio.h>
      - <math.h>
      - <string.h>
    answer: 1
    explanation: "The header file that should be included for input and output functions in C is Option B: <stdio.h> . The <stdio.h> header file provides declarations for functions like printf , scanf , getchar , and many others that are used for input and output operations in C. So, the correct answer is: Option B: <stdio.h> Including this header file at the beginning of your C program allows you to use standard input and output functions to interact with the user and manipulate data."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What is the purpose of the 'break' statement in C?
    options:
      - End the program
      - Skip the loop
      - Exit a function
      - Exit a loop
    answer: 3
    explanation: "The purpose of the 'break' statement in C is to exit a loop . When 'break' is encountered within a loop (such as 'for' or 'while' loop), it immediately terminates the loop and continues with the next statement after the loop's body. So, the correct answer is: Option D: Exit a loop Here's an example of using the 'break' statement to exit a loop in C: for (int i = 1; i <= 10; i++) { if (i == 5) { break; // Exit the loop when i is equal to 5 } printf(\"%d \", i); }"
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: Which of the following is not a valid C keyword?
    options:
      - main
      - if
      - printf
      - for
    answer: 2
    explanation: "Among the options provided, Option C: printf is not a valid C keyword. C keywords are reserved words that have special meanings in the language, and they cannot be used as identifiers (such as variable names or function names). Keywords like 'main,' 'if,' and 'for' are all valid C keywords with specific purposes in the language. However, 'printf' is not a keyword; it's a standard C library function used for outputting formatted text. It can be used as a function name in C code. So, the correct answer is: Option C: printf"
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What is the maximum number of arguments that can be passed to a C function?
    options:
      - "10"
      - "255"
      - "127"
      - No limit
    answer: 3
    explanation: "The maximum number of arguments that can be passed to a C function is Option D: No limit . In C, there is no hard-coded limit on the number of arguments you can pass to a function. However, practical limitations may exist based on factors like system memory and stack size. So, the correct answer is: Option D: No limit"
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: Which operator is used to access the value stored at a pointer address in C?
    options:
      - "*"
      - "&"
      - "->"
      - .
    answer: 0
    explanation: "The operator used to access the value stored at a pointer address in C is Option A: * . The asterisk () operator is known as the \"dereference\" operator, and it is used to retrieve the value that a pointer is pointing to."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What does the 'void' keyword indicate in a C function declaration?
    options:
      - Empty return type
      - Integer return
      - Floating-point return
      - String return
    answer: 0
    explanation: "The 'void' keyword in a C function declaration indicates Option A: Empty return type . When a function is declared with 'void' as its return type, it means that the function does not return any value."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: Which character is used to represent a comment in C code?
    options:
      - "#"
      - //
      - /*
      - ""
    answer: 1
    explanation: "The character used to represent a comment in C code is Option B: // . In C, the double forward slash ( // ) is used to begin a single-line comment. Comments are used for adding explanations or notes within the code that are ignored by the compiler and are solely for human readability. So, the correct answer is: Option B: // Here's an example of a single-line comment in C: int main() { // This is a single-line comment printf(\"Hello, World!\"); return 0; }"
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What is the purpose of the 'continue' statement in a loop?
    options:
      - Skip the loop
      - Exit the program
      - Skip the current iteration
      - Exit the loop
    answer: 2
    explanation: "The purpose of the 'continue' statement in a loop is to skip the current iteration and proceed to the next iteration of the loop. When 'continue' is encountered within a loop, it immediately terminates the current iteration and continues with the next iteration, effectively skipping any remaining code within the current iteration's body. So, the correct answer is: Option C: Skip the current iteration"
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: What is the range of values that can be stored in an 'int' data type in C?
    options:
      - "-32768 to 32767"
      - "-2147483648 to 2147483647"
      - 0 to 65535
      - 0 to 4294967295
    answer: 1
    explanation: "The range of values that can be stored in an 'int' data type in C is Option B: -2147483648 to 2147483647 . An 'int' is typically represented as a 32-bit signed integer on most systems, which allows it to store values within this range. So, the correct answer is: Option B: -2147483648 to 2147483647"
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: Which operator is used to compare two values for equality in C?
    options:
      - "=="
      - "="
      - "!="
      - <>
    answer: 0
    explanation: "The operator used to compare two values for equality in C is Option A: == . The double equal sign ( == ) is the equality operator, and it is used to check if two values are equal to each other. So, the correct answer is: Option A: == Here's an example of using the equality operator in C: int x = 5; int y = 10; if (x == y) { // This condition will not be met because x is not equal to y printf(\"x is equal to y\"); } else { printf(\"x is not equal to y\"); // This will be printed } In this example, the program checks if 'x' is equal to 'y' using the == operator and prints the result based on the comparison."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: Which data type is used to store a sequence of characters in C?
    options:
      - char
      - int
      - float
      - string
    answer: 0
    explanation: "The data type used to store a sequence of characters in C is Option A: char . In C, you can use an array of characters (often referred to as a \"string\") or simply a single character variable to store individual characters or sequences of characters. So, the correct answer is: Option A: char In C, you can declare a character array (string) like this: char myString[] = \"Hello, World!\"; In this example, 'myString' is an array of characters, and it can store a sequence of characters, including letters, digits, symbols, and spaces."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: In C, which operator is used for pointer-to-pointer relationships?
    options:
      - "*"
      - "&"
      - "->"
      - "::"
    answer: 0
    explanation: "In C, the operator used for pointer-to-pointer relationships is Option A: * . The asterisk () operator is used for both declaring and dereferencing pointer variables. When you have a pointer-to-pointer (a pointer that points to another pointer), you use multiple asterisks to access the value pointed to by the second pointer. So, the correct answer is: Option A: * Here's an example of a pointer-to-pointer relationship in C: int num = 42; int *ptr1 = # // Pointer to an integer int **ptr2 = &ptr1; // Pointer to a pointer to an integer // Access the value using the pointer-to-pointer int value = **ptr2; // value is now 42 In this example, ptr2 is a pointer-to-pointer, and **ptr2 is used to access the value stored in num."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: For 16-bit compiler allowable range for integer constants is ________?
    options:
      - "-3.4e38 to 3.4e38"
      - "-32767 to 32768"
      - "-32668 to 32667"
      - "-32768 to 32767"
    answer: 3
    explanation: In a 16 Bit C compiler we have 2 bytes to store an integer, and 1 byte for a character. For unsigned integers the range is 0 to 65535. For signed integers the range is -32768 to 32767. For unsigned character, 0 to 255
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: C programs are converted into machine language with the help of
    options:
      - An Editor
      - A compiler
      - An operating system
      - None of these.
    answer: 1
    explanation: A compiler is a system software that converts high level language into machine level language.
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: Which one of the following is not a reserved keyword for C?
    options:
      - auto
      - case
      - main
      - default
      - register
    answer: 2
    explanation: "In C programming , reserved keywords are words that have predefined meanings and cannot be used as identifiers (such as variable names, function names, etc.). Option A: auto - This is a reserved keyword in C, used for automatic variables. Option B: case - This is a reserved keyword in C, used in switch statements to specify different cases. Option C: main - This is not a reserved keyword in C. Although main is a commonly used function name for the entry point of a C program, it is not a reserved keyword. Option D: default - This is a reserved keyword in C, used in switch statements as a default case. Option E: register - This is a reserved keyword in C, used to define register variables for fast access. Therefore, the correct answer is Option C: main ."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: A C variable cannot start with
    options:
      - A number
      - A special symbol other than underscore
      - Both of the above
      - An alphabet
    answer: 2
    explanation: "In C programming, variable names must adhere to specific rules regarding their initial characters. A C variable cannot start with the following: A Number: Variable names in C must begin with a letter (a-z, A-Z) or an underscore (_). They cannot start with a digit (0-9). For example, 1variable is not a valid variable name. A Special Symbol Other Than Underscore: Variable names cannot start with special symbols like @, #, $, etc., other than the underscore (_). For example, @variable is not a valid variable name. Option D: An Alphabet: This option is incorrect because variables can start with an alphabet (a-z, A-Z) or an underscore (_). Therefore, the correct answer is Option C: Both of the above as variable names cannot start with a number or a special symbol other than an underscore."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Which one of the following is not a valid identifier?
    options:
      - _examhub
      - 1examhub
      - exam_veda
      - examhub1
    answer: 1
    explanation: The first character must be a letter or special symbol underscore( _ ).
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: What will be printed after execution of the following program code? main() { printf("\\nab"); printf("\\bsi"); printf("\\rha"); }
    options:
      - absiha
      - asiha
      - haasi
      - hai
      - None of these
    answer: 3
    explanation: \\n - newline - printf ( " \\n ab " ) ; - Prints 'ab' \\b - backspace - printf ( " \\b si " ) ; - firstly ' \\b ' removes 'b' from 'ab ' and then prints 'si'. So after execution of printf ( " \\b si " ) ; it is 'asi' . \\r - linefeed - printf ( " \\r ha " ) ; - Now here ' \\r ' moves the cursor to the start of the current line and then override 'asi' to 'hai' .
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: If integer needs two bytes of storage, then maximum value of an unsigned integer is
    options:
      - 216 – 1
      - 215 – 1
      - "216"
      - "215"
      - None of these
    answer: 0
    explanation: "An integer is a number with no fractional part; it can be positive, negative or zero. In ordinary usage, one uses a minus sign to designate a negative integer. However, a computer can only store information in bits, which can only have the values zero or one. We might expect, therefore, that the storage of negative integers in a computer might require some special technique. As you might imagine, an unsigned integer is either positive or zero. Consider a single digit decimal number: In a single decimal digit, you can write a number between 0 and 9. In two decimal digits, you can write a number between 0 and 99, and so on. Since nine is equivalent to 10 1 - 1, 99 is equivalent to 10 2 - 1, etc. In n decimal digits, you can write a number between 0 and 10 n - 1. So, analogously, in the binary number system, An unsigned integer containing n bits can have a value between 0 and 2 n - 1 (which is 2 n different values)."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: Which of the following is not a correct variable type?
    options:
      - float
      - real
      - int
      - double
      - char
    answer: 1
    explanation: "Variable types in C define the kind of data that can be stored in a variable. Option A: float - This is a correct variable type in C, used for storing single-precision floating-point numbers. Option B: real - This is not a correct variable type in C. There is no data type called real in C. Option C: int - This is a correct variable type in C, used for storing integers. Option D: double - This is a correct variable type in C, used for storing double-precision floating-point numbers. Option E: char - This is a correct variable type in C, used for storing single characters. Therefore, the correct answer is Option B: real ."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: What number would be shown on the screen after the following statements of C are executed? char ch; int i; ch = 'G'; i = ch-'A'; printf("%d", i);
    options:
      - "5"
      - "6"
      - "7"
      - "8"
      - "9"
    answer: 1
    explanation: Since the ASCII value of G is 71 and the garbage value if A is 65 and hence the difference is 6.
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: Which of following is not a valid name for a C variable?
    options:
      - Examveda
      - Exam_veda
      - Exam veda
      - Both A and B
      - None of these
    answer: 2
    explanation: No spaces are allowed in the variable names.
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: Find the output of the following program. void main () { int i=01289; printf ( " %d ", i ) ; }
    options:
      - "0289"
      - "1289"
      - "713"
      - "0713"
      - Syntax error
    answer: 4
    explanation: The prefix 0 in an integer value indicates octal value. In octal value use of 8 and 9 is not allowed and hence the error.
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: Find the output of the following program. void main() { int i=065, j=65; printf("%d %d", i, j); }
    options:
      - 53 65
      - 65 65
      - 065 65
      - 053 65
      - Syntax error
    answer: 0
    explanation: As octal 65 ( 065 ) is equivalent of decimal value 53.
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: If ASCII value of 'x' is 120, then what is the value of the H, if H = ('x' – 'w' ) / 3;
    options:
      - "1"
      - "2"
      - "3"
      - "4"
      - "0"
    answer: 4
    explanation: Because 'x'-'w' = 120-119. And hence 1/3 results in 0(integer division)
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: short testarray[4][3] = { {1}, {2,3}, {4,5,6}}; printf("%d", sizeof(testarray)); Assuming a short is two bytes long, what will be printed by the above code?
    options:
      - "6"
      - "7"
      - "12"
      - "24"
      - It will not compile because not enough initializers are given
    answer: 3
    explanation: The following table provides the details of standard integer types with their storage sizes and value ranges − Type Storage size Value range char 1 byte -128 to 127 or 0 to 255 unsigned char 1 byte 0 to 255 signed char 1 byte -128 to 127 int 2 or 4 bytes -32,768 to 32,767 or -2,147,483,648 to 2,147,483,647 unsigned int 2 or 4 bytes 0 to 65,535 or 0 to 4,294,967,295 short 2 bytes -32,768 to 32,767 unsigned short 2 bytes 0 to 65,535 long 4 bytes -2,147,483,648 to 2,147,483,647 unsigned long 4 bytes 0 to 4,294,967,295
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: "What will be the output of the following C code? #include <stdio.h> void main() { int x = 97; char y = x; printf(\"%c\\n\", y); }"
    options:
      - a
      - b
      - "97"
      - Run time error
    answer: 0
    explanation: "1. Declaration: int x = 97; 2. Conversion: char y = x; 3. ASCII Value: The ASCII value of 97 corresponds to the character 'a' . 4. Print: printf(\"%c\\n\", y); prints the character 'a' ."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: "What will be the final values of a and c in the following C statement? (Initial values: a = 2, c = 1) c = (c) ? a = 0 : 2;"
    options:
      - a = 0, c = 0
      - a = 2, c = 1
      - a = 2, c = 2
      - a = 1, c = 2
    answer: 0
    explanation: "Initial values: a = 2, c = 1; The statement is: c = (c) ? a = 0 : 2; This is a ternary conditional expression . The condition is (c) , which means if c is non-zero , the expression before the colon is executed. Since c = 1 (non-zero), the true part is executed: a = 0 Then the value of the true expression ( a = 0 ) is assigned to c . So now: a becomes 0 c becomes 0 (since the result of a = 0 is 0) Final values: a = 0, c = 0"
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: "What will be the output of the following C code? #include <stdio.h> int main() { int x = 0, y = 2; int z = ~x & y; printf(\"%d\\n\", z); }"
    options:
      - "-1"
      - "2"
      - "0"
      - Compile time error
    answer: 1
    explanation: "Understanding Bitwise Operators: This question tests your understanding of bitwise operators in C. Let's break down the code step by step. 1. `~x`: The tilde (~) is the bitwise NOT operator. It flips all the bits of the variable `x`. Since `x` is 0 (which is represented as all 0s in binary), `~x` will become -1 (represented as all 1s in two's complement). 2. `&y`: The ampersand (&) is the bitwise AND operator. It compares the corresponding bits of two operands. If both bits are 1, the resulting bit is 1; otherwise, it's 0. 3. `~x & y`: We're performing a bitwise AND between `~x` (-1, all 1s) and `y` (2). Let's assume your system uses 32-bit integers (most do). Then 2 is represented as `00000000000000000000000000000010` in binary. The bitwise AND operation will be: 11111111111111111111111111111111 (&) 00000000000000000000000000000010 = 00000000000000000000000000000010 This results in 2. 4. `printf(\"%d\\n\", z);` This line prints the value of `z`, which is 2, to the console. Therefore, the correct answer is B: 2 Important Note: The exact binary representation and the behavior of bitwise NOT might depend slightly on your specific compiler and system architecture, but the principle remains the same."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: "What will be the final values of i and j in the following C code? #include <stdio.h> int x = 0; int f() { if (x == 0) return x + 1; else return x - 1; } int g() { return x++; } int main() { int i = (f() + g()) || g(); int j = g() || (f() + g()); }"
    options:
      - i value is 1 and j value is 1
      - i value is 0 and j value is 0
      - i value is 1 and j value is undefined
      - i and j value are undefined
    answer: 0
    explanation: "Understanding the C code: The code involves three functions: `f()` : This function checks the value of a global variable `x` . If `x` is 0, it returns 1; otherwise, it returns `x - 1` . `g()` : This function returns the current value of `x` and then increments `x` (post-increment). `main()` : This is where the magic happens. It calculates `i` and `j` using the `f()` and `g()` functions and the logical OR operator ( `||` ). Let's trace the execution step-by-step: Initially, `x` is 0. For `i` : 1. `f()` is called first. Since `x` is 0, `f()` returns 1. 2. `g()` is called next. `g()` returns 0 (the current value of `x` ) and then increments `x` to 1. 3. The expression becomes `1 + 0 || 0` . Since `1 + 0` evaluates to 1 (which is true in boolean context), the `||` operation short-circuits and the result is 1. Therefore, `i` becomes 1. For `j` : 1. `g()` is called first. `g()` returns 1 (the current value of `x` , which is now 1) and increments `x` to 2. 2. The `||` operation checks the left side (which is now 1, meaning true). Because of short-circuiting of `||` , the right side ( `f() + g()` ) is not evaluated. The result is 1. Therefore `j` becomes 1. Conclusion: The final values are: `i = 1` and `j = 1` . Therefore, the correct option is A ."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: "What will be the output of the following C code? #include <stdio.h> int main() { printf(\"Ram\\rShyam\\n\"); return 0; }"
    options:
      - RamShyam
      - Ram Shyam
      - ShyamRam
      - Ram
    answer: 1
    explanation: "The correct answer is Option B: Ram Shyam . Here's why: * `printf(\"Ram\\rShyam\\n\");` is the core of the problem. Let's break it down: * `Ram` : This part is initially printed to the console buffer. * `\\r` : This is the carriage return character. It moves the cursor to the beginning of the current line. * `Shyam` : Because of `\\r`, this overwrites the beginning of the existing line. So \"Ram\" is replaced by \"Shyam\". If \"Shyam\" has fewer characters than \"Ram\", some parts of \"Ram\" may remain. * `\\n` : This is the newline character. It moves the cursor to the beginning of the next line. Because `\\r` brings the cursor to the start of the line *before* \"Shyam\" is printed, \"Shyam\" will overwrite \"Ram\", and then `\\n` will put the cursor on a newline for subsequent outputs (if any)."
    keyConcept: C Fundamentals
    testedIn:
      - FPSC
      - PPSC
---


