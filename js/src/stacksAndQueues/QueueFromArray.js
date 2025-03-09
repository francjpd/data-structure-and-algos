export const Queue = () => {
  const arr = [];
  return {
    pop() {
      return arr.shift();
    },
    length() {
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
// console.log("length", example.length());
// console.log("pop", example.pop());
// console.log("length again", example.length());
// console.log("top", example.top());
