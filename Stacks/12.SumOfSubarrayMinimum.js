var sumSubarrayMins = function (nums) {
  let previousSmallerIndices = Psi(nums);
  let nextSmallerIndices = Nsi(nums);
  let ans = 0;
  //corner case, when nsi[i]=-1, update it to the length
  for (let i = 0; i < nums.length; i++) {
    if (nextSmallerIndices[i] == -1) {
      nextSmallerIndices[i] = nums.length;
    }
    ans +=
      nums[i] * (nextSmallerIndices[i] - i) * (i - previousSmallerIndices[i]);
  }

  return ans % 1000000007;
};

//previous smaller indices function
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
  nums.reverse();
  return result.reverse();
}

//next smaller indices function
function Nsi(nums) {
  let stack = [];
  let result = Array(nums.length).fill(-1);
  stack.push(0);

  for (let i = 1; i < nums.length; i++) {
    let next = nums[i];
    //another edge case, there can be a duplicate element also, so to handle that we need to look for elements less than or equal to on the right...PSI won't change
    while (stack.length > 0 && next <= nums[stack[stack.length - 1]]) {
      let topIndex = stack.pop();
      result[topIndex] = i;
    }
    stack.push(i);
  }
  return result;
}
