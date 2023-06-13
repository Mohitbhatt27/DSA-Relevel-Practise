/**
 * Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
Output: 1
Explanation: There is 1 equal row and column pair:
- (Row 2, Column 1): [2,7,7]

Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
Output: 3
Explanation: There are 3 equal row and column pairs:
- (Row 0, Column 0): [3,1,2,2]
- (Row 2, Column 2): [2,4,2,2]
- (Row 3, Column 2): [2,4,2,2]

Constraints:

n == grid.length == grid[i].length
1 <= n <= 200
1 <= grid[i][j] <= 10^5
 */

/**
 * class Solution {
    public int equalPairs(int[][] grid) {
        int count = 0;
        int n = grid.length;

        // Keep track of the frequency of each row.
        Map<String, Integer> rowCounter = new HashMap<>();
        for (int[] row : grid) {
            String rowString = Arrays.toString(row);
            rowCounter.put(rowString, 1 + rowCounter.getOrDefault(rowString, 0));
        }

        // Add up the frequency of each column in map.
        for (int c = 0; c < n; c++) {
            int[] colArray = new int[n];
            for (int r = 0; r < n; ++r) {
                colArray[r] = grid[r][c];
            }
            count += rowCounter.getOrDefault(Arrays.toString(colArray), 0);
        }

        return count;
    }
}
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
function equalPairs(grid) {
  let count = 0;
  const n = grid.length;

  // Keep track of the frequency of each row.
  const rowCounter = new Map();
  for (const row of grid) {
    const rowString = JSON.stringify(row);
    rowCounter.set(rowString, 1 + (rowCounter.get(rowString) || 0));
  }

  // Add up the frequency of each column in map.
  for (let c = 0; c < n; c++) {
    const colArray = new Array(n);
    for (let r = 0; r < n; ++r) {
      colArray[r] = grid[r][c];
    }
    count += rowCounter.get(JSON.stringify(colArray)) || 0;
  }

  return count;
}

console.log(equalPairs([[3,2,1],[1,7,6],[2,7,7]]));
console.log(equalPairs([[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]));

