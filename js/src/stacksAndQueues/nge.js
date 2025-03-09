/**
 The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.*
 * */
const nge = (nums1, nums2) => {
  const stack = [];
  const map = new Map();

  for (let i = nums2.length - 1; i >= 0; i--) {
    // While the current num is greater than the elements in the stack, we keep poping them.
    const num = nums2.at(i);
    while (stack.length && stack.at(-1) < num) stack.pop();

    const elementFromStack = stack.at(-1);
    if (stack.length && elementFromStack > num) {
      map.set(num, elementFromStack);
    } else {
      map.set(num, -1);
    }
    stack.push(num);
  }

  const result = [];
  for (let num of nums1) {
    result.push(map.get(num));
  }
  return result;
};

console.log(nge([4, 1, 2], [1, 3, 4, 2]));
console.log(nge([2, 4], [1, 2, 3, 4]));
console.log(nge([2, 4], [4, 12, 5, 3, 1, 2, 5, 3, 1, 2, 4, 6]));
console.log(nge([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]));
