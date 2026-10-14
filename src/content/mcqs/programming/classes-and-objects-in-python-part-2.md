---
title: Classes And Objects In Python — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Classes And Objects In Python — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: classes-and-objects-in-python-part-2
topicName: Classes And Objects In Python — Part 2
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
    question: "What will be the output of the following Python code? def add(c,k): c.test=c.test+1 k=k+1 class A: def __init__(self): self.test = 0 def main(): Count=A() k=0 for i in range(0,25): add(Count,k) print(\"Count.test=\", Count.test) print(\"k =\", k) main()"
    options:
      - Exception is thrown
      - Count.test=25 k=25
      - Count.test=25 k=0
      - Count.test=0 k=0
    answer: 2
    explanation: "Count.test=25 k=0 is the correct answer to “What will be the output of the following Python code? def add(c,k): c.test=c.test+1 k=k+1 class A: def __init__(self): self.test = 0 def main(): Count=A() k=0 for i in range(0,25): add(Count,k) print(\"Count.test=\", Count.test) print(\"k =\", k) main()”. This question is standard in competitive examination syllabi for Classes And Objects In Python."
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: "What will be the output of the following Python code? class test: def __init__(self,a): self.a=a def display(self): print(self.a) obj=test() obj.display()"
    options:
      - Runs normally, doesn't display anything
      - Displays 0, which is the automatic default value
      - Error as one argument is required while creating the object
      - Error as display function requires additional argument
    answer: 2
    explanation: "Error as one argument is required while creating the object is the correct answer to “What will be the output of the following Python code? class test: def __init__(self,a): self.a=a def display(self): print(self.a) obj=test() obj.display()”. This question is standard in competitive examination syllabi for Classes And Objects In Python."
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: "What will be the output of the following Python code? class Demo: def __init__(self): pass def test(self): print(__name__) obj = Demo() obj.test()"
    options:
      - Exception is thrown
      - __main__
      - Demo
      - test
    answer: 1
    explanation: "__main__ is the correct answer to “What will be the output of the following Python code? class Demo: def __init__(self): pass def test(self): print(__name__) obj = Demo() obj.test()”. This question is standard in competitive examination syllabi for Classes And Objects In Python."
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: Special methods need to be explicitly called during object creation.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “Special methods need to be explicitly called during object creation.”. This question is standard in competitive examination syllabi for Classes And Objects In Python.
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: Which of the following is not a class method?
    options:
      - Non-static
      - Static
      - Bounded
      - Unbounded
    answer: 0
    explanation: Non-static is the correct answer to “Which of the following is not a class method”. This question is standard in competitive examination syllabi for Classes And Objects In Python.
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What is the purpose of the super() function in Python classes?
    options:
      - It is used to call a method from the parent class
      - It is used to create an object
      - It is used to delete an object
      - It is used to inherit a class
    answer: 0
    explanation: It is used to call a method from the parent class is the correct answer to “What is the purpose of the super() function in Python classes”. This question is standard in competitive examination syllabi for Classes And Objects In Python.
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: "What will be the output of the following Python code? class change: def __init__(self, x, y, z): self.a = x + y + z x = change(1,2,3) y = getattr(x, 'a') setattr(x, 'a', y+1) print(x.a)"
    options:
      - "6"
      - "7"
      - Error
      - "0"
    answer: 1
    explanation: "7 is the correct answer to “What will be the output of the following Python code? class change: def __init__(self, x, y, z): self.a = x + y + z x = change(1,2,3) y = getattr(x, 'a') setattr(x, 'a', y+1) print(x.a)”. This question is standard in competitive examination syllabi for Classes And Objects In Python."
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: Which of the following Python code creates an empty class?
    options:
      - "class A: return"
      - "class A: pass"
      - "class A:"
      - It is not possible to create an empty class
    answer: 1
    explanation: "class A: pass is the correct answer to “Which of the following Python code creates an empty class”. This question is standard in competitive examination syllabi for Classes And Objects In Python."
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: "What will be the output of the following Python code? class test: def __init__(self): self.variable = 'Old' self.Change(self.variable) def Change(self, var): var = 'New' obj=test() print(obj.variable)"
    options:
      - Error because function change can't be called in the __init__ function
      - "'New' is printed"
      - "'Old' is printed"
      - Nothing is printed
    answer: 2
    explanation: "'Old' is printed is the correct answer to “What will be the output of the following Python code? class test: def __init__(self): self.variable = 'Old' self.Change(self.variable) def Change(self, var): var = 'New' obj=test() print(obj.variable)”. This question is standard in competitive examination syllabi for Classes And Objects In Python."
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: "Is the following Python code correct? >>> class A: def __init__(self,b): self.b=b def display(self): print(self.b) >>> obj=A(\"Hello\") >>> del obj"
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "True is the correct answer to “Is the following Python code correct? >>> class A: def __init__(self,b): self.b=b def display(self): print(self.b) >>> obj=A(\"Hello\") >>> del obj”. This question is standard in competitive examination syllabi for Classes And Objects In Python."
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: Let A and B be objects of class Foo. Which functions are called when print(A + B) is executed?
    options:
      - __add__(), __str__()
      - __str__(), __add__()
      - __sum__(), __str__()
      - __str__(), __sum__()
    answer: 0
    explanation: __add__(), __str__() is the correct answer to “Let A and B be objects of class Foo. Which functions are called when print(A + B) is executed”. This question is standard in competitive examination syllabi for Classes And Objects In Python.
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: "What will be the output of the following Python code? class fruits: def __init__(self, price): self.price = price obj=fruits(50) obj.quantity=10 obj.bags=2 print(obj.quantity+len(obj.__dict__))"
    options:
      - "12"
      - "52"
      - "13"
      - "60"
    answer: 2
    explanation: "13 is the correct answer to “What will be the output of the following Python code? class fruits: def __init__(self, price): self.price = price obj=fruits(50) obj.quantity=10 obj.bags=2 print(obj.quantity+len(obj.__dict__))”. This question is standard in competitive examination syllabi for Classes And Objects In Python."
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What is hasattr(obj,name) used for?
    options:
      - To access the attribute of the object
      - To delete an attribute
      - To check if an attribute exists or not
      - To set an attribute
    answer: 2
    explanation: To check if an attribute exists or not is the correct answer to “What is hasattr(obj,name) used for”. This question is standard in competitive examination syllabi for Classes And Objects In Python.
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: "What will be the output of the following Python code? class stud: ‘Base class for all students’ def __init__(self, roll_no, grade): self.roll_no = roll_no self.grade = grade def display (self): print(\"Roll no : \", self.roll_no, \", Grade: \", self.grade) print(student.__doc__)"
    options:
      - Exception is thrown
      - __main__
      - Nothing is displayed
      - Base class for all students
    answer: 3
    explanation: "Base class for all students is the correct answer to “What will be the output of the following Python code? class stud: ‘Base class for all students’ def __init__(self, roll_no, grade): self.roll_no = roll_no self.grade = grade def display (self): print(\"Roll no : \", self.roll_no, \", Grade: \", self.grade) print(student.__doc__)”. This question is standard in competitive examination syllabi for Classes And Objects In Python."
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: "What is the output of the following code: class Parent: x = 10 class Child(Parent): pass obj = Child() print(obj.x)"
    options:
      - "10"
      - An error will occur
      - obj
      - Child
    answer: 0
    explanation: "10 is the correct answer to “What is the output of the following code: class Parent: x = 10 class Child(Parent): pass obj = Child() print(obj.x)”. This question is standard in competitive examination syllabi for Classes And Objects In Python."
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: How can you check if an object belongs to a specific class in Python?
    options:
      - By using the isinstance() function
      - By using the belongsto() method
      - By using the classof() method
      - By using the typeof() function
    answer: 0
    explanation: By using the isinstance() function is the correct answer to “How can you check if an object belongs to a specific class in Python”. This question is standard in competitive examination syllabi for Classes And Objects In Python.
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: __del__ method is used to destroy instances of a class.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “__del__ method is used to destroy instances of a class.”. This question is standard in competitive examination syllabi for Classes And Objects In Python.
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: How can you create a static variable in a Python class?
    options:
      - By defining a variable within the class but outside any method
      - By using the static keyword
      - By using the class keyword
      - By using the variable keyword
    answer: 0
    explanation: By defining a variable within the class but outside any method is the correct answer to “How can you create a static variable in a Python class”. This question is standard in competitive examination syllabi for Classes And Objects In Python.
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: "What will be the output of the following Python code? >>> class demo(): def __repr__(self): return '__repr__ built-in function called' def __str__(self): return '__str__ built-in function called' >>> s=demo() >>> print(s)"
    options:
      - Error
      - Nothing is printed
      - __str__ called
      - __repr__ called
    answer: 2
    explanation: "__str__ called is the correct answer to “What will be the output of the following Python code? >>> class demo(): def __repr__(self): return '__repr__ built-in function called' def __str__(self): return '__str__ built-in function called' >>> s=demo() >>> print(s)”. This question is standard in competitive examination syllabi for Classes And Objects In Python."
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What is the purpose of the @property decorator in Python classes?
    options:
      - It allows you to define a method that can be accessed like an attribute
      - It defines a property
      - It defines a method
      - It defines a constructor
    answer: 0
    explanation: It allows you to define a method that can be accessed like an attribute is the correct answer to “What is the purpose of the @property decorator in Python classes”. This question is standard in competitive examination syllabi for Classes And Objects In Python.
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: "What will be the output of the following Python code? class test: def __init__(self,a=\"Hello World\"): self.a=a def display(self): print(self.a) obj=test() obj.display()"
    options:
      - The program has an error because constructor can't have default arguments
      - Nothing is displayed
      - "\"Hello World\" is displayed"
      - The program has an error display function doesn't have parameters
    answer: 2
    explanation: "\"Hello World\" is displayed is the correct answer to “What will be the output of the following Python code? class test: def __init__(self,a=\"Hello World\"): self.a=a def display(self): print(self.a) obj=test() obj.display()”. This question is standard in competitive examination syllabi for Classes And Objects In Python."
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What is delattr(obj,name) used for?
    options:
      - To print deleted attribute
      - To delete an attribute
      - To check if an attribute is deleted or not
      - To set an attribute
    answer: 1
    explanation: To delete an attribute is the correct answer to “What is delattr(obj,name) used for”. This question is standard in competitive examination syllabi for Classes And Objects In Python.
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
---


