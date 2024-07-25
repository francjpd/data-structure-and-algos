class Node {
  constructor(v, n = null) {
    this.v = v;
    this.n = n;
  }
}

const ll = new Node(3, new Node(1, new Node(4)));
const traverseLL = () => {
  let i = 1;
  let node = ll;
  while (node.n != null) {
    i++;
    node = node.n;
  }
  return i;
};

console.log(traverseLL());
