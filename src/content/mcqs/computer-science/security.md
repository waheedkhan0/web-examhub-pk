---
title: Security MCQs with Explanations
description: Practice high-yield Computer Science & IT MCQs on Security with worked academic solutions for PPSC, FPSC, CSS, PMS, NTS.
subject: computer-science
subjectName: Computer Science & IT
topic: security
topicName: Security
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
    question: Which of the following is true regarding access lists applied to an interface?
    options:
      - You can place as many access lists as you want on any interface until you run out of memory.
      - You can apply only one access list on any interface.
      - One access list may be configured, per direction, for each layer 3 protocol configured on an interface.
      - You can apply two access lists to any interface.
    answer: 2
    explanation: A Cisco router has rules regarding the placement of access lists on a router interface. You can place one access list per direction for each layer 3 protocol configured on an interface.
    keyConcept: Security
    testedIn:
      - PPSC
      - FPSC
  - id: 2
    question: Which command would you use to apply an access list to a router interface?
    options:
      - ip access-list 101 out
      - access-list ip 101 in
      - ip access-group 101 in
      - access-group ip 101 in
    answer: 2
    explanation: To apply an access list, the proper command is ip access-group 101 in .
    keyConcept: Security
    testedIn:
      - PPSC
      - FPSC
  - id: 3
    question: Which of the following is an example of a standard IP access list?
    options:
      - access-list 110 permit host 1.1.1.1
      - access-list 1 deny 172.16.10.1 0.0.0.0
      - access-list 1 permit 172.16.10.1 255.255.0.0
      - access-list standard 1.1.1.1
    answer: 1
    explanation: Standard IP access lists use the numbers 1-99 and 1300-1999 and filter based on source IP address only. Option C is incorrect because the mask must be in wildcard format.
    keyConcept: Security
    testedIn:
      - PPSC
      - FPSC
  - id: 4
    question: You need to create an access list that will prevent hosts in the network range of 192.168.160.0 to 192.168.191.0. Which of the following lists will you use?
    options:
      - access-list 10 deny 192.168.160.0 255.255.224.0
      - access-list 10 deny 192.168.160.0 0.0.191.255
      - access-list 10 deny 192.168.160.0 0.0.31.255
      - access-list 10 deny 192.168.0.0 0.0.31.255
    answer: 2
    explanation: The range of 192.168.160.0 to 192.168.191.0 is a block size of 32. The network address is 192.168.160.0 and the mask would be 255.255.224.0, which for an access list must be a wildcard format of 0.0.31.255. The 31 is used for a block size of 32. The wildcard is always one less than the block size.
    keyConcept: Security
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: You are working on a router that has established privilege levels that restrict access to certain functions. You discover that you are not able to execute the command show running-configuration . How can you view and confirm the access lists that have been applied to the Ethernet 0 interface on your router?
    options:
      - show access-lists
      - show interface Ethernet 0
      - show ip access-lists
      - show ip interface Ethernet 0
    answer: 3
    explanation: The only command that shows which access lists have been applied to an interface is show ip interface Ethernet 0 . The command show access-lists displays all configured access lists, and show ip access-lists displays all configured IP access lists, but neither command indicates whether the displayed access lists have been applied to an interface.
    keyConcept: Security
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: What command will permit SMTP mail to only host 1.1.1.1?
    options:
      - access-list 10 permit smtp host 1.1.1.1
      - access-list 110 permit ip smtp host 1.1.1.1
      - access-list 10 permit tcp any host 1.1.1.1 eq smtp
      - access-list 110 permit tcp any host 1.1.1.1 eq smtp
    answer: 3
    explanation: When trying to find the best answer to an access-list question, always check the access-list number and then the protocol. When filtering to an upper-layer protocol, you must use an extended list, numbers 100-199 and 2000-2699. Also, when you filter to an upper-layer protocol, you must use either tcp or udp in the protocol field. If it says ip in the protocol field, you cannot filter to an upper-layer protocol. SMTP uses TCP.
    keyConcept: Security
    testedIn:
      - PPSC
      - FPSC
  - id: 7
    question: "You want to create a standard access list that denies the subnet of the following host: 172.16.50.172/20. Which of the following would you start your list with?"
    options:
      - access-list 10 deny 172.16.48.0 255.255.240.0
      - access-list 10 deny 172.16.0.0 0.0.255.255
      - access-list 10 deny 172.16.64.0 0.0.31.255
      - access-list 10 deny 172.16.48.0 0.0.15.255
    answer: 3
    explanation: First, you must know that a /20 is 255.255.240.0, which is a block size of 16 in the third octet. Counting by 16s, this makes our subnet 48 in the third octet, and the wildcard for the third octet would be 15 since the wildcard is always one less than the block size.
    keyConcept: Security
    testedIn:
      - PPSC
      - FPSC
  - id: 8
    question: What router command allows you to determine whether an IP access list is enabled on a particular interface?
    options:
      - show ip port
      - show access-lists
      - show ip interface
      - show access-lists interface
    answer: 2
    explanation: Only the show ip interface command will tell you which interfaces have access lists applied. show access-lists will not show you which interfaces have an access list applied.
    keyConcept: Security
    testedIn:
      - PPSC
      - FPSC
  - id: 9
    question: You have created a named access list called Blocksales. Which of the following is a valid command for applying this to packets trying to enter interface s0 of your router?
    options:
      - (config)# ip access-group 110 in
      - (config-if)# ip access-group 110 in
      - (config-if)# ip access-group Blocksales in
      - (config-if)# blocksales ip access-list in
    answer: 2
    explanation: Using a named access list just replaces the number used when applying the list to the router's interface. ip access-group Blocksales in is correct.
    keyConcept: Security
    testedIn:
      - PPSC
      - FPSC
  - id: 10
    question: "You want to create a standard access list that denies the subnet of the following host: 172.16.144.17/21. Which of the following would you start your list with?"
    options:
      - access-list 10 deny 172.16.48.0 255.255.240.0
      - access-list 10 deny 172.16.144.0 0.0.7.255
      - access-list 10 deny 172.16.64.0 0.0.31.255
      - access-list 10 deny 172.16.136.0 0.0.15.255
    answer: 1
    explanation: First, you must know that a /21 is 255.255.248.0, which is a block size of 8 in the third octet. Counting by eight, this makes our subnet 144 in the third octet, and the wildcard for the third octet would be 7 since the wildcard is always one less than the block size.
    keyConcept: Security
    testedIn:
      - PPSC
      - FPSC
  - id: 11
    question: "You configure the following access list: access-list 110 deny tcp 10.1.1.128 0.0.0.63 any eq smtp access-list 110 deny tcp any eq 23 int ethernet 0 ip access-group 110 out What will the result of this access list be?"
    options:
      - Email and Telnet will be allowed out E0.
      - Email and Telnet will be allowed in E0.
      - Everything but email and Telnet will be allowed out E0.
      - No IP traffic will be allowed out E0.
    answer: 3
    explanation: If you add an access list to an interface and you do not have at least one permit statement, then you will effectively shut down the interface because of the implicit deny any at the end of every list.
    keyConcept: Security
    testedIn:
      - PPSC
      - FPSC
  - id: 12
    question: "You want to create a standard access list that denies the subnet of the following host: 172.16.198.94/19. Which of the following would you start your list with?"
    options:
      - access-list 10 deny 172.16.192.0 0.0.31.255
      - access-list 10 deny 172.16.0.0 0.0.255.255
      - access-list 10 deny 172.16.172.0 0.0.31.255
      - access-list 10 deny 172.16.188.0 0.0.15.255
    answer: 0
    explanation: First, you must know that a /19 is 255.255.224.0, which is a block size of 32 in the third octet. Counting by 32, this makes our subnet 192 in the third octet, and the wildcard for the third octet would be 31 since the wildcard is always one less than the block size.
    keyConcept: Security
    testedIn:
      - PPSC
      - FPSC
  - id: 13
    question: If you wanted to deny all Telnet connections to only network 192.168.10.0, which command could you use?
    options:
      - access-list 100 deny tcp 192.168.10.0 255.255.255.0 eq telnet
      - access-list 100 deny tcp 192.168.10.0 0.255.255.255 eq telnet
      - access-list 100 deny tcp any 192.168.10.0 0.0.0.255 eq 23
      - access-list 100 deny 192.168.10.0 0.0.0.255 any eq 23
    answer: 2
    explanation: The extended access list ranges are 100-199 and 2000-2699, so the access-list number of 100 is valid. Telnet uses TCP, so the protocol TCP is valid. Now you just need to look for the source and destination address. Only the third option has the correct sequence of parameters. Answer B may work, but the question specifically states "only" to network 192.168.10.0, and the wildcard in answer B is too broad.
    keyConcept: Security
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: Which of the following access lists will allow only HTTP traffic into network 196.15.7.0?
    options:
      - access-list 100 permit tcp any 196.15.7.0 0.0.0.255 eq www
      - access-list 10 deny tcp any 196.15.7.0 eq www
      - access-list 100 permit 196.15.7.0 0.0.0.255 eq www
      - access-list 110 permit ip any 196.15.7.0 0.0.0.255
    answer: 0
    explanation: The first thing to check in a question like this is the access-list number. Right away, you can see that the second option is wrong because it is using a standard IP access-list number. The second thing to check is the protocol. If you are filtering by upper-layer protocol, then you must be using either UDP or TCP; this eliminates the fourth option. The third and last answers have the wrong syntax.
    keyConcept: Security
    testedIn:
      - PPSC
      - FPSC
  - id: 15
    question: Which of the following are valid ways to refer only to host 172.16.30.55 in an IP access list? 1. 172.16.30.55 0.0.0.255 2. 172.16.30.55 0.0.0.0 3. any 172.16.30.55 4. host 172.16.30.55 5. 0.0.0.0 172.16.30.55 6. ip any 172.16.30.55
    options:
      - 1 and 4
      - 2 and 4
      - 1, 4 and 6
      - 3 and 5
    answer: 1
    explanation: The wildcard 0.0.0.0 tells the router to match all four octets. This wildcard format alone can be replaced with the host command.
    keyConcept: Security
    testedIn:
      - PPSC
      - FPSC
  - id: 16
    question: If you wanted to deny FTP access from network 200.200.10.0 to network 200.199.11.0 but allow everything else, which of the following command strings is valid?
    options:
      - access-list 110 deny 200.200.10.0 to network 200.199.11.0 eq ftpaccess-list 111 permit ip any 0.0.0.0 255.255.255.255
      - access-list 1 deny ftp 200.200.10.0 200.199.11.0 any any
      - access-list 100 deny tcp 200.200.10.0 0.0.0.255 200.199.11.0 0.0.0.255 eq ftp
      - access-list 198 deny tcp 200.200.10.0 0.0.0.255 200.199.11.0 0.0.0.255 eq ftpaccess-list 198 permit ip any 0.0.0.0 255.255.255.255
    answer: 3
    explanation: Extended IP access lists use numbers 100-199 and 2000-2699 and filter based on source and destination IP address, protocol number, and port number. The last option is correct because of the second line that specifies permit ip any any. (I used 0.0.0.0 255.255.255.255, which is the same as the any option.) The third option does not have this, so it would deny access but not allow everything else.
    keyConcept: Security
    testedIn:
      - PPSC
      - FPSC
  - id: 17
    question: Which of the following series of commands will restrict Telnet access to the router?
    options:
      - Lab_A(config)#access-list 10 permit 172.16.1.1Lab_A(config)#line con 0Lab_A(config-line)#ip access-group 10 in
      - Lab_A(config)#access-list 10 permit 172.16.1.1Lab_A(config)#line vty 0 4Lab_A(config-line)#access-class 10 out
      - Lab_A(config)#access-list 10 permit 172.16.1.1Lab_A(config)#line vty 0 4Lab_A(config-line)#access-class 10 in
      - Lab_A(config)#access-list 10 permit 172.16.1.1Lab_A(config)#line vty 0 4Lab_A(config-line)#ip access-group 10 in
    answer: 2
    explanation: Telnet access to the router is restricted by using either a standard or extended IP access list inbound on the VTY lines of the router. The command access-class is used to apply the access list to the VTY lines.
    keyConcept: Security
    testedIn:
      - PPSC
      - FPSC
  - id: 18
    question: Which of the following commands connect access list 110 inbound to interface ethernet0?
    options:
      - Router(config)# ip access-group 110 in
      - Router(config)# ip access-list 110 in
      - Router(config-if)# ip access-group 110 in
      - Router(config-if)# ip access-list 110 in
    answer: 2
    explanation: To place an access list on an interface, use the ip access-group command in interface configuration mode.
    keyConcept: Security
    testedIn:
      - PPSC
      - FPSC
---


