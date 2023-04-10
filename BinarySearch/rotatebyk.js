var rotate = function (nums, k) {
  if (nums.length > 1) {
    k = k % nums.length; //handling cases where k > length of array
    reverse(nums, 0, nums.length - 1 - k); //reversing left half
    reverse(nums, nums.length - 1 - k + 1, nums.length - 1); //reversing right half
    reverse(nums, 0, nums.length - 1); //reversing entire array
  }
};

let reverse = (arr, start, end) => {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
};
