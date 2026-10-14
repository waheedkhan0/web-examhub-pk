---
title: Threads — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Threads — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: threads-part-1
topicName: Threads — Part 1
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
    question: Which of the following constructor of class Thread is valid one?
    options:
      - Thread(Runnable threadOb, int priority)
      - Thread(int priority)
      - Thread(Runnable threadOb, String threadName)
      - Thread(String threadName, int priority)
      - None of these
    answer: 2
    explanation: "A. Thread(Runnable threadOb, int priority) This constructor is invalid because the Thread class does not have a constructor that takes a Runnable object and an int priority as arguments. B. Thread(int priority) This constructor is invalid because the Thread class does not have a constructor that takes only an int priority as an argument. C. Thread(Runnable threadOb, String threadName) This constructor is valid. It creates a new thread with the provided Runnable object and assigns it the specified name. D. Thread(String threadName, int priority) This constructor is invalid because the Thread class does not have a constructor that takes both a String thread name and an int priority as arguments. E. None of these This option is incorrect because option C, \"Thread(Runnable threadOb, String threadName),\" is a valid constructor for the Thread class. Therefore, the correct answer is: C. Thread(Runnable threadOb, String threadName)"
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: "Analyze the following code: public class Test implements Runnable{ public static void main(String[] args){ Test t = new Test(); t.start(); } public void run() { } }"
    options:
      - The program does not compile because the start() method is not defined in the Test class.
      - The program compiles, but it does not run because the start() method is not defined.
      - The program compiles, but it does not run because the run() method is not implemented.
      - The program compiles and runs fine.
    answer: 0
    explanation: "Code Analysis: 1. Implementing Runnable: The Test class implements the Runnable interface, which requires the implementation of the run() method. 2. Creating an Instance: In the main method, an instance of Test is created (Test t = new Test();). 3. Calling start() Method: The code then calls t.start();. However, start() is a method of the Thread class, not the Runnable interface. 4. Compilation Error: Since Test implements Runnable and not Thread, it does not inherit the start() method from Thread. Therefore, calling start() on an instance of Test causes a compilation error because the start() method is not defined in the Test class. Therefore, the correct option is A: The program does not compile because the start() method is not defined in the Test class ."
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What will happen when you attempt to compile and run the following code? public class Test extends Thread{ public static void main(String argv[]){ Test t = new Test(); t.run(); t.start(); } public void run(){ System.out.println("run-test"); } }
    options:
      - run-test run-test
      - run-test
      - Compilation fails due to an error on line 4
      - Compilation fails due to an error on line 7
      - None of these
    answer: 0
    explanation: t.run() Legal, but does not start a new thread , it is like a method call of a class Test BUT t.start() creates a thread and call run() method.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What will happen after compiling and running following code? class A implements Runnable{ public void run(){ System.out.println("run-a"); } } public class Test{ public static void main(String... args){ A a = new A(); Thread t = new Thread(a); t.start(); t.start(); } }
    options:
      - run-a
      - run-a run-a
      - Compilation fails with an error at line 6
      - Compilation succeed but Runtime Exception
      - None of these
    answer: 3
    explanation: Once a thread has been started, it can never be started again. 2nd time t.start() throws java.lang.IllegalThreadStateException.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: "Predict the output: class A implements Runnable{ public void run(){ try{ for(int i=0;i<4;i++){ Thread.sleep(100); System.out.println(Thread.currentThread().getName()); } }catch(InterruptedException e){ } } } public class Test{ public static void main(String argv[]) throws Exception{ A a = new A(); Thread t = new Thread(a, \"A\"); Thread t1 = new Thread(a, \"B\"); t.start(); t.join(); t1.start(); } }"
    options:
      - A A A A B B B B
      - A B A B A B A B
      - Output order is not guaranteed
      - Compilation succeed but Runtime Exception
      - None of these
    answer: 0
    explanation: t.join(); means Threat t must finish before Thread t1 starts.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What will be the output? class A extends Thread{ public void run(){ for(int i=0; i<2; i++){ System.out.println(i); } } } public class Test{ public static void main(String argv[]){ Test t = new Test(); t.check(new A(){}); } public void check(A a){ a.start(); } }
    options:
      - 0 0
      - Compilation error, class A has no start method
      - 0 1
      - Compilation succeed but runtime exception
      - None of these
    answer: 2
    explanation: Class A extends Thread means the anonymous instance that is passed to check() method has a start method which then calls the run method.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What will happen when you attempt to compile and run the following code? class A implements Runnable{ public void run(){ System.out.println("run-A"); } } public class Test{ public static void main(String argv[]){ A a = new A(); Thread t = new Thread(a); System.out.println(t.isAlive()); t.start(); System.out.println(t.isAlive()); } }
    options:
      - false run-A true
      - false run-A false
      - true run-A true
      - Compilation fails due to an error on line 7
      - None of these
    answer: 0
    explanation: Once the start() method is called, the thread is considered to be alive.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What notifyAll() method do?
    options:
      - Wakes up one threads that are waiting on this object's monitor
      - Wakes up all threads that are not waiting on this object's monitor
      - Wakes up all threads that are waiting on this object's monitor
      - None of the above
    answer: 2
    explanation: "notifyAll() : Wakes up all threads that are waiting on this object's monitor.A thread waits on an object's monitor by calling one of the wait methods."
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What is the output for the below code? class A implements Runnable{ public void run(){ System.out.println(Thread.currentThread().getName()); } } public class Test{ public static void main(String... args){ A a = new A(); Thread t = new Thread(a); t.setName("good"); t.start(); } }
    options:
      - good
      - "null"
      - Compilation fails with an error at line 5
      - Compilation succeed but Runtime Exception
      - None of these
    answer: 0
    explanation: Thread.currentThread().getName() return name of the current thread.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: "Predict the output: public class Test extends Thread{ private int i; public void run(){ i++; } public static void main(String[] args){ Test a = new Test(); a.run(); System.out.print(a.i); a.start(); System.out.print(a.i); } }"
    options:
      - Run time error
      - Compiler error
      - Prints
      - IllegalThreadStateException is thrown
    answer: 2
    explanation: Here, firstly the run() method of the object referred by a is directly invoked. When the run() method of a thread is invoked instead of the start() method, it is executed by the same thread as a conventional method. So it increments i to 1, now the output is 1. After this, the invocation of the start() method schedules a new thread of execution. Now it is impossible to predict whether the new thread will run first or the second print statement will be executed by the main thread first. So the result of the second print statement can be 1 or 2 depending on the scheduling of the 2 threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: Which of this method can be used to make the main thread to be executed last among all the threads?
    options:
      - stop()
      - sleep()
      - join()
      - call()
    answer: 2
    explanation: The join() method in Java is used to pause the execution of the current thread until the thread on which join() is called has finished executing. To ensure that the main thread executes last , we can call the join() method on all other threads in the main thread. This causes the main thread to wait for the completion of other threads before it proceeds. sleep() is used to pause a thread for a specific time, not to coordinate the order of thread completion. stop() is deprecated and unsafe. call() is not a valid method for controlling thread execution in this context.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: Which of the following stops execution of a thread?
    options:
      - Calling SetPriority() method on a Thread object
      - Calling notify() method on an object
      - Calling wait() method on an object
      - Calling read() method on an InputStream object
    answer: 1
    explanation: "Understanding Thread Execution Control in Java Let's break down why one of these options stops a thread's execution. Option A: Calling SetPriority() method on a Thread object setPriority() is used to influence the scheduler to give a thread more or less CPU time. It doesn't stop the thread; it just suggests a priority. Option B: Calling notify() method on an object notify() is used for thread communication . It wakes up a single thread that's waiting on the object's monitor. It doesn't stop the currently running thread; it potentially allows another thread to run. Option C: Calling wait() method on an object wait() causes the current thread to pause its execution and enter a waiting state . The thread releases the lock on the object and waits until another thread calls notify() or notifyAll() on the same object. This is the correct answer. Option D: Calling read() method on an InputStream object read() is used to read data from an input stream . If no data is available, the thread might block temporarily until data becomes available. While it *can* appear to pause the thread, it's waiting for I/O, not explicitly stopping execution in the same way as wait() . The thread remains alive. In Summary: The wait() method directly suspends a thread's execution and places it in a waiting state, making Option C the correct answer."
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: Which of the following will ensure the thread will be in running state?
    options:
      - yield()
      - notify()
      - wait()
      - Thread.killThread()
      - None of these
    answer: 4
    explanation: "Let's understand this question about threads in Java! The question asks us which of the given options will guarantee that a thread is in the running state . Option A: yield() yield() suggests to the Java Virtual Machine (JVM) that the current thread is willing to relinquish its current use of a processor. The JVM is free to ignore this suggestion. It doesn't *guarantee* the thread will stay running or give up the processor; it just offers a hint. Option B: notify() notify() is used for inter-thread communication. It wakes up a single thread that is waiting on the object's monitor. It doesn't directly put a thread into the running state; it makes a waiting thread *eligible* to run, but it might have to wait its turn. Option C: wait() wait() causes the current thread to *relinquish* the lock and enter the waiting state. The thread only becomes *eligible* to run again when another thread calls notify() or notifyAll() on the same object. So, wait() definitely does *not* ensure the thread is in the running state; it does the opposite! Option D: Thread.killThread() There is no standard Thread.killThread() method in Java for directly killing a thread in a safe way. This method is not a part of Java Thread API. Option E: None of these Since none of the options guarantees that a thread is in a running state by their use, hence Option E is correct Therefore, the answer is Option E: None of these."
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What will be the output of the following Java program? class newthread extends Thread { Thread t; newthread() { t1 = new Thread(this,"Thread_1"); t2 = new Thread(this,"Thread_2"); t1.start(); t2.start(); } public void run() { t2.setPriority(Thread.MAX_PRIORITY); System.out.print(t1.equals(t2)); } } class multithreaded_programing { public static void main(String args[]) { new newthread(); } }
    options:
      - "true"
      - "false"
      - truetrue
      - falsefalse
    answer: 3
    explanation: "In the given program, the class newthread extends Thread , and within its constructor, it creates two thread objects: t1 and t2 . Both threads are started with t1.start() and t2.start() , and they both execute the same run() method of the class instance because this is passed as the target. Inside the run() method, the priority of t2 is set to Thread.MAX_PRIORITY . However, this has no effect on the logic or output because thread priority only suggests execution preference to the scheduler. The key line is System.out.print(t1.equals(t2)); which checks if t1 and t2 are equal. Since t1 and t2 are two separate thread instances, the equals() method returns false . Because both threads run the same run() method, the output false is printed twice — once by each thread. Hence, the output is falsefalse ."
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What is a thread in Java?
    options:
      - A lightweight process that runs independently within a program
      - A data structure to store variables
      - A type of loop
      - A synchronization mechanism
    answer: 0
    explanation: A lightweight process that runs independently within a program is the correct answer to “What is a thread in Java”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: Which interface is used to create a thread in Java?
    options:
      - Processor
      - Executor
      - Threadable
      - Runnable
    answer: 3
    explanation: Runnable is the correct answer to “Which interface is used to create a thread in Java”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What is the main advantage of using multithreading in Java programs?
    options:
      - Reduced memory usage
      - Simplicity of code
      - Improved program performance by utilizing multiple CPUs or CPU cores
      - Elimination of exceptions
    answer: 2
    explanation: Improved program performance by utilizing multiple CPUs or CPU cores is the correct answer to “What is the main advantage of using multithreading in Java programs”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: How can you create a new thread in Java by implementing the Runnable interface?
    options:
      - Create an object of the Thread class
      - Create a class that implements the Runnable interface and override the run() method
      - Use the start() method of the main thread
      - None of These
    answer: 1
    explanation: Create a class that implements the Runnable interface and override the run() method is the correct answer to “How can you create a new thread in Java by implementing the Runnable interface”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: What is the purpose of the start() method in Java threads?
    options:
      - It resumes the execution of a thread
      - It suspends the execution of a thread
      - It starts the execution of a new thread
      - It stops the execution of a thread
    answer: 2
    explanation: It starts the execution of a new thread is the correct answer to “What is the purpose of the start() method in Java threads”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: In Java, can a thread be restarted after it has completed execution?
    options:
      - Yes, a thread can be restarted multiple times
      - Only if the thread is marked as "final"
      - Only if the thread is marked as "static"
      - No, a thread cannot be restarted once it has completed
    answer: 3
    explanation: No, a thread cannot be restarted once it has completed is the correct answer to “In Java, can a thread be restarted after it has completed execution”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: What is the result of calling the run() method directly instead of start() in Java threads?
    options:
      - The run() method is executed in the current thread, not as a separate thread
      - It starts a new thread and executes the run() method
      - It stops the thread immediately
      - It suspends the thread
    answer: 0
    explanation: The run() method is executed in the current thread, not as a separate thread is the correct answer to “What is the result of calling the run() method directly instead of start() in Java threads”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: How can you achieve synchronization between threads in Java?
    options:
      - By using the interrupt() method
      - By using the wait() and notify() methods
      - By using multiple catch blocks
      - By using the synchronized keyword or synchronized blocks
    answer: 3
    explanation: By using the synchronized keyword or synchronized blocks is the correct answer to “How can you achieve synchronization between threads in Java”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: What is a race condition in multithreaded Java programs?
    options:
      - A situation where threads synchronize perfectly
      - A situation where threads never finish executing
      - A situation where multiple threads access shared data simultaneously, leading to unpredictable results
      - A situation where threads throw exceptions
    answer: 2
    explanation: A situation where multiple threads access shared data simultaneously, leading to unpredictable results is the correct answer to “What is a race condition in multithreaded Java programs”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: In Java, what is the purpose of the sleep() method in threads?
    options:
      - It terminates all threads in the program
      - It pauses the execution of the current thread for a specified duration
      - It resumes the execution of a thread
      - None of These
    answer: 1
    explanation: It pauses the execution of the current thread for a specified duration is the correct answer to “In Java, what is the purpose of the sleep() method in threads”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: What is the purpose of the join() method in Java threads?
    options:
      - It synchronizes threads
      - It resumes a paused thread
      - It waits for a thread to complete its execution before moving on
      - It starts a new thread
    answer: 2
    explanation: It waits for a thread to complete its execution before moving on is the correct answer to “What is the purpose of the join() method in Java threads”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: In Java, what is the difference between a thread's priority and its thread group's maximum priority?
    options:
      - A thread's priority determines its relative importance, while the thread group's maximum priority sets an upper limit on thread priorities
      - A thread's priority is always higher than the thread group's maximum priority
      - A thread's priority is the same as the thread group's maximum priority
      - A thread's priority is unrelated to the thread group's maximum priority
    answer: 0
    explanation: A thread's priority determines its relative importance, while the thread group's maximum priority sets an upper limit on thread priorities is the correct answer to “In Java, what is the difference between a thread's priority and its thread group's maximum priority”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: How can you check if a thread is still running in Java?
    options:
      - By using the runStatus() method
      - By using the isThreadAlive() method
      - By using the isRunning() method
      - By using the isAlive() method
    answer: 3
    explanation: By using the isAlive() method is the correct answer to “How can you check if a thread is still running in Java”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: In Java, can you force a thread to stop its execution using the stop() method?
    options:
      - No, the stop() method is deprecated and cannot be used
      - Only if the thread is marked as "final"
      - Yes, but it is discouraged because it can leave the program in an inconsistent state
      - Only if the thread is marked as "static"
    answer: 2
    explanation: Yes, but it is discouraged because it can leave the program in an inconsistent state is the correct answer to “In Java, can you force a thread to stop its execution using the stop() method”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: What is the purpose of the yield() method in Java threads?
    options:
      - It suspends the current thread indefinitely
      - It suggests that the current thread should yield to other threads with the same priority
      - It sets the priority of the current thread
      - None of These
    answer: 1
    explanation: It suggests that the current thread should yield to other threads with the same priority is the correct answer to “What is the purpose of the yield() method in Java threads”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: In Java, what is the purpose of the interrupt() method in threads?
    options:
      - It resumes the thread
      - It pauses the thread
      - It interrupts the normal execution of a thread, causing it to throw an InterruptedException
      - It stops the thread permanently
    answer: 2
    explanation: It interrupts the normal execution of a thread, causing it to throw an InterruptedException is the correct answer to “In Java, what is the purpose of the interrupt() method in threads”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: Which keyword is used to declare a synchronized method in Java?
    options:
      - sync
      - lock
      - thread-safe
      - synchronized
    answer: 3
    explanation: synchronized is the correct answer to “Which keyword is used to declare a synchronized method in Java”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: In Java, what is a daemon thread?
    options:
      - A thread that runs in the background and does not prevent the program from exiting
      - A thread that is always in a waiting state
      - A thread that cannot be interrupted
      - A thread that runs on a separate CPU
    answer: 0
    explanation: A thread that runs in the background and does not prevent the program from exiting is the correct answer to “In Java, what is a daemon thread”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: How can you prevent multiple threads from accessing a critical section of code simultaneously in Java?
    options:
      - By using the wait() method
      - By using the start() method multiple times
      - By creating more threads to access the critical section
      - By using synchronized blocks or methods
    answer: 3
    explanation: By using synchronized blocks or methods is the correct answer to “How can you prevent multiple threads from accessing a critical section of code simultaneously in Java”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: What is the purpose of the isDaemon() method in Java threads?
    options:
      - It checks if a thread is currently running
      - It checks if a thread is sleeping
      - It checks if a thread is a daemon thread
      - It checks if a thread is waiting
    answer: 2
    explanation: It checks if a thread is a daemon thread is the correct answer to “What is the purpose of the isDaemon() method in Java threads”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: In Java, what happens when a thread encounters an uncaught exception and terminates abruptly?
    options:
      - The thread is paused indefinitely
      - The JVM prints the exception trace and terminates the thread
      - The thread resumes execution without any impact
      - None of These
    answer: 1
    explanation: The JVM prints the exception trace and terminates the thread is the correct answer to “In Java, what happens when a thread encounters an uncaught exception and terminates abruptly”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: What is the result of calling the setDaemon(true) method on a running thread in Java?
    options:
      - It resumes the thread
      - It pauses the thread
      - It sets the thread as a daemon thread
      - It stops the thread immediately
    answer: 2
    explanation: It sets the thread as a daemon thread is the correct answer to “What is the result of calling the setDaemon(true) method on a running thread in Java”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: In Java, what is the purpose of the isInterrupted() method in threads?
    options:
      - It checks if a thread is a daemon thread
      - It checks if a thread is waiting
      - It checks if a thread is running
      - It checks if a thread has been interrupted
    answer: 3
    explanation: It checks if a thread has been interrupted is the correct answer to “In Java, what is the purpose of the isInterrupted() method in threads”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: How can you handle exceptions in Java threads?
    options:
      - By using try-catch blocks within the run() method
      - By using the stop() method
      - By ignoring exceptions in threads
      - By using the yield() method
    answer: 0
    explanation: By using try-catch blocks within the run() method is the correct answer to “How can you handle exceptions in Java threads”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: In Java, which class is used to create and manage thread groups?
    options:
      - GroupManager
      - ThreadController
      - ThreadManager
      - ThreadGroup
    answer: 3
    explanation: ThreadGroup is the correct answer to “In Java, which class is used to create and manage thread groups”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: What is the purpose of the setPriority() method in Java threads?
    options:
      - It starts a new thread
      - It resumes a paused thread
      - It sets the priority of a thread
      - It synchronizes threads
    answer: 2
    explanation: It sets the priority of a thread is the correct answer to “What is the purpose of the setPriority() method in Java threads”. This question is standard in competitive examination syllabi for Threads.
    keyConcept: Threads
    testedIn:
      - FPSC
      - PPSC
---


