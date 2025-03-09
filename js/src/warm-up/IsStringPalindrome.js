// Input: Str =  “ABCDCBA”
// Output: Palindrome
// Explanation: String when reversed is the same as string.

// Example 2:
// Input: Str = “TAKE U FORWARD”
// Output: Not Palindrome
// Explanation: String when reversed is not the same as string.

const nextNonSpace = (phrase, n) =>
  phrase[n] === ' ' ? phrase[n + 1] : phrase[n]

const palindrome = (phrase, start, end) => {
  if (start > end) return 'Palindrome'

  const startChar = nextNonSpace(phrase, start)
  const endChar = nextNonSpace(phrase, end)

  if (startChar.toLowerCase() !== endChar.toLowerCase()) return 'Not Palindrome'

  return palindrome(phrase, start + 1, end - 1)
}

const isStringPalindrome = phrase => {
  return palindrome(phrase, 0, phrase.length - 1)
}

describe('isStringPalindrome', () => {
  test.each([
    ['ABCDCBA', 'Palindrome'],
    ['THIS IS NOT', 'Not Palindrome']
  ])('input: %s - expected: %s', (input, expected) => {
    expect(isStringPalindrome(input)).toBe(expected)
  })
})
