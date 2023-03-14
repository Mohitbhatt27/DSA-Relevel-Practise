function subsum(arr,k){
    let ans=0;
    let obj={};
    let p=[]; //prefix array
    p.push(arr[0]);
    for(let i=1; i<arr.length; i++){
        p.push(p[i-1]+arr[i]);
    }
    console.log(p);
    for(let j=0; j<p.length; j++){

        if(obj[p[j]]){
            obj[p[j]]++;
        }
        else obj[p[j]]=1;

        //if p[j]-k is present, that means a subarray is found

        if(obj[p[j]-k]){
            ans+=obj[p[j]-k]
        }


        if(p[j]==k) ans+=obj[p[k]];
    }
    console.log(obj);
    console.log(ans);
}
subsum([10, 2, -2, -20, 10],-10);