const leftRight = (bloomDay) => {
  let l = Number.POSITIVE_INFINITY;
  let r = Number.NEGATIVE_INFINITY;
  let n = bloomDay.length - 1;
  for (let i = 0; i <= Math.floor(bloomDay.length / 2); i++) {
    r = Math.max(r, bloomDay[i], bloomDay[n]);
    l = Math.min(l, bloomDay[i], bloomDay[n]);
    n--;
  }
  return [l, r];
};

const fillFlowers = (bloomDay, target, k, m) => {
  let count = k;
  let total = 0;
  bloomDay.forEach((day) => {
    if (day <= target) {
      count--;
      if (count === 0) {
        total++;
        if (total === m) {
          return total;
        }
        count = k;
      }
    } else {
      count = k;
    }
  });
  return total;
};

const minimum = (bloomDay, m, k) => {
  if (m * k > bloomDay.length) return -1;

  let [l, r] = leftRight(bloomDay);

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    let total = fillFlowers(bloomDay, mid, k, m);
    if (total >= m) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return l;
};

console.log(minimum([1, 10, 3, 11, 2], 3, 1));
console.log(minimum([7, 7, 7, 7, 12, 7, 7], 2, 3));
