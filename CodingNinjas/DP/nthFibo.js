function fibo(n) {
  let dp = Array(n).fill(-1);
  let ans = solve(n, dp);
  console.log(ans);
}

function solve(n, dp) {
  if (n == 0 || n == 1) return n;

  let ans1, ans2;
  if (dp[n - 1] == -1) {
    ans1 = solve(n - 1, dp);
    dp[n - 1] = ans1;
  } else {
    ans1 = dp[n - 1];
  }
  if (dp[n - 2] == -1) {
    ans2 = solve(n - 2, dp);
    dp[n - 2] = ans2;
  } else {
    ans2 = dp[n - 2];
  }

  return ans1 + ans2;
}

fibo(5);
fibo(10);
fibo(50);
fibo(500);