function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);
  let closestSum = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === target) {
        return target;
      }
      //check if sum is closer to target than previous closest sum
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }
      //move pointers towards center to reduce sum or increase sum
      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return closestSum;
}
