//Given an array, write a program to reverse the same array, you should not create a new array

function swap(arr,i,j){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    return arr;
}
function reverseArray(arr){
    let start=0, end=arr.length-1;
    while(start<end){
        swap(arr, start, end);
        start++;
        end--;
    }
    return arr;
}

console.log(reverseArray([1,2,3,4,5,6]));
