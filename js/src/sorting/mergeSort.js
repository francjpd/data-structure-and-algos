const conquer = (arr, low, mid, high) => {
  const temp = [];
  let left = low;
  let right = mid + 1;

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }

  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }
  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
};

const divide = (arr, low, high) => {
  if (low >= high) return;

  const mid = Math.floor((low + high) / 2);

  console.log(mid);
  divide(arr, low, mid);
  divide(arr, mid + 1, high);

  conquer(arr, low, mid, high);
  return arr;
};

const mergeSort = (arr) => {
  return divide(arr, 0, arr.length - 1);
};

console.log(mergeSortMutate([1, 11, 7, 9, 12, 3, 7, 9, 0]));
