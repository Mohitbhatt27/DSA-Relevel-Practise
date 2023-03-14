var findDisappearedNumbers = function(nums) {
    let number=[];
    for(let i=0; i<nums.length; i++){
        let index = Math.abs(nums[i]) - 1;
        if (nums[index] > 0) {
            nums[index] = -1*nums[index];      
    }
    }
    for(let i=0; i<nums.length; i++){
        if(nums[i]>0){
            number.push(i+1);
        }
    }
    return number;
};
