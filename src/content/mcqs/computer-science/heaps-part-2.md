---
title: Heaps — Part 2 MCQs with Explanations
description: Practice high-yield Computer Science & IT MCQs on Heaps — Part 2 with worked academic solutions for PPSC, FPSC, CSS, PMS, NTS.
subject: computer-science
subjectName: Computer Science & IT
topic: heaps-part-2
topicName: Heaps — Part 2
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
    question: What operation is performed to convert a binary heap into a sorted array?
    options:
      - Heapsort
      - Merge sort
      - Quick sort
      - Insertion sort
    answer: 0
    explanation: Heapsort is the correct answer to “What operation is performed to convert a binary heap into a sorted array”. This question is standard in competitive examination syllabi for Heaps.
    keyConcept: Heaps
    testedIn:
      - PPSC
      - FPSC
  - id: 2
    question: In which situation would you prefer using a Fibonacci heap over a binary heap?
    options:
      - When frequent decrease-key operations are required.
      - When constructing a priority queue with constant time insertions.
      - When needing to maintain a sorted order.
      - When requiring simple implementation.
    answer: 0
    explanation: When frequent decrease-key operations are required. is the correct answer to “In which situation would you prefer using a Fibonacci heap over a binary heap”. This question is standard in competitive examination syllabi for Heaps.
    keyConcept: Heaps
    testedIn:
      - PPSC
      - FPSC
  - id: 3
    question: Which algorithm uses a binary heap to improve its performance?
    options:
      - Dijkstra's algorithm for shortest paths.
      - Kruskal's algorithm for minimum spanning tree.
      - Prim's algorithm for minimum spanning tree.
      - Merge sort algorithm.
    answer: 2
    explanation: Prim's algorithm for minimum spanning tree. is the correct answer to “Which algorithm uses a binary heap to improve its performance”. This question is standard in competitive examination syllabi for Heaps.
    keyConcept: Heaps
    testedIn:
      - PPSC
      - FPSC
  - id: 4
    question: What is the maximum number of children a node can have in a binary heap?
    options:
      - "2"
      - "3"
      - "4"
      - No fixed limit
    answer: 0
    explanation: 2 is the correct answer to “What is the maximum number of children a node can have in a binary heap”. This question is standard in competitive examination syllabi for Heaps.
    keyConcept: Heaps
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: How do you ensure that a binary heap remains a valid heap after multiple insertions?
    options:
      - By performing a heapify operation after each insertion.
      - By performing a sort operation.
      - By rebalancing the tree manually.
      - By ensuring nodes are inserted in sorted order.
    answer: 0
    explanation: By performing a heapify operation after each insertion. is the correct answer to “How do you ensure that a binary heap remains a valid heap after multiple insertions”. This question is standard in competitive examination syllabi for Heaps.
    keyConcept: Heaps
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: Multiplication and division to find children and parents cannot be implemented in a d-heap.
    options:
      - "true"
      - "false"
    answer: 1
    explanation: false is the correct answer to “Multiplication and division to find children and parents cannot be implemented in a d-heap.”. This question is standard in competitive examination syllabi for Heaps.
    keyConcept: Heaps
    testedIn:
      - PPSC
      - FPSC
  - id: 7
    question: A leftist heap is also said to be a binary heap.
    options:
      - "true"
      - "false"
    answer: 0
    explanation: true is the correct answer to “A leftist heap is also said to be a binary heap.”. This question is standard in competitive examination syllabi for Heaps.
    keyConcept: Heaps
    testedIn:
      - PPSC
      - FPSC
  - id: 8
    question: Who invented d-ary heap?
    options:
      - Carl Rick
      - Alan Turing
      - Donald Johnson
      - Euclid
    answer: 2
    explanation: Donald Johnson is the correct answer to “Who invented d-ary heap”. This question is standard in competitive examination syllabi for Heaps.
    keyConcept: Heaps
    testedIn:
      - PPSC
      - FPSC
  - id: 9
    question: What is the child of smallest element of the given minimum ternary heap?
    options:
      - "1"
      - "10"
      - "22"
      - "24"
    answer: 1
    explanation: 10 is the correct answer to “What is the child of smallest element of the given minimum ternary heap”. This question is standard in competitive examination syllabi for Heaps.
    keyConcept: Heaps
    testedIn:
      - PPSC
      - FPSC
  - id: 10
    question: Heap can be used as . . . . . . . .
    options:
      - Priority queue
      - Stack
      - A decreasing order array
      - Normal Array
    answer: 0
    explanation: Priority queue is the correct answer to “Heap can be used as . . . . . . . .”. This question is standard in competitive examination syllabi for Heaps.
    keyConcept: Heaps
    testedIn:
      - PPSC
      - FPSC
  - id: 11
    question: "The procedure given below is used to maintain min-order in the min heap. Find out the missing statements, represented as X. procedure TrickleDownMin(i) if A[i] has children then m := index of smallest of the children or grandchildren (if any) of A[i] if A[m] is a grandchild of A[i] then if A[m] < A[i] then swap A[i] and A[m] X: _______________________ ____________________ endif TrickleDownMin(m) endif else //{A[m] is a child of A[i]} if A[m] << A[i] then swap A[i] and A[m] endif endif"
    options:
      - if A[m] > A[parent(m)] then swap A[m] and A[parent(m)]
      - if A[m] > A[parent(m)] then swap A[i] and A[parent(m)]
      - if A[m] < A[parent(m)] then swap A[m] and A[parent(m)]
    answer: 0
    explanation: "if A[m] > A[parent(m)] then swap A[m] and A[parent(m)] is the correct answer to “The procedure given below is used to maintain min-order in the min heap. Find out the missing statements, represented as X. procedure TrickleDownMin(i) if A[i] has children then m := index of smallest of the children or grandchildren (if any) of A[i] if A[m] is a grandchild of A[i] then if A[m] < A[i] then swap A[i] and A[m] X: _______________________ ____________________ endif TrickleDownMin(m) endif else //{A[m] is a child of A[i]} if A[m] << A[i] then swap A[i] and A[m] endif endif”. This question is standard in competitive examination syllabi for Heaps."
    keyConcept: Heaps
    testedIn:
      - PPSC
      - FPSC
  - id: 12
    question: Why is this heap named leftist heap?
    options:
      - only left subtrees exist
      - the tree is biased to get deep down the left
      - it is balanced
      - right trees are unbalanced
    answer: 1
    explanation: the tree is biased to get deep down the left is the correct answer to “Why is this heap named leftist heap”. This question is standard in competitive examination syllabi for Heaps.
    keyConcept: Heaps
    testedIn:
      - PPSC
      - FPSC
  - id: 13
    question: What is the space complexity of searching in a heap?
    options:
      - O(logn)
      - O(n)
      - O(1)
      - O(nlogn)
    answer: 1
    explanation: O(n) is the correct answer to “What is the space complexity of searching in a heap”. This question is standard in competitive examination syllabi for Heaps.
    keyConcept: Heaps
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: Which of the following operations does not destroy the leftist heap property?
    options:
      - insert
      - merge
      - delete
      - swap
    answer: 2
    explanation: delete is the correct answer to “Which of the following operations does not destroy the leftist heap property”. This question is standard in competitive examination syllabi for Heaps.
    keyConcept: Heaps
    testedIn:
      - PPSC
      - FPSC
  - id: 15
    question: The main distinguishable characterstic of a binomial heap from a binary heap is that
    options:
      - it allows union operations very efficiently
      - it does not allow union operations that could easily be implemented in binary heap
      - the heap structure is not similar to complete binary tree
      - the location of child node is not fixed i.e child nodes could be at level (h-2) or (h-3), where h is height of heap and h>4
    answer: 0
    explanation: it allows union operations very efficiently is the correct answer to “The main distinguishable characterstic of a binomial heap from a binary heap is that”. This question is standard in competitive examination syllabi for Heaps.
    keyConcept: Heaps
    testedIn:
      - PPSC
      - FPSC
  - id: 16
    question: How many basic operations can be performed in a d-heap?
    options:
      - "1"
      - "2"
      - "3"
      - "4"
    answer: 1
    explanation: 2 is the correct answer to “How many basic operations can be performed in a d-heap”. This question is standard in competitive examination syllabi for Heaps.
    keyConcept: Heaps
    testedIn:
      - PPSC
      - FPSC
  - id: 17
    question: What is the time complexity for deleting root key in a ternary heap of n elements?
    options:
      - O (log n/ log 3)
      - O (3log n/ log 3)
      - O (n)
      - O (1)
    answer: 1
    explanation: O (3log n/ log 3) is the correct answer to “What is the time complexity for deleting root key in a ternary heap of n elements”. This question is standard in competitive examination syllabi for Heaps.
    keyConcept: Heaps
    testedIn:
      - PPSC
      - FPSC
  - id: 18
    question: What is the reason for the efficiency of a pairing heap?
    options:
      - simplicity
      - time-efficient
      - space-efficient
      - advanced
    answer: 0
    explanation: simplicity is the correct answer to “What is the reason for the efficiency of a pairing heap”. This question is standard in competitive examination syllabi for Heaps.
    keyConcept: Heaps
    testedIn:
      - PPSC
      - FPSC
  - id: 19
    question: If there are c children of the root, how many calls to the merge procedure is required to reassemble the heap?
    options:
      - c
      - c+1
      - c-1
      - "1"
    answer: 2
    explanation: c-1 is the correct answer to “If there are c children of the root, how many calls to the merge procedure is required to reassemble the heap”. This question is standard in competitive examination syllabi for Heaps.
    keyConcept: Heaps
    testedIn:
      - PPSC
      - FPSC
  - id: 20
    question: What is order of resultant heap after merging two tree of order k?
    options:
      - 2*k
      - k+1
      - k*k
      - k+logk
    answer: 1
    explanation: k+1 is the correct answer to “What is order of resultant heap after merging two tree of order k”. This question is standard in competitive examination syllabi for Heaps.
    keyConcept: Heaps
    testedIn:
      - PPSC
      - FPSC
  - id: 21
    question: Min heap can be used to implement selection sort.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “Min heap can be used to implement selection sort.”. This question is standard in competitive examination syllabi for Heaps.
    keyConcept: Heaps
    testedIn:
      - PPSC
      - FPSC
  - id: 22
    question: What would be the result if the left subtree of the root has a null path length of 1 and the right subtree has a null path length of 2?
    options:
      - merge occurs without violation
      - violation at left subtree
      - violation at right subtree
      - violation at the root
    answer: 3
    explanation: violation at the root is the correct answer to “What would be the result if the left subtree of the root has a null path length of 1 and the right subtree has a null path length of 2”. This question is standard in competitive examination syllabi for Heaps.
    keyConcept: Heaps
    testedIn:
      - PPSC
      - FPSC
  - id: 23
    question: What will be the order of new heap created after union of heap H1 and H2 when created by the following code.Initially both are of the order n. FIB_UNION(H1,H2) { H =MAKE_HEAP() min[H]= min[H1] concatenate the root list of H2 with the root list of H if (min[H1] = NIL) or (min[H2]!= NIL and min[H2] < min[H1]) then min[H] = min[H2] n[H]= n[H1] + n[H2] free the objects H1 and H2 return H }
    options:
      - n+1
      - n+n/2
      - nlogn
      - 2*n
    answer: 0
    explanation: n+1 is the correct answer to “What will be the order of new heap created after union of heap H1 and H2 when created by the following code.Initially both are of the order n. FIB_UNION(H1,H2) { H =MAKE_HEAP() min[H]= min[H1] concatenate the root list of H2 with the root list of H if (min[H1] = NIL) or (min[H2]!= NIL and min[H2] < min[H1]) then min[H] = min[H2] n[H]= n[H1] + n[H2] free the objects H1 and H2 return H }”. This question is standard in competitive examination syllabi for Heaps.
    keyConcept: Heaps
    testedIn:
      - PPSC
      - FPSC
  - id: 24
    question: What is the complexity of adding an element to the heap.
    options:
      - O(log n)
      - O(h)
      - O(log n) & O(h)
      - O(n)
    answer: 2
    explanation: O(log n) & O(h) is the correct answer to “What is the complexity of adding an element to the heap.”. This question is standard in competitive examination syllabi for Heaps.
    keyConcept: Heaps
    testedIn:
      - PPSC
      - FPSC
  - id: 25
    question: Is decrease priority operation performed more quickly in a ternary heap with respect to the binary heap.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “Is decrease priority operation performed more quickly in a ternary heap with respect to the binary heap.”. This question is standard in competitive examination syllabi for Heaps.
    keyConcept: Heaps
    testedIn:
      - PPSC
      - FPSC
  - id: 26
    question: Do ternary heap have better memory cache behavior than binary heap.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “Do ternary heap have better memory cache behavior than binary heap.”. This question is standard in competitive examination syllabi for Heaps.
    keyConcept: Heaps
    testedIn:
      - PPSC
      - FPSC
  - id: 27
    question: d-heap is similar to that of a?
    options:
      - binary heap
      - fibonacci heap
      - leftist heap
      - treap
    answer: 0
    explanation: binary heap is the correct answer to “d-heap is similar to that of a”. This question is standard in competitive examination syllabi for Heaps.
    keyConcept: Heaps
    testedIn:
      - PPSC
      - FPSC
  - id: 28
    question: What is the fundamental operation on leftist heap?
    options:
      - insertion
      - merging
      - deletion
      - swapping
    answer: 1
    explanation: merging is the correct answer to “What is the fundamental operation on leftist heap”. This question is standard in competitive examination syllabi for Heaps.
    keyConcept: Heaps
    testedIn:
      - PPSC
      - FPSC
  - id: 29
    question: What is the smallest element of the given minimum ternary heap?
    options:
      - "1"
      - "10"
      - "18"
      - "20"
    answer: 0
    explanation: 1 is the correct answer to “What is the smallest element of the given minimum ternary heap”. This question is standard in competitive examination syllabi for Heaps.
    keyConcept: Heaps
    testedIn:
      - PPSC
      - FPSC
  - id: 30
    question: State the complexity of algorithm given below. int function(vector<int> arr) int len=arr.length(); if(len==0) return; temp=arr[len-1]; arr.pop_back(); return temp;
    options:
      - o(n)
      - O(logn)
      - O(1)
      - O(n logn)
    answer: 2
    explanation: O(1) is the correct answer to “State the complexity of algorithm given below. int function(vector<int> arr) int len=arr.length(); if(len==0) return; temp=arr[len-1]; arr.pop_back(); return temp;”. This question is standard in competitive examination syllabi for Heaps.
    keyConcept: Heaps
    testedIn:
      - PPSC
      - FPSC
  - id: 31
    question: What is the process of building a ternary heap called?
    options:
      - Heapify
      - Hashing
      - Linking
      - Merging
    answer: 0
    explanation: Heapify is the correct answer to “What is the process of building a ternary heap called”. This question is standard in competitive examination syllabi for Heaps.
    keyConcept: Heaps
    testedIn:
      - PPSC
      - FPSC
  - id: 32
    question: Which operation is not efficiently performed in a d-heap?
    options:
      - insert
      - delete
      - find
      - merge
    answer: 3
    explanation: merge is the correct answer to “Which operation is not efficiently performed in a d-heap”. This question is standard in competitive examination syllabi for Heaps.
    keyConcept: Heaps
    testedIn:
      - PPSC
      - FPSC
  - id: 33
    question: In a binary min heap containing n elements, the largest element can be found in . . . . . . . . time.
    options:
      - O(n)
      - O(nlogn)
      - O(logn)
      - O(1)
    answer: 0
    explanation: O(n) is the correct answer to “In a binary min heap containing n elements, the largest element can be found in . . . . . . . . time.”. This question is standard in competitive examination syllabi for Heaps.
    keyConcept: Heaps
    testedIn:
      - PPSC
      - FPSC
  - id: 34
    question: What is the worst case time in searching minimum value in weak -heap?
    options:
      - O(log n)
      - O(n)
      - O(n logn)
      - O(1)
    answer: 3
    explanation: O(1) is the correct answer to “What is the worst case time in searching minimum value in weak -heap”. This question is standard in competitive examination syllabi for Heaps.
    keyConcept: Heaps
    testedIn:
      - PPSC
      - FPSC
  - id: 35
    question: Pairing heaps time complexity was inspired by that of?
    options:
      - splay tree
      - treap
      - red-black tree
      - avl tree
    answer: 0
    explanation: splay tree is the correct answer to “Pairing heaps time complexity was inspired by that of”. This question is standard in competitive examination syllabi for Heaps.
    keyConcept: Heaps
    testedIn:
      - PPSC
      - FPSC
  - id: 36
    question: What is the time complexity for inserting a new item in a ternary heap of n elements?
    options:
      - O (log n/ log 3)
      - O (n!)
      - O (n)
      - O (1)
    answer: 0
    explanation: O (log n/ log 3) is the correct answer to “What is the time complexity for inserting a new item in a ternary heap of n elements”. This question is standard in competitive examination syllabi for Heaps.
    keyConcept: Heaps
    testedIn:
      - PPSC
      - FPSC
  - id: 37
    question: What will be the position of 5, when a max heap is constructed on the input elements 5, 70, 45, 7, 12, 15, 13, 65, 30, 25?
    options:
      - 5 will be at root
      - 5 will be at last level
      - 5 will be at second level
      - 5 can be anywhere in heap
    answer: 1
    explanation: 5 will be at last level is the correct answer to “What will be the position of 5, when a max heap is constructed on the input elements 5, 70, 45, 7, 12, 15, 13, 65, 30, 25”. This question is standard in competitive examination syllabi for Heaps.
    keyConcept: Heaps
    testedIn:
      - PPSC
      - FPSC
  - id: 38
    question: What are the siblings of smallest element of the given maximum ternary heap?
    options:
      - "31"
      - "12"
      - "18"
      - "22"
    answer: 2
    explanation: 18 is the correct answer to “What are the siblings of smallest element of the given maximum ternary heap”. This question is standard in competitive examination syllabi for Heaps.
    keyConcept: Heaps
    testedIn:
      - PPSC
      - FPSC
  - id: 39
    question: What is the time complexity for decreasing priority of key in a minimum ternary heap of n elements?
    options:
      - O (log n/ log 3)
      - O (n!)
      - O (n)
      - O (1)
    answer: 0
    explanation: O (log n/ log 3) is the correct answer to “What is the time complexity for decreasing priority of key in a minimum ternary heap of n elements”. This question is standard in competitive examination syllabi for Heaps.
    keyConcept: Heaps
    testedIn:
      - PPSC
      - FPSC
  - id: 40
    question: Choose the correct properties of weak-heap.
    options:
      - Every node has value greater than the value of child node
      - Every right child of node has greater value than parent node
      - Every left child of node has greater value than parent node
      - Every left and right child of node has same value as parent node
    answer: 1
    explanation: Every right child of node has greater value than parent node is the correct answer to “Choose the correct properties of weak-heap.”. This question is standard in competitive examination syllabi for Heaps.
    keyConcept: Heaps
    testedIn:
      - PPSC
      - FPSC
---


