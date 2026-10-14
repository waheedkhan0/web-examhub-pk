---
title: Strings — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Strings — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: strings-part-1
topicName: Strings — Part 1
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
    question: Which of the following is true about Java strings?
    options:
      - Strings are mutable.
      - Strings can contain only letters.
      - Strings can have a null value.
      - Strings are implemented as arrays of characters.
    answer: 2
    explanation: "Java strings are sequences of characters used to store and manipulate text data. Option A: Strings are mutable. → False. Java strings are immutable , meaning once a string is created, its value cannot be changed. If modifications are needed, a new string is created instead. Option B: Strings can contain only letters. → False. Java strings can contain letters, numbers, symbols, spaces, or any other character. For example, \"Hello123!\" and \"Java@2024\" are valid strings. Option C: Strings can have a null value. → True. A string variable can be assigned null, which means it does not reference any object in memory. Option D: Strings are implemented as arrays of characters. → True, but incomplete. Java internally represents strings as character arrays (char[]), but they are encapsulated in the String class, and we generally use methods rather than directly accessing the array. Thus, the correct answer is Option C: Strings can have a null value. ."
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: What is the purpose of the trim() method of a String object in Java?
    options:
      - To remove all spaces from the string
      - To concatenate two strings
      - To extract a substring from the string
      - To remove leading and trailing whitespace
    answer: 3
    explanation: "The trim() method in Java is used to remove whitespace characters from the beginning and end of a string. It does not remove spaces or whitespace characters that are in the middle of the string. For example: String s = \" Hello World \"; System.out.println(s.trim()); // Output: \"Hello World\" Therefore, the correct purpose of the trim() method is to remove leading and trailing whitespace only, not all spaces, not concatenation, and not substring extraction."
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Which of the following methods is used to replace all occurrences of a specified character in a string in Java?
    options:
      - replace()
      - replaceAll()
      - replaceChar()
      - replaceAllOccurrences()
    answer: 0
    explanation: "replace() is a method in Java used to replace all occurrences of a specified character or substring in a string with another character or substring. It takes two parameters: the character or substring to be replaced and the new character or substring. replaceAll() is used for replacing all substrings that match a regular expression, which is different from replace() . replaceChar() and replaceAllOccurrences() are not valid methods in Java."
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: The output of the following fraction of code is public class Test{ public static void main(String args[]){ String s1 = new String("Hello"); String s2 = new String("Hellow"); System.out.println(s1 = s2); } }
    options:
      - Hello
      - Hellow
      - Compilation error
      - Throws an exception
      - None of these
    answer: 1
    explanation: "The output of the given code will be: In the code, two String objects s1 and s2 are created with the values \"Hello\" and \"Hellow\" (note the typo in \"Hellow\"), respectively. Then, the System.out.println() statement prints the result of the assignment s1 = s2 . This assignment sets the value of s1 to the same value as s2 , which is \"Hellow\". As a result, the println statement prints the value of s1 , which is \"Hellow\"."
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: "Determine output: public class Test{ public static void main(String args[]){ String s1 = \"SITHA\"; String s2 = \"RAMA\"; System.out.println(s1.charAt(0) > s2.charAt(0)); } }"
    options:
      - "true"
      - "false"
      - "0"
      - Compilation error
      - Throws Exception
    answer: 0
    explanation: Output will be True. Since when s1.charAt(0) ascii value is greater then s2.charAt(0). So it will return True.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What will be the output? String str1 = "abcde"; System.out.println(str1.substring(1, 3));
    options:
      - abc
      - bc
      - bcd
      - abcd
      - None of these
    answer: 1
    explanation: "substring() method has two variants and returns a new string that is a substring of this string. The substring begins with the character at the specified index and extends to the end of this string or upto endIndex - 1 if second argument is given. Syntax: Here is the syntax of this method: public String substring( int beginIndex ) or public String substring( int beginIndex , int endIndex ) Parameters: Here is the detail of parameters: beginIndex -- the begin index, inclusive. endIndex -- the end index, exclus"
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What will be the output of the following program? public class Test{ public static void main(String args[]){ String str1 = "one"; String str2 = "two"; System.out.println(str1.concat(str2)); } }
    options:
      - one
      - two
      - onetwo
      - twoone
      - None of these
    answer: 2
    explanation: Concat() method appends one String to the end of another. The method returns a String with the value of the String passed into the method appended to the end of the String which is used to invoke this method.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: String str1 = "Kolkata".replace('k', 'a'); In the above statement, the effect on string Kolkata is
    options:
      - The first occurrence of k is replaced by a.
      - All characters k are replaced by a.
      - All characters a are replaced by k.
      - Displays error message
    answer: 1
    explanation: "replace() method returns a new string resulting from replacing all occurrences of oldChar in this string with newChar. Syntax: Here is the syntax of this method: public String replace( char oldChar , char newChar ) Parameters: Here is the detail of the parameters: oldChar -- the old character. newChar -- the new character. Return Value: It returns a string derived from this string by replacing every occurrence of oldChar with newChar."
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: How many objects will be created? String a = new String("Examveda"); String b = new String("Examveda"); String c = "Examveda"; String d = "Examveda";
    options:
      - "4"
      - "3"
      - "2"
      - None of this
    answer: 1
    explanation: Object will be created each time whenever we use new keyword. So, 2 object will be created simply for the first two line and matter is with remaining two bottom line. String c="examveda" creates an object and store it in String pool, next time when we are writing String d="examveda" it will first check in String pool whether object already exists or not. Since, it is existing, no new object will be created. Hence reference "d" points to existing object "examveda". So ultimately 3 object will be created at the end.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: How many Constructor String class have?
    options:
      - "2"
      - "7"
      - "13"
      - "11"
      - None of this
    answer: 2
    explanation: "The String class has over 60 methods and 13 constructors. Source : oracle.com"
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What will be output? String S1 = "S1 ="+ "123"+"456"; String S2 = "S2 ="+(123+456);
    options:
      - S1=123456, S2=579
      - S1=123456,S2=123456
      - S1=579,S2=579
      - None of This
    answer: 0
    explanation: If a number is quoted in "" then it becomes a string, not a number any more.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: In Java, which class is used to represent a sequence of characters as a string?
    options:
      - String
      - StringBuilder
      - StringSequence
      - StringArray
    answer: 0
    explanation: String is the correct answer to “In Java, which class is used to represent a sequence of characters as a string”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What is the correct way to create a new empty String object in Java?
    options:
      - String emptyString = ""
      - String emptyString = new String()
      - String emptyString = " "
      - String emptyString = null
      - Both A and B
    answer: 4
    explanation: Both A and B is the correct answer to “What is the correct way to create a new empty String object in Java”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: In Java, which operator is used to concatenate two strings?
    options:
      - +
      - "&"
      - ","
      - "|"
    answer: 0
    explanation: + is the correct answer to “In Java, which operator is used to concatenate two strings”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: Which of the following methods is used to compare two strings for equality in Java?
    options:
      - equals()
      - compareTo()
      - equalsIgnoreCase()
      - compare()
    answer: 0
    explanation: equals() is the correct answer to “Which of the following methods is used to compare two strings for equality in Java”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What does the length() method of a String object in Java return?
    options:
      - The capacity of the string
      - The size of the string
      - The length of the string
      - The index of the last character
    answer: 2
    explanation: The length of the string is the correct answer to “What does the length() method of a String object in Java return”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: How do you convert a string to lowercase in Java?
    options:
      - str.toLower()
      - str.toLowerCase()
      - str.convertToLower()
      - str.makeLowerCase()
    answer: 1
    explanation: str.toLowerCase() is the correct answer to “How do you convert a string to lowercase in Java”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: What is the purpose of the charAt() method of a String object in Java?
    options:
      - To add a character to the string
      - To remove a character from the string
      - To get the character at a specific index
      - To get the length of the string
    answer: 2
    explanation: To get the character at a specific index is the correct answer to “What is the purpose of the charAt() method of a String object in Java”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: Which method is used to find the index of the first occurrence of a specified character in a string in Java?
    options:
      - findIndex()
      - indexOf()
      - search()
      - findCharacter()
    answer: 1
    explanation: indexOf() is the correct answer to “Which method is used to find the index of the first occurrence of a specified character in a string in Java”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: In Java, what is the result of the expression "Hello".substring(1, 4)?
    options:
      - "\"Hel\""
      - "\"H\""
      - "\"ell\""
      - "\"llo\""
    answer: 2
    explanation: "\"ell\" is the correct answer to “In Java, what is the result of the expression \"Hello\".substring(1, 4)”. This question is standard in competitive examination syllabi for Strings."
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: What is the correct way to check if a string starts with a specific prefix in Java?
    options:
      - str.startsWith(prefix)
      - str.beginsWith(prefix)
      - str.starts(prefix)
      - str.hasPrefix(prefix)
    answer: 0
    explanation: str.startsWith(prefix) is the correct answer to “What is the correct way to check if a string starts with a specific prefix in Java”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: Which method is used to split a string into an array of substrings based on a specified delimiter in Java?
    options:
      - split()
      - splitString()
      - divide()
      - separate()
    answer: 0
    explanation: split() is the correct answer to “Which method is used to split a string into an array of substrings based on a specified delimiter in Java”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: In Java, what is the purpose of the endsWith() method of a String object?
    options:
      - To check if the string ends with a specified character
      - To append a character to the string
      - To check if the string starts with a specified character
      - To check if the string contains a specified substring
    answer: 0
    explanation: To check if the string ends with a specified character is the correct answer to “In Java, what is the purpose of the endsWith() method of a String object”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: What method is used to convert an integer to a string in Java?
    options:
      - String.valueOf()
      - Integer.toString()
      - int.toString()
      - parseToString()
    answer: 0
    explanation: String.valueOf() is the correct answer to “What method is used to convert an integer to a string in Java”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: Which of the following is the correct way to compare two strings in a case-insensitive manner in Java?
    options:
      - str1.equals(str2)
      - str1.compareToIgnoreCase(str2)
      - str1.equalsIgnoreCase(str2)
      - str1.compare(str2)
    answer: 2
    explanation: str1.equalsIgnoreCase(str2) is the correct answer to “Which of the following is the correct way to compare two strings in a case-insensitive manner in Java”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: In Java, what does the concat() method of a String object do?
    options:
      - Combines two strings.
      - Reverses a string.
      - Removes whitespace.
      - Returns the length.
    answer: 0
    explanation: Combines two strings. is the correct answer to “In Java, what does the concat() method of a String object do”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: How do you find the last index of a specified character in a string in Java?
    options:
      - str.lastIndexOf(char)
      - str.indexOf(char)
      - str.findLast(char)
      - str.search(char)
    answer: 0
    explanation: str.lastIndexOf(char) is the correct answer to “How do you find the last index of a specified character in a string in Java”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: What is the result of the expression "Java".replace("a", "o") in Java?
    options:
      - "\"Jovo\""
      - "\"Java\""
      - "\"Jova\""
      - None of These
    answer: 0
    explanation: "\"Jovo\" is the correct answer to “What is the result of the expression \"Java\".replace(\"a\", \"o\") in Java”. This question is standard in competitive examination syllabi for Strings."
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: Which of the following is true about string concatenation in Java?
    options:
      - It always requires using the + operator.
      - It's a costly operation in terms of performance.
      - It can only concatenate strings with numbers.
      - It doesn't change the original strings.
    answer: 3
    explanation: It doesn't change the original strings. is the correct answer to “Which of the following is true about string concatenation in Java”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: How do you find the index of the last occurrence of a substring in a string in Java?
    options:
      - str.findLast(substring)
      - str.lastIndexOf(substring)
      - str.lastIndexOfChar(substring)
      - str.indexOf(substring)
    answer: 1
    explanation: str.lastIndexOf(substring) is the correct answer to “How do you find the index of the last occurrence of a substring in a string in Java”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: What is the purpose of the toLowerCase() method of a String object in Java?
    options:
      - To convert the string to uppercase.
      - To convert the string to lowercase.
      - To check if the string is empty.
      - To reverse the string.
    answer: 1
    explanation: To convert the string to lowercase. is the correct answer to “What is the purpose of the toLowerCase() method of a String object in Java”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: Which method is used to extract a substring from a string in Java?
    options:
      - extractSubstring()
      - getSubstring()
      - substring()
      - extract()
    answer: 2
    explanation: substring() is the correct answer to “Which method is used to extract a substring from a string in Java”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: In Java, what is the purpose of the isEmpty() method of a String object?
    options:
      - To check if the string is empty.
      - To remove leading and trailing whitespace.
      - To concatenate two strings.
      - To reverse the string.
    answer: 0
    explanation: To check if the string is empty. is the correct answer to “In Java, what is the purpose of the isEmpty() method of a String object”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: How do you check if a string contains a specific character in Java?
    options:
      - str.contains(char)
      - str.indexOf(char)
      - str.hasChar(char)
      - str.charExists(char)
    answer: 0
    explanation: str.contains(char) is the correct answer to “How do you check if a string contains a specific character in Java”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: What is the purpose of the substring() method of a String object in Java?
    options:
      - To add a substring to the string
      - To extract a substring from the string
      - To check if the string contains a substring
      - To concatenate two substrings
    answer: 1
    explanation: To extract a substring from the string is the correct answer to “What is the purpose of the substring() method of a String object in Java”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: How do you find the first index of a specified character in a string in Java?
    options:
      - str.getFirstIndexOf(char)
      - str.findFirst(char)
      - str.indexFirst(char)
      - str.indexOf(char)
    answer: 3
    explanation: str.indexOf(char) is the correct answer to “How do you find the first index of a specified character in a string in Java”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: What will be the output of the following program code? class LogicalCompare{ public static void main(String args[]){ String str1 = new String("OKAY"); String str2 = new String(str1); System.out.println(str1 == str2); } }
    options:
      - "true"
      - "false"
      - "0"
      - "1"
      - Displays error message
    answer: 1
    explanation: false is the correct answer to “What will be the output of the following program code? class LogicalCompare{ public static void main(String args[]){ String str1 = new String("OKAY"); String str2 = new String(str1); System.out.println(str1 == str2); } }”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: What will be the output of the following program? public class Test{ public static void main(String args[]){ String s1 = "java"; String s2 = "java"; System.out.println(s1.equals(s2)); System.out.println(s1 == s2); } }
    options:
      - false true
      - false false
      - true false
      - true true
    answer: 3
    explanation: true true is the correct answer to “What will be the output of the following program? public class Test{ public static void main(String args[]){ String s1 = "java"; String s2 = "java"; System.out.println(s1.equals(s2)); System.out.println(s1 == s2); } }”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: What could be output of the following fragment of code? public class Test{ public static void main(String args[]){ String x = "hellow"; int y = 9; System.out.println(x += y); } }
    options:
      - Throws an exception as string and int are not compatible for addition
      - hellow9
      - 9hellow
      - Compilation error
      - None of these
    answer: 1
    explanation: hellow9 is the correct answer to “What could be output of the following fragment of code? public class Test{ public static void main(String args[]){ String x = "hellow"; int y = 9; System.out.println(x += y); } }”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: toString() method is defined in
    options:
      - java.lang.String
      - java.lang.Object
      - java.lang.util
      - None of these
    answer: 1
    explanation: java.lang.Object is the correct answer to “toString() method is defined in”. This question is standard in competitive examination syllabi for Strings.
    keyConcept: Strings
    testedIn:
      - FPSC
      - PPSC
---


