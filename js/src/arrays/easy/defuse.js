const defuse = (nums, k) => {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (k === 0) {
      res.push(0);
    } else {
      let count = 0;
      let sum = 0;
      while (count <= Math.abs(k)) {
        if (k > 0) {
          sum += nums[i + ((count + 1) % nums.length)];
        } else if (k < 0) {
          sum += nums[i - (count + (1 % nums.length))];
        }
        res.push(sum);
        count++;
      }
    }
  }
};
