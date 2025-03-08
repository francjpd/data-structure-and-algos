class TreeNode {
	constructor(val = null, left = 0, right = 0) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}
const diameterOfBinaryTree = (root) => {
	let res = 0;
	const dfs = (current) => {
		if (!current) return 0;
		const left = dfs(current.left);
		const right = dfs(current.right);

		res = Math.max(res, left + right);
		return 1 + Math.max(left + right);
	};

	dfs(root);
	return res;
};

const root = new TreeNode(
	1,
	new TreeNode(2, new TreeNode(4, new TreeNode(7))),
	new TreeNode(3),
);
// console.log(diameterOfBinaryTree(root));

const diameter = (root) => {
	let total = 0;
	const dfs = (current) => {
		if (!current) return 0;

		const left = dfs(current.left);
		const right = dfs(current.right);

		total = Math.max(total, left + right);
		return 1 + Math.max(left + right);
	};

	dfs(root);
	return total;
};

console.log(diameter(root));
