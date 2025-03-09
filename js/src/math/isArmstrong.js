// Example 1:
// Input:N = 153
// Output:True
// Explanation: 13+53+33 = 1 + 125 + 27 = 153
// Example 2:
// Input:N = 371
// Output: True
// Explanation: 33+53+13 = 27 + 343 + 1 = 371

const isArmstrong = n => {
  let count = n
  let total = 0
  let totalDigits = 0

  while (count > 0) {
    totalDigits++
    count = Math.floor(count / 10)
  }

  count = n
  while (count > 0) {
    const digit = count % 10
    total = total + digit ** totalDigits
    count = Math.floor(count / 10)
  }
  return total === n
}

describe('isArmstrong', () => {
  test.each([
    [1, true],
    [2, true],
    [3, true],
    [4, true],
    [5, true],
    [6, true],
    [7, true],
    [8, true],
    [153, true],
    [370, true],
    [371, true],
    [1634, true],
    [54748, true],
    [92727, true],
    [93084, true],
    [8208, true],
    [9474, true]
  ])('input(%i) - expected: %s', (input, expected) => {
    expect(isArmstrong(input)).toBe(expected)
  })
})
