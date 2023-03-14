//https://codeforces.com/problemset/problem/1324/D
/**
 * ai+aj>bi+bj 
 * ai - bi > bj - aj
 * f(i) > -f(j)
 *  
 */

let count = 0;
function pairoftopics(nums1, nums2){
    count = 0;
    let n = nums1.length;
    let c=[];
    for(let i = 0; i < n; i++){
        c.push(nums1[i] - nums2[i]);
    }
    f(c, 0, c.length - 1);
    return count;
};
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
};
function merge(left, right) {
  let result = [];
  let i = 0,
    j = 0;

  //magic starts here
  //f(i) > -f(j);
  let m = 0, n = right.length - 1;
  while (m < left.length && n >= 0) {
    if (left[m] > -right[n]) {
      count += left.length - m;
      n--;
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

let n1=[4, 8, 2, 6, 2];
let n2=[4, 5, 4, 1, 3];
pairoftopics(n1,n2);
console.log(count);