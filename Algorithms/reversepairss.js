/**
 * @param {number[]} nums
 * @return {number}
 */
var count = 0;
var reversePairs = function (nums) {
  count = 0;
  f(nums, 0, nums.length - 1);
  return count;
};
function merge(left, right) {
  let result = [];
  let i = 0,
    j = 0;
  let m = 0,
    n = 0;
  while (m < left.length && n < right.length) {
    if (left[m] > 2 * right[n]) {
      count += left.length - m;
      n++;
    } else m++;
  }
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }
  return result;
}

function f(arr, i, j) {
  if (i == j) {
    let temp = [arr[i]];
    return temp;
  }
  let mid = Math.floor((i + j) / 2);
  let left = f(arr, i, mid);
  let right = f(arr, mid + 1, j);
  let result = merge(left, right);
  return result;
}
