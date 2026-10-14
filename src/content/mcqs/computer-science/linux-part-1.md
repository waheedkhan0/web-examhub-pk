---
title: Linux — Part 1 MCQs with Explanations
description: Practice high-yield Computer Science & IT MCQs on Linux — Part 1 with worked academic solutions for PPSC, FPSC, CSS, PMS, NTS.
subject: computer-science
subjectName: Computer Science & IT
topic: linux-part-1
topicName: Linux — Part 1
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
    question: What command is used to count the total number of lines, words, and characters contained in a file?
    options:
      - countw
      - wcount
      - wc
      - count p
      - None of the above
    answer: 2
    explanation: The wc command is used to count the total number of lines, words, and characters contained in a file. Using this command, you can quickly get statistics about a file's content, which is useful for various purposes, such as analyzing text files or checking the size of files. It stands for "word count," but it can also count lines and characters depending on the options provided. So, in summary, to count lines, words, and characters in a file, you'd use the wc command in Linux.
    keyConcept: Linux
    testedIn:
      - PPSC
      - FPSC
  - id: 2
    question: What command is used to remove files?
    options:
      - dm
      - rm
      - delete
      - erase
      - None of the above
    answer: 1
    explanation: The rm command is used to remove files in Linux. It stands for "remove". When you want to delete a file from your system, you use the rm command followed by the filename. It's a powerful command and should be used with caution as it permanently deletes files without moving them to a trash or recycle bin. So, in summary, to remove files in Linux, you'd use the rm command.
    keyConcept: Linux
    testedIn:
      - PPSC
      - FPSC
  - id: 3
    question: What command is used to remove the directory?
    options:
      - rdir
      - remove
      - rd
      - rmdir
      - None of the above
    answer: 3
    explanation: The rmdir command is used to remove directories in Linux. When you want to delete an empty directory from your system, you use the rmdir command followed by the directory name. It stands for "remove directory". It's important to note that this command only works for empty directories. If the directory contains any files or other directories, you need to use the rm command with appropriate options to remove them. So, in summary, to remove directories in Linux, you'd use the rmdir command.
    keyConcept: Linux
    testedIn:
      - PPSC
      - FPSC
  - id: 4
    question: What command is used with vi editor to delete a single character?
    options:
      - x
      - "y"
      - a
      - z
      - None of the above
    answer: 0
    explanation: In the vi editor, the x command is used to delete a single character. When you are in command mode in the vi editor, pressing x will delete the character under the cursor. This command is useful for making small edits or corrections within a file. So, in summary, to delete a single character in vi editor, you'd use the x command.
    keyConcept: Linux
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: What hardware architectures are not supported by Red Hat?
    options:
      - SPARC
      - IBM-compatible
      - Alpha
      - Macintosh
      - None of the above
    answer: 2
    explanation: Red Hat does not support the Alpha hardware architecture. While Red Hat supports various hardware architectures like SPARC, IBM-compatible (x86 and x86_64), and some Macintosh systems, it does not provide support for the Alpha architecture. It's important to verify hardware compatibility when choosing an operating system, as not all architectures may be supported. So, in summary, among the options provided, the architecture not supported by Red Hat is Alpha .
    keyConcept: Linux
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: The physical layer of a network
    options:
      - constructs packets of data and sends them across the network
      - controls error detection and correction
      - defines the electrical characteristics of signals passed between the computer and communication devices
      - All of the above
      - None of the above
    answer: 2
    explanation: The physical layer of a network is responsible for defining the electrical, mechanical, procedural, and functional specifications for activating, maintaining, and deactivating the physical link between communicating network systems. It deals with the transmission and reception of unstructured raw data over a physical medium. This layer defines details such as voltage levels, timing of voltage changes, physical data rates, maximum transmission distances, and other similar attributes that are required to transfer the raw bit stream over a physical medium between devices. In summary, the physical layer primarily focuses on the physical aspects of transmitting data, such as electrical signals and mechanical connections.
    keyConcept: Linux
    testedIn:
      - PPSC
      - FPSC
  - id: 7
    question: What TCP/IP protocol is used for remote terminal connection service?
    options:
      - UDP
      - RARP
      - FTP
      - TELNET
      - None of the above
    answer: 3
    explanation: TELNET is the TCP/IP protocol used for remote terminal connection service. It allows users to log in remotely to another computer over a network and access its resources as if they were directly connected to that computer. TELNET operates on the application layer of the TCP/IP model and provides a virtual terminal connection, enabling users to execute commands on a remote system. It's important to note that TELNET transmits data, including passwords, in plain text, which makes it less secure compared to other remote access protocols like SSH (Secure Shell). So, in summary, for remote terminal connection service, the TCP/IP protocol used is TELNET .
    keyConcept: Linux
    testedIn:
      - PPSC
      - FPSC
  - id: 8
    question: How many networks and nodes per network, are allowed by the Class B network?
    options:
      - 127 networks and 16,777,216 nodes per network
      - 16,384 networks and 65,534 nodes per network
      - 2,097,152 networks and 254 nodes per network
      - All of the above
      - None of the above
    answer: 1
    explanation: In Class B networks, the IP address space is divided into a large number of smaller networks, each with a moderate number of hosts. A Class B network uses a 16-bit network prefix, allowing for 65,534 possible host addresses per network. The total number of possible Class B networks is calculated as 214214, which equals 16,384 networks. So, in summary, for a Class B network, there are 16,384 networks and 65,534 nodes per network .
    keyConcept: Linux
    testedIn:
      - PPSC
      - FPSC
  - id: 9
    question: What service is used to translate domain names to IP addresses?
    options:
      - NFS
      - SMB
      - NIS
      - DNS
      - None of the above
    answer: 3
    explanation: DNS stands for Domain Name System, and it is the service used to translate domain names to IP addresses. DNS acts as a distributed database that maps human-readable domain names (like example.com) to IP addresses (like 192.0.2.1) that computers use to communicate with each other over a network. When you type a domain name into your web browser, your computer queries DNS servers to obtain the corresponding IP address, allowing it to connect to the appropriate web server. So, in summary, to translate domain names to IP addresses, you'd use the DNS service.
    keyConcept: Linux
    testedIn:
      - PPSC
      - FPSC
  - id: 10
    question: Which of the following command is used to create a Linux installation hoot floppy?
    options:
      - mkboot disk
      - bootfp disk
      - ww and rawwrite
      - dd and rawrite
      - None of the above
    answer: 3
    explanation: To create a Linux installation boot floppy, you would typically use the dd command on Unix-like systems or rawrite command on Windows systems. The dd command is a versatile utility used for copying and converting files. In this case, it can be used to copy the installation image to the floppy disk. On Windows systems, rawrite is a command-line tool used to write raw disk images to removable media such as floppy disks. So, in summary, to create a Linux installation boot floppy, you would use dd on Unix-like systems and rawrite on Windows systems.
    keyConcept: Linux
    testedIn:
      - PPSC
      - FPSC
  - id: 11
    question: How can you add Amit, a new user, to your system?
    options:
      - Using useradd
      - Using adduser
      - Using linuxconf
      - All of the above
      - None of the above
    answer: 3
    explanation: "You can add a new user named Amit to your Linux system using multiple methods. Using useradd: This is a command-line utility for adding new users to the system. You would typically use it like this: useradd Amit . This command adds the user Amit to the system. Using adduser: This is another command-line utility that provides a more interactive way to add users. You would typically use it like this: adduser Amit . This command guides you through the process of adding a new user. Using linuxconf: This is a graphical configuration tool that can be used to manage various aspects of a Linux system, including user management. It provides a GUI interface for tasks like adding users. However, note that linuxconf is not as commonly used as the other methods mentioned above. So, in summary, you can add Amit, a new user, to your Linux system using useradd , adduser , or linuxconf . Therefore, the correct answer is All of the above ."
    keyConcept: Linux
    testedIn:
      - PPSC
      - FPSC
  - id: 12
    question: What file specifies the order in which to use specified name services?
    options:
      - /etc/services
      - /etc/nsorder
      - /etc/nsswitch.conf
      - /etc/hosts
      - None of the above
    answer: 2
    explanation: The /etc/nsswitch.conf file specifies the order in which to use specified name services in Linux. This file controls how the system resolves various services, such as hostnames, user names, and group names, by defining the sources to query in a specific order. For example, it determines whether to look in files like /etc/hosts or to query DNS servers for hostname resolution. By configuring this file, administrators can control the order in which different name resolution methods are attempted, providing flexibility and customization. So, in summary, the file that specifies the order of name services is /etc/nsswitch.conf .
    keyConcept: Linux
    testedIn:
      - PPSC
      - FPSC
  - id: 13
    question: How many primary partitions can exist on one drive?
    options:
      - "16"
      - "4"
      - "2"
      - "1"
      - None of the above
    answer: 1
    explanation: On a traditional Master Boot Record (MBR) partitioning scheme, which is commonly used for BIOS-based systems, you can have a maximum of 4 primary partitions on one drive. These primary partitions are used to define the basic structure of the disk and can be formatted with a file system to store data. If you need more partitions, you can create extended partitions, which are special primary partitions that can hold multiple logical partitions within them. However, with newer GUID Partition Table (GPT) partitioning schemes used on UEFI-based systems, you can have many more partitions, theoretically up to 128 partitions per disk. So, in summary, on a traditional MBR partitioning scheme, you can have a maximum of 4 primary partitions on one drive.
    keyConcept: Linux
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: In which directory can you store system user default files used for creating user directories?
    options:
      - /usr/tmp
      - /etc/default
      - /etc/skel
      - /etc/users
      - None of the above
    answer: 2
    explanation: In Linux, the directory /etc/skel is used to store system user default files that are used as templates when creating new user directories. When a new user is created, their home directory is typically populated with files and directories from /etc/skel . These files often include configuration files, such as .bashrc or .profile, that provide default settings for the user's environment. By placing default files in /etc/skel , administrators can ensure that new user accounts are set up with consistent configurations and environments. So, in summary, the directory where system user default files are stored for creating user directories is /etc/skel .
    keyConcept: Linux
    testedIn:
      - PPSC
      - FPSC
  - id: 15
    question: How could you install the file ipchains-1.3.9-5.i386.rpm?
    options:
      - rpm -qip ipchains
      - rpm -Uvh ipchains
      - rpm -i ipchains* .i386.rpm
      - rpm -e ipchains-1.3.9-5.i386.rpm
      - None of the above
    answer: 2
    explanation: To install the file ipchains-1.3.9-5.i386.rpm, you would use the rpm -i command followed by the name of the RPM file. The -i option stands for "install", and it tells the RPM package manager to install the specified package. So, the correct command would be rpm -i ipchains-1.3.9-5.i386.rpm . Additionally, the asterisk () after "ipchains" in the option implies wildcard matching, which can help if there are multiple versions of the package or if there are additional characters appended to the filename. So, in summary, to install the ipchains package, you would use rpm -i ipchains .i386.rpm .
    keyConcept: Linux
    testedIn:
      - PPSC
      - FPSC
  - id: 16
    question: What does FSF stand for?
    options:
      - Free Software File
      - File Server First
      - First Serve First
      - Free Software Foundation
      - None of the above
    answer: 3
    explanation: FSF stands for Free Software Foundation. The Free Software Foundation (FSF) is a nonprofit organization founded by Richard Stallman in 1985. It promotes the development and use of free (as in freedom) software and campaigns against proprietary software and software patents. The FSF is best known for its work on the GNU Project, which aims to create a free Unix-like operating system compatible with the Unix operating system. So, in summary, FSF stands for Free Software Foundation .
    keyConcept: Linux
    testedIn:
      - PPSC
      - FPSC
  - id: 17
    question: Which of the following is a valid format for mounting a CD-ROM drive?
    options:
      - mount -t iso9660 /dev/cdrom / mnt/cdrom
      - mount /dev/cdrom
      - mount /mnt/cdrom
      - All of the above
      - None of the above
    answer: 3
    explanation: "The correct answer is Option A: mount -t iso9660 /dev/cdrom /mnt/cdrom . This command is a valid format for mounting a CD-ROM drive in Linux. Here's what each part of the command does: mount : Command used to mount filesystems. -t iso9660 : Specifies the filesystem type, in this case, ISO 9660, which is the standard filesystem format for CD-ROMs. /dev/cdrom : Specifies the device file for the CD-ROM drive. /mnt/cdrom : Specifies the mount point, which is the directory where the CD-ROM contents will be accessible after mounting. So, in summary, the command mount -t iso9660 /dev/cdrom /mnt/cdrom is used to mount a CD-ROM drive in Linux."
    keyConcept: Linux
    testedIn:
      - PPSC
      - FPSC
  - id: 18
    question: What command do you use to create Linux file systems?
    options:
      - fdisk
      - mkfs
      - fsck
      - mount
      - None of the above
    answer: 1
    explanation: mkfs is the correct answer to “What command do you use to create Linux file systems”. This question is standard in competitive examination syllabi for Linux.
    keyConcept: Linux
    testedIn:
      - PPSC
      - FPSC
  - id: 19
    question: Which of the following command can you execute to count the number of lines in a file?
    options:
      - lc
      - wc - l
      - cl
      - count
      - None of the above
    answer: 1
    explanation: wc - l is the correct answer to “Which of the following command can you execute to count the number of lines in a file”. This question is standard in competitive examination syllabi for Linux.
    keyConcept: Linux
    testedIn:
      - PPSC
      - FPSC
  - id: 20
    question: Which of the following is not a communication command?
    options:
      - grep
      - mail
      - mesg
      - write
      - None of the above
    answer: 0
    explanation: grep is the correct answer to “Which of the following is not a communication command”. This question is standard in competitive examination syllabi for Linux.
    keyConcept: Linux
    testedIn:
      - PPSC
      - FPSC
  - id: 21
    question: What command is used to display the characteristics of a process?
    options:
      - au
      - ps
      - du
      - pid
      - None of the above
    answer: 1
    explanation: ps is the correct answer to “What command is used to display the characteristics of a process”. This question is standard in competitive examination syllabi for Linux.
    keyConcept: Linux
    testedIn:
      - PPSC
      - FPSC
  - id: 22
    question: What command is not used to list the files chap01, chap02 and chap04?
    options:
      - ls chap*
      - ls chap[124]
      - ls - x chap0[124]
      - ls chap0[124]
      - None of the above
    answer: 1
    explanation: ls chap[124] is the correct answer to “What command is not used to list the files chap01, chap02 and chap04”. This question is standard in competitive examination syllabi for Linux.
    keyConcept: Linux
    testedIn:
      - PPSC
      - FPSC
  - id: 23
    question: What command is used with vi editor to replace text from cursor to right
    options:
      - S
      - R
      - None of the above
    answer: 2
    explanation: None of the above is the correct answer to “What command is used with vi editor to replace text from cursor to right”. This question is standard in competitive examination syllabi for Linux.
    keyConcept: Linux
    testedIn:
      - PPSC
      - FPSC
  - id: 24
    question: What sign is used to back up over typing errors in vi?
    options:
      - "!"
      - $
      - "#"
      - "@"
      - None of the above
    answer: 2
    explanation: "# is the correct answer to “What sign is used to back up over typing errors in vi”. This question is standard in competitive examination syllabi for Linux."
    keyConcept: Linux
    testedIn:
      - PPSC
      - FPSC
  - id: 25
    question: What sign is used to erase or kill an entire line you have typed and start you are on a new line (but not display a new prompt)?
    options:
      - "!"
      - $
      - "#"
      - "@"
      - None of the above
    answer: 3
    explanation: "@ is the correct answer to “What sign is used to erase or kill an entire line you have typed and start you are on a new line (but not display a new prompt)”. This question is standard in competitive examination syllabi for Linux."
    keyConcept: Linux
    testedIn:
      - PPSC
      - FPSC
  - id: 26
    question: What command is used to sort the lines of data in a file in alphabetical order?
    options:
      - sort - r
      - st
      - sh
      - sort
      - None of the above
    answer: 3
    explanation: sort is the correct answer to “What command is used to sort the lines of data in a file in alphabetical order”. This question is standard in competitive examination syllabi for Linux.
    keyConcept: Linux
    testedIn:
      - PPSC
      - FPSC
  - id: 27
    question: What command is used with vi editor to save file and remain in the editing mode?
    options:
      - x
      - q!
      - ":w"
      - ":q"
      - None of the above
    answer: 2
    explanation: ":w is the correct answer to “What command is used with vi editor to save file and remain in the editing mode”. This question is standard in competitive examination syllabi for Linux."
    keyConcept: Linux
    testedIn:
      - PPSC
      - FPSC
  - id: 28
    question: What command is used with vi editor to move back to the beginning of a word?
    options:
      - w
      - e
      - a
      - b
      - None of the above
    answer: 3
    explanation: b is the correct answer to “What command is used with vi editor to move back to the beginning of a word”. This question is standard in competitive examination syllabi for Linux.
    keyConcept: Linux
    testedIn:
      - PPSC
      - FPSC
  - id: 29
    question: What command is used with vi editor to search a pattern in the forward direction?
    options:
      - "??"
      - //
      - "?"
      - /
      - None of the above
    answer: 3
    explanation: / is the correct answer to “What command is used with vi editor to search a pattern in the forward direction”. This question is standard in competitive examination syllabi for Linux.
    keyConcept: Linux
    testedIn:
      - PPSC
      - FPSC
  - id: 30
    question: What command is used to add printing jobs to the queue?
    options:
      - lpd
      - lpr
      - lpq
      - lpc
      - None of the above
    answer: 1
    explanation: lpr is the correct answer to “What command is used to add printing jobs to the queue”. This question is standard in competitive examination syllabi for Linux.
    keyConcept: Linux
    testedIn:
      - PPSC
      - FPSC
  - id: 31
    question: What protocol(s) is(are) allowed a user to retrieve her/his mail from the mail server to her/his mail reader?
    options:
      - POP3
      - FTP
      - MAP
      - All of the above
      - None of the above
    answer: 0
    explanation: POP3 is the correct answer to “What protocol(s) is(are) allowed a user to retrieve her/his mail from the mail server to her/his mail reader”. This question is standard in competitive examination syllabi for Linux.
    keyConcept: Linux
    testedIn:
      - PPSC
      - FPSC
  - id: 32
    question: What project is currently developing X server support?
    options:
      - XFree86 Project, Inc.
      - RHAD Labs
      - GNOME Project
      - All of the above
      - None of the above
    answer: 0
    explanation: XFree86 Project, Inc. is the correct answer to “What project is currently developing X server support”. This question is standard in competitive examination syllabi for Linux.
    keyConcept: Linux
    testedIn:
      - PPSC
      - FPSC
  - id: 33
    question: What X-based tool is available for configuring the X Window system?
    options:
      - XConfigurator
      - XF86Setup
      - xf86config
      - All of the above
      - None of the above
    answer: 1
    explanation: XF86Setup is the correct answer to “What X-based tool is available for configuring the X Window system”. This question is standard in competitive examination syllabi for Linux.
    keyConcept: Linux
    testedIn:
      - PPSC
      - FPSC
  - id: 34
    question: Which of the following server is used with the BIND package?
    options:
      - httpd
      - shttp
      - dns
      - named
      - None of the above
    answer: 3
    explanation: named is the correct answer to “Which of the following server is used with the BIND package”. This question is standard in competitive examination syllabi for Linux.
    keyConcept: Linux
    testedIn:
      - PPSC
      - FPSC
  - id: 35
    question: What port does squid listen, by default?
    options:
      - "4322"
      - "2314"
      - "7334"
      - "3128"
      - None of the above
    answer: 3
    explanation: 3128 is the correct answer to “What port does squid listen, by default”. This question is standard in competitive examination syllabi for Linux.
    keyConcept: Linux
    testedIn:
      - PPSC
      - FPSC
  - id: 36
    question: Which of the following is the main Apache configuration file?
    options:
      - /etc/apache.conf
      - /etc/httpd/config.ini
      - /etc/httpd/conf/httpd.conf
      - /etc/srm.conf
      - None of the above
    answer: 2
    explanation: /etc/httpd/conf/httpd.conf is the correct answer to “Which of the following is the main Apache configuration file”. This question is standard in competitive examination syllabi for Linux.
    keyConcept: Linux
    testedIn:
      - PPSC
      - FPSC
  - id: 37
    question: Which of the following command is used to access an SMB share on a Linux system?
    options:
      - NFS
      - SMD
      - smbclient
      - smbserver
      - None of the above
    answer: 2
    explanation: smbclient is the correct answer to “Which of the following command is used to access an SMB share on a Linux system”. This question is standard in competitive examination syllabi for Linux.
    keyConcept: Linux
    testedIn:
      - PPSC
      - FPSC
  - id: 38
    question: Which of the following command is used to see the services running in NFS server?
    options:
      - rpcinfo
      - serverinfo
      - NFSinfo
      - infserv
      - None of the above
    answer: 0
    explanation: rpcinfo is the correct answer to “Which of the following command is used to see the services running in NFS server”. This question is standard in competitive examination syllabi for Linux.
    keyConcept: Linux
    testedIn:
      - PPSC
      - FPSC
  - id: 39
    question: In which tcp_wrappers file can you specify to allow all connections from all hosts?
    options:
      - /etc/hosts.allow
      - /etc/hosts.deny
      - /etc/hosts
      - /etc/tcp.conf
      - None of the above
    answer: 0
    explanation: /etc/hosts.allow is the correct answer to “In which tcp_wrappers file can you specify to allow all connections from all hosts”. This question is standard in competitive examination syllabi for Linux.
    keyConcept: Linux
    testedIn:
      - PPSC
      - FPSC
  - id: 40
    question: What does GNU stand for?
    options:
      - GNU's not Unix
      - Greek Needed Unix
      - General Unix
      - General Noble Unix
      - None of the above
    answer: 0
    explanation: GNU's not Unix is the correct answer to “What does GNU stand for”. This question is standard in competitive examination syllabi for Linux.
    keyConcept: Linux
    testedIn:
      - PPSC
      - FPSC
---


