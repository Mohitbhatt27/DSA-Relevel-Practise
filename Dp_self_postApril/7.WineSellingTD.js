/**
 * Given a row of n wines, with integers representing the cost of each wine. You can sell the first or last wine in a row every year. The cost of wine, on the other hand, rises over time. Let the initial profits from the wines be P1, P2, P3…Pn. In the Yth year, the profit from the ith wine will be Y*Pi.

The goal is to calculate the maximum profit that can be made by selling all of the wines.

Input: WinePrice: 2 4 6 2 5
Output: 64

price = 2*1 = 2, remaining WinePrice = [ 4, 6, 2, 5 ], Profit = 2
price = 5*2 = 10, remaining WinePrice = [ 4, 6, 2 ], Profit = 12
price = 2*3 = 6, remaining WinePrice = [ 4, 6], Profit = 18
price = 4*4 = 16, remaining WinePrice = [ 6 ], Profit = 34
price = 6*5 = 30, remaining WinePrice = [ ], Profit = 64

*/

/**
 * p[i] -> price of ith wine
 * y -> year
 * i -> start index
 * j -> end index
 *
 * f(i,j,y) -> max profit from ith to jth wine in yth year
 *
 * ans = max (first, last)
 * first -> p[i]*y + f(i+1, j, y+1)
 * last -> p[j]*y + f(i, j-1, y+1)
 */

function maxProfitSellingWine(arr, i, j, year, dp) {
  if (i > j) return 0;

  // lookup
  if (dp[i][j] != 0) return dp[i][j];

  let sellFirst =
    arr[i] * year + maxProfitSellingWine(arr, i + 1, j, year + 1, dp);

  let sellLast =
    arr[j] * year + maxProfitSellingWine(arr, i, j - 1, year + 1, dp);

  return dp[i][j] = Math.max(sellFirst, sellLast);
}

let arr = [2, 4, 6, 2, 5];
let n = arr.length;
let dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
console.log(maxProfitSellingWine(arr, 0, n - 1, 1, dp));
