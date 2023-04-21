// given preorder of a bst, return the leaf nodes

let result = [];
function leafNode(preorder) {
  let stack = [];
  for (let i = 0, j = 1; j < preorder.length; i++, j++) {
    let found = false;

    if (preorder[i] > preorder[j]) stack.push(preorder[i]);
    else {
      while (stack.length > 0) {
        if (preorder[j] > stack[stack.length - 1]) {
          stack.pop();
          found = true;
        } else break;
      }
    }

    if (found) result.push(preorder[i]);
  }

  result.push(preorder[preorder.length - 1]); //rightmost node is always a leaf node
}

let preorder = [6, 4, 3, 5, 8, 7, 9];
leafNode(preorder);
console.log(result);