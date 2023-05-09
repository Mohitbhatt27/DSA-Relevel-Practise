// https://leetcode.com/problems/contiguous-array/submissions/933665103/

function f(arr) {
  let obj = {}; //js object to act as a map
  let max = 0; //max length of contiguous array
  obj[0] = -1; //if the count is 0, then the length of the array is -Infinity
  let count = 0; // count of 1s - count of 0s
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      count++;
    } else {
      count--;
    }

    if (obj[count] !== undefined) {
      max = Math.max(max, i - obj[count]); //if count is already present in the map, then the length of the contiguous array is i - obj[count]
    } else {
      obj[count] = i; //if count is not present in the map, then add it to the map
    }
  }
  return max;
}

console.log(f([0, 0, 1]));
