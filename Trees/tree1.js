// class TreeNode {
//   constructor(value) {
//     this.value = value;
//     this.children = [];
//   }
// }

// function buildTree(edges) {
//   const nodes = {};

//   // Create all nodes
//   for (const edge of edges) {
//     const { source, target } = edge;
//     if (!nodes[source]) {
//       nodes[source] = new TreeNode(source);
//     }
//     if (!nodes[target]) {
//       nodes[target] = new TreeNode(target);
//     }
//   }

//   // Build the tree structure
//   for (const edge of edges) {
//     const { source, target } = edge;
//     const parentNode = nodes[source];
//     const childNode = nodes[target];
//     parentNode.children.push(childNode);
//   }

//   // Find and return the root node
//   let rootNode;
//   for (const node of Object.values(nodes)) {
//     if (!findParent(nodes, node)) {
//       rootNode = node;
//       break;
//     }
//   }

//   return rootNode;
// }

// function findParent(nodes, node) {
//   for (const parent of Object.values(nodes)) {
//     if (parent.children.includes(node)) {
//       return parent;
//     }
//   }
//   return null;
// }

// function bfs(root) {
//   const queue = [root];
//   const levels = [];

//   while (queue.length > 0) {
//     const levelSize = queue.length;
//     const currentLevel = [];

//     for (let i = 0; i < levelSize; i++) {
//       const currentNode = queue.shift();
//       if (!currentLevel.includes(currentNode.value))
//         currentLevel.push(currentNode.value);

//       queue.push(...currentNode.children);
//     }

//     levels.push(currentLevel);
//   }

//   return levels;
// }

```
class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

function buildTree(edges) {
  const nodes = {};
  const hasParent = new Set();

  // Create all nodes
  for (const edge of edges) {
    const { source, target } = edge;
    if (!nodes[source]) {
      nodes[source] = new TreeNode(source);
    }
    if (!nodes[target]) {
      nodes[target] = new TreeNode(target);
    }
    hasParent.add(target);
  }

  // Build the tree structure
  for (const edge of edges) {
    const { source, target } = edge;
    const parentNode = nodes[source];
    const childNode = nodes[target];
    parentNode.children.push(childNode);
  }

  // Find and return the root node
  let rootNode;
  for (const node of Object.values(nodes)) {
    if (!hasParent.has(node.value)) {
      rootNode = node;
      break;
    }
  }

  return rootNode;
}

function bfs(root) {
  const queue = [root];
  const levels = [];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();
      if (!currentLevel.includes(currentNode.value))
        currentLevel.push(currentNode.value);

      queue.push(...currentNode.children);
    }

    levels.push(currentLevel);
  }

  return levels;
}





let edges = [
  { source: 'data_science', target: 'cataloguer' },
  { source: 'cataloguer', target: 'data_science-1' },
  { source: 'cataloguer', target: 'cataloguer_qc' },
  { source: 'cataloguer', target: 'cataloguer_qc5' }, // this is the new edge
  { source: 'cataloguer_qc', target: 'cataloguer-1' },
  { source: 'data_science-1', target: 'cataloguer-7' }, // this is the new edge
  { source: 'data_science-1', target: 'cataloguer-1' },
  { source: 'cataloguer-1', target: 'data_science-2' },
  { source: 'data_science-2', target: 'cataloguer_qc-1' },
];

const root = buildTree(edges);
const levels = bfs(root);
console.log(levels);
```

