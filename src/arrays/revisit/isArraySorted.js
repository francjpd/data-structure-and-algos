const isArraySorted = (nums) => {
  let i = 0;
  let j = -1;
  // Lets find if there is any 0
  while (i < nums.length && nums[i] !== 0) {
    i++;
    j = i;
  }
  if (nums[i] === -1) return nums;

  for (let j = i + 1; j < nums.length; j++) {
    if (nums[j] !== 0) {
      [nums[j], nums[i]] = [nums[i], nums[j]];
      i++;
    }
  }
  return nums;
};
console.log(isArraySorted([1, 0, 3, 4, 5]));
console.log(isArraySorted([0, 0, 3, 4, 5]));
console.log(isArraySorted([1, 0, 3, 0, 5]));
console.log(isArraySorted([1, 2, 3, 4, 5]));
console.log(isArraySorted([1, 0, 3, 4, 5]));
