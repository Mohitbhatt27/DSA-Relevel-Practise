// Requirements: Given an input array of unique elements, return a max-heap created out of the same elements. Expected
// worst-case time complexity. O(n log(n))
// example:
// Input : [2,7,26,25,19,17,1,90,3,36]
// Output : [90, 36, 17, 25, 26, 7, 1, 2, 3, 19]Please submit you code as a repository on Google doc link.

function maxHeap (arr) {
    let heap = new MaxHeap(arr);
    return heap.arr;
}

class MaxHeap {
    constructor(arr) {
        this.arr = arr;
        this.buildHeap();
    }

    buildHeap() {
        for (let i = Math.floor(this.arr.length / 2); i >= 0; i--) {
            this.downHeapify(i);
        }
    }

    downHeapify(idx) {
        while (idx < this.arr.length) {
            let left = 2 * idx + 1;
            let right = 2 * idx + 2;
            let result = idx; // initially assume root is the greatest
            if (left < this.arr.length && this.arr[left] > this.arr[result]) {
                // if left child exist and it is greater than root, then greatest is left
                result = left;
            }
            if (right < this.arr.length && this.arr[right] > this.arr[result]) {
                // if right child exist and right is greater than max(root, left) then right is greatest
                result = right;
            }
            if (result == idx) {
                // we dont need to swap and we can stop
                break;
            }
            // swap
            let temp = this.arr[result];
            this.arr[result] = this.arr[idx];
            this.arr[idx] = temp;
            idx = result;
        }
    }
    display() {
        console.log(this.arr);
    }
}

let arr = [2,7,26,25,19,17,1,90,3,36];
let heap = new MaxHeap(arr);
heap.display();