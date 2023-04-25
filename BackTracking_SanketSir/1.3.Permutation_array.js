let result;
var uniquePermute = function (nums) {
  result = [];
  uniquePermutations(nums, 0);
  return result;
};

function uniquePermutations(nums, idx) {
  if (nums.length - 1 == idx) {
    result.push([...nums]); // copy of nums
    return;
  }
  for (let i = idx; i < nums.length; i++) {
    swap(nums, i, idx);
    uniquePermutations(nums, idx + 1);
    swap(nums, i, idx);
  }
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
