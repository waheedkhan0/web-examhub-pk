---
title: Java Serialization And Networking — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Java Serialization And Networking — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: java-serialization-and-networking-part-2
topicName: Java Serialization And Networking — Part 2
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
    question: What is serialization?
    options:
      - Turning object in memory into stream of bytes
      - Turning stream of bytes into an object in memory
      - Turning object in memory into stream of bits
      - Turning stream of bits into an object in memory
    answer: 0
    explanation: Turning object in memory into stream of bytes is the correct answer to “What is serialization”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: What will be the output of the following Java code? import java.io.*; class streams { public static void main(String[] args) { try { FileOutputStream fos = new FileOutputStream("serial"); ObjectOutputStream oos = new ObjectOutputStream(fos); oos.writeInt(5); oos.flush(); oos.close(); } catch(Exception e) { System.out.println("Serialization" + e); System.exit(0); } try { int z; FileInputStream fis = new FileInputStream("serial"); ObjectInputStream ois = new ObjectInputStream(fis); z = ois.readInt(); ois.close(); System.out.println(x); } catch (Exception e) { System.out.print("deserialization"); System.exit(0); } } }
    options:
      - "5"
      - void
      - serialization
      - deserialization
    answer: 0
    explanation: 5 is the correct answer to “What will be the output of the following Java code? import java.io.*; class streams { public static void main(String[] args) { try { FileOutputStream fos = new FileOutputStream("serial"); ObjectOutputStream oos = new ObjectOutputStream(fos); oos.writeInt(5); oos.flush(); oos.close(); } catch(Exception e) { System.out.println("Serialization" + e); System.exit(0); } try { int z; FileInputStream fis = new FileInputStream("serial"); ObjectInputStream ois = new ObjectInputStream(fis); z = ois.readInt(); ois.close(); System.out.println(x); } catch (Exception e) { System.out.print("deserialization"); System.exit(0); } } }”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What will be the output of the following Java program? import java.io.*; class serialization { public static void main(String[] args) { try { Myclass object1 = new Myclass("Hello", -7, 2.1e10); FileOutputStream fos = new FileOutputStream("serial"); ObjectOutputStream oos = new ObjectOutputStream(fos); oos.writeObject(object1); oos.flush(); oos.close(); } catch(Exception e) { System.out.println("Serialization" + e); System.exit(0); } try { int x; FileInputStream fis = new FileInputStream("serial"); ObjectInputStream ois = new ObjectInputStream(fis); x = ois.readInt(); ois.close(); System.out.println(x); } catch (Exception e) { System.out.print("deserialization"); System.exit(0); } } } class Myclass implements Serializable { String s; int i; double d; Myclass(String s, int i, double d) { this.d = d; this.i = i; this.s = s; } }
    options:
      - "-7"
      - Hello
      - "2.1E10"
      - deserialization
    answer: 3
    explanation: deserialization is the correct answer to “What will be the output of the following Java program? import java.io.*; class serialization { public static void main(String[] args) { try { Myclass object1 = new Myclass("Hello", -7, 2.1e10); FileOutputStream fos = new FileOutputStream("serial"); ObjectOutputStream oos = new ObjectOutputStream(fos); oos.writeObject(object1); oos.flush(); oos.close(); } catch(Exception e) { System.out.println("Serialization" + e); System.exit(0); } try { int x; FileInputStream fis = new FileInputStream("serial"); ObjectInputStream ois = new ObjectInputStream(fis); x = ois.readInt(); ois.close(); System.out.println(x); } catch (Exception e) { System.out.print("deserialization"); System.exit(0); } } } class Myclass implements Serializable { String s; int i; double d; Myclass(String s, int i, double d) { this.d = d; this.i = i; this.s = s; } }”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: Which of these methods is used to know host of an URL?
    options:
      - host()
      - getHost()
    answer: 1
    explanation: getHost() is the correct answer to “Which of these methods is used to know host of an URL”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: Which of these interface extends DataOutput interface?
    options:
      - Serializable
      - Externalization
      - ObjectOutput
      - ObjectInput
    answer: 2
    explanation: ObjectOutput is the correct answer to “Which of these interface extends DataOutput interface”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What will be the output of the following Java code? import java.io.*; class serialization { public static void main(String[] args) { try { Myclass object1 = new Myclass("Hello", -7, 2.1e10); FileOutputStream fos = new FileOutputStream("serial"); ObjectOutputStream oos = new ObjectOutputStream(fos); oos.writeObject(object1); oos.flush(); oos.close(); } catch(Exception e) { System.out.println("Serialization" + e); System.exit(0); } try { int x; FileInputStream fis = new FileInputStream("serial"); ObjectInputStream ois = new ObjectInputStream(fis); x = ois.readInt(); ois.close(); System.out.println(x); } catch (Exception e) { System.out.print("deserialization"); System.exit(0); } } } class Myclass implements Serializable { String s; int i; double d; Myclass(String s, int i, double d) { this.d = d; this.i = i; this.s = s; } }
    options:
      - "-7"
      - Hello
      - "2.1E10"
      - deserialization
    answer: 3
    explanation: deserialization is the correct answer to “What will be the output of the following Java code? import java.io.*; class serialization { public static void main(String[] args) { try { Myclass object1 = new Myclass("Hello", -7, 2.1e10); FileOutputStream fos = new FileOutputStream("serial"); ObjectOutputStream oos = new ObjectOutputStream(fos); oos.writeObject(object1); oos.flush(); oos.close(); } catch(Exception e) { System.out.println("Serialization" + e); System.exit(0); } try { int x; FileInputStream fis = new FileInputStream("serial"); ObjectInputStream ois = new ObjectInputStream(fis); x = ois.readInt(); ois.close(); System.out.println(x); } catch (Exception e) { System.out.print("deserialization"); System.exit(0); } } } class Myclass implements Serializable { String s; int i; double d; Myclass(String s, int i, double d) { this.d = d; this.i = i; this.s = s; } }”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What type of members are not serialized?
    options:
      - Private
      - Protected
      - Static
      - Throwable
    answer: 2
    explanation: Static is the correct answer to “What type of members are not serialized”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: Which of these interface extends DataInput interface?
    options:
      - Serializable
      - Externalization
      - ObjectOutput
      - ObjectInput
    answer: 3
    explanation: ObjectInput is the correct answer to “Which of these interface extends DataInput interface”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: Which of these class is used to access actual bits or content information of a URL?
    options:
      - URL
      - URLDecoder
      - URLConnection
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “Which of these class is used to access actual bits or content information of a URL”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What will be the output of the following Java program? import java.net.*; public class networking { public static void main(String[] args) throws UnknownHostException { InetAddress obj1 = InetAddress.getByName("cisco.com"); InetAddress obj2 = InetAddress.getByName("example.com"); boolean x = obj1.equals(obj2); System.out.print(x); } }
    options:
      - "0"
      - "1"
      - "true"
      - "false"
    answer: 3
    explanation: false is the correct answer to “What will be the output of the following Java program? import java.net.*; public class networking { public static void main(String[] args) throws UnknownHostException { InetAddress obj1 = InetAddress.getByName("cisco.com"); InetAddress obj2 = InetAddress.getByName("example.com"); boolean x = obj1.equals(obj2); System.out.print(x); } }”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: Which of these method of DatagramPacket class is used to find the destination address?
    options:
      - findAddress()
      - getAddress()
      - Address()
      - whois()
    answer: 1
    explanation: getAddress() is the correct answer to “Which of these method of DatagramPacket class is used to find the destination address”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: What will be the output of the following Java program? import java.net.*; class networking { public static void main(String[] args) throws UnknownHostException { InetAddress obj1 = InetAddress.getByName("example.com"); InetAddress obj2 = InetAddress.getByName("example.com"); boolean x = obj1.equals(obj2); System.out.print(x); } }
    options:
      - "0"
      - "1"
      - "true"
      - "false"
    answer: 2
    explanation: true is the correct answer to “What will be the output of the following Java program? import java.net.*; class networking { public static void main(String[] args) throws UnknownHostException { InetAddress obj1 = InetAddress.getByName("example.com"); InetAddress obj2 = InetAddress.getByName("example.com"); boolean x = obj1.equals(obj2); System.out.print(x); } }”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: Which of these method of DatagramPacket is used to find the port number?
    options:
      - port()
      - getPort()
      - findPort()
      - recievePort()
    answer: 1
    explanation: getPort() is the correct answer to “Which of these method of DatagramPacket is used to find the port number”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: Which of these variables stores the number of hits that are successfully served out of cache?
    options:
      - hits
      - hitstocache
      - hits_to_cache
      - hits.to.cache
    answer: 3
    explanation: hits.to.cache is the correct answer to “Which of these variables stores the number of hits that are successfully served out of cache”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What will be the output of the following Java program? import java.io.*; class streams { public static void main(String[] args) { try { FileOutputStream fos = new FileOutputStream("serial"); ObjectOutputStream oos = new ObjectOutputStream(fos); oos.writeFloat(3.5); oos.flush(); oos.close(); } catch(Exception e) { System.out.println("Serialization" + e); System.exit(0); } try { FileInputStream fis = new FileInputStream("serial"); ObjectInputStream ois = new ObjectInputStream(fis); System.out.println(ois.available()); } catch (Exception e) { System.out.print("deserialization"); System.exit(0); } } }
    options:
      - "1"
      - "2"
      - "3"
      - "4"
    answer: 3
    explanation: 4 is the correct answer to “What will be the output of the following Java program? import java.io.*; class streams { public static void main(String[] args) { try { FileOutputStream fos = new FileOutputStream("serial"); ObjectOutputStream oos = new ObjectOutputStream(fos); oos.writeFloat(3.5); oos.flush(); oos.close(); } catch(Exception e) { System.out.println("Serialization" + e); System.exit(0); } try { FileInputStream fis = new FileInputStream("serial"); ObjectInputStream ois = new ObjectInputStream(fis); System.out.println(ois.available()); } catch (Exception e) { System.out.print("deserialization"); System.exit(0); } } }”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What is deserialization?
    options:
      - Turning object in memory into stream of bytes
      - Turning stream of bytes into an object in memory
      - Turning object in memory into stream of bits
      - Turning stream of bits into an object in memory
    answer: 1
    explanation: Turning stream of bytes into an object in memory is the correct answer to “What is deserialization”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: "What will be the output of the following Java program? import java.net.*; class networking { public static void main(String[] args) throws Exception { URL obj = new URL(\"https://www.example.com/javamcq\"); URLConnection obj1 = obj.openConnection(); int len = obj1.getContentLength(); System.out.print(len); } } Note: Host URL is having length of content 127."
    options:
      - "126"
      - "127"
      - Compilation Error
      - Runtime Error
    answer: 1
    explanation: "127 is the correct answer to “What will be the output of the following Java program? import java.net.*; class networking { public static void main(String[] args) throws Exception { URL obj = new URL(\"https://www.example.com/javamcq\"); URLConnection obj1 = obj.openConnection(); int len = obj1.getContentLength(); System.out.print(len); } } Note: Host URL is having length of content 127.”. This question is standard in competitive examination syllabi for Java Serialization And Networking."
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: Which of these method is called when http daemon is acting like a normal web server?
    options:
      - Handle()
      - Handleget()
      - None of These
    answer: 2
    explanation: None of These is the correct answer to “Which of these method is called when http daemon is acting like a normal web server”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: Which of these method of MimeHeader is used to return the string equivalent of the values stores on MimeHeader?
    options:
      - string()
      - toString()
      - convertString()
      - getString()
    answer: 1
    explanation: toString() is the correct answer to “Which of these method of MimeHeader is used to return the string equivalent of the values stores on MimeHeader”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: Which of these is an instance variable of class httpd?
    options:
      - port
      - cache
      - log
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “Which of these is an instance variable of class httpd”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: Which of these exceptions is thrown by URL class's constructors?
    options:
      - URLNotFound
      - URLSourceNotFound
      - MalformedURLException
      - URLNotFoundException
    answer: 2
    explanation: MalformedURLException is the correct answer to “Which of these exceptions is thrown by URL class's constructors”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What will be the output of the following Java program? import java.net.*; class networking { public static void main(String[] args) throws MalformedURLException { URL obj = new URL("https://www.example.com/javamcq"); System.out.print(obj.getHost()); } }
    options:
      - example
      - example.com
      - www.example.com
      - https://www.example.com/javamcq
    answer: 2
    explanation: www.example.com is the correct answer to “What will be the output of the following Java program? import java.net.*; class networking { public static void main(String[] args) throws MalformedURLException { URL obj = new URL("https://www.example.com/javamcq"); System.out.print(obj.getHost()); } }”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: Which of these class must be used to send a datagram packets over a connection?
    options:
      - InetAdress
      - DatagramPacket
      - DatagramSocket
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “Which of these class must be used to send a datagram packets over a connection”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: Which of these process occur automatically by the java runtime system?
    options:
      - Serialization
      - Garbage collection
      - File Filtering
      - All of the mentioned
    answer: 0
    explanation: Serialization is the correct answer to “Which of these process occur automatically by the java runtime system”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: Which of these methods of DatagramPacket is used to find the length of byte array?
    options:
      - getnumber()
      - length()
      - getLength()
    answer: 2
    explanation: getLength() is the correct answer to “Which of these methods of DatagramPacket is used to find the length of byte array”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Which of these is a bundle of information passed between machines?
    options:
      - Mime
      - Cache
      - Datagrams
      - DatagramSocket
    answer: 2
    explanation: Datagrams is the correct answer to “Which of these is a bundle of information passed between machines”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: Which of these is method of ObjectOutput interface used to write the object to input or output stream as required?
    options:
      - write()
      - StreamWrite()
      - writeObject()
    answer: 2
    explanation: writeObject() is the correct answer to “Which of these is method of ObjectOutput interface used to write the object to input or output stream as required”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: Which of these methods of httpd class is used to read data from the stream?
    options:
      - getDta()
      - GetResponse()
      - getStream()
      - getRawRequest()
    answer: 3
    explanation: getRawRequest() is the correct answer to “Which of these methods of httpd class is used to read data from the stream”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: Which of these package contains classes and interfaces for networking?
    options:
      - java.io
      - java.util
      - java.net
      - java.network
    answer: 2
    explanation: java.net is the correct answer to “Which of these package contains classes and interfaces for networking”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: What will be the output of the following Java program? import java.io.FileOutputStream; public class FileOutputStreamExample { public static void main(String args[]) { try { FileOutputStream fout=new FileOutputStream("D:\\example.txt"); String s="Welcome to India."; byte b[]=s.getBytes();//converting string into byte array fout.write(b); fout.close(); System.out.println("Success"); } catch(Exception e){System.out.println(e);} } }
    options:
      - "\"Success\" to the output and \"Welcome to India\" to the file"
      - only "Welcome to India" to the file
      - compile time error
      - No Output
    answer: 0
    explanation: "\"Success\" to the output and \"Welcome to India\" to the file is the correct answer to “What will be the output of the following Java program? import java.io.FileOutputStream; public class FileOutputStreamExample { public static void main(String args[]) { try { FileOutputStream fout=new FileOutputStream(\"D:\\\\example.txt\"); String s=\"Welcome to India.\"; byte b[]=s.getBytes();//converting string into byte array fout.write(b); fout.close(); System.out.println(\"Success\"); } catch(Exception e){System.out.println(e);} } }”. This question is standard in competitive examination syllabi for Java Serialization And Networking."
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: If member does not implement serialization, which exception would be thrown?
    options:
      - RuntimeException
      - SerializableException
      - NotSerializableException
      - UnSerializedException
    answer: 2
    explanation: NotSerializableException is the correct answer to “If member does not implement serialization, which exception would be thrown”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: How many bits are in a single IP address?
    options:
      - "8"
      - "16"
      - "32"
      - "64"
    answer: 2
    explanation: 32 is the correct answer to “How many bits are in a single IP address”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: Which of these transfer protocol must be used so that URL can be accessed by URLConnection class object?
    options:
      - http
      - https
      - Any Protocol can be used
      - None of the mentioned
    answer: 0
    explanation: http is the correct answer to “Which of these transfer protocol must be used so that URL can be accessed by URLConnection class object”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: Which of these class extend InputStream class?
    options:
      - ObjectStream
      - ObjectInputStream
      - ObjectOutput
      - ObjectInput
    answer: 1
    explanation: ObjectInputStream is the correct answer to “Which of these class extend InputStream class”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: Serializaed object can be transferred via network.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “Serializaed object can be transferred via network.”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: Which of these is a process of extracting/removing the state of an object from a stream?
    options:
      - Serialization
      - Externalization
      - File Filtering
      - Deserialization
    answer: 3
    explanation: Deserialization is the correct answer to “Which of these is a process of extracting/removing the state of an object from a stream”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: Which of these class is used to encapsulate IP address and DNS?
    options:
      - DatagramPacket
      - URL
      - InetAddress
      - ContentHandler
    answer: 2
    explanation: InetAddress is the correct answer to “Which of these class is used to encapsulate IP address and DNS”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: What does URL stands for?
    options:
      - Uniform Resource Locator
      - Uniform Resource Latch
      - Universal Resource Locator
      - Universal Resource Latch
    answer: 0
    explanation: Uniform Resource Locator is the correct answer to “What does URL stands for”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: Which of these data member of HttpResponse class is used to store the response from an http server?
    options:
      - status
      - address
      - statusResponse
      - statusCode
    answer: 3
    explanation: statusCode is the correct answer to “Which of these data member of HttpResponse class is used to store the response from an http server”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: Which of these method of httpd class is used to get report on each hit to HTTP server?
    options:
      - log()
      - logEntry()
      - logHttpd()
      - logResponse()
    answer: 1
    explanation: logEntry() is the correct answer to “Which of these method of httpd class is used to get report on each hit to HTTP server”. This question is standard in competitive examination syllabi for Java Serialization And Networking.
    keyConcept: Java Serialization And Networking
    testedIn:
      - FPSC
      - PPSC
---


