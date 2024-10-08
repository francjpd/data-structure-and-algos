export const Stack = () => {
  const arr = [];
  let index = 0;
  return {
    pop() {
      if (index === 0) return null;
      const popped = arr[index - 1];
      index--;
      return popped;
    },
    length() {
      return index;
    },
    top() {
      return arr.at(index - 1);
    },
    push(element) {
      arr[index] = element;
      index++;
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
