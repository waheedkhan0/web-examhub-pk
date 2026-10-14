---
title: Arrays — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Arrays — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: arrays-part-1
topicName: Arrays — Part 1
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
    question: PHP’s numerically indexed array begin with position ______.
    options:
      - "1"
      - "2"
      - "0"
      - "-1"
    answer: 2
    explanation: Like many programming languages, the first element of an array has an index value of 0.
    keyConcept: Arrays
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: Which of the following are correct ways of creating an array? 1. state[0] = “karnataka”; 2. $state[] = array(“karnataka”); 3. $state[0] = “karnataka”; 4. $state = array(“karnataka”);
    options:
      - 3 and 4
      - 2 and 3
      - Only 1
      - 2, 3 and 4
    answer: 0
    explanation: A variable name should start with $ symbol which is not present in i) and you need not put the square brackets when you use the array() constructor.
    keyConcept: Arrays
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What will be the output of the following php code? <?php $states = array( "karnataka" => array( "population" => "11,35,000" , "captial" => "Bangalore" ) , "Tamil Nadu" => array( "population" => "17,90,000" , "captial" => "Chennai" ) ) ; echo $states [ "karnataka" ][ "population" ] ; ?>
    options:
      - karnataka 11,35,000
      - 11,35,000
      - population 11,35,000
      - karnataka population
    answer: 1
    explanation: Treat states as a multidimensional array and accordingly traverse it to get the value.
    keyConcept: Arrays
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: Which function will return true if a variable is an array or false if it is not?
    options:
      - this_array()
      - is_array()
      - do_array()
      - in_array()
    answer: 1
    explanation: "A built-in function, is_array(), is available for testing an array. Its prototype follows: boolean is_array(mixed variable)."
    keyConcept: Arrays
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: Which in-built function will add a value to the end of an array?
    options:
      - array_unshift()
      - into_array()
      - inend_array()
      - array_push()
    answer: 3
    explanation: array_push adds a value to the end of an array, returning the total count of elementsin the array after the new value has been added.
    keyConcept: Arrays
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What will be the output of the following PHP code? <?php $state = array ( "Karnataka" , "Goa" , "Tamil Nadu" , "Andhra Pradesh" ) ; echo (array_search ( "Tamil Nadu" , $state ) ) ; ?>
    options:
      - "True"
      - "1"
      - "False"
      - "2"
    answer: 3
    explanation: The array_search() function searches an array for a specified value, returning its key if located and FALSE otherwise.
    keyConcept: Arrays
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What will be the output of the following PHP code? <?php $fruits = array ( "apple" , "orange" , "banana" ) ; echo (next( $fruits )) ; echo (next( $fruits )) ; ?>
    options:
      - orangebanana
      - appleorange
      - orangeorange
      - appleapple
    answer: 0
    explanation: The next() function returns the array value residing at the position immediately following that of the current array pointer.
    keyConcept: Arrays
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What will be the output of the following PHP code? <?php $fruits = array ( "apple" , "orange", array ( "pear" , "mango" ) , "banana" ) ; echo (count( $fruits, 1 )) ; ?>
    options:
      - "3"
      - "4"
      - "5"
      - "6"
    answer: 3
    explanation: The array entity holding pear and mango is counted as an item, just as its contents are.
    keyConcept: Arrays
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What will be the output of the following PHP code? <?php $cars = array( "Volvo" , "BMW" , "Toyota" ) ; echo "I like " . $cars [ 2 ] . ", " . $cars [ 1 ] . " and " . $cars [ 0 ] . "." ; ?>
    options:
      - I like Volvo, Toyota and BMW
      - I like Volvo, BMW and Toyota
      - I like BMW, Volvo and Toyota
      - I like Toyota, BMW and Volvo
    answer: 3
    explanation: The order of elements defined.
    keyConcept: Arrays
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What will be the output of the following PHP code? <?php $fname = array( "Peter" , "Ben" , "Joe" ) ; $age = array( "35" , "37" , "43" ) ; $c = array_combine( $age, $fname ) ; print_r( $c ) ; ?>
    options:
      - Array ( Peter Ben Joe )
      - Array ( [Peter] => 35 [Ben] => 37 [Joe] => 43 )
      - Array ( 35 37 43 )
      - Array ( [35] => Peter [37] => Ben [43] => Joe )
    answer: 3
    explanation: Here “keys” array is $age and “values” array is $fname.
    keyConcept: Arrays
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What will be the output of the following PHP code? <?php $a =array( "A" , "Cat" , "Dog" , "A" , "Dog" ) ; $b =array( "A" , "A" , "Cat" , "A" , "Tiger" ) ; $c =array_combine( $a,$b ) ; print_r(array_count_values( $c )) ; ?>
    options:
      - Array ( [A] => 5 [Cat] => 2 [Dog] => 2 [Tiger] => 1 )
      - Array ( [A] => 2 [Cat] => 2 [Dog] => 1 [Tiger] => 1 )
      - Array ( [A] => 6 [Cat] => 1 [Dog] => 2 [Tiger] => 1 )
      - Array ( [A] => 2 [Cat] => 1 [Dog] => 4 [Tiger] => 1 )
    answer: 0
    explanation: The array_count_values() function counts all the values of an array and array_combine() combines arrays.
    keyConcept: Arrays
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: What will be the output of the following PHP code? <?php $a1 = array ( "a" => "red" , "b" => "green" , "c" => "blue" , "d" => "yellow" ) ; $a2 = array ( "e" => "red" , "f" => "green" , "g" => "blue" , "h" => "orange" ) ; $a3 = array ( "i" => "orange" ) ; $a4 = array_combine ( $a2, $a3 ) ; $result = array_diff ( $a4, $a2 ) ; print_r ( $result ) ; ?>
    options:
      - Array ( [d] => yellow )
      - Array ( [i] => orange )
      - Array ( [h] => orange )
      - Array ( [d] => yellow [h] => orange )
    answer: 0
    explanation: The array_diff() function compares the values of two (or more) arrays, and returns the differences.
    keyConcept: Arrays
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What will be the output of the following PHP code? <?php $a1 = array( "red" , "green" ) ; $a2 = array( "blue" , "yellow" ) ; $a3 = array_merge( $a1, $a2 ) ; $a4 = array( "a" , "b" , "c" , "d" ) ; $a = array_combine( $a4, $a3 ) ; print_r( $a ) ; ?>
    options:
      - Array ( [a] => blue [b] => yellow [c] => red [d] => green )
      - Array ( [0] => blue [1] => yellow [2] => red [3] => green )
      - Array ( [0] => red [1] => green [2] => blue [3] => yellow )
      - Array ( [a] => red [b] => green [c] => blue [d] => yellow )
    answer: 3
    explanation: Basic combined application of array_combine() and array_merge().
    keyConcept: Arrays
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What will be the output of the following PHP code? <?php $names = array( "Sam", "Bob" , "Jack" ) ; echo $names [ 0 ] . "is the brother of " . $names [ 1 ] . " and " . $names [ 1 ] . "." ; ?>
    options:
      - Sam is the brother of Bob and Jack
      - Sam is the brother of Bob and Bob)
      - Sam is the brother of Jack and Bob)
      - Error
    answer: 1
    explanation: Simple definition of array and using it in a string. We have used $names[1] twice and hence Bob appears twice.
    keyConcept: Arrays
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What will be the output of the following PHP code? <?php $names = array( "Sam" , "Bob" , "Jack" ) ; echo $names [ 0 ] . "is the brother of " . $names [ 1 ] . " and " . $names [ 1 ] . "." . $brother; ?>
    options:
      - Sam is the brother of Bob and Bob) $brother
      - Sam is the brother of Bob and Bob)
      - $brother
      - Error
    answer: 3
    explanation: $brother undeclared.
    keyConcept: Arrays
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What will be the output of the following PHP code? <?php $place = array( "NYC" , "LA" , "Paris" ) ; array_pop( $place ) ; $place1 = array( "Paris" ) ; $place = array_merge( $place, $place1 ) ; print_r( $place ) ; ?>
    options:
      - Array ( [0] => LA [1] => Paris [2] => Paris )
      - Array ( [0] => NYC [1] => LA [2] => Paris)
      - Array ( [0] => NYC [1] => LA [2] => Paris [3] => Paris )
      - None of the mentioned
    answer: 0
    explanation: array_merge() and array_pop() yields that result.
    keyConcept: Arrays
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What will be the output of the following PHP code ? <?php $age = array ( "Harry" => "21" , "Ron" => "23" , "Malfoy" => "21" ); array_change_key_case ( $age, CASE_UPPER ); array_pop ( $age ); print_r ( $age ); ?>
    options:
      - Array ( [Harry] => 21 [Ron] => 23 [Malfoy] => 21 )
      - Array ( [HARRY] => 21 [RON] => 23 )
    answer: 1
    explanation: The array_change_key_case() function changes all keys in an array to lowercase or uppercase and arry_pop() removes last element
    keyConcept: Arrays
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: What will be the output of the following PHP code ? <?php $a1 = array ( "a" => "red" , "b" => "green" , "c" => "blue" , "d" => "yellow" ); $result = array_flip ( $a1 ); print_r ( $result ); ?>
    options:
      - Array ( [red] => red [green] => green [blue] => blue [yellow] => yellow )
      - Array ( [a] => a [b] => b [c] => c [d] => d )
      - Array ( [red] => a [green] => b [blue] => c [yellow] => d )
      - Array ( [a] => red [b] => green [c] => blue [d] => yellow )
    answer: 2
    explanation: The array_flip() function flips/exchanges all keys with their associated values in an array.
    keyConcept: Arrays
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: What will be the output of the following PHP code ? <?php $a1 = array ( "a" => "red" , "b" => "green" , "c" => "blue" , "d" => "yellow" ); $a2 = array ("e" => "red" , "f" => "green" , "g" => "blue" ); $result = array_intersect ( $a1, $a2 ); print_r ( $result ); ?>
    options:
      - Array ( [a] => red [b] => green [c] => blue )
      - Array ( [a] => red [b] => green [c] => blue [d] => yellow )
      - Array ( [e] => red [f] => green [g] => blue )
      - Array ( [a] => red [b] => green [c] => blue [d] => yellow [e] => red [f] => green [g] => blue )
    answer: 0
    explanation: The array_intersect() function compares the values of two (or more) arrays, and returns the matches.
    keyConcept: Arrays
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What will be the output of the following PHP code ? <?php $a = array( 12 , 5 , 2 ) ; echo( array_product ( $a )) ; ?>
    options:
      - "024"
      - "120"
      - "010"
      - "060"
    answer: 1
    explanation: The array_product() function calculates and returns the product of an array.
    keyConcept: Arrays
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: What will be the output of the following PHP code ? <?php $a = array( "a" => "Jaguar" , "b" => "Land Rover" , "c" => "Audi" , "d" => "Maseratti" ) ; echo array_search( "Audi" , $a ) ; ?>
    options:
      - a
      - b
      - c
      - d
    answer: 2
    explanation: The array_search() function searches for the element and returns the key of that element.
    keyConcept: Arrays
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What will be the output of the following PHP code ? <?php $city_west = array( "NYC" , "London" ) ; $city_east = array( "Mumbai" , "Beijing" ) ; print_r( array_replace ( $city_west, $city_east )) ; ?>
    options:
      - Array ( [1] => Mumbai [0] => Beijing )
      - Array ( [0] => NYC [1] => London )
      - Array ( [1] => NYC [0] => London )
      - Array ( [0] => Mumbai [1] => Beijing )
    answer: 3
    explanation: The array_replace() function replaces the values of the first array with the values from following arrays
    keyConcept: Arrays
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: What will be the output of the following PHP code ? <?php $people = array( "Peter" , "Susan" , "Edmund" , "Lucy" ) ; echo pos( $people ) ; ?>
    options:
      - Lucy
      - Peter
      - Susan
      - Edmund
    answer: 1
    explanation: The pos() function returns the value of the current element in an array, and since no operation has been done, the current element is the first element.
    keyConcept: Arrays
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: What will be the output of the following PHP code ? <?php $number = range( 0 , 5 ) ; print_r ( $number ) ; ?>
    options:
      - Array ( [0] => 0 [1] => 1 [2] => 2 [3] => 3 [4] => 4 [5] => 5 )
      - Array ( [0] => 0 [1] => 0 [2] => 0 [3] => 0 [4] => 0 [5] => 0 )
      - Array ( [0] => 5 [1] => 5 [2] => 5 [3] => 5 [4] => 5 [5] => 5 )
      - Array ( [0] => 0 [5] => 5 )
    answer: 0
    explanation: The range() function creates an array containing a range of elements.
    keyConcept: Arrays
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: What will be the output of the following PHP code ? <?php $array = array( "red" , "green" ) ; array_push( $array, "blue" , "yellow" ) ; print_r( $array ) ; ?>
    options:
      - Array ( [0] => red [1] => green [2] => blue [3] => yellow )
      - Array ( [0] => blue [1] => yellow [2] => red [3] => green )
      - Array ( [0] => red [1] => green )
      - Array ( [0] => blue [1] => yellow )
    answer: 0
    explanation: The array_push() function inserts one or more elements to the end of an array.
    keyConcept: Arrays
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: What will be the output of the following PHP code? <?php $cars = array( "Volvo" , "BMW" , "Toyota" , "Honda" , "Mercedes" , "Opel " ) ; print_r(array_chunk( $cars, 2 )) ; ?>
    options:
      - Array ( [0] => Array ( [1] => Volvo [2] => BMW ) [1] => Array ( [1] => Toyota [2] => Honda ) [2] => Array ( [1] => Mercedes [2] => Opel ) )
      - Array ( [1] => Array ( [1] => Volvo [2] => BMW ) [2] => Array ( [1] => Toyota [2] => Honda ) [3] => Array ( [1] => Mercedes [2] => Opel ) )
      - Array ( [0] => Array ( [0] => Volvo [1] => Volvo ) [1] => Array ( [0] => BMW [1] => BMW ) [2] => Array ( [0] => Toyota [1] => Toyota ) )
      - Array ( [0] => Array ( [0] => Volvo [1] => BMW ) [1] => Array ( [0] => Toyota [1] => Honda ) [2] => Array ( [0] => Mercedes [1] => Opel ) )
    answer: 3
    explanation: The array_chunk() function splits an array into chunks of new arrays.
    keyConcept: Arrays
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: What will be the output of the following PHP code? <?php $fname = array( "Peter" , "Ben" , "Joe" ) ; $age = array( "35" , "37" , "43" ) ; $c = array_combine( $fname, $age ) ; print_r( $c ) ; ?>
    options:
      - Array ( Peter Ben Joe )
      - Array ( [Peter] => 35 [Ben] => 37 [Joe] => 43 )
      - Array ( 35 37 43 )
      - Array ( “[Peter] => 35” “[Ben] => 37” “[Joe] => 43” )
    answer: 1
    explanation: The array_combine() function creates an array by using the elements from one “keys” array and one “values” array.
    keyConcept: Arrays
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: What will be the output of the following PHP code? <?php $a = array( "A" , "Cat" , "Dog" , "A" , "Dog" ) ; print_r(array_count_values( $a )) ; ?>
    options:
      - Array ( [A] => 2 [Cat] => 1 [Dog] => 2 )
      - Array ( [A] => 2 [Cat] => 2 [Dog] => 1 )
      - Array ( [A] => 1 [Cat] => 1 [Dog] => 2 )
      - Array ( [A] => 2 [Cat] => 1 [Dog] => 1)
    answer: 0
    explanation: The array_count_values() function counts all the values of an array.
    keyConcept: Arrays
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: What will be the output of the following PHP code? <?php $a1 = array( "a" => "red" , "b" => "green" , "c" => "blue" , "d" => "yellow" ) ; $a2 = array( "e" => "red" , "f" => "green" , "g" => "blue" ) ; $result = array_diff( $a1, $a2 ) ; print_r( $result ) ; ?>
    options:
      - Array ( [d] => yellow )
      - Array ( [c] => blue )
      - Array ( [a] => red )
      - Array ( [e] => yellow )
    answer: 0
    explanation: The array_diff() function compares the values of two (or more) arrays, and returns the differences.
    keyConcept: Arrays
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: What will be the output of the following PHP code? <?php $a1 = array( "red" , "green" ) ; $a2 = array( "blue" , "yellow" ) ; print_r(array_merge( $a1, $a2 )) ; ?>
    options:
      - Array ( [0] => red [1] => green)
      - Array ( [0] => blue [1] => yellow [2] => red [3] => green )
      - Array ( [0] => red [1] => green [2] => blue [3] => yellow )
      - Array ( [0] => blue [1] => yellow )
    answer: 2
    explanation: The array_merge() function merges one or more arrays into one array.
    keyConcept: Arrays
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: What will be the output of the following PHP code? <?php $a = array( "a" => "red" , "b" => "green" , "c" => "blue" ) ; echo array_shift( $a ) ; print_r ( $a ) ; ?>
    options:
      - green
      - red
      - blue
      - none of the mentioned
    answer: 1
    explanation: The array_shift() function removes the first element from an array, and returns the value of the removed element.
    keyConcept: Arrays
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: What will be the output of the following PHP code? <?php $a = array( "red" , "green" , "blue" ) ; array_pop( $a ) ; print_r( $a ) ; ?>
    options:
      - Array ( [0] => red [1] => green )
      - Array ( [0] => green [1] => blue )
      - Array ( [0] => red [1] => blue )
      - Array ( [0] => blue [1] => blue )
    answer: 0
    explanation: The array_pop() function deletes the last element of an array.
    keyConcept: Arrays
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: What will be the output of the following PHP code? <?php $fruits = array ( "mango" , "apple" , "pear" , "peach" ) ; $fruits = array_flip( $fruits ) ; echo ( $fruits [ 0 ]) ; ?>
    options:
      - mango
      - error
      - peach
      - "0"
    answer: 1
    explanation: As we are flipping the values, $fruits[“mango”] = 0, $fruits[“apple”] = 1 and so on.
    keyConcept: Arrays
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: What will be the output of the following PHP code? <?php $fruits = array ( "mango" , "apple" , "peach" , "pear" ) ; $fruits = asort ( $fruits ) ; printr ( $fruits ) ; ?>
    options:
      - Array ( [1] => apple [0] => mango [2] => peach [3] => pear )
      - Array ( [0] => apple [1] => mango [2] => peach [3] => pear )
      - Error
      - Array ( [1] => apple [0] => mango [3] => peach [2] => pear )
    answer: 0
    explanation: The function asort() sorts the array in ascending order, except that the key/value corresponding is maintained.
    keyConcept: Arrays
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: What will be the output of the following PHP code? <?php $arr = array ( "picture1.JPG" , "picture2.jpg" , "Picture10.jpg" , "picture20.jpg" ) ; sort( $arr ) ; print_r( $arr ) ; ?>
    options:
      - Array ( [0] => picture1.JPG [1] => Picture10.jpg [2] => picture2.jpg [3] => picture20.jpg )
      - Array ( [0] => picture1.JPG [1] => picture2.jpg [2] => Picture10.jpg [3] => picture20.jpg )
      - Array ( [0] => Picture10.jpg [1] => picture1.JPG [2] => picture2.jpg [3] => picture20.jpg )
      - Array ( [0] => Picture10.jpg [1] => picture1.JPG [2] => picture20.jpg [3] => picture2.jpg )
    answer: 2
    explanation: While sorting each character is compared with the others and sorted using ascii values therefore we the sorted array to be like option c.
    keyConcept: Arrays
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: What will be the output of the following PHP code? <?php $face = array ( "A" , "J" , "Q" , "K" ) ; $number = array ( "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9" , "10" ) ; $cards = array_merge ( $face, $number ) ; print_r ( $cards ) ; ?>
    options:
      - Array ( [0] => A [1] => J [2] => Q [3] => K [4] => 2 [5] => 3 [6] => 4 [7] => 5 [8] => 6 [9] => 7 [10] => 8 [11] => 9 [12] => 10 )
      - Array ( [0] => A [1] => 2 [2] => J [3] => 3 [4] => Q [5] => 4 [6] => K [7] => 5 [8] => 6 [9] => 7 [10] => 8 [11] => 9 [12] => 10 )
      - Error
      - Array ( [0] => 2 [1] => 3 [2] => 4 [3] => 5 [4] => 6 [5] => 7 [6] => 8 [7] => 9 [8] => 10 [9] => A [10] => J [11] => Q [12] => K )
    answer: 0
    explanation: The resulting array will begin with the first input array parameter, appending each subsequent array parameter in the order of appearance.
    keyConcept: Arrays
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: What will be the output of the following PHP code? <?php $fruits = array ( "apple" , "mango" , "peach" , "pear" , "orange" ) ; $subset = array_slice ( $fruits, 2 ) ; print_r ( $subset ) ; ?>
    options:
      - Array ( [0] => peach )
      - Array ( [0] => apple [1] => mango [2] => peach )
      - Array ( [0] => apple [1] => mango )
      - Array ( [0] => peach [1] => pear [2] => orange )
    answer: 3
    explanation: The array_slice() function returns a section of an array based on a starting and ending offset value.
    keyConcept: Arrays
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: What will be the output of the following PHP code? <?php $fruits = array ( "apple" , "mango" , "peach" , "pear" , "orange" ) ; $subset = array_splice ( $fruits, 2 ) ; print_r ( $fruits ) ; ?>
    options:
      - Error
      - Array ( [0] => apple [1] => mango [2] => peach )
      - Array ( [0] => apple [1] => mango )
      - Array ( [0] => pear [1] => orange )
    answer: 2
    explanation: The array_splice() function removes all elements of an array found within a specified range.
    keyConcept: Arrays
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: What will be the output of the following PHP code? <?php $number = array ( "4" , "hello" , 2 ) ; echo (array_sum ( $number )) ; ?>
    options:
      - 4hello2
      - "4"
      - "2"
      - "6"
    answer: 3
    explanation: The array_sum() function add all the values of the input array together, returning the final sum. If a string datatype is found, it’ll be ignored.
    keyConcept: Arrays
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: What will be the output of the following PHP code? <?php $array1 = array ( "KA" , "LA" , "CA" , "MA" , "TA" ) ; $array2 = array ( "KA" , "IA" , "CA" , "GA" , "TA" ) ; $inter = array_intersect ( $array1, $array2 ) ; print_r ( $inter ) ; ?>
    options:
      - Array ( [0] => KA [1] => LA [2] => CA [3] => MA [4] => TA [5] => IA [6] => GA )
      - Array ( [0] => KA [2] => CA [4] => TA )
      - Array ( [1] => IA [3] => GA )
      - Array ( [1] => LA [3] => MA )
    answer: 1
    explanation: The array_intersect() function returns a key preserved array consisting only of those values present in the first array that are also present in each of the other input arrays.
    keyConcept: Arrays
    testedIn:
      - FPSC
      - PPSC
---


