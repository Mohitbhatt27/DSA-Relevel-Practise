//Let's say I want to add an element in an array at a particular index

function insert(arr,elem,index){
    console.log(arr);
    let l=arr.length-1;
    while(l>=index){
        arr[l+1]=arr[l];
        l--;
    }
    arr[index]=elem;
    console.log(arr);
}

insert([1,2,3,4,5,6,7,8,9],5,2);
