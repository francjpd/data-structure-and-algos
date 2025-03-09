import { ListNode } from "./ListNode.js";
// Apply a merge sort on a linkedlist

const getMiddle = (head) => {
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

const conq = (left, right) => {
  const initNode = new ListNode(-1);
  let temp = initNode;
  while (left != null && right != null) {
    if (left.val <= right.val) {
      temp.next = left;
      left = left.next;
    } else {
      temp.next = right;
      right = right.next;
    }
    temp = temp.next;
  }

  temp.next = right !== null ? right : left;
  return initNode.next;
};

const split = (head) => {
  if (!head || !head.next) return head;

  const midNode = getMiddle(head);
  const right = split(midNode.next);
  midNode.next = null;
  const left = split(head);

  return conq(left, right);
};

// Example usage:

const list1 = new ListNode(1);
list1.next = new ListNode(4);
list1.next.next = new ListNode(8);
list1.next.next.next = new ListNode(2);
list1.next.next.next.next = new ListNode(9);
list1.next.next.next.next.next = new ListNode(11);

console.log(split(list1));
