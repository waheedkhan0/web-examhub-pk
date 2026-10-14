---
title: Object Oriented Concept — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Object Oriented Concept — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: object-oriented-concept-part-2
topicName: Object Oriented Concept — Part 2
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
    question: PHP recognizes constructors by the name_________
    options:
      - classname()
      - _construct()
      - function _construct()
      - function __construct()
    answer: 3
    explanation: A double underscore followed by the construct keyword. Its syntax is function __construct ([ argument1, argument2,…..]) { Class Initialization code }.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: Which version of PHP introduced the instanceof keyword?
    options:
      - PHP 4
      - PHP 5
      - PHP 5.3
      - PHP 6
    answer: 1
    explanation: Using instanceof keyword we can determine whether an object is an instance of a class. $manager = new Employee() … if ($manager instanceof Employee) echo “True”;
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Which one of the following functions is used to determine whether a class exists?
    options:
      - exist()
      - exist_class()
      - class_exist()
      - __exist()
    answer: 2
    explanation: The class_exist() function returns true or false according to whether the class exists within the currently executing script content.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: Which one of the following functions is used to determine object type?
    options:
      - obj_type()
      - type()
      - is_a()
      - is_obj()
    answer: 2
    explanation: The is_a() function returns true if object belongs to a class type or if it belongs to a class that is a child of that class. Or else false is returned.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: In the PHP code given below, what is/are the properties? <?php class Example { public $name; function Sample () { echo "This is an example" ; } } ?>
    options:
      - echo “This is an example”
      - public $name
      - class Example
      - function sample()
    answer: 1
    explanation: Yes they are nothing but variables.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: Which of the following advanced OOP features is/are not supported by PHP? 1. Method overloading 2. Multiple Inheritance 3. Namespaces 4. Object Cloning
    options:
      - All of the mentioned
      - None of the mentioned
      - 1 and 2
      - 3 and 4
    answer: 2
    explanation: "The advanced OOP features are: Object cloning, Inheritance, Interfaces, Abstract classes, and Namespaces."
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: Which one of the following is the right way to clone an object?
    options:
      - _clone(targetObject)
      - destinationObject = clone targetObject
      - destinationObject = _clone(targetObject)
      - destinationObject = clone(targetObject)
    answer: 1
    explanation: You can clone an object by prefacing it with the clone keyword.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: Which feature allows us to call more than one method or function of the class in single instruction?
    options:
      - Typecasting
      - Method Including
      - Method adding
      - Method chaining
    answer: 3
    explanation: "Following is a basic example of method chaining in php: $a = new Order(); $a->CreateOrder()->sendOrderEmail()->createShipment();"
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: A package is a set of related _________
    options:
      - Objects
      - Classes
      - Programs
      - Functions
    answer: 1
    explanation: A package is a set of related classes, usually grouped together in some way. Packages can be used to separate parts of a system from one another.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: Till which version of PHP, developers were forced to name their files in a global context?
    options:
      - PHP 4
      - PHP 5
      - PHP 5.2
      - PHP 5.3
    answer: 3
    explanation: If you named a class ShoppingBasket, it would become instantly available across your system.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: Which of the following can you place inside a namespace? 1. classes 2. functions 3. variables
    options:
      - "1"
      - "2"
      - "3"
      - All of the mentioned
    answer: 3
    explanation: A namespace is a bucket in which you can place your classes, functions and variables.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: Which one of the following is the correct way of declaring a namespace?
    options:
      - namespace my
      - namespace my()
      - my namespace
      - namespace(my)
    answer: 0
    explanation: The namespace declaration must be the first statement in its file.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: Which symbol is used to declare nested namespaces?
    options:
      - /
      - \
      - .
      - "|"
    answer: 1
    explanation: Example – namespace com\getinstance\util;
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: Which keyword can be used to fix the above error?
    options:
      - fix
      - join
      - use
      - namespace
    answer: 2
    explanation: Use keyword allows you to alias other namespaces within the current namespace. Example – namespace main; use comgetinstanceutil; utilDebug::helloWorld();
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: Which one of the following statements is true for include_once() and require_once()?
    options:
      - Both are exactly the same
      - include_once is used for files where as require_once() is not
      - Both Handle the errors in the same way
      - Both do not handle the errors in the same way
    answer: 3
    explanation: The only difference between the include() and require() statements lies in their handling of errors. A file invoked using require() will bring down your entire process when you meet an error. The same error encountered via a call to include() will merely generate a warning and end execution of the included file.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: Which one of the following statements is true for require() and require_once()?
    options:
      - They are functions
      - They are statements
      - They’ll not work if the () is not present
      - They can not be used to require files
    answer: 1
    explanation: require() and require_once() are actually statements, not functions. This means that you can omit the brackets when using them.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: Which function was introduced to help automate the inclusion of class files?
    options:
      - __load()
      - __preload()
      - __autoload()
      - __inload()
    answer: 2
    explanation: When the PHP engine encounters an attempt to instantiate an unknown class, it invokes the __autoload() function, passing it the class name as a string. It is up to the implementer to define a strategy for locating and including the missing class file.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: How many times can you define _______ autoload in a process?
    options:
      - once
      - twice
      - thrice
      - as many times as needed
    answer: 0
    explanation: __autoload is a powerful tool, but it does have some limitations. In particular, you can only define it once in a process. If you need to change your autoload function dynamically you should look at the spl_autoload_register function, which supports that functionality.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: Which one of the following functions will you use to check that the class exists before you work with it?
    options:
      - class_exist()
      - class_exists()
      - exist()
      - exists_class()
    answer: 1
    explanation: The class_exists() function accepts a string representing the class to check for and returns a Boolean true value if the class exists and false otherwise.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: Which one of the following will you use to check the class of an object?
    options:
      - class()
      - _class()
      - class_check()
      - get_class()
    answer: 3
    explanation: This function accepts any object as an argument and returns its class name as a string.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: PHP 4 did not support instanceof. Instead, which function did it provide?
    options:
      - is()
      - get_class()
      - is_a()
      - is_the()
    answer: 2
    explanation: As of PHP 5.3 is_a() no longer deprecated.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: You use the get_class_methods() function to return the names of all the methods in the class. Which function will you use to print it on the screen?
    options:
      - printf()
      - print_ar
      - print_r
      - echo
    answer: 2
    explanation: The function get_class_methods returns an array therefore we cannot use echo.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: If you call a method and it doesn’t exist it’ll cause a problem. To check the method which function will you use?
    options:
      - _method()
      - methodexists()
      - is_callable()
      - is_method()
    answer: 2
    explanation: There is another method which you can use – method_exists() for similar purpose.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: What will be the output if a protected method is given as argument to the function method_exist()?
    options:
      - Method does not exist
      - "False"
      - Error
      - "True"
    answer: 3
    explanation: method_exists() returns true for private and protected methods as well as for public ones. Remember that the fact that a method exists does not mean that it will be callable.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: Which one of the following function should I use to find the parent class of a class?
    options:
      - get_parent_class()
      - parent_class()
      - class_parent()
      - get_class_parent()
    answer: 0
    explanation: The class functions also allow us to chart inheritance relationships.This function requires either an object or a class name, and it returns the name of the superclass, if any. If no such class exists, that is, if the class we are testing does not have a parent, then the function returns false.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Which class accepts a class name or an object reference and returns an array of interface name?
    options:
      - class_implements()
      - is_subclass()
      - is_subclass_of()
      - class_interface()
    answer: 0
    explanation: is_subclass_of() will tell you only about class inheritance relationships. It will not tell you that a class implements an interface.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: Object-oriented code tries to minimize dependencies by moving responsibility for handling tasks away from _______ and toward the objects in the system.
    options:
      - server code
      - client code
      - machine code
      - procedural code
    answer: 1
    explanation: Procedural code takes the form of a sequential series of commands and method calls. The controlling code tends to take responsibility for handling differing conditions. This top-down control can result in the development of duplications and dependencies across a project. Object-oriented code tries to minimize these dependencies by moving responsibility for handling tasks away from client code and toward the objects in the system.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: Placing a static method for generating _______ objects in the ________ class is convenient.
    options:
      - child parent
      - parent child
      - final static
      - static final
    answer: 0
    explanation: Such a design decision does have its own consequences, however.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: The extent to which proximate procedures are related to one another is known as.
    options:
      - Coupling
      - Balancing
      - Cohesion
      - Co-relation
    answer: 2
    explanation: Ideally, you should create components that share a clear responsibility. If your code spreads related routines widely, you will find them harder to maintain as you have to hunt around to make changes. Our ParamHandler classes collect related procedures into a common context.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: ______ occurs when discrete parts of a system’s code are tightly bound up with one another so that a change in one part necessitates changes in the others.
    options:
      - Loose Coupling
      - Tight Coupling
      - Co-relation
      - Balancing
    answer: 1
    explanation: Tight coupling is by no means unique to procedural code, though the sequential nature of such code makes it prone to the problem.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: ________ code makes change easier because the impact of altering an implementation will be localized to the component being altered.
    options:
      - Orthogonal
      - Cohesion
      - Coupling
      - Balancing
    answer: 0
    explanation: Orthogonality, it is argued, promotes reuse in that components can be plugged into new systems without needing any special configuration. Such components will have clear inputs and outputs independent of any wider context.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: Polymorphism is also known as______
    options:
      - switch
      - overact
      - encapsulation
      - class switching
    answer: 3
    explanation: Polymorphism is the maintenance of multiple implementations behind a common interface.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: Which one of the following is know as the key to object-oriented programming?
    options:
      - Polymorphism
      - Encapsulation
      - Data Abstraction
      - Orthogonality
    answer: 1
    explanation: Encapsulation simply means the hiding of data and functionality from a client.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: Which one among the following means tight coupling?
    options:
      - Code Duplication
      - Inheritance
      - Encapsulation
      - Polymorphism
    answer: 0
    explanation: Duplication is one of the great evils in code. Take a look at the instances of repetition in your system. Perhaps they belong together. If you change something fundamental about one routine, will the similar routines need amendment? If this is the case, they probably belong in the same class.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: UML stands for?
    options:
      - unified mailing language
      - unified modeling logo
      - undefined modeling language
      - unified modeling language
    answer: 3
    explanation: The UML emerged as a standard only after long years of intellectual and bureaucratic sparring among the great and good of the object oriented design community.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: In a class diagram the class is divided into three sections, what is displayed in the first section?
    options:
      - Class Attributes
      - Class Declaration
      - Class Name
      - Class Functions
    answer: 2
    explanation: The other two sections are optional when no more information than the class name is known.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: _________ are used in class diagrams to describe the way in which specific elements should be used.
    options:
      - Attributes
      - Constraints
      - Constants
      - Class Names
    answer: 1
    explanation: The {abstract} syntax is an example of a constraint. There is no special structure for the text between the braces; it should simply provide a short clarification of any conditions that may apply to the element.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: Which one of the following is displayed below the class name in the class diagrams?
    options:
      - Functions
      - Methods
      - Attributes
      - Constraints
    answer: 2
    explanation: Attributes describe a class’s properties. Attributes are listed in the section directly beneath the class name.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: + is the visibility code for?
    options:
      - Public
      - Private
      - Protected
      - Friendly
    answer: 0
    explanation: The visibility symbol is followed by the name of the attribute.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: Which relationship is illustrated by a line that begins with an unfilled diamond?
    options:
      - Composition
      - Abstraction
      - Aggregation
      - Inheritance
    answer: 2
    explanation: In the case of aggregation, the contained objects are a core part of the container, but they can also be contained by other objects at the same time.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
---


