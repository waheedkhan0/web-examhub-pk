---
title: Introduction To Data Structures — Part 1 MCQs with Explanations
description: Practice high-yield Computer Science & IT MCQs on Introduction To Data Structures — Part 1 with worked academic solutions for PPSC, FPSC, CSS, PMS, NTS.
subject: computer-science
subjectName: Computer Science & IT
topic: introduction-to-data-structures-part-1
topicName: Introduction To Data Structures — Part 1
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
    question: What is the best case time complexity for binary search?
    options:
      - O(n)
      - O(log n)
      - O(n log n)
      - O(1)
    answer: 3
    explanation: "Binary search is an efficient algorithm to find an element in a sorted array by repeatedly dividing the search interval in half. The best case time complexity occurs when the target element is found at the very first comparison, which is at the middle of the array. In this best case scenario, the element is located immediately, so only one comparison is needed. Therefore, the best case time complexity of binary search is O(1) , which means constant time. Other cases: - The average and worst case time complexities of binary search are O(log n) , where n is the number of elements in the array. Hence, the correct answer is Option D: O(1) ."
    keyConcept: Introduction To Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 2
    question: Elements in an array are accessed . . . . . . . .
    options:
      - randomly
      - sequentially
      - exponentially
      - logarithmically
    answer: 0
    explanation: "Option A: randomly - This means you can go directly to any box (element) in the array by knowing its number (index). Arrays are designed to let you jump straight to an element without looking at the others. Option B: sequentially - This means you'd have to go through each box one after the other to find the one you want. While you *can* access an array sequentially, it's not how they're designed to be used or the most efficient way. Option C: exponentially and Option D: logarithmically - These terms don't really relate to how we access elements in an array. These usually relate to more complex algorithms or how things grow in size. Arrays provide direct access to elements using their index. So, you can get to element number 5 just as quickly as you can get to element number 1. That's why it's called random access."
    keyConcept: Introduction To Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 3
    question: Minimum number of queues to implement stack is . . . . . . . .
    options:
      - "3"
      - "4"
      - "1"
      - "2"
    answer: 3
    explanation: A stack can be implemented using two queues . In a stack, the Last In First Out (LIFO) principle is followed, while in a queue, the First In First Out (FIFO) principle is used. To implement stack operations using queues, we need two queues — one to hold the elements temporarily and the other to help reverse the order of insertion. When performing a push operation, elements are enqueued in such a way that the newly added element appears at the front of the queue, simulating stack behavior. Alternatively, we can also implement the pop operation by moving elements between the two queues until we reach the desired element to remove. Hence, the minimum number of queues required to implement a stack is 2 .
    keyConcept: Introduction To Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 4
    question: What is a data structure?
    options:
      - A collection of data values
      - A programming language
      - A set of algorithms
      - A way of organizing and storing data
    answer: 3
    explanation: A way of organizing and storing data is the correct answer to “What is a data structure”. This question is standard in competitive examination syllabi for Introduction To Data Structures.
    keyConcept: Introduction To Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: Which of the following is a linear data structure?
    options:
      - Graph
      - Tree
      - Array
      - Hash Table
    answer: 2
    explanation: Array is the correct answer to “Which of the following is a linear data structure”. This question is standard in competitive examination syllabi for Introduction To Data Structures.
    keyConcept: Introduction To Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: Which data structure uses LIFO order?
    options:
      - Queue
      - Stack
      - Array
      - Linked List
    answer: 1
    explanation: Stack is the correct answer to “Which data structure uses LIFO order”. This question is standard in competitive examination syllabi for Introduction To Data Structures.
    keyConcept: Introduction To Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 7
    question: Which data structure uses FIFO order?
    options:
      - Stack
      - Graph
      - Queue
      - Tree
    answer: 2
    explanation: Queue is the correct answer to “Which data structure uses FIFO order”. This question is standard in competitive examination syllabi for Introduction To Data Structures.
    keyConcept: Introduction To Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 8
    question: Which of the following is not a data structure?
    options:
      - Linked List
      - Array
      - Binary Tree
      - None of the above
    answer: 3
    explanation: None of the above is the correct answer to “Which of the following is not a data structure”. This question is standard in competitive examination syllabi for Introduction To Data Structures.
    keyConcept: Introduction To Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 9
    question: Which data structure is used to implement recursion?
    options:
      - Array
      - Stack
      - Queue
      - Linked List
    answer: 1
    explanation: Stack is the correct answer to “Which data structure is used to implement recursion”. This question is standard in competitive examination syllabi for Introduction To Data Structures.
    keyConcept: Introduction To Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 10
    question: Which of the following data structures allows random access?
    options:
      - Linked List
      - Array
      - Stack
      - Queue
    answer: 1
    explanation: Array is the correct answer to “Which of the following data structures allows random access”. This question is standard in competitive examination syllabi for Introduction To Data Structures.
    keyConcept: Introduction To Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 11
    question: What is the time complexity of accessing an element in an array?
    options:
      - O(n)
      - O(1)
      - O(log n)
      - O(n log n)
    answer: 1
    explanation: O(1) is the correct answer to “What is the time complexity of accessing an element in an array”. This question is standard in competitive examination syllabi for Introduction To Data Structures.
    keyConcept: Introduction To Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 12
    question: Which data structure is used for breadth-first search (BFS)?
    options:
      - Stack
      - Queue
      - Array
      - Linked List
    answer: 1
    explanation: Queue is the correct answer to “Which data structure is used for breadth-first search (BFS)”. This question is standard in competitive examination syllabi for Introduction To Data Structures.
    keyConcept: Introduction To Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 13
    question: Which data structure is used for depth-first search (DFS)?
    options:
      - Stack
      - Queue
      - Array
      - Tree
    answer: 0
    explanation: Stack is the correct answer to “Which data structure is used for depth-first search (DFS)”. This question is standard in competitive examination syllabi for Introduction To Data Structures.
    keyConcept: Introduction To Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: What is a linked list?
    options:
      - A collection of elements stored at contiguous memory locations
      - A linear collection of data elements
      - A hierarchical structure of data
      - A collection of nodes, each pointing to the next node
    answer: 3
    explanation: A collection of nodes, each pointing to the next node is the correct answer to “What is a linked list”. This question is standard in competitive examination syllabi for Introduction To Data Structures.
    keyConcept: Introduction To Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 15
    question: Which of the following operations is faster in a linked list?
    options:
      - Insertion at the beginning
      - Accessing an element by index
      - Searching an element
      - Deleting an element by value
    answer: 0
    explanation: Insertion at the beginning is the correct answer to “Which of the following operations is faster in a linked list”. This question is standard in competitive examination syllabi for Introduction To Data Structures.
    keyConcept: Introduction To Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 16
    question: What does ADT stand for?
    options:
      - Abstract Data Type
      - Abstract Data Tree
      - Algorithmic Data Type
      - Advanced Data Type
    answer: 0
    explanation: Abstract Data Type is the correct answer to “What does ADT stand for”. This question is standard in competitive examination syllabi for Introduction To Data Structures.
    keyConcept: Introduction To Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 17
    question: Which of the following is a non-linear data structure?
    options:
      - Stack
      - Linked List
      - Graph
      - Array
    answer: 2
    explanation: Graph is the correct answer to “Which of the following is a non-linear data structure”. This question is standard in competitive examination syllabi for Introduction To Data Structures.
    keyConcept: Introduction To Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 18
    question: What is the primary advantage of using a linked list over an array?
    options:
      - Constant time access to elements
      - Dynamic size
      - Simple memory allocation
      - None of the above
    answer: 1
    explanation: Dynamic size is the correct answer to “What is the primary advantage of using a linked list over an array”. This question is standard in competitive examination syllabi for Introduction To Data Structures.
    keyConcept: Introduction To Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 19
    question: Which data structure is used in a depth-first traversal of a graph?
    options:
      - Stack
      - Queue
      - Array
      - Linked List
    answer: 0
    explanation: Stack is the correct answer to “Which data structure is used in a depth-first traversal of a graph”. This question is standard in competitive examination syllabi for Introduction To Data Structures.
    keyConcept: Introduction To Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 20
    question: What type of data structure is a stack?
    options:
      - FIFO
      - LIFO
      - Random Access
      - Priority Queue
    answer: 1
    explanation: LIFO is the correct answer to “What type of data structure is a stack”. This question is standard in competitive examination syllabi for Introduction To Data Structures.
    keyConcept: Introduction To Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 21
    question: Which data structure can be used to implement a queue?
    options:
      - Stack
      - Linked List
      - Tree
      - Hash Table
    answer: 1
    explanation: Linked List is the correct answer to “Which data structure can be used to implement a queue”. This question is standard in competitive examination syllabi for Introduction To Data Structures.
    keyConcept: Introduction To Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 22
    question: In which data structure do elements have a hierarchical relationship?
    options:
      - Array
      - Linked List
      - Graph
      - Tree
    answer: 3
    explanation: Tree is the correct answer to “In which data structure do elements have a hierarchical relationship”. This question is standard in competitive examination syllabi for Introduction To Data Structures.
    keyConcept: Introduction To Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 23
    question: What is the main advantage of a hash table over a linked list?
    options:
      - Faster search
      - Easier to implement
      - Lower memory usage
      - Simpler insertion
    answer: 0
    explanation: Faster search is the correct answer to “What is the main advantage of a hash table over a linked list”. This question is standard in competitive examination syllabi for Introduction To Data Structures.
    keyConcept: Introduction To Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 24
    question: Which data structure is best for implementing a priority queue?
    options:
      - Stack
      - Linked List
      - Heap
      - Queue
    answer: 2
    explanation: Heap is the correct answer to “Which data structure is best for implementing a priority queue”. This question is standard in competitive examination syllabi for Introduction To Data Structures.
    keyConcept: Introduction To Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 25
    question: What is the primary operation of a stack?
    options:
      - Enqueue
      - Dequeue
      - Push
      - Traverse
    answer: 2
    explanation: Push is the correct answer to “What is the primary operation of a stack”. This question is standard in competitive examination syllabi for Introduction To Data Structures.
    keyConcept: Introduction To Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 26
    question: What is the main characteristic of a circular queue?
    options:
      - It has a fixed size
      - It uses a linked list
      - The last position is connected to the first position
      - It can grow dynamically
    answer: 2
    explanation: The last position is connected to the first position is the correct answer to “What is the main characteristic of a circular queue”. This question is standard in competitive examination syllabi for Introduction To Data Structures.
    keyConcept: Introduction To Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 27
    question: Which of the following is true about a doubly linked list?
    options:
      - Each node has two pointers
      - It is a type of tree
      - It can be traversed in one direction only
      - It has a circular structure
    answer: 0
    explanation: Each node has two pointers is the correct answer to “Which of the following is true about a doubly linked list”. This question is standard in competitive examination syllabi for Introduction To Data Structures.
    keyConcept: Introduction To Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 28
    question: Which data structure is used to evaluate expressions in postfix form?
    options:
      - Stack
      - Queue
      - Array
      - Tree
    answer: 0
    explanation: Stack is the correct answer to “Which data structure is used to evaluate expressions in postfix form”. This question is standard in competitive examination syllabi for Introduction To Data Structures.
    keyConcept: Introduction To Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 29
    question: What is the worst-case time complexity of linear search?
    options:
      - O(n)
      - O(log n)
      - O(n log n)
      - O(1)
    answer: 0
    explanation: O(n) is the correct answer to “What is the worst-case time complexity of linear search”. This question is standard in competitive examination syllabi for Introduction To Data Structures.
    keyConcept: Introduction To Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 30
    question: Which of the following is an application of a stack?
    options:
      - Page replacement in operating systems
      - Undo mechanism in text editors
      - Resource scheduling
      - Pathfinding algorithms
    answer: 1
    explanation: Undo mechanism in text editors is the correct answer to “Which of the following is an application of a stack”. This question is standard in competitive examination syllabi for Introduction To Data Structures.
    keyConcept: Introduction To Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 31
    question: What is the term for accessing elements of a data structure in a specific order?
    options:
      - Traversal
      - Insertion
      - Deletion
      - Searching
    answer: 0
    explanation: Traversal is the correct answer to “What is the term for accessing elements of a data structure in a specific order”. This question is standard in competitive examination syllabi for Introduction To Data Structures.
    keyConcept: Introduction To Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 32
    question: Which data structure is used for implementing recursion?
    options:
      - Array
      - Queue
      - Stack
      - Linked List
    answer: 2
    explanation: Stack is the correct answer to “Which data structure is used for implementing recursion”. This question is standard in competitive examination syllabi for Introduction To Data Structures.
    keyConcept: Introduction To Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 33
    question: Which of the following data structures is used in implementing LRU cache?
    options:
      - Stack
      - Linked List
      - Queue
      - Hash Table
    answer: 1
    explanation: Linked List is the correct answer to “Which of the following data structures is used in implementing LRU cache”. This question is standard in competitive examination syllabi for Introduction To Data Structures.
    keyConcept: Introduction To Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 34
    question: Which data structure is most suitable for implementing undo functionality?
    options:
      - Queue
      - Stack
      - Array
      - Hash Table
    answer: 1
    explanation: Stack is the correct answer to “Which data structure is most suitable for implementing undo functionality”. This question is standard in competitive examination syllabi for Introduction To Data Structures.
    keyConcept: Introduction To Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 35
    question: Which of the following is a self-adjusting data structure?
    options:
      - Stack
      - Queue
      - Linked List
      - Splay Tree
    answer: 3
    explanation: Splay Tree is the correct answer to “Which of the following is a self-adjusting data structure”. This question is standard in competitive examination syllabi for Introduction To Data Structures.
    keyConcept: Introduction To Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 36
    question: Which data structure is used in a breadth-first traversal of a graph?
    options:
      - Stack
      - Queue
      - Array
      - Linked List
    answer: 1
    explanation: Queue is the correct answer to “Which data structure is used in a breadth-first traversal of a graph”. This question is standard in competitive examination syllabi for Introduction To Data Structures.
    keyConcept: Introduction To Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 37
    question: Which of the following is not a characteristic of a linked list?
    options:
      - Dynamic size
      - Memory usage is more than arrays
      - Fast random access
      - Insertion and deletion are easier
    answer: 2
    explanation: Fast random access is the correct answer to “Which of the following is not a characteristic of a linked list”. This question is standard in competitive examination syllabi for Introduction To Data Structures.
    keyConcept: Introduction To Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 38
    question: What is the primary disadvantage of a linked list compared to an array?
    options:
      - Fixed size
      - Dynamic size
      - Slow access to elements by index
      - Simplified memory allocation
    answer: 2
    explanation: Slow access to elements by index is the correct answer to “What is the primary disadvantage of a linked list compared to an array”. This question is standard in competitive examination syllabi for Introduction To Data Structures.
    keyConcept: Introduction To Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 39
    question: Which data structure is used to implement a priority queue?
    options:
      - Stack
      - Queue
      - Heap
      - Linked List
    answer: 2
    explanation: Heap is the correct answer to “Which data structure is used to implement a priority queue”. This question is standard in competitive examination syllabi for Introduction To Data Structures.
    keyConcept: Introduction To Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 40
    question: Which operation is not performed on a queue?
    options:
      - Enqueue
      - Dequeue
      - Peek
      - Push
    answer: 3
    explanation: Push is the correct answer to “Which operation is not performed on a queue”. This question is standard in competitive examination syllabi for Introduction To Data Structures.
    keyConcept: Introduction To Data Structures
    testedIn:
      - PPSC
      - FPSC
---


