const search = (matrix, target) => {
  const n = matrix.length
  const m = matrix[0].length

  let bot = n - 1
  let top = 0
  while (top <= bot) {
    let row = Math.floor((top + bot) / 2)
    let last = matrix[row][m - 1]
    let first = matrix[row][0]
    if (last === target || first === target) {
      return true
    } else if (target > last) {
      top = row + 1
    } else if (target < first) {
      bot = row - 1
    } else break
  }

  if (!(top <= bot)) return false

  let row = Math.floor((top + bot) / 2)
  let l = 0
  let h = m - 2
  while (l <= h) {
    let mid = Math.floor((h + l) / 2)
    if (matrix[row][mid] === target) return true
    else if (matrix[row][mid] < target) {
      l = mid + 1
    } else {
      h = mid - 1
    }
  }

  return false
}
// console.log(
//   search(
//     [
//       [1, 3, 5, 7],
//       [10, 11, 16, 20],
//       [23, 30, 34, 60]
//     ],
//     3
//   )
// )

// console.log(search([[1, 3]], 1))

console.log(search([[1, 1]], 0))
