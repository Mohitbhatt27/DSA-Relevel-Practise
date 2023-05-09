// https://leetcode.com/problems/grid-illumination/

let arr = [
  [2, 3],
  [4, 5],
];
for (let i = 0; i < arr.length; i++) {
  let [x, y] = arr[i];
  console.log(x, y);
}

let obj = {};
let nums = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
for (let i = 0; i < nums.length; i++) {
  let num = nums[i];
  obj[num] = obj[num] ? obj[num] + 1 : 1;
}
console.log(obj);
