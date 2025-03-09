const maximumConsecutive = arr => {
  let max = 0
  let counter = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      counter++
    } else {
      counter = 0
    }
    if (counter > max) {
      max = counter
    }
  }
  return max
}

describe('maximumConsecutive', () => {
  it('maximumConsecutive', () => {
    expect(maximumConsecutive([1, 1, 0, 1, 1, 1])).toBe(3)
  })
})
