---
title: Managing Multiuser Databases MCQs with Explanations
description: Practice high-yield Computer Science & IT MCQs on Managing Multiuser Databases with worked academic solutions for PPSC, FPSC, CSS, PMS, NTS.
subject: computer-science
subjectName: Computer Science & IT
topic: managing-multiuser-databases
topicName: Managing Multiuser Databases
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
    question: A phantom read occurs when a transaction rereads data it has previously read and finds modifications or deletions caused by a committed transaction.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: Phantom read does not refer to modifications or deletions of existing rows. It occurs when a transaction reads a set of rows that satisfy a condition, and then, upon re-execution of the same query, finds additional rows (phantoms) that were inserted by another committed transaction. This is different from non-repeatable reads , where a transaction rereads data and finds that it has been modified or deleted by another transaction. Therefore, the statement given in the question describes a non-repeatable read , not a phantom read.
    keyConcept: Managing Multiuser Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 2
    question: Locks placed by command are called ________ .
    options:
      - implicit locks
      - explicit locks
      - exclusive locks
      - shared locks
    answer: 1
    explanation: explicit locks is the correct answer to “Locks placed by command are called ________ .”. This question is standard in competitive examination syllabi for Managing Multiuser Databases.
    keyConcept: Managing Multiuser Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 3
    question: Which of the following locks the item from change but not from read?
    options:
      - Implicit lock
      - Explicit lock
      - Exclusive lock
      - Shared lock
    answer: 3
    explanation: Shared lock is the correct answer to “Which of the following locks the item from change but not from read”. This question is standard in competitive examination syllabi for Managing Multiuser Databases.
    keyConcept: Managing Multiuser Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 4
    question: Which of the following occurs when a transaction rereads data and finds new rows that were inserted by a command transaction since the prior read?
    options:
      - Nonrepeatable read
      - Phantom read
      - Dirty read
      - Consistent read
    answer: 1
    explanation: Phantom read is the correct answer to “Which of the following occurs when a transaction rereads data and finds new rows that were inserted by a command transaction since the prior read”. This question is standard in competitive examination syllabi for Managing Multiuser Databases.
    keyConcept: Managing Multiuser Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: "A transaction for which all committed changes are permanent is called:"
    options:
      - atomic.
      - consistent.
      - isolated.
      - durable.
    answer: 3
    explanation: durable. is the correct answer to “A transaction for which all committed changes are permanent is called:”. This question is standard in competitive examination syllabi for Managing Multiuser Databases.
    keyConcept: Managing Multiuser Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: In this instance, dirty reads are disallowed, while nonrepeatable reads and phantom reads are allowed.
    options:
      - Read committed
      - Read uncommitted
      - Repeatable read
      - Serializable
    answer: 0
    explanation: Read committed is the correct answer to “In this instance, dirty reads are disallowed, while nonrepeatable reads and phantom reads are allowed.”. This question is standard in competitive examination syllabi for Managing Multiuser Databases.
    keyConcept: Managing Multiuser Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 7
    question: Which of the following occurs when a transaction rereads data it has previously read and finds modification or deletions caused by a committed transaction?
    options:
      - Nonrepeatable read
      - Phantom read
      - Dirty read
      - Consistent read
    answer: 0
    explanation: Nonrepeatable read is the correct answer to “Which of the following occurs when a transaction rereads data it has previously read and finds modification or deletions caused by a committed transaction”. This question is standard in competitive examination syllabi for Managing Multiuser Databases.
    keyConcept: Managing Multiuser Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 8
    question: "The advantage of optimistic locking is that:"
    options:
      - the lock is obtained only after the transaction has processed.
      - the lock is obtained before the transaction has processed.
      - the lock never needs to be obtained.
      - transactions that are best suited are those with a lot of activity.
    answer: 0
    explanation: the lock is obtained only after the transaction has processed. is the correct answer to “The advantage of optimistic locking is that:”. This question is standard in competitive examination syllabi for Managing Multiuser Databases.
    keyConcept: Managing Multiuser Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 9
    question: Which of the following refers to a cursor type that when the cursor is opened, a primary key value is saved for each row in the recordset; when the application accesses a row, the key is used to fetch the current values of the row?
    options:
      - Forward only
      - Static
      - Keyset
      - Dynamic
    answer: 2
    explanation: Keyset is the correct answer to “Which of the following refers to a cursor type that when the cursor is opened, a primary key value is saved for each row in the recordset; when the application accesses a row, the key is used to fetch the current values of the row”. This question is standard in competitive examination syllabi for Managing Multiuser Databases.
    keyConcept: Managing Multiuser Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 10
    question: Which of the following refers to a cursor type where changes of any type and from any source are visible?
    options:
      - Forward only
      - Static
      - Keyset
      - Dynamic
    answer: 3
    explanation: Dynamic is the correct answer to “Which of the following refers to a cursor type where changes of any type and from any source are visible”. This question is standard in competitive examination syllabi for Managing Multiuser Databases.
    keyConcept: Managing Multiuser Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 11
    question: Which of the following disallows both dirty reads and nonrepeatable reads, but allows phantom reads?
    options:
      - Read committed
      - Read uncommitted
      - Repeatable read
      - Serializable
    answer: 2
    explanation: Repeatable read is the correct answer to “Which of the following disallows both dirty reads and nonrepeatable reads, but allows phantom reads”. This question is standard in competitive examination syllabi for Managing Multiuser Databases.
    keyConcept: Managing Multiuser Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 12
    question: Dirty read, nonrepeatable, and phantom reads are not possible in this instance.
    options:
      - Read committed
      - Read uncommitted
      - Repeatable read
      - Serializable
    answer: 3
    explanation: Serializable is the correct answer to “Dirty read, nonrepeatable, and phantom reads are not possible in this instance.”. This question is standard in competitive examination syllabi for Managing Multiuser Databases.
    keyConcept: Managing Multiuser Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 13
    question: "A transaction in which either all of the database actions occur or none of them do is called:"
    options:
      - atomic.
      - consistent.
      - isolated.
      - durable.
    answer: 0
    explanation: atomic. is the correct answer to “A transaction in which either all of the database actions occur or none of them do is called:”. This question is standard in competitive examination syllabi for Managing Multiuser Databases.
    keyConcept: Managing Multiuser Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: "A cursor type in which the application can only move forward through the recordset is called:"
    options:
      - forward only.
      - static.
      - keyset.
      - dynamic.
    answer: 0
    explanation: forward only. is the correct answer to “A cursor type in which the application can only move forward through the recordset is called:”. This question is standard in competitive examination syllabi for Managing Multiuser Databases.
    keyConcept: Managing Multiuser Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 15
    question: Which of the following occurs when one transaction reads a changed record that has not been committed to the database?
    options:
      - Nonrepeatable read
      - Phantom read
      - Dirty read
      - Consistent read
    answer: 2
    explanation: Dirty read is the correct answer to “Which of the following occurs when one transaction reads a changed record that has not been committed to the database”. This question is standard in competitive examination syllabi for Managing Multiuser Databases.
    keyConcept: Managing Multiuser Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 16
    question: Which of the following allows dirty reads, nonrepeatable reads and phantom reads to occur?
    options:
      - Read committed
      - Read uncommitted
      - Repeatable read
      - Serializable
    answer: 1
    explanation: Read uncommitted is the correct answer to “Which of the following allows dirty reads, nonrepeatable reads and phantom reads to occur”. This question is standard in competitive examination syllabi for Managing Multiuser Databases.
    keyConcept: Managing Multiuser Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 17
    question: Which of the following locks the item from access of any type?
    options:
      - Implicit lock
      - Explicit lock
      - Exclusive lock
      - Shared lock
    answer: 2
    explanation: Exclusive lock is the correct answer to “Which of the following locks the item from access of any type”. This question is standard in competitive examination syllabi for Managing Multiuser Databases.
    keyConcept: Managing Multiuser Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 18
    question: "The size of a lock is called:"
    options:
      - implicit lock
      - lock granularity
      - exclusive lock
      - shared lock
    answer: 1
    explanation: lock granularity is the correct answer to “The size of a lock is called:”. This question is standard in competitive examination syllabi for Managing Multiuser Databases.
    keyConcept: Managing Multiuser Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 19
    question: "A cursor type in which the application sees the data as they were at the time the cursor was opened is called:"
    options:
      - forward only
      - static
      - keyset
      - dynamic
    answer: 1
    explanation: static is the correct answer to “A cursor type in which the application sees the data as they were at the time the cursor was opened is called:”. This question is standard in competitive examination syllabi for Managing Multiuser Databases.
    keyConcept: Managing Multiuser Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 20
    question: What is the overall responsibility of the DBA?
    options:
      - Facilitate the development and use of the database
      - Create and populate tables
      - Development, operation, and maintenance of the database and its applications
      - Both the first and third answers above are correct.
    answer: 3
    explanation: Both the first and third answers above are correct. is the correct answer to “What is the overall responsibility of the DBA”. This question is standard in competitive examination syllabi for Managing Multiuser Databases.
    keyConcept: Managing Multiuser Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 21
    question: Locks placed by the DBMS are called ________ .
    options:
      - implicit locks
      - explicit locks
      - exclusive locks
      - shared locks
    answer: 0
    explanation: implicit locks is the correct answer to “Locks placed by the DBMS are called ________ .”. This question is standard in competitive examination syllabi for Managing Multiuser Databases.
    keyConcept: Managing Multiuser Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 22
    question: Resource locking is a process to prevent multiple applications from obtaining copies of the same record when the record is about to be changed.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “Resource locking is a process to prevent multiple applications from obtaining copies of the same record when the record is about to be changed.”. This question is standard in competitive examination syllabi for Managing Multiuser Databases.
    keyConcept: Managing Multiuser Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 23
    question: The overall responsibility of the DBA is to facilitate the development and use of the database.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “The overall responsibility of the DBA is to facilitate the development and use of the database.”. This question is standard in competitive examination syllabi for Managing Multiuser Databases.
    keyConcept: Managing Multiuser Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 24
    question: The size of the lock is referred to as the lock granularity.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “The size of the lock is referred to as the lock granularity.”. This question is standard in competitive examination syllabi for Managing Multiuser Databases.
    keyConcept: Managing Multiuser Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 25
    question: A durable transaction is one in which all committed changes are permanent.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “A durable transaction is one in which all committed changes are permanent.”. This question is standard in competitive examination syllabi for Managing Multiuser Databases.
    keyConcept: Managing Multiuser Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 26
    question: An ACID transaction is one that is atomic, consistent isolated, and durable.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “An ACID transaction is one that is atomic, consistent isolated, and durable.”. This question is standard in competitive examination syllabi for Managing Multiuser Databases.
    keyConcept: Managing Multiuser Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 27
    question: When one transaction reads a changed record that has not been committed to the database a filthy read occurs.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “When one transaction reads a changed record that has not been committed to the database a filthy read occurs.”. This question is standard in competitive examination syllabi for Managing Multiuser Databases.
    keyConcept: Managing Multiuser Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 28
    question: The size of a lock is referred to as lock sizing.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “The size of a lock is referred to as lock sizing.”. This question is standard in competitive examination syllabi for Managing Multiuser Databases.
    keyConcept: Managing Multiuser Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 29
    question: When two transactions are being processed against the database at the same time they are termed concurrent transactions.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “When two transactions are being processed against the database at the same time they are termed concurrent transactions.”. This question is standard in competitive examination syllabi for Managing Multiuser Databases.
    keyConcept: Managing Multiuser Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 30
    question: Locks placed by the DBMS are explicit locks.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “Locks placed by the DBMS are explicit locks.”. This question is standard in competitive examination syllabi for Managing Multiuser Databases.
    keyConcept: Managing Multiuser Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 31
    question: In optimistic locking, the assumption is made that conflict will occur.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “In optimistic locking, the assumption is made that conflict will occur.”. This question is standard in competitive examination syllabi for Managing Multiuser Databases.
    keyConcept: Managing Multiuser Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 32
    question: Two transactions that run concurrently and generate results that are consistent with the results that would have occurred if they had run separately are referred to as serializable transactions.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “Two transactions that run concurrently and generate results that are consistent with the results that would have occurred if they had run separately are referred to as serializable transactions.”. This question is standard in competitive examination syllabi for Managing Multiuser Databases.
    keyConcept: Managing Multiuser Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 33
    question: The lost update problem is when User A reads data that have been processed by a portion of a transaction from User B.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “The lost update problem is when User A reads data that have been processed by a portion of a transaction from User B.”. This question is standard in competitive examination syllabi for Managing Multiuser Databases.
    keyConcept: Managing Multiuser Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 34
    question: The transaction log contains a copy of every database record (or page) after it has changed. These records are called before images.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “The transaction log contains a copy of every database record (or page) after it has changed. These records are called before images.”. This question is standard in competitive examination syllabi for Managing Multiuser Databases.
    keyConcept: Managing Multiuser Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 35
    question: Database administration refers to a function that applies to the entire organization.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “Database administration refers to a function that applies to the entire organization.”. This question is standard in competitive examination syllabi for Managing Multiuser Databases.
    keyConcept: Managing Multiuser Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 36
    question: Locks placed by command are implicit locks.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “Locks placed by command are implicit locks.”. This question is standard in competitive examination syllabi for Managing Multiuser Databases.
    keyConcept: Managing Multiuser Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 37
    question: The goal of database security is to ensure that only authorized users can perform authorized activities at authorized times.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “The goal of database security is to ensure that only authorized users can perform authorized activities at authorized times.”. This question is standard in competitive examination syllabi for Managing Multiuser Databases.
    keyConcept: Managing Multiuser Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 38
    question: A transaction is a series of actions to be taken on the database so that either all of them are performed successfully or none of them are performed at all.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “A transaction is a series of actions to be taken on the database so that either all of them are performed successfully or none of them are performed at all.”. This question is standard in competitive examination syllabi for Managing Multiuser Databases.
    keyConcept: Managing Multiuser Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 39
    question: A point of synchronization between the database and the transaction log is generally referred to as a stop point.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “A point of synchronization between the database and the transaction log is generally referred to as a stop point.”. This question is standard in competitive examination syllabi for Managing Multiuser Databases.
    keyConcept: Managing Multiuser Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 40
    question: An exclusive lock locks the item from change but not from read.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “An exclusive lock locks the item from change but not from read.”. This question is standard in competitive examination syllabi for Managing Multiuser Databases.
    keyConcept: Managing Multiuser Databases
    testedIn:
      - PPSC
      - FPSC
---


