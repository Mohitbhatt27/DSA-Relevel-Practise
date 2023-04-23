/**
You have given a matrix of n*n and it is sorted row-wise and column-wise. You have to find the kth smallest element in the matrix.
Example:
I/P: [[1,5,9],[10,11,13],[12,13,15]], k = 8
O/P: 13
Explanation: [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13
*/

function kthSmallest(matrix, k) {
  let n = matrix.length;
  let low = matrix[0][0];
  let high = matrix[n - 1][n - 1];

  while (low < high) {
    let mid = Math.floor(low + (high - low) / 2);
    let count = countLessThanMid(matrix, mid);
    if (count < k) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
}

function countLessThanMid(matrix, mid) {
    let n = matrix.length;
    let i = n - 1;
    let j = 0;
    let count = 0;
    
    while (i >= 0 && j < n) {
        if (matrix[i][j] <= mid) {
        count += i + 1;
        j++;
        } else {
        i--;
        }
    }
    return count;
}

console.log(kthSmallest([[1,5,9],[10,11,13],[12,13,15]], 8));

