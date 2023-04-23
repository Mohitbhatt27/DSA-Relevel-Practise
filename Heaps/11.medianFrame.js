/**
Requirements: "1. You have an array. And a frame of length x. You have to slide that frame on the array and find the median
in each frame.
I/P: nums = [1,3,-1,-3,5,3,6,7], x = 3
O/P: [1.00000,-1.00000,-1.00000,3.00000,5.00000,6.00000]
Explanation:
[1 3 -1] -3 5 3 6 7 1
1 [3 -1 -3] 5 3 6 7 -1
1 3 [-1 -3 5] 3 6 7 -1
1 3 -1 [-3 5 3] 6 7 3
1 3 -1 -3 [5 3 6] 7 5
1 3 -1 -3 5 [3 6 7] 6
 */

const medianSlidingWindow = (nums, k) => {
  const arr = [];
  const output = [];
  const isEven = k % 2 === 0;
  const m = k >> 1; // Math.floor(k / 2)

  for (let i = 0; i < nums.length; i++) {
    binaryInsertion(arr, nums[i]); 

    if (arr.length > k) {
      binaryDeletion(arr, nums[i - k]);
    }

    if (arr.length === k) {
      output.push(isEven ? (arr[m - 1] + arr[m]) / 2 : arr[m]); 
    }
  }

  return output;
};

const binaryInsertion = (arr, target) => {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = (left + right) >> 1;

    if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  arr.splice(left, 0, target);
};

const binaryDeletion = (arr, target) => {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = (left + right) >> 1;

    if (target === arr[mid]) {
      arr.splice(mid, 1);
      break;
    } else if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
};

const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const x = 3;
const result = medianSlidingWindow(nums, x);
console.log(result); // [1, -1, -1, 3, 5, 6]
