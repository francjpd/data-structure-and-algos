import { describe, expect, test } from 'vitest'

const getAllDivisors = (n) => {
  let count = 2
  const divisors = [1] // storring factors
  while (count <= n) {
    if (n % count === 0) {
      divisors.push(count)
    }
    count++
  }
  return divisors
}

// This is great as you have O(Sqrt(n)) But you would have to sort the resulting array and it becomes worst than the previous one.
// const getAllDivisorsOptional = (n) => {
//   const divisors = []
//   for (let i = 0; i < Math.sqrt(n).toFixed(0); i++) {
//     if (n % i === 0) {
//       divisors.push(i)
//       const b = n / i
//       if (b !== i) {
//         divisors.push(b)
//       }
//     }
//   }
//   return divisors
// }

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
    expect(getAllDivisors(n)).toEqual(expected)
  })
})
