import { Stack } from "./StacksFromLinkedList.js";
const QueueOpt = () => {
  let input = Stack();
  let output = Stack();
  const transferIfNeeded = () => {
    if (output.length() === 0) {
      while (input.length() !== 0) {
        output.push(input.pop());
      }
    }
  };
  return {
    push(x) {
      input.push(x);
    },
    pop() {
      transferIfNeeded();
      return output.pop();
    },
    top() {
      transferIfNeeded();
      return output.top();
    },
    length() {
      transferIfNeeded();
      return output.length();
    },
  };
};
// This queue has a Push O(N) wheres the rest of operations are O(1)
const Queue = () => {
  let stack = Stack();

  return {
    push(x) {
      const aux = Stack();
      while (stack.length() !== 0) {
        aux.push(stack.pop());
      }
      stack.push(x);
      while (aux.length() !== 0) {
        stack.push(aux.pop());
      }
    },
    top() {
      return stack.top();
    },
    pop() {
      return stack.pop();
    },
    length() {
      return stack.length();
    },
  };
};

const example = QueueOpt();
example.push(3);
example.push(2);
example.push(4);
example.push(1);
console.log("length", example.length());
console.log("pop", example.pop());
console.log("length again", example.length());
console.log("top", example.top());
