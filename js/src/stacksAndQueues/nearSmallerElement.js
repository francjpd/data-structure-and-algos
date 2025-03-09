const nearSmallerElement = (A) => {
  const stack = [];
  const result = [];
  for (let i = 0; i < A.length; i++) {
    const num = A[i];
    while (stack.length && stack.at(-1) > num) {
      console.log("poping", stack.at(-1));
      stack.pop();
    }
    if (stack.length) result.push(stack.at(-1));
    else result.push(-1);
    console.log("adding", num);
    stack.push(num);
  }
  return result;
};

console.log(nearSmallerElement([4, 5, 2, 10, 8]));
console.log(nearSmallerElement([3, 2, 1]));
