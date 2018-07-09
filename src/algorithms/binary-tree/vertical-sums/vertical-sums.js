const verticalSums = (root) => {
	let sums = {};
	let q = [{ node: root, vertical: 0}];
	let minVert = 0;
	let vertCount = 0;

	while(q.length) {
		let curr = q.shift();
		minVert = Math.min(curr.vertical, minVert);
		if(sums[curr.vertical] === void 0) {
			vertCount++;
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

	let sumArr = new Array(vertCount).fill(0);
	for(let i=0; i < vertCount; i++) {
		sumArr[i] = sums[i + minVert];
	}

	return sumArr;
};

export default verticalSums;
