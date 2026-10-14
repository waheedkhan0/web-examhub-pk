---
title: Computer Architecture — Part 1 MCQs with Explanations
description: Practice high-yield Computer Science & IT MCQs on Computer Architecture — Part 1 with worked academic solutions for PPSC, FPSC, CSS, PMS, NTS.
subject: computer-science
subjectName: Computer Science & IT
topic: computer-architecture-part-1
topicName: Computer Architecture — Part 1
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
    question: Which of the following is not a component of Von Neumann architecture?
    options:
      - CPU
      - ALU
      - Memory Unit
      - I/O Interface
    answer: 3
    explanation: "Option A: CPU This is a component of Von Neumann architecture. The CPU (Central Processing Unit) is responsible for executing instructions. Option B: ALU This is a component of Von Neumann architecture. The ALU (Arithmetic Logic Unit) performs arithmetic and logical operations. Option C: Memory Unit This is a component of Von Neumann architecture. The Memory Unit stores data and instructions that the CPU can access. Option D: I/O Interface This option is correct. The I/O Interface is not typically considered a core component of Von Neumann architecture. It facilitates communication between the computer and external devices but is not part of the fundamental CPU-memory interaction that defines Von Neumann architecture. Conclusion: Among the options given, Option D: I/O Interface is not a component of Von Neumann architecture, making it the correct answer."
    keyConcept: Computer Architecture
    testedIn:
      - PPSC
      - FPSC
  - id: 2
    question: What does SIMD stand for in computer architecture?
    options:
      - Single Input Multiple Drive
      - Single Input Multiple Data
      - Single Instruction Multiple Drive
      - Single Instruction Multiple Data
    answer: 3
    explanation: "Option A: Single Input Multiple Drive This option is incorrect and does not represent the correct acronym in computer architecture. Option B: Single Input Multiple Data This option is incorrect. While similar, the correct term for SIMD is slightly different. Option C: Single Instruction Multiple Drive This option is incorrect and does not correspond to the standard term used in computer architecture. Option D: Single Instruction Multiple Data This is the correct answer. SIMD stands for Single Instruction Multiple Data. It refers to a type of parallel computing architecture where multiple processing elements perform the same operation on multiple data points simultaneously. Conclusion: Among the options given, Option D: Single Instruction Multiple Data is the correct expansion of SIMD in computer architecture."
    keyConcept: Computer Architecture
    testedIn:
      - PPSC
      - FPSC
  - id: 3
    question: Which cache is typically smaller and faster compared to others in a computer system?
    options:
      - L2 Cache
      - L3 Cache
      - L1 Cache
      - Virtual Cache
    answer: 2
    explanation: "Option A: L2 Cache L2 Cache is a secondary cache in a computer system, which is larger but slower compared to L1 Cache. Option B: L3 Cache L3 Cache is a tertiary cache in some systems, which is larger but slower compared to both L1 and L2 Caches. Option C: L1 Cache This option is correct. L1 Cache, or Level 1 Cache, is the smallest and fastest cache in a computer system. It is located closest to the CPU and provides the fastest access to frequently used instructions and data. Option D: Virtual Cache Virtual Cache is a concept related to how caching is managed in virtual memory systems and is not a standard cache level in typical computer architectures. Conclusion: Among the options given, Option C: L1 Cache is typically smaller and faster compared to other cache levels in a computer system."
    keyConcept: Computer Architecture
    testedIn:
      - PPSC
      - FPSC
  - id: 4
    question: Which register in the CPU stores the address of the next instruction to be fetched?
    options:
      - Instruction Register
      - Program Counter
      - Accumulator
      - None of the above
    answer: 1
    explanation: "Option A: Instruction Register The Instruction Register (IR) holds the current instruction being executed by the CPU. Option B: Program Counter This option is correct. The Program Counter (PC) is a special-purpose register in the CPU that stores the memory address of the next instruction to be fetched and executed. Option C: Accumulator The Accumulator is a register that stores the results of arithmetic and logical operations performed by the CPU. Conclusion: Among the options given, Option B: Program Counter is the register in the CPU that specifically stores the address of the next instruction to be fetched for execution."
    keyConcept: Computer Architecture
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: What is the purpose of an Arithmetic Logic Unit (ALU) in a CPU?
    options:
      - Control I/O operations
      - Manage memory operations
      - Perform arithmetic and logical operations
      - Store intermediate results
    answer: 2
    explanation: "Option A: Control I/O operations This option is incorrect. I/O operations are typically managed by dedicated controllers or interfaces, not by the Arithmetic Logic Unit (ALU). Option B: Manage memory operations Managing memory operations involves activities such as fetching data from memory or storing data back to memory, which is usually handled by other components such as the Memory Management Unit (MMU) or specific memory controllers, not by the ALU. Option C: Perform arithmetic and logical operations This option is correct. The primary function of the Arithmetic Logic Unit (ALU) in a CPU is to execute arithmetic operations (like addition, subtraction, multiplication, and division) and logical operations (like AND, OR, NOT) on data stored in its registers. Option D: Store intermediate results Storing intermediate results is not the primary function of the ALU. It typically stores results in designated registers or passes them on to other units for further processing. Conclusion: Among the options given, Option C: Perform arithmetic and logical operations correctly describes the main purpose of an Arithmetic Logic Unit (ALU) in a CPU."
    keyConcept: Computer Architecture
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: Which type of memory is non-volatile and used for long-term storage?
    options:
      - RAM
      - ROM
      - Cache Memory
      - Hard Disk
    answer: 1
    explanation: "Option A: RAM RAM (Random Access Memory) is volatile memory used for temporary storage of data and instructions that the CPU needs to access quickly. Option B: ROM This option is correct. ROM (Read-Only Memory) is non-volatile memory used for long-term storage of data and instructions that are permanently stored and cannot be easily modified. It typically holds the firmware of devices and systems. Option C: Cache Memory Cache Memory is volatile memory that acts as a buffer between the CPU and main memory (RAM), used to store frequently accessed data for faster retrieval by the CPU. Option D: Hard Disk Hard Disk is a type of non-volatile secondary storage device used for long-term storage of data on a computer system, but it is not directly considered a type of memory. Conclusion: Among the options given, Option B: ROM is the correct answer because ROM is non-volatile memory that is used for storing data and instructions permanently, making it suitable for long-term storage needs."
    keyConcept: Computer Architecture
    testedIn:
      - PPSC
      - FPSC
  - id: 7
    question: What does the term "pipeline" refer to in computer architecture?
    options:
      - Concurrent execution of multiple instructions
      - A sequence of logic gates
      - Data flow between CPU and RAM
      - A type of CPU cooler
    answer: 0
    explanation: "Option A: Concurrent execution of multiple instructions This option is correct. In computer architecture, a pipeline refers to a technique where multiple stages of an instruction execution process are overlapped, allowing multiple instructions to be processed concurrently. This improves the throughput of instructions. Option B: A sequence of logic gates A pipeline is not a sequence of logic gates. Logic gates are fundamental building blocks of digital circuits that perform Boolean operations. Option C: Data flow between CPU and RAM Data flow between CPU and RAM is related to memory access and data transfer operations, not specifically to the concept of a pipeline. Option D: A type of CPU cooler A pipeline is not related to CPU cooling. CPU cooling refers to methods and devices used to dissipate heat from a CPU to prevent overheating. Conclusion: Among the options given, Option A: Concurrent execution of multiple instructions correctly describes what a pipeline refers to in computer architecture. It allows for efficient and parallel execution of instructions by breaking down the instruction execution process into stages that can overlap."
    keyConcept: Computer Architecture
    testedIn:
      - PPSC
      - FPSC
  - id: 8
    question: Which bus connects the CPU to external devices like RAM and peripherals?
    options:
      - Control Bus
      - Address Bus
      - Data Bus
      - System Bus
    answer: 3
    explanation: "Option D: System Bus The system bus is responsible for connecting the CPU to external devices such as RAM and peripherals. It facilitates the transfer of data between these components, including addresses and control signals. Option A: Control Bus The control bus carries control signals that direct and coordinate activities within the computer's internal operations, such as memory access and I/O operations. Option B: Address Bus The address bus is used by the CPU to specify the address of a memory location or an I/O port. It is used for directing where data should be read from or written to. Option C: Data Bus The data bus is responsible for carrying data between the CPU, memory, and peripherals. It transfers actual data that needs to be processed or stored. Conclusion: Among the options provided, Option D: System Bus specifically refers to the bus that connects the CPU to external devices like RAM and peripherals, enabling data transfer and communication across the entire computer system."
    keyConcept: Computer Architecture
    testedIn:
      - PPSC
      - FPSC
  - id: 9
    question: In a computer system, what does the term "word size" refer to?
    options:
      - Size of the hard disk
      - Length of the RAM module
      - Number of bits processed at once by the CPU
      - Number of processors
    answer: 2
    explanation: "Option C: Number of bits processed at once by the CPU In computer architecture, the term \"word size\" refers to the number of bits that the CPU processes in a single operation or the width of its internal registers. This size determines the amount of data that can be transferred internally between the CPU and RAM, and the size of instructions that the CPU can execute. Option A: Size of the hard disk The size of the hard disk refers to its storage capacity in terms of bytes, typically gigabytes or terabytes, not bits. Option B: Length of the RAM module The length of a RAM module usually refers to its physical size or the amount of data it can store, measured in gigabytes (GB) or megabytes (MB), rather than bits. Option D: Number of processors The term \"word size\" does not relate to the number of processors in a computer system but rather to the data processing capabilities of a single processor. Conclusion: The correct answer, Option C: Number of bits processed at once by the CPU , accurately defines what \"word size\" signifies in the context of computer architecture, focusing on the CPU's ability to handle data in specific bit sizes during operations."
    keyConcept: Computer Architecture
    testedIn:
      - PPSC
      - FPSC
  - id: 10
    question: What is the primary function of the Control Unit (CU) in a CPU?
    options:
      - Executes program instructions
      - Directs operations of the entire computer system
      - Stores data temporarily
      - None of the above
    answer: 1
    explanation: "Option B: Directs operations of the entire computer system The primary function of the Control Unit (CU) in a CPU is to direct and coordinate the operations of the entire computer system. It manages the execution of instructions by fetching them from memory, decoding them, and controlling the data flow between the CPU and other parts of the computer system, including RAM, I/O devices, and the ALU (Arithmetic Logic Unit). The CU also manages the timing and control signals necessary for communication between these components. Option A: Executes program instructions While the CPU as a whole executes program instructions, specifically, it is the combination of the Control Unit (CU) and the Arithmetic Logic Unit (ALU) that executes the instructions. The CU directs this process. Option C: Stores data temporarily This role is typically associated with memory units such as RAM (Random Access Memory) rather than the Control Unit (CU), which primarily handles control and coordination tasks. Conclusion: The correct answer, Option B: Directs operations of the entire computer system , best describes the primary role of the Control Unit (CU) in a CPU, emphasizing its critical function in managing and coordinating the operation of the entire computer system."
    keyConcept: Computer Architecture
    testedIn:
      - PPSC
      - FPSC
  - id: 11
    question: Which addressing mode allows direct access to memory locations without calculating the address?
    options:
      - Indexed Addressing
      - Indirect Addressing
      - Immediate Addressing
      - Direct Addressing
    answer: 3
    explanation: "Option D: Direct Addressing Direct addressing mode allows the CPU to directly access a memory location specified by an address without any further calculations. The memory address is directly provided in the instruction itself. In this mode: - The memory address of the operand is directly specified in the instruction. - The CPU accesses the operand directly from the specified memory location. - It is one of the simplest and fastest addressing modes. Option A: Indexed Addressing Indexed addressing mode involves adding an offset to a base address stored in a register to access a memory location. It requires calculation to determine the final memory address. Option B: Indirect Addressing Indirect addressing mode uses an address held in a register or memory location to indirectly access another memory location where the operand is stored. Option C: Immediate Addressing Immediate addressing mode involves specifying the actual operand value within the instruction itself, rather than specifying a memory address. Conclusion: Among the given options, Option D: Direct Addressing is the correct answer for allowing direct access to memory locations without needing to calculate the address separately. This mode is efficient for accessing specific memory locations directly specified in instructions."
    keyConcept: Computer Architecture
    testedIn:
      - PPSC
      - FPSC
  - id: 12
    question: What is the purpose of a cache memory in a computer system?
    options:
      - Run background processes
      - Maintain file system integrity
      - Execute machine instructions
      - Store frequently accessed data for quick retrieval
    answer: 3
    explanation: "Option D: Store frequently accessed data for quick retrieval Cache memory is designed to store copies of frequently accessed data from main memory (RAM) or instructions from the CPU. Its purpose is to provide faster access to data and instructions that are likely to be needed soon, reducing the average time to access data from the main memory. In this context: - Cache memory operates on the principle of locality, exploiting the fact that most programs access a relatively small portion of memory at any given time. - It helps improve the overall performance of the computer system by reducing the latency involved in accessing data from slower main memory. - Cache memory is typically faster and smaller in size compared to main memory, allowing it to deliver faster data access times. Option A: Run background processes Background processes typically refer to tasks or programs that run independently of the user's direct control. Cache memory is not responsible for running background processes. Option B: Maintain file system integrity File system integrity is primarily managed by the operating system and file system software, ensuring data consistency and reliability. Cache memory does not directly contribute to file system integrity. Option C: Execute machine instructions Execution of machine instructions is handled by the CPU and its components, including the ALU (Arithmetic Logic Unit) and control unit. Cache memory does not execute machine instructions; it stores data and instructions for quicker access. Conclusion: Among the given options, Option D: Store frequently accessed data for quick retrieval accurately describes the purpose of cache memory in a computer system."
    keyConcept: Computer Architecture
    testedIn:
      - PPSC
      - FPSC
  - id: 13
    question: Which type of memory is used to store the BIOS in a computer system?
    options:
      - ROM
      - RAM
      - Cache Memory
      - Virtual Memory
    answer: 0
    explanation: "ROM is the type of memory used to store the BIOS (Basic Input/Output System) in a computer system. The BIOS is firmware that initializes hardware components during the boot process and provides basic functionality for the operating system to load. - ROM is non-volatile memory, meaning its contents are retained even when the computer is powered off. - The BIOS is stored in ROM because it needs to be accessible immediately upon startup to initialize hardware and perform system checks. - ROM is typically smaller in capacity compared to RAM and is used for critical system functions that must not be altered easily. - It is called \"read-only\" because its contents are typically written during manufacturing and cannot be easily modified by normal computer operations. Option B: RAM (Random Access Memory) RAM is volatile memory used for temporary data storage while the computer is running. It loses its contents when the power is turned off, so it is not suitable for storing the BIOS. Option C: Cache Memory Cache memory is used to store frequently accessed data and instructions to reduce access time from slower main memory (RAM). It is not used to store the BIOS. Option D: Virtual Memory Virtual memory is a memory management technique that uses secondary storage (like hard drives) as an extension of RAM. It is not used to store the BIOS. Conclusion: Among the given options, Option A: ROM is the correct answer because ROM is specifically designed to store the BIOS in a computer system, ensuring that it is accessible immediately upon system startup and remains intact even when the computer is powered off."
    keyConcept: Computer Architecture
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: What does RISC stand for in the context of CPU design?
    options:
      - Rapid Integrated System
      - Real-time Instruction Set
      - Random Integrated System
      - Reduced Instruction Set Computer
    answer: 3
    explanation: "Option D: Reduced Instruction Set Computer (RISC) RISC stands for Reduced Instruction Set Computer in the context of CPU design. It is a type of microprocessor design that emphasizes a small and highly optimized set of instructions that can be executed within a single clock cycle. RISC processors focus on simplicity and efficiency by reducing the complexity of instructions compared to Complex Instruction Set Computing (CISC) architectures. - The philosophy behind RISC is to perform operations with a small set of simple instructions that can execute quickly, allowing for faster processing speeds and improved performance. - RISC architectures often employ pipelining and other techniques to maximize throughput and efficiency. - Examples of RISC architectures include ARM (Advanced RISC Machine) and MIPS (Microprocessor without Interlocked Pipeline Stages). Option A: Rapid Integrated System This is not a correct expansion for RISC. RISC specifically refers to the design philosophy of reducing the complexity of instructions, not to any rapid integration system. Option B: Real-time Instruction Set This is not correct. RISC does not relate specifically to real-time computing but rather to the design of CPU architectures. Option C: Random Integrated System This is not correct. RISC does not involve randomness but rather a deliberate reduction in the complexity of instruction sets. Conclusion: Among the given options, Option D: Reduced Instruction Set Computer (RISC) is the correct answer because it accurately describes the design philosophy where CPU architectures emphasize simplicity and efficiency through a reduced and optimized set of instructions."
    keyConcept: Computer Architecture
    testedIn:
      - PPSC
      - FPSC
  - id: 15
    question: What is the purpose of the Memory Management Unit (MMU) in a computer system?
    options:
      - Executes system utilities
      - Monitors CPU temperature
      - Maps logical addresses to physical addresses
      - Allocates RAM efficiently
    answer: 2
    explanation: "Option C: Maps logical addresses to physical addresses The Memory Management Unit (MMU) in a computer system is responsible for translating or mapping logical addresses generated by the CPU into physical addresses in RAM (Random Access Memory). This process allows programs to effectively access and utilize memory resources. Function of MMU: - Address Translation: The primary function of the MMU is to translate logical addresses, which are generated by the CPU, into physical addresses that correspond to actual locations in the computer's memory hardware. - Memory Protection: MMUs often include features for memory protection, ensuring that processes do not interfere with each other's memory space, which enhances system stability and security. - Virtual Memory: MMUs support virtual memory systems by facilitating the mapping of virtual addresses used by applications to physical addresses in RAM or secondary storage, allowing for efficient memory usage and multitasking. - Cache Control: Some MMUs manage memory caches, helping to optimize data access speeds by storing frequently accessed data closer to the CPU. Option A: Executes system utilities This is not correct. MMUs do not execute system utilities; their primary role is memory management and address translation. Option B: Monitors CPU temperature This is not correct. Monitoring CPU temperature is typically the role of hardware sensors and thermal management systems, not the MMU. Option D: Allocates RAM efficiently While MMUs play a role in managing memory allocation through address translation and memory protection, their main function is not specifically to allocate RAM efficiently. Memory allocation tasks are usually handled by the operating system's memory manager. Conclusion: Among the given options, Option C: Maps logical addresses to physical addresses is the correct answer because it accurately describes the primary role of the Memory Management Unit (MMU) in a computer system."
    keyConcept: Computer Architecture
    testedIn:
      - PPSC
      - FPSC
  - id: 16
    question: Which type of memory is used to store data temporarily during program execution?
    options:
      - ROM
      - Cache Memory
      - RAM
      - Hard Disk
    answer: 2
    explanation: "RAM (Random Access Memory) is the primary memory used to store data and instructions temporarily during program execution . RAM is volatile memory , which means that its contents are lost when the computer is switched off or loses power. It provides the CPU with fast access to the data and instructions required while programs are running. Option A: ROM ROM (Read-Only Memory) is non-volatile memory mainly used to store firmware and permanent instructions . Its contents are retained even when the power is turned off. Option B: Cache Memory Cache memory is a very fast, small memory located close to or within the CPU. It stores frequently accessed data and instructions to improve processing speed, but it is not the computer's main memory. Option C: RAM RAM temporarily stores the data, programs, and instructions currently being used by the CPU during program execution. Option D: Hard Disk A hard disk is secondary storage used to store data and programs permanently . It retains data even when the computer is switched off. Hence, Option C — RAM is the correct answer."
    keyConcept: Computer Architecture
    testedIn:
      - PPSC
      - FPSC
  - id: 17
    question: Which type of memory is directly accessed by the CPU during program execution?
    options:
      - Cache Memory
      - RAM
      - Hard Disk
      - None of the above
    answer: 1
    explanation: "The correct answer is B: RAM (Random Access Memory) Let's break down why: A: Cache Memory While the CPU uses cache memory, it's not directly accessed for every instruction. Think of it as a small, super-fast storage for frequently used data from RAM. The CPU first checks the cache. If the data is there (\"cache hit\"), it's used. If not (\"cache miss\"), the CPU fetches it from RAM. B: RAM (Random Access Memory) RAM is the main memory of a computer. When a program is running, its instructions and data are stored in RAM so the CPU can access them quickly and directly. The CPU fetches instructions and data directly from RAM to execute the program. C: Hard Disk The hard disk is for long-term storage. It's much slower than RAM. Programs and data need to be loaded from the hard disk into RAM before the CPU can use them. The CPU does not directly execute code or access data directly from the hard disk. D: None of the above Since RAM is directly accessed, this option is incorrect. In summary: The CPU uses RAM to directly access and execute programs and their data during program execution."
    keyConcept: Computer Architecture
    testedIn:
      - PPSC
      - FPSC
  - id: 18
    question: The final addition sum of the numbers, 0110 & 0110 is . . . . . . . .
    options:
      - "1101"
      - "1111"
      - "1001"
      - "1100"
    answer: 3
    explanation: "Let's break down how to add the binary numbers 0110 and 0110. Binary addition is similar to decimal addition, but with only 0s and 1s. Here's how it works column by column, from right to left: Rightmost column: 0 + 0 = 0 Second column from right: 1 + 1 = 10 (which is 2 in decimal). Write down 0 and carry-over 1. Third column from right: 1 + 1 + 1(carry) = 11(which is 3 in decimal). Write down 1 and carry-over 1. Leftmost column: 0 + 0 + 1 (carry) = 1 Putting it all together, we get 1100. Therefore, the final sum is 1100. So, the correct answer is Option D: 1100 ."
    keyConcept: Computer Architecture
    testedIn:
      - PPSC
      - FPSC
  - id: 19
    question: Which type of memory is volatile and loses its contents when the power is turned off?
    options:
      - Cache Memory
      - RAM
      - Hard Disk
      - None of the above
    answer: 1
    explanation: RAM is the correct answer to “Which type of memory is volatile and loses its contents when the power is turned off”. This question is standard in competitive examination syllabi for Computer Architecture.
    keyConcept: Computer Architecture
    testedIn:
      - PPSC
      - FPSC
  - id: 20
    question: What is the purpose of the Arithmetic Logic Unit (ALU) in a CPU?
    options:
      - Control I/O operations
      - Manage memory operations
      - Perform arithmetic and logical operations
      - Store data temporarily
    answer: 2
    explanation: Perform arithmetic and logical operations is the correct answer to “What is the purpose of the Arithmetic Logic Unit (ALU) in a CPU”. This question is standard in competitive examination syllabi for Computer Architecture.
    keyConcept: Computer Architecture
    testedIn:
      - PPSC
      - FPSC
  - id: 21
    question: What does the term "bit width" refer to in computer architecture?
    options:
      - Size of the hard disk
      - Length of the RAM module
      - Number of processors
      - Number of bits processed at once by the CPU
    answer: 3
    explanation: Number of bits processed at once by the CPU is the correct answer to “What does the term "bit width" refer to in computer architecture”. This question is standard in competitive examination syllabi for Computer Architecture.
    keyConcept: Computer Architecture
    testedIn:
      - PPSC
      - FPSC
  - id: 22
    question: Which bus carries memory addresses that the CPU generates during the execution of a program?
    options:
      - Address Bus
      - System Bus
      - Data Bus
      - Control Bus
    answer: 0
    explanation: Address Bus is the correct answer to “Which bus carries memory addresses that the CPU generates during the execution of a program”. This question is standard in competitive examination syllabi for Computer Architecture.
    keyConcept: Computer Architecture
    testedIn:
      - PPSC
      - FPSC
  - id: 23
    question: What does the term "clock speed" indicate in the context of CPU performance?
    options:
      - Rate of data transfer
      - Size of cache memory
      - Number of cores
      - Speed at which instructions are executed
    answer: 3
    explanation: Speed at which instructions are executed is the correct answer to “What does the term "clock speed" indicate in the context of CPU performance”. This question is standard in competitive examination syllabi for Computer Architecture.
    keyConcept: Computer Architecture
    testedIn:
      - PPSC
      - FPSC
  - id: 24
    question: In a computer system, what is the function of the Address Bus?
    options:
      - Controls the CPU clock
      - Carries memory addresses between CPU and RAM
      - Executes program instructions
      - None of the above
    answer: 1
    explanation: Carries memory addresses between CPU and RAM is the correct answer to “In a computer system, what is the function of the Address Bus”. This question is standard in competitive examination syllabi for Computer Architecture.
    keyConcept: Computer Architecture
    testedIn:
      - PPSC
      - FPSC
  - id: 25
    question: What does the term "pipeline hazard" refer to in computer architecture?
    options:
      - A type of CPU cooler
      - A delay caused by RAM access
      - Situations where instructions cannot execute in the pipeline due to conflicts
      - A malfunction in the CPU
    answer: 2
    explanation: Situations where instructions cannot execute in the pipeline due to conflicts is the correct answer to “What does the term "pipeline hazard" refer to in computer architecture”. This question is standard in competitive examination syllabi for Computer Architecture.
    keyConcept: Computer Architecture
    testedIn:
      - PPSC
      - FPSC
  - id: 26
    question: Which cache is larger and slower compared to L1 and L2 caches in a computer system?
    options:
      - L1 Cache
      - Virtual Cache
      - Secondary Cache
      - L3 Cache
    answer: 3
    explanation: L3 Cache is the correct answer to “Which cache is larger and slower compared to L1 and L2 caches in a computer system”. This question is standard in competitive examination syllabi for Computer Architecture.
    keyConcept: Computer Architecture
    testedIn:
      - PPSC
      - FPSC
  - id: 27
    question: What does the term "bus width" refer to in computer architecture?
    options:
      - Number of bits that can be transferred in a single bus cycle
      - Size of the CPU
      - Length of the RAM module
      - Number of processors
    answer: 0
    explanation: Number of bits that can be transferred in a single bus cycle is the correct answer to “What does the term "bus width" refer to in computer architecture”. This question is standard in competitive examination syllabi for Computer Architecture.
    keyConcept: Computer Architecture
    testedIn:
      - PPSC
      - FPSC
  - id: 28
    question: Which type of memory is used to store the operating system and application programs in a computer system?
    options:
      - Cache Memory
      - ROM
      - RAM
      - Hard Disk
    answer: 3
    explanation: Hard Disk is the correct answer to “Which type of memory is used to store the operating system and application programs in a computer system”. This question is standard in competitive examination syllabi for Computer Architecture.
    keyConcept: Computer Architecture
    testedIn:
      - PPSC
      - FPSC
  - id: 29
    question: What is the purpose of the Control Unit (CU) in a CPU?
    options:
      - Performs arithmetic operations
      - Executes program instructions
      - Directs operations of the entire computer system
      - Stores data temporarily
    answer: 2
    explanation: Directs operations of the entire computer system is the correct answer to “What is the purpose of the Control Unit (CU) in a CPU”. This question is standard in competitive examination syllabi for Computer Architecture.
    keyConcept: Computer Architecture
    testedIn:
      - PPSC
      - FPSC
  - id: 30
    question: What does the term "instruction set architecture" (ISA) define in computer architecture?
    options:
      - Rate of data transfer
      - Size of cache memory
      - Set of instructions that a CPU can execute
      - A type of CPU cooler
    answer: 2
    explanation: Set of instructions that a CPU can execute is the correct answer to “What does the term "instruction set architecture" (ISA) define in computer architecture”. This question is standard in competitive examination syllabi for Computer Architecture.
    keyConcept: Computer Architecture
    testedIn:
      - PPSC
      - FPSC
  - id: 31
    question: In a computer system, what does the term "fetch-decode-execute cycle" refer to?
    options:
      - Process of installing software
      - Method of data encryption
      - Type of CPU instruction
      - Sequence of steps that the CPU follows to process instructions
    answer: 3
    explanation: Sequence of steps that the CPU follows to process instructions is the correct answer to “In a computer system, what does the term "fetch-decode-execute cycle" refer to”. This question is standard in competitive examination syllabi for Computer Architecture.
    keyConcept: Computer Architecture
    testedIn:
      - PPSC
      - FPSC
  - id: 32
    question: Which type of instruction execution allows multiple instructions to be processed simultaneously?
    options:
      - Parallel Execution
      - Sequential Execution
      - Superscalar Execution
      - Pipeline Execution
    answer: 2
    explanation: Superscalar Execution is the correct answer to “Which type of instruction execution allows multiple instructions to be processed simultaneously”. This question is standard in competitive examination syllabi for Computer Architecture.
    keyConcept: Computer Architecture
    testedIn:
      - PPSC
      - FPSC
  - id: 33
    question: What does the term "cache coherence" refer to in computer architecture?
    options:
      - Speed of cache memory
      - Type of cache algorithm
      - Number of cache levels
      - Ensuring consistency of data across multiple caches
    answer: 3
    explanation: Ensuring consistency of data across multiple caches is the correct answer to “What does the term "cache coherence" refer to in computer architecture”. This question is standard in competitive examination syllabi for Computer Architecture.
    keyConcept: Computer Architecture
    testedIn:
      - PPSC
      - FPSC
  - id: 34
    question: Which component of a CPU is responsible for managing the flow of data within the processor?
    options:
      - Data Path
      - Control Unit
      - ALU
      - Cache Memory
    answer: 0
    explanation: Data Path is the correct answer to “Which component of a CPU is responsible for managing the flow of data within the processor”. This question is standard in competitive examination syllabi for Computer Architecture.
    keyConcept: Computer Architecture
    testedIn:
      - PPSC
      - FPSC
  - id: 35
    question: What is the primary function of the Memory Management Unit (MMU) in a computer system?
    options:
      - Allocates RAM efficiently
      - Monitors CPU temperature
      - Executes system utilities
      - Translates virtual addresses to physical addresses
    answer: 3
    explanation: Translates virtual addresses to physical addresses is the correct answer to “What is the primary function of the Memory Management Unit (MMU) in a computer system”. This question is standard in competitive examination syllabi for Computer Architecture.
    keyConcept: Computer Architecture
    testedIn:
      - PPSC
      - FPSC
  - id: 36
    question: Which type of memory is typically integrated directly into the CPU for faster access?
    options:
      - RAM
      - Hard Disk
      - L1 Cache
      - ROM
    answer: 2
    explanation: L1 Cache is the correct answer to “Which type of memory is typically integrated directly into the CPU for faster access”. This question is standard in competitive examination syllabi for Computer Architecture.
    keyConcept: Computer Architecture
    testedIn:
      - PPSC
      - FPSC
  - id: 37
    question: In the context of computer memory, what does "volatile" mean?
    options:
      - Slower access speed
      - Loses data when power is turned off
      - Faster access speed
      - None of the above
    answer: 1
    explanation: Loses data when power is turned off is the correct answer to “In the context of computer memory, what does "volatile" mean”. This question is standard in competitive examination syllabi for Computer Architecture.
    keyConcept: Computer Architecture
    testedIn:
      - PPSC
      - FPSC
  - id: 38
    question: Which type of addressing mode involves specifying a register that contains the address of the operand?
    options:
      - Immediate Addressing
      - Base Addressing
      - Indirect Addressing
      - Indexed Addressing
    answer: 2
    explanation: Indirect Addressing is the correct answer to “Which type of addressing mode involves specifying a register that contains the address of the operand”. This question is standard in competitive examination syllabi for Computer Architecture.
    keyConcept: Computer Architecture
    testedIn:
      - PPSC
      - FPSC
  - id: 39
    question: What is the purpose of the I/O Controller in a computer system?
    options:
      - Performs arithmetic operations
      - Executes program instructions
      - Stores data temporarily
      - Manages communication between the CPU and external devices
    answer: 3
    explanation: Manages communication between the CPU and external devices is the correct answer to “What is the purpose of the I/O Controller in a computer system”. This question is standard in competitive examination syllabi for Computer Architecture.
    keyConcept: Computer Architecture
    testedIn:
      - PPSC
      - FPSC
  - id: 40
    question: Which type of cache mapping technique maps multiple blocks of main memory into a single cache line?
    options:
      - Set-Associative Mapping
      - Direct Mapping
      - Fully Associative Mapping
      - Virtual Mapping
    answer: 0
    explanation: Set-Associative Mapping is the correct answer to “Which type of cache mapping technique maps multiple blocks of main memory into a single cache line”. This question is standard in competitive examination syllabi for Computer Architecture.
    keyConcept: Computer Architecture
    testedIn:
      - PPSC
      - FPSC
---


