var mySqrt = function (x) {
  let start = 0, end = Math.floor(x / 2 + 1);
  let ans = 0;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (mid * mid == x) {
      return mid;
    } else if (mid * mid > x) {
      end = mid - 1;
    } else {
      ans = mid;
      //since we need floor of our answer, we will just update the ans when mid*mid is smaller than x
      start = mid + 1;
    }
  }
  return ans;
};
