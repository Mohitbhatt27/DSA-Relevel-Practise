var widthOfBinaryTree = function (root) {
  if (!root) return 0;

  // 0n denotes a bigint number i.e n after any number makes it bigint
  let maxWidth = 0n;

  const queue = [];

  // we will store nodes along with their positions. Starting with root node from 0n (bigint 0)
  queue.push([root, 0n]);

  // While we have elements in our queue we will iterate (bfs)
  while (queue.length) {

    const len = queue.length;
    let node, //Node at current position
      pos = 0n, //position of the respective node
      first = 0n; //first node will be at 0th position

    for (let i = 0; i < len; i++) {
      [node, pos] = queue.shift();
      // first will always be the 1st node at current level in bfs
      if (i === 0) first = pos;

      // If node has child then we push it in queue and child's position will be current node position * 2 (n denotes bigint)
      if (node.left) queue.push([node.left, pos * 2n]);
      if (node.right) queue.push([node.right, pos * 2n + 1n]);
    }

    
    const currWidth = pos - first + 1n;
    
    // Math.max cannot be used with big int so we calculate maximum value as below
    maxWidth = maxWidth > currWidth ? maxWidth : currWidth;
  }

  return maxWidth;
};
