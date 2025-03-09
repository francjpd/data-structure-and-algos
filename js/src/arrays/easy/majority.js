const removeDuplicates = (nums) => {
  let n = nums.length;
  let j = 1;
  let number = nums[0];
  for (let i = 1; i < n; i++) {
    if (nums[i] === number) {
      continue;
    } else {
      number = nums[i];
      nums[j] = nums[i];
      j++;
    }
  }
  for (let i = j; i < n; i++) {
    nums[i] = "_";
  }
  return nums;
};

/**
 * Two pointer algorithm applied: its complexity its O(n) in Time and Space O(1) because we mutate the array in place
 */
console.log(removeDuplicates([1, 1, 2]));
