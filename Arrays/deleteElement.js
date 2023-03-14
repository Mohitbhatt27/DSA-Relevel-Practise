//Delete element from a particular index and return the array

function del(arr,index){
    let k=0; let start=0;
    while(start<arr.length){
        if(start!=index){
            arr[k++]=arr[start];
        }
        start++;
    }
    arr.pop();
    return arr;
}

console.log(del([1,2,3,4,5,6,7,8],5));