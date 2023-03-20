function pge(nums){
  nums.reverse();
  let stack = [];
  let result = Array(nums.length).fill(-1);
  stack.push(0);

  for (let i = 1; i < nums.length; i++) {
    let next = nums[i];

    while (stack.length > 0 && next > nums[stack[stack.length - 1]]) {
      let topIndex = stack.pop();
      result[topIndex] = next;
    }

    stack.push(i);
  }

  return result.reverse();
}

console.log(pge([10,2,1]))