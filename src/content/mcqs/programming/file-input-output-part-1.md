---
title: File Input Output — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on File Input Output — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: file-input-output-part-1
topicName: File Input Output — Part 1
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
    question: How do you read a character from a file in C?
    options:
      - getc()
      - readchar()
      - read()
      - getchar()
    answer: 0
    explanation: "The correct answer is A: getc() Let's break down why: getc() is a standard C library function specifically designed to read a single character from a file stream. It takes a file pointer (FILE*) as an argument and returns the character read (as an integer) or EOF if the end of the file is reached or an error occurs. readchar() is not a standard C function for file input. read() is a lower-level function (usually from the POSIX standard) used for reading a block of data from a file descriptor, not a single character. getchar() reads a character from standard input (stdin), which is usually the keyboard, not from a file. So, getc() is the correct function to use when you want to read a single character from a file in C."
    keyConcept: File Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: The given statement FILE *fptr;
    options:
      - Defines a pointer to the pre-defined structure type FILE
      - Defines a pointer to the user-defined structure type FILE
      - Defines a pointer to the pre-defined data type FILE DESCRIPTOR
      - Creates a file with the name fptr
      - Creates a file pointed by fptr
    answer: 0
    explanation: FILE is a pre-defined structure.
    keyConcept: File Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What are the two predefined FILE pointers in C?
    options:
      - console and error
      - stdout and stdio
      - stdout and stderr
      - stdio and stderr
      - console and stdio.
    answer: 2
    explanation: Besides the file pointers which we explicitly open by calling fopen, there are also three predefined streams. stdin is a constant file pointer corresponding to standard input, and stdout is a constant file pointer corresponding to standard output. Both of these can be used anywhere when a file pointer is called for; for example, getchar() is the same as getc(stdin) and putchar(c) is the same as putc(c, stdout). The third predefined stream is stderr. Like stdout, stderr is typically connected to the screen by default. The difference is that stderr is not redirected when the standard output is redirected.
    keyConcept: File Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: In C, which library is used for file operations such as reading and writing files?
    options:
      - stdio.h
      - iostream.h
      - fileio.h
      - files.h
    answer: 0
    explanation: stdio.h is the correct answer to “In C, which library is used for file operations such as reading and writing files”. This question is standard in competitive examination syllabi for File Input Output.
    keyConcept: File Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: Which function is used to open a file in C for writing?
    options:
      - fopen()
      - open()
      - writefile()
      - createfile()
    answer: 0
    explanation: fopen() is the correct answer to “Which function is used to open a file in C for writing”. This question is standard in competitive examination syllabi for File Input Output.
    keyConcept: File Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What does 'FILE' represent in C when working with files?
    options:
      - A built-in data type for files
      - A file descriptor
      - A file pointer
      - A file structure
    answer: 3
    explanation: A file structure is the correct answer to “What does 'FILE' represent in C when working with files”. This question is standard in competitive examination syllabi for File Input Output.
    keyConcept: File Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: How do you check if a file was opened successfully in C?
    options:
      - Use the 'filestatus' variable
      - Check the return value of fopen()
      - Use the 'fileopen' function
      - Check the file's size
    answer: 1
    explanation: Check the return value of fopen() is the correct answer to “How do you check if a file was opened successfully in C”. This question is standard in competitive examination syllabi for File Input Output.
    keyConcept: File Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: Which function is used to write data to a file in C?
    options:
      - fwrite()
      - writefile()
      - filewrite()
      - putfile()
    answer: 0
    explanation: fwrite() is the correct answer to “Which function is used to write data to a file in C”. This question is standard in competitive examination syllabi for File Input Output.
    keyConcept: File Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What is the difference between 'r' and 'w' modes when opening a file in C?
    options:
      - "'r' is for read-only and 'w' is for write-only"
      - "'r' is for reading and 'w' is for reading and writing"
      - "'r' is for read-only and 'w' is for write-only, creating a new file"
      - "'r' is for reading and 'w' is for writing, overwriting an existing file"
    answer: 3
    explanation: "'r' is for reading and 'w' is for writing, overwriting an existing file is the correct answer to “What is the difference between 'r' and 'w' modes when opening a file in C”. This question is standard in competitive examination syllabi for File Input Output."
    keyConcept: File Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What is the purpose of the 'fprintf' function in C?
    options:
      - To format and write data to a file
      - To read data from a file
      - To open a file
      - To close a file
    answer: 0
    explanation: To format and write data to a file is the correct answer to “What is the purpose of the 'fprintf' function in C”. This question is standard in competitive examination syllabi for File Input Output.
    keyConcept: File Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: Which function is used to close a file in C?
    options:
      - closefile()
      - fclose()
      - endfile()
      - fileclose()
    answer: 1
    explanation: fclose() is the correct answer to “Which function is used to close a file in C”. This question is standard in competitive examination syllabi for File Input Output.
    keyConcept: File Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: In C, what is the function of the 'feof' function?
    options:
      - To check if the file has reached the end
      - To find the size of a file
      - To check if the file is open
      - To check if the file exists
    answer: 0
    explanation: To check if the file has reached the end is the correct answer to “In C, what is the function of the 'feof' function”. This question is standard in competitive examination syllabi for File Input Output.
    keyConcept: File Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: Which function is used to move the file pointer to a specific position in a file?
    options:
      - fseek()
      - movefile()
      - setposition()
      - fileseek()
    answer: 0
    explanation: fseek() is the correct answer to “Which function is used to move the file pointer to a specific position in a file”. This question is standard in competitive examination syllabi for File Input Output.
    keyConcept: File Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What is the purpose of the 'rewind' function in C?
    options:
      - To close the file
      - To reset the file pointer to the beginning
      - To delete the file
      - To check if the file is empty
    answer: 1
    explanation: To reset the file pointer to the beginning is the correct answer to “What is the purpose of the 'rewind' function in C”. This question is standard in competitive examination syllabi for File Input Output.
    keyConcept: File Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: Which function is used to read a line of text from a file in C?
    options:
      - readtext()
      - getline()
      - fgets()
      - readline()
    answer: 2
    explanation: fgets() is the correct answer to “Which function is used to read a line of text from a file in C”. This question is standard in competitive examination syllabi for File Input Output.
    keyConcept: File Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What does the 'fread' function in C do?
    options:
      - Reads binary data from a file
      - Reads formatted data from a file
      - Reads a specific line from a file
      - Reads a character from a file
    answer: 0
    explanation: Reads binary data from a file is the correct answer to “What does the 'fread' function in C do”. This question is standard in competitive examination syllabi for File Input Output.
    keyConcept: File Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: Which function is used to rename a file in C?
    options:
      - rename()
      - changename()
      - movefile()
      - setfilename()
    answer: 0
    explanation: rename() is the correct answer to “Which function is used to rename a file in C”. This question is standard in competitive examination syllabi for File Input Output.
    keyConcept: File Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: In C, what does the 'feof' function return if the end of the file is reached?
    options:
      - "0"
      - "1"
      - "-1"
      - EOF
    answer: 3
    explanation: EOF is the correct answer to “In C, what does the 'feof' function return if the end of the file is reached”. This question is standard in competitive examination syllabi for File Input Output.
    keyConcept: File Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: How do you check if a file exists in C?
    options:
      - Use the 'fileexist' function
      - Check the return value of fopen()
      - Use the 'filestatus' variable
      - Use the 'fileopen' function
    answer: 1
    explanation: Check the return value of fopen() is the correct answer to “How do you check if a file exists in C”. This question is standard in competitive examination syllabi for File Input Output.
    keyConcept: File Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What is the purpose of the 'ftell' function in C?
    options:
      - To find the current position of the file pointer
      - To find the total number of bytes in a file
      - To check if a file is open
      - To find the file's size
    answer: 0
    explanation: To find the current position of the file pointer is the correct answer to “What is the purpose of the 'ftell' function in C”. This question is standard in competitive examination syllabi for File Input Output.
    keyConcept: File Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: Which function is used to write a character to a file in C?
    options:
      - putc()
      - writechar()
      - putchar()
      - fileputchar()
    answer: 0
    explanation: putc() is the correct answer to “Which function is used to write a character to a file in C”. This question is standard in competitive examination syllabi for File Input Output.
    keyConcept: File Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What happens if you try to open a file in 'r' mode that doesn't exist in C?
    options:
      - A new file is created
      - An error occurs, and the file remains unchanged
      - The program terminates
      - The file is deleted
    answer: 1
    explanation: An error occurs, and the file remains unchanged is the correct answer to “What happens if you try to open a file in 'r' mode that doesn't exist in C”. This question is standard in competitive examination syllabi for File Input Output.
    keyConcept: File Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: How do you read a string from a file in C?
    options:
      - fscanf()
      - readstring()
      - getline()
      - fgets()
    answer: 3
    explanation: fgets() is the correct answer to “How do you read a string from a file in C”. This question is standard in competitive examination syllabi for File Input Output.
    keyConcept: File Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: What does the 'remove' function in C do?
    options:
      - Deletes a file
      - Renames a file
      - Closes a file
      - Appends data to a file
    answer: 0
    explanation: Deletes a file is the correct answer to “What does the 'remove' function in C do”. This question is standard in competitive examination syllabi for File Input Output.
    keyConcept: File Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: In C, what is the purpose of the 'fflush' function?
    options:
      - To flush the standard input buffer
      - To flush the standard output buffer
      - To close a file
      - To check if a file exists
    answer: 1
    explanation: To flush the standard output buffer is the correct answer to “In C, what is the purpose of the 'fflush' function”. This question is standard in competitive examination syllabi for File Input Output.
    keyConcept: File Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Which function is used to create a new directory in C?
    options:
      - createdir()
      - makedir()
      - mkdir()
      - newfolder()
    answer: 2
    explanation: mkdir() is the correct answer to “Which function is used to create a new directory in C”. This question is standard in competitive examination syllabi for File Input Output.
    keyConcept: File Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: How do you write an integer to a file in C?
    options:
      - putint()
      - fprintf()
      - writeint()
      - filewriteint()
    answer: 1
    explanation: fprintf() is the correct answer to “How do you write an integer to a file in C”. This question is standard in competitive examination syllabi for File Input Output.
    keyConcept: File Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: What is the return value of 'putc' if it fails to write a character to a file in C?
    options:
      - "0"
      - "1"
      - "-1"
      - EOF
    answer: 3
    explanation: EOF is the correct answer to “What is the return value of 'putc' if it fails to write a character to a file in C”. This question is standard in competitive examination syllabi for File Input Output.
    keyConcept: File Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: Which function is used to read and write data in binary mode in C?
    options:
      - fread()
      - fwritedata()
      - readbinary()
      - writebinary()
    answer: 0
    explanation: fread() is the correct answer to “Which function is used to read and write data in binary mode in C”. This question is standard in competitive examination syllabi for File Input Output.
    keyConcept: File Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: What is the purpose of the 'fileno' function in C?
    options:
      - To find the file number associated with a file
      - To check if a file exists
      - To get the file's size
      - To close a file
    answer: 0
    explanation: To find the file number associated with a file is the correct answer to “What is the purpose of the 'fileno' function in C”. This question is standard in competitive examination syllabi for File Input Output.
    keyConcept: File Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: The function fprintf is used in the program ...........
    options:
      - When too many printf calls have been used in the program.
      - In place of printf, as it uses more memory.
      - When the output is to be printed on to a file.
      - When the type of the variables to be printed are not known.
      - If mixed data type variables are required to be printed on to the memory.
    answer: 2
    explanation: When the output is to be printed on to a file. is the correct answer to “The function fprintf is used in the program ...........”. This question is standard in competitive examination syllabi for File Input Output.
    keyConcept: File Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: Which one of the following is valid for opening a read-only ASCII file?
    options:
      - fileOpen(filename, "r")
      - fopen(filename, "ra")
      - fileOpne(filename, read)
      - fopen(filename, "read")
      - fopen(filename, "r")
    answer: 4
    explanation: fopen(filename, "r") is the correct answer to “Which one of the following is valid for opening a read-only ASCII file”. This question is standard in competitive examination syllabi for File Input Output.
    keyConcept: File Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: Choose the correct difference between getc() and fgetc().
    options:
      - If it is not a macro, it may evaluate stream more than once
      - if it is amacro, it may not evaluate stream more than once
      - if it is a macro, it may evaluate stream more than once
      - no difference between fgetc() and getc()
    answer: 2
    explanation: if it is a macro, it may evaluate stream more than once is the correct answer to “Choose the correct difference between getc() and fgetc().”. This question is standard in competitive examination syllabi for File Input Output.
    keyConcept: File Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: . . . . . . . . is an optional argument that gives the maximum number of characters to be read.
    options:
      - modifiers
      - width
      - precision
      - length
    answer: 1
    explanation: width is the correct answer to “. . . . . . . . is an optional argument that gives the maximum number of characters to be read.”. This question is standard in competitive examination syllabi for File Input Output.
    keyConcept: File Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: "What will be the output of the following C code? #include <stdio.h> struct p { struct p *next; int x; }; int main() { struct p* p1 = malloc(sizeof(struct p)); p1->x = 1; p1->next = malloc(sizeof(struct p)); printf(\"%d\\n\", p1->next->x); return 0; }"
    options:
      - Compile time error
      - "1"
      - Somegarbage value
      - "0"
    answer: 2
    explanation: "Somegarbage value is the correct answer to “What will be the output of the following C code? #include <stdio.h> struct p { struct p *next; int x; }; int main() { struct p* p1 = malloc(sizeof(struct p)); p1->x = 1; p1->next = malloc(sizeof(struct p)); printf(\"%d\\n\", p1->next->x); return 0; }”. This question is standard in competitive examination syllabi for File Input Output."
    keyConcept: File Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: If the conversion characters of int d, i, o, u and x are preceded by h, it indicates?
    options:
      - A pointer to int
      - A pointer to short
      - A pointer to long
      - A pointer to char
    answer: 1
    explanation: A pointer to short is the correct answer to “If the conversion characters of int d, i, o, u and x are preceded by h, it indicates”. This question is standard in competitive examination syllabi for File Input Output.
    keyConcept: File Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: Which among the following mathematical function do not have a "double" return-type?
    options:
      - srand(x)
      - ceil(x)
      - floor(x)
      - both ceil(x); and floor(x)
    answer: 0
    explanation: srand(x) is the correct answer to “Which among the following mathematical function do not have a "double" return-type”. This question is standard in competitive examination syllabi for File Input Output.
    keyConcept: File Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: Which of the following function compares 2 strings with case-insensitively?
    options:
      - strcmp(s, t)
      - strcmpcase(s, t)
      - strcasecmp(s, t)
      - strchr(s, t)
    answer: 2
    explanation: strcasecmp(s, t) is the correct answer to “Which of the following function compares 2 strings with case-insensitively”. This question is standard in competitive examination syllabi for File Input Output.
    keyConcept: File Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: What is FILE reserved word?
    options:
      - A structure tag declared in stdio.h
      - One of the basic data types in c
      - Pointer to the structure defined in stdio.h
      - It is a type name defined in stdio.h
    answer: 3
    explanation: It is a type name defined in stdio.h is the correct answer to “What is FILE reserved word”. This question is standard in competitive examination syllabi for File Input Output.
    keyConcept: File Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: "What will be the output of the following C code? #include <stdio.h> #include <math.h> int main() { unsigned int i = -1; printf(\"%f\\n\", fabs(i)); return 0; }"
    options:
      - Compile time error
      - "1"
      - "-1"
      - None of the mentioned
    answer: 3
    explanation: "None of the mentioned is the correct answer to “What will be the output of the following C code? #include <stdio.h> #include <math.h> int main() { unsigned int i = -1; printf(\"%f\\n\", fabs(i)); return 0; }”. This question is standard in competitive examination syllabi for File Input Output."
    keyConcept: File Input Output
    testedIn:
      - FPSC
      - PPSC
---


