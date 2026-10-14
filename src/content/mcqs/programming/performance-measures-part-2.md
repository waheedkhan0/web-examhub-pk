---
title: Performance Measures — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Performance Measures — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: performance-measures-part-2
topicName: Performance Measures — Part 2
author: ExamHub Academic Editorial Board
updatedDate: "2026-10-14"
difficulty: Exam-Level
targetExams:
  - FPSC
  - PPSC
  - NTS
  - NITB
  - PTS
questions:
  - id: 1
    question: What is the purpose of the Video tab?
    options:
      - To take video of the page
      - To capture screenshots of the test only
      - To take video of the test
      - To capture screen shots of the page
    answer: 3
    explanation: The Video tab allows you to capture screen shots of your page as it loads and views them as a video.
    keyConcept: Performance Measures
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: What is the task of the Advanced Panel?
    options:
      - Test stop running
      - Loading the pages
      - Skewing the results
      - None of the mentioned
    answer: 0
    explanation: In the Advanced panel, you can have the test stop running at document completion. That will tell us when the document.onload event is fired, instead of when all assets on the page are loaded.
    keyConcept: Performance Measures
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What is the vulnerability of XHR communications?
    options:
      - There is no vulnerability
      - Skewing the results
      - Registration and Skewing the results
      - Registering the test results
    answer: 2
    explanation: XHR communications that may happen after page load could register as new activity and skew the test results.
    keyConcept: Performance Measures
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: Which of the following methods adds and connects the point to the cubic bezier curve?
    options:
      - bezierConnect()
      - bezierCurveTo()
      - Connectbezier()
      - none of the mentioned
    answer: 1
    explanation: This method adds a new point P to the subpath and connects it to the current point with a cubic Bezier curve.
    keyConcept: Performance Measures
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: Which of the following methods adds an arc to the current subpath?
    options:
      - bezierCurveTo()
      - arcTo()
      - arc()
      - all of the mentioned
    answer: 2
    explanation: The arc() method adds an arc to the current subpath.
    keyConcept: Performance Measures
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What is the purpose of minifying the JavaScript?
    options:
      - To streamline the visits
      - To save the visits
      - All of the mentioned
      - None of the mentioned
    answer: 0
    explanation: To ensure that our first-time visits are as streamlined as possible, we need to minify our JavaScript.
    keyConcept: Performance Measures
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: From which did Minification concept originate?
    options:
      - JavaScript code efficiency
      - JavaScript interpreter
      - Both JavaScript code efficiency and interpreter
      - None of the mentioned
    answer: 1
    explanation: Minification is originally based on the idea that the JavaScript interpreter ignores white space, line breaks, and of course comments, so we can save on total file size of our .js files if we remove those unneeded characters.
    keyConcept: Performance Measures
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What is the purpose of the product Minify?
    options:
      - Storing the data
      - Streamlining the data
      - Proxies the JavaScript file
      - All of the mentioned
    answer: 2
    explanation: Minify proxies the JavaScript file;the script tag on the page points to Minify, which is a PHP file.
    keyConcept: Performance Measures
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What does the Minify set the encoding HTTP header?
    options:
      - deflate
      - gzip
      - both deflate and gzip
      - none of the mentioned
    answer: 2
    explanation: Minify reads the JavaScript file in, minifies it and when it responds it sets the accept encoding HTTP header to gzip, deflate.
    keyConcept: Performance Measures
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What is in-built in the Minify?
    options:
      - Dynamic compression
      - Static compression
      - Static content
      - None of the mentioned
    answer: 1
    explanation: Effectively Minify has built in HTTP static compression. This is especially useful if your web host doesn’t allow the gzipping of static content.
    keyConcept: Performance Measures
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: Which folder contains the Minify control panel?
    options:
      - /min/builder/
      - /builder/
      - /minify/build
      - /minify/builder
    answer: 0
    explanation: To navigate to the Minify control panel, it is located in the /min/builder/.
    keyConcept: Performance Measures
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: Which of the following is the order of Minify process?
    options:
      - Remove extraneous characters, gzip the response, Read
      - Remove extraneous characters, Read, gzip the response
      - Read, Remove extraneous characters, gzip the response
      - None of the mentioned
    answer: 2
    explanation: Minify reads in the content, decorates it by way of removing extraneous characters, and gzips the response.
    keyConcept: Performance Measures
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: YUI Compressor is analogous to
    options:
      - Minify
      - JavaScript
      - Both Minify and JavaScript
      - None of the mentioned
    answer: 0
    explanation: Just like Minify, YUI Compressor strips out all of the unnecessary characters from your JavaScript, including spaces, line breaks, and comments.
    keyConcept: Performance Measures
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What type of file is YUI Compressor?
    options:
      - Binary file
      - JAR file
      - Text file
      - Assembly file
    answer: 1
    explanation: "YUI Compressor is a jar file and runs from the command line. Because of this it is easily integrated into a build process. It looks like this: java -jar yuicompressor-[version].jar [options] [file name]"
    keyConcept: Performance Measures
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What is the function of a Closure Compiler?
    options:
      - Originates the JavaScript
      - Compiles the JavaScript
      - Rewrites JavaScript
      - None of the mentioned
    answer: 2
    explanation: Closure Compiler runs through a number of “scorched-earth” optimizations—it unfurls functions, rewrites variable names, and removes functions that are never called (as far as it can tell).
    keyConcept: Performance Measures
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What is scorched-earth optimizations?
    options:
      - They optimize based on certain constraints
      - They strip out everything including best practices
      - Based on certain constraints
      - None of the mentioned
    answer: 1
    explanation: Closure Compiler runs through a number of “scorched-earth” optimizations—it unfurls functions, rewrites variable names, and removes functions that are never called (as far as it can tell).
    keyConcept: Performance Measures
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: The Closure Compiler was introduced by
    options:
      - Microsoft
      - Apple
      - Google
      - None of the mentioned
    answer: 2
    explanation: The Closure Compiler was introduced by Google.
    keyConcept: Performance Measures
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: What is the return type of the script tag?
    options:
      - File I/O
      - Minify JavaScript
      - HTTP Request
      - Gzip encoded
    answer: 2
    explanation: The script tag sends the HTTP Request to the Minify.
    keyConcept: Performance Measures
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: What does the JS File return ?
    options:
      - File I/O
      - Minify JavaScript
      - HTTP Request
      - Gzip encoded
    answer: 1
    explanation: The JS File returns the Minify JavaScript.
    keyConcept: Performance Measures
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What is the outcome of using R along with minification?
    options:
      - Sheer file size reduction
      - File size increase
      - More efficient
      - None of the mentioned
    answer: 0
    explanation: Sheer file size reduction is the only one aspect of the overall determination got from the R along with the minification.
    keyConcept: Performance Measures
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: Which one of the following is more efficient in terms of the file size reduction?
    options:
      - YUI
      - Closure Compiler (advanced)
      - Minify
      - Closure Compiler (simple)
    answer: 1
    explanation: The Closure Compiler (advanced) has a more number percent of file size reduction by product.
    keyConcept: Performance Measures
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: Which of the following are JavaScript optimizers?
    options:
      - JSMin
      - Packer
      - Minify
      - Both JSMin and Packer
    answer: 3
    explanation: JavaScript optimizers such as JSMin and Packer are specially designed for modern web programming techniques, and are able to understand and preserve conditional comments, and similar.
    keyConcept: Performance Measures
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: Which of the following is the approach used to compress HTML in web servers and modern web browsers?
    options:
      - Content encoding
      - Content decoding
      - Compression algorithm – DEFLATE
      - None of the mentioned
    answer: 0
    explanation: Content encoding is an approach taken by compatible web servers and modern web browsers to compress HTML and related textual content, often in the gzip format.
    keyConcept: Performance Measures
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: Which is the game that requires extremely minified source in the Perl culture?
    options:
      - Perl pool
      - Perl golf
      - Both Perl pool and golf
      - None of the mentioned
    answer: 1
    explanation: In Perl culture, aiming at extremely minified source code is the purpose of the Perl golf game.
    keyConcept: Performance Measures
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: What does the Minify return back to the Script tag?
    options:
      - File I/O
      - Minify JavaScript
      - HTTP Request
      - Gzip encoded
      - The Minify sends back the gzip encoded back to the Script tag.
    answer: 3
    explanation: Gzip encoded is the correct answer to “What does the Minify return back to the Script tag”. This question is standard in competitive examination syllabi for Performance Measures.
    keyConcept: Performance Measures
    testedIn:
      - FPSC
      - PPSC
---


