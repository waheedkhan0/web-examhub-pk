---
title: Networking Miscellaneous — Part 1 MCQs with Explanations
description: Practice high-yield Computer Science & IT MCQs on Networking Miscellaneous — Part 1 with worked academic solutions for PPSC, FPSC, CSS, PMS, NTS.
subject: computer-science
subjectName: Computer Science & IT
topic: networking-miscellaneous-part-1
topicName: Networking Miscellaneous — Part 1
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
    question: The method of communication in which transmission takes place in both directions, but only one direction at a time is called
    options:
      - Simplex
      - Four wire circuit
      - Full Duplex
      - Half Duplex
    answer: 3
    explanation: "A. Simplex: Simplex communication is a method of communication where transmission occurs in only one direction. It does not support two-way communication. B. Four wire circuit: A four-wire circuit refers to a communication channel that uses separate wires for transmission and reception, allowing for simultaneous two-way communication. However, this option does not describe the scenario where only one direction is allowed at a time. C. Full Duplex: Full duplex communication is a method where transmission can occur simultaneously in both directions. It allows for two-way communication simultaneously, which is not the case in the given scenario. D. Half Duplex: Half duplex communication is the correct answer. In this method, transmission can take place in both directions, but only one direction can occur at a time. The communication switches between the two directions, allowing communication in both directions but not simultaneously. Therefore, the correct answer is: D. Half Duplex"
    keyConcept: Networking Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 2
    question: "The topology with highest reliability is:"
    options:
      - Bus topology
      - Star topology
      - Ring topology
      - Mesh topology
    answer: 3
    explanation: Mess Topology is a network setup where each computer and network device is interconnected with one another, allowing for most transmissions to be distributed, even if one of the connections go down. This topology is not commonly used for most computer networks as it is difficult and expensive to have redundant connection to every computer. However, this topology is commonly used for wireless networks.
    keyConcept: Networking Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 3
    question: How many Character per sec(7bits + 1parity) can be transmitted over a 2400 bps line if the transfer is synchronous (1 "Start" and 1 "stop" bit)?
    options:
      - "300"
      - "240"
      - "250"
      - "275"
    answer: 0
    explanation: Start and stop bits are not needed in synchronous transfer of data. So, it is 2400/8=300.
    keyConcept: Networking Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 4
    question: The number of cross point needed for 10 lines in a cross point switch which is full duplex in nature and there are no self connection is
    options:
      - "100"
      - "45"
      - "50"
      - "90"
    answer: 1
    explanation: As all lines are full-duplex and there are no self connections, only the cross points above the diagonals are needed. Hence formula for the number of cross points required is n(n-1)/2.
    keyConcept: Networking Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: A terminal multiplexer has six 1200 bps terminals and 'n' 300bps terminals connected to it. The outgoing line is 9600bps. What is the maximum value of n?
    options:
      - "4"
      - "16"
      - "8"
      - "28"
    answer: 2
    explanation: Since there are six 1200bps terminals, 6*1200 + n*300 =9600 by solving this, n=8.
    keyConcept: Networking Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: Maximum data rate of a channel for a noiseless 3-kHz binary channel is
    options:
      - 3000bps
      - 6000 bps
      - 1500 bps
      - None of these
    answer: 1
    explanation: Maximum data rate = 2 H log 2 V bps, where H is the bandwidth, V is the discrete levels. Here H is 3 kHz and V is 2. So, data rate = 2*3000 log 2 2 bps = 6000 bps.
    keyConcept: Networking Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 7
    question: The Network topology that supports bi-directional links between each possible node is
    options:
      - Ring
      - Star
      - Tree
      - Mesh
    answer: 3
    explanation: A mesh network is a local area network topology in which the infrastructure nodes connect directly, dynamically and non-hierarchically to as many other nodes as possible and cooperate with one another to efficiently route data to and from clients.
    keyConcept: Networking Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 8
    question: Data communications system depends on four fundamental characteristics
    options:
      - Receiver
      - Sender
      - Timeliness
      - Medium
    answer: 2
    explanation: "Data communications means the exchange of data between two devices via some form of transmission medium such as a wire cable. For data communications to occur, the communicating devices must be part of a communication system made up of a combination of hardware (physical equipment) and software (programs). The effectiveness of a data communications system depends on four fundamental characteristics: delivery, accuracy, timeliness, and jitter. 1. Delivery: The system must deliver data to the correct destination. Data must be received by the intended device or user and only by that device or user. 2. Accuracy: The system must deliver the data accurately. Data that have been altered in transmission and left uncorrected are unusable. 3. Timeliness: The system must deliver data in a timely manner. Data delivered late are useless. In the case of video and audio, timely delivery means delivering data as they are produced, in the same order that they are produced, and without significant delay. This kind of delivery is called real-time transmission. 4. Jitter: Jitter refers to the variation in the packet arrival time. It is the uneven delay in the delivery of audio or video packets. For example, let us assume that video packets are sent every 3D ms. If some of the packets arrive with 3D-ms delay and others with 4D-ms delay, an uneven quality in the video is the result."
    keyConcept: Networking Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 9
    question: "Number of Unguided Media is:"
    options:
      - "6"
      - "5"
      - "4"
      - "3"
    answer: 3
    explanation: "Unguided Media: Unguided media refer to the transmission media that do not require any physical conductor or wire. These are primarily used for wireless communication. There are three main types of unguided media: 1. Radio waves: These are used for long-range communication like broadcasting and mobile communication. 2. Microwaves: These are used for point-to-point communication and satellite communications. 3. Infrared: This is used for short-range communication, such as remote controls and wireless data transfers. Therefore, the correct answer is Option D: 3 types of unguided media in network communication."
    keyConcept: Networking Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 10
    question: Which is also known as a connectionless protocol for a packet-switching network that uses the Datagram approach?
    options:
      - IPV5
      - IPV4
      - IPV6
      - None of these
    answer: 1
    explanation: IPV4 (Internet Protocol version 4) is a connectionless protocol used in packet-switching networks. It is the most widely used version of the Internet Protocol. IPV4 uses the Datagram approach, where data is divided into small packets, each packet is individually routed to its destination, and packets can take different paths to reach the destination. The packets are then reassembled at the destination to form the complete data. IPV5 and IPV6 are also Internet Protocol versions, but they are not specifically known for being connectionless or using the Datagram approach. Therefore, option B, IPV4, is the correct choice in this context.
    keyConcept: Networking Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 11
    question: The slowest transmission speeds are those of
    options:
      - twisted-pair wire
      - coaxial cable
      - fiber-optic cable
      - microwaves
    answer: 0
    explanation: Twisted-pair wire has the slowest transmission speeds among the given options. It is commonly used in telephone networks and older data communication networks. Coaxial cable has higher transmission speeds compared to twisted-pair wire and is used in cable TV and internet services. Fiber-optic cable offers the highest transmission speeds as it uses light to transmit data. Microwaves are used for wireless transmission and offer higher speeds compared to twisted-pair wire.
    keyConcept: Networking Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 12
    question: You have a network ID of 134.57.0.0 and you need to divide it into multiple subnets in which at least 600 host IDs for each subnet are available. You desire to have the largest amount of subnets available. Which subnet mask should you assign?
    options:
      - 255.255.224.0
      - 255.255.240.0
      - 255.255.248.0
      - 255.255.255.0
      - 255.255.255.255
    answer: 2
    explanation: "To divide the network into multiple subnets and ensure at least 600 host IDs are available per subnet, we need to calculate the appropriate subnet mask that maximizes the number of subnets while satisfying the requirement of at least 600 hosts per subnet. Step 1: Required Host IDs At least 600 host IDs are needed for each subnet. To calculate the required number of bits, we use the formula: 2 h - 2 ≥ 600 , where \"h\" is the number of host bits. 2 10 - 2 = 1024 - 2 = 1022 host addresses, which is more than enough for 600 hosts. Step 2: Subnet Mask Calculation The default subnet mask for a Class B address (134.57.0.0) is 255.255.0.0. To satisfy the 600 host requirement, 10 bits must be reserved for hosts. The remaining bits (16 - 10 = 6) can be used for subnetting. This gives us a subnet mask of 255.255.248.0 , which allows for 1024 hosts per subnet, fulfilling the requirement. Step 3: Evaluating Other Options Option A: 255.255.224.0 provides 8190 hosts per subnet, which is more than needed, but results in fewer subnets. Option B: 255.255.240.0 provides 4094 hosts per subnet, which also exceeds the requirement but limits the number of subnets. Option D: 255.255.255.0 provides only 254 hosts per subnet, which is insufficient for the requirement of at least 600 hosts. Option E: 255.255.255.255 is not valid as a subnet mask for this purpose as it only allows 1 host. Conclusion: The correct answer is Option C: 255.255.248.0 , as it provides the largest number of subnets while allowing at least 600 host IDs per subnet."
    keyConcept: Networking Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 13
    question: "End-to-end connectivity is provided from host-to-host in:"
    options:
      - Network layer
      - Session layer
      - Data link layer
      - Transport layer
      - None of the above
    answer: 3
    explanation: "End-to-end connectivity is provided from host-to-host in the Transport layer . The Transport layer is responsible for ensuring reliable data transmission between the source and destination hosts. It establishes a logical connection between the sender and receiver, manages data flow control, error detection and correction, and sequencing of data packets. By providing end-to-end connectivity, the Transport layer ensures that data can travel from the source host to the destination host reliably and efficiently. Therefore, the correct answer is Option D: Transport layer."
    keyConcept: Networking Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: Error detection at the data link level is achieved by
    options:
      - Bit Stuffing
      - Cyclic Redundancy Code
      - Hamming Code
      - Equalization
    answer: 1
    explanation: Cyclic Redundancy Code is the correct answer to “Error detection at the data link level is achieved by”. This question is standard in competitive examination syllabi for Networking Miscellaneous.
    keyConcept: Networking Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 15
    question: Which of the following is a wrong example of network layer?
    options:
      - Internet Protocol (IP) - ARPANET
      - X.25 Packet Level Protocol (PLP)-ISO
      - Source routing and domain naming-USENet
      - X.25 level 2-ISO
    answer: 3
    explanation: X.25 level 2-ISO is the correct answer to “Which of the following is a wrong example of network layer”. This question is standard in competitive examination syllabi for Networking Miscellaneous.
    keyConcept: Networking Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 16
    question: "\"BAUD\" rate means"
    options:
      - The number of bits transmitted per unit time.
      - The number of bytes transmitted per unit time.
      - The rate at which the signal changes.
      - None of the above
    answer: 2
    explanation: The rate at which the signal changes. is the correct answer to “"BAUD" rate means”. This question is standard in competitive examination syllabi for Networking Miscellaneous.
    keyConcept: Networking Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 17
    question: Start and stop bits are used in serial communication for
    options:
      - Error detection
      - Error correction
      - Synchronization
      - Slowing down the communication
    answer: 2
    explanation: Synchronization is the correct answer to “Start and stop bits are used in serial communication for”. This question is standard in competitive examination syllabi for Networking Miscellaneous.
    keyConcept: Networking Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 18
    question: Unmodulated signal coming from a transmitter is know as
    options:
      - Carrier signal
      - Baseband signal
      - Primary signal
      - None of these
    answer: 1
    explanation: Baseband signal is the correct answer to “Unmodulated signal coming from a transmitter is know as”. This question is standard in competitive examination syllabi for Networking Miscellaneous.
    keyConcept: Networking Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 19
    question: Which one of the following network uses dynamic or adaptive routing?
    options:
      - TYMNET
      - ARPANET
      - SNA(IBM's System Network Architechture)
      - None of these
    answer: 1
    explanation: ARPANET is the correct answer to “Which one of the following network uses dynamic or adaptive routing”. This question is standard in competitive examination syllabi for Networking Miscellaneous.
    keyConcept: Networking Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 20
    question: The ________ measures the number of lost or garbled messages as a fraction of the total sent in the sampling period.
    options:
      - Residual Error Rate.
      - Transfer Failure Probability.
      - Connection release failure probability.
      - Connection establish.
    answer: 0
    explanation: Residual Error Rate. is the correct answer to “The ________ measures the number of lost or garbled messages as a fraction of the total sent in the sampling period.”. This question is standard in competitive examination syllabi for Networking Miscellaneous.
    keyConcept: Networking Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 21
    question: In session layer, during data transfer, the data stream responsible for the "control" purpose (i.e control of the session layer itself) is
    options:
      - Regular Data
      - Typed data
      - Capability Data
      - Expedited Data
    answer: 2
    explanation: Capability Data is the correct answer to “In session layer, during data transfer, the data stream responsible for the "control" purpose (i.e control of the session layer itself) is”. This question is standard in competitive examination syllabi for Networking Miscellaneous.
    keyConcept: Networking Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 22
    question: A high speed communication equipment typically would not be needed for
    options:
      - E-mail
      - Transferring large volume of data
      - Supporting communication between nodes in a LAN
      - All of these
    answer: 0
    explanation: E-mail is the correct answer to “A high speed communication equipment typically would not be needed for”. This question is standard in competitive examination syllabi for Networking Miscellaneous.
    keyConcept: Networking Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 23
    question: Which of the following ISO level is more closely related to the physical communications facilities?
    options:
      - Application
      - Session
      - Networking
      - Data Link
    answer: 3
    explanation: Data Link is the correct answer to “Which of the following ISO level is more closely related to the physical communications facilities”. This question is standard in competitive examination syllabi for Networking Miscellaneous.
    keyConcept: Networking Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 24
    question: which of the following is not a field in the Ethernet Message packet?
    options:
      - Type
      - Data
      - Pin-code
      - Address
    answer: 2
    explanation: Pin-code is the correct answer to “which of the following is not a field in the Ethernet Message packet”. This question is standard in competitive examination syllabi for Networking Miscellaneous.
    keyConcept: Networking Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 25
    question: In a broad Sense, a railway track is an example of
    options:
      - Simplex
      - Half Duplex
      - Full Duplex
      - All of these
    answer: 1
    explanation: Half Duplex is the correct answer to “In a broad Sense, a railway track is an example of”. This question is standard in competitive examination syllabi for Networking Miscellaneous.
    keyConcept: Networking Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 26
    question: Which network has connectivity range up to 10 meters?
    options:
      - LAN
      - PAN
      - MAN
      - WAN
    answer: 1
    explanation: PAN is the correct answer to “Which network has connectivity range up to 10 meters”. This question is standard in competitive examination syllabi for Networking Miscellaneous.
    keyConcept: Networking Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 27
    question: What is Unicode?
    options:
      - Represents symbol or characters used in any langua
      - Only few languages are supported
      - Supports only few characters
      - Characters from A to Z
    answer: 0
    explanation: Represents symbol or characters used in any langua is the correct answer to “What is Unicode”. This question is standard in competitive examination syllabi for Networking Miscellaneous.
    keyConcept: Networking Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 28
    question: For data communications to occur, the communicating devices must be part of a communication system made up of a combination of?
    options:
      - WAN and LAN
      - Hardware and software
      - Full duplex and half duplex
      - All of the above
    answer: 1
    explanation: Hardware and software is the correct answer to “For data communications to occur, the communicating devices must be part of a communication system made up of a combination of”. This question is standard in competitive examination syllabi for Networking Miscellaneous.
    keyConcept: Networking Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 29
    question: "Correct method for full duplex mode of communication is:"
    options:
      - Both stations can transmit and receive data at the
      - One device can send other device can only accepts.
      - One device sends and other device receives and vic
      - None of these
    answer: 0
    explanation: Both stations can transmit and receive data at the is the correct answer to “Correct method for full duplex mode of communication is:”. This question is standard in competitive examination syllabi for Networking Miscellaneous.
    keyConcept: Networking Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 30
    question: "A data communications system has:"
    options:
      - 4 components
      - 5 components
      - 6 components
      - 7 components
    answer: 1
    explanation: 5 components is the correct answer to “A data communications system has:”. This question is standard in competitive examination syllabi for Networking Miscellaneous.
    keyConcept: Networking Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 31
    question: "00 represents a pixel that pixel is known as :"
    options:
      - Black pixel
      - Light gray
      - White pixel
      - Dark gray pixel
    answer: 0
    explanation: Black pixel is the correct answer to “00 represents a pixel that pixel is known as :”. This question is standard in competitive examination syllabi for Networking Miscellaneous.
    keyConcept: Networking Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 32
    question: "Select correct type of line configuration:"
    options:
      - Multi-point
      - Single point
      - Link
      - Dedicated point
    answer: 0
    explanation: Multi-point is the correct answer to “Select correct type of line configuration:”. This question is standard in competitive examination syllabi for Networking Miscellaneous.
    keyConcept: Networking Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 33
    question: "Select the wrong data communication system component:"
    options:
      - Medium
      - Protocol
      - Receiver
      - Transits
    answer: 3
    explanation: Transits is the correct answer to “Select the wrong data communication system component:”. This question is standard in competitive examination syllabi for Networking Miscellaneous.
    keyConcept: Networking Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 34
    question: "Time required for a message to travel from one device to another is known as:"
    options:
      - Transit time
      - Dialogue time
      - Response time
      - Wait time
    answer: 0
    explanation: Transit time is the correct answer to “Time required for a message to travel from one device to another is known as:”. This question is standard in competitive examination syllabi for Networking Miscellaneous.
    keyConcept: Networking Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 35
    question: If one link fails, only that link is affected. All other links remain active. Which topology does this?
    options:
      - Mesh topology
      - Star topology
      - Bus topology
      - Physical topology
    answer: 1
    explanation: Star topology is the correct answer to “If one link fails, only that link is affected. All other links remain active. Which topology does this”. This question is standard in competitive examination syllabi for Networking Miscellaneous.
    keyConcept: Networking Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 36
    question: "OSI model means:"
    options:
      - Open systems interconnection
      - Operating system interconnection
      - Open source interconnection
      - Operating source interconnection
    answer: 0
    explanation: Open systems interconnection is the correct answer to “OSI model means:”. This question is standard in competitive examination syllabi for Networking Miscellaneous.
    keyConcept: Networking Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 37
    question: "Select the correct cable that transport signals in the form of light:"
    options:
      - Twisted-Pair cable
      - Fiber optic cable
      - Coaxial Cable
      - Shielded Twisted Pair cable
    answer: 1
    explanation: Fiber optic cable is the correct answer to “Select the correct cable that transport signals in the form of light:”. This question is standard in competitive examination syllabi for Networking Miscellaneous.
    keyConcept: Networking Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 38
    question: "Twisted pair wires, coaxial cable, optical fiber cables are the examples of:"
    options:
      - Wired Media
      - Wireless Media
      - Both A & B
      - None of these
    answer: 0
    explanation: Wired Media is the correct answer to “Twisted pair wires, coaxial cable, optical fiber cables are the examples of:”. This question is standard in competitive examination syllabi for Networking Miscellaneous.
    keyConcept: Networking Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 39
    question: Which of the followings is used in communications is referred to as unshielded twisted-pair (UTP)?
    options:
      - Coaxial cable
      - Fiber-optic cable
      - Twisted-pair cable
      - None of these
    answer: 2
    explanation: Twisted-pair cable is the correct answer to “Which of the followings is used in communications is referred to as unshielded twisted-pair (UTP)”. This question is standard in competitive examination syllabi for Networking Miscellaneous.
    keyConcept: Networking Miscellaneous
    testedIn:
      - PPSC
      - FPSC
  - id: 40
    question: What is Cladding?
    options:
      - Cables with shield
      - Coxial Cable
      - A typical optical fiber consists of a very narrow
      - None of these
    answer: 2
    explanation: A typical optical fiber consists of a very narrow is the correct answer to “What is Cladding”. This question is standard in competitive examination syllabi for Networking Miscellaneous.
    keyConcept: Networking Miscellaneous
    testedIn:
      - PPSC
      - FPSC
---


