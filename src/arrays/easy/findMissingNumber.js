const findMissingNumber = arr => {
  const maximum = (arr.length * (arr.length + 1)) / 2
  let countB = 0
  for (let i = 0; i < arr.length; i++) {
    countB += arr[i]
  }

  return Math.abs(maximum - countB)
}

describe('findMissingNumber', () => {
  it('findMissingNumber', () => {
    expect(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8)
  })
})
