const search = (target, nums, low, high) => {
  if (low > high) {
    return -1;
  }
  const mid = Math.floor((low + high) / 2);
  if (target === nums[mid]) {
    return mid;
  } else if (target > nums[mid]) {
    return search(target, nums, mid + 1, high);
  } else {
    return search(target, nums, 0, mid - 1);
  }
};
const binarySearch = (nums, target) => {
  return search(target, nums, 0, nums.length);
};

console.log(binarySearch([3, 4, 6, 7, 9, 12, 16, 17], 6));
console.log(binarySearch([3, 4, 6, 7, 9, 12, 16, 17], 17));
console.log(binarySearch([3, 4, 6, 7, 9, 12, 16, 17], 12));
console.log(binarySearch([3, 4, 6, 7, 9, 12, 16, 17], 312));
