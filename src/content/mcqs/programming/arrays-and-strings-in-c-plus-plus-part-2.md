---
title: Arrays And Strings In C Plus Plus — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Arrays And Strings In C Plus Plus — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: arrays-and-strings-in-c-plus-plus-part-2
topicName: Arrays And Strings In C Plus Plus — Part 2
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
    question: How do you access the element at the second row and third column of a two-dimensional array named 'matrix' in C++?
    options:
      - matrix(3, 2)
      - matrix[3][2]
      - matrix(2, 3)
      - matrix[2][3]
    answer: 3
    explanation: matrix[2][3] is the correct answer to “How do you access the element at the second row and third column of a two-dimensional array named 'matrix' in C++”. This question is standard in competitive examination syllabi for Arrays And Strings In C Plus Plus.
    keyConcept: Arrays And Strings In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: Which of the following is true regarding the declaration of a string in C++ using the char array?
    options:
      - It can be initialized using the assignment operator
      - It cannot be modified after initialization
      - It requires a null character at the end
      - It automatically allocates memory for the null character
    answer: 2
    explanation: It requires a null character at the end is the correct answer to “Which of the following is true regarding the declaration of a string in C++ using the char array”. This question is standard in competitive examination syllabi for Arrays And Strings In C Plus Plus.
    keyConcept: Arrays And Strings In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Which is an instantiation of the basic_string class template?
    options:
      - Character
      - String class
      - Memory
      - Iterator
    answer: 1
    explanation: String class is the correct answer to “Which is an instantiation of the basic_string class template”. This question is standard in competitive examination syllabi for Arrays And Strings In C Plus Plus.
    keyConcept: Arrays And Strings In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; int main () { string str=\"Steve Jobs founded the apple\"; string str2 = str.substr (6, 4); unsigned pos = str.find(\"the\"); string str3 = str.substr (pos); cout << str2 << ' ' << str3 << '\\n'; return 0; }"
    options:
      - Jobs the apple
      - the apple
      - Steve
      - Jobs
    answer: 0
    explanation: "Jobs the apple is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; int main () { string str=\"Steve Jobs founded the apple\"; string str2 = str.substr (6, 4); unsigned pos = str.find(\"the\"); string str3 = str.substr (pos); cout << str2 << ' ' << str3 << '\\n'; return 0; }”. This question is standard in competitive examination syllabi for Arrays And Strings In C Plus Plus."
    keyConcept: Arrays And Strings In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: "What will be the output of the following C++ code? #include <stdio.h> #include<iostream> using namespace std; int main() { int a = 5, b = 10, c = 15; int arr[3] = {&a, &b, &c}; cout << *arr[*arr[1] - 8]; return 0; }"
    options:
      - "15"
      - "18"
      - garbage value
      - compile time error
    answer: 3
    explanation: "compile time error is the correct answer to “What will be the output of the following C++ code? #include <stdio.h> #include<iostream> using namespace std; int main() { int a = 5, b = 10, c = 15; int arr[3] = {&a, &b, &c}; cout << *arr[*arr[1] - 8]; return 0; }”. This question is standard in competitive examination syllabi for Arrays And Strings In C Plus Plus."
    keyConcept: Arrays And Strings In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; int main () { string str (\"Steve jobs\"); cout << str.length(); return 0; }"
    options:
      - "8"
      - "10"
      - "12"
      - "9"
    answer: 1
    explanation: "10 is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; int main () { string str (\"Steve jobs\"); cout << str.length(); return 0; }”. This question is standard in competitive examination syllabi for Arrays And Strings In C Plus Plus."
    keyConcept: Arrays And Strings In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What will happen if a string is empty?
    options:
      - It can't be created
      - Raises an error
      - It can be used
      - It cannot be used
    answer: 2
    explanation: It can be used is the correct answer to “What will happen if a string is empty”. This question is standard in competitive examination syllabi for Arrays And Strings In C Plus Plus.
    keyConcept: Arrays And Strings In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: How many parameters can a resize method take?
    options:
      - "1"
      - "2"
      - 1 or 2
      - None of the above
    answer: 2
    explanation: 1 or 2 is the correct answer to “How many parameters can a resize method take”. This question is standard in competitive examination syllabi for Arrays And Strings In C Plus Plus.
    keyConcept: Arrays And Strings In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: "What will be the output of the following C++ code? #include <stdio.h> #include <iostream> using namespace std; int main() { int array[] = {10, 20, 30}; cout << -2[array]; return 0; }"
    options:
      - "-15"
      - "-30"
      - compile time error
      - garbage value
    answer: 1
    explanation: "-30 is the correct answer to “What will be the output of the following C++ code? #include <stdio.h> #include <iostream> using namespace std; int main() { int array[] = {10, 20, 30}; cout << -2[array]; return 0; }”. This question is standard in competitive examination syllabi for Arrays And Strings In C Plus Plus."
    keyConcept: Arrays And Strings In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What is the difference between unsigned int length() and unsigned int size()?
    options:
      - Returns a different value
      - They are same
      - Returns a different value but they are same
      - Returns a length
    answer: 1
    explanation: They are same is the correct answer to “What is the difference between unsigned int length() and unsigned int size()”. This question is standard in competitive examination syllabi for Arrays And Strings In C Plus Plus.
    keyConcept: Arrays And Strings In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: How does the strings are stored in the memory?
    options:
      - Contiguous
      - Non-contiguous
      - "Null"
      - sequence
    answer: 0
    explanation: Contiguous is the correct answer to “How does the strings are stored in the memory”. This question is standard in competitive examination syllabi for Arrays And Strings In C Plus Plus.
    keyConcept: Arrays And Strings In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: "What will be the output of the following C++ code? #include <stdio.h> #include<iostream> using namespace std; int array1[] = {1200, 200, 2300, 1230, 1543}; int array2[] = {12, 14, 16, 18, 20}; int temp, result = 0; int main() { for (temp = 0; temp < 5; temp++) { result += array1[temp]; } for (temp = 0; temp < 4; temp++) { result += array2[temp]; } cout << result; return 0; }"
    options:
      - "6553"
      - "6533"
      - "6522"
      - "12200"
    answer: 1
    explanation: "6533 is the correct answer to “What will be the output of the following C++ code? #include <stdio.h> #include<iostream> using namespace std; int array1[] = {1200, 200, 2300, 1230, 1543}; int array2[] = {12, 14, 16, 18, 20}; int temp, result = 0; int main() { for (temp = 0; temp < 5; temp++) { result += array1[temp]; } for (temp = 0; temp < 4; temp++) { result += array2[temp]; } cout << result; return 0; }”. This question is standard in competitive examination syllabi for Arrays And Strings In C Plus Plus."
    keyConcept: Arrays And Strings In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; int main () { string str (\"Steve jobs\"); cout << str.capacity() << \"\\n\"; return 0; }"
    options:
      - "9"
      - "10"
      - "11"
      - Not Fix
    answer: 3
    explanation: "Not Fix is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; int main () { string str (\"Steve jobs\"); cout << str.capacity() << \"\\n\"; return 0; }”. This question is standard in competitive examination syllabi for Arrays And Strings In C Plus Plus."
    keyConcept: Arrays And Strings In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: How many maximum number of parameters does a string constructor can take?
    options:
      - "1"
      - "2"
      - "3"
      - "4"
    answer: 2
    explanation: 3 is the correct answer to “How many maximum number of parameters does a string constructor can take”. This question is standard in competitive examination syllabi for Arrays And Strings In C Plus Plus.
    keyConcept: Arrays And Strings In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; int main () { string str; string str2=\"Steve jobs\"; string str3=\"He founded apple\"; str.append(str2); str.append(str3, 6, 3); str.append(str3.begin() + 6, str3.end()); str.append(5,0x2e); cout << str << '\\n'; return 0; }"
    options:
      - Steve jobs
      - He founded apple
      - Steve
      - Steve jobsndended apple.....
    answer: 3
    explanation: "Steve jobsndended apple..... is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; int main () { string str; string str2=\"Steve jobs\"; string str3=\"He founded apple\"; str.append(str2); str.append(str3, 6, 3); str.append(str3.begin() + 6, str3.end()); str.append(5,0x2e); cout << str << '\\n'; return 0; }”. This question is standard in competitive examination syllabi for Arrays And Strings In C Plus Plus."
    keyConcept: Arrays And Strings In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: Which of the following accesses the seventh element stored in array?
    options:
      - array[6]
      - array[7]
      - array(7)
      - array
    answer: 0
    explanation: array[6] is the correct answer to “Which of the following accesses the seventh element stored in array”. This question is standard in competitive examination syllabi for Arrays And Strings In C Plus Plus.
    keyConcept: Arrays And Strings In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What is the correct definition of an array?
    options:
      - An array is a series of elements of the same type in contiguous memory locations
      - An array is a series of element
      - An array is a series of elements of the same type placed in non-contiguous memory locations
      - An array is an element of the different type
    answer: 0
    explanation: An array is a series of elements of the same type in contiguous memory locations is the correct answer to “What is the correct definition of an array”. This question is standard in competitive examination syllabi for Arrays And Strings In C Plus Plus.
    keyConcept: Arrays And Strings In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: Which of the following gives the memory address of the first element in array?
    options:
      - array[0]
      - array[1]
      - array(2)
      - array
    answer: 3
    explanation: array is the correct answer to “Which of the following gives the memory address of the first element in array”. This question is standard in competitive examination syllabi for Arrays And Strings In C Plus Plus.
    keyConcept: Arrays And Strings In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: Which character is used to terminate the string?
    options:
      - $
      - "Null"
      - Empty
      - "@"
    answer: 1
    explanation: Null is the correct answer to “Which character is used to terminate the string”. This question is standard in competitive examination syllabi for Arrays And Strings In C Plus Plus.
    keyConcept: Arrays And Strings In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: Where are the strings stored?
    options:
      - Stack
      - Heap
      - Both Stack & Heap
      - Queue
    answer: 2
    explanation: Both Stack & Heap is the correct answer to “Where are the strings stored”. This question is standard in competitive examination syllabi for Arrays And Strings In C Plus Plus.
    keyConcept: Arrays And Strings In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; int main () { string str (\"I like to code in C\"); unsigned sz = str.size(); str.resize (sz + 2, '+'); str.resize (14); cout << str << '\\n'; return 0; }"
    options:
      - I like to code in c
      - I like to code
      - I like to code in c++
      - I like to codeI like to code
    answer: 1
    explanation: "I like to code is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; int main () { string str (\"I like to code in C\"); unsigned sz = str.size(); str.resize (sz + 2, '+'); str.resize (14); cout << str << '\\n'; return 0; }”. This question is standard in competitive examination syllabi for Arrays And Strings In C Plus Plus."
    keyConcept: Arrays And Strings In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: "What will be the output of the following C++ code? #include <iostream> #include <cstring> #include <string> using namespace std; int main () { string str (\"Steve jobs\"); char * cstr = new char [str.length() + 1]; strcpy (cstr, str.c_str()); char * p = strtok (cstr,\" \"); while (p != 0) { cout << p << '\\n'; p = strtok(NULL,\" \"); } delete[] cstr; return 0; }"
    options:
      - Steve jo
      - Steve jobs
      - Error
    answer: 2
    explanation: "Error is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <cstring> #include <string> using namespace std; int main () { string str (\"Steve jobs\"); char * cstr = new char [str.length() + 1]; strcpy (cstr, str.c_str()); char * p = strtok (cstr,\" \"); while (p != 0) { cout << p << '\\n'; p = strtok(NULL,\" \"); } delete[] cstr; return 0; }”. This question is standard in competitive examination syllabi for Arrays And Strings In C Plus Plus."
    keyConcept: Arrays And Strings In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: Which constant member functions does not modify the string?
    options:
      - bool empty()
      - assign
      - append
      - delete
    answer: 0
    explanation: bool empty() is the correct answer to “Which constant member functions does not modify the string”. This question is standard in competitive examination syllabi for Arrays And Strings In C Plus Plus.
    keyConcept: Arrays And Strings In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: "What will be the output of the following C++ code? #include <stdio.h> #include <iostream> using namespace std; int main() { char str[5] = \"ABC\"; cout << str[3]; cout << str; return 0; }"
    options:
      - ABC
      - ABCD
      - AB
      - AC
    answer: 0
    explanation: "ABC is the correct answer to “What will be the output of the following C++ code? #include <stdio.h> #include <iostream> using namespace std; int main() { char str[5] = \"ABC\"; cout << str[3]; cout << str; return 0; }”. This question is standard in competitive examination syllabi for Arrays And Strings In C Plus Plus."
    keyConcept: Arrays And Strings In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: What is the index number of the last element of an array with 9 elements?
    options:
      - "9"
      - "8"
      - "0"
      - Programmer-defined
    answer: 1
    explanation: 8 is the correct answer to “What is the index number of the last element of an array with 9 elements”. This question is standard in competitive examination syllabi for Arrays And Strings In C Plus Plus.
    keyConcept: Arrays And Strings In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Which header file is used to manipulate the string?
    options:
      - iostream
      - iomanip
      - string
      - container
    answer: 2
    explanation: string is the correct answer to “Which header file is used to manipulate the string”. This question is standard in competitive examination syllabi for Arrays And Strings In C Plus Plus.
    keyConcept: Arrays And Strings In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; int main () { string str (\"Test string\"); for ( string :: iterator it = str.begin(); it != 5; ++it) cout << *it; return 0; }"
    options:
      - Test
      - string
      - Test string
      - Error
    answer: 3
    explanation: "Error is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; int main () { string str (\"Test string\"); for ( string :: iterator it = str.begin(); it != 5; ++it) cout << *it; return 0; }”. This question is standard in competitive examination syllabi for Arrays And Strings In C Plus Plus."
    keyConcept: Arrays And Strings In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; int main () { string str (\"Steve jobs founded the apple\"); string str2 (\"apple\"); unsigned found = str.find(str2); if (found != string :: npos) cout << found << '\\n'; return 0; }"
    options:
      - apple
      - "12"
      - "23"
      - Steve jobs founded the
    answer: 2
    explanation: "23 is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; int main () { string str (\"Steve jobs founded the apple\"); string str2 (\"apple\"); unsigned found = str.find(str2); if (found != string :: npos) cout << found << '\\n'; return 0; }”. This question is standard in competitive examination syllabi for Arrays And Strings In C Plus Plus."
    keyConcept: Arrays And Strings In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; int main () { string name (\"Jobs\"); string family (\"Steve\"); name += \" Apple \"; name += family; name += '\\n'; cout << name; return 0; }"
    options:
      - Steve Jobs
      - Apple
      - Jobs Apple Steve
      - Apple Steve
    answer: 2
    explanation: "Jobs Apple Steve is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; int main () { string name (\"Jobs\"); string family (\"Steve\"); name += \" Apple \"; name += family; name += '\\n'; cout << name; return 0; }”. This question is standard in competitive examination syllabi for Arrays And Strings In C Plus Plus."
    keyConcept: Arrays And Strings In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: Which of the following correctly declares an array?
    options:
      - int array[10]
      - int array
      - array{10}
      - array array[10]
    answer: 0
    explanation: int array[10] is the correct answer to “Which of the following correctly declares an array”. This question is standard in competitive examination syllabi for Arrays And Strings In C Plus Plus.
    keyConcept: Arrays And Strings In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: "What will be the output of the following C++ code? #include <stdio.h> #include<iostream> using namespace std; int main () { int array[] = {0, 2, 4, 6, 7, 5, 3}; int n, result = 0; for (n = 0; n < 8; n++) { result += array[n]; } cout << result; return 0; }"
    options:
      - "25"
      - "26"
      - "27"
      - "21"
    answer: 2
    explanation: "27 is the correct answer to “What will be the output of the following C++ code? #include <stdio.h> #include<iostream> using namespace std; int main () { int array[] = {0, 2, 4, 6, 7, 5, 3}; int n, result = 0; for (n = 0; n < 8; n++) { result += array[n]; } cout << result; return 0; }”. This question is standard in competitive examination syllabi for Arrays And Strings In C Plus Plus."
    keyConcept: Arrays And Strings In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; int main () { string str (\"Steve jobs\"); unsigned long int found = str.find_first_of(\"aeiou\"); while (found != string :: npos) { str[found] = '*'; found = str.find_first_of(\"aeiou\", found + 1); } cout << str << '\\n'; return 0; }"
    options:
      - Steve
      - jobs
      - St*v* j*bs
      - St*v*
    answer: 2
    explanation: "St*v* j*bs is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; int main () { string str (\"Steve jobs\"); unsigned long int found = str.find_first_of(\"aeiou\"); while (found != string :: npos) { str[found] = '*'; found = str.find_first_of(\"aeiou\", found + 1); } cout << str << '\\n'; return 0; }”. This question is standard in competitive examination syllabi for Arrays And Strings In C Plus Plus."
    keyConcept: Arrays And Strings In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
---


