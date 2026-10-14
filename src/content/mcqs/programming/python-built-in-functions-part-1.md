---
title: Python Built In Functions — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Python Built In Functions — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: python-built-in-functions-part-1
topicName: Python Built In Functions — Part 1
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
    question: Which built-in function is used to find the smallest item in an iterable?
    options:
      - min()
      - smallest()
      - minimum()
      - small()
    answer: 0
    explanation: "The correct answer is Option A: min() . The min() function is used to find the smallest item in an iterable, such as a list, tuple, or set. It takes an iterable as an argument and returns the smallest item. For example: numbers = [5, 2, 8, 1, 6] smallest_number = min(numbers) print(smallest_number) # Output: 1"
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: What does the built-in function round() do in Python?
    options:
      - Rounds a floating-point number to the nearest integer
      - Returns the square of a number
      - Returns the absolute value of a number
      - Converts a number to a string
    answer: 0
    explanation: "The correct answer is Option A: Rounds a floating-point number to the nearest integer . The round() function in Python is used to round a floating-point number to the nearest integer. It takes one or two arguments. If given one argument, it rounds the number to the nearest integer. If given two arguments, it rounds the first argument to the number of decimal places specified by the second argument. For example: num1 = 3.7 num2 = 9.2 rounded_num1 = round(num1) rounded_num2 = round(num2) print(rounded_num1) # Output: 4 print(rounded_num2) # Output: 9"
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What does the built-in function max() do in Python?
    options:
      - Returns the largest item in an iterable
      - Converts a number to a string
      - Returns the square of a number
      - Returns the absolute value of a number
    answer: 0
    explanation: "The correct answer is Option A: Returns the largest item in an iterable . The max() function in Python is used to find the largest item in an iterable, such as a list, tuple, or set. It takes one or more arguments and returns the largest item. For example: numbers = [5, 2, 8, 1, 6] largest_number = max(numbers) print(largest_number) # Output: 8"
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: Which built-in function is used to check if all elements in an iterable are true?
    options:
      - all()
      - every()
      - true()
      - check()
    answer: 0
    explanation: "The correct answer is Option A: all() . The all() function in Python is used to check if all elements in an iterable are true. It takes an iterable as an argument and returns True if all elements in the iterable are true, otherwise False . For example: my_list = [True, True, True] result = all(my_list) print(result) # Output: True"
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: What does the built-in function enumerate() do in Python?
    options:
      - Returns an enumerate object that produces pairs of index and value
      - Converts a string to lowercase
      - Returns the square of a number
      - Returns the absolute value of a number
    answer: 0
    explanation: "The correct answer is Option A: Returns an enumerate object that produces pairs of index and value . The enumerate() function in Python is used to iterate over a sequence while keeping track of the index of each item. It takes an iterable as an argument and returns an enumerate object that produces tuples containing the index and value of each item in the iterable. For example: my_list = ['a', 'b', 'c'] for index, value in enumerate(my_list): print(index, value) # Output: # 0 a # 1 b # 2 c"
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: Which built-in function is used to convert a value to an integer?
    options:
      - int()
      - integer()
      - to_int()
      - convert_int()
    answer: 0
    explanation: "The correct answer is Option A: int() . The int() function in Python is used to convert a value to an integer. It can convert a string representing a number, a float, or even another integer to an integer data type. For example: num_str = \"10\" num_float = 3.14 converted_str = int(num_str) converted_float = int(num_float) print(converted_str) # Output: 10 print(converted_float) # Output: 3"
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What does the built-in function bool() do in Python?
    options:
      - Converts a value to a boolean value
      - Converts a string to lowercase
      - Returns the square of a number
      - Returns the absolute value of a number
    answer: 0
    explanation: "The correct answer is Option A: Converts a value to a boolean value . The bool() function in Python is used to convert a value to a boolean value. It returns True if the value is true, and False if the value is false. For example: print(bool(0)) # Output: False print(bool(10)) # Output: True print(bool([])) # Output: False print(bool([1,2])) # Output: True"
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: Which built-in function is used to calculate the absolute value of a number?
    options:
      - abs()
      - absolute()
      - val_abs()
      - calculate_abs()
    answer: 0
    explanation: "The correct answer is Option A: abs() . The abs() function in Python is used to calculate the absolute value of a number. It returns the magnitude of a numeric value without regard to its sign. For example: print(abs(-5)) # Output: 5 print(abs(3.14)) # Output: 3.14"
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What is the purpose of the built-in function dir()?
    options:
      - Returns a list of attributes and methods of an object
      - Converts a string to lowercase
      - Returns the square of a number
      - Returns the absolute value of a number
    answer: 0
    explanation: "The correct answer is Option A: Returns a list of attributes and methods of an object . The dir() function in Python is used to return a list of attributes and methods of an object. When called without an argument, it returns the list of names in the current local scope. For example: my_list = [1, 2, 3] print(dir(my_list)) # Output: ['__add__', '__class__', '__contains__', ...]"
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: "What is the output of the following code: my_string = \"Hello, World!\" print(my_string.upper())"
    options:
      - "\"HELLO, WORLD!\""
      - "\"hello\""
    answer: 0
    explanation: "The correct answer is Option A: \"HELLO, WORLD!\" . The upper() method in Python is used to convert all the characters in a string to uppercase. So, when you call upper() on the string \"Hello, World!\", it converts all the letters to uppercase. my_string = \"Hello, World!\" print(my_string.upper()) # Output: \"HELLO, WORLD!\""
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What will be the output of the following Python function? any([2>8, 4>2, 1>2])
    options:
      - Error
      - "True"
      - "False"
      - 4>2
    answer: 1
    explanation: "The any() function in Python returns True if at least one element of the iterable is true, otherwise it returns False . In the provided code, the list [2>8, 4>2, 1>2] contains three boolean expressions: 2>8 evaluates to False . 4>2 evaluates to True . 1>2 evaluates to False . Since at least one of the expressions (4>2) is true, the any() function returns True ."
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: "The function divmod(a,b), where both 'a' and 'b' are integers is evaluated as:"
    options:
      - (a%b, a//b)
      - (a//b, a%b)
      - (a//b, a*b)
      - (a/b, a%b)
    answer: 1
    explanation: "The correct answer is Option B: (a//b, a%b) . The divmod() function in Python returns a tuple containing the quotient and remainder when dividing 'a' by 'b', where both 'a' and 'b' are integers. So, when evaluated, it returns (a//b, a%b), where 'a//b' represents the quotient and 'a%b' represents the remainder."
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What does the built-in function hex() do in Python?
    options:
      - Converts an integer to a hexadecimal string
      - Converts a string to lowercase
      - Returns the square of a number
      - Returns the absolute value of a number
    answer: 0
    explanation: "The correct answer is Option A: Converts an integer to a hexadecimal string . The hex() function in Python is used to convert an integer to a lowercase hexadecimal string. For example: print(hex(15)) # Output: '0xf' print(hex(255)) # Output: '0xff'"
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: "What is the output of the following code: my_list = [True, False, True] print(any(my_list))"
    options:
      - "TRUE"
      - "[True, False, True]"
      - "FALSE"
      - Error
    answer: 0
    explanation: The any() function in Python returns True if at least one element of the iterable is true, otherwise it returns False . In the provided code, the list [True, False, True] contains at least one True value, so the any() function returns True .
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What will be the output of the following Python expression? round(4.5676,2)?
    options:
      - "4.5"
      - "4.6"
      - "4.57"
      - "4.56"
    answer: 2
    explanation: "The correct answer is Option C: 4.57 . The round() function in Python is used to round a floating-point number to a specified number of decimal places. When you call round(4.5676, 2) , it rounds the number 4.5676 to 2 decimal places, resulting in 4.57."
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What will be the output of the following Python function? float(‘-infinity’) float(‘inf’)
    options:
      - "-inf inf"
      - "-infinity inf"
      - Error Error
      - Error Junk value
    answer: 0
    explanation: The float() function in Python is used to convert a string or a number to a floating-point number. When you pass the string 'inf' to the float() function, it returns positive infinity. When you pass the string '-infinity' to the float() function, it returns negative infinity.
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What will be the output of the following Python function? all(3,0,4.2)
    options:
      - "True"
      - "False"
      - Error
      - "0"
    answer: 2
    explanation: "The correct answer is Option C: Error . The all() function in Python expects a single iterable as its argument, but in the provided code, it is given multiple arguments (3, 0, and 4.2) instead of a single iterable. This will raise a TypeError."
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: What is the output of the function complex()?
    options:
      - 0j
      - 0+0j
      - "0"
      - Error
    answer: 1
    explanation: "The correct answer is Option B: 0+0j . The complex() function in Python is used to create a complex number. When no arguments are passed, it returns 0 as the real and imaginary parts, resulting in the complex number 0+0j."
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: What will be the output of the following Python function? oct(7) oct(‘7’)
    options:
      - Error 07
      - 07 0o7
      - 0o7 Error
      - None of the above
    answer: 2
    explanation: The oct() function in Python converts an integer to an octal string. When passed an integer argument, it returns the octal representation prefixed with '0o'. However, when passed a string argument, it tries to convert the string to an integer first, and if it fails, it raises a ValueError. Therefore, the first call to oct(7) returns '0o7', while the second call to oct('7') raises an error.
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: "What is the output of the following code: my_list = [1, 2, 3, 4] print(sum(my_list))"
    options:
      - "10"
      - "[1, 2, 3, 4]"
      - "24"
      - "6"
    answer: 0
    explanation: "The correct answer is Option A: 10 . The sum() function in Python is used to sum up all the values in an iterable, such as a list. When you pass the list [1, 2, 3, 4] to the sum() function, it adds up all the elements in the list and returns the total sum, which is 10."
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: What will be the output of the following Python functions? chr(‘97’) chr(97)
    options:
      - a Error
      - ‘a’ a
      - Error a
      - Error Error
    answer: 2
    explanation: For the first call chr('97'), the function chr() expects an integer representing a Unicode code point, not a string. When it receives the string '97', it attempts to convert it to an integer, but it raises a TypeError because it cannot directly convert a string to an integer in this context. Hence, it results in an error. For the second call chr(97), the argument passed is an integer, which represents the Unicode code point for the character 'a'. Therefore, this call to chr() returns the character 'a'. So, the output is "Error" for the first call and "a" for the second call.
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: "What is the output of the following code: my_list = [5, 8, 2, 6] print(max(my_list))"
    options:
      - "8"
      - "[5, 8, 2, 6]"
      - "21"
      - "6"
    answer: 0
    explanation: "The correct answer is Option A: 8 . The max() function in Python is used to find the maximum value among the elements of an iterable, such as a list. When you pass the list [5, 8, 2, 6] to the max() function, it returns the maximum value from the list, which is 8."
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: "What will be the output of the following code: my_string = \" Hello, World! \" print(my_string.strip())"
    options:
      - "\"Hello, World!\""
      - "\" Hello, World! \""
      - "\"Hello\""
      - "\"Hello, World! \""
    answer: 0
    explanation: "The correct answer is Option A: \"Hello, World!\" . The strip() function in Python is used to remove leading and trailing whitespace (spaces, tabs, and newline characters) from a string. When you call strip() on the string \" Hello, World! \", it removes the leading and trailing spaces and returns the modified string \"Hello, World!\"."
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: "What will be the output of the following code: my_string = \"Hello, World!\" print(my_string.lower())"
    options:
      - "\"hello, world!\""
      - "\"hello\""
    answer: 0
    explanation: "The correct answer is Option A: \"hello, world!\" . The lower() function in Python is used to convert all characters in a string to lowercase. When you call lower() on the string \"Hello, World!\", it converts all uppercase letters to lowercase, resulting in the string \"hello, world!\"."
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: What will be the output of the following Python function? complex(1+2j)
    options:
      - Error
      - "1"
      - 2j
      - 1+2j
    answer: 3
    explanation: "The correct answer is Option D: 1+2j . The complex() function in Python is used to create a complex number from real and imaginary parts. When you pass the expression 1+2j to the complex() function, it returns the complex number with real part 1 and imaginary part 2j."
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Which built-in function is used to convert a value to a string?
    options:
      - str()
      - string()
      - to_str()
      - convert_string()
    answer: 0
    explanation: "The correct answer is Option A: str() . The str() function in Python is used to convert a value to a string. It can convert various types of values, such as integers, floats, booleans, and even other data structures like lists and dictionaries, into their string representations. For example: x = 10 y = 3.14 z = True str_x = str(x) str_y = str(y) str_z = str(z) print(str_x) # Output: '10' print(str_y) # Output: '3.14' print(str_z) # Output: 'True'"
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: What does the built-in function type() do in Python?
    options:
      - Returns the type of an object
      - Converts a string to lowercase
      - Returns the square of a number
      - Returns the absolute value of a number
    answer: 0
    explanation: "The correct answer is Option A: Returns the type of an object . The type() function in Python is used to get the type of an object. It returns the type of the object passed as an argument. This can be useful for checking the type of variables or objects during runtime. For example: x = 10 y = \"Hello\" z = [1, 2, 3] print(type(x)) # Output: print(type(y)) # Output: print(type(z)) # Output:"
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: What will be the output of the following Python function? float(' -12345\n') (Note that the number of blank spaces before the number is 5)
    options:
      - "-12345.0 (5 blank spaces before the number)"
      - "-12345.0"
      - Error
      - "-12345.000000000.... (infinite decimal places)"
    answer: 1
    explanation: "The correct answer is Option B: -12345.0 . The float() function in Python is used to convert a string or a number to a floating-point number. When you pass the string ' -12345\\n' (which includes leading and trailing whitespace characters) to the float() function, it strips the leading and trailing whitespace and converts the remaining characters to a floating-point number. In this case, it converts '-12345' to a float, resulting in -12345.0."
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: Which of the following functions does not throw an error?
    options:
      - ord()
      - ord(' ')
      - ord(")
      - ord("")
    answer: 1
    explanation: "The correct answer is Option B: ord(' ') . The ord() function in Python is used to get the Unicode code point of a character. When you pass a single character as an argument to the ord() function, it returns the Unicode code point of that character. In this case, passing a space character (' ') to the ord() function will not throw an error, as it represents a valid Unicode character. It returns the Unicode code point for the space character, which is 32. The other options will result in errors: Option A: ord() without any argument throws a TypeError because it requires exactly one argument. Option C: ord(\") throws a TypeError because it's missing the character argument. Option D: ord(\"\") throws a TypeError because it's passing an empty string as an argument, which is invalid."
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: "What is the output of the following code: my_list = [3, 1, 4, 1] print(sorted(my_list))"
    options:
      - "[1, 1, 3, 4]"
      - "[3, 1, 4, 1]"
      - "[4, 3, 1, 1]"
      - "[1, 3, 1, 4]"
    answer: 0
    explanation: "The correct answer is Option A: [1, 1, 3, 4] . The sorted() function in Python is used to sort the elements of an iterable in ascending order. When you pass the list [3, 1, 4, 1] to the sorted() function, it sorts the elements and returns a new list with the elements sorted in ascending order. Therefore, the output will be [1, 1, 3, 4]."
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: Which of the following functions does not necessarily accept only iterables as arguments?
    options:
      - enumerate()
      - all()
      - chr()
      - max()
    answer: 2
    explanation: "The correct answer is Option C: chr() . The chr() function in Python converts a Unicode code point into its corresponding character. While it typically takes an integer representing a Unicode code point as its argument, it does not necessarily accept only iterables. Instead, it can accept a wide range of integer values representing Unicode code points as arguments. The other options: Option A: enumerate() typically accepts iterables as arguments, as it is used to iterate over them while providing an index. Option B: all() typically accepts iterables as arguments, as it checks if all elements in the iterable evaluate to True. Option D: max() typically accepts iterables as arguments, as it returns the maximum element from the iterable."
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: "What is the output of the following code: my_list = [1, 2, 3] print(list(reversed(my_list)))"
    options:
      - "[3, 2, 1]"
      - "[1, 2, 3]"
      - "['3', '2', '1']"
      - "[1, 3, 2]"
    answer: 0
    explanation: "The correct answer is Option A: [3, 2, 1] . The reversed() function in Python is used to reverse the elements of an iterable. When you pass the list [1, 2, 3] to the reversed() function and then convert the result to a list using list(), it returns a new list with the elements reversed, resulting in [3, 2, 1]."
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: What will be the output of the following Python functions? float('1e-003') float('2e+003')
    options:
      - 3.00 300
      - 0.001 2000.0
      - 0.001 200
      - Error 2003
    answer: 1
    explanation: "Option B: 0.001 2000.0 When the strings '1e-003' and '2e+003' are passed to the float() function, they are interpreted as scientific notation representing floating-point numbers. '1e-003' represents 1×10 −3 which is equal to 0.001. '2e+003' represents 2×10 3 which is equal to 2000.0. Therefore, the output will be 0.001 and 2000.0."
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: What will be the output of the following Python function? ord(65) ord(‘A’)
    options:
      - A 65
      - Error 65
      - A Error
      - Error Error
    answer: 1
    explanation: "Option B: Error 65 When the argument '65' is passed to the ord() function, it's treated as an integer and not a valid Unicode character. Therefore, the function will not raise an error. Instead, it will return the Unicode code point of the character corresponding to the integer 65, which is 'A'. Hence, the correct answer is indeed Option B: Error 65."
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: What does the built-in function chr() do in Python?
    options:
      - Returns a string representing a character whose Unicode code point is the integer
      - Converts a string to lowercase
      - Returns the square of a number
      - Returns the absolute value of a number
    answer: 0
    explanation: "The correct answer is Option A: Returns a string representing a character whose Unicode code point is the integer . The chr() function in Python is used to return a string representing a character whose Unicode code point is the integer passed as an argument. For example, chr(65) returns the string 'A' because the Unicode code point of the character 'A' is 65. Therefore, the function converts integer Unicode code points to their corresponding characters."
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: What will be the output of the following Python function? list(enumerate([2, 3]))
    options:
      - Error
      - "[(1, 2), (2, 3)]"
      - "[(0, 2), (1, 3)]"
      - "[(2, 3)]"
    answer: 2
    explanation: "The correct answer is Option C: [(0, 2), (1, 3)] . The enumerate() function in Python is used to add a counter to an iterable and return it as an enumerate object. When the enumerate object is converted to a list using the list() function, it returns a list of tuples where each tuple contains the index and the corresponding element of the original iterable. In this case, the input list is [2,3][2,3], and its elements are indexed starting from 0. Therefore, the output will be [(0,2),(1,3)][(0,2),(1,3)]."
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: Which built-in function is used to calculate the length of a sequence like a list or string?
    options:
      - len()
      - length()
      - count()
      - size()
    answer: 0
    explanation: "The correct answer is Option A: len() . The len() function in Python is used to calculate the length of a sequence, such as a list or a string. It returns the number of items in the sequence. For example, len([1, 2, 3]) will return 3, as there are three elements in the list. Similarly, len(\"hello\") will return 5, as there are five characters in the string \"hello\"."
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: What will be the output of the following Python function? all([2,4,0,6])
    options:
      - Error
      - "True"
      - "False"
      - "0"
    answer: 2
    explanation: "The correct answer is Option C: False . The all() function in Python returns True if all elements of the iterable are true, and False otherwise. In this case, the iterable is [2,4,0,6][2,4,0,6]. Since the element 0 evaluates to False in a Boolean context, the function will return False. Therefore, the output of the function call all([2, 4, 0, 6]) will be False."
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: What will be the output of the following Python functions? x=3 eval('x^2')
    options:
      - Error
      - "1"
      - "9"
      - "6"
    answer: 1
    explanation: The eval() function in Python evaluates the specified expression, which is a string, and returns the result. In this case, the expression 'x^2' is evaluated. However, the ^ operator in Python represents bitwise XOR, not exponentiation. So, 'x^2' evaluates to 3⊕2=6 in bitwise XOR. Therefore, the output of the function call eval('x^2') will be 6.
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: What is the purpose of the built-in function ord()?
    options:
      - Returns the Unicode code point of a character
      - Converts a number to a string
      - Returns the absolute value of a number
      - Returns the sum of two numbers
    answer: 0
    explanation: "The correct answer is Option A: Returns the Unicode code point of a character . The ord() function in Python is used to return the Unicode code point of a character. Unicode is a standard for encoding characters and assigning a unique number to each character. When you pass a character to the ord() function, it returns the Unicode code point of that character, which is essentially an integer representing the character in Unicode."
    keyConcept: Python Built In Functions
    testedIn:
      - FPSC
      - PPSC
---


