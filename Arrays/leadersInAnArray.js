let leaders=(arr)=>{
    let n=arr.length;
    let i=0, j=0;
    //let i be the current leader
    while(j<n-1){
        if(arr[i]>=arr[j+1]){
            j++;
        }
        else{
            i=j+1; //new leader
            j=j+1;
        }
    }
    return arr[i];
}
let arr=[16,17,4,3,5,2];
console.log(leaders(arr));