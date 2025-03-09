const remove = (head) => {
  if (!head || !head.next) return head;
  let hare = head.next.next;
  let tortoise = head;

  while (hare && hare.next) {
    hare = hare.next.next;
    tortoise = tortoise.next;
  }
  if (tortoise.next && tortoise.next.next) {
    tortoise.next = tortoise.next.next
  } else {
    tortoise.next = null
  }
  return head;
};
