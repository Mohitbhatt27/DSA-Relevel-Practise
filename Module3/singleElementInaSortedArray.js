var singleNonDuplicate = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  /*
    The first occurance of element should be in even index, and the second occurance must be in odd index, so if our mid is even, then we check that arr[mid]==arr[mid+1], else if mid is odd, we check if arr[mid]==arr[mid-1] 
    */
  while (start < end) {
    //important not to do start<=end
    let mid = Math.floor((end - start) / 2 + start);
    if (mid % 2 == 0) {
      //mid is even,
      if (nums[mid] == nums[mid + 1]) {
        //so if everything is correct till mid, also mid+1 is fine,
        start = mid + 2;
      } else {
        //everything is not correct till mid, so we need to check before mid, inc it
        end = mid;
      }
    } else {
      //mid is odd
      if (nums[mid] == nums[mid - 1]) {
        //everything till mid is correct
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return nums[start];
};

console.log(singleNonDuplicate([1,2,2,3,3]));
