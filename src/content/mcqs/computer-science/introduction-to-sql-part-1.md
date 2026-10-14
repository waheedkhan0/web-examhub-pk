---
title: Introduction To Sql — Part 1 MCQs with Explanations
description: Practice high-yield Computer Science & IT MCQs on Introduction To Sql — Part 1 with worked academic solutions for PPSC, FPSC, CSS, PMS, NTS.
subject: computer-science
subjectName: Computer Science & IT
topic: introduction-to-sql-part-1
topicName: Introduction To Sql — Part 1
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
    question: You can add a row using SQL in a database with which of the following?
    options:
      - ADD
      - CREATE
      - INSERT
      - MAKE
    answer: 2
    explanation: "Option A: ADD - In SQL, ADD is not typically used to add new rows to a database table. It is more commonly used to add new columns to an existing table structure. Option B: CREATE - The CREATE statement in SQL is used to create new database objects such as tables, indexes, or views. It is not used specifically for adding rows to a table. Option C: INSERT - The INSERT statement in SQL is used to insert new rows into a table. You specify the table name and the values you want to insert into the new row. Option D: MAKE - There is no standard SQL command or keyword called MAKE for adding rows to a database table. Conclusion: To add a new row to a database table in SQL, you use the INSERT statement. Therefore, the correct answer is Option C: INSERT ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 2
    question: "The command to remove rows from a table 'CUSTOMER' is:"
    options:
      - REMOVE FROM CUSTOMER ...
      - DROP FROM CUSTOMER ...
      - DELETE FROM CUSTOMER WHERE ...
      - UPDATE FROM CUSTOMER ...
    answer: 2
    explanation: "Option A: REMOVE FROM CUSTOMER ... - There is no SQL command called REMOVE. This option is incorrect. Option B: DROP FROM CUSTOMER ... - The DROP command is used to remove entire tables or other database objects, not rows from a table. This option is incorrect. Option C: DELETE FROM CUSTOMER WHERE ... - The DELETE command in SQL is used to remove rows from a table. You specify the table name (CUSTOMER) and use WHERE clause to specify which rows to delete based on a condition. Option D: UPDATE FROM CUSTOMER ... - The UPDATE command is used to modify existing rows in a table, not to remove rows. This option is incorrect. Conclusion: To remove rows from a table 'CUSTOMER' in SQL, you use the DELETE statement with a WHERE clause to specify the condition for deletion. Therefore, the correct answer is Option C: DELETE FROM CUSTOMER WHERE ... ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 3
    question: "The SQL WHERE clause:"
    options:
      - limits the column data that are returned.
      - limits the row data are returned.
      - Both A and B are correct.
      - Neither A nor B are correct.
    answer: 1
    explanation: "The SQL WHERE clause is used to filter records. It limits the row data that are returned by specifying conditions that the records must meet. Option A is incorrect because the WHERE clause does not limit column data; this is done by the SELECT statement. Option C is incorrect because only Option B is correct. Option D is incorrect because the WHERE clause does limit the row data that are returned. Conclusion: The WHERE clause in SQL is used to filter rows based on specific conditions, limiting the row data returned."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 4
    question: Which of the following is the original purpose of SQL?
    options:
      - To specify the syntax and semantics of SQL data definition language
      - To specify the syntax and semantics of SQL manipulation language
      - To define the data structures
      - All of the above
    answer: 3
    explanation: "Option A: To specify the syntax and semantics of SQL data definition language - SQL was originally designed to define and manipulate data in databases, including creating and modifying database schemas. This option correctly describes one of the original purposes of SQL. Option B: To specify the syntax and semantics of SQL manipulation language - SQL includes commands for querying and manipulating data stored in a database. This option correctly describes another original purpose of SQL. Option C: To define the data structures - While SQL is used to define database structures such as tables and indexes, this statement alone does not encompass the original full scope of SQL's purposes. Option D: All of the above - This option suggests that SQL serves all the purposes mentioned in Options A, B, and C. Given that Options A and B correctly describe SQL's original purposes, Option D is the correct answer. Conclusion: SQL was originally developed to specify both the syntax and semantics of its data definition language (DDL) for defining database structures and its manipulation language (DML) for querying and modifying data. Therefore, the correct answer is Option D: All of the above ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: The wildcard in a WHERE clause is useful when?
    options:
      - An exact match is necessary in a SELECT statement.
      - An exact match is not possible in a SELECT statement.
      - An exact match is necessary in a CREATE statement.
      - An exact match is not possible in a CREATE statement.
    answer: 1
    explanation: "Option A: An exact match is necessary in a SELECT statement. - This option describes when you need to specify a precise condition for selecting data, which is not related to the use of wildcards in SQL. Option B: An exact match is not possible in a SELECT statement. - This option incorrectly describes the use of wildcards. Wildcards are used in SELECT statements to match patterns rather than exact values. Option C: An exact match is necessary in a CREATE statement. - The CREATE statement is used to create database objects such as tables, indexes, or views, and does not relate to the use of wildcards. Option D: An exact match is not possible in a CREATE statement. - This option incorrectly describes the purpose of wildcards in SQL. Conclusion: In SQL, wildcards in a WHERE clause are useful when you need to match patterns rather than exact values in a SELECT statement. Therefore, the correct answer is Option B: An exact match is not possible in a SELECT statement."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: A view is which of the following?
    options:
      - A virtual table that can be accessed via SQL commands
      - A virtual table that cannot be accessed via SQL commands
      - A base table that can be accessed via SQL commands
      - A base table that cannot be accessed via SQL commands
    answer: 0
    explanation: "Option A: A virtual table that can be accessed via SQL commands - This option correctly describes a view in SQL. A view is a virtual table based on the result-set of an SQL statement. It can be queried and manipulated using SQL commands, but it does not store data like a physical table. Option B: A virtual table that cannot be accessed via SQL commands - This option is incorrect because views are specifically designed to be accessed via SQL commands. Option C: A base table that can be accessed via SQL commands - This option describes a physical or base table, not a view. Option D: A base table that cannot be accessed via SQL commands - This option is incorrect because base tables are accessed and manipulated using SQL commands. Conclusion: In SQL, a view is a virtual table that is created based on a SQL SELECT query. It can be queried like a regular table using SQL commands. Therefore, the correct answer is Option A: A virtual table that can be accessed via SQL commands ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 7
    question: "The command to eliminate a table from a database is:"
    options:
      - REMOVE TABLE CUSTOMER
      - DROP TABLE CUSTOMER
      - DELETE TABLE CUSTOMER
      - UPDATE TABLE CUSTOMER
    answer: 1
    explanation: "Option A: REMOVE TABLE CUSTOMER; - There is no SQL command called REMOVE TABLE. This option is incorrect. Option B: DROP TABLE CUSTOMER; - The DROP TABLE command in SQL is used to remove a table from the database. This option correctly describes the command to eliminate a table. Option C: DELETE TABLE CUSTOMER; - The DELETE command is used to remove rows from a table, not the table itself. This option is incorrect. Option D: UPDATE TABLE CUSTOMER; - The UPDATE command is used to modify existing rows in a table, not to eliminate the table itself. This option is incorrect. Conclusion: To eliminate (delete) a table from a database in SQL, you use the DROP TABLE statement followed by the table name. Therefore, the correct answer is Option B: DROP TABLE CUSTOMER; ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 8
    question: ON UPDATE CASCADE ensures which of the following?
    options:
      - Normalization
      - Data Integrity
      - Materialized Views
      - All of the above
    answer: 1
    explanation: "Option A: Normalization - ON UPDATE CASCADE in SQL is not directly related to normalization, which is a process of organizing data to minimize redundancy and dependency. Option B: Data Integrity - This is the correct option. ON UPDATE CASCADE is a referential integrity constraint that ensures data integrity by automatically updating related records in child tables when the parent record is updated. Option C: Materialized Views - ON UPDATE CASCADE does not relate to materialized views, which are views that store the results of a query physically for faster access. Option D: All of the above - This option suggests that ON UPDATE CASCADE ensures all the benefits mentioned in Options A, B, and C. However, only Option B correctly describes the purpose of ON UPDATE CASCADE. Conclusion: In SQL, ON UPDATE CASCADE ensures data integrity by automatically updating related records in child tables when the parent record is updated. Therefore, the correct answer is Option B: Data Integrity ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 9
    question: SQL data definition commands make up a(n) ________ .
    options:
      - DDL
      - DML
      - HTML
      - XML
    answer: 0
    explanation: "Option A: DDL - DDL stands for Data Definition Language. It consists of SQL commands used to define the database structure, such as creating and modifying tables, indexes, views, etc. Option B: DML - DML stands for Data Manipulation Language. It consists of SQL commands used to manage data within the database, such as inserting, updating, deleting data. Option C: HTML - HTML is not related to SQL data definition commands. HTML is a markup language used for creating web pages. Option D: XML - XML is not related to SQL data definition commands. XML is a markup language used for encoding documents in a format that is both human-readable and machine-readable. Conclusion: SQL data definition commands, such as creating tables and defining their structure, are part of the Data Definition Language (DDL). Therefore, the correct answer is Option A: DDL ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 10
    question: Which of the following is valid SQL for an Index?
    options:
      - CREATE INDEX ID
      - CHANGE INDEX ID
      - ADD INDEX ID
      - REMOVE INDEX ID
    answer: 0
    explanation: "Option A: CREATE INDEX ID; - This option is correct. The CREATE INDEX statement in SQL is used to create an index on a table. Option B: CHANGE INDEX ID; - There is no standard SQL command called CHANGE INDEX. This option is incorrect. Option C: ADD INDEX ID; - There is no standard SQL command called ADD INDEX. This option is incorrect. Option D: REMOVE INDEX ID; - There is no standard SQL command called REMOVE INDEX. This option is incorrect. Conclusion: In SQL, to create an index on a table, you use the CREATE INDEX statement followed by the index name. Therefore, the correct answer is Option A: CREATE INDEX ID; ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 11
    question: The SQL keyword(s) ________ is used with wildcards.
    options:
      - LIKE only
      - IN only
      - NOT IN only
      - IN and NOT IN
    answer: 0
    explanation: "Option A: LIKE only - The LIKE keyword in SQL is used with wildcards to search for a specified pattern in a column. This option correctly identifies the keyword used with wildcards. Option B: IN only - The IN keyword is used to specify multiple values for a column, not with wildcards. Option C: NOT IN only - The NOT IN keyword is used to exclude specified values from a column, not with wildcards. Option D: IN and NOT IN - Both IN and NOT IN are used to specify values or exclude values from a column, not with wildcards. Conclusion: In SQL, the keyword LIKE is specifically used with wildcards to perform pattern matching in a column. Therefore, the correct answer is Option A: LIKE only ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 12
    question: Which of the following is the correct order of keywords for SQL SELECT statements?
    options:
      - SELECT, FROM, WHERE
      - FROM, WHERE, SELECT
      - WHERE, FROM,SELECT
      - SELECT,WHERE,FROM
    answer: 0
    explanation: "Option A: SELECT, FROM, WHERE - This option presents the correct order of keywords for a SQL SELECT statement: SELECT : Specifies the columns to retrieve data from. FROM : Specifies the table from which to retrieve data. WHERE : Optional clause that specifies conditions to filter rows. Option B: FROM, WHERE, SELECT - Incorrect order. The SELECT keyword should come before FROM to specify the columns to select. Option C: WHERE, FROM, SELECT - Incorrect order. The SELECT keyword should come before FROM to specify the columns to select. Option D: SELECT,WHERE,FROM - Incorrect order. The FROM keyword should come after SELECT to specify the table from which to select data. Conclusion: The correct order of keywords for a SQL SELECT statement is Option A: SELECT, FROM, WHERE ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 13
    question: "A subquery in an SQL SELECT statement is enclosed in:"
    options:
      - braces -- {...}.
      - CAPITAL LETTERS.
      - parenthesis -- (...) .
      - brackets -- [...].
    answer: 2
    explanation: "Option A: braces -- {...} - Braces are not used to enclose subqueries in SQL SELECT statements. This option is incorrect. Option B: CAPITAL LETTERS - Capital letters are not used to enclose subqueries in SQL SELECT statements. This option is incorrect. Option C: parenthesis -- (...) - This option is correct. Subqueries in SQL SELECT statements are enclosed in parentheses to distinguish them from the main query. Option D: brackets -- [...] - Brackets are not used to enclose subqueries in SQL SELECT statements. This option is incorrect. Conclusion: In SQL, a subquery in a SELECT statement is enclosed in parentheses to separate it from the main query and to specify its scope. Therefore, the correct answer is Option C: parenthesis -- (...) ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: The result of a SQL SELECT statement is a(n) ________ .
    options:
      - report
      - form
      - file
      - table
    answer: 3
    explanation: "Option A: report - While SQL SELECT statements can be used to generate data that might be used in reports, the direct result of a SELECT statement itself is not a report. This option is incorrect. Option B: form - SQL SELECT statements retrieve data from tables or views based on specified criteria. They do not generate forms. This option is incorrect. Option C: file - SQL SELECT statements do not produce files directly. They retrieve data from database tables or views. This option is incorrect. Option D: table - This option is correct. The result of a SQL SELECT statement is a set of rows and columns, which resembles a table structure. It may not be a physical table but represents a structured set of data. Conclusion: In SQL, the result of a SELECT statement is a set of rows and columns, similar to a table structure. Therefore, the correct answer is Option D: table ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 15
    question: Which of the following are the five built-in functions provided by SQL?
    options:
      - COUNT, SUM, AVG, MAX, MIN
      - SUM, AVG, MIN, MAX, MULT
      - SUM, AVG, MULT, DIV, MIN
      - SUM, AVG, MIN, MAX, NAME
    answer: 0
    explanation: "Option A: COUNT, SUM, AVG, MAX, MIN - These are the five built-in aggregate functions provided by SQL: COUNT : Returns the number of rows that match a specified criterion. SUM : Returns the sum of values in a numeric column. AVG : Returns the average of values in a numeric column. MAX : Returns the maximum value in a column. MIN : Returns the minimum value in a column. Option B: SUM, AVG, MIN, MAX, MULT - \"MULT\" is not a standard SQL function. This option is incorrect. Option C: SUM, AVG, MULT, DIV, MIN - \"MULT\" and \"DIV\" are not standard SQL functions. This option is incorrect. Option D: SUM, AVG, MIN, MAX, NAME - \"NAME\" is not a standard SQL function. This option is incorrect. Conclusion: The five built-in functions provided by SQL for performing aggregate calculations on data are Option A: COUNT, SUM, AVG, MAX, MIN ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 16
    question: "In an SQL SELECT statement querying a single table, according to the SQL-92 standard the asterisk (*) means that:"
    options:
      - all columns of the table are to be returned.
      - all records meeting the full criteria are to be returned.
      - all records with even partial criteria met are to be returned.
      - None of the above is correct.
    answer: 0
    explanation: "Option A: all columns of the table are to be returned. - According to the SQL-92 standard, using the asterisk () in an SQL SELECT statement querying a single table means that all columns of the table are to be returned. Option B: all records meeting the full criteria are to be returned. - This option is incorrect. The asterisk () refers to columns, not records. Option C: all records with even partial criteria met are to be returned. - This option is incorrect. The asterisk () does not relate to criteria or records but to columns. Option D: None of the above is correct. - This option is incorrect because Option A correctly describes the meaning of the asterisk () in SQL-92 standard. Conclusion: In SQL-92 standard, using the asterisk (*) in an SQL SELECT statement querying a single table means that all columns of the table are to be returned. Therefore, the correct answer is Option A: all columns of the table are to be returned."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 17
    question: The HAVING clause does which of the following?
    options:
      - Acts like a WHERE clause but is used for groups rather than rows.
      - Acts like a WHERE clause but is used for rows rather than columns.
      - Acts like a WHERE clause but is used for columns rather than groups.
      - Acts EXACTLY like a WHERE clause.
    answer: 0
    explanation: "Option A: Acts like a WHERE clause but is used for groups rather than rows. - This option is correct. The HAVING clause in SQL is used to filter group rows that are returned by a GROUP BY clause, similar to how the WHERE clause filters individual rows. Option B: Acts like a WHERE clause but is used for rows rather than columns. - This option is incorrect. The WHERE clause is used to filter rows based on a condition, whereas the HAVING clause filters grouped rows based on a condition. Option C: Acts like a WHERE clause but is used for columns rather than groups. - This option is incorrect. The WHERE clause filters rows, and it does not filter columns. Option D: Acts EXACTLY like a WHERE clause. - This option is incorrect because the WHERE and HAVING clauses serve different purposes in SQL. Conclusion: In SQL, the HAVING clause is used to apply a filter to the groups of rows returned by a GROUP BY clause, similar to how the WHERE clause filters individual rows. Therefore, the correct answer is Option A: Acts like a WHERE clause but is used for groups rather than rows."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 18
    question: The SQL -92 wildcards are ____ and ____ .
    options:
      - asterisk (*); percent sign (%)
      - percent sign (%); underscore (_)
      - underscore(_); question mark (?)
      - question mark (?); asterisk (*)
    answer: 1
    explanation: "Option A: asterisk (); percent sign (%) - This option is incorrect. While the percent sign (%) is a wildcard character in SQL-92 for matching zero or more characters, the asterisk () is not a wildcard character in SQL. Option B: percent sign (%); underscore () - This option is correct. In SQL-92, the percent sign (%) is used as a wildcard for matching zero or more characters, and the underscore () is used as a wildcard for matching a single character. Option C: underscore (); question mark (?) - The underscore () is a wildcard character in SQL-92, but the question mark (?) is not a wildcard character in SQL. This option is incorrect. Option D: question mark (?); asterisk () - The question mark (?) is not a wildcard character in SQL-92, and the asterisk () is not a wildcard character in SQL. This option is incorrect. Conclusion: In SQL-92, the wildcards are Option B: percent sign (%) and underscore (_)."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 19
    question: To remove duplicate rows from the results of an SQL SELECT statement, the ________ qualifier specified must be included.
    options:
      - ONLY
      - UNIQUE
      - DISTINCT
      - SINGLE
    answer: 2
    explanation: "Option A: ONLY - The keyword ONLY is not used to remove duplicate rows in SQL SELECT statements. This option is incorrect. Option B: UNIQUE - The UNIQUE keyword is not used in SQL SELECT statements to remove duplicate rows from results. It is used in table definitions for column uniqueness constraints. This option is incorrect. Option C: DISTINCT - This option is correct. The DISTINCT qualifier in SQL SELECT statements is used to eliminate duplicate rows from the result set, returning only unique rows based on the specified columns. Option D: SINGLE - The keyword SINGLE is not used in SQL SELECT statements to remove duplicate rows. This option is incorrect. Conclusion: To remove duplicate rows from the results of an SQL SELECT statement, you use the Option C: DISTINCT qualifier. Therefore, the correct answer is DISTINCT"
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 20
    question: The benefits of a standard relational language include which of the following?
    options:
      - Reduced training costs
      - Increased dependence on a single vendor
      - Applications are not needed
      - All of the above
    answer: 0
    explanation: "Option A: Reduced training costs - This is a potential benefit of a standard relational language like SQL. When developers and database administrators are familiar with SQL standards, training costs can be reduced. Option B: Increased dependence on a single vendor - This is not a benefit of a standard relational language. In fact, using a standard language like SQL can reduce dependence on a single vendor because SQL is supported by many different database management systems. Option C: Applications are not needed - This is not a benefit of a standard relational language. Applications are still needed to interact with databases through SQL. Option D: All of the above - This option is incorrect because Options B and C are not benefits of a standard relational language like SQL. Conclusion: The benefits of a standard relational language like SQL typically include improved portability across different database systems, ease of learning and training, and consistent syntax and semantics. Therefore, the correct answer is Option A: Reduced training costs ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 21
    question: Which of the following do you need to consider when you make a table in SQL?
    options:
      - Data types
      - Primary keys
      - Default values
      - All of the above
    answer: 3
    explanation: "Option A: Data types - When creating a table in SQL, you need to specify the data types for each column to define what type of data can be stored in that column (e.g., VARCHAR, INTEGER, DATE). Option B: Primary keys - Primary keys uniquely identify each record in a table and are used to enforce entity integrity in SQL. They ensure each row is uniquely identifiable. Option C: Default values - Default values are optional constraints that can be set for columns in SQL tables. They specify a value that is used when an explicit value is not specified during an INSERT operation. Option D: All of the above - This option is correct. When creating a table in SQL, you need to consider data types to define the nature of each column, primary keys to uniquely identify rows, and default values to provide fallback values when necessary. Conclusion: When creating a table in SQL, you need to consider Option D: All of the above : Data types, Primary keys, and Default values. These elements are essential for defining the structure and constraints of the table."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 22
    question: SQL query and modification commands make up a(n) ________ .
    options:
      - DDL
      - DML
      - HTML
      - XML
    answer: 0
    explanation: "Option A: DDL - DDL stands for Data Definition Language in SQL. It consists of commands used to define, modify, and remove database objects such as tables and indexes. Examples include CREATE, ALTER, and DROP commands. Option B: DML - DML stands for Data Manipulation Language. It consists of commands used to manipulate data within database objects. Examples include INSERT, UPDATE, and DELETE commands. Option C: HTML - HTML (Hypertext Markup Language) is not related to SQL query and modification commands. This option is incorrect. Option D: XML - XML (eXtensible Markup Language) is not related to SQL query and modification commands. This option is incorrect. Conclusion: SQL query and modification commands that define and manipulate database objects are categorized under Option A: DDL (Data Definition Language) . These commands are used to manage the structure and schema of the database."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 23
    question: "When three or more AND and OR conditions are combined, it is easier to use the SQL keyword(s):"
    options:
      - LIKE only.
      - IN only.
      - NOT IN only.
      - Both IN and NOT IN.
      - None of the above
    answer: 4
    explanation: "Option A: LIKE only. - The LIKE keyword is used for pattern matching with wildcard characters in SQL, not for combining multiple conditions with AND and OR. Option B: IN only. - The IN keyword is used to specify multiple values in a WHERE clause, but it is not specifically used for combining multiple conditions with AND and OR. Option C: NOT IN only. - The NOT IN keyword is used to specify exclusion of multiple values in a WHERE clause, but it is not specifically used for combining multiple conditions with AND and OR. Option D: Both IN and NOT IN. - This option is incorrect as it does not relate to combining multiple conditions with AND and OR. Conclusion: When combining three or more AND and OR conditions in SQL, it is easier to use parentheses to group the conditions logically. There is no specific keyword like IN or NOT IN that simplifies this process. Therefore, the correct answer is None of the above ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 24
    question: The Microsoft Access wildcards are ____ and ____ .
    options:
      - asterisk (*); percent sign (%)
      - percent sign (%); underscore (_)
      - underscore(_); question mark (?)
      - question mark (?); asterisk (*)
    answer: 1
    explanation: "Option A: asterisk (); percent sign (%) - This option is incorrect. While the asterisk () is a wildcard character in Microsoft Access (and SQL generally for SELECT statements), the percent sign (%) is used in SQL for pattern matching, not specifically as a wildcard in Microsoft Access. Option B: percent sign (%); underscore () - This option is correct. In Microsoft Access, the percent sign (%) is used as a wildcard for matching zero or more characters, and the underscore () is used as a wildcard for matching a single character. Option C: underscore (); question mark (?) - The underscore () and question mark (?) are not commonly used as wildcards in Microsoft Access. This option is incorrect. Option D: question mark (?); asterisk () - The question mark (?) and asterisk () are not typically used as wildcards in Microsoft Access. This option is incorrect. Conclusion: In Microsoft Access, the wildcards are Option B: percent sign (%) and underscore (_). These characters are used for pattern matching in queries to match specific text patterns within data fields. Therefore, the correct answer is Option B ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 25
    question: "Find the SQL statement below that is equal to the following: SELECT NAME FROM CUSTOMER WHERE STATE = 'VA';"
    options:
      - SELECT NAME IN CUSTOMER WHERE STATE IN ('VA')
      - SELECT NAME IN CUSTOMER WHERE STATE = 'VA'
      - SELECT NAME IN CUSTOMER WHERE STATE = 'V'
      - SELECT NAME FROM CUSTOMER WHERE STATE IN ('VA')
    answer: 3
    explanation: "Option A: SELECT NAME IN CUSTOMER WHERE STATE IN ('VA'); - This statement is incorrect because it uses \"IN\" incorrectly. The \"IN\" keyword is used to specify multiple possible values for a column, not for filtering by a single value. Option B: SELECT NAME IN CUSTOMER WHERE STATE = 'VA'; - This statement is incorrect because it uses \"IN\" incorrectly. Similar to Option A, \"IN\" is not used for single value comparisons. Option C: SELECT NAME IN CUSTOMER WHERE STATE = 'V'; - This statement is incorrect because it does not match the specified condition 'VA'. Option D: SELECT NAME FROM CUSTOMER WHERE STATE IN ('VA'); - This statement is correct. It retrieves the NAME column from the CUSTOMER table where the STATE column has the value 'VA'. Conclusion: To achieve the SQL statement \"SELECT NAME FROM CUSTOMER WHERE STATE = 'VA';\", the correct SQL statement is Option D: SELECT NAME FROM CUSTOMER WHERE STATE IN ('VA'); . This option correctly filters rows where the STATE column equals 'VA'."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 26
    question: Which one of the following sorts rows in SQL?
    options:
      - SORT BY
      - ALIGN BY
      - ORDER BY
      - GROUP BY
    answer: 2
    explanation: "Option A: SORT BY - This is not a standard SQL keyword for sorting rows. The correct keyword for sorting rows in SQL is \"ORDER BY\". Option B: ALIGN BY - This is not a valid SQL keyword for any operation, including sorting. Option C: ORDER BY - This is the correct answer. The \"ORDER BY\" clause in SQL is used to sort the result set by one or more columns in ascending or descending order. Option D: GROUP BY - The \"GROUP BY\" clause is used to group rows that have the same values into summary rows, typically for aggregate functions like SUM or COUNT, not for sorting. Conclusion: The SQL keyword that sorts rows in a query result set is Option C: ORDER BY . This clause allows you to specify the column(s) by which you want to sort the results and the order (ascending or descending). Therefore, the correct answer is ORDER BY ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 27
    question: "To sort the results of a query use:"
    options:
      - SORT BY.
      - GROUP BY.
      - ORDER BY.
      - None of the above is correct.
    answer: 2
    explanation: "Option A: SORT BY. - This is not a standard SQL keyword for sorting rows. The correct keyword for sorting rows in SQL is \"ORDER BY\". Option B: GROUP BY. - The \"GROUP BY\" clause is used to group rows that have the same values into summary rows, typically for aggregate functions like SUM or COUNT, not for sorting. Option C: ORDER BY. - This is the correct answer. The \"ORDER BY\" clause in SQL is used to sort the result set by one or more columns in ascending or descending order. Option D: None of the above is correct. - This option is incorrect because Option C (\"ORDER BY\") is the correct answer for sorting query results in SQL. Conclusion: To sort the results of a query in SQL, you use the Option C: ORDER BY clause. This allows you to specify the column(s) by which you want to sort the results and the order (ascending or descending). Therefore, the correct answer is ORDER BY ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 28
    question: "To define what columns should be displayed in an SQL SELECT statement:"
    options:
      - use FROM to name the source table(s) and list the columns to be shown after SELECT.
      - use USING to name the source table(s) and list the columns to be shown after SELECT.
      - use SELECT to name the source table(s) and list the columns to be shown after USING.
      - use USING to name the source table(s) and list the columns to be shown after WHERE.
    answer: 0
    explanation: "Option A: use FROM to name the source table(s) and list the columns to be shown after SELECT. - This option is incorrect. The \"FROM\" clause is used to specify the table(s) from which data is retrieved, not to define columns to be displayed. Option B: use USING to name the source table(s) and list the columns to be shown after SELECT. - This option is incorrect. The \"USING\" clause in SQL is used for specifying columns for join conditions, not for selecting columns to display. Option C: use SELECT to name the source table(s) and list the columns to be shown after USING. - This option is incorrect. The \"SELECT\" keyword is used at the beginning of a query to specify the columns or expressions to be retrieved, not to name tables or specify columns after \"USING\". Option D: use USING to name the source table(s) and list the columns to be shown after WHERE. - This option is incorrect. The \"USING\" keyword in SQL is not used to list columns to be displayed in a SELECT statement. Conclusion: To define what columns should be displayed in an SQL SELECT statement, you use the Option A: use FROM to name the source table(s) and list the columns to be shown after SELECT. This means you specify the columns to display immediately after the \"SELECT\" keyword, not after \"FROM\" or \"USING\". Therefore, the correct answer is Option A ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 29
    question: "SQL can be used to:"
    options:
      - create database structures only.
      - query database data only.
      - modify database data only.
      - All of the above can be done by SQL.
    answer: 3
    explanation: "Option A: create database structures only. - This option is incorrect. SQL (Structured Query Language) can do more than just create database structures. It can also query data and modify data. Option B: query database data only. - This option is incorrect. SQL is not limited to querying data only. It can also create database structures and modify data. Option C: modify database data only. - This option is incorrect. SQL is not limited to modifying data only. It can also create database structures and query data. Option D: All of the above can be done by SQL. - This is the correct answer. SQL is a comprehensive language that can perform various tasks including creating database structures (DDL - Data Definition Language), querying database data (DML - Data Manipulation Language), and modifying database data. Conclusion: SQL can be used for Option D: All of the above can be done by SQL. This includes creating database structures, querying database data, and modifying database data. Therefore, the correct answer is All of the above can be done by SQL."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 30
    question: The SQL statement that queries or reads data from a table is ________ .
    options:
      - SELECT
      - READ
      - QUERY
      - None of the above is correct
    answer: 0
    explanation: "Option A: SELECT - This is the correct answer. The \"SELECT\" statement in SQL is used to query or read data from a table. It allows you to specify which columns to retrieve and from which table. Option B: READ - This option is incorrect. \"READ\" is not a standard SQL keyword used for querying data from a table. Option C: QUERY - While \"QUERY\" can be used informally to describe retrieving data, it is not a specific SQL keyword for reading data from a table. Option D: None of the above is correct - This option is incorrect because Option A (\"SELECT\") is indeed the correct SQL keyword for querying or reading data from a table. Conclusion: The SQL statement that queries or reads data from a table is Option A: SELECT . This keyword is fundamental in SQL for retrieving data from one or more tables. Therefore, the correct answer is SELECT ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 31
    question: "The SQL keyword BETWEEN is used:"
    options:
      - for ranges.
      - to limit the columns displayed.
      - as a wildcard.
      - None of the above is correct.
    answer: 0
    explanation: "Option A: for ranges. - This is the correct answer. The SQL keyword \"BETWEEN\" is used to specify a range of values. It is typically used in a WHERE clause to retrieve rows with values within a specified range. Option B: to limit the columns displayed. - This option is incorrect. The \"BETWEEN\" keyword is not used to limit the columns displayed; it is used for filtering rows based on values within a range. Option C: as a wildcard. - This option is incorrect. \"BETWEEN\" is not used as a wildcard. Wildcards in SQL are characters used to substitute for other characters in string matching. Option D: None of the above is correct. - This option is incorrect because Option A (\"for ranges\") accurately describes the purpose of the SQL keyword \"BETWEEN\". Conclusion: The SQL keyword \"BETWEEN\" is used Option A: for ranges . It allows you to specify a range of values to filter rows in a query. Therefore, the correct answer is for ranges ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 32
    question: "A subquery in an SQL SELECT statement:"
    options:
      - can only be used with two tables.
      - can always be duplicated by a join.
      - has a distinct form that cannot be duplicated by a join.
      - cannot have its results sorted using ORDER BY.
    answer: 2
    explanation: "Option A: can only be used with two tables. - This option is incorrect. A subquery in SQL can be used with any number of tables, depending on the complexity of the query. Option B: can always be duplicated by a join. - This option is incorrect. While some subqueries can be rewritten as joins, not all subqueries can be directly duplicated using joins. It depends on the specific query and its logic. Option C: has a distinct form that cannot be duplicated by a join. - This is the correct answer. Some subqueries have a unique form or logic that cannot be replicated using a join. Subqueries can often provide more flexible and specific results compared to joins. Option D: cannot have its results sorted using ORDER BY. - This option is incorrect. Subqueries can have their results sorted using the \"ORDER BY\" clause, just like regular queries. Conclusion: A subquery in an SQL SELECT statement Option C: has a distinct form that cannot be duplicated by a join. This means that some subqueries provide unique functionality or logic that cannot be directly replaced by a join operation. Therefore, the correct answer is has a distinct form that cannot be duplicated by a join ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 33
    question: ________ was adopted as a national standard by ANSI in 1992.
    options:
      - Oracle
      - SQL
      - Microsoft Access
      - DBase
    answer: 1
    explanation: "Option A: Oracle - Oracle is a relational database management system (RDBMS) but it is not the correct answer in the context of the question about a national standard adopted by ANSI. Option B: SQL - This is the correct answer. SQL (Structured Query Language) was adopted as a national standard by ANSI (American National Standards Institute) in 1992. ANSI SQL defines the syntax and semantics of SQL. Option C: Microsoft Access - Microsoft Access is a database management system that uses SQL, but it is not the national standard adopted by ANSI. Option D: DBase - dBase is a widely used database management system, but it is not the national standard adopted by ANSI. Conclusion: SQL was adopted as a national standard by ANSI in 1992. ANSI SQL standardizes the way SQL databases communicate with applications and each other. Therefore, the correct answer is SQL ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 34
    question: "SQL is:"
    options:
      - a programming language.
      - an operating system.
      - a data sublanguage.
      - a DBMS.
    answer: 2
    explanation: "Option A: a programming language. - This option is incorrect. SQL (Structured Query Language) is not considered a general-purpose programming language like Python or Java. It is specifically designed for managing and querying databases. Option B: an operating system. - This option is incorrect. SQL is not an operating system. It is a language used to communicate with databases and perform operations on data. Option C: a data sublanguage. - This is the correct answer. SQL is often referred to as a data sublanguage because it is used to manipulate and retrieve data stored in databases. It is not a full programming language but rather a specialized language for working with databases. Option D: a DBMS. - This option is incorrect. SQL is not a DBMS (Database Management System). SQL is the language used to interact with DBMSs to create, retrieve, update, and manage databases. Conclusion: SQL is Option C: a data sublanguage. It is specifically designed for querying and manipulating data within relational databases. Therefore, the correct answer is a data sublanguage ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 35
    question: The condition in a WHERE clause can refer to only one value.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: "Option A: True - This option is incorrect. In SQL, the condition in a WHERE clause can refer to multiple values. For example, you can use operators like IN or OR to specify multiple values or conditions. Option B: False - This is the correct answer. The condition in a WHERE clause can refer to multiple values, not just one. SQL allows for complex conditions involving multiple values, ranges, or logical operators. Conclusion: The statement \"The condition in a WHERE clause can refer to only one value\" is Option B: False . SQL supports conditions that can refer to multiple values or conditions, allowing for flexible querying of data. Therefore, the correct answer is False ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 36
    question: The ADD command is used to enter one row of data or to add multiple rows as a result of a query.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: "Option A: True - This option is incorrect. In SQL, the ADD command is not used to enter one row of data or to add multiple rows as a result of a query. SQL does not have a standard \"ADD\" command for adding rows of data directly. Option B: False - This is the correct answer. In SQL, to add one or more rows of data to a table, you typically use the INSERT INTO statement. The INSERT INTO statement is used to add new records to a table in the database. Conclusion: The statement \"The ADD command is used to enter one row of data or to add multiple rows as a result of a query\" is Option B: False . The correct SQL command to add new rows of data to a table is INSERT INTO, not ADD. Therefore, the correct answer is False ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 37
    question: SQL provides the AS keyword, which can be used to assign meaningful column names to the results of queries using the SQL built-in functions.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "Option A: True - This option is correct. In SQL, the AS keyword is used to assign alias names to columns or tables in SQL queries. It can also be used to assign meaningful names to the results of SQL built-in functions. For example, you can write a query like: SELECT SUM(sales) AS total_sales FROM sales_data; In this query, AS total_sales assigns the alias total_sales to the result of the SUM function. Option B: False - This option is incorrect. The AS keyword is indeed used in SQL for aliasing and assigning meaningful names, including for results of SQL built-in functions. Conclusion: The statement \"SQL provides the AS keyword, which can be used to assign meaningful column names to the results of queries using the SQL built-in functions\" is Option A: True . The AS keyword is commonly used for aliasing and assigning names in SQL queries, including for results of built-in functions. Therefore, the correct answer is True ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 38
    question: The SELECT command, with its various clauses, allows users to query the data contained in the tables and ask many different questions or ad hoc queries.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "Option A: True - This option is correct. In SQL, the SELECT command is used to retrieve data from one or more tables. It allows users to specify columns to retrieve, apply filters using WHERE clause, sort data using ORDER BY clause, group data using GROUP BY clause, and apply other clauses like HAVING and LIMIT to refine queries. The SELECT command enables users to ask various questions or ad hoc queries to retrieve specific data or perform calculations. Option B: False - This option is incorrect. The SELECT command is fundamental in SQL for querying and retrieving data from databases. Conclusion: The statement \"The SELECT command, with its various clauses, allows users to query the data contained in the tables and ask many different questions or ad hoc queries\" is Option A: True . The SELECT command is versatile and essential for retrieving and manipulating data in SQL databases, allowing users to perform complex queries to extract specific information. Therefore, the correct answer is True ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 39
    question: A SELECT statement within another SELECT statement and enclosed in square brackets ([...]) is called a subquery.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: "Option A: False - This option is incorrect. In SQL, a subquery is not enclosed in square brackets ([...]). Instead, a subquery in an SQL SELECT statement is enclosed in parentheses (...). A subquery is a query nested within another SQL statement, typically within the WHERE or HAVING clause of the outer query. Option B: True - This option is correct. A subquery in SQL is indeed a SELECT statement that is nested within another SELECT statement. It is used to retrieve data that will be used by the main query as a condition or filter. Conclusion: The statement \"A SELECT statement within another SELECT statement and enclosed in square brackets ([...]) is called a subquery\" is Option B: False . Subqueries in SQL are enclosed in parentheses (...), not square brackets. Therefore, the correct answer is False ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 40
    question: The rows of the result relation produced by a SELECT statement can be sorted, but only by one column.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: "Option A: False - This option is incorrect. In SQL, the rows of the result relation produced by a SELECT statement can be sorted by multiple columns using the ORDER BY clause. The ORDER BY clause allows specifying one or more columns and their sort order (ascending or descending). This enables sorting based on multiple criteria, not just one column. Option B: True - This option is correct. The rows returned by a SELECT statement in SQL can indeed be sorted using the ORDER BY clause. While traditionally sorting is done by one column, SQL allows specifying multiple columns in the ORDER BY clause to achieve sorting based on more than one criterion. Conclusion: The statement \"The rows of the result relation produced by a SELECT statement can be sorted, but only by one column\" is Option B: False . SQL supports sorting of result rows using the ORDER BY clause, which can specify multiple columns for sorting. Therefore, the correct answer is False ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
---


