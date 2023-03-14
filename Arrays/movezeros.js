/*
Given an integer array nums, move all 0's to the end of it
while maintaining the relative order of the non-zero elements.
*/

var moveZeroes = function(arr) {
    if(arr.length<=1){
        return arr;
    }
    let i=0, l=arr.length, j=1;
    while(j<l){
        if(arr[i]==0 & arr[j]!=0){
            swap(arr,i,j);
            i++;
            j++;
        }
        if(arr[i]==0 && arr[j]==0){
            
            j++;
        }
    }
    return arr; 
};

function swap(arr,i,j){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    return arr;
}

console.log(moveZeroes([0,1,0,3,12]));