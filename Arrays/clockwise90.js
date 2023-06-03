var rotate = function (arr) {
  //transpose the matrix
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      let temp = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = temp;
    }
  }
  console.log(arr);
  //reverse each row
  for (let i = 0; i < arr.length; i++) {
    revrow(arr[i]);
  }
};

function revrow(arr) {
  let start = 0,
    end = arr.length - 1;
  while (start <= end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}
