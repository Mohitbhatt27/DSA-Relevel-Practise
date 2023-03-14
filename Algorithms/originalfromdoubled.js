var findOriginalArray = function(arr) {
    if(arr.length%2==1) return [];
    let obj={};
    for(let i=0; i<arr.length; i++){
        if(obj[arr[i]]) obj[arr[i]]++;
        else obj[arr[i]]=1; 
    }
    let ans=[];
    for(let i=0; i<arr.length; i++){
        let elem=arr[i];
        if(obj[elem]){
            if(obj[2*elem]){
                obj[2*elem]--;
                obj[elem]--;
            }
            ans.push(elem);
        }
    }
    return ans;
}
console.log(findOriginalArray([1, 3, 4, 2, 6, 8]));