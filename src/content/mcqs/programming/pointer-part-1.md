---
title: Pointer — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Pointer — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: pointer-part-1
topicName: Pointer — Part 1
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
    question: What is the purpose of the 'free' function in C when used with pointers?
    options:
      - Allocate memory
      - Deallocate memory
      - Create a new pointer
      - Modify the pointer's value
    answer: 1
    explanation: "The 'free' function in C is used to deallocate memory that was previously allocated using functions like malloc , calloc , or realloc . When memory is allocated dynamically , it resides in the heap, and it is the programmer's responsibility to release that memory when it is no longer needed. Using 'free' helps prevent memory leaks by returning the allocated memory back to the system. Option A is incorrect because allocating memory is done using malloc , calloc , or realloc . Option C is incorrect because 'free' does not create new pointers. Option D is incorrect because 'free' does not modify the value of the pointer; it only releases the memory the pointer points to. Therefore, the correct answer is Option B: Deallocate memory ."
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: "Determine Output: void main() { char far *farther, *farthest; printf(\"%d..%d\", sizeof(farther), sizeof(farthest)); }"
    options:
      - 4..2
      - 2..2
      - 4..4
      - 2..4
    answer: 2
    explanation: "In the given C program code snippet: void main() { char far *farther, *farthest; printf(\"%d..%d\", sizeof(farther), sizeof(farthest)); } The sizeof operator is used to determine the size, in bytes, of a variable or data type. 1. ** farther ** and ** farthest ** are both pointers of type **char***. In C, the size of a pointer is typically **4 bytes** on a 32-bit system or **8 bytes** on a 64-bit system. Assuming a standard 32-bit architecture, the size of both pointers would be **4 bytes**. 2. Therefore, the output of the printf function will be: - sizeof(farther) = 4 - sizeof(farthest) = 4 The printf statement prints these two sizes, resulting in the output **\"4..4\"**. Hence, the correct answer is **Option C: 4..4**."
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: "Determine Output: main() { char *str1 = \"abcd\"; char str2[] = \"abcd\"; printf(\"%d %d %d\", sizeof(str1), sizeof(str2), sizeof(\"abcd\")); }"
    options:
      - 2 5 5
      - 2 4 4
      - 8 5 5
      - 2 4 5
    answer: 2
    explanation: In first sizeof, str1 is a character pointer so it gives you the size of the pointer variable. In second sizeof the name str2 indicates the name of the array whose size is 5 (including the 'null' termination character). The third sizeof is similar to the second one.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: Choose the best answer. Prior to using a pointer variable
    options:
      - It should be declared.
      - It should be initialized.
      - It should be both declared and initialized.
      - None of these.
    answer: 2
    explanation: Using a pointer variable, without initializing it, will be disastrous, as it will have a garbage value.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: Comment on the following pointer declaration? int * ptr, p;
    options:
      - ptr is a pointer to integer, p is not.
      - ptr and p, both are pointers to integer.
      - ptr is pointer to integer, p may or may not be.
      - ptr and p both are not pointers to integer.
    answer: 0
    explanation: "int *ptr, p; ptr is declared as a pointer to an integer because of the `*` symbol next to it. This means that `ptr` can hold the address of an integer variable. p is declared as a regular integer variable, not a pointer. The absence of the `*` symbol means that `p` will hold an integer value directly, not an address. Key Points: - ptr : Pointer to integer, can store addresses of integer variables. - p : Regular integer variable, cannot store addresses."
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What will be the output? main() { char *p; p = "Hello"; printf("%cn",*&*p); }
    options:
      - Hello
      - H
      - Some address will be printed
      - None of these.
    answer: 1
    explanation: "* is a dereference operator & is a reference operator. They can be applied any number of times provided it is meaningful. Here p points to the first character in the string \" Hello \". * p dereferences it and so its value is H . Again & references it to an address and * dereferences it to the value H ."
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: "Determine output: #include <stdio.h> void main() { char *p = NULL; char *q = 0; if(p) printf(\" p \"); else printf(\"nullp\"); if(q) printf(\"q\"); else printf(\" nullq\"); }"
    options:
      - p q
      - Depends on the compiler
      - x nullq where x can be p or nullp depending on the value of NULL
      - nullp nullq
    answer: 3
    explanation: char * p = NULL is same as char * q = 0. In both declarations p and q are initialized to null.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: "What will be the output of the following program? #include<stdio.h> void main() { int i = 10; void *p = &i; printf(\"%d\\n\", (int)*p); }"
    options:
      - Compiler time error
      - Segmentation fault/runtime crash
      - "10"
      - Undefined behavior
    answer: 0
    explanation: p is pointer of type void.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: Comment on the following? const int * ptr;
    options:
      - We cannot change the value pointed by ptr.
      - We cannot change the pointer ptr itself.
      - Both of the above
      - We can change the pointer as well as the value pointed by it.
    answer: 0
    explanation: "int * : pointer to int int const * : pointer to const int int * const : const pointer to int int const * const : const pointer to const int Now the first const can be on either side of the type so: const int * == int const * const int * const == int const * const So the above declaration is pointer to const int. Which means, we cannot change the value pointed by ptr ."
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: "Determine Output: #include<stdio.h> void main() { int *ptr, a=10; ptr = &a; *ptr += 1; printf(\"%d, %d\", *ptr, a); }"
    options:
      - 10, 10
      - 10, 11
      - 11, 10
      - 11, 11
    answer: 3
    explanation: Address of variable a is assigned to the integer pointer ptr . Due to the statement; *ptr += 1; value at address pointing by ptr incremented by 1. As the value at address is changed so variable a also get the updated value.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: A function 'p' that accepts a pointer to a character as argument and returns a pointer to an array of integer can be declared as
    options:
      - int(*p(char *))[]
      - int *p(char *)[]
      - int (*p) (char *)[]
      - None of these.
    answer: 0
    explanation: OPTION 'A' AS CORRECT... THERE ARE SEVERAL DIFFERENT USES OF POINTERS IN C...THEY ARE (1) int *p ; // p is a pointer to an integer quantity (2) int *p[10] ; // p is a 10-element array of pointers to integer quantities (3) int (*p)[10] ; // p is a pointer to a 10-element integer array (4) int *p(void); // p is a function that returns a pointer to an integer quantity (5) int p(char *a); // p is a function that accepts an argument which is a pointer to a character returns an integer quantity (6) int *p(char *a); // p is a function that accepts an argument which is a pointer to a character returns a pointer to an integer quantity. (7) int (*p)(char *a); // p is pointer to a function that accepts an argument which is a pointer to a character returns an integer quantity. (8) int (*p(char *a))[10]; // p is a function that accepts an argument which is a pointer to a character returns a pointer to a 10-element integer array. (9) int p(char (*a)[]); // p is a function that accepts an argument which is a pointer to a character array returns an integer quantity. (10) int p(char *a[]); // p is a function that accepts an argument which is a array of pointers to characters returns an integer quantity (11) int *p(char a[]); // p is a function that accepts an argument which is a character array returns a pointer to an integer quantity (12) int *p(char (*a)[]); // p is a function that accepts an argument which is a pointer to a character array returns a pointer to an integer quantity (13) int *p(char *a[]); // p is a function that accepts an argument which is an array of pointers to characters // returns a pointer to an integer quantity (14) int (*p)(char (*a)[]); // p is pointer to a function that accepts an argument which is a pointer to a character array returns an integer quantity (15) int *(*p)(char (*a)[]); // p is pointer to a function that accepts an argument which is a pointer to a character array returns a pointer to an integer quantity (16) int *(*p)(char *a[]); // p is pointer to a function that accepts an argument which is a array of pointers to characters returns a pointer to an integer quantity (17) int (*p[10])(void); // p is 10-element array of pointers to functions; each function returns an integer quantity (18) int (*p[10])(char a); // p is 10-element array of pointers to functions; each function accepts an argument which is a character and returns an integer quantity (19) int *(*p[10])(char a); // p is 10-element array of pointers to functions; each function accepts an argument which is a character and returns a pointer to an integer quantity (20) int *(*p[10])(char *a); // p is 10-element array of pointers to functions; each function accepts an argument which is a pointer to a character and returns a pointer to an integer
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: What will be printed after compiling and running the following code? main() { char *p; printf("%d %d",sizeof(*p), sizeof(p)); }
    options:
      - 1 1
      - 1 2
      - 2 1
      - 2 2
    answer: 1
    explanation: The sizeof () operator gives the number of bytes taken by its operand. p is a character pointer, which needs one byte for storing its value (a character). Hence sizeof (* p ) gives a value of 1. Since it needs two bytes to store the address of the character pointer sizeof ( p ) gives 2.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: Find the output of the following program. void main() { int array[10]; int *i = &array[2], *j = &array[5]; int diff = j-i; printf("%d", diff); }
    options:
      - "3"
      - "6"
      - Garbage value
      - Error
    answer: 0
    explanation: When subtracting pointers you get the number of elements between those addresses, not the number of bytes.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: Find the output of the following program. void main() { printf("%d, %d", sizeof(int *), sizeof(int **)); }
    options:
      - 2, 0
      - 0, 2
      - 2, 2
      - 2, 4
      - 4, 4
    answer: 2
    explanation: Every pointer regardless of its type whereas single pointer or pointer to pointer, needs only 2 bytes. Size of pointer and int is 2 bytes in Turbo C compiler on windows 32 bit machine . So size of pointer is compiler specific. But generally most of the compilers are implemented to support 4 byte pointer variable in 32 bit and 8 byte pointer variable in 64 bit machine.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: Find the output of the following program. void main() { int i=10; /* assume address of i is 0x1234ABCD */ int *ip=&i; int **ipp=&&i; printf("%x,%x,%x", &i, ip, *ipp); }
    options:
      - 0x1234ABCD, 0x1234ABCD, 10
      - 0x1234ABCD, 0x1234ABCD, 0x1234ABCD
      - 0x1234ABCD, 10, 10
      - Syntax error
      - Runtime error
    answer: 3
    explanation: "&& is logical AND operator and this operator requires two operands."
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: Which of the following statements are true after execution of the program. void main() { int a[10], i, *p; a[0] = 1; a[1] = 2; p = a; (*p)++; }
    options:
      - a[1] = 3
      - a[0] = 2
      - a[1] = 1
      - a[0] = 3
      - Compilation error
    answer: 1
    explanation: "After the execution of the program, the value of the first element of the array 'a' will be modified. Let's break down the code step by step: a[0] = 1; : Sets the first element of the array 'a' to 1. a[1] = 2; : Sets the second element of the array 'a' to 2. p = a; : Assigns the address of the first element of the array 'a' to the pointer 'p'. (*p)++; : Increments the value at the memory location pointed to by 'p'. Since 'p' points to the first element of 'a', it increments the value of 'a[0]' . After the execution of the program, the value of a[0] will be 2. Therefore, the correct statement is Option B: a[0] = 2 ."
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: In C, what is a pointer primarily used for?
    options:
      - Decision making
      - Code organization
      - Variable declaration
      - Storing values
    answer: 2
    explanation: Variable declaration is the correct answer to “In C, what is a pointer primarily used for”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: What is the result of the expression sizeof(int*) in C, assuming an int pointer on a typical system?
    options:
      - "4"
      - "8"
      - "2"
      - "1"
    answer: 0
    explanation: 4 is the correct answer to “What is the result of the expression sizeof(int*) in C, assuming an int pointer on a typical system”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: In C, how do you declare a pointer variable that can store the address of an integer?
    options:
      - int *ptr
      - ptr int
      - int ptr
      - ptr *int
    answer: 0
    explanation: int *ptr is the correct answer to “In C, how do you declare a pointer variable that can store the address of an integer”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What is the purpose of the '->' operator in C when used with pointers?
    options:
      - Arithmetic operation
      - Indirection operator
      - Member access operator
      - Bitwise operation
    answer: 2
    explanation: Member access operator is the correct answer to “What is the purpose of the '->' operator in C when used with pointers”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: In C, what is the value of a pointer variable if it hasn't been assigned any address?
    options:
      - "0"
      - "Null"
      - Undefined
      - "1"
    answer: 2
    explanation: Undefined is the correct answer to “In C, what is the value of a pointer variable if it hasn't been assigned any address”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What is the result of the expression *ptr in C, where ptr is a pointer to an int?
    options:
      - Address of ptr
      - Value pointed to by ptr
      - Size of ptr
      - Type of ptr
    answer: 1
    explanation: Value pointed to by ptr is the correct answer to “What is the result of the expression *ptr in C, where ptr is a pointer to an int”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: In C, what is the purpose of the 'void' pointer type (void*)?
    options:
      - To store any data type's address
      - To declare a pointer as uninitialized
      - To make a pointer point to null
      - To create a generic function
    answer: 0
    explanation: To store any data type's address is the correct answer to “In C, what is the purpose of the 'void' pointer type (void*)”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: How do you declare a pointer to a function that takes two integers and returns an integer in C?
    options:
      - int (*ptr)(int, int)
      - ptr(int, int) int
      - function int (*ptr)(int, int)
      - ptr function(int, int) int
    answer: 0
    explanation: int (*ptr)(int, int) is the correct answer to “How do you declare a pointer to a function that takes two integers and returns an integer in C”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: What is the result of the expression ptr++ in C, where ptr is a pointer?
    options:
      - Increase the value of ptr by 1
      - Decrease the value of ptr by 1
      - Move ptr to the next memory location
      - It's not a valid operation
    answer: 2
    explanation: Move ptr to the next memory location is the correct answer to “What is the result of the expression ptr++ in C, where ptr is a pointer”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: In C, what is the purpose of the 'const' keyword when used with a pointer declaration?
    options:
      - To declare a constant pointer
      - To make the pointer point to a constant value
      - To make the pointer constant
      - To prevent pointer declaration
    answer: 1
    explanation: To make the pointer point to a constant value is the correct answer to “In C, what is the purpose of the 'const' keyword when used with a pointer declaration”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: What is the result of the expression &variable in C, where variable is a variable of type int?
    options:
      - Address of variable
      - Value of variable
      - Size of variable
      - Type of variable
    answer: 0
    explanation: Address of variable is the correct answer to “What is the result of the expression &variable in C, where variable is a variable of type int”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: In C, what is a double pointer (int**)?
    options:
      - A pointer to an integer
      - A pointer that can store two addresses
      - A pointer to a pointer
      - A pointer to a double data type
    answer: 2
    explanation: A pointer to a pointer is the correct answer to “In C, what is a double pointer (int**)”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: What is the result of the expression ptr = NULL in C, where ptr is a pointer?
    options:
      - Initialize ptr to 0
      - Delete the pointer ptr
      - Set ptr to a random address
      - It's not a valid operation
    answer: 0
    explanation: Initialize ptr to 0 is the correct answer to “What is the result of the expression ptr = NULL in C, where ptr is a pointer”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: In C, what is the purpose of the 'malloc' function?
    options:
      - Allocate memory on the stack
      - Allocate memory on the heap
      - Allocate memory for a function
      - Allocate memory for a variable
    answer: 1
    explanation: Allocate memory on the heap is the correct answer to “In C, what is the purpose of the 'malloc' function”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: What is the result of the expression *NULL in C?
    options:
      - Error
      - Null pointer dereference
      - "0"
      - Undefined
    answer: 0
    explanation: Error is the correct answer to “What is the result of the expression *NULL in C”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: In C, what is the purpose of the 'memcpy' function?
    options:
      - Copy the contents of one pointer to another
      - Copy the contents of one memory location to another
      - Create a new pointer
      - Swap two pointers
    answer: 1
    explanation: Copy the contents of one memory location to another is the correct answer to “In C, what is the purpose of the 'memcpy' function”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: What is the result of the expression sizeof(char*) in C, assuming a char pointer on a typical system?
    options:
      - "4"
      - "8"
      - "2"
      - "1"
    answer: 0
    explanation: 4 is the correct answer to “What is the result of the expression sizeof(char*) in C, assuming a char pointer on a typical system”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: In C, how do you declare an array of pointers to integers?
    options:
      - int* arr[]
      - arr int*[]
      - int arr*[]
      - int[]* arr
    answer: 0
    explanation: int* arr[] is the correct answer to “In C, how do you declare an array of pointers to integers”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: In C, what is a pointer to a constant value (const int*)?
    options:
      - A pointer that cannot be modified
      - A pointer that points to a constant value
      - A constant pointer
      - A pointer to a constant value
    answer: 3
    explanation: A pointer to a constant value is the correct answer to “In C, what is a pointer to a constant value (const int*)”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: In C, what is a function pointer?
    options:
      - A pointer that points to a function
      - A pointer returned by a function
      - A pointer to a variable
      - A constant pointer
    answer: 0
    explanation: A pointer that points to a function is the correct answer to “In C, what is a function pointer”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: What is the result of the expression &array[0] in C, where array is an integer array?
    options:
      - Address of the first element in the array
      - Value of the first element in the array
      - Size of the array
      - Type of the array
    answer: 0
    explanation: Address of the first element in the array is the correct answer to “What is the result of the expression &array[0] in C, where array is an integer array”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: In C, what is a null pointer (NULL or 0)?
    options:
      - A pointer that points to the address 0
      - A pointer that points to a null value
      - A pointer with an undefined value
      - A pointer to a null object
    answer: 0
    explanation: A pointer that points to the address 0 is the correct answer to “In C, what is a null pointer (NULL or 0)”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: What is the result of the expression ptr += 2 in C, where ptr is a pointer?
    options:
      - Increase ptr by 2
      - Decrease ptr by 2
      - Move ptr two memory locations forward
      - It's not a valid operation
    answer: 2
    explanation: Move ptr two memory locations forward is the correct answer to “What is the result of the expression ptr += 2 in C, where ptr is a pointer”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: In C, what is the purpose of the 'calloc' function?
    options:
      - Allocate memory on the stack
      - Allocate memory on the heap
      - Allocate memory for a function
      - Allocate memory for an array of variables
    answer: 3
    explanation: Allocate memory for an array of variables is the correct answer to “In C, what is the purpose of the 'calloc' function”. This question is standard in competitive examination syllabi for Pointer.
    keyConcept: Pointer
    testedIn:
      - FPSC
      - PPSC
---


