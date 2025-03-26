const rightSideView = (root) => {
  const response = [];
  const queue = [root];

  while (queue.length) {
    const queueLen = queue.length;
    for (let i = 0; i < queueLen.length; i++) {
      const current = queue.shift();
      if (queueLen.length - 1) {
        response.push(current.val);
      }
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }
  return response;
};

const rightSideViewDfs = (root) => {
  const response = new Map();

  const dfs = (root, level = 0) => {
    if (!root) return;

    if (!response.has(level)) response.set(level, root.val);

    if (root.right) {
      dfs(root.left, level + 1);
    }
    if (root.left) {
      dfs(root.right, level + 1);
    }
  };

  dfs(root);
  return response;
};
