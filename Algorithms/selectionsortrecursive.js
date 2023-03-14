function recursiveSelectionSort(arr, n, i) {
	if (i == n) return;
	let min = minIndex(arr, i, n );
	if (min != i) {
		let temp = arr[min];
		arr[min] = arr[i];
		arr[i] = temp;
	}
	recursiveSelectionSort(arr, n, i + 1);
}

function minIndex(arr, i, n) {
	if (i == n-1) return i;
	let min = minIndex(arr, i + 1, n);
	return (arr[i] < arr[min]) ? i : min;
}
let arr=[1,-1,2,-3];
recursiveSelectionSort(arr,arr.length,0);
console.log(arr);
