class TreeNode {
	constructor(val = null, left = 0, right = 0) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}
const isBalanced = (root) => {
	const dfs = (current) => {
		if (!current) return [true, 0];

		const left = dfs(current.left);
		const right = dfs(current.right);

		const isBalanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;
		return [isBalanced, 1 + Math.max(left[1], right[1])];
	};

	return dfs(root)[0];
};
const root = new TreeNode(
	1,
	new TreeNode(2, new TreeNode(4, new TreeNode(7))),
	new TreeNode(3),
);

console.log(isBalanced(root));
