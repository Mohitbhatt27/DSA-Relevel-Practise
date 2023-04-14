var isValidBST = function (root) {
  return helper(root).isBST;
};

function helper(root) {
  if (root == null) {
    return {
      isBST: true,
      min: +Infinity,
      max: -Infinity,
    };
  }

  let left = helper(root.left);
  let right = helper(root.right);

  if (
    left.isBST &&
    right.isBST &&
    left.max < root.val &&
    root.val < right.min
  ) {
    return {
      isBST: true,
      min: Math.min(root.val, left.min, right.min),
      max: Math.max(root.val, right.max, left.max),
    };
  } else {
    return {
      isBST: false,
      min: Math.min(root.val, left.min, right.min),
      max: Math.max(root.val, left.max, right.max),
    };
  }
}