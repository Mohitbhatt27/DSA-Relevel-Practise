/* 
My aim is to assign 1-5 to index 0-4 in an array, and then by backtracking decrease each element by 2
*/

function changeArray(arr,idx,val){
    if(idx==arr.length){
        console.log(arr);
        return;
    }
    //assigning 1,2,3,4,5 to the array
    arr[idx]=val;
    changeArray(arr,idx+1,val+1);
    //backtacking each value by -2
    arr[idx]-=2;
}

let arr = Array(5);
changeArray(arr,0,1);
console.log(arr);