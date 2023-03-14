function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
var sortArrayByParityII = function (nums) {
  /*
    4,2,5,7
            i=0,1,2,3

    */

  let even = 0;
  let odd = 1;
  let arr=Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      arr[even]=nums[i];
      even += 2;
    } else {
      arr[odd]=nums[i];
      odd += 2;
    }
    //[3,7,9,0,2,8]; [7,3,9,0,2,8];
  }
  console.log(arr);
};
let arr=[3,7,9,0,2,8];
sortArrayByParityII(arr);
console.log(arr);
