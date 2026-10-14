---
title: Data Types And Variables — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Data Types And Variables — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: data-types-and-variables-part-2
topicName: Data Types And Variables — Part 2
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
    question: "Determine output: public class Test { static void test(float x){ System.out.print(\"float\"); } static void test(double x){ System.out.print(\"double\"); } public static void main(String[] args){ test(99.9); } }"
    options:
      - float
      - double
      - Compilation Error
      - Exception is thrown at runtime
    answer: 1
    explanation: floating-point numbers are by default of type double. 99.9 is a double not a float. To print "float" cast 99.9 to (float)
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: What is the output of the following program? public class Test{ static int x = 10 ; public static void main(String[] a){ Test test = new Test( ) ; Test test1 = new Test( ) ; test.x += 1 ; System.out.println( test.x + test1.x ) ; } }
    options:
      - "20"
      - "21"
      - "22"
      - Compilation Error
      - Throws Exception
    answer: 2
    explanation: Static variable have a single copy of memory. That means all the objects will share the same memory location. So, if the object test increase the value of x by 1, then object test1 will access that incremented value of x
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What will be output of the following program code? public class Test{ public static void main(String[] a){ short x = 10; x = x*5; System.out.print(x); } }
    options:
      - "50"
      - "10"
      - Compilation Error
      - None of these
    answer: 2
    explanation: lossy conversion from int to short x = x*5; ^ 1 error
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: "Determine output: public class Test{ int i = 34; public static void main(String args[]){ Test t1 = new Test(); Test t2 = new Test(); t1.i = 65; System.out.print(t1.i); System.out.print(t2.i); } }"
    options:
      - 34 34
      - 65 34
      - 65 65
      - 34 65
    answer: 1
    explanation: Instance variable is unique for their object, that means each copy of memory for variable i will be available for each object. So, changing value of i from one object will not affect the value of i accessed by another object. 1. Two objects of the Test class, t1 and t2 , are created using the new keyword. 2. The default value of the instance variable i is 34 as defined in the class Test . 3. The instance variable i of t1 is then set to 65 using t1.i = 65; 4. When we print t1.i , it will output 65 . 5. When we print t2.i , it will output 34 . This is because t2 is a separate instance of the Test class, and its i remains the default value of 34 . Therefore, the correct output will be 6534 .
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: "The following program: public class Test{ static boolean isOK; public static void main(String args[]){ System.out.print(isOK); } }"
    options:
      - Prints true
      - Prints false
      - Will not compile as boolean is not initialized
      - Will not compile as boolean can never be static
    answer: 1
    explanation: By default, a boolean variable will contain false.
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What will the output of the following program? public class Test{ public static void main(String args[]){ float f = (1 / 4) * 10; int i = Math.round(f); System.out.println(i); } }
    options:
      - "2"
      - "0"
      - "3"
      - "2.5"
      - "25"
    answer: 1
    explanation: The result of 1/4 will be zero because integer division is carried out on the operands. If you need to obtain a fractional value you need to use either a float or double literal as in 1F / 4F.
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What is the output for the below code? class A{ int k; boolean istrue; static int p; public void printValue(){ System.out.print(k); System.out.print(istrue); System.out.print(p); } } public class Test{ public static void main(String argv[]){ A a = new A(); a.printValue(); } }
    options:
      - 0 false 0
      - 0 true 0
      - 0 0 0
      - Compile error - static variable must be initialized before use.
      - None of these
    answer: 0
    explanation: Global and static variable need not be initialized before use. Default value of global and static int variable is zero. Default value of boolean variable is false. Remember local variable must be initialized before use.
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What is the output for the below code? public class Test{ int _$; int $7; int do; public static void main(String argv[]){ Test test = new Test(); test.$7=7; test.do=9; System.out.println(test.$7); System.out.println(test.do); System.out.println(test._$); } }
    options:
      - 7 9 0
      - 7 0 0
      - Compile error - $7 is not valid identifier.
      - Compile error - do is not valid identifier.
      - None of these
    answer: 3
    explanation: $7 is valid identifier. Identifiers must start with a letter, a currency character ($), or underscore ( _ ). Identifiers cannot start with a number. You can't use a Java keyword as an identifier. do is a Java keyword.
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What is the output for the below code? public class Test{ public static void main(String[] args){ int i = 010; int j = 07; System.out.println(i); System.out.println(j); } }
    options:
      - 8 7
      - 10 7
      - Compilation fails with an error at line 3
      - Compilation fails with an error at line 5
      - None of these
    answer: 0
    explanation: By placing a zero in front of the number is an integer in octal form. 010 is in octal form so its value is 8
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What is the output for the below code? public class Test{ public static void main(String[] args){ byte b = 6; b+=8; System.out.println(b); b = b+7; System.out.println(b); } }
    options:
      - 14 21
      - 14 13
      - Compilation fails with an error at line 6
      - Compilation fails with an error at line 4
      - None of these
    answer: 2
    explanation: "int or smaller expressions always resulting in an int. So compiler complain about Type mismatch: cannot convert from int to byte for b = b+7; But b += 7; // No problem because +=, -=, *=, and /= will all put in an implicit cast. b += 7 is same as b = (byte)b+7 so compiler not complain."
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What will be the output for the below code? public class Test{ public static void main(String[] args){ byte i = 128; System.out.println(i); } }
    options:
      - "128"
      - "0"
      - Compilation fails with an error at line 3
      - Compilation fails with an error at line 4
      - None of these
    answer: 2
    explanation: byte can only hold up to 127. So compiler complain about possible loss of precision. static byte MAX_VALUE − This is constant holding the maximum value a byte can have, 2 7 -1. static byte MIN_VALUE − This is constant holding the minimum value a byte can have, -2 7 .
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: What will be the output for the below code? public class Test{ int i=8; int j=9; public static void main(String[] args){ add(); } public static void add(){ int k = i+j; System.out.println(k); } }
    options:
      - "17"
      - "0"
      - Compilation fails with an error at line 5
      - Compilation fails with an error at line 8
      - None of these
    answer: 3
    explanation: i and j are instance variable and attempting to access an instance variable from a static method. So Compilation fails.
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What will be output of following program? public class Test{ public static void main(String[] args){ byte b=127; b++; b++; System.out.println(b); } }
    options:
      - "2"
      - "129"
      - "-127"
      - Compiler error
      - None of these
    answer: 2
    explanation: Range of byte data in java is -128 to 127. But byte data type in java is cyclic in nature.
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: "Determine output: public class Test{ int a = 10; public void method(int a){ a += 1; System.out.println(++a); } public static void main(String args[]){ Test t = new Test(); t.method(3); } }"
    options:
      - "4"
      - "5"
      - "12"
      - "11"
      - None of these
    answer: 1
    explanation: "Here's an explanation of the code: 1. The class Test is defined with an instance variable a initialized to 10. 2. The method method is defined within the Test class, which takes an integer parameter a . 3. Inside the method method, the local variable a shadows the instance variable a because they have the same name. 4. The value of the local variable a is incremented by 1 using the += operator, making it 4. 5. The value of the local variable a is then incremented again using the pre-increment operator ++ , making it 5. 6. The value of the local variable a (which is 5) is printed using System.out.println() . 7. In the main method, an instance of the Test class is created. 8. The method method is invoked on the t object with the argument 3. 9. This triggers the execution of the method method, which prints 5 as explained above. Therefore, the output of the code is 5 . Thus, option B is the correct answer."
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What will be the output of the following Java code? class increment { public static void main(String args[]) { int g = 3; System.out.print(++g * 8); } }
    options:
      - "25"
      - "24"
      - "32"
      - "33"
    answer: 2
    explanation: "The given Java code initializes a variable g with the value 3 . It then uses the pre-increment operator ( ++ ) on g before multiplying it by 8 and printing the result using System.out.print . The expression ++g * 8 is evaluated as follows: ++g increments the value of g to 4 . 4 * 8 is equal to 32 . Therefore, the output of the code will be 32 ."
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What will be the output of the following Java program? class variable_scope { public static void main(String args[]) { int x; x = 5; { int y = 6; System.out.print(x + " " + y); } System.out.println(x + " " + y); } }
    options:
      - 5 6 5 6
      - 5 6 5
      - Runtime error
      - Compilation error
    answer: 3
    explanation: "The correct answer is D: Compilation error . Here's why: In Java, variables have a scope, which determines where they can be accessed in the code. 'x' is declared outside the inner block, so it's accessible both inside and outside the curly braces {}. 'y' is declared inside the inner block {}. This means 'y' is only accessible within that block. The line 'System.out.println(x + \" \" + y);' is outside the inner block where 'y' is defined. Therefore, the compiler will give an error because it cannot find a variable named 'y' in that scope. The program will not compile because of the scope issue with the variable 'y'."
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: The following fraction of code double STATIC = 2.5 ; System.out.println( STATIC );
    options:
      - Prints 2.5
      - Rraises an error as STATIC is used as a variable which is a keyword
      - Raises an exception
      - None of these
    answer: 0
    explanation: Prints 2.5 is the correct answer to “The following fraction of code double STATIC = 2.5 ; System.out.println( STATIC );”. This question is standard in competitive examination syllabi for Data Types And Variables.
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: What would be the output of the following fraction of code? int Integer = 34 ; char String = 'S' ; System.out.print( Integer ) ; System.out.print( String ) ;
    options:
      - Does not compile as Integer and String are API class names.
      - Throws exception.
      - "34"
      - S
      - 34 S
    answer: 4
    explanation: 34 S is the correct answer to “What would be the output of the following fraction of code? int Integer = 34 ; char String = 'S' ; System.out.print( Integer ) ; System.out.print( String ) ;”. This question is standard in competitive examination syllabi for Data Types And Variables.
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: In Java, the word true is ................
    options:
      - A Java keyword
      - A Boolean literal
      - Same as value 1
      - Same as value 0
    answer: 1
    explanation: A Boolean literal is the correct answer to “In Java, the word true is ................”. This question is standard in competitive examination syllabi for Data Types And Variables.
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: Which class does all the Enums extend?
    options:
      - Object
      - Enums
      - Enum
      - EnumClass
    answer: 2
    explanation: Enum is the correct answer to “Which class does all the Enums extend”. This question is standard in competitive examination syllabi for Data Types And Variables.
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: Which of the following is the advantage of BigDecimal over double?
    options:
      - Syntax
      - Memory usage
      - Garbage creation
      - Precision
    answer: 3
    explanation: Precision is the correct answer to “Which of the following is the advantage of BigDecimal over double”. This question is standard in competitive examination syllabi for Data Types And Variables.
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What will be the output of the following Java code snippet? double a = 0.02; double b = 0.03; double c = b - a; System.out.println(c); BigDecimal _a = new BigDecimal("0.02"); BigDecimal _b = new BigDecimal("0.03"); BigDecimal _c = b.subtract(_a); System.out.println(_c);
    options:
      - 0.009999999999999998 0.01
      - 0.01 0.009999999999999998
      - 0.01 0.01
      - 0.009999999999999998 0.009999999999999998
    answer: 0
    explanation: 0.009999999999999998 0.01 is the correct answer to “What will be the output of the following Java code snippet? double a = 0.02; double b = 0.03; double c = b - a; System.out.println(c); BigDecimal _a = new BigDecimal("0.02"); BigDecimal _b = new BigDecimal("0.03"); BigDecimal _c = b.subtract(_a); System.out.println(_c);”. This question is standard in competitive examination syllabi for Data Types And Variables.
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: What is the range of short data type in Java?
    options:
      - "-128 to 127"
      - "-32768 to 32767"
      - "-2147483648 to 2147483647"
      - None of the mentioned
    answer: 1
    explanation: "-32768 to 32767 is the correct answer to “What is the range of short data type in Java”. This question is standard in competitive examination syllabi for Data Types And Variables."
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: Is SimpleDateFormat thread safe?
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “Is SimpleDateFormat thread safe”. This question is standard in competitive examination syllabi for Data Types And Variables.
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: Which of these can not be used for a variable name in Java?
    options:
      - identifier
      - keyword
      - identifier & keyword
      - none of the mentioned
    answer: 1
    explanation: keyword is the correct answer to “Which of these can not be used for a variable name in Java”. This question is standard in competitive examination syllabi for Data Types And Variables.
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Are enums are type-safe?
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “Are enums are type-safe”. This question is standard in competitive examination syllabi for Data Types And Variables.
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: Which of the below data type doesn't support overloaded methods for +,-,* and /?
    options:
      - int
      - float
      - double
      - BigDecimal
    answer: 3
    explanation: BigDecimal is the correct answer to “Which of the below data type doesn't support overloaded methods for +,-,* and /”. This question is standard in competitive examination syllabi for Data Types And Variables.
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: How to convert a String to a Date object?
    options:
      - SimpleDateFormat sdf = new SimpleDateFormat("yyyy-mm-dd"); sdf.parse(new Date())
      - SimpleDateFormat sdf = new SimpleDateFormat("yyyy-mm-dd"); sdf.format(new Date())
      - SimpleDateFormat sdf = new SimpleDateFormat("yyyy-mm-dd"); new Date().parse()
      - SimpleDateFormat sdf = new SimpleDateFormat("yyyy-mm-dd"); new Date().format()
    answer: 0
    explanation: SimpleDateFormat sdf = new SimpleDateFormat("yyyy-mm-dd"); sdf.parse(new Date()) is the correct answer to “How to convert a String to a Date object”. This question is standard in competitive examination syllabi for Data Types And Variables.
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: What is BigDecimal.ONE?
    options:
      - wrong statement
      - custom defined statement
      - static variable with value 1 on scale 10
      - static variable with value 1 on scale 0
    answer: 3
    explanation: static variable with value 1 on scale 0 is the correct answer to “What is BigDecimal.ONE”. This question is standard in competitive examination syllabi for Data Types And Variables.
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: What will be the error in the following Java code? byte b = 50; b = b * 50;
    options:
      - b cannot contain value 100, limited by its range
      - "* operator has converted b * 50 into int, which can not be converted to byte without casting"
      - b cannot contain value 50
      - No error in this code
    answer: 1
    explanation: "* operator has converted b * 50 into int, which can not be converted to byte without casting is the correct answer to “What will be the error in the following Java code? byte b = 50; b = b * 50;”. This question is standard in competitive examination syllabi for Data Types And Variables."
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: Which of these values can a boolean variable contain?
    options:
      - True & False
      - 0 & 1
      - Any integer value
      - "true"
    answer: 0
    explanation: True & False is the correct answer to “Which of these values can a boolean variable contain”. This question is standard in competitive examination syllabi for Data Types And Variables.
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: If an expression contains double, int, float, long, then the whole expression will be promoted into which of these data types?
    options:
      - long
      - int
      - double
      - float
    answer: 2
    explanation: double is the correct answer to “If an expression contains double, int, float, long, then the whole expression will be promoted into which of these data types”. This question is standard in competitive examination syllabi for Data Types And Variables.
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: What will be the output of the following Java program? class dynamic_initialization { public static void main(String args[]) { double a, b; a = 3.0; b = 4.0; double c = Math.sqrt(a * a + b * b); System.out.println(c); } }
    options:
      - "5.0"
      - "25.0"
      - "7.0"
      - Compilation Error
    answer: 0
    explanation: 5.0 is the correct answer to “What will be the output of the following Java program? class dynamic_initialization { public static void main(String args[]) { double a, b; a = 3.0; b = 4.0; double c = Math.sqrt(a * a + b * b); System.out.println(c); } }”. This question is standard in competitive examination syllabi for Data Types And Variables.
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: Which of these can be returned by the operator &?
    options:
      - Integer
      - Boolean
      - Character
      - Integer or Boolean
    answer: 3
    explanation: Integer or Boolean is the correct answer to “Which of these can be returned by the operator &”. This question is standard in competitive examination syllabi for Data Types And Variables.
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: Which data type value is returned by all transcendental math functions?
    options:
      - int
      - float
      - double
      - long
    answer: 2
    explanation: double is the correct answer to “Which data type value is returned by all transcendental math functions”. This question is standard in competitive examination syllabi for Data Types And Variables.
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: What is the prototype of the default constructor of this Java class? public class prototype { }
    options:
      - prototype( )
      - prototype(void)
      - public prototype(void)
      - public prototype( )
    answer: 3
    explanation: public prototype( ) is the correct answer to “What is the prototype of the default constructor of this Java class? public class prototype { }”. This question is standard in competitive examination syllabi for Data Types And Variables.
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: What will be the output of the following Java program, if we run as "java main_arguments 1 2 3"? class main_arguments { public static void main(String [] args) { String [][] argument = new String[2][2]; int x; argument[0] = args; x = argument[0].length; for (int y = 0; y < x; y++) System.out.print(" " + argument[0][y]); } }
    options:
      - 1 1
      - 1 0
      - 1 0 3
      - 1 2 3
    answer: 3
    explanation: 1 2 3 is the correct answer to “What will be the output of the following Java program, if we run as "java main_arguments 1 2 3"? class main_arguments { public static void main(String [] args) { String [][] argument = new String[2][2]; int x; argument[0] = args; x = argument[0].length; for (int y = 0; y < x; y++) System.out.print(" " + argument[0][y]); } }”. This question is standard in competitive examination syllabi for Data Types And Variables.
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: Which of these literals can be contained in float data type variable?
    options:
      - "-1.7e+308"
      - "-3.4e+038"
      - "+1.7e+308"
      - "-3.4e+050"
    answer: 1
    explanation: "-3.4e+038 is the correct answer to “Which of these literals can be contained in float data type variable”. This question is standard in competitive examination syllabi for Data Types And Variables."
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: What will be the output of the following Java code? class A { final public int calculate(int a, int b) { return 1; } } class B extends A { public int calculate(int a, int b) { return 2; } } public class output { public static void main(String args[]) { B object = new B(); System.out.print("b is " + b.calculate(0, 1)); } }
    options:
      - "b is : 2"
      - "b is : 1"
      - Compilation Error
      - An exception is thrown at runtime
    answer: 2
    explanation: Compilation Error is the correct answer to “What will be the output of the following Java code? class A { final public int calculate(int a, int b) { return 1; } } class B extends A { public int calculate(int a, int b) { return 2; } } public class output { public static void main(String args[]) { B object = new B(); System.out.print("b is " + b.calculate(0, 1)); } }”. This question is standard in competitive examination syllabi for Data Types And Variables.
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: What will be the output of the following Java code snippet? enum Levels { private TOP, public MEDIUM, protected BOTTOM; }
    options:
      - Runtime Error
      - EnumNotDefined Exception
      - It runs successfully
      - Compilation Error
    answer: 3
    explanation: Compilation Error is the correct answer to “What will be the output of the following Java code snippet? enum Levels { private TOP, public MEDIUM, protected BOTTOM; }”. This question is standard in competitive examination syllabi for Data Types And Variables.
    keyConcept: Data Types And Variables
    testedIn:
      - FPSC
      - PPSC
---


