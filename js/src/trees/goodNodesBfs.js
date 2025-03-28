const goodNodes = (root) => {
  if (!root) {
    return 0;
  }
  const queue = [[root, root.val]];
  let count = 0;
  while (queue.length) {
    const [current, maxVal] = queue.shift();

    if (maxVal >= current) count++;
    if (current.left) {
      queue.push([current.left, Math.max(maxVal, current.val)]);
    }
    if (current.right) {
      queue.push([current.right, Math.max(maxVal, current.val)]);
    }
  }

  return count;
};
