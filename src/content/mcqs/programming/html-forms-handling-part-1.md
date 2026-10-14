---
title: Html Forms Handling — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Html Forms Handling — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: html-forms-handling-part-1
topicName: Html Forms Handling — Part 1
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
    question: When you use the $_POST variable to collect data, the data is visible to.
    options:
      - none
      - only you
      - everyone
      - selected few
    answer: 1
    explanation: The POST method, data is invisible to others.
    keyConcept: Html Forms Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: Which one of the following should not be used while sending passwords or other sensitive information?
    options:
      - GET
      - POST
      - REQUEST
      - NEXT
    answer: 0
    explanation: Because the data is visible to everyone.
    keyConcept: Html Forms Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What will be the value of the variable $input in the following PHP code? <?php $input = "Swapna<td>Lawrence</td>you are really<i>pretty</i>!" ; $input = strip_tags ($input, "<i></i>" ); ?>
    options:
      - Swapna Lawrence you are really pretty!
      - Swapna
      - Swapna Lawrence you are reallypretty!
    answer: 2
    explanation: Italic tags <i></i> might be allowable, but table tags <td></td> could potentially wreak havoc on a page.
    keyConcept: Html Forms Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: How many validation filters like FILTER_VALIDATE_EMAIL are currently available?
    options:
      - "5"
      - "6"
      - "7"
      - "8"
    answer: 2
    explanation: There are seven validation filters. They are FILTER_VALIDATE_EMAIL, FILTER_VALIDATE_BOOLEAN, FILTER_VALIDATE_FLOAT, FILTER_VALIDATE_INT, FILTER_VALIDATE_IP, FILTER_VALIDATE_REGEXP, FILTER_VALIDATE_URL.
    keyConcept: Html Forms Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: Which of the following variables does PHP use to authenticate a user? 1. $_SERVER[‘PHP_AUTH_USER’]. 2. $_SERVER[‘PHP_AUTH_USERS’]. 3. $_SERVER[‘PHP_AUTH_PU’]. 4. $_SERVER[‘PHP_AUTH_PW’].
    options:
      - 1 and 2
      - 2 and 4
      - 1 and 4
      - 2 and 3
    answer: 2
    explanation: $_SERVER[‘PHP_AUTH_USER’] and $_SERVER[‘PHP_AUTH_PW’] store the username and password values, respectively.
    keyConcept: Html Forms Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: Which function is used to verify whether a variable contains a value?
    options:
      - header()
      - footer()
      - inset()
      - isset()
    answer: 3
    explanation: "The isset() function determines whether a variable has been assigned a value. Its prototype follows: boolean isset(mixed var [,mixed var [,…]])."
    keyConcept: Html Forms Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: In which authentication method does changing the username or password can be done only by entering the code and making the manual adjustment.
    options:
      - Hard-coding a login pair directly into the script
      - File-based authentication
      - Data-based authentication
      - PEAR’S HTTP authentication
    answer: 0
    explanation: This is one of the drawbacks of Hard-coding a login pair directly into the script.
    keyConcept: Html Forms Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: The authentication File.txt, the file which stores username and password should be stored ________ the server document root.
    options:
      - Inside
      - Outside
      - Within
      - None of the mentioned
    answer: 1
    explanation: f it is not stored outside, the attacker could discover the file through brute force guessing.
    keyConcept: Html Forms Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: Which function is used to split a string into a series of substrings, with each string boundary is determined by a specific separator?
    options:
      - break()
      - divide()
      - explode()
      - md5()
    answer: 2
    explanation: Although they are similar function, you should use explode() instead of split().In fact split() function has been deprecated altogether.
    keyConcept: Html Forms Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: In which of the following situations does file-based authentication become inconvenient. 1. small list 2. large number of user 3. users are being regularly added 4. static authentication
    options:
      - 1 and 4
      - 1 and 3
      - 2 and 3
      - 2 and 4
    answer: 2
    explanation: Such requirements are better satisfied by implementing a database based solution.
    keyConcept: Html Forms Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: Which is the most powerful authentication method among the four?
    options:
      - Hard-coding a login pair directly into the script
      - File-based authentication
      - Data-based authentication
      - PEAR’S HTTP authentication
    answer: 2
    explanation: It not only enhances administrative convenience and scalability, but also can be integrated into a larger database infrastructure.
    keyConcept: Html Forms Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: Which directive determines whether PHP scripts on the server can accept file uploads?
    options:
      - file_uploads
      - file_upload
      - file_input
      - file_intake
    answer: 0
    explanation: By default its value is on.
    keyConcept: Html Forms Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: Which of the following directive determines the maximum amount of time that a PHP script will spend attempting to parse input before registering a fatal error?
    options:
      - max_take_time
      - max_intake_time
      - max_input_time
      - max_parse_time
    answer: 2
    explanation: This is relevant because particularly large files can take some time to upload, eclipsing the time set by this directive.
    keyConcept: Html Forms Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: Since which version of PHP was the directive max_file_limit available.
    options:
      - PHP 5.2.1
      - PHP 5.2.2
      - PHP 5.2.12
      - PHP 5.2.21
    answer: 2
    explanation: The max_file_limit directive sets an upper limit on the number of files which can be simultaneously uploaded.
    keyConcept: Html Forms Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: Which directive sets a maximum allowable amount of memory in megabytes that a script can allow?
    options:
      - max_size
      - post_max_size
      - max_memory_limit
      - memory_limit
    answer: 3
    explanation: Its default value is 16M.
    keyConcept: Html Forms Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: How many items are available in the $_FILES array?
    options:
      - "2"
      - "3"
      - "4"
      - "5"
    answer: 3
    explanation: $_FILEs[‘userfile’][‘error’], $_FILEs[‘userfile’][‘name’], $_FILEs[‘userfile’][‘size’], $_FILEs[‘userfile’][‘tmp_name’], $_FILEs[‘userfile’][‘type’] are the five items in the array.
    keyConcept: Html Forms Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: How many ways can a session data be stored?
    options:
      - "3"
      - "4"
      - "5"
      - "6"
    answer: 1
    explanation: Within flat files(files), within volatile memory(mm), using the SQLite database(sqlite), or through user defined functions(user).
    keyConcept: Html Forms Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: Which directive determines how the session information will be stored?
    options:
      - save_data
      - session.save
      - session.save_data
      - session.save_handler
    answer: 3
    explanation: "Its prototype follows: session.save_handler = files|mm|sqlite|user."
    keyConcept: Html Forms Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: Which one of the following is the default PHP session name?
    options:
      - PHPSESSID
      - PHPSESID
      - PHPSESSIONID
      - PHPIDSESS
    answer: 0
    explanation: You can change this name by using the session.name directive.
    keyConcept: Html Forms Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: If the directive session.cookie_lifetime is set to 3600, the cookie will live until.
    options:
      - 3600 sec
      - 3600 min
      - 3600 hrs
      - the browser is restarted
    answer: 0
    explanation: The lifetime is specified in seconds, so if the cookie should live 1 hour, this directive should be set to 3600.
    keyConcept: Html Forms Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: Neglecting to set which of the following cookie will result in the cookie’s domain being set to the host name of the server which generated it.
    options:
      - session.domain
      - session.path
      - session.cookie_path
      - session.cookie_domain
    answer: 3
    explanation: The directive session.cookie_domain determines the domain for which the cookie is valid.
    keyConcept: Html Forms Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What is the default number of seconds that cached session pages are made available before the new pages are created?
    options:
      - "360"
      - "180"
      - "3600"
      - "1800"
    answer: 1
    explanation: The directive which determines this is session.cache_expire.
    keyConcept: Html Forms Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: What is the default time(in seconds) for which session data is considered valid?
    options:
      - "1800"
      - "3600"
      - "1440"
      - "1540"
    answer: 2
    explanation: The session.gc_maxlifetime directive determines this duration. It can be set to any required value.
    keyConcept: Html Forms Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: Which function is used to erase all session variables stored in the current session?
    options:
      - session_destroy()
      - session_change()
      - session_remove()
      - session_unset()
    answer: 3
    explanation: This will not completely remove the session from the storage mechanism. If you want to completely destroy the session, you need to use the function session_destroy().
    keyConcept: Html Forms Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: Which one of the following statements should you use to set the session username to Nachi?
    options:
      - $SESSION[‘username’] = “Nachi”
      - $_SESSION[‘username’] = “Nachi”
      - session_start(“nachi”)
      - $SESSION_START[“username”] = “Nachi”
    answer: 1
    explanation: You need to refer the session variable ‘username’ in the context of the $_SESSION superglobal.
    keyConcept: Html Forms Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: "What will be the output of the following PHP code? Say your previous session username was nachi. <?php unset ( $_SESSION [ 'username' ]); printf ( \"Username now set to: %s\" , $_SESSION [ 'username' ]); ?>"
    options:
      - "Username now set to: nachi"
      - "Username now set to: System"
      - "Username now set to:"
      - Error
    answer: 2
    explanation: To delete the session variable ‘username’ we use the unset() function.
    keyConcept: Html Forms Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: An attacker somehow obtains an unsuspecting user’s SID and then using it to impersonate the user inorder to gain potentially sensitive information. This attack is known as.
    options:
      - session-fixation
      - session-fixing
      - session-hijack
      - session-copy
    answer: 0
    explanation: You can minimize this risk by regenerating the session ID on each request while maintaining the session-specified data. PHP offers a convenient function named session_regenerate_id() that will replace the existing ID with a new one.
    keyConcept: Html Forms Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: Which parameter determines whether the old session file will also be deleted when the session ID is regenerated?
    options:
      - delete_old_file
      - delete_old_session
      - delete_old_session_file
      - delete_session_file
    answer: 1
    explanation: By default, this behavior is disabled.
    keyConcept: Html Forms Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: The session_start() function must appear.
    options:
      - after the html tag
      - after the body tag
      - before the body tag
      - before the html tag
    answer: 3
    explanation: "Like this:"
    keyConcept: Html Forms Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: What is the return type of session_set_save_handler() function?
    options:
      - boolean
      - integer
      - float
      - character
    answer: 0
    explanation: Returns TRUE on success or FALSE on failure.
    keyConcept: Html Forms Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: Before you can start processing images with PHP, you must first add the ability to upload images to your administrative form on ________
    options:
      - .htaccess
      - function.inc.php
      - index.php
      - admin.php
    answer: 3
    explanation: To do this, you’ need to add a file upload input to your administrative form.
    keyConcept: Html Forms Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: When you’re uploading files you need to set the enctype of the form to __________
    options:
      - text
      - text/file
      - multipart/form-data
      - multimedia/form-data
    answer: 2
    explanation: Set the enctype of the form to multipart/form-data, which can accept files and standard form values.
    keyConcept: Html Forms Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: To check whether a file was uploaded, you look in the _______ superglobal array.
    options:
      - $_FILES
      - $_DOCS
      - $_DOCUMENTS
      - $_FOLDERS
    answer: 0
    explanation: Whenever a file is uploaded via an HTML form, that file is stored in temporary memory and information about the file is passed in the $_FILES superglobal.
    keyConcept: Html Forms Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: To make the ImageHandler class portable you should create a separate file for it called __________
    options:
      - imagehandler.inc.php
      - images.inc.php
      - handler.inc.php
      - imghandler.inc.php
    answer: 1
    explanation: "You save this file in the inc folder (full path: /xampp/htdocs/simple_blog/inc/images.inc.php)."
    keyConcept: Html Forms Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: DocBlocks are indicated by opening a comment using _________
    options:
      - /*
      - //*
      - /**
      - /*/
    answer: 2
    explanation: This is a special comment that provides information about a class, property, or method.
    keyConcept: Html Forms Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: To process the file, you need to break the array from $_FILES into individual values. You can do this using the ________ function.
    options:
      - divide()
      - list()
      - break()
      - indi()
    answer: 1
    explanation: The list() function allows you to create named variables for each array index as a comma-separated list.
    keyConcept: Html Forms Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: Before you try to process the file, you need to make sure that your $err value is equivalent to _________
    options:
      - UPLOAD_ERR_OK
      - UPLOAD_NO_ERR
      - UPLOAD_ERR_NO_OK
      - UPLOAD_ERR
    answer: 0
    explanation: When you’re dealing with files uploaded through an HTML form, you have access to a special constant called UPLOAD_ERR_OK that tells you whether a file uploaded successfully.
    keyConcept: Html Forms Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: You use the $_SERVER superglobal and your _______ property to create your path to check.
    options:
      - $load_dir
      - $load
      - $save
      - $save_dir
    answer: 3
    explanation: // Determines the path to check $path = $_SERVER[‘DOCUMENT_ROOT’] . $this->save_dir;
    keyConcept: Html Forms Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: Which function do you have to use to check whether the $path you’ve stored exists?
    options:
      - path_dir()
      - path()
      - is_dir()
      - None of the above
    answer: 2
    explanation: If the path exists, is_dir() returns TRUE; otherwise, it returns FALSE.
    keyConcept: Html Forms Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: Which one of the following is true about the following line – $obj = new ImageHandler(‘/images/’, array(400, 300));
    options:
      - This snippet sets the maximum dimensions allowed to 400 pixels wide by 300 pixels high
      - This snippet sets the minimum dimensions allowed to 300 pixels wide by 400 pixels high
      - This snippet sets the minimum dimensions allowed to 400 pixels wide by 300 pixels high
      - This snippet sets the maximum dimensions allowed to 300 pixels wide by 400 pixels high
    answer: 0
    explanation: If you needed to change the size of your images, you can change the dimensions using the above instantiation of ImageHandler
    keyConcept: Html Forms Handling
    testedIn:
      - FPSC
      - PPSC
---


