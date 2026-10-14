---
title: Flow Control — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Flow Control — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: flow-control-part-2
topicName: Flow Control — Part 2
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
    question: "What is the printout of the following switch statement? char ch = 'a'; switch (ch){ case 'a': case 'A': System.out.print(ch); break; case 'b': case 'B': System.out.print(ch); break; case 'c': case 'C': System.out.print(ch); break; case 'd': case 'D': System.out.print(ch); }"
    options:
      - abcd
      - aa
      - a
      - ab
      - abc
    answer: 2
    explanation: "a is the correct answer to “What is the printout of the following switch statement? char ch = 'a'; switch (ch){ case 'a': case 'A': System.out.print(ch); break; case 'b': case 'B': System.out.print(ch); break; case 'c': case 'C': System.out.print(ch); break; case 'd': case 'D': System.out.print(ch); }”. This question is standard in competitive examination syllabi for Flow Control."
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: How many times will the following code print "Welcome to Examveda"? int count = 0; do { System.out.println("Welcome to Examveda"); count++; } while (count < 10);
    options:
      - "8"
      - "9"
      - "10"
      - "11"
      - "0"
    answer: 2
    explanation: 10 is the correct answer to “How many times will the following code print "Welcome to Examveda"? int count = 0; do { System.out.println("Welcome to Examveda"); count++; } while (count < 10);”. This question is standard in competitive examination syllabi for Flow Control.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Choose the correct statement in context of the following program code. public class Test{ public static void main(String[] args){ double sum = 0; for(double d = 0; d < 10;){ d += 0.1; sum += sum + d; } } }
    options:
      - The program has a compile error because the adjustment is missing in the for loop.
      - The program has a compile error because the control variable in the for loop cannot be of the double type.
      - The program runs in an infinite loop because d<10 would always be true.
      - The program compiles and runs fine.
    answer: 3
    explanation: The program compiles and runs fine. is the correct answer to “Choose the correct statement in context of the following program code. public class Test{ public static void main(String[] args){ double sum = 0; for(double d = 0; d < 10;){ d += 0.1; sum += sum + d; } } }”. This question is standard in competitive examination syllabi for Flow Control.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: Which of the following for loops will be an infinite loop?
    options:
      - for(; ;)
      - for(i=0 ; i<1; i--)
      - for(i=0; ; i++)
      - All of the above
    answer: 3
    explanation: All of the above is the correct answer to “Which of the following for loops will be an infinite loop”. This question is standard in competitive examination syllabi for Flow Control.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: What will be the result of the following code? public class Test{ static public void main(String args[]){ //line 2 int i, j; for(i=0; i<3; i++){ for(j=1; j<4; j++){ i%=j; System.out.println(j); } } } }
    options:
      - 1 2 3 1
      - 1 2 3 2
      - Repeatedly print 1 2 3 and cause infinite loop.
      - Compilation fails because of line 2
      - None of these
    answer: 2
    explanation: Repeatedly print 1 2 3 and cause infinite loop. is the correct answer to “What will be the result of the following code? public class Test{ static public void main(String args[]){ //line 2 int i, j; for(i=0; i<3; i++){ for(j=1; j<4; j++){ i%=j; System.out.println(j); } } } }”. This question is standard in competitive examination syllabi for Flow Control.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: "What all gets printed when the following program is compiled and run. public class Test{ public static void main(String args[]){ int i, j=1; i = (j>1)?2:1; switch(i){ case 0: System.out.println(0); break; case 1: System.out.println(1); case 2: System.out.println(2); break; case 3: System.out.println(3); break; } } }"
    options:
      - "0"
      - "1"
      - "2"
      - "3"
      - 1 2
    answer: 4
    explanation: "1 2 is the correct answer to “What all gets printed when the following program is compiled and run. public class Test{ public static void main(String args[]){ int i, j=1; i = (j>1)?2:1; switch(i){ case 0: System.out.println(0); break; case 1: System.out.println(1); case 2: System.out.println(2); break; case 3: System.out.println(3); break; } } }”. This question is standard in competitive examination syllabi for Flow Control."
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What all gets printed when the following program is compiled and run? public class Test{ public static void main(String args[]){ int i=0, j=2; do{ i=++i; j--; }while(j>0); System.out.println(i); } }
    options:
      - "0"
      - "1"
      - "2"
      - The program does not compile because of statement "i=++i;"
      - None of these
    answer: 2
    explanation: 2 is the correct answer to “What all gets printed when the following program is compiled and run? public class Test{ public static void main(String args[]){ int i=0, j=2; do{ i=++i; j--; }while(j>0); System.out.println(i); } }”. This question is standard in competitive examination syllabi for Flow Control.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What will be the output? public class Test{ public static void main(String args[]){ int i = 1; do{ i--; }while(i > 2); System.out.println(i); } }
    options:
      - "1"
      - "2"
      - "-1"
      - "0"
      - None of these
    answer: 3
    explanation: 0 is the correct answer to “What will be the output? public class Test{ public static void main(String args[]){ int i = 1; do{ i--; }while(i > 2); System.out.println(i); } }”. This question is standard in competitive examination syllabi for Flow Control.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: Which of these access specifier must be used for class so that it can be inherited by another subclass?
    options:
      - public
      - private
      - protected
      - none of the mentioned
    answer: 0
    explanation: public is the correct answer to “Which of these access specifier must be used for class so that it can be inherited by another subclass”. This question is standard in competitive examination syllabi for Flow Control.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: Which of these is used as a default for a member of a class if no access specifier is used for it?
    options:
      - private
      - public
      - public, within its own package
      - protected
    answer: 0
    explanation: private is the correct answer to “Which of these is used as a default for a member of a class if no access specifier is used for it”. This question is standard in competitive examination syllabi for Flow Control.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What will be the output of the following Java code? class static_out { static int x; static int y; void add(int a, int b) { x = a + b; y = x + b; } } public class static_use { public static void main(String args[]) { static_out obj1 = new static_out(); static_out obj2 = new static_out(); int a = 2; obj1.add(a, a + 1); obj2.add(5, a); System.out.println(obj1.x + " " + obj2.y); } }
    options:
      - 7 7.4
      - 6 6.4
      - 7 9
      - 9 7
    answer: 2
    explanation: 7 9 is the correct answer to “What will be the output of the following Java code? class static_out { static int x; static int y; void add(int a, int b) { x = a + b; y = x + b; } } public class static_use { public static void main(String args[]) { static_out obj1 = new static_out(); static_out obj2 = new static_out(); int a = 2; obj1.add(a, a + 1); obj2.add(5, a); System.out.println(obj1.x + " " + obj2.y); } }”. This question is standard in competitive examination syllabi for Flow Control.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: What will be the output of the following Java code? class access { public int x; private int y; void cal(int a, int b) { x = a + 1; y = b; } } public class access_specifier { public static void main(String args[]) { access obj = new access(); obj.cal(2, 3); System.out.println(obj.x + " " + obj.y); } }
    options:
      - 3 3
      - 2 3
      - Runtime Error
      - Compilation Error
    answer: 2
    explanation: Runtime Error is the correct answer to “What will be the output of the following Java code? class access { public int x; private int y; void cal(int a, int b) { x = a + 1; y = b; } } public class access_specifier { public static void main(String args[]) { access obj = new access(); obj.cal(2, 3); System.out.println(obj.x + " " + obj.y); } }”. This question is standard in competitive examination syllabi for Flow Control.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: Which of these is used to access a member of class before object of that class is created?
    options:
      - public
      - private
      - static
      - protected
    answer: 2
    explanation: static is the correct answer to “Which of these is used to access a member of class before object of that class is created”. This question is standard in competitive examination syllabi for Flow Control.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What will be the output of the following Java code? class access { public int x; private int y; void cal(int a, int b) { x = a + 1; y = b; } void print() { System.out.println(" " + y); } } public class access_specifier { public static void main(String args[]) { access obj = new access(); obj.cal(2, 3); System.out.println(obj.x); obj.print(); } }
    options:
      - 2 3
      - 3 3
      - Runtime Error
      - Compilation Error
    answer: 1
    explanation: 3 3 is the correct answer to “What will be the output of the following Java code? class access { public int x; private int y; void cal(int a, int b) { x = a + 1; y = b; } void print() { System.out.println(" " + y); } } public class access_specifier { public static void main(String args[]) { access obj = new access(); obj.cal(2, 3); System.out.println(obj.x); obj.print(); } }”. This question is standard in competitive examination syllabi for Flow Control.
    keyConcept: Flow Control
    testedIn:
      - FPSC
      - PPSC
---


