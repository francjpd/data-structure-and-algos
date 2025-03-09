const merge = (nums, low, mid, high) => {
  let left = low;
  let right = mid + 1;
  const result = [];

  while (left <= mid && right <= high) {
    if (nums[left] <= nums[right]) {
      result.push(nums[left]);
      left++;
    } else {
      result.push(nums[right]);
      right++;
    }
  }

  while (left <= mid) {
    result.push(nums[left]);
    left++;
  }

  while (right <= high) {
    result.push(nums[right]);
    right++;
  }

  for (let i = low; i <= high; i++) {
    nums[i] = result[i - low];
  }
};

const countPairs = (nums, low, mid, high) => {
  let right = mid + 1;
  let count = 0;

  for (let i = low; i <= mid; i++) {
    while (right <= high && nums[i] > 2 * nums[right]) right++;
    count += right - (mid + 1);
  }
  return count;
};

const mergeSort = (nums, low, high) => {
  let count = 0;
  if (low >= high) return count;

  const mid = Math.floor((low + high) / 2);

  count += mergeSort(nums, low, mid);
  count += mergeSort(nums, mid + 1, high);
  count += countPairs(nums, low, mid, high);
  merge(nums, low, mid, high);
  return count;
};

const reversePairs = (nums) => {
  return mergeSort(nums, 0, nums.length - 1);
};

// console.log(reversePairs([1, 3, 2, 3, 1]));

console.log(reversePairs([2, 4, 3, 5, 1]));

console.log(
  reversePairs([
    2147483647, 2147483647, -2147483647, -2147483647, -2147483647, 2147483647,
  ]),
);
