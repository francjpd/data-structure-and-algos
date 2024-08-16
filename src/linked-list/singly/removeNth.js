function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const fromArr = (arr) => {
  const initial = new ListNode(arr[0]);
  let node = initial;
  arr.forEach((num, index) => {
    if (index === 0) return;
    const temp = new ListNode(num);
    node.next = temp;
    node = temp;
  });
  return initial;
};

const t0 = fromArr([1]);
const t4 = fromArr([1, 2]);
const t1 = fromArr([1, 2, 3, 4, 5]);
const t2 = fromArr([1, 2, 3, 4, 5, 6]);

const remove = (head, n) => {
  let f = head;
  let s = head;

  for (let i = 0; i < n; i++) f = f.next;

  if (f === null) return s.next;

  while (f.next) {
    f = f.next;
    s = s.next;
  }

  s.next = s.next.next;

  return head;
};

console.log(remove(t0, 1));
console.log(remove(t4, 1));
console.log(remove(t4, 2));
console.log(remove(t1, 2));
