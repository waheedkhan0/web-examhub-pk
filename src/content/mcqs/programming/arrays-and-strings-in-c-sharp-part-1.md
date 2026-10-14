---
title: Arrays And Strings In C Sharp — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Arrays And Strings In C Sharp — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: arrays-and-strings-in-c-sharp-part-1
topicName: Arrays And Strings In C Sharp — Part 1
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
    question: Which of these methods of class String is used to extract all the characters from a String object?
    options:
      - CHARAT()
      - Remove()
      - Replace()
      - ToCharArray()
    answer: 3
    explanation: "The question asks which method of the String class in C# is used to extract all characters from a string. The correct method is ToCharArray() , which converts the entire string into an array of characters. Syntax: char[] ToCharArray() This method returns a character array containing all the characters of the string in the same sequence. Example: string myString = \"Hello\"; char[] chars = myString.ToCharArray(); After execution, chars will contain: ['H', 'e', 'l', 'l', 'o']. Option A: CHARAT() – Invalid in C#. It belongs to Java and has incorrect casing. Option B: Remove() – Used to delete a portion of a string, not to extract characters. Option C: charAt() – Also a Java method, not part of C#. Option D: Replace() – Used to replace characters or substrings, not to extract them. Therefore, the correct and updated answer is Option E: ToCharArray() ."
    keyConcept: Arrays And Strings In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: What is the correct way to declare a string array in C#?
    options:
      - string[] colors
      - array colors
      - string colors[]
      - colors[] = string
    answer: 0
    explanation: string[] colors is the correct answer to “What is the correct way to declare a string array in C#”. This question is standard in competitive examination syllabi for Arrays And Strings In C Sharp.
    keyConcept: Arrays And Strings In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: How do you access the first element of an array named 'numbers' in C#?
    options:
      - first(numbers)
      - numbers.first
      - numbers(1)
      - numbers[0]
    answer: 3
    explanation: numbers[0] is the correct answer to “How do you access the first element of an array named 'numbers' in C#”. This question is standard in competitive examination syllabi for Arrays And Strings In C Sharp.
    keyConcept: Arrays And Strings In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What is the correct way to initialize an array of integers with values {1, 2, 3} in C#?
    options:
      - int[] numbers = new int[] {1, 2, 3}
      - int numbers[] = {1, 2, 3}
      - int[] numbers = {1, 2, 3}
      - numbers[] = {1, 2, 3}
    answer: 2
    explanation: int[] numbers = {1, 2, 3} is the correct answer to “What is the correct way to initialize an array of integers with values {1, 2, 3} in C#”. This question is standard in competitive examination syllabi for Arrays And Strings In C Sharp.
    keyConcept: Arrays And Strings In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: Which of the following statements is true regarding arrays in C#?
    options:
      - Arrays in C# can dynamically resize
      - The length of an array cannot be changed
      - Arrays in C# can only store primitive types
      - None of the above
    answer: 1
    explanation: The length of an array cannot be changed is the correct answer to “Which of the following statements is true regarding arrays in C#”. This question is standard in competitive examination syllabi for Arrays And Strings In C Sharp.
    keyConcept: Arrays And Strings In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: How do you find the number of elements in an array named 'values' in C#?
    options:
      - Length(values)
      - values.Count
      - values.Length
      - values.Size
    answer: 2
    explanation: values.Length is the correct answer to “How do you find the number of elements in an array named 'values' in C#”. This question is standard in competitive examination syllabi for Arrays And Strings In C Sharp.
    keyConcept: Arrays And Strings In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What is the correct syntax to declare and initialize a 2D array in C# with dimensions 3x3?
    options:
      - int[3,3] matrix
      - int[3][3] matrix
      - int matrix[][] = new int[3][3]
      - int[,] matrix = new int[3,3]
    answer: 3
    explanation: int[,] matrix = new int[3,3] is the correct answer to “What is the correct syntax to declare and initialize a 2D array in C# with dimensions 3x3”. This question is standard in competitive examination syllabi for Arrays And Strings In C Sharp.
    keyConcept: Arrays And Strings In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: Which method in C# is used to sort the elements of an array in ascending order?
    options:
      - Array.Sort()
      - Array.Reverse()
      - Array.Find()
      - Array.IndexOf()
    answer: 0
    explanation: Array.Sort() is the correct answer to “Which method in C# is used to sort the elements of an array in ascending order”. This question is standard in competitive examination syllabi for Arrays And Strings In C Sharp.
    keyConcept: Arrays And Strings In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What does the 'Length' property of an array in C# return?
    options:
      - The number of characters in the array
      - The number of dimensions in the array
      - The size of the array in bytes
      - The total number of elements in the array
    answer: 3
    explanation: The total number of elements in the array is the correct answer to “What does the 'Length' property of an array in C# return”. This question is standard in competitive examination syllabi for Arrays And Strings In C Sharp.
    keyConcept: Arrays And Strings In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What is the correct way to declare an array of strings with 5 elements in C#?
    options:
      - string[5] names
      - string[5] names = new string[]
      - string[] names = new string[5]
      - names[] = new string[5]
    answer: 2
    explanation: string[] names = new string[5] is the correct answer to “What is the correct way to declare an array of strings with 5 elements in C#”. This question is standard in competitive examination syllabi for Arrays And Strings In C Sharp.
    keyConcept: Arrays And Strings In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: How do you access the last element of an array named 'values' in C#?
    options:
      - values[length(values)]
      - values[values.Length - 1]
      - Last(values)
      - None of the above
    answer: 1
    explanation: values[values.Length - 1] is the correct answer to “How do you access the last element of an array named 'values' in C#”. This question is standard in competitive examination syllabi for Arrays And Strings In C Sharp.
    keyConcept: Arrays And Strings In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: Which of the following methods is used to concatenate strings in C#?
    options:
      - Merge()
      - Join()
      - Concat()
      - Add()
    answer: 2
    explanation: Concat() is the correct answer to “Which of the following methods is used to concatenate strings in C#”. This question is standard in competitive examination syllabi for Arrays And Strings In C Sharp.
    keyConcept: Arrays And Strings In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: "What is the result of the following code in C#: string[] fruits = {\"Apple\", \"Banana\", \"Orange\"}; Console.WriteLine(fruits[1]);"
    options:
      - Apple
      - Orange
      - Error
      - Banana
    answer: 3
    explanation: "Banana is the correct answer to “What is the result of the following code in C#: string[] fruits = {\"Apple\", \"Banana\", \"Orange\"}; Console.WriteLine(fruits[1]);”. This question is standard in competitive examination syllabi for Arrays And Strings In C Sharp."
    keyConcept: Arrays And Strings In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: Which method in C# is used to find the index of a specific element in an array?
    options:
      - Array.FindIndex()
      - Array.IndexOf()
      - Array.Search()
      - Array.Position()
    answer: 1
    explanation: Array.IndexOf() is the correct answer to “Which method in C# is used to find the index of a specific element in an array”. This question is standard in competitive examination syllabi for Arrays And Strings In C Sharp.
    keyConcept: Arrays And Strings In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What is the correct way to declare and initialize a jagged array in C#?
    options:
      - int[][] jaggedArray = new int[3][]
      - int[][] jaggedArray = new int[][]
      - int[][] jaggedArray = new int[3][3]
      - jaggedArray[][] = new int[3][]
    answer: 0
    explanation: int[][] jaggedArray = new int[3][] is the correct answer to “What is the correct way to declare and initialize a jagged array in C#”. This question is standard in competitive examination syllabi for Arrays And Strings In C Sharp.
    keyConcept: Arrays And Strings In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: Which of the following statements is true regarding strings in C#?
    options:
      - Strings are not supported in C#
      - Strings can be resized dynamically
      - Strings can be modified directly
      - Strings are immutable
    answer: 3
    explanation: Strings are immutable is the correct answer to “Which of the following statements is true regarding strings in C#”. This question is standard in competitive examination syllabi for Arrays And Strings In C Sharp.
    keyConcept: Arrays And Strings In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: In C#, which keyword is used to declare an array?
    options:
      - array
      - int[]
      - var[]
    answer: 1
    explanation: int[] is the correct answer to “In C#, which keyword is used to declare an array”. This question is standard in competitive examination syllabi for Arrays And Strings In C Sharp.
    keyConcept: Arrays And Strings In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: What is the correct syntax to initialize an array in C#?
    options:
      - int numbers[] = {1, 2, 3, 4, 5}
      - int[5] numbers
      - int[] numbers = new int[5]
      - int[5] numbers = {1, 2, 3, 4, 5}
    answer: 2
    explanation: int[] numbers = new int[5] is the correct answer to “What is the correct syntax to initialize an array in C#”. This question is standard in competitive examination syllabi for Arrays And Strings In C Sharp.
    keyConcept: Arrays And Strings In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: What is the index of the first element in an array in C#?
    options:
      - "1"
      - "0"
      - "-1"
      - First
    answer: 1
    explanation: 0 is the correct answer to “What is the index of the first element in an array in C#”. This question is standard in competitive examination syllabi for Arrays And Strings In C Sharp.
    keyConcept: Arrays And Strings In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: Which method is used to find the length of an array in C#?
    options:
      - Length()
      - Size()
      - Count()
      - Length
    answer: 3
    explanation: Length is the correct answer to “Which method is used to find the length of an array in C#”. This question is standard in competitive examination syllabi for Arrays And Strings In C Sharp.
    keyConcept: Arrays And Strings In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: In C#, what is the default value of an uninitialized element in an integer array?
    options:
      - "-1"
      - "0"
      - "null"
      - None of the above
    answer: 1
    explanation: 0 is the correct answer to “In C#, what is the default value of an uninitialized element in an integer array”. This question is standard in competitive examination syllabi for Arrays And Strings In C Sharp.
    keyConcept: Arrays And Strings In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What is the correct way to access the third element in an array named numbers in C#?
    options:
      - numbers[3]
      - numbers(3)
      - numbers(2)
      - numbers[2]
    answer: 3
    explanation: numbers[2] is the correct answer to “What is the correct way to access the third element in an array named numbers in C#”. This question is standard in competitive examination syllabi for Arrays And Strings In C Sharp.
    keyConcept: Arrays And Strings In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: What is the correct way to declare a string array named colors with three elements in C#?
    options:
      - colors[3] = {"Red", "Green", "Blue"}
      - string[] colors = new string[3]
      - string[] colors = {"Red", "Green", "Blue"}
      - colors = new string[] {"Red", "Green", "Blue"}
    answer: 2
    explanation: string[] colors = {"Red", "Green", "Blue"} is the correct answer to “What is the correct way to declare a string array named colors with three elements in C#”. This question is standard in competitive examination syllabi for Arrays And Strings In C Sharp.
    keyConcept: Arrays And Strings In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: In C#, which method is used to copy elements from one array to another?
    options:
      - Copy()
      - Array.Clone()
      - Clone()
      - Array.Copy()
    answer: 3
    explanation: Array.Copy() is the correct answer to “In C#, which method is used to copy elements from one array to another”. This question is standard in competitive examination syllabi for Arrays And Strings In C Sharp.
    keyConcept: Arrays And Strings In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: What is the result of the expression string[] names = {"John", "Alice", "Bob"}; in C#?
    options:
      - A compilation error
      - Declares an array with three elements
      - Initializes an empty array
      - Initializes an array with three elements
    answer: 1
    explanation: Declares an array with three elements is the correct answer to “What is the result of the expression string[] names = {"John", "Alice", "Bob"}; in C#”. This question is standard in competitive examination syllabi for Arrays And Strings In C Sharp.
    keyConcept: Arrays And Strings In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: What is the correct way to access the length of an array named numbers in C#?
    options:
      - numbers.Length
      - Length(numbers)
      - numbers.size()
      - Length(numbers[])
    answer: 0
    explanation: numbers.Length is the correct answer to “What is the correct way to access the length of an array named numbers in C#”. This question is standard in competitive examination syllabi for Arrays And Strings In C Sharp.
    keyConcept: Arrays And Strings In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: What is the correct way to declare a jagged array in C#?
    options:
      - int[][][] jaggedArray
      - int[,] jaggedArray
      - jaggedArray[]
      - int[][] jaggedArray
    answer: 3
    explanation: int[][] jaggedArray is the correct answer to “What is the correct way to declare a jagged array in C#”. This question is standard in competitive examination syllabi for Arrays And Strings In C Sharp.
    keyConcept: Arrays And Strings In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: In C#, which method is used to sort the elements of an array?
    options:
      - Sort()
      - Array.Order()
      - Array.Sort()
      - Order()
    answer: 2
    explanation: Array.Sort() is the correct answer to “In C#, which method is used to sort the elements of an array”. This question is standard in competitive examination syllabi for Arrays And Strings In C Sharp.
    keyConcept: Arrays And Strings In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: What is the correct syntax to declare a multidimensional array in C#?
    options:
      - int[2,2] matrix
      - int[,] matrix
      - int[2][2] matrix
      - None of the above
    answer: 1
    explanation: int[,] matrix is the correct answer to “What is the correct syntax to declare a multidimensional array in C#”. This question is standard in competitive examination syllabi for Arrays And Strings In C Sharp.
    keyConcept: Arrays And Strings In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: What does the Split() method do when applied to a string in C#?
    options:
      - Converts the string to lowercase
      - Converts the string to uppercase
      - Splits the string into an array of substrings based on a delimiter
      - Concatenates the string with another string
    answer: 2
    explanation: Splits the string into an array of substrings based on a delimiter is the correct answer to “What does the Split() method do when applied to a string in C#”. This question is standard in competitive examination syllabi for Arrays And Strings In C Sharp.
    keyConcept: Arrays And Strings In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: In C#, which method is used to convert an array to a string representation?
    options:
      - ToString()
      - Convert()
      - Join()
      - Array.ToString()
    answer: 2
    explanation: Join() is the correct answer to “In C#, which method is used to convert an array to a string representation”. This question is standard in competitive examination syllabi for Arrays And Strings In C Sharp.
    keyConcept: Arrays And Strings In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: What is the correct way to access the last element in an array named numbers in C#?
    options:
      - numbers[numbers.Length]
      - numbers[numbers.Length + 1]
      - numbers.Last()
      - numbers[numbers.Length - 1]
    answer: 3
    explanation: numbers[numbers.Length - 1] is the correct answer to “What is the correct way to access the last element in an array named numbers in C#”. This question is standard in competitive examination syllabi for Arrays And Strings In C Sharp.
    keyConcept: Arrays And Strings In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: Which method is used to concatenate two or more strings in C#?
    options:
      - Concat()
      - Merge()
      - Append()
      - Join()
    answer: 0
    explanation: Concat() is the correct answer to “Which method is used to concatenate two or more strings in C#”. This question is standard in competitive examination syllabi for Arrays And Strings In C Sharp.
    keyConcept: Arrays And Strings In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: What is the correct syntax to declare a 2D array with 3 rows and 4 columns in C#?
    options:
      - int[][] matrix = new int[3][4]
      - int matrix[3, 4]
      - int[3][4] matrix
      - int[,] matrix = new int[3, 4]
    answer: 3
    explanation: int[,] matrix = new int[3, 4] is the correct answer to “What is the correct syntax to declare a 2D array with 3 rows and 4 columns in C#”. This question is standard in competitive examination syllabi for Arrays And Strings In C Sharp.
    keyConcept: Arrays And Strings In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: What is the result of the expression string[] fruits = {"Apple", "Banana", "Orange"}; in C#?
    options:
      - A compilation error
      - Initializes an empty array
      - Declares an array with three elements
      - Initializes an array with three elements
    answer: 2
    explanation: Declares an array with three elements is the correct answer to “What is the result of the expression string[] fruits = {"Apple", "Banana", "Orange"}; in C#”. This question is standard in competitive examination syllabi for Arrays And Strings In C Sharp.
    keyConcept: Arrays And Strings In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: In C#, which method is used to find the index of the first occurrence of a specified value in an array?
    options:
      - Search()
      - IndexOf()
      - Locate()
      - None of the above
    answer: 1
    explanation: IndexOf() is the correct answer to “In C#, which method is used to find the index of the first occurrence of a specified value in an array”. This question is standard in competitive examination syllabi for Arrays And Strings In C Sharp.
    keyConcept: Arrays And Strings In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: What is the correct way to declare and initialize a string array with three elements in C#?
    options:
      - colors = new string[3] {"Red", "Green", "Blue"}
      - string[] colors = {"Red", "Green", "Blue"}
      - string[] colors = new string[] {"Red", "Green", "Blue"}
      - string colors[] = {"Red", "Green", "Blue"}
    answer: 2
    explanation: string[] colors = new string[] {"Red", "Green", "Blue"} is the correct answer to “What is the correct way to declare and initialize a string array with three elements in C#”. This question is standard in competitive examination syllabi for Arrays And Strings In C Sharp.
    keyConcept: Arrays And Strings In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: In C#, what is the correct way to access the length of a string named text?
    options:
      - text.Length()
      - text.Size()
      - text.Count()
      - text.Length
    answer: 3
    explanation: text.Length is the correct answer to “In C#, what is the correct way to access the length of a string named text”. This question is standard in competitive examination syllabi for Arrays And Strings In C Sharp.
    keyConcept: Arrays And Strings In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: What does the IndexOf() method return if the specified value is not found in an array in C#?
    options:
      - "0"
      - "Null"
      - "FALSE"
      - "-1"
    answer: 3
    explanation: "-1 is the correct answer to “What does the IndexOf() method return if the specified value is not found in an array in C#”. This question is standard in competitive examination syllabi for Arrays And Strings In C Sharp."
    keyConcept: Arrays And Strings In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: What is the purpose of the Reverse() method when applied to an array in C#?
    options:
      - Sorts the elements of the array
      - Throws an exception
      - Reverses the order of elements in the array
      - Returns a copy of the array in reverse order
    answer: 2
    explanation: Reverses the order of elements in the array is the correct answer to “What is the purpose of the Reverse() method when applied to an array in C#”. This question is standard in competitive examination syllabi for Arrays And Strings In C Sharp.
    keyConcept: Arrays And Strings In C Sharp
    testedIn:
      - FPSC
      - PPSC
---


