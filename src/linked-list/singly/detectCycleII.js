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
const t1 = fromArr([3, 2, 0, -4]);
const t2 = fromArr([1, 2]);
const t3 = fromArr([1]);

const t1CycleNode = t1.next;
t1.next.next.next = t1CycleNode;
t2.next = t2;

const hasCycle = (head) => {
  if (!head || !head.next) return null;
  let hare = head.next;
  let tortoise = head;
  while (hare !== null && hare.next !== null) {
    hare = hare.next.next;
    tortoise = tortoise.next;
    if (hare === tortoise) {
      tortoise = head;
      while (tortoise !== head) {
        tortoise = tortoise.next;
        hare = hare.next;
      }
      return tortoise;
    }
  }
  return null;
};

console.log(hasCycle(t1));
console.log(hasCycle(t2));
console.log(hasCycle(t3));
