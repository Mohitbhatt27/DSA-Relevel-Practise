/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let obj = {};
  for (const elem of nums) {
    if (obj[elem]) {
      obj[elem]++;
    } else {
      obj[elem] = 1;
    }
  }
  let arr = new Array(nums.length + 1).fill().map(() => new Array(2));
  let i = 0;
  for (let key in obj) {
    arr[i][0] = key;
    arr[i][1] = obj[key];
    i++;
  }
  //console.log(arr);
  arr.sort((a, b) => b[1] - a[1]);
  //console.log(arr);

  let ans = [];
  //console.log(Object.keys(obj));
  for (let i = 0; i < k; i++) {
    ans.push(arr[i][0]);
  }
  return ans;
};

console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3],2));