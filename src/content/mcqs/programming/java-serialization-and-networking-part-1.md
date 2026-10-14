---
title: Java Serialization And Networking — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Java Serialization And Networking — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: java-serialization-and-networking-part-1
topicName: Java Serialization And Networking — Part 1
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
    question: What will be the output of the following Java code? import java.net.*; class networking { public static void main(String[] args) throws MalformedURLException { URL obj = new URL("https://www.example.com/javamcq"); System.out.print(obj.getProtocol()); } }
    options:
      - http
      - https
      - www
      - com
    answer: 1
    explanation: "The correct answer is Option B: https . Let's break down why: The code uses the java.net.URL class, which is designed to work with URLs (Uniform Resource Locators). A URL is essentially an address for a resource on the internet, like a webpage. The line URL obj = new URL(\"https://www.example.com/javamcq\"); creates a new URL object named 'obj'. This object represents the URL \"https://www.example.com/javamcq\". The obj.getProtocol() method is called. This method specifically extracts the protocol part of the URL. The protocol is the first part of a URL that indicates how the data will be transferred. Common protocols are \"http\" and \"https\". In the given URL \"https://www.example.com/javamcq\", the protocol is \"https\". Therefore, obj.getProtocol() will return \"https\", which is then printed to the console using System.out.print() ."
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: What is Java Serialization?
    options:
      - The process of converting an object into a byte stream
      - The process of converting a byte stream into an object
      - The process of converting an object into a text file
      - The process of converting a text file into an object
    answer: 0
    explanation: The process of converting an object into a byte stream is the correct answer to “What is Java Serialization”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Which interface in Java is used to mark a class as serializable?
    options:
      - "`MarkSerializable`"
      - "`SerializableClass`"
      - "`Serialize`"
      - "`Serializable`"
    answer: 3
    explanation: "`Serializable` is the correct answer to “Which interface in Java is used to mark a class as serializable”. This question is standard in competitive examination syllabi for Java Serialization And Networking."
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What is the purpose of the `ObjectOutputStream` class in Java Serialization?
    options:
      - To read objects from an input stream
      - To convert objects to text format
      - To write objects to an output stream
      - To serialize primitive data types
    answer: 2
    explanation: To write objects to an output stream is the correct answer to “What is the purpose of the `ObjectOutputStream` class in Java Serialization”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: In Java Serialization, what is the purpose of the `transient` keyword when applied to an instance variable?
    options:
      - It indicates that the variable is mandatory for serialization
      - It indicates that the variable should not be serialized
      - It indicates that the variable should be ignored during deserialization
      - None of These
    answer: 1
    explanation: It indicates that the variable should not be serialized is the correct answer to “In Java Serialization, what is the purpose of the `transient` keyword when applied to an instance variable”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What is deserialization in Java Serialization?
    options:
      - The process of converting a text file into an object
      - The process of converting an object into a text file
      - The process of converting a byte stream back into an object
      - The process of converting an object into a byte stream
    answer: 2
    explanation: The process of converting a byte stream back into an object is the correct answer to “What is deserialization in Java Serialization”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: Which class in Java is responsible for deserialization during Java Serialization?
    options:
      - "`Serializable`"
      - "`DeserializationHandler`"
      - "`Deserialize`"
      - "`ObjectInputStream`"
    answer: 3
    explanation: "`ObjectInputStream` is the correct answer to “Which class in Java is responsible for deserialization during Java Serialization”. This question is standard in competitive examination syllabi for Java Serialization And Networking."
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: In Java Networking, what is the purpose of the `Socket` class?
    options:
      - To create a client socket for communication with a server
      - To create a server socket for listening to client connections
      - To create a thread for concurrent execution
      - To handle exceptions in networking
    answer: 0
    explanation: To create a client socket for communication with a server is the correct answer to “In Java Networking, what is the purpose of the `Socket` class”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What is a port number in Java Networking?
    options:
      - A type of IP address
      - A special code used to encrypt data
      - A unique identifier for a host
      - A numerical identifier for a specific process on a host
    answer: 3
    explanation: A numerical identifier for a specific process on a host is the correct answer to “What is a port number in Java Networking”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: Which class in Java Networking is used to represent a server socket that listens for incoming client connections?
    options:
      - "`SocketServer`"
      - "`Server`"
      - "`ServerSocket`"
      - "`SocketListener`"
    answer: 2
    explanation: "`ServerSocket` is the correct answer to “Which class in Java Networking is used to represent a server socket that listens for incoming client connections”. This question is standard in competitive examination syllabi for Java Serialization And Networking."
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: In Java Networking, what is the purpose of the `URL` class?
    options:
      - To establish a socket connection
      - To represent a Uniform Resource Locator
      - To serialize objects
      - None of These
    answer: 1
    explanation: To represent a Uniform Resource Locator is the correct answer to “In Java Networking, what is the purpose of the `URL` class”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: Which protocol is commonly used for sending emails in Java Networking?
    options:
      - UDP (User Datagram Protocol)
      - FTP (File Transfer Protocol)
      - SMTP (Simple Mail Transfer Protocol)
      - HTTP (Hypertext Transfer Protocol)
    answer: 2
    explanation: SMTP (Simple Mail Transfer Protocol) is the correct answer to “Which protocol is commonly used for sending emails in Java Networking”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: In Java Networking, what is the purpose of the `HttpURLConnection` class?
    options:
      - To establish a secure socket connection
      - To handle FTP file transfers
      - To serialize objects over HTTP
      - To perform HTTP network operations
    answer: 3
    explanation: To perform HTTP network operations is the correct answer to “In Java Networking, what is the purpose of the `HttpURLConnection` class”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What is the primary use of the `DatagramSocket` class in Java Networking?
    options:
      - To send and receive datagrams over a connectionless UDP protocol
      - To establish a secure socket connection
      - To handle HTTP requests
      - To serialize objects
    answer: 0
    explanation: To send and receive datagrams over a connectionless UDP protocol is the correct answer to “What is the primary use of the `DatagramSocket` class in Java Networking”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: In Java Networking, what is the purpose of the `InetAddress` class?
    options:
      - To serialize objects
      - To create a socket connection
      - To send HTTP requests
      - To represent an IP address
    answer: 3
    explanation: To represent an IP address is the correct answer to “In Java Networking, what is the purpose of the `InetAddress` class”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What is a datagram in Java Networking?
    options:
      - A type of server socket
      - A secure connection
      - A small packet of data sent over a network
      - A serialized object
    answer: 2
    explanation: A small packet of data sent over a network is the correct answer to “What is a datagram in Java Networking”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: In Java Networking, what is the purpose of the `DatagramPacket` class?
    options:
      - To handle HTTP requests
      - To represent a packet of data for use with UDP communication
      - To serialize objects
      - None of These
    answer: 1
    explanation: To represent a packet of data for use with UDP communication is the correct answer to “In Java Networking, what is the purpose of the `DatagramPacket` class”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: Which class in Java Networking is used for reading and writing streams of bytes?
    options:
      - "`HttpURLConnection`"
      - "`ServerSocket`"
      - "`InputStream` and `OutputStream`"
      - "`Socket`"
    answer: 2
    explanation: "`InputStream` and `OutputStream` is the correct answer to “Which class in Java Networking is used for reading and writing streams of bytes”. This question is standard in competitive examination syllabi for Java Serialization And Networking."
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: What is the purpose of the `URLConnection` class in Java Networking?
    options:
      - To handle exceptions in networking
      - To represent a UDP socket
      - To serialize objects
      - To represent a connection to a resource on the internet
    answer: 3
    explanation: To represent a connection to a resource on the internet is the correct answer to “What is the purpose of the `URLConnection` class in Java Networking”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: Which protocol is commonly used for file transfer in Java Networking?
    options:
      - FTP (File Transfer Protocol)
      - SMTP (Simple Mail Transfer Protocol)
      - HTTP (Hypertext Transfer Protocol)
      - UDP (User Datagram Protocol)
    answer: 0
    explanation: FTP (File Transfer Protocol) is the correct answer to “Which protocol is commonly used for file transfer in Java Networking”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: In Java Networking, what is the purpose of the `MulticastSocket` class?
    options:
      - To serialize objects
      - To establish a secure socket connection
      - To handle HTTP requests
      - To send and receive multicast datagrams
    answer: 3
    explanation: To send and receive multicast datagrams is the correct answer to “In Java Networking, what is the purpose of the `MulticastSocket` class”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What is a multicast in Java Networking?
    options:
      - Sending data to a single recipient
      - Broadcasting data to all connected clients
      - Sending data to a group of interested receivers
      - A type of socket
    answer: 2
    explanation: Sending data to a group of interested receivers is the correct answer to “What is a multicast in Java Networking”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: In Java Serialization, what happens if a serialized class changes between serialization and deserialization?
    options:
      - The program crashes
      - An `InvalidClassException` is thrown
      - A warning message is displayed
      - None of These
    answer: 1
    explanation: An `InvalidClassException` is thrown is the correct answer to “In Java Serialization, what happens if a serialized class changes between serialization and deserialization”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: Which method is used to customize the serialization process in Java?
    options:
      - "`customSerialize()` and `customDeserialize()`"
      - "`saveObject()` and `loadObject()`"
      - "`writeObject()` and `readObject()`"
      - "`serialize()` and `deserialize()`"
    answer: 2
    explanation: "`writeObject()` and `readObject()` is the correct answer to “Which method is used to customize the serialization process in Java”. This question is standard in competitive examination syllabi for Java Serialization And Networking."
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: In Java Serialization, what is the purpose of the `serialVersionUID` field?
    options:
      - To indicate that a class is serializable
      - To store serialized data
      - To handle exceptions during serialization
      - To provide a version number for the serialized class
    answer: 3
    explanation: To provide a version number for the serialized class is the correct answer to “In Java Serialization, what is the purpose of the `serialVersionUID` field”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: What is the purpose of the `java.net` package in Java?
    options:
      - It provides classes for network communication
      - It handles exceptions in networking
      - It provides GUI components
      - It is used for database operations
    answer: 0
    explanation: It provides classes for network communication is the correct answer to “What is the purpose of the `java.net` package in Java”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: Which Java class is used to represent a URL (Uniform Resource Locator)?
    options:
      - "`URLEncode`"
      - "`URI`"
      - "`URLConnection`"
      - "`URL`"
    answer: 3
    explanation: "`URL` is the correct answer to “Which Java class is used to represent a URL (Uniform Resource Locator)”. This question is standard in competitive examination syllabi for Java Serialization And Networking."
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: In Java Networking, what is the purpose of the `ServerSocket` class?
    options:
      - To connect to a web server
      - To send emails
      - To listen for incoming client connections
      - To read from a file
    answer: 2
    explanation: To listen for incoming client connections is the correct answer to “In Java Networking, what is the purpose of the `ServerSocket` class”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: Which protocol is commonly used for web communication in Java Networking?
    options:
      - SMTP (Simple Mail Transfer Protocol)
      - HTTP (Hypertext Transfer Protocol)
      - UDP (User Datagram Protocol)
      - None of These
    answer: 1
    explanation: HTTP (Hypertext Transfer Protocol) is the correct answer to “Which protocol is commonly used for web communication in Java Networking”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: In Java Networking, which class is used for creating a UDP socket?
    options:
      - "`MulticastSocket`"
      - "`ServerSocket`"
      - "`DatagramSocket`"
      - "`Socket`"
    answer: 2
    explanation: "`DatagramSocket` is the correct answer to “In Java Networking, which class is used for creating a UDP socket”. This question is standard in competitive examination syllabi for Java Serialization And Networking."
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: What is the primary use of the `java.io` package in Java?
    options:
      - It handles exceptions in networking
      - It provides data structures for collections
      - It is used for GUI programming
      - It provides classes for input and output operations
    answer: 3
    explanation: It provides classes for input and output operations is the correct answer to “What is the primary use of the `java.io` package in Java”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: Which of these methods is used to know the full URL of an URL object?
    options:
      - fullHost()
      - getHost()
      - ExternalForm()
      - toExternalForm()
    answer: 3
    explanation: toExternalForm() is the correct answer to “Which of these methods is used to know the full URL of an URL object”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: Which of these is a process of writing the state of an object to a byte stream?
    options:
      - Serialization
      - Externalization
      - File Filtering
      - All of the mentioned
    answer: 0
    explanation: Serialization is the correct answer to “Which of these is a process of writing the state of an object to a byte stream”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: Which of these methods is used to make raw MIME formatted string?
    options:
      - parse()
      - toString()
      - getString()
      - parseString()
    answer: 0
    explanation: parse() is the correct answer to “Which of these methods is used to make raw MIME formatted string”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: Which of these method is used to start a server thread?
    options:
      - run()
      - start()
      - runThread()
      - startThread()
    answer: 0
    explanation: run() is the correct answer to “Which of these method is used to start a server thread”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: Which of these method of httpd class is used to write UrlCacheEntry object into local disk?
    options:
      - writeDiskCache()
      - writetoDisk()
      - writeCache()
      - writeDiskEntry()
    answer: 0
    explanation: writeDiskCache() is the correct answer to “Which of these method of httpd class is used to write UrlCacheEntry object into local disk”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: Which of the following methods is used to avoid serialization of new class whose super class already implements Serialization?
    options:
      - writeObject()
      - readWriteObject()
      - writeReadObject()
      - unSerializaedObject()
    answer: 0
    explanation: writeObject() is the correct answer to “Which of the following methods is used to avoid serialization of new class whose super class already implements Serialization”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: Which of these class is used for operating on request from the client to the server?
    options:
      - http
      - httpDecoder
      - httpConnection
      - httpd
    answer: 3
    explanation: httpd is the correct answer to “Which of these class is used for operating on request from the client to the server”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: Which of these is a wrapper around everything associated with a reply from an http server?
    options:
      - HTTP
      - HttpResponse
      - HttpRequest
      - httpserver
    answer: 1
    explanation: HttpResponse is the correct answer to “Which of these is a wrapper around everything associated with a reply from an http server”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: Default Serialization process cannot be overridden.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “Default Serialization process cannot be overridden.”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
---


