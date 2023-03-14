/*
Given an array of numbers arranged in ascending order and a target value, 
find the total number of pairs that sum up to the target value. 
Solve the question in javascript.
*/
// function findPairs(arr, target) {
//     let start = 0;
//     let end = arr.length - 1;
//     let pairs = 0;
//     while(start<arr.length && end>=0){
//         if(arr[start]+arr[end]==target){ 
//             pairs+=1;

//             if(arr[start]!=arr[start+1] && arr[end]!=arr[end-1]){
//                 //if both sides are not repeating
//             start++; 
//             end --;
//         }
//         else if(arr[start]!=arr[start+1] && arr[end]==arr[end-1]){
//             //if just the left side is not repeating
//             end--;
//         }
//         else{
//             //if just the right side is not repeating
//             start++;
//         }
//     }

//         else if(arr[start]+arr[end]>target){
//             start++;
//         }
//         else {
//             end--;
//         }
//     }
//     return pairs;
// }


function countSum(arr, target) {
    let start = 0, end = arr.length - 1;
    let count = 0;
    while(start < end) {
        if(arr[start] + arr[end] > target) {
            // reduce the sum
            end--;
        } else if(arr[start] + arr[end] < target) {
            // increase the sum
            start++;
        } else {
            // equal the target
            if(arr[start] == arr[end]) {
                let freq = end - start + 1;
                count += Math.floor((freq * (freq - 1)) / 2);
                return count;
            } else {
                let x = 0, y = 0;
                let a_s = arr[start];
                while(arr[start] == a_s) {
                    start++;
                    x++;
                }
                let a_e = arr[end];
                while(arr[end] == a_e) {
                    end--;
                    y++;
                }
                count += (x * y);
            }
        }
    }

    return count;
}

let arr = [1,2,2,3,3,4,5,5,6,6,6, 7, 8];
let target = 8;

console.log(countSum(arr, target));
console.log(countSum([1,2,2,3,3,4,4,5,5,6,6,6],8));
console.log(countSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],10));
console.log(countSum([1,1,1,1],2));
console.log(countSum([10, 12, 10, 15, -1, 7, 6, 5, 4, 2, 1, 1, 1],11));

