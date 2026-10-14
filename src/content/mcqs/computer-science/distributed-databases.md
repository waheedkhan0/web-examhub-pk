---
title: Distributed Databases MCQs with Explanations
description: Practice high-yield Computer Science & IT MCQs on Distributed Databases with worked academic solutions for PPSC, FPSC, CSS, PMS, NTS.
subject: computer-science
subjectName: Computer Science & IT
topic: distributed-databases
topicName: Distributed Databases
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
    question: A distributed database has which of the following advantages over a centralized database?
    options:
      - Software cost
      - Software complexity
      - Slow Response
      - Modular growth
    answer: 3
    explanation: "A distributed database offers several advantages over a centralized database architecture. Option A: Software cost This option is not typically considered an advantage of distributed databases over centralized databases. The cost of software can vary based on factors such as licensing models, vendor pricing, and the specific requirements of the database system. Both distributed and centralized databases may incur software costs depending on the technologies used and the scale of deployment. Option B: Software complexity While distributed databases may introduce additional complexity compared to centralized databases due to factors such as network communication, data replication, and synchronization mechanisms, this complexity is often outweighed by the benefits they offer, such as improved scalability, fault tolerance, and performance. Additionally, advancements in distributed database technologies have led to the development of tools and frameworks that help manage and mitigate the complexity associated with distributed systems. Option C: Slow Response Distributed databases are designed to enhance responsiveness and performance by distributing data across multiple sites and allowing parallel processing of queries. While network latency and communication overhead can affect response times in distributed systems, proper design, optimization, and caching mechanisms can mitigate these issues. In many cases, distributed databases can provide faster response times compared to centralized databases, especially for geographically dispersed users. Option D: Modular growth One of the significant advantages of distributed databases is their ability to support modular growth. Distributed architectures allow organizations to scale their database systems by adding or removing nodes (servers) as needed without significant disruptions to operations. This modular scalability enables organizations to adapt their database infrastructure to changing demands, such as increasing data volumes, user concurrency, or geographic expansion, without the need for costly and time-consuming migrations or overhauls. Therefore, in the context of advantages of distributed databases over centralized databases, the correct option is Modular growth (Option D)."
    keyConcept: Distributed Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 2
    question: An autonomous homogenous environment is which of the following?
    options:
      - The same DBMS is at each node and each DBMS works independently.
      - The same DBMS is at each node and a central DBMS coordinates database access.
      - A different DBMS is at each node and each DBMS works independently.
      - A different DBMS is at each node and a central DBMS coordinates database access.
    answer: 0
    explanation: "An autonomous homogeneous environment in a distributed database system refers to a scenario where the same Database Management System (DBMS) is installed at each node, and each DBMS operates independently without central coordination. Option A: The same DBMS is at each node and each DBMS works independently. In this configuration, every node in the distributed system runs the same type of DBMS software, such as Oracle, MySQL, or PostgreSQL. Each node manages its own local database independently, without relying on a central coordinating authority. This approach offers simplicity in management and administration, as there is no need for complex coordination mechanisms between nodes. However, it may result in data redundancy and inconsistency if proper synchronization mechanisms are not in place. Option B: The same DBMS is at each node and a central DBMS coordinates database access. In this scenario, although the same DBMS is installed at each node, a central DBMS acts as a coordinator for database access. The central DBMS manages tasks such as query routing, data distribution, and transaction coordination across the distributed system. While this approach centralizes control and facilitates coordination, it may introduce single points of failure and scalability challenges. Option C: A different DBMS is at each node and each DBMS works independently. In a heterogeneous environment, different types of DBMS software are installed at different nodes in the distributed system. Each DBMS operates autonomously, managing its own local database without coordination with other nodes. While this approach offers flexibility in choosing DBMS software based on specific requirements, it can complicate interoperability and data integration between heterogeneous systems. Option D: A different DBMS is at each node and a central DBMS coordinates database access. This option describes a mixed environment where different DBMS software is installed at each node, and a central DBMS orchestrates database access and coordination. While this approach allows for leveraging the strengths of various DBMS platforms, it also introduces complexity in managing heterogeneous systems and requires additional integration efforts. Therefore, in the context of an autonomous homogeneous environment in a distributed database system, the correct option is The same DBMS is at each node and each DBMS works independently (Option A)."
    keyConcept: Distributed Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 3
    question: A transaction manager is which of the following?
    options:
      - Maintains a log of transactions
      - Maintains before and after database images
      - Maintains appropriate concurrency control
      - All of the above
    answer: 3
    explanation: "A transaction manager in a distributed database system performs several critical functions to ensure the correctness, reliability, and consistency of transactions. Option A: Maintains a log of transactions The transaction manager is responsible for maintaining a log of all transactions executed in the system. This transaction log records details such as the operations performed by each transaction, timestamps, and transaction identifiers. The log serves as a record of the database's state changes and enables recovery in the event of system failures or crashes. By logging transactions, the system can ensure atomicity and durability properties of transactions. Option B: Maintains before and after database images In addition to maintaining a transaction log, the transaction manager often maintains before and after images of the database state for each transaction. These images represent the state of the database before and after the transaction's execution. By capturing these snapshots, the system can facilitate rollback operations during transaction aborts or recovery processes. Before and after images are essential for ensuring transaction consistency and integrity. Option C: Maintains appropriate concurrency control Concurrency control is vital for managing concurrent access to shared resources in a distributed database environment. The transaction manager implements concurrency control mechanisms to ensure that transactions execute serializably and without interfering with each other. Techniques such as locking, timestamp ordering, and optimistic concurrency control are commonly employed to manage concurrency effectively. By maintaining appropriate concurrency control, the transaction manager prevents data anomalies, such as lost updates and inconsistent reads, thereby preserving database consistency. Option D: All of the above All the mentioned functions—maintaining transaction logs, before and after database images, and appropriate concurrency control—are essential responsibilities of the transaction manager in a distributed database system. Together, these functions contribute to the ACID properties of transactions (Atomicity, Consistency, Isolation, Durability) and ensure the reliability and correctness of the database operations. Therefore, in the context of a transaction manager in a distributed database system, the correct option is All of the above (Option D)."
    keyConcept: Distributed Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 4
    question: Location transparency allows for which of the following?
    options:
      - Users to treat the data as if it is at one location
      - Programmers to treat the data as if it is at one location
      - Managers to treat the data as if it is at one location
      - All of the above
    answer: 3
    explanation: "Location transparency in a distributed database system refers to the ability to access and manipulate data without being aware of its physical location or distribution across multiple sites. It enables users, programmers, and managers to interact with the distributed database as if it were a single, centralized database located at one location. Option A: Users to treat the data as if it is at one location Location transparency allows end-users, such as database administrators or business analysts, to access and query data without needing to know where the data is physically stored or distributed. Regardless of the data's actual location across multiple sites, users can perceive and interact with it as if it were all located in one central location. This simplifies the user experience and abstracts the complexities of distributed data management. Option B: Programmers to treat the data as if it is at one location Location transparency extends to application developers and programmers, enabling them to write code that accesses and manipulates data without concerning themselves with the data's physical distribution. Programmers can write database queries and transactions as if they were targeting a single, centralized database, even though the data may be distributed across multiple nodes or sites. This abstraction simplifies application development and maintenance in distributed environments. Option C: Managers to treat the data as if it is at one location Location transparency also benefits database administrators and managers who oversee the distributed database system. Managers can conceptualize the database as a unified entity, regardless of its distributed nature. This allows them to define and enforce global policies, security measures, and access controls without needing to consider the underlying complexities of data distribution. It facilitates centralized management and governance of the distributed database infrastructure. Option D: All of the above All the mentioned options—users, programmers, and managers being able to treat the data as if it is at one location—are possible outcomes of location transparency in a distributed database system. By abstracting the physical distribution of data and providing a unified interface for interaction, location transparency enhances usability, simplifies development, and facilitates centralized management. Therefore, in the context of location transparency in a distributed database system, the correct option is All of the above (Option D)."
    keyConcept: Distributed Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: A heterogeneous distributed database is which of the following?
    options:
      - The same DBMS is used at each location and data are not distributed across all nodes.
      - The same DBMS is used at each location and data are distributed across all nodes.
      - A different DBMS is used at each location and data are not distributed across all nodes.
      - A different DBMS is used at each location and data are distributed across all nodes.
    answer: 2
    explanation: "A heterogeneous distributed database refers to a distributed database system where different Database Management Systems (DBMS) are used at different locations or nodes, and data are not necessarily distributed across all nodes. Option A: The same DBMS is used at each location and data are not distributed across all nodes. This scenario describes a homogeneous distributed database where the same type of DBMS software is used at each location, but the data may not be distributed across all nodes. In a homogeneous environment, data may still be centralized or distributed selectively based on the system's design and requirements. Option B: The same DBMS is used at each location and data are distributed across all nodes. This scenario also describes a homogeneous distributed database where the same DBMS software is used at each location, and data are distributed across all nodes. In such a setup, each node stores a portion of the distributed data, and the DBMS coordinates data access and management across the distributed environment. Option C: A different DBMS is used at each location and data are not distributed across all nodes. This option represents a heterogeneous distributed database where different DBMS software is used at different locations or nodes. In a heterogeneous environment, each node may have its own DBMS, which could be from different vendors or versions. However, data are not necessarily distributed across all nodes; they may be centralized or distributed selectively based on the system's architecture. Option D: A different DBMS is used at each location and data are distributed across all nodes. This scenario combines aspects of both homogeneous and heterogeneous distributed databases. It describes a heterogeneous environment where different DBMS software is used at each location, and data are distributed across all nodes. This configuration can introduce additional complexity due to the need for interoperability and data integration between disparate DBMS platforms. Therefore, in the context of a heterogeneous distributed database, the correct option is A different DBMS is used at each location and data are not distributed across all nodes (Option C)."
    keyConcept: Distributed Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: Some of the columns of a relation are at different sites is which of the following?
    options:
      - Data Replication
      - Horizontal Partitioning
      - Vertical Partitioning
      - Horizontal and Vertical Partitioning
    answer: 2
    explanation: "Vertical partitioning, also known as column partitioning, involves dividing a table into smaller tables (or relations) by columns. Each smaller table contains a subset of the original columns from the parent table. This partitioning strategy is particularly useful when different columns of a relation are stored at different sites in a distributed database system. Vertical partitioning offers several advantages: Data Localization: By storing related columns together in the same partition, vertical partitioning localizes the data relevant to certain queries or transactions, thereby reducing the need for data transfer between sites during query execution. Reduced Data Redundancy: Since each partition contains only a subset of columns, there is often a reduction in data redundancy compared to replicating entire rows (as in horizontal partitioning or data replication). This can lead to more efficient storage and better utilization of resources. Improved Query Performance: Queries that only require a subset of columns can be processed more efficiently because they access only the relevant partitions, rather than scanning the entire table. This can result in faster query execution times and improved overall system performance. In summary, vertical partitioning is the process of dividing a table by columns, where each partition contains a subset of columns. It is particularly beneficial when different columns of a relation are stored at different sites in a distributed database environment, as it enables data localization, reduces redundancy, and improves query performance. So, in the given scenario, the correct option is Vertical Partitioning (Option C)."
    keyConcept: Distributed Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 7
    question: Which of the following is true concerning a global transaction?
    options:
      - The required data are at one local site and the distributed DBMS routes requests as necessary.
      - The required data are located in at least one nonlocal site and the distributed DBMS routes requests as necessary.
      - The required data are at one local site and the distributed DBMS passes the request to only the local DBMS.
      - The required data are located in at least one nonlocal site and the distributed DBMS passes the request to only the local DBMS.
    answer: 1
    explanation: "In the context of a global transaction in a distributed database system, several aspects determine how the transaction is handled and where the required data are located. Option A: The required data are at one local site and the distributed DBMS routes requests as necessary. This option describes a scenario where the required data for a global transaction are located at one local site. In such cases, the distributed DBMS can efficiently route requests to the local site without the need for extensive coordination with other sites. However, this scenario does not align with the typical characteristics of a global transaction, where data may be distributed across multiple sites. Option B: The required data are located in at least one nonlocal site and the distributed DBMS routes requests as necessary. This option accurately reflects the nature of a global transaction. In a global transaction, the required data may be distributed across multiple sites, including nonlocal sites. The distributed DBMS is responsible for identifying the locations of the required data and routing requests to the appropriate sites as necessary to ensure that the transaction can be completed successfully. This may involve coordinating with multiple sites and coordinating data access and updates across distributed resources. Option C: The required data are at one local site and the distributed DBMS passes the request to only the local DBMS. This option suggests that the required data for a global transaction are located at one local site, and the distributed DBMS simply passes the request to the local DBMS without involving other sites. However, in the context of a global transaction, data may be distributed across multiple sites, making it necessary for the distributed DBMS to coordinate data access and updates across distributed resources beyond the local site. Option D: The required data are located in at least one nonlocal site and the distributed DBMS passes the request to only the local DBMS. Similar to Option C, this option implies that the distributed DBMS passes the request to only the local DBMS, even if the required data are located in at least one nonlocal site. However, in a global transaction, the distributed DBMS needs to route requests to the appropriate sites where the required data reside, which may include nonlocal sites. Therefore, this option does not accurately describe the characteristics of a global transaction. Therefore, in the context of a global transaction in a distributed database system, the correct option is The required data are located in at least one nonlocal site and the distributed DBMS routes requests as necessary (Option B)."
    keyConcept: Distributed Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 8
    question: A homogenous distributed database is which of the following?
    options:
      - The same DBMS is used at each location and data are not distributed across all nodes.
      - The same DBMS is used at each location and data are distributed across all nodes.
      - A different DBMS is used at each location and data are not distributed across all nodes.
      - A different DBMS is used at each location and data are distributed across all nodes.
    answer: 1
    explanation: "A homogeneous distributed database refers to a distributed database system where the same Database Management System (DBMS) software is used at each location or node, and data are distributed across all nodes. Option A: The same DBMS is used at each location and data are not distributed across all nodes. This scenario describes a homogeneous environment where the same DBMS software is used at each location, but the data may not be distributed across all nodes. In such cases, data may still be centralized or distributed selectively based on the system's design and requirements, rather than being distributed across all nodes. Option B: The same DBMS is used at each location and data are distributed across all nodes. This option accurately describes a homogeneous distributed database. In such an environment, the same DBMS software is installed and used at each location or node, and data are distributed across all nodes. Each node in the distributed system stores a portion of the data, and the DBMS coordinates data access and management across the distributed environment. This configuration enables scalability, fault tolerance, and load balancing. Option C: A different DBMS is used at each location and data are not distributed across all nodes. This scenario represents a heterogeneous environment where different DBMS software is used at each location, but the data may not be distributed across all nodes. In such cases, data distribution may be selective or centralized, and the use of different DBMS platforms introduces additional complexity in data management and integration. Option D: A different DBMS is used at each location and data are distributed across all nodes. This option combines aspects of both homogeneous and heterogeneous distributed databases. It describes a scenario where different DBMS software is used at each location, but data are still distributed across all nodes. This configuration can introduce challenges related to interoperability and data integration between disparate DBMS platforms. Therefore, in the context of a homogeneous distributed database, the correct option is The same DBMS is used at each location and data are distributed across all nodes (Option B)."
    keyConcept: Distributed Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 9
    question: Replication should be used when which of the following exist?
    options:
      - When transmission speeds and capacity in a network prohibit frequent refreshing of large tables.
      - When using many nodes with different operating systems and DBMSs and database designs.
      - The application's data can be somewhat out-of-date.
      - All of the above.
    answer: 3
    explanation: "Replication in a distributed database system is a technique used to create and maintain copies of data across multiple nodes or sites. It offers several benefits and is typically employed under specific conditions. Option A: When transmission speeds and capacity in a network prohibit frequent refreshing of large tables. This condition suggests that replication should be used when network limitations, such as slow transmission speeds or limited bandwidth capacity, make it impractical to frequently refresh or update large tables across distributed nodes. Replication allows data to be locally available at each node, reducing the need for frequent data transfers over the network and mitigating the impact of network constraints on performance. Option B: When using many nodes with different operating systems and DBMSs and database designs. In heterogeneous distributed environments where nodes may have different operating systems, Database Management Systems (DBMSs), or database designs, replication can facilitate data access and interoperability. By replicating data across diverse nodes, organizations can ensure data availability and consistency regardless of the underlying infrastructure or software variations. Replication helps in standardizing data access and reducing compatibility issues across heterogeneous environments. Option C: The application's data can be somewhat out-of-date. When the application's requirements permit the use of somewhat out-of-date data, replication can be beneficial. Replication allows data copies to be distributed and updated asynchronously, which may introduce a delay in data synchronization across nodes. This delay in data propagation can result in slightly outdated data at some nodes but can improve overall system performance and availability by reducing network overhead and latency. Option D: All of the above. All the mentioned conditions—network constraints, heterogeneous environments, and tolerance for somewhat out-of-date data—are situations where replication can be beneficial in a distributed database system. Each condition highlights specific scenarios where replication addresses challenges related to performance, interoperability, and data consistency. Therefore, in the context of when replication should be used in a distributed database system, the correct option is All of the above (Option D)."
    keyConcept: Distributed Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 10
    question: Storing a separate copy of the database at multiple locations is which of the following?
    options:
      - Data Replication
      - Horizontal Partitioning
      - Vertical Partitioning
      - Horizontal and Vertical Partitioning
    answer: 0
    explanation: "Storing a separate copy of the database at multiple locations is known as data replication . Option A: Data Replication Data replication involves creating and maintaining duplicate copies of the entire database or specific portions of it across multiple locations or nodes in a distributed database system. Each copy, or replica, contains the same data, and updates or modifications to the data are propagated to all replicas to ensure consistency. Replication improves data availability, fault tolerance, and scalability by allowing local access to data and reducing the impact of network failures or node outages. It also enhances performance by distributing query processing and reducing the need for data transfer across network links. Option B: Horizontal Partitioning Horizontal partitioning, also known as sharding, involves dividing a large table into smaller subsets of rows, where each subset is stored at a different location or node in the distributed system. This technique is used to distribute data horizontally across nodes based on a partitioning key, such as a range of values or a hash function. Horizontal partitioning aims to improve scalability and performance by distributing data and query processing across multiple nodes, but it does not involve creating separate copies of the entire database at each location. Option C: Vertical Partitioning Vertical partitioning involves splitting a table into smaller tables with fewer columns, where each smaller table contains a subset of the original columns. This technique is used to optimize storage and improve query performance by organizing related columns together and reducing data redundancy. Vertical partitioning does not entail storing separate copies of the database at multiple locations. Option D: Horizontal and Vertical Partitioning This option refers to a combination of horizontal and vertical partitioning techniques, where data is distributed both horizontally (across nodes) and vertically (by columns). It aims to achieve fine-grained data distribution and optimization based on specific access patterns and workload characteristics. However, it does not describe the practice of storing separate copies of the entire database at multiple locations. Therefore, in the context of storing a separate copy of the database at multiple locations in a distributed database system, the correct option is Data Replication (Option A)."
    keyConcept: Distributed Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 11
    question: A distributed database is which of the following?
    options:
      - A single logical database that is spread to multiple locations and is interconnected by a network
      - A loose collection of file that is spread to multiple locations and is interconnected by a network
      - A single logical database that is limited to one location.
      - A loose collection of file that is limited to one location.
    answer: 0
    explanation: "A distributed database is a single logical database that is spread across multiple locations and interconnected by a network, enabling distributed data processing and access. Option A: A single logical database that is spread to multiple locations and is interconnected by a network This option correctly describes a distributed database. It emphasizes that although the database is distributed across multiple locations, it functions as a single logical unit, allowing users to access and manipulate data as if it were stored in a centralized location. The distributed nature of the database enables data sharing, replication, and distributed query processing over a network. Option B: A loose collection of file that is spread to multiple locations and is interconnected by a network This option describes a distributed file system rather than a distributed database. In a distributed file system, files are distributed across multiple locations and interconnected by a network, but there is no centralized control or management of data as in a distributed database. Option C: A single logical database that is limited to one location This option describes a centralized database rather than a distributed database. In a centralized database, all data is stored and managed within a single location or server, without distributed storage or processing capabilities. Option D: A loose collection of file that is limited to one location This option describes a local file system rather than a distributed database. In a local file system, files are stored and managed within a single location or device, with no distribution of data across multiple locations. Therefore, in response to the question, the correct option is Option A: A single logical database that is spread to multiple locations and is interconnected by a network."
    keyConcept: Distributed Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 12
    question: A semijoin is which of the following?
    options:
      - Only the joining attributes are sent from one site to another and then all of the rows are returned.
      - All of the attributes are sent from one site to another and then only the required rows are returned.
      - Only the joining attributes are sent from one site to another and then only the required rows are returned.
      - None of the above
    answer: 2
    explanation: "A semijoin is a relational operation used in distributed database systems to reduce the amount of data transferred between sites while performing join operations. Option A: Only the joining attributes are sent from one site to another and then all of the rows are returned. This option describes a scenario where only the joining attributes are transmitted from one site to another, but all rows from the joined tables are returned. However, in a semijoin operation, only the required rows from one table (the outer table) are returned, not all rows. Option B: All of the attributes are sent from one site to another and then only the required rows are returned. This option suggests that all attributes from one site are transmitted to another, and then only the required rows are returned. However, in a semijoin operation, only the joining attributes are transmitted, not all attributes. Option C: Only the joining attributes are sent from one site to another and then only the required rows are returned. This option accurately describes a semijoin operation. In a semijoin, only the joining attributes from one table (the outer table) are sent to another site, where they are used to filter the rows of the other table (the inner table). Only the rows from the inner table that match the joining attributes are returned, reducing the amount of data transferred between sites. Therefore, in the context of a semijoin operation in a distributed database system, the correct option is Only the joining attributes are sent from one site to another and then only the required rows are returned (Option C)."
    keyConcept: Distributed Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 13
    question: Which of the following is a disadvantage of replication?
    options:
      - Reduced network traffic
      - If the database fails at one site, a copy can be located at another site.
      - Each site must have the same storage capacity.
      - Each transaction may proceed without coordination across the network.
    answer: 2
    explanation: "While replication offers several advantages in a distributed database system, it also comes with certain disadvantages or limitations. Option A: Reduced network traffic This option describes a potential advantage of replication rather than a disadvantage. Replication can indeed reduce network traffic by allowing local access to data copies, thereby minimizing the need for data transfer across network links. Option B: If the database fails at one site, a copy can be located at another site. This option highlights a benefit of replication in terms of fault tolerance and high availability. Having copies of the database at multiple sites ensures data redundancy and resilience against failures. It does not represent a disadvantage of replication. Option C: Each site must have the same storage capacity. This option correctly identifies a disadvantage of replication. In a replication setup, each site hosting a copy of the database must have sufficient storage capacity to accommodate the replicated data. Ensuring uniform storage capacity across all sites can be challenging and may lead to resource constraints or inefficiencies, especially in heterogeneous environments where sites have different storage capabilities or requirements. Option D: Each transaction may proceed without coordination across the network. This option describes a characteristic of loosely coupled distributed systems rather than a specific disadvantage of replication. In distributed databases with replication, transactions may indeed proceed independently at each site without requiring immediate coordination across the network. While this decentralization of transaction processing can improve performance and scalability, it also introduces complexities related to maintaining data consistency and isolation. Therefore, in the context of disadvantages of replication in a distributed database system, the correct option is Each site must have the same storage capacity (Option C)."
    keyConcept: Distributed Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: A distributed database can use which of the following strategies?
    options:
      - Totally centralized at one location and accessed by many sites
      - Partially or totally replicated across sites
      - Partitioned into segments at different sites
      - All of the above
    answer: 3
    explanation: "A distributed database can employ various strategies to manage its data across multiple sites. Option A: Totally centralized at one location and accessed by many sites In this strategy, although the database is centralized at one location, it is accessed by multiple sites. This approach may involve having a central server that holds the entire database, and other sites access this central database over a network. While it simplifies data management and ensures data consistency, it can lead to network congestion and single points of failure. Option B: Partially or totally replicated across sites Replication involves creating and maintaining copies of data across multiple sites. In a distributed database, data can be partially or entirely replicated across sites to improve data availability, fault tolerance, and performance. Replication allows local access to data, reducing the need for network communication and enhancing responsiveness. However, it requires mechanisms to ensure data consistency among replicas. Option C: Partitioned into segments at different sites Partitioning, also known as sharding, involves dividing the database into segments or partitions, with each partition stored at a different site. This strategy aims to distribute data and workload evenly across sites, improving scalability and performance. By partitioning data, queries can be executed locally on the site where the relevant data resides, reducing network overhead and enhancing efficiency. Option D: All of the above All the mentioned strategies—centralization, replication, and partitioning—are viable approaches for managing data in a distributed database. Depending on the requirements of the application, a distributed database system may utilize one or a combination of these strategies to achieve its goals, such as improving performance, availability, and fault tolerance. Therefore, in the context of a distributed database, the correct option is All of the above (Option D)."
    keyConcept: Distributed Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 15
    question: Which of the following is not one of the stages in the evolution of distributed DBMS?
    options:
      - Unit of work
      - Remote unit of work
      - Distributed unit of Work
      - Distributed request
    answer: 3
    explanation: "The evolution of distributed Database Management Systems (DBMS) involves several stages, each representing advancements in architecture and functionality to support distributed data processing. Option A: Unit of work The concept of a unit of work represents the earliest stage in the evolution of distributed DBMS. In this stage, transactions are processed as atomic units of work within a single centralized database system. Transactions are executed sequentially, and concurrency control is limited to within the boundaries of a single database. Option B: Remote unit of work The stage of remote unit of work builds upon the concept of a unit of work by introducing the capability to execute transactions that involve accessing data located on remote sites. In this stage, transactions may span multiple nodes or sites in a distributed environment, but the processing is still coordinated by a central authority. Option C: Distributed unit of work The distributed unit of work stage represents a further advancement where transactions can be processed independently at each participating node or site in a distributed system. Transactions are decomposed into subtransactions, and each subtransaction can be executed autonomously at its respective node. Coordination and synchronization mechanisms are implemented to ensure consistency and isolation across distributed transactions. Option D: Distributed request This option does not correspond to a recognized stage in the evolution of distributed DBMS. While distributed requests are integral to distributed database systems, they are typically associated with the execution of transactions or operations rather than representing a distinct evolutionary stage. Therefore, in the context of the stages in the evolution of distributed DBMS, the correct option is Distributed request (Option D)."
    keyConcept: Distributed Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 16
    question: With failure transparency, all of the actions of a transaction are committed or none of them are committed.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "With failure transparency in a distributed database system, all actions of a transaction are committed or none of them are committed, ensuring transaction atomicity and consistency even in the event of failures. Option A: True This option correctly describes the principle of failure transparency in distributed transactions. Failure transparency guarantees that if a transaction encounters an error or failure at any point during its execution, all the actions performed by the transaction are rolled back or aborted to maintain data consistency and integrity. This ensures that the database remains in a consistent state despite failures and that partial updates or inconsistencies are avoided. Option B: False This option contradicts the concept of failure transparency. If transactions were not subject to failure transparency, it would mean that the system allows partial updates or inconsistent states to persist in the database, which could lead to data corruption or integrity violations. In distributed databases, failure transparency is a fundamental requirement to ensure transaction reliability and correctness. Therefore, in the context of failure transparency in distributed database systems, the correct option is True (Option A)."
    keyConcept: Distributed Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 17
    question: Each site (or node) in a distributed system is subject to the same types of failure as in a centralized system.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "In a distributed system, each site or node is subject to the same types of failure as in a centralized system, including hardware failures, software failures, network failures, and human errors. Option A: True This option correctly states that each site or node in a distributed system can experience various types of failures similar to those encountered in a centralized system. These failures can include hardware failures such as disk crashes or memory errors, software failures such as bugs or crashes in the operating system or application software, network failures such as link failures or packet loss, and human errors such as misconfiguration or accidental data deletion. Dealing with these failures is essential for ensuring the reliability, availability, and fault tolerance of the distributed system. Option B: False This option incorrectly suggests that distributed systems are immune to certain types of failures or have different failure characteristics compared to centralized systems. However, distributed systems face many of the same challenges and vulnerabilities as centralized systems, and failure management is a critical aspect of distributed system design and operation. Therefore, in the context of failures in distributed systems compared to centralized systems, the correct option is True (Option A)."
    keyConcept: Distributed Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 18
    question: Replication may use either synchronous or asynchronous distributed database technologies, although asynchronous technologies are more typical in a replicated environment.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "Replication in distributed database systems can utilize either synchronous or asynchronous technologies for data propagation and synchronization. However, asynchronous technologies are more commonly employed in a replicated environment due to their advantages in terms of performance and scalability. Option A: True This option correctly states that replication may utilize both synchronous and asynchronous distributed database technologies. Synchronous replication involves immediate data propagation and acknowledgment of updates across all replicas before committing a transaction, ensuring data consistency but potentially introducing latency and performance overhead. Asynchronous replication, on the other hand, allows updates to be propagated to replicas with a delay, enabling faster transaction processing but potentially leading to data inconsistencies or discrepancies between replicas. While both approaches have their benefits and trade-offs, asynchronous technologies are more prevalent in replicated environments due to their ability to provide higher performance and scalability. Option B: False This option contradicts the statement provided in the question. It suggests that only synchronous technologies are typical in a replicated environment, which is not accurate. While synchronous replication is suitable for scenarios requiring strict data consistency and integrity, asynchronous replication is more commonly used in replicated environments due to its advantages in terms of performance, scalability, and fault tolerance. Therefore, in the context of replication technologies in distributed database systems, the correct option is True (Option A)."
    keyConcept: Distributed Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 19
    question: Synchronization for pull replication is less disruptive and occurs only when needed by each site, not when a central master site thinks it is best to update.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "In pull replication, synchronization is less disruptive compared to other replication methods because updates occur only when needed by each site, rather than being dictated by a central master site. Option A: True This option correctly describes the characteristic of pull replication. In pull replication, individual sites or nodes initiate the synchronization process based on their own needs or schedules. When a site requires updates from other nodes, it pulls the necessary data or changes from those nodes. This approach allows each site to control the timing and frequency of synchronization, reducing the potential for disruption to ongoing operations. Pull replication is particularly suitable for distributed environments where network bandwidth or resource constraints may limit the feasibility of continuous or frequent updates from a central master site. Option B: False This option contradicts the statement provided in the question. It suggests that synchronization in pull replication is more disruptive or occurs according to a schedule determined by a central master site, which is not accurate. Pull replication is specifically designed to offer flexibility and minimize disruption by allowing individual sites to trigger synchronization as needed, based on local requirements and conditions. Therefore, in the context of synchronization in pull replication in distributed database systems, the correct option is True (Option A)."
    keyConcept: Distributed Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 20
    question: With asynchronous technology, if any copy of a data item is updated anywhere on the network, the same update is immediately applied to all other copies or it is aborted.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: "In asynchronous replication technology, updates to data items are not immediately applied to all other copies across the network. Instead, updates are propagated with a delay, and inconsistencies between copies may exist temporarily. Option A: True This option incorrectly describes the behavior of asynchronous replication. It suggests that updates are immediately applied to all copies of a data item across the network, which is characteristic of synchronous replication rather than asynchronous replication. In synchronous replication, updates are propagated synchronously, ensuring that all copies are kept consistent in real-time. Option B: False This option correctly describes the behavior of asynchronous replication. In asynchronous replication, updates to data items are not immediately applied to all copies across the network. Instead, updates are propagated asynchronously with a delay. As a result, temporary inconsistencies or lag may exist between copies until updates are fully propagated to all nodes. Therefore, in the context of asynchronous replication technology in distributed database systems, the correct option is False (Option B)."
    keyConcept: Distributed Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 21
    question: Databases that are stored on computers at multiple locations and are not interconnected by a network are known as distributed databases.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: "The statement is incorrect. Databases that are stored on computers at multiple locations and are not interconnected by a network are not considered distributed databases. Distributed databases, by definition, involve data stored on multiple interconnected computers or nodes, allowing for distributed data processing and access. Option A: True This option contradicts the statement provided in the question. Distributed databases require interconnected computers or nodes to enable communication and data sharing among different locations. Therefore, the statement \"Databases that are stored on computers at multiple locations and are not interconnected by a network are known as distributed databases\" is false. Option B: False This option correctly identifies the statement as false. The absence of network connectivity between computers at multiple locations disqualifies the scenario from being classified as a distributed database. Distributed databases rely on network communication to coordinate data access, sharing, and processing across distributed locations. Therefore, in response to the question, the correct option is False (Option B)."
    keyConcept: Distributed Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 22
    question: An increasingly popular option for data distribution as well as for fault tolerance of any database is to store a separate copy of the database at each of two or more sites.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "The statement is true. Storing a separate copy of the database at each of two or more sites is indeed an increasingly popular option for data distribution and fault tolerance in databases, particularly in distributed database environments. Option A: True This option correctly affirms the statement provided in the question. Storing separate copies of the database at multiple sites enhances data distribution, availability, and fault tolerance. Each site maintains its own copy of the database, allowing for local access to data and reducing dependencies on a single central database server. In the event of a site failure or network partition, other sites can continue to operate independently, ensuring continuous access to data and minimal disruption to database operations. Option B: False This option contradicts the statement provided in the question. Storing separate copies of the database at multiple sites is indeed a popular strategy for improving data distribution and fault tolerance in distributed database systems. It offers benefits such as improved data availability, reduced network dependencies, and enhanced resilience against site failures. Therefore, in response to the question, the correct option is True (Option A)."
    keyConcept: Distributed Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 23
    question: Asynchronous technology can result in unsatisfactorily slow response time because the distributed DBMS is spending considerable time checking that an update is accurately and completely propagated across the network.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "The statement is true. Asynchronous replication technology can lead to unsatisfactorily slow response times because the distributed DBMS spends considerable time ensuring that updates are accurately and completely propagated across the network. Option A: True This option correctly affirms the statement provided in the question. In asynchronous replication, updates are propagated across the network with a delay, and the distributed DBMS must verify that updates are accurately and completely propagated to all replicas before committing the transaction. This verification process can introduce latency and overhead, resulting in slower response times, especially for transactions that require immediate confirmation or synchronization across distributed nodes. Option B: False This option contradicts the statement provided in the question. Asynchronous replication technology, by its nature, introduces delays in propagating updates across the network to achieve eventual consistency. These delays can indeed lead to slower response times, particularly in scenarios where immediate data consistency or synchronization is required. Therefore, in response to the question, the correct option is True (Option A)."
    keyConcept: Distributed Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 24
    question: A distributed unit of work allows various statements within a unit of work to refer to multiple remote DBMS locations.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "The statement is true. In a distributed unit of work, various statements within a unit of work can indeed refer to multiple remote DBMS locations, allowing for coordinated transactions across distributed databases. Option A: True This option correctly affirms the statement provided in the question. A distributed unit of work enables transactions to span multiple remote DBMS locations, allowing for coordinated data access and updates across distributed databases. This capability is essential for maintaining data consistency and integrity in distributed database environments, where transactions may involve accessing or modifying data stored on different nodes or sites. Option B: False This option contradicts the statement provided in the question. A distributed unit of work is specifically designed to support transactions that involve multiple remote DBMS locations. By allowing various statements within a unit of work to refer to multiple remote locations, distributed units of work facilitate the execution of distributed transactions and ensure that changes to the database are coordinated and consistent across all participating nodes. Therefore, in response to the question, the correct option is True (Option A)."
    keyConcept: Distributed Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 25
    question: The purpose of timestamping is to avoid the use of locks.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: "The statement is false. The purpose of timestamping in concurrency control is not to avoid the use of locks, but rather to provide a mechanism for ordering and scheduling concurrent transactions. Option A: True This option contradicts the statement provided in the question. Timestamping is not intended to replace locks; rather, it is a concurrency control mechanism used in conjunction with locks or other synchronization techniques to manage access to shared resources in a distributed database system. Timestamping assigns unique timestamps to transactions, allowing the system to determine the order in which transactions should be executed and to detect and resolve conflicts that may arise due to concurrent access to data. Option B: False This option correctly identifies the statement as false. While timestamping is an important aspect of concurrency control in distributed databases, its purpose is not to eliminate locks. Locks are still commonly used in conjunction with timestamping to ensure data consistency and isolation by preventing conflicting transactions from accessing or modifying the same data simultaneously. Therefore, in response to the question, the correct option is False (Option B)."
    keyConcept: Distributed Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 26
    question: Data replication is favored where most process requests are read-only and where the data are relatively static.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "The statement is true. Data replication is indeed favored in scenarios where most process requests are read-only and where the data are relatively static, as it offers benefits such as improved read performance, enhanced fault tolerance, and increased availability. Option A: True This option correctly affirms the statement provided in the question. Data replication is advantageous in environments where the majority of process requests involve reading data rather than writing or updating it. By replicating data across multiple nodes or sites, read requests can be serviced locally, leading to faster response times and reduced network latency. Additionally, data replication enhances fault tolerance by ensuring that copies of data are available on multiple nodes, reducing the risk of data loss or unavailability due to node failures. Furthermore, in scenarios where the data are relatively static and do not change frequently, data replication provides a cost-effective solution for distributing data and improving access performance without the need for complex synchronization mechanisms. Option B: False This option contradicts the statement provided in the question. Data replication is indeed favored in scenarios where read-only process requests are predominant and where the data are relatively static. In such cases, data replication offers advantages in terms of read performance, fault tolerance, and availability, making it a suitable strategy for improving data access and reliability in distributed database environments. Therefore, in response to the question, the correct option is True (Option A)."
    keyConcept: Distributed Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 27
    question: The cost to perform a snapshot refresh may depend on whether the snapshot is simple or complex.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "The statement is true. The cost to perform a snapshot refresh may indeed depend on whether the snapshot is simple or complex, as complex snapshots may require more resources and time for refreshing compared to simple snapshots. Option A: True This option correctly affirms the statement provided in the question. The cost associated with performing a snapshot refresh can vary based on several factors, including the complexity of the snapshot. A simple snapshot, which captures a straightforward representation of data without extensive transformations or filtering, may be relatively inexpensive to refresh. In contrast, a complex snapshot, which involves aggregations, joins, or other computationally intensive operations, may require more resources and time for refreshing. The complexity of the snapshot impacts the amount of processing and data movement required during the refresh process, which in turn can affect the overall cost in terms of time, CPU utilization, and network bandwidth. Option B: False This option contradicts the statement provided in the question. The cost to perform a snapshot refresh can indeed vary based on the complexity of the snapshot. Complex snapshots may require more resources and time for refreshing compared to simple snapshots, as they involve additional processing and data manipulation tasks. Therefore, the complexity of the snapshot is an important factor to consider when assessing the cost and performance implications of snapshot refresh operations. Therefore, in response to the question, the correct option is True (Option A)."
    keyConcept: Distributed Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 28
    question: The semijoin approach saves network traffic.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "The statement is true. The semijoin approach can indeed save network traffic by reducing the amount of data transferred between distributed database nodes. Option A: True This option correctly affirms the statement provided in the question. The semijoin operation involves sending only the attributes needed for join conditions from one site to another, resulting in reduced data transmission over the network. Instead of transferring entire relations, the semijoin operation sends only the necessary attributes, allowing the receiving site to perform join operations locally and retrieve only the relevant rows. By minimizing the amount of data transmitted between nodes, the semijoin approach helps to conserve network bandwidth and improve overall query performance in distributed database systems. Option B: False This option contradicts the statement provided in the question. The semijoin approach is specifically designed to reduce network traffic by sending only the required attributes for join conditions between distributed database nodes. By minimizing the amount of data transferred over the network, the semijoin operation can help improve query performance and scalability in distributed database environments. Therefore, in response to the question, the correct option is True (Option A)."
    keyConcept: Distributed Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 29
    question: In a semijoin, only the joining attribute is sent from one site to another, and then only the required rows are returned.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "The statement is true. In a semijoin operation, only the joining attribute is sent from one site to another, and then only the required rows are returned, reducing the amount of data transmitted between distributed database nodes. Option A: True This option correctly affirms the statement provided in the question. In a semijoin operation, only the attributes needed for join conditions (i.e., the joining attribute) are sent from one site to another. Once the receiving site receives the joining attribute, it performs a local join operation using its own data and returns only the rows that satisfy the join condition. By transmitting only the necessary attribute and minimizing data transfer between nodes, the semijoin approach helps reduce network traffic and improve query performance in distributed database systems. Option B: False This option contradicts the statement provided in the question. The semijoin operation is specifically designed to minimize network traffic by sending only the joining attribute between distributed database nodes. By transmitting only the required attribute for join conditions, the semijoin approach can optimize query processing and reduce the impact of data transfer overhead on distributed database performance. Therefore, in response to the question, the correct option is True (Option A)."
    keyConcept: Distributed Databases
    testedIn:
      - PPSC
      - FPSC
  - id: 30
    question: The problem of concurrency control is more complex in a distributed database.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "This option correctly affirms the statement provided in the question. In a distributed database system, concurrency control is more complex due to several factors: Distributed Transactions: Transactions may involve accessing or modifying data stored on multiple nodes, requiring coordination and synchronization across distributed sites. Network Latency: Network delays and communication overhead can impact the performance of distributed transactions and introduce challenges in ensuring timely access to shared resources. Global Consistency: Maintaining global consistency across distributed nodes while allowing concurrent access to data requires sophisticated concurrency control mechanisms and coordination protocols. Overall, the distributed nature of the database system introduces additional complexities in managing concurrency and ensuring data integrity compared to a centralized database environment. Option B: False This option contradicts the statement provided in the question. Concurrency control in a distributed database is indeed more complex due to the distributed nature of the system and the challenges associated with coordinating concurrent access to shared resources across multiple nodes. Unlike a centralized database, a distributed database environment requires additional mechanisms and protocols to manage concurrency and maintain data consistency in a distributed setting. Therefore, in response to the question, the correct option is True (Option A)."
    keyConcept: Distributed Databases
    testedIn:
      - PPSC
      - FPSC
---


