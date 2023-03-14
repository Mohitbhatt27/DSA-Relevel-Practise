let grid = [
  [0, 1, 1, 1],
  [0, 0, 1, 0],
  [1, 0, 0, 0],
  [0, 0, 0, 0],
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
  let paths = [];
  let ans = countWays(grid.length, 0, 0, paths, "");
  console.log("Number of ways:", ans);
  console.log("All possible paths:", paths);
}

function countWays(n, i, j, paths, path) {
  if (i == n - 1 && j == n - 1) {
    // Destination reached, add the current path to the list of all paths
    paths.push(path);
    return 1;
  }
  if (i >= n || j >= n) return 0;

  vis[i][j] = true;

  let ans = 0;
  if (isSafe(n, i + 1, j)) ans += countWays(n, i + 1, j, paths, path + "D");
  if (isSafe(n, i - 1, j)) ans += countWays(n, i - 1, j, paths, path + "U");
  if (isSafe(n, i, j + 1)) ans += countWays(n, i, j + 1, paths, path + "R");
  if (isSafe(n, i, j - 1)) ans += countWays(n, i, j - 1, paths, path + "L");

  vis[i][j] = false;
  return ans;
}

solve();
