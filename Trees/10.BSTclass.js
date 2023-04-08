class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insertHelper(x, root) {
    if (root == null) {
      return new Node(x);
    }
    if (x < root.value) {
      // x should go to the lst
      root.left = this.insertHelper(x, root.left);
    } else {
      // x should go to the rst
      root.right = this.insertHelper(x, root.right);
    }

    return root;
  }

  insert(x) {
    if (this.root == null) {
      this.root = new Node(x);
      return;
    }
    this.insertHelper(x, this.root);
  }

  preorderhelper(root) {
    if (root == null) return;
    console.log(root.value);
    this.preorderhelper(root.left);
    this.preorderhelper(root.right);
  }

  preorder() {
    this.preorderhelper(this.root);
  }

  inorderhelper(root) {
    if (root == null) return;
    this.inorderhelper(root.left);
    console.log(root.value);
    this.inorderhelper(root.right);
  }

  inorder() {
    this.inorderhelper(this.root);
  }

  removeHelper(root, x) {
    /**
     * Time: O(h)
     * Space: O(h)
     */
    if (root == null) return null;
    if (root.value == x) {
      // this node has to be removed, there can be three cases

      // Case 1: leaf node
      if (root.left == null && root.right == null) return null;

      // case 2: has single child
      if (root.left == null && root.right != null) {
        // No left child, just right child
        let temp = root.right;
        root.right = null;
        return temp;
      }
      if (root.left != null && root.right == null) {
        // No right child just left child
        let temp = root.left;
        root.left = null;
        return temp;
      }


      // Case 3: has both children
      // here we can either find the min in the right subtree or max in the left subtree
      // and replace the value of the node to be deleted with the min/max value

      // find the max in the left subtree
      let temp = root.left;
      while (temp.right) {
          temp = temp.right;
      }
      
      //now temp is the max in the left subtree, we can make our root value as temp value
      //and then call this function recursively to remove this value from the left subtree

      root.value = temp.value; // changing value of root 
      root.left = this.removeHelper(root.left, temp.value);
      return root;
    }



    if (x < root.value) {
      root.left = this.removeHelper(root.left, x); // root = 14
    } else {
      root.right = this.removeHelper(root.right, x);
    }
    return root;
  }

  remove(x) {
    this.removeHelper(this.root, x);
  }
}


let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(45);
bst.insert(19);
bst.insert(3);
bst.insert(7);