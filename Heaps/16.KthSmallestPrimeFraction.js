/**
 * You are given a sorted integer array arr containing 1 and prime numbers, where all the integers of arr are unique. You are also given an integer k.

For every i and j where 0 <= i < j < arr.length, we consider the fraction arr[i] / arr[j].

Return the kth smallest fraction considered. Return your answer as an array of integers of size 2, where answer[0] == arr[i] and answer[1] == arr[j].

 

Example 1:

Input: arr = [1,2,3,5], k = 3
Output: [2,5]
Explanation: The fractions to be considered in sorted order are:
1/5, 1/3, 2/5, 1/2, 3/5, and 2/3.
The third fraction is 2/5.
Example 2:

Input: arr = [1,7], k = 1
Output: [1,7]
 */

//Another way to solve this problem is to use a min heap. We will store the fractions in the min heap. We will start by inserting the first fraction in the min heap. Then we will pop the top element from the min heap and insert the next fraction in the min heap. We will repeat this process k times. The last fraction that we pop from the min heap will be the kth smallest fraction.

class Heap {
  #arr;
  constructor(cmp) {
    this.#arr = [];
    this.comparator = cmp; // function
  }
  swap(i, j) {
    let temp = this.#arr[i];
    this.#arr[i] = this.#arr[j];
    this.#arr[j] = temp;
  }
  upheapify(idx) {
    /**
     * Time: O(logn)
     * Space: O(1)
     */
    while (idx > 0) {
      // if idx is 0 you dont have a parent
      let pi = Math.floor((idx - 1) / 2);
      if (this.comparator(this.#arr[idx], this.#arr[pi])) {
        // swap
        this.swap(idx, pi);
      } else {
        // no more upheapify needed
        break;
      }
      idx = pi;
    }
  }
  downheapify(idx) {
    /**
     * Time: O(logn)
     * Space: O(1)
     */
    while (idx < this.#arr.length) {
      let left = 2 * idx + 1;
      let right = 2 * idx + 2;
      let result = idx; // assume that max element is the root;
      if (
        left < this.#arr.length &&
        this.comparator(this.#arr[left], this.#arr[result])
      ) {
        // if left child exists and left node is bigger than the last assumed result
        result = left; // make left child the new result candidate
      }
      if (
        right < this.#arr.length &&
        this.comparator(this.#arr[right], this.#arr[result])
      ) {
        // if right child exists and right node is bigger than the last assumed result
        result = right;
      }
      // swap the idx with result
      if (idx == result) {
        // root was the largest
        break;
      }
      this.swap(idx, result);
      idx = result;
    }
  }
  insert(data) {
    /**
     * Time: O(logn)
     * Space: O(1)
     */
    this.#arr.push(data);
    this.upheapify(this.#arr.length - 1);
  }
  get() {
    /**
     * Time: O(1)
     * Space: O(1)
     */
    if (this.#arr.length > 0) {
      return this.#arr[0];
    } else {
      return undefined;
    }
  }
  remove() {
    /**
     * Time: O(logn)
     * Space: O(1)
     */
    // swap root with last element
    this.swap(0, this.#arr.length - 1);
    this.#arr.pop();
    this.downheapify(0);
  }
  display() {
    console.log(this.#arr);
  }
}

function kthSmallestPrimeFraction(arr, k) {
  let minHeap = new Heap((a, b) => {
    return a.fraction < b.fraction;
  });
  for (let i = 0; i < arr.length - 1; i++) {
    minHeap.insert({
      fraction: arr[i] / arr[arr.length - 1],
      numeratorIdx: i,
      denominatorIdx: arr.length - 1,
    });
  }

  for (let i = 0; i < k - 1; i++) {
    let curr = minHeap.get();
    minHeap.remove();

    let denom = curr.denominatorIdx;
    if (denom - 1 < 0) continue;
    let numer = curr.numeratorIdx;
    let new_fraction = arr[numer] / arr[denom - 1];
    minHeap.insert({
      fraction: new_fraction,
      numeratorIdx: numer,
      denominatorIdx: denom - 1,
    });
  }
  let curr = minHeap.get();
  let d = curr.denominatorIdx;
  let n = curr.numeratorIdx;
  return [arr[n], arr[d]];
}

console.log(kthSmallestPrimeFraction([1, 2, 3, 5], 3));
console.log(kthSmallestPrimeFraction([1, 7], 1));
