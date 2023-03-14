/**Given 2D Array. A Magic square is a 2D array having n rows and n columns which 
 * will be having all elements as distinct and the sum of row, column or diagonal is equal to the same number.
You need to check whether that array is a magic square or not. */

function isMagicSquare(square) {
    // Check if the square is a 2D array with n rows and n columns
    if (!Array.isArray(square) || square.length === 0 || !Array.isArray(square[0])) {
        return false;
      }
      const n = square.length;
      // Check if all elements in the square are distinct
      const allElements = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      allElements.add(square[i][j]);
    }
  }
  if (allElements.size !== n * n) {
    return false;
  }
  // Check if the sum of each row, column, and diagonal is the same
  const expectedSum = n * (n * n + 1) / 2;
  for (let i = 0; i < n; i++) {
    let rowSum = 0;
    let colSum = 0;
    for (let j = 0; j < n; j++) {
      rowSum += square[i][j];
      colSum += square[j][i];
    }
    if (rowSum !== expectedSum || colSum !== expectedSum) {
      return false;
    }
  }
  let diagonalSum1 = 0;
  let diagonalSum2 = 0;
  for (let i = 0; i < n; i++) {
    diagonalSum1 += square[i][i];
    diagonalSum2 += square[i][n - i - 1];
  }
  if (diagonalSum1 !== expectedSum || diagonalSum2 !== expectedSum) {
    return false;
  }

  // If all checks pass, return true
  return true;
}

const square1 = [[2, 7, 6], [9, 5, 1], [4, 3, 8]];
console.log(isMagicSquare(square1));

const square2 = [[7, 12, 1, 14], [2, 13, 8, 11], [16, 3, 10, 5], [9, 6, 15, 4]];
console.log(isMagicSquare(square2));

const square3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(isMagicSquare(square3));

const square4 = [[5, 5, 5], [5, 5, 5], [5, 5, 5]];
console.log(isMagicSquare(square4));
