var construct2DArray = function(original, m, n) {
    let c=0;
    
    if(original.length!=m*n)
    return [];

    let arr=Array(m);
    for(let i=0; i<m; i++){
        arr[i]=Array(n).fill(0);
    }
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            //console.log(i,j,arr[i],original,0);
            arr[i][j]=original[c++];
        }
    }
    console.log(arr);  
};

let original = [1,2,3,4], m = 2, n = 2;
construct2DArray(original,m,n);