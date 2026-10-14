---
title: Spanning Tree Protocol MCQs with Explanations
description: Practice high-yield Computer Science & IT MCQs on Spanning Tree Protocol with worked academic solutions for PPSC, FPSC, CSS, PMS, NTS.
subject: computer-science
subjectName: Computer Science & IT
topic: spanning-tree-protocol
topicName: Spanning Tree Protocol
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
    question: What is the purpose of Spanning Tree Protocol in a switched LAN?
    options:
      - To provide a mechanism for network monitoring in switched environments
      - To prevent routing loops in networks with redundant paths
      - To prevent switching loops in networks with redundant switched paths
      - To manage the VLAN database across multiple switches
      - To create collision domains
    answer: 2
    explanation: The Spanning Tree Protocol (STP) was designed to stop layer 2 loops. All Cisco switches have the STP on by default.
    keyConcept: Spanning Tree Protocol
    testedIn:
      - PPSC
      - FPSC
  - id: 2
    question: Which statement describes a spanning-tree network that has converged?
    options:
      - All switch and bridge ports are in the forwarding state.
      - All switch and bridge ports are assigned as either root or designated ports.
      - All switch and bridge ports are in either the forwarding or blocking state.
      - All switch and bridge ports are either blocking or looping.
    answer: 2
    explanation: Convergence occurs when all ports on bridges and switches have transitioned to either the forwarding or blocking states. No data is forwarded until convergence is complete. Before data can be forwarded again, all devices must be updated.
    keyConcept: Spanning Tree Protocol
    testedIn:
      - PPSC
      - FPSC
  - id: 3
    question: What does a switch do when a frame is received on an interface and the destination hardware address is unknown or not in the filter table?
    options:
      - Forwards the switch to the first available link
      - Drops the frame
      - Floods the network with the frame looking for the device
      - Sends back a message to the originating station asking for a name resolution
    answer: 2
    explanation: Switches flood all frames that have an unknown destination address. If a device answers the frame, the switch will update the MAC address table to reflect the location of the device.
    keyConcept: Spanning Tree Protocol
    testedIn:
      - PPSC
      - FPSC
  - id: 4
    question: In which circumstance are multiple copies of the same unicast frame likely to be transmitted in a switched LAN?
    options:
      - During high-traffic periods
      - After broken links are reestablished
      - When upper-layer protocols require high reliability
      - In an improperly implemented redundant topology
    answer: 3
    explanation: If the Spanning Tree Protocol is not running on your switches and you connect them together with redundant links, you will have broadcast storms and multiple frame copies.
    keyConcept: Spanning Tree Protocol
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: If you want to disable STP on a port connected to a server, which command would you use?
    options:
      - disable spanning-tree
      - spanning-tree off
      - spanning-tree security
      - spanning-tree portfast
    answer: 3
    explanation: If you have a server or other devices connected into your switch that you're totally sure won't create a switching loop if STP is disabled, you can use something called portfast on these ports. Using it means the port won't spend the usual 50 seconds to come up while STP is converging.
    keyConcept: Spanning Tree Protocol
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: You have two switches connected together with two crossover cables for redundancy, and STP is disabled. Which of the following will happen between the switches?
    options:
      - The routing tables on the switches will not update.
      - The MAC forward/filter table will not update on the switch.
      - Broadcast storms will occur on the switched network.
      - The switches will automatically load-balance between the two links.
    answer: 2
    explanation: If spanning tree is disabled on a switch and you have redundant links to another switch, broadcast storms will occur, among other possible problems.
    keyConcept: Spanning Tree Protocol
    testedIn:
      - PPSC
      - FPSC
  - id: 7
    question: Layer 2 switching provides which of the following? 1. Hardware-based bridging (ASIC) 2. Wire speed 3. Low latency 4. Low cost
    options:
      - 1 and 3
      - 2 and 4
      - 1, 2 and 4
      - All of the above
    answer: 3
    explanation: Switches, unlike bridges, are hardware based. Cisco says its switches are wire speed and provide low latency, and I guess they are low cost compared to their prices in the 1990s.
    keyConcept: Spanning Tree Protocol
    testedIn:
      - PPSC
      - FPSC
  - id: 8
    question: Your switch has a port status LED that is alternating between green and amber. What could this indicate?
    options:
      - The port is experiencing errors.
      - The port is shut down.
      - The port is in STP blocking mode.
      - Nothing; this is normal.
    answer: 0
    explanation: When you connect to a switch port, at first the link lights are orange/amber, and then they turn green, indicating normal operation. If the link light is blinking, you have a problem.
    keyConcept: Spanning Tree Protocol
    testedIn:
      - PPSC
      - FPSC
  - id: 9
    question: You want to run the new 802.1w on your switches. Which of the following would enable this protocol?
    options:
      - Switch(config)# spanning-tree mode rapid-pvst
      - Switch# spanning-tree mode rapid-pvst
      - Switch(config)# spanning-tree mode 802.1w
      - Switch# spanning-tree mode 802.1w
    answer: 0
    explanation: 802.1w is the also called Rapid Spanning Tree Protocol. It is not enabled by default on Cisco switches, but it is a better STP to run since it has all the fixes that the Cisco extensions provide with 802.1d.
    keyConcept: Spanning Tree Protocol
    testedIn:
      - PPSC
      - FPSC
  - id: 10
    question: Which of the following is a layer 2 protocol used to maintain a loop-free network?
    options:
      - VTP
      - STP
      - RIP
      - CDP
    answer: 1
    explanation: The Spanning Tree Protocol is used to stop switching loops in a switched network with redundant paths.
    keyConcept: Spanning Tree Protocol
    testedIn:
      - PPSC
      - FPSC
  - id: 11
    question: "You need to allow one host to be permitted to attach dynamically to each switch interface. Which two commands must you configure on your catalyst switch to meet this policy? 1. Switch (config-if) # ip access-group 10 2. Switch (config-if) # switchport port-security maximum 1 3. Switch (config) # access-list 10 permit ip host 1 4. Switch (config-if) # switchport port-security violation shutdown 5. Switch (config) # mac-address-table secure"
    options:
      - 1 and 3
      - 2 and 4
      - 2, 3 and 5
      - 4 and 5
    answer: 1
    explanation: The switchport port-security is an important command, and it's super easy with the CNA; however, from the CLI, you can set the maximum number of MAC addresses allowed into the port, and then set the penalty if this maximum has been passed.
    keyConcept: Spanning Tree Protocol
    testedIn:
      - PPSC
      - FPSC
  - id: 12
    question: What command will display the forward/filter table?
    options:
      - show mac filter
      - show run
      - show mac address-table
      - show mac filter-table
    answer: 2
    explanation: The command show mac address-table displays the forward/filter table on the switch.
    keyConcept: Spanning Tree Protocol
    testedIn:
      - PPSC
      - FPSC
  - id: 13
    question: If a switch receives a frame and the source MAC address is not in the MAC address table but the destination address is, what will the switch do with the frame?
    options:
      - Discard it and send an error message back to the originating host
      - Flood the network with the frame
      - Add the source address and port to the MAC address table and forward the frame out the destination port
      - Add the destination to the MAC address table and then forward the frame
    answer: 2
    explanation: Since the source MAC address is not in the MAC address table, the switch will add the source address and the port it is connected to into the MAC address table and then forward the frame to the outgoing port.
    keyConcept: Spanning Tree Protocol
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: What is the result of segmenting a network with a bridge (switch)? 1. It increases the number of collision domains. 2. It decreases the number of collision domains. 3. It increases the number of broadcast domains. 4. It decreases the number of broadcast domains. 5. It makes smaller collision domains. 6. It makes larger collision domains.
    options:
      - 1 and 5
      - 2, 3 and 5
      - 3, 4 and 6
      - 1, 3 and 6
    answer: 0
    explanation: Bridges break up collision domains, which would increase the number of collision domains in a network and also make smaller collision domains.
    keyConcept: Spanning Tree Protocol
    testedIn:
      - PPSC
      - FPSC
  - id: 15
    question: What are the distinct functions of layer 2 switching that increase available bandwidth on the network? 1. Address learning 2. Routing 3. Forwarding and filtering 4. Creating network loops 5. Loop avoidance 6. IP addressing
    options:
      - 1, 3 and 5
      - 2, 4 and 6
      - 2 and 6
      - 3 and 5
    answer: 0
    explanation: Layer 2 features include address learning, forwarding and filtering of the network, and loop avoidance.
    keyConcept: Spanning Tree Protocol
    testedIn:
      - PPSC
      - FPSC
---


