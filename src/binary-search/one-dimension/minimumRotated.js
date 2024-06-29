const rotated = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  let min = Number.MAX_VALUE;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    min = Math.min(min, nums[mid], nums[left], nums[right]);
    if (nums[left] > nums[mid] && nums[left] > nums[right]) {
      left++;
    } else if (nums[right] > nums[mid] && nums[right] > nums[left]) {
      right--;
    } else if (nums[left] < nums[right]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return min;
};

console.log(rotated([4, 5, 6, 7, 0, 1, 2]));

console.log(rotated([11, 13, 15, 17]));

console.log(rotated([3, 4, 5, 1, 2]));

console.log(rotated([2, 1]));

console.log(rotated([3, 1, 2]));

console.log(rotated([5, 1, 2, 3, 4]));
