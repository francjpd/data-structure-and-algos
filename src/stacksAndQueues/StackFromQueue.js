import { Queue } from "./QueueFromArray.js";

const Stack = () => {
  const queue = Queue();

  return {
    top() {
      return queue.top();
    },
    pop() {
      return queue.pop();
    },
    push(element) {
      queue.push(element);
      for (let i = 0; i < queue.length() - 1; i++) {
        queue.push(queue.pop());
      }
    },
    length() {
      return queue.length();
    },
  };
};
const example = Stack();
example.push(3);
example.push(2);
example.push(4);
example.push(1);
console.log("length", example.length());
console.log("pop", example.pop());
console.log("length again", example.length());
console.log("top", example.top());
