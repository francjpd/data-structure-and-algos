const triplet = (nums) => {
  const prefixSum = new Set();
  const result = new Set();
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let k = -(nums[i] + nums[j]);
      if (prefixSum.has(k)) {
        const tripletToAdd = [k, nums[i], nums[j]]
          .sort((a, b) => a - b)
          .toString();
        result.add(tripletToAdd);
      }
      prefixSum.add(nums[j]);
    }
  }
  return Array.from(result).map((value) => value.split(",").map(Number));
};

const tripletPointer = (nums) => {
  const n = nums.length;
  const result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n - 1; i++) {
    if (i != 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let j = i + 1;
    let k = n - 1;
    while (j < k) {
      let operation = nums[i] + nums[j] + nums[k];
      if (operation === 0) {
        result.push(nums[i], nums[j], nums[k]);
        j++;
        k--;
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
      } else if (operation < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return result;
};

console.log(tripletPointer([-1, 1, 0]));
