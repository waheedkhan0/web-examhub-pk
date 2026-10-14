---
title: Data Types And Variables — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Data Types And Variables — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: data-types-and-variables-part-1
topicName: Data Types And Variables — Part 1
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
    question: What is the maximum value that can be stored in a byte variable in Java?
    options:
      - "127"
      - "255"
      - "32767"
      - "64"
    answer: 0
    explanation: "In Java, the byte data type is a signed 8-bit integer type. Being signed means that it can represent both positive and negative values. The maximum value that can be stored in a byte variable is 127. The reason is that a byte variable uses 8 bits to represent numbers, and one of those bits is used to represent the sign (positive or negative). Therefore, the remaining 7 bits are available to represent the magnitude of the number. In binary, with 7 bits, you can represent numbers from 0 to 127. The highest bit (leftmost bit) is used for sign, where 0 represents positive and 1 represents negative. So, the maximum value for a byte variable in Java is 2^7 - 1, which equals 127. Therefore, the correct answer is Option A: 127 ."
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: Which data type is used to store a single character in Java?
    options:
      - char
      - string
      - letter
      - ch
    answer: 0
    explanation: "The correct answer is Option A: char . In Java, the char data type is used to store a single character. It can hold any single Unicode character, including letters, digits, and special symbols. Using char allows you to store individual characters like 'A', '7', '$', etc., whereas String (Option B) is used to store a sequence of characters (a string of characters). Options C and D are not valid data types in Java."
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What is the default value of an int variable in Java if it's not explicitly initialized?
    options:
      - "0"
      - "1"
      - "-1"
      - "Null"
    answer: 0
    explanation: "The correct answer is Option A: 0 . In Java, if an int variable is not explicitly initialized, it will be assigned the default value of 0 . This default value is used when no initial value is provided for an integer variable. Option B, Option C, and Option D are not the default values for an uninitialized int variable in Java."
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: Which of the following is not a valid identifier for a Java variable?
    options:
      - my_var
      - _myVar
      - 3rdVar
      - $var
    answer: 2
    explanation: "The correct answer is Option C: 3rdVar . In Java, variable identifiers (names) must follow certain rules: They can only start with a letter (A-Z or a-z), underscore (_), or dollar sign ($). The subsequent characters can be letters, digits (0-9), underscores, or dollar signs. They cannot be a Java keyword (reserved word). Option A ( my_var ), Option B ( _myVar ), and Option D ( $var ) all follow these rules and are valid variable identifiers. Option C ( 3rdVar ) is not valid because it starts with a digit, which is not allowed for variable names in Java."
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: Which data type is used to store floating-point numbers with single precision in Java?
    options:
      - float
      - double
      - decimal
      - real
    answer: 0
    explanation: "The correct answer is Option A: float . In Java, the float data type is used to store floating-point numbers with single precision. Here's the breakdown: Option A: float - This is the correct data type for single-precision floating-point numbers in Java. Option B: double - This data type is used for double-precision floating-point numbers, which can store numbers with greater precision compared to float . Option C: decimal - There is no decimal data type in Java for floating-point numbers. Option D: real - There is no real data type in Java for floating-point numbers. So, the correct choice for single-precision floating-point numbers in Java is float ."
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: In Java, which data type is used to represent true or false values?
    options:
      - boolean
      - bit
      - logic
      - binary
    answer: 0
    explanation: "The correct answer is Option A: boolean . In Java, the boolean data type is used to represent true or false values. Here's the breakdown: Option A: boolean - This is the correct data type for representing true or false values in Java. Option B: bit - While bits are used in computer systems to represent binary values (0 or 1), there is no specific bit data type in Java for representing boolean values. Option C: logic - There is no logic data type in Java for representing boolean values. Option D: binary - This term refers to binary values, but it is not a data type used to represent boolean values in Java. So, the correct choice for representing true or false values in Java is boolean ."
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What is the size of a long variable in Java?
    options:
      - 4 bytes
      - 8 bytes
      - 2 bytes
      - 16 bytes
    answer: 1
    explanation: "The correct answer is Option B: 8 bytes . In Java, a long variable is used to store large integer values, and it occupies 8 bytes of memory. Here's the breakdown: Option A: 4 bytes - This size corresponds to the int data type in Java, not long . Option B: 8 bytes - This is the correct size for a long variable in Java. Option C: 2 bytes - This size corresponds to the short data type in Java, not long . Option D: 16 bytes - There is no standard long data type that occupies 16 bytes in Java. So, the size of a long variable in Java is 8 bytes ."
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: Which of the following is a valid way to declare a constant in Java?
    options:
      - final int PI
      - const float PI
      - static double PI
      - final double PI
    answer: 3
    explanation: "The correct answer is Option D: final double PI . In Java, you can declare a constant using the final keyword followed by the data type and the variable name. Here's the breakdown: Option A: final int PI - This is not a valid way to declare a constant because the data type of PI should be a floating-point type (e.g., double ) for representing the mathematical constant π. Additionally, there should be an initializer for the constant. Option B: const float PI - In Java, the const keyword is not used to declare constants. Use final instead. Also, the data type should be double for representing π with sufficient precision. Option C: static double PI - While this declaration is valid, it does not indicate that PI is a constant. It declares a static variable that can be modified. To declare a constant, you should use the final keyword. Option D: final double PI - This is the correct way to declare a constant in Java. It declares a final variable of type double named PI , which cannot be changed after initialization, making it suitable for representing the constant π. So, the valid way to declare a constant for π in Java is final double PI ."
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What is the range of values that can be stored in a short variable in Java?
    options:
      - "-128 to 127"
      - "-32,768 to 32,767"
      - 0 to 65,535
      - "-1,000,000 to 1,000,000"
    answer: 1
    explanation: "The correct answer is Option B: -32,768 to 32,767 . In Java, a short variable is a 16-bit signed integer type, which means it can store values in the range of -32,768 to 32,767 . Here's the breakdown: Option A: -128 to 127 - This range corresponds to a byte data type, not a short . Option B: -32,768 to 32,767 - This is the correct range for a short variable in Java. Option C: 0 to 65,535 - This range corresponds to an unsigned short (also known as char ) in Java. A regular short is signed and can have both positive and negative values. Option D: -1,000,000 to 1,000,000 - This range exceeds the capacity of a short variable, which can only store values up to 32,767. So, the range of values that can be stored in a short variable in Java is -32,768 to 32,767 ."
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: Which of the following is a primitive data type in Java?
    options:
      - String
      - Integer
      - Boolean
      - Char
    answer: 3
    explanation: "The correct answer is Option D: char . In Java, a primitive data type is a basic data type that is not an object. char is one of the primitive data types in Java, used to store a single character, such as 'A' or '5'. Here's the breakdown: Option A: String - String is not a primitive data type in Java. It is a class for representing sequences of characters. Option B: Integer - Integer is not a primitive data type, but int (lowercase) is a primitive data type used to store whole numbers. Option C: Boolean - Boolean is not a primitive data type, but boolean (lowercase) is a primitive data type used to represent true or false values. Option D: Char - This is the correct answer. char is a primitive data type in Java used to store a single character. So, the primitive data type in Java among the given options is char ."
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: Which keyword is used to declare a variable that can hold a reference to an object of any class in Java?
    options:
      - object
      - class
      - var
      - generic
    answer: 2
    explanation: "The correct answer is Option C: var . In Java, the var keyword is used to declare a variable that can hold a reference to an object of any class without specifying the exact data type explicitly. It was introduced in Java 10 to support local type inference. Here's the breakdown: Option A: object - There is no object keyword for declaring variables with generic reference types in Java. Option B: class - The class keyword is used for defining and declaring classes in Java, not for declaring variables with generic reference types. Option C: var - This is the correct answer. The var keyword is used for declaring variables with inferred types, allowing them to hold references to objects of any class. Option D: generic - The term generic usually refers to generic types and classes in Java, but it is not a keyword used for declaring variables. So, the keyword used to declare a variable that can hold a reference to an object of any class in Java is var ."
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: What is the default value of a boolean variable in Java if it's not explicitly initialized?
    options:
      - "FALSE"
      - "TRUE"
      - "0"
      - "Null"
    answer: 0
    explanation: "The correct answer is Option A: FALSE . In Java, the default value of a boolean variable is FALSE if it's not explicitly initialized. Here's the breakdown: Option A: FALSE - This is the correct default value for an uninitialized boolean variable in Java. It represents a false boolean value. Option B: TRUE - This is not the default value. The default value for a boolean is FALSE . Option C: 0 - This is not the default value for a boolean in Java. 0 is typically used for integer values. Option D: Null - Null is not a valid value for a boolean variable. Java boolean variables can only be true or false . So, the default value of a boolean variable in Java if it's not explicitly initialized is FALSE ."
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: Which of the following is the correct way to declare a hexadecimal value in Java?
    options:
      - "0x1A"
      - "#1A"
      - 1A
      - 0b1A
    answer: 0
    explanation: "The correct answer is Option A: 0x1A . In Java, the correct way to declare a hexadecimal value is by using the prefix 0x followed by the hexadecimal digits. Here's the breakdown: Option A: 0x1A - This is the correct way to declare a hexadecimal value in Java. The 0x prefix indicates that the following digits are in hexadecimal format. Option B: #1A - This is not the correct way to declare a hexadecimal value in Java. Java uses 0x for hexadecimal notation, not # . Option C: 1A - This is not a valid way to represent a hexadecimal value in Java. It lacks the 0x prefix. Option D: 0b1A - This is not a valid hexadecimal representation in Java. The 0b prefix is used for binary representation, not hexadecimal. So, the correct way to declare a hexadecimal value in Java is 0x1A ."
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What is the minimum value that can be stored in a char variable in Java?
    options:
      - "0"
      - "-128"
      - "-32768"
      - "'a'"
    answer: 0
    explanation: "The correct answer is Option A: 0 . In Java, a char variable is a 16-bit unsigned data type that can represent Unicode characters. The minimum value that can be stored in a char variable is 0 , which corresponds to the Unicode character with the code point of zero. Here's the breakdown: Option A: 0 - This is the correct minimum value that can be stored in a char variable in Java. It represents the Unicode character with the code point of zero. Option B: -128 - This value is not applicable to char variables in Java. It's more relevant to signed integer types. Option C: -32768 - This value is not applicable to char variables. It's a range associated with short or int data types in Java. Option D: 'a' - This represents the character 'a', not a numeric value, and it is not the minimum value that can be stored in a char variable. So, the correct minimum value that can be stored in a char variable in Java is 0"
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: In Java, which data type is used to store numbers with decimal points?
    options:
      - double
      - int
      - float
      - decimal
    answer: 0
    explanation: "The correct answer is Option A: double . In Java, the double data type is used to store numbers with decimal points, such as real numbers or floating-point numbers. Here's the breakdown: Option A: double - This is the correct data type for storing numbers with decimal points in Java. It provides a high level of precision for floating-point calculations. Option B: int - The int data type is used for storing whole numbers (integers) without decimal points. It does not store decimal values. Option C: float - The float data type is also used for storing numbers with decimal points, but it provides less precision compared to double . It is a single-precision floating-point type. Option D: decimal - There is no decimal data type in standard Java. The term \"decimal\" is often associated with other programming languages, such as C#. So, in Java, the data type used to store numbers with decimal points is double ."
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: Which of the following is not a primitive data type in Java?
    options:
      - int
      - byte
      - char
      - string
    answer: 3
    explanation: "The correct answer is Option D: string . In Java, a primitive data type is a basic data type that represents a single value. The primitive data types in Java are int , byte , and char among the options provided. Here's the breakdown: Option A: int - This is a primitive data type in Java used for representing whole numbers (integers). Option B: byte - This is also a primitive data type in Java used for representing small integers. Option C: char - This is a primitive data type in Java used for representing single characters. Option D: string - This is not a primitive data type in Java. Instead, it is a class (String class) used to represent sequences of characters. String objects are not primitives because they are more complex and can have methods and properties. So, among the provided options, string is not a primitive data type in Java."
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What is the default value of a double variable in Java if it's not explicitly initialized?
    options:
      - "0"
      - "1"
      - "-1"
      - "Null"
    answer: 0
    explanation: "The correct answer is Option A: 0 . In Java, the default value of a double variable is 0.0 if it's not explicitly initialized. Here's the breakdown: Option A: 0 - This is the correct default value for an uninitialized double variable in Java. It represents the numeric value zero. Option B: 1 - This is not the default value for a double variable. The default is 0.0 , not 1.0 . Option C: -1 - This is not the default value for a double variable. The default is 0.0 , not -1.0 . Option D: Null - Null is not a valid value for a double variable. Java uses 0.0 as the default value for uninitialized double variables. So, the default value of a double variable in Java if it's not explicitly initialized is 0.0 ."
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: What is the keyword used to declare a constant value in Java?
    options:
      - constant
      - const
      - final
      - static
    answer: 2
    explanation: "The correct answer is Option C: final . In Java, the keyword used to declare a constant value is final . Here's the breakdown: Option A: constant - There is no constant keyword for declaring constants in Java. Option B: const - There is no const keyword for declaring constants in Java. The const keyword is not used for this purpose in Java. Option C: final - This is the correct keyword for declaring a constant value in Java. When you declare a variable as final , it means its value cannot be changed after initialization, making it a constant. Option D: static - The static keyword is used to declare static variables and methods but not specifically for declaring constants. So, the keyword used to declare a constant value in Java is final ."
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: Which of the following is not a valid way to declare an integer variable in Java?
    options:
      - int x = 42
      - int y = 3.14
      - int z = -10
      - int w = 0x1A
    answer: 1
    explanation: "The correct answer is Option B: int y = 3.14 . In Java, when declaring an integer variable, you should assign it an integer value without a decimal point. Option B attempts to assign a double value (3.14) to an int variable, which is not a valid conversion in Java without explicit type casting. Here's the breakdown: Option A: int x = 42 - This is a valid way to declare an integer variable in Java, where x is assigned the integer value 42. Option B: int y = 3.14 - This is not a valid way to declare an integer variable in Java because it attempts to assign a double value (3.14) to an int variable without type casting. Option C: int z = -10 - This is a valid way to declare an integer variable in Java, where z is assigned the integer value -10. Option D: int w = 0x1A - This is a valid way to declare an integer variable in Java using hexadecimal notation. w is assigned the integer value 26 in decimal notation. So, among the provided options, Option B is not a valid way to declare an integer variable in Java because it attempts to assign a double value to an int variable."
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: In Java, which data type is used to store numbers with decimal points and greater precision than float?
    options:
      - double
      - float
      - long
      - decimal
    answer: 0
    explanation: "The correct answer is Option A: double . In Java, the double data type is used to store numbers with decimal points and provides greater precision than the float data type. Here's the breakdown: Option A: double - This is the correct data type for storing numbers with decimal points and greater precision than float . It is a double-precision floating-point type. Option B: float - The float data type is also used for storing numbers with decimal points but with less precision compared to double . It is a single-precision floating-point type. Option C: long - The long data type is used for storing large whole numbers (integers) but does not handle decimal points or fractions. Option D: decimal - There is no decimal data type in standard Java. The term \"decimal\" is often associated with other programming languages, such as C#. So, in Java, the data type used to store numbers with decimal points and greater precision than float is double ."
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: What is the default value of a char variable in Java if it's not explicitly initialized?
    options:
      - "' '"
      - "'0'"
      - "'\\u0000'"
      - "Null"
    answer: 2
    explanation: "The correct answer is Option C: '\\u0000' . In Java, the default value of a char variable is '\\u0000' (Unicode character with code point 0) if it's not explicitly initialized. Here's the breakdown: Option A: ' ' - This represents a space character, but it is not the default value for an uninitialized char variable. Option B: '0' - This represents the character '0', but it is not the default value for an uninitialized char variable. Option C: '\\u0000' - This is the correct default value for an uninitialized char variable in Java. It represents the Unicode character with the code point of zero. Option D: Null - Null is not a valid value for a char variable. The default value is '\\u0000' , not Null . So, the default value of a char variable in Java if it's not explicitly initialized is '\\u0000' ."
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: Which data type is used to represent integer values in Java?
    options:
      - int
      - float
      - boolean
      - char
    answer: 0
    explanation: "The correct answer is Option A: int . In Java, the int data type is used to represent integer values (whole numbers) without decimal points. Here's the breakdown: Option A: int - This is the correct data type for representing integer values in Java. Option B: float - The float data type is used for representing numbers with decimal points, not integers. Option C: boolean - The boolean data type is used to represent true or false values, not integers. Option D: char - The char data type is used to represent single characters, not integers. So, in Java, the data type used to represent integer values is int ."
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: Which of the following is the correct way to declare a boolean variable named isJavaFun and initialize it to true in Java?
    options:
      - boolean isJavaFun = true
      - bool isJavaFun = true
      - boolean = true
      - bool = true
    answer: 0
    explanation: "The correct answer is Option A: boolean isJavaFun = true . In Java, the correct way to declare a boolean variable named isJavaFun and initialize it to true is by using Option A. Here's the breakdown: Option A: boolean isJavaFun = true - This is the correct way to declare a boolean variable named isJavaFun and initialize it to true in Java. Option B: bool isJavaFun = true - This is not the correct syntax in Java. The correct keyword for declaring a boolean variable is boolean , not bool . Option C: boolean = true - This is not a valid way to declare a boolean variable in Java. It lacks the variable name. Option D: bool = true - This is also not a valid way to declare a boolean variable in Java. It lacks the variable name, and the keyword bool is not used in Java. So, the correct way to declare a boolean variable named isJavaFun and initialize it to true in Java is boolean isJavaFun = true ."
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: What is the size of a float variable in Java?
    options:
      - 4 bytes
      - 8 bytes
      - 2 bytes
      - 16 bytes
    answer: 0
    explanation: "The correct answer is Option A: 4 bytes . In Java, a float variable is a single-precision floating-point data type that occupies 4 bytes of memory. Here's the breakdown: Option A: 4 bytes - This is the correct size of a float variable in Java, which is a single-precision floating-point type. Option B: 8 bytes - This size is associated with the double data type, not float . double is a double-precision floating-point type. Option C: 2 bytes - This size is associated with the char data type, not float . char represents Unicode characters. Option D: 16 bytes - This size is not standard for any primitive data type in Java. So, the size of a float variable in Java is 4 bytes ."
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: Which of the following is not a valid way to declare a long variable in Java?
    options:
      - long x = 123L
      - long y = 123
      - long z = 123.0
      - long w = 0x1L
    answer: 2
    explanation: "The correct answer is Option C: long z = 123.0 . In Java, the correct way to declare a long variable is by using Option A, Option B, or Option D. However, Option C is not a valid way to declare a long variable because it attempts to assign a double value (123.0) to a long variable without type casting. Here's the breakdown: Option A: long x = 123L - This is a valid way to declare a long variable in Java, where x is assigned the long value 123L (note the \"L\" suffix to indicate a long literal). Option B: long y = 123 - This is also a valid way to declare a long variable in Java, where y is assigned the long value 123 (Java allows you to assign integer literals to long variables without requiring a suffix). Option C: long z = 123.0 - This is not a valid way to declare a long variable because it attempts to assign a double value (123.0) to a long variable without type casting. It would result in a compilation error. Option D: long w = 0x1L - This is a valid way to declare a long variable in Java using hexadecimal notation. w is assigned the long value 1L (note the \"L\" suffix to indicate a long literal). So, among the provided options, Option C is not a valid way to declare a long variable in Java because it attempts to assign a double value to a long variable without type casting."
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Which of the following is the correct way to declare a byte variable named myByte and initialize it to 5 in Java?
    options:
      - byte myByte = 5
      - byte myByte = "5"
      - byte myByte = '5'
      - byte myByte = 5.0
    answer: 0
    explanation: "The correct answer is Option A: byte myByte = 5 . In Java, the correct way to declare a byte variable named myByte and initialize it to the integer value 5 is by using Option A. Here's the breakdown: Option A: byte myByte = 5 - This is the correct way to declare a byte variable in Java and initialize it to the integer value 5. Option B: byte myByte = \"5\" - This is not a valid way to declare a byte variable because it attempts to assign a String value (\"5\") to a byte variable, which is not allowed without type casting. Option C: byte myByte = '5' - This is not a valid way to declare a byte variable because it attempts to assign a character ('5') to a byte variable, which is not the same as an integer value. Option D: byte myByte = 5.0 - This is not a valid way to declare a byte variable because it attempts to assign a double value (5.0) to a byte variable without type casting. So, the correct way to declare a byte variable named myByte and initialize it to 5 in Java is byte myByte = 5 ."
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: What is the range of values that can be stored in a char variable in Java?
    options:
      - 0 to 127
      - "-128 to 127"
      - 0 to 65535
      - "-32768 to 32767"
    answer: 2
    explanation: "The correct answer is Option C: 0 to 65535 . In Java, a char variable is used to represent Unicode characters, and it can store values within the range of 0 to 65535 (2^16 - 1). This range covers the entire Unicode character set, which includes characters from various scripts and symbols. Here's the breakdown: Option A: 0 to 127 - This range is not correct for a char variable. It represents a smaller range suitable for an 8-bit data type, such as byte . Option B: -128 to 127 - This range is also not correct for a char variable. It represents a signed range, and char is an unsigned data type. Option C: 0 to 65535 - This is the correct range for a char variable in Java, covering the entire Unicode character set. Option D: -32768 to 32767 - This range is not applicable to a char variable. It represents a signed range suitable for a 16-bit signed data type, such as short . So, the correct range of values that can be stored in a char variable in Java is 0 to 65535 ."
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: Which data type is used to store numbers with decimal points and less precision than double?
    options:
      - float
      - byte
      - short
      - long
    answer: 0
    explanation: "The correct answer is Option A: float . In Java, the float data type is used to store numbers with decimal points and provides less precision than the double data type. Here's the breakdown: Option A: float - This is the correct data type for storing numbers with decimal points and less precision than double . It is a single-precision floating-point type. Option B: byte - The byte data type is used to store small whole numbers (integers) without decimal points. Option C: short - The short data type is used to store small whole numbers (integers) without decimal points. Option D: long - The long data type is used to store large whole numbers (integers) without decimal points. So, in Java, the data type used to store numbers with decimal points and less precision than double is float ."
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: What is the default value of a boolean array element in Java if it's not explicitly initialized?
    options:
      - "TRUE"
      - "FALSE"
      - "0"
      - "Null"
    answer: 1
    explanation: "The correct answer is Option B: FALSE . In Java, the default value of a boolean array element is FALSE if it's not explicitly initialized. Here's the breakdown: Option A: TRUE - This is not the default value for a boolean array element in Java. The correct default value is FALSE . Option B: FALSE - This is the correct default value for a boolean array element in Java if it's not explicitly initialized. Option C: 0 - This is not the default value for a boolean array element. It may be a default value for some numeric types, but not for boolean. Option D: Null - Null is not a valid default value for a boolean array element in Java. The default value is FALSE . So, the default value of a boolean array element in Java, if it's not explicitly initialized, is FALSE ."
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: Which of the following is not a valid way to declare a char variable in Java?
    options:
      - char x = 'A'
      - char y = 'n'
      - char z = 65
      - char w = 0x0041
    answer: 3
    explanation: "The correct answer is Option D: char w = 0x0041 . In Java, Options A, B, and C are valid ways to declare a char variable, but Option D is not. Here's the breakdown: Option A: char x = 'A' - This is a valid way to declare a char variable in Java and initialize it with the character 'A'. Option B: char y = 'n' - This is a valid way to declare a char variable in Java and initialize it with the character 'n'. Option C: char z = 65 - This is a valid way to declare a char variable in Java and initialize it with the decimal value 65, which corresponds to the character 'A' in the Unicode character set. Option D: char w = 0x0041 - This is not a valid way to declare a char variable in Java. It attempts to assign a hexadecimal value (0x0041) to a char variable, which is not allowed without type casting. So, the correct options for declaring a char variable in Java are Options A, B, and C, while Option D is not valid."
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: Java is a ........... language.
    options:
      - weakly typed
      - strongly typed
      - moderate typed
      - None of these
    answer: 1
    explanation: "The correct answer is Option B: strongly typed In Java, it is recognized as a strongly typed language. A strongly typed language enforces strict type checking, meaning that the data type of a variable is checked at compile time and any type mismatches are not allowed without explicit typecasting. Here's an explanation of the other options: - Option A: weakly typed does not apply to Java. Weakly typed languages are those that allow for automatic type conversions and do not enforce strict type checking. - Option C: moderate typed is not a standard term in programming language classification. Java is typically classified as strongly typed. - Option D: None of these is not the correct choice as Java is indeed classified as a strongly typed language."
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: How many primitive data types are there in Java?
    options:
      - "6"
      - "7"
      - "8"
      - "9"
    answer: 2
    explanation: "Primitive types are the most basic data types available within the Java language. There are 8: boolean , byte , char , short , int , long , float and double ."
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: In Java byte , short , int and long all of these are
    options:
      - signed
      - unsigned
      - Both of the above
      - None of these
    answer: 0
    explanation: "In Java, byte , short , int , and long are all signed integer data types. Here's the breakdown: Option A: signed - This option is correct. byte , short , int , and long are all signed integer data types in Java, which means they can represent both positive and negative whole numbers. Option B: unsigned - This option is not correct. Java does not have built-in unsigned integer data types. Unlike some other programming languages, all integer data types in Java are signed by default. Option C: Both of the above - This option is not correct because only Option A is true. Java integer data types are signed, not unsigned. Option D: None of these - This option is not correct because Option A is the correct answer. Java's byte , short , int , and long are all signed integer data types. So, in Java, byte , short , int , and long are all signed integer data types."
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: Size of int in Java is
    options:
      - 16 bit
      - 32 bit
      - 64 bit
      - Depends on execution environment
    answer: 1
    explanation: "The size of an int in Java is 32 bits . Here's the breakdown: Option A: 16 bit - This is not correct. The int data type in Java is 32 bits in size, not 16 bits. Option B: 32 bit - This is the correct size of an int in Java. An int occupies 32 bits of memory in Java, allowing it to represent a wide range of whole numbers. Option C: 64 bit - This size is not correct for an int in Java. A 64-bit data type is larger and typically used for long integers. Option D: Depends on execution environment - The size of an int in Java is standardized and is always 32 bits regardless of the execution environment. It is not dependent on the platform or execution environment. So, the correct size of an int in Java is 32 bits ."
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: The smallest integer type is ......... and its size is ......... bits.
    options:
      - short, 8
      - byte, 8
      - short, 16
      - byte, 16
    answer: 1
    explanation: "The smallest integer type in Java is byte , and its size is 8 bits . Here's the breakdown: Option A: short , 8 - This option is not correct. While short is a small integer type, its size is 16 bits (2 bytes), not 8 bits. Option B: byte , 8 - This option is correct. The byte data type is the smallest integer type in Java, and it has a size of 8 bits (1 byte). Option C: short , 16 - This option is not correct. While short has a size of 16 bits , it is larger than the byte data type. Option D: byte , 16 - This option is not correct. The size mentioned here, 16 bits , is incorrect for the byte data type. The correct size of byte is 8 bits . So, the correct answer is that the smallest integer type in Java is byte , and its size is 8 bits ."
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: Size of float and double in Java is
    options:
      - 32 and 64
      - 64 and 64
      - 32 and 32
      - 64 and 32
    answer: 0
    explanation: The size of float in Java is 32 bits , and the size of double in Java is 64 bits .
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: "Determine output: class A{ public static void main(String args[]){ int x; x = 10; if(x == 10){ int y = 20; System.out.print(\"x and y: \"+ x + \" \" + y); y = x*2; } y = 100; System.out.print(\"x and y: \" + x + \" \" + y); } }"
    options:
      - 10 20 10 100
      - 10 20 10 20
      - 10 20 10 10
      - Error
    answer: 3
    explanation: "The code defines a class A with a main method. Inside the main method: - An integer variable x is declared and assigned the value 10 . - There's an if statement that checks if x is equal to 10 . This condition is true. - Inside the if block: - Another integer variable y is declared and assigned the value 20 . - The program prints \"x and y: 10 20\" using System.out.print . - The value of y is updated to x * 2 , which is 20 . - Outside the if block: - The program attempts to update the value of y to 100 . However, this line causes a compilation error because the variable y was declared inside the if block and is not accessible outside of it. - The program also attempts to print \"x and y: 10 100\". This line also causes a compilation error because the variable y is not in scope at this point. So, the correct answer is \" Error \" because the code contains compilation errors due to the variable y being declared within the if block and not being accessible outside of it. The program cannot find the symbol y outside of the if block, leading to compilation errors."
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: Automatic type conversion in Java takes place when
    options:
      - Two type are compatible and size of destination type is shorter than source type.
      - Two type are compatible and size of destination type is equal of source type.
      - Two type are compatible and size of destination type is larger than source type.
      - All of the above
    answer: 2
    explanation: "The correct answer is C : Two types are compatible and the size of the destination type is larger than the source type. Automatic type conversion , also known as implicit type conversion or widening conversion , happens when Java automatically converts one data type to another. This occurs when two conditions are met: 1. Compatibility : The two data types must be compatible. Java must know how to convert from the source type to the destination type. 2. Size : The destination type must be larger than the source type so that no data is lost. Why other options are wrong: Option A : If destination is shorter than source, data loss may occur. Java does NOT allow this automatically. It needs explicit casting. Option B : If both types are equal in size, conversion is not needed because the source already fits. Example: int myInt = 10; double myDouble = myInt; // Allowed, widening conversion double myDouble2 = 10.5; int myInt2 = (int) myDouble2; // Needs explicit cast because narrowing may lose data"
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: Which of the following automatic type conversion will be possible?
    options:
      - short to int
      - byte to int
      - int to long
      - All of these
    answer: 3
    explanation: "Option A: short to int Option B: byte to int Option C: int to long These conversions are possible because they involve widening conversions where the destination type can accommodate the values of the source type without loss of information. So, the correct answer is: Option D: All of these"
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: What is the output of the following program? class A{ public static void main(String args[]){ byte b; int i = 258; double d = 325.59; b = (byte) i; System.out.print(b); i = (int) d; System.out.print(i); b = (byte) d; System.out.print(b); } }
    options:
      - 258 325 325
      - 258 326 326
      - 2 325 69
      - Error
    answer: 2
    explanation: In the type cast b = ( byte ) i ; The value of i i.e 258 is cast into a byte variable. Whenever a casting done where source value is greater than the range of the destination then the result is the remainder of the division of source by the range of the destination. In this case the result is the remainder of the division of 258 by 256(the range of a byte), which is 2. In the second type cast i = ( int ) d ; the fractional component of d is lost and hence gives the output 325. In the third type cast
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
---


