/**
 * You have an infinite supply of coins, each having some value.
 * Find out the minimum number of coins required to get the desired value.
 *
 * Example:
 * Input: coins[] = {25, 10, 5}, V = 30
 * Output: Minimum 2 coins required
 */

function minCoinTD(arr, dp, val) {
  /**
   * TC: O(n*val)
   * SC: O(val)
   */
  if (val == 0) return 0;
  if (dp[val] != 0) return dp[val];
  let ans = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (val - arr[i] < 0) continue;
    let ansSubproblem = minCoinTD(arr, dp, val - arr[i]);
    ans = Math.min(ans, ansSubproblem);
  }
  return (dp[val] = 1 + ans);
}

console.log(minCoinTD([9, 5, 5, 4], new Array(33).fill(0), 32));
