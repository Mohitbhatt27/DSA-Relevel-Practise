// Choose a pivot element from the array
// Partition the array into two parts, one with elements smaller than the pivot and one with elements larger than the pivot
// If the pivot is the k-th smallest element, return it
// If there are more than k elements in the partition with elements smaller than the pivot, recursively search that partition
// If there are less than k elements in the partition with elements smaller than the pivot, recursively search the partition with elements larger than the pivot

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
function randompivot(l, r) {
  return Math.floor(l + Math.random() * (r - l));
}
function partitioning(arr, pivotindex, l, r) {
  let pivot = arr[pivotindex];
  swap(arr, pivotindex, r); //sending pivot to the end
  let i = l - 1;
  let j = l;
  while (j <= r - 1) {
    if (arr[j] <= pivot) {
      i++;
      swap(arr, i, j); //increase i and swap
    }
    j++;
  }
  swap(arr, i + 1, r); //bringing pivot back from the end
  return i + 1;
}

function f(arr, k, l, r) {
  if (l >= r) return;
  let pivotindex = randompivot(l, r);
  let m = partitioning(arr, pivotindex, l, r);
  // If the pivot is the k-th smallest element, return it
  if (arr[k] == arr[pivotindex]) {
    return arr[k];
  }
  // If there are more than k elements in the partition with elements smaller than the pivot, recursively search that partition
  else if (k < pivotindex) {
    return f(arr, k, l, pivotindex - 1);
  } else {
    return f(arr, k, pivotindex + 1, r);
  }
}

function quickselect(arr,k) {
  return f(arr, k, 0, arr.length - 1);
}
let k=3;
let arr = [1, 7, 3, 2, 1, 6, -1];
console.log(quickselect(arr,k));