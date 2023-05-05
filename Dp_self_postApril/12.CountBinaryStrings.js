/**
 * Given a positive integer N, count all possible distinct binary strings of length N such that there are no consecutive 1’s.

Examples: 

Input:  N = 2
Output: 3
// The 3 strings are 00, 01, 10

Input: N = 3
Output: 5
// The 5 strings are 000, 001, 010, 100, 101
 */

function countBinaryStrings(N) {
  if (N === 1) return 2;
  if (N === 2) return 3;
  return countBinaryStrings(N - 1) + countBinaryStrings(N - 2);
}

function countBinaryStringsBU(N) {
  let dp = new Array(N + 1).fill(0);
  dp[1] = 2;
  dp[2] = 3;
  for (let i = 3; i <= N; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[N];
}

console.log(countBinaryStrings(11)); // 5
console.log(countBinaryStringsBU(11)); // 5
