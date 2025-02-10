/**
 * Example 1:

Input: nums = [1,2,1]
Output: [2,-1,2]
Explanation: The first 1's next greater number is 2;
The number 2 can't find next greater number.
The second 1's next greater number needs to search circularly, which is also 2.
Example 2:

Input: nums = [1,2,3,4,3]
Input: nums = [1,2,3,4,3,1,2,3,4,3]
Output: [2,3,4,-1,4]

 * */
const nge = (nums) => {
  // create a stack
  const st = [];

  const l = nums.length;
  const result = new Array(l * 2);
  for (let i = l * 2 - 1; i >= 0; i--) {
    const num = nums[i % l];
    while (st.length && num >= st.at(-1)) st.pop();
    if (st.length && num < st.at(-1)) {
      result[i % l] = st.at(-1);
    } else {
      result[i % l] = -1;
    }
    st.push(num);
  }
  return result;
};

console.log(nge([1, 2, 3, 4, 3]));
console.log(nge([1, 2, 1]));
