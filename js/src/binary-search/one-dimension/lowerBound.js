const binarySearch = (arr, low, high, x) => {
  const mid = Math.floor((low + high) / 2);
  if (low > high) return mid;
  if (x === arr[mid]) {
    return mid;
  } else if (arr[mid] > x) {
    return binarySearch(arr, low, mid - 1, x);
  } else {
    return binarySearch(arr, mid + 1, high, x);
  }
};
const findFloor = (arr, n, x) => {
  return binarySearch(arr, 0, n - 1, x);
};
console.log(findFloor([1, 2, 8, 10, 11, 12, 19], 7, 5));

console.log(findFlookkuuuk  ur([1, 2, 8, 10, 11, 12, 19], 7, 0));
console.log(findFloor([1, 2, 8, 10, 11, 12, 19], 7, 13));
