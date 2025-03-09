import { ListNode } from "./ListNode.js";

const intersect = (headA, headB) => {
  let tempA = headA;
  let tempB = headB;

  while (tempA !== tempB) {
    tempA = tempA != null ? tempA.next : headB;
    tempB = tempB != null ? tempB.next : headA;
  }
  return tempA;
};

const intersectedList = new ListNode(2);
intersectedList.next = new ListNode(4);

const list1 = new ListNode(1);
list1.next = new ListNode(9);
list1.next.next = new ListNode(1);
list1.next.next.next = intersectedList;

const list2 = new ListNode(3);
list2.next = intersectedList;
console.log(intersect(list1, list2));
