---
title: Network Address Translation MCQs with Explanations
description: Practice high-yield Computer Science & IT MCQs on Network Address Translation with worked academic solutions for PPSC, FPSC, CSS, PMS, NTS.
subject: computer-science
subjectName: Computer Science & IT
topic: network-address-translation
topicName: Network Address Translation
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
    question: Which command would you place on interface connected to the Internet?
    options:
      - ip nat inside
      - ip nat outside
      - ip outside global
      - ip inside local
    answer: 1
    explanation: As in access-lists, you must configure your interfaces before NAT will provide any translations. On the inside networks you would use the command ip nat inside . On the outside interface, you will use the command ip nat outside .
    keyConcept: Network Address Translation
    testedIn:
      - PPSC
      - FPSC
  - id: 2
    question: Which command will show you all the translations active on your router?
    options:
      - show ip nat translations
      - show ip nat statistics
      - debug ip nat
      - clear ip nat translations *
    answer: 0
    explanation: The command show ip nat translations will show you the translation table containing all the active NAT entries.
    keyConcept: Network Address Translation
    testedIn:
      - PPSC
      - FPSC
  - id: 3
    question: Which command would you place on interface on a private network?
    options:
      - ip nat inside
      - ip nat outside
      - ip outside global
      - ip inside local
    answer: 0
    explanation: As in access-lists, you must configure your interfaces before NAT will provide any translations. On the inside networks you would use the command ip nat inside . On the outside interface, you will use the command ip nat outside .
    keyConcept: Network Address Translation
    testedIn:
      - PPSC
      - FPSC
  - id: 4
    question: Pat Address Translation is also termed what?
    options:
      - NAT Fast
      - NAT Static
      - NAT Overload
      - Overloading Static
    answer: 2
    explanation: Another term for port address translation is NAT Overload because that is the command used to enable port address translation.
    keyConcept: Network Address Translation
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: When creating a pool of global addresses, which of the following can be used instead of the netmask command?
    options:
      - / (slash notation)
      - prefix-length
      - no mask
      - block-size
    answer: 1
    explanation: Instead of the netmask command, you can use the prefix-length statement.
    keyConcept: Network Address Translation
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: Which of the following would be a good starting point for troubleshooting if your router is not translating?
    options:
      - Reboot.
      - Call Cisco.
      - Check your interfaces for the correct configuration.
      - Run the debug all command.
    answer: 2
    explanation: In order for NAT to provide translation services, you must have ip nat inside and ip nat outside configured on your router's interfaces.
    keyConcept: Network Address Translation
    testedIn:
      - PPSC
      - FPSC
  - id: 7
    question: Which command will show you the summary of the NAT configuration?
    options:
      - show ip nat translations
      - show ip nat statistics
      - debug ip nat
      - clear ip nat translations *
    answer: 1
    explanation: The show ip nat statistics command displays a summary of the NAT configuration as well as counts of active translation types, hits to an existing mapping, misses (causing an attempt to create a mapping), and expired translations.
    keyConcept: Network Address Translation
    testedIn:
      - PPSC
      - FPSC
  - id: 8
    question: Which of the following is considered to be the destination host before translation?
    options:
      - Inside local
      - Outside local
      - Inside global
      - Outside global
    answer: 1
    explanation: The host on the global network before translation is considered to be an outside local host.
    keyConcept: Network Address Translation
    testedIn:
      - PPSC
      - FPSC
  - id: 9
    question: Which of the following is considered to be the address after translation?
    options:
      - Inside local
      - Outside local
      - Inside global
      - Outside global
    answer: 2
    explanation: The host on the private network after translation is considered to be an inside global host.
    keyConcept: Network Address Translation
    testedIn:
      - PPSC
      - FPSC
  - id: 10
    question: Which are considered the methods of NAT? 1. Static 2. IP NAT pool 3. Dynamic 4. NAT double-translation 5. Overload
    options:
      - 1 and 6
      - 3 only
      - 1, 3 and 5
      - All of the above
    answer: 2
    explanation: "You can configure NAT three ways on a Cisco router: static, dynamic, and NAT Overload (PAT)."
    keyConcept: Network Address Translation
    testedIn:
      - PPSC
      - FPSC
  - id: 11
    question: Which command will allow you to see real-time translations on your router?
    options:
      - show ip nat translations
      - show ip nat statistics
      - debug ip nat
      - clear ip nat translations *
    answer: 2
    explanation: The command debug ip nat will show you in real time the translations occurring on your router.
    keyConcept: Network Address Translation
    testedIn:
      - PPSC
      - FPSC
  - id: 12
    question: Which of the following would be good reasons to run NAT? 1. You need to connect to the Internet and your hosts don't have globally unique IP addresses. 2. You change to a new ISP that requires you to renumber your network. 3. You don't want any hosts connecting to the Internet. 4. You require two intranets with duplicate addresses to merge.
    options:
      - 1, 2 and 4
      - 2 and 4
      - 3 only
      - All of the above
    answer: 0
    explanation: The most popular use of NAT is if you want to connect to the Internet and you don't want hosts to have global (real) IP addresses, but option B and D are correct as well.
    keyConcept: Network Address Translation
    testedIn:
      - PPSC
      - FPSC
  - id: 13
    question: Which of the following are advantages of using NAT? 1. Translation introduces switching path delays. 2. Conserves legally registered addresses. 3. Causes loss of end-to-end IP traceability. 4. Increases flexibility when connecting to the Internet. 5. Certain applications will not function with NAT enabled. 6. Reduces address overlap occurrence.
    options:
      - 1, 3 and 4
      - 3, 5 and 6
      - 5 and 6
      - 2, 4 and 6
    answer: 3
    explanation: NAT is not perfect, but there are some advantages. It conserves global addresses, which allow us to add millions of hosts to the Internet without "real" IP addresses. This provides flexibility in our corporate networks. NAT can also allow you to use the same subnet more than once in the same network without overlapping networks.
    keyConcept: Network Address Translation
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: Which of the following is considered to be the address before translation?
    options:
      - Inside local
      - Outside local
      - Inside global
      - Outside global
    answer: 0
    explanation: The host on the private network before translation is considered to be an inside local host.
    keyConcept: Network Address Translation
    testedIn:
      - PPSC
      - FPSC
  - id: 15
    question: Which of the following are disadvantages of using NAT? 1. Translation introduces switching path delays. 2. Conserves legally registered addresses. 3. Causes loss of end-to-end IP traceability. 4. Increases flexibility when connecting to the Internet. 5. Certain applications will not function with NAT enabled. 6. Reduces address overlap occurrence.
    options:
      - 1, 3 and 5
      - 3 and 4
      - 2, 4 and 5
      - 1 and 3
    answer: 0
    explanation: NAT is not perfect and can cause some issues in some networks, but most networks work just fine. NAT can cause delays and troubleshooting problems, and some applications just won't work.
    keyConcept: Network Address Translation
    testedIn:
      - PPSC
      - FPSC
  - id: 16
    question: Which of the following is considered to be the destination host after translation?
    options:
      - Inside local
      - Outside local
      - Inside global
      - Outside global
    answer: 3
    explanation: The host on the global network after translation is considered to be an outside global host.
    keyConcept: Network Address Translation
    testedIn:
      - PPSC
      - FPSC
  - id: 17
    question: Which command will create a dynamic pool named Todd that will provide you with 30 global addresses?
    options:
      - ip nat pool Todd 171.16.10.65 171.16.10.94 net 255.255.255.240
      - ip nat pool Todd 171.16.10.65 171.16.10.94 net 255.255.255.224
      - ip nat pool Todd 171.16.10.1 171.16.10.254 net 255.255.255.0
    answer: 1
    explanation: The command ip nat pool creates the pool that hosts can use to get onto the global Internet. What makes option B correct is that the range 171.16.10.65 through 171.16.10.94 includes 30 hosts, but the mask has to match 30 hosts as well, and that mask is 255.255.255.224. Option C is wrong because the pool name has a lower case "T" in the pool name. Pool name's are case sensitive.
    keyConcept: Network Address Translation
    testedIn:
      - PPSC
      - FPSC
  - id: 18
    question: Which command will clear all the translations active on your router?
    options:
      - show ip nat translations
      - show ip nat statistics
      - debug ip nat
      - clear ip nat translations *
    answer: 3
    explanation: The command clear ip nat translations * will clear all the active NAT entries in your translation table.
    keyConcept: Network Address Translation
    testedIn:
      - PPSC
      - FPSC
---


