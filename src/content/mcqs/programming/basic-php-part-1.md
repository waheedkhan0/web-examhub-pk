---
title: Basic Php — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Basic Php — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: basic-php-part-1
topicName: Basic Php — Part 1
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
    question: What does PHP stand for? 1. Personal Home Page 2. Hypertext Preprocessor 3. Pretext Hypertext Processor 4. Preprocessor Home Page
    options:
      - Both 1 and 3
      - Both 2 and 4
      - Only 2
      - Both 1 and 2
    answer: 3
    explanation: PHP previously stood for Personal Home Page now stands for Hypertext Preprocessor.
    keyConcept: Basic Php
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: Which of the following is/are a PHP code editor? 1. Notepad 2. Notepad++ 3. Adobe Dreamweaver 4. PDT
    options:
      - Only 4
      - All of the mentioned
      - 1, 2 and 3
      - Only 3
    answer: 1
    explanation: Any of the above editors can be used to type php code and run it.
    keyConcept: Basic Php
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Which of the following must be installed on your computer so as to run PHP script? 1. Adobe Dreamweaver 2. PHP 3. Apache 4. IIS
    options:
      - All of the mentioned.
      - Only 2
      - 2 and 3
      - 2, 3 and 4
    answer: 3
    explanation: To run PHP code you need to have PHP and a web server, both IIS and Apache are web servers.You can choose either one according to your platform.
    keyConcept: Basic Php
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: Which version of PHP introduced Try/catch Exception?
    options:
      - PHP 4
      - PHP 5
      - PHP 5.3
      - PHP 6
    answer: 1
    explanation: Version 5 added support for Exception Handling.
    keyConcept: Basic Php
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: "We can use _________ to comment a single line? 1. /? 2. // 3. # 4. /* */"
    options:
      - Only 2
      - 1, 3 and 4
      - 2, 3 and 4
      - Both 2 and 4
    answer: 2
    explanation: "/* */ can also be use to comment just a single line although it is used for paragraphs. // and # are used only for single line comment."
    keyConcept: Basic Php
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: Which of the following php statement/statements will store 111 in variable num? 1. int $num = 111; 2. int mum = 111; 3. $num = 111; 4. 111 = $num;
    options:
      - Both 1 and 2
      - All of the mentioned
      - Only 3
      - Only 1
    answer: 2
    explanation: You need not specify the datatype in php.
    keyConcept: Basic Php
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What will be the output of the following php code? <?php $num = 1 ; $num1 = 2 ; print $num . "+" . $num1; ?>
    options:
      - "3"
      - 1+2
      - 1.+.2
      - Error
    answer: 1
    explanation: .(dot) is used to combine two parts of the statement. Example ( $num . “Hello World” ) will output 1Hello World.
    keyConcept: Basic Php
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: Which of following variables can be assigned a value to it? 1. $3hello 2. $_hello 3. $this 4. $This
    options:
      - All of the mentioned
      - Only 2
      - 2, 3 and 4
      - 2 and 4
    answer: 3
    explanation: A variable can’t start with a number. Also $this is a special variable that can’t be assigned, but $This can be assigned.
    keyConcept: Basic Php
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What will be the output of the following code? <?php $foo = 'Bob' ; $bar = & $foo; $bar = "My name is $bar" ; echo $bar; echo $foo; ?>
    options:
      - Error
      - My name is BobBob
      - My name is BobMy name is Bob
      - My name is Bob Bob
    answer: 2
    explanation: The $bar = &$foo; line will reference $foo via $bar.
    keyConcept: Basic Php
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: Which of the following PHP statements will output Hello World on the screen? 1. echo (“Hello World”); 2. print (“Hello World”); 3. printf (“Hello World”); 4. sprintf (“Hello World”);
    options:
      - 1 and 2
      - 1, 2 and 3
      - All of the mentioned
      - 1, 2 and 4
    answer: 1
    explanation: echo(), print() and printf() all three can be used to output a statement onto the screen. The sprintf() statement is functionally identical to printf() except that the output is assigned to a string rather than rendered to the browser.
    keyConcept: Basic Php
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What will be the output of the following PHP code? <?php $color = "maroon" ; $var = $color [ 2 ] ; echo "$var" ; ?>
    options:
      - a
      - Error
      - $var
      - r
    answer: 3
    explanation: PHP treats strings in the same fashion as arrays, allowing for specific characters to be accessed via array offset notation.
    keyConcept: Basic Php
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: What will be the output of the following PHP code? <?php $score = 1234 ; $scoreboard = (array) $score; echo $scoreboard [ 0 ] ; ?>
    options:
      - "1"
      - Error
      - "1234"
      - "2"
    answer: 2
    explanation: The (array) is a cast operator which is used for converting values from other data types to array.
    keyConcept: Basic Php
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What will be the output of the following PHP code? <?php $total = "25 students" ; $more = 10 ; $total = $total + $more; echo "$total" ; ?>
    options:
      - Error
      - 35 students
      - "35"
      - 25 students
    answer: 2
    explanation: The integer value at the beginning of the original $total string is used in the calculation. However if it begins with anything but a numerical value, the value will be 0.
    keyConcept: Basic Php
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: Which of the below statements is equivalent to $add += $add ?
    options:
      - $add = $add
      - $add = $add +$add
      - $add = $add + 1
      - $add = $add + $add + 1
    answer: 1
    explanation: a += b is an addition assignment whose outcome is a = a + b. Same can be done with subtraction,multiplication,division etc.
    keyConcept: Basic Php
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: Which statement will output $x on the screen?
    options:
      - echo “\$x”
      - echo “$$x”
      - echo “/$x”
      - echo “$x;”
    answer: 0
    explanation: A backslash is used so that the dollar sign is treated as a normal string character rather than prompt PHP to treat $x as a variable. The backslash used in this manner is known as escape character.
    keyConcept: Basic Php
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What will be the output of the following code? <?php function track () { static $count = 0 ; $count ++ ; echo $count; } track () ; track () ; track () ; ?>
    options:
      - "123"
      - "111"
      - "000"
      - "011"
    answer: 0
    explanation: Because $count is static, it retains its previous value each time the function is executed.
    keyConcept: Basic Php
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What will be the output of the following PHP code? <?php $a = "clue" ; $a .= "get" ; echo "$a" ; ?>
    options:
      - get
      - "true"
      - "false"
      - clueget
    answer: 3
    explanation: .= is a concatenation-assignment. $a equals its current value concatenated with “get”.
    keyConcept: Basic Php
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: What will be the output of the following PHP code? <?php $a = 5 ; $b = 5 ; span class = "sys-fun" >echo ( $a === $b ) ; ?>
    options:
      - 5 === 5
      - Error
      - "1"
      - "False"
    answer: 2
    explanation: "=== operator returns 1 if $a and $b are equivalent and $a and $b have the same type."
    keyConcept: Basic Php
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: Which of the below symbols is a newline character?
    options:
      - \r
      - \n
      - /n
      - /r
    answer: 1
    explanation: PHP treats \n as newline character.
    keyConcept: Basic Php
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What will be the output of the following PHP code? <?php $num = 10 ; echo 'What is her age? \n She is $num years old' ; ?>
    options:
      - What is her age? n She is $num years old
      - What is her age? She is $num years old
      - What is her age? She is 10 years old
      - What is her age?n She is 10 years old
    answer: 0
    explanation: When a string is enclosed within single quotes both variables and escape sequences will not be interpreted when the string is parsed.
    keyConcept: Basic Php
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: "What will be the output of the following PHP code? <?php $team = \"arsenal\" ; switch ( $team ) { case \"manu\" : echo \"I love man u\" ; case \"arsenal\" : echo \"I love arsenal\" ; case \"manc\" : echo \"I love manc\" ; } ?>"
    options:
      - I love arsenal
      - Error
      - I love arsenalI love manc
      - I love arsenalI love mancI love manu
    answer: 2
    explanation: If a break statement isn’t present, all subsequent case blocks will execute until a break statement is located.
    keyConcept: Basic Php
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What will be the output of the following PHP code? <?php $user = array( "Ashley" , "Bale" , "Shrek" , "Blank" ) ; for ( $x = 0 ; $x < count( $user ) ; $x ++) { if ( $user [ $x ] == "Shrek" ) continue ; printf ( $user [ $x ]) ; } ?>
    options:
      - AshleyBale
      - AshleyBaleBlank
      - ShrekBlank
      - Shrek
    answer: 1
    explanation: The continue statement causes execution of the current loop iteration to end and commence at the beginning of the next iteration.
    keyConcept: Basic Php
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: "If $a = 12 what will be returned when ($a == 12) ? 5 : 1 is executed?"
    options:
      - "12"
      - "1"
      - Error
      - "5"
    answer: 3
    explanation: "?: is known as ternary operator. If condition is true then the part just after the ? is executed else the part after : ."
    keyConcept: Basic Php
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: What is the value of $a and $b after the function call? <?php function doSomething ( & $arg ) { $return = $arg; $arg += 1 ; return $return; } $a = 3 ; $b = doSomething ( $a ) ; ?>
    options:
      - a is 3 and b is 4
      - a is 4 and b is 3
      - Both are 3
      - Both are 4
    answer: 1
    explanation: $a is 4 and $b is 3. The former because $arg is passed by reference, the latter because the return value of the function is a copy of the initial value of the argument.
    keyConcept: Basic Php
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: PHP files have a default file extension of_______.
    options:
      - .html
      - .xml
      - .php
      - .ph
    answer: 2
    explanation: .php is the correct answer to “PHP files have a default file extension of_______.”. This question is standard in competitive examination syllabi for Basic Php.
    keyConcept: Basic Php
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Which of the conditional statements is/are supported by PHP? 1. if statements 2. if-else statements 3. if-elseif statements 4. switch statements
    options:
      - Only 1
      - 1, 2 and 4
      - 2, 3 and 4
      - All of the mentioned.
    answer: 3
    explanation: All of the mentioned. is the correct answer to “Which of the conditional statements is/are supported by PHP? 1. if statements 2. if-else statements 3. if-elseif statements 4. switch statements”. This question is standard in competitive examination syllabi for Basic Php.
    keyConcept: Basic Php
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: Which of the looping statements is/are supported by PHP? 1. for loop 2. while loop 3. do-while loop 4. foreach loop
    options:
      - 1 and 2
      - 1, 2 and 3
      - All of the mentioned
      - None of the mentioned
    answer: 2
    explanation: All of the mentioned is the correct answer to “Which of the looping statements is/are supported by PHP? 1. for loop 2. while loop 3. do-while loop 4. foreach loop”. This question is standard in competitive examination syllabi for Basic Php.
    keyConcept: Basic Php
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: Who is the father of PHP?
    options:
      - Rasmus Lerdorf
      - Willam Makepiece
      - Drek Kolkevi
      - List Barely
    answer: 0
    explanation: Rasmus Lerdorf is the correct answer to “Who is the father of PHP”. This question is standard in competitive examination syllabi for Basic Php.
    keyConcept: Basic Php
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: How does the identity operator === compare two values?
    options:
      - It converts them to a common compatible data type and then compares the resulting values
      - It returns True only if they are both of the same type and value
      - If the two values are strings, it performs a lexical comparison
      - It bases its comparison on the C strcmp function exclusively
      - It converts both values to strings and compares them
    answer: 0
    explanation: It converts them to a common compatible data type and then compares the resulting values is the correct answer to “How does the identity operator === compare two values”. This question is standard in competitive examination syllabi for Basic Php.
    keyConcept: Basic Php
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: Under what circumstance is it impossible to assign a default value to a parameter while declaring a function?
    options:
      - When the parameter is Boolean
      - When the function is being declared as a member of a class
      - When the parameter is being declared as passed by reference
      - When the function contains only one parameter
      - Never
    answer: 2
    explanation: When the parameter is being declared as passed by reference is the correct answer to “Under what circumstance is it impossible to assign a default value to a parameter while declaring a function”. This question is standard in competitive examination syllabi for Basic Php.
    keyConcept: Basic Php
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: Variables always start with a ........ in PHP
    options:
      - Pond-sign
      - Yen-sign
      - Dollar-sign
      - Euro-sign
    answer: 2
    explanation: Dollar-sign is the correct answer to “Variables always start with a ........ in PHP”. This question is standard in competitive examination syllabi for Basic Php.
    keyConcept: Basic Php
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: PHP is an open source software.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “PHP is an open source software.”. This question is standard in competitive examination syllabi for Basic Php.
    keyConcept: Basic Php
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: Which of the following is not valid PHP code?
    options:
      - $_10
      - ${“MyVar”}
      - "&$something"
      - $10_somethings
      - $aVaR
    answer: 3
    explanation: $10_somethings is the correct answer to “Which of the following is not valid PHP code”. This question is standard in competitive examination syllabi for Basic Php.
    keyConcept: Basic Php
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: PHP runs on different platforms (Windows, Linux, Unix, etc.)
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “PHP runs on different platforms (Windows, Linux, Unix, etc.)”. This question is standard in competitive examination syllabi for Basic Php.
    keyConcept: Basic Php
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: You can test the type of any variable with the ..... function.
    options:
      - whattype()
      - showtype()
      - gettype()
      - settype()
    answer: 2
    explanation: gettype() is the correct answer to “You can test the type of any variable with the ..... function.”. This question is standard in competitive examination syllabi for Basic Php.
    keyConcept: Basic Php
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: Assigning the empty string (like ' ') to a variable automatically renders it empty.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “Assigning the empty string (like ' ') to a variable automatically renders it empty.”. This question is standard in competitive examination syllabi for Basic Php.
    keyConcept: Basic Php
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: If you echo a Boolean variable, the value FALSE displays as a .... and the value TRUE echoes as a .....
    options:
      - 0, 1
      - blank string, 2
      - empty variable, 1
      - blank string, 1
    answer: 3
    explanation: blank string, 1 is the correct answer to “If you echo a Boolean variable, the value FALSE displays as a .... and the value TRUE echoes as a .....”. This question is standard in competitive examination syllabi for Basic Php.
    keyConcept: Basic Php
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: When a simple data type is casted to an array, an array is created with the original value in the first element.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “When a simple data type is casted to an array, an array is created with the original value in the first element.”. This question is standard in competitive examination syllabi for Basic Php.
    keyConcept: Basic Php
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: String values must be enclosed in ......
    options:
      - single quotes
      - double quotes
      - both A and B
      - none of above
    answer: 2
    explanation: both A and B is the correct answer to “String values must be enclosed in ......”. This question is standard in competitive examination syllabi for Basic Php.
    keyConcept: Basic Php
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: PHP does not support numbers written in hexadecimal, octal or scientific notation.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “PHP does not support numbers written in hexadecimal, octal or scientific notation.”. This question is standard in competitive examination syllabi for Basic Php.
    keyConcept: Basic Php
    testedIn:
      - FPSC
      - PPSC
---


