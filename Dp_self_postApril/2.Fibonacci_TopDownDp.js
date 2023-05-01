// we will maintain an array for overlapping suproblems -> Recursion + Memoization

function fibo(n, dp) {
  if (n <= 1) return n;
  // lookup
  if (dp[n] != -1) return dp[n];
  dp[n] = fibo(n - 1, dp) + fibo(n - 2, dp);
  return dp[n];
}

function fib(n) {
  /**
   * TC : O(n)
   * SC : O(n)
   */
  let dp = new Array(n + 1).fill(-1);
  return fibo(n, dp);
}

console.log(fib(192));
