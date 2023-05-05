// Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

// You may return the answer in any order.

// Example 1:

// Input: n = 4, k = 2
// Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
// Explanation: There are 4 choose 2 = 6 total combinations.
// Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.

/**
 * So basically we have to find all the subsets of size k from the given array
 * What we can do is we can use the same approach as we used in subsets problem but we will add a condition that we will only consider the subsets of size k
 */

let result;
var combine = function (n, k) {
  result = [];
  let temp = [];
  combinationsOfSizeK(1, n, temp, k);
  return result;
};
function combinationsOfSizeK(start, end, temp, k) {
  if (temp.length == k) {
    result.push([...temp]);
    return;
  }
  for (let i = start; i <= end; i++) {
    temp.push(i);
    combinationsOfSizeK(i + 1, end, temp, k);
    temp.pop();
  }
}

console.log(combine(3, 3));
