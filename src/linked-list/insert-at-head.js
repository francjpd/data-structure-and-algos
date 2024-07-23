class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const input = new Node(0, new Node(1, new Node(2)));
console.log(input);

const output = new Node(5, input);
console.log("output", output);
