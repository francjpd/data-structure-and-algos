// Example 1:
// Input: N = 123
// Output: 321
// Explanation: The reverse of 123 is 321

// Example 2:
// Input: N = 234
// Output: 432
// Explanation: The reverse of 234 is 432

const reverseNumber = x => {
  let counter = Math.abs(x)
  let reverse = 0

  while (counter > 0) {
    const digit = counter % 10
    reverse = reverse * 10 + digit
    counter = Math.floor(counter / 10)
  }

  return x < 0 ? -1 * reverse : reverse
}

describe('reverseNumber', () => {
  test.each([
    [12345, 54321],
    [123, 321],
    [7789, 9877],
    [-7789, -9877]
  ])('input(%i) - expected: %i', (input, expected) => {
    expect(reverseNumber(input)).toBe(expected)
  })
})
