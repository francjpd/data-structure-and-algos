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
/**
 *
 * Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
 * 4HupcoastN?
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
**/
