let grid = [
[0, 1, 1, 1 ],
[0, 0, 1, 0 ],
[1, 0, 0, 0 ],
[0, 0, 0, 0 ]
];

let vis = [];
function isSafe(n, i, j) {
  return (
    i >= 0 && j >= 0 && i < n && j < n && grid[i][j] == 0 && vis[i][j] == false
  );
}

function solve() {
  for (let i = 0; i < grid.length; i++) {
    let arr = Array(grid[i].length).fill(false);
    vis.push(arr);
  }
  let ans = countWays(grid.length,0, 0);
  console.log(ans);
}

function countWays(n, i, j) {
  if (i == n - 1 && j == n - 1) return 1;
  if (i >= n || j >= n) return 0;

  vis[i][j] = true;

  let ans = 0;
  if (isSafe(n, i + 1, j)) ans += countWays(n, i + 1, j);
  if (isSafe(n, i - 1, j)) ans += countWays(n, i - 1, j);
  if (isSafe(n, i, j + 1)) ans += countWays(n, i, j + 1);
  if (isSafe(n, i, j - 1)) ans += countWays(n, i, j - 1);

  vis[i][j] = false;
  return ans;
}

solve();
