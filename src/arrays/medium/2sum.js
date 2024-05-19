const twoSumNotOptimized = (arr, k) => {
  const prefixSum = new Map()
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) {
        return [i, j]
      }
    }
  }
  return [-1, -1]
}

const twoSumsOptimized = (arr, k) => {
  const sum = new Map()
  for (let i = 0; i < arr.length; i++) {
    const num = k - arr[i]
    if (sum.has(num)) {
      return [sum.get(num), i]
    }
    sum.set(arr[i], i)
  }
  return [-1, -1]
}

describe('twoSum', () => {
  it.each([
    [[2, 7, 11, 15], 9, [0, 1]],
    [[3, 2, 4], 6, [1, 2]],
    [[3, 3], 6, [0, 1]],
    [[2, 6, 5, 8, 11], 14, [1, 3]],
    [[2, 6, 5, 8, 11], 15, [-1, -1]]
  ])('twoSums', (arr, k, expected) => {
    expect(twoSumNotOptimized(arr, k)).toEqual(expected)
    expect(twoSumsOptimized(arr, k)).toEqual(expected)
  })
})
