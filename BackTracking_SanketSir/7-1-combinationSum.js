/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

let result;
var combinationSum = function (candidates, target) {
  result = [];
  let currArr = [];
  let currentSum = 0;
  let idx = 0;
  helper(candidates, target, currArr, idx, currentSum);
  return result;
};

function helper(arr, target, currArr, idx, currentSum) {
  if (currentSum > target) return;
  if (currentSum == target) {
    result.push([...currArr]);
    return;
  }
  for (let i = idx; i < arr.length; i++) {
    currArr.push(arr[i]);
    helper(arr, target, currArr, i, currentSum + arr[i]);
    currArr.pop();
  }
}

let candidates = [2];
let target = 1;
console.log(combinationSum(candidates, target));
