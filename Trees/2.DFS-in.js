function dfs_in (node) {
    if (!node) {
        return;
    }
    dfs_in(node.left);
    console.log(node.val);
    dfs_in(node.right);
}
dfs_in(root);