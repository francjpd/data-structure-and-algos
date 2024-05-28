const setMatrixZeroes = matrix => {
  const columns = new Set()
  const rows = new Set()
  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i]
    for (let j = 0; j < row.length; j++) {
      let col = row[j];
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

console.log(
  setMatrixZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
  ])
)


console.log(setMatrixZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]))
