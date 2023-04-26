function countSubarrayWithSum0(arr) {
  /**
   * Time: O(n)
   * Space: O(n)
   */
  // convert the array to a prefix sum array
  let prefixSum = Array(arr.length).fill(0);
  prefixSum[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i];
  }
  let mp = {}; // we will create a freq map for the given prefix sum array
  for (let i = 0; i < prefixSum.length; i++) {
    let curr = prefixSum[i];
    if (mp[curr]) {
      // the current element is already present
      mp[curr] += 1;
    } else {
      // if the curr element is not present
      mp[curr] = 1;
    }
  }
  let ans = 0;

  let keys = Object.keys(mp);
  for (let i = 0; i < keys.length; i++) {
    let curr = keys[i];
    if (mp[curr] > 1) {
      ans += Math.floor((mp[curr] * (mp[curr] - 1)) / 2);
    }
  }

  if (mp[0]) {
    ans += mp[0]; // adding the number of subarray which are prefix subarrays with sum 0
  }
  return ans;
}

console.log(countSubarrayWithSum0([1, -1, 3, 4, 5, -9, 2, 1, -3, 6, -6]));
