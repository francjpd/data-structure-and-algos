const rightSideViewDfs = (root) => {
  const response = [];

  const dfs = (node, level = 0) => {
    if (!node) return;

    if (response.length === level) response.push(node.val);

    if (node.right) {
      dfs(node.left, level + 1);
    }
    if (node.left) {
      dfs(node.right, level + 1);
    }
  };

  dfs(root, 0);
  return response;
};
