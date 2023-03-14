function knapsack(capacity, weights, values, n) {
  const dp = new Array(n + 1).fill(0).map(() => new Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= capacity; j++) {
      if (weights[i - 1] <= j) {
        dp[i][j] = Math.max(
          values[i - 1] + dp[i - 1][j - weights[i - 1]],  dp[i - 1][j]
        );
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[n][capacity];
}

const capacity = 50;
const weights = [10, 20, 30];
const values = [60, 100, 120];
const n = values.length;

const result = knapsack(capacity, weights, values, n);
console.log(result); // Output: 220
