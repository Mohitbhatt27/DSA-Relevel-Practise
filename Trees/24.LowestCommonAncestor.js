function LCA (root, a, b) {
    if (root == null) {
        return null;
    }
    if (root.val == a.val || root.val == b.val) {
        return root;
    }
    let left = LCA(root.left, a, b);
    let right = LCA(root.right, a, b);

    // if I have got null from left traversal, that means both a and b are in right subtree. here we return whatever was present in right variable

    if (left == null) {
        return right;
    }

    if (right == null) {
        return left;
    }

    // if both left and right has not returned null, that means I have got a and b in different subtrees. So I  can just return the root

    return root;
}