/**
 * Example 1:

Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true
Example 2:

Input: nums = [2,5,6,0,0,1,2], target = 3
Output: false

 **/

const searchRotated = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return true;
    }
    if (nums[left] === target || nums[right] === target) {
      return true;
    } else if (nums[left] === nums[right]) {
      left++;
      right--;
    } else if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] <= target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return false;
};

console.log(searchRotated([1, 0, 1, 1, 1], 0));
console.log(searchRotated([7, 8, 1, 2, 3, 3, 3, 4, 5, 6], 10));

console.log(searchRotated([7, 8, 1, 2, 3, 3, 3, 4, 5, 6], 8));
console.log(searchRotated([7, 8, 1, 2, 3, 3, 3, 4, 5, 6], 5));

console.log(
  searchRotated(
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 13, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    13,
  ),
);

console.log(
  searchRotated(
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 13, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    13,
  ),
);

console.log(searchRotated([4, 5, 6, 7, 0, 1, 2], 0));
