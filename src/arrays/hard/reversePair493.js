const merge = (nums, low, mid, high) => {
  let count = 0;
  let left = low;
  let right = mid + 1;
  const result = [];

  while (left <= mid && right <= high) {
    count = count * 2;
    if (nums[left] > nums[right] * 2) {
      count++;
    }
    if (nums[left] <= nums[right]) {
      result.push(nums[left]);
      left++;
    } else {
      result.push(nums[right]);
      right++;
    }
  }

  while (left < mid) {
    count = count * 2;
    result.push(nums[left]);
    left++;
  }

  while (right < high) {
    result.push(nums[right]);
    right++;
  }

  for (let i = low; i < high; i++) {
    nums[i] = result[i];
  }
  return count;
};
const mergeSort = (nums, low, high, max) => {
  let newMax = max;
  if (low >= high) return newMax;

  const mid = Math.floor((low + high) / 2);

  newMax += mergeSort(nums, low, mid, newMax);
  newMax += mergeSort(nums, mid + 1, high, newMax);
  newMax += merge(nums, low, mid, high);
  return newMax;
};

const reversePairs = (nums) => {
  return mergeSort(nums, 0, nums.length, 0);
};

console.log(reversePairs([1, 3, 2, 3, 1]));
