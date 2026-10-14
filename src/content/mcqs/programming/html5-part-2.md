---
title: Html5 — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Html5 — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: html5-part-2
topicName: Html5 — Part 2
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
    question: The ___________ method must add the scaling transformation described by the arguments to the transformation matrix.
    options:
      - scale(x, y)
      - translate(x, y)
      - rotate(angle)
      - none of the mentioned
    answer: 0
    explanation: HTML5 canvas provides scale(x, y) method which is used to increase or decrease the units in our canvas grid.
    keyConcept: Html5
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: Which method must clear the pixels in the specified rectangle that also intersects the current clipping region to a fully transparent black, erasing any previous image?
    options:
      - strokeRect(x, y, w, h)
      - clearRect(x, y, w, h)
      - fillRect(x, y, w, h)
      - none of the mentioned
    answer: 1
    explanation: The clearRect() method clears the specified pixels within a given rectangle.
    keyConcept: Html5
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: When the _____________ method is passed an animated image as its image argument, the user agent must use the poster frame of the animation, or, if there is no poster frame, the first frame of the animation.
    options:
      - measureText()
      - imageData()
      - drawImage()
      - none of the mentioned
    answer: 2
    explanation: The drawImage() method draws an image, canvas, or video onto the canvas.
    keyConcept: Html5
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: The ____________ method must create a new clipping region by calculating the intersection of the current clipping region and the area described by the current path, using the non-zero winding number rule.
    options:
      - fill()
      - stroke()
      - clip()
      - none of the mentioned
    answer: 2
    explanation: The clip() method clips a region of any shape and size from the original canvas.
    keyConcept: Html5
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: The ____________ method must fill all the subpaths of the current path, using fillStyle, and using the non-zero winding number rule.
    options:
      - fill()
      - stroke()
      - clip()
      - none of the mentioned
    answer: 0
    explanation: The fill() method fills the current drawing (path).The default color is black.
    keyConcept: Html5
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: Which of the following methods must empty the list of subpaths so that the context once again has zero subpaths?
    options:
      - closePath()
      - beginPath()
      - moveTo(x, y)
      - none of the mentioned
    answer: 1
    explanation: The beginPath() method begins a path, or resets the current path.
    keyConcept: Html5
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: An API is an application programming interface consisting of methods and properties which allow the author to get or set data or execute commands to the user agent.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: API, an abbreviation of application program interface, is a set of routines, protocols, and tools for building software applications.
    keyConcept: Html5
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: Which of the following is not a type of attribute for input tag?
    options:
      - day
      - week
      - month
      - time
    answer: 0
    explanation: day is not defined in the pre-defined attribute list of input tag
    keyConcept: Html5
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: The new __________ element is supposed to represent some form of extra details, such as a tooltip or revealed region that may be shown to a user.
    options:
      - progress
      - meter
      - details
      - menu
    answer: 2
    explanation: The details tag specifies additional details that the user can view or hide on demand. The details tag can be used to create an interactive widget that the user can open and close. Any sort of content can be put inside the <details> tag.
    keyConcept: Html5
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: The __________ element may contain not just links but also other interactive items, including the newly introduced command element.
    options:
      - progress
      - meter
      - details
      - menu
    answer: 1
    explanation: The menu tag defines a list/menu of commands. The menu tag is used for context menus, toolbars and for listing form controls and commands.
    keyConcept: Html5
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: The __________ attribute effectively renders the iframe as an inline include, which allows the parent document’s CSS to affect the contents of the iframe
    options:
      - allow-forms
      - seamless
      - embed
      - none of the mentioned
    answer: 1
    explanation: The seamless attribute is a boolean attribute. When present, it specifies that the iframe should look like it is a part of the containing document (no borders or scrollbars).
    keyConcept: Html5
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: Which of the following allows the sandboxed iframe to run scripts from the same domain?
    options:
      - allow-same-origin
      - allow-forms
      - allow-scripts
      - none of the mentioned
    answer: 2
    explanation: The sandbox attribute enables an extra set of restrictions for the content in the iframe.
    keyConcept: Html5
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: __________ allows the iframe to pull in content from elsewhere in the same domain.
    options:
      - allow-same-origin
      - allow-forms
      - allow-scripts
      - none of the mentioned
    answer: 0
    explanation: It allows the iframe content to be treated as being from the same origin.
    keyConcept: Html5
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: All elements are identified by their __________ and are marked up using either start tags and end tags or self-closing tags
    options:
      - attribute name
      - tag name
      - class name
      - none of the mentioned
    answer: 1
    explanation: The tagName property returns the tag name of the element. In HTML, the returned value of the tagName property is always in UPPERCASE.
    keyConcept: Html5
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: The __________ element represents a span of text that is isolated from its surroundings for the purposes of bidirectional text formatting
    options:
      - b
      - bdi
      - bdo
      - base
    answer: 1
    explanation: bdi stands for Bi-directional Isolation. This element is useful when embedding user-generated content with an unknown directionality.
    keyConcept: Html5
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: The interactive element audio with the attribute controls must not appear as a descendant of which element?
    options:
      - a
      - button
      - audio
      - both a and b
    answer: 3
    explanation: The anchor and the button tag acts as link which cannot be a parent of audio element.
    keyConcept: Html5
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: A ____________ element must have a start tag but must not have an end tag.
    options:
      - details
      - command
      - code
      - both a and b
    answer: 1
    explanation: The command tag is new in HTML5 and specifies a normal command with an action.
    keyConcept: Html5
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: Which type attribute of input element sets the element’s value to a string representing a number?
    options:
      - range
      - email
      - file
      - date
    answer: 0
    explanation: The input element with a type attribute whose value is “range” represents an imprecise control for setting the element’s value to a string representing a number.
    keyConcept: Html5
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: Which of the following type attributes of input element defines control for entering a telephone number?
    options:
      - mob
      - tel
      - mobile
      - telephone
    answer: 1
    explanation: The input element with a type attribute whose value is “tel” represents a one-line plain-text edit control for entering a telephone number.
    keyConcept: Html5
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: Which element represents a control for generating a public-private key pair?
    options:
      - ins
      - keygen
      - key
      - command
    answer: 1
    explanation: The keygen element represents a control for generating a public-private key pair and for submitting the public key from that key pair.
    keyConcept: Html5
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: The World Wide Web’s markup language has always been HTML.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: The World Wide Web’s markup language has always been HTML. HTML was primarily designed as a language for semantically describing scientific documents, although its general design and adaptations over the years have enabled it to be used to describe a number of other types of documents.
    keyConcept: Html5
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: Which element represents marked or highlighted text for reference purposes?
    options:
      - highlight
      - mark
      - strong
      - blink
    answer: 1
    explanation: The mark element represents a run of text in one document marked or highlighted for reference purposes, due to its relevance in another context.
    keyConcept: Html5
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: Which element(s) represents a section of a document that links to other documents?
    options:
      - navigation
      - anchor tag
      - nav
      - option
    answer: 2
    explanation: "The nav element represents a section of a page that links to other pages or to parts within the page: a section with navigation links."
    keyConcept: Html5
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: Which of the following element marks the ruby text component of a ruby annotation?
    options:
      - r
      - rt
      - ruby
      - rubytxt
    answer: 1
    explanation: The rt element is the markup for ruby text.
    keyConcept: Html5
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: Subtitle tracks and caption tracks to be specified for audio and video elements can be added using which of the following element?
    options:
      - sink
      - track
      - stable
      - caption
    answer: 1
    explanation: The track element enables supplementary media tracks such as subtitle tracks and caption tracks to be specified for audio and video elements.
    keyConcept: Html5
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: Which of the following is/are the property of SVG images?
    options:
      - SVG images are scalable
      - SVG images are zoomable
      - SVG is an open standard
      - All of the mentioned
    answer: 3
    explanation: Scalable Vector Graphics (SVG) is an XML-based vector image format for two-dimensional graphics with support for interactivity and animation.
    keyConcept: Html5
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: _______ drawings can be dynamic and interactive.
    options:
      - Canvas based
      - SVG
      - CSS3
      - JavaScript
    answer: 1
    explanation: Scalable Vector Graphics (SVG) is an XML-based vector image format for two-dimensional graphics with support for interactivity and animation. The SVG specification is an open standard developed by the World Wide Web Consortium (W3C) since 1999. SVG images and their behaviors are defined in XML text files.
    keyConcept: Html5
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: Which element must reference a resource that can provide an image for the cursor graphic?
    options:
      - hover
      - i
      - cursor
      - fill
    answer: 2
    explanation: The cursor attribute specifies the mouse cursor displayed when the mouse pointer is over an element. This attribute behaves exactly like the css cursor property except that if the browser supports the cursor element, you should be able to use it with the funciri notation.
    keyConcept: Html5
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: Which element serves as a container for atomic filter operations.
    options:
      - filter
      - feimage
      - feblend
      - tref
    answer: 0
    explanation: A filter is referenced by using the filter attribute on the target SVG element and is never renderd directly.
    keyConcept: Html5
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: The __________ element must reference either an ‘altGlyphDef’ element or a ‘glyph’ element.
    options:
      - href
      - src
      - animate
      - altGlyph
    answer: 3
    explanation: The altGlyph element allows sophisticated selection of the glyphs used to render its child character data.
    keyConcept: Html5
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: The ___________ element must reference a ‘linearGradient’ or ‘radialGradient’ element.
    options:
      - script
      - radialGradient
      - animateTransform
      - clip-Path
    answer: 1
    explanation: radialGradient lets authors define radial gradients to fill or stroke graphical elements.
    keyConcept: Html5
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: SVG also stands for Scalar Vector Graphics
    options:
      - "True"
      - "False"
    answer: 1
    explanation: SVG stands for Scalable Vector Graphics
    keyConcept: Html5
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: Which property of SVG restricts the region to which paint can be applied?
    options:
      - animateTransform
      - clip-Path
      - linearGradient
      - radialGradient
    answer: 1
    explanation: A clipping path is defined with a clipPath element. A clipping path is used/referenced using the clip-path property.
    keyConcept: Html5
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: Which SVG element produces the same effect as if the nodes were deeply cloned into a non-exposed DOM?
    options:
      - tref
      - use
      - stroke
      - bin
    answer: 1
    explanation: The use element takes nodes from within the SVG document, and duplicates them somewhere else.
    keyConcept: Html5
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: Which of the following attribute triggers event after the document is printed?
    options:
      - offlineprint
      - onprint
      - onafterprint
      - onbeforeprint
    answer: 2
    explanation: onafterprint − Triggers event after the document is printed.
    keyConcept: Html5
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: What is the replacement for cookies in HTML5?
    options:
      - Web beacons
      - Java scripts
      - Local Storage
      - All the above
    answer: 2
    explanation: Local Storage is the correct answer to “What is the replacement for cookies in HTML5”. This question is standard in competitive examination syllabi for Html5.
    keyConcept: Html5
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: A semantic element clearly describes its meaning to
    options:
      - Browser
      - Developer
      - Both A & B
      - None of the above
    answer: 2
    explanation: Both A & B is the correct answer to “A semantic element clearly describes its meaning to”. This question is standard in competitive examination syllabi for Html5.
    keyConcept: Html5
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: Which is not suited for game applications?
    options:
      - Canvas
      - Svg
      - Both A & B
      - None of the above
    answer: 1
    explanation: Svg is the correct answer to “Which is not suited for game applications”. This question is standard in competitive examination syllabi for Html5.
    keyConcept: Html5
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: HTML5 features, include native audio and video support without the need for.
    options:
      - Flash
      - Canvas
      - Svg
      - None of the above
    answer: 0
    explanation: Flash is the correct answer to “HTML5 features, include native audio and video support without the need for.”. This question is standard in competitive examination syllabi for Html5.
    keyConcept: Html5
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: Which attribute specifies that the video will be loaded at page load, and ready to run. Ignored if autoplay is present.
    options:
      - loop
      - src
      - preload
      - poster
    answer: 2
    explanation: preload is the correct answer to “Which attribute specifies that the video will be loaded at page load, and ready to run. Ignored if autoplay is present.”. This question is standard in competitive examination syllabi for Html5.
    keyConcept: Html5
    testedIn:
      - FPSC
      - PPSC
---


