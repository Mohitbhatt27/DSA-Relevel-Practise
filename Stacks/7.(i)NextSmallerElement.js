function Nse(nums) {
  let stack = [];
  let result = Array(nums.length).fill(-1);
  stack.push(0);
  
  for (let i = 1; i < nums.length; i++) {
    let next = nums[i];
    //only change from nge is the < sign instead of >
    while (stack.length > 0 && next < nums[stack[stack.length - 1]]) {
      let topIndex = stack.pop(); 

      result[topIndex] = next;
    }

    stack.push(i);
  }
  return result;
}

console.log(Nse([10, 7, 4, 2, 9, 10, 11, 3, 2]));
