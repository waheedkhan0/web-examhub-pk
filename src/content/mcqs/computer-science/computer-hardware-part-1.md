---
title: Computer Hardware — Part 1 MCQs with Explanations
description: Practice high-yield Computer Science & IT MCQs on Computer Hardware — Part 1 with worked academic solutions for PPSC, FPSC, CSS, PMS, NTS.
subject: computer-science
subjectName: Computer Science & IT
topic: computer-hardware-part-1
topicName: Computer Hardware — Part 1
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
    question: From what location are the 1st computer instructions available on boot up?
    options:
      - ROM BIOS
      - CPU
      - boot.ini
      - CONFIG.SYS
      - None of the above
    answer: 0
    explanation: During boot-up, the first computer instructions are typically fetched from the ROM BIOS (Read-Only Memory Basic Input/Output System). ROM BIOS contains firmware that initializes hardware components and performs the initial loading of the operating system. It is a crucial component of the boot process, responsible for tasks such as POST (Power-On Self Test), hardware initialization, and loading the bootloader. The BIOS resides on a ROM chip on the motherboard and is essential for the computer to start up properly. Therefore, the first set of instructions during boot-up comes from the ROM BIOS.
    keyConcept: Computer Hardware
    testedIn:
      - PPSC
      - FPSC
  - id: 2
    question: What could cause a fixed disk error.
    options:
      - No-CD installed
      - bad ram
      - slow processor
      - Incorrect CMOS settings
      - None of the above
    answer: 3
    explanation: A fixed disk error can occur due to Incorrect CMOS settings . The CMOS (Complementary Metal-Oxide-Semiconductor) settings store vital system configuration information, including hard drive parameters. If the CMOS settings related to the fixed disk (hard drive) are incorrect or corrupted, the system may encounter difficulties accessing or recognizing the hard drive, leading to a fixed disk error. This error can manifest during the boot process or when attempting to access files stored on the hard drive. Issues such as a no-CD installed, bad RAM, or a slow processor are not directly related to fixed disk errors. Therefore, the correct option is Incorrect CMOS settings.
    keyConcept: Computer Hardware
    testedIn:
      - PPSC
      - FPSC
  - id: 3
    question: Missing slot covers on a computer can cause?
    options:
      - over heat
      - power surges
      - EMI.
      - incomplete path for ESD
      - None of the above
    answer: 3
    explanation: Missing slot covers on a computer can cause an incomplete path for ESD (Electrostatic Discharge). Slot covers are designed to shield internal components from ESD, which can damage sensitive electronic circuits. When slot covers are missing, there is a gap in the enclosure, allowing for easier access of static electricity to sensitive components such as expansion cards. This increases the risk of ESD damage to the components, which can lead to malfunctions or permanent hardware failure. Issues such as overheating, power surges, or electromagnetic interference (EMI) are not directly caused by missing slot covers. Therefore, the correct option is an incomplete path for ESD.
    keyConcept: Computer Hardware
    testedIn:
      - PPSC
      - FPSC
  - id: 4
    question: When installing PCI NICS you can check the IRQ availability by looking at
    options:
      - Dip switches
      - CONFIG.SYS
      - Jumper settings
      - Motherboard BIOS
      - None of the above
    answer: 2
    explanation: When installing PCI NICs (Network Interface Cards), you can check the IRQ (Interrupt Request) availability by looking at the jumper settings . IRQs are essential resources that devices use to communicate with the CPU. Each device requires a unique IRQ to function properly without conflicts. Jumper settings on the NIC allow you to configure the IRQ assigned to the card. By adjusting these jumpers, you can ensure that the NIC doesn't conflict with other devices already using IRQs in the system. Dip switches and CONFIG.SYS are not typically used for configuring IRQs for PCI NICs. The motherboard BIOS can provide information about IRQ assignments but usually doesn't allow direct configuration of individual device IRQs. Therefore, the correct option is jumper settings.
    keyConcept: Computer Hardware
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: With respect to a network interface card, the term 10/100 refers to
    options:
      - protocol speed
      - a fiber speed
      - megabits per seconds
      - minimum and maximum server speed
      - None of the above
    answer: 2
    explanation: With respect to a network interface card, the term 10/100 refers to megabits per second . This term specifies the maximum data transfer rate supported by the network interface card. In this context, "10/100" indicates that the NIC supports both 10 Mbps (megabits per second) and 100 Mbps Ethernet speeds. It's a common feature in network interface cards to support multiple data transfer rates to accommodate various network environments. The term does not refer to a specific protocol speed, fiber speed, or server speed. Therefore, the correct option is megabits per second.
    keyConcept: Computer Hardware
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: Which Motherboard form factor uses one 20 pin connector
    options:
      - ATX
      - AT
      - BABY AT
      - All of the above
      - None of the above
    answer: 2
    explanation: The BABY AT motherboard form factor uses one 20-pin connector . This connector is typically used for supplying power from the power supply unit to the motherboard. ATX motherboards, in contrast, usually use a 24-pin connector for power. The AT form factor is an older standard and uses a different connector configuration. Therefore, the correct option is BABY AT.
    keyConcept: Computer Hardware
    testedIn:
      - PPSC
      - FPSC
  - id: 7
    question: "A hard disk is divided into tracks which are further subdivided into:"
    options:
      - clusters
      - sectors
      - vectors
      - heads
      - None of the above
    answer: 1
    explanation: A hard disk is divided into tracks, which are further subdivided into sectors . Sectors are the smallest unit of storage on a hard disk and typically contain 512 bytes or 4 kilobytes of data. When data is written to or read from a hard disk, it is done at the sector level. Clusters are groups of sectors, used by the file system to manage and allocate disk space, but they are not the fundamental subdivision of tracks. Vectors and heads are not subdivisions used within the structure of a hard disk. Therefore, the correct option is sectors.
    keyConcept: Computer Hardware
    testedIn:
      - PPSC
      - FPSC
  - id: 8
    question: "A wrist grounding strap contains which of the following:"
    options:
      - Surge protector
      - Capacitor
      - Voltmeter
      - Resistor
      - None of the above
    answer: 3
    explanation: A wrist grounding strap contains a resistor . The purpose of a wrist grounding strap is to prevent the buildup of static electricity on the body and discharge it safely to ground. The resistor in the grounding strap ensures that the discharge is gradual, preventing sudden surges of static electricity that could damage electronic components. Surge protectors, capacitors, and voltmeters are not typically components of a wrist grounding strap. Therefore, the correct option is resistor.
    keyConcept: Computer Hardware
    testedIn:
      - PPSC
      - FPSC
  - id: 9
    question: Which standard govern parallel communications?
    options:
      - RS232
      - RS-232a
      - CAT 5
      - IEEE 1284
      - None of the above
    answer: 3
    explanation: The standard governing parallel communications is IEEE 1284 . IEEE 1284 specifies the electrical and signaling characteristics of parallel ports, commonly used for connecting printers and other devices to computers. RS-232 and RS-232a are standards for serial communication, not parallel communication. CAT 5 is a standard for Ethernet cables used in networking, also not related to parallel communication. Therefore, the correct option is IEEE 1284.
    keyConcept: Computer Hardware
    testedIn:
      - PPSC
      - FPSC
  - id: 10
    question: In laser printer technology, what happens during the conditioning stage?
    options:
      - The corona wire places a uniform positive charge on the paper
      - A uniform negative charge is placed on the photosensitive drum
      - A uniform negative charge is placed on the toner
      - All of the above
      - None of the above
    answer: 0
    explanation: In laser printer technology, during the conditioning stage, a uniform negative charge is placed on the photosensitive drum . The photosensitive drum is a key component in laser printing, where the image to be printed is formed. During the conditioning stage, the drum is uniformly charged to prepare it for the subsequent steps of the printing process. The corona wire is typically responsible for charging the drum negatively. A uniform positive charge is not placed on the paper or the toner during the conditioning stage. Therefore, the correct option is a uniform negative charge is placed on the photosensitive drum.
    keyConcept: Computer Hardware
    testedIn:
      - PPSC
      - FPSC
  - id: 11
    question: What product is used to clean smudged keys on a keyboard?
    options:
      - TMC solvent
      - Silicone spray
      - Denatured alcohol
      - All-purpose cleaner
      - None of the above
    answer: 2
    explanation: Denatured alcohol is commonly used to clean smudged keys on a keyboard. It is effective in removing oils, dirt, and grime from keyboard keys without damaging the plastic or rubber components. TMC solvent and silicone spray are not typically used for cleaning keyboard keys. An all-purpose cleaner may be too harsh for delicate electronic components and is not recommended for cleaning keyboards. Therefore, the correct option is denatured alcohol.
    keyConcept: Computer Hardware
    testedIn:
      - PPSC
      - FPSC
  - id: 12
    question: ESD would cause the most damage to which component?
    options:
      - Power supply
      - Expansion board
      - Monitor
      - Keyboard
      - None of the above
    answer: 1
    explanation: ESD (Electrostatic Discharge) would cause the most damage to the Expansion board . Expansion boards, such as graphics cards, network cards, and sound cards, are particularly vulnerable to damage from static electricity. When not handled properly, ESD can discharge through these components, causing irreversible damage to sensitive circuits. While other components like the power supply, monitor, and keyboard can also be affected by ESD, expansion boards are typically more susceptible due to their intricate circuitry and exposed connectors. Therefore, the correct option is Expansion board.
    keyConcept: Computer Hardware
    testedIn:
      - PPSC
      - FPSC
  - id: 13
    question: "To view any currently running Terminate Stay Resident (TSR's) programs you could type:"
    options:
      - Memory
      - MEM
      - SYS /M
      - Memmaker
      - None of the above
    answer: 1
    explanation: To view any currently running Terminate Stay Resident (TSR) programs, you could type MEM . The MEM command in MS-DOS displays information about memory usage, including details about currently loaded TSR programs. TSR programs remain in memory even after their initial execution and can be viewed using the MEM command. Options such as SYS /M and Memmaker are not used for viewing currently running TSR programs. Therefore, the correct option is MEM.
    keyConcept: Computer Hardware
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: Which type of system board is the MOST likely candidate for processor upgrading if you want maximum performance and future compatibility?
    options:
      - ML
      - PCI
      - ISA
      - EISA
      - None of the above
    answer: 0
    explanation: The ML (MicroATX or Mini-ATX) type of system board is the MOST likely candidate for processor upgrading if you want maximum performance and future compatibility. MicroATX boards are designed to be compact while offering performance and compatibility similar to their larger ATX counterparts. They often feature modern processor sockets such as Intel's LGA 115x or AMD's AM4, allowing for easy CPU upgrades. PCI, ISA, and EISA are expansion bus standards and are not directly related to processor compatibility and upgrading. Therefore, the correct option is ML.
    keyConcept: Computer Hardware
    testedIn:
      - PPSC
      - FPSC
  - id: 15
    question: Suppose that you have a the maintenance package identifies several possible field replaceable units (FRUs) that will resolve the problem. What should you do after turning the power off?
    options:
      - Replace the indicated parts, one at a time in the recommended sequence, until the problem is resolved; return unused FRUs to stock
      - Replace all of the indicated FRUs at once and return the machine to the customer if the problem is resolved
      - Follow the same procedure as in ays replace the system board first if it is on the list of possible FRUs If multiple FRUs are indicated, then software is the most likely source of the problem
      - None of the above
    answer: 0
    explanation: "After turning off the power and if the maintenance package identifies several possible field replaceable units (FRUs) that will resolve the problem, you should: Replace the indicated parts, one at a time in the recommended sequence, until the problem is resolved. This approach helps to systematically identify and address the faulty component without causing additional issues. Return unused FRUs to stock ensures that unused replacement parts are not wasted and can be used for future repairs. Option B suggests replacing all indicated FRUs at once, which might not be practical or efficient, especially if only one component is faulty. Option C mentions replacing the system board first, which may not always be the correct approach and does not address the systematic replacement of components. Therefore, the correct option is to replace the indicated parts one at a time until the problem is resolved and return unused FRUs to stock."
    keyConcept: Computer Hardware
    testedIn:
      - PPSC
      - FPSC
  - id: 16
    question: Most PCs give a single beep on bootup to indicate they are ok hardware wise. You boot your PC and don't get a beep. What should you check first?
    options:
      - system board
      - RAM
      - microprocessor
      - power supply
      - speaker
    answer: 4
    explanation: Most PCs give a single beep on bootup to indicate they are okay hardware-wise. If you boot your PC and don't get a beep, you should check the speaker first. The absence of the beep could indicate a problem with the speaker itself, preventing it from producing the beep code that signifies normal bootup. Checking the speaker connections and ensuring it is properly connected to the motherboard or sound card can help diagnose if the lack of beep is due to a faulty speaker. While issues with the system board, RAM, microprocessor, and power supply can also cause boot problems, the absence of the beep specifically points to a potential issue with the speaker. Therefore, the correct option is the speaker.
    keyConcept: Computer Hardware
    testedIn:
      - PPSC
      - FPSC
  - id: 17
    question: Which peripheral port provides the FASTEST throughput to laser printers?
    options:
      - RS-232
      - SCSI
      - Parallel
      - Serial
      - None of the above
    answer: 1
    explanation: Among the given options, the peripheral port that provides the FASTEST throughput to laser printers is SCSI (Small Computer System Interface). SCSI offers high-speed data transfer rates and is commonly used for connecting high-performance devices such as laser printers. While options such as RS-232, Parallel, and Serial ports are also used for printer connectivity, SCSI typically offers faster throughput, making it ideal for laser printers requiring quick data transmission. Therefore, the correct option is SCSI.
    keyConcept: Computer Hardware
    testedIn:
      - PPSC
      - FPSC
  - id: 18
    question: The mouse pointer moves erratically, what is the possible cause? The mouse
    options:
      - ball is dirty
      - is not connected
      - driver is not installed properly
      - has an incorrect IRQ setting
      - None of the above
    answer: 0
    explanation: If the mouse pointer moves erratically, a possible cause could be that the ball is dirty . Traditional mechanical mice use a rubber ball inside to track movement. If this ball becomes dirty, it can cause irregular movement of the mouse pointer. Cleaning the mouse ball and the internal rollers usually resolves this issue. Options B, C, and D are less likely causes for erratic mouse movement. A mouse not being connected, driver issues, or incorrect IRQ settings would typically result in the mouse not functioning at all, rather than erratic movement. Therefore, the correct option is the ball is dirty.
    keyConcept: Computer Hardware
    testedIn:
      - PPSC
      - FPSC
  - id: 19
    question: "Voltage's measured:"
    options:
      - in parallel
      - in series
      - after breaking the circuit
      - after checking resistance
      - after checking current
    answer: 1
    explanation: Voltage is measured in series . When measuring voltage, the voltmeter is connected in parallel with the component or circuit being measured. In a series circuit, the voltage across each component adds up to the total voltage of the circuit. Therefore, to measure the voltage accurately, the voltmeter needs to be connected in series
    keyConcept: Computer Hardware
    testedIn:
      - PPSC
      - FPSC
  - id: 20
    question: Your customer tells you the print quality of their dot matrix printer is light then dark. Which of the following could cause the problem.
    options:
      - Paper slippage
      - Improper ribbon advancement
      - Paper thickness
      - Head position
      - None of the above
    answer: 1
    explanation: If the print quality of a dot matrix printer is light then dark, improper ribbon advancement could be the cause of the problem. The ribbon in a dot matrix printer transfers ink onto the paper, and if it advances improperly, it may result in inconsistent ink distribution, leading to variations in print darkness. Options such
    keyConcept: Computer Hardware
    testedIn:
      - PPSC
      - FPSC
  - id: 21
    question: The 34-pin connection on an I/O card is for?
    options:
      - Floppy drive
      - SCSI drive
      - IDE drive
      - Zip drive
      - None of the above
    answer: 0
    explanation: "The 34-pin connection on an I/O card is specifically designed for connecting floppy drives. Floppy drives were common in older computer systems and used a 34-pin ribbon cable to connect to the I/O card. This type of connection is distinct from other types of drives: SCSI drives typically use 50-pin or 68-pin connectors. IDE drives use a 40-pin connector. Zip drives can use different connectors such as 25-pin or 50-pin SCSI connectors depending on the model. Therefore , the 34-pin connection on an I/O card is specifically associated with floppy drives, making Option A the correct answer."
    keyConcept: Computer Hardware
    testedIn:
      - PPSC
      - FPSC
  - id: 22
    question: "The terms \"red book\", \"yellow book\", and \"orange book\" refer to:"
    options:
      - SCSI
      - ide
      - floppy drive technology
      - CD-ROM standards
      - All of the above
    answer: 3
    explanation: "The terms \"red book\", \"yellow book\", and \"orange book\" are used to refer to various CD-ROM standards: Red Book: Defines the standard for audio CDs, including the format for storing audio tracks and subcode data. Yellow Book: Defines the standard for CD-ROMs used for storing data, including file systems like ISO 9660. Orange Book: Defines the standards for recordable and rewritable CD media, such as CD-R and CD-RW. These standards are crucial in determining how data and audio are formatted and stored on CD-ROMs, making Option D the correct answer."
    keyConcept: Computer Hardware
    testedIn:
      - PPSC
      - FPSC
  - id: 23
    question: On the 16-bit ISA bus, IRQ2 is elevated to which higher level Interrupt?
    options:
      - "9"
      - "11"
      - "13"
      - "15"
      - None of the above
    answer: 0
    explanation: On the 16-bit ISA bus , IRQ2 is cascaded or elevated to IRQ9 as a higher-level interrupt. This means that devices that originally used IRQ2 on the ISA bus would use IRQ9 instead to avoid conflicts and manage interrupts effectively. The IRQ levels on the ISA bus are cascaded in this manner to accommodate more devices and prevent interrupt conflicts. Therefore , on the 16-bit ISA bus, IRQ2 is elevated to IRQ9, making Option A the correct answer.
    keyConcept: Computer Hardware
    testedIn:
      - PPSC
      - FPSC
  - id: 24
    question: What beep codes could indicate a system board or power supply failure?
    options:
      - steady short beep
      - no beep
      - one long continuous beep tone
      - steady long beeps
      - All of the above
    answer: 4
    explanation: "Beep codes are used by computers during the boot process to indicate various hardware errors, including system board or power supply failures. Steady short beep: This can indicate various issues, including motherboard or power supply problems. No beep: Typically indicates a power supply or motherboard issue, as the system may not be starting up properly. One long continuous beep tone: Often indicates a power supply or motherboard failure, as the system cannot initialize properly. Steady long beeps: Can indicate critical motherboard or power supply failures that prevent the system from booting. Therefore , all of the provided beep codes (steady short beep, no beep, one long continuous beep tone, and steady long beeps) could indicate a system board or power supply failure, making Option E the correct answer."
    keyConcept: Computer Hardware
    testedIn:
      - PPSC
      - FPSC
  - id: 25
    question: After doing a low-level format, what would be the next step in configuring the hard drive in a system?
    options:
      - Format DOS partition
      - Install operating system
      - Configure DMA channel and back-up interrupt
      - Partition hard disk
      - None of the above
    answer: 3
    explanation: "Step 1: Low-level formatting A low-level format (also known as a physical format) is the process that prepares the physical surface of a hard disk to store data. It divides the disk into tracks and sectors that the drive controller uses to read and write information. This process is usually done at the factory, but in older systems, users could perform it manually to repair or reinitialize the disk. After a low-level format, the hard disk is physically ready but cannot yet store files or run an operating system because it lacks logical structures like partitions or file systems. Step 2: Partitioning the hard disk The next logical step after low-level formatting is to partition the hard disk . Partitioning divides the disk into one or more logical sections called partitions . Each partition acts as an independent logical drive (for example, C:, D:, etc.). During this step, the partition table is created in the Master Boot Record (MBR) or GUID Partition Table (GPT) , which allows the computer to identify and manage each section of the disk. Without partitioning, the operating system cannot determine where to store files or how to organize the data structure on the disk. Step 3: High-level formatting (Formatting the partition) Once partitions are created, each one must be high-level formatted (also called logical formatting ). This step is sometimes described in older terminology as \"Format DOS partition\" (Option A). High-level formatting creates the file system (such as FAT32, NTFS, ext4, etc.) within a partition, enabling the operating system to store and retrieve files effectively. Step 4: Installing the operating system After high-level formatting, the system is finally ready to install the operating system (Option B). The OS setup program uses the formatted partition(s) to copy system files and configure the boot structure. Conclusion The correct chronological sequence of steps is: Low-level format → Partition hard disk → Format DOS partition → Install operating system Therefore, immediately after performing a low-level format, the next step is to partition the hard disk . Hence, the correct answer is Option D: Partition hard disk ."
    keyConcept: Computer Hardware
    testedIn:
      - PPSC
      - FPSC
  - id: 26
    question: The ATAPI compliance is stands for?
    options:
      - CDROM
      - Bus mastering
      - Mass storage device
      - All of the above
      - None of the above
    answer: 3
    explanation: ATAPI (Advanced Technology Attachment Packet Interface) is an extension of the ATA (IDE) standard that allows the connection of additional storage and multimedia devices. It supports devices like CD-ROM drives, DVD drives, tape drives, and other mass storage devices. Bus mastering is also a feature of ATAPI that allows devices to transfer data directly to and from memory without heavily relying on the CPU. Since ATAPI compliance includes CD-ROM, Bus mastering, and Mass storage devices , the correct answer is All of the above.
    keyConcept: Computer Hardware
    testedIn:
      - PPSC
      - FPSC
  - id: 27
    question: What is the size of the reserved memory area?
    options:
      - 64 kb
      - 384 kb
      - 640 kb
      - 1024 kb
      - None of the above
    answer: 1
    explanation: In DOS memory management, the upper memory area (UMA) refers to memory between the addresses of 640 KB and 1024 KB (0xA0000–0xFFFFF) in an IBM PC or compatible. IBM reserved the uppermost 384 KB of the 8088 CPU's 1024 KB address space for ROM, RAM on peripherals, and memory-mapped input/output.
    keyConcept: Computer Hardware
    testedIn:
      - PPSC
      - FPSC
  - id: 28
    question: Which part of the laser printer should NOT be exposed to sunlight?
    options:
      - Transfer corona assembly
      - PC drum
      - Primary corona wire
      - Toner cartridge
      - None of the above
    answer: 1
    explanation: PC drum is the correct answer to “Which part of the laser printer should NOT be exposed to sunlight”. This question is standard in competitive examination syllabi for Computer Hardware.
    keyConcept: Computer Hardware
    testedIn:
      - PPSC
      - FPSC
  - id: 29
    question: Resistance is measured in ?
    options:
      - Volts
      - Amps
      - Watts
      - Ohms
      - None of the above
    answer: 3
    explanation: Ohms is the correct answer to “Resistance is measured in”. This question is standard in competitive examination syllabi for Computer Hardware.
    keyConcept: Computer Hardware
    testedIn:
      - PPSC
      - FPSC
  - id: 30
    question: What command is used to reset a MODEM when using the "AT Command Set"?
    options:
      - ATR
      - ATZ
      - DTR
      - DCE
      - None of the above
    answer: 1
    explanation: ATZ is the correct answer to “What command is used to reset a MODEM when using the "AT Command Set"”. This question is standard in competitive examination syllabi for Computer Hardware.
    keyConcept: Computer Hardware
    testedIn:
      - PPSC
      - FPSC
  - id: 31
    question: "When installing a SCSI CD-ROM drive, you must set the CD-ROM SCSI adapter to:"
    options:
      - B0007
      - An unused SCSI address
      - The same address as the SCSI device before the CD-ROM
      - SCSI ID=1
      - None of the above
    answer: 1
    explanation: An unused SCSI address is the correct answer to “When installing a SCSI CD-ROM drive, you must set the CD-ROM SCSI adapter to:”. This question is standard in competitive examination syllabi for Computer Hardware.
    keyConcept: Computer Hardware
    testedIn:
      - PPSC
      - FPSC
  - id: 32
    question: Pick the correct choice for the 80386SXCPU.
    options:
      - 16 bit word size, 16 bit data path
      - 32 bit word size, 16 bit data path
      - 8 bit word size, 32 bit data path
      - 32 bit word size, 8 bit data path
      - 32 bit word size, 32 bit data path
    answer: 1
    explanation: 32 bit word size, 16 bit data path is the correct answer to “Pick the correct choice for the 80386SXCPU.”. This question is standard in competitive examination syllabi for Computer Hardware.
    keyConcept: Computer Hardware
    testedIn:
      - PPSC
      - FPSC
  - id: 33
    question: In Inkjet technology the droplets of ink are deflected by?
    options:
      - multi directional nozzles
      - electronically charged plates
      - high pressure plates
      - electro static absorbtion
      - None of the above
    answer: 0
    explanation: multi directional nozzles is the correct answer to “In Inkjet technology the droplets of ink are deflected by”. This question is standard in competitive examination syllabi for Computer Hardware.
    keyConcept: Computer Hardware
    testedIn:
      - PPSC
      - FPSC
  - id: 34
    question: When your hard drive crashes from any of the correct selections in the question above, or from dropping it, it is known as head-to-disk interference, or HDL
    options:
      - "True"
      - "FALSE"
      - loop backs (wrap plugs)
      - sniffer
      - None of the above
    answer: 0
    explanation: True is the correct answer to “When your hard drive crashes from any of the correct selections in the question above, or from dropping it, it is known as head-to-disk interference, or HDL”. This question is standard in competitive examination syllabi for Computer Hardware.
    keyConcept: Computer Hardware
    testedIn:
      - PPSC
      - FPSC
  - id: 35
    question: What tool is used to test serial and parallel ports?
    options:
      - high volt probe
      - cable scanner
      - loop backs (wrap plugs)
      - sniffer
      - None of the above
    answer: 2
    explanation: loop backs (wrap plugs) is the correct answer to “What tool is used to test serial and parallel ports”. This question is standard in competitive examination syllabi for Computer Hardware.
    keyConcept: Computer Hardware
    testedIn:
      - PPSC
      - FPSC
  - id: 36
    question: What is the highest binary number that can be referred to on a three position jumper block?
    options:
      - "4"
      - "6"
      - F
      - "1"
      - None of the above
    answer: 3
    explanation: 1 is the correct answer to “What is the highest binary number that can be referred to on a three position jumper block”. This question is standard in competitive examination syllabi for Computer Hardware.
    keyConcept: Computer Hardware
    testedIn:
      - PPSC
      - FPSC
  - id: 37
    question: What voltage does a Pentium system use?
    options:
      - +12 volts
      - + 5 volts
      - + 8 volts
      - +3.3 volts
      - None of the above
    answer: 3
    explanation: +3.3 volts is the correct answer to “What voltage does a Pentium system use”. This question is standard in competitive examination syllabi for Computer Hardware.
    keyConcept: Computer Hardware
    testedIn:
      - PPSC
      - FPSC
  - id: 38
    question: "A numeric error code check: A 17xx indicates a problem with:"
    options:
      - CMOS
      - ROM BIOS
      - DMA controller
      - hard drive or controller
      - power supply
    answer: 3
    explanation: "hard drive or controller is the correct answer to “A numeric error code check: A 17xx indicates a problem with:”. This question is standard in competitive examination syllabi for Computer Hardware."
    keyConcept: Computer Hardware
    testedIn:
      - PPSC
      - FPSC
  - id: 39
    question: Which provides the fastest access to large video files?
    options:
      - Optical drives
      - IDE hard drives
      - SCSI hard drives
      - EIDE hard drives
      - None of the above
    answer: 2
    explanation: SCSI hard drives is the correct answer to “Which provides the fastest access to large video files”. This question is standard in competitive examination syllabi for Computer Hardware.
    keyConcept: Computer Hardware
    testedIn:
      - PPSC
      - FPSC
  - id: 40
    question: "A 25-pin female connector on the back of your computer will typically be:"
    options:
      - Serial port 1
      - A parallel port
      - Docking
      - COM2 port
      - None of the above
    answer: 1
    explanation: A parallel port is the correct answer to “A 25-pin female connector on the back of your computer will typically be:”. This question is standard in competitive examination syllabi for Computer Hardware.
    keyConcept: Computer Hardware
    testedIn:
      - PPSC
      - FPSC
---


