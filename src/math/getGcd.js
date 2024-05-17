// Example 1:
// Input:N1 = 9, N2 = 12
// Output:3

// Explanation:
// Factors of 9: 1, 3 and 9
// Factors of 12: 1, 2, 3, 4, 6, 12
// Common Factors: 1, 3 out of which 3 is the greatest hence it is the GCD.

// Example 2:
// Input:N1 = 20, N2 = 15

// Output: 5
// Explanation:
// Factors of 20: 1, 2, 4, 5
// Factors of 15: 1, 3, 5
// Common Factors: 1, 5 out of which 5 is the greatest hence it is the GCD

const getGcd = (n1, n2) => {
  const min = Math.min(n1, n2)
  let counter = 1
  let gcd = counter
  while (counter < min) {
    const n1Divisor = n1 % counter
    const n2Divisor = n2 % counter
    if (n1Divisor === 0 && n1Divisor === n2Divisor) {
      gcd = counter
    }
    counter++
  }

  return gcd
}

const getGcdOptimal = (n1, n2) => {
  let counter = Math.min(n1, n2)

  while (counter > 0) {
    const n1Divisor = n1 % counter
    const n2Divisor = n2 % counter
    if (n1Divisor === 0 && n1Divisor === n2Divisor) {
      return counter
    }
    counter--
  }
}

// Euclidean's algorithm

const getGcdEuclid = (n1, n2) => {
  let a = n1
  let b = n2
  while (a > 0 && b > 0) {
    if (a > b) a = a % b
    else b = b % a
  }
  if (a === 0) return b
  return a
}

describe('getGcd', () => {
  test.each([
    [9, 12, 3],
    [20, 15, 5]
  ])('input(%i) - expected: %s', (n1, n2, expected) => {
    expect(getGcd(n1, n2)).toBe(expected)
    expect(getGcdOptimal(n1, n2)).toBe(expected)
    expect(getGcdEuclid(n1, n2)).toBe(expected)
  })
})
