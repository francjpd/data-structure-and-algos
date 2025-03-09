const setMatrixZeroes = matrix => {
  const columns = new Set()
  const rows = new Set()
  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i]
    for (let j = 0; j < row.length; j++) {
      let col = row[j]
      if (col === 0) {
        columns.add(j)
        rows.add(i)
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    // entire row
    let row = matrix[i]
    if (rows.has(i)) {
      for (let j = 0; j < row.length; j++) {
        row[j] = 0
      }
    } else {
      for (let j = 0; j < row.length; j++) {
        if (columns.has(j)) {
          row[j] = 0
        }
      }
    }
  }
  return matrix
}
describe('setMatrixZeroes', () => {
  it.each([
    [
      [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
      ],
      JSON.stringify([
        [1, 0, 1],
        [0, 0, 0],
        [1, 0, 1]
      ])
    ],
    [
      [
        [0, 1, 2, 0],
        [3, 4, 5, 2],
        [1, 3, 1, 5]
      ],
      JSON.stringify([
        [0, 0, 0, 0],
        [0, 4, 5, 0],
        [0, 3, 1, 0]
      ])
    ]
  ])('setMatrixZeroes', (input, expected) => {
    expect(JSON.stringify(setMatrixZeroes(input))).toEqual(expected)
  })
})
