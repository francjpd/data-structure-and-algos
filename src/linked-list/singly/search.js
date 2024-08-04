class Node {
  constructor(v, n = null) {
    this.v = v;
    this.n = n;
  }
}

const ll = new Node(1, new Node(2, new Node(27)));

const search = (v) => {
  let node = ll;
  if (node.v === v) return true;
  while (node.n != null) {
    node = node.n;
    if (node.v === v) return true;
  }
  return false;
};

console.log(search(27));
console.log(search(7));
