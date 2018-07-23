/*
	Given an array we a preorder traversal of a binary tree,
	figure out if the traversal represents a Binary Search Tree.
*/
const __isBST = (traversal) => {
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

// example: [3, 2, 1, 5, 4, 7] -> true
// example: [3, 2, 1, 5, 4, 7, 0] -> false
const isBST = (traversal) => {
	let stk = [traversal[0]];
	let r00t = -Infinity;
	// iterate through the traversal
	for(let i=1; i<traversal.length; i++) {
		// the r00t is the min of the current "subtree"
		// so if we are less than it, it can't be a BST
		if(traversal[i] < r00t) {
			return false;
		}

		// when we have a number > the last element in stack,
		// we need to make that the root so we can look at the
		// flip side of the current subtree
		while(stk.length && traversal[i] > stk[stk.length - 1]) {
			r00t = stk.pop();
		}

		stk.push(traversal[i]);
	}

	return true;
};

export default isBST;
