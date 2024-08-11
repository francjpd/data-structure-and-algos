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

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// It is BF because we iterate once to retrieve the length and a second time until we reach the half of it
// Si it's O(N+N/2)
var middleNodeBF = function (head) {
  let i = 1;
  let node = head;
  while (node.next !== null) {
    i++;
    node = node.next;
  }
  const mid = Math.ceil(i / 2);
  const indexToMatch = i % 2 === 0 ? mid + 1 : mid;
  node = head;
  i = 1;
  while (i !== indexToMatch) {
    node = node.next;
    i++;
  }
  return node;
};
const t0 = fromArr([1]);
const t4 = fromArr([1, 2]);
const t1 = fromArr([1, 2, 3, 4, 5]);
const t2 = fromArr([1, 2, 3, 4, 5, 6]);

// These two were my better approach but there is even a better approach specially for
// LinkedList, valle the tortoise and hare algorithm. The main difference is that the mentioned algo
// has a space complexity of O(1) vs this one that it has O(N/2)
var middleNode = function (head) {
  let i = 1;
  let node = head;
  const map = new Map();
  map.set(i, node);
  while (node.next !== null) {
    i++;
    map.set(i, node.next);
    node = node.next;
  }
  const mid = Math.ceil(i / 2);
  const indexToMatch = i % 2 === 0 ? mid + 1 : mid;
  return map.get(indexToMatch);
};

var middleNodeOpt = function (head) {
  let hare = head;
  let tortoise = head;

  while (hare && hare.next) {
    hare = hare.next.next;
    tortoise = tortoise.next;
  }
  return tortoise;
};
console.log(middleNodeOpt(t1));
console.log(middleNodeOpt(t2));
console.log(middleNodeOpt(t0));
console.log(middleNodeOpt(t4));
