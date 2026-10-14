---
title: Ip Routing MCQs with Explanations
description: Practice high-yield Computer Science & IT MCQs on Ip Routing with worked academic solutions for PPSC, FPSC, CSS, PMS, NTS.
subject: computer-science
subjectName: Computer Science & IT
topic: ip-routing
topicName: Ip Routing
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
    question: Which of the following statements are true regarding the command ip route 172.16.4.0 255.255.255.0 192.168.4.2 ? 1. The command is used to establish a static route. 2. The default administrative distance is used. 3. The command is used to configure the default route. 4. The subnet mask for the source address is 255.255.255.0.
    options:
      - 1 and 2
      - 2 and 4
      - 3 and 4
      - All of the above
    answer: 0
    explanation: Although answer D almost seems right, it is not; the mask is the mask used on the remote network, not the source network. Since there is no number at the end of the static route, it is using the default administrative distance of 1.
    keyConcept: Ip Routing
    testedIn:
      - PPSC
      - FPSC
  - id: 2
    question: Which command displays RIP routing updates?
    options:
      - show ip route
      - debug ip rip
      - show protocols
      - debug ip route
    answer: 1
    explanation: The debug ip rip command is used to show the Internet Protocol (IP) Routing Information Protocol (RIP) updates being sent and received on the router.
    keyConcept: Ip Routing
    testedIn:
      - PPSC
      - FPSC
  - id: 3
    question: Which statement is true regarding classless routing protocols? 1. The use of discontiguous networks is not allowed. 2. The use of variable length subnet masks is permitted. 3. RIPv1 is a classless routing protocol. 4. IGRP supports classless routing within the same autonomous system. 5. RIPv2 supports classless routing.
    options:
      - 1, 3 and 5
      - 3 and 4
      - 2 and 5
      - None of the above
    answer: 2
    explanation: Classful routing means that all hosts in the internetwork use the same mask. Classless routing means that you can use Variable Length Subnet Masks (VLSMs) and can also support discontiguous networking.
    keyConcept: Ip Routing
    testedIn:
      - PPSC
      - FPSC
  - id: 4
    question: You have the following routing table. Which of the following networks will not be placed in the neighbor routing table? R 192.168.30.0/24 [120/1] via 192.168.40.1, 00:00:12, Serial0 C 192.168.40.0/24 is directly connected, Serial0 172.16.0.0/24 is subnetted, 1 subnets C 172.16.30.0 is directly connected, Loopback0 R 192.168.20.0/24 [120/1] via 192.168.40.1, 00:00:12, Serial0 R 10.0.0.0/8 [120/15] via 192.168.40.1, 00:00:07, Serial0 C 192.168.50.0/24 is directly connected, Ethernet0
    options:
      - 172.16.30.0
      - 192.168.30.0
      - 10.0.0.0
      - All of them will be placed in the neighbor routing table
    answer: 2
    explanation: The network 10.0.0.0 cannot be placed in the next router's routing table because it already is at 15 hops. One more hop would make the route 16 hops, and that is not valid in RIP networking.
    keyConcept: Ip Routing
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: What is split horizon?
    options:
      - Information about a route should not be sent back in the direction from which the original update came.
      - It splits the traffic when you have a large bus (horizon) physical network.
      - It holds the regular updates from broadcasting to a downed link.
      - It prevents regular update messages from reinstating a route that has gone down.
    answer: 0
    explanation: A split horizon will not advertise a route back to the same router it learned the route from.
    keyConcept: Ip Routing
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: What command is used to stop RIP routing updates from exiting out an interface but still allow the interface to receive RIP route updates?
    options:
      - "Router (config-if) # no routing"
      - "Router (config-if) # passive-interface"
      - "Router (config-router) # passive-interface s0"
      - "Router (config-router) # no routing updates"
    answer: 2
    explanation: "The (config-router) #passive-interface command stops updates from being sent out an interface, but route updates are still received."
    keyConcept: Ip Routing
    testedIn:
      - PPSC
      - FPSC
  - id: 7
    question: Two connected routers are configured with RIP routing. What will be the result when a router receives a routing update that contains a higher-cost path to a network already in its routing table?
    options:
      - The updated information will be added to the existing routing table.
      - The update will be ignored and no further action will occur.
      - The updated information will replace the existing routing table entry.
      - The existing routing table entry will be deleted from the routing table and all routers will exchange routing updates to reach convergence.
      - They will all load-balance.
    answer: 1
    explanation: When a routing update is received by a router, the router first checks the administrative distance (AD) and always chooses the route with the lowest AD. However, if two routes are received and they both have the same AD, then the router will choose the one route with the lowest metrics, or in RIP's case, hop count.
    keyConcept: Ip Routing
    testedIn:
      - PPSC
      - FPSC
  - id: 8
    question: You type debug ip rip on your router console and see that 172.16.10.0 is being advertised to you with a metric of 16. What does this mean?
    options:
      - The route is 16 hops away.
      - The route has a delay of 16 microseconds.
      - The route is inaccessible.
      - The route is queued at 16 messages a second.
      - They will all load-balance.
    answer: 2
    explanation: You cannot have 16 hops on a RIP network by default. If you receive a route advertised with a metric of 16, this means it is inaccessible.
    keyConcept: Ip Routing
    testedIn:
      - PPSC
      - FPSC
  - id: 9
    question: The Corporate router receives an IP packet with a source IP address of 192.168.214.20 and a destination address of 192.168.22.3. Looking at the output from the Corporate router, what will the router do with this packet? Corp#sh ip route [output cut] R 192.168.215.0 [120/2] via 192.168.20.2, 00:00:23, Serial0/0 R 192.168.115.0 [120/1] via 192.168.20.2, 00:00:23, Serial0/0 R 192.168.30.0 [120/1] via 192.168.20.2, 00:00:23, Serial0/0 C 192.168.20.0 is directly connected, Serial0/0 C 192.168.214.0 is directly connected, FastEthernet0/0
    options:
      - The packet will be discarded.
      - The packet will be routed out the S0/0 interface.
      - The router will broadcast looking for the destination.
      - The packet will be routed out the Fa0/0 interface.
      - They will all load-balance.
    answer: 0
    explanation: Since the routing table shows no route to the 192.168.22.0 network, the router will discard the packet and send an ICMP destination unreachable message out interface FastEthernet 0/0, which is the source LAN where the packet originated from.
    keyConcept: Ip Routing
    testedIn:
      - PPSC
      - FPSC
  - id: 10
    question: If your routing table has a static, a RIP, and an IGRP route to the same network, which route will be used to route packets by default?
    options:
      - Any available route
      - RIP route
      - Static route
      - IGRP route
      - They will all load-balance.
    answer: 2
    explanation: Static routes have an administrative distance of 1 by default. Unless you change this, a static route will always be used over any other found route. IGRP has an administrative distance of 100, and RIP has an administrative distance of 120, by default.
    keyConcept: Ip Routing
    testedIn:
      - PPSC
      - FPSC
  - id: 11
    question: What is route poisoning?
    options:
      - It sends back the protocol received from a router as a poison pill, which stops the regular updates.
      - It is information received from a router that can't be sent back to the originating router.
      - It prevents regular update messages from reinstating a route that has just come up.
      - It describes when a router sets the metric for a downed link to infinity.
    answer: 3
    explanation: Another way to avoid problems caused by inconsistent updates and to stop network loops is route poisoning. When a network goes down, the distance-vector routing protocol initiates route poisoning by advertising the network with a metric of 16, or unreachable (sometimes referred to as infinite).
    keyConcept: Ip Routing
    testedIn:
      - PPSC
      - FPSC
  - id: 12
    question: Which of the following is true regarding RIPv2?
    options:
      - It has a lower administrative distance than RIPv1.
      - It converges faster than RIPv1.
      - It has the same timers as RIPv1.
      - It is harder to configure than RIPv1.
    answer: 2
    explanation: RIPv2 is pretty much just like RIPv1. It has the same administrative distance and timers and is configured just like RIPv1.
    keyConcept: Ip Routing
    testedIn:
      - PPSC
      - FPSC
  - id: 13
    question: A network administrator views the output from the show ip route command. A network that is advertised by both RIP and IGRP appears in the routing table flagged as an IGRP route. Why is the RIP route to this network not used in the routing table?
    options:
      - IGRP has a faster update timer.
      - IGRP has a lower administrative distance.
      - RIP has a higher metric value for that route.
      - The IGRP route has fewer hops.
    answer: 1
    explanation: RIP has an administrative distance (AD) of 120, while IGRP has an administrative distance of 100, so the router will discard any route with a higher AD than 100.
    keyConcept: Ip Routing
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: What does RIPv2 use to prevent routing loops? 1. CIDR 2. Split horizon 3. Authentication 4. Classless masking 5. Holddown timers
    options:
      - 1 and 3
      - 2, 3 and 5
      - 2 and 5
      - 3 and 4
    answer: 2
    explanation: RIPv2 uses the same timers and loop-avoidance schemes as RIPv1. Split horizon is used to stop an update from being sent out the same interface it was received on. Holddown timers allow time for a network to become stable in the case of a flapping link.
    keyConcept: Ip Routing
    testedIn:
      - PPSC
      - FPSC
  - id: 15
    question: Which two of the following are true regarding the distance-vector and link-state routing protocols? 1. Link state sends its complete routing table out all active interfaces on periodic time intervals. 2. Distance vector sends its complete routing table out all active interfaces on periodic time intervals. 3. Link state sends updates containing the state of its own links to all routers in the internetwork. 4. Distance vector sends updates containing the state of its own links to all routers in the internetwork.
    options:
      - 1 only
      - 3 only
      - 2 and 3 only
      - None of the above
    answer: 2
    explanation: The distance-vector routing protocol sends its complete routing table out all active interfaces at periodic time intervals. Link-state routing protocols send updates containing the state of its own links to all routers in the internetwork.
    keyConcept: Ip Routing
    testedIn:
      - PPSC
      - FPSC
  - id: 16
    question: IGRP uses which of the following as default parameters for finding the best path to a remote network? 1. Hop count 2. MTU 3. Cumulative interface delay 4. STP 5. Path bandwidth value
    options:
      - 1 and 3
      - 3 and 5
      - 2, 3 and 5
      - All of the above
    answer: 1
    explanation: IGRP uses bandwidth and delay of the line, by default, to determine the best path to a remote network. Delay of the line can sometimes be called the cumulative interface delay.
    keyConcept: Ip Routing
    testedIn:
      - PPSC
      - FPSC
  - id: 17
    question: "Network 206.143.5.0 was assigned to the Acme Company to connect to its ISP. The administrator of Acme would like to configure one router with the commands to access the Internet. Which commands could be configured on the Gateway router to allow Internet access to the entire network? 1. Gateway (config) # ip route 0.0.0.0 0.0.0.0 206.143.5.2 2. Gateway (config) # router rip 3. Gateway (config-router) # network 206.143.5.0 4. Gateway (config-router) # network 206.143.5.0 default"
    options:
      - 1 only
      - 3 only
      - 1, 2 and 4
      - 1 and 4
    answer: 3
    explanation: There are actually three different ways to configure the same default route, but only two are shown in the answer. First, you can set a default route with the 0.0.0.0 0.0.0.0 mask and then specify the next hop, as in option A. Or you can use 0.0.0.0 0.0.0.0 and use the exit interface instead of the next hop. Finally, you can use option D with the ip default-network command.
    keyConcept: Ip Routing
    testedIn:
      - PPSC
      - FPSC
---


