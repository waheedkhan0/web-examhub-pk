---
title: Signal Processing — Part 1 MCQs with Explanations
description: Practice high-yield Electronics & Communications Engineering MCQs on Signal Processing — Part 1 with worked academic solutions for FPSC, PPSC, PTA, PAEC, NTS.
subject: electronics-engineering
subjectName: Electronics & Communications Engineering
topic: signal-processing-part-1
topicName: Signal Processing — Part 1
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
    question: A signal x(t) has a Fourier transform X(ω). If x(t) is a real and odd function of t, then X(ω) is
    options:
      - A real and even function of ω
      - An imaginary and odd function of ω
      - An imaginary and even function of ω
      - A real and odd function of ω
    answer: 0
    explanation: "Here's the explanation for the given Fourier Transform question: The question asks about the properties of the Fourier Transform, X(ω), of a signal x(t) when x(t) is both real and odd. Here's a breakdown to understand the answer: Key Concepts: * Fourier Transform: A mathematical tool that decomposes a signal into its constituent frequencies. * Real Function: A function whose values are real numbers for all real inputs. * Odd Function: A function x(t) is odd if x(-t) = -x(t). Odd functions are symmetrical about the origin. * Even Function: A function x(t) is even if x(-t) = x(t). Even functions are symmetrical about the y-axis. Properties of Fourier Transform with Symmetry: * If x(t) is real, then X(ω) has Hermitian symmetry, meaning X(-ω) = X * (ω) where * denotes complex conjugate. In simpler terms, the real part of X(ω) is even, and the imaginary part is odd. * If x(t) is odd, the Fourier transform X(ω) is imaginary. This means it only contains imaginary components and no real components. Applying to the question: Since x(t) is both real and odd: 1. Because x(t) is real, we know X(ω) has Hermitian symmetry. 2. Because x(t) is odd, we know X(ω) is purely imaginary. Combining these two properties, if X(ω) is purely imaginary (say, X(ω) = j*Y(ω), where Y(ω) is a real-valued function) and has Hermitian symmetry, it means: X(-ω) = X * (ω) j*Y(-ω) = (j*Y(ω)) * j*Y(-ω) = -j*Y(ω) (because the conjugate of j is -j) Y(-ω) = -Y(ω) This means Y(ω) is an odd function. Since X(ω) = j*Y(ω), and Y(ω) is odd, then X(ω) itself is an imaginary and odd function. Therefore, the correct answer is Option B: An imaginary and odd function of ω"
    keyConcept: Signal Processing
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: If G(f) represents the Fourier transform of a signal g(t) which is real and odd symmetric in time, then
    options:
      - G(f) is complex
      - G(f) is imaginary
      - G(f) is real
      - G(f) is real and non-negative
    answer: 1
    explanation: "Okay, let's break down this Fourier Transform question for beginners! The question is asking what happens to the Fourier Transform (G(f)) of a signal g(t) , when that signal is both real and odd-symmetric . Let's define each part: * Fourier Transform: Think of it as a way to see what frequencies make up a signal. It transforms a signal from the time domain (how it changes over time) to the frequency domain (how much of each frequency is present). * Real Signal: A signal is real if its values are real numbers (no imaginary part). Most signals we deal with in the real world are real (e.g., sound waves, voltage). * Odd Symmetry: A signal g(t) is odd-symmetric if g(-t) = -g(t). This means if you flip the signal around the y-axis and then flip it around the x-axis, you get the same signal back. A simple example is g(t) = t. Now, here's the key concept: The Fourier Transform has some properties related to symmetry. Important Relationship: When g(t) is real and odd , its Fourier Transform G(f) will be purely imaginary . Let's look at why the other options are incorrect. * Option A: G(f) is complex: While *any* Fourier Transform *can* be complex, the combination of real and odd symmetry *simplifies* it. * Option C: G(f) is real: A real and even signal in the time domain would give a real fourier transform. * Option D: G(f) is real and non-negative: A real and non-negative time-domain signal doesn't guarantee the same characteristics in the frequency domain. Therefore, the answer is Option B: G(f) is imaginary ."
    keyConcept: Signal Processing
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: The Fourier transform of a real valued time signal has
    options:
      - Odd symmetry
      - Even symmetry
      - Conjugate symmetry
      - No symmetry
    answer: 2
    explanation: Conjugate symmetry is the correct answer to “The Fourier transform of a real valued time signal has”. This question is standard in competitive examination syllabi for Signal Processing.
    keyConcept: Signal Processing
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: The RMS value of a rectangular wave of period T, having a value of +V for a duration, T 1 (< T) and -V for the duration, T - T 1 = T 2 equals
    options:
      - $$V$$
      - $${{{T_1} - {T_2}} \over T}V$$
      - $${V \over {\sqrt 2 }}$$
      - $${{{T_1}} \over {{T_2}}}V$$
    answer: 0
    explanation: $$V$$ is the correct answer to “The RMS value of a rectangular wave of period T, having a value of +V for a duration, T 1 (< T) and -V for the duration, T - T 1 = T 2 equals”. This question is standard in competitive examination syllabi for Signal Processing.
    keyConcept: Signal Processing
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: A continuous time function x(t) is periodic with period T. The function is sampled uniformly with a sampling period T s . In which one of the following cases is the sampled signal periodic?
    options:
      - $$T = \sqrt 2 {T_s}$$
      - T = 1.2Ts
      - Always
      - Never
    answer: 1
    explanation: T = 1.2Ts is the correct answer to “A continuous time function x(t) is periodic with period T. The function is sampled uniformly with a sampling period T s . In which one of the following cases is the sampled signal periodic”. This question is standard in competitive examination syllabi for Signal Processing.
    keyConcept: Signal Processing
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: The phase response of a passband waveform at the receiver is given by $$\varphi \left( f \right) = - 2\pi \alpha \left( {f - {f_c}} \right) - 2\alpha \beta {f_c},$$ where f c is the centre frequency, and α and β are positive constants. The actual signal propagation delay from the transmittance to receiver is
    options:
      - $${{\alpha - \beta } \over {\alpha + \beta }}$$
      - $${{\alpha \beta } \over {\alpha + \beta }}$$
      - α
      - β
    answer: 2
    explanation: α is the correct answer to “The phase response of a passband waveform at the receiver is given by $$\varphi \left( f \right) = - 2\pi \alpha \left( {f - {f_c}} \right) - 2\alpha \beta {f_c},$$ where f c is the centre frequency, and α and β are positive constants. The actual signal propagation delay from the transmittance to receiver is”. This question is standard in competitive examination syllabi for Signal Processing.
    keyConcept: Signal Processing
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: For a given sample-and-hold circuit, if the value of the hold capacitor is increased, then
    options:
      - Drop rate decreases and acquisition time decreases
      - Drop rate decreases and acquisition time increases
      - Drop rate increases and acquisition time decreases
      - Drop rate increases and acquisition time increases
    answer: 1
    explanation: Drop rate decreases and acquisition time increases is the correct answer to “For a given sample-and-hold circuit, if the value of the hold capacitor is increased, then”. This question is standard in competitive examination syllabi for Signal Processing.
    keyConcept: Signal Processing
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: A continuous time LTI system is described by $${{{d^2}y\left( t \right)} \over {d{t^2}}} + 4{{dy\left( t \right)} \over {dt}} + 3y\left( t \right) = 2{{dx\left( t \right)} \over {dt}} + 4x\left( t \right)$$ Assuming zero initial conditions, the response y(t) of the above system for the input x(t) = e -2t u(t) is given by
    options:
      - (et - e3t)u(t)
      - (e-t - e-3t)u(t)
      - (e-t + e-3t)u(t)
      - (et + e3t)u(t)
    answer: 1
    explanation: (e-t - e-3t)u(t) is the correct answer to “A continuous time LTI system is described by $${{{d^2}y\left( t \right)} \over {d{t^2}}} + 4{{dy\left( t \right)} \over {dt}} + 3y\left( t \right) = 2{{dx\left( t \right)} \over {dt}} + 4x\left( t \right)$$ Assuming zero initial conditions, the response y(t) of the above system for the input x(t) = e -2t u(t) is given by”. This question is standard in competitive examination syllabi for Signal Processing.
    keyConcept: Signal Processing
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: A rectangular pulse train s(t) as shown in the figure is convolved with the signal cos 2 (4π × 10 3 t). The convolved signal will be a
    options:
      - DC
      - 12 kHz sinusoid
      - 8 kHz sinusoid
      - 14 kHz sinusoid
    answer: 0
    explanation: DC is the correct answer to “A rectangular pulse train s(t) as shown in the figure is convolved with the signal cos 2 (4π × 10 3 t). The convolved signal will be a”. This question is standard in competitive examination syllabi for Signal Processing.
    keyConcept: Signal Processing
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: The transfer function of a zero-order hold is
    options:
      - $${{1 - \exp \left( { - {T_s}} \right)} \over s}$$
      - $${1 \over s}$$
      - "1"
      - $${1 \over {\left[ {1 - \exp \left( { - {T_s}} \right)} \right]}}$$
    answer: 0
    explanation: $${{1 - \exp \left( { - {T_s}} \right)} \over s}$$ is the correct answer to “The transfer function of a zero-order hold is”. This question is standard in competitive examination syllabi for Signal Processing.
    keyConcept: Signal Processing
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: The 3-dB bandwidth of the low-pass signal e -t u(t), where u(t) is the unit step function, is given by
    options:
      - $${1 \over {2\pi }}Hz$$
      - $${1 \over {2\pi }}\sqrt {\sqrt 2 - 1} Hz$$
      - ∞
      - 1 Hz
    answer: 0
    explanation: $${1 \over {2\pi }}Hz$$ is the correct answer to “The 3-dB bandwidth of the low-pass signal e -t u(t), where u(t) is the unit step function, is given by”. This question is standard in competitive examination syllabi for Signal Processing.
    keyConcept: Signal Processing
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: A system is described by the differential equation $${{{d^2}y} \over {d{t^2}}} + 5{{dy} \over {dt}} + 6y\left( t \right) = x\left( t \right).$$ Let x(t) be a rectangular pulse given by $$x\left( t \right) = \left\{ {\matrix{ {1,} & {0 < t < 2} \cr {0,} & {{\rm{otherwise}}} \cr } } \right.$$ Assuming that y(0) = 0 and $${{dy} \over {dt}} = 0$$ at t = 0, the Laplace transform of y(t) is
    options:
      - $${{{e^{ - 2s}}} \over {s\left( {s + 2} \right)\left( {s + 3} \right)}}$$
      - $${{1 - {e^{ - 2s}}} \over {s\left( {s + 2} \right)\left( {s + 3} \right)}}$$
      - $${{{e^{ - 2s}}} \over {\left( {s + 2} \right)\left( {s + 3} \right)}}$$
      - $${{1 - {e^{ - 2s}}} \over {\left( {s + 2} \right)\left( {s + 3} \right)}}$$
    answer: 1
    explanation: $${{1 - {e^{ - 2s}}} \over {s\left( {s + 2} \right)\left( {s + 3} \right)}}$$ is the correct answer to “A system is described by the differential equation $${{{d^2}y} \over {d{t^2}}} + 5{{dy} \over {dt}} + 6y\left( t \right) = x\left( t \right).$$ Let x(t) be a rectangular pulse given by $$x\left( t \right) = \left\{ {\matrix{ {1,} & {0 < t < 2} \cr {0,} & {{\rm{otherwise}}} \cr } } \right.$$ Assuming that y(0) = 0 and $${{dy} \over {dt}} = 0$$ at t = 0, the Laplace transform of y(t) is”. This question is standard in competitive examination syllabi for Signal Processing.
    keyConcept: Signal Processing
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: A signal containing only two frequency components (3 kHz and 6 kHz) is sampled at the rate of 8 kHz, and then passed through a low pass filter with a cut-off frequency of 8 kHz. The filter output
    options:
      - Is an undistorted version of the original signal
      - Contains only the 3 kHz component
      - Contains the 3 kHz component and a spurious component of 2 kHz
      - Contains both the components of the original signal and two spurious components of 2 kHz and 5 kHz
    answer: 3
    explanation: Contains both the components of the original signal and two spurious components of 2 kHz and 5 kHz is the correct answer to “A signal containing only two frequency components (3 kHz and 6 kHz) is sampled at the rate of 8 kHz, and then passed through a low pass filter with a cut-off frequency of 8 kHz. The filter output”. This question is standard in competitive examination syllabi for Signal Processing.
    keyConcept: Signal Processing
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: If the signal $$x\left( t \right) = {{\sin \left( t \right)} \over {\pi t}} * {{\sin \left( t \right)} \over {\pi t}}$$ with $$ * $$ denoting the convolution operation, then x(t) is equal to
    options:
      - $${{\sin \left( t \right)} \over {\pi t}}$$
      - $${{\sin \left( {2t} \right)} \over {2\pi t}}$$
      - $${{2\sin \left( t \right)} \over {\pi t}}$$
      - $${\left( {{{\sin \left( t \right)} \over {\pi t}}} \right)^2}$$
    answer: 0
    explanation: $${{\sin \left( t \right)} \over {\pi t}}$$ is the correct answer to “If the signal $$x\left( t \right) = {{\sin \left( t \right)} \over {\pi t}} * {{\sin \left( t \right)} \over {\pi t}}$$ with $$ * $$ denoting the convolution operation, then x(t) is equal to”. This question is standard in competitive examination syllabi for Signal Processing.
    keyConcept: Signal Processing
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: A sequence x(n) with the z-transform X(z) = z 4 + z 2 - 2z + 2 - 3z -4 is applied as an input to a linear, time-invariant system with the impulse response h(n) = 2δ(n - 3) where $$\delta \left( n \right) = \left\{ {\matrix{ {1,} & {n = 0} \cr {0,} & {{\rm{otherwise}}} \cr } } \right.$$ The output at n = 4 is
    options:
      - "-6"
      - Zero
      - "2"
      - "-4"
    answer: 1
    explanation: Zero is the correct answer to “A sequence x(n) with the z-transform X(z) = z 4 + z 2 - 2z + 2 - 3z -4 is applied as an input to a linear, time-invariant system with the impulse response h(n) = 2δ(n - 3) where $$\delta \left( n \right) = \left\{ {\matrix{ {1,} & {n = 0} \cr {0,} & {{\rm{otherwise}}} \cr } } \right.$$ The output at n = 4 is”. This question is standard in competitive examination syllabi for Signal Processing.
    keyConcept: Signal Processing
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: The Laplace transform of i(t) is given by $$I\left( s \right) = {2 \over {s\left( {1 + s} \right)}}$$ As t → ∞, the value of i(t) tends to
    options:
      - "0"
      - "1"
      - "2"
      - ∞
    answer: 2
    explanation: 2 is the correct answer to “The Laplace transform of i(t) is given by $$I\left( s \right) = {2 \over {s\left( {1 + s} \right)}}$$ As t → ∞, the value of i(t) tends to”. This question is standard in competitive examination syllabi for Signal Processing.
    keyConcept: Signal Processing
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: A real-valued signal x(t) limited to the frequency band $$\left| f \right| \le {W \over 2}$$ is passed through a linear time invariant system whose frequency response is $$H\left( f \right) = \left\{ {\matrix{ {{e^{ - j4\pi f,}}} & {\left| f \right| \le {W \over 2}} \cr {0,} & {\left| f \right| > {W \over 2}} \cr } } \right.$$ The output of the system is
    options:
      - x(t + 4)
      - x(t - 4)
      - x(t + 2)
      - x(t - 2)
    answer: 3
    explanation: x(t - 2) is the correct answer to “A real-valued signal x(t) limited to the frequency band $$\left| f \right| \le {W \over 2}$$ is passed through a linear time invariant system whose frequency response is $$H\left( f \right) = \left\{ {\matrix{ {{e^{ - j4\pi f,}}} & {\left| f \right| \le {W \over 2}} \cr {0,} & {\left| f \right| > {W \over 2}} \cr } } \right.$$ The output of the system is”. This question is standard in competitive examination syllabi for Signal Processing.
    keyConcept: Signal Processing
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: "The signal x(t) = sin(14000πt), where t is in seconds is sampled at a rate of 9000 samples per second. The sampled signal is the input to an ideal lowpass filter with frequency response H(t) as follows: \\[H\\left( f \\right) = \\left\\{ {\\begin{array}{*{20}{c}} {1,}&{\\left| f \\right| \\leqslant 12kHz} \\\\ {0,}&{\\left| f \\right| > 12kHz} \\end{array}} \\right.\\] What is the number of sinusoids in the output and their frequencies in kHz?"
    options:
      - Number = 1, frequency = 7
      - Number = 3, frequencies = 2, 7, 11
      - Number = 2, frequencies = 2, 7
      - Number = 2, frequencies = 7, 11
    answer: 1
    explanation: "Number = 3, frequencies = 2, 7, 11 is the correct answer to “The signal x(t) = sin(14000πt), where t is in seconds is sampled at a rate of 9000 samples per second. The sampled signal is the input to an ideal lowpass filter with frequency response H(t) as follows: \\[H\\left( f \\right) = \\left\\{ {\\begin{array}{*{20}{c}} {1,}&{\\left| f \\right| \\leqslant 12kHz} \\\\ {0,}&{\\left| f \\right| > 12kHz} \\end{array}} \\right.\\] What is the number of sinusoids in the output and their frequencies in kHz”. This question is standard in competitive examination syllabi for Signal Processing."
    keyConcept: Signal Processing
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: A signal $$2\cos \left( {{{2\pi } \over 3}t} \right) - \cos \left( {\pi t} \right)$$ is the input to an LTI system with the transfer function $$H\left( s \right) = {e^s} + {e^{ - s}}$$ If C k denote the k th coefficient in the exponential Fourier series of the output signal, then C 3 is equal to
    options:
      - "0"
      - "1"
      - "2"
      - "3"
    answer: 1
    explanation: 1 is the correct answer to “A signal $$2\cos \left( {{{2\pi } \over 3}t} \right) - \cos \left( {\pi t} \right)$$ is the input to an LTI system with the transfer function $$H\left( s \right) = {e^s} + {e^{ - s}}$$ If C k denote the k th coefficient in the exponential Fourier series of the output signal, then C 3 is equal to”. This question is standard in competitive examination syllabi for Signal Processing.
    keyConcept: Signal Processing
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: Let $$g\left( t \right) = {e^{ - \pi {t^2}}}$$ and h(t) is a filter matched to g(t). If g(t) is applied as input to h(t), then the Fourier transform of the output is
    options:
      - $${e^{ - \pi {t^2}}}$$
      - $${e^{ - {{\pi {t^2}} \over 2}}}$$
      - $${e^{ - \pi \left| f \right|}}$$
      - $${e^{ - 2\pi {t^2}}}$$
    answer: 3
    explanation: $${e^{ - 2\pi {t^2}}}$$ is the correct answer to “Let $$g\left( t \right) = {e^{ - \pi {t^2}}}$$ and h(t) is a filter matched to g(t). If g(t) is applied as input to h(t), then the Fourier transform of the output is”. This question is standard in competitive examination syllabi for Signal Processing.
    keyConcept: Signal Processing
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: A band-limited signal with a maximum frequency of 5 kHz is to be sampled. According to the sampling theorem, the sampling frequency which is not valid is
    options:
      - 5 kHz
      - 12 kHz
      - 15 kHz
      - 20 kHz
    answer: 0
    explanation: 5 kHz is the correct answer to “A band-limited signal with a maximum frequency of 5 kHz is to be sampled. According to the sampling theorem, the sampling frequency which is not valid is”. This question is standard in competitive examination syllabi for Signal Processing.
    keyConcept: Signal Processing
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: The result of the convolution x(- t) ∗ δ(- t - t 0 ) is
    options:
      - x(t + t0)
      - x(t - t0)
      - x(- t + t0)
      - x(- t - t0)
    answer: 3
    explanation: x(- t - t0) is the correct answer to “The result of the convolution x(- t) ∗ δ(- t - t 0 ) is”. This question is standard in competitive examination syllabi for Signal Processing.
    keyConcept: Signal Processing
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: Two discrete time systems with impulse responses h 1 [n] = δ[n - 1] and h 2 [n] = δ[n - 2] are connected in cascade. The overall impulse response of the cascaded system is
    options:
      - δ[n - 1] + δ[n - 2]
      - δ[n - 4]
      - δ[n - 3]
      - δ[n - 1] δ[n - 2]
    answer: 2
    explanation: δ[n - 3] is the correct answer to “Two discrete time systems with impulse responses h 1 [n] = δ[n - 1] and h 2 [n] = δ[n - 2] are connected in cascade. The overall impulse response of the cascaded system is”. This question is standard in competitive examination syllabi for Signal Processing.
    keyConcept: Signal Processing
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: The ACF of a rectangular pulse of duration T is
    options:
      - A rectangular pulse of duration T
      - A rectangular pulse of duration 2T
      - A triangular pulse of duration T
      - A triangular pulse of duration 2T
    answer: 3
    explanation: A triangular pulse of duration 2T is the correct answer to “The ACF of a rectangular pulse of duration T is”. This question is standard in competitive examination syllabi for Signal Processing.
    keyConcept: Signal Processing
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: Assuming zero initial condition, the response y(t) of the system given below to a unit step input u(t) is \[\xrightarrow{{U\left( s \right)}}\boxed{\frac{1}{s}}\xrightarrow{{Y\left( s \right)}}\]
    options:
      - u(t)
      - tu(t)
      - $$\frac{{{t^2}}}{2}u\left( t \right)$$
      - e-tu(t)
    answer: 1
    explanation: tu(t) is the correct answer to “Assuming zero initial condition, the response y(t) of the system given below to a unit step input u(t) is \[\xrightarrow{{U\left( s \right)}}\boxed{\frac{1}{s}}\xrightarrow{{Y\left( s \right)}}\]”. This question is standard in competitive examination syllabi for Signal Processing.
    keyConcept: Signal Processing
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Let x(t) ↔ X(jω) be Fourier Transform pair. The Fourier Transform of the signal x(5t - 3) in terms of X(jω) is given as
    options:
      - $${1 \over 5}{e^{-{{j3\omega } \over 5}}}X\left( {{{j\omega } \over 5}} \right)$$
      - $${1 \over 5}{e^{{{j3\omega } \over 5}}}X\left( {{{j\omega } \over 5}} \right)$$
      - $${1 \over 5}{e^{ - j3\omega }}X\left( {{{j\omega } \over 5}} \right)$$
      - $${1 \over 5}{e^{j3\omega }}X\left( {{{j\omega } \over 5}} \right)$$
    answer: 0
    explanation: $${1 \over 5}{e^{-{{j3\omega } \over 5}}}X\left( {{{j\omega } \over 5}} \right)$$ is the correct answer to “Let x(t) ↔ X(jω) be Fourier Transform pair. The Fourier Transform of the signal x(5t - 3) in terms of X(jω) is given as”. This question is standard in competitive examination syllabi for Signal Processing.
    keyConcept: Signal Processing
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: A 1.0 kHz signal is flat-top sampled at the rate of 1800 samples/sec and the samples are applied to an ideal rectangular LPF with cut-off frequency of 1100 Hz, then the output of the filter contains
    options:
      - Only 800 Hz component
      - 800 Hz and 900 Hz components
      - 800 Hz and 1000 Hz components
      - 800 Hz, 900 Hz and 1000 Hz components
    answer: 1
    explanation: 800 Hz and 900 Hz components is the correct answer to “A 1.0 kHz signal is flat-top sampled at the rate of 1800 samples/sec and the samples are applied to an ideal rectangular LPF with cut-off frequency of 1100 Hz, then the output of the filter contains”. This question is standard in competitive examination syllabi for Signal Processing.
    keyConcept: Signal Processing
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: The input and output of a continuous time system are respectively denoted by x(t) and y(t). Which of the following descriptions corresponds to a casual system?
    options:
      - y(t) = x(t - 2) + x(t + 4)
      - y(t) = (t - 4)x(t + 1)
      - y(t) = (t + 4)x(t - 1)
      - y(t) = (t + 5)x(t + 5)
    answer: 2
    explanation: y(t) = (t + 4)x(t - 1) is the correct answer to “The input and output of a continuous time system are respectively denoted by x(t) and y(t). Which of the following descriptions corresponds to a casual system”. This question is standard in competitive examination syllabi for Signal Processing.
    keyConcept: Signal Processing
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: The impulse response of a continuous time system is given by h(t) = δ(t - 1) + δ(t - 3). The value of the step response at t = 2 is
    options:
      - "0"
      - "1"
      - "2"
      - "3"
    answer: 1
    explanation: 1 is the correct answer to “The impulse response of a continuous time system is given by h(t) = δ(t - 1) + δ(t - 3). The value of the step response at t = 2 is”. This question is standard in competitive examination syllabi for Signal Processing.
    keyConcept: Signal Processing
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: Choose the function f(t), -∞ < t < ∞, for which a Fourier series cannot be defined?
    options:
      - 3sin (25t)
      - 4cos (20t + 3) + 2sin(710t)
      - exp (-|t|)sin (25t)
      - "1"
    answer: 2
    explanation: exp (-|t|)sin (25t) is the correct answer to “Choose the function f(t), -∞ < t < ∞, for which a Fourier series cannot be defined”. This question is standard in competitive examination syllabi for Signal Processing.
    keyConcept: Signal Processing
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: The Laplace transform of a function f(t) u(t), where f(t) is periodic with period T, is A(s) times the Laplace transform of its first period. Then
    options:
      - A(s) = s
      - $$A\left( s \right) = {1 \over {\left( {1 - \exp \left( { - {T_s}} \right)} \right)}}$$
      - $$A\left( s \right) = {1 \over {\left( {1 + \exp \left( { - {T_s}} \right)} \right)}}$$
      - A(s) = exp(Ts)
    answer: 1
    explanation: $$A\left( s \right) = {1 \over {\left( {1 - \exp \left( { - {T_s}} \right)} \right)}}$$ is the correct answer to “The Laplace transform of a function f(t) u(t), where f(t) is periodic with period T, is A(s) times the Laplace transform of its first period. Then”. This question is standard in competitive examination syllabi for Signal Processing.
    keyConcept: Signal Processing
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: The DFT of a vector [a b c d] is the vector [α β γ δ]. Consider the product \[\left[ {p\,q\,r\,s} \right] = \left[ {a\,b\,c\,d} \right]\left[ {\begin{array}{*{20}{c}} a&b&c&d \\ d&a&b&c \\ c&d&a&b \\ b&c&d&a \end{array}} \right]\] The DFT of the vector [p q r s] is a scaled version of
    options:
      - "[α2 β2 γ2 δ2]"
      - $$\left[ {\sqrt \alpha \sqrt \beta \sqrt \gamma \sqrt \delta } \right]$$
      - "[α + β β + δ δ + γ γ + α]"
      - "[α β γ δ]"
    answer: 0
    explanation: "[α2 β2 γ2 δ2] is the correct answer to “The DFT of a vector [a b c d] is the vector [α β γ δ]. Consider the product \\[\\left[ {p\\,q\\,r\\,s} \\right] = \\left[ {a\\,b\\,c\\,d} \\right]\\left[ {\\begin{array}{*{20}{c}} a&b&c&d \\\\ d&a&b&c \\\\ c&d&a&b \\\\ b&c&d&a \\end{array}} \\right]\\] The DFT of the vector [p q r s] is a scaled version of”. This question is standard in competitive examination syllabi for Signal Processing."
    keyConcept: Signal Processing
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: The Laplace transform of a continuous-time signal x(t) is $$X\left( s \right) = {{5 - s} \over {{s^2} - s - 2}}.$$ If the Fourier transform of this signal exists, then x(t) is
    options:
      - e2tu(t) - 2e-tu(t)
      - "-e2tu(-t) + 2e-tu(t)"
      - "-e2tu(-t) - 2e-tu(t)"
      - e2tu(-t) - 2e-tu(t)
    answer: 2
    explanation: "-e2tu(-t) - 2e-tu(t) is the correct answer to “The Laplace transform of a continuous-time signal x(t) is $$X\\left( s \\right) = {{5 - s} \\over {{s^2} - s - 2}}.$$ If the Fourier transform of this signal exists, then x(t) is”. This question is standard in competitive examination syllabi for Signal Processing."
    keyConcept: Signal Processing
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: A network consisting of a finite number of linear resistor (R), inducer (L), and capacitor (C) elements, connected all in series or all in parallel, is excited with a source of the form $$\sum\limits_{k = 1}^3 {{a_x}\,\cos \left( {k{\omega _0}t} \right),{\rm{were}}\,{a_k} \ne 0,} \,{\omega _0} \ne 0.$$ The source has nonzero impedance. Which one of the following is a possible form of the output measured across a resistor in the network?
    options:
      - $$\sum\limits_{k = 1}^3 {{b_x}\,\cos \left( {k{\omega _0}t + {\phi _k}} \right),{\rm{were}}\,{b_k} \ne {a_k},} \,\forall K$$
      - $$\sum\limits_{k = 1}^3 {{b_x}\,\cos \left( {k{\omega _0}t + {\phi _k}} \right),{\rm{were}}\,{b_k} \ne 0,} \,\forall K$$
      - $$\sum\limits_{k = 1}^3 {{a_x}\,\cos \left( {k{\omega _0}t + {\phi _k}} \right)} $$
      - $$\sum\limits_{k = 1}^2 {{a_x}\,\cos \left( {k{\omega _0}t + {\phi _k}} \right)} $$
    answer: 2
    explanation: $$\sum\limits_{k = 1}^3 {{a_x}\,\cos \left( {k{\omega _0}t + {\phi _k}} \right)} $$ is the correct answer to “A network consisting of a finite number of linear resistor (R), inducer (L), and capacitor (C) elements, connected all in series or all in parallel, is excited with a source of the form $$\sum\limits_{k = 1}^3 {{a_x}\,\cos \left( {k{\omega _0}t} \right),{\rm{were}}\,{a_k} \ne 0,} \,{\omega _0} \ne 0.$$ The source has nonzero impedance. Which one of the following is a possible form of the output measured across a resistor in the network”. This question is standard in competitive examination syllabi for Signal Processing.
    keyConcept: Signal Processing
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: The complex envelope of the bandpass signal $$x\left( t \right) = \sqrt 2 \left( {{{\sin \left( {{{\pi t} \over 5}} \right)} \over {{{\pi t} \over 5}}}} \right)\sin \left( {\pi t - {\pi \over 4}} \right),$$ centered about $$f = {1 \over 2}Hz,$$ is
    options:
      - $$\left( {{{\sin \left( {{{\pi t} \over 5}} \right)} \over {{{\pi t} \over 5}}}{e^{j{\pi \over 4}}}} \right)$$
      - $$\left( {{{\sin \left( {{{\pi t} \over 5}} \right)} \over {{{\pi t} \over 5}}}{e^{ - j{\pi \over 4}}}} \right)$$
      - $$\sqrt 2 \left( {{{\sin \left( {{{\pi t} \over 5}} \right)} \over {{{\pi t} \over 5}}}{e^{j{\pi \over 4}}}} \right)$$
      - $$\sqrt 2 \left( {{{\sin \left( {{{\pi t} \over 5}} \right)} \over {{{\pi t} \over 5}}}{e^{ - j{\pi \over 4}}}} \right)$$
    answer: 2
    explanation: $$\sqrt 2 \left( {{{\sin \left( {{{\pi t} \over 5}} \right)} \over {{{\pi t} \over 5}}}{e^{j{\pi \over 4}}}} \right)$$ is the correct answer to “The complex envelope of the bandpass signal $$x\left( t \right) = \sqrt 2 \left( {{{\sin \left( {{{\pi t} \over 5}} \right)} \over {{{\pi t} \over 5}}}} \right)\sin \left( {\pi t - {\pi \over 4}} \right),$$ centered about $$f = {1 \over 2}Hz,$$ is”. This question is standard in competitive examination syllabi for Signal Processing.
    keyConcept: Signal Processing
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: The power in the signal $$s\left( t \right) = 8\cos \left( {20\pi t - {\pi \over 2}} \right) + 4\,\sin \left( {15\pi t} \right)$$ is
    options:
      - "40"
      - "41"
      - "42"
      - "82"
    answer: 0
    explanation: 40 is the correct answer to “The power in the signal $$s\left( t \right) = 8\cos \left( {20\pi t - {\pi \over 2}} \right) + 4\,\sin \left( {15\pi t} \right)$$ is”. This question is standard in competitive examination syllabi for Signal Processing.
    keyConcept: Signal Processing
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: A 5-point sequence x[n] is given as x[-3] = 1, x[-2] = 1, x[-1] = 0, x[0] = 5, x[1] = 1. Let X(e jω ) denote the discrete-time Fourier transform of x[n]. The value of $$\int\limits_{ - \pi }^\pi {X\left( {{e^{j\omega }}} \right)} d\omega $$
    options:
      - "5"
      - 10π
      - 16π
      - 5 + j10π
    answer: 1
    explanation: 10π is the correct answer to “A 5-point sequence x[n] is given as x[-3] = 1, x[-2] = 1, x[-1] = 0, x[0] = 5, x[1] = 1. Let X(e jω ) denote the discrete-time Fourier transform of x[n]. The value of $$\int\limits_{ - \pi }^\pi {X\left( {{e^{j\omega }}} \right)} d\omega $$”. This question is standard in competitive examination syllabi for Signal Processing.
    keyConcept: Signal Processing
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: The Fourier series representation of an impulse train denoted by $$s\left( t \right) = \sum\limits_{n = - \infty }^\infty {\delta \left( {t - n{T_0}} \right)} \,{\rm{is}}\,{\rm{given}}\,{\rm{by}}$$
    options:
      - $${1 \over {{T_0}}}\sum\limits_{n = - \infty }^\infty {\exp \left( { - {{j2\pi nt} \over {{T_0}}}} \right)} $$
      - $${1 \over {{T_0}}}\sum\limits_{n = - \infty }^\infty {\exp } \left( { - {{j\pi nt} \over {{T_0}}}} \right)$$
      - $${1 \over {{T_0}}}\sum\limits_{n = - \infty }^\infty {\exp } \left( {{{j\pi nt} \over {{T_0}}}} \right)$$
      - $${1 \over {{T_0}}}\sum\limits_{n = - \infty }^\infty {\exp } \left( {{{j2\pi nt} \over {{T_0}}}} \right)$$
    answer: 0
    explanation: $${1 \over {{T_0}}}\sum\limits_{n = - \infty }^\infty {\exp \left( { - {{j2\pi nt} \over {{T_0}}}} \right)} $$ is the correct answer to “The Fourier series representation of an impulse train denoted by $$s\left( t \right) = \sum\limits_{n = - \infty }^\infty {\delta \left( {t - n{T_0}} \right)} \,{\rm{is}}\,{\rm{given}}\,{\rm{by}}$$”. This question is standard in competitive examination syllabi for Signal Processing.
    keyConcept: Signal Processing
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: Let Y(s) be the unit-step response of a causal system having a transfer function $$G\left( s \right) = {{3 - s} \over {\left( {s + 1} \right)\left( {s + 3} \right)}}$$ That is, $$Y\left( s \right) = {{G\left( s \right)} \over s}.$$ The forced response of the system is
    options:
      - u(t) - 2e-t u(t) + e-3t u(t)
      - 2u(t)
      - u(t)
      - 2u(t) - 2e-t u(t) + e-3t u(t)
    answer: 0
    explanation: u(t) - 2e-t u(t) + e-3t u(t) is the correct answer to “Let Y(s) be the unit-step response of a causal system having a transfer function $$G\left( s \right) = {{3 - s} \over {\left( {s + 1} \right)\left( {s + 3} \right)}}$$ That is, $$Y\left( s \right) = {{G\left( s \right)} \over s}.$$ The forced response of the system is”. This question is standard in competitive examination syllabi for Signal Processing.
    keyConcept: Signal Processing
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: Consider the system shown in the figure below. The transfer function $$\frac{{Y\left( z \right)}}{{X\left( z \right)}}$$ of the system is
    options:
      - $$\frac{{1 + a{z^{ - 1}}}}{{1 + b{z^{ - 1}}}}$$
      - $$\frac{{1 + b{z^{ - 1}}}}{{1 + a{z^{ - 1}}}}$$
      - $$\frac{{1 + a{z^{ - 1}}}}{{1 - b{z^{ - 1}}}}$$
      - $$\frac{{1 - b{z^{ - 1}}}}{{1 - a{z^{ - 1}}}}$$
    answer: 0
    explanation: $$\frac{{1 + a{z^{ - 1}}}}{{1 + b{z^{ - 1}}}}$$ is the correct answer to “Consider the system shown in the figure below. The transfer function $$\frac{{Y\left( z \right)}}{{X\left( z \right)}}$$ of the system is”. This question is standard in competitive examination syllabi for Signal Processing.
    keyConcept: Signal Processing
    testedIn:
      - FPSC
      - PPSC
---


