/**
 *
 * Given an array having both positive and negative integers. The task is to compute the length of the largest subarray with sum 0.
 * Example 1:
 *
 * Input:
 * N = 8
 * A[] = {15,-2,2,-8,1,7,10,23}
 * Output: 5
 * Explanation: The largest subarray with
 * sum 0 will be -2 2 -8 1 7.
 * Your Task:
 * You just have to complete the function maxLen() which takes two arguments an array A and n, where n is the size of the array A and returns the length of the largest subarray with 0 sum.
 *
 * Expected Time Complexity: O(N).
 * Expected Auxiliary Space: O(N).
 * */
const maxLen = (arr, n) => {
  const prefixSum = new Map();
  let sum = 0;
  let max = arr[0] === 0 ? 1 : 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    if (sum === 0) {
      max = i + 1;
    }
    if (prefixSum.has(sum)) {
      let j = prefixSum.get(sum);
      max = Math.max(max, i - j);
    } else {
      prefixSum.set(sum, i);
    }
  }
  return max;
};

const testCase = [
  84, -776, 794, 387, -648, 363, 691, 764, -539, -171, -210, -566, 783, -861,
  68, 930, -21, -68, 394, -10, -228, 422, 785, 199, -314, -412, -90, -955, 863,
  -995, 306, 85, 337, 847, 314, 125, 583, 815, 435, -42, -86, -275, -787, -402,
  755, 933, -675, -738, -225, -93, 796, -433, -466, 98, -316, -651, -300, -285,
  866, 445, 441, 32, 98, 482, 710, 568, -496, 587, 307, 220, -527, 733, 504,
  271, -707, 341, 797, 619, 847, 922, 380, -763, -840, -192, -33,
];

console.log(maxLen([15, -2, 2, -8, 1, 7, 10, 23], 8));

/**
 *    I think wecan solve this by using the prefixSum algo
 *
 *
 *    n = 8
 *    i   j
 *    max = 2
 *    0   1   2   3  4  5  6   7
 *   [15, -2, 2, -8, 1, 7, 10 ,23]
 *
 *   15, 0 1
 *   13, 1 2
 *   15, 2 2
 *   7,  3 4
 *   8,  4 5
 *   15, 5 6
 *   25, 6
 *   48, 7
 *
 *
 *  6, array[] = {9, -3, 3, -1, 6, -5}
 *
 *
 * max =
 *  count = 0
 *
 *  9, 0      1
 *  6, 1      2
 *  9, 2      3     0     max = count
 *  8, 3
 * 14, 4
 * 9,  5            3   i
 *
 *
 *
 * {6, -2, 2, -8, 1, 7, 4, 3}
 *
 *
 * sum
 *maxLength  =  i - valueFromMap 0
 *
 *   6, 0
 *
 *   4, 1
 *             maxlength = 2
 *   6, 2      2 - 0  = 2
 *
 *  -2, 3
 *
 *  -1, 4
 *
 *   6, 5       maxLength = 5 - 0 = 5
 *
 *  10, 6
 *
 *  13, 7
 *
 *
 *
 *   {1, 0, -5}
 *
 *
 *   1, 0
 *
 *   1, 1             1
 *
 *   -4, 2
 *
 *
 *
 * {1, 3, -5, 6, -2}
 *
 *
 *
 *    1, 0
 *    4, 1
 *   -1, 2
 *    5, 3
 *    3, 4
 *
 */
