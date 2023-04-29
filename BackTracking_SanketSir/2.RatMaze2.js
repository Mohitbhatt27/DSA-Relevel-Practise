process.stdin.resume();
process.stdin.setEncoding('utf-8');
let ans;
let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');
  // press ctrl+d in the terminal and then your main function will be executed automatically
  main();
});

function readLine() {
  return inputString[currentLine++];
}

function readNumberArray() {
  let input = readLine(); // 1 2 3 4 5
  input = input.split(' '); // ['1', '2', '3', '4', '5']
  input = input.map((value) => Number(value)); // [1,2,3,4,5]
  return input;
}

function readNumber() {
  return Number(readLine());
}

function main() {
  ans = 0;
  let n = readNumber();
  let grid = [];
  for (let i = 0; i < n; i++) {
    grid.push(readNumberArray());
  }
  f(grid, n, 0, 0);
  return ans;
}

function f(grid, n, row, col) {
  if (
    row < 0 ||
    col < 0 ||
    row >= n ||
    col >= n ||
    grid[row][col] == 1 ||
    grid[row][col] == -1
  ) {
    return;
  }

  if (row == n - 1 && col == n - 1 && grid[row][col] != 1) {
    ans++;
    return;
  }

  grid[row][col] = -1;
  f(grid, n, row, col - 1);
  f(grid, n, row, col + 1);
  f(grid, n, row - 1, col);
  f(grid, n, row + 1, col);
  grid[row][col] = 0;
}
