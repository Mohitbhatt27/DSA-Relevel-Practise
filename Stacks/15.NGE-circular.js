/*
Intuition: If we need to find whether "abc" is a rotation of "bca", we just double "bca" to "bcabca" and then find "abc" in "bcabca". 
Here also we can do something like that

*/

var nextGreaterElements = function (nums) {
  let stack = [];
  let n = nums.length;
  let result = Array(n).fill(-1);
  stack.push(0);

  for (let i = 1; i < 2 * n; i++) {
    let next = nums[i % n]; //wrapping around logic

    while (stack.length > 0 && next > nums[stack[stack.length - 1]]) {
      let topIndex = stack.pop();
      result[topIndex] = next;
    }

    if (i < n) {
      //only pushing at first pass
      stack.push(i);
    }
  }
  return result;
};
