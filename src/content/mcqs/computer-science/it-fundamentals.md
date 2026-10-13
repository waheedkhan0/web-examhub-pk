---
title: IT Fundamentals and MS Office Shortcuts MCQs with Explanations
description: Practice MCQs on computer memory, hardware and software, number systems, Excel functions and MS Office shortcut keys for PPSC, FPSC, NTS and CSS recruitment tests, with explanations for every answer.
subject: computer-science
subjectName: Computer Science & Information Technology
topic: it-fundamentals
topicName: IT Fundamentals and MS Office Shortcuts
author: ExamHub Academic Editorial Board
updatedDate: "2026-10-13"
difficulty: Exam-Level
targetExams:
  - PPSC
  - FPSC
  - NTS
  - CSS
questions:
  - id: 1
    question: One byte is made up of how many bits?
    options:
      - 4 bits
      - 8 bits
      - 16 bits
      - 32 bits
    answer: 1
    explanation: A byte is a group of 8 bits and is the smallest unit used to store one character of text, while a kilobyte is 1024 bytes. The figures 16 and 32 describe the word length of a processor, not the size of a byte.
    keyConcept: 1 bit is a single 0 or 1; 1 byte = 8 bits; 1 KB = 1024 bytes
    examTip: A group of 4 bits has a name of its own, a nibble, which is why 4 is offered as a distractor.
    testedIn:
      - PPSC
      - NTS
  - id: 2
    question: "In the binary multiples used for computer memory, one megabyte (MB) is equal to:"
    options:
      - 1000 kilobytes
      - 1014 kilobytes
      - 1024 bytes
      - 1024 kilobytes
    answer: 3
    explanation: Memory is counted in powers of two, so 1 MB equals 2 to the power 20 bytes, which is 1024 KB, and 1 KB equals 2 to the power 10, or 1024, bytes. Storage makers advertise 1 KB as 1000 bytes, which is why a newly formatted drive always reports less space than its label.
    keyConcept: "Binary multiples: 1 KB = 2^10, 1 MB = 2^20, 1 GB = 2^30 and 1 TB = 2^40 bytes"
    examTip: When both 1000 and 1024 appear in the options, the memory question wants the 1024 answer.
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: "The decimal number 13, written in the binary number system, is:"
    options:
      - "1101"
      - "1110"
      - "1011"
      - "0111"
    answer: 0
    explanation: Thirteen is 8 plus 4 plus 1, so the place values 8, 4, 2 and 1 are filled by 1, 1, 0 and 1, giving 1101. The other options are 14 (1110), 11 (1011) and 7 (0111).
    keyConcept: Binary place values read 8-4-2-1; convert to decimal by adding the weights of the bits that are 1
    examTip: Always verify by expanding the answer; an eight-bit string is checked in seconds by adding 128-64-32-16-8-4-2-1.
    testedIn:
      - PPSC
      - NTS
      - CSS
  - id: 4
    question: In the hexadecimal number system, the letter F stands for which decimal value?
    options:
      - "10"
      - "14"
      - "15"
      - "16"
    answer: 2
    explanation: Hexadecimal has base 16 and writes its digits as 0 to 9 followed by A, B, C, D, E and F for the values 10 to 15, so F is 15 and the number after it is 10 in hex, that is 16 in decimal. The system is used for colour codes and memory addresses because one hex digit covers exactly four binary bits.
    keyConcept: "Hexadecimal base 16: A = 10 through F = 15; one hex digit equals four bits (a nibble)"
    examTip: "The usual trap is 16: no single hexadecimal digit can equal 16, because 16 is written as 10."
    testedIn:
      - NTS
      - PPSC
  - id: 5
    question: Which type of computer memory loses all of its contents when the power is switched off?
    options:
      - Read-only memory (ROM)
      - Hard-disk drive
      - Random-access memory (RAM)
      - USB flash drive
    answer: 2
    explanation: "RAM is volatile main memory: it holds the program and data in use at the moment and is emptied when power is removed, which is why work must be saved before shutdown. ROM, hard disks and flash drives are non-volatile and keep their contents without power."
    keyConcept: Volatile memory = RAM, plus CPU registers and cache; non-volatile = ROM, HDD, SSD and flash memory
    examTip: The memory hierarchy from fastest to slowest is registers, cache, RAM, then secondary storage such as a hard disk.
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: "In Microsoft Word, the shortcut key Ctrl+Z is used to:"
    options:
      - Undo the last action
      - Redo the last undone action
      - Copy the selected text
      - Select the entire document
    answer: 0
    explanation: Ctrl+Z steps back through the edit history and reverses the most recent change, while Ctrl+Y performs the opposite action and redoes it. Copying is Ctrl+C, cutting is Ctrl+X and selecting the whole document is Ctrl+A.
    keyConcept: "Editing shortcuts: Ctrl+Z undo, Ctrl+Y redo, Ctrl+C copy, Ctrl+X cut, Ctrl+V paste"
    examTip: Ctrl+X is the option most often confused with Ctrl+Z; think of the X as a pair of scissors, since it cuts.
    testedIn:
      - PPSC
      - NTS
  - id: 7
    question: Which part of the central processing unit performs arithmetic operations and logical comparisons?
    options:
      - The control unit
      - The arithmetic and logic unit (ALU)
      - The cache memory
      - The register set
    answer: 1
    explanation: "The ALU carries out addition, subtraction, comparisons and Boolean logic. The control unit computes nothing at all: it fetches instructions and directs the other parts, while registers and cache only hold data temporarily."
    keyConcept: CPU = control unit plus ALU plus registers; the CU directs the flow, the ALU does the calculating
    examTip: Neither the ALU nor the control unit is an input or output device; they are components of the processor.
    testedIn:
      - FPSC
      - NTS
      - CSS
  - id: 8
    question: In Microsoft Excel, what does the function COUNT do when it is applied to a range of cells?
    options:
      - It adds up the numbers in the range
      - It returns the largest number in the range
      - It counts every cell that is not empty
      - It counts only the cells that contain numbers
    answer: 3
    explanation: COUNT ignores blank cells and text and tallies only the cells holding numeric values. SUM adds the values, MAX returns the largest of them, and COUNTA is the function that counts every non-empty cell.
    keyConcept: "Excel functions: SUM adds, AVERAGE gives the mean, COUNT counts numbers, COUNTA counts non-blanks, MIN and MAX give extremes, IF tests a condition"
    examTip: COUNT against COUNTA is the favourite trap; text and empty cells are tallied only by COUNTA.
    testedIn:
      - PPSC
      - NTS
  - id: 9
    question: Which one of the following is an operating system rather than an application program?
    options:
      - Linux
      - Microsoft Excel
      - Microsoft Word
      - A PDF reader
    answer: 0
    explanation: Linux is a family of Unix-like operating systems that manage the hardware, memory, files and processes of a computer and provide the platform on which programs run. Excel, Word and a PDF reader are application software that can only run on top of an operating system.
    keyConcept: System software (operating system, device drivers, compilers) versus application software (word processor, spreadsheet, browser)
    examTip: Usual operating system names in these tests are MS-DOS, Windows, Linux, Unix, macOS and Android; almost anything else named is an application.
    testedIn:
      - PPSC
      - FPSC
      - NTS
  - id: 10
    question: In Microsoft PowerPoint, what does pressing the F5 key do?
    options:
      - It opens the Save As dialog box
      - It starts the slide show from the first slide
      - It begins the spelling check
      - It inserts a new slide
    answer: 1
    explanation: F5 runs the presentation as a slide show from the beginning, whereas Shift+F5 starts it from the slide currently on screen. The Save As dialog is opened with F12, the spelling check with F7 and a new slide with Ctrl+M.
    keyConcept: "PowerPoint keys: F5 slide show from start, F12 Save As, F7 spell check, Ctrl+M new slide"
    examTip: The very same F5 key refreshes the view in a file-management window, so read which application the question names.
    testedIn:
      - PPSC
      - NTS
  - id: 11
    question: Which one of the following is NOT an input device?
    options:
      - Scanner
      - Keyboard
      - Plotter
      - Mouse
    answer: 2
    explanation: A plotter is an output device that draws vector artwork such as engineering drawings on large rolls or sheets of paper. The scanner, keyboard and mouse all send data into the computer, as do OMR boards and barcode readers.
    keyConcept: "Input devices: keyboard, mouse, scanner, OCR/OMR, joystick, light pen; output devices: monitor, printer, plotter, speaker"
    examTip: A touch screen and a modem are both input and output, and questions on the double role are common.
    testedIn:
      - NTS
      - PPSC
  - id: 12
    question: In Excel, which function searches for a value in the first column of a table and returns a value from another column of the same row?
    options:
      - SUMIF
      - COUNTIF
      - IF
      - VLOOKUP
    answer: 3
    explanation: VLOOKUP, meaning vertical lookup, scans the leftmost column of a range and returns the entry from a column number you specify in that same row. SUMIF adds and COUNTIF tallies only the cells that satisfy a condition, while IF returns one of two results from a logical test.
    keyConcept: VLOOKUP = vertical table lookup returning a value from the matched row; HLOOKUP performs the same task across rows
    examTip: "The V stands for vertical: the value you search for must lie to the left of the column you want returned."
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: "In the desktop versions of Microsoft Office programs, the function key F12 opens:"
    options:
      - The Save As dialog box
      - The Help window
      - The Find dialog box
      - The Print preview
    answer: 0
    explanation: F12 opens Save As, so the file can be stored under a new name or in another format. F1 opens Help, Ctrl+F opens Find and Ctrl+P opens the print dialog, while Ctrl+S saves the file under its existing name.
    keyConcept: "Office function keys: F1 help, F5 slide show or go to, F7 spell check, F12 Save As"
    examTip: Alt+Tab switches between programs already open and Alt+F4 closes the current one; neither of them is a function key.
    testedIn:
      - PPSC
      - NTS
  - id: 14
    question: A Microsoft PowerPoint presentation saved in the Office Open XML format uses which file extension?
    options:
      - .docx
      - .xlsx
      - .pdf
      - .pptx
    answer: 3
    explanation: The.pptx extension marks a PowerPoint presentation in the XML-based format,.docx is a Word document and.xlsx an Excel workbook, while.pdf is the layout-preserving Portable Document Format introduced by Adobe. The earlier binary formats were saved as.ppt,.doc and.xls.
    keyConcept: Common extensions:.docx Word,.xlsx Excel,.pptx PowerPoint,.pdf document,.zip archive,.jpg/.png/.gif images,.mp3 audio,.mp4 video
    examTip: The trailing x marks the XML-based Office formats (docx, xlsx, pptx); the legacy formats carried no x.
    testedIn:
      - NTS
      - FPSC
  - id: 15
    question: Which of the following are components of Central Processing Unit (CPU)?
    options:
      - A.Arithmetic logic unit, Mouse
      - B.Arithmetic logic unit, Control unit
      - C.Arithmetic logic unit, Integrated Circuits
      - D.Control Unit, Monitor
    answer: 1
    explanation: Arithmetic logic unit, Control unit
    keyConcept: Computer Fundamentals & Hardware
  - id: 16
    question: What is the main difference between a mainframe and a super computer?
    options:
      - A.Super computer is much larger than mainframe computers
      - B.Super computers are much smaller than mainframe computers
      - C.Supercomputers are focused to execute few programs as fast as possible while mainframe uses its power to execute as many programs concurrently
      - D.Supercomputers are focused to execute as many programs as possible while mainframe uses its power to execute few programs as fast as possible.
    answer: 2
    explanation: Supercomputers are focused to execute few programs as fast as possible while mainframe uses its power to execute as many programs concurrently
    keyConcept: Computer Fundamentals & Hardware
---

## About this set

Practice MCQs on computer memory, hardware and software, number systems, Excel functions and MS Office shortcut keys for PPSC, FPSC, NTS and CSS recruitment tests, with explanations for every answer.
