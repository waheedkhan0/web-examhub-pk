---
title: Exceptions — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Exceptions — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: exceptions-part-2
topicName: Exceptions — Part 2
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
    question: Which keyword is used to explicitly throw an exception?
    options:
      - try
      - throwing
      - catch
      - throw
    answer: 3
    explanation: throw is the correct answer to “Which keyword is used to explicitly throw an exception”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: Which exception is thrown when divide by zero statement executes?
    options:
      - NumberFormatException
      - ArithmeticException
      - NullPointerException
      - None of these
    answer: 1
    explanation: ArithmeticException is the correct answer to “Which exception is thrown when divide by zero statement executes”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Which keyword is used to specify the exception thrown by method?
    options:
      - catch
      - throws
      - finally
      - throw
    answer: 1
    explanation: throws is the correct answer to “Which keyword is used to specify the exception thrown by method”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: Which of the following blocks execute compulsorily whether exception is caught or not.
    options:
      - finally
      - catch
      - throws
      - throw
    answer: 0
    explanation: finally is the correct answer to “Which of the following blocks execute compulsorily whether exception is caught or not.”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: What happen in case of multiple catch blocks?
    options:
      - Either super or subclass can be caught first.
      - The superclass exception must be caught first.
      - The superclass exception cannot caught first.
      - None of these
    answer: 2
    explanation: The superclass exception cannot caught first. is the correct answer to “What happen in case of multiple catch blocks”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: Which exception is thrown when an array element is accessed beyond the array size?
    options:
      - ArrayElementOutOfBounds
      - ArrayIndexOutOfBoundsException
      - ArrayIndexOutOfBounds
      - None of these
    answer: 1
    explanation: ArrayIndexOutOfBoundsException is the correct answer to “Which exception is thrown when an array element is accessed beyond the array size”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What is the output of the following program code? public class Test{ public static void main(String args[]){ try{ int i; return; } catch(Exception e){ System.out.print("inCatchBlock"); } finally{ System.out.println("inFinallyBlock"); } } }
    options:
      - inCatchBlock
      - inCatchBlock inFinallyBlock
      - inFinallyBlock
      - The program will return without printing anything
    answer: 2
    explanation: inFinallyBlock is the correct answer to “What is the output of the following program code? public class Test{ public static void main(String args[]){ try{ int i; return; } catch(Exception e){ System.out.print("inCatchBlock"); } finally{ System.out.println("inFinallyBlock"); } } }”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: "What will be the output of the following piece of code: class Person{ public void talk() {} } public class Test{ public static void main(String args[]){ Person p = null; try{ p.talk(); } catch(NullPointerException e){ System.out.print(\"There is a NullPointerException. \"); } catch(Exception e){ System.out.print(\"There is an Exception. \"); } System.out.print(\"Everything went fine. \"); } }"
    options:
      - There is a NullPointerException. Everything went fine.
      - There is a NullPointerException.
      - There is a NullPointerException. There is an Exception.
      - This code will not compile, because in Java there are no pointers.
    answer: 0
    explanation: "There is a NullPointerException. Everything went fine. is the correct answer to “What will be the output of the following piece of code: class Person{ public void talk() {} } public class Test{ public static void main(String args[]){ Person p = null; try{ p.talk(); } catch(NullPointerException e){ System.out.print(\"There is a NullPointerException. \"); } catch(Exception e){ System.out.print(\"There is an Exception. \"); } System.out.print(\"Everything went fine. \"); } }”. This question is standard in competitive examination syllabi for Exceptions."
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: Determine output of the following program code? public class Test{ public static void main(String args[]){ int i; try{ i = calculate(); System.out.println(i); }catch(Exception e){ System.out.println("Error occured"); } } static int calculate(){ return (7/2); } }
    options:
      - "3"
      - "3.5"
      - Error occured
      - Compilation Error
      - None of these
    answer: 0
    explanation: 3 is the correct answer to “Determine output of the following program code? public class Test{ public static void main(String args[]){ int i; try{ i = calculate(); System.out.println(i); }catch(Exception e){ System.out.println("Error occured"); } } static int calculate(){ return (7/2); } }”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: public class Test{ public static void main(String args[]){ try{ int a = Integer.parseInt("four"); } } } Which exception could be handled by the catch block for above?
    options:
      - IllegalStateException
      - NumberFormatException
      - ClassCastException
      - ArrayIndexOutOfBoundsException
      - None of these
    answer: 1
    explanation: NumberFormatException is the correct answer to “public class Test{ public static void main(String args[]){ try{ int a = Integer.parseInt("four"); } } } Which exception could be handled by the catch block for above”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: "Predict the output: public class Test{ public static void main(String args[]){ try{ String arr[] = new String[10]; arr = null; arr[0] = \"one\"; System.out.print(arr[0]); }catch(Exception ex){ System.out.print(\"exception\"); }catch(NullPointerException nex){ System.out.print(\"null pointer exception\"); } } }"
    options:
      - "\"one\" is printed."
      - "\"exception\" is printed."
      - "\"null pointer exception\" is printed."
      - Compilation fails saying NullPointerException has already been caught.
      - None of these
    answer: 3
    explanation: "Compilation fails saying NullPointerException has already been caught. is the correct answer to “Predict the output: public class Test{ public static void main(String args[]){ try{ String arr[] = new String[10]; arr = null; arr[0] = \"one\"; System.out.print(arr[0]); }catch(Exception ex){ System.out.print(\"exception\"); }catch(NullPointerException nex){ System.out.print(\"null pointer exception\"); } } }”. This question is standard in competitive examination syllabi for Exceptions."
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: Given the code. What is the result when this program is executed? public class Test{ static int x[]; static{ x[0] = 1; } public static void main(String args[]){ } }
    options:
      - ArrayIndexOutOfBoundsException is thrown
      - ExceptionInInitializerError is thrown
      - IllegalStateException is thrown
      - StackOverflowException is thrown
      - None of these
    answer: 1
    explanation: ExceptionInInitializerError is thrown is the correct answer to “Given the code. What is the result when this program is executed? public class Test{ static int x[]; static{ x[0] = 1; } public static void main(String args[]){ } }”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What will be the result if NullPointerException occurs at line 2? try{ //some code goes here } catch(NullPointerException ne){ System.out.print("1 "); } catch(RuntimeException re){ System.out.print("2 "); } finally{ System.out.print("3"); }
    options:
      - "1"
      - "3"
      - 2 3
      - 1 3
      - 1 2 3
    answer: 3
    explanation: 1 3 is the correct answer to “What will be the result if NullPointerException occurs at line 2? try{ //some code goes here } catch(NullPointerException ne){ System.out.print("1 "); } catch(RuntimeException re){ System.out.print("2 "); } finally{ System.out.print("3"); }”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What will be the result after the class Test execution? class A{ public void doA(){ B b = new B(); b.dobB(); System.out.print("doA"); } } class B{ public void dobB(){ C c = new C(); c.doC(); System.out.print("doB"); } } class C{ public void doC(){ if(true) throw new NullPointerException(); System.out.print("doC"); } } public class Test{ public static void main(String args[]){ try{ A a = new A(); a.doA(); }catch(Exception ex){ System.out.print("error"); } } }
    options:
      - "\"doCdoBdoA\" is printed"
      - "\"doAdoBdoC\" is printed"
      - "\"doBdoAerror\" is printed"
      - "\"error\" is printed"
      - nothing is printed
    answer: 3
    explanation: "\"error\" is printed is the correct answer to “What will be the result after the class Test execution? class A{ public void doA(){ B b = new B(); b.dobB(); System.out.print(\"doA\"); } } class B{ public void dobB(){ C c = new C(); c.doC(); System.out.print(\"doB\"); } } class C{ public void doC(){ if(true) throw new NullPointerException(); System.out.print(\"doC\"); } } public class Test{ public static void main(String args[]){ try{ A a = new A(); a.doA(); }catch(Exception ex){ System.out.print(\"error\"); } } }”. This question is standard in competitive examination syllabi for Exceptions."
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: Which of the following should be true of the object thrown by a thrown statement?
    options:
      - Should be assignable to String type
      - Should be assignable to Exception type
      - Should be assignable to Throwable type
      - Should be assignable to Error type
    answer: 2
    explanation: Should be assignable to Throwable type is the correct answer to “Which of the following should be true of the object thrown by a thrown statement”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: Which of the following keywords is used for throwing exception manually?
    options:
      - finally
      - try
      - throw
      - catch
    answer: 2
    explanation: throw is the correct answer to “Which of the following keywords is used for throwing exception manually”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: Which of these operator is used to generate an instance of an exception than can be thrown by using throw?
    options:
      - new
      - malloc
      - alloc
      - thrown
    answer: 0
    explanation: new is the correct answer to “Which of these operator is used to generate an instance of an exception than can be thrown by using throw”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: What will be the output of the following Java code? class Output { public static void main(String args[]) { try { int a = 0; int b = 5; int c = b / a; System.out.print("Hello"); } } }
    options:
      - Hello
      - World
      - HelloWOrld
      - Compilation Error
    answer: 3
    explanation: Compilation Error is the correct answer to “What will be the output of the following Java code? class Output { public static void main(String args[]) { try { int a = 0; int b = 5; int c = b / a; System.out.print("Hello"); } } }”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: Which of these class is related to all the exceptions that cannot be caught?
    options:
      - Error
      - Exception
      - RuntimeExecption
      - All of the mentioned
    answer: 0
    explanation: Error is the correct answer to “Which of these class is related to all the exceptions that cannot be caught”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: Which of these classes is used to define exceptions?
    options:
      - Exception
      - Throwable
      - Abstract
      - System
    answer: 0
    explanation: Exception is the correct answer to “Which of these classes is used to define exceptions”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: Which of these class is related to all the exceptions that can be caught by using catch?
    options:
      - Error
      - Exception
      - RuntimeExecption
      - All of the mentioned
    answer: 1
    explanation: Exception is the correct answer to “Which of these class is related to all the exceptions that can be caught by using catch”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What will be the output of the following Java code? class exception_handling { public static void main(String args[]) { try { System.out.print("Hello" + " " + 1 / 0); } finally { System.out.print("World"); } } }
    options:
      - Hello
      - World
      - Compilation Error
      - First Exception then World
    answer: 3
    explanation: First Exception then World is the correct answer to “What will be the output of the following Java code? class exception_handling { public static void main(String args[]) { try { System.out.print("Hello" + " " + 1 / 0); } finally { System.out.print("World"); } } }”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: Which of these classes is super class of Exception class?
    options:
      - Throwable
      - System
      - RunTime
      - Class
    answer: 0
    explanation: Throwable is the correct answer to “Which of these classes is super class of Exception class”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: "What will be the output of the following Java code? class exception_handling { public static void main(String args[]) { try { int a = args.length; int b = 10 / a; System.out.print(a); try { if (a == 1) a = a / a - a; if (a == 2) { int []c = {1}; c[8] = 9; } } catch (ArrayIndexOutOfBoundException e) { System.out.println(\"TypeA\"); } catch (ArithmeticException e) { System.out.println(\"TypeB\"); } } } Note: Execution command line: $ java exception_handling one two"
    options:
      - TypeA
      - TypeB
      - Compilation Error
      - Runtime Error
    answer: 2
    explanation: "Compilation Error is the correct answer to “What will be the output of the following Java code? class exception_handling { public static void main(String args[]) { try { int a = args.length; int b = 10 / a; System.out.print(a); try { if (a == 1) a = a / a - a; if (a == 2) { int []c = {1}; c[8] = 9; } } catch (ArrayIndexOutOfBoundException e) { System.out.println(\"TypeA\"); } catch (ArithmeticException e) { System.out.println(\"TypeB\"); } } } Note: Execution command line: $ java exception_handling one two”. This question is standard in competitive examination syllabi for Exceptions."
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: Which of these keywords must be used to monitor for exceptions?
    options:
      - try
      - finally
      - throw
      - catch
    answer: 0
    explanation: try is the correct answer to “Which of these keywords must be used to monitor for exceptions”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: What will be the output of the following Java code? public class A { public static void main(String[] args) { try { return; } finally { System.out.println( "Finally" ); } } }
    options:
      - Finally
      - Compilation fails
      - The code runs with no output
      - An exception is thrown at runtime
    answer: 0
    explanation: Finally is the correct answer to “What will be the output of the following Java code? public class A { public static void main(String[] args) { try { return; } finally { System.out.println( "Finally" ); } } }”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: Which of the following classes can catch all exceptions which cannot be caught?
    options:
      - RuntimeException
      - Error
      - Exception
      - ParentException
    answer: 1
    explanation: Error is the correct answer to “Which of the following classes can catch all exceptions which cannot be caught”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: What will be the output of the following Java code? class exception_handling { public static void main(String args[]) { try { int i, sum; sum = 10; for (i = -1; i < 3 ;++i) { sum = (sum / i); System.out.print(i); } } catch(ArithmeticException e) { System.out.print("0"); } } }
    options:
      - "-1"
      - "0"
      - "-10"
      - "-101"
    answer: 2
    explanation: "-10 is the correct answer to “What will be the output of the following Java code? class exception_handling { public static void main(String args[]) { try { int i, sum; sum = 10; for (i = -1; i < 3 ;++i) { sum = (sum / i); System.out.print(i); } } catch(ArithmeticException e) { System.out.print(\"0\"); } } }”. This question is standard in competitive examination syllabi for Exceptions."
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: Which of these keywords are used for the block to be examined for exceptions?
    options:
      - try
      - catch
      - throw
      - check
    answer: 0
    explanation: try is the correct answer to “Which of these keywords are used for the block to be examined for exceptions”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: Which part of code gets executed whether exception is caught or not?
    options:
      - finally
      - try
      - catch
      - throw
    answer: 0
    explanation: finally is the correct answer to “Which part of code gets executed whether exception is caught or not”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: Which of these keywords must be used to handle the exception thrown by try block in some rational manner?
    options:
      - try
      - finally
      - throw
      - catch
    answer: 3
    explanation: catch is the correct answer to “Which of these keywords must be used to handle the exception thrown by try block in some rational manner”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: What will be the output of the following Java code? class exception_handling { public static void main(String args[]) { try { int a = 1; int b = 10 / a; try { if (a == 1) a = a / a - a; if (a == 2) { int c[] = {1}; c[8] = 9; } } finally { System.out.print("A"); } } catch (Exception e) { System.out.println("B"); } } }
    options:
      - A
      - B
      - AB
      - BA
    answer: 0
    explanation: A is the correct answer to “What will be the output of the following Java code? class exception_handling { public static void main(String args[]) { try { int a = 1; int b = 10 / a; try { if (a == 1) a = a / a - a; if (a == 2) { int c[] = {1}; c[8] = 9; } } finally { System.out.print("A"); } } catch (Exception e) { System.out.println("B"); } } }”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: What will be the output of the following Java code? class Output { public static void main(String args[]) { try { int a = 0; int b = 5; int c = a / b; System.out.print("Hello"); } finally { System.out.print("World"); } } }
    options:
      - Hello
      - World
      - HelloWOrld
      - Compilation Error
    answer: 2
    explanation: HelloWOrld is the correct answer to “What will be the output of the following Java code? class Output { public static void main(String args[]) { try { int a = 0; int b = 5; int c = a / b; System.out.print("Hello"); } finally { System.out.print("World"); } } }”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: What will be the output of the following Java code? class exception_handling { public static void main(String args[]) { try { throw new NullPointerException ("Hello"); System.out.print("A"); } catch(ArithmeticException e) { System.out.print("B"); } } }
    options:
      - A
      - B
      - Compilation Error
      - Runtime Error
    answer: 2
    explanation: Compilation Error is the correct answer to “What will be the output of the following Java code? class exception_handling { public static void main(String args[]) { try { throw new NullPointerException ("Hello"); System.out.print("A"); } catch(ArithmeticException e) { System.out.print("B"); } } }”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: Which of these methods return localized description of an exception?
    options:
      - getLocalizedMessage()
      - getMessage()
      - obtainLocalizedMessage()
      - printLocalizedMessage()
    answer: 0
    explanation: getLocalizedMessage() is the correct answer to “Which of these methods return localized description of an exception”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: "What will be the output of the following Java code? class exception_handling { public static void main(String args[]) { try { int a = args.length; int b = 10 / a; System.out.print(a); } catch (ArithmeticException e) { System.out.println(\"1\"); } } } Note : Execution command line : $ java exception_handling"
    options:
      - "0"
      - "1"
      - Compilation Error
      - Runtime Error
    answer: 1
    explanation: "1 is the correct answer to “What will be the output of the following Java code? class exception_handling { public static void main(String args[]) { try { int a = args.length; int b = 10 / a; System.out.print(a); } catch (ArithmeticException e) { System.out.println(\"1\"); } } } Note : Execution command line : $ java exception_handling”. This question is standard in competitive examination syllabi for Exceptions."
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: When does Exceptions in Java arises in code sequence?
    options:
      - Run Time
      - Compilation Time
      - Can Occur Any Time
      - None of the mentioned
    answer: 0
    explanation: Run Time is the correct answer to “When does Exceptions in Java arises in code sequence”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: What will be the output of the following Java code? class Output { public static void main(String args[]) { try { int a = 0; int b = 5; int c = a / b; System.out.print("Hello"); } catch(Exception e) { System.out.print("World"); } } }
    options:
      - Hello
      - World
      - HelloWOrld
      - Compilation Error
    answer: 0
    explanation: Hello is the correct answer to “What will be the output of the following Java code? class Output { public static void main(String args[]) { try { int a = 0; int b = 5; int c = a / b; System.out.print("Hello"); } catch(Exception e) { System.out.print("World"); } } }”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: What will be the output of the following Java code? class Output { public static void main(String args[]) { try { int a = 0; int b = 5; int c = b / a; System.out.print("Hello"); } catch(Exception e) { System.out.print("World"); } finally { System.out.print("World"); } } }
    options:
      - Hello
      - World
      - HelloWOrld
      - WorldWorld
    answer: 3
    explanation: WorldWorld is the correct answer to “What will be the output of the following Java code? class Output { public static void main(String args[]) { try { int a = 0; int b = 5; int c = b / a; System.out.print("Hello"); } catch(Exception e) { System.out.print("World"); } finally { System.out.print("World"); } } }”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: What will be the output of the following Java code? class exception_handling { public static void main(String args[]) { try { System.out.print("A"); throw new NullPointerException ("Hello"); } catch(ArithmeticException e) { System.out.print("B"); } } }
    options:
      - A
      - B
      - Hello
      - Runtime Exception
    answer: 3
    explanation: Runtime Exception is the correct answer to “What will be the output of the following Java code? class exception_handling { public static void main(String args[]) { try { System.out.print("A"); throw new NullPointerException ("Hello"); } catch(ArithmeticException e) { System.out.print("B"); } } }”. This question is standard in competitive examination syllabi for Exceptions.
    keyConcept: Exceptions
    testedIn:
      - FPSC
      - PPSC
---


