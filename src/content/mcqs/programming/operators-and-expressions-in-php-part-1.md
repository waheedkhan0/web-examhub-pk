---
title: Operators And Expressions In Php — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Operators And Expressions In Php — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: operators-and-expressions-in-php-part-1
topicName: Operators And Expressions In Php — Part 1
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
    question: What will be the output of the following PHP code ? <?php "Hello World" ?>
    options:
      - Error
      - Hello World
      - Nothing
      - Missing semicolon error
    answer: 2
    explanation: If you need to output something onto the screen you’ll need to use echo or print_r.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: What will be the output of the following PHP code ? <?php print_r "Hello world" ?>
    options:
      - Error
      - Hello World
      - Nothing
      - Missing semicolon error
    answer: 0
    explanation: The statement should be print_r(‘Hello World’) to print Hello world. Also if there is only one line then there is no requirement of a semicolon, but it is better to use it.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What will be the output of the following PHP code ? <?php $color = "red" ; echo "$color" ; echo "$COLOR" ; echo "$Color" ; ?>
    options:
      - redredred
      - redred
      - red
      - Error
    answer: 2
    explanation: In PHP, all variables are case-sensitive.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: "What will be the output of the following PHP code ? <?php # echo \"Hello world\" ; echo \"# Hello world\" ; ?>"
    options:
      - "# Hello world"
      - Hello world# Hello world
      - Hello world
      - Error
    answer: 0
    explanation: "# is a single line comment."
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: What will be the output of the following PHP code ? <?php echo "Hello World" ?>
    options:
      - Hello world
      - Hello world in italics
      - Nothing
      - Error
    answer: 1
    explanation: You can use tags like italics, bold etc. inside php script.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What will be the output of the following PHP code ? <?php echo "echo "Hello World"" ; ?>
    options:
      - Hello world
      - echo “Hello world”
      - echo Hello world
      - Error
    answer: 3
    explanation: It would have printed echo “Hello world” if the statement was echo “echo ”Hello World””;.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What will be the output of the following PHP code ? <?php <?php echo "Hello world" ; ?> ?>
    options:
      - Hello
      - Hello world
      - Nothing
      - Error
    answer: 3
    explanation: You can not have php tags inside a php tag.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What will be the output of the following PHP code ? <?php $color = red; echo "$color" ; ?>
    options:
      - red
      - $color
      - color
      - Error
    answer: 1
    explanation: To print red remove the .
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What will be the output of the following PHP code ? <?php $color = red; echo "$color" . red ; ?>
    options:
      - red red
      - red
      - error
      - nothing
    answer: 2
    explanation: Use of undefined constant red.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What will be the output of the following PHP code ? <?php $color1 = red; $color2 = green; echo "$color1" . "$color2" ; ?>
    options:
      - red green
      - red
      - green
      - error
    answer: 3
    explanation: It has to be $color1 = “red”; and $color2 = “green”; therefore the error.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What will be the output of the following PHP code ? <?php $color = "red" ; $color = "green" ; echo "$color" ; ?>
    options:
      - red
      - green
      - red green
      - error
    answer: 1
    explanation: The variable contains the last value which has been assigned.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: What will be the output of the following PHP code ? <?php $color1 = "red" ; $color2 = "red" ; echo "$color1" + "$color2" ; ?>
    options:
      - redgreen
      - red green
      - "0"
      - "1"
    answer: 2
    explanation: + does not return 1 if the variables are equal.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What will be the output of the following PHP code ? <?php $color1 = "red" ; $color2 = "1" ; echo "$color1" + "$color2" ; ?>
    options:
      - red1
      - red 1
      - "0"
      - "1"
    answer: 3
    explanation: + just returns the numeric value even though it is inside double quotes.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What will be the output of the following PHP code ? <?php $color1 = "1" ; $color2 = "1" ; echo "$color1" + "$color2" ; ?>
    options:
      - "11"
      - "2"
      - "0"
      - "1"
    answer: 1
    explanation: + can be used to add to integer values which are enclosed by double-quotes.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What will be the output of the following PHP code ? <?php $color1 = "red" ; $color2 = "1" ; $color3 = "grey" echo "$color1" + "$color2" . "$color3" ; ?>
    options:
      - 1grey
      - grey
      - "0"
      - red1grey
    answer: 0
    explanation: + gives the value 1 and . is used to give join 1 and grey.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What will be the output of the following PHP code ? <?php echo "This" , "was" , "a" , "bad" , "idea" ; ?>
    options:
      - This, was, a, bad, idea
      - This was a bad idea
      - Thiswasabadidea
      - Error
    answer: 2
    explanation: In an echo statement the comma operator is used to join strings.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What will be the output of the following PHP code ? <?php $one = "Hello" ; $two = "World" ; echo $one, $two; ?>
    options:
      - Hello World
      - Hello
      - World
      - HelloWorld
    answer: 3
    explanation: Echo can print two variables which are seperated by a comma.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: What will be the output of the following PHP code ? <?php $cars = array( "Volvo" , "BMW" , "Toyota" ) ; echo "My car is a {$cars[0]}" ; ?>
    options:
      - My car is a Volvo
      - My car is a BMW
      - My car is a Toyota
      - Error
    answer: 0
    explanation: In the echo statement the {$cars[0]} is replaced by the 1st element in cars that is Volvo.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: What will be the output of the following PHP code ? <?php print "echo hello world" ; ?>
    options:
      - echo hello world
      - hello world
      - nothing
      - error
    answer: 0
    explanation: The print statement will print what ever is present inside the double-quotes.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What will be the output of the following PHP code ? <?php $one = 1 ; print( $one ) ; print $one; ?>
    options:
      - "01"
      - "11"
      - "10"
      - Error
    answer: 1
    explanation: Print can be used with or without parantheses.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: What will be the output of the following PHP code ? <?php $cars = array( "Volvo" , "BMW" , "Toyota" ); print $cars [ 2 ] ; ?>
    options:
      - Volvo
      - BMW
      - Toyota
      - Error
    answer: 2
    explanation: Print statement can be used to output a specific array member.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What will be the output of the following PHP code ? <?php $one = "one" ; $two = "two" ; print( $one$two ) ; ?>
    options:
      - onetwo
      - one
      - nothing
      - error
    answer: 3
    explanation: The above syntax will produce an error, unlike the echo statement.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: What will be the output of the following PHP code ? <?php $one = "one" ; $two = "one" ; print( $one == $two ) ; ?>
    options:
      - "true"
      - "false"
      - "1"
      - error
    answer: 2
    explanation: Since both the strings are equal the result 1 is printed on the screen.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: What will be the output of the following PHP code ? <?php print( "this" . "was" . "a" . "bad" . "idea" ) ; ?>
    options:
      - thiswasabadidea
      - this was a bad idea
      - nothing
      - error
    answer: 0
    explanation: You can use the dot operator like in echo but you can not use the comma operator to do the same.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: What will be the output of the following PHP code ? <?php define( "GREETING", "PHP is a scripting language" ) ; echo $GREETING; ?>
    options:
      - $GREETING
      - no output
      - PHP is a scripting language
      - GREETING
    answer: 1
    explanation: Constants do not need a $ before them, they are referenced by their variable names itself.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: "What will be the output of the following PHP code ? <?php class Constants { define( 'MIN_VALUE' , '0.0' ) ; define( 'MAX_VALUE' , '1.0' ) ; public static function getMinValue () { return self :: MIN_VALUE; } public static function getMaxValue () { return self :: MAX_VALUE; } } echo Constants :: getMinValue () ; echo Constants :: getMaxValue () ; ?>"
    options:
      - 0.01.0
      - "01"
      - No output
      - ERROR
    answer: 3
    explanation: In a class constants should be defined const MIN_VALUE = 0.0;const MAX_VALUE = 1.0; instead.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: What will be the output of the following PHP code ? <?php define( "__LINE__" , "PHP is a scripting language" ) ; echo __LINE__; ?>
    options:
      - PHP is a scripting language
      - __LINE__
      - "2"
      - ERROR
    answer: 2
    explanation: __LINE__ is a magical constant that gives the current line number and cannot be used a variable/constant name.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: "What will be the output of the following PHP code ? <?php define( 'IF' , 42 ) ; echo \"IF: \" , IF; ?>"
    options:
      - IF:42
      - No output
      - "IF:"
      - ERROR
    answer: 3
    explanation: Keyword like IF cannot be used as constant names.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: What will be the output of the following PHP code ? <?php define( "NEW_GOOD_NAME_CONSTANT" , "I have a value" ) ; define( "OLD_BAD_NAME_CONSTANT" , NEW_GOOD_NAME_CONSTANT ) ; echo NEW_GOOD_NAME_CONSTANT; echo OLD_BAD_NAME_CONSTANT; ?>
    options:
      - I have a value
      - I have a valueI have a value
      - ERROR
      - I have a valueNEW_GOO_NAME_CONSTANTS
    answer: 1
    explanation: Constants can be set as values for other constants.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: What will be the output of the following PHP code ? <?php define( "VAR_NAME" , "test" ) ; ${VAR_NAME} = "value" ; echo VAR_NAME; ech o $ { VAR_NAME } ; ?>
    options:
      - test
      - testtest
      - testvalue
      - error, constant value cannot be changed
    answer: 2
    explanation: ${VAR_NAME} creates a new variable which is not same as VAR_NAME.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: "What will be the output of the following PHP code ? <?php class myObject { } define( 'myObject::CONSTANT' , 'test' ) ; echo myObject :: CONSTANT; ?>"
    options:
      - test
      - error
      - myObject::CONSTANT
      - no output
    answer: 1
    explanation: Class constants cannot be defined outside class.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: What will be the output of the following PHP code ? <?php $x = 5 ; $y = 10 ; $z = "$x + $y" ; echo "$z" ; ?>
    options:
      - "15"
      - 10 + 5
      - $z
      - $x + $y
    answer: 1
    explanation: Variable z will store 10 + 5 because 10 + 5 is given in double-quotes.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: What will be the output of the following PHP code ? <?php $x = 4 ; $y = 3 ; $z = 1 ; echo "$x = $x + $y + $z" ; ?>
    options:
      - 4 = 4 + 3 + 1
      - "8"
      - 8 = 4 + 3 +1
      - Error
    answer: 0
    explanation: Again since the variables are inside double quotes we get this result.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: What will be the output of the following PHP code ? <?php $x = 4 ; $y = 3 $z = 1 ; $z = $z + $x + $y; echo "$z" ; ?>
    options:
      - $z
      - "15"
      - "8"
      - "1"
    answer: 2
    explanation: Normal addition of variables x, y and z occurs and result of 8 will be displayed.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: What will be the output of the following PHP code ? <?php $x = 3.3 ; $y = 2 ; echo $x % $y; ?>
    options:
      - "0"
      - "1"
      - "2"
      - Error
    answer: 1
    explanation: "% is the modulo operator. Unlike in C we can use it get reminder or floating point numbers in PHP."
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: What will be the output of the following PHP code ? <?php $x = 10 ; $y = 4 ; $z = 3 ; echo $x % $y % $z; ?>
    options:
      - "0"
      - "1"
      - "2"
      - Error
    answer: 2
    explanation: The expression is considered as ($x%$y)%z in this case (10%4)%3 which is 2.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: What will be the output of the following PHP code ? <?php $x = 30 ; $y = 20 ; $z = 10 ; echo $x + $y - $z / ( $z - $y ) ; ?>
    options:
      - "41"
      - "-4"
      - "-5"
      - "51"
    answer: 3
    explanation: First ($z – $y) is evalulated then -$z/($z – $y) is evaluated this results in 1 which is added to $x + $y therefore we get 51.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: What will be the output of the following PHP code ? <?php $x = 4 ; $y = - 3 ; $z = 11 ; echo 4 + $y * $z / $x; ?>
    options:
      - "4.25"
      - "3.25"
      - "-3.25"
      - "-4.25"
    answer: 3
    explanation: First the * is evaluated then / followed by + therefore we can rewrite this expression as 4 +((- 3 * 11) / 4) which results in -4.25.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: What will be the output of the following PHP code ? <?php $x = 3.5 ; $y = 2 ; $z = 2 ; echo $x / $y / $z; ?>
    options:
      - "1.75"
      - "0.875"
      - "3.5"
      - Error
    answer: 1
    explanation: First $x / $y is evaluated then this is divided by $z therefore we get 0.875.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: What will be the output of the following PHP code ? <?php one = 1 ; two = 2 ; three = 3 ; four = 4 ; echo "one / two + three / four" ; ?>
    options:
      - "0.75"
      - "0.05"
      - "1.25"
      - Error
    answer: 3
    explanation: Variables should start with a $ symbol, since one, two, three, four don’t begin with $ symbol we’ll get an error.
    keyConcept: Operators And Expressions In Php
    testedIn:
      - FPSC
      - PPSC
---


