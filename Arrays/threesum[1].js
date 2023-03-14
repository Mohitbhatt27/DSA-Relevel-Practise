var threeSum = function(nums) {
    let k=0; let ans=[];
    let start=0;
    while(start<nums.length){
        let difference_twosum=0-nums[start];
        let two_sum=twoSum(nums,difference_twosum,start+1);
        if(two_sum!=null){
            ans[k++]= two_sum.unshift(nums[start]);
        }
        start++;
    }
    return ans;    
};

function twoSum(nums, target, start) {
    const numMap = {};
    for (let i = start+1; i < nums.length; i++) {
      const complement = target - nums[i];
      if (complement in numMap) {
        return [nums[numMap[complement]], nums[i]];
      }
      numMap[nums[i]] = i;
    }
    return -1;
  }
console.log(twoSum([2,3,4],7));
console.log(threeSum([-1,0,1,2,-1,-4]));
// console.log(twoSum([-1,0,1,2,-1,-4],3));