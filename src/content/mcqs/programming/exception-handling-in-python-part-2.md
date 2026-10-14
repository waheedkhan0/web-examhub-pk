---
title: Exception Handling In Python — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Exception Handling In Python — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: exception-handling-in-python-part-2
topicName: Exception Handling In Python — Part 2
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
    question: Syntax errors are also known as parsing errors.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “Syntax errors are also known as parsing errors.”. This question is standard in competitive examination syllabi for Exception Handling In Python.
    keyConcept: Exception Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: The error displayed in the following Python code is? import itertools l1=(1, 2, 3) l2=[4, 5, 6] l=itertools.chain(l1, l2) print(next(l1))
    options:
      - "'list' object is not iterator"
      - "'tuple' object is not iterator"
      - "'list' object is iterator"
      - "'tuple' object is iterator"
    answer: 1
    explanation: "'tuple' object is not iterator is the correct answer to “The error displayed in the following Python code is? import itertools l1=(1, 2, 3) l2=[4, 5, 6] l=itertools.chain(l1, l2) print(next(l1))”. This question is standard in competitive examination syllabi for Exception Handling In Python."
    keyConcept: Exception Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: "What will be the output of the following Python code? def f(x): for i in range(5): yield i g=f(8) print(list(g))"
    options:
      - "[0, 1, 2, 3, 4]"
      - "[1, 2, 3, 4, 5, 6, 7, 8]"
      - "[1, 2, 3, 4, 5]"
      - "[0, 1, 2, 3, 4, 5, 6, 7]"
    answer: 0
    explanation: "[0, 1, 2, 3, 4] is the correct answer to “What will be the output of the following Python code? def f(x): for i in range(5): yield i g=f(8) print(list(g))”. This question is standard in competitive examination syllabi for Exception Handling In Python."
    keyConcept: Exception Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: "What will be the output of the following Python code? try: if '1' != 1: raise \"someError\" else: print(\"someError has not occurred\") except \"someError\": print (\"someError has occurred\")"
    options:
      - someError has occurred
      - someError has not occurred
      - invalid code
      - none of the mentioned
    answer: 2
    explanation: "invalid code is the correct answer to “What will be the output of the following Python code? try: if '1' != 1: raise \"someError\" else: print(\"someError has not occurred\") except \"someError\": print (\"someError has occurred\")”. This question is standard in competitive examination syllabi for Exception Handling In Python."
    keyConcept: Exception Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: "Is the following Python code valid? try: # Do something except: # Do something else: # Do something"
    options:
      - no, there is no such thing as else
      - no, else cannot be used with except
      - no, else must come before except
      - "yes"
    answer: 3
    explanation: "yes is the correct answer to “Is the following Python code valid? try: # Do something except: # Do something else: # Do something”. This question is standard in competitive examination syllabi for Exception Handling In Python."
    keyConcept: Exception Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What will be the output of the following Python code, if the time module has already been imported? 4 + '3'
    options:
      - NameError
      - IndexError
      - ValueError
      - TypeError
    answer: 3
    explanation: TypeError is the correct answer to “What will be the output of the following Python code, if the time module has already been imported? 4 + '3'”. This question is standard in competitive examination syllabi for Exception Handling In Python.
    keyConcept: Exception Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: Which of the following blocks will be executed whether an exception is thrown or not?
    options:
      - except
      - else
      - finally
      - assert
    answer: 2
    explanation: finally is the correct answer to “Which of the following blocks will be executed whether an exception is thrown or not”. This question is standard in competitive examination syllabi for Exception Handling In Python.
    keyConcept: Exception Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: . . . . . . . . exceptions are raised as a result of an error in opening a particular file.
    options:
      - ValueError
      - TypeError
      - ImportError
      - IOError
    answer: 3
    explanation: IOError is the correct answer to “. . . . . . . . exceptions are raised as a result of an error in opening a particular file.”. This question is standard in competitive examination syllabi for Exception Handling In Python.
    keyConcept: Exception Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What will be the output of the following Python code? t[5]
    options:
      - IndexError
      - NameError
      - TypeError
      - ValeError
    answer: 1
    explanation: NameError is the correct answer to “What will be the output of the following Python code? t[5]”. This question is standard in competitive examination syllabi for Exception Handling In Python.
    keyConcept: Exception Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: "What happens if the file is not found in the following Python code? a=False while not a: try: f_n = input(\"Enter file name\") i_f = open(f_n, 'r') except: print(\"Input file not found\")"
    options:
      - No error
      - Assertion error
      - Input output error
      - Name error
    answer: 0
    explanation: "No error is the correct answer to “What happens if the file is not found in the following Python code? a=False while not a: try: f_n = input(\"Enter file name\") i_f = open(f_n, 'r') except: print(\"Input file not found\")”. This question is standard in competitive examination syllabi for Exception Handling In Python."
    keyConcept: Exception Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: Which of the following is true about the finally clause in exception handling?
    options:
      - The code in the finally block always executes, regardless of whether an exception is raised or not
      - The finally block should always come before the try block
      - The finally block is optional
      - The code in the finally block executes only if an exception is caught
    answer: 0
    explanation: The code in the finally block always executes, regardless of whether an exception is raised or not is the correct answer to “Which of the following is true about the finally clause in exception handling”. This question is standard in competitive examination syllabi for Exception Handling In Python.
    keyConcept: Exception Handling In Python
    testedIn:
      - FPSC
      - PPSC
---


