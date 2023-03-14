// function twoSum(nums, target) {
// const complements = {};    
//     for (let i = 0; i < nums.length; i++) {
//         // Calculate the complement of the current number
//         const complement = target - nums[i];
//         // If the complement is in the object, return the indices of the two numbers
//         if (complement in complements) {
//             return [complements[complement], i];
//         }
//         // Otherwise, add the current number to the object
//         complements[nums[i]] = i;
//     }
//     // If no two numbers add up to the target, return null
//     return null;
// }



function twoSum(nums, target) {
    const numMap = {};
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (complement in numMap) {
        return [nums[numMap[complement]], nums[i]];
      }
      numMap[nums[i]] = i;
    }
    return -1;
  }
console.log(twoSum([2,3,4],7));