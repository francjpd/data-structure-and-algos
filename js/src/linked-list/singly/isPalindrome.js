const getMid = (head) => {
  let s = head;
  let f = head;
  while (f && f.next) {
    s = s.next;
    f = f.next.next;
  }
  return s;
};

const reverse = (head) => {
  let temp = head;
  let prev = null;
  while (temp != null) {
    let front = temp.next;
    temp.next = prev;
    prev = temp;
    temp = front;
  }
  return prev;
};

const isPalindrome = (head) => {
  if (!head || !head.next) return true;
  // find mid
  const mid = getMid(head);
  // reverse
  let secondHalf = reverse(mid);
  // compare
  let firstHalf = head;
  while (secondHalf) {
    if (secondHalf.val !== firstHalf.val) return false;
    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
  }
  return true;
};
