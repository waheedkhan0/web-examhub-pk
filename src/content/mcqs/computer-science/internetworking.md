---
title: Internetworking MCQs with Explanations
description: Practice high-yield Computer Science & IT MCQs on Internetworking with worked academic solutions for PPSC, FPSC, CSS, PMS, NTS.
subject: computer-science
subjectName: Computer Science & IT
topic: internetworking
topicName: Internetworking
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
    question: Which layer 1 devices can be used to enlarge the area covered by a single LAN segment? 1. Switch 2. NIC 3. Hub 4. Repeater 5. RJ45 transceiver
    options:
      - 1 only
      - 1 and 3
      - 3 and 4
      - 5 only
      - All of the above
    answer: 2
    explanation: Not that you really want to enlarge a single collision domain, but a hub (multiport repeater) will provide this for you.
    keyConcept: Internetworking
    testedIn:
      - PPSC
      - FPSC
  - id: 2
    question: Routers operate at layer _____. LAN switches operate at layer _____. Ethernet hubs operate at layer _____. Word processing operates at layer _____.
    options:
      - 3, 3, 1, 7
      - 3, 2, 1, none
      - 3, 2, 1, 7
      - 3, 3, 2, none
      - All of the above
    answer: 1
    explanation: Routers operate at layer 3. LAN switches operate at layer 2. Ethernet hubs operate at layer 1. Word processing applications communicate to the Application layer interface, but do not operate at layer 7, so the answer would be none.
    keyConcept: Internetworking
    testedIn:
      - PPSC
      - FPSC
  - id: 3
    question: Which of the following describe router functions?
    options:
      - Packet switching
      - Packet filtering
      - Internetwork communication
      - Path selection
      - All of the above
    answer: 4
    explanation: Routers provide packet switching, packet filtering, internetwork communication, and path selection.
    keyConcept: Internetworking
    testedIn:
      - PPSC
      - FPSC
  - id: 4
    question: Why does the data communication industry use the layered OSI reference model? 1. It divides the network communication process into smaller and simpler components, thus aiding component development, design, and troubleshooting. 2. It enables equipment from different vendors to use the same electronic components, thus saving research and development funds. 3. It supports the evolution of multiple competing standards and thus provides business opportunities for equipment manufacturers. 4. It encourages industry standardization by defining what functions occur at each layer of the model.
    options:
      - 1 only
      - 1 and 4
      - 2 and 3
      - 3 only
    answer: 1
    explanation: "The main advantage of a layered model is that it can allow application developers to change aspects of a program in just one layer of the layer model's specifications. Advantages of using the OSI layered model include, but are not limited to, the following: It divides the network communication process into smaller and simpler components, thus aiding compo-nent development, design, and troubleshooting; it allows multiple-vendor development through standardization of network components; it encourages industry standardization by defining what functions occur at each layer of the model; it allows various types of network hardware and software to communicate; and it prevents changes in one layer from affecting other layers, so it does not hamper development."
    keyConcept: Internetworking
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: A receiving host has failed to receive all of the segments that it should acknowledge. What can the host do to improve the reliability of this communication session?
    options:
      - Send a different source port number.
      - Restart the virtual circuit.
      - Decrease the sequence number.
      - Decrease the window size.
    answer: 3
    explanation: A receiving host can control the transmitter by using flow control (TCP uses Windowing by default). By decreasing the window size, the receiving host can slow down the transmitting host so the receiving host does not overflow its buffers.
    keyConcept: Internetworking
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: What are the decimal and hexadecimal equivalents for the binary number 10110111 ?
    options:
      - 69/0x2102
      - 183/B7
      - 173/A6
      - 83/0xC5
    answer: 1
    explanation: You must be able to take a binary number and convert it into both decimal and hexadecimal. To convert to decimal, just add up the 1s using their values. The values that are turned on with the binary number of 10110111 are 128 + 32 + 16 + 4 + 2 + 1 = 183 . To get the hexadecimal equivalent, you need to break the eight binary digits into nibbles (4 bits), 1011 and 0111 . By add-ing up these values, you get 11 and 7 . In hexadecimal, 11 is B , so the answer is 0xB7 .
    keyConcept: Internetworking
    testedIn:
      - PPSC
      - FPSC
  - id: 7
    question: What is the purpose of flow control?
    options:
      - To ensure that data is retransmitted if an acknowledgment is not received.
      - To reassemble segments in the correct order at the destination device.
      - To provide a means for the receiver to govern the amount of data sent by the sender.
      - To regulate the size of each segment.
    answer: 2
    explanation: Flow control allows the receiving device to control the transmitter so the receiving device's buffer does not overflow.
    keyConcept: Internetworking
    testedIn:
      - PPSC
      - FPSC
  - id: 8
    question: Which three statements are true about the operation of a full-duplex Ethernet network? 1. There are no collisions in full-duplex mode. 2. A dedicated switch port is required for each full-duplex node. 3. Ethernet hub ports are preconfigured for full-duplex mode. 4. In a full-duplex environment, the host network card must check for the availability of the network media before transmitting. 5. The host network card and the switch port must be capable of operating in full-duplex mode.
    options:
      - 1, 2, and 5
      - 2 and 4
      - 2, 3 and 4
      - 5 only
    answer: 0
    explanation: Full-duplex means you are using both wire pairs simultaneously to send and receive data. You must have a dedicated switch port for each node, which means you will not have collisions. Both the host network card and the switch port must be capable and set to work in full-duplex mode.
    keyConcept: Internetworking
    testedIn:
      - PPSC
      - FPSC
  - id: 9
    question: Which of the following are types of flow control? 1. Buffering 2. Cut-through 3. Windowing 4. Congestion avoidance
    options:
      - 1 and 2
      - 1, 3 and 4
      - 2 only
      - 3 only
    answer: 1
    explanation: The common types of flow control are buffering, windowing, and congestion avoidance.
    keyConcept: Internetworking
    testedIn:
      - PPSC
      - FPSC
  - id: 10
    question: What are two purposes for segmentation with a bridge? 1. To add more broadcast domains. 2. To create more collision domains. 3. To add more bandwidth for users. 4. To allow more broadcasts for users.
    options:
      - 1 only
      - 2 and 3
      - 2 and 4
      - 4 only
    answer: 1
    explanation: Bridges break up collision domains, which allow more bandwidth for users.
    keyConcept: Internetworking
    testedIn:
      - PPSC
      - FPSC
  - id: 11
    question: How does a host on an Ethernet LAN know when to transmit after a collision has occurred? 1. In a CSMA/CD collision domain, multiple stations can successfully transmit data simultaneously. 2. In a CSMA/CD collision domain, stations must wait until the media is not in use before transmitting. 3. You can improve the CSMA/CD network by adding more hubs. 4. After a collision, the station that detected the collision has first priority to resend the lost data. 5. After a collision, all stations run a random backoff algorithm. When the backoff delay period has expired, all stations have equal priority to transmit data.
    options:
      - 1 and 3
      - 2 and 4
      - 1,3 and 4
      - 2 and 5
    answer: 3
    explanation: Once transmitting stations on an Ethernet segment hear a collision, they send an extended jam signal to ensure that all stations recognize the collision. After the jamming is complete, each sender waits a predetermined amount of time, plus a random time. After both timers expire, they are free to transmit, but they must make sure the media is clear before transmitting and that they all have equal priority.
    keyConcept: Internetworking
    testedIn:
      - PPSC
      - FPSC
  - id: 12
    question: Which of the following types of connections can use full duplex? 1. Hub to hub 2. Switch to switch 3. Host to host 4. Switch to hub 5. Switch to host
    options:
      - 1, 2 and 4
      - 3 and 4
      - 3 and 5
      - 2, 3 and 5
    answer: 3
    explanation: Hubs cannot run full-duplex Ethernet. Full duplex must be used on a point-to-point connection between two devices capable of running full duplex. Switches and hosts can run full duplex between each other, but a hub can never run full duplex.
    keyConcept: Internetworking
    testedIn:
      - PPSC
      - FPSC
  - id: 13
    question: Acknowledgments, sequencing, and flow control are characteristics of which OSI layer?
    options:
      - Layer 2
      - Layer 3
      - Layer 4
      - Layer 7
    answer: 2
    explanation: A reliable Transport layer connection uses acknowledgments to make sure all data is transmitted and received reliably. A reliable connection is defined by a virtual circuit that uses acknowledgments, sequencing, and flow control, which are characteristics of the Transport layer (layer 4).
    keyConcept: Internetworking
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: Which fields are contained within an IEEE Ethernet frame header? 1. Source and destination MAC address 2. Source and destination network address 3. Source and destination MAC address and source and destination network address 4. FCS field
    options:
      - 1 and 4
      - 2 only
      - 2 and 3 only
      - 3 only
    answer: 0
    explanation: An Ethernet frame has source and destination MAC addresses, an Ether-Type field to identify the Network layer protocol, the data, and the FCS field that holds the answer to the CRC.
    keyConcept: Internetworking
    testedIn:
      - PPSC
      - FPSC
  - id: 15
    question: What type of RJ45 UTP cable do you use to connect a PC's COM port to a router or switch console port?
    options:
      - Straight-through
      - Crossover cable
      - Crossover with a CSU/DSU
      - Rolled
    answer: 3
    explanation: To connect to a router or switch console port, you would use an RJ45 UTP rolled cable.
    keyConcept: Internetworking
    testedIn:
      - PPSC
      - FPSC
  - id: 16
    question: How to implement a network medium that is not susceptible to EMI. Which type of cabling should you use?
    options:
      - Thicknet coax
      - Thinnet coax
      - Category 5 UTP cable
      - Fiber-optic cable
    answer: 3
    explanation: Fiber-optic cable provides a more secure, long-distance cable that is not susceptible to EMI interference at high speeds.
    keyConcept: Internetworking
    testedIn:
      - PPSC
      - FPSC
  - id: 17
    question: Segmentation of a data stream happens at which layer of the OSI model?
    options:
      - Physical
      - Data Link
      - Network
      - Transport
    answer: 3
    explanation: The Transport layer receives large data streams from the upper layers and breaks these up into smaller pieces called segments.
    keyConcept: Internetworking
    testedIn:
      - PPSC
      - FPSC
  - id: 18
    question: When data is encapsulated, which is the correct order?
    options:
      - Data, frame, packet, segment, bit
      - Segment, data, packet, frame, bit
      - Data, segment, packet, frame, bit
      - Data, segment, frame, packet, bit
    answer: 2
    explanation: The encapsulation method is data, segment, packet, frame, bit.
    keyConcept: Internetworking
    testedIn:
      - PPSC
      - FPSC
  - id: 19
    question: Which of the following are unique characteristics of half-duplex Ethernet when compared to full-duplex Ethernet? 1. Half-duplex Ethernet operates in a shared collision domain. 2. Half-duplex Ethernet operates in a private collision domain. 3. Half-duplex Ethernet has higher effective throughput. 4. Half-duplex Ethernet has lower effective throughput.
    options:
      - 2 only
      - 1,2 and 3
      - 1 and 4
      - 4 only
    answer: 2
    explanation: Unlike full duplex, half-duplex Ethernet operates in a shared collision domain, and it has a lower effective throughput than full duplex.
    keyConcept: Internetworking
    testedIn:
      - PPSC
      - FPSC
  - id: 20
    question: What type of RJ45 UTP cable is used between switches?
    options:
      - Straight-through
      - Crossover cable
      - Crossover with a CSU/DSU
      - Crossover with a router in between the two switches
    answer: 1
    explanation: "Correct Answer: B) Crossover cable Here's why: Imagine two switches are like two people trying to talk. * Option A: Straight-through cable: Think of this like both people trying to speak at the same time and both listening at the same time. They can't hear each other because their \"talking\" (transmit) lines are connected to each other and their \"listening\" (receive) lines are connected to each other. It doesn't work for two switches directly connected. * Option B: Crossover cable: This cable is specially wired so that one person's \"talking\" (transmit) goes to the other person's \"listening\" (receive), and vice-versa. This is exactly what you need when connecting two switches directly! * Option C: Crossover with a CSU/DSU: A CSU/DSU is a device used for connecting to a WAN (Wide Area Network) link, like a T1 line. It's not needed for connecting two switches locally. * Option D: Crossover with a router in between the two switches: You wouldn't use a crossover cable *with* a router between the switches. The router acts as an intermediary and handles the signal routing. Routers typically use straight-through cables to connect to switches. In summary: When you directly connect two switches, they need a crossover cable to make sure the transmit (talking) and receive (listening) lines are properly matched."
    keyConcept: Internetworking
    testedIn:
      - PPSC
      - FPSC
---


