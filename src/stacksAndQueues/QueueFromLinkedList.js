const Node = (value, next = null) => {
  const val = value;
  return { val, next };
};

const Queue = () => {
  let head = Node(null);
  let last = head;
  let size = 0;
  return {
    push(x) {
      const node = Node(x);
      if (size === 0) {
        head = node;
        last = node;
      } else {
        last.next = node;
        last = node;
      }
      size++;
    },
    size() {
      return size;
    },
    pop() {
      const valueToRemove = head;
      head = head.next;
      size--;
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
console.log("size", example.size());
console.log("pop", example.pop());
console.log("size again", example.size());
console.log("top", example.top());
console.log("pop", example.pop());
console.log("pop", example.pop());
