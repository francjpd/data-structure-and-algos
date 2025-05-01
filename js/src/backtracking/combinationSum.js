const combinationSum = (candidates, target) => {
  const result = [];
  const backtracking = (index, currentSum, sum) => {
    if (sum === target) {
      result.push([...currentSum]);
      return;
    }
    if (sum > target || index >= candidates.length) {
      return;
    }
    backtracking(
      index,
      [...currentSum, candidates[index]],
      sum + candidates[index],
    );
    backtracking(index + 1, currentSum, sum);
  };

  backtracking(0, [], 0);
  return result;
};
