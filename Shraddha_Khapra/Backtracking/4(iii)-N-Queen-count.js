var totalNQueens = function (n) {
  let count = 0;
  let board = new Array(n);
  for (let i = 0; i < n; i++) {
    board[i] = new Array(n).fill(".");
  }

  var result = [];

  var isSafe = function (row, col) {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
    }
    //check for up left
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") return false;
    }
    //check for up right
    for (let i = row - 1, j = col + 1; i >= 0 && j <= n - 1; i--, j++) {
      if (board[i][j] === "Q") return false;
    }
    return true;
  };

  var nQueen = function (row) {
    if (row === n) {
      count++;
      return;
    }
    for (var col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        board[row][col] = "Q";
        nQueen(row + 1);
        board[row][col] = ".";
      }
    }
  };
  nQueen(0);
  return count;
};
