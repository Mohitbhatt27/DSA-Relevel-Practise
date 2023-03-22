function AsteroidCollision(nums) {
  let st = [];
  st.push(nums[0]);
  for(let i = 1; i<nums.length; i++){
    let next = nums[i];
    //a collision is only possible if 
    //1 - stack is non empty
    //2 - top of stack is not negative
    //3 - new element is not positive
    while(st && st[st.length-1]>0 && next<0){

        let diff = nums[i] + st[st.length-1];
        //if difference is +ve, new one is not added
        //if difference is -ve, keep destroying
        //if difference is 0, destroy both
        if(diff>0){
            next = 0; //setting next to 0, which means next time condition will go false
        }
        else if(diff<0){
            st.pop();
        }
        else{
            next = 0;
            st.pop();
        }
    }

    if(next!=0){
        st.push(next);
    }
  }
  return st;
}

console.log(AsteroidCollision([-2, -2, 1, -2]));
