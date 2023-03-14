//https://leetcode.com/problems/spiral-matrix-ii/

var generateMatrix = function(n) {
    let ans=Array(n);
    for(let i=0; i<n; i++){
        ans[i]=Array(n);
    }

    let c=1;

    let top=0, bottom=n-1, left=0, right=n-1; 
    let dir=0;

    while(top<=bottom && left<=right){

if (dir==0) {
        for(let i=left; i<=right; i++){
            ans[top][i]=c++;
        }
        top++;
        dir=1;
}

if (dir==1) {
	    for(let i=top; i<=bottom; i++){
	        ans[i][right]=c++;
	    }
	    dir=2;
	    right--;
}

if (dir==2) {
	    for(let i=right; i>=left; i--){
	        ans[bottom][i]=c++;
	    }
	    dir=3
	    bottom--;
	
}
 if (dir==3) {
	   for(let i=bottom; i>=top; i--){
	        ans[i][left]=c++;
	    }
	    dir=0;
	    left++;
}
}

    console.log(ans);
};

generateMatrix(5);