let arrange=(arr)=>{
    let zero=0, one=zero, two=arr.length-1;
    while(one<=two){
        if(arr[one]==0){
            swap(arr,zero,one);
            one++;
            zero++;
        }
        else if(arr[one]==1){
            one++;
        }
        else{
            swap(arr,one,two);
            two--;
        }
    } 
}
function swap (arr, i, j){
let temp = arr[i];
arr[i] = arr[j];
arr[j] = temp;
}

//let arr=[0,1,2,0,0,1,2,0];
//other argument needs to be checked
let arr=[0,0,0,1,0,0,1,2,2,2,2,1,1,1,0,1,0,0,2];
arrange(arr);
console.log(arr);


