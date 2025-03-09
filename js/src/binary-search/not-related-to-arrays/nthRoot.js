const nthRoot = (n, m) => {
  let l = 1;
  let r = m;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    let ans = Math.pow(mid, n);
    if (ans === m) return m;
    if (ans > m) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
};

console.log(nthRoot(2, 9));
console.log(nthRoot(3, 9));
console.log(nthRoot(3, 27));
