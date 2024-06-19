const binarySearch = (nums, low, high, target) => {
  if (low > high) return low;
  const mid = Math.floor((low + high) / 2);

  if (nums[mid] === target) return mid;
  else if (nums[mid] > target) {
    return binarySearch(nums, low, mid - 1, target);
  } else {
    return binarySearch(nums, mid + 1, high, target);
  }
};

const searchInsert = (nums, target) => {
  return binarySearch(nums, 0, nums.length - 1, target);
};

console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 5));

//  0,1,2,3
// [1,3,5,6]   7
// 1st iteration:
// mid = 1
// [5,6]
// 2nd iteration]
// 1 > 3? no
// mid= 2
// 5 === 7 ? no
// 5 > 7 ? no
// 2,3
