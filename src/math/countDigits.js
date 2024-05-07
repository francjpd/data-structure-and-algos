// Example 1:
// Input:N = 12345
// Output:5
// Explanation:  The number 12345 has 5 digits.
// Example 2:
// Input:N = 7789
// Output: 4
// Explanation: The number 7789 has 4 digits.

import { describe, expect, test } from 'vitest'

const countDigitsOptimal = input => Math.floor(Math.log10(input) + 1)

const countDigits = input => input.toString().split('').length

const countDigitsBruteForce = input => {
  let count = 0
  const numberStringFromatted = input.toString()
  for (let i = 0; i < numberStringFromatted.length; i++) {
    count++
  }
  return count
}

const countDigitsDivide = input => {
  let count = 0
  let newInput = input
  while (newInput > 0) {
    count++
    newInput = Math.floor(newInput / 10)
  }
  return count
}

describe('countDigitsDivide', () => {
  test.each([
    [12345, 5],
    [123, 3],
    [7789, 4]
  ])('input(%i) - expected: %i', (input, expected) => {
    expect(countDigitsOptimal(input)).toBe(expected)
    expect(countDigitsBruteForce(input)).toBe(expected)
    expect(countDigitsDivide(input)).toBe(expected)
    expect(countDigits(input)).toBe(expected)
  })
})
