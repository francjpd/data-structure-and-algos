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
      for (let i = 0; i < queue.size() - 1; i++) {
        queue.push(queue.pop());
      }
    },
    size() {
      return queue.size();
    },
  };
};
const example = Stack();
example.push(3);
example.push(2);
example.push(4);
example.push(1);
console.log("size", example.size());
console.log("pop", example.pop());
console.log("size again", example.size());
console.log("top", example.top());
