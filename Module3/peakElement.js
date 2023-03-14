var findPeakElement = function (nums) {
  let start = 0, end = nums.length - 1;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] > nums[mid + 1])
      //decreasing curve, so we are not sure about right side, but we are sure that we will find a peak on the left side
      end = mid;
    //increasing curve, so we are not sure about left side, but we are sure that right side will definitely have a peak
    else start = mid + 1;
  }
  return start;
};
