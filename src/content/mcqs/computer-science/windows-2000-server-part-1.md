---
title: Windows 2000 Server — Part 1 MCQs with Explanations
description: Practice high-yield Computer Science & IT MCQs on Windows 2000 Server — Part 1 with worked academic solutions for PPSC, FPSC, CSS, PMS, NTS.
subject: computer-science
subjectName: Computer Science & IT
topic: windows-2000-server-part-1
topicName: Windows 2000 Server — Part 1
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
    question: You are the administrator of a Windows 2000 Server computer that has FIVE hard disks. Four 100 GB hard disks on the server are configured as a single stripe volume. You want to reconfigure the fourth disk so that the volume is fault tolerant and has as much space possible available for storing data. You want to use only existing hardware. What should you do?
    options:
      - Convert the disk to dynamic disk shut doWn and restart the server
      - Backup the data on the stripe volume and delete the stripe volume. Create a raidS volume on the four disks, restore the data to the new raid5 volume
      - Backup the data on the stripe volume and delete the stripe volume. Create a mirror volume, shut down and restart the server. Restore the data to new mirror volumes
      - Backup the data on the stripe volume and delete the stripe
      - None of above
    answer: 1
    explanation: Backup the data on the stripe volume and delete the stripe volume. Create a raidS volume on the four disks, restore the data to the new raid5 volume is the correct answer to “You are the administrator of a Windows 2000 Server computer that has FIVE hard disks. Four 100 GB hard disks on the server are configured as a single stripe volume. You want to reconfigure the fourth disk so that the volume is fault tolerant and has as much space possible available for storing data. You want to use only existing hardware. What should you do”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 2
    question: You are the administrator of a Windows 2000 Server network that runs in mixed mode. You install a new Windows 2000 Server computer. You create and share a new HP LaserJet 4L printer. Your Windows 2000 Professional client computers can print to the new printer successfully. However, when users try to connect to the printer from Windows NT Workstation 4.0 client computers, they receive the dialog box shown in the exhibit. "The server on which the printer resides does not have a suitable HP LaserJet printer driver installed". You want the printer driver to be installed automatically on the Windows NT Workstation computers. What should you do?
    options:
      - Copy the Windows NT 4.0 Printer Drivers to the Net logon shared folders on all Windows NT Server 4.0 computers still configured as BDCs
      - Copy the Windows NT 4.0 printer drivers to the Net logon shared folder on the PDC emulator
      - Change the sharing options on the printer to install additional drivers for Windows NT 4.0 or Windows 2000
      - Copy the Windows NT 4.0 printer drivers to the WinntSystem32 pri liter sdri vers folder on the Windows 2000 print server
      - None of above
    answer: 2
    explanation: Change the sharing options on the printer to install additional drivers for Windows NT 4.0 or Windows 2000 is the correct answer to “You are the administrator of a Windows 2000 Server network that runs in mixed mode. You install a new Windows 2000 Server computer. You create and share a new HP LaserJet 4L printer. Your Windows 2000 Professional client computers can print to the new printer successfully. However, when users try to connect to the printer from Windows NT Workstation 4.0 client computers, they receive the dialog box shown in the exhibit. "The server on which the printer resides does not have a suitable HP LaserJet printer driver installed". You want the printer driver to be installed automatically on the Windows NT Workstation computers. What should you do”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 3
    question: Your company's network includes Windows 3.1 client computers, Windows 95 client computers, and Windows 2000 Professional client computers. The company's manufacturing facilities run 24 hours per day. The company has developed its own 32-bit application that collects information from the manufacturing process so that workers on one shift can find out that was manufactured during the previous shift. The company wants to make the application available on all of the client computers by using Terminal Service on a Windows 2000 Server computer. This server will not run as a domain controller. You install Terminal Services. The information technology (IT) department needs to be able to remote control users' sessions to support and troubleshoot the application. What should you do to enable the IT department to control users' sessions?
    options:
      - Configure the Terminal server to run in Remote Administration mode
      - Grant the IT department Full Control permission to the Remote Desktop Protocol (RDP) on the Terminal server
      - Add the members of the IT department to the Power Users group on the Terminal server
      - Use third-party software to enable remote control of users' sessions
      - None of above
    answer: 1
    explanation: Grant the IT department Full Control permission to the Remote Desktop Protocol (RDP) on the Terminal server is the correct answer to “Your company's network includes Windows 3.1 client computers, Windows 95 client computers, and Windows 2000 Professional client computers. The company's manufacturing facilities run 24 hours per day. The company has developed its own 32-bit application that collects information from the manufacturing process so that workers on one shift can find out that was manufactured during the previous shift. The company wants to make the application available on all of the client computers by using Terminal Service on a Windows 2000 Server computer. This server will not run as a domain controller. You install Terminal Services. The information technology (IT) department needs to be able to remote control users' sessions to support and troubleshoot the application. What should you do to enable the IT department to control users' sessions”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 4
    question: You are the administrator of contoso.local domain. You organize the domain into organizational units as shown in the EXHIBIT. You configure the local security options and other settings for the default domain policy object You delegate administration of Michigan and Florida OU. You want to prevent those administrators from creating any other group policy objects with settings that conflict with those you configured.What should you do?
    options:
      - From the group policy options from the contoso.local domains set the option not override
      - From the group policy options from the Michigan and Florida OU, set the option not override
      - Block the group policy inheritance for the contoso.local domain
      - Block the group policy inheritance for Michigan and Florida OU
      - None of above
    answer: 0
    explanation: From the group policy options from the contoso.local domains set the option not override is the correct answer to “You are the administrator of contoso.local domain. You organize the domain into organizational units as shown in the EXHIBIT. You configure the local security options and other settings for the default domain policy object You delegate administration of Michigan and Florida OU. You want to prevent those administrators from creating any other group policy objects with settings that conflict with those you configured.What should you do”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: You are the administrator of a Windows 2000 Server computer. The server contains one network adapter and is a file and print server for critical company resources. You install a second network adpater in the server and connect it to the same network subnet as the first adapter. You want to ensure that the first adapter is used for all network traffic and the second adapter is used only if the first adapter fails or is disconnected from the network. You also want to ensure that the server always has network connectivity even if one network adapter fails. What should you do?
    options:
      - Set the second adapters status to disable
      - Configure the first adapter to use a TCP/IP metric of 100
      - Configure the second adapter to use a TCP/IP metric of 25
      - Configure the binding order on the second adapter to bind TCP/IP last
      - None of above
    answer: 2
    explanation: Configure the second adapter to use a TCP/IP metric of 25 is the correct answer to “You are the administrator of a Windows 2000 Server computer. The server contains one network adapter and is a file and print server for critical company resources. You install a second network adpater in the server and connect it to the same network subnet as the first adapter. You want to ensure that the first adapter is used for all network traffic and the second adapter is used only if the first adapter fails or is disconnected from the network. You also want to ensure that the server always has network connectivity even if one network adapter fails. What should you do”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: You are the administrator of a Windows 2000 domain that has three domain controllers. Each day, you use Windows Backup to perform full backups of each domain controller. You run a script to make changes to account information in Active Directory. As a result of errors in the script, the incorrect user accounts are modified. Active Directory replication then replicates the changes to the other two domain controllers. You want to revert Active Directory to the version that was backed up the previous day. What should you do?
    options:
      - On a single domain controller, use Windows Backup to restore the System State data. Shut down and restart the computer
      - Shut down and restart a single domain controller in directory services restore mode. Use Windows Backup to restore the System State data. Run the Ntdsutil utility. Restart the computer
      - Shut down, and restart a single domain controller by using the Recovery Console. Use Windows Backup to restore the System State data. Exit the Recovery Console. Restart the computer
      - Shut down and restart each domain controller by using the Recovery Console. Use Windows Backup to restore the Sysvol folder. Exit the Recovery Console. Restart the computer
      - None of above
    answer: 1
    explanation: Shut down and restart a single domain controller in directory services restore mode. Use Windows Backup to restore the System State data. Run the Ntdsutil utility. Restart the computer is the correct answer to “You are the administrator of a Windows 2000 domain that has three domain controllers. Each day, you use Windows Backup to perform full backups of each domain controller. You run a script to make changes to account information in Active Directory. As a result of errors in the script, the incorrect user accounts are modified. Active Directory replication then replicates the changes to the other two domain controllers. You want to revert Active Directory to the version that was backed up the previous day. What should you do”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 7
    question: Your network uses TCP/IP as the only network protocol. Devices on the network are configured to use IP address from the private 10.0.0.0 range. All the client computers on the network runs Windows 2000 Professional. The network includes Windows 2000 Server computers and UNIX servers. User's print jobs are sent to shared printers on a Windows 2000 Server computer named PrintServ that directs the print jobs to print devices attached directly to the network. You have a high-capacity print device that is attached to one of the UNIX servers. The UNIX computer uses the LPR printing protocol, and it's IP address is 10.1.1.99. The name of the printer queue is GIANT. You want users to be able to connect to this printer from their computers. What should you do?
    options:
      - Install Microsoft Print Services for Unix on PrintServ. Create a network printer on users' computers, and specify that the printer URL is LPR://10.1.1.99/ GIANT
      - Install Microsoft Print Services for Unix on users* Computers. Create a network printer, and specify that the printer name is \10.1.1.99GIANT
      - Create a network printer on PrintServ, and specify that the printer name is \16.1.1.99GIANT. Share this printer and connect to it from users computers
      - Create a local printer on PrintServ. Create a new TCP/IP port for an LPR server at address 10.1.1.99 with a queue name of GIANT. Share this printer and connect to it from users' computers
      - None of above
    answer: 3
    explanation: Create a local printer on PrintServ. Create a new TCP/IP port for an LPR server at address 10.1.1.99 with a queue name of GIANT. Share this printer and connect to it from users' computers is the correct answer to “Your network uses TCP/IP as the only network protocol. Devices on the network are configured to use IP address from the private 10.0.0.0 range. All the client computers on the network runs Windows 2000 Professional. The network includes Windows 2000 Server computers and UNIX servers. User's print jobs are sent to shared printers on a Windows 2000 Server computer named PrintServ that directs the print jobs to print devices attached directly to the network. You have a high-capacity print device that is attached to one of the UNIX servers. The UNIX computer uses the LPR printing protocol, and it's IP address is 10.1.1.99. The name of the printer queue is GIANT. You want users to be able to connect to this printer from their computers. What should you do”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 8
    question: You are the administrator of a Windows 2000 Server computer. The server hosts several web sites that have logging enabled. You use a third-party reporting utility to analyze the log files produced by the web sites. You notice that all data from 7:00pm to midnight each night is included in the following day's logfile. You want all data to be included in the correct day's log file. What should you do?
    options:
      - Ensure that the log type is set to W3C
      - Change the log rollover property in the website's logging properties
      - Change the time zone setting in the time properties on the web server
      - Configure the time service on the web server to use local system account
      - None of above
    answer: 1
    explanation: Change the log rollover property in the website's logging properties is the correct answer to “You are the administrator of a Windows 2000 Server computer. The server hosts several web sites that have logging enabled. You use a third-party reporting utility to analyze the log files produced by the web sites. You notice that all data from 7:00pm to midnight each night is included in the following day's logfile. You want all data to be included in the correct day's log file. What should you do”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 9
    question: You are the administrator responsible for security and user desktop settings on your network. You need to configure a custom registry entry for all users. You want to add the custom registry entry into a Group Policy object (GPO) with the least amount of administrative effort What should you do?
    options:
      - Configure an ADM template and add the template to the GPO
      - Configure,an INF policy and add the policy to the GPO
      - Configure a Microsoft Windows Installer package and add the package to the GPO
      - Configure RIS to include the registry entry
      - None of above
    answer: 0
    explanation: Configure an ADM template and add the template to the GPO is the correct answer to “You are the administrator responsible for security and user desktop settings on your network. You need to configure a custom registry entry for all users. You want to add the custom registry entry into a Group Policy object (GPO) with the least amount of administrative effort What should you do”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 10
    question: You want to provide complete redundancy for all data stored on your hardware RAID 5 array. You install second h/w Raid 5. You want to create a mirror set of the original array. However when you right click the free space on new array you see no option to create a new volume or mirrrored volume. What should you do?
    options:
      - Convert both to dynamic disks
      - Create an empty extended partition on new disk
      - Create a single unformatted primary partition on new array
      - Format new disk array as a single NTFS primary partition
      - Format the new disk array as a single NTFS logical drive in an extended partition.
    answer: 0
    explanation: Convert both to dynamic disks is the correct answer to “You want to provide complete redundancy for all data stored on your hardware RAID 5 array. You install second h/w Raid 5. You want to create a mirror set of the original array. However when you right click the free space on new array you see no option to create a new volume or mirrrored volume. What should you do”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 11
    question: Computer accounts and user accounts in your domain have been seperated into OUs for administrative purpose. You want to require strong passwords for the local user accounts only. What should you do?
    options:
      - Set a Group Policy on each local computer to enable the passwords must meet complexity requirements policy
      - Set a Group Policy on the domain to enable the passwords must meet complexity requirements policy
      - Set a Group Policy on all OUs containing computer accounts to enable the passwords must meet complexity requirements policy
      - Set a Group Policy on all OUs containing user accounts to enable the passwords must meet complexity requirements policy
      - None of above
    answer: 0
    explanation: Set a Group Policy on each local computer to enable the passwords must meet complexity requirements policy is the correct answer to “Computer accounts and user accounts in your domain have been seperated into OUs for administrative purpose. You want to require strong passwords for the local user accounts only. What should you do”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 12
    question: You are the network administrator for your company. Mike Nash is a member of the Administration group, and Nate Sun is a member of the Intern group. Both groups are in the same domain. On the intranet server, the Administration group is placed in the Security group, and the Intern group is placed in the Nonsecurity group. The Security group is then granted Full Control permission for the Sales virtual directory. Nate needs to update new sales information that is located on the Sales virtual directory. What should you do so that Nate can perform this task?
    options:
      - Enable Anonymous access for the intranet server
      - Enable Anonymous access for the Sales virtual directory
      - Remove Nate fmm the Intern group
      - Make Nate a member of the Security group
      - None of above
    answer: 3
    explanation: Make Nate a member of the Security group is the correct answer to “You are the network administrator for your company. Mike Nash is a member of the Administration group, and Nate Sun is a member of the Intern group. Both groups are in the same domain. On the intranet server, the Administration group is placed in the Security group, and the Intern group is placed in the Nonsecurity group. The Security group is then granted Full Control permission for the Sales virtual directory. Nate needs to update new sales information that is located on the Sales virtual directory. What should you do so that Nate can perform this task”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 13
    question: You are the administrator of a Windows 2000 Server computer that has one hard disk. This computer runs a custom application that writes a large number of small temporary files in a single directory to support request from client computers. To improve performance of the application, you add three new 100-GB SCSI disks to the server to hold these temporary files. You want to ensure that the application can use all 300 GB of space with a single drive letter. You also want to ensure the fastest possible performance when writing the temporary files. How should you configure the three disks?
    options:
      - Convert all three disks to dynamic disks. Create a striped volume
      - Convert all three disks to dynamic disks. Create a RAID-5 volume
      - Create a single volume on each of the three disks. Format each volume as NTFS. Mount the roots of Disk 2 and Disk 3 in the root folder of Disk 1
      - Create a single volume on Disk 1. Format the volume as NTFS. Extend the volume to create a spanned volume that includes the space on all three disks
      - None of above
    answer: 0
    explanation: Convert all three disks to dynamic disks. Create a striped volume is the correct answer to “You are the administrator of a Windows 2000 Server computer that has one hard disk. This computer runs a custom application that writes a large number of small temporary files in a single directory to support request from client computers. To improve performance of the application, you add three new 100-GB SCSI disks to the server to hold these temporary files. You want to ensure that the application can use all 300 GB of space with a single drive letter. You also want to ensure the fastest possible performance when writing the temporary files. How should you configure the three disks”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: You are the administrator of Windows 2000 Server computer. Your computer has a span volume that consists of areas on three physical hard disks on the server. The three disks support hot swapping. You regularly backup the span volume by using windows backup. One of the disk fail, you replace the disk with a new un-partitioned disk. You want to recover the span volume and disk data as soon as possible. What should you do?
    options:
      - Extend the span volume to include the new disk, rescan the disk
      - Extend the span volume to include the new disk, shut down and restart the server, use windows backup to restore the data
      - Re scan the disk, format the span volume. Use windows back up to restore the data
      - Re scan the disk, extend the span volume to include the new disk. Shut down and restart the server, use windows backup to restore the new data
      - Re scan the disk, remove the span volume and create a new span volume that includes the new disk. Format the span volume, use Windows back up to restore the data
    answer: 4
    explanation: Re scan the disk, remove the span volume and create a new span volume that includes the new disk. Format the span volume, use Windows back up to restore the data is the correct answer to “You are the administrator of Windows 2000 Server computer. Your computer has a span volume that consists of areas on three physical hard disks on the server. The three disks support hot swapping. You regularly backup the span volume by using windows backup. One of the disk fail, you replace the disk with a new un-partitioned disk. You want to recover the span volume and disk data as soon as possible. What should you do”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 15
    question: You have configured a Group Policy Object (GPO) for the marketing oranization unit (OU) to prevent users from accessing My Network Places and from running System in Control Panel. You want the Managers Domain Local Group to be able to access My Network Places, but you still want to prevent them from running System in Control Panel. What should you do?
    options:
      - Add the Managers group to the access control list of the GPO. Disable the permission of the managers group to read and apply the Group Policy
      - Add the Managers group to the access control list of the GPO. Deny the permission of the managers group to read and apply the Group Policy
      - Create a second GPO in the OU. Add the Managers group to the access control list. Allow the managers group to apply the Group Policy. Deny the Authenticated Users group permission to read and apply th
      - Create a second GPO in the OU. Add the Managers group to the access control list. Allow the managers group to apply the Group Policy. Disable the Authenticated Users group permission to read and apply
      - None of above
    answer: 3
    explanation: Create a second GPO in the OU. Add the Managers group to the access control list. Allow the managers group to apply the Group Policy. Disable the Authenticated Users group permission to read and apply is the correct answer to “You have configured a Group Policy Object (GPO) for the marketing oranization unit (OU) to prevent users from accessing My Network Places and from running System in Control Panel. You want the Managers Domain Local Group to be able to access My Network Places, but you still want to prevent them from running System in Control Panel. What should you do”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 16
    question: "You install the Routing and Remote Access service on a Windows 2000 Server computer in your network. Your network is not directly connected to the Internet and uses the private IP address range 192.168.0.0. When you use Routing and Remote Access to dial in to the server, your computer connects successfully, but you are unable to access any resources. When you try to piiig servers by using their IP addresses, you receive the following message: \"Request timed out.\" When you run the ipconfig command, it shows that your dial-up connection has been given the IP address 169.254.75.182. What should you do to resolve the problem?"
    options:
      - Configure the remote access server with the address of a DHCP server
      - Authorize the remote access server to receive multiple addresses from a DHCP server
      - Configure the remote access server to act as a DHCP Relay Agent
      - Ensure that the remote access server is able to connect to a DHCP server that has a scope for its subnet
      - None of above
    answer: 3
    explanation: "Ensure that the remote access server is able to connect to a DHCP server that has a scope for its subnet is the correct answer to “You install the Routing and Remote Access service on a Windows 2000 Server computer in your network. Your network is not directly connected to the Internet and uses the private IP address range 192.168.0.0. When you use Routing and Remote Access to dial in to the server, your computer connects successfully, but you are unable to access any resources. When you try to piiig servers by using their IP addresses, you receive the following message: \"Request timed out.\" When you run the ipconfig command, it shows that your dial-up connection has been given the IP address 169.254.75.182. What should you do to resolve the problem”. This question is standard in competitive examination syllabi for Windows 2000 Server."
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 17
    question: You configure your Windows 2000 Server as a print server. You install a second PnP Network adapter to improve the performance. The first adapter uses IRQ11, and the second adapter uses IRQ5. The server is now unable to print to print devices connected to a non-PnP LPT2 port adapter. You want to continue to use the print devices connected to your print server. What should you do?
    options:
      - Use device manager to change the IRQ for LPT1 to IRQ10
      - Use device manager to change the IRQ for LPT2 to IRQ7
      - Edit the CMOS setting of the servers BIOS to reserve IRQ7 for non-PnP devices
      - Edit the CMOS setting of the servers BIOS to reserve IRQ5 for non-PnP devices
      - None of above
    answer: 3
    explanation: Edit the CMOS setting of the servers BIOS to reserve IRQ5 for non-PnP devices is the correct answer to “You configure your Windows 2000 Server as a print server. You install a second PnP Network adapter to improve the performance. The first adapter uses IRQ11, and the second adapter uses IRQ5. The server is now unable to print to print devices connected to a non-PnP LPT2 port adapter. You want to continue to use the print devices connected to your print server. What should you do”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 18
    question: Your computer has a mirrored volume and you wish to now install the Recovery Console for future troubleshooting. How do you do this?
    options:
      - Reinstall Windows, this can only be applied during the installation
      - Break the mirror, run X:i386winnt32.exe /cmdcons Reestablish the mirror
      - Run X:i386winnt32.exe / cmdcons
      - Run the add and remove programs and add the recovery console
      - None of above
    answer: 1
    explanation: Break the mirror, run X:i386winnt32.exe /cmdcons Reestablish the mirror is the correct answer to “Your computer has a mirrored volume and you wish to now install the Recovery Console for future troubleshooting. How do you do this”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 19
    question: Your Windows 2000 Server computer uses a non-Plug and Play ISA modem configured to use IRQ 5. You add a PCI modem and restart the computer. Device Manager reports an IRQ conflict between the two modems. Both modem are trying to use IRQ 5. You want to resolve the problem. What should you do?
    options:
      - Use Device Manager to change the IRQ for the original modem to IRQ 9
      - Use Device Manager to change the IRQ for the original modem to IRQ 10
      - Edit the CMOS settings on the computer to reserve IRQ 5 for non-Plug and Play devices
      - Edit the CMOS settings on the computer to reserve IRQ 10 for non-Plug and Play devices
      - None Of above
    answer: 2
    explanation: Edit the CMOS settings on the computer to reserve IRQ 5 for non-Plug and Play devices is the correct answer to “Your Windows 2000 Server computer uses a non-Plug and Play ISA modem configured to use IRQ 5. You add a PCI modem and restart the computer. Device Manager reports an IRQ conflict between the two modems. Both modem are trying to use IRQ 5. You want to resolve the problem. What should you do”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 20
    question: Your network contains NetWare 4.0 Servers. You have successfully installed Client Service for NetWare on Windows 2000 Professional computers, and Gateway Service for NetWare on Windows 2000 Server Computers. You recently added a new Windows 2000 Server computer to the network and installed Gateway Service for NetWare on it. However, the server is unable to connect to any NetWare servers. What should you do on the new Windows 2000 Server computer to resolve this problem?
    options:
      - Enable NWLink NetBIOS
      - Configure the NWLink IPX/SPX/ NetBIOS Compatible Transport Protocol to use the correct Ethernet frame type
      - Install RIP routing for IPX
      - Install the SAP Agent
      - None of above.
    answer: 1
    explanation: Configure the NWLink IPX/SPX/ NetBIOS Compatible Transport Protocol to use the correct Ethernet frame type is the correct answer to “Your network contains NetWare 4.0 Servers. You have successfully installed Client Service for NetWare on Windows 2000 Professional computers, and Gateway Service for NetWare on Windows 2000 Server Computers. You recently added a new Windows 2000 Server computer to the network and installed Gateway Service for NetWare on it. However, the server is unable to connect to any NetWare servers. What should you do on the new Windows 2000 Server computer to resolve this problem”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 21
    question: You install Internet Information Services 5.0 on a computer running Windows 2000 Server. You create two new department web sites for the Human Resources and Sales departments. You use host headers to define these two new sites. You stop the Sales web site while a developer updates the contents of the site. If a user attempts to access the Sales site while it is stopped, what response will the user receive?
    options:
      - The user will be redirected to an alternate default page for the Sales site's home directory
      - The user will be redirected to the Default Web site home page
      - The user will receive a 403.2 -Read Access Forbidden error message
      - The user will receive a 404 - File Not Found error message
      - None of above
    answer: 1
    explanation: The user will be redirected to the Default Web site home page is the correct answer to “You install Internet Information Services 5.0 on a computer running Windows 2000 Server. You create two new department web sites for the Human Resources and Sales departments. You use host headers to define these two new sites. You stop the Sales web site while a developer updates the contents of the site. If a user attempts to access the Sales site while it is stopped, what response will the user receive”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 22
    question: You have a machine with two hard disk and you add an extra 100 GB hard disk for a specific Client-Server application to run on, because the application gets very slow returning query data. You want to have the fastest possible access for the Client-Server App to the HDD's. Which Raid should you apply?
    options:
      - RAID0
      - RAID1
      - RAIDS
      - RAID2
      - None of above
    answer: 0
    explanation: RAID0 is the correct answer to “You have a machine with two hard disk and you add an extra 100 GB hard disk for a specific Client-Server application to run on, because the application gets very slow returning query data. You want to have the fastest possible access for the Client-Server App to the HDD's. Which Raid should you apply”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 23
    question: "You are the administrator of a Windows 2000 Server computer. The server has a single hard disk with a single NTFS partition. You use a third-party tool to add a new partition to the disk. When you restart the server, you received the following error message: \"Windows 2000 could not start because the following file is missing or corrupt: \\system32\\ntoskrnl.exe. Please re-install a copy of the above file.\" What should you do to resolve the problem?"
    options:
      - Start the computer by using the Recovery Console. Run System File Checker
      - Start the computer by using the Recovery Console. Modify the Partition parameter in the operating system path in C:Boot.ini
      - Start the emergency repair process. Choose the option to repair system files
      - Start the computer in safe mode with command prompt. Modify the Partition parameter in the operating system path in C:boot.ini
      - None of above
    answer: 1
    explanation: "Start the computer by using the Recovery Console. Modify the Partition parameter in the operating system path in C:Boot.ini is the correct answer to “You are the administrator of a Windows 2000 Server computer. The server has a single hard disk with a single NTFS partition. You use a third-party tool to add a new partition to the disk. When you restart the server, you received the following error message: \"Windows 2000 could not start because the following file is missing or corrupt: \\system32\\ntoskrnl.exe. Please re-install a copy of the above file.\" What should you do to resolve the problem”. This question is standard in competitive examination syllabi for Windows 2000 Server."
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 24
    question: You are a network administrator for your company. The company is currently configuring its branch offices with a Windows 2000 Server computer at each office. Each branch office has a technical-support department but not a network administrator. You want to configure the remote Windows 2000 Server computers so that whenever a new Microsoft driver becomes available, the branch offices are notified automaticaly when the administrator logs onto the server. What should you do?
    options:
      - Install the Windows 2000 Resource Kit
      - Install Windows critical update notification
      - Configure system file checker to notify the branch offices
      - Configure Windows file protection to notify the branch offices
      - None of above
    answer: 1
    explanation: Install Windows critical update notification is the correct answer to “You are a network administrator for your company. The company is currently configuring its branch offices with a Windows 2000 Server computer at each office. Each branch office has a technical-support department but not a network administrator. You want to configure the remote Windows 2000 Server computers so that whenever a new Microsoft driver becomes available, the branch offices are notified automaticaly when the administrator logs onto the server. What should you do”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 25
    question: Some applications on your company network use defined domain user accounts as their service accounts. Each computer that runs one of these applications should have the respective service account in the Local Administrators Group. Currently, you individually place these service accounts in the Local Administrators Group on the appropriate Windows 2000 Professional computers. You need to centralize this process. What should you do?
    options:
      - Add the applications service accounts to the Domain Administrator Group
      - Add the applications service accounts to the Local Administrator Group. Use the Restricted Groups option in each computer's local group policy
      - Add the applications service accounts to the Local Administrator Group. Use the Restricted Groups option in an OU Group Policy
      - Add the applications service accounts to the Local Administrator Group. Use the Restricted Groups option in a Domain Group Policy
      - None of above
    answer: 2
    explanation: Add the applications service accounts to the Local Administrator Group. Use the Restricted Groups option in an OU Group Policy is the correct answer to “Some applications on your company network use defined domain user accounts as their service accounts. Each computer that runs one of these applications should have the respective service account in the Local Administrators Group. Currently, you individually place these service accounts in the Local Administrators Group on the appropriate Windows 2000 Professional computers. You need to centralize this process. What should you do”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 26
    question: How can you recreate the PTR record in your Windows 2000 DNS server from you Windows 2000 client?
    options:
      - Run ipconfig /registerdns from the client
      - Run ipconfig all /registerdns from the DNS server
      - Start the DNS Dynamic service on your client computer
      - "Create a host file with the #DYNAMIC command on the client computer"
      - None of above
    answer: 0
    explanation: Run ipconfig /registerdns from the client is the correct answer to “How can you recreate the PTR record in your Windows 2000 DNS server from you Windows 2000 client”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 27
    question: You want to provide Internet access for the clients on your network. You decide to use Network Address Translation (NAT). You have a Windows 2000 computer you try to establish a secure Virtual Private Networking session with. You try connecting to the Remote Windows 2000 computer using L2TP. You are unable to establish a connection with the remote node using L2TP. You are able to make a connection with another computer in your same office. Why are you unable to make a connection.to the remote location?
    options:
      - NAT does not allow for remote networking
      - L2TP does not work with Windows 2000 computers
      - You can not establish a L2TP connection behind a computer running NAT. The L2TP session fails because the IP Security packets become corrupted
      - You have not configured the NAT server to translate the IP Security packets
      - None of above
    answer: 2
    explanation: You can not establish a L2TP connection behind a computer running NAT. The L2TP session fails because the IP Security packets become corrupted is the correct answer to “You want to provide Internet access for the clients on your network. You decide to use Network Address Translation (NAT). You have a Windows 2000 computer you try to establish a secure Virtual Private Networking session with. You try connecting to the Remote Windows 2000 computer using L2TP. You are unable to establish a connection with the remote node using L2TP. You are able to make a connection with another computer in your same office. Why are you unable to make a connection.to the remote location”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 28
    question: You are configuring a Windows 2000 Server computer as a Routing and Remote Access server for a Branch office. You discover that an incorrect driver was installed during the installation of the modem. You attempt to remove the modem by using Phone and Modem Options in Control Panel. After each attempt to remove the modem by using this method, the computer stops responding. You restart the computer again. You must install the correct driver for the modem as quickly as possible. What should you do?
    options:
      - Use the Add/Remove Hardware wizard to uninstall the modem. Restart the server
      - Shut down the server, remove the modem card, and restart the server. Shut down the server again, insert the modem card, and restart the server
      - Delete all references to modems in the registry
      - Run the Modem troubleshooter and remove the modem when prompted. Restart the server
      - None of above
    answer: 0
    explanation: Use the Add/Remove Hardware wizard to uninstall the modem. Restart the server is the correct answer to “You are configuring a Windows 2000 Server computer as a Routing and Remote Access server for a Branch office. You discover that an incorrect driver was installed during the installation of the modem. You attempt to remove the modem by using Phone and Modem Options in Control Panel. After each attempt to remove the modem by using this method, the computer stops responding. You restart the computer again. You must install the correct driver for the modem as quickly as possible. What should you do”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 29
    question: You want to improve the TCP transmission speed of a Windows 2000 Server computer. You also want to remove an unused registry key. You use Regedit32 to edit the registry of the Windows 2000 Server. You insert a value in the registry named TCPWindowSize, and you remove the unused key. You restart the computer, but the computer stops responding before the logon screen appears. You want to return the computer to its previous configuration. What should you do?
    options:
      - Restart the computer in safe mode. Then restart the computer again
      - "Restart the computer by using the Recovery Console. Run the Fixboot c: command, and then run the Exit command"
      - Restart the computer by using the Recovery Console. Run the enable winlogon service_auto_start command, and then run the Exit command
      - Restart the computer by using the last known good configuration
      - None of above
    answer: 3
    explanation: Restart the computer by using the last known good configuration is the correct answer to “You want to improve the TCP transmission speed of a Windows 2000 Server computer. You also want to remove an unused registry key. You use Regedit32 to edit the registry of the Windows 2000 Server. You insert a value in the registry named TCPWindowSize, and you remove the unused key. You restart the computer, but the computer stops responding before the logon screen appears. You want to return the computer to its previous configuration. What should you do”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 30
    question: Your network consists of Windows 2000 file servers, Windows 2000 print servers, Windows 2000 professional computers, Windows 2000 file servers. You must prevent any unsigned drivers from being installed on any computer in your Windows 2000 network. What should you do?
    options:
      - Configure a Group policy for the Domain that blocks all unsigned drivers
      - Configure a Group policy for the Default Domain Controller to block all unsigned drivers
      - Configure the Windows 2000 file servers, Windows 2000 print servers, Windows 2000 professional computers and Windows 2000 file servers to block unsigned drivers
      - Do nothing, this is the default setting
      - None of above
    answer: 2
    explanation: Configure the Windows 2000 file servers, Windows 2000 print servers, Windows 2000 professional computers and Windows 2000 file servers to block unsigned drivers is the correct answer to “Your network consists of Windows 2000 file servers, Windows 2000 print servers, Windows 2000 professional computers, Windows 2000 file servers. You must prevent any unsigned drivers from being installed on any computer in your Windows 2000 network. What should you do”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 31
    question: Your network is configured as shown in the exhibit. "Engineering! and Salesl have DHCP installed up them." All the servers are Windows 2000 Server computers that use TCP/IP as the only network protocol. The sales department uses one subnet and has servers named Salesl and Sales2. The engineering department uses another subnet and has servers named Engineeringl and Engineering2. Salesl and Engineeringl are configured to act as DHCP servers. The router that joins the two subnets is not RFC 1542 compliant and does not support DHCP/BOOTP relay. You want to allow Salesl and Engineeringl to support client computers on each other's subnets. What should you do?
    options:
      - Set the router option in the DHCP Scopes to 192.168.2.1 for Engineeringl and 192.168.1.1 for Salesl
      - On Engineering2 and Sales2, install Routing and Remote Access, and configure RIP as a routing protocol
      - On Engineering2 and Sales2, install and configure the DHCP Relay Agent service
      - Configure Engineering2 and Sales2 as DHCP servers without any scopes
      - None of above
    answer: 2
    explanation: On Engineering2 and Sales2, install and configure the DHCP Relay Agent service is the correct answer to “Your network is configured as shown in the exhibit. "Engineering! and Salesl have DHCP installed up them." All the servers are Windows 2000 Server computers that use TCP/IP as the only network protocol. The sales department uses one subnet and has servers named Salesl and Sales2. The engineering department uses another subnet and has servers named Engineeringl and Engineering2. Salesl and Engineeringl are configured to act as DHCP servers. The router that joins the two subnets is not RFC 1542 compliant and does not support DHCP/BOOTP relay. You want to allow Salesl and Engineeringl to support client computers on each other's subnets. What should you do”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 32
    question: The network uses TCP/IP as the only network protocol. You configure the remote access server on the network. Some users report that when they connect to the server they receive the following message |" IPX SPX compatible computer deported error 733" The EPP control network protocol for the network is not available. If the users allow the connection to continue they are able to connect to the services that use TCP/IP. You want to prevent this message from being displayed. What should you do?
    options:
      - Configure a client computer to use only TCP/IP for the connections to the remote access server
      - Configure the client computer to use a defined IPX network address for the connection to the remote access servers
      - Configure the remote access server to allow IPX based remote access demand dial connections
      - Configure the remote access server to disable multi-link connection
      - None of above
    answer: 3
    explanation: Configure the remote access server to disable multi-link connection is the correct answer to “The network uses TCP/IP as the only network protocol. You configure the remote access server on the network. Some users report that when they connect to the server they receive the following message |" IPX SPX compatible computer deported error 733" The EPP control network protocol for the network is not available. If the users allow the connection to continue they are able to connect to the services that use TCP/IP. You want to prevent this message from being displayed. What should you do”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 33
    question: You are the administrator of your company's network. You are configuring the security policy for a group of users in the finance organizational unit (OU). You need to configure a group policy so that future changes to group policy will be applied within 15 minutes to any computers that are log on to the network. What should you do?
    options:
      - Enable the background refresh settings to use the default group policy refresh date
      - Enable the asynchronous group policy application settings
      - Enable and configure the group policy refresh interval for domain controller
      - Enable and configure the group policy refresh interval for computers
      - None of above
    answer: 3
    explanation: Enable and configure the group policy refresh interval for computers is the correct answer to “You are the administrator of your company's network. You are configuring the security policy for a group of users in the finance organizational unit (OU). You need to configure a group policy so that future changes to group policy will be applied within 15 minutes to any computers that are log on to the network. What should you do”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 34
    question: Your network contains 10 domain controllers, 10 member servers, and approximately 1,000 client computers. All the servers run Windows 2000 Server, and all the client computers run Windows 2000 Professional. Two of the domain controllers act as DNS servers. Users of client computers use file sharing to grant access to files stored locally. The network has 10 subnets and uses TCP/IP as the only network protocol. You want to configure the network so that all computers can resolve the addresses of all other computers by using DNS. Client computers must be able to register and resolve addresses if a server fails. How should you configure the DNS servers?
    options:
      - Configure one server with a standard primary zone for the domain, and configure at least one server with standard secondary zone
      - Configure one server with a standard primary zone for the domain, and configure at least one server with an Active Directory integrated primary zone
      - Configure one server with an Active directory integrated primary zone for the domain, and configure at least one server with a standard secondary zone
      - Configure at least two servers with Active Directory integrated primary zones for the domain
      - Configure at least two servers with standard primary zones for the domain
    answer: 3
    explanation: Configure at least two servers with Active Directory integrated primary zones for the domain is the correct answer to “Your network contains 10 domain controllers, 10 member servers, and approximately 1,000 client computers. All the servers run Windows 2000 Server, and all the client computers run Windows 2000 Professional. Two of the domain controllers act as DNS servers. Users of client computers use file sharing to grant access to files stored locally. The network has 10 subnets and uses TCP/IP as the only network protocol. You want to configure the network so that all computers can resolve the addresses of all other computers by using DNS. Client computers must be able to register and resolve addresses if a server fails. How should you configure the DNS servers”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 35
    question: You are the network administrator for your company. The company has numerous branch offices, and each office uses Internet Connecting Sharing to connect to the Internet. A new employee named David Johnson is configuring a Windows 2000 Server computer as a file server. When David uses Windows update for the first time and select Product Update, he receives an error message stating that access is denied. David needs to be able to update the file by using his account. What should you do?
    options:
      - Configure the settings for Internet Connecting Sharing to allow POP3 access
      - Configure the settings for Internet Connecting Sharing to allow SMTP access
      - Give David's user account administrator privileges on the Windows 2000 Server computer
      - Instruct David to log on as a domain administrator on the Windows 2000 Server computer
      - None of above
    answer: 2
    explanation: Give David's user account administrator privileges on the Windows 2000 Server computer is the correct answer to “You are the network administrator for your company. The company has numerous branch offices, and each office uses Internet Connecting Sharing to connect to the Internet. A new employee named David Johnson is configuring a Windows 2000 Server computer as a file server. When David uses Windows update for the first time and select Product Update, he receives an error message stating that access is denied. David needs to be able to update the file by using his account. What should you do”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 36
    question: "You install Terminal Services on a Windows 2000 domain controller. You install Terminal Services Client on users' client computers. Users report that when they try to connect to the Terminal server, they receive the following error message: \"The local policy of this system does not allow you to logon interactively.\" When you attempt to log on to the Terminal server as an administrator from a user's computer, you log on successfully. You want users to be able to log on to the Terminal server. What should you do?"
    options:
      - Grant the users the right to log on as a service
      - Grant the users the right to log on locally
      - Grant the users the right to log on over the network
      - Copy the users' prpfiles to the Terminal server
      - Copy the users' home folders to the Terminal server
    answer: 1
    explanation: "Grant the users the right to log on locally is the correct answer to “You install Terminal Services on a Windows 2000 domain controller. You install Terminal Services Client on users' client computers. Users report that when they try to connect to the Terminal server, they receive the following error message: \"The local policy of this system does not allow you to logon interactively.\" When you attempt to log on to the Terminal server as an administrator from a user's computer, you log on successfully. You want users to be able to log on to the Terminal server. What should you do”. This question is standard in competitive examination syllabi for Windows 2000 Server."
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 37
    question: How can you assign an application to one processor exclusively?
    options:
      - Right click on application executable, select properties and select assign processor
      - Right click on application process in Task Manager, select Set Affinity, and select the appropriate processor
      - Open Task Manager, chose options from task bar, select processor and assign processes to appropriate processor
      - Open Task Manager, chose Performance, chose view all processors, assign processes to appropriate processor
      - None of above.
    answer: 1
    explanation: Right click on application process in Task Manager, select Set Affinity, and select the appropriate processor is the correct answer to “How can you assign an application to one processor exclusively”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 38
    question: You install your boot volume on volume C on your Windows 2000 Server computer. You mirror volume C on dynamic Disk 1. Two years later, during routine server maintenance, you open Disk Management and find that the status of volume C is Failed Redundancy. The status of Disk 1 is Missing. You attempt to reactivate Disk 1, but the status of volume C does not return to Healthy. What should you do next?
    options:
      - Replace Disk 1 and restart the computer. The mirror will automatically regenerate
      - Remove the mirror on Disk 1, replace the disk, and then add back the mirror to the new Disk 1
      - Replace Disk 1 and copy all data from volume C to a new NTFS primary partition on the new Disk 1. Restart the computer
      - Rescan the disks, remove the mirror, and delete the data on Disk 1. Then re-create the mirror
      - None of above
    answer: 1
    explanation: Remove the mirror on Disk 1, replace the disk, and then add back the mirror to the new Disk 1 is the correct answer to “You install your boot volume on volume C on your Windows 2000 Server computer. You mirror volume C on dynamic Disk 1. Two years later, during routine server maintenance, you open Disk Management and find that the status of volume C is Failed Redundancy. The status of Disk 1 is Missing. You attempt to reactivate Disk 1, but the status of volume C does not return to Healthy. What should you do next”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 39
    question: You want to install Windows 2000 server on 15 new computers. You want to install, configure and test all 2000 servers before shipping them to your branch offices. You want the users at the branch offices to enter the serial numbers and computer names once they receive the computers. What should you do?
    options:
      - Install Windows 2000 server on the computers. Use Sysprep.exe to create the Unattend.txt file, place file on the root of the drive
      - Install Windows 2000 server on the computers. Use Setup Manager to create a sysprep.inf file for use with sysprep.exe Place the sysprep.inf on the computers and run sysprep -noidgen
      - Create an Unattend.txt file by using Setup Manager. Create a UDF file that identifies the names of the new computers
      - Create a UDF file by using setup manager. Create an Unattend.txt file that identifies the names of the new computers
      - None of above
    answer: 1
    explanation: Install Windows 2000 server on the computers. Use Setup Manager to create a sysprep.inf file for use with sysprep.exe Place the sysprep.inf on the computers and run sysprep -noidgen is the correct answer to “You want to install Windows 2000 server on 15 new computers. You want to install, configure and test all 2000 servers before shipping them to your branch offices. You want the users at the branch offices to enter the serial numbers and computer names once they receive the computers. What should you do”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 40
    question: You are the administrator of a Windows 2000 server computer. The server has a single hard disk with two partitions. An application that runs on your server creates a very large log file in the SystemrootYTemp folder. There is not enough free space on the system partition to accommodate the log file. The application does not provide a way to change the path to the log file. You want to run the application on your server. What should you do?
    options:
      - On the second partition, create a shared folder named Temp
      - In the systemroot folder, create a shortcut named Temp that points to the second partition on the disk
      - Add a second hard disk. Create and format a partition from the free space on the second hard disk. Create a Temp folder on the new partition. Mount the system partition as the Temp folder on the new p
      - Add a second hard disk. Delete the contents of the SystemrootYTemp folder. Create and format a partition from the free space on the second hard disk. Mount the partition as the SystemrootYTemp folder
      - None of above
    answer: 3
    explanation: Add a second hard disk. Delete the contents of the SystemrootYTemp folder. Create and format a partition from the free space on the second hard disk. Mount the partition as the SystemrootYTemp folder is the correct answer to “You are the administrator of a Windows 2000 server computer. The server has a single hard disk with two partitions. An application that runs on your server creates a very large log file in the SystemrootYTemp folder. There is not enough free space on the system partition to accommodate the log file. The application does not provide a way to change the path to the log file. You want to run the application on your server. What should you do”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
---


