---
title: Classes And Objects In C Plus Plus — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Classes And Objects In C Plus Plus — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: classes-and-objects-in-c-plus-plus-part-2
topicName: Classes And Objects In C Plus Plus — Part 2
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
    question: How to store the large objects in c++ if it extends its allocated memory?
    options:
      - memory heap
      - stack
      - queue
      - stack & queue
    answer: 0
    explanation: memory heap is the correct answer to “How to store the large objects in c++ if it extends its allocated memory”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; int main () { string str (\"microsoft\"); string::reverse_iterator r; for (r = str.rbegin() ; r < str.rend(); r++ ) cout << *r; return 0; }"
    options:
      - microsoft
      - micro
      - tfosorcim
      - tfos
    answer: 2
    explanation: "tfosorcim is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; int main () { string str (\"microsoft\"); string::reverse_iterator r; for (r = str.rbegin() ; r < str.rend(); r++ ) cout << *r; return 0; }”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus."
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: How to declare the complex number?
    options:
      - (3, 4)
      - complex(3, 4)
      - (3, 4i)
      - (3, 4g)
    answer: 1
    explanation: complex(3, 4) is the correct answer to “How to declare the complex number”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: "Given the following C++ code. How would you define the < operator for Box class so that when boxes b1 and b2 are compared in if block the program gives correct result? #include <iostream> #include <string> using namespace std; class Box { int capacity; public: Box(){} Box(double capacity){ this->capacity = capacity; } }; int main(int argc, char const *argv[]) { Box b1(10); Box b2 = Box(14); if(b1 < b2){ cout<<\"Box 2 has large capacity.\"; } else{ cout<<\"Box 1 has large capacity.\"; } return 0; }"
    options:
      - "bool operator<(Box b) { return this->capacity < b.capacity ? true : false; }"
      - "bool operator<(Box b) { return this->capacity > b.capacity ? true : false; }"
      - "bool operator<(Box b) { return b1 > b2 ? true : false; }"
      - "bool operator<(Box b) { return this < b ? true : false; }"
    answer: 0
    explanation: "bool operator<(Box b) { return this->capacity < b.capacity ? true : false; } is the correct answer to “Given the following C++ code. How would you define the < operator for Box class so that when boxes b1 and b2 are compared in if block the program gives correct result? #include <iostream> #include <string> using namespace std; class Box { int capacity; public: Box(){} Box(double capacity){ this->capacity = capacity; } }; int main(int argc, char const *argv[]) { Box b1(10); Box b2 = Box(14); if(b1 < b2){ cout<<\"Box 2 has large capacity.\"; } else{ cout<<\"Box 1 has large capacity.\"; } return 0; }”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus."
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; class sample { public: sample(int i) : m_i(i) { } public: int operator()(int i = 0) const { return m_i + i; } operator int () const { return m_i; } private: int m_i; friend int g(const sample&); }; int f(char c) { return c; } int main() { sample f(2); cout << f(2); return 0; }"
    options:
      - "3"
      - "4"
      - "5"
      - "6"
    answer: 1
    explanation: "4 is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; class sample { public: sample(int i) : m_i(i) { } public: int operator()(int i = 0) const { return m_i + i; } operator int () const { return m_i; } private: int m_i; friend int g(const sample&); }; int f(char c) { return c; } int main() { sample f(2); cout << f(2); return 0; }”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus."
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; int main () { string str (\"example.\"); str.front() = 'E'; cout << str << endl; return 0; }"
    options:
      - Example
      - Example.
    answer: 1
    explanation: "Example. is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; int main () { string str (\"example.\"); str.front() = 'E'; cout << str << endl; return 0; }”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus."
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: Which container in c++ will take large objects?
    options:
      - string
      - class
      - vector
      - string & class
    answer: 2
    explanation: vector is the correct answer to “Which container in c++ will take large objects”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: How many types of models are available to create the user-defined data type?
    options:
      - "1"
      - "2"
      - "3"
      - "4"
    answer: 1
    explanation: 2 is the correct answer to “How many types of models are available to create the user-defined data type”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: Which concepts does the Pre Increment use?
    options:
      - call by value
      - call by reference
      - queue
      - call by name
    answer: 1
    explanation: call by reference is the correct answer to “Which concepts does the Pre Increment use”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: Which is the correct example of a binary operator?
    options:
      - ++
      - —
      - Dereferencing operator(*)
      - +
    answer: 3
    explanation: + is the correct answer to “Which is the correct example of a binary operator”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; int main () { string str = \"HelloWorld!\"; cout<<str.capacity(); cout<<str.size(); return 0; }"
    options:
      - "1511"
      - "1111"
      - "1115"
      - "010"
    answer: 0
    explanation: "1511 is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; int main () { string str = \"HelloWorld!\"; cout<<str.capacity(); cout<<str.size(); return 0; }”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus."
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> #include <cstring> using namespace std; int main(int argc, char const *argv[]) { string s(\"a\"); cout<<s; return 0; }"
    options:
      - a
      - empty string
      - Error
      - Segmentation fault
    answer: 0
    explanation: "a is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> #include <cstring> using namespace std; int main(int argc, char const *argv[]) { string s(\"a\"); cout<<s; return 0; }”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus."
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: Which of the following operator can be used to overload when that function is declared as friend function?
    options:
      - "[]"
      - ()
      - "->"
      - "|="
    answer: 3
    explanation: "|= is the correct answer to “Which of the following operator can be used to overload when that function is declared as friend function”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus."
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; int main(int argc, char const *argv[]) { char s1[6] = \"Hello\"; char s2[6] = \"World\"; char s3[12] = s1 + \" \" + s2; cout<<s3; return 0; }"
    options:
      - Hello World
      - Hello
      - World
      - Error
    answer: 3
    explanation: "Error is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; int main(int argc, char const *argv[]) { char s1[6] = \"Hello\"; char s2[6] = \"World\"; char s3[12] = s1 + \" \" + s2; cout<<s3; return 0; }”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus."
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: The data members and functions of a class in C++ are by default . . . . . . . .
    options:
      - protected
      - private
      - public
      - public & protected
    answer: 1
    explanation: private is the correct answer to “The data members and functions of a class in C++ are by default . . . . . . . .”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: How many arguments will the subscript operator will take for overloading?
    options:
      - "1"
      - "2"
      - "0"
      - as many as possible
    answer: 0
    explanation: 1 is the correct answer to “How many arguments will the subscript operator will take for overloading”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class A { static int a; public: A() { cout<<\"Object of A is created\\n\"; } void show() { a++; cout<<\"a: \"<<a<<endl; } }; class B { public: }; int main(int argc, char const *argv[]) { A a1, a2; A a3 = a1 + a2; return 0; }"
    options:
      - Runs perfectly
      - Run-time Error
      - Segmentation fault
      - Compile-time Error
    answer: 3
    explanation: "Compile-time Error is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class A { static int a; public: A() { cout<<\"Object of A is created\\n\"; } void show() { a++; cout<<\"a: \"<<a<<endl; } }; class B { public: }; int main(int argc, char const *argv[]) { A a1, a2; A a3 = a1 + a2; return 0; }”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus."
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: "#include <iostream> using namespace std; class three_d { int x, y, z; public: three_d() { x = y = z = 0; } three_d(int i, int j, int k) { x = i; y = j; z = k; } three_d operator()(three_d obj); three_d operator()(int a, int b, int c); friend ostream &operator<<(ostream &strm, three_d op); }; three_d three_d::operator()(three_d obj) { three_d temp; temp.x = (x + obj.x) / 2; temp.y = (y + obj.y) / 2; temp.z = (z + obj.z) / 2; return temp; } three_d three_d::operator()(int a, int b, int c) { three_d temp; temp.x = x + a; temp.y = y + b; temp.z = z + c; return temp; } ostream &operator<<(ostream &strm, three_d op) { strm << op.x << \", \" << op.y << \", \" << op.z << endl; return strm; } int main() { three_d objA(1, 2, 3), objB(10, 10, 10), objC; objC = objA(objB(100, 200, 300)); cout << objC; return 0; }"
    options:
      - 55, 106, 156
      - 55, 106
      - 55, 106, 159
      - 55, 106, 158
    answer: 0
    explanation: "55, 106, 156 is the correct answer to “#include <iostream> using namespace std; class three_d { int x, y, z; public: three_d() { x = y = z = 0; } three_d(int i, int j, int k) { x = i; y = j; z = k; } three_d operator()(three_d obj); three_d operator()(int a, int b, int c); friend ostream &operator<<(ostream &strm, three_d op); }; three_d three_d::operator()(three_d obj) { three_d temp; temp.x = (x + obj.x) / 2; temp.y = (y + obj.y) / 2; temp.z = (z + obj.z) / 2; return temp; } three_d three_d::operator()(int a, int b, int c) { three_d temp; temp.x = x + a; temp.y = y + b; temp.z = z + c; return temp; } ostream &operator<<(ostream &strm, three_d op) { strm << op.x << \", \" << op.y << \", \" << op.z << endl; return strm; } int main() { three_d objA(1, 2, 3), objB(10, 10, 10), objC; objC = objA(objB(100, 200, 300)); cout << objC; return 0; }”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus."
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; class sample { private: int* i; int j; public: sample (int j); ~sample (); int& operator [] (int n); }; int& sample::operator [] (int n) { return i[n]; } sample::sample (int j) { i = new int [j]; j = j; } sample::~sample () { delete [] i; } int main () { sample m (5); m [0] = 25; m [1] = 20; m [2] = 15; m [3] = 10; m [4] = 5; for (int n = 0; n < 5; ++ n) cout << m [n]; return 0; }"
    options:
      - "252015105"
      - "510152025"
      - "51015"
      - "51015210"
    answer: 0
    explanation: "252015105 is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; class sample { private: int* i; int j; public: sample (int j); ~sample (); int& operator [] (int n); }; int& sample::operator [] (int n) { return i[n]; } sample::sample (int j) { i = new int [j]; j = j; } sample::~sample () { delete [] i; } int main () { sample m (5); m [0] = 25; m [1] = 20; m [2] = 15; m [3] = 10; m [4] = 5; for (int n = 0; n < 5; ++ n) cout << m [n]; return 0; }”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus."
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: How many specifiers are present in access specifiers in class?
    options:
      - "1"
      - "2"
      - "3"
      - "4"
    answer: 2
    explanation: 3 is the correct answer to “How many specifiers are present in access specifiers in class”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: Which special character is used to mark the end of class?
    options:
      - ""
      - ":"
      - "#"
      - $
    answer: 0
    explanation: " is the correct answer to “Which special character is used to mark the end of class”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus."
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: "What will be the output of the following C++ code? #include <stdio.h> #include<iostream> using namespace std; int main() { int x = 5, y = 5; cout << ++x << --y << endl; return 0; }"
    options:
      - "55"
      - "64"
      - "46"
      - "45"
    answer: 1
    explanation: "64 is the correct answer to “What will be the output of the following C++ code? #include <stdio.h> #include<iostream> using namespace std; int main() { int x = 5, y = 5; cout << ++x << --y << endl; return 0; }”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus."
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: How to access the object in the class?
    options:
      - scope resolution operator
      - ternary operator
      - direct member access operator
      - resolution operator
    answer: 2
    explanation: direct member access operator is the correct answer to “How to access the object in the class”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; class base { int val1, val2; public: int get() { val1 = 100; val2 = 300; } friend float mean(base ob); }; float mean(base ob) { return float(ob.val1 + ob.val2) / 2; } int main() { base obj; obj.get(); cout << mean(obj); return 0; }"
    options:
      - "200"
      - "150"
      - "100"
      - "300"
    answer: 0
    explanation: "200 is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; class base { int val1, val2; public: int get() { val1 = 100; val2 = 300; } friend float mean(base ob); }; float mean(base ob) { return float(ob.val1 + ob.val2) / 2; } int main() { base obj; obj.get(); cout << mean(obj); return 0; }”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus."
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class complex { int i; int j; public: complex(int a, int b) { i = a; j = b; } complex operator+(complex c) { complex temp; temp.i = this->i + c.i; temp.j = this->j + c.j; return temp; } void show(){ cout<<\"Complex Number: \"<<i<<\" + i\"<<j<<endl; } }; int main(int argc, char const *argv[]) { complex c1(1,2); complex c2(3,4); complex c3 = c1 + c2; c3.show(); return 0; }"
    options:
      - 4 + i6
      - 2 + i2
      - Error
      - Segmentation fault
    answer: 2
    explanation: "Error is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class complex { int i; int j; public: complex(int a, int b) { i = a; j = b; } complex operator+(complex c) { complex temp; temp.i = this->i + c.i; temp.j = this->j + c.j; return temp; } void show(){ cout<<\"Complex Number: \"<<i<<\" + i\"<<j<<endl; } }; int main(int argc, char const *argv[]) { complex c1(1,2); complex c2(3,4); complex c3 = c1 + c2; c3.show(); return 0; }”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus."
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: In case of non-static member functions how many maximum object arguments a unary operator overloaded function can take?
    options:
      - "1"
      - "2"
      - "3"
      - "0"
    answer: 3
    explanation: 0 is the correct answer to “In case of non-static member functions how many maximum object arguments a unary operator overloaded function can take”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; class sample1 { float i, j; }; class sample2 { int x, y; public: sample2 (int a, int b) { x = a; y = b; } int result() { return x + y; } }; int main () { sample1 d; sample2 * padd; padd = (sample2*) &d; cout<< padd->result(); return 0; }"
    options:
      - "20"
      - runtime error
      - random number
      - runtime error or random number
    answer: 3
    explanation: "runtime error or random number is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; class sample1 { float i, j; }; class sample2 { int x, y; public: sample2 (int a, int b) { x = a; y = b; } int result() { return x + y; } }; int main () { sample1 d; sample2 * padd; padd = (sample2*) &d; cout<< padd->result(); return 0; }”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus."
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> #include <cstring> using namespace std; int main(int argc, char const *argv[]) { const char *a = \"Hello\\0World\"; cout<<a; return 0; }"
    options:
      - Hello World
      - Hello
      - World
      - Error
    answer: 1
    explanation: "Hello is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> #include <cstring> using namespace std; int main(int argc, char const *argv[]) { const char *a = \"Hello\\0World\"; cout<<a; return 0; }”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus."
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class A { static int a; public: void change(int i){ a = i; } void value_of_a(){ cout<<a; } }; int A::a = 5; int main(int argc, char const *argv[]) { A a1 = A(); A a2 = A(); A a3 = A(); a1.change(10); a1.value_of_a(); a2.value_of_a(); a3.value_of_a(); return 0; }"
    options:
      - "1055"
      - "555"
      - "101010"
      - "51010"
    answer: 2
    explanation: "101010 is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; class A { static int a; public: void change(int i){ a = i; } void value_of_a(){ cout<<a; } }; int A::a = 5; int main(int argc, char const *argv[]) { A a1 = A(); A a2 = A(); A a3 = A(); a1.change(10); a1.value_of_a(); a2.value_of_a(); a3.value_of_a(); return 0; }”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus."
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: Inline functions are avoided when . . . . . . . .
    options:
      - function contains static variables
      - function have recursive calls
      - function have loops
      - all of the mentioned
    answer: 3
    explanation: all of the mentioned is the correct answer to “Inline functions are avoided when . . . . . . . .”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; class rect { int x, y; public: void val (int, int); int area () { return (x * y); } }; void rect::val (int a, int b) { x = a; y = b; } int main () { rect rect; rect.val (3, 4); cout << \"rect area: \" << rect.area(); return 0; }"
    options:
      - "rect area: 24"
      - "rect area: 12"
      - "compile error because rect is as used as class name and variable name in line #20"
      - "rect area: 56"
    answer: 1
    explanation: "rect area: 12 is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; class rect { int x, y; public: void val (int, int); int area () { return (x * y); } }; void rect::val (int a, int b) { x = a; y = b; } int main () { rect rect; rect.val (3, 4); cout << \"rect area: \" << rect.area(); return 0; }”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus."
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: What is a friend function in C++?
    options:
      - A function which can access all the private, protected and public members of a class
      - A function which is not allowed to access any member of any class
      - A function which is allowed to access public and protected members of a class
      - A function which is allowed to access only public members of a class
    answer: 0
    explanation: A function which can access all the private, protected and public members of a class is the correct answer to “What is a friend function in C++”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; class Box { double length; double breadth; double height; public: double getVolume(void) { return length * breadth * height; } void setLength( double len ) { length = len; } void setBreadth( double bre ) { breadth = bre; } void setHeight( double hei ) { height = hei; } Box operator+(const Box& b) { Box box; box.length = this->length + b.length; box.breadth = this->breadth + b.breadth; box.height = this->height + b.height; return box; } }; int main( ) { Box Box1; Box Box2; Box Box3; double volume = 0.0; Box1.setLength(6.0); Box1.setBreadth(7.0); Box1.setHeight(5.0); Box2.setLength(12.0); Box2.setBreadth(13.0); Box2.setHeight(10.0); volume = Box1.getVolume(); cout << \"Volume of Box1 : \" << volume <<endl; volume = Box2.getVolume(); cout << \"Volume of Box2 : \" << volume <<endl; Box3 = Box1 + Box2; volume = Box3.getVolume(); cout << \"Volume of Box3 : \" << volume <<endl; return 0; }"
    options:
      - "Volume of Box1 : 210 Volume of Box2 : 1560 Volume of Box3 : 5400"
      - "Volume of Box1 : 200 Volume of Box2 : 1560 Volume of Box3 : 5400"
      - "Volume of Box1 : 210 Volume of Box2 : 1550 Volume of Box3 : 5400"
      - "Volume of Box1 : 200 Volume of Box2 : 1000 Volume of Box3 : 5260"
    answer: 0
    explanation: "Volume of Box1 : 210 Volume of Box2 : 1560 Volume of Box3 : 5400 is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; class Box { double length; double breadth; double height; public: double getVolume(void) { return length * breadth * height; } void setLength( double len ) { length = len; } void setBreadth( double bre ) { breadth = bre; } void setHeight( double hei ) { height = hei; } Box operator+(const Box& b) { Box box; box.length = this->length + b.length; box.breadth = this->breadth + b.breadth; box.height = this->height + b.height; return box; } }; int main( ) { Box Box1; Box Box2; Box Box3; double volume = 0.0; Box1.setLength(6.0); Box1.setBreadth(7.0); Box1.setHeight(5.0); Box2.setLength(12.0); Box2.setBreadth(13.0); Box2.setHeight(10.0); volume = Box1.getVolume(); cout << \"Volume of Box1 : \" << volume <<endl; volume = Box2.getVolume(); cout << \"Volume of Box2 : \" << volume <<endl; Box3 = Box1 + Box2; volume = Box3.getVolume(); cout << \"Volume of Box3 : \" << volume <<endl; return 0; }”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus."
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: How to declare operator function?
    options:
      - operator sign
      - operator
      - name of the operator
      - name of the class
    answer: 0
    explanation: operator sign is the correct answer to “How to declare operator function”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: "What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; int main () { string str (\"Ubuntu\"); cout << str.capacity(); cout << str.max_size(); return 0; }"
    options:
      - "61073741820"
      - "51073741820"
      - 6 and max size depends on compiler
      - 15 9223372036854770000
    answer: 3
    explanation: "15 9223372036854770000 is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <string> using namespace std; int main () { string str (\"Ubuntu\"); cout << str.capacity(); cout << str.max_size(); return 0; }”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus."
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: What is the use of functor?
    options:
      - It makes the object "callable" like a function
      - It makes the class "callable" like a function
      - It makes the attribute "callable" like a function
      - It makes the argument "callable" like a function
    answer: 0
    explanation: It makes the object "callable" like a function is the correct answer to “What is the use of functor”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; void duplicate (int& a, int& b, int& c) { a *= 2; b *= 2; c *= 2; } int main () { int x = 1, y = 3, z = 7; duplicate (x, y, z); cout << x << y << z; return 0; }"
    options:
      - "1468"
      - "2812"
      - "2614"
      - "2713"
    answer: 2
    explanation: "2614 is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; void duplicate (int& a, int& b, int& c) { a *= 2; b *= 2; c *= 2; } int main () { int x = 1, y = 3, z = 7; duplicate (x, y, z); cout << x << y << z; return 0; }”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus."
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: "What will be the output of the following C++ code? #include <iostream> using namespace std; int main() { int a = 20; int b = 10; int c = 15; int d = 5; int e; e = a + b * c / d; cout << e << endl ; return 0; }"
    options:
      - "50"
      - "60"
      - "70"
      - "90"
    answer: 0
    explanation: "50 is the correct answer to “What will be the output of the following C++ code? #include <iostream> using namespace std; int main() { int a = 20; int b = 10; int c = 15; int d = 5; int e; e = a + b * c / d; cout << e << endl ; return 0; }”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus."
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: Which is used to tell the computer that where a pointer is pointing to?
    options:
      - dereference
      - reference
      - heap operations
      - binary operations
    answer: 0
    explanation: dereference is the correct answer to “Which is used to tell the computer that where a pointer is pointing to”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus.
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: "What will be the output of the following C++ code? #include <iostream> #include <cmath> using namespace std; class Complex { private: double real; double imag; public: Complex(double r = 0.0, double i = 0.0) : real(r), imag(i) {} double mag() { return getMag(); } operator double () { return getMag(); } private: double getMag() { return sqrt(real * real + imag * imag); } }; int main() { Complex com(3.0, 4.0); cout << com.mag(); cout << com; return 0 }"
    options:
      - 5 5
      - 4 5
      - 6 6
      - 7 5
    answer: 0
    explanation: "5 5 is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <cmath> using namespace std; class Complex { private: double real; double imag; public: Complex(double r = 0.0, double i = 0.0) : real(r), imag(i) {} double mag() { return getMag(); } operator double () { return getMag(); } private: double getMag() { return sqrt(real * real + imag * imag); } }; int main() { Complex com(3.0, 4.0); cout << com.mag(); cout << com; return 0 }”. This question is standard in competitive examination syllabi for Classes And Objects In C Plus Plus."
    keyConcept: Classes And Objects In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
---


