// example 1:
// Input:
//  arr[] = {2,5,1,3,0};
// Output:
//  5
// Explanation:
//  5 is the largest element in the array.

import { describe, it, expect } from 'vitest'

// Example2:
// Input:
//  arr[] = {8,10,5,7,9};
// Output:
//  10
// Explanation:
//  10 is the largest element in the array.

const minimal = (min, arr, index) => {
  if (index >= arr.length - 1) {
    return min
  }
  if (min < arr[index]) {
    return minimal(arr[index], arr, ++index)
  }
  return minimal(min, arr, ++index)
}

const largestElement = arr => {
  return minimal(arr[0], arr, 1)
}

describe('largestElement', () => {
  it.each([
    [[2, 5, 1, 3, 0], 5],
    [[8, 10, 5, 7, 9], 10]
  ])('should retrieve the largest element', (input, expected) => {
    expect(largestElement(input)).toBe(expected)
  })
})
