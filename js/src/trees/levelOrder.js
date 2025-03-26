const levelOrder = (root) => {
	if (!root) return [];
	const res = [];
	const queue = [root];
	while (queue.length) {
		const level = [];
		const queueSize = queue.length;
		for (let i = 0; i < queueSize; i++) {
			const current = queue.shift();
			level.push(current.val);
			if (current.left) queue.push(current.left);
			if (current.right) queue.push(current.right);
		}
		res.push(level);
	}
	return res;
};
