// In order to convert an array to a heap in O(n) time, we need to start from the last non-leaf node and do a downheapify on it. This will ensure that the heap property is maintained for all the nodes in the heap. We will then move to the previous node and do a downheapify on it. We will keep doing this until we reach the root node.

// Time: O(n)

// Space: O(1)


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

const hp = new Heap((a, b) => {
  return a > b;
});

hp.insert(10);
hp.insert(20);
hp.insert(30);
console.log(hp.arr);
console.log(hp.get());