/**
 ***
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class TreeNode {
	constructor(val = 0, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}
const invert = (root) => {
	if (!root) return root;
	const temp = root.left;
	root.left = root.right;
	root.right = temp;
	invert(root.left);
	invert(root.right);
	return root;
};

const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));

console.log(root);

console.log(invert(root));
