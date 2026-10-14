---
title: Arrays And Strings — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Arrays And Strings — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: arrays-and-strings-part-1
topicName: Arrays And Strings — Part 1
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
    question: What is the highest index for an array with 10 elements in C?
    options:
      - "5"
      - "9"
      - "10"
      - "11"
    answer: 1
    explanation: An array in C is indexed starting from 0. If an array has 10 elements, the first element will have an index of 0. The last element, therefore, will have an index of 9. Hence, the highest index for an array with 10 elements is 9.
    keyConcept: Arrays And Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: What is the size of an integer array declared as int arr[5] in bytes?
    options:
      - "10"
      - "20"
      - "4"
      - "5"
    answer: 1
    explanation: "The size of an integer array declared as int arr[5] in bytes depends on the size of an integer in the system. Typically, the size of an int is 4 bytes. Calculation: The array arr has 5 elements. Each int is 4 bytes. Total size = 5 * 4 = 20 bytes Therefore, the size of int arr[5] is 20 bytes."
    keyConcept: Arrays And Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What is the maximum number of elements that can be stored in an array in C?
    options:
      - Depends on memory
      - "256"
      - "1000"
      - Unlimited
    answer: 0
    explanation: "The maximum number of elements that can be stored in an array in C depends on the available memory of the system in which the program is running. An array in C is a fixed-size data structure, which means that you need to specify the size (number of elements) of the array when you declare it. Here are a few key points: The size of an array should be a positive integer. The maximum value for the size of an array is limited by the amount of memory available in the system. The actual maximum size may vary from system to system. Attempting to allocate an array that is too large for the available memory can lead to program crashes or errors. So, in C, you can declare an array with a size that depends on the specific memory constraints of the computer where the program is executed. This is why the correct answer is Option A: Depends on memory . The other options specify fixed limits, which is not accurate for C arrays. Remember that it's essential to manage memory efficiently to avoid issues like memory exhaustion or segmentation faults when working with arrays in C."
    keyConcept: Arrays And Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What is the output of printf("%d", sizeof("Hello")); in C?
    options:
      - "8"
      - "6"
      - "4"
      - "2"
    answer: 1
    explanation: "The printf(\"%d\", sizeof(\"Hello\")) statement in C is used to determine the size (in bytes) of the string literal \"Hello\" including the null terminator. In C, string literals are automatically null-terminated. The string \"Hello\" consists of 5 characters: 'H', 'e', 'l', 'l', 'o', and it also includes a null terminator ('\\0') at the end to mark the end of the string. So, the total size of the string literal \"Hello\" is 6 bytes (5 characters + 1 null terminator). Therefore, the output of printf(\"%d\", sizeof(\"Hello\")) will be Option B: 6 because it's the size of the string in bytes, including the null terminator."
    keyConcept: Arrays And Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: What is the purpose of the fgets function in C?
    options:
      - Read a file
      - Read a string from the console
      - Write to a file
      - Write to the console
    answer: 1
    explanation: The purpose of the fgets function in C is to read a string from the console . fgets reads a line of text from the specified input stream and stores it into the string pointed to by the provided pointer. This function is often used to read input from the user via the console. Therefore, fgets = read a string from the console .
    keyConcept: Arrays And Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What is right way to Initialize array?
    options:
      - int num[6] = { 2, 4, 12, 5, 45, 5 }
      - int n{} = { 2, 4, 12, 5, 45, 5 }
      - int n{6} = { 2, 4, 12 }
      - int n(6) = { 2, 4, 12, 5, 45, 5 }
    answer: 0
    explanation: option (B), (C) and (D) are incorrect because array declaration syntax is wrong. Only square brackets([]) must be used for declaring an array.
    keyConcept: Arrays And Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: "What will be the output of the program? #include<stdio.h> void main() { int a[5] = {5, 1, 15, 20, 25}; int i, j, m; i = ++a[1]; j = a[1]++; m = a[i++]; printf(\"%d, %d, %d\", i, j, m); }"
    options:
      - 3, 2, 15
      - 2, 3, 20
      - 2, 1, 15
      - 1, 2, 5
    answer: 0
    explanation: ">> int a[5] = {5, 1, 15, 20, 25}; The variable arr is declared as an integer array with a size of 5 and it is initialized to a[0] = 5, a[1] = 1, a[2] = 15, a[3] = 20, a[4] = 25. >> int i, j, m; The variable i, j, m are declared as an integer type. >> i = ++a[1]; becomes i = ++1; Hence i = 2 and a[1] = 2 >> j = a[1]++; becomes j = 2++; Hence j = 2 and a[1] = 3. >> m = a[i++]; becomes m = a[2]; Hence m = 15 and i is incremented by 1(i++ means 2++ so i=3) >> printf(\"%d, %d, %d\", i, j, m); It prints the value of the variables i, j, m Hence the output of the program is 3, 2, 15."
    keyConcept: Arrays And Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: "What will be the output of following program code? #include <stdio.h> int main(void) { char p; char buf[10] = {1, 2, 3, 4, 5, 6, 9, 8}; p = (buf + 1)[5]; printf(\"%d\", p); return 0; }"
    options:
      - "5"
      - "6"
      - "9"
      - Error
      - None of the above
    answer: 2
    explanation: x [ i ] is equivalent to *( x + i ) , so ( buf + 1 )[ 5 ] is *( buf + 1 + 5 ) , i.e. buf [ 6 ] .
    keyConcept: Arrays And Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: An array elements are always stored in ________ memory locations.
    options:
      - Sequential
      - Random
      - Sequential and Random
      - None of the above
    answer: 0
    explanation: "In C programming, an array is a data structure that stores multiple elements of the same type. The key feature of an array is that its elements are stored in sequential memory locations . Here’s a detailed explanation: 1. Memory Contiguity: When an array is declared, the compiler allocates a block of memory large enough to hold all the elements. These elements are stored one after the other in contiguous memory addresses. For example, if you declare an array of 5 integers, the memory allocated for the array will be continuous, and each integer will be placed next to the previous one. 2. Accessing Elements: Due to the sequential storage, the array elements can be accessed easily using their index. The index represents the position of the element in the array, and since the memory is sequential, calculating the memory address of any element becomes straightforward. The address of any element in the array can be calculated as: Address=Base Address+(Index×Size of each element) Here, the Base Address is the memory address of the first element in the array. 3. Efficiency: The sequential nature of arrays makes accessing and iterating through elements efficient. Since the elements are stored contiguously, the CPU can access them quickly by simply moving through the memory locations. 4. Contrast with Other Storage Methods: Unlike arrays, other data structures like linked lists store elements in non-contiguous memory locations. This requires pointers to link elements together, which can lead to more complex memory management and slower access times compared to arrays. 5. Implications for Multidimensional Arrays: In multidimensional arrays (e.g., 2D arrays), the elements are still stored sequentially in memory, typically in row-major order. This means the elements of the first row are stored first, followed by the elements of the second row, and so on. In summary, the sequential storage of array elements is a fundamental characteristic of arrays in C, contributing to their simplicity and efficiency in memory usage and access."
    keyConcept: Arrays And Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: Let x be an array. Which of the following operations are illegal? I. ++x II. x+1 III. x++ IV. x*2
    options:
      - I and II
      - I, II and III
      - II and III
      - I, III and IV
      - III and IV
    answer: 3
    explanation: "int x[10]; * x will store the base address of array. * Statement I, III and IV is invalid. Statement I and III : ++x and x++ are throwing en error while compile (lvalue required as increment operand ) Since, x is storing in the address of the array which is static value which cannot be change by the operand. Statement IV : x*2 is also throw an error while compile (invalid operands to binary * (have 'int *' and 'int') ) Statement II : x+1 is throw a warning: assignment makes integer from pointer without a cast [enabled by default]"
    keyConcept: Arrays And Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: Size of the array need not be specified, when
    options:
      - Initialization is a part of definition
      - It is a declaratrion
      - It is a formal parameter
      - All of these
    answer: 0
    explanation: "In C programming, the size of the array does not need to be specified when initialization is a part of definition . Initialization during Definition: When an array is defined and initialized at the same time, the size of the array can be omitted. The size is automatically determined by the number of elements provided in the initialization. For example: int arr[] = {1, 2, 3, 4, 5}; // Size is determined by the number of elements Declaration: When declaring an array without initializing it, the size must be specified if the array is not initialized. For example: int arr[5]; // Size must be specified Formal Parameter: In function prototypes or definitions where an array is used as a formal parameter, the size does not need to be specified. For example: void function(int arr[]); // Size not required All of These: This option is incorrect because the size must be specified in cases other than initialization during definition. Therefore, the correct answer is Option A: Initialization is a part of definition ."
    keyConcept: Arrays And Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: Consider the following type definition. typedef char x[10]; x myArray[5]; What will sizeof(myArray) be ? (Assume one character occupies 1 byte)
    options:
      - "15"
      - "10"
      - "50"
      - "30"
      - None of these
    answer: 2
    explanation: "In this case, the type definition typedef char x[10]; creates a new type x , which is an array of 10 characters. Then, an array of 5 elements of type x is declared as x myArray[5]; . To calculate the size of myArray , you can multiply the size of one element ( sizeof(x) ) by the number of elements (5): sizeof(myArray) = sizeof(x) * 5 Since each element x is an array of 10 characters, and assuming each character occupies 1 byte, the size of x is 10 bytes. Therefore: sizeof(myArray) = 10 bytes * 5 = 50 bytes So, sizeof(myArray) will be 50 bytes."
    keyConcept: Arrays And Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What will be printed after execution of the following code? void main() { int arr[10] = {1,2,3,4,5}; printf("%d", arr[5]); }
    options:
      - Garbage Value
      - "5"
      - "6"
      - "0"
      - None of these
    answer: 3
    explanation: When an array is partially initialized at the time of declaration then the remaining elements of the array is initialized to 0 by default.
    keyConcept: Arrays And Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What will be the output of the following program? void main() { char str1[] = "abcd"; char str2[] = "abcd"; if(str1==str2) printf("Equal"); else printf("Unequal"); }
    options:
      - Equal
      - Unequal
      - Error
      - None of these.
    answer: 1
    explanation: Strings are compared using strcmp () function defined under string.h header file.
    keyConcept: Arrays And Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What will be the output of the following code? void main() { int a[10]; printf("%d %d", a[-1], a[12]); }
    options:
      - 0 0
      - Garbage value 0
      - 0 Garbage Value
      - Garbage vlaue Garbage Value
      - Code will not compile
    answer: 3
    explanation: In c compiler does not check array with its bounds, value at the computed location is displayed.
    keyConcept: Arrays And Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What does the following declaration mean? int ( *ptr ) [ 10 ] ;
    options:
      - ptr is array of pointers to 10 integers
      - ptr is a pointer to an array of 10 integers
      - ptr is an array of 10 integers
      - ptr is an pointer to array
    answer: 1
    explanation: "The declaration int (*ptr)[10]; means that ptr is a pointer to an array of 10 integers. Here's the breakdown: int specifies the type of elements in the array (integers). (*ptr) indicates that ptr is a pointer. [10] specifies that the pointer points to an array of 10 integers. Thus, ptr is not an array of pointers, nor an array of integers, but a pointer to an array of integers with a size of 10."
    keyConcept: Arrays And Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: "What will be the output of the program if the array begins at 65472 and each integer occupies 2 bytes? #include<stdio.h> void main() { int a[3][4] = {1, 2, 3, 4, 4, 3, 2, 1, 7, 8, 9, 0}; printf(\"%u, %u\", a+1, &a+1); }"
    options:
      - 65474, 65488
      - 65480, 65488
      - 65480, 65496
      - 65474, 65476
      - None of these
    answer: 2
    explanation: ">> int a[3][4] = {1, 2, 3, 4, 4, 3, 2, 1, 7, 8, 9, 0}; The array a[3][4] is declared as an integer array having the 3 rows and 4 colums dimensions. >> printf (\"%u, %u\\n\", a+1, &a+1); The base address(also the address of the first element) of array is 65472. For a two-dimensional array like a reference to array has type \"pointer to array of 4 ints\". Therefore, a+1 is pointing to the memory location of first element of the second row in array a. Hence 65472 + (4 ints * 2 bytes) = 65480 Then, &a has type \"pointer to array of 3 arrays of 4 ints\", totally 12 ints. Therefore, &a+1 denotes \"12 ints * 2 bytes * 1 = 24 bytes\". Hence, begining address 65472 + 24 = 65496. So, &a+1 = 65496 Hence the output of"
    keyConcept: Arrays And Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: "What will be the output of the program? #include<stdio.h> int main() { int arr[1] = {10}; printf(\"%d\", 0[arr]); return 0; }"
    options:
      - "1"
      - "0"
      - "10"
      - "6"
      - None of these
    answer: 2
    explanation: ">> int arr[1]={10}; The variable arr[1] is declared as an integer array with size '2' i.e. arr[0] and arr[1] and it's first element is initialized to value '10'(means arr[0]=10) and arr[1] = garbage value or zero >> printf (\"%d\", 0[arr]); It prints the first element value of the variable arr. Hence the output of the program is 10."
    keyConcept: Arrays And Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: "What will be the output of the program if the array begins at address 65486? #include<stdio.h> void main() { int arr[] = {12, 14, 15, 23, 45}; printf(\"%u, %u\", arr, &arr); }"
    options:
      - 65486, 65488
      - 65486, 65490
      - 65486, 65487
      - 65486, 65486
      - None of these
    answer: 3
    explanation: ">> int arr[] = {12, 14, 15, 23, 45}; The variable arr is declared as an integer array and initialized. >> printf (\"%u, %u\", arr, &arr); Here, The base address of the array is 65486. => arr, &arr is pointing to the base address of the array arr. Hence the output of the program is 65486, 65486."
    keyConcept: Arrays And Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: "What will be the output of the program? #include<stdio.h> void main() { float arr[] = {12.4, 2.3, 4.5, 6.7}; printf(\"%d\", sizeof(arr)/sizeof(arr[0])); }"
    options:
      - "5"
      - "4"
      - "6"
      - "7"
      - None of these
    answer: 1
    explanation: "The sizeof function return the given variable. Example: float a=10; sizeof(a) is 4 bytes >> float arr[] = {12.4, 2.3, 4.5, 6.7}; The variable arr is declared as an floating point array and it is initialized with the values. >> printf (\"%d\", sizeof(arr)/sizeof(arr[0])); The variable arr has 4 elements. The size of the float variable is 4 bytes. Hence 4 elements x 4 bytes = 16 bytes sizeof(arr[0]) is 4 bytes Hence 16/4 is 4 bytes Hence the output of the program is '4'."
    keyConcept: Arrays And Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: "Which of the following is correct way to define the function fun() in the below program? #include<stdio.h> void main() { int a[3][4]; fun(a); }"
    options:
      - void fun(int p[][4]){}
      - void fun(int *p[4]){}
      - void fun(int *p[][4]){}
      - void fun(int *p[3][4]){}
      - None of these
    answer: 0
    explanation: void fun(int p[][4]){ } is the correct way to write the function fun(). while the others are considered only the function fun() is called by using call by reference.
    keyConcept: Arrays And Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: "Which of the following statements are correct about the program below? #include<stdio.h> void main() { int size, i; scanf(\"%d\", &size); int arr[size]; for(i=1; i<=size; i++) { scanf(\"%d\", arr[i]); printf(\"%d\", arr[i]); } }"
    options:
      - The code is erroneous since the statement declaring array is invalid.
      - The code is erroneous since the subscript for array used in for loop is in the range 1 to size.
      - The code is correct and runs successfully.
      - The code is erroneous since the values of array are getting scanned through the loop.
      - None of these
    answer: 0
    explanation: "The statement int arr[size]; produces an error, because we cannot initialize the size of array dynamically. Constant expression is required here. Example: int arr[10]; One more point is there, that is, usually declaration is not allowed after calling any function in a current block of code. In the given program the declaration int arr[10]; is placed after a function call scanf()."
    keyConcept: Arrays And Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: Which of the following statements are correct about an array? 1. The array int num[26]; can store 26 elements. 2. The expression num[1] designates the very first element in the array. 3. It is necessary to initialize the array at the time of declaration. 4. The declaration num[SIZE] is allowed if SIZE is a macro.
    options:
      - "1"
      - 1, 4
      - 2, 3
      - 2, 4
      - None of these
    answer: 1
    explanation: 1. The array int num[26]; can store 26 elements. This statement is true. 2. The expression num[1] designates the very first element in the array. This statement is false, because it designates the second element of the array. 3. It is necessary to initialize the array at the time of declaration. This statement is false. 4. The declaration num[SIZE] is allowed if SIZE is a macro. This statement is true, because the MACRO just replaces the symbol SIZE with given value. Hence the statements '1' and '4' are correct statements.
    keyConcept: Arrays And Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: If the two strings are identical, then strcmp () function returns
    options:
      - "1"
      - "0"
      - "-1"
      - "true"
      - None of these
    answer: 1
    explanation: "Declaration: strcmp(const char *s1, const char*s2); The strcmp return an int value that is if s1 < s2 returns a value < 0 if s1 == s2 returns 0 if s1 > s2 returns a value > 0"
    keyConcept: Arrays And Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: The library function used to find the last occurrence of a character in a string is
    options:
      - laststr()
      - strstr()
      - strnstr()
      - strrchr()
      - None of these
    answer: 3
    explanation: "Declaration: char * strrchr ( const char * s, int c); It scans a string s in the reverse direction, looking for a specific character c."
    keyConcept: Arrays And Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Which of the following function is used to find the first occurrence of a given string in another string?
    options:
      - strchr()
      - strrchr()
      - strstr()
      - strnset()
      - None of these
    answer: 2
    explanation: "The function strstr () Finds the first occurrence of a substring in another string Declaration: char * strstr ( const char * s1, const char * s2 ) ; Return Value: On success, strstr returns a pointer to the element in s1 where s2 begins (points to s2 in s1). On error (if s2 does not occur in s1), strstr returns null."
    keyConcept: Arrays And Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: Which of the following function is more appropriate for reading in a multi-word string?
    options:
      - scanf()
      - gets()
      - printf()
      - puts()
      - None of these
    answer: 1
    explanation: gets () ; collects a string of characters terminated by a new line from the standard input stream stdin
    keyConcept: Arrays And Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: "What will be the output of the program? #include<stdio.h> #include<string.h> void main() { char str1[20] = \"Hello\", str2[20] = \" World\"; printf(\"%s\", strcpy(str2, strcat(str1, str2))); }"
    options:
      - Hello World
      - World
      - WorldHello
      - Hello
      - None of these
    answer: 0
    explanation: ">> char str1[20] = \"Hello\", str2[20] = \" World\"; The variable str1 and str2 is declared as an array of characters and initialized with value \"Hello\" and \" World\" respectively. >> printf ( \" %s n \", strcpy ( str2, strcat ( str1, str2 ))) ; => strcat (str1, str2) it append the string str2 to str1. The result will be stored in str1. Therefore str1 contains \"Hello World\". => strcpy (str2, \"Hello World\") it copies the \"Hello World\" to the variable str2. Hence it prints \"Hello World\"."
    keyConcept: Arrays And Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: "What will be the output of the program? #include<stdio.h> void main() { printf(5+\"Good Morningn\"); }"
    options:
      - Good Morning
      - M
      - Good
      - Morning
      - None of these
    answer: 3
    explanation: printf(5+"Good Morning\n"); It skips the 5 characters and prints the given string. Hence the output is "Morning".
    keyConcept: Arrays And Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: "What will be the output of the program? #include<stdio.h> #include<string.h> void main() { char str[] = \"Exam\\0Veda\"; printf(\"%s\", str); }"
    options:
      - Exam
      - Exam Veda
      - Exam\0Veda
      - Veda
      - None of these
    answer: 0
    explanation: A string is a collection of characters terminated by '\0'. >> char str[] = "Exam\0\Veda\0"; The variable str is declared as an array of characters and initialized with value "Exam". >> printf ("%s", str); It prints the value of the str. The output of the program is "Exam".
    keyConcept: Arrays And Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: Which of the following correctly accesses the seventh element stored in arr, an array with 100 elements?
    options:
      - arr[6]
      - arr[7]
      - arr{6}
      - arr{7}
      - None of these
    answer: 0
    explanation: Array index always starts with 0.
    keyConcept: Arrays And Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: What is the return value of the following statement if it is placed in C program? strcmp("ABC", "ABC");
    options:
      - "33"
      - "-1"
      - "1"
      - "0"
      - Compilation Error
    answer: 3
    explanation: "strcmp(s1, s2); returns int as follows: == 0, when s1 == s2 < 0, when s1 < s2 > 0, when s1 > s2"
    keyConcept: Arrays And Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: int a [ 5 ] = { 1,2,3 } What is the value of a [ 4 ] ?
    options:
      - "3"
      - "1"
      - "2"
      - "0"
      - Garbage Value
    answer: 3
    explanation: In the fourth location of an array it contains 0 since default initialization will take place.
    keyConcept: Arrays And Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: "What will be the correct output of the following program? #include<string.h> void main() { char str[] = \"C EXAMINATION\", rev[17]; int i = strlen(str), j=0; for( ; i>=0; rev[j++] = str[i--]) rev[j] = str[j] ; puts(rev); }"
    options:
      - NOITANIMAXE C
      - NOITANIMAXE
      - C
      - No output at all.
      - Syntax error
    answer: 3
    explanation: As i is with the length of string and hence in array rev the contents are copied as "\0 NOITANIMAXE C". But while displaying those contents with puts function it stops because of the first character '\0' and hence no output.
    keyConcept: Arrays And Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: String concatenation means -
    options:
      - Combining two strings.
      - Extracting a substring out of a string.
      - Partitioning the string into two strings.
      - Merging two strings.
      - Comparing the two strings to define the larger one.
    answer: 0
    explanation: Concatenation means combining two strings together (appending the second at the end of first one).
    keyConcept: Arrays And Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: Which keyword is used to declare a character array in C?
    options:
      - str
      - character
      - arr
      - char
    answer: 3
    explanation: char is the correct answer to “Which keyword is used to declare a character array in C”. This question is standard in competitive examination syllabi for Arrays And Strings.
    keyConcept: Arrays And Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: Which function is used to compare two strings in C?
    options:
      - strcmp
      - strcat
      - strlen
      - strcomp
    answer: 0
    explanation: strcmp is the correct answer to “Which function is used to compare two strings in C”. This question is standard in competitive examination syllabi for Arrays And Strings.
    keyConcept: Arrays And Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: How do you access the first element of an array arr in C?
    options:
      - arr[1]
      - arr[0]
      - arr[2]
      - arr[10]
    answer: 1
    explanation: arr[0] is the correct answer to “How do you access the first element of an array arr in C”. This question is standard in competitive examination syllabi for Arrays And Strings.
    keyConcept: Arrays And Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: Which type of loop is commonly used to iterate through an array in C?
    options:
      - if loop
      - switch loop
      - for loop
      - while loop
    answer: 2
    explanation: for loop is the correct answer to “Which type of loop is commonly used to iterate through an array in C”. This question is standard in competitive examination syllabi for Arrays And Strings.
    keyConcept: Arrays And Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: Which function is used to find the length of a string in C?
    options:
      - lenstr
      - strsize
      - strlength
      - stringlen
    answer: 2
    explanation: strlength is the correct answer to “Which function is used to find the length of a string in C”. This question is standard in competitive examination syllabi for Arrays And Strings.
    keyConcept: Arrays And Strings
    testedIn:
      - FPSC
      - PPSC
---


