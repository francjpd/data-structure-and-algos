/**
 * Given an array containing N integers and an integer K.,
 *  Your task is to find the length of the longest Sub-Array with the sum of the elements equal to the given value K.
 * Expected Time Complexity: O(N).
 * Expected Auxiliary Space: O(N).
 *
 * @param {*} arr
 * @param {*} k
 */
const longestSubArray = (arr, k) => {
  const prefixSum = new Map()
  let sum = 0
  let maxLength = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    if (sum === k) {
      maxLength = Math.max(maxLength, i + 1)
    }

    const rem = sum - k

    if (prefixSum.has(rem)) {
    }

    if (!prefixSum.has(sum)) {
      prefixSum.set(sum, i)
    }
  }
}



describe('longestSubArray', () => {
  it.skip.each([
    [[10, 5, 2, 7, 1, 9], 15, 4],
    [[2, 3, 5], 5, 2],
    [[2, 3, 5, 1, 9], 10, 3]
    // [[-13, 0, 6, 15, 16, 2, 15, -12, 17, -16, 0, -3, 19, -3, 2, -9, -6], 15, 5]
  ])('longestSubArray', (arr, k, expected) => {
    expect(longestSubArray(arr, k)).toBe(expected)
  })
})
