class TreeNode {
	constructor(val = null, left = 0, right = 0) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}
const isSameTree = (root, subRoot) => {
	if (!root && !subRoot) return true;
	if (root && subRoot && root.val === subRoot.val) {
		return (
			isSameTree(root.left, subRoot.left) &&
			isSameTree(root.right, subRoot.right)
		);
	}
	return false;
};
const isSubtree = (root, subRoot) => {
	if (!subRoot) return true;
	if (!root) return false;
	if (isSameTree(root, subRoot)) {
		return true;
	}
	return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

const root = new TreeNode(
	3,
	new TreeNode(4, new TreeNode(1), new TreeNode(2)),
	new TreeNode(5),
);

const subRoot = new TreeNode(4, new TreeNode(1), new TreeNode(2));

console.log(isSubtree(root, subRoot));
