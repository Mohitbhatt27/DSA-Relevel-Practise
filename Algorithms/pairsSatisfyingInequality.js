//https://leetcode.com/problems/number-of-pairs-satisfying-inequality/description/
/**
 * nums1[i] - nums1[j] <= nums2[i] - nums2[j] + diff
 * nums1[i] - nums2[i] <= nums1[j] - nums2[j] + diff
 * 
 * let nums1[i] - nums2[i] = f(i)
 * f(i) <= -f(i) + diff
 * -f(i) >= f(i) - diff
 * 
 * 
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} diff
 * @return {number}
 */

 /**
 * nums1[i] - nums1[j] <= nums2[i] - nums2[j] + diff
 * nums1[i] - nums2[i] <= nums1[j] - nums2[j] + diff
 * 
 * let nums1[i] - nums2[i] = f(i)
 * f(i) <= -f(i) + diff
 * -f(i) >= f(i) - diff
 * 
 * 
 */
let count=0;
var numberOfPairs = function(nums1, nums2, diff) {
    let arr=[];
    for(let i=0; i<nums1.length; i++){
        arr.push(nums2[i]-nums1[i]);  //this is -f(i)
    }
  count = 0;
  f(arr, 0, arr.length - 1, diff);
  return count;  
};

function f(arr, i, j, diff) {
  if (i == j) {
    let temp = [arr[i]];
    return temp;
  }
  let mid = Math.floor((i + j) / 2);
  let left = f(arr, i, mid, diff);
  let right = f(arr, mid + 1, j, diff);
  let result = merge(left, right, diff);
  return result;
};

function merge(left, right, diff) {
  let result = [];
  let i = 0, j = 0;
  let m = 0, n = 0;
  //magic starts here
  while (m < left.length && n < right.length) {
    if (left[m] >= right[n] - diff) {
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