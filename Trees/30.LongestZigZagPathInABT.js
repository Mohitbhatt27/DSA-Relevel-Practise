var longestZigZag = function (root) {

  function helper(node, step, type) {
    ans = Math.max(ans, step);
    if (node.left != null) {
      helper(node.left, 1 + (type >= 0 ? step : 0), -1);
    }
    if (node.right != null) {
      helper(node.right, 1 + (type <= 0 ? step : 0), 1);
    }
  }
  let ans = 0;
  helper(root, 0, 0);
  return ans;
};
