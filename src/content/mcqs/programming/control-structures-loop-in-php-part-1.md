---
title: Control Structures_Loop In Php — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Control Structures_Loop In Php — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: control-structures-loop-in-php-part-1
topicName: Control Structures_Loop In Php — Part 1
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
    question: What will be the output of the following PHP code? <?php $x; if ($x) print "hi" ; else print "how are u" ; ?>
    options:
      - how are u
      - hi
      - error
      - no output
    answer: 0
    explanation: Uninitialized x is set to 0, thus if condition fails.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: What will be the output of the following PHP code ? <?php $x = 0 ; if ($x ++ ) print "hi" ; else print "how are u" ; ?>
    options:
      - hi
      - no output
      - error
      - how are u
    answer: 3
    explanation: x is incremented after if which evaluates to false.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What will be the output of the following PHP code ? <?php $x; if ($x == 0 ) print "hi" ; else print "how are u" ; print "hello" ?>
    options:
      - how are uhello
      - hihello
      - hi
      - no output
    answer: 1
    explanation: else condition without brackets performs the following statements only.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What will be the output of the following PHP code ? <?php $x = 0 ; if ($x == 1 ) if ($x >= 0 ) print "true" ; else print "false" ; ?>
    options:
      - "true"
      - "false"
      - error
      - no output
    answer: 3
    explanation: The nested for loop is not entered if outer condition is false.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: What will be the output of the following PHP code ? <?php $a = 1 ; if ($a -- ) print "True" ; if ($a ++ ) print "False" ; ?>
    options:
      - "true"
      - "false"
      - error
      - no output
    answer: 0
    explanation: Due to post increment and post decrement only the first condition is satisfied.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What will be the output of the following PHP code ? <?php $a = 1 ; if ( echo $a) print "True" ; else print "False" ; ?>
    options:
      - "true"
      - "false"
      - error
      - no output
    answer: 2
    explanation: echo does not return anything so if condition is empty.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What will be the output of the following PHP code ? <?php $a = 1 ; if ( print $a) print "True" ; else print "False" ; ?>
    options:
      - "true"
      - "false"
      - error
      - no output
    answer: 0
    explanation: print returns 1 if it prints anything.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What will be the output of the following PHP code ? <?php $a = 10 ; if ( 1 ) print "all" ; else print "some" else print "none" ; ?>
    options:
      - all
      - some
      - error
      - none
    answer: 2
    explanation: Hanging else statement.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What will be the output of the following PHP code ? <?php $a = 10 ; if ( 0 ) print "all" ; if else print "some" ?>
    options:
      - all
      - some
      - error
      - no output
    answer: 2
    explanation: No else statement to end the if statement.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What will be the output of the following PHP code ? <?php $a = ""; if ( $a ) print "all" ; if else print "some"; ?>
    options:
      - all
      - some
      - error
      - no output
    answer: 1
    explanation: Empty string is evaluated to 0.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What will be the output of the following PHP code ? <?php $a = "a" ; if ( $a ) print "all" ; else print "some" ; ?>
    options:
      - all
      - some
      - error
      - no output
    answer: 0
    explanation: The value of a is evaluated to 1 as it has a value.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: What will be the output of the following PHP code ? <?php $x = 10 ; $y = 20 ; if ( $x > $y + $y != 3 ) print "hi" ; else print "how are u" ; ?>
    options:
      - how are u
      - hi
      - error
      - no output
    answer: 1
    explanation: Expression evaluates to true.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What will be the output of the following PHP code ? <?php $x = 10 ; $y = 20 ; if ( $x > $y && 1 || 1 ) print "hi" ; else print "how are u" ; ?>
    options:
      - how are u
      - hi
      - error
      - no output
    answer: 1
    explanation: Expression evaluates to true.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What will be the output of the following PHP code ? <?php if ( 0.1 ) print "hi" ; else print "how are u" ; ?>
    options:
      - how are u
      - hi
      - error
      - no output
    answer: 1
    explanation: Expression evaluates to true.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What will be the output of the following PHP code ? <?php if ( 0.0 ) print "hi" ; else print "how are u" ; ?>
    options:
      - how are u
      - hi
      - error
      - no output
    answer: 0
    explanation: Expression evaluates to false.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What will be the output of the following PHP code ? <?php if (print "0" ) print "hi" ; else print "how are u" ; ?>
    options:
      - 0how are u
      - 0hi
      - hi
      - how are u
    answer: 1
    explanation: Expression evaluates to true as print returns 1.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What will be the output of the following PHP code ? <?php $x = 1 ; if ( $x == 2 ) print "hi" ; else if ($x = 2 ) print $x; else print "how are u" ; ?>
    options:
      - error
      - "2"
      - hi
      - how are u
    answer: 1
    explanation: Enters if else as first condition is false and thus x is set to 2.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: What will be the output of the following PHP code ? <?php $x = 1 ; if ( $x = $x & 0 ) print $x ; else print "how are u" ; ?>
    options:
      - "0"
      - "1"
      - error
      - how are u
    answer: 3
    explanation: x&0 is 0,thus evaluated to false.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: What will be the output of the following PHP code ? <?php $x = 1 ; if ($x = $x & 0 ) print $x; else break ; ?>
    options:
      - "0"
      - "1"
      - error
      - no output
    answer: 2
    explanation: break is not defined for a if else ladder.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What will be the output of the following PHP code ? <?php $x = 10 ; $y = 5 ; $z = 3 ; if ($x / $y / $z) print "hi" ; else print "hello" ; ?>
    options:
      - hi
      - hello
      - error
      - no output
    answer: 0
    explanation: In php division returns a float that is a non zero value thus evaluates to true.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: What will be the output of the following PHP code ? <?php if ( !print "hi" ) if ( print "hello" ) print "hi" ; ?>
    options:
      - hi
      - hihellohi
      - hihi
      - no output
    answer: 0
    explanation: Print returns true and thus the first if statement also is not executed.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What will be the output of the following PHP code ? <?php if ( print "hi" - 1 ) print "hello" ?>
    options:
      - hi
      - hihello
      - error
      - no output
    answer: 2
    explanation: print returns true and when 1 is subtracted it is syntax error.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: What will be the output of the following PHP code ? <?php $x = 1 ; if ($x -- ) print "hi" $x -- ; else print "hello" ?>
    options:
      - hi
      - hello
      - error
      - no output
    answer: 2
    explanation: The if statement has no brackets and it expects a else/else if after a if.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: What will be the output of the following PHP code ? <?php $a = 10 ; $b = 11 ; if ($a < ++ $a || $b < ++ $b) print "hello" ; else print "hi" ; ?>
    options:
      - hi
      - hello
      - error
      - no output
    answer: 0
    explanation: The operator precedence of ++ is higher than <,thus the incremenrt happens first and then compared.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: What will be the output of the following PHP code ? <?php $a = 2 ; if ($a -- - -- $a - $a) print "hello" ; else print "hi" ; ?>
    options:
      - hi
      - hello
      - error
      - no output
    answer: 1
    explanation: Computing the expression in the if clause,it sums upto to 2 which is a positive value.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: What will be the output of the following PHP code ? <?php $a = "hello" ; if ($a . length) print $a . length; else print "hi" ; ?>
    options:
      - hellolength
      - "5"
      - hi
      - error
    answer: 0
    explanation: The . operator appends a string and returns true.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: What will be the output of the following PHP code ? <?php $a = "hello" ; if ( strlen( $a ) ) print strlen ($a); else print "hi" ; ?>
    options:
      - hellolength
      - "5"
      - hi
      - error
    answer: 1
    explanation: The function strlen($a) gives the length of the string,5, which is considered true.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: What will be the output of the following PHP code ? <?php $a = "1" ; $b = "0" ; if ( ( int ) $a && $b) print "hi" ; else print "hello" ; ?>
    options:
      - hello
      - no output
      - hi
      - error
    answer: 0
    explanation: The expression is evaluated with values contained in the string, even without typecasting.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: "What will be the output of the following PHP code ? <?php $a = \"1\" ; switch ( $a ) { case 1 : print \"hi\" ; case 2 : print \"hello\" ; default : print \"hi1\" ; } ?>"
    options:
      - hihellohi1
      - hi
      - hihi1
      - hi1
    answer: 0
    explanation: As break is not provided it executes all the cases.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: "What will be the output of the following PHP code ? <?php $a = \"2\" ; switch ( $a ) { case 1 : print \"hi\" ; case 2 : print \"hello\" ; break ; default : print \"hi1\" ; } ?>"
    options:
      - hihellohi1
      - hello
      - hihi1
      - hi1
    answer: 1
    explanation: As hello is provided after case2 it breaks the loop.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: "What will be the output of the following PHP code ? <?php $a = \"1\" ; switch ( $a ) { case 1 : break ; print \"hi\" ; case 2 : print \"hello\" ; break ; default : print \"hi1\" ; } ?>"
    options:
      - hihellohi1
      - no output
      - hihi1
      - hi1
    answer: 1
    explanation: As break is provided before print statement in case 2 it breaks the loop before printing.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: "What will be the output of the following PHP code ? <?php $a = \"1\" ; $a = 1 ; $b = 1 ; switch ( $a ) { case $a * $b : print \"hi\" ; break ; case $a / $b : print \"hello\" ; break ; default : print \"hi1\" ; } ?>"
    options:
      - hihellohi1
      - hi
      - hihello
      - hi1
    answer: 1
    explanation: It checks the first case, when it finds it equal it will perform it breaks out.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: "What will be the output of the following PHP code ? <?php $a = 97 ; switch (? $a ) { case \"a\" : print \"hi\" ; break ; case 97 : print \"hello\" ; break ; default : print \"hi1\" ; } ?>"
    options:
      - hihellohi1
      - hi
      - hihello
      - hello
    answer: 3
    explanation: Downcasting does not happen in case,it compares only with its data type.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: "What will be the output of the following PHP code ? <?php $b = 1 ; switch ( $b ) { case 1.0 : print \"hi\" ; break ; case 1 : print \"hello\" ; break ; default : print \"hi1\" ; } ?>"
    options:
      - hihellohi1
      - hi
      - hihello
      - hello
    answer: 0
    explanation: Upcasting does happen in case,it compares it with 1.0 and thus prints hi and exits.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: "What will be the output of the following PHP code ? <?php const $b = 1 ; switch ( $b ) { case 1 : print \"hi\" ; break ; case 1 : print \"hello\" ; break ; default : print \"hi1\" ; } ?>"
    options:
      - error
      - hi
      - hihello
      - hello
    answer: 0
    explanation: Constants cannot be used in switch cases.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: "What will be the output of the following PHP code ? <?php $b = 1 ; switch (print $b ) { case 2 : print \"hello\" ; break ; case 1 : print \"hi\" ; break ; default : print \"hi1\" ; } ?>"
    options:
      - 1hello
      - 1hi
      - 1hi1
      - error
    answer: 1
    explanation: Print returns 1,thus it gives case 1.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: "What will be the output of the following PHP code ? <?php switch ( $b ) { case 2 : print \"hello\" ; break ; case 1 : print \"hi\" ; break ; } ?>"
    options:
      - hello
      - hi
      - no output
      - error
    answer: 2
    explanation: If that case does not exist then it searches for default and on not finding it does nothing.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: "What will be the output of the following PHP code ? <?php switch ( $b ) { case 2 : print \"hello\" ; break ; case b : print \"hi\" ; break ; } ?>"
    options:
      - hello
      - hi
      - no output
      - error
    answer: 2
    explanation: Case cannot be defined by a variable.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: What will be the output of the following PHP code ? <?php while () { print "hi" ; } ?>
    options:
      - infinite loop
      - hi
      - no output
      - error
    answer: 3
    explanation: The while loop cannot be defined without a condition.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: What will be the output of the following PHP code ? <?php do { print "hi" ; } while ( 0 ) ; print "hello" ; ?>
    options:
      - infinite loop
      - hihello
      - hello
      - error
    answer: 1
    explanation: The do while loop executes atleast once as the condition is in the while loop.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
---


