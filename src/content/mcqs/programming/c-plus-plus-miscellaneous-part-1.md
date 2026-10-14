---
title: C Plus Plus Miscellaneous — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on C Plus Plus Miscellaneous — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: c-plus-plus-miscellaneous-part-1
topicName: C Plus Plus Miscellaneous — Part 1
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
    question: "What will be the output of the following C++ code? #include <iostream> #include <complex> using namespace std; int main() { complex <double> cn(3.0, 5.0); cout<<\"Complex number is: \"<<real(cn)<<\" + \"<<imag(cn)<<\"i\"<<endl; return 0; }"
    options:
      - "Complex number is: 3 + 5i"
      - "Complex number is: 5 + 3i"
      - "Complex number is: 9 + 25i"
      - "Complex number is: 3 – 5i"
    answer: 0
    explanation: "In the given C++ code, the complex class from the C++ Standard Library is used to represent a complex number. In the statement complex cn(3.0, 5.0) , the constructor initializes the real part as 3.0 and the imaginary part as 5.0 . The function real(cn) returns the real part of the complex number, which is 3 . The function imag(cn) returns the imaginary part, which is 5 . Hence, the output will be: Complex number is: 3 + 5i ."
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: "What will be the output of the following C++ code? #include <iostream> #include <vector> #include <algorithm> using namespace std; void Display(const vector<int>& vi) { for (size_t i = 0; i < vi.size(); ++i) cout << vi[i]; cout<<endl; } int main() { vector<int> vi; vi.push_back(3); vi.push_back(5); sort(vi.begin(), vi.end()); Display(vi); while(next_permutation(vi.begin(), vi.end())) Display(vi); return 0; }"
    options:
      - 3 5
      - 5 3
      - 5 3 3 5
      - 3 3
    answer: 2
    explanation: "The C++ code uses the STL functions sort() and next_permutation() to display permutations of a vector. Initially, the vector vi contains two elements: 3 and 5 . The sort(vi.begin(), vi.end()) function arranges the elements in ascending order, so the first output will be 3 5 . Then, the next_permutation() function rearranges the vector to the next lexicographical permutation, which will be 5 3 , and it is displayed after sorting. After this, there are no more permutations, so the loop terminates. Thus, the output will be: 5 3 3 5."
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What is the difference between '++i' and 'i++' in C++?
    options:
      - None of the above
      - They both have the same effect
      - "'++i' increments the value of 'i' before returning it, while 'i++' increments the value of 'i' after returning it"
      - "'++i' increments the value of 'i' after returning it, while 'i++' increments the value of 'i' before returning it"
    answer: 2
    explanation: "'++i' increments the value of 'i' before returning it, while 'i++' increments the value of 'i' after returning it is the correct answer to “What is the difference between '++i' and 'i++' in C++”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous."
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What does the 'const' qualifier indicate in C++?
    options:
      - That the variable is a constant
      - That the variable has dynamic storage duration
      - That the variable has external linkage
      - That the value of the variable cannot be changed
    answer: 3
    explanation: That the value of the variable cannot be changed is the correct answer to “What does the 'const' qualifier indicate in C++”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: What is the purpose of the 'inline' keyword in C++?
    options:
      - To declare a variable as inline
      - To define a function as inline
      - To suggest the compiler to inline the function call
      - To declare a function as static
    answer: 2
    explanation: To suggest the compiler to inline the function call is the correct answer to “What is the purpose of the 'inline' keyword in C++”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What is the purpose of the 'volatile' qualifier in C++?
    options:
      - To indicate that a variable should be optimized by the compiler
      - To indicate that a variable may be modified by external factors
      - To indicate that a variable should not be optimized by the compiler
      - None of the above
    answer: 1
    explanation: To indicate that a variable may be modified by external factors is the correct answer to “What is the purpose of the 'volatile' qualifier in C++”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: Which of the following is a valid way to initialize a constant variable in C++?
    options:
      - Using the 'volatile' keyword
      - Using the 'static' keyword
      - Using the 'const' keyword
      - Using the 'constexpr' keyword
    answer: 2
    explanation: Using the 'const' keyword is the correct answer to “Which of the following is a valid way to initialize a constant variable in C++”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What is the purpose of the 'using' directive in C++?
    options:
      - To define a new namespace
      - To declare a variable
      - To declare a function
      - To introduce a name from a namespace into the current scope
    answer: 3
    explanation: To introduce a name from a namespace into the current scope is the correct answer to “What is the purpose of the 'using' directive in C++”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: Which of the following is not a valid C++ data type?
    options:
      - long long
      - long double
      - unsigned float
      - wchar_t
    answer: 2
    explanation: unsigned float is the correct answer to “Which of the following is not a valid C++ data type”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What is the purpose of the typeid operator in C++?
    options:
      - To return the type of an expression
      - To return the memory address of a type
      - To compare two types
      - To perform type casting
    answer: 0
    explanation: To return the type of an expression is the correct answer to “What is the purpose of the typeid operator in C++”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What does the mutable keyword in C++ mean when applied to a class member function?
    options:
      - It specifies that the member function cannot be overridden
      - It specifies that the member function does not modify the object's data members
      - It allows the member function to modify the object's data members declared as static
      - It allows the member function to modify the object's data members declared as const
    answer: 3
    explanation: It allows the member function to modify the object's data members declared as const is the correct answer to “What does the mutable keyword in C++ mean when applied to a class member function”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: Which of the following correctly defines a lambda function in C++?
    options:
      - lambda(int x, int y) { return x + y; }
      - function lambda(int x, int y) { return x + y; }
      - auto lambda = [](int x, int y) { return x + y; }
      - auto lambda(int x, int y) -> int { return x + y; }
    answer: 2
    explanation: auto lambda = [](int x, int y) { return x + y; } is the correct answer to “Which of the following correctly defines a lambda function in C++”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What is the purpose of the static_cast operator in C++?
    options:
      - To perform implicit type conversions
      - To perform explicit type conversions
      - To access static class members
      - None of the above
    answer: 1
    explanation: To perform explicit type conversions is the correct answer to “What is the purpose of the static_cast operator in C++”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: Which of the following is not a valid way to initialize an array in C++?
    options:
      - int arr[5] = {1, 2, 3, 4, 5}
      - int arr[] = {1, 2, 3, 4, 5}
      - int arr[5] {1, 2, 3, 4, 5}
      - int arr[5]; arr = {1, 2, 3, 4, 5}
    answer: 3
    explanation: int arr[5]; arr = {1, 2, 3, 4, 5} is the correct answer to “Which of the following is not a valid way to initialize an array in C++”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What does the nullptr keyword represent in C++?
    options:
      - A null pointer value
      - A reference to a null pointer
      - An empty string
      - An integer value
    answer: 0
    explanation: A null pointer value is the correct answer to “What does the nullptr keyword represent in C++”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What is the purpose of the std::move function in C++?
    options:
      - To access static class members
      - To allocate memory dynamically
      - To perform explicit type conversions
      - To cast an object to an rvalue reference
    answer: 3
    explanation: To cast an object to an rvalue reference is the correct answer to “What is the purpose of the std::move function in C++”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What is the purpose of the std::initializer_list class in C++?
    options:
      - To store a list of initializers
      - To initialize class objects with a list of values at runtime
      - To initialize containers with a list of values at compile time
      - To allocate memory dynamically
    answer: 2
    explanation: To initialize containers with a list of values at compile time is the correct answer to “What is the purpose of the std::initializer_list class in C++”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: What is the purpose of the volatile keyword in C++?
    options:
      - To specify that a variable's value cannot be changed once initialized
      - To indicate that a variable may be changed unexpectedly by hardware or another thread
      - To specify that a function cannot be overridden
      - None of the above
    answer: 1
    explanation: To indicate that a variable may be changed unexpectedly by hardware or another thread is the correct answer to “What is the purpose of the volatile keyword in C++”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: Which of the following is not a valid C++ standard library container?
    options:
      - queue
      - deque
      - ArrayList
      - vector
    answer: 2
    explanation: ArrayList is the correct answer to “Which of the following is not a valid C++ standard library container”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What is the purpose of the const keyword in C++?
    options:
      - To indicate that a variable may be changed unexpectedly by hardware or another thread
      - To indicate that a variable cannot be modified
      - To specify that a function cannot be overridden
      - To specify that a variable's value cannot be changed once initialized
    answer: 3
    explanation: To specify that a variable's value cannot be changed once initialized is the correct answer to “What is the purpose of the const keyword in C++”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: What does RAII stand for in C++?
    options:
      - Resource Acquisition Is Initialization
      - Resource Allocation Is Implementation
      - Resource Allocation Is Initialization
      - Resource Acquisition Is Implementation
    answer: 0
    explanation: Resource Acquisition Is Initialization is the correct answer to “What does RAII stand for in C++”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: Which class is used to design the base class?
    options:
      - abstract class
      - derived class
      - base class
      - derived & base class
    answer: 0
    explanation: abstract class is the correct answer to “Which class is used to design the base class”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: "What will be the output of the following C++ code? #include <iostream> #include <limits> using namespace std; int main( ) { cout << numeric_limits<float> :: is_exact; cout << numeric_limits<double> :: is_exact; cout << numeric_limits<long int> :: is_exact; cout << numeric_limits<unsigned char> :: is_exact; }"
    options:
      - "0010"
      - "0012"
      - "1100"
      - "0011"
    answer: 3
    explanation: "0011 is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <limits> using namespace std; int main( ) { cout << numeric_limits<float> :: is_exact; cout << numeric_limits<double> :: is_exact; cout << numeric_limits<long int> :: is_exact; cout << numeric_limits<unsigned char> :: is_exact; }”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous."
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: Where does the abstract class is used?
    options:
      - base class only
      - derived class
      - both derived & base class
      - virtual class
    answer: 0
    explanation: base class only is the correct answer to “Where does the abstract class is used”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: Which is the best design choice for using pointer to member function?
    options:
      - Interface
      - Class
      - Structure
      - Block
    answer: 0
    explanation: Interface is the correct answer to “Which is the best design choice for using pointer to member function”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Which function is used to check whether a character is punctuation mark?
    options:
      - isxdigit()
      - isprint()
      - iscntrl()
      - ispunct()
    answer: 3
    explanation: ispunct() is the correct answer to “Which function is used to check whether a character is punctuation mark”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: Which function is used to calculate the norm of a complex number?
    options:
      - abs()
      - norm()
      - mod()
      - square_sum()
    answer: 1
    explanation: norm() is the correct answer to “Which function is used to calculate the norm of a complex number”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: "What will be the output of the following C++ code? #include <iostream> #include <cctype> using namespace std; int main(int argc, char const *argv[]) { char arr[20] = \"\\'H3ll0\\'\"; for(int i=0;i<8;i++) { cout<<(bool)ispunct(arr[i]); } }"
    options:
      - "10000010"
      - "111111111110"
      - "111000111110"
      - "111110000000"
    answer: 0
    explanation: "10000010 is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <cctype> using namespace std; int main(int argc, char const *argv[]) { char arr[20] = \"\\'H3ll0\\'\"; for(int i=0;i<8;i++) { cout<<(bool)ispunct(arr[i]); } }”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous."
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: What is the syntax of printing the first element of an array Arr using get() function?
    options:
      - Arr.get(0)
      - get<0>(Arr)
      - Arr.get[0]
      - get<0>[Arr]
    answer: 1
    explanation: get<0>(Arr) is the correct answer to “What is the syntax of printing the first element of an array Arr using get() function”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: "What will be the output of the following C++ code? #include <iostream> #include <vector> #include <forward_list> using namespace std; int main() { forward_list<int> fl1 = {1,7,8,9,10}; forward_list<int> fl2 = {2,3,4,5,6}; fl1.splice_after(fl1.begin(), fl2); for (int&c : fl1) cout << c << \" \"; cout<<endl; return 0; }"
    options:
      - 1 2 3 4 5
      - 1 2 3 4 5 6 7 8 9 10
      - 1 7 8 9 10
      - 2 3 4 5 6
    answer: 1
    explanation: "1 2 3 4 5 6 7 8 9 10 is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <vector> #include <forward_list> using namespace std; int main() { forward_list<int> fl1 = {1,7,8,9,10}; forward_list<int> fl2 = {2,3,4,5,6}; fl1.splice_after(fl1.begin(), fl2); for (int&c : fl1) cout << c << \" \"; cout<<endl; return 0; }”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous."
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: Which of the following is correct about map and multimap?
    options:
      - Map can have same keys whereas multimap cannot
      - Implementation of maps and multimap are different
      - Multimap can have same keys whereas the map cannot
      - Average search time of map is greater than multimap
    answer: 2
    explanation: Multimap can have same keys whereas the map cannot is the correct answer to “Which of the following is correct about map and multimap”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: Which of the following is correct about Input Iterators?
    options:
      - They cannot be decremented
      - Cannot be used in multi-pass algorithms
      - Can only be incremented
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “Which of the following is correct about Input Iterators”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: "What will be the output of the following C++ code? #include <iostream> #include <functional> #include <numeric> using namespace std; int myop (int x, int y) { return x + y; } int main () { int val[] = {1, 2, 3, 5}; int result[7]; adjacent_difference (val, val + 7, result); for (int i = 0; i < 4; i++) cout << result[i] <<' '; return 0; }"
    options:
      - 1 1 1 2
      - 1 2 3 1
      - 1 2 3 5
      - 1 2 5 6
    answer: 0
    explanation: "1 1 1 2 is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <functional> #include <numeric> using namespace std; int myop (int x, int y) { return x + y; } int main () { int val[] = {1, 2, 3, 5}; int result[7]; adjacent_difference (val, val + 7, result); for (int i = 0; i < 4; i++) cout << result[i] <<' '; return 0; }”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous."
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: Pick the incorrect statement.
    options:
      - Vectors have a dynamic size
      - Vectors are placed in contiguous storage
      - Insertion in vectors always takes constant time
      - Vectors insert the element at the end
    answer: 2
    explanation: Insertion in vectors always takes constant time is the correct answer to “Pick the incorrect statement.”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: "Given below classes which of the following are the possible row entries in vtable of D1 class? class Base { public: virtual void function1() {}; virtual void function2() {}; }; class D1: public Base { public: virtual void function1() {}; }; class D2: public Base { public: virtual void function2() {}; };"
    options:
      - Base::function1() and Base::function2()
      - D1::function1() and Base::function2()
      - Base::function1() and D1::function2()
      - D1::function1() and D1::function2()
    answer: 1
    explanation: "D1::function1() and Base::function2() is the correct answer to “Given below classes which of the following are the possible row entries in vtable of D1 class? class Base { public: virtual void function1() {}; virtual void function2() {}; }; class D1: public Base { public: virtual void function1() {}; }; class D2: public Base { public: virtual void function2() {}; };”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous."
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: "What will be the capacity of the vector after 10 is pushed into the vector in the following C++ code? #include <iostream> #include <vector> using namespace std; int main() { vector<int> v; for (int i = 1; i <= 5; i++) v.push_back(i); cout<<v.capacity()<<endl; v.shrink_to_fit(); cout<<v.capacity()<<endl; v.push_back(10); return 0; }"
    options:
      - "8"
      - "10"
      - "5"
      - "6"
    answer: 1
    explanation: "10 is the correct answer to “What will be the capacity of the vector after 10 is pushed into the vector in the following C++ code? #include <iostream> #include <vector> using namespace std; int main() { vector<int> v; for (int i = 1; i <= 5; i++) v.push_back(i); cout<<v.capacity()<<endl; v.shrink_to_fit(); cout<<v.capacity()<<endl; v.push_back(10); return 0; }”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous."
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: Which header file is used for generating random numbers?
    options:
      - <gen_dist>
      - <distribution>
      - <generator>
      - <random>
    answer: 3
    explanation: <random> is the correct answer to “Which header file is used for generating random numbers”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: "What will be the output of the following C++ code? #include<iostream> using namespace std; class X { int m; public: X() : m(10) { } X(int mm): m(mm) { } int getm() { return m; } }; class Y : public X { int n; public: Y(int nn) : n(nn) {} int getn() { return n; } }; int main() { Y yobj( 100 ); cout << yobj.getm() << \" \" << yobj.getn() << endl; }"
    options:
      - 10 100
      - 100 10
      - 10 10
      - 100 100
    answer: 0
    explanation: "10 100 is the correct answer to “What will be the output of the following C++ code? #include<iostream> using namespace std; class X { int m; public: X() : m(10) { } X(int mm): m(mm) { } int getm() { return m; } }; class Y : public X { int n; public: Y(int nn) : n(nn) {} int getn() { return n; } }; int main() { Y yobj( 100 ); cout << yobj.getm() << \" \" << yobj.getn() << endl; }”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous."
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: "What will be the output of the following C++ code? #include <iostream> #include <bitset> using namespace std; int main() { bitset<8> b1(95); bitset<8> b2(45); cout<<~b1<<endl; cout<<(b1|b2)<<endl; cout<<(b1&b2)<<endl; }"
    options:
      - 10100000 01111111 00001101
      - 11111111 01111111 00001101
      - 10100000 00001111 00001101
      - 10100000 01111111 00000000
    answer: 0
    explanation: "10100000 01111111 00001101 is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <bitset> using namespace std; int main() { bitset<8> b1(95); bitset<8> b2(45); cout<<~b1<<endl; cout<<(b1|b2)<<endl; cout<<(b1&b2)<<endl; }”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous."
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: Which function is used to check whether a character is a number?
    options:
      - isalpha()
      - isalnum()
      - isdigit()
      - isblank()
    answer: 2
    explanation: isdigit() is the correct answer to “Which function is used to check whether a character is a number”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
---


