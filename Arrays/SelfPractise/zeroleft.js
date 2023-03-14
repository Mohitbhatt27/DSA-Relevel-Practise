/**Requirements: "1) Given an array having 0,1 as input. We need to write a function that sorts the array in ascending order without using inbuilt sort function
Input Array -> [0,1,1,0,1,0,0,1]
Output -> [0,0,0,0,1,1,1,1] */

function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}

function ascen(arr){
    let start=0;
    let end=arr.length-1;
    while(start<end){
        if(arr[start]==1){
            swap(arr,start,end);
            end--;
        }
        if(arr[start]==0){
            start++;
        }
    }
    return (arr);
}

console.log(ascen([1,0,1]));
console.log(ascen([0,1,1,0,1,0,0,1]));
console.log(ascen([0,0,1,1,0]));
