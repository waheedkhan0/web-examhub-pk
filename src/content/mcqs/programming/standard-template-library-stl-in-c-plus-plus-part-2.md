---
title: Standard Template Library _Stl_ In C Plus Plus — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Standard Template Library _Stl_ In C Plus Plus — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: standard-template-library-stl-in-c-plus-plus-part-2
topicName: Standard Template Library _Stl_ In C Plus Plus — Part 2
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
    question: Which algorithm in C++ STL is used to shuffle the elements in a range randomly?
    options:
      - random_shuffle
      - shuffle
      - mix
      - randomize
    answer: 1
    explanation: shuffle is the correct answer to “Which algorithm in C++ STL is used to shuffle the elements in a range randomly”. This question is standard in competitive examination syllabi for Standard Template Library _Stl_ In C Plus Plus.
    keyConcept: Standard Template Library _Stl_ In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: What is the purpose of the 'std::forward_list' container in C++ STL?
    options:
      - To provide a singly linked list implementation
      - To provide a doubly linked list implementation
      - To store elements in a sorted sequence
      - To store elements in a hash table
    answer: 0
    explanation: To provide a singly linked list implementation is the correct answer to “What is the purpose of the 'std::forward_list' container in C++ STL”. This question is standard in competitive examination syllabi for Standard Template Library _Stl_ In C Plus Plus.
    keyConcept: Standard Template Library _Stl_ In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Which algorithm in C++ STL is used to sort a range of elements using quicksort?
    options:
      - quick_sort
      - sort
      - qsort
      - quicksort
    answer: 1
    explanation: sort is the correct answer to “Which algorithm in C++ STL is used to sort a range of elements using quicksort”. This question is standard in competitive examination syllabi for Standard Template Library _Stl_ In C Plus Plus.
    keyConcept: Standard Template Library _Stl_ In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What is the purpose of the 'std::array' container in C++ STL?
    options:
      - To represent a fixed-size array
      - To represent a dynamic array
      - To store elements in a sorted sequence
      - To store elements in a hash table
    answer: 0
    explanation: To represent a fixed-size array is the correct answer to “What is the purpose of the 'std::array' container in C++ STL”. This question is standard in competitive examination syllabi for Standard Template Library _Stl_ In C Plus Plus.
    keyConcept: Standard Template Library _Stl_ In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: Which algorithm in C++ STL is used to compute the sum of elements in a range?
    options:
      - sum
      - accumulate
      - total
      - add_range
    answer: 1
    explanation: accumulate is the correct answer to “Which algorithm in C++ STL is used to compute the sum of elements in a range”. This question is standard in competitive examination syllabi for Standard Template Library _Stl_ In C Plus Plus.
    keyConcept: Standard Template Library _Stl_ In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: "What will be the output of the following C++ code? #include <stdio.h> #include <math.h> int main () { printf (\"%lf\\n\", fmod (5.3, 2) ); printf (\"%lf\\n\", fmod (18.5, 4.2) ); return 0; }"
    options:
      - "1.300"
      - "1.700"
      - 1.300 1.700
      - "1.65"
    answer: 2
    explanation: "1.300 1.700 is the correct answer to “What will be the output of the following C++ code? #include <stdio.h> #include <math.h> int main () { printf (\"%lf\\n\", fmod (5.3, 2) ); printf (\"%lf\\n\", fmod (18.5, 4.2) ); return 0; }”. This question is standard in competitive examination syllabi for Standard Template Library _Stl_ In C Plus Plus."
    keyConcept: Standard Template Library _Stl_ In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: "What will be the output of the following C++ code? #include <typeinfo> #include <iostream> using namespace std; class shape { public: virtual void myvirtualfunc() const {} }; class mytriangle: public shape { public: virtual void myvirtualfunc() const { }; }; int main() { shape shape_instance; shape &ref_shape = shape_instance; try { mytriangle &ref_mytriangle = dynamic_cast (ref_shape); } catch (bad_cast) { cout << \"Caught: bad_cast exception\\n\"; } return 0; }"
    options:
      - Caught standard exception
      - No exception arises
      - "Caught: bad_cast exception"
      - "Caught: cast"
    answer: 2
    explanation: "Caught: bad_cast exception is the correct answer to “What will be the output of the following C++ code? #include <typeinfo> #include <iostream> using namespace std; class shape { public: virtual void myvirtualfunc() const {} }; class mytriangle: public shape { public: virtual void myvirtualfunc() const { }; }; int main() { shape shape_instance; shape &ref_shape = shape_instance; try { mytriangle &ref_mytriangle = dynamic_cast (ref_shape); } catch (bad_cast) { cout << \"Caught: bad_cast exception\\n\"; } return 0; }”. This question is standard in competitive examination syllabi for Standard Template Library _Stl_ In C Plus Plus."
    keyConcept: Standard Template Library _Stl_ In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: Which is best for coding the standard library for c++?
    options:
      - no trailing underscores on names
      - complex objects are returned by value
      - have a member-swap()
      - all of the mentioned
    answer: 3
    explanation: all of the mentioned is the correct answer to “Which is best for coding the standard library for c++”. This question is standard in competitive examination syllabi for Standard Template Library _Stl_ In C Plus Plus.
    keyConcept: Standard Template Library _Stl_ In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: Where are standard exception classes grouped?
    options:
      - namespace std
      - error
      - catch
      - final
    answer: 0
    explanation: namespace std is the correct answer to “Where are standard exception classes grouped”. This question is standard in competitive examination syllabi for Standard Template Library _Stl_ In C Plus Plus.
    keyConcept: Standard Template Library _Stl_ In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: "What will be the output of the following C++ code? #include <iostream> #include <algorithm> #include <vector> using namespace std; int main () { vector<int> myvector; for (int i = 1; i < 6; ++i) myvector.push_back(i); reverse(myvector.begin(), myvector.end()); for (vector<int> :: iterator it = myvector.begin(); it != myvector.end(); ++it) cout << ' ' << *it; return 0; }"
    options:
      - 1 2 3 4 5
      - 5 4 3 2 1
      - 0 1 2 3 4
      - 5 4 1 2 3
    answer: 1
    explanation: "5 4 3 2 1 is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <algorithm> #include <vector> using namespace std; int main () { vector<int> myvector; for (int i = 1; i < 6; ++i) myvector.push_back(i); reverse(myvector.begin(), myvector.end()); for (vector<int> :: iterator it = myvector.begin(); it != myvector.end(); ++it) cout << ' ' << *it; return 0; }”. This question is standard in competitive examination syllabi for Standard Template Library _Stl_ In C Plus Plus."
    keyConcept: Standard Template Library _Stl_ In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: How many parameters are used in frexp function?
    options:
      - "1"
      - "2"
      - "3"
      - "4"
    answer: 1
    explanation: 2 is the correct answer to “How many parameters are used in frexp function”. This question is standard in competitive examination syllabi for Standard Template Library _Stl_ In C Plus Plus.
    keyConcept: Standard Template Library _Stl_ In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: Pick out parameter for rehash method in unordered_set in c++?
    options:
      - count
      - size
      - hash
      - type
    answer: 0
    explanation: count is the correct answer to “Pick out parameter for rehash method in unordered_set in c++”. This question is standard in competitive examination syllabi for Standard Template Library _Stl_ In C Plus Plus.
    keyConcept: Standard Template Library _Stl_ In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What are Container Adaptors?
    options:
      - Containers that implements data structures which can be accessed sequentially
      - Containers that implements sorted data structures for fast search in O(logn)
      - Containers that implements unsorted(hashed) data structures for quick search in O(1)
      - Containers that provide a different interface for sequential containers
    answer: 3
    explanation: Containers that provide a different interface for sequential containers is the correct answer to “What are Container Adaptors”. This question is standard in competitive examination syllabi for Standard Template Library _Stl_ In C Plus Plus.
    keyConcept: Standard Template Library _Stl_ In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What are Unordered Associative Containers?
    options:
      - Containers that implements data structures which can be accessed sequentially
      - Containers that implements sorted data structures for fast search in O(logn)
      - Containers that implements unsorted(hashed) data structures for quick search in O(1)
      - Containers that implements data structures which can be accessed non-sequentially
    answer: 2
    explanation: Containers that implements unsorted(hashed) data structures for quick search in O(1) is the correct answer to “What are Unordered Associative Containers”. This question is standard in competitive examination syllabi for Standard Template Library _Stl_ In C Plus Plus.
    keyConcept: Standard Template Library _Stl_ In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: How does the limits.h header file can be represented in C++?
    options:
      - limits
      - limit
      - climits
      - dlimits
    answer: 2
    explanation: climits is the correct answer to “How does the limits.h header file can be represented in C++”. This question is standard in competitive examination syllabi for Standard Template Library _Stl_ In C Plus Plus.
    keyConcept: Standard Template Library _Stl_ In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: "What will be the output of the following C++ code? #include <iostream> #include <vector> using namespace std; int main() { vector<int> v; v.assign( 10, 42 ); for (int i = 0; i < v.size(); i++) { cout << v[i] << \" \"; } }"
    options:
      - "42"
      - 42 42
      - "424"
      - 42 for 10 times
    answer: 3
    explanation: "42 for 10 times is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <vector> using namespace std; int main() { vector<int> v; v.assign( 10, 42 ); for (int i = 0; i < v.size(); i++) { cout << v[i] << \" \"; } }”. This question is standard in competitive examination syllabi for Standard Template Library _Stl_ In C Plus Plus."
    keyConcept: Standard Template Library _Stl_ In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: Pick out the wrong header file.
    options:
      - <algorithm>
      - <containers>
      - <iterators>
      - <process>
    answer: 3
    explanation: <process> is the correct answer to “Pick out the wrong header file.”. This question is standard in competitive examination syllabi for Standard Template Library _Stl_ In C Plus Plus.
    keyConcept: Standard Template Library _Stl_ In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: "What will be the output of the following C++ code? #include <stdio.h> #include <stdlib.h> int main () { char s[] = \"365.24 29.53\"; char* p; double d1, d2; d1 = strtod (s, &p); d2 = strtod (p, NULL); printf (\"%.2f\\n\", d1/d2); return 0; }"
    options:
      - "12"
      - "12.37"
      - "13"
      - "15"
    answer: 1
    explanation: "12.37 is the correct answer to “What will be the output of the following C++ code? #include <stdio.h> #include <stdlib.h> int main () { char s[] = \"365.24 29.53\"; char* p; double d1, d2; d1 = strtod (s, &p); d2 = strtod (p, NULL); printf (\"%.2f\\n\", d1/d2); return 0; }”. This question is standard in competitive examination syllabi for Standard Template Library _Stl_ In C Plus Plus."
    keyConcept: Standard Template Library _Stl_ In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: "What will be the output of the following C++ code? #include <iostream> #include <list> #include <queue> using namespace std; int main() { queue<char> q; q.push('a'); q.push('b'); q.push('c'); cout << q.front(); q.pop(); cout << q.front(); q.pop(); cout << q.front(); q.pop(); }"
    options:
      - ab
      - abc
      - a
      - error
    answer: 1
    explanation: "abc is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <list> #include <queue> using namespace std; int main() { queue<char> q; q.push('a'); q.push('b'); q.push('c'); cout << q.front(); q.pop(); cout << q.front(); q.pop(); cout << q.front(); q.pop(); }”. This question is standard in competitive examination syllabi for Standard Template Library _Stl_ In C Plus Plus."
    keyConcept: Standard Template Library _Stl_ In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: "What will be the output of the following C++ code? #include <list> #include <string> #include <iostream> using namespace std ; typedef list<string> LISTSTR; int main() { LISTSTR :: iterator i; LISTSTR test; test.insert(test.end(), \"one\"); test.insert(test.end(), \"two\"); LISTSTR test2(test); LISTSTR test3(3, \"three\"); LISTSTR test4(++test3.begin(), test3.end()); cout << \"test:\"; for (i = test.begin(); i != test.end(); ++i) cout << \" \" << *i << endl; cout << \"test:\"; for (i = test2.begin(); i != test2.end(); ++i) cout << \" \" << *i << endl; cout << \"test:\"; for (i = test3.begin(); i != test3.end(); ++i) cout << \" \" << *i << endl; cout << \"test:\"; for (i = test4.begin(); i != test4.end(); ++i) cout << \" \" << *i << endl; }"
    options:
      - test
      - test one
      - test two
      - "test: one two test: one two test: three three three test: three three"
    answer: 3
    explanation: "test: one two test: one two test: three three three test: three three is the correct answer to “What will be the output of the following C++ code? #include <list> #include <string> #include <iostream> using namespace std ; typedef list<string> LISTSTR; int main() { LISTSTR :: iterator i; LISTSTR test; test.insert(test.end(), \"one\"); test.insert(test.end(), \"two\"); LISTSTR test2(test); LISTSTR test3(3, \"three\"); LISTSTR test4(++test3.begin(), test3.end()); cout << \"test:\"; for (i = test.begin(); i != test.end(); ++i) cout << \" \" << *i << endl; cout << \"test:\"; for (i = test2.begin(); i != test2.end(); ++i) cout << \" \" << *i << endl; cout << \"test:\"; for (i = test3.begin(); i != test3.end(); ++i) cout << \" \" << *i << endl; cout << \"test:\"; for (i = test4.begin(); i != test4.end(); ++i) cout << \" \" << *i << endl; }”. This question is standard in competitive examination syllabi for Standard Template Library _Stl_ In C Plus Plus."
    keyConcept: Standard Template Library _Stl_ In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: Which header file is used for Iterators?
    options:
      - <iterator>
      - <algorithm>
      - <iter>
      - <loopIter>
    answer: 0
    explanation: <iterator> is the correct answer to “Which header file is used for Iterators”. This question is standard in competitive examination syllabi for Standard Template Library _Stl_ In C Plus Plus.
    keyConcept: Standard Template Library _Stl_ In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: "What will be the output of the following C++ code? #include <iostream> #include <exception> using namespace std; class myexc: public exception { virtual const char* what() const throw() { return \"My exception\"; } } myex; int main () { try { throw myex; } catch (exception& e) { cout << e.what() << endl; } return 0; }"
    options:
      - My
      - My exception
      - No exception
      - exception
    answer: 1
    explanation: "My exception is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <exception> using namespace std; class myexc: public exception { virtual const char* what() const throw() { return \"My exception\"; } } myex; int main () { try { throw myex; } catch (exception& e) { cout << e.what() << endl; } return 0; }”. This question is standard in competitive examination syllabi for Standard Template Library _Stl_ In C Plus Plus."
    keyConcept: Standard Template Library _Stl_ In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: What is the use of make_heap in the heap operation?
    options:
      - Rearrange a heap
      - Deform a heap
      - Form a heap
      - Delete a heap
    answer: 2
    explanation: Form a heap is the correct answer to “What is the use of make_heap in the heap operation”. This question is standard in competitive examination syllabi for Standard Template Library _Stl_ In C Plus Plus.
    keyConcept: Standard Template Library _Stl_ In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: "What will be the output of the following C++ code? #include <stdio.h> #include <math.h> int main () { printf (\"The value of -3.1416 is %lf\\n\", fabs (-3.1416)); return 0; }"
    options:
      - "3.1416"
      - "-3.1416"
      - "-3.141600"
      - "3.141600"
    answer: 3
    explanation: "3.141600 is the correct answer to “What will be the output of the following C++ code? #include <stdio.h> #include <math.h> int main () { printf (\"The value of -3.1416 is %lf\\n\", fabs (-3.1416)); return 0; }”. This question is standard in competitive examination syllabi for Standard Template Library _Stl_ In C Plus Plus."
    keyConcept: Standard Template Library _Stl_ In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: What are the predefined exceptions in c++?
    options:
      - Memory allocation errors
      - I/O errors
      - Both Memory allocation errors & I/O errors
      - static errors
    answer: 2
    explanation: Both Memory allocation errors & I/O errors is the correct answer to “What are the predefined exceptions in c++”. This question is standard in competitive examination syllabi for Standard Template Library _Stl_ In C Plus Plus.
    keyConcept: Standard Template Library _Stl_ In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Pick out the correct library in the following choices.
    options:
      - Search
      - Generate
      - Numeric
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “Pick out the correct library in the following choices.”. This question is standard in competitive examination syllabi for Standard Template Library _Stl_ In C Plus Plus.
    keyConcept: Standard Template Library _Stl_ In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: In how many categories, containers are divided?
    options:
      - "1"
      - "2"
      - "3"
      - "4"
    answer: 3
    explanation: 4 is the correct answer to “In how many categories, containers are divided”. This question is standard in competitive examination syllabi for Standard Template Library _Stl_ In C Plus Plus.
    keyConcept: Standard Template Library _Stl_ In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: Which header file is used to declare the standard exception?
    options:
      - "#include<exception>"
      - "#include<except>"
      - "#include<error>"
      - "#include<exce>"
    answer: 0
    explanation: "#include<exception> is the correct answer to “Which header file is used to declare the standard exception”. This question is standard in competitive examination syllabi for Standard Template Library _Stl_ In C Plus Plus."
    keyConcept: Standard Template Library _Stl_ In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: Pick out the wrong header file about strings.
    options:
      - <string>
      - <regex>
      - <ios>
      - <reg>
    answer: 2
    explanation: <ios> is the correct answer to “Pick out the wrong header file about strings.”. This question is standard in competitive examination syllabi for Standard Template Library _Stl_ In C Plus Plus.
    keyConcept: Standard Template Library _Stl_ In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: What is the type of the first item in the heap?
    options:
      - Bigger than others
      - Lower than others
      - Mean value of the heap
      - Equal to others
    answer: 0
    explanation: Bigger than others is the correct answer to “What is the type of the first item in the heap”. This question is standard in competitive examination syllabi for Standard Template Library _Stl_ In C Plus Plus.
    keyConcept: Standard Template Library _Stl_ In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: How many components STL has?
    options:
      - "1"
      - "2"
      - "3"
      - "4"
    answer: 3
    explanation: 4 is the correct answer to “How many components STL has”. This question is standard in competitive examination syllabi for Standard Template Library _Stl_ In C Plus Plus.
    keyConcept: Standard Template Library _Stl_ In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: "What will be the output of the following C++ code? #include <iostream> #include <exception> using namespace std; int main () { try { int* myarray= new int[1000]; cout << \"Allocated\"; } catch (exception& e) { cout << \"Standard exception: \" << e.what() << endl; } return 0; }"
    options:
      - Allocated
      - "Standard exception:"
      - bad_alloc
      - Depends on memory
    answer: 3
    explanation: "Depends on memory is the correct answer to “What will be the output of the following C++ code? #include <iostream> #include <exception> using namespace std; int main () { try { int* myarray= new int[1000]; cout << \"Allocated\"; } catch (exception& e) { cout << \"Standard exception: \" << e.what() << endl; } return 0; }”. This question is standard in competitive examination syllabi for Standard Template Library _Stl_ In C Plus Plus."
    keyConcept: Standard Template Library _Stl_ In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: What is meant by standard c++ library?
    options:
      - It is the collection of class definitions for standard data structures and a collection of algorithms
      - It is a header file
      - Collection of algorithms
      - Step by step process
    answer: 0
    explanation: It is the collection of class definitions for standard data structures and a collection of algorithms is the correct answer to “What is meant by standard c++ library”. This question is standard in competitive examination syllabi for Standard Template Library _Stl_ In C Plus Plus.
    keyConcept: Standard Template Library _Stl_ In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: How many Container Adaptors are provided by C++?
    options:
      - "2"
      - "3"
      - "4"
      - "5"
    answer: 1
    explanation: 3 is the correct answer to “How many Container Adaptors are provided by C++”. This question is standard in competitive examination syllabi for Standard Template Library _Stl_ In C Plus Plus.
    keyConcept: Standard Template Library _Stl_ In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: Which of the following mathematical function is overloaded in <complex> and <valarray>?
    options:
      - cos
      - tan
      - sin
      - mod
    answer: 1
    explanation: tan is the correct answer to “Which of the following mathematical function is overloaded in <complex> and <valarray>”. This question is standard in competitive examination syllabi for Standard Template Library _Stl_ In C Plus Plus.
    keyConcept: Standard Template Library _Stl_ In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: Pick out the correct syntax of the header file that can be used with C++.
    options:
      - "#include <float>"
      - "#include <float.h>"
      - "Both #include <float> & #include <float.h>"
      - "#include <flot.h>"
    answer: 1
    explanation: "#include <float.h> is the correct answer to “Pick out the correct syntax of the header file that can be used with C++.”. This question is standard in competitive examination syllabi for Standard Template Library _Stl_ In C Plus Plus."
    keyConcept: Standard Template Library _Stl_ In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: "What will be the output of the following C++ code? #include <stdio.h> #include <stdlib.h> int compareints (const void * a, const void * b) { return ( *(int*)a - *(int*)b ); } int values[] = { 50, 20, 60, 40, 10, 30 }; int main () { int * p; int key = 40; qsort(values, 6, sizeof (int), compareints); p = (int*) bsearch (&key, values, 6, sizeof (int), compareints); if (p != NULL) printf (\"%d\\n\",*p); return 0; }"
    options:
      - "10"
      - "20"
      - "40"
      - "30"
    answer: 2
    explanation: "40 is the correct answer to “What will be the output of the following C++ code? #include <stdio.h> #include <stdlib.h> int compareints (const void * a, const void * b) { return ( *(int*)a - *(int*)b ); } int values[] = { 50, 20, 60, 40, 10, 30 }; int main () { int * p; int key = 40; qsort(values, 6, sizeof (int), compareints); p = (int*) bsearch (&key, values, 6, sizeof (int), compareints); if (p != NULL) printf (\"%d\\n\",*p); return 0; }”. This question is standard in competitive examination syllabi for Standard Template Library _Stl_ In C Plus Plus."
    keyConcept: Standard Template Library _Stl_ In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: With which does the trigonometric functions work with angles in c++?
    options:
      - Degrees
      - Radians
      - Both Degrees & Radians
      - Celsius
    answer: 1
    explanation: Radians is the correct answer to “With which does the trigonometric functions work with angles in c++”. This question is standard in competitive examination syllabi for Standard Template Library _Stl_ In C Plus Plus.
    keyConcept: Standard Template Library _Stl_ In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: What are the Associative Containers?
    options:
      - Containers that implements data structures which can be accessed sequentially
      - Containers that implements sorted data structures for fast search in O(logn)
      - Containers that implements unsorted(hashed) data structures for quick search in O(1)
      - Containers that implements data structures which can be accessed non-sequentially
    answer: 1
    explanation: Containers that implements sorted data structures for fast search in O(logn) is the correct answer to “What are the Associative Containers”. This question is standard in competitive examination syllabi for Standard Template Library _Stl_ In C Plus Plus.
    keyConcept: Standard Template Library _Stl_ In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: How many types of Iterators are provided by C++?
    options:
      - "2"
      - "3"
      - "4"
      - "5"
    answer: 3
    explanation: 5 is the correct answer to “How many types of Iterators are provided by C++”. This question is standard in competitive examination syllabi for Standard Template Library _Stl_ In C Plus Plus.
    keyConcept: Standard Template Library _Stl_ In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
---


