const MinStack = () => {
  const st = [];
  let min = null;
  return {
    pop() {
      return st.pop();
    },
    top() {
      return st.at(-1);
    },
    push(val) {
      min = min === null ? val : Math.min(min, val);
      st.push([val, min]);
    },
    getMin() {
      return st.at(-1)[1];
    },
  };
};

const test = MinStack();
test.push(3);
test.push(4);
test.push(2);
test.push(8);
test.push(9);
test.push(1);

console.log(test.getMin());
test.pop();
console.log(test.getMin());
test.pop();
console.log(test.getMin());
test.pop();
console.log(test.getMin());
test.pop();
console.log(test.getMin());
test.pop();
console.log(test.getMin());
