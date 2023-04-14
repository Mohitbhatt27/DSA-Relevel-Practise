function isBST(root) {
  /**
   * isBST: checks if the tree is BST or not
   * min: minimum value in the tree
   * max: maximum value in the tree
   * height: number of edges in the longest path from root to leaf node
   * size: number of nodes in the tree
   */
  if (root == null) {
    return {
      isBST: true,
      min: +Infinity,
      max: -Infinity,
      height: 0,
      size: 0,
    };
  }
  
  let left = isBST(root.left);
  let right = isBST(root.right);

  if (
    left.isBST &&
    right.isBST &&
    root.key > left.max &&
    root.key < right.min
  ) {
    return {
      isBST: true,
      min: Math.min(root.key, left.min, right.min),
      max: Math.max(root.key, left.max, right.max),
      height: Math.max(left.height, right.height) + 1,
      size: left.size + right.size + 1,
    };
  }
  return {
    isBST: false,
    min: Math.min(root.key, left.min, right.min),
    max: Math.max(root.key, left.max, right.max),
    height: Math.max(left.height, right.height) + 1,
    size: 0,
  };
}

class Solution {
  largestBst(root) {
    let result = isBST(root);
    if (result.isBST) {
      return result.size;
    }
    return Math.max(this.largestBst(root.left), this.largestBst(root.right));
  }
}
