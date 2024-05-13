import { describe, it, expect } from 'vitest'

/**
 * Applying the reversal Algorithm
 */
const reverse = (arr, start, end) => {
  while (start < end) {
    const aux = arr[start]
    arr[start] = arr[end]
    arr[end] = aux
    start++
    end--
  }
}

const rotateByKelements = (arr, k, direction) => {
  if (k === 0) {
    return arr
  }
  if (direction === 'right') {
    reverse(arr, arr.length - k, arr.length - 1)
    reverse(arr, 0, arr.length - (k + 1))
    reverse(arr, 0, arr.length - 1)
  }
  if (direction === 'left') {
    reverse(arr, k, arr.length - 1)
    reverse(arr, 0, k - 1)
    reverse(arr, 0, arr.length - 1)
  }
  return arr
}

console.log(rotateByKelements([3, 7, 8, 9, 10, 11], 3, 'left'))

describe('rotateByKelements', () => {
  it.each([
    [[1, 2, 3, 4, 5, 6, 7], 2, 'right', [6, 7, 1, 2, 3, 4, 5]],
    [[3, 7, 8, 9, 10, 11], 3, 'left', [9, 10, 11, 3, 7, 8]]
  ])('rotateByKelements', (arr, k, direction, expected) => {
    expect(rotateByKelements(arr, k, direction)).toEqual(expected)
  })
})
