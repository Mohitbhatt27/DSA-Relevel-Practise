//Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

var setZeroes = function(matrix) {
    let m=matrix.length;
    let n=matrix[0].length;
    // let row0=Array(m).fill(true);
    // let col0=Array(n).fill(true);

    // for(let i=0; i<m; i++){
    //     for(let j=0; j<n; j++){
    //         if(matrix[i][j]==0){
    //             row0[i]=false;
    //             col0[j]=false;
    //         }
    //     }
    // }

    // for(let i=0; i<m; i++){
    //     for(j=0; j<n; j++){
    //         if(row0[i]==false || col0[j]==false){
    //             matrix[i][j]=0;
    //         }
    //     }
    // }

    //The above approach is correct, but if we want to not use extra space than
    //what we may do is if we find a 0 in first traversal, we will make the first
    //elem of that row and column as zero, instead of not using extra space

    //Another catch, first a[0][0] represents both first row and first column,
    //so just one boolean variable for either column or row

    let iscol=false; 
    for(let i=0; i<m; i++){

        if(matrix[i][0]==0){
            iscol=true;
        }

        //col loop will start from one as we are not checking it

        for(let j=1; j<n; j++){
            if(matrix[i][j]==0){
                matrix[i][0]=0;
                matrix[0][j]=0;
            }
        }
    }

    for(let i=1; i<m; i++){
        for(j=1; j<n; j++){
            if(matrix[i][0]==0 || matrix[0][j]==0){
                matrix[i][j]=0;
            }
        }
    }

    if(matrix[0][0]==0){
    for(let i=0; i<n; i++){
        matrix[0][i]=0;

    }
    }

    if(iscol){
        for(let i=0; i<m; i++){
            matrix[i][0]=0;
        }
    }    
};