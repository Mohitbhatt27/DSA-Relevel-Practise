//https://leetcode.com/problems/reshape-the-matrix/description/

var matrixReshape = function(mat, r, c) {

    if (mat.length == 0 || r * c != mat.length * mat[0].length) 
    return mat;

    let result=Array(r);
    for(let i=0; i<r; i++){
        result[i]=Array(c);
    }

    let row=0, col=0;

    for(let i=0; i<mat.length; i++){
        for(let j=0; j<mat[0].length; j++){
            result[row][col]=mat[i][j];
            col++;
            if(col==c){
                row++; col=0;
            }
        } 
    }
   return result;
}