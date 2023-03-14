/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  solve(board, 0, 0);
};

function solve(sudoku, row, col) {
  if (row == 9) {
    return true;
  }

  let nextI = row, nextJ = col + 1;
  if (col + 1 == 9) {
    nextI = row + 1;
    nextJ = 0;
  }

  //already placed
  if (sudoku[row][col] != ".") {
    return solve(sudoku, nextI, nextJ);
  }

  for (let n = "1"; n <= "9"; n++) {
    if (isSafe(sudoku, row, col, n)) {
      sudoku[row][col] = String(n);
      if (solve(sudoku, nextI, nextJ)) {
        return true;
      }
      sudoku[row][col] = ".";
    }
  }
  return false;
}

function isSafe(sudoku, row, col, n) {
  //row
  for (let j = 0; j < 9; j++) {
    if (sudoku[row][j] == n) {
      return false;
    }
  }
  //col
  for (let i = 0; i < 9; i++) {
    if (sudoku[i][col] == n) {
      return false;
    }
  }

  //grid
  const sx = Math.floor(row / 3) * 3;
  const sy = Math.floor(col / 3) * 3;
  for (let i = sx; i < sx + 3; i++) {
    for (let j = sy; j < sy + 3; j++) {
      if (sudoku[i][j] == n) {
        return false;
      }
    }
  }
  return true;
}
