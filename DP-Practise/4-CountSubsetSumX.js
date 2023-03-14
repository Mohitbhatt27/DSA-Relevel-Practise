  function countSubsetSum(arr, n, sum) {
    let dp = Array(n + 1).fill().map(() => Array(sum + 1).fill(0));

    for (let i = 0; i < dp.length; i++) {
      for (let j = 0; j < dp[0].length; j++) {
        if (j == 0) {
          dp[i][j] = 1;
        }
        if (i == 0 && j != 0) {
          dp[i][j] = 0;
        }
      }
    }

    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= sum; j++) {
        if (arr[i - 1] <= j) {
          //here we have option to take or not take
          dp[i][j] = dp[i - 1][j - arr[i - 1]] + dp[i - 1][j];
        } else {
          //here we don't have the option only
          dp[i][j] = dp[i - 1][j];
        }
      }
    }

    return dp[n][sum];
  }

  let arr = [2,3,5,8,10];
  let n = 5;
  let sum = 10;
  let count = countSubsetSum(arr,n,sum);
  console.log(count);

  