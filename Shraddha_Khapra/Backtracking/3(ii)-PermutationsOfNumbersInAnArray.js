var permute = function (nums) {
  let currentPermutation = [];
  let result = [];
  permutations(nums, currentPermutation, result);
  return result;
};

function permutations(nums, currentPermutation, result) {
  if (nums.length == 0) {
    //We can't simply push the currentPermutation array to the result array, because arrays are objects in JavaScript, and objects are passed by reference. If we push currentPermutation to result, any subsequent changes to currentPermutation will also affect the elements in result. To avoid this problem, we create a new array that contains the elements of currentPermutation using the spread operator [...currentPermutation].
    result.push([...currentPermutation]);
    return;
  }

  // Recursive case: for each number in the input array, add it to the current permutation and generate all permutations of the remaining numbers.
  for (let i = 0; i < nums.length; i++) {
    // Add the current number to the current permutation array.
    let num = nums[i];
    currentPermutation.push(num);
    // Generate all permutations of the remaining numbers by calling the permutations function recursively with the remaining numbers and the updated current permutation.
    let new_nums = nums.slice(0, i) + (nums.slice(i + 1));
    permutations(new_nums, currentPermutation, result);
    // Backtracking - Remove the current number from the current permutation array to prepare for the next iteration of the loop.
    currentPermutation.pop();
  }
}
