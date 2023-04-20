// Given an array of n elements, where each element is at most k away from its target position, devise an algorithm that sorts in O(n log k) time. For example, let us consider k is 2, an element at index 7 in the sorted array, can be at indexes 5, 6, 7, 8, 9 in the given array.

// Input:  arr[]   = {6, 5, 3, 2, 8, 10, 9}
//         k = 3
// Output: arr[] = {2, 3, 5, 6, 8, 9, 10}


/**
 * Understanding: An elem at index i will be at [i-k, i+k] in the output array
 * 
 * Approach: 
 * 1. We can use a min heap as we need to sort the array in ascending order.
 * 2. We will maintain 2 things: index and min heap
 * 3. We create a min heap of first k+1 elements
 * 4. Then we run a loop from k+1 to n-1
 * 5. Inside this loop, we remove the root of the min heap and add it to the output array
 * 6. Add the current item to the heap
 * 7. Keep doing this till we reach the end of the array.
 */

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

    let root = this.arr.pop(); // remove the last index element

    this.downHeapify(0);
    return root;
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

function sortKSortedArray(arr, k) {
    let minHeap = new MinHeap (arr.slice(0, k+1));
    let result = [];
    for (let i = k+1; i < arr.length; i++) {
        result.push(minHeap.removeRoot());
        minHeap.insert(arr[i]);
    }
    while (minHeap.size() > 0) {
        result.push(minHeap.removeRoot());
    }
    return result;
}

console.log(sortKSortedArray([6, 5, 3, 2, 8, 10, 9], 3));