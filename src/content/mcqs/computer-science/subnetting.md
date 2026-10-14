---
title: Subnetting MCQs with Explanations
description: Practice high-yield Computer Science & IT MCQs on Subnetting with worked academic solutions for PPSC, FPSC, CSS, PMS, NTS.
subject: computer-science
subjectName: Computer Science & IT
topic: subnetting
topicName: Subnetting
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
    question: "Your router has the following IP address on Ethernet0: 172.16.2.1/23. Which of the following can be valid host IDs on the LAN interface attached to the router? 1. 172.16.1.100 2. 172.16.1.198 3. 172.16.2.255 4. 172.16.3.0"
    options:
      - 1 only
      - 2 and 3 only
      - 3 and 4 only
      - None of the above
      - 2 and 5 only
    answer: 2
    explanation: The router's IP address on the E0 interface is 172.16.2.1/23, which is 255.255.254.0. This makes the third octet a block size of 2. The router's interface is in the 2.0 subnet, and the broadcast address is 3.255 because the next subnet is 4.0. The valid host range is 2.1 through 3.254. The router is using the first valid host address in the range.
    keyConcept: Subnetting
    testedIn:
      - PPSC
      - FPSC
  - id: 2
    question: Which two statements describe the IP address 10.16.3.65/23? 1. The subnet address is 10.16.3.0 255.255.254.0. 2. The lowest host address in the subnet is 10.16.2.1 255.255.254.0. 3. The last valid host address in the subnet is 10.16.2.254 255.255.254.0. 4. The broadcast address of the subnet is 10.16.3.255 255.255.254.0.
    options:
      - 1 and 3
      - 2 and 4
      - 1, 2 and 4
      - 2, 3 and 4
      - 2 and 5 only
    answer: 1
    explanation: The mask 255.255.254.0 (/23) used with a Class A address means that there are 15 subnet bits and 9 host bits. The block size in the third octet is 2 (256 - 254). So this makes the subnets in the interesting octet 0, 2, 4, 6, etc., all the way to 254. The host 10.16.3.65 is in the 2.0 subnet. The next subnet is 4.0, so the broadcast address for the 2.0 subnet is 3.255. The valid host addresses are 2.1 through 3.254.
    keyConcept: Subnetting
    testedIn:
      - PPSC
      - FPSC
  - id: 3
    question: A network administrator is connecting hosts A and B directly through their Ethernet interfaces, as shown in the illustration. Ping attempts between the hosts are unsuccessful. What can be done to provide connectivity between the hosts? 1. A crossover cable should be used in place of the straight-through cable. 2. A rollover cable should be used in place of the straight-through cable. 3. The subnet masks should be set to 255.255.255.192. 4. A default gateway needs to be set on each host. 5. The subnet masks should be set to 255.255.255.0.
    options:
      - 1 only
      - 2 only
      - 3 and 4 only
      - 1 and 5 only
      - 2 and 5 only
    answer: 3
    explanation: First, if you have two hosts directly connected, as shown in the graphic, then you need a crossover cable. A straight-through cable won't work. Second, the hosts have different masks, which puts them in different subnets. The easy solution is just to set both masks to 255.255.255.0 (/24).
    keyConcept: Subnetting
    testedIn:
      - PPSC
      - FPSC
  - id: 4
    question: What is the maximum number of IP addresses that can be assigned to hosts on a local subnet that uses the 255.255.255.224 subnet mask?
    options:
      - "14"
      - "15"
      - "16"
      - "30"
    answer: 3
    explanation: A /27 (255.255.255.224) is 3 bits on and 5 bits off. This provides 8 subnets, each with 30 hosts. Does it matter if this mask is used with a Class A, B, or C network address? Not at all. The number of host bits would never change.
    keyConcept: Subnetting
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: You need to subnet a network that has 5 subnets, each with at least 16 hosts. Which classful subnet mask would you use?
    options:
      - 255.255.255.192
      - 255.255.255.224
      - 255.255.255.240
      - 255.255.255.248
    answer: 1
    explanation: You need 5 subnets, each with at least 16 hosts. The mask 255.255.255.240 provides 16 subnets with 14 hosts-this will not work. The mask 255.255.255.224 provides 8 subnets, each with 30 hosts. This is the best answer.
    keyConcept: Subnetting
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: You have a network that needs 29 subnets while maximizing the number of host addresses available on each subnet. How many bits must you borrow from the host field to provide the correct subnet mask?
    options:
      - "2"
      - "3"
      - "4"
      - "5"
    answer: 3
    explanation: A 240 mask is 4 subnet bits and provides 16 subnets, each with 14 hosts. We need more subnets, so let's add subnet bits. One more subnet bit would be a 248 mask. This provides 5 subnet bits (32 subnets) with 3 host bits (6 hosts per subnet). This is the best answer.
    keyConcept: Subnetting
    testedIn:
      - PPSC
      - FPSC
  - id: 7
    question: If an Ethernet port on a router were assigned an IP address of 172.16.112.1/25, what would be the valid subnet address of this host?
    options:
      - 172.16.112.0
      - 172.16.0.0
      - 172.16.96.0
      - 172.16.255.0
    answer: 0
    explanation: A /25 mask is 255.255.255.128. Used with a Class B network, the third and fourth octets are used for subnetting with a total of 9 subnet bits, 8 bits in the third octet and 1 bit in the fourth octet. Since there is only 1 bit in the fourth octet, the bit is either off or on-which is a value of 0 or 128. The host in the question is in the 0 subnet, which has a broadcast address of 127 since 128 is the next subnet.
    keyConcept: Subnetting
    testedIn:
      - PPSC
      - FPSC
  - id: 8
    question: You have an interface on a router with the IP address of 192.168.192.10/29. Including the router interface, how many hosts can have IP addresses on the LAN attached to the router interface?
    options:
      - "6"
      - "8"
      - "30"
      - "32"
    answer: 0
    explanation: A /29 (255.255.255.248), regardless of the class of address, has only 3 host bits. Six hosts is the maximum number of hosts on this LAN, including the router interface.
    keyConcept: Subnetting
    testedIn:
      - PPSC
      - FPSC
  - id: 9
    question: What is the subnetwork number of a host with an IP address of 172.16.66.0/21?
    options:
      - 172.16.36.0
      - 172.16.48.0
      - 172.16.64.0
      - 172.16.0.0
    answer: 2
    explanation: A /21 is 255.255.248.0, which means we have a block size of 8 in the third octet, so we just count by 8 until we reach 66. The subnet in this question is 64.0. The next subnet is 72.0, so the broadcast address of the 64 subnet is 71.255.
    keyConcept: Subnetting
    testedIn:
      - PPSC
      - FPSC
  - id: 10
    question: The network address of 172.16.0.0/19 provides how many subnets and hosts?
    options:
      - 7 subnets, 30 hosts each
      - 8 subnets, 8,190 hosts each
      - 8 subnets, 2,046 hosts each
      - 7 subnets, 2,046 hosts each
    answer: 1
    explanation: A CIDR address of /19 is 255.255.224.0. This is a Class B address, so that is only 3 subnet bits, but it provides 13 host bits, or 8 subnets, each with 8,190 hosts.
    keyConcept: Subnetting
    testedIn:
      - PPSC
      - FPSC
  - id: 11
    question: You need to configure a server that is on the subnet 192.168.19.24/29. The router has the first available host address. Which of the following should you assign to the server?
    options:
      - 192.168.19.0 255.255.255.0
      - 192.168.19.33 255.255.255.240
      - 192.168.19.26 255.255.255.248
      - 192.168.19.31 255.255.255.248
    answer: 2
    explanation: A /29 is 255.255.255.248, which is a block size of 8 in the fourth octet. The subnets are 0, 8, 16, 24, 32, 40, etc. 192.168.19.24 is the 24 subnet, and since 32 is the next subnet, the broadcast address for the 24 subnet is 31. 192.168.19.26 is the only correct answer.
    keyConcept: Subnetting
    testedIn:
      - PPSC
      - FPSC
  - id: 12
    question: You have an interface on a router with the IP address of 192.168.192.10/29. What is the broadcast address the hosts will use on this LAN?
    options:
      - 192.168.192.15
      - 192.168.192.31
      - 192.168.192.63
      - 192.168.192.127
    answer: 0
    explanation: A /29 (255.255.255.248) has a block size of 8 in the fourth octet. This means the subnets are 0, 8, 16, 24, etc. 10 is in the 8 subnet. The next subnet is 16, so 15 is the broadcast address.
    keyConcept: Subnetting
    testedIn:
      - PPSC
      - FPSC
  - id: 13
    question: You have a network with a subnet of 172.16.17.0/22. Which is the valid host address?
    options:
      - 172.16.17.1 255.255.255.252
      - 172.16.0.1 255.255.240.0
      - 172.16.20.1 255.255.254.0
      - 172.16.18.255 255.255.252.0
    answer: 3
    explanation: A Class B network ID with a /22 mask is 255.255.252.0, with a block size of 4 in the third octet. The network address in the question is in subnet 172.16.16.0 with a broadcast address of 172.16.19.255. Only option E even has the correct subnet mask listed, and 172.16.18.255 is a valid host.
    keyConcept: Subnetting
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: On a VLSM network, which mask should you use on point-to-point WAN links in order to reduce the waste of IP addresses?
    options:
      - /27
      - /28
      - /29
      - /30
    answer: 3
    explanation: A point-to-point link uses only two hosts. A /30, or 255.255.255.252, mask provides two hosts per subnet.
    keyConcept: Subnetting
    testedIn:
      - PPSC
      - FPSC
  - id: 15
    question: To test the IP stack on your local host, which IP address would you ping?
    options:
      - 127.0.0.0
      - 1.0.0.127
      - 127.0.0.1
      - 127.0.0.255
    answer: 2
    explanation: To test the local stack on your host, ping the loopback interface of 127.0.0.1.
    keyConcept: Subnetting
    testedIn:
      - PPSC
      - FPSC
  - id: 16
    question: If a host on a network has the address 172.16.45.14/30, what is the subnetwork this host belongs to?
    options:
      - 172.16.45.0
      - 172.16.45.4
      - 172.16.45.8
      - 172.16.45.12
      - 192.168.10.126
    answer: 3
    explanation: A /30, regardless of the class of address, has a 252 in the fourth octet. This means we have a block size of 4 and our subnets are 0, 4, 8, 12, 16, etc. Address 14 is obviously in the 12 subnet.
    keyConcept: Subnetting
    testedIn:
      - PPSC
      - FPSC
  - id: 17
    question: Using the following illustration, what would be the IP address of E0 if you were using the eighth subnet? The network ID is 192.168.10.0/28 and you need to use the last available IP address in the range. The zero subnet should not be considered valid for this question.
    options:
      - 192.168.10.142
      - 192.168.10.66
      - 192.168.100.254
      - 192.168.10.143
      - 192.168.10.126
    answer: 0
    explanation: A /28 is a 255.255.255.240 mask. Let's count to the ninth subnet (we need to find the broadcast address of the eighth subnet, so we need to count to the ninth subnet). Starting at 16 (remember, the question stated that we will not use subnet zero, so we start at 16, not 0), 16, 32, 48, 64, 80, 96, 112, 128, 144. The eighth subnet is 128 and the next subnet is 144, so our broadcast address of the 128 subnet is 143. This makes the host range 129-142. 142 is the last valid host.
    keyConcept: Subnetting
    testedIn:
      - PPSC
      - FPSC
  - id: 18
    question: Which configuration command must be in effect to allow the use of 8 subnets if the Class C subnet mask is 255.255.255.224?
    options:
      - "Router (config) #ip classless"
      - "Router (config) #no ip classful"
      - "Router (config) #ip unnumbered"
      - "Router (config) #ip subnet-zero"
    answer: 3
    explanation: A Class C subnet mask of 255.255.255.224 is 3 bits on and 5 bits off (11100000) and provides 8 subnets, each with 30 hosts. However, if the command ip subnet-zero is not used, then only 6 subnets would be available for use.
    keyConcept: Subnetting
    testedIn:
      - PPSC
      - FPSC
  - id: 19
    question: Using the illustration from the previous question, what would be the IP address of SO if you were using the first subnet? The network ID is 192.168.10.0/28 and you need to use the last available IP address in the range. Again, the zero subnet should not be considered valid for this question.
    options:
      - 192.168.10.24
      - 192.168.10.62
      - 192.168.10.30
      - 192.168.10.127
    answer: 2
    explanation: A /28 is a 255.255.255.240 mask. The first subnet is 16 (remember that the question stated not to use subnet zero) and the next subnet is 32, so our broadcast address is 31. This makes our host range 17-30. 30 is the last valid host.
    keyConcept: Subnetting
    testedIn:
      - PPSC
      - FPSC
  - id: 20
    question: What is the subnetwork address for a host with the IP address 200.10.5.68/28?
    options:
      - 200.10.5.56
      - 200.10.5.32
      - 200.10.5.64
      - 200.10.5.0
    answer: 2
    explanation: "Explanation: Step 1: The given IP address is 200.10.5.68 with a subnet mask of /28. Step 2: Convert the subnet mask from its decimal representation to binary. The subnet mask /28 corresponds to 255.255.255.240 in decimal, which is 11111111.11111111.11111111.11110000 in binary. Step 3: Perform a bitwise \"AND\" operation between the IP address and the subnet mask. IP address: 200.10.5.68 -> 11001000.00001010.00000101.01000100 Subnet mask: 255.255.255.240 -> 11111111.11111111.11111111.11110000 Subnet (AND): 200.10.5.64 -> 11001000.00001010.00000101.01000000 Step 4: The result of the \"AND\" operation is the subnetwork address. Therefore, the subnetwork address for the host with the IP address 200.10.5.68/28 is: C. 200.10.5.64 This output corresponds to the subnetwork address obtained by applying the subnet mask to the given IP address."
    keyConcept: Subnetting
    testedIn:
      - PPSC
      - FPSC
---


