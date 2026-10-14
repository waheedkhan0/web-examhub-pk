---
title: Managing A Cisco Internetwork MCQs with Explanations
description: Practice high-yield Computer Science & IT MCQs on Managing A Cisco Internetwork with worked academic solutions for PPSC, FPSC, CSS, PMS, NTS.
subject: computer-science
subjectName: Computer Science & IT
topic: managing-a-cisco-internetwork
topicName: Managing A Cisco Internetwork
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
    question: You have your laptop directly connected into a router's Ethernet port. Which of the following are among the requirements for the copy flash tftp command to be successful? 1. TFTP server software must be running on the router. 2. TFTP server software must be running on your laptop. 3. The Ethernet cable connecting the laptop directly into the router's Ethernet port must be a straight-through cable. 4. The laptop must be on the same subnet as the router's Ethernet interface. 5. The copy flash tftp command must be supplied the IP address of the laptop.
    options:
      - 1, 3 and 4
      - 2, 4 and 5
      - 3 and 5 only
      - 5 only
    answer: 1
    explanation: Before you back up an IOS image to a laptop directly connected to a router's Ethernet port, make sure the TFTP server software is running on your laptop, that the Ethernet cable is a "crossover," and that the laptop is in the same subnet as the router's Ethernet port, and then you can use the copy flash tftp command from your laptop.
    keyConcept: Managing A Cisco Internetwork
    testedIn:
      - PPSC
      - FPSC
  - id: 2
    question: What information is displayed by the show hosts command? 1. Temporary DNS entries 2. The names of the routers created using the hostname command 3. The IP addresses of workstations allowed to access the router 4. Permanent name-to-address mappings created using the ip host command 5. The length of time a host has been connected to the router via Telnet
    options:
      - 1, 2 and 3
      - 1 and 4
      - 3, 4, and 5
      - All of the above
    answer: 1
    explanation: The show hosts command provides information on temporary DNS entries and permanent name-to-address mappings created using the ip host command.
    keyConcept: Managing A Cisco Internetwork
    testedIn:
      - PPSC
      - FPSC
  - id: 3
    question: You are unsuccessful in telnetting into a remote device. What could the problem be? 1. IP addresses are incorrect. 2. Access control list is filtering Telnet. 3. There is a defective serial cable. 4. The VTY password is missing.
    options:
      - 1 only
      - 3 only
      - 2 and 4 only
      - All of the above
    answer: 2
    explanation: The best answers, the ones you need to remember, are that either an access control list is filtering the Telnet session or the VTY password is not set on the remote device.
    keyConcept: Managing A Cisco Internetwork
    testedIn:
      - PPSC
      - FPSC
  - id: 4
    question: Which three commands can be used to check LAN connectivity problems on a router? 1. show interfaces 2. show ip route 3. tracert 4. ping 5. dns lookups
    options:
      - 1 ,2 and 4
      - 2 and 5
      - 3 and 5
      - None of the above
    answer: 0
    explanation: The tracert command is a Windows command and will not work on a router! A router uses the traceroute command.
    keyConcept: Managing A Cisco Internetwork
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: If you want to have more than one Telnet session open at the same time, what keystroke combination would you use?
    options:
      - Tab+Spacebar
      - Ctrl+X, then 6
      - Ctrl+Shift+X, then 6
      - Ctrl+Shift+6, then X
    answer: 3
    explanation: To keep open one or more Telnet sessions, use the Ctrl+Shift+6 and then X keystroke combination.
    keyConcept: Managing A Cisco Internetwork
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: Which command will copy the IOS to a backup host on your network?
    options:
      - transfer IOS to 172.16.10.1
      - copy run start
      - copy start tftp
      - copy flash tftp
    answer: 3
    explanation: To copy the IOS to a backup host, which is stored in flash memory by default, use the copy flash tftp command.
    keyConcept: Managing A Cisco Internetwork
    testedIn:
      - PPSC
      - FPSC
  - id: 7
    question: Which command loads a new version of the Cisco IOS into a router?
    options:
      - copy flash ftp
      - copy ftp flash
      - copy flash tftp
      - copy tftp flash
    answer: 3
    explanation: The command copy tftp flash will allow you to copy a new IOS into flash memory on your router.
    keyConcept: Managing A Cisco Internetwork
    testedIn:
      - PPSC
      - FPSC
  - id: 8
    question: You are troubleshooting a connectivity problem in your corporate network and want to isolate the problem. You suspect that a router on the route to an unreachable network is at fault. What IOS user exec command should you issue?
    options:
      - Router> ping
      - Router> trace
      - Router> show ip route
      - Router> show interface
    answer: 1
    explanation: The command traceroute (trace for short), which can be issued from user mode or privileged mode, is used to find the path a packet takes through an internetwork and will also show you where the packet stops because of an error on a router.
    keyConcept: Managing A Cisco Internetwork
    testedIn:
      - PPSC
      - FPSC
  - id: 9
    question: The configuration register setting of 0x2102 provides what function to a router?
    options:
      - Tells the router to boot into ROM monitor mode
      - Provides password recovery
      - Tells the router to look in NVRAM for the boot sequence
      - Boots the IOS from a TFTP server
    answer: 2
    explanation: The default configuration setting of 0x2102 tells the router to look in NVRAM for the boot sequence.
    keyConcept: Managing A Cisco Internetwork
    testedIn:
      - PPSC
      - FPSC
  - id: 10
    question: You telnet to a router and make your necessary changes; now you want to end the Telnet session. What command do you type in?
    options:
      - close
      - disable
      - disconnect
      - exit
    answer: 3
    explanation: Since the question never mentioned anything about a suspended session, you can assume that the Telnet session is still open, and you would just type exit to close the session.
    keyConcept: Managing A Cisco Internetwork
    testedIn:
      - PPSC
      - FPSC
  - id: 11
    question: Which command displays the configuration register setting?
    options:
      - show ip route
      - show boot version
      - show version
      - show flash
    answer: 2
    explanation: The show version command provides you with the current configuration register setting.
    keyConcept: Managing A Cisco Internetwork
    testedIn:
      - PPSC
      - FPSC
  - id: 12
    question: What should the configuration register value be after you successfully complete the password recovery procedure and return the router to normal operation?
    options:
      - "0x2100"
      - "0x2101"
      - "0x2102"
      - "0x2142"
    answer: 2
    explanation: All Cisco routers have a default configuration register setting of 0x2102 , which tells the router to load the IOS from flash memory and the configuration from NVRAM.
    keyConcept: Managing A Cisco Internetwork
    testedIn:
      - PPSC
      - FPSC
  - id: 13
    question: You telnet into a remote device and type debug ip rip , but no output from the debug command is seen. What could the problem be?
    options:
      - You must type the show ip rip command first.
      - IP addressing on the network is incorrect.
      - You must use the terminal monitor command.
      - Debug output is sent only to the console.
    answer: 2
    explanation: To see console messages through your Telnet session, you must enter the terminal monitor command.
    keyConcept: Managing A Cisco Internetwork
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: What does the command o/r 0x2142 provide?
    options:
      - It is used to restart the router.
      - It is used to bypass the configuration in NVRAM.
      - It is used to enter ROM Monitor mode.
      - It is used to view the lost password.
    answer: 1
    explanation: The default configuration setting is 0x2102 , which tells the router to load the IOS from flash and the configuration from NVRAM. 0x2142 tells the router to bypass the configuration in NVRAM so that you can perform password recovery.
    keyConcept: Managing A Cisco Internetwork
    testedIn:
      - PPSC
      - FPSC
  - id: 15
    question: You save the configuration on a router with the copy running-config startup-config command and reboot the router. The router, however, comes up with a blank configuration. What can the problem be?
    options:
      - You didn
      - NVRAM is corrupted.
      - The configuration register setting is incorrect.
      - The newly upgraded IOS is not compatible with the hardware of the router.
    answer: 2
    explanation: If you save a configuration and reload the router and it comes up either in setup mode or as a blank configuration, chances are you have the configuration register setting incorrect.
    keyConcept: Managing A Cisco Internetwork
    testedIn:
      - PPSC
      - FPSC
  - id: 16
    question: The corporate office sends you a new router to connect, but upon connecting the console cable, you see that there is already a configuration on the router. What should be done before a new configuration is entered in the router?
    options:
      - RAM should be erased and the router restarted.
      - Flash should be erased and the router restarted.
      - NVRAM should be erased and the router restarted.
      - The new configuration should be entered and saved.
    answer: 2
    explanation: Before you start to configure the router, you should erase the NVRAM with the erase startup-config command and then reload the router using the reload command.
    keyConcept: Managing A Cisco Internetwork
    testedIn:
      - PPSC
      - FPSC
  - id: 17
    question: Which command will show you the IOS version running on your router?
    options:
      - sh IOS
      - sh flash
      - sh version
      - sh running-config
    answer: 2
    explanation: The best answer is show version , which shows you the IOS file running currently on your router. The show flash command shows you the contents of flash memory, not which file is running.
    keyConcept: Managing A Cisco Internetwork
    testedIn:
      - PPSC
      - FPSC
  - id: 18
    question: You need to gather the IP address of a remote switch that is located in Hawaii. What can you do to find the address?
    options:
      - Issue the show ip arp command on the router connected to the switch.
      - Issue the show ip route command on the router connected to the switch.
      - Issue the show cdp neighbor command on the router connected to the switch.
      - Issue the show cdp neighbors detail command on the router connected to the switch.
    answer: 3
    explanation: Although option A is certainly the "best" answer, unfortunately option D will work just fine and your boss would probably prefer you to use the show cdp neighbors detail command.
    keyConcept: Managing A Cisco Internetwork
    testedIn:
      - PPSC
      - FPSC
  - id: 19
    question: A network administrator wants to upgrade the IOS of a router without removing the image currently installed. What command will display the amount of memory consumed by the current IOS image and indicate whether there is enough room available to hold both the current and new images?
    options:
      - show version
      - show flash
      - show memory
      - show buffers
    answer: 1
    explanation: The show flash command will provide you with the current IOS name and size and the size of flash memory.
    keyConcept: Managing A Cisco Internetwork
    testedIn:
      - PPSC
      - FPSC
  - id: 20
    question: You copy a configuration from a network host to a router's RAM. The configuration looks correct, yet it is not working at all. What could the problem be?
    options:
      - You copied the wrong configuration into RAM.
      - You copied the configuration into flash memory instead.
      - The copy did not override the shutdown command in running-config.
      - The IOS became corrupted after the copy command was initiated.
    answer: 2
    explanation: Since the configuration looks correct, you probably didn't screw up the copy job. However, when you perform a copy from a network host to a router, the interfaces are automatically shut down and need to be manually enabled with the no shutdown command.
    keyConcept: Managing A Cisco Internetwork
    testedIn:
      - PPSC
      - FPSC
---


