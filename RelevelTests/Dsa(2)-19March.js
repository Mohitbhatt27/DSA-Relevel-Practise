
function maxSubarraySum(nums, n, k) {
  let maxSum = 0;
  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  maxSum = windowSum;

  for (let i = k; i < nums.length; i++) {
    windowSum += nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

let arr = prompt('Enter the array of integers separated by commas:')
  .split(',')
  .map(Number);

let k = parseInt(prompt('Enter the value of k:'));
/* Driver program to test above function */
let n = arr.length;
document.write(maxSubarraySum(arr, n, k));

// Write a JavaScript function maxSubarraySym(nums, k) that takes the array nums and the integer k as input and returns the maximum sum of any contiguous subarray of size k in nums.

// You may assume that the input array nums has at least k elements and that all elements are non-negative. Note: approach should have a time complexity of O(n), and a space complexity of O(1).

// Input format: First line contains the list of integers Second line will be value of k

// Sample Input: nums = [1, 4, 2, 10, 2, 3, 1, 0, 20] k = 4 Output: 24
