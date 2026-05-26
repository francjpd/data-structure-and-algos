function countComponents(n: number, edges: number[][]): number {
  if (n === 0) {
    return 1;
  }
  let count = 0;
  const graph: Record<number, number[]> = {};
  const visited: Set<number> = new Set();

  for (let node = 0; node < n; node++) {
    graph[node] = [];
  }

  // map the edges to the graph;
  // We need map them back and forth as is an undirected graph
  edges.forEach(([node, dep]) => {
    graph[node].push(dep);
    graph[dep].push(node);
  });

  console.log(graph);
  const dfs = (node: number, prev: number) => {
    if (visited.has(node) && prev !== -1) {
      //cycle detected
      return;
    }
    visited.add(node);

    const deps = graph[node];

    for (const dep of deps) {
      if (!visited.has(dep)) {
        dfs(dep, node);
      }
    }
  };

  for (let node = 0; node < n; node++) {
    if (!visited.has(node)) {
      dfs(node, -1);
      count++;
    }
  }
  return count;
}

const a = [
  [0, 1],
  [1, 2],
  [3, 4],
];
const b = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
];

const n = 5;

console.log(countComponents(n, a));
console.log(countComponents(n, b));
