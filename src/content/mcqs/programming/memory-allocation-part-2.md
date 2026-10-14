---
title: Memory Allocation — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Memory Allocation — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: memory-allocation-part-2
topicName: Memory Allocation — Part 2
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
    question: Which of the following functions allocates multiple blocks of memory, each block of the same size?
    options:
      - malloc()
      - realloc()
      - calloc()
      - free()
    answer: 2
    explanation: calloc() is the correct answer to “Which of the following functions allocates multiple blocks of memory, each block of the same size”. This question is standard in competitive examination syllabi for Memory Allocation.
    keyConcept: Memory Allocation
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: A condition where in memory is reserved dynamically but not accessible to any of the programs is called . . . . . . . .
    options:
      - Memory leak
      - Dangling pointer
      - Frozen memory
      - Pointer leak
    answer: 0
    explanation: Memory leak is the correct answer to “A condition where in memory is reserved dynamically but not accessible to any of the programs is called . . . . . . . .”. This question is standard in competitive examination syllabi for Memory Allocation.
    keyConcept: Memory Allocation
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Which of the following header files must necessarily be included to use dynamic memory allocation functions?
    options:
      - stdlib.h
      - stdio.h
      - memory.h
      - dos.h
    answer: 0
    explanation: stdlib.h is the correct answer to “Which of the following header files must necessarily be included to use dynamic memory allocation functions”. This question is standard in competitive examination syllabi for Memory Allocation.
    keyConcept: Memory Allocation
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: "What will be the error (if any) in the following C code? #include<stdio.h> #include<stdlib.h> #include<string.h> int main() { char *p; *p = (char)calloc(10); strcpy(p, \"HELLO\"); printf(\"%s\", p); free(p); return 0; }"
    options:
      - No error
      - "Error in the statement: strcpy(p,\"HELLO\")"
      - "Error in the statement: *p=(char)calloc(10)"
      - "Error in the statement: free(p)"
    answer: 2
    explanation: "Error in the statement: *p=(char)calloc(10) is the correct answer to “What will be the error (if any) in the following C code? #include<stdio.h> #include<stdlib.h> #include<string.h> int main() { char *p; *p = (char)calloc(10); strcpy(p, \"HELLO\"); printf(\"%s\", p); free(p); return 0; }”. This question is standard in competitive examination syllabi for Memory Allocation."
    keyConcept: Memory Allocation
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: "What will happens if the statement free(a) is removed in the following C code? #include<stdio.h> #include<stdlib.h> main() { int *a; a=(int*)malloc(sizeof(int)); *a=100; printf(\"*a%d\",*a); free(a); a=(int*)malloc(sizeof(int)); *a=200; printf(\"a%p\",a); *a=200; printf(\"a%d\",*a); }"
    options:
      - Error
      - Memory leak
      - Dangling pointer arises
      - 200 is printed as output
    answer: 1
    explanation: "Memory leak is the correct answer to “What will happens if the statement free(a) is removed in the following C code? #include<stdio.h> #include<stdlib.h> main() { int *a; a=(int*)malloc(sizeof(int)); *a=100; printf(\"*a%d\",*a); free(a); a=(int*)malloc(sizeof(int)); *a=200; printf(\"a%p\",a); *a=200; printf(\"a%d\",*a); }”. This question is standard in competitive examination syllabi for Memory Allocation."
    keyConcept: Memory Allocation
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: In the function realloc(), if the new size of the memory block is larger than the old size, then the added memory . . . . . . . .
    options:
      - is initialized to junk values
      - is initialized to zero
      - results in an error
      - is not initialized
    answer: 3
    explanation: is not initialized is the correct answer to “In the function realloc(), if the new size of the memory block is larger than the old size, then the added memory . . . . . . . .”. This question is standard in competitive examination syllabi for Memory Allocation.
    keyConcept: Memory Allocation
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: "What will be the output of the following C code if it is executed on a 32 bit processor? #include<stdio.h> #include<stdlib.h> int main() { int *p; p = (int *)malloc(20); printf(\"%d\\n\", sizeof(p)); free(p); return 0; }"
    options:
      - "2"
      - "4"
      - "8"
      - Junk value
    answer: 1
    explanation: "4 is the correct answer to “What will be the output of the following C code if it is executed on a 32 bit processor? #include<stdio.h> #include<stdlib.h> int main() { int *p; p = (int *)malloc(20); printf(\"%d\\n\", sizeof(p)); free(p); return 0; }”. This question is standard in competitive examination syllabi for Memory Allocation."
    keyConcept: Memory Allocation
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: Garbage collector frees the programmer from worrying about . . . . . . . .
    options:
      - Dangling pointers
      - Creating new objects
      - Memory leak
      - Segmentation errors
    answer: 2
    explanation: Memory leak is the correct answer to “Garbage collector frees the programmer from worrying about . . . . . . . .”. This question is standard in competitive examination syllabi for Memory Allocation.
    keyConcept: Memory Allocation
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: Suppose we have a one dimensional array, named 'x', which contains 10 integers. Which of the following is the correct way to allocate memory dynamically to the array 'x' using malloc()?
    options:
      - x=(int*)malloc(10)
      - x=(int*)malloc(10,sizeof(int))
      - x=malloc(int 10,sizeof(int))
      - x=(int*)malloc(10*sizeof(int))
    answer: 3
    explanation: x=(int*)malloc(10*sizeof(int)) is the correct answer to “Suppose we have a one dimensional array, named 'x', which contains 10 integers. Which of the following is the correct way to allocate memory dynamically to the array 'x' using malloc()”. This question is standard in competitive examination syllabi for Memory Allocation.
    keyConcept: Memory Allocation
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: Queue data structure works on the principle of . . . . . . . .
    options:
      - Last In First Out (LIF0)
      - First In Last Out (FILO)
      - First In First Out (FIFO)
      - Last In Last Out (LILO)
    answer: 2
    explanation: First In First Out (FIFO) is the correct answer to “Queue data structure works on the principle of . . . . . . . .”. This question is standard in competitive examination syllabi for Memory Allocation.
    keyConcept: Memory Allocation
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: Which of the following is an example of static memory allocation?
    options:
      - Linked list
      - Stack
      - Queue
      - Array
    answer: 3
    explanation: Array is the correct answer to “Which of the following is an example of static memory allocation”. This question is standard in competitive examination syllabi for Memory Allocation.
    keyConcept: Memory Allocation
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: "What will be the output of the following C code? (Given that the size of array is 4 and new size of array is 5) #include<stdio.h> #include<stdlib.h> main() { int *p,i,a,b; printf(\"Enter size of array\"); scanf(\"%d\",&a); p=(int*)malloc(a*sizeof(int)); for(i=0;i<a;i++) printf(\"%d\\n\",i); printf(\"Enter new size of array\"); scanf(\"%d\",&b); realloc(p,b); for(i=0;i<b;i++) printf(\"%d\\n\",i); free(p); }"
    options:
      - 1234 12345
      - Error
      - 0123 01234
      - 0123 12345
    answer: 2
    explanation: "0123 01234 is the correct answer to “What will be the output of the following C code? (Given that the size of array is 4 and new size of array is 5) #include<stdio.h> #include<stdlib.h> main() { int *p,i,a,b; printf(\"Enter size of array\"); scanf(\"%d\",&a); p=(int*)malloc(a*sizeof(int)); for(i=0;i<a;i++) printf(\"%d\\n\",i); printf(\"Enter new size of array\"); scanf(\"%d\",&b); realloc(p,b); for(i=0;i<b;i++) printf(\"%d\\n\",i); free(p); }”. This question is standard in competitive examination syllabi for Memory Allocation."
    keyConcept: Memory Allocation
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: The type of linked list in which the node does not contain any pointer or reference to the previous node is . . . . . . . .
    options:
      - Circularly singly linked list
      - Singly linked list
      - Circular doubly linked list
      - Doubly linked list
    answer: 1
    explanation: Singly linked list is the correct answer to “The type of linked list in which the node does not contain any pointer or reference to the previous node is . . . . . . . .”. This question is standard in competitive examination syllabi for Memory Allocation.
    keyConcept: Memory Allocation
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: In the function malloc(), each byte of allocated space is initialized to zero.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “In the function malloc(), each byte of allocated space is initialized to zero.”. This question is standard in competitive examination syllabi for Memory Allocation.
    keyConcept: Memory Allocation
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: The number of arguments taken as input which allocating memory dynamically using malloc() is . . . . . . . .
    options:
      - "0"
      - "1"
      - "2"
      - "3"
    answer: 1
    explanation: 1 is the correct answer to “The number of arguments taken as input which allocating memory dynamically using malloc() is . . . . . . . .”. This question is standard in competitive examination syllabi for Memory Allocation.
    keyConcept: Memory Allocation
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: Choose the statement which is incorrect with respect to dynamic memory allocation.
    options:
      - Memory is allocated in a less structured area of memory, known as heap
      - Used for unpredictable memory requirements
      - Execution of the program is faster than that of static memory allocation
      - Allocated memory can be changed during the run time of the program based on the requirement of the program
    answer: 2
    explanation: Execution of the program is faster than that of static memory allocation is the correct answer to “Choose the statement which is incorrect with respect to dynamic memory allocation.”. This question is standard in competitive examination syllabi for Memory Allocation.
    keyConcept: Memory Allocation
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: Pick out the correct statement with respect to the heap.
    options:
      - Local variables are stored on the heap
      - Static variables are stored on the heap
      - Heap is the data structure that is used to implement recursive function calls
      - Everything on the heap is anonymous
    answer: 3
    explanation: Everything on the heap is anonymous is the correct answer to “Pick out the correct statement with respect to the heap.”. This question is standard in competitive examination syllabi for Memory Allocation.
    keyConcept: Memory Allocation
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: The size of both stack and heap remains the same during run time.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “The size of both stack and heap remains the same during run time.”. This question is standard in competitive examination syllabi for Memory Allocation.
    keyConcept: Memory Allocation
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: The advantage of using linked lists over arrays is that . . . . . . . .
    options:
      - Linked list is an example of linear data structure
      - Insertion and deletion of an element can be done at any position in a linked list
      - Linked list can be used to store a collection of homogenous and heterogeneous data types
      - The size of a linked list is fixed
    answer: 1
    explanation: Insertion and deletion of an element can be done at any position in a linked list is the correct answer to “The advantage of using linked lists over arrays is that . . . . . . . .”. This question is standard in competitive examination syllabi for Memory Allocation.
    keyConcept: Memory Allocation
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: The incorrect statement with respect to dangling pointers is . . . . . . . .
    options:
      - Pointer pointing to non-existent memory location is called dangling pointer
      - When a dynamically allocated pointer references the original memory after it has been freed, a dangling pointer arises
      - If memory leak occurs, it is mandatory that a dangling pointer arises
      - Dangling pointer may result in segmentation faults and potential security risks
    answer: 2
    explanation: If memory leak occurs, it is mandatory that a dangling pointer arises is the correct answer to “The incorrect statement with respect to dangling pointers is . . . . . . . .”. This question is standard in competitive examination syllabi for Memory Allocation.
    keyConcept: Memory Allocation
    testedIn:
      - FPSC
      - PPSC
---


