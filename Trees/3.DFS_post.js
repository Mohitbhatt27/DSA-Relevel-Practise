function dfs_post(node) {
  if (!node) {
    return;
  }

  dfs_post(node.left);
  dfs_post(node.right);
  console.log(node.val);
}
dfs_post(root);