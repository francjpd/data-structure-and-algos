export const Queue = () => {
  const arr = [];
  return {
    pop() {
      return arr.shift();
    },
    size() {
      return arr.length;
    },
    top() {
      return arr[0];
    },
    push(element) {
      arr.push(element);
    },
  };
};

const example = Queue();
example.push(6);
example.push(3);
example.push(2);
// console.log("size", example.size());
// console.log("pop", example.pop());
// console.log("size again", example.size());
// console.log("top", example.top());
