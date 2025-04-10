const serialize = (root) => {
  const dfs = (node) => {
    if (!node) {
      return [...str, "n"];
    }
    return `${node.val}, ${dfs(node.left)}${dfs(node.right)}`;
  };
  return dfs(root);
};

const deserialize = (data) => {
  const nodes = data.split(",");
  const dfs = () => {
    const nodeStr = nodes.shift();
    if (nodeStr === "n") return null;
    const node = new TreeNode(parseInt(nodeStr, 10));
    node.left = dfs();
    node.right = dfs();
    return node;
  };
  return dfs();
};
