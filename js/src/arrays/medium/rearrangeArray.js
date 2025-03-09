// the first element is positive.
// [3,1,-2,-5,2,-4]
// [3, 1, 2, -5 ,-2 ,-4]
// nums / 2  is positive and the other half is negative.
const rearrangeArray = (nums) => {
  let neg = 1
  let pos = 0
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result[pos] = nums[i];
      pos = pos + 2;
    } else {
      result[neg] = nums[i];
      neg = neg + 2;
    }
  }
  return result
}




describe('rearrangeArray', () => {
  it.each([
    [[3, 1, -2, -5, 2, -4], [3, -2, 1, -5, 2, -4]],
    [[-1, 1], [1, -1]],
    [[1, 2, -4, -5], [1, -4, 2, -5]],
    [[28, -41, 22, -8, -37, 46, 35, -9, 18, -6, 19, -26, -37, -10, -9, 15, 14, 31], [28, -41, 22, -8, 46, -37, 35, -9, 18, -6, 19, -26, 15, -37, 14, -10, 31, -9]]

  ])('rearrangeArray', (input, expected) => {
    expect(rearrangeArray(input)).toEqual(expected)

  })
})
