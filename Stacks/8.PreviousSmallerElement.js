function prevSmallerElem(nums) {
  let stack = [];
  let result = Array(nums.length).fill(-1);

  for (let i = 0; i < nums.length; i++) {
    while (stack.length > 0 && nums[i] <= nums[stack[stack.length - 1]]) {
      stack.pop();
      //  pop elements from the top of the stack if they are greater than or equal to the current element of the input array. We are interested in finding the previous smaller element for each element in the input array.
    }

    if (stack.length > 0) {
      //  If the stack is not empty, assign the top element of the stack as the previous smaller element for the current element of the input array.
      result[i] = nums[stack[stack.length - 1]]; // just remove nums if you want to return indices
    }
    stack.push(i);
  }

  return result;
}
