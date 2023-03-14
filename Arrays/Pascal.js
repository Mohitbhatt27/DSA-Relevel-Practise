/**
 * Every element is nothing but r-1 C c-1 , which is 
 * nCr = n! / [r! * (n – r)!]
 */
function pascals(rows){
  let triangle = [];
  for (let i = 0; i < rows; i++) {
    triangle[i] = new Array(i + 1);
    for (let j = 0; j < i + 1; j++) {
      if (j == 0 || j == i) {
        triangle[i][j] = 1;
      } else {
        triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
      }
    }
  }
  return triangle;
}


function generate(numRows) {
  let res = [];
  let row, pre = [];
  for (let i = 0; i < numRows; ++i) {
    row = [];
    for (let j = 0; j <= i; ++j)
      if (j == 0 || j == i) row.push(1);
      else row.push(pre[j - 1] + pre[j]);
    pre = row;
    res.push(row);
  }
  return res;
}

console.log(generate(4));