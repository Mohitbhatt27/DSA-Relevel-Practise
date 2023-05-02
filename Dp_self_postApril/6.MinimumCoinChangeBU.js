function minCoinBU(arr, val) {
  let dp = new Array(val + 1).fill(0);
  dp[0] = 0;
  for (let n = 1; n <= val; n++) {
    // n is current val
    dp[n] = Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > n) continue;
      let ansSubproblem = dp[n - arr[i]];
      dp[n] = Math.min(dp[n], ansSubproblem + 1);
    }
  }
  return dp[val];
}

console.log(minCoinBU([9, 5, 5, 4], 32));
