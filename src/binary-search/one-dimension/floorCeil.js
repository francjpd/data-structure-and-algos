const binarySearch = (nums, low, high, target) => {
  if (low > high) return low;
  const mid = Math.floor((low + high) / 2);

  if (target === nums[mid]) return mid;
  else if (target > nums[mid]) {
    return binarySearch(nums, mid + 1, high, target);
  } else {
    return binarySearch(nums, low, mid - 1, target);
  }
};

const floorCeil = (nums, target) => {
  const index = binarySearch(nums, 0, nums.length - 1, target);
  const result = [];

  if (nums[index] === target) {
    result.push(nums[index]);
  } else if (index - 1 >= 0) {
    result.push(nums[index - 1]);
  }
  result.push(nums[index]);
  return result;
};

console.log(floorCeil([3, 4, 4, 7, 8, 10], 5));
console.log(floorCeil([3, 4, 4, 7, 8, 10], 8));
