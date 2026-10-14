---
title: Querying With Hive — Part 2 MCQs with Explanations
description: Practice high-yield Computer Science & IT MCQs on Querying With Hive — Part 2 with worked academic solutions for PPSC, FPSC, CSS, PMS, NTS.
subject: computer-science
subjectName: Computer Science & IT
topic: querying-with-hive-part-2
topicName: Querying With Hive — Part 2
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
    question: hiveconf variables are set as normal by using the following statement?
    options:
      - set -v x=myvalue
      - set x=myvalue
      - reset x=myvalue
      - none of the mentioned
    answer: 1
    explanation: set x=myvalue is the correct answer to “hiveconf variables are set as normal by using the following statement”. This question is standard in competitive examination syllabi for Querying With Hive.
    keyConcept: Querying With Hive
    testedIn:
      - PPSC
      - FPSC
  - id: 2
    question: To force Hive to be more verbose, it can be started with . . . . . . . .
    options:
      - "*hive -hiveconf hive.root.logger=INFO,console*"
      - "*hive -hiveconf hive.subroot.logger=INFO,console*"
      - "*hive -hiveconf hive.root.logger=INFOVALUE,console*"
      - All of the mentioned
    answer: 0
    explanation: "*hive -hiveconf hive.root.logger=INFO,console* is the correct answer to “To force Hive to be more verbose, it can be started with . . . . . . . .”. This question is standard in competitive examination syllabi for Querying With Hive."
    keyConcept: Querying With Hive
    testedIn:
      - PPSC
      - FPSC
  - id: 3
    question: Which of the following command does not operate on tables?
    options:
      - enabled
      - disabled
      - drop
      - all of the mentioned
    answer: 1
    explanation: disabled is the correct answer to “Which of the following command does not operate on tables”. This question is standard in competitive examination syllabi for Querying With Hive.
    keyConcept: Querying With Hive
    testedIn:
      - PPSC
      - FPSC
  - id: 4
    question: Which of the following will remove the resource(s) from the distributed cache?
    options:
      - delete FILE[S] <filepath>*
      - delete JAR[S] <filepath>*
      - delete ARCHIVE[S] <filepath>*
      - all of the mentioned
    answer: 3
    explanation: all of the mentioned is the correct answer to “Which of the following will remove the resource(s) from the distributed cache”. This question is standard in competitive examination syllabi for Querying With Hive.
    keyConcept: Querying With Hive
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: Which of the following statement will create a column with varchar datatype?
    options:
      - CREATE TABLE foo (bar CHAR(10))
      - CREATE TABLE foo (bar VARCHAR(10))
      - CREATE TABLE foo (bar CHARVARYING(10))
      - All of the mentioned
    answer: 1
    explanation: CREATE TABLE foo (bar VARCHAR(10)) is the correct answer to “Which of the following statement will create a column with varchar datatype”. This question is standard in competitive examination syllabi for Querying With Hive.
    keyConcept: Querying With Hive
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: The . . . . . . . . allows users to read or write Avro data as Hive tables.
    options:
      - AvroSerde
      - HiveSerde
      - SqlSerde
      - None of the mentioned
    answer: 0
    explanation: AvroSerde is the correct answer to “The . . . . . . . . allows users to read or write Avro data as Hive tables.”. This question is standard in competitive examination syllabi for Querying With Hive.
    keyConcept: Querying With Hive
    testedIn:
      - PPSC
      - FPSC
  - id: 7
    question: HCatalog is installed with Hive, starting with Hive release is . . . . . . . .
    options:
      - 0.10.0
      - 0.9.0
      - 0.11.0
      - 0.12.0
    answer: 2
    explanation: 0.11.0 is the correct answer to “HCatalog is installed with Hive, starting with Hive release is . . . . . . . .”. This question is standard in competitive examination syllabi for Querying With Hive.
    keyConcept: Querying With Hive
    testedIn:
      - PPSC
      - FPSC
  - id: 8
    question: Correct and valid syntax for count command is . . . . . . . .
    options:
      - count '<row number>'
      - count '<table name>'
      - count '<column name>'
      - none of the mentioned
    answer: 1
    explanation: count '<table name>' is the correct answer to “Correct and valid syntax for count command is . . . . . . . .”. This question is standard in competitive examination syllabi for Querying With Hive.
    keyConcept: Querying With Hive
    testedIn:
      - PPSC
      - FPSC
  - id: 9
    question: The files that are written by the . . . . . . . . job are valid Avro files.
    options:
      - Avro
      - Map Reduce
      - Hive
      - All of the mentioned
    answer: 2
    explanation: Hive is the correct answer to “The files that are written by the . . . . . . . . job are valid Avro files.”. This question is standard in competitive examination syllabi for Querying With Hive.
    keyConcept: Querying With Hive
    testedIn:
      - PPSC
      - FPSC
  - id: 10
    question: . . . . . . . . is a lossless data compression library that favors speed over compression ratio.
    options:
      - LOZ
      - LZO
      - OLZ
      - All of the mentioned
    answer: 0
    explanation: LOZ is the correct answer to “. . . . . . . . is a lossless data compression library that favors speed over compression ratio.”. This question is standard in competitive examination syllabi for Querying With Hive.
    keyConcept: Querying With Hive
    testedIn:
      - PPSC
      - FPSC
  - id: 11
    question: Hive specific commands can be run from Beeline, when the Hive . . . . . . . . driver is used.
    options:
      - ODBC
      - JDBC
      - ODBC-JDBC
      - All of the Mentioned
    answer: 1
    explanation: JDBC is the correct answer to “Hive specific commands can be run from Beeline, when the Hive . . . . . . . . driver is used.”. This question is standard in competitive examination syllabi for Querying With Hive.
    keyConcept: Querying With Hive
    testedIn:
      - PPSC
      - FPSC
  - id: 12
    question: The . . . . . . . . suffers from the monotonically increasing rowkey problem.
    options:
      - rowkey
      - columnkey
      - counterkey
      - all of the mentioned
    answer: 0
    explanation: rowkey is the correct answer to “The . . . . . . . . suffers from the monotonically increasing rowkey problem.”. This question is standard in competitive examination syllabi for Querying With Hive.
    keyConcept: Querying With Hive
    testedIn:
      - PPSC
      - FPSC
  - id: 13
    question: HBaseAdmin and . . . . . . . . are the two important classes in this package that provide DDL functionalities.
    options:
      - HTableDescriptor
      - HDescriptor
      - HTable
      - HTabDescriptor
    answer: 0
    explanation: HTableDescriptor is the correct answer to “HBaseAdmin and . . . . . . . . are the two important classes in this package that provide DDL functionalities.”. This question is standard in competitive examination syllabi for Querying With Hive.
    keyConcept: Querying With Hive
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: Hive uses . . . . . . . . for logging.
    options:
      - logj4
      - log4l
      - log4i
      - log4j
    answer: 3
    explanation: log4j is the correct answer to “Hive uses . . . . . . . . for logging.”. This question is standard in competitive examination syllabi for Querying With Hive.
    keyConcept: Querying With Hive
    testedIn:
      - PPSC
      - FPSC
  - id: 15
    question: Serialization of string columns uses a . . . . . . . . to form unique column values.
    options:
      - Footer
      - STRIPES
      - Dictionary
      - Index
    answer: 2
    explanation: Dictionary is the correct answer to “Serialization of string columns uses a . . . . . . . . to form unique column values.”. This question is standard in competitive examination syllabi for Querying With Hive.
    keyConcept: Querying With Hive
    testedIn:
      - PPSC
      - FPSC
  - id: 16
    question: HBase is a distributed . . . . . . . . database built on top of the Hadoop file system.
    options:
      - Column-oriented
      - Row-oriented
      - Tuple-oriented
      - None of the mentioned
    answer: 0
    explanation: Column-oriented is the correct answer to “HBase is a distributed . . . . . . . . database built on top of the Hadoop file system.”. This question is standard in competitive examination syllabi for Querying With Hive.
    keyConcept: Querying With Hive
    testedIn:
      - PPSC
      - FPSC
  - id: 17
    question: Hive does not support literals for . . . . . . . . types.
    options:
      - Scalar
      - Complex
      - INT
      - CHAR
    answer: 1
    explanation: Complex is the correct answer to “Hive does not support literals for . . . . . . . . types.”. This question is standard in competitive examination syllabi for Querying With Hive.
    keyConcept: Querying With Hive
    testedIn:
      - PPSC
      - FPSC
  - id: 18
    question: The AvroSerde has been built and tested against Hive 0.9.1 and later, and uses Avro . . . . . . . . as of Hive 0.13 and 0.14.
    options:
      - 1.7.4
      - 1.7.2
      - 1.7.3
      - None of the mentioned
    answer: 3
    explanation: None of the mentioned is the correct answer to “The AvroSerde has been built and tested against Hive 0.9.1 and later, and uses Avro . . . . . . . . as of Hive 0.13 and 0.14.”. This question is standard in competitive examination syllabi for Querying With Hive.
    keyConcept: Querying With Hive
    testedIn:
      - PPSC
      - FPSC
  - id: 19
    question: Variable Substitution is disabled by using . . . . . . . .
    options:
      - set hive.variable.substitute=false
      - set hive.variable.substitutevalues=false
      - set hive.variable.substitute=true
      - all of the mentioned
    answer: 0
    explanation: set hive.variable.substitute=false is the correct answer to “Variable Substitution is disabled by using . . . . . . . .”. This question is standard in competitive examination syllabi for Querying With Hive.
    keyConcept: Querying With Hive
    testedIn:
      - PPSC
      - FPSC
  - id: 20
    question: When $HIVE_HOME/bin/hive is run without either the -e or -f option, it enters . . . . . . . . mode.
    options:
      - Batch
      - Interactive shell
      - Multiple
      - None of the mentioned
    answer: 1
    explanation: Interactive shell is the correct answer to “When $HIVE_HOME/bin/hive is run without either the -e or -f option, it enters . . . . . . . . mode.”. This question is standard in competitive examination syllabi for Querying With Hive.
    keyConcept: Querying With Hive
    testedIn:
      - PPSC
      - FPSC
  - id: 21
    question: HiveServer2 introduced in Hive 0.11 has a new CLI called . . . . . . . .
    options:
      - BeeLine
      - SqlLine
      - HiveLine
      - CLilLine
    answer: 0
    explanation: BeeLine is the correct answer to “HiveServer2 introduced in Hive 0.11 has a new CLI called . . . . . . . .”. This question is standard in competitive examination syllabi for Querying With Hive.
    keyConcept: Querying With Hive
    testedIn:
      - PPSC
      - FPSC
  - id: 22
    question: . . . . . . . . is interpolated into the quotes to correctly handle spaces within the schema.
    options:
      - $SCHEMA
      - $ROW
      - $SCHEMASPACES
      - $NAMESPACES
    answer: 0
    explanation: $SCHEMA is the correct answer to “. . . . . . . . is interpolated into the quotes to correctly handle spaces within the schema.”. This question is standard in competitive examination syllabi for Querying With Hive.
    keyConcept: Querying With Hive
    testedIn:
      - PPSC
      - FPSC
  - id: 23
    question: An ORC file contains groups of row data called . . . . . . . .
    options:
      - postscript
      - stripes
      - script
      - none of the mentioned
    answer: 1
    explanation: stripes is the correct answer to “An ORC file contains groups of row data called . . . . . . . .”. This question is standard in competitive examination syllabi for Querying With Hive.
    keyConcept: Querying With Hive
    testedIn:
      - PPSC
      - FPSC
  - id: 24
    question: . . . . . . . . reduce the amount of informational messages displayed (true) or not (false).
    options:
      - "-silent=[true/false]"
      - "-autosave=[true/false]"
      - "-force=[true/false]"
      - All of the mentioned
    answer: 0
    explanation: "-silent=[true/false] is the correct answer to “. . . . . . . . reduce the amount of informational messages displayed (true) or not (false).”. This question is standard in competitive examination syllabi for Querying With Hive."
    keyConcept: Querying With Hive
    testedIn:
      - PPSC
      - FPSC
  - id: 25
    question: The CLI when invoked without the -i option will attempt to load $HIVE_HOME/bin/.hiverc and $HOME/.hiverc as . . . . . . . . files.
    options:
      - processing
      - termination
      - initialization
      - none of the mentioned
    answer: 2
    explanation: initialization is the correct answer to “The CLI when invoked without the -i option will attempt to load $HIVE_HOME/bin/.hiverc and $HOME/.hiverc as . . . . . . . . files.”. This question is standard in competitive examination syllabi for Querying With Hive.
    keyConcept: Querying With Hive
    testedIn:
      - PPSC
      - FPSC
  - id: 26
    question: Which of the following command sets the value of a particular configuration variable (key)?
    options:
      - set -v
      - set <key>=<value>
      - set
      - reset
    answer: 1
    explanation: set <key>=<value> is the correct answer to “Which of the following command sets the value of a particular configuration variable (key)”. This question is standard in competitive examination syllabi for Querying With Hive.
    keyConcept: Querying With Hive
    testedIn:
      - PPSC
      - FPSC
  - id: 27
    question: One supported data type that deserves special mention are . . . . . . . .
    options:
      - money
      - counters
      - smallint
      - tinyint
    answer: 1
    explanation: counters is the correct answer to “One supported data type that deserves special mention are . . . . . . . .”. This question is standard in competitive examination syllabi for Querying With Hive.
    keyConcept: Querying With Hive
    testedIn:
      - PPSC
      - FPSC
  - id: 28
    question: In . . . . . . . . mode HiveServer2 only accepts valid Thrift calls.
    options:
      - Remote
      - HTTP
      - Embedded
      - Interactive
    answer: 0
    explanation: Remote is the correct answer to “In . . . . . . . . mode HiveServer2 only accepts valid Thrift calls.”. This question is standard in competitive examination syllabi for Querying With Hive.
    keyConcept: Querying With Hive
    testedIn:
      - PPSC
      - FPSC
  - id: 29
    question: Which command is used to disable all the tables matching the given regex?
    options:
      - remove all
      - drop all
      - disable_all
      - all of the mentioned
    answer: 2
    explanation: disable_all is the correct answer to “Which command is used to disable all the tables matching the given regex”. This question is standard in competitive examination syllabi for Querying With Hive.
    keyConcept: Querying With Hive
    testedIn:
      - PPSC
      - FPSC
  - id: 30
    question: . . . . . . . . command fetches the contents of a row or a cell.
    options:
      - select
      - get
      - put
      - none of the mentioned
    answer: 1
    explanation: get is the correct answer to “. . . . . . . . command fetches the contents of a row or a cell.”. This question is standard in competitive examination syllabi for Querying With Hive.
    keyConcept: Querying With Hive
    testedIn:
      - PPSC
      - FPSC
  - id: 31
    question: . . . . . . . . was designed to overcome limitations of the other Hive file formats.
    options:
      - ORC
      - OPC
      - ODC
      - None of the mentioned
    answer: 0
    explanation: ORC is the correct answer to “. . . . . . . . was designed to overcome limitations of the other Hive file formats.”. This question is standard in competitive examination syllabi for Querying With Hive.
    keyConcept: Querying With Hive
    testedIn:
      - PPSC
      - FPSC
  - id: 32
    question: Starting in Hive . . . . . . . . the Avro schema can be inferred from the Hive table schema.
    options:
      - "0.14"
      - "0.12"
      - "0.13"
      - "0.11"
    answer: 0
    explanation: 0.14 is the correct answer to “Starting in Hive . . . . . . . . the Avro schema can be inferred from the Hive table schema.”. This question is standard in competitive examination syllabi for Querying With Hive.
    keyConcept: Querying With Hive
    testedIn:
      - PPSC
      - FPSC
  - id: 33
    question: . . . . . . . . does re-write data and pack rows into columns for certain time-periods.
    options:
      - OpenTS
      - OpenTSDB
      - OpenTSD
      - OpenDB
    answer: 1
    explanation: OpenTSDB is the correct answer to “. . . . . . . . does re-write data and pack rows into columns for certain time-periods.”. This question is standard in competitive examination syllabi for Querying With Hive.
    keyConcept: Querying With Hive
    testedIn:
      - PPSC
      - FPSC
  - id: 34
    question: Avro-backed tables can simply be created by using . . . . . . . . in a DDL statement.
    options:
      - "\"STORED AS AVRO\""
      - "\"STORED AS HIVE\""
      - "\"STORED AS AVROHIVE\""
      - "\"STORED AS SERDE\""
    answer: 0
    explanation: "\"STORED AS AVRO\" is the correct answer to “Avro-backed tables can simply be created by using . . . . . . . . in a DDL statement.”. This question is standard in competitive examination syllabi for Querying With Hive."
    keyConcept: Querying With Hive
    testedIn:
      - PPSC
      - FPSC
  - id: 35
    question: . . . . . . . . supports a new command shell Beeline that works with HiveServer2.
    options:
      - HiveServer2
      - HiveServer3
      - HiveServer4
      - None of the mentioned
    answer: 0
    explanation: HiveServer2 is the correct answer to “. . . . . . . . supports a new command shell Beeline that works with HiveServer2.”. This question is standard in competitive examination syllabi for Querying With Hive.
    keyConcept: Querying With Hive
    testedIn:
      - PPSC
      - FPSC
  - id: 36
    question: Which of the following will prefix the query string with parameters?
    options:
      - SET hive.exec.compress.output=false
      - SET hive.compress.output=false
      - SET hive.exec.compress.output=true
      - All of the mentioned
    answer: 0
    explanation: SET hive.exec.compress.output=false is the correct answer to “Which of the following will prefix the query string with parameters”. This question is standard in competitive examination syllabi for Querying With Hive.
    keyConcept: Querying With Hive
    testedIn:
      - PPSC
      - FPSC
  - id: 37
    question: HBase is . . . . . . . . defines only column families.
    options:
      - Row Oriented
      - Schema-less
      - Fixed Schema
      - All of the mentioned
    answer: 1
    explanation: Schema-less is the correct answer to “HBase is . . . . . . . . defines only column families.”. This question is standard in competitive examination syllabi for Querying With Hive.
    keyConcept: Querying With Hive
    testedIn:
      - PPSC
      - FPSC
  - id: 38
    question: Which of the following is used to set transaction isolation level?
    options:
      - "-incremental=[true/false]"
      - "-isolation=LEVEL"
      - "-force=[true/false]"
      - "-truncateTable=[true/false]"
    answer: 1
    explanation: "-isolation=LEVEL is the correct answer to “Which of the following is used to set transaction isolation level”. This question is standard in competitive examination syllabi for Querying With Hive."
    keyConcept: Querying With Hive
    testedIn:
      - PPSC
      - FPSC
  - id: 39
    question: Which of the following data type is supported by Hive?
    options:
      - map
      - record
      - string
      - enum
    answer: 3
    explanation: enum is the correct answer to “Which of the following data type is supported by Hive”. This question is standard in competitive examination syllabi for Querying With Hive.
    keyConcept: Querying With Hive
    testedIn:
      - PPSC
      - FPSC
  - id: 40
    question: What does the hive.rrot.logger specified in the following statement? $HIVE_HOME/bin/hive --hiveconf hive.root.logger=INFO,console
    options:
      - Log level
      - Log modes
      - Log source
      - All of the mentioned
    answer: 0
    explanation: Log level is the correct answer to “What does the hive.rrot.logger specified in the following statement? $HIVE_HOME/bin/hive --hiveconf hive.root.logger=INFO,console”. This question is standard in competitive examination syllabi for Querying With Hive.
    keyConcept: Querying With Hive
    testedIn:
      - PPSC
      - FPSC
---


