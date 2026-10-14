---
title: Concept Of Object Oriented Programs In Python — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Concept Of Object Oriented Programs In Python — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: concept-of-object-oriented-programs-in-python-part-2
topicName: Concept Of Object Oriented Programs In Python — Part 2
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
    question: "Which of these is a private data field? def Demo: def __init__(self): __a = 1 self.__b = 1 self.__c__ = 1 __d__= 1"
    options:
      - __a
      - __b
      - __c__
      - __d__
    answer: 1
    explanation: "__b is the correct answer to “Which of these is a private data field? def Demo: def __init__(self): __a = 1 self.__b = 1 self.__c__ = 1 __d__= 1”. This question is standard in competitive examination syllabi for Concept Of Object Oriented Programs In Python."
    keyConcept: Concept Of Object Oriented Programs In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: "What will be the output of the following Python code? class A: def __init__(self,x=3): self._x = x class B(A): def __init__(self): super().__init__(5) def display(self): print(self._x) def main(): obj = B() obj.display() main()"
    options:
      - "5"
      - Error, class member x has two values
      - "3"
      - Error, protected class member can't be accessed in a subclass
    answer: 0
    explanation: "5 is the correct answer to “What will be the output of the following Python code? class A: def __init__(self,x=3): self._x = x class B(A): def __init__(self): super().__init__(5) def display(self): print(self._x) def main(): obj = B() obj.display() main()”. This question is standard in competitive examination syllabi for Concept Of Object Oriented Programs In Python."
    keyConcept: Concept Of Object Oriented Programs In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Private members of a class cannot be accessed.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “Private members of a class cannot be accessed.”. This question is standard in competitive examination syllabi for Concept Of Object Oriented Programs In Python.
    keyConcept: Concept Of Object Oriented Programs In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What is the purpose of the @property decorator in object-oriented programming?
    options:
      - It allows you to define a method that can be accessed like an attribute
      - It defines a property
      - It defines a method
      - It defines a constructor
    answer: 0
    explanation: It allows you to define a method that can be accessed like an attribute is the correct answer to “What is the purpose of the @property decorator in object-oriented programming”. This question is standard in competitive examination syllabi for Concept Of Object Oriented Programs In Python.
    keyConcept: Concept Of Object Oriented Programs In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: What is the purpose of using encapsulation in object-oriented programming?
    options:
      - To hide the internal details of an object and provide a controlled way to access and modify its attributes
      - To simplify syntax
      - To create complex objects
      - To promote code reusability
    answer: 0
    explanation: To hide the internal details of an object and provide a controlled way to access and modify its attributes is the correct answer to “What is the purpose of using encapsulation in object-oriented programming”. This question is standard in competitive examination syllabi for Concept Of Object Oriented Programs In Python.
    keyConcept: Concept Of Object Oriented Programs In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: How is polymorphism implemented in object-oriented programming?
    options:
      - By defining methods in a subclass that have the same name but different implementations as those in the parent class
      - By using built-in functions
      - By creating abstract classes
      - By defining class variables
    answer: 0
    explanation: By defining methods in a subclass that have the same name but different implementations as those in the parent class is the correct answer to “How is polymorphism implemented in object-oriented programming”. This question is standard in competitive examination syllabi for Concept Of Object Oriented Programs In Python.
    keyConcept: Concept Of Object Oriented Programs In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What is the primary purpose of a constructor in object-oriented programming?
    options:
      - To initialize the attributes of an object when it is created
      - To define a method
      - To destroy an object
      - To define a class
    answer: 0
    explanation: To initialize the attributes of an object when it is created is the correct answer to “What is the primary purpose of a constructor in object-oriented programming”. This question is standard in competitive examination syllabi for Concept Of Object Oriented Programs In Python.
    keyConcept: Concept Of Object Oriented Programs In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: "What will be the output of the following Python code? class A: def __init__(self, x= 1): self.x = x class der(A): def __init__(self,y = 2): super().__init__() self.y = y def main(): obj = der() print(obj.x, obj.y) main()"
    options:
      - Error, the syntax of the invoking method is wrong
      - The program runs fine but nothing is printed
      - 1 0
      - 1 2
    answer: 3
    explanation: "1 2 is the correct answer to “What will be the output of the following Python code? class A: def __init__(self, x= 1): self.x = x class der(A): def __init__(self,y = 2): super().__init__() self.y = y def main(): obj = der() print(obj.x, obj.y) main()”. This question is standard in competitive examination syllabi for Concept Of Object Oriented Programs In Python."
    keyConcept: Concept Of Object Oriented Programs In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: "What will be the output of the following Python code? class Demo: def __check(self): return \" Demo's check \" def display(self): print(self.check()) class Demo_Derived(Demo): def __check(self): return \" Derived's check \" Demo().display() Demo_Derived().display()"
    options:
      - Demo's check Derived's check
      - Demo's check Demo's check
      - Derived's check Demo's check
      - Syntax error
    answer: 1
    explanation: "Demo's check Demo's check is the correct answer to “What will be the output of the following Python code? class Demo: def __check(self): return \" Demo's check \" def display(self): print(self.check()) class Demo_Derived(Demo): def __check(self): return \" Derived's check \" Demo().display() Demo_Derived().display()”. This question is standard in competitive examination syllabi for Concept Of Object Oriented Programs In Python."
    keyConcept: Concept Of Object Oriented Programs In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: Which of the following is false about protected class members?
    options:
      - They begin with one underscore
      - They can be accessed by subclasses
      - They can be accessed by name mangling method
      - They can be accessed within a class
    answer: 2
    explanation: They can be accessed by name mangling method is the correct answer to “Which of the following is false about protected class members”. This question is standard in competitive examination syllabi for Concept Of Object Oriented Programs In Python.
    keyConcept: Concept Of Object Oriented Programs In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: Which of these is not a fundamental features of OOP?
    options:
      - Encapsulation
      - Inheritance
      - Instantiation
      - Polymorphism
    answer: 2
    explanation: Instantiation is the correct answer to “Which of these is not a fundamental features of OOP”. This question is standard in competitive examination syllabi for Concept Of Object Oriented Programs In Python.
    keyConcept: Concept Of Object Oriented Programs In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: What is the main advantage of using encapsulation in object-oriented programming?
    options:
      - To hide the internal details of an object and provide a controlled way to access and modify its attributes
      - To simplify syntax
      - To create complex objects
      - To promote code reusability
    answer: 0
    explanation: To hide the internal details of an object and provide a controlled way to access and modify its attributes is the correct answer to “What is the main advantage of using encapsulation in object-oriented programming”. This question is standard in competitive examination syllabi for Concept Of Object Oriented Programs In Python.
    keyConcept: Concept Of Object Oriented Programs In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: "What will be the output of the following Python code? class A: def __init__(self, x, y): self.x = x self.y = y def __str__(self): return 1 def __eq__(self, other): return self.x * self.y == other.x * other.y obj1 = A(5, 2) obj2 = A(2, 5) print(obj1 == obj2)"
    options:
      - "False"
      - "1"
      - "True"
      - An exception is thrown
    answer: 2
    explanation: "True is the correct answer to “What will be the output of the following Python code? class A: def __init__(self, x, y): self.x = x self.y = y def __str__(self): return 1 def __eq__(self, other): return self.x * self.y == other.x * other.y obj1 = A(5, 2) obj2 = A(2, 5) print(obj1 == obj2)”. This question is standard in competitive examination syllabi for Concept Of Object Oriented Programs In Python."
    keyConcept: Concept Of Object Oriented Programs In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: All subclasses are a subtype in object-oriented programming.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “All subclasses are a subtype in object-oriented programming.”. This question is standard in competitive examination syllabi for Concept Of Object Oriented Programs In Python.
    keyConcept: Concept Of Object Oriented Programs In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: "What will be the output of the following Python code? class Test: def __init__(self): self.x = 0 class Derived_Test(Test): def __init__(self): Test.__init__(self) self.y = 1 def main(): b = Derived_Test() print(b.x,b.y) main()"
    options:
      - Error because class B inherits A but variable x isn't inherited
      - 0 0
      - 0 1
      - Error, the syntax of the invoking method is wrong
    answer: 2
    explanation: "0 1 is the correct answer to “What will be the output of the following Python code? class Test: def __init__(self): self.x = 0 class Derived_Test(Test): def __init__(self): Test.__init__(self) self.y = 1 def main(): b = Derived_Test() print(b.x,b.y) main()”. This question is standard in competitive examination syllabi for Concept Of Object Oriented Programs In Python."
    keyConcept: Concept Of Object Oriented Programs In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: Which principle of OOP allows a class to provide a specific implementation of a method that is already defined in its parent class?
    options:
      - Overriding
      - Polymorphism
      - Encapsulation
      - Inheritance
    answer: 0
    explanation: Overriding is the correct answer to “Which principle of OOP allows a class to provide a specific implementation of a method that is already defined in its parent class”. This question is standard in competitive examination syllabi for Concept Of Object Oriented Programs In Python.
    keyConcept: Concept Of Object Oriented Programs In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: "What will be the output of the following Python code? class Demo: def __init__(self): self.a = 1 self.__b = 1 def get(self): return self.__b obj = Demo() obj.a=45 print(obj.a)"
    options:
      - The program runs properly and prints 45
      - The program has an error because the value of members of a class can't be changed from outside the class
      - The program runs properly and prints 1
      - The program has an error because the value of members outside a class can only be changed as self.a=45
    answer: 0
    explanation: "The program runs properly and prints 45 is the correct answer to “What will be the output of the following Python code? class Demo: def __init__(self): self.a = 1 self.__b = 1 def get(self): return self.__b obj = Demo() obj.a=45 print(obj.a)”. This question is standard in competitive examination syllabi for Concept Of Object Oriented Programs In Python."
    keyConcept: Concept Of Object Oriented Programs In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: "What will be the output of the following Python code? class fruits: def __init__(self): self.price = 100 self.__bags = 5 def display(self): print(self.__bags) obj=fruits() obj.display()"
    options:
      - The program has an error because display() is trying to print a private class member
      - The program runs fine but nothing is printed
      - The program runs fine and 5 is printed
      - The program has an error because display() can't be accessed
    answer: 2
    explanation: "The program runs fine and 5 is printed is the correct answer to “What will be the output of the following Python code? class fruits: def __init__(self): self.price = 100 self.__bags = 5 def display(self): print(self.__bags) obj=fruits() obj.display()”. This question is standard in competitive examination syllabi for Concept Of Object Oriented Programs In Python."
    keyConcept: Concept Of Object Oriented Programs In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: Method issubclass() checks if a class is a subclass of another class.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “Method issubclass() checks if a class is a subclass of another class.”. This question is standard in competitive examination syllabi for Concept Of Object Oriented Programs In Python.
    keyConcept: Concept Of Object Oriented Programs In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: "What will be the output of the following Python code? class Demo: def __init__(self): self.a = 1 self.__b = 1 def get(self): return self.__b obj = Demo() print(obj.get())"
    options:
      - The program has an error because there isn't any function to return self.a
      - The program has an error because b is private and display(self) is returning a private member
      - The program has an error because b is private and hence can't be printed
      - The program runs fine and 1 is printed
    answer: 3
    explanation: "The program runs fine and 1 is printed is the correct answer to “What will be the output of the following Python code? class Demo: def __init__(self): self.a = 1 self.__b = 1 def get(self): return self.__b obj = Demo() print(obj.get())”. This question is standard in competitive examination syllabi for Concept Of Object Oriented Programs In Python."
    keyConcept: Concept Of Object Oriented Programs In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: "What will be the output of the following Python code? class A: def __init__(self): self.multiply(15) print(self.i) def multiply(self, i): self.i = 4 * i; class B(A): def __init__(self): super().__init__() def multiply(self, i): self.i = 2 * i; obj = B()"
    options:
      - "15"
      - "60"
      - An exception is thrown
      - "30"
    answer: 3
    explanation: "30 is the correct answer to “What will be the output of the following Python code? class A: def __init__(self): self.multiply(15) print(self.i) def multiply(self, i): self.i = 4 * i; class B(A): def __init__(self): super().__init__() def multiply(self, i): self.i = 2 * i; obj = B()”. This question is standard in competitive examination syllabi for Concept Of Object Oriented Programs In Python."
    keyConcept: Concept Of Object Oriented Programs In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: Methods of a class that provide access to private members of the class are called as . . . . . . . . and . . . . . . . .
    options:
      - getters/setters
      - __repr__/__str__
      - user-defined functions/in-built functions
      - __init__/__del__
    answer: 0
    explanation: getters/setters is the correct answer to “Methods of a class that provide access to private members of the class are called as . . . . . . . . and . . . . . . . .”. This question is standard in competitive examination syllabi for Concept Of Object Oriented Programs In Python.
    keyConcept: Concept Of Object Oriented Programs In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: Which principle of OOP is associated with the concept of "IS-A" relationship?
    options:
      - Inheritance
      - Encapsulation
      - Abstraction
      - Polymorphism
    answer: 0
    explanation: Inheritance is the correct answer to “Which principle of OOP is associated with the concept of "IS-A" relationship”. This question is standard in competitive examination syllabi for Concept Of Object Oriented Programs In Python.
    keyConcept: Concept Of Object Oriented Programs In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: "What will be the output of the following Python code? class A: def __init__(self): self.multiply(15) def multiply(self, i): self.i = 4 * i; class B(A): def __init__(self): super().__init__() print(self.i) def multiply(self, i): self.i = 2 * i; obj = B()"
    options:
      - "15"
      - "30"
      - An exception is thrown
      - "60"
    answer: 1
    explanation: "30 is the correct answer to “What will be the output of the following Python code? class A: def __init__(self): self.multiply(15) def multiply(self, i): self.i = 4 * i; class B(A): def __init__(self): super().__init__() print(self.i) def multiply(self, i): self.i = 2 * i; obj = B()”. This question is standard in competitive examination syllabi for Concept Of Object Oriented Programs In Python."
    keyConcept: Concept Of Object Oriented Programs In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: "What will be the output of the following Python code? class A(): def disp(self): print(\"A disp()\") class B(A): pass obj = B() obj.disp()"
    options:
      - Invalid syntax for inheritance
      - Error because when object is created, argument must be passed
      - Nothing is printed
      - A disp()
    answer: 3
    explanation: "A disp() is the correct answer to “What will be the output of the following Python code? class A(): def disp(self): print(\"A disp()\") class B(A): pass obj = B() obj.disp()”. This question is standard in competitive examination syllabi for Concept Of Object Oriented Programs In Python."
    keyConcept: Concept Of Object Oriented Programs In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Suppose B is a subclass of A, to invoke the __init__ method in A from B, what is the line of code you should write?
    options:
      - A.__init__(self)
      - B.__init__(self)
      - A.__init__(B)
      - B.__init__(A)
    answer: 0
    explanation: A.__init__(self) is the correct answer to “Suppose B is a subclass of A, to invoke the __init__ method in A from B, what is the line of code you should write”. This question is standard in competitive examination syllabi for Concept Of Object Oriented Programs In Python.
    keyConcept: Concept Of Object Oriented Programs In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: "What will be the output of the following Python code? class Test: def __init__(self): self.x = 0 class Derived_Test(Test): def __init__(self): self.y = 1 def main(): b = Derived_Test() print(b.x,b.y) main()"
    options:
      - 0 1
      - 0 0
      - Error because class B inherits A but variable x isn't inherited
      - Error because when object is created, argument must be passed like Derived_Test(1)
    answer: 2
    explanation: "Error because class B inherits A but variable x isn't inherited is the correct answer to “What will be the output of the following Python code? class Test: def __init__(self): self.x = 0 class Derived_Test(Test): def __init__(self): self.y = 1 def main(): b = Derived_Test() print(b.x,b.y) main()”. This question is standard in competitive examination syllabi for Concept Of Object Oriented Programs In Python."
    keyConcept: Concept Of Object Oriented Programs In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: "What will be the output of the following Python code? class Demo: def __new__(self): self.__init__(self) print(\"Demo's __new__() invoked\") def __init__(self): print(\"Demo's __init__() invoked\") class Derived_Demo(Demo): def __new__(self): print(\"Derived_Demo's __new__() invoked\") def __init__(self): print(\"Derived_Demo's __init__() invoked\") def main(): obj1 = Derived_Demo() obj2 = Demo() main()"
    options:
      - Derived_Demo’s __init__() invoked Derived_Demo's __new__() invoked Demo's __init__() invoked Demo's __new__() invoked
      - Derived_Demo's __new__() invoked Demo's __init__() invoked Demo's __new__() invoked
      - Derived_Demo's __new__() invoked Demo's __new__() invoked
      - Derived_Demo’s __init__() invoked Demo's __init__() invoked
    answer: 1
    explanation: "Derived_Demo's __new__() invoked Demo's __init__() invoked Demo's __new__() invoked is the correct answer to “What will be the output of the following Python code? class Demo: def __new__(self): self.__init__(self) print(\"Demo's __new__() invoked\") def __init__(self): print(\"Demo's __init__() invoked\") class Derived_Demo(Demo): def __new__(self): print(\"Derived_Demo's __new__() invoked\") def __init__(self): print(\"Derived_Demo's __init__() invoked\") def main(): obj1 = Derived_Demo() obj2 = Demo() main()”. This question is standard in competitive examination syllabi for Concept Of Object Oriented Programs In Python."
    keyConcept: Concept Of Object Oriented Programs In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: When defining a subclass in Python that is meant to serve as a subtype, the subtype Python keyword is used.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “When defining a subclass in Python that is meant to serve as a subtype, the subtype Python keyword is used.”. This question is standard in competitive examination syllabi for Concept Of Object Oriented Programs In Python.
    keyConcept: Concept Of Object Oriented Programs In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: What is the main advantage of using polymorphism in object-oriented programming?
    options:
      - It allows objects of different classes to be treated uniformly
      - It simplifies syntax
      - It reduces code size
      - It makes code run faster
    answer: 0
    explanation: It allows objects of different classes to be treated uniformly is the correct answer to “What is the main advantage of using polymorphism in object-oriented programming”. This question is standard in competitive examination syllabi for Concept Of Object Oriented Programs In Python.
    keyConcept: Concept Of Object Oriented Programs In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: What is the benefit of using polymorphism in object-oriented programming?
    options:
      - It allows objects of different classes to be treated uniformly
      - It makes code run faster
      - It reduces code size
      - It simplifies syntax
    answer: 0
    explanation: It allows objects of different classes to be treated uniformly is the correct answer to “What is the benefit of using polymorphism in object-oriented programming”. This question is standard in competitive examination syllabi for Concept Of Object Oriented Programs In Python.
    keyConcept: Concept Of Object Oriented Programs In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: "What will be the output of the following Python code? class A: def one(self): return self.two() def two(self): return 'A' class B(A): def two(self): return 'B' obj2=B() print(obj2.two())"
    options:
      - A
      - An exception is thrown
      - A B
      - B
    answer: 3
    explanation: "B is the correct answer to “What will be the output of the following Python code? class A: def one(self): return self.two() def two(self): return 'A' class B(A): def two(self): return 'B' obj2=B() print(obj2.two())”. This question is standard in competitive examination syllabi for Concept Of Object Oriented Programs In Python."
    keyConcept: Concept Of Object Oriented Programs In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: "What will be the output of the following Python code? class student: def __init__(self): self.marks = 97 self.__cgpa = 8.7 def display(self): print(self.marks) obj=student() print(obj._student__cgpa)"
    options:
      - The program runs fine and 8.7 is printed
      - Error because private class members can't be accessed
      - Error because the proper syntax for name mangling hasn't been implemented
      - The program runs fine but nothing is printed
    answer: 0
    explanation: "The program runs fine and 8.7 is printed is the correct answer to “What will be the output of the following Python code? class student: def __init__(self): self.marks = 97 self.__cgpa = 8.7 def display(self): print(self.marks) obj=student() print(obj._student__cgpa)”. This question is standard in competitive examination syllabi for Concept Of Object Oriented Programs In Python."
    keyConcept: Concept Of Object Oriented Programs In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: "What will be the output of the following Python code? class A: def test1(self): print(\" test of A called \") class B(A): def test(self): print(\" test of B called \") class C(A): def test(self): print(\" test of C called \") class D(B,C): def test2(self): print(\" test of D called \") obj=D() obj.test()"
    options:
      - test of B called test of C called
      - test of C called test of B called
      - test of B called
      - Error, both the classes from which D derives has same method test()
    answer: 2
    explanation: "test of B called is the correct answer to “What will be the output of the following Python code? class A: def test1(self): print(\" test of A called \") class B(A): def test(self): print(\" test of B called \") class C(A): def test(self): print(\" test of C called \") class D(B,C): def test2(self): print(\" test of D called \") obj=D() obj.test()”. This question is standard in competitive examination syllabi for Concept Of Object Oriented Programs In Python."
    keyConcept: Concept Of Object Oriented Programs In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: "What will be the output of the following Python code? class A: def __init__(self): self.__i = 1 self.j = 5 def display(self): print(self.__i, self.j) class B(A): def __init__(self): super().__init__() self.__i = 2 self.j = 7 c = B() c.display()"
    options:
      - 2 7
      - 1 5
      - 1 7
      - 2 5
    answer: 2
    explanation: "1 7 is the correct answer to “What will be the output of the following Python code? class A: def __init__(self): self.__i = 1 self.j = 5 def display(self): print(self.__i, self.j) class B(A): def __init__(self): super().__init__() self.__i = 2 self.j = 7 c = B() c.display()”. This question is standard in competitive examination syllabi for Concept Of Object Oriented Programs In Python."
    keyConcept: Concept Of Object Oriented Programs In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: "What will be the output of the following Python code? class A: def __repr__(self): return \"1\" class B(A): def __repr__(self): return \"2\" class C(B): def __repr__(self): return \"3\" o1 = A() o2 = B() o3 = C() print(obj1, obj2, obj3)"
    options:
      - 1 1 1
      - 1 2 3
      - "'1' '1' '1'"
      - An exception is thrown
    answer: 1
    explanation: "1 2 3 is the correct answer to “What will be the output of the following Python code? class A: def __repr__(self): return \"1\" class B(A): def __repr__(self): return \"2\" class C(B): def __repr__(self): return \"3\" o1 = A() o2 = B() o3 = C() print(obj1, obj2, obj3)”. This question is standard in competitive examination syllabi for Concept Of Object Oriented Programs In Python."
    keyConcept: Concept Of Object Oriented Programs In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: Overriding means changing behaviour of methods of derived class methods in the base class.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “Overriding means changing behaviour of methods of derived class methods in the base class.”. This question is standard in competitive examination syllabi for Concept Of Object Oriented Programs In Python.
    keyConcept: Concept Of Object Oriented Programs In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: How is the concept of abstraction achieved in object-oriented programming?
    options:
      - By exposing essential features and hiding complex implementation details
      - By making methods private
      - By using complex objects
      - By using only integers
    answer: 0
    explanation: By exposing essential features and hiding complex implementation details is the correct answer to “How is the concept of abstraction achieved in object-oriented programming”. This question is standard in competitive examination syllabi for Concept Of Object Oriented Programs In Python.
    keyConcept: Concept Of Object Oriented Programs In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: "What type of inheritance is illustrated in the following Python code? class A(): pass class B(A): pass class C(B): pass"
    options:
      - Multi-level inheritance
      - Multiple inheritance
      - Hierarchical inheritance
      - Single-level inheritance
    answer: 0
    explanation: "Multi-level inheritance is the correct answer to “What type of inheritance is illustrated in the following Python code? class A(): pass class B(A): pass class C(B): pass”. This question is standard in competitive examination syllabi for Concept Of Object Oriented Programs In Python."
    keyConcept: Concept Of Object Oriented Programs In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: "What will be the output of the following Python code? class Demo: def __init__(self): self.a = 1 self.__b = 1 def display(self): return self.__b obj = Demo() print(obj.__b)"
    options:
      - The program has an error because there isn't any function to return self.a
      - The program has an error because b is private and display(self) is returning a private member
      - The program has an error because b is private and hence can't be printed
      - The program runs fine and 1 is printed
    answer: 2
    explanation: "The program has an error because b is private and hence can't be printed is the correct answer to “What will be the output of the following Python code? class Demo: def __init__(self): self.a = 1 self.__b = 1 def display(self): return self.__b obj = Demo() print(obj.__b)”. This question is standard in competitive examination syllabi for Concept Of Object Oriented Programs In Python."
    keyConcept: Concept Of Object Oriented Programs In Python
    testedIn:
      - FPSC
      - PPSC
---


