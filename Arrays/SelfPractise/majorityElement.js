/*
Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
*/

var majorityElement = function(nums) {
    let obj={};
    let result=[];
    let n= nums.length;
    for(let i=0; i<n; i++){
        if(obj[nums[i]]){
            obj[nums[i]]+=1;
        }
        else {
            obj[nums[i]]=1;
        }
        console.log(obj[nums[i]], nums[i]);
        if(obj[nums[i]]>n/3 && result.indexOf(nums[i])==-1){
            result.push(nums[i]);
        }
    }
    return result;    
};

console.log(majorityElement([1,2]));