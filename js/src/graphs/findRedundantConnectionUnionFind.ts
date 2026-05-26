function findRedundantConnection(edges: number[][]): number[] {
  const par: number[] = Array.from({ length: edges.length }, (_: any, i) => i);
  const rank: number[] = new Array(par.length).fill(0);

  const find = (node: number): number => {
    if (par[node] === node) return par[node];
    par[node] = find(par[node]);
    return par[node];
  };

  const union = (node1: number, node2: number): boolean => {
    const root1 = find(node1);
    const root2 = find(node2);
    const hasCycle = root1 === root2;
    if (hasCycle) return false;

    if (rank[root1] > rank[root2]) {
      par[root2] = root1;
    } else if (rank[root2] > rank[root1]) {
      par[root1] = root2;
    } else {
      par[root2] = root1;
      rank[root1] += 1;
    }
    return true;
  };

  for (const [u, v] of edges) {
    if (!union(u, v)) return [u, v];
  }
  return [];
}

const a = [
  [1, 2],
  [1, 3],
  [2, 3],
];

const b = [
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 4],
  [1, 5],
];

const c = [
  [1, 3],
  [3, 4],
  [1, 5],
  [3, 5],
  [2, 3],
];

const d = [
  [9, 10],
  [5, 8],
  [2, 6],
  [1, 5],
  [3, 8],
  [4, 9],
  [8, 10],
  [4, 10],
  [6, 8],
  [7, 9],
];

console.log(findRedundantConnection(a));
console.log(findRedundantConnection(b));
console.log(findRedundantConnection(c));
console.log(findRedundantConnection(d));
