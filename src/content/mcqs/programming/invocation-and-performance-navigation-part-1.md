---
title: Invocation And Performance Navigation — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Invocation And Performance Navigation — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: invocation-and-performance-navigation-part-1
topicName: Invocation And Performance Navigation — Part 1
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
    question: Which of the following property gives access to the JavaScript memory usage data?
    options:
      - performance.memory
      - memory(performance)
      - performance(memory)
      - none of the mentioned
    answer: 0
    explanation: The property performance.memory gives access to the JavaScript memory usage data.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: What is the purpose of the timing property in the window.performance object?
    options:
      - Time of navigation event
      - Time of page load event
      - Time of navigation and page load event
      - None of the mentioned
    answer: 2
    explanation: Each performance.timing attribute shows the time of a navigation event (such as when the page was requested) or page load event (such as when the DOM began loading), measured in milliseconds.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Which of the following property is associated with the Response event?
    options:
      - responseStart
      - responseEnd
      - both responseStart and responseEnd
      - none of the mentioned
    answer: 2
    explanation: "The properties associated with the Response event are : 1. responseStart 2. responseEnd."
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: Which of the following computation is correct to calculate the time taken for page load once the page is received from the server?
    options:
      - responseEnd-loadEventEnd
      - loadEventEnd-responseEnd
      - loadEventEnd/responseEnd
      - responseEnd/loadEventEnd
    answer: 1
    explanation: "The time taken for page load once the page is received from the server: loadEventEnd-responseEnd ."
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: Which of the following property is associated with the Processing event?
    options:
      - domComplete
      - domContentLoaded
      - domInteractive
      - none of the mentioned
    answer: 3
    explanation: "The following properties are associated with the Processing event : 1. domComplete 2. domContentLoaded 3. domInteractive 4. domLoading 5. unLoadEnd"
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: What does it indicate when the type attribute of the navigation object is set to 2?
    options:
      - Navigation by moving back through history
      - Navigation by moving forward through history
      - Navigation by moving back & forward through history
      - None of the mentioned
    answer: 2
    explanation: When the type attribute of the navigation object is set to 2, it means that the navigation is done by moving back or forward through history.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What does the method Performance.now() return?
    options:
      - DOMTimeStamp
      - DOMHighResTimeStamp
      - DOMStamp
      - TimeStamp
    answer: 1
    explanation: The Performance.now() method returns a DOMHighResTimeStamp, measured in milliseconds, accurate to one thousandth of a millisecond equal to the number of milliseconds since the PerformanceTiming.navigationStart property and the call to the method.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: Which of the following is a read-only property?
    options:
      - PerformanceTiming.navigationStart
      - PerformanceTiming.fetchStart
      - PerformanceTiming.navigationStart & PerformanceTiming.fetchStart
      - None of the mentioned
    answer: 2
    explanation: Both PerformanceTiming.navigationStart and also the PerformanceTiming.fetchStart are a read-only properties.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: Which of the following is an interface?
    options:
      - Time
      - Timing
      - Performance
      - PerformanceTiming
    answer: 3
    explanation: PerformanceTiming is an interface in JavaScript.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: How many properties are associated with the Response event?
    options:
      - "1"
      - "2"
      - "3"
      - "4"
    answer: 1
    explanation: "There are a total of 2 properties associated with the Response event namely : 1. PerformanceTiming.responseEnd 2. PerformanceTiming.responseStart"
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: How many properties does a prototype object have?
    options:
      - "6"
      - "7"
      - "8"
      - "9"
    answer: 1
    explanation: "There are a total of 7 properties in the prototype object namely : 1. perceivedTime 2. redirectTime 3. cacheTime 4. dnsLookupTime 5. tcpConnectionTime 6. roundTripTime 7. pageRenderTime"
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: Which of the following does not serialize the undefined values or objects within an object?
    options:
      - JSON.string
      - JSON
      - JSON.stringify
      - None of the mentioned
    answer: 2
    explanation: JSON.stringify does not serialize undefined values or functions within an object.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: How many properties are there in the interface PerformanceTiming?
    options:
      - "21"
      - "22"
      - "23"
      - "24"
    answer: 0
    explanation: There are a total of 23 properties associated with the interface PerformanceTiming.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: How many properties are there in window.performance object?
    options:
      - "1"
      - "4"
      - "2"
      - "3"
    answer: 2
    explanation: "There are totally 2 properties associated with the window.performance and they are: 1. navigation 2. type"
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What is the purpose of the navigation property in the window.performance object?
    options:
      - To which page the user navigated
      - How the user navigated
      - All of the mentioned
      - None of the mentioned
    answer: 1
    explanation: The navigation tells how the user navigated to the page.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What is the purpose of the property PerformanceTiming.navigationStart?
    options:
      - Ready to end the navigation
      - Ready to jump the navigation
      - Ready for navigation
      - None of the mentioned
    answer: 2
    explanation: "The PerformanceTiming.navigationStart read-only property returns an unsigned long long representing the moment, in miliseconds since the UNIX epoch, right after the prompt for unload terminates on the previous document in the same browsing context. If there is no previous document, this value will be the same as : PerformanceTiming.fetchStart."
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: Which of the following does JSON.stringify not serialize?
    options:
      - Undefined values
      - Functions within an object
      - Both Undefined values and Functions within an object
      - None of the mentioned
    answer: 2
    explanation: JSON.stringify does not serialize undefined values or functions within an object.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: What is the purpose of the property PerformanceTiming.fetchStart?
    options:
      - Browser ready to fetch input
      - Browser ready to fetch document
      - Browser ready to fetch summary
      - All of the mentioned
    answer: 1
    explanation: The PerformanceTiming.fetchStart read-only property returns an unsigned long long representing the moment, in miliseconds since the UNIX epoch, the browser is ready to fetch the document using an HTTP request.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: Which of the following property is associated with the Request event?
    options:
      - requestStart
      - requestEnd
      - both requestStart and requestEnd
      - none of the mentioned
    answer: 0
    explanation: "The Request event has only one property : requestStart."
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: Which of the following API can be used to get the timing without affecting the page loading process?
    options:
      - Navigation API
      - Timing API
      - Navigation Timing API
      - None of the mentioned
    answer: 2
    explanation: The timing code is in the page, so it affects how the page loads and the time that takes.. The Navigation Timing API can be used to get the timing without affecting the page loading process.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: How many read-only attributes are present in the navigator object?
    options:
      - "1"
      - "2"
      - "3"
      - "4"
    answer: 1
    explanation: "There are a total of 2 read-only attributes present in the navigator object namely : 1. redirectCount 2. type"
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: Why are HTTP redirects significant?
    options:
      - TCP connection available
      - Complete roundtrip absent
      - Complete roundtrip present
      - None of the mentioned
    answer: 1
    explanation: HTTP redirects are significant because they cause a complete roundtrip for each redirect. The original request is returned from the web server as either a 301 or a 302 with the path to the new location. The browser must then initialize a new TCP connection and send a new request for the new location.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: Where does the DNS reply go to in a single HTTP redirect?
    options:
      - Browser
      - Client
      - Server
      - DNS Server
    answer: 0
    explanation: The DNS reply goes to the Browser in a single HTTP redirect.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: How can one access the redirectCount property?
    options:
      - navigation.redirectCount
      - performance.navigation.redirectCount
      - performance.redirectCount
      - redirectCount
    answer: 1
    explanation: "The redirectCount property can be accessed as : performance.navigation.redirectCount."
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: How many constant values can the property type be represented?
    options:
      - "2"
      - "3"
      - "4"
      - "5"
    answer: 2
    explanation: Totally 4 constant values can be represented by the property type.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Which of the following constants has the value 255?
    options:
      - TYPE_NAVIGATE
      - TYPE_RELOAD
      - TYPE_BACK_FORWARD
      - TYPE_RESERVED
    answer: 3
    explanation: "TYPE_RESERVED: Has the value of 255 and is a catch-all for any navigation type not defined above."
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: What is the purpose of the constant TYPE_RELOAD?
    options:
      - Reload performed
      - Reload not performed
      - Reload must be performed
      - None of the mentioned
    answer: 0
    explanation: "TYPE_RELOAD: Has the value of 1, indicating that the current page was arrived at via a reload operation."
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: What does the constant TYPE_BACK_FORWRD indicate?
    options:
      - Navigation via browser history
      - Navigation via user request
      - Navigation via URL
      - None of the mentioned
    answer: 0
    explanation: "TYPE_BACK_FORWARD: Has the value of 2, indicating that the page was navigated to via the browser history, either using the back or forward buttons or programmatically through the browser’s history object."
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: Which of the following constants hold the value 2?
    options:
      - TYPE_NAVIGATE
      - TYPE_RELOAD
      - TYPE_BACK_FORWARD
      - TYPE_RESERVED
    answer: 2
    explanation: "TYPE_BACK_FORWARD: Has the value of 2, indicating that the page was navigated to via the browser history, either using the back or forward buttons or programmatically through the browser’s history object."
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: Where does the DNS Lookup direct to ?
    options:
      - Browser
      - Client
      - Server
      - DNS Server
    answer: 3
    explanation: The DNS Lookup directs to the DNS Server.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: How many properties are available in a memory object?
    options:
      - "1"
      - "2"
      - "3"
      - "4"
    answer: 2
    explanation: "There are a total of 3 memory objects namely : 1. jsHeapSizeLimit 2. totalJsHeapSize 3. usedJsHeapSize"
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: What is a heap in JavaScript?
    options:
      - Collection of Java objects
      - Collection of JavaScript objects
      - Collection of memory usage values
      - Collection of data stored in memory
    answer: 1
    explanation: The heap is the collection of JavaScript objects that the interpreter keeps in resident memory.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: What is the function of the memory object?
    options:
      - Gets unused memory details
      - Shows optimization
      - Gets memory usage
      - None of the mentioned
    answer: 2
    explanation: The memory object is a feature of Chrome that allows us to see the memory usage that Chrome is taking up while running our page.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: What is the command to access the Heap size limit?
    options:
      - performance.memory. SizeLimit
      - performance.memory. jsHeapSizeLimit
      - jsHeapSizeLimit
      - performance.jsHeapSizeLimit
    answer: 1
    explanation: The command performance.memory. jsHeapSizeLimit is used to access the Heap size limit.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: What is the purpose of garbage collection?
    options:
      - Removes object with many reference
      - Removes object with reference
      - Removes object with invalid reference
      - Removes object with no reference
    answer: 3
    explanation: When the interpreter sees an object in the heap with no object references, it removes that object from the heap. This is called garbage collection.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: What does the usedJsHeapSize property indicate?
    options:
      - Amount of memory used
      - Amount of memory unused
      - Amount of memory used & unused
      - None of the mentioned
    answer: 0
    explanation: The usedJsHeapSize property is the amount of memory that all of the current objects in the heap are using.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: Which of the following property indicate the total size of heap?
    options:
      - heapSize
      - totalHeapSize
      - totalJsHeapSize
      - totalHeap
    answer: 2
    explanation: The totalJsHeapSize is size of the heap including free space not used by objects.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: What can be done to monitor the memory usage?
    options:
      - Profiling
      - Sequencing
      - Serializing
      - None of the mentioned
    answer: 0
    explanation: Profiling allows us to monitor our memory usage.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: Which of the following gives the high level breakdown of memory usage?
    options:
      - about:memory
      - memory
      - about-memory
      - about::memory
    answer: 0
    explanation: Typing about:memory into the location bar brings up a page that gives a high-level breakdown of memory usage.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: Which keyword must be used to get a more granular insight of the memory usage?
    options:
      - verb
      - verbose
      - granule
      - none of the mentioned
    answer: 1
    explanation: To get a more granular insight of the memory usage, we must type about:memory?verbose.
    keyConcept: Invocation And Performance Navigation
    testedIn:
      - FPSC
      - PPSC
---


