/**
 * preorder = [3,9,20,15,7]
 * inorder = [9,3,15,20,7]
 * 
 * We know that the first element in preorder always the root of our subtree.
 * Based on the above observation, we can say that as in inorder we read left subtree first, and then the root, so if we can find our root in the inorder, we know that all elements to the left of this root are a part of left subtree, and all elements to the right of this root are a part of right subtree.
 * 
 * let's say currently we difine a variable i to travel on preorder, and high and low to define the range of inorder.
 * if i is our root, then we can do linear search in the inorder from low to high to find i
 * let's say we found our i at j, then we can say that
 * all elements from low to j-1 are a part of left subtree
 * all elements from j+1 to high are a part of right subtree 
 * 
 * There will be no right or left child if low and high are equal

function f(node, low, high){
    // this function constructs the binary tree with inorder range [low, high]
    let root = new Node(node.val);
    root.left = f(node.left, low, i-1);
    root.right = f(node.right, i+1, high);
    return root;
}

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

let preOrderIndex;
var buildTree = function (preorder, inorder) {
  preOrderIndex = 0;
  return buildBinaryTreeFromPreorderAndInorder(
    preorder,
    inorder,
    0,
    preorder.length - 1
  );
};

function buildBinaryTreeFromPreorderAndInorder(preorder, inorder, low, high) {

  if (low > high) return null; //not just return, we have to return null
  
  let newNode = new TreeNode(preorder[preOrderIndex]);
    preOrderIndex++;

  if (low == high) return newNode; // leaf node

  let idx = inorder.indexOf(newNode.val); //searching new node in inorder array

  newNode.left = buildBinaryTreeFromPreorderAndInorder(
    preorder,
    inorder,
    low,
    idx - 1
  );
  newNode.right = buildBinaryTreeFromPreorderAndInorder(
    preorder,
    inorder,
    idx + 1,
    high
  );
  return newNode;
}

function preorder(root) {
  if (!root) return;
  console.log(root.val);
  preorder(root.left);
  preorder(root.right);
}

let pre = [1, 2];
let inorder = [2, 1];
let root = buildTree(
  pre,
  inorder,
  0,
  pre.length - 1
);
preorder(root);
