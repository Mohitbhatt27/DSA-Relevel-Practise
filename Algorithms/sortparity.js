function swap (arr, i, j){
let temp = arr[i];
arr[i] = arr[j];
arr[j] = temp;
}
var sortArrayByParity = function (nums) {
  if (nums.length == 1) return nums;
  let start=0; let end=nums.length-1;
  while(start<end){
    if(nums[start] % 2 !=0){
        swap(nums,start,end);
        end--;
    }else{
        start++;
    }
   
  }
}
let arr = [1,2,3,4,2];
sortArrayByParity(arr);
console.log(arr);