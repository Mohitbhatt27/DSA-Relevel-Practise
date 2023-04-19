class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

let postOrderIndex;
var buildTree = function (inorder, postorder) {
  postOrderIndex = postorder.length - 1;
  return buildBinaryTreeFromInorderAndPostorder(
    inorder,
    postorder,
    0,
    inorder.length - 1
  );
};

function buildBinaryTreeFromInorderAndPostorder(inorder, postorder, low, high) {
  if (low > high) return null; //not just return, we have to return null
  let newNode = new TreeNode(postorder[postOrderIndex]);
  postOrderIndex--;

  if (low == high) return newNode; // leaf node

  let idx = inorder.indexOf(newNode.val);

  newNode.right = buildBinaryTreeFromInorderAndPostorder(
    inorder,
    postorder,
    idx + 1,
    high
  );
  newNode.left = buildBinaryTreeFromInorderAndPostorder(
    inorder,
    postorder,
    low,
    idx - 1
  );
  return newNode;
}

function inorder(root) {
  if (!root) return;
  inorder(root.left);
  console.log(root.val);
  inorder(root.right);
}

let inn = [9, 3, 15, 20, 7];
let post = [9, 15, 7, 20, 3];
let root = buildTree(inn, post);
inorder(root);
