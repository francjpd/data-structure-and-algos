// Input: N = 5
// Output: 0 1 1 2 3 5

const findFibonacci = ([first, second], term, acc) => {
  // return condition
  if (term === 0) return acc
  const sum = first + second
  const concat = `${acc} ${sum}`
  return findFibonacci([second, sum], --term, concat)
}

const getFibonacci = term => {
  return findFibonacci([0, 1], --term, '0 1')
}

console.log(getFibonacci(56))

// O(Term)
