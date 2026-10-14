---
title: Strings — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Strings — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: strings-part-2
topicName: Strings — Part 2
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
    question: The String method compareTo() returns
    options:
      - "true"
      - "false"
      - an int value
      - "1"
      - "-1"
    answer: 2
    explanation: an int value is the correct answer to “The String method compareTo() returns”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: What is the output of the following println statement? String str1 = "Hellow"; System.out.println(str1.indexOf('t'));
    options:
      - "true"
      - "false"
      - "1"
      - "-1"
      - "0"
    answer: 3
    explanation: "-1 is the correct answer to “What is the output of the following println statement? String str1 = \"Hellow\"; System.out.println(str1.indexOf('t'));”. This question is standard in competitive examination syllabi for Strings."
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: The class string belongs to ................. package.
    options:
      - java.awt
      - java.lang
      - java.applet
      - java.string
    answer: 1
    explanation: java.lang is the correct answer to “The class string belongs to ................. package.”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: "What will be the output? public class Test{ public static void main (String[] args){ String test = \"a1b2c3\"; String[] tokens = test.split(\"\\\\d\"); for(String s: tokens) System.out.print(s); } }"
    options:
      - abc
      - "123"
      - Runtime exception thrown
      - Compilation error
    answer: 0
    explanation: "abc is the correct answer to “What will be the output? public class Test{ public static void main (String[] args){ String test = \"a1b2c3\"; String[] tokens = test.split(\"\\\\d\"); for(String s: tokens) System.out.print(s); } }”. This question is standard in competitive examination syllabi for Strings."
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: What will be the output of the following program code? public class Test{ public static void main(String args[]){ String s = "what"; StringBuffer sb = new StringBuffer("what"); System.out.print(sb.equals(s)+","+s.equals(sb)); } }
    options:
      - true,true
      - false,true
      - true,false
      - false,false
      - None of these
    answer: 3
    explanation: false,false is the correct answer to “What will be the output of the following program code? public class Test{ public static void main(String args[]){ String s = "what"; StringBuffer sb = new StringBuffer("what"); System.out.print(sb.equals(s)+","+s.equals(sb)); } }”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: "What will be the output? public class Test{ public static void main(String args[]){ Object myObj = new String[]{\"one\", \"two\", \"three\"}; { for(String s : (String[])myObj) System.out.print(s + \".\"); } } }"
    options:
      - one.two.three.
      - Compilation fails because of an error at line 3
      - Compilation fails because of an error at line 5
      - An exception is thrown at runtime.
      - None of these
    answer: 0
    explanation: "one.two.three. is the correct answer to “What will be the output? public class Test{ public static void main(String args[]){ Object myObj = new String[]{\"one\", \"two\", \"three\"}; { for(String s : (String[])myObj) System.out.print(s + \".\"); } } }”. This question is standard in competitive examination syllabi for Strings."
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: "Determine output: public class Test{ public static void main(String args[]){ String str = null; if(str.length() == 0){ System.out.print(\"1\"); } else if(str == null){ System.out.print(\"2\"); } else{ System.out.print(\"3\"); } } }"
    options:
      - Compilation fails.
      - "\"1\" is printed."
      - "\"2\" is printed."
      - "\"3\" is printed."
      - An exception is thrown at runtime.
    answer: 4
    explanation: "An exception is thrown at runtime. is the correct answer to “Determine output: public class Test{ public static void main(String args[]){ String str = null; if(str.length() == 0){ System.out.print(\"1\"); } else if(str == null){ System.out.print(\"2\"); } else{ System.out.print(\"3\"); } } }”. This question is standard in competitive examination syllabi for Strings."
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: Which of these methods is used to compare a specific region inside a string with another specific region in another string?
    options:
      - regionMatch()
      - match()
      - regionMatches()
      - None of These
    answer: 2
    explanation: regionMatches() is the correct answer to “Which of these methods is used to compare a specific region inside a string with another specific region in another string”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What will be the output of the following Java code? class output { public static void main(String args[]) { StringBuffer s1 = new StringBuffer("Hello"); s1.insert(1,"Java"); System.out.println(s1); } }
    options:
      - hello
      - java
      - Hello Java
      - HJavaello
    answer: 3
    explanation: HJavaello is the correct answer to “What will be the output of the following Java code? class output { public static void main(String args[]) { StringBuffer s1 = new StringBuffer("Hello"); s1.insert(1,"Java"); System.out.println(s1); } }”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What will be the output of the following Java code? class output { public static void main(String args[]) { String c = "Hello i love java"; boolean var; var = c.startsWith("hello"); System.out.println(var); } }
    options:
      - "true"
      - "false"
      - "0"
      - "1"
    answer: 1
    explanation: false is the correct answer to “What will be the output of the following Java code? class output { public static void main(String args[]) { String c = "Hello i love java"; boolean var; var = c.startsWith("hello"); System.out.println(var); } }”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: Which of these data type value is returned by equals() method of String class?
    options:
      - char
      - int
      - boolean
      - all of the mentioned
    answer: 2
    explanation: boolean is the correct answer to “Which of these data type value is returned by equals() method of String class”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: Which of the following are incorrect form of StringBuffer class constructor?
    options:
      - StringBuffer()
      - StringBuffer(int size)
      - StringBuffer(String str)
      - StringBuffer(int size , String str)
    answer: 3
    explanation: StringBuffer(int size , String str) is the correct answer to “Which of the following are incorrect form of StringBuffer class constructor”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What will be the output of the following Java program? class output { public static void main(String args[]) { String c = " Hello World "; String s = c.trim(); System.out.println("\""+s+"\""); } }
    options:
      - "\"\"Hello World\"\""
      - "\"\"Hello World\""
      - "\"Hello World\""
      - Hello world
    answer: 2
    explanation: "\"Hello World\" is the correct answer to “What will be the output of the following Java program? class output { public static void main(String args[]) { String c = \" Hello World \"; String s = c.trim(); System.out.println(\"\\\"\"+s+\"\\\"\"); } }”. This question is standard in competitive examination syllabi for Strings."
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What will be the output of the following Java program? class output { public static void main(String args[]) { String a = "hello i love java"; System.out.println(a.indexOf('e')+" "+a.indexOf('a')+" "+a.lastIndexOf('l')+" "+a.lastIndexOf('v')); } }
    options:
      - 6 4 6 9
      - 5 4 5 9
      - 7 8 8 9
      - 1 14 8 15
    answer: 3
    explanation: 1 14 8 15 is the correct answer to “What will be the output of the following Java program? class output { public static void main(String args[]) { String a = "hello i love java"; System.out.println(a.indexOf('e')+" "+a.indexOf('a')+" "+a.lastIndexOf('l')+" "+a.lastIndexOf('v')); } }”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: Which of these class is used to create an object whose character sequence is mutable?
    options:
      - String()
      - StringBuffer()
      - String() & StringBuffer()
      - None of the mentioned
    answer: 1
    explanation: StringBuffer() is the correct answer to “Which of these class is used to create an object whose character sequence is mutable”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What will be the output of the following Java code? class output { public static void main(String args[]) { String s1 = "Hello i love java"; String s2 = new String(s1); System.out.println((s1 == s2) + " " + s1.equals(s2)); } }
    options:
      - true true
      - false false
      - true false
      - false true
    answer: 3
    explanation: false true is the correct answer to “What will be the output of the following Java code? class output { public static void main(String args[]) { String s1 = "Hello i love java"; String s2 = new String(s1); System.out.println((s1 == s2) + " " + s1.equals(s2)); } }”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What will be the output of the following Java program? class output { public static void main(String args[]) { String s1 = "Hello"; String s2 = s1.replace('l','w'); System.out.println(s2); } }
    options:
      - hello
      - helwo
      - hewlo
      - hewwo
    answer: 3
    explanation: hewwo is the correct answer to “What will be the output of the following Java program? class output { public static void main(String args[]) { String s1 = "Hello"; String s2 = s1.replace('l','w'); System.out.println(s2); } }”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: Which of these method of class String is used to remove leading and trailing whitespaces?
    options:
      - startsWith()
      - trim()
      - doTrim()
    answer: 1
    explanation: trim() is the correct answer to “Which of these method of class String is used to remove leading and trailing whitespaces”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: What will be the output of the following Java code? class output { public static void main(String args[]) { StringBuffer sb=new StringBuffer("Hello"); sb.replace(1,3,"Java"); System.out.println(sb); } }
    options:
      - Hello java
      - Hellojava
      - HJavalo
      - Hjava
    answer: 2
    explanation: HJavalo is the correct answer to “What will be the output of the following Java code? class output { public static void main(String args[]) { StringBuffer sb=new StringBuffer("Hello"); sb.replace(1,3,"Java"); System.out.println(sb); } }”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: "In the following Java code, which code fragment should be inserted at line 3 so that the output will be: \"123abc 123abc\"? 1. StringBuilder sb1 = new StringBuilder(\"123\"); 2. String s1 = \"123\"; 3. // insert code here 4. System.out.println(sb1 + \" \" + s1);"
    options:
      - sb1.append("abc"); s1.append("abc")
      - sb1.append("abc"); s1.concat("abc")
      - sb1.concat("abc"); s1.append("abc")
      - sb1.append("abc"); s1 = s1.concat("abc")
    answer: 3
    explanation: "sb1.append(\"abc\"); s1 = s1.concat(\"abc\") is the correct answer to “In the following Java code, which code fragment should be inserted at line 3 so that the output will be: \"123abc 123abc\"? 1. StringBuilder sb1 = new StringBuilder(\"123\"); 2. String s1 = \"123\"; 3. // insert code here 4. System.out.println(sb1 + \" \" + s1);”. This question is standard in competitive examination syllabi for Strings."
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: Which of these methods of class String is used to check whether a given object starts with a particular string literal?
    options:
      - startsWith()
      - endsWith()
      - Starts()
      - ends()
    answer: 0
    explanation: startsWith() is the correct answer to “Which of these methods of class String is used to check whether a given object starts with a particular string literal”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: Which of these method of class StringBuffer is used to find the length of current character sequence?
    options:
      - length()
      - capacity()
    answer: 0
    explanation: length() is the correct answer to “Which of these method of class StringBuffer is used to find the length of current character sequence”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: What will be the output of the following Java code? class output { public static void main(String args[]) { String c = "Hello i love java"; int start = 2; int end = 9; char s[]=new char[end-start]; c.getChars(start,end,s,0); System.out.println(s); } }
    options:
      - Hello, i love java
      - i love ja
      - lo i lo
      - llo i l
    answer: 3
    explanation: llo i l is the correct answer to “What will be the output of the following Java code? class output { public static void main(String args[]) { String c = "Hello i love java"; int start = 2; int end = 9; char s[]=new char[end-start]; c.getChars(start,end,s,0); System.out.println(s); } }”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: Which of these class is superclass of String and StringBuffer class?
    options:
      - java.util
      - java.lang
      - ArrayList
      - None of the mentioned
    answer: 1
    explanation: java.lang is the correct answer to “Which of these class is superclass of String and StringBuffer class”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: Which of this method of class StringBuffer is used to reverse sequence of characters?
    options:
      - reverse()
      - reverseall()
    answer: 0
    explanation: reverse() is the correct answer to “Which of this method of class StringBuffer is used to reverse sequence of characters”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: What will s2 contain after following lines of Java code? StringBuffer s1 = "one"; StringBuffer s2 = s1.append("two")
    options:
      - one
      - two
      - onetwo
      - twoone
    answer: 2
    explanation: onetwo is the correct answer to “What will s2 contain after following lines of Java code? StringBuffer s1 = "one"; StringBuffer s2 = s1.append("two")”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: Which of this method of class StringBuffer is used to concatenate the string representation to the end of invoking string?
    options:
      - concat()
      - append()
      - join()
      - concatenate()
    answer: 1
    explanation: append() is the correct answer to “Which of this method of class StringBuffer is used to concatenate the string representation to the end of invoking string”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: What is the value returned by function compareTo() if the invoking string is greater than the string compared?
    options:
      - zero
      - value less than zero
      - value greater than zero
      - none of the mentioned
    answer: 2
    explanation: value greater than zero is the correct answer to “What is the value returned by function compareTo() if the invoking string is greater than the string compared”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: What will be the output of the following Java program? class String_demo { public static void main(String args[]) { char chars[] = {'a', 'b', 'c'}; String s = new String(chars); System.out.println(s); } }
    options:
      - a
      - b
      - c
      - abc
    answer: 3
    explanation: abc is the correct answer to “What will be the output of the following Java program? class String_demo { public static void main(String args[]) { char chars[] = {'a', 'b', 'c'}; String s = new String(chars); System.out.println(s); } }”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: Which of this method of class StringBuffer is used to get the length of the sequence of characters?
    options:
      - length()
      - capacity()
    answer: 0
    explanation: length() is the correct answer to “Which of this method of class StringBuffer is used to get the length of the sequence of characters”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: What will be the output of the following Java program? class output { public static void main(String args[]) { String s1 = "one"; String s2 = s1 + " two"; System.out.println(s2); } }
    options:
      - one
      - two
      - one two
      - compilation error
    answer: 2
    explanation: one two is the correct answer to “What will be the output of the following Java program? class output { public static void main(String args[]) { String s1 = "one"; String s2 = s1 + " two"; System.out.println(s2); } }”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: Which of this method of class String is used to extract a substring from a String object?
    options:
      - substring()
      - None of the mentioned
    answer: 0
    explanation: substring() is the correct answer to “Which of this method of class String is used to extract a substring from a String object”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: What will be the output of the following Java program? class output { public static void main(String args[]) { String s1 = "Hello World"; String s2 = s1.substring(0 , 4); System.out.println(s2); } }
    options:
      - Hell
      - Hello
      - Worl
      - World
    answer: 0
    explanation: Hell is the correct answer to “What will be the output of the following Java program? class output { public static void main(String args[]) { String s1 = "Hello World"; String s2 = s1.substring(0 , 4); System.out.println(s2); } }”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: What will be the output of the following Java code? class output { public static void main(String args[]) { char ch; ch = "hello".charAt(1); System.out.println(ch); } }
    options:
      - h
      - e
      - l
      - o
    answer: 1
    explanation: e is the correct answer to “What will be the output of the following Java code? class output { public static void main(String args[]) { char ch; ch = "hello".charAt(1); System.out.println(ch); } }”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: What will be the output of the following Java program? class String_demo { public static void main(String args[]) { int ascii[] = { 65, 66, 67, 68}; String s = new String(ascii, 1, 3); System.out.println(s); } }
    options:
      - ABC
      - BCD
      - CDA
      - ABCD
    answer: 1
    explanation: BCD is the correct answer to “What will be the output of the following Java program? class String_demo { public static void main(String args[]) { int ascii[] = { 65, 66, 67, 68}; String s = new String(ascii, 1, 3); System.out.println(s); } }”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: What will be the output of the following Java program? class output { public static void main(String args[]) { String s = "Hello World"; int i = s.indexOf('o'); int j = s.lastIndexOf('l'); System.out.print(i + " " + j); } }
    options:
      - 4 8
      - 5 9
      - 4 9
      - 5 8
    answer: 2
    explanation: 4 9 is the correct answer to “What will be the output of the following Java program? class output { public static void main(String args[]) { String s = "Hello World"; int i = s.indexOf('o'); int j = s.lastIndexOf('l'); System.out.print(i + " " + j); } }”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: What is the string contained in s after following lines of Java code? StringBuffer s new StringBuffer("Hello"); s.deleteCharAt(0);
    options:
      - Hell
      - ello
      - Hel
      - llo
    answer: 1
    explanation: ello is the correct answer to “What is the string contained in s after following lines of Java code? StringBuffer s new StringBuffer("Hello"); s.deleteCharAt(0);”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: What will be the output of the following Java program? class output { class output { public static void main(String args[]) { char c[]={'A', '1', 'b' ,' ' ,'a' , '0'}; for (int i = 0; i < 5; ++i) { i++; if(Character.isDigit(c[i])) System.out.println(c[i]+" is a digit"); if(Character.isWhitespace(c[i])) System.out.println(c[i]+" is a Whitespace character"); if(Character.isUpperCase(c[i])) System.out.println(c[i]+" is an Upper case Letter"); if(Character.isLowerCase(c[i])) System.out.println(c[i]+" is a lower case Letter"); i++; } } }
    options:
      - a is a lower case Letter is White space character
      - b is a lower case Letter is White space character
      - 1 is a digit a is a lower case Letter
      - a is a lower case Letter 0 is a digit
    answer: 2
    explanation: 1 is a digit a is a lower case Letter is the correct answer to “What will be the output of the following Java program? class output { class output { public static void main(String args[]) { char c[]={'A', '1', 'b' ,' ' ,'a' , '0'}; for (int i = 0; i < 5; ++i) { i++; if(Character.isDigit(c[i])) System.out.println(c[i]+" is a digit"); if(Character.isWhitespace(c[i])) System.out.println(c[i]+" is a Whitespace character"); if(Character.isUpperCase(c[i])) System.out.println(c[i]+" is an Upper case Letter"); if(Character.isLowerCase(c[i])) System.out.println(c[i]+" is a lower case Letter"); i++; } } }”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: Which of this method of class String is used to obtain a length of String object?
    options:
      - get()
      - Sizeof()
      - lengthof()
      - length()
    answer: 3
    explanation: length() is the correct answer to “Which of this method of class String is used to obtain a length of String object”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: What will be the output of the following Java code? class output { public static void main(String args[]) { char c[]={'a', '1', 'b' ,' ' ,'A' , '0'}; for (int i = 0; i < 5; ++i) { if(Character.isDigit(c[i])) System.out.println(c[i]+" is a digit"); if(Character.isWhitespace(c[i])) System.out.println(c[i]+" is a Whitespace character"); if(Character.isUpperCase(c[i])) System.out.println(c[i]+" is an Upper case Letter"); if(Character.isLowerCase(c[i])) System.out.println(c[i]+" is a lower case Letter"); i=i+3; } } }
    options:
      - a is a lower case Letter is White space character
      - b is a lower case Letter is White space character
      - a is a lower case Letter A is an upper case Letter
      - a is a lower case Letter 0 is a digit
    answer: 2
    explanation: a is a lower case Letter A is an upper case Letter is the correct answer to “What will be the output of the following Java code? class output { public static void main(String args[]) { char c[]={'a', '1', 'b' ,' ' ,'A' , '0'}; for (int i = 0; i < 5; ++i) { if(Character.isDigit(c[i])) System.out.println(c[i]+" is a digit"); if(Character.isWhitespace(c[i])) System.out.println(c[i]+" is a Whitespace character"); if(Character.isUpperCase(c[i])) System.out.println(c[i]+" is an Upper case Letter"); if(Character.isLowerCase(c[i])) System.out.println(c[i]+" is a lower case Letter"); i=i+3; } } }”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
---


