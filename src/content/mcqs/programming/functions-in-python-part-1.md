---
title: Functions In Python — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Functions In Python — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: functions-in-python-part-1
topicName: Functions In Python — Part 1
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
    question: How can you make a parameter optional in a Python function?
    options:
      - By using the optional keyword
      - By providing a default value to the parameter
      - By making the parameter lowercase
      - By using a special keyword opt
    answer: 1
    explanation: "In Python, you can make a parameter optional by assigning it a default value in the function definition. When a default value is specified, the parameter becomes optional, and the function can be called without explicitly passing a value for it. For example: def greet(name=\"Guest\"): print(f\"Hello, {name}!\") Here, the parameter name is optional because it has a default value of \"Guest\". Note: If no value is provided when the function is called, the default value will be used."
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: How can you pass a variable number of keyword arguments to a function in Python?
    options:
      - By using the **kwargs syntax
      - By using the *args syntax
      - By using the * symbol
      - By using the ... symbol
    answer: 0
    explanation: "Correct Answer: A) By using the **kwargs syntax Keyword Arguments: In Python, keyword arguments are arguments passed to a function along with a name (the keyword) and a value. Example: my_function(name=\"Alice\", age=30) Variable Number of Keyword Arguments: Sometimes, you don't know in advance how many keyword arguments a function might receive. That's where **kwargs comes in. kwargs Explained: * The **kwargs syntax allows a function to accept any number of keyword arguments. * kwargs is just a name (you could technically use another name), but ** is what's important. It tells Python to collect all the keyword arguments into a dictionary. * Inside the function, kwargs acts like a regular dictionary where the keys are the argument names (like \"name\" and \"age\") and the values are the corresponding argument values (like \"Alice\" and 30). Why the other options are incorrect: * Option B ( *args ): Used to pass a variable number of positional arguments. It collects them into a tuple, not a dictionary. * Option C ( * symbol): Used for other purposes such as unpacking iterables or enforcing keyword-only arguments, but not for passing keyword arguments. * Option D ( ... symbol): The ellipsis has special meanings like use in type hints or as a placeholder, but is not related to passing arguments to functions. Therefore, the correct answer is Option A: By using the **kwargs syntax ."
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What does the return statement in a function do?
    options:
      - It specifies the value to be returned from the function
      - It ends the execution of the function
      - It prints the result on the screen
      - It defines the function's name
    answer: 1
    explanation: It ends the execution of the function is the correct answer to “What does the return statement in a function do”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: Which of the following is NOT a valid function name in Python?
    options:
      - my_function
      - 2nd_function
      - _function
      - function123
    answer: 1
    explanation: 2nd_function is the correct answer to “Which of the following is NOT a valid function name in Python”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: What is the purpose of the def keyword in Python?
    options:
      - It is used to define a function
      - It is used to declare a variable
      - It is used to import a module
      - It is used to create a loop
    answer: 0
    explanation: It is used to define a function is the correct answer to “What is the purpose of the def keyword in Python”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What is the purpose of the pass statement in a function?
    options:
      - It is a placeholder for future code
      - It returns a value from the function
      - It prints the result on the screen
      - It breaks the loop
    answer: 0
    explanation: It is a placeholder for future code is the correct answer to “What is the purpose of the pass statement in a function”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What does the lambda keyword do when used in a function?
    options:
      - It is used to create anonymous functions (lambda functions)
      - It is used to define a named function
      - It is used to import a module
      - It is used to create classes
    answer: 0
    explanation: It is used to create anonymous functions (lambda functions) is the correct answer to “What does the lambda keyword do when used in a function”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What is the purpose of the global keyword do when used in a function?
    options:
      - It allows a variable to be modified outside the current scope
      - It defines a new variable
      - It defines a function
      - It imports a module
    answer: 0
    explanation: It allows a variable to be modified outside the current scope is the correct answer to “What is the purpose of the global keyword do when used in a function”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What is the purpose of the return statement in a function?
    options:
      - It specifies the value to be returned from the function
      - It defines the function's name
      - It ends the execution of the function
      - It prints the result on the screen
    answer: 2
    explanation: It ends the execution of the function is the correct answer to “What is the purpose of the return statement in a function”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What does the *args syntax in a function definition mean?
    options:
      - It allows the function to accept a variable number of arguments as a tuple
      - It is a reserved keyword in Python
      - It specifies the return type of the function
      - It defines a keyword argument
    answer: 1
    explanation: It is a reserved keyword in Python is the correct answer to “What does the *args syntax in a function definition mean”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What is the purpose of using recursion in a function?
    options:
      - It allows a function to call itself
      - It simplifies the syntax of the function
      - It increases the performance of the function
      - It makes the function easier to understand
    answer: 0
    explanation: It allows a function to call itself is the correct answer to “What is the purpose of using recursion in a function”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: "What is the output of the following code: def greet(name): print(f\"Hello, {name}!\") greet(\"Alice\")"
    options:
      - Hello, Alice!
      - Hello, name!
      - name
      - "\"Hello, {name}!\""
    answer: 0
    explanation: "Hello, Alice! is the correct answer to “What is the output of the following code: def greet(name): print(f\"Hello, {name}!\") greet(\"Alice\")”. This question is standard in competitive examination syllabi for Functions In Python."
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What is a variable defined outside a function referred to as?
    options:
      - A static variable
      - A global variable
      - A local variable
      - An automatic variable
    answer: 1
    explanation: A global variable is the correct answer to “What is a variable defined outside a function referred to as”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: Where are the arguments received from the command line stored?
    options:
      - sys.argv
      - os.argv
      - argv
      - none of the mentioned
    answer: 0
    explanation: sys.argv is the correct answer to “Where are the arguments received from the command line stored”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What is the purpose of using the ** symbol in function argument unpacking?
    options:
      - It allows a dictionary of arguments to be passed
      - It defines a new variable
      - It specifies the return type of the function
      - It is used to create a loop
    answer: 0
    explanation: It allows a dictionary of arguments to be passed is the correct answer to “What is the purpose of using the ** symbol in function argument unpacking”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: "What will be the output of the following Python code? def sum(*args): '''Function returns the sum of all values''' r = 0 for i in args: r += i return r print sum.__doc__ print sum(1, 2, 3) print sum(1, 2, 3, 4, 5)"
    options:
      - 6 15
      - 6 100
      - 123 12345
      - None of the mentioned
    answer: 0
    explanation: "6 15 is the correct answer to “What will be the output of the following Python code? def sum(*args): '''Function returns the sum of all values''' r = 0 for i in args: r += i return r print sum.__doc__ print sum(1, 2, 3) print sum(1, 2, 3, 4, 5)”. This question is standard in competitive examination syllabi for Functions In Python."
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: "What will be the output of the following Python code? min = (lambda x, y: x if x < y else y) min(101*99, 102*98)"
    options:
      - "9997"
      - "9999"
      - "9996"
      - None of the mentioned
    answer: 2
    explanation: "9996 is the correct answer to “What will be the output of the following Python code? min = (lambda x, y: x if x < y else y) min(101*99, 102*98)”. This question is standard in competitive examination syllabi for Functions In Python."
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: The nested list undergoes shallow copy even when the list as a whole undergoes deep copy.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “The nested list undergoes shallow copy even when the list as a whole undergoes deep copy.”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: What will be the output of the following Python code? x = [34, 56] print((''.join(list(map(str, x))),))
    options:
      - "3456"
      - (3456)
      - ('3456')
      - ('3456',)
    answer: 3
    explanation: ('3456',) is the correct answer to “What will be the output of the following Python code? x = [34, 56] print((''.join(list(map(str, x))),))”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What will be the output of the following Python code? x = [[0], [1]] print(len(' '.join(list(map(str, x)))))
    options:
      - "2"
      - "3"
      - "7"
      - "8"
    answer: 2
    explanation: 7 is the correct answer to “What will be the output of the following Python code? x = [[0], [1]] print(len(' '.join(list(map(str, x)))))”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: What will be the output of the following Python code? x = ['ab', 'cd'] print(len(list(map(list, x))))))
    options:
      - "2"
      - "4"
      - error
      - none of the mentioned
    answer: 2
    explanation: error is the correct answer to “What will be the output of the following Python code? x = ['ab', 'cd'] print(len(list(map(list, x))))))”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What will be the output of the following Python code? l1=[1, 2, 3, [4]] l2=list(l1) id(l1)==id(l2)
    options:
      - "True"
      - "False"
      - Error
      - Address of l1
    answer: 1
    explanation: False is the correct answer to “What will be the output of the following Python code? l1=[1, 2, 3, [4]] l2=list(l1) id(l1)==id(l2)”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: "What will be the output of the following Python code? def display(b, n): while n > 0: print(b,end=\"\") n=n-1 display('z',3)"
    options:
      - zzz
      - zz
      - An exception is executed
      - Infinite loop
    answer: 0
    explanation: "zzz is the correct answer to “What will be the output of the following Python code? def display(b, n): while n > 0: print(b,end=\"\") n=n-1 display('z',3)”. This question is standard in competitive examination syllabi for Functions In Python."
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: "What will be the output of the following Python code? def foo(fname, val): print(fname(val)) foo(max, [1, 2, 3]) foo(min, [1, 2, 3])"
    options:
      - 3 1
      - 1 3
      - error
      - none of the mentioned
    answer: 0
    explanation: "3 1 is the correct answer to “What will be the output of the following Python code? def foo(fname, val): print(fname(val)) foo(max, [1, 2, 3]) foo(min, [1, 2, 3])”. This question is standard in competitive examination syllabi for Functions In Python."
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: "What will be the output of the following Python code? def cube(x): return x * x * x x = cube(3) print x"
    options:
      - "9"
      - "3"
      - "27"
      - "30"
    answer: 2
    explanation: "27 is the correct answer to “What will be the output of the following Python code? def cube(x): return x * x * x x = cube(3) print x”. This question is standard in competitive examination syllabi for Functions In Python."
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: What is the purpose of a docstring in a function?
    options:
      - It provides documentation for the function
      - It is a reserved keyword
      - It is used for debugging
      - It is used to define a default value
    answer: 0
    explanation: It provides documentation for the function is the correct answer to “What is the purpose of a docstring in a function”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: "What will be the output of the following Python code? def f1(): global x x+=1 print(x) x=12 print(\"x\")"
    options:
      - Error
      - "13"
      - 13 x
      - x
    answer: 3
    explanation: "x is the correct answer to “What will be the output of the following Python code? def f1(): global x x+=1 print(x) x=12 print(\"x\")”. This question is standard in competitive examination syllabi for Functions In Python."
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: What will be the output of the following Python code? l1=[10, 20, 30] l2=l1 id(l1)==id(l2) l2=l1.copy() id(l1)==id(l2)
    options:
      - False, False
      - False, True
      - True, True
      - True, False
    answer: 3
    explanation: True, False is the correct answer to “What will be the output of the following Python code? l1=[10, 20, 30] l2=l1 id(l1)==id(l2) l2=l1.copy() id(l1)==id(l2)”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: How are keyword arguments specified in the function heading?
    options:
      - one-star followed by a valid identifier
      - one underscore followed by a valid identifier
      - two stars followed by a valid identifier
      - two underscores followed by a valid identifier
    answer: 2
    explanation: two stars followed by a valid identifier is the correct answer to “How are keyword arguments specified in the function heading”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: "Fill in the line of the following Python code for calculating the factorial of a number. def fact(num): if num == 0: return 1 else: return _____________________"
    options:
      - num*fact(num-1)
      - (num-1)*(num-2)
      - num*(num-1)
      - fact(num)*fact(num-1)
    answer: 0
    explanation: "num*fact(num-1) is the correct answer to “Fill in the line of the following Python code for calculating the factorial of a number. def fact(num): if num == 0: return 1 else: return _____________________”. This question is standard in competitive examination syllabi for Functions In Python."
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: "What will be the output of the following Python code? def fun(n): if (n > 100): return n - 5 return fun(fun(n+11)); print(fun(45))"
    options:
      - "50"
      - "100"
      - "74"
      - Infinite loop
    answer: 1
    explanation: "100 is the correct answer to “What will be the output of the following Python code? def fun(n): if (n > 100): return n - 5 return fun(fun(n+11)); print(fun(45))”. This question is standard in competitive examination syllabi for Functions In Python."
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: What will be the output of the following Python code? list(map((lambda x:x**2), filter((lambda x:x%2==0), range(10))))
    options:
      - "[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]"
      - "[0, 4, 16, 36, 64]"
      - Error
      - No output
    answer: 1
    explanation: "[0, 4, 16, 36, 64] is the correct answer to “What will be the output of the following Python code? list(map((lambda x:x**2), filter((lambda x:x%2==0), range(10))))”. This question is standard in competitive examination syllabi for Functions In Python."
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: "What will be the output of the following code: def my_function(a, b): return a / b result = my_function(4, 2) print(result)"
    options:
      - "2"
      - "1"
      - "0.5"
      - "4"
    answer: 0
    explanation: "2 is the correct answer to “What will be the output of the following code: def my_function(a, b): return a / b result = my_function(4, 2) print(result)”. This question is standard in competitive examination syllabi for Functions In Python."
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: "What will be the output of the following Python code? a = [1, 2, 3, 4, 5] b = lambda x: (b (x[1:]) + x[:1] if x else []) print(b (a))"
    options:
      - 1 2 3 4 5
      - "[5,4,3,2,1]"
      - "[]"
      - Error, lambda functions can't be called recursively
    answer: 2
    explanation: "[] is the correct answer to “What will be the output of the following Python code? a = [1, 2, 3, 4, 5] b = lambda x: (b (x[1:]) + x[:1] if x else []) print(b (a))”. This question is standard in competitive examination syllabi for Functions In Python."
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: Which of the following statements is false about recursion?
    options:
      - Every recursive function must have a base case
      - Infinite recursion can occur if the base case isn't properly mentioned
      - A recursive function makes the code easier to understand
      - Every recursive function must have a return value
    answer: 3
    explanation: Every recursive function must have a return value is the correct answer to “Which of the following statements is false about recursion”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: Which of these is not true about recursion?
    options:
      - Making the code look clean
      - A complex task can be broken into sub-problems
      - Recursive calls take up less memory
      - Sequence generation is easier than a nested iteration
    answer: 2
    explanation: Recursive calls take up less memory is the correct answer to “Which of these is not true about recursion”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: What will be the output of the following Python code? list(map((lambda x:x^2), range(10)))
    options:
      - "[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]"
      - Error
      - "[2, 3, 0, 1, 6, 7, 4, 5, 10, 11]"
      - No output
    answer: 2
    explanation: "[2, 3, 0, 1, 6, 7, 4, 5, 10, 11] is the correct answer to “What will be the output of the following Python code? list(map((lambda x:x^2), range(10)))”. This question is standard in competitive examination syllabi for Functions In Python."
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: Which of these is false about a package?
    options:
      - A package can have subfolders and modules
      - Each import package need not introduce a namespace
      - import folder.subfolder.mod1 imports packages
      - from folder.subfolder.mod1 import objects imports packages
    answer: 1
    explanation: Each import package need not introduce a namespace is the correct answer to “Which of these is false about a package”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: Lambda contains block of statements.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “Lambda contains block of statements.”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: What happens if the base condition isn't defined in recursive programs?
    options:
      - Program gets into an infinite loop
      - Program runs once
      - Program runs n number of times where n is the argument given to the function
      - An exception is thrown
    answer: 0
    explanation: Program gets into an infinite loop is the correct answer to “What happens if the base condition isn't defined in recursive programs”. This question is standard in competitive examination syllabi for Functions In Python.
    keyConcept: Functions In Python
    testedIn:
      - FPSC
      - PPSC
---


