/**
 * In order to find the median of a stream of numbers, we need to keep tracks of two things:
 * 1. The median
 * 2. The number of elements in the stream
 * 
 * We will use two heaps to keep track of the median and the number of elements in the stream.
 * 1. We will use a max heap to keep track of the first half of the stream. This will be the smaller half of the stream.
 * 2. We will use a min heap to keep track of the second half of the stream. This will be the larger half of the stream.
 * 
 * We will maintain the following invariant:
 * 1. minHeap.length == maxHeap.length OR minHeap.length == maxHeap.length + 1
 * 
 */

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
class Heap {
  constructor(comp) {
    this.arr = []; // this array will store triplet <value, row_num, index>
    this.comp = comp;
  }

  upheapify(idx) {
    while (idx > 0) {
      let pi = Math.floor((idx - 1) / 2);
      if (this.comp(this.arr[pi], this.arr[idx])) break;
      swap(this.arr, idx, pi);
      idx = pi;
    }
  }

  insert(x) {
    this.arr.push(x);
    this.upheapify(this.arr.length - 1);
  }

  downHeapify(idx) {
    while (idx < this.arr.length) {
      let li = 2 * idx + 1;
      let ri = 2 * idx + 2;
      let smallest = idx;
      if (li < this.arr.length && this.comp(this.arr[li], this.arr[smallest])) {
        smallest = li;
      }
      if (ri < this.arr.length && this.comp(this.arr[ri], this.arr[smallest])) {
        smallest = ri;
      }
      if (smallest == idx) {
        break;
      } else {
        swap(this.arr, idx, smallest);
        idx = smallest;
      }
    }
  }

  get() {
    if (this.arr.length == 0) {
      console.log('heap is empty');
      return;
    }
    return this.arr[0];
  }

  display() {
    console.log(this.arr);
  }
}

class MedianOfStream {
  constructor() {
    this.minHeap = new Heap((a, b) => a < b);
    this.maxHeap = new Heap((a, b) => a > b);
  }

  insert(x) {
    if (this.minHeap.arr.length == 0) {
      this.minHeap.insert(x);
      // if both heaps are of equal length
    } else if (this.minHeap.arr.length == this.maxHeap.arr.length) {
      if (x < this.maxHeap.get()) {
        this.maxHeap.insert(x);
        this.minHeap.insert(this.maxHeap.get());
        this.maxHeap.downHeapify(0);
      } else {
        this.minHeap.insert(x);
      }
    } else {
      // if minHeap has more elements than maxHeap
      if (x > this.minHeap.get()) {
        this.minHeap.insert(x);
        this.maxHeap.insert(this.minHeap.get());
        this.minHeap.downHeapify(0);
      } else {
        this.maxHeap.insert(x);
      }
    }
  }

  getMedian() {
    if (this.minHeap.arr.length == this.maxHeap.arr.length) {
      return (this.minHeap.get() + this.maxHeap.get()) / 2;
    } else {
      return this.minHeap.get();
    }
  }
}

let medianOfStream = new MedianOfStream();
medianOfStream.insert(5);
medianOfStream.insert(15);
medianOfStream.insert(1);
medianOfStream.insert(3);
console.log(medianOfStream.getMedian());
medianOfStream.insert(2);
console.log(medianOfStream.getMedian());
