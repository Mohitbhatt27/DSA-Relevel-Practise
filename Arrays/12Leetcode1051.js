/**
1051. Height Checker
 */
 var heightChecker = function(heights) {
    let count=0;
    let newarray=heights.slice();

    //since js stores number aphabetically, 10 will be treated as 1, so we cant use sort() without another fn
    console.log(newarray.sort(compare));
    newarray.sort(compare);
    
    for(let i=0; i<heights.length; i++){
        if(newarray[i]!=heights[i]){
            count++;
        }
    }
    return count; 
};
function compare(a,b){
    return a-b;
    }