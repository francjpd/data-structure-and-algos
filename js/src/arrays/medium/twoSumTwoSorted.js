const twoSumsTwoPointer = (nums, target) => {
  let l = 0;
  let r = nums.length - 1;

  let total = nums[l] + nums[r];

  while (l < r && target !== total) {
    if (total < target) {
      l++;
    } else if (total > target) {
      r--;
    }
    total = nums[l] + nums[r];
  }
  return [nums[l], nums[r]];
};
console.log(twoSumsTwoPointer([2, 7, 11, 15], 9));
console.log(twoSumsTwoPointer([3, 2, 4], 6));
console.log(twoSumsTwoPointer([3, 3], 6));

const twoSumsBS = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    const tmp = target - nums[i];
    l = 0;
    r = nums.length - 1;
    while (l <= r) {
      mid = Math.floor((r-l) / 2);
      if (nums[mid] === tmp){
        return ( [ i+1, mid+1] )
      } else if (nums[mid] < tmp){
        l = mid+1
      } else {
          r = mid -1
       }
      }
    }
  }
};
