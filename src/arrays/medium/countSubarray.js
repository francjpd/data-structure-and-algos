/**
[1, 2, 3, 4, 5], Target Number: 5 Expected Output: 2 (Subarrays: [2, 3] and [5])
[-1, -2, -3, -4, -5], Target Number: -5 Expected Output: 3 (Subarrays: [-5], [-2, -3], and [-1, -2, -2])

[10, 2, -2, -20, 10], Target Number: 10 Expected Output: 3 (Subarrays: [10], [10, 2, -2], and [10, 2, -2, -20, 10])

[9, 4, 20, 3, 10, 5], Target Number: 33 Expected Output: 2 (Subarrays: [9, 4, 20] and [4, 20, 3, 6])
**/
const countSubarrayTotal = (arr, k) => {
  let max = 0;
  let sum = 0;
  const prefixSum = new Set();
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === k) {
      max++;
    }

    let rem = sum - k;
    if (prefixSum.has(rem)) {
      max++;
    }

    prefixSum.add(sum);
  }
  return max;
};
describe("countSubarrayTotal", () => {
  it.each([
    [[1, 1, 1], 2, 2],
    [[1, 2, 3, 4, 5], 5, 2],
    [[10, 2, -2, -20, 10], 10, 3],
  ])("countSubarrayTotal", (arr, k, expected) => {
    expect(countSubarrayTotal(arr, k)).toEqual(expected);
  });
});
