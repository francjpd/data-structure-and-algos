/**
 *  Selection sort: Find the smallest number and exchange position
 *  Input: [64, 25, 12, 22, 11]
 *  Ouput: [11, 12, 22, 25, 65]
 */

import { describe, it, expect } from 'vitest'

const selectionSort = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    const aux = arr[i]
    arr[i] = arr[min]
    arr[min] = aux
  }
  return arr
}

describe('selectionSort', () => {
  it('it should sort the array', () => {
    expect(selectionSort([64, 25, 12, 22, 11])).toEqual([11, 12, 22, 25, 64])
  })
})

// O(N^2)
