// [4,5,6,7,0,1,2]
const searchRotated = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }

    if (nums[left] <= nums[mid]) {
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
  return -1;
};

console.log(searchRotated([4, 5, 6, 7, 0, 1, 2], 0));

console.log(searchRotated([4, 5, 6, 7, 0, 1, 2], 3));
