---
title: Python Built In Functions — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Python Built In Functions — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: python-built-in-functions-part-2
topicName: Python Built In Functions — Part 2
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
    question: Which built-in function is used to convert a value to a floating-point number?
    options:
      - float()
      - floating()
      - to_float()
      - convert_float()
    answer: 0
    explanation: "The correct answer is Option A: float(). Here's why: The float() function is a built-in Python function used to convert a value to a floating-point number. It can be used to convert integers, strings, or other numerical types to floating-point numbers. For example, float(3) would return 3.0, float('3.14') would return 3.14, and float('hello') would raise a ValueError because it cannot convert the string 'hello' to a floating-point number. Therefore, the correct choice is Option A: float()."
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: What will be the output of the following Python function? import math abs(math.sqrt(25))
    options:
      - Error
      - "-5"
      - "5"
      - "5.0"
    answer: 2
    explanation: "The correct answer is Option C: 5. Here's why: The math.sqrt() function returns the square root of a given number. In this case, math.sqrt(25) returns the square root of 25, which is 5. Then, the abs() function returns the absolute value of the result, which is 5. Therefore, the output of the code abs(math.sqrt(25)) is 5. So, the correct choice is Option C: 5."
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: "What is the output of the following code: my_string = \"Hello, World!\" print(my_string.split())"
    options:
      - "['Hello,', 'World!']"
      - "['Hello', 'World!']"
      - "['Hello', ',', 'World', '!']"
      - "\"Hello, World!\""
    answer: 1
    explanation: "The correct answer is Option B: ['Hello', 'World!'] . Here's the explanation: When you use the split() method on a string without passing any arguments, it splits the string by whitespace characters (space, tab, newline, etc.) and returns a list of the resulting substrings. In the given code, my_string.split() will split the string \"Hello, World!\" by whitespace characters and return a list containing two elements: \"Hello\" and \"World!\". Therefore, the output will be ['Hello', 'World!']."
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What will be the output of the following Python function? sum(2,4,6) sum([1,2,3])
    options:
      - Error, 6
      - 12, Error
      - 12, 6
      - Error, Error
    answer: 0
    explanation: For the call sum(2, 4, 6), the sum() function in Python expects an iterable (like a list, tuple, etc.) as its argument. When you pass individual values separated by commas, it will raise a TypeError because it doesn't accept multiple arguments like that. For the call sum([1, 2, 3]), it calculates the sum of the elements in the list [1, 2, 3], which would be 6. Therefore, the first call will result in an error, and the second call will result in the sum of the elements of the list, which is 6. So, the correct output is Error, 6.
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: Which built-in function is used to capitalize the first letter of a string?
    options:
      - capitalize()
      - upper()
      - title()
      - first_letter()
    answer: 2
    explanation: The title() function in Python is used to capitalize the first letter of each word in a string. It returns a copy of the string with the first letter of each word capitalized. This function is particularly useful when you want to capitalize the first letter of each word in a sentence or a string.
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: Which of the following functions will not result in an error when no arguments are passed to it?
    options:
      - min()
      - divmod()
      - all()
      - float()
    answer: 3
    explanation: "Explanation: The float() function in Python can be called without any arguments, and it will return a floating-point number with a value of 0.0. It does not result in an error when called without arguments."
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: "The function pow(x,y,z) is evaluated as:"
    options:
      - (x**y)**z
      - (x**y) / z
      - (x**y) % z
      - (x**y)*z
    answer: 2
    explanation: The pow() function in Python is used to raise a number x to the power of y, optionally taking a modulo z. The expression pow(x, y, z) is equivalent to (x ** y) % z, which means x raised to the power of y, then the result is taken modulo z.
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What is the purpose of the built-in function abs()?
    options:
      - Returns the absolute value of a number
      - Converts a string to lowercase
      - Rounds a floating-point number to the nearest integer
      - Returns the sum of two numbers
    answer: 0
    explanation: The abs() function in Python returns the absolute value of a number, which is the distance of the number from zero on the number line, regardless of its sign.
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What does the built-in function sorted() do in Python?
    options:
      - Returns a sorted list of the specified iterable
      - Converts a string to lowercase
      - Returns the square of a number
      - Returns the absolute value of a number
    answer: 0
    explanation: The sorted() function in Python takes an iterable as an argument and returns a new sorted list containing all items from the iterable in ascending order.
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: "What will be the output of the following code: my_string = \"Hello, World!\" print(my_string.replace(\"Hello\", \"Hi\"))"
    options:
      - "\"Hi, World!\""
      - "\"Hello, Hi!\""
      - "\"Hi, Hi!\""
      - "\"Hi\""
    answer: 0
    explanation: The replace() function in Python replaces all occurrences of a specified substring with another substring in a given string. In this case, "Hello" is replaced with "Hi" in the string "Hello, World!", resulting in "Hi, World!".
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: Which of the following functions accepts only integers as arguments?
    options:
      - ord()
      - min()
      - chr()
      - any()
    answer: 1
    explanation: The min() function in Python is used to find the minimum value among its arguments. It can accept multiple arguments, and they can be integers, floats, or strings. However, it does not accept non-numeric types like lists or tuples as arguments.
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: What will be the output of the following Python function? divmod(10.5,5) divmod(2.4,1.2)
    options:
      - (2.00, 0.50) (2.00, 0.00)
      - (2, 0.5) (2, 0)
      - (2.0, 0.5) (2.0, 0.0)
      - (2, 0.5) (2)
    answer: 2
    explanation: The divmod() function in Python returns a tuple containing the quotient and remainder when dividing the first argument by the second. In the first case, divmod(10.5, 5) returns (2.0, 0.5) because 10.5 divided by 5 results in 2.0 with a remainder of 0.5. In the second case, divmod(2.4, 1.2) returns (2.0, 0.0) because 2.4 divided by 1.2 results in 2.0 with no remainder.
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: "What will be the output of the following code: my_list = [1, 2, 3, 4] print(len(my_list))"
    options:
      - "4"
      - "[1, 2, 3, 4]"
      - "10"
      - "6"
    answer: 0
    explanation: The len() function in Python is used to find the number of elements in an object. In this case, len(my_list) will return the length of the list my_list, which contains four elements [1, 2, 3, 4]. Therefore, the output will be 4.
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: The function complex('2-3j') is valid but the function complex('2 - 3j') is invalid.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: The complex() function in Python can accept a string argument representing a complex number in the form 'a+bj' or 'a-bj', where a and b are real numbers. In the first case, '2-3j', there are no spaces between the real and imaginary parts, so it is valid. However, in the second case, '2 - 3j', there is a space between 2 and -, making it an invalid input for the complex() function.
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: "Suppose there is a list such that: l=[2,3,4]. If we want to print this list in reverse order, which of the following methods should be used?"
    options:
      - reverse(l)
      - list(reverse[(l)])
      - reversed(l)
      - list(reversed(l))
    answer: 3
    explanation: To print a list in reverse order in Python, you can use the reversed() function, which returns an iterator that yields items in reverse order. However, to display it as a list, you need to convert the iterator back to a list using the list() function. Therefore, list(reversed(l)) is the correct method to print the list l in reverse order.
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
---


