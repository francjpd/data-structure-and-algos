class TreeNode {
	constructor(val = null, left = 0, right = 0) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

const lowestCommonAncestor = (root, p, q) => {
	let cur = root;
	while (cur) {
		if (p.val < cur.val && q.val < cur.val) {
			cur = root.left;
		} else if (p.val > cur.val && q.val > cur.val) {
			cur = root.right;
		} else return cur;
	}
	return null;
};
