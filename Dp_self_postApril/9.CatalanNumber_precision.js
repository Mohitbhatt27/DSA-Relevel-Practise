function findCatalan(N) {
  let dp = new Array(N + 1).fill(0n);
  dp[0] = 1n;
  dp[1] = 1n;
  for (let i = 2; i <= N; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] += dp[j] * dp[i - j - 1];
    }
  }
  return dp[N].toString();
}

console.log(findCatalan(54)); // 451959718027953471447609509424;