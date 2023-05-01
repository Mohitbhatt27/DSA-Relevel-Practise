// Given a number and we have to convert it into 1 by performing following operations:
// 1. If n is even then n = n/2
// 2. If n is divisible by 3 then n = n/3
// 3. n = n-1
// we need to calculate minimum number of steps to reach 1.

function minStepsTD(n, dp) {
  if (n == 1) return 0;
  // lookup
  if (dp[n] != 0) return dp[n];

  let x, y, z;
  x = y = z = Infinity;

  if (n % 3 == 0) {
    x = minStepsTD(n / 3, dp);
  }
  if (n % 2 == 0) {
    y = minStepsTD(n / 2, dp);
  }
  z = minStepsTD(n - 1, dp);

  let ans = 1 + Math.min(x, y, z);
  return (dp[n] = ans); // same as return ans;
}

function minStepsBU(n) {
  let dp = new Array(n + 1).fill(0);
  dp[1] = 0;

  for (let i = 2; i <= n; i++) {
    let x = i % 3 == 0 ? dp[i / 3] : Infinity;
    let y = i % 2 == 0 ? dp[i / 2] : Infinity;
    let z = dp[i - 1];
    dp[i] = 1 + Math.min(x, y, z);
  }

  return dp[n];
}

console.log(minStepsTD(35, new Array(36).fill(0)));
console.log(minStepsBU(35));