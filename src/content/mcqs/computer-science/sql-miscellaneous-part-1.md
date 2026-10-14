---
title: Sql Miscellaneous — Part 1 MCQs with Explanations
description: Practice high-yield Computer Science & IT MCQs on Sql Miscellaneous — Part 1 with worked academic solutions for PPSC, FPSC, CSS, PMS, NTS.
subject: computer-science
subjectName: Computer Science & IT
topic: sql-miscellaneous-part-1
topicName: Sql Miscellaneous — Part 1
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
    question: Which is the subset of SQL commands used to manipulate Oracle Database structures, including tables?
    options:
      - Data Definition Language(DDL)
      - Data Manipulation Language(DML)
      - Both of above
      - None
    answer: 0
    explanation: Data Definition Language, represented by DDL , is the subset of SQL commands used to manipulate Oracle Database structures, including tables. DDL commands are responsible for defining, modifying, and deleting the structure of a database, such as creating and altering tables, defining constraints, and managing indexes. They do not deal with the actual data within the tables, which is the primary function of Data Manipulation Language (DML) commands. So, Option A is the correct answer. CREATE, ALTER, RENAME, DROP and TRUNCATE statements are the names of few data definition elements.
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 2
    question: Which operator performs pattern matching?
    options:
      - BETWEEN operator
      - LIKE operator
      - EXISTS operator
      - None of these
    answer: 1
    explanation: "LIKE is a keyword that is used in the WHERE clause. Basically, LIKE allows us to do a search based operation on a pattern rather than specifying exactly what is desired (as in IN ) or spell out a range (as in BETWEEN ). The syntax is as follows: SELECT \"column_name\" FROM \"table_name\" WHERE \"column_name\" LIKE {PATTERN} {PATTERN} often consists of wildcards. In SQL, there are two wildcards: 1= % (percent sign) represents zero, one, or more characters. 2= _ (underscore) represents exactly one character."
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 3
    question: What operator tests column for the absence of data?
    options:
      - EXISTS operator
      - NOT operator
      - IS NULL operator
      - None of these
    answer: 2
    explanation: "Always use IS NULL to look for NULL values. Syntax: SELECT \"column_name\" FROM \"table_name\" WHERE \"column_name\" IS NULL"
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 4
    question: In SQL, which command(s) is(are) used to change a table's storage characteristics?
    options:
      - ALTER TABLE
      - MODIFY TABLE
      - CHANGE TABLE
      - All of the above
    answer: 0
    explanation: "To change the structure of the table we use ALTER TABLE. Sytax: ALTER TABLE \"table_name\" ADD \"column_name\" datatype OR ALTER TABLE \"table_name\" DROP COLUMN \"column_name\" etc.."
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: In SQL, which of the following is not a data definition language commands?
    options:
      - RENAME
      - REVOKE
      - GRANT
      - UPDATE
    answer: 3
    explanation: "RENAME: - With RENAME statement you can rename a table. REVOKE: - The REVOKE command removes user access rights or privileges to the database objects. GRANT: - In SQL GRANT is a command used to provide access or privileges on the database objects to the users. UPDATE: - The UPDATE Statement is used to modify the existing rows in a table. RENAME , REVOKE and GRANT are DDL(Data Definition Language) commands and UPDATE is DML(Data Manipulation Language) command."
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: Which of the SQL statements is correct?
    options:
      - SELECT Username AND Password FROM Users
      - SELECT Username, Password FROM Users
      - SELECT Username, Password WHERE Username = 'user1'
      - None of these
    answer: 1
    explanation: "Correct order of SELECT, FROM and WHERE clause is as follow: SELECT column_name1, column_name2, .... FROM table_name WHERE condition So, only SELECT Username, Password FROM Users follows the above syntax."
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 7
    question: The FROM SQL clause is used to...
    options:
      - specify what table we are selecting or deleting data FROM
      - specify range for search condition
      - specify search condition
      - None of these
    answer: 0
    explanation: "The FROM SQL clause is used to specify from which table we are selecting or deleting data. It defines the source table from which data will be retrieved or modified in a SQL query. Here's the breakdown: Option A: specify what table we are selecting or deleting data FROM This option correctly describes the purpose of the FROM clause, which is to specify the table from which data operations will be performed. Option B: specify range for search condition This is not the primary purpose of the FROM clause. It is used for table specification, not defining search ranges. Option C: specify search condition The FROM clause is not used to specify search conditions. Search conditions are typically defined in the WHERE clause. Option D: None of these Option A is a valid description of the FROM clause's purpose. So, the correct answer is Option A: specify what table we are selecting or deleting data FROM ."
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 8
    question: Which SQL keyword is used to retrieve only unique values?
    options:
      - DISTINCTIVE
      - UNIQUE
      - DISTINCT
      - DIFFERENT
    answer: 2
    explanation: "This command is used to select the distinct rows. For Example: If we want to select all distinct department names from employee table, the query would be: SELECT DISTINCT dept FROM employee;"
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 9
    question: Which SQL keyword is used to retrieve a maximum value?
    options:
      - TOP
      - MOST
      - UPPER
      - MAX
    answer: 3
    explanation: "MAX function is used to get the maximum value from a column. To get the maximum salary drawn by an employee, the query would be: SELECT MAX (salary) FROM employee;"
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 10
    question: What is a view?
    options:
      - A view is a special stored procedure executed when certain event occurs.
      - A view is a virtual table which results of executing a pre-compiled query. A view is not part of the physical database schema, while the regular tables are.
      - A view is a database diagram.
      - None of these
    answer: 1
    explanation: "A VIEW is a virtual table, through which a selective portion of the data from one or more tables can be seen. A view do not contain data of their own. They are used to restrict access to the database or to hide data complexity. A view is stored as a SELECT statement in the database. DML operations on a view like INSERT, UPDATE, DELETE affects the data in the original table upon which the view is based. The Syntax to create a sql view is: CREATE VIEW view_name AS SELECT column_list FROM table_name [WHERE condition]; view_name is the name of the VIEW. The SELECT statement is used to define the columns and rows that you want to display in the view."
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 11
    question: Which of the following SQL commands is used to retrieve data?
    options:
      - DELETE
      - INSERT
      - SELECT
      - JOIN
    answer: 2
    explanation: "The SQL command used to retrieve data from a database is SELECT . Here's a brief explanation of each option: Option A: DELETE The DELETE command is used to remove data from a database table, not to retrieve it. Option B: INSERT The INSERT command is used to add new records or data into a database table, not to retrieve existing data. Option C: SELECT The SELECT command is specifically designed for retrieving data from one or more tables in a database. It is used to perform queries and retrieve records that match specified criteria. Option D: JOIN The JOIN clause is used in conjunction with the SELECT statement to combine data from multiple tables. While it is a crucial part of querying data, it is not used by itself to retrieve data; it is used to retrieve data from multiple related tables. So, the correct SQL command to retrieve data is Option C: SELECT ."
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 12
    question: Which of the following is a SQL aggregate function?
    options:
      - LEFT
      - AVG
      - JOIN
      - LEN
    answer: 1
    explanation: "SQL has several arithmetic functions to do math on the numbers, such as summing up, taking average, retrieved from the column. They are: AVG():- Average of the column COUNT():- Number of records MAX():- maximum of the column MIN():- minimum of the column SUM():- Sum of the column"
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 13
    question: Which SQL statement is used to update data in a database?
    options:
      - SAVE
      - UPDATE
      - SAVE AS
      - MODIFY
    answer: 1
    explanation: "The SQL statement used to update data in a database is UPDATE . Here's a brief explanation of each option: Option A: SAVE There is no standard SQL command called SAVE for updating data in a database. Option B: UPDATE The UPDATE command is used to modify existing records in a database table. It allows you to change the values of specific columns in one or more rows based on specified conditions. Option C: SAVE AS SAVE AS is not a standard SQL command used for updating data. It's not typically used in SQL for data modification. Option D: MODIFY MODIFY is not a standard SQL command for updating data. It may be used in some specific database systems, but it's not a commonly recognized SQL command for data updates. So, the correct SQL statement to update data in a database is Option B: UPDATE ."
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: Which SQL statement is used to delete data FROM a database?
    options:
      - COLLAPSE
      - REMOVE
      - ALTER
      - DELETE
    answer: 3
    explanation: "The SQL statement used to delete data from a database is DELETE . Here's a brief explanation of each option: Option A: COLLAPSE There is no standard SQL command called COLLAPSE for deleting data from a database. Option B: REMOVE REMOVE is not a standard SQL command used for deleting data. It's not typically used in SQL for data deletion. Option C: ALTER The ALTER command is used to modify the structure of a database, such as adding, modifying, or deleting columns. It is not primarily used for data deletion. Option D: DELETE The DELETE command is specifically designed to remove rows or records from a database table based on specified conditions. So, the correct SQL statement to delete data from a database is Option D: DELETE ."
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 15
    question: Which SQL keyword is used to sort the result-set?
    options:
      - SORT BY
      - ORDER
      - ORDER BY
      - SORT
    answer: 2
    explanation: "The SQL keyword used to sort the result-set in a specific order is ORDER BY . Here's a brief explanation of each option: Option A: SORT BY There is no standard SQL keyword called SORT BY for sorting result-sets. Option B: ORDER The ORDER keyword, by itself, is not used to specify the sorting of a result-set. It's typically used in combination with BY as ORDER BY . Option C: ORDER BY The ORDER BY clause is used to specify the sorting of the result-set based on one or more columns. You can use it to sort the result-set in ascending or descending order. Option D: SORT SORT is not a standard SQL keyword used for sorting result-sets. The correct keyword is ORDER BY . So, the correct SQL keyword to sort the result-set is Option C: ORDER BY ."
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 16
    question: The SQL statement SELECT SUBSTR('123456789', INSTR('abcabcabc', 'b'), 4) FROM DUAL;
    options:
      - "6789"
      - "2345"
      - "1234"
      - "456789"
      - MAX
      - COUNT
      - SUM
      - All of the above
    answer: 1
    explanation: "INSTR Function:- The INSTR function in SQL is used to find the starting location of a pattern in a string. The syntax for the INSTR function is as follows: INSTR ( str , pattern ): Find the starting location of pattern in string str . SUBSTR Function:- The Substring function in SQL is used to grab a portion of the stored data. The syntax for the SUBSTR function is as follows: SUBSTR ( str , pos , len ): Starting with the position pos in string str select the characters upto the length len . In the above query, INSTR('abcabcabc', 'b') outputs 2 as the starting location of pattern"
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 17
    question: Which of the following group functions ignore NULL values?
    options:
      - MAX
      - COUNT
      - SUM
      - All of the above
    answer: 3
    explanation: "All three of the listed SQL group functions, MAX , COUNT , and SUM , have the ability to ignore NULL values when processing data within their respective functions. Here's a brief explanation of each option: Option A: MAX The MAX function is used to find the maximum (largest) value in a set of values. It can operate on a column and will return the maximum value, ignoring NULL values in that column. Option B: COUNT The COUNT function is used to count the number of rows in a result-set or the number of non-NULL values in a specific column. It ignores NULL values when counting. Option C: SUM The SUM function is used to calculate the sum of all values in a numeric column. It adds up all the non-NULL values and produces a result, ignoring NULL values. Option D: All of the above This option is correct because all of the mentioned group functions ( MAX , COUNT , and SUM ) have the capability to ignore NULL values when performing their respective operations. So, the correct answer is Option D: All of the above ."
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 18
    question: Table Employee has 10 records. It has a non-NULL SALARY column which is also UNIQUE. The SQL statement SELECT COUNT(*) FROM Employee WHERE SALARY > ANY (SELECT SALARY FROM EMPLOYEE); prints
    options:
      - "10"
      - "9"
      - "5"
      - "0"
    answer: 1
    explanation: ANY compares a value with each of the values in a list or results from a query and evaluates to true if the result of an inner query contains at least one row. ANY must be preceded by comparison operators(=, >, <, <=, >=, <>). Employee table has 10 records and each value in non-NULL SALARY column is unique i.e different. So, in that 10 records one of the record will be minimum which cannot be greater than any nine value of the salary column. Hence the condition WHERE SALARY > ANY (SELECT SALARY FROM employee) will be true nine times. So, the COUNT(*) outputs 9.
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 19
    question: The SQL statement SELECT SUBSTR('abcdefghij', INSTR('123321234', '2', 3, 2), 2) FROM DUAL; prints
    options:
      - gh
      - "23"
      - bc
      - ab
    answer: 0
    explanation: "Another form of INSTR function used in ORACLE is: INSTR ( str , pattern , [ starting position , [ nth location ]]): Finds the starting location of the nth occurrence of pattern beginning in the starting position-th position in string str . Example: - SELECT INSTR('kolkata', 'a', 1, 2) FROM DUAL; will output 7 as the starting location of 2nd occurrence of pattern 'a' from starting position 1 in string 'kolkata' is 7. In the above query INSTR('123321234', '2', 3, 2) will give the output 7 as the starting location of 2nd occurrence of pattern '2' from starting location three in string '123321234' is 7. Now SUBSTR function becomes SUBSTR('abcdefghij"
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 20
    question: The SQL statement SELECT ROUND(45.926, -1) FROM DUAL;
    options:
      - is illegal
      - prints garbage
      - prints 045.926
      - prints 50
    answer: 3
    explanation: "The ROUND function in SQL is used to round a number to a specified precision. The syntax is: ROUND ( expression , [ decimal place] ) where [ decimal place ] indicates the number of decimal points returned. A negative number means the rounding will occur to the digit to the left of the decimal point. For example, -1 means the number will be rounded to the nearest tens. For above given example, the output would be 50 because the nearest tens of 45.926, is 50. Taking another example, if we have to round (44.678, -1), the out put would be 40, because the nearest tens of 44.678 is 40."
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 21
    question: Which of the following must be enclosed in double quotes?
    options:
      - Dates
      - Column Alias
      - Strings
      - All of the above
    answer: 3
    explanation: "In SQL, all of the above options must be enclosed in double quotes under specific circumstances. Dates: When using a date literal in SQL, it should be enclosed in single quotes, like '2023-10-20'. Double quotes are typically not used for dates. Column Alias: If you want to give a column an alias (a name that represents the column in the result set), you can enclose the alias in double quotes if it contains spaces or special characters. For example, if you want to alias a column as \"Total Sales,\" you would write it as \"Total Sales\". However, it's not necessary to use double quotes for aliases without spaces or special characters. Strings: When working with string values that contain spaces, special characters, or reserved keywords, you should enclose the string in single quotes (e.g., 'John Doe'). Double quotes are sometimes used to enclose identifiers (like table or column names) but not for string values. So, the correct answer is Option D, as all of the mentioned elements may need double quotes, but it depends on the specific context and requirements in SQL."
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 22
    question: Which of the following command makes the updates performed by the transaction permanent in the database?
    options:
      - ROLLBACK
      - COMMIT
      - TRUNCATE
      - DELETE
    answer: 1
    explanation: In SQL, the command that makes the updates performed by a transaction permanent in the database is the COMMIT command. When you issue the COMMIT command, it finalizes all the changes made within the current transaction, ensuring that they are saved to the database and cannot be rolled back. ROLLBACK (Option A) is used to undo the changes made during the transaction and return the database to its previous state. TRUNCATE (Option C) is used to quickly delete all rows from a table, but it's not used to make changes performed by a transaction permanent. DELETE (Option D) is used to remove specific rows from a table, but it doesn't finalize changes across an entire transaction. So, Option B, the COMMIT command, is the correct choice for making transaction updates permanent in the database.
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 23
    question: Which command undo all the updates performed by the SQL in the transaction?
    options:
      - ROLLBACK
      - COMMIT
      - TRUNCATE
      - DELETE
    answer: 0
    explanation: In SQL, the command that undoes all the updates performed by the SQL statements within a transaction is the ROLLBACK command. When you issue the ROLLBACK command, it cancels all the changes made during the transaction, effectively reverting the database to its previous state. COMMIT (Option B) is used to make the changes performed by the transaction permanent in the database. TRUNCATE (Option C) is used to quickly delete all rows from a table, but it doesn't address the concept of transactions or undoing updates. DELETE (Option D) is used to remove specific rows from a table, but it doesn't undo all changes made within a transaction. So, Option A, the ROLLBACK command, is the correct choice for undoing all updates performed by SQL statements in a transaction.
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 24
    question: Find all the cities whose humidity is 89, Table Name weather
    options:
      - SELECT city WHERE humidity = 89
      - SELECT city FROM weather WHERE humidity = 89
      - SELECT humidity = 89 FROM weather
      - SELECT city FROM weather
    answer: 1
    explanation: To retrieve all the cities whose humidity is 89 from the "weather" table, you should use the SELECT city FROM weather WHERE humidity = 89; query. Option B is the correct choice because it specifically selects the "city" column from the "weather" table where the "humidity" is equal to 89. This query will return the desired result, listing the cities meeting the specified humidity condition.
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 25
    question: Find the temperature in increasing order of all cities, Table Name 'weather'
    options:
      - SELECT city FROM weather ORDER BY temperature
      - SELECT city, temperature FROM weather
      - SELECT city, temperature FROM weather ORDER BY temperature
      - SELECT city, temperature FROM weather ORDER BY city
    answer: 2
    explanation: To retrieve the temperature of all cities in increasing order, you should use the SQL query SELECT city, temperature FROM weather ORDER BY temperature; (Option C). This query selects both the "city" and "temperature" columns from the "weather" table and arranges the result set in ascending order based on the "temperature" column. As a result, you'll get the temperature values for all cities listed from the lowest to the highest temperature.
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 26
    question: What is the meaning of LIKE '%0%0%'
    options:
      - Feature begins with two 0's
      - Feature ends with two 0's
      - Feature has more than two 0's
      - Feature has two 0's in it, at any position
    answer: 3
    explanation: The SQL pattern LIKE '%0%0%' means that the "Feature" should have two 0's in it, at any position within the text. The '%' wildcard matches any sequence of characters, so the pattern can match any string as long as it contains two consecutive 0's, regardless of their position within the text. So, Option D is the correct choice for the meaning of this pattern.
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 27
    question: Find the names of these cities with temperature and condition whose condition is neither sunny nor cloudy
    options:
      - SELECT city, temperature, condition FROM weather WHERE condition NOT IN ('sunny', 'cloudy')
      - SELECT city, temperature, condition FROM weather WHERE condition NOT BETWEEN ('sunny', 'cloudy')
      - SELECT city, temperature, condition FROM weather WHERE condition IN ('sunny', 'cloudy')
      - SELECT city, temperature, condition FROM weather WHERE condition BETWEEN ('sunny', 'cloudy')
    answer: 0
    explanation: To retrieve the names of cities with their respective temperature and condition where the condition is neither "sunny" nor "cloudy," you should use the SQL query SELECT city, temperature, condition FROM weather WHERE condition NOT IN ('sunny', 'cloudy'); (Option A). This query selects the desired columns from the "weather" table and filters the rows where the "condition" is not "sunny" or "cloudy." This way, you'll get the information for cities with conditions other than "sunny" or "cloudy."
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 28
    question: Find the name of those cities with temperature and condition whose condition is either sunny or cloudy but temperature must be greater than 70 o F.
    options:
      - SELECT city, temperature, condition FROM weather WHERE condition = 'sunny' AND condition = 'cloudy' OR temperature > 70
      - SELECT city, temperature, condition FROM weather WHERE condition = 'sunny' OR condition = 'cloudy' OR temperature > 70
      - SELECT city, temperature, condition FROM weather WHERE condition = 'sunny' OR condition = 'cloudy' AND temperature > 70
      - SELECT city, temperature, condition FROM weather WHERE condition = 'sunny' AND condition = 'cloudy' AND temperature > 70
    answer: 2
    explanation: "This SQL query is used to retrieve the names of cities along with their temperature and condition, but with specific conditions: 1. WHERE condition = 'sunny' OR condition = 'cloudy': This part of the query specifies that the \"condition\" in the \"weather\" table should be either \"sunny\" or \"cloudy.\" Using the OR operator, it allows the condition to match either of these values. 2. AND temperature > 70: After specifying the condition, this part of the query checks that the temperature is greater than 70°F. The AND operator is used to ensure that this temperature condition is met in addition to the \"sunny\" or \"cloudy\" condition. By combining these conditions, Option C correctly finds cities where the condition is either \"sunny\" or \"cloudy\" and the temperature exceeds 70°F. This results in a list of cities that meet both of these criteria."
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 29
    question: Find all the tuples having temperature greater than 'Paris'.
    options:
      - SELECT * FROM weather WHERE temperature > (SELECT temperature FROM weather WHERE city = 'Paris')
      - SELECT * FROM weather WHERE temperature > (SELECT * FROM weather WHERE city = 'Paris')
      - SELECT * FROM weather WHERE temperature > (SELECT city FROM weather WHERE city = 'Paris')
      - SELECT * FROM weather WHERE temperature > 'Paris' temperature
    answer: 0
    explanation: To find all the tuples (rows) in the "weather" table where the temperature is greater than the temperature in Paris, you should use the SQL query SELECT * FROM weather WHERE temperature > (SELECT temperature FROM weather WHERE city = 'Paris') (Option A). This query correctly uses a subquery to first select the temperature in Paris and then compares it with the temperatures in other cities. If the temperature in a city is greater than that of Paris, the row is included in the result set. This is why Option A is the correct choice.
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 30
    question: Find all the cities with temperature, condition and humidity whose humidity is in the range of 63 to 79
    options:
      - SELECT * FROM weather WHERE humidity IN (63 to 79)
      - SELECT * FROM weather WHERE humidity NOT IN (63 AND 79)
      - SELECT * FROM weather WHERE humidity BETWEEN 63 AND 79
      - SELECT * FROM weather WHERE humidity NOT BETWEEN 63 AND 79
    answer: 2
    explanation: To retrieve all the cities along with their temperature, condition, and humidity where the humidity falls within the range of 63 to 79, you should use the SQL query SELECT * FROM weather WHERE humidity BETWEEN 63 AND 79 (Option C). This query correctly uses the BETWEEN operator to specify the humidity range. It will include rows where the humidity value is equal to or greater than 63 and equal to or less than 79, thus giving you cities with humidity within the specified range. This is why Option C is the correct choice.
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 31
    question: Find the names of the countries whose condition is sunny.
    options:
      - SELECT country FROM location WHERE condition = 'sunny'
      - SELECT country FROM location WHERE city IN (SELECT city FROM weather WHERE condition = 'sunny')
      - SELECT country FROM location WHERE city NOT IN (SELECT city FROM weather WHERE condition = 'sunny')
      - SELECT country FROM location WHERE city UNION (SELECT city FROM weather WHERE condition = 'sunny')
    answer: 1
    explanation: To find the names of countries where the condition is "sunny," you should use the SQL query SELECT country FROM location WHERE city IN (SELECT city FROM weather WHERE condition = 'sunny'); (Option B). This query correctly uses a subquery to first select the cities with a "sunny" condition from the "weather" table and then matches those cities to the "city" column in the "location" table to determine the corresponding countries. Option B is the appropriate choice for obtaining the desired result.
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 32
    question: Find the name of all cities with their temperature, humidity and countries.
    options:
      - SELECT city, temperature, humidity, country FROM location
      - SELECT weather.city, temperature, humidity, country FROM weather, location
      - SELECT weather.city, temperature, humidity, country FROM weather, location WHERE weather.city = location.city
      - SELECT weather.city, temperature, humidity FROM weather SELECT country FROM location WHERE weather.city = location.city
    answer: 2
    explanation: To retrieve the names of all cities along with their temperature, humidity, and countries, you should use the SQL query SELECT weather.city, temperature, humidity, country FROM weather, location WHERE weather.city = location.city; (Option C). This query correctly joins the "weather" and "location" tables based on the "city" column, which is common between the two tables. This allows you to obtain the information for all cities, including their temperature, humidity, and corresponding countries. Option C is the appropriate choice for achieving this result.
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 33
    question: Find the name of cities with all entries whose temperature is in the range of 71 and 89
    options:
      - SELECT * FROM weather WHERE temperature NOT IN (71 to 89)
      - SELECT * FROM weather WHERE temperature NOT IN (71 and 89)
      - SELECT * FROM weather WHERE temperature NOT BETWEEN 71 to 89
      - SELECT * FROM weather WHERE temperature BETWEEN 71 AND 89
    answer: 3
    explanation: To retrieve the names of cities with entries where the temperature falls within the range of 71 to 89, you should use the SQL query SELECT * FROM weather WHERE temperature BETWEEN 71 AND 89; (Option D). This query utilizes the BETWEEN operator to specify the temperature range. It selects all entries in the "weather" table where the temperature is within the specified range. Option D is the correct choice for achieving this result.
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 34
    question: Which of the following query finds the names of the sailors who have reserved at least one boat?
    options:
      - SELECT DISTINCT s.sname FROM sailors s, reserves r WHERE s.sid = r.sid
      - SELECT s.sname FROM sailors s, reserves r WHERE s.sid = r.sid
      - SELECT DISTINCT s.sname FROM sailors, reserves WHERE s.sid = r.sid
      - None of These
    answer: 0
    explanation: To find the names of sailors who have reserved at least one boat, you should use the SQL query SELECT DISTINCT s.sname FROM sailors s, reserves r WHERE s.sid = r.sid; (Option A). This query joins the "sailors" and "reserves" tables on the "sid" column and selects the distinct "sname" (sailor names) from the "sailors" table. The use of DISTINCT ensures that you only get unique sailor names. Option A is the correct choice for achieving this result.
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 35
    question: Which of the following query finds colors of boats reserved by "Dustin"?
    options:
      - SELECT DISTINCT b.color FROM boats b, sailors s WHERE s.sname = 'Dustin' AND s.sid = b.sid
      - SELECT DISTINCT b.color FROM boats b, reserves r, sailors s WHERE s.sname = 'Dustin' AND s.sid = r.sid AND r.bid = b.bid
      - SELECT DISTINCT b.color FROM boats b, reserves r, sailors s WHERE s.sname = 'Dustin' AND s.sid = r.sid
      - SELECT DISTINCT b.color FROM boats b, reserves r, sailors s WHERE s.sname = 'Dustin' AND r.bid = b.bid
    answer: 1
    explanation: To find the colors of boats reserved by "Dustin," you should use the SQL query SELECT DISTINCT b.color FROM boats b, reserves r, sailors s WHERE s.sname = 'Dustin' AND s.sid = r.sid AND r.bid = b.bid; (Option B). This query joins the "boats," "reserves," and "sailors" tables to find the colors of boats reserved by "Dustin." It ensures that the sailor's name is "Dustin" (s.sname = 'Dustin') and matches the sailor's ID to the reservation's sailor ID (s.sid = r.sid) and the reservation's boat ID to the boat's ID (r.bid = b.bid). The use of DISTINCT ensures you get unique boat colors. Option B is the correct choice for obtaining this information.
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 36
    question: What does the following query find? (SELECT DISTINCT r.sid FROM boats b, reserves r WHERE b.bid = r.bid AND b.color = 'red') MINUS (SELECT DISTINCT r.sid FROM boats b, reserves r WHERE b.bid = r.bid AND b.color = 'green')
    options:
      - Find the sailor IDs of all sailors who have reserved red boats but not green boats
      - Find the sailor IDs of at least one sailor who have reserved red boats but not green boats
      - Find the sailor Ids of atmost one sailor who have reserved red boats but not green boats
      - None of These
    answer: 0
    explanation: The given SQL query finds the sailor IDs of all sailors who have reserved red boats but not green boats. It does this by first selecting the sailor IDs (r.sid) of reservations where the boat color is 'red' and then subtracting the sailor IDs of reservations where the boat color is 'green'. The MINUS operator is used to find the set difference, and in this context, it retrieves the sailor IDs of sailors who have reserved red boats but not green boats. Option A is the correct choice for describing the query's result.
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 37
    question: Which of the following query finds the name of the sailors who have reserved at least two boats?
    options:
      - SELECT DISTINCT s.sname FROM sailors s, reserves r1, reserves r2 WHERE s.sid = r1.sid AND r1.sid = r2.sid AND r1.bid ≠ r2.bid
      - SELECT DISTINCT s.sname FROM sailors s, reserves r1, reserves r2 WHERE s.sid = r1.sid AND COUNT(r1.bid) > r2.bid
      - SELECT DISTINCT s.sname FROM sailors s, reserves r1, reserves r2 WHERE s.sid = r1.sid AND r1.sid = r2.sid AND r1.bid <> r2.bid
      - Both A and B
      - Both A and C
    answer: 4
    explanation: Both Option A and Option C can be used to find the name of sailors who have reserved at least two boats. They achieve this by joining the "sailors" and "reserves" tables twice, specifying that the sailor IDs (s.sid) should be the same in both reservations, and ensuring that the boat IDs (r1.bid and r2.bid) are different. This identifies sailors who have made multiple reservations. Therefore, the correct answer is Option E, which includes both A and C as valid choices for this query.
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 38
    question: Which of the following query finds the total rating of the sailors who have reserved boat "103"?
    options:
      - SELECT SUM(s.rating) FROM sailors s, reserves r AND r.bid = 103
      - SELECT s.rating FROM sailors s, reserves r WHERE s.sid = r.sid AND r.bid = 103
      - SELECT COUNT(s.rating) FROM sailors s, reserves r WHERE s.sid = r.sid AND r.bid = 103
      - SELECT SUM(s.rating) FROM sailors s, reserves r WHERE s.sid = r.sid AND r.bid = 103
    answer: 3
    explanation: To find the total rating of the sailors who have reserved boat "103," you should use the SQL query SELECT SUM(s.rating) FROM sailors s, reserves r WHERE s.sid = r.sid AND r.bid = 103; (Option D). This query correctly joins the "sailors" and "reserves" tables on the sailor ID (s.sid) and specifies the boat ID (r.bid) to be "103." It then calculates the sum of the ratings (s.rating) of the sailors who have reserved this boat. Option D is the correct choice for achieving this result.
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 39
    question: The SELECT statement SELECT 'Hi' FROM DUAL WHERE NULL = NULL; Outputs
    options:
      - Hi
      - FLASE
      - "TRUE"
      - Nothing
    answer: 3
    explanation: The SELECT statement SELECT 'Hi' FROM DUAL WHERE NULL = NULL; outputs Nothing . In SQL, NULL represents an unknown or missing value. When comparing NULL to NULL using the = operator, the result is neither TRUE nor FALSE; it's unknown. Therefore, the condition NULL = NULL doesn't evaluate to TRUE, and the row is not selected. Hence, the query returns no results, which can be represented as Nothing .
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 40
    question: If a query involves NOT, AND, OR with no parenthesis
    options:
      - NOT will be evaluated first; AND will be evaluated second; OR will be evaluated last.
      - NOT will be evaluated first; OR will be evaluated second; AND will be evaluated last.
      - AND will be evaluated first; OR will be evaluated second; NOT will be evaluated last.
      - The order of occurrence determines the order of evaluation.
    answer: 0
    explanation: In SQL, when a query involves NOT, AND, and OR operators without parentheses, the NOT operator is evaluated first, followed by the AND operator, and then the OR operator. This order of evaluation is important for understanding the logic of the query. Therefore, Option A is the correct choice for the order of evaluation.
    keyConcept: Sql Miscellaneous
    testedIn:
      - PPSC
      - FPSC
---


