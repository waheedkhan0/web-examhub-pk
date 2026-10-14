---
title: Files Handling In Python — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Files Handling In Python — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: files-handling-in-python-part-2
topicName: Files Handling In Python — Part 2
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
    question: Which of the following is not a valid mode to open a file?
    options:
      - ab
      - rw
      - r+
      - w+
    answer: 1
    explanation: rw is the correct answer to “Which of the following is not a valid mode to open a file”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: How can you copy the contents of one file to another in Python?
    options:
      - By reading from one file and writing to another
      - By using the copy() method
      - By using the duplicate() method
      - By using the transfer() method
    answer: 0
    explanation: By reading from one file and writing to another is the correct answer to “How can you copy the contents of one file to another in Python”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Which one of the following is not attributes of file?
    options:
      - closed
      - softspace
      - rename
      - mode
    answer: 2
    explanation: rename is the correct answer to “Which one of the following is not attributes of file”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What is the use of "w" in file handling?
    options:
      - Read
      - Write
      - Append
      - None of the mentioned
    answer: 1
    explanation: Write is the correct answer to “What is the use of "w" in file handling”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: "What will be the output of the following Python code? str = raw_input(\"Enter your input: \"); print \"Received input is : \", str"
    options:
      - "Enter your input: Hello Python Received input is : Hello Python"
      - "Enter your input: Hello Python Received input is : Hello"
      - "Enter your input: Hello Python Received input is : Python"
      - None of the mentioned
    answer: 0
    explanation: "Enter your input: Hello Python Received input is : Hello Python is the correct answer to “What will be the output of the following Python code? str = raw_input(\"Enter your input: \"); print \"Received input is : \", str”. This question is standard in competitive examination syllabi for Files Handling In Python."
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: "What will be the output of the following Python code? fo = open(\"foo.txt\", \"rw+\") print \"Name of the file: \", fo.name # Assuming file has following 5 lines # This is 1st line # This is 2nd line # This is 3rd line # This is 4th line # This is 5th line for index in range(5): line = fo.next() print \"Line No %d - %s\" % (index, line) # Close opened file fo.close()"
    options:
      - Compilation Error
      - Syntax Error
      - Displays Output
      - None of the mentioned
    answer: 2
    explanation: "Displays Output is the correct answer to “What will be the output of the following Python code? fo = open(\"foo.txt\", \"rw+\") print \"Name of the file: \", fo.name # Assuming file has following 5 lines # This is 1st line # This is 2nd line # This is 3rd line # This is 4th line # This is 5th line for index in range(5): line = fo.next() print \"Line No %d - %s\" % (index, line) # Close opened file fo.close()”. This question is standard in competitive examination syllabi for Files Handling In Python."
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: "What will be the output of the following Python code? f = None for i in range (5): with open(\"data.txt\", \"w\") as f: if i > 2: break print(f.closed)"
    options:
      - "True"
      - "False"
      - None
      - Error
    answer: 0
    explanation: "True is the correct answer to “What will be the output of the following Python code? f = None for i in range (5): with open(\"data.txt\", \"w\") as f: if i > 2: break print(f.closed)”. This question is standard in competitive examination syllabi for Files Handling In Python."
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: How do you rename a file?
    options:
      - fp.name = 'new_name.txt'
      - os.rename(existing_name, new_name)
      - os.rename(fp, new_name)
      - os.set_name(existing_name, new_name)
    answer: 1
    explanation: os.rename(existing_name, new_name) is the correct answer to “How do you rename a file”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: How can you read the entire contents of a binary file in Python?
    options:
      - By using the read() method on a file object
      - By using the readlines() method on a file object
      - By using the readall() method on a file object
      - By using the readbinary() method
    answer: 0
    explanation: By using the read() method on a file object is the correct answer to “How can you read the entire contents of a binary file in Python”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: "What will be the output of the following Python code? str = input(\"Enter your input: \"); print \"Received input is : \", str"
    options:
      - "Enter your input: [x*5 for x in range(2,10,2)] Received input is : [x*5 for x in range(2,10,2)]"
      - "Enter your input: [x*5 for x in range(2,10,2)] Received input is : [10, 30, 20, 40]"
      - "Enter your input: [x*5 for x in range(2,10,2)] Received input is : [10, 10, 30, 40]"
      - None of the mentioned
    answer: 0
    explanation: "Enter your input: [x*5 for x in range(2,10,2)] Received input is : [x*5 for x in range(2,10,2)] is the correct answer to “What will be the output of the following Python code? str = input(\"Enter your input: \"); print \"Received input is : \", str”. This question is standard in competitive examination syllabi for Files Handling In Python."
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What is unpickling?
    options:
      - It is used for object serialization
      - It is used for object deserialization
      - None of the mentioned
      - All of the mentioned
    answer: 1
    explanation: It is used for object deserialization is the correct answer to “What is unpickling”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: The readlines() method returns . . . . . . . .
    options:
      - str
      - a list of lines
      - a list of single characters
      - a list of integers
    answer: 1
    explanation: a list of lines is the correct answer to “The readlines() method returns . . . . . . . .”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: "What is the output of the following code: with open('data.txt', 'r') as file: lines = file.readlines() print(len(lines))"
    options:
      - The number of lines in data.txt
      - An error will occur
      - The content of data.txt
      - The file object file
    answer: 1
    explanation: "An error will occur is the correct answer to “What is the output of the following code: with open('data.txt', 'r') as file: lines = file.readlines() print(len(lines))”. This question is standard in competitive examination syllabi for Files Handling In Python."
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: To read the next line of the file from a file object infile, we use . . . . . . . .
    options:
      - infile.read(2)
      - infile.read()
      - infile.readline()
      - infile.readlines()
    answer: 2
    explanation: infile.readline() is the correct answer to “To read the next line of the file from a file object infile, we use . . . . . . . .”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: How can you rename a file in Python?
    options:
      - By using the os.rename() function
      - By using the file.rename() method
      - By using the file.rename_to() method
      - By using the rename() method
    answer: 0
    explanation: By using the os.rename() function is the correct answer to “How can you rename a file in Python”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What is the pickling?
    options:
      - It is used for object serialization
      - It is used for object deserialization
      - None of the mentioned
      - All of the mentioned
    answer: 0
    explanation: It is used for object serialization is the correct answer to “What is the pickling”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: "What is the output of the following code: with open('data.txt', 'r') as file: content = file.read(10) print(content)"
    options:
      - The first 10 characters of data.txt
      - An error will occur
      - The content of data.txt
      - The file object file
    answer: 0
    explanation: "The first 10 characters of data.txt is the correct answer to “What is the output of the following code: with open('data.txt', 'r') as file: content = file.read(10) print(content)”. This question is standard in competitive examination syllabi for Files Handling In Python."
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: How do you close a file object (fp)?
    options:
      - close(fp)
      - fclose(fp)
      - fp.close()
      - fp.__close__()
    answer: 2
    explanation: fp.close() is the correct answer to “How do you close a file object (fp)”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: What is the use of seek() method in files?
    options:
      - sets the file's current position at the offset
      - sets the file's previous position at the offset
      - sets the file's current position within the file
      - none of the mentioned
    answer: 0
    explanation: sets the file's current position at the offset is the correct answer to “What is the use of seek() method in files”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What is the purpose of the truncate() method in file handling?
    options:
      - It resizes the file to the specified size
      - It writes data to the file
      - It closes the file
      - It deletes the file
    answer: 0
    explanation: It resizes the file to the specified size is the correct answer to “What is the purpose of the truncate() method in file handling”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: To read the remaining lines of the file from a file object infile, we use . . . . . . . .
    options:
      - infile.read(2)
      - infile.read()
      - infile.readline()
      - infile.readlines()
    answer: 3
    explanation: infile.readlines() is the correct answer to “To read the remaining lines of the file from a file object infile, we use . . . . . . . .”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What is the purpose of the a mode when opening a file in Python?
    options:
      - Append mode
      - Add mode
      - After mode
      - Alter mode
    answer: 0
    explanation: Append mode is the correct answer to “What is the purpose of the a mode when opening a file in Python”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: Which function is used to close a file in python?
    options:
      - Close()
      - Stop()
      - End()
      - Closefile()
    answer: 0
    explanation: Close() is the correct answer to “Which function is used to close a file in python”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: How do you get the current position within the file?
    options:
      - fp.seek()
      - fp.tell()
      - fp.loc
      - fp.pos
    answer: 1
    explanation: fp.tell() is the correct answer to “How do you get the current position within the file”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: How do you delete a file?
    options:
      - del(fp)
      - fp.delete()
      - os.remove('file')
      - os.delete('file')
    answer: 2
    explanation: os.remove('file') is the correct answer to “How do you delete a file”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: How can you remove a file in Python?
    options:
      - By using the os.remove() function
      - By using the file.remove() method
      - By using the file.delete() method
      - By using the remove() method
    answer: 0
    explanation: By using the os.remove() function is the correct answer to “How can you remove a file in Python”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: Which of the following is not a valid attribute of a file object (fp)?
    options:
      - fp.name
      - fp.closed
      - fp.mode
      - fp.size
    answer: 3
    explanation: fp.size is the correct answer to “Which of the following is not a valid attribute of a file object (fp)”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: What is the use of truncate() method in file?
    options:
      - truncates the file size
      - deletes the content of the file
      - deletes the file size
      - none of the mentioned
    answer: 0
    explanation: truncates the file size is the correct answer to “What is the use of truncate() method in file”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: How do you change the file position to an offset value from the start?
    options:
      - fp.seek(offset, 0)
      - fp.seek(offset, 1)
      - fp.seek(offset, 2)
      - none of the mentioned
    answer: 0
    explanation: fp.seek(offset, 0) is the correct answer to “How do you change the file position to an offset value from the start”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: How can you open a file for both reading and writing in Python?
    options:
      - By using the r+ mode
      - By using the rw mode
      - By using the readwrite mode
      - By using the rw+ mode
    answer: 0
    explanation: By using the r+ mode is the correct answer to “How can you open a file for both reading and writing in Python”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: What is the difference between r+ and w+ modes?
    options:
      - no difference
      - in r+ the pointer is initially placed at the beginning of the file and the pointer is at the end for w+
      - in w+ the pointer is initially placed at the beginning of the file and the pointer is at the end for r+
      - depends on the operating system
    answer: 1
    explanation: in r+ the pointer is initially placed at the beginning of the file and the pointer is at the end for w+ is the correct answer to “What is the difference between r+ and w+ modes”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: What is the purpose of the b mode when opening a file in Python?
    options:
      - Binary mode
      - Byte mode
      - Base mode
      - Bit mode
    answer: 0
    explanation: Binary mode is the correct answer to “What is the purpose of the b mode when opening a file in Python”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: "What is the output of the following code: with open('data.txt', 'r') as file: lines = file.read().splitlines() print(len(lines))"
    options:
      - The number of lines in data.txt
      - An error will occur
      - The content of data.txt
      - The file object file
    answer: 0
    explanation: "The number of lines in data.txt is the correct answer to “What is the output of the following code: with open('data.txt', 'r') as file: lines = file.read().splitlines() print(len(lines))”. This question is standard in competitive examination syllabi for Files Handling In Python."
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: What is the current syntax of rename() a file?
    options:
      - rename(current_file_name, new_file_name)
      - rename(new_file_name, current_file_name,)
      - rename(()(current_file_name, new_file_name))
      - none of the mentioned
    answer: 0
    explanation: rename(current_file_name, new_file_name) is the correct answer to “What is the current syntax of rename() a file”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: "What will be the output of the following Python code? fo = open(\"foo.txt\", \"wb\") print \"Name of the file: \", fo.name fo.flush() fo.close()"
    options:
      - Compilation Error
      - Runtime Error
      - No Output
      - Flushes the file when closing them
    answer: 3
    explanation: "Flushes the file when closing them is the correct answer to “What will be the output of the following Python code? fo = open(\"foo.txt\", \"wb\") print \"Name of the file: \", fo.name fo.flush() fo.close()”. This question is standard in competitive examination syllabi for Files Handling In Python."
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: What is the correct syntax of open() function?
    options:
      - file = open(file_name [, access_mode][, buffering])
      - file object = open(file_name [, access_mode][, buffering])
      - file object = open(file_name)
      - none of the mentioned
    answer: 1
    explanation: file object = open(file_name [, access_mode][, buffering]) is the correct answer to “What is the correct syntax of open() function”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: What is the purpose of the readlines() method in file handling?
    options:
      - It reads all lines of a file into a list
      - It writes lines to the file
      - It appends lines to the file
      - It closes the file
    answer: 0
    explanation: It reads all lines of a file into a list is the correct answer to “What is the purpose of the readlines() method in file handling”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: Is it possible to create a text file in python?
    options:
      - "Yes"
      - "No"
      - Machine dependent
      - All of the mentioned
    answer: 0
    explanation: Yes is the correct answer to “Is it possible to create a text file in python”. This question is standard in competitive examination syllabi for Files Handling In Python.
    keyConcept: Files Handling In Python
    testedIn:
      - FPSC
      - PPSC
---


