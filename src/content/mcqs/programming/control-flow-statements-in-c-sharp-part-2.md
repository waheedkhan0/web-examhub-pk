---
title: Control Flow Statements In C Sharp — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Control Flow Statements In C Sharp — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: control-flow-statements-in-c-sharp-part-2
topicName: Control Flow Statements In C Sharp — Part 2
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
    question: Which of the following is not infinite loop?
    options:
      - for( '0' )
      - for( ;'0'; )
      - for( '1' )
      - for( ;'1'; )
    answer: 1
    explanation: for( ;'0'; ) is the correct answer to “Which of the following is not infinite loop”. This question is standard in competitive examination syllabi for Control Flow Statements In C Sharp.
    keyConcept: Control Flow Statements In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: What will be the output of the following C# code? static void Main(string[] args) { int i = -10; for ( ;Convert.ToBoolean(Convert.ToInt32(i)) ;Console.WriteLine(i++)) ; Console.ReadLine(); }
    options:
      - "-9 -8 -7 -6 -5 -4 -3 -2 -1"
      - "-10 -9 -8 -7 -6 -5 -4 -3 -2"
      - "-10 -9 -8 -7 -6 -5 -4 -3 -2 -1"
      - "-8 -7 -6 -5 -4 -3 -2 -1"
    answer: 2
    explanation: "-10 -9 -8 -7 -6 -5 -4 -3 -2 -1 is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int i = -10; for ( ;Convert.ToBoolean(Convert.ToInt32(i)) ;Console.WriteLine(i++)) ; Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Control Flow Statements In C Sharp."
    keyConcept: Control Flow Statements In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: "What will be the output of the following C# code? static void Main(string[] args) { int i = 2, k = 3; switch (i - k) { case -1: ++i; ++k; break; case 2: --i; ++k; break; default: i += 3; k += i; break; } Console.WriteLine(i + \"\\n\" + k); Console.ReadLine(); }"
    options:
      - 2 3 3
      - 3 2 3
      - 3 4 4
      - 5 10 10
    answer: 2
    explanation: "3 4 4 is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int i = 2, k = 3; switch (i - k) { case -1: ++i; ++k; break; case 2: --i; ++k; break; default: i += 3; k += i; break; } Console.WriteLine(i + \"\\n\" + k); Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Control Flow Statements In C Sharp."
    keyConcept: Control Flow Statements In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What will be the output of the following C# code? static void Main(string[] args) { int i = 1, j; do { for (j = 1; ; j++) { if (j > 2) break; if (i == j) continue; Console.WriteLine(i + " " + j); } i++; } while (i < 3); Console.ReadLine(); }
    options:
      - 1 2 2 1
      - 2 1 1 2
      - 1 3 2 1
      - 1 1 2 1
    answer: 0
    explanation: 1 2 2 1 is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int i = 1, j; do { for (j = 1; ; j++) { if (j > 2) break; if (i == j) continue; Console.WriteLine(i + " " + j); } i++; } while (i < 3); Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Control Flow Statements In C Sharp.
    keyConcept: Control Flow Statements In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: "What will be the output of the following C# code? static void Main(string[] args) { int i; Console.WriteLine(\"enter value of i:\"); i = Convert.ToInt32(Console.ReadLine()); if ( i % 2 == 0) goto even: else { Console.WriteLine(\"number is odd:\"); Console.ReadLine(); } even: Console.WriteLine(\"number is even:\"); Console.ReadLine(); } for i = 4."
    options:
      - number is odd
      - number is even
      - Compile time error
      - none of the mentioned
    answer: 2
    explanation: "Compile time error is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int i; Console.WriteLine(\"enter value of i:\"); i = Convert.ToInt32(Console.ReadLine()); if ( i % 2 == 0) goto even: else { Console.WriteLine(\"number is odd:\"); Console.ReadLine(); } even: Console.WriteLine(\"number is even:\"); Console.ReadLine(); } for i = 4.”. This question is standard in competitive examination syllabi for Control Flow Statements In C Sharp."
    keyConcept: Control Flow Statements In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: "What will be the output of the following C# code? static void Main(string[] args) { int i = 2, j = 3, k = 4; switch (i + j - k) { case 0: case 2: case 4: ++i; k += j; break; case 1: case 3: case 5 : --i; k -= j; break; default: i += j; break; } Console.WriteLine(i + \"\\n\" + j + \"\\n\" + k); Console.ReadLine(); }"
    options:
      - 1 3 1
      - 2 3 4
      - 5 3 4
      - Compile time error
    answer: 0
    explanation: "1 3 1 is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int i = 2, j = 3, k = 4; switch (i + j - k) { case 0: case 2: case 4: ++i; k += j; break; case 1: case 3: case 5 : --i; k -= j; break; default: i += j; break; } Console.WriteLine(i + \"\\n\" + j + \"\\n\" + k); Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Control Flow Statements In C Sharp."
    keyConcept: Control Flow Statements In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What will be the output of the following C# code? static void Main(string[] args) { int i = 1, j = 2, k = 3; do { Console.WriteLine((Convert.ToBoolean(Convert.ToInt32(i++))) && (Convert.ToBoolean(Convert.ToInt32(++j)))); }while (i <= 3); Console.ReadLine(); }
    options:
      - 0 0 0
      - True True True
      - 1 1 1
      - False False False
    answer: 1
    explanation: True True True is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int i = 1, j = 2, k = 3; do { Console.WriteLine((Convert.ToBoolean(Convert.ToInt32(i++))) && (Convert.ToBoolean(Convert.ToInt32(++j)))); }while (i <= 3); Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Control Flow Statements In C Sharp.
    keyConcept: Control Flow Statements In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: "What will be the output of the following C# code? static void Main(string[] args) { char ch = Convert.ToChar('a' | 'b' | 'c'); switch (ch) { case 'A': case 'a': Console.WriteLine(\"case A|case a\"); break; case 'B': case 'b': Console.WriteLine(\"case B|case b\"); break; case 'C': case 'c': case 'D': case 'd': Console.WriteLine(\"case D|case d\"); break; } Console.ReadLine(); }"
    options:
      - Compile time error
      - case A|case a
      - case B|case b
      - case D|case d
    answer: 3
    explanation: "case D|case d is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { char ch = Convert.ToChar('a' | 'b' | 'c'); switch (ch) { case 'A': case 'a': Console.WriteLine(\"case A|case a\"); break; case 'B': case 'b': Console.WriteLine(\"case B|case b\"); break; case 'C': case 'c': case 'D': case 'd': Console.WriteLine(\"case D|case d\"); break; } Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Control Flow Statements In C Sharp."
    keyConcept: Control Flow Statements In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What will be the output of the following C# code? static void Main(string[] args) { float s = 0.1f; while (s <= 0.5f) { ++s; Console.WriteLine(s); } Console.ReadLine(); }
    options:
      - "0.1"
      - "1.1"
      - 0.1 0.2 0.3 0.4 0.5
      - No output
    answer: 1
    explanation: 1.1 is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { float s = 0.1f; while (s <= 0.5f) { ++s; Console.WriteLine(s); } Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Control Flow Statements In C Sharp.
    keyConcept: Control Flow Statements In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What will be the output of the following C# code? static void Main(string[] args) { int x = 10; do { Console.WriteLine( x++); } while(Convert.ToBoolean(5) && Convert.ToBoolean(4) && Convert.ToBoolean(3) && Convert.ToBoolean(2) && Convert.ToBoolean(1) && Convert.ToBoolean(0)); Console.ReadLine(); }
    options:
      - "13"
      - "15"
      - "11"
      - "10"
    answer: 3
    explanation: 10 is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int x = 10; do { Console.WriteLine( x++); } while(Convert.ToBoolean(5) && Convert.ToBoolean(4) && Convert.ToBoolean(3) && Convert.ToBoolean(2) && Convert.ToBoolean(1) && Convert.ToBoolean(0)); Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Control Flow Statements In C Sharp.
    keyConcept: Control Flow Statements In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What will be the output of the following C# code? static void Main(string[] args) { int i; Console.WriteLine("enter value of i:"); i = Convert.ToInt32(Console.ReadLine()); if (i < 7) { i++; continue; } Console.WriteLine("final value of i:" +i); Console.ReadLine(); }
    options:
      - "12"
      - "11"
      - Compile time error
      - "13"
    answer: 2
    explanation: Compile time error is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int i; Console.WriteLine("enter value of i:"); i = Convert.ToInt32(Console.ReadLine()); if (i < 7) { i++; continue; } Console.WriteLine("final value of i:" +i); Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Control Flow Statements In C Sharp.
    keyConcept: Control Flow Statements In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: "What will be the output of the following C# code? static void Main(string[] args) { int i = 0; if (i == 0) { goto label; } label: Console.WriteLine(\"HI...\"); Console.ReadLine(); }"
    options:
      - Hi... infinite times
      - Code runs prints nothing
      - Hi Hi
      - Hi...
    answer: 3
    explanation: "Hi... is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int i = 0; if (i == 0) { goto label; } label: Console.WriteLine(\"HI...\"); Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Control Flow Statements In C Sharp."
    keyConcept: Control Flow Statements In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What will be the output of the following C# code? static void Main(string[] args) { int i = 0; while (i++ != 0) ; Console.WriteLine(i); Console.ReadLine(); }
    options:
      - "-127 to +127"
      - 0 to 127
      - "1"
      - Infinite loop condition
    answer: 2
    explanation: 1 is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int i = 0; while (i++ != 0) ; Console.WriteLine(i); Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Control Flow Statements In C Sharp.
    keyConcept: Control Flow Statements In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What will be the output of the following C# code? static void Main(string[] args) { int i = 0; while (i <= 50) { if (i % 10 == 0) continue; else break; i += 10; Console.WriteLine(i % 10); } }
    options:
      - code prints output as 0 0 0 0 0
      - code prints output as 10 20 30 40 50
      - infinite loop but doesn't print anything
      - Code generate error
    answer: 2
    explanation: infinite loop but doesn't print anything is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int i = 0; while (i <= 50) { if (i % 10 == 0) continue; else break; i += 10; Console.WriteLine(i % 10); } }”. This question is standard in competitive examination syllabi for Control Flow Statements In C Sharp.
    keyConcept: Control Flow Statements In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What is the correct syntax for do while loop?
    options:
      - do; { statement; }while (condition)
      - do(condition) { statement; }while
      - do { statement; }while (condition)
      - do { statement; }while (condition)
    answer: 3
    explanation: do { statement; }while (condition) is the correct answer to “What is the correct syntax for do while loop”. This question is standard in competitive examination syllabi for Control Flow Statements In C Sharp.
    keyConcept: Control Flow Statements In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What will be the output of the following C# code? static void Main(string[] args) { int i = 1; while (i <= 1) { if ('A' < 'a') { Console.WriteLine("Hello..."); } else { Console.WriteLine("Hi..."); } i++; } Console.ReadLine(); }
    options:
      - Hi...
      - Hello...
      - Hi... infinite times
      - Hello... infinite times
    answer: 1
    explanation: Hello... is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int i = 1; while (i <= 1) { if ('A' < 'a') { Console.WriteLine("Hello..."); } else { Console.WriteLine("Hi..."); } i++; } Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Control Flow Statements In C Sharp.
    keyConcept: Control Flow Statements In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What will be the output of the following C# code? static void Main(string[] args) { int a = 5, b = 10; if (Convert.ToBoolean(Convert.ToInt32(++a)) || Convert.ToBoolean(Convert.ToInt32(++b))) { Console.WriteLine(a + "\n" + b); } else Console.WriteLine(" C# "); }
    options:
      - 6 11
      - 6 16
      - 6 12
      - 6 10
    answer: 3
    explanation: 6 10 is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int a = 5, b = 10; if (Convert.ToBoolean(Convert.ToInt32(++a)) || Convert.ToBoolean(Convert.ToInt32(++b))) { Console.WriteLine(a + "\n" + b); } else Console.WriteLine(" C# "); }”. This question is standard in competitive examination syllabi for Control Flow Statements In C Sharp.
    keyConcept: Control Flow Statements In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: What will be the output of the following C# code? static void Main(string[] args) { int i, s = 0, a = 1, d; i = Convert.ToInt32(Console.ReadLine()); do { d = i % (2 * 4); s = s + d * a; }while ((Convert.ToInt32(i = i / (2 * 4))) != 0 && (Convert.ToBoolean(Convert.ToInt32((a) = (a * 10))))); Console.WriteLine(s); Console.ReadLine(); } enter i = 342.
    options:
      - It finds binary equivalent of i
      - It finds octal equivalent of i
      - It finds sum of digits of i
      - It finds reverse of i
    answer: 1
    explanation: It finds octal equivalent of i is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int i, s = 0, a = 1, d; i = Convert.ToInt32(Console.ReadLine()); do { d = i % (2 * 4); s = s + d * a; }while ((Convert.ToInt32(i = i / (2 * 4))) != 0 && (Convert.ToBoolean(Convert.ToInt32((a) = (a * 10))))); Console.WriteLine(s); Console.ReadLine(); } enter i = 342.”. This question is standard in competitive examination syllabi for Control Flow Statements In C Sharp.
    keyConcept: Control Flow Statements In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: What will be the output of the following C# code? static void Main(string[] args) { int i = 1, j = 5; do { Console.WriteLine(i = i++ * j); }while (i <= 10); Console.ReadLine(); }
    options:
      - 5 10 15 20 25 30 35 40 45 50
      - 5 25
      - 5 11 16 21 26 31 36 41 46 51
      - 5 30
    answer: 1
    explanation: 5 25 is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int i = 1, j = 5; do { Console.WriteLine(i = i++ * j); }while (i <= 10); Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Control Flow Statements In C Sharp.
    keyConcept: Control Flow Statements In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What will be the output of the following C# code? static void Main(string[] args) { int i = 1, j = 1; while (++i <= 10) { j++; } Console.WriteLine(i+ " " +j); Console.ReadLine(); }
    options:
      - 12 11
      - 10 11
      - 11 10
      - 11 12
    answer: 2
    explanation: 11 10 is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int i = 1, j = 1; while (++i <= 10) { j++; } Console.WriteLine(i+ " " +j); Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Control Flow Statements In C Sharp.
    keyConcept: Control Flow Statements In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: What will be the output of the following C# code? static void Main(string[] args) { int I, J = 0; for (I = 1; I < 10; ) ; { J = J + I; I += 2; } Console.WriteLine("Sum of first 10 even numbers is:"+J); Console.ReadLine(); }
    options:
      - 1 2 3 4 5 6 7 8 9
      - "25"
      - "1"
      - Run time error
    answer: 3
    explanation: Run time error is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int I, J = 0; for (I = 1; I < 10; ) ; { J = J + I; I += 2; } Console.WriteLine("Sum of first 10 even numbers is:"+J); Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Control Flow Statements In C Sharp.
    keyConcept: Control Flow Statements In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What will be the output of the following C# code? static void Main(string[] args) { int i; for (i = 0; ; ) { Console.WriteLine("hello"); } Console.ReadLine(); }
    options:
      - No output
      - hello
      - hello printed infinite times
      - Code will give error as expression syntax
    answer: 2
    explanation: hello printed infinite times is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int i; for (i = 0; ; ) { Console.WriteLine("hello"); } Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Control Flow Statements In C Sharp.
    keyConcept: Control Flow Statements In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: "What will be the output of the following C# code? static void Main(string[] args) { int i = 10 , j = 0; label: i--; if ( i > 0) { Console.WriteLine(i+ \" \"); goto label; } Console.ReadLine(); }"
    options:
      - 1 2 3 4 5 6 7 8 9 10
      - 10 9 8 7 6 5 4 3 2 1 0
      - 9 8 7 6 5 4 3 2 1
      - 10 9 8 7 6 5 4 3 2 1
    answer: 2
    explanation: "9 8 7 6 5 4 3 2 1 is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int i = 10 , j = 0; label: i--; if ( i > 0) { Console.WriteLine(i+ \" \"); goto label; } Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Control Flow Statements In C Sharp."
    keyConcept: Control Flow Statements In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: "What will be the output of the following C# code? static void Main(string[] args) { int i= 0,k; label: Console.WriteLine(i); if (i == 0) goto label; Console.ReadLine(); }"
    options:
      - 0 0 0 0
      - 0 0 0
      - 0 infinite times
      - "0"
    answer: 2
    explanation: "0 infinite times is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int i= 0,k; label: Console.WriteLine(i); if (i == 0) goto label; Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Control Flow Statements In C Sharp."
    keyConcept: Control Flow Statements In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: What will be the output of the following C# code? static void Main(string[] args) { int I, X; for (I = 1; I <= (9 % 2 + I); I++) { X = (I * 3 + I * 2) / I; Console.WriteLine(X); } Console.ReadLine(); }
    options:
      - Output of code is 5 10
      - Output is 5 5 5 5
      - Print 5 infinite times
      - None of the mentioned
    answer: 2
    explanation: Print 5 infinite times is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int I, X; for (I = 1; I <= (9 % 2 + I); I++) { X = (I * 3 + I * 2) / I; Console.WriteLine(X); } Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Control Flow Statements In C Sharp.
    keyConcept: Control Flow Statements In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: What will be the output of the following C# code? static void Main(string[] args) { int i, j; for (i = 2; i >= 0; i--) { for (j = 0; j <= 2; j++) { if (i == j) { Console.WriteLine("1"); } else { Console.WriteLine("0"); } } Console.WriteLine("\n"); Console.ReadLine(); } }
    options:
      - 1 0 0 0 1 0 0 0 1
      - 0 1 0 1 0 0 0 0 1
      - 0 0 1 0 1 0 1 0 0
      - 1 0 0 0 0 1 0 1 0
    answer: 2
    explanation: 0 0 1 0 1 0 1 0 0 is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int i, j; for (i = 2; i >= 0; i--) { for (j = 0; j <= 2; j++) { if (i == j) { Console.WriteLine("1"); } else { Console.WriteLine("0"); } } Console.WriteLine("\n"); Console.ReadLine(); } }”. This question is standard in competitive examination syllabi for Control Flow Statements In C Sharp.
    keyConcept: Control Flow Statements In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: "What will be the output of the following C# code? static void Main(string[] args) { int i = 0, j = 0; while (i < 2) { l1: i--; while (j < 2) { Console.WriteLine(\"hi\\n\"); goto l1; } } Console.ReadLine(); }"
    options:
      - hi hi hi
      - hi hi
      - hi
      - hi hi hi..... infinite times
    answer: 3
    explanation: "hi hi hi..... infinite times is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int i = 0, j = 0; while (i < 2) { l1: i--; while (j < 2) { Console.WriteLine(\"hi\\n\"); goto l1; } } Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Control Flow Statements In C Sharp."
    keyConcept: Control Flow Statements In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: What will be the output of the following C# code? static void Main(string[] args) { int i = 30; int j = 25 % 25; if (Convert.ToBoolean(Convert.ToInt32(i = j))) { Console.WriteLine("In if"); } else { Console.WriteLine("In else"); } Console.WriteLine("In main"); Console.ReadLine(); }
    options:
      - In if
      - In else
      - In if In main
      - In else In main
    answer: 3
    explanation: In else In main is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int i = 30; int j = 25 % 25; if (Convert.ToBoolean(Convert.ToInt32(i = j))) { Console.WriteLine("In if"); } else { Console.WriteLine("In else"); } Console.WriteLine("In main"); Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Control Flow Statements In C Sharp.
    keyConcept: Control Flow Statements In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: "Select the output for the following set of code : static void Main(string[] args) { int a = 0; int i = 0; int b; for (i = 0; i < 5; i++) { a++; Console.WriteLine(\"Hello \\n\"); continue; } Console.ReadLine(); }"
    options:
      - print hello 4 times
      - print hello 3 times
      - print hello 5 times
      - print hello infinite times
    answer: 2
    explanation: "print hello 5 times is the correct answer to “Select the output for the following set of code : static void Main(string[] args) { int a = 0; int i = 0; int b; for (i = 0; i < 5; i++) { a++; Console.WriteLine(\"Hello \\n\"); continue; } Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Control Flow Statements In C Sharp."
    keyConcept: Control Flow Statements In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: What will be the output of the following C# code? static void Main(string[] args) { int i, j; for (i = 1; i <= 3; i++) { j = 1; while (i % j == 2) { j++; } Console.WriteLine(i + " " + j); } Console.ReadLine(); }
    options:
      - "112131"
      - 1 12 13 1
      - 11 21 31
      - 1 1 2 1 3 1
    answer: 2
    explanation: 11 21 31 is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int i, j; for (i = 1; i <= 3; i++) { j = 1; while (i % j == 2) { j++; } Console.WriteLine(i + " " + j); } Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Control Flow Statements In C Sharp.
    keyConcept: Control Flow Statements In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: What will be the output of the following C# code? static void Main(string[] args) { int n, r; n = Convert.ToInt32(Console.ReadLine()); while (n > 0) { r = n % 10; n = n / 10; Console.WriteLine(+r); } Console.ReadLine(); } for n = 5432.
    options:
      - "3245"
      - "2354"
      - "2345"
      - "5423"
    answer: 2
    explanation: 2345 is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int n, r; n = Convert.ToInt32(Console.ReadLine()); while (n > 0) { r = n % 10; n = n / 10; Console.WriteLine(+r); } Console.ReadLine(); } for n = 5432.”. This question is standard in competitive examination syllabi for Control Flow Statements In C Sharp.
    keyConcept: Control Flow Statements In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: What will be the output of the following C# code? static void Main(string[] args) { int a = 5, b = 10; if (Convert.ToBoolean(Convert.ToInt32(0xB))) if (Convert.ToBoolean(Convert.ToInt32(022))) if (Convert.ToBoolean(Convert.ToInt32('\xeb'))) Console.WriteLine("java"); else ; else ; else ; }
    options:
      - "Compile time error: Misplaced else"
      - "Compile time error: Undefined symbol"
      - java
      - "Warning: Condition is always true"
    answer: 2
    explanation: java is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int a = 5, b = 10; if (Convert.ToBoolean(Convert.ToInt32(0xB))) if (Convert.ToBoolean(Convert.ToInt32(022))) if (Convert.ToBoolean(Convert.ToInt32('\xeb'))) Console.WriteLine("java"); else ; else ; else ; }”. This question is standard in competitive examination syllabi for Control Flow Statements In C Sharp.
    keyConcept: Control Flow Statements In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: What will be the output of the following C# code? static void Main(string[] args) { int i = 5; for (; Convert.ToBoolean(Convert.ToInt32(i)); Console.WriteLine(i--)) ; Console.ReadLine(); }
    options:
      - 4 3 2 1
      - 3 2 1
      - 5 4 3 2 1
      - 2 1
    answer: 2
    explanation: 5 4 3 2 1 is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int i = 5; for (; Convert.ToBoolean(Convert.ToInt32(i)); Console.WriteLine(i--)) ; Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Control Flow Statements In C Sharp.
    keyConcept: Control Flow Statements In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: What will be the output of the following C# code? static void Main(string[] args) { int a = 5; if (Convert.ToBoolean((.002f) -(0.1f))) Console.WriteLine("Sachin Tendulkar"); else if (a == 5) Console.WriteLine("Rahul Dravid"); else Console.WriteLine("Ms Dhoni"); Console.ReadLine(); }
    options:
      - Rahul Dravid
      - Sachin Tendulkar
      - Ms Dhoni
      - "Warning : Unreachable Code"
    answer: 1
    explanation: Sachin Tendulkar is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int a = 5; if (Convert.ToBoolean((.002f) -(0.1f))) Console.WriteLine("Sachin Tendulkar"); else if (a == 5) Console.WriteLine("Rahul Dravid"); else Console.WriteLine("Ms Dhoni"); Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Control Flow Statements In C Sharp.
    keyConcept: Control Flow Statements In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: "What will be the output of the following C# code? static void Main(string[] args) { switch (5) { case 5.0f: Console.WriteLine(\"harsh\"); break; case 5: Console.WriteLine(\"amish\"); break; case 5.0L: Console.WriteLine(\"ANKIT\"); break; default: Console.WriteLine(\"ashish\"); } Console.ReadLine(); }"
    options:
      - amish
      - ANKIT
      - harsh
      - Compile time error
    answer: 3
    explanation: "Compile time error is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { switch (5) { case 5.0f: Console.WriteLine(\"harsh\"); break; case 5: Console.WriteLine(\"amish\"); break; case 5.0L: Console.WriteLine(\"ANKIT\"); break; default: Console.WriteLine(\"ashish\"); } Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Control Flow Statements In C Sharp."
    keyConcept: Control Flow Statements In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: What will be the output of the following C# code? static void Main(string[] args) { float i = 1.0f, j = 0.05f; while (i < 2.0f && j <= 2.0f) { Console.WriteLine(i++ - ++j); } Console.ReadLine(); }
    options:
      - 0.05f
      - 1.50f
      - "-0.04999995f"
      - 1f
    answer: 2
    explanation: "-0.04999995f is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { float i = 1.0f, j = 0.05f; while (i < 2.0f && j <= 2.0f) { Console.WriteLine(i++ - ++j); } Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Control Flow Statements In C Sharp."
    keyConcept: Control Flow Statements In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: What will be the output of the following C# code? static void Main(string[] args) { int i, j; for (i = 1, j = i; i <= 3 && j >= 0; i++, j--) { if (i == j) continue; else Console.WriteLine(j); } Console.ReadLine(); }
    options:
      - i = 0, j = 1
      - i = 1, j = 0
      - j = 0
      - None of the mentioned
    answer: 2
    explanation: j = 0 is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int i, j; for (i = 1, j = i; i <= 3 && j >= 0; i++, j--) { if (i == j) continue; else Console.WriteLine(j); } Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Control Flow Statements In C Sharp.
    keyConcept: Control Flow Statements In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: "What will be the output of the following C# code? static void Main(string[] args) { int const p = 0; switch (3 * 5 / 6) { case p: Console.WriteLine(\"A\"); break; case p * 1: Console.WriteLine(\"B\"); break; case p - 2: Console.WriteLine(\"C\"); break; default: Console.WriteLine(\"D\"); } }"
    options:
      - A
      - B
      - C
      - Compile time error
    answer: 3
    explanation: "Compile time error is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int const p = 0; switch (3 * 5 / 6) { case p: Console.WriteLine(\"A\"); break; case p * 1: Console.WriteLine(\"B\"); break; case p - 2: Console.WriteLine(\"C\"); break; default: Console.WriteLine(\"D\"); } }”. This question is standard in competitive examination syllabi for Control Flow Statements In C Sharp."
    keyConcept: Control Flow Statements In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: What will be the output of the following C# code? static void Main(string[] args) { int a = 15, b = 10, c = 1; if (Convert.ToBoolean(a) && (b > c)) { Console.WriteLine("cquestionbank"); } else { break; } }
    options:
      - cquestionbank
      - It will print nothing
      - Compile time error
      - Run time error
    answer: 2
    explanation: Compile time error is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int a = 15, b = 10, c = 1; if (Convert.ToBoolean(a) && (b > c)) { Console.WriteLine("cquestionbank"); } else { break; } }”. This question is standard in competitive examination syllabi for Control Flow Statements In C Sharp.
    keyConcept: Control Flow Statements In C Sharp
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: What will be the output of the following C# code? static void Main(string[] args) { int i; i = 0; while (i++ < 5) { Console.WriteLine(i); } Console.WriteLine("\n"); i = 0; while ( ++i < 5) { Console.WriteLine(i); } Console.ReadLine(); }
    options:
      - 1 2 3 4 1 2 3 4 5
      - 1 2 3 1 2 3 4
      - 1 2 3 4 5 1 2 3 4
      - 1 2 3 4 5 1 2 3 4 5
    answer: 2
    explanation: 1 2 3 4 5 1 2 3 4 is the correct answer to “What will be the output of the following C# code? static void Main(string[] args) { int i; i = 0; while (i++ < 5) { Console.WriteLine(i); } Console.WriteLine("\n"); i = 0; while ( ++i < 5) { Console.WriteLine(i); } Console.ReadLine(); }”. This question is standard in competitive examination syllabi for Control Flow Statements In C Sharp.
    keyConcept: Control Flow Statements In C Sharp
    testedIn:
      - FPSC
      - PPSC
---


