function insertAtBottom(st, elem) {
  if (st.length == 0) {
    st.push(elem);
    return;
  }
  let temp = st.pop();
  insertAtBottom(st, elem);
  st.push(temp);
}


function reverse(st) {
  /**
   * Time: O(n^2)
   * Space: O(n)
   */

  //base case
  if (st.length == 0) {
    return;
  }

  let top = st[st.length-1]; //store the top
  st.pop(); //remove the top
  reverse(st); // recursively anyhow reverse the remaining stack
  insertAtBottom(st, top);
}