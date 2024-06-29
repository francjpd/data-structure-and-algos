const sqrtRoot = (num) => {
  let l = 1;
  let r = num;
  let ans = 1;

  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (m * m > num) {
      r = m - 1;
    } else {
      ans = m;
      l = m + 1;
    }
  }
  return ans;
};

console.log(sqrtRoot(25));
console.log(sqrtRoot(28));
console.log(sqrtRoot(36));
