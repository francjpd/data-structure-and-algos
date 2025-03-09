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
const t4 = fromArr([1, 2, 3, 4, 5, 6, 7, 8])
const t1 = fromArr([1, 2, 3, 4, 5])
const t2 = fromArr([2, 1, 3, 5, 6, 4, 7])

const oddEvenList = head => {
  if (!head || !head.next) return head
  let o = head
  let e = head.next
  const initialE = e
  while (e && e.next != null) {
    o.next = o.next.next || null
    e.next = e.next.next || null
    o = o.next
    e = e.next
  }
  o.next = initialE
  return head
}

console.log(oddEvenList(t1));
console.log(oddEvenList(t2));
console.log(oddEvenList(t4));
