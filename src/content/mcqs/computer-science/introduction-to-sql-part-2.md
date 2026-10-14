---
title: Introduction To Sql — Part 2 MCQs with Explanations
description: Practice high-yield Computer Science & IT MCQs on Introduction To Sql — Part 2 with worked academic solutions for PPSC, FPSC, CSS, PMS, NTS.
subject: computer-science
subjectName: Computer Science & IT
topic: introduction-to-sql-part-2
topicName: Introduction To Sql — Part 2
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
    question: There is an equivalent join expression that can be substituted for all subquery expressions.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "Option A: True - This option is correct. In SQL, joins can often be used instead of subqueries to achieve similar results. Specifically, correlated subqueries and some non-correlated subqueries can be rewritten as joins, improving performance and readability in some cases. However, not all subqueries can be directly replaced by joins, especially when dealing with complex aggregations or conditions that require row-level operations. Option B: False - This option is incorrect. SQL provides several types of joins (such as INNER JOIN, LEFT JOIN, etc.) that can often be used as alternatives to subqueries, depending on the specific query requirements. Conclusion: The statement \"There is an equivalent join expression that can be substituted for all subquery expressions\" is Option A: True . While not all subqueries can be directly replaced by joins, SQL provides mechanisms to substitute many subquery expressions with join expressions, making queries more efficient and sometimes easier to understand. Therefore, the correct answer is True ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 2
    question: A dynamic view is one whose contents materialize when referenced.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: "Option B: False - This option is correct. In SQL, a dynamic view is one that does not materialize its contents when referenced. Instead, it executes the underlying query or queries each time it is referenced, ensuring that the view always reflects the current state of the underlying data. This contrasts with a materialized view, which stores the result set of the query and requires explicit refreshing to update its contents. Option A: True - This option is incorrect. A dynamic view does not materialize its contents; instead, it executes its query or queries each time it is referenced. Conclusion: The statement \"A dynamic view is one whose contents materialize when referenced\" is Option B: False . Therefore, the correct answer is False ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 3
    question: SQL is a programming language.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: "Option B: False - SQL (Structured Query Language) is not technically considered a programming language in the traditional sense. It is a specialized language used for managing and manipulating relational databases. While it allows for querying and manipulating data, it lacks many of the characteristics typically associated with general-purpose programming languages, such as variables, loops, and conditional statements. Option A: True - This option is incorrect. SQL is not a programming language but rather a query language. Conclusion: The statement \"SQL is a programming language\" is Option B: False . Therefore, the correct answer is False ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 4
    question: SELECT DISTINCT is used if a user wishes to see duplicate columns in a query.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: "Option B: False - The statement is incorrect. SELECT DISTINCT is used to retrieve unique rows from a query result. It eliminates duplicate rows from the output of a SELECT statement, not columns. Option A: True - This option is incorrect. Using SELECT DISTINCT ensures that duplicate rows are not returned in the result set, rather than duplicate columns. Conclusion: The statement \"SELECT DISTINCT is used if a user wishes to see duplicate columns in a query\" is Option B: False . Therefore, the correct answer is False ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: Indexes can usually be created for both primary and secondary keys.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "Option A: True - Indexes can indeed be created for both primary keys and secondary keys in SQL. Indexes improve the speed of data retrieval operations on a database table by providing quick access to rows based on the indexed columns. Conclusion: The statement \"Indexes can usually be created for both primary and secondary keys\" is Option A: True . Therefore, the correct answer is True ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: Each index consumes extra storage space and also requires overhead maintenance time whenever indexed data change value.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "Option A: True - Indexes in a database do consume extra storage space because they are separate data structures that store indexed column values for quick retrieval. Additionally, whenever data in the indexed columns change, the index needs to be updated, which adds overhead maintenance time. Conclusion: The statement \"Each index consumes extra storage space and also requires overhead maintenance time whenever indexed data change value\" is Option A: True . Therefore, the correct answer is True ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 7
    question: The HAVING clause acts like a WHERE clause, but it identifies groups that meet a criterion, rather than rows.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "Option A: True - The HAVING clause in SQL is used to filter groups based on a specified condition. It acts similar to the WHERE clause but is applied after the GROUP BY clause to filter groups rather than individual rows. It allows you to specify a condition for groups that will be included in the query results based on aggregate functions or grouped columns. Conclusion: The statement \"The HAVING clause acts like a WHERE clause, but it identifies groups that meet a criterion, rather than rows\" is Option A: True . Therefore, the correct answer is True ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 8
    question: SQL is a data sublanguage.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "Option A: True - SQL (Structured Query Language) is primarily designed for managing and querying data in relational database management systems (RDBMS). It is often referred to as a data sublanguage because its primary purpose is to interact with and manipulate data within databases. SQL is not a full programming language like Java or Python but rather focuses on data retrieval, manipulation, and definition within the context of databases. Conclusion: The statement \"SQL is a data sublanguage\" is Option A: True . Therefore, the correct answer is True ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 9
    question: The qualifier DISTINCT must be used in an SQL statement when we want to eliminate duplicate rows.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "Option A: True - In SQL, the DISTINCT keyword is used in a SELECT statement to eliminate duplicate rows from the result set. When you use DISTINCT , it ensures that only unique rows are returned, thereby eliminating duplicates based on the specified columns in the query. Conclusion: The statement \"The qualifier DISTINCT must be used in an SQL statement when we want to eliminate duplicate rows\" is Option A: True . Therefore, the correct answer is True ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 10
    question: DISTINCT and its counterpart, ALL, can be used more than once in a SELECT statement.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "Option A: True - In SQL, the DISTINCT and ALL keywords can be used multiple times in a SELECT statement. DISTINCT is used to return unique rows in the result set, eliminating duplicates. ALL (which is optional and often implied when DISTINCT is not used) is used to return all rows, including duplicates. You can use DISTINCT multiple times to ensure that the result set is uniquely filtered based on different columns or combinations of columns. Conclusion: The statement \"DISTINCT and its counterpart, ALL, can be used more than once in a SELECT statement\" is Option A: True . Therefore, the correct answer is True ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 11
    question: The result of every SQL query is a table.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "Option A: True - In SQL, the result of every query, whether it retrieves data from one or multiple tables, is structured as a table. Even if the query returns a single value, it is still considered as a one-column table. This table-like structure allows SQL to handle and manipulate data uniformly, regardless of the complexity of the query or the number of tables involved. Conclusion: The statement \"The result of every SQL query is a table\" is Option A: True . Therefore, the correct answer is True ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 12
    question: COUNT(field_name) tallies only those rows that contain a value; it ignores all null values.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "Option A: True - The COUNT(field_name) function in SQL counts only those rows where the specified field (column) contains a non-null value. It does not count rows where the field is null. Therefore, rows with null values in the specified field are ignored in the count. Conclusion: The statement \"COUNT(field_name) tallies only those rows that contain a value; it ignores all null values\" is Option A: True . Hence, the correct answer is True ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 13
    question: SUM, AVG, MIN, and MAX can only be used with numeric columns.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "Option A: True - The SQL aggregate functions SUM, AVG, MIN, and MAX are designed to operate on numeric columns or expressions. They calculate totals, averages, minimum values, and maximum values respectively for the specified numeric data in a column. These functions are not applicable to non-numeric data types such as text or date columns. Conclusion: The statement \"SUM, AVG, MIN, and MAX can only be used with numeric columns\" is Option A: True . Hence, the correct answer is True ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: Most companies keep at least two versions of any database they are using.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: "Option B: False - Most companies typically maintain multiple versions of their databases for backup and recovery purposes. This practice ensures that if there are issues with the current version or data corruption occurs, they can revert to a previous version to minimize data loss and downtime. However, maintaining exactly two versions is not a strict rule; the number of versions kept may vary depending on the company's policies, needs, and the criticality of the data. Conclusion: The statement \"Most companies keep at least two versions of any database they are using\" is Option B: False . Hence, the correct answer is False ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 15
    question: The format SELECT-FROM-WHERE is the fundamental framework of SQL SELECT statements.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "The SELECT-FROM-WHERE format is indeed the fundamental framework of SQL SELECT statements. This structure outlines how SQL queries are typically written: SELECT : Specifies the columns or expressions to retrieve from the database. FROM : Specifies the table or tables from which to retrieve the data. WHERE : Filters the rows returned by specifying conditions that must be met. This format provides a structured way to query data from relational databases using SQL. Conclusion: The statement \"The format SELECT-FROM-WHERE is the fundamental framework of SQL SELECT statements\" is Option A: True . Hence, the correct answer is True ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 16
    question: Indexes may be created or dropped at any time.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "Indexes in SQL can indeed be created or dropped at any time during the lifecycle of a database. Indexes are used to improve the speed of data retrieval operations by providing quick access paths to data based on the indexed columns. They can be added to speed up queries or removed if they are no longer necessary or if they degrade performance for certain operations. Conclusion: The statement \"Indexes may be created or dropped at any time\" is Option A: True . Hence, the correct answer is True ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 17
    question: "The SQL statement: SELECT Number1 + Number 2 AS Total FROM NUMBER_TABLE; adds two numbers from each row together and lists the results in a column named Total."
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "The SQL statement SELECT Number1 + Number2 AS Total FROM NUMBER_TABLE; performs arithmetic addition on the columns Number1 and Number2 for each row in the NUMBER_TABLE. The result of each addition operation is stored in a new column named Total. Conclusion: The statement \"The SQL statement: SELECT Number1 + Number 2 AS Total FROM NUMBER_TABLE; adds two numbers from each row together and lists the results in a column named Total\" is Option A: True . Hence, the correct answer is True ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 18
    question: ORDER BY can be combined with the SELECT statements.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "The ORDER BY clause in SQL is used to sort the result set returned by a SELECT statement. It sorts the rows in ascending or descending order based on one or more columns specified in the ORDER BY clause. Conclusion: The statement \"ORDER BY can be combined with the SELECT statements\" is Option A: True . Hence, the correct answer is True ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 19
    question: Data manipulation language (DML) commands are used to define a database, including creating, altering, and dropping tables and establishing constraints.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: "Data Manipulation Language (DML) commands in SQL are used to manipulate data in the database, not to define the database structure. DML commands include INSERT, UPDATE, DELETE, and SELECT (when used to retrieve data). Conclusion: The statement \"Data manipulation language (DML) commands are used to define a database, including creating, altering, and dropping tables and establishing constraints\" is Option B: False . Hence, the correct answer is False ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 20
    question: Scalar aggregate are multiple values returned from an SQL query that includes an aggregate function.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: "Option B: False Scalar aggregates refer to a single value returned from an SQL query that includes an aggregate function like COUNT, SUM, AVG, MIN, or MAX. These functions operate on a set of values and return a single result. Conclusion: The statement \"Scalar aggregate are multiple values returned from an SQL query that includes an aggregate function\" is Option B: False . Hence, the correct answer is False ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 21
    question: The keyword LIKE can be used in a WHERE clause to refer to a range of values.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: "Option B: False The keyword LIKE in SQL is used in a WHERE clause to search for a specified pattern in a column. It is typically used with wildcard characters (% for zero or more characters and _ for a single character) to match patterns rather than ranges of values. Conclusion: The statement \"The keyword LIKE can be used in a WHERE clause to refer to a range of values\" is Option B: False . Hence, the correct answer is False ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 22
    question: "The SQL statement: SELECT Name, COUNT(*) FROM NAME_TABLE; counts the number of name rows and displays this total in a table with a single row and a single column."
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "The SQL statement SELECT Name, COUNT(*) FROM NAME_TABLE; counts the number of rows in the NAME_TABLE and displays this total alongside each unique Name in separate rows. The COUNT(*) function counts all rows returned by the query. Conclusion: The statement \"The SQL statement: SELECT Name, COUNT(*) FROM NAME_TABLE; counts the number of name rows and displays this total in a table with a single row and a single column\" is Option A: True . Hence, the correct answer is True ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 23
    question: The SQL keyword GROUP BY instructs the DBMS to group together those rows that have the same value in a column.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "The SQL keyword GROUP BY instructs the database management system (DBMS) to group rows that have the same value in specified columns into summary rows. It is used in conjunction with aggregate functions like SUM, COUNT, AVG, etc., to group the result-set by one or more columns. Conclusion: The statement \"The SQL keyword GROUP BY instructs the DBMS to group together those rows that have the same value in a column\" is Option A: True . Hence, the correct answer is True ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 24
    question: The wildcard asterisk (*) is the SQL-92 standard for indicating "any sequence of characters."
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "The wildcard asterisk (*) in SQL-92 is indeed the standard symbol used to represent \"any sequence of characters\" when used with the LIKE operator in SQL queries. It matches any string of zero or more characters, making it a powerful tool for pattern matching in SQL statements. Conclusion: The statement \"The wildcard asterisk (*) is the SQL-92 standard for indicating 'any sequence of characters'\" is Option A: True . Hence, the correct answer is True ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 25
    question: Microsoft Access has become ubiquitous, and being able to program in Access is a critical skill.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "Option A: True Microsoft Access has indeed become widely used, especially in environments where desktop databases are needed. Being proficient in programming with Microsoft Access can be considered a critical skill in various industries and organizations that use it extensively for managing databases and creating applications. Conclusion: The statement \"Microsoft Access has become ubiquitous, and being able to program in Access is a critical skill\" is Option A: True . Hence, the correct answer is True ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 26
    question: "SQL provides five built-in functions: COUNT, SUM, AVG, MAX, MIN."
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "SQL does indeed provide five built-in functions for aggregate operations: COUNT : Counts the number of rows or non-null values in a column. SUM : Calculates the sum of numeric values in a column. AVG : Computes the average of numeric values in a column. MAX : Retrieves the maximum value from a column. MIN : Retrieves the minimum value from a column. These functions are fundamental for data analysis and reporting tasks within SQL queries. Conclusion: The statement \"SQL provides five built-in functions: COUNT, SUM, AVG, MAX, MIN\" is Option A: True . Hence, the correct answer is True ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 27
    question: The keyword BETWEEN can be used in a WHERE clause to refer to a range of values.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "The keyword BETWEEN in SQL is used in a WHERE clause to specify a range of values. It allows you to select rows based on a range defined by two values, inclusive of both endpoints. The syntax typically looks like this: SELECT column_name FROM table_name WHERE column_name BETWEEN value1 AND value2; This query will retrieve rows where column_name falls within the range defined by value1 and value2, inclusive. Conclusion: The statement \"The keyword BETWEEN can be used in a WHERE clause to refer to a range of values\" is Option A: True . Hence, the correct answer is True ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 28
    question: To establish a range of values, < and > can be used.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "In SQL, the symbols < (less than) and > (greater than) are used to establish ranges of values in a WHERE clause. They allow you to specify conditions that include values less than or greater than a specified limit. For example: To find rows where a column value is greater than 10: SELECT * FROM table_name WHERE column_name > 10; To find rows where a column value is less than or equal to 100: SELECT * FROM table_name WHERE column_name <= 100; These symbols are essential for creating conditions that define ranges of values based on specific criteria. Conclusion: The statement \"To establish a range of values, < and > can be used\" is Option A: True . Hence, the correct answer is True ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
  - id: 29
    question: If you are going to use a combination of three or more AND and OR conditions, it is often easier to use the NOT and NOT IN operators.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: "In SQL, the NOT and NOT IN operators are used to negate conditions or exclude specific values from a result set, but they do not inherently simplify the use of complex combinations of AND and OR conditions. When dealing with complex conditions involving three or more AND and OR operators, using proper grouping with parentheses and logical operators (AND, OR) is typically the standard approach. The NOT operator is used to negate a condition, while NOT IN is used to exclude specific values from a query result. For example: Using NOT to negate a condition: SELECT * FROM table_name WHERE NOT column_name = 'value'; Using NOT IN to exclude specific values: SELECT * FROM table_name WHERE column_name NOT IN ('value1', 'value2'); However, neither NOT nor NOT IN operators directly replace the need for properly structuring complex conditions with AND and OR. Conclusion: The statement \"If you are going to use a combination of three or more AND and OR conditions, it is often easier to use the NOT and NOT IN operators\" is Option B: False . Hence, the correct answer is False ."
    keyConcept: Introduction To Sql
    testedIn:
      - PPSC
      - FPSC
---


