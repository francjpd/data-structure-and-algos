const Node = (value, next = null) => {
  const val = value;
  return { val, next };
};

const Queue = () => {
  let head = Node(null);
  let last = head;
  let length = 0;
  return {
    push(x) {
      const node = Node(x);
      if (length === 0) {
        head = node;
        last = node;
      } else {
        last.next = node;
        last = node;
      }
      length++;
    },
    length() {
      return length;
    },
    pop() {
      const valueToRemove = head;
      head = head.next;
      length--;
      return valueToRemove.val;
    },
    top() {
      return head.val;
    },
  };
};
const example = Queue();

example.push(6);
example.push(3);
example.push(2);
console.log("length", example.length());
console.log("pop", example.pop());
console.log("length again", example.length());
console.log("top", example.top());
console.log("pop", example.pop());
console.log("pop", example.pop());
