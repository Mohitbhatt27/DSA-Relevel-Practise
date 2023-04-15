function twoSum(nums, target) {
  const hashTable = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (hashTable.hasOwnProperty(complement)) {
      return [hashTable[complement], i];
    }

    hashTable[nums[i]] = i;
  }

  return [];
}
