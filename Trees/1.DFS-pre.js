function dfs(node) {
  if (!node) {
    return;
  }

  console.log(node.val);

  dfs(node.left);
  dfs(node.right);
}

dfs(root);
