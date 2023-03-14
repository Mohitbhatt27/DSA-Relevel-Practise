var isValidSudoku = function (board) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (
        board[row][col] != "." &&
        !isValid(board, row, col, board[row][col])
      ) {
        return false;
      }
    }
  }
  return true;
};

function isValid(sudoku, row, col, n) {
  //row
  for (let j = 0; j < 9; j++) {
    if (j == col) continue; //skip
    if (sudoku[row][j] == n) {
      return false;
    }
  }
  //col
  for (let i = 0; i < 9; i++) {
    if (i == row) continue; //skip
    if (sudoku[i][col] == n) {
      return false;
    }
  }

  //grid
  const sx = Math.floor(row / 3) * 3;
  const sy = Math.floor(col / 3) * 3;
  for (let i = sx; i < sx + 3; i++) {
    for (let j = sy; j < sy + 3; j++) {
      if (i == row && j == col) continue; //skip
      if (sudoku[i][j] == n) {
        return false;
      }
    }
  }
  return true;
}
