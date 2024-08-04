class Node {
  constructor(v, p = null, n = null) {
    this.v = v;
    this.p = p;
    this.n = n;
  }
}

const fromArr = (arr) => {
  let node = new Node(arr[0]);
  const initial = node;
  arr.forEach((num, i) => {
    if (i === 0) return;
    const temp = new Node(num, node);
    node.n = temp;
    node = temp;
  });
  return initial;
};

const deletelast = (ll) => {
  let node = ll;
  while (node.n !== null) {
    node = node.n;
  }
  node.p.n = null;
};

const arr = [1, 3, 4];

const ll = fromArr(arr);
console.log(ll);
deletelast(ll);
console.log(ll);
