---
title: Wide Area Networks MCQs with Explanations
description: Practice high-yield Computer Science & IT MCQs on Wide Area Networks with worked academic solutions for PPSC, FPSC, CSS, PMS, NTS.
subject: computer-science
subjectName: Computer Science & IT
topic: wide-area-networks
topicName: Wide Area Networks
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
    question: When setting up Frame Relay for point-to-point subinterfaces, which of the following must not be configured?
    options:
      - The Frame Relay encapsulation on the physical interface
      - The local DLCI on each subinterface
      - An IP address on the physical interface
      - The subinterface type as point-to-point
      - PAP
    answer: 2
    explanation: It is very important to remember when studying the CCNA exam objectives, and when configuring Frame Relay with point-to-point subinterfaces, that you do not put an IP address on the physical interface.
    keyConcept: Wide Area Networks
    testedIn:
      - PPSC
      - FPSC
  - id: 2
    question: Which command will display the CHAP authentication process as it occurs between two routers in the network?
    options:
      - show chap authentication
      - show interface serial 0
      - debug ppp authentication
      - debug chap authentication
    answer: 2
    explanation: The command debug ppp authentication will show you the authentication process that PPP uses between point-to-point connections.
    keyConcept: Wide Area Networks
    testedIn:
      - PPSC
      - FPSC
  - id: 3
    question: The Acme Corporation is implementing dial-up services to enable remote-office employees to connect to the local network. The company uses multiple routed protocols, needs authentication of users connecting to the network, and since some calls will be long distance, needs callback support. Which of the following protocols is the best choice for these remote services?
    options:
      - "802.1"
      - Frame Relay
      - HDLC
      - PPP
      - PAP
    answer: 3
    explanation: PPP is your only option, as HDLC and Frame Relay do not support these types of business requirements. PPP provides dynamic addressing, authentication using PAP or CHAP, and callback services.
    keyConcept: Wide Area Networks
    testedIn:
      - PPSC
      - FPSC
  - id: 4
    question: You need to configure a router for a Frame Relay connection to a non-Cisco router. Which of the following commands will prepare the WAN interface of the router for this connection?
    options:
      - Router(config-if)# encapsulation frame-relay q933a
      - Router(config-if)# encapsulation frame-relay ansi
      - Router(config-if)# encapsulation frame-relay ietf
      - Router(config-if)# encapsulation frame-relay cisco
    answer: 2
    explanation: If you have a Cisco router on one side of a Frame Relay network and a non-Cisco router on the other side, you would need to use the Frame Relay encapsulation type of IETF. The default is Cisco encapsulation, which means that a Cisco router must be on both sides of the Frame Relay network.
    keyConcept: Wide Area Networks
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: Which WAN encapsulations can be configured on an asynchronous serial connection? 1. PPP 2. ATM 3. HDLC 4. SDLC 5. Frame Relay
    options:
      - 1 and 2
      - 2 and 4
      - 3, 4 and 5
      - All of the above
    answer: 0
    explanation: Please do not freak out because ATM is an answer to this question. ATM is not covered in depth on the CCNA exam. PPP is mostly used for dial-up (async) services, but ATM could be used as well, though it typically is not used anymore since PPP is so efficient.
    keyConcept: Wide Area Networks
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: Which encapsulations can be configured on a serial interface? 1. Ethernet 2. Token Ring 3. HDLC 4. Frame Relay 5. PPP
    options:
      - 1 and 4
      - 2 only
      - 3, 4 and 5
      - All of the above
    answer: 2
    explanation: Ethernet and Token Ring are LAN technologies and cannot be configured on a serial interface. PPP, HDLC, and Frame Relay are layer 2 WAN technologies that are typically configured on a serial interface.
    keyConcept: Wide Area Networks
    testedIn:
      - PPSC
      - FPSC
  - id: 7
    question: Suppose that you have a customer who has a central HQ and six branch offices. They anticipate adding six more branches in the near future. They wish to implement a WAN technology that will allow the branches to economically connect to HQ and you have no free ports on the HQ router. Which of the following would you recommend?
    options:
      - PPP
      - HDLC
      - Frame Relay
      - ISDN
    answer: 2
    explanation: The key is "there are no free ports" on your router. Only Frame Relay can provide a connection to multiple locations with one interface, and in an economical manner no less.
    keyConcept: Wide Area Networks
    testedIn:
      - PPSC
      - FPSC
  - id: 8
    question: Which of the following command options are displayed when you use the Router# show frame-relay ? command? 1. dlci 2. neighbors 3. lmi 4. pvc 5. map
    options:
      - 1 only
      - 2 and 4
      - 3, 4 and 5
      - All of the above
    answer: 2
    explanation: The show frame-relay ? command provides many options, but the options available in this question are lmi , pvc , and map .
    keyConcept: Wide Area Networks
    testedIn:
      - PPSC
      - FPSC
  - id: 9
    question: In which of the following technologies is the term HFC used?
    options:
      - DSL
      - PPPoE
      - Frame Relay
      - Dedicated T1
    answer: 3
    explanation: In a modern network, hybrid fibre-coaxial (HFC) is a telecommunications industry term for a network that incorporates both optical fiber and coaxial cable to create a broadband network.
    keyConcept: Wide Area Networks
    testedIn:
      - PPSC
      - FPSC
  - id: 10
    question: A default Frame Relay WAN is classified as what type of physical network?
    options:
      - Point-to-point
      - Broadcast multi-access
      - Non-broadcast multi-access
      - Non-broadcast multipoint
    answer: 2
    explanation: Frame Relay, by default, is a non-broadcast multi-access (NBMA) network, which means that broadcasts, such as RIP updates, will not be forwarded across the link by default.
    keyConcept: Wide Area Networks
    testedIn:
      - PPSC
      - FPSC
  - id: 11
    question: Which of the following describes the creation of private networks across the Internet, enabling privacy and tunneling of non-TCP/IP protocols?
    options:
      - HDLC
      - Cable
      - VPN
      - IPSec
      - xDSL
    answer: 2
    explanation: A allows the creation of private networks across the Internet, enabling privacy and tunneling of non-TCP/IP protocols. A VPN can be set up across any type of link.
    keyConcept: Wide Area Networks
    testedIn:
      - PPSC
      - FPSC
  - id: 12
    question: Which of the following describes an industry-wide standard suite of protocols and algorithms that allows for secure data transmission over an IP-based network that functions at the layer 3 Network layer of the OSI model?
    options:
      - HDLC
      - Cable
      - VPN
      - IPSec
      - xDSL
    answer: 3
    explanation: IPSec is an industry-wide standard suite of protocols and algorithms that allows for secure data transmission over an IP-based network that functions at the layer 3 Network layer of the OSI model.
    keyConcept: Wide Area Networks
    testedIn:
      - PPSC
      - FPSC
  - id: 13
    question: Which of the following uses ATM as the Data Link layer protocol that's terminated at what's known as the DSLAM?
    options:
      - DSL
      - PPPoE
      - Frame Relay
      - Dedicated T1
      - Wireless
    answer: 0
    explanation: ATM is the Data-Link layer protocol that's typically used over the DSL layer 1 connection from the CPE and terminated at what's known as the DSLAM-an ATM switch that contains DSL interface cards, or ATU-Cs.
    keyConcept: Wide Area Networks
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: When a router is connected to a Frame Relay WAN link using a serial DTE interface, how is the clock rate determined?
    options:
      - Supplied by the CSU/DSU
      - By the far end router
      - By the clock rate command
      - By the Physical layer bit stream timing
    answer: 0
    explanation: Clocking on a serial interface is always provided by the CSU/DSU (DCE device). However, if you do not have a CSU/DSU in your nonproduction test environment, then you need to supply clocking with the clock rate command on the serial interface of the router with the DCE cable attached.
    keyConcept: Wide Area Networks
    testedIn:
      - PPSC
      - FPSC
  - id: 15
    question: Which command is required for connectivity in a Frame Relay network if Inverse ARP is not operational?
    options:
      - frame-relay arp
      - frame-relay map
      - frame-relay interface-dci
      - frame-relay lmi-type
    answer: 1
    explanation: If you have a router in your Frame Relay network that does not support IARP, you must create Frame Relay maps on your router, which provide known DLCI-to-IP address mappings.
    keyConcept: Wide Area Networks
    testedIn:
      - PPSC
      - FPSC
  - id: 16
    question: How should a router that is being used in a Frame Relay network be configured to keep split horizon issues from preventing routing updates?
    options:
      - Configure a separate subinterface for each PVC with a unique DLCI and subnet assigned to the subinterface.
      - Configure each Frame Relay circuit as a point-to-point line to support multicast and broadcast traffic.
      - Configure many subinterfaces in the same subnet.
      - Configure a single subinterface to establish multiple PVC connections to multiple remote router interfaces.
    answer: 0
    explanation: If you have a serial port configured with multiple DLCIs connected to multiple remote sites, split horizon rules, stop route updates received on an interface from being sent out the same interface. By creating subinterfaces for each PVC, you can avoid the split horizon issues when using Frame Relay.
    keyConcept: Wide Area Networks
    testedIn:
      - PPSC
      - FPSC
  - id: 17
    question: Which of the following encapsulates PPP frames in Ethernet frames and uses common PPP features like authentication, encryption, and compression?
    options:
      - PPP
      - PPPoA
      - PPPoE
      - Token Ring
    answer: 2
    explanation: PPPoE encapsulates PPP frames in Ethernet frames and uses common PPP features like authentication, encryption, and compression. PPPoA is used for ATM.
    keyConcept: Wide Area Networks
    testedIn:
      - PPSC
      - FPSC
---


