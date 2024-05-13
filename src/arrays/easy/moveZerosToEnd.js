//  1 ,0 ,2 ,3 ,0 ,4 ,0 ,1
// Output:
// 1 ,2 ,3 ,4 ,1 ,0 ,0 ,0

const moveZerosToEnd = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    let j = i
    while (j < arr.length - 1 && arr[j] === 0 && arr[j + 1] !== 0) {
      arr[j] = arr[j + 1]
      arr[j + 1] = 0
      console.log(j)
      j++
    }
  }
  return arr
}

// pending

console.log(moveZerosToEnd([1, 0, 2, 3, 0, 4, 0, 1]))
console.log(moveZerosToEnd([1, 2, 0, 1, 0, 4, 0]))
