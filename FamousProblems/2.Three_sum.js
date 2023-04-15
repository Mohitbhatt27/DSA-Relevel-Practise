function threeSum(nums) {
  const result = [];
  
  // sort the input array to enable two-pointer approach
  nums.sort((a, b) => a - b);
  
  for (let i = 0; i < nums.length - 2; i++) {
    // skip duplicate values of i
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    
    const hashTable = {};
    
    for (let j = i + 1; j < nums.length; j++) {
      const complement = -nums[i] - nums[j];
      
      if (hashTable.hasOwnProperty(complement)) {
        result.push([nums[i], complement, nums[j]]);
        
        // skip duplicate values of j
        while (j < nums.length - 1 && nums[j] === nums[j + 1]) j++;
      }
      
      hashTable[nums[j]] = j;
    }
  }
  
  return result;
}
