// Given a max-heap as an input (represented as an array) and a number k which is greater than 0 and less than
// total count elements in heap, return kth largest element in heap. O(n log(n))
// Eg:
// Input :
// Heap : [90, 36, 17, 25, 26, 7, 1, 2, 3, 19]
// k : 3
// Output : 26 (As 26 is the 3rd largest element in heap).

function kthLargestElement(heap, k) {
  //Kth Value
  let kthMaxVal = null;
  //Swap Function
  const swap = (pos1, pos2) => {
    const temp = heap[pos1];
    heap[pos1] = heap[pos2];
    heap[pos2] = temp;
  };
  for (let i = 1; i <= k; i++) {
    //Step 1 : Max value in heap is the first element in array
    const maxVal = heap[0];
    //Step 2 : Replacing first element with last element
    const lastVal = heap.pop();
    //Edge condition to check if heap has only one element
    if (!heap.length) return maxVal;
    //Replace 0 with lastVal
    heap[0] = lastVal;
    let n = 0;
    //Step 4 : Reperat the process till node is in place
    while (n < heap.length) {
      //Step 3 : Set left and right child index
      const leftIndex = 2 * n + 1;
      const rightIndex = 2 * n + 2;
      //if it has no child
      if (leftIndex >= heap.length) break;
      //if only left child is present
      if (rightIndex >= heap.length) {
        //if child is less than node
        if (heap[leftIndex] < heap[n]) break;
        //if not swap
        swap(n, leftIndex);
        //set new child as current child
        n = leftIndex;
      } else {
        //get the highest child
        const highestIndex =
          heap[leftIndex] > heap[rightIndex] ? leftIndex : rightIndex;
        //if highest child is less than node
        if (heap[highestIndex] < heap[n]) break;
        //if not swap
        swap(n, highestIndex);
        //set newchild as current
        n = highestIndex;
      }
    }
    kthMaxVal = maxVal;
  }
  return kthMaxVal;
}

console.log(kthLargestElement([90, 36, 17, 25, 26, 7, 1, 2, 3, 19], 3));