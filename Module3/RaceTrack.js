//same as aggressive cows

function possible(arr, c, mid) {
  let count = 1; // first one
  let last_pos = arr[0]; //at first position
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    if (arr[i] - last_pos >= mid) {
      ///place one more kid
      count++;
      last_pos = arr[i];
    }

    if (count >= c) {
      return true;
    }
  }
  return false;
}

function solve(arr, m) {
  let n = arr.length;
  arr.sort((a, b) => a - b);
  let ans;
  let low = 1, high = arr[n - 1] - arr[0];
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (possible(arr, m, mid)) {
      ans = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ans;
}
let a = [1, 2, 8, 4, 9];
let m = 2;
console.log(solve(a, m));
