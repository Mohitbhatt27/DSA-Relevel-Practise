var canPartition = function (nums) {
  //if the sum of the array is odd, we can initially return false
  let sum = nums.reduce((a, b) => a + b);
  if (sum % 2 != 0) {
    return false;
  }
  //now we just need to find 1 (not 2) subset with sum = sum/2
  sum = sum / 2;
  return isSubsetSum(nums, nums.length, sum);
};

function isSubsetSum(arr, n, sum) {
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
