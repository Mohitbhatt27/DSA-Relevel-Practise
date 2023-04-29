// Count the number of ways to place N queens on a NxN chessboard so that no two queens attack each other.

/**
 * 1. Before I place a queen, I need to check if it is safe to place it at that position.
 * 2. We have to place 1 queen in each row.
 *
 */

/**
 *  #Base case -
 *  #Assumption - we manually place 1 queen, and rest of the queens are placed by the function.
 *  #Self Work - check if the spot is safe to place the queen. If yes, then place the queen.
 */

/**
 * Space Complexity - O(n^2) - for the board, as call stack only fills till n.
 * Time Complexity -
 *
 * Recurrence Relation - T(n) = Recursion + isItSafe
 * T(n) = n*T(n-1) + O(n^2)
 *
 * We will make n-1 calls in 2nd row, n-2 calls in 3rd row, n-3 calls in 4th row, and so on.
 *
 * So O(n!) is the time complexity -> tight upper bound.
 *
 * O(n^n) is the upper bound, but it is not tight.
 */

let count = 0;
function countNQueens(board, curr_row, n) {
  if (curr_row == n) {
    count++;
    displayBoard(board);
    return;
  }

  for (let col = 0; col < n; col++) {
    if (isItSafe(board, curr_row, col)) {
      board[curr_row][col] = true;
      countNQueens(board, curr_row + 1, n);
      board[curr_row][col] = false;
    }
  }
}

function isItSafe(board, row, col) {
  // check the column
  for (let i = row - 1; i >= 0; i--) {
    if (board[i][col]) {
      return false;
    }
  }

  // check the left diagonal
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j]) {
      return false;
    }
  }

  // check the right diagonal
  for (let i = row - 1, j = col + 1; i >= 0 && j < board.length; i--, j++) {
    if (board[i][j]) {
      return false;
    }
  }

  return true;
}

function displayBoard(board) {
  for (let i = 0; i < board.length; i++) {
    let str = '';
    for (let j = 0; j < board.length; j++) {
      str += board[i][j] ? 'Q ' : '.';
    }
    console.log(str);
  }
  console.log('\n \n');
}

(function main() {
  let board = new Array(8).fill(false).map(() => new Array(8).fill(false));
  countNQueens(board, 0, 8);
  console.log(count);
})();
