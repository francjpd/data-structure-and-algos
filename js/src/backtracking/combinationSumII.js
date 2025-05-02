const combinationSum2 = function (candidates, target) {
  const result = [];
  candidates.sort((a, b) => a - b);

  const backtracking = (index, curSum, total) => {
    if (total === 0) {
      result.push([...curSum]);
      return;
    }
    if (total < 0 || index >= candidates.length) {
      return;
    }

    backtracking(
      index + 1,
      [...curSum, candidates[index]],
      total - candidates[index],
    );
    while (
      index + 1 < candidates.length &&
      candidates[index] === candidates[index + 1]
    )
      index++;
    backtracking(index + 1, [...curSum], total);
  };

  backtracking(0, [], target);
  return result;
};
