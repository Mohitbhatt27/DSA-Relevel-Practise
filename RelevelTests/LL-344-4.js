let totalIncrements;
var minIncrements = function (n, cost) {
  totalIncrements = 0;
  calculateTotalCost(1, n, cost);
  return totalIncrements;
};

const calculateTotalCost = (node, n, cost) => {
  if (node > n) return 0;
  // calculate the total cost of the left and right sub-trees, and the difference between their costs.
  let leftCost = calculateTotalCost(2 * node);
  let rightCost = calculateTotalCost(2 * node + 1);
  let diff = Math.abs(leftCost - rightCost);

  if (leftCost < rightCost) {
    // left subtree is cheaper, so increment the cost of the current node, and return the sum of the current node's cost and the cost of the right sub-tree.
    totalIncrements += diff;
    return cost[node - 1] + rightCost;
  } else {
    totalIncrements += diff;
    return cost[node - 1] + leftCost;
  }
};
