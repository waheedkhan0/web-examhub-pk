---
title: Unix — Part 2 MCQs with Explanations
description: Practice high-yield Computer Science & IT MCQs on Unix — Part 2 with worked academic solutions for PPSC, FPSC, CSS, PMS, NTS.
subject: computer-science
subjectName: Computer Science & IT
topic: unix-part-2
topicName: Unix — Part 2
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
    question: The second set of the three permissions (r-) indicates that
    options:
      - group has read permission only
      - other has read permission only
      - owner has read permission only
      - group has write permission only
      - None of the above
    answer: 1
    explanation: In Unix file permissions, the three sets of permissions (rwx) represent the access rights for the owner, group, and others, respectively. The second set of permissions, indicated by (r-), means that the group associated with the file or directory has read permission only. The absence of the "w" (write) and "x" (execute) permissions indicates that the group does not have those permissions. So, Option B is the correct interpretation of the second set of permissions (r-) in Unix file permissions.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 2
    question: Which column contains all details of the permissions of a file when you issue the ls -l command?
    options:
      - second
      - fourth
      - third
      - first
      - None of the above
    answer: 3
    explanation: When you issue the ls -l command in Unix, the output displays detailed information about files and directories in the current directory. The first column in the output represents the permissions of the file or directory. This column provides information about read, write, and execute permissions for the owner, group, and others, respectively. So, Option D is the column that contains all details of the permissions of a file when you issue the ls -l command.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 3
    question: Which of the following commands is used to display your working directory?
    options:
      - dir
      - prompt $p$g
      - pwd
      - path
      - None of the above
    answer: 2
    explanation: In Unix, the pwd command stands for "print working directory". When you issue this command, it displays the full pathname of the current working directory. This helps users to know which directory they are currently working in within the Unix filesystem. So, Option C is the command used to display your working directory in Unix.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 4
    question: While working with mail command, which command is used to save mail in a separate file?
    options:
      - s
      - r
      - w
      - d
      - None of the above
    answer: 2
    explanation: In Unix, when using the mail command to read or compose emails, the w command is used to save the mail in a separate file. After composing or reading an email, if you want to save it to a file, you can use the w command followed by the filename. This command writes the email content to the specified file. So, Option C is the command used to save mail in a separate file while working with the mail command in Unix.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: The command used to compare the files is known as
    options:
      - comp
      - cmp
      - do
      - ccp
      - None of the above
    answer: 1
    explanation: In Unix, the cmp command is used to compare two files byte by byte and determine whether their contents are identical or not. When you execute this command followed by the names of two files, it compares the files and provides information about the first byte where they differ, if any. So, Option B is the command used to compare files in Unix.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: Which command is used to terminate a process?
    options:
      - shutdown
      - haltsys
      - cancel
      - kill
      - None of the above
    answer: 3
    explanation: In Unix, the kill command is used to terminate or send signals to processes. By default, it sends the TERM signal to a process, which instructs it to gracefully terminate. However, you can specify different signals using various options of the kill command. For instance, using kill -9 sends the KILL signal, which immediately terminates the process without allowing it to clean up. So, Option D is the command used to terminate a process in Unix.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 7
    question: Which option will be used with sort command to start sorting ofter the nth column of the (m+l)th field?
    options:
      - –m.n
      - +m.n
      - +n.m+1
      - +(m+l).n
      - None of the above
    answer: 1
    explanation: In the Unix sort command, the -k option is used to specify the key fields to be used for sorting. It allows you to define a custom sort field based on column position. The syntax for using this option is -k start[,end], where start and end are the positions of the starting and ending columns of the key field, respectively. The +m.n option specifies sorting starting after the nth column of the mth field. Therefore, Option B is the correct choice.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 8
    question: "The cp command uses:"
    options:
      - standard input file
      - standard output file
      - both input and output file
      - neither standard input nor standard output file
      - None of the above
    answer: 3
    explanation: The cp command in Unix is used to copy files and directories from a source to a destination. It does not involve standard input or standard output files. Instead, it directly works with file system paths as source and destination arguments. Therefore, Option D is the correct choice.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 9
    question: Which of the following files contains information related to password aging?
    options:
      - Shadow
      - password
      - profile
      - All the three
      - None of the above
    answer: 0
    explanation: In Unix-like operating systems, including Linux, the /etc/shadow file stores encrypted password and other security-related information such as password aging policies for user accounts. It is readable only by the root user and provides enhanced security compared to the older /etc/passwd file. Therefore, Option A is the correct choice.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 10
    question: Which of the following is not a filter?
    options:
      - cat
      - grep
      - wc
      - sort
      - None of the above
    answer: 0
    explanation: "Option A: cat This option is correct. The cat (concatenate) command in Unix is used to read and concatenate files and print them to the standard output. It does not filter data but rather displays the contents of files or concatenates them. Therefore, it is not considered a filter. Option B: grep This option is incorrect. The grep command is a filter that searches for patterns within text. It reads input and outputs only the lines that match the given pattern. Option C: wc This option is incorrect. The wc (word count) command is a filter that counts the number of lines, words, and characters in a file or input stream. It processes the input data and produces summarized output, making it a filter. Option D: sort This option is incorrect. The sort command is a filter that sorts the lines of input data based on specified criteria. It reads input data, processes it, and outputs the sorted result, thus acting as a filter. Option E: None of the above This option is incorrect. As explained above, the cat command is not a filter, while the other commands listed are filters. Conclusion: The cat command is not a filter, making Option A: cat the correct answer."
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 11
    question: Which set option is used with vi editor to display line numbers on screen?
    options:
      - nm
      - nu
      - ic
      - li
      - None of the above
    answer: 1
    explanation: "In the vi editor, the set option \"nu\" is used to display line numbers on the screen. When you type \":set nu\" or \":set number\" in command mode of vi, it enables line numbering, displaying line numbers to the left of each line. Therefore, the correct answer is Option B: nu ."
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 12
    question: Which option will be used with disk free command to include the total amount of disk space in the file system?
    options:
      - "-t"
      - "-a"
      - "-h"
      - "-s"
      - None of the above
    answer: 1
    explanation: The -a option is used with the disk free command ( df ) to include the total amount of disk space in the file system. This option displays all filesystems, including those with a size of zero blocks.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 13
    question: Which of the following command is used to go to home directory?
    options:
      - cd..
      - cd/
      - cd
      - cd HOME.
      - None of the above
    answer: 2
    explanation: The cd command is used to change the current working directory. When used without any arguments, it takes you to your home directory. Options A, B, and D are incorrect as they do not accurately represent the command to go to the home directory.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: Which command is used to move all files to the bin sub-directory of the parent directory?
    options:
      - mv *.* /bin/
      - mv * /bin/*
      - mv * ../bin
      - mv * ../bin *.*
      - None of the above
    answer: 2
    explanation: The mv command is used to move files or directories. In this case, the wildcard * is used to select all files in the current directory, and ../bin specifies the bin sub-directory of the parent directory as the destination. Options A, B, and D are incorrect as they either specify incorrect destination directories or use incorrect wildcard patterns.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 15
    question: Major expressions used with find command to select file is it has been accessed in more than 375 days, is
    options:
      - "-atime +375"
      - "-mtime +375"
      - "-ctime +375"
      - "-newermt +375 days"
      - None of the above
    answer: 0
    explanation: The -atime option with +375 is used with the find command to select files that have been accessed more than 375 days ago. This option looks at the access time of the file. Options B, C, and D are incorrect as they refer to modification time ( -mtime ), change time ( -ctime ), and specifying a newer modification time respectively, which are not suitable for selecting files based on access time.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 16
    question: Which command will be used with vi editor to replace text from cursor to right?
    options:
      - r
      - s
      - None of the above
    answer: 1
    explanation: s is the correct answer to “Which command will be used with vi editor to replace text from cursor to right”. This question is standard in competitive examination syllabi for Unix.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 17
    question: Which of the following commands is used to rename a file?
    options:
      - rename
      - remove
      - mv
      - ren
      - None of the above
    answer: 2
    explanation: mv is the correct answer to “Which of the following commands is used to rename a file”. This question is standard in competitive examination syllabi for Unix.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 18
    question: Which of the following commands is used to copy a file wb from the programs directory into a file called wbx in the misc directory?
    options:
      - copy programs/wb misc/wbx
      - cp programs/wb misc/wbx
      - tar programs/wb misc/wbx
      - copy a:programs/wb b:misc/wbx
      - None of the above
    answer: 1
    explanation: cp programs/wb misc/wbx is the correct answer to “Which of the following commands is used to copy a file wb from the programs directory into a file called wbx in the misc directory”. This question is standard in competitive examination syllabi for Unix.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 19
    question: Which command is used to list all the files with extension .lst?
    options:
      - ls -l *.lst
      - ls lst*
      - ls *.*
      - ls *[lst]
      - None of the above
    answer: 0
    explanation: ls -l *.lst is the correct answer to “Which command is used to list all the files with extension .lst”. This question is standard in competitive examination syllabi for Unix.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 20
    question: Which option is used with the chmod command recursively to all files and sub-directories in a directory?
    options:
      - "-1"
      - "-r"
      - "-all"
      - None of the above
    answer: 3
    explanation: None of the above is the correct answer to “Which option is used with the chmod command recursively to all files and sub-directories in a directory”. This question is standard in competitive examination syllabi for Unix.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 21
    question: Which command is used to change directory to the name beginning with a 'p'?
    options:
      - cd p
      - cd p?
      - cd p*
      - cd [p]
      - None of the above
    answer: 2
    explanation: cd p* is the correct answer to “Which command is used to change directory to the name beginning with a 'p'”. This question is standard in competitive examination syllabi for Unix.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 22
    question: Which of the following is invalid filename?
    options:
      - shutry
      - TRY
      - trial
      - my .file
      - None of the above
    answer: 4
    explanation: None of the above is the correct answer to “Which of the following is invalid filename”. This question is standard in competitive examination syllabi for Unix.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 23
    question: Which commands is used to assign executable permission to all of the files named "letter"?
    options:
      - chmod ugo+r letter
      - chmod ugo+rw letter
      - chmod u+x letter
      - chmod ugo+x letter
      - None of the above
    answer: 3
    explanation: chmod ugo+x letter is the correct answer to “Which commands is used to assign executable permission to all of the files named "letter"”. This question is standard in competitive examination syllabi for Unix.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 24
    question: Which command is used to print a file?
    options:
      - print
      - prn
      - pg
      - lp
      - None of the above
    answer: 3
    explanation: lp is the correct answer to “Which command is used to print a file”. This question is standard in competitive examination syllabi for Unix.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 25
    question: Which command will be used with vi editor to replace single character under cursor with any number of characters?
    options:
      - s
      - a
      - i
      - None of the above
    answer: 0
    explanation: s is the correct answer to “Which command will be used with vi editor to replace single character under cursor with any number of characters”. This question is standard in competitive examination syllabi for Unix.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 26
    question: Which of the following set options is used with vi editor to ignore case while searching for patterns?
    options:
      - ic
      - ai
      - sm
      - ts
      - None of the above
    answer: 0
    explanation: ic is the correct answer to “Which of the following set options is used with vi editor to ignore case while searching for patterns”. This question is standard in competitive examination syllabi for Unix.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 27
    question: Which command is used to list out all the hidden files along with the other files?
    options:
      - ls -l
      - ls -x
      - ls -F
      - ls -a
      - None of the above
    answer: 3
    explanation: ls -a is the correct answer to “Which command is used to list out all the hidden files along with the other files”. This question is standard in competitive examination syllabi for Unix.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 28
    question: Which of the following commands is used to absolutely assign all permissions to the owner, read and write permissions to the group and only executable permission to the others of the file note?
    options:
      - chmod 761 note
      - chmod 671 note
      - chmod 167 note
      - chmod 4=rwx, g=rw note
      - None of the above
    answer: 0
    explanation: chmod 761 note is the correct answer to “Which of the following commands is used to absolutely assign all permissions to the owner, read and write permissions to the group and only executable permission to the others of the file note”. This question is standard in competitive examination syllabi for Unix.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 29
    question: The chmod ugo+rw note command can be represented in octal notation as
    options:
      - chmod 555 note
      - chmod 666 note
      - chmod 444 note
      - chmod 333 note
      - None of the above
    answer: 1
    explanation: chmod 666 note is the correct answer to “The chmod ugo+rw note command can be represented in octal notation as”. This question is standard in competitive examination syllabi for Unix.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 30
    question: Which of the following commands is used to display the filenames in multiple columns with indication of directories and executable file?
    options:
      - ls -F -x
      - ls -l
      - ls ~ x
      - Ip
      - None of the above
    answer: 0
    explanation: ls -F -x is the correct answer to “Which of the following commands is used to display the filenames in multiple columns with indication of directories and executable file”. This question is standard in competitive examination syllabi for Unix.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 31
    question: Which command is used with vi editor to search a pattern in the forward direction?
    options:
      - /
      - "?"
      - //
      - "??"
      - None of the above
    answer: 0
    explanation: / is the correct answer to “Which command is used with vi editor to search a pattern in the forward direction”. This question is standard in competitive examination syllabi for Unix.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 32
    question: Which of the following commands is used to assign executable permission to the owner of the file named "note"?
    options:
      - chmod g+x note
      - chmod u+w note
      - chmod u+x note
      - chmod ugo+x note
      - None of the above
    answer: 2
    explanation: chmod u+x note is the correct answer to “Which of the following commands is used to assign executable permission to the owner of the file named "note"”. This question is standard in competitive examination syllabi for Unix.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 33
    question: The command to count the number of files in the current directory by using pipes, is
    options:
      - ls | wc
      - ls -l | wc -l
      - ls | wc -w
      - ls | ws -c
      - None of the above
    answer: 2
    explanation: ls | wc -w is the correct answer to “The command to count the number of files in the current directory by using pipes, is”. This question is standard in competitive examination syllabi for Unix.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 34
    question: Which of the following commands is used to get directory one level up?
    options:
      - cd
      - cd ..
      - cd/
      - chdir
      - None of the above
    answer: 1
    explanation: cd .. is the correct answer to “Which of the following commands is used to get directory one level up”. This question is standard in competitive examination syllabi for Unix.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 35
    question: Which of the following commands is used to count the total number of lines, words, and characters contained in a file.
    options:
      - count p
      - wc
      - wcount
      - countw
      - None of the above
    answer: 1
    explanation: wc is the correct answer to “Which of the following commands is used to count the total number of lines, words, and characters contained in a file.”. This question is standard in competitive examination syllabi for Unix.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 36
    question: Which command is used to delete all files in the current directory as well as all files and sub-directories in its subdirectories?
    options:
      - rm *
      - rm -r *
      - rm all
      - rm *.*
      - None of the above
    answer: 1
    explanation: rm -r * is the correct answer to “Which command is used to delete all files in the current directory as well as all files and sub-directories in its subdirectories”. This question is standard in competitive examination syllabi for Unix.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 37
    question: Which of the following commands is used to change the working directory?
    options:
      - cd
      - changedir
      - chdir
      - cdir
      - None of the above
    answer: 0
    explanation: cd is the correct answer to “Which of the following commands is used to change the working directory”. This question is standard in competitive examination syllabi for Unix.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 38
    question: Which of the following commands is used to view your file 24 lines at a time?
    options:
      - pg
      - cat
      - lp
      - /p
      - None of the above
    answer: 0
    explanation: pg is the correct answer to “Which of the following commands is used to view your file 24 lines at a time”. This question is standard in competitive examination syllabi for Unix.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 39
    question: Which shell's wild-cards is used to match a single character?
    options:
      - "*"
      - "?"
      - "[ijk]"
      - "[!ijk]"
      - None of the above
    answer: 1
    explanation: "? is the correct answer to “Which shell's wild-cards is used to match a single character”. This question is standard in competitive examination syllabi for Unix."
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 40
    question: In Bourne shell, which file sets the Unix environment for the user when the logs into his HOME directory.
    options:
      - .exrc
      - .profile
      - lastlogin
      - .mbox
      - None of the above
    answer: 1
    explanation: .profile is the correct answer to “In Bourne shell, which file sets the Unix environment for the user when the logs into his HOME directory.”. This question is standard in competitive examination syllabi for Unix.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
---


