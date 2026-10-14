---
title: Invocation And Performance Navigation — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Invocation And Performance Navigation — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: invocation-and-performance-navigation-part-2
topicName: Invocation And Performance Navigation — Part 2
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
    question: When does the browser stop rendering the HTML?
    options:
      - Inline JavaScript block
      - External JavaScript file
      - Both Inline JavaScript block & External JavaScript file
      - None of the mentioned
    answer: 2
    explanation: When the browser parses the HTML markup, it stops rendering the HTML when it encounters an inline JavaScript block or external JavaScript file. At this point, the user experiences rendering delays. Moving the JavaScript to the end of the HTML markup would completely eliminate these pauses in rendering.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: Which of the following handles painting the content on to the screen?
    options:
      - Rendering engine
      - JavaScript Interpreter
      - UI Layer
      - Network Layer
    answer: 0
    explanation: The rendering engine handles painting the content to the screen. When it encounters JavaScript, it hands it off to the JavaScript interpreter.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What does the rendering engine do when it encounters JavaScript?
    options:
      - Skips the code
      - Continues painting
      - Switches to Javascript Interpreter
      - None of the mentioned
    answer: 2
    explanation: The rendering engine handles painting the content to the screen. When it encounters JavaScript, it hands it off to the JavaScript interpreter.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: Which of the following runs the JavaScript code?
    options:
      - Just In Time compiler
      - JavaScript Interpreter
      - Both Just In Time compiler and JavaScript Interpreter
      - None of the mentioned
    answer: 1
    explanation: The JavaScript Interpreter runs the JavaScript code.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: Which of the following layer retrieves the content from the network?
    options:
      - Transport Layer
      - Application Layer
      - Network Layer
      - Physical Layer
    answer: 2
    explanation: he network layer retrieves the content from the network.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: Which of the following gets converted to DOM elements by the rendering engine?
    options:
      - Tokens
      - Strings
      - Address
      - All of the mentioned
    answer: 0
    explanation: The string returned by the network layer gets tokenized into meaningful chunks. The rendering engine then takes the tokens and converts them to DOM elements.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: Which of the below does not belong to the Render Engine work flow?
    options:
      - Paint DOM elements
      - Parse Content
      - uild DOM nodes in render tree
      - None of the mentioned
    answer: 3
    explanation: "All of the mentioned belongs to the Render Engine work flow. The Render engine work flow contains : 1. Parse Content 2. Build DOM nodes in render tree 3. Layout positioning of DOM elements 4. Paint DOM elements."
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: Which is the next step after retrieving the content in chunks?
    options:
      - Paint DOM elements
      - Parse Content
      - Build DOM nodes in render tree
      - None of the mentioned
    answer: 1
    explanation: After retrieving the content in chunks, the contents will be parsed.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What will happen after executing the script?
    options:
      - Execute script
      - Layout positioning of DOM elements
      - Paint DOM elements
      - Build DOM nodes in render tree
    answer: 3
    explanation: After executing the script, the DOM nodes will be built in the render tree.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What would happen if there were no script tags?
    options:
      - Build DOM nodes in render tree
      - Layout positioning of DOM elements
      - Paint DOM elements
      - Execute script
    answer: 0
    explanation: If there were no script tags, the DOM nodes will be built in the render tree.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What is the purpose of script loading?
    options:
      - Load Scripts programmatically
      - Load JavaScript files manually
      - Load JavaScript files programmatically
      - All of the mentioned
    answer: 2
    explanation: The script loading loads remote JavaScript files programmatically and allows us to trick the rendering engine.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: What will happen if the browser encounters a script tag without an src attribute?
    options:
      - Throws an error
      - Throws an exception
      - Sends it to the compiler
      - Sends it to the interpreter
    answer: 3
    explanation: If the browser encounters a script tag without a src attribute, the rendering engine simply passes the code to the JavaScript Interpreter for execution.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What is the solution to the absence of a script tag without an src attribute?
    options:
      - Resend the scripts
      - Create inline JavaScript
      - All of the mentioned
      - None of the mentioned
    answer: 1
    explanation: The solution to the absence of a script tag without an src attribute is to create inline JavaScript to append script tags to the document dynamically
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: How to get a particular value using the tagged name?
    options:
      - getElementbyID()
      - getElementsbyName()
      - getElementsbyTagName()
      - getTagName()
    answer: 2
    explanation: The method getElementsbyTagName() can be used to get a particular value using the tagged name associated with the document.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What should be the type of the script_url?
    options:
      - Object
      - String
      - Array
      - Any of the mentioned
    answer: 3
    explanation: The type of the script_url can be anything that will be compared with the typeof keyword’s result.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What is the purpose of using the async attribute in the script tag?
    options:
      - Load the script asynchronously
      - Load the script synchronously
      - Load the page asynchronously
      - Load the page synchronously
    answer: 0
    explanation: The async option is a native attribute that will tell the browser to load the script asynchronously.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: Why do we need to use an onload event in the script tag after using the async attribute?
    options:
      - Invoke code during page loading
      - Invoke code during script loading
      - Invoke code during downloading
      - None of the mentioned
    answer: 2
    explanation: "When using async you don’t know when the file will be downloaded, so you can attach an onload event handler to the script tag. This will allow you to invoke or instantiate any code that will need to be run when the file is downloaded:"
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: What is the purpose of the startTimeLogging() method?
    options:
      - Start the timer
      - Capture time logging
      - Capture timing data for referencing
      - All of the mentioned
    answer: 3
    explanation: The startTimeLogging() method captures the timing data for ad hoc, etc for referencing an uncached document.location.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: What is the type of datatype the async attribute optionally accepts?
    options:
      - Integer
      - String
      - Boolean
      - Decimal
    answer: 2
    explanation: The async attribute optionally accepts the boolean datatype of default value as true.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: What is the method used to create an element in the HTML DOM?
    options:
      - createDOMelement()
      - createElement()
      - none of the mentioned
    answer: 1
    explanation: The createElement() can be used to create an element in the HTML DOM.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: What is the purpose of the method createDocumentFragment()?
    options:
      - Creates a fragment object
      - Creates a document fragment
      - Creates imaginary node object
      - None of the mentioned
    answer: 2
    explanation: The createDocumentFragment() method creates a imaginary Node object, with all the properties and methods of the Node object.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What is the default value of the asyc attribute?
    options:
      - "0"
      - "1"
      - "False"
      - "True"
    answer: 3
    explanation: The async attribute optionally accepts a boolean value and by default holds the value true.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: What is the method to create a data frame ?
    options:
      - frame(data)
      - frameData()
      - data.frame()
      - none of the mentioned
    answer: 2
    explanation: The method to create a data frame is data.frame().
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: What is the purpose of creating a data frame?
    options:
      - Hold the page render time
      - Hold the load time
      - Hold the page render time & load time
      - None of the mentioned
    answer: 2
    explanation: You can create a data frame to hold the mean page render times for each test URL, and a data frame to hold the mean load time for each test URL.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: Which of the following navigator object properties is the same in both Netscape and IE?
    options:
      - navigator.appCodeName
      - navigator.appName
      - navigator.appVersion
      - none of the mentioned
    answer: 0
    explanation: The property navigator.appCodeName is the same in both Netscape and IE.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Which best explains getSelection()?
    options:
      - Returns the VALUE of a selected OPTION
      - Returns document.URL of the window in focus
      - Returns the value of cursor-selected text
      - Returns the VALUE of a checked radio input
    answer: 2
    explanation: The getSelection() method returns the value of the cursor-selected text.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: Which of the following are client-side JavaScript object?
    options:
      - Database
      - Cursor
      - Client
      - FileUpLoad
    answer: 2
    explanation: "Client-side JavaScript objects refer to objects that are available within the browser environment and interact directly with the user or the browser's document model. Option A: Database - This is not a client-side JavaScript object. Databases are typically managed server-side or through external services. Option B: Cursor - This is not a client-side JavaScript object. While cursors are used in database operations, they are not part of the JavaScript object model in the browser. Option C: Client - This is the correct answer. Client-side JavaScript objects include the browser's window, document, navigator, and other objects that interact directly with the user's interface. Option D: FileUpload - This is not a standard client-side JavaScript object. File uploads are handled via HTML input elements and server-side processing, though JavaScript can interact with these elements. Conclusion: In JavaScript, client-side objects are those that interact directly with the browser environment and user interface. Among the given options, only the Client is a client-side JavaScript object, making Option C the correct answer. Other options like Database , Cursor , and FileUpload are not considered standard client-side JavaScript objects."
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: What is the purpose of the method localeCompare()?
    options:
      - If the reference string comes before or after another string
      - If the reference string is validated
      - If the string is a reference string
      - None of the mentioned
    answer: 0
    explanation: The method localeCompare() returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: What is the purpose of lazy loading?
    options:
      - Immediate loading is necessary
      - Loading under command
      - Immediate loading is not necessary
      - None of the mentioned
    answer: 2
    explanation: Lazy loading is a kind of loading in which we don’t need our JavaScript code to be available as soon as the page loads.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: Where is the external JavaScript placed in the case of lazy loading?
    options:
      - After window.onload event
      - Before window.onload event
      - All of the mentioned
      - None of the mentioned
    answer: 0
    explanation: When we don’t need our JavaScript code to be available as soon as the page loads, we can script-load our external JavaScript after the window.onload event.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: What are the parameters of the attachEvent function?
    options:
      - Function
      - Function, Event
      - Event, Function
      - Event
    answer: 2
    explanation: "The attachEvent function accepts two parameters: the event to attach to, and the function to invoke when the event occurs."
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: What is the result when the showPerformanceMetrics() is called before loading the remote script?
    options:
      - Throws an exception
      - Throws an error
      - It will load by itself
      - None of the mentioned
    answer: 1
    explanation: If you try to make the call to perfLogger.showPerformanceMetrics() and the script hasn’t just loaded but also executed, then you will get an error.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: Which of the following is an attribute to the script object?
    options:
      - onclick
      - onload
      - onshow
      - all of the mentioned
    answer: 1
    explanation: Only onload is an attribute to the script object.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: Which is the method used to add an event listener?
    options:
      - addEventListener()
      - addListener()
      - addEvent(Listener)
      - addListener(Event)
    answer: 0
    explanation: The addEventListener() method is used to add an event listener to the script.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: What is the purpose of the domLoading attribute?
    options:
      - Document exists
      - Document can load
      - Document has loaded
      - Document begins to load
    answer: 3
    explanation: The domLoading attribute is used when the document begins to load.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: How is the render time calculated?
    options:
      - Date.Now()
      - Date.Now() – performance.timing.domLoading
      - performance.domLoading
      - Date.Now() – performance.domLoading
    answer: 1
    explanation: The render time is calculated as Date.Now() – performance.timing.domLoading.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: What is the inital step to set up a CSS Lazy Loading?
    options:
      - Fetching data
      - Loading the script
      - Loading the page
      - Adding the event listener
    answer: 0
    explanation: The CSS Lazy Loading is begun with fetching the JavaScript and the CSS files.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: What is the purpose of holding whatever tag you create in the attribute type?
    options:
      - To have more information
      - To identify the scripting language
      - All of the mentioned
      - None of the mentioned
    answer: 1
    explanation: A variable is created to hold whatever taag you create, and then branch the logic based on the value of type, which identifies it’s for JavaScript or for CSS.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: What does the appendChild() method perform?
    options:
      - Appends a node in the middle of the index taken as the parameter
      - Appends a node as the first child
      - Appends a node as the last child
      - None of the mentioned
    answer: 2
    explanation: The appendChild() method appends a node as the last child of a node.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: What should be the value of the type attribute of a variable if the type of file is CSS?
    options:
      - text/js/css
      - text/js
      - text/css
      - text
    answer: 2
    explanation: Since the type of file is CSS, the type attribute should hold the value text/css.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
---


