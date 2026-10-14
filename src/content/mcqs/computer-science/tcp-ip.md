---
title: Tcp Ip MCQs with Explanations
description: Practice high-yield Computer Science & IT MCQs on Tcp Ip with worked academic solutions for PPSC, FPSC, CSS, PMS, NTS.
subject: computer-science
subjectName: Computer Science & IT
topic: tcp-ip
topicName: Tcp Ip
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
    question: Which of the following services use TCP? 1. DHCP 2. SMTP 3. HTTP 4. TFTP 5. FTP
    options:
      - 1 and 2
      - 2, 3 and 5
      - 1, 2 and 4
      - 1, 3 and 4
    answer: 1
    explanation: SMTP, HTTP and FTP use TCP.
    keyConcept: Tcp Ip
    testedIn:
      - PPSC
      - FPSC
  - id: 2
    question: What layer in the TCP/IP stack is equivalent to the Transport layer of the OSI model?
    options:
      - Application
      - Host-to-Host
      - Internet
      - Network Access
    answer: 1
    explanation: The four layers of the TCP/IP stack (also called the DoD model) are Application/Process, Host-to-Host, Internet, and Network Access. The Host-to-Host layer is equivalent to the Transport layer of the OSI model.
    keyConcept: Tcp Ip
    testedIn:
      - PPSC
      - FPSC
  - id: 3
    question: Which of the following describe the DHCP Discover message? 1. It uses FF:FF:FF:FF:FF:FF as a layer 2 broadcast. 2. It uses UDP as the Transport layer protocol. 3. It uses TCP as the Transport layer protocol. 4. It does not use a layer 2 destination address.
    options:
      - 1 only
      - 1 and 2
      - 3 and 4
      - 4 only
    answer: 1
    explanation: A client that sends out a DHCP Discover message in order to receive an IP address sends out a broadcast at both layer 2 and layer 3. The layer 2 broadcast is all Fs in hex, or FF:FF:FF:FF:FF:FF . The layer 3 broadcast is FF:FF:FF:FF:FF:FF , which means all networks and all hosts. DHCP is connectionless, which means it uses User Datagram Protocol (UDP) at the Transport layer, also called the Host-to-Host layer.
    keyConcept: Tcp Ip
    testedIn:
      - PPSC
      - FPSC
  - id: 4
    question: You want to implement a mechanism that automates the IP configuration, including IP address, subnet mask, default gateway, and DNS information. Which protocol will you use to accomplish this?
    options:
      - SMTP
      - SNMP
      - DHCP
      - ARP
    answer: 2
    explanation: Dynamic Host Configuration Protocol (DHCP) is used to provide IP information to hosts on your network. DHCP can provide a lot of information, but the most common is IP address, subnet mask, default gateway, and DNS information.
    keyConcept: Tcp Ip
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: Which of the following is private IP address?
    options:
      - 12.0.0.1
      - 168.172.19.39
      - 172.15.14.36
      - 192.168.24.43
    answer: 3
    explanation: Class A private address range is 10.0.0.0 through 10.255.255.255. Class B private address range is 172.16.0.0 through 172.31.255.255, and Class C private address range is 192.168.0.0 through 192.168.255.255.
    keyConcept: Tcp Ip
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: Which of the following allows a router to respond to an ARP request that is intended for a remote host?
    options:
      - Gateway DP
      - Reverse ARP (RARP)
      - Proxy ARP
      - Inverse ARP (IARP)
    answer: 2
    explanation: Proxy ARP can help machines on a subnet reach remote subnets without configuring routing or a default gateway.
    keyConcept: Tcp Ip
    testedIn:
      - PPSC
      - FPSC
  - id: 7
    question: The DoD model (also called the TCP/IP stack) has four layers. Which layer of the DoD model is equivalent to the Network layer of the OSI model?
    options:
      - Application
      - Host-to-Host
      - Internet
      - Network Access
    answer: 2
    explanation: The four layers of the DoD model are Application/Process, Host-to-Host, Internet, and Network Access. The Internet layer is equivalent to the Network layer of the OSI model.
    keyConcept: Tcp Ip
    testedIn:
      - PPSC
      - FPSC
  - id: 8
    question: Which of the following services use UDP? 1. DHCP 2. SMTP 3. SNMP 4. FTP 5. HTTP 6. TFTP
    options:
      - 1, 3 and 6
      - 2 and 4
      - 1, 2 and 4
      - All of the above
    answer: 0
    explanation: DHCP, SNMP, and TFTP use UDP.
    keyConcept: Tcp Ip
    testedIn:
      - PPSC
      - FPSC
  - id: 9
    question: Which class of IP address provides a maximum of only 254 host addresses per network ID?
    options:
      - Class A
      - Class B
      - Class C
      - Class D
    answer: 2
    explanation: "A Class C network address has only 8 bits for defining hosts: 2 8 - 2 = 254."
    keyConcept: Tcp Ip
    testedIn:
      - PPSC
      - FPSC
  - id: 10
    question: If you use either Telnet or FTP, which is the highest layer you are using to transmit data?
    options:
      - Application
      - Presentation
      - Session
      - Transport
    answer: 0
    explanation: Both FTP and Telnet use TCP at the Transport layer; however, they both are Application layer protocols, so the Application layer is the best answer.
    keyConcept: Tcp Ip
    testedIn:
      - PPSC
      - FPSC
  - id: 11
    question: Which of the following is the decimal and hexadecimal equivalents of the binary number 10011101?
    options:
      - 155, 0x9B
      - 157, 0x9D
      - 159, 0x9F
      - 185, 0xB9
    answer: 1
    explanation: To turn a binary number into decimal, you just have to add the values of each bit that is a 1. The values of 10011101 are 128, 16, 8, 4, and 1. 128 + 16 + 8 + 4 + 1 = 157. Hexadecimal is a base-16 number system. The values of hexadecimal are 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F-16 characters total, from which to create all the numbers you'll ever need. So, if 1001 in binary is 9, then the hexadecimal equivalent is 9. Since we then have 1101, which is 13 in binary, the hexadecimal answer is D and the complete hexadecimal answer is 0x9D.
    keyConcept: Tcp Ip
    testedIn:
      - PPSC
      - FPSC
  - id: 12
    question: Which statements are true regarding ICMP packets? 1. They acknowledge receipt of a TCP segment. 2. They guarantee datagram delivery. 3. They can provide hosts with information about network problems. 4. They are encapsulated within IP datagrams.
    options:
      - 1 only
      - 2 and 3
      - 3 and 4
      - 2, 3 and 4
    answer: 2
    explanation: Internet Control Message Protocol (ICMP) is used to send error messages through the network, but they do not work alone. Every segment or ICMP payload must be encapsulated within an IP datagram (or packet).
    keyConcept: Tcp Ip
    testedIn:
      - PPSC
      - FPSC
  - id: 13
    question: Which of the following are layers in the TCP/IP model? 1. Application 2. Session 3. Transport 4. Internet 5. Data Link 6. Physical
    options:
      - 1 and 2
      - 1, 3 and 4
      - 2, 3 and 5
      - 3, 4 and 5
    answer: 1
    explanation: This seems like a hard question at first because it doesn't make sense. The listed answers are from the OSI model and the question asked about the TCP/IP protocol stack (DoD model). However, let's just look for what is wrong. First, the Session layer is not in the TCP/IP model; neither are the Data Link and Physical layers. This leaves us with the Transport layer (Host-to-Host in the DoD model), Internet layer (Network layer in the OSI), and Application layer (Application/Process in the DoD).
    keyConcept: Tcp Ip
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: Which layer 4 protocol is used for a Telnet connection?
    options:
      - IP
      - TCP
      - TCP/IP
      - UDP
    answer: 1
    explanation: Although Telnet does use TCP and IP (TCP/IP), the question specifically asks about layer 4, and IP works at layer 3. Telnet uses TCP at layer 4.
    keyConcept: Tcp Ip
    testedIn:
      - PPSC
      - FPSC
  - id: 15
    question: Which statements are true regarding ICMP packets? 1. ICMP guarantees datagram delivery. 2. ICMP can provide hosts with information about network problems. 3. ICMP is encapsulated within IP datagrams. 4. ICMP is encapsulated within UDP datagrams.
    options:
      - 1 only
      - 2 and 3
      - 1 and 4
      - All of the above
    answer: 1
    explanation: ICMP is used for diagnostics and destination unreachable messages. ICMP is encapsulated within IP datagrams, and because it is used for diagnostics, it will provide hosts with information about network problems.
    keyConcept: Tcp Ip
    testedIn:
      - PPSC
      - FPSC
  - id: 16
    question: Which of the following are TCP/IP protocols used at the Application layer of the OSI model? 1. IP 2. TCP 3. Telnet 4. FTP 5. TFTP
    options:
      - 1 and 3
      - 1, 3 and 5
      - 3, 4 and 5
      - All of the above
    answer: 2
    explanation: Telnet, File Transfer Protocol (FTP), and Trivial FTP (TFTP) are all Application layer protocols. IP is a Network layer protocol. Transmission Control Protocol (TCP) is a Transport layer protocol.
    keyConcept: Tcp Ip
    testedIn:
      - PPSC
      - FPSC
  - id: 17
    question: What protocol is used to find the hardware address of a local device?
    options:
      - RARP
      - ARP
      - IP
      - ICMP
    answer: 1
    explanation: Address Resolution Protocol (ARP) is used to find the hardware address from a known IP address.
    keyConcept: Tcp Ip
    testedIn:
      - PPSC
      - FPSC
  - id: 18
    question: Which of the following protocols uses both TCP and UDP?
    options:
      - FTP
      - SMTP
      - Telnet
      - DNS
    answer: 3
    explanation: DNS uses TCP for zone exchanges between servers and UDP when a client is trying to resolve a hostname to an IP address.
    keyConcept: Tcp Ip
    testedIn:
      - PPSC
      - FPSC
  - id: 19
    question: What is the address range of a Class B network address in binary?
    options:
      - 01xxxxxx
      - 0xxxxxxx
      - 10xxxxxx
      - 110xxxxx
    answer: 2
    explanation: The range of a Class B network address is 128-191 . This makes our binary range 10xxxxxx .
    keyConcept: Tcp Ip
    testedIn:
      - PPSC
      - FPSC
---


