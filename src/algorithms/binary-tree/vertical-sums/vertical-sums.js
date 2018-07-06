const verticalSums = (root) => {

	let leftCount = 0;
	let node = root;
	while(node.left) {
		node = node.left;
		leftCount++;
	}

	let rightCount = 0;
	node = root;
	while(node.right) {
		node = node.right;
		rightCount++;
	}

	let sums = new Array(leftCount + rightCount + 1).fill(0);
	let q = [{ node: root, vertical: leftCount}];

	while(q.length) {
		let curr = q.shift();
		if(sums[curr.vertical] === void 0) {
			sums[curr.vertical] = 0;
		}
		sums[curr.vertical] += curr.node.value;
		if(curr.node.left) {
			q.push({ node: curr.node.left, vertical: curr.vertical - 1})
		}

		if(curr.node.right) {
			q.push({ node: curr.node.right, vertical: curr.vertical + 1})
		}
	}

	return sums;

};

export default verticalSums;
