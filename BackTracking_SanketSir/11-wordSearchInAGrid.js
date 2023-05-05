function wordSearch(grid, word) {
  let row = grid.length;
  let col = grid[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === word[0]) {
        if (search(grid, word, i, j, 0)) {
          return true;
        }
      }
    }
  }
  return false;
}

function search(grid, word, row, col, index) {
  if (index === word.length) {
    return true;
  }
  if (
    row < 0 ||
    col < 0 ||
    row === grid.length ||
    col === grid[0].length ||
    grid[row][col] !== word[index]
  ) {
    return false;
  }

  let ch = grid[row][col];
  grid[row][col] = '*';
  let call1 = search(grid, word, row + 1, col, index + 1);
  let call2 = search(grid, word, row, col + 1, index + 1);
  let call3 = search(grid, word, row - 1, col, index + 1);
  let call4 = search(grid, word, row, col - 1, index + 1);
  grid[row][col] = ch; // backtrack;
  return call1 || call2 || call3 || call4;
}

let board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
];
let word = 'ABCCED';

console.log(wordSearch(board, word)); // true
