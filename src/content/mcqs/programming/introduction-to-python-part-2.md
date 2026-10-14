---
title: Introduction To Python — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Introduction To Python — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: introduction-to-python-part-2
topicName: Introduction To Python — Part 2
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
    question: What will be the output of the following Python function? min(max(False,-3,-4), 2,7)
    options:
      - "-4"
      - "-3"
      - "2"
      - "False"
    answer: 3
    explanation: In Python, the boolean value False evaluates to 0 in numeric contexts. The max() function returns the largest of the given arguments. Here, we have the expression max(False, -3, -4) . Since False is equivalent to 0 , and -3 and -4 are numeric values, the largest value among them is 0 . Therefore, the output of max(False, -3, -4) is False . The min() function then evaluates min(False, 2, 7) , and since False evaluates to 0 and 2 and 7 are greater than 0 , the minimum value among them is False . Hence, the overall output is False .
    keyConcept: Introduction To Python
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: What will be the output of the following Python function? len(["hello",2, 4, 6])
    options:
      - Error
      - "6"
      - "4"
      - "3"
    answer: 2
    explanation: "The len() function returns the number of items in an object. Here, we have a list [\"hello\", 2, 4, 6] . The list contains 4 items: a string, two integers, and another integer. Therefore, the output of len([\"hello\", 2, 4, 6]) will be 4 ."
    keyConcept: Introduction To Python
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Which of the following is not a core data type in Python programming?
    options:
      - Tuples
      - Lists
      - Class
      - Dictionary
    answer: 2
    explanation: "In Python, the core data types include: 1. Tuples 2. Lists 3. Dictionary However, Classes are not considered a core data type in Python. Classes are used to create user-defined data structures that bundle data attributes and methods. Therefore, the correct option is Option C: Class ."
    keyConcept: Introduction To Python
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: Which one of the following is not a keyword in Python language?
    options:
      - pass
      - eval
      - assert
      - nonlocal
    answer: 1
    explanation: "In Python, keywords are reserved identifiers that have special meanings and purposes within the language. eval is not a keyword in Python; rather, it is a built-in function used to evaluate a Python expression stored in a string. Keywords like pass , assert , and nonlocal have specific meanings in Python and are reserved for special purposes within the language. Therefore, the correct option is Option B: eval ."
    keyConcept: Introduction To Python
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: What will be the output of the following Python code? x = [[0], [1]] print((' '.join(list(map(str, x))),))
    options:
      - "01"
      - "[0] [1]"
      - ('01')
      - ('[0] [1]',)
    answer: 3
    explanation: "In the given code, the variable x is assigned a list containing two sublists: [[0], [1]] . The map() function is used to apply the str() function to each element of x , converting them to strings. Then, list() is used to convert the resulting map object to a list. The join() function concatenates these strings with a space separator. Finally, the result is enclosed in a tuple using (...) and printed. Therefore, the output will be: ('[0] [1]',) ."
    keyConcept: Introduction To Python
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: "What will be the output of the following Python code? def foo(): try: return 1 finally: return 2 k = foo() print(k)"
    options:
      - error, there is more than one return statement in a single try-finally block
      - "3"
      - "2"
      - "1"
    answer: 2
    explanation: In the given code, the function foo() is defined. Inside the function, there is a try-finally block. In the try block, return 1 is encountered. However, before returning, the finally block executes, which contains return 2 . As per the behavior of finally , it always executes, regardless of whether there is an exception or not. Therefore, the return 2 statement in the finally block is executed, and 2 is returned from the function. When foo() is called and its return value is assigned to k , k will be 2 . Hence, the output will be 2 .
    keyConcept: Introduction To Python
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: To add a new element to a list we use which Python command?
    options:
      - list1.addEnd(5)
      - list1.addLast(5)
      - list1.append(5)
      - list1.add(5)
    answer: 2
    explanation: In Python, to add a new element to the end of a list, the append() method is used. The syntax for using append() is list_name.append(element) , where list_name is the name of the list and element is the value to be added. append() adds the specified element to the end of the list, increasing the list's length by one. Therefore, list1.append(5) will add the element 5 to the end of list1 .
    keyConcept: Introduction To Python
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: "The following python program can work with . . . . . . . . parameters. def f(x): def f1(*args, **kwargs): print(\"Examveda\") return x(*args, **kwargs) return f1"
    options:
      - any number of
      - "0"
      - "1"
      - "2"
    answer: 0
    explanation: The program defines a function f that takes another function x as an argument. Inside f , there is a nested function f1 defined with variable-length arguments *args and keyword arguments **kwargs . The use of *args allows f1 to accept any number of positional arguments, and **kwargs allows it to accept any number of keyword arguments. Inside f1 , "Examveda" is printed, and then the function x is called with the received arguments using (*args, **kwargs) . Therefore, the program can work with any number of parameters .
    keyConcept: Introduction To Python
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What is the maximum possible length of an identifier in Python?
    options:
      - 79 characters
      - 31 characters
      - 63 characters
      - none of the mentioned
    answer: 3
    explanation: "In Python, there is no fixed limit on the maximum length of an identifier imposed by the language itself. Identifiers can be of any length as long as they follow the naming rules (e.g., start with a letter or underscore, followed by letters, digits, or underscores). However, extremely long identifiers are discouraged because they reduce code readability and may not be supported well by some tools or editors. Option A (79 characters) refers to the recommended maximum line length in PEP 8, not identifier length. Option B and C (31 and 63 characters) were limits in older languages like C, not Python. Therefore, the correct answer is Option D: none of the mentioned ."
    keyConcept: Introduction To Python
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: "What will be the output of the following Python code? i = 1 while True: if i%3 == 0: break print(i) i + = 1"
    options:
      - 1 2 3
      - error
      - 1 2
      - none of the mentioned
    answer: 1
    explanation: "Explanation: The code starts with `i` initialized to 1. The `while True` loop runs indefinitely until a `break` statement is encountered. Inside the loop, the `if i%3 == 0:` condition checks if `i` is divisible by 3. If `i` is divisible by 3, the `break` statement will terminate the loop. If `i` is not divisible by 3, the value of `i` is printed. Then, there's an error `i += 1` it should be not `i + = 1`. So the correct answer is Option B: error"
    keyConcept: Introduction To Python
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: Which of the following is a Python tuple?
    options:
      - "{1, 2, 3}"
      - "{}"
      - "[1, 2, 3]"
      - (1, 2, 3)
    answer: 3
    explanation: (1, 2, 3) is the correct answer to “Which of the following is a Python tuple”. This question is standard in competitive examination syllabi for Introduction To Python.
    keyConcept: Introduction To Python
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: What will be the output of the following Python code? print('*', "abcde".center(6), '*', sep='')
    options:
      - "* abcde *"
      - "*abcde *"
      - "* abcde*"
    answer: 1
    explanation: "*abcde * is the correct answer to “What will be the output of the following Python code? print('*', \"abcde\".center(6), '*', sep='')”. This question is standard in competitive examination syllabi for Introduction To Python."
    keyConcept: Introduction To Python
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: "What will be the output of the following Python program? def foo(x): x[0] = ['def'] x[1] = ['abc'] return id(x) q = ['abc', 'def'] print(id(q) == foo(q))"
    options:
      - Error
      - None
      - "False"
      - "True"
    answer: 3
    explanation: "True is the correct answer to “What will be the output of the following Python program? def foo(x): x[0] = ['def'] x[1] = ['abc'] return id(x) q = ['abc', 'def'] print(id(q) == foo(q))”. This question is standard in competitive examination syllabi for Introduction To Python."
    keyConcept: Introduction To Python
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: "What will be the output of the following Python code snippet? for i in [1, 2, 3, 4][::-1]: print (i)"
    options:
      - 4 3 2 1
      - error
      - 1 2 3 4
      - none of the mentioned
    answer: 0
    explanation: "4 3 2 1 is the correct answer to “What will be the output of the following Python code snippet? for i in [1, 2, 3, 4][::-1]: print (i)”. This question is standard in competitive examination syllabi for Introduction To Python."
    keyConcept: Introduction To Python
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What arithmetic operators cannot be used with strings in Python?
    options:
      - "*"
      - "-"
      - +
      - All of the mentioned
    answer: 1
    explanation: "- is the correct answer to “What arithmetic operators cannot be used with strings in Python”. This question is standard in competitive examination syllabi for Introduction To Python."
    keyConcept: Introduction To Python
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: Which of the following is the truncation division operator in Python?
    options:
      - "|"
      - //
      - /
      - "%"
    answer: 1
    explanation: // is the correct answer to “Which of the following is the truncation division operator in Python”. This question is standard in competitive examination syllabi for Introduction To Python.
    keyConcept: Introduction To Python
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: The process of pickling in Python includes . . . . . . . .
    options:
      - conversion of a Python object hierarchy into byte stream
      - conversion of a datatable into a list
      - conversion of a byte stream into Python object hierarchy
      - conversion of a list into a datatable
    answer: 0
    explanation: conversion of a Python object hierarchy into byte stream is the correct answer to “The process of pickling in Python includes . . . . . . . .”. This question is standard in competitive examination syllabi for Introduction To Python.
    keyConcept: Introduction To Python
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: What will be the value of 'result' in following Python program? list1 = [1,2,3,4] list2 = [2,4,5,6] list3 = [2,6,7,8] result = list() result.extend(i for i in list1 if i not in (list2+list3) and i not in result) result.extend(i for i in list2 if i not in (list1+list3) and i not in result) result.extend(i for i in list3 if i not in (list1+list2) and i not in result)
    options:
      - "[1, 3, 5, 7, 8]"
      - "[1, 7, 8]"
      - "[1, 2, 4, 7, 8]"
      - error
    answer: 0
    explanation: "[1, 3, 5, 7, 8] is the correct answer to “What will be the value of 'result' in following Python program? list1 = [1,2,3,4] list2 = [2,4,5,6] list3 = [2,6,7,8] result = list() result.extend(i for i in list1 if i not in (list2+list3) and i not in result) result.extend(i for i in list2 if i not in (list1+list3) and i not in result) result.extend(i for i in list3 if i not in (list1+list2) and i not in result)”. This question is standard in competitive examination syllabi for Introduction To Python."
    keyConcept: Introduction To Python
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: Which function is called when the following Python program is executed? f = foo() format(f)
    options:
      - str()
      - format()
      - __str__()
      - __format__()
    answer: 2
    explanation: __str__() is the correct answer to “Which function is called when the following Python program is executed? f = foo() format(f)”. This question is standard in competitive examination syllabi for Introduction To Python.
    keyConcept: Introduction To Python
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What will be the output of the following Python program? z=set('abc') z.add('san') z.update(set(['p', 'q'])) z
    options:
      - "{'a', 'c', 'c', 'p', 'q', 's', 'a', 'n'}"
      - "{'abc', 'p', 'q', 'san'}"
      - "{'a', 'b', 'c', 'p', 'q', 'san'}"
      - "{'a', 'b', 'c', ['p', 'q'], 'san}"
    answer: 2
    explanation: "{'a', 'b', 'c', 'p', 'q', 'san'} is the correct answer to “What will be the output of the following Python program? z=set('abc') z.add('san') z.update(set(['p', 'q'])) z”. This question is standard in competitive examination syllabi for Introduction To Python."
    keyConcept: Introduction To Python
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: What will be the output of the following Python expression if x=56.236? print("%.2f"%x)
    options:
      - "56.236"
      - "56.23"
      - "56.0000"
      - "56.24"
    answer: 3
    explanation: 56.24 is the correct answer to “What will be the output of the following Python expression if x=56.236? print("%.2f"%x)”. This question is standard in competitive examination syllabi for Introduction To Python.
    keyConcept: Introduction To Python
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What will be the output of the following Python code snippet? z=set('abc$de') 'a' in z
    options:
      - Error
      - "True"
      - "False"
      - No output
    answer: 1
    explanation: True is the correct answer to “What will be the output of the following Python code snippet? z=set('abc$de') 'a' in z”. This question is standard in competitive examination syllabi for Introduction To Python.
    keyConcept: Introduction To Python
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: Which module in the python standard library parses options received from the command line?
    options:
      - getarg
      - getopt
      - main
      - os
    answer: 1
    explanation: getopt is the correct answer to “Which module in the python standard library parses options received from the command line”. This question is standard in competitive examination syllabi for Introduction To Python.
    keyConcept: Introduction To Python
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: What will be the output of the following Python code? >>>list1 = [1, 3] >>>list2 = list1 >>>list1[0] = 4 >>>print(list2)
    options:
      - "[1, 4]"
      - "[1, 3, 4]"
      - "[4, 3]"
      - "[1, 3]"
    answer: 2
    explanation: "[4, 3] is the correct answer to “What will be the output of the following Python code? >>>list1 = [1, 3] >>>list2 = list1 >>>list1[0] = 4 >>>print(list2)”. This question is standard in competitive examination syllabi for Introduction To Python."
    keyConcept: Introduction To Python
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: "What will be the output of the following Python code? x = 'abcd' for i in range(len(x)): print(i)"
    options:
      - error
      - 1 2 3 4
      - a b c d
      - 0 1 2 3
    answer: 3
    explanation: "0 1 2 3 is the correct answer to “What will be the output of the following Python code? x = 'abcd' for i in range(len(x)): print(i)”. This question is standard in competitive examination syllabi for Introduction To Python."
    keyConcept: Introduction To Python
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: What will be the output of the following Python statement? >>>"a"+"bc"
    options:
      - bc
      - abc
      - a
      - bca
    answer: 1
    explanation: abc is the correct answer to “What will be the output of the following Python statement? >>>"a"+"bc"”. This question is standard in competitive examination syllabi for Introduction To Python.
    keyConcept: Introduction To Python
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: What are the two main types of functions in Python?
    options:
      - System function
      - Custom function
      - Built-in function & User defined function
      - User function
    answer: 2
    explanation: Built-in function & User defined function is the correct answer to “What are the two main types of functions in Python”. This question is standard in competitive examination syllabi for Introduction To Python.
    keyConcept: Introduction To Python
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: What is output of print(math.pow(3, 2))?
    options:
      - "9.0"
      - None
      - "9"
      - None of the mentioned
    answer: 0
    explanation: 9.0 is the correct answer to “What is output of print(math.pow(3, 2))”. This question is standard in competitive examination syllabi for Introduction To Python.
    keyConcept: Introduction To Python
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: "What will be the output of the following Python program? def addItem(listParam): listParam += [1] mylist = [1, 2, 3, 4] addItem(mylist) print(len(mylist))"
    options:
      - "5"
      - "8"
      - "2"
      - "1"
    answer: 0
    explanation: "5 is the correct answer to “What will be the output of the following Python program? def addItem(listParam): listParam += [1] mylist = [1, 2, 3, 4] addItem(mylist) print(len(mylist))”. This question is standard in competitive examination syllabi for Introduction To Python."
    keyConcept: Introduction To Python
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: Which of the following statements is used to create an empty set in Python?
    options:
      - ( )
      - "[ ]"
      - "{ }"
      - set()
    answer: 3
    explanation: set() is the correct answer to “Which of the following statements is used to create an empty set in Python”. This question is standard in competitive examination syllabi for Introduction To Python.
    keyConcept: Introduction To Python
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: Which of the following is a feature of Python DocString?
    options:
      - In Python all functions should have a docstring
      - Docstrings can be accessed by the __doc__ attribute on objects
      - It provides a convenient way of associating documentation with Python modules, functions, classes, and methods
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “Which of the following is a feature of Python DocString”. This question is standard in competitive examination syllabi for Introduction To Python.
    keyConcept: Introduction To Python
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: "Which of the following Python statements will result in the output: 6? A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]"
    options:
      - A[2][1]
      - A[1][2]
      - A[3][2]
      - A[2][3]
    answer: 1
    explanation: "A[1][2] is the correct answer to “Which of the following Python statements will result in the output: 6? A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]”. This question is standard in competitive examination syllabi for Introduction To Python."
    keyConcept: Introduction To Python
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: What will be the output of the following Python code? print("Hello {0[0]} and {0[1]}".format(('foo', 'bin')))
    options:
      - Hello ('foo', 'bin') and ('foo', 'bin')
      - Error
      - Hello foo and bin
      - None of the mentioned
    answer: 2
    explanation: Hello foo and bin is the correct answer to “What will be the output of the following Python code? print("Hello {0[0]} and {0[1]}".format(('foo', 'bin')))”. This question is standard in competitive examination syllabi for Introduction To Python.
    keyConcept: Introduction To Python
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: "What will be the output of the following Python code? class tester: def __init__(self, id): self.id = str(id) id=\"224\" >>>temp = tester(12) >>>print(temp.id)"
    options:
      - "12"
      - "224"
      - None
      - Error
    answer: 0
    explanation: "12 is the correct answer to “What will be the output of the following Python code? class tester: def __init__(self, id): self.id = str(id) id=\"224\" >>>temp = tester(12) >>>print(temp.id)”. This question is standard in competitive examination syllabi for Introduction To Python."
    keyConcept: Introduction To Python
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: What will be the output of the following Python expression? round(4.576)
    options:
      - "4"
      - "4.6"
      - "5"
      - "4.5"
    answer: 2
    explanation: 5 is the correct answer to “What will be the output of the following Python expression? round(4.576)”. This question is standard in competitive examination syllabi for Introduction To Python.
    keyConcept: Introduction To Python
    testedIn:
      - FPSC
      - PPSC
---


