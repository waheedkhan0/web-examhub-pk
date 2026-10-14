---
title: Windows 2000 Server — Part 2 MCQs with Explanations
description: Practice high-yield Computer Science & IT MCQs on Windows 2000 Server — Part 2 with worked academic solutions for PPSC, FPSC, CSS, PMS, NTS.
subject: computer-science
subjectName: Computer Science & IT
topic: windows-2000-server-part-2
topicName: Windows 2000 Server — Part 2
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
    question: You are the administrator of a network that consists of a single Windows NT 4.0 domain. The network contains five Windows NT Server domain controllers and 1,000 Windows NT Workstation client computers. You want to install Windows 2000 Server on a new computer. You want the new computer to act as a domain controller in the existing domain. What should you do?
    options:
      - On the new computer, install Windows NT Server 4.0 and designate the computer as a BDC in the existing domain. Promote the computer to the PDC of the domain. Upgrade the computer to Windows 2000 Serve
      - On the new computer, install Windows NT Server 4.0 and designate the computer as a PDC in a new domain that has the same NetBIOS name as the existing Windows NT domain. Upgrade the computer to Windows
      - Shut down the PDC of the existing Windows NT domain from the network. On the new computer, install Windows 2000 Server, and then run the Active Directory Installation wizard to install Active Director
      - None of the above
    answer: 0
    explanation: On the new computer, install Windows NT Server 4.0 and designate the computer as a BDC in the existing domain. Promote the computer to the PDC of the domain. Upgrade the computer to Windows 2000 Serve is the correct answer to “You are the administrator of a network that consists of a single Windows NT 4.0 domain. The network contains five Windows NT Server domain controllers and 1,000 Windows NT Workstation client computers. You want to install Windows 2000 Server on a new computer. You want the new computer to act as a domain controller in the existing domain. What should you do”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 2
    question: You are installing Windows 2000 Server on a multiprocessor computer. The manufacturer has provided a customized HAL to use with the computer. The HAL is on the floppy disk. You want to install the customized HAL design for the computer. What should you do?
    options:
      - During the text mode portion of the Windows 2000 setup install the customized HAL
      - After text mode portion of Windows 2000 setup is complete use the recovery console to copy the customized HAL to the system32 folder on the boot partition
      - After the text mode portion your windows 2000 setup is complete use the emergency repair process to replace the existing HAL with the customized HAL and then continue the windows 2000 setup
      - After the Windows 2000 setup is complete use the device manager to scan for Hardware changes when prompted install the customized HAL
      - None of above
    answer: 0
    explanation: During the text mode portion of the Windows 2000 setup install the customized HAL is the correct answer to “You are installing Windows 2000 Server on a multiprocessor computer. The manufacturer has provided a customized HAL to use with the computer. The HAL is on the floppy disk. You want to install the customized HAL design for the computer. What should you do”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 3
    question: A Windows 2000 Server computer named server2 runs numerous 32bit applications and two 16bit applications. Users start the 16bit applications by running APP1.EXE for one application and APP2.EXE for another application. The 16bit applications are configured to run in the separate memory space. You want to create a performance base like chart in the system monitor for all the applications on server2. You add all of 32bit applications and now you want to add two 16bit applications. What should you do?
    options:
      - Add the APP1 and APP2 instances to the processor time counter for the process object
      - Add the NTVDM, APP1 and APP2 instances for the processor time counter for the process object
      - Add only the NTVDM instance for the percent processor time counter for the process object
      - "Add the NTVDM 1 and NTVDM #2 instances for processor time counter for the process object"
      - None of above
    answer: 3
    explanation: "Add the NTVDM 1 and NTVDM #2 instances for processor time counter for the process object is the correct answer to “A Windows 2000 Server computer named server2 runs numerous 32bit applications and two 16bit applications. Users start the 16bit applications by running APP1.EXE for one application and APP2.EXE for another application. The 16bit applications are configured to run in the separate memory space. You want to create a performance base like chart in the system monitor for all the applications on server2. You add all of 32bit applications and now you want to add two 16bit applications. What should you do”. This question is standard in competitive examination syllabi for Windows 2000 Server."
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 4
    question: Your Windows 2000 Server computer includes an integrated 10-MB Ethernet adapter. You are replacing the integrated adapter with a new 100-MB Ethernet adapter. You install the new adapter in an available PCI slot. When you restart the computer, you receive error messages in the System log stating that the new adapter Is missing or is not working. What should you do to resolve the problem?
    options:
      - Create a new hardware profile
      - Use Device Manager to remove the integrated 10-MB Ethernet adapter
      - Use Device Manager to disable the integrated 10-MB Ethernet adapter
      - Delete the device driver for the integrated 10-MB Ethernet adapter from the Systemrootsystem32Driver Cache folder
      - None of above
    answer: 2
    explanation: Use Device Manager to disable the integrated 10-MB Ethernet adapter is the correct answer to “Your Windows 2000 Server computer includes an integrated 10-MB Ethernet adapter. You are replacing the integrated adapter with a new 100-MB Ethernet adapter. You install the new adapter in an available PCI slot. When you restart the computer, you receive error messages in the System log stating that the new adapter Is missing or is not working. What should you do to resolve the problem”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: Your Windows 2000 server Computer contains data files that users of client computers access throughout the day. You install a driver for the new tape drive on the computer. After restarting the computer you log on as an administrator, shortly after you log on you receive the following stop error "irql_not_less_6r_equal". You need to bring the server back on line as quickly and reliably as possible. What should you do?
    options:
      - Restart the computer by using the last known good menu option
      - Perform an emergency repair and select fast repair, restart the computer
      - Restart the computer in the safe mode, remove the driver and restart the computer
      - Restart the computer by using the recovery console, disable the driver. Restart the computer, remove the driver
      - None of above
    answer: 3
    explanation: Restart the computer by using the recovery console, disable the driver. Restart the computer, remove the driver is the correct answer to “Your Windows 2000 server Computer contains data files that users of client computers access throughout the day. You install a driver for the new tape drive on the computer. After restarting the computer you log on as an administrator, shortly after you log on you receive the following stop error "irql_not_less_6r_equal". You need to bring the server back on line as quickly and reliably as possible. What should you do”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: Your Windows 2000 Server computer contains a stripe set with parity on a four-disk array. You convert the stripe set with parity to a dynamic RAID-5 volume. Six months later, users report that disk access on the server is slower than it had been on the previous day, You use Disk Management and discover that the status of the third disk in the array is Missing. You want to recover the failed RAID-5 volume. What should you do first?
    options:
      - Replace the third disk and restart the server. Use disk Management to repair the volume
      - Ensure that the third disk is attached to the server and has power. Use Disk Management to reactivate the disk
      - Ensure that the third disk is attached to the server and has power. Use Disk Management to repair the volume
      - Install a new disk and create a single extended partition on the new disk. Restart the computer and allow Windows 2000 to automatically repair the volume on the extended partition
      - None of above
    answer: 1
    explanation: Ensure that the third disk is attached to the server and has power. Use Disk Management to reactivate the disk is the correct answer to “Your Windows 2000 Server computer contains a stripe set with parity on a four-disk array. You convert the stripe set with parity to a dynamic RAID-5 volume. Six months later, users report that disk access on the server is slower than it had been on the previous day, You use Disk Management and discover that the status of the third disk in the array is Missing. You want to recover the failed RAID-5 volume. What should you do first”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 7
    question: You are the administrator of the Windows 2000 Server network shown in the exhibit. Users in the Research group and the Executive group have permission to access the Internet through a Windows 2000 Server computer running Microsoft Proxy Server. These users must enter their proxy server user names and passwords to connect to the proxy server, to the Internet, and to your local intranet server. The users who do not access the Internet do not have user accounts on the proxy server and, therefore, cannot connect to the intranet server. You want all users to be able to connect to the intranet server without entering a separate user name and password. What should you do?
    options:
      - Move the intranet server to the client segment of the network
      - Move the proxy server to the server segment of the network
      - Configure each client computer to bypass the proxy server for local addresses
      - Configure each client computer to use port 81 for the proxy server
      - None of above
    answer: 2
    explanation: Configure each client computer to bypass the proxy server for local addresses is the correct answer to “You are the administrator of the Windows 2000 Server network shown in the exhibit. Users in the Research group and the Executive group have permission to access the Internet through a Windows 2000 Server computer running Microsoft Proxy Server. These users must enter their proxy server user names and passwords to connect to the proxy server, to the Internet, and to your local intranet server. The users who do not access the Internet do not have user accounts on the proxy server and, therefore, cannot connect to the intranet server. You want all users to be able to connect to the intranet server without entering a separate user name and password. What should you do”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 8
    question: You are the administrator of a network that consists of Windows 2000 Server computers and Windows 2000 Professional computers. You want to configure the deployment of the most recent Windows 2000 service pack so that users of the Windows 2000 Professional computers receive the service pack automatically when they log on to the domain. What should you do?
    options:
      - Create a Microsoft Windows installer package for the service pack. Configure RIS to use the package
      - Create a Microsoft Windows Installer package for the service pack. Configure the package in a Group Policy
      - Create a Microsoft -Windows Installer package for the service pack. Configure the package in the Local Computer Policy
      - Place the service pack in a Distributed file system (Dfs)
      - None of above
    answer: 1
    explanation: Create a Microsoft Windows Installer package for the service pack. Configure the package in a Group Policy is the correct answer to “You are the administrator of a network that consists of Windows 2000 Server computers and Windows 2000 Professional computers. You want to configure the deployment of the most recent Windows 2000 service pack so that users of the Windows 2000 Professional computers receive the service pack automatically when they log on to the domain. What should you do”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 9
    question: You enable the Routing and Remote Access Service (RRAS) on a computer running Windows 2000 Server. You configure the computer as a RAS server. You want to provide mutual authentication between the RAS server and RAS clients. You also want to ensure that data passing between the RAS server and RAS clients is encrypted. Which authentication method should you use for your incoming connections to support mutual authentication and data encryption?
    options:
      - CHAP
      - MS-CHAP v2
      - PAP
      - SPAP
      - None of above
    answer: 1
    explanation: MS-CHAP v2 is the correct answer to “You enable the Routing and Remote Access Service (RRAS) on a computer running Windows 2000 Server. You configure the computer as a RAS server. You want to provide mutual authentication between the RAS server and RAS clients. You also want to ensure that data passing between the RAS server and RAS clients is encrypted. Which authentication method should you use for your incoming connections to support mutual authentication and data encryption”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 10
    question: You are the administrator of a Windows 2000 Server computer named Intra. Intra is a member of an Active Directory domain and hosts an Intranet Web-Ske for your company. Company policy requires that only authenticated users have access to the intranet site. All company users have a user account in the Active Directory domain. You configure directory security for the Web Site to use integrated security. However, you discover that users can access the Web Site without authentication. You need to ensure that only authenticated users can access the web site. What should you do?
    options:
      - Install Active Directory on the server
      - Select Basic Authentication check box
      - Clear the Allow Anonymous Connection check box
      - Disable the IUSE_inta user account on Intra
      - Clear the Allow IIS to Control Password check box
    answer: 2
    explanation: Clear the Allow Anonymous Connection check box is the correct answer to “You are the administrator of a Windows 2000 Server computer named Intra. Intra is a member of an Active Directory domain and hosts an Intranet Web-Ske for your company. Company policy requires that only authenticated users have access to the intranet site. All company users have a user account in the Active Directory domain. You configure directory security for the Web Site to use integrated security. However, you discover that users can access the Web Site without authentication. You need to ensure that only authenticated users can access the web site. What should you do”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 11
    question: "You are the administrator of a Windows 2000 Server computer. You configure the server to audit all access to files that are places in shared folders. One week after you configured the server, users report that the server has stopped responding. You investigate the problem and discover a stop error with the error message: Stop C0000244 (Audit Failed) An attempt to generate a security audit failed. You restart the computer. You need to ensure that you can keep a record of all files access on the server. You also need to ensure that the stop error will not occur again."
    options:
      - Set the CrashonAuditFail registry key to 0
      - Set the Security Log to overwrite events as needed
      - Delete the Liscense Trial registry key
      - Increase the size of the security log
      - Save the security log to a file, and clear it every morning
    answer: 0
    explanation: "Set the CrashonAuditFail registry key to 0 is the correct answer to “You are the administrator of a Windows 2000 Server computer. You configure the server to audit all access to files that are places in shared folders. One week after you configured the server, users report that the server has stopped responding. You investigate the problem and discover a stop error with the error message: Stop C0000244 (Audit Failed) An attempt to generate a security audit failed. You restart the computer. You need to ensure that you can keep a record of all files access on the server. You also need to ensure that the stop error will not occur again.”. This question is standard in competitive examination syllabi for Windows 2000 Server."
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 12
    question: You have just configured two Windows NT Servers, Monitor 1 and Monitor 2 with no other software installed. You have an application server that needs to be monitored for performance to figure out what it's problem is, or to get some kind of baseline. You install Network Monitor on Monitor 2. What would you do to monitor Application server?
    options:
      - Install Network Monitor on Monitor 1
      - Install Network Monitor on Application Server
      - Configure the network monitor ECP port something for TCP
      - Configure the network monitor EDP port something for UDP
      - Configure Monitor 2 and Application server as monitoring partners (or something) to monitor the performance
    answer: 2
    explanation: Configure the network monitor ECP port something for TCP is the correct answer to “You have just configured two Windows NT Servers, Monitor 1 and Monitor 2 with no other software installed. You have an application server that needs to be monitored for performance to figure out what it's problem is, or to get some kind of baseline. You install Network Monitor on Monitor 2. What would you do to monitor Application server”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 13
    question: You install and run a third-party 32-bit application named Application on your Windows 2000 Server computer. After several days, the application stops responding. You open Task Manager and find that the CPU usage is at 100 percent. The normal range of CPU usage on the server is from 20 percent to 30 percent You end the application. However, you see that the CPU on the server is still at 100 percent. Task Manager shows no other applications running. You then examine the Processes page in Task Manager and confirm that the Application.exe process is no longer running. You want to return the CPU usage to its normal range. What should you do?
    options:
      - Use Computer Management to stop and restart the Server service
      - Use Computer Management to stop and restart the Workstation service
      - Use Task Manager to end any related child processes
      - Use Task Manager to end and automatically restart the Explorer.exe process
      - None of above
    answer: 2
    explanation: Use Task Manager to end any related child processes is the correct answer to “You install and run a third-party 32-bit application named Application on your Windows 2000 Server computer. After several days, the application stops responding. You open Task Manager and find that the CPU usage is at 100 percent. The normal range of CPU usage on the server is from 20 percent to 30 percent You end the application. However, you see that the CPU on the server is still at 100 percent. Task Manager shows no other applications running. You then examine the Processes page in Task Manager and confirm that the Application.exe process is no longer running. You want to return the CPU usage to its normal range. What should you do”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: You are the administrator of Windows 2000 domain and TWO Windows NT domains. The Windows 2000 domains trust each of the Windows NT domains. Each of Windows NT domains trust the Windows 2000 domain. A Windows 2000 domain controller named DC1 is configured to use a highly secure domain controller template. Users in the Windows NT domain report that they cannot access DC1. You need to allow the users of computers in the Windows NT domain to access resources on DC1. What should you do?
    options:
      - Apply a less restrictive custom security template to DC1
      - Apply a less restrictive custom policy to Windows NT domain controller
      - Ensure the Windows 2000 domain is configured in the mixed mode
      - Ensure the Windows 2000 domain is configured to run in the native mode
      - None of above
    answer: 0
    explanation: Apply a less restrictive custom security template to DC1 is the correct answer to “You are the administrator of Windows 2000 domain and TWO Windows NT domains. The Windows 2000 domains trust each of the Windows NT domains. Each of Windows NT domains trust the Windows 2000 domain. A Windows 2000 domain controller named DC1 is configured to use a highly secure domain controller template. Users in the Windows NT domain report that they cannot access DC1. You need to allow the users of computers in the Windows NT domain to access resources on DC1. What should you do”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 15
    question: You install a Windows 2000 Server computer on your network. You place several shared folders on a 12-GB primary partition formatted by FAT32. During nine months of continuous operation, the number of users who access the server and their access frequency remains constant. The average size of the files on the server remains approximately constant. After the server runs continuous for nine months, users report that the server does not retrieve files from the shared folders as fast as when you first installed the server. What should you do to resolve the problem?
    options:
      - Convert the disk that contains the shared folders to a dynamic disk
      - Convert the partition that contains the shared folders to NTFS
      - Defragment the disk that contains the shared folders
      - Move the paging file to the partition that contains the shared folders
      - None of above
    answer: 2
    explanation: Defragment the disk that contains the shared folders is the correct answer to “You install a Windows 2000 Server computer on your network. You place several shared folders on a 12-GB primary partition formatted by FAT32. During nine months of continuous operation, the number of users who access the server and their access frequency remains constant. The average size of the files on the server remains approximately constant. After the server runs continuous for nine months, users report that the server does not retrieve files from the shared folders as fast as when you first installed the server. What should you do to resolve the problem”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 16
    question: You install a new multiple-process database application named Application on your Windows 2000 Server computer. Two days later, users begin to report that the new application has suddenly stopped responding to queries. You verify that the server is operation and decide that you need to restart the application. What should you do before you restart the application?
    options:
      - End the task named Application
      - End the Application.exe process
      - End the Application.exe process tree
      - End both the Explorer.exe process and the Application.exe process
      - None of above
    answer: 2
    explanation: End the Application.exe process tree is the correct answer to “You install a new multiple-process database application named Application on your Windows 2000 Server computer. Two days later, users begin to report that the new application has suddenly stopped responding to queries. You verify that the server is operation and decide that you need to restart the application. What should you do before you restart the application”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 17
    question: You are the administrator of Windows 2000 Server network. On each server you format a separate system partition and a separate boot partition as NTFS. Several months later you shut down one of the computers for maintenance. When you try to restart the computer you receive the following error message "NTLDR is missing, press any key to restart". You want to install a new NTLDR file on the computer but you do not want to loose any settings you made since the installation. What should you do?
    options:
      - Start the computer by using Windows 2000 Server computer CD-ROM and choose tools to repair the installation. Select recovery console and copy the NTLDR file on the CD-ROM to the root of the system vol
      - Start the computer by using the Windows 2000 server CD- ROM, choose to reinstall. When the installation is complete copy the NTLDR to the root of the boot volume
      - Start the computer by using the Windows 2000 bootable floppy disk. From a command prompt run the sfc/scanboot command
      - Start the computer by using Windows 2000 bootable floppy disk. Run the file signature verification utility
      - None of above
    answer: 0
    explanation: Start the computer by using Windows 2000 Server computer CD-ROM and choose tools to repair the installation. Select recovery console and copy the NTLDR file on the CD-ROM to the root of the system vol is the correct answer to “You are the administrator of Windows 2000 Server network. On each server you format a separate system partition and a separate boot partition as NTFS. Several months later you shut down one of the computers for maintenance. When you try to restart the computer you receive the following error message "NTLDR is missing, press any key to restart". You want to install a new NTLDR file on the computer but you do not want to loose any settings you made since the installation. What should you do”. This question is standard in competitive examination syllabi for Windows 2000 Server.
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
  - id: 18
    question: "Five Lakes Publishing has a Windows 2000 network serving 200 users. A server named User_srv is used to hold users' files. User_srv is configured with a single, large NTFS volume. Every user has a home folder on User_srv. Users can also use a shared folder named IN_PROGRESS to store files for books that are being prepared. The network administrator at Five Lakes Publishing configured disk quotas for the NTFS volume on User_srv. All users have a default limit of 100 MB, and the option to deny space to users who exceed their limit has been enabled. When a user named Amy Jones attempts to save a chapter of a new book to her home folder on the server, she receives the following error message: \"The disk is full or too many files are open.\" What should Amy do to allow this document to be saved?"
    options:
      - Compress the files in her home folder to save disk space
      - Change the security setting of some of the files in her home folder to grant Full Control permission to a user who has not reached the quota level
      - Move some of the files from her home folder to the IN_PROGRESS shared folder
      - Remove files from her home folder until the total uncompressed file size is less than 100 MB
      - None of above
    answer: 3
    explanation: "Remove files from her home folder until the total uncompressed file size is less than 100 MB is the correct answer to “Five Lakes Publishing has a Windows 2000 network serving 200 users. A server named User_srv is used to hold users' files. User_srv is configured with a single, large NTFS volume. Every user has a home folder on User_srv. Users can also use a shared folder named IN_PROGRESS to store files for books that are being prepared. The network administrator at Five Lakes Publishing configured disk quotas for the NTFS volume on User_srv. All users have a default limit of 100 MB, and the option to deny space to users who exceed their limit has been enabled. When a user named Amy Jones attempts to save a chapter of a new book to her home folder on the server, she receives the following error message: \"The disk is full or too many files are open.\" What should Amy do to allow this document to be saved”. This question is standard in competitive examination syllabi for Windows 2000 Server."
    keyConcept: Windows 2000 Server
    testedIn:
      - PPSC
      - FPSC
---


