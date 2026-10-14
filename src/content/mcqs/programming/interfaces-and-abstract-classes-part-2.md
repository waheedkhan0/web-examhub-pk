---
title: Interfaces And Abstract Classes — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Interfaces And Abstract Classes — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: interfaces-and-abstract-classes-part-2
topicName: Interfaces And Abstract Classes — Part 2
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
    question: Which of the following declares an abstract method in an abstract Java class?
    options:
      - public abstract method()
      - public abstract void method()
      - public void abstract Method()
      - public void method() {}
      - public abstract void method() {}
    answer: 1
    explanation: public abstract void method() is the correct answer to “Which of the following declares an abstract method in an abstract Java class”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: Which of the following statements regarding abstract classes are true?
    options:
      - An abstract class can be extended.
      - A subclass of a non-abstract superclass can be abstract.
      - A subclass can override a concrete method in a superclass to declare it abstract.
      - An abstract class can be used as a data type.
      - All of the above
    answer: 4
    explanation: All of the above is the correct answer to “Which of the following statements regarding abstract classes are true”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Suppose A is an abstract class, B is a concrete subclass of A, and both A and B have a default constructor. Which of the following is correct? 1. A a = new A(); 2. A a = new B(); 3. B b = new A(); 4. B b = new B();
    options:
      - 1 and 2
      - 2 and 4
      - 3 and 4
      - 1 and 3
      - 2 and 3
    answer: 1
    explanation: 2 and 4 is the correct answer to “Suppose A is an abstract class, B is a concrete subclass of A, and both A and B have a default constructor. Which of the following is correct? 1. A a = new A(); 2. A a = new B(); 3. B b = new A(); 4. B b = new B();”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: Which of the following is a correct interface?
    options:
      - interface A { void print() { } }
      - abstract interface A { print(); }
      - abstract interface A { abstract void print(); { }}
      - interface A { void print(); }
    answer: 3
    explanation: interface A { void print(); } is the correct answer to “Which of the following is a correct interface”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: Determine output of the following code. interface A { } class C { } class D extends C { } class B extends D implements A { } public class Test extends Thread{ public static void main(String[] args){ B b = new B(); if (b instanceof A) System.out.println("b is an instance of A"); if (b instanceof C) System.out.println("b is an instance of C"); } }
    options:
      - Nothing.
      - b is an instance of A.
      - b is an instance of C.
      - b is an instance of A followed by b is an instance of C.
    answer: 3
    explanation: b is an instance of A followed by b is an instance of C. is the correct answer to “Determine output of the following code. interface A { } class C { } class D extends C { } class B extends D implements A { } public class Test extends Thread{ public static void main(String[] args){ B b = new B(); if (b instanceof A) System.out.println("b is an instance of A"); if (b instanceof C) System.out.println("b is an instance of C"); } }”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: "Given the following piece of code: public interface Guard{ void doYourJob(); } abstract public class Dog implements Guard{ } which of the following statements is correct?"
    options:
      - This code will not compile, because method doYourJob() in interface Guard must be defined abstract.
      - This code will not compile, because class Dog must implement method doYourJob() from interface Guard.
      - This code will not compile, because in the declaration of class Dog we must use the keyword extends instead of implements.
      - This code will compile without any errors.
    answer: 3
    explanation: "This code will compile without any errors. is the correct answer to “Given the following piece of code: public interface Guard{ void doYourJob(); } abstract public class Dog implements Guard{ } which of the following statements is correct”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes."
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: In Java, declaring a class abstract is useful
    options:
      - To prevent developers from further extending the class.
      - When it doesn't make sense to have objects of that class.
      - When default implementations of some methods are not desirable.
      - To force developers to extend the class not to use its capabilities.
      - When it makes sense to have objects of that class.
    answer: 1
    explanation: When it doesn't make sense to have objects of that class. is the correct answer to “In Java, declaring a class abstract is useful”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What will be the output? interface A{ public void method(); } class One{ public void method(){ System.out.println("Class One method"); } } class Two extends One implements A{ public void method(){ System.out.println("Class Two method"); } } public class Test extends Two{ public static void main(String[] args){ A a = new Two(); a.method(); } }
    options:
      - will print Class One method
      - will print Class Two method
      - compiles fine but print nothing
      - Compilation Error
      - None of these
    answer: 1
    explanation: will print Class Two method is the correct answer to “What will be the output? interface A{ public void method(); } class One{ public void method(){ System.out.println("Class One method"); } } class Two extends One implements A{ public void method(){ System.out.println("Class Two method"); } } public class Test extends Two{ public static void main(String[] args){ A a = new Two(); a.method(); } }”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: interface Test{ int p = 10; //line 1 public int q = 20; //line 2 public static int r = 30; //line 3 public static final int s = 40; //line 4 } Which of the above line will give compilation error?
    options:
      - "1"
      - "2"
      - "3"
      - "4"
      - None of these
    answer: 4
    explanation: None of these is the correct answer to “interface Test{ int p = 10; //line 1 public int q = 20; //line 2 public static int r = 30; //line 3 public static final int s = 40; //line 4 } Which of the above line will give compilation error”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: Runnable is a _____ .
    options:
      - class
      - abstract class
      - interface
      - vaiable
      - method
    answer: 2
    explanation: interface is the correct answer to “Runnable is a _____ .”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: Which object Java application uses to create a new process?
    options:
      - Process
      - Builder
      - ProcessBuilder
      - CreateBuilder
    answer: 2
    explanation: ProcessBuilder is the correct answer to “Which object Java application uses to create a new process”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: Which of these method of Double wrapper can be used to check whether a given value is infinite or not?
    options:
      - Infinite()
      - isInfinite()
      - checkInfinite()
      - None of the mentioned
    answer: 1
    explanation: isInfinite() is the correct answer to “Which of these method of Double wrapper can be used to check whether a given value is infinite or not”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What will be the output of the following Java program? interface calculate { int VAR = 0; void cal(int item); } class display implements calculate { int x; public void cal(int item) { if (item<2) x = VAR; else x = item * item; } } class interfaces { public static void main(String args[]) { display[] arr=new display[3]; for(int i=0;i<3;i++) arr[i]=new display(); arr[0].cal(0); arr[1].cal(1); arr[2].cal(2); System.out.print(arr[0].x+" " + arr[1].x + " " + arr[2].x); } }
    options:
      - 0 1 2
      - 0 2 4
      - 0 0 4
      - 0 1 4
    answer: 2
    explanation: 0 0 4 is the correct answer to “What will be the output of the following Java program? interface calculate { int VAR = 0; void cal(int item); } class display implements calculate { int x; public void cal(int item) { if (item<2) x = VAR; else x = item * item; } } class interfaces { public static void main(String args[]) { display[] arr=new display[3]; for(int i=0;i<3;i++) arr[i]=new display(); arr[0].cal(0); arr[1].cal(1); arr[2].cal(2); System.out.print(arr[0].x+" " + arr[1].x + " " + arr[2].x); } }”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What will be the output of the following Java program? class exception_handling { public static void main(String args[]) { try { int a[] = {1, 2,3 , 4, 5}; for (int i = 0; i < 5; ++i) System.out.print(a[i]); int x = 1/0; } catch(ArrayIndexOutOfBoundsException e) { System.out.print("A"); } catch(ArithmeticException e) { System.out.print("B"); } } }
    options:
      - "12345"
      - 12345A
      - 12345B
      - Compilation Error
    answer: 2
    explanation: 12345B is the correct answer to “What will be the output of the following Java program? class exception_handling { public static void main(String args[]) { try { int a[] = {1, 2,3 , 4, 5}; for (int i = 0; i < 5; ++i) System.out.print(a[i]); int x = 1/0; } catch(ArrayIndexOutOfBoundsException e) { System.out.print("A"); } catch(ArithmeticException e) { System.out.print("B"); } } }”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: Which of this access specifies can be used for a class so that its members can be accessed by a different class in the same package?
    options:
      - Public
      - Protected
      - No Modifier
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “Which of this access specifies can be used for a class so that its members can be accessed by a different class in the same package”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What will be the output of the following Java program? class exception_handling { public static void main(String args[]) { try { int a[] = {1, 2,3 , 4, 5}; for (int i = 0; i < 7; ++i) System.out.print(a[i]); } catch(ArrayIndexOutOfBoundsException e) { System.out.print("0"); } } }
    options:
      - "12345"
      - "123450"
      - "1234500"
      - Compilation Error
    answer: 1
    explanation: 123450 is the correct answer to “What will be the output of the following Java program? class exception_handling { public static void main(String args[]) { try { int a[] = {1, 2,3 , 4, 5}; for (int i = 0; i < 7; ++i) System.out.print(a[i]); } catch(ArrayIndexOutOfBoundsException e) { System.out.print("0"); } } }”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: Which of these method of InputStream is used to read integer representation of next available byte input?
    options:
      - read()
      - scanf()
      - get()
      - getInteger()
    answer: 0
    explanation: read() is the correct answer to “Which of these method of InputStream is used to read integer representation of next available byte input”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: The same import package/class be called twice in java?
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “The same import package/class be called twice in java”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: What will be the output of the following Java program? import java.lang.System; class Output { public static void main(String args[]) { System.exit(5); } }
    options:
      - "0"
      - "1"
      - "4"
      - "5"
    answer: 3
    explanation: 5 is the correct answer to “What will be the output of the following Java program? import java.lang.System; class Output { public static void main(String args[]) { System.exit(5); } }”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What type of variable can be defined in an interface?
    options:
      - public static
      - private final
      - public final
      - static final
    answer: 3
    explanation: static final is the correct answer to “What type of variable can be defined in an interface”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: How to use environment properties in the class?
    options:
      - "@Environment"
      - "@Variable"
      - "@Property"
      - "@Autowired"
    answer: 3
    explanation: "@Autowired is the correct answer to “How to use environment properties in the class”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes."
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What will be the output of the following Java program? class Output { public static void main(String args[]) { String str = "true false"; boolean x = Boolean.parseBoolean(str); System.out.print(x); } }
    options:
      - "True"
      - "False"
      - System Dependent
      - Compilation Error
    answer: 1
    explanation: False is the correct answer to “What will be the output of the following Java program? class Output { public static void main(String args[]) { String str = "true false"; boolean x = Boolean.parseBoolean(str); System.out.print(x); } }”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: What will be the output of the following Java code? import java.io.*; class files { public static void main(String args[]) { File obj = new File("/java/system"); System.out.print(obj.getName()); } }
    options:
      - java
      - system
      - java/system
      - /java/system
    answer: 1
    explanation: system is the correct answer to “What will be the output of the following Java code? import java.io.*; class files { public static void main(String args[]) { File obj = new File("/java/system"); System.out.print(obj.getName()); } }”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: Which of these is a super class of wrappers Byte and short wrappers?
    options:
      - Long
      - Digits
      - Float
      - Number
    answer: 3
    explanation: Number is the correct answer to “Which of these is a super class of wrappers Byte and short wrappers”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: What will be the output of the following Java program? class exception_handling { public static void main(String args[]) { try { int a = 1; int b = 10 / a; try { if (a == 1) a = a / a - a; if (a == 2) { int c[] = {1}; c[8] = 9; } finally { System.out.print("A"); } } catch (NullPointerException e) { System.out.println("B"); } } }
    options:
      - A
      - B
      - AB
      - BA
    answer: 0
    explanation: A is the correct answer to “What will be the output of the following Java program? class exception_handling { public static void main(String args[]) { try { int a = 1; int b = 10 / a; try { if (a == 1) a = a / a - a; if (a == 2) { int c[] = {1}; c[8] = 9; } finally { System.out.print("A"); } } catch (NullPointerException e) { System.out.println("B"); } } }”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Which of these access specifiers can be used for an interface?
    options:
      - Public
      - Protected
      - private
      - All of the mentioned
    answer: 0
    explanation: Public is the correct answer to “Which of these access specifiers can be used for an interface”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: What will be the output of the following Java program? import java.lang.reflect.*; class Additional_packages { public static void main(String args[]) { try { Class c = Class.forName("java.awt.Dimension"); Constructor constructors[] = c.getConstructors(); for (int i = 0; i < constructors.length; i++) System.out.println(constructors[i]); } catch (Exception e) { System.out.print("Exception"); } } }
    options:
      - Program prints all the constructors of 'java.awt.Dimension' package
      - Program prints all the possible constructors of class 'Class'
      - Program prints "Exception"
      - Runtime Error
    answer: 0
    explanation: Program prints all the constructors of 'java.awt.Dimension' package is the correct answer to “What will be the output of the following Java program? import java.lang.reflect.*; class Additional_packages { public static void main(String args[]) { try { Class c = Class.forName("java.awt.Dimension"); Constructor constructors[] = c.getConstructors(); for (int i = 0; i < constructors.length; i++) System.out.println(constructors[i]); } catch (Exception e) { System.out.print("Exception"); } } }”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: Which of the following package stores all the standard java classes?
    options:
      - lang
      - java
      - util
      - java.packages
    answer: 1
    explanation: java is the correct answer to “Which of the following package stores all the standard java classes”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: What type of methods an interface contain by default?
    options:
      - abstract
      - static
      - final
      - private
    answer: 0
    explanation: abstract is the correct answer to “What type of methods an interface contain by default”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: Which of these exceptions is thrown by compareTo() method defined in a double wrapper?
    options:
      - IOException
      - SystemException
      - CastException
      - ClassCastException
    answer: 3
    explanation: ClassCastException is the correct answer to “Which of these exceptions is thrown by compareTo() method defined in a double wrapper”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: Which of these methods is used to check for infinitely large and small values?
    options:
      - isInfinite()
      - isNaN()
    answer: 0
    explanation: isInfinite() is the correct answer to “Which of these methods is used to check for infinitely large and small values”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: What is true about the setProperties method?
    options:
      - setProperties method changes the set of Java Properties which are persistent
      - Changing the system properties within an application will affect future invocations
      - setProperties method changes the set of Java Properties which are not persistent
      - setProperties writes the values directly into the file which stores all the properties
    answer: 2
    explanation: setProperties method changes the set of Java Properties which are not persistent is the correct answer to “What is true about the setProperties method”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: Java system properties can be set at runtime.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “Java system properties can be set at runtime.”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: What will be the output of the following Java code? class Output { public static void main(String args[]) { byte a[] = { 65, 66, 67, 68, 69, 70 }; byte b[] = { 71, 72, 73, 74, 75, 76 }; System.arraycopy(a, 2, b, 1, a.length-2); System.out.print(new String(a) + " " + new String(b)); } }
    options:
      - ABCDEF GHIJKL
      - ABCDEF GCDEFL
      - GHIJKL ABCDEF
      - GCDEFL GHIJKL
    answer: 1
    explanation: ABCDEF GCDEFL is the correct answer to “What will be the output of the following Java code? class Output { public static void main(String args[]) { byte a[] = { 65, 66, 67, 68, 69, 70 }; byte b[] = { 71, 72, 73, 74, 75, 76 }; System.arraycopy(a, 2, b, 1, a.length-2); System.out.print(new String(a) + " " + new String(b)); } }”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: "What will be the output of the following Java program? (Note: file is made in c drive.) import java.io.*; class files { public static void main(String args[]) { File obj = new File(\"/java/system\"); System.out.print(obj.getAbsolutePath()); } }"
    options:
      - java
      - system
      - java/system
      - \java\system
    answer: 3
    explanation: "\\java\\system is the correct answer to “What will be the output of the following Java program? (Note: file is made in c drive.) import java.io.*; class files { public static void main(String args[]) { File obj = new File(\"/java/system\"); System.out.print(obj.getAbsolutePath()); } }”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes."
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: What will be the output of the following Java program? class Output { public static void main(String args[]) { String str = "true"; boolean x = Boolean.valueOf(str); System.out.print(x); } }
    options:
      - "True"
      - "False"
      - Compilation Error
      - Runtime Error
    answer: 0
    explanation: True is the correct answer to “What will be the output of the following Java program? class Output { public static void main(String args[]) { String str = "true"; boolean x = Boolean.valueOf(str); System.out.print(x); } }”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: "What will be the output of the following Java program? (Note: file is made in c drive.) import java.io.*; class files { public static void main(String args[]) { File obj = new File(\"/java/system\"); System.out.print(obj.canWrite()); System.out.print(\" \" + obj.canRead()); } }"
    options:
      - true false
      - false true
      - true true
      - false false
    answer: 3
    explanation: "false false is the correct answer to “What will be the output of the following Java program? (Note: file is made in c drive.) import java.io.*; class files { public static void main(String args[]) { File obj = new File(\"/java/system\"); System.out.print(obj.canWrite()); System.out.print(\" \" + obj.canRead()); } }”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes."
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: What will be the output of the following Java program? class Output { public static void main(String args[]) { Integer i = new Integer(257); float x = i.floatValue(); System.out.print(x); } }
    options:
      - "0"
      - "1"
      - "257"
      - "257.0"
    answer: 3
    explanation: 257.0 is the correct answer to “What will be the output of the following Java program? class Output { public static void main(String args[]) { Integer i = new Integer(257); float x = i.floatValue(); System.out.print(x); } }”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: Which of these class is used to read and write bytes in a file?
    options:
      - FileReader
      - FileWriter
      - FileInputStream
      - InputStreamReader
    answer: 2
    explanation: FileInputStream is the correct answer to “Which of these class is used to read and write bytes in a file”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: Which of these method returns the remainder of dividend / divisor?
    options:
      - remainder()
      - getRemainder()
      - CSIremainder()
      - IEEEremainder()
    answer: 3
    explanation: IEEEremainder() is the correct answer to “Which of these method returns the remainder of dividend / divisor”. This question is standard in competitive examination syllabi for Interfaces And Abstract Classes.
    keyConcept: Interfaces And Abstract Classes
    testedIn:
      - FPSC
      - PPSC
---


