import { describe, it, expect } from 'vitest'
//  1 ,0 ,2 ,3 ,0 ,4 ,0 ,1
// Output:
// 1 ,2 ,3 ,4 ,1 ,0 ,0 ,0

const moveZerosToEnd = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    let j = i
    while (j < arr.length - 1 && arr[j] === 0 && arr[j + 1] !== 0) {
      arr[j] = arr[j + 1]
      arr[j + 1] = 0
      j++
    }
  }
  return arr
}

const moveZerosOpt = arr => {
  // J will act as the pointer to the 0 element
  let j = -1
  // find the nearest 0 if any
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      j = i
      break
    }
  }
  // No 0 Found
  if (j === -1) return arr

  for (let i = j + 1; i < arr.length; i++) {
    if (arr[i] !== 0) {
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
      j++
    }
  }
  return arr
}

describe('moveZerosOpt', () => {
  it.each([
    [
      [1, 0, 2, 3, 0, 4, 0, 1],
      [1, 2, 3, 4, 1, 0, 0, 0]
    ],
    [
      [1, 2, 0, 1, 0, 4, 0],
      [1, 2, 1, 4, 0, 0, 0]
    ]
  ])('moveZerosOpt', (input, expected) => {
    expect(moveZerosOpt(input)).toEqual(expected)
    expect(moveZerosToEnd(input)).toEqual(expected)
  })
})
