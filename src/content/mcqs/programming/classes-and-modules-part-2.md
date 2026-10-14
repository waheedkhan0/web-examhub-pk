---
title: Classes And Modules — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Classes And Modules — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: classes-and-modules-part-2
topicName: Classes And Modules — Part 2
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
    question: Why was “The Good Parts” designed as a language subset in JavaScript?
    options:
      - To improve programmer flexibility
      - To balance the work load of the programmer
      - To create an in-built compiler and interpreter
      - To improve programmer productivity
    answer: 3
    explanation: The Good Parts is a language subset designed for aesthetic reasons and with a desire to improve programmer productivity. There is a larger class of subsets that have been designed for the purpose of safely running untrusted JavaScript in a secure container or “sandbox”.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: Which is the subset that is a secure container designed for the purpose of safely running untrusted JavaScript?
    options:
      - Sandbox
      - The Good Parts
      - Both Sandbox and Good Parts
      - None of the mentioned
    answer: 0
    explanation: There is a larger class of subsets that have been designed for the purpose of safely running untrusted JavaScript in a secure container or “sandbox”.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Why is the this keyword forbidden in JavaScript?
    options:
      - Highly memory consuming
      - Functions should access the global objects
      - Functions should not access the global objects
      - Very inefficient to use
    answer: 2
    explanation: The this keyword is forbidden or restricted because functions (in non-strict mode) can access the global object through this. Preventing access to the global object is one of the key purposes of any sandboxing system.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: Which are the two functions that are not allowed in any secure subset?
    options:
      - evaluate() and restrict()
      - eval() and the Function() constructor
      - debugger() and test()
      - eval() and debugger()
    answer: 1
    explanation: eval() and the Function() constructor are not allowed in any secure subset because they allow the execution of arbitrary strings of code, and these strings cannot be statically analyzed.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: Which is the object that defines methods that allow complete control over page content?
    options:
      - The client-side document object
      - The server-side document object
      - Both client-side and server-side document object
      - None of the mentioned
    answer: 0
    explanation: The client-side document object defines methods that allow complete control over page content.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: Which was one of the first security subsets proposed?
    options:
      - FBJS
      - Caja
      - dojox.secure
      - ADSafe
    answer: 3
    explanation: ADsafe was one of the first security subsets proposed) It was created by Douglas Crockford (who also defined The Good Parts subset).ADsafe relies on static verification only, and it uses JSLint as its verifier. It forbids access to most global variables and defines an ADSAFE variable that provides access to a secure API, including special-purpose DOM methods. ADsafe is not in wide use, but it was an influential proof-of-concept that influenced other secure subsets.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: Which is the subset that transforms web content into secure modules that can be safely hosted on a web page?
    options:
      - Microsoft Web Sandbox
      - ADsafe
      - Caja
      - dojox.secure
    answer: 3
    explanation: Caja is Google’s open-source secure subset. Caja (Spanish for “box”) defines two language subsets. Cajita (“little box”) is a narrow subset like that used by ADsafe and dojox.secure. Valija (“suitcase” or “baggage”) is a much broader language that is close to regular ECMAScript 5 strict mode (with the removal of eval()). Caja itself is the name of the compiler that transforms (or “cajoles”) web content (HTML, CSS, and JavaScript code) into secure modules that can be safely hosted on a web page without being able to affect the page as a whole or other modules on the page.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: Consider the following code snippet const pi = 3.14 ; var pi = 4 ; console . log ( pi ) ; What will be the output for the above code snippet?
    options:
      - This will flash an error
      - Prints 4
      - Prints 3.14
      - Ambiguity
    answer: 0
    explanation: The above code snippet will flash an error. Attempts to alter the value or re-declaration causes errors.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: The let keyword can be used
    options:
      - in a for or for/in loop, as a substitute for var
      - as a block statement, to define new variables
      - to define variables that are scoped to a single expression
      - all of the mentioned
    answer: 3
    explanation: "The let keyword can be used in four ways : 1. as a variable declaration like var; 2. in a for or for/in loop, as a substitute for var; 3. as a block statement, to define new variables and explicitly delimit their scope; and 4. to define variables that are scoped to a single expression."
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: The main difference between the variables declared with var and with let is
    options:
      - var is confined to a particular function but let is not
      - let is confined to a particular function but var is not
      - var defines values based on conditions but let does not
      - none of the mentioned
    answer: 1
    explanation: Variables declared with var are defined throughout the enclosing function. Variables declared with let are defined only within the closest enclosing block (and any blocks nested within it, of course).
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: Consider the following code snippet function oddsums ( n ) { let total = 0 , result = [] ; for( let x = 1 ; x <= n; x ++ ) { let odd = 2 * x - 1 ; total += odd; result . push ( total ) ; } return result; } What would be the output if oddsums ( 5 ) ; is executed afted the above code snippet ?
    options:
      - Returns [1,4,9,16,25]
      - Returns [1,2,3,4,5]
      - Returns [3,6,9,12,15]
      - Returns [1,3,5,7,9]
    answer: 0
    explanation: The above code returns 1,4,9,16,25 which is the square of the first five natural numbers. Notice the usage of let keyword in the above code snippet.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: Consider the following code snippet console . log ( p ) If p is not defined, what would be the result or type of error?
    options:
      - Zero
      - "Null"
      - ReferenceError
      - ValueNotFoundError
    answer: 2
    explanation: In the above code snippet, p is not defined. Hence, it gives a ReferenceError.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: Consider the following code snippet let x = x + 1 ; console . log ( x ) ; What will be the result for the above code snippet?
    options:
      - "0"
      - "Null"
      - ReferenceError
      - NaN
    answer: 3
    explanation: Since x is a let variable and since x is undefined, so x+1 is NaN. Thus, the above code snippet prints NaN.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: Consider the following code snippet [ x,y ]=[ y,x ] ; What is the result of the above code snippet?
    options:
      - Throws exception
      - Swap the value of the two variables
      - Flashes an error
      - Creates a new reference object
    answer: 2
    explanation: The above code snippet swaps the value of the two variables.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: Which looping statement allows XML tags to appear in JavaScript programs and adds API for operating on XML data?
    options:
      - for loop
      - while loop
      - for/each loop
      - all of the mentioned
    answer: 2
    explanation: The for/each loop is a new looping statement standardized by E4X. E4X (ECMAScript for XML) is a language extension that allows XML tags to appear literally in JavaScript programs and adds syntax and API for operating on XML data.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: Which exception does the Iterators throw from their next() method when there are no more values to iterate, that work on finite collections ?
    options:
      - ExitIteration
      - AbortIteration
      - Abort
      - StopIteration
    answer: 3
    explanation: Iterators that work on finite collections throw StopIteration from their next() method when there are no more values to iterate. StopIteration is a property of the global object in JavaScript 1.7. Its value is an ordinary object (with no properties of its own) that is reserved for this special purpose of terminating iterations. Note, in particular,that StopIteration is not a constructor function like TypeError() or RangeError().
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: Which method of the iterable object returns an iterator object for the collection?
    options:
      - iterator()
      - _iterator_()
      - _iteration_()
      - _return_iterator_()
    answer: 1
    explanation: An iterable object represents a collection of values that can be iterated. An iterable object must define a method named __iterator__() (with two underscores at the start and end of the name) which returns an iterator object for the collection.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: Consider the following code snippet let succ = function ( x ) x + 1 , yes = function () true , no = function () false ; What convenience does the above code snippet provide?
    options:
      - Functional behaviour
      - Modular behaviour
      - No convenience
      - Shorthand expression
    answer: 0
    explanation: The functions defined in this way behave exactly like functions defined with curly braces and the return keyword.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: Consider the following code snippet data . sort (function( a,b ) ,b - a ) ; What does the above code do?
    options:
      - Sort in the alphabetical order
      - Sort in the chronological order
      - Sort in reverse alphabetical order
      - Sort in reverse numerical order
    answer: 3
    explanation: The above code snippet sorts an array in reverse numerical order.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What is the code to be used to trim whitespaces ?
    options:
      - let trimmed = (l.trim() for (l in lines))
      - let trimmed = (trim(l))
      - let trimmed = l.trim()
      - let trimmed = for(l in lines))
    answer: 0
    explanation: We can use the above code to trim whitespaces and filter out comments and blank lines.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: What will be the reaction when a catch clause has no conditionals ?
    options:
      - Takes it to be 0
      - Takes it to be 1
      - Takes it to be true
      - Takes it to be false
    answer: 2
    explanation: If a catch clause has no conditional, it behaves as if it has the conditional if true, and it is always triggered if no clause before it was triggered.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: When will the finally block be called?
    options:
      - When there is no exception
      - When the catch doesnot match
      - When there is exception
      - None of the mentioned
    answer: 3
    explanation: A finally block is called after try-catch execution.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: What is the return type of typeof for standard JavaScript objects?
    options:
      - xml
      - object
      - dom
      - html
    answer: 1
    explanation: The typeof operator returns “object” for all standard JavaScript objects as functions are, and the typeof operator returns “xml”.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: Which of the following is the descendant operator?
    options:
      - ..
      - …
      - "*"
      - "@"
    answer: 1
    explanation: "The .. operator is the descendant operator; you can use it in place of the normal . member-access operator : var names = pt .. name;"
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: Which of the following is an example to perform the most common XML manipulations using the XML objects invocation?
    options:
      - insertChildBefore()
      - insertChildAfter()
      - appendChildAfter(…)
      - appendChildBefore(…)
    answer: 0
    explanation: "E4X is designed so that you can perform most common XML manipulations using language syntax. E4X also defines methods you can invoke on XML objects. Here, for example, is the insertChildBefore() method:"
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: What is the code required to delete all “weight” tags?
    options:
      - delete weight(pt).all
      - delete pt.element[all]
      - delete pt
      - delete pt..weight
    answer: 3
    explanation: "Removing attributes and tags is very easy with the standard delete operator : delete pt .. weight; //delete all tags"
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: The snippet that filters the filtered set is
    options:
      - var t=new FilteredSet(s, {function(s) {return !(x instanceof Set);})
      - var t=new FilteredSet{function(s) {return !(x instanceof Set);})
      - var t=new FilteredSet(s, {function(s) {return (x instanceof Set);})
      - var t=new FilteredSet(s, {function(s) {return x;})
    answer: 0
    explanation: var t=new FilteredSet(s, {function(s) {return !(x instanceof Set);}) is the correct answer to “The snippet that filters the filtered set is”. This question is standard in competitive examination syllabi for Classes And Modules.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: Which method to use while working with XML fragments, instead of XML()?
    options:
      - XMLInterface()
      - XMLClass()
      - XMLList()
      - XMLArray()
    answer: 2
    explanation: XMLList() is the correct answer to “Which method to use while working with XML fragments, instead of XML()”. This question is standard in competitive examination syllabi for Classes And Modules.
    keyConcept: Classes And Modules
    testedIn:
      - FPSC
      - PPSC
---


