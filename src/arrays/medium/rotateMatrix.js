// Example 1:
// Input:
//  [[1,2,3],[4,5,6],[7,8,9]]
//
// Output
// : [[7,4,1],[8,5,2],[9,6,3]]
//
// Explanation:
//  Rotate the matrix simply by 90 degree clockwise and return the matrix.
//
// Example 2:
// Input:
//  [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
//
// Output:
// [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
//
// Explanation:
//  Rotate the matrix simply by 90 degree clockwise and return the matrix
const rotateMatrix = matrix => {
  const n = matrix.length
  const result = new Array(n).fill().map(() => new Array(n))
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      result[j][n - i - 1] = matrix[i][j]
    }
  }
  return result
}

const rotateMatrixOpt = matrix => {
  const n = matrix.length
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      ;[matrix[j][i], matrix[i][j]] = [matrix[i][j], matrix[j][i]]
    }
    matrix[i].reverse()
  }
  return matrix
}

describe('rotateMatrixOpt', () => {
  it.each([
    [
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ],
      [
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3]
      ]
    ]
  ])('rotateMatrixOpt', (input, expected) => {
    expect(rotateMatrixOpt(input)).toEqual(expected)
  })
})
