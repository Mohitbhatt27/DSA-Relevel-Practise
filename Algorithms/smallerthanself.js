//https://leetcode.com/problems/count-of-smaller-numbers-after-self/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

function countSmaller(nums){
    let count=Array(nums.length).fill(0);
    let pairs=[];
    for(let i=0; i<nums.length; i++){
        pairs.push([nums[i],i]);
    }
    mergesort(pairs,count,0,nums.length-1);
    return count;
}
function mergesort(pairs,count,start,end){
    if(start==end) return [pairs[start][0]];
    let mid=Math.floor((start+end)/2);
    let left=mergesort(pairs,count,start,mid);
    let right=mergesort(pairs,count,mid+1,end);
    let result=merge(pairs,count,left,right);
    return result;
}
function merge(pairs,count,left,right){
    let i=0, j=0;
    let result=[];
    while(i<left.length && j<right.length){
        console.log(left,right);
        if(left[i]>right[j]){
            console.log("true");
            count (left[i])     +=left.length-i;
            j++;
        }
        
        else i++;
    }
    
    i=0, j=0;
     while (i < left.length && j < right.length) {
       if (left[i] < right[j]) {
         result.push(left[i]);
         i++;
       } else {
         result.push(right[j]);
         j++;
       }
     }
     while (i < left.length) {
       result.push(left[i]);
       i++;
     }
     while (j < right.length) {
       result.push(right[j]);
       j++;
     }
     return result;
}

let nums=[5,2,6,1];
console.log(countSmaller(nums));




/**
 * 5261378
 * 5 2 6 1      3 7 8 
 * 5 2      6  1        3  7        8
 * 
 * 
 * 1 2 5 6      3 7 8
 * 
 */

