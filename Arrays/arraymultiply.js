function multiply(arr,m,n,nums,k){
    
    let  result= new Array(m); 
    for (let i=0; i<m; i++) {
        result[i] = new Array(k).fill(0); 
    }
    for (let i = 0; i<m; i++) {
        for (let j = 0; j<k; j++) {
          for (let k = 0; k<n; k++) { //as n is common in both matrix
            result[i][j] += arr[i][k] * nums[k][j];
          }
        }
    }
 return result;
}

arr=[[1,2,3],[4,5,6]];
m=arr.length;
n=arr[0].length;
nums=[[1,2,3],[4,5,6],[7,8,9]];
k=nums[0].length;

console.log(multiply(arr,m,n,nums,k))