---
title: Document Object Model And Event Handling — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Document Object Model And Event Handling — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: document-object-model-and-event-handling-part-1
topicName: Document Object Model And Event Handling — Part 1
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
    question: Which function among the following lets to register a function to be invoked once?
    options:
      - setTimeout()
      - setTotaltime()
      - setInterval()
      - none of the mentioned
    answer: 0
    explanation: setTimeout() and setInterval() allow you to register a function to be invoked once or repeatedly after a specified amount of time has elapsed.
    keyConcept: Document Object Model And Event Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: Which function among the following lets to register a function to be invoked repeatedly after a certain time?
    options:
      - setTimeout()
      - setTotaltime()
      - setInterval()
      - none of the mentioned
    answer: 2
    explanation: setTimeout() and setInterval() allow you to register a function to be invoked once or repeatedly after a specified amount of time has elapsed.
    keyConcept: Document Object Model And Event Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Which is the handler method used to invoke when uncaught JavaScript exceptions occur?
    options:
      - Onhalt
      - Onerror
      - Both onhalt and onerror
      - None of the mentioned
    answer: 1
    explanation: The onerror handler method can be registered to be invoked when uncaught JavaScript exceptions occur.
    keyConcept: Document Object Model And Event Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: Which property is used to obtain browser vendor and version information?
    options:
      - modal
      - version
      - browser
      - navigator
    answer: 3
    explanation: The navigator property is used to obtain browser vendor and version information.
    keyConcept: Document Object Model And Event Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: Which method receives the return value of setInterval() to cancel future invocations?
    options:
      - clearInvocation()
      - cancelInvocation()
      - clearInterval()
      - None of the mentioned
    answer: 2
    explanation: Like setTimeout(), setInterval() returns a value that can be passed to clearInterval() to cancel any future invocations of the scheduled function.
    keyConcept: Document Object Model And Event Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: The setTimeout() belongs to which object?
    options:
      - Element
      - Window
      - Location
      - None of the mentioned
    answer: 1
    explanation: The setTimeout() method of the Window object schedules a function to run after a specified number of milliseconds elapses.
    keyConcept: Document Object Model And Event Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: Which method receives the return value of setTimeout() to cancel future invocations?
    options:
      - clearTimeout()
      - clearInterval()
      - clearSchedule()
      - none of the mentioned
    answer: 0
    explanation: setTimeout() returns a value that can be passed to clearTimeout() to cancel the execution of the scheduled function.
    keyConcept: Document Object Model And Event Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: What will happen if we call setTimeout() with a time of 0 ms?
    options:
      - Placed in stack
      - Placed in queue
      - Will run continuously
      - None of the mentioned
    answer: 1
    explanation: If you call setTimeout() with a time of 0 ms, the function you specify is not invoked right away. Instead, it is placed on a queue to be invoked “as soon as possible” after any currently pending event handlers finish running.
    keyConcept: Document Object Model And Event Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: To which object does the location property belong?
    options:
      - Window
      - Position
      - Element
      - Location
    answer: 0
    explanation: The location property of the Window object refers to a Location object, which represents the current URL of the document displayed in the window, and which also defines methods for making the window load a new document.
    keyConcept: Document Object Model And Event Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What is the result of the following code snippet? window . location === document . location
    options:
      - "False"
      - "True"
      - "0"
      - "1"
    answer: 1
    explanation: The above code always results in a true value.
    keyConcept: Document Object Model And Event Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: The URL property belongs to which of the following object?
    options:
      - Document
      - Element
      - Location
      - All of the mentioned
    answer: 0
    explanation: The Document object has a URL property, which is a static string that holds the URL of the document when it was first loaded.
    keyConcept: Document Object Model And Event Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: What does the location property represent?
    options:
      - Current DOM object
      - Current URL
      - Both DOM object and URL
      - None of the mentioned
    answer: 0
    explanation: The location property of a window is a reference to a Location object; it represents the current URL of the document being displayed in that window.
    keyConcept: Document Object Model And Event Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: Which among the following is not a property of the Location object?
    options:
      - protocol
      - host
      - hostee
      - hostname
    answer: 2
    explanation: The various properties of the location object are the protocol, host, hostname, port, search, and hash.
    keyConcept: Document Object Model And Event Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What is the return type of the hash property?
    options:
      - Query string
      - Packets
      - String
      - Fragment identifier
    answer: 3
    explanation: "The hash property returns the “fragment identifier” portion of the URL, if there is one: a hash mark (#) followed by an element ID."
    keyConcept: Document Object Model And Event Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What is the function used to extract arguments from the search property of a URL?
    options:
      - urlArgs()
      - url()
      - hash()
      - none of the mentioned
    answer: 0
    explanation: The urgArgs() function can be used to extract arguments from the search property of a URL .
    keyConcept: Document Object Model And Event Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: The decodeURIComponent() is defined by
    options:
      - Server-side JavaScript
      - Client-side JavaScript
      - Both Server-side and Client-side JavaScript
      - None of the mentioned
    answer: 1
    explanation: The decodeURIComponent() is a global function defined by client-side JavaScript.
    keyConcept: Document Object Model And Event Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: Which is the method that removes the current document from the browsing history before laoding the new document?
    options:
      - modify()
      - assign()
      - replace()
      - remove()
    answer: 2
    explanation: The replace() method is similar, but it removes the current document from the browsing history before loading the new document. When a script unconditionally loads a new document, the replace() method is often a better choice than assign().
    keyConcept: Document Object Model And Event Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: Why is the replace() method better than the assign() method?
    options:
      - Reliable
      - Highly managable
      - More efficient
      - Handles unconditional loading
    answer: 3
    explanation: The replace() method is similar, but it removes the current document from the browsing history before loading the new document. When a script unconditionally loads a new document, the replace() method is often a better choice than assign().
    keyConcept: Document Object Model And Event Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: What is the purpose of the assign() method?
    options:
      - Only loading
      - Loading of window and display
      - Displays already present window
      - Unloading of window
    answer: 1
    explanation: The assign() method of the Location object makes the window load and display the document at the URL you specify.
    keyConcept: Document Object Model And Event Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: The history property belongs to which object?
    options:
      - Element
      - Window
      - History
      - Location
    answer: 2
    explanation: The history property of the Window object refers to the History object for the window.
    keyConcept: Document Object Model And Event Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: What is the code snippet to go back to a history twice?
    options:
      - history(2)
      - history(-2)
      - history.go(-2)
      - history.go(2)
    answer: 2
    explanation: The above code snippet goes back 2, like clicking the Back button twice.
    keyConcept: Document Object Model And Event Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: If the window has child windows, how will the browsing histories be affected?
    options:
      - Numerically interleaved
      - Chronologically interleaved
      - Both Numerically and Chronologically interleaved
      - None of the mentioned
    answer: 1
    explanation: If a window contains child windows, the browsing histories of the child windows are chronologically interleaved with the history of the main window.
    keyConcept: Document Object Model And Event Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: The length property belongs to which of the following objects?
    options:
      - Window
      - Element
      - History
      - Document
    answer: 2
    explanation: The length property of the History object specifies the number of elements in the browsing history list, but for security reasons scripts are not allowed to access the stored URLs.
    keyConcept: Document Object Model And Event Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: What is the datatype of the go() method’s parameter?
    options:
      - String
      - Integer
      - Double
      - Float
    answer: 1
    explanation: The go() method takes an integer argument and can skip any number of pages forward and backward in the history list.
    keyConcept: Document Object Model And Event Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: What is the special feature of the modern web applications?
    options:
      - Can alter contents without loading document
      - Must load the document to manipulate
      - All of the mentioned
      - None of the mentioned
    answer: 0
    explanation: Modern web applications can dynamically alter their own content without loading a new document.
    keyConcept: Document Object Model And Event Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: The navigator property belongs to which of the following object?
    options:
      - Document
      - Window
      - Navigator
      - Location
    answer: 2
    explanation: The navigator property of a Window object refers to a Navigator object that contains browser vendor and version number information.
    keyConcept: Document Object Model And Event Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: What is the vendor-neutral synonym for navigator?
    options:
      - staticData
      - purposeInformation
      - dataInformation
      - clientInformation
    answer: 3
    explanation: IE supports clientInformation as a vendor-netural synonym for navigator.
    keyConcept: Document Object Model And Event Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: Which is the preferred testing nowadays for scripting?
    options:
      - Software testing
      - Feature testing
      - Blackbox testing
      - Whitebox testing
    answer: 1
    explanation: "In the past, the Navigator object was commonly used by scripts to determine if they were running in Internet Explorer or Netscape. This “browser-sniffing” approach is problematic because it requires constant tweaking as new browsers and new versions of existing browsers are introduced. Today, feature testing is preferred: rather than making assumptions about particular browser versions and their features, you simply test for the feature (i.e., the method or property) you need."
    keyConcept: Document Object Model And Event Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: Which of the below properties can be used for browser sniffing?
    options:
      - platform
      - appVersion
      - both platform and appVersion
      - none of the mentioned
    answer: 2
    explanation: The platform and appVersion can be used for browser sniffing.
    keyConcept: Document Object Model And Event Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: Where is the information of the userAgent property located?
    options:
      - appId
      - appName
      - platform
      - appVersion
    answer: 3
    explanation: The string that the browser sends in its USER-AGENT HTTP header. This property typically contains all the information in appVersion and may contain additional details as well. Like appVersion, there is no standard format. Since this property contains the most information, browser-sniffing code typically uses it.
    keyConcept: Document Object Model And Event Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: Each tab in the single web browser window is called as
    options:
      - Browser Information
      - Browsing context
      - Both Browser Information & Browsing context
      - None of the mentioned
    answer: 1
    explanation: A single web browser window on your desktop may contain several tabs. Each tab is an independent browsing context.
    keyConcept: Document Object Model And Event Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: Nested documents in the HTML can be done using
    options:
      - frame
      - nest
      - iframe
      - into
    answer: 2
    explanation: HTML documents may contain nested documents using an iframe element. An iframe creates a nested browsing context represented by a Window object of its own.
    keyConcept: Document Object Model And Event Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: What is the distinction made by the Client-side JavaScript between windows, tabs, iframes, and frames ?
    options:
      - They are all browsing contexts
      - They are all browsing informations
      - They are all Window contexts
      - They are all Window objects
    answer: 0
    explanation: "Client-side JavaScript makes very little distinction between windows, tabs, iframes, and frames: they are all browsing contexts, and to JavaScript, they are all Window objects."
    keyConcept: Document Object Model And Event Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: What is the distinction made by JavaScript between windows, tabs, iframes, and frames ?
    options:
      - They are all browsing contexts
      - They are all browsing informations
      - They are all Window contexts
      - They are all Window objects
    answer: 3
    explanation: "Client-side JavaScript makes very little distinction between windows, tabs, iframes, and frames: they are all browsing contexts, and to JavaScript, they are all Window objects."
    keyConcept: Document Object Model And Event Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: A new web browser window can be opened using which method of the Window object ?
    options:
      - createtab()
      - Window.open()
      - open()
      - all of the mentioned
    answer: 1
    explanation: You can open a new web browser window with the open() method of the Window object. Window.open() loads a specified URL into a new or existing window and returns the Window object that represents that window.
    keyConcept: Document Object Model And Event Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: What will happen if the first argument of open() is omitted?
    options:
      - Error Page
      - Remains in the same page
      - about:blank
      - None of the mentioned
    answer: 1
    explanation: When the first argument of the open() is omitted, the about:blank is opened.
    keyConcept: Document Object Model And Event Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: Which object serves as the global object at the top of the scope chain?
    options:
      - Hash
      - Property
      - Element
      - Window
    answer: 3
    explanation: The Window object serves as the global object at the top of the scope chain in client-side JavaScript.
    keyConcept: Document Object Model And Event Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: Which is the property of a Window object that holids the name of the frame?
    options:
      - name
      - title
      - description
      - none of the mentioned
    answer: 0
    explanation: The name property of a Window object holds the name of the frame, if it has one. This property is writable, and scripts can set it as desired.
    keyConcept: Document Object Model And Event Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: When will the fourth argument to open() useful?
    options:
      - When the second argument names a retired window
      - When the first argument names an existing window
      - When the second argument names an existing window
      - When the first argument names a retired window
    answer: 2
    explanation: The fourth argument to open() is useful only when the second argument names an existing window. This fourth argument is a boolean value that indicates whether the URL specified as the first argument should replace the current entry in the window’s browsing history (true) or create a new entry in the window’s browsing history (false). Omitting this argument is the same as passing false.
    keyConcept: Document Object Model And Event Handling
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: The inner frame within a top-level window can be referred as
    options:
      - parent(parent)
      - parent.parent
      - parent*parent
      - none of the mentioned
    answer: 1
    explanation: If a frame is contained within another frame that is contained within a top-level window, that frame can refer to the top-level window as parent.parent.
    keyConcept: Document Object Model And Event Handling
    testedIn:
      - FPSC
      - PPSC
---


