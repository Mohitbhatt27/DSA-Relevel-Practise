var colorTheArray = function (n, queries) {
  let nums = [];
  let answer = [];
  for (let i = 0; i < queries.length; i++) {
    let [index, color] = queries[i];
    nums.push(color);
    let count = 0;
    for (let j = 0; j < n - 1; j++) {
      if (nums[j] == nums[j + 1] && nums[j] != 0) {
        count++;
      }
    }
    answer.push(count);
  }
  return answer;
};

var colorTheArray = function (n, queries) {
  let nums = new Array(n).fill(0);
  let answer = [];
  let count = 0;
  for (let i = 0; i < queries.length; i++) {
    let [index, color] = queries[i];
    if (nums[index] == nums[index - 1] && nums[index] != 0) count--;
    if (nums[index] == nums[index + 1] && nums[index] != 0) count--;
    nums[index] = color;
    if (nums[index] == nums[index - 1]) count++;
    if (nums[index] == nums[index + 1]) count++;
    answer.push(count);
  }
  return answer;
};

// This solution keeps track of the count of adjacent elements with the same color and updates it accordingly for each query. It avoids iterating over the entire nums array for each query, making it more efficient. The time complexity is O(n + q), where n is the length of nums and q is the length of queries. The space complexity is O(n).
