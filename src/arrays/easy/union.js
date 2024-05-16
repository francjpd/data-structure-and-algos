/**
 * O(log(N)*n)
 */

const union = (arr1, arr2) => {
  const unionSet = new Set()
  const union = []
  const longerLength = arr1.length > arr2.length ? arr1.length : arr2.length

  for (let i = 0; i < longerLength; i++) {
    unionSet.add(arr1[i])
    unionSet.add(arr2[i])
  }
  //  easy response
  //  return [...response.values()]

  for (const num of unionSet) {
    union.push(num)
  }
  return union
}

console.log(union([1, 2, 3, 4, 5], [2, 3, 4, 4, 5]))
