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

console.log(Nsi([11,81,94,43,3]));
