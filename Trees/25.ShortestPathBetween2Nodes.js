function shortestPathBetween2Nodes (root, a, b){
    let lca = LCA (root, a, b);
    let shortestPathA = findShortestPath(lca, a);
    let shortestPathB = findShortestPath(lca, b);
    return shortestPathA + shortestPathB;
}
function LCA(root, a, b) {
  if (root == null) {
    return null;
  }
  if (root.val == a.val || root.val == b.val) {
    return root;
  }
  let left = LCA(root.left, a, b);
  let right = LCA(root.right, a, b);

  if (left == null) {
    return right;
  }

  if (right == null) {
    return left;
  }

  return root;
}
function findShortestPath(root, a) {
    if (root == null) return -1;
    if (root.val == a.val) return 0;
    let leftDistance = findShortestPath(root.left, a);
    let rightDistance = findShortestPath(root.right, a);
    if (leftDistance == -1 && rightDistance == -1) return -1;
    else return 1 + Math.max(leftDistance, rightDistance);
}



/*
If it was a binary search tree, and not a binary tree, then we could have done this:

function findDistance(root, a) {
  if (root == null) return 0;
  if (root.val == a.val) return 0;
  if (root.val > a.val) return 1 + findDistance(root.left, a);
  return 1 + findDistance(root.right, a);
}
*/