let arr = [1,2,1,2,3,4,3,4,1];
let xorResult = arr[0];
for(let i = 1; i<arr.length; i++){
    xorResult^=arr[i];
}
console.log(xorResult);