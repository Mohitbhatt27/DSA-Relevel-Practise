/*
Given an integer array nums and an integer k, split nums into k non-empty subarrays such that the largest sum of any subarray is minimized.

Return the minimized largest sum of the split.

A subarray is a contiguous part of the array.
*/

var splitArray = function(nums, k) {

    if (k > nums.length) return false;
    let sum = nums.reduce((total, num) => total + num, 0);
    let max = Math.max(...nums);
    //if there is one partition, then largest sum would be sum of all elem
    //if there are n-1 partition, then largest sum would be max elem
    
    let low = max, high = sum;
    let ans;
    while (low<=high){
        let mid = low + Math.floor((high-low)/2);
        if(largestsumMinimized(nums,k,mid)){
            ans = mid;
            high = mid-1;
        }
        else low = mid+1;
    }
    return ans;
};

function largestsumMinimized(nums,k,mid){
    let n = nums.length;

    let totalPartition= 1, sum = 0;
    for (let i = 0; i < n; i++) {
    sum += nums[i];
    if (sum > mid) {
      //refresh sum and increase allocated elem
      sum = 0;
      totalPartition += 1;
      i -= 1; // done to consider the current element nums[i] in the next partition.
      if (totalPartition > k) {
        return false;
      }
    }
  }
  return true;
}

let nums = [1, 2, 3, 4, 5], k = 2;
console.log(splitArray(nums,k));