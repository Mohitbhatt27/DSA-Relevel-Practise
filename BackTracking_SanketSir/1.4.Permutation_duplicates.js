// Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

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

  let mp = {}; // local mapping for every function call
  for (let i = idx; i < nums.length; i++) {

    if (mp[nums[i]]) {
        continue;
    }

    mp[nums[i]] = true;
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

console.log(uniquePermute([2,2,1,1]));
