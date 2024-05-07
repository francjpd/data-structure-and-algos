export const increasingNumberTriangle = (num) => {
  let result = ''
  let counter = 1
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
      result = result.concat(`${counter} `)
      counter++
    }
    console.log(result)
    result = ''
  }
}

increasingNumberTriangle(5)
