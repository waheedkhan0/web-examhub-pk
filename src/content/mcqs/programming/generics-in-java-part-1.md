---
title: Generics In Java — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Generics In Java — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: generics-in-java-part-1
topicName: Generics In Java — Part 1
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
    question: Which of the following cannot be Type parameterized?
    options:
      - Overloaded Methods
      - Generic methods
      - Class methods
      - Overriding methods
    answer: 2
    explanation: "Generics in Java are tied to the type of objects, meaning they work at the instance level. Static methods belong to the class itself and are shared across all instances. Since generics are resolved at the object level, type parameters cannot be directly used within static methods. Why the other options are incorrect: Option A: Overloaded Methods Overloaded methods can have different generic type parameters. The compiler can differentiate them based on their method signatures, making generic type parameters valid for overloaded methods. Option B: Generic methods Generic methods explicitly use type parameters, and this is a common and valid usage of generics in Java. Option D: Overriding methods Methods with generic type parameters can be overridden. The overridden method must respect the same type parameter or use a wildcard (?)."
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: What is the main purpose of generics in Java?
    options:
      - To enable type-safe collections and eliminate type casting
      - To increase program execution speed
      - To simplify the syntax of Java code
      - To improve memory management
    answer: 0
    explanation: To enable type-safe collections and eliminate type casting is the correct answer to “What is the main purpose of generics in Java”. This question is standard in competitive examination syllabi for Generics In Java.
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Which symbol is used to denote a generic type parameter in Java?
    options:
      - "`&`"
      - "`@`"
      - "`#`"
      - "``"
    answer: 3
    explanation: "`` is the correct answer to “Which symbol is used to denote a generic type parameter in Java”. This question is standard in competitive examination syllabi for Generics In Java."
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: In a generic class, what does the wildcard ` ` represent?
    options:
      - A wildcard type
      - A specific class
      - An unknown type
      - An exception type
    answer: 2
    explanation: An unknown type is the correct answer to “In a generic class, what does the wildcard ` ` represent”. This question is standard in competitive examination syllabi for Generics In Java.
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: What is the benefit of using generics with collections in Java?
    options:
      - It allows collections to store any type of elements
      - It ensures type safety by allowing only specific types of elements
      - It reduces the size of collections
      - None of These
    answer: 1
    explanation: It ensures type safety by allowing only specific types of elements is the correct answer to “What is the benefit of using generics with collections in Java”. This question is standard in competitive examination syllabi for Generics In Java.
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What does the `E` represent in generic class declarations in Java?
    options:
      - Extends type
      - Enum type
      - Element type
      - Exception type
    answer: 2
    explanation: Element type is the correct answer to “What does the `E` represent in generic class declarations in Java”. This question is standard in competitive examination syllabi for Generics In Java.
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: In Java generics, what is the purpose of the ` ` syntax?
    options:
      - It allows any type to be used as a generic
      - It specifies an enum type
      - It specifies a generic exception type
      - It restricts the generic type to be a subclass of `SomeClass`
    answer: 3
    explanation: It restricts the generic type to be a subclass of `SomeClass` is the correct answer to “In Java generics, what is the purpose of the ` ` syntax”. This question is standard in competitive examination syllabi for Generics In Java.
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What is type erasure in Java generics?
    options:
      - The process of removing generic type information at compile time
      - The process of adding generic type information at runtime
      - The process of converting generics to non-generic code
      - The process of checking type compatibility
    answer: 0
    explanation: The process of removing generic type information at compile time is the correct answer to “What is type erasure in Java generics”. This question is standard in competitive examination syllabi for Generics In Java.
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: Which of the following is a generic class in Java?
    options:
      - "`HashMap`"
      - "`Integer`"
      - "`String`"
      - "`ArrayList`"
    answer: 3
    explanation: "`ArrayList` is the correct answer to “Which of the following is a generic class in Java”. This question is standard in competitive examination syllabi for Generics In Java."
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What is the purpose of the `? super T` wildcard in Java generics?
    options:
      - It restricts the use of the `super` keyword
      - It represents an unknown type
      - It allows you to specify that the type must be a superclass of `T`
      - It allows any type to be used as a generic
    answer: 2
    explanation: It allows you to specify that the type must be a superclass of `T` is the correct answer to “What is the purpose of the `? super T` wildcard in Java generics”. This question is standard in competitive examination syllabi for Generics In Java.
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: In Java generics, what is the purpose of the diamond operator (`<>`)?
    options:
      - It specifies a superclass
      - It simplifies the instantiation of generic classes
      - It indicates a generic exception
      - None of These
    answer: 1
    explanation: It simplifies the instantiation of generic classes is the correct answer to “In Java generics, what is the purpose of the diamond operator (`<>`)”. This question is standard in competitive examination syllabi for Generics In Java.
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: Which keyword is used to define generic methods in Java?
    options:
      - "`class`"
      - "`method`"
      - "``"
      - "`generic`"
    answer: 2
    explanation: "`` is the correct answer to “Which keyword is used to define generic methods in Java”. This question is standard in competitive examination syllabi for Generics In Java."
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What is the purpose of the ` ` wildcard in a method parameter in Java generics?
    options:
      - It restricts the method to accept only primitive types
      - It specifies a return type
      - It represents an unknown type
      - It allows the method to accept arguments of any type
    answer: 3
    explanation: It allows the method to accept arguments of any type is the correct answer to “What is the purpose of the ` ` wildcard in a method parameter in Java generics”. This question is standard in competitive examination syllabi for Generics In Java.
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What is the result of the following Java code? List list = new ArrayList<>(); list.add("Hello");
    options:
      - Compilation error
      - Runtime error
      - Successful addition
      - No output
    answer: 0
    explanation: Compilation error is the correct answer to “What is the result of the following Java code? List list = new ArrayList<>(); list.add("Hello");”. This question is standard in competitive examination syllabi for Generics In Java.
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: In Java, which exception is thrown when there is a type mismatch due to generics?
    options:
      - "`MismatchedException`"
      - "`TypeMismatchException`"
      - "`NullPointerException`"
      - "`ClassCastException`"
    answer: 3
    explanation: "`ClassCastException` is the correct answer to “In Java, which exception is thrown when there is a type mismatch due to generics”. This question is standard in competitive examination syllabi for Generics In Java."
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What is the purpose of the `extends` keyword in Java generics?
    options:
      - It specifies an exception type
      - It indicates the superclass of a class
      - It restricts the generic type to be a subclass or the same as the specified type
      - It has no meaning in generics
    answer: 2
    explanation: It restricts the generic type to be a subclass or the same as the specified type is the correct answer to “What is the purpose of the `extends` keyword in Java generics”. This question is standard in competitive examination syllabi for Generics In Java.
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What does the term "type parameter" mean in Java generics?
    options:
      - A generic exception
      - A placeholder for a data type
      - A specific data type
      - None of These
    answer: 1
    explanation: A placeholder for a data type is the correct answer to “What does the term "type parameter" mean in Java generics”. This question is standard in competitive examination syllabi for Generics In Java.
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: In Java generics, what is the purpose of the `? extends T` wildcard?
    options:
      - It represents an unknown type
      - It allows any type to be used as a generic
      - It restricts the generic type to be a subclass or the same as `T`
      - It specifies a return type
    answer: 2
    explanation: It restricts the generic type to be a subclass or the same as `T` is the correct answer to “In Java generics, what is the purpose of the `? extends T` wildcard”. This question is standard in competitive examination syllabi for Generics In Java.
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: Which of the following is a valid use of generics in Java?
    options:
      - "`String text = new String();`"
      - "`List list = new ArrayList();`"
      - "`HashMap map = new HashMap();`"
      - "`ArrayList list = new ArrayList();`"
    answer: 3
    explanation: "`ArrayList list = new ArrayList();` is the correct answer to “Which of the following is a valid use of generics in Java”. This question is standard in competitive examination syllabi for Generics In Java."
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What is the result of the following Java code? List list = new ArrayList<>(); list.add(new Integer(10));
    options:
      - Compilation error
      - Runtime error
      - Successful addition
      - No output
    answer: 0
    explanation: Compilation error is the correct answer to “What is the result of the following Java code? List list = new ArrayList<>(); list.add(new Integer(10));”. This question is standard in competitive examination syllabi for Generics In Java.
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: In Java generics, what is the purpose of the `? super T` wildcard?
    options:
      - It allows any type to be used as a generic
      - It represents an unknown type
      - It restricts the use of the `super` keyword
      - It allows you to specify that the type must be a superclass of `T`
    answer: 3
    explanation: It allows you to specify that the type must be a superclass of `T` is the correct answer to “In Java generics, what is the purpose of the `? super T` wildcard”. This question is standard in competitive examination syllabi for Generics In Java.
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What is the primary advantage of using generics in Java?
    options:
      - Reduced memory usage
      - Faster execution of code
      - Enhanced type safety and readability of code
      - Compatibility with older Java versions
    answer: 2
    explanation: Enhanced type safety and readability of code is the correct answer to “What is the primary advantage of using generics in Java”. This question is standard in competitive examination syllabi for Generics In Java.
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: Which of the following is NOT a generic type parameter in Java?
    options:
      - "``"
      - None of These
    answer: 1
    explanation: None of These is the correct answer to “Which of the following is NOT a generic type parameter in Java”. This question is standard in competitive examination syllabi for Generics In Java.
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: What is the purpose of the `get(int index)` method in a generic list in Java?
    options:
      - To check if an element exists at the specified index
      - To remove an element at the specified index
      - To retrieve an element at the specified index
      - To add an element at the specified index
    answer: 2
    explanation: To retrieve an element at the specified index is the correct answer to “What is the purpose of the `get(int index)` method in a generic list in Java”. This question is standard in competitive examination syllabi for Generics In Java.
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: In Java generics, what is the purpose of the `Pair ` class?
    options:
      - To define a generic interface
      - To implement a generic exception
      - To represent a generic collection
      - To store a pair of values with different types
    answer: 3
    explanation: To store a pair of values with different types is the correct answer to “In Java generics, what is the purpose of the `Pair ` class”. This question is standard in competitive examination syllabi for Generics In Java.
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: What does the term "type erasure" mean in Java generics?
    options:
      - The removal of generic type information at compile time
      - The addition of generic type information at runtime
      - The process of checking types at runtime
      - The automatic casting of types
    answer: 0
    explanation: The removal of generic type information at compile time is the correct answer to “What does the term "type erasure" mean in Java generics”. This question is standard in competitive examination syllabi for Generics In Java.
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: In Java, which generic class is commonly used for creating key-value pairs?
    options:
      - "`Set`"
      - "`List`"
      - "`Pair`"
      - "`Map`"
    answer: 3
    explanation: "`Map` is the correct answer to “In Java, which generic class is commonly used for creating key-value pairs”. This question is standard in competitive examination syllabi for Generics In Java."
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: What is the result of the following Java code? List list = new ArrayList<>(); list.add(new Object());
    options:
      - Runtime error
      - Successful addition
      - Compilation error
      - No output
    answer: 2
    explanation: Compilation error is the correct answer to “What is the result of the following Java code? List list = new ArrayList<>(); list.add(new Object());”. This question is standard in competitive examination syllabi for Generics In Java.
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: In Java generics, what is the purpose of the `Enum ` interface?
    options:
      - To implement a generic exception
      - To represent an enumeration type
      - To create a generic class
      - None of These
    answer: 1
    explanation: To represent an enumeration type is the correct answer to “In Java generics, what is the purpose of the `Enum ` interface”. This question is standard in competitive examination syllabi for Generics In Java.
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: What does the term "bounded type parameter" mean in Java generics?
    options:
      - A type parameter that specifies a return type
      - A type parameter that uses the `` wildcard
      - A type parameter that has a specific upper or lower bound
      - A type parameter that has no bounds
    answer: 2
    explanation: A type parameter that has a specific upper or lower bound is the correct answer to “What does the term "bounded type parameter" mean in Java generics”. This question is standard in competitive examination syllabi for Generics In Java.
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: In Java, what is the result of the expression `List list = new ArrayList<>();`?
    options:
      - It creates a list of objects
      - Compilation error
      - Runtime error
      - It creates a list of strings
    answer: 3
    explanation: It creates a list of strings is the correct answer to “In Java, what is the result of the expression `List list = new ArrayList<>();`”. This question is standard in competitive examination syllabi for Generics In Java.
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: Which of these instance cannot be created?
    options:
      - Integer instance
      - Generic class instance
      - Generic type instance
      - Collection instances
    answer: 2
    explanation: Generic type instance is the correct answer to “Which of these instance cannot be created”. This question is standard in competitive examination syllabi for Generics In Java.
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: "What will be the output of the following Java program? import java.util.*; class Output { public static double sumOfList(List<? extends Number> list) { double s = 0.0; for (Number n : list) s += n.doubleValue(); return s; } public static void main(String args[]) { List<Double> ld = Arrays.asList(1.2, 2.3, 3.5); System.out.println(sumOfList(ld)); } }"
    options:
      - "5.0"
      - "7.0"
      - "8.0"
      - "6.0"
    answer: 1
    explanation: "7.0 is the correct answer to “What will be the output of the following Java program? import java.util.*; class Output { public static double sumOfList(List<? extends Number> list) { double s = 0.0; for (Number n : list) s += n.doubleValue(); return s; } public static void main(String args[]) { List<Double> ld = Arrays.asList(1.2, 2.3, 3.5); System.out.println(sumOfList(ld)); } }”. This question is standard in competitive examination syllabi for Generics In Java."
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: Which of these data type cannot be type parameterized?
    options:
      - Array
      - List
      - Map
      - Set
    answer: 0
    explanation: Array is the correct answer to “Which of these data type cannot be type parameterized”. This question is standard in competitive examination syllabi for Generics In Java.
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: What are generic methods?
    options:
      - Generic methods are the methods defined in a generic class
      - Generic methods are the methods that extend generic class methods
      - Generic methods are methods that introduce their own type parameters
      - Generic methods are methods that take void parameters
    answer: 2
    explanation: Generic methods are methods that introduce their own type parameters is the correct answer to “What are generic methods”. This question is standard in competitive examination syllabi for Generics In Java.
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: What will be the output of the following Java program? import java.util.*; public class genericstack <E> { Stack <E> stk = new Stack <E>(); public void push(E obj) { stk.push(obj); } public E pop() { E obj = stk.pop(); return obj; } } class Output { public static void main(String args[]) { genericstack <Integer> gs = new genericstack<Integer>(); gs.push(36); System.out.println(gs.pop()); } }
    options:
      - "0"
      - "36"
      - Runtime Error
      - Compilation Error
    answer: 1
    explanation: 36 is the correct answer to “What will be the output of the following Java program? import java.util.*; public class genericstack <E> { Stack <E> stk = new Stack <E>(); public void push(E obj) { stk.push(obj); } public E pop() { E obj = stk.pop(); return obj; } } class Output { public static void main(String args[]) { genericstack <Integer> gs = new genericstack<Integer>(); gs.push(36); System.out.println(gs.pop()); } }”. This question is standard in competitive examination syllabi for Generics In Java.
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: Which of these Exception handlers cannot be type parameterized?
    options:
      - catch
      - throw
      - throws
      - all of the mentioned
    answer: 3
    explanation: all of the mentioned is the correct answer to “Which of these Exception handlers cannot be type parameterized”. This question is standard in competitive examination syllabi for Generics In Java.
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: What will be the output of the following Java code? import java.util.*; public class genericstack <E> { Stack <E> stk = new Stack <E>(); public void push(E obj) { stk.push(obj); } public E pop() { E obj = stk.pop(); return obj; } } class Output { public static void main(String args[]) { genericstack <String> gs = new genericstack<String>(); gs.push("Hello"); System.out.print(gs.pop() + " "); genericstack <Integer> gs = new genericstack<Integer>(); gs.push(36); System.out.println(gs.pop()); } }
    options:
      - Error
      - Hello
      - "36"
      - Hello 36
    answer: 3
    explanation: Hello 36 is the correct answer to “What will be the output of the following Java code? import java.util.*; public class genericstack <E> { Stack <E> stk = new Stack <E>(); public void push(E obj) { stk.push(obj); } public E pop() { E obj = stk.pop(); return obj; } } class Output { public static void main(String args[]) { genericstack <String> gs = new genericstack<String>(); gs.push("Hello"); System.out.print(gs.pop() + " "); genericstack <Integer> gs = new genericstack<Integer>(); gs.push(36); System.out.println(gs.pop()); } }”. This question is standard in competitive examination syllabi for Generics In Java.
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: Which of these keywords is used to upper bound a wildcard?
    options:
      - stop
      - bound
      - extends
      - implements
    answer: 2
    explanation: extends is the correct answer to “Which of these keywords is used to upper bound a wildcard”. This question is standard in competitive examination syllabi for Generics In Java.
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: Which of these is wildcard symbol?
    options:
      - "?"
      - "!"
      - "%"
      - "&"
    answer: 0
    explanation: "? is the correct answer to “Which of these is wildcard symbol”. This question is standard in competitive examination syllabi for Generics In Java."
    keyConcept: Generics In Java
    testedIn:
      - FPSC
      - PPSC
---


