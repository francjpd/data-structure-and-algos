// Example 1:
// Input: Matrix[][] = [ [ 1, 2, 3, 4 ],
// 		      [ 5, 6, 7, 8 ],
// 		      [ 9, 10, 11, 12 ],
// 	              [ 13, 14, 15, 16 ] ]
//
// Outhput: 1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10.
// Explanation: The output of matrix in spiral form.
//
// Example 2:
// Input: Matrix[][] = [ [ 1, 2, 3 ],
// 	              [ 4, 5, 6 ],
// 		      [ 7, 8, 9 ] ]
//
// Output: 1, 2, 3, 6, 9, 8, 7, 4, 5.
// Explanation: The output of matrix in spiral form.

/**
 * The complexity analysis in regards time from the spiral function its O(m*n) where m is the number of rows, and n is the number of columns in the matrix. This is because each element its visted only once.
 * The space complexity is O(m*n) because we need to create an array to return the value
 **/

const shouldContinue = total => total > 0
const spiral = matrix => {
  const result = []
  const rowsN = matrix[0].length
  const colsN = matrix.length

  let total = rowsN * colsN
  let i = 0

  while (shouldContinue(total)) {
    // first
    for (let j = 0 + i; j < rowsN - i && shouldContinue(total); j++) {
      result.push(matrix[0 + i][j])
      total--
    }

    //second
    for (let j = 1 + i; j < colsN - i && shouldContinue(total); j++) {
      result.push(matrix[j][rowsN - 1 - i])
      total--
    }

    //third
    for (let j = rowsN - 1 - i; j > 0 + i && shouldContinue(total); j--) {
      result.push(matrix[colsN - 1 - i][j - 1])
      total--
    }

    //fourth
    for (let j = colsN - 2 - i; j > 0 + i && shouldContinue(total); j--) {
      result.push(matrix[j][0 + i])
      total--
    }

    i++
  }
  return result
}

describe('spiral', () => {
  it.each([
    [
      [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
      ],
      [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
    ],
    [
      [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12]
      ],
      [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
    ],
    [
      [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25]
      ],
      [
        1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14,
        19, 18, 17, 12, 13
      ]
    ]
  ])('spiral', (input, expected) => {
    expect(spiral(input)).toEqual(expected)
  })
})
