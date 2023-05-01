// Given an integer array, find out the minimum no of elements that can be removed to make all the elements in
// the array in consecutive order.
// Example 1:
// Input: arr[] = {45, 42, 46, 48, 47}
// Output: 1
// Explanation: After removing 42 we see that there are consecutive elements present in the array(45-48).
// Example 2:
// Input: arr[] = {7, 4, 8, 5, 9 }
// Output: 2

function minRemovals(arr) {
  arr.sort((a, b) => a - b);
  let maxLen = 1;
  let currLen = 1;

  // checking if each pair of adjacent elements are consecutive
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1] + 1) {
      currLen++;
      maxLen = Math.max(maxLen, currLen);
    } else {
      currLen = 1;
    }
  }
  return arr.length - maxLen;
}

let arr = [7, 4, 8, 5, 9];
console.log(minRemovals(arr));
