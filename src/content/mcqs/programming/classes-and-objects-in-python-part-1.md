---
title: Classes And Objects In Python — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Classes And Objects In Python — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: classes-and-objects-in-python-part-1
topicName: Classes And Objects In Python — Part 1
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
    question: "What is the output of the following code: class Parent: def show(self): print('Parent method') class Child(Parent): pass obj = Child() obj.show()"
    options:
      - Parent method
      - An error will occur
      - Child method
      - obj
    answer: 0
    explanation: "The correct answer is A: Parent method Here's why: We have a class called `Parent` that has a method named `show` . This method prints \"Parent method\". Then, we create another class called `Child` that inherits from the `Parent` class. This means the `Child` class automatically gets all the methods and attributes of the `Parent` class. Importantly, the `Child` class doesn't define its own `show` method. It inherits the `show` method directly from `Parent` . We create an object of the `Child` class called `obj` . When we call `obj.show()` , Python looks for a `show` method in the `Child` class. Since it doesn't find one there, it looks in the `Parent` class (because `Child` inherits from `Parent` ). It finds the `show` method in the `Parent` class and executes it. Therefore, it prints \"Parent method\"."
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: "What is the output of the following code: class MyClass: count = 0 def init(self): MyClass.count += 1 obj1 = MyClass() obj2 = MyClass() print(obj1.count)"
    options:
      - "2"
      - "1"
      - An error will occur
      - "0"
    answer: 3
    explanation: "Let's break down this Python code step-by-step: First, we have a class called `MyClass`: This is like a blueprint for creating objects. Inside the class, we have `count = 0`: This is a class variable called `count`. It's shared by all instances (objects) of the `MyClass`. Initially, it's set to 0. Next, we have `def __init__(self):`: This is the constructor (initializer) of the class. It's automatically called when you create a new object of the class. Inside the constructor, we have `MyClass.count += 1`: This line increments the `count` class variable by 1 every time a new object is created. `MyClass.count` ensures we're updating the class variable, not an instance variable. Now, let's look at the object creation: `obj1 = MyClass()` This creates the first object of the class. The `__init__` method is called, and `MyClass.count` becomes 1. `obj2 = MyClass()` This creates the second object of the class. The `__init__` method is called again, and `MyClass.count` becomes 2. Finally, we have `print(obj1.count)`: This prints the value of the `count` variable. Since `count` is a class variable, `obj1.count` will access the class variable which is currently equal to 2. Therefore, the output is 2. So, the correct answer is Option A: 2"
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What is a class in Python?
    options:
      - A blueprint for creating objects
      - A built-in function
      - A specific data type
      - A variable in Python
    answer: 0
    explanation: A blueprint for creating objects is the correct answer to “What is a class in Python”. This question is standard in competitive examination syllabi for Classes And Objects In Python.
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: How do you define a class in Python?
    options:
      - Using the class keyword
      - Using the define keyword
      - Using the classdef keyword
      - Using the class method
    answer: 0
    explanation: Using the class keyword is the correct answer to “How do you define a class in Python”. This question is standard in competitive examination syllabi for Classes And Objects In Python.
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: What are objects in Python?
    options:
      - Instances of a class
      - Built-in functions
      - Special data types
      - Global variables
    answer: 0
    explanation: Instances of a class is the correct answer to “What are objects in Python”. This question is standard in competitive examination syllabi for Classes And Objects In Python.
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: How do you create an object of a class in Python?
    options:
      - Using the class name and parentheses
      - Using the create() method
      - Using the new keyword
      - Using the object() method
    answer: 0
    explanation: Using the class name and parentheses is the correct answer to “How do you create an object of a class in Python”. This question is standard in competitive examination syllabi for Classes And Objects In Python.
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What is the purpose of the self parameter in Python methods?
    options:
      - It refers to the instance of the object
      - It refers to the class
      - It refers to the method
      - It refers to the attribute
    answer: 0
    explanation: It refers to the instance of the object is the correct answer to “What is the purpose of the self parameter in Python methods”. This question is standard in competitive examination syllabi for Classes And Objects In Python.
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: How can you define a method in a Python class?
    options:
      - By defining a function within the class
      - By using the method keyword
      - By using the define keyword
      - By using the def keyword
    answer: 0
    explanation: By defining a function within the class is the correct answer to “How can you define a method in a Python class”. This question is standard in competitive examination syllabi for Classes And Objects In Python.
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: How can you delete an attribute of an object in Python?
    options:
      - By using the del keyword
      - By using the remove() method
      - By using the delete() method
      - By using the erase() method
    answer: 0
    explanation: By using the del keyword is the correct answer to “How can you delete an attribute of an object in Python”. This question is standard in competitive examination syllabi for Classes And Objects In Python.
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What is encapsulation in Python classes?
    options:
      - The concept of bundling data and methods that operate on the data into a single unit
      - A built-in function
      - A special data type
      - A variable in Python
    answer: 0
    explanation: The concept of bundling data and methods that operate on the data into a single unit is the correct answer to “What is encapsulation in Python classes”. This question is standard in competitive examination syllabi for Classes And Objects In Python.
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What is the purpose of the @staticmethod decorator in Python classes?
    options:
      - It defines a method that belongs to the class rather than an instance
      - It defines a static attribute
      - It defines a global function
      - It defines a constructor
    answer: 0
    explanation: It defines a method that belongs to the class rather than an instance is the correct answer to “What is the purpose of the @staticmethod decorator in Python classes”. This question is standard in competitive examination syllabi for Classes And Objects In Python.
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: What is the __init__ method used for in Python classes?
    options:
      - It initializes the attributes of an object
      - It defines a method
      - It is a constructor
      - It is a destructor
    answer: 0
    explanation: It initializes the attributes of an object is the correct answer to “What is the __init__ method used for in Python classes”. This question is standard in competitive examination syllabi for Classes And Objects In Python.
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: How can you access the attributes of an object in Python?
    options:
      - Using dot notation
      - Using parentheses
      - Using square brackets
      - Using curly braces
    answer: 0
    explanation: Using dot notation is the correct answer to “How can you access the attributes of an object in Python”. This question is standard in competitive examination syllabi for Classes And Objects In Python.
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: How can you inherit a class in Python?
    options:
      - By creating a new class that is based on an existing class
      - By using the inherits keyword
      - By using the extends keyword
      - By using the inherit method
    answer: 0
    explanation: By creating a new class that is based on an existing class is the correct answer to “How can you inherit a class in Python”. This question is standard in competitive examination syllabi for Classes And Objects In Python.
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What is method overriding in Python classes?
    options:
      - It allows a subclass to provide a specific implementation of a method that is already defined in its superclass
      - A built-in function
      - A specific data type
      - A special variable
    answer: 0
    explanation: It allows a subclass to provide a specific implementation of a method that is already defined in its superclass is the correct answer to “What is method overriding in Python classes”. This question is standard in competitive examination syllabi for Classes And Objects In Python.
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What is the purpose of the __str__ method in Python classes?
    options:
      - It returns a string representation of an object
      - It converts an object to a string
      - It defines a string attribute
      - It removes an attribute
    answer: 0
    explanation: It returns a string representation of an object is the correct answer to “What is the purpose of the __str__ method in Python classes”. This question is standard in competitive examination syllabi for Classes And Objects In Python.
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What is the purpose of the __del__ method in Python classes?
    options:
      - It is called when an object is about to be destroyed
      - It deletes an object
      - It defines a destructor
      - It is a constructor
    answer: 0
    explanation: It is called when an object is about to be destroyed is the correct answer to “What is the purpose of the __del__ method in Python classes”. This question is standard in competitive examination syllabi for Classes And Objects In Python.
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: Which function is called when the following Python code is executed? f = foo() format(f)
    options:
      - format()
      - __format__()
      - str()
      - __str__()
    answer: 3
    explanation: __str__() is the correct answer to “Which function is called when the following Python code is executed? f = foo() format(f)”. This question is standard in competitive examination syllabi for Classes And Objects In Python.
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: Which operator is overloaded by __invert__()?
    options:
      - "!"
      - "~"
      - ^
      - "-"
    answer: 1
    explanation: ~ is the correct answer to “Which operator is overloaded by __invert__()”. This question is standard in competitive examination syllabi for Classes And Objects In Python.
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: Which operator is overloaded by __lg__()?
    options:
      - <
      - ">"
      - "!="
      - none of the mentioned
    answer: 3
    explanation: none of the mentioned is the correct answer to “Which operator is overloaded by __lg__()”. This question is standard in competitive examination syllabi for Classes And Objects In Python.
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: Which operator is overloaded by the __or__() function?
    options:
      - "||"
      - "|"
      - //
      - /
    answer: 1
    explanation: "| is the correct answer to “Which operator is overloaded by the __or__() function”. This question is standard in competitive examination syllabi for Classes And Objects In Python."
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What is Instantiation in terms of OOP terminology?
    options:
      - Deleting an instance of class
      - Modifying an instance of class
      - Copying an instance of class
      - Creating an instance of class
    answer: 3
    explanation: Creating an instance of class is the correct answer to “What is Instantiation in terms of OOP terminology”. This question is standard in competitive examination syllabi for Classes And Objects In Python.
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: The assignment of more than one function to a particular operator is . . . . . . . .
    options:
      - Operator over-assignment
      - Operator overriding
      - Operator overloading
      - Operator instance
    answer: 2
    explanation: Operator overloading is the correct answer to “The assignment of more than one function to a particular operator is . . . . . . . .”. This question is standard in competitive examination syllabi for Classes And Objects In Python.
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: What is the difference between a class variable and an instance variable in Python?
    options:
      - A class variable is shared among all instances of a class, while an instance variable is unique to each instance
      - They are the same
      - An instance variable is shared among all instances
      - A class variable is unique to each instance
    answer: 0
    explanation: A class variable is shared among all instances of a class, while an instance variable is unique to each instance is the correct answer to “What is the difference between a class variable and an instance variable in Python”. This question is standard in competitive examination syllabi for Classes And Objects In Python.
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: How can you access a class variable in Python?
    options:
      - Using the class name and dot notation
      - Using the self keyword
      - Using the cls keyword
      - Using the object keyword
    answer: 0
    explanation: Using the class name and dot notation is the correct answer to “How can you access a class variable in Python”. This question is standard in competitive examination syllabi for Classes And Objects In Python.
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: . . . . . . . . represents an entity in the real world with its identity and behaviour.
    options:
      - A method
      - An object
      - A class
      - An operator
    answer: 1
    explanation: An object is the correct answer to “. . . . . . . . represents an entity in the real world with its identity and behaviour.”. This question is standard in competitive examination syllabi for Classes And Objects In Python.
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: . . . . . . . . is used to create an object.
    options:
      - class
      - constructor
      - User-defined functions
      - In-built functions
    answer: 1
    explanation: constructor is the correct answer to “. . . . . . . . is used to create an object.”. This question is standard in competitive examination syllabi for Classes And Objects In Python.
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: What are the methods which begin and end with two underscore characters called?
    options:
      - Special methods
      - In-built methods
      - User-defined methods
      - Additional methods
    answer: 0
    explanation: Special methods is the correct answer to “What are the methods which begin and end with two underscore characters called”. This question is standard in competitive examination syllabi for Classes And Objects In Python.
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: What is setattr() used for?
    options:
      - To access the attribute of the object
      - To set an attribute
      - To check if an attribute exists or not
      - To delete an attribute
    answer: 1
    explanation: To set an attribute is the correct answer to “What is setattr() used for”. This question is standard in competitive examination syllabi for Classes And Objects In Python.
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: What is getattr() used for?
    options:
      - To access the attribute of the object
      - To delete an attribute
      - To check if an attribute exists or not
      - To set an attribute
    answer: 0
    explanation: To access the attribute of the object is the correct answer to “What is getattr() used for”. This question is standard in competitive examination syllabi for Classes And Objects In Python.
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: "What is the output of the following code: class MyClass: x = 5 obj = MyClass() print(obj.x)"
    options:
      - "5"
      - An error will occur
      - obj
      - MyClass
    answer: 2
    explanation: "obj is the correct answer to “What is the output of the following code: class MyClass: x = 5 obj = MyClass() print(obj.x)”. This question is standard in competitive examination syllabi for Classes And Objects In Python."
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: "Is the following Python code valid? class B(object): def first(self): print(\"First method called\") def second(): print(\"Second method called\") ob = B() B.first(ob)"
    options:
      - It isn't as the object declaration isn't right
      - It isn't as there isn't any __init__ method for initializing class members
      - Yes, this method of calling is called unbounded method call
      - Yes, this method of calling is called bounded method call
    answer: 2
    explanation: "Yes, this method of calling is called unbounded method call is the correct answer to “Is the following Python code valid? class B(object): def first(self): print(\"First method called\") def second(): print(\"Second method called\") ob = B() B.first(ob)”. This question is standard in competitive examination syllabi for Classes And Objects In Python."
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: Which function overloads the == operator?
    options:
      - __eq__()
      - __equ__()
      - __isequal__()
      - none of the mentioned
    answer: 0
    explanation: __eq__() is the correct answer to “Which function overloads the == operator”. This question is standard in competitive examination syllabi for Classes And Objects In Python.
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: "What will be the output of the following Python code? class stud: def __init__(self, roll_no, grade): self.roll_no = roll_no self.grade = grade def display (self): print(\"Roll no : \", self.roll_no, \", Grade: \", self.grade) stud1 = stud(34, 'S') stud1.age=7 print(hasattr(stud1, 'age'))"
    options:
      - Error as age isn't defined
      - "True"
      - "False"
      - "7"
    answer: 1
    explanation: "True is the correct answer to “What will be the output of the following Python code? class stud: def __init__(self, roll_no, grade): self.roll_no = roll_no self.grade = grade def display (self): print(\"Roll no : \", self.roll_no, \", Grade: \", self.grade) stud1 = stud(34, 'S') stud1.age=7 print(hasattr(stud1, 'age'))”. This question is standard in competitive examination syllabi for Classes And Objects In Python."
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: What does print(Test.__name__) display (assuming Test is the name of the class)?
    options:
      - ()
      - Exception is thrown
      - Test
      - __main__
    answer: 2
    explanation: Test is the correct answer to “What does print(Test.__name__) display (assuming Test is the name of the class)”. This question is standard in competitive examination syllabi for Classes And Objects In Python.
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: What is a constructor in Python classes?
    options:
      - A special method that is automatically called when an object is created
      - A built-in function
      - A method that creates an object
      - A method that destroys an object
    answer: 0
    explanation: A special method that is automatically called when an object is created is the correct answer to “What is a constructor in Python classes”. This question is standard in competitive examination syllabi for Classes And Objects In Python.
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: Which of the following Python code will print True? a = foo(2) b = foo(3) print(a < b)
    options:
      - "class foo: def __init__(self, x): self.x = x def __lt__(self, other): if self.x < other.x: return False else: return True"
      - "class foo: def __init__(self, x): self.x = x def __less__(self, other): if self.x > other.x: return False else: return True"
      - "class foo: def __init__(self, x): self.x = x def __lt__(self, other): if self.x < other.x: return True else: return False"
      - "class foo: def __init__(self, x): self.x = x def __less__(self, other): if self.x < other.x: return False else: return True"
    answer: 2
    explanation: "class foo: def __init__(self, x): self.x = x def __lt__(self, other): if self.x < other.x: return True else: return False is the correct answer to “Which of the following Python code will print True? a = foo(2) b = foo(3) print(a < b)”. This question is standard in competitive examination syllabi for Classes And Objects In Python."
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: What is the purpose of the @classmethod decorator in Python classes?
    options:
      - It defines a method that belongs to the class and not the instance
      - It defines a static method
      - It defines a constructor
      - It defines a destructor
    answer: 0
    explanation: It defines a method that belongs to the class and not the instance is the correct answer to “What is the purpose of the @classmethod decorator in Python classes”. This question is standard in competitive examination syllabi for Classes And Objects In Python.
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: "What is the output of the following code: class Parent: def init(self): print('Parent constructor') class Child(Parent): def init(self): print('Child constructor') obj = Child()"
    options:
      - Child constructor
      - Parent constructor
      - An error will occur
      - Child Parent
    answer: 0
    explanation: "Child constructor is the correct answer to “What is the output of the following code: class Parent: def init(self): print('Parent constructor') class Child(Parent): def init(self): print('Child constructor') obj = Child()”. This question is standard in competitive examination syllabi for Classes And Objects In Python."
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: How can you create a private attribute in a Python class?
    options:
      - By prefixing the attribute name with an underscore (_)
      - By using the private keyword
      - By using the hidden keyword
      - By using the secure keyword
    answer: 0
    explanation: By prefixing the attribute name with an underscore (_) is the correct answer to “How can you create a private attribute in a Python class”. This question is standard in competitive examination syllabi for Classes And Objects In Python.
    keyConcept: Classes And Objects In Python
    testedIn:
      - FPSC
      - PPSC
---


