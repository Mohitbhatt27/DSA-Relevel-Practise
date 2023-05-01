function fiboBU(n) {
  /**
   * TC : O(n)
   * SC : O(n)
   */
  let dp = new Array(n + 1).fill(-1);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}


function fiboBUOptimized(n) {
  /**
   * TC : O(n)
   * SC : O(1)
   */
  let a = 0;
  let b = 1;
  let c;
  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
}