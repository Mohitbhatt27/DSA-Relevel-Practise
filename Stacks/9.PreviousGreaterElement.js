function prevGreaterElem(nums) {
  let stack = [];
  let result = Array(nums.length).fill(-1);

  for (let i = 0; i < nums.length; i++) {
    while (stack.length > 0 && nums[i] >= nums[stack[stack.length - 1]]) {
      stack.pop();
    }

    if (stack.length > 0) {
      result[i] = nums[stack[stack.length - 1]]; //remove nums to return indices
    }

    stack.push(i);
  }

  return result;
}

/**
 * This is similar to previousSmallerElem but with one key difference: instead of popping elements from the stack until it finds an element that is smaller than the current element, it pops elements from the stack until it finds an element that is greater than the current element.
 */
