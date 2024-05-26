// O(nlog(n)) + O(n)
const majorityElement = nums => {
  // constraints  = nums / 2
  let max = 0
  //sorting
  nums.sort((a, b) => a - b)
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      max++
      if (max >= Math.floor(nums.length / 2)) {
        return nums[i]
      }
    } else {
      max = 0
    }
  }
  return nums
}

const majorityElementOpt = nums => {
  let count = 0
  let element = 0

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      element = nums[i]
      count++
      continue
    }
    if (element === nums[i]) {
      count++
    } else {
      count--
    }
  }
  count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (element === nums[i]) {
      count++;
      if (count > Math.floor(nums.length / 2)) {
        return element
      }
    }
  }
  return element
}

describe('majorityElement', () => {
  it.each([
    [[4, 4, 2, 4, 3, 4, 4, 3, 2, 4], 4],
    [[2, 2, 1, 1, 1, 2, 2], 2],
    [[3, 2, 3], 3],
    [[2, 2], 2]
  ])('majorityElement', (input, expected) => {
    expect(majorityElementOpt(input)).toBe(expected)
  })
})

