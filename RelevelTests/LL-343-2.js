var firstCompleteIndex = function (arr, mat) {
  let m = mat.length;
  let n = mat[0].length;
  let rows = new Array(m).fill(0);
  let cols = new Array(n).fill(0);
  let map = new Map();

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      map.set(mat[i][j], [i, j]);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let [r, c] = map.get(arr[i]);
    rows[r]++;
    cols[c]++;
    if (rows[r] === n || cols[c] === m) {
      return i;
    }
  }

  return -1;
};
