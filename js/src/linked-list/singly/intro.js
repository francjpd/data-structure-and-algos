class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const a = new Node(1);
const b = new Node(2, a);
const c = new Node(3, b);

console.log("c data", c.data);
console.log("c next", c.next.next.data);
