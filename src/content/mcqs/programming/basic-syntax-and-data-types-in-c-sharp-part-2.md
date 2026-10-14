---
title: Basic Syntax And Data Types In C Sharp — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Basic Syntax And Data Types In C Sharp — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: basic-syntax-and-data-types-in-c-sharp-part-2
topicName: Basic Syntax And Data Types In C Sharp — Part 2
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
    question: Which Conversion function of 'Convert.TOInt32()' and 'Int32.Parse()' is efficient? i. Int32.Parse() is only used for strings and throws argument exception for null string ii. Convert.Int32() used for data types and returns directly '0' for null string
    options:
      - ii
      - Both i, ii
      - i
      - None of the mentioned
    answer: 0
    explanation: ii is the correct answer to “Which Conversion function of 'Convert.TOInt32()' and 'Int32.Parse()' is efficient? i. Int32.Parse() is only used for strings and throws argument exception for null string ii. Convert.Int32() used for data types and returns directly '0' for null string”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: For the given set of C# code, is conversion possible? static void Main(string[] args) { int a = 76; char b; b = (char)a; Console.WriteLine(b); Console.ReadLine(); }
    options:
      - Compiler will generate runtime error
      - Conversion is explicit type
      - Compiler will urge for conversion from 'integer' to 'character' data type
      - None of the mentioned
    answer: 1
    explanation: Conversion is explicit type is the correct answer to “For the given set of C# code, is conversion possible? static void Main(string[] args) { int a = 76; char b; b = (char)a; Console.WriteLine(b); Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Correct way to define a value 6.28 in a variable 'pi' where value cannot be modified?
    options:
      - "#define pi 6.28F"
      - pi = 6.28F
      - const float pi = 6.28F
      - const float pi pi = 6.28F
    answer: 2
    explanation: const float pi = 6.28F is the correct answer to “Correct way to define a value 6.28 in a variable 'pi' where value cannot be modified”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: Correct way to assign values to variable 'c' when int a=12, float b=3.5, int c;
    options:
      - c = a + b
      - c = a + int(float(b))
      - c = a + convert.ToInt32(b)
      - c = int(a + b)
    answer: 2
    explanation: c = a + convert.ToInt32(b) is the correct answer to “Correct way to assign values to variable 'c' when int a=12, float b=3.5, int c;”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: Correct statement about strings are?
    options:
      - a string is created on the stack
      - a string is primitive in nature
      - a string created on heap
      - created of string on a stack or on a heap depends on the length of the string
    answer: 2
    explanation: a string created on heap is the correct answer to “Correct statement about strings are”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What will be the output of the following C# code? public static void Main(string[] args) { int i = 546; object o = i; int n =(int) o; o = 70; System. Console. WriteLine("The value-type value = {0}", n); System. Console. WriteLine("The object-type value = {0}", o); Console. ReadLine(); }
    options:
      - 546, 0
      - 546, 546
      - 546, 70
      - 70, 546
    answer: 2
    explanation: 546, 70 is the correct answer to “What will be the output of the following C# code? public static void Main(string[] args) { int i = 546; object o = i; int n =(int) o; o = 70; System. Console. WriteLine("The value-type value = {0}", n); System. Console. WriteLine("The object-type value = {0}", o); Console. ReadLine(); }”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What will be the output of the following C# code? static void Main(string[] args) { float a = 10.553f; long b = 12L; int c; c = Convert.ToInt32(a + b); Console.WriteLine(c); }
    options:
      - "23.453"
      - "22"
      - "23"
      - "22.453"
    answer: 2
    explanation: 23 is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { float a = 10.553f; long b = 12L; int c; c = Convert.ToInt32(a + b); Console.WriteLine(c); }”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: "'Implicit Conversion' follows the order of conversion as per compatibility of data type as:"
    options:
      - float < char < int
      - char < int < float
      - int < char < float
      - float < int < char
    answer: 1
    explanation: char < int < float is the correct answer to “'Implicit Conversion' follows the order of conversion as per compatibility of data type as:”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What will be the output of the following C# code? static void Main(string[] args) { string s1 = "Delhi"; string s2; s2 = s1.Insert (6, "Jaipur"); Console.WriteLine(s2); }
    options:
      - DelhJaipuri
      - Delhi Jaipur
      - Delhi
      - DelhiJaipur
    answer: 3
    explanation: DelhiJaipur is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { string s1 = "Delhi"; string s2; s2 = s1.Insert (6, "Jaipur"); Console.WriteLine(s2); }”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What will be the output of the following C# code? static void Main(string[] args) { { var dayCode = "MTWFS"; var daysArray = new List<string>(); var list = new Dictionary<string, string> { {"M", "Monday"}, {"T", "Tuesday"}, {"W", "Wednesday"}, {"R", "Thursday"}, {"F", "Friday"}, {"S", "Saturday"}, {"U", "Sunday"} }; for (int i = 0,max = dayCode.Length; i < max; i++) { var tmp = dayCode[i].ToString(); if (list.ContainsKey(tmp)) { daysArray.Add(list[tmp]); } } Console.WriteLine(string.Join("\n ", daysArray)); }
    options:
      - Monday, Tuesday, Wednesday, Friday, Saturday, Sunday
      - Monday Tuesday Wednesday Friday Sunday
      - Monday Tuesday Wednesday Friday Saturday
      - Monday, Tuesday, Wednesday, Friday, Saturday
    answer: 2
    explanation: Monday Tuesday Wednesday Friday Saturday is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { { var dayCode = "MTWFS"; var daysArray = new List<string>(); var list = new Dictionary<string, string> { {"M", "Monday"}, {"T", "Tuesday"}, {"W", "Wednesday"}, {"R", "Thursday"}, {"F", "Friday"}, {"S", "Saturday"}, {"U", "Sunday"} }; for (int i = 0,max = dayCode.Length; i < max; i++) { var tmp = dayCode[i].ToString(); if (list.ContainsKey(tmp)) { daysArray.Add(list[tmp]); } } Console.WriteLine(string.Join("\n ", daysArray)); }”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: Choose the correct type of variable scope for the following C# defined variables. class ABC { static int m; int n; void fun (int x , ref int y, out int z, int[] a) { int j = 10; } }
    options:
      - m = static variable, n = local variable, x = output parameter, y = reference parameter, j = instance variable, z = output parameter, a[0] = array element
      - m = static variable, n = instance variable, x = value parameter, y = reference parameter, j = local variable, z = output parameter , a[0] = array element
      - m = static variable, n = instance variable, x = reference parameter, y = value parameter, j = local variable, z = output parameter, a[0] = array element
      - m = local variable, n = instance variable, x = reference parameter, y = value parameter, j = static variable, z = output parameter, a[0] = array element
    answer: 1
    explanation: m = static variable, n = instance variable, x = value parameter, y = reference parameter, j = local variable, z = output parameter , a[0] = array element is the correct answer to “Choose the correct type of variable scope for the following C# defined variables. class ABC { static int m; int n; void fun (int x , ref int y, out int z, int[] a) { int j = 10; } }”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: Which is the String method used to compare two strings with each other?
    options:
      - Compare To()
      - Compare()
      - Copy()
      - ConCat()
    answer: 1
    explanation: Compare() is the correct answer to “Which is the String method used to compare two strings with each other”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: Correct Declaration of Values to variables 'a' and 'b'?
    options:
      - int a = 32, b = 40.6
      - int a = 42; b = 40
      - int a = 32; int b = 40
      - int a = b = 42
    answer: 2
    explanation: int a = 32; int b = 40 is the correct answer to “Correct Declaration of Values to variables 'a' and 'b'”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What is the Size of 'Char' datatype?
    options:
      - 8 bit
      - 12 bit
      - 16 bit
      - 20 bit
    answer: 2
    explanation: 16 bit is the correct answer to “What is the Size of 'Char' datatype”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What will be the output of the following C# code? static void Main(string[] args) { int x = 1; float y = 2. 4f; short z = 1; Console. WriteLine((float) x + y * z - (x + = (short) y) ); Console. ReadLine(); }
    options:
      - "0.4000004"
      - "0.4000023"
      - "0.0400021"
      - "0.4000001"
    answer: 3
    explanation: 0.4000001 is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int x = 1; float y = 2. 4f; short z = 1; Console. WriteLine((float) x + y * z - (x + = (short) y) ); Console. ReadLine(); }”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: Why does a float variable stop incrementing at number '16777216' in the following C# code? float a = 0 ; while (true) { a++; if (a > 16777216) break; }
    options:
      - Sign and Exponent for '16777217' is same as for '16777216'
      - Mantissa is different for '16777216' and '16777217'
      - Sign and Exponent for '16777217' is different from '16777216'
      - None of the mentioned
    answer: 1
    explanation: Mantissa is different for '16777216' and '16777217' is the correct answer to “Why does a float variable stop incrementing at number '16777216' in the following C# code? float a = 0 ; while (true) { a++; if (a > 16777216) break; }”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: Which of the following format specifiers is used to print hexadecimal values and return value of output as Octal equivalent in C#?
    options:
      - "%hx for small case letters and %HX for capital letters"
      - "%x for small case letters and %X for capital letters"
      - No ease of doing it. C# don't provides specifier like %x or %O to be used with ReadLine() OR WriteLine(). We have to write our own function
      - "%Ox for small case letters and %OX for capital letters"
    answer: 2
    explanation: No ease of doing it. C# don't provides specifier like %x or %O to be used with ReadLine() OR WriteLine(). We have to write our own function is the correct answer to “Which of the following format specifiers is used to print hexadecimal values and return value of output as Octal equivalent in C#”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: How many Bytes are stored by 'Long' Data type in C# .net?
    options:
      - "8"
      - "4"
      - "2"
      - "1"
    answer: 0
    explanation: 8 is the correct answer to “How many Bytes are stored by 'Long' Data type in C# .net”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: Verbatim string literal is better used for?
    options:
      - Convenience and better readability of strings when string text consist of backlash characters
      - Used to initialize multi-line strings
      - To embed a quotation mark by using double quotation marks inside a verbatim string
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “Verbatim string literal is better used for”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What will be the output of the following C# code? static void Main(string[] args) { float sum; int i; sum = 0.0F; for (i = 1; i <= 10; i++) { sum = sum + 1 /(float)i; } Console.WriteLine("sum =" +sum); Console.ReadLine(); }
    options:
      - "2.000"
      - "2.910"
      - "2.928"
      - "3.000"
    answer: 2
    explanation: 2.928 is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { float sum; int i; sum = 0.0F; for (i = 1; i <= 10; i++) { sum = sum + 1 /(float)i; } Console.WriteLine("sum =" +sum); Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: Types of 'Data Conversion' in C#?
    options:
      - Implicit Conversion
      - Explicit Conversion
      - Implicit Conversion and Explicit Conversion
      - None of the mentioned
    answer: 1
    explanation: Explicit Conversion is the correct answer to “Types of 'Data Conversion' in C#”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What will be the output of the following C# code? static void Main(string[] args) { int a = 5; int b = 10; int c; Console.WriteLine(c = a-- - ++b); Console.WriteLine(b); Console.ReadLine(); }
    options:
      - "-7, 10"
      - "-5, 11"
      - "-6, 11"
      - 15, 11
    answer: 2
    explanation: "-6, 11 is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int a = 5; int b = 10; int c; Console.WriteLine(c = a-- - ++b); Console.WriteLine(b); Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp."
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: "What will be the output of the following C# string? (Enter a String : BOMBAY). static void Main(string[] args) { string Str, Revstr = \" \"; int Length; Console.Write(\"Enter A String : \"); Str = Console.ReadLine(); Length = Str.Length - 1; while (Length >= 0) { Revstr = Revstr + Str[Length]; Length --; } Console.WriteLine(\"Reverse String Is {0}\", Revstr); Console.ReadLine(); }"
    options:
      - BOMBA
      - YABMOB
      - BOMAYB
      - YABMO
    answer: 1
    explanation: "YABMOB is the correct answer to “What will be the output of the following C# string? (Enter a String : BOMBAY). static void Main(string[] args) { string Str, Revstr = \" \"; int Length; Console.Write(\"Enter A String : \"); Str = Console.ReadLine(); Length = Str.Length - 1; while (Length >= 0) { Revstr = Revstr + Str[Length]; Length --; } Console.WriteLine(\"Reverse String Is {0}\", Revstr); Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp."
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: The following C# codes are? 1. Myclass class; Myclass class2 = null; 2. int i; int j = 0;
    options:
      - True for (1);False for (2)
      - True for (2);False for (1)
      - Both (1) and (2) are equivalents
      - Both (1) and (2) are not equivalents
    answer: 2
    explanation: Both (1) and (2) are equivalents is the correct answer to “The following C# codes are? 1. Myclass class; Myclass class2 = null; 2. int i; int j = 0;”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: Valid Size of float data type is?
    options:
      - 10 Bytes
      - 6 Bytes
      - 4 Bytes
      - 8 Bytes
    answer: 2
    explanation: 4 Bytes is the correct answer to “Valid Size of float data type is”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: The Default value of Boolean Data Type is?
    options:
      - "0"
      - "True"
      - "False"
      - "1"
    answer: 2
    explanation: False is the correct answer to “The Default value of Boolean Data Type is”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: What will be the output of the following C# code? string s1 = " I AM BEST "; string s2; s2 = s1.substring (5, 4); Console.WriteLine (s2);
    options:
      - AM BEST
      - I AM BES
      - BEST
      - I AM
    answer: 2
    explanation: BEST is the correct answer to “What will be the output of the following C# code? string s1 = " I AM BEST "; string s2; s2 = s1.substring (5, 4); Console.WriteLine (s2);”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: What is the need for 'Conversion of data type' in C#?
    options:
      - To store a value of one data type into a variable of another data type
      - To get desired data
      - To prevent situations of runtime error during change or conversion of data type
      - None of the mentioned
    answer: 2
    explanation: To prevent situations of runtime error during change or conversion of data type is the correct answer to “What is the need for 'Conversion of data type' in C#”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: "Scope of variable is related to definition of variable as: i. Region of code within which variable value is valid and hence can be accessed. ii. No, relation with region where variable is declared its value is valid in entire scope."
    options:
      - i
      - ii
      - i, ii
      - None of the mentioned
    answer: 0
    explanation: "i is the correct answer to “Scope of variable is related to definition of variable as: i. Region of code within which variable value is valid and hence can be accessed. ii. No, relation with region where variable is declared its value is valid in entire scope.”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp."
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: What will be the output of the following C# code? class Program { static void Main(string[] args) { int i ; for ( i = 0; i < 5; i++) { int j = 0; j += i; Console. WriteLine(j); } Console. WriteLine(i); Console. ReadLine(); } }
    options:
      - 0, 1, 2, 3, 4, 5, 6
      - 0, 1, 2, 3, 4, 5
      - 0, 1, 2, 3, 4
      - 0, 1, 2, 3
    answer: 1
    explanation: 0, 1, 2, 3, 4, 5 is the correct answer to “What will be the output of the following C# code? class Program { static void Main(string[] args) { int i ; for ( i = 0; i < 5; i++) { int j = 0; j += i; Console. WriteLine(j); } Console. WriteLine(i); Console. ReadLine(); } }”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: What will be the output of the following C# code? static void Main(string[] args) { char c = 'g'; string s = c.ToString(); string s1 = "I am a human being" + c; Console.WriteLine(s1); Console.ReadLine(); }
    options:
      - I am a human bein c
      - I am a human being
      - I am a human being c
      - I am a human bein
    answer: 1
    explanation: I am a human being is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { char c = 'g'; string s = c.ToString(); string s1 = "I am a human being" + c; Console.WriteLine(s1); Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: DIFFERENCE BETWEEN KEYWORDS 'VAR' AND 'DYNAMIC'?
    options:
      - "'Var' is introduced in C# (3.0) and 'Dynamic' is introduced in C# (4.0)"
      - "'Var' is a type of variable where declaration is done at compile time by compiler while 'Dynamic' declaration is achieved at runtime by compiler"
      - For 'Var' Error is caught at compile time and for 'Dynamic' Error is caught at runtime
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “DIFFERENCE BETWEEN KEYWORDS 'VAR' AND 'DYNAMIC'”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: Which of the conversions are valid for the following C# code? static void Main(string[] args) { int a = 22; long b = 44; double c = 1.406; b = a; c = a; a = b; b = c; }
    options:
      - c = a, b = c
      - a = c, b = a
      - b = a, c = a
      - All of the mentioned
    answer: 0
    explanation: c = a, b = c is the correct answer to “Which of the conversions are valid for the following C# code? static void Main(string[] args) { int a = 22; long b = 44; double c = 1.406; b = a; c = a; a = b; b = c; }”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: "Select differences between reference type and value type: i. Memory allocated to 'Value type' is from heap and reference type is from 'System. ValueType' ii. Memory allocated to 'Value type' is from 'System. ValueType' and reference type is from 'Heap' iii. Structures, enumerated types derived from 'System. ValueType' are created on stack, hence known as ValueType and all 'classes' are reference type because values are stored on heap"
    options:
      - i, iii
      - ii, iii
      - i, ii, iii
      - i
    answer: 1
    explanation: "ii, iii is the correct answer to “Select differences between reference type and value type: i. Memory allocated to 'Value type' is from heap and reference type is from 'System. ValueType' ii. Memory allocated to 'Value type' is from 'System. ValueType' and reference type is from 'Heap' iii. Structures, enumerated types derived from 'System. ValueType' are created on stack, hence known as ValueType and all 'classes' are reference type because values are stored on heap”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp."
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: What will be the output of the following C# code? static void Main(string[] args) { const int a = 5; const int b = 6; for (int i = 1; i <= 5; i++) { a = a * i; b = b * i; } Console.WriteLine(a); Console.WriteLine(b); Console.ReadLine(); }
    options:
      - 600, 720
      - Compile time error
      - 25, 30
      - 5, 6
    answer: 1
    explanation: Compile time error is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { const int a = 5; const int b = 6; for (int i = 1; i <= 5; i++) { a = a * i; b = b * i; } Console.WriteLine(a); Console.WriteLine(b); Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: A float occupies 4 bytes. If the hexadecimal equivalent of these 4 bytes are A, B, C and D, then when this float is stored in memory in which of the following order do these bytes gets stored?
    options:
      - ABCD
      - DCBA
      - 0 * ABCD
      - Depends on big endian or little endian architecture
    answer: 3
    explanation: Depends on big endian or little endian architecture is the correct answer to “A float occupies 4 bytes. If the hexadecimal equivalent of these 4 bytes are A, B, C and D, then when this float is stored in memory in which of the following order do these bytes gets stored”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: Default Type of number without decimal is?
    options:
      - Long Int
      - Unsigned Long
      - Int
      - Unsigned Int
    answer: 2
    explanation: Int is the correct answer to “Default Type of number without decimal is”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: What will be the output of the following C# code? static void Main(string[] args) { string Name = "He is playing in a ground."; char[] characters = Name.ToCharArray(); StringBuilder sb = new StringBuilder(); for (int i = Name.Length - 1; i >= 0; --i) { sb.Append(characters[i]); } Console.Write(sb.ToString()); Console.ReadLine(); }
    options:
      - He is playing in a grou
      - .ground a in playing is He
      - .dnuorg a ni gniyalp si eH
      - He playing a
    answer: 2
    explanation: .dnuorg a ni gniyalp si eH is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { string Name = "He is playing in a ground."; char[] characters = Name.ToCharArray(); StringBuilder sb = new StringBuilder(); for (int i = Name.Length - 1; i >= 0; --i) { sb.Append(characters[i]); } Console.Write(sb.ToString()); Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: What will be the output of the following C# code? static void Main(string[] args) { String name = "Dr.Gupta"; Console.WriteLine("Good Morning" + name); }
    options:
      - Dr.Gupta
      - Good Morning
      - Good Morning Dr.Gupta
      - Good Morning name
    answer: 2
    explanation: Good Morning Dr.Gupta is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { String name = "Dr.Gupta"; Console.WriteLine("Good Morning" + name); }”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: Disadvantages of Explicit Conversion are?
    options:
      - Makes program memory heavier
      - Results in loss of data
      - Potentially Unsafe
      - None of the mentioned
    answer: 1
    explanation: Results in loss of data is the correct answer to “Disadvantages of Explicit Conversion are”. This question is standard in competitive examination syllabi for Basic Syntax And Data Types In C Sharp.
    keyConcept: Basic Syntax And Data Types In C Sharp
    testedIn:
      - FPSC
      - PPSC
---


