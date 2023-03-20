function Psi(nums) {
  nums.reverse();
  let stack = [];
  let result = Array(nums.length).fill(-1);
  stack.push(0);

  for (let i = 1; i < nums.length; i++) {
    let next = nums[i];

    while (stack.length > 0 && next < nums[stack[stack.length - 1]]) {
      let topIndex = stack.pop();

      result[topIndex] = nums.length - i - 1; //imp
    }

    stack.push(i);
  }
  nums.reverse(); //imp to reverse back our original array
  return result.reverse();
}

console.log(Psi([10, 7, 4, 2, 9, 10, 11, 3, 2]));
