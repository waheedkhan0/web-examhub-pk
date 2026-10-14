---
title: Tuples In Python — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Tuples In Python — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: tuples-in-python-part-2
topicName: Tuples In Python — Part 2
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
    question: What will be the output of the following Python code? >>> a=(2,3,1,5) >>> a.sort() >>> a
    options:
      - (1,2,3,5)
      - (2,3,1,5)
      - None
      - Error, tuple has no attribute sort
    answer: 3
    explanation: Error, tuple has no attribute sort is the correct answer to “What will be the output of the following Python code? >>> a=(2,3,1,5) >>> a.sort() >>> a”. This question is standard in competitive examination syllabi for Tuples In Python.
    keyConcept: Tuples In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: "What will be the output of the following Python code? a = ('check',) n = 2 for i in range(int(n)): a = (a,) print(a)"
    options:
      - Error, tuples are immutable
      - (('check',),) ((('check',),),)
      - ((‘check’,)’check’,)
      - (('check',)’check’,) ((('check',)’check’,)’check’,)
    answer: 1
    explanation: "(('check',),) ((('check',),),) is the correct answer to “What will be the output of the following Python code? a = ('check',) n = 2 for i in range(int(n)): a = (a,) print(a)”. This question is standard in competitive examination syllabi for Tuples In Python."
    keyConcept: Tuples In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What will be the output of the following Python code? >>>my_tuple = (1, 2, 3, 4) >>>my_tuple.append( (5, 6, 7) ) >>>print len(my_tuple)
    options:
      - "1"
      - "2"
      - "5"
      - Error
    answer: 3
    explanation: Error is the correct answer to “What will be the output of the following Python code? >>>my_tuple = (1, 2, 3, 4) >>>my_tuple.append( (5, 6, 7) ) >>>print len(my_tuple)”. This question is standard in competitive examination syllabi for Tuples In Python.
    keyConcept: Tuples In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What will be the output of the following Python code? >>> a=(1,2,3,4) >>> del(a[2])
    options:
      - Now, a=(1,2,4)
      - Now, a=(1,3,4)
      - Now a=(3,4)
      - Error as tuple is immutable
    answer: 3
    explanation: Error as tuple is immutable is the correct answer to “What will be the output of the following Python code? >>> a=(1,2,3,4) >>> del(a[2])”. This question is standard in competitive examination syllabi for Tuples In Python.
    keyConcept: Tuples In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: What will be the output of the following Python code? >>>t = (1, 2, 4, 3, 8, 9) >>>[t[i] for i in range(0, len(t), 2)]
    options:
      - "[2, 3, 9]"
      - "[1, 2, 4, 3, 8, 9]"
      - "[1, 4, 8]"
      - (1, 4, 8)
    answer: 2
    explanation: "[1, 4, 8] is the correct answer to “What will be the output of the following Python code? >>>t = (1, 2, 4, 3, 8, 9) >>>[t[i] for i in range(0, len(t), 2)]”. This question is standard in competitive examination syllabi for Tuples In Python."
    keyConcept: Tuples In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: Is the following Python code valid? >>> a,b=1,2,3
    options:
      - Yes, this is an example of tuple unpacking. a=1 and b=2
      - Yes, this is an example of tuple unpacking. a=(1,2) and b=3
      - No, too many values to unpack
      - Yes, this is an example of tuple unpacking. a=1 and b=(2,3)
    answer: 2
    explanation: No, too many values to unpack is the correct answer to “Is the following Python code valid? >>> a,b=1,2,3”. This question is standard in competitive examination syllabi for Tuples In Python.
    keyConcept: Tuples In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: Is the following Python code valid? >>> a=2,3,4,5 >>> a
    options:
      - Yes, 2 is printed
      - Yes, [2,3,4,5] is printed
      - No, too many values to unpack
      - Yes, (2,3,4,5) is printed
    answer: 3
    explanation: Yes, (2,3,4,5) is printed is the correct answer to “Is the following Python code valid? >>> a=2,3,4,5 >>> a”. This question is standard in competitive examination syllabi for Tuples In Python.
    keyConcept: Tuples In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What will be the output of the following Python code? >>> a=(1,2,(4,5)) >>> b=(1,2,(3,4)) >>> a<b
    options:
      - "False"
      - "True"
      - Error, < operator is not valid for tuples
      - Error, < operator is valid for tuples but not if there are sub-tuples
    answer: 0
    explanation: False is the correct answer to “What will be the output of the following Python code? >>> a=(1,2,(4,5)) >>> b=(1,2,(3,4)) >>> a<b”. This question is standard in competitive examination syllabi for Tuples In Python.
    keyConcept: Tuples In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: Is the following Python code valid? >>> a=(1,2,3) >>> b=a.update(4,)
    options:
      - Yes, a=(1,2,3,4) and b=(1,2,3,4)
      - Yes, a=(1,2,3) and b=(1,2,3,4)
      - No because tuples are immutable
      - No because wrong syntax for update() method
    answer: 2
    explanation: No because tuples are immutable is the correct answer to “Is the following Python code valid? >>> a=(1,2,3) >>> b=a.update(4,)”. This question is standard in competitive examination syllabi for Tuples In Python.
    keyConcept: Tuples In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What will be the output of the following Python code? >>>t=(1,2,4,3) >>>t[1:3]
    options:
      - (1, 2)
      - (1, 2, 4)
      - (2, 4)
      - (2, 4, 3)
    answer: 2
    explanation: (2, 4) is the correct answer to “What will be the output of the following Python code? >>>t=(1,2,4,3) >>>t[1:3]”. This question is standard in competitive examination syllabi for Tuples In Python.
    keyConcept: Tuples In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What will be the output of the following Python code? >>> a=(1,2) >>> b=(3,4) >>> c=a+b >>> c
    options:
      - (4,6)
      - (1,2,3,4)
      - Error as tuples are immutable
      - None
    answer: 1
    explanation: (1,2,3,4) is the correct answer to “What will be the output of the following Python code? >>> a=(1,2) >>> b=(3,4) >>> c=a+b >>> c”. This question is standard in competitive examination syllabi for Tuples In Python.
    keyConcept: Tuples In Python
    testedIn:
      - FPSC
      - PPSC
---


