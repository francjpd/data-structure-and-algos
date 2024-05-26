const longestSubarraySum = nums => {
  let sum = 0
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      sum += nums[j]
    }
    max = Math.max(sum, max)
    sum = 0
  }
  return max
}

const longestSubarraySumOpt = nums => {
  let sum = 0
  let max = Number.NEGATIVE_INFINITY
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    max = Math.max(sum, max)
    if (sum <= 0) {
      sum = 0
    }
  }
  return max
}
describe('longestSubarraySum', () => {
  it.each([
    [[-2, 1, -3, 4, -1, 2, 1, -5, 4], 6],
    [[-2, -1, -3, -4, -1, -2, -1, -5, -4], -1]
  ])('longestSubarraySum', (input, expected) => {
    expect(longestSubarraySumOpt(input)).toBe(expected)
  })
})
console.log(longestSubarraySumOpt([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(longestSubarraySumOpt([-2, -1, -3, -4, -1, -2, -1, -5, -4]))
