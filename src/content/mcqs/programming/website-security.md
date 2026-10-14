---
title: Website Security MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Website Security with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: website-security
topicName: Website Security
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
    question: Which one of the following statements should be used to disable just the fopen(), and file() functions?
    options:
      - disable_functions = fopen(), file()
      - disable_functions = fopen, file
      - functions_disable = fopen(), file()
      - functions_disable = fopen, file
    answer: 1
    explanation: You can set disable_functions equal to a comma-delimited list of function names that you want to disable.
    keyConcept: Website Security
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: Which one of the following statements should be used to disable the use of two classes administrator and janitor?
    options:
      - disable_classes = “administrator, janitor”
      - disable_classes = class administrator, class janitor
      - disable_classes = class “administrator”, class “janitor”
      - disable_class = class “administrator”, class “janitor”
    answer: 0
    explanation: There may be classes inside the libraries that you’d rather not make available. You can prevent the use of these classes with the disable_classes directive.
    keyConcept: Website Security
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What is the default value of max_execution_time directive? This directive specifies how many seconds a script can execute before being terminated.
    options:
      - "10"
      - "20"
      - "30"
      - "40"
    answer: 2
    explanation: This can be useful to prevent users’ scripts from consuming too much CPU time. If max_execution_time is set to 0, no time limit will be set.
    keyConcept: Website Security
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: The memory_limit is only applicable if _______ is enabled when you configure PHP. Fill in the blank.
    options:
      - –enable-limit
      - "-enable-memory-limit"
      - –enable-memory-limit
      - "-memory-limit"
    answer: 2
    explanation: "This directive specifies, in megabytes, how much memory a script can use. Default value: 128M."
    keyConcept: Website Security
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: Which Apache directive outputs Apache’s server version, server name, port and compile-in modules?
    options:
      - ServerSignature
      - ServerName
      - ServerDetails
      - ServerInfo
    answer: 0
    explanation: "It is capable of displaying output like: Apache/2.2.11 (Ubuntu) Server at localhost Port 80."
    keyConcept: Website Security
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: Which directive determines which degree of server details is provided if the ServerSignature directive is enabled?
    options:
      - ServerAddons
      - ServerExtra
      - ServerTokens
      - ServerDetails
    answer: 2
    explanation: "Six options are available: Full, Major, Minimal, Minior, OS, and Prod. If it is set to Full ‘Apache/2.2.11 (Ubuntu) PHP/5.3.2 Server’ will be displayed."
    keyConcept: Website Security
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: Which directive should we disable to obscure the fact that PHP is being used on our server?
    options:
      - show_php
      - expose_php
      - print_php
      - info_php
    answer: 1
    explanation: "Using the expose_php directive we can prevent PHP version details from being appended on our web server signature. When expose_php is disabled, the server signature will look like: Apache/2.2.11 (Ubuntu) Server."
    keyConcept: Website Security
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: Say I want to change the extension of a PHP file, which of the following statements should I edit to change from .php to .html in the httpd.conf file?
    options:
      - AddType application/x-httpd-php .php
      - AddType application/x-httpd-php .asp
      - AddType application/x-httpd-asp .php
      - AddType application/x-httpd-asp .asp
    answer: 0
    explanation: Just change the .php to .html and your extension will change. This is used for security purpose.
    keyConcept: Website Security
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: The developers of PHP deprecated the safe mode feature as of which PHP version.
    options:
      - PHP 5.1.0
      - PHP 5.2.0
      - PHP 5.3.0
      - PHP 5.3.1
    answer: 2
    explanation: This happened because safe mode often creates many problems as it resolves, largely due to the need for enterprise applications to use many of the features safe mode disables.
    keyConcept: Website Security
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: Suppose all web material is located within the directory /home/www. To prevent users from viewing and manipulating files such as /etc/password, which one of the following statements should you use?
    options:
      - open_dir = “/home/www/”
      - open_dir = /home/www/
      - open_basedir = /home/www/
      - open_basedir = “/home/www/”
    answer: 3
    explanation: open_basedir = “/home/www/” is the correct answer to “Suppose all web material is located within the directory /home/www. To prevent users from viewing and manipulating files such as /etc/password, which one of the following statements should you use”. This question is standard in competitive examination syllabi for Website Security.
    keyConcept: Website Security
    testedIn:
      - FPSC
      - PPSC
---


