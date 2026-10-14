---
title: Object Oriented Concept — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Object Oriented Concept — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: object-oriented-concept-part-1
topicName: Object Oriented Concept — Part 1
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
    question: Which one of the following is not a valid class name?
    options:
      - ShopProduct
      - Shopproduct1
      - 1shopproduct
    answer: 2
    explanation: You declare a class with the class keyword and an arbitrary class name. Class names can be any combination of numbers and letters, although they must not begin with a number.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: Fill in the blank with the best option. An Object is a/an ________ of a class.
    options:
      - type
      - prototype
      - instance
      - object
    answer: 2
    explanation: An object is said to be an instance of its class. It is of the type defined by the class.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Which version of PHP introduced the visibility keywords i.e public, private, and protected?
    options:
      - PHP 4
      - PHP 5
      - PHP 5.1
      - PHP 5.3
    answer: 1
    explanation: In PHP 4, all properties were declared with var keyword, which is identical in effect to using public. For the sake of backward compatibility, PHP 5 accepts var in place of public for properties.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: Which characters is used to access property variables on an object-by-object basis?
    options:
      - "::"
      - "="
      - "->"
      - .
    answer: 2
    explanation: "Example: $product1->title=”My Life”;"
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: Code that uses a class, function, or method is often described as the.
    options:
      - client code
      - user code
      - object code
      - class code
    answer: 0
    explanation: Code that uses a class, function, or method is often described as the class’s, function’s, or method’s client or as client code.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: Which keyword precedes a method name?
    options:
      - method
      - function
      - public
      - protected
    answer: 1
    explanation: A method declaration resembles a function declaration. The function keyword precedes a method name, followed by an optional list of argument variables in parentheses.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: If you omit the visibility keyword in your method declaration, by default the method will be declared as.
    options:
      - public
      - private
      - protected
      - friendly
    answer: 0
    explanation: By declaring a method public, you ensure that it can be invoked from outside of the current object.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: Inheritance is the means by which one or more classes can be derived from a/an ___ class.
    options:
      - base
      - abstract
      - "null"
      - predefined
    answer: 0
    explanation: A class that inherits from another is said to be a subclass of it. This relationship is often described in terms of parents and children. A child class is derived from and inherits characteristics from the parent.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What will be the output of the following PHP code? <?php class MyClass { } $a = new MyClass; var_dump(!( $a instanceof stdClass )) ; ?>
    options:
      - bool(true)
      - bool(false)
      - error
      - none of the above
    answer: 0
    explanation: To check if an object is not an instanceof a class, the logical not operator can be used.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What should be used to refer to a method in the context of a class rather than an object you use?
    options:
      - "->"
      - __
      - $
      - "::"
    answer: 3
    explanation: Example- parent::__construct()
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: Prior to which version of PHP did constructors took the name of the enclosing class.
    options:
      - PHP 4
      - PHP 5
      - PHP 5.3
      - PHP 5.4
    answer: 1
    explanation: "The new unified constructors use the name __construct(). Using the old syntax, a call to a parent constructor would tie you to that particular class: parent::ShopProduct();"
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: A mutator method is also called as.
    options:
      - Setter
      - Accessor
      - Getter
      - Destructor
    answer: 0
    explanation: An accessor method is called getter. The common use of a mutator method is to initialise the value of member variables of a class.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: Which version of PHP introduced the static keyword?
    options:
      - PHP 4
      - PHP 5
      - PHP 5.2
      - PHP 5.3
    answer: 1
    explanation: The static keyword was introduced with PHP 5. It cannot be used in PHP 4 scripts.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: Which keyword is used to access a static method or property from within the same class(rather than from child)?
    options:
      - static
      - strat
      - self
      - set
    answer: 2
    explanation: Self is to classes what the $this pseudo-variable is to objects.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: In which of the following circumstance should you use a static reference to a non static method?
    options:
      - Making a method call using parent
      - Making a method call using child
      - Making an object call using parent
      - Making an object call using child
    answer: 0
    explanation: Making a method call using parent is the only circumstance in which you should use a static reference to a non-static method.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: Which one of the following variable cannot be used inside a static method?
    options:
      - $this
      - $get
      - $set
      - $date
    answer: 0
    explanation: By definition, static methods are not invoked in the context of an object. For this reason, static methods and properties are often referred to as class variables and properties.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What does PDO stand for?
    options:
      - PHP Data Orientation
      - PHP Database Object
      - PHP Database Orientation
      - PHP Data Object
    answer: 3
    explanation: The PDO class provides a common interface to different database applications.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: Which keyword is used to declare a constant property?
    options:
      - const
      - con
      - constant
      - _constant
    answer: 0
    explanation: A constant property is declared with the const keyword. Like global constants, class constants cannot be changed once they are set.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: Which one of the following is a constant variable?
    options:
      - const $name
      - constant NAME
      - const NAME
    answer: 2
    explanation: Constants are not prefixed with a dollar sign like regular properties. By convention, they are often named using only uppercase characters
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What will happen if you try to set a value to a constant once it has been declared?
    options:
      - The value of the variable will change
      - The value of the variable will not change
      - Parse Error
      - Nothing
    answer: 2
    explanation: You should use constants when your property needs to be available across all instances of a class, and when the property value needs to be fixed and unchanging.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: How many of the following can be contained in constants? 1. boolean 2. integer 3. float 4. string
    options:
      - "1"
      - "2"
      - "3"
      - "4"
    answer: 3
    explanation: All scalar data i.e boolean, integer, float and string can be contained in constants.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: Which one of the following class can not be instantiated?
    options:
      - inherited class
      - abstract class
      - constant class
      - every class
    answer: 1
    explanation: An abstract class cannot be instantiated. Instead it defines (and, optionally, partially implements) the interface for any class that might extend it.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: Which one of the following keywords is used to define an abstract class?
    options:
      - extends
      - implements
      - abstract
      - new
    answer: 2
    explanation: The introduction of abstract classes was one of the major changes ushered in with PHP 5. Its inclusion in the list of new features was another sign of PHP’s extended commitment to object-oriented design.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: Which one of the following is the correct abstract method?
    options:
      - public function write()
      - abstract function write()
      - abstract public write()
      - abstract public function write()
    answer: 3
    explanation: An abstract method cannot have an implementation. You declare it in the normal way, but end the declaration with a semicolon rather than a method body.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: Atleast how many abstract methods must an abstract class contain?
    options:
      - None
      - One
      - Two
      - Five
    answer: 1
    explanation: Classes defined as abstract may not be instantiated, and any class that contains at least one abstract method must also be abstract.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Which one of the following keyword is used to implement an interface?
    options:
      - interface
      - get
      - inherit
      - implements
    answer: 3
    explanation: A class can implement an interface using the implements keyword in its declaration.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: Which one of the following methods in the exception class, is used to get a nested exception object?
    options:
      - getPrevious()
      - getCode()
      - getFile()
      - getLine()
    answer: 0
    explanation: getCode() – Get the code integer that was passed to the constructor. getFile() – Get the file in which the exception was generated. getLine() – Get the line number at which the exception was generated.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: Which one of the following keyword is used in conjunction with an Exception object?
    options:
      - throws
      - exception
      - throw
      - final
    answer: 2
    explanation: The throw keyword is used in conjunction with an Exception object. It halts execution of the current method and passes responsibility for handling the error back to the calling code.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: Which keyword is used to put a stop on inheritance?
    options:
      - stop
      - end
      - break
      - final
    answer: 3
    explanation: A final class cannot be subclassed.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: Which one of the following method is invoked when a value is assigned to an undefined property?
    options:
      - __get()
      - __set()
      - __isset()
      - __call()
    answer: 1
    explanation: "The __set() method is invoked when client code attempts to assign to an undefined property. It is passed two arguments: the name of the property, and the value the client is attempting to set."
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: Which one of the following method is invoked when an undefined method is called by client code?
    options:
      - __get()
      - __isset()
      - __unset()
      - __call()
    answer: 3
    explanation: The __call() method is probably the most useful of all the interceptor methods. The __call() method can be useful for delegation. Delegation is the mechanism by which one object passes method invocations on to a second.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: Which method introduced in PHP 5, is invoked just before an object is garbage collected?
    options:
      - __collect()
      - __garbage()
      - __destruct()
      - __destructor()
    answer: 2
    explanation: You can use this method to perform any final cleaning up that might be necessary. Imagine, for example, a class that saves itself to a database when so ordered. I could use the __destruct() method to ensure that an instance saves its data when it is deleted.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: Which keyword must be added before $first variable on the third line of the above question to make $second and $first as distinct objects in PHP 5?
    options:
      - copy
      - clone
      - cut
      - Can’t add any word to make them distinct
    answer: 1
    explanation: Clone operates on an object instance, producing a by-value copy.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: What will be the output of the following PHP code class Person { function getName () { return "Bob" ; } function getAge () { return 44 ; } function __toString () { $desc = $this-> getName(); $desc . = " ( age ". $this-> getAge () .")"; return $desc; } } $person = new Person () ; print $person;
    options:
      - Object Not Found
      - PHP Catchable fatal error
      - BOB (age 44)
      - BOB
    answer: 2
    explanation: By implementing a __toString() method, you can control how your objects represent themselves when printed. The method is invoked automatically when your object is passed to print or echo, and its return value is substituted.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: ______clone() is run on the _______ object.
    options:
      - original
      - pseudo
      - external
      - copied
    answer: 3
    explanation: __clone() is run on the copied object and not the original.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: What will be the output of the following PHP code? class Checkout { final function totalize () { // calculate bill } } class IllegalCheckout extends Checkout { final function totalize () { // change bill calculation } }
    options:
      - "PHP Fatal error: Class IllegalCheckout may not inherit from final class"
      - Value of the bill calculated
      - "PHP Fatal error: Cannot find object"
      - "PHP Fatal error: Cannot override final method"
    answer: 3
    explanation: A final class cannot be subclassed. Less drastically, a final method cannot be overridden.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: Which one of the following property scopes is not supported by PHP?
    options:
      - friendly
      - final
      - public
      - static
    answer: 0
    explanation: "PHP supports five class property scopes: public, private, protected, final and static."
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: Which one of the following is the right way to define a constant?
    options:
      - constant PI = “3.1415”
      - const $PI = “3.1415”
      - constant PI = ‘3.1415’
      - const PI = ‘3.1415’
    answer: 3
    explanation: "Class constants are created like: const NAME = ‘VALUE’;"
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: Which of the following is/are the right way to declare a method? 1. function functionName() { function body } 2. scope function functionName() { function body } 3. method methodName() { method body } 4. scope method methodName() { method body }
    options:
      - Only 2
      - Only 4
      - 1 and 2
      - 3 and 4
    answer: 2
    explanation: In case of public methods, you can forgo explicitly declaring the scope and just declare the method like you would a function.
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: Which of the following method scopes is/are not supported by PHP? 1. private 2. final 3. static 4 abstract
    options:
      - Only 2
      - Only 4
      - 2 and 4
      - None of the mentioned
    answer: 3
    explanation: "PHP supports six method scopes: public, private, final, static, protected and abstract."
    keyConcept: Object Oriented Concept
    testedIn:
      - FPSC
      - PPSC
---


