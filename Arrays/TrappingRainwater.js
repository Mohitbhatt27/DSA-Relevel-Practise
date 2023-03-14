/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let ans = 0;
  let left = [];
  let right = [];
  left.push(height[0]);

  for (let i = 1; i < height.length; i++) {
    left[i] = Math.max(left[i - 1], height[i]);
  }

  right[height.length - 1] = height[height.length - 1];

  for (let i = height.length - 2; i >= 0; i--) {
    right[i] = Math.max(height[i], right[i + 1]);
  }

  let n = left.length;
  for (let i = 0; i < n; i++) {
    ans += Math.min(left[i], right[i]) - height[i];
  }
  return ans;
};
