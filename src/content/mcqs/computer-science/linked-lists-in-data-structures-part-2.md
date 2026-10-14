---
title: Linked Lists In Data Structures — Part 2 MCQs with Explanations
description: Practice high-yield Computer Science & IT MCQs on Linked Lists In Data Structures — Part 2 with worked academic solutions for PPSC, FPSC, CSS, PMS, NTS.
subject: computer-science
subjectName: Computer Science & IT
topic: linked-lists-in-data-structures-part-2
topicName: Linked Lists In Data Structures — Part 2
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
    question: How do you efficiently find the kth to last element in a singly linked list?
    options:
      - Using a single pointer to traverse the list
      - Using two pointers (k steps apart)
      - Using a stack to store elements
      - Using a binary search
    answer: 1
    explanation: Using two pointers (k steps apart) is the correct answer to “How do you efficiently find the kth to last element in a singly linked list”. This question is standard in competitive examination syllabi for Linked Lists In Data Structures.
    keyConcept: Linked Lists In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 2
    question: Which of the following operations is most efficient in a singly linked list?
    options:
      - Deletion from the end
      - Accessing the middle element
      - Insertion at the beginning
      - Deletion from the beginning
    answer: 2
    explanation: Insertion at the beginning is the correct answer to “Which of the following operations is most efficient in a singly linked list”. This question is standard in competitive examination syllabi for Linked Lists In Data Structures.
    keyConcept: Linked Lists In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 3
    question: In a linked list, what is a dummy node typically used for?
    options:
      - To simplify insertion and deletion
      - To mark the end of the list
      - To store extra information
      - To create a cycle in the list
    answer: 0
    explanation: To simplify insertion and deletion is the correct answer to “In a linked list, what is a dummy node typically used for”. This question is standard in competitive examination syllabi for Linked Lists In Data Structures.
    keyConcept: Linked Lists In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 4
    question: In the above question would using arrays and swaping of elements in place of xor linked list would have been more efficient?
    options:
      - no not all
      - yes arrays would have been better than xor lists
      - both would be same in efficiency
      - can't say
    answer: 1
    explanation: yes arrays would have been better than xor lists is the correct answer to “In the above question would using arrays and swaping of elements in place of xor linked list would have been more efficient”. This question is standard in competitive examination syllabi for Linked Lists In Data Structures.
    keyConcept: Linked Lists In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: What are the disadvantages in implementing buddy system algorithm for free lists?
    options:
      - internal fragmentation
      - it takes so much space
      - we no more have the hole lists in order of memory address, so it is difficult to detect if 2 holes remain adjacent in memory and shall be merged into one hole
      - both a and c are correct
    answer: 3
    explanation: both a and c are correct is the correct answer to “What are the disadvantages in implementing buddy system algorithm for free lists”. This question is standard in competitive examination syllabi for Linked Lists In Data Structures.
    keyConcept: Linked Lists In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: The self organizing list improves . . . . . . . .
    options:
      - average access time
      - insertion
      - deletion
      - binary search
    answer: 0
    explanation: average access time is the correct answer to “The self organizing list improves . . . . . . . .”. This question is standard in competitive examination syllabi for Linked Lists In Data Structures.
    keyConcept: Linked Lists In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 7
    question: Which of the following is true about a triply linked list?
    options:
      - Dynamic in nature
      - Allows random access
      - Less memory wastage
      - Reverse traversing is difficult
    answer: 0
    explanation: Dynamic in nature is the correct answer to “Which of the following is true about a triply linked list”. This question is standard in competitive examination syllabi for Linked Lists In Data Structures.
    keyConcept: Linked Lists In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 8
    question: Consider the following pseudocode of insertion in XOR list and write the approximate code snippet of it. void xor-linked-list insert(struct node **head_ref, int value) { node *new_node = new (struct node); new_node->value = value; new_node->nodepointerxored = xor (*head_ref, NULL); if (*head_pointer == NULL) { printf("invalid"); } else { let b,c,d are nodes and a is to be inserted at beginning, a address field must contain NULL xor b and b address filed must be a xor c. } *head_pointer = new_node; }
    options:
      - node* next = XOR ((*head_ref)->npx, NULL); (*head_ref)->npx = XOR (new_node, next)
      - node* next = XOR ((*head_ref)->npx, NULL); (*head_ref) = XOR (new_node, next)
      - node* next = XOR ((*head_ref)->npx, NULL); (*head_ref)->npx->npx = XOR (new_node, next)
      - node* next = XOR ((*head_ref), NULL); (*head_ref)->npx = XOR (new_node, next)
    answer: 0
    explanation: node* next = XOR ((*head_ref)->npx, NULL); (*head_ref)->npx = XOR (new_node, next) is the correct answer to “Consider the following pseudocode of insertion in XOR list and write the approximate code snippet of it. void xor-linked-list insert(struct node **head_ref, int value) { node *new_node = new (struct node); new_node->value = value; new_node->nodepointerxored = xor (*head_ref, NULL); if (*head_pointer == NULL) { printf("invalid"); } else { let b,c,d are nodes and a is to be inserted at beginning, a address field must contain NULL xor b and b address filed must be a xor c. } *head_pointer = new_node; }”. This question is standard in competitive examination syllabi for Linked Lists In Data Structures.
    keyConcept: Linked Lists In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 9
    question: Which among the following is a typical declaration of an unrolled linked list in C?
    options:
      - "#define SIZE N struct node { int node_count; int arr[SIZE]; struct node *next; }"
      - "#define SIZE N struct node { int arr[SIZE]; struct node *prev; struct node *top; }"
      - "#define SIZE N struct node { int node_count; struct node *next; }"
      - "#define SIZE N struct node { int node_count; int arr[SIZE]; }"
    answer: 0
    explanation: "#define SIZE N struct node { int node_count; int arr[SIZE]; struct node *next; } is the correct answer to “Which among the following is a typical declaration of an unrolled linked list in C”. This question is standard in competitive examination syllabi for Linked Lists In Data Structures."
    keyConcept: Linked Lists In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 10
    question: Assume there is a free list which contains nodes and is filled with a value if it is already assigned and the value will be the size of requested block else will be 0. z = startpoint; while ((z < end) && \\ didn't reach end (*z <= len)) \\ too small to satisfy request { assign this block } The above code represents what?
    options:
      - code for first fit
      - code for best fit
      - code for worst fit
      - none of the mentioned
    answer: 0
    explanation: code for first fit is the correct answer to “Assume there is a free list which contains nodes and is filled with a value if it is already assigned and the value will be the size of requested block else will be 0. z = startpoint; while ((z < end) && \\ didn't reach end (*z <= len)) \\ too small to satisfy request { assign this block } The above code represents what”. This question is standard in competitive examination syllabi for Linked Lists In Data Structures.
    keyConcept: Linked Lists In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 11
    question: What does first and last nodes of a xor linked lists contain ? (let address of first and last be A and B)
    options:
      - NULL xor A and B xor NULL
      - NULL and NULL
      - A and B
      - NULL xor A and B
    answer: 0
    explanation: NULL xor A and B xor NULL is the correct answer to “What does first and last nodes of a xor linked lists contain ? (let address of first and last be A and B)”. This question is standard in competitive examination syllabi for Linked Lists In Data Structures.
    keyConcept: Linked Lists In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 12
    question: Which of the following data structure is preferred to have lesser search time when the list size is small?
    options:
      - search tree
      - sorted list
      - self organizing list
      - linked list
    answer: 2
    explanation: self organizing list is the correct answer to “Which of the following data structure is preferred to have lesser search time when the list size is small”. This question is standard in competitive examination syllabi for Linked Lists In Data Structures.
    keyConcept: Linked Lists In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 13
    question: What is xor linked list?
    options:
      - uses of bitwise XOR operation to decrease storage requirements for doubly linked lists
      - uses of bitwise XOR operation to decrease storage requirements for linked lists
      - uses of bitwise operations to decrease storage requirements for doubly linked lists
      - just another form of linked list
    answer: 0
    explanation: uses of bitwise XOR operation to decrease storage requirements for doubly linked lists is the correct answer to “What is xor linked list”. This question is standard in competitive examination syllabi for Linked Lists In Data Structures.
    keyConcept: Linked Lists In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: What are implicit and explicit implementations of freelists?
    options:
      - garbage collection and new or malloc operators respectively
      - new or malloc and garbage collection respectively
      - implicit implementation is not favored
      - explicit implementation is not favored
    answer: 0
    explanation: garbage collection and new or malloc operators respectively is the correct answer to “What are implicit and explicit implementations of freelists”. This question is standard in competitive examination syllabi for Linked Lists In Data Structures.
    keyConcept: Linked Lists In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 15
    question: Which among the following is the time complexity for inserting an element in an unrolled linked list?
    options:
      - O(1)
      - O(n)
      - O(log n)
      - O(n2)
    answer: 1
    explanation: O(n) is the correct answer to “Which among the following is the time complexity for inserting an element in an unrolled linked list”. This question is standard in competitive examination syllabi for Linked Lists In Data Structures.
    keyConcept: Linked Lists In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 16
    question: Which of the following method performs poorly when elements are accessed in sequential order?
    options:
      - count method
      - move to front method
      - transpose meth
      - ordering method
    answer: 1
    explanation: move to front method is the correct answer to “Which of the following method performs poorly when elements are accessed in sequential order”. This question is standard in competitive examination syllabi for Linked Lists In Data Structures.
    keyConcept: Linked Lists In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 17
    question: Skip lists are similar to which of the following datastructure?
    options:
      - stack
      - heap
      - binary search tree
      - balanced binary search tree
    answer: 3
    explanation: balanced binary search tree is the correct answer to “Skip lists are similar to which of the following datastructure”. This question is standard in competitive examination syllabi for Linked Lists In Data Structures.
    keyConcept: Linked Lists In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 18
    question: What technique is used in Transpose method?
    options:
      - searched node is swapped with its predecessor
      - node with highest access count is moved to head of the list
      - searched node is swapped with the head of list
      - searched nodes are rearranged based on their proximity to the head node
    answer: 0
    explanation: searched node is swapped with its predecessor is the correct answer to “What technique is used in Transpose method”. This question is standard in competitive examination syllabi for Linked Lists In Data Structures.
    keyConcept: Linked Lists In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 19
    question: What happens if a node cannot fit an element in an unrolled linked list?
    options:
      - The element is discarded
      - The elements are moved to the next node
      - The node is discarded
      - Error message is shown
    answer: 1
    explanation: The elements are moved to the next node is the correct answer to “What happens if a node cannot fit an element in an unrolled linked list”. This question is standard in competitive examination syllabi for Linked Lists In Data Structures.
    keyConcept: Linked Lists In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 20
    question: Unrolled linked-list requires more storage space for pointers compared to a singly linked list.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “Unrolled linked-list requires more storage space for pointers compared to a singly linked list.”. This question is standard in competitive examination syllabi for Linked Lists In Data Structures.
    keyConcept: Linked Lists In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 21
    question: What datastructures can be used in implementing a free list?
    options:
      - only linked list
      - linked list or sort trees
      - arrays
      - trees
    answer: 1
    explanation: linked list or sort trees is the correct answer to “What datastructures can be used in implementing a free list”. This question is standard in competitive examination syllabi for Linked Lists In Data Structures.
    keyConcept: Linked Lists In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 22
    question: Consider the 2-level skip list How to access 38?
    options:
      - travel 20-30-35-38
      - travel 20-30-40-38
      - travel 20-38
      - travel 20-40-38
    answer: 0
    explanation: travel 20-30-35-38 is the correct answer to “Consider the 2-level skip list How to access 38”. This question is standard in competitive examination syllabi for Linked Lists In Data Structures.
    keyConcept: Linked Lists In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 23
    question: To which datastructure are skip lists similar to in terms of time complexities in worst and best cases?
    options:
      - balanced binary search trees
      - binary search trees
      - binary trees
      - linked lists
    answer: 0
    explanation: balanced binary search trees is the correct answer to “To which datastructure are skip lists similar to in terms of time complexities in worst and best cases”. This question is standard in competitive examination syllabi for Linked Lists In Data Structures.
    keyConcept: Linked Lists In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 24
    question: The worst case running time of a linear search on the self organizing list is . . . . . . . .
    options:
      - O(1)
      - O(logn)
      - O(n)
      - O(n2)
    answer: 2
    explanation: O(n) is the correct answer to “The worst case running time of a linear search on the self organizing list is . . . . . . . .”. This question is standard in competitive examination syllabi for Linked Lists In Data Structures.
    keyConcept: Linked Lists In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 25
    question: Is a skip list like balanced tree?
    options:
      - "true"
      - "false"
    answer: 0
    explanation: true is the correct answer to “Is a skip list like balanced tree”. This question is standard in competitive examination syllabi for Linked Lists In Data Structures.
    keyConcept: Linked Lists In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 26
    question: For which of the following purpose a top pointer can be used?
    options:
      - Storing the address of the head pointer
      - Storing the address of the previous node
      - Storing the address of the next node
      - Storing equal values on the same level
    answer: 3
    explanation: Storing equal values on the same level is the correct answer to “For which of the following purpose a top pointer can be used”. This question is standard in competitive examination syllabi for Linked Lists In Data Structures.
    keyConcept: Linked Lists In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 27
    question: What's wrong with this code which returns xor of two nodes address? //struct is common userdefined datatype in c/c++ and class is it's alternative struct node* XOR (struct node *a, struct node *b) { //this logic is used to fill the nodes with address of a xor linked list return ((int) (a) ^ (int) (b)); }
    options:
      - nothing wrong. everything is fine
      - type casting at return is missing
      - parameters are wrong
      - total logic is wrong
    answer: 1
    explanation: type casting at return is missing is the correct answer to “What's wrong with this code which returns xor of two nodes address? //struct is common userdefined datatype in c/c++ and class is it's alternative struct node* XOR (struct node *a, struct node *b) { //this logic is used to fill the nodes with address of a xor linked list return ((int) (a) ^ (int) (b)); }”. This question is standard in competitive examination syllabi for Linked Lists In Data Structures.
    keyConcept: Linked Lists In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 28
    question: Suppose, in a triply linked list, the elements 2, 3, 3, 5, 5, 5 and 6 are inserted in the given sequence. To which of the following elements will the top pointer point, if the linked list is traversed starting from the head?
    options:
      - 2 3 top → 3 5 top → 5 5 top → 6
      - 2 top → 3 3 top → 5 5 5 top → 6
      - 2 3 top → 3 5 top → 5 top → 5 6
      - 2 top → 3 top → 3 top → 5 5 5 6
    answer: 2
    explanation: 2 3 top → 3 5 top → 5 top → 5 6 is the correct answer to “Suppose, in a triply linked list, the elements 2, 3, 3, 5, 5, 5 and 6 are inserted in the given sequence. To which of the following elements will the top pointer point, if the linked list is traversed starting from the head”. This question is standard in competitive examination syllabi for Linked Lists In Data Structures.
    keyConcept: Linked Lists In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 29
    question: The algorithm given is for deleting an element in an unrolled linked list. What should be the correct statement for the blank given below? Find an element in node a a.data.delete(element) a.elementNum-- while a.elementNum < a.data.size / 2 put element from a.next.data in a.data a.next.elementNum-- a.elementNum++ if a.next.elementNum < a.next.data.size / 2 _______________________ _______________________
    options:
      - merge nodes a and a.next delete node a.next
      - delete node a merge nodes a.prev and a.next
      - a.elementNum-- a.elementNum++
      - a.next.elementNum-- a.next.elementNum++
    answer: 0
    explanation: merge nodes a and a.next delete node a.next is the correct answer to “The algorithm given is for deleting an element in an unrolled linked list. What should be the correct statement for the blank given below? Find an element in node a a.data.delete(element) a.elementNum-- while a.elementNum < a.data.size / 2 put element from a.next.data in a.data a.next.elementNum-- a.elementNum++ if a.next.elementNum < a.next.data.size / 2 _______________________ _______________________”. This question is standard in competitive examination syllabi for Linked Lists In Data Structures.
    keyConcept: Linked Lists In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 30
    question: The nodes in a skip list may have many forward references. their number is determined
    options:
      - probabilistically
      - randomly
      - sequentially
      - orthogonally
    answer: 0
    explanation: probabilistically is the correct answer to “The nodes in a skip list may have many forward references. their number is determined”. This question is standard in competitive examination syllabi for Linked Lists In Data Structures.
    keyConcept: Linked Lists In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 31
    question: What is a skip list?
    options:
      - a linkedlist with size value in nodes
      - a linkedlist that allows faster search within an ordered sequence
      - a linkedlist that allows slower search within an ordered sequence
      - a tree which is in the form of linked list
    answer: 1
    explanation: a linkedlist that allows faster search within an ordered sequence is the correct answer to “What is a skip list”. This question is standard in competitive examination syllabi for Linked Lists In Data Structures.
    keyConcept: Linked Lists In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 32
    question: Which of the following is a drawback of an unrolled linked list?
    options:
      - Small memory overhead
      - Cache management
      - High overhead per node
      - Slow insertion and deletion
    answer: 2
    explanation: High overhead per node is the correct answer to “Which of the following is a drawback of an unrolled linked list”. This question is standard in competitive examination syllabi for Linked Lists In Data Structures.
    keyConcept: Linked Lists In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 33
    question: Which of the following is not the properties of XOR lists?
    options:
      - X⊕X = 0
      - X⊕0 = X
      - (X⊕Y)⊕Z = X⊕(Y⊕Z)
      - X⊕0 = 1
    answer: 3
    explanation: X⊕0 = 1 is the correct answer to “Which of the following is not the properties of XOR lists”. This question is standard in competitive examination syllabi for Linked Lists In Data Structures.
    keyConcept: Linked Lists In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 34
    question: Which of the following is true about the Move-To-Front Method for rearranging nodes?
    options:
      - node with highest access count is moved to head of the list
      - requires extra storage
      - may over-reward infrequently accessed nodes
      - requires a counter for each node
    answer: 2
    explanation: may over-reward infrequently accessed nodes is the correct answer to “Which of the following is true about the Move-To-Front Method for rearranging nodes”. This question is standard in competitive examination syllabi for Linked Lists In Data Structures.
    keyConcept: Linked Lists In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 35
    question: Are the below statements true about skiplists? In a sorted set of elements skip lists can implement the below operations i.given a element find closest element to the given value in the sorted set in O(logn) ii.find the number of elements in the set whose values fall a given range in O(logn)
    options:
      - "true"
      - "false"
    answer: 0
    explanation: true is the correct answer to “Are the below statements true about skiplists? In a sorted set of elements skip lists can implement the below operations i.given a element find closest element to the given value in the sorted set in O(logn) ii.find the number of elements in the set whose values fall a given range in O(logn)”. This question is standard in competitive examination syllabi for Linked Lists In Data Structures.
    keyConcept: Linked Lists In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 36
    question: Where does a triply linked list contains an extra pointer in comparison to a doubly linked list?
    options:
      - Top of the node
      - Bottom of the node
      - Before the node
      - After the node
    answer: 0
    explanation: Top of the node is the correct answer to “Where does a triply linked list contains an extra pointer in comparison to a doubly linked list”. This question is standard in competitive examination syllabi for Linked Lists In Data Structures.
    keyConcept: Linked Lists In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 37
    question: How are free blocks linked together mostly and in what addressing order?
    options:
      - circular linked list and increasing addressing order
      - linked list and decreasing addressing order
      - linked list and in no addressing order
      - none of the mentioned
    answer: 0
    explanation: circular linked list and increasing addressing order is the correct answer to “How are free blocks linked together mostly and in what addressing order”. This question is standard in competitive examination syllabi for Linked Lists In Data Structures.
    keyConcept: Linked Lists In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 38
    question: Symbol tables during compilation of program is efficiently implemented using . . . . . . . .
    options:
      - a singly linked list
      - a doubly linked list
      - a self organizing list
      - an array
    answer: 2
    explanation: a self organizing list is the correct answer to “Symbol tables during compilation of program is efficiently implemented using . . . . . . . .”. This question is standard in competitive examination syllabi for Linked Lists In Data Structures.
    keyConcept: Linked Lists In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 39
    question: Which of the following statements are true? i) practical application of XOR linked lists are in environments with limited space requirements, such as embedded devices. ii)xor lists are not suitable because most garbage collectors will fail to work properly with classes or structures that don't contain literal pointers iii)in order to calculate the address of the next node you need to remember the address of the previous node iv)xor lists are much efficient than single, doubly linked lists and arrays
    options:
      - i, ii, iii, iv
      - i, ii, iii
      - i, ii
      - i
    answer: 1
    explanation: i, ii, iii is the correct answer to “Which of the following statements are true? i) practical application of XOR linked lists are in environments with limited space requirements, such as embedded devices. ii)xor lists are not suitable because most garbage collectors will fail to work properly with classes or structures that don't contain literal pointers iii)in order to calculate the address of the next node you need to remember the address of the previous node iv)xor lists are much efficient than single, doubly linked lists and arrays”. This question is standard in competitive examination syllabi for Linked Lists In Data Structures.
    keyConcept: Linked Lists In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 40
    question: Which of the following is a typical declaration of a triply linked list in C?
    options:
      - struct node { int data; struct node *previous; struct node *top; }
      - struct node { int data; struct node *next; struct node *top; }
      - struct node { int data; struct node *next; struct node *previous; struct node *top; }
      - struct node { int data; struct node *next; struct node *previous; }
    answer: 2
    explanation: struct node { int data; struct node *next; struct node *previous; struct node *top; } is the correct answer to “Which of the following is a typical declaration of a triply linked list in C”. This question is standard in competitive examination syllabi for Linked Lists In Data Structures.
    keyConcept: Linked Lists In Data Structures
    testedIn:
      - PPSC
      - FPSC
---


