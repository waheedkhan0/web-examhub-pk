---
title: Database Systems — Part 1 MCQs with Explanations
description: Practice high-yield Computer Science & IT MCQs on Database Systems — Part 1 with worked academic solutions for PPSC, FPSC, CSS, PMS, NTS.
subject: computer-science
subjectName: Computer Science & IT
topic: database-systems-part-1
topicName: Database Systems — Part 1
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
    question: The PROJECT command will create new table that has
    options:
      - more fields than the original table
      - more rows than the original table
      - both (a) and (b)
      - all the fields of master table
      - None of the above
    answer: 4
    explanation: "The PROJECT command is like taking that big table and saying: \"I only want to see these specific columns (fields) from it.\" It creates a BRAND NEW TABLE that only contains the columns you asked for. Let's look at the options: Option A: more fields than the original table This is INCORRECT . When you use PROJECT, you are *selecting* fields that already exist. You can choose to see *fewer* fields or *all* fields from the original table, but you can never magically create *new* fields that weren't there before. So, it will never have *more* fields. Option B: more rows than the original table This is also INCORRECT . The PROJECT command focuses on which *columns* you see. It doesn't add new entries (rows) to your table. In fact, if selecting fewer columns makes some rows look exactly the same, the PROJECT command usually removes those duplicate rows. This means the new table might even have *fewer* rows, but never *more*. Option C: both (a) and (b) Since both (a) and (b) are incorrect, this option is also INCORRECT . Option D: all the fields of master table This is partially true in a specific scenario, but it's NOT generally what PROJECT does or its defining characteristic. You *can* use PROJECT to select *all* fields from the original table, but its main purpose is to let you pick a *subset* of fields. If you always wanted all fields, you wouldn't need a special command to \"project\" them; you'd just use a simple selection of everything. The command's flexibility means it *can* select all, but it doesn't *always* do so, and it doesn't *have* to. It's about *choosing* fields. Option E: None of the above This is the CORRECT answer. The PROJECT command creates a new table that has: * Fewer or the same number of fields as the original table (never more). * Fewer or the same number of rows as the original table (never more, due to duplicate removal). So, none of the options A, B, or D accurately describe the general outcome of the PROJECT command."
    keyConcept: Database Systems
    testedIn:
      - PPSC
      - FPSC
  - id: 2
    question: "The data-base environment has all of the following components except:"
    options:
      - users
      - separate files
      - data base
      - data-base administrator
      - None of the above
    answer: 1
    explanation: "In a database environment, the components typically include: Users: Individuals who interact with the database to perform operations like querying and updating data. Database: The structured collection of data that is managed and organized for efficient retrieval and manipulation. Database Administrator: The person responsible for managing and maintaining the database system, ensuring its performance, security, and availability. Separate Files: This is not considered a component of a modern database environment. Databases are designed to manage data within a centralized system rather than relying on multiple separate files. Thus, Option B: separate files is the correct answer as it does not fit into the standard components of a database environment."
    keyConcept: Database Systems
    testedIn:
      - PPSC
      - FPSC
  - id: 3
    question: A logical schema
    options:
      - is the entire database
      - is a standard way of organizing information into accessible parts
      - describes how data is actually stored on disk
      - All of the above
      - None of the above
    answer: 1
    explanation: "A logical schema is a representation of the structure of a database in terms of how data is organized and related. It focuses on the design and organization of data elements and their relationships, abstracted from the physical storage. Logical Schema Definition: The logical schema defines how data is organized into tables , their attributes, and the relationships among them. It is concerned with the design and structure of the database as seen by users and applications, without regard to how the data is physically stored. Option A: Entire Database This describes the physical schema or the entire database, not the logical schema. Option C: Describes How Data is Actually Stored This refers to the physical schema , which deals with the actual storage of data on disk. Option D: All of the Above Since options A and C describe different aspects (physical schema) and are not part of the logical schema, this option is incorrect. Option E: None of the Above Since option B correctly describes the logical schema, this option is not applicable. Therefore, the correct answer is Option B: is a standard way of organizing information into accessible parts ."
    keyConcept: Database Systems
    testedIn:
      - PPSC
      - FPSC
  - id: 4
    question: A report generator is used to
    options:
      - update files
      - print files on paper
      - data entry
      - All of the above
      - None of the above
    answer: 1
    explanation: print files on paper is the correct answer to “A report generator is used to”. This question is standard in competitive examination syllabi for Database Systems.
    keyConcept: Database Systems
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: Which of the following is not a logical data-base structure?
    options:
      - tree
      - relational
      - network
      - chain
      - All of the above
    answer: 3
    explanation: chain is the correct answer to “Which of the following is not a logical data-base structure”. This question is standard in competitive examination syllabi for Database Systems.
    keyConcept: Database Systems
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: Which of the following is a database administrator's function?
    options:
      - database design
      - backing up the database
      - performance monitoring
      - user coordination
      - All of the above
    answer: 4
    explanation: All of the above is the correct answer to “Which of the following is a database administrator's function”. This question is standard in competitive examination syllabi for Database Systems.
    keyConcept: Database Systems
    testedIn:
      - PPSC
      - FPSC
  - id: 7
    question: Primitive operations common to all record management systems include
    options:
      - Print
      - Sort
      - Look-up
      - All of the above
      - None of the above
    answer: 2
    explanation: Look-up is the correct answer to “Primitive operations common to all record management systems include”. This question is standard in competitive examination syllabi for Database Systems.
    keyConcept: Database Systems
    testedIn:
      - PPSC
      - FPSC
  - id: 8
    question: Each of data files has a _____ that describe the way the data is stored in the file.
    options:
      - File structure
      - Records
      - Fields
      - Database
      - None of the above
    answer: 0
    explanation: File structure is the correct answer to “Each of data files has a _____ that describe the way the data is stored in the file.”. This question is standard in competitive examination syllabi for Database Systems.
    keyConcept: Database Systems
    testedIn:
      - PPSC
      - FPSC
  - id: 9
    question: After you _____ a record, many data management the environments require you to issue a command to save the changes you made.
    options:
      - Delete
      - Update
      - Sort key
      - Index
      - None of the above
    answer: 1
    explanation: Update is the correct answer to “After you _____ a record, many data management the environments require you to issue a command to save the changes you made.”. This question is standard in competitive examination syllabi for Database Systems.
    keyConcept: Database Systems
    testedIn:
      - PPSC
      - FPSC
  - id: 10
    question: What is the language used by most of the DBMSs for helping their users to access data?
    options:
      - High level language
      - Query language
      - SQL
      - 4GL
      - None of the above
    answer: 1
    explanation: Query language is the correct answer to “What is the language used by most of the DBMSs for helping their users to access data”. This question is standard in competitive examination syllabi for Database Systems.
    keyConcept: Database Systems
    testedIn:
      - PPSC
      - FPSC
  - id: 11
    question: Data item characteristics that are important in data management include
    options:
      - punctuation
      - language
      - spelling
      - width
      - None of the above
    answer: 3
    explanation: width is the correct answer to “Data item characteristics that are important in data management include”. This question is standard in competitive examination syllabi for Database Systems.
    keyConcept: Database Systems
    testedIn:
      - PPSC
      - FPSC
  - id: 12
    question: In SQL, which command is used to make permanent changes made by statements issue since the beginning of a transaction?
    options:
      - ZIP
      - PACK
      - COMMIT
      - SAVE
      - None of the above
    answer: 2
    explanation: COMMIT is the correct answer to “In SQL, which command is used to make permanent changes made by statements issue since the beginning of a transaction”. This question is standard in competitive examination syllabi for Database Systems.
    keyConcept: Database Systems
    testedIn:
      - PPSC
      - FPSC
  - id: 13
    question: Periodically adding, changing and deleting file records is called file
    options:
      - Updating
      - upgrading
      - restructuring
      - renewing
      - None of the above
    answer: 0
    explanation: Updating is the correct answer to “Periodically adding, changing and deleting file records is called file”. This question is standard in competitive examination syllabi for Database Systems.
    keyConcept: Database Systems
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: Sort/report generators
    options:
      - are faster than index/report generators
      - require more disk space than index/report generators
      - do not need to sort before generating a report
      - both (a) and (b)
      - None of the above
    answer: 1
    explanation: require more disk space than index/report generators is the correct answer to “Sort/report generators”. This question is standard in competitive examination syllabi for Database Systems.
    keyConcept: Database Systems
    testedIn:
      - PPSC
      - FPSC
  - id: 15
    question: The data dictionary tells the DBMS
    options:
      - what files are in the database
      - what attribute are possessed by the data
      - what these files contain
      - All of the above
      - None of the above
    answer: 3
    explanation: All of the above is the correct answer to “The data dictionary tells the DBMS”. This question is standard in competitive examination syllabi for Database Systems.
    keyConcept: Database Systems
    testedIn:
      - PPSC
      - FPSC
  - id: 16
    question: In SQL, which command(s) is(are) used to enable/disable a database trigger?
    options:
      - MODIFY USER
      - CHANGE USER
      - ALTER TRIGGER
      - All of the above
      - None of the above
    answer: 2
    explanation: ALTER TRIGGER is the correct answer to “In SQL, which command(s) is(are) used to enable/disable a database trigger”. This question is standard in competitive examination syllabi for Database Systems.
    keyConcept: Database Systems
    testedIn:
      - PPSC
      - FPSC
  - id: 17
    question: If the record management system allows you to edit values before they are recorded on disk, you can
    options:
      - correct spelling changes before they are recorded
      - change the name of a field
      - change the width of a field
      - All of the above
      - None of the above
    answer: 0
    explanation: correct spelling changes before they are recorded is the correct answer to “If the record management system allows you to edit values before they are recorded on disk, you can”. This question is standard in competitive examination syllabi for Database Systems.
    keyConcept: Database Systems
    testedIn:
      - PPSC
      - FPSC
  - id: 18
    question: "The relational model uses some unfamiliar terminology. A tuple is equivalent to a:"
    options:
      - record
      - field
      - file
      - data base
      - data item
    answer: 0
    explanation: record is the correct answer to “The relational model uses some unfamiliar terminology. A tuple is equivalent to a:”. This question is standard in competitive examination syllabi for Database Systems.
    keyConcept: Database Systems
    testedIn:
      - PPSC
      - FPSC
  - id: 19
    question: The files stored on a secondary stage device are composed of a hierarchy of data. What does a record in a file contain?
    options:
      - Bits
      - Characters
      - Data field
      - Schema
      - None of the above
    answer: 2
    explanation: Data field is the correct answer to “The files stored on a secondary stage device are composed of a hierarchy of data. What does a record in a file contain”. This question is standard in competitive examination syllabi for Database Systems.
    keyConcept: Database Systems
    testedIn:
      - PPSC
      - FPSC
  - id: 20
    question: Which command is used to remove an index from the database in SQL?
    options:
      - DELETE INDEX
      - DROP INDEX
      - REMOVE INDEX
      - ROLL BACK INDEX
      - None of the above
    answer: 1
    explanation: DROP INDEX is the correct answer to “Which command is used to remove an index from the database in SQL”. This question is standard in competitive examination syllabi for Database Systems.
    keyConcept: Database Systems
    testedIn:
      - PPSC
      - FPSC
  - id: 21
    question: An-owner-member set in the CODASYL specifications may have
    options:
      - only one owner but many owner occurrences
      - only one member but many member occurrence
      - more than one member but only one occurrence per member
      - All of the above
      - None of the above
    answer: 0
    explanation: only one owner but many owner occurrences is the correct answer to “An-owner-member set in the CODASYL specifications may have”. This question is standard in competitive examination syllabi for Database Systems.
    keyConcept: Database Systems
    testedIn:
      - PPSC
      - FPSC
  - id: 22
    question: What is the name given to the database management system which is able to handle full text data, image data, audio and video?
    options:
      - Full media
      - Graphics media
      - Multimedia
      - Hypertext
      - None of the above
    answer: 2
    explanation: Multimedia is the correct answer to “What is the name given to the database management system which is able to handle full text data, image data, audio and video”. This question is standard in competitive examination syllabi for Database Systems.
    keyConcept: Database Systems
    testedIn:
      - PPSC
      - FPSC
  - id: 23
    question: A top-to-bottom relationship among the items in a database is established by a
    options:
      - Hierarchical schema
      - Network schema
      - Relational schema
      - All of the above
      - None of the above
    answer: 0
    explanation: Hierarchical schema is the correct answer to “A top-to-bottom relationship among the items in a database is established by a”. This question is standard in competitive examination syllabi for Database Systems.
    keyConcept: Database Systems
    testedIn:
      - PPSC
      - FPSC
  - id: 24
    question: A database management system
    options:
      - allows simultaneous access to multiple files
      - can do more than a record management system
      - is a collection of programs for managing data in a single file
      - both (a) and (b)
      - None of the above
    answer: 3
    explanation: both (a) and (b) is the correct answer to “A database management system”. This question is standard in competitive examination syllabi for Database Systems.
    keyConcept: Database Systems
    testedIn:
      - PPSC
      - FPSC
  - id: 25
    question: Which of the following hardware components is the most important to the operation of a database management system?
    options:
      - high-resolution video display
      - printer
      - high speed, large-capacity disk
      - plotter
      - mouse
    answer: 2
    explanation: high speed, large-capacity disk is the correct answer to “Which of the following hardware components is the most important to the operation of a database management system”. This question is standard in competitive examination syllabi for Database Systems.
    keyConcept: Database Systems
    testedIn:
      - PPSC
      - FPSC
  - id: 26
    question: To have a file hold a list, it is necessary to
    options:
      - identify the records in the list
      - identify the name, width and type of the fields of each record.
      - decide which fields will be used as sort or index keys
      - All of the above
      - None of the above
    answer: 3
    explanation: All of the above is the correct answer to “To have a file hold a list, it is necessary to”. This question is standard in competitive examination syllabi for Database Systems.
    keyConcept: Database Systems
    testedIn:
      - PPSC
      - FPSC
  - id: 27
    question: Sophisticated report generators can
    options:
      - print row-oriented reports
      - perform arithmetic operations
      - selectively retrieve and print portions of a list
      - All of the above
      - None of the above
    answer: 3
    explanation: All of the above is the correct answer to “Sophisticated report generators can”. This question is standard in competitive examination syllabi for Database Systems.
    keyConcept: Database Systems
    testedIn:
      - PPSC
      - FPSC
  - id: 28
    question: In a _____ a parent record type can be linked to one or more "child" record types, but a child record type can have only one parent.
    options:
      - Network database
      - Relational database
      - Distributed database
      - Hierarchical database
      - None of the above
    answer: 3
    explanation: Hierarchical database is the correct answer to “In a _____ a parent record type can be linked to one or more "child" record types, but a child record type can have only one parent.”. This question is standard in competitive examination syllabi for Database Systems.
    keyConcept: Database Systems
    testedIn:
      - PPSC
      - FPSC
  - id: 29
    question: Which two files are used during operation of the DBMS?
    options:
      - query language and utilities
      - data manipulation language and query language
      - data dictionary and transaction log
      - data dictionary and query language
      - None of the above
    answer: 2
    explanation: data dictionary and transaction log is the correct answer to “Which two files are used during operation of the DBMS”. This question is standard in competitive examination syllabi for Database Systems.
    keyConcept: Database Systems
    testedIn:
      - PPSC
      - FPSC
  - id: 30
    question: When using a database management system, the first thing that you must do is to
    options:
      - create a database file
      - activate file editor
      - load the software into your micro¬computer
      - keep a floppy disk in readiness
      - None of the above
    answer: 2
    explanation: load the software into your micro¬computer is the correct answer to “When using a database management system, the first thing that you must do is to”. This question is standard in competitive examination syllabi for Database Systems.
    keyConcept: Database Systems
    testedIn:
      - PPSC
      - FPSC
  - id: 31
    question: A network schema
    options:
      - restricts the structure to a one-to-many relationship
      - permits many-to-many relation¬ships
      - stores data in tables
      - All of the above
      - None of the above
    answer: 1
    explanation: permits many-to-many relation¬ships is the correct answer to “A network schema”. This question is standard in competitive examination syllabi for Database Systems.
    keyConcept: Database Systems
    testedIn:
      - PPSC
      - FPSC
  - id: 32
    question: Which of the following is not a relational database?
    options:
      - dBASE IV
      - 4th Dimension
      - FoxPro
      - Reflex
      - None of the above
    answer: 3
    explanation: Reflex is the correct answer to “Which of the following is not a relational database”. This question is standard in competitive examination syllabi for Database Systems.
    keyConcept: Database Systems
    testedIn:
      - PPSC
      - FPSC
  - id: 33
    question: Which command is used to remove a table from the database in SQL?
    options:
      - DELETE TABLE
      - DROP TABLE
      - ERASE TABLE
      - UNATTACH TABLE
      - None of the above
    answer: 1
    explanation: DROP TABLE is the correct answer to “Which command is used to remove a table from the database in SQL”. This question is standard in competitive examination syllabi for Database Systems.
    keyConcept: Database Systems
    testedIn:
      - PPSC
      - FPSC
  - id: 34
    question: A large computer information system maintains many different computer files. Which amongst them is called a perpetual file?
    options:
      - Specialized file
      - Log file
      - Master file
      - Update file
      - None of the above
    answer: 2
    explanation: Master file is the correct answer to “A large computer information system maintains many different computer files. Which amongst them is called a perpetual file”. This question is standard in competitive examination syllabi for Database Systems.
    keyConcept: Database Systems
    testedIn:
      - PPSC
      - FPSC
  - id: 35
    question: A file produced by a spreadsheet
    options:
      - is generally stored on disk in an ASCII text format
      - can be used as it by the DBMS
      - can be used for graphic
      - All of the above
      - None of the above
    answer: 0
    explanation: is generally stored on disk in an ASCII text format is the correct answer to “A file produced by a spreadsheet”. This question is standard in competitive examination syllabi for Database Systems.
    keyConcept: Database Systems
    testedIn:
      - PPSC
      - FPSC
  - id: 36
    question: A form defines
    options:
      - where data is placed on the screen
      - the width of each field
      - both (a) and (b)
      - All of the above
      - None of the above
    answer: 2
    explanation: both (a) and (b) is the correct answer to “A form defines”. This question is standard in competitive examination syllabi for Database Systems.
    keyConcept: Database Systems
    testedIn:
      - PPSC
      - FPSC
  - id: 37
    question: Which of the following is true of a network structure?
    options:
      - It is a physical representation of the data
      - It allows a many-to-many relationship
      - It is conceptually simple
      - It will be the dominant data base of the future
      - None of the above
    answer: 1
    explanation: It allows a many-to-many relationship is the correct answer to “Which of the following is true of a network structure”. This question is standard in competitive examination syllabi for Database Systems.
    keyConcept: Database Systems
    testedIn:
      - PPSC
      - FPSC
  - id: 38
    question: In SQL, GRANT command is used to
    options:
      - allow user to access databases
      - allow user to create databases
      - grant system privileges, roles, and object privileges to uses and roles
      - choose auditing for specific SQL commands
      - None of the above
    answer: 2
    explanation: grant system privileges, roles, and object privileges to uses and roles is the correct answer to “In SQL, GRANT command is used to”. This question is standard in competitive examination syllabi for Database Systems.
    keyConcept: Database Systems
    testedIn:
      - PPSC
      - FPSC
  - id: 39
    question: The highest level in the hierarchy of data organization is called
    options:
      - data bank
      - database
      - data file
      - data record
      - None of the above
    answer: 1
    explanation: database is the correct answer to “The highest level in the hierarchy of data organization is called”. This question is standard in competitive examination syllabi for Database Systems.
    keyConcept: Database Systems
    testedIn:
      - PPSC
      - FPSC
  - id: 40
    question: "The logical data structure with a one-to-many relationship is a :"
    options:
      - network
      - tree
      - chain
      - relational
      - None of the above
    answer: 1
    explanation: tree is the correct answer to “The logical data structure with a one-to-many relationship is a :”. This question is standard in competitive examination syllabi for Database Systems.
    keyConcept: Database Systems
    testedIn:
      - PPSC
      - FPSC
---


