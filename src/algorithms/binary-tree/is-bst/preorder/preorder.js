/*
	Given an array we a preorder traversal of a binary tree,
	figure our if the traversal represents a Binary Search Tree.
*/
const isBST = (traversal) => {
	let i = 1;
	let stack = [traversal[0]];
	let root = -Infinity;
	while(i<traversal.length) {
		let curr = traversal[i++];
		if(curr < root) return false;
		while(stack.length && curr > stack[stack.length - 1]) {
			root = stack.pop();
		}
		stack.push(curr);
	}

	return true;
};

export default isBST;