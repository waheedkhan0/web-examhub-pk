---
title: Sockets — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Sockets — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: sockets-part-1
topicName: Sockets — Part 1
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
    question: Which of the following is a stateless protocol?
    options:
      - HTML
      - XHTML
      - HTTP
      - All of the mentioned
    answer: 2
    explanation: HTTP is a stateless protocol. A stateless protocol does not require the server to retain information or status about each user for the duration of multiple requests.
    keyConcept: Sockets
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: What does the value 2 of the WebSocket attribute Socket.readyState indicate?
    options:
      - Closed connection
      - Handshake connection
      - Unestablished connection
      - Established connection and communication is possible
    answer: 1
    explanation: "The readonly attribute readyState represents the state of the connection. It can have the following values: 1. A value of 0 indicates that the connection has not yet been established. 2. A value of 1 indicates that the connection is established and communication is possible. 3. A value of 2 indicates that the connection is going through the closing handshake. 4. A value of 3 indicates that the connection has been closed or could not be opened."
    keyConcept: Sockets
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: How many WebSocket events are available?
    options:
      - "2"
      - "3"
      - "4"
      - "5"
    answer: 2
    explanation: "There are fourWebSocket events namely : 1. open 2. close 3. message 4. error"
    keyConcept: Sockets
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: Which method is used to close the WebSocket?
    options:
      - Socket.flush()
      - Socket.close()
      - Socket.dispose()
    answer: 1
    explanation: The Socket.close() is used to close the WebSocket.
    keyConcept: Sockets
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: How does the client and the server communicate following the rules defined by the WebSocket protocol?
    options:
      - Long-lived TCP Socket
      - Short-lived TCP Socket
      - UDP Socket
      - HTTP Socket
    answer: 0
    explanation: The client and server communicate over a long-lived TCP socket following rules defined by the WebSocket protocol.
    keyConcept: Sockets
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: Which of the following are not a socket property?
    options:
      - onopen
      - readyState
      - onmessage
      - ready
    answer: 3
    explanation: There is no Socket property called ready.
    keyConcept: Sockets
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: How can we check the subprotocol being used by the client?
    options:
      - subprotocol property
      - protocol property
      - clientprotocol property
      - none of the mentioned
    answer: 1
    explanation: Once the connection is established, the client can determine which subprotocol is in use by checking the protocol property of the socket.
    keyConcept: Sockets
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: How will you transmit data using the connection?
    options:
      - send(data)
      - Socket.send(“data”)
      - Socket.send(data)
      - Socket(data)
    answer: 2
    explanation: The Socket.send(data) method transmits data using the connection.
    keyConcept: Sockets
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: Which of the following is not a WebSocket event?
    options:
      - open
      - close
      - error
      - deny
    answer: 3
    explanation: There is no WebSocket event named deny. The four WebSocket events are 1. open 2. close 3. essage 4. error
    keyConcept: Sockets
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What does an History object contain?
    options:
      - URL
      - Parameters
      - Attribute values
      - Property
    answer: 0
    explanation: The history object contains the URLs visited by the user (within a browser window).
    keyConcept: Sockets
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: The history object is a part of which object?
    options:
      - Property
      - Window
      - Location
      - Screen
    answer: 1
    explanation: The history object belongs to the Window object.
    keyConcept: Sockets
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: How many methods are there in the History object?
    options:
      - "3"
      - "4"
      - "5"
      - "6"
    answer: 0
    explanation: "There are three methods belongign to the History object namely : 1. back() 2. forward() 3. go()"
    keyConcept: Sockets
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: What is the purpose of the method forward()?
    options:
      - Loads any random URL in the history list
      - Loads the previous URL in the history list
      - Loads a specific URL from the history list
      - Loads the next URL in the history list
    answer: 3
    explanation: The forward() method loads the next URL in the history list.
    keyConcept: Sockets
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: How will you update the URL displayed in the location bar?
    options:
      - location
      - location.URL
      - location.hash
      - url
    answer: 2
    explanation: The property location.hash needs to be updated to display the updated URL in the location bar.
    keyConcept: Sockets
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: How do you add a particular state to the browsing history?
    options:
      - pushState()
      - replaceState()
      - state()
      - none of the mentioned
    answer: 0
    explanation: The pushState() method adds a particular state to the browsing history.
    keyConcept: Sockets
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What does the pushState() method do?
    options:
      - Removes the state
      - Adds new state
      - Replaces the state
      - None of the mentioned
    answer: 1
    explanation: When a web app enters a new state, it calls history.pushState() to add that state to the browsing history.
    keyConcept: Sockets
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: Which of the following method is used to replace the current history state instead of adding a new state to the browsing history?
    options:
      - replaceState()
      - replace(state)
      - replace()
      - none of the mentioned
    answer: 0
    explanation: The replaceState() method is used to replace the current history state instead of adding a new state to the browsing history.
    keyConcept: Sockets
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: How many parameters does the replaceState() method take?
    options:
      - "2"
      - "3"
      - "4"
      - "5"
    answer: 1
    explanation: "window.history.replaceState(stateObj, title, url) : This is just like window.history.pushState, except that the current browser state is removed from the history, so you cannot hit “back” to return to it."
    keyConcept: Sockets
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: What is the purpose of the event window.onpopstate?
    options:
      - When a state object is replaced
      - When a state object is added
      - When a state object is removed
      - None of the mentioned
    answer: 2
    explanation: The window.onpopstate event is fired whenever a state object is removed from the browser history, which occurs on browser “back” or “forward”. State objects are persisted on the user’s hard disk between sessions, which is a nice feature. The object passed into a call to pushState or replaceState is provided as the state property on the event object in the “popstate” event.
    keyConcept: Sockets
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: R is an extension of which of the following language?
    options:
      - C
      - C++
      - S
      - None of the mentioned
    answer: 2
    explanation: R is an extension of and successor to the S language, which was itself a statistical language created in 1976 by John Chambers while at Bell Labs.
    keyConcept: Sockets
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: Which of the following is/are statistical languages?
    options:
      - R
      - S
      - None of the mentioned
      - Both R and S
    answer: 3
    explanation: Both R and S are statistical languages.
    keyConcept: Sockets
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: Which of the following is a successor to the S language?
    options:
      - C++
      - R
      - S
      - Java
    answer: 1
    explanation: R is an extension of and successor to the S language, which was itself a statistical language.
    keyConcept: Sockets
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: What are the purposes R can be used for?
    options:
      - Suck in data
      - Parse data
      - Process data
      - All of the mentioned
    answer: 3
    explanation: Generally, R can be used to suck in data, parse it, process it, and then visualize it for reporting purposes.
    keyConcept: Sockets
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: What type of language is generally used to collect the data?
    options:
      - Glue language
      - Statistical language
      - Both Glue and Statistical language
      - None of the mentioned
    answer: 0
    explanation: A glue language is generally used to collect the data, that is written out as a comma-separated file, and read it into R.
    keyConcept: Sockets
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: What are the processes that take place within R?
    options:
      - Splitting of data
      - Aggregating of data
      - Overlaying two or more data
      - All of the mentioned
    answer: 3
    explanation: Within R, processing the data, splitting it, averaging it, aggregating it, overlaying two or more data sets, and then from with R, a chart that depicts the data out is done.
    keyConcept: Sockets
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Which platform is R imported to after charting as a PDF?
    options:
      - Adobe Illustrator
      - Adobe Photoshop
      - Both Adobe Illustrator and Adobe Photoshop
      - None of the mentioned
    answer: 0
    explanation: From R, the chart is imported into the Adobe Illustrator, or any other such program, where it can clean up things like font consistency and make sure axis labels with long names are visible.
    keyConcept: Sockets
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: What is the purpose of a glue language?
    options:
      - Format data
      - Producte data
      - Collectc data
      - Both Format and Collectc
    answer: 3
    explanation: A glue language is generally used to collect and format the data.
    keyConcept: Sockets
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: Why do we use Adobe Illustrator along with R?
    options:
      - Collect the relevant data
      - Format the chart and to correct the errors
      - Tighten and format the chart
      - Ingest and process the chart
    answer: 2
    explanation: The Adobe Illustrator is used along with R to tighten and format the chart.
    keyConcept: Sockets
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: What does the R language do?
    options:
      - Tighten and format the chart
      - Ingest and process the chart
      - Format and Ingest the chart
      - None of the mentioned
    answer: 1
    explanation: The R language is generally used to collect data that has been collected by the glue language and then ingest and process and chart.
    keyConcept: Sockets
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: What kind of data can be run in R?
    options:
      - Binary
      - Text
      - Decimals
      - All kinds
    answer: 3
    explanation: All kinds of data can be run in R.
    keyConcept: Sockets
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: Which of the following is/are the features of R?
    options:
      - Small
      - Self-contained
      - Extensible
      - All of the mentioned
    answer: 3
    explanation: As a language, R is small, self-contained, extensible, and just fun to use.
    keyConcept: Sockets
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: What is the advantage for Linux users using R?
    options:
      - They get a command sequence to install the particular Linux flavor
      - They get a compiled installer
      - All of the mentioned
      - None of the mentioned
    answer: 0
    explanation: Instead of a compiled installer, Linux users get the command sequence to install for their particular Linux flavor.
    keyConcept: Sockets
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: Which of the following is the base install for R?
    options:
      - Contrib
      - Base
      - Rtools
      - None of the mentioned
    answer: 1
    explanation: "The PC installer comes in three flavors: Base is the base install, Contrib comes with compiled third-party packages, and Rtools comes with tools to build your own R packages."
    keyConcept: Sockets
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: Which of the following comes with compiled third-party packages?
    options:
      - Contrib
      - Base
      - Rtools
      - None of the mentioned
    answer: 0
    explanation: "The PC installer comes in three flavors: Base is the base install, Contrib comes with compiled third-party packages, and Rtools comes with tools to build your own R packages."
    keyConcept: Sockets
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: Which of the following comes with tools to build your own R packages?
    options:
      - Contrib
      - Base
      - Rtools
      - None of the mentioned
    answer: 2
    explanation: "The PC installer comes in three flavors: Base is the base install, Contrib comes with compiled third-party packages, and Rtools comes with tools to build your own R packages."
    keyConcept: Sockets
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: The code of the R language has an extension?
    options:
      - .Rl
      - .R
      - .lR
      - .RR
    answer: 1
    explanation: The code of the R language has an extension .R.
    keyConcept: Sockets
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: Which of the following is used to run ad hoc R commands?
    options:
      - R Console
      - R Primer
      - Both R Console and R Primer
      - None of the mentioned
    answer: 0
    explanation: The R Console is a command-line environment for running ad hoc R commands.
    keyConcept: Sockets
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: Which is the keyword used to open the Help window?
    options:
      - ()
      - "#"
      - "?"
      - "="
    answer: 2
    explanation: At any time, you can type ?(keyword) to open the help window for a particular subject.
    keyConcept: Sockets
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: For a more extensive search, which keyword needs to be used?
    options:
      - "??"
      - "?"
      - "?="
      - "=?"
    answer: 0
    explanation: For a more extensive search, just type ?? (keyword).
    keyConcept: Sockets
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: What is the usage of the keyword ?? in R?
    options:
      - Help window
      - Extensive search
      - Error correction
      - Error detection
    answer: 1
    explanation: "?? (keyword) is generally used for a more extensive search when compared to the keyword ?."
    keyConcept: Sockets
    testedIn:
      - FPSC
      - PPSC
---


