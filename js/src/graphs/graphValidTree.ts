function validTree(n: number, edges: number[][]): boolean {
  if (n === 0) return true;

  // Create the adjacence list
  const graph: Record<number, number[]> = {};

  for (let node = 0; node < n; node++) {
    graph[node] = [];
  }

  edges.forEach(([node, dep]: number[]) => {
    graph[node].push(dep);
    graph[dep].push(node);
  });

  const visit = new Set<number>();

  console.log(graph);
  const dfs = (node: number, prev: number) => {
    console.log(node, prev);
    if (visit.has(node) && visit.has(prev) && prev !== -1) {
      return false;
    }
    visit.add(node);
    const deps = graph[node];
    for (const dep of deps) {
      if (dep !== prev && !dfs(dep, node)) {
        return false;
      }
    }
    return true;
  };

  dfs(0, -1);

  return visit.size === n;
}

const a = [
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 4],
];
const n = 5;
const b = [
  [0, 1],
  [1, 2],
  [2, 3],
  [1, 3],
  [1, 4],
];
console.log(validTree(n, a));
console.log(validTree(n, b));
