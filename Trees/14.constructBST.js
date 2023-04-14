//Given preorder traversal of a tree, construct the binary tree.

// Input: preorder[] = {10, 5, 1, 7, 40, 50}
// Output: Root of following tree
//         10
//        /  \
//       5    40
//      / \     \
//     1   7    50

// Input: preorder[] = {1, 5, 10, 40, 30, 15, 28, 20}
// Output: Root of following tree
//         1
//          \
//           5
//            \
//             10
//              \
//               40
//              /  \
//            30    28
//           /      /
//          15     20


class Node {
  constructor(data) {
    this.val = data;
    this.left = null;
    this.right = null;
  }
}

function buildBST(preorder) {
  if (!preorder || preorder.length == 0) {
    return null;
  }

  let root = new Node(preorder[0]);
  let stack = [];
  stack.push(root);
  for (let i = 1; i < preorder.length; i++) {
    let node = new Node(preorder[i]);
    let parent = null;
    while (stack.length > 0 && stack[stack.length - 1].val < node.val) {
      parent = stack.pop();
    }
    if (parent) {
      parent.right = node;
    } else {
      stack[stack.length - 1].left = node;
    }
    stack.push(node);
  }
  return root;
}



