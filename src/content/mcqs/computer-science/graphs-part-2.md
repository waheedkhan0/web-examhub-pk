---
title: Graphs — Part 2 MCQs with Explanations
description: Practice high-yield Computer Science & IT MCQs on Graphs — Part 2 with worked academic solutions for PPSC, FPSC, CSS, PMS, NTS.
subject: computer-science
subjectName: Computer Science & IT
topic: graphs-part-2
topicName: Graphs — Part 2
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
    question: Which graph traversal method can be used to check if a graph is bipartite?
    options:
      - Kruskal's Algorithm
      - Dijkstra's Algorithm
      - Depth-First Search (DFS)
      - Breadth-First Search (BFS)
    answer: 3
    explanation: Breadth-First Search (BFS) is the correct answer to “Which graph traversal method can be used to check if a graph is bipartite”. This question is standard in competitive examination syllabi for Graphs.
    keyConcept: Graphs
    testedIn:
      - PPSC
      - FPSC
  - id: 2
    question: What is the primary use of a priority queue in graph algorithms?
    options:
      - To store all vertices of the graph.
      - To keep track of the visited nodes.
      - To efficiently manage and retrieve the minimum or maximum element.
      - To represent the adjacency matrix.
    answer: 2
    explanation: To efficiently manage and retrieve the minimum or maximum element. is the correct answer to “What is the primary use of a priority queue in graph algorithms”. This question is standard in competitive examination syllabi for Graphs.
    keyConcept: Graphs
    testedIn:
      - PPSC
      - FPSC
  - id: 3
    question: In the context of graph algorithms, what is a "cut"?
    options:
      - A complete traversal of all nodes.
      - A partition of the vertices into two disjoint subsets.
      - A method to count the number of vertices.
    answer: 1
    explanation: A partition of the vertices into two disjoint subsets. is the correct answer to “In the context of graph algorithms, what is a "cut"”. This question is standard in competitive examination syllabi for Graphs.
    keyConcept: Graphs
    testedIn:
      - PPSC
      - FPSC
  - id: 4
    question: Which graph representation method is more efficient for sparse graphs?
    options:
      - Incidence matrix
      - Edge list
      - Adjacency list
      - Adjacency matrix
    answer: 2
    explanation: Adjacency list is the correct answer to “Which graph representation method is more efficient for sparse graphs”. This question is standard in competitive examination syllabi for Graphs.
    keyConcept: Graphs
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: What is the characteristic of a graph if it is described as "planar"?
    options:
      - It contains no cycles.
      - It is a complete graph.
      - It is a bipartite graph.
      - It can be drawn on a plane without any edges crossing.
    answer: 3
    explanation: It can be drawn on a plane without any edges crossing. is the correct answer to “What is the characteristic of a graph if it is described as "planar"”. This question is standard in competitive examination syllabi for Graphs.
    keyConcept: Graphs
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: In which of the following case does a Propositional Directed Acyclic Graph is used for?
    options:
      - Representation of Boolean Functions
      - String Matching
      - Searching
      - Sorting of number
    answer: 0
    explanation: Representation of Boolean Functions is the correct answer to “In which of the following case does a Propositional Directed Acyclic Graph is used for”. This question is standard in competitive examination syllabi for Graphs.
    keyConcept: Graphs
    testedIn:
      - PPSC
      - FPSC
  - id: 7
    question: Which of the following logical operation can't be implemented by polynomial time graph manipulation algorithms using Binary Decision Diagrams?
    options:
      - Conjunction
      - Disjunction
      - Negation
      - Tautology Checking
    answer: 3
    explanation: Tautology Checking is the correct answer to “Which of the following logical operation can't be implemented by polynomial time graph manipulation algorithms using Binary Decision Diagrams”. This question is standard in competitive examination syllabi for Graphs.
    keyConcept: Graphs
    testedIn:
      - PPSC
      - FPSC
  - id: 8
    question: What is the maximum number of edges present in a simple directed graph with 7 vertices if there exists no cycles in the graph?
    options:
      - "21"
      - "7"
      - "6"
      - "49"
    answer: 2
    explanation: 6 is the correct answer to “What is the maximum number of edges present in a simple directed graph with 7 vertices if there exists no cycles in the graph”. This question is standard in competitive examination syllabi for Graphs.
    keyConcept: Graphs
    testedIn:
      - PPSC
      - FPSC
  - id: 9
    question: What is the number of words that can be formed from the given Directed Acyclic Word Graph?
    options:
      - "2"
      - "4"
      - "12"
      - "7"
    answer: 1
    explanation: 4 is the correct answer to “What is the number of words that can be formed from the given Directed Acyclic Word Graph”. This question is standard in competitive examination syllabi for Graphs.
    keyConcept: Graphs
    testedIn:
      - PPSC
      - FPSC
  - id: 10
    question: Given an adjacency matrix A = [ [0, 1, 1], [1, 0, 1], [1, 1, 0] ], The total no. of ways in which every vertex can walk to itself using 2 edges is . . . . . . . .
    options:
      - "2"
      - "4"
      - "6"
      - "8"
    answer: 2
    explanation: 6 is the correct answer to “Given an adjacency matrix A = [ [0, 1, 1], [1, 0, 1], [1, 1, 0] ], The total no. of ways in which every vertex can walk to itself using 2 edges is . . . . . . . .”. This question is standard in competitive examination syllabi for Graphs.
    keyConcept: Graphs
    testedIn:
      - PPSC
      - FPSC
  - id: 11
    question: All Graphs have unique representation on paper.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “All Graphs have unique representation on paper.”. This question is standard in competitive examination syllabi for Graphs.
    keyConcept: Graphs
    testedIn:
      - PPSC
      - FPSC
  - id: 12
    question: "For which type of graph, the given program won't run infinitely? The Input would be in the form of an adjacency Matrix and n is its dimension (1<n<10). #include <bits/stdc++.h> using namespace std; int G[10][10]; void fun(int n); int main() { int num=0; int n; cin>>n; for(int i=0;i<n;i++) for(int j=0;j<n;j++) cin>>G[i][j]; fun(n); return 0; } void fun(int n) { for(int i=0;i<n;i++) for(int j=0;j<n;j++) if(G[i][j]==1) j--; }"
    options:
      - All Fully Connected Graphs
      - All Empty Graphs
      - All Bipartite Graphs
      - All simple graphs
    answer: 1
    explanation: "All Empty Graphs is the correct answer to “For which type of graph, the given program won't run infinitely? The Input would be in the form of an adjacency Matrix and n is its dimension (1<n<10). #include <bits/stdc++.h> using namespace std; int G[10][10]; void fun(int n); int main() { int num=0; int n; cin>>n; for(int i=0;i<n;i++) for(int j=0;j<n;j++) cin>>G[i][j]; fun(n); return 0; } void fun(int n) { for(int i=0;i<n;i++) for(int j=0;j<n;j++) if(G[i][j]==1) j--; }”. This question is standard in competitive examination syllabi for Graphs."
    keyConcept: Graphs
    testedIn:
      - PPSC
      - FPSC
  - id: 13
    question: Which of the following is a HyperGraph, where V is the set of vertices, E is the set of edges?
    options:
      - V = {v1, v2, v3} E = {e1, e2} = {{v2, v3} {v1, v3}}
      - V = {v1, v2} E = {e1} = {{v1, v2}}
      - V = {v1, v2, v3} E = {e1, e2, e3} = {{v2, v3}{v3, v1}{v2, v1}}
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “Which of the following is a HyperGraph, where V is the set of vertices, E is the set of edges”. This question is standard in competitive examination syllabi for Graphs.
    keyConcept: Graphs
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: What is the number of edges present in a complete graph having n vertices?
    options:
      - (n*(n+1))/2
      - (n*(n-1))/2
      - "n"
      - Information given is insufficient
    answer: 1
    explanation: (n*(n-1))/2 is the correct answer to “What is the number of edges present in a complete graph having n vertices”. This question is standard in competitive examination syllabi for Graphs.
    keyConcept: Graphs
    testedIn:
      - PPSC
      - FPSC
  - id: 15
    question: Graph Structured Stack finds its application in . . . . . . . .
    options:
      - Bogo Sort
      - Tomita's Algorithm
      - Todd-Coxeter algorithm
      - Heap Sort
    answer: 1
    explanation: Tomita's Algorithm is the correct answer to “Graph Structured Stack finds its application in . . . . . . . .”. This question is standard in competitive examination syllabi for Graphs.
    keyConcept: Graphs
    testedIn:
      - PPSC
      - FPSC
  - id: 16
    question: What are the dimensions of an incidence matrix?
    options:
      - Number of edges*number of edges
      - Number of edges*number of vertices
      - Number of vertices*number of vertices
      - Number of edges * (1/2 * number of vertices)
    answer: 1
    explanation: Number of edges*number of vertices is the correct answer to “What are the dimensions of an incidence matrix”. This question is standard in competitive examination syllabi for Graphs.
    keyConcept: Graphs
    testedIn:
      - PPSC
      - FPSC
  - id: 17
    question: What is the number of unlabeled simple directed graph that can be made with 1 or 2 vertices?
    options:
      - "2"
      - "4"
      - "5"
      - "9"
    answer: 1
    explanation: 4 is the correct answer to “What is the number of unlabeled simple directed graph that can be made with 1 or 2 vertices”. This question is standard in competitive examination syllabi for Graphs.
    keyConcept: Graphs
    testedIn:
      - PPSC
      - FPSC
  - id: 18
    question: Incidence matrix and Adjacency matrix of a graph will always have same dimensions?
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “Incidence matrix and Adjacency matrix of a graph will always have same dimensions”. This question is standard in competitive examination syllabi for Graphs.
    keyConcept: Graphs
    testedIn:
      - PPSC
      - FPSC
  - id: 19
    question: In which case adjacency list is preferred in front of an adjacency matrix?
    options:
      - Dense graph
      - Sparse graph
      - Adjacency list is always preferred
      - Complete graph
    answer: 1
    explanation: Sparse graph is the correct answer to “In which case adjacency list is preferred in front of an adjacency matrix”. This question is standard in competitive examination syllabi for Graphs.
    keyConcept: Graphs
    testedIn:
      - PPSC
      - FPSC
  - id: 20
    question: In which of the following case does a Binary Decision Diagram is used for?
    options:
      - Representation of Boolean Functions
      - String Matching
      - Searching
      - Sorting of number
    answer: 0
    explanation: Representation of Boolean Functions is the correct answer to “In which of the following case does a Binary Decision Diagram is used for”. This question is standard in competitive examination syllabi for Graphs.
    keyConcept: Graphs
    testedIn:
      - PPSC
      - FPSC
  - id: 21
    question: A Graph Structured Stack is a . . . . . . . .
    options:
      - Undirected Graph
      - Directed Graph
      - Directed Acyclic Graph
      - Regular Graph
    answer: 2
    explanation: Directed Acyclic Graph is the correct answer to “A Graph Structured Stack is a . . . . . . . .”. This question is standard in competitive examination syllabi for Graphs.
    keyConcept: Graphs
    testedIn:
      - PPSC
      - FPSC
  - id: 22
    question: In a Binary Decision Diagrams 0 values by a . . . . . . . . line and the 1 values are represented by a . . . . . . . . line.
    options:
      - dashed, bold
      - bold, dashed
      - dotted, bold
      - dotted, dashed
    answer: 2
    explanation: dotted, bold is the correct answer to “In a Binary Decision Diagrams 0 values by a . . . . . . . . line and the 1 values are represented by a . . . . . . . . line.”. This question is standard in competitive examination syllabi for Graphs.
    keyConcept: Graphs
    testedIn:
      - PPSC
      - FPSC
  - id: 23
    question: What would be the time complexity of the BFS traversal of a graph with n vertices and n 1.25 edges?
    options:
      - O(n)
      - O(n1.25)
      - O(n2.25)
      - O(n*n)
    answer: 1
    explanation: O(n1.25) is the correct answer to “What would be the time complexity of the BFS traversal of a graph with n vertices and n 1.25 edges”. This question is standard in competitive examination syllabi for Graphs.
    keyConcept: Graphs
    testedIn:
      - PPSC
      - FPSC
  - id: 24
    question: Which of the following ways can be used to represent a graph?
    options:
      - Adjacency List and Adjacency Matrix
      - Incidence Matrix
      - Adjacency List, Adjacency Matrix as well as Incidence Matrix
      - No way to represent
    answer: 2
    explanation: Adjacency List, Adjacency Matrix as well as Incidence Matrix is the correct answer to “Which of the following ways can be used to represent a graph”. This question is standard in competitive examination syllabi for Graphs.
    keyConcept: Graphs
    testedIn:
      - PPSC
      - FPSC
  - id: 25
    question: All trees with n vertices consists of n-1 edges.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “All trees with n vertices consists of n-1 edges.”. This question is standard in competitive examination syllabi for Graphs.
    keyConcept: Graphs
    testedIn:
      - PPSC
      - FPSC
  - id: 26
    question: Binary Decision Diagram is a type of . . . . . . . .
    options:
      - Multigraph
      - Cyclic Graph
      - Directed Acyclic Graph
      - Directed Acyclic Word Graph
    answer: 2
    explanation: Directed Acyclic Graph is the correct answer to “Binary Decision Diagram is a type of . . . . . . . .”. This question is standard in competitive examination syllabi for Graphs.
    keyConcept: Graphs
    testedIn:
      - PPSC
      - FPSC
  - id: 27
    question: A graph with all vertices having equal degree is known as a . . . . . . . .
    options:
      - Multi Graph
      - Regular Graph
      - Simple Graph
      - Complete Graph
    answer: 1
    explanation: Regular Graph is the correct answer to “A graph with all vertices having equal degree is known as a . . . . . . . .”. This question is standard in competitive examination syllabi for Graphs.
    keyConcept: Graphs
    testedIn:
      - PPSC
      - FPSC
  - id: 28
    question: In a Propositional Directed Acyclic Graph Leaves maybe labelled with a boolean variable.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “In a Propositional Directed Acyclic Graph Leaves maybe labelled with a boolean variable.”. This question is standard in competitive examination syllabi for Graphs.
    keyConcept: Graphs
    testedIn:
      - PPSC
      - FPSC
  - id: 29
    question: The time complexity to calculate the number of edges in a graph whose information in stored in form of an adjacency matrix is . . . . . . . .
    options:
      - O(V)
      - O(E2)
      - O(E)
      - O(V2)
    answer: 3
    explanation: O(V2) is the correct answer to “The time complexity to calculate the number of edges in a graph whose information in stored in form of an adjacency matrix is . . . . . . . .”. This question is standard in competitive examination syllabi for Graphs.
    keyConcept: Graphs
    testedIn:
      - PPSC
      - FPSC
  - id: 30
    question: What is the degree sequence of the given HyperGraph, in non-increasing order. V = {v1,v2,v3,v4,v5,v6} E = {{v1,v4,v5} {v2,v3,v4,v5} {v2} {v1} {v1,v6}}
    options:
      - 3,2,1,1,1,1
      - 3,2,2,2,1,1
      - 3,2,2,2,2,1
      - 3,2,2,1,1,1
    answer: 1
    explanation: 3,2,2,2,1,1 is the correct answer to “What is the degree sequence of the given HyperGraph, in non-increasing order. V = {v1,v2,v3,v4,v5,v6} E = {{v1,v4,v5} {v2,v3,v4,v5} {v2} {v1} {v1,v6}}”. This question is standard in competitive examination syllabi for Graphs.
    keyConcept: Graphs
    testedIn:
      - PPSC
      - FPSC
  - id: 31
    question: Given Adjacency matrices determine which of them are PseudoGraphs? i. {{1,0} {0,1}} ii. {{0,1}{1,0}} iii. {{0,0,1}{0,1,0}{1,0,0}}
    options:
      - only i
      - ii and iii
      - i and iii
      - i, ii and iii
    answer: 2
    explanation: i and iii is the correct answer to “Given Adjacency matrices determine which of them are PseudoGraphs? i. {{1,0} {0,1}} ii. {{0,1}{1,0}} iii. {{0,0,1}{0,1,0}{1,0,0}}”. This question is standard in competitive examination syllabi for Graphs.
    keyConcept: Graphs
    testedIn:
      - PPSC
      - FPSC
  - id: 32
    question: Time complexity to find if there is an edge between 2 particular vertices is . . . . . . . .
    options:
      - O(V)
      - O(E)
      - O(1)
      - O(V+E)
    answer: 0
    explanation: O(V) is the correct answer to “Time complexity to find if there is an edge between 2 particular vertices is . . . . . . . .”. This question is standard in competitive examination syllabi for Graphs.
    keyConcept: Graphs
    testedIn:
      - PPSC
      - FPSC
  - id: 33
    question: What is the number of vertices of degree 2 in a path graph having n vertices,here n>2.
    options:
      - n-2
      - "n"
      - "2"
      - "0"
    answer: 0
    explanation: n-2 is the correct answer to “What is the number of vertices of degree 2 in a path graph having n vertices,here n>2.”. This question is standard in competitive examination syllabi for Graphs.
    keyConcept: Graphs
    testedIn:
      - PPSC
      - FPSC
  - id: 34
    question: What would be the number of zeros in the adjacency matrix of the given graph?
    options:
      - "10"
      - "6"
      - "16"
      - "0"
    answer: 0
    explanation: 10 is the correct answer to “What would be the number of zeros in the adjacency matrix of the given graph”. This question is standard in competitive examination syllabi for Graphs.
    keyConcept: Graphs
    testedIn:
      - PPSC
      - FPSC
  - id: 35
    question: For which of the following combinations of the degrees of vertices would the connected graph be eulerian?
    options:
      - 1,2,3
      - 2,3,4
      - 2,4,5
      - 1,3,5
    answer: 0
    explanation: 1,2,3 is the correct answer to “For which of the following combinations of the degrees of vertices would the connected graph be eulerian”. This question is standard in competitive examination syllabi for Graphs.
    keyConcept: Graphs
    testedIn:
      - PPSC
      - FPSC
  - id: 36
    question: What would be the DFS traversal of the given Graph?
    options:
      - ABCED
      - AEDCB
      - EDCBA
      - ADECB
    answer: 0
    explanation: ABCED is the correct answer to “What would be the DFS traversal of the given Graph”. This question is standard in competitive examination syllabi for Graphs.
    keyConcept: Graphs
    testedIn:
      - PPSC
      - FPSC
  - id: 37
    question: Which of the given statement is true?
    options:
      - All the Cyclic Directed Graphs have topological sortings
      - All the Acyclic Directed Graphs have topological sortings
      - All Directed Graphs have topological sortings
      - All the cyclic directed graphs hace non topological sortings
    answer: 3
    explanation: All the cyclic directed graphs hace non topological sortings is the correct answer to “Which of the given statement is true”. This question is standard in competitive examination syllabi for Graphs.
    keyConcept: Graphs
    testedIn:
      - PPSC
      - FPSC
  - id: 38
    question: In which of the following does a Directed Acyclic Word Graph finds its application in?
    options:
      - String Matching
      - Number Sorting
      - Manipulations on numbers
      - Pattern Printing
    answer: 0
    explanation: String Matching is the correct answer to “In which of the following does a Directed Acyclic Word Graph finds its application in”. This question is standard in competitive examination syllabi for Graphs.
    keyConcept: Graphs
    testedIn:
      - PPSC
      - FPSC
  - id: 39
    question: The graphs G1 and G2 with their incidences matrices given are Isomorphic. e1 e2 e3 e4 e5 e6 v1 1 0 0 0 0 0 v2 1 1 0 0 0 1 v3 0 1 1 0 1 0 v4 0 0 1 1 0 0 v5 0 0 0 1 1 1 e1 e2 e3 e4 e5 e6 v1 0 0 1 0 0 0 v2 1 0 1 0 1 0 v3 1 1 0 1 0 0 v4 0 1 0 0 0 1 v5 0 0 0 1 1 1
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “The graphs G1 and G2 with their incidences matrices given are Isomorphic. e1 e2 e3 e4 e5 e6 v1 1 0 0 0 0 0 v2 1 1 0 0 0 1 v3 0 1 1 0 1 0 v4 0 0 1 1 0 0 v5 0 0 0 1 1 1 e1 e2 e3 e4 e5 e6 v1 0 0 1 0 0 0 v2 1 0 1 0 1 0 v3 1 1 0 1 0 0 v4 0 1 0 0 0 1 v5 0 0 0 1 1 1”. This question is standard in competitive examination syllabi for Graphs.
    keyConcept: Graphs
    testedIn:
      - PPSC
      - FPSC
  - id: 40
    question: Which of the following symbols represent leaf nodes? i. Δ ii. ◊ iii. ∇ iv. T v. ⊥
    options:
      - iv and v
      - v
      - i and iii
      - ii
    answer: 0
    explanation: iv and v is the correct answer to “Which of the following symbols represent leaf nodes? i. Δ ii. ◊ iii. ∇ iv. T v. ⊥”. This question is standard in competitive examination syllabi for Graphs.
    keyConcept: Graphs
    testedIn:
      - PPSC
      - FPSC
---


