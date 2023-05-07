// For handling cases like [-2,-1], we can make some changes in the code:

function maxSubArraySpaceOptimised(arr) {
  let maxSoFar = arr[0];
  let current_sum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    current_sum = Math.max(arr[i], current_sum + arr[i]);
    maxSoFar = Math.max(maxSoFar, current_sum);
  }

  return maxSoFar;
}

console.log(maxSubArraySpaceOptimised([-2, -1]));
console.log(maxSubArraySpaceOptimised([-2, -1, 3]));
console.log(maxSubArraySpaceOptimised([-2, -1, -3]));
