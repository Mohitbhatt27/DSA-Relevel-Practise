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
  size() {
    return this.#arr.length;
  }
}

class MedianFinder {
  constructor() {
    this.maxHeap = new Heap((a, b) => a > b);
    this.minHeap = new Heap((a, b) => a < b);
  }

  addNum(num) {
    /*
     * Left side of the median is maxHeap
     * Right side of the median is minHeap
     * when first element is added to the heap, it is added to the maxHeap
     * That first element is the median
     * when second element is added to the heap, it is compared with the median
     * if it is less than the median, it is added on the left side -> maxHeap
     * if it is greater than the median, it is added on the right side -> minHeap
     * if it is equal to the median, it is added on the left side -> maxHeap
     * If the difference between the max heap and the min heap greater than 1, then we will balance the heaps
     * In order to balance the heaps, we will pop the root of the max heap and add it to the min heap
     * or we will pop the root of the min heap and add it to the max heap
     */

    if (this.maxHeap.size() == 0) {
      this.maxHeap.insert(num);
      return;
    }

    if (num <= this.findMedian()) {
      this.maxHeap.insert(num);
    } else {
      this.minHeap.insert(num);
    }

    if (this.minHeap.size() == this.maxHeap.size()) {
      return;
    }

    if (this.maxHeap.size() == this.minHeap.size() + 1) {
      return;
    }

    if (this.maxHeap.size() - this.minHeap.size() > 1) {
      this.minHeap.insert(this.maxHeap.get());
      this.maxHeap.remove();
    }

    if (this.minHeap.size() > this.maxHeap.size()) {
      this.maxHeap.insert(this.minHeap.get());
      this.minHeap.remove();
    }
  }

  findMedian() {
    /*
     * if max heap's size > min heap's size, then the median is the root of the max heap
     * if min heap's size > max heap's size, then the median is the root of the min heap
     * if they are equal, then the median is the average of the roots of the two heaps
     */
    if (this.maxHeap.size() > this.minHeap.size()) {
      return this.maxHeap.get();
    } else if (this.minHeap.size() > this.maxHeap.size()) {
      return this.minHeap.get();
    } else {
      return (this.maxHeap.get() + this.minHeap.get()) / 2;
    }
  }
}

let medianFinder = new MedianFinder();
medianFinder.addNum(1);
medianFinder.addNum(2);
console.log(medianFinder.findMedian());
medianFinder.addNum(3);
console.log(medianFinder.findMedian());
medianFinder.addNum(4);
console.log(medianFinder.findMedian());
medianFinder.addNum(5);
console.log(medianFinder.findMedian());
medianFinder.addNum(6);
console.log(medianFinder.findMedian());
medianFinder.addNum(7);
console.log(medianFinder.findMedian());
