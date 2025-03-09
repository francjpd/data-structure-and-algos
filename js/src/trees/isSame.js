const isSame = (root) => {
	const dfs = (a, b) => {
		if (!a && !b) return true;
		if (!a || !b) return false;
		if (a.val !== b.val) return false;

		const left = dfs(a.left, b.left);
		const right = dfs(b, left, b.left);

		return left && right;
	};

	return dfs(a, b);
};
