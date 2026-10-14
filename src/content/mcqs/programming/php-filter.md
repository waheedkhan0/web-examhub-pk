---
title: Php Filter MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Php Filter with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: php-filter
topicName: Php Filter
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
    question: How many types of filtering are present in PHP?
    options:
      - "3"
      - "2"
      - "4"
      - None
    answer: 1
    explanation: "There are two main types of filtering: validation and sanitization."
    keyConcept: Php Filter
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: What will be the output of the following PHP code? <?php $num = "123" ; if ( ! filter_var($num, FILTER_VALIDATE_INT)) echo ( "Integer is not valid" ); else echo ( "Integer is valid" ); ?>
    options:
      - No output is returned
      - Integer is not valid
      - Integer is valid
      - Error
    answer: 2
    explanation: filter_var() – Filters a single variable with a specified filter.
    keyConcept: Php Filter
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Which one of the following does not describe a validating filter?
    options:
      - Are used to allow or disallow specified characters in a string
      - Are used to validate user input
      - Strict format rules
      - Returns the expected type on success or FALSE on failure
    answer: 0
    explanation: Option a) describes Sanitizing filters.
    keyConcept: Php Filter
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What will be the output of the following PHP code? <?php $var=300; $int_options = array ("options" =>array ("min_range" => 0 , "max_range" => 256 )); if ( ! filter_var($var, FILTER_VALIDATE_INT, $int_options)) echo ( "Integer is not valid" ); else echo ( "Integer is valid" ); ?>
    options:
      - No output is returned
      - Integer is not valid
      - Integer is valid
      - Error
    answer: 1
    explanation: "Since the integer is “300” it is not in the specified range, and the output of the code above will be: “Integer is not valid”."
    keyConcept: Php Filter
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: What will be the output of the following PHP code? <?php $value = 'car' ; $result = filter_var($value, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE); ?>
    options:
      - "FALSE"
      - "TRUE"
      - "NULL"
      - ERROR
    answer: 2
    explanation: There is an undocumented filter flag for FILTER_VALIDATE_BOOLEAN. The documentation implies that it will return NULL if the value doesn’t match the allowed true/false values. However this doesn’t happen unless you give it the FILTER_NULL_ON_FAILURE flag.
    keyConcept: Php Filter
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What will be the output of the following PHP code? <?php function convertSpace($string) { return str_replace ("_", " ", $string); } $string = "Peter_is_a_great_guy!" ; echo filter_var($string, FILTER_CALLBACK, array ( "options" => "convertSpace" )); ?>
    options:
      - Peter_is_a_great_guy!
      - Peterisagreatguy!
      - Peter is a great guy!
      - Error
    answer: 2
    explanation: The code above converts all “_” to white spaces. Call the filter_var() function with the FILTER_CALLBACK filter and an array containing our function.
    keyConcept: Php Filter
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: Which of the following is/are an external data? 1. Cookies 2. Input data from a form 3. Server Variables 4. Web services data
    options:
      - Only 2
      - 2 and 3
      - None of the mentioned
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “Which of the following is/are an external data? 1. Cookies 2. Input data from a form 3. Server Variables 4. Web services data”. This question is standard in competitive examination syllabi for Php Filter.
    keyConcept: Php Filter
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: Which one of the following filter is used to filter several variables with the same or different filters?
    options:
      - filter_var_array()
      - filter_var()
      - filter_input
      - filter_input_array
    answer: 0
    explanation: filter_var_array() is the correct answer to “Which one of the following filter is used to filter several variables with the same or different filters”. This question is standard in competitive examination syllabi for Php Filter.
    keyConcept: Php Filter
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: Which one of the following filter checks if variable of specified type exists?
    options:
      - filter_has_var
      - filter_var
      - filter_id
      - filter_var_array
    answer: 0
    explanation: filter_has_var is the correct answer to “Which one of the following filter checks if variable of specified type exists”. This question is standard in competitive examination syllabi for Php Filter.
    keyConcept: Php Filter
    testedIn:
      - FPSC
      - PPSC
---


