---
title: Control Structures_Loop In Php — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Control Structures_Loop In Php — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: control-structures-loop-in-php-part-2
topicName: Control Structures_Loop In Php — Part 2
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
    question: What will be the output of the following PHP code ? <?php $i = 0 while ( $i < 3 ) { $i ++ ; } print $i; ?>
    options:
      - "2"
      - "3"
      - "0"
      - "1"
    answer: 1
    explanation: The increment happens and then the check happens.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: What will be the output of the following PHP code ? <?php $i = 0 do { $i ++ ; } while ( $i < 3 ) ; print $i; ?>
    options:
      - "2"
      - "3"
      - "0"
      - "1"
    answer: 1
    explanation: The increment happens and then the check happens.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What will be the output of the following PHP code ? <?php $i = 0 while ( $i ++ ) { print $i; } print $i; ?>
    options:
      - "0"
      - infinite loop
      - "01"
      - "1"
    answer: 3
    explanation: As it is a post increment, it checks and then does not enter the loop, thus prints only 1.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What will be the output of the following PHP code ? <?php $i = "" ; while ( $i ) { print "hi" ; } print "hello" ; ?>
    options:
      - hello
      - infinite loop
      - hihello
      - error
    answer: 0
    explanation: While accept does not accept anything other than a 0 or any other number as false and true.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: What will be the output of the following PHP code ? <?php $i = "" ; while ( $i ) { print "hi" ; } while ( $i < 8 ) $i ++ ; print "hello" ; ?>
    options:
      - Hi is printed 8 times, hello 7 times and then hi 2 times
      - Hi is printed 10 times, hello 7 times
      - Hi is printed once, hello 7 times
      - Hi is printed once, hello 7 times and then hi 2 times
    answer: 3
    explanation: The while loop ends only when a } is encountered.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What will be the output of the following PHP code ? <?php $i = 0 ; while ( $i = 10 ) { print "hi" ; } print "hello" ; ?>
    options:
      - hello
      - infinite loop
      - hihello
      - error
    answer: 1
    explanation: While condition always gives 1.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What will be the output of the following PHP code ? <?php $i = "" ; while ( $i = 10 ) { print "hi" ; } print "hello" ; ?>
    options:
      - hello
      - infinite loop
      - hihello
      - error
    answer: 1
    explanation: While condition always gives 1.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What will be the output of the following PHP code ? <?php $i = 5 ; while (-- $i > 0 ) { $i ++ ; print $i; print "hello" ; } ?>
    options:
      - 4hello4hello4hello4hello4hello…..infinite
      - 5hello5hello5hello5hello5hello…..infinite
      - no output
      - error
    answer: 0
    explanation: i is decremented in the first while execution and then continuously incremented back.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What will be the output of the following PHP code ? <?php $i = 5 ; while (-- $i > 0 && ++ $i ) { print $i; } ?>
    options:
      - "5"
      - 555555555…infinitely
      - "54321"
      - error
    answer: 1
    explanation: As it is && operator it is being incremented and decremented continuously.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What will be the output of the following PHP code ? <?php span> $i = 0 ; while ( ? ++ $i || -- $i ) { print $i; } ?>
    options:
      - 1234567891011121314….infinitely
      - 01234567891011121314…infinitely
      - "1"
      - "0"
    answer: 0
    explanation: As it is || operator the second expression is not evaluated and i is always incremented, in the first case to 1.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What will be the output of the following PHP code ? <?php $i = 0 ; while (++ $i && -- $i ) { print $i; } ?>
    options:
      - 1234567891011121314….infinitely
      - 01234567891011121314…infinitely
      - no output
      - error
    answer: 2
    explanation: The first condition itself fails thus the loop exists.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: What will be the output of the following PHP code ? <?php $i = 0 ; while ((-- $i > ++ $i ) - 1 ) { print $i; } ?>
    options:
      - 00000000000000000000….infinitely
      - "-1-1-1-1-1-1-1-1-1-1…infinitely"
      - no output
      - error
    answer: 0
    explanation: (–$i > ++$i) evaluates to 0 but -1 makes it enters the loop and prints i.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What will be the output of the following PHP code ? <?php $i = 2 ; while (++ $i ) { while ( $i --> 0 ) print $i; } ?>
    options:
      - "210"
      - "10"
      - no output
      - infinite loop
    answer: 0
    explanation: The loop ends when i becomes 0.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What will be the output of the following PHP code ? <?php $i = 0 ; for ( $i ) { print $i; } ?>
    options:
      - "0"
      - infinite loop
      - no output
      - error
    answer: 3
    explanation: Wrong syntax for for loop.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What will be the output of the following PHP code ? <?php for ( $x = 0 ; $x <= 10 ; print ++ $x ) { print ++ $x; } ?>
    options:
      - "123456789101112"
      - "12345678910"
      - "1234567891011"
      - infinite loop
    answer: 0
    explanation: The value of x is incremented and printed twice before checking,thus last loop it prints 11 and 12.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What will be the output of the following PHP code ? <?php for ( $x =1 ; $x < 10 ; ++ $x) { print "*t" ; } ?>
    options:
      - "**********"
      - "*********"
      - "***********"
      - infinite loop
    answer: 1
    explanation: Loop runs from 1 to 9 i.e 9 times.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What will be the output of the following PHP code ? <?php for ( $x = - 1 ; $x < 10 ; -- $x ) { print $x; } ?>
    options:
      - "123456789101112"
      - "12345678910"
      - "1234567891011"
      - infinite loop
    answer: 3
    explanation: The value of x is decremented thus making it an infinite loop.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: What will be the output of the following PHP code ? <?php $x; for ( $x = - 3 ; $x < - 5 ; ++ $x ) { print ++ $x; } ?>
    options:
      - "-3-4-5"
      - "-3-4"
      - infinite loop
      - no output
    answer: 3
    explanation: The loop is not even entered as x is initially 0.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: What will be the output of the following PHP code ? <?php for ( $ i++ ; $i == 1 ; $i = 2 ) print "In for loop " ; print "After loopn" ; ?>
    options:
      - In for loop
      - After for loop
      - In for loopAfter for loop
      - Infinite loop
    answer: 2
    explanation: The loop runs only once as value of x is incremented.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What will be the output of the following PHP code ? <?php for ( 1 ; $i == 1 ; $i = 2 ) print "In for loop " ; print "After loopn" ; ?>
    options:
      - In for loop
      - After for loop
      - In for loopAfter for loop
      - Infinite loop
    answer: 1
    explanation: The loop does not run as i initialized in check statement will be zero.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: What will be the output of the following PHP code ? <<php for ( $i == 2 ; ++ $i == $i; ++ $i ) print "In for loop " ; print "After loopn" ; ?>
    options:
      - In for loopIn for loopIn for loopIn for loop……infinitely
      - After for loopAfter for loopAfter for loop……..infinitely
      - In for loopAfter for loopIn for loopAfter for loopIn for loopAfter for loop…..infinitely
      - After for loop
    answer: 0
    explanation: The loop never exits as the condition ++X == X is always satisfied,evaluated from right to left.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What will be the output of the following PHP code ? <?php for ( $x = 1 ; $x < 10 ; $x ++) for ( $y = 1 ; $y < 5 ; $y ++) print "Hello" ; ?>
    options:
      - Hello….36 times
      - Hello….45 times
      - Hello….50 times
      - Hello….40 times
    answer: 0
    explanation: 9*4 times is printed.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: What will be the output of the following PHP code ? <?php for ( $count = 1 ; $count != 20 ;$count ++) { print $count; $count ++ ; } ?>
    options:
      - Infinite
      - 123…….20
      - 1357…19
      - 13579…21
    answer: 0
    explanation: Condition always fails as count takes only odd numbers.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: What will be the output of the following PHP code ? <?php for ( $count = 1 ; $count < 20 ; $count ++) ; print $count; ?>
    options:
      - "20"
      - "19"
      - 12345678910….19
      - 12345678910….1920
    answer: 0
    explanation: The for loop has no body,it just runs till condition is satisfied.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: What will be the output of the following PHP code ? <?php for ( $count = 0 ; $count < 3 ;$count ++) ; { print "hi" ; continue ; print "hello" ; } ?>
    options:
      - hihihi
      - hihellohihellohihello
      - hellohellohello
      - hi
    answer: 0
    explanation: When continue is encountered it skips to the next iteration
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: What will be the output of the following PHP code ? <?php for ( $count = 0 ; $count < 3 ;$count ++) ; { print "hi" ; break ; print "hello" ; } ?>
    options:
      - hihihi
      - hihellohihellohihello
      - hellohellohello
      - hi
    answer: 3
    explanation: When break is encountered it leaves the loop.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: What will be the output of the following PHP code ? <?php for (++ $i; ++ $i; ++ $i ) { print $i; if ( $i == 4 ) break ; } ?>
    options:
      - "24"
      - "134"
      - "1234"
      - "1"
    answer: 0
    explanation: The order of execution is initialization, check, increment/decrement, check, increment/decrement, check, increment/decrement….so on.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: What will be the output of the following PHP code ? <?php for ( $i = 0 ;$i = - 1;$i = 1 ) { print $i; if ( $i != 1 ) break ; } ?>
    options:
      - "0"
      - infinite loop
      - "-1"
      - "1"
    answer: 2
    explanation: The order of execution is initialization, check, increment/decrement, check, increment/decrement, check, increment/decrement….so on .
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: What will be the output of the following PHP code ? <?php for ( ;; ) { print "10" ; } ?>
    options:
      - "10"
      - infinite loop
      - no output
      - error
    answer: 1
    explanation: There is no check condition to stop the execution of the loop.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: What will be the output of the following PHP code ? <?php for ( $i = 0 ; - 5 ; $i ++) { print "i" ; if ( $i == 3 ) break ; } ?>
    options:
      - 0 1 2 3 4
      - 0 1 2 3
      - 0 1 2 3 4 5
      - error
    answer: 1
    explanation: The break statement after breaks the loop after i=3,does not print anymore.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: What will be the output of the following PHP code ? <?php for ( $i = 0 ; 0 ; $i ++) { print "i" ; } ?>
    options:
      - infinite loop
      - "0"
      - no output
      - error
    answer: 2
    explanation: The condition of the loop is always false 0.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: What will be the output of the following PHP code ? <php for ( $i = 0 ; $i < 5 ; $i ++) { for ( $j = $i; $j > 0 ; $ i--) print $i; } ?>
    options:
      - infinite loop
      - 0 1 2 3 4 5
      - 0 1 0 1 2 0 1 2 3 0 1 2 3 4 0 1 2 3 4 5 0 1 2 3 4 5
      - no output
    answer: 0
    explanation: In the second loop j value is not being changed.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: What will be the output of the following PHP code ? <?php for ( $i = 0 ; $i < 5 ; $i ++) { for ( $j = $i;$j > $i; $i --) print $i; } ?>
    options:
      - infinite loop
      - 0 1 2 3 4 5
      - 0 1 0 1 2 0 1 2 3 0 1 2 3 4 0 1 2 3 4 5 0 1 2 3 4 5
      - no output
    answer: 3
    explanation: The second loop does not execute as the check condition is always false.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: What will be the output of the following PHP code ? <?php $user = array( "Ashley" , "Bale" , "Shrek" , "Blank" ) ; for ( $x = 0 ; $x < count( $user ) - 1 ; $x ++) { if ( $user [ $x ++] == "Shrek" ) continue ; printf ( $user [ $x ]) ; } ?>
    options:
      - AshleyBaleBlank
      - Bale
      - AshleyShrek
      - BaleBlank
    answer: 0
    explanation: Only Bale is printed as $x++ is done before printing and then checked.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: What will be the output of the following PHP code ? <?php for ( $i = 0 ; $i % ++ $i; $i ++) { print "i" ; } ?>
    options:
      - error
      - infinite loop
      - no output
      - "0"
    answer: 1
    explanation: Loop condition is true as i%(i+1) is a float non zero value in php.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: What will be the output of the following PHP code ? <?php for ( $i = 0 ; $i < 5 ; $i ++) { for ( ; $i < 5 ; $i ++) print "i" ; } ?>
    options:
      - iiiii
      - infinite loop
      - iiiiiiiiiiiiiiiiiiiiiiiii
      - no output
    answer: 0
    explanation: The i value is changed in the inner loop and reaches five, thus does not execute the second outer loop.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: What will be the output of the following PHP code ? <?php $a = array( "hi" , "hello" , "bye" ) ; foreach ( $a as $value ) { if (count( $a ) == 2 ) print $value; } ?>
    options:
      - hihellobye
      - infinite loop
      - hihello
      - no output
    answer: 3
    explanation: As count($a) returns 3 the condition is always false.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: What will be the output of the following PHP code ? <?php $a = array( "hi" , "hello" , "bye" ) ; for (;count( $a ) < 5 ; ) { if (count( $a ) == 3 ) print $a; } ?>
    options:
      - ArrayArrayArrayArrayArrayArray….infinitely
      - (“hi”,”hello”,”bye”)(“hi”,”hello”,”bye”)(“hi”,”hello”,”bye”)(“hi”,”hello”,”bye”)…infinitely
      - hihellobyehihellobyehihellobyehihellobyehihellobyehihellobye…..infinitely
      - no output
    answer: 0
    explanation: As count($a) returns 3 the condition is always true, thus it prints $a, which returns its data type.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: What will be the output of the following PHP code ? <?php if (- 100 ) print "hi" ; else print "how are u" ; ?>
    options:
      - how are u
      - hi
      - error
      - no output
    answer: 1
    explanation: hi is the correct answer to “What will be the output of the following PHP code ? <?php if (- 100 ) print "hi" ; else print "how are u" ; ?>”. This question is standard in competitive examination syllabi for Control Structures_Loop In Php.
    keyConcept: Control Structures_Loop In Php
    testedIn:
      - FPSC
      - PPSC
---


