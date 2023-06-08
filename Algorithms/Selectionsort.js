function selectionsort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let smallest = i; //smallest element of unsorted region
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[smallest]) {
        smallest = j;
      }
    }
    //swap smallest with i
    //swapping happens in selection sort, approx n times
    if (arr[i] != arr[smallest]) {
      let temp = arr[i];
      arr[i] = arr[smallest];
      arr[smallest] = temp;
    }
  }
  //Selection sort is a comparison based sort as more comarisons are happening, n2 comparions and at max n swaps.
  //In place algo, as it doesn't depend upon extra data structure for modifying data and implementing the algorithm.
  console.log(arr);
}
selectionsort([1, -1, 15, 2, -3, 4, 0]);

// O(n2)
// Average Case
// O(n2)
// Worst Case
// O(n2)
// Space
// O(1)
