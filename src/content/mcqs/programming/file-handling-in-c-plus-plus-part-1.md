---
title: File Handling In C Plus Plus — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on File Handling In C Plus Plus — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: file-handling-in-c-plus-plus-part-1
topicName: File Handling In C Plus Plus — Part 1
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
    question: What is the function used to create a new file in C++?
    options:
      - create()
      - newFile()
      - fopen()
      - ofstream file()
    answer: 3
    explanation: "The correct answer is D: ofstream file() Let's break down why: Option A: create() - There isn't a standard C++ function called create() specifically for file creation. Option B: newFile() - Similarly, newFile() is not a built-in C++ function for file handling. Option C: fopen() - fopen() is a C function for file input/output, and while it *can* be used in C++, it's more common and idiomatic to use C++'s file stream classes. fopen() also requires you to specify a mode (like \"w\" for write) which determines if you want to create the file, overwrite it, or append to it. It's generally less type-safe than C++ streams. Option D: ofstream file() - This is the C++ way to create a new file. ofstream is a class from the C++ standard library designed for output file streams. By creating an object of type ofstream (e.g., ofstream file; ), you can automatically create a new file or open an existing one for writing (if the file doesn't exist, it will be created). You can then use the file object to write data to the file. For Example : ofstream myFile(\"filename.txt\"); will create a file named \"filename.txt\" or overwrite if it already exist ."
    keyConcept: File Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: Which header file is required for file handling in C++?
    options:
      - <iostream>
      - <fstream>
      - <file>
      - <filestream>
    answer: 1
    explanation: <fstream> is the correct answer to “Which header file is required for file handling in C++”. This question is standard in competitive examination syllabi for File Handling In C Plus Plus.
    keyConcept: File Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What is the function used to open a file in C++?
    options:
      - open()
      - read()
      - fopen()
      - start()
    answer: 0
    explanation: open() is the correct answer to “What is the function used to open a file in C++”. This question is standard in competitive examination syllabi for File Handling In C Plus Plus.
    keyConcept: File Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: How do you close a file in C++?
    options:
      - file.close()
      - closeFile()
      - fclose()
      - endFile()
    answer: 0
    explanation: file.close() is the correct answer to “How do you close a file in C++”. This question is standard in competitive examination syllabi for File Handling In C Plus Plus.
    keyConcept: File Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: Which mode is used to open a file for writing in C++?
    options:
      - read
      - append
      - write
      - update
    answer: 2
    explanation: write is the correct answer to “Which mode is used to open a file for writing in C++”. This question is standard in competitive examination syllabi for File Handling In C Plus Plus.
    keyConcept: File Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What is the correct syntax for writing data to a file in C++?
    options:
      - file.write(data)
      - write(file, data)
      - file << data
      - data << file
    answer: 2
    explanation: file << data is the correct answer to “What is the correct syntax for writing data to a file in C++”. This question is standard in competitive examination syllabi for File Handling In C Plus Plus.
    keyConcept: File Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: How do you check if a file has been successfully opened in C++?
    options:
      - file.is_open()
      - isFileOpen()
      - file.opened()
      - isOpen(file)
    answer: 0
    explanation: file.is_open() is the correct answer to “How do you check if a file has been successfully opened in C++”. This question is standard in competitive examination syllabi for File Handling In C Plus Plus.
    keyConcept: File Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: Which of the following is used to read data from a file in C++?
    options:
      - file.read()
      - read(file)
      - file >> data
      - data >> file
    answer: 2
    explanation: file >> data is the correct answer to “Which of the following is used to read data from a file in C++”. This question is standard in competitive examination syllabi for File Handling In C Plus Plus.
    keyConcept: File Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What does the seekg() function do in C++ file handling?
    options:
      - Sets the get position pointer
      - Sets the put position pointer
      - Sets the end of file pointer
      - Sets the beginning of file pointer
    answer: 0
    explanation: Sets the get position pointer is the correct answer to “What does the seekg() function do in C++ file handling”. This question is standard in competitive examination syllabi for File Handling In C Plus Plus.
    keyConcept: File Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: Which function is used to delete a file in C++?
    options:
      - deleteFile()
      - removeFile()
      - delete()
      - remove()
    answer: 3
    explanation: remove() is the correct answer to “Which function is used to delete a file in C++”. This question is standard in competitive examination syllabi for File Handling In C Plus Plus.
    keyConcept: File Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: Which file mode is used to open a file for reading and writing in C++?
    options:
      - append
      - readwrite
      - write
      - rplus
    answer: 3
    explanation: rplus is the correct answer to “Which file mode is used to open a file for reading and writing in C++”. This question is standard in competitive examination syllabi for File Handling In C Plus Plus.
    keyConcept: File Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: How do you check if the end of a file has been reached in C++?
    options:
      - file.end_of_file()
      - endOfFile(file)
      - file.eof()
      - eof(file)
    answer: 2
    explanation: file.eof() is the correct answer to “How do you check if the end of a file has been reached in C++”. This question is standard in competitive examination syllabi for File Handling In C Plus Plus.
    keyConcept: File Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: Which function is used to get the current position of the file pointer in C++?
    options:
      - getpos()
      - currentPos()
      - tellg()
      - position()
    answer: 2
    explanation: tellg() is the correct answer to “Which function is used to get the current position of the file pointer in C++”. This question is standard in competitive examination syllabi for File Handling In C Plus Plus.
    keyConcept: File Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What is the purpose of the ios::app flag in C++ file handling?
    options:
      - Appends data to the end of the file
      - Opens the file in append mode
      - Opens the file in write mode
      - Opens the file in read mode
    answer: 1
    explanation: Opens the file in append mode is the correct answer to “What is the purpose of the ios::app flag in C++ file handling”. This question is standard in competitive examination syllabi for File Handling In C Plus Plus.
    keyConcept: File Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: Which function is used to check if a file exists in C++?
    options:
      - file.exists()
      - exists(file)
      - file.opened()
      - open(file)
    answer: 1
    explanation: exists(file) is the correct answer to “Which function is used to check if a file exists in C++”. This question is standard in competitive examination syllabi for File Handling In C Plus Plus.
    keyConcept: File Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: How do you create a new file in C++?
    options:
      - newFile()
      - createFile()
      - file.create()
      - ofstream file()
    answer: 1
    explanation: createFile() is the correct answer to “How do you create a new file in C++”. This question is standard in competitive examination syllabi for File Handling In C Plus Plus.
    keyConcept: File Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: Which file mode is used to open a file for reading only in C++?
    options:
      - write
      - append
      - read
      - ronly
    answer: 2
    explanation: read is the correct answer to “Which file mode is used to open a file for reading only in C++”. This question is standard in competitive examination syllabi for File Handling In C Plus Plus.
    keyConcept: File Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: How do you check if a file exists before opening it in C++?
    options:
      - file.exists()
      - exists(file)
      - file.is_open()
      - isOpen(file)
    answer: 0
    explanation: file.exists() is the correct answer to “How do you check if a file exists before opening it in C++”. This question is standard in competitive examination syllabi for File Handling In C Plus Plus.
    keyConcept: File Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: Which of the following is not a file stream class in C++?
    options:
      - ifstream
      - ofstream
      - fstream
      - filestream
    answer: 3
    explanation: filestream is the correct answer to “Which of the following is not a file stream class in C++”. This question is standard in competitive examination syllabi for File Handling In C Plus Plus.
    keyConcept: File Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What is the function used to write data to a file in C++?
    options:
      - file.put()
      - write(file, data)
      - file << data
      - data << file
    answer: 2
    explanation: file << data is the correct answer to “What is the function used to write data to a file in C++”. This question is standard in competitive examination syllabi for File Handling In C Plus Plus.
    keyConcept: File Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: Which function is used to set the file position in C++ file handling?
    options:
      - file.seek()
      - seekg()
      - file.position()
      - setPosition()
    answer: 1
    explanation: seekg() is the correct answer to “Which function is used to set the file position in C++ file handling”. This question is standard in competitive examination syllabi for File Handling In C Plus Plus.
    keyConcept: File Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What is the purpose of the ios::ate flag in C++ file handling?
    options:
      - Sets the get position pointer at the beginning of the file
      - Sets the get position pointer at the end of the file
      - Sets the get position pointer at the current position in the file
      - Sets the get position pointer to the specified position in the file
    answer: 1
    explanation: Sets the get position pointer at the end of the file is the correct answer to “What is the purpose of the ios::ate flag in C++ file handling”. This question is standard in competitive examination syllabi for File Handling In C Plus Plus.
    keyConcept: File Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: In C++, how do you check if a file has reached the end while reading?
    options:
      - file.eof()
      - eof(file)
      - file.end_of_file()
      - endOfFile(file)
    answer: 0
    explanation: file.eof() is the correct answer to “In C++, how do you check if a file has reached the end while reading”. This question is standard in competitive examination syllabi for File Handling In C Plus Plus.
    keyConcept: File Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: Which function is used to rewind the file pointer to the beginning of the file in C++?
    options:
      - rewind()
      - reset()
      - file.rewind()
      - file.seekg(0)
    answer: 3
    explanation: file.seekg(0) is the correct answer to “Which function is used to rewind the file pointer to the beginning of the file in C++”. This question is standard in competitive examination syllabi for File Handling In C Plus Plus.
    keyConcept: File Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: What is the function used to read a single character from a file in C++?
    options:
      - file.getch()
      - readChar()
      - file.readChar()
      - get()
    answer: 3
    explanation: get() is the correct answer to “What is the function used to read a single character from a file in C++”. This question is standard in competitive examination syllabi for File Handling In C Plus Plus.
    keyConcept: File Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Which of the following is not a valid file mode in C++?
    options:
      - w
      - a
      - r
      - x
    answer: 0
    explanation: w is the correct answer to “Which of the following is not a valid file mode in C++”. This question is standard in competitive examination syllabi for File Handling In C Plus Plus.
    keyConcept: File Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: How do you delete a file in C++?
    options:
      - file.delete()
      - deleteFile()
      - removeFile()
      - remove()
    answer: 2
    explanation: removeFile() is the correct answer to “How do you delete a file in C++”. This question is standard in competitive examination syllabi for File Handling In C Plus Plus.
    keyConcept: File Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: Which function is used to return the current file pointer position in C++?
    options:
      - currentPos()
      - tellg()
      - position()
      - getFilePos()
    answer: 1
    explanation: tellg() is the correct answer to “Which function is used to return the current file pointer position in C++”. This question is standard in competitive examination syllabi for File Handling In C Plus Plus.
    keyConcept: File Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: Which function is used to check if a file is open or not in C++?
    options:
      - isOpen()
      - isFileOpen()
      - file.is_open()
      - fileOpened()
    answer: 2
    explanation: file.is_open() is the correct answer to “Which function is used to check if a file is open or not in C++”. This question is standard in competitive examination syllabi for File Handling In C Plus Plus.
    keyConcept: File Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: What happens if you try to open a file that does not exist in C++ without specifying any flags?
    options:
      - The file will be created
      - An error will occur
      - The program will wait indefinitely
      - The file will be opened in read mode
    answer: 1
    explanation: An error will occur is the correct answer to “What happens if you try to open a file that does not exist in C++ without specifying any flags”. This question is standard in competitive examination syllabi for File Handling In C Plus Plus.
    keyConcept: File Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: Which file mode in C++ opens a file for reading and writing, and truncates it to zero length if it exists?
    options:
      - readwrite
      - truncate
      - wplus
      - truncwrite
    answer: 2
    explanation: wplus is the correct answer to “Which file mode in C++ opens a file for reading and writing, and truncates it to zero length if it exists”. This question is standard in competitive examination syllabi for File Handling In C Plus Plus.
    keyConcept: File Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: What is the difference between fstream and ofstream in C++?
    options:
      - fstream can read and write, ofstream can only write
      - ofstream can read and write, fstream can only write
      - ofstream is used for text files, fstream is used for binary files
      - fstream is used for text files, ofstream is used for binary files
    answer: 0
    explanation: fstream can read and write, ofstream can only write is the correct answer to “What is the difference between fstream and ofstream in C++”. This question is standard in competitive examination syllabi for File Handling In C Plus Plus.
    keyConcept: File Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: How do you check if a file operation in C++ has encountered an error?
    options:
      - file.is_error()
      - file.error()
      - file.fail()
      - file.has_error()
    answer: 2
    explanation: file.fail() is the correct answer to “How do you check if a file operation in C++ has encountered an error”. This question is standard in competitive examination syllabi for File Handling In C Plus Plus.
    keyConcept: File Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: What is the purpose of the ios::binary flag in C++ file handling?
    options:
      - Opens the file in binary mode
      - Opens the file in text mode
      - Opens the file in append mode
      - Opens the file in read mode
    answer: 0
    explanation: Opens the file in binary mode is the correct answer to “What is the purpose of the ios::binary flag in C++ file handling”. This question is standard in competitive examination syllabi for File Handling In C Plus Plus.
    keyConcept: File Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: Which of the following is used to close a file in C++?
    options:
      - close()
      - closeFile()
      - fclose()
      - file.close()
    answer: 3
    explanation: file.close() is the correct answer to “Which of the following is used to close a file in C++”. This question is standard in competitive examination syllabi for File Handling In C Plus Plus.
    keyConcept: File Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: In C++, how do you check if a file operation has reached the end of the file?
    options:
      - file.eof()
      - eof(file)
      - file.end_of_file()
      - endOfFile(file)
    answer: 0
    explanation: file.eof() is the correct answer to “In C++, how do you check if a file operation has reached the end of the file”. This question is standard in competitive examination syllabi for File Handling In C Plus Plus.
    keyConcept: File Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: Which function is used to set the position of the file pointer in C++ file handling?
    options:
      - seekg()
      - seekp()
      - file.setpos()
      - setpos()
    answer: 1
    explanation: seekp() is the correct answer to “Which function is used to set the position of the file pointer in C++ file handling”. This question is standard in competitive examination syllabi for File Handling In C Plus Plus.
    keyConcept: File Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: How do you check if a file exists in C++ before opening it?
    options:
      - file.exists()
      - exists(file)
      - file.opened()
      - open(file)
    answer: 0
    explanation: file.exists() is the correct answer to “How do you check if a file exists in C++ before opening it”. This question is standard in competitive examination syllabi for File Handling In C Plus Plus.
    keyConcept: File Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: What is the purpose of the ios::trunc flag in C++ file handling?
    options:
      - Truncates the file if it exists and opens it in write mode
      - Opens the file in trunc mode
      - Opens the file in read mode
      - Opens the file in append mode
    answer: 0
    explanation: Truncates the file if it exists and opens it in write mode is the correct answer to “What is the purpose of the ios::trunc flag in C++ file handling”. This question is standard in competitive examination syllabi for File Handling In C Plus Plus.
    keyConcept: File Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: Which file mode in C++ opens a file for reading and writing without truncating it if it exists?
    options:
      - readwrite
      - append
      - wplus
      - readplus
    answer: 3
    explanation: readplus is the correct answer to “Which file mode in C++ opens a file for reading and writing without truncating it if it exists”. This question is standard in competitive examination syllabi for File Handling In C Plus Plus.
    keyConcept: File Handling In C Plus Plus
    testedIn:
      - FPSC
      - PPSC
---


