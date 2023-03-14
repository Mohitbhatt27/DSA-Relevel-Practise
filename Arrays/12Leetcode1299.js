/**
1299. Replace Elements with Greatest Element on Right Side
 */
 var replaceElements = function(arr) {
    let number=[];
    for(let i=0; i<arr.length; i++){
        number.push(greatest(arr,i+1,arr.length-1));
    }
    return number;
};
function greatest(arr,start,end){
    if (start===end){
        return arr[end];
    }
    if(start>end){
        return -1;
    }
    let greatest=arr[start];
    for(let i=start+1; i<=end; i++){
        if(arr[i]>greatest){
            greatest=arr[i];
        }
    }
    return greatest;
}