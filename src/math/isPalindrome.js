// Example 1:
// Input:N = 2332
// Output:true
// Explanation: The reverse of 4554 is 4554 and therefore it is palindrome number
// Example 2:
// Input:N = 1235
// Output: false
// Explanation: The reverse of number 7789 is 9877 and therefore it is not palindrome

import { describe, expect, test } from 'vitest'

const isPalindrome = (n) => {
  // iterate and assign to an array
  let reverse = 0
  for (let i = n; i > 0; i = Math.floor(i / 10)) {
    const lastDigit = (i % 10)
    reverse = (reverse * 10) + lastDigit
  }
  return reverse === n
}

describe('isPalindrome', () => {
  test.each([
    [2332, true],
    [123, false],
    [4554, true],
    [1235, false],
    [888888828888888, true]

  ])('input(%i) - expected: %s', (input, expected) => {
    expect(isPalindrome(input)).toBe(expected)
  })
})
