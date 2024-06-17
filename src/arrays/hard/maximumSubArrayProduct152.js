const maxSubArray = (nums) => {
  let best = Number.NEGATIVE_INFINITY;
  let prefix = 1;
  let suffix = 1;
  for (let i = 0; i < nums.length; i++) {
    if (prefix === 0) prefix = 1;
    if (suffix === 0) suffix = 1;
    suffix = suffix * nums[nums.length - i - 1];
    prefix = prefix * nums[i];
    best = Math.max(best, prefix, suffix);
  }
  return best;
};

console.log(maxSubArray([2, 3, -2, 4]));

console.log(maxSubArray([-2, 0, -1]));

console.log(maxSubArray([-2, -3, 2, -1]));

console.log(maxSubArray([-2, -3, -2, -8]));

console.log(maxSubArray([1, 2, 3, 4, 5, 0]));

console.log(maxSubArray([1, 2, -3, 0, -4, -5]));

console.log(maxSubArray([0, 2]));

console.log(maxSubArray([3, -1, 4]));

/**
Cases:
1. All the positive numbers to count them: ie.[1,2,3,4]
2. Pair of negatives numbers. ie. [1,-3,5,6,-7]
3. What about 0?  In this case we need to restart the count. ie. [1,4,5,0, 7, 5,-2 ,1, 0, 8, 2,4,5, 0]
4. odd negatives [1,2,-1, 4,5 ,6 ,-3 ,2 ,4,1 -5 3]

case -1
prefix = [1,2]
suffix = [4,5,6,-3,2,4,1,-5,3] = good

case -3
prefix = [1,2,-1,4,5,6,-3] = bad
suffix = [2,4,1,-5,3] = bad

case -5
prefix = [1,2,-1,4,5,6,-3,2,4,1] good
suffix = [3]
*
* The Time complexity its O(n) while the Space one its O(1)
*
**/
