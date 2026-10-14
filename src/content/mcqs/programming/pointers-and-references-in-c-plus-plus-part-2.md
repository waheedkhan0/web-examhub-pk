---
title: Pointers And References In C Plus Plus — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Pointers And References In C Plus Plus — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: pointers-and-references-in-c-plus-plus-part-2
topicName: Pointers And References In C Plus Plus — Part 2
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
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> #include <cstdlib> using namespace std; int main(int argc, char const *argv[]) { int a = 5; int *p = &a; int &q = a; cout<<p<<endl; cout<<q<<endl; return 0; }"
    options:
      - Address of a followed by 5 in next line
      - Address of p followed by 5 in next line
      - Address of a followed by Address of a in next line
      - Address of p followed by Address of q in next line
    answer: 0
    explanation: "Address of a followed by 5 in next line is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> #include <cstdlib> using namespace std; int main(int argc, char const *argv[]) { int a = 5; int *p = &a; int &q = a; cout<<p<<endl; cout<<q<<endl; return 0; }”. This question is standard in competitive examination syllabi for Pointers And References In C Plus Plus."
    keyConcept: Pointers And References In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: How to declare a wide character in the string literal?
    options:
      - L prefix
      - W prefix
      - Z prefix
    answer: 0
    explanation: L prefix is the correct answer to “How to declare a wide character in the string literal”. This question is standard in competitive examination syllabi for Pointers And References In C Plus Plus.
    keyConcept: Pointers And References In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Pick the correct statement about references.
    options:
      - References can be assigned value NULL
      - References once assigned cannot be changed to refer another variable
      - Reference should not be initialized when created
      - Reference is the same as pointers
    answer: 1
    explanation: References once assigned cannot be changed to refer another variable is the correct answer to “Pick the correct statement about references.”. This question is standard in competitive examination syllabi for Pointers And References In C Plus Plus.
    keyConcept: Pointers And References In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; int main () { int numbers[5]; int * p; p = numbers; *p = 10; p++; *p = 20; p = &numbers[2]; *p = 30; p = numbers + 3; *p = 40; p = numbers; *(p + 4) = 50; for (int n = 0; n < 5; n++) cout << numbers[n] << \",\"; return 0; }"
    options:
      - 10,20,30,40,50,
      - "1020304050"
      - compile error
      - runtime error
    answer: 0
    explanation: "10,20,30,40,50, is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; int main () { int numbers[5]; int * p; p = numbers; *p = 10; p++; *p = 20; p = &numbers[2]; *p = 30; p = numbers + 3; *p = 40; p = numbers; *(p + 4) = 50; for (int n = 0; n < 5; n++) cout << numbers[n] << \",\"; return 0; }”. This question is standard in competitive examination syllabi for Pointers And References In C Plus Plus."
    keyConcept: Pointers And References In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> #include <cstdlib> using namespace std; void func(const int &a) { int temp = 10; a = temp; cout<<a; } int main(int argc, char const *argv[]) { int a = 5; func(a); return 0; }"
    options:
      - "5"
      - "10"
      - Error
      - Segmentation fault
    answer: 2
    explanation: "Error is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> #include <cstdlib> using namespace std; void func(const int &a) { int temp = 10; a = temp; cout<<a; } int main(int argc, char const *argv[]) { int a = 5; func(a); return 0; }”. This question is standard in competitive examination syllabi for Pointers And References In C Plus Plus."
    keyConcept: Pointers And References In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; int main() { int i; char c; void *data; i = 2; c = 'd'; data = &i; cout << \"the data points to the integer value\" << data; data = &c; cout << \"the data now points to the character\" << data; return 0; }"
    options:
      - 2d
      - two memory addresses
      - 3d
      - 4d
    answer: 1
    explanation: "two memory addresses is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; int main() { int i; char c; void *data; i = 2; c = 'd'; data = &i; cout << \"the data points to the integer value\" << data; data = &c; cout << \"the data now points to the character\" << data; return 0; }”. This question is standard in competitive examination syllabi for Pointers And References In C Plus Plus."
    keyConcept: Pointers And References In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: Regarding the following statement which of the statements is true? const int a = 100;
    options:
      - Declares a variable a with 100 as its initial value
      - Declares a construction a with 100 as its initial value
      - Declares a constant a whose value will be 100
      - Constructs an integer type variable with an as identifier and 100 as the value
    answer: 2
    explanation: Declares a constant a whose value will be 100 is the correct answer to “Regarding the following statement which of the statements is true? const int a = 100;”. This question is standard in competitive examination syllabi for Pointers And References In C Plus Plus.
    keyConcept: Pointers And References In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; int main() { char *ptr; char Str[] = \"abcdefg\"; ptr = Str; ptr += 5; cout << ptr; return 0; }"
    options:
      - fg
      - cdef
      - defg
      - abcd
    answer: 0
    explanation: "fg is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; int main() { char *ptr; char Str[] = \"abcdefg\"; ptr = Str; ptr += 5; cout << ptr; return 0; }”. This question is standard in competitive examination syllabi for Pointers And References In C Plus Plus."
    keyConcept: Pointers And References In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> #include <cstdlib> using namespace std; int main(int argc, char const *argv[]) { int a = 5; int &q = a; cout<<&a<<endl; cout<<&q<<endl; return 0; }"
    options:
      - 5 5
      - Address of p followed by 5 in next line
      - 5 followed by Address of a in next line
      - Address of a followed by Address of a in next line
    answer: 3
    explanation: "Address of a followed by Address of a in next line is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> #include <cstdlib> using namespace std; int main(int argc, char const *argv[]) { int a = 5; int &q = a; cout<<&a<<endl; cout<<&q<<endl; return 0; }”. This question is standard in competitive examination syllabi for Pointers And References In C Plus Plus."
    keyConcept: Pointers And References In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: The pointer can point to any variable that is not declared with which of these?
    options:
      - const
      - volatile
      - both const & volatile
      - static
    answer: 2
    explanation: both const & volatile is the correct answer to “The pointer can point to any variable that is not declared with which of these”. This question is standard in competitive examination syllabi for Pointers And References In C Plus Plus.
    keyConcept: Pointers And References In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; void swap(int &a, int &b); int main() { int a = 5, b = 10; swap(a, b); cout << \"In main \" << a << b; return 0; } void swap(int &a, int &b) { int temp; temp = a; a = b; b = temp; cout << \"In swap \" << a << b; }"
    options:
      - In swap 105 In main 105
      - In swap 105 In main 510
      - In swap 510 In main 105
      - In swap 510 In main 510
    answer: 0
    explanation: "In swap 105 In main 105 is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; void swap(int &a, int &b); int main() { int a = 5, b = 10; swap(a, b); cout << \"In main \" << a << b; return 0; } void swap(int &a, int &b) { int temp; temp = a; a = b; b = temp; cout << \"In swap \" << a << b; }”. This question is standard in competitive examination syllabi for Pointers And References In C Plus Plus."
    keyConcept: Pointers And References In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; int main() { int a = 5, b = 10, c = 15; int *arr[ ] = {&a, &b, &c}; cout << arr[1]; return 0; }"
    options:
      - "5"
      - "10"
      - "15"
      - it will return some random number
    answer: 3
    explanation: "it will return some random number is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; int main() { int a = 5, b = 10, c = 15; int *arr[ ] = {&a, &b, &c}; cout << arr[1]; return 0; }”. This question is standard in competitive examination syllabi for Pointers And References In C Plus Plus."
    keyConcept: Pointers And References In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: "What will be the output of the following C++ code? #include<iostream> using namespace std; int main() { int x = 10; int& ref = x; ref = 20; cout << x << endl ; x = 30; cout << ref << endl; return 0; }"
    options:
      - 20 30
      - 10 10
      - 10 20
      - 10 30
    answer: 0
    explanation: "20 30 is the correct answer to “What will be the output of the following C++ code? #include<iostream> using namespace std; int main() { int x = 10; int& ref = x; ref = 20; cout << x << endl ; x = 30; cout << ref << endl; return 0; }”. This question is standard in competitive examination syllabi for Pointers And References In C Plus Plus."
    keyConcept: Pointers And References In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; int main() { int a[2][4] = {3, 6, 9, 12, 15, 18, 21, 24}; cout << *(a[1] + 2) << *(*(a + 1) + 2) << 2[1[a]]; return 0; }"
    options:
      - 15 18 21
      - 21 21 21
      - 24 24 24
      - Compile time error
    answer: 1
    explanation: "21 21 21 is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; int main() { int a[2][4] = {3, 6, 9, 12, 15, 18, 21, 24}; cout << *(a[1] + 2) << *(*(a + 1) + 2) << 2[1[a]]; return 0; }”. This question is standard in competitive examination syllabi for Pointers And References In C Plus Plus."
    keyConcept: Pointers And References In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; int main() { int i; const char *arr[] = {\"C\", \"C++\", \"Java\", \"VBA\"}; const char *(*ptr)[4] = &arr; cout << ++(*ptr)[2]; return 0; }"
    options:
      - ava
      - java
      - c++
      - compile time error
    answer: 0
    explanation: "ava is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; int main() { int i; const char *arr[] = {\"C\", \"C++\", \"Java\", \"VBA\"}; const char *(*ptr)[4] = &arr; cout << ++(*ptr)[2]; return 0; }”. This question is standard in competitive examination syllabi for Pointers And References In C Plus Plus."
    keyConcept: Pointers And References In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: Pick the correct statement about references in C++.
    options:
      - References stores the address of variables
      - References and variables both have the same address
      - References use dereferencing operator(*) to access the value of variable its referencing
      - References were also available in C
    answer: 1
    explanation: References and variables both have the same address is the correct answer to “Pick the correct statement about references in C++.”. This question is standard in competitive examination syllabi for Pointers And References In C Plus Plus.
    keyConcept: Pointers And References In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: A void pointer cannot point to which of these?
    options:
      - methods in c++
      - class member in c++
      - methods & class member in c++
      - none of the mentioned
    answer: 3
    explanation: none of the mentioned is the correct answer to “A void pointer cannot point to which of these”. This question is standard in competitive examination syllabi for Pointers And References In C Plus Plus.
    keyConcept: Pointers And References In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: Identify the correct sentence regarding inequality between reference and pointer.
    options:
      - we can not create the array of reference
      - we can create the Array of reference
      - we can use reference to reference
      - we can use variable
    answer: 0
    explanation: we can not create the array of reference is the correct answer to “Identify the correct sentence regarding inequality between reference and pointer.”. This question is standard in competitive examination syllabi for Pointers And References In C Plus Plus.
    keyConcept: Pointers And References In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: Which of the following is illegal?
    options:
      - int *ip
      - string s, *sp = 0
      - int i; double* dp = &i
      - int *pi = 0
    answer: 2
    explanation: int i; double* dp = &i is the correct answer to “Which of the following is illegal”. This question is standard in competitive examination syllabi for Pointers And References In C Plus Plus.
    keyConcept: Pointers And References In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> #include <cstdlib> using namespace std; int main(int argc, char const *argv[]) { int a = 5; int *p = &a; int *(&q) = p; cout<<q; return 0; }"
    options:
      - "5"
      - Address of pointer a
      - Address of pointer p
      - Error
    answer: 1
    explanation: "Address of pointer a is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> #include <cstdlib> using namespace std; int main(int argc, char const *argv[]) { int a = 5; int *p = &a; int *(&q) = p; cout<<q; return 0; }”. This question is standard in competitive examination syllabi for Pointers And References In C Plus Plus."
    keyConcept: Pointers And References In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: Which one of the following is not a possible state for a pointer.
    options:
      - hold the address of the specific object
      - point one past the end of an object
      - zero
      - point to a type
    answer: 3
    explanation: point to a type is the correct answer to “Which one of the following is not a possible state for a pointer.”. This question is standard in competitive examination syllabi for Pointers And References In C Plus Plus.
    keyConcept: Pointers And References In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: Which value can we not assign to reference?
    options:
      - integer
      - floating
      - unsigned
      - "null"
    answer: 3
    explanation: null is the correct answer to “Which value can we not assign to reference”. This question is standard in competitive examination syllabi for Pointers And References In C Plus Plus.
    keyConcept: Pointers And References In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; int f(int &x, int c) { c = c - 1; if (c == 0) return 1; x = x + 1; return f(x, c) * x; } int main(int argc, char const *argv[]) { int a = 4; cout<<f(a,a); return 0; }"
    options:
      - "343"
      - "336"
      - "120"
      - "840"
    answer: 0
    explanation: "343 is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; int f(int &x, int c) { c = c - 1; if (c == 0) return 1; x = x + 1; return f(x, c) * x; } int main(int argc, char const *argv[]) { int a = 4; cout<<f(a,a); return 0; }”. This question is standard in competitive examination syllabi for Pointers And References In C Plus Plus."
    keyConcept: Pointers And References In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> #include <cstdlib> using namespace std; int main(int argc, char const *argv[]) { int &q = NULL; cout<<q; return 0; }"
    options:
      - "NULL"
      - "0"
      - Address of NULL
      - Error
    answer: 3
    explanation: "Error is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> #include <cstdlib> using namespace std; int main(int argc, char const *argv[]) { int &q = NULL; cout<<q; return 0; }”. This question is standard in competitive examination syllabi for Pointers And References In C Plus Plus."
    keyConcept: Pointers And References In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: Which reference modifier is used to define the reference variable?
    options:
      - "&"
      - $
      - "#"
      - "@"
    answer: 0
    explanation: "& is the correct answer to “Which reference modifier is used to define the reference variable”. This question is standard in competitive examination syllabi for Pointers And References In C Plus Plus."
    keyConcept: Pointers And References In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: The operator used for dereferencing or indirection is . . . . . . . .
    options:
      - "*"
      - "&"
      - "->"
      - –>>
    answer: 0
    explanation: "* is the correct answer to “The operator used for dereferencing or indirection is . . . . . . . .”. This question is standard in competitive examination syllabi for Pointers And References In C Plus Plus."
    keyConcept: Pointers And References In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> #include <cstdlib> using namespace std; int main(int argc, char const *argv[]) { int &q = 5; cout<<q; return 0; }"
    options:
      - "5"
      - Run-time error
      - Segmentation fault
      - Compile-time error
    answer: 3
    explanation: "Compile-time error is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> #include <cstdlib> using namespace std; int main(int argc, char const *argv[]) { int &q = 5; cout<<q; return 0; }”. This question is standard in competitive examination syllabi for Pointers And References In C Plus Plus."
    keyConcept: Pointers And References In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: When does the void pointer can be dereferenced?
    options:
      - when it doesn't point to any value
      - when it cast to another type of object
      - using delete keyword
      - using shift keyword
    answer: 1
    explanation: when it cast to another type of object is the correct answer to “When does the void pointer can be dereferenced”. This question is standard in competitive examination syllabi for Pointers And References In C Plus Plus.
    keyConcept: Pointers And References In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: The constants are also called as . . . . . . . .
    options:
      - const
      - preprocessor
      - literals
      - variables
    answer: 2
    explanation: literals is the correct answer to “The constants are also called as . . . . . . . .”. This question is standard in competitive examination syllabi for Pointers And References In C Plus Plus.
    keyConcept: Pointers And References In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; int main() { int arr[] = {4, 5, 6, 7}; int *p = (arr + 1); cout << *arr + 9; return 0; }"
    options:
      - "12"
      - "5"
      - "13"
      - error
    answer: 2
    explanation: "13 is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; int main() { int arr[] = {4, 5, 6, 7}; int *p = (arr + 1); cout << *arr + 9; return 0; }”. This question is standard in competitive examination syllabi for Pointers And References In C Plus Plus."
    keyConcept: Pointers And References In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> #include <cstdlib> using namespace std; int main(int argc, char const *argv[]) { int &p; int a = 5; &p = a; cout<<p; return 0; }"
    options:
      - "5"
      - "55"
      - Error
      - Segmentation fault
    answer: 2
    explanation: "Error is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> #include <cstdlib> using namespace std; int main(int argc, char const *argv[]) { int &p; int a = 5; &p = a; cout<<p; return 0; }”. This question is standard in competitive examination syllabi for Pointers And References In C Plus Plus."
    keyConcept: Pointers And References In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; int main() { char arr[20]; int i; for(i = 0; i < 10; i++) *(arr + i) = 65 + i; *(arr + i) = '\\0'; cout << arr; return(0); }"
    options:
      - ABCDEFGHIJ
      - AAAAAAAAAA
      - JJJJJJJJ
      - AAAAAAJJJJ
    answer: 0
    explanation: "ABCDEFGHIJ is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; int main() { char arr[20]; int i; for(i = 0; i < 10; i++) *(arr + i) = 65 + i; *(arr + i) = '\\0'; cout << arr; return(0); }”. This question is standard in competitive examination syllabi for Pointers And References In C Plus Plus."
    keyConcept: Pointers And References In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: What are the parts of the literal constants?
    options:
      - integer numerals
      - floating-point numerals
      - strings and boolean values
      - all of the mentioned
    answer: 3
    explanation: all of the mentioned is the correct answer to “What are the parts of the literal constants”. This question is standard in competitive examination syllabi for Pointers And References In C Plus Plus.
    keyConcept: Pointers And References In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: What is the meaning of the following declaration? int(*p[5])();
    options:
      - p is pointer to function
      - p is array of pointer to function
      - p is pointer to such function which return type is the array
      - p is pointer to array of function
    answer: 1
    explanation: p is array of pointer to function is the correct answer to “What is the meaning of the following declaration? int(*p[5])();”. This question is standard in competitive examination syllabi for Pointers And References In C Plus Plus.
    keyConcept: Pointers And References In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: What will happen in the following C++ code snippet? int a = 100, b = 200; int *p = &a, *q = &b; p = q;
    options:
      - b is assigned to a
      - p now points to b
      - a is assigned to b
      - q now points to a
    answer: 1
    explanation: p now points to b is the correct answer to “What will happen in the following C++ code snippet? int a = 100, b = 200; int *p = &a, *q = &b; p = q;”. This question is standard in competitive examination syllabi for Pointers And References In C Plus Plus.
    keyConcept: Pointers And References In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; #define PI 3.14159 int main () { float r = 2; float circle; circle = 2 * PI * r; cout << circle; return 0; }"
    options:
      - "12.5664"
      - "13.5664"
      - "10"
      - "15"
    answer: 0
    explanation: "12.5664 is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; #define PI 3.14159 int main () { float r = 2; float circle; circle = 2 * PI * r; cout << circle; return 0; }”. This question is standard in competitive examination syllabi for Pointers And References In C Plus Plus."
    keyConcept: Pointers And References In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: What is the difference between references and pointers?
    options:
      - References are an alias for a variable whereas pointer stores the address of a variable
      - References and pointers are similar
      - References stores address of variables whereas pointer points to variables
      - Pointers are an alias for a variable whereas references stores the address of a variable
    answer: 0
    explanation: References are an alias for a variable whereas pointer stores the address of a variable is the correct answer to “What is the difference between references and pointers”. This question is standard in competitive examination syllabi for Pointers And References In C Plus Plus.
    keyConcept: Pointers And References In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; int main() { int *p; void *vp; if (vp == p) cout << \"equal\"; return 0; }"
    options:
      - equal
      - no output
      - compile error
      - runtime error
    answer: 0
    explanation: "equal is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; int main() { int *p; void *vp; if (vp == p) cout << \"equal\"; return 0; }”. This question is standard in competitive examination syllabi for Pointers And References In C Plus Plus."
    keyConcept: Pointers And References In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: "What will be the output of the following C++ code? #include<iostream> using namespace std; int &fun() { static int x = 10; return x; } int main() { fun() = 30; cout << fun(); return 0; }"
    options:
      - "30"
      - "10"
      - Error
      - Segmentation fault
    answer: 0
    explanation: "30 is the correct answer to “What will be the output of the following C++ code? #include<iostream> using namespace std; int &fun() { static int x = 10; return x; } int main() { fun() = 30; cout << fun(); return 0; }”. This question is standard in competitive examination syllabi for Pointers And References In C Plus Plus."
    keyConcept: Pointers And References In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> #include <cstdlib> using namespace std; int main(int argc, char const *argv[]) { int a = 5; int *p = &a; int &q = p; cout<<p; return 0; }"
    options:
      - "5"
      - Run-time error
      - Segmentation fault
      - Compile-time error
    answer: 3
    explanation: "Compile-time error is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> #include <cstdlib> using namespace std; int main(int argc, char const *argv[]) { int a = 5; int *p = &a; int &q = p; cout<<p; return 0; }”. This question is standard in competitive examination syllabi for Pointers And References In C Plus Plus."
    keyConcept: Pointers And References In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
---


