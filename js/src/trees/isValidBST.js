const isValidBST = (root) => {
  const dfs = (node, low, high) => {
    if (!node) return true;
    if (node.val <= low || node.val >= high) return false;
    return dfs(node.left, low, node.val) && dfs(node.right, node.val, high);
  };

  return dfs(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
};
