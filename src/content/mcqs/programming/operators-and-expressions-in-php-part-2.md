---
title: Operators And Expressions In Php — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Operators And Expressions In Php — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: operators-and-expressions-in-php-part-2
topicName: Operators And Expressions In Php — Part 2
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
    question: What will be the output of the following PHP code ? <?php echo $red; ?>
    options:
      - "0"
      - Nothing
      - "True"
      - Error
    answer: 1
    explanation: There will no output returned as the variable $red does not hold any value.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: What will be the output of the following PHP code ? <?php $four4 = 4 ; $three3 = 3 ; $two2 = 2 ; echo $four4 + $three3 / $two2 - 1 ; ?>
    options:
      - "4.5"
      - "7"
      - "3.5"
      - Error
    answer: 0
    explanation: You can use numbers in a variable name.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What will be the output of the following PHP code ? <?php $4four = 4 ; $3three = 3 ; $2two = 2 ; echo $4four + $3three / $2two - 1 ; ?>
    options:
      - "4.5"
      - "7"
      - "3.5"
      - Error
    answer: 3
    explanation: A variable name can not start with a numeric value.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What will be the output of the following PHP code ? <?php int $one = 1 ; echo "$one" ; ?>
    options:
      - "0"
      - "1"
      - $one
      - Error
    answer: 3
    explanation: Unlike other programming languages there are no data types in PHP.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: What will be the output of the following PHP code ? <?php var $one = 1 ; var $two = 2 ; echo $one / $two * $one / $two * $two; ?>
    options:
      - "1"
      - "0"
      - "0.5"
      - Error
    answer: 3
    explanation: You can not use var before a variable name.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What will be the output of the following PHP code ? <?php $hello = "Hello World" ; $bye = "Bye" ; echo $hello; "$bye" ; ?>
    options:
      - Hello World
      - Bye
      - Hello worldBye
      - Error
    answer: 0
    explanation: Since there is a semi-colon in between $hello and $bye, the line ends at $hello. However $bye would have printed if a echo was present before “$bye”.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What will be the output of the following PHP code ? <?php $x; echo "$x" ; ?>
    options:
      - "0"
      - "1"
      - Nothing
      - Error
    answer: 2
    explanation: Since the variable x is not initialised it is not storing any value, therefore nothing will be printed on the screen.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What will be the output of the following PHP code ? <?php $x = 5 ; { $x = 10 ; echo "$x" ; } echo "$x" ; ?>
    options:
      - "1010"
      - "105"
      - "510"
      - error
    answer: 0
    explanation: Varibale x stores the value 10 and not 5.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What will be the output of the following PHP code ? <?php $x = 5 ; function fun () { echo "$x" ; } fun () ; ?>
    options:
      - "0"
      - "5"
      - Nothing
      - Error
    answer: 2
    explanation: The variable x is not defined inside the function fun(), therefore nothing is printed on the screen.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What will be the output of the following PHP code ? <?php $x = 5 ; function fun () { $x = 10 ; echo "$x" ; } fun () ; echo "$x" ; ?>
    options:
      - "0"
      - "105"
      - "510"
      - Error
    answer: 1
    explanation: First when the function is called variable x is initialised to 10 so 10 is printed later the global value 5 is printed.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What will be the output of the following PHP code ? <?php $x = 4 ; $y = 3 ; function fun ( $x = 3 , $y = 4 ) { $z = $x + $y / $y + $x; echo "$z" ; } echo $x; echo $y; echo $z; fun ( $x, $y ) ; ?>
    options:
      - "43"
      - "943"
      - "349"
      - "439"
    answer: 3
    explanation: Firstly, the statements outside the function are printed, since z is not defined it’ll no value is printed for z. Next the function is called and the value of z inside the function is printed.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: What will be the output of the following PHP code ? <?php $x = 4 ; $y = 3 ; function fun ( $x, $y ) { $z = $x + $y / $y + $x; echo "$z" ; } echo $x; echo $y; echo $z; fun ( 3 , 4 ) ; ?>
    options:
      - "437"
      - "439"
      - "349"
      - "347"
    answer: 0
    explanation: It is same as above but the value passed into the function is 3,4 and not 4,3. Therefore the difference in answer.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What will be the output of the following PHP code ? <?php function fun ( $x,$y ) { $x = 4 ; $y = 3 ; $z = $x + $y / $y + $x; echo "$z" ; } fun ( 3 , 4 ) ; ?>
    options:
      - "7"
      - "9"
      - "0"
      - Error
    answer: 1
    explanation: Value 3, 4 is passed to the function but that is lost because x and y are initialised to 4 and 3 inside the function. Therefore we get the given result.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What will be the output of the following PHP code ? <?php $x = 3 , 4 , 5 , 6 ; echo "$x" ; ?>
    options:
      - "3"
      - "4"
      - "6"
      - Error
    answer: 3
    explanation: In C you won’t get an error but in PHP you’ll get a syntax error.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What will be the output of the following PHP code ? <?php $a = 10 ; $b = 4 ; $c = fun ( 10 , 4 ) ; function fun ( $a,$b ) { $b = 3 ; return $a - $b + $b - $a; } echo $a; echo $b; echo $c; ?>
    options:
      - "1040"
      - "1410"
      - "1400"
      - "4100"
    answer: 0
    explanation: "Understanding the PHP Code: The code defines a function named 'fun' that takes two arguments, $a and $b . Inside the function: The value of $b is changed to 3. The function calculates $a - $b + $b - $a , which simplifies to 0 (because the $a and -a cancel each other out, and $b and -b cancel each other out). The function then returns this result (which is 0). Outside the function: The values of $a and $b are initially set to 10 and 4 respectively. The function 'fun' is called with 10 and 4 as arguments, and the returned value (0) is assigned to $c . Finally, the code prints the values of $a , $b , and $c . Tracing the Output: $a remains 10 (it is not modified within the function because of pass-by-value). $b remains 4 (the change inside the function doesn't affect the global $b ). $c becomes 0 (the return value of the function). Therefore, the code will print \"1040\". Correct Option: The correct answer is Option A: 1040"
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What will be the output of the following PHP code ? <?php $a = "$winner" ; $b = "/$looser" ; echo $a,$b; ?>
    options:
      - $winner/$looser
      - /$looser
      - /
      - $looser
    answer: 2
    explanation: Since variables $winner and $looser is not defined we only see / as output.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What will be the output of the following PHP code ? <?php $x = 5 ; $y = 10 ; function fun () { $GLOBALS[ 'y' ] = $GLOBALS[ 'x' ] + $GLOBALS[ 'y' ] ; } fun () ; echo $y; ?>
    options:
      - "5"
      - "10"
      - "15"
      - Error
    answer: 2
    explanation: You can access the global variable using $GLOBALS[‘globalvariablename’].
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: What will be the output of the following PHP code ? <?php $x = 5 ; $y = 10 ; function fun () { $y = $GLOBALS[ 'x' ] + $GLOBALS[ 'y' ] ; } fun () ; echo $y; ?>
    options:
      - "5"
      - "10"
      - "15"
      - Error
    answer: 1
    explanation: The value of global variable y does not change therefore it’ll print 10;
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: What will be the output of the following PHP code ? <?php function fun () { $x = 0 ; echo $x; $x ++ ; } fun () ; fun () ; fun () ; ?>
    options:
      - "012"
      - "123"
      - "000"
      - "111"
    answer: 2
    explanation: Every time the function is called the value of x becomes 0, therefore we get 0 on every function call.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What will be the output of the following PHP code ? <?php function fun () { static $x = 0 ; echo $x; $x ++ ; } fun () ; fun () ; fun () ; ?>
    options:
      - "012"
      - "123"
      - "111"
      - Error
    answer: 0
    explanation: When static is used, each time the function is called, that variable will still have the information it contained from the last time the function was called.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: What will be the output of the following PHP code ? <?php static $x = 0 ; function fun () { echo $x; $x ++ ; } fun () ; fun () ; fun () ; ?>
    options:
      - "012"
      - "123"
      - Nothing
      - Error
    answer: 2
    explanation: Since variable x is not defined inside the function fun(), nothing will be printed.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What will be the output of the following PHP code ? <?php $x = 0 ; function fun () { echo $GLOBALS[ 'x' ] ; $GLOBALS[ 'x' ]++ ; } fun () ; fun () ; fun () ; ?>
    options:
      - "000"
      - "012"
      - "123"
      - Error
    answer: 1
    explanation: Since, we are using $GLOBALS[‘x’], the question is similar to question 7.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: What will be the output of the following PHP code ? <?php $x = 0 ; function fun () { echo $GLOBALS[ 'x' ] ; $x ++ ; } fun () ; fun () ; fun () ; ?>
    options:
      - "000"
      - "012"
      - Nothing
      - Error
    answer: 0
    explanation: This question is similar to question 6.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: What will be the output of the following PHP code ? <?php $a = 10 ; echo ++ $a; echo $a ++ ; echo $a; echo ++ $a; ?>
    options:
      - "11111213"
      - "11121213"
      - "11111212"
      - "11111112"
    answer: 0
    explanation: ++$a increments a and then prints it,$a++ prints and then increments.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: What will be the output of the following PHP code ? <?php $a = 12 ; -- $a; echo $a ++ ; ?>
    options:
      - "11"
      - "12"
      - "10"
      - error
    answer: 0
    explanation: The + operator does union of arrays in that order, then the === operator compares key and value pairs.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: What will be the output of the following PHP code ? <?php $x = "test" ; $y = "this" ; $z = "also" ; $x .= $y .= $z ; echo $x; echo $y; ?>
    options:
      - testthisthisalso
      - testthis
      - testthisalsothisalso
      - error at line 4
    answer: 2
    explanation: The x .= y is a shorthand for x = x.y and this is evaluated from right to left.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: What will be the output of the following PHP code ? <?php $x = 1 ; $y = 2 ; if (++ $x == $y ++) { echo "true " , $y, $x; } ?>
    options:
      - no output
      - true 23
      - true 22
      - true 33
    answer: 1
    explanation: x is preincremented and y is post incremented thus both are 2 in the if condition, later y is incremented.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: What will be the output of the following PHP code ? <?php $y = 2 ; $w = 4 ; $y *= $w /= $y; echo $y, $w; ?>
    options:
      - "80.5"
      - "44"
      - "82"
      - "42"
    answer: 3
    explanation: Expression is evaluated from right to left.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: What will be the output of the following PHP code ? <?php $y = 2 ; if ( $y -- == ++ $y ) { echo $y; } ?>
    options:
      - "2"
      - "1"
      - "3"
      - no output
    answer: 0
    explanation: First $y = 2 is compared to and then decremented, then incremented and compared to $y = 2.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: What will be the output of the following PHP code ? <?php $y = 2 ; if (** $y == 4 ) { echo $y; } ?>
    options:
      - "4"
      - "2"
      - error at line2
      - no output
    answer: 2
    explanation: The ** is not a valid operator,only ++ and — exist.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: What will be the output of the following PHP code ? <?php $y = 2 ; if (-- $y == 2 || $y xor -- $y ) { echo $y; } ?>
    options:
      - "1"
      - "0"
      - "2"
      - no output
    answer: 1
    explanation: –$y == 2 is false but y is decremented, the xor gives true if only one of the operands are true, thus 1 xor 0 is true.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: What will be the output of the following PHP code ? <?php $y = 2 ; if (-- $y <> ($y != $y ++)) { echo $y; } ?>
    options:
      - "1"
      - "0"
      - "2"
      - no output
    answer: 1
    explanation: –$y == 2 is false but y is decremented, the xor gives true if only one of the operands are true, thus 1 xor 0 is true.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: What will be the output of the following PHP code ? <?php echo $x -- != ++ $x; ?>
    options:
      - "1"
      - "0"
      - error
      - no output
    answer: 0
    explanation: Automatically x is declared and initialized to 0,then decremented and compared with its increments, thus returns 1.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: What will be the output of the following PHP code ? <?php $auth = 1 ; $status = 1 ; if ( $result = (( $auth == 1 ) && ( $status != 0 ))) { print "result is $result" ; } ?>
    options:
      - result is true
      - result is 1
      - error
      - no output
    answer: 1
    explanation: Result is x&&y which returns 1 if both x and y are true.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: What will be the output of the following PHP code ? <?php echo 5 * 9 / 3 + 9 ; ?>
    options:
      - "24"
      - "3.7"
      - "3.85"
      - "0"
    answer: 0
    explanation: Operator precedence order must be followed.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: What will be the output of the following PHP code ? <?php $i = 0 ; $j = 0 ; if ( $i && ( $j = $i + 10 )) { echo "true" ; } echo $j; ?>
    options:
      - "10"
      - "0"
      - true0
      - true10
    answer: 1
    explanation: In if condition when the first case is 0 and is an && operation then the second command is not executed.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: What will be the output of the following PHP code ? <?php $i = 10 ; $j = 0 ; if ( $i || ( $j = $i + 10 )) { echo "true" ; } echo $j; ?>
    options:
      - "20"
      - true0
      - "0"
      - true20
    answer: 1
    explanation: In if condition when the first case is 1 and is an || operation then the second command is not executed.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: What will be the output of the following PHP code ? <?php $i = 1 ; if ( $i ++ && ( $i == 1 )) printf( "Yesn$i" ) ; else printf( "Non$i" ) ; ?>
    options:
      - No 2
      - Yes 1
      - Yes 2
      - No 1
    answer: 0
    explanation: The first condition returns true and increments but the second condition is false.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: What will be the output of the following PHP code ? <?php $a = 1 ; $b = 3 ; $d = $a ++ + ++ $b; echo $d; ?>
    options:
      - "5"
      - "4"
      - "3"
      - error
    answer: 0
    explanation: Post increment of a is done after expression evaluation.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: What will be the output of the following PHP code ? <?php $a = 1 ; $b = 1 ; $d = 1 ; print ++ $a + ++ $a + $a ++ ; print $a ++ + ++ $b; print ++ $d + $d ++ + $a ++ ; ?>
    options:
      - "869"
      - "742"
      - "368"
      - error
    answer: 0
    explanation: Follow the order of post and pre increments.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
---


