// Given a 3X3 Tic Tac Toe Board, find a configuration such that you place 6 X's back to back, but you have still not won the game.

function isItSafeToPlaceInThatRow(board, row, col) {
  // check row
  let rowCount = 0;
  for (let i = 0; i < 3; i++) {
    if (board[row][i] == 'X') {
      rowCount++;
    }
  }
  if (rowCount <= 1) {
    return true;
  }
  return false;
}

function isItSafeToPlaceInThatCol(board, row, col) {
  // check col
  let colCount = 0;
  for (let i = 0; i < 3; i++) {
    if (board[i][col] == 'X') {
      colCount++;
    }
  }
  if (colCount <= 1) {
    return true;
  }
  return false;
}

function isItSafeToPlaceInFirstDiagonal(board, row, col) {
  // check diagonal
  let diagonalCount = 0;
  for (let i = 0; i < 3; i++) {
    if (board[i][i] == 'X') {
      diagonalCount++;
    }
  }
  if (diagonalCount <= 1) {
    return true;
  }
  return false;
}

function isItSafeToPlaceInSecondDiagonal(board, row, col) {
  // check other diagonal
  let rightDiagnolCount = 0;
  for (let i = 0; i < 3; i++) {
    if (board[i][2 - i] == 'X') {
      rightDiagnolCount++;
    }
  }
  if (rightDiagnolCount <= 1) {
    return true;
  }
  return false;
}

function isItSafeToPlace(board, row, col) {
  return (
    isItSafeToPlaceInThatRow(board, row, col) &&
    isItSafeToPlaceInThatCol(board, row, col) &&
    isItSafeToPlaceInFirstDiagonal(board, row, col) &&
    isItSafeToPlaceInSecondDiagonal(board, row, col)
  );
}

function printBoard(board) {
  for (let i = 0; i < 3; i++) {
    console.log(board[i]);
  }
}

function placeX(board, row, col, noOfX) {
  if (noOfX == 6) {
    printBoard(board);
    return;
  }

  if (col == 3) {
    row++; // if col is 3, then go to next row
    col = 0; // refresh column
  }

  if (row == 3) {
    return;
  }

  if (isItSafeToPlace(board, row, col)) {
    board[row][col] = 'X'; // place X
    placeX(board, row, col + 1, noOfX + 1);
    board[row][col] = '-'; // backtrack
  }
  placeX(board, row, col + 1, noOfX);
}

function solve() {
  let board = [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-'],
  ];
  placeX(board, 0, 0, 0);
}

solve();
