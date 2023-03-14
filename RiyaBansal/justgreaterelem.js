function justgreateronright(arr){
    let ans=[];
    let i=0, n=arr.length;
    let j = i + 1;
    while(i<n){

        if(arr[j]>arr[i]){
            ans[i]=arr[j];
            i++;
            j=i+1;
            continue;
        }

         else if (j == n) {
           ans[i] = -1;
           i++;
           j = i;
         } 
         else {
           j++;
         }
       
    }
    return ans;
}
console.log(justgreateronright([10, 7, 4, 2, 9, 10, 11, 3, 2]));
