const Node = (value, next = null) => {
  const val = value;
  return { val, next };
};
const Stack = () => {
  let head = Node(null);
  let size = 0;
  return {
    pop() {
      const poppedValue = head.val;
      head = head.next;
      size--;
      return poppedValue;
    },
    size() {
      return size;
    },
    top() {
      return head.val;
    },
    push(element) {
      const newVal = Node(element);
      newVal.next = head;
      head = newVal;
      size++;
    },
  };
};

const example = Stack();

example.push(6);
example.push(3);
example.push(2);
console.log("size", example.size());
console.log("pop", example.pop());
console.log("size again", example.size());
console.log("top", example.top());
