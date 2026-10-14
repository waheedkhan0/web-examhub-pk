---
title: Basic Html — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Basic Html — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: basic-html-part-1
topicName: Basic Html — Part 1
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
    question: State whether the given statement is true or false. !DOCTYPE is case sensitive”
    options:
      - "True"
      - "False"
    answer: 1
    explanation: In XML it is while in HTML it is not.
    keyConcept: Basic Html
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: Choose the correct statement of HTML
    options:
      - In traditional XHTML close tag for some elements is optional but not encouraged
      - In traditional HTML close tag for some elements is optional but not encouraged
      - None of the mentioned
      - In both traditional XHTML and HTML close tag for some elements is optional
    answer: 1
    explanation: "Option B is the correct answer. In traditional HTML , the closing tag for certain elements is optional according to the HTML specification. For example, elements such as <li> , <p> , <tr> , and <td> may omit their closing tags because browsers can infer where the element ends. However, omitting closing tags is generally not encouraged since explicitly closing elements improves code readability, maintainability, and compatibility. Why Option A is incorrect: In XHTML , every element must be properly closed because XHTML is based on XML. Omitting a closing tag results in an invalid XHTML document. Therefore, it is incorrect to say that closing tags are optional in traditional XHTML. Why Option C is incorrect: Option C states \"None of the mentioned\" . This is incorrect because Option B correctly describes the behavior of traditional HTML regarding optional closing tags. Why Option D is incorrect: Option D claims that closing tags are optional in both HTML and XHTML. This is false because only HTML allows certain closing tags to be omitted. XHTML follows strict XML syntax, which requires every element to have a corresponding closing tag or to be written as a self-closing element where appropriate. Therefore, Option B is the correct answer because traditional HTML permits omission of closing tags for some elements, whereas XHTML requires all elements to be properly closed."
    keyConcept: Basic Html
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Which of the following is not a difference between HTML and XHTML
    options:
      - Charset in html is “text/html” where as in xhtml it is “application/xml+xhtml”
      - None of the mentioned
      - Tags and attributes are case-insensitive in HTML but not in XHTML
      - Special characters must be escaped using character entities in XHTML unlike HTML
    answer: 0
    explanation: "Option A is the correct answer. The question asks for the statement that is not a valid difference between HTML and XHTML. Option A is incorrect because it contains factual errors. It refers to text/html and application/xml+xhtml as character sets (charsets), whereas they are actually MIME (Content) Types . In addition, the correct MIME type for XHTML is application/xhtml+xml , not application/xml+xhtml . Since the statement itself is incorrect, it cannot be considered a valid difference between HTML and XHTML. Why Option B is incorrect: Option B states \"None of the mentioned\" , which would be correct only if all the other options described valid differences. However, Option A is factually incorrect, so not all the listed statements are valid differences. Therefore, Option B cannot be the correct answer. Why Option C is incorrect: Option C states that tags and attributes are case-insensitive in HTML but not in XHTML . This is a genuine difference. HTML parsers generally treat tag and attribute names without regard to case, whereas XHTML follows XML rules and is case-sensitive. For example, <BODY> is accepted in HTML, but XHTML requires <body> . Since this statement correctly describes a difference, it is not the answer. Why Option D is incorrect: Option D states that special characters must be escaped using character entities in XHTML . XHTML is based on XML and therefore follows strict XML syntax rules. Characters such as & , < , and > must be escaped wherever required to ensure the document is well-formed. HTML is generally more forgiving and may tolerate certain unescaped characters in situations where XHTML would produce a parsing error. Therefore, this option also describes a valid difference. Hence, Option A is the only statement that is not a valid difference because it incorrectly describes MIME types as charsets and uses an invalid MIME type for XHTML."
    keyConcept: Basic Html
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What indicates the content in file is HTML when delivered on the network.
    options:
      - The extension of the file “.html”
      - The “content-type” header
      - Both “.html” extension and “content-type” header
      - None of the mentioned
    answer: 1
    explanation: "Content-type: header indicates the content in file is html."
    keyConcept: Basic Html
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: State whether the given statement is true or false. “We can intermix XHTML and HTML 4.01 documents”
    options:
      - "True"
      - "False"
    answer: 1
    explanation: HTML 4.01 and XHTML are different versions of HTML with slightly different rules. HTML 4.01 is more lenient and allows some coding errors. XHTML is stricter and requires well-formed code, meaning elements must be properly nested and closed. You can't directly combine parts of an XHTML document with parts of an HTML 4.01 document in the same file and expect it to work correctly in all browsers. The browser will likely try to interpret the entire document using one set of rules, which will lead to errors or unexpected behavior. Therefore, the statement "We can intermix XHTML and HTML 4.01 documents" is False.
    keyConcept: Basic Html
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: HTML and XHTML stands for
    options:
      - Hyper Text Markup Language and EXtensible HyperText Markup Language
      - Hyper Text Markup Language and EXtensible HyperText Marking Language
      - Hyper Text Marking Language and EXtensible HyperText Marking Language
      - None of the mentioned
    answer: 0
    explanation: HTML and XHTML are abbreviated as mentioned in the correct option.
    keyConcept: Basic Html
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: Choose the correct tag for largest heading in HTML.
    options:
      - h6
      - heading
      - h1
      - head
    answer: 2
    explanation: h1 is the largest while h6 is the smallest by convention for headings in HTML.
    keyConcept: Basic Html
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: Which of the following are table tags?
    options:
      - table, thead, tr, td
      - colspan, table, tr
      - table, tt, tr, td
      - none of the mentioned
    answer: 0
    explanation: "Table tags in HTML are used to create and structure tables. They include various tags to define the table structure, rows, headers, and data cells. Option A: table, thead, tr, td - This is the correct answer. These tags are all used in defining a table in HTML: table - Defines the table itself. thead - Defines the header section of the table. tr - Defines a table row. td - Defines a table data cell. Option B: colspan, table, tr - This is incorrect. While table and tr are table tags, colspan is an attribute, not a tag. Option C: table, tt, tr, td - This is incorrect. While table , tr , and td are table tags, tt is not a table tag; it represents teletype text. Option D: none of the mentioned - This is incorrect because Option A correctly lists table tags."
    keyConcept: Basic Html
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: Choose the correct XHTML for width attribute and its value.
    options:
      - width=80
      - width=”80″
    answer: 1
    explanation: Always mention the attribute value in quotes and XHTML is case sensitive.
    keyConcept: Basic Html
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: Which of the following options follows content model in HTML? i. <ul> <p> Option one </p> </ul> ii. <ul> <li> Option two </li> </ul>
    options:
      - i
      - ii
      - i and ii
      - None of the mentioned
    answer: 1
    explanation: "Option B is the correct answer. According to the HTML content model, the <ul> (unordered list) element can contain only <li> (list item) elements as its direct children. Each <li> element may then contain text, paragraphs, images, links, or other valid HTML content. Why Option i is incorrect: In Option i, the <ul> element directly contains a <p> element. This violates the HTML content model because a paragraph cannot be a direct child of an unordered list. The correct structure is to place the paragraph inside an <li> element if needed. Why Option ii is correct: In Option ii, the <ul> element directly contains an <li> element, which is the required and valid structure for an unordered list. This follows the HTML specification for list elements. Why Option A is incorrect: Option A selects only i , which does not follow the HTML content model because the <ul> element contains an invalid direct child. Why Option C is incorrect: Option C states that both i and ii follow the content model. This is incorrect because only ii is valid. Why Option D is incorrect: Option D states that none of the options follow the content model. This is incorrect because ii is a valid HTML structure. Therefore, only Option ii follows the HTML content model, making Option B the correct answer."
    keyConcept: Basic Html
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: Which of the following markup is correct? i. <b><i> is in error as tags cross </b></i> ii. <b><i> is not since tags nest </i></b>
    options:
      - i
      - ii
      - i and ii
      - None of the mentioned
    answer: 1
    explanation: Tags in HTML are always nested.
    keyConcept: Basic Html
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: Which of the following is not a correct (X)HTML rule?
    options:
      - Attributes should be quoted
      - Tags should nest not tag
      - Unused elements may be minimized
      - Unknown attributes are ignored by the browser
    answer: 3
    explanation: Browser ignores unknown attributes.
    keyConcept: Basic Html
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: Identify the count of mistakes in the following markup. <html> <head> </head> <body> <li> <ul><p> Hello </p></ul> </li> <br> <hr> </body> </html>
    options:
      - "2"
      - "3"
      - "1"
      - "0"
    answer: 1
    explanation: <p> should not be in <li> ,<br> and <hr> shpuld be closed.
    keyConcept: Basic Html
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: Rendering engine is not responsible for
    options:
      - parsing the markup content (HTML)
      - parsing style information (CSS, XSL, and so on)
      - generating a visual presentation of the formatted content including media files referenced
      - none of the mentioned
    answer: 3
    explanation: All the options mentioned are responsibility of rendering engine.
    keyConcept: Basic Html
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: Firefox uses _________ rendering engine.
    options:
      - WebKit
      - Gecko
      - Trident
      - Presto
    answer: 1
    explanation: Gecko is a web browser engine used in many applications developed by Mozilla Foundation and the Mozilla Corporation as well as in many other open source software projects. Gecko is free and open-source software subject to the terms of the Mozilla Public License version 2.
    keyConcept: Basic Html
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: State true or false. It is faster to render HTML and CSS than to interpret and execute JavaScript.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: When it comes to ordering your CSS and JavaScript, you want your CSS to come first. The reason is that the rendering thread has all the style information it needs to render the page. If the JavaScript includes come first, the JavaScript engine has to parse it all before continuing on to the next set of resources.
    keyConcept: Basic Html
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What is the use of “defer” attribute?
    options:
      - It defers rendering of html page
      - It defers script execution until the page has been rendered
      - It defers rendering of css attributes
      - None of mentioned
    answer: 1
    explanation: The defer attribute is a boolean attribute. When present, it specifies that the script is executed when the page has finished parsing.
    keyConcept: Basic Html
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: Which of the following is used to read a HTML page and render it?
    options:
      - Web browser
      - Web server
      - Web matrix
      - None of the mentioned
    answer: 0
    explanation: A web browser (commonly referred to as a browser) is a software application for retrieving, presenting and traversing information resources on the World Wide Web.
    keyConcept: Basic Html
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: Which of the following is the first web browser?
    options:
      - Nexus
      - Netscape Navigator
      - Internet Explorer
      - Mosaic
    answer: 0
    explanation: The first web browser was invented in 1990 called World Wide Web which was later renamed to Nexus.
    keyConcept: Basic Html
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: Who created the first web browser
    options:
      - Tim Berners Lee
      - Jacobs,Lan
      - Marc Andeersen
      - Mozilla foundation
    answer: 0
    explanation: Sir Timothy John “Tim” Berners-Lee, also known as TimBL, is an English computer scientist, best known as the inventor of the World Wide Web. He made a proposal for an information management system in March 1989, and he implemented the first successful communication between a Hypertext Transfer Protocol (HTTP) client and server via the Internet sometime around mid-November of that same year.
    keyConcept: Basic Html
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: State true or false. Nexus is first graphical web browser.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: Netscape is first graphical web browser.
    keyConcept: Basic Html
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: The open source software version of netscape is
    options:
      - Chrome
      - Mozilla
      - Internet Explorer
      - Erwise
    answer: 1
    explanation: On February 23, 1998, Netscape Communications Corporation created a project called Mozilla to co-ordinate the development of the Mozilla Application Suite, the open source version of Netscape’s internet software, Netscape Communicator.
    keyConcept: Basic Html
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: Which of the following is not an IDE
    options:
      - BlueGriffon 1.5.2
      - Aptana studio 3
      - TextEdit(Mac)
      - Dreamweaver
    answer: 2
    explanation: TextEdit is a highly versatile word processor included with OS X.
    keyConcept: Basic Html
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: We can define ________ number of sites with one copy of dreamweaver installed on our computer.
    options:
      - "990"
      - "10"
      - only 1
      - unlimited
    answer: 3
    explanation: Dreamweaver is an IDE to build custom web apps and applications. There is no definite liit to it.
    keyConcept: Basic Html
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: What should we add to a template in Dreamweaver in order to control where page content goes?
    options:
      - Editable Regions
      - HTML controllers
      - Frames
      - Content Controllers
    answer: 0
    explanation: Editable template regions control which areas of a template-based page a user can edit.
    keyConcept: Basic Html
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Blue Griffon is based on ________ rendering engine
    options:
      - WebKit
      - Gecko
      - Presto
      - None of the mentioned
    answer: 1
    explanation: BlueGriffon is a new WYSIWYG content editor for the World Wide Web. Powered by Gecko, the rendering engine of Firefox, it’s a modern and robust solution to edit Web pages in conformance to the latest Web Standards.
    keyConcept: Basic Html
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: Swapping images in dreamweaver is best if
    options:
      - The images are the same “Mime” type
      - The images are the same color
      - The images are the same size
      - You use the “Constrain” tool
    answer: 2
    explanation: It helps the transition when compressing the image.
    keyConcept: Basic Html
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: Choose the inappropriate option with respect to Blue Griffon 1.5.2. Blue Griffon
    options:
      - includes tools for developing HTML5 pages
      - abstracts out many css3 effects
      - supports direct embedding of audio and video files
      - supports swapping of videos of any length
    answer: 3
    explanation: This feature is not provide by the editor.
    keyConcept: Basic Html
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: State true or false. Maqetta is an open source initiative of the Dojo Foundation to geared towards visual designers through a WYSIWYG user interface.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: Maqetta is an open source initiative of the Dojo Foundation to build an HTML5-based editor geared towards visual designers through a WYSIWYG user interface.
    keyConcept: Basic Html
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: Choose the correct statement for HTML
    options:
      - Exo is a cloud-based ide that offers collaboration and deployment features
      - Exo does not support java and python
      - Exo supports javascript and html5
      - Both a and c
    answer: 3
    explanation: Exo provides a free, cloud-based IDE that offers collaboration and deployment features. In addition to HTML5 and JavaScript, it supports the development of Java, Ruby, and Python applications.
    keyConcept: Basic Html
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: Which of following statement is true? i. Cloud9 has gained particular interest for its integration with GitHub and Bit Bucket authentication integration and real-time collaboration. ii. Cloud9 does not account for SSH and FTP access.
    options:
      - ii
      - i
      - i and ii
      - None of the mentioned
    answer: 1
    explanation: Cloud9 allows for SSH and FTP access and capabilities to work offline.
    keyConcept: Basic Html
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: Which of the following is not a web server?
    options:
      - Apache tomcat
      - BlueGriffon
      - Jetty
      - Tornado
    answer: 1
    explanation: BlueGriffon is an IDE.
    keyConcept: Basic Html
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: State true or false. Tomcat is an open source web server that provides a servlet container allowing you to run Java code.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: The answer is self explanatory.
    keyConcept: Basic Html
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: LightTPD is not used by
    options:
      - You Tube
      - Wikipedia
      - Meebo
      - LocalHost
    answer: 3
    explanation: LighTPD is an open source web server, designed and optimized for high performance environments.
    keyConcept: Basic Html
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: Which of the following is not a prepackaged server stack?
    options:
      - WAMP
      - XAAMP
      - MAMP
      - None of the mentioned
    answer: 3
    explanation: All the options mentioned (WAMP, XAMPP, and MAMP) are prepackaged server stacks commonly used in web development to set up a local development environment. They include a combination of software components such as a web server (Apache), a database management system (MySQL or MariaDB), and a scripting language (PHP) to provide a complete server environment for hosting websites or web applications. Therefore, none of the mentioned options are not prepackaged server stacks.
    keyConcept: Basic Html
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: Which of the following is not a channel of mozilla?
    options:
      - Firefox
      - Firefox alpha
      - Firefox Beta
      - Firefox Aurora
    answer: 1
    explanation: The answer is self explanatory.
    keyConcept: Basic Html
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: State true or false. Google Chrome has its own task manager, which allows you to view and manage your memory and CPU usage”
    options:
      - "True"
      - "False"
    answer: 0
    explanation: The answer is self explanatory.
    keyConcept: Basic Html
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: Which of the following are automatically loaded and operates as a part of browser?
    options:
      - Add-ons
      - Plug-ins
      - Utilities
      - Widgets
    answer: 1
    explanation: Plugin programs are automatically loaded and operates as a part of browser.
    keyConcept: Basic Html
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: Which of the following allows user to view a webpage?
    options:
      - Operating System
      - Website
      - Interpreter
      - Internet Browser
    answer: 3
    explanation: The answer is self explanatory.
    keyConcept: Basic Html
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: What is DOM in HTML?
    options:
      - Hierarchy of objects in ASP.NET
      - Application programming interface
      - Convention for representing and interacting with objects in html documents
      - None of the mentioned
    answer: 2
    explanation: The Document Object Model (DOM) is a cross-platform and language-independent convention for representing and interacting with objects in HTML, XHTML, and XML documents.
    keyConcept: Basic Html
    testedIn:
      - FPSC
      - PPSC
---


