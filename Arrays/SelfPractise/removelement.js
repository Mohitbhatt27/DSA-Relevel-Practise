var removeElement = function(nums, val) {
    nums.sort((x,y)=>(x-y));
    let i=0; let j=nums.length-1; let count=0;
    while(i<=j){
        let mid=Math.floor((i+j)/2);
        if(nums[mid]>val){
             j=mid-1;
        }
        else if(nums[mid]<val){
            i=mid+1;
        }
        else{
            let temp=mid+1;
            while(nums[mid]==val){
                count++;
                mid--;
            }
            while(nums[temp]==val){
                count++;
                temp++;
            }      
            return nums.length-count; 
}
}
}
console.log(removeElement([0,1,2,2,3,0,4,2],2));