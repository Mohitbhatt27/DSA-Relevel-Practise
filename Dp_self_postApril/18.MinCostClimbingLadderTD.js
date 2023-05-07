// https://leetcode.com/problems/min-cost-climbing-stairs/

var minCostClimbingStairs = function (cost) {
  let n = cost.length;
  let dp = new Array(n + 1).fill(-1);
  let ans = Math.min(f(cost, n - 1, dp), f(cost, n - 2, dp));
  return ans;
};

function f(cost, n, dp) {
  if (n == 0) {
    return cost[0];
  }
  if (n == 1) {
    return cost[1];
  }
  if (dp[n] != -1) {
    return dp[n];
  }
  dp[n] = cost[n] + Math.min(f(cost, n - 1, dp), f(cost, n - 2, dp));
  return dp[n];
}
