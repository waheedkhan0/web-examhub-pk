---
title: Css Selectors And Css Files MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Css Selectors And Css Files with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: css-selectors-and-css-files
topicName: Css Selectors And Css Files
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
    question: Which of the following selector selects all elements of E that have the attribute attr that end with the given value?
    options:
      - E[attr^=value]
      - E[attr$=value]
      - E[attr*=value]
      - none of the mentioned
    answer: 1
    explanation: "Example: p[title$=\"!\"] {color: red;}"
    keyConcept: Css Selectors And Css Files
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: Which of the following selector selects the elements that are checked?
    options:
      - E ~ F
      - "::after"
      - ":checked"
      - none of the mentioned
    answer: 2
    explanation: "Example: :checked {color: blue;}"
    keyConcept: Css Selectors And Css Files
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Which of the following selector selects the elements that are the default among a set of similar elements?
    options:
      - ":default"
      - ":%"
      - ":disabled"
      - none of the mentioned
    answer: 0
    explanation: "Example: :default {background-color: red;}"
    keyConcept: Css Selectors And Css Files
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: Which of the following selector selects the elements that are currently enabled?
    options:
      - ":element"
      - ":empty"
      - ":enabled"
      - none of the mentioned
    answer: 2
    explanation: "Example: input:enabled {background-color:white;}"
    keyConcept: Css Selectors And Css Files
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: Which of the following selector selects the element that is the first child of its parent that is of its type?
    options:
      - ":first-of-type"
      - ":last-child"
      - "::first-line"
      - "::first-letter"
    answer: 0
    explanation: "Example: strong:first-of-type {font-size:bigger;}"
    keyConcept: Css Selectors And Css Files
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: Which of the following selector selects elements that do not match the selector s?
    options:
      - ":!(s)"
      - ":nth-child(s)"
      - ":not(s)"
      - none of the mentioned
    answer: 2
    explanation: "Example: *:not(h1) {color: black;}"
    keyConcept: Css Selectors And Css Files
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: Which of the following selector selects an element if it’s the only child of its parent?
    options:
      - ":root"
      - ":nth-oftype(n)"
      - ":only-child"
      - none of the mentioned
    answer: 2
    explanation: "Example: h1:only-child {color: blue;}"
    keyConcept: Css Selectors And Css Files
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: Which of the following selector selects the element that is the target of a referring URI?
    options:
      - ":target"
      - ":selection"
      - "::selection"
      - ":URI"
    answer: 0
    explanation: "Example: :target{color:red;}"
    keyConcept: Css Selectors And Css Files
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: Which of the following selector applies styles to elements that are valid per HTML5 validations set either with the pattern or type attributes?
    options:
      - ":valid"
      - ":required"
      - ":optional"
      - ":invalid"
    answer: 0
    explanation: "Example: :valid {color: green;}"
    keyConcept: Css Selectors And Css Files
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: "p {line-height: 150%;}.What type of selector is used in this case?"
    options:
      - class Selectors
      - element Selectors
      - id Selectors
      - none of the mentioned
    answer: 1
    explanation: "These selectors are called element selectors and are simply used as follows: element-name { /* properties */ }"
    keyConcept: Css Selectors And Css Files
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: By applying an ___________ a style can be applied to just a single tag.
    options:
      - class rule
      - element rule
      - id rule
      - none of the mentioned
    answer: 2
    explanation: By applying an id rule, a style can be applied to just a single tag. For example, if we name a tag with a unique id attribute as follows <tag id="id-value"> Affected Text </tag>
    keyConcept: Css Selectors And Css Files
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: "What will happen in this case? p strong {background-color: yellow;}"
    options:
      - Strong have yellow background
      - Strong element within a p element have a yellow background
      - Both p and strong have yellow background
      - None of the mentioned
    answer: 1
    explanation: All occurrences of the strong element within a p element have a yellow background.
    keyConcept: Css Selectors And Css Files
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: Which of the following selectors selects any tag with an id attribute set?
    options:
      - E#id
      - .class
      - "#id"
      - "*"
    answer: 2
    explanation: "Example:#test {color: green;} /* makes a tag with id=’test’ green */"
    keyConcept: Css Selectors And Css Files
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: Which of the following selectors selects direct descendents?
    options:
      - E > F
      - E F
      - E + F
      - E ~ F
    answer: 0
    explanation: "Example: body > p {background-color: yellow;} /* makes all p tags that have the body tag as their immediate parent have the background color yellow */"
    keyConcept: Css Selectors And Css Files
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: Which of the following selectors selects siblings?
    options:
      - E.class
      - E ~ F
      - "*"
      - E, F, G
    answer: 1
    explanation: "Example: p ~ strong {font-style: italic;} /* sets the font style to italic on all strong tags that have a p tag as a preceding sibling */"
    keyConcept: Css Selectors And Css Files
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: Which of the following selectors selects the specified elements of type E with a particular class value?
    options:
      - E.class
      - E ~ F
      - "*"
      - E, F, G
    answer: 0
    explanation: "Example: h1.note {text-decoration: underline;} /* underlines all h1 tags with class='note' */"
    keyConcept: Css Selectors And Css Files
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: Which of the following selectors selects adjacent siblings?
    options:
      - E > F
      - E F
      - E + F
      - E ~ F
    answer: 2
    explanation: "Example: h1 + p {color: red;} /* makes all p tags that are immediately preceded by an h1 tag red */"
    keyConcept: Css Selectors And Css Files
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: "What will happen in this case? <p style=\"color: red\"> text </p>"
    options:
      - make that specific paragraph red.
      - error
      - nothing happens
      - none of the mentioned
    answer: 0
    explanation: "make that specific paragraph red. is the correct answer to “What will happen in this case? <p style=\"color: red\"> text </p>”. This question is standard in competitive examination syllabi for Css Selectors And Css Files."
    keyConcept: Css Selectors And Css Files
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: The _______property is used to set the color of the text.
    options:
      - pallet
      - colour
      - color
      - text-decoration
    answer: 2
    explanation: color is the correct answer to “The _______property is used to set the color of the text.”. This question is standard in competitive examination syllabi for Css Selectors And Css Files.
    keyConcept: Css Selectors And Css Files
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: Which of the following is the correct way to apply Styles?
    options:
      - inside an HTML element
      - inside the section of an HTML page
      - in an external CSS file
      - all of the mentioned
    answer: 3
    explanation: all of the mentioned is the correct answer to “Which of the following is the correct way to apply Styles”. This question is standard in competitive examination syllabi for Css Selectors And Css Files.
    keyConcept: Css Selectors And Css Files
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: Which of the following CSS list properties is/are correct?
    options:
      - Set different list item markers for ordered lists
      - Set different list item markers for unordered lists
      - Set an image as the list item marker
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “Which of the following CSS list properties is/are correct”. This question is standard in competitive examination syllabi for Css Selectors And Css Files.
    keyConcept: Css Selectors And Css Files
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: A ___________ is used to define a special state of an element.
    options:
      - pseudo-tag
      - pseudo-element
      - pseudo-id
      - pseudo-class
    answer: 3
    explanation: pseudo-class is the correct answer to “A ___________ is used to define a special state of an element.”. This question is standard in competitive examination syllabi for Css Selectors And Css Files.
    keyConcept: Css Selectors And Css Files
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: The __________ property specifies the type of positioning method used for an element.
    options:
      - align
      - float
      - position
      - padding
    answer: 2
    explanation: position is the correct answer to “The __________ property specifies the type of positioning method used for an element.”. This question is standard in competitive examination syllabi for Css Selectors And Css Files.
    keyConcept: Css Selectors And Css Files
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: Which of the following selector selects an element that has no children?
    options:
      - ":empty"
      - ":nochild"
      - ":inheritance"
      - ":no-child"
    answer: 0
    explanation: ":empty is the correct answer to “Which of the following selector selects an element that has no children”. This question is standard in competitive examination syllabi for Css Selectors And Css Files."
    keyConcept: Css Selectors And Css Files
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: The _____________ attribute is used to define the name(s) of the class(es) to which a particular tag belongs.
    options:
      - class
      - element
      - id
      - none of the mentioned
    answer: 0
    explanation: class is the correct answer to “The _____________ attribute is used to define the name(s) of the class(es) to which a particular tag belongs.”. This question is standard in competitive examination syllabi for Css Selectors And Css Files.
    keyConcept: Css Selectors And Css Files
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: A similar rule called the ____________ is specified using the plus sign (+) and is used to select elements that would be siblings of each other.
    options:
      - class selectors
      - attribute selectors
      - adjacent-sibling selector
      - none of the mentioned
    answer: 2
    explanation: adjacent-sibling selector is the correct answer to “A similar rule called the ____________ is specified using the plus sign (+) and is used to select elements that would be siblings of each other.”. This question is standard in competitive examination syllabi for Css Selectors And Css Files.
    keyConcept: Css Selectors And Css Files
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: "What will be the output of following code snippet? <style h1 {color: green;}> <h1>Hello</h1>"
    options:
      - h1 heading becomes green
      - error
      - h1 heading disappears
      - nothing happens
    answer: 2
    explanation: "h1 heading disappears is the correct answer to “What will be the output of following code snippet? <style h1 {color: green;}> <h1>Hello</h1>”. This question is standard in competitive examination syllabi for Css Selectors And Css Files."
    keyConcept: Css Selectors And Css Files
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: "Which style is this? <body style=\"background-color: lightcyan\">"
    options:
      - Inline Styles
      - External Style Sheet
      - External Style Sheettyle Sheet
      - None of the mentioned
    answer: 0
    explanation: "Inline Styles is the correct answer to “Which style is this? <body style=\"background-color: lightcyan\">”. This question is standard in competitive examination syllabi for Css Selectors And Css Files."
    keyConcept: Css Selectors And Css Files
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: Is this correct way to apply css.State true or false. <link rel="stylesheet" type="text/css" href="mystyle.css">
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “Is this correct way to apply css.State true or false. <link rel="stylesheet" type="text/css" href="mystyle.css">”. This question is standard in competitive examination syllabi for Css Selectors And Css Files.
    keyConcept: Css Selectors And Css Files
    testedIn:
      - FPSC
      - PPSC
---


