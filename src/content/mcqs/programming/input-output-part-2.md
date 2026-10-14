---
title: Input Output — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Input Output — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: input-output-part-2
topicName: Input Output — Part 2
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
    question: What will be the output of the following Java program if input given is 'abcqfghqbcd'? class Input_Output { public static void main(String args[]) throws IOException { char c; BufferedReader obj = new BufferedReader(new InputStreamReader(System.in)); do { c = (char) obj.read(); System.out.print(c); } while(c != 'q'); } }
    options:
      - abcqfgh
      - abc
      - abcq
      - abcqfghq
    answer: 2
    explanation: abcq is the correct answer to “What will be the output of the following Java program if input given is 'abcqfghqbcd'? class Input_Output { public static void main(String args[]) throws IOException { char c; BufferedReader obj = new BufferedReader(new InputStreamReader(System.in)); do { c = (char) obj.read(); System.out.print(c); } while(c != 'q'); } }”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: What will be the output of the following Java program if input given is "abc'def/'egh"? class Input_Output { public static void main(String args[]) throws IOException { char c; BufferedReader obj = new BufferedReader(new InputStreamReader(System.in)); do { c = (char) obj.read(); System.out.print(c); } while(c!='\''); } }
    options:
      - abc'
      - abcdef/'
      - abc'def/'egh
      - abcqfghq
    answer: 0
    explanation: abc' is the correct answer to “What will be the output of the following Java program if input given is "abc'def/'egh"? class Input_Output { public static void main(String args[]) throws IOException { char c; BufferedReader obj = new BufferedReader(new InputStreamReader(System.in)); do { c = (char) obj.read(); System.out.print(c); } while(c!='\''); } }”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What will be the output of the following Java program? class output { public static void main(String args[]) { StringBuffer c = new StringBuffer("Hello"); System.out.println(c.length()); } }
    options:
      - "4"
      - "5"
      - "6"
      - "7"
    answer: 1
    explanation: 5 is the correct answer to “What will be the output of the following Java program? class output { public static void main(String args[]) { StringBuffer c = new StringBuffer("Hello"); System.out.println(c.length()); } }”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: Which exception is thrown by read() method?
    options:
      - IOException
      - InterruptedException
      - SystemException
      - SystemInputException
    answer: 0
    explanation: IOException is the correct answer to “Which exception is thrown by read() method”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: Which of these is used to read a string from the input stream?
    options:
      - get()
      - getLine()
      - read()
      - readLine()
    answer: 2
    explanation: read() is the correct answer to “Which of these is used to read a string from the input stream”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: Which of these class is used to read characters and strings in Java from console?
    options:
      - BufferedReader
      - StringReader
      - BufferedStreamReader
      - InputStreamReader
    answer: 0
    explanation: BufferedReader is the correct answer to “Which of these class is used to read characters and strings in Java from console”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: Which of these class is implemented by FilterInputStream class?
    options:
      - InputStream
      - InputOutputStream
      - BufferedInputStream
      - SequenceInputStream
    answer: 0
    explanation: InputStream is the correct answer to “Which of these class is implemented by FilterInputStream class”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What will be the output of the following Java program if input given is "Hello stop World"? class Input_Output { public static void main(String args[]) throws IOException { string str; BufferedReader obj = new BufferedReader(new InputStreamReader(System.in)); do { str = (char) obj.readLine(); System.out.print(str); } while(!str.equals("strong")); } }
    options:
      - Hello
      - Hello stop
      - World
      - Hello stop World
    answer: 3
    explanation: Hello stop World is the correct answer to “What will be the output of the following Java program if input given is "Hello stop World"? class Input_Output { public static void main(String args[]) throws IOException { string str; BufferedReader obj = new BufferedReader(new InputStreamReader(System.in)); do { str = (char) obj.readLine(); System.out.print(str); } while(!str.equals("strong")); } }”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What will be the output of the following Java program? class output { public static void main(String args[]) { StringBuffer c = new StringBuffer("Hello"); StringBuffer c1 = new StringBuffer(" World"); c.append(c1); System.out.println(c); } }
    options:
      - Hello
      - World
      - Helloworld
      - Hello World
    answer: 3
    explanation: Hello World is the correct answer to “What will be the output of the following Java program? class output { public static void main(String args[]) { StringBuffer c = new StringBuffer("Hello"); StringBuffer c1 = new StringBuffer(" World"); c.append(c1); System.out.println(c); } }”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What will be the output of the following Java program? class output { public static void main(String args[]) { StringBuffer s1 = new StringBuffer("Hello"); s1.setCharAt(1,x); System.out.println(s1); } }
    options:
      - xello
      - xxxxx
      - Hxllo
      - Hexlo
    answer: 2
    explanation: Hxllo is the correct answer to “What will be the output of the following Java program? class output { public static void main(String args[]) { StringBuffer s1 = new StringBuffer("Hello"); s1.setCharAt(1,x); System.out.println(s1); } }”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: Which of these class contains the methods print() & println()?
    options:
      - System
      - System.out
      - BUfferedOutputStream
      - PrintStream
    answer: 3
    explanation: PrintStream is the correct answer to “Which of these class contains the methods print() & println()”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: Which of these methods can be used to writing console output?
    options:
      - print()
      - println()
      - write()
      - all of the mentioned
    answer: 3
    explanation: all of the mentioned is the correct answer to “Which of these methods can be used to writing console output”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: Which of these classes are used by character streams output operations?
    options:
      - InputStream
      - Writer
      - ReadStream
      - InputOutputStream
    answer: 1
    explanation: Writer is the correct answer to “Which of these classes are used by character streams output operations”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: Which of these class is used to read from a file?
    options:
      - InputStream
      - BufferedInputStream
      - FileInputStream
      - BufferedFileInputStream
    answer: 2
    explanation: FileInputStream is the correct answer to “Which of these class is used to read from a file”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What will be the output of the following Java program? class output { public static void main(String args[]) { String a="hello i love java"; System.out.println(indexof('i')+" "+indexof('o')+" "+lastIndexof('i')+" "+lastIndexof('o') )); } }
    options:
      - 6 4 6 9
      - 5 4 5 9
      - 7 8 8 9
      - 4 3 6 9
    answer: 0
    explanation: 6 4 6 9 is the correct answer to “What will be the output of the following Java program? class output { public static void main(String args[]) { String a="hello i love java"; System.out.println(indexof('i')+" "+indexof('o')+" "+lastIndexof('i')+" "+lastIndexof('o') )); } }”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What will be the output of the following Java program? class output { public static void main(String args[]) { char c[]={'a','1','b',' ','A','0']; for (int i = 0; i < 5; ++i) { if(Character.isDigit(c[i])) System.out.println(c[i]" is a digit"); if(Character.isWhitespace(c[i])) System.out.println(c[i]" is a Whitespace character"); if(Character.isUpperCase(c[i])) System.out.println(c[i]" is an Upper case Letter"); if(Character.isUpperCase(c[i])) System.out.println(c[i]" is a lower case Letter"); i = i + 3; } } }
    options:
      - a is a lower case Letter is White space character
      - b is a lower case Letter is White space characte
      - a is a lower case Letter A is a upper case Letter
      - a is a lower case Letter 0 is a digit
    answer: 0
    explanation: a is a lower case Letter is White space character is the correct answer to “What will be the output of the following Java program? class output { public static void main(String args[]) { char c[]={'a','1','b',' ','A','0']; for (int i = 0; i < 5; ++i) { if(Character.isDigit(c[i])) System.out.println(c[i]" is a digit"); if(Character.isWhitespace(c[i])) System.out.println(c[i]" is a Whitespace character"); if(Character.isUpperCase(c[i])) System.out.println(c[i]" is an Upper case Letter"); if(Character.isUpperCase(c[i])) System.out.println(c[i]" is a lower case Letter"); i = i + 3; } } }”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What will be the output of the following Java program? class output { public static void main(String args[]) { StringBuffer s1 = new StringBuffer("Hello"); StringBuffer s2 = s1.reverse(); System.out.println(s2); } }
    options:
      - Hello
      - olleH
      - HelloolleH
      - olleHHello
    answer: 1
    explanation: olleH is the correct answer to “What will be the output of the following Java program? class output { public static void main(String args[]) { StringBuffer s1 = new StringBuffer("Hello"); StringBuffer s2 = s1.reverse(); System.out.println(s2); } }”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: Which of these exception is thrown in cases when the file specified for writing is not found?
    options:
      - IOException
      - FileException
      - FileNotFoundException
      - FileInputException
    answer: 2
    explanation: FileNotFoundException is the correct answer to “Which of these exception is thrown in cases when the file specified for writing is not found”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: Which of these methods are used to read in from file?
    options:
      - get()
      - read()
      - scan()
      - readFileInput()
    answer: 1
    explanation: read() is the correct answer to “Which of these methods are used to read in from file”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: Which of these values is returned by read() method is end of file (EOF) is encountered?
    options:
      - "0"
      - "1"
      - "-1"
      - "Null"
    answer: 2
    explanation: "-1 is the correct answer to “Which of these values is returned by read() method is end of file (EOF) is encountered”. This question is standard in competitive examination syllabi for Input Output."
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: Which of these exception is thrown by close() and read() methods?
    options:
      - IOException
      - FileException
      - FileNotFoundException
      - FileInputOutputException
    answer: 0
    explanation: IOException is the correct answer to “Which of these exception is thrown by close() and read() methods”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: Which of these methods is used to write() into a file?
    options:
      - put()
      - putFile()
      - write()
      - writeFile()
    answer: 2
    explanation: write() is the correct answer to “Which of these methods is used to write() into a file”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: "What will be the output of the following Java program? import java.io.*; class filesinputoutput { public static void main(String args[]) { InputStream obj = new FileInputStream(\"inputoutput.java\"); System.out.print(obj.available()); } } Note: inputoutput.java is stored in the disk."
    options:
      - "true"
      - "false"
      - prints number of bytes in file
      - prints number of characters in the file
    answer: 2
    explanation: "prints number of bytes in file is the correct answer to “What will be the output of the following Java program? import java.io.*; class filesinputoutput { public static void main(String args[]) { InputStream obj = new FileInputStream(\"inputoutput.java\"); System.out.print(obj.available()); } } Note: inputoutput.java is stored in the disk.”. This question is standard in competitive examination syllabi for Input Output."
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: What will be the output of the following Java program? import java.io.*; public class filesinputoutput { public static void main(String[] args) { String obj = "abc"; byte b[] = obj.getBytes(); ByteArrayInputStream obj1 = new ByteArrayInputStream(b); for (int i = 0; i < 2; ++ i) { int c; while((c = obj1.read()) != -1) { if(i == 0) { System.out.print(Character.toUpperCase((char)c)); obj2.write(1); } } System.out.print(obj2); } } }
    options:
      - AaBaCa
      - ABCaaa
      - AaaBaaCaa
      - AaBaaCaaa
    answer: 3
    explanation: AaBaaCaaa is the correct answer to “What will be the output of the following Java program? import java.io.*; public class filesinputoutput { public static void main(String[] args) { String obj = "abc"; byte b[] = obj.getBytes(); ByteArrayInputStream obj1 = new ByteArrayInputStream(b); for (int i = 0; i < 2; ++ i) { int c; while((c = obj1.read()) != -1) { if(i == 0) { System.out.print(Character.toUpperCase((char)c)); obj2.write(1); } } System.out.print(obj2); } } }”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: What will be the output of the following Java program? import java.io.*; class Chararrayinput { public static void main(String[] args) { String obj = "abcdef"; int length = obj.length(); char c[] = new char[length]; obj.getChars(0, length, c, 0); CharArrayReader input1 = new CharArrayReader(c); CharArrayReader input2 = new CharArrayReader(c, 0, 3); int i; try { while((i = input2.read()) != -1) { System.out.print((char)i); } } catch (IOException e) { e.printStackTrace(); } } }
    options:
      - abc
      - abcd
      - abcde
      - abcdef
    answer: 0
    explanation: abc is the correct answer to “What will be the output of the following Java program? import java.io.*; class Chararrayinput { public static void main(String[] args) { String obj = "abcdef"; int length = obj.length(); char c[] = new char[length]; obj.getChars(0, length, c, 0); CharArrayReader input1 = new CharArrayReader(c); CharArrayReader input2 = new CharArrayReader(c, 0, 3); int i; try { while((i = input2.read()) != -1) { System.out.print((char)i); } } catch (IOException e) { e.printStackTrace(); } } }”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: What will be the output of the following Java program? import java.io.*; class Chararrayinput { public static void main(String[] args) { String obj = "abcdefgh"; int length = obj.length(); char c[] = new char[length]; obj.getChars(0, length, c, 0); CharArrayReader input1 = new CharArrayReader(c); CharArrayReader input2 = new CharArrayReader(c, 1, 4); int i; int j; try { while((i = input1.read()) == (j = input2.read())) { System.out.print((char)i); } } catch (IOException e) { e.printStackTrace(); } } }
    options:
      - abc
      - abcd
      - abcde
      - none of the mentioned
    answer: 3
    explanation: none of the mentioned is the correct answer to “What will be the output of the following Java program? import java.io.*; class Chararrayinput { public static void main(String[] args) { String obj = "abcdefgh"; int length = obj.length(); char c[] = new char[length]; obj.getChars(0, length, c, 0); CharArrayReader input1 = new CharArrayReader(c); CharArrayReader input2 = new CharArrayReader(c, 1, 4); int i; int j; try { while((i = input1.read()) == (j = input2.read())) { System.out.print((char)i); } } catch (IOException e) { e.printStackTrace(); } } }”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: Which of these functions is called to display the output of an applet?
    options:
      - display()
      - paint()
      - displayApplet()
      - PrintApplet()
    answer: 1
    explanation: paint() is the correct answer to “Which of these functions is called to display the output of an applet”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: Which of these methods can be used to output a string in an applet?
    options:
      - display()
      - print()
      - drawString()
      - transient()
    answer: 2
    explanation: drawString() is the correct answer to “Which of these methods can be used to output a string in an applet”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: Which of these methods is a part of Abstract Window Toolkit (AWT) ?
    options:
      - display()
      - paint()
      - drawString()
      - transient()
    answer: 1
    explanation: paint() is the correct answer to “Which of these methods is a part of Abstract Window Toolkit (AWT)”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: Which of these modifiers can be used for a variable so that it can be accessed from any thread or parts of a program?
    options:
      - transient
      - volatile
      - global
      - No modifier is needed
    answer: 1
    explanation: volatile is the correct answer to “Which of these modifiers can be used for a variable so that it can be accessed from any thread or parts of a program”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: Which of these operators can be used to get run time information about an object?
    options:
      - getInfo
      - Info
      - instanceof
      - getinfoof
    answer: 2
    explanation: instanceof is the correct answer to “Which of these operators can be used to get run time information about an object”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: What is the Message is displayed in the applet made by the following Java program? import java.awt.*; import java.applet.*; public class myapplet extends Applet { public void paint(Graphics g) { g.drawString("A Simple Applet", 20, 20); } }
    options:
      - A Simple Applet
      - A Simple Applet 20 20
      - Compilation Error
      - Runtime Error
    answer: 0
    explanation: A Simple Applet is the correct answer to “What is the Message is displayed in the applet made by the following Java program? import java.awt.*; import java.applet.*; public class myapplet extends Applet { public void paint(Graphics g) { g.drawString("A Simple Applet", 20, 20); } }”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: What is the length of the application box made the following Java program? import java.awt.*; import java.applet.*; public class myapplet extends Applet { Graphic g; g.drawString("A Simple Applet", 20, 20); }
    options:
      - "20"
      - Default value
      - Compilation Error
      - Runtime Error
    answer: 2
    explanation: Compilation Error is the correct answer to “What is the length of the application box made the following Java program? import java.awt.*; import java.applet.*; public class myapplet extends Applet { Graphic g; g.drawString("A Simple Applet", 20, 20); }”. This question is standard in competitive examination syllabi for Input Output.
    keyConcept: Input Output
    testedIn:
      - FPSC
      - PPSC
---


