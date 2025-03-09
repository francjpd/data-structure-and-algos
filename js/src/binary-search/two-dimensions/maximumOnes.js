const maximum = (arr, n, m) => {
  let max = 0;
  let index = -1;
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 1) {
        if (++count === m) {
          return i;
        }
      }
    }
    if (count > max) {
      max = count;
      index = i;
    }
  }
  return index;
};

const maximumBs = (arr, n, m) => {
  let max = -1;
  for (let i = 0; i < n; i++) {
    let l = 0;
    let h = m;
    let count = 0;
    while (l < h) {
      let mid = Math.floor((l + h) / 2);
      if (arr[i][mid] === 1) {
        count += h - mid;
        h = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    if (count > 0) {
      count++;
    }
    if (count === m) return i;
    else {
      max = Math.max(max, count);
    }
  }
  return max;
};

console.log(
  maximumBs(
    [
      [0, 1, 1, 1],
      [0, 0, 1, 1],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
    ],
    4,
    4,
  ),
);
