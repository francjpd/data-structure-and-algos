const isPrime = n => {
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

describe('isPrime', () => {
  test.each([
    [2, true],
    [3, true],
    [5, true],
    [7, true],
    [11, true],
    [13, true],
    [17, true],
    [19, true],
    [23, true],
    [29, true],
    [1009, true],
    [10, false]
  ])('input: %i - expected: %s', (input, expected) => {
    expect(isPrime(input)).toBe(expected)
  })
})
