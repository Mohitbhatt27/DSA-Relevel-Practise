let obj;
let minCol, maxCol;
function topView(root) {
  obj = {};
  minCol = 0;
  maxCol = 0;
  dfs_preorder(root, 0);
  let result = [];
  for (let i = minCol; i <= maxCol; i++) {
    let temp = obj[i].sort((a, b) => a - b);
    result.push(temp[temp.length - 1]);
  }
  return result;
}

function dfs_preorder(root, col) {
  if (root == null) return;
  if (obj[col]) {
    obj[col].push(root.val);
  } else {
    obj[col] = [root.val];
  }

  minCol = Math.min(minCol, col);
  maxCol = Math.max(maxCol, col);

  dfs_preorder(root.left, col - 1);
  dfs_preorder(root.right, col + 1);
}
