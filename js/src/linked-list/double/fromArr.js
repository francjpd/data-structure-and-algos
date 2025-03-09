const nums = [1,2,3,4,7]

class Node {
  constructor(v, p = null, n = null ) {
    this.v = v
    this.p = p
    this.n = n
  }
}
let node = new Node(nums[0]);
let initial = node
for (let i = 1 ; i < nums.length ; i++ ) {
  let temp = new Node(nums[i], node)
  node.n = temp
  node = temp;
}

console.log(initial)
console.log(node)
