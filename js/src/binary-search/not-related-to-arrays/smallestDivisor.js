const divideAndSum = (nums, x) =>
  nums.reduce((total, num) => {
    let division = Math.ceil(num / x);
    return total + division;
  }, 0);

const smallestDivisor = (nums, threshold) => {
  let l = 1;
  let h = Math.max(...nums);
  while (l <= h) {
    let m = Math.floor((l + h) / 2);

    if (divideAndSum(nums, m) <= threshold) {
      h = m - 1;
    } else {
      l = m + 1;
    }
  }
  return l;
};

console.log(smallestDivisor([1, 2, 5, 9], 6));
console.log(smallestDivisor([44, 22, 33, 11, 1], 5));
