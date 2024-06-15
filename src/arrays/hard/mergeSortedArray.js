/**
 *
 *
 * Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.


Constraints:

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[j] <= 109


Follow up: Can you come up with an algorithm that runs in O(m + n) time?
--------------
 **/

const mergeSortedArrays = (nums1, nums2) => {
  let j = 0;
  let k = 0;
  const result = [];
  while (result.length < nums1.length) {
    if (nums1[j] === 0) {
      result.push(nums2[k]);
      k++;
      j++;
    } else if (nums1[j] < nums2[k]) {
      result.push(nums1[j]);
      j++;
    } else if (nums1[j] > nums2[k]) {
      result.push(nums2[k]);
      k++;
    } else if (nums1[j] === nums2[k]) {
      result.push(nums1[j]);
      result.push(nums1[j]);
      j++;
      k++;
    } else if (k <= result.length) {
      result.push(nums1[j]);
      j++;
    }
  }
  return result;
};

// Still left to do the merge sort algo

const merge = (nums1, nums2) => {
  if (!nums2.length) {
    return nums1;
  }
  const result = [];
  let left = 0;
  let right = 0;
  let mid = nums1.length - nums2.length;
  while (left <= mid - 1 && right <= nums2.length - 1) {
    if (nums1[left] < nums2[right]) {
      result.push(nums1[left]);
      left++;
    } else {
      result.push(nums2[right]);
      right++;
    }
  }
  while (left < mid) {
    result.push(nums1[left]);
    left++;
  }

  while (right < nums2.length) {
    result.push(nums2[right]);
    right++;
  }

  for (let i = 0; i < result.length; i++) {
    nums1[i] = result[i];
  }

  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], [2, 5, 6]));
//console.log(mergeSortedArrays([1, 4, 8, 10, 0, 0, 0], [2, 3, 9]));
console.log(merge([2, 0], [1]));

console.log(merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], [1, 2, 2]));
