//Print a 2d array in a column wave form

function wave(arr){
    let str="";
    let rows=arr.length;
    let col=arr[0].length;
    for (let j=0;j<col;j++) {
        for (let i=0;i<rows;i++) {
            //even column is printed just as that
          if (j%2==0){
            str+=arr[i][j] + " ";
            //odd column is printed in reverse order
          } else{
            str+=arr[rows-i-1][j] +" ";
          }
        }
    }
    return str;     
}

let arr=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
console.log(wave(arr));
