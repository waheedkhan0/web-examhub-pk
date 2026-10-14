---
title: Virtual Lans MCQs with Explanations
description: Practice high-yield Computer Science & IT MCQs on Virtual Lans with worked academic solutions for PPSC, FPSC, CSS, PMS, NTS.
subject: computer-science
subjectName: Computer Science & IT
topic: virtual-lans
topicName: Virtual Lans
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
    question: Which of the following is true regarding VLANs?
    options:
      - You must have at least two VLANs defined in every Cisco switched network.
      - All VLANs are configured at the fastest switch and, by default, propagate this information to all other switches.
      - You should not have more than 10 switches in the same VTP domain.
      - VTP is used to send VLAN information to switches in a configured VTP domain.
    answer: 3
    explanation: Switches do not propagate VLAN information by default; you must configure the VTP domain. VLAN Trunk Protocol (VTP) is used to propagate VLAN information across a trunked link.
    keyConcept: Virtual Lans
    testedIn:
      - PPSC
      - FPSC
  - id: 2
    question: Which protocol reduces administrative overhead in a switched network by allowing the configuration of a new VLAN to be distributed to all the switches in a domain?
    options:
      - STP
      - VTP
      - DHCP
      - ISL
    answer: 1
    explanation: Virtual Trunk Protocol (VTP) is used to pass a VLAN database to any or all switches in the switched network. The three VTP modes are server, client, and transparent.
    keyConcept: Virtual Lans
    testedIn:
      - PPSC
      - FPSC
  - id: 3
    question: Which of the following is true regarding VTP?
    options:
      - All switches are VTP servers by default.
      - All switches are VTP transparent by default.
      - VTP is on by default with a domain name of Cisco on all Cisco switches.
      - All switches are VTP clients by default.
    answer: 0
    explanation: All Cisco switches are VTP servers by default. No other VTP information is configured on a Cisco switch by default. You must set the VTP domain name on all switches to be the same domain name or they will not share the VTP database.
    keyConcept: Virtual Lans
    testedIn:
      - PPSC
      - FPSC
  - id: 4
    question: Which of the following commands sets a trunk port on a 2960 switch?
    options:
      - trunk on
      - trunk all
      - switchport trunk on
      - switchport mode trunk
    answer: 3
    explanation: To set a switch port to trunk mode, which allows all VLAN information to pass down the link, use the switchport mode trunk command.
    keyConcept: Virtual Lans
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: Which command will configure a switch port to use the IEEE standard method of inserting VLAN membership information into Ethernet frames?
    options:
      - Switch(config)# switchport trunk encapsulation isl
      - Switch(config)# switchport trunk encapsulation ietf
      - Switch(config)# switchport trunk encapsulation dot1q
      - Switch(config-if)# switchport trunk encapsulation isl
    answer: 2
    explanation: "To configure a switch port to use the IEEE standard method of inserting VLAN membership information into Ethernet frames, you would use the dot1q encapsulation method. This method inserts VLAN tags into Ethernet frames according to the IEEE 802.1Q standard, allowing for the transmission of VLAN information across the network. Options A, B, and D are incorrect because: Option A: switchport trunk encapsulation isl configures the switch port to use the Inter-Switch Link (ISL) encapsulation method, which is a Cisco proprietary protocol and not part of the IEEE standard. Option B: switchport trunk encapsulation ietf is not a valid command. There is no encapsulation method called \"ietf\" for trunk ports in Cisco switches. Option D: switchport trunk encapsulation isl is a command used at the interface configuration level ( Switch(config-if)# ), but it specifies the ISL encapsulation method, which, as mentioned earlier, is not part of the IEEE standard. Therefore, the correct command to configure a switch port to use the IEEE standard method of inserting VLAN membership information into Ethernet frames is Option C: Switch(config)# switchport trunk encapsulation dot1q ."
    keyConcept: Virtual Lans
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: When a new trunk link is configured on an IOS-based switch, which VLANs are allowed over the link?
    options:
      - By default, all VLANs are allowed on the trunk.
      - No VLAN's are allowed, you must configure each VLAN by hand.
      - Only configured VLAN's are allowed on the link.
      - Only extended VLAN's are allowed by default.
    answer: 0
    explanation: By default, all VLANs are allowed on the trunk link and you must remove by hand each VLAN that you don't want traversing the trunked link.
    keyConcept: Virtual Lans
    testedIn:
      - PPSC
      - FPSC
  - id: 7
    question: Which of the following modes are valid when a switch port is used as a VLAN trunk? 1. Blocking 2. Dynamic auto 3. Dynamic desirable 4. Nonegotiate 5. Access 6. Learning
    options:
      - 1, 2 and 6
      - 2, 3 and 4
      - 4, 5 and 6
      - 2, 4, and 5
    answer: 1
    explanation: The valid modes of a VLAN trunk on a switch are dynamic auto, dynamic desirable, trunk (on), and nonegotiate.
    keyConcept: Virtual Lans
    testedIn:
      - PPSC
      - FPSC
  - id: 8
    question: To configure the VLAN trunking protocol to communicate VLAN information between two switches, what two requirements must be met? 1. Each end of the trunk link must be set to the IEEE 802.1e encapsulation. 2. The VTP management domain name of both switches must be set the same. 3. All ports on both the switches must be set as access ports. 4. One of the two switches must be configured as a VTP server. 5. A rollover cable is required to connect the two switches together. 6. A router must be used to forward VTP traffic between VLANs.
    options:
      - 1, 2 and 4
      - 3, 5 and 6
      - 2 and 4
      - 1 and 6
    answer: 2
    explanation: You must have the same VTP domain name on all switches in order to share VLAN information between the switches. At least one of the switches must be a VTP server; the other switches should be set to VTP client.
    keyConcept: Virtual Lans
    testedIn:
      - PPSC
      - FPSC
  - id: 9
    question: You want to improve network performance by increasing the bandwidth available to hosts and limit the size of the broadcast domains. Which of the following options will achieve this goal?
    options:
      - Managed hubs
      - Bridges
      - Switches
      - Switches configured with VLANs
    answer: 3
    explanation: By creating and implementing VLANs in your switched network, you can break up broadcast domains at layer 2. For hosts on different VLANs to communicate, you must have a router or layer 3 switch.
    keyConcept: Virtual Lans
    testedIn:
      - PPSC
      - FPSC
  - id: 10
    question: Which switching technology reduces the size of a broadcast domain?
    options:
      - ISL
      - 802.1Q
      - VLANs
      - STP
    answer: 2
    explanation: Virtual LANs break up broadcast domains in layer 2 switched internetworks.
    keyConcept: Virtual Lans
    testedIn:
      - PPSC
      - FPSC
  - id: 11
    question: Which of the following provide inter-switch VLAN communication? 1. ISL 2. VTP 3. 802.1Q 4. 802.3Z
    options:
      - 2 only
      - 1 and 3
      - 2 and 4
      - 2, 3 and 4
    answer: 1
    explanation: ISL is a Cisco-proprietary frame-tagging method. IEEE 802.1Q is the nonproprietary version of frame tagging.
    keyConcept: Virtual Lans
    testedIn:
      - PPSC
      - FPSC
  - id: 12
    question: "A switch has been configured for three different VLANs: VLAN2, VLAN3, and VLAN4. A router has been added to provide communication between the VLANs. What type of interface is necessary on the router if only one connection is to be made between the router and the switch?"
    options:
      - 10Mbps Ethernet
      - 56Kbps Serial
      - 100Mbps Ethernet
      - 1Gbps Ethernet
    answer: 2
    explanation: Although you can use either 100Mbps or 1Gbps Ethernet, the 100Mbps is necessary at a minimum and is the best answer to this question. You need to trunk the link from the switch to the router to make this connection work with inter-VLAN communication.
    keyConcept: Virtual Lans
    testedIn:
      - PPSC
      - FPSC
  - id: 13
    question: Which of the following are benefits of VLANs? 1. They increase the size of collision domains. 2. They allow logical grouping of users by function. 3. They can enhance network security. 4. They increase the size of broadcast domains while decreasing the number of collision domains. 5. They simplify switch administration. 6. They increase the number of broadcast domains while decreasing the size of the broadcast domains.
    options:
      - 1 and 5
      - 2 and 4
      - 1, 3 and 5
      - 2, 3 and 6
    answer: 3
    explanation: VLANs break up broadcast domains in a switched layer 2 network, which means smaller broadcast domains. They allow configuration by logical function instead of physical location and can create some security if configured correctly.
    keyConcept: Virtual Lans
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: Which of the following protocols are used to configure trunking on a switch? 1. VLAN Trunk Protocol 2. VLAN 3. 802.1Q 4. ISL
    options:
      - 1 only
      - 3 only
      - 3 and 4
      - 1, 3 and 4
    answer: 2
    explanation: Cisco has a proprietary trunking protocol called ISL. The IEEE version is 802.1Q.
    keyConcept: Virtual Lans
    testedIn:
      - PPSC
      - FPSC
  - id: 15
    question: What VTP mode allows you to change VLAN information on the switch?
    options:
      - Client
      - STP
      - Server
      - Transparent
    answer: 2
    explanation: Only in server mode can you change VTP information on a switch.
    keyConcept: Virtual Lans
    testedIn:
      - PPSC
      - FPSC
  - id: 16
    question: You connect a host to a switch port, but the new host cannot log into the server that is plugged into the same switch. What could the problem be?
    options:
      - The router is not configured for the new host.
      - The VTP configuration on the switch is not updated for the new host.
      - The host has an invalid MAC address.
      - The switch port the host is connected to is not configured to the correct VLAN membership.
    answer: 3
    explanation: This question is a little vague, but the best answer is that the VLAN membership for the port is not configured.
    keyConcept: Virtual Lans
    testedIn:
      - PPSC
      - FPSC
  - id: 17
    question: Which of the following is an IEEE standard for frame tagging?
    options:
      - ISL
      - 802.3Z
      - 802.1Q
      - 802.3U
    answer: 2
    explanation: 802.1Q was created to allow trunked links between disparate switches.
    keyConcept: Virtual Lans
    testedIn:
      - PPSC
      - FPSC
---


