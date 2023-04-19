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

  return st;
}

// 7,8,9,0,3,4,5,6
function insertAtIdx (st, elem, idx) {
  if (st.length == idx) {
    st.push(elem);
    return;
  }
  let temp = st.pop();
  insertAtIdx(st, elem, idx);
  st.push(temp);
  return st;
}

let st = [7,8,9,0,3,4,5,6];
let elem = 2;
let idx = 4;

console.log(insertAtIdx(st, elem, idx));