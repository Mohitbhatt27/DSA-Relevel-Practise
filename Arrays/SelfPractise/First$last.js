//Find First and Last Position of Element in Sorted Array
var searchRange = function(nums, target) {
    let first=binary(nums,target,true);
    if(first!=-1){
        
        return [first,binary(nums,target,false)];
    }
    else return [-1,-1];


    
};

function binary(arr,x,searchingForStart){
    let start=0, end=arr.length-1; let ans=-1;
    while (start<=end){
        let mid=Math.floor((start + end)/2);
        if (arr[mid]===x) {
            //potential answer found
            ans=mid;
            if(searchingForStart){
                end=mid-1;
            }
            else{
                start=mid+1;
            }
        }     
        else if (arr[mid] < x)
             start = mid + 1;
        else
             end = mid - 1;
    }
    return ans;
}