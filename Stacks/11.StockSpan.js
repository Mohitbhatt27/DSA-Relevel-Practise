function stockSpan (nums){
    let st = [];
    let output = Array(nums.length).fill(1); //at least 1 will be the ans
    st.push(0);
    let pgiArr = pgi(nums); 
    
    for(let i = 0; i<nums.length; i++){
       if(pgiArr[i]==-1){
        output[i]=1;
       }
       else{
        output[i]=i-pgiArr[i];
       }
    }

    return output;

}

function pgi(nums){
  nums.reverse();
  let stack = [];
  let result = Array(nums.length).fill(-1);
  stack.push(0);

  for (let i = 1; i < nums.length; i++) {
    let next = nums[i];
    while (stack.length > 0 && next > nums[stack[stack.length - 1]]) {
      let topIndex = stack.pop();
      result[topIndex] = nums.length - i - 1;
    }
    stack.push(i);
  }
  nums.reverse(); //imp to reverse back our original array
  return result.reverse();
}

console.log(stockSpan([100,80, 60, 70, 60, 75, 85]));
