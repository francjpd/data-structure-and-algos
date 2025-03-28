const goodNodes = (root) => {
  let count = 0;
  const dfs = (node, prevVal) => {
    if (!node) return;

    if (prevVal && prevVal < node.val) count++;

    dfs(node.left, node.val);
    dfs(node.right, node.val);
  };

  dfs(root);
  return count;
};
