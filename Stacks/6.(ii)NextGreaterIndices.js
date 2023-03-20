function Ngi(nums) {
  let stack = [];
  let result = Array(nums.length).fill(-1);
  stack.push(0);

  for (let i = 1; i < nums.length; i++) {
    let next = nums[i];

    while (stack.length > 0 && next > nums[stack[stack.length - 1]]) {
      let topIndex = stack.pop();
      //combined 2 step, where topindex is first the top of stack and then we pop the top of stack
      result[topIndex] = i;
    }

    stack.push(i);
  }

  return result;
}

console.log(Ngi([10, 7, 4, 2, 9, 10, 11, 3, 2]));

