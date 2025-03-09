const singleElement = (nums) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let leftNum = nums[left];
    let nextLeftNum = nums[left + 1];

    let rightNum = nums[right];
    let previousRightNum = nums[right - 1];

    let mid = Math.floor((left + right) / 2);
    let midNum = nums[mid];
    let previousMidNum = nums[mid - 1];
    let nextMidNum = nums[mid + 1];

    if (leftNum != nextLeftNum) {
      return leftNum;
    } else {
      left = left + 2;
    }

    if (rightNum != previousRightNum) {
      return rightNum;
    } else {
      right = right - 2;
    }

    if (midNum != previousMidNum && midNum != nextMidNum) {
      return midNum;
    } else if (midNum === previousMidNum) {
      mid = mid - 2;
    } else if (midNum === nextMidNum) {
      mid = mid + 2;
    }
  }
};

const singleElementElegant = (nums) => {
  if (nums.length === 1) return nums[0];
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (
      (mid - 1 < 0 || nums[mid] != nums[mid - 1]) &&
      (mid + 1 === nums.length || nums[mid] != nums[mid + 1])
    ) {
      return nums[mid];
    }
    let leftSize = nums[mid - 1] === nums[mid] ? mid - 1 : mid;
    if (leftSize % 2 !== 1) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
};

console.log(singleElementElegant([1, 1, 2, 3, 3, 4, 4, 8, 8]));

console.log(singleElementElegant([3, 3, 7, 7, 10, 11, 11]));

console.log(singleElementElegant([7, 7, 10, 11, 11, 12, 12]));
console.log(singleElementElegant([1, 1, 2, 3, 3, 4, 4, 8, 8]));
