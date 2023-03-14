// Given a set of non-negative integers, and a value sum, determine if there is a subset of the given set with sum equal to given sum. 
// Input: set[] = {3, 34, 4, 12, 5, 2}, sum = 9
// Output: True  
// There is a subset (4, 5) with sum 9.

class Solution {
  isSubsetSum(arr, n, sum) {
    let dp = Array(n + 1).fill().map(() => Array(sum + 1).fill(false));

    for (let i = 0; i < dp.length; i++) {
      for (let j = 0; j < dp[0].length; j++) {
        if (j == 0) {
          dp[i][j] = true;
        }
        if (i == 0 && j != 0) {
          dp[i][j] = false;
        }
      }
    }

    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= sum; j++) {
        if (arr[i - 1] <= j) {
          //here we have option to take or not take
          dp[i][j] = dp[i - 1][j - arr[i - 1]] || dp[i - 1][j];
        } else {
          //here we don't have the option only
          dp[i][j] = dp[i - 1][j];
        }
      }
    }

    return dp[n][sum];
  }
}