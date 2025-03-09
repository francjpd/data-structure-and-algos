const max = (nums, k) => {
  let maxLength = 0;
  let l = 0;
  let currentZ = 0;
  nums.forEach((num, r) => {
    if (num === 0) {
      currentZ++;
    }
    while (currentZ > k) {
      if (nums[l] === 0) {
        currentZ--;
      }
      l++;
    }
    const currentLength = r - l + 1;
    maxLength = Math.max(maxLength, currentLength);
  });
  return maxLength;
};

console.log(max([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
