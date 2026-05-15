export class _Node {
  val: number;
  neighbors: _Node[];

  constructor(val: number, neighbors = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

export function cloneGraph(node: _Node | null): _Node | null {
  if (!node) {
    return null;
  }
  if (!node.neighbors) return new _Node(1);

  const visited: any = {};

  const clone = (node: _Node) => {
    if (visited[node.val]) {
      return visited[node.val];
    }
    const newNode = new _Node(node.val);
    visited[node.val] = newNode;

    node.neighbors.forEach((neighbor: _Node) => {
      newNode.neighbors.push(clone(neighbor));
    });
    return newNode;
  };

  return clone(node);
}

const test = [
  [2, 4],
  [1, 3],
  [2, 4],
  [1, 3],
];
const testA = [[]];

console.log(cloneGraph(test));
