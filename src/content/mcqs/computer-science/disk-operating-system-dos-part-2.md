---
title: Disk Operating System _Dos — Part 2 MCQs with Explanations
description: Practice high-yield Computer Science & IT MCQs on Disk Operating System _Dos — Part 2 with worked academic solutions for PPSC, FPSC, CSS, PMS, NTS.
subject: computer-science
subjectName: Computer Science & IT
topic: disk-operating-system-dos-part-2
topicName: Disk Operating System _Dos — Part 2
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
    question: Which command be used to ask you to confirm that you want to delete the directory?
    options:
      - Deltree
      - Deltree/f
      - Del *.*/p
      - Erase *.*
    answer: 2
    explanation: "In Disk Operating System (DOS), the command used to ask for confirmation before deleting files is Option C: Del ./p . The \"/p\" switch prompts the user to confirm each deletion before proceeding, ensuring that files are not deleted accidentally. Option A, \"Deltree,\" deletes directories and their contents recursively but does not prompt for confirmation in standard DOS commands. Option B, \"Deltree /f,\" is not a valid switch for prompting confirmation in DOS commands. Option D, \"Erase .,\" is used to delete all files without prompting for confirmation. Therefore, the correct answer is Option C: Del ./p."
    keyConcept: Disk Operating System _Dos
    testedIn:
      - PPSC
      - FPSC
  - id: 2
    question: Which statement is correct?
    options:
      - Directories can be kept inside a file
      - Files can not be kept inside a directory
      - 1 millisec = 10 ^ 3 sec
      - None of above
    answer: 2
    explanation: "The correct statement among the options provided is Option C: 1 millisec = 10 ^ -3 sec . This statement correctly defines the relationship between milliseconds and seconds, indicating that one millisecond is equal to one-thousandth of a second. Option A, \"Directories can be kept inside a file,\" is incorrect. Directories (folders) contain files and other directories but cannot themselves be stored inside a single file in typical file systems. Option B, \"Files cannot be kept inside a directory,\" is also incorrect. Files are typically stored within directories (folders) in file systems. Therefore, the correct answer is Option C: 1 millisec = 10 ^ -3 sec."
    keyConcept: Disk Operating System _Dos
    testedIn:
      - PPSC
      - FPSC
  - id: 3
    question: CHKDSK can be used to find
    options:
      - Disk’s bad portion
      - Occupied space
      - Free space
      - All of above
    answer: 0
    explanation: "In Disk Operating System (DOS), the CHKDSK command is used to find and repair disk errors, including locating bad sectors on the disk. Therefore, the correct option is Option A: Disk’s bad portion . CHKDSK analyzes the file system for errors, checks the disk surface for physical errors (bad sectors), and ensures the integrity of file and directory structures. Option B, \"Occupied space,\" and Option C, \"Free space,\" are not functionalities of CHKDSK. CHKDSK primarily focuses on disk integrity and error-checking rather than space allocation. Therefore, the correct answer is Option A: Disk’s bad portion."
    keyConcept: Disk Operating System _Dos
    testedIn:
      - PPSC
      - FPSC
  - id: 4
    question: DIR command is used to
    options:
      - Display a list of files in a directory
      - Display contents of files in directory
      - Display type of files in a sub directory
      - All of above
    answer: 0
    explanation: "In Disk Operating System (DOS), the DIR command is used to display a list of files in a directory . When you enter \"dir\" at the command prompt in DOS, it lists all the files and directories present in the current directory. Option B, \"Display contents of files in directory,\" is not correct. The DIR command does not display the contents of files; it only lists their names, sizes, and other details. Option C, \"Display type of files in a sub directory,\" is also not correct. The DIR command lists files and directories but does not categorize them by type within a subdirectory. Therefore, the correct answer is Option A: Display a list of files in a directory."
    keyConcept: Disk Operating System _Dos
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: "The deleted file in MS-DOS can be recovered if you use the command mention below immediately, the command is:"
    options:
      - DO NOT DELETE
      - NO DELETE
      - UNDELETE
      - ONDELETE
    answer: 2
    explanation: "In MS-DOS, if you want to recover a recently deleted file, you can use the command Option C: UNDELETE . This command allows you to recover files that have been recently deleted from the disk, provided they have not been overwritten by other data. Option A, \"DO NOT DELETE,\" and Option B, \"NO DELETE,\" are not valid commands in MS-DOS. Option D, \"ONDELETE,\" is not a command in MS-DOS for recovering deleted files. Therefore, the correct answer is Option C: UNDELETE."
    keyConcept: Disk Operating System _Dos
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: "To copy the file command.com from drive c: to drive a:"
    options:
      - "Drive c: copy drive a:\\command.com"
      - "C:A: copy command.com"
      - "Copy c:\\command.com a:"
      - Both b and c
    answer: 2
    explanation: "In Disk Operating System (DOS), to copy the file command.com from drive C: to drive A:, the correct command syntax is essential. Option A: Drive c: copy drive a:\\command.com. This option is incorrect because it does not follow the correct syntax for the copy command in DOS. Option B: C:A: copy command.com. This option is incorrect because it does not specify the source and destination paths correctly. Option C: Copy c:\\command.com a:. This option is correct as it specifies the source file c:\\command.com and the destination drive a: using the copy command in DOS. Option D: Both b and c. This option is incorrect because Option B is incorrect. Option C alone provides the correct syntax. Therefore, the correct answer is Option C: Copy c:\\command.com a: . This command will copy the file command.com from drive C: to drive A: in DOS."
    keyConcept: Disk Operating System _Dos
    testedIn:
      - PPSC
      - FPSC
  - id: 7
    question: "While working with MS-DOS which key is used to get the p[revious command used:"
    options:
      - F3
      - F1
      - F6
      - F9
    answer: 0
    explanation: "In MS-DOS, the key used to get the previous command used is Option A: F3 . Pressing F3 on the keyboard while working in the MS-DOS prompt retrieves the last command entered, allowing you to quickly repeat it without typing it again. Option B, \"F1,\" typically displays help information in MS-DOS applications. Option C, \"F6,\" and Option D, \"F9,\" do not have specific functionalities related to retrieving previous commands in MS-DOS. Therefore, the correct answer is Option A: F3."
    keyConcept: Disk Operating System _Dos
    testedIn:
      - PPSC
      - FPSC
  - id: 8
    question: FAT stands for
    options:
      - File Accomodation Table
      - File Access Tape
      - File Allocation Table
      - File Activity Table
    answer: 2
    explanation: "In Disk Operating System (DOS), FAT stands for Option C: File Allocation Table . The File Allocation Table is a crucial part of the file system used by DOS and other operating systems to manage and allocate space on storage devices such as hard drives and floppy disks. Option A, \"File Accommodation Table,\" and Option B, \"File Access Tape,\" are not correct terms related to FAT in DOS. Option D, \"File Activity Table,\" is also not a correct term related to FAT. Therefore, the correct answer is Option C: File Allocation Table."
    keyConcept: Disk Operating System _Dos
    testedIn:
      - PPSC
      - FPSC
  - id: 9
    question: xcopy command can copy
    options:
      - Individual files or group of files
      - Directories including subdirectories
      - To diskette of a different capacity
      - All of above
    answer: 3
    explanation: "In Disk Operating System (DOS), the xcopy command is used to copy directories including subdirectories . It can copy entire directory trees from one location to another, preserving the directory structure and all files within those directories. Option A, \"Individual files or group of files,\" is correct as xcopy can also copy individual files or groups of files. Option C, \"To diskette of a different capacity,\" is also correct as xcopy can copy files to different types of disks, including diskettes of varying capacities. Therefore, the correct answer is Option D: All of above."
    keyConcept: Disk Operating System _Dos
    testedIn:
      - PPSC
      - FPSC
  - id: 10
    question: Which command is used to make a new directory?
    options:
      - Md
      - Cd
      - Rd
      - None of above
    answer: 0
    explanation: "In Disk Operating System (DOS), the command used to make a new directory (folder) is Option A: Md . When you type \"md dirname\" at the command prompt in DOS, it creates a new directory with the name \"dirname\" in the current location. Option B, \"Cd,\" is used to change the current directory, not to create a new one. Option C, \"Rd,\" is used to remove (delete) a directory, not to create one. Therefore, the correct answer is Option A: Md."
    keyConcept: Disk Operating System _Dos
    testedIn:
      - PPSC
      - FPSC
  - id: 11
    question: Full form of MS-DOS is
    options:
      - Micro System Disk Operating System
      - Micro Simple Disk Operating System
      - Micro Soft Disk Operating System
      - Micro Sort Disk Operating System
    answer: 2
    explanation: "In Disk Operating System (DOS), the full form of MS-DOS is Option C: Micro Soft Disk Operating System . MS-DOS was developed by Microsoft Corporation as a command-line operating system for IBM-compatible personal computers. Option A, \"Micro System Disk Operating System,\" and Option B, \"Micro Simple Disk Operating System,\" are incorrect and not the correct full forms of MS-DOS. Option D, \"Micro Sort Disk Operating System,\" is also incorrect. Therefore, the correct answer is Option C: Micro Soft Disk Operating System."
    keyConcept: Disk Operating System _Dos
    testedIn:
      - PPSC
      - FPSC
  - id: 12
    question: Format command is used to
    options:
      - Prepare a blank disk
      - Create a new blank disk from a used one
      - Both of above
      - None of above
    answer: 0
    explanation: "In Disk Operating System (DOS), the Format command is used to Option A: Prepare a blank disk . When you format a disk, it prepares the disk to store data by creating a file system and directory structure on it, effectively erasing any existing data. Option B, \"Create a new blank disk from a used one,\" is not accurate. Formatting a disk does not create a new physical disk; it prepares the existing disk for data storage. Option C, \"Both of above,\" is incorrect because formatting prepares a blank disk; it does not create a new disk from a used one. Therefore, the correct answer is Option A: Prepare a blank disk."
    keyConcept: Disk Operating System _Dos
    testedIn:
      - PPSC
      - FPSC
  - id: 13
    question: The following command set is correct according to their function
    options:
      - RD can MD
      - DEL and ERASE
      - CD and RD
      - COPY and RENAME
    answer: 2
    explanation: "In Disk Operating System (DOS), the command set that is correct according to their function is Option C: CD and RD . CD (Change Directory) is used to change the current directory in DOS. RD (Remove Directory) is used to delete or remove a directory in DOS. Option A, \"RD can MD,\" is not a correct command set. MD (Make Directory) and RD (Remove Directory) are commands for creating and deleting directories respectively, but \"RD can MD\" is not a valid syntax. Option B, \"DEL and ERASE,\" are commands used for deleting files, not for creating or managing directories. Option D, \"COPY and RENAME,\" are commands used for copying files and renaming files, not for managing directories. Therefore, the correct answer is Option C: CD and RD."
    keyConcept: Disk Operating System _Dos
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: Which command is used to change the file name?
    options:
      - Ren
      - Rename
      - Both of above
      - None of above
    answer: 2
    explanation: "In Disk Operating System (DOS), the command used to change the file name is Option A: Ren . The Ren command is short for Rename, and it allows you to rename a file or set of files in DOS. Option B, \"Rename,\" is essentially the same as Ren in DOS, so Option C, \"Both of above,\" is correct as well."
    keyConcept: Disk Operating System _Dos
    testedIn:
      - PPSC
      - FPSC
  - id: 15
    question: While working with MS-DOS, which command is used to copying the files to transfer from one PC to another one?
    options:
      - Rename
      - Path
      - Dir
      - Copy
    answer: 3
    explanation: "In Disk Operating System (DOS), the command used to copy files to transfer them from one PC to another is Option D: Copy . The Copy command allows you to copy files from one location to another, whether within the same system or to another system. Option A, \"Rename,\" is used for renaming files and is not relevant to copying files. Option B, \"Path,\" is used to set or display the search path for executable files and is not used for copying files. Option C, \"Dir,\" is used to display a list of files and directories but does not copy files. Therefore, the correct answer is Option D: Copy."
    keyConcept: Disk Operating System _Dos
    testedIn:
      - PPSC
      - FPSC
  - id: 16
    question: RESTORE command is used to
    options:
      - Restore files from disks made using the BACKUP command
      - Restore files which are deleted
      - Restore files from recycle bin
      - Restore files which are deleted recently
    answer: 0
    explanation: "The RESTORE command in DOS is used to restore files from disks that were backed up using the BACKUP command. Option A: Restore files from disks made using the BACKUP command - This is the correct answer as the RESTORE command complements the BACKUP command by allowing the user to recover files from backup disks. Option B: Restore files which are deleted - Incorrect. RESTORE does not recover deleted files directly. Option C: Restore files from recycle bin - Incorrect. DOS does not have a recycle bin like modern operating systems. Option D: Restore files which are deleted recently - Incorrect. RESTORE is specifically for recovering files from backup disks, not for recently deleted files."
    keyConcept: Disk Operating System _Dos
    testedIn:
      - PPSC
      - FPSC
  - id: 17
    question: The vol command is used to
    options:
      - See the value of list
      - See the variety of language
      - See the disk volume label
      - See the volume of largest
    answer: 2
    explanation: "The VOL command in DOS is used to display the disk volume label and serial number, if they exist. Option A: See the value of list - Incorrect. VOL does not display a list of values. Option B: See the variety of language - Incorrect. VOL does not show language information. Option C: See the disk volume label - This is the correct answer as the VOL command is specifically used to show the disk volume label and serial number. Option D: See the volume of largest - Incorrect. VOL does not display the volume of the largest item."
    keyConcept: Disk Operating System _Dos
    testedIn:
      - PPSC
      - FPSC
  - id: 18
    question: In MS-DOS you can use small or capital letter of combination of both to enter a command but internally MS-DOS work with.
    options:
      - Small letter
      - Capital letter
      - Both a and b
      - None of above
    answer: 1
    explanation: "In MS-DOS, commands can be entered using either small or capital letters, or a combination of both. However, internally, MS-DOS processes commands in capital letters. Option A: Small letter - Incorrect. MS-DOS does not process commands in small letters internally. Option B: Capital letter - This is the correct answer as MS-DOS converts all commands to capital letters for internal processing. Option C: Both a and b - Incorrect. MS-DOS does not use both small and capital letters internally; it uses only capital letters. Option D: None of above - Incorrect. The correct option is B, as MS-DOS uses capital letters internally."
    keyConcept: Disk Operating System _Dos
    testedIn:
      - PPSC
      - FPSC
  - id: 19
    question: The maximum length in DOS commands is
    options:
      - 80 chars
      - 127 chars
      - 100 chars
      - 8 chars
    answer: 0
    explanation: "The maximum length in DOS commands is: 80 chars: This is the correct answer. In traditional DOS (Disk Operating System), the maximum length of a command line, including all arguments and spaces, is 80 characters. 127 chars: This is incorrect. In DOS, commands are limited to 80 characters. 100 chars: This is incorrect. In DOS, commands are limited to 80 characters. 8 chars: This is incorrect. The 8-character limit applies to filenames in the 8.3 filename convention, not the length of commands. Note: On computers running Microsoft Windows XP or later, the maximum length of the string that you can use at the command prompt is 8191 characters. However, this question specifically pertains to traditional DOS commands, where the limit is 80 characters."
    keyConcept: Disk Operating System _Dos
    testedIn:
      - PPSC
      - FPSC
  - id: 20
    question: The time command is used to display _____ time.
    options:
      - US time
      - Greenwich Mean Time
      - Julian Time
      - System Time
    answer: 3
    explanation: "The time command in DOS is used to display and set the system time . US time is not a specific type of time that the command displays. Greenwich Mean Time (GMT) is a time standard, but the time command does not specifically display GMT unless the system time is set to GMT. Julian Time is a continuous count of days since the beginning of the Julian Period, and the time command does not use this format. Therefore, the correct answer is Option D: System Time."
    keyConcept: Disk Operating System _Dos
    testedIn:
      - PPSC
      - FPSC
  - id: 21
    question: Which statement is valid about "TIME" command?
    options:
      - Time command is used to display and allow changes to the system time
      - Time format can be changed by changing in country setting in config.sys file
      - MS DOS displays the time in 12-hour or 24-hour format
      - All of above
    answer: 3
    explanation: "Time command is used to display and allow changes to the system time : The TIME command in DOS is used to display the current system time and allows the user to change it if needed. Time format can be changed by changing in country setting in config.sys file : The time format can indeed be changed by modifying the country setting in the CONFIG.SYS file, which affects how DOS displays the date and time. MS DOS displays the time in 12-hour or 24-hour format : MS-DOS can display the time in either 12-hour or 24-hour format, depending on the user's preference and system settings. Therefore, the correct answer is Option D: All of above."
    keyConcept: Disk Operating System _Dos
    testedIn:
      - PPSC
      - FPSC
  - id: 22
    question: Which command is used to see the sub-directory structure of drive?
    options:
      - Tree
      - List
      - Subdir
      - Subtree
    answer: 0
    explanation: "The Tree command is used to display the directory structure of a drive or path in a graphical representation. List is not a command used in DOS to display sub-directory structures. Subdir is not a recognized command in DOS for displaying sub-directory structures. Subtree is also not a valid DOS command for displaying directory structures. Therefore, the correct answer is Option A: Tree."
    keyConcept: Disk Operating System _Dos
    testedIn:
      - PPSC
      - FPSC
  - id: 23
    question: Which command is used to display the subdirectory structure of the currently logged drive and pause the screen display after each screen full of the information?
    options:
      - Tree
      - Deltree/f
      - Dir | more
      - Tree | more
    answer: 3
    explanation: "Tree | more is the correct command to display the subdirectory structure of the currently logged drive and pause the screen display after each screen full of information. Tree command displays the directory structure in a tree-like format. | more is a pipe operator in DOS that sends the output of one command (in this case, Tree) to another command (more), which pauses after each screenful of output. Deltree /f is used to delete directories and files forcefully, not to display directory structures. Dir | more displays the list of files and directories in the current directory and pauses after each screenful of output. It does not display the entire subdirectory structure like Tree does. Therefore, the correct answer is Option D: Tree | more."
    keyConcept: Disk Operating System _Dos
    testedIn:
      - PPSC
      - FPSC
  - id: 24
    question: Which command is used to provide access to files located in other directories or disks?
    options:
      - Tree
      - Path
      - Dir
      - Cd
    answer: 1
    explanation: "The Path command in DOS is used to provide access to files located in other directories or disks by specifying a search path. It allows DOS to locate executables and other files without needing to specify the full path every time. The PATH environment variable in DOS lists directories where executable files are located. Tree displays the directory structure in a tree-like format, but it does not provide access to files located in other directories or disks. Dir lists the contents of the current directory, but it does not provide access to files in other directories or disks. Cd (Change Directory) is used to change the current directory within the same disk, not to provide access to files on other directories or disks. Therefore, the correct answer is Option B: Path."
    keyConcept: Disk Operating System _Dos
    testedIn:
      - PPSC
      - FPSC
  - id: 25
    question: You can copy command.com to your disk from hard disk
    options:
      - "true"
      - "false"
    answer: 0
    explanation: "True : You can copy COMMAND.COM from the hard disk to another disk. COMMAND.COM is the command interpreter for MS-DOS and is responsible for executing DOS commands. It is a critical system file located in the root directory of the boot disk. You can copy COMMAND.COM to another disk or location if needed, such as for backup or system repair purposes. False : This statement is incorrect. You can indeed copy COMMAND.COM to another disk from the hard disk. Therefore, the correct answer is Option A: true."
    keyConcept: Disk Operating System _Dos
    testedIn:
      - PPSC
      - FPSC
  - id: 26
    question: Which command is used to see the contents of a file?
    options:
      - Type
      - Copy
      - Ed
      - None of above
    answer: 0
    explanation: "The Type command in DOS is used to display the contents of a file on the screen. It is used to view text files or files that can be interpreted as text, such as batch files, configuration files, or program source files. The syntax is TYPE filename where filename is the name of the file whose contents you want to display. It outputs the entire contents of the file directly to the command prompt or console. Copy is used to copy files from one location to another, not to view file contents. Ed (Editor) is a text editor in DOS for creating or editing text files, not for viewing existing file contents directly. None of above is incorrect because the Type command is specifically used for viewing file contents. Therefore, the correct answer is Option A: Type."
    keyConcept: Disk Operating System _Dos
    testedIn:
      - PPSC
      - FPSC
  - id: 27
    question: Which command is used to see the disk volume label?
    options:
      - Ver
      - Vol
      - Version
      - Volume
    answer: 1
    explanation: "The Vol command in DOS is used to display the disk volume label. It shows the name or label assigned to a disk volume, which is typically set when the disk is formatted or labeled. The syntax is simply vol and when executed, it displays the volume label of the current drive. Ver is used to display the version of DOS that is currently running, not the disk volume label. Version is not a valid DOS command for displaying the disk volume label. Volume is not a valid DOS command for displaying the disk volume label. Therefore, the correct answer is Option B: Vol."
    keyConcept: Disk Operating System _Dos
    testedIn:
      - PPSC
      - FPSC
  - id: 28
    question: Which command is used to see the version?
    options:
      - Version
      - Ver
      - Verson
      - None of above
    answer: 1
    explanation: "The Ver command in DOS is used to display the version number of the operating system that is currently running. It typically displays the version information of MS-DOS or PC DOS installed on the computer. The syntax is simply ver and when executed, it shows the version number of DOS. Version is not a valid DOS command for displaying the version information of the operating system. Verson is a misspelling and not a valid command in DOS. None of above is incorrect because the Ver command is specifically used to display the version of DOS. Therefore, the correct answer is Option B: Ver."
    keyConcept: Disk Operating System _Dos
    testedIn:
      - PPSC
      - FPSC
  - id: 29
    question: What is the name of the batch file that is automatically run when MSDOS is booted?
    options:
      - Run.bat
      - Config.sys
      - Config.bat
      - Autoexec.bat
    answer: 3
    explanation: "The Autoexec.bat file is the name of the batch file that is automatically run when MS-DOS is booted. It stands for \"automatic execution\" and contains commands that DOS executes each time it starts up. This file is used to set environment variables, run programs, and customize the DOS environment according to user preferences. It is located in the root directory of the boot drive (typically C:) and is crucial for configuring the DOS environment. Run.bat is not a standard batch file automatically run during MS-DOS boot-up; it would need to be explicitly invoked. Config.sys is a system configuration file in DOS, but it is not automatically executed like Autoexec.bat. Config.bat is not a standard DOS file and typically not used as a boot-up batch file. Therefore, the correct answer is Option D: Autoexec.bat."
    keyConcept: Disk Operating System _Dos
    testedIn:
      - PPSC
      - FPSC
  - id: 30
    question: What is the switch that is used to make sure that the copy command copied files correctly
    options:
      - /a
      - /c
      - /s
      - /v
    answer: 3
    explanation: "The /v switch is used with the copy command in DOS to verify that files are copied correctly. When you use copy /v , DOS verifies each file after copying to ensure that it matches the original file. This switch is useful for ensuring data integrity during file copying operations. If any discrepancies are found during verification, DOS displays an error message. /a switch is used with the copy command to copy files with the archive attribute set, but it does not verify the copy. /c switch is not used with the copy command in DOS for verifying file copies. /s switch is used with the copy command to copy directories and subdirectories, not for verifying file copies. Therefore, the correct answer is Option D: /v."
    keyConcept: Disk Operating System _Dos
    testedIn:
      - PPSC
      - FPSC
  - id: 31
    question: What will be the output of the command prompt $l$p$g?
    options:
      - <c:\>
      - C:\>
      - C:\>>
      - C:<\>
    answer: 1
    explanation: "The command prompt string $l$p$g typically represents: $l stands for the current drive letter, which is usually C. $p stands for the path separator, which is typically \\. $g stands for the command prompt symbol, which is usually >. When you combine these components: $l$p$g translates to C:\\>. Now, let's review the options provided: Option A: - This format < > is not standard for representing the command prompt. Option B: C:\\> - This matches the expected output format of C:>, which is correct. Option C: C:\\>> - This includes an extra > which is not standard in DOS for the command prompt. Option D: C:<\\> - This format < > is not standard for representing the command prompt. Therefore, upon reviewing again, Option B: C:\\> is indeed the correct answer, representing the expected output of the command prompt string $l$p$g in a DOS environment."
    keyConcept: Disk Operating System _Dos
    testedIn:
      - PPSC
      - FPSC
  - id: 32
    question: Which among the following are the best tools for fixing errors on disks?
    options:
      - Fdisk
      - Scandisk
      - Chkdsk
      - Fixdsk
    answer: 2
    explanation: "Chkdsk (Check Disk) is the best tool among the options listed for fixing errors on disks in DOS. Chkdsk is used to check the integrity of the file system and file system metadata on a disk. It scans the disk for errors such as bad sectors, lost clusters, cross-linked files, and directory errors. Chkdsk can fix certain types of errors it finds during its scan, helping to maintain the disk's health and data integrity. Fdisk is a tool used for partitioning hard drives and creating partitions, not for fixing errors on disks. Scandisk (ScanDisk) is an older tool similar to Chkdsk that checks and repairs file system errors and bad sectors. While Scandisk is useful, Chkdsk is generally considered more robust and capable of handling a wider range of disk issues. Fixdsk is not a standard DOS command or tool; it seems to be a variant or misspelling of the correct tool names. Therefore, the correct answer is Option C: Chkdsk."
    keyConcept: Disk Operating System _Dos
    testedIn:
      - PPSC
      - FPSC
  - id: 33
    question: Which command can be used to create the disk's tracks and sectors?
    options:
      - Fdisk
      - Format
      - Chkdsk
      - Attrib
    answer: 1
    explanation: "Format is the command used in DOS to create the disk's tracks and sectors. When you format a disk using the format command, it prepares the disk by creating the necessary file system structures (tracks and sectors) for storing data. It also marks bad sectors on the disk, if any, and initializes the disk for use. The syntax for formatting a disk is typically format drive_letter: where drive_letter: is the letter of the drive you want to format (e.g., format C: for formatting the C drive). Fdisk is used for partitioning a hard disk into one or more logical drives, not for creating the physical tracks and sectors. Chkdsk is used to check the integrity of the file system and fix errors on a disk, not for creating disk tracks and sectors. Attrib is used to change file attributes (like hidden or read-only), not for disk formatting. Therefore, the correct answer is Option B: Format."
    keyConcept: Disk Operating System _Dos
    testedIn:
      - PPSC
      - FPSC
  - id: 34
    question: Which command in DOS can be used to recover accidentally deleted files?
    options:
      - UNDELETE
      - DELETE/CANCEL
      - RESTORE
      - RECOVER
    answer: 0
    explanation: "UNDELETE is the command in DOS that can be used to recover accidentally deleted files. When files are deleted in DOS, they are often not immediately erased but rather marked as deleted in the file allocation table (FAT). The UNDELETE command can sometimes recover these files by restoring the file entries in the directory structure, provided the clusters that held the file data have not been overwritten. The syntax for using UNDELETE typically involves specifying the name of the file or files to be recovered. DELETE/CANCEL is not a valid command in DOS for recovering deleted files; it suggests canceling a delete operation. RESTORE is not a command in DOS for recovering deleted files; it is used in some backup systems to restore backed-up files. RECOVER is also not a command in DOS for recovering deleted files; it typically refers to recovering data from damaged disks or partitions. Therefore, the correct answer is Option A: UNDELETE."
    keyConcept: Disk Operating System _Dos
    testedIn:
      - PPSC
      - FPSC
  - id: 35
    question: Which command in DOS is used to display the version of MSDOS?
    options:
      - VERSION
      - VERIFY
      - VER
      - VERSN
    answer: 2
    explanation: "VER is the command in DOS used to display the version of MSDOS. When you type ver at the command prompt and press Enter, DOS displays the version number of the operating system currently running. This command is useful for verifying the version of MSDOS installed on a system. The version number typically includes major and minor version information, such as \"MS-DOS Version 6.22\". VERSION is not a valid command in DOS for displaying the version; it's not recognized as a standard DOS command. VERIFY is used to enable or disable file verification when files are written to a disk, not for displaying the DOS version. VERSN is not a valid command in DOS; it seems to be a misspelling or non-existent command. Therefore, the correct answer is Option C: VER."
    keyConcept: Disk Operating System _Dos
    testedIn:
      - PPSC
      - FPSC
  - id: 36
    question: Which command is used to copy all files from drive a with extension .txt to the currently logged drive and directory?
    options:
      - Copy a. *.txt
      - "Copy *.txt a:"
      - "Copy *.txt c:"
      - Copy *.txt all.txt
    answer: 1
    explanation: "Copy *.txt a: is the command used in DOS to copy all files with the extension .txt from drive A to the currently logged drive and directory. The copy command in DOS is used to copy files from one location to another. *.txt specifies that all files with the .txt extension should be copied. a: indicates the source drive from where the files should be copied (drive A in this case). The destination, which is not explicitly shown but assumed, is the currently logged drive and directory. Copy a. *.txt is not a valid syntax in DOS for copying files; it has incorrect placement of the source and destination. Copy *.txt c: would copy .txt files to drive C, not to the currently logged drive and directory. Copy *.txt all.txt would attempt to copy all .txt files into a single file named \"all.txt\", which is not the same as copying to the currently logged directory. Therefore, the correct answer is Option B: Copy *.txt a:."
    keyConcept: Disk Operating System _Dos
    testedIn:
      - PPSC
      - FPSC
  - id: 37
    question: Which command is used to create root directory and FAT on disk?
    options:
      - Chkdsk
      - Command.com
      - Format
      - Fat
    answer: 2
    explanation: "Format is the command used in DOS to create the root directory and File Allocation Table (FAT) on a disk. When you format a disk using the format command, it prepares the disk by creating the necessary file system structures, including the root directory and the FAT. The root directory is the top-level directory of a disk, where other directories and files are stored. The FAT is a table that DOS uses to keep track of the status of each cluster on the disk (whether it is free or allocated to a file). The syntax for formatting a disk typically involves specifying the drive letter followed by the colon (e.g., format C: for formatting the C drive). Chkdsk is used to check the integrity of the file system and to fix errors on a disk, but it does not create the root directory or the FAT. Command.com is the system file that contains the DOS command interpreter, not a command used for disk formatting. Fat is not a command in DOS; it refers to the File Allocation Table itself, not a command to create it. Therefore, the correct answer is Option C: Format."
    keyConcept: Disk Operating System _Dos
    testedIn:
      - PPSC
      - FPSC
  - id: 38
    question: Which command is used to delete all the files extension .txt on the current drive and directory?
    options:
      - Del .txt
      - Erase .txt
      - Del *.txt
      - Del *.*/p
    answer: 2
    explanation: "Del *.txt is the command used in DOS to delete all files with the extension .txt from the current drive and directory. The del command in DOS is used to delete files. *.txt specifies that all files with the .txt extension should be deleted. When you execute del *.txt at the command prompt, DOS will delete all files ending with .txt in the current directory. Del .txt is not the correct syntax for deleting files with a specific extension; it would attempt to delete a file named \".txt\". Erase .txt is not a valid command in DOS for deleting files; the correct command is del instead of erase for file deletion. Del . /p is incorrect because the /p switch is not used for deleting files. It typically stands for prompting before deleting, but it's not part of the standard del command syntax. Therefore, the correct answer is Option C: Del *.txt."
    keyConcept: Disk Operating System _Dos
    testedIn:
      - PPSC
      - FPSC
  - id: 39
    question: Which command is used to delete all the files in the root directory of drive a
    options:
      - A:\del
      - "Del *.* a:"
      - Del a:\
      - Erase *.*
    answer: 1
    explanation: "Del . a: is the command used in DOS to delete all files in the root directory of drive A. Explanation: The del command is used to delete files in DOS. . specifies that all files (regardless of their extensions) should be deleted. a: specifies the drive letter A, indicating that the operation should be performed on drive A (the floppy disk drive). When you execute del . a: at the DOS prompt, it will delete all files in the root directory of the A drive. A:\\del is not the correct syntax for deleting all files on drive A. The correct command starts with del followed by . and the drive letter. Del a: is incorrect because it doesn't specify the files to delete (missing . or specific file names). Erase . is not a valid command in DOS for deleting files. The correct command is del for deleting files. Therefore, the correct answer is Option B: Del . a:."
    keyConcept: Disk Operating System _Dos
    testedIn:
      - PPSC
      - FPSC
  - id: 40
    question: Which command is used to display a list of deleted files that DOS can undelete?
    options:
      - Undelete *.*
      - Undelete/all
      - Undelete/list
      - None of the above
    answer: 2
    explanation: "The undelete command in DOS is used to recover accidentally deleted files. /list option with undelete displays a list of files that have been deleted and are available for recovery. This command helps users identify which files can be restored to their original state before permanent deletion. Undelete .: This syntax is not the correct way to list deleted files. It suggests attempting to undelete all files, which is not how the command operates. Undelete/all: There is no /all option for the undelete command in DOS. This option does not exist. None of the above: This option is incorrect because Undelete/list is a valid command in DOS to display a list of deleted files. Therefore, the correct answer is Option C: Undelete/list."
    keyConcept: Disk Operating System _Dos
    testedIn:
      - PPSC
      - FPSC
---


