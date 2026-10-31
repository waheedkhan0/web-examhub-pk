---
title: Functions — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Functions — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: functions-part-2
topicName: Functions — Part 2
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
    question: What will be the output of the following PHP code ? <?php $var = 10 ; function one () { echo $var; } one () ; ?>
    options:
      - Error
      - "10"
      - No Output
      - None of the Mentioned
    answer: 2
    explanation: $var is not global and hence is not available for one().
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: What will be the output of the following PHP code ? <?php function mine ( $m ) { if ( $m < 0 ) echo "less than 0" ; if ( $ >= 0 ) echo "Not True" ; } mine ( 0 ) ; ?>
    options:
      - Less Than 0
      - Not True
      - No Output
      - None of the Mentioned
    answer: 1
    explanation: Argument is 0.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What will be the output of the following PHP code ? <?php $x = 75 ; $y = 25 ; function addition () { $GLOBALS [ 'z' ] = $GLOBALS [ 'x' ] + $GLOBALS [ 'y' ] ; } addition () ; echo $z; ?>
    options:
      - "100"
      - error
      - "75"
      - "25"
    answer: 0
    explanation: z is a variable present within the $GLOBALS array, it is also accessible from outside the function!
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What will be the output of the following PHP code ? <?php function 2 myfunc () { echo "Hello World" ; } 2 myfunc () ; ?>
    options:
      - Hello World
      - No Output
      - ERROR
      - None of the mentioned
    answer: 2
    explanation: Function cannot begin with a number.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: What will be the output of the following PHP code ? <?php function _func () { echo "Hello World" ; } _func () ; ?>
    options:
      - Hello World
      - No Output
      - ERROR
      - None of the mentioned
    answer: 0
    explanation: Function Begining with “_” is valid)
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What will be the output of the following PHP code ? <?php function test ( $int ) { if ( $int == 1 ) echo "This Works" ; if ( $int == 2 ) echo "This Too Seems To Work" ; } test ( 1 ) ; TEST ( 2 ) ; ?>
    options:
      - This Works
      - This Too Seems To Work
      - This WorksThis Too Seems To Work
      - ERROR
    answer: 2
    explanation: Function Is case Insensitive.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What will be the output of the following PHP code ? <?php function mine ( $num ) { $num = 2 + $num; echo $num; } mine ( 3 ) ; ?>
    options:
      - "3"
      - $num
      - "5"
      - None of the mentioned
    answer: 2
    explanation: Simple arithmetic operation.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What will be the output of the following PHP code ? <?php function movie ( $int ) { $movies = array( "Fight Club", "Kill Bill", "Pulp Fiction" ) ; echo "You Do Not Talk About " . $movie [ $integer ] ; } movie ( 0 ) ; ?>
    options:
      - I
      - You Do Not Talk About Fight Club
      - You Do Not Talk About Kill Bill
      - You Do Not Talk About Pulp Fiction
      - None of the mentioned
    answer: 0
    explanation: Simple use of arrays.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What will be the output of the following PHP code ? <?php function time ( $string ) { echo strtr( "Towe Pa55" , "ow5" , $string ) ; } time( "ims" ) ; ?>
    options:
      - Time Pa55
      - Towe Pa55
      - Towe Pass
      - Time Pass
    answer: 3
    explanation: The strtr() function translates certain characters in a string.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What will be the output of the following PHP code ? <?php function constant () { define ( "GREETING", "Welcome to Narnia" ) ; echo greeting; } ?>
    options:
      - Welcome to Narnia
      - greeting
      - ERROR
    answer: 2
    explanation: By default constants are case sensitive. Hence an error will arise.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What will be the output of the following PHP code ? <?php function constant() { define ( "GREETING" , "Welcome to Narnia" , true ) ; echo greeting; } ?>
    options:
      - Welcome to Narnia
      - greeting
      - ERROR
    answer: 0
    explanation: By default constants are case sensitive. But the third parameter in define(), if set to true, makes constants case insensitive.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: What will be the output of the following PHP code ? <?php function start ( $string ) { if ( $string < 45 ) return 20 ; else return 40 ; } $t = start ( 90 ) ; if ( $t < 20 ) { echo "Have a good day!" ; } else { echo "Have a good night!" ; } ?>
    options:
      - Have a good day!
      - Have a good night!
      - ERROR
      - None of the mentioned
    answer: 1
    explanation: Function returns 40. this is greater than 20, hence the output.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What will be the output of the following PHP code ? <?php function email () { $email = ’contact@examhub.pk’; $new = strstr ($email, ‘@'); echo $new; } email(); ?>
    options:
      - contact
      - contact@examhub.pk
      - "@examhub.pk"
      - examhub.pk
    answer: 2
    explanation: The strstr() function searches for the first occurrence of a string inside another string.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What will be the output of the following PHP code ? <?php function string () { echo strstr ( "Hello world!" , 111 ) ; } string () ; ?>
    options:
      - o world!
      - Hello world!
      - "111"
      - No Output
    answer: 0
    explanation: 111 is the ASCII value of o.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: Which one of the following is the right way of defining a function in PHP?
    options:
      - function { function body }
      - data type functionName(parameters) { function body }
      - functionName(parameters) { function body }
      - function fumctionName(parameters) { function body }
    answer: 3
    explanation: function fumctionName(parameters) { function body } is the correct answer to “Which one of the following is the right way of defining a function in PHP”. This question is standard in competitive examination syllabi for Functions.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: . . . . . converts the keys of an array into values and the values into keys.
    options:
      - array_flips()
      - array_transpose()
      - array_trans()
      - array_flip()
    answer: 3
    explanation: array_flip() is the correct answer to “. . . . . converts the keys of an array into values and the values into keys.”. This question is standard in competitive examination syllabi for Functions.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: Above usleep() function pauses PHP for . usleep(1000000);
    options:
      - 1 second
      - 1 microseconds
      - 10 seconds
      - 100 microseconds
    answer: 0
    explanation: 1 second is the correct answer to “Above usleep() function pauses PHP for . usleep(1000000);”. This question is standard in competitive examination syllabi for Functions.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: "Output will be: $array = array ( 0, 1, 2 ) ; $array = array_pad ( $array, -6, ‘NEW’ ) ;"
    options:
      - Array ( [1] => NEW [2] => NEW [3] => NEW [4] => 0 [5] => 1 [6] => 2 )
      - Array ( [-1] => NEW [-2] => NEW [-3] => NEW [-4] => 0 [-5] => 1 [-6] => 2 )
      - Array ( [0] => NEW [-1] => NEW [-2] => NEW [-3] => 0 [-4] => 1 [-5] => 2 )
      - Array ( [0] => NEW [1] => NEW [2] => NEW [3] => 0 [4] => 1 [5] => 2 )
    answer: 3
    explanation: "Array ( [0] => NEW [1] => NEW [2] => NEW [3] => 0 [4] => 1 [5] => 2 ) is the correct answer to “Output will be: $array = array ( 0, 1, 2 ) ; $array = array_pad ( $array, -6, ‘NEW’ ) ;”. This question is standard in competitive examination syllabi for Functions."
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: phpinfo() will display about? 1. OS version information 2. PHP installation 3. Variables 4. HTTP headers
    options:
      - Option 1
      - Option 2
      - Option 3
      - Option 4
      - All the Above
    answer: 4
    explanation: All the Above is the correct answer to “phpinfo() will display about? 1. OS version information 2. PHP installation 3. Variables 4. HTTP headers”. This question is standard in competitive examination syllabi for Functions.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: . . . . returns a new DateTime object.
    options:
      - getdate()
      - date_create()
      - date_sunrise()
      - date()
    answer: 1
    explanation: date_create() is the correct answer to “. . . . returns a new DateTime object.”. This question is standard in competitive examination syllabi for Functions.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: It is always necessary to use parentheses with the print function.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “It is always necessary to use parentheses with the print function.”. This question is standard in competitive examination syllabi for Functions.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: The below statement will return. $Var = substr ( ""abcdef"", -4, 1 ) ;
    options:
      - returns "f"
      - returns "d"
      - returns "c"
      - returns "cd"
    answer: 2
    explanation: returns "c" is the correct answer to “The below statement will return. $Var = substr ( ""abcdef"", -4, 1 ) ;”. This question is standard in competitive examination syllabi for Functions.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: Returning values from functions may include .....
    options:
      - Arrays
      - Objects
      - Both A & B
      - None of above
    answer: 2
    explanation: Both A & B is the correct answer to “Returning values from functions may include .....”. This question is standard in competitive examination syllabi for Functions.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: The arguments in a function are evaluated from .....
    options:
      - left to right
      - right to left
      - sometimes left to right and sometimes right to left
      - Always right to left
    answer: 0
    explanation: left to right is the correct answer to “The arguments in a function are evaluated from .....”. This question is standard in competitive examination syllabi for Functions.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: strlen() returns the length of the string on success and . . . . if the string is empty.
    options:
      - "-1"
      - "NULL"
      - Garbage value
      - "0"
    answer: 3
    explanation: 0 is the correct answer to “strlen() returns the length of the string on success and . . . . if the string is empty.”. This question is standard in competitive examination syllabi for Functions.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
---


