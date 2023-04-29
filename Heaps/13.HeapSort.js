// Heap sort

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
class Heap {
  // implementation of min heap
  constructor(comp) {
    this.arr = []; // this array will store triplet <value, row_num, index>
    this.comp = comp; // this will be callback function
  }

  upheapify(idx) {
    while (idx > 0) {
      // till the time we dont reach the root
      let pivot = Math.floor((idx - 1) / 2);
      if (this.comp(this.arr[pivot], this.arr[idx])) break;
      swap(this.arr, idx, pivot);
      idx = pivot;
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

function heapSort(arr) {
  let heap = new Heap((a, b) => a < b);
  for (let i = 0; i < arr.length; i++) {
    heap.insert(arr[i]);
  }
  let sortedArr = [];
  while (heap.arr.length > 0) {
    sortedArr.push(heap.get());
    heap.arr[0] = heap.arr[heap.arr.length - 1];
    heap.arr.pop();
    heap.downHeapify(0);
  }
  return sortedArr;
}

let arr = [10, 20, 15, 12, 40, 25, 18];
console.log(heapSort(arr));
