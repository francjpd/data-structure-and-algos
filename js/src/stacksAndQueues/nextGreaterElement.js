const nextGreaterElement = (nums1, nums2) => {
  const result = [];
  const stack = [-1];
  const map = new Map();
  for (let i = nums2.length - 1; i >= 0; i--) {
    const num = nums2.at(i);
    // This while is needed in case we have several lower elements than the current
    // The idea is to keep poping em until we reach a higher element or the stack is empty
    while (stack.length && stack.at(-1) < num) stack.pop();
    const stackedValue = stack.at(-1);
    if (stack.length && stackedValue > num) {
      map.set(num, stackedValue);
    } else {
      map.set(num, -1);
    }
    stack.push(num);
  }
  for (let num of nums1) {
    result.push(map.get(num));
  }
  return result;
};

// console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
// console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
// console.log(nextGreaterElement([2, 4], [4, 12, 5, 3, 1, 2, 5, 3, 1, 2, 4, 6]));
// console.log(nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]));

const nge = (nums1, nums2) => {
  const st = [];
  const ngeMap = new Map();
  for (let i = nums2.length - 1; i >= 0; i--) {
    const num = nums2.at(i);
    if (!st.length || (st.length && num > st.at(-1))) {
      ngeMap.set(num, -1);
      if (st.length) {
        st.pop();
      }
    } else {
      ngeMap.set(num, st.at(-1));
    }
    st.push(num);
  }
  const result = [];
  for (const num of nums1) {
    result.push(ngeMap.get(num));
  }
  return result;
};

console.log(nge([4, 1, 2], [1, 3, 4, 2]));
console.log(nge([2, 4], [1, 2, 3, 4]));
console.log(nge([2, 4], [4, 12, 5, 3, 1, 2, 5, 3, 1, 2, 4, 6]));
console.log(nge([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]));
