function kadaneAlgorithm(arr) {
  let maxSoFar = arr[0];
  let currentSum = arr[0];
  let start = 0;
  let end = 0;
  let tempStart = 0;

  for (let i = 1; i < arr.length; i++) {
    if (currentSum < 0) {
      // here we are starting a new subarray, so we make a tempStart
      currentSum = arr[i];
      tempStart = i;
    } else {
      // continuing the subarray
      currentSum = currentSum + arr[i];
    }

    if (currentSum > maxSoFar) {
      // here we are updating our ans, so here we will update start and end also
      maxSoFar = currentSum;
      start = tempStart;
      end = i;
    }
  }

  return { maxSum: maxSoFar, subarray: arr.slice(start, end + 1) };
}

console.log(kadaneAlgorithm([-2, -1]));
console.log(kadaneAlgorithm([-2, -1, 3]));
console.log(kadaneAlgorithm([-2, -1, -3]));
console.log(
  kadaneAlgorithm([
    -2, -1, -3, 4, 5, 6, -1, 2, 3, 4, -5, 6, 7, -1, 2, 3, 4, -5, 6, 7, -1, 2, 3,
    4, -5, 6, 7, -1, 2, 3, 4, -5, 6, 7, -1, 2, 3, 4, -5, 6, 7, -1, 2, 3, 4, -5,
    6, 7, -1, 2, 3, 4, -5, 6, 7, -1, 2, 3, 4, -5, 6, 7,
  ])
);
