---
title: Threads — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Threads — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: threads-part-2
topicName: Threads — Part 2
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
    question: In Java, can you directly access the run() method of a Thread object?
    options:
      - Only if the thread is marked as "final"
      - Yes, but it will execute in the current thread, not as a separate thread
      - Only if the thread is marked as "static"
      - None of These
    answer: 1
    explanation: Yes, but it will execute in the current thread, not as a separate thread is the correct answer to “In Java, can you directly access the run() method of a Thread object”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: What is the purpose of the getState() method in Java threads?
    options:
      - It suspends a thread
      - It starts a new thread
      - It retrieves the current state of a thread
      - It sets the state of a thread
    answer: 2
    explanation: It retrieves the current state of a thread is the correct answer to “What is the purpose of the getState() method in Java threads”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: In Java, what is the maximum thread priority value?
    options:
      - "100"
      - "255"
      - "1000"
      - "10"
    answer: 3
    explanation: 10 is the correct answer to “In Java, what is the maximum thread priority value”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: In java a thread can be created by ..........
    options:
      - Extending the thread class.
      - Implementing Runnable interface.
      - Both of the above
      - None of these
    answer: 2
    explanation: Both of the above is the correct answer to “In java a thread can be created by ..........”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: When a class extends the Thread class ,it should override ............ method of Thread class to start that thread.
    options:
      - start()
      - run()
      - init()
      - go()
    answer: 1
    explanation: run() is the correct answer to “When a class extends the Thread class ,it should override ............ method of Thread class to start that thread.”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What will be the output of the following program code? public class Test implements Runnable{ public static void main(String[] args){ Thread t = new Thread(this); t.start(); } public void run(){ System.out.println("test"); } }
    options:
      - The program does not compile because this cannot be referenced in a static method.
      - The program compiles fine, but it does not print anything because t does not invoke the run() method
      - The program compiles and runs fine and displays test on the console.
      - None of the above
    answer: 0
    explanation: The program does not compile because this cannot be referenced in a static method. is the correct answer to “What will be the output of the following program code? public class Test implements Runnable{ public static void main(String[] args){ Thread t = new Thread(this); t.start(); } public void run(){ System.out.println("test"); } }”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: "Analyze the following code: public abstract class Test implements Runnable{ public void doSomething() { }; }"
    options:
      - The program will not compile because it does not implement the run() method.
      - The program will not compile because it does not contain abstract methods.
      - The program compiles fine.
      - None of the above
    answer: 2
    explanation: "The program compiles fine. is the correct answer to “Analyze the following code: public abstract class Test implements Runnable{ public void doSomething() { }; }”. This question is standard in competitive examination syllabi for Threads."
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: "Analyze the following code: public class Test implements Runnable{ public static void main(String[] args){ Test t = new Test(); } public Test(){ Thread t = new Thread(this); t.start(); } public void run(){ System.out.println(\"test\"); } }"
    options:
      - The program has a compilation error because t is defined in both the main() method and the constructor Test().
      - The program compiles fine, but it does not run because you cannot use the keyword this in the constructor.
      - The program compiles and runs and displays nothing.
      - The program compiles and runs and displays test.
    answer: 3
    explanation: "The program compiles and runs and displays test. is the correct answer to “Analyze the following code: public class Test implements Runnable{ public static void main(String[] args){ Test t = new Test(); } public Test(){ Thread t = new Thread(this); t.start(); } public void run(){ System.out.println(\"test\"); } }”. This question is standard in competitive examination syllabi for Threads."
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What will be the output? class One extends Thread{ public void run(){ for(int i=0; i<2; i++){ System.out.print(i); } } } public class Test{ public static void main(String args[]){ Test t = new Test(); t.call(new One()); } public void call(One o){ o.start(); } }
    options:
      - 0 0
      - Compilation Error
      - 0 1
      - None of these
    answer: 2
    explanation: 0 1 is the correct answer to “What will be the output? class One extends Thread{ public void run(){ for(int i=0; i<2; i++){ System.out.print(i); } } } public class Test{ public static void main(String args[]){ Test t = new Test(); t.call(new One()); } public void call(One o){ o.start(); } }”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: Which of the following are methods of the Thread class? 1) yield() 2) sleep(long msec) 3) go() 4) stop()
    options:
      - 1 , 2 and 4
      - 1 and 3
      - 3 only
      - None of the above
    answer: 0
    explanation: 1 , 2 and 4 is the correct answer to “Which of the following are methods of the Thread class? 1) yield() 2) sleep(long msec) 3) go() 4) stop()”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What is the output for the below code? public class Test extends Thread{ public static void main(String argv[]){ Test t = new Test(); t.run(); } public void start(){ for(int i = 0; i < 10; i++){ System.out.println("Value of i = " + i); } } }
    options:
      - A compile time error indicating that no run method is defined for the Thread class
      - A run time error indicating that no run method is defined for the Thread class
      - Clean compile and at run time the values 0 to 9 are printed out
      - Clean compile but no output at runtime
      - None of these
    answer: 3
    explanation: Clean compile but no output at runtime is the correct answer to “What is the output for the below code? public class Test extends Thread{ public static void main(String argv[]){ Test t = new Test(); t.run(); } public void start(){ for(int i = 0; i < 10; i++){ System.out.println("Value of i = " + i); } } }”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: Which keyword when applied on a method indicates that only one thread should execute the method at a time.
    options:
      - volatile
      - synchronized
      - native
      - static
      - final
    answer: 1
    explanation: synchronized is the correct answer to “Which keyword when applied on a method indicates that only one thread should execute the method at a time.”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What will be the output after compiling and executing the following code? public class Test implements Runnable{ public static void main(String[] args) throws InterruptedException{ Thread a = new Thread(new Test()); a.start(); System.out.print("Begin"); a.join(); System.out.print("End"); } public void run(){ System.out.print("Run"); } }
    options:
      - Compilation fails.
      - An exception is thrown at runtime.
      - "\"BeginRunEnd\" is printed."
      - "\"BeginEndRun\" is printed."
      - "\"BeginEnd\" is printed."
    answer: 2
    explanation: "\"BeginRunEnd\" is printed. is the correct answer to “What will be the output after compiling and executing the following code? public class Test implements Runnable{ public static void main(String[] args) throws InterruptedException{ Thread a = new Thread(new Test()); a.start(); System.out.print(\"Begin\"); a.join(); System.out.print(\"End\"); } public void run(){ System.out.print(\"Run\"); } }”. This question is standard in competitive examination syllabi for Threads."
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What will be output of the following program code? public class Test implements Runnable{ public void run(){ System.out.print("go"); } public static void main(String arg[]) { Thread t = new Thread(new Test()); t.run(); t.run(); t.start(); } }
    options:
      - Compilation fails.
      - An exception is thrown at runtime.
      - "\"go\" is printed"
      - "\"gogogo\" is printed"
      - "\"gogo\" is printed"
    answer: 3
    explanation: "\"gogogo\" is printed is the correct answer to “What will be output of the following program code? public class Test implements Runnable{ public void run(){ System.out.print(\"go\"); } public static void main(String arg[]) { Thread t = new Thread(new Test()); t.run(); t.run(); t.start(); } }”. This question is standard in competitive examination syllabi for Threads."
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: Given the code. What will be the result? public class Test implements Runnable{ public static void main(String[] args) throws InterruptedException{ Thread a = new Thread(new Test()); a.start(); System.out.print("Begin"); a.join(); System.out.print("End"); } public void run(){ System.out.print("Run"); } }
    options:
      - Compilation fails.
      - An exception is thrown at runtime.
      - "\"BeginRunEnd\" is printed."
      - "\"BeginEndRun\" is printed."
      - "\"BeginEnd\" is printed."
    answer: 2
    explanation: "\"BeginRunEnd\" is printed. is the correct answer to “Given the code. What will be the result? public class Test implements Runnable{ public static void main(String[] args) throws InterruptedException{ Thread a = new Thread(new Test()); a.start(); System.out.print(\"Begin\"); a.join(); System.out.print(\"End\"); } public void run(){ System.out.print(\"Run\"); } }”. This question is standard in competitive examination syllabi for Threads."
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: Which of this method is used to avoid polling in Java?
    options:
      - wait()
      - notify()
      - notifyAll()
      - all of the mentioned
    answer: 3
    explanation: all of the mentioned is the correct answer to “Which of this method is used to avoid polling in Java”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What will be the output of the following Java code? class newthread implements Runnable { Thread t; newthread() { t = new Thread(this,"My Thread"); t.start(); } public void run() { System.out.println(t); } } class multithreaded_programing { public static void main(String args[]) { new newthread(); } }
    options:
      - My Thread
      - Thread[My Thread,5,main]
      - Compilation Error
      - Runtime Error
    answer: 1
    explanation: Thread[My Thread,5,main] is the correct answer to “What will be the output of the following Java code? class newthread implements Runnable { Thread t; newthread() { t = new Thread(this,"My Thread"); t.start(); } public void run() { System.out.println(t); } } class multithreaded_programing { public static void main(String args[]) { new newthread(); } }”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: What will be the output of the following Java code? class newthread extends Thread { Thread t; newthread() { t = new Thread(this,"New Thread"); t.start(); } public void run() { System.out.println(t.isAlive()); } } class multithreaded_programing { public static void main(String args[]) { new newthread(); } }
    options:
      - "0"
      - "1"
      - "true"
      - "false"
    answer: 2
    explanation: true is the correct answer to “What will be the output of the following Java code? class newthread extends Thread { Thread t; newthread() { t = new Thread(this,"New Thread"); t.start(); } public void run() { System.out.println(t.isAlive()); } } class multithreaded_programing { public static void main(String args[]) { new newthread(); } }”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: What will be the output of the following Java code? class newthread extends Thread { Thread t1,t2; newthread() { t1 = new Thread(this,"Thread_1"); t2 = new Thread(this,"Thread_2"); t1.start(); t2.start(); } public void run() { t2.setPriority(Thread.MAX_PRIORITY); System.out.print(t1.equals(t2)); } } class multithreaded_programing { public static void main(String args[]) { new newthread(); } }
    options:
      - "true"
      - "false"
      - truetrue
      - falsefalse
    answer: 3
    explanation: falsefalse is the correct answer to “What will be the output of the following Java code? class newthread extends Thread { Thread t1,t2; newthread() { t1 = new Thread(this,"Thread_1"); t2 = new Thread(this,"Thread_2"); t1.start(); t2.start(); } public void run() { t2.setPriority(Thread.MAX_PRIORITY); System.out.print(t1.equals(t2)); } } class multithreaded_programing { public static void main(String args[]) { new newthread(); } }”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What is true about threading?
    options:
      - run() method calls start() method and runs the code
      - run() method creates new thread
      - run() method can be called directly without start() method being called
      - start() method creates new thread and calls code written in run() method
    answer: 3
    explanation: start() method creates new thread and calls code written in run() method is the correct answer to “What is true about threading”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: What will be the output of the following Java program? class newthread extends Thread { Thread t; String name; newthread(String threadname) { name = threadname; t = new Thread(this,name); t.start(); } public void run() { } } class multithreaded_programing { public static void main(String args[]) { newthread obj1 = new newthread("one"); newthread obj2 = new newthread("two"); try { obj1.t.wait(); System.out.print(obj1.t.isAlive()); } catch(Exception e) { System.out.print("Main thread interrupted"); } } }
    options:
      - "true"
      - "false"
      - Main thread interrupted
      - None of the mentioned
    answer: 2
    explanation: Main thread interrupted is the correct answer to “What will be the output of the following Java program? class newthread extends Thread { Thread t; String name; newthread(String threadname) { name = threadname; t = new Thread(this,name); t.start(); } public void run() { } } class multithreaded_programing { public static void main(String args[]) { newthread obj1 = new newthread("one"); newthread obj2 = new newthread("two"); try { obj1.t.wait(); System.out.print(obj1.t.isAlive()); } catch(Exception e) { System.out.print("Main thread interrupted"); } } }”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What will be the output of the following Java code? class newthread implements Runnable { Thread t; newthread() { t = new Thread(this,"My Thread"); t.start(); } } class multithreaded_programing { public static void main(String args[]) { new newthread(); } }
    options:
      - My Thread
      - Thread[My Thread,5,main]
      - Compilation Error
      - Runtime Error
    answer: 2
    explanation: Compilation Error is the correct answer to “What will be the output of the following Java code? class newthread implements Runnable { Thread t; newthread() { t = new Thread(this,"My Thread"); t.start(); } } class multithreaded_programing { public static void main(String args[]) { new newthread(); } }”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: What will be the output of the following Java code? class newthread implements Runnable { Thread t; newthread() { t = new Thread(this,"My Thread"); t.start(); } public void run() { System.out.println(t.getName()); } } class multithreaded_programing { public static void main(String args[]) { new newthread(); } }
    options:
      - My Thread
      - Thread[My Thread,5,main]
      - Compilation Error
      - Runtime Error
    answer: 0
    explanation: My Thread is the correct answer to “What will be the output of the following Java code? class newthread implements Runnable { Thread t; newthread() { t = new Thread(this,"My Thread"); t.start(); } public void run() { System.out.println(t.getName()); } } class multithreaded_programing { public static void main(String args[]) { new newthread(); } }”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: What will be the output of the following Java code? class newthread implements Runnable { Thread t; newthread() { t1 = new Thread(this,"Thread_1"); t2 = new Thread(this,"Thread_2"); t1.start(); t2.start(); } public void run() { t2.setPriority(Thread.MAX_PRIORITY); System.out.print(t1.equals(t2)); } } class multithreaded_programing { public static void main(String args[]) { new newthread(); } }
    options:
      - "true"
      - "false"
      - truetrue
      - falsefalse
    answer: 3
    explanation: falsefalse is the correct answer to “What will be the output of the following Java code? class newthread implements Runnable { Thread t; newthread() { t1 = new Thread(this,"Thread_1"); t2 = new Thread(this,"Thread_2"); t1.start(); t2.start(); } public void run() { t2.setPriority(Thread.MAX_PRIORITY); System.out.print(t1.equals(t2)); } } class multithreaded_programing { public static void main(String args[]) { new newthread(); } }”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: Which of these method wakes up the first thread that called wait()?
    options:
      - wake()
      - notify()
      - start()
      - notifyAll()
    answer: 1
    explanation: notify() is the correct answer to “Which of these method wakes up the first thread that called wait()”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Which of these keywords are used to implement synchronization? class newthread extends Thread { Thread t; String name; newthread(String threadname) { name = threadname; t = new Thread(this,name); t.start(); } public void run() { } } class multithreaded_programing { public static void main(String args[]) { newthread obj1 = new newthread("one"); newthread obj2 = new newthread("two"); try { obj1.t.wait(); System.out.print(obj1.t.isAlive()); } catch(Exception e) { System.out.print("Main thread interrupted"); } } }
    options:
      - synchronize
      - syn
      - synch
      - synchronized
    answer: 3
    explanation: synchronized is the correct answer to “Which of these keywords are used to implement synchronization? class newthread extends Thread { Thread t; String name; newthread(String threadname) { name = threadname; t = new Thread(this,name); t.start(); } public void run() { } } class multithreaded_programing { public static void main(String args[]) { newthread obj1 = new newthread("one"); newthread obj2 = new newthread("two"); try { obj1.t.wait(); System.out.print(obj1.t.isAlive()); } catch(Exception e) { System.out.print("Main thread interrupted"); } } }”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: Which of these method is used to tell the calling thread to give up a monitor and go to sleep until some other thread enters the same monitor?
    options:
      - wait()
      - notify()
      - notifyAll()
      - sleep()
    answer: 0
    explanation: wait() is the correct answer to “Which of these method is used to tell the calling thread to give up a monitor and go to sleep until some other thread enters the same monitor”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: What is true about time slicing?
    options:
      - Time slicing is OS service that allocates CPU time to available runnable thread
      - Time slicing is the process to divide the available CPU time to available runnable thread
      - Time slicing depends on its implementation in OS
      - Time slicing allocates more resources to thread
    answer: 1
    explanation: Time slicing is the process to divide the available CPU time to available runnable thread is the correct answer to “What is true about time slicing”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: Thread priority in Java is?
    options:
      - Integer
      - Float
      - double
      - long
    answer: 0
    explanation: Integer is the correct answer to “Thread priority in Java is”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: What decides thread priority?
    options:
      - Process
      - Process scheduler
      - Thread
      - Thread scheduler
    answer: 3
    explanation: Thread scheduler is the correct answer to “What decides thread priority”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: Which of these method wakes up all the threads?
    options:
      - wakeAll()
      - notify()
      - start()
      - notifyAll()
    answer: 3
    explanation: notifyAll() is the correct answer to “Which of these method wakes up all the threads”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: Which of the following is a correct constructor for thread?
    options:
      - Thread(Runnable a, String str)
      - Thread(int priority)
      - Thread(Runnable a, int priority)
      - Thread(Runnable a, ThreadGroup t)
    answer: 0
    explanation: Thread(Runnable a, String str) is the correct answer to “Which of the following is a correct constructor for thread”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: What will be the output of the following Java code? class newthread implements Runnable { Thread t; newthread() { t = new Thread(this,"New Thread"); t.start(); } public void run() { t.setPriority(Thread.MAX_PRIORITY); System.out.println(t); } } class multithreaded_programing { public static void main(String args[]) { new newthread(); } }
    options:
      - Thread[New Thread,0,main]
      - Thread[New Thread,1,main]
      - Thread[New Thread,5,main]
      - Thread[New Thread,10,main]
    answer: 3
    explanation: Thread[New Thread,10,main] is the correct answer to “What will be the output of the following Java code? class newthread implements Runnable { Thread t; newthread() { t = new Thread(this,"New Thread"); t.start(); } public void run() { t.setPriority(Thread.MAX_PRIORITY); System.out.println(t); } } class multithreaded_programing { public static void main(String args[]) { new newthread(); } }”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: Which of this method is used to find out that a thread is still running or not?
    options:
      - run()
      - Alive()
      - isAlive()
      - checkRun()
    answer: 2
    explanation: isAlive() is the correct answer to “Which of this method is used to find out that a thread is still running or not”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: Which of these method is used to begin the execution of a thread?
    options:
      - run()
      - start()
      - runThread()
      - startThread()
    answer: 1
    explanation: start() is the correct answer to “Which of these method is used to begin the execution of a thread”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: What requires less resources?
    options:
      - Thread
      - Process
      - Thread and Process
      - Neither Thread nor Process
    answer: 0
    explanation: Thread is the correct answer to “What requires less resources”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: What will be the output of the following Java code? class newthread extends Thread { newthread() { super("My Thread"); start(); } public void run() { System.out.println(this); } } class multithreaded_programing { public static void main(String args[]) { new newthread(); } }
    options:
      - My Thread
      - Thread[My Thread,5,main]
      - Compilation Error
      - Runtime Error
    answer: 1
    explanation: Thread[My Thread,5,main] is the correct answer to “What will be the output of the following Java code? class newthread extends Thread { newthread() { super("My Thread"); start(); } public void run() { System.out.println(this); } } class multithreaded_programing { public static void main(String args[]) { new newthread(); } }”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: Deadlock is a situation when thread is waiting for other thread to release acquired object.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “Deadlock is a situation when thread is waiting for other thread to release acquired object.”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: What will happen if two thread of the same priority are called to be processed simultaneously?
    options:
      - Anyone will be executed first lexographically
      - Both of them will be executed simultaneously
      - None of them will be executed
      - It is dependent on the operating system
    answer: 3
    explanation: It is dependent on the operating system is the correct answer to “What will happen if two thread of the same priority are called to be processed simultaneously”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: What is the name of the thread in output in the following Java program? class multithreaded_programing { public static void main(String args[]) { Thread t = Thread.currentThread(); System.out.println(t.isAlive()); } }
    options:
      - "0"
      - "1"
      - "true"
      - "false"
    answer: 2
    explanation: true is the correct answer to “What is the name of the thread in output in the following Java program? class multithreaded_programing { public static void main(String args[]) { Thread t = Thread.currentThread(); System.out.println(t.isAlive()); } }”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
---


