function ListNode (val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

const fromArr = arr => {
  const initial = new ListNode(arr[0])
  let node = initial
  arr.forEach((num, index) => {
    if (index === 0) return
    const temp = new ListNode(num)
    node.next = temp
    node = temp
  })
  return initial
}

const t0 = fromArr([1])
const t4 = fromArr([1, 2])
const t1 = fromArr([1, 2, 3, 4, 5])
const t2 = fromArr([1, 2, 3, 4, 5, 6])

const replace = (ll, v = null) => {
  let a = ll.next
  ll.next = v
  let b = ll
  ll = a
  return [a, b]
}
const reverse = ll => {
  if (!ll.next) {
    return ll
  }
  let a = ll.next
  ll.next = null
  let b = ll

  while (a && a.next) {
    let temp = a.next
    a.next = b
    b = a
    a = temp
  }
  a.next = b
  return a
}
console.log(reverse(t1))
console.log(reverse(t2))
console.log(reverse(t0))
console.log(reverse(t4))
