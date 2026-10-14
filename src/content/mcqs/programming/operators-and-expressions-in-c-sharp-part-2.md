---
title: Operators And Expressions In C Sharp — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Operators And Expressions In C Sharp — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: operators-and-expressions-in-c-sharp-part-2
topicName: Operators And Expressions In C Sharp — Part 2
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
    question: "Correct order of priorities are:"
    options:
      - "'/' > '%' > '*' > '+'"
      - "'/' > '*' > '%' > '+'"
      - "'*' > '/' > '%' > '+'"
      - "'%' > '*' > '/' > '+'"
    answer: 2
    explanation: "'*' > '/' > '%' > '+' is the correct answer to “Correct order of priorities are:”. This question is standard in competitive examination syllabi for Operators And Expressions In C Sharp."
    keyConcept: Operators And Expressions In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: What will be the output of the following C# code? static void Main(string[] args) { int a = 4; int b = 5; int c = 6; int d = 8; if (((a * b / c) + d) >= ((b * c + d ) / a)) { Console.WriteLine("Line 1 - a is greater to b"); Console.WriteLine((a * b / c) + d); } else { Console.WriteLine("Line 1 - a is not greater to b"); Console.WriteLine((b * c + d )/ a); } }
    options:
      - "\"Line 1 - a is greater to b\" 11"
      - "\"Line 1 - a is not greater to b\" 9"
      - Both are equal
      - None of the mentioned
    answer: 0
    explanation: "\"Line 1 - a is greater to b\" 11 is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int a = 4; int b = 5; int c = 6; int d = 8; if (((a * b / c) + d) >= ((b * c + d ) / a)) { Console.WriteLine(\"Line 1 - a is greater to b\"); Console.WriteLine((a * b / c) + d); } else { Console.WriteLine(\"Line 1 - a is not greater to b\"); Console.WriteLine((b * c + d )/ a); } }”. This question is standard in competitive examination syllabi for Operators And Expressions In C Sharp."
    keyConcept: Operators And Expressions In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Which among the following is a conditional operator?
    options:
      - "':?'"
      - "?"
      - "?:"
      - "??"
    answer: 2
    explanation: "?: is the correct answer to “Which among the following is a conditional operator”. This question is standard in competitive examination syllabi for Operators And Expressions In C Sharp."
    keyConcept: Operators And Expressions In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: "What will be the output of the following C# code? static void Main(string[] args) { byte varA = 10; byte varB = 20; long result = varA & varB; Console.WriteLine(\"{0} AND {1} Result :{2}\", varA, varB, result); varA = 10; varB = 10; result = varA & varB; Console.WriteLine(\"{0} AND {1} Result : {2}\", varA, varB, result); Console.ReadLine(); }"
    options:
      - 0, 20
      - 10, 10
      - 0, 10
      - 0, 0
    answer: 2
    explanation: "0, 10 is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { byte varA = 10; byte varB = 20; long result = varA & varB; Console.WriteLine(\"{0} AND {1} Result :{2}\", varA, varB, result); varA = 10; varB = 10; result = varA & varB; Console.WriteLine(\"{0} AND {1} Result : {2}\", varA, varB, result); Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Operators And Expressions In C Sharp."
    keyConcept: Operators And Expressions In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: What will be the output of the following C# code? m = 5; int y; 1. y = m++; 2. y = ++m;
    options:
      - y = 5, m = 6 ; y = 5, m = 5
      - y = 6, m = 6; y = 7, m = 6
      - y = 5, m = 6; y = 7, m = 7
      - y = 5, m = 6; y = 7, m = 8
    answer: 2
    explanation: y = 5, m = 6; y = 7, m = 7 is the correct answer to “What will be the output of the following C# code? m = 5; int y; 1. y = m++; 2. y = ++m;”. This question is standard in competitive examination syllabi for Operators And Expressions In C Sharp.
    keyConcept: Operators And Expressions In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: Select the relevant C# code set to fill up the blank for the following C# program? static void Main(string[] args) { int x = 10, y = 20; int res; /*_______________*/ Console.WriteLine(res); }
    options:
      - x % y == 0 ? (x == y ? (x += 2):(y = x + y)):y = y*10
      - x % y == 0 ? y += 10:(x += 10)
      - "x % y == 0 ? return(x) : return (y)"
      - All of the mentioned
    answer: 1
    explanation: x % y == 0 ? y += 10:(x += 10) is the correct answer to “Select the relevant C# code set to fill up the blank for the following C# program? static void Main(string[] args) { int x = 10, y = 20; int res; /*_______________*/ Console.WriteLine(res); }”. This question is standard in competitive examination syllabi for Operators And Expressions In C Sharp.
    keyConcept: Operators And Expressions In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What will be the output of the following C# code? static void Main(string[] args) { int m = 10, n = 5, p = 20; bool b1 = m * p / n <= p * n / m ; int l = p - 2 * m; bool b2 = l == 0; int z = Convert.ToInt32(b2); int k = Convert.ToInt32(b1); Console.WriteLine(k); Console.WriteLine(z); }
    options:
      - 0 0
      - 1 0
      - 0 1
      - 1 1
    answer: 2
    explanation: 0 1 is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int m = 10, n = 5, p = 20; bool b1 = m * p / n <= p * n / m ; int l = p - 2 * m; bool b2 = l == 0; int z = Convert.ToInt32(b2); int k = Convert.ToInt32(b1); Console.WriteLine(k); Console.WriteLine(z); }”. This question is standard in competitive examination syllabi for Operators And Expressions In C Sharp.
    keyConcept: Operators And Expressions In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: "What will be the output of the following C# code? static void Main(string[] args) { int y = 5; int x; int k = (!(Convert.ToInt32(y) > 10))? x = y + 3 : x = y + 10; Console.WriteLine(x); Console.WriteLine(y); Console.ReadLine(); }"
    options:
      - 5, 8
      - 10, 4
      - 8, 5
      - 11, 8
    answer: 2
    explanation: "8, 5 is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int y = 5; int x; int k = (!(Convert.ToInt32(y) > 10))? x = y + 3 : x = y + 10; Console.WriteLine(x); Console.WriteLine(y); Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Operators And Expressions In C Sharp."
    keyConcept: Operators And Expressions In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: Which of the following options is not a Bitwise Operator in C#?
    options:
      - "&, |"
      - ^, ~
      - <<, >>
      - +=, -=
    answer: 3
    explanation: +=, -= is the correct answer to “Which of the following options is not a Bitwise Operator in C#”. This question is standard in competitive examination syllabi for Operators And Expressions In C Sharp.
    keyConcept: Operators And Expressions In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: Arrange the operators in the increasing order as defined in C#. !=, ?:, &, ++, &&
    options:
      - "?: < && < != < & < ++"
      - "?: < && < != < ++ < &"
      - "?: < && < & <!= < ++"
      - None of the above
    answer: 2
    explanation: "?: < && < & <!= < ++ is the correct answer to “Arrange the operators in the increasing order as defined in C#. !=, ?:, &, ++, &&”. This question is standard in competitive examination syllabi for Operators And Expressions In C Sharp."
    keyConcept: Operators And Expressions In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: "What will be the output of the following C# code? public static void Main() { byte varA = 10; byte varB = 20; long result = varA | varB; Console.WriteLine(\"{0} OR {1} Result :{2}\", varA, varB, result); varA = 10; varB = 10; result = varA | varB; Console.WriteLine(\"{0} OR {1} Result : {2}\", varA, varB, result); }"
    options:
      - 20, 10
      - 30, 10
      - 10, 20
      - 10, 10
    answer: 1
    explanation: "30, 10 is the correct answer to “What will be the output of the following C# code? public static void Main() { byte varA = 10; byte varB = 20; long result = varA | varB; Console.WriteLine(\"{0} OR {1} Result :{2}\", varA, varB, result); varA = 10; varB = 10; result = varA | varB; Console.WriteLine(\"{0} OR {1} Result : {2}\", varA, varB, result); }”. This question is standard in competitive examination syllabi for Operators And Expressions In C Sharp."
    keyConcept: Operators And Expressions In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: What will be the output of the following C# code? static void Main(string[] args) { int a, b, c, x; a = 90; b = 15; c = 3; x = a - b / 3 + c * 2 - 1; Console.WriteLine(x); Console.ReadLine(); }
    options:
      - "92"
      - "89"
      - "90"
      - "88"
    answer: 2
    explanation: 90 is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int a, b, c, x; a = 90; b = 15; c = 3; x = a - b / 3 + c * 2 - 1; Console.WriteLine(x); Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Operators And Expressions In C Sharp.
    keyConcept: Operators And Expressions In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What will be the output of the following C# code? static void Main(string[] args) { float a = 16.4f; int b = 12; float c; c = a * ( b + a) / (a - b) ; Console.WriteLine("result is :" +c); Console.ReadLine(); }
    options:
      - "106"
      - "104.789"
      - "105.8546"
      - "103.45"
    answer: 2
    explanation: 105.8546 is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { float a = 16.4f; int b = 12; float c; c = a * ( b + a) / (a - b) ; Console.WriteLine("result is :" +c); Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Operators And Expressions In C Sharp.
    keyConcept: Operators And Expressions In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: Check the following C# code whether the given relation operator works according to the if condition or not. static void Main(string[] args) { int a = 10; int b = 5; int c = 12; int e = 8; int d; d = Convert.ToInt32((a * (c - b) / e + (b + c)) <= (e * (c + a) / (b + c) + a)); Console.WriteLine(d); if (d == 1) { Console.WriteLine("C# is great language!"); Console.WriteLine((a * (c - b) / e + (b + c))); } else { Console.WriteLine("harsh is not great language!"); Console.WriteLine((e * (c + a) / (b + c) + a)); } }
    options:
      - 0 C# is great! 20
      - 0 C# is not great! 25
      - 0 C# is great! 25
      - 0 C# is not great! 20
    answer: 3
    explanation: 0 C# is not great! 20 is the correct answer to “Check the following C# code whether the given relation operator works according to the if condition or not. static void Main(string[] args) { int a = 10; int b = 5; int c = 12; int e = 8; int d; d = Convert.ToInt32((a * (c - b) / e + (b + c)) <= (e * (c + a) / (b + c) + a)); Console.WriteLine(d); if (d == 1) { Console.WriteLine("C# is great language!"); Console.WriteLine((a * (c - b) / e + (b + c))); } else { Console.WriteLine("harsh is not great language!"); Console.WriteLine((e * (c + a) / (b + c) + a)); } }”. This question is standard in competitive examination syllabi for Operators And Expressions In C Sharp.
    keyConcept: Operators And Expressions In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: "What will be the output of the following C# code? public static void Main(string[] args) { int a = 4; int c = 2; bool b = (a % c == 0 ? true : false); Console.WriteLine(b.ToString()); if (a/c == 2) { Console.WriteLine(\"true\"); } else { Console.WriteLine(\"false\"); } Console.ReadLine(); }"
    options:
      - TRUE FALSE
      - FALSE TRUE
      - TRUE TRUE
      - FALSE FALSE
    answer: 2
    explanation: "TRUE TRUE is the correct answer to “What will be the output of the following C# code? public static void Main(string[] args) { int a = 4; int c = 2; bool b = (a % c == 0 ? true : false); Console.WriteLine(b.ToString()); if (a/c == 2) { Console.WriteLine(\"true\"); } else { Console.WriteLine(\"false\"); } Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Operators And Expressions In C Sharp."
    keyConcept: Operators And Expressions In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What will be the output of the following C# code? static void Main(string[] args) { int a = 3, b = 5, c = 1; int z = ++b; int y = ++c; b = Convert.ToInt32((Convert.ToBoolean(z)) && (Convert.ToBoolean(y)) || Convert.ToBoolean(Convert.ToInt32(!(++a == b)))); a = Convert.ToInt32(Convert.ToBoolean(c) || Convert.ToBoolean(a--)); Console.WriteLine(++a); Console.WriteLine(++b); Console.WriteLine(c); }
    options:
      - 2, 2, 1
      - 2, 3, 2
      - 2, 2, 2
      - 2, 0, 9
    answer: 2
    explanation: 2, 2, 2 is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int a = 3, b = 5, c = 1; int z = ++b; int y = ++c; b = Convert.ToInt32((Convert.ToBoolean(z)) && (Convert.ToBoolean(y)) || Convert.ToBoolean(Convert.ToInt32(!(++a == b)))); a = Convert.ToInt32(Convert.ToBoolean(c) || Convert.ToBoolean(a--)); Console.WriteLine(++a); Console.WriteLine(++b); Console.WriteLine(c); }”. This question is standard in competitive examination syllabi for Operators And Expressions In C Sharp.
    keyConcept: Operators And Expressions In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What will be the output of the following C# code? static void Main(string[] args) { int a = 8, b = 6, c = 10; int d = a * c * 2 / Convert.ToInt32(Math.Pow ((c - b), 2)); if (d == (c = Convert.ToInt32(Math.Sqrt (a * a + b * b))) && c == 10) { Console.WriteLine("figure is hypotenuse"); } else { Console.WriteLine("figure is square"); } }
    options:
      - Figure is square
      - Figure is hypotenuse
      - "False"
      - None of the mentioned
    answer: 0
    explanation: Figure is square is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int a = 8, b = 6, c = 10; int d = a * c * 2 / Convert.ToInt32(Math.Pow ((c - b), 2)); if (d == (c = Convert.ToInt32(Math.Sqrt (a * a + b * b))) && c == 10) { Console.WriteLine("figure is hypotenuse"); } else { Console.WriteLine("figure is square"); } }”. This question is standard in competitive examination syllabi for Operators And Expressions In C Sharp.
    keyConcept: Operators And Expressions In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: What will be the output of the following C# code? static void Main(string[] args) { int n = 5; int x = 4; int z, c, k; for (c = 1; c <= n; c++) { for (k = 1; k <= c; k++) { z = 3 * x * x + 2 * x + 4 / x + 8; Console.Write(Convert.ToString(Convert.ToChar(z))); } Console.WriteLine("\n"); } Console.ReadLine(); }
    options:
      - A AA AAA AAAA
      - A AB ABC ABCD
      - A AA AAA AAAA AAAAA
      - A BC DEF DEFG
    answer: 2
    explanation: A AA AAA AAAA AAAAA is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int n = 5; int x = 4; int z, c, k; for (c = 1; c <= n; c++) { for (k = 1; k <= c; k++) { z = 3 * x * x + 2 * x + 4 / x + 8; Console.Write(Convert.ToString(Convert.ToChar(z))); } Console.WriteLine("\n"); } Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Operators And Expressions In C Sharp.
    keyConcept: Operators And Expressions In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: What will be the output of the following C# code? int n = 2; int p = 4; int q = 5; int w = 3; if ( !((p * q) /n <= (q * w) + n/p )) { Console.WriteLine( ++p + w++ + " " + ++n); Console.WriteLine("b"); } else { Console.WriteLine(--p + q-- + " " + --n); Console.WriteLine("a"); }
    options:
      - 6 2 b
      - 8 1 a
      - 6 1 a
      - 8 1 b
    answer: 1
    explanation: 8 1 a is the correct answer to “What will be the output of the following C# code? int n = 2; int p = 4; int q = 5; int w = 3; if ( !((p * q) /n <= (q * w) + n/p )) { Console.WriteLine( ++p + w++ + " " + ++n); Console.WriteLine("b"); } else { Console.WriteLine(--p + q-- + " " + --n); Console.WriteLine("a"); }”. This question is standard in competitive examination syllabi for Operators And Expressions In C Sharp.
    keyConcept: Operators And Expressions In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What will be the output of the following C# code? bool a = true; bool b = false; a |= b; Console.WriteLine(a); Console.ReadLine();
    options:
      - "0"
      - "1"
      - "True"
      - "False"
    answer: 2
    explanation: True is the correct answer to “What will be the output of the following C# code? bool a = true; bool b = false; a |= b; Console.WriteLine(a); Console.ReadLine();”. This question is standard in competitive examination syllabi for Operators And Expressions In C Sharp.
    keyConcept: Operators And Expressions In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: What will be the output of the following C# code? static void Main(string[] args) { int a = 4, b = 5, c = 7, u = 9; int h; h = (Convert.ToInt32(u < b)) + (a + b--) + 2; Console.WriteLine(h); Console.WriteLine(b); Console.WriteLine(u < b); }
    options:
      - 12, 5, 0
      - 11, 4, False
      - 11, 5, 0
      - 12, 4, False
    answer: 1
    explanation: 11, 4, False is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int a = 4, b = 5, c = 7, u = 9; int h; h = (Convert.ToInt32(u < b)) + (a + b--) + 2; Console.WriteLine(h); Console.WriteLine(b); Console.WriteLine(u < b); }”. This question is standard in competitive examination syllabi for Operators And Expressions In C Sharp.
    keyConcept: Operators And Expressions In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What will be the output of the following C# code? static void Main(string[] args) { int a , b; int c = 10; int d = 12; int e = 5; int f = 6; a = c * (d + e) / f + d; Console.WriteLine(a); b = c * ( d + e / f + d); Console.WriteLine(b); if (a < b) { Console.WriteLine(" parentheses changes values"); } else if (a > b) { Counterintelligence("they have same value"); } Console.ReadLine(); }
    options:
      - They have same value
      - Parentheses changes values
      - Since both have equal values, no conclusion
      - None of the mentioned
    answer: 1
    explanation: Parentheses changes values is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int a , b; int c = 10; int d = 12; int e = 5; int f = 6; a = c * (d + e) / f + d; Console.WriteLine(a); b = c * ( d + e / f + d); Console.WriteLine(b); if (a < b) { Console.WriteLine(" parentheses changes values"); } else if (a > b) { Counterintelligence("they have same value"); } Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Operators And Expressions In C Sharp.
    keyConcept: Operators And Expressions In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: Which of the following is/are not Relational operators in C#.NET?
    options:
      - ">="
      - <>=
      - Not
      - <=
    answer: 1
    explanation: <>= is the correct answer to “Which of the following is/are not Relational operators in C#.NET”. This question is standard in competitive examination syllabi for Operators And Expressions In C Sharp.
    keyConcept: Operators And Expressions In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: What will be the output of the following C# code? static void Main(string[] args) { int a, b, c, x; a = 80; b = 15; c = 2; x = a - b / (3 * c) * ( a + c); Console.WriteLine(x); Console.ReadLine(); }
    options:
      - "78"
      - "-84"
      - "80"
      - "98"
    answer: 1
    explanation: "-84 is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int a, b, c, x; a = 80; b = 15; c = 2; x = a - b / (3 * c) * ( a + c); Console.WriteLine(x); Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Operators And Expressions In C Sharp."
    keyConcept: Operators And Expressions In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: What will be the output of the following C# code? static void Main(string[] args) { byte b1 = 0 * AB; byte b2 = 0 * 99; byte temp; temp = (byte) ~b2; Console.Write( temp + " "); temp = (byte) (b1 << b2); Console.Write(temp + " "); temp = (byte)(b2 >> 2); Console.WriteLine(temp); Console.ReadLine(); }
    options:
      - 101 0 34
      - 103 2 38
      - 102 0 38
      - 101 1 35
    answer: 2
    explanation: 102 0 38 is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { byte b1 = 0 * AB; byte b2 = 0 * 99; byte temp; temp = (byte) ~b2; Console.Write( temp + " "); temp = (byte) (b1 << b2); Console.Write(temp + " "); temp = (byte)(b2 >> 2); Console.WriteLine(temp); Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Operators And Expressions In C Sharp.
    keyConcept: Operators And Expressions In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: What will be the output of the following C# code? static void Main(string[] args) { int n = 5; int x = 4; int z, c, k; z = 3 * x * x + 2 * x + 4 / x + 8; for (c = 1; c <= n; c++) { for (k = 1; k <= c; k++) { Console.Write(Convert.ToString(Convert.ToChar(z))); z++; } Console.WriteLine("\n"); } Console.ReadLine(); }
    options:
      - A AA AAA AAAA AAAAA
      - A AB ABC ABCD ABCDE
      - A BC DEF GHIJ KLMNO
      - A AB BC BCD BCDE
    answer: 2
    explanation: A BC DEF GHIJ KLMNO is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int n = 5; int x = 4; int z, c, k; z = 3 * x * x + 2 * x + 4 / x + 8; for (c = 1; c <= n; c++) { for (k = 1; k <= c; k++) { Console.Write(Convert.ToString(Convert.ToChar(z))); z++; } Console.WriteLine("\n"); } Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Operators And Expressions In C Sharp.
    keyConcept: Operators And Expressions In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: What will be the output of the following C# code? int i, j = 1, k; for (i = 0; i < 3; i++) { k = j++ - ++j; Console.Write(k + " "); }
    options:
      - "-4 -3 -2"
      - "-6 -4 -1"
      - "-2 -2 -2"
      - "-4 -4 -4"
    answer: 2
    explanation: "-2 -2 -2 is the correct answer to “What will be the output of the following C# code? int i, j = 1, k; for (i = 0; i < 3; i++) { k = j++ - ++j; Console.Write(k + \" \"); }”. This question is standard in competitive examination syllabi for Operators And Expressions In C Sharp."
    keyConcept: Operators And Expressions In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: "The correct way of incrementing the operators are:"
    options:
      - ++ a ++
      - b ++ 1
      - c += 1
      - d =+ 1
    answer: 2
    explanation: c += 1 is the correct answer to “The correct way of incrementing the operators are:”. This question is standard in competitive examination syllabi for Operators And Expressions In C Sharp.
    keyConcept: Operators And Expressions In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: What will be the output of the following C# code? class method1 { public int fun(int m) { return( m++ % 10); } } class Program { static void Main(string[] args) { int a = 23, b = 0, c; method1 z = new method1(); c = z.fun (++b * --a % 2); int d = (z.fun (c-- + --a)); Console.WriteLine(c); Console.WriteLine(a++); Console.WriteLine(d); Console.ReadLine(); } }
    options:
      - "-1, 22, 0"
      - "-1, 21, 1"
      - 0, 22, 1
      - 0, 22, 0
    answer: 1
    explanation: "-1, 21, 1 is the correct answer to “What will be the output of the following C# code? class method1 { public int fun(int m) { return( m++ % 10); } } class Program { static void Main(string[] args) { int a = 23, b = 0, c; method1 z = new method1(); c = z.fun (++b * --a % 2); int d = (z.fun (c-- + --a)); Console.WriteLine(c); Console.WriteLine(a++); Console.WriteLine(d); Console.ReadLine(); } }”. This question is standard in competitive examination syllabi for Operators And Expressions In C Sharp."
    keyConcept: Operators And Expressions In C Sharp
    testedIn:
      - FPSC
      - PPSC
---


