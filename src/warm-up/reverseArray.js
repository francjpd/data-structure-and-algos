// Example 1:
// Input: N = 5, arr[] = {5,4,3,2,1}
// Output: {1,2,3,4,5}
// Explanation: Since the order of elements gets reversed the first element will occupy the fifth position, the second element occupies the fourth position and so on.

// Example 2:
// Input: N=6 arr[] = {10,20,30,40}
// Output: {40,30,20,10}
// Explanation: Since the order of elements gets reversed the first element will occupy the fifth position, the second element occupies the fourth position and so on.

/**
 * Recursive solution
 * 1- Create a function that takes 3 parameters, array, start index, end index
 * 2- Swap the elements
 * 3- Call the function again with arr, start + 1, end - 1
 * 4- Repeat until the start < end is satisfied.
 *
 */

const reverse = (arr, start, end) => {
  if (start > end) return arr
  const aux = arr[start]
  arr[start] = arr[end]
  arr[end] = aux
  return reverse(arr, start + 1, end - 1)
}
// const reverseArray = arr => {
//   let i = 0
//   let j = arr.length - 1
//   let aux
//   while (i < j) {
//     aux = arr[i]
//     arr[i] = arr[j]
//     arr[j] = aux
//     i++
//     j--
//   }
//   return arr
// }

const reverseArrayRecursively = arr => {
  return reverse(arr, 0, arr.length - 1)
}

describe('reverseArray', () => {
  test.each([
    [
      [1, 2, 3, 4, 5],
      [5, 4, 3, 2, 1]
    ],
    [
      [10, 20, 30, 40],
      [40, 30, 20, 10]
    ]
  ])('input: %s - expected: %s', (input, expected) => {
    // expect(reverseArray(input)).toEqual(expected)
    expect(reverseArrayRecursively(input)).toEqual(expected)
  })
})
