---
title: Networking and Cybersecurity MCQs with Explanations
description: Objective MCQs on the OSI model, TCP/IP addressing, standard ports, network devices and topologies, Wi-Fi bands and core security concepts, with explanations that clear up the usual confusions.
subject: computer-science
subjectName: Computer Science & Information Technology
topic: networking-and-security
topicName: Networking, Protocols and Cybersecurity
author: ExamHub Academic Editorial Board
updatedDate: "2026-10-13"
difficulty: Exam-Level
targetExams:
  - PPSC
  - FPSC
  - NTS
  - CSS
questions:
  - id: 1
    question: In the OSI reference model, which numbered layer is the Transport layer?
    options:
      - Second layer
      - Third layer
      - Fourth layer
      - Seventh layer
    answer: 2
    explanation: The layers from the bottom are Physical (1), Data Link (2), Network (3), Transport (4), Session (5), Presentation (6) and Application (7), so Transport is the fourth. The third layer is the Network layer, which is the most common wrong pick because it also deals with end-to-end delivery.
    keyConcept: "OSI model: seven layers in fixed order, with Transport (segment-level, TCP/UDP) above Network (packet-level, IP)."
    examTip: "Mnemonic for the bottom-up order: 'Please Do Not Throw Sausage Pizza Away' - Transport is the fourth word, hence layer 4."
    testedIn:
      - PPSC
      - NTS
  - id: 2
    question: Which of the following device-to-OSI-layer pairings is correct?
    options:
      - Hub - data link layer
      - Switch - network layer
      - Bridge - transport layer
      - Router - network layer
    answer: 3
    explanation: A router forwards packets at layer 3 using IP addresses, so that pairing is correct. A hub is a layer 1 repeater that floods signals to every port, while switches and bridges both work at layer 2 using MAC addresses, making the first three options wrong.
    keyConcept: "Device layers: hub and modem at Physical (1); bridge and switch at Data Link (2); router at Network (3)."
    examTip: Switches learn MAC addresses, routers learn IP addresses. A multi-layer switch that routes is called a layer 3 switch.
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Which transport-layer protocol is connectionless, guarantees neither delivery nor ordering, and is preferred for live voice and video?
    options:
      - Transmission Control Protocol (TCP)
      - User Datagram Protocol (UDP)
      - File Transfer Protocol (FTP)
      - Hypertext Transfer Protocol (HTTP)
    answer: 1
    explanation: UDP sends datagrams without setting up a session or waiting for acknowledgements, so it is fast but unreliable - ideal for VoIP and streaming, where a late packet is worthless anyway. TCP is the reliable connection-oriented alternative, and FTP and HTTP are application-layer protocols that run over TCP.
    keyConcept: TCP is reliable, ordered and connection-oriented; UDP is connectionless with no retransmission or ordering.
    examTip: Real-time traffic (voice, video, DNS lookups) leans on UDP; anything that must arrive complete (files, web pages, mail) uses TCP.
    testedIn:
      - PPSC
      - NTS
  - id: 4
    question: How many bits are there in a complete IPv4 address?
    options:
      - 16 bits
      - 32 bits
      - 64 bits
      - 128 bits
    answer: 1
    explanation: An IPv4 address is 32 bits long and is written as four decimal octets, each 0-255. Class C networks cover first-octet values 192 to 223.
    keyConcept: IPv4 = 32 bits (4 octets); IPv6 = 128 bits (8 hexadecimal groups)
    examTip: 128 bits is the IPv6 answer — examiners offer it inside IPv4 questions to catch candidates who mix the two.
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: Which port number and service pair is correct?
    options:
      - 21 - HTTPS
      - 23 - FTP
      - 25 - SMTP
      - 22 - Telnet
    answer: 2
    explanation: Port 25 is SMTP, used for submitting mail. Port 21 is the FTP control channel, port 23 is Telnet, and port 22 is SSH, the encrypted replacement for Telnet remote login.
    keyConcept: "Well-known ports: 21 FTP, 22 SSH, 23 Telnet, 25 SMTP, 53 DNS, 80 HTTP, 110 POP3, 143 IMAP, 443 HTTPS."
    examTip: "Group them: secure remote access 22, secure web 443, plain web 80, mail out 25 and mail in 110 or 143, name service 53."
    testedIn:
      - NTS
      - PPSC
  - id: 6
    question: Which statement correctly describes the roles of DNS and DHCP?
    options:
      - DNS assigns IP addresses dynamically while DHCP resolves domain names into IP addresses
      - DNS resolves domain names into IP addresses while DHCP automatically assigns an IP address, subnet mask and gateway to a host
      - DNS and DHCP both forward packets between different networks
      - DNS encrypts browser traffic while DHCP converts IP addresses into MAC addresses
    answer: 1
    explanation: DNS is the distributed directory that turns a name such as example.pk into an IP address (port 53), and DHCP leases the addressing configuration to devices as they join the network. The last option describes ARP, not DHCP, and browser encryption is the work of TLS over HTTPS.
    keyConcept: DNS = name resolution on port 53; DHCP = automatic IP configuration using UDP ports 67 and 68.
    examTip: If the stem says 'translate a name', choose DNS; 'hand out addresses' means DHCP; 'IP to MAC' means ARP.
    testedIn:
      - PPSC
      - NTS
  - id: 7
    question: Which network topology provides the highest fault tolerance because every device has a dedicated point-to-point link to every other device?
    options:
      - Bus topology
      - Ring topology
      - Star topology
      - Mesh topology
    answer: 3
    explanation: A full mesh keeps redundant paths between all pairs of nodes, so no single link or node failure can isolate the network - the price is heavy cabling and n(n-1)/2 links. In a star everything depends on the central hub or switch, a bus dies if its backbone cable is cut, and a ring can be halted by one break.
    keyConcept: "Fault tolerance ranking: mesh highest, star depends on the central device, bus and ring are single-point-of-failure designs."
    examTip: For n nodes a full mesh needs n(n-1)/2 links, so 5 nodes need 10 links - use that to spot the mesh option.
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: The IEEE 802.11ac Wi-Fi standard, marketed as Wi-Fi 5, operates in which frequency band?
    options:
      - 900 MHz
      - 2.4 GHz
      - 5 GHz
      - 60 GHz
    answer: 2
    explanation: 802.11ac works only in the 5 GHz band, using wide channels and multiple streams for high throughput. The 2.4 GHz band belongs to 802.11b and 802.11g, which is why it is the tempting but wrong choice, and 60 GHz is used by 802.11ad.
    keyConcept: "Wi-Fi bands: 802.11b and g on 2.4 GHz; 802.11a, n and ac on 5 GHz (n dual-band); 802.11ax on both; 802.11ad on 60 GHz."
    examTip: "Higher band means higher speed but shorter range and weaker wall penetration: 5 GHz is faster, 2.4 GHz travels farther."
    testedIn:
      - PPSC
      - NTS
  - id: 9
    question: "A network that links all the computer systems of one city, such as the offices of a city district government, is classified as a:"
    options:
      - LAN
      - MAN
      - WAN
      - PAN
    answer: 1
    explanation: A Metropolitan Area Network spans a city and sits between a building or campus LAN and a country-wide or global WAN. The tempting LAN answer applies only to a single site, while a PAN covers a few metres around one person, such as Bluetooth links.
    keyConcept: "Coverage ladder: PAN (personal, metres) then LAN (building or campus) then MAN (city) then WAN (country and beyond)."
    examTip: "Match the prefix to the scale: Metro means city. The Internet itself is the largest WAN."
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: "A rule-based gate that inspects traffic between a trusted internal network and an untrusted external network, allowing or blocking it, is called a:"
    options:
      - Firewall
      - Modem
      - Network interface card
      - Spam filter
    answer: 0
    explanation: A firewall enforces an access-control policy on flows between network zones through packet filtering, stateful inspection or proxying. A modem only modulates signals for a line, a NIC is a host's network adapter, and a spam filter screens e-mail content rather than network traffic.
    keyConcept: Firewall = policy enforcement point between zones; it can be packet-filtering, stateful or proxy-based.
    examTip: "Keep three words apart: spam is junk mail, phishing is the deceptive mail, the firewall is the network gate."
    testedIn:
      - PPSC
      - NTS
  - id: 11
    question: Which type of encryption uses a mathematically linked public and private key pair, as in RSA, so that data sealed with one key opens only with the other?
    options:
      - Asymmetric (public-key) encryption
      - Symmetric encryption
      - Cryptographic hashing
      - Lossless compression
    answer: 0
    explanation: Asymmetric encryption uses a public key for enciphering and the matching private key for deciphering, which solves key distribution and enables digital signatures. Symmetric systems such as AES rely on one shared secret, while hashing is a one-way digest that cannot be decrypted at all.
    keyConcept: Symmetric = one shared key, fast, key-exchange problem; asymmetric = public and private key pair, slower, enables signatures and key exchange.
    examTip: "Public key encrypts, private key decrypts. Real systems such as TLS are hybrids: asymmetric to agree a session key, symmetric for the data."
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: "An e-mail that appears to come from a well-known bank and urges the recipient to click a link and enter login details on a look-alike website is an example of:"
    options:
      - Phishing
      - Ransomware
      - Wardriving
      - Packet sniffing
    answer: 0
    explanation: "Phishing is the fraudulent attempt to obtain credentials or payment data by impersonating a trusted party, usually by e-mail or SMS. Ransomware is different: it encrypts the victim's files and demands payment, wardriving maps wireless networks, and sniffing is passive interception of traffic."
    keyConcept: Social engineering (phishing, smishing, vishing) versus malware (ransomware, trojan) versus passive eavesdropping (sniffing).
    examTip: Any question about a fake bank or courier e-mail asking for credentials is phishing; unsolicited bulk mail in general is spam.
    testedIn:
      - NTS
      - PPSC
  - id: 13
    question: Which category of malicious software replicates and spreads across a network by itself, without attaching to a host program or waiting for a user to run anything?
    options:
      - Virus
      - Trojan horse
      - Worm
      - Spyware
    answer: 2
    explanation: "A worm is self-propagating: it exploits network services to copy itself without user action, which is how outbreaks spread machine to machine. A virus needs a host file or document and user action to execute, a trojan is harmful code disguised as legitimate software, and spyware is defined by covert data collection rather than replication."
    keyConcept: Worm = self-replicating over a network; virus = needs a host and user action; trojan = disguised as useful software; spyware = covert information theft.
    examTip: The word worm implies it crawls on its own - no host file and no click. If the stem mentions a disguised free utility, answer trojan instead.
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: Which one of the following Internet acronyms is correctly expanded?
    options:
      - ISP - Instant Server Protocol
      - URL - Universal Resource Link
      - VoIP - Voice over Internet Protocol
      - HTML - HyperText Mail Language
    answer: 2
    explanation: "VoIP stands for Voice over Internet Protocol, the carrying of voice calls as IP packets. The others are mis-expanded: ISP is Internet Service Provider, URL is Uniform Resource Locator, and HTML is HyperText Markup Language while HTTP is the HyperText Transfer Protocol."
    keyConcept: "Standard expansions: ISP, URL, HTTP, HTML, VoIP."
    examTip: "Sequence the web trio: a URL is the address, HTTP is the protocol used to fetch it, HTML is the markup language of the page returned."
    testedIn:
      - NTS
      - FPSC
  - id: 15
    question: First boot sector virus is __________?
    options:
      - brian
      - mind
      - computed
    answer: 0
    explanation: First boot sector virus is brian .
    keyConcept: Networking & Cyber Security
  - id: 16
    question: _________ are often delivered to a PC through an email attachment and are often designed to do harm.
    options:
      - Spam
      - Viruses
      - Portals
    answer: 1
    explanation: Viruses are often delivered to a PC through an email attachment and are often designed to do harm.
    keyConcept: Networking & Cyber Security
  - id: 17
    question: The first Network is called _________?
    options:
      - CNNET
      - ARPANET
      - ASAPNET
      - NSFNET
    answer: 1
    explanation: The first Network is called ARPANET .
    keyConcept: Networking & Cyber Security
  - id: 18
    question: Which protocol is used to automatically assign TCP/IP configuration information?
    options:
      - NetBIOS
      - DHCP
      - NetLink
      - DNS
    answer: 1
    explanation: DHCP is the correct answer to “Which protocol is used to automatically assign TCP/IP configuration information”. Items of this type are drawn from the Networking & Cyber Security syllabus of Pakistani competitive exams, where the fact is tested verbatim.
    keyConcept: Networking & Cyber Security
  - id: 19
    question: _________ is a type of computing that performs computation, storage and even applications as a service across a network.
    options:
      - Distributed Computing
      - Virtual Computing
      - Cloud Computing
      - Parallel Computing
    answer: 2
    explanation: Cloud Computing is a type of computing that performs computation, storage and even applications as a service across a network.
    keyConcept: Networking & Cyber Security
  - id: 20
    question: In IT networking, which of the following device is used in physical layer?
    options:
      - Repeater
      - Bridge
      - Router
      - Transport Gateway
    answer: 0
    explanation: Repeater is the correct answer to “In IT networking, which of the following device is used in physical layer”. Items of this type are drawn from the Networking & Cyber Security syllabus of Pakistani competitive exams, where the fact is tested verbatim.
    keyConcept: Networking & Cyber Security
  - id: 21
    question: The communication protocol used by Internet is_____________?
    options:
      - FTP
      - TCP/IP
      - WWW
      - HTTP
    answer: 1
    explanation: The communication protocol used by Internet is TCP/IP .
    keyConcept: Networking & Cyber Security
  - id: 22
    question: Speed of internet connection is measured in __________?
    options:
      - dpi
      - ppm
      - Mbps
      - GHz
    answer: 2
    explanation: Speed of internet connection is measured in Mbps .
    keyConcept: Networking & Cyber Security
  - id: 23
    question: ______ is widely used for transmitting streaming videos data on the internet.
    options:
      - MP3
      - WAV
      - WMA
      - AVI
    answer: 3
    explanation: AVI is widely used for transmitting streaming videos data on the internet.
    keyConcept: Networking & Cyber Security
  - id: 24
    question: Combination of two or more networks are called _______?
    options:
      - WAN
      - Internetwork
      - LAN
      - MAN
    answer: 1
    explanation: Combination of two or more networks are called Internetwork .
    keyConcept: Networking & Cyber Security
  - id: 25
    question: Which Network topology needs HUB for its working?
    options:
      - Bus
      - Star and Bus both
      - Ring
      - Star
    answer: 3
    explanation: Star is the correct answer to “Which Network topology needs HUB for its working”. Items of this type are drawn from the Networking & Cyber Security syllabus of Pakistani competitive exams, where the fact is tested verbatim.
    keyConcept: Networking & Cyber Security
  - id: 26
    question: In the email dialogue box Bcc is used for writing the__________?
    options:
      - Names
      - Email Address
      - Phone Numbers
      - Subject
    answer: 1
    explanation: In the email dialogue box Bcc is used for writing the Email Address .
    keyConcept: Networking & Cyber Security
  - id: 27
    question: Virus is the word of which language?
    options:
      - English
      - Latin
      - Greek
    answer: 1
    explanation: Latin is the correct answer to “Virus is the word of which language”. Items of this type are drawn from the Networking & Cyber Security syllabus of Pakistani competitive exams, where the fact is tested verbatim.
    keyConcept: Networking & Cyber Security
  - id: 28
    question: The speed of communications between any two devices on the Ethernet LAN is __________?
    options:
      - Both A and B
      - 10000 Mbps
      - 100 Mbps
      - 10 Mbps
    answer: 0
    explanation: The speed of communications between any two devices on the Ethernet LAN is Both A and B .
    keyConcept: Networking & Cyber Security
  - id: 29
    question: The first web browser is _______?
    options:
      - Collabra
      - Mosaic
      - Internet explorer
      - Netscape
    answer: 1
    explanation: The first web browser is Mosaic .
    keyConcept: Networking & Cyber Security
  - id: 30
    question: "In peer-to-peer networking:"
    options:
      - there is only one server and many clients
      - every computer is capable of playing the role of server
      - every computer is capable of playing the role of client, server or both at the same time
      - there is only one client and many servers
    answer: 2
    explanation: every computer is capable of playing the role of client, server or both at the same time is the correct answer to “In peer-to-peer networking:”. Items of this type are drawn from the Networking & Cyber Security syllabus of Pakistani competitive exams, where the fact is tested verbatim.
    keyConcept: Networking & Cyber Security
  - id: 31
    question: In 1999, the Melissa virus was a widely publicized:_____________?
    options:
      - Trojan horse
      - E-mail virus
      - Macro virus
      - Time bomb
    answer: 1
    explanation: "In 1999, the Melissa virus was a widely publicized: E-mail virus ."
    keyConcept: Networking & Cyber Security
  - id: 32
    question: An Email is a combination of_____________?
    options:
      - Name and Address
      - User Name and User id
      - Name and Phone no
      - User Name and Domain Name
    answer: 3
    explanation: An Email is a combination of User Name and Domain Name .
    keyConcept: Networking & Cyber Security
  - id: 33
    question: _____________are set of rules and procedures to control the data transmission over the internet?
    options:
      - Domains
      - Protocol
      - IP address
      - Gateway
    answer: 1
    explanation: Protocol are set of rules and procedures to control the data transmission over the internet.
    keyConcept: Networking & Cyber Security
  - id: 34
    question: LAN stands for______________?
    options:
      - Logical Area Network
      - Limited Area Network
      - Large Area Network
      - Local Area Network
    answer: 3
    explanation: LAN stands for Local Area Network .
    keyConcept: Networking & Cyber Security
  - id: 35
    question: Which of the following is a network topology?
    options:
      - MAN
      - LAN
      - BUS
      - WAN
    answer: 2
    explanation: BUS is the correct answer to “Which of the following is a network topology”. Items of this type are drawn from the Networking & Cyber Security syllabus of Pakistani competitive exams, where the fact is tested verbatim.
    keyConcept: Networking & Cyber Security
  - id: 36
    question: Fourth generation mobile technology provides enhanced capabilities allowing the transfer of both____________data, including full-motion video, high-speed internet access, and video conferencing.
    options:
      - music and video
      - video data and information
      - video and audio
      - voice and non-voice
    answer: 3
    explanation: Fourth generation mobile technology provides enhanced capabilities allowing the transfer of both voice and non-voice data, including full-motion video, high-speed internet access, and video conferencing.
    keyConcept: Networking & Cyber Security
  - id: 37
    question: ____________is the measurement of things such as fingerprints and retinal scans used for security access?
    options:
      - Computer security
      - Smart weapon machinery
      - Bio measurement
      - Biometrics
    answer: 3
    explanation: Biometrics is the measurement of things such as fingerprints and retinal scans used for security access.
    keyConcept: Networking & Cyber Security
  - id: 38
    question: Which of these is not a means of personal communication on the internet?
    options:
      - Instant messaging
      - Electronic mail
      - Chat
      - Insta notes
    answer: 3
    explanation: Insta notes is the correct answer to “Which of these is not a means of personal communication on the internet”. Items of this type are drawn from the Networking & Cyber Security syllabus of Pakistani competitive exams, where the fact is tested verbatim.
    keyConcept: Networking & Cyber Security
  - id: 39
    question: What is the name of an application program that gathers user information and sends it to someone through the Internet?
    options:
      - Security patch
      - A virus
      - Spybot
      - Logic bomb
    answer: 2
    explanation: Spybot is the correct answer to “What is the name of an application program that gathers user information and sends it to someone through the Internet”. Items of this type are drawn from the Networking & Cyber Security syllabus of Pakistani competitive exams, where the fact is tested verbatim.
    keyConcept: Networking & Cyber Security
  - id: 40
    question: "The thing that eventually terminates a worm virus is a lack of:"
    options:
      - Time.
      - CD-RW.
      - Memory or disk space.
      - CD drives space.
    answer: 2
    explanation: Memory or disk space. is the correct answer to “The thing that eventually terminates a worm virus is a lack of:”. Items of this type are drawn from the Networking & Cyber Security syllabus of Pakistani competitive exams, where the fact is tested verbatim.
    keyConcept: Networking & Cyber Security
  - id: 41
    question: In 1999, the Melissa virus was a widely publicised:____________?
    options:
      - Trojan horse.
      - Time bomb.
      - E-mail virus.
      - Macro virus.
    answer: 2
    explanation: "In 1999, the Melissa virus was a widely publicised: E-mail virus. ."
    keyConcept: Networking & Cyber Security
  - id: 42
    question: A device that connects to a network without the use of cables is said to be___________?
    options:
      - Distributed
      - none of these
      - centralized
      - free
    answer: 1
    explanation: A device that connects to a network without the use of cables is said to be none of these .
    keyConcept: Networking & Cyber Security
  - id: 43
    question: All of the following are examples of real security and privacy risks EXCEPT____________?
    options:
      - Spam
      - Viruses
      - identity theft
      - hackers
    answer: 0
    explanation: All of the following are examples of real security and privacy risks EXCEPT Spam .
    keyConcept: Networking & Cyber Security
  - id: 44
    question: A self replicating program, similar to a virus which was taken from a 1970s science fiction novel by John Bruner entitled the Shockwave Rider is__________?
    options:
      - Bug
      - Lice
      - Worm
      - Vice
    answer: 2
    explanation: A self replicating program, similar to a virus which was taken from a 1970s science fiction novel by John Bruner entitled the Shockwave Rider is Worm .
    keyConcept: Networking & Cyber Security
  - id: 45
    question: Which device is required for the Internet connection?
    options:
      - Joystick
      - Modem
      - NIC Card
      - CD Drive
    answer: 1
    explanation: Modem is the correct answer to “Which device is required for the Internet connection”. Items of this type are drawn from the Networking & Cyber Security syllabus of Pakistani competitive exams, where the fact is tested verbatim.
    keyConcept: Networking & Cyber Security
  - id: 46
    question: WAN stands for_____________?
    options:
      - Wap Area Network
      - Wide Array Net
      - Wireless Area Network
      - Wide Area Network
    answer: 3
    explanation: WAN stands for Wide Area Network .
    keyConcept: Networking & Cyber Security
  - id: 47
    question: Who is the father of Internet?
    options:
      - Chares Babbage
      - Denis Riche
      - Martin Cooper
      - Vint Cerf
    answer: 3
    explanation: Vint Cerf is the correct answer to “Who is the father of Internet”. Items of this type are drawn from the Networking & Cyber Security syllabus of Pakistani competitive exams, where the fact is tested verbatim.
    keyConcept: Networking & Cyber Security
  - id: 48
    question: If you have a PowerPoint show you created and want to send using email to another teacher you can add the show to your email message as a (an)___________?
    options:
      - Attachment
      - Inclusion
      - Reply
      - Forward
    answer: 0
    explanation: If you have a PowerPoint show you created and want to send using email to another teacher you can add the show to your email message as a (an) Attachment .
    keyConcept: Networking & Cyber Security
  - id: 49
    question: In order to email a Word document from within MS Word 2016?
    options:
      - Save the file as an email attachment
      - File >> Share >> Email
      - Start Outlook and attach the file while open in Word
      - This is an impossible operation
    answer: 1
    explanation: File >> Share >> Email is the correct answer to “In order to email a Word document from within MS Word 2016”. Items of this type are drawn from the Networking & Cyber Security syllabus of Pakistani competitive exams, where the fact is tested verbatim.
    keyConcept: Networking & Cyber Security
  - id: 50
    question: If you have a PowerPoint show you created and want to send using email to another teacher you can add the show to your email message as a (an)____________?
    options:
      - Attachment
      - Inclusion
      - Reply
      - Forward
    answer: 0
    explanation: If you have a PowerPoint show you created and want to send using email to another teacher you can add the show to your email message as a (an) Attachment .
    keyConcept: Networking & Cyber Security
---

## About this set

Objective MCQs on the OSI model, TCP/IP addressing, standard ports, network devices and topologies, Wi-Fi bands and core security concepts, with explanations that clear up the usual confusions.
