export const numberCrownPattern12 = (num) => {
  let result = ''
  for (let i = 1; i <= num; i++) {
    // num
    for (let j = 1; j <= i; j++) {
      result = result.concat(j)
    }

    // space
    for (let j = 1; j <= 2 * (num - i); j++) {
      result = result.concat(' ')
    }

    // num
    for (let j = i; j !== 0; j--) {
      result = result.concat(j)
    }

    console.log(result)
    result = ''
  }
}

numberCrownPattern12(10)
