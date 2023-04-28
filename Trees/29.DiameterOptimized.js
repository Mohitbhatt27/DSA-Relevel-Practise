let ans;
function diameterOfBinaryTree(node) {
  ans = 0;
  diameter(node);
  return ans;
}

function diameter(node) {
  if (!node) {
    return 0;
  }
  let leftDiamter = diameter(node.left);
  let rightDiamter = diameter(node.right);
  let totalHeight = leftDiamter + rightDiamter;
  ans = Math.max(ans, totalHeight);
  return 1 + Math.max(leftDiamter, rightDiamter);
}
