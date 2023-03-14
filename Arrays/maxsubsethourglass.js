// An hourglass subset of a matrix is a subset of the matrix that is shaped like an hourglass, with the top and bottom parts being a sequence of adjacent elements and the middle part being a single element. To find the maximum hourglass subset in a binary matrix of size mxm, you can follow these steps:

// Initialize a variable to store the maximum sum to be the minimum possible integer value.
// Iterate over the rows of the matrix, starting from the first row and ending at the row before the last row.
// For each row, iterate over the columns of the matrix, starting from the first column and ending at the column before the last column.
// For each row and column, calculate the sum of the current hourglass subset by adding the elements in the top row, the middle element, and the bottom row.
// Compare the sum of the current hourglass subset with the maximum sum. If the current sum is greater than the maximum sum, update the maximum sum to be the current sum.
// After iterating through all the rows and columns, the maximum sum will be the sum of the maximum hourglass subset.


function maxsumHglass(arr) {
    let length = arr.length;
    let maxsum = 0;
    //starting loop from 1 to get the complete hourglass
    for (let rows = 1; rows < length - 1; rows++) {
      for (let cols = 1; cols < length - 1; cols++) {
        let current_sum = arr[rows-1][cols-1] + arr[rows-1][cols] + arr[rows-1][cols+1] + arr[rows][cols] + arr[rows+1][cols-1] + arr[rows+1][cols] + arr[rows+1][cols+1];
        if(current_sum>=maxsum){
            maxsum=current_sum;
      }
    }
    return maxsum;
  }
}

  let arr=[
    [2,1,1,0,0,0],
    [0,1,0,0,0,0],
    [1,1,1,0,5,0],
    [0,0,0,0,4,0],
    [0,0,0,0,3,0],
    [0,0,0,0,0,0]
];
console.log(maxsumHglass(arr));
  