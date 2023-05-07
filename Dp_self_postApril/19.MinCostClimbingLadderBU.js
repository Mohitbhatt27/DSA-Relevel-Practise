// Source : https://leetcode.com/problems/min-cost-climbing-stairs/
function minCostClimbingStairsBU (cost, n) {
    let dp = new Array(n + 1).fill(-1);
    dp[0] = cost[0];
    dp[1] = cost[1];
    for (let i = 2; i < n; i++) {
        dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
    }
    return Math.min(dp[n - 1], dp[n - 2]);
}