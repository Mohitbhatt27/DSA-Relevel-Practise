// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:
// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

function subsetsBackTrack(arr, temp, i) {
  if (i == arr.length) {
    console.log(temp);
    return;
  }
  temp.push(arr[i]); // include
  subsetsBackTrack(arr, temp, i + 1);
  temp.pop(); // exclude
  while (i + 1 < arr.length && arr[i] == arr[i + 1]) i++; // skip duplicates -> change 2
  subsetsBackTrack(arr, temp, i + 1);
}

let input = [1, 2, 2];
input.sort((a, b) => a - b); // sort the input array -> change1
subsetsBackTrack(input, [], 0);
