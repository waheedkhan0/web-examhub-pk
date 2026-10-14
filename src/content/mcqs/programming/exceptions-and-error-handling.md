---
title: Exceptions And Error Handling MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Exceptions And Error Handling with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: exceptions-and-error-handling
topicName: Exceptions And Error Handling
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
    question: Which version of PHP introduced E_STRICT Error level?
    options:
      - PHP 4
      - PHP 5
      - PHP 5.2
      - PHP 5.3
    answer: 1
    explanation: Description for E_STRICT is PHP version portability suggestions
    keyConcept: Exceptions And Error Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: Which character do the error_reporting directive use to represent the logical operator NOT?
    options:
      - /
      - "!"
      - "~"
      - ^
    answer: 2
    explanation: The twidle (~) character is used to represent the logical operator NOT.
    keyConcept: Exceptions And Error Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Which version introduced the function error_get_last()?
    options:
      - PHP 4
      - PHP 5
      - PHP 5.2
      - PHP 5.3
    answer: 2
    explanation: This function returns an associative array consisting of the type, message, file, and line of the last occurring error.
    keyConcept: Exceptions And Error Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: Which function initializes the constants necessary for using the openlog(), clodelog(), and syslog() functions?
    options:
      - define_variable()
      - define_log_variable()
      - log_variable()
      - define_syslog_variable()
    answer: 3
    explanation: If you’re running PHP version 5.2.X or older, you need to execute this function before using any of the following logging functions.
    keyConcept: Exceptions And Error Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: Which version of PHP was added with Exception handling?
    options:
      - PHP 4
      - PHP 5
      - PHP 5.3
      - PHP 6
    answer: 1
    explanation: Exception handling was added to PHP with the version 5 release, and further enhanced with version 5.3.
    keyConcept: Exceptions And Error Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: How many methods are available for the exception class?
    options:
      - "5"
      - "6"
      - "7"
      - "8"
    answer: 2
    explanation: "The seven methods are: getCode(), getFile(), getLine(), getMessage(), getPrevious(), getTrace(), getTraceAsString()."
    keyConcept: Exceptions And Error Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: You can extend the exception base class, but you cannot override any of the preceding methods because the are declared as__________
    options:
      - protected
      - final
      - static
      - private
    answer: 1
    explanation: Marking a method as final prevents it from being overridden by a subclass.
    keyConcept: Exceptions And Error Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What does SPL stand for?
    options:
      - Standard PHP Library
      - Source PHP Library
      - Standard PHP List
      - Source PHP List
    answer: 0
    explanation: The standard PHP library(SPL) extends PHP by offering ready-made solutions to commonplace tasks such as file access, iteration of various sorts etc.
    keyConcept: Exceptions And Error Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: How many error levels are available in PHP?
    options:
      - "14"
      - "15"
      - "16"
      - "17"
    answer: 2
    explanation: 16 is the correct answer to “How many error levels are available in PHP”. This question is standard in competitive examination syllabi for Exceptions And Error Handling.
    keyConcept: Exceptions And Error Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What is the description of Error level E_ERROR?
    options:
      - Fatal run-time error
      - Near-fatal error
      - Compile-time error
      - Fatal Compile-time error
    answer: 0
    explanation: Fatal run-time error is the correct answer to “What is the description of Error level E_ERROR”. This question is standard in competitive examination syllabi for Exceptions And Error Handling.
    keyConcept: Exceptions And Error Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: Say you want to report error concerned about fatal run-time, fatal compile-time error and core error which statement would you use?
    options:
      - error_reporting = E_ALL
      - error_reporting = E_ERROR | E_PARSE | E_CORE_ERROR
      - error_reporting = E_ERROR | E_COMPILE_WARNING | E_CORE_ERROR
      - error_reporting = E_ERROR | E_COMPILE_ERROR | E_CORE_ERROR
    answer: 3
    explanation: error_reporting = E_ERROR | E_COMPILE_ERROR | E_CORE_ERROR is the correct answer to “Say you want to report error concerned about fatal run-time, fatal compile-time error and core error which statement would you use”. This question is standard in competitive examination syllabi for Exceptions And Error Handling.
    keyConcept: Exceptions And Error Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: Which of the following statements causes PHP to disregard repeated error messages that occur within the same file and on the same line?
    options:
      - ignore_repeated_errors
      - ignore_repeat_error
      - repeatedly_ignore_error
      - repeated_error_ignore
    answer: 0
    explanation: ignore_repeated_errors is the correct answer to “Which of the following statements causes PHP to disregard repeated error messages that occur within the same file and on the same line”. This question is standard in competitive examination syllabi for Exceptions And Error Handling.
    keyConcept: Exceptions And Error Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: Which logging option’s description is, if an error occurs when writing to the syslog, send output to the system console?
    options:
      - LOG_CONS
      - LOG_NDELAY
      - LOG_ODELAY
      - LOG_PERROR
    answer: 0
    explanation: LOG_CONS is the correct answer to “Which logging option’s description is, if an error occurs when writing to the syslog, send output to the system console”. This question is standard in competitive examination syllabi for Exceptions And Error Handling.
    keyConcept: Exceptions And Error Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: Which function is responsible for sending a custom message to the system log?
    options:
      - systemlog()
      - syslog()
      - log_system()
      - sys_log()
    answer: 1
    explanation: syslog() is the correct answer to “Which function is responsible for sending a custom message to the system log”. This question is standard in competitive examination syllabi for Exceptions And Error Handling.
    keyConcept: Exceptions And Error Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: Which version added the method getPrevious()?
    options:
      - PHP 4
      - PHP 5
      - PHP 5.1
      - PHP 5.3
    answer: 3
    explanation: PHP 5.3 is the correct answer to “Which version added the method getPrevious()”. This question is standard in competitive examination syllabi for Exceptions And Error Handling.
    keyConcept: Exceptions And Error Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: Which of the following statements invoke the exception class?
    options:
      - throws new Exception()
      - throw new Exception()
      - new Exception()
      - new throws Exception()
    answer: 1
    explanation: throw new Exception() is the correct answer to “Which of the following statements invoke the exception class”. This question is standard in competitive examination syllabi for Exceptions And Error Handling.
    keyConcept: Exceptions And Error Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: Which one of the following is the right description for the method getMessage() ?
    options:
      - Returns the message if it is passed to the constructor
      - Returns the message if it is passed to the class
      - Returns the message if it is passed to the file
      - Returns the message if it is passed to the object
    answer: 0
    explanation: Returns the message if it is passed to the constructor is the correct answer to “Which one of the following is the right description for the method getMessage()”. This question is standard in competitive examination syllabi for Exceptions And Error Handling.
    keyConcept: Exceptions And Error Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: How many predefined exceptions does SPL provide access to?
    options:
      - "13"
      - "14"
      - "15"
      - "16"
    answer: 0
    explanation: 13 is the correct answer to “How many predefined exceptions does SPL provide access to”. This question is standard in competitive examination syllabi for Exceptions And Error Handling.
    keyConcept: Exceptions And Error Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: Which of the following is/are not an exception? 1. BadFunctionCallException 2. BadMethodCallException 3. LogicException 4. DomainException
    options:
      - All of the mentioned
      - Only 4
      - 3 and 4
      - None of the mentioned
    answer: 3
    explanation: None of the mentioned is the correct answer to “Which of the following is/are not an exception? 1. BadFunctionCallException 2. BadMethodCallException 3. LogicException 4. DomainException”. This question is standard in competitive examination syllabi for Exceptions And Error Handling.
    keyConcept: Exceptions And Error Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: Which of the following is/are an exception? 1. OutOfBoundException 2. OutOfRangeException 3. OverflowException 4. UnderflowException
    options:
      - All of the mentioned
      - 1 and 3
      - 1 and 2
      - None of the mentioned
    answer: 0
    explanation: All of the mentioned is the correct answer to “Which of the following is/are an exception? 1. OutOfBoundException 2. OutOfRangeException 3. OverflowException 4. UnderflowException”. This question is standard in competitive examination syllabi for Exceptions And Error Handling.
    keyConcept: Exceptions And Error Handling
    testedIn:
      - FPSC
      - PPSC
---


