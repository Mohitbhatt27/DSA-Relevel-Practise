/**
 * Given a floor of size n x m. Find the number of ways to tile the floor with tiles of size 1 x m . Print answer for every test case in a new line modulo 10^9+7.
 */

/**
 * There can be three cases:
 * 1. if m>n, then we can only place tile parallel to m axis, so there is only one way.
 * 2. if m=n, then we can place tile parallel to m axis or n axis, so there are two ways.
 * 3. if n>m, then we can place one tile parallel to m axis, and since the breadth of tile is 1, we will 
 * f(n) = f(n-1) + f(n-m)
 
*/

function tiling(n, m) {
  if (n < m) return 1;
  if (n === m) return 2;
  return tiling(n - 1, m) + tiling(n - m, m);
}

console.log(tiling(4, 3)); //3

let modulo = 1000000007;
function tilingBU(n, m) {
  let dp = new Array(n + 1).fill(0);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    // i is current n
    if (i < m) dp[i] = 1;
    else if (i === m) dp[i] = 2;
    else dp[i] = ((dp[i - 1] % modulo) + (dp[i - m] % modulo)) % modulo;
  }
  return dp[n];
}

console.log(tilingBU(4, 3)); //3
