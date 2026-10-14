---
title: Digital Electronics — Part 1 MCQs with Explanations
description: Practice high-yield Electronics & Communications Engineering MCQs on Digital Electronics — Part 1 with worked academic solutions for FPSC, PPSC, PTA, PAEC, NTS.
subject: electronics-engineering
subjectName: Electronics & Communications Engineering
topic: digital-electronics-part-1
topicName: Digital Electronics — Part 1
author: ExamHub Academic Editorial Board
updatedDate: "2026-10-14"
difficulty: Exam-Level
targetExams:
  - FPSC
  - PPSC
  - PTA
  - PAEC
  - NTS
questions:
  - id: 1
    question: The fan put of a 7400 NAND gate is
    options:
      - 2TTL
      - 5TTL
      - 8TTL
      - 10TTL
    answer: 3
    explanation: "Let's break down this question about the fan-out of a 7400 NAND gate ! First, let's understand the key terms: 1. 7400 NAND gate : This is a very common type of digital logic chip. It belongs to a family of chips called TTL , which stands for Transistor-Transistor Logic . The \"74\" in 7400 indicates it's a part of the standard 74-series TTL family. 2. Fan-out : Imagine you have one digital gate, like our NAND gate, and it's sending its output signal to the inputs of other gates. The fan-out is simply the maximum number of other gates' inputs that a single output gate can reliably drive without its signal getting too weak or distorted. If you connect too many gates, the output gate might not be able to supply enough electrical current, which could lead to incorrect voltage levels and make the other gates malfunction. 3. TTL (Transistor-Transistor Logic) : This refers to a specific type of electronic circuitry used to build integrated circuits (chips) like the 7400. When we talk about fan-out in the context of TTL, we often specify it in terms of \"TTL loads\" or \"TTL inputs.\" One \"TTL load\" means the input of one standard TTL gate. Now, let's answer the question: For standard 74-series TTL gates (like the 7400 NAND gate), the standard or typical fan-out is 10 . This means that one 7400 NAND gate can safely drive the inputs of up to 10 other standard TTL gates without any issues regarding signal integrity. Therefore, the fan-out of a 7400 NAND gate is 10 TTL . The correct answer is Option D: 10TTL ."
    keyConcept: Digital Electronics
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: An OR gate has 6 inputs. The number of input words in its truth table are
    options:
      - "6"
      - "32"
      - "64"
      - "128"
    answer: 2
    explanation: A truth table shows all possible combinations of inputs and the corresponding output of a logic gate. For a gate with 'n' inputs , the number of possible input combinations (or input words) is calculated as 2 raised to the power of n (2 n ) . In this case, the OR gate has 6 inputs . So, the number of input words in its truth table is 2 6 = 2 * 2 * 2 * 2 * 2 * 2 = 64 .
    keyConcept: Digital Electronics
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Assuming 8 bits for data, 1 bit for parity, I start bit and 2 stop bits, the number of characters that 1200 BPS communication line can transmit is.
    options:
      - 100 CPS
      - 120 CPS
      - 12 CPS
      - None of the above
    answer: 0
    explanation: "First, we need to calculate the total number of bits per character . We have: - 8 data bits - 1 parity bit - 1 start bit - 2 stop bits So, the total bits per character = 8 + 1 + 1 + 2 = 12 bits . Now, we know the communication line transmits at 1200 BPS (bits per second) . To find the number of characters per second (CPS), we divide the BPS by the bits per character: CPS = 1200 BPS / 12 bits/character = 100 characters/second . Therefore, the correct answer is 100 CPS . Option A is the correct answer."
    keyConcept: Digital Electronics
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: Which type of CPLD packaging can provide maximum number of pins on the package due to small size of the pins?
    options:
      - PLCC
      - QFP
      - PGA
      - BGA
    answer: 3
    explanation: "CPLDs (Complex Programmable Logic Devices) need many pins to connect to other parts of a circuit. Think of it like this: pins are like roads connecting different cities. We want as many roads as possible to allow lots of traffic (data) to flow. Here's a look at the packaging options: PLCC (Plastic Leaded Chip Carrier): Uses J-shaped leads around the edges. Good, but limited pin density. QFP (Quad Flat Package): Has flat leads extending from all four sides. Better than PLCC, but still limited compared to BGA. PGA (Pin Grid Array): Has pins arranged in a grid pattern that insert into a socket. Allows more pins than PLCC and QFP, but BGA is superior. BGA (Ball Grid Array): Uses tiny solder balls on the bottom of the package. These balls are much smaller and closer together than pins, allowing for a much higher density of connections. Because the solder balls are so small and densely packed, BGA packaging allows for the maximum number of pins on a CPLD package. So, BGA is the answer because it gives the most \"roads\" (pins) to connect the CPLD to the rest of the circuit!"
    keyConcept: Digital Electronics
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: In Boolean algebra, the bar sign (-) indicates ___________.
    options:
      - OR operation
      - AND operation
      - NOT operation
      - None of the above
    answer: 2
    explanation: "In Boolean algebra , the bar sign (-) indicates the NOT operation . The NOT operation is a unary operation that inverts the value of a Boolean variable. If the variable is true , applying the NOT operation results in false , and vice versa. OR operation and AND operation are indicated by + and • respectively in Boolean algebra, not by the bar sign. Thus, Option C: NOT operation is the correct answer."
    keyConcept: Digital Electronics
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: The inputs of a NAND gate are connected together. The resulting circuit is ___________.
    options:
      - OR gate
      - AND gate
      - NOT gate
      - None of the above
    answer: 2
    explanation: "Understanding NAND Gates: A NAND gate is a fundamental logic gate. It outputs a 0 (low) only when all its inputs are 1 (high). Otherwise, it outputs a 1 (high). The Question: Connecting Inputs Together Imagine you have a NAND gate with two inputs. Instead of giving them separate signals, we connect both inputs to the same input signal (let's call it 'A'). What Happens? Now, both inputs of the NAND gate will always have the same value . If 'A' is 0, both inputs are 0. If 'A' is 1, both inputs are 1. Let's Analyze the Output: * If 'A' is 0 (both inputs are 0), the NAND gate outputs a 1. * If 'A' is 1 (both inputs are 1), the NAND gate outputs a 0. Comparing to Other Gates: This output behavior is exactly the same as a NOT gate (inverter). A NOT gate simply inverts the input: 0 becomes 1, and 1 becomes 0. Therefore, the correct answer is C: NOT gate"
    keyConcept: Digital Electronics
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: The number 10000 would appear just immediately after
    options:
      - FFFF (hex)
      - 1111 (binary)
      - 7777 (octal)
      - All of the above
    answer: 2
    explanation: "Option A: FFFF (hexadecimal) FFFF in hexadecimal is equal to 65535 in decimal. Adding 1 gives 65536, which in hexadecimal is written as 10000 (hex). This does not match 10000 in decimal, hence this option is incorrect. Option B: 1111 (binary) 1111 in binary is equal to 15 in decimal. Adding 1 gives 16, which in binary is written as 10000 (binary). This is not the same as 10000 in decimal, hence this option is incorrect. Option C: 7777 (octal) 7777 in octal is equal to (7×8³) + (7×8²) + (7×8¹) + (7×8⁰) = 4095 in decimal. Adding 1 gives 4096, which in octal is written as 10000 (octal). Thus, 10000 appears immediately after 7777 in the octal number system. Conclusion: The correct answer is Option C: 7777 (octal) ."
    keyConcept: Digital Electronics
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: The number of product terms in the minimized sum-of-product expression obtained through the following K = map is (where, "d" denotes don't care states) 1 0 0 1 0 d 0 0 0 0 d 1 1 0 0 1
    options:
      - "2"
      - "3"
      - "4"
      - "5"
    answer: 0
    explanation: "Step 1: Identify minterms From the K-map, the given 1’s (valid minterms) are at positions: Top row: 1st and 4th cell Third row: 4th cell Bottom row: 1st and 4th cell Step 2: Consider don’t cares (d) The don’t care cells can be grouped as 1’s if it helps in minimizing the expression. Step 3: Perform grouping in K-map - Group all four corner 1’s together. This forms one large group of four. - Group the remaining 1’s (along with a don’t care if needed) into the second group to cover the leftover minterms. Step 4: Resulting product terms After minimization, only 2 product terms Conclusion The minimized SOP expression contains 2 product terms. Therefore, the correct answer is Option A: 2 ."
    keyConcept: Digital Electronics
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: In an 8-bit D/A converter, the reference voltage used is 10 V. What voltage is represented by 10100001?
    options:
      - 0.00392 V
      - 6.314 V
      - 6.288 V
      - 5.814 V
    answer: 2
    explanation: "Here's the explanation: First, understand what an 8-bit D/A converter does. It converts a digital (binary) number into an analog (voltage) value. The question gives us the digital input: 10100001 and a reference voltage: 10V. The reference voltage is the maximum possible output voltage. An 8-bit converter can represent 2 8 (which is 256) different voltage levels. So, each step or increment in the digital value corresponds to a voltage change of Reference Voltage / 256. This is also known as the resolution . In our case, the resolution is 10V / 256 ≈ 0.0390625V per step. Next, convert the binary number 10100001 to decimal. 10100001 2 = (1 * 2 7 ) + (0 * 2 6 ) + (1 * 2 5 ) + (0 * 2 4 ) + (0 * 2 3 ) + (0 * 2 2 ) + (0 * 2 1 ) + (1 * 2 0 ) = 128 + 32 + 1 = 161 10 . Now, to find the output voltage, multiply the decimal value (161) by the voltage per step (0.0390625V): Output Voltage = 161 * 0.0390625 V ≈ 6.289 V The closest answer among the options is 6.288 V. Therefore, the answer is Option C: 6.288 V ."
    keyConcept: Digital Electronics
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: The universal gate is ___________
    options:
      - NAND gate
      - OR gate
      - AND gate
      - None of the above
    answer: 0
    explanation: NAND gate is the correct answer to “The universal gate is ___________”. This question is standard in competitive examination syllabi for Digital Electronics.
    keyConcept: Digital Electronics
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: In which of the following base systems is 123 not a valid number?
    options:
      - Base 10
      - Base 16
      - Base 8
      - Base 3
    answer: 3
    explanation: Base 3 is the correct answer to “In which of the following base systems is 123 not a valid number”. This question is standard in competitive examination syllabi for Digital Electronics.
    keyConcept: Digital Electronics
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: In case of OR gate, no matter what the number of inputs, a
    options:
      - 1 at any input causes the output to be at logic 1
      - 1 at any input causes the output to be at logic 0
      - 0 any input causes the output to be at logic 0
      - 0 at any input causes the output to be at logic 1.
    answer: 0
    explanation: 1 at any input causes the output to be at logic 1 is the correct answer to “In case of OR gate, no matter what the number of inputs, a”. This question is standard in competitive examination syllabi for Digital Electronics.
    keyConcept: Digital Electronics
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: The number of Boolean functions that can be generated by n variables is equal to
    options:
      - 2n
      - 22n
      - 22n - 1
      - 2n - 1
    answer: 1
    explanation: 22n is the correct answer to “The number of Boolean functions that can be generated by n variables is equal to”. This question is standard in competitive examination syllabi for Digital Electronics.
    keyConcept: Digital Electronics
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: Which mechanism allocates the binary value to the states in order to reduce the cost of the combinational circuits?
    options:
      - State Reduction
      - State Minimization
      - State Assignment
      - State Evaluation
    answer: 2
    explanation: State Assignment is the correct answer to “Which mechanism allocates the binary value to the states in order to reduce the cost of the combinational circuits”. This question is standard in competitive examination syllabi for Digital Electronics.
    keyConcept: Digital Electronics
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: Positive logic in a logic circuit is one in which
    options:
      - logic 0 and 1 are represented by 0 and positive voltage respectively
      - logic 0 and, -1 are represented by negative and positive voltages respectively
      - logic 0 voltage level is higher than logic 1 voltage level
      - logic 0 voltage level is lower than logic 1 voltage level.
    answer: 3
    explanation: logic 0 voltage level is lower than logic 1 voltage level. is the correct answer to “Positive logic in a logic circuit is one in which”. This question is standard in competitive examination syllabi for Digital Electronics.
    keyConcept: Digital Electronics
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: Digital circuit can be made by the repeated use of ___________
    options:
      - OR gates
      - NOT gates
      - NAND gates
      - None of the above
    answer: 2
    explanation: NAND gates is the correct answer to “Digital circuit can be made by the repeated use of ___________”. This question is standard in competitive examination syllabi for Digital Electronics.
    keyConcept: Digital Electronics
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: "\"What would happen, if smaller logic modules are utilized for performing logical functions associated with FPGA? A. Propagation delay will increase B. FPGA area will increase C. Wastage of logic modules will not be prevented D. Number of interconnected paths in device will decrease \""
    options:
      - A & B
      - C & D
      - A & D
      - B & C
    answer: 0
    explanation: A & B is the correct answer to “"What would happen, if smaller logic modules are utilized for performing logical functions associated with FPGA? A. Propagation delay will increase B. FPGA area will increase C. Wastage of logic modules will not be prevented D. Number of interconnected paths in device will decrease "”. This question is standard in competitive examination syllabi for Digital Electronics.
    keyConcept: Digital Electronics
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: A debouncing circuit is
    options:
      - An astable MV
      - A bistable MV
      - A latch
      - A monostable MV
    answer: 2
    explanation: A latch is the correct answer to “A debouncing circuit is”. This question is standard in competitive examination syllabi for Digital Electronics.
    keyConcept: Digital Electronics
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: The inverter is ___________
    options:
      - NOT gate
      - OR gate
      - AND gate
      - None of the above
    answer: 0
    explanation: NOT gate is the correct answer to “The inverter is ___________”. This question is standard in competitive examination syllabi for Digital Electronics.
    keyConcept: Digital Electronics
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: Most of the digital computers do not have floating point hardware because
    options:
      - Floating point hardware is costly
      - It is slower than software
      - It is not possible to perform floating point addition by hardware
      - Of no specific reason
    answer: 0
    explanation: Floating point hardware is costly is the correct answer to “Most of the digital computers do not have floating point hardware because”. This question is standard in competitive examination syllabi for Digital Electronics.
    keyConcept: Digital Electronics
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: What is/are the configurable functions of each and every IOBs connected around the FPGA device from the operational point of view?
    options:
      - Input operation
      - Tristate output operation
      - Bi-directional I/O pin access
      - All of the above
    answer: 3
    explanation: All of the above is the correct answer to “What is/are the configurable functions of each and every IOBs connected around the FPGA device from the operational point of view”. This question is standard in competitive examination syllabi for Digital Electronics.
    keyConcept: Digital Electronics
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: The binary number 10101 is equivalent to decimal number ___________.
    options:
      - "19"
      - "12"
      - "27"
      - "21"
    answer: 3
    explanation: 21 is the correct answer to “The binary number 10101 is equivalent to decimal number ___________.”. This question is standard in competitive examination syllabi for Digital Electronics.
    keyConcept: Digital Electronics
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: An AND gate will function as OR if
    options:
      - All the inputs to the gates are “1”
      - All the inputs are ‘0’
      - Either of the inputs is “1”
      - All the inputs and outputs are complemente'
    answer: 3
    explanation: All the inputs and outputs are complemente' is the correct answer to “An AND gate will function as OR if”. This question is standard in competitive examination syllabi for Digital Electronics.
    keyConcept: Digital Electronics
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: The NOR gate is OR gate followed by ___________.
    options:
      - AND gate
      - NAND gate
      - NOT gate
      - None of the above
    answer: 2
    explanation: NOT gate is the correct answer to “The NOR gate is OR gate followed by ___________.”. This question is standard in competitive examination syllabi for Digital Electronics.
    keyConcept: Digital Electronics
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: The NAND gate is AND gate followed by ___________.
    options:
      - NOT gate
      - OR gate
      - AND gate
      - None of the above
    answer: 0
    explanation: NOT gate is the correct answer to “The NAND gate is AND gate followed by ___________.”. This question is standard in competitive examination syllabi for Digital Electronics.
    keyConcept: Digital Electronics
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Among the logic families, the family which can be used at very high frequency greater than 100 MHz in a 4 bit synchronous counter is
    options:
      - TTLAS
      - CMOS
      - ECL
      - TTLLS
    answer: 2
    explanation: ECL is the correct answer to “Among the logic families, the family which can be used at very high frequency greater than 100 MHz in a 4 bit synchronous counter is”. This question is standard in competitive examination syllabi for Digital Electronics.
    keyConcept: Digital Electronics
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: A hexadecimal odometer displays F 52 F. The next reading will be
    options:
      - F52E
      - G52F
      - F53F
      - F53O
    answer: 3
    explanation: F53O is the correct answer to “A hexadecimal odometer displays F 52 F. The next reading will be”. This question is standard in competitive examination syllabi for Digital Electronics.
    keyConcept: Digital Electronics
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: The binary code of (21.125)10 is
    options:
      - "10101.001"
      - "10100.001"
      - "10101.010"
      - "10100.111"
    answer: 0
    explanation: 10101.001 is the correct answer to “The binary code of (21.125)10 is”. This question is standard in competitive examination syllabi for Digital Electronics.
    keyConcept: Digital Electronics
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: A NAND gate is called a universal logic element because
    options:
      - It is used by everybody
      - Any logic function can be realized by NAND gates alone
      - All the minization techniques are applicable for optimum NAND gate realization
      - Many digital computers use NAND gates.
    answer: 1
    explanation: Any logic function can be realized by NAND gates alone is the correct answer to “A NAND gate is called a universal logic element because”. This question is standard in competitive examination syllabi for Digital Electronics.
    keyConcept: Digital Electronics
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: NAND. gates are preferred over others because these
    options:
      - have lower fabrication area
      - can be used to make any gate
      - consume least electronic power
      - provide maximum density in a chip.
    answer: 1
    explanation: can be used to make any gate is the correct answer to “NAND. gates are preferred over others because these”. This question is standard in competitive examination syllabi for Digital Electronics.
    keyConcept: Digital Electronics
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: Which is the correct order of sequence for representing the input values in K-map?
    options:
      - (00, 01, 10, 11)
      - (00, 10, 01, 11)
      - (00, 01, 11, 10)
      - (00, 10, 11, 01)
    answer: 2
    explanation: (00, 01, 11, 10) is the correct answer to “Which is the correct order of sequence for representing the input values in K-map”. This question is standard in competitive examination syllabi for Digital Electronics.
    keyConcept: Digital Electronics
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: Digital computers are more widely used as compared to analog computers, because they are
    options:
      - Less expensive
      - Always more accurate and faster
      - Useful over wider ranges of problem types
      - Easier to maintain
    answer: 2
    explanation: Useful over wider ranges of problem types is the correct answer to “Digital computers are more widely used as compared to analog computers, because they are”. This question is standard in competitive examination syllabi for Digital Electronics.
    keyConcept: Digital Electronics
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: "Consider the representation of six-bit numbers by two’s complement, one’s complement, or by sign and magnitude: In which representation is there overflow from the addition of the integers 011000 and 011000?"
    options:
      - Two’s complement only
      - Sign and magnitude and one’s complement only
      - Two’s complement and one’s complement only
      - All three representations
    answer: 3
    explanation: "All three representations is the correct answer to “Consider the representation of six-bit numbers by two’s complement, one’s complement, or by sign and magnitude: In which representation is there overflow from the addition of the integers 011000 and 011000”. This question is standard in competitive examination syllabi for Digital Electronics."
    keyConcept: Digital Electronics
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: Excess-3 code is known as
    options:
      - Weighted code
      - Cyclic redundancy code
      - Self-complementing code
      - Algebraic code
    answer: 2
    explanation: Self-complementing code is the correct answer to “Excess-3 code is known as”. This question is standard in competitive examination syllabi for Digital Electronics.
    keyConcept: Digital Electronics
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: The only function of NOT gate is to ___________.
    options:
      - Stop signal
      - Invert input signal
      - Act as a universal gate
      - None of the above
    answer: 1
    explanation: Invert input signal is the correct answer to “The only function of NOT gate is to ___________.”. This question is standard in competitive examination syllabi for Digital Electronics.
    keyConcept: Digital Electronics
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: Which of the following gate is a two-level logic gate
    options:
      - OR gate
      - NAND gate
      - EXCLUSIVE OR gate
      - NOT gate
    answer: 2
    explanation: EXCLUSIVE OR gate is the correct answer to “Which of the following gate is a two-level logic gate”. This question is standard in competitive examination syllabi for Digital Electronics.
    keyConcept: Digital Electronics
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: When an input signal 1 is applied to a NOT gate, the output is ___________.
    options:
      - "0"
      - "1"
      - Either 0 & 1
      - None of the above
    answer: 0
    explanation: 0 is the correct answer to “When an input signal 1 is applied to a NOT gate, the output is ___________.”. This question is standard in competitive examination syllabi for Digital Electronics.
    keyConcept: Digital Electronics
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: Storage of 1 KB means the following number of bytes
    options:
      - "1000"
      - "964"
      - "1024"
      - "1064"
    answer: 2
    explanation: 1024 is the correct answer to “Storage of 1 KB means the following number of bytes”. This question is standard in competitive examination syllabi for Digital Electronics.
    keyConcept: Digital Electronics
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: The decimal number 76 in hexadecimal and BCD number system is respectively
    options:
      - C4, 01110110
      - 3E, 00100101
      - 4C, 00101100
      - 4C, 01110110
    answer: 3
    explanation: 4C, 01110110 is the correct answer to “The decimal number 76 in hexadecimal and BCD number system is respectively”. This question is standard in competitive examination syllabi for Digital Electronics.
    keyConcept: Digital Electronics
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: "Which of the following measurements can be done using a counter? 1. Pulse duration 2. Interval between two pulses 3. Amplitude of the pulse 4. Rise time of a pulse Select the correct answer from the options given below:"
    options:
      - 1 and 2
      - 2 and 3
      - 1 and 4
      - 2 and 4
    answer: 0
    explanation: 1 and 2 is the correct answer to “Which of the following measurements can be done using a counter? 1. Pulse duration 2. Interval between two pulses 3. Amplitude of the pulse 4. Rise time of a pulse Select the correct answer from the options given below:”. This question is standard in competitive examination syllabi for Digital Electronics.
    keyConcept: Digital Electronics
    testedIn:
      - FPSC
      - PPSC
---


