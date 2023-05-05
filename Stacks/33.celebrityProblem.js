function celeb(grid) {
  let n = grid.length;
  let st = [];
  // if there are n rows, it means there are n people, hence they are numbered from 0-n-1
  for (let i = 0; i < n; i++) {
    st.push(i);
  }
  // now we can pop two people at a time and compare them
  while (st.length != 1) {
    let first = st.pop();
    let second = st.pop();

    // if first knows second, first is not a celebrity
    if (grid[first][second] == 1) {
      st.push(second);
    }
    // if first does not know second, second is not a celebrity
    else {
      st.push(first);
    }
  }
  // now we have one person left in the stack, we need to check if he is a celebrity
  let celeb = st.pop();
  // we check if he knows anyone
  for (let i = 0; i < n; i++) {
    if (i != celeb && grid[celeb][i] == 1) {
      return -1;
    }
  }
  // we check if anyone knows him
  for (let i = 0; i < n; i++) {
    if (i != celeb && grid[i][celeb] == 0) {
      return -1;
    }
  }
  return celeb;
}

let grid = [
  [0, 1, 0],
  [0, 0, 0],
  [0, 1, 0],
];
console.log(celeb(grid));
