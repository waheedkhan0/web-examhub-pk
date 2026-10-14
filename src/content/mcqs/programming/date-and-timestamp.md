---
title: Date And Timestamp MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Date And Timestamp with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: date-and-timestamp
topicName: Date And Timestamp
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
    question: "What will be the output of the following PHP code? <?php echo (checkdate( 4,31,2010 ) ? 'Valid' : 'Invalid' ) ; ?>"
    options:
      - "TRUE"
      - "FALSE"
      - Valid
      - Invalid
    answer: 3
    explanation: April has 30 days and the above date is 31 therefore Invalid is returned.
    keyConcept: Date And Timestamp
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: The date() function returns ___ representation of the current date and/or time.
    options:
      - Integer
      - String
      - Boolean
      - Float
    answer: 1
    explanation: "The prototype of this function is: string date(string format [, int timestamp])."
    keyConcept: Date And Timestamp
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Which one of the following format parameter can be used to identify timezone?
    options:
      - T
      - "N"
      - E
      - I
    answer: 2
    explanation: When the format is E the timezone is identified and returned…example America/New_York.
    keyConcept: Date And Timestamp
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: If the format is F then which one of the following will be returned?
    options:
      - Complete text representation of month
      - Day of month, with leading zero
      - Daylight saving time
      - Day of month, without zeros
    answer: 0
    explanation: Day of month, with leading zero is represented by D; Daylight saving time by I; Day of month, without zeros by j.
    keyConcept: Date And Timestamp
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: What will be the output of the following code? If say date is 22/06/2013. <?php echo "Today is " .date( "F d, Y" ) ?>
    options:
      - Today is 22 June, 2013
      - Today is 22-06-2013
      - Today is 06-22-2013
      - Today is June 22, 2013
    answer: 3
    explanation: F is the parameter for complete text representation of month, d for day of month, and Y for 4 digit representation of year.
    keyConcept: Date And Timestamp
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: Which function displays the web page’s most recent modification date?
    options:
      - lastmod()
      - getlastmod()
      - last_mod()
      - get_last_mod()
    answer: 1
    explanation: The getlastmod() function returns the value of the page’s Last Modified header or FALSE in the case of an error.
    keyConcept: Date And Timestamp
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What will be the output of the following PHP code? If say date is 22/06/2013. <?php printf( date( "t" ) ) ?>
    options:
      - "30"
      - "22"
      - JUNE
      - "2013"
    answer: 0
    explanation: The t parameter is used to determine the number of days in the current month.
    keyConcept: Date And Timestamp
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: Say you want to calculate the date 45 days from the present date which one of the following statement will you use?
    options:
      - totime(“+45”)
      - totime(“+45 days”)
      - strtotime(“+45 days”)
      - strtotime(“-45 days”)
    answer: 2
    explanation: The strtotime() function and GNU date syntax is used to calculating the date x days from the present date.
    keyConcept: Date And Timestamp
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: To create an object and set the date to JUNE 22, 2013, which one of the following statement should be executed?
    options:
      - $date = Date(“22 JUNE 2013”)
      - $date = new Date(“JUNE 22 2013”)
      - $date = DateTime(“22 JUNE 2013”)
      - $date = new DateTime(“22 JUNE 2013”)
    answer: 3
    explanation: The dateTime() method is class constructor. You can set the date either at the time of instantiation or later by using a variety of mutators.
    keyConcept: Date And Timestamp
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: How many methods does the DateTime class have?
    options:
      - "8"
      - "9"
      - "10"
      - "11"
    answer: 1
    explanation: The DateTime class has nine methods, all of which are public.
    keyConcept: Date And Timestamp
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: How many constants does the DateTime class have?
    options:
      - "8"
      - "9"
      - "10"
      - "11"
    answer: 3
    explanation: The DateTime class has 11 constants, no static properties or methods.
    keyConcept: Date And Timestamp
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: Which method is simply an object-oriented version of date()?
    options:
      - DateTime::format()
      - DateTime::modify()
      - DateTime::setTime()
      - DateTime::setDate()
    answer: 0
    explanation: The format() method is simply an object-oriented version of date(). It takes $dateFormat as an argument. $dateFormat is a string consisting of the same date formatting characters accepted by the procedural date() function.
    keyConcept: Date And Timestamp
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: Which of the following is the right way to use the DateTime class?
    options:
      - $date = get_Class(DateTime)
      - $date = class DateTime
      - $date = new DateTime()
      - $date = new class DateTime()
    answer: 2
    explanation: "The way you use the DateTime class is like any other class: instantiate an object, and store it in a variable."
    keyConcept: Date And Timestamp
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What will be the output of the following PHP code if date is 24/02/2008? <?php $date = new DateTime () ; echo $date- > format( 'l,F,js,Y' ) ?>
    options:
      - Sunday, February 24th 2008
      - Sunday, 02 24 2008
      - Sunday, 24 02 2008
      - Sunday, 24th February 2008
    answer: 0
    explanation: The format() method displays the date in same way as standard date function().
    keyConcept: Date And Timestamp
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: Which of the following statements can be used to set the time zone in individual scripts?
    options:
      - date_set_timezone(‘Europe/London’)
      - date_default_timezone_set(‘Europe/London’)
      - date_set_default_timezone(‘Europe/London’)
      - date_default_timezone(‘Europe/London’)
    answer: 1
    explanation: You can also use ini_set(‘date.timezone’, ‘Europe/London’);.
    keyConcept: Date And Timestamp
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: Among the four PHP DateTimeZone classes given below how many are static? 1. listAbbreviations() 2. getName() 3. getOffset() 4. listIdentifiers()
    options:
      - "1"
      - "2"
      - "3"
      - "4"
    answer: 1
    explanation: listAbbreviations() and listIdentifiers() are static methods.
    keyConcept: Date And Timestamp
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: Among the four PHP DateTimeZone classes given below how many are nonstatic? 1. _construct() 2. getName() 3. getOffset() 4. getTransitions()
    options:
      - "1"
      - "2"
      - "3"
      - "4"
    answer: 3
    explanation: All of the given methods are non static.
    keyConcept: Date And Timestamp
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: Which of the following statements can be used to add two months to the existing date?
    options:
      - $date->modify(‘+2 months’)
      - $date = modify(‘+2 months’)
      - $date = modify(‘2+ months’)
      - $date->modify(‘2+ months’)
    answer: 0
    explanation: To change the date stored by a DateTime object after it has been created, you use DateTime::modify() with a natural language expression.
    keyConcept: Date And Timestamp
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: Which method enables you to calculate whether daylight saving time is in force at a specific date and time?
    options:
      - getOffset()
      - getTranitions()
      - ISODate()
      - savingTime()
    answer: 1
    explanation: This outputs a multidimensional array listing past and future changes to the offset from UTC for a DateTimeZone object.
    keyConcept: Date And Timestamp
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: Which one of the following function is useful for producing a timestamp based on a given date and time.
    options:
      - time()
      - mktime()
      - mrtime()
      - mtime()
    answer: 1
    explanation: mktime() is the correct answer to “Which one of the following function is useful for producing a timestamp based on a given date and time.”. This question is standard in competitive examination syllabi for Date And Timestamp.
    keyConcept: Date And Timestamp
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: Which of the following functions do not return a timestamp? 1. time() 2. date() 3. strtotime() 4. localtime() 5. gmmktime()
    options:
      - Option 1 and 5
      - Option 3 and 4
      - Option 1 and 4
      - Option 2 and 4
    answer: 3
    explanation: Option 2 and 4 is the correct answer to “Which of the following functions do not return a timestamp? 1. time() 2. date() 3. strtotime() 4. localtime() 5. gmmktime()”. This question is standard in competitive examination syllabi for Date And Timestamp.
    keyConcept: Date And Timestamp
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: The getdate() function returns
    options:
      - An integer
      - A floating-point number
      - An array
      - A string
      - A Boolean
    answer: 2
    explanation: An array is the correct answer to “The getdate() function returns”. This question is standard in competitive examination syllabi for Date And Timestamp.
    keyConcept: Date And Timestamp
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: .......... Returns the time of sunrise for a given day / location.
    options:
      - datesunrise()
      - date_sunrise()
      - date-sunrise()
      - date.sunrise()
    answer: 1
    explanation: date_sunrise() is the correct answer to “.......... Returns the time of sunrise for a given day / location.”. This question is standard in competitive examination syllabi for Date And Timestamp.
    keyConcept: Date And Timestamp
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: What will the following script output? <?php $time = strtotime ( '2004/01/01' ) ; echo date ( 'H:i:s', $time ) ; ?>
    options:
      - "0:00:00"
      - "12:00:00"
      - 00:i:00
      - 12:i:00
      - "-1"
    answer: 2
    explanation: 00:i:00 is the correct answer to “What will the following script output? <?php $time = strtotime ( '2004/01/01' ) ; echo date ( 'H:i:s', $time ) ; ?>”. This question is standard in competitive examination syllabi for Date And Timestamp.
    keyConcept: Date And Timestamp
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: ................Checks a date for numeric validity.
    options:
      - check_date
      - verifydate
      - Verify_date
      - checkdate
    answer: 3
    explanation: checkdate is the correct answer to “................Checks a date for numeric validity.”. This question is standard in competitive examination syllabi for Date And Timestamp.
    keyConcept: Date And Timestamp
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: What is the difference, in seconds, between the current timestamp in the GMT time zone and the current timestamp in your local time zone?
    options:
      - It depends on the number of hours between the local time zone and GMT
      - There is no difference
      - The two will only match if the local time zone is GMT
      - The two will never match
      - None of the above
    answer: 1
    explanation: There is no difference is the correct answer to “What is the difference, in seconds, between the current timestamp in the GMT time zone and the current timestamp in your local time zone”. This question is standard in competitive examination syllabi for Date And Timestamp.
    keyConcept: Date And Timestamp
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: You must make a call to ................... to specify what time zone you want calculations to take place in before calling any date functions.
    options:
      - date_default_timezone_set()
      - datedefault_timezone_set()
      - date_defaulttimezone_set()
      - date_default_timezoneset()
    answer: 0
    explanation: date_default_timezone_set() is the correct answer to “You must make a call to ................... to specify what time zone you want calculations to take place in before calling any date functions.”. This question is standard in competitive examination syllabi for Date And Timestamp.
    keyConcept: Date And Timestamp
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: What would happen if the following script were run on a Windows server set to Moscow, Russia’s time zone? <?php echo gmmktime ( 0, 0, 0, 1, 1, 1970 ) ; ?>
    options:
      - It would output the number 0
      - It would output the number -1
      - It would output the number 1
      - It would raise an error
      - It would output nothing
    answer: 1
    explanation: It would output the number -1 is the correct answer to “What would happen if the following script were run on a Windows server set to Moscow, Russia’s time zone? <?php echo gmmktime ( 0, 0, 0, 1, 1, 1970 ) ; ?>”. This question is standard in competitive examination syllabi for Date And Timestamp.
    keyConcept: Date And Timestamp
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: The ......... function parses an English textual date or time into a Unix timestamp.
    options:
      - strtodate()
      - stroftime()
      - strtotime()
      - str_to_time()
    answer: 2
    explanation: strtotime() is the correct answer to “The ......... function parses an English textual date or time into a Unix timestamp.”. This question is standard in competitive examination syllabi for Date And Timestamp.
    keyConcept: Date And Timestamp
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: ................ Formats a local time or date according to locale settings.
    options:
      - strftime
      - strgtime
      - strhtime
      - stritime
    answer: 0
    explanation: strftime is the correct answer to “................ Formats a local time or date according to locale settings.”. This question is standard in competitive examination syllabi for Date And Timestamp.
    keyConcept: Date And Timestamp
    testedIn:
      - FPSC
      - PPSC
---


