---
title: Caching And Debugging — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Caching And Debugging — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: caching-and-debugging-part-2
topicName: Caching And Debugging — Part 2
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
    question: When does a memory leak happen?
    options:
      - Browser doesn’t release memory from objects unnecessary
      - Browser releases too many memories
      - All of the mentioned
      - None of the mentioned
    answer: 0
    explanation: Memory leak happens when the browser for some reason doesn’t release memory from objects which are not needed any more.
    keyConcept: Caching And Debugging
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: Which of the following functions are referenced internally?
    options:
      - setTimeout
      - setInterval
      - both setTimeout and setInterval
      - none of the mentioned
    answer: 2
    explanation: Functions used in setTimeout/setInterval are referenced internally and tracked until complete, then cleaned up.
    keyConcept: Caching And Debugging
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: What is the purpose of destroying the functions and objects?
    options:
      - Consume unnecessary CPU cycles
      - Prevent the dropping of reference count to 0
      - Centralize the responsibility to clean up
      - All of the mentioned
    answer: 3
    explanation: "The primary purpose of a destroy function is to centralize the responsibility for cleaning up anything that the object has done that will: 1. Prevent its reference count from dropping to 0 (for example, removing problematic event listeners and callbacks and unregistering from any services). 2. Consume unnecessary CPU cycles, such as intervals or animations."
    keyConcept: Caching And Debugging
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: When does a cycle occur during memory leak?
    options:
      - No reference occurs
      - Two objects reference
      - One object gets referenced
      - None of the above
    answer: 1
    explanation: A cycle happens when two objects reference each other in such a way that both objects retain each other.
    keyConcept: Caching And Debugging
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: Which of the following is a way to retain an object in memory?
    options:
      - Console Log
      - Closures
      - Destory objects
      - All of the mentioned
    answer: 0
    explanation: One particularly obscure way to retain an object in memory is to log it to the console.
    keyConcept: Caching And Debugging
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: In which format does JavaScript support external JavaScript?
    options:
      - .js
      - .php
      - .js/php
      - .jss
    answer: 0
    explanation: JavaScript supports external JavaScript, in the form of .js file.
    keyConcept: Caching And Debugging
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What are the two parts of JavaScript libraries?
    options:
      - “script” tag and “body” tag
      - External JavaScript and the “script” tag
      - “html” tag and “body” tag
      - None of the mentioned
    answer: 1
    explanation: "All JavaScript libraries consists of two parts: 1. The external JavaScript itself, which is simply a text file with the containing JavaScript code, saved as a .js file. 2. A “script” tag referencing the external JavaScript file and defined on the page(s) that uses the library."
    keyConcept: Caching And Debugging
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: Which of the following is added to prefs.js when the console is automatically opened during JavaScript error?
    options:
      - user_pref("javascript.console.open_on_error", true)
      - user_pref("javascript.console.open_error ", true)
      - user_pref("javascript.console.open_error ", false)
      - user_pref(" javascript.console.open_on_error", false)
    answer: 0
    explanation: is added to prefs.js when the console is automatically opened during JavaScript error.
    keyConcept: Caching And Debugging
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: Which of the following is possible to be referenced in external JavaScript?
    options:
      - cpp
      - cs
      - php
      - all of the mentioned
    answer: 2
    explanation: One of the lesser known sides of external JavaScript is the ability to reference a PHP file instead of the familiar .js file.
    keyConcept: Caching And Debugging
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: Which of the following attribute takes the source of the PHP file?
    options:
      - img
      - src
      - source
      - none of the mentioned
    answer: 1
    explanation: "The syntax to referencing a PHP file using external JavaScript is consistent enough with what we already know: < script type =\"text/javascript\" src =\"myscript.php\">"
    keyConcept: Caching And Debugging
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What kind of path can the PHP file be?
    options:
      - Absolute
      - Relative
      - Either Absolute or Relative
      - Both Absolute and Relative
    answer: 2
    explanation: The PHP file is either an absolute or relative path to a PHP script instead of the usual .js file.
    keyConcept: Caching And Debugging
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: Which of the following global variables is used to get parameters?
    options:
      - $HTTP_GET_VAR[]
      - $HTTP_GET_VARS()
      - $HTTP_GET_VARS
      - $HTTP_GET_VARS[]
    answer: 3
    explanation: The global variable $HTTP_GET_VARS[] is used to get parameters.
    keyConcept: Caching And Debugging
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What is the purpose of the RegExp method test()?
    options:
      - Tests for a match in its float parameter
      - Tests for a match in its string parameter
      - Tests for a match in its integer parameter
      - None of the mentioned
    answer: 1
    explanation: The RegExp method test() tests for a match in its string parameter.
    keyConcept: Caching And Debugging
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What is the purpose of the function parameter filetype?
    options:
      - File type to be expected
      - File type previously got
      - File type that should not be got
      - None of the mentioned
    answer: 0
    explanation: The function parameter “filetype” lets you tell the script what file type to expect before loading.
    keyConcept: Caching And Debugging
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: Which of the following is the method used to add an element to the desired location?
    options:
      - add.element()
      - element.add()
      - element.appendChild()
      - none of the mentioned
    answer: 2
    explanation: The method element.appendChild() is used to add the element to the desired location within the document tree.
    keyConcept: Caching And Debugging
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: Which program code doesn’t need preprocessing before being run?
    options:
      - Text
      - Script
      - Both Text and Script
      - None of the mentioned
    answer: 1
    explanation: A script is program code that doesn’t need pre-processing (e.g. compiling) before being run.
    keyConcept: Caching And Debugging
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What is the significance of scripting?
    options:
      - Convenient
      - Dynamic
      - Reachable
      - All of the mentioned
    answer: 1
    explanation: Scripting makes Web pages more dynamic) For example, without reloading a new version of a page it may allow modifications to the content of that page, or allow content to be added to or sent from that page. The former has been called DHTML (Dynamic HTML), and the latter AJAX (Asynchronous JavaScript and XML).
    keyConcept: Caching And Debugging
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: What is the purpose of XMLHttpRequest?
    options:
      - Multiple loading
      - Load content by loading new document
      - Load content without loading new document
      - None of the mentioned
    answer: 2
    explanation: XMLHttpRequest makes it possible to load additional content from the Web without loading a new document, a core component of AJAX.
    keyConcept: Caching And Debugging
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: Which API makes the user’s current location available to browser-based application?
    options:
      - Java API
      - SDL API
      - Object API
      - Geolocation API
    answer: 3
    explanation: The Geolocation API makes the user’s current location available to browser-based applications.
    keyConcept: Caching And Debugging
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: Which of the following ensures additional interactivity mechanism?
    options:
      - WAI ARIA
      - Geolocation API
      - Object API
      - None of the mentioned
    answer: 0
    explanation: WAI ARIA offers mechanisms to ensure that this additional interactivity remains usable independent of devices and disabilities.
    keyConcept: Caching And Debugging
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: What is the necessity to have API?
    options:
      - Guide to performing activities
      - Describe particular task
      - Both performing activities and Describe particular task
      - None of the mentioned
    answer: 1
    explanation: An API may describe the ways in which a particular task is performed.
    keyConcept: Caching And Debugging
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What is the purpose of the event onAirEvent?
    options:
      - Content is played
      - Content is transfered
      - Both Content is played and transfered
      - None of the mentioned
    answer: 0
    explanation: The event onAirEvent is fired when the player starts playing content being broadcasted on the channel.
    keyConcept: Caching And Debugging
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: What is the purpose of the event disconnectionEvent?
    options:
      - Player demands for disconnection
      - Player disconnects from the channel
      - There is no user interaction
      - None of the mentioned
    answer: 1
    explanation: The event disconnectionEvent is fired when the player disconnects from the channel, whether a result of user interaction or not.
    keyConcept: Caching And Debugging
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: When does one use the event ready?
    options:
      - Before loading
      - During loading
      - After loading
      - None of the mentioned
    answer: 2
    explanation: The event ready is fired after the player is done loading. It is safe to interact with it after this event fired.
    keyConcept: Caching And Debugging
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: When does one use the method startOverlays()?
    options:
      - Edit ad request
      - Delete ad request
      - Create ad request
      - None of the mentioned
    answer: 2
    explanation: A new ad request is made every time when the method startOverlays() gets called.
    keyConcept: Caching And Debugging
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: What is the reason for avoiding the attributes property in the HTML DOM?
    options:
      - Found unncessary
      - Attributes don’t have attributes
      - Attributes have attributes
      - None of the mentioned
    answer: 1
    explanation: The reason for avoiding the attributes property in the HTML DOM is because Attributes don’t have attributes.
    keyConcept: Caching And Debugging
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: What is the purpose of the method nodeMap.setNamedItem()?
    options:
      - Sets ID
      - Sets attribute node
      - Sets element name
      - None of the mentioned
    answer: 1
    explanation: The method nodeMap.setNamedItem() sets the specified attribute node (by name).
    keyConcept: Caching And Debugging
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: How is everything treated in HTML DOM?
    options:
      - Node
      - Attributes
      - Elements
      - All of the mentioned
    answer: 0
    explanation: "In the HTML DOM (Document Object Model), everything is a node: 1. The document itself is a document node. 2. All HTML elements are element nodes. 3. All HTML attributes are attribute nodes. 4. Text inside HTML elements are text nodes. 5. Comments are comment nodes."
    keyConcept: Caching And Debugging
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: What does the NamedNodeMap object represent in the HTML DOM?
    options:
      - Unordered collection of elements
      - Unordered collection of attributes
      - Unordered collection of nodes
      - All of the mentioned
    answer: 3
    explanation: In the HTML DOM, the NamedNodeMap object represents an unordered collection of an elements attribute nodes.
    keyConcept: Caching And Debugging
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: What is the purpose of the Attr object in the HTML DOM?
    options:
      - Used to focus on a particular part of the HTML page
      - HTML Attribute
      - Used to arrange elements
      - None of the mentioned
    answer: 1
    explanation: In the HTML DOM, the Attr object represents an HTML attribute.
    keyConcept: Caching And Debugging
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: What is the work of the form control elements in the HTML DOM?
    options:
      - User Interface elements
      - All the possible elements
      - Debugging elements
      - None of the mentioned
    answer: 0
    explanation: "Form control elements: The form object contains all the elements defined for that object such as text fields, buttons, radio buttons, and checkboxes."
    keyConcept: Caching And Debugging
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: How are the objects organized in the HTML DOM?
    options:
      - Class-wise
      - Queue
      - Hierarchy
      - None of the mentioned
    answer: 2
    explanation: The objects are organized in the hierarchy format in the HTML DOM.
    keyConcept: Caching And Debugging
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: Which of the following is a type of HTML DOM?
    options:
      - Legacy DOM
      - W3C DOM
      - IE4 DOM
      - All of the mentioned
    answer: 3
    explanation: All of the above mentioned are types of HTML DOM.
    keyConcept: Caching And Debugging
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: What is the purpose of the Legacy DOM ?
    options:
      - Makes the scripting easier
      - Allows access to few keys and elements
      - All of the mentioned
      - None of the mentioned
    answer: 1
    explanation: "The Legacy DOM: This is the model which was introduced in early versions of JavaScript language. It is well supported by all browsers, but allows access only to certain key portions of documents, such as forms, form elements, and images."
    keyConcept: Caching And Debugging
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: Which object is the top of the hierarchy?
    options:
      - Window Object
      - Document Object
      - Form Object
      - Form Control Elements
    answer: 0
    explanation: Window object is the top of the hierarchy. It is the outmost element of the object hierarchy.
    keyConcept: Caching And Debugging
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: In which part does the form validation occur?
    options:
      - Client
      - Server
      - Both Client and Server
      - None of the mentioned
    answer: 1
    explanation: Form validation used to occur at the server, after the client had entered all necessary data and then pressed the Submit button.
    keyConcept: Caching And Debugging
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: What would happen if the data in the client had been wrong?
    options:
      - Sends back the data
      - Waits for correction
      - Sends back the data and Waits for correction
      - None of the mentioned
    answer: 2
    explanation: If some of the data that had been entered by the client had been in the wrong form or was simply missing, the server would have to send all the data back to the client and request that the form be resubmitted with correct information.
    keyConcept: Caching And Debugging
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: What is the purpose of the basic validation?
    options:
      - Data correctness
      - Mere data existence
      - Both Data correctness and Mere data existence
      - None of the mentioned
    answer: 1
    explanation: First of all, the form must be checked to make sure data was entered into each form field that required it. This would need just loop through each field in the form and check for data.
    keyConcept: Caching And Debugging
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: What is the purpose of data format validation?
    options:
      - Data correctness
      - Mere data existence
      - Both Data correctness and Mere data existence
      - None of the mentioned
    answer: 0
    explanation: The data that is entered must be checked for correct form and value. This would need to put more logic to test correctness of data.
    keyConcept: Caching And Debugging
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: Which is the function that is called to validate a data?
    options:
      - validate()
      - valid()
      - validation()
      - none of the mentioned
    answer: 3
    explanation: There is no such function to validate a data) But, you can write a function with any name to validate the data.
    keyConcept: Caching And Debugging
    testedIn:
      - FPSC
      - PPSC
---


