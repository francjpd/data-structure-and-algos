import { numberCrownPattern12 } from './patterns/numberCrownPattern'

const pattern1 = (num) => {
  let result = ''
  for (let r = 0; r < num; r++) {
    for (let c = 0; c < num; c++) {
      result = result.concat('x')
    }
    console.log(result)
    result = ''
  }
  return result
}

const pattern2 = (num) => {
  let result = ''
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c <= r; c++) {
      result = result.concat('x')
    }
    console.log(result)
    result = ''
  }
  return pattern2
}

// let pattern3 = '';
// for (let r = 0; r < 4; r++) {
//     for (let c = 0; c <= r; c++) {
//         pattern3 = pattern3.concat(r+1)
//     }
//     console.log(pattern3);
//     pattern3 = ''
// }

// let pattern4 = '';
// for (let r = 4; r >= 0; r--) {
//     for (let c = 0; c <= r; c++) {
//         pattern4 = pattern4.concat('x')
//     }
//     console.log(pattern4);
//     pattern4 = ''
// }

// let pattern5 = '';
// for (let r = 4; r >= 0; r--) {
//     for (let c = 0; c <= r; c++) {
//         pattern5 = pattern5.concat(c+1)
//     }
//     console.log(pattern5);
//     pattern5 = ''
// }

const printSpaces = (rowTotalNumber, currentRow) => {
  let result = ''
  for (let c = 0; c < rowTotalNumber - currentRow - 1; c++) {
    result = result.concat(' ')
  }
  return result
}

const printCross = (num) => {
  let result = ''
  for (let c = 0; c < num * 2 + 1; c++) {
    result = result.concat('+')
  }
  return result
}

const pattern6Piramid = (num) => {
  let result = ''
  for (let r = 0; r < num; r++) {
    result = result.concat(printSpaces(num, r))
    result = result.concat(printCross(r))
    result = result.concat(printSpaces(num, r))
    console.log(result)
    result = ''
  }
  return result
}

const pattern7Piramid = (num) => {
  let result = ''
  for (let i = 0; i < num; i++) {
    // print spaces
    for (let j = 0; j < i; j++) {
      result = result.concat(' ')
    }

    // print crosses
    for (let j = 0; j < 2 * num - (2 * i + 1); j++) {
      result = result.concat('+')
    }

    // print spaces
    for (let j = 0; j < i; j++) {
      result = result.concat(' ')
    }
    console.log(result)
    result = ''
  }
  return result
}

// const pattern8Diamond = (num) => {
//     pattern6Piramid(num)
//     pattern7Piramid(num)
// }

// const pattern9HalfDiamond = (num) => {
//     let result = ''
//     const totalRows = (num * 2) - 1
//     for (let i = 1; i <= (num * 2) - 1; i++) {
//         let crossesToPrint = i

//         if (i > num) {
//             crossesToPrint = 2*num - i
//         }
//         for (let j = 1; j <= crossesToPrint; j++) {
//             result = result.concat('+');
//         }
//         console.log(result)
//         result = '';
//     }

// }

// pattern9HalfDiamond(20)

numberCrownPattern12(5)
