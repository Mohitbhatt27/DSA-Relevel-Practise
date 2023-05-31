//from a given array check if there is subarray with sum zero
var Subarray = function (arr) {
  let prefixSum = [];

  prefixSum.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i];
  }
  let obj = {};
  for (let i = 0; i < prefixSum.length; i++) {
    if (obj[prefixSum[i]]) {
      return true;
      obj[prefixSum[i]]++;
    } else obj[prefixSum[i]] = 1;
  }
  return false;
};

console.log(Subarray([2, 10, 10, 2]));
