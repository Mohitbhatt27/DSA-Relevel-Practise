function mergesort(nums){
    return f(nums, 0, nums.length-1);
}
function f(arr, i, j){
    if(i>=j) return;
    let mid = Math.floor((i + j) / 2);
    f(arr,i,mid);
    f(arr,mid+1,j);
    merge(arr,i,mid,j);
}
function merge(arr,l,m,h){
    let leftlength = m-l+1;
    let rightlength = h-m;
    let left=Array(leftlength);
    let right=Array(rightlength);
    let k=0;
    for(let i=l; i<=m; i++){
        left[k++]=arr[i];
    }
    k=0;
    for(let j=m+1; j<=h; j++){
        right[k++]=arr[j];
    }
    let temp = [];
    let i = 0, j = 0;
    while (i < leftlength && j < rightlength) {
      if (left[i] < right[j]) {
        temp.push(left[i]);
        i++;
      } else {
        temp.push(right[j]);
        j++;
      }
    }
    while (j < right.length) {
      temp.push(right[j]);
      j++;
    }
    while (i < left.length) {
      temp.push(left[i]);
      i++;
    }

    //now we need to copyback the elements to arr

    k=0;
    for(let i=l; i<=h; i++){
        arr[i]=temp[k++];  //very important
    }
    //loop is running from left of first array to the right of 2nd array
    //and we are storing on those indices, all the values of our temp
}
let arr = [9, 1, 6, -1, 3, 18, 2, 14, -2];
mergesort(arr, 0, arr.length - 1);
console.log(arr);
