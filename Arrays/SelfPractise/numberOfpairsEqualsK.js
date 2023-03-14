//Subarray Sum Equals K, leetcode 560


function findSubarraysWithSum(nums, k) {
    let count = 0;
  
    // Create an array to store the running sums and their counts
    const sums = [];
    sums[0] = 1;
  
    // Initialize the running sum variable
    let runningSum = 0;
  
    // Loop through the array and find the subarrays with sum equal to k
    for (let i = 0; i < nums.length; i++) {
      // Update the running sum
      runningSum += nums[i];
  
      // Check if the difference between the running sum and k is in the array
      // If it is, increment the count by the number of times that sum has occurred
      if (sums[runningSum - k] !== undefined) {
        count += sums[runningSum - k];
      }
  
      // Update the count for the current sum in the array
      if (sums[runningSum] !== undefined) {
        sums[runningSum]++;
      } else {
        sums[runningSum] = 1;
      }
    }
  
    // Return the number of subarrays with sum equal to k
    return count;
  }

  let arr=[1,2,3]
  let k = 3;
  console.log(findSubarraysWithSum(arr,k));