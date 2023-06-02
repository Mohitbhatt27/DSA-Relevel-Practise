/**
 * Write an efficient algorithm to search a value in a 2D matrix in which the rows are in sorted order
 * and the first integer of each row is greater than the last integer of the previous row.
 */

function search2DMatrix(matrix, target) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return false;
  }

  let m = matrix.length;
  let n = matrix[0].length;

  let left = 0;
  let right = m * n - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let midValue = matrix[Math.floor(mid / n)][mid % n];

    if (midValue === target) {
      return true;
    } else if (midValue < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}
let matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 50],
];

console.log(search2DMatrix(matrix, 3)); // prints true
console.log(search2DMatrix(matrix, 13)); // prints false

/**
 * Find the row index which has maximum no. of unique elements in a matrix efficiently.
 */

function findMaxUniqueRow(matrix) {
  if (!matrix || matrix.length === 0) {
    return -1;
  }

  let maxUniqueElements = -1;
  let maxUniqueRowIndex = 0;

  for (let i = 0; i < matrix.length; i++) {
    let uniqueElements = 0;
    let elementCounts = {};

    for (let j = 0; j < matrix[i].length; j++) {
      if (!elementCounts[matrix[i][j]]) {
        uniqueElements++;
        elementCounts[matrix[i][j]] = 1;
      }
    }

    if (uniqueElements > maxUniqueElements) {
      maxUniqueElements = uniqueElements;
      maxUniqueRowIndex = i;
    } else if (uniqueElements === maxUniqueElements) {
      maxUniqueRowIndex = i;
    }
  }

  return maxUniqueRowIndex;
}

let matrix1 = [
  [1, 2, 3, 4],
  [1, 2, 2, 3],
  [4, 4, 4, 4],
  [5, 6, 7, 8],
];

console.log(findMaxUniqueRow(matrix1)); // prints 3
