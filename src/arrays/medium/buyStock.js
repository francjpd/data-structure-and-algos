const buyStock = nums => {
  let min = Number.POSITIVE_INFINITY
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    min = Math.min(min, nums[i])
    max = Math.max(max, nums[i] - min)
  }
  return max
}

console.log(buyStock([2, 1, 2, 1, 0, 0, 1]))

describe('buyStock', () => {
  it.each([
    [[2, 1, 2, 1, 0, 0, 1], 1],
    [[3, 2, 6, 5, 0, 3,], 4],
    [[1, 2], 1],
    [[7, 6, 4, 3, 1], 0],

  ])('buyStock', (input, expected) => {
    expect(buyStock(input)).toBe(expected)

  })
})
