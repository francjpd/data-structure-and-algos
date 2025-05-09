/**
 *  Hashmap solution
 */
const twoSums = (nums, target) => {
  const prefixSum = new Map();
  for (let num of nums) {
    if (prefixSum.has(num)) {
      return [prefixSum.get(num), num];
    } else {
      const op = target - num;
      prefixSum.set(op, num);
    }
  }
};

console.log(twoSums([2, 7, 11, 15], 9));
console.log(twoSums([3, 2, 4], 6));
console.log(twoSums([3, 3], 6));
