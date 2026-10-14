---
title: Ipv6 MCQs with Explanations
description: Practice high-yield Computer Science & IT MCQs on Ipv6 with worked academic solutions for PPSC, FPSC, CSS, PMS, NTS.
subject: computer-science
subjectName: Computer Science & IT
topic: ipv6
topicName: Ipv6
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
    question: Which of the following is true when describing a multicast address?
    options:
      - Packets addressed to a unicast address are delivered to a single interface.
      - Packets are delivered to all interfaces identified by the address. This is also called a one-to-many address.
      - Identifies multiple interfaces and is only delivered to one address. This address can also be called one-to-one-of-many.
      - These addresses are meant for nonrouting purposes, but they are almost globally unique so it is unlikely they will have an address overlap.
    answer: 1
    explanation: Packets addressed to a multicast address are delivered to all interfaces identified by the multicast address, the same as in IPv4. It is also called a one-to-many address. You can always tell a multicast address in IPv6 because multicast addresses always start with FF .
    keyConcept: Ipv6
    testedIn:
      - PPSC
      - FPSC
  - id: 2
    question: Which of the following is true when describing a unicast address?
    options:
      - Packets addressed to a unicast address are delivered to a single interface.
      - These are your typical publicly routable addresses, just like a regular publicly routable address in IPv4.
      - These are like private addresses in IPv4 in that they are not meant to be routed.
      - These addresses are meant for nonrouting purposes, but they are almost globally unique so it is unlikely they will have an address overlap.
    answer: 0
    explanation: Packets addressed to a unicast address are delivered to a single interface. For load balancing, multiple interfaces can use the same address.
    keyConcept: Ipv6
    testedIn:
      - PPSC
      - FPSC
  - id: 3
    question: To enable OSPFv3, which of the following would you use?
    options:
      - Router1(config-if)# ipv6 ospf 10 area 0.0.0.0
      - Router1(config-if)# ipv6 router rip 1
      - Router1(config)# ipv6 router eigrp 10
      - Router1(config-rtr)# no shutdown
    answer: 0
    explanation: To enable OSPFv3, you enable the protocol as with RIPng. The command string is ipv6 ospf area .
    keyConcept: Ipv6
    testedIn:
      - PPSC
      - FPSC
  - id: 4
    question: What multicast addresses does RIPng use?
    options:
      - FF02::A
      - FF02::9
      - FF02::5
      - FF02::6
    answer: 1
    explanation: RIPng uses the multicast IPv6 address of FF02::9 . If you remember the multicast addresses for IPv4, the numbers at the end of each IPv6 address are the same.
    keyConcept: Ipv6
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: Which statement(s) about IPv6 addresses are true? 1. Leading zeros are required. 2. Two colons (::) are used to represent successive hexadecimal fields of zeros. 3. Two colons (::) are used to separate fields. 4. A single interface will have multiple IPv6 addresses of different types.
    options:
      - 1 and 3
      - 2 and 4
      - 1, 3 and 4
      - All of the above
    answer: 1
    explanation: In order to shorten the written length of an IPv6 address, successive fields of zeros may be replaced by double colons. In trying to shorten the address further, leading zeros may also be removed. Just as with IPv4, a single device's interface can have more than one address; with IPv6 there are more types of addresses and the same rule applies. There can be link-local, global unicast, and multicast addresses all assigned to the same interface.
    keyConcept: Ipv6
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: To enable RIPng, which of the following would you use?
    options:
      - Router1(config-if)# ipv6 ospf 10 area 0.0.0.0
      - Router1(config-if)# ipv6 router rip 1
      - Router1(config)# ipv6 router eigrp 10
      - Router1(config-rtr)# no shutdown
    answer: 1
    explanation: It's pretty simple to enable RIPng for IPv6. You configure it right on the interface where you want RIP to run with the ipv6 router rip number command.
    keyConcept: Ipv6
    testedIn:
      - PPSC
      - FPSC
  - id: 7
    question: Which of the following is true when describing a global unicast address?
    options:
      - Packets addressed to a unicast address are delivered to a single interface.
      - These are your typical publicly routable addresses, just like a regular publicly routable address in IPv4.
      - These are like private addresses in IPv4 in that they are not meant to be routed.
      - These addresses are meant for nonrouting purposes, but they are almost globally unique so it is unlikely they will have an address overlap.
    answer: 1
    explanation: Unlike unicast addresses, global unicast addresses are meant to be routed.
    keyConcept: Ipv6
    testedIn:
      - PPSC
      - FPSC
  - id: 8
    question: What two multicast addresses does OSPFv3 use? 1. FF02::A 2. FF02::9 3. FF02::5 4. FF02::6
    options:
      - 2 only
      - 3 only
      - 1 and 3
      - 3 and 4
    answer: 3
    explanation: Adjacencies and next-hop attributes now use link-local addresses, and OSPFv3 still uses multicast traffic to send its updates and acknowledgments with the addresses FF02::5 for OSPF routers and FF02::6 for OSPF designated routers. These are the replacements for 224.0.0.5 and 224.0.0.6 , respectively.
    keyConcept: Ipv6
    testedIn:
      - PPSC
      - FPSC
  - id: 9
    question: What multicast addresses does EIGRPv6 use?
    options:
      - FF02::A
      - FF02::9
      - FF02::5
      - FF02::6
    answer: 0
    explanation: EIGRPv6's multicast address stayed very near the same. In IPv4 it was 224.0.0.10 ; now it is FF02::A (A=10 in hexadecimal notation).
    keyConcept: Ipv6
    testedIn:
      - PPSC
      - FPSC
  - id: 10
    question: To enable EIGRP, which of the following would you use? 1. Router1(config-if)# ipv6 ospf 10 area 0.0.0.0 2. Router1(config-if)# ipv6 router rip 1 3. Router1(config)# ipv6 router eigrp 10 4. Router1(config-rtr)# no shutdown 5. Router1(config-if)# ipv6 eigrp 10
    options:
      - 1, 3 and 5
      - 3, 4 and 5
      - 1 and 3
      - 5 only
    answer: 1
    explanation: Unlike RIPng and OSPFv3, you need to configure EIGRP both from global configuration mode and from interface mode, and you have to enable the command with the no shutdown command.
    keyConcept: Ipv6
    testedIn:
      - PPSC
      - FPSC
  - id: 11
    question: Which of the following is true when describing a link-local address?
    options:
      - Packets addressed to a unicast address are delivered to a single interface.
      - These are your typical publicly routable addresses, just like a regular publicly routable address in IPv4.
      - These are like private addresses in IPv4 in that they are not meant to be routed.
      - These addresses are meant for nonrouting purposes, but they are almost globally unique so it is unlikely they will have an address overlap.
    answer: 2
    explanation: Link-local addresses are meant for throwing together a temporary LAN for meetings or a small LAN that is not going to be routed but needs to share and access files and services locally.
    keyConcept: Ipv6
    testedIn:
      - PPSC
      - FPSC
  - id: 12
    question: Which of the following is true when describing a unique local address?
    options:
      - Packets addressed to a unicast address are delivered to a single interface.
      - These are your typical publicly routable addresses, just like a regular publicly routable address in IPv4.
      - These are like private addresses in IPv4 in that they are not meant to be routed.
      - These addresses are meant for nonrouting purposes, but they are almost globally unique so it is unlikely they will have an address overlap.
    answer: 3
    explanation: These addresses are meant for nonrouting purposes like link-local, but they are almost globally unique so it is unlikely they will have an address overlap. Unique local addresses were designed as a replacement for site-local addresses.
    keyConcept: Ipv6
    testedIn:
      - PPSC
      - FPSC
  - id: 13
    question: Which of the following is true when describing an anycast address?
    options:
      - Packets addressed to a unicast address are delivered to a single interface.
      - Packets are delivered to all interfaces identified by the address. This is also called one-to-many addresses.
      - This address identifies multiple interfaces and the anycast packet is only delivered to one address. This address can also be called one-to-one-of-many.
      - These addresses are meant for nonrouting purposes, but they are almost globally unique so it is unlikely they will have an address overlap.
    answer: 2
    explanation: Anycast addresses identify multiple interfaces, which is the same as multicast; however, the big difference is that the anycast packet is only delivered to one address, the first one it finds defined in the terms of routing distance. This address can also be called one-to-one-of-many.
    keyConcept: Ipv6
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: You want to ping the loopback address of your local host(with IPv6). What will you type?
    options:
      - ping 127.0.0.1
      - ping 0.0.0.0
      - ping ::1
      - trace 0.0.::1
    answer: 2
    explanation: The loopback address with IPv4 is 127.0.0.1 . With IPv6, that address is ::1 .
    keyConcept: Ipv6
    testedIn:
      - PPSC
      - FPSC
  - id: 15
    question: Which statement(s) about IPv4 and IPv6 addresses are true? 1. An IPv6 address is 32 bits long, represented in hexidecimal. 2. An IPv6 address is 128 bits long, represented in decimal. 3. An IPv4 address is 32 bits long, represented in decimal. 4. An IPv6 address is 128 bits long, represented in hexidecimal.
    options:
      - 1 and 3 only
      - 2 only
      - 3 and 4
      - 2 and 4
    answer: 2
    explanation: IPv4 addresses are 32 bits long and are represented in decimal format. IPv6 addresses are 128 bits long and represented in hexadecimal format.
    keyConcept: Ipv6
    testedIn:
      - PPSC
      - FPSC
---


