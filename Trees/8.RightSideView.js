//Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

let maxLevel = -1;
let result;
var rightSideView = function (root) {
  result = [];
  dfs(root, 0);
  return result;
};

function dfs (node, currentLevel) {
  if (!node) {
    return;
  }

  if (currentLevel > maxLevel) {
    maxLevel = currentLevel;
    result.push(node.val);
  }

  dfs(node.right, currentLevel + 1);
  dfs(node.left, currentLevel + 1);
}
