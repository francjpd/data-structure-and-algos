import { ListNode } from "./ListNode";
const addTwoNumbers = function (l1, l2) {
  let hasLeading = false;
  let a = l1;
  let b = l2;

  let temp = new ListNode(-1);
  const head = temp;
  while (a && b) {
    let sum = a.val + b.val;
    if (hasLeading) sum++;
    if (sum >= 10) {
      hasLeading = true;
      temp.next = new ListNode(sum % 10);
    } else {
      hasLeading = false;
      temp.next = new ListNode(sum);
    }
    a = a.next;
    b = b.next;
    temp = temp.next;
  }

  let remaining = a ? a : b;
  while (remaining) {
    let sum = remaining.val;
    if (hasLeading) sum++;
    if (sum >= 10) {
      hasLeading = true;
      temp.next = new ListNode(sum % 10);
    } else {
      hasLeading = false;
      temp.next = new ListNode(sum);
    }
    temp = temp.next;
    remaining = remaining.next;
  }
  if (hasLeading) temp.next = new ListNode(1);
  return head.next;
};
