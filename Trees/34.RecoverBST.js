//You are given the root of a binary search tree (BST), where the values of exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.
let first, second, prev;
const recoverTree = function (root) {
  (first = null), (second = null), (prev = null);
  dfs(root);
  [first.val, second.val] = [second.val, first.val];
};

const dfs = (root) => {
  if (!root) return;
  dfs(root.left);
  // if current element is less than previous element, we have a breach/violation
  if (prev && root.val < prev.val) {
    // if this is a first breach, we have to get hold of both these elements as in future there are chances that these two are the elements that we need to swap
    if (first == null) {
      first = prev;
    }
    // if this is a second breach, we have to get hold of only the second element
    second = root;
  }
  // update prev
  prev = root;

  dfs(root.right);
};