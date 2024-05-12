import { describe, expect, it } from 'vitest'

const minimal = ([largest, secondLargest], arr, index) => {
  if (index >= arr.length - 1) {
    return secondLargest
  }
  if (largest < arr[index]) {
    return minimal([arr[index], largest], arr, ++index)
  }
  if (secondLargest < arr[index]) {
    return minimal([largest, arr[index]], arr, ++index)
  }
  return minimal([largest, secondLargest], arr, ++index)
}

const secondLargestElement = arr => {
  return minimal([arr[0], Number.NEGATIVE_INFINITY], arr, 1)
}

describe('secondLargestElement', () => {
  it.each([
    [[2, 5, 1, 3, 0], 3],
    [[8, 10, 5, 7, 9], 8]
  ])('should retrieve the largest element', (input, expected) => {
    expect(secondLargestElement(input, expected)).toBe(expected)
  })
})
