// convert a BST to a Greater Sum Tree

let sum;
function bstToGst(root) {
    sum = 0;
    return helper(root);
}

function helper(root) {
  if (root.right != null) {
    helper(root.right);
  }
  sum = root.val = sum + root.val;
  if (root.left != null) {
    helper(root.left);
  }
  return root;
}
