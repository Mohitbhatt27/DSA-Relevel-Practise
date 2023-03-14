/**
 * Using DNC find the maximum subarray sum
 * Given an integer array nums, find the subarray
 with the largest sum, and return its sum.
 Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
 *
 */


var maxSubArray = function (nums) {
  return f(nums, 0, nums.length - 1);
};
function f(nums, left, right) {
  if (left === right) {
    return nums[left];
  }
  let mid = Math.floor((left + right) / 2);
  let leftSum = f(nums, left, mid);
  let rightSum = f(nums, mid + 1, right);

  /*Maximum subarray sum such that the subarray crosses the midpoint
    We can easily find the crossing sum in linear time.
    Find the maximum sum starting from mid point and ending at some point on left of mid, 
    then find the maximum sum starting from mid + 1 
    and ending with some point on right of mid + 1. 
    Finally, combine the two and return the maximum among left, right and combination of both.
*/
  let crosssum = nums[mid];
  let temp = crosssum;
  for (let i = mid - 1; i >= left; i--) {
    temp += nums[i];
    crosssum = Math.max(temp, crosssum);
  }
  temp = crosssum;
  for (let j = mid + 1; j <= right; j++) {
    temp += nums[j];
    crosssum = Math.max(temp, crosssum);
  }

  return Math.max(leftSum, rightSum, crosssum);
}
