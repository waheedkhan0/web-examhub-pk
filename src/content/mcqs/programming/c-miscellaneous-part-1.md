---
title: C Miscellaneous — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on C Miscellaneous — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: c-miscellaneous-part-1
topicName: C Miscellaneous — Part 1
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
    question: "Determine output: void main() { int const *p=5; printf(\"%d\", ++(*p)); }"
    options:
      - "6"
      - "5"
      - Garbage Value
      - Compiler Error
    answer: 3
    explanation: p is a pointer to a "constant integer". But we tried to change the value of the "constant integer".
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: "Determine Output: void main() { char s[]=\"man\"; int i; for(i=0; s[i]; i++) printf(\"%c%c%c%c \", s[i], *(s+i), *(i+s), i[s]); }"
    options:
      - mmm nnn aaa
      - mmmm nnnn aaaa
      - Compiler Error
      - None of These
    answer: 3
    explanation: "Correct Output : mmmm aaaa nnnn s[i], *(i+s), *(s+i), i[s] are all different ways of expressing the same idea. Generally array name is the base address for that array. Here s is the base address. i is the index number/displacement from the base address. So, indirecting it with * is same as s[i]. i[s] may be surprising. But in the case of C it is same as s[i]."
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: "Determine Output: void main() { float me = 1.1; double you = 1.1; if(me==you) printf(\"Condition False\"); else printf(\"Condition True\"); }"
    options:
      - Condition False
      - Condition True
      - Error
      - None of These
    answer: 1
    explanation: "For floating point numbers (float, double, long double) the values cannot be predicted exactly. Depending on the number of bytes, the precession with the value represented varies. Float takes 4 bytes and long double takes 10 bytes. So float stores 0.9 with less precision than long double. Rule of Thumb: Never compare or at-least be cautious when using floating point numbers with relational operators (== , >, <, <=, >=,!= ) ."
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: "Determine Output: void main() { static int var = 5; printf(\"%d \", var--); if(var) main(); }"
    options:
      - 5 5 5 5 5
      - 5 4 3 2 1
      - Infinite Loop
      - None of These
    answer: 1
    explanation: When static storage class is given, it is initialized once. The change in the value of a static variable is retained even between the function calls. Main is also treated like any other ordinary function, which can be called recursively.
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: "Determine Output: void main() { char *p; printf(\"%d %d\", sizeof(*p), sizeof(p)); }"
    options:
      - 1 1
      - 1 2
      - 2 1
      - 2 2
    answer: 1
    explanation: The sizeof () operator gives the number of bytes taken by its operand. P is a character pointer, which needs one byte for storing its value (a character). Hence sizeof ( *p ) gives a value of 1. Since it needs two bytes to store the address of the character pointer sizeof ( p ) gives 2.
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: "Determine the Final Output: void main() { printf(\"\\nab\"); printf(\"\\bsi\"); printf(\"\\rha\"); }"
    options:
      - absiha
      - asiha
      - haasi
      - hai
    answer: 3
    explanation: \n - newline - printf ( " \n ab " ) ; - Prints ab \b - backspace - printf ( " \b si " ) ; - firstly ' \b ' removes 'b' from 'ab ' and then prints 'si'. So after execution of printf
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: "Determine Output: #define int char void main() { int i = 65; printf(\"sizeof(i)=%d\", sizeof(i)); }"
    options:
      - sizeof(i)=2
      - sizeof(i)=1
      - Compiler Error
      - None of These
    answer: 1
    explanation: "Since the #define replaces the string int by the macro char ."
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: "Determine Output: void main() { int i=3; switch(i) { default: printf(\"zero\"); case 1: printf(\"one\"); break; case 2: printf(\"two\"); break; case 3: printf(\"three\"); break; } }"
    options:
      - zero
      - three
      - Error
      - None of These
    answer: 1
    explanation: The default case can be placed anywhere inside the loop. It is executed only when all other cases doesn't match.
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: "Determine Output: void main() { char string[]=\"Hello World\"; display(string); } void display(char *string) { printf(\"%s\", string); }"
    options:
      - will print Hello World
      - Compiler Error
      - Can't Say
      - None of These
    answer: 1
    explanation: Type mismatch in redeclaration of function display. In third line, when the function display is encountered, the compiler doesn't know anything about the function display. It assumes the arguments and return types to be integers, (which is the default type). When it sees the actual function display, the arguments and type contradicts with what it has assumed previously. Hence a compile time error occurs.
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: "Determine Output: void main() { int i=5; printf(\"%d%d%d%d%d\", i++, i--, ++i, --i, i); }"
    options:
      - "45545"
      - "54544"
      - "55445"
      - "54554"
    answer: 0
    explanation: The arguments in a function call are pushed into the stack from left to right. The evaluation is by popping out from the stack. and the evaluation is from right to left, hence the result. See the picture below
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: "Determine Output: #define square(x) x*x void main() { int i; i = 64/square(4); printf(\"%d\", i); }"
    options:
      - "4"
      - "64"
      - "16"
      - None of These
    answer: 1
    explanation: The macro call square(4) will substituted by 4*4 so the expression becomes i = 64/4*4 . Since / and * has equal priority the expression will be evaluated as (64/4)*4 i.e. 16*4 = 64
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: "Determine Output: void main() { char *p=\"hi friends\", *p1; p1=p; while(*p!='\\0') ++*p++; printf(\"%s\", p1); }"
    options:
      - hi friends
      - ij!gsjfoet
      - hj grjeodt
      - None of These
    answer: 1
    explanation: "++*p++ will be parse in the given order : 1. *p that is value at the location currently pointed by p will be taken 2. ++*p the retrieved value will be incremented 3. when ; is encountered the location will be incremented that is p++ will be executed."
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: "Determine Output: #include<stdio.h> #define a 10 void main() { #define a 50 printf(\"%d\", a); }"
    options:
      - "50"
      - "10"
      - Compiler Error
      - None of These
    answer: 0
    explanation: The preprocessor directives can be redefined anywhere in the program. So the most recently assigned value will be taken.
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: "Determine Output: #define clrscr() 100 void main() { clrscr(); printf(\"%d\", clrscr()); }"
    options:
      - "0"
      - "1"
      - "100"
      - Error
    answer: 2
    explanation: "Preprocessor executes as a seperate pass before the execution of the compiler. So textual replacement of clrscr() to 100 occurs. The input program to compiler looks like this : void main () { 100; printf ( \" %d \", 100 ) ; } Note: 100; is an executable statement but with no action. So it doesn't give any problem."
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: "Determine Output: void main() { printf(\"%p\", main); }"
    options:
      - Error
      - make an infinite loop
      - Some address will be printed
      - None of These
    answer: 2
    explanation: Function names are just addresses (just like array names are addresses). main () is also a function. So the address of function main will be printed. %p in printf () specifies that the argument is an address. They are printed as hexadecimal numbers.
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: "Determine Output: void main() { char *p; p=\"Hello\"; printf(\"%c\", *&*p); }"
    options:
      - Hello
      - H
      - Some Address will be printed
      - None of These
    answer: 1
    explanation: "* is a dereference operator & is a reference operator. They can be applied any number of times provided it is meaningful. Here p points to the first character in the string \"Hello\". *p dereferences it and so its value is H. Again & references it to an address and * dereferences it to the value H."
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: "Determine Output: void main() { int i=1; while(i<=5) { printf(\"%d\", i); if(i>2) goto here; i++; } } fun() { here: printf(\"PP\"); }"
    options:
      - 12PP
      - 12PP345
      - Compiler Error
      - None of These
    answer: 2
    explanation: "Compiler error: Undefined label 'here' in function main Labels have functions scope, in other words The scope of the labels is limited to functions. The label 'here' is available in function fun() Hence it is not visible in function main."
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: "Determine Output: void main() { int i=1, j=2; switch(i) { case 1: printf(\"GOOD\"); break; case j: printf(\"BAD\"); break; } }"
    options:
      - GOOD BAD
      - GOOD
      - Compiler Error
      - None of These
    answer: 2
    explanation: "Compiler Error: Constant expression required in function main. The case statement can have only constant expressions (this implies that we cannot use variable names directly so an error). Note: Enumerated types can be used in case statements."
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: "Determine Output: void main() { int i; printf(\"%d\", scanf(\"%d\", &i)); // value 10 is given as input here }"
    options:
      - "10"
      - "1"
      - Garbage Value
      - None of These
    answer: 1
    explanation: scanf returns number of items successfully read and not 1/0. Here 10 is given as input which should have been scanned successfully. So number of items read is 1.
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: "Determine Output: void main() { int i=0; for(;i++;printf(\"%d\", i)); printf(\"%d\", i); }"
    options:
      - "1"
      - "11"
      - "12"
      - Error
    answer: 0
    explanation: Before entering into the for loop checking condition is "evaluated". Here it evaluates to 0 (false) and comes out of the loop, and i is incremented (note the semicolon after the for loop).
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: "Determine Output: void main() { struct xx { int x=3; char name[] = \"hello\"; }; struct xx *s = malloc(sizeof(struct xx)); printf(\"%d\", s->x); printf(\"%s\", s->name); }"
    options:
      - 3 hello
      - Compiler Error
      - Linking error
      - None of these
    answer: 1
    explanation: Initialization should not be done for structure members inside the structure declaration.
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: "Determine output: void main() { extern int i; i=20; printf(\"%d\", sizeof(i)); }"
    options:
      - "20"
      - "2"
      - Compiler Error
      - Linker Error
    answer: 3
    explanation: "Linker error: undefined symbol '_i'. Explanation: extern declaration specifies that the variable i is defined somewhere else. The compiler passes the external variable to be resolved by the linker. So compiler doesn't find any error. During linking the linker searches for the definition of i. Since it is not found the linker flags an error."
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: "Determine Output: void main() { int i=0, j=0; if(i && j++) printf(\"%d..%d\", i++, j); printf(\"%d..%d\", i, j); }"
    options:
      - 0..1
      - 1..0
      - 0..0
      - 1..1
    answer: 2
    explanation: The value of i is 0. Since this information is enough to determine the truth value of the boolean expression. So the statement following the if statement is not executed. The values of i and j remains unchanged and get printed.
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: "Determine Output: void main() { static int i=5; if(--i){ main(); printf(\"%d \", i); } }"
    options:
      - 5 4 3 2 1
      - 0 0 0 0
      - Infinite Loop
      - None of These
    answer: 1
    explanation: The variable "i" is declared as static, hence memory for I will be allocated for only once, as it encounters the statement. The function main () will be called recursively unless I becomes equal to 0, and since main () is recursively called, so the value of static I ie., 0 will be printed every time the control is returned.
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: "Determine Output: void main() { int i=-1, j=-1, k=0, l=2, m; m = i++ && j++ && k++ || l++; printf(\"%d %d %d %d %d\", i, j, k, l, m); }"
    options:
      - 0 0 1 2 0
      - 0 0 1 3 0
      - 0 0 1 3 1
      - 0 0 0 2 1
    answer: 2
    explanation: Logical operations always give a result of 1 or 0 . And also the logical AND (&&) operator has higher priority over the logical OR (||) operator. So the expression 'i++ && j++ && k++' is executed first. The result of this expression is 0 (-1 && -1 && 0 = 0). Now the expression is 0 || 2 which evaluates to 1 (because OR operator always gives 1 except for '0 || 0' combination- for which it gives 0). So the value of m is 1. The values of other variables are also incremented by 1.
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: "Determine Output: void main() { int i = -1; +i; printf(\"i = %d, +i = %d\", i, +i); }"
    options:
      - i = -1, +i = 1
      - i = 1, +i = 1
      - i = -1, +i = -1
      - None of These
    answer: 2
    explanation: Unary + is the only dummy operator in C. Where-ever it comes you can just ignore it just because it has no effect in the expressions (hence the name dummy operator).
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: "Determine Output: void main() { char *str1 = \"abcd\"; char str2[] = \"abcd\"; printf(\"%d %d %d\", sizeof(str1), sizeof(str2), sizeof(\"abcd\")); }"
    options:
      - 2 5 5
      - 5 5 5
      - 2 4 5
      - 2 4 4
    answer: 0
    explanation: In first sizeof, str1 is a character pointer so it gives you the size of the pointer variable. In second sizeof the name str2 indicates the name of the array whose size is 5 (including the '\0' termination character). The third sizeof is similar to the second one.
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: "Determine Output: void main() { char not; not = !2; printf(\"%d\", not); }"
    options:
      - "2"
      - Garbage Value
      - "0"
      - None of These
    answer: 2
    explanation: "! is a logical operator. In C the value 0 is considered to be the boolean value FALSE, and any non-zero value is considered to be the boolean value TRUE. Here 2 is a non-zero value so TRUE. !TRUE is FALSE (0) so it prints 0."
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: "Determine Output: #include<stdio.h> void main() { register i=5; char j[]= \"hello\"; printf(\"%s %d\", j, i); }"
    options:
      - hello 5
      - hello garbage value
      - Error
      - None of These
    answer: 0
    explanation: If you declare i as register compiler will treat it as ordinary integer and it will take integer value. i value may be stored either in register or in memory.
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: "Determine Output: void main() { int i=5, j=6, z; printf(\"%d\", i+++j); }"
    options:
      - "12"
      - "13"
      - "11"
      - None of These
    answer: 2
    explanation: The expression i+++j is treated as ((i++) + j)
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: "Determine Output: void main() { int i = abc(10); printf(\"%d\", --i); } int abc(int i) { return(i++); }"
    options:
      - "10"
      - "9"
      - "11"
      - None of These
    answer: 1
    explanation: "\" return ( i++ ) \", it will first return i and then increment it. i.e. 10 will be returned."
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: "Determine Output: void main() { char a[]=\"12345\"; int i = strlen(a); printf(\"%d\", ++i); }"
    options:
      - "5"
      - "6"
      - "7"
      - None of These
    answer: 1
    explanation: The char array 'a' will hold the initialized string, whose length will be counted from 0 till the null character. Hence the 'i' will hold the value equal to 5, after the pre-increment in the printf statement, then 6 will be printed.
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: "Determine Output: void main() { int i; char a[]=\"�\"; if(printf(\"%sn\", a)) printf(\"Ok here n\"); else printf(\"Forget itn\"); }"
    options:
      - Ok here
      - Forget it
      - Error
      - None of These
    answer: 0
    explanation: Printf will return how many characters does it print. Hence printing a null character returns 1 which makes the if statement true, thus "Ok here" is printed.
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: "Determine Output: void main() { int i=i++, j=j++, k=k++; printf(\"%d %d %d\", i, j, k); }"
    options:
      - 1 1 1
      - 0 0 0
      - garbage values
      - Error
    answer: 2
    explanation: An identifier is available to use in program code from the point of its declaration. So expressions such as i = i++ are valid statements. The i, j and k are automatic variables and so they contain some garbage value.
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: "Determine Output: void main() { static int i=i++, j=j++, k=k++; printf(\"%d %d %d\", i, j, k); }"
    options:
      - 1 1 1
      - 0 0 0
      - garbage values
      - Error
    answer: 0
    explanation: Since static variables are initialized to zero by default.
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: "Determine Output: #define prod(a,b) a*b void main() { int x=3, y=4; printf(\"%d\", prod(x+2, y-1)); }"
    options:
      - "15"
      - "10"
      - "12"
      - "11"
    answer: 1
    explanation: "The macro expands and evaluates to as: x+2*y-1 => x+(2*y)-1 => 10"
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: "Determine Output: void main() { char p[]=\"%dn\"; p[1] = 'c'; printf(p, 65); }"
    options:
      - "65"
      - c
      - A
      - Error
    answer: 2
    explanation: Due to the assignment p[1] = 'c' the string becomes, " %c \n ". Since this string becomes the format string for printf and ASCII value of 65 is 'A', the same gets printed.
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: "Determine Output: void main() { char *p; p=\"%d\\n\"; p++; p++; printf(p-2, 300); }"
    options:
      - "%d\\n"
      - "300"
      - Error
      - None of These
    answer: 1
    explanation: The pointer points to % since it is incremented twice and again decremented by 2, it points to ' %d \n ' and 300 is printed.
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: "Determine Output: void main() { int c[] = {2.8,3.4,4,6.7,5}; int j, *p=c, *q=c; for(j=0;j<5;j++){ printf(\" %d \", *c); ++q; } for(j=0;j<5;j++){ printf(\" %d \", *p); ++p; } }"
    options:
      - 2 3 4 6 5 2 3 4 6 5
      - 2.8 3.4 4 6.7 5 2.8 3.4 4 6.7
      - 2.8 2.8 2.8 2.8 2.8 2.8 3.4 4
      - 2 2 2 2 2 2 3 4 6 5
    answer: 3
    explanation: Initially pointer c is assigned to both p and q. In the first loop, since only q is incremented and not c , the value 2 will be printed 5 times. In second loop p itself is incremented. So the values 2 3 4 6 5 will be printed.
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: "Determine Output: void main() { int a[] = {10,20,30,40,50}, j, *p; for(j=0; j<5; j++){ printf(\"%d\" ,*a); a++; } p = a; for(j=0; j<5; j++){ printf(\"%d\" ,*p); p++; } }"
    options:
      - 10 20 30 40 50 10 20 30 40 50
      - 10 20 30 40 50 Garbage Value
      - Error
      - None of These
    answer: 2
    explanation: "Compiler error: lvalue required Error is in line with statement a++. The operand must be an lvalue and may be of any of scalar type for any operator, array name only when subscripted is an lvalue. Simply array name is a non-modifiable lvalue."
    keyConcept: C Miscellaneous
    testedIn:
      - FPSC
      - PPSC
---


