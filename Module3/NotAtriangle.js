//upper bound gives first element greater than x
function upperBound(arr, ele, st) {
  let start = st, end = arr.length - 1;
  let ans = -1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid] <= ele) {
      // if the mid element is <= element, then jump right
      start = mid + 1;
    } else {
      // we found a potential ans, try to find better one on left side
      ans = mid;
      end = mid - 1;
    }
  }
  return ans;
}

function solve(arr){
arr.sort((a, b) => a - b);
let count = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    let sum = a[i]+a[j];
    let ub = upperBound(arr, sum, j + 1); //we need to find upper bound on greater than j
    if (ub == -1) continue;
    count += arr.length - ub;
  }
}
return count;
}

let arr = [4, 2, 10];
console.log(solve(arr));

/**
 * Time: (n^2logn)
 * Space: O(space of sorting algo);
 */
