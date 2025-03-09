const validParenthesis = (s) => {
  const stack = [];
  const map = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);
  for (let i = 0; i < s.length; i++) {
    const value = s[i];
    if (new RegExp(/[\)\]\}]/).test(value)) {
      if (stack.length === 0) return false;
      if (map.get(stack.pop()) != value) return false;
    } else {
      stack.push(value);
    }
  }
  return stack.length === 0;
};

console.log(validParenthesis("()"));
console.log(validParenthesis("([])"));
console.log(validParenthesis("(("));
console.log(validParenthesis("})"));
console.log(validParenthesis(""));
console.log(validParenthesis("()[]{}"));
console.log(validParenthesis("(}"));
