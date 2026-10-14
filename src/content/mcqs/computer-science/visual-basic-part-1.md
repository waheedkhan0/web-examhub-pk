---
title: Visual Basic — Part 1 MCQs with Explanations
description: Practice high-yield Computer Science & IT MCQs on Visual Basic — Part 1 with worked academic solutions for PPSC, FPSC, CSS, PMS, NTS.
subject: computer-science
subjectName: Computer Science & IT
topic: visual-basic-part-1
topicName: Visual Basic — Part 1
author: ExamHub Academic Editorial Board
updatedDate: "2026-10-14"
difficulty: Exam-Level
targetExams:
  - PPSC
  - FPSC
  - CSS
  - PMS
  - NTS
questions:
  - id: 1
    question: Who developed Visual Basic?
    options:
      - Apple
      - Adobe
      - Microsoft
      - Google
    answer: 2
    explanation: Visual Basic was developed by Microsoft . It was created to provide a user-friendly programming environment for building Windows applications. The language evolved over time and had various versions, with Visual Basic 6.0 being one of the most widely used. It allowed developers to create graphical user interfaces and perform rapid application development. While Microsoft's involvement in the development of Visual Basic is well-established, the other options (Apple, Adobe, and Google) were not directly responsible for creating Visual Basic.
    keyConcept: Visual Basic
    testedIn:
      - PPSC
      - FPSC
  - id: 2
    question: Which of the following extension is used to represent the project file in Visual Basic?
    options:
      - .vbp
      - .vb
      - .cls
      - .vvb
    answer: 0
    explanation: "In Visual Basic, the project file is represented by the extension .vbp . This file type contains information about the project structure, references to other files, and various project settings. The .vb extension is used for individual source code files in Visual Basic. The extensions .cls and .vvb are not commonly associated with Visual Basic project files. Therefore, the correct option is Option A: .vbp ."
    keyConcept: Visual Basic
    testedIn:
      - PPSC
      - FPSC
  - id: 3
    question: Which of the following applications can be developed using Visual Basic tool?
    options:
      - Graphical User Interface
      - Real-time
      - Character User Interface
      - All of the mentioned
    answer: 3
    explanation: "Visual Basic is a versatile programming tool that can be used to develop various types of applications, including: Graphical User Interface (GUI) Applications: Visual Basic is particularly well-suited for creating applications with graphical user interfaces. It provides a drag-and-drop interface for designing windows, buttons, menus, and other visual elements that users interact with. Real-time Applications: Visual Basic can also be used to develop real-time applications, where timely processing and responses are critical. While it might not be the primary choice for extremely high-performance real-time applications, it can certainly handle a wide range of real-time tasks. Character User Interface (CUI) Applications: While Visual Basic's strengths lie in creating GUI applications, it's not limited to that. It can also be used to develop character-based or console applications, although its design principles are more aligned with GUI development. Therefore, the correct option is Option D: All of the mentioned , as Visual Basic is capable of developing applications with graphical user interfaces, real-time capabilities, and even character user interfaces to some extent."
    keyConcept: Visual Basic
    testedIn:
      - PPSC
      - FPSC
  - id: 4
    question: In visual basic language what are the rules of a programming language called?
    options:
      - Grammar
      - Order
      - Syntax
      - Rules
    answer: 2
    explanation: "In the context of programming languages, the rules that dictate how programs are written and structured are referred to as Syntax . Syntax defines the correct arrangement of symbols, keywords, and other elements in a programming language to create valid and meaningful code. It governs how statements should be formed and how different parts of a program interact with each other. Option A, Grammar , is related to the structure and rules of a language, but in programming, the more specific term used is Syntax . Option B, Order , is not the appropriate term for describing programming language rules. While the order of statements is important, the term that encompasses all language rules is Syntax . Option D, Rules , is a broad term and does not specifically capture the concept of programming language rules. The term used in this context is Syntax . Therefore, the correct option is Option C: Syntax ."
    keyConcept: Visual Basic
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: In Visual Basic, if you keep a variable undeclared, it is automatically taken as. . . . . . . . data type.
    options:
      - Int
      - Char
      - String
      - Object
    answer: 3
    explanation: "In Visual Basic , if you keep a variable undeclared, it is automatically taken as the Object data type. This means that the variable can hold any type of value, as Object is the base class for all data types in Visual Basic . While this can provide flexibility, it also means that the compiler won't be able to perform type checking or provide compile-time type-related optimizations for the variable. It's generally considered good practice to explicitly declare the data type of variables to ensure clarity and avoid potential issues related to type conversion. Option A, Int , is not the default data type for undeclared variables in Visual Basic . Option B, Char , is not the default data type for undeclared variables in Visual Basic . Option C, String , is not the default data type for undeclared variables in Visual Basic . Therefore, the correct option is Option D: Object ."
    keyConcept: Visual Basic
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: In Visual Basic, which of the following is used for coding single-alternative and dual-alternative selection structures?
    options:
      - Switch-Case block
      - If...Then...Else statement
      - function overloading
      - Recursion
    answer: 1
    explanation: "In Visual Basic , the If...Then...Else statement is used for coding single-alternative and dual-alternative selection structures. Single-alternative selection: In this structure, a decision is made between two options - one when a certain condition is true, and potentially no action when the condition is false. Dual-alternative selection: Here, the program chooses between two possible actions based on whether a given condition is true or false. The If...Then...Else statement is structured as follows: If condition Then ' Code to be executed if the condition is true Else ' Code to be executed if the condition is false (optional) End If The other options listed are not directly related to selection structures in the same way: Option A, Switch-Case block , is used for handling multiple possible values of an expression, not just single or dual alternatives. Option C, function overloading , is a concept related to defining multiple functions with the same name but different parameter lists. It's not used for creating selection structures. Option D, Recursion , is a technique where a function calls itself. While recursion can be used in coding solutions, it's not specifically tied to single or dual-alternative selection structures. Therefore, the correct option is Option B: If...Then...Else statement ."
    keyConcept: Visual Basic
    testedIn:
      - PPSC
      - FPSC
  - id: 7
    question: In Visual Basic, which of the following method converts a string to a number?
    options:
      - Convert
      - Tryparse
      - Extern
      - Parse
    answer: 1
    explanation: "In Visual Basic , the TryParse method is used to convert a string to a number while handling potential errors that might occur during the conversion. This method is commonly used when you want to attempt the conversion without causing an exception if the conversion fails. The TryParse method is used as follows: Dim strNumber As String = \"123\" Dim intValue As Integer If Integer.TryParse(strNumber, intValue) Then ' Conversion successful, intValue now holds the parsed value Else ' Conversion failed, handle the error End If Option A, Convert , is a general-purpose class that provides various methods for converting between data types. While it can be used for converting strings to numbers, it's not the primary method used when error handling is a concern. Option C, Extern , is not a method for converting strings to numbers in Visual Basic . Option D, Parse , is a method for converting strings to numbers, but it does not handle errors in the same way as TryParse . Therefore, the correct option is Option B: TryParse ."
    keyConcept: Visual Basic
    testedIn:
      - PPSC
      - FPSC
  - id: 8
    question: String comparison in Visual basic is case-sensitive.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "In Visual Basic , string comparison is case-sensitive . This means that when you compare two strings, the comparison takes into account the exact letter case of each character in the strings. For example, if you have the strings \"Hello\" and \"hello\", a case-sensitive comparison would consider these strings to be different. To perform a case-insensitive string comparison, you would need to use appropriate methods or functions, such as String.Compare with the appropriate StringComparison enumeration value (e.g., StringComparison.OrdinalIgnoreCase ). Therefore, the correct option is Option A: True ."
    keyConcept: Visual Basic
    testedIn:
      - PPSC
      - FPSC
  - id: 9
    question: . . . . . . . . is the default Visual Basic data type
    options:
      - string
      - boolean
      - variant
      - date
    answer: 2
    explanation: "In Visual Basic , the default data type is variant . A variant is a data type that can hold any type of data. It's a flexible data type that can store numbers, strings, dates, and other types of values. However, while it provides flexibility, it can also lead to some performance overhead and potential type-related issues. Option A, string , is not the default data type in Visual Basic , although strings are commonly used data types. Option B, boolean , is not the default data type in Visual Basic . A boolean data type can only hold True or False values. Option D, date , is not the default data type in Visual Basic . While date is a common data type, variant is the default. Therefore, the correct option is Option C: variant ."
    keyConcept: Visual Basic
    testedIn:
      - PPSC
      - FPSC
  - id: 10
    question: Which of the following displays the list of projects contained in the Visual Basic current solution?
    options:
      - List Window
      - Project Window
      - Catalogue Window
      - Solution Explorer Window
    answer: 3
    explanation: "In Visual Basic , the Solution Explorer Window displays the list of projects contained in the current solution. The solution is a container that holds one or more projects, and the Solution Explorer provides a hierarchical view of these projects along with their files and resources. The Solution Explorer helps you manage your projects, files, references, and other related resources. You can add or remove projects, organize files, and perform various project-related tasks using this window. Option A, List Window , is not a standard term in Visual Basic and does not refer to the window that displays the list of projects. Option B, Project Window , does not typically refer to the window that displays the list of projects in the solution. It might be confused with the Solution Explorer, which serves this purpose. Option C, Catalogue Window , is not a standard term in Visual Basic and does not refer to the window that displays the list of projects. Therefore, the correct option is Option D: Solution Explorer Window ."
    keyConcept: Visual Basic
    testedIn:
      - PPSC
      - FPSC
  - id: 11
    question: What will contain in txtFirst after the following Visual Basic code is executed? strName = "Penny Swanson" txtFirst.Text = strName.Remove(5)
    options:
      - Penny
      - Swanson
      - Penny S
      - y Swanson
    answer: 0
    explanation: The Remove method in Visual Basic removes a specified number of characters from a string starting from the beginning. In this code snippet, strName is assigned the value "Penny Swanson". Then, the Remove method is used to remove characters from the beginning of strName . In the expression strName.Remove(5) , it removes characters starting from index 0 up to (but not including) index 5. So, it removes the characters " Swans" from "Penny Swanson", leaving "Penny". Therefore, after execution, txtFirst.Text will contain " Penny ".
    keyConcept: Visual Basic
    testedIn:
      - PPSC
      - FPSC
  - id: 12
    question: In the following Visual Basic code, what will be in msg, if str contains "visual basic"? Dim str as String Dim msg as String If str.toUpper="VISUAL BASIC" msg="VB.Net" Else msg="Not Visual Basic" EndIf
    options:
      - VB.Net
      - Not Visual Basic
      - Logical Error
      - Compiler Error
    answer: 0
    explanation: The given Visual Basic code snippet compares the string variable str with "VISUAL BASIC" after converting it to uppercase using the ToUpper method. If the str variable contains "visual basic", it will be converted to "VISUAL BASIC" and compared with "VISUAL BASIC". Since the comparison is case insensitive due to the use of ToUpper, the condition will be true and msg will be assigned the value "VB.Net". Hence, the output will be "VB.Net".
    keyConcept: Visual Basic
    testedIn:
      - PPSC
      - FPSC
  - id: 13
    question: What output will be returned if the following Visual Basic code is executed? strVisualBasic = "Example, VB.Net" intCharIndex = strVisualBasic.IndexOf("VB")
    options:
      - "8"
      - "9"
      - "False"
      - "True"
    answer: 1
    explanation: "The IndexOf function in Visual Basic is used to find the first occurrence of a specific string within another string. In this code, strVisualBasic is assigned the string \"Example, VB.Net\". The line intCharIndex = strVisualBasic.IndexOf(\"VB\") attempts to find the starting position of the substring \"VB\" within strVisualBasic. The IndexOf function returns the index (position) of the first character of the found substring. The index starts at 0. In the string \"Example, VB.Net\", \"VB\" starts at the 9th position (remember counting starts at 0). 'E' is at index 0, 'x' is at index 1, 'a' is at index 2, 'm' is at index 3, 'p' is at index 4, 'l' is at index 5, 'e' is at index 6, ',' is at index 7, ' ' is at index 8, 'V' is at index 9. Therefore, intCharIndex will be assigned the value 9. So the correct answer is Option B: 9"
    keyConcept: Visual Basic
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: Which of the following returns a value after performing its specific task in Visual Basic?
    options:
      - Structure
      - Sub block
      - Sub procedure
      - Function Procedure
    answer: 3
    explanation: Function Procedure is the correct answer to “Which of the following returns a value after performing its specific task in Visual Basic”. This question is standard in competitive examination syllabi for Visual Basic.
    keyConcept: Visual Basic
    testedIn:
      - PPSC
      - FPSC
  - id: 15
    question: All Code in Visual Basic is stored in the form of. . . . . . . .
    options:
      - properties window
      - module
      - object
      - object browser
    answer: 1
    explanation: module is the correct answer to “All Code in Visual Basic is stored in the form of. . . . . . . .”. This question is standard in competitive examination syllabi for Visual Basic.
    keyConcept: Visual Basic
    testedIn:
      - PPSC
      - FPSC
  - id: 16
    question: The . . . . . . . . is a very useful control for Visual Basic, as it is not only used to provide instructions and guides to the users, it can also be used to display outputs.
    options:
      - image
      - combo
      - label
      - text
    answer: 2
    explanation: label is the correct answer to “The . . . . . . . . is a very useful control for Visual Basic, as it is not only used to provide instructions and guides to the users, it can also be used to display outputs.”. This question is standard in competitive examination syllabi for Visual Basic.
    keyConcept: Visual Basic
    testedIn:
      - PPSC
      - FPSC
  - id: 17
    question: when we Declaring a variable before programming start it is called as . . . . . . . . it tells Visual Basic to reserve space in memory.
    options:
      - explicit declaring
      - implicit declaring
      - public declaring
      - local declaring
    answer: 0
    explanation: explicit declaring is the correct answer to “when we Declaring a variable before programming start it is called as . . . . . . . . it tells Visual Basic to reserve space in memory.”. This question is standard in competitive examination syllabi for Visual Basic.
    keyConcept: Visual Basic
    testedIn:
      - PPSC
      - FPSC
  - id: 18
    question: What happens when both the minimize box and maximize box property are set to false in Visual Basic?
    options:
      - Both are removed from the title bar
      - Both are disabled
      - This situation shows an exception
      - This situation shows an error
    answer: 0
    explanation: Both are removed from the title bar is the correct answer to “What happens when both the minimize box and maximize box property are set to false in Visual Basic”. This question is standard in competitive examination syllabi for Visual Basic.
    keyConcept: Visual Basic
    testedIn:
      - PPSC
      - FPSC
  - id: 19
    question: In Visual Basic, which of the following keyword tells the computer to pass the variable's address rather than its contents?
    options:
      - ByAdd
      - ByPoint
      - ByRef
      - ByVal
    answer: 2
    explanation: ByRef is the correct answer to “In Visual Basic, which of the following keyword tells the computer to pass the variable's address rather than its contents”. This question is standard in competitive examination syllabi for Visual Basic.
    keyConcept: Visual Basic
    testedIn:
      - PPSC
      - FPSC
  - id: 20
    question: In Visual Basic if we declare a variable without any data type by . . . . . . . .this the data type is assigned as default..
    options:
      - string
      - boolean
      - variant
      - date
    answer: 2
    explanation: variant is the correct answer to “In Visual Basic if we declare a variable without any data type by . . . . . . . .this the data type is assigned as default..”. This question is standard in competitive examination syllabi for Visual Basic.
    keyConcept: Visual Basic
    testedIn:
      - PPSC
      - FPSC
  - id: 21
    question: Which of the following method is used to sort an array in visual basic?
    options:
      - Array.Sort()
      - Array.sortAscending()
      - Array.arrayArrange()
      - Array.arrange()
    answer: 0
    explanation: Array.Sort() is the correct answer to “Which of the following method is used to sort an array in visual basic”. This question is standard in competitive examination syllabi for Visual Basic.
    keyConcept: Visual Basic
    testedIn:
      - PPSC
      - FPSC
  - id: 22
    question: Which of the following instruction tells the computer to close the current form in Visual Basic?
    options:
      - This.Close()
      - Me.Close()
      - Close.this()
      - Close()
    answer: 1
    explanation: Me.Close() is the correct answer to “Which of the following instruction tells the computer to close the current form in Visual Basic”. This question is standard in competitive examination syllabi for Visual Basic.
    keyConcept: Visual Basic
    testedIn:
      - PPSC
      - FPSC
  - id: 23
    question: Which of the following is used to write a stream of characters in Visual Basic?
    options:
      - StreamReader object
      - StreamReader class
      - StreamWriter object
      - StreamWriter class
    answer: 2
    explanation: StreamWriter object is the correct answer to “Which of the following is used to write a stream of characters in Visual Basic”. This question is standard in competitive examination syllabi for Visual Basic.
    keyConcept: Visual Basic
    testedIn:
      - PPSC
      - FPSC
  - id: 24
    question: Which of the following is the default name assigned to the label control in Visual Basic?
    options:
      - Label1
      - DefaultLabel
      - Label0
      - NewLabel
    answer: 0
    explanation: Label1 is the correct answer to “Which of the following is the default name assigned to the label control in Visual Basic”. This question is standard in competitive examination syllabi for Visual Basic.
    keyConcept: Visual Basic
    testedIn:
      - PPSC
      - FPSC
  - id: 25
    question: You can eliminate the problems of implicit type conversion, with the help of . . . . . . . .
    options:
      - Option Strict On
      - Option Strict Off
      - Implicit Off
      - Explicit On
    answer: 0
    explanation: Option Strict On is the correct answer to “You can eliminate the problems of implicit type conversion, with the help of . . . . . . . .”. This question is standard in competitive examination syllabi for Visual Basic.
    keyConcept: Visual Basic
    testedIn:
      - PPSC
      - FPSC
  - id: 26
    question: The . . . . . . . . constant instructs the computer to advance the insertion point to the next line in control.
    options:
      - ControlChars.NewLine
      - ControlChars.NextLine
      - ControlChars.Line
      - ControlChars.blankLine
    answer: 0
    explanation: ControlChars.NewLine is the correct answer to “The . . . . . . . . constant instructs the computer to advance the insertion point to the next line in control.”. This question is standard in competitive examination syllabi for Visual Basic.
    keyConcept: Visual Basic
    testedIn:
      - PPSC
      - FPSC
  - id: 27
    question: The . . . . . . . . operator is commonly used to determine whether a number is even or odd.
    options:
      - Addition
      - Modulus
      - Subtraction
      - Integer division
    answer: 1
    explanation: Modulus is the correct answer to “The . . . . . . . . operator is commonly used to determine whether a number is even or odd.”. This question is standard in competitive examination syllabi for Visual Basic.
    keyConcept: Visual Basic
    testedIn:
      - PPSC
      - FPSC
  - id: 28
    question: . . . . . . . . operator reverses the truth value of the operation.
    options:
      - AND
      - OR
      - NOT
      - NAND
    answer: 2
    explanation: NOT is the correct answer to “. . . . . . . . operator reverses the truth value of the operation.”. This question is standard in competitive examination syllabi for Visual Basic.
    keyConcept: Visual Basic
    testedIn:
      - PPSC
      - FPSC
  - id: 29
    question: A variable is scoped to a global or local variable depending on how it is declared.
    options:
      - "TRUE"
      - "FALSE"
    answer: 0
    explanation: TRUE is the correct answer to “A variable is scoped to a global or local variable depending on how it is declared.”. This question is standard in competitive examination syllabi for Visual Basic.
    keyConcept: Visual Basic
    testedIn:
      - PPSC
      - FPSC
  - id: 30
    question: A procedure-level variable is declared using . . . . . . . . keyword.
    options:
      - Private
      - Public
      - Dim
      - Static
    answer: 2
    explanation: Dim is the correct answer to “A procedure-level variable is declared using . . . . . . . . keyword.”. This question is standard in competitive examination syllabi for Visual Basic.
    keyConcept: Visual Basic
    testedIn:
      - PPSC
      - FPSC
  - id: 31
    question: when we declare the variable in . . . . . . . . of VB then it is public variable
    options:
      - static
      - public
      - local
      - general
    answer: 1
    explanation: public is the correct answer to “when we declare the variable in . . . . . . . . of VB then it is public variable”. This question is standard in competitive examination syllabi for Visual Basic.
    keyConcept: Visual Basic
    testedIn:
      - PPSC
      - FPSC
  - id: 32
    question: The position of an item in a list box depends on the value stored in the list box's . . . . . . . .
    options:
      - Ascending property
      - Descending Property
      - Sorted property
      - Unsorted property
    answer: 2
    explanation: Sorted property is the correct answer to “The position of an item in a list box depends on the value stored in the list box's . . . . . . . .”. This question is standard in competitive examination syllabi for Visual Basic.
    keyConcept: Visual Basic
    testedIn:
      - PPSC
      - FPSC
  - id: 33
    question: The . . . . . . . . validator is used to compare an entry with a constant value or the property stored in a control.
    options:
      - CompareValidator
      - RangeValidator
      - RequiredFieldValidator
      - ValidationSummary
    answer: 0
    explanation: CompareValidator is the correct answer to “The . . . . . . . . validator is used to compare an entry with a constant value or the property stored in a control.”. This question is standard in competitive examination syllabi for Visual Basic.
    keyConcept: Visual Basic
    testedIn:
      - PPSC
      - FPSC
  - id: 34
    question: The . . . . . . . . in a pattern represents one character only.
    options:
      - "?"
      - "*"
      - "#"
      - "**"
    answer: 0
    explanation: "? is the correct answer to “The . . . . . . . . in a pattern represents one character only.”. This question is standard in competitive examination syllabi for Visual Basic."
    keyConcept: Visual Basic
    testedIn:
      - PPSC
      - FPSC
  - id: 35
    question: Which is used to check both the conditions in a given if statement?
    options:
      - OrElse
      - AndAlso
      - NOT
      - OR
    answer: 1
    explanation: AndAlso is the correct answer to “Which is used to check both the conditions in a given if statement”. This question is standard in competitive examination syllabi for Visual Basic.
    keyConcept: Visual Basic
    testedIn:
      - PPSC
      - FPSC
  - id: 36
    question: A label control's . . . . . . . . property determines whether the control automatically sizes to fit its current contents.
    options:
      - AutoSize property
      - Control property
      - Auto control property
      - Autoformat property
    answer: 0
    explanation: AutoSize property is the correct answer to “A label control's . . . . . . . . property determines whether the control automatically sizes to fit its current contents.”. This question is standard in competitive examination syllabi for Visual Basic.
    keyConcept: Visual Basic
    testedIn:
      - PPSC
      - FPSC
  - id: 37
    question: When the . . . . . . . . is checked, its value is set to 1 and when it is unchecked, the value is set to 0.
    options:
      - combo box
      - checkbox
      - radio
      - text
    answer: 1
    explanation: checkbox is the correct answer to “When the . . . . . . . . is checked, its value is set to 1 and when it is unchecked, the value is set to 0.”. This question is standard in competitive examination syllabi for Visual Basic.
    keyConcept: Visual Basic
    testedIn:
      - PPSC
      - FPSC
  - id: 38
    question: Which event occurs each time an interval is elapsed in the timer?
    options:
      - Tick
      - Click
      - Elapse
      - Count
    answer: 0
    explanation: Tick is the correct answer to “Which event occurs each time an interval is elapsed in the timer”. This question is standard in competitive examination syllabi for Visual Basic.
    keyConcept: Visual Basic
    testedIn:
      - PPSC
      - FPSC
  - id: 39
    question: Selection structures that can select from many alternatives are known as . . . . . . . .
    options:
      - Selection structures
      - Multiple-alternative selection structures
      - Multiway selection structures
      - Multipath selection structures
    answer: 1
    explanation: Multiple-alternative selection structures is the correct answer to “Selection structures that can select from many alternatives are known as . . . . . . . .”. This question is standard in competitive examination syllabi for Visual Basic.
    keyConcept: Visual Basic
    testedIn:
      - PPSC
      - FPSC
  - id: 40
    question: StretchImage Property is present in which dialog box?
    options:
      - Task list
      - Properties Window
      - Picture Task Window
      - View Window
    answer: 0
    explanation: Task list is the correct answer to “StretchImage Property is present in which dialog box”. This question is standard in competitive examination syllabi for Visual Basic.
    keyConcept: Visual Basic
    testedIn:
      - PPSC
      - FPSC
---


