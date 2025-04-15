const subsets = (nums) => {
  const res = [];
  const sub = [];
  const dfs = (index) => {
    if (index === nums.length) {
      res.push(...sub);
      return;
    }
    sub.push(nums[index]);
    dfs(index + 1);

    sub.pop();
    dfs(index + 1);
    return;
  };
  return dfs(0);
};
