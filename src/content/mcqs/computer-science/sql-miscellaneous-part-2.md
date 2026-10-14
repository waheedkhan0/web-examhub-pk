---
title: Sql Miscellaneous — Part 2 MCQs with Explanations
description: Practice high-yield Computer Science & IT MCQs on Sql Miscellaneous — Part 2 with worked academic solutions for PPSC, FPSC, CSS, PMS, NTS.
subject: computer-science
subjectName: Computer Science & IT
topic: sql-miscellaneous-part-2
topicName: Sql Miscellaneous — Part 2
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
    question: Let the statement SELECT column1 FROM myTable; return 10 rows. The statement SELECT ALL column1 FROM myTable; will return
    options:
      - less than 10 rows
      - more than 10 rows
      - exactly 10 rows
      - None of these
    answer: 2
    explanation: In SQL, the "SELECT ALL" statement is used to select all rows, which is the default behavior of the "SELECT" statement. If the statement "SELECT column1 FROM myTable;" returns 10 rows, then the statement "SELECT ALL column1 FROM myTable;" will also return exactly 10 rows because it selects all rows from the specified column in the table. Option C is the correct choice.
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 2
    question: Table employee has 10 records. It has a non-NULL SALARY column which is also UNIQUE. The SQL statement SELECT COUNT(*) FROM employee WHERE SALARY > ALL (SELECT SALARY FROM EMPLOYEE); prints
    options:
      - "10"
      - "9"
      - "5"
      - "0"
    answer: 3
    explanation: In this statement, you are comparing the SALARY column of each employee with the result of the subquery that selects all SALARY values from the same table. Since the SALARY column is unique, there is no salary greater than ALL the salaries in the same table, including itself. Therefore, the condition SALARY > ALL (SELECT SALARY FROM EMPLOYEE) will always be false for all records, resulting in a count of 0 .
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 3
    question: Which of the following SQL commands can be used to add data to a database table?
    options:
      - ADD
      - UPDATE
      - APPEND
      - INSERT
    answer: 3
    explanation: The SQL command used to add data to a database table is INSERT . The INSERT statement is used to insert new rows or records into a table. Option D is the correct choice for adding data to a table in SQL. Options A, B, and C are not typically used for this purpose in SQL.
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 4
    question: Which of the following join is also called as an 'inner-join'?
    options:
      - Non-Equijoin
      - Self-Join
      - Equijoin
      - None of these
    answer: 2
    explanation: The join known as an 'inner-join' is also referred to as an Equijoin . An Equijoin is a type of join in SQL that combines rows from two or more tables based on a related column between them, using the equal (=) operator. It selects only the rows for which there is a match in both tables. Option C is the correct choice for the join also known as an 'inner-join.' Options A and B are different types of joins, and Option D states that none of these terms refer to an inner-join.
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: The result of a SQL SELECT statement is a ________ .
    options:
      - file
      - report
      - table
      - form
    answer: 2
    explanation: The result of a SQL SELECT statement is a table. When you execute a SELECT statement in SQL, it retrieves data from one or more tables and presents it as a result set, which is essentially a table of data. This result set can be used for various purposes, such as reporting, analysis, or further processing in your database. Options A, B, and D do not accurately represent the typical result of a SELECT statement in SQL.
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: Which of the following query is correct for using comparison operators in SQL?
    options:
      - SELECT name, course_name FROM student WHERE age>50 and <80
      - SELECT name, course_name FROM student WHERE age>50 and age <80
      - SELECT name, course_name FROM student WHERE age>50 and WHERE age<80
      - None of these
    answer: 1
    explanation: "In SQL, comparison operators are used to compare values in the WHERE clause to filter rows based on specified conditions. The correct usage of these operators is as follows: Greater than (>): Compares if a value is greater than another. Less than (<): Compares if a value is less than another. The correct SQL syntax for using comparison operators to filter rows where the \"age\" column is greater than 50 and less than 80 is as shown in \"Option B.\" Let's break down the correct query: SELECT name, course_name: This part of the query specifies the columns to be retrieved in the result. FROM student: It specifies the table from which the data is retrieved. WHERE age > 50 and age < 80: This part specifies the conditions for filtering the rows. It correctly uses the \">\" and \"<\" comparison operators to filter rows where the \"age\" column is greater than 50 and less than 80. The correct option, therefore, is \"Option B.\""
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 7
    question: How to select all data from student table starting the name from letter 'r'?
    options:
      - SELECT * FROM student WHERE name LIKE 'r%'
      - SELECT * FROM student WHERE name LIKE '%r%'
      - SELECT * FROM student WHERE name LIKE '%r'
      - SELECT * FROM student WHERE name LIKE '_r%'
    answer: 0
    explanation: "To select all data from the \"student\" table where the names start with the letter 'r,' you can use the LIKE operator in SQL. Here's an explanation of each option: Option A: SELECT * FROM student WHERE name LIKE 'r%'; This option selects all rows where the \"name\" column starts with 'r'. Option B: SELECT * FROM student WHERE name LIKE '%r%'; This option selects all rows where the \"name\" column contains the letter 'r' anywhere within the name. Option C: SELECT * FROM student WHERE name LIKE '%r'; This option selects all rows where the \"name\" column ends with the letter 'r'. Option D: SELECT * FROM student WHERE name LIKE '_r%'; This option selects all rows where the \"name\" column has 'r' as the second letter. Since you want to select names starting with 'r,' the correct query is Option A , which uses 'r%' in the LIKE clause to match names that start with 'r'."
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 8
    question: Which of the following SQL query is correct for selecting the name of staffs from 'staffinfo' table where salary is 10,000 or 25,000?
    options:
      - SELECT name FROM staffinfo WHERE salary BETWEEN 10000 AND 25000
      - SELECT name FROM staffinfo WHERE salary IN (10000, 25000)
      - Both A and B
      - None of the above
    answer: 1
    explanation: SELECT name FROM staffinfo WHERE salary IN (10000, 25000); This query correctly selects the names of staff members whose salary is either 10,000 or 25,000. The correct answer is Option B because it selects the names of staffs with salaries of 10,000 or 25,000, as required by the question.
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 9
    question: Select the right statement to insert values to the student table.
    options:
      - INSERT student VALUES (
      - INSERT VALUES (
      - INSERT INTO student VALUES (
      - INSERT VALUES INTO student (
    answer: 2
    explanation: "To insert values into a table using SQL, you should use the INSERT INTO statement, followed by the table name and the keyword VALUES. The correct syntax is: Option C: INSERT INTO student VALUES ( This option is the correct choice for inserting values into the \"student\" table. Option A: INSERT student VALUES ( This option is incorrect because it lacks the \"INTO\" keyword. Option B: INSERT VALUES ( This option is incorrect because it is missing the table name. Option D: INSERT VALUES INTO student ( This option is also incorrect as it has an incorrect order of keywords. So, the correct answer is Option C as it follows the proper syntax for inserting values into the \"student\" table in SQL."
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 10
    question: ............. joins two or more tables based on a specified column value not equaling a specified column value in another table.
    options:
      - EQUIJOIN
      - NON-EQUIJOIN
      - OUTER JOIN
      - NATURAL JOIN
    answer: 1
    explanation: "The type of join that involves joining two or more tables based on a specified column value not equaling a specified column value in another table is known as a NON-EQUIJOIN . In a non-equijoin, the condition for joining is based on inequality or non-equality of values between the columns in different tables. Option A: EQUIJOIN - This type of join matches tables based on the equality of column values and is not relevant to non-equijoin. Option C: OUTER JOIN - An outer join includes unmatched rows from one or both tables but doesn't specifically indicate non-equality. Option D: NATURAL JOIN - A natural join matches columns with the same name in the joined tables, but it is not related to non-equality. So, the correct answer is Option B: NON-EQUIJOIN, as it accurately describes a join based on non-equality of column values in different tables."
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 11
    question: In SQL, which command is used to change a table's storage characteristics?
    options:
      - ALTER TABLE
      - MODIFY TABLE
      - CHANGE TABLE
      - None of these
    answer: 0
    explanation: "In SQL, the command used to change a table's storage characteristics is ALTER TABLE . The ALTER TABLE statement allows you to modify an existing table, which can include changes to the table's structure, storage, or other attributes. Option B: MODIFY TABLE is not a standard SQL command. Option C: CHANGE TABLE is also not a standard SQL command. Option D: \"None of these\" is incorrect because ALTER TABLE is the correct command for this purpose. So, the correct answer is Option A: ALTER TABLE."
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 12
    question: "'AS' clause is used in SQL for"
    options:
      - Selection operation.
      - Rename operation.
      - Join operation.
      - Projection operation.
    answer: 1
    explanation: "In SQL, the 'AS ' clause is used for renaming columns or tables. It is primarily used for the rename operation . When you use the 'AS' clause, you can give an alias or alternate name to a column or a table, making it more readable or meaningful in the query's result. So, the correct answer is Option B: Rename operation."
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 13
    question: Count function in SQL returns the number of
    options:
      - values.
      - distinct values.
      - groups.
      - columns.
    answer: 0
    explanation: "The COUNT function in SQL is used to return the number of values within a specified column. It counts the total number of rows in a result-set or the number of non-NULL values in a specific column. Here's an explanation of each option: Option A: values. This is the correct answer. The COUNT function counts the total number of values (or rows) in a result-set or a specific column. Option B: distinct values. The COUNT function can also be used with the DISTINCT keyword to count the number of distinct (unique) values in a column. However, this is not the primary function of the COUNT function. Option C: groups. The COUNT function is not used to count groups. It is primarily used for counting values or rows. Option D: columns. The COUNT function does not count columns. It counts the number of values or rows. So, the correct answer is Option A: values. ."
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: Which of the following is a valid SQL type?
    options:
      - CHARACTER
      - NUMERIC
      - FLOAT
      - All of the above
    answer: 3
    explanation: "All of the options provided (CHARACTER, NUMERIC, and FLOAT) are valid SQL data types: CHARACTER represents character strings or text. NUMERIC represents numeric values like integers and decimals. FLOAT represents floating-point numbers. So, the correct answer is Option D: All of the above."
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 15
    question: NULL is
    options:
      - the same as 0 for integer
      - the same as blank for character
      - the same as 0 for integer and blank for character
      - not a value
    answer: 3
    explanation: "NULL in SQL is used to represent missing or unknown data. It is not the same as 0 for integer or blank for character. In fact, NULL is not a specific value, but rather an absence of a value or a placeholder for missing data. So, the correct answer is Option D: not a value."
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
---


