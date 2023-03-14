function smallestMissingNonNegative (arr){
    let start = 0;
    let end = arr.length-1;
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid]==mid){
            start = mid + 1; 
        }
        else if(arr[mid]!=mid){
            end = mid - 1;
        }
    }
    return start;
}

let arr=[0,1,2,3];
console.log(smallestMissingNonNegative(arr));