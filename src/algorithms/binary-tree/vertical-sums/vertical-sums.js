import Queue from '../../../data-structures/queue/queue';

const verticalSums = (root) => {
	let sums = {};
	let q = new Queue();
	q.enqueue({ node: root, vertical: 0});
	let minVert = 0;
	let vertCount = 0;

	while(q.size()) {
		let curr = q.dequeue();
		minVert = Math.min(curr.vertical, minVert);
		if(sums[curr.vertical] === void 0) {
			vertCount++;
			sums[curr.vertical] = 0;
		}
		sums[curr.vertical] += curr.node.value;
		if(curr.node.left) {
			q.enqueue({ node: curr.node.left, vertical: curr.vertical - 1})
		}

		if(curr.node.right) {
			q.enqueue({ node: curr.node.right, vertical: curr.vertical + 1})
		}
	}

	let sumArr = new Array(vertCount).fill(0);
	for(let i=0; i < vertCount; i++) {
		sumArr[i] = sums[i + minVert];
	}

	return sumArr;
};

export default verticalSums;
