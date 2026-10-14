---
title: Data Warehousing MCQs with Explanations
description: Practice high-yield Computer Science & IT MCQs on Data Warehousing with worked academic solutions for PPSC, FPSC, CSS, PMS, NTS.
subject: computer-science
subjectName: Computer Science & IT
topic: data-warehousing
topicName: Data Warehousing
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
    question: Fact tables are which of the following?
    options:
      - Completely denoralized
      - Partially denoralized
      - Completely normalized
      - Partially normalized
    answer: 0
    explanation: "In the context of data warehousing and database design, fact tables are typically structured to be completely denormalized . Denormalization is a process where data is intentionally organized in a way that reduces or eliminates the need for joins between tables, often at the expense of redundancy. This is done to improve query performance in data warehousing environments, where analytical queries are common. Here's an explanation of the other options: Option B: Partially denormalized doesn't accurately describe fact tables. While some degree of denormalization may occur, the term \"completely denormalized\" is a more appropriate characterization. Option C: Completely normalized is not typically the case for fact tables in data warehousing. Normalization involves minimizing data redundancy by organizing data into separate tables based on relationships, which is the opposite of what is done in a fact table. Option D: Partially normalized also doesn't accurately describe fact tables. Fact tables are intentionally denormalized for performance reasons, so \"completely denormalized\" is the more suitable term. So, the correct answer is Option A: Completely denormalized . Fact tables in data warehousing are often structured in a way that optimizes query performance, even if it means duplicating data to reduce the need for complex joins."
    keyConcept: Data Warehousing
    testedIn:
      - PPSC
      - FPSC
  - id: 2
    question: Data transformation includes which of the following?
    options:
      - A process to change data from a detailed level to a summary level
      - A process to change data from a summary level to a detailed level
      - Joining data from one source into various sources of data
      - Separating data from one source into various sources of data
    answer: 0
    explanation: "Data transformation involves various processes that include: Changing data from a detailed level to a summary level: This process is a key aspect of data transformation where detailed data is aggregated or summarized to provide a higher-level view. This process helps in creating summaries and reports that are useful for analysis and decision-making. Other options involve joining or separating data, which are related to data integration and partitioning, not specifically to data transformation."
    keyConcept: Data Warehousing
    testedIn:
      - PPSC
      - FPSC
  - id: 3
    question: Data scrubbing is which of the following?
    options:
      - A process to reject data from the data warehouse and to create the necessary indexes
      - A process to load the data in the data warehouse and to create the necessary indexes
      - A process to upgrade the quality of data after it is moved into a data warehouse
      - A process to upgrade the quality of data before it is moved into a data warehouse
    answer: 3
    explanation: A process to upgrade the quality of data before it is moved into a data warehouse is the correct answer to “Data scrubbing is which of the following”. This question is standard in competitive examination syllabi for Data Warehousing.
    keyConcept: Data Warehousing
    testedIn:
      - PPSC
      - FPSC
  - id: 4
    question: The @active data warehouse architecture includes which of the following?
    options:
      - At least one data mart
      - Data that can extracted from numerous internal and external sources
      - Near real-time updates
      - All of the above
    answer: 3
    explanation: All of the above is the correct answer to “The @active data warehouse architecture includes which of the following”. This question is standard in competitive examination syllabi for Data Warehousing.
    keyConcept: Data Warehousing
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: A goal of data mining includes which of the following?
    options:
      - To explain some observed event or condition
      - To confirm that data exists
      - To analyze data for expected relationships
      - To create a new data warehouse
    answer: 0
    explanation: To explain some observed event or condition is the correct answer to “A goal of data mining includes which of the following”. This question is standard in competitive examination syllabi for Data Warehousing.
    keyConcept: Data Warehousing
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: An operational system is which of the following?
    options:
      - A system that is used to run the business in real time and is based on historical data.
      - A system that is used to run the business in real time and is based on current data.
      - A system that is used to support decision making and is based on current data.
      - A system that is used to support decision making and is based on historical data.
    answer: 1
    explanation: A system that is used to run the business in real time and is based on current data. is the correct answer to “An operational system is which of the following”. This question is standard in competitive examination syllabi for Data Warehousing.
    keyConcept: Data Warehousing
    testedIn:
      - PPSC
      - FPSC
  - id: 7
    question: A data warehouse is which of the following?
    options:
      - Can be updated by end users.
      - Contains numerous naming conventions and formats.
      - Organized around important subject areas.
      - Contains only current data.
    answer: 2
    explanation: Organized around important subject areas. is the correct answer to “A data warehouse is which of the following”. This question is standard in competitive examination syllabi for Data Warehousing.
    keyConcept: Data Warehousing
    testedIn:
      - PPSC
      - FPSC
  - id: 8
    question: A snowflake schema is which of the following types of tables?
    options:
      - Fact
      - Dimension
      - Helper
      - All of the above
    answer: 3
    explanation: All of the above is the correct answer to “A snowflake schema is which of the following types of tables”. This question is standard in competitive examination syllabi for Data Warehousing.
    keyConcept: Data Warehousing
    testedIn:
      - PPSC
      - FPSC
  - id: 9
    question: The generic two-level data warehouse architecture includes which of the following?
    options:
      - At least one data mart
      - Data that can extracted from numerous internal and external sources
      - Near real-time updates
      - All of the above
    answer: 1
    explanation: Data that can extracted from numerous internal and external sources is the correct answer to “The generic two-level data warehouse architecture includes which of the following”. This question is standard in competitive examination syllabi for Data Warehousing.
    keyConcept: Data Warehousing
    testedIn:
      - PPSC
      - FPSC
  - id: 10
    question: Reconciled data is which of the following?
    options:
      - Data stored in the various operational systems throughout the organization.
      - Current data intended to be the single source for all decision support systems.
      - Data stored in one operational system in the organization.
      - Data that has been selected and formatted for end-user support applications.
    answer: 1
    explanation: Current data intended to be the single source for all decision support systems. is the correct answer to “Reconciled data is which of the following”. This question is standard in competitive examination syllabi for Data Warehousing.
    keyConcept: Data Warehousing
    testedIn:
      - PPSC
      - FPSC
  - id: 11
    question: The load and index is which of the following?
    options:
      - A process to reject data from the data warehouse and to create the necessary indexes
      - A process to load the data in the data warehouse and to create the necessary indexes
      - A process to upgrade the quality of data after it is moved into a data warehouse
      - A process to upgrade the quality of data before it is moved into a data warehouse
    answer: 1
    explanation: A process to load the data in the data warehouse and to create the necessary indexes is the correct answer to “The load and index is which of the following”. This question is standard in competitive examination syllabi for Data Warehousing.
    keyConcept: Data Warehousing
    testedIn:
      - PPSC
      - FPSC
  - id: 12
    question: The extract process is which of the following?
    options:
      - Capturing all of the data contained in various operational systems
      - Capturing a subset of the data contained in various operational systems
      - Capturing all of the data contained in various decision support systems
      - Capturing a subset of the data contained in various decision support systems
    answer: 1
    explanation: Capturing a subset of the data contained in various operational systems is the correct answer to “The extract process is which of the following”. This question is standard in competitive examination syllabi for Data Warehousing.
    keyConcept: Data Warehousing
    testedIn:
      - PPSC
      - FPSC
  - id: 13
    question: A star schema has what type of relationship between a dimension and fact table?
    options:
      - Many-to-many
      - One-to-one
      - One-to-many
      - All of the above
    answer: 2
    explanation: One-to-many is the correct answer to “A star schema has what type of relationship between a dimension and fact table”. This question is standard in competitive examination syllabi for Data Warehousing.
    keyConcept: Data Warehousing
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: Transient data is which of the following?
    options:
      - Data in which changes to existing records cause the previous version of the records to be eliminated
      - Data in which changes to existing records do not cause the previous version of the records to be eliminated
      - Data that are never altered or deleted once they have been added
      - Data that are never deleted once they have been added
    answer: 0
    explanation: Data in which changes to existing records cause the previous version of the records to be eliminated is the correct answer to “Transient data is which of the following”. This question is standard in competitive examination syllabi for Data Warehousing.
    keyConcept: Data Warehousing
    testedIn:
      - PPSC
      - FPSC
  - id: 15
    question: A multifield transformation does which of the following?
    options:
      - Converts data from one field into multiple fields
      - Converts data from multiple fields into one field
      - Converts data from multiple fields into multiple fields
      - All of the above
    answer: 3
    explanation: All of the above is the correct answer to “A multifield transformation does which of the following”. This question is standard in competitive examination syllabi for Data Warehousing.
    keyConcept: Data Warehousing
    testedIn:
      - PPSC
      - FPSC
  - id: 16
    question: A data mart is designed to optimize the performance for well-defined and predicable uses.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “A data mart is designed to optimize the performance for well-defined and predicable uses.”. This question is standard in competitive examination syllabi for Data Warehousing.
    keyConcept: Data Warehousing
    testedIn:
      - PPSC
      - FPSC
  - id: 17
    question: Successful data warehousing requires that a formal program in total quality management (TQM) be implemented.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “Successful data warehousing requires that a formal program in total quality management (TQM) be implemented.”. This question is standard in competitive examination syllabi for Data Warehousing.
    keyConcept: Data Warehousing
    testedIn:
      - PPSC
      - FPSC
  - id: 18
    question: Data in operational systems are typically fragmented and inconsistent.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “Data in operational systems are typically fragmented and inconsistent.”. This question is standard in competitive examination syllabi for Data Warehousing.
    keyConcept: Data Warehousing
    testedIn:
      - PPSC
      - FPSC
  - id: 19
    question: Most operational systems are based on the use of transient data.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “Most operational systems are based on the use of transient data.”. This question is standard in competitive examination syllabi for Data Warehousing.
    keyConcept: Data Warehousing
    testedIn:
      - PPSC
      - FPSC
  - id: 20
    question: Independent data marts are often created because an organization focuses on a series of short-term business objectives.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “Independent data marts are often created because an organization focuses on a series of short-term business objectives.”. This question is standard in competitive examination syllabi for Data Warehousing.
    keyConcept: Data Warehousing
    testedIn:
      - PPSC
      - FPSC
  - id: 21
    question: Joining is the process of partitioning data according to predefined criteria.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “Joining is the process of partitioning data according to predefined criteria.”. This question is standard in competitive examination syllabi for Data Warehousing.
    keyConcept: Data Warehousing
    testedIn:
      - PPSC
      - FPSC
  - id: 22
    question: The role of the ETL process is to identify erroneous data and to fix them.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “The role of the ETL process is to identify erroneous data and to fix them.”. This question is standard in competitive examination syllabi for Data Warehousing.
    keyConcept: Data Warehousing
    testedIn:
      - PPSC
      - FPSC
  - id: 23
    question: Data in the data warehouse are loaded and refreshed from operational systems.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “Data in the data warehouse are loaded and refreshed from operational systems.”. This question is standard in competitive examination syllabi for Data Warehousing.
    keyConcept: Data Warehousing
    testedIn:
      - PPSC
      - FPSC
  - id: 24
    question: Star schema is suited to online transaction processing, and therefore is generally used in operational systems, operational data stores, or an EDW.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “Star schema is suited to online transaction processing, and therefore is generally used in operational systems, operational data stores, or an EDW.”. This question is standard in competitive examination syllabi for Data Warehousing.
    keyConcept: Data Warehousing
    testedIn:
      - PPSC
      - FPSC
  - id: 25
    question: Periodic data are data that are physically altered once added to the store.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “Periodic data are data that are physically altered once added to the store.”. This question is standard in competitive examination syllabi for Data Warehousing.
    keyConcept: Data Warehousing
    testedIn:
      - PPSC
      - FPSC
  - id: 26
    question: Both status data and event data can be stored in a database.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “Both status data and event data can be stored in a database.”. This question is standard in competitive examination syllabi for Data Warehousing.
    keyConcept: Data Warehousing
    testedIn:
      - PPSC
      - FPSC
  - id: 27
    question: Static extract is used for ongoing warehouse maintenance.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “Static extract is used for ongoing warehouse maintenance.”. This question is standard in competitive examination syllabi for Data Warehousing.
    keyConcept: Data Warehousing
    testedIn:
      - PPSC
      - FPSC
  - id: 28
    question: Data scrubbing can help upgrade data quality; it is not a long-term solution to the data quality problem.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “Data scrubbing can help upgrade data quality; it is not a long-term solution to the data quality problem.”. This question is standard in competitive examination syllabi for Data Warehousing.
    keyConcept: Data Warehousing
    testedIn:
      - PPSC
      - FPSC
  - id: 29
    question: Every key used to join the fact table with a dimensional table should be a surrogate key.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “Every key used to join the fact table with a dimensional table should be a surrogate key.”. This question is standard in competitive examination syllabi for Data Warehousing.
    keyConcept: Data Warehousing
    testedIn:
      - PPSC
      - FPSC
  - id: 30
    question: Derived data are detailed, current data intended to be the single, authoritative source for all decision support applications.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “Derived data are detailed, current data intended to be the single, authoritative source for all decision support applications.”. This question is standard in competitive examination syllabi for Data Warehousing.
    keyConcept: Data Warehousing
    testedIn:
      - PPSC
      - FPSC
---


