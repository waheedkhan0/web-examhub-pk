---
title: File System MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on File System with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: file-system
topicName: File System
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
    question: Which one of the following PHP function is used to determine a file’s last access time?
    options:
      - fileltime()
      - filectime()
      - fileatime()
      - filetime()
    answer: 2
    explanation: The fileatime() function returns a file’s last access time in Unix timestamp format or FALSE on error.
    keyConcept: File System
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: Which one of the following function is capable of reading a specific number of characters form a file?
    options:
      - fgets()
      - fget()
      - fileget()
      - filegets()
    answer: 0
    explanation: Its prototype is string fgets(resource handle [, int length]). If the optional length parameter is omitted, 1024 character is assumed.
    keyConcept: File System
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Which function sets the file filename’s last-modified and last-accessed times?
    options:
      - sets()
      - set()
      - touch()
      - touched()
    answer: 2
    explanation: Its prototype is int touch(string filename [, int time [, int atime]]). It returns TRUE on success or FALSE on error.
    keyConcept: File System
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: Which one of the following function reads a directory into an Array?
    options:
      - scandir()
      - readdir()
      - scandirectory()
      - readdirectory()
    answer: 0
    explanation: It returns an array consisting of files and directories found in directory or returns FALSE on error.
    keyConcept: File System
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: The ........... function is used to read a single character from a file.
    options:
      - fgetc()
      - fgets()
      - fget()
      - fgetf()
    answer: 0
    explanation: "Option A: fgetc() This function in PHP is used to read a single character from a file. It retrieves the next character from the file pointer and advances the file pointer position to the next character. Option B: fgets() The fgets() function is used to read a line from a file. It retrieves a line of text from the file pointer, including the newline character at the end of the line. Option C: fget() There is no fget() function in PHP related to file reading. This option is incorrect. Option D: fgetf() There is no fgetf() function in PHP related to file reading. This option is incorrect. Conclusion: The function used to read a single character from a file in PHP is fgetc() (Option A). This function is specifically designed to fetch individual characters from the file, making it the correct answer to the question."
    keyConcept: File System
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: The filesize() function returns the file size in ___________
    options:
      - bits
      - bytes
      - kilobytes
      - gigabytes
    answer: 1
    explanation: bytes is the correct answer to “The filesize() function returns the file size in ___________”. This question is standard in competitive examination syllabi for File System.
    keyConcept: File System
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: Which one of the following function is capable of reading a file into an array?
    options:
      - file()
      - arrfile()
      - arr_file()
      - file_arr()
    answer: 0
    explanation: file() is the correct answer to “Which one of the following function is capable of reading a file into an array”. This question is standard in competitive examination syllabi for File System.
    keyConcept: File System
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: Which one of the following function is capable of reading a file into a string variable?
    options:
      - file_contents()
      - file_get_contents()
      - file_content()
      - file_get_content()
    answer: 1
    explanation: file_get_contents() is the correct answer to “Which one of the following function is capable of reading a file into a string variable”. This question is standard in competitive examination syllabi for File System.
    keyConcept: File System
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: Which one of the following function operates similarly to fgets(), except that it also strips any HTML and PHP tags form the input?
    options:
      - fgetsh()
      - fgetsp()
      - fgetsa()
      - fgetss()
    answer: 3
    explanation: fgetss() is the correct answer to “Which one of the following function operates similarly to fgets(), except that it also strips any HTML and PHP tags form the input”. This question is standard in competitive examination syllabi for File System.
    keyConcept: File System
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: Which one of the following function outputs the contents of a string variable to the specified resource?
    options:
      - filewrite()
      - fwrite()
      - filewrites()
      - fwrites()
    answer: 1
    explanation: fwrite() is the correct answer to “Which one of the following function outputs the contents of a string variable to the specified resource”. This question is standard in competitive examination syllabi for File System.
    keyConcept: File System
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: Which function is useful when you want to output the executed command’s result?
    options:
      - out_cmm()
      - out_system()
      - cmm()
      - system()
    answer: 3
    explanation: system() is the correct answer to “Which function is useful when you want to output the executed command’s result”. This question is standard in competitive examination syllabi for File System.
    keyConcept: File System
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: Which of the following functions retrieve the entire contents of a file in such a way that it can be used as part of an expression? 1. file_get_contents() 2. fgets() 3. fopen() 4. file() 5. readfile()
    options:
      - Option 2 and 4
      - Option 1 and 5
      - Option 1 and 4
      - Option 3 and 4
    answer: 2
    explanation: Option 1 and 4 is the correct answer to “Which of the following functions retrieve the entire contents of a file in such a way that it can be used as part of an expression? 1. file_get_contents() 2. fgets() 3. fopen() 4. file() 5. readfile()”. This question is standard in competitive examination syllabi for File System.
    keyConcept: File System
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: fgets() is used to read a file one line at a time.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “fgets() is used to read a file one line at a time.”. This question is standard in competitive examination syllabi for File System.
    keyConcept: File System
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What is the difference between stat() and fstat()?
    options:
      - While stat() works on open file pointers, fstat() works on files specified by pathname
      - While fstat() works on open file pointers, stat() works on files specified by pathname
      - fstat() has nothing to do with files
      - stat() has nothing to do with files
      - fstat() is an alias of stat()
    answer: 1
    explanation: While fstat() works on open file pointers, stat() works on files specified by pathname is the correct answer to “What is the difference between stat() and fstat()”. This question is standard in competitive examination syllabi for File System.
    keyConcept: File System
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: flock() is used to unlock a file so that two or more people do not get access to it at the same time.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “flock() is used to unlock a file so that two or more people do not get access to it at the same time.”. This question is standard in competitive examination syllabi for File System.
    keyConcept: File System
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: Which of the following functions reads the entire contents of a file? 1. fgets() 2. file_get_contents() 3. fread() 4. readfile() 5. file()
    options:
      - Option 3 and 5
      - Option 1, 3 and 4
      - Option 2, 4 and 5
      - Option 2 and 4
    answer: 2
    explanation: Option 2, 4 and 5 is the correct answer to “Which of the following functions reads the entire contents of a file? 1. fgets() 2. file_get_contents() 3. fread() 4. readfile() 5. file()”. This question is standard in competitive examination syllabi for File System.
    keyConcept: File System
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What is the purpose of basename() function?
    options:
      - Returns the last accessed time of the file
      - Returns the first accessed time of the file
      - Strips of the path and returns the file name
      - Strips of the path and returns the folder name
    answer: 2
    explanation: Strips of the path and returns the file name is the correct answer to “What is the purpose of basename() function”. This question is standard in competitive examination syllabi for File System.
    keyConcept: File System
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: What should you do if your script is having problem recognizing file endings from a text file saved on a platform different from the one you’re reading it on?
    options:
      - Change the auto_detect_line_endings INI setting
      - Use a regular expression to detect the last letter of a line
      - Use fpos()
      - Use ftok()
      - Read the file one character at a time
    answer: 0
    explanation: Change the auto_detect_line_endings INI setting is the correct answer to “What should you do if your script is having problem recognizing file endings from a text file saved on a platform different from the one you’re reading it on”. This question is standard in competitive examination syllabi for File System.
    keyConcept: File System
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: The ............ function checks if the "end-of-file" (EOF) has been reached.
    options:
      - f_eof()
      - f_of()
      - feofs()
      - feof()
    answer: 3
    explanation: feof() is the correct answer to “The ............ function checks if the "end-of-file" (EOF) has been reached.”. This question is standard in competitive examination syllabi for File System.
    keyConcept: File System
    testedIn:
      - FPSC
      - PPSC
---


