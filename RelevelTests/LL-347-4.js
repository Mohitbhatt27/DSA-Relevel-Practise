// Given a 1-indexed m x n integer matrix mat, you can select any cell in the matrix as your starting cell.

// From the starting cell, you can move to any other cell in the same row or column, but only if the value of the destination cell is strictly greater than the value of the current cell. You can repeat this process as many times as possible, moving from cell to cell until you can no longer make any moves.

// Your task is to find the maximum number of cells that you can visit in the matrix by starting from some cell.

// Return an integer denoting the maximum number of cells that can be visited.

// Input: mat = [[3,1],[3,4]]
// Output: 2

// Input: mat = [[1,1],[1,1]]
// Output: 1
// Explanation: Since the cells must be strictly increasing, we can only visit one cell in this example. 

// Input: mat = [[3,1,6],[-9,5,7]]
// Output: 4
// Explanation: The image above shows how we can visit 4 cells starting from row 2, column 1. It can be shown that we cannot visit more than 4 cells no matter where we start from, so the answer is 4. 

// Constraints:

// m == mat.length 
// n == mat[i].length 
// 1 <= m, n <= 10^5
// 1 <= m * n <= 10^5
// -10^5 <= mat[i][j] <= 10^5


var maxIncreasingCells = function (mat) {
  let r = mat.length;
  let c = mat[0].length;
  let dp = Array.from(Array(r), () => new Array(c).fill(1));
  let ans = 1;
  let arr = [];
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      arr.push([i, j]);
    }
  }

  arr.sort((a, b) => mat[a[0]][a[1]] - mat[b[0]][b[1]]);
  for (let [i, j] of arr) {
    for (let k = 0; k < r; k++) {
      if (mat[k][j] < mat[i][j]) {
        dp[i][j] = Math.max(dp[i][j], dp[k][j] + 1);
      }
    }
    for (let k = 0; k < c; k++) {
      if (mat[i][k] < mat[i][j]) {
        dp[i][j] = Math.max(dp[i][j], dp[i][k] + 1);
      }
    }
    ans = Math.max(ans, dp[i][j]);
  }
  return ans;
};


