// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// You must solve it in O(n) time complexity.

 

// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

// One approach is quick select to solve in O(n) but let's try heap approach
// If we can create a small min heap of size k, ignore new elements if they are smaller than the root of the heap, else remove the root and add the new element to the heap

class MinHeap {
  constructor(nums) {
    this.arr = nums;
    for (let i = this.arr.length - 1; i >= 0; i--) {
      this.downHeapify(i);
    }
  }
  upHeapify(idx) {
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (this.arr[parentIdx] > this.arr[idx]) {
        let temp = this.arr[parentIdx];
        this.arr[parentIdx] = this.arr[idx];
        this.arr[idx] = temp;
        idx = parentIdx;
      } else {
        break;
      }
    }
  }
  downHeapify(idx) {
    while (idx < this.arr.length) {
      let left = 2 * idx + 1;
      let right = 2 * idx + 2;
      let result = idx;
      if (left < this.arr.length && this.arr[left] < this.arr[result]) {
        result = left;
      }
      if (right < this.arr.length && this.arr[right] < this.arr[result]) {
        result = right;
      }
      if (result == idx) {
        break;
      }
      let temp = this.arr[result];
      this.arr[result] = this.arr[idx];
      this.arr[idx] = temp;
      idx = result;
    }
  }
  removeRoot() {
    // swap the root node with last index value
    let temp = this.arr[0];
    this.arr[0] = this.arr[this.arr.length - 1];
    this.arr[this.arr.length - 1] = temp;

    this.arr.pop(); // remove the last index element

    this.downHeapify(0);
  }
  removeAt(idx) {
    this.arr[idx] = -Infinity;
    this.upheapify(idx);
    this.removeRoot();
  }

  insert(val) {
    this.arr.push(val);
    this.upHeapify(this.arr.length - 1);
  }
  getMin() {
    return this.arr[0];
  }
  size() {
    return this.arr.length;
  }
  print() {
    console.log(this.arr);
  }
}

function findKthLargest(nums, k) {
  let heap = new MinHeap(nums.slice(0, k));
  for (let i = k; i < nums.length; i++) {
    if (nums[i] > heap.getMin()) {
      heap.removeRoot();
      heap.insert(nums[i]);
    }
  }
  return heap.getMin();
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));