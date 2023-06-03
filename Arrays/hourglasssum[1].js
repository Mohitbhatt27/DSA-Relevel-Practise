function hourglassSum(arr) {
  let sum = 0,
    max = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr[0].length - 2; j++) {
      sum =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        (arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]);

      if (sum > max) {
        max = sum;
      }
    }
  }
  return max;
}

let arr = [
  [1, 2, 4, 5, 6],
  [7, 5, 2, 3, 6],
  [0, 0, 0, 0, 0],
  [7, 5, 1, 3, 5],
  [0, 0, 0, 0, 0],
];

console.log(hourglassSum(arr));
