var isValidBST = function (root) {
  return f(root).isBST;
};

function f(root) {

    if(root == null) {
        return {
            isBST: true,
            min: +Infinity,
            max: -Infinity
        };
    }

    let left = f(root.left);
    let right = f(root.right);

    if(left.isBST && right.isBST && left.max < root.val && root.val < right.min) {
        return {
            isBST: true,
            min: Math.min(root.val, left.min, right.min),
            max: Math.max(root.val, right.max, left.max)
        };
    }

    else{
        return {
            isBST: false,
            min: Math.min(root.val, left.min, right.min),
            max: Math.max(root.val, left.max, right.max)
        };
    }
}


