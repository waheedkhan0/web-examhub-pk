---
title: Sql Server 2000 MCQs with Explanations
description: Practice high-yield Computer Science & IT MCQs on Sql Server 2000 with worked academic solutions for PPSC, FPSC, CSS, PMS, NTS.
subject: computer-science
subjectName: Computer Science & IT
topic: sql-server-2000
topicName: Sql Server 2000
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
    question: "SQL Server supports three recovery modes: simple, full and Bulk."
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "SQL Server provides three different recovery models that allow you to specify the way SQL Server manages log files and prepares your enterprise for a disaster. Each of these models represents a different approach to balancing the tradeoff between conserving disk space and providing for granular disaster recovery options. The three disaster recovery models offered by SQL Server are: 1. Simple Recovery Model 2. Full Recovery Model 3. Bulk-logged Recovery Model"
    keyConcept: Sql Server 2000
    testedIn:
      - PPSC
      - FPSC
  - id: 2
    question: With which type of SQL Server recovery model are all database changes logged except those that cause large log entries?
    options:
      - Differential recovery
      - Full recovery
      - Simple recovery
      - Bulk-logged recovery
    answer: 3
    explanation: Bulk-logged recovery is the correct answer to “With which type of SQL Server recovery model are all database changes logged except those that cause large log entries”. This question is standard in competitive examination syllabi for Sql Server 2000.
    keyConcept: Sql Server 2000
    testedIn:
      - PPSC
      - FPSC
  - id: 3
    question: Using SQL Server 2000, which of the following symbols is used to indicate parameters in stored procedures?
    options:
      - "#"
      - "%"
      - "&"
      - "@"
    answer: 3
    explanation: "@ is the correct answer to “Using SQL Server 2000, which of the following symbols is used to indicate parameters in stored procedures”. This question is standard in competitive examination syllabi for Sql Server 2000."
    keyConcept: Sql Server 2000
    testedIn:
      - PPSC
      - FPSC
  - id: 4
    question: What mode of authentication does SQL Server NOT provide?
    options:
      - Windows-only security
      - Both SQL Server and Windows-only security
      - Mixed security
      - SQL Server only security
    answer: 3
    explanation: SQL Server only security is the correct answer to “What mode of authentication does SQL Server NOT provide”. This question is standard in competitive examination syllabi for Sql Server 2000.
    keyConcept: Sql Server 2000
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: "The strictest transaction isolation level provided by SQL Server is called:"
    options:
      - REPEATABLE READ
      - SERIALIZABLE
      - READ COMMITTED
      - READ UNCOMMITTED
    answer: 1
    explanation: SERIALIZABLE is the correct answer to “The strictest transaction isolation level provided by SQL Server is called:”. This question is standard in competitive examination syllabi for Sql Server 2000.
    keyConcept: Sql Server 2000
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: "SQL Server program code that is executed instead of an SQL command that needs to be processed is called a(n):"
    options:
      - INSTEAD OF trigger
      - BEFORE trigger
      - AFTER trigger
      - BEGIN trigger
    answer: 0
    explanation: INSTEAD OF trigger is the correct answer to “SQL Server program code that is executed instead of an SQL command that needs to be processed is called a(n):”. This question is standard in competitive examination syllabi for Sql Server 2000.
    keyConcept: Sql Server 2000
    testedIn:
      - PPSC
      - FPSC
  - id: 7
    question: Which type of SQL Server cursor concurrency places an update lock on a row when the row is read?
    options:
      - READ_ONLY
      - SCROLL_LOCK
      - OPTIMISTIC
      - READCOMMITTED
    answer: 3
    explanation: READCOMMITTED is the correct answer to “Which type of SQL Server cursor concurrency places an update lock on a row when the row is read”. This question is standard in competitive examination syllabi for Sql Server 2000.
    keyConcept: Sql Server 2000
    testedIn:
      - PPSC
      - FPSC
  - id: 8
    question: Which of the three possible types of triggers does SQL Server support?
    options:
      - INSTEAD OF only
      - AFTER only
      - BEFORE only
      - INSTEAD OF and AFTER only
    answer: 3
    explanation: INSTEAD OF and AFTER only is the correct answer to “Which of the three possible types of triggers does SQL Server support”. This question is standard in competitive examination syllabi for Sql Server 2000.
    keyConcept: Sql Server 2000
    testedIn:
      - PPSC
      - FPSC
  - id: 9
    question: Which of the following is a way to create and modify tables using SQL Server?
    options:
      - Write SQL code using either CREATE or ALTER SQL statements only
      - Use the graphical facilities of SQL Server Enterprise Manager only
      - Both of the two methods above will work
      - Neither of the two methods above will work
    answer: 2
    explanation: Both of the two methods above will work is the correct answer to “Which of the following is a way to create and modify tables using SQL Server”. This question is standard in competitive examination syllabi for Sql Server 2000.
    keyConcept: Sql Server 2000
    testedIn:
      - PPSC
      - FPSC
  - id: 10
    question: With which type of SQL Server recovery model, is no logging done?
    options:
      - Differential recovery
      - Full recovery
      - Bulk-logged recovery
      - Simple recovery
    answer: 3
    explanation: Simple recovery is the correct answer to “With which type of SQL Server recovery model, is no logging done”. This question is standard in competitive examination syllabi for Sql Server 2000.
    keyConcept: Sql Server 2000
    testedIn:
      - PPSC
      - FPSC
  - id: 11
    question: "SQL Server 2000 stored procedures can:"
    options:
      - never be kept within the database
      - be kept within the database and invoked by application programs
      - be stored on the users' computer
      - support BEFORE, INSTEAD OF and AFTER types
    answer: 1
    explanation: be kept within the database and invoked by application programs is the correct answer to “SQL Server 2000 stored procedures can:”. This question is standard in competitive examination syllabi for Sql Server 2000.
    keyConcept: Sql Server 2000
    testedIn:
      - PPSC
      - FPSC
  - id: 12
    question: With this type of SQL Server cursor concurrency no lock is obtained until the user updates the data.
    options:
      - READ_ONLY
      - SCROLL_LOCK
      - OPTIMISTIC
      - PESSIMISTIC
    answer: 2
    explanation: OPTIMISTIC is the correct answer to “With this type of SQL Server cursor concurrency no lock is obtained until the user updates the data.”. This question is standard in competitive examination syllabi for Sql Server 2000.
    keyConcept: Sql Server 2000
    testedIn:
      - PPSC
      - FPSC
  - id: 13
    question: "An SQL Server 2000 language that adds programming elements like parameters, variables, IF, WHILE loops, and so forth, to the basic capabilities of SQL is called:"
    options:
      - COBOL
      - VB.NET
      - TRANSACT SQL
      - Visual Basic
    answer: 2
    explanation: TRANSACT SQL is the correct answer to “An SQL Server 2000 language that adds programming elements like parameters, variables, IF, WHILE loops, and so forth, to the basic capabilities of SQL is called:”. This question is standard in competitive examination syllabi for Sql Server 2000.
    keyConcept: Sql Server 2000
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: With this type of index, the data are stored in the bottom level of the index and in the same order as that index.
    options:
      - Nonclustered
      - Clustered
      - Primary
      - Secondary
    answer: 1
    explanation: Clustered is the correct answer to “With this type of index, the data are stored in the bottom level of the index and in the same order as that index.”. This question is standard in competitive examination syllabi for Sql Server 2000.
    keyConcept: Sql Server 2000
    testedIn:
      - PPSC
      - FPSC
  - id: 15
    question: In SQL Server 2000, which of the following makes a copy of the changes that have been made to the database since the last complete backup?
    options:
      - Complete backup
      - Transaction Log
      - Differential backup
      - None of the above is correct
    answer: 2
    explanation: Differential backup is the correct answer to “In SQL Server 2000, which of the following makes a copy of the changes that have been made to the database since the last complete backup”. This question is standard in competitive examination syllabi for Sql Server 2000.
    keyConcept: Sql Server 2000
    testedIn:
      - PPSC
      - FPSC
  - id: 16
    question: With this type of index, the bottom level of an index does not contain data, but rather it contains pointers to data.
    options:
      - Nonclustered
      - Clustered
      - Primary
      - Secondary
    answer: 0
    explanation: Nonclustered is the correct answer to “With this type of index, the bottom level of an index does not contain data, but rather it contains pointers to data.”. This question is standard in competitive examination syllabi for Sql Server 2000.
    keyConcept: Sql Server 2000
    testedIn:
      - PPSC
      - FPSC
  - id: 17
    question: With which type of SQL Server recovery model are all database changes logged?
    options:
      - Differential recovery
      - Full recovery
      - Simple recovery
      - Bulk-logged recovery
    answer: 1
    explanation: Full recovery is the correct answer to “With which type of SQL Server recovery model are all database changes logged”. This question is standard in competitive examination syllabi for Sql Server 2000.
    keyConcept: Sql Server 2000
    testedIn:
      - PPSC
      - FPSC
  - id: 18
    question: "SQL Server automatically creates an index on:"
    options:
      - primary keys only
      - foreign key only
      - both primary and foreign keys
      - SQL Server never automatically creates an index
    answer: 2
    explanation: both primary and foreign keys is the correct answer to “SQL Server automatically creates an index on:”. This question is standard in competitive examination syllabi for Sql Server 2000.
    keyConcept: Sql Server 2000
    testedIn:
      - PPSC
      - FPSC
  - id: 19
    question: Which of the following is not a factor in determining the concurrency control behavior of SQL Server?
    options:
      - Lock level
      - Transaction isolation level
      - Cursor concurrency setting
      - Locking hints
    answer: 0
    explanation: Lock level is the correct answer to “Which of the following is not a factor in determining the concurrency control behavior of SQL Server”. This question is standard in competitive examination syllabi for Sql Server 2000.
    keyConcept: Sql Server 2000
    testedIn:
      - PPSC
      - FPSC
  - id: 20
    question: "SQL Server program code that is executed after an SQL command has been processed is called a(n):"
    options:
      - INSTEAD OF trigger
      - BEFORE trigger
      - AFTER trigger
      - BEGIN trigger
    answer: 2
    explanation: AFTER trigger is the correct answer to “SQL Server program code that is executed after an SQL command has been processed is called a(n):”. This question is standard in competitive examination syllabi for Sql Server 2000.
    keyConcept: Sql Server 2000
    testedIn:
      - PPSC
      - FPSC
  - id: 21
    question: Which of the following refers to the SQL Server transaction isolation level which places and holds locks on all rows that are read?
    options:
      - REPEATABLE READ
      - SERIALIZABLE
      - READ COMMITTED
      - READ UNCOMMITTED
    answer: 0
    explanation: REPEATABLE READ is the correct answer to “Which of the following refers to the SQL Server transaction isolation level which places and holds locks on all rows that are read”. This question is standard in competitive examination syllabi for Sql Server 2000.
    keyConcept: Sql Server 2000
    testedIn:
      - PPSC
      - FPSC
  - id: 22
    question: There is only one way to create and modify tables in SQL Server. Write SQL code using either the CREATE or ALTER statements.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “There is only one way to create and modify tables in SQL Server. Write SQL code using either the CREATE or ALTER statements.”. This question is standard in competitive examination syllabi for Sql Server 2000.
    keyConcept: Sql Server 2000
    testedIn:
      - PPSC
      - FPSC
  - id: 23
    question: SQL Server automatically creates an index on all primary and foreign keys.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “SQL Server automatically creates an index on all primary and foreign keys.”. This question is standard in competitive examination syllabi for Sql Server 2000.
    keyConcept: Sql Server 2000
    testedIn:
      - PPSC
      - FPSC
  - id: 24
    question: An SQL Server reserved word must be placed in brackets. If the word is not in brackets, SQL Server will try to interpret it as the name of one of its special words.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “An SQL Server reserved word must be placed in brackets. If the word is not in brackets, SQL Server will try to interpret it as the name of one of its special words.”. This question is standard in competitive examination syllabi for Sql Server 2000.
    keyConcept: Sql Server 2000
    testedIn:
      - PPSC
      - FPSC
  - id: 25
    question: With SQL Server, parameters and variables in T-SQL start with the "%" sign.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “With SQL Server, parameters and variables in T-SQL start with the "%" sign.”. This question is standard in competitive examination syllabi for Sql Server 2000.
    keyConcept: Sql Server 2000
    testedIn:
      - PPSC
      - FPSC
  - id: 26
    question: Nonclustered indexes are faster than clustered indexes for retrieval.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “Nonclustered indexes are faster than clustered indexes for retrieval.”. This question is standard in competitive examination syllabi for Sql Server 2000.
    keyConcept: Sql Server 2000
    testedIn:
      - PPSC
      - FPSC
  - id: 27
    question: SQL Server supports INSTEAD OF, AFTER and BEFORE triggers.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “SQL Server supports INSTEAD OF, AFTER and BEFORE triggers.”. This question is standard in competitive examination syllabi for Sql Server 2000.
    keyConcept: Sql Server 2000
    testedIn:
      - PPSC
      - FPSC
  - id: 28
    question: "SQL Server supports two kinds of indexes: clustered and nonclustered."
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "True is the correct answer to “SQL Server supports two kinds of indexes: clustered and nonclustered.”. This question is standard in competitive examination syllabi for Sql Server 2000."
    keyConcept: Sql Server 2000
    testedIn:
      - PPSC
      - FPSC
  - id: 29
    question: SQL Server indexes are special data structures used to improve performance.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “SQL Server indexes are special data structures used to improve performance.”. This question is standard in competitive examination syllabi for Sql Server 2000.
    keyConcept: Sql Server 2000
    testedIn:
      - PPSC
      - FPSC
  - id: 30
    question: SQL Server supports a language called Transact-SQL (also called T-SQL).
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “SQL Server supports a language called Transact-SQL (also called T-SQL).”. This question is standard in competitive examination syllabi for Sql Server 2000.
    keyConcept: Sql Server 2000
    testedIn:
      - PPSC
      - FPSC
  - id: 31
    question: The .NET languages are the most popular languages for writing stored procedures in SQL Server 2000.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “The .NET languages are the most popular languages for writing stored procedures in SQL Server 2000.”. This question is standard in competitive examination syllabi for Sql Server 2000.
    keyConcept: Sql Server 2000
    testedIn:
      - PPSC
      - FPSC
  - id: 32
    question: READ COMMITTED is the default isolation level.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “READ COMMITTED is the default isolation level.”. This question is standard in competitive examination syllabi for Sql Server 2000.
    keyConcept: Sql Server 2000
    testedIn:
      - PPSC
      - FPSC
  - id: 33
    question: A differential backup makes a copy of the entire database.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “A differential backup makes a copy of the entire database.”. This question is standard in competitive examination syllabi for Sql Server 2000.
    keyConcept: Sql Server 2000
    testedIn:
      - PPSC
      - FPSC
  - id: 34
    question: SERIALIZABLE is the strictest isolation level.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “SERIALIZABLE is the strictest isolation level.”. This question is standard in competitive examination syllabi for Sql Server 2000.
    keyConcept: Sql Server 2000
    testedIn:
      - PPSC
      - FPSC
  - id: 35
    question: With SQL Server pessimistic locking, no lock is obtained until the user updates the data.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “With SQL Server pessimistic locking, no lock is obtained until the user updates the data.”. This question is standard in competitive examination syllabi for Sql Server 2000.
    keyConcept: Sql Server 2000
    testedIn:
      - PPSC
      - FPSC
  - id: 36
    question: Better security occurs if Windows-only authentication is selected.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “Better security occurs if Windows-only authentication is selected.”. This question is standard in competitive examination syllabi for Sql Server 2000.
    keyConcept: Sql Server 2000
    testedIn:
      - PPSC
      - FPSC
  - id: 37
    question: SQL Server AFTER Triggers may be assigned views.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “SQL Server AFTER Triggers may be assigned views.”. This question is standard in competitive examination syllabi for Sql Server 2000.
    keyConcept: Sql Server 2000
    testedIn:
      - PPSC
      - FPSC
  - id: 38
    question: "'dbo' stands for database object."
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “'dbo' stands for database object.”. This question is standard in competitive examination syllabi for Sql Server 2000.
    keyConcept: Sql Server 2000
    testedIn:
      - PPSC
      - FPSC
  - id: 39
    question: With SQL Server optimistic locking, an update lock is placed on the row when the row is read.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “With SQL Server optimistic locking, an update lock is placed on the row when the row is read.”. This question is standard in competitive examination syllabi for Sql Server 2000.
    keyConcept: Sql Server 2000
    testedIn:
      - PPSC
      - FPSC
  - id: 40
    question: By default, SQL Server will create one data file and one log file for each newly created database.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “By default, SQL Server will create one data file and one log file for each newly created database.”. This question is standard in competitive examination syllabi for Sql Server 2000.
    keyConcept: Sql Server 2000
    testedIn:
      - PPSC
      - FPSC
---


