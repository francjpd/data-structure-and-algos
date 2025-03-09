const Node = (value, next = null) => {
  const val = value;
  return { val, next };
};
export const Stack = () => {
  let head = Node(null);
  let length = 0;
  return {
    pop() {
      const poppedValue = head.val;
      head = head.next;
      length--;
      return poppedValue;
    },
    length() {
      return length;
    },
    top() {
      return head.val;
    },
    push(element) {
      const newVal = Node(element);
      newVal.next = head;
      head = newVal;
      length++;
    },
  };
};

const example = Stack();

example.push(6);
example.push(3);
example.push(2);
// console.log("length", example.length());
// console.log("pop", example.pop());
// console.log("length again", example.length());
// console.log("top", example.top());
