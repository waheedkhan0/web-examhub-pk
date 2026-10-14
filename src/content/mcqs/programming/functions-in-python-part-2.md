---
title: Functions In Python — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Functions In Python — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: functions-in-python-part-2
topicName: Functions In Python — Part 2
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
    question: "What will be the output of the following Python code? def to_upper(k): return k.upper() x = ['ab', 'cd'] print(list(map(upper, x)))"
    options:
      - "['AB', 'CD']"
      - none of the mentioned
      - error
    answer: 2
    explanation: "error is the correct answer to “What will be the output of the following Python code? def to_upper(k): return k.upper() x = ['ab', 'cd'] print(list(map(upper, x)))”. This question is standard in competitive examination syllabi for Functions In Python."
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: "Observe the following Python code? def a(n): if n == 0: return 0 else: return n*a(n - 1) def b(n, tot): if n == 0: return tot else: return b(n-2, tot-2)"
    options:
      - Both a() and b() aren't tail recursive
      - Both a() and b() are tail recursive
      - b() is tail recursive but a() isn't
      - a() is tail recursive but b() isn't
    answer: 2
    explanation: "b() is tail recursive but a() isn't is the correct answer to “Observe the following Python code? def a(n): if n == 0: return 0 else: return n*a(n - 1) def b(n, tot): if n == 0: return tot else: return b(n-2, tot-2)”. This question is standard in competitive examination syllabi for Functions In Python."
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: "What will be the output of the following Python code? def a(n): if n == 0: return 0 elif n == 1: return 1 else: return a(n-1)+a(n-2) for i in range(0,4): print(a(i),end=\" \")"
    options:
      - 0 1 2 3
      - An exception is thrown
      - 0 1 1 2 3
      - 0 1 1 2
    answer: 3
    explanation: "0 1 1 2 is the correct answer to “What will be the output of the following Python code? def a(n): if n == 0: return 0 elif n == 1: return 1 else: return a(n-1)+a(n-2) for i in range(0,4): print(a(i),end=\" \")”. This question is standard in competitive examination syllabi for Functions In Python."
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: "What will be the output of the following Python code? def printMax(a, b): if a > b: print(a, 'is maximum') elif a == b: print(a, 'is equal to', b) else: print(b, 'is maximum') printMax(3, 4)"
    options:
      - "3"
      - "4"
      - 4 is maximum
      - None of the mentioned
    answer: 2
    explanation: "4 is maximum is the correct answer to “What will be the output of the following Python code? def printMax(a, b): if a > b: print(a, 'is maximum') elif a == b: print(a, 'is equal to', b) else: print(b, 'is maximum') printMax(3, 4)”. This question is standard in competitive examination syllabi for Functions In Python."
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: "What will be the output of the following Python code? def f(): x=4 x=1 f() x"
    options:
      - Error
      - "4"
      - Junk value
      - "1"
    answer: 3
    explanation: "1 is the correct answer to “What will be the output of the following Python code? def f(): x=4 x=1 f() x”. This question is standard in competitive examination syllabi for Functions In Python."
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: "What will be the output of the following Python code? l=[1, -2, -3, 4, 5] def f1(x): return x<-1 m1=map(f1, l) print(list(m1))"
    options:
      - "[False, False, False, False, False]"
      - "[False, True, True, False, False]"
      - "[True, False, False, True, True]"
      - "[True, True, True, True, True]"
    answer: 1
    explanation: "[False, True, True, False, False] is the correct answer to “What will be the output of the following Python code? l=[1, -2, -3, 4, 5] def f1(x): return x<-1 m1=map(f1, l) print(list(m1))”. This question is standard in competitive examination syllabi for Functions In Python."
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: "What will be the output of the following Python code? a=10 b=20 def change(): global b a=45 b=56 change() print(a) print(b)"
    options:
      - 10 56
      - 45 56
      - 10 20
      - Syntax Error
    answer: 0
    explanation: "10 56 is the correct answer to “What will be the output of the following Python code? a=10 b=20 def change(): global b a=45 b=56 change() print(a) print(b)”. This question is standard in competitive examination syllabi for Functions In Python."
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What will be the output of the following Python code? x = ['ab', 'cd'] print(map(len, x))
    options:
      - "['ab', 'cd']"
      - "[2, 2]"
      - "['2', '2']"
      - none of the mentioned
    answer: 3
    explanation: none of the mentioned is the correct answer to “What will be the output of the following Python code? x = ['ab', 'cd'] print(map(len, x))”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: How are required arguments specified in the function heading?
    options:
      - identifier followed by an equal to sign and the default value
      - identifier followed by the default value within backticks (")
      - identifier followed by the default value within square brackets ([])
      - identifier
    answer: 3
    explanation: identifier is the correct answer to “How are required arguments specified in the function heading”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: "What will be the output of the following Python code? def check(n): if n < 2: return n % 2 == 0 return check(n - 2) print(check(11))"
    options:
      - "False"
      - "True"
      - "1"
      - An exception is thrown
    answer: 0
    explanation: "False is the correct answer to “What will be the output of the following Python code? def check(n): if n < 2: return n % 2 == 0 return check(n - 2) print(check(11))”. This question is standard in competitive examination syllabi for Functions In Python."
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What is tail recursion?
    options:
      - A recursive function that has two base cases
      - A function where the recursive functions leads to an infinite loop
      - A recursive function where the function doesn't return anything and just prints the values
      - A function where the recursive call is the last thing executed by the function
    answer: 3
    explanation: A function where the recursive call is the last thing executed by the function is the correct answer to “What is tail recursion”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: What will be the output of the following Python code? x = ['ab', 'cd'] print(list(map(len, x)))
    options:
      - "['ab', 'cd']"
      - "[2, 2]"
      - "['2', '2']"
      - none of the mentioned
    answer: 1
    explanation: "[2, 2] is the correct answer to “What will be the output of the following Python code? x = ['ab', 'cd'] print(list(map(len, x)))”. This question is standard in competitive examination syllabi for Functions In Python."
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: "What will be the output of the following Python code? def f(): global a print(a) a = \"hello\" print(a) a = \"world\" f() print(a)"
    options:
      - hello hello world
      - world hello hello
      - hello world world
      - world hello world
    answer: 1
    explanation: "world hello hello is the correct answer to “What will be the output of the following Python code? def f(): global a print(a) a = \"hello\" print(a) a = \"world\" f() print(a)”. This question is standard in competitive examination syllabi for Functions In Python."
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: "What will be the output of the following Python code? x=12 def f1(a,b=x): print(a,b) x=15 f1(4)"
    options:
      - Error
      - 12 4
      - 4 12
      - 4 15
    answer: 2
    explanation: "4 12 is the correct answer to “What will be the output of the following Python code? x=12 def f1(a,b=x): print(a,b) x=15 f1(4)”. This question is standard in competitive examination syllabi for Functions In Python."
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: "What will be the output of the following Python code? elements = [0, 1, 2] def incr(x): return x+1 print(list(map(elements, incr)))"
    options:
      - "[1, 2, 3]"
      - "[0, 1, 2]"
      - error
      - none of the mentioned
    answer: 2
    explanation: "error is the correct answer to “What will be the output of the following Python code? elements = [0, 1, 2] def incr(x): return x+1 print(list(map(elements, incr)))”. This question is standard in competitive examination syllabi for Functions In Python."
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: "What will be the output of the following Python code? def test(i,j): if(i==0): return j else: return test(i-1,i+j) print(test(4,7))"
    options:
      - "13"
      - "7"
      - Infinite loop
      - "17"
    answer: 3
    explanation: "17 is the correct answer to “What will be the output of the following Python code? def test(i,j): if(i==0): return j else: return test(i-1,i+j) print(test(4,7))”. This question is standard in competitive examination syllabi for Functions In Python."
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: "What will be the output of the following Python code? def to_upper(k): k.upper() x = ['ab', 'cd'] print(list(map(to_upper, x)))"
    options:
      - "['AB', 'CD']"
      - none of the mentioned
      - error
    answer: 2
    explanation: "error is the correct answer to “What will be the output of the following Python code? def to_upper(k): k.upper() x = ['ab', 'cd'] print(list(map(to_upper, x)))”. This question is standard in competitive examination syllabi for Functions In Python."
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: The output of the following codes are the same. [x**2 for x in range(10)] list(map((lambda x:x**2), range(10)))
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “The output of the following codes are the same. [x**2 for x in range(10)] list(map((lambda x:x**2), range(10)))”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: What will be the output of the following Python code? x = [12.1, 34.0] print(len(' '.join(list(map(str, x)))))
    options:
      - "6"
      - "8"
      - "9"
      - error
    answer: 2
    explanation: 9 is the correct answer to “What will be the output of the following Python code? x = [12.1, 34.0] print(len(' '.join(list(map(str, x)))))”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What is the base case in the Merge Sort algorithm when it is solved recursively?
    options:
      - n=0
      - n=1
      - A list of length one
      - An empty list
    answer: 2
    explanation: A list of length one is the correct answer to “What is the base case in the Merge Sort algorithm when it is solved recursively”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: "What will be the output of the following Python code? x=100 def f1(): global x x=90 def f2(): global x x=80 print(x)"
    options:
      - "100"
      - "90"
      - "80"
      - Error
    answer: 0
    explanation: "100 is the correct answer to “What will be the output of the following Python code? x=100 def f1(): global x x=90 def f2(): global x x=80 print(x)”. This question is standard in competitive examination syllabi for Functions In Python."
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: . . . . . . . . returns a dictionary of the module namespace. . . . . . . . . returns a dictionary of the current namespace.
    options:
      - locals() globals()
      - locals() locals()
      - globals() locals()
      - globals() globals()
    answer: 2
    explanation: globals() locals() is the correct answer to “. . . . . . . . returns a dictionary of the module namespace. . . . . . . . . returns a dictionary of the current namespace.”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: Which keyword is used for function?
    options:
      - Fun
      - Define
      - def
      - Function
    answer: 2
    explanation: def is the correct answer to “Which keyword is used for function”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: What will be the output of the following Python code? x = ['ab', 'cd'] print(len(map(list, x)))
    options:
      - "[2, 2]"
      - "2"
      - "4"
      - none of the mentioned
    answer: 3
    explanation: none of the mentioned is the correct answer to “What will be the output of the following Python code? x = ['ab', 'cd'] print(len(map(list, x)))”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: How can you define a function that accepts both positional and keyword arguments?
    options:
      - By using both *args and **kwargs
      - By using the * symbol
      - By using the ... symbol
      - By using the @args decorator
    answer: 0
    explanation: By using both *args and **kwargs is the correct answer to “How can you define a function that accepts both positional and keyword arguments”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: If a function doesn't have a return statement, which of the following does the function return?
    options:
      - int
      - "null"
      - None
      - An exception is thrown without the return statement
    answer: 2
    explanation: None is the correct answer to “If a function doesn't have a return statement, which of the following does the function return”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: "What is the output of the following code: square = lambda x: x**2 result = square(5) print(result)"
    options:
      - "25"
      - "5"
      - "10"
      - "15"
    answer: 0
    explanation: "25 is the correct answer to “What is the output of the following code: square = lambda x: x**2 result = square(5) print(result)”. This question is standard in competitive examination syllabi for Functions In Python."
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: "What will be the output of the following Python code? lamb = lambda x: x ** 3 print(lamb(5))"
    options:
      - "15"
      - "555"
      - "125"
      - None of the mentioned
    answer: 2
    explanation: "125 is the correct answer to “What will be the output of the following Python code? lamb = lambda x: x ** 3 print(lamb(5))”. This question is standard in competitive examination syllabi for Functions In Python."
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: What will be the output of the following Python code? x = [12, 34] print(len(list(map(int, x))))
    options:
      - "2"
      - "1"
      - error
      - none of the mentioned
    answer: 0
    explanation: 2 is the correct answer to “What will be the output of the following Python code? x = [12, 34] print(len(list(map(int, x))))”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: What will be the output of the following Python code? x = ['ab', 'cd'] print(list(map(upper, x)))
    options:
      - "['AB', 'CD']"
      - error
      - none of the mentioned
    answer: 2
    explanation: none of the mentioned is the correct answer to “What will be the output of the following Python code? x = ['ab', 'cd'] print(list(map(upper, x)))”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: What will be the output of the following Python code? x = 'abcd' print(list(map([], x)))
    options:
      - "['a', 'b', 'c', 'd']"
      - "['abcd']"
      - "[['a'], ['b'], ['c'], ['d']]"
      - none of the mentioned
    answer: 3
    explanation: none of the mentioned is the correct answer to “What will be the output of the following Python code? x = 'abcd' print(list(map([], x)))”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: "What will be the output of the following Python code? def f(x, y, z): return x + y + z f(2, 30, 400)"
    options:
      - "432"
      - "24000"
      - "430"
      - No output
    answer: 0
    explanation: "432 is the correct answer to “What will be the output of the following Python code? def f(x, y, z): return x + y + z f(2, 30, 400)”. This question is standard in competitive examination syllabi for Functions In Python."
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: "What will be the output of the following Python code? x = 50 def func(): global x print('x is', x) x = 2 print('Changed global x to', x) func() print('Value of x is', x)"
    options:
      - x is 50 Changed global x to 2 Value of x is 50
      - x is 50 Changed global x to 2 Value of x is 2
      - x is 50 Changed global x to 50 Value of x is 50
      - None of the mentioned
    answer: 1
    explanation: "x is 50 Changed global x to 2 Value of x is 2 is the correct answer to “What will be the output of the following Python code? x = 50 def func(): global x print('x is', x) x = 2 print('Changed global x to', x) func() print('Value of x is', x)”. This question is standard in competitive examination syllabi for Functions In Python."
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: How many keyword arguments can be passed to a function in a single function call?
    options:
      - zero
      - one
      - zero or more
      - one or more
    answer: 2
    explanation: zero or more is the correct answer to “How many keyword arguments can be passed to a function in a single function call”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: Only problems that are recursively defined can be solved using recursion.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “Only problems that are recursively defined can be solved using recursion.”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: What is a variable defined inside a function referred to as?
    options:
      - A global variable
      - A volatile variable
      - A local variable
      - An automatic variable
    answer: 2
    explanation: A local variable is the correct answer to “What is a variable defined inside a function referred to as”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: "What will be the output of the following Python code? def foo(i, x=[]): x.append(x.append(i)) return x for i in range(3): y = foo(i) print(y)"
    options:
      - "[[[0]], [[[0]], [1]], [[[0]], [[[0]], [1]], [2]]]"
      - "[[0], [[0], 1], [[0], [[0], 1], 2]]"
      - "[0, None, 1, None, 2, None]"
      - "[[[1]], [[[0]], [1]], [[[0]], [[[0]], [1]], [2]]]"
    answer: 2
    explanation: "[0, None, 1, None, 2, None] is the correct answer to “What will be the output of the following Python code? def foo(i, x=[]): x.append(x.append(i)) return x for i in range(3): y = foo(i) print(y)”. This question is standard in competitive examination syllabi for Functions In Python."
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: "What will be the output of the following Python code? def foo(k): k = [1] q = [0] foo(q) print(q)"
    options:
      - "[0]"
      - "[1]"
      - "[1, 0]"
      - "[0, 1]"
    answer: 0
    explanation: "[0] is the correct answer to “What will be the output of the following Python code? def foo(k): k = [1] q = [0] foo(q) print(q)”. This question is standard in competitive examination syllabi for Functions In Python."
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: What will be the output of the following Python code? x = [12, 34] print(len(''.join(list(map(int, x)))))
    options:
      - "4"
      - "2"
      - error
      - none of the mentioned
    answer: 2
    explanation: error is the correct answer to “What will be the output of the following Python code? x = [12, 34] print(len(''.join(list(map(int, x)))))”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: On assigning a value to a variable inside a function, it automatically becomes a global variable.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “On assigning a value to a variable inside a function, it automatically becomes a global variable.”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
---


