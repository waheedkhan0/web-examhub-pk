---
title: Lists In Python — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Lists In Python — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: lists-in-python-part-2
topicName: Lists In Python — Part 2
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
    question: "What will be the output of the following Python code? l1=[2,4,6] l2=[-2,-4,-6] for i in zip(l1, l2): print(i)"
    options:
      - 2, -2 4, -4 6, -6
      - "[(2, -2), (4, -4), (6, -6)]"
      - (2, -2) (4, -4) (6, -6)
      - "[-4, -16, -36]"
    answer: 2
    explanation: "(2, -2) (4, -4) (6, -6) is the correct answer to “What will be the output of the following Python code? l1=[2,4,6] l2=[-2,-4,-6] for i in zip(l1, l2): print(i)”. This question is standard in competitive examination syllabi for Lists In Python."
    keyConcept: Lists In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: "What will be the output of the following Python code? def increment_items(L, increment): i = 0 while i < len(L): L[i] = L[i] + increment i = i + 1 values = [1, 2, 3] print(increment_items(values, 2)) print(values)"
    options:
      - None [3, 4, 5]
      - None [1, 2, 3]
      - "[3, 4, 5] [1, 2, 3]"
      - "[3, 4, 5] None"
    answer: 0
    explanation: "None [3, 4, 5] is the correct answer to “What will be the output of the following Python code? def increment_items(L, increment): i = 0 while i < len(L): L[i] = L[i] + increment i = i + 1 values = [1, 2, 3] print(increment_items(values, 2)) print(values)”. This question is standard in competitive examination syllabi for Lists In Python."
    keyConcept: Lists In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What will be the output of the following Python code? A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] B = [[3, 3, 3], [4, 4, 4], [5, 5, 5]] zip(A, B)
    options:
      - Address of the zip object
      - Address of the matrices A and B
      - No output
      - "[3, 6, 9, 16, 20, 24, 35, 40, 45]"
    answer: 0
    explanation: Address of the zip object is the correct answer to “What will be the output of the following Python code? A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] B = [[3, 3, 3], [4, 4, 4], [5, 5, 5]] zip(A, B)”. This question is standard in competitive examination syllabi for Lists In Python.
    keyConcept: Lists In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What will be the output of the following Python code? a=["Apple","Ball","Cobra"] a.sort(key=len) print(a)
    options:
      - "['Apple', 'Ball', 'Cobra']"
      - "['Ball', 'Apple', 'Cobra']"
      - "['Cobra', 'Apple', 'Ball']"
      - Invalid syntax for sort()
    answer: 1
    explanation: "['Ball', 'Apple', 'Cobra'] is the correct answer to “What will be the output of the following Python code? a=[\"Apple\",\"Ball\",\"Cobra\"] a.sort(key=len) print(a)”. This question is standard in competitive examination syllabi for Lists In Python."
    keyConcept: Lists In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: What will be the output of the following Python code? veggies = ['carrot', 'broccoli', 'potato', 'asparagus'] veggies.insert(veggies.index('broccoli'), 'celery') print(veggies)
    options:
      - "['carrot', 'celery', 'broccoli', 'potato', 'asparagus'] Correct 1.00"
      - "['carrot', 'celery', 'potato', 'asparagus']"
      - "['carrot', 'broccoli', 'celery', 'potato', 'asparagus']"
      - "['celery', 'carrot', 'broccoli', 'potato', 'asparagus']"
    answer: 0
    explanation: "['carrot', 'celery', 'broccoli', 'potato', 'asparagus'] Correct 1.00 is the correct answer to “What will be the output of the following Python code? veggies = ['carrot', 'broccoli', 'potato', 'asparagus'] veggies.insert(veggies.index('broccoli'), 'celery') print(veggies)”. This question is standard in competitive examination syllabi for Lists In Python."
    keyConcept: Lists In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What will be the output of the following Python code? >>>list1 = [11, 2, 23] >>>list2 = [11, 2, 2] >>>list1 < list2
    options:
      - "True"
      - "False"
      - Error
      - None
    answer: 1
    explanation: False is the correct answer to “What will be the output of the following Python code? >>>list1 = [11, 2, 23] >>>list2 = [11, 2, 2] >>>list1 < list2”. This question is standard in competitive examination syllabi for Lists In Python.
    keyConcept: Lists In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What will be the output of the following Python code? l=[[1 ,2, 3], [4, 5, 6], [7, 8, 9]] [[row[i] for row in l] for i in range(3)]
    options:
      - Error
      - "[[1, 4, 7], [2, 5, 8], [3, 6, 9]]"
      - 1 4 7 2 5 8 3 6 9
      - (1 4 7) (2 5 8) (3 6 9)
    answer: 1
    explanation: "[[1, 4, 7], [2, 5, 8], [3, 6, 9]] is the correct answer to “What will be the output of the following Python code? l=[[1 ,2, 3], [4, 5, 6], [7, 8, 9]] [[row[i] for row in l] for i in range(3)]”. This question is standard in competitive examination syllabi for Lists In Python."
    keyConcept: Lists In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What will be the output of the following Python code? A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] [A[row][1] for row in (0, 1, 2)]
    options:
      - "[7, 8, 9]"
      - "[4, 5, 6]"
      - "[2, 5, 8]"
      - "[1, 4, 7]"
    answer: 2
    explanation: "[2, 5, 8] is the correct answer to “What will be the output of the following Python code? A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] [A[row][1] for row in (0, 1, 2)]”. This question is standard in competitive examination syllabi for Lists In Python."
    keyConcept: Lists In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What is the output of the following piece of code? a=list((45,)*4) print((45)*4) print(a)
    options:
      - 180 [(45),(45),(45),(45)]
      - (45,45,45,45) [45,45,45,45]
      - 180 [45,45,45,45]
      - Syntax error
    answer: 2
    explanation: 180 [45,45,45,45] is the correct answer to “What is the output of the following piece of code? a=list((45,)*4) print((45)*4) print(a)”. This question is standard in competitive examination syllabi for Lists In Python.
    keyConcept: Lists In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: "What will be the output of the following Python code? l=[[1, 2, 3], [4, 5, 6]] for i in range(len(l)): for j in range(len(l[i])): l[i][j]+=10 l"
    options:
      - No output
      - Error
      - "[[1, 2, 3], [4, 5, 6]]"
      - "[[11, 12, 13], [14, 15, 16]]"
    answer: 3
    explanation: "[[11, 12, 13], [14, 15, 16]] is the correct answer to “What will be the output of the following Python code? l=[[1, 2, 3], [4, 5, 6]] for i in range(len(l)): for j in range(len(l[i])): l[i][j]+=10 l”. This question is standard in competitive examination syllabi for Lists In Python."
    keyConcept: Lists In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: To shuffle the list(say list1) what function do we use?
    options:
      - list1.shuffle()
      - shuffle(list1)
      - random.shuffle(list1)
      - random.shuffleList(list1)
    answer: 2
    explanation: random.shuffle(list1) is the correct answer to “To shuffle the list(say list1) what function do we use”. This question is standard in competitive examination syllabi for Lists In Python.
    keyConcept: Lists In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: What will be the output of the following Python code? t=32.00 [round((x-32)*5/9) for x in t]
    options:
      - "[0]"
      - "0"
      - "[0.00]"
      - Error
    answer: 3
    explanation: Error is the correct answer to “What will be the output of the following Python code? t=32.00 [round((x-32)*5/9) for x in t]”. This question is standard in competitive examination syllabi for Lists In Python.
    keyConcept: Lists In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: To which of the following the "in" operator can be used to check if an item is in it?
    options:
      - Lists
      - Dictionary
      - Set
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “To which of the following the "in" operator can be used to check if an item is in it”. This question is standard in competitive examination syllabi for Lists In Python.
    keyConcept: Lists In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: "Read the information given below carefully and write a list comprehension such that the output is: ['e', 'o'] w=\"hello\" v=('a', 'e', 'i', 'o', 'u')"
    options:
      - "[x for w in v if x in v]"
      - "[x for x in w if x in v]"
      - "[x for x in v if w in v]"
      - "[x for v in w for x in w]"
    answer: 1
    explanation: "[x for x in w if x in v] is the correct answer to “Read the information given below carefully and write a list comprehension such that the output is: ['e', 'o'] w=\"hello\" v=('a', 'e', 'i', 'o', 'u')”. This question is standard in competitive examination syllabi for Lists In Python."
    keyConcept: Lists In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What will be the output of the following Python code? import math [str(round(math.pi)) for i in range (1, 6)]
    options:
      - "['3', '3', '3', '3', '3', '3']"
      - "['3.1', '3.14', '3.142', '3.1416', '3.14159', '3.141582']"
      - "['3', '3', '3', '3', '3']"
      - "['3.1', '3.14', '3.142', '3.1416', '3.14159']"
    answer: 2
    explanation: "['3', '3', '3', '3', '3'] is the correct answer to “What will be the output of the following Python code? import math [str(round(math.pi)) for i in range (1, 6)]”. This question is standard in competitive examination syllabi for Lists In Python."
    keyConcept: Lists In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What will be the output of the following Python code? l=[1,2,3,4,5] [x&1 for x in l]
    options:
      - "[1, 1, 1, 1, 1]"
      - "[1, 0, 1, 0, 1]"
      - "[1, 0, 0, 0, 0]"
      - "[0, 1, 0, 1, 0]"
    answer: 1
    explanation: "[1, 0, 1, 0, 1] is the correct answer to “What will be the output of the following Python code? l=[1,2,3,4,5] [x&1 for x in l]”. This question is standard in competitive examination syllabi for Lists In Python."
    keyConcept: Lists In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: "What will be the output of the following Python code? a = [1, 5, 7, 9, 9, 1] b=a[0] x= 0 for x in range(1, len(a)): if a[x] > b: b = a[x] b= x print(b)"
    options:
      - "5"
      - "3"
      - "4"
      - "0"
    answer: 2
    explanation: "4 is the correct answer to “What will be the output of the following Python code? a = [1, 5, 7, 9, 9, 1] b=a[0] x= 0 for x in range(1, len(a)): if a[x] > b: b = a[x] b= x print(b)”. This question is standard in competitive examination syllabi for Lists In Python."
    keyConcept: Lists In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: What will be the output of the following Python code? a="hello" b=list((x.upper(),len(x)) for x in a) print(b)
    options:
      - "[('H', 1), ('E', 1), ('L', 1), ('L', 1), ('O', 1)]"
      - "[('HELLO', 5)]"
      - "[('H', 5), ('E', 5), ('L', 5), ('L', 5), ('O', 5)]"
      - Syntax error
    answer: 0
    explanation: "[('H', 1), ('E', 1), ('L', 1), ('L', 1), ('O', 1)] is the correct answer to “What will be the output of the following Python code? a=\"hello\" b=list((x.upper(),len(x)) for x in a) print(b)”. This question is standard in competitive examination syllabi for Lists In Python."
    keyConcept: Lists In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: "What will be the output of the following Python code? values = [[3, 4, 5, 1], [33, 6, 1, 2]] v = values[0][0] for row in range(0, len(values)): for column in range(0, len(values[row])): if v < values[row][column]: v = values[row][column] print(v)"
    options:
      - "3"
      - "5"
      - "6"
      - "33"
    answer: 3
    explanation: "33 is the correct answer to “What will be the output of the following Python code? values = [[3, 4, 5, 1], [33, 6, 1, 2]] v = values[0][0] for row in range(0, len(values)): for column in range(0, len(values[row])): if v < values[row][column]: v = values[row][column] print(v)”. This question is standard in competitive examination syllabi for Lists In Python."
    keyConcept: Lists In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What will be the output of the following Python code? >>> a=[14,52,7] >>>> b=a.copy() >>> b is a
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “What will be the output of the following Python code? >>> a=[14,52,7] >>>> b=a.copy() >>> b is a”. This question is standard in competitive examination syllabi for Lists In Python.
    keyConcept: Lists In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: Suppose list1 is [3, 4, 5, 20, 5, 25, 1, 3], what is list1 after list1.reverse()?
    options:
      - "[3, 4, 5, 20, 5, 25, 1, 3]"
      - "[1, 3, 3, 4, 5, 5, 20, 25]"
      - "[25, 20, 5, 5, 4, 3, 3, 1]"
      - "[3, 1, 25, 5, 20, 5, 4, 3]"
    answer: 3
    explanation: "[3, 1, 25, 5, 20, 5, 4, 3] is the correct answer to “Suppose list1 is [3, 4, 5, 20, 5, 25, 1, 3], what is list1 after list1.reverse()”. This question is standard in competitive examination syllabi for Lists In Python."
    keyConcept: Lists In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: "What will be the output of the following Python code? names1 = ['Amir', 'Bear', 'Charlton', 'Daman'] names2 = names1 names3 = names1[:] names2[0] = 'Alice' names3[1] = 'Bob' sum = 0 for ls in (names1, names2, names3): if ls[0] == 'Alice': sum += 1 if ls[1] == 'Bob': sum += 10 print sum"
    options:
      - "11"
      - "12"
      - "21"
      - "22"
    answer: 1
    explanation: "12 is the correct answer to “What will be the output of the following Python code? names1 = ['Amir', 'Bear', 'Charlton', 'Daman'] names2 = names1 names3 = names1[:] names2[0] = 'Alice' names3[1] = 'Bob' sum = 0 for ls in (names1, names2, names3): if ls[0] == 'Alice': sum += 1 if ls[1] == 'Bob': sum += 10 print sum”. This question is standard in competitive examination syllabi for Lists In Python."
    keyConcept: Lists In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: "What is the list comprehension equivalent for: list(map(lambda x:x**-1, [1, 2, 3]))?"
    options:
      - "[1|x for x in [1, 2, 3]]"
      - "[-1**x for x in [1, 2, 3]]"
      - "[x**-1 for x in [1, 2, 3]]"
      - "[x^-1 for x in range(4)]"
    answer: 2
    explanation: "[x**-1 for x in [1, 2, 3]] is the correct answer to “What is the list comprehension equivalent for: list(map(lambda x:x**-1, [1, 2, 3]))”. This question is standard in competitive examination syllabi for Lists In Python."
    keyConcept: Lists In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: What will be the output of the following Python code? [ord(ch) for ch in 'abc']
    options:
      - "[97, 98, 99]"
      - "['97', '98', '99']"
      - "[65, 66, 67]"
      - Error
    answer: 0
    explanation: "[97, 98, 99] is the correct answer to “What will be the output of the following Python code? [ord(ch) for ch in 'abc']”. This question is standard in competitive examination syllabi for Lists In Python."
    keyConcept: Lists In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: What will be the output of the following Python code? A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] B = [[3, 3, 3], [4, 4, 4], [5, 5, 5]] [B[row][col]*A[row][col] for row in range(3) for col in range(3)]
    options:
      - "[3, 6, 9, 16, 20, 24, 35, 40, 45]"
      - Error
      - "[0, 30, 60, 120, 160, 200, 300, 350, 400]"
      - "0"
    answer: 0
    explanation: "[3, 6, 9, 16, 20, 24, 35, 40, 45] is the correct answer to “What will be the output of the following Python code? A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] B = [[3, 3, 3], [4, 4, 4], [5, 5, 5]] [B[row][col]*A[row][col] for row in range(3) for col in range(3)]”. This question is standard in competitive examination syllabi for Lists In Python."
    keyConcept: Lists In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Suppose listExample is [3, 4, 5, 20, 5, 25, 1, 3], what is list1 after listExample.pop(1)?
    options:
      - "[3, 4, 5, 20, 5, 25, 1, 3]"
      - "[1, 3, 3, 4, 5, 5, 20, 25]"
      - "[3, 5, 20, 5, 25, 1, 3]"
      - "[1, 3, 4, 5, 20, 5, 25]"
    answer: 2
    explanation: "[3, 5, 20, 5, 25, 1, 3] is the correct answer to “Suppose listExample is [3, 4, 5, 20, 5, 25, 1, 3], what is list1 after listExample.pop(1)”. This question is standard in competitive examination syllabi for Lists In Python."
    keyConcept: Lists In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: What is the output when we execute list("hello")?
    options:
      - "['h', 'e', 'l', 'l', 'o']"
      - "['hello']"
      - "['llo']"
      - "['olleh']"
    answer: 0
    explanation: "['h', 'e', 'l', 'l', 'o'] is the correct answer to “What is the output when we execute list(\"hello\")”. This question is standard in competitive examination syllabi for Lists In Python."
    keyConcept: Lists In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: What is the output of print(k) in the following Python code snippet? k = [print(i) for i in my_string if i not in "aeiou"] print(k)
    options:
      - all characters of my_string that aren't vowels
      - a list of Nones
      - list of Trues
      - list of Falses
    answer: 1
    explanation: a list of Nones is the correct answer to “What is the output of print(k) in the following Python code snippet? k = [print(i) for i in my_string if i not in "aeiou"] print(k)”. This question is standard in competitive examination syllabi for Lists In Python.
    keyConcept: Lists In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: "Write a list comprehension equivalent for the Python code shown below. for i in range(1, 101): if int(i*0.5)==i*0.5: print(i)"
    options:
      - "[i for i in range(1, 100) if int(i*0.5)==(i*0.5)]"
      - "[i for i in range(1, 101) if int(i*0.5)==(i*0.5)]"
      - "[i for i in range(1, 101) if int(i*0.5)=(i*0.5)]"
      - "[i for i in range(1, 100) if int(i*0.5)=(i*0.5)]"
    answer: 1
    explanation: "[i for i in range(1, 101) if int(i*0.5)==(i*0.5)] is the correct answer to “Write a list comprehension equivalent for the Python code shown below. for i in range(1, 101): if int(i*0.5)==i*0.5: print(i)”. This question is standard in competitive examination syllabi for Lists In Python."
    keyConcept: Lists In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: "Suppose list1 = [0.5 * x for x in range(0, 4)], list1 is:"
    options:
      - "[0, 1, 2, 3]"
      - "[0, 1, 2, 3, 4]"
      - "[0.0, 0.5, 1.0, 1.5]"
      - "[0.0, 0.5, 1.0, 1.5, 2.0]"
    answer: 2
    explanation: "[0.0, 0.5, 1.0, 1.5] is the correct answer to “Suppose list1 = [0.5 * x for x in range(0, 4)], list1 is:”. This question is standard in competitive examination syllabi for Lists In Python."
    keyConcept: Lists In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: "What will be the output of the following Python code? data = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]] def ttt(m): v = m[0][0] for row in m: for element in row: if v < element: v = element return v print(ttt(data[0]))"
    options:
      - "1"
      - "2"
      - "4"
      - "5"
    answer: 2
    explanation: "4 is the correct answer to “What will be the output of the following Python code? data = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]] def ttt(m): v = m[0][0] for row in m: for element in row: if v < element: v = element return v print(ttt(data[0]))”. This question is standard in competitive examination syllabi for Lists In Python."
    keyConcept: Lists In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: What will be the output of the following Python code? word1="Apple" word2="Apple" list1=[1,2,3] list2=[1,2,3] print(word1 is word2) print(list1 is list2)
    options:
      - True True
      - False True
      - False False
      - True False
    answer: 3
    explanation: True False is the correct answer to “What will be the output of the following Python code? word1="Apple" word2="Apple" list1=[1,2,3] list2=[1,2,3] print(word1 is word2) print(list1 is list2)”. This question is standard in competitive examination syllabi for Lists In Python.
    keyConcept: Lists In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: Suppose list1 is [4, 2, 2, 4, 5, 2, 1, 0], Which of the following is correct syntax for slicing operation?
    options:
      - print(list1[2:])
      - print(list1[:2])
      - print(list1[:-2])
      - all of the mentioned
    answer: 3
    explanation: all of the mentioned is the correct answer to “Suppose list1 is [4, 2, 2, 4, 5, 2, 1, 0], Which of the following is correct syntax for slicing operation”. This question is standard in competitive examination syllabi for Lists In Python.
    keyConcept: Lists In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: "What will be the output of the following Python code? names1 = ['Amir', 'Bala', 'Chales'] if 'amir' in names1: print(1) else: print(2)"
    options:
      - None
      - "1"
      - "2"
      - Error
    answer: 2
    explanation: "2 is the correct answer to “What will be the output of the following Python code? names1 = ['Amir', 'Bala', 'Chales'] if 'amir' in names1: print(1) else: print(2)”. This question is standard in competitive examination syllabi for Lists In Python."
    keyConcept: Lists In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: What will be the output of the following Python code? a=165 b=sum(list(map(int,str(a)))) print(b)
    options:
      - "561"
      - "5"
      - "12"
      - Syntax error
    answer: 2
    explanation: 12 is the correct answer to “What will be the output of the following Python code? a=165 b=sum(list(map(int,str(a)))) print(b)”. This question is standard in competitive examination syllabi for Lists In Python.
    keyConcept: Lists In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: What will be the output of the following Python code? a=[[]]*3 a[1].append(7) print(a)
    options:
      - Syntax error
      - "[[7], [7], [7]]"
      - "[[7], [], []]"
      - "[[],7, [], []]"
    answer: 1
    explanation: "[[7], [7], [7]] is the correct answer to “What will be the output of the following Python code? a=[[]]*3 a[1].append(7) print(a)”. This question is standard in competitive examination syllabi for Lists In Python."
    keyConcept: Lists In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: "What will be the output of the following Python code? def unpack(a,b,c,d): print(a+d) x = [1,2,3,4] unpack(*x)"
    options:
      - Error
      - "[1,4]"
      - "[5]"
      - "5"
    answer: 3
    explanation: "5 is the correct answer to “What will be the output of the following Python code? def unpack(a,b,c,d): print(a+d) x = [1,2,3,4] unpack(*x)”. This question is standard in competitive examination syllabi for Lists In Python."
    keyConcept: Lists In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: "What will be the output of the following Python code snippet? print([if i%2==0: i; else: i+1; for i in range(4)])"
    options:
      - "[0, 2, 2, 4]"
      - "[1, 1, 3, 3]"
      - error
      - none of the mentioned
    answer: 2
    explanation: "error is the correct answer to “What will be the output of the following Python code snippet? print([if i%2==0: i; else: i+1; for i in range(4)])”. This question is standard in competitive examination syllabi for Lists In Python."
    keyConcept: Lists In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: Suppose list1 is [3, 4, 5, 20, 5, 25, 1, 3], what is list1.count(5)?
    options:
      - "0"
      - "4"
      - "1"
      - "2"
    answer: 3
    explanation: 2 is the correct answer to “Suppose list1 is [3, 4, 5, 20, 5, 25, 1, 3], what is list1.count(5)”. This question is standard in competitive examination syllabi for Lists In Python.
    keyConcept: Lists In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: What will be the output of the following Python list comprehension? [j for i in range(2,8) for j in range(i*2, 50, i)]
    options:
      - A list of prime numbers up to 50
      - A list of numbers divisible by 2, up to 50
      - A list of non prime numbers, up to 50
      - Error
    answer: 2
    explanation: A list of non prime numbers, up to 50 is the correct answer to “What will be the output of the following Python list comprehension? [j for i in range(2,8) for j in range(i*2, 50, i)]”. This question is standard in competitive examination syllabi for Lists In Python.
    keyConcept: Lists In Python
    testedIn:
      - FPSC
      - PPSC
---


