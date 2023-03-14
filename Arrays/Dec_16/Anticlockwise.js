var rotateAC = function(arr) {
    //transpose the matrix
    for (i = 0; i < arr.length; i++){
           for (j = i + 1; j < arr.length; j++) {
               let temp = arr[i][j];
               arr[i][j] = arr[j][i];
               arr[j][i] = temp;
           }
   }
  
    //keep swapping first and last row
    for(let i=0; i<parseInt(arr.length/2); i++){

        let col=arr[0].length;
        for(let j=0; j<col; j++){
            let temp=arr[i][j];
            arr[i][j]=arr[arr.length-1-i][j];
            arr[arr.length-1-i][j]=temp;
        }
    }
    return arr;
}

let arr=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];

console.log(rotateAC(arr));
