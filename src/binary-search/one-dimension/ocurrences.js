const binarySearch = (arr, n, isFirst, x) => {
  let low = 0;
  let high = n - 1;
  let idx = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (x === arr[mid]) {
      idx = mid;
      isFirst ? (high = mid - 1) : (low = mid + 1);
    } else if (x > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return idx;
};
const occurrence = (arr, n, x) => {
  const first = binarySearch(arr, n, true, x);
  const last = binarySearch(arr, n, false, x);
  if (first === -1 || last === -1) {
    return 0;
  }
  return last - first + 1;
};

console.log(occurrence([1, 1, 2, 2, 2, 2, 3], 7, 4));
