---
title: Files Handling In Python — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Files Handling In Python — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: files-handling-in-python-part-1
topicName: Files Handling In Python — Part 1
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
    question: How do you open a file named data.txt in read mode in Python?
    options:
      - file = open('data.txt', 'r')
      - file = open('data.txt', 'read')
      - file = open('data.txt', 'read mode')
      - file = open('data.txt')
    answer: 0
    explanation: file = open('data.txt', 'r') is the correct answer to “How do you open a file named data.txt in read mode in Python”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: What is the purpose of the with statement in file handling?
    options:
      - It ensures that the file is properly closed after usage
      - It creates a new file
      - It reads the file contents
      - It deletes the file
    answer: 0
    explanation: It ensures that the file is properly closed after usage is the correct answer to “What is the purpose of the with statement in file handling”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: How can you write data to a file in Python?
    options:
      - By using the write() method on a file object
      - By using the save() function
      - By using the put() function
      - By using the append() method
    answer: 0
    explanation: By using the write() method on a file object is the correct answer to “How can you write data to a file in Python”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What does the read() method of a file object do?
    options:
      - It reads the entire contents of the file
      - It writes data to the file
      - It closes the file
      - It deletes the file
    answer: 0
    explanation: It reads the entire contents of the file is the correct answer to “What does the read() method of a file object do”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: How can you read a single line from a file in Python?
    options:
      - By using the readline() method on a file object
      - By using the line() function
      - By using the get_line() method
      - By using the read() method
    answer: 0
    explanation: By using the readline() method on a file object is the correct answer to “How can you read a single line from a file in Python”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What is the purpose of the seek() method in file handling?
    options:
      - It changes the file position to a specified offset
      - It searches for a string in the file
      - It appends data to the end of the file
      - It reads a specific line
    answer: 0
    explanation: It changes the file position to a specified offset is the correct answer to “What is the purpose of the seek() method in file handling”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: How can you read the entire contents of a file line by line in Python?
    options:
      - By using a for loop with the file object
      - By using the readlines() method on a file object
      - By using the readline() method on a file object
      - By using the line() function
    answer: 1
    explanation: By using the readlines() method on a file object is the correct answer to “How can you read the entire contents of a file line by line in Python”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: "What is the output of the following code: with open('data.txt', 'a') as file: file.write('Appended line.') with open('data.txt', 'r') as file: content = file.read() print(content)"
    options:
      - Contents of data.txt with the appended line
      - An error will occur
      - Appended line.
      - file object
    answer: 3
    explanation: "file object is the correct answer to “What is the output of the following code: with open('data.txt', 'a') as file: file.write('Appended line.') with open('data.txt', 'r') as file: content = file.read() print(content)”. This question is standard in competitive examination syllabi for Files Handling In Python."
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: How can you create a new file in Python if it doesn't exist?
    options:
      - By using the 'x' mode when opening the file
      - By using the 'create' keyword
      - By using the new() function
      - By using the 'c' mode when opening the file
    answer: 0
    explanation: By using the 'x' mode when opening the file is the correct answer to “How can you create a new file in Python if it doesn't exist”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: To open a file c:\scores.txt for reading, we use . . . . . . . .
    options:
      - infile = open(“c:\scores.txt”, “r”)
      - infile = open(“c:\\scores.txt”, “r”)
      - infile = open(file = “c:\scores.txt”, “r”)
      - infile = open(file = “c:\\scores.txt”, “r”)
    answer: 1
    explanation: infile = open(“c:\\scores.txt”, “r”) is the correct answer to “To open a file c:\scores.txt for reading, we use . . . . . . . .”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: To open a file c:\scores.txt for appending data, we use . . . . . . . .
    options:
      - outfile = open(“c:\\scores.txt”, “a”)
      - outfile = open(“c:\\scores.txt”, “rw”)
      - outfile = open(file = “c:\scores.txt”, “w”)
      - outfile = open(file = “c:\\scores.txt”, “w”)
    answer: 0
    explanation: outfile = open(“c:\\scores.txt”, “a”) is the correct answer to “To open a file c:\scores.txt for appending data, we use . . . . . . . .”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: How can you close a file in Python?
    options:
      - By using the close() method on a file object
      - By using the end() function
      - By using the exit() method
      - By using the terminate() method
    answer: 0
    explanation: By using the close() method on a file object is the correct answer to “How can you close a file in Python”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What is the purpose of the tell() method in file handling?
    options:
      - It returns the current file position
      - It reads the file contents
      - It closes the file
      - It appends data to the file
    answer: 0
    explanation: It returns the current file position is the correct answer to “What is the purpose of the tell() method in file handling”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: To open a file c:\scores.txt for writing, we use . . . . . . . .
    options:
      - outfile = open(“c:\scores.txt”, “w”)
      - outfile = open(“c:\\scores.txt”, “w”)
      - outfile = open(file = “c:\scores.txt”, “w”)
      - outfile = open(file = “c:\\scores.txt”, “w”)
    answer: 1
    explanation: outfile = open(“c:\\scores.txt”, “w”) is the correct answer to “To open a file c:\scores.txt for writing, we use . . . . . . . .”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What is the purpose of the write() method in file handling?
    options:
      - It writes data to the file
      - It reads the file contents
      - It creates a new file
      - It closes the file
    answer: 0
    explanation: It writes data to the file is the correct answer to “What is the purpose of the write() method in file handling”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: To read two characters from a file object infile, we use . . . . . . . .
    options:
      - infile.read(2)
      - infile.read()
      - infile.readline()
      - infile.readlines()
    answer: 0
    explanation: infile.read(2) is the correct answer to “To read two characters from a file object infile, we use . . . . . . . .”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: "What is the output of the following code: file = open('data.txt', 'r') content = file.read() print(content)"
    options:
      - Contents of data.txt
      - An error will occur
      - file object
      - r
    answer: 1
    explanation: "An error will occur is the correct answer to “What is the output of the following code: file = open('data.txt', 'r') content = file.read() print(content)”. This question is standard in competitive examination syllabi for Files Handling In Python."
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: "What is the output of the following code: with open('data.txt', 'w') as file: file.write('Hello, world!')"
    options:
      - The file data.txt will contain Hello, world!
      - An error will occur
      - The file data.txt will be empty
      - Hello, world!
    answer: 2
    explanation: "The file data.txt will be empty is the correct answer to “What is the output of the following code: with open('data.txt', 'w') as file: file.write('Hello, world!')”. This question is standard in competitive examination syllabi for Files Handling In Python."
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: "What will be the output of the following code: with open('data.txt', 'r') as file: lines = file.readlines() print(len(lines))"
    options:
      - The number of lines in data.txt
      - An error will occur
      - The content of data.txt
      - The file object file
    answer: 0
    explanation: "The number of lines in data.txt is the correct answer to “What will be the output of the following code: with open('data.txt', 'r') as file: lines = file.readlines() print(len(lines))”. This question is standard in competitive examination syllabi for Files Handling In Python."
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: Correct syntax of file.writelines() is?
    options:
      - file.writelines(sequence)
      - fileObject.writelines()
      - fileObject.writelines(sequence)
      - none of the mentioned
    answer: 2
    explanation: fileObject.writelines(sequence) is the correct answer to “Correct syntax of file.writelines() is”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: Which is/are the basic I/O connections in file?
    options:
      - Standard Input
      - Standard Output
      - Standard Errors
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “Which is/are the basic I/O connections in file”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What is the use of "a" in file handling?
    options:
      - Read
      - Write
      - Append
      - None of the mentioned
    answer: 2
    explanation: Append is the correct answer to “What is the use of "a" in file handling”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: Which are the two built-in functions to read a line of text from standard input, which by default comes from the keyboard?
    options:
      - Raw_input & Input
      - Input & Scan
      - Scan & Scanner
      - Scanner
    answer: 0
    explanation: Raw_input & Input is the correct answer to “Which are the two built-in functions to read a line of text from standard input, which by default comes from the keyboard”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: How can you check the current position in a file in Python?
    options:
      - By using the tell() method on a file object
      - By using the position() method
      - By using the current_position() method
      - By using the get_position() method
    answer: 0
    explanation: By using the tell() method on a file object is the correct answer to “How can you check the current position in a file in Python”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: How can you check if a file exists in Python before opening it?
    options:
      - By using the os.path.exists() function
      - By using the file.exists() method
      - By using the file.is_existing() method
      - By using the file.exist() method
    answer: 0
    explanation: By using the os.path.exists() function is the correct answer to “How can you check if a file exists in Python before opening it”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Which function is used to read single line from file?
    options:
      - Readline()
      - Readlines()
      - Readstatement()
      - Readfullline()
    answer: 1
    explanation: Readlines() is the correct answer to “Which function is used to read single line from file”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: Which of the following are the modes of both writing and reading in binary format in file?
    options:
      - wb+
      - w
      - wb
      - w+
    answer: 0
    explanation: wb+ is the correct answer to “Which of the following are the modes of both writing and reading in binary format in file”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: To read the entire remaining contents of the file as a string from a file object infile, we use . . . . . . . .
    options:
      - infile.read(2)
      - infile.read()
      - infile.readline()
      - infile.readlines()
    answer: 1
    explanation: infile.read() is the correct answer to “To read the entire remaining contents of the file as a string from a file object infile, we use . . . . . . . .”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: Which function is used to read all the characters?
    options:
      - Read()
      - Readcharacters()
      - Readall()
      - Readchar()
    answer: 0
    explanation: Read() is the correct answer to “Which function is used to read all the characters”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: What is the current syntax of remove() a file?
    options:
      - remove(file_name)
      - remove(new_file_name, current_file_name,)
      - remove(() , file_name))
      - none of the mentioned
    answer: 0
    explanation: remove(file_name) is the correct answer to “What is the current syntax of remove() a file”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: Which function is used to write all the characters?
    options:
      - write()
      - writecharacters()
      - writeall()
      - writechar()
    answer: 0
    explanation: write() is the correct answer to “Which function is used to write all the characters”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: "What will be the output of the following Python code? (If entered name is examveda) import sys print 'Enter your name: ', name = '' while True: c = sys.stdin.read(1) if c == '\\n': break name = name + c print 'Your name is:', name"
    options:
      - examveda
      - examveda, examveda
      - Exa
      - None of the mentioned
    answer: 0
    explanation: "examveda is the correct answer to “What will be the output of the following Python code? (If entered name is examveda) import sys print 'Enter your name: ', name = '' while True: c = sys.stdin.read(1) if c == '\\n': break name = name + c print 'Your name is:', name”. This question is standard in competitive examination syllabi for Files Handling In Python."
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: What happens if no arguments are passed to the seek function?
    options:
      - file position is set to the start of file
      - file position is set to the end of file
      - file position remains unchanged
      - error
    answer: 3
    explanation: error is the correct answer to “What happens if no arguments are passed to the seek function”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: Correct syntax of file.readlines() is?
    options:
      - fileObject.readlines( sizehint )
      - fileObject.readlines()
      - fileObject.readlines(sequence)
      - none of the mentioned
    answer: 0
    explanation: fileObject.readlines( sizehint ) is the correct answer to “Correct syntax of file.readlines() is”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: Which of the following mode will refer to binary data?
    options:
      - r
      - w
      - +
      - b
    answer: 0
    explanation: r is the correct answer to “Which of the following mode will refer to binary data”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: How do you get the name of a file from a file object (fp)?
    options:
      - fp.name
      - fp.file(name)
      - self.__name__(fp)
      - fp.__name__()
    answer: 0
    explanation: fp.name is the correct answer to “How do you get the name of a file from a file object (fp)”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: In file handling, what does this terms means "r, a"?
    options:
      - read, append
      - append, read
      - write, append
      - none of the mentioned
    answer: 0
    explanation: read, append is the correct answer to “In file handling, what does this terms means "r, a"”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: What is the use of tell() method in python?
    options:
      - tells you the current position within the file
      - tells you the end position within the file
      - tells you the file is opened or not
      - none of the mentioned
    answer: 0
    explanation: tells you the current position within the file is the correct answer to “What is the use of tell() method in python”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: Which function is used to write a list of string in a file?
    options:
      - writeline()
      - writelines()
      - writestatement()
      - writefullline()
    answer: 0
    explanation: writeline() is the correct answer to “Which function is used to write a list of string in a file”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: What does the w mode indicate when opening a file in Python?
    options:
      - Write mode
      - With mode
      - Wrong mode
      - Wide mode
    answer: 0
    explanation: Write mode is the correct answer to “What does the w mode indicate when opening a file in Python”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
---


