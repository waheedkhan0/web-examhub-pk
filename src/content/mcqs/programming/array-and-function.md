---
title: Array And Function MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Array And Function with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: array-and-function
topicName: Array And Function
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
    question: Consider the code snippet given below var count = [ 1 ,, 3 ] ; What is the observation made?
    options:
      - The omitted value takes “undefined”
      - This results in an error
      - This results in an exception
      - None of the mentioned
    answer: 0
    explanation: If you omit a value from an array literal, the omitted element is given the value.
    keyConcept: Array And Function
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: Consider the following code snippet var a1 = [,,,] ; var a2 = new Array ( 3 ) ; 0 in a1 0 in a2 The result would be
    options:
      - true false
      - false true
      - true true
      - None of the above
    answer: 0
    explanation: a1 has an element with index 0 and a2 has no element with index 0.
    keyConcept: Array And Function
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: The pop() method of the array does which of the following task ?
    options:
      - decrements the total length by 1
      - increments the total length by 1
      - prints the first element but no effect on the length
      - None of the mentioned
    answer: 0
    explanation: Arrays have a pop() method (it works with push()) that reduces the length of an array by 1 but also returns the value of the deleted element.
    keyConcept: Array And Function
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What will happen if reverse() and join() methods are used simultaneously ?
    options:
      - Reverses and stores in the same array
      - Reverses and concatenates the elements of the array
      - Reverses
      - All of the mentioned
    answer: 0
    explanation: The reverse() followed by a join() will reverse the respective array and will store the reversed array in the memory.
    keyConcept: Array And Function
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: "Consider the following code snippet : var a = [] ; a . unshift ( 1 ) ; a . unshift ( 22 ) ; a . shift () ; a . unshift ( 3 , [ 4 , 5 ]) ; a . shift () ; a . shift () ; a . shift () ; The final output for the shift() is"
    options:
      - "1"
      - "[4,5]"
      - "[3,4,5]"
      - Exception is thrown
    answer: 0
    explanation: The unshift() and shift() methods behave much like push() and pop(), except that they insert and remove elements from the beginning of an array rather than from the end. unshift() adds an element or elements to the beginning of the array, shifts the existing array elements up to higher indexes to make room, and returns the new length of the array. shift() removes and returns the first element of the array, shifting all subsequent elements down one place to occupy the newly vacant space at the start of the array.
    keyConcept: Array And Function
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: The primary purpose of the array map() function is that it
    options:
      - maps the elements of another array into itself
      - passes each element of the array and returns the necessary mapped elements
      - passes each element of the array on which it is invoked to the function you specify, and returns an array containing the values returned by that function
      - None of the mentioned
    answer: 2
    explanation: The map() method passes each element of the array on which it is invoked to the functionyou specify, and returns an array containing the values returned by that function.
    keyConcept: Array And Function
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: The method or operator used to identify the array is
    options:
      - isarrayType()
      - "=="
      - "==="
      - typeof
    answer: 3
    explanation: The typeof property is used to identify the array type.
    keyConcept: Array And Function
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: The function definitions in JavaScript begins with
    options:
      - Identifier and Parantheses
      - Return type and Identifier
      - Return type, Function keyword, Identifier and Parantheses
      - Identifier and Return type
    answer: 0
    explanation: The function definitions begin with the keyword function followed by an identifier that names the function and a pair of parantheses around a comma-separated list of zero or more identifiers.
    keyConcept: Array And Function
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: "Consider the following code snippet function printprops ( o ) { for(var p in o ) console . log ( p + \": \" + o [ p ] + \"n\" ) ; } What will the above code snippet result ?"
    options:
      - Prints the contents of each property of o
      - Returns undefined
      - All of the mentioned
      - None of the mentioned
    answer: 1
    explanation: The above code snippet returns undefined.
    keyConcept: Array And Function
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: When does the function name become optional in JavaScript?
    options:
      - When the function is defined as a looping statement
      - When the function is defined as expressions
      - When the function is predefined
      - All of the mentioned
    answer: 1
    explanation: The function name is optional for functions defined as expressions. A function declaration statement actually declares a variable and assigns a function object to it.
    keyConcept: Array And Function
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What is the purpose of a return statement in a function?
    options:
      - Returns the value and continues executing rest of the statements, if any
      - Returns the value and stops the program
      - Returns the value and stops executing the function
      - Stops executing the function and returns the value
    answer: 3
    explanation: The return statement causes the function to stop executing and to return the value of its expression (if any) to the caller.
    keyConcept: Array And Function
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: What will happen if a return statement does not have an associated expression?
    options:
      - It returns the value 0
      - It will throw an exception
      - It returns the undefined value
      - None of the mentioned
    answer: 2
    explanation: If the return statement does not have an associated expression, it returns the undefined value.
    keyConcept: Array And Function
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: A function with no return value is called
    options:
      - Procedures
      - Method
      - Static function
      - Dynamic function
    answer: 0
    explanation: Functions with no return value are sometimes called procedures.
    keyConcept: Array And Function
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: Consider the following code snippet function hypotenuse ( a, b ) { function square ( x ) { return x * x; } return Math . sqrt ( square ( a ) + square ( b )) ; } What does the above code result?
    options:
      - Sum of square of a and b
      - Square of sum of a and b
      - Sum of a and b square
      - None of the mentioned
    answer: 0
    explanation: The above code snippet contains nested function in which the function hypotenuse(a,b) has another function inside its scope, function square(x). The interesting thing about nested functions is their variable scoping rules. They can acceess the parameters and variables of the function (or functions) they are nested within.
    keyConcept: Array And Function
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: Which of the following is the correct code for invoking a function without this keyword at all, and also too determine whether the strict mode is in effect?
    options:
      - var strict = (function { return this; })
      - mode strict = (function() { return !this; }())
      - var strict = (function() { return !this; }())
      - mode strict = (function { })
    answer: 2
    explanation: The above code defines and invokes a function to determine if we’re in strict mode.
    keyConcept: Array And Function
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: Which is an equivalent code to invoke a function m of class o that expects two arguments x and y?
    options:
      - o(x,y)
      - o.m(x) && o.m(y)
      - m(x,y)
      - o.m(x,y)
    answer: 3
    explanation: "The code above is an invocation expression: it includes a function expression o.m and two argument expressions, x and y."
    keyConcept: Array And Function
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: "Consider the following code snippet : var grand_Total =eval (\" 10*10+5 \") ; The output for the above statement would be :"
    options:
      - 10*10+5
      - 105 as a string
      - 105 as an integer value
      - Exception is thrown
    answer: 2
    explanation: Even if the string value passed as a parameter to eval does represent a numeric value the use of eval() results in an error being generated.
    keyConcept: Array And Function
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: "Consider the following code snippet : var tensquared = ( function ( x ) {return x * x; }( 10 )) ; Will the above code work ?"
    options:
      - Yes, perfectly
      - Error
      - Exception will be thrown
      - Memory leak
    answer: 0
    explanation: Function name is optional for functions defined as expressions. Function expressions are sometimes defined and immediately invoked.
    keyConcept: Array And Function
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: "Consider the following code snippet : var string2Num =parseInt (\" 123xyz \") ; The result for the above code snippet would be :"
    options:
      - "123"
      - 123xyz
      - Exception
      - NaN
    answer: 1
    explanation: The parseInt() function returns the first integer contained in the string or 0 if the string does not begin with an integer.
    keyConcept: Array And Function
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: If you have a function f and an object o, you can define a method named m of o with
    options:
      - o.m=m.f
      - o.m=f
      - o=f.m
      - o=f
    answer: 0
    explanation: "A method is nothing more than a JavaScript function that is stored in a property of an object. If you have a function f and an object o, you can define a method named m of o with the following line: o.m = f;"
    keyConcept: Array And Function
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: "For the below mentioned code snippet: var o = new Object () ; The equivalent statement is:"
    options:
      - var o = Object()
      - var o
      - var o= new Object
      - Object o=new Object()
    answer: 2
    explanation: You can always omit a pair of empty parentheses in a constructor invocation.
    keyConcept: Array And Function
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: "Consider the following code snippet : var c = counter () , d = counter () ; c . count () d . count () c . reset () c . count () d . count () The state stored in d is :"
    options:
      - "1"
      - "0"
      - "Null"
      - Undefined
    answer: 0
    explanation: The state stored in d is 1 because d was not reset.
    keyConcept: Array And Function
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: "Consider the following code snippet : var c = counter () , d = counter () ; function constfuncs () { var funcs = [] ; for(var i = 0 ; i < 10 ; i ++ ) funcs [ i ] = function () { return i; } ; return funcs; } var funcs = constfuncs () ; funcs [ 5 ]() What does the last statement return ?"
    options:
      - "9"
      - "0"
      - "10"
      - None of the mentioned
    answer: 2
    explanation: The code above creates 10 closures, and stores them in an array. The closures are all defined within the same invocation of the function, so they share access to the variable i. When constfuncs() returns, the value of the variable i is 10, and all 10 closures share this value. Therefore, all the functions in the returned array of functions return the same value.
    keyConcept: Array And Function
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: What kind of scoping does JavaScript use?
    options:
      - Literal
      - Lexical
      - Segmental
      - Sequential
    answer: 1
    explanation: Like most modern programming languages, JavaScript uses lexical scoping. This means that functions are executed using the variable scope that was in effect when they were defined, not the variable scope that is in effect when they are invoked.
    keyConcept: Array And Function
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: What must be done in order to implement Lexical Scoping?
    options:
      - Get the object
      - Dereference the current scope chain
      - Reference the current scope chain
      - None of the mentioned
    answer: 2
    explanation: In order to implement lexical scoping, the internal state of a JavaScript function object must include not only the code of the function but also a reference to the current scope chain.
    keyConcept: Array And Function
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: What is a closure?
    options:
      - Function objects
      - Scope where function’s variables are resolved
      - Both Function objects and Scope where function’s variables are resolved
      - None of the mentioned
    answer: 2
    explanation: A combination of a function object and a scope (a set of variable bindings) in which the function’s variables are resolved is called a closure.
    keyConcept: Array And Function
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: Which of the following are examples of closures?
    options:
      - Objects
      - Variables
      - Functions
      - All of the mentioned
    answer: 3
    explanation: "Technically, all JavaScript functions are closures: they are objects, and they have a scope chain associated with them."
    keyConcept: Array And Function
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: Which of the following uses a lot of CPU cycles?
    options:
      - GUI
      - Statically generated graphics
      - Dynamically generated graphics
      - All of the mentioned
    answer: 2
    explanation: Dynamically generating graphics from real-time data uses a lot of CPU cycles.
    keyConcept: Array And Function
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: "Consider the following code snippet : var scope = \"global scope\" ; function checkscope () { var scope = \"local scope\" ; function f () { return scope; } return f; What is the function of the above code snippet?"
    options:
      - Returns value null
      - Returns exception
      - Returns the value in scope
      - None of the mentioned
    answer: 2
    explanation: The above code snippet returns the value in scope.
    keyConcept: Array And Function
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: What is the fundamental rule of lexical scoping?
    options:
      - Functions are declared in the scope
      - Functions are executed using scope chain
      - All of the mentioned
      - None of the mentioned
    answer: 1
    explanation: The fundamental rule of lexical scoping is that the JavaScript functions are executed using the scope chain that was in effect when they were defined.
    keyConcept: Array And Function
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: What is the opposite approach to the lexical scoping?
    options:
      - Literal scoping
      - Static scoping
      - Dynamic scoping
      - Generic scoping
    answer: 2
    explanation: The opposite approach to the lexical scoping is the dynamic scoping.
    keyConcept: Array And Function
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: What is the purpose of the dynamic scoping?
    options:
      - Variables can be declared outside the scope
      - Variables must be declared outside the scope
      - Variables cannot be declared outside the scope
      - None of the mentioned
    answer: 0
    explanation: Dynamic scoping creates variables that can be called from outside the block of code in which they are defined. A variable declared in this fashion is sometimes called a public variable.
    keyConcept: Array And Function
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: Which of the algorithmic languages is lexical scoping standardized in?
    options:
      - Ada
      - Pascal
      - Modula2
      - All of the mentioned
    answer: 3
    explanation: Lexical scoping is standardized in all algorithmic languages (ALGOL), such as Ada, Pascal, and Modula2. Additionally, it is used in modern functional languages like ML and Haskel.
    keyConcept: Array And Function
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: "Consider the following code snippet : if ( !a [ i ]) continue ; What is the observation made ?"
    options:
      - Skips the undefined elements
      - Skips the non existent elements
      - Skips the null elements
      - All of the mentioned
    answer: 3
    explanation: "All of the mentioned is the correct answer to “Consider the following code snippet : if ( !a [ i ]) continue ; What is the observation made”. This question is standard in competitive examination syllabi for Array And Function."
    keyConcept: Array And Function
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: "Consider the following code snippet : var a = [ 1 , 2 , 3 , 4 , 5 ] ; a . slice ( 0 , 3 ) ; What is the possible output for the above code snippet ?"
    options:
      - Returns [1,2,3]
      - Returns [4,5]
      - Returns [1,2,3,4]
      - Returns [1,2,3,4,5]
    answer: 0
    explanation: "Returns [1,2,3] is the correct answer to “Consider the following code snippet : var a = [ 1 , 2 , 3 , 4 , 5 ] ; a . slice ( 0 , 3 ) ; What is the possible output for the above code snippet”. This question is standard in competitive examination syllabi for Array And Function."
    keyConcept: Array And Function
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: The reduce and reduceRight methods follow a common operation called
    options:
      - filter and fold
      - inject and fold
      - finger and fold
      - fold
    answer: 1
    explanation: inject and fold is the correct answer to “The reduce and reduceRight methods follow a common operation called”. This question is standard in competitive examination syllabi for Array And Function.
    keyConcept: Array And Function
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: Do functions in JavaScript necessarily return a value ?
    options:
      - It is mandatory
      - Not necessary
      - Few functions return values by default
      - All of the mentioned
    answer: 2
    explanation: Few functions return values by default is the correct answer to “Do functions in JavaScript necessarily return a value”. This question is standard in competitive examination syllabi for Array And Function.
    keyConcept: Array And Function
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: What is the difference between the two lines given below ? !!( obj1 && obj2 ) ; ( obj1 && obj2 ) ;
    options:
      - Both the lines result in a boolean value “True”
      - Both the lines result in a boolean value “False”
      - Both the lines checks just for the existence of the object alone
      - The first line results in a real boolean value whereas the second line merely checks for the existence of the objects
    answer: 3
    explanation: The first line results in a real boolean value whereas the second line merely checks for the existence of the objects is the correct answer to “What is the difference between the two lines given below ? !!( obj1 && obj2 ) ; ( obj1 && obj2 ) ;”. This question is standard in competitive examination syllabi for Array And Function.
    keyConcept: Array And Function
    testedIn:
      - FPSC
      - PPSC
---


