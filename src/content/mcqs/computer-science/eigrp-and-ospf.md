---
title: Eigrp And Ospf MCQs with Explanations
description: Practice high-yield Computer Science & IT MCQs on Eigrp And Ospf with worked academic solutions for PPSC, FPSC, CSS, PMS, NTS.
subject: computer-science
subjectName: Computer Science & IT
topic: eigrp-and-ospf
topicName: Eigrp And Ospf
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
    question: With which network type will OSPF establish router adjacencies but not perform the DR/BDR election process?
    options:
      - Point-to-point
      - Backbone area 0
      - Broadcast multi-access
      - Non-broadcast multi-access
      - IS-IS
    answer: 0
    explanation: No DR is assigned on any type of point-to-point link. No DR/BDR is assigned on the NBMA point-to-multipoint due to the hub/spoke topology. DR and BDR are elected on broadcast and non-broadcast multi-access networks. Frame Relay is a non-broadcast multi-access (NBMA) network by default.
    keyConcept: Eigrp And Ospf
    testedIn:
      - PPSC
      - FPSC
  - id: 2
    question: Which of the following describe the process identifier that is used to run OSPF on a router? 1. It is locally significant. 2. It is globally significant. 3. It is needed to identify a unique instance of an OSPF database. 4. It is an optional parameter required only if multiple OSPF processes are running on the router.
    options:
      - 1, 2 and 4
      - 1 and 3
      - 3 and 5
      - All of the above
      - IS-IS
    answer: 1
    explanation: The Process ID for OSPF on a router is only locally significant and you can use the same number on each router, or each router can have a different number-it just doesn't matter. The numbers you can use are from 1 to 65,535. Don't get this confused with area numbers, which can be from 0 to 4.2 billion.
    keyConcept: Eigrp And Ospf
    testedIn:
      - PPSC
      - FPSC
  - id: 3
    question: A network administrator needs to configure a router with a distance-vector protocol that allows classless routing. Which of the following satisfies those requirements?
    options:
      - IGRP
      - OSPF
      - RIPv1
      - EIGRP
      - IS-IS
    answer: 3
    explanation: In this question, we're calling EIGRP just plain old distance vector. EIGRP is an "advanced" distance-vector routing protocol, sometimes called a hybrid routing protocol because it uses the characteristics of both distance-vector and link-state routing protocols.
    keyConcept: Eigrp And Ospf
    testedIn:
      - PPSC
      - FPSC
  - id: 4
    question: What is the administrative distance of OSPF?
    options:
      - "90"
      - "100"
      - "110"
      - "120"
    answer: 2
    explanation: The administrative distance (AD) is a very important parameter in a routing protocol. The lower the AD, the more trusted the route. If you have IGRP and OSPF running, by default IGRP routes would be placed in the routing table because IGRP has a lower AD of 100. OSPF has an AD of 110. RIPv1 and RIPv2 both have an AD of 120, and EIGRP is the lowest, at 90.
    keyConcept: Eigrp And Ospf
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: Your company is running IGRP using an AS of 10. You want to configure EIGRP on the network but want to migrate slowly to EIGRP and don't want to configure redistribution. What command would allow you to migrate over time to EIGRP without configuring redistribution?
    options:
      - router eigrp 11
      - router eigrp 10
      - router eigrp 10 redistribute igrp
      - router igrp combine eigrp 10
    answer: 1
    explanation: If you enable EIGRP on a router with the same autonomous system (AS) number, EIGRP will automatically redistribute IGRP into EIGRP. You will see the IGRP injected routes as external (EX) routes with an EIGRP AD of 170. This is a nice feature that lets you migrate slowly to EIGRP with no extra configuration.
    keyConcept: Eigrp And Ospf
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: Where are EIGRP successor routes stored?
    options:
      - In the routing table only
      - In the neighbor table only
      - In the topology table only
      - In the routing table and the topology table
      - In the routing table and the neighbor table
    answer: 3
    explanation: Successor routes are going to be in the routing table since they are the best path to a remote network. However, the topology table has a link to each and every network, so the best answer is topology table and routing table. Any secondary route to a remote network is considered a feasible successor, and those routes are only found in the topology table and used as backup routes in case of primary route failure.
    keyConcept: Eigrp And Ospf
    testedIn:
      - PPSC
      - FPSC
  - id: 7
    question: Which command will display all the EIGRP feasible successor routes known to a router?
    options:
      - show ip routes *
      - show ip eigrp summary
      - show ip eigrp topology
      - show ip eigrp adjacencies
    answer: 2
    explanation: Any secondary route to a remote network is considered a feasible successor, and those routes are only found in the topology table and used as backup routes in case of primary route failure. You can see the topology table with the show ip eigrp topology command.
    keyConcept: Eigrp And Ospf
    testedIn:
      - PPSC
      - FPSC
  - id: 8
    question: Which is true regarding EIGRP successor routes? 1. A successor route is used by EIGRP to forward traffic to a destination. 2. Successor routes are saved in the topology table to be used if the primary route fails. 3. Successor routes are flagged as "active" in the routing table. 4. A successor route may be backed up by a feasible successor route. 5. Successor routes are stored in the neighbor table following the discovery process.
    options:
      - 1 and 3
      - 2 and 3
      - 1 and 4
      - 3, 4 and 5
    answer: 2
    explanation: Successor routes are the routes picked from the topology table as the best route to a remote network, so these are the routes that IP uses in the routing table to forward traffic to a remote destination. The topology table contains any route that is not as good as the successor route and is considered a feasible successor, or backup route. Remember that all routes are in the topology table, even successor routes.
    keyConcept: Eigrp And Ospf
    testedIn:
      - PPSC
      - FPSC
  - id: 9
    question: Which EIGRP information is held in RAM and maintained through the use of Hello and update packets? 1. Neighbor table 2. STP table 3. Topology table 4. DUAL table
    options:
      - 2 only
      - 4 only
      - 1 and 3
      - All of the above
    answer: 2
    explanation: "EIGRP holds three tables in RAM: neighbor, topology, and routing. The neighbor and topology tables are built and maintained with the use of Hello packets."
    keyConcept: Eigrp And Ospf
    testedIn:
      - PPSC
      - FPSC
  - id: 10
    question: Which of the following are true regarding OSPF areas? 1. You must have separate loopback interfaces configured in each area. 2. The numbers you can assign an area go up to 65,535. 3. The backbone area is also called area 0. 4. If your design is hierarchical, then you don't need multiple areas. 5. All areas must connect to area 0.
    options:
      - 1 only
      - 1 and 2 only
      - 3 and 4 only
      - 3, 4 and 5
    answer: 3
    explanation: Loopback interfaces are created on a router, and the highest IP address on a loopback (logical) interface becomes the RID of the router but has nothing to do with areas and is optional, so (1) is wrong. The numbers you can create an area with are from 0 to 4,294,967,295 option (2) is wrong. The backbone area is called area 0, so option (3) is correct. All areas must connect to area 0, so option (5) is correct. If you have only one area, it must be called area 0. This leaves option (4), which must be correct; it doesn't make much sense, but it is the best answer.
    keyConcept: Eigrp And Ospf
    testedIn:
      - PPSC
      - FPSC
  - id: 11
    question: What are reasons for creating OSPF in a hierarchical design? 1. To decrease routing overhead 2. To speed up convergence 3. To confine network instability to single areas of the network 4. To make configuring OSPF easier
    options:
      - 1, 2 and 3
      - 3 only
      - 3 and 4
      - 2, 3 nd 4
    answer: 0
    explanation: OSPF is created in a hierarchical design, not a flat design like RIP. This decreases routing overhead, speeds up convergence, and confines network instability to a single area of the network.
    keyConcept: Eigrp And Ospf
    testedIn:
      - PPSC
      - FPSC
  - id: 12
    question: Which two of the following commands will place network 10.2.3.0/24 into area 0? 1. router eigrp 10 2. router ospf 10 3. network 10.0.0.0 4. network 10.2.3.0 0.0.0.255 area0 5. network 10.2.3.0 0.0.0.255 area 0
    options:
      - 1 and 4
      - 2, 4, and 5
      - 2 and 5
      - 3 and 4
    answer: 2
    explanation: To enable OSPF, you must first start OSPF using a Process ID. The number is irrelevant; just choose a number from 1 to 65,535 and you're good to go. After you start the OSPF process, you must configure any network that you want advertised via OSPF using wildcards and the area command. Statement (4) is wrong because there must be a space after the parameter area and before you list the area number.
    keyConcept: Eigrp And Ospf
    testedIn:
      - PPSC
      - FPSC
  - id: 13
    question: If routers in a single area are configured with the same priority value, what value does a router use for the OSPF Router ID in the absence of a loopback interface?
    options:
      - The lowest IP address of any physical interface
      - The highest IP address of any physical interface
      - The lowest IP address of any logical interface
      - The highest IP address of any logical interface
    answer: 1
    explanation: At the moment of OSPF process startup, the highest IP address on any active interface will be the Router ID (RID) of the router. If you have a loopback interface configured (logical interface), then that will override the interface IP address and become the RID of the router automatically.
    keyConcept: Eigrp And Ospf
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: Which of the following protocols support VLSM, summarization, and discontiguous networking? 1. RIPv1 2. IGRP 3. EIGRP 4. OSPF 5. BGP 6. RIPv2
    options:
      - 1 and 4
      - 2 and 5
      - 3, 4 and 6
      - All of the above
    answer: 2
    explanation: RIPv1 and IGRP are true distance-vector routing protocols and can't do much, really-except build and maintain routing tables and use a lot of bandwidth! RIPv2, EIGRP, and OSPF build and maintain routing tables, but they also provide classless routing, which allows for VLSM, summarization, and discontiguous networking.
    keyConcept: Eigrp And Ospf
    testedIn:
      - PPSC
      - FPSC
  - id: 15
    question: "You get a call from a network administrator who tells you that he typed the following into his router: Router (config) #router ospf 1 Router (config-router) #network 10.0.0.0 255.0.0.0 area 0 He tells you he still can't see any routes in the routing table. What configuration error did the administrator make?"
    options:
      - The wildcard mask is incorrect.
      - The OSPF area is wrong.
      - The OSPF Process ID is incorrect.
      - The AS configuration is wrong.
    answer: 0
    explanation: The administrator typed in the wrong wildcard mask configuration. The wildcard should have been 0.0.0.255.
    keyConcept: Eigrp And Ospf
    testedIn:
      - PPSC
      - FPSC
  - id: 16
    question: Which of the following network types have a designated router and a backup designated router assigned? 1. Broadcast 2. Point-to-point 3. NBMA 4. NBMA point-to-point
    options:
      - 1, 2 and 3
      - 1 and 3
      - 3 and 4
      - All of the above
    answer: 1
    explanation: No DR is assigned on any type of point-to-point link. No DR/BDR is assigned on the NBMA point-to-multipoint due to the hub/spoke topology. DR and BDR are elected on broadcast and non-broadcast multi-access networks. Frame Relay is a non-Broadcast Multi-Access (NBMA) network by default.
    keyConcept: Eigrp And Ospf
    testedIn:
      - PPSC
      - FPSC
  - id: 17
    question: Which type of OSPF network will elect a backup designated router? 1. Broadcast multi-access 2. Non-broadcast multi-access 3. Point-to-point 4. Broadcast multipoint
    options:
      - 1 and 2
      - 3 and 4
      - 3 only
      - None of the above
    answer: 0
    explanation: DR and BDR are elected on broadcast and non-broadcast multi-access networks. Frame Relay is a non-broadcast multi-access (NBMA) network by default. No DR is assigned on any type of point-to-point link. No DR/BDR is assigned on the NBMA point-to-multipoint due to the hub/spoke topology.
    keyConcept: Eigrp And Ospf
    testedIn:
      - PPSC
      - FPSC
  - id: 18
    question: You need the IP address of the devices with which the router has established an adjacency. Also, the retransmit interval and the queue counts for the adjacent routers need to be checked. What command will display the required information?
    options:
      - show ip eigrp adjacency
      - show ip eigrp topology
      - show ip eigrp interfaces
      - show ip eigrp neighbors
    answer: 3
    explanation: The show ip eigrp neighbors command allows you to check the IP addresses as well as the retransmit interval and queue counts for the neighbors that have established an adjacency.
    keyConcept: Eigrp And Ospf
    testedIn:
      - PPSC
      - FPSC
---


