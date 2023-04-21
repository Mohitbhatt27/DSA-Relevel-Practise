/**
 * We can do boundary traversal of a binary tree in three simple steps: traverse left boundary, traverse the leaf nodes and traverse right boundary.
  1. Left boundary is the path from root to the leftmost node.
  2. Right boundary is the path from root to the rightmost node.
  3. Leftmost node is the leaf node of the left boundary.
  4. Rightmost node is the leaf node of the right boundary.
  5. We need to take care that the same nodes are not printed multiple times.
 */


class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  checkLeaf() {   
    // check if node is leaf node
    return this.left == null && this.right == null;
  }
}

let result = []; // global variable

function LeftBoundary(root) {
    // print left boundary of tree
  if (root == null) {
    return;
  }

  let node = root;

  while (!node.checkLeaf()) {
    result.push(node.data);
    node = node.left != null ? node.left : node.right;
  }
}

function RightBoundary(root) {
    // print right boundary of tree
  if (root == null || root.checkLeaf()) {
    return;
  }

  RightBoundary(root.right != null ? root.right : root.left);

  result.push(root.data);
}

function printLeaf(root) {
    // print leaf nodes of tree
  if (root == null) {
    return;
  }

  printLeaf(root.left);

  if (root.checkLeaf()) {
    result.push(root.data);
  }

  printLeaf(root.right);
}

function BoundaryTraversal(root) {
    // print boundary of tree
  if (root == null) {
    return;
  }

  result.push(root.data);

  LeftBoundary(root.left);

  if (!root.checkLeaf()) {
    printLeaf(root);
  }

  RightBoundary(root.right);
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.left.left.left = new Node(8);
root.left.left.right = new Node(9);
root.left.right.right = new Node(10);
root.right.right.left = new Node(11);
root.left.left.right.left = new Node(12);
root.left.left.right.right = new Node(13);
root.right.right.left.left = new Node(14);

BoundaryTraversal(root);
console.log(result);
// 1 2 4 8 12 13 10 6 14 11 7 3
