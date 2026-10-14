---
title: C Plus Plus Miscellaneous — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on C Plus Plus Miscellaneous — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: c-plus-plus-miscellaneous-part-2
topicName: C Plus Plus Miscellaneous — Part 2
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
    question: How many kinds of parameters are there in C++?
    options:
      - "1"
      - "2"
      - "3"
      - "5"
    answer: 2
    explanation: 3 is the correct answer to “How many kinds of parameters are there in C++”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: "What will be the output of the following C++ code? #include <iostream> #include <functional> #include <numeric> using namespace std; int myfunction (int x, int y) { return x + 2 * y; } struct myclass { int operator()(int x, int y) { return x + 3 * y; } } myobject; int main () { int init = 100; int numbers[] = {10, 20, 30}; cout << accumulate(numbers, numbers + 3, init); cout << endl; }"
    options:
      - "100"
      - "140"
      - "160"
      - "180"
    answer: 2
    explanation: "160 is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <functional> #include <numeric> using namespace std; int myfunction (int x, int y) { return x + 2 * y; } struct myclass { int operator()(int x, int y) { return x + 3 * y; } } myobject; int main () { int init = 100; int numbers[] = {10, 20, 30}; cout << accumulate(numbers, numbers + 3, init); cout << endl; }”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous."
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Which is used to get the input during runtime?
    options:
      - cout
      - cin
      - coi
      - cinout
    answer: 1
    explanation: cin is the correct answer to “Which is used to get the input during runtime”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What is meant by pure virtual function?
    options:
      - Function which does not have definition of its own
      - Function which does have definition of its own
      - Function which does not have any return type
      - Function which does not have any return type & own definition
    answer: 0
    explanation: Function which does not have definition of its own is the correct answer to “What is meant by pure virtual function”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; class poly { protected: int width, height; public: void set_values(int a, int b) { width = a; height = b; } }; class Coutput { public: void output(int i); }; void Coutput::output(int i) { cout << i; } class rect:public poly, public Coutput { public: int area() { return(width * height); } }; class tri:public poly, public Coutput { public: int area() { return(width * height / 2); } }; int main() { rect rect; tri trgl; rect.set_values(3, 4); trgl.set_values(4, 5); rect.output(rect.area()); trgl.output(trgl.area()); return 0; }"
    options:
      - "1212"
      - "1210"
      - "1010"
      - "1250"
    answer: 1
    explanation: "1210 is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; class poly { protected: int width, height; public: void set_values(int a, int b) { width = a; height = b; } }; class Coutput { public: void output(int i); }; void Coutput::output(int i) { cout << i; } class rect:public poly, public Coutput { public: int area() { return(width * height); } }; class tri:public poly, public Coutput { public: int area() { return(width * height / 2); } }; int main() { rect rect; tri trgl; rect.set_values(3, 4); trgl.set_values(4, 5); rect.output(rect.area()); trgl.output(trgl.area()); return 0; }”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous."
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: How many types of sequence operations are provided by the C++ algorithm STL?
    options:
      - "1"
      - "2"
      - "3"
      - "4"
    answer: 1
    explanation: 2 is the correct answer to “How many types of sequence operations are provided by the C++ algorithm STL”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: "What will be the output of the following C++ code? #include <iostream> #include <memory> #include <string> using namespace std; int main () { string numbers[] = {\"steve\", \"jobs\"}; pair <string*, ptrdiff_t> result = get_temporary_buffer<string>(2); if (result.second>0) { uninitialized_copy ( numbers, numbers + result.second, result.first ); for (int i = 0; i < result.second; i++) cout << result.first[i] << \" \"; return_temporary_buffer(result.first); } return 0; }"
    options:
      - steve
      - jobs
      - jobs steve
      - steve jobs
    answer: 3
    explanation: "steve jobs is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <memory> #include <string> using namespace std; int main () { string numbers[] = {\"steve\", \"jobs\"}; pair <string*, ptrdiff_t> result = get_temporary_buffer<string>(2); if (result.second>0) { uninitialized_copy ( numbers, numbers + result.second, result.first ); for (int i = 0; i < result.second; i++) cout << result.first[i] << \" \"; return_temporary_buffer(result.first); } return 0; }”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous."
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What kind of iteration does forward_list provide in C++?
    options:
      - Uni-directional
      - Bi-directional
      - Multi-directional
      - Bi-directional & Multi-directional
    answer: 0
    explanation: Uni-directional is the correct answer to “What kind of iteration does forward_list provide in C++”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: Which of the following header file is needed to use vectors in your program?
    options:
      - <array>
      - <vector>
      - <containers>
      - <stdio>
    answer: 1
    explanation: <vector> is the correct answer to “Which of the following header file is needed to use vectors in your program”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: "What will be the output of the following C++ code? #include <string> #include <iostream> using namespace std; void string_permutation( string& orig, string& perm ) { if (orig.empty()) { cout<<perm<<endl; return; } for (int i = 0; i < orig.size(); ++i) { string orig2 = orig; orig2.erase(i, 1); string perm2 = perm; perm2 += orig.at(i); string_permutation(orig2, perm2); } } int main() { string orig = \"ter\"; string perm; string_permutation(orig, perm); return 0; }"
    options:
      - ter
      - ert
      - ret
      - returns all the combination of ter
    answer: 3
    explanation: "returns all the combination of ter is the correct answer to “What will be the output of the following C++ code? #include <string> #include <iostream> using namespace std; void string_permutation( string& orig, string& perm ) { if (orig.empty()) { cout<<perm<<endl; return; } for (int i = 0; i < orig.size(); ++i) { string orig2 = orig; orig2.erase(i, 1); string perm2 = perm; perm2 += orig.at(i); string_permutation(orig2, perm2); } } int main() { string orig = \"ter\"; string perm; string_permutation(orig, perm); return 0; }”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous."
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What type of class template is list?
    options:
      - Class-based
      - Node-based
      - Method-based
      - size-based
    answer: 1
    explanation: Node-based is the correct answer to “What type of class template is list”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: Pick out the correct statement about vector.
    options:
      - vector<int> values (5)
      - vector values (5)
      - vector<int> (5)
      - vector<5>
    answer: 0
    explanation: vector<int> values (5) is the correct answer to “Pick out the correct statement about vector.”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: How do define the user-defined exceptions?
    options:
      - inheriting and overriding exception class functionality
      - overriding class functionality
      - inheriting class functionality
      - delting and adding class member
    answer: 0
    explanation: inheriting and overriding exception class functionality is the correct answer to “How do define the user-defined exceptions”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: "What will be the output of the following C++ code? #include <iostream> #include <vector> using namespace std; int main () { vector<int> first; first.assign (7,100); vector<int>::iterator it; it=first.begin()+1; int myints[] = {1776,7,4}; cout << int (first.size()) << '\\n'; return 0; }"
    options:
      - "10"
      - "9"
      - "8"
      - "7"
    answer: 3
    explanation: "7 is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <vector> using namespace std; int main () { vector<int> first; first.assign (7,100); vector<int>::iterator it; it=first.begin()+1; int myints[] = {1776,7,4}; cout << int (first.size()) << '\\n'; return 0; }”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous."
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: "What will be the output of the following C++ code? #include <iostream> #include <Valarray> using namespace std; int main() { Valarray<int> varr = { 1, 2, 3, 4, 5 }; for (int &x: varr) cout << x << \" \"; cout<<endl; varr = varr.shift(2); for (int &x: varr) cout << x << \" \"; return 0; }"
    options:
      - 1 2 3 4 5 3 4 5 0 0
      - 1 2 3 4 5 0 0 3 4 5
      - 1 2 3 4 5 1 2 3 4 5
      - 1 2 3 4 5 3 4 5 1 2
    answer: 0
    explanation: "1 2 3 4 5 3 4 5 0 0 is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <Valarray> using namespace std; int main() { Valarray<int> varr = { 1, 2, 3, 4, 5 }; for (int &x: varr) cout << x << \" \"; cout<<endl; varr = varr.shift(2); for (int &x: varr) cout << x << \" \"; return 0; }”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous."
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What function will be called when we have an uncaught exception?
    options:
      - catch
      - throw
      - terminate
      - try
    answer: 2
    explanation: terminate is the correct answer to “What function will be called when we have an uncaught exception”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: "What will be the output of the following C++ code? #include <iostream> #include <vector> #include <forward_list> using namespace std; int main() { forward_list<int> fl1 = {1,2,3,4,5}; for (int&c : fl1) cout << c << \" \"; cout<<endl; fl1.remove_if([](int x){ return x > 3;}); for (int&c : fl1) cout << c << \" \"; cout<<endl; return 0; }"
    options:
      - 1 2 3 4 5 1 2 3 4 5
      - 1 2 3 4 5 1 2
      - 1 2 3 4 5 1 2 3
      - 4 5 1 2 3 4 5
    answer: 2
    explanation: "1 2 3 4 5 1 2 3 is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <vector> #include <forward_list> using namespace std; int main() { forward_list<int> fl1 = {1,2,3,4,5}; for (int&c : fl1) cout << c << \" \"; cout<<endl; fl1.remove_if([](int x){ return x > 3;}); for (int&c : fl1) cout << c << \" \"; cout<<endl; return 0; }”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous."
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: "What will be the output of the following C++ code? #include <iostream> #include <valarray> using namespace std; int main() { valarray<int> varr = { 10, 2, 20, 1, 30 }; cout<<\"Sum of array: \"<<varr.sum(); return 0; }"
    options:
      - "Sum of array: 20"
      - "Sum of array: 53"
      - "Sum of array: 12"
      - "Sum of array: 63"
    answer: 3
    explanation: "Sum of array: 63 is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <valarray> using namespace std; int main() { valarray<int> varr = { 10, 2, 20, 1, 30 }; cout<<\"Sum of array: \"<<varr.sum(); return 0; }”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous."
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; class Base { public: Base ( ) { cout << \"1\" << endl; } ~Base ( ) { cout << \"2\" << endl; } }; class Derived : public Base { public: Derived ( ) { cout << \"3\" << endl; } ~Derived ( ) { cout << \"4\" << endl; } }; int main( ) { Derived x; }"
    options:
      - "1234"
      - "4321"
      - "1423"
      - "1342"
    answer: 3
    explanation: "1342 is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; class Base { public: Base ( ) { cout << \"1\" << endl; } ~Base ( ) { cout << \"2\" << endl; } }; class Derived : public Base { public: Derived ( ) { cout << \"3\" << endl; } ~Derived ( ) { cout << \"4\" << endl; } }; int main( ) { Derived x; }”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous."
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: "What will be the output of the following C++ code? #include <iostream> #include <bitset> using namespace std; int main() { bitset<8> b1(95); bitset<8> b2 = b1 << 3; cout<<b2; }"
    options:
      - "01110001"
      - "11111000"
      - "01111111"
      - "00001101"
    answer: 1
    explanation: "11111000 is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <bitset> using namespace std; int main() { bitset<8> b1(95); bitset<8> b2 = b1 << 3; cout<<b2; }”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous."
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: What is the main feature of locale in C++?
    options:
      - Sustainability
      - Portability
      - Reliability
      - Sustainability & Reliability
    answer: 1
    explanation: Portability is the correct answer to “What is the main feature of locale in C++”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: Elements in STL heap are removed in . . . . . . . .
    options:
      - decreasing order
      - increasing order
      - alternate i.e. once max element then min element
      - input order
    answer: 0
    explanation: decreasing order is the correct answer to “Elements in STL heap are removed in . . . . . . . .”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: "What will be the output of the following C++ code? #include <iostream> #include <algorithm> #include <vector> using namespace std; int main () { vector<int> myvector; for (int i = 1; i < 5; ++i) myvector.push_back(i); rotate(myvector.begin(), myvector.begin() + 3, myvector.end( )); for (vector<int> :: iterator it = myvector.begin(); it != myvector.end(); ++it) cout << ' ' << *it; return 0; }"
    options:
      - 1 2 3 4
      - 4 3 2 1
      - 3 4 2 1
      - 4 1 2 3
    answer: 3
    explanation: "4 1 2 3 is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <algorithm> #include <vector> using namespace std; int main () { vector<int> myvector; for (int i = 1; i < 5; ++i) myvector.push_back(i); rotate(myvector.begin(), myvector.begin() + 3, myvector.end( )); for (vector<int> :: iterator it = myvector.begin(); it != myvector.end(); ++it) cout << ' ' << *it; return 0; }”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous."
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: What are command line arguments?
    options:
      - Arguments passed to main() function
      - Arguments passed to any function
      - Arguments passed to class functions
      - Arguments passed to structure functions
    answer: 0
    explanation: Arguments passed to main() function is the correct answer to “What are command line arguments”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: How many parameters are there in getline function?
    options:
      - "1"
      - "2"
      - 2 or 3
      - "3"
    answer: 2
    explanation: 2 or 3 is the correct answer to “How many parameters are there in getline function”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Which of the following relationships is uni-directional?
    options:
      - Aggregation
      - Association
      - Composition
      - Both Aggregation and Composition
    answer: 3
    explanation: Both Aggregation and Composition is the correct answer to “Which of the following relationships is uni-directional”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; int main() { int a = 10; if (a < 15) { time: cout << a; goto time; } break; return 0; }"
    options:
      - "1010"
      - "10"
      - infinitely print 10
      - compile time error
    answer: 3
    explanation: "compile time error is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; int main() { int a = 10; if (a < 15) { time: cout << a; goto time; } break; return 0; }”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous."
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: Which is used to create a pure virtual function?
    options:
      - $
      - "=0"
      - "&"
      - "!"
    answer: 1
    explanation: "=0 is the correct answer to “Which is used to create a pure virtual function”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous."
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; int main () { int num = 3; string str_bad = \"wrong number used\"; try { if ( num == 1 ) { throw 5; } if ( num == 2 ) { throw 1.1f; } if ( num != 1 || num != 2 ) { throw str_bad; } } catch (int a) { cout << \"Exception is: \" << a << endl; } catch (float b) { cout << \"Exception is: \" << b << endl; } catch (...) { cout << str_bad << endl; } return 0; }"
    options:
      - Exception is 5
      - Exception is 1.1f
      - Wrong number used
      - Exception is 1.6g
    answer: 2
    explanation: "Wrong number used is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; int main () { int num = 3; string str_bad = \"wrong number used\"; try { if ( num == 1 ) { throw 5; } if ( num == 2 ) { throw 1.1f; } if ( num != 1 || num != 2 ) { throw str_bad; } } catch (int a) { cout << \"Exception is: \" << a << endl; } catch (float b) { cout << \"Exception is: \" << b << endl; } catch (...) { cout << str_bad << endl; } return 0; }”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous."
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: Which of the following function is used to insert an element at the end of a vector?
    options:
      - push_back()
      - pop_back()
      - front()
      - end()
    answer: 0
    explanation: push_back() is the correct answer to “Which of the following function is used to insert an element at the end of a vector”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: What are the tuples in C++?
    options:
      - Objects that can hold more than one element of different types
      - Objects that can hold a single element of complex type
      - Objects that can hold more than one element of the same types
      - Objects that can hold a single element of fundamental type
    answer: 0
    explanation: Objects that can hold more than one element of different types is the correct answer to “What are the tuples in C++”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: How many ways of reusing are there in the class hierarchy?
    options:
      - "1"
      - "2"
      - "3"
      - "4"
    answer: 1
    explanation: 2 is the correct answer to “How many ways of reusing are there in the class hierarchy”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: Which header file is used for the numeric limits in C++?
    options:
      - <iostream>
      - <limits>
      - <number>
      - <digit>
    answer: 1
    explanation: <limits> is the correct answer to “Which header file is used for the numeric limits in C++”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> #include <tuple> using namespace std; int main() { tuple <int, char, string> tp1; tuple <int, char, string> tp2; tp1 = make_tuple(6, 'a', \"Hello\"); tp2 = make_tuple(9, 'z', \"World\"); cout<<\"(\"<<get<0>(tp1)<<\", \"<<get<1>(tp1)<<\", \"<<get<2>(tp1)<<\")\"<<endl; cout<<\"(\"<<get<0>(tp2)<<\", \"<<get<1>(tp2)<<\", \"<<get<2>(tp2)<<\")\"<<endl; tp1.swap(tp2); cout<<\"(\"<<get<0>(tp1)<<\", \"<<get<1>(tp1)<<\", \"<<get<2>(tp1)<<\")\"<<endl; cout<<\"(\"<<get<0>(tp2)<<\", \"<<get<1>(tp2)<<\", \"<<get<2>(tp2)<<\")\"<<endl; return 0; }"
    options:
      - (6, a, Hello) (9, z, World) (9, z, World) (6, a, Hello)
      - (6, a, Hello) (9, z, World) (6, a, Hello) (9, z, World)
      - (9, z, World) (6, a, Hello) (9, z, World) (6, a, Hello)
      - (6, a, Hello) (6, a, Hello) (9, z, World) (9, z, World)
    answer: 0
    explanation: "(6, a, Hello) (9, z, World) (9, z, World) (6, a, Hello) is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> #include <tuple> using namespace std; int main() { tuple <int, char, string> tp1; tuple <int, char, string> tp2; tp1 = make_tuple(6, 'a', \"Hello\"); tp2 = make_tuple(9, 'z', \"World\"); cout<<\"(\"<<get<0>(tp1)<<\", \"<<get<1>(tp1)<<\", \"<<get<2>(tp1)<<\")\"<<endl; cout<<\"(\"<<get<0>(tp2)<<\", \"<<get<1>(tp2)<<\", \"<<get<2>(tp2)<<\")\"<<endl; tp1.swap(tp2); cout<<\"(\"<<get<0>(tp1)<<\", \"<<get<1>(tp1)<<\", \"<<get<2>(tp1)<<\")\"<<endl; cout<<\"(\"<<get<0>(tp2)<<\", \"<<get<1>(tp2)<<\", \"<<get<2>(tp2)<<\")\"<<endl; return 0; }”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous."
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: "What will be the output of the following C++ code? #include <iostream> #include <vector> #include <algorithm> using namespace std; void show(const vector<int>& vi) { for (size_t i = 0; i < vi.size(); ++i) cout << vi[i]; cout << endl; } int main() { vector<int> vi; vi.push_back(3); vi.push_back(5); vi.push_back(5); sort(vi.begin(), vi.end()); show(vi); while(next_permutation(vi.begin(), vi.end())) show(vi); return 0; }"
    options:
      - "355"
      - "535"
      - "553"
      - 355 535 553
    answer: 3
    explanation: "355 535 553 is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <vector> #include <algorithm> using namespace std; void show(const vector<int>& vi) { for (size_t i = 0; i < vi.size(); ++i) cout << vi[i]; cout << endl; } int main() { vector<int> vi; vi.push_back(3); vi.push_back(5); vi.push_back(5); sort(vi.begin(), vi.end()); show(vi); while(next_permutation(vi.begin(), vi.end())) show(vi); return 0; }”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous."
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: In how many different ways any-container can be constructed?
    options:
      - "1"
      - "2"
      - "3"
      - "4"
    answer: 2
    explanation: 3 is the correct answer to “In how many different ways any-container can be constructed”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: What does this template function indicates? ================== template<class T, class U> U func(T a, U b) { cout<<a<<"\t"<<b; } ==================
    options:
      - A function taking a single generic parameter and returning a generic type which may be different from argument type
      - A function taking a single generic parameter and returning a generic type which must be different from argument type
      - A function taking a single generic parameter and returning a generic type which must have the same type as argument type
      - A function taking a single generic parameter and returning a specific non-void type
    answer: 0
    explanation: A function taking a single generic parameter and returning a generic type which may be different from argument type is the correct answer to “What does this template function indicates? ================== template<class T, class U> U func(T a, U b) { cout<<a<<"\t"<<b; } ==================”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: "What will be the output of the following C++ code? #include <iostream> #include <algorithm> #include <vector> using namespace std; int main () { vector<int> v = {4,2,10,5,1,8}; sort(v.begin(), v.end()); if (binary_search(v.begin(), v.end(), 4)) cout << \"found.\\n\"; else cout << \"not found.\\n\"; return 0; }"
    options:
      - found.
      - not found.
      - Error
      - Segmentation fault
    answer: 0
    explanation: "found. is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <algorithm> #include <vector> using namespace std; int main () { vector<int> v = {4,2,10,5,1,8}; sort(v.begin(), v.end()); if (binary_search(v.begin(), v.end(), 4)) cout << \"found.\\n\"; else cout << \"not found.\\n\"; return 0; }”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous."
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: Identify the correct statement about throw(type).
    options:
      - A function can throw any type of exceptions
      - A function can throw an exception of certain type only
      - A function can't throw any type of exception
      - A function can catch all types of exceptions
    answer: 1
    explanation: A function can throw an exception of certain type only is the correct answer to “Identify the correct statement about throw(type).”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: Which operator is used as catch-all handler?
    options:
      - ellipses operator
      - ternary operator
      - string operator
      - unary operator
    answer: 0
    explanation: ellipses operator is the correct answer to “Which operator is used as catch-all handler”. This question is standard in competitive examination syllabi for C Plus Plus Miscellaneous.
    keyConcept: C Plus Plus Miscellaneous
    testedIn:
      - FPSC
      - PPSC
---


