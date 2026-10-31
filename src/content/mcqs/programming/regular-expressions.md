---
title: Regular Expressions MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Regular Expressions with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: regular-expressions
topicName: Regular Expressions
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
    question: "[:alpha:] can also be specified as."
    options:
      - "[A-Za-z0-9]"
      - "[A-za-z]"
      - "[A-z]"
    answer: 1
    explanation: "[:alpha:] is nothing but Lowercase and uppercase alphabetical characters."
    keyConcept: Regular Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: How many functions does PHP offer for searching strings using POSIX style regular expression?
    options:
      - "7"
      - "8"
      - "9"
      - "10"
    answer: 0
    explanation: ereg(), ereg_replace(), eregi(), eregi_replace(), split(), spliti(), and sql_regcase() are the functions offered.
    keyConcept: Regular Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What will be the output of the following PHP code? <?php $username = "jasoN" ; if ( ereg ( "([^a-z])" ,$username)) echo "Username must be all lowercase!" ; else echo "Username is all lowercase!" ; ?>
    options:
      - Error
      - Username must be all lowercase!
      - Username is all lowercase!
      - No Output is returned
    answer: 1
    explanation: Because the provided username is not all lowercase, ereg() will not return FALSE (instead returning the length of the matched string, which PHP will treat as TRUE), causing the message to output.
    keyConcept: Regular Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What will be the output of the following PHP code? <?php $text = "this istsome text thatnwe might like to parse." ; print_r ( split ( "[nt]" ,$text)); ?>
    options:
      - this is some text that we might like to parse.
      - Array ( [0] => some text that [1] => we might like to parse. )
      - Array ( [0] => this is [1] => some text that [2] => we might like to parse. )
      - "[0] => this is [1] => some text that [2] => we might like to parse."
    answer: 3
    explanation: The split() function divides a string into various elements, with the boundaries of each element based on the occurrence of a defined pattern within the string.
    keyConcept: Regular Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: Which of the following would be a potential match for the Perl-based regular expression /fo{2,4}/ ? 1. fol 2. fool 3. fooool 4. fooooool
    options:
      - Only 1
      - 2 and 3
      - 1, 3 and 4
      - 1 and 4
    answer: 1
    explanation: This matches f followed by two to four occurrences of o.
    keyConcept: Regular Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: Which among the following is/are not a metacharacter? 1. /a 2. /A 3. /b 4. /B
    options:
      - Only 1
      - 1 and 3
      - 2, 3 and 4
      - 2 and 4
    answer: 0
    explanation: "/A, /b and /B are metacharacters. A: Matches only at the beginning of the string. b: Matches a word boundary. B: Matches anything but a word boundary."
    keyConcept: Regular Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: How many functions does PHP offer for searching and modifying strings using Perl-compatible regular expressions.
    options:
      - "7"
      - "8"
      - "9"
      - "10"
    answer: 1
    explanation: The functions are preg_filter(), preg_grep(), preg_match(), preg_match_all(), preg_quote(), preg_replace(), preg_replace_callback(), and preg_split().
    keyConcept: Regular Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What will be the output of the following PHP code? <?php $foods = array ( "pasta", "steak", "fish", "potatoes" ); $food = preg_grep ("/^s/", $foods); print_r ($food); ?>
    options:
      - Array ( [0] => pasta [1] => steak [2] => fish [3] => potatoes )
      - Array ( [3] => potatoes )
      - Array ( [1] => steak )
      - Array ( [0] => potatoes )
    answer: 2
    explanation: This function is used to search an array for foods beginning with s.
    keyConcept: Regular Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: Say we have two compare two strings which of the following function/functions can you use? 1. strcmp() 2. strcasecmp() 3. strspn() 4. strcspn()
    options:
      - 1 and 2
      - 3 and 4
      - None of the mentioned
      - All of the mentioned
    answer: 3
    explanation: All of the functions mentioned above can be used to compare strings in some or the other way.
    keyConcept: Regular Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: Which one of the following functions will convert a string to all uppercase?
    options:
      - strtoupper()
      - uppercase()
      - str_uppercase()
      - struppercase()
    answer: 0
    explanation: Its prototype follows string strtoupper(string str).
    keyConcept: Regular Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What will be the output of the following PHP code? <?php echo str_pad ( "Salad", 5)." is good." ; ?>
    options:
      - SaladSaladSaladSaladSalad is good
      - is good SaladSaladSaladSaladSalad
      - is good Salad
      - Salad is good
    answer: 3
    explanation: The str_pad() function pads a string with a specified number of characters.
    keyConcept: Regular Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: What will be the output of the following PHP code? <?php $author = "nachiketh@example.com" ; $author = str_replace ("a","@",$author); echo "Contact the author of this article at $author." ; ?>
    options:
      - Contact the author of this article at nachiketh@ex@mple.com
      - Cont@ct the @uthor of this @rticle @t n@chiketh@ex@mple.com
      - Contact the author of this article at n@chiketh@ex@mple.com
      - Error
    answer: 2
    explanation: The str_replace() function case sensitively replaces all instances of a string with another.
    keyConcept: Regular Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What will be the output of the following PHP code? <?php $url = "contact@examhub.pk" ; echo ltrim(strstr ($url, "@"),"@" ); ?>
    options:
      - contact@examhub.pk
      - contact
      - contact@
      - examhub.pk
    answer: 3
    explanation: The strstr() function returns the remainder of a string beginning with the first occurrence of a predefined string.
    keyConcept: Regular Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What will be the output of the following PHP code? <?php $number = array ( 0 , 1 ,two,three,four, 5 ); $num = preg_grep ( "/[0-5]/" , $number); print_r ($num); ?>
    options:
      - Array([0]=>0 [1]=>1 [2]=>two [3]=>three [4]=>four [5]=>5)
      - Array([2]=>two [3]=>three [4]=>four)
      - Array([1]=> 1)
      - Array([0]=>0 [1]=>1 [5]=>5)
    answer: 3
    explanation: The preg_grep function is used to search an array for specific patterns and then return a new array based on that filtering.
    keyConcept: Regular Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What will be the output if we replace the line $num = preg_grep(“/[0-5]/”, $number); with $num = preg_grep(“/[0-5]/”, $number, PREG_GREP_INVERT);?
    options:
      - Array([0]=>0 [1]=>1 [2]=>two [3]=>three [4]=>four [5]=>5)
      - Array([2]=>two [3]=>three [4]=>four)
      - Array([1]=> 1)
      - Array([0]=>0 [5]=>5)
    answer: 1
    explanation: When we include PREG_GREP_INVERT, this will invert our data, so instead of outputting numbers it will output our non-numeric values.
    keyConcept: Regular Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: Which one of the following functions is used to search a string?
    options:
      - preg_match
      - preg_search
      - preg_find
      - preg_found
    answer: 0
    explanation: The function returns 1 if search was successful else returns 0.
    keyConcept: Regular Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What will be the output of the following PHP code? <?php $name = "What is your name?" if ( preg_match ( "/name/" ),$name) echo "My name is Will Pitt " ; else echo "My name is not Will Pitt " ; if ( preg_match ( "/are/" )) echo "I am great" else echo "I am not great" ; ?>
    options:
      - My name is Will Pitt I am great
      - My name is not Will Pitt I am great
      - My name is Will Pitt I am not great
      - My name is not Will Pitt I am not great
    answer: 2
    explanation: The code uses preg_match to check for a keyword and replies based on whether it is true (1) or false (0).
    keyConcept: Regular Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: What will be the output of the following PHP code? <?php $str = "Hello! My name is Cameron Fox. Coffee?" $find = array ( '/is/','/coffee/' ); $replace = array ( '/was/','/tea/' ); echo preg_replace ($find, $replace, $str); ?>
    options:
      - Hello! My name was Cameron Fox. tea?
      - Hello! My name is Cameron Fox. tea?
      - Hello! My name is Cameron Fox. Coffee?
      - Hello! My name was Cameron Fox. Coffee?
    answer: 3
    explanation: Coffee was not replaced because the preg_replace function is case sensitive. Therefore it treats coffee and Coffee differently.
    keyConcept: Regular Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: Which one of the following preg PHP functions is used to take a string, and put it in an array?
    options:
      - preg_destroy()
      - preg_split()
      - preg_unchain()
      - preg_divide()
    answer: 1
    explanation: The string is broken up into different values in the array based upon your input.
    keyConcept: Regular Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What will be the output of the following PHP code? <?php $line = "You like dogs. I hate dogs. We should marry." $sen = preg_split ( '/./' , $line); print_r ($sen); ?>
    options:
      - You like dogs. I hate dogs. We should marry.
      - Array([0]=>You like dogs. I hate dogs. We should marry.)
      - Array([0]=>You like dogs. [1]=>I hate dogs. [2]=>We should marry.)
      - Error
    answer: 2
    explanation: We use a ‘.’ period to split the data, therefor giving each sentence it’s own array entry.
    keyConcept: Regular Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: Which one of the following is not a preg PHP function?
    options:
      - preg_match
      - preg_match_all
      - preg_matchall
      - preg_split
    answer: 2
    explanation: The function preg_matchall does not exist. preg_match_all is a preg function.
    keyConcept: Regular Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: PHP has long supported two regular expression implementations known as _______ and _______. 1. Perl 2. PEAR 3. Pearl 4. POSIX
    options:
      - 1 and 2
      - 2 and 4
      - 1 and 4
      - 2 and 3
    answer: 2
    explanation: 1 and 4 is the correct answer to “PHP has long supported two regular expression implementations known as _______ and _______. 1. Perl 2. PEAR 3. Pearl 4. POSIX”. This question is standard in competitive examination syllabi for Regular Expressions.
    keyConcept: Regular Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: Which one of the following regular expression matches any string containing zero or one p?
    options:
      - p+
      - p*
      - P?
      - p#
    answer: 2
    explanation: P? is the correct answer to “Which one of the following regular expression matches any string containing zero or one p”. This question is standard in competitive examination syllabi for Regular Expressions.
    keyConcept: Regular Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: POSIX implementation was deprecated in which version of PHP?
    options:
      - PHP 4
      - PHP 5
      - PHP 5.2
      - PHP 5.3
    answer: 3
    explanation: PHP 5.3 is the correct answer to “POSIX implementation was deprecated in which version of PHP”. This question is standard in competitive examination syllabi for Regular Expressions.
    keyConcept: Regular Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: POSIX stands for
    options:
      - Portable Operating System Interface for Unix
      - Portable Operating System Interface for Linux
      - Portative Operating System Interface for Unix
      - Portative Operating System Interface for Linux
    answer: 0
    explanation: Portable Operating System Interface for Unix is the correct answer to “POSIX stands for”. This question is standard in competitive examination syllabi for Regular Expressions.
    keyConcept: Regular Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Which one of the following functions can be used to concatenate array elements to form a single delimited string?
    options:
      - explode()
      - implode()
      - concat()
      - concatenate()
    answer: 1
    explanation: implode() is the correct answer to “Which one of the following functions can be used to concatenate array elements to form a single delimited string”. This question is standard in competitive examination syllabi for Regular Expressions.
    keyConcept: Regular Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: Which one of the following functions finds the last occurrence of a string, returning its numerical position?
    options:
      - strlastpos()
      - strpos()
      - strlast()
      - strrpos()
    answer: 3
    explanation: strrpos() is the correct answer to “Which one of the following functions finds the last occurrence of a string, returning its numerical position”. This question is standard in competitive examination syllabi for Regular Expressions.
    keyConcept: Regular Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: Which one of the following preg PHP function is used to do a find and replace on a string or an array?
    options:
      - preg_replace()
      - preg_find()
      - preg_find_replace()
      - preg_findre()
    answer: 0
    explanation: preg_replace() is the correct answer to “Which one of the following preg PHP function is used to do a find and replace on a string or an array”. This question is standard in competitive examination syllabi for Regular Expressions.
    keyConcept: Regular Expressions
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: Parameter flags was added in which version of PHP?
    options:
      - PHP 4.0
      - PHP 4.1
      - PHP 4.2
      - PHP 4.3
    answer: 3
    explanation: PHP 4.3 is the correct answer to “Parameter flags was added in which version of PHP”. This question is standard in competitive examination syllabi for Regular Expressions.
    keyConcept: Regular Expressions
    testedIn:
      - FPSC
      - PPSC
---


