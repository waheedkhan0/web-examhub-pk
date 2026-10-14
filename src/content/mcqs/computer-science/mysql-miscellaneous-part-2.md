---
title: Mysql Miscellaneous — Part 2 MCQs with Explanations
description: Practice high-yield Computer Science & IT MCQs on Mysql Miscellaneous — Part 2 with worked academic solutions for PPSC, FPSC, CSS, PMS, NTS.
subject: computer-science
subjectName: Computer Science & IT
topic: mysql-miscellaneous-part-2
topicName: Mysql Miscellaneous — Part 2
author: ExamHub Academic Editorial Board
updatedDate: "2026-10-14"
difficulty: Exam-Level
targetExams:
  - PPSC
  - FPSC
  - CSS
  - PMS
  - NTS
questions:
  - id: 1
    question: Which grant table scope columns are case insensitive?
    options:
      - Host
      - User
      - Password
      - Db
    answer: 1
    explanation: "In MySQL, certain grant table scope columns are case insensitive, meaning they do not distinguish between uppercase and lowercase characters. The correct option is Option B: User . Explanation: Host : The host column in the grant tables is case sensitive, as it distinguishes between different hosts based on their exact names. User : The user column in the grant tables is case insensitive, meaning it treats usernames the same regardless of whether they are in uppercase or lowercase. Password : The password column stores encrypted passwords and is not related to case sensitivity. Db : The db column represents the database name and is case sensitive, as it distinguishes between different databases based on their exact names. Therefore, Option B: User is the correct answer as the grant table scope column that is case insensitive."
    keyConcept: Mysql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 2
    question: The context in which the privilege 'CREATE TABLESPACE' applies is . . . . . . . .
    options:
      - Server administration
      - Tables
      - Stored routines
      - Views
    answer: 0
    explanation: "Server administration: The 'CREATE TABLESPACE' privilege allows users to create tablespaces at the server level. Tablespaces are used for managing the physical storage of tables and indexes. This privilege falls under the realm of server administration. Tables: Privileges related to tables include permissions such as SELECT, INSERT, UPDATE, DELETE, etc., but 'CREATE TABLESPACE' is not directly related to individual tables. Stored routines: Privileges related to stored routines include permissions to create, alter, execute, and drop stored procedures and functions, but 'CREATE TABLESPACE' is not directly related to stored routines. Views: Privileges related to views include permissions to create, alter, and drop views, but 'CREATE TABLESPACE' is not directly related to views. Therefore, the correct context for the privilege 'CREATE TABLESPACE' is Option A: Server administration ."
    keyConcept: Mysql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 3
    question: Which of the following characters cannot be used as a delimiter?
    options:
      - ","
      - .
      - ""
      - \
    answer: 3
    explanation: ", → The comma character is commonly used as a delimiter, especially in contexts like separating column names in SQL queries or values in CSV (Comma-Separated Values) files. . → The period character is not typically used as a delimiter in SQL queries; instead, it is often used in contexts like specifying schema.table or table.column in SQL statements. ; → The semicolon character is widely used as a delimiter to terminate SQL statements in MySQL and many other SQL database systems. \\ → The backslash character is not used as a delimiter in SQL queries; it's often used for escaping special characters or indicating special sequences in strings. Therefore, the character that cannot be used as a delimiter is Option D: ."
    keyConcept: Mysql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 4
    question: What is abc in the following MySQL statement? SELECT * FROM my_table WHERE MATCH(abc) AGAINST('xyz');
    options:
      - column name
      - table name
      - search string
      - database name
    answer: 0
    explanation: "Column name: In the MATCH clause, abc represents the name of the column against which the full-text search is performed. In this case, the search is conducted in the column named abc within the my_table table. Table name: abc is not the name of the table; it specifies the column within the table where the search operation is conducted. Search string: The search string in this context is 'xyz' , which is specified within the AGAINST function. Database name: abc is not a database name; it specifies a column within a specific table. Therefore, in the given MySQL statement, abc refers to the column name ."
    keyConcept: Mysql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: The spatial datatype used to store a curve is . . . . . . . .
    options:
      - GEOMETRY
      - POINT
      - LINESTRING
      - POLYGON
    answer: 2
    explanation: "GEOMETRY: The GEOMETRY data type in MySQL is a generic type that can store various types of geometric data, including points, curves, or polygons. However, if we want to specifically store a curve, we use a more specialized type. POINT: The POINT data type in MySQL is used to represent a single point in a two-dimensional coordinate system. It is not suitable for storing curves. LINESTRING: The LINESTRING data type in MySQL is used to represent a sequence of points that form a line or curve. It is precisely designed for storing curves. POLYGON: The POLYGON data type in MySQL is used to represent a closed shape consisting of a sequence of connected straight lines. It is not specifically designed for storing curves. Therefore, the spatial data type used to store a curve in MySQL is Option C: LINESTRING ."
    keyConcept: Mysql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: The binary protocol is more difficult to use.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "True: This option implies that the binary protocol is indeed more difficult to use compared to other protocols. However, this statement is not accurate. In fact, the binary protocol in MySQL is often preferred in certain scenarios due to its efficiency and performance benefits. It allows for faster data transfer and reduced overhead compared to text-based protocols. False: The binary protocol in MySQL is not inherently more difficult to use. While it may require a different approach compared to text-based protocols, it offers advantages such as improved performance and efficiency. Developers and database administrators often find the binary protocol to be straightforward to use, especially for applications that demand high throughput and low latency. Therefore, the correct answer is Option B: False ."
    keyConcept: Mysql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 7
    question: In MySQL, the default size of the key buffer in MB is . . . . . . . .
    options:
      - "4"
      - "8"
      - "16"
      - "32"
    answer: 1
    explanation: "4: This is not the default size of the key buffer in MySQL. It is smaller than the default size. 8: The default size of the key buffer in MySQL is 8 megabytes (MB). This means MySQL allocates 8 MB of memory for caching index blocks for MyISAM tables unless otherwise specified. 16: This is not the default size of the key buffer in MySQL. It is larger than the default size. 32: This is not the default size of the key buffer in MySQL. It is larger than the default size. Therefore, the default size of the key buffer in MySQL is Option B: 8 megabytes (MB)."
    keyConcept: Mysql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 8
    question: The functions in Perl DBI called?
    options:
      - functions
      - procedures
      - methods
      - programs
    answer: 2
    explanation: "Functions: Functions in programming typically refer to named blocks of code that perform a specific task and return a value. While Perl DBI provides functions, they are not the primary mechanism for interacting with databases. Procedures: Procedures are similar to functions but are generally associated with specific programming paradigms or languages, such as stored procedures in SQL. Perl DBI does not primarily use the term \"procedures\" for its database interactions. Methods: In object-oriented programming (OOP), methods are functions that are associated with objects and are called to perform actions on those objects. In Perl DBI, the operations used to interact with databases are referred to as methods since Perl DBI follows an object-oriented approach for database access. Programs: Programs typically refer to complete sets of instructions that execute a specific task. While Perl scripts using Perl DBI are indeed programs, the specific operations within Perl DBI are referred to as methods. Therefore, the correct term for the operations in Perl DBI is Option C: methods ."
    keyConcept: Mysql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 9
    question: Which operator is used to check the expression is not "NULL"?
    options:
      - IS NULL
      - NOT NULL
      - "ON"
      - None of the mentioned
    answer: 1
    explanation: "IS NULL: This operator is used to check if an expression evaluates to \"NULL\". It returns true if the expression is NULL, otherwise false. NOT NULL: This operator is used to check if an expression is not \"NULL\". It returns true if the expression is not NULL, otherwise false. This is the operator specified in the question. ON: The ON keyword is typically used in conjunction with JOIN operations to specify the join conditions between tables, it is not used for checking NULL values. None of the mentioned: This option is incorrect as there is indeed an operator used to check if an expression is not \"NULL\", which is NOT NULL . Therefore, the operator used to check if the expression is not \"NULL\" in SQL is Option B: NOT NULL ."
    keyConcept: Mysql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 10
    question: Which declaration represents that "character data will consume the same number of bytes as declared and is right padded"?
    options:
      - Char
      - Varchar
      - Both Char and Varchar
      - None of the mentioned
    answer: 0
    explanation: "Char: The CHAR data type in MySQL represents fixed-length character strings. When you declare a column as CHAR, you specify a fixed length for the data. Character data stored in a CHAR column will always consume the same number of bytes as declared, and it is right-padded with spaces if the actual data length is less than the declared length. Varchar: The VARCHAR data type in MySQL represents variable-length character strings. When you declare a column as VARCHAR, you specify a maximum length for the data. Character data stored in a VARCHAR column can vary in length up to the maximum length specified. Unlike CHAR, VARCHAR does not pad the data with spaces. Both Char and Varchar: This option is incorrect. While both CHAR and VARCHAR are used for storing character data, only CHAR represents fixed-length character data that is right-padded. None of the mentioned: This option is incorrect as the behavior described in the question is indeed associated with the CHAR data type in MySQL. Therefore, the declaration that represents character data consuming the same number of bytes as declared and being right-padded in MySQL is Option A: Char ."
    keyConcept: Mysql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 11
    question: What is the statement used to select a default database?
    options:
      - USE
      - CREATE
      - DROP
      - SCHEMA
    answer: 0
    explanation: "USE: The USE statement in MySQL is used to select a default database for the current session. It allows you to switch to a different database, and subsequent queries will operate within that selected database until changed again. CREATE: The CREATE statement in MySQL is used to create new database objects such as tables, indexes, views, etc. It is not used for selecting a default database. DROP: The DROP statement in MySQL is used to delete database objects such as tables, indexes, views, etc. It is not used for selecting a default database. SCHEMA: In MySQL, SCHEMA is a synonym for DATABASE . It is used to create, modify, or query database objects. However, it is not used specifically for selecting a default database. Therefore, the statement used to select a default database in MySQL is Option A: USE ."
    keyConcept: Mysql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 12
    question: Multiple MySQL servers can be run on the same machine.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: "True: It is indeed possible to run multiple MySQL servers on the same machine. Each MySQL server instance can be configured to use different ports, data directories, and configuration files, allowing them to operate independently on the same physical or virtual machine. False: This statement is incorrect. Running multiple MySQL servers on the same machine is possible, as described above. None of the mentioned: This option is not applicable as the correct statement is indeed true. Therefore, the correct statement is Option A: True ."
    keyConcept: Mysql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 13
    question: Mysql command line tool is used to show "how many rows are returned and how long SQL command took to execute".
    options:
      - "True"
      - "False"
      - Undetermined
      - Depend
    answer: 2
    explanation: "True: The MySQL command-line tool provides functionality to display the number of rows returned by a query and the execution time of SQL commands. By default, after executing a query, the MySQL command-line tool displays the number of rows affected (for INSERT, UPDATE, DELETE statements) or the number of rows returned (for SELECT statements). Additionally, MySQL provides options like SHOW WARNINGS and SHOW STATUS to display various details including execution time. False: This statement is incorrect. The MySQL command-line tool is indeed capable of showing the number of rows returned and the execution time of SQL commands. Undetermined: There is no ambiguity regarding this statement. The MySQL command-line tool provides functionality to display these details. Depend: This option is not applicable. The MySQL command-line tool consistently provides information about the number of rows returned and the execution time of SQL commands. Therefore, the statement is Option A: True ."
    keyConcept: Mysql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: Find the missing clause from the following SQL statement? CREATE VIEW person_1 AS SELECT fname, lname, person_id _________ person;
    options:
      - FROM
      - WHERE
      - SELECT
      - None of the mentioned
    answer: 0
    explanation: "FROM: In SQL, the FROM clause is used to specify the table or tables from which data will be selected. In this context, the FROM clause is required to indicate the source table ( person ) from which the columns fname , lname , and person_id are selected. WHERE: The WHERE clause is used to specify conditions that filter the rows returned by the query. It is not necessary in this context since the SELECT statement does not include any filtering conditions. SELECT: The SELECT keyword is already present in the SQL statement, so it is not the missing clause. None of the mentioned: This option is not applicable as there is indeed a missing clause that needs to be identified. Therefore, the missing clause from the SQL statement is Option A: FROM ."
    keyConcept: Mysql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 15
    question: AUTO_INCREMENT columns must be NOT NULL.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "In MySQL, when defining a column with the AUTO_INCREMENT attribute, there are certain constraints and requirements that must be followed. We need to determine whether it is necessary for columns with AUTO_INCREMENT to also be NOT NULL . The correct option is Option A: True ."
    keyConcept: Mysql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 16
    question: Which of these take more space? Variable length columns, Fixed length columns
    options:
      - variable length
      - same
      - fixed length
      - indeterminate
    answer: 2
    explanation: "Variable length: Variable-length columns store data in a flexible manner, allowing the storage of data of varying lengths. They only consume as much space as needed for the actual data stored. Examples include VARCHAR and TEXT data types. Variable-length columns typically take less space because they only use as much storage as necessary to accommodate the data. Fixed length: Fixed-length columns allocate a fixed amount of storage space for each row, regardless of the actual length of the data stored. Examples include CHAR and BINARY data types. Fixed-length columns consume the same amount of space for each row, even if the data stored in them is shorter than the allocated space. Therefore, fixed-length columns generally take more space compared to variable-length columns, especially if the actual data lengths vary widely. Same: This option is incorrect. Fixed-length columns typically take more space compared to variable-length columns due to the allocation of a fixed amount of storage space for each row. Indeterminate: This option implies uncertainty or unpredictability, but in this context, it is clear that fixed-length columns generally take more space than variable-length columns. Therefore, the correct answer is Option C: fixed length , as fixed-length columns typically take more space compared to variable-length columns."
    keyConcept: Mysql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 17
    question: The server listens on a network port for TCP/IP connections unless started with the option . . . . . . . .
    options:
      - "-networking"
      - "-skip-networking"
      - "-skip-networks"
      - "-quit-networking"
    answer: 1
    explanation: "-skip-networking: This option is used to instruct the MySQL server not to listen for TCP/IP network connections. When this option is specified during server startup, the MySQL server does not open the network port for incoming connections, effectively preventing remote clients from connecting via TCP/IP. This option is typically used in scenarios where local access to the MySQL server is sufficient, and there's no need for remote connections. -networking: This option is not correct. There is no option named -networking in MySQL that controls whether the server listens on a network port for TCP/IP connections. -skip-networks: This option is not correct. The correct option to skip networking is -skip-networking , not -skip-networks . -quit-networking: This option is not correct. There is no option named -quit-networking in MySQL that controls networking behavior. Therefore, the option used to prevent the MySQL server from listening on a network port for TCP/IP connections is Option B: -skip-networking ."
    keyConcept: Mysql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 18
    question: Stored routines refers to stored functions and procedures.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "True: Stored routines in MySQL include both stored functions and stored procedures. Stored functions are routines that return a single value and can be used in SQL statements like built-in functions. Stored procedures are routines that perform one or more SQL statements and can have input and output parameters. Both stored functions and stored procedures are stored in the database and can be invoked by client applications or other database objects. False: This statement is incorrect. Stored routines in MySQL do indeed refer to both stored functions and stored procedures. None of the mentioned: This option is not applicable. The correct statement is that stored routines encompass both stored functions and stored procedures. Therefore, the correct statement is Option A: True ."
    keyConcept: Mysql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 19
    question: The maximum length of the varchar columns is . . . . . . . .
    options:
      - Upto 65, 535 bytes
      - Upto 256 bytes
      - Upto 65, 567 bytes
      - None of the mentioned
    answer: 0
    explanation: "In MySQL, the VARCHAR data type is used to store variable-length character strings. We need to determine the maximum length allowed for VARCHAR columns. The correct option is Option A: Upto 65,535 bytes . Upto 65,535 bytes: In MySQL, the maximum length of VARCHAR columns is 65,535 bytes. This limit applies to the maximum size of the column in terms of bytes, not characters. The actual number of characters that can be stored may be less depending on the character set and encoding used. For example, if the UTF-8 character set is used, some characters may require more than one byte to store, reducing the maximum number of characters that can be stored in the VARCHAR column. Upto 256 bytes: This option is incorrect. While VARCHAR columns have a maximum length, it is much larger than 256 bytes. Upto 65,567 bytes: This option is incorrect. The maximum length of VARCHAR columns is not 65,567 bytes. The correct limit is 65,535 bytes. None of the mentioned: This option is not correct. The maximum length of VARCHAR columns in MySQL is specified and can be determined. Therefore, the maximum length of VARCHAR columns in MySQL is Option A: Upto 65,535 bytes ."
    keyConcept: Mysql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 20
    question: The keyword used with UNION that does not retain duplicate rows is . . . . . . . .
    options:
      - ALL
      - NARROW
      - STRICT
      - DISTINCT
    answer: 3
    explanation: "DISTINCT: When used with UNION , the DISTINCT keyword ensures that duplicate rows are eliminated from the combined result set. It retains only unique rows across all the result sets being combined using UNION . Therefore, if there are any duplicate rows in the result sets, they will be removed, and only distinct rows will be included in the final result set. ALL: The ALL keyword, when used with UNION , retains all rows from the combined result sets, including duplicates. It is the default behavior of UNION if no keyword is specified. This option is incorrect because it retains duplicate rows, contrary to the requirement. NARROW: This option is incorrect. There is no keyword named NARROW associated with UNION in MySQL. STRICT: This option is incorrect. The STRICT keyword is not used with UNION in MySQL. Therefore, the keyword used with UNION that eliminates duplicate rows is Option D: DISTINCT ."
    keyConcept: Mysql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 21
    question: Which statement can be used for modifying the definition for an existing table?
    options:
      - ALTER
      - Modified
      - SELECT
      - FROM
    answer: 0
    explanation: "ALTER: The ALTER statement in SQL is used to modify the structure or definition of an existing database object, including tables. With the ALTER TABLE statement, you can add, modify, or drop columns, constraints, or indexes, among other modifications to the table's structure. Modified: This option is incorrect. \"Modified\" is not a specific SQL statement for altering the definition of an existing table. The correct term is ALTER . SELECT: The SELECT statement is used to retrieve data from a database. It is not used for modifying the structure of a table. FROM: The FROM keyword is used in conjunction with the SELECT statement to specify the table or tables from which data is retrieved. It is not used for modifying table definitions. Therefore, the statement used for modifying the definition of an existing table is Option A: ALTER ."
    keyConcept: Mysql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 22
    question: The function used to convert a string to an int is . . . . . . . .
    options:
      - INET_ATON()
      - INET_NTOA()
      - INET_ITOS()
      - INET_STOI()
    answer: 3
    explanation: "INET_ATON(): This function is used to convert an IP address in dotted-quad notation (IPv4) to a numeric value. It returns the numeric representation of the IP address as an unsigned integer. INET_NTOA(): This function is used to convert a numeric value representing an IP address to its dotted-quad notation (IPv4). It returns the string representation of the IP address. INET_ITOS(): This option is incorrect. There is no function named INET_ITOS() in MySQL for converting a string to an integer. INET_STOI(): This option is incorrect. There is no function named INET_STOI() in MySQL for converting a string to an integer. Therefore, the function used to convert a string to an integer in MySQL is Option D: INET_STOI() ."
    keyConcept: Mysql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 23
    question: What jobs "Query Optimizer" perform in Mysql?
    options:
      - Determine the efficient way to execute a query
      - Syntax errors
      - Permissions
      - All of the mentioned
    answer: 0
    explanation: "Determine the efficient way to execute a query: The primary task of the Query Optimizer is to analyze SQL queries and determine the most efficient execution plan. It evaluates various factors such as available indexes, table statistics, and the structure of the query to generate an optimal execution plan that minimizes resource usage and maximizes performance. Syntax errors: Syntax errors are typically detected by the MySQL parser during query compilation and are not directly related to the Query Optimizer's function. Permissions: Permissions management, such as granting or revoking privileges, is handled by the MySQL privilege system and is not directly related to the Query Optimizer's function. All of the mentioned: While the Query Optimizer is responsible for determining the efficient way to execute a query, it is not involved in handling syntax errors or managing permissions. Therefore, the correct option is not All of the mentioned . Therefore, the task performed by the Query Optimizer in MySQL is Option A: Determine the efficient way to execute a query ."
    keyConcept: Mysql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 24
    question: The BIGINT precision is of bit . . . . . . . .
    options:
      - "32"
      - "64"
      - "128"
      - "16"
    answer: 1
    explanation: "64: The BIGINT data type in MySQL has a precision of 64 bits. This means it can store integer values ranging from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807, inclusive, which requires 64 bits to represent in binary form. 32: This option is incorrect. The precision of 32 bits is typically associated with the INT data type, not BIGINT . 128: This option is incorrect. While there are data types in MySQL that support precision up to 128 bits (such as DECIMAL ), the BIGINT data type specifically has a precision of 64 bits. 16: This option is incorrect. The precision of 16 bits is insufficient to represent the range of values that the BIGINT data type can accommodate. Therefore, the precision of the BIGINT data type in terms of bits is Option B: 64 ."
    keyConcept: Mysql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 25
    question: The string function that returns the index of the first occurrence of substring is . . . . . . . .
    options:
      - INSERT()
      - INSTR()
      - INSTRING()
      - INFSTR()
    answer: 1
    explanation: "INSTR(): The INSTR() function in MySQL is used to find the position of the first occurrence of a substring within a string. It returns the index (position) of the first character of the substring within the string. If the substring is not found, it returns 0. The syntax for the INSTR() function is INSTR(string, substring) . INSERT(): The INSERT() function is used to insert a substring into a string at a specified position. It is not used to find the position of a substring within a string. INSTRING(): This option is incorrect. There is no function named INSTRING() in MySQL for finding the position of a substring within a string. INFSTR(): This option is incorrect. There is no function named INFSTR() in MySQL for finding the position of a substring within a string. Therefore, the string function that returns the index of the first occurrence of a substring is Option B: INSTR() ."
    keyConcept: Mysql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 26
    question: Multiple MySQL servers cannot be run on the same machine.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: "In MySQL, it's possible to run multiple instances of the MySQL server on the same machine. We need to determine whether running multiple MySQL servers on the same machine is possible or not. The correct option is Option B: False ."
    keyConcept: Mysql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 27
    question: What does RTF refer to?
    options:
      - Rich Text Format
      - Right Text Format
      - Rich Text Function
      - Right Text Function
    answer: 0
    explanation: "In the context of MySQL, RTF stands for a specific file format used for text documents. We need to identify what RTF refers to. The correct option is Option A: Rich Text Format ."
    keyConcept: Mysql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 28
    question: The LOCAL capability for client library is enabled by . . . . . . . .
    options:
      - "-enabled-local-file"
      - "-enable-local-infile"
      - "-enable-global-file"
      - "-enable-local-file"
    answer: 1
    explanation: "-enable-local-infile: This option enables the capability to load data from local files using the client library. It allows MySQL client programs to read data files from the client host rather than the server host. Enabling this option allows the use of the LOAD DATA LOCAL INFILE statement to load data from local files into database tables. It is a security feature that can be controlled by server administrators. -enabled-local-file: This option does not exist in MySQL. It is not a valid option for enabling the LOCAL capability for the client library. -enable-global-file: This option is incorrect. There is no option named -enable-global-file in MySQL for enabling the LOCAL capability for the client library. -enable-local-file: This option is similar to the correct option, but the correct option is -enable-local-infile . Therefore, the correct option for enabling the LOCAL capability for the client library is Option B: -enable-local-infile ."
    keyConcept: Mysql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 29
    question: The variable used as a handle to an open file is . . . . . . . .
    options:
      - $dbh
      - $sth
      - $fh
      - $h
    answer: 2
    explanation: "$dbh: This variable typically represents a database handle in Perl when working with database connections using Perl's DBI (Database Interface) module. It is not used as a handle for file operations. $sth: This variable typically represents a statement handle in Perl when executing SQL statements using Perl's DBI module. It is used to handle the result set of a query, not for file operations. $fh: In Perl, the convention for a file handle variable is often $fh , where fh stands for \"file handle.\" It is used to represent an open file for performing file operations such as reading from or writing to the file. $h: This option is incorrect. While $h is a generic variable name, it is not commonly used specifically as a file handle in the context of file operations in Perl or MySQL. Therefore, the variable used as a handle to an open file is Option C: $fh ."
    keyConcept: Mysql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 30
    question: What is the maximum length for alias names in terms of characters?
    options:
      - "64"
      - "128"
      - "256"
      - "32"
    answer: 1
    explanation: "64: This option is incorrect. While 64 characters might be a common length limit for identifiers in some database systems, in MySQL, the maximum length for alias names is greater. 128: This is the correct option. In MySQL, the maximum length for alias names in terms of characters is 128. This means alias names can have up to 128 characters in length when used in queries. 256: This option is incorrect. 256 characters is not the maximum length for alias names in MySQL. Alias names cannot exceed 128 characters in length. 32: This option is incorrect. 32 characters is not the maximum length for alias names in MySQL. Alias names can be longer, with the maximum length being 128 characters. Therefore, the maximum length for alias names in terms of characters in MySQL is Option B: 128 ."
    keyConcept: Mysql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 31
    question: The default storage engine used is . . . . . . . .
    options:
      - EXAMPLE
      - ARCHIVE
      - MyISAM
      - NDB
    answer: 2
    explanation: "EXAMPLE: This option is incorrect. EXAMPLE is not a default storage engine in MySQL. It is merely an example storage engine provided for testing and educational purposes. ARCHIVE: This option is incorrect. While ARCHIVE is a storage engine in MySQL, it is not the default storage engine used when one is not explicitly specified. MyISAM: This is the correct option. In most MySQL installations, the default storage engine used when a storage engine is not specified explicitly is MyISAM . However, it's important to note that this may vary depending on the MySQL version and configuration. NDB: This option is incorrect. NDB (MySQL Cluster) is another storage engine provided by MySQL, but it is not the default storage engine used when one is not specified. Therefore, the default storage engine used in MySQL is Option C: MyISAM ."
    keyConcept: Mysql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 32
    question: The number of values that can be returned from a given stored function is . . . . . . . .
    options:
      - "0"
      - "1"
      - "2"
      - "3"
    answer: 1
    explanation: "0: This option is incorrect. Stored functions in MySQL are designed to return a single value. Therefore, the number of values returned cannot be zero. 1: This is the correct option. Stored functions in MySQL can return exactly one value. This value can be of any supported data type. 2: This option is incorrect. Stored functions in MySQL cannot return multiple values directly. They are limited to returning a single value. 3: This option is incorrect. Stored functions in MySQL cannot return multiple values directly. They are limited to returning a single value. Therefore, the number of values that can be returned from a given stored function in MySQL is Option B: 1 ."
    keyConcept: Mysql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 33
    question: A synonym for CHARACTER SET is . . . . . . . .
    options:
      - CSET
      - CHSET
      - CHARSET
      - CHCSET
    answer: 2
    explanation: "CSET: This option is incorrect. \"CSET\" is not a common synonym for \"CHARACTER SET\" in MySQL terminology. CHSET: This option is incorrect. \"CHSET\" is not a common synonym for \"CHARACTER SET\" in MySQL terminology. CHARSET: This is the correct option. \"CHARSET\" is commonly used as a synonym for \"CHARACTER SET\" in MySQL. It is used when specifying the character encoding for text data. CHCSET: This option is incorrect. \"CHCSET\" is not a recognized synonym for \"CHARACTER SET\" in MySQL terminology. Therefore, a synonym for \"CHARACTER SET\" in MySQL is Option C: CHARSET ."
    keyConcept: Mysql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 34
    question: The IN, OUT and INOUT keywords do not apply to stored functions.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: "In MySQL, the IN, OUT, and INOUT keywords are used to specify parameter modes in stored procedures and functions. We need to determine whether these keywords apply to stored functions. The correct option is Option B: False ."
    keyConcept: Mysql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 35
    question: To perform consistency checks on a MyISAM table the statement is . . . . . . . .
    options:
      - CHECK TABLE
      - REPAIR TABLE
      - ANALYZE TABLE
      - OPTIMIZE TABLE
    answer: 0
    explanation: "CHECK TABLE: This is the correct option. The CHECK TABLE statement in MySQL is used to perform consistency checks on tables. When applied to a MyISAM table, it checks for errors in the table's structure and data integrity. REPAIR TABLE: This option is incorrect. The REPAIR TABLE statement is used to repair corrupted MyISAM tables. While it can fix issues identified by the CHECK TABLE statement, it is not specifically for performing consistency checks. ANALYZE TABLE: This option is incorrect. The ANALYZE TABLE statement is used to analyze and update table statistics for query optimization purposes. It is not primarily used for performing consistency checks. OPTIMIZE TABLE: This option is incorrect. The OPTIMIZE TABLE statement is used to defragment tables and reclaim wasted space. It is not primarily used for performing consistency checks. Therefore, to perform consistency checks on a MyISAM table, the statement to use is Option A: CHECK TABLE ."
    keyConcept: Mysql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 36
    question: The character that the MySQL client program recognizes as a statement delimiter is . . . . . . . .
    options:
      - ":"
      - .
      - ""
      - ","
    answer: 2
    explanation: ": → This option is incorrect. The colon (:) character is not recognized as a statement delimiter by the MySQL client program. It's not a standard delimiter in MySQL. . → This option is incorrect. The period (.) character is not recognized as a statement delimiter by the MySQL client program. It's typically used as a separator in schema-qualified object names, such as database_name.table_name. ; → This is the correct option. The semicolon (;) character is universally recognized as the statement delimiter in MySQL. It signifies the end of an SQL statement and is required to execute statements correctly. , → This option is incorrect. The comma (,) character is not recognized as a statement delimiter by the MySQL client program. It's used to separate values in a list or columns in a SELECT statement's column list. Therefore, the character recognized by the MySQL client program as a statement delimiter is Option C: ; ."
    keyConcept: Mysql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 37
    question: Which system variable controls the size of the table cache?
    options:
      - table_cache
      - cache_table
      - open_cache
      - cache_open
    answer: 0
    explanation: "table_cache: This is the correct option. The table_cache system variable in MySQL controls the size of the table cache. It determines the maximum number of open tables that MySQL keeps cached in memory for quick access. cache_table: This option is incorrect. \"cache_table\" is not a recognized system variable in MySQL for controlling the size of the table cache. open_cache: This option is incorrect. \"open_cache\" is not a recognized system variable in MySQL for controlling the size of the table cache. cache_open: This option is incorrect. \"cache_open\" is not a recognized system variable in MySQL for controlling the size of the table cache. Therefore, the system variable that controls the size of the table cache in MySQL is Option A: table_cache ."
    keyConcept: Mysql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 38
    question: The embedded server library containing the MySQL server linkable into applications is . . . . . . . .
    options:
      - libmysqla
      - libmysqlb
      - libmysqlc
      - libmysqld
    answer: 3
    explanation: "libmysqla: This option is incorrect. \"libmysqla\" is not the embedded server library containing the MySQL server linkable into applications. It does not correspond to a recognized library name in MySQL. libmysqlb: This option is incorrect. \"libmysqlb\" is not the embedded server library containing the MySQL server linkable into applications. It does not correspond to a recognized library name in MySQL. libmysqlc: This option is incorrect. \"libmysqlc\" is not the embedded server library containing the MySQL server linkable into applications. It does not correspond to a recognized library name in MySQL. libmysqld: This is the correct option. The libmysqld library contains the MySQL server code that can be linked directly into applications to embed the MySQL server functionality. Applications using this library can run MySQL server tasks within their own process space. Therefore, the embedded server library containing the MySQL server linkable into applications is Option D: libmysqld ."
    keyConcept: Mysql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 39
    question: How many of the following return rows? SELECT, SHOW, DESCRIBE
    options:
      - "0"
      - "1"
      - "2"
      - "3"
    answer: 2
    explanation: "SELECT: This statement is used to retrieve data from one or more tables in a database. It returns rows containing the selected data based on the specified conditions. Therefore, SELECT returns rows. SHOW: This statement is used to display various information about databases, tables, columns, indexes, and more. Depending on the context, SHOW can return rows containing information about the specified object. For example, SHOW TABLES returns a list of tables in the current database. Therefore, SHOW can return rows. DESCRIBE: This statement is used to display information about the structure of a table, such as column names, types, and properties. It does not return rows of data from the table itself; instead, it returns metadata about the table's structure. Therefore, DESCRIBE does not return rows. Therefore, out of the provided statements, SELECT and SHOW return rows, while DESCRIBE does not. Thus, the number of statements that return rows is Option C: 2 ."
    keyConcept: Mysql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 40
    question: Which of these modes is a composite server mode?
    options:
      - COMPOSITE
      - COMPOSITE_MODE
      - COMPOSITE_SERVER
      - ANSI
    answer: 2
    explanation: "COMPOSITE: This option is incorrect. \"COMPOSITE\" is not a recognized server mode in MySQL. COMPOSITE_MODE: This option is incorrect. \"COMPOSITE_MODE\" is not a recognized server mode in MySQL. COMPOSITE_SERVER: This is the correct option. \"COMPOSITE_SERVER\" refers to a composite server mode in MySQL. In this mode, the server supports a combination of features from different server modes, allowing for flexibility in configuration and behavior. It is a composite mode as it combines characteristics of other server modes. ANSI: This option is incorrect. \"ANSI\" typically refers to a SQL standard, but it is not a server mode in MySQL. Therefore, the composite server mode among the options provided is Option C: COMPOSITE_SERVER ."
    keyConcept: Mysql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
---


