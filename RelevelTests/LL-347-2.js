// Given a 0-indexed 2D grid of size m x n, you should find the matrix answer of size m x n.

// The value of each cell (r, c) of the matrix answer is calculated in the following way:

// Let topLeft[r][c] be the number of distinct values in the top-left diagonal of the cell (r, c) in the matrix grid.
// Let bottomRight[r][c] be the number of distinct values in the bottom-right diagonal of the cell (r, c) in the matrix grid.
// Then answer[r][c] = |topLeft[r][c] - bottomRight[r][c]|.

// Return the matrix answer.

// A matrix diagonal is a diagonal line of cells starting from some cell in either the topmost row or leftmost column and going in the bottom-right direction until reaching the matrix's end.

// A cell (r1, c1) belongs to the top-left diagonal of the cell (r, c), if both belong to the same diagonal and r1 < r. Similarly is defined bottom-right diagonal.

// Example 1:

// Input: grid = [[1,2,3],[3,1,5],[3,2,1]]
// Output: [[1,1,0],[1,0,1],[0,1,1]]
// Explanation: The 1st diagram denotes the initial grid.
// The 2nd diagram denotes a grid for cell (0,0), where blue-colored cells are cells on its bottom-right diagonal.
// The 3rd diagram denotes a grid for cell (1,2), where red-colored cells are cells on its top-left diagonal.
// The 4th diagram denotes a grid for cell (1,1), where blue-colored cells are cells on its bottom-right diagonal and red-colored cells are cells on its top-left diagonal.
// - The cell (0,0) contains [1,1] on its bottom-right diagonal and [] on its top-left diagonal. The answer is |1 - 0| = 1.
// - The cell (1,2) contains [] on its bottom-right diagonal and [2] on its top-left diagonal. The answer is |0 - 1| = 1.
// - The cell (1,1) contains [1] on its bottom-right diagonal and [1] on its top-left diagonal. The answer is |1 - 1| = 0.
// The answers of other cells are similarly calculated.
// Example 2:

// Input: grid = [[1]]
// Output: [[0]]
// Explanation: - The cell (0,0) contains [] on its bottom-right diagonal and [] on its top-left diagonal. The answer is |0 - 0| = 0.

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
function differenceOfDistinctValues(grid) {
  function f(grid, i, j, set1) {
    if (i < 0 || j < 0) {
      return;
    }
    set1.add(grid[i][j]);
    f(grid, i - 1, j - 1, set1);
  }

  function f1(grid, i, j, set2, m, n) {
    if (i >= m || j >= n) {
      return;
    }
    set2.add(grid[i][j]);
    f1(grid, i + 1, j + 1, set2, m, n);
  }

  let s1 = new Set();
  let s2 = new Set();
  let m = grid.length;
  let n = grid[0].length;
  let ans = Array.from({ length: m }, () => Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      f(grid, i - 1, j - 1, s1);
      f1(grid, i + 1, j + 1, s2, m, n);
      ans[i][j] = Math.abs(s1.size - s2.size);
      s1.clear();
      s2.clear();
    }
  }

  return ans;
}

console.log(differenceOfDistinctValues([[1,2,3],[3,1,5],[3,2,1]]));
console.log(differenceOfDistinctValues([[1]]));