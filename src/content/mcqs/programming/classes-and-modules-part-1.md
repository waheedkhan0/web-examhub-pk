---
title: Classes And Modules — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Classes And Modules — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: classes-and-modules-part-1
topicName: Classes And Modules — Part 1
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
    question: The behaviour of the instances present of a class inside a method is defined by
    options:
      - Method
      - Classes
      - Interfaces
      - Classes and Interfaces
    answer: 1
    explanation: The behaviour of the instance of a class is defined by the class and is shared by all instances.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: The keyword or the property that you use to refer to an object through which they were invoked is
    options:
      - from
      - to
      - this
      - object
    answer: 2
    explanation: The ‘this’ keyword is used to refer to the object through which the properties or methods were invoked. This use of ‘this’ is a fundamental characteristic of the methods of any class.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: "Consider the following code snippet : var o = new F () ; o . constructor === F The output would be :"
    options:
      - "false"
      - "true"
      - "0"
      - "1"
    answer: 1
    explanation: "The result is true: the constructor property specifies the class."
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: The basic difference between JavaScript and Java is
    options:
      - There is no difference
      - Functions are considered as fields
      - Variables are specific
      - Functions are values, and there is no hard distinction between methods and fields
    answer: 3
    explanation: The basic difference between JavaScript and Java is that the functions are values, and there is no hard distinction between methods and fields.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: The meaning for Augmenting classes is that
    options:
      - objects inherit prototype properties even in dynamic state
      - objects inherit prototype properties only in dynamic state
      - objects inherit prototype properties in static state
      - None of the mentioned
    answer: 0
    explanation: "JavaScript’s prototype-based inheritance mechanism is dynamic: an object inherits properties from its prototype, even if the prototype changes after the object is created. This means that we can augment JavaScript classes simply by adding new methods to their prototype objects."
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: "The property of JSON() method is:"
    options:
      - it can be invoked manually as object.JSON()
      - it will be automatically invoked by the compiler
      - it is invoked automatically by the JSON.stringify() method
      - it cannot be invoked in any form
    answer: 2
    explanation: The JSON format is intended for serialization of data structures and can handle JavaScript primitive values, arrays, and plain objects. It does not know about classes, and when serializing an object, it ignores the object’s prototype and constructor. If you call JSON.stringify() on a Range or Complex object, for example, it returns a string like {“from”:1, “to”:3} or {“r”:1, “i”:-1}.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: When a class B can extend another class A, we say that
    options:
      - A is the superclass and B is the subclass
      - B is the superclass and A is the subclass
      - Both A and B are the superclass
      - Both A and B are the subclass
    answer: 0
    explanation: Instances of B inherit all the instance methods of A. The class B can define its own instance methods, some of which may override methods of the same name defined by class A.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: If A is the superclass and B is the subclass, then subclass inherting the superclass can be represented as
    options:
      - B=inherit(A)
      - B=A.inherit()
      - B.prototype=inherit(A)
      - B.prototype=inherit(A.prototype)
    answer: 2
    explanation: The subclass B inherits the prototype of the class A.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: The method that can be used to create new properties and also to modify the attributes of existing properties is
    options:
      - Object.defineProperty()
      - Object.defineProperties()
      - Both Object.defineProperty() and Object.defineProperties()
      - None of the mentioned
    answer: 2
    explanation: When used to define new properties, any attributes you omit default to false. Therefore, both Object.defineProperty() and Object.defineProperties() can be used to create and modify the attributes.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: The four kinds of class members are
    options:
      - Instance methods, Instance fields, Static method, Dynamic method
      - Instance fields, Instance methods, Class fields, Class methods
      - Instance fields, Non-instance fields, Dynamic methods, Global methods
      - Global methods, Local methods, Dynamic methods, Static methods
    answer: 1
    explanation: The four kinds of class members are Instance fields, Instance methods, Class fields, Class methods.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: The properties of the objects act like different kinds of class members. They are
    options:
      - Public object, Private object, Protected object
      - Constructor object, Function object, Destructor object
      - Constructor object, Prototype object, Instance object
      - Instance method, Static object, Dynamic object
    answer: 2
    explanation: In JavaScript, there are three different objects involved inany class definition, and the properties of these three objects act like different kinds of class members namely, Constructor object, Prototype object, and Instance object.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: The object whose properties are inherited by all instances of the class, and properties whose values are functions behaving like instance methods of the class, is
    options:
      - Instance object
      - Constructor object
      - Destructor object
      - Prototype object
    answer: 3
    explanation: The properties of the prototype object are inhertied by all instances of the class, and properties whose values are functions behave like instance methods of the class.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: Which are usually variables that are used internally in object methods and also are globally visible variables?
    options:
      - Object properties
      - Variable properties
      - Method properties
      - Internal properties
    answer: 1
    explanation: The variable properties are usually variables that are used internally in the objects methods, but can also be globally visible variables that are used through the page.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: The class that represents the regular expressions is
    options:
      - RegExpObj
      - RegExpClass
      - RegExp
      - StringExp
    answer: 2
    explanation: The JavaScript RegExp class represents regular expressions, and both string and RegExp define methods that use regular expressions.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: Which is the correct code that returns a complex number that is the complex conjugate of this one?
    options:
      - Complex.prototype.conj = function() { return new Complex(this.r, -this.i); }
      - Complex.prototype.conj = function() { return Complex(this.r, -this.i); }
      - Complex.prototype.conj = function() { return (this.r, -this.i); }
      - Complex.prototype.conj = function() { new Complex(this.r, -this.i); }
    answer: 0
    explanation: The above code snippet returns a complex number that is the complex conjugate of this one.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: How can we make methods available on all objects?
    options:
      - Object.add(methods)
      - Object.methods(add)
      - Object.add.methods(…)
      - Object.prototype
    answer: 3
    explanation: It is possible to add methods to Object.prototype , making them available on all objects. This is not recommended, however, because prior to ECMAScript5, there is no way to make these add-on methods nonenumerable, and if you add properties to Object.prototype , those properties will be reported by all for/in loops.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What is the procedure to add methods to HTMLElement so that they will be inherited by the objects that represent the HTML tags in the current document?
    options:
      - HTMLElement.prototype(…)
      - HTMLElement.prototype
      - HTML.addmethods()
      - HTML.elements(add)
    answer: 1
    explanation: It is implementation-dependent whether classes defined by the host environment (such as the web browser) can be augmented using Object.prototype . In many web browsers, for example, you can add methods to HTMLElement.prototype and those methods will be inherited by the objects that represent the HTML tags in the current document.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: You can refresh the webpage in JavaScript by using
    options:
      - window.reload
      - location.reload
      - window.refresh
      - page.refresh
    answer: 1
    explanation: One can refresh the webpage in JavaScript by using location.reload .
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: The functions provide() and require() of Dojo toolkit and Google’s Closure library are used for
    options:
      - declaring and loading modules
      - loading and declaring modules
      - declaring modules
      - none of the mentioned
    answer: 0
    explanation: Both the Dojo toolkit and Google’s Closure library define provide() and require() functions for declaring and loading modules.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: The maximum number of global symbols a module can define is
    options:
      - "2"
      - "3"
      - "1"
      - "4"
    answer: 2
    explanation: Generally, the various modules are allowed to run in the pristine (or near pristine) environment that it expects. The modules should minimize the number of global symbols they define – ideally, no module should define more than one.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: To define each of the set classes as a property of the sets object (namespace) for the module, the statement is
    options:
      - sets = sets.AbstractEnumerableSet.extend()
      - sets.SingletonSet = sets.AbstractEnumerableSet.extend(...)
      - sets.SingletonSet = sets.extend(...)
      - sets = sets.extend(...)
    answer: 1
    explanation: The sets object is the namespace for the module, and we define each of the set classes as a property of this object.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: Consider the following statement var Set = sets . Set; var s = new Set ( 1 , 2 , 3 ) ; What could be the efficiency quotient of the above two statements ?
    options:
      - The programmer imports at once the frequently used values into the global namespace
      - There is no efficiency quotient, the programmer tries to make it inefficient
      - The programmer needs to import the Sets everytime he wants to use it
      - All of the mentioned
    answer: 0
    explanation: A programmer can import frequently used values into the global namespace. A programmer who was going to make frequent use of the Set class from the sets namespace might import the class like that.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: The scope of a function is also called as
    options:
      - The function’s scope
      - Module function
      - Modulated function
      - Private function
    answer: 1
    explanation: The scope of a function can be used as a private namespace for a module. Therefore, the scope of a function is called a module function .
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: Modules that have more than one item in their API can
    options:
      - Assign itself to a global variable
      - Invoke another module of the same kind
      - Return a namespace object
      - None of the above
    answer: 2
    explanation: Modules that have more than one item in their API can return a namespace object.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: The provides() function and the exportsobject are used to
    options:
      - Register the module’s API and Store their API
      - Store the module’s API and register their API
      - Store the module’s API
      - None of the mentioned
    answer: 0
    explanation: Frameworks that define module loading systems may have other methods of exporting a module’s API. There may be a provides() function for modules to register their API, or an exports object into which modules must store their API.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Consider the following code snippet var sets = com . davidflanagan . collections . sets; What is the programmer trying to do in the above code snippet?
    options:
      - Importing a single module
      - Importing a module partially
      - Importing a namespace
      - Importing the entire module
    answer: 3
    explanation: Rather than importing individual classes, a programmer might import the entire module to the global namespace.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: The properties() method is a
    options:
      - Enumerable method
      - Non-enumerable method
      - Operational method
      - None of the mentioned
    answer: 1
    explanation: The properties() method is a non-enumerable method.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: What can be done in order to avoid creation of global variables in JavaScript?
    options:
      - To use a method that defines all the variables
      - To use an object that has the reference to all the variables
      - To use an object as its namespace
      - To use global functions
    answer: 2
    explanation: One way for a module to avoid the creation of global variables is to use an object as its namespace. Instead of defining global functions and variables, it stores the functions and values as properties of an object (which may be referenced to a global variable).
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: The ‘$’ present in the RegExp object is called a
    options:
      - character
      - matcher
      - metacharacter
      - metadata
    answer: 2
    explanation: The ‘S’ is a special metacharacter that matches the end of a string.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: "Consider the following statement containing regular expressions var text = \"testing: 1, 2, 3\" ; var pattern = / d +/ g; In order to check if the pattern matches, the statement is"
    options:
      - text==pattern
      - text.equals(pattern)
      - text.test(pattern)
      - pattern.test(text)
    answer: 3
    explanation: The given pattern is applied on the text given in the paranthesis.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: The regular expression to match any one character not between the brackets is
    options:
      - "[…]"
      - "[^]"
      - "[^…]"
      - "[D]"
    answer: 2
    explanation: The [^…] character class is used to match or draw any one character not between the brackets.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: What does /[^(]* regular expression indicate ?
    options:
      - Match one or more characters that are not open paranthesis
      - Match zero or more characters that are open paranthesis
      - Match zero or more characters that are not open paranthesis
      - Match one or more characters that are open paranthesis
    answer: 2
    explanation: We should always be careful while using * and ? as repetition characters as they may match zero instances of whatever precedes them, they are allowed to match nothing.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: What will be the result when non greedy repetition is used on the pattern /a+?b/ ?
    options:
      - Matches the letter b preceded by the fewest number of a’s possible
      - Matches the letter b preceded by any number of a
      - Matches letter a preceded by letter b, in the stack order
      - None of the mentioned
    answer: 0
    explanation: Using non greedy repetition may not always produce the results you expect. /a+?b/ matches the letter b preceded by the fewest number of a’s possible.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: What does the subexpression /java(script)?/ result in ?
    options:
      - It matches “java” followed by the optional “script”
      - It matches “java” followed by any number of “script”
      - It matches “java” followed by a minimum of one “script”
      - None of the mentioned
    answer: 0
    explanation: The subexpression /java(script)?/ matches “java” followed by the optional “script”.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: What is the most essential purpose of parantheses in regular expressions ?
    options:
      - Define pattern matching techniques
      - Define subpatterns within the complete pattern
      - Define portion of strings in the regular expression
      - All of the mentioned
    answer: 1
    explanation: When a regular expression is successfullyy matched against a target string, it is possible to extract the portions of the target string that matched any particular paranthesized subpattern. The essential purpose of parantheses in regular expressions is to define subpatterns within the complete pattern.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: The method that performs the search-and-replace operation to strings for pattern matching is
    options:
      - searchandreplace()
      - add()
      - edit()
      - replace()
    answer: 1
    explanation: The replace() method performs a search-and-replace operation. It takes a regular expression as its first argument and a replacement string as its second argument.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: What would be the result of the following statement in JavaScript using regular expression methods ?
    options:
      - Returns [“123″”456″”789”]
      - Returns [“123″,”456″,”789”]
      - Returns [1,2,3,4,5,6,7,8,9]
      - Throws an exception
    answer: 1
    explanation: The split() method can take regular expressions as its arguments. The split() method generally breaks the string on which it is called into an array of substrings, using the argument as a separator.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: The Crockford’s subset doesnot include which function in JavaScript?
    options:
      - eval()
      - coeval()
      - equal()
      - equivalent()
    answer: 0
    explanation: The Crockford’s subset does not include the with and continue statements or the eval() function. It defines functions using function definition expressions only and does not include the function definition statement.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: Why does JavaScript subset disallow == and !=?
    options:
      - It uses bitwise checking
      - It uses === and !== instead
      - It uses equals() and notequals() instead
      - None of the mentioned
    answer: 1
    explanation: The subset does not include the comma operator, the bitwise operators, or the ++ and — operators. It also disallows == and != because of the type conversion they perform, requiring use of === and !== instead.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: What is being imposed on each subset to ensure that it conforms to the subset?
    options:
      - A parser to parse the code
      - A parser that parses and adds to the subset
      - A static verifier that parses code
      - All of the mentioned
    answer: 2
    explanation: Each subset is coupled with a static verifier that parses code to ensure that it conforms to the subset.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
---


