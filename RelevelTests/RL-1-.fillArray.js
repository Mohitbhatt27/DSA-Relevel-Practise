/**
 * Q. Fill Array
 * Problem:
 * Antonio is given an array A consiting of N positive integers.
 * Now consider another array B. Initially B has N elements and all these elements are set to zero.
 * Antonio wants to fill array B. For this he can perform following operation any number of times:
 *
 * 1. Choose a prefix of array B and increase all elements of that prefix by 1.
 * 2. More formally, choose a 1<=P<=N, and make B[i] = B[i] + 1 for all 1<=i<=P.
 *
 * Antonio wants elements of array B to be less than or equal to corresponding elements of array A, i.e., B[i] <= A[i] for all 1<=i<=N.
 *
 * Among all possible arrays B, Antonio wants to choose one with the maximum possible sum of elements of array B.
 *
 * Input: First line conatins a single integer N denoting the size of array.
 * Second line contains N space separated integers denoting the elements of array A.
 *
 * Output: Among all the array B that Antonio can form using the given operations, print the maximum possible sum of elements of array B.
 *
 * Constraints: 1<=N<=10^5
 * 1<=A[i]<=10^9
 *
 * Sample Input:
 * 3
 * 2 3 1
 *
 * Sample Output:
 * 5
 *
 * Explanation:
 * Antonio can perform the following operations:
 *
 * 1. Select P = 2, and B becomes [1, 1, 0]. Sum of elements of B is 2.
 *
 * 2. Select P = 3, and B becomes [2, 2, 1]. Sum of elements of B is 5.
 *
 * Now B[1]<=A[1], B[2]<=A[2], and B[3]<=A[3]. So, B = [2, 2, 1] is a valid array.
 *
 */

/*
Fill array
Question Name: Fill array

Problem Statement

Antonio is given an array A consisting of N positive integers.

Now consider another array B. Initially array B has N elements and all these elements are equal to zero. Antonio wants to fill array B. For this he can perform the below operations on it several times:

Choose a prefix of array B and increase all the elements in this prefix by 1.
More formally choose a 1<=P<=N, and make Bi = Bi+1 for all 1<=i<=P.
Antonio wants elements of array B to be less or equal to elements of array A, and hence he performs the operation such that after all the operations are done, Bi<=Ai holds for all 1<=i<=N.

Among all the arrays B that Antonio can form using the given operations, find the maximum possible sum of elements of array B.

Input Format

First line contains a single integer denoting N.
Next line contains N space separated integers denoting the elements of array A.
Output Format

Among all the arrays B that Antonio can form using the given operations, print the maximum possible sum of elements of array B.
Constraints

1<=N<=105
1<=Ai<=109
Sample Input 1

3

2 3 1

Sample Output 1

5

Explanation of Sample 1

Antonio can perform the operations as :

Operation 1 :
Select P = 2, B becomes [1 1 0]
Operation 2 :
Select P=3, B becomes [2 2 1]
Now B1<=A1, B2<=A2 and B3<=A3 holds, and the sum of all elements of array B = 2+2+1 = 5.
*/

function solve(arr, n) {
  let sum = 0;
  let prefix = [];
  prefix[0] = arr[0];

  for (let i = 1; i < n; i++) {
    prefix[i] = Math.min(arr[i], prefix[i - 1]);
  }

  for (let i = 0; i < n; i++) {
    sum += prefix[i];
  }

  return sum;
}

console.log(solve([2, 3, 1], 3)); // 5
console.log(solve([1, 2, 3, 4, 5], 5)); //5
console.log(solve([5, 4, 3, 2, 1], 5)); // 15
console.log(solve([7, 4, 12], 3)); // 15
console.log(solve([5,2,11,4], 4)); // 11
