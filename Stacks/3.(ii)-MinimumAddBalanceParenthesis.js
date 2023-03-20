var minAddToMakeValid = function (s) {
  let st = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(') {
      st.push('(');
    } else {
      if (st[st.length - 1] == '(') {
        st.pop();
      } else {
        st.push(')');
      }
    }
  }
  return st.length;
};

let s = "";
console.log(minAddToMakeValid(s));