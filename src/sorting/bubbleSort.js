import { expect, it, describe } from 'vitest'
/**
 *  Bubble sort: Find the smallest number and exchange position
 *  Input: [64, 25, 12, 22, 11]
 *  Ouput: [11, 12, 22, 25, 65]
 */

/**
 * i = 0
 * j = 0: [25, 64, 12, 22, 11]
 * j = 1: [25, 12, 64, 22, 11]
 * j = 2: [25, 12, 22, 64, 11]
 * j = 3: [25, 12, 22, 11, 64]
 *
 * i = 1
 * j = 0: [12, 25, 22, 11, 64]
 * j = 1: [12, 22, 25, 11, 64]
 * j = 2: [12, 22, 11, 25, 64]
 *
 * i = 2
 * j = 0: [12, 22, 11, 25, 64]
 * j = 1: [12, 11, 22, 25, 64]
 *
 * i = 3
 * 1: [11, 12, 22, 25, 64]
 */

const bubbleSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const aux = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = aux
      }
    }
  }
  return arr
}

/**
 * If its already swaped, break;
 */
const bubbleSortOpt = arr => {
  for (let i = 0; i < arr.length; i++) {
    let didSwap = 0
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const aux = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = aux
        didSwap = 1
      }
    }
    if (didSwap === 0) {
      return arr
    }
  }
  return arr
}

describe('bubbleSort', () => {
  it('should sort the array', () => {
    expect(bubbleSort([64, 25, 12, 22, 11])).toEqual([11, 12, 22, 25, 64])
    expect(bubbleSort([13, 46, 24, 52, 20, 9])).toEqual([9, 13, 20, 24, 46, 52])
  })
  it('should sort the array', () => {
    expect(bubbleSortOpt([64, 25, 12, 22, 11])).toEqual([11, 12, 22, 25, 64])
    expect(bubbleSortOpt([13, 46, 24, 52, 20, 9])).toEqual([
      9, 13, 20, 24, 46, 52
    ])
    expect(bubbleSortOpt([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6])
  })
})
