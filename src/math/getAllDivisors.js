import { describe, expect, test } from 'vitest'

const getAllDivisors = (n) => {
  let count = 2
  const divisors = [1]
  while (count <= n) {
    if (n % count === 0) {
      divisors.push(count)
    }
    count++
  }
  return divisors
}

describe('getAllDivisors', () => {
  test.each([
    [1, [1]],
    [2, [1, 2]],
    [3, [1, 3]],
    [4, [1, 2, 4]],
    [5, [1, 5]],
    [6, [1, 2, 3, 6]],
    [10, [1, 2, 5, 10]]
  ])('input(%i) - expected: %i', (n, expected) => {
    expect(getAllDivisors(n)).toEqual(expected)
  })
})
