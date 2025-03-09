class Node {
  constructor (v, p = null, n = null) {
    this.v = v
    this.p = p
    this.n = n
  }
}

const fromArr = arr => {
  let ll = new Node(arr[0])
  const initial = ll
  arr.forEach((num, index) => {
    if (index === 0) return
    let temp = new Node(arr[index], ll)
    ll.n = temp
    ll = temp
  })
  return initial
}

const ll = fromArr([1, 2, 3])

const reverse = ll => {
  let node = ll
  let last = node
  while (node != null) {
    if (node.n === null) {
      last = node
    }
    let tempP = node.p
    node.p = node.n
    node.n = tempP
    node = node.p // It's P since we just swapped positions, otherwise it would be n
  }
  node = last
  return node
}

console.log(ll)
console.log(reverse(ll))
