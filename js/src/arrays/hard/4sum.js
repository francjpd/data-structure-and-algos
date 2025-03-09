const quadruplets = (nums, target) => {
  const result = [];
  nums.sort((a, b) => a - b);
  for (let a = 0; a < nums.length; a++) {
    if (a > 0 && nums[a] === nums[a - 1]) continue;
    for (let b = a + 1; b < nums.length; b++) {
      if (b != a + 1 && nums[b] === nums[b - 1]) continue;
      let c = b + 1;
      let d = nums.length - 1;
      while (c < d) {
        let possibility = nums[a] + nums[b] + nums[c] + nums[d];
        if (possibility === target) {
          result.push(
            [nums[a], nums[b], nums[c], nums[d]].sort((a, b) => a - b),
          );
          c++;
          d--;
          while (c < d && nums[c] === nums[c - 1]) c++;
          while (c < d && nums[d] === nums[c + 1]) d++;
        } else if (possibility < target) {
          c++;
        } else {
          d--;
        }
      }
    }
  }
  return result;
};
console.log(quadruplets([1, 0, -1, 0, -2, 2], 0));

/**
 *
 *   a  b  c        d
 *   0  1  2  3  4  5
 *   1  0 -1  0 -2  2
 *
 *  sorted
 *   a     b  c     d
 *   0  1  2  3  4  5
 *  -2 -1  0  0  1  2
 *
 *
 *
 *
 *  Target = 0
 *
 *
 **/
