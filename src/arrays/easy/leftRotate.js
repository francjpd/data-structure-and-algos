import { describe, it, expect } from 'vitest'

const leftRotate = arr => {
  const first = arr[0]
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1]
  }
  arr[arr.length - 1] = first
  return arr
}

describe('leftRotate', () => {
  it.each([
    [
      [1, 2, 3, 4, 5],
      [2, 3, 4, 5, 1]
    ],
    [[3], [3]]
  ])('leftRotate', (input, expected) => {
    expect(leftRotate(input)).toEqual(expected)
  })
})
