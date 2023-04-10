function lowerBound(arr, ele) {
  let start = 0;
  let end = arr.length - 1;
  let ans = -1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid] >= ele) {
      // then the current index can be one of our possible ans
      ans = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return ans;
}
function upperBound(arr, ele) {
  let start = 0, end = arr.length - 1;
  let ans = -1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid] <= ele) {
      // if the mid element is <= element, then jump right
      start = mid + 1;
    } else {
      // we found a poteintial ans, try to find better one on left side
      ans = mid;
      end = mid - 1;
    }
  }
  return ans;
}

function count(arr) {
  /**
   * Time: O(n^3logn)
   * Space: O(n^3)
   */
  let lhs = [];
  let rhs = [];
  for (let a = 0; a < arr.length; a++) {
    for (let b = 0; b < arr.length; b++) {
      for (let c = 0; c < arr.length; c++) {
        lhs.push(arr[a] * arr[b] + arr[c]);
      }
    }
  }
  for (let d = 0; d < arr.length; d++) {
    if (arr[d] == 0) continue;
    for (let e = 0; e < arr.length; e++) {
      for (let f = 0; f < arr.length; f++) {
        rhs.push((arr[f] + arr[e]) * arr[d]);
      }
    }
  }
  lhs.sort((a, b) => a - b);
  rhs.sort((a, b) => a - b);
  let ans = 0;
  for (let i = 0; i < lhs.length; i++) {
    const element = lhs[i];
    let lb = lowerBound(rhs, element);
    let ub = upperBound(rhs, element);
    if (lb == -1 || ub == -1) continue;
    ans += ub - lb;
  }
  return ans;
}

console.log(count([5, 7, 10]));
