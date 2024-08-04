class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const input = new Node(12, new Node(5, new Node(8, new Node(7))));

console.log("input", input.next);
let temp = input;
while (temp.next.next != null) {
  temp = temp.next;
}
temp.next = null;

console.log("output", input.next);
