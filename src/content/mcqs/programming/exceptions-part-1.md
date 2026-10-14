---
title: Exceptions — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Exceptions — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: exceptions-part-1
topicName: Exceptions — Part 1
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
    question: What is the result of the following code snippet? try { throw new NullPointerException(); } catch (ArithmeticException e) { System.out.println("Arithmetic Exception!"); } catch (NullPointerException e) { System.out.println("NullPointerException!"); }
    options:
      - NullPointerException!
      - Compilation error
      - Runtime exception
      - Arithmetic Exception!
    answer: 0
    explanation: "In the given code snippet, a NullPointerException is explicitly thrown within the try block. When an exception is thrown, the Java runtime looks for a catch block that matches the type of the thrown exception. In this case, since a NullPointerException is thrown, the catch block specifically catching NullPointerException will be executed. Therefore, the output of the code will be \"NullPointerException!\" . Hence, Option A: NullPointerException! is the correct result of the code snippet."
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: In which of the following package Exception class exist?
    options:
      - java.util
      - java.file
      - java.io
      - java.lang
      - java.net
    answer: 3
    explanation: The Exception class is part of the java.lang package. java.lang is one of the core packages in Java, automatically imported into every Java program. The Exception class, being part of this package, is the base class for all exceptions in Java. It handles various types of runtime errors, allowing developers to manage error conditions gracefully.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: "Given the following piece of code: class SalaryCalculationException extends Exception{} class Person{ public void calculateSalary() throws SalaryCalculationException{ //... throw new SalaryCalculationException(); //... } } class Company{ public void paySalaries(){ new Person().calculateSalary(); } } Which of the following statements is correct? 1. This code will compile without any problems. 2. This code will compile if in method paySalaries() we return a boolean in stead of void. 3. This code will compile if we add a try-catch block in paySalaries(). 4. This code will compile if we add throws SalaryCalculationException in the signature of method paySalaries()."
    options:
      - 1 and 4
      - 2 and 3
      - 2 and 4
      - 3 and 4
      - 1 and 2
    answer: 3
    explanation: 1. This code will compile without any problems. This statement is incorrect because the code includes the declaration of a checked exception ( SalaryCalculationException ), but it is not handled or propagated properly. So, it will not compile without addressing this issue. 2. This code will compile if in method paySalaries() we return a boolean instead of void. This statement is incorrect because the issue with the compilation lies in the exception handling, not the return type of the paySalaries() method. Changing the return type to boolean will not resolve the compilation problem. 3. This code will compile if we add a try-catch block in paySalaries() . This statement is correct. By adding a try-catch block in the paySalaries() method, we can catch the SalaryCalculationException thrown by the calculateSalary() method. This way, the exception is properly handled, and the code will compile successfully. 4. This code will compile if we add throws SalaryCalculationException in the signature of method paySalaries() . This statement is correct. By adding the throws SalaryCalculationException clause to the paySalaries() method signature, we indicate that this method may throw the SalaryCalculationException . This way, the exception is propagated to the caller, and the code will compile successfully. Therefore, the correct statement is D. 3 and 4 .
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What will be the output? class MyClass{ public String test(){ try{ System.out.print("One"); return ""; } finally{ System.out.print("Two"); } } } public class Test{ public static void main(String args[]){ MyClass m = new MyClass(); m.test(); } }
    options:
      - One
      - Two
      - One Two
      - Compilation Error
      - None of these
    answer: 2
    explanation: Finally block will execute irrespective of return statement in try block.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: "What will be the result after compiling this code? class SuperClass{ public int doIt(String str, Integer... data)throws Exception{ String signature = \"(String, Integer[])\"; System.out.println(str + \" \" + signature); return 1; } } public class Test extends SuperClass{ public int doIt(String str, Integer... data){ String signature = \"(String, Integer[])\"; System.out.println(\"Overridden: \" + str + \" \" +signature); return 0; } public static void main(String... args){ SuperClass sb = new Test(); sb.doIt(\"hello\", 3); } }"
    options:
      - "Overridden: hello (String, Integer[])"
      - hello (String, Integer[])
      - Compilation fails
      - None of these
    answer: 2
    explanation: Exceptions must be caught or declared to be thrown.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: try{ File f = new File("a.txt"); }catch(Exception e){ }catch(IOException io){ } Is this code create new file name a.txt ?
    options:
      - "true"
      - "false"
      - Compilation Error
      - None of these
    answer: 2
    explanation: IOException is unreachable to compiler because all exception is going to catch by Exception block.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What is the output for the below code? import java.io.FileNotFoundException; class A{ public void printName() throws FileNotFoundException{ System.out.println("Value-A"); } } class B extends A{ public void printName() throws NullPointerException{ System.out.println("Name-B"); } } public class Test{ public static void main (String[] args) throws Exception{ A a = new B(); a.printName(); } }
    options:
      - Value-A
      - Compilation fails-Exception NullPointerException is not compatible with throws clause in A.printName()
      - Name-B
      - Compilation succeed but no output
      - None of these
    answer: 2
    explanation: The overriding method can throw any unchecked (runtime) exception, regardless of exception thrown by overridden method. NullPointerException is RuntimeException so compiler will not complain.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What will be the result of executing the following code? public class Test{ public void divide(int a, int b){ try{ int c = a / b; }catch(Exception e){ System.out.print("Exception "); }finally{ System.out.println("Finally"); } public static void main(String args[]){ Test t = new Test(); t.divide(0,3); } }
    options:
      - "Prints out: Exception"
      - "Prints out: Exception Finally"
      - Compile with error
      - "Prints out: Finally"
      - None of these
    answer: 3
    explanation: Finally blocks are always executed whether exception occurs or not. 0/3 = 0 Does not throws exception.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: Which of the below statement is/are true about Error? A. An Error is a subclass of Throwable. B. An Error is a subclass of Exception. C. Error indicates serious problems that a reasonable application should not try to catch. D. An Error is a subclass of IOException.
    options:
      - A and D
      - A and B
      - A and C
      - B and C
      - B and D
    answer: 2
    explanation: "Statement A: This is true. In Java, Error is indeed a direct subclass of Throwable , which is the superclass of all errors and exceptions in the Java language. Statement B: This is false. Error is not a subclass of Exception . Both Error and Exception are direct subclasses of Throwable but are distinct from each other. Statement C: This is true. Errors generally indicate serious problems that a reasonable application should not try to catch. These are conditions that are usually outside the control of the program and require intervention at a higher level (such as the runtime environment). Examples include virtual machine errors, out-of-memory errors, etc. Statement D: This is false. Error is not a subclass of IOException . IOException is a subclass of Exception , specifically used for handling I/O-related issues. Correct Statements: A and C: Option C is correct because it includes the accurate statements about Error in Java. Example for better understanding: In Java, Error and Exception classes are used for different purposes. Errors indicate problems that are typically not expected to be caught by applications, such as out-of-memory errors, while exceptions are conditions that applications might want to catch and handle, such as file not found exceptions."
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What is an exception in Java?
    options:
      - An error that occurs during runtime
      - An error that occurs during compilation
      - A warning issued by the compiler
      - A type of loop
    answer: 0
    explanation: An error that occurs during runtime is the correct answer to “What is an exception in Java”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: Which keyword is used to handle exceptions in Java?
    options:
      - throws
      - throw
      - try
      - catch
    answer: 3
    explanation: catch is the correct answer to “Which keyword is used to handle exceptions in Java”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: What is the purpose of the "try" block in exception handling?
    options:
      - It catches exceptions and handles them
      - It specifies the exception type
      - It contains the code that might throw an exception
      - It specifies the exception message
    answer: 2
    explanation: It contains the code that might throw an exception is the correct answer to “What is the purpose of the "try" block in exception handling”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: In Java, can a method declare multiple exceptions using the "throws" keyword?
    options:
      - Only if the method is marked as "static"
      - Yes, a method can declare multiple exceptions separated by commas
      - Only if the exceptions are marked as "final"
      - Only if the method is marked as "final"
    answer: 1
    explanation: Yes, a method can declare multiple exceptions separated by commas is the correct answer to “In Java, can a method declare multiple exceptions using the "throws" keyword”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What is the purpose of the "catch" block in exception handling?
    options:
      - It specifies the exception message
      - It specifies the exception type
      - It catches exceptions and handles them
      - It contains the code that might throw an exception
    answer: 2
    explanation: It catches exceptions and handles them is the correct answer to “What is the purpose of the "catch" block in exception handling”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: In Java, can a "catch" block catch multiple exceptions?
    options:
      - No, a "catch" block can only catch one exception
      - Only if the "catch" block is marked as "static"
      - Only if the exceptions are marked as "final"
      - Yes, a "catch" block can catch multiple exceptions using the pipe ( | ) symbol
    answer: 3
    explanation: Yes, a "catch" block can catch multiple exceptions using the pipe ( | ) symbol is the correct answer to “In Java, can a "catch" block catch multiple exceptions”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What is the purpose of the "throw" keyword in Java exception handling?
    options:
      - To explicitly throw an exception
      - To catch exceptions
      - To specify exception types
      - To declare a method as "throws"
    answer: 0
    explanation: To explicitly throw an exception is the correct answer to “What is the purpose of the "throw" keyword in Java exception handling”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: In Java, can a method throw any checked exception without declaring it using "throws"?
    options:
      - Only if the exception is marked as "static"
      - Only if the method is marked as "final"
      - No, a method must declare checked exceptions using the "throws" keyword
      - Yes, a method can throw any checked exception without declaration
    answer: 3
    explanation: Yes, a method can throw any checked exception without declaration is the correct answer to “In Java, can a method throw any checked exception without declaring it using "throws"”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: What is the purpose of the "throws" keyword in Java method declaration?
    options:
      - To indicate that the method will throw an unchecked exception
      - To specify the exception message
      - To indicate that the method may throw a checked exception
      - To specify the exception type
    answer: 2
    explanation: To indicate that the method may throw a checked exception is the correct answer to “What is the purpose of the "throws" keyword in Java method declaration”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: What is the result of the following code snippet? try { int[] arr = new int[5]; int value = arr[10]; } catch (ArrayIndexOutOfBoundsException e) { System.out.println("Exception Caught!"); }
    options:
      - Compilation error
      - Exception Caught!
      - Runtime exception
      - Bounds Exception
    answer: 1
    explanation: Exception Caught! is the correct answer to “What is the result of the following code snippet? try { int[] arr = new int[5]; int value = arr[10]; } catch (ArrayIndexOutOfBoundsException e) { System.out.println("Exception Caught!"); }”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: In Java, which type of exceptions are checked at compile-time?
    options:
      - Custom exceptions
      - RuntimeExceptions
      - Checked exceptions
      - Unchecked exceptions
    answer: 2
    explanation: Checked exceptions is the correct answer to “In Java, which type of exceptions are checked at compile-time”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: What is the result of the following code snippet? try { int num = 10 / 0; } catch (ArithmeticException e) { System.out.println("Arithmetic Exception!"); } catch (Exception e) { System.out.println("Exception!"); }
    options:
      - Exception!
      - No output
      - Compilation error
      - Arithmetic Exception!
    answer: 3
    explanation: Arithmetic Exception! is the correct answer to “What is the result of the following code snippet? try { int num = 10 / 0; } catch (ArithmeticException e) { System.out.println("Arithmetic Exception!"); } catch (Exception e) { System.out.println("Exception!"); }”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: In Java, which type of exceptions are unchecked at compile-time?
    options:
      - Unchecked exceptions
      - Checked exceptions
      - RuntimeExceptions
      - Custom exceptions
    answer: 0
    explanation: Unchecked exceptions is the correct answer to “In Java, which type of exceptions are unchecked at compile-time”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: What is the result of the following code snippet? try { String str = null; System.out.println(str.length()); } catch (NullPointerException e) { System.out.println("NullPointerException!"); } catch (Exception e) { System.out.println("Exception!"); }
    options:
      - Compilation error
      - No output
      - Exception!
      - NullPointerException!
    answer: 3
    explanation: NullPointerException! is the correct answer to “What is the result of the following code snippet? try { String str = null; System.out.println(str.length()); } catch (NullPointerException e) { System.out.println("NullPointerException!"); } catch (Exception e) { System.out.println("Exception!"); }”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: In Java, can a "finally" block be used without a "try-catch" block?
    options:
      - Yes, a "finally" block can be used independently
      - Only if the "finally" block is marked as "static"
      - No, a "finally" block must be associated with a "try-catch" block
      - Only if the "finally" block is marked as "final"
    answer: 2
    explanation: No, a "finally" block must be associated with a "try-catch" block is the correct answer to “In Java, can a "finally" block be used without a "try-catch" block”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: What is the purpose of the "finally" block in Java exception handling?
    options:
      - To throw exceptions explicitly
      - To specify code that must be executed regardless of whether an exception is thrown or caught
      - To specify the exception type
      - When an exception does not rise
    answer: 1
    explanation: To specify code that must be executed regardless of whether an exception is thrown or caught is the correct answer to “What is the purpose of the "finally" block in Java exception handling”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: In Java, can a "finally" block be used without a "catch" block?
    options:
      - Only if the "finally" block is marked as "final"
      - Only if the "finally" block is marked as "static"
      - Yes, a "finally" block can be used independently
      - No, a "finally" block must be associated with a "catch" block
    answer: 2
    explanation: Yes, a "finally" block can be used independently is the correct answer to “In Java, can a "finally" block be used without a "catch" block”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: What is the result of the following code snippet? try { int[] arr = new int[5]; int value = arr[2]; } catch (NullPointerException e) { System.out.println("NullPointerException!"); } finally { System.out.println("Finally Block!"); }
    options:
      - No output
      - NullPointerException!
      - Compilation error
      - Finally Block!
    answer: 3
    explanation: Finally Block! is the correct answer to “What is the result of the following code snippet? try { int[] arr = new int[5]; int value = arr[2]; } catch (NullPointerException e) { System.out.println("NullPointerException!"); } finally { System.out.println("Finally Block!"); }”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: In Java, can a "catch" block catch exceptions of a superclass type?
    options:
      - Yes, a "catch" block can catch exceptions of a superclass type
      - No, a "catch" block can only catch exceptions of the exact type
      - Only if the superclass is marked as "final"
      - Only if the subclass is marked as "static"
    answer: 0
    explanation: Yes, a "catch" block can catch exceptions of a superclass type is the correct answer to “In Java, can a "catch" block catch exceptions of a superclass type”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: What is the result of the following code snippet? try { int result = 10 / 0; } catch (ArithmeticException e) { System.out.println("Arithmetic Exception!"); } finally { System.out.println("Finally Block!"); }
    options:
      - No output
      - Finally Block!
      - Arithmetic Exception!
      - Arithmetic Exception!Finally Block!
    answer: 3
    explanation: Arithmetic Exception!Finally Block! is the correct answer to “What is the result of the following code snippet? try { int result = 10 / 0; } catch (ArithmeticException e) { System.out.println("Arithmetic Exception!"); } finally { System.out.println("Finally Block!"); }”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: In Java, can a method declare both "throws" and "throw" statements?
    options:
      - No, a method can only declare one of them
      - Only if the method is marked as "static"
      - Yes, a method can declare both "throws" and "throw" statements
      - Only if the method is marked as "final"
    answer: 2
    explanation: Yes, a method can declare both "throws" and "throw" statements is the correct answer to “In Java, can a method declare both "throws" and "throw" statements”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: What is the result of the following code snippet? try { String str = "Java"; int num = Integer.parseInt(str); } catch (NumberFormatException e) { System.out.println("NumberFormatException!"); } catch (Exception e) { System.out.println("Exception!"); } finally { System.out.println("Finally Block!"); }
    options:
      - Finally Block!
      - NumberFormatException!Finally Block!
      - Compilation error
      - Exception Block!
    answer: 1
    explanation: NumberFormatException!Finally Block! is the correct answer to “What is the result of the following code snippet? try { String str = "Java"; int num = Integer.parseInt(str); } catch (NumberFormatException e) { System.out.println("NumberFormatException!"); } catch (Exception e) { System.out.println("Exception!"); } finally { System.out.println("Finally Block!"); }”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: In Java, can a method declare "throws" for a checked exception that is not thrown in the method body?
    options:
      - Only if the exceptions are marked as "final"
      - Only if the method is marked as "static"
      - Yes, a method can declare "throws" for checked exceptions that are not thrown in the method body
      - No, a method must throw all the exceptions it declares
    answer: 2
    explanation: Yes, a method can declare "throws" for checked exceptions that are not thrown in the method body is the correct answer to “In Java, can a method declare "throws" for a checked exception that is not thrown in the method body”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: In Java, can a "finally" block have a "return" statement?
    options:
      - Yes, a "finally" block can have a "return" statement
      - No, a "finally" block cannot contain a "return" statement
      - Only if the method is marked as "static"
      - Only if the "finally" block is marked as "final"
    answer: 0
    explanation: Yes, a "finally" block can have a "return" statement is the correct answer to “In Java, can a "finally" block have a "return" statement”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: What is the result of the following code snippet? try { int[] arr = new int[5]; int value = arr[10]; } catch (ArrayIndexOutOfBoundsException e) { System.out.println("Exception Caught!"); } finally { System.out.println("Finally Block!"); }
    options:
      - Compilation error
      - Exception Caught!
      - Finally Block!
      - Exception Caught!Finally Block!
    answer: 3
    explanation: Exception Caught!Finally Block! is the correct answer to “What is the result of the following code snippet? try { int[] arr = new int[5]; int value = arr[10]; } catch (ArrayIndexOutOfBoundsException e) { System.out.println("Exception Caught!"); } finally { System.out.println("Finally Block!"); }”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: In Java, can a "try" block have multiple "catch" blocks?
    options:
      - No, a "try" block can have only one "catch" block
      - Only if the "try" block is marked as "static"
      - Yes, a "try" block can have multiple "catch" blocks to catch different types of exceptions
      - Only if the "catch" blocks are marked as "final"
    answer: 2
    explanation: Yes, a "try" block can have multiple "catch" blocks to catch different types of exceptions is the correct answer to “In Java, can a "try" block have multiple "catch" blocks”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: What is the result of the following code snippet? try { throw new ArithmeticException(); } catch (Exception e) { System.out.println("Exception!"); } catch (ArithmeticException e) { System.out.println("Arithmetic Exception!"); }
    options:
      - Arithmetic Exception!
      - Compilation error
      - Runtime exception
      - ArithmeticException
    answer: 1
    explanation: Compilation error is the correct answer to “What is the result of the following code snippet? try { throw new ArithmeticException(); } catch (Exception e) { System.out.println("Exception!"); } catch (ArithmeticException e) { System.out.println("Arithmetic Exception!"); }”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: In Java, can a "catch" block catch exceptions of a subclass type before catching exceptions of a superclass type?
    options:
      - Only if the superclass is marked as "static"
      - Only if the subclass is marked as "final"
      - Yes, a "catch" block can catch exceptions of a subclass type before a superclass type
      - No, a "catch" block must catch exceptions of a superclass type first
    answer: 2
    explanation: Yes, a "catch" block can catch exceptions of a subclass type before a superclass type is the correct answer to “In Java, can a "catch" block catch exceptions of a subclass type before catching exceptions of a superclass type”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: What is the result of the following code snippet? try { throw new RuntimeException(); } catch (RuntimeException e) { System.out.println("Runtime Exception!"); } catch (Exception e) { System.out.println("Exception!"); }
    options:
      - Exception!
      - Compilation error
      - No output
      - Runtime Exception!
    answer: 3
    explanation: Runtime Exception! is the correct answer to “What is the result of the following code snippet? try { throw new RuntimeException(); } catch (RuntimeException e) { System.out.println("Runtime Exception!"); } catch (Exception e) { System.out.println("Exception!"); }”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: The class at the top of exception class hierarchy is .................
    options:
      - ArithmeticException
      - Throwable
      - Object
      - Exception
    answer: 1
    explanation: Throwable is the correct answer to “The class at the top of exception class hierarchy is .................”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: Exception generated in try block is caught in ........... block.
    options:
      - catch
      - throw
      - throws
      - finally
    answer: 0
    explanation: catch is the correct answer to “Exception generated in try block is caught in ........... block.”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
---


