const leaderArray = (nums) => {
  const result = [];
  let cmax = nums[nums.length - 1]
  result.push(cmax);
  for (let i = nums.length - 2; i >= 0; i--) {
    if (cmax <= nums[i]) {
      cmax = nums[i]
      result.push(nums[i])
    }
  }
  return result.reverse();
}

describe('leaderArray', () => {
  it.each([
    [[4, 7, 1, 0], [7, 1, 0]],
    [[10, 22, 12, 3, 0, 6], [22, 12, 6]],
  ])('leaderArray', (input, expected) => {
    expect(leaderArray(input)).toEqual(expected)
  })

})
