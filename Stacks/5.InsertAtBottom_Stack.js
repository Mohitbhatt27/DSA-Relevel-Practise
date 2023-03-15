function insertAtBottom(st, elem) {
    
  //base case  
  if (st.length == 0) {
    st.push(elem);
    return;
  }

  let temp = st.pop(); 
  //pop the top element from the stack and store it in a temporary variable temp

  insertAtBottom(st, elem);

  st.push(temp);
}
