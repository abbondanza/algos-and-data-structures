import isBST from './preorder';

test('isBST() - should be tru', () => {
	/*
			5
		   / \	
		  3   6
		 / \   \
		2	4   9
	*/

	let preOrderTraversal = [5, 3, 2, 4, 6, 9];
	expect(isBST(preOrderTraversal)).toBe(true);
});

test('isBST() - should be false', () => {
	/*
			5
		   / \	
		  3   6
		 / \   \
		2	4   9
		       /
		      1
	*/

	let preOrderTraversal = [5, 3, 2, 4, 6, 9, 1];
	expect(isBST(preOrderTraversal)).toBe(false);
});