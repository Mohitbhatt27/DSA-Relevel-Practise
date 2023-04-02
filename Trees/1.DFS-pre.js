function dfs_pre(node) {
  if (!node) {
    return;
  }

  console.log(node.val);

  dfs_pre(node.left);
  dfs_pre(node.right);
}

dfs_pre(root); 
