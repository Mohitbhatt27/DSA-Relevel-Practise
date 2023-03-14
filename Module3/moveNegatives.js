// function movenegatives(arr){
//     let start=0;
//     let end=arr.length-1;

//     //consider all positive elements are on the left of start
//     //consider all negative elements are on the right of end
//     while(start<end){
//         if(arr[start]<0){
//             if(arr[end]<0){
//                 end--;
//             }
//             else{
//                 swap(arr,start,end);
//                 end--;
//             }
//         }
//         else start++;
//     }
//     return arr;
// };
// function swap(arr,start,end){
//     let temp=arr[start];
//     arr[start]=arr[end];
//     arr[end]=temp;
//     return arr;
// }

function moveNegatives(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      if (arr[left] < 0) {
        // Find the first positive element from the right
        while (arr[right] < 0 && left < right) {
          right--;
        }
        // If the left pointer is still less than the right pointer, swap the elements
        if (left < right) {
          [arr[left], arr[right]] = [arr[right], arr[left]];
        }
      }
      
      left++;
    }
  
    
    return arr;
  }
console.log(moveNegatives([1,-1,2,-2,3,-2,3,1,0,-3,-4,2]));