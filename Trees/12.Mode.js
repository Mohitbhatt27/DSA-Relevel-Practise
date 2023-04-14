// Given the root of a BST with duplicates, find the mode(s) (the most frequently occurred element) in the given BST.

let obj;
let max;
function findMode(root) {
  obj = {};
  max = 0;
  let ans = [];
  helper(root);
  for (let key in obj) {
    if (obj[key] == max) {
      ans.push(key);
    }
  }
  return ans;
}

function helper(root) {
  if (!root) {
    return;
  }
  if (obj[root.val]) {
    obj[root.val]++;
  } else {
    obj[root.val] = 1;
  }

  max = Math.max(max, obj[root.val]);
  helper(root.left);
  helper(root.right);
}
