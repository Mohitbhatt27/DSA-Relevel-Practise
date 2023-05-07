/**
 * Given an integer array nums, find the subarray with the largest sum, and return its sum.
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
 */

/**
 * We can ofc use prefix sum to find the sum of all subarrays in O(n^2) time, but that's not what we want.
 */

/**
 *
 * In DP, we will maintain a state which will store maximum sum of subarray ending at index i.
 *
 * We need to keep track of Maximum so far, and sum till the Ith index, if we include the ith index.
 *
 */

function maxSubarraySum(nums) {
  let dp = new Array(nums.length).fill(0);
  dp[0] = nums[0] > 0 ? nums[0] : 0;
  // as it does not make sense to include a negative number in the subarray sum.

  let max_so_far = dp[0];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = dp[i - 1] + nums[i];

    // if ant any point, the sum becomes negative, we need to reset it to 0, as we already have some before that value, and for further calculations, we need to start fresh, as this current value, which made the sum negative, will also reduce the further subarray.

    if (dp[i] < 0) {
      dp[i] = 0;
    }

    max_so_far = Math.max(max_so_far, dp[i]);
  }
  return max_so_far;
}

console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
