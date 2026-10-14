---
title: Unix — Part 1 MCQs with Explanations
description: Practice high-yield Computer Science & IT MCQs on Unix — Part 1 with worked academic solutions for PPSC, FPSC, CSS, PMS, NTS.
subject: computer-science
subjectName: Computer Science & IT
topic: unix-part-1
topicName: Unix — Part 1
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
    question: Which symbol will be used with grep command to match the pattern pat at the beginning of a line?
    options:
      - ^pat
      - $pat
      - pat$
      - pat^
      - None of the above
    answer: 0
    explanation: In Unix, when using the grep command, the caret (^) symbol is used to match patterns at the beginning of a line . So, if you use ^pat with grep , it will match all the lines that start with the pattern "pat" . The caret (^) is called a metacharacter in regular expressions and it anchors the search pattern to the beginning of a line . When you use ^pat , grep will only return lines where the pattern "pat" occurs at the beginning of the line . This means that if "pat" occurs anywhere else in the line (not at the beginning), it won't be considered a match. So, to summarize, ^pat is the correct option because it specifically instructs grep to find lines where "pat" appears at the very beginning.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 2
    question: Which command is used to sort the lines of data in a file in reverse order
    options:
      - sort
      - sh
      - st
      - sort -r
      - None of the above
    answer: 3
    explanation: In Unix, the sort command is used to sort the lines of data in a file. By adding the -r option to the sort command, you can sort the lines in reverse order . So, sort -r is the correct command to sort the lines of data in a file in reverse order.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 3
    question: Which command is used to display the top of the file?
    options:
      - cat
      - head
      - more
      - grep
      - None of the above
    answer: 1
    explanation: In Unix, the head command is used to display the top part of a file. It prints the first 10 lines of the specified file by default. If you want to display a different number of lines, you can specify it using the -n option followed by the number of lines you want to display. So, head is the correct command to display the top of a file.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 4
    question: Which command is used to copy all files having the string chap and any two characters after that to the progs directory?
    options:
      - cp chap?? progs
      - cp chap* progs
      - cp chap[12] /progs/*.*
      - cp chap?? /progs/*
      - None of the above
    answer: 0
    explanation: In Unix, the cp command is used to copy files or directories. The pattern chap?? matches files with the string chap followed by any two characters. When followed by progs , it indicates that all files matching this pattern should be copied to the progs directory. So, cp chap?? progs is the correct command to copy all files having the string chap and any two characters after that to the progs directory.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: Which command is used to change protection mode of files starting with the string emp and ending with 1,2, or 3?
    options:
      - chmod u+x emp[1-3]
      - chmod 777 emp*
      - chmod u+r ??? emp
      - chmod 222 emp?
      - None of the above
    answer: 0
    explanation: In Unix, the chmod command is used to change the permissions or protection mode of files or directories. The pattern emp[1-3] matches files starting with the string emp and ending with 1 , 2 , or 3 . By adding u+x to the chmod command, it grants execute permission to the owner of the file. So, chmod u+x emp[1-3] is the correct command to change the protection mode of files starting with the string emp and ending with 1 , 2 , or 3 .
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: Which command is used to remove a directory?
    options:
      - rd
      - rmdir
      - dldir
      - rdir
      - None of the above
    answer: 1
    explanation: In Unix, the rmdir command is used to remove or delete a directory. It is specifically designed to remove directories and will only work if the directory is empty. If the directory contains any files or subdirectories, rmdir will not remove it and will generate an error message. So, rmdir is the correct command to remove a directory.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 7
    question: Which of the following keys is used to replace a single character with new text?
    options:
      - S
      - r
      - C
      - None of the above
    answer: 1
    explanation: In Unix command line editors like vi or Vim, the s key is used in the command mode to replace a single character under the cursor with new text. After pressing s , you can enter the replacement text, and the character under the cursor will be replaced with it. So, s is the correct key to replace a single character with new text.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 8
    question: Which command is used to extract specific columns from the file?
    options:
      - cat
      - cut
      - grep
      - paste
      - None of the above
    answer: 1
    explanation: In Unix, the cut command is used to extract specific columns from a file. It allows you to specify which columns you want to extract based on delimiters like space or tab. So, cut is the correct command to extract specific columns from a file.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 9
    question: Which command sends the word count of the file infile to the newfile.
    options:
      - wc infile >newfile
      - wc <infile >newfile
      - wc infile - newfile
      - wc infile | newfile
      - None of the above
    answer: 0
    explanation: In Unix, the wc command is used to count words, lines, and characters in a file. The > symbol is used for output redirection, which means that the output of the command preceding it will be written to the specified file. So, wc infile > newfile is the correct command to send the word count of the file infile to the newfile .
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 10
    question: Which command is used to remove the read permission of the file 'note' from both the group and others?
    options:
      - chmod go+r note
      - chmod go+rw note
      - chmod go-x note
      - chmod go-r note
      - None of the above
    answer: 3
    explanation: In Unix, the chmod command is used to change the permissions of a file. Here, go-r specifies that read permission should be removed for both the group (g) and others (o) . So, chmod go-r note is the correct command to remove the read permission of the file 'note' from both the group and others.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 11
    question: Which of the following commands is used to display the directory attributes rather than its contents?
    options:
      - ls -l -d
      - ls -l
      - ls -x
      - ls -F
      - None of the above
    answer: 0
    explanation: In Unix, the ls command is used to list directory contents. By using the -l option, it displays detailed information about the files and directories. Adding the -d option makes ls display the attributes of the directory itself rather than its contents. So, ls -l -d is the correct command to display the directory attributes rather than its contents.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 12
    question: Which of the following files will displayed by this command cat *ch*
    options:
      - patch
      - catch
      - .ch
      - All of the above
      - None of the above
    answer: 3
    explanation: In Unix, the command cat ch will display the contents of all files in the current directory that have "ch" in their filenames. Therefore, it will display the contents of files like patch , catch , and .ch . So, All of the above files will be displayed by the command cat ch .
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 13
    question: "The Octal number to be given alogn with chmod command to make a file readable, writable and executable to the owner, readable and executable to group and others is:"
    options:
      - "0"
      - "755"
      - "744"
      - "555"
      - None of the above
    answer: 1
    explanation: "In Unix, file permissions are represented by three digits in octal form. Each digit corresponds to a set of permissions: the first digit for the owner, the second for the group, and the third for others. The permissions are represented by adding up the values for read (4), write (2), and execute (1). For the owner to have read, write, and execute permissions (7 = 4 + 2 + 1). For the group and others to have read and execute permissions (5 = 4 + 1). So, the octal number to be given along with the chmod command to achieve these permissions is 755 ."
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: If you are to use [Control-c] as the interrupt key instead of [Del], then you will have to use
    options:
      - tty ^c
      - stty intr ^c
      - stty echoe
      - stty echo ^a
      - None of the above
    answer: 1
    explanation: "In Unix, the stty command is used to change or display terminal settings. The intr option is used to specify the interrupt key, which is used to interrupt or terminate the current process. By default, the interrupt key is set to ^c , which represents Control-c . So, to use Control-c as the interrupt key, you would use the command stty intr ^c . Therefore, Option B: stty intr ^c is the correct command to set Control-c as the interrupt key."
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 15
    question: Which of the following keys is used to move the cursor to the end of the paragraph.
    options:
      - "}"
      - "{"
      - "|"
      - $
      - None of the above
    answer: 4
    explanation: In Unix, to move the cursor to the end of the paragraph, the key used is G (capital G) in vi or Vim . Therefore, None of the above options correspond to the key used to move the cursor to the end of the paragraph.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 16
    question: Which command is used to concatenate all files beginning with the string 'emp' and followed by a non-numeric characters?
    options:
      - cat emp[!0-9]
      - more [emp][!0-9]
      - cat emp[x-z]
      - cat emp[a-z]
      - None of the above
    answer: 0
    explanation: "In Unix, the command cat emp[!0-9] is used to concatenate all files beginning with the string 'emp' and followed by a non-numeric character. Here, the square brackets denote character classes, and the exclamation mark (!) negates the character class. So, [!0-9] matches any character that is not a numeric character. Therefore, Option A: cat emp[!0-9] is the correct command to concatenate all files beginning with the string 'emp' and followed by a non-numeric character."
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 17
    question: The command which transcribes the standard input to the standard output and also makes a copy of the same in a file is
    options:
      - tee
      - tr
      - sort
      - grep
      - None of the above
    answer: 0
    explanation: In Unix, the tee command reads the standard input and writes it to both the standard output and one or more files, effectively making a copy of the input. This can be useful when you want to see the output of a command on the screen while also saving it to a file. So, tee is the correct command to transcribe the standard input to the standard output and also make a copy of the same in a file.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 18
    question: Which command is used to remove a file?
    options:
      - remove
      - rm
      - mv
      - del
      - None of the above
    answer: 1
    explanation: In Unix, the rm command is used to remove or delete files and directories. It stands for "remove". So, rm is the correct command to remove a file.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 19
    question: Which symbol is used to separate more than one command in the same command line?
    options:
      - $
      - "#"
      - ":"
      - ""
      - None of the above
    answer: 3
    explanation: In Unix, the semicolon ( ; ) symbol is used to separate more than one command in the same command line. This allows you to execute multiple commands sequentially on a single command line. So, ; is the symbol used to separate more than one command in the same command line.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 20
    question: The agency that sits between the user and the UNIX system is called the
    options:
      - logic
      - profile
      - shell
      - erxc
      - None of the above
    answer: 2
    explanation: In Unix, the agency that sits between the user and the UNIX system is called the shell . The shell is a command-line interpreter that takes commands from the user and executes them. It provides an interface for users to interact with the operating system, allowing them to run programs, manipulate files, and perform various tasks. So, shell is the correct term for the agency that sits between the user and the UNIX system.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 21
    question: Which of the following commands is used to update access and modification times of a file?
    options:
      - grep
      - wc
      - touch
      - cat
      - None of the above
    answer: 2
    explanation: In Unix, the touch command is used to update access and modification times of a file. If the file specified doesn't exist, touch creates an empty file with the specified name. So, touch is the correct command to update access and modification times of a file.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 22
    question: Which command is used to count just the number of characters in a file?
    options:
      - wc - 1
      - wc -c
      - wc -w
      - wc -r
      - None of the above
    answer: 1
    explanation: In Unix, the wc command is used to count words, lines, and characters in a file. The -c option specifically instructs wc to count just the number of characters in the file. So, wc -c is the correct command to count just the number of characters in a file.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 23
    question: Which of the following commands is used to list contents of directories?
    options:
      - ls
      - lp
      - dir
      - tar
      - None of the above
    answer: 0
    explanation: In Unix, the ls command is used to list the contents of directories. It displays the names of files and directories in the specified directory. So, ls is the correct command to list contents of directories.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 24
    question: Which command is used to display a file contents in octal form?
    options:
      - cd
      - od
      - of
      - oct
      - None of the above
    answer: 1
    explanation: In Unix, the od command is used to display file contents in octal form. It stands for "octal dump". So, od is the correct command to display a file's contents in octal form.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 25
    question: Which command will be used with vi editor to insert text to left of cursor?
    options:
      - s
      - a
      - i
      - None of the above
    answer: 3
    explanation: In the vi editor, the i command is used to insert text before the cursor position. Conversely, the a command is used to insert text after the cursor position. Therefore, to insert text to the left of the cursor, you would use the i command. So, i is the command used with the vi editor to insert text to the left of the cursor.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 26
    question: In vi editor, forward search is performed using the command.
    options:
      - ":pat"
      - "?pat"
      - /pat
      - All of the above
      - None of the above
    answer: 2
    explanation: In the vi editor, forward search is performed using the / command followed by the pattern you want to search for. This command allows you to search forward from the current cursor position for the specified pattern. So, /pat is the command used in the vi editor for forward search.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 27
    question: Which of the following special shell variables is used to process number of the last background job?
    options:
      - $!
      - $#
      - $0
      - $*
      - None of the above
    answer: 0
    explanation: In Unix shell scripting, the $! special variable is used to process the number of the last background job. It holds the process ID (PID) of the last command run in the background. So, $! is the special shell variable used to process the number of the last background job.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 28
    question: Which option will be used with ps command to slow the entire command line of the process being run?
    options:
      - "-4"
      - "-3"
      - "-1"
      - "-2"
      - None of the above
    answer: 4
    explanation: "In Unix/Linux , the ps command is used to display information about active processes. To show the entire command line of the process being run, the correct option is -f (full format) or -w (wide output) , not the given options. The commonly used options for displaying the full command line are: ps -f → Displays full-format listing, including command-line arguments. ps -ef → Shows all processes in full format. ps aux → Provides detailed information about all running processes. Since none of the given options (-4, -3, -1, -2) are correct, the correct answer is None of the above."
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 29
    question: Which of the following command addresses all users who are currently hooked on?
    options:
      - write
      - mail
      - wall
      - mesg
      - None of the above
    answer: 2
    explanation: In Unix, the wall command is used to send a message to all users who are currently logged in. It stands for "write all". This command sends a message to all terminals except those who have disabled messages using the mesg command. So, wall is the command that addresses all users who are currently hooked on.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 30
    question: Which option is used with rm command to make the command prompt the user with each filename and a ?, before acting on it
    options:
      - "-r"
      - "-x"
      - "-i"
      - "-l"
      - None of the above
    answer: 2
    explanation: In Unix, the rm command is used to remove files or directories. The -i option prompts the user for confirmation before deleting each file. When this option is used, rm will display the filename followed by a question mark (?), and the user needs to confirm by typing 'y' for yes or 'n' for no. So, -i is the option used with the rm command to prompt the user with each filename and a question mark before acting on it.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 31
    question: Which of the following directories contain all the Alias created by a user, including his login directory?
    options:
      - /tmp
      - /etc
      - /usr
      - /dev
      - None of the above
    answer: 4
    explanation: "The correct answer is Option E: None of the above . In Unix, the directory that contains all the aliases created by a user, including their login directory, is typically the user's home directory. By default, aliases are usually stored in a user's configuration files such as .bashrc or .bash_profile located in their home directory. Therefore, None of the above options is the correct directory for storing user aliases."
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 32
    question: Which of the following commands is used to obtain a list of all files by modification time?
    options:
      - ls -l
      - ls -t
      - ls -i
      - ls -R
      - None of the above
    answer: 1
    explanation: In Unix, the ls command is used to list directory contents. The -t option with ls is used to sort files by modification time, showing the most recently modified files first. So, ls -t is the command used to obtain a list of all files sorted by modification time.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 33
    question: The % key allows you
    options:
      - to move the cursor to a matching delimiter, when a delimiters a parenthesis, a bracket, or a brace.
      - to move the cursor to the upperleft corner of the screen
      - to move the cursor backward to the beginning of a word
      - to move the cursor to the first column in the current line
      - None of the above
    answer: 0
    explanation: In Unix terminal environments, the % key, when used with certain text editors like vi or vim, allows the cursor to jump to the matching delimiter (such as parenthesis, bracket, or brace) in the text. This feature helps in navigating through code or text files efficiently, especially in programming or scripting contexts. So, Option A is the correct description of what the % key allows you to do.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 34
    question: Which command is used to display the characteristics of a process?
    options:
      - pid
      - du
      - ps
      - au
      - None of the above
    answer: 2
    explanation: In Unix, the ps command is used to display information about active processes. By default, it shows a brief list of processes running in the current terminal session, including their process IDs (PIDs), terminal IDs (TIDs), and other characteristics such as CPU and memory usage. So, ps is the command used to display the characteristics of a process.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 35
    question: Which of the following commands is used to identify the type of file by context?
    options:
      - ls
      - cat
      - file
      - more
      - None of the above
    answer: 2
    explanation: In Unix, the file command is used to determine the type of a file by examining its contents and context. When you run file followed by a filename as an argument, it analyzes the file and provides information about its type, such as whether it is a text file, binary file, directory, symbolic link, etc. So, file is the command used to identify the type of file by context.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 36
    question: The field separator in cut command is specified with
    options:
      - "-d option"
      - "-a option"
      - "-r option"
      - "-x option"
      - None of the above
    answer: 1
    explanation: In Unix, the cut command is used to extract sections from each line of input. The field separator, which specifies how the fields are separated in the input, is specified using the -d option followed by the delimiter character. For example, if you want to use a comma as the field separator, you would use cut -d',' . So, -d option is used to specify the field separator in the cut command.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 37
    question: Which of the following options will be used to display number of blocks used by a file?
    options:
      - "-c"
      - "-d"
      - "-i"
      - "-s"
      - None of the above
    answer: 3
    explanation: In Unix, the du command is used to estimate file space usage. The -s option, when used with du , displays only a summary of the disk usage, including the total number of blocks used by a file or directory. So, -s is the option used to display the number of blocks used by a file.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 38
    question: Which option will be used with touch command to change the access time?
    options:
      - "-a"
      - "-b"
      - "-t"
      - "-h"
      - None of the above
    answer: 0
    explanation: In Unix, the touch command is used to change file timestamps, including access (atime) and modification (mtime) times. The -a option, when used with touch , updates only the access time of the file to the current time without modifying the file's content. So, -a is the option used with the touch command to change the access time of a file.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 39
    question: Which command is used to make all files and sub-directories in the directory (progs) executable by all users?
    options:
      - chmod -R a+x progs
      - chmod -R 222 progs
      - chmod -1 a+x progs
      - chmod -x a+x progs
      - None of the above
    answer: 0
    explanation: In Unix, the chmod command is used to change the permissions of files and directories. The -R option is used to recursively change permissions for the specified directory and its subdirectories. The a+x part of the command grants execute permission to all users (owner, group, and others). So, chmod -R a+x progs makes all files and subdirectories in the progs directory executable by all users. Therefore, Option A is the correct command to achieve the desired task.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
  - id: 40
    question: Which command is used to display and create files?
    options:
      - cat
      - vi
      - ed
      - lyrix
      - None of the above
    answer: 1
    explanation: In Unix, the vi command is a text editor that is commonly used to display and create files. It allows users to view and edit text files directly within the terminal. When you open a file with vi that doesn't exist, it creates a new file with that name. So, vi is the command used to both display and create files in Unix.
    keyConcept: Unix
    testedIn:
      - PPSC
      - FPSC
---


