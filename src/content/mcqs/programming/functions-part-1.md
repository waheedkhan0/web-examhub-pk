---
title: Functions — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Functions — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: functions-part-1
topicName: Functions — Part 1
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
    question: Type Hinting was introduced in which version of PHP?
    options:
      - PHP 4
      - PHP 5
      - PHP 5.3
      - PHP 6
    answer: 1
    explanation: Type hinting gives you the ability to force parameters to be objects of certain class or to be arrays. PHP 5 introduced this feature.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: What will happen in this function call? <?php function calc ( $price, $tax ) { $total = $price + $tax; } $pricetag = 15 ; $taxtag = 3 ; calc ( $pricetag, $taxtag ) ; ?>
    options:
      - Call By Value
      - Call By Reference
      - Default Argument Value
      - Type Hinting
    answer: 0
    explanation: When you pass an argument in the above manner or say we pass 15 and 3 directly, it is called passing by value or call by value.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What will be the output of the following PHP code? <?php function calc ( $price, $tax = "" ) { $total = $price + ( $price * $tax ) ; echo "$total" ; } calc ( 42 ) ; ?>
    options:
      - Error
      - "0"
      - "42"
      - "84"
    answer: 2
    explanation: You can designate certain arguments as optional by placing them at the end of the list and assigning them a default value of nothing.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: Which of the following are valid function names? 1. function() 2. €() 3. .function() 4. $function()
    options:
      - Only 2
      - None of the mentioned
      - All of the mentioned
      - 3 and 4
    answer: 0
    explanation: Except a) others are invalid names. According to the specified regular expression ([a-zA-Z_x7f-xff][a-zA-Z0-9_x7f-xff]*), a function name like this one is valid.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: What will be the output of the following PHP code? <?php function a () { function b () { echo 'I am b' ; } echo 'I am a' ; } a () ; a () ; ?>
    options:
      - I am b
      - I am bI am a
      - Error
      - I am a Error
    answer: 3
    explanation: "This will be the output- I am a Fatal error: Cannot redeclare b()"
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What will be the output of the following PHP code? <?php function a () { function b () { echo 'I am b' ; } echo 'I am a' ; } b () ; a () ; ?>
    options:
      - I am b
      - I am bI am a
      - Error
      - I am a Error
    answer: 2
    explanation: "This will be the output- Fatal error: Call to undefined function b(). You cannot call a function which is inside a function without calling the outside function."
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What will be the output of the following PHP code? <?php $op2 = "blabla" ; function foo ( $op1 ) { echo $op1; echo $op2; } foo ( "hello" ) ; ?>
    options:
      - helloblabla
      - Error
      - hello
      - helloblablablabla
    answer: 1
    explanation: "The correct answer is Option B: Error Here's why: In PHP, variables defined outside of a function are not automatically accessible inside the function. Scope is a crucial concept in programming. The variable `$op2` is defined outside the function `foo()`. Inside `foo()`, you are trying to use `$op2` without it being defined within the function's scope. Therefore, PHP will throw an error (specifically, a notice about an undefined variable) when trying to access `$op2` within the function. Although the `echo $op1` will work fine , but after that when trying to access the `$op2` that is not defined inside the function scope it will throw error . To make `$op2` accessible inside the function, you would need to either: 1. Pass it as an argument to the function. 2. Use the `global` keyword to bring it into the function's scope . Since neither of these is done in the given code, an error occurs."
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: A function in PHP which starts with ______ (double underscore) is know as.
    options:
      - Magic Function
      - Inbuilt Function
      - Default Function
      - User Defined Function
    answer: 0
    explanation: "Option A: Magic Function In PHP, a function that starts with double underscores (__) is known as a magic function . These functions are predefined in PHP and are automatically called when certain events or operations occur. Examples include __construct, __destruct, __get, __set, and many others, which are automatically invoked when specific conditions are met in the code. Option B: Inbuilt Function Inbuilt functions in PHP are built into the language and are not necessarily prefixed with double underscores. They are regular functions like echo(), print(), and other standard PHP functions, but do not follow the magic function naming convention. Option C: Default Function There is no specific category called \"default function\" in PHP. This term is not commonly used in the context of PHP function naming or functionality. Option D: User Defined Function User-defined functions are those created by the developer, and they do not follow the double underscore convention. These functions are typically defined with a name chosen by the user and are not prefixed with any special characters like the magic functions. Conclusion: The correct answer is Option A: Magic Function . Magic functions in PHP start with double underscores and are automatically invoked by PHP under certain conditions."
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What will be the output of the following PHP code? <?php function foo ( $msg ) { echo "$msg" ; } $var1 = "foo" ; $var1 ( "will this work" ) ; ?>
    options:
      - Error
      - $msg
      - "0"
      - Will this work
    answer: 3
    explanation: It is possible to call a function using a variable which stores the function name.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: Which one of the following PHP functions can be used to build a function that accepts any number of arguments?
    options:
      - func_get_argv()
      - func_get_argc()
      - get_argv()
      - get_argc()
    answer: 1
    explanation: "Here is an example- <?php function foo () { $args = func_get_args() ; foreach ( $args as $k => $v ) { echo \"arg\" .( $k + 1 ). \": $vn\" ; } } foo () ; /* will print nothing */ foo ( \"Hello\" ) ; /* will print Hello */ foo ( \"Hello\" , \"World\" , \"Bye\" ) ; /* will print Hello World Bye */ ?>"
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: Which one of the following PHP functions can be used to find files?
    options:
      - glob()
      - file()
      - fold()
      - get_file()
    answer: 0
    explanation: "Here is an example- // get all php files AND txt files $files = glob( '*.{php,txt}' , GLOB_BRACE ) ; print_r( $files ) ; /* output looks like: Array ( [0] => phptest.php [1] => pi.php [2] => post_output.php . . . )"
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: Which of the following PHP functions can be used to get the current memory usage?
    options:
      - get_usage()
      - get_peak_usage()
      - get_memory_usage()
      - get_memory_peak_usage()
    answer: 2
    explanation: We can use the memory_get_usage() function, and to get the highest amount of memory used at any point, we can use the memory_get_peak_usage() function.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: Which of the following PHP functions can be used for generating unique id’s?
    options:
      - uniqueid()
      - id()
      - md5()
      - mdid()
    answer: 0
    explanation: Many people use the md5() function for this, even though it’s not exactly meant for this purpose. uniqueid() is the function that is to be used.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: Which one of the following functions can be used to compress a string?
    options:
      - zip_compress()
      - zip()
      - compress()
      - gzcompress()
    answer: 3
    explanation: We will be able to achieve almost 50% size reduction using this function. The gzuncompress() function is used to uncompress the string.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What will be the output of the following PHP code? <?php echo "chr(52)" ; ?>
    options:
      - "1"
      - "2"
      - "3"
      - "4"
    answer: 3
    explanation: The chr() function returns a character from the specified ASCII value. Since the ASCII value of 4 is 52, thus 4 was displayed.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What will be the output of the following PHP code? <?php echo ord ( "hi" ) ; ?>
    options:
      - "106"
      - "103"
      - "104"
      - "209"
    answer: 2
    explanation: The ord() function returns the ASCII value of the first character of a string. The ASCII value of h is 104, thus 104 was displayed.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What will be the output of the following PHP code? <?php $str = "Hello World" echo wordwrap( $str, 5 , "n" ) ; ?>
    options:
      - Hello World
      - HelloWorld
      - Hell 0 Wo rld
      - World
    answer: 1
    explanation: The wordwrap() function wraps a string into new lines when it reaches a specific length.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: What will be the output of the following PHP code? <?php echo ( atan ( 0.50 )); ?>
    options:
      - "0.11845976421345"
      - "0.23568451142521"
      - "0.46364760900081"
      - "1"
    answer: 2
    explanation: The atan() function returns the arc tangent of arg as a numeric value between -Pi/2 and Pi/2 radians.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: What will be the output of the following PHP code? <?php define ( "GREETING" , "Hello you! How are you today?" ) ; echo constant ( "GREETING" ) ; ?>
    options:
      - Hello you! How are you today?
      - GREETING
      - GREETING, Hello you! How are you today?
      - “GREETING”,”Hello you! How are you today?”
    answer: 0
    explanation: The define() function defines a constant.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What will be the output of the following PHP code? <?php define ( "GREETING1" , "Hello you! How are you today?" ) ; define ( "GREETING2" , "Hello you! How are you today?" ) ; define ( "GREETING3" , "Hello you! How are you today?" ) ; echo defined ( "GREETING" ) ; ?>
    options:
      - "1"
      - "0"
      - "3"
      - "4"
    answer: 1
    explanation: The defined() function checks whether a constant exists.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: What will be the output of the following PHP code? <?php function sum ( $num1, $num2 ) { $total = $num1 + $num2; echo "chr($total)" ; } $var1 = "sum" ; $var1 ( 5, 44 ) ; ?>
    options:
      - Error
      - "49"
      - "1"
      - Sum
    answer: 2
    explanation: It is possible to call a function using a variable which stores the function name also the chr() function returns a character from the specified ASCII value.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What will be the output of the following PHP code? <?php function sum ( $num1, $num2 ) { $total = $num1 + $num2; echo "cos($total)"; } sum ( 5 ,- 5 ) ; ?>
    options:
      - "0"
      - "1"
      - "0.5"
      - "-0.5"
    answer: 1
    explanation: cos() gives the cos value of the argument. Here the function returns 1.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: What will be the output of the following PHP code? <?php function b() { echo "b is executed" ; } function a() { b () ; echo "a is executed" ; b () ; } a () ; ?>
    options:
      - b is executedb is executedb is executed
      - b is executeda is executed
      - a is executed
      - b is executeda is executedb is executed
    answer: 3
    explanation: imple order of execution.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: "What will be the output of the following PHP code? <?php function addFunction ( $num1, $num2 ) { $sum = $num1 + $num2; return $sum; } $return_value = addFunction ( 10 , 20 ) ; echo \"Returned value from the function : $return_value\" ?>"
    options:
      - "Returned value from the function : $return_value"
      - Error
      - "Returned value from the function : 30"
      - "Returned value from the function :"
    answer: 2
    explanation: Functions returns value 30.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: What will be the output of the following PHP code? <?php function sayHello () { echo "HelloWorld<br />" ; } $function_holder = "sayHello" ; $function_holder () ; ?>
    options:
      - No Output
      - Error
      - sayHello
      - HelloWorld
    answer: 3
    explanation: It is possible to assign function names as strings to variables and then treat these variables exactly as you would the function name itself.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: What will be the output of the following PHP code? span> function one () { echo " this works" ; function two () { echo "this too works" ; } } one () ; two () ; ?>
    options:
      - error
      - this works
      - this worksthis too works
      - this works this too works
    answer: 2
    explanation: Two is declared in one and is called after one.Hence it works.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: What will be the output of the following PHP code? <?php function do( $myString ) { echo strpos ( $myString , "donkey",0 ); } do ( "The donkey looks like a horse." ); ?>
    options:
      - "4"
      - "5"
      - "2"
      - None of the mentioned
    answer: 0
    explanation: Donkey starts from position 4 in string.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: What will be the output of the following PHP code? <?php function one span> () { define ( "const","I am awesome!" ); echo constant ( "const" ); } one () ; ?>
    options:
      - I am awesome!!
      - const
      - const, I am awesome!!
      - “const”,”I am awesome!”
    answer: 0
    explanation: Using the define function to define the constant “const”.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: What will be the output of the following PHP code? <?php echo hex2bin( "48656c6c6f20576f726c6421" ); ?>
    options:
      - Hello World!
      - welcome to india
      - This is PHP!
      - MCQ questons
    answer: 0
    explanation: The hex2bin() function converts a string of hexadecimal values to ASCII characters.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: What will be the output of the following PHP code? <?php $str = addslashes ( 'What does "yolo" mean?' ); echo ($str); ?>
    options:
      - What does /”yolo/” mean?
      - What does ”Yolo” mean?
      - None of the above
    answer: 2
    explanation: The addslashes() function returns a string with backslashes in front of predefined characters.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: What will be the output of the following PHP code? <?php $str = "Hello world. It's a beautiful day." ; print_r (explode( " ",$str )) ; ?>
    options:
      - Array ( [0] => Hello [0] => world. [0] => It’s [0] => a [0] => beautiful [0] => day. )
      - Array ( [0] => Hello [1] => world. [2] => It’s [3] => a [4] => beautiful [5] => day. )
      - Hello world. It’s a beautiful day
      - Array ( [1] => Hello [2] => world. [3] => It’s [4] => a [5] => beautiful [6] => day. )
    answer: 1
    explanation: The explode() function breaks a string into an array.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: What will be the output of the following PHP code? <?php echo strtr ( "Hilla Warld","ia","eo" ); ?>
    options:
      - Hilla Warld
      - Hello World
      - ia
      - eo
    answer: 1
    explanation: The strtr() function translates certain characters in a string.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: What will be the output of the following PHP code? <?php echo stripos( "I love php, I love php too!","PHP" ); ?>
    options:
      - "3"
      - "7"
      - "8"
      - "10"
    answer: 1
    explanation: The stripos() function finds the position of the first occurrence of a string inside another string.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: "What will be the output of the following PHP code ? <?php function A1 ( $x ) { switch ( $x ) { case 1 : //this statement is the same as if($x == 1) echo 'Case 1 was executed.' ; break ; case 2 : //this statement is the same as if($x == 2) echo 'Case 2 was executed.' ; break ; case 3 : //this statement is the same as if($x == 3) echo 'Case 3 was executed.' ; break; case 4 : //this statement is the same as if($x == 4) echo 'Case 4 was executed.' ; break ; default : //this statement is the same as if $x does not equal the other conditions echo 'Default was executed.' ; break ; } } A1 ( 9 ) ; ?>"
    options:
      - Case 1 was executed
      - Case 2 was executed
      - Default was executed
      - Case 4 was executed
    answer: 3
    explanation: The switch statement is executed with $x = 9.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: What will be the output of the following PHP code ? <?php function TV ( $string ) { echo "my favourite TV show is " .$string; function b() { echo " I am here to spoil this code" ; } } b () ; ?>
    options:
      - I am here to spoil this code
      - Error
      - My favourite TV show isI am here to spoil this code
      - None of the mentioned
    answer: 1
    explanation: b is undeclared if TV() is not called first.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: What will be the output of the following PHP code ? <?php function TV ( $string ) { echo "my favourite TV show is " .$string; function b () { echo " I am here to spoil this code" ; } } function b () { echo " I am here to spoil this code" ; } b () ; ?>
    options:
      - I am here to spoil this code
      - Error
      - my favourite TV show isI am here to spoil this code
      - None of the mentioned
    answer: 0
    explanation: This one works because b is declared independent of TV() also.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: What will be the output of the following PHP code ? <?php function TV ( $string ) { echo "my favourite TV show is " .$string; function b () { echo " I am here to spoil this code" ; } } function b () { echo " I am here to spoil this code" ; } b () ; TV ( "Sherlock" ) ; ?>
    options:
      - I am here to spoil this code
      - Error
      - My favourite TV show isI am here to spoil this code
      - None of the mentioned
    answer: 1
    explanation: Function b is declared twice.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: What will be the output of the following PHP code ? <?php function TV ( $string ) { echo "my favourite TV show is " . $string; function b () { echo " I am here to spoil this code" ; } } a ( "Sherlock" ) ; b () ; ?>
    options:
      - I am here to spoil this code
      - Error
      - my favourite TV show is SherlockI am here ro spoil this code
      - None of the mentioned
    answer: 2
    explanation: b is declared as TV() is executed first.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: What will be the output of the following PHP code ? <?php function calc ( $num1, $num2 ) { $total = $num1 * $num2; } $result = calc( 42, 0 ); echo $result; ?>
    options:
      - Error
      - "0"
      - "42"
      - "84"
    answer: 0
    explanation: Function does not return anything.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: What will be the output of the following PHP code ? <?php function calc ( $num1, $num2 ) { $total = $num1 * $num2; return $total; } $result = calc ( 42, 0 ) ; echo $result; ?>
    options:
      - Error
      - "0"
      - "42"
      - "84"
    answer: 1
    explanation: Function returns $total.
    keyConcept: Functions
    testedIn:
      - FPSC
      - PPSC
---


