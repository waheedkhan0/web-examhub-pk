---
title: Dynamic Programming In Data Structures — Part 2 MCQs with Explanations
description: Practice high-yield Computer Science & IT MCQs on Dynamic Programming In Data Structures — Part 2 with worked academic solutions for PPSC, FPSC, CSS, PMS, NTS.
subject: computer-science
subjectName: Computer Science & IT
topic: dynamic-programming-in-data-structures-part-2
topicName: Dynamic Programming In Data Structures — Part 2
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
    question: In Dynamic Programming, what does the term "subproblem" refer to?
    options:
      - A smaller instance of the overall problem that contributes to the final solution.
      - A problem that has no relation to the main problem.
      - A problem that is solved by brute force.
      - A problem that is not solved by DP.
    answer: 0
    explanation: A smaller instance of the overall problem that contributes to the final solution. is the correct answer to “In Dynamic Programming, what does the term "subproblem" refer to”. This question is standard in competitive examination syllabi for Dynamic Programming In Data Structures.
    keyConcept: Dynamic Programming In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 2
    question: Which problem is best solved using Dynamic Programming by maintaining a 2D table to store results?
    options:
      - Quick Sort
      - Depth-First Search
      - Binary Search
      - Longest Common Subsequence
    answer: 3
    explanation: Longest Common Subsequence is the correct answer to “Which problem is best solved using Dynamic Programming by maintaining a 2D table to store results”. This question is standard in competitive examination syllabi for Dynamic Programming In Data Structures.
    keyConcept: Dynamic Programming In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 3
    question: What is the time complexity of the Dynamic Programming solution for the "Longest Palindromic Substring" problem?
    options:
      - O(n log n)
      - O(n)
      - O(n2)
      - O(log n)
    answer: 2
    explanation: O(n2) is the correct answer to “What is the time complexity of the Dynamic Programming solution for the "Longest Palindromic Substring" problem”. This question is standard in competitive examination syllabi for Dynamic Programming In Data Structures.
    keyConcept: Dynamic Programming In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 4
    question: How does the concept of "overlapping subproblems" apply to the "Knapsack Problem" in Dynamic Programming?
    options:
      - The problem requires sorting.
      - The problem can be divided into subproblems that are solved multiple times.
      - The problem has no optimal substructure.
    answer: 1
    explanation: The problem can be divided into subproblems that are solved multiple times. is the correct answer to “How does the concept of "overlapping subproblems" apply to the "Knapsack Problem" in Dynamic Programming”. This question is standard in competitive examination syllabi for Dynamic Programming In Data Structures.
    keyConcept: Dynamic Programming In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: In the context of Dynamic Programming, what is the typical use of "backtracking"?
    options:
      - To store intermediate results.
      - To solve the problem directly.
      - To reconstruct the solution from the computed results.
      - To avoid redundant computations.
    answer: 2
    explanation: To reconstruct the solution from the computed results. is the correct answer to “In the context of Dynamic Programming, what is the typical use of "backtracking"”. This question is standard in competitive examination syllabi for Dynamic Programming In Data Structures.
    keyConcept: Dynamic Programming In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: Consider the two strings ""(empty string) and "abcd". What is the edit distance between the two strings?
    options:
      - "0"
      - "4"
      - "2"
      - "3"
    answer: 1
    explanation: 4 is the correct answer to “Consider the two strings ""(empty string) and "abcd". What is the edit distance between the two strings”. This question is standard in competitive examination syllabi for Dynamic Programming In Data Structures.
    keyConcept: Dynamic Programming In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 7
    question: "What is the output of the following code? #include<stdio.h> #include<string.h> int max_num(int a, int b) { if(a > b) return a; return b; } int lps(char *str1) { int i,j,len; len = strlen(str1); char str2[len + 1]; strcpy(str2, str1); strrev(str2); int arr[len + 1][len + 1]; for(i = 0; i <= len; i++) arr[i][0] = 0; for(i = 0; i <= len; i++) arr[0][i] = 0; for(i = 1; i <= len; i++) { for(j = 1; j <= len; j++) { if(str1[i-1] == str2[j - 1]) arr[i][j] = 1 + arr[i - 1][j - 1]; else arr[i][j] = max_num(arr[i - 1][j], arr[i][j - 1]); } } return arr[len][len]; } int main() { char str1[] = \"abcd\"; int ans = lps(str1); printf(\"%d\",ans); return 0; }"
    options:
      - "0"
      - "1"
      - "2"
      - "3"
    answer: 1
    explanation: "1 is the correct answer to “What is the output of the following code? #include<stdio.h> #include<string.h> int max_num(int a, int b) { if(a > b) return a; return b; } int lps(char *str1) { int i,j,len; len = strlen(str1); char str2[len + 1]; strcpy(str2, str1); strrev(str2); int arr[len + 1][len + 1]; for(i = 0; i <= len; i++) arr[i][0] = 0; for(i = 0; i <= len; i++) arr[0][i] = 0; for(i = 1; i <= len; i++) { for(j = 1; j <= len; j++) { if(str1[i-1] == str2[j - 1]) arr[i][j] = 1 + arr[i - 1][j - 1]; else arr[i][j] = max_num(arr[i - 1][j], arr[i][j - 1]); } } return arr[len][len]; } int main() { char str1[] = \"abcd\"; int ans = lps(str1); printf(\"%d\",ans); return 0; }”. This question is standard in competitive examination syllabi for Dynamic Programming In Data Structures."
    keyConcept: Dynamic Programming In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 8
    question: For which of the following pairs of strings is the edit distance maximum?
    options:
      - sunday & monday
      - monday & tuesday
      - tuesday & wednesday
      - wednesday & thursday
    answer: 3
    explanation: wednesday & thursday is the correct answer to “For which of the following pairs of strings is the edit distance maximum”. This question is standard in competitive examination syllabi for Dynamic Programming In Data Structures.
    keyConcept: Dynamic Programming In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 9
    question: "Consider the recursive implementation to find the nth fibonacci number: Which line would make the implementation complete? int fibo(int n) if n <= 1 return n return __________"
    options:
      - fibo(n) + fibo(n)
      - fibo(n) + fibo(n - 1)
      - fibo(n - 1) + fibo(n + 1)
      - fibo(n - 1) + fibo(n - 2)
    answer: 3
    explanation: "fibo(n - 1) + fibo(n - 2) is the correct answer to “Consider the recursive implementation to find the nth fibonacci number: Which line would make the implementation complete? int fibo(int n) if n <= 1 return n return __________”. This question is standard in competitive examination syllabi for Dynamic Programming In Data Structures."
    keyConcept: Dynamic Programming In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 10
    question: What is the time complexity of the brute force algorithm used to solve the balanced partition problem?
    options:
      - O(1)
      - O(n)
      - O(n2)
      - O(2n)
    answer: 3
    explanation: O(2n) is the correct answer to “What is the time complexity of the brute force algorithm used to solve the balanced partition problem”. This question is standard in competitive examination syllabi for Dynamic Programming In Data Structures.
    keyConcept: Dynamic Programming In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 11
    question: "What will be the value stored in arr[5] when the following code is executed? #include<stdio.h> int cat_number(int n) { int i,j,arr[n],k; arr[0] = 1; for(i = 1; i < n; i++) { arr[i] = 0; for(j = 0,k = i - 1; j < i; j++,k--) arr[i] += arr[j] * arr[k]; } return arr[n-1]; } int main() { int ans, n = 10; ans = cat_number(n); printf(\"%d\\n\",ans); return 0; }"
    options:
      - "14"
      - "42"
      - "132"
      - "429"
    answer: 1
    explanation: "42 is the correct answer to “What will be the value stored in arr[5] when the following code is executed? #include<stdio.h> int cat_number(int n) { int i,j,arr[n],k; arr[0] = 1; for(i = 1; i < n; i++) { arr[i] = 0; for(j = 0,k = i - 1; j < i; j++,k--) arr[i] += arr[j] * arr[k]; } return arr[n-1]; } int main() { int ans, n = 10; ans = cat_number(n); printf(\"%d\\n\",ans); return 0; }”. This question is standard in competitive examination syllabi for Dynamic Programming In Data Structures."
    keyConcept: Dynamic Programming In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 12
    question: "The recursive formula for Catalan number is given by Cn = ∑Ci*C(n-i). Consider the following dynamic programming implementation for Catalan numbers: #include<stdio.h> int cat_number(int n) { int i,j,arr[n],k; arr[0] = 1; for(i = 1; i < n; i++) { arr[i] = 0; for(j = 0,k = i - 1; j < i; j++,k--) ______________________; } return arr[n-1]; } int main() { int ans, n = 8; ans = cat_number(n); printf(\"%d\\n\",ans); return 0; } Which of the following lines completes the above code?"
    options:
      - arr[i] = arr[j] * arr[k]
      - arr[j] += arr[i] * arr[k]
      - arr[i] += arr[j] * arr[k].
      - arr[j] = arr[i] * arr[k]
    answer: 2
    explanation: "arr[i] += arr[j] * arr[k]. is the correct answer to “The recursive formula for Catalan number is given by Cn = ∑Ci*C(n-i). Consider the following dynamic programming implementation for Catalan numbers: #include<stdio.h> int cat_number(int n) { int i,j,arr[n],k; arr[0] = 1; for(i = 1; i < n; i++) { arr[i] = 0; for(j = 0,k = i - 1; j < i; j++,k--) ______________________; } return arr[n-1]; } int main() { int ans, n = 8; ans = cat_number(n); printf(\"%d\\n\",ans); return 0; } Which of the following lines completes the above code”. This question is standard in competitive examination syllabi for Dynamic Programming In Data Structures."
    keyConcept: Dynamic Programming In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 13
    question: Wagner-Fischer is a . . . . . . . . algorithm.
    options:
      - Brute force
      - Greedy
      - Dynamic programming
      - Recursive
    answer: 2
    explanation: Dynamic programming is the correct answer to “Wagner-Fischer is a . . . . . . . . algorithm.”. This question is standard in competitive examination syllabi for Dynamic Programming In Data Structures.
    keyConcept: Dynamic Programming In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: Consider the following code snippet. Which property is shown by line 4 of the below code snippet? 1. int sum[len], idx; 2. sum[0] = arr[0]; 3. for(idx = 1; idx < len; idx++) 4. sum[idx] = max(sum[idx - 1] + arr[idx], arr[idx]); 5. int mx = sum[0]; 6. for(idx = 0; idx < len; idx++) 7. if(sum[idx] > mx) 8. mx =sum[idx]; 9. return mx;
    options:
      - Optimal substructure
      - Overlapping subproblems
      - Both overlapping subproblems and optimal substructure
      - Greedy substructure
    answer: 0
    explanation: Optimal substructure is the correct answer to “Consider the following code snippet. Which property is shown by line 4 of the below code snippet? 1. int sum[len], idx; 2. sum[0] = arr[0]; 3. for(idx = 1; idx < len; idx++) 4. sum[idx] = max(sum[idx - 1] + arr[idx], arr[idx]); 5. int mx = sum[0]; 6. for(idx = 0; idx < len; idx++) 7. if(sum[idx] > mx) 8. mx =sum[idx]; 9. return mx;”. This question is standard in competitive examination syllabi for Dynamic Programming In Data Structures.
    keyConcept: Dynamic Programming In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 15
    question: "What is the output of the following implementation of Kadane's algorithm? #include<stdio.h> int max_num(int a, int b) { if(a > b) return a; return b; } int kadane_algo(int *arr, int len) { int ans, sum, idx; ans =0; sum =0; for(idx =0; idx < len; idx++) { sum = max_num(0,sum + arr[idx]); ans = max_num(sum,ans); } return ans; } int main() { int arr[] = {-2, -3, -3, -1, -2, -1, -5, -3},len = 8; int ans = kadane_algo(arr,len); printf(\"%d\",ans); return 0; }"
    options:
      - "1"
      - "-1"
      - "-2"
      - "0"
    answer: 3
    explanation: "0 is the correct answer to “What is the output of the following implementation of Kadane's algorithm? #include<stdio.h> int max_num(int a, int b) { if(a > b) return a; return b; } int kadane_algo(int *arr, int len) { int ans, sum, idx; ans =0; sum =0; for(idx =0; idx < len; idx++) { sum = max_num(0,sum + arr[idx]); ans = max_num(sum,ans); } return ans; } int main() { int arr[] = {-2, -3, -3, -1, -2, -1, -5, -3},len = 8; int ans = kadane_algo(arr,len); printf(\"%d\",ans); return 0; }”. This question is standard in competitive examination syllabi for Dynamic Programming In Data Structures."
    keyConcept: Dynamic Programming In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 16
    question: Consider the brute force implementation in which we find all the possible ways of multiplying the given set of n matrices. What is the time complexity of this implementation?
    options:
      - O(n!)
      - O(n3)
      - O(n2)
      - Exponential
    answer: 3
    explanation: Exponential is the correct answer to “Consider the brute force implementation in which we find all the possible ways of multiplying the given set of n matrices. What is the time complexity of this implementation”. This question is standard in competitive examination syllabi for Dynamic Programming In Data Structures.
    keyConcept: Dynamic Programming In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 17
    question: "What is the output of the following code? #include<stdio.h> #include<limits.h> int mat_chain_multiplication(int *mat, int n) { int arr[n][n]; int i,k,row,col,len; for(i=1;i<n;i++) arr[i][i] = 0; for(len = 2; len < n; len++) { for(row = 1; row <= n - len + 1; row++) { col = row + len - 1; arr[row][col] = INT_MAX; for(k = row; k <= col - 1; k++) { int tmp = arr[row][k] + arr[k + 1][col] + mat[row - 1] * mat[k] * mat[col]; if(tmp < arr[row][col]) arr[row][col] = tmp; } } } return arr[1][n - 1]; } int main() { int mat[6] = {20,30,40,50}; int ans = mat_chain_multiplication(mat,4); printf(\"%d\",ans); return 0; }"
    options:
      - "64000"
      - "70000"
      - "120000"
      - "150000"
    answer: 0
    explanation: "64000 is the correct answer to “What is the output of the following code? #include<stdio.h> #include<limits.h> int mat_chain_multiplication(int *mat, int n) { int arr[n][n]; int i,k,row,col,len; for(i=1;i<n;i++) arr[i][i] = 0; for(len = 2; len < n; len++) { for(row = 1; row <= n - len + 1; row++) { col = row + len - 1; arr[row][col] = INT_MAX; for(k = row; k <= col - 1; k++) { int tmp = arr[row][k] + arr[k + 1][col] + mat[row - 1] * mat[k] * mat[col]; if(tmp < arr[row][col]) arr[row][col] = tmp; } } } return arr[1][n - 1]; } int main() { int mat[6] = {20,30,40,50}; int ans = mat_chain_multiplication(mat,4); printf(\"%d\",ans); return 0; }”. This question is standard in competitive examination syllabi for Dynamic Programming In Data Structures."
    keyConcept: Dynamic Programming In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 18
    question: "Consider the following assembly line problem: time_to_reach[2][3] = {{17, 2, 7}, {19, 4, 9}} time_spent[2][4] = {{6, 5, 15, 7}, {5, 10, 11, 4}} entry_time[2] = {8, 10} exit_time[2] = {10, 7} num_of_stations = 4 For the optimal solution, which should be the exit assembly line?"
    options:
      - Line 1
      - Line 2
      - All of the mentioned
      - None of the mentioned
    answer: 1
    explanation: "Line 2 is the correct answer to “Consider the following assembly line problem: time_to_reach[2][3] = {{17, 2, 7}, {19, 4, 9}} time_spent[2][4] = {{6, 5, 15, 7}, {5, 10, 11, 4}} entry_time[2] = {8, 10} exit_time[2] = {10, 7} num_of_stations = 4 For the optimal solution, which should be the exit assembly line”. This question is standard in competitive examination syllabi for Dynamic Programming In Data Structures."
    keyConcept: Dynamic Programming In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 19
    question: Which of the following implementations of Catalan numbers has the largest space complexity(Don't consider the stack space)?
    options:
      - Dynamic programming
      - Binomial coefficients
      - Recursion
      - All have equal space complexities
    answer: 0
    explanation: Dynamic programming is the correct answer to “Which of the following implementations of Catalan numbers has the largest space complexity(Don't consider the stack space)”. This question is standard in competitive examination syllabi for Dynamic Programming In Data Structures.
    keyConcept: Dynamic Programming In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 20
    question: Which of the following methods can be used to solve the longest palindromic subsequence problem?
    options:
      - Dynamic programming
      - Recursion
      - Brute force
      - Dynamic programming, Recursion, Brute force
    answer: 3
    explanation: Dynamic programming, Recursion, Brute force is the correct answer to “Which of the following methods can be used to solve the longest palindromic subsequence problem”. This question is standard in competitive examination syllabi for Dynamic Programming In Data Structures.
    keyConcept: Dynamic Programming In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 21
    question: Which of the following is the recurrence relation for the matrix chain multiplication problem where mat[i-1] * mat[i] gives the dimension of the ith matrix?
    options:
      - dp[i,j] = 1 if i=j dp[i,j] = min{dp[i,k] + dp[k+1,j]}
      - dp[i,j] = 0 if i=j dp[i,j] = min{dp[i,k] + dp[k+1,j]}
      - dp[i,j] = 1 if i=j dp[i,j] = min{dp[i,k] + dp[k+1,j]} + mat[i-1]*mat[k]*mat[j].
      - dp[i,j] = 0 if i=j dp[i,j] = min{dp[i,k] + dp[k+1,j]} + mat[i-1]*mat[k]*mat[j].
    answer: 3
    explanation: dp[i,j] = 0 if i=j dp[i,j] = min{dp[i,k] + dp[k+1,j]} + mat[i-1]*mat[k]*mat[j]. is the correct answer to “Which of the following is the recurrence relation for the matrix chain multiplication problem where mat[i-1] * mat[i] gives the dimension of the ith matrix”. This question is standard in competitive examination syllabi for Dynamic Programming In Data Structures.
    keyConcept: Dynamic Programming In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 22
    question: For every rod cutting problem there will be a unique set of pieces that give the maximum price.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “For every rod cutting problem there will be a unique set of pieces that give the maximum price.”. This question is standard in competitive examination syllabi for Dynamic Programming In Data Structures.
    keyConcept: Dynamic Programming In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 23
    question: In the brute force implementation to find the longest increasing subsequence, all the subsequences of a given sequence are found. All the increasing subsequences are then selected and the length of the longest subsequence is found. What is the time complexity of this brute force implementation?
    options:
      - O(n)
      - O(n2)
      - O(n!)
      - O(2n)
    answer: 3
    explanation: O(2n) is the correct answer to “In the brute force implementation to find the longest increasing subsequence, all the subsequences of a given sequence are found. All the increasing subsequences are then selected and the length of the longest subsequence is found. What is the time complexity of this brute force implementation”. This question is standard in competitive examination syllabi for Dynamic Programming In Data Structures.
    keyConcept: Dynamic Programming In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 24
    question: Consider the expression T & F ∧ T. What is the number of ways in which the expression can be parenthesized so that the output is T (true)?
    options:
      - "0"
      - "1"
      - "2"
      - "3"
    answer: 2
    explanation: 2 is the correct answer to “Consider the expression T & F ∧ T. What is the number of ways in which the expression can be parenthesized so that the output is T (true)”. This question is standard in competitive examination syllabi for Dynamic Programming In Data Structures.
    keyConcept: Dynamic Programming In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 25
    question: What is the sum of each of the balanced partitions for the array {5, 6, 7, 10, 3, 1}?
    options:
      - "16"
      - "32"
      - "0"
      - "64"
    answer: 0
    explanation: 16 is the correct answer to “What is the sum of each of the balanced partitions for the array {5, 6, 7, 10, 3, 1}”. This question is standard in competitive examination syllabi for Dynamic Programming In Data Structures.
    keyConcept: Dynamic Programming In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 26
    question: If an optimal solution can be created for a problem by constructing optimal solutions for its subproblems, the problem possesses . . . . . . . . property.
    options:
      - Overlapping subproblems
      - Optimal substructure
      - Memoization
      - Greedy
    answer: 1
    explanation: Optimal substructure is the correct answer to “If an optimal solution can be created for a problem by constructing optimal solutions for its subproblems, the problem possesses . . . . . . . . property.”. This question is standard in competitive examination syllabi for Dynamic Programming In Data Structures.
    keyConcept: Dynamic Programming In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 27
    question: "What is the time complexity of the following naive method used to find the maximum sub-array sum in an array containing n elements? #include<stdio.h> int main() { int arr[1000]={2, -1, 3, -4, 1, -2, -1, 5, -4}, len=9; int cur_max, tmp_max, strt_idx, sub_arr_idx; cur_max = arr[0]; for(strt_idx = 0; strt_idx < len; strt_idx++) { tmp_max=0; for(sub_arr_idx = strt_idx; sub_arr_idx < len; sub_arr_idx++) { tmp_max +=arr[sub_arr_idx]; if(tmp_max > cur_max) _____________; } } printf(\"%d\",cur_max); return 0; }"
    options:
      - O(n2)
      - O(n)
      - O(n3)
      - O(1)
    answer: 0
    explanation: "O(n2) is the correct answer to “What is the time complexity of the following naive method used to find the maximum sub-array sum in an array containing n elements? #include<stdio.h> int main() { int arr[1000]={2, -1, 3, -4, 1, -2, -1, 5, -4}, len=9; int cur_max, tmp_max, strt_idx, sub_arr_idx; cur_max = arr[0]; for(strt_idx = 0; strt_idx < len; strt_idx++) { tmp_max=0; for(sub_arr_idx = strt_idx; sub_arr_idx < len; sub_arr_idx++) { tmp_max +=arr[sub_arr_idx]; if(tmp_max > cur_max) _____________; } } printf(\"%d\",cur_max); return 0; }”. This question is standard in competitive examination syllabi for Dynamic Programming In Data Structures."
    keyConcept: Dynamic Programming In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 28
    question: "Consider the following array: {1, 3, 5, 8, 9, 2, 6, 7, 6} What is the minimum number of jumps required to reach the end of the array?"
    options:
      - "1"
      - "2"
      - "3"
      - "4"
    answer: 2
    explanation: "3 is the correct answer to “Consider the following array: {1, 3, 5, 8, 9, 2, 6, 7, 6} What is the minimum number of jumps required to reach the end of the array”. This question is standard in competitive examination syllabi for Dynamic Programming In Data Structures."
    keyConcept: Dynamic Programming In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 29
    question: You are given infinite coins of denominations v1, v2, v3, ....., vn and a sum S. The coin change problem is to find the minimum number of coins required to get the sum S. This problem can be solved using . . . . . . . .
    options:
      - Greedy algorithm
      - Dynamic programming
      - Divide and conquer
      - Backtracking
    answer: 1
    explanation: Dynamic programming is the correct answer to “You are given infinite coins of denominations v1, v2, v3, ....., vn and a sum S. The coin change problem is to find the minimum number of coins required to get the sum S. This problem can be solved using . . . . . . . .”. This question is standard in competitive examination syllabi for Dynamic Programming In Data Structures.
    keyConcept: Dynamic Programming In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 30
    question: "What is the output of the following code? #include<stdio.h> int get_min(int a, int b) { if(a<b) return a; return b; } int minimum_time_required(int reach[][3],int spent[][4], int *entry, int *exit, int n) { int t1[n], t2[n], i; t1[0] = entry[0] + spent[0][0]; t2[0] = entry[1] + spent[1][0]; for(i = 1; i < n; i++) { t1[i] = get_min(t1[i-1]+spent[0][i], t2[i-1]+reach[1][i-1]+spent[0][i]); t2[i] = get_min(t2[i-1]+spent[1][i], t1[i-1]+reach[0][i-1]+spent[1][i]); } return get_min(t1[n-1]+exit[0], t2[n-1]+exit[1]); } int main() { int time_to_reach[][3] = {{6, 1, 5}, {2, 4, 7}}; int time_spent[][4] = {{6, 5, 4, 7}, {5, 10, 2, 6}}; int entry_time[2] = {5, 6}; int exit_time[2] = {8, 9}; int num_of_stations = 4; int ans = minimum_time_required(time_to_reach, time_spent, entry_time, exit_time, num_of_stations); printf(\"%d\",ans); return 0; }"
    options:
      - "32"
      - "33"
      - "34"
      - "35"
    answer: 2
    explanation: "34 is the correct answer to “What is the output of the following code? #include<stdio.h> int get_min(int a, int b) { if(a<b) return a; return b; } int minimum_time_required(int reach[][3],int spent[][4], int *entry, int *exit, int n) { int t1[n], t2[n], i; t1[0] = entry[0] + spent[0][0]; t2[0] = entry[1] + spent[1][0]; for(i = 1; i < n; i++) { t1[i] = get_min(t1[i-1]+spent[0][i], t2[i-1]+reach[1][i-1]+spent[0][i]); t2[i] = get_min(t2[i-1]+spent[1][i], t1[i-1]+reach[0][i-1]+spent[1][i]); } return get_min(t1[n-1]+exit[0], t2[n-1]+exit[1]); } int main() { int time_to_reach[][3] = {{6, 1, 5}, {2, 4, 7}}; int time_spent[][4] = {{6, 5, 4, 7}, {5, 10, 2, 6}}; int entry_time[2] = {5, 6}; int exit_time[2] = {8, 9}; int num_of_stations = 4; int ans = minimum_time_required(time_to_reach, time_spent, entry_time, exit_time, num_of_stations); printf(\"%d\",ans); return 0; }”. This question is standard in competitive examination syllabi for Dynamic Programming In Data Structures."
    keyConcept: Dynamic Programming In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 31
    question: Which of the following implementations of Catalan numbers has the smallest time complexity?
    options:
      - Dynamic programming
      - Binomial coefficients
      - Recursion
      - All have equal time complexity
    answer: 1
    explanation: Binomial coefficients is the correct answer to “Which of the following implementations of Catalan numbers has the smallest time complexity”. This question is standard in competitive examination syllabi for Dynamic Programming In Data Structures.
    keyConcept: Dynamic Programming In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 32
    question: The longest increasing subsequence problem is a problem to find the length of a subsequence from a sequence of array elements such that the subsequence is sorted in increasing order and it's length is maximum. This problem can be solved using . . . . . . . .
    options:
      - Recursion
      - Dynamic programming
      - Brute force
      - Recursion, Dynamic programming, Brute force
    answer: 3
    explanation: Recursion, Dynamic programming, Brute force is the correct answer to “The longest increasing subsequence problem is a problem to find the length of a subsequence from a sequence of array elements such that the subsequence is sorted in increasing order and it's length is maximum. This problem can be solved using . . . . . . . .”. This question is standard in competitive examination syllabi for Dynamic Programming In Data Structures.
    keyConcept: Dynamic Programming In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 33
    question: "What is the space complexity of the following for loop method used to compute the nth fibonacci term? int fibo(int n) if n == 0 return 0 else prevFib = 0 curFib = 1 for i : 1 to n-1 nextFib = prevFib + curFib prevFib = curFib curFib = nextFib return curFib"
    options:
      - O(1)
      - O(n)
      - O(n2)
      - Exponential
    answer: 0
    explanation: "O(1) is the correct answer to “What is the space complexity of the following for loop method used to compute the nth fibonacci term? int fibo(int n) if n == 0 return 0 else prevFib = 0 curFib = 1 for i : 1 to n-1 nextFib = prevFib + curFib prevFib = curFib curFib = nextFib return curFib”. This question is standard in competitive examination syllabi for Dynamic Programming In Data Structures."
    keyConcept: Dynamic Programming In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 34
    question: The 0-1 Knapsack problem can be solved using Greedy algorithm.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “The 0-1 Knapsack problem can be solved using Greedy algorithm.”. This question is standard in competitive examination syllabi for Dynamic Programming In Data Structures.
    keyConcept: Dynamic Programming In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 35
    question: Consider a variation of the balanced partition problem in which we find two subsets such that |S1 - S2| is minimum. Consider the array {1, 2, 3, 4, 5}. Which of the following pairs of subsets is an optimal solution for the above problem?
    options:
      - "{5, 4} & {3, 2, 1}"
      - "{5} & {4, 3, 2, 1}"
      - "{4, 2} & {5, 3, 1}"
      - "{5, 3} & {4, 2, 1}"
    answer: 3
    explanation: "{5, 3} & {4, 2, 1} is the correct answer to “Consider a variation of the balanced partition problem in which we find two subsets such that |S1 - S2| is minimum. Consider the array {1, 2, 3, 4, 5}. Which of the following pairs of subsets is an optimal solution for the above problem”. This question is standard in competitive examination syllabi for Dynamic Programming In Data Structures."
    keyConcept: Dynamic Programming In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 36
    question: Consider the expression T | F ∧ T. In how many ways can the expression be parenthesized so that the output is F (false)?
    options:
      - "0"
      - "1"
      - "2"
      - "3"
    answer: 1
    explanation: 1 is the correct answer to “Consider the expression T | F ∧ T. In how many ways can the expression be parenthesized so that the output is F (false)”. This question is standard in competitive examination syllabi for Dynamic Programming In Data Structures.
    keyConcept: Dynamic Programming In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 37
    question: "What is the output of the following code? #include<stdio.h> #include<string.h> int get_min(int a, int b) { if(a < b) return a; return b; } int edit_distance(char *s1, char *s2) { int len1,len2,i,j,min; len1 = strlen(s1); len2 = strlen(s2); int arr[len1 + 1][len2 + 1]; for(i = 0;i <= len1; i++) arr[i][0] = i; for(i = 0; i <= len2; i++) arr[0][i] = i; for(i = 1; i <= len1; i++) { for(j = 1; j <= len2; j++) { min = get_min(arr[i-1][j],arr[i][j-1]) + 1; if(s1[i - 1] == s2[j - 1]) { if(arr[i-1][j-1] < min) min = arr[i-1][j-1]; } else { if(arr[i-1][j-1] + 1 < min) min = arr[i-1][j-1] + 1; } arr[i][j] = min; } } return arr[len1][len2]; } int main() { char s1[] = \"abcd\", s2[] = \"defg\"; int ans = edit_distance(s1, s2); printf(\"%d\",ans); return 0; }"
    options:
      - "1"
      - "2"
      - "3"
      - "4"
    answer: 3
    explanation: "4 is the correct answer to “What is the output of the following code? #include<stdio.h> #include<string.h> int get_min(int a, int b) { if(a < b) return a; return b; } int edit_distance(char *s1, char *s2) { int len1,len2,i,j,min; len1 = strlen(s1); len2 = strlen(s2); int arr[len1 + 1][len2 + 1]; for(i = 0;i <= len1; i++) arr[i][0] = i; for(i = 0; i <= len2; i++) arr[0][i] = i; for(i = 1; i <= len1; i++) { for(j = 1; j <= len2; j++) { min = get_min(arr[i-1][j],arr[i][j-1]) + 1; if(s1[i - 1] == s2[j - 1]) { if(arr[i-1][j-1] < min) min = arr[i-1][j-1]; } else { if(arr[i-1][j-1] + 1 < min) min = arr[i-1][j-1] + 1; } arr[i][j] = min; } } return arr[len1][len2]; } int main() { char s1[] = \"abcd\", s2[] = \"defg\"; int ans = edit_distance(s1, s2); printf(\"%d\",ans); return 0; }”. This question is standard in competitive examination syllabi for Dynamic Programming In Data Structures."
    keyConcept: Dynamic Programming In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 38
    question: When dynamic programming is applied to a problem, it takes far less time as compared to other methods that don't take advantage of overlapping subproblems.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “When dynamic programming is applied to a problem, it takes far less time as compared to other methods that don't take advantage of overlapping subproblems.”. This question is standard in competitive examination syllabi for Dynamic Programming In Data Structures.
    keyConcept: Dynamic Programming In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 39
    question: Consider the string "efge". What is the minimum number of insertions required to make the string a palindrome?
    options:
      - "0"
      - "1"
      - "2"
      - "3"
    answer: 1
    explanation: 1 is the correct answer to “Consider the string "efge". What is the minimum number of insertions required to make the string a palindrome”. This question is standard in competitive examination syllabi for Dynamic Programming In Data Structures.
    keyConcept: Dynamic Programming In Data Structures
    testedIn:
      - PPSC
      - FPSC
  - id: 40
    question: "Consider the following statements and select which of the following statement are true. Statement 1: The maximum sum rectangle can be 1X1 matrix containing the largest element If the matrix size is 1X1 Statement 2: The maximum sum rectangle can be 1X1 matrix containing the largest element If all the elements are zero Statement 3: The maximum sum rectangle can be 1X1 matrix containing the largest element If all the elements are negative"
    options:
      - Only statement 1 is correct
      - Only statement 1 and Statement 2 are correct
      - Only statement 1 and Statement 3 are correct
      - Statement 1, Statement 2 and Statement 3 are correct
    answer: 3
    explanation: "Statement 1, Statement 2 and Statement 3 are correct is the correct answer to “Consider the following statements and select which of the following statement are true. Statement 1: The maximum sum rectangle can be 1X1 matrix containing the largest element If the matrix size is 1X1 Statement 2: The maximum sum rectangle can be 1X1 matrix containing the largest element If all the elements are zero Statement 3: The maximum sum rectangle can be 1X1 matrix containing the largest element If all the elements are negative”. This question is standard in competitive examination syllabi for Dynamic Programming In Data Structures."
    keyConcept: Dynamic Programming In Data Structures
    testedIn:
      - PPSC
      - FPSC
---


