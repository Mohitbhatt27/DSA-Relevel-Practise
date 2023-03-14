function swap(arr,i,j){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}
function randompivot(l,r){
    return Math.floor(l + Math.random()*(r-l));
}
function partitioning(arr,pivotindex,l,r){
  let pivot = arr[pivotindex];
  swap(arr, pivotindex, r); //sending pivot to the end
  let i = l - 1;
  let j = l;
  while (j <= r-1) {
    if (arr[j] <= pivot) {
      i++;
      swap(arr,i,j); //increase i and swap
    }
    j++;
  }
  swap(arr, i + 1, r); //bringing pivot back from the end
  return i+1;
}

function f(arr, l, r){
    if(l>=r) return;
    let pivotindex = randompivot(l, r);
    let m = partitioning(arr, pivotindex, l, r);
    f(arr,l,m-1);
    f(arr,m+1,r);
}

function quicksort(arr){
    f(arr,0,arr.length-1);
    console.log(arr);
}
let arr=[1,7,3,2,1,6,-1];
quicksort(arr);
