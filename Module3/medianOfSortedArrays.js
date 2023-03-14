function findMedianSortedArrays(arr1, arr2) {
  //if input1 length is greater than switch them so that input1 is smaller than input2.
  if (arr1.length > arr2.length) {
    return findMedianSortedArrays(arr2, arr1);
  }
  const x = arr1.length;
  const y = arr2.length;

  let low = 0;
  let high = x;
  while (low <= high) {
    const partitionX = Math.floor((low + high) / 2);
    const partitionY = Math.floor((x + y + 1) / 2) - partitionX;

    //if partitionX is 0 it means nothing is there on left side. Use -INF for maxLeftX
    //if partitionX is length of input then there is nothing on right side. Use +INF for minRightX
    const maxLeftX = partitionX === 0 ? -Infinity : arr1[partitionX - 1];
    const minRightX = partitionX === x ? Infinity : arr1[partitionX];

    const maxLeftY = partitionY === 0 ? -Infinity : arr2[partitionY - 1];
    const minRightY = partitionY === y ? Infinity : arr2[partitionY];

    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      //We have partitioned array at correct place
      // Now get max of left elements and min of right elements to get the median in case of even length combined array size
      // or get max of left for odd length combined array size.
      if ((x + y) % 2 === 0) {
        return (
          (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2
        );
      } else {
        return Math.max(maxLeftX, maxLeftY);
      }
    } else if (maxLeftX > minRightY) {
      //we are too far on right side for partitionX. Go on left side.
      high = partitionX - 1;
    } else {
      //we are too far on left side for partitionX. Go on right side.
      low = partitionX + 1;
    }
  }
}

const x = [1, 3, 8, 9, 15];
const y = [7, 11, 19, 21, 18, 25];
const median = findMedianSortedArrays(x, y);
console.log(median);
