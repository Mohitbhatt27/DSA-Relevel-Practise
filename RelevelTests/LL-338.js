function minOperations(nums, queries) {
  nums.sort((a, b) => a - b);
  let n = nums.length;
  let preS = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    preS[i] = preS[i - 1] + nums[i - 1];
  }
  let result = [];
  for (let i = 0; i < queries.length; i++) {
    let curr_q = queries[i];
    let start = 0;
    let end = n;
    while (start < end) {
      let m = Math.floor((start + end) / 2);
      if (nums[m] <= curr_q) {
        start = m + 1;
      } else {
        end = m;
      }
    }
    let s = start;
    let l = n - start;
    let y = preS[n] - preS[s]
    let x = curr_q * s - preS[s] + y - curr_q * l;
    result.push(x);
  }
  return result;
}
(nums = [2, 9, 6, 3]), (queries = [10]);
console.log(minOperations(nums, queries)); // [14, 10]


/**
 * You are given an array nums consisting of positive integers.

You are also given an integer array queries of size m. For the ith query, you want to make all of the elements of nums equal to queries[i]. You can perform the following operation on the array any number of times:

Increase or decrease an element of the array by 1.
Return an array answer of size m where answer[i] is the minimum number of operations to make all elements of nums equal to queries[i].

Note that after each query the array is reset to its original state.

 

Example 1:

Input: nums = [3,1,6,8], queries = [1,5]
Output: [14,10]
Explanation: For the first query we can do the following operations:
- Decrease nums[0] 2 times, so that nums = [1,1,6,8].
- Decrease nums[2] 5 times, so that nums = [1,1,1,8].
- Decrease nums[3] 7 times, so that nums = [1,1,1,1].
So the total number of operations for the first query is 2 + 5 + 7 = 14.
For the second query we can do the following operations:
- Increase nums[0] 2 times, so that nums = [5,1,6,8].
- Increase nums[1] 4 times, so that nums = [5,5,6,8].
- Decrease nums[2] 1 time, so that nums = [5,5,5,8].
- Decrease nums[3] 3 times, so that nums = [5,5,5,5].
So the total number of operations for the second query is 2 + 4 + 1 + 3 = 10.
 */