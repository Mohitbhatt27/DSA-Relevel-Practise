//Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

//Return the sorted array.


var frequencySort = function(s) {
    let obj={};
    for(let i=0; i<s.length; i++){
        let ch=s[i];
        if(obj[ch]){
            obj[ch]++;
        }
        else{
            obj[ch]=1;
        }
    }
    
    let temp=Object.entries(obj).sort((x,y)=>{
    if(x[1]==y[1]){
        return y[0]-x[0];
    }
    else{return x[1]-y[1]}});
    
    let ans=[];
    for(let i=0; i<temp.length; i++){
        for(let j=0; j<temp[i][1]; j++){
            ans.push(temp[i][0]);
        }
    }
    return ans;
    
};