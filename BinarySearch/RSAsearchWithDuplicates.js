var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] == target) return true;

    if (nums[start] == nums[mid]) {
      //skip duplicates
      start++;
    } else if (nums[start] < nums[mid]) {
      // If the first half is sorted, perform binary search in the first half
      if (nums[start] <= target && target < nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      // If the first half is not sorted, perform binary search in the second half
      if (nums[mid] < target && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return false;
};
