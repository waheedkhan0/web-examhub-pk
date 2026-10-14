---
title: Array — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Array — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: array-part-2
topicName: Array — Part 2
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
    question: What is the purpose of the Arrays.fill() method in Java?
    options:
      - To fill an array with a specified value.
      - To find the number of elements in an array.
      - To copy elements from one array to another.
      - To sort the elements of an array.
    answer: 0
    explanation: To fill an array with a specified value. is the correct answer to “What is the purpose of the Arrays.fill() method in Java”. This question is standard in competitive examination syllabi for Array.
    keyConcept: Array
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: In Java, what is the purpose of the Arrays.equals() method?
    options:
      - To check if two arrays are equal.
      - To concatenate two arrays.
      - To find the common elements between two arrays.
      - To remove duplicate elements from an array.
    answer: 0
    explanation: To check if two arrays are equal. is the correct answer to “In Java, what is the purpose of the Arrays.equals() method”. This question is standard in competitive examination syllabi for Array.
    keyConcept: Array
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: "Determine output: public class Test{ public static void main(String[] args){ int[] x = {1, 2, 3, 4}; int[] y = x; x = new int[2]; for(int i = 0; i < x.length; i++) System.out.print(y[i] + \" \"); } }"
    options:
      - 1 2 3 4
      - 0 0 0 0
      - 1 2
      - 0 0
      - None of these
    answer: 2
    explanation: "1 2 is the correct answer to “Determine output: public class Test{ public static void main(String[] args){ int[] x = {1, 2, 3, 4}; int[] y = x; x = new int[2]; for(int i = 0; i < x.length; i++) System.out.print(y[i] + \" \"); } }”. This question is standard in competitive examination syllabi for Array."
    keyConcept: Array
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: Analyze the following code and choose the correct answer. int[] arr = new int[5]; arr = new int[6];
    options:
      - The code has compile errors because the variable arr cannot be changed once it is assigned.
      - The code has runtime errors because the variable arr cannot be changed once it is assigned.
      - The code can compile and run fine. The second line assigns a new array to arr.
      - The code has compile errors because we cannot assign a different size array to arr.
    answer: 2
    explanation: The code can compile and run fine. The second line assigns a new array to arr. is the correct answer to “Analyze the following code and choose the correct answer. int[] arr = new int[5]; arr = new int[6];”. This question is standard in competitive examination syllabi for Array.
    keyConcept: Array
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: When you pass an array to a method, the method receives ________ .
    options:
      - A copy of the array.
      - A copy of the first element.
      - The reference of the array.
      - The length of the array.
    answer: 2
    explanation: The reference of the array. is the correct answer to “When you pass an array to a method, the method receives ________ .”. This question is standard in competitive examination syllabi for Array.
    keyConcept: Array
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: Which of these operators is used to allocate memory to array variable in Java?
    options:
      - malloc
      - alloc
      - new
      - new malloc
    answer: 2
    explanation: new is the correct answer to “Which of these operators is used to allocate memory to array variable in Java”. This question is standard in competitive examination syllabi for Array.
    keyConcept: Array
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: Which of these is an incorrect array declaration?
    options:
      - int arr[] = new int[5]
      - int [] arr = new int[5]
      - int arr[] = new int arr[5]
      - int arr[] = int [5] new
    answer: 3
    explanation: int arr[] = int [5] new is the correct answer to “Which of these is an incorrect array declaration”. This question is standard in competitive examination syllabi for Array.
    keyConcept: Array
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What will be the output of the following Java code? int arr[] = new int [5]; System.out.print(arr);
    options:
      - "0"
      - value stored in arr[0]
      - "00000"
      - Class name@ hashcode in hexadecimal form
    answer: 3
    explanation: Class name@ hashcode in hexadecimal form is the correct answer to “What will be the output of the following Java code? int arr[] = new int [5]; System.out.print(arr);”. This question is standard in competitive examination syllabi for Array.
    keyConcept: Array
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What will be the output of the following Java code? class array_output { public static void main(String args[]) { int array_variable [] = new int[10]; for (int i = 0; i < 10; ++i) { array_variable[i] = i; System.out.print(array_variable[i] + " "); i++; } } }
    options:
      - 0 2 4 6 8
      - 1 3 5 7 9
      - 0 1 2 3 4 5 6 7 8 9
      - 1 2 3 4 5 6 7 8 9 10
    answer: 0
    explanation: 0 2 4 6 8 is the correct answer to “What will be the output of the following Java code? class array_output { public static void main(String args[]) { int array_variable [] = new int[10]; for (int i = 0; i < 10; ++i) { array_variable[i] = i; System.out.print(array_variable[i] + " "); i++; } } }”. This question is standard in competitive examination syllabi for Array.
    keyConcept: Array
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What will be the output of the following Java code? class evaluate { public static void main(String args[]) { int arr[] = new int[] {0 , 1, 2, 3, 4, 5, 6, 7, 8, 9}; int n = 6; n = arr[arr[n] / 2]; System.out.println(arr[n] / 2); } }
    options:
      - "3"
      - "0"
      - "6"
      - "1"
    answer: 3
    explanation: 1 is the correct answer to “What will be the output of the following Java code? class evaluate { public static void main(String args[]) { int arr[] = new int[] {0 , 1, 2, 3, 4, 5, 6, 7, 8, 9}; int n = 6; n = arr[arr[n] / 2]; System.out.println(arr[n] / 2); } }”. This question is standard in competitive examination syllabi for Array.
    keyConcept: Array
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What will be the output of the following Java code? class array_output { public static void main(String args[]) { char array_variable [] = new char[10]; for (int i = 0; i < 10; ++i) { array_variable[i] = 'i'; System.out.print(array_variable[i] + ""); } } }
    options:
      - 1 2 3 4 5 6 7 8 9 10
      - 0 1 2 3 4 5 6 7 8 9 10
      - i j k l m n o p q r
      - i i i i i i i i i i
    answer: 3
    explanation: i i i i i i i i i i is the correct answer to “What will be the output of the following Java code? class array_output { public static void main(String args[]) { char array_variable [] = new char[10]; for (int i = 0; i < 10; ++i) { array_variable[i] = 'i'; System.out.print(array_variable[i] + ""); } } }”. This question is standard in competitive examination syllabi for Array.
    keyConcept: Array
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: What will be the output of the following Java code? class multidimention_array { public static void main(String args[]) { int arr[][] = new int[3][]; arr[0] = new int[1]; arr[1] = new int[2]; arr[2] = new int[3]; int sum = 0; for (int i = 0; i < 3; ++i) for (int j = 0; j < i + 1; ++j) arr[i][j] = j + 1; for (int i = 0; i < 3; ++i) for (int j = 0; j < i + 1; ++j) sum + = arr[i][j]; System.out.print(sum); } }
    options:
      - "11"
      - "10"
      - "13"
      - "14"
    answer: 1
    explanation: 10 is the correct answer to “What will be the output of the following Java code? class multidimention_array { public static void main(String args[]) { int arr[][] = new int[3][]; arr[0] = new int[1]; arr[1] = new int[2]; arr[2] = new int[3]; int sum = 0; for (int i = 0; i < 3; ++i) for (int j = 0; j < i + 1; ++j) arr[i][j] = j + 1; for (int i = 0; i < 3; ++i) for (int j = 0; j < i + 1; ++j) sum + = arr[i][j]; System.out.print(sum); } }”. This question is standard in competitive examination syllabi for Array.
    keyConcept: Array
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: Which of these is necessary to specify at time of array initialization?
    options:
      - Row
      - Column
      - Both Row and Column
      - None of the mentioned
    answer: 0
    explanation: Row is the correct answer to “Which of these is necessary to specify at time of array initialization”. This question is standard in competitive examination syllabi for Array.
    keyConcept: Array
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What will be the output of the following Java code? class array_output { public static void main(String args[]) { int array_variable[][] = {{ 1, 2, 3}, { 4 , 5, 6}, { 7, 8, 9}}; int sum = 0; for (int i = 0; i < 3; ++i) for (int j = 0; j < 3 ; ++j) sum = sum + array_variable[i][j]; System.out.print(sum / 5); } }
    options:
      - "8"
      - "9"
      - "10"
      - "11"
    answer: 1
    explanation: 9 is the correct answer to “What will be the output of the following Java code? class array_output { public static void main(String args[]) { int array_variable[][] = {{ 1, 2, 3}, { 4 , 5, 6}, { 7, 8, 9}}; int sum = 0; for (int i = 0; i < 3; ++i) for (int j = 0; j < 3 ; ++j) sum = sum + array_variable[i][j]; System.out.print(sum / 5); } }”. This question is standard in competitive examination syllabi for Array.
    keyConcept: Array
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: Which of these is an incorrect Statement?
    options:
      - It is necessary to use new operator to initialize an array
      - Array can be initialized using comma separated expressions surrounded by curly braces
      - Array can be initialized when they are declared
      - None of the mentioned
    answer: 0
    explanation: It is necessary to use new operator to initialize an array is the correct answer to “Which of these is an incorrect Statement”. This question is standard in competitive examination syllabi for Array.
    keyConcept: Array
    testedIn:
      - FPSC
      - PPSC
---


