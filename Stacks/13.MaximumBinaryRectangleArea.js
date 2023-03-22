var maximalRectangle = function (matrix) {
  matrix = matrix.map((row) => row.map(Number));

  let maxArea = maxAreaHistogram(matrix[0]);
  let n = matrix.length;
  let m = matrix[0].length;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < m; j++) {
      //do not make any 0 as our base
      if (matrix[i][j] != 0) {
        matrix[i][j] += matrix[i - 1][j];
      }
    }
    let currArea = maxAreaHistogram(matrix[i]);
    maxArea = Math.max(maxArea, currArea);
  }
  return maxArea;
};

function maxAreaHistogram(arr) {
  let leftSmallerIndices = Psi(arr);
  let rightSmallerIndices = Nsi(arr);

  let maxArea = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let currLeftSmaller = leftSmallerIndices[i];
    let currRightSmaller =
      rightSmallerIndices[i] == -1 ? arr.length : rightSmallerIndices[i];
    let currWidth = currRightSmaller - currLeftSmaller - 1;
    let currArea = currWidth * arr[i];
    maxArea = Math.max(maxArea, currArea);
  }
  return maxArea;
}

function Psi(nums) {
  nums.reverse();
  let stack = [];
  let result = Array(nums.length).fill(-1);
  stack.push(0);

  for (let i = 1; i < nums.length; i++) {
    let next = nums[i];

    while (stack.length > 0 && next < nums[stack[stack.length - 1]]) {
      let topIndex = stack.pop();

      result[topIndex] = nums.length - i - 1; //imp
    }

    stack.push(i);
  }
  nums.reverse(); //imp to reverse back our original array
  return result.reverse();
}

function Nsi(nums) {
  let stack = [];
  let result = Array(nums.length).fill(-1);
  stack.push(0);

  for (let i = 1; i < nums.length; i++) {
    let next = nums[i];
    //only change from nge is the < sign instead of >
    while (stack.length > 0 && next < nums[stack[stack.length - 1]]) {
      let topIndex = stack.pop();

      result[topIndex] = i;
    }

    stack.push(i);
  }
  return result;
}
