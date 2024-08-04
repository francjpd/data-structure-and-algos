class Node {
  constructor(v,p= null, n= null) {
    this.v = v;
    this.p = p;
    this.n = n;
  }
}

const node4 = new Node(6, node3, null);
const node2 = new Node(3, node1, node3);
const node3 = new Node(4, node2, node4);
const node1 = new Node(2, node0, node2);
const node0 = new node(1, null
