---
title: Databases Handling MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Databases Handling with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: databases-handling
topicName: Databases Handling
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
    question: The updated MySQL extension released with PHP 5 is typically referred to as.
    options:
      - MySQL
      - mysqli
      - mysqly
    answer: 2
    explanation: The updated MySQL extension with PHP 5 is known as MySQL and typically referred to as mysqli.
    keyConcept: Databases Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: Which one of the following lines need to be uncommented or added in the php.ini file so as to enable mysqli extension?
    options:
      - extension=php_mysqli.dll
      - extension=mysql.dll
      - extension=php_mysqli.dl
      - extension=mysqli.dl
    answer: 0
    explanation: Also make sure that extension_dir directive points to the appropriate directory.
    keyConcept: Databases Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: In which version of PHP was MySQL Native Driver(also known as mysqlnd) introduced?
    options:
      - PHP 5.0
      - PHP 5.1
      - PHP 5.2
      - PHP 5.3
    answer: 3
    explanation: PHP required that MySQL client library be installed on the server from which PHP was communicating with MySQL, whether the MySQL server also happened to reside locally or elsewhere. PHP 5.3 removes this problem by introducing MySQL Native Driver.
    keyConcept: Databases Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: Which one of the following statements instantiates the mysqli class?
    options:
      - mysqli = new mysqli()
      - $mysqli = new mysqli()
      - $mysqli->new.mysqli()
      - mysqli->new.mysqli()
    answer: 1
    explanation: If you choose to interact with MySQL server using the object-oriented interface, you need to first instantiate the mysqli class via its constructor.
    keyConcept: Databases Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: Which one of the following methods can be used to diagnose and display information about a MySQL connection error?
    options:
      - connect_errno()
      - connect_error()
      - mysqli_connect_errno()
      - mysqli_connect_error()
    answer: 2
    explanation: The mysqli extension includes a few features that can be used to capture error messages or alternatively you can use exceptions.
    keyConcept: Databases Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: Which method returns the error code generated from the execution of the last MySQL function?
    options:
      - errno()
      - errnumber()
      - errorno()
      - errornumber()
    answer: 0
    explanation: Error numbers are often used in lieu of natural-language message to ease software internationalization efforts and allow for customization of error messages.
    keyConcept: Databases Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: Which one of the following statements should be used to include a file?
    options:
      - "#include ‘filename’"
      - include ‘filename’
      - "@include ‘filename’"
      - "#include"
    answer: 1
    explanation: An example of this-
    keyConcept: Databases Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: Which one of the following methods is responsible for sending the query to the database?
    options:
      - query()
      - send_query()
      - sendquery()
      - query_send()
    answer: 0
    explanation: Its prototype looks like- class mysqli { mixed query(string query [, int resultmode]) }
    keyConcept: Databases Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: Which one of the following methods recuperates any memory consumed by a result set?
    options:
      - destroy()
      - remover()
      - alloc()
      - free()
    answer: 3
    explanation: Once this method is executed, the result set is no longer available.
    keyConcept: Databases Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: Which of the methods are used to manage result sets using both associative and indexed arrays?
    options:
      - get_array() and get_row()
      - get_array() and get_column()
      - fetch_array() and fetch_row()
      - fetch_array() and fetch_column()
    answer: 2
    explanation: Their prototype is as follows- calss mysqli_result { mixed fetch_array ([int resulttype]) } calss mysqli_result { mixed fetch_row() }
    keyConcept: Databases Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: Which one of the following method is used to retrieve the number of rows affected by an INSERT, UPDATE, or DELETE query?
    options:
      - num_rows()
      - affected_rows()
      - changed_rows()
      - new_rows()
    answer: 1
    explanation: The method num_rows() is only useful for determining the number of rows retrieved by a SELECT query. But to retrieve the number of rows affected by INSERT, UPDATE, or DELETE query, use affected_rows().
    keyConcept: Databases Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: Which version of MySQL introduced the prepared statements?
    options:
      - MySQL 4.0
      - MySQL 4.1
      - MySQL 4.2
      - MySQL 4.3
    answer: 1
    explanation: When the query() method is looped repeatedly it comes at a cost of both overhead, because of the need to repeatedly parsing of the almost identical query for validity, and coding convenience, because of the need to repeatedly reconfigure the query using the new values for each iteration. To help resolve the issues incurred by repeatedly executed queries, MySQL introduced prepared statements.
    keyConcept: Databases Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: Which of the following methods is used to execute the statement after the parameters have been bound?
    options:
      - bind_param()
      - bind_result()
      - bound_param()
      - bound_result()
    answer: 0
    explanation: Once the statement has been prepared, it needs to be executed. Exactly when it’s executed depends upon whether you want to work with bound parameters or bound results. In the case of bound parameters, you’d execute the statement after the parameters have been bound with the bind_param() method.
    keyConcept: Databases Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: Which one of the following methods is used to recuperating prepared statements resources?
    options:
      - end()
      - finish()
      - final()
      - close()
    answer: 3
    explanation: Once you’ve finished using a prepared statement, the resources it requires can be recuperated with the close() method.
    keyConcept: Databases Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: Which method retrieves each row from the prepared statement result and assigns the fields to the bound results?
    options:
      - get_row()
      - fetch_row()
      - fetch()
      - row()
    answer: 2
    explanation: "Its prototype follows: class mysqli { boolean fetch() }"
    keyConcept: Databases Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: Which method rolls back the present transaction?
    options:
      - commit()
      - undo()
      - back()
      - rollback()
    answer: 3
    explanation: "Its prototype follows: class mysqli { boolean rollback() }"
    keyConcept: Databases Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: When you are building administrative links you’ll need to accept two arguments, which of the following are they?
    options:
      - URL of previous entry and URL of the entry you are working with
      - The current page and previous page
      - URL of previous entry and previous page
      - The current page and URL of the entry you are working with
    answer: 3
    explanation: "Your function should look like this: function adminLinks($page, $url) { //Build admin links here }"
    keyConcept: Databases Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: Once your application can generate administrative links, you need to load those links into _________
    options:
      - php.ini
      - index.ini
      - index.php
      - start.php
    answer: 2
    explanation: You place your administrative links only on the full display of an entry, so you must place the call to load information from adminLinks() within a conditional statement
    keyConcept: Databases Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: The URLs in the administrative links won’t mean anything to admin.php unless you modify _________
    options:
      - .htaccess
      - .adminaccess
      - .htmlaccess
      - .urlaccess
    answer: 0
    explanation: You need to modify .htaccess with an additional rule that handles URLs passed in a link to admin.php.
    keyConcept: Databases Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: The (|/) tells the server to match ___________
    options:
      - nothing
      - forward slash
      - backward slash
      - either nothing or a forward slash
    answer: 3
    explanation: The vertical pipe character (|) is the regular expression equivalent of “or”.
    keyConcept: Databases Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: ([w-]+) will match ___________
    options:
      - one word characters
      - one or more word characters
      - one or more word characters and/or hypens
      - one or more word characters and hypens
    answer: 2
    explanation: ([w-]+), will match one or more word characters and/or hyphens—which is what your custom entry URLs consist.
    keyConcept: Databases Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: You need to check whether ______ is set, to determine whether you’re editing an entry or creating a new one.
    options:
      - $_GET[‘url’].
      - $_SET[‘url’].
      - $_GET[‘admin’].
      - $_SET[‘admin’].
    answer: 0
    explanation: If an entry is being edited, you need to load the existing entry data and save each piece in a variable.
    keyConcept: Databases Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: To identify entries marked for deletion, you check whether $_GET[‘page’] == ‘delete’ inside __________
    options:
      - index.php
      - index.ini
      - admin.php
      - .htaccess
    answer: 2
    explanation: In admin.php, you check whether $_GET[‘page’] == ‘delete’, then pass the entry URL to be deleted to a function.
    keyConcept: Databases Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: Your confirmation form submits your choice, via the _______ method, to ________
    options:
      - GET index.php
      - GET admin.php
      - POST index.php
      - POST admin.php
    answer: 3
    explanation: To process this, you need to add an additional block of code to the top of admin.php that determines what choices you’ve made and act accordingly.
    keyConcept: Databases Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: When a user confirms that he wishes to delete an entry, that entry’s URL is passed to a function which removes the entry from the __________
    options:
      - index.php
      - function.inc.php
      - database
      - admin.php
    answer: 2
    explanation: If the function is successful, you send the user to the main page. If it fails, you stop execution of the script and display an error, letting the user know that something went wrong.
    keyConcept: Databases Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Which one of the following databases has PHP supported almost since the beginning?
    options:
      - Oracle Database
      - SQL
      - SQL+
      - MySQL
    answer: 3
    explanation: MySQL is the correct answer to “Which one of the following databases has PHP supported almost since the beginning”. This question is standard in competitive examination syllabi for Databases Handling.
    keyConcept: Databases Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: Which one of the following statements is used to create a table?
    options:
      - CREATE TABLE table_name (column_name column_type)
      - CREATE table_name (column_type column_name)
      - CREATE table_name (column_name column_type)
      - CREATE TABLE table_name (column_type column_name)
    answer: 0
    explanation: CREATE TABLE table_name (column_name column_type) is the correct answer to “Which one of the following statements is used to create a table”. This question is standard in competitive examination syllabi for Databases Handling.
    keyConcept: Databases Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: Which one of the following statements can be used to select the database?
    options:
      - $mysqli=select_db(‘databasename’)
      - mysqli=select_db(‘databasename’)
      - mysqli->select_db(‘databasename’)
      - $mysqli->select_db(‘databasename’)
    answer: 3
    explanation: $mysqli->select_db(‘databasename’) is the correct answer to “Which one of the following statements can be used to select the database”. This question is standard in competitive examination syllabi for Databases Handling.
    keyConcept: Databases Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: If there is no error, then what will the error() method return?
    options:
      - "TRUE"
      - "FALSE"
      - Empty String
      - "0"
    answer: 2
    explanation: Empty String is the correct answer to “If there is no error, then what will the error() method return”. This question is standard in competitive examination syllabi for Databases Handling.
    keyConcept: Databases Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: Which of the following DBMSs do not have a native PHP extension?
    options:
      - MySQL
      - IBM DB/2
      - PostgreSQL
      - Microsoft SQL Server
      - None of the above
    answer: 4
    explanation: None of the above is the correct answer to “Which of the following DBMSs do not have a native PHP extension”. This question is standard in competitive examination syllabi for Databases Handling.
    keyConcept: Databases Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: "In PHP in order to access MySQL database you will use:"
    options:
      - mysqlconnect() function
      - mysql-connect() function
      - mysql_connect() function
      - sql_connect() function
    answer: 2
    explanation: mysql_connect() function is the correct answer to “In PHP in order to access MySQL database you will use:”. This question is standard in competitive examination syllabi for Databases Handling.
    keyConcept: Databases Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: Transactions are used to treat sets of SQL statements atomically.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “Transactions are used to treat sets of SQL statements atomically.”. This question is standard in competitive examination syllabi for Databases Handling.
    keyConcept: Databases Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: SQL is not case sensitive. SELECT is the same as select.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “SQL is not case sensitive. SELECT is the same as select.”. This question is standard in competitive examination syllabi for Databases Handling.
    keyConcept: Databases Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: Which of the following is not an SQL aggregate function?
    options:
      - AVG
      - SUM
      - MIN
      - MAX
      - CURRENT_DATE()
    answer: 4
    explanation: CURRENT_DATE() is the correct answer to “Which of the following is not an SQL aggregate function”. This question is standard in competitive examination syllabi for Databases Handling.
    keyConcept: Databases Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: What does the DESC keyword do in the following query? SELECT * FROM MY_TABLE WHERE ID > 0 ORDER BY ID, NAME DESC"
    options:
      - It causes the dataset returned by the query to be sorted in descending order
      - It causes rows with the same ID to be sorted by NAME in ascending order
      - It causes rows with the same ID to be sorted by NAME in descending order
      - It causes rows to be sorted by NAME first and then by ID
      - It causes the result set to include a description of the NAME field
    answer: 2
    explanation: It causes rows with the same ID to be sorted by NAME in descending order is the correct answer to “What does the DESC keyword do in the following query? SELECT * FROM MY_TABLE WHERE ID > 0 ORDER BY ID, NAME DESC"”. This question is standard in competitive examination syllabi for Databases Handling.
    keyConcept: Databases Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: The ............. statement is used to delete a table.
    options:
      - DROP TABLE
      - DELETE TABLE
      - DEL TABLE
      - REMOVE TABLE
    answer: 0
    explanation: DROP TABLE is the correct answer to “The ............. statement is used to delete a table.”. This question is standard in competitive examination syllabi for Databases Handling.
    keyConcept: Databases Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: What will happen at the end of the following sequence of SQL commands? BEGIN TRANSACTION DELETE FROM MYTABLE WHERE ID=1 DELETE FROM OTHERTABLE ROLLBACK TRANSACTION
    options:
      - The contents of OTHERTABLE will be deleted
      - The contents of both OTHERTABLE and MYTABLE will be deleted
      - The contents of OTHERTABLE will be deleted, as will be all the contents of MYTABLE whose ID is 1
      - The database will remain unchanged to all users except the one that executes these queries.
      - The database will remain unchanged
    answer: 4
    explanation: The database will remain unchanged is the correct answer to “What will happen at the end of the following sequence of SQL commands? BEGIN TRANSACTION DELETE FROM MYTABLE WHERE ID=1 DELETE FROM OTHERTABLE ROLLBACK TRANSACTION”. This question is standard in competitive examination syllabi for Databases Handling.
    keyConcept: Databases Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: Use the .............. to delete the data inside the table, and not the table itself?
    options:
      - DROP TABLE
      - DELETE TABLE
      - TRUNCATE TABLE
      - REMOVE TABLE
    answer: 2
    explanation: TRUNCATE TABLE is the correct answer to “Use the .............. to delete the data inside the table, and not the table itself”. This question is standard in competitive examination syllabi for Databases Handling.
    keyConcept: Databases Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: Can joins be nested?
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “Can joins be nested”. This question is standard in competitive examination syllabi for Databases Handling.
    keyConcept: Databases Handling
    testedIn:
      - FPSC
      - PPSC
---


