// Quicksort is a divide-and-conquer method for sorting. It works by partitioning an array into two subarrays, then sorting the subarrays independently.  

// We rearrange the array such that, when the two subarrays are sorted, the whole array is ordered. 

// Divide by partitioning (rearranging) the array A[p : r] into two (possibly empty) subarrays A[p : q – 1] (the low side) and A[q + 1 : r] (the high side) such that each element in the low side of the partition is less than or equal to the pivot A[q], which is, in turn, less than or equal to each element in the high side. Compute the index q of the pivot as part of this partitioning procedure. 

// Conquer by calling quicksort recursively to sort each of the subarrays A[p : q – 1] and A[q + 1 : r]. 

// Combine by doing nothing: because the two subarrays are already sorted, no work is needed to combine them. All elements in A[p : q –1] are sorted and less than or equal to A[q], and all elements in A[q + 1: r] are sorted and greater than or equal to the pivot A[q]. The entire subarray A[p : r] cannot help but be sorted! 

function partition(arr, p, r) {
  let pivot = arr[r];
  let i = p - 1; //highest index on the low side
  for (let j = p; j <= r - 1; j++) {
    if (arr[j] <= pivot) {
      // does this element belongs on the low side?
      i++; //index of a new low in the low side
      swap(arr, i, j); //put this element here
    }
  }
  swap(arr, i + 1, r); //pivotgoes to the right of low side
  return i + 1; //new index of pivot
}

function quickSort(arr, p, r) {
  if (p < r) {
    // q is partitioning index, arr[p] is now at right place
    let q = partition(arr, p, r);
    // Separately sort elements before partition and after partition
    quickSort(arr, p, q - 1);
    quickSort(arr, q + 1, r);
  }
}
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let arr = [10, 7, 8, 9, 1, 5];
let n = arr.length;
quickSort(arr, 0, n - 1);
console.log(arr);


/*Algorithm of QuickSort: 

To sort an entire n-element array A[1 : n], the initial call is QUICKSORT (A, 1, n). 

QUICKSORT(A, p, r)  
if (p<r) 
// Partition the subarray around the pivot, which ends up in A[q]. 
q = PARTITION(A, p, r) 
QUICKSORT(A, p, q – 1)    // recursively sort the low side 
QUICKSORT(A, q + 1, r)   // recursively sort the high side 

Partitioning the array:  

PARTITION(A,p,r) 
X=A[r]   			//the pivot 
i=p-1     			//highest index on the low side 
for j=p to r-1     	//process each element other than the pivot 
if A[j] <= x		//does this element belong on the low side? 
i++; 			//index of a new slot on the lower side 
exchange A[i] with A[j]		//put this element there 
exchange A[i+1] with A[r] 	//pivot goes just to the right of the low side 
return i+1 				//new index of the pivot 
*/



/**
 * Performance of QuickSort
The running time of quicksort depends on how balanced each
partitioning is, which in turn depends on which elements are used aspivots. 
If the two sides of a partition are about the same size—the
partitioning is balanced—then the algorithm runs asymptotically as fast as merge sort. 
If the partitioning is unbalanced, however, it can run asymptotically as slowly as insertion sort.
 */

