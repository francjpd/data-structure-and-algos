import { Stack } from "./StacksFromLinkedList.js";
const QueueOpt = () => {
  let input = Stack();
  let output = Stack();
  const transferIfNeeded = () => {
    if (output.size() === 0) {
      while (input.size() !== 0) {
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
    size() {
      transferIfNeeded();
      return output.size();
    },
  };
};
// This queue has a Push O(N) wheres the rest of operations are O(1)
const Queue = () => {
  let stack = Stack();

  return {
    push(x) {
      const aux = Stack();
      while (stack.size() !== 0) {
        aux.push(stack.pop());
      }
      stack.push(x);
      while (aux.size() !== 0) {
        stack.push(aux.pop());
      }
    },
    top() {
      return stack.top();
    },
    pop() {
      return stack.pop();
    },
    size() {
      return stack.size();
    },
  };
};

const example = QueueOpt();
example.push(3);
example.push(2);
example.push(4);
example.push(1);
console.log("size", example.size());
console.log("pop", example.pop());
console.log("size again", example.size());
console.log("top", example.top());
