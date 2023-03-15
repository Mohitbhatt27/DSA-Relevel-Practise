function insertAtBottom(st, elem) {
  if (st.length == 0) {
    st.push(elem);
    return;
  }
  let temp = st.pop();
  insertAtBottom(st, elem);
  st.push(temp);
}


function reverse(stack) {
  if (stack.length == 0) {
    return;
  }

  let curr_top = stack[stack.length-1]; //store the top
  stack.pop(); //remove the top
  reverse(stack); // assume recursion reverses the rest of stack
  insertAtBottom(stack, curr_top);
  
}