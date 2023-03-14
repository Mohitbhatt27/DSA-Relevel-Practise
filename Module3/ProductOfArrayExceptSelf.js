/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let n = nums.length;

  let preFixArr = new Array(n);
  let product = 1;
  for (let i = 0; i < n; i++) {
    preFixArr[i] = product;
    product *= nums[i];
  }

  let postFixArr = new Array(n);
  product = 1;
  for (let i = n - 1; i >= 0; i--) {
    postFixArr[i] = product;
    product *= nums[i];
  }

  let ans = new Array(n);
  for (let i = 0; i < n; i++) {
    ans[i] = preFixArr[i] * postFixArr[i];
  }

  return ans;
};
