function maxDepth(node) {
  if (!node) {
    return 0;
  }

  const left = maxDepth(node.left);
  const right = maxDepth(node.right);

  return 1 + Math.max(left, right);
}
