// Example 1:
// Input: X = 5
// Output: 120
// Explanation: 5! = 5*4*3*2*1

// Example 2:
// Input: X = 3
// Output: 6
// Explanation: 3!=3*2*1

const factorial = n => {
  if (n === 1) return 1
  return n * factorial(n - 1)
}
const getFactorial = n => {
  return factorial(n)
}

describe('getFactorial', () => {
  test.each([
    [5, 120],
    [3, 6]
  ])('input %i - expected %i', (input, expected) => {
    expect(getFactorial(input)).toBe(expected)
  })
})
