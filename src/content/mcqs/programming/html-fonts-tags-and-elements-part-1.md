---
title: Html Fonts_ Tags And Elements — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Html Fonts_ Tags And Elements — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: html-fonts-tags-and-elements-part-1
topicName: Html Fonts_ Tags And Elements — Part 1
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
    question: All attribute declarations begin with the keyword ____________ followed by the element name, attribute name, attribute type, and default data information.
    options:
      - XML
      - SGML
      - ATTLIST
      - None of the mentioned
    answer: 2
    explanation: "Option C is the correct answer. In an HTML or SGML Document Type Definition (DTD), attribute declarations begin with the keyword ATTLIST . An ATTLIST declaration specifies the attributes that are allowed for a particular element, along with each attribute's type and default value. The general syntax of an attribute list declaration is: <!ATTLIST element-name attribute-name attribute-type default-value> Why Option A is incorrect: XML (Extensible Markup Language) is a markup language, not the keyword used to declare attributes in a DTD. Although XML supports DTDs, attribute declarations within a DTD still use the ATTLIST keyword. Why Option B is incorrect: SGML (Standard Generalized Markup Language) is the markup language standard from which HTML was originally derived. It defines the concept of DTDs, but SGML itself is not the keyword used to declare attributes. The actual declaration keyword is ATTLIST . Why Option D is incorrect: Option D is incorrect because ATTLIST is the standard keyword used for attribute declarations in SGML and DTD-based document definitions. Therefore, all attribute declarations begin with the keyword ATTLIST , making Option C the correct answer."
    keyConcept: Html Fonts_ Tags And Elements
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: The ________ declaration specifies which characters and delimiters may appear in the application.
    options:
      - DTD
      - SGML
      - XML
      - None of the mentioned
    answer: 1
    explanation: SGML (Standard Generalized Markup Language) is a standard for how to specify a document markup language or tag set. Such a specification is itself a document type definition (DTD).
    keyConcept: Html Fonts_ Tags And Elements
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: The __________ defines the syntax of markup constructs and include additional definitions such as character entity references.
    options:
      - Attributes
      - SGML
      - Elements
      - DTD
    answer: 3
    explanation: The DTD defines the syntax of markup constructs. The DTD may include additional definitions such as character entity references.
    keyConcept: Html Fonts_ Tags And Elements
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: A/An _________ is essentially a macro that allows a short name to be associated with replacement text.
    options:
      - Entity
      - Attribute
      - Comment
      - None of the mentioned
    answer: 0
    explanation: Reserved characters in HTML must be replaced with character entities. Characters, not present on your keyboard, can also be replaced by entities.
    keyConcept: Html Fonts_ Tags And Elements
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: The ___________ keyword begins the declaration of attributes that an element may take. It is followed by the name of the element in question, a list of attribute definitions, and a closing.
    options:
      - DOCTYPE
      - ATTLIST
      - DTD
      - None of the mentioned
    answer: 0
    explanation: In HTML 4.01, the !DOCTYPE declaration refers to a DTD, because HTML 4.01 was based on SGML. The DTD specifies the rules for the markup language, so that the browsers render the content correctly.
    keyConcept: Html Fonts_ Tags And Elements
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: The __________ begins with a series of parameter entity definitions.
    options:
      - DTD
      - SGML
      - XML
      - None of the mentioned
    answer: 0
    explanation: The HTML DTD begins with a series of parameter entity definitions. A parameter entity definition defines a kind of macro that may be referenced and expanded elsewhere in the DTD. These macros may not appear in HTML documents, only in the DTD. Other types of macros, called character references, may be used in the text of an HTML document or within attribute values.
    keyConcept: Html Fonts_ Tags And Elements
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: The ______________ parameter identifies a character encoding, which is a method of converting a sequence of bytes into a sequence of characters.
    options:
      - class
      - element
      - charset
      - none of the mentioned
    answer: 2
    explanation: To display an HTML page correctly, a web browser must know the character set (character encoding) to use.
    keyConcept: Html Fonts_ Tags And Elements
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: A model group contains the names of the elements that a tag may enclose.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: Most HTML and XHTML elements enclose content. If a content model is declared, it is enclosed within parentheses and known as a model group.
    keyConcept: Html Fonts_ Tags And Elements
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: Which event is fired as the mouse is moving over an element when a drag is occurring?
    options:
      - dragover
      - dragenter
      - dragstart
      - dragleave
    answer: 0
    explanation: This event is fired as the mouse is moving over an element when a drag is occurring. Much of the time, the operation that occurs during a listener will be the same as the dragenter event.
    keyConcept: Html Fonts_ Tags And Elements
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: The _________ event is fired on the element where the drop occurred at the end of the drag operation.
    options:
      - drag
      - drop
      - dragstart
      - dragenter
    answer: 1
    explanation: The drop event is fired on the element where the drop occurred at the end of the drag operation. A listener would be responsible for retrieving the data being dragged and inserting it at the drop location.
    keyConcept: Html Fonts_ Tags And Elements
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: Which of the following property is common in all drag events?
    options:
      - drag effects
      - drag data
      - dataTransfer
      - dragenter
    answer: 2
    explanation: The dataTransfer property of all drag events holds data about the drag and drop operation.
    keyConcept: Html Fonts_ Tags And Elements
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: _____________ in textboxes and selections on web pages is done automatically, so you do not need to handle dragging yourself.
    options:
      - Dragging HTML and XML
      - Dragging Text
      - Dragging Files
      - Dragging Links
    answer: 1
    explanation: Although the process is automatic, it is recommended that you always add data of the text/plain type as a fallback for applications or drop targets that do not support other types, unless there is no logical text alternative. Always add the plain text type last as it is the least specific.
    keyConcept: Html Fonts_ Tags And Elements
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: Calling the ______________ method during both a dragenter and dragover event will indicate that a drop is allowed at that location.
    options:
      - drop
      - drag
      - preventDefault
      - dataTransfer
    answer: 2
    explanation: Calling the preventDefault method during both a dragenter and dragover event will indicate that a drop is allowed at that location. However, you will commonly wish to call the preventDefault method only in certain situations, for example, only if a link is being dragged.
    keyConcept: Html Fonts_ Tags And Elements
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: Which of the following property is used to determine which drag operation was desired?
    options:
      - dragend
      - getData
      - dropEffect
      - captureData
    answer: 2
    explanation: During the drop event, you should retrieve that data that was dropped from the event and insert it at the drop location. One can use the dropEffect property to determine which drag operation was desired.
    keyConcept: Html Fonts_ Tags And Elements
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: What is the correct HTML for creating a hyperlink ? 1. <a>http://www.examveda.com</a> 2. <a name=”http://www.examveda.com”> examveda.com</a> 3. <a url=”http://www.examveda.com> examveda.com</a> 4. <a href=http://www.examveda.com> examveda.com</a>
    options:
      - Option 1
      - Option 2
      - Option 3
      - Option 4
    answer: 3
    explanation: "The correct HTML code for creating a hyperlink uses the tag with the href attribute to specify the link destination. Option 1: <a>http://www.examveda.com</a> - This is incorrect. The href attribute is missing, and the link text should be inside the tags. Option 2: <a name=”http://www.examveda.com”> examveda.com</a> - This is incorrect. The name attribute is not used for hyperlinks. Option 3: <a url=”http://www.examveda.com> examveda.com</a> - This is incorrect. The url attribute is not valid for hyperlinks. Option 4: <a href=http://www.examveda.com> examveda.com</a> - This is the correct answer. The href attribute specifies the URL of the page the link goes to."
    keyConcept: Html Fonts_ Tags And Elements
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What is the correct HTML code for inserting an image ? 1. <img>image.gif</img> 2. <img href=”image.gif/> 3. <img src=”image.gif”>
    options:
      - Option 1
      - Option 2
      - Option 3
      - None of the above
    answer: 2
    explanation: "The correct HTML code for inserting an image uses the tag with the src attribute to specify the image source. Option 1: <img>image.gif</img> - This is incorrect. The tag is self-closing and does not use a closing tag. Option 2: <img href=”image.gif”/> - This is incorrect. The href attribute is used for links, not images. Option 3: <img src=”image.gif”> - This is the correct answer. The src attribute specifies the path to the image. Option D: None of the above - This is incorrect because Option 3 correctly lists the HTML code for inserting an image."
    keyConcept: Html Fonts_ Tags And Elements
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: ______________ should include data of two types; the first should be the URL using the type text/uri-list, and the second is the URL using the text/plain type.
    options:
      - Dragging HTML and XML
      - Dragging Text
      - Dragging Files
      - Dragging Links
    answer: 3
    explanation: Dragging Links is the correct answer to “______________ should include data of two types; the first should be the URL using the type text/uri-list, and the second is the URL using the text/plain type.”. This question is standard in competitive examination syllabi for Html Fonts_ Tags And Elements.
    keyConcept: Html Fonts_ Tags And Elements
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: A listener for the dragenter and dragover events are used to indicate valid drop targets, that is, places where dragged items may be dropped.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “A listener for the dragenter and dragover events are used to indicate valid drop targets, that is, places where dragged items may be dropped.”. This question is standard in competitive examination syllabi for Html Fonts_ Tags And Elements.
    keyConcept: Html Fonts_ Tags And Elements
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: _____________ and elements in a document may be dragged using the application/x-moz-node type.
    options:
      - Dragging HTML and XML
      - Dragging Text
      - Dragging Nodes
      - None of the mentioned
    answer: 2
    explanation: Dragging Nodes is the correct answer to “_____________ and elements in a document may be dragged using the application/x-moz-node type.”. This question is standard in competitive examination syllabi for Html Fonts_ Tags And Elements.
    keyConcept: Html Fonts_ Tags And Elements
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: The tag which allows you to nest other HTML tags within the description 1. <CAPTION> 2. <TD> 3. <TR>
    options:
      - Option 1
      - Option 2
      - Option 3
      - None of the above
    answer: 0
    explanation: Option 1 is the correct answer to “The tag which allows you to nest other HTML tags within the description 1. <CAPTION> 2. <TD> 3. <TR>”. This question is standard in competitive examination syllabi for Html Fonts_ Tags And Elements.
    keyConcept: Html Fonts_ Tags And Elements
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: The first tag inside <TABLE> tag is 1. <HEAD> 2. <CAPTION> 3. <TH> 4. <TD>
    options:
      - Option 1
      - Option 2
      - Option 3
      - Option 4
    answer: 1
    explanation: Option 2 is the correct answer to “The first tag inside <TABLE> tag is 1. <HEAD> 2. <CAPTION> 3. <TH> 4. <TD>”. This question is standard in competitive examination syllabi for Html Fonts_ Tags And Elements.
    keyConcept: Html Fonts_ Tags And Elements
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: Which tag will you add to specify a font for your whole page ? 1. <defaultfont> 2. <targetfont> 3. <basefont> 4. <font>
    options:
      - Option 1
      - Option 2
      - Option 3
      - Option 4
    answer: 0
    explanation: Option 1 is the correct answer to “Which tag will you add to specify a font for your whole page ? 1. <defaultfont> 2. <targetfont> 3. <basefont> 4. <font>”. This question is standard in competitive examination syllabi for Html Fonts_ Tags And Elements.
    keyConcept: Html Fonts_ Tags And Elements
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: The main container for <TR>, <TD> and <TH> is. 1. <DATA> 2. <GROUP> 3. <TABLE>
    options:
      - Option 1
      - Option 2
      - Option 3
      - None of the above
    answer: 2
    explanation: Option 3 is the correct answer to “The main container for <TR>, <TD> and <TH> is. 1. <DATA> 2. <GROUP> 3. <TABLE>”. This question is standard in competitive examination syllabi for Html Fonts_ Tags And Elements.
    keyConcept: Html Fonts_ Tags And Elements
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: The tag used for creating hypertext and hypermedia links is. 1. <HR> 2. <BR> 3. <PRE> 4. <A>
    options:
      - Option 1
      - Option 2
      - Option 3
      - Option 4
    answer: 3
    explanation: Option 4 is the correct answer to “The tag used for creating hypertext and hypermedia links is. 1. <HR> 2. <BR> 3. <PRE> 4. <A>”. This question is standard in competitive examination syllabi for Html Fonts_ Tags And Elements.
    keyConcept: Html Fonts_ Tags And Elements
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: Choose the correct HTML tag for the largest heading. 1. <h1> 2. <h2> 3. <h4> 4. <h6>
    options:
      - Option 1
      - Option 2
      - Option 3
      - Option 4
    answer: 0
    explanation: Option 1 is the correct answer to “Choose the correct HTML tag for the largest heading. 1. <h1> 2. <h2> 3. <h4> 4. <h6>”. This question is standard in competitive examination syllabi for Html Fonts_ Tags And Elements.
    keyConcept: Html Fonts_ Tags And Elements
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: To created a bulleted list, use 1. <ol> 2. <ul> 3. <il>
    options:
      - Option 1
      - Option 2
      - Option 3
      - None of the above
    answer: 1
    explanation: Option 2 is the correct answer to “To created a bulleted list, use 1. <ol> 2. <ul> 3. <il>”. This question is standard in competitive examination syllabi for Html Fonts_ Tags And Elements.
    keyConcept: Html Fonts_ Tags And Elements
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: What kind of list will <ol> tags create ?
    options:
      - Numbered list
      - Bulleted list
      - Unordered list
      - None of the above
    answer: 0
    explanation: Numbered list is the correct answer to “What kind of list will <ol> tags create”. This question is standard in competitive examination syllabi for Html Fonts_ Tags And Elements.
    keyConcept: Html Fonts_ Tags And Elements
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: The tag which is used to establish the absolute base for relative URLs used in the documents hypertext links. 1. <BODY> 2. <TITLE> 3. <BASE> 4. <BR>
    options:
      - Option 1
      - Option 2
      - Option 3
      - Option 4
    answer: 2
    explanation: Option 3 is the correct answer to “The tag which is used to establish the absolute base for relative URLs used in the documents hypertext links. 1. <BODY> 2. <TITLE> 3. <BASE> 4. <BR>”. This question is standard in competitive examination syllabi for Html Fonts_ Tags And Elements.
    keyConcept: Html Fonts_ Tags And Elements
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: The <BASE> tag is designed to appear only between 1. <BODY> 2. <HEAD> 3. <TITLE> 4. <PRE>
    options:
      - Option 1
      - Option 2
      - Option 3
      - Option 4
    answer: 1
    explanation: Option 2 is the correct answer to “The <BASE> tag is designed to appear only between 1. <BODY> 2. <HEAD> 3. <TITLE> 4. <PRE>”. This question is standard in competitive examination syllabi for Html Fonts_ Tags And Elements.
    keyConcept: Html Fonts_ Tags And Elements
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: HTML tags are recognized by 1. <! 2. <= => 3. < >
    options:
      - Option 1
      - Option 2
      - Option 3
      - None of the above
    answer: 2
    explanation: Option 3 is the correct answer to “HTML tags are recognized by 1. <! 2. <= => 3. < >”. This question is standard in competitive examination syllabi for Html Fonts_ Tags And Elements.
    keyConcept: Html Fonts_ Tags And Elements
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: Choose the correct HTML tag to make a text bold 1. <bd> 2. <bold> 3. <bl> 4. <b>
    options:
      - Option 1
      - Option 2
      - Option 3
      - Option 4
    answer: 3
    explanation: Option 4 is the correct answer to “Choose the correct HTML tag to make a text bold 1. <bd> 2. <bold> 3. <bl> 4. <b>”. This question is standard in competitive examination syllabi for Html Fonts_ Tags And Elements.
    keyConcept: Html Fonts_ Tags And Elements
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: Which tag adds a paragraph break after the text ? 1. <BR> 2. <P> 3. <PARAGRAPH> 4. <HR>
    options:
      - Option 1
      - Option 2
      - Option 3
      - Option 4
    answer: 1
    explanation: Option 2 is the correct answer to “Which tag adds a paragraph break after the text ? 1. <BR> 2. <P> 3. <PARAGRAPH> 4. <HR>”. This question is standard in competitive examination syllabi for Html Fonts_ Tags And Elements.
    keyConcept: Html Fonts_ Tags And Elements
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: How can you make a list that list the items with numbers ? 1. <ul> 2. <list> 3. <ol>
    options:
      - Option 1
      - Option 2
      - Option 3
      - None of the above
    answer: 2
    explanation: Option 3 is the correct answer to “How can you make a list that list the items with numbers ? 1. <ul> 2. <list> 3. <ol>”. This question is standard in competitive examination syllabi for Html Fonts_ Tags And Elements.
    keyConcept: Html Fonts_ Tags And Elements
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: Which tag will add rows to your tables ? 1. <tr> and </tr> 2. <th> and </th> 3. <td> and </td>
    options:
      - Option 1
      - Option 2
      - Option 3
      - None of the above
      - Option 4
      - Paragraph tag
      - Container tag
      - Head tag
      - They are for images only
      - They work on anything
      - They can be repeated
    answer: 0
    explanation: Option 1 is the correct answer to “Which tag will add rows to your tables ? 1. <tr> and </tr> 2. <th> and </th> 3. <td> and </td>”. This question is standard in competitive examination syllabi for Html Fonts_ Tags And Elements.
    keyConcept: Html Fonts_ Tags And Elements
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: Which of the following is underline tag ? 1. <PRE> 2. <UL> 3. <U> 4. <HR>
    options:
      - Option 1
      - Option 2
      - Option 3
      - Option 4
    answer: 2
    explanation: Option 3 is the correct answer to “Which of the following is underline tag ? 1. <PRE> 2. <UL> 3. <U> 4. <HR>”. This question is standard in competitive examination syllabi for Html Fonts_ Tags And Elements.
    keyConcept: Html Fonts_ Tags And Elements
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: Which tag can set the background color for your page ? 1. <body> 2. <font> 3. <head> 4. <title>
    options:
      - Option 1
      - Option 2
      - Option 3
      - Option 4
    answer: 0
    explanation: Option 1 is the correct answer to “Which tag can set the background color for your page ? 1. <body> 2. <font> 3. <head> 4. <title>”. This question is standard in competitive examination syllabi for Html Fonts_ Tags And Elements.
    keyConcept: Html Fonts_ Tags And Elements
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: <P> is called
    options:
      - Paragraph tag
      - Container tag
      - Head tag
      - None of the above
    answer: 0
    explanation: Paragraph tag is the correct answer to “<P> is called”. This question is standard in competitive examination syllabi for Html Fonts_ Tags And Elements.
    keyConcept: Html Fonts_ Tags And Elements
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: The <small> and <big> tags are special in what way ?
    options:
      - They are for images only
      - They work on anything
      - They can be repeated
      - None of the above
    answer: 2
    explanation: They can be repeated is the correct answer to “The <small> and <big> tags are special in what way”. This question is standard in competitive examination syllabi for Html Fonts_ Tags And Elements.
    keyConcept: Html Fonts_ Tags And Elements
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: Choose the correct HTML tag to left-align the content inside a table cell 1. <td leftalign> 2. <td align=”left”> 3. <td valign=”left”> 4. <td="left">
    options:
      - Option 1
      - Option 2
      - Option 3
      - Option 4
      - None of the above
    answer: 1
    explanation: Option 2 is the correct answer to “Choose the correct HTML tag to left-align the content inside a table cell 1. <td leftalign> 2. <td align=”left”> 3. <td valign=”left”> 4. <td="left">”. This question is standard in competitive examination syllabi for Html Fonts_ Tags And Elements.
    keyConcept: Html Fonts_ Tags And Elements
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: The tag which allows some Web server search engines to search your Web page. 1. <SEARCH> 2. <ISINDEX> 3. <HEAD> 4. <LINK>
    options:
      - Option 1
      - Option 2
      - Option 3
      - Option 4
    answer: 1
    explanation: Option 2 is the correct answer to “The tag which allows some Web server search engines to search your Web page. 1. <SEARCH> 2. <ISINDEX> 3. <HEAD> 4. <LINK>”. This question is standard in competitive examination syllabi for Html Fonts_ Tags And Elements.
    keyConcept: Html Fonts_ Tags And Elements
    testedIn:
      - FPSC
      - PPSC
---


