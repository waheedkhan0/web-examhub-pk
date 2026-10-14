---
title: Database Connectivity With Python MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Database Connectivity With Python with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: database-connectivity-with-python
topicName: Database Connectivity With Python
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
    question: What is database connectivity in Python?
    options:
      - Connecting to internet databases
      - Establishing a connection between Python and databases
      - Creating new databases using Python
      - Sending emails from Python to databases
    answer: 1
    explanation: Database connectivity refers to establishing a connection between Python and databases to perform operations.
    keyConcept: Database Connectivity With Python
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: Which module is commonly used for database connectivity in Python?
    options:
      - dbconnect
      - pydb
      - sqlite3
      - dbconnector
    answer: 2
    explanation: The sqlite3 module is widely used for database connectivity in Python, especially for SQLite databases.
    keyConcept: Database Connectivity With Python
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What is SQLite?
    options:
      - A type of programming language
      - A relational database management system
      - A Python module for web scraping
      - A version control system
    answer: 1
    explanation: SQLite is a lightweight, self-contained, serverless, and file-based relational database management system.
    keyConcept: Database Connectivity With Python
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: How can you create a new SQLite database using the sqlite3 module?
    options:
      - Using the create_database() function
      - By writing SQL queries
      - By calling the new_database() method
      - By executing the sqlite3.create() command
    answer: 1
    explanation: New SQLite databases are created by executing SQL queries to define tables and data structures.
    keyConcept: Database Connectivity With Python
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: What is a cursor in the context of database connectivity?
    options:
      - A pointer to a specific table
      - A tool for creating graphs
      - An object used to interact with the database
      - A graphical user interface element
    answer: 2
    explanation: A cursor is an object that allows you to interact with a database by executing SQL commands and fetching results.
    keyConcept: Database Connectivity With Python
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: How do you establish a connection to an SQLite database using sqlite3?
    options:
      - connect("database.db")
      - create_connection("database.db")
      - sqlite_connect("database.db")
      - open_connection("database.db")
    answer: 0
    explanation: The connect() function is used to establish a connection to an SQLite database.
    keyConcept: Database Connectivity With Python
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What is the purpose of the execute() method in the sqlite3 module?
    options:
      - To print messages to the console
      - To fetch data from a database
      - To execute SQL queries on a database
      - To create new tables in a database
    answer: 2
    explanation: The execute() method is used to execute SQL queries on an SQLite database.
    keyConcept: Database Connectivity With Python
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What is SQL injection?
    options:
      - A type of data visualization technique
      - A way to add colors to SQL databases
      - A technique to manipulate SQL databases
      - A security vulnerability when input is not properly sanitized
    answer: 3
    explanation: SQL injection is a security vulnerability where malicious code is inserted into SQL statements.
    keyConcept: Database Connectivity With Python
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: How do parameterized queries help prevent SQL injection?
    options:
      - By encrypting database queries
      - By removing SQL keywords
      - By sanitizing user input
      - By executing multiple queries at once
    answer: 2
    explanation: Parameterized queries separate user input from SQL code, reducing the risk of SQL injection.
    keyConcept: Database Connectivity With Python
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: Which of the following is NOT a common SQL database management system?
    options:
      - MySQL
      - PostgreSQL
      - MongoDB
      - SQLite
    answer: 2
    explanation: MongoDB is a NoSQL database management system, while the others are relational databases.
    keyConcept: Database Connectivity With Python
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: How can you fetch data from a result set obtained through an execute() command?
    options:
      - Using the get() method
      - By calling fetch()
      - By iterating through the result set
      - By using the fetch_data() function
    answer: 2
    explanation: Data from a result set is typically fetched by iterating through the result set using loops.
    keyConcept: Database Connectivity With Python
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: What does the commit() method do in the context of database transactions?
    options:
      - It creates a new database
      - It inserts new records into the database
      - It saves changes made during a transaction
      - It cancels a transaction
    answer: 2
    explanation: The commit() method saves the changes made during a database transaction.
    keyConcept: Database Connectivity With Python
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What is an ORM (Object-Relational Mapping) in database connectivity?
    options:
      - A way to create images from databases
      - A programming language for databases
      - A technique to map database tables to object-oriented classes
      - A tool for compressing database files
    answer: 2
    explanation: ORM is a technique that maps database tables to object-oriented programming classes, simplifying database interactions.
    keyConcept: Database Connectivity With Python
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: Which ORM library is popular for Python database connectivity?
    options:
      - SQLLink
      - ORMpy
      - SQLAlchemy
      - PyORM
    answer: 2
    explanation: SQLAlchemy is a widely used ORM library for Python, supporting various database management systems.
    keyConcept: Database Connectivity With Python
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: How do you define a class that maps to a database table using SQLAlchemy?
    options:
      - By subclassing the Database class
      - By using the @database_table decorator
      - By inheriting from the Base class and defining attributes
      - By using the map_table() function
    answer: 2
    explanation: In SQLAlchemy, you inherit from the Base class and define attributes to map a class to a database table.
    keyConcept: Database Connectivity With Python
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What is a primary key in a database table?
    options:
      - A key used to access the database
      - A unique identifier for each row
      - A password for the database
      - A column used for calculations
    answer: 1
    explanation: A primary key is a unique identifier for each row in a database table.
    keyConcept: Database Connectivity With Python
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What is the role of a foreign key in a relational database?
    options:
      - To prevent unauthorized access
      - To ensure data integrity and relationships
      - To index the database table
      - To encrypt data
    answer: 1
    explanation: A foreign key is used to establish relationships between tables, ensuring data integrity and referential integrity.
    keyConcept: Database Connectivity With Python
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: How can you update data in a database table using SQL?
    options:
      - Using the UPDATE statement
      - Using the MODIFY statement
      - Using the ALTER statement
      - Using the EDIT statement
    answer: 0
    explanation: The UPDATE statement is used to modify data in a database table.
    keyConcept: Database Connectivity With Python
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: What is the purpose of a stored procedure in a database?
    options:
      - To store data backups
      - To define data types
      - To encapsulate SQL code for reuse
      - To generate random data
    answer: 2
    explanation: A stored procedure is a precompiled collection of SQL statements that can be reused and executed in a database.
    keyConcept: Database Connectivity With Python
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: How do you execute a stored procedure from Python using the sqlite3 module?
    options:
      - Using the execute() method
      - Using the call() function
      - Using the run() method
      - Using the exec_procedure() function
    answer: 0
    explanation: You can execute a stored procedure using the execute() method from the sqlite3 module.
    keyConcept: Database Connectivity With Python
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: What is the purpose of database transactions?
    options:
      - To improve database performance
      - To create new databases
      - To manage data integrity and consistency
      - To encrypt database files
    answer: 2
    explanation: Database transactions ensure data integrity, consistency, and the ACID properties (Atomicity, Consistency, Isolation, Durability).
    keyConcept: Database Connectivity With Python
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: Which of the following is NOT an isolation level for database transactions?
    options:
      - READ UNCOMMITTED
      - READ COMMITTED
      - REPEATABLE READ
      - DATA UNCHANGED
    answer: 3
    explanation: "\"DATA UNCHANGED\" is not an isolation level; the correct option is typically \"SERIALIZABLE\"."
    keyConcept: Database Connectivity With Python
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: How can you rollback a transaction in the sqlite3 module?
    options:
      - Using the commit() method
      - Using the rollback() method
      - By closing the connection
      - By re-executing the transaction
    answer: 1
    explanation: The rollback() method is used to undo changes made during a transaction in the sqlite3 module.
    keyConcept: Database Connectivity With Python
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: What is the purpose of database normalization?
    options:
      - To reduce database size
      - To increase database speed
      - To organize data and eliminate redundancy
      - To enforce strict typing
    answer: 2
    explanation: Database normalization organizes data to eliminate redundancy, improve data integrity, and minimize anomalies.
    keyConcept: Database Connectivity With Python
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: What does the term "CRUD" stand for in the context of databases?
    options:
      - Create, Read, Update, Delete
      - Control, Remove, Update, Deliver
      - Copy, Read, Upload, Delete
      - Create, Retrieve, Upload, Deliver
    answer: 0
    explanation: Create, Read, Update, Delete is the correct answer to “What does the term "CRUD" stand for in the context of databases”. This question is standard in competitive examination syllabi for Database Connectivity With Python.
    keyConcept: Database Connectivity With Python
    testedIn:
      - FPSC
      - PPSC
---


