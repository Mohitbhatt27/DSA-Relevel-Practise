// Assignment 1
// Submission Date - 26th Apr, 2023, 10 AM
// Requirements: Problem-1: Find Intersection

// You are given two integer arrays arr1 and arr2. Populate an array that includes the intersection of arr1 and arr2.
// Remember:
// In the resultant array, every element should appear as many times as it is present in both the arrays, including duplicate elements.
// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Please submit you code as a repository on Google doc link.

function intersection(arr1, arr2) {
  // Create an object to store the frequency of elements in arr1
  const mp = {};
  for (const num of arr1) {
    mp[num] = (mp[num] || 0) + 1;
  }

  // Create an array to store the intersection
  const intersection = [];

  // Iterate over arr2, adding elements to the intersection if they are present in arr1
  for (const num of arr2) {
    if (mp[num] > 0) {
      intersection.push(num);
      mp[num]--;
    }
  }

  // Return the intersection array
  return intersection;
}

let nums1 = [1, 2, 2, 1],
  nums2 = [2, 2];
console.log(intersection(nums1, nums2));
