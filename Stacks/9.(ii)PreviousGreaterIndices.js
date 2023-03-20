function pgi(nums) {
  let st = [];
  nums.reverse();
  let output = Array(nums.length).fill(-1);
  st.push(0);
  for (let i = 1; i < nums.length; i++) {
    let next = nums[i];
    while(st.length>0 && next>nums[st[st.length-1]]){
        let topIndex = st.pop();
        output[topIndex] = nums.length - i - 1; //imp
    }
    st.push(i);
  }

  output.reverse();
  nums.reverse(); //imp to reverse back our original array
  return output;
}

let arr = [100, 80, 60, 70, 60, 75, 85];
console.log(pgi(arr));
