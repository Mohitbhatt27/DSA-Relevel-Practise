class MinHeap {
    constructor (nums) {
        this.arr = nums;
        for (let i = this.arr.length - 1; i >= 0; i--) {
            this.downHeapify(i);
        }
    }
    upHeapify (idx) {
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
    downHeapify (idx) {
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
    removeRoot () {
      // swap the root node with last index value
      let temp = this.arr[0];
      this.arr[0] = this.arr[this.arr.length - 1];
      this.arr[this.arr.length - 1] = temp;

      this.arr.pop(); // remove the last index element

      this.downHeapify(0);
    }
    removeAt (idx) {
    this.arr[idx] = -Infinity;
    this.upheapify(idx);
    this.removeRoot();
    }

    insert (val) {
        this.arr.push(val);
        this.upHeapify(this.arr.length - 1);
    }
    getMin () {
        return this.arr[0];
    }
    size () {
        return this.arr.length;
    }
    print () {
        console.log(this.arr);
    }

}