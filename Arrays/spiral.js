var spiralOrder = function(matrix) {
    let m=matrix.length, n=matrix[0].length;
    let top=0, left=0, bottom=m-1, right=n-1;
    let arr=[], c=0;
    let dir=0; //left to right

    while(top<=bottom && left<=right){
        if(dir==0){ //left to right
            for(let i=left; i<=right; i++)
            arr[c++]=matrix[top][i];
            dir=1; //top to down
            top++;
        }
        else if(dir==1){ //top to down
            for(let i=top; i<=bottom; i++)
            arr[c++]=matrix[i][right];
            right--;
            dir=2; //right to left
        }
        else if(dir==2){
            for(let i=right; i>=left; i--)
            arr[c++]=matrix[bottom][i];
            bottom--;
            dir=3
        }
        else if(dir==3){
            for(let i=bottom; i>=top; i--)
            arr[c++]=matrix[i][left];
            left++;
            dir=0;
        }
    }
    return arr;
};


console.log(spiralOrder([[1,2,3,4],[4,5,6,7],[7,8,9,10]]));