function rubik (edges) {
const result = [];
const map = new Map();
const visited = new Set();

edges.forEach((edge) => {
  if (!map.has(edge.source)) {
    map.set(edge.source, result.length);
    result.push([edge.source]);
    visited.add(edge.source);
  }
  if (!map.has(edge.target)) {
    map.set(edge.target, result.length);
    result.push([edge.target]);
    visited.add(edge.target);
  } else if (!visited.has(edge.target)) {
    result[map.get(edge.source)].push(edge.target);
    visited.add(edge.target);
  }
});

// Group nodes with the same parent
const groupedResult = [];
result.forEach((nodes, index) => {
  if (index === 0) {
    groupedResult.push(nodes);
  } else {
    const parent = edges.find((edge) => edge.target === nodes[0]).source;
    const groupIndex = groupedResult.findIndex((group) =>
      group.includes(parent)
    );
    groupedResult[groupIndex + 1] = [
      ...(groupedResult[groupIndex + 1] || []),
      ...nodes,
    ];
  }
});
return groupedResult;
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

console.log(rubik(edges));
