function sameTreeOrNot (root1, root2) {
  if (!root1 && !root2) return true;
  if (!root1 || !root2) return false;
  if (root1.val !== root2.val) return false;
  return sameTreeOrNot(root1.left, root2.left) && sameTreeOrNot(root1.right, root2.right);
}