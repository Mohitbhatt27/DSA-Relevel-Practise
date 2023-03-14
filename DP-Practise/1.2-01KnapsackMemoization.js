let dp = new Array(102).fill(-1).map(() => new Array(1002).fill(-1));

function knapsack(capacity, weights, values, n) {
  if (n == 0 || capacity == 0) {
    return 0;
  }

  if(dp[n][capacity]!=-1){
    return dp[n][capacity];
  }

  if (weights[n - 1] > capacity) {
    return (dp[n][capacity] = knapsack(capacity, weights, values, n - 1));
  } else {
    return (dp[n][capacity] = Math.max(
      values[n - 1] +
        knapsack(capacity - weights[n - 1], weights, values, n - 1),
      knapsack(capacity, weights, values, n - 1)
    ));
  }
}

const capacity = 50;
const weights = [10, 20, 30];
const values = [60, 100, 120];
const n = values.length;

const result = knapsack(capacity, weights, values, n);
console.log(result); // Output: 220
