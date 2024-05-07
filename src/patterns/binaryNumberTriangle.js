/**
 *
 * for num being 5 , the result is :
 */
// 1
// 01
// 101
// 0101
// 10101

export const binaryNumberTrianglePattern10 = (num) => {
  let toggle = 1
  let result = ''
  for (let i = 0; i < num; i++) {
    if (i % 2 === 0) toggle = 1
    for (let j = 0; j <= i; j++) {
      result = result.concat(toggle)
      toggle = 1 - toggle
    }
    console.log(result)
    result = ''
  }
}
