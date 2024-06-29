const binarySearch = (nums, low, high, target) => {
  if (low > high) return -1;
  const mid = Math.floor((low + high) / 2);

  if (target === nums[mid]) return mid;
  else if (target > nums[mid]) {
    return binarySearch(nums, mid + 1, high, target);
  } else {
    return binarySearch(nums, low, mid - 1, target);
  }
};
// the problem with this solution is that even tho we did a binary search which is a log(n) we then  uses a linear loop to find the first and last occurence, hence , we convert the log(n) into a O(n)
const firstAndLast = (nums, target) => {
  const index = binarySearch(nums, 0, nums.length - 1, target);
  if (index === -1) {
    return [index, index];
  }
  let first = index;
  while (first > 0 && nums[first - 1] === target) first--;

  let last = index;
  while (last < nums.length - 1 && nums[last + 1] === target) last++;
  return [first, last];
};

/**
 * I decided to change the implementation as it's really common to use a while loop when using binary Search.
 * Now this is a much better approach as we do use binarySearch twice to find the first and the last element.
 **/
const binarySearchOptimized = (nums, findFirst, target) => {
  let idx = -1;
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (target === nums[mid]) {
      idx = mid;
      if (findFirst) high = mid - 1;
      else low = mid + 1;
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return idx;
};
const firstAndLastOptimized = (nums, target) => {
  const first = binarySearchOptimized(nums, true, target);
  const last = binarySearchOptimized(nums, false, target);
  return [first, last];
};

console.log(firstAndLastOptimized([5, 7, 7, 8, 8, 10], 8));
console.log(firstAndLastOptimized([5, 7, 7, 8, 8, 10], 6));
console.log(firstAndLastOptimized([5, 7, 7, 7, 8, 8, 10], 7));
