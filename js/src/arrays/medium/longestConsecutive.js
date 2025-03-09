const longestConsecutive = nums => {
  nums.sort((a, b) => a - b)
  let max = 0
  let count = 1
  for (let i = 0; i < nums.length; i++) {
    if (count > max) {
      max = count
    }
    if (nums[i] === nums[i + 1]) {
      continue
    }
    if (nums[i] + 1 === nums[i + 1]) {
      count++
    } else {
      count = 1
    }
  }
  return max
}

const longestConsecutiveOpt = nums => {
  const store = new Set(nums)
  let max = 0
  for (let num of nums) {
    if (!store.has(num - 1)) {
      let count = 1
      let index = num
      while (store.has(index + 1)) {
        index = index + 1
        count++
        max = Math.max(max, count)
      }
    }
  }
  return max
}

longestConsecutiveOpt([100, 200, 1, 3, 2, 4])
describe('longestConsecutiveOpt', () => {
  it.each([
    [[100, 200, 1, 3, 2, 4], 4],
    [[3, 8, 5, 7, 6], 4]
  ])('longestConsecutiveOpt', (input, expected) => {
    expect(longestConsecutiveOpt(input)).toEqual(expected)
  })
})
