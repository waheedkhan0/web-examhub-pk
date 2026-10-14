---
title: Networking Basics MCQs with Explanations
description: Practice high-yield Computer Science & IT MCQs on Networking Basics with worked academic solutions for PPSC, FPSC, CSS, PMS, NTS.
subject: computer-science
subjectName: Computer Science & IT
topic: networking-basics
topicName: Networking Basics
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
    question: How long is an IPv6 address?
    options:
      - 32 bits
      - 128 bytes
      - 64 bits
      - 128 bits
    answer: 3
    explanation: An IPv6 address is 128 bits long.
    keyConcept: Networking Basics
    testedIn:
      - PPSC
      - FPSC
  - id: 2
    question: What flavor of Network Address Translation can be used to have one IP address allow many users to connect to the global Internet?
    options:
      - NAT
      - Static
      - Dynamic
      - PAT
    answer: 3
    explanation: Port Address Translation (PAT) allows a one-to-many approach to network address translation.
    keyConcept: Networking Basics
    testedIn:
      - PPSC
      - FPSC
  - id: 3
    question: What are the two main types of access control lists (ACLs)? 1. Standard 2. IEEE 3. Extended 4. Specialized
    options:
      - 1 and 3
      - 2 and 4
      - 3 and 4
      - 1 and 2
    answer: 0
    explanation: Standard and extended access control lists (ACLs) are used to configure security on a router.
    keyConcept: Networking Basics
    testedIn:
      - PPSC
      - FPSC
  - id: 4
    question: What command is used to create a backup configuration?
    options:
      - copy running backup
      - copy running-config startup-config
      - config mem
      - wr mem
    answer: 1
    explanation: The command to back up the configuration on a router is copy running-config startup-config .
    keyConcept: Networking Basics
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: You have 10 users plugged into a hub running 10Mbps half-duplex. There is a server connected to the switch running 10Mbps half-duplex as well. How much bandwidth does each host have to the server?
    options:
      - 100 kbps
      - 1 Mbps
      - 2 Mbps
      - 10 Mbps
    answer: 3
    explanation: Each device has 10 Mbps to the server.
    keyConcept: Networking Basics
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: Which WLAN IEEE specification allows up to 54Mbps at 2.4GHz?
    options:
      - A
      - B
      - G
      - "N"
    answer: 2
    explanation: IEEE 802.11B is 2.4GHz, but with a maximum of only 11Mbps. IEEE 802.11G is in the 2.4GHz range, with a top speed of 54Mbps.
    keyConcept: Networking Basics
    testedIn:
      - PPSC
      - FPSC
  - id: 7
    question: Which of the following is the valid host range for the subnet on which the IP address 192.168.168.188 255.255.255.192 resides?
    options:
      - 192.168.168.129-190
      - 192.168.168.129-191
      - 192.168.168.128-190
      - 192.168.168.128-192
    answer: 0
    explanation: 256 - 192 = 64. 64 + 64 = 128. 128 + 64 = 192. The subnet is 128, the broadcast address is 191, and the valid host range is the numbers in between, or 129-190.
    keyConcept: Networking Basics
    testedIn:
      - PPSC
      - FPSC
  - id: 8
    question: To back up an IOS, what command will you use?
    options:
      - backup IOS disk
      - copy ios tftp
      - copy tftp flash
      - copy flash tftp
    answer: 3
    explanation: The command copy flash tftp will prompt you to back up an existing IOS in flash to a TFTP host.
    keyConcept: Networking Basics
    testedIn:
      - PPSC
      - FPSC
  - id: 9
    question: What protocol does PPP use to identify the Network layer protocol?
    options:
      - NCP
      - ISDN
      - HDLC
      - LCP
    answer: 0
    explanation: Network Control Protocol is used to help identify the Network layer protocol used in the packet.
    keyConcept: Networking Basics
    testedIn:
      - PPSC
      - FPSC
  - id: 10
    question: Which of the following commands will allow you to set your Telnet password on a Cisco router?
    options:
      - line telnet 0 4
      - line aux 0 4
      - line vty 0 4
      - line con 0
    answer: 2
    explanation: The command line vty 0 4 places you in a prompt that will allow you to set or change your Telnet password.
    keyConcept: Networking Basics
    testedIn:
      - PPSC
      - FPSC
  - id: 11
    question: Which protocol does DHCP use at the Transport layer?
    options:
      - IP
      - TCP
      - UDP
      - ARP
    answer: 2
    explanation: User Datagram Protocol is a connection network service at the Transport layer, and DHCP uses this connectionless service.
    keyConcept: Networking Basics
    testedIn:
      - PPSC
      - FPSC
  - id: 12
    question: Which command is used to determine if an IP access list is enabled on a particular interface?
    options:
      - show access-lists
      - show interface
      - show ip interface
      - show interface access-lists
    answer: 2
    explanation: The show ip interface command will show you if any outbound or inbound interfaces have an access list set.
    keyConcept: Networking Basics
    testedIn:
      - PPSC
      - FPSC
  - id: 13
    question: Where is a hub specified in the OSI model?
    options:
      - Session layer
      - Physical layer
      - Data Link layer
      - Application layer
    answer: 1
    explanation: Hubs regenerate electrical signals, which are specified at the Physical layer.
    keyConcept: Networking Basics
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: What does the passive command provide to dynamic routing protocols?
    options:
      - Stops an interface from sending or receiving periodic dynamic updates.
      - Stops an interface from sending periodic dynamic updates but not from receiving updates.
      - Stops the router from receiving any dynamic updates.
      - Stops the router from sending any dynamic updates.
    answer: 1
    explanation: The passive command, short for passive-interface, stops regular updates from being sent out an interface. However, the interface can still receive updates.
    keyConcept: Networking Basics
    testedIn:
      - PPSC
      - FPSC
  - id: 15
    question: Which protocol is used to send a destination network unknown message back to originating hosts?
    options:
      - TCP
      - ARP
      - ICMP
      - BootP
    answer: 2
    explanation: ICMP is the protocol at the Network layer that is used to send messages back to an originating router.
    keyConcept: Networking Basics
    testedIn:
      - PPSC
      - FPSC
  - id: 16
    question: How often are BPDUs sent from a layer 2 device?
    options:
      - Never
      - Every 2 seconds
      - Every 10 minutes
      - Every 30 seconds
    answer: 1
    explanation: Every 2 seconds, BPDUs are sent out from all active bridge ports by default.
    keyConcept: Networking Basics
    testedIn:
      - PPSC
      - FPSC
  - id: 17
    question: How many broadcast domains are created when you segment a network with a 12-port switch?
    options:
      - "1"
      - "2"
      - "5"
      - "12"
    answer: 0
    explanation: By default, switches break up collision domains but are one large broadcast domain.
    keyConcept: Networking Basics
    testedIn:
      - PPSC
      - FPSC
  - id: 18
    question: "What does the command routerA (config) #line cons 0 allow you to perform next?"
    options:
      - Set the Telnet password.
      - Shut down the router.
      - Set your console password.
      - Disable console connections.
    answer: 2
    explanation: The command line console 0 places you at a prompt where you can then set your console user-mode password.
    keyConcept: Networking Basics
    testedIn:
      - PPSC
      - FPSC
  - id: 19
    question: Which router command allows you to view the entire contents of all access lists?
    options:
      - show all access-lists
      - show access-lists
      - show ip interface
      - show interface
    answer: 1
    explanation: To see the contents of all access lists, use the show access-lists command.
    keyConcept: Networking Basics
    testedIn:
      - PPSC
      - FPSC
  - id: 20
    question: Which class of IP address has the most host addresses available by default?
    options:
      - A
      - B
      - C
      - A and B
    answer: 0
    explanation: Class A addressing provides 24 bits for host addressing.
    keyConcept: Networking Basics
    testedIn:
      - PPSC
      - FPSC
  - id: 21
    question: In a network with dozens of switches, how many root bridges would you have?
    options:
      - "1"
      - "2"
      - "5"
      - "12"
    answer: 0
    explanation: You should have only one root bridge per network.
    keyConcept: Networking Basics
    testedIn:
      - PPSC
      - FPSC
  - id: 22
    question: What PPP protocol provides dynamic addressing, authentication, and multilink?
    options:
      - NCP
      - HDLC
      - LCP
      - X.25
    answer: 2
    explanation: LCP (Link Control Protocol) is a part of the PPP (Point-to-Point Protocol) suite that provides essential services for the establishment, configuration, and maintenance of the link. LCP is responsible for dynamic addressing, authentication (like PAP or CHAP), and multilink capabilities, which allow multiple physical connections to be bundled together. Other protocols like NCP are used for configuring network layer protocols, but LCP handles these specific tasks. Therefore, LCP is the correct answer.
    keyConcept: Networking Basics
    testedIn:
      - PPSC
      - FPSC
  - id: 23
    question: What is a stub network?
    options:
      - A network with more than one exit point.
      - A network with more than one exit and entry point.
      - A network with only one entry and no exit point.
      - A network that has only one entry and exit point.
    answer: 3
    explanation: Stub networks have only one connection to an internetwork. Only default routes can be set on a stub network or network loops may occur.
    keyConcept: Networking Basics
    testedIn:
      - PPSC
      - FPSC
  - id: 24
    question: If your router is facilitating a CSU/DSU, which of the following commands do you need to use to provide the router with a 64000bps serial link?
    options:
      - "RouterA (config) #bandwidth 64"
      - "RouterA (config-if) #bandwidth 64000"
      - "RouterA (config-if) #clock rate 64"
      - "RouterA (config-if) #clock rate 64000"
    answer: 3
    explanation: The clock rate command is two words, and the speed of the line is in bps.
    keyConcept: Networking Basics
    testedIn:
      - PPSC
      - FPSC
  - id: 25
    question: Which one of the following is true regarding VLANs?
    options:
      - Two VLANs are configured by default on all Cisco switches.
      - VLANs only work if you have a complete Cisco switched internetwork. No off-brand switches are allowed.
      - You should not have more than 10 switches in the same VTP domain.
      - VTP is used to send VLAN information to switches in a configured VTP domain.
    answer: 3
    explanation: Switches do not propagate VLAN information by default; you must configure the VTP domain. VLAN Trunking Protocol (VTP) is used to propagate VLAN information across a trunk link.
    keyConcept: Networking Basics
    testedIn:
      - PPSC
      - FPSC
  - id: 26
    question: What does a VLAN do?
    options:
      - Acts as the fastest port to all servers.
      - Provides multiple collision domains on one switch port.
      - Breaks up broadcast domains in a layer 2 switch internetwork.
      - Provides multiple broadcast domains within a single collision domain.
    answer: 2
    explanation: VLANs break up broadcast domains at layer 2.
    keyConcept: Networking Basics
    testedIn:
      - PPSC
      - FPSC
  - id: 27
    question: What is the main reason the OSI model was created?
    options:
      - To create a layered model larger than the DoD model.
      - So application developers can change only one layer's protocols at a time.
      - So different networks could communicate.
      - So Cisco could use the model.
    answer: 2
    explanation: The primary reason the OSI model was created was so that different networks could inter-operate.
    keyConcept: Networking Basics
    testedIn:
      - PPSC
      - FPSC
  - id: 28
    question: How many collision domains are created when you segment a network with a 12-port switch?
    options:
      - "1"
      - "2"
      - "5"
      - "12"
    answer: 3
    explanation: Layer 2 switching creates individual collision domains.
    keyConcept: Networking Basics
    testedIn:
      - PPSC
      - FPSC
  - id: 29
    question: What command will display the line, protocol, DLCI, and LMI information of an interface?
    options:
      - sh pvc
      - show interface
      - show frame-relay pvc
      - show run
    answer: 1
    explanation: The show interface command shows the line, protocol, DLCI, and LMI information of an interface.
    keyConcept: Networking Basics
    testedIn:
      - PPSC
      - FPSC
  - id: 30
    question: Which protocol does Ping use?
    options:
      - TCP
      - ARP
      - ICMP
      - BootP
    answer: 2
    explanation: ICMP is the protocol at the Network layer that is used to send echo requests and replies.
    keyConcept: Networking Basics
    testedIn:
      - PPSC
      - FPSC
  - id: 31
    question: Which command is used to upgrade an IOS on a Cisco router?
    options:
      - copy tftp run
      - copy tftp start
      - config net
      - copy tftp flash
    answer: 3
    explanation: The copy tftp flash command places a new file in flash memory, which is the default location for the Cisco IOS in Cisco routers.
    keyConcept: Networking Basics
    testedIn:
      - PPSC
      - FPSC
  - id: 32
    question: If you wanted to delete the configuration stored in NVRAM, what would you type?
    options:
      - erase startup
      - erase nvram
      - delete nvram
      - erase running
    answer: 0
    explanation: The command erase startup-config deletes the configuration stored in NVRAM.
    keyConcept: Networking Basics
    testedIn:
      - PPSC
      - FPSC
  - id: 33
    question: What protocols are used to configure trunking on a switch? 1. VLAN Trunking Protocol 2. VLAN 3. 802.1Q 4. ISL
    options:
      - 1 and 2
      - 3 and 4
      - 1 only
      - 2 only
    answer: 1
    explanation: VTP is not right because it has nothing to do with trunking except that it sends VLAN information across a trunk link. 802.1Q and ISL are used to configure trunking on a port.
    keyConcept: Networking Basics
    testedIn:
      - PPSC
      - FPSC
---


