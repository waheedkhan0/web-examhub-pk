---
title: Ios And Security Device Manager MCQs with Explanations
description: Practice high-yield Computer Science & IT MCQs on Ios And Security Device Manager with worked academic solutions for PPSC, FPSC, CSS, PMS, NTS.
subject: computer-science
subjectName: Computer Science & IT
topic: ios-and-security-device-manager
topicName: Ios And Security Device Manager
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
    question: Which of the following commands sets the secret password to Cisco?
    options:
      - enable secret password Cisco
      - enable secret cisco
      - enable password Cisco
    answer: 2
    explanation: The enable secret password is case sensitive, so the second option is wrong. To set the enable secret <password> , use the enable secret <password> command from global configuration mode.
    keyConcept: Ios And Security Device Manager
    testedIn:
      - PPSC
      - FPSC
  - id: 2
    question: "You type the following command into the router and receive the following output: Router#show serial 0/0 ^ % Invalid input detected at '^' marker. Why was this error message displayed?"
    options:
      - You need to be in privileged mode.
      - You cannot have a space between serial and 0/0.
      - The router does not have a serial0/0 interface.
      - Part of the command is missing.
    answer: 3
    explanation: You can view the interface statistics from user mode, but the command is show interface serial 0/0
    keyConcept: Ios And Security Device Manager
    testedIn:
      - PPSC
      - FPSC
  - id: 3
    question: Which of the following commands will display the current IP addressing and the layer 1 and 2 status of an interface? 1. show version 2. show protocols 3. show interfaces 4. show controllers 5. show ip interface
    options:
      - 1, 2 and 4
      - 2, 3 and 5
      - 3 and 4 only
      - None of the above
    answer: 1
    explanation: The commands show protocols , show interfaces , and show ip interface will show you the layer 1 and 2 status and the IP addresses of your router's interfaces.
    keyConcept: Ios And Security Device Manager
    testedIn:
      - PPSC
      - FPSC
  - id: 4
    question: "You type show running-config and get this output: [output cut] Line console 0 Exec-timeout 1 35 Password BIXPASSWD Login [output cut] What do the two numbers following the exec-timeout command mean?"
    options:
      - If no command has been typed in 35 seconds, the console connection will be closed.
      - If no router activity has been detected in 1 hour and 35 minutes, the console will be locked out.
      - If no commands have been typed in 1 minute and 35 seconds, the console connection will be closed.
      - If you're connected to the router by a Telnet connection, input must be detected within 1 minute and 35 seconds or the connection will be closed.
    answer: 2
    explanation: The exec-timeout command is set in minutes and seconds.
    keyConcept: Ios And Security Device Manager
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: What layer of the OSI model would you assume the problem is in if you type show interface serial 1 and receive the following message? "Serial1 is down, line protocol is down."
    options:
      - Physical layer
      - Data Link layer
      - Network layer
      - None. It is a router problem.
    answer: 0
    explanation: If you see that a serial interface and the protocol are both down, then you have a Physical layer problem. If you see serial1 is up , line protocol is down , then you are not receiving (Data Link) keepalives from the remote end.
    keyConcept: Ios And Security Device Manager
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: Which of the following commands displays the configurable parameters and statistics of all interfaces on a router?
    options:
      - show running-config
      - show startup-config
      - show interfaces
      - show versions
    answer: 2
    explanation: With the show interfaces command, you can view the configurable parameters, get statistics for the interfaces on the router, verify if the interfaces are shut down, and see the IP address of each interface.
    keyConcept: Ios And Security Device Manager
    testedIn:
      - PPSC
      - FPSC
  - id: 7
    question: Which of the following commands will configure all the default VTY ports on a router?
    options:
      - Router#line vty 0 4
      - "Router (config) #line vty 0 4"
      - "Router (config-if) #line console 0"
      - "Router (config) #line vty all"
    answer: 1
    explanation: From global configuration mode, use the line vty 0 4 command to set all five default VTY lines.
    keyConcept: Ios And Security Device Manager
    testedIn:
      - PPSC
      - FPSC
  - id: 8
    question: You need to find the broadcast address used on a LAN on your router. What command will you type into the router from user mode to find the broadcast address?
    options:
      - show running-config
      - show startup-config
      - show interfaces
      - show protocols
    answer: 2
    explanation: The command show ip protocols will actually show you the broadcast address for each interface - too bad it isn't a possible answer. Your best answer is show interfaces , which will provide the IP address and mask for each interface.
    keyConcept: Ios And Security Device Manager
    testedIn:
      - PPSC
      - FPSC
  - id: 9
    question: Which command will delete the contents of NVRAM on a router?
    options:
      - delete NVRAM
      - delete startup-config
      - erase NVRAM
      - erase start
    answer: 3
    explanation: The erase startup-config command erases the contents of NVRAM and will put you in setup mode if the router is restarted.
    keyConcept: Ios And Security Device Manager
    testedIn:
      - PPSC
      - FPSC
  - id: 10
    question: What keystroke will terminate setup mode?
    options:
      - Ctrl+Z
      - Ctrl+^
      - Ctrl+C
      - Ctrl+Shift+^
    answer: 2
    explanation: You can exit setup mode at any time by using the keystroke Ctrl+C .
    keyConcept: Ios And Security Device Manager
    testedIn:
      - PPSC
      - FPSC
  - id: 11
    question: What command do you type to save the configuration stored in RAM to NVRAM?
    options:
      - "Router (config) #copy current to starting"
      - Router#copy starting to running
      - "Router (config) #copy running-config startup-config"
      - Router#copy run startup
    answer: 3
    explanation: To copy the running-config to NVRAM so that it will be used if the router is restarted, use the copy running-config startup-config command ( copy run start for short).
    keyConcept: Ios And Security Device Manager
    testedIn:
      - PPSC
      - FPSC
  - id: 12
    question: You type Router#sh ru and receive an % ambiguous command error. Why did you receive this message?
    options:
      - The command requires additional options or parameters.
      - There is more than one show command that starts with the letters
      - There is no show command that starts with
      - The command is being executed from the wrong router mode.
    answer: 1
    explanation: The % ambiguous command error means that there is more then one possible command that starts with ru . Use a question mark to find the correct command.
    keyConcept: Ios And Security Device Manager
    testedIn:
      - PPSC
      - FPSC
  - id: 13
    question: If you wanted administrators to see a message when logging into the router, which command would you use?
    options:
      - message banner motd
      - banner message motd
      - banner motd
      - message motd
    answer: 2
    explanation: The typical banner is a message of the day (MOTD) and is set by using the global configuration mode command banner motd .
    keyConcept: Ios And Security Device Manager
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: How many simultaneous Telnet sessions does a Cisco router support by default?
    options:
      - "2"
      - "3"
      - "4"
      - "5"
    answer: 3
    explanation: Cisco routers, if they do not have the Enterprise edition of the IOS, will default to 5 simultaneous Telnet sessions.
    keyConcept: Ios And Security Device Manager
    testedIn:
      - PPSC
      - FPSC
  - id: 15
    question: "You set the console password, but when you display the configuration, the password doesn't show up; it looks like this: [output cut] Line console 0 Exec-timeout 1 44 Password 7098C0BQR Login [output cut] What cause the password to be stored like this?"
    options:
      - encrypt password
      - service password-encryption
      - service-password-encryption
      - exec-timeout 1 35
    answer: 1
    explanation: The command service password-encryption , from global configuration mode, will encrypt the passwords.
    keyConcept: Ios And Security Device Manager
    testedIn:
      - PPSC
      - FPSC
  - id: 16
    question: Which command will show you whether a DTE or a DCE cable is plugged into serial 0?
    options:
      - sh int s0
      - sh int serial 0
      - show controllers serial 0
      - show serial 0 controllers
    answer: 2
    explanation: The show controllers serial 0 command will show you whether either a DTE or DCE cable is connected to the interface. If it is a DCE connection, you need to add clocking with the clock rate command.
    keyConcept: Ios And Security Device Manager
    testedIn:
      - PPSC
      - FPSC
  - id: 17
    question: You want to totally reinitialize the router and replace the current running-config with the current startup-config. What command will you use?
    options:
      - replace run start
      - copy run start
      - copy start run
      - reload
    answer: 3
    explanation: "To completely replace the running-config with the startup-config, you must reload the router. Note : You may have picked option C, which isn't a bad answer. Remember, though, it doesn't replace the configuration, it appends it."
    keyConcept: Ios And Security Device Manager
    testedIn:
      - PPSC
      - FPSC
  - id: 18
    question: If you delete the contents of NVRAM and reboot the router, what mode will you be in?
    options:
      - Privileged mode
      - Global mode
      - Setup mode
      - NVRAM loaded mode
    answer: 2
    explanation: If you delete the startup-config and reload the router, the router will automatically enter setup mode. You can also type setup from privileged mode at any time.
    keyConcept: Ios And Security Device Manager
    testedIn:
      - PPSC
      - FPSC
  - id: 19
    question: What is the problem with an interface if you type show interface serial 0 and receive the following message? "Serial0 is administratively down, line protocol is down."
    options:
      - The keepalives are different times.
      - The administrator has the interface shut down.
      - The administrator is pinging from the interface.
      - No cable is attached.
    answer: 1
    explanation: If an interface is shut down, the show interface command will show the interface as administratively shut down. (It is possible that no cable is attached, but you can't tell that from this message.)
    keyConcept: Ios And Security Device Manager
    testedIn:
      - PPSC
      - FPSC
---


