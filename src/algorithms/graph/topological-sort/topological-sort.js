const topSortRecursive = (V, visited, list) => {
	visited[V.key()] = true;
	V.edges.map((E) => {
		if(visited[E.end.key()]) return;
		topSortRecursive(E.end, visited, list);
	})
	list.push(V.key());
};

const reverseArray = (arr) => {
	let newArr = new Array(arr.length);
	arr.map((item, idx) => {
		newArr[arr.length - 1 - idx] = item;
	})
	return newArr;
};

const topologicalSort = (graph) => {

	let vertices = graph.getVertices();
	let visited = {};
	let list = [];

	vertices.map((V) => {
		if(visited[V.key()]) return;
		topSortRecursive(V, visited, list);
	});

	return reverseArray(list);
};

export default topologicalSort;