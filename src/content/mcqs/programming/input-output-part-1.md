---
title: Input Output — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Input Output — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: input-output-part-1
topicName: Input Output — Part 1
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
    question: When comparing java.io.BufferedWriter and java.io.FileWriter, which capability exist as a method in only one of two ?
    options:
      - closing the stream
      - flushing the stream
      - writting to the stream
      - writting a line separator to the stream
      - None of these
    answer: 3
    explanation: A newLine() method is provided in BufferedWriter which is not in FileWriter.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: Which of these class contains the methods used to write in a file?
    options:
      - FileStream
      - FileInputStream
      - BUfferedOutputStream
      - FileBufferStream
    answer: 2
    explanation: The class BufferedOutputStream in Java contains methods that are used to write data into a file. It provides buffering for output streams, which helps to improve efficiency by reducing the number of write operations to the underlying file.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What is the length of the application box made by the following Java program? import java.awt.*; import java.applet.*; public class myapplet extends Applet { public void paint(Graphics g) { g.drawString("A Simple Applet", 20, 20); } }
    options:
      - "20"
      - "50"
      - "100"
      - System dependent
    answer: 3
    explanation: The Java program provided uses the AWT and Applet classes to draw a string on the screen using the paint() method. However, it does not explicitly specify the size (length or width) of the application box (applet window). When an applet does not set its size using methods like setSize() , the actual size of the applet is determined by the HTML page that embeds the applet or by the applet viewer or browser displaying it. Because different systems and viewers may allocate different default sizes, the length of the application box is therefore system dependent .
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: Which class is used to read data from the keyboard in Java?
    options:
      - Scanner
      - FileReader
      - BufferedReader
      - InputStream
    answer: 0
    explanation: Scanner is the correct answer to “Which class is used to read data from the keyboard in Java”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: What is the purpose of the `System.out.println()` method in Java?
    options:
      - It performs mathematical operations
      - It writes data to a file
      - It reads data from the keyboard
      - It prints data to the standard output stream followed by a newline
    answer: 3
    explanation: It prints data to the standard output stream followed by a newline is the correct answer to “What is the purpose of the `System.out.println()` method in Java”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: Which method is used to write data to a file in Java?
    options:
      - read()
      - print()
      - write()
      - scan()
    answer: 2
    explanation: write() is the correct answer to “Which method is used to write data to a file in Java”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: How can you close a file after reading or writing in Java?
    options:
      - By using the `terminate()` method
      - By using the `close()` method of the file stream
      - By using the `readLine()` method
      - By using the `exit()` method
    answer: 1
    explanation: By using the `close()` method of the file stream is the correct answer to “How can you close a file after reading or writing in Java”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What is the purpose of the `FileInputStream` class in Java?
    options:
      - It is used to perform mathematical operations
      - It is used to write data to a file
      - It is used to read data from a file
      - It is used to read data from the keyboard
    answer: 2
    explanation: It is used to read data from a file is the correct answer to “What is the purpose of the `FileInputStream` class in Java”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: Which class is used to read data from a file in Java?
    options:
      - Scanner
      - BufferedWriter
      - OutputStream
      - FileReader
    answer: 3
    explanation: FileReader is the correct answer to “Which class is used to read data from a file in Java”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What is the purpose of the `BufferedReader` class in Java?
    options:
      - It is used to read data from a file efficiently
      - It is used to read data from the keyboard
      - It is used to write data to a file
      - It is used to perform mathematical operations
    answer: 0
    explanation: It is used to read data from a file efficiently is the correct answer to “What is the purpose of the `BufferedReader` class in Java”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: Which method is used to read a line of text from the keyboard in Java?
    options:
      - "`nextLine()`"
      - "`printLine()`"
      - "`writeLine()`"
      - "`readLine()`"
    answer: 3
    explanation: "`readLine()` is the correct answer to “Which method is used to read a line of text from the keyboard in Java”. This question is standard in competitive examination syllabi for Input Output."
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: In Java, what does the `FileOutputStream` class do?
    options:
      - It is used to read data from a file
      - It is used to read data from the keyboard
      - It is used to write data to a file
      - It is used to create directories
    answer: 2
    explanation: It is used to write data to a file is the correct answer to “In Java, what does the `FileOutputStream` class do”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What is the purpose of the `PrintWriter` class in Java?
    options:
      - It is used to read binary data from a file
      - It is used to write formatted text to a file
      - It is used to read text from the keyboard
      - It is used to read & write binary data from a file
    answer: 1
    explanation: It is used to write formatted text to a file is the correct answer to “What is the purpose of the `PrintWriter` class in Java”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: Which class is used to write binary data to a file in Java?
    options:
      - "`InputStream`"
      - "`BufferedReader`"
      - "`FileOutputStream`"
      - "`FileReader`"
    answer: 2
    explanation: "`FileOutputStream` is the correct answer to “Which class is used to write binary data to a file in Java”. This question is standard in competitive examination syllabi for Input Output."
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: In Java, which method is used to write binary data to a file?
    options:
      - "`read()`"
      - "`print()`"
      - "`scan()`"
      - "`write()`"
    answer: 3
    explanation: "`write()` is the correct answer to “In Java, which method is used to write binary data to a file”. This question is standard in competitive examination syllabi for Input Output."
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What is the purpose of the `FileWriter` class in Java?
    options:
      - It is used to write character data to a file
      - It is used to read character data from a file
      - It is used to write binary data to a file
      - It is used to read binary data from a file
    answer: 0
    explanation: It is used to write character data to a file is the correct answer to “What is the purpose of the `FileWriter` class in Java”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: Which class is used to write formatted text to a file in Java?
    options:
      - "`OutputStream`"
      - "`BufferedWriter`"
      - "`Scanner`"
      - "`PrintWriter`"
    answer: 3
    explanation: "`PrintWriter` is the correct answer to “Which class is used to write formatted text to a file in Java”. This question is standard in competitive examination syllabi for Input Output."
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: In Java, what is the primary purpose of the `DataInputStream` class?
    options:
      - It is used to read text data from a file
      - It is used to write binary data to a file
      - It is used to read primitive data types from an input stream
      - It is used to perform mathematical operations
    answer: 2
    explanation: It is used to read primitive data types from an input stream is the correct answer to “In Java, what is the primary purpose of the `DataInputStream` class”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: In Java, what does the `DataOutputStream` class do?
    options:
      - It is used to read binary data from a file
      - It is used to write primitive data types to an output stream
      - It is used to read data from the keyboard
      - It is used to read & write binary data from a text file
    answer: 1
    explanation: It is used to write primitive data types to an output stream is the correct answer to “In Java, what does the `DataOutputStream` class do”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: Which class is used to write primitive data types to an output stream in Java?
    options:
      - "`FileReader`"
      - "`FileWriter`"
      - "`DataOutputStream`"
      - "`DataInputStream`"
    answer: 2
    explanation: "`DataOutputStream` is the correct answer to “Which class is used to write primitive data types to an output stream in Java”. This question is standard in competitive examination syllabi for Input Output."
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: What is the purpose of the `RandomAccessFile` class in Java?
    options:
      - It is used to read data from the keyboard
      - It is used to write data to a file
      - It is used to perform mathematical operations
      - It allows reading and writing at random positions in a file
    answer: 3
    explanation: It allows reading and writing at random positions in a file is the correct answer to “What is the purpose of the `RandomAccessFile` class in Java”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: In Java, which class is used to read and write character streams?
    options:
      - "`Reader` and `Writer` classes"
      - "`InputStream` and `OutputStream` classes"
      - "`BufferedReader` and `PrintWriter` classes"
      - "`DataInputStream` and `DataOutputStream` classes"
    answer: 0
    explanation: "`Reader` and `Writer` classes is the correct answer to “In Java, which class is used to read and write character streams”. This question is standard in competitive examination syllabi for Input Output."
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: What is the primary purpose of the `File` class in Java?
    options:
      - It is used to perform mathematical operations
      - It is used to write data to a file
      - It is used to read data from a file
      - It represents a file or directory pathname
    answer: 3
    explanation: It represents a file or directory pathname is the correct answer to “What is the primary purpose of the `File` class in Java”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: In Java, how can you check if a file or directory exists using the `File` class?
    options:
      - By using the `createNewFile()` method
      - By using the `read()` method
      - By using the `exists()` method
      - By using the `write()` method
    answer: 2
    explanation: By using the `exists()` method is the correct answer to “In Java, how can you check if a file or directory exists using the `File` class”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: Which method is used to delete a file or directory in Java?
    options:
      - "`erase()`"
      - "`delete()`"
      - "`discard()`"
      - "`exit()`"
    answer: 1
    explanation: "`delete()` is the correct answer to “Which method is used to delete a file or directory in Java”. This question is standard in competitive examination syllabi for Input Output."
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: In Java, what is the purpose of the `File.separator` constant?
    options:
      - It represents the parent directory
      - It represents the current directory
      - It represents the platform-specific file separator (e.g., `/` or ``)
      - It represents the ASCII value of the separator character
    answer: 2
    explanation: It represents the platform-specific file separator (e.g., `/` or ``) is the correct answer to “In Java, what is the purpose of the `File.separator` constant”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: What is the difference between character streams and byte streams in Java?
    options:
      - Character streams are used for reading and writing binary data, while byte streams are used for text data
      - There is no difference between character streams and byte streams
      - Character streams are more efficient than byte streams
      - Character streams are used for reading and writing text data, while byte streams are used for reading and writing binary data
    answer: 3
    explanation: Character streams are used for reading and writing text data, while byte streams are used for reading and writing binary data is the correct answer to “What is the difference between character streams and byte streams in Java”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: In Java, what is the purpose of the `BufferedWriter` class?
    options:
      - It is used to write character data to a file efficiently
      - It is used to write binary data to a file
      - It is used to read character data from a file
      - It is used to read binary data from a file
    answer: 0
    explanation: It is used to write character data to a file efficiently is the correct answer to “In Java, what is the purpose of the `BufferedWriter` class”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: Which class is used for reading character streams in a platform-independent way in Java?
    options:
      - "`BufferedReader`"
      - "`DataInputStream`"
      - "`FileReader`"
      - "`InputStreamReader`"
    answer: 3
    explanation: "`InputStreamReader` is the correct answer to “Which class is used for reading character streams in a platform-independent way in Java”. This question is standard in competitive examination syllabi for Input Output."
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: In Java, what is the primary purpose of the `PrintStream` class?
    options:
      - It is used to read binary data from a file
      - It is used to write binary data to a file
      - It is used to write formatted text to an output stream
      - It is used to read text data from the keyboard
    answer: 2
    explanation: It is used to write formatted text to an output stream is the correct answer to “In Java, what is the primary purpose of the `PrintStream` class”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: What is the difference between reading and writing character streams in Java?
    options:
      - Both reading and writing character streams use `InputStream` classes
      - Reading character streams use `Reader` classes, while writing character streams use `Writer` classes
      - Both reading and writing character streams use `OutputStream` classes
      - Writing character streams use `InputStream` classes
    answer: 1
    explanation: Reading character streams use `Reader` classes, while writing character streams use `Writer` classes is the correct answer to “What is the difference between reading and writing character streams in Java”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: In Java, which class is used to read binary data from an input stream?
    options:
      - "`PrintStream`"
      - "`BufferedReader`"
      - "`DataInputStream`"
      - "`FileInputStream`"
    answer: 2
    explanation: "`DataInputStream` is the correct answer to “In Java, which class is used to read binary data from an input stream”. This question is standard in competitive examination syllabi for Input Output."
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: What is the purpose of the `Console` class in Java?
    options:
      - It provides methods for reading and writing binary data
      - It provides methods for creating directories
      - It provides methods for performing mathematical operations
      - It provides methods for reading and writing character-based console input and output
    answer: 3
    explanation: It provides methods for reading and writing character-based console input and output is the correct answer to “What is the purpose of the `Console` class in Java”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: System class is defined in .................
    options:
      - java.util package
      - java.lang package
      - java.io package
      - java.awt package
      - None of these
    answer: 1
    explanation: java.lang package is the correct answer to “System class is defined in .................”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: Which of these classes defined in java.io and used for file-handling are abstract? A. InputStream B. PrintStream C. Reader D. FileInputStream E. FileWriter
    options:
      - Only A
      - Only C
      - A and C
      - B and D
      - A, B and E
    answer: 2
    explanation: A and C is the correct answer to “Which of these classes defined in java.io and used for file-handling are abstract? A. InputStream B. PrintStream C. Reader D. FileInputStream E. FileWriter”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: What does AWT stands for?
    options:
      - All Window Tools
      - All Writing Tools
      - Abstract Window Toolkit
      - Abstract Writing Toolkit
    answer: 2
    explanation: Abstract Window Toolkit is the correct answer to “What does AWT stands for”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: Which of these is used to perform all input & output operations in Java?
    options:
      - streams
      - Variables
      - classes
      - Methods
    answer: 0
    explanation: streams is the correct answer to “Which of these is used to perform all input & output operations in Java”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: Which of these is a type of stream in Java?
    options:
      - Integer stream
      - Short stream
      - Byte stream
      - Long stream
    answer: 2
    explanation: Byte stream is the correct answer to “Which of these is a type of stream in Java”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: Which of these classes are used by character streams for input and output operations?
    options:
      - InputStream
      - Writer
      - ReadStream
      - InputOutputStream
    answer: 1
    explanation: Writer is the correct answer to “Which of these classes are used by character streams for input and output operations”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: Which of these class is used to read from byte array?
    options:
      - InputStream
      - BufferedInputStream
      - ArrayInputStream
      - ByteArrayInputStream
    answer: 3
    explanation: ByteArrayInputStream is the correct answer to “Which of these class is used to read from byte array”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
---


