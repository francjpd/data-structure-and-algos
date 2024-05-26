const sortArraysOf012 = nums => {
  const sortedArray = []
  //initializacion
  const byNumber = new Map([
    [0, 0],
    [1, 0],
    [2, 0]
  ])

  // O(N)
  for (let i = 0; i < nums.length; i++) {
    byNumber.set(nums[i], byNumber.get(nums[i]) + 1)
  }

  // O(3*N)
  for (const [key, value] of byNumber.entries()) {
    let j = value
    while (j > 0) {
      sortedArray.push(key)
      j--
    }
  }

  return sortedArray
}

const sortArraysOf012Opt = nums => {
  const sortedArray = []
  //initializacion
  const byNumber = new Map([
    [0, []],
    [1, []],
    [2, []]
  ])

  // O(N)
  for (let i = 0; i < nums.length; i++) {
    byNumber.get(nums[i]).push(nums[i])
  }

  return byNumber.get(0).concat(byNumber.get(1), byNumber.get(2))
}

const sortArraysOf012MoreOpt = nums => {
  let low = 0
  let mid = 0
  let high = nums.length - 1

  while (mid <= high) {
    if (nums[mid] === 0) {
      ;[nums[mid], nums[low]] = [nums[low], nums[mid]]
      low++
      mid++
    } else if (nums[mid] === 1) {
      mid++
    } else {
      ;[nums[mid], nums[high]] = [nums[high], nums[mid]]
      high--
    }
  }
  return nums
}

describe('sortArraysOf012MoreOpt', () => {
  it.each([
    [
      [2, 0, 2, 1, 1, 0],
      [0, 0, 1, 1, 2, 2]
    ],
    [
      [2, 1, 0],
      [0, 1, 2]
    ]
  ])('sortArraysOf012MoreOpt', (input, expected) => {

    expect(sortArraysOf012MoreOpt(input)).toEqual(expected)
  })
})
