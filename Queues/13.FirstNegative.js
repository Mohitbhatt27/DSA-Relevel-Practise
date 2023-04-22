// Negative Integer in Window
// Problem Statement - Given an array and an integer k. Your task is to find the first negative integer in a
// window of size k. If windows do not contain any negative integer, print 0.
// Input - [-2,0,-3,-4], k = 2
// Output - -2, -3, - 3

// Approach – Since we need to find the first negative integer from the window of size k, we will use
// deque or a double-ended queue. We will store our required element in it which is the first negative
// integer in a window of size k

// Steps -
// 1. Initialize a double-ended queue
// 2. Iterate through the array and save negative integers into the deque
// 3. For a specific window, if the deque is not empty, then the front element of the deque will be the
// first integer of that window
// 4. Else no negative integer present
// Time Complexity –
// If the number of elements in the input array is n then, the time complexity will be O(n)
// Space Complexity –
// If the size of the window given is k then, the space complexity will be O(k)


class Queue {
  constructor() {
    this.arr = [];
    this.front = 0;
  }

  isEmpty() {
    return this.front == this.arr.length;
  }

  enqueue(data) {
    /**
     * Time: O(1)
     */
    this.arr.push(data);
  }

  dequeue() {
    /**
     * Time: O(1)
     */
    if (this.isEmpty()) {
      console.log('Queue is empty, cannot delete from an empty queue');
      return;
    }
    this.front++;
  }

  getFront() {
    /**
     * Time: O(1)
     */
    if (this.arr.length == 0) {
      console.log('No element is present as the queue is empty');
      return;
    }
    return this.arr[this.front];
  }
}

function firstNegativeInteger(arr, k) {
  const queue = new Queue();
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      queue.enqueue(i);
    }

    if (i >= k) {
      if (!queue.isEmpty() && queue.getFront() <= i - k) {
        queue.dequeue();
      }
    }

    if (!queue.isEmpty()) {
      result.push(arr[queue.getFront()]);
    } else {
      result.push(0);
    }
  }

  return result;
}



const arr = [-2, 0, -3, -4];
const k = 2;

console.log (firstNegativeInteger(arr, k));