
function diameter(node) {
    if (!node) {
        return 0;
    }
    let leftDiamter = diameter(node.left);
    let rightDiamter = diameter(node.right);
    let leftHeight = height(node.left);
    let rightHeight = height(node.right);
    let totalHeight = leftHeight + rightHeight;
    return Math.max(totalHeight, leftDiamter, rightDiamter);
}

function height(node) {
  if (!node) {
    return 0;
  }

  const left = height(node.left);
  const right = height(node.right);

  return 1 + Math.max(left, right);
}
