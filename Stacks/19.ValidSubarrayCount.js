// Given an array A of integers, return the number of non-empty continuous subarrays that satisfy the following condition:

// The leftmost element of the subarray is not larger than other elements in the subarray.

 

// Example 1:

// Input: [1,4,2,5,3]
// Output: 11
// Explanation: There are 11 valid subarrays: [1],[4],[2],[5],[3],[1,4],[2,5],[1,4,2],[2,5,3],[1,4,2,5],[1,4,2,5,3].
// Example 2:

// Input: [3,2,1]
// Output: 3
// Explanation: The 3 valid subarrays are: [3],[2],[1].
// Example 3:

// Input: [2,2,2]
// Output: 6
// Explanation: There are 6 valid subarrays: [2],[2],[2],[2,2],[2,2],[2,2,2].


function solve(arr) {
  let nsi = Nsi(arr);
  let count = 0;
  let n = arr.length;
  for(let i = 0; i<n; i++){
    let x = nsi[i] == -1? arr.length : nsi[i];
    count += x - i;
  }
  return count;
}


function Nsi(nums) {
  let stack = [];
  let result = Array(nums.length).fill(-1);
  stack.push(0);

  for (let i = 1; i < nums.length; i++) {
    let next = nums[i];
    //only change from nge is the < sign instead of >
    while (stack.length > 0 && next < nums[stack[stack.length - 1]]) {
      let topIndex = stack.pop();

      result[topIndex] = i;
    }

    stack.push(i);
  }
  return result;
}

console.log(solve([1, 4, 2, 5, 3]));
console.log(solve([3,2,1]));
console.log(solve([2, 2, 2]));