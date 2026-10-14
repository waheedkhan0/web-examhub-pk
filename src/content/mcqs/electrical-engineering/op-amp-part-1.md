---
title: Op Amp — Part 1 MCQs with Explanations
description: Practice high-yield Electrical Engineering MCQs on Op Amp — Part 1 with worked academic solutions for WAPDA, NTDC, IESCO, LESCO, PPSC, FPSC.
subject: electrical-engineering
subjectName: Electrical Engineering
topic: op-amp-part-1
topicName: Op Amp — Part 1
author: ExamHub Academic Editorial Board
updatedDate: "2026-10-14"
difficulty: Exam-Level
targetExams:
  - WAPDA
  - NTDC
  - IESCO
  - LESCO
  - PPSC
  - FPSC
questions:
  - id: 1
    question: The common mode gain is ___________
    options:
      - very high
      - very low
      - always unity
      - unpredictable
    answer: 1
    explanation: "The common mode gain is very low . Key Points: Common Mode Gain: In an operational amplifier (op-amp), common mode gain refers to the gain applied to signals that are present on both the inverting and non-inverting inputs. Purpose: For ideal op-amps, the common mode gain should be extremely low to ensure that the amplifier responds primarily to differential signals (the difference between the inverting and non-inverting inputs). Practical Op-Amps: In real op-amps, although the common mode gain is not zero, it is minimized to enhance performance and accuracy in amplifying differential signals."
    keyConcept: Op Amp
    testedIn:
      - WAPDA
      - NTDC
  - id: 2
    question: For an OP-amp with negative feedback, the output is .
    options:
      - equal to the input
      - increased
      - fed back to the inverting input
      - fed back to the noninverting input
    answer: 2
    explanation: "For an operational amplifier (OP-amp) with negative feedback, the following is true: The output is fed back to the inverting input: Negative feedback involves taking a portion of the output and feeding it back to the inverting input of the OP-amp. This feedback helps stabilize the gain and improve the performance of the OP-amp by reducing distortion and ensuring that the output closely follows the input signal. Negative feedback does not make the output equal to the input, increase the output, or feed the output back to the noninverting input."
    keyConcept: Op Amp
    testedIn:
      - WAPDA
      - NTDC
  - id: 3
    question: When a number of stages are connected in parallel, the overall gain is the product of the individual stage gains
    options:
      - "True"
      - "False"
    answer: 1
    explanation: When amplifier stages are connected in parallel, the overall gain is not the product of the individual stage gains. Parallel connection means the input signal is applied to multiple amplifier stages simultaneously, and their outputs are combined. In this case, the gain of each path remains the same and does not multiply. Instead, the currents or voltages at the output may add, depending on how the stages are combined. Overall gain in parallel configuration is determined by other factors such as how the outputs are summed and whether any loading effects are present. In contrast, when amplifier stages are connected in series (cascaded), the overall gain is the product of the individual gains. Therefore, the statement is false for parallel connection.
    keyConcept: Op Amp
    testedIn:
      - WAPDA
      - NTDC
  - id: 4
    question: The OP-amp can amplify
    options:
      - a.c. signals only
      - d.c. signals only
      - both a.c. and d.c. signals
      - neither a.c. nor d.c. signals
    answer: 2
    explanation: "An operational amplifier (OP-amp) is a versatile electronic component designed to amplify a wide range of signals. Both a.c. and d.c. signals : OP-amps are capable of amplifying both alternating current (a.c.) signals and direct current (d.c.) signals. They can be configured in various ways (e.g., as inverting, non-inverting amplifiers) to handle different types of signals and applications. a.c. signals only : This is incorrect because OP-amps are not limited to amplifying only a.c. signals. d.c. signals only : This is also incorrect because OP-amps can amplify both d.c. signals and a.c. signals. neither a.c. nor d.c. signals : This is incorrect because OP-amps are designed to handle both types of signals. Thus, Option C: both a.c. and d.c. signals is the correct answer."
    keyConcept: Op Amp
    testedIn:
      - WAPDA
      - NTDC
  - id: 5
    question: A certain noninverting amplifier has Ri of 1 kΩ and Rf of 100 kΩ. The closed-loop voltage gain is
    options:
      - "100000"
      - "1000"
      - "101"
      - "100"
    answer: 2
    explanation: "To find the closed-loop voltage gain of a noninverting amplifier, use the formula: Closed-loop voltage gain $$A_{v}$$ = $$1 + \\frac{R_f}{R_i}$$ Given: - $$R_i$$ (input resistance) = 1 kΩ - $$R_f$$ (feedback resistance) = 100 kΩ Substitute these values into the formula: $$A_{v} = 1 + \\frac{100000}{1000}$$ $$A_{v} = 1 + 100$$ $$A_{v} = 101$$ Therefore, the closed-loop voltage gain is 101."
    keyConcept: Op Amp
    testedIn:
      - WAPDA
      - NTDC
  - id: 6
    question: Which of the following amplifier is used in a digital to analog converter?
    options:
      - Non inverter
      - Voltage follower
      - Summer
      - Difference amplifier
    answer: 2
    explanation: "The correct answer is Option C: Summer . Here's why: A digital-to-analog converter (DAC) takes a digital input (like a binary number) and converts it into an analog voltage. Option A: Non-inverter A non-inverting amplifier provides gain but doesn't directly contribute to the conversion process needed in a DAC. Option B: Voltage follower A voltage follower has a gain of 1 and is primarily used for buffering, not for the weighted summing required in DACs. Option C: Summer A summing amplifier (or summer) is crucial in many DAC designs. It takes multiple input voltages and produces an output voltage that is proportional to the weighted sum of the inputs. In a DAC, each digital bit controls a switch that connects a specific voltage (or current) to the summing amplifier's input. The weights are determined by the resistor values, so each bit contributes a different amount to the final output voltage, effectively converting the digital value to its analog equivalent. Option D: Difference amplifier A difference amplifier amplifies the difference between two input voltages and is not directly used in the typical architecture of a DAC. Therefore, the summer amplifier is the core component that performs the digital-to-analog conversion by summing weighted inputs."
    keyConcept: Op Amp
    testedIn:
      - WAPDA
      - NTDC
  - id: 7
    question: An amplifier using an opamp with slew rate SR=1v/sec has a gain of 40db.If this amplifier has to faithfully amplify sinusoidal signals from dc to 20KHz without introducing any slew-rate induced distortion, then the input signal level exceed
    options:
      - 79.5mV
      - 395mV
      - 795mV
      - 39.5mV
    answer: 2
    explanation: 795mV is the correct answer to “An amplifier using an opamp with slew rate SR=1v/sec has a gain of 40db.If this amplifier has to faithfully amplify sinusoidal signals from dc to 20KHz without introducing any slew-rate induced distortion, then the input signal level exceed”. This question is standard in competitive examination syllabi for Op Amp.
    keyConcept: Op Amp
    testedIn:
      - WAPDA
      - NTDC
  - id: 8
    question: Current cannot flow to ground through .
    options:
      - a mechanical ground
      - an a.c. ground
      - a virtual ground
      - an ordinary ground
    answer: 2
    explanation: a virtual ground is the correct answer to “Current cannot flow to ground through .”. This question is standard in competitive examination syllabi for Op Amp.
    keyConcept: Op Amp
    testedIn:
      - WAPDA
      - NTDC
  - id: 9
    question: When a step-input is given to an OP-amp integrator, the output will be
    options:
      - A ramp
      - A sinusoidal wave
      - A rectangular wave
      - A triangular wave with dc bias
    answer: 0
    explanation: A ramp is the correct answer to “When a step-input is given to an OP-amp integrator, the output will be”. This question is standard in competitive examination syllabi for Op Amp.
    keyConcept: Op Amp
    testedIn:
      - WAPDA
      - NTDC
  - id: 10
    question: "An OPAMP has a slew rate of 5 V/μS. The largest sine wave output voltage possible at a frequency of 1 MHZ is [Hint: Slew rate is defined as the max. rate of change of output voltage. Its unit is V/μS.]"
    options:
      - $$10\pi {\text{V}}$$
      - $$5{\text{V}}$$
      - $$\frac{5}{\prod }{\text{V}}$$
      - $$\frac{5}{{2\prod }}{\text{V}}$$
    answer: 3
    explanation: "$$\\frac{5}{{2\\prod }}{\\text{V}}$$ is the correct answer to “An OPAMP has a slew rate of 5 V/μS. The largest sine wave output voltage possible at a frequency of 1 MHZ is [Hint: Slew rate is defined as the max. rate of change of output voltage. Its unit is V/μS.]”. This question is standard in competitive examination syllabi for Op Amp."
    keyConcept: Op Amp
    testedIn:
      - WAPDA
      - NTDC
  - id: 11
    question: Calculate the cutoff frequency of a first-order low-pass filter for R1 = 2.5kΩ and C1 = 0.05μF
    options:
      - 1.273 kHz
      - 12.73 kHz
      - 127.3 kHz
      - 127.3 Hz
    answer: 0
    explanation: 1.273 kHz is the correct answer to “Calculate the cutoff frequency of a first-order low-pass filter for R1 = 2.5kΩ and C1 = 0.05μF”. This question is standard in competitive examination syllabi for Op Amp.
    keyConcept: Op Amp
    testedIn:
      - WAPDA
      - NTDC
  - id: 12
    question: The output of a particular OP-amp increases 8V in 12µs. The slew rate is
    options:
      - 90 V/µs
      - 0.67 V/µs
      - 1.5 V/µs
      - none of these
    answer: 1
    explanation: 0.67 V/µs is the correct answer to “The output of a particular OP-amp increases 8V in 12µs. The slew rate is”. This question is standard in competitive examination syllabi for Op Amp.
    keyConcept: Op Amp
    testedIn:
      - WAPDA
      - NTDC
  - id: 13
    question: The approximate input impedance of the opamp circuit which has Ri = 10k, Rf = 100k, RL = 10k
    options:
      - $$\infty $$
      - 120k
      - 110k
      - 10k
    answer: 2
    explanation: 110k is the correct answer to “The approximate input impedance of the opamp circuit which has Ri = 10k, Rf = 100k, RL = 10k”. This question is standard in competitive examination syllabi for Op Amp.
    keyConcept: Op Amp
    testedIn:
      - WAPDA
      - NTDC
  - id: 14
    question: In differential-mode, ___________
    options:
      - opposite polarity signals are applied to the inputs
      - the gain is one
      - the outputs are of different amplitudes
      - only one supply voltage is used
    answer: 0
    explanation: opposite polarity signals are applied to the inputs is the correct answer to “In differential-mode, ___________”. This question is standard in competitive examination syllabi for Op Amp.
    keyConcept: Op Amp
    testedIn:
      - WAPDA
      - NTDC
  - id: 15
    question: Assume that the OP-amp of the fig. is ideal. If Vi is a triangular wave, then V0 will be
    options:
      - Square wave
      - Triangular wave
      - Parabolic wave
      - Sine wave
    answer: 3
    explanation: Sine wave is the correct answer to “Assume that the OP-amp of the fig. is ideal. If Vi is a triangular wave, then V0 will be”. This question is standard in competitive examination syllabi for Op Amp.
    keyConcept: Op Amp
    testedIn:
      - WAPDA
      - NTDC
  - id: 16
    question: The differential gain is
    options:
      - very high
      - very low
      - dependent on input voltage
      - about 100
    answer: 0
    explanation: very high is the correct answer to “The differential gain is”. This question is standard in competitive examination syllabi for Op Amp.
    keyConcept: Op Amp
    testedIn:
      - WAPDA
      - NTDC
  - id: 17
    question: For an ideal OP-amp, which of the following is true?
    options:
      - The differential voltage across the input terminals is zero
      - The current into the input terminals is zero
      - The current from output terminal is zero
      - The output resistance is zero
    answer: 2
    explanation: The current from output terminal is zero is the correct answer to “For an ideal OP-amp, which of the following is true”. This question is standard in competitive examination syllabi for Op Amp.
    keyConcept: Op Amp
    testedIn:
      - WAPDA
      - NTDC
  - id: 18
    question: In the differential voltage gain & the common mode voltage gain of a differential amplifier are 48db & 2db respectively, then its common mode rejection ratio is
    options:
      - 23dB
      - 25dB
      - 46dB
      - 50dB
    answer: 2
    explanation: 46dB is the correct answer to “In the differential voltage gain & the common mode voltage gain of a differential amplifier are 48db & 2db respectively, then its common mode rejection ratio is”. This question is standard in competitive examination syllabi for Op Amp.
    keyConcept: Op Amp
    testedIn:
      - WAPDA
      - NTDC
  - id: 19
    question: When a differential amplifier is operated single-ended, ___________
    options:
      - the output is grounded
      - one input is grounded and signal is applied to the other
      - both inputs are connected together
      - the output is not inverted
    answer: 1
    explanation: one input is grounded and signal is applied to the other is the correct answer to “When a differential amplifier is operated single-ended, ___________”. This question is standard in competitive examination syllabi for Op Amp.
    keyConcept: Op Amp
    testedIn:
      - WAPDA
      - NTDC
  - id: 20
    question: Negative feedback ___________
    options:
      - increases the input and output impedances
      - increases the input impedance and bandwidth
      - decreases the output impedance and bandwidth
      - does not affect impedance or bandwidth
    answer: 1
    explanation: increases the input impedance and bandwidth is the correct answer to “Negative feedback ___________”. This question is standard in competitive examination syllabi for Op Amp.
    keyConcept: Op Amp
    testedIn:
      - WAPDA
      - NTDC
  - id: 21
    question: A voltage follower ___________
    options:
      - has a voltage gain of 1
      - is noninverting
      - has no feedback resistor
      - has all of these
    answer: 3
    explanation: has all of these is the correct answer to “A voltage follower ___________”. This question is standard in competitive examination syllabi for Op Amp.
    keyConcept: Op Amp
    testedIn:
      - WAPDA
      - NTDC
  - id: 22
    question: An opamp has a slew rate of 5 V/μS. The largest sine wave output voltage possible at a frequency of 1MHz is
    options:
      - $$\frac{5}{{2\prod }}{\text{V}}$$
      - $$5{\text{V}}$$
      - $$\frac{5}{\prod }{\text{V}}$$
      - $$10\pi {\text{V}}$$
    answer: 0
    explanation: $$\frac{5}{{2\prod }}{\text{V}}$$ is the correct answer to “An opamp has a slew rate of 5 V/μS. The largest sine wave output voltage possible at a frequency of 1MHz is”. This question is standard in competitive examination syllabi for Op Amp.
    keyConcept: Op Amp
    testedIn:
      - WAPDA
      - NTDC
  - id: 23
    question: The closed-loop voltage gain of an inverting amplifier equal to
    options:
      - The ratio of the input resistance to feedback resistance
      - The open-loop voltage gain
      - The feedback resistance divided by the input resistance
      - The input resistance
    answer: 2
    explanation: The feedback resistance divided by the input resistance is the correct answer to “The closed-loop voltage gain of an inverting amplifier equal to”. This question is standard in competitive examination syllabi for Op Amp.
    keyConcept: Op Amp
    testedIn:
      - WAPDA
      - NTDC
  - id: 24
    question: Of the values listed, the most realistic value for open-loop voltage gain of an OP-amp is
    options:
      - "1"
      - "2000"
      - 80 dB
      - "100000"
    answer: 3
    explanation: 100000 is the correct answer to “Of the values listed, the most realistic value for open-loop voltage gain of an OP-amp is”. This question is standard in competitive examination syllabi for Op Amp.
    keyConcept: Op Amp
    testedIn:
      - WAPDA
      - NTDC
  - id: 25
    question: If ground is applied to the (+) terminal of an inverting OP-amp, the (–) terminal will
    options:
      - Not need an input resistor
      - Be virtual ground
      - Have high reverse current
      - Not invert the signal
    answer: 1
    explanation: Be virtual ground is the correct answer to “If ground is applied to the (+) terminal of an inverting OP-amp, the (–) terminal will”. This question is standard in competitive examination syllabi for Op Amp.
    keyConcept: Op Amp
    testedIn:
      - WAPDA
      - NTDC
  - id: 26
    question: A certain inverting amplifier has a closed-loop voltage gain of 25. The OP-amp has an open-loop voltage gain of 100,000. If an OP-amp with an open-loop voltage gain of 200,000 is substituted in the arrangement, the closed-loop gain
    options:
      - doubles
      - drops to 12.5
      - remains at 25
      - increases slightly
    answer: 2
    explanation: remains at 25 is the correct answer to “A certain inverting amplifier has a closed-loop voltage gain of 25. The OP-amp has an open-loop voltage gain of 100,000. If an OP-amp with an open-loop voltage gain of 200,000 is substituted in the arrangement, the closed-loop gain”. This question is standard in competitive examination syllabi for Op Amp.
    keyConcept: Op Amp
    testedIn:
      - WAPDA
      - NTDC
  - id: 27
    question: How many OP-amps are required to implement this equation V 0 = V 1
    options:
      - "4"
      - "3"
      - "2"
      - "1"
    answer: 3
    explanation: 1 is the correct answer to “How many OP-amps are required to implement this equation V 0 = V 1”. This question is standard in competitive examination syllabi for Op Amp.
    keyConcept: Op Amp
    testedIn:
      - WAPDA
      - NTDC
  - id: 28
    question: The input impedance of a differential amplifier equals r'e times
    options:
      - ß
      - RE
      - RC
      - 2ß
    answer: 3
    explanation: 2ß is the correct answer to “The input impedance of a differential amplifier equals r'e times”. This question is standard in competitive examination syllabi for Op Amp.
    keyConcept: Op Amp
    testedIn:
      - WAPDA
      - NTDC
  - id: 29
    question: The ideal OP-AMP has the following characteristics
    options:
      - Ri = $$\infty $$, AV = $$\infty $$, RO = 0
      - Ri = 0, AV = $$\infty $$, RO = 0
      - Ri = $$\infty $$, AV = $$\infty $$, RO = $$\infty $$
      - Ri = 0, AV = $$\infty $$, RO = $$\infty $$
    answer: 0
    explanation: Ri = $$\infty $$, AV = $$\infty $$, RO = 0 is the correct answer to “The ideal OP-AMP has the following characteristics”. This question is standard in competitive examination syllabi for Op Amp.
    keyConcept: Op Amp
    testedIn:
      - WAPDA
      - NTDC
  - id: 30
    question: A 741-Type OP-amp has a gain-bandwith product of 1MHz. A non-inverting amplifier using this opamp & having a voltage gain of 20db will exhibit -3db bandwidth of
    options:
      - 50 kHz
      - 100 kHz
      - $$\frac{{1000}}{{17}}{\text{ kHz}}$$
      - $$\frac{{1000}}{{7.07}}{\text{ kHz}}$$
    answer: 0
    explanation: 50 kHz is the correct answer to “A 741-Type OP-amp has a gain-bandwith product of 1MHz. A non-inverting amplifier using this opamp & having a voltage gain of 20db will exhibit -3db bandwidth of”. This question is standard in competitive examination syllabi for Op Amp.
    keyConcept: Op Amp
    testedIn:
      - WAPDA
      - NTDC
  - id: 31
    question: In the above circuit the current i x is
    options:
      - 0.6A
      - 0.5A
      - 0.2A
      - $$\frac{1}{{12}}{\text{A}}$$
    answer: 1
    explanation: 0.5A is the correct answer to “In the above circuit the current i x is”. This question is standard in competitive examination syllabi for Op Amp.
    keyConcept: Op Amp
    testedIn:
      - WAPDA
      - NTDC
  - id: 32
    question: Hysteresis is desirable in Schmitt-trigger, because
    options:
      - Energy is to be stored/discharged in parasitic capacitances.
      - Effects of temperature would be compensated.
      - Devices in the circuit should be allowed time for saturation and desaturation.
      - It would prevent noise from causing false triggering.
    answer: 2
    explanation: Devices in the circuit should be allowed time for saturation and desaturation. is the correct answer to “Hysteresis is desirable in Schmitt-trigger, because”. This question is standard in competitive examination syllabi for Op Amp.
    keyConcept: Op Amp
    testedIn:
      - WAPDA
      - NTDC
  - id: 33
    question: The tail current in a differential amplifier equals .
    options:
      - difference between two emitter currents
      - sum of two emitter currents
      - collector current divided by current gain
      - collector voltage divided by collector resistance
    answer: 1
    explanation: sum of two emitter currents is the correct answer to “The tail current in a differential amplifier equals .”. This question is standard in competitive examination syllabi for Op Amp.
    keyConcept: Op Amp
    testedIn:
      - WAPDA
      - NTDC
  - id: 34
    question: An ideal OP-amp is an ideal
    options:
      - Current controlled Current source
      - Current controlled voltage source
      - Voltage controlled voltage source
      - voltage controlled current source
    answer: 2
    explanation: Voltage controlled voltage source is the correct answer to “An ideal OP-amp is an ideal”. This question is standard in competitive examination syllabi for Op Amp.
    keyConcept: Op Amp
    testedIn:
      - WAPDA
      - NTDC
  - id: 35
    question: The differential voltage gain of a differential amplifier is equal to RC divided by
    options:
      - r'e
      - $$\frac{{{\text{r}}{{\text{'}}_{\text{e}}}}}{2}$$
      - 2r'e
      - RE
    answer: 2
    explanation: 2r'e is the correct answer to “The differential voltage gain of a differential amplifier is equal to RC divided by”. This question is standard in competitive examination syllabi for Op Amp.
    keyConcept: Op Amp
    testedIn:
      - WAPDA
      - NTDC
  - id: 36
    question: How many OP-amps are required to implement this equation
    options:
      - "2"
      - "3"
      - "4"
      - "1"
    answer: 3
    explanation: 1 is the correct answer to “How many OP-amps are required to implement this equation”. This question is standard in competitive examination syllabi for Op Amp.
    keyConcept: Op Amp
    testedIn:
      - WAPDA
      - NTDC
  - id: 37
    question: The node voltage at the top of the til resistor is closes to ___________
    options:
      - collector supply voltage
      - zero
      - emitter supply voltage
      - tail current times base resistance
    answer: 1
    explanation: zero is the correct answer to “The node voltage at the top of the til resistor is closes to ___________”. This question is standard in competitive examination syllabi for Op Amp.
    keyConcept: Op Amp
    testedIn:
      - WAPDA
      - NTDC
  - id: 38
    question: A non inverting closed loop op amp circuit generally has a gain factor
    options:
      - Less than one
      - Greater than one
      - Of zero
      - Equal to one
    answer: 1
    explanation: Greater than one is the correct answer to “A non inverting closed loop op amp circuit generally has a gain factor”. This question is standard in competitive examination syllabi for Op Amp.
    keyConcept: Op Amp
    testedIn:
      - WAPDA
      - NTDC
  - id: 39
    question: The common mode voltage gain is
    options:
      - smaller than differentail voltage gain
      - equal to differential voltage gain
      - greater than differential voltage gain
      - none of the above
    answer: 0
    explanation: smaller than differentail voltage gain is the correct answer to “The common mode voltage gain is”. This question is standard in competitive examination syllabi for Op Amp.
    keyConcept: Op Amp
    testedIn:
      - WAPDA
      - NTDC
  - id: 40
    question: A differential amplifier ___________
    options:
      - is a part of an Op-amp
      - has one input and one output
      - has two outputs
      - A and B both
    answer: 3
    explanation: A and B both is the correct answer to “A differential amplifier ___________”. This question is standard in competitive examination syllabi for Op Amp.
    keyConcept: Op Amp
    testedIn:
      - WAPDA
      - NTDC
---


