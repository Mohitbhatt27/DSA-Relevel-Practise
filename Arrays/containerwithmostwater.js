/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let ans = -Infinity;

  while (left < right) {
    let diff = right - left;
    ans = Math.max(ans, Math.min(height[left], height[right]) * diff);

    if (height[left] < height[right]) {
      //area is limited by left
      left++;
    } else {
      //area is limited by right
      right--;
    }
  }
  return ans;
};
