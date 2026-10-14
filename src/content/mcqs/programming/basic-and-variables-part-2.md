---
title: Basic And Variables — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Basic And Variables — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: basic-and-variables-part-2
topicName: Basic And Variables — Part 2
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
    question: Among the keywords below, which one is not a statement?
    options:
      - debugger
      - with
      - if
      - use strict
    answer: 3
    explanation: use strict is a directive introduced in ECMAScript5. Directives are not statements because it does not include any language keywords. Also, it can appear only at the start of a script or at the start of a function body, before any real statemenst have appeared.
    keyConcept: Basic And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: The unordered collection of properties, each of which has a name and a value is called
    options:
      - String
      - Object
      - Serialized Object
      - All of the mentioned
    answer: 1
    explanation: An object is an unordered collection of properties, each of which has a name and a value. Property names are strings, so we can say that objects map strings to values.
    keyConcept: Basic And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: The object has three object attributes namely
    options:
      - Class, parameters, object’s extensible flag
      - Prototype, class, objects’ parameters
      - Prototype, class, object’s extensible flag
      - Native object, Classes and Interfacces and Object’s extensible flag
    answer: 2
    explanation: "Every object has three associated object attributes : 1. An object’s prototype is a reference to another object from which properties are inherited. 2. An object’s class is a string that caegorizes the type of an object. 3. An object’s extensible flag specifies whether new properties may be added to the object."
    keyConcept: Basic And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: "Consider the following code snippet : var book = { \" main title \": \" JavaScript \" , ' sub-title ': \" The Definitive Guide \" , \" for \": \" all audiences \" , author : { firstname : \" David \" , surname : \" Flanagan \" } } ; In the above snippet, firstname and surname are"
    options:
      - properties
      - property values
      - property names
      - objects
    answer: 2
    explanation: firstname and surname are the property names. The value of that particular property is itself an object. That is why these property names are unquoted.
    keyConcept: Basic And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: "A linkage of series of prototype objects is called as :"
    options:
      - prototype stack
      - prototype chain
      - prototype class
      - prototypes
    answer: 1
    explanation: Consider an example, Date.prototype inherits properties from Object.prototype, so a Date object created by new Date() inherits properties from both Date.prototype and Object.prototype. This linked series of prototype objects is known as prototype chain.
    keyConcept: Basic And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: Consider the below given syntax book [ datatype ] = assignment_value; In the above syntax, the datatype within the square brackets must be
    options:
      - An integer
      - A String
      - An object
      - None of the mentioned
    answer: 1
    explanation: When using square bracket notation, the expression inside the square brackets must evaluate to a sting or a value that can be converted to a string.
    keyConcept: Basic And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: To determine whether one object is the prototype of (or is part of the prototype chain of) another object, one should use the
    options:
      - isPrototypeOf() method
      - equals() method
      - "=== operator"
      - none of the mentioned
    answer: 0
    explanation: To determine whether one object is the prototype of (or is part of the prototype chain of) another object, one should use the isPrototype() method. To find out if p is the prototype of o write p.isPrototypeOf(o).
    keyConcept: Basic And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: Consider the following code snippet function f () {} ; The above prototype represents a
    options:
      - Function f
      - A custom constructor
      - Prototype of a function
      - Not valid
    answer: 1
    explanation: The above code snippet defines a custom constructor.
    keyConcept: Basic And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: The purpose of extensible attribute is to
    options:
      - make all of the own properties of that object nonconfigurable
      - to configure and bring a writable property
      - “lock down” objects into a known state and prevent outside tampering
      - all of the mentioned
    answer: 2
    explanation: The purpose of the extensible attribute is to be able to “lock down” objects into a known state and prevent outside tampering.
    keyConcept: Basic And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: "Identify the process done in the below code snippet o = { x : 1 , y :{ z :[false,null, \"\" ]}} ; s = JSON . stringify ( o ) ; p = JSON . parse ( s ) ;"
    options:
      - Object Encapsulation
      - Object Serialization
      - Object Abstraction
      - Object Encoding
    answer: 1
    explanation: Object serialization is the process of converting an object’s state to a string from which it can later be restored.
    keyConcept: Basic And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: A JavaScript program developed on a Unix Machine
    options:
      - will throw errors and exceptions
      - must be restricted to a Unix Machine only
      - will work perfectly well on a Windows Machine
      - will be displayed as a JavaScript text on the browser
    answer: 2
    explanation: will work perfectly well on a Windows Machine is the correct answer to “A JavaScript program developed on a Unix Machine”. This question is standard in competitive examination syllabi for Basic And Variables.
    keyConcept: Basic And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: JavaScript Code can be called by using
    options:
      - RMI
      - Triggering Event
      - Preprocessor
      - Function/Method
    answer: 3
    explanation: Function/Method is the correct answer to “JavaScript Code can be called by using”. This question is standard in competitive examination syllabi for Basic And Variables.
    keyConcept: Basic And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: A proper scripting language is a
    options:
      - High level programming language
      - Assembly level programming language
      - Machinen level programming language
      - Low level programming language
    answer: 0
    explanation: High level programming language is the correct answer to “A proper scripting language is a”. This question is standard in competitive examination syllabi for Basic And Variables.
    keyConcept: Basic And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: Consider the following snippet code var string1 = ” 123 ”; var intvalue = 123 ; alert ( string1 + intvalue ) ; The result would be
    options:
      - "123246"
      - "246"
      - "123123"
      - Exception
    answer: 2
    explanation: 123123 is the correct answer to “Consider the following snippet code var string1 = ” 123 ”; var intvalue = 123 ; alert ( string1 + intvalue ) ; The result would be”. This question is standard in competitive examination syllabi for Basic And Variables.
    keyConcept: Basic And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: Consider the following statements var count = 0 ; while ( count < 10 ) { console . log ( count ) ; count ++ ; } In the above code snippet, what happens?
    options:
      - The values of count is logged or stored in a particular location or storage
      - The value of count from 0 to 9 is displayed in the console
      - An error is displayed
      - An exception is thrown
    answer: 1
    explanation: The value of count from 0 to 9 is displayed in the console is the correct answer to “Consider the following statements var count = 0 ; while ( count < 10 ) { console . log ( count ) ; count ++ ; } In the above code snippet, what happens”. This question is standard in competitive examination syllabi for Basic And Variables.
    keyConcept: Basic And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: "The enumeration order becomes implementation dependent and non-interoperable if :"
    options:
      - If the object inherits enumerable properties
      - The object does not have the properties present in the integer array indices
      - The delete keyword is never used
      - Object.defineProperty() is not used
    answer: 0
    explanation: If the object inherits enumerable properties is the correct answer to “The enumeration order becomes implementation dependent and non-interoperable if :”. This question is standard in competitive examination syllabi for Basic And Variables.
    keyConcept: Basic And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: The basic purpose of the toLocaleString() is to
    options:
      - return a localised object representation
      - return a parsed string
      - return a local time in the string format
      - return a localized string representation of the object
    answer: 3
    explanation: return a localized string representation of the object is the correct answer to “The basic purpose of the toLocaleString() is to”. This question is standard in competitive examination syllabi for Basic And Variables.
    keyConcept: Basic And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: Javascript is _________ language.
    options:
      - Programming
      - Application
      - None of These
      - Scripting
    answer: 3
    explanation: Scripting is the correct answer to “Javascript is _________ language.”. This question is standard in competitive examination syllabi for Basic And Variables.
    keyConcept: Basic And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: JavaScript is ______ Side Scripting Language.
    options:
      - Server
      - Browser
      - ISP
      - None of These
    answer: 1
    explanation: Browser is the correct answer to “JavaScript is ______ Side Scripting Language.”. This question is standard in competitive examination syllabi for Basic And Variables.
    keyConcept: Basic And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: JavaScript is designed for following purpose
    options:
      - To Style HTML Pages
      - To Execute Query Related to DB on Server
      - To add interactivity to HTML Pages.
      - To Perform Server Side Scripting Opertion
    answer: 2
    explanation: To add interactivity to HTML Pages. is the correct answer to “JavaScript is designed for following purpose”. This question is standard in competitive examination syllabi for Basic And Variables.
    keyConcept: Basic And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: JavaScript Code is written inside file having extension __________.
    options:
      - .javascript
      - .jsc
      - .jvs
      - .js
    answer: 3
    explanation: .js is the correct answer to “JavaScript Code is written inside file having extension __________.”. This question is standard in competitive examination syllabi for Basic And Variables.
    keyConcept: Basic And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: Local Browser used for validations on the Web Pages uses __________.
    options:
      - CSS
      - JS
      - HTML
      - Java
    answer: 1
    explanation: JS is the correct answer to “Local Browser used for validations on the Web Pages uses __________.”. This question is standard in competitive examination syllabi for Basic And Variables.
    keyConcept: Basic And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: We can embed JS code inside HTML directly ?
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “We can embed JS code inside HTML directly”. This question is standard in competitive examination syllabi for Basic And Variables.
    keyConcept: Basic And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: JS code included inside head section is loaded before loading page.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “JS code included inside head section is loaded before loading page.”. This question is standard in competitive examination syllabi for Basic And Variables.
    keyConcept: Basic And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: It is good to include JS code inside footer section in order to speed up the Page loading time of Webpage.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “It is good to include JS code inside footer section in order to speed up the Page loading time of Webpage.”. This question is standard in competitive examination syllabi for Basic And Variables.
    keyConcept: Basic And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Which attribute is used to specifies that the script is executed when the page has finished parsing (only for external scripts)
    options:
      - parse
      - async
      - defer
      - type
    answer: 2
    explanation: defer is the correct answer to “Which attribute is used to specifies that the script is executed when the page has finished parsing (only for external scripts)”. This question is standard in competitive examination syllabi for Basic And Variables.
    keyConcept: Basic And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: Which was the first browser to support JavaScript ?
    options:
      - IE
      - Netscape
      - Mozilla Firefox
      - Google Chrome
    answer: 1
    explanation: Netscape is the correct answer to “Which was the first browser to support JavaScript”. This question is standard in competitive examination syllabi for Basic And Variables.
    keyConcept: Basic And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: JavaScript is invented by ________.
    options:
      - Helsinki, Linus
      - W3 Group
      - Brendan Eich
      - James Gosling
    answer: 2
    explanation: Brendan Eich is the correct answer to “JavaScript is invented by ________.”. This question is standard in competitive examination syllabi for Basic And Variables.
    keyConcept: Basic And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: JavaScript was invented at _______ Lab.
    options:
      - AT&T Bell LAb
      - Google Lab
      - Sun Microsystem
      - Netscape
    answer: 3
    explanation: Netscape is the correct answer to “JavaScript was invented at _______ Lab.”. This question is standard in competitive examination syllabi for Basic And Variables.
    keyConcept: Basic And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: Variable can hold ________ value at a time.
    options:
      - Multiple
      - Single
      - None of these
      - Double
    answer: 1
    explanation: Single is the correct answer to “Variable can hold ________ value at a time.”. This question is standard in competitive examination syllabi for Basic And Variables.
    keyConcept: Basic And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: Integer Variable is declared using following syntax in JavaScript.
    options:
      - int num
      - Integer num
      - var num
      - None of the above
    answer: 2
    explanation: var num is the correct answer to “Integer Variable is declared using following syntax in JavaScript.”. This question is standard in competitive examination syllabi for Basic And Variables.
    keyConcept: Basic And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: We can declare ___________ at a time. Select most appropriate option.
    options:
      - One or more Variables
      - More than One Variables
      - One Variable Only
      - None of these
    answer: 0
    explanation: One or more Variables is the correct answer to “We can declare ___________ at a time. Select most appropriate option.”. This question is standard in competitive examination syllabi for Basic And Variables.
    keyConcept: Basic And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: Spaces,Punctuation marks are called as __________ Symbols in JavaScript.
    options:
      - Punctual
      - None of these
      - Mandetory
      - Special
    answer: 3
    explanation: Special is the correct answer to “Spaces,Punctuation marks are called as __________ Symbols in JavaScript.”. This question is standard in competitive examination syllabi for Basic And Variables.
    keyConcept: Basic And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: Java Script Variable should be Case ___________.
    options:
      - Non Sensitive
      - Sensitive
    answer: 1
    explanation: Sensitive is the correct answer to “Java Script Variable should be Case ___________.”. This question is standard in competitive examination syllabi for Basic And Variables.
    keyConcept: Basic And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: Initialization of variable can be done by writing _____ operator in between variable name and operand value.
    options:
      - EQUALS
      - "="
      - VALUE
      - "=="
    answer: 1
    explanation: "= is the correct answer to “Initialization of variable can be done by writing _____ operator in between variable name and operand value.”. This question is standard in competitive examination syllabi for Basic And Variables."
    keyConcept: Basic And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: Multiple Declarations of variables are separated by ___________ symbol.
    options:
      - Comma
      - Semicolon
      - Asterisk
      - Colon
    answer: 0
    explanation: Comma is the correct answer to “Multiple Declarations of variables are separated by ___________ symbol.”. This question is standard in competitive examination syllabi for Basic And Variables.
    keyConcept: Basic And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: Underscore can be used as first letter while declaring variable in JavaScript.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “Underscore can be used as first letter while declaring variable in JavaScript.”. This question is standard in competitive examination syllabi for Basic And Variables.
    keyConcept: Basic And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: Variable declared inside JavaScript Function will be called as ____________.
    options:
      - Local Variables
      - Global Variables
      - Area Variables
      - Reference Variables
    answer: 0
    explanation: Local Variables is the correct answer to “Variable declared inside JavaScript Function will be called as ____________.”. This question is standard in competitive examination syllabi for Basic And Variables.
    keyConcept: Basic And Variables
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: Local Variables are destroyed after execution of function.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “Local Variables are destroyed after execution of function.”. This question is standard in competitive examination syllabi for Basic And Variables.
    keyConcept: Basic And Variables
    testedIn:
      - FPSC
      - PPSC
---


